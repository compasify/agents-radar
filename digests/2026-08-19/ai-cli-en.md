# AI CLI Tools Community Digest 2026-08-19

> Generated: 2026-08-18 23:11 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/earendil-works/pi)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [CodeWhale](https://github.com/Hmbown/CodeWhale)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report: AI CLI Coding Agents
**Date: 2026-08-19 · Sources: community digests for 9 tools**

## 1. Ecosystem Overview

The AI CLI landscape is maturing from single-shot assistants into long-running agentic systems, with most major tools shipping releases or sustaining heavy community engagement in the same 24-hour window. Mature players (Claude Code, Copilot CLI, Codex) are concentrating on enterprise reliability — compliance, sandbox policy, cache economics — while challengers (Qwen Code, Gemini CLI, Pi, OpenCode) race ahead on multi-agent coordination, provider flexibility, and session continuity. The dominant cross-cutting concern is **cost**: token-consumption and billing-transparency issues drew the highest engagement across nearly every community. At the same time, Windows/desktop reliability gaps and MCP process lifecycle bugs remain the industry's weakest points, generating regression reports in six of nine tools.

## 2. Activity Comparison

Counts reflect issues, PRs, and discussions highlighted in each project's 2026-08-19 digest; actual GitHub activity may be higher.

| Tool | Hot Issues (24h) | PRs (24h) | Discussions (24h) | Release status (24h) |
|---|---|---|---|---|
| Claude Code | 10 | 2 | 0 | ✅ v2.1.235 |
| OpenAI Codex | 10 | 10 | 2 | ✅ rust-v0.148.0 (+2 alphas) |
| Gemini CLI | 10 | 10 | 0 | ✅ v0.56.0-nightly |
| GitHub Copilot CLI | 10 | 1 (off-topic) | 0 | ✅ v1.0.81-1 |
| OpenCode | 10 | 10 | 1 | ⬜ No release |
| Pi | 10 | 10 | 2 | ⬜ No release |
| Qwen Code | 10 | 10 | 0 | ✅ nightly v0.21.11 + benchmark runs |
| CodeWhale | 9 | 26 (10 highlighted) | 1 | ✅ v0.9.9 |
| DeepSeek Harness | 0 | 0 | 0 | ⬜ No activity |

**Notes:** DeepSeek Harness reported no activity; the digest gives no indication of disabled Issues/PRs, so it is listed as inactive rather than N/A. Copilot CLI's only PR (#3163) is off-topic — no substantive code progress was reported. CodeWhale updated 26 PRs; the digest highlighted 10.

## 3. Shared Feature Directions

- **Token efficiency & usage transparency** *(all tools)* — Codex #14593 (630 comments, 285 👍, the largest issue in any repo); OpenCode #42985 (Go quota 4× displayed cost); Claude Code #87137 (prompt-cache invalidation); Pi #8285 (fallback cost mispriced); CodeWhale #1473 (~3× token burn vs. Claude Code); Qwen #9301 (goal token accounting).
- **Persistent memory across sessions/compactions** *(Claude Code, Codex, Pi, OpenCode, Gemini)* — Claude Code #34556 (user hand-rolled a solution after 59 compactions); Codex discussion #39282 (Lians local MCP memory layer); Pi #8307 (cache-friendly compaction); Gemini Auto Memory (#26525).
- **Multi-agent / team coordination** *(Qwen, Gemini, Codex, OpenCode, Claude Code)* — Qwen #9430/#9431/#9276 (team messaging semantics); Gemini #22323 (subagent MAX_TURNS reported as GOAL success); Codex #23930 (stuck subagent cards); OpenCode #43282 (subagent ID discovery).
- **Sandboxing & security hardening** *(Copilot CLI, Codex, Gemini, Claude Code)* — Copilot #4521/#4522 (sandbox can't be disabled); Codex #39307 (fail-closed risk scoring), #39301 (token isolation); Gemini #19873 (sandboxed bash), #28898 (credential sanitization); Claude Code #84352 (safeguard false positives).
- **MCP lifecycle & auth reliability** *(Codex, Copilot, OpenCode, Gemini)* — Codex #30408 (9+ GB process leak); Copilot #4392 (orphaned stdio), #4490 (Atlassian OAuth regression); OpenCode #37684 (MCP bridge); Gemini #28863 (env-var injection consent).
- **Session reliability / no silent data loss** *(Claude Code, Codex, Qwen, OpenCode, Pi)* — #86298 dropped cross-session messages; Codex #25928 disappearing prompts; Qwen #8400 auto-deleted sessions; OpenCode #43303 message-ID wraparound; Pi #8300 shared session file.
- **Per-agent/per-mode model configurability** *(Copilot, OpenCode, Gemini, Pi)* — Copilot #2904 (per-agent reasoning effort); OpenCode #43310 (remove forced sampling defaults); Gemini #28893 (preserve explicit model IDs); Pi #8275 (vendor thinking-budget fields).

## 4. Differentiation Analysis

- **Claude Code** is the enterprise production workhorse: IDE-centric, compliance-aware (CVP), obsessive about prompt-cache economics. Its community skews toward large organizations hitting governance and regression pain.
- **OpenAI Codex** prioritizes interactive UX velocity (Markdown export, session forking, archive/restore) in parallel with security hardening. Its user base is visibly cost-anxious; the token-burn issue is the repo's dominant signal.
- **Gemini CLI** is the engineering-systems player: nightly releases, SSR-agent fixes, ACP protocol compliance, and heavy eval/CI culture. Its community demands subagent transparency and truthful status reporting over new features.
- **Copilot CLI** differentiates via GitHub ecosystem lock-in: org model catalogs, plugin marketplace, schedule manager, BYOK. The current pain is sandbox policy enforcement — the enforcement-vs-configurability balance is off.
- **OpenCode** targets cost-conscious and local-LLM users (vLLM/Ollama/DeepSeek), with its own Go quota layer. Billing-transparency bugs are existential for its trust model.
- **Pi (Rust)** is the provider-agnostic power-user tool (Copilot, Bedrock, Anthropic, OpenAI-compatible), competing on extension hooks, governance (`disabledCommands`), and long-session TUI performance.
- **Qwen Code** is the most multi-agent-forward: live session registry, team topology, goal token accounting, plus disciplined benchmark validation (500+89 SWE-bench/Terminal-Bench runs with quarantine gates). Strongly Qwen-ecosystem and China-oriented (DingTalk, TLS daemons, desktop app).
- **CodeWhale** is the smallest independent player, inheriting the DeepSeek-TUI lineage: Rust TUI, DeepSeek/local-model focus, Chinese i18n investment, and release-automation maturity.

## 5. Community Momentum & Maturity

- **Highest engagement**: OpenAI Codex (630-comment token issue; 10 security-heavy PRs) and Claude Code (121-comment compliance issue; 139 👍 connector issue). Both ship frequently and draw enterprise-scale feedback.
- **Fastest iterating**: Qwen Code, Gemini CLI, and Pi each landed 10+ PRs in 24h with nightly releases and disciplined p1/p2 triage. Qwen additionally quarantined and re-ran full benchmark suites in one day — serious QA investment.
- **Middle maturity**: OpenCode shows strong PR velocity (10) but no release; storage-bloat and quota issues suggest young-community growing pains. Copilot CLI has high issue throughput but near-zero substantive PR activity — possibly release-gated or capacity-constrained.
- **Slowest**: DeepSeek Harness had zero activity. CodeWhale is active but small-team-shaped — 26 PRs concentrated on release finalization, CI timeout hardening, and i18n.
- **Maturity signals**: Claude Code (v2.x, verified enterprise program) and Copilot CLI (v1.0.81, org model management) lead in enterprise readiness. Codex/Gemini/Qwen still brand as 0.x/nightly but are shipping enterprise-grade security work.

## 6. Trend Signals

- **Usage cost is now the #1 community complaint, not capability.** Token burn (Codex), quota/cost mismatch (OpenCode), cache invalidation (Claude Code), and fallback mispricing (Pi) all demand metering transparency, cache-efficiency tooling, and predictable spend controls.
- **Reliability beats features.** Silent session loss (Claude Code, Codex, Qwen), stuck sessions (OpenCode, Gemini), and message-ID corruption (OpenCode) generate disproportionate anger. Developers forgive missing features faster than disappearing work.
- **Security is shifting from policy to default-deny enforcement.** Fail-closed risk scoring (Codex), forced sandbox policy (Copilot), credential/env sanitization (Codex, Gemini), and consent prompts (Gemini) mark the convergence.
- **Persistent memory is the next killer feature.** Users are already building workarounds (custom Claude Code builds, Lians MCP). Tools without first-party session memory — surviving compaction, restart, cross-agent handoff — risk losing power users.
- **Multi-agent semantics need a formal spec.** Ignored `run_in_background` flags (Qwen), misleading subagent status (Gemini), and corrupted subagent UI state (Codex) show the industry bolting on orchestration without agreed contracts.
- **MCP is table stakes, but its lifecycle is immature.** Orphaned processes, OAuth regressions, and env-var injection across five tools will drive demand for standard MCP process supervision and credential refresh.
- **Windows/desktop remains the weakest platform.** Intel-Mac and Windows regressions this cycle span Claude Code, Codex, Copilot, Qwen, CodeWhale, and Pi — a clear differentiation opportunity for any tool that gets cross-platform reliability right.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-19 | Source: github.com/anthropics/skills*

## 1. Top Skills Ranking
The eight most-discussed pull requests, ranked by comment volume (all currently **open**):

1. **skill-creator evaluation fix #1298** ([PR](https://github.com/anthropics/skills/pull/1298)) — Fixes a critical defect where `run_eval.py` reports 0% recall for every skill description, invalidating the description-optimization loop. Also patches Windows subprocess stream reads, trigger detection, and parallel workers. Discussion centers on the root cause — the eval artifact is never installed as a real skill — confirmed via 10+ independent reproductions tied to issue #556.

2. **document-typography skill #514** ([PR](https://github.com/anthropics/skills/pull/514)) — New skill providing typographic quality control for AI-generated documents: orphan word wrap, widow paragraphs, and numbering misalignment. Discussion reflects broad frustration with layout defects in Claude-generated documents.

3. **pdf skill case-sensitivity fix #538** ([PR](https://github.com/anthropics/skills/pull/538)) — Corrects 8 uppercase/lowercase mismatches in `skills/pdf/SKILL.md` (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`) that break the skill on case-sensitive filesystems.

4. **ODT skill #486** ([PR](https://github.com/anthropics/skills/pull/486)) — New skill for OpenDocument format: creating .odt/.ods files, template filling, and ODT→HTML conversion. Signals demand for ISO-standard office formats alongside the existing docx/pdf skills.

5. **frontend-design skill overhaul #210** ([PR](https://github.com/anthropics/skills/pull/210)) — Rewrites the frontend-design skill so every instruction is actionable within a single conversation. Discussion echoes a broader critique (issue #202) that several skills read like developer docs rather than operational instructions.

6. **skill-quality-analyzer + skill-security-analyzer #83** ([PR](https://github.com/anthropics/skills/pull/83)) — Adds two meta-skills to the marketplace: a five-dimension quality analyzer (structure/documentation, examples, resources) and a dedicated security analyzer. Directly aligned with the repo's top security concern (#492).

7. **docx tracked-change w:id collision fix #541** ([PR](https://github.com/anthropics/skills/pull/541)) — Prevents document corruption when adding tracked changes to files with existing bookmarks, by avoiding hardcoded OOXML `w:id` values that collide with the shared ID space.

8. **skill-creator YAML validation #539** ([PR](https://github.com/anthropics/skills/pull/539)) — Adds pre-parse frontmatter validation to warn on unquoted `description:` fields containing colons, preventing silent YAML truncation. Part of a sustained community effort to harden skill-creator tooling (see also #1099, #1050).

## 2. Community Demand Trends
Distilled from the most-commented issues:

- **Trust & supply-chain security** — #492 (43 comments) documents community skills distributed under the `anthropic/` namespace, enabling trust-boundary abuse. This is the single most-discussed issue in the repository.
- **Skill management & sharing** — #228 (16 comments) requests org-wide skill sharing in Claude.ai; #62 (10 comments) reports skills disappearing from local installations, exposing fragile file-management UX.
- **Skill tooling reliability** — #556 (12 comments) details the 0% trigger-rate bug in `run_eval.py`; #202 (8 comments) argues skill-creator should be rewritten as an operational skill rather than educational documentation.
- **Governance & verification meta-skills** — #412 (agent-governance safety patterns) and #1385 (reasoning quality gate pipeline) show demand for audit, threat-detection, and delivery-verification skills.
- **Context-window efficiency** — #1487: the bundled `claude-api` skill eagerly injects ~156k tokens in a single tool call, exhausting the context window.
- **Platform interoperability** — #29 (AWS Bedrock usage), #16 (exposing Skills as MCPs), and #1175 (SharePoint Online security with skill-based access control) round out integration demand.

## 3. High-Potential Pending Skills
Open, actively-discussed PRs that may land soon:

- **testing-patterns skill #723** ([PR](https://github.com/anthropics/skills/pull/723)) — Broad testing-stack coverage: Testing Trophy model, AAA unit-test patterns, React Testing Library guidance, and what-not-to-test anti-patterns.
- **ServiceNow platform skill #568** ([PR](https://github.com/anthropics/skills/pull/568)) — A wide enterprise skill spanning ITSM, ITOM, ITAM/SAM Pro, FSM, HRSD/CSM, SPM/PPM, Vulnerability Response, SecOps, CSDM, and IntegrationHub.
- **self-audit skill #1367** ([PR](https://github.com/anthropics/skills/pull/1367)) — Mechanical verification of claimed output files, then a four-dimension reasoning audit ordered by damage severity. Universal across projects and models.
- **pyxel skill #525** ([PR](https://github.com/anthropics/skills/pull/525)) — Retro/pixel-art game development workflow for Python's Pyxel engine, built around the pyxel-mcp server (write → run/capture → inspect → iterate).
- **SAP-RPT-1-OSS predictor skill #181** ([PR](https://github.com/anthropics/skills/pull/181)) — Predictive analytics on SAP business data using SAP's open-source tabular foundation model released at TechEd 2025.
- **skill-quality/security analyzers #83** ([PR](https://github.com/anthropics/skills/pull/83)) — Dual meta-skills that evaluate other skills across structure, documentation, examples, resources, and security — a natural fit for the official marketplace.

## 4. Skills Ecosystem Insight
The community's most concentrated demand is for **trustworthy skill-development infrastructure** — reliable evaluation tooling, security/quality analyzers, and verification gates — indicating the ecosystem is shifting from "collecting skills" to "ensuring skills are safe and actually work."

---

# Claude Code Community Digest — 2026-08-19

## Today's Highlights

Version **2.1.235** shipped with an optional `spellcheck` setting and a fix for whole-prompt-cache invalidation caused by language-server mid-session reconnects. The community is most engaged with a **cyber-safeguard false-positive issue** (#84352, 121 comments) affecting CVP-approved organizations, and a long-running **persistent-memory feature request** (#34556) that a user ultimately solved with a custom build after 59 context compactions. Two fresh **Intel Mac Cowork VM regressions** (#87503, #87759) also surfaced after recent desktop updates.

## Releases

**v2.1.235** — [Release notes](https://github.com/anthropics/claude-code/releases)
- Added an optional `spellcheck` setting that underlines misspelled words in the prompt input as you type, using installed `aspell`, `hunspell`, or `ispell`.
- Fixed whole-prompt-cache invalidation when a language server disconnected or reconnected mid-session.
- Fixed a nested-m… (release notes truncated in data source).

## Hot Issues

1. **[#84352 — CVP-approved Claude.ai org still receives cyber safeguard blocks in Claude Code](https://github.com/anthropics/claude-code/issues/84352)** — *Open, 121 comments, 20 👍*
   A Claude.ai organization with prior Cyber Verification Program approval is again blocked by cyber-safeguard rules, while the Verification Portal shows the application as "Under review." High engagement suggests this is affecting many orgs; regulatory/compliance blockers make it urgent for enterprise teams.

2. **[#34556 — Feature Request: Persistent Memory Across Context Compactions](https://github.com/anthropics/claude-code/issues/34556)** — *Closed, 89 comments, 6 👍*
   After 59 documented compactions across 26 days, the author built their own memory-persistence system because Claude Code loses all non-externally-saved state on compaction. The issue was closed, but the discussion underscores a top community desire for continuity across long sessions.

3. **[#32479 — GitHub Connector connected in Claude Desktop but not recognized by Claude](https://github.com/anthropics/claude-code/issues/32479)** — *Open, 88 comments, 139 👍*
   Despite an `invalid` label, this is the highest-upvoted issue this week: the GitHub Connector appears active in Claude Desktop but the Claude Code CLI doesn't see it. The 139 👍 signal indicates wide impact and frustration with connector discovery.

4. **[#69415 — API Error: Connection closed mid-response → unusable in VSCode/WSL](https://github.com/anthropics/claude-code/issues/69415)** — *Open, 53 comments, 81 👍*
   Frequent mid-response connection closures make Claude Code effectively unusable for extended tasks in the VSCode/WSL networking setup. Users report heavy workflow interruption; workarounds so far are unreliable.

5. **[#86298 — Desktop app (Windows): cross-session messages silently dropped and expire](https://github.com/anthropics/claude-code/issues/86298)** — *Open, 19 comments, 1 👍*
   A regression since app 1.28929.0: cross-session messages are held for an approval the UI never offers, then expire after ~5 minutes. Silent data loss makes this a high-severity reliability bug for Windows desktop users.

6. **[#32726 — VSCode extension: add option to prevent panel from stealing focus](https://github.com/anthropics/claude-code/issues/32726)** — *Open, 14 comments, 52 👍*
   The Claude panel auto-reveals and steals focus whenever output is produced, interrupting work in other editor tabs. A well-supported UX request; 52 👍 reflects broad demand for opt-in focus behavior.

7. **[#13689 — Improve the model's ability to follow instructions](https://github.com/anthropics/claude-code/issues/13689)** — *Open, 13 comments, 7 👍*
   A long-standing (Dec 2025) complaint that Claude Code fails to reliably follow instructions, especially in multi-step or complex tasks. Remains open and overlaps with newer long-session degradation reports.

8. **[#87503 — Cowork VM connection timeout after update to 1.32352.0 on Intel Mac](https://github.com/anthropics/claude-code/issues/87503)** — *Closed, 10 comments*
   The Cowork VM guest never connects after the latest desktop update on Intel Macs. Labeled a regression and closed, but a follow-up emerged: see #87759 below.

9. **[#87137 — `Bash` tool description embeds per-session URL → invalidates whole prompt cache](https://github.com/anthropics/claude-code/issues/87137)** — *Open, 1 comment*
   A sharp performance/cost bug: the `Bash` tool's description contains a session-specific console URL, so every `/resume` invalidates the cached prefix from its first bytes, forcing a full re-read. Technically detailed and important for heavy users.

10. **[#84806 — Login token expiration too short for slow email delivery](https://github.com/anthropics/claude-code/issues/84806)** — *Open, 1 comment*
    The login token expires after ~10 minutes, but auth emails can take 11+ minutes to arrive, making login impossible. A simple but recurring onboarding/auth blocker.

## Key PR Progress

Only two PRs were updated in the last 24h, so both are highlighted:

1. **[#87395 — ralph-wiggum: use `disable-model-invocation` so the model can't self-invoke `/ralph-loop`](https://github.com/anthropics/claude-code/pull/87395)** — *Closed*
   Fixes a real plugin footgun: the ralph-wiggum plugin's `/ralph-loop` and `/cancel-ralph` commands set unsupported frontmatter (`hide-from-slash-command-tool`), so Claude could self-invoke an infinite loop. Switching to `disable-model-invocation` properly prevents agent-initiated loops. This is a good reference pattern for other plugin authors.

2. **[#41611 — add the missing source to claude code](https://github.com/anthropics/claude-code/pull/41611)** — *Open*
   A vague, long-open PR (created March 2026) with no substantive description; unclear intent, and it's unclear whether this is still relevant. Minor interest.

## Feature Request Trends

Across the current issue set, the most-requested directions are:

- **Persistent memory across compactions** — #34556 is the clearest signal; users want session state to survive context compaction without hand-rolled external systems.
- **Long-session consistency and instruction adherence** — #13689 and #87469 both ask for the model to reliably follow `CLAUDE.md` and user instructions late in long sessions, including avoiding stale-read overwrites.
- **IDE integration control** — #32726 (VSCode panel focus) and similar ergonomics requests show demand for tighter, less-intrusive editor integration.
- **Remote Control / cross-machine continuity** — #85269 (supervisor exits 5s after last client detaches) and #87154 (cross-machine session directory empty) point to a desire for persistent, always-available remote access to desktop sessions.
- **Auth reliability** — #84806 requests longer login token validity or faster email delivery; simple but broadly felt.
- Spellcheck (shipped in 2.1.235) and cache-efficiency improvements (#87137) show an emerging interest in proactive input tooling and prompt-cache hygiene.

## Developer Pain Points

- **Connectivity & reliability**: Mid-response disconnects (#69415), silently dropped cross-session messages (#86298), and cross-machine discovery gaps (#86962, #87154) are making the tool unreliable in real-world multi-device workflows.
- **Regression churn after desktop updates**: Multiple recent regressions on Windows and Intel Mac (#87503, #87759, #73107, #86298) are eroding trust in the desktop release cadence.
- **Prompt-cache inefficiency**: Both the fixed LSP disconnect issue in 2.1.235 and the open #87137 show that cache invalidation subtleties have real cost implications for heavy users.
- **Model behavior degradation in long sessions**: Reports of ignored `CLAUDE.md` rules, false "work done" claims, and stale reads overwriting concurrent edits (#87469, #66539, #66054) remain a top frustration.
- **Safety/compliance false positives**: #84352 demonstrates that automated safeguard layers can block legitimate, pre-approved organizations, disrupting enterprise usage with no clear recourse.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-19

## Today's Highlights

Codex CLI `rust-v0.148.0` landed with Markdown conversation export, session forking, and improved TUI resume/archive controls. The community is still heavily focused on token/rate-limit burn reports, while Windows desktop users are surfacing a new wave of browser-control/RPC failures. On the engineering side, merged PRs emphasize security hardening: fail-closed Guardian V2 risk scoring, token isolation from child processes, and stricter approval boundaries.

## Releases

**rust-v0.148.0**  
- Export complete TUI conversations to Markdown with `/export`, either to clipboard or a new file.  
- Fork sessions with `codex exec fork`.  
- Archive or restore sessions from the TUI resume picker.  
- Draft prompts while the TUI initializes.  

**rust-v0.148.0-alpha.23** and **rust-v0.148.0-alpha.22**  
- Maintenance releases with no detailed changelog provided.

---

## Hot Issues

- [**#14593 — Burning tokens very fast**](https://github.com/openai/codex/issues/14593)  
  630 comments and 285 👍 make this the dominant community concern. Users on Business plans report unexpectedly rapid token consumption, especially around weekly limits. The high engagement suggests widespread impact rather than an isolated configuration issue.

- [**#39136 — Built-in browser plugin initialization fails: Trusted RPC dependency is not within a trusted code path**](https://github.com/openai/codex/issues/39136)  
  Newly filed Windows issue with 61 comments. The in-app browser/Chrome control path is broken for some Windows users due to RPC trust validation, blocking a core Codex App feature.

- [**#32041 — VS Code extension 26.5707.* opens blank webview on Linux**](https://github.com/openai/codex/issues/32041)  
  56 comments. Linux users report a regression where newer VS Code extension versions render a blank webview, while an older version works but lacks GPT-5.6-Sol support.

- [**#30408 — MCP server processes leak: per-thread processes never cleaned up (9+ GB RSS)**](https://github.com/openai/codex/issues/30408)  
  Important for MCP-heavy workflows. Each thread spawns global MCP servers that are never killed, leading to unbounded memory growth.

- [**#20500 — Feature request: support multiple named accounts per app/connector**](https://github.com/openai/codex/issues/20500)  
  28 comments and 107 👍. The most-upvoted feature request in this snapshot: users want multiple authorized accounts per connector with explicit selection and privacy boundaries.

- [**#25928 — VS Code/Cursor extension: Submitted prompts randomly disappear before entering queue**](https://github.com/openai/codex/issues/25928)  
  Windows users report losing prompts before they enter the execution queue. High frustration because work is silently dropped.

- [**#23930 — Subagent cards can remain stuck/visible after close**](https://github.com/openai/codex/issues/23930)  
  UI state inconsistency in the desktop app: completed or closed subagents remain visible even when no live agent handle exists.

- [**#37403 — macOS regression: Desktop cannot resume Remote Control / CLI thread: “already has an active writer”**](https://github.com/openai/codex/issues/37403)  
  A workflow regression affecting mobile Remote Control users who continue CLI threads on their Macs. 25 comments and 18 👍 indicate meaningful impact on remote workflows.

- [**#35119 — Windows/WSL: valid WSL repositories marked as non-Git, “Git is unavailable”**](https://github.com/openai/codex/issues/35119)  
  Regression in recent Windows app versions breaks repository detection on WSL ext4 filesystems, blocking Git-dependent features.

- [**#39173 — Fails to control browser [in app or Chrome]**](https://github.com/openai/codex/issues/39173)  
  Similar symptom to #39136, reinforcing that Trusted RPC misconfiguration is a broad Windows issue affecting browser control.

---

## Key PR Progress

- [**#39312 — Add async delivery metadata to agent messages**](https://github.com/openai/codex/pull/39312)  
  Adds an optional `delivery` field to agent message events so user-visible messages can be marked as asynchronous, preserving the marker through legacy event conversion.

- [**#39311 — Bind unified exec approvals to shell executables**](https://github.com/openai/codex/pull/39311)  
  Security-focused: trust in an inner command no longer implicitly trusts the executable that runs it. Unfamiliar shell executables are evaluated alongside parsed commands during approval.

- [**#39307 — Fail closed on Guardian V2 risk scoring errors**](https://github.com/openai/codex/pull/39307)  
  Treats classification/config/action errors as elevated risk instead of retaining a stale low-risk result. Important hardening for deterministic security behavior.

- [**#39306 — Honor managed config during project discovery**](https://github.com/openai/codex/pull/39306)  
  Includes legacy managed-file and MDM settings when resolving project roots and trust, preserving managed-layer precedence in the config stack.

- [**#39301 — Prevent Node REPL auth tokens from reaching child processes**](https://github.com/openai/codex/pull/39301)  
  Adds `NODE_REPL_AUTH_TOKEN` to the blocked environment-variable list so model-reachable child processes cannot inherit it.

- [**#39299 — Restrict agent roles to bounded configuration overrides**](https://github.com/openai/codex/pull/39299)  
  Agent roles can now customize child-agent behavior without expanding authority or changing inherited provider configuration.

- [**#39296 — Enable MCP tool hooks in Codex sessions**](https://github.com/openai/codex/pull/39296)  
  Executes `mcp_tool` hooks via the shared MCP runtime and restricts them to already-connected, cataloged, and policy-allowed tools.

- [**#39290 — Add Windows sandbox diagnostics to `codex doctor`**](https://github.com/openai/codex/pull/39290)  
  Gives Windows users a way to diagnose sandbox backend issues, including policy incompatibility and failed elevated provisioning.

- [**#39285 — Show file destinations in TUI change approvals**](https://github.com/openai/codex/pull/39285)  
  Improves TUI approval clarity by showing affected destination paths, including source/target for moves and cross-platform path formatting.

- [**#39284 — Report network disconnects during approval**](https://github.com/openai/codex/pull/39284)  
  Detects proxy disconnects during network approval and provides a model-visible explanation rather than leaving the tool call tied to an abandoned request.

---

## Hot Discussions

### General / Q&A
- [**#14373 — Rate limits going out faster than usual**](https://github.com/openai/codex/discussions/14373)  
  A business-plan user reports burning weekly limits after a single GPT-5.4 Medium request. 4 comments and 7 👍; aligns with the #14593 token-burn issue.

### Show and tell
- [**#39282 — Lians: free local project continuity across Codex, Claude Code, and Cursor**](https://github.com/openai/codex/discussions/39282)  
  A new Apache-2.0 local MCP memory layer that aims to preserve project context across coding-agent sessions, reducing the need to restate progress and decisions.

---

## Feature Request Trends

- **Multi-account support**: Connecting multiple separately authorized accounts for the same app/connector is highly requested, with explicit account selection and privacy boundaries ([#20500](https://github.com/openai/codex/issues/20500)).
- **Conversation lifecycle improvements**: Users want manual refresh/auto-sync for archived and cross-surface conversations, plus more reliable archive/restore behavior ([#11907](https://github.com/openai/codex/issues/11907), [#28276](https://github.com/openai/codex/issues/28276)).
- **MCP interoperability**: Requests for MCP tools to work cleanly with custom/local providers and strict tool schemas remain visible ([#23186](https://github.com/openai/codex/issues/23186), [#31354](https://github.com/openai/codex/issues/31354)).
- **Broader TUI file-type support**: Syntax rendering for `.ispc` files was requested to match existing CUDA/C++ handling ([#38550](https://github.com/openai/codex/issues/38550)).
- **Cross-agent continuity**: The new Lians project highlights demand for persistent project memory across different coding agents.

---

## Developer Pain Points

- **Token consumption anxiety**: The largest issue in the repo is about burning tokens too fast, reinforced by a discussion on rate limits dropping unexpectedly. This is now a top community concern.
- **Windows reliability gaps**: Repeated Windows-specific failures — WSL Git detection, browser control RPC trust errors, Voice Chat fork context loss, Remote Control enrollment failures, and general lag — indicate the Windows App experience is the roughest edge.
- **MCP resource leaks and auth retry loops**: Orphaned MCP server processes accumulate memory, and rejected OAuth refresh tokens are retried forever without surfacing re-authentication.
- **Remote/resume regressions**: Threads that cannot be resumed after updates, quadratic behavior on large active threads, and “already has an active writer” errors hurt remote-control and CLI-desktop continuity workflows.
- **Silent UI/UX failures**: Disappearing prompts before queueing, blank approvals, stuck subagent cards, and blank webviews on Linux create distrust in the tool’s reliability.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-19

## Today's Highlights
The project shipped nightly v0.56.0 with SSR-agent fixes while a wave of automation-backed PRs landed, closing issues across symlinked agent discovery, OAuth timeout handling, and ACP protocol compliance. Community attention remains focused on agent reliability: the generalist-agent hang (#21409) and misleading MAX_TURNS success reporting (#22323) continue to generate discussion. Security hardening is also a visible theme, with changes addressing credential leakage, environment sanitization, and Auto Memory redaction.

## Releases
**v0.56.0-nightly.20260818.g194edea47**
- [SSR Agent] Issue Fix (26120): Clarify privacy notice wording and selection options (#28820)
- [SSR Agent] Issue Fix (21919): Fix TypeScript strict-null errors in integration tests

## Hot Issues
1. **Subagent recovery after MAX_TURNS reported as GOAL success** — [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) (p1, 12 comments)
   The `codebase_investigator` subagent reports `status: "success"` with termination reason `"GOAL"` even after hitting max turns before doing any analysis. This misdirection makes failures look like successes and is the most-commented issue today.

2. **Generalist agent hangs forever** — [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) (p1, 8 comments, 8 👍)
   Simple operations like folder creation hang indefinitely when the CLI defers to the generalist agent; users work around it by instructing the model to avoid subagents. Highest 👍 count in the issue set.

3. **Shell command gets stuck with "Waiting input" after completion** — [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) (p1, 4 comments, 3 👍)
   Even trivial CLI commands appear hung with "Awaiting user input" after finishing. P1 core bug affecting everyday workflows.

4. **Auto Memory sends secrets to model before redaction** — [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) (p2, security, 4 comments)
   Transcript content is sent to the extraction model before prompt-based redaction occurs, and the service may log existing skill contents. Raises privacy concerns for background memory processing.

5. **Gemini does not use skills and sub-agents enough** — [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) (p2, 6 comments)
   Despite custom "gradle" and "git" skills with descriptions, the model won't invoke them autonomously—only when explicitly told. Undermines custom-agent ROI.

6. **Zero-dependency OS sandboxing for bash-native workflows** — [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) (p2, 8 comments)
   Proposes sandboxing model-driven bash usage (grep/cat/sed/awk) without compromising security, leveraging Gemini 3's native POSIX affinity.

7. **AST-aware file reads/search/mapping EPIC** — [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) (p2, 7 comments)
   Investigates AST-aware tools for precise method-bound reads, navigation, and codebase mapping, aiming to cut token noise and misaligned reads.

8. **Auto Memory retries low-signal sessions indefinitely** — [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) (p2, 5 comments)
   Low-signal sessions skipped by the extraction agent are never marked as processed, so they surface repeatedly. Memory-system hygiene bug.

9. **400 error with more than 128 tools** — [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) (p2, 3 comments)
   Requests fail when the number of enabled tools grows too large; users expect smarter tool scoping instead of an API error.

10. **Symlinked agent markdown files not recognized** — [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) (p2, 4 comments)
    `~/.gemini/agents/*.md` symlinks are ignored by discovery/loaders. A fix (PR #28883) is already in motion.

## Key PR Progress
1. **[SSR Agent] Support symlinked agent markdown files** — [#28883](https://github.com/google-gemini/gemini-cli/pull/28883) (closed)
   Fixes #20079 by allowing symlinked subagent definitions in agent directories.

2. **Prevent unhandled promise rejection on OAuth callback timeout** — [#28873](https://github.com/google-gemini/gemini-cli/pull/28873) (closed, p1/security)
   Handles the 5-minute OAuth callback server timeout cleanly instead of crashing the auth flow.

3. **Emit pending tool call update before requesting permission** — [#28870](https://github.com/google-gemini/gemini-cli/pull/28870) (closed, p1)
   In ACP mode, sends a `tool_call` pending update before `session/request_permission`, fixing a protocol-order violation.

4. **Harden subprocess execution security and sanitization** — [#28898](https://github.com/google-gemini/gemini-cli/pull/28898) (open)
   Prevents sensitive auth tokens from leaking into untrusted tool environments and hardens config ingestion/GitHub API interactions.

5. **Prompt for consent on environment changes and sanitize env vars** — [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) (open)
   Stops extension updates from injecting unauthorized environment variables into spawned MCP servers; consent strings now incorporate MCP env configs.

6. **Recognize mixed function-call turns** — [#28895](https://github.com/google-gemini/gemini-cli/pull/28895) (open, p2)
   Fixes #28894 by correctly handling turns that combine function calls with other content.

7. **Preserve explicit flash model IDs** — [#28893](https://github.com/google-gemini/gemini-cli/pull/28893) (open, p1)
   Restricts the Gemini Flash rollout rewrite to the generic `flash` alias, preserving explicit IDs like `gemini-3.6-flash`.

8. **Fix eval retry for 429 rate-limit errors** — [#28891](https://github.com/google-gemini/gemini-cli/pull/28891) (open, p3, help wanted)
   `withEvalRetries` previously missed `RESOURCE_EXHAUSTED` 429s, causing eval runs to fail as if they were real assertion failures.

9. **Prevent ghost text wrapping infinite loop at narrow widths** — [#28641](https://github.com/google-gemini/gemini-cli/pull/28641) (closed)
   Fixes #19985: force-advances `splitIndex` so wrapping terminates for wide CJK/emoji codepoints.

10. **Prevent false-positive loop detection on uniform streaming content** — [#28877](https://github.com/google-gemini/gemini-cli/pull/28877) (closed)
    Stops loop detection from firing on padded/uniform characters (e.g., consecutive spaces) right after prompt submission.

## Feature Request Trends
- **AST-aware code intelligence**: Multiple EPICs (#22745, #22746) plus "Tactful Extraction" (#19561) push toward surgical, token-frugal codebase reading using AST-based tools.
- **Security-first execution**: Growing demand for sandboxed bash execution (#19873), credential-safe subprocesses (#28898), consent for env changes (#28863), and pre-context redaction (#26525).
- **Subagent transparency and control**: Users want to see/share subagent trajectories (#22598, #21763), accurate self-knowledge of flags/hotkeys (#21432), and truthful termination reporting (#22323).
- **Evaluation infrastructure**: Component-level behavioral evals (#24353), reliable retries (#28891), and always-green steering tests (#23313).
- **Browser agent resilience**: Session takeover and lock recovery (#22232), Wayland support (#21983), and settings.json override respect (#22267).

## Developer Pain Points
- **Hangs and stalls**: The generalist-agent hang (#21409), post-command "Waiting input" (#25166), and interactive-prompt deadlock (#22465) top the frustration list.
- **Misleading status and logs**: MAX_TURNS reported as GOAL success (#22323) and bug reports lacking subagent context (#21763) make debugging harder.
- **Security/privacy concerns**: Auto Memory sends content to model context before redaction and over-logs (#26525); extension/MCP env injection (#28863) and OAuth timeout crashes (#28873) add risk.
- **Subagents/skills underutilized**: The model doesn't autonomously use custom skills or subagents (#21968), and symlinked agents aren't discovered (#20079).
- **Terminal UX regressions**: Ghost-text wrapping loops (#28641), terminal-resize flicker (#21924), and markdown-table rendering (#18240) degrade the interactive experience.
- **Tool-scope edge cases**: 400 errors from too many tools (#24246) and the model scattering tmp scripts across directories (#23571) create cleanup and reliability overhead.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-19

## Today's Highlights

- **v1.0.81-1 shipped** with Gemini 3.7 Flash support, a `Ctrl+E` shortcut inside `/sandbox`, and per-agent usage metrics in `--usage-output-file`.
- **Sandbox regressions are the top community flashpoint**: multiple new reports say sandbox is forced even when disabled, cannot be disabled, blocks `git`, and ignores RW path grants for JVM processes.
- **Enterprise model and MCP auth friction continues**: org-enabled Anthropic/Kimi models are missing from the CLI catalogue, and Atlassian MCP OAuth is broken since 1.0.80.

## Releases

### v1.0.81-1
- **Added**
  - Support for Gemini 3.7 Flash
  - `Ctrl+E` in `/sandbox` to open `settings.json` in the editor
  - Per-agent usage metrics to `--usage-output-file` JSON output
- **Improved**
  - Use `x` to remove scheduled `/every` and `/after` prompts in Schedule Manager
- **Fixed**
  - A bug related to turning `allow-all` off (changelog entry truncated in source data)

## Hot Issues

- [#4390 — Enabled organization models missing from catalogue](https://github.com/github/copilot-cli/issues/4390)  
  Claude Sonnet 5/Opus 5 and Kimi K3 are explicitly enabled by the organization but unavailable in CLI sessions. Enterprise adopters are blocked from using approved models. *10 comments, 7 👍*

- [#4313 — Allow scrolling through current conversation history](https://github.com/github/copilot-cli/issues/4313)  
  Users want mouse wheel or PageUp/PageDown navigation through past conversation turns. A common terminal UX gap as sessions grow longer. *8 comments*

- [#2904 — Custom Agent YAML frontmatter should support reasoning effort](https://github.com/github/copilot-cli/issues/2904)  
  `.agent.md` files can pin a model but cannot set reasoning effort per agent. Users want per-agent `--effort` control instead of global-only configuration. *7 comments, 20 👍*

- [#2958 — Support per-mode default model configuration](https://github.com/github/copilot-cli/issues/2958)  
  Community request for separate default models in plan mode vs. autopilot mode. Frequently requested by teams using different models for planning vs. execution. *4 comments, 16 👍*

- [#4490 — Atlassian MCP OAuth authentication broken in 1.0.80](https://github.com/github/copilot-cli/issues/4490)  
  RFC 8414 issuer-mismatch error prevents connecting to Atlassian Remote MCP. Regression from 1.0.78, blocking a major third-party MCP integration. *3 comments*

- [#4522 — 1.0.81 forces sandbox while managed policy is undetermined](https://github.com/github/copilot-cli/issues/4522)  
  Sandbox activates even when `"sandbox": { "enabled": false }` is set, because server-managed policy is temporarily undetermined. Users are seeing unexpected sandboxing with no opt-out. *1 comment, 2 👍*

- [#4521 — Sandbox cannot be disabled](https://github.com/github/copilot-cli/issues/4521)  
  Config shows sandbox disabled, but status still reports enabled and execution uses sandbox. Another manifestation of the 1.0.81 sandbox enforcement problem. *1 comment, 2 👍*

- [#4520 — Standalone postToolUse hook never fires](https://github.com/github/copilot-cli/issues/4520)  
  Repo-root `.github/hooks/*.json` `postToolUse` hooks are silently ignored; debug logs show no discovery. Breaks repo-level automation outside plugins. *2 comments*

- [#4392 — Post-authentication MCP client rebuild leaves orphaned stdio processes](https://github.com/github/copilot-cli/issues/4392)  
  After auth completes, the entire MCP client is rebuilt and stdio child processes from the first pass are never killed. Contributes to memory/CPU leaks. *2 comments*

- [#3682 — Support refreshing BYOK provider credential without restarting CLI](https://github.com/github/copilot-cli/issues/3682)  
  Short-lived bearer credentials (Entra ID, AWS STS, OIDC JWTs) are read once at startup. Enterprise teams want credential refresh without restarting sessions. *2 comments, 6 👍*

## Key PR Progress

No substantive PRs were updated in the last 24 hours. The only active PR is [#3163 — "ViewSonic monitor"](https://github.com/github/copilot-cli/pull/3163), which appears to be an off-topic or test PR unrelated to the Copilot CLI codebase. No meaningful code-review progress to report.

## Feature Request Trends

- **Per-agent and per-mode model control**  
  Users consistently ask for reasoning-effort settings in custom agents and separate default models for plan vs. autopilot modes.  
  [ #2904](https://github.com/github/copilot-cli/issues/2904) [ #2958](https://github.com/github/copilot-cli/issues/2958)

- **Model catalogue and usage transparency**  
  Organizations need org-enabled models to appear reliably, and session AIC/usage reporting needs to be accurate.  
  [ #4390](https://github.com/github/copilot-cli/issues/4390) [ #4511](https://github.com/github/copilot-cli/issues/4511)

- **Sandbox configurability and compatibility**  
  Multiple requests center on honoring explicit sandbox settings, allowing disabling, and making sandbox path grants work across all child processes.  
  [ #4521](https://github.com/github/copilot-cli/issues/4521) [ #4522](https://github.com/github/copilot-cli/issues/4522) [ #4516](https://github.com/github/copilot-cli/issues/4516)

- **MCP lifecycle and auth improvements**  
  Users want stable MCP auth, no orphaned processes, and correct handling of third-party OAuth tokens.  
  [ #4490](https://github.com/github/copilot-cli/issues/4490) [ #4392](https://github.com/github/copilot-cli/issues/4392)

- **Terminal UX and session management**  
  Conversation-history scrolling and persistent manual session names remain popular quality-of-life requests.  
  [ #4313](https://github.com/github/copilot-cli/issues/4313) [ #2622](https://github.com/github/copilot-cli/issues/2622)

- **Plugin marketplace usability**  
  Search/filter support for `plugin marketplace browse` and cache correctness across different `ref` values are emerging asks.  
  [ #4523](https://github.com/github/copilot-cli/issues/4523) [ #4513](https://github.com/github/copilot-cli/issues/4513)

## Developer Pain Points

- **Sandbox enforcement is currently too aggressive and buggy.**  
  New reports include forced sandbox when disabled, sandbox that cannot be disabled, `git` being blocked, and JVM processes ignoring RW path grants.  
  [ #4522](https://github.com/github/copilot-cli/issues/4522) [ #4521](https://github.com/github/copilot-cli/issues/4521) [ #4524](https://github.com/github/copilot-cli/issues/4524) [ #4516](https://github.com/github/copilot-cli/issues/4516)

- **MCP processes leak and authentication is fragile.**  
  Orphaned stdio processes, OAuth regressions, missing tools after app authentication, and false policy blocks are recurring MCP complaints.  
  [ #4392](https://github.com/github/copilot-cli/issues/4392) [ #4490](https://github.com/github/copilot-cli/issues/4490) [ #4096](https://github.com/github/copilot-cli/issues/4096) [ #3162](https://github.com/github/copilot-cli/issues/3162)

- **Enterprise model delivery is inconsistent.**  
  Org-enabled models are missing from the catalogue, BYOK credentials cannot be refreshed without restart, and AIC display can underestimate usage.  
  [ #4390](https://github.com/github/copilot-cli/issues/4390) [ #3682](https://github.com/github/copilot-cli/issues/3682) [ #4511](https://github.com/github/copilot-cli/issues/4511)

- **Configuration and hooks are silently ignored.**  
  Standalone hooks are not discovered, built-in agents don’t inherit custom instructions, manual-only skills become unreachable, and allowed directories don’t suppress permission prompts.  
  [ #4520](https://github.com/github/copilot-cli/issues/4520) [ #1990](https://github.com/github/copilot-cli/issues/1990) [ #4438](https://github.com/github/copilot-cli/issues/4438) [ #4482](https://github.com/github/copilot-cli/issues/4482)

- **Session and history reliability is lacking.**  
  Manual `/rename` can be overwritten by auto-generated names, and there is still no way to scroll through long conversation history.  
  [ #2622](https://github.com/github/copilot-cli/issues/2622) [ #4313](https://github.com/github/copilot-cli/issues/4313)

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-19

## Today’s Highlights

Today’s activity is dominated by a cluster of OpenCode Go quota and cost-metering discrepancies, with multiple reports describing quota jumps that don’t match displayed USD costs for DeepSeek V4 Flash. On the code side, new PRs landed for V2 subagent tooling, Qwen sampling defaults, and prompt drag handling, while several older PRs were touched by automated cleanup. New issues also surfaced around session reliability, including permanently stuck sessions and a message-ID wraparound that corrupts history ordering.

## Releases

No new releases were published in the last 24 hours.

## Hot Issues

- **#42985 — OpenCode Go quota usage appears ~4x higher than displayed DeepSeek V4 Flash cost** (15 comments, 👍 7)  
  Users report a large gap between cost-graph amounts and Go quota consumption for `deepseek-v4-flash`. Related reports like #43023 and #42935 reinforce a growing billing-transparency concern.  
  [View issue](https://github.com/anomalyco/opencode/issues/42985)

- **#33495 — Zen balance does not remove free usage cap** (7 comments, 👍 1)  
  Paid users with a Zen balance are still hitting 200-request/free-tier limits and 429s. #43208 reports the same behavior with a $10 balance.  
  [View issue](https://github.com/anomalyco/opencode/issues/33495)

- **#37489 — Context cache invalidation when switching modes or during compaction** (6 comments, 👍 1)  
  Local-LLM users (vLLM/Ollama) see major performance drops due to cache invalidation during mode switches and compaction. This is especially painful for long-running local-model workflows.  
  [View issue](https://github.com/anomalyco/opencode/issues/37489)

- **#34737 — Project path is not updated after moving project directory** (5 comments)  
  OpenCode still opens the old deleted path after a project directory is moved on Windows. A straightforward but impactful desktop UX bug.  
  [View issue](https://github.com/anomalyco/opencode/issues/34737)

- **#34473 — OpenCode randomly stops responses** (4 comments, 👍 3)  
  Some sessions end silently without errors—even mid-thinking—using the “big pickle” model. This type of nondeterministic failure is hard to debug and undermines trust.  
  [View issue](https://github.com/anomalyco/opencode/issues/34473)

- **#43277 — Sessions permanently stuck during normal use** (2 comments)  
  Stuck sessions refuse new messages and survive full system reboots and server restarts, with no recovery path. A serious reliability regression for long-lived sessions.  
  [View issue](https://github.com/anomalyco/opencode/issues/43277)

- **#43303 — Message IDs wrapped on 2026-08-14: new messages sort before old ones** (2 comments)  
  A timestamp rollover in message ID packing makes new messages sort before old messages, silencing sessions and deleting history on revert. Potentially severe data-integrity issue.  
  [View issue](https://github.com/anomalyco/opencode/issues/43303)

- **#42748 — `message.updated.1` re-serializes summary.diffs on every update** (3 comments)  
  Full message snapshots—including per-file diffs—are written on every update, making event writes quadratic in diff size. This directly contributes to database bloat.  
  [View issue](https://github.com/anomalyco/opencode/issues/42748)

- **#41175 — Event table stores full message snapshots per streaming update** (2 comments)  
  The `event` table can account for ~90% of `opencode.db`, growing to multiple GB in heavy use. A community tool exists to mitigate the issue.  
  [View issue](https://github.com/anomalyco/opencode/issues/41175)

- **#3787 — [discussion] [FEATURE]: Linear Agent** (17 comments, 👍 34)  
  Although closed, this remains one of the most-engaged feature requests: directly assigning Linear issues to an agent. It signals strong demand for deeper issue-tracker integrations.  
  [View issue](https://github.com/anomalyco/opencode/issues/3787)

## Key PR Progress

- **#43282 — fix(core): expose valid subagent IDs in the subagent tool** (open)  
  Closes #36761 by enumerating valid subagent IDs in the tool schema, making subagent usage more discoverable and correct.  
  [View PR](https://github.com/anomalyco/opencode/pull/43282)

- **#43310 — fix(opencode): remove Qwen sampling defaults** (closed)  
  Stops forcing `temperature: 0.55` and `top_p: 1` for Qwen models, letting provider/server defaults apply while preserving `chat.params` overrides. Adds regression tests.  
  [View PR](https://github.com/anomalyco/opencode/pull/43310)

- **#43309 — feat(opencode): make generated title length configurable** (open)  
  Adds an optional `title_max_words` config value to cap agent-generated session titles. Closes #43118.  
  [View PR](https://github.com/anomalyco/opencode/pull/43309)

- **#43308 — fix(app): limit prompt drag state to files** (open)  
  Ignores ordinary text/link drags and uses an OpenCode-specific MIME type for file-tree drags, preventing subagent session cards from triggering unwanted drop behavior.  
  [View PR](https://github.com/anomalyco/opencode/pull/43308)

- **#43306 — docs: add SuperCompress MCP server example** (open)  
  Adds documentation for compressing bulky context via SuperCompress while preserving the user’s actual request—useful for context-window optimization workflows.  
  [View PR](https://github.com/anomalyco/opencode/pull/43306)

- **#37684 — feat(mcp): bridge runtime-added MCP tools into the core tool registry** (closed)  
  Follow-up to #37678. Fixes the runtime MCP feature for the primary user-facing prompt path by bridging the daemon’s two independent MCP services.  
  [View PR](https://github.com/anomalyco/opencode/pull/37684)

- **#37678 — feat(session): expose toolChoice via PromptInput and agent config** (closed)  
  Brings `toolChoice` control into the LLM layer and agent config, closing a long-standing bug (#32465) that had stalled earlier PRs.  
  [View PR](https://github.com/anomalyco/opencode/pull/37678)

- **#37670 — feat(cli): add saved remote servers** (closed)  
  Adds named remote-server profiles, `opencode2 server add/list/remove` commands, and `-r`/`--remote` connection flags while preserving existing session/server flags.  
  [View PR](https://github.com/anomalyco/opencode/pull/37670)

- **#37669 — fix(core): recover malformed tool input** (closed)  
  Converts malformed tool arguments into a non-executable `tool-input-error` with stable call identity, failing only the malformed call and its originating step rather than the whole session.  
  [View PR](https://github.com/anomalyco/opencode/pull/37669)

- **#37653 — fix(opencode): batch shell output updates** (closed)  
  Coalesces metadata updates and uses a bounded trailing-output drain to fix flooding from shell tool output. Closes #30001.  
  [View PR](https://github.com/anomalyco/opencode/pull/37653)

## Feature Request Trends

- **Agent orchestration and integrations**  
  High-interest requests include Linear Agent integration (#3787), pause/resume commands (#7226), i18n support (#43307), and more robust subagent tooling (#43282, #43297). Users want finer control over agent lifecycles and external workflow tools.

- **Context and cache efficiency**  
  A recurring direction is reducing storage overhead and improving context reuse: smaller event snapshots (#41175, #42748), smarter compaction (#41578), and avoiding cache invalidation during mode switches (#37489).

- **Provider and configuration control**  
  The community keeps asking for fewer hard-coded provider behaviors: removing forced sampling defaults (#43310, #42775), normalizing schemas for providers like Gemini (#34130), and exposing lower-level controls like `toolChoice` (#37678).

- **TUI/UX polish**  
  Requests like disabling stream autoscroll (#7648), fixing narrow-viewport prompt controls (#43295), file-only drag handling (#43308), and configurable title length (#43309) show ongoing focus on making the TUI less intrusive and more customizable.

## Developer Pain Points

- **Quota and billing transparency**  
  At least six separate reports describe OpenCode Go quota not matching cost history or documented limits (#42985, #43023, #42935, #40031, #41391, #43149). The inconsistency is a major trust issue for paid users.

- **Session reliability**  
  Random response stops (#34473), permanently stuck sessions (#43277), and message-ID wraparound corrupting history (#43303) make long-running or unattended sessions fragile.

- **Storage bloat**  
  Full-snapshot event writes cause multi-GB databases and quadratic serialization (#41175, #42748). Developers are actively looking for mitigations or community tooling.

- **Provider compatibility friction**  
  Hard-coded model sampling (#42775), Gemini schema sanitizer failures (#34130), Kimi replay errors (#37624), and MCP stdio connection issues (#37634) continue to create integration overhead across providers.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi Community Digest – 2026-08-19

## Today's Highlights

No new release shipped in the last 24 hours, but the repo saw a high-volume batch of fixes and community-submitted issues. The main focus was provider correctness — Copilot login rate limits, Anthropic fallback cost, Bedrock reasoning — and TUI/performance hardening for long sessions. Several high-impact issues already have matching open PRs, especially around compaction and provider compatibility.

## Hot Issues

1. **GitHub Enterprise Copilot login invalidated by self-inflicted rate limit** — [#8251](https://github.com/earendil-works/pi/issues/8251) (closed, 4 comments). `Promise.all` model-policy requests trigger HTTP 429 and invalidate a successful device flow. Enterprise-relevant bug; addressed by PR #8254.

2. **TUI full-screen flash in long transcripts** — [#8281](https://github.com/earendil-works/pi/issues/8281) (closed, 4 comments). At roughly 10k+ lines, any change above the viewport clears and redraws the entire screen. A major source of long-session TUI jank.

3. **Auto-compaction threshold never evaluated during agentic runs** — [#6339](https://github.com/earendil-works/pi/issues/6339) (closed, 3 comments). `compaction.reserveTokens` is only checked at run boundaries, so a long single agentic run can exceed the intended context window.

4. **OpenAI client created with no timeout** — [#8323](https://github.com/earendil-works/pi/issues/8323) (closed, 2 comments). Falls back to the OpenAI SDK’s 600s default; local models thinking longer than 10 minutes are cut off. Related to #8321, where `streamSimple` also drops `timeoutMs`.

5. **Threshold compaction never fires for zero-usage providers** — [#8328](https://github.com/earendil-works/pi/issues/8328) (closed, 1 comment). When OpenAI-compatible responses omit the final usage block, the pure token estimate is discarded, effectively disabling threshold auto-compaction.

6. **`read` after `edit` on the same path reports a 1-line file** — [#8318](https://github.com/earendil-works/pi/issues/8318) (closed, 1 comment). A same-turn `edit` + `read` sequence can fail with `Offset ... beyond end of file`, while a later `read` succeeds. Tool-state synchronization bug.

7. **Bedrock `redactedContent` reasoning is dropped** — [#8315](https://github.com/earendil-works/pi/issues/8315) (closed, 1 comment). Bedrock Converse returns encrypted reasoning via `redactedContent`, but the stream handler only processes `text` and `signature`. Fixed by PR #8314.

8. **Anthropic fallback usage priced using requested model** — [#8285](https://github.com/earendil-works/pi/issues/8285) (open, 1 comment). After a server-side fallback, cost is still calculated against the originally requested model. PR #8319 addresses the issue.

9. **Pi User-Agent not sent on OpenAI-compatible API paths** — [#8305](https://github.com/earendil-works/pi/issues/8305) (open, 1 comment). Completions/Responses paths leak the OpenAI SDK default UA for non-xAI providers, affecting debugging, analytics, and provider attribution.

10. **Two processes can share one session file** — [#8300](https://github.com/earendil-works/pi/issues/8300) (closed, 1 comment). No in-use detection or session-file lock allows divergent session branches and cross-window message delivery.

## Key PR Progress

1. **fix(ai): prevent copilot policy login rate limits** — [#8254](https://github.com/earendil-works/pi/pull/8254) (open). Fetches the account model catalog before policy updates, updates only known/unconfigured tool-capable models, and retries throttled login requests.

2. **fix(ai): anthropic fallback usage** — [#8319](https://github.com/earendil-works/pi/pull/8319) (open). Replaces the reverted #8308 approach by threading usage cost directly instead of consulting the model catalog.

3. **feat(coding-agent): enable experimental cache-friendly compaction** — [#8307](https://github.com/earendil-works/pi/pull/8307) (open). Reuses a warm session cache for auto-compaction instead of standalone requests, lowering cost for long sessions.

4. **feat(coding-agent): add agent_recovery_exhausted extension hook** — [#8316](https://github.com/earendil-works/pi/pull/8316) (closed). Fires after native retry and overflow compact-and-retry are exhausted, allowing extensions to switch models and continue the session.

5. **fix(ai): round-trip Bedrock redacted reasoning** — [#8314](https://github.com/earendil-works/pi/pull/8314) (closed). Adds handling for opaque `redactedContent` from Bedrock Converse streaming.

6. **fix(tui): yield long markdown rendering** — [#8327](https://github.com/earendil-works/pi/pull/8327) (closed). Adds a `RenderContext` with a monotonic deadline so large Markdown rendering cannot monopolize the TUI event loop.

7. **feat: add `disabledCommands` setting** — [#8326](https://github.com/earendil-works/pi/pull/8326) (closed). Lets users/organizations disable built-in slash commands such as `/share` and `/export`, hiding them from autocomplete.

8. **fix(coding-agent): collapse tool result images until output is expanded** — [#8303](https://github.com/earendil-works/pi/pull/8303) (closed). Prevents Kitty/iTerm images from remaining visible in collapsed tool output.

9. **feat(ai): generalize openai-completions thinking token budget fields** — [#8275](https://github.com/earendil-works/pi/pull/8275) (closed). Extends the vLLM thinking-budget clamp to Qwen/SGLang and llama.cpp field names.

10. **fix(coding-agent): restore continuation after retry and compaction** — [#8283](https://github.com/earendil-works/pi/pull/8283) (open). Fixes an edge case where retry cutoff + compaction leaves the first user message in a bad state, breaking continuation.

## Hot Discussions

### Q&A

- **Which plugins, add-ons, or extensions do you most enjoy using with the Pi agent?** — [#3373](https://github.com/earendil-works/pi/discussions/3373) (11 comments, 8 👍). Long-running community thread for extension recommendations; still receiving active engagement.

### Ideas

- **Pi repo is hitting 50MB (dependencies excluded), consider too fat?** — [#8294](https://github.com/earendil-works/pi/discussions/8294) (1 comment, 1 👍). Raises repo-size minimalism as a project objective.

## Feature Request Trends

- **More extension hooks and public APIs** — repeated requests for hooks after recovery exhaustion, pre-persistence message replacement, skill name-spacing, and a supported VirtualTerminal testing entry point ([#8317](https://github.com/earendil-works/pi/issues/8317), [#8292](https://github.com/earendil-works/pi/issues/8292), [#8329](https://github.com/earendil-works/pi/issues/8329), [#8289](https://github.com/earendil-works/pi/issues/8289)).
- **Provider-compatible control plane** — OpenAI-compatible `/login` flow, Amazon Bedrock Mantle support, retry classification for OpenAI Codex, and User-Agent propagation on all API paths ([#8320](https://github.com/earendil-works/pi/pull/8320), [#8302](https://github.com/earendil-works/pi/pull/8302), [#8138](https://github.com/earendil-works/pi/issues/8138), [#8305](https://github.com/earendil-works/pi/issues/8305)).
- **User-configurable defaults and governance** — `disabledCommands`, locale/language switching in `/settings`, and replacing `find` with `fd` on Windows ([#8326](https://github.com/earendil-works/pi/pull/8326), [#8296](https://github.com/earendil-works/pi/issues/8296), [#8282](https://github.com/earendil-works/pi/issues/8282)).
- **Performance under long sessions** — cache-friendly compaction, TUI rendering yielding, and collapsed tool-result images ([#8307](https://github.com/earendil-works/pi/pull/8307), [#8327](https://github.com/earendil-works/pi/pull/8327), [#8303](https://github.com/earendil-works/pi/pull/8303)).

## Developer Pain Points

- **Long-session TUI instability** — full-screen flashes, viewport jumps, and broken image rendering in full-screen/collapsed modes ([#8281](https://github.com/earendil-works/pi/issues/8281), [#8309](https://github.com/earendil-works/pi/issues/8309), [#8306](https://github.com/earendil-works/pi/issues/8306), [#8303](https://github.com/earendil-works/pi/pull/8303)).
- **Compaction and context management are fragile** — threshold checks don’t run mid-agent, zero-usage providers never trigger threshold compaction, and `/compact` cannot be queued between prompts ([#6339](https://github.com/earendil-works/pi/issues/6339), [#8328](https://github.com/earendil-works/pi/issues/8328), [#8301](https://github.com/earendil-works/pi/issues/8301)).
- **Timeout handling is inconsistent** — OpenAI clients are created without a custom timeout, `streamSimple` drops `timeoutMs`, and remote OpenAI-compatible endpoints fail non-deterministically ([#8323](https://github.com/earendil-works/pi/issues/8323), [#8321](https://github.com/earendil-works/pi/issues/8321), [#8286](https://github.com/earendil-works/pi/issues/8286)).
- **Provider cost/attribution bugs** — fallback usage priced with the requested model, Copilot login rate limits, and UA leakage on OpenAI-compatible paths ([#8285](https://github.com/earendil-works/pi/issues/8285), [#8251](https://github.com/earendil-works/pi/issues/8251), [#8305](https://github.com/earendil-works/pi/issues/8305)).
- **Windows-specific friction** — `find` hangs on huge directories, and npm-installed Pi is significantly slower than the release binary due to Defender scanning; users request `fd` defaults and better installer docs ([#8282](https://github.com/earendil-works/pi/issues/8282), [#8299](https://github.com/earendil-works/pi/issues/8299)).
- **Session safety gaps** — no in-use lock means two processes can append to the same session JSONL, causing divergent branches and cross-window delivery ([#8300](https://github.com/earendil-works/pi/issues/8300)).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-19

## Today's Highlights

Multi-agent coordination is the dominant theme this cycle: the v0.21.11 nightly ships a live-session registry with `qwen sessions ps`, while several new issues expose gaps in team messaging, background-task semantics, and agent discovery. On the validation side, the full 500-case SWE-bench Verified + 89-case Terminal-Bench 2.0 runs were QUARANTINED twice before the r3 re-run shipped, while the lighter credential-refresh and sandbox-recovery smoke tests passed — pointing to harness flakiness under batch load rather than a single hard failure.

## Releases

**v0.21.11-nightly.20260818.259951c53e**
- feat(core): add a live-session registry and `qwen sessions ps` by @qqqys ([PR #8969](https://github.com/QwenLM/qwen-code/pull/8969))
- feat(daemon): add daemon-side skill-toggle support

**Benchmark/validation releases** (Qwen-Ref: v0.21.13)
- `dsw-eas-tb-smoke-20260818-r1` — transient Sandbox recovery smoke
- `dsw-eas-tb-smoke-20260818-r2` — credential-refresh smoke; SWE-bench Verified 1/1 **SUCCEEDED**
- `dsw-eas-full-20260818-r1` / `r2` — full 500+89-case E2E; both **QUARANTINED**
- `dsw-eas-full-20260818-r3` — full E2E re-run with final writeback

## Hot Issues

1. **[#656 — API Error 400 InternalError.Algo.InvalidParameter for every message](https://github.com/QwenLM/qwen-code/issues/656)** (P1, 11 comments) — A long-running P1: every request fails with a 400 after 12–16 hours of normal use, with no config change. Open for roughly a year, it remains the community's most persistent API-gateway complaint.

2. **[#9430 — Named teammates silently ignore `run_in_background: false`](https://github.com/QwenLM/qwen-code/issues/9430)** (P3, 3 comments) — Agent Team teammates accept the flag but still spawn concurrently, breaking the expected sequential-execution contract.

3. **[#9431 — `list_agents` empty result is ambiguous while Agent Team teammates are active](https://github.com/QwenLM/qwen-code/issues/9431)** (P3, 3 comments) — The tool only reflects ordinary background agents, so coordinators get a false "none available" read while named teammates are still running, inviting duplicate launches.

4. **[#9276 — Team members cannot send ordinary messages to their leader](https://github.com/QwenLM/qwen-code/issues/9276)** (P2, 7 comments) — Status/completion messages from team members are misrouted as shutdown requests and rejected with "Only the team leader can request shutdowns."

5. **[#8400 — Desktop 0.0.5 / Windows: sessions silently auto-deleted after restart](https://github.com/QwenLM/qwen-code/issues/8400)** (P1, 4 comments) — A workspace cwd mismatch makes the provider loader return 0 messages, and the app auto-deletes local session mirrors without confirmation — silent data loss.

6. **[#9291 — Unsupported image MIME can abort a Responses-compatible session](https://github.com/QwenLM/qwen-code/issues/9291)** (P2, 4 comments) — A real `.heic` attachment is forwarded as `image/heic` and rejected by the endpoint mid-session, aborting the entire conversation.

7. **[#9434 — `ask` returns from Edit/WriteFile PreToolUse hooks do not display diffs](https://github.com/QwenLM/qwen-code/issues/9434)** (P2, 2 comments) — When a hook escalates a path decision to human review, the confirmation dialog lacks a diff, so the reviewer can't see what they're approving.

8. **[#9250 — `qwen serve` host writer hard-codes new-file mode 0600](https://github.com/QwenLM/qwen-code/issues/9250)** (P3, 4 comments) — `write_file`/`edit`/`notebook_edit` create new files 0600 unconditionally, ignoring the daemon umask, with no settings override.

9. **[#9419 — Activity-ordered session cursors can duplicate a row mid-pagination](https://github.com/QwenLM/qwen-code/issues/9419)** (P3, 3 comments) — The live activity watermark used for cursor ordering is non-durable, so a live entry retiring during pagination can surface twice.

10. **[#9194 — Close the mutation-verified test-pin gaps from PR #9096 review rounds 5–6](https://github.com/QwenLM/qwen-code/issues/9194)** (P3, 11 comments) — Automated review flagged tests whose stated contracts aren't actually pinned: a production mutation can ship with the suite green. Follow-up hardening is being tracked explicitly.

## Key PR Progress

1. **[#9416 — fix(review): keep the blocker in a COMMENT body every softening path reaches](https://github.com/QwenLM/qwen-code/pull/9416)** — Guarantees the blocker text survives on every path where a REQUEST_CHANGES is downgraded to COMMENT.

2. **[#9092 — feat(review): resume an interrupted PR review from its on-disk state](https://github.com/QwenLM/qwen-code/pull/9092)** — `fetch-pr --resume` validates the previous report, worktree, and diff hash before continuing, making long multi-round reviews resumable.

3. **[#9396 — feat(serve): Add live-state session activity watermark](https://github.com/QwenLM/qwen-code/pull/9396)** — Tracks in-memory live activity alongside persisted transcript mtime for activity-ordered session lists (the fix behind #9419).

4. **[#9301 — feat(goal): account the tokens a Goal spends](https://github.com/QwenLM/qwen-code/pull/9301)** — Adds `tokensUsed` to `GoalRecord`, summed by `reduceGoalTurnFinished` and exposed in `get_goal` alongside the turn count.

5. **[#9421 — fix(ui): collapse duplicate in-flight tool_group rendered from history + pending](https://github.com/QwenLM/qwen-code/pull/9421)** — Fixes the TUI bug where the latest tool call row renders twice during execution because it exists in both committed history and the pending list.

6. **[#9347 — fix(dingtalk): attach media from quoted messages](https://github.com/QwenLM/qwen-code/pull/9347)** — The DingTalk channel can now download and attach images/files/audio/video from quoted messages to the current agent prompt.

7. **[#9392 — fix(serve): let channel workers reach TLS-enabled daemons](https://github.com/QwenLM/qwen-code/pull/9392)** — Channel workers now receive an `https://` loopback URL when TLS is configured, fixing startup validation against TLS daemons.

8. **[#9370 — fix(ci): give the macOS and Windows lanes a trigger again](https://github.com/QwenLM/qwen-code/pull/9370)** — Adds a platform-sensitivity classifier and nightly `main` runs so OS-specific lanes can actually run and surface failures.

9. **[#9273 — feat(review): capture-tui — rendering claims get pixels, not prose](https://github.com/QwenLM/qwen-code/pull/9273)** — Drives commands in a private tmux server, captures pane text to `.ans`, and renders `.png` via `freeze` for verifiable UI regression evidence.

10. **[#9384 — feat(skills): add find-simplifications sweep skill](https://github.com/QwenLM/qwen-code/pull/9384)** — A slow-cadence repo-scoped skill that finds dead files, orphaned locale keys, and removed-feature scaffolding, turning them into evidence-based cleanup work items.

## Feature Request Trends

- **Multi-agent coordination**: From the closed RFC #8718 (native session coordination) through cross-session messaging (#8724), team task dispatch (#9282), and background semantics (#9430), the community is pushing hard on multi-session/team topologies.
- **Session lifecycle predictability**: Session rotation bounds (#8927), desktop session persistence (#8400), live session watermarks (#9396/#9419), and publish-time convergence advisories (#9278) all target long-lived sessions that behave deterministically.
- **Review/CI automation**: The `/review` machinery is a major investment area — resume support (#9092), private verifier worktrees (#9221), pixel-level TUI captures (#9273), flakiness gates (#9125), and convergence brakes (#9262, #9297).
- **Front-end consolidation**: Chat panel unification (#5883), cross-host transcript contracts (#9354), an in-app browser panel for the Electron shell (#9412), and headless-host workspace browsing (#9406) all point to one consistent UI across VS Code, desktop, and web.
- **Ecosystem interop**: A default-off Cursor SDK-backed coding subagent (#9428) signals interest in plugging Qwen Code into external agent ecosystems behind explicit opt-in gates.

## Developer Pain Points

- **Opaque API gateway errors**: #656 (InvalidParameter) and #3145 (DataInspectionFailed) both involve 400s from the model API with no client-side cause; #656 has been open for over a year.
- **Underspecified multi-agent semantics**: `run_in_background` is ignored (#9430), `list_agents` is misleading during team runs (#9431), and team-member messages get misrouted as shutdowns (#9276) — the team-messaging contract needs a formal spec.
- **Silent session fragility**: Windows desktop sessions vanish without confirmation (#8400), unsupported image MIME aborts a whole session (#9291), and pagination can duplicate rows (#9419).
- **Test infrastructure flakiness**: Two full benchmark runs were quarantined in a single day, alongside flaky `utimesSync` assertions (#9125) and under-pinned test contracts (#9194) — fueling investment in flakiness gates and platform-sensitive CI triggers.
- **File-permission surprises**: `qwen serve` creating new files 0600 while ignoring umask (#9250) creates friction for multi-user and shared-workspace workflows.

</details>

<details>
<summary><strong>CodeWhale</strong> — <a href="https://github.com/Hmbown/CodeWhale">Hmbown/CodeWhale</a></summary>

# CodeWhale Community Digest — 2026-08-19

## 1. Today's Highlights

CodeWhale shipped **v0.9.9**, finalizing a release cycle focused on late fixes and CI reliability while formally deprecating the legacy `deepseek-tui` npm package. The community pushed forward major structural work around TUI crate decomposition ([#5316](https://github.com/Hmbown/CodeWhale/issues/5316)), Chinese docs localization ([#5482](https://github.com/Hmbown/CodeWhale/issues/5482)), and the web dictionary-spine i18n refactor ([#5337](https://github.com/Hmbown/CodeWhale/issues/5337)). Release automation and two user-facing regressions — dropped system prompts after `/new` ([#5505](https://github.com/Hmbown/CodeWhale/issues/5505)) and the missing header status indicator ([#5512](https://github.com/Hmbown/CodeWhale/issues/5512)) — generated the most active issue discussion.

## 2. Releases

### [v0.9.9](https://github.com/Hmbown/CodeWhale/pull/5499)
- Finalizes CodeWhale **v0.9.9** after the late release-candidate fold-ins.
- Fixes narrow-terminal compact-row metrics below 60 columns and strict `rustdoc::bare-urls` lint failures.
- Synchronizes root/TUI changelogs and public contributor credits.
- Reaffirms that `codewhale` remains the lowercase public product identifier; the legacy `deepseek-tui` npm package is deprecated and receives no further releases.

## 3. Hot Issues

All 9 issues updated in the last 24h are listed.

- [#5316 EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)](https://github.com/Hmbown/CodeWhale/issues/5316) — 7 comments  
  The central tracking issue for the TUI crate decomposition. This is the architectural umbrella every sub-EPIC and FEAT reports into, making it the key refactor to watch.

- [#5337 Web: finish the #4934 dictionary spine — retire every isZh branch](https://github.com/Hmbown/CodeWhale/issues/5337) — 5 comments  
  Continues the web i18n cleanup by removing remaining `isZh` ternaries in page bodies. Recent PRs have already migrated `docs/hooks` and `docs/troubleshooting`, but a large page-body remainder still needs the dictionary-spine treatment.

- [#5299 release: move npm publication to trusted publishing](https://github.com/Hmbown/CodeWhale/issues/5299) — 3 comments  
  The v0.9.5 release completed everything noninteractively except the npm wrapper, which still required a maintainer browser login and 2FA. This issue tracks removing the last human bottleneck from the release pipeline.

- [#5508 [enhancement] feat: continuous loop](https://github.com/Hmbown/CodeWhale/issues/5508) — 3 comments  
  Requests an infinite-turn / continuous-loop mode for AI-as-coordinator workflows, so agents can continuously gather reports and assign jobs without sleeping in a single turn. Community interest is around long-running autonomous orchestration.

- [#5505 [bug] System prompt is dropped after `/new`](https://github.com/Hmbown/CodeWhale/issues/5505) — 2 comments  
  After starting a new session, the model receives no system prompt — only a folded `<context_update>` line. This is a serious correctness regression for project-aware coding sessions.

- [#5512 [bug] Header status indicator never renders since 0.9.7](https://github.com/Hmbown/CodeWhale/issues/5512) — 1 comment  
  Windows 11 / Windows Terminal users report that the `cw / whale / dots` status indicator disappeared in 0.9.7+ even though it worked in the 0.8.64 era. Reproduced on 0.9.8 and 0.9.9.

- [#5497 fix(tasks): terminalize stuck durable executions and bound event growth](https://github.com/Hmbown/CodeWhale/issues/5497) — 1 comment  
  A durable Task Manager worker can stay occupied forever when the runtime never emits `turn.completed` or does not honor cancellation. Needs a grace-period / forced-terminal path to avoid hung workers.

- [#5482 EPIC(docs): review, partially restructure, and fully localize documentation to Chinese](https://github.com/Hmbown/CodeWhale/issues/5482) — 1 comment  
  Large documentation epic driven by the growing Chinese user base. English-only docs, stale sources, and machine-translation errors are the core pain points. Tier 1 PR is already up.

- [#5496 ci: bound release-candidate and artifact workflow jobs](https://github.com/Hmbown/CodeWhale/issues/5496) — 0 comments  
  Follow-up to the `ci.yml` timeout cap: the release-candidate, release-artifacts, and release workflows still lack timeout bounds and remain vulnerable to indefinitely assigned runners.

## 4. Key PR Progress

Selected 10 of 26 PRs updated in the last 24h.

- [#5511 feat(tui): show repository context in git chrome](https://github.com/Hmbown/CodeWhale/pull/5511) — OPEN  
  Adds repository/worktree context to the TUI header: `repo · branch*`, linked worktree display, and ahead/behind counts.

- [#5506 feat(tui): add command context adapters and migration gate (FEAT-015)](https://github.com/Hmbown/CodeWhale/pull/5506) — OPEN  
  Builds the TUI-owned dependency-injection and migration infrastructure needed to safely extract slash-command implementations. Deliberately migrates zero production command groups in this PR.

- [#5507 docs(i18n): complete Tier 1 of Chinese docs localization (#5482)](https://github.com/Hmbown/CodeWhale/pull/5507) — OPEN  
  Restructures the docs tree into per-language folders and moves Chinese translations into `docs/zh_hans/`, laying the foundation for full Chinese docs localization.

- [#5504 feat(web): move docs/hooks and docs/troubleshooting onto the dictionary spine (#5337)](https://github.com/Hmbown/CodeWhale/pull/5504) — OPEN  
  Removes 12 `isZh` branches from the two smallest remaining web docs pages, continuing the dictionary-spine migration.

- [#5491 fix(tui): persist approval outcomes before execution](https://github.com/Hmbown/CodeWhale/pull/5491) — OPEN  
  Persists approval requests and terminal outcomes in a session-owned log before execution, denies execution when receipts cannot be persisted, and reconstructs approval state on session resume.

- [#5499 release: v0.9.9](https://github.com/Hmbown/CodeWhale/pull/5499) — CLOSED  
  Finalizes the v0.9.9 release, including changelog synchronization and contributor credit updates.

- [#5495 ci: cap every ci.yml job with timeout-minutes so dead runners fail fast](https://github.com/Hmbown/CodeWhale/pull/5495) — CLOSED  
  Adds explicit `timeout-minutes` to all ten `ci.yml` jobs. Previously a dead runner could block a required CI gate for up to GitHub’s 360-minute default.

- [#5492 perf(skills): keep configured skill prompts stable (#5473)](https://github.com/Hmbown/CodeWhale/pull/5492) — CLOSED  
  Keeps native skills under a configured skills root stable in the model-facing catalog by exposing only name/description and replacing the physical path with `<configured-skills>` in discovery warnings.

- [#5404 fix(client): fail closed on SSE UTF-8 split across HTTP/2 DATA (#5374)](https://github.com/Hmbown/CodeWhale/pull/5404) — CLOSED  
  Fixes garbled streaming agent text on macOS with DeepSeek Flash by handling multi-byte UTF-8 characters split across HTTP/2 DATA frames instead of decoding with `from_utf8_lossy`.

- [#5405 feat(tui): configurable model-visible read/tool-result budgets (#5367)](https://github.com/Hmbown/CodeWhale/pull/5405) — CLOSED  
  Makes read and tool-result budgets configurable, addressing conservative per-result ceilings that forced ~20 extra reads on a ~64 KiB file for self-hosted long-context DeepSeek V4 users.

## 5. Hot Discussions

### Q&A / General
- [#1473 Token Usage HIGH](https://github.com/Hmbown/CodeWhale/discussions/1473) — 3 comments, 6 👍  
  A user reports DeepSeek TUI / CodeWhale consuming roughly **3× more tokens** than Claude Code CLI for similar workflows with the same DeepSeek API key. The thread asks whether CodeWhale has an equivalent skill mechanism or token-reduction settings.

## 6. Feature Request Trends

- **Fully noninteractive releases**: Move npm publication to trusted publishing and remove 2FA/browser-login bottlenecks ([#5299](https://github.com/Hmbown/CodeWhale/issues/5299)).
- **CI timeout hardening**: Cap every workflow job, including release-candidate and artifact jobs, to prevent dead-runner stalls ([#5495](https://github.com/Hmbown/CodeWhale/pull/5495), [#5496](https://github.com/Hmbown/CodeWhale/issues/5496)).
- **TUI modularization**: Incrementally decompose the TUI crate and extract slash-command implementations via clean dependency-injection boundaries ([#5316](https://github.com/Hmbown/CodeWhale/issues/5316), [#5506](https://github.com/Hmbown/CodeWhale/pull/5506)).
- **Deep i18n and Chinese docs**: Full web page dictionary-spine adoption and restructured, localized Chinese documentation ([#5337](https://github.com/Hmbown/CodeWhale/issues/5337), [#5482](https://github.com/Hmbown/CodeWhale/issues/5482)).
- **Long-running autonomous agent loops**: Infinite-turn / continuous-loop modes for coordinator-style AI workflows ([#5508](https://github.com/Hmbown/CodeWhale/issues/5508)).
- **Configurable runtime limits**: Model-visible read/tool-result budgets, auto-router classifier timeouts, and terminalization of stuck durable executions ([#5405](https://github.com/Hmbown/CodeWhale/pull/5405), [#5494](https://github.com/Hmbown/CodeWhale/pull/5494), [#5497](https://github.com/Hmbown/CodeWhale/issues/5497)).
- **Token efficiency**: Strong demand for lower token consumption and cost parity with other CLIs ([#1473](https://github.com/Hmbown/CodeWhale/discussions/1473)).

## 7. Developer Pain Points

- **Release friction**: npm publishing still requires maintainer browser login + security-key 2FA; expired workstation credentials blocked v0.9.5 ([#5299](https://github.com/Hmbown/CodeWhale/issues/5299)).
- **CI hangs and dead runners**: Jobs with no `timeout-minutes` could sit `in_progress` for six hours, blocking required gates ([#5495](https://github.com/Hmbown/CodeWhale/pull/5495), [#5496](https://github.com/Hmbown/CodeWhale/issues/5496)).
- **Regression risk in recent releases**: System prompt disappears after `/new` ([#5505](https://github.com/Hmbown/CodeWhale/issues/5505)); header status indicator vanished on Windows since 0.9.7 ([#5512](https://github.com/Hmbown/CodeWhale/issues/5512)).
- **Durable execution can hang forever**: Workers polling every 40 ms never get a terminal event and cancellation is not honored ([#5497](https://github.com/Hmbown/CodeWhale/issues/5497)).
- **Higher-than-expected token usage**: Users report ~3× token burn compared to Claude Code CLI for similar workflows ([#1473](https://github.com/Hmbown/CodeWhale/discussions/1473)).
- **Documentation and i18n debt**: English-only docs block Chinese-speaking users; stale sources and machine-translation errors make the problem worse ([#5482](https://github.com/Hmbown/CodeWhale/issues/5482)).
- **Test-environment fragility**: Percent-encoded script paths break deploy preflight tests in non-ASCII checkouts ([#5503](https://github.com/Hmbown/CodeWhale/pull/5503)), and Fleet deletion tests can read a maintainer’s real personal state ([#5498](https://github.com/Hmbown/CodeWhale/pull/5498)).

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*