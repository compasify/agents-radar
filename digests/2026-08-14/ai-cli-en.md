# AI CLI Tools Community Digest 2026-08-14

> Generated: 2026-08-14 00:59 UTC | Tools covered: 10

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

# Cross-Tool AI CLI Comparison Report
**2026-08-14 Community Digest Analysis**

---

## 1. Ecosystem Overview

The AI CLI ecosystem is in a phase of **rapid feature expansion and stabilization pain**. Ten actively-tracked tools show a bimodal distribution: established players (Claude Code, OpenAI Codex, Gemini CLI) are shipping patch releases and hardening infrastructure, while challengers (Qwen Code, OpenCode, Pi, CodeWhale) are pushing aggressive feature velocity in multi-agent orchestration and provider breadth. The dominant cross-cutting friction points are **context-window/session management**, **Windows reliability**, and **MCP (Model Context Protocol) OAuth/process hygiene** — all three appear in nearly every tool's issue tracker. Security hardening is also rising sharply, with supply-chain CVEs, unverified install scripts, and fail-open permission bugs receiving maintainer attention across four projects this week. Grok Build remains dormant, and Kimi CLI is quiet but carrying two serious reliability reports.

---

## 2. Activity Comparison

| Tool | Hot Issues (24h) | PRs Active (24h) | Release Status | Notable Signal |
|---|---|---|---|---|
| **Claude Code** | 10 | 2 (both docs/CI) | 2 patches (v2.1.231, v2.1.232) | #38335 at 832 comments despite `[invalid]` label |
| **OpenAI Codex** | 10 | 9 | 3 alphas (rust-v0.148.0-alpha.11–13) | No changelogs; infra-heavy PRs (thread queues, sandbox manifest) |
| **Gemini CLI** | 10 | 10 | 1 nightly (v0.56.0) | Security queue dominates: CVE upgrade, RCE fix, A2A auth |
| **Copilot CLI** | 10 | 1 (docs, closed) | 1 patch (v1.0.80-0) | 5 new triage issues, all MCP OAuth/session-state |
| **Kimi CLI** | 3 | 0 | None | Silent stream hangs + 88k-token gibberish generation |
| **OpenCode** | 10 | 10 | 1 patch (v1.18.18) | V2 migration + free-tier 429 complaints dominate |
| **Pi** | 10 | 10 | None | Critical compaction bug #6879 (17 👍) unresolved |
| **Qwen Code** | 10 | 10 | 1 stable (v0.21.11) + 1 preview | SWE-bench **QUARANTINED** (0/500) — release gated on recovery |
| **CodeWhale (DeepSeek TUI)** | 10 | 10 | 1 (v0.9.7 rebrand) | Rebrand shipping; agent-tool schema simplification in flight |
| **Grok Build** | 0 | 0 | None | Dormant |

**Volume ranking by PR activity:** Qwen = OpenCode = Pi = CodeWhale = Gemini (10) > Codex (9) > Claude (2) > Copilot (1) > Kimi (0) = Grok (0).

---

## 3. Shared Feature Directions

These requirements appear independently across multiple communities, indicating genuine product gaps:

**a) Context/session lifecycle management** — The #1 cross-tool demand.
- Claude Code: session limits (#38335), cross-surface history sync (#28791), prompt cache waste (#63930)
- OpenAI Codex: compaction bloat up to 145GiB (#31198), unreadable post-compaction sessions (#38466), preserving developer messages across compaction (#38445)
- Pi: auto-compaction never triggers before provider rejection (#6879), progress counters inconsistent (#7960)
- OpenCode: compaction exceeding context window (#42448), silent context pruning of instructions (#42437)
- Kimi: persistent cross-session memory (#1283)
- Qwen: session-restore timeout loses sessions (#8678)
- Copilot CLI: orphaned permission events replay on resume (#4469), stop deletes session (#4477)

**b) Multi-agent/subagent reliability** — The fastest-growing category.
- Gemini CLI: MAX_TURNS falsely reported as GOAL success (#22323, p1), generalist agent hangs (#21409, p1)
- Claude Code: background agents silently failing (#78338, #86345), `@`-mentions just shipped
- OpenAI Codex: completed subagents still count toward limits (#22779), stuck "running" subagents (#38408), provider-incompatible message types (#33551)
- CodeWhale: `agent_wait` deadlock after 10-subagent launch (#1425)
- Qwen: `/coordinate` fleet orchestration stage 1A/1B/2/3 shipping incrementally

**c) MCP reliability and OAuth polish** — Blocking enterprise adoption.
- Copilot CLI: Atlassian OAuth regression (#4480), Entra silent-refresh failure (#4464), transient 5xx disables server for session (#4466)
- OpenAI Codex: stdio fd leaks → EMFILE (#26984), per-server OAuth callback ports (#38448)
- Claude Code: OAuth redirect fix in v2.1.231, ignored `permissions.allow` rules (#80658)
- Qwen: MCP OAuth links dead in Web Shell (#9108)
- CodeWhale: `"nextCursor": null` breaks strict MCP clients (#5336)

**d) Windows support deficit** — Eight of ten tools have fresh Windows-only bugs.
- Qwen: installer SHA-256 failure (#7118), Ctrl+V paste regression (#9061), visible runtime Terminal (#9043)
- Codex: extension fails to load (#37458), sandbox setup helper not found (#30829), MSIX pwsh sandbox failure (#35871)
- Claude Code: Electron GPU crashes (#81698), `SSH_AUTH_SOCK` missing (#29717)
- CodeWhale: config path fragmentation (#2369), SSH exit 255 (#1829)
- Pi: misleading "bash not found" from invalid JSON (#7829), shared-state permission lockout (#7779)

**e) Security hardening** — Now a permanent workstream.
- Gemini CLI: CRITICAL simple-git CVE (#28778), eval-workflow RCE hole (#28740), A2A unauthenticated routes (#28699), corrupt MCP config fail-open (#28787)
- OpenCode: unverified `curl\|bash` upgrade (#42434), webfetch SSRF (#42435), context-pruning integrity (#42437)
- Claude Code: CI action SHA-pinning (#60280)

**f) Per-agent model/reasoning-effort configuration** — Cross-tool parity demand.
- Copilot CLI: effort frontmatter (#2904), `model` array syntax (#2133), hardcoded `gpt-5.4-mini` in `explore` tool (#3954)
- Gemini CLI: adding Claude Sonnet 4.5 / Opus 4.8 definitions (#28803)
- OpenCode: xAI reasoning-effort fix in v1.18.18

---

## 4. Differentiation Analysis

| Tool | Core Focus | Target User | Technical Approach | Friction Signature |
|---|---|---|---|---|
| **Claude Code** | Enterprise-grade agentic sessions, cross-session messaging | Pro/enterprise teams on Claude Max | Full-conversation subagent forking, prompt-cache inheritance, desktop+CLI sync | Quota opacity (#38335), auto-update desktop regressions |
| **OpenAI Codex** | Rust-based infra-heavy reliability | Developers embedding agents in CI/daemons | Thread-queue APIs, exec-server proxy, daemon session model, compaction preservation | Context bloat, Windows sandbox bootstrap, no changelogs on alphas |
| **Gemini CLI** | Security-first agent orchestration | GCP/Vertex users, security-conscious teams | Eval instrumentation, silent retry w/ TTL cache, A2A server auth, multi-provider model defs | Subagent false-success states, permission regressions |
| **Copilot CLI** | GitHub ecosystem extension | GitHub Copilot subscribers | `.agent.md` frontmatter, `--server --stdio` hosting, shared-session UI | Remote MCP OAuth churn; lowest code velocity this week (1 doc PR) |
| **Kimi CLI** | ACP streaming + Moonshot platform | Kimi/K2 API users | ACP protocol terminal frames, wire logging | Silent hangs, unbounded generation, no persistent memory |
| **OpenCode** | OSS hackability, provider freedom | Hobbyists → orgs, V2 migration users | TUI-first, Zen free tier, npm/pnpm install paths | Free-tier rate-limit 429s, V1/V2 DB coexistence, self-deleting binary |
| **Pi** | Terminal-first, extension plugins | Terminal purists, multi-backend users | Procedural extension model, visual-line caching, provider fallbacks | Late compaction, terminal-state corruption, OSC 52 clipboard gaps |
| **Qwen Code** | Fleet multi-agent orchestration | Teams adopting agent fleets; GCP Qwen users | `/coordinate`, web-shell, daemon-owned Local Control, benchmark-gated releases (SWE-bench QUARANTINED) | Vertex AI auth friction, naive file-content sniffing |
| **CodeWhale** | Rebranded DeepSeek TUI, China-market UX | DeepSeek API users, Chinese-language developers | Whitespace/tool-schema simplification, model-guardian Auto-Review, `/pin` mini-window | Chinese IME/text truncation, Cygwin path splits, agent_wait deadlocks |
| **Grok Build** | — | — | — | Inactive |

**Key structural distinctions:** Claude Code is the only tool with a **paid-plan session-limit controversy at 832 comments**; OpenAI Codex is the only one investing in **daemon/executor network infrastructure**; Qwen is the only one **gating releases on benchmark recovery**; Pi and CodeWhale are the only **terminal-purist/extension-driven** tools; Gemini CLI has the strongest **adversarial security posture** (fail-closed proxies, CVE response).

---

## 5. Community Momentum & Maturity

**Highest velocity (10 PRs + features in 24h):** Qwen Code, OpenCode, Pi, Gemini CLI, CodeWhale — all shipping meaningful code daily, not just triage.

**Rapid alpha cadence:** OpenAI Codex (3 alphas/day) and Claude Code (2 patches) iterate fastest on releases, but Claude's PR queue is thin (docs/CI only) — its activity is concentrated in the issue tracker.

**Most engaged community (by volume):** Claude Code — #38335 alone (832 comments) exceeds Kimi's *entire* issue activity for the window. OpenCode's legacy-layout request (41 👍) and Gemini's p1 agent-reliability threads show strong organized feedback.

**Maturity assessment:**
- **Stable but embattled:** Claude Code (deep feature set, but quota backlash and desktop regression cluster)
- **Foundation-building:** OpenAI Codex (infrastructure work before feature polish; alpha releases without notes signal internal cadence over community pacing)
- **Security-mature:** Gemini CLI (CVE response within 24h, fail-closed design philosophy)
- **Transition risk:** OpenCode (V2 migration breaking V1 coexistence), Qwen (benchmark QUARANTINE is an honesty signal but a release-gate risk), CodeWhale (rebrand + deprecation churn)
- **At risk of stagnation:** Grok Build (zero activity), Kimi (no PRs, 3 issues)

---

## 6. Trend Signals

1. **Context-window management is the ecosystem's systemic weak point.** Seven tools have open complaints about compaction failing, triggering too late, or silently dropping instruction-bearing content. Expect a wave of "compaction as a first-class event" features — preserved developer messages (Codex #38445), per-agent-step checks (Pi #6879), and surface-what-was-pruned (OpenCode #42437).

2. **Multi-agent orchestration is moving from experiment to product.** Qwen's staged `/coordinate` rollout, Claude Code's subagent-forking default-on, and Gemini's p1 subagent-reliability bugs all point to fleets as the default architecture — with **truthful completion status** (Gemini #22323) as the new correctness bar.

3. **MCP is the integration layer, and its maturity gap is the top enterprise blocker.** OAuth flows, retry on transient errors, fd hygiene, and permission-rule enforcement are broken across every vendor. Teams adopting remote MCP servers should budget for auth maintenance until the spec and client implementations converge.

4. **Windows is the last platform frontier.** Eight tools carry fresh Windows-only defects; Qwen alone has three. The pattern — installer failures, sandbox bootstrap, paste regressions, GPU crashes — suggests insufficient CI coverage on Windows and a market opportunity for any tool that treats Windows as first-class.

5. **Security feedback loops are tightening.** Community-driven audits (OpenCode's `curl|bash` and SSRF reports) plus maintainer-led CVE fixes (Gemini's simple-git) indicate supply-chain integrity is now a release-blocking concern. Fail-open defaults (Gemini's MCP config corruption #28787) are being called out specifically as unacceptable.

6. **Quota and cost transparency is becoming a trust issue.** Claude Code's 832-comment session-limit thread, OpenCode's rate-limit 429s, and Gemini's capacity-retry work all reflect users demanding **predictable, auditable consumption** as agentic usage grows.

7. **Model/provider flexibility is table stakes.** Copilot's hardcoded model complaints, Gemini's Claude-model additions, Qwen's Vertex AI friction, and CodeWhale's DwarfStar local route all signal that users expect any CLI to work with any model backend — lock-in is a liability.

8. **TUI polish is a differentiator.** Markdown math (Codex #18906), legacy-layout preservation (OpenCode #37012), visual-line caching (Pi #8066), and clipboard correctness are not cosmetic — they determine whether power users can live in the terminal all day.

---

*Report generated from 2026-08-14 community digests across 10 tools: Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi CLI, OpenCode, Pi, Qwen Code, CodeWhale, and Grok Build.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Note: PR comment counts were not explicitly populated in the source data, so the PR order below uses the provided “sorted by comments” ordering as the attention proxy. All listed PRs are open as of 2026-08-14.

---

## 1. Top Skills Ranking

1. **skill-creator eval reliability fix** — [PR #1298](https://github.com/anthropics/skills/pull/1298)  
   Fixes `run_eval.py` always reporting `recall=0%`, caused by the eval artifact not being installed as a real skill. Also fixes Windows stream reading, trigger detection, and parallel workers. This is the most attention-heavy PR because it directly affects the skill-description optimization loop.  
   **Status:** Open

2. **document-typography skill** — [PR #514](https://github.com/anthropics/skills/pull/514)  
   Adds typographic quality control for generated documents: orphan word wrap, widow paragraphs, section headers stranded at page bottom, and numbering misalignment. Aimed at AI-generated document polish.  
   **Status:** Open

3. **pdf skill case-sensitivity fix** — [PR #538](https://github.com/anthropics/skills/pull/538)  
   Fixes 8 case-sensitive file references in `skills/pdf/SKILL.md`, where `REFERENCE.md` and `FORMS.md` were referenced in uppercase but the actual files are lowercase. Important for cross-platform skill reliability.  
   **Status:** Open

4. **ODT / OpenDocument skill** — [PR #486](https://github.com/anthropics/skills/pull/486)  
   Adds OpenDocument Format support: creation, template filling, reading, and ODT-to-HTML conversion. Covers `.odt`, `.ods`, and related ODF/ISO-standard document formats.  
   **Status:** Open

5. **frontend-design skill clarity revision** — [PR #210](https://github.com/anthropics/skills/pull/210)  
   Rewrites the `frontend-design` skill so instructions are more actionable, internally coherent, and executable by Claude within a single conversation.  
   **Status:** Open

6. **skill-quality-analyzer + skill-security-analyzer** — [PR #83](https://github.com/anthropics/skills/pull/83)  
   Adds two meta-skills to the example marketplace: one for evaluating skill quality across structure/docs/examples, and one for security analysis of skills.  
   **Status:** Open

7. **docx tracked-change ID collision fix** — [PR #541](https://github.com/anthropics/skills/pull/541)  
   Fixes document corruption caused by `w:id` collisions between tracked changes and existing bookmarks in DOCX files. Relevant to the `docx` skill’s reliability in real-world Office documents.  
   **Status:** Open

8. **skill-creator YAML validation warning** — [PR #539](https://github.com/anthropics/skills/pull/539)  
   Adds pre-parse validation in `quick_validate.py` to detect unquoted `description` fields containing YAML-special characters like `:`, preventing silent frontmatter parsing failures.  
   **Status:** Open

---

## 2. Community Demand Trends

The Issues data reveals several concentrated demand directions:

- **Skill trust and security** — [Issue #492](https://github.com/anthropics/skills/issues/492) (43 comments) is the highest-activity issue: community skills distributed under the `anthropic/` namespace raise trust-boundary risks. Related lifecycle concerns appear in [Issue #62](https://github.com/anthropics/skills/issues/62) about disappearing skills and [Issue #189](https://github.com/anthropics/skills/issues/189) about duplicate plugin content.

- **Skill authoring and evaluation tooling** — Multiple issues center on `skill-creator` being unreliable: [Issue #556](https://github.com/anthropics/skills/issues/556) and [Issue #1169](https://github.com/anthropics/skills/issues/1169) report `recall=0%` in the eval loop, while [Issue #202](https://github.com/anthropics/skills/issues/202) argues `skill-creator` itself should be updated to best-practice operational format.

- **Organizational sharing** — [Issue #228](https://github.com/anthropics/skills/issues/228) asks for org-wide skill sharing in Claude.ai, suggesting the community wants Skills to become a shared team asset, not just a personal file-upload workflow.

- **Context-window and memory efficiency** — [Issue #1329](https://github.com/anthropics/skills/issues/1329) proposes a `compact-memory` skill for symbolic agent state, and [Issue #1487](https://github.com/anthropics/skills/issues/1487) reports the `claude-api` skill injecting ~156k tokens in one call. Demand is rising for lean, context-aware Skills.

- **Agent governance and output quality** — [Issue #412](https://github.com/anthropics/skills/issues/412) proposes an `agent-governance` skill for safety patterns; [Issue #1385](https://github.com/anthropics/skills/issues/1385) proposes a reasoning-quality-gate pipeline; [Issue #1175](https://github.com/anthropics/skills/issues/1175) raises security/context concerns around SharePoint Online document handling.

- **Platform interoperability** — [Issue #29](https://github.com/anthropics/skills/issues/29) asks about AWS Bedrock usage, and [Issue #16](https://github.com/anthropics/skills/issues/16) suggests exposing Skills as MCP tools.

---

## 3. High-Potential Pending Skills

These open PRs have meaningful community attention and may land soon:

- **ServiceNow platform skill** — [PR #568](https://github.com/anthropics/skills/pull/568)  
  Broad ServiceNow skill covering ITSM, ITOM, SecOps, ITAM/SAM, FSM, SPM, CSDM, and IntegrationHub. Recently updated, suggesting active iteration.

- **Agent Skills spec compliance fix** — [PR #1538](https://github.com/anthropics/skills/pull/1538)  
  Fixes two skills that fail `skills-ref validate`, including a `name`/directory mismatch in `template/SKILL.md`. Important for repository health and likely to move quickly.

- **plan-file-hygiene skill** — [PR #1479](https://github.com/anthropics/skills/pull/1479)  
  Addresses the lifecycle gap where planning artifacts accumulate with no cleanup. Community-framed as a “lifecycle” problem.

- **self-audit skill** — [PR #1367](https://github.com/anthropics/skills/pull/1367)  
  Adds mechanical file verification plus a four-dimension reasoning quality audit before delivery. Aligned with governance/quality demands from Issues.

- **testing-patterns skill** — [PR #723](https://github.com/anthropics/skills/pull/723)  
  Comprehensive testing guidance: Testing Trophy model, unit testing patterns, React Testing Library, and test philosophy.

- **pyxel retro-game development skill** — [PR #525](https://github.com/anthropics/skills/pull/525)  
  Adds workflow support for pyxel-mcp and the Pyxel retro game engine, targeting pixel-art/8-bit Python game creation.

---

## 4. Skills Ecosystem Insight

The community’s most concentrated demand is not for more vertical skills, but for **trustworthy, testable, and context-efficient Skills** — fixing the skill-creator evaluation loop, establishing security/provenance boundaries, and preventing Skills from exhausting the context window.

---

# Claude Code Community Digest — 2026-08-14

## Today's Highlights
Two patch releases shipped: **v2.1.232** turns subagent forking on by default (full conversation + prompt-cache inheritance, background spawns for non-teammate agents) and adds `@`-mentions for cross-session targeting, while **v2.1.231** fixes MCP OAuth redirect mismatches for pre-registered clients like Slack. In the tracker, a fresh cluster of cross-session messaging regressions on the desktop app (the 1.28929.0 / runtime 2.1.227 auto-update) is generating rapid-fire bug reports, and the long-running session-limits complaint #38335 has crossed 830 comments despite an `[invalid]` label. PR activity was quiet: only two PRs touched in the last 24 hours, both docs/CI hygiene.

## Releases
**v2.1.232**
- Subagent forking is now on by default: a `subagent_type: "fork"` subagent inherits the full conversation and prompt cache.
- Non-teammate agent spawns in interactive sessions now run in the background by default.
- Type `@` in the prompt to mention another Claude session by name.

**v2.1.231**
- Fixed MCP OAuth sign-in failing with a redirect URI mismatch for servers that use a pre-registered OAuth client, such as Slack.

## Hot Issues
1. **#38335 — Claude Max plan session limits exhausted abnormally fast** (832 comments, 474 👍) — Despite being tagged `[invalid]`, this remains the tracker's most-engaged issue. Users report CLI usage draining session limits far faster than expected since March 2026, with no official resolution. [github.com/anthropics/claude-code/issues/38335](https://github.com/anthropics/claude-code/issues/38335)
2. **#18435 — Multi-account profile management in Claude Desktop** (165 comments, 723 👍) — The most-upvoted feature request: easy switching between multiple Claude accounts/profiles with isolated configs. [github.com/anthropics/claude-code/issues/18435](https://github.com/anthropics/claude-code/issues/18435)
3. **#28791 — Sync conversation history between CLI and Desktop app** (34 comments, 123 👍) — Users want unified session history so work started in one surface can be resumed in the other. [github.com/anthropics/claude-code/issues/28791](https://github.com/anthropics/claude-code/issues/28791)
4. **#81698 — Windows Desktop GPU process crash kills all sessions** (28 comments) — Exit code 101457950 on an RTX 5080 takes down the entire app, one of four GPU crash reports this week (#81341, #82967, #83403). [github.com/anthropics/claude-code/issues/81698](https://github.com/anthropics/claude-code/issues/81698)
5. **#80988 — `heron_brook` prompt injection silently overrides user delegation policy** (23 comments, 49 👍) — A system-prompt section tells Opus 5 not to call the AgentTool unless explicitly user-requested, overriding configured delegation with no opt-out. [github.com/anthropics/claude-code/issues/80988](https://github.com/anthropics/claude-code/issues/80988)
6. **#86012 — Cross-session messages leave recipient completely unresponsive** (14 comments) — Desktop messages hang with `hadFirstResponse=false` until the idle-timeout force-kills the session 15–20 minutes later. Part of a five-issue regression cluster. [github.com/anthropics/claude-code/issues/86012](https://github.com/anthropics/claude-code/issues/86012)
7. **#82536 — `--continue` cannot find sessions created by `-p`** (13 comments) — Interactive resume can't locate print-mode sessions, breaking script-then-handoff workflows. [github.com/anthropics/claude-code/issues/82536](https://github.com/anthropics/claude-code/issues/82536)
8. **#29717 — `SSH_AUTH_SOCK` missing breaks 1Password SSH agent** (12 comments, 23 👍) — `CC_ENV_EXTRACT_LIST` omits `SSH_AUTH_SOCK`, so SSH agent forwarding silently breaks on macOS desktop. [github.com/anthropics/claude-code/issues/29717](https://github.com/anthropics/claude-code/issues/29717)
9. **#63930 — Prompt cache re-created after parallel tool calls** (10 comments) — 74% of `cache_creation` tokens wasted on Opus 4.8; cache collapses to the system+tools floor after multi-tool turns, inflating cost significantly. [github.com/anthropics/claude-code/issues/63930](https://github.com/anthropics/claude-code/issues/63930)
10. **#82092 — OTLP telemetry endpoint missing auth headers** (10 comments) — The Apps gateway serves Desktop an `otlpEndpoint` without `otlpHeaders`, so every telemetry flush is rejected with `missing_token`. [github.com/anthropics/claude-code/issues/82092](https://github.com/anthropics/claude-code/issues/82092)

## Key PR Progress
Only two PRs were touched in the last 24 hours; both are listed below.
1. **#86537 — Fix duplicated word in CHANGELOG.md** — Doc-only typo fix ("to to") in the `CLAUDE_BASH_NO_LOGIN` entry. [github.com/anthropics/claude-code/pull/86537](https://github.com/anthropics/claude-code/pull/86537)
2. **#60280 — chore(ci): SHA-pin remaining actions/checkout and actions/github-script** (closed) — Completes the CI supply-chain hardening begun in #56784 by SHA-pinning third-party actions across six workflows (auto-close-duplicates, issue triage, de-dupe, etc.). [github.com/anthropics/claude-code/pull/60280](https://github.com/anthropics/claude-code/pull/60280)

## Feature Request Trends
- **Multi-account/profile switching in Desktop** (#18435, 723 👍) — The single most-demanded feature: fast account switching with isolated configs for work vs. personal use.
- **Unified conversation history across CLI/Desktop** (#28791) — Cross-surface session sync and continuity remain a recurring theme.
- **Honoring MCP permission rules** (#80658, #81535) — `permissions.allow` entries for MCP tools are written but ignored, re-prompting on every call; users want written rules to stick.
- **Reliable cross-session messaging** (#86012 cluster + `@`-mentions in v2.1.232) — Session-to-session messaging is becoming a core workflow; users expect guaranteed delivery and response in the desktop app.
- **Agent-team lifecycle management** (#86518) — Users want registry pruning across `/clear` and accurate termination semantics, not accumulated stale `members[]`.

## Developer Pain Points
- **Desktop app regressions from auto-update**: The 1.28929.0 / runtime 2.1.227 auto-update broke cross-session messaging on Windows — silent drops, held approvals never shown, hung 0-token turns (#86012, #86275, #86298, #86385, #86386). One reporter confirms it's still broken on 2.1.231.
- **GPU crashes on Windows during browser preview**: Multiple reports of Electron GPU-process crashes (#81698, #81341, #82967, #83403), some corrupting the app package and requiring full reinstall. MSIX CIG signature conflicts with vendor-signed SwiftShader are implicated.
- **Session/plan limits draining abnormally fast** (#38335): 832 comments and counting; users report CLI usage is penalized and quota accounting is opaque — the `[invalid]` tag has not slowed community frustration.
- **Prompt cache waste on parallel tool calls** (#63930): ~74% of cache-creation tokens wasted on Opus 4.8 sessions, directly hitting cost for heavy tool-use workloads.
- **Background agents silently failing** (#78338, #86345, #86471): completed-with-empty-results, leaked background tasks with no way to clear, and dropped SendMessages.
- **Safety-filter false positives on hardware workflows** (#71871, #71865, #71861): legitimate USB enumeration and drone-integration work blocked — closed, but the pattern is a concern for embedded developers.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-14

## Today’s Highlights
Three new `rust-v0.148.0-alpha` releases landed within 24 hours, though no detailed changelogs were published. On the code side, the team merged several high-impact infrastructure and reliability PRs: experimental thread queue APIs, per-server MCP OAuth callback ports, and a Windows sandbox setup manifest fix for Bazel builds. The issue tracker is still dominated by Windows extension/sandbox failures and context/session bloat complaints, including a new report of a long-running desktop session becoming unreadable after repeated compaction.

## Releases
- [rust-v0.148.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.13)
- [rust-v0.148.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.12)
- [rust-v0.148.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.11)

No release notes were attached beyond the version strings.

## Hot Issues
1. [Codex extension fails to start: “The extension couldn't load its resources” (#37458)](https://github.com/openai/codex/issues/37458) — Closed, 53 comments, 11 👍. The most active Windows/VSCode issue this digest period. The panel fails immediately after launching VSCode, affecting extension version 26.803.41515. High community engagement indicates a widespread regression.

2. [MCP stdio servers leak pipe fds + orphan child processes → cumulative EMFILE (#26984)](https://github.com/openai/codex/issues/26984) — Open, 21 comments. Long-running CLI sessions eventually hit “Too many open files” because MCP stdio servers are not cleaned up. Important for anyone using MCP tools heavily.

3. [Codex App / CLI 0.145.0: spawn_agent rejects gpt-5.6-luna with multi_agent_v2 enabled (#34700)](https://github.com/openai/codex/issues/34700) — Open, 15 comments, 36 👍. Windows app users cannot use the new model with multi-agent mode. Strong reaction suggests this is blocking an expected flagship feature.

4. [TUI: support Markdown math rendering for inline and block LaTeX (#18906)](https://github.com/openai/codex/issues/18906) — Open, 15 comments, 22 👍. A long-standing quality-of-life request for the terminal UI. Math-heavy outputs remain hard to read.

5. [Windows sandbox: CreateProcessAsUserW fails for MSIX Store build of pwsh (#35871)](https://github.com/openai/codex/issues/35871) — Open, 13 comments. Sandboxed execution breaks when the resolved shell is the Microsoft Store PowerShell 7 package. Windows users on restricted tokens are blocked.

6. [Windows Codex Desktop: browser.tabs.finalize() silently terminates the entire app (#35210)](https://github.com/openai/codex/issues/35210) — Open, 12 comments. A single browser automation API call can kill the desktop app instead of closing just the tab. High severity for Browser Use workflows.

7. [Codex Desktop subagent session logs grow to 145GiB from repeated compacted replacement_history (#31198)](https://github.com/openai/codex/issues/31198) — Open, 6 comments. Extreme disk usage caused by persisting full compaction snapshots in subagent rollouts. Rare but severe; undermines long-session viability.

8. [Multi-Agent V2 sends OpenAI-specific agent_message items to external Responses providers (#33551)](https://github.com/openai/codex/issues/33551) — Open, 8 comments. Breaks compatibility with providers like Ollama that do not recognize OpenAI-only item types. Affects custom-model and non-OpenAI deployments.

9. [Long-running Desktop session becomes huge and difficult to inspect after repeated compaction (#38466)](https://github.com/openai/codex/issues/38466) — Open, 3 comments, created today. The client truncates very large thread payloads, making old sessions effectively unreadable/resumable. A newer symptom of the ongoing compaction-bloat problem.

10. [codex-windows-sandbox-setup.exe not found by CLI setup after clean install due to bin junction (#30829)](https://github.com/openai/codex/issues/30829) — Open, 10 comments. Clean Windows installs cannot bootstrap the sandbox helper because of path/junction resolution issues. Affects first-run experience for Enterprise users.

## Key PR Progress
1. [Add experimental thread queue APIs to app server (#38456)](https://github.com/openai/codex/pull/38456) — Adds `thread/queue/add`, `list`, `update`, `delete`, `reorder`, and `start` for persistent FIFO submissions, with automatic dispatching after turns complete.

2. [Support per-server MCP OAuth callback ports (#38448)](https://github.com/openai/codex/pull/38448) — New `oauth.callback_port` configuration for MCP servers, also accepted from plugin MCP declarations and skill dependency metadata.

3. [Embed the Windows sandbox setup manifest in Bazel builds (#38450)](https://github.com/openai/codex/pull/38450) — Fixes missing `asInvoker` linker directives in `rules_rust` builds by embedding the manifest per binary. Directly targets several Windows sandbox helper issues.

4. [Give Guardian V2 full tool action context (#38441)](https://github.com/openai/codex/pull/38441) — Exposes the original pre-hook `ToolPayload` to lifecycle contributors so Guardian can assess risk from the actual action, not just tool name/call ID.

5. [Retain client developer messages across context compaction (#38445)](https://github.com/openai/codex/pull/38445) — Client-authored developer instructions now survive compaction when `retain_client_developer_messages` is enabled. Important for session continuity.

6. [Refresh current-time reminders for full-history subagents (#38446)](https://github.com/openai/codex/pull/38446) — Prevents inherited time-reminder developer messages from accumulating in subagents while preserving the child’s fresh reminder.

7. [Tag current time reminders in model context (#38443)](https://github.com/openai/codex/pull/38443) — Wraps injected current-time reminders in `<current_time_reminder>` tags, keeping tool output and log previews plain. Improves model-context hygiene.

8. [Add running-task exit choices to local daemon sessions (#38447)](https://github.com/openai/codex/pull/38447) — On Ctrl-C in a daemon session with a running task, users now choose: cancel, exit and leave running, or stop the daemon.

9. [Preserve thread subscriptions across revert reloads (#38463)](https://github.com/openai/codex/pull/38463) — Restarts listener tasks from preserved subscriptions when a `thread/revert` connection closes during reload, preventing dropped updates.

10. [exec-server: start managed network proxy on executor (#31453)](https://github.com/openai/codex/pull/31453) — Sends sanitized managed-network policy to remote exec servers and starts HTTP/SOCKS proxy listeners on the executor. Fails closed for MITM/credential-injection cases.

## Feature Request Trends
- **TUI/UX improvements**: Users want Markdown math rendering in the terminal UI ([#18906](https://github.com/openai/codex/issues/18906)) and the ability to `/copy` a specific earlier assistant response by ID ([#24073](https://github.com/openai/codex/issues/24073)).
- **Session and context lifecycle management**: Multiple PRs and issues target preserving client developer messages, tagging time reminders, avoiding reminder accumulation, and supporting paginated revert ([#38445](https://github.com/openai/codex/pull/38445), [#38443](https://github.com/openai/codex/pull/38443), [#38446](https://github.com/openai/codex/pull/38446), [#38440](https://github.com/openai/codex/pull/38440)).
- **Multi-agent and model flexibility**: Requests to parse model annotations from skill frontmatter ([#38467](https://github.com/openai/codex/pull/38467)), expose model upgrade retirement times ([#38449](https://github.com/openai/codex/pull/38449)), and make multi-agent output compatible with external providers ([#33551](https://github.com/openai/codex/issues/33551)).
- **Infrastructure and automation ergonomics**: New ask for persistent queued submissions ([#38456](https://github.com/openai/codex/pull/38456)), per-server MCP OAuth callback ports ([#38448](https://github.com/openai/codex/pull/38448)), and explicit running-task exit choices in daemon mode ([#38447](https://github.com/openai/codex/pull/38447)).

## Developer Pain Points
- **Windows reliability remains the top friction point**: Extension resource-loading failures, sandbox setup helper resolution, MSIX PowerShell sandbox failures, and silently disabled IDE context appear repeatedly ([#37458](https://github.com/openai/codex/issues/37458), [#30829](https://github.com/openai/codex/issues/30829), [#35871](https://github.com/openai/codex/issues/35871), [#31553](https://github.com/openai/codex/issues/31553)).
- **Context/session bloat is a growing concern**: Users report 145GiB log growth, truncated thread reads after compaction, and stuck subagents after restart ([#31198](https://github.com/openai/codex/issues/31198), [#38466](https://github.com/openai/codex/issues/38466), [#38408](https://github.com/openai/codex/issues/38408)).
- **Subagent lifecycle and multi-agent compatibility issues**: Completed subagents still count against thread limits, old subagents remain stuck as “running,” and multi-agent v2 emits provider-specific message types that break external providers ([#22779](https://github.com/openai/codex/issues/22779), [#38408](https://github.com/openai/codex/issues/38408), [#33551](https://github.com/openai/codex/issues/33551)).
- **MCP and process hygiene**: MCP stdio servers leak file descriptors and orphan child processes, eventually exhausting file limits ([#26984](https://github.com/openai/codex/issues/26984)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-14

## Today's Highlights

A new nightly release (v0.56.0-nightly.20260813) landed with eval-infrastructure improvements, including a tool call formatter and failure-summary integration. Security work dominates the PR queue: a critical `simple-git` CVE upgrade, a supply-chain RCE hardening fix for eval workflows, and A2A server authentication gaps are all in flight. Meanwhile, the issue tracker shows agent reliability remains the top community pain point, with subagent hang reports, misleading `MAX_TURNS` success statuses, and shell-command "Waiting input" stalls drawing the most engagement.

## Releases

**v0.56.0-nightly.20260813.g1ac337739** — Eval tooling improvements:
- Feat/eval validate by @ved015 ([PR #28344](https://github.com/google-gemini/gemini-cli/pull/28344))
- feat(evals): add tool call formatter and integrate failure summaries by @ved015 ([PR #28305](https://github.com/google-gemini/gemini-cli/pull/28305))
- Changelog for v0.55.1 by @gemini-cli-robot

## Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (p1, agent) — A `codebase_investigator` subagent reports `status: "success"` / `Termination Reason: "GOAL"` even when it hit `MAX_TURNS` before doing any analysis. This is dangerous: interrupted work is silently presented as completed. 12 comments, maintainer-attention.

2. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** (p1, agent) — The generalist subagent hangs indefinitely on trivial tasks like folder creation; users wait up to an hour before cancelling. Workaround: explicitly forbid subagent delegation. 8 👍 and 8 comments signal broad impact.

3. **[#25166 — Shell command execution stuck with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)** (p1, core) — Simple, non-interactive CLI commands finish but the shell remains marked active and awaits input. Reproducible with trivial commands; 3 👍 indicates a common frustration.

4. **[#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** (p2, security) — Auto Memory sends local transcript content to the extraction model before the model is asked to redact secrets, and can log existing skills. A privacy-relevant issue for users with sensitive local repos.

5. **[#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** (p1, agent, browser) — Browser agent terminates with `GOAL` without actual work on Wayland sessions. Pairs with #22267 (settings.json overrides ignored) as browser-agent reliability concerns.

6. **[#24246 — Gemini CLI encounters 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** (p2, agent) — The agent fails once available tools exceed protocol limits; users expect smarter tool scoping rather than a hard failure. Relevant for MCP-heavy setups.

7. **[#22093 — (Sub)agents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** (p2, agent) — A permission regression: subagents activate despite agents being disabled in all configs. Trust-model concern that breaks the "agents off" contract.

8. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** (p2, agent) — Anecdotal but widely felt: custom skills (e.g., `gradle`, `git`) are ignored unless explicitly requested, making the skill system under-utilized.

9. **[#22672 — Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)** (p2, agent) — The model occasionally reaches for `git reset`/`--force` or destructive DB operations when safer alternatives exist. Community asks for guardrails in complex git/resource workflows.

10. **[#20079 — Symlinked agent files not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)** (p2, agent) — `~/.gemini/agents/filename.md` symlinks are silently ignored, breaking common dotfiles-sync setups.

## Key PR Progress

1. **[#28740 — fix(security): prevent supply chain RCE in eval-pr workflows](https://github.com/google-gemini/gemini-cli/pull/28740)** (size/l, open) — Splits the eval workflow into a secure `pull_request` build + trusted `workflow_run` execution, closing the `pull_request_target` untrusted-code execution hole from issue #28336.

2. **[#28778 — fix: upgrade simple-git to 3.32.3 (CVE-2026-28292)](https://github.com/google-gemini/gemini-cli/pull/28778)** (size/s, open) — Trivy-scanner-flagged **CRITICAL** CVE in `simple-git@3.28.0`; bumps to patched 3.32.3. Direct dependency, should land quickly.

3. **[#28790 — fix(core): context-aware silent retries and availability TTL for capacity errors](https://github.com/google-gemini/gemini-cli/pull/28790)** (p1, size/l, **closed**) — Closes the critical capacity-exhaustion retry regression (#28761): unattended runs now back off and retry automatically with up to 2 silent retries plus a TTL-aware availability cache.

4. **[#28801 — fix(core): rollback entire multi-turn request on cancellation or abort](https://github.com/google-gemini/gemini-cli/pull/28801)** (size/m, **closed**) — Prevents aborted multi-turn prompts from leaving pending tool-response turns in history, which corrupted subsequent unrelated requests.

5. **[#28803 — feat(models): add Claude Sonnet 4.5 and Opus 4.8 model definitions](https://github.com/google-gemini/gemini-cli/pull/28803)** (size/xl, **closed**) — Adds `claude-sonnet-4-5` / `claude-opus-4-8` constants, alias resolution, and policy-chain fallbacks — multi-provider CLI support expanding.

6. **[#28699 — fix(a2a-server): enforce authentication and stop checkpoint path traversal](https://github.com/google-gemini/gemini-cli/pull/28699)** (size/l, open) — Custom REST routes (`/tasks`, `/executeCommand`, etc.) bypass `UserBuilder` auth entirely; the PR also blocks checkpoint path traversal. Important for self-hosted A2A deployments.

7. **[#28787 — fix(cli): don't treat a corrupt MCP enablement config as empty](https://github.com/google-gemini/gemini-cli/pull/28787)** (p1, size/s, open) — JSON parse failures collapse into `{}`, silently enabling every MCP server by default. Turns a config-corruption failure into a security-relevant default-on behavior.

8. **[#28624 — fix(core): prevent boolean thought parts leaking as `[Thought: true]` text](https://github.com/google-gemini/gemini-cli/pull/28624)** (p2, size/s, open) — Fixes #23525: internal `thought: true` fields leak into user-visible model thought text, creating confusing `[Thought: true]` artifacts.

9. **[#28789 — fix(vscode-ide-companion): resolve stop() hang and keep-alive failure threshold](https://github.com/google-gemini/gemini-cli/pull/28789)** (size/m/l/xl, open) — Fixes an indefinite `IdeServer.stop()` hang with active streaming MCP sessions plus a keep-alive ping resource leak.

10. **[#27588 — fix(cli): support WSL2 clipboard image paste](https://github.com/google-gemini/gemini-cli/pull/27588)** (p2, size/l, open) — Detects WSL and uses PowerShell interop to read the Windows clipboard as PNG. Fixes #22274 and unblocks image-paste parity for WSL users.

Also notable: **[#25378](https://github.com/google-gemini/gemini-cli/pull/25378)** fixes Windows `ripgrep` `spawn EFTYPE` errors from architecture-mismatched binaries, and **[#28581](https://github.com/google-gemini/gemini-cli/pull/28581)** prevents diff hunk markers from being glob-expanded as `@file` references (heap-growth fix).

## Feature Request Trends

- **AST-aware codebase navigation** — Two linked EPICs (#22745, #22746) explore AST-aware file reads, method-bound reads, and codebase mapping to reduce token noise and misaligned reads; `tilth`/`glyph` are recommended starting points.
- **Subagent transparency** — Recurring asks to surface subagent trajectories in `/chat share` (#22598) and include subagent context in `/bug` reports (#21763).
- **Agent self-awareness** — The CLI should know its own flags, hotkeys, and execution mechanics well enough to serve as its own expert guide (#21432).
- **Browser agent resilience** — Persistent-session lock recovery and automatic takeover (#22232) plus honoring `settings.json` overrides like `maxTurns` (#22267).
- **Zero-dependency OS sandboxing** — Leverage Gemini 3's native bash affinity with safe, OS-level sandboxing and post-execution intent routing (#19873).

## Developer Pain Points

- **Misleading success states** — Subagents reporting `GOAL` after `MAX_TURNS` interruptions (#22323) and aborted sessions leaving corrupted history erode trust in agent output.
- **Silent hangs** — Generalist agent hangs (#21409), shell commands stuck in "Waiting input" (#25166), and stuck interactive prompts (e.g., Vite scaffolding, #22465) force manual cancellation and waste hours.
- **Permission/trust regressions** — Subagents activating despite disabled configs (#22093) and corrupt MCP configs defaulting all servers to enabled (#28787) highlight dangerous fail-open behavior.
- **Security/privacy gaps** — Auto Memory sending unredacted transcript content to models (#26525), OAuth callback timeout leaks (#28678), and A2A unauthenticated routes (#28699) keep security top-of-mind.
- **Scale and environment friction** — 400 errors beyond 128 tools (#24246), Windows ripgrep binary mismatches (#25378), and Wayland browser failures (#21983) show cross-platform and scale gaps remain.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-14

## Today's Highlights

A new patch release `v1.0.80-0` adds a runtime MCP-server re-enable flag and makes shared-session visibility clearer in the CLI UI. The community issue stream is dominated by remote MCP OAuth and HTTP reliability problems, model/reasoning-effort configuration not being respected, and session-state bugs that cause lost prompts, leaked processes, or repeated permission prompts.

## Releases

- [v1.0.80-0](https://github.com/github/copilot-cli/releases/tag/v1.0.80-0)
  - Added `--enable-mcp-server` to re-enable MCP servers that were disabled in settings for the current run.
  - Shared sessions are now explicitly indicated: in `--ahp` mode, a shared session row leads with `2 clients` (or more) when another client is attached, and the Sessions tab reflects this as well.

No other releases were published in the last 24 hours.

## Hot Issues

1. [#2904 — Custom Agent Frontmatter Should Support Reasoning Effort](https://github.com/github/copilot-cli/issues/2904)  
   Open, 6 comments, 20 👍. Users want `.agent.md` frontmatter to set reasoning effort per agent instead of relying only on global `--effort` flags. This is one of the most-upvoted open feature requests and is the target of the doc PR below.

2. [#4345 — Reasoning effort 'medium' is not supported for model 'claude-haiku-4.5'](https://github.com/github/copilot-cli/issues/4345)  
   Closed, 5 comments, 4 👍. A sub-agent execution failure triggered by feature flags. It is closed, but the newly filed [#4473](https://github.com/github/copilot-cli/issues/4473) reports the same behavior, suggesting the user impact persists.

3. [#2133 — Custom agent frontmatter `model` field rejects array syntax](https://github.com/github/copilot-cli/issues/2133)  
   Open, 4 comments, 7 👍. Custom agents that use array syntax for `model`, as allowed in VS Code Copilot Chat, fail to load in Copilot CLI. Cross-tool compatibility remains a recurring concern.

4. [#3954 — `explore` tool hardcodes model to `gpt-5.4-mini`, ignoring custom/DeepSeek API configuration](https://github.com/github/copilot-cli/issues/3954)  
   Open, 3 comments, 3 👍. The `explore` tool sends a fixed model name to user-configured endpoints, breaking custom-model and DeepSeek setups.

5. [#4480 — Atlassian MCP OAuth fails with "Incompatible authorization server" on 1.0.79](https://github.com/github/copilot-cli/issues/4480)  
   New triage, 0 comments. A regression from 1.0.71 that blocks connecting to `mcp.atlassian.com`. Remote MCP auth compatibility remains fragile.

6. [#4464 — Remote MCP OAuth: silent refresh fails with AADSTS70011, forcing repeated sign-in](https://github.com/github/copilot-cli/issues/4464)  
   Open, 0 comments. Microsoft Entra OAuth refresh requests mix `.default` and resource-specific scopes, so users are forced through interactive sign-in roughly every access-token lifetime.

7. [#4466 — Remote MCP: transient 5xx on `initialize` marks server failed for whole session](https://github.com/github/copilot-cli/issues/4466)  
   Open, 0 comments. A single transient 502 on MCP `initialize` disables the server for the rest of the session, with no retry or backoff.

8. [#4468 — `--server --stdio` never releases a session's extension-host processes on Windows](https://github.com/github/copilot-cli/issues/4468)  
   Open, 0 comments. Each session spawns four extension-host child processes that are never cleaned up until the server exits. This is a meaningful resource leak for Windows desktop hosting.

9. [#4469 — Orphaned `permission.requested` event replays on every session resume](https://github.com/github/copilot-cli/issues/4469)  
   Open, 0 comments. A stale directory-access prompt from a command run 10 days prior reappears on every resume and cannot be dismissed. Session resume reliability is clearly straining.

10. [#4477 — Session and prompt lost when stopping an action or hitting the stop button](https://github.com/github/copilot-cli/issues/4477)  
    Open, 0 comments. Stopping an in-progress action deletes the entire session, including the original prompt and any edits. This is high-impact interactive data loss.

## Key PR Progress

Only one PR was active in the last 24 hours.

- [#4476 — docs: document proposed custom-agent effort frontmatter (Option A)](https://github.com/github/copilot-cli/pull/4476)  
  Closed. Adds README documentation for a proposed dedicated `effort` frontmatter field, parallel to `model`, to address #2904. It covers existing frontmatter fields and the new proposed Option A syntax. No feature or fix PRs were updated in this window.

## Feature Request Trends

- **Per-agent model and reasoning-effort controls**  
  [#2904](https://github.com/github/copilot-cli/issues/2904), [#2133](https://github.com/github/copilot-cli/issues/2133), [#4462](https://github.com/github/copilot-cli/issues/4462). Users want `.agent.md` frontmatter to fully control model selection, array syntax, and reasoning effort, matching VS Code Copilot Chat behavior and preventing built-in subagent overrides.

- **Remote MCP server reliability and OAuth polish**  
  [#4480](https://github.com/github/copilot-cli/issues/4480), [#4464](https://github.com/github/copilot-cli/issues/4464), [#4466](https://github.com/github/copilot-cli/issues/4466), [#4472](https://github.com/github/copilot-cli/issues/4472), [#4463](https://github.com/github/copilot-cli/issues/4463). The largest cluster of new triage issues: OAuth discovery failures, broken silent refresh, missing retry on transient 5xx, and platform-specific socket errors.

- **Session lifecycle observability and restore**  
  [#4470](https://github.com/github/copilot-cli/issues/4470), [#4474](https://github.com/github/copilot-cli/issues/4474), [#4467](https://github.com/github/copilot-cli/issues/4467), [#4469](https://github.com/github/copilot-cli/issues/4469). Users are asking for a way to list running sessions with status, and for reliable restore/archival behavior after timeouts or server-side event-store exhaustion.

- **Plugin/skill management improvements**  
  [#4471](https://github.com/github/copilot-cli/issues/4471), [#4465](https://github.com/github/copilot-cli/issues/4465). The `/plugins` TUI does not distinguish or persist disabled skills, and documented `autoUpdate` behavior for `extraKnownMarketplaces` entries does not actually trigger plugin updates at session start.

## Developer Pain Points

- **Model configuration is silently ignored or hardcoded**  
  The `explore` tool hardcodes `gpt-5.4-mini`, the `code-review` subagent model override is ignored, and reasoning effort is not validated against the selected model. This causes confusing sub-agent failures and breaks custom endpoint setups.

- **Remote MCP OAuth is a recurring source of breakage**  
  Multiple issues report OAuth discovery regressions, repeated interactive sign-ins, concurrent refresh races, and no retry on temporary server errors. These directly block any team relying on remote MCP servers.

- **Session state can be lost, leaked, or corrupted**  
  Stopping a session can delete the prompt, long-running sessions exhaust the event store, Windows servers leak extension-host processes, and orphaned permission events replay on resume. These are severe workflow interruptions.

- **Cross-tool compatibility gaps**  
  Custom agents and frontmatter authored for VS Code Copilot Chat do not always work in Copilot CLI, especially `model` arrays and per-agent effort settings. Developers want one agent definition that works across GitHub Copilot surfaces.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-14

## Today's Highlights  
No releases or PRs landed in the last 24 hours, but three open issues saw activity, pointing to two major community concerns: the long-anticipated persistent memory feature remains a top request, and reliability of streaming/ACP sessions is under scrutiny. Two recent bug reports describe serious runtime failures — silent stream hangs with lost wire logs and a runaway 88k-token gibberish generation — both of which likely raise urgency around timeout controls and output guardrails.

## Releases  
None in the last 24 hours.

## Hot Issues  
Only 3 issues were updated in the last 24h; all are listed below.

1. **Feature Request: Memory System — Persistent context across sessions**  
   [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)  
   The most active thread with 38 comments. The author requests automatic AI-managed notes plus manual user-defined instructions so the CLI can remember project patterns, user preferences, and useful context across sessions. This remains a high-impact feature direction; community engagement indicates strong demand for session continuity in agentic workflows.

2. **ACP/print streaming response hangs silently — no idle timeout, replaced partial not written to wire**  
   [#2598](https://github.com/MoonshotAI/kimi-cli/issues/2598)  
   In `kimi acp` (0.34.0), streaming can complete content deltas but never receive a terminal frame, causing the client to wait indefinitely. The workaround in 0.31.1 only covers the Esc scenario, and the replaced turn’s partial answer is never recorded in `wire.jsonl` (no `content.part`, no `usage.record`). This is a serious reliability and traceability issue for ACP integrations.

3. **Bug: Runaway garbled generation — 88k tokens of gibberish in one LLM step**  
   [#2597](https://github.com/MoonshotAI/kimi-cli/issues/2597)  
   A single step ran ~53 minutes and emitted 88,114 incoherent tokens (multilingual fragments, broken Markdown, endless repetition). Community reaction is limited so far (1 comment), but this raises obvious concerns about missing output limits, loop detection, and step-level guardrails.

## Key PR Progress  
None in the last 24 hours.

## Feature Request Trends  
- **Persistent memory / cross-session context** is the clearest requested direction: automatic memory, manual memory, and reusable project/user preferences.  
- **Streaming robustness** is emerging as a reliability need: idle timeouts, proper terminal/finish frame handling, and durable wire logs for ACP sessions.  
- **Generation safeguards** are implicitly requested: users need limits on single-step output length/duration to prevent runaway token generation.

## Developer Pain Points  
- **Silent hangs with no timeout**: the CLI can wait indefinitely for a finish frame, leaving session/prompt stuck.  
- **Lost observability data**: when a streaming turn is replaced, already-received content is not persisted to `wire.jsonl`, making debugging and auditing impossible.  
- **Unbounded generation**: a single LLM step can consume enormous time and tokens without automatic interruption, breaking interactive workflows and increasing cost/risk.  
- **Lack of persistent context**: developers must re-specify project patterns and preferences each session, increasing friction for agentic use.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-14

## Today's Highlights
v1.18.18 shipped with targeted provider fixes for Kimi system-prompt selection and xAI reasoning effort. Community attention remains split between the ongoing V2 migration (database coexistence, missing tools, compaction failures) and a wave of free-tier rate-limit complaints against OpenCode Zen. Fresh security reports around `curl|bash` upgrade integrity, webfetch SSRF, and silent context pruning also landed — while the legacy layout request crossed 41 👍.

## Releases
**v1.18.18** — Bugfix release ([changelog](https://github.com/anomalyco/opencode/releases)):
- Kimi system prompt now correctly selected for official Moonshot and Kimi providers
- Fixed `xhigh` reasoning effort for xAI models

## Hot Issues
1. **[#37012 — [FEATURE] Keep legacy layout option](https://github.com/anomalyco/opencode/issues/37012)** — 37 comments, 41 👍. The most active community request: users want the old single-window layout back, arguing the new design forces excessive navigation and loses workspace convenience. The 👍 count signals broad UI-regression sentiment.

2. **[#41470 — “Copied to clipboard” doesn't work](https://github.com/anomalyco/opencode/issues/41470)** — 15 comments. Copying inside VSCode Server/Docker shows a success toast but the system clipboard is never populated — breaking a core workflow for remote developers.

3. **[#40516 — Desktop app: provider/model/MCP fail to load on startup](https://github.com/anomalyco/opencode/issues/40516)** — Fails on ~80% of starts for an entire organization. Regression window is v1.18.5→v1.18.13; v1.18.4 confirmed working.

4. **[#42083 — GitHub Copilot provider shows zero models](https://github.com/anomalyco/opencode/issues/42083)** — Auth succeeds but all models return `model_picker_enabled: false`, so Copilot never appears in `/models` or the TUI picker.

5. **[#42434 — [SECURITY] `opencode upgrade` uses unverified curl|bash](https://github.com/anomalyco/opencode/issues/42434)** — Supply-chain/TOCTOU concern about the install path piping a remote script directly to bash with no integrity verification. Medium severity, but a common demand for checksum-pinned installs.

6. **[#42441 / #42411 — Bug: opencode deletes itself](https://github.com/anomalyco/opencode/issues/42441)** — After `pnpm i -g opencode-ai` + `approve-builds`, the binary vanishes from `.local/share/pnpm/opencode` after a day. Filed twice within hours — multiple users affected.

7. **[#42260 — [2.0] opencode2 mutates shared V1 database, breaks coexistence](https://github.com/anomalyco/opencode/issues/42260)** — V2's schema migration breaks `/move` in V1 and leaves sessions trapped in worktrees. A critical coexistence bug during the 2.0 transition.

8. **[#42448 — [2.0] Compaction request exceeds context window](https://github.com/anomalyco/opencode/issues/42448)** — At 79% context usage, auto-compaction didn't fire and `/compact` failed because the provider reported prompt + requested output over the limit.

9. **[#42420 — AI SDK response model ID is discarded from assistant turns](https://github.com/anomalyco/opencode/issues/42420)** — Clients only see the requested alias (`provider/auto`), never the actual response model, hurting observability for router/proxy setups.

10. **[#42437 — [SECURITY] Context pruning silently drops instruction-bearing content](https://github.com/anomalyco/opencode/issues/42437)** — Pruning can strip constraints/instructions from context without surfacing it to the user — an integrity and compliance concern beyond cost.

## Key PR Progress
1. **[#42444 — fix(opencode): preserve v1 database compatibility](https://github.com/anomalyco/opencode/pull/42444)** — Stops the V1 move/revert projection from resetting the removed session-context epoch table; directly addresses the #42260 coexistence breakage.

2. **[#42433 — fix(opencode): preserve response model metadata](https://github.com/anomalyco/opencode/pull/42433)** — Closes #42420 by persisting the AI SDK's structured `response.modelId`; intentionally narrower than the header-based routing proposal in #26091.

3. **[#42446 — fix(cli): defer update check until service resolves](https://github.com/anomalyco/opencode/pull/42446)** — Prevents a running old client from repeatedly rejecting newly installed server contenders as version mismatches during auto-update.

4. **[#42455 — fix(tui): recover sessions from missing locations](https://github.com/anomalyco/opencode/pull/42455)** — Recovers sessions whose working directory was deleted, without requiring the broken location runner to start; also respects `session.new_location`.

5. **[#42453 — fix(tui): correct tab context menu behavior](https://github.com/anomalyco/opencode/pull/42453)** — Makes the V2 session-tab context menu pointer-only: outside clicks dismiss, right-clicking an open menu cancels, and Rename works reliably.

6. **[#42456 — fix(tui): isolate tab scroll state](https://github.com/anomalyco/opencode/pull/42456)** — Stops one tab's scroll cleanup from clobbering another tab's reading position when `tab_scroll` is enabled.

7. **[#42047 — feat(github): allow configured bots to trigger actions](https://github.com/anomalyco/opencode/pull/42047)** — Adds an `allowed_bots` input so trusted GitHub App bots can trigger OpenCode workflows while bots remain denied by default; closes #7103.

8. **[#42450 — fix(core): use file times for tool output cleanup](https://github.com/anomalyco/opencode/pull/42450)** — Switches managed tool-output retention to filesystem mtimes, preserves files when metadata is unreadable, and covers the timestamp wrap boundary.

9. **[#38790 — feat(app): add workspace flows to new layout](https://github.com/anomalyco/opencode/pull/38790)** — Adds local repo / new workspace / existing workspace selection plus a context-aware composer pill with branch info — a likely response to legacy-layout demand.

10. **[#42458 — perf(util): load npm config lazily](https://github.com/anomalyco/opencode/pull/42458)** — Defers `@npmcli/config` loading until actually requested, removing npm config init from cold import paths of `@opencode-ai/util/npm-config`.

## Feature Request Trends
- **Layout & TUI preferences**: The legacy layout request (#37012) is the loudest signal. Power users also want a right sidebar for background subagents (#42369), isolated per-tab scroll state (#42456), and pointer-correct context menus (#42453).
- **Provider flexibility & discovery**: Repeated asks for local LAN provider auto-discovery (#27554, #19959), per-MCP-server trust configuration (#40125), and preserving actual response-model metadata (#42420, #42433) reflect growing router/proxy usage.
- **Localization**: First Hebrew locale request (#42447) joins the broader i18n backlog.
- **CLI ergonomics**: `opencode run` should ignore unused inherited stdin pipes when non-TTY (#42064), plus smoother GitHub Action bot integration (#42047).

## Developer Pain Points
- **Free-tier rate limits dominate**: Multiple reports of instant 429 `FreeUsageLimitError` on OpenCode Zen / MiMo / DeepSeek free models (#42029, #42074, #42382, #42449, #42452), including cooldown resets that immediately re-throttle. An exploit report (#34344) notes IP-based limits are trivially bypassed via VPN rotation — a support and abuse-management headache.
- **V2 transition friction**: Coexistence with V1 databases (#42260), missing `todowrite`/`todoread` tools (#42421), Plan/Build agent state bugs (#42439), and Windows console flashing on subprocess spawn (#42440) all signal unfinished 2.0 hardening.
- **Environment-specific breakage**: Clipboard failures in Docker/VSCode Server (#41470), the desktop-app startup regression (#40516), and the self-deleting pnpm binary (#42411, #42441) erode confidence in release stability.
- **Security triage backlog**: Fresh reports on unverified `curl|bash` upgrades (#42434), webfetch SSRF (#42435), and silent context pruning (#42437) suggest the community is actively auditing the project — and expects faster responses to opened security PRs (#40851 closed unmerged).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-14

## Today's Highlights
No new releases shipped in the last 24 hours, but the community landed several meaningful fixes: TUI terminal hygiene (#8082), a Gemini tool-schema compatibility fallback (#8086), and cached visual-line rendering for the slow prompt editor (#8066). The hottest discussion remains the critical auto-compaction bug (#6879), where sessions overrun their context window until the provider hard-rejects the request.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **Auto-compaction never triggers after context exceeds 100%** — [#6879](https://github.com/earendil-works/pi/issues/6879) — The top-voted issue this week (17 👍, 19 comments). A 2-hour agentic turn on gpt-5.6-sol climbed past the compaction threshold and only stopped at a 373k-token provider rejection. Commenters want compaction checks after every agent step, not just at turn boundaries.

2. **Edit fuzzy match misses whitespace-length differences** — [#7836](https://github.com/earendil-works/pi/issues/7836) — `normalizeForFuzzyMatch` doesn't collapse whitespace runs, so valid edits fail for small models when indentation differs even though content is identical. Marked in progress.

3. **Prompt editor extremely slow with large buffers** — [#8029](https://github.com/earendil-works/pi/issues/8029) — Moving the cursor in a ~7000-line prompt takes 1650ms per arrow keypress, growing linearly with buffer size. Root cause is repeated visual-line computation; PR #8066 addresses it with caching.

4. **Global Undici dispatcher inherits 16 KiB maxHeaderSize** — [#7791](https://github.com/earendil-works/pi/issues/7791) — Pi installs `EnvHttpProxyAgent` globally without setting `maxHeaderSize`, so valid upstream responses fail with `UND_ERR_HEADERS_OVERFLOW`. Closed, but a sharp catch for proxy-heavy deployments.

5. **Trusted Unix users cannot share PI_CODING_AGENT_DIR** — [#7779](https://github.com/earendil-works/pi/issues/7779) — `auth.json` and `models-store.json` are written with mode `0600`; the first user to touch them locks out all subsequent Pi processes sharing the directory.

6. **Invalid settings.json silently ignored on Windows** — [#7829](https://github.com/earendil-works/pi/issues/7829) — An unescaped Windows path yields invalid JSON, but Pi misreports it as "bash not found" instead of surfacing a parse error. In progress; a diagnostic gap users hit immediately on Windows.

7. **Extension loading dominated by per-extension `createJiti()`** — [#4254](https://github.com/earendil-works/pi/issues/4254) — 64 extensions cost ~1100ms of startup; a shared jiti instance with `moduleCache: true` would cut that significantly. Closed under "big refactor" but a commonly cited startup bottleneck.

8. **Codex backend `end_turn: false` not handled** — [#7689](https://github.com/earendil-works/pi/issues/7689) — Some Codex responses complete with `end_turn: false` in the provider extension; Pi ignores the signal, breaking expected turn-taking behavior. Opened by mitsuhiko, 2 👍.

9. **Anthropic refusal server-side fallback** — [#8017](https://github.com/earendil-works/pi/issues/8017) — Opened by badlogic: compaction can fail when Anthropic's classifier flags the session, so Pi needs the documented refusal-and-fallback request path.

10. **TUI copy shows "Copied!" but clipboard stays empty on VTE terminals** — [#7761](https://github.com/earendil-works/pi/issues/7761) — `copySelectionToClipboard()` only writes an OSC 52 sequence, which GNOME Terminal's VTE ignores; `wl-paste` confirms the clipboard is unchanged despite the success flash.

## Key PR Progress

1. **fix(tui): render only visible viewport; restore terminal on SIGINT** — [#8082](https://github.com/earendil-works/pi/pull/8082) — Two terminal-hygiene fixes: resuming a large session no longer floods scrollback with full history replay, and SIGINT restores echo, cursor, bracketed paste, and kitty protocol. Verified against 0.84.1 with a pty harness.

2. **fix(ai): fall back to legacy Gemini tool schema** — [#8086](https://github.com/earendil-works/pi/pull/8086) — Some generativelanguage endpoints reject `parametersJsonSchema` (400 INVALID_ARGUMENT); this adds a fallback to the legacy `parameters` field for broader compatibility.

3. **fix(coding-agent): don't swallow prompt after boolean extension flags** — [#8084](https://github.com/earendil-works/pi/pull/8084) — Boolean flags like `--plan` consumed the next CLI argument; `pi -p --plan "prompt"` started with no messages and exited 0 silently.

4. **fix(tui): add visual lines caching** — [#8066](https://github.com/earendil-works/pi/pull/8066) — Caches visual-line results invalidated only on width or text change; directly addresses the 1650ms cursor movement from #8029.

5. **fix(coding-agent): validate extension flag defaults** — [#8070](https://github.com/earendil-works/pi/pull/8070) — Models `registerFlag()` options as a discriminated union so `type` and `default` can't disagree (a boolean flag with `default: "false"` was truthy when omitted).

6. **feat(tui): cancel active mouse selection with escape** — [#8085](https://github.com/earendil-works/pi/pull/8085) — Pressing Escape mid-drag clears the selection without triggering auto-copy—standard text-editor behavior for accidental selections.

7. **fix(coding-agent): update grok-mermaid to 0.2.3** — [#7984](https://github.com/earendil-works/pi/pull/7984) — Resolves #7832; mermaid classes are intentionally ignored for now. Includes before/after screenshots.

8. **feat: Amazon Bedrock Mantle OpenAI Responses provider** — [#6216](https://github.com/earendil-works/pi/pull/6216) — Adds a provider for Bedrock Mantle's OpenAI Responses API via the OpenAI Bedrock provider; supersedes an earlier attempt.

9. **fix(examples): todo renderResult returns undefined on validation errors** — [#8057](https://github.com/earendil-works/pi/pull/8057) — A failed `todo` schema validation crashes the entire TUI because `details` is a truthy `{}` and `switch (details.action)` has no default case.

10. **Use APP_NAME in user-facing messages** — [#8067](https://github.com/earendil-works/pi/pull/8067) — Replaces hardcoded "pi" strings so rebranded builds look consistent; output is unchanged for stock pi.

## Feature Request Trends

- **Provider breadth and protocol compatibility**: Users are actively contributing catalog entries (Grok 4.6 in [#8046](https://github.com/earendil-works/pi/issues/8046), Kimi cached-token accounting in [#8075](https://github.com/earendil-works/pi/issues/8075)) and fixing provider edge cases (Codex `end_turn`, Gemini legacy schema, Anthropic refusal fallback).
- **Performance budgets**: Repeated asks for startup and interactive latency parity—shared jiti caching ([#4254](https://github.com/earendil-works/pi/issues/4254)), startup-time budget vs jcode ([#7739](https://github.com/earendil-works/pi/issues/7739)), visual-line caching ([#8029](https://github.com/earendil-works/pi/issues/8029)).
- **TUI/terminal robustness**: A cluster of issues around terminal state restoration, clipboard reliability on VTE/CJK terminals, and scrollback hygiene ([#8079](https://github.com/earendil-works/pi/issues/8079), [#8080](https://github.com/earendil-works/pi/issues/8080), [#7761](https://github.com/earendil-works/pi/issues/7761), [#8055](https://github.com/earendil-works/pi/issues/8055)).
- **Extension system hardening**: Discriminated flag types ([#8070](https://github.com/earendil-works/pi/pull/8070)), per-tool validation opt-out ([#7607](https://github.com/earendil-works/pi/issues/7607)), final immutable tool admission hooks ([#7092](https://github.com/earendil-works/pi/issues/7092)), and correct package metadata propagation ([#8078](https://github.com/earendil-works/pi/issues/8078)).

## Developer Pain Points

- **Context-window management is the #1 pain**: Compaction fires too late or never ([#6879](https://github.com/earendil-works/pi/issues/6879)), resume progress counters disagree with reality ([#7960](https://github.com/earendil-works/pi/issues/7960)), and mid-stream provider failures duplicate partial output ([#8031](https://github.com/earendil-works/pi/issues/8031)).
- **Terminal state corruption**: `/exit` and SIGINT leave raw mode, kitty keyboard protocol, and window titles unrestored—forcing `reset` ([#5065](https://github.com/earendil-works/pi/issues/5065), [#8080](https://github.com/earendil-works/pi/issues/8080)).
- **Windows pain points**: Unix-socket test failures ([#8047](https://github.com/earendil-works/pi/issues/8047)), misleading "bash not found" from invalid JSON ([#7829](https://github.com/earendil-works/pi/issues/7829)), and shared-state permission lockouts ([#7779](https://github.com/earendil-works/pi/issues/7779)).
- **Silent failures and misleading UX**: Unknown slash commands are sent to the model as chat ([#8081](https://github.com/earendil-works/pi/issues/8081)), clipboard copy reports success without copying ([#7761](https://github.com/earendil-works/pi/issues/7761)), and invalid config is ignored rather than diagnosed ([#7829](https://github.com/earendil-works/pi/issues/7829)).
- **False-positive permission prompts**: The default `PI_*` environment guideline nudges models into running `env`/`printenv` during unrelated tasks, triggering unnecessary approval prompts ([#7787](https://github.com/earendil-works/pi/issues/7787)).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-14

## 1. Today's Highlights

Stable release **v0.21.11** landed with two major capabilities: **Agent Plugins v1** for extending agent behavior, and native **multi-agent workflows via the `/coordinate` command** with read-only teammates — the fleet architecture is now shipping incrementally through stages 1A/1B/2/3. On the quality front, the team is actively hardening the `/review` pipeline with new evidence-capture tooling (`capture-tui`, run-session ledgers) and desktop/web-shell link handling, while a **QUARANTINED SWE-bench Verified** result (0/500 resolved) signals known benchmark regressions being tracked before PG submission.

## 2. Releases

| Version | Key Changes |
|---|---|
| **v0.21.11** (stable) | Agent Plugins v1 ([#8834](https://github.com/QwenLM/qwen-code/pull/8834)); native multi-agent workflows with read-only teammates via `/coordinate` ([#8804](https://github.com/QwenLM/qwen-code/pull/8804)); SWE-bench Verified status: **QUARANTINED** (0/500 resolved) |
| **v0.21.12-preview.1** / **nightly.20260814** | `fix(web-shell): preserve standalone session target`; `feat(web-shell): support workspace file uploads` — both from [PR #9038](https://github.com/QwenLM/qwen-code/pull/9038) |

**Action item for community:** The QUARANTINED SWE-bench status on v0.21.11 is worth watching — release gates are clearly tied to benchmark recovery.

## 3. Hot Issues

- [**#8718 — RFC: Native coordination for independent Qwen sessions**](https://github.com/QwenLM/qwen-code/issues/8718) — *Closed, 9 comments.* The umbrella for the fleet/multi-agent work. A leader dispatches self-contained workers while staying interactive; spawned the stage 1A/1B/2/3 implementation plan that is now shipping.
- [**#8678 — Session restore timeout loses current session**](https://github.com/QwenLM/qwen-code/issues/8678) — *8 comments.* Large restores timing out could drop the active session. PR1 (#8691) landed timeout-contract and observability; the thread tracks remaining work.
- [**#7118 — Windows standalone installer fails on Get-FileHash resolution**](https://github.com/QwenLM/qwen-code/issues/7118) — *7 comments, 3 👍.* SHA-256 verification fails when `powershell.exe` can't resolve; blocks Windows standalone installs. Open for community PRs (`welcome-pr`).
- [**#9019 — Gemini 2.5 unusable on Vertex AI: `thinkingLevel` always sent**](https://github.com/QwenLM/qwen-code/issues/9019) — *5 comments.* Requests fail with 400 before any tool call because the `UNSPECIFIED` placeholder is transmitted. Breaks Gemini 2.5 via `vertex-ai` auth entirely.
- [**#9025 — Keyless Vertex AI not inferred from environment**](https://github.com/QwenLM/qwen-code/issues/9025) — *5 comments.* Headless ADC runs exit at startup because `getAuthTypeFromEnv` doesn't select `vertex-ai` from env-only config.
- [**#9002 — Python SDK rejects `permission_mode="auto"`**](https://github.com/QwenLM/qwen-code/issues/9002) — *5 comments.* Client-side validation rejects a value the CLI already supports — SDK/CLI parity gap.
- [**#8586 — Track `activeWork` and background Agent recovery**](https://github.com/QwenLM/qwen-code/issues/8586) — *4 comments.* Five-layer proposal: deep daemon health, ACP session reporting, recovery for agents that outlive the foreground prompt.
- [**#9108 — Desktop Web Shell external links still fail silently; MCP OAuth blocked**](https://github.com/QwenLM/qwen-code/issues/9108) — *3 comments.* #9069 fixed Markdown links but other surfaces (MCP OAuth flows) still drop `target="_blank"` clicks.
- [**#9088 — `read_file` sends non-image to model based on `.png` extension**](https://github.com/QwenLM/qwen-code/issues/9088) — *3 comments.* A file named `screenshot.png` containing UTF-8 JSON is sent as an image; raw 400 aborts the whole turn. Extension-based sniffing is too naive.
- [**#9061 — Ctrl+V paste regression in CLI on Windows**](https://github.com/QwenLM/qwen-code/issues/9061) — *3 comments.* Regression between 0.21.0 and 0.21.11; paste is completely dead in CLI, works in plain PowerShell. Downgrading restores it.

## 4. Key PR Progress

- [**#8978 — `serve`: no-op on empty channel set, restore only active channels**](https://github.com/QwenLM/qwen-code/pull/8978) — Prevents daemon-wide `exit(1)` when `--channel all` resolves to zero configured channels; graceful degradation.
- [**#9106 — Consolidate Local Control into one daemon-owned implementation**](https://github.com/QwenLM/qwen-code/pull/9106) — Removes duplicate LAN-pairing implementations (two languages, two security models) by moving the mechanism into the daemon.
- [**#8938 — Reject upstream fail-fast placeholder responses**](https://github.com/QwenLM/qwen-code/pull/8938) — Detects HTTP 200 responses whose entire body is placeholder text (e.g. "(request timed out)") and treats them as failures instead of valid completions.
- [**#8894 — `review capture-tui`: rendering claims get pixels**](https://github.com/QwenLM/qwen-code/pull/8894) — Phase 2 of evidence images: verifiers drive code in a private tmux server and capture exact rendered output for TUI clipping/layout claims.
- [**#8971 — Per-agent transcripts for workflow dispatches**](https://github.com/QwenLM/qwen-code/pull/8971) — Every workflow `agent()` dispatch now writes the same JSONL transcript format as Agent-tool sub-agents, seeded with the dispatched prompt.
- [**#9098 — Enable dynamic workflows from a settings key**](https://github.com/QwenLM/qwen-code/pull/9098) — `tools.workflowsEnabled` replaces the undocumented env var as the official on-switch for dynamic workflows.
- [**#9034 — Expose workflow execution state**](https://github.com/QwenLM/qwen-code/pull/9034) — Structured runtime model: run/step lifecycle events, persisted journal, snapshot reconstruction, cancellation/retention primitives.
- [**#9086 — Harden `/review` against four live-run failures**](https://github.com/QwenLM/qwen-code/pull/9086) — Four defects found by running `qwen review run` against real PRs (#9013, #9014, #9045) with qwen3.8-max; each pinned with regression tests.
- [**#9111 — Desktop: route remaining external links through shell opener**](https://github.com/QwenLM/qwen-code/pull/9111) — Extends #9069's fix to four other link surfaces that relied on the unreliable implicit new-window path.
- [**#9104 — Autofix: escalate non-converging diffs to maintainer handoff**](https://github.com/QwenLM/qwen-code/pull/9104) — When a diff keeps growing past budget across rounds, `feedback.md` exposes the growth trajectory and the PR is escalated rather than patched indefinitely.

## 5. Feature Request Trends

- **Native multi-agent / fleet orchestration** (dominant theme): RFC #8718 and the stage 1A/1B/2/3 pipeline (#8840–8843) point to a clear direction — supervised teammates, persistence, recovery, and terminal attach for independent sessions.
- **Background automation & daemon health**: Issues #8586 (activeWork tracking, agent recovery) and #8678 (session-restore safety) show demand for observable, crash-safe long-running agents.
- **Web Shell as a first-class surface**: Channel policy redesign (#8845), workspace file uploads, external link handling, and MCP OAuth flows — the shell is evolving from chat UI into a full management console.
- **Omni multimodal experiment**: The S4–S6 roadmap (#8186–8190) tracks media policy chains, memory recall/garbage-collection, and cross-session file recognition on the protected `omni-experiment` branch.
- **Memory & persistence controls**: Requests for `pinned/` read-only memory (#6801) and cross-session recall indicate users want more deterministic memory hygiene.

## 6. Developer Pain Points

- **Windows is the roughest edge**: Installer SHA-256 failure (#7118), Ctrl+V paste regression (#9061), and Desktop spawning a visible runtime Terminal (#9043) — three distinct Windows-only bugs in the last 24h.
- **Vertex AI / Google auth friction**: `thinkingLevel` breaking all Gemini 2.5 requests (#9019) plus keyless ADC not being inferred (#9025) makes GCP deployments a two-front battle.
- **Headless runs fail hard on edge cases**: `NO_TOOL_RESULT_PROGRESS` (#9026) aborts non-interactive runs when a model ends quietly; auth-type inference failures kill runs at startup (#9025).
- **SDK/CLI parity gaps**: Python SDK rejecting `permission_mode="auto"` (#9002) adds needless friction for automation users.
- **Silent UI failures**: Web Shell external links and MCP OAuth silently doing nothing (#9108), plus `record_artifact` reporting success for files that render as "missing" (#9083), erode trust in desktop/artifact UX.
- **Naive file handling**: `read_file` trusting extensions over content (#9088) can abort entire turns on mislabeled files — a correctness issue as multimodal usage grows.

---

*Digest generated from [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) activity over the last 24h (2026-08-14).*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI / CodeWhale Community Digest — 2026-08-14

Repo: [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) (formerly DeepSeek-TUI)

## 1. Today's Highlights

CodeWhale shipped v0.9.7, formally rebranding the public product and deprecating the legacy `deepseek-tui` npm package, while v0.9.8 work is already landing in open PRs. Maintainer focus is on simplifying the oversized agent-tool schema, adding a model-guardian tier for Auto-Review, and fixing environment-sensitive tests. Community issues continue to highlight stability problems around long-running subagents, Chinese text/IME handling, and Windows/Cygwin config-path fragmentation.

## 2. Releases

- **[v0.9.7](https://github.com/Hmbown/CodeWhale/releases)** — Codewhale is now the public product from Shannon Labs. The `codewhale` command, npm package, and release-asset names remain lowercase technical identifiers. The legacy `deepseek-tui` npm package is deprecated and will receive no further releases. Users coming from v0.8.x legacy `deepseek` / `d...` should migrate to the `codewhale` package.

## 3. Hot Issues

1. **[#5324 — Simplify the 32-field agent-tool schema so models stop erroring on it](https://github.com/Hmbown/CodeWhale/issues/5324)**  
   Maintainer-authored proposal to reduce a 32-property, zero-required-field schema serving 8 actions plus aliases. High impact on model reliability; 7 comments and a follow-up PR already opened.

2. **[#998 — Truncated copy in TUI display (`文案展示不全`)](https://github.com/Hmbown/CodeWhale/issues/998)**  
   Chinese UI text is cut off; user requests hover tooltips for full content. Most-commented issue in the current window with 11 comments.

3. **[#1004 — `/dryrun`: preview the next chat completion request without sending it](https://github.com/Hmbown/CodeWhale/issues/1004)**  
   Would let developers inspect the full outgoing request — system prompt, cached repo files, tool definitions, @mentions — before committing to a costly DeepSeek V4 Pro turn. 9 comments.

4. **[#2369 — CodeWhale config paths fragmented across OS and Cygwin (plus silent migration bug)](https://github.com/Hmbown/CodeWhale/issues/2369)**  
   Config and secret paths resolve differently on Windows/Cygwin; a legacy migration can silently land users in the wrong state. Reliability concern with 7 comments.

5. **[#1425 — Session hangs after `agent_wait` timeout during a 3M-character novel analysis](https://github.com/Hmbown/CodeWhale/issues/1425)**  
   User launched 10 subagents, all showed `Running`, then the parent session deadlocked on `agent_wait`. Points to a real subagent lifecycle bug. 6 comments.

6. **[#1651 — VS Code crashes or exits while YOLO Agent runs test scripts](https://github.com/Hmbown/CodeWhale/issues/1651)**  
   Integrated-terminal users report IDE crashes during autonomous agent test execution using v4-pro/v4-flash. 5 comments.

7. **[#5340 — `codewhale doctor` stuck on `needs action` after upgrade to v0.9.6](https://github.com/Hmbown/CodeWhale/issues/5340)**  
   Post-upgrade setup checklist can never be marked complete, even after finishing onboarding. Blocks users from trusting `doctor` state. 2 comments.

8. **[#5359 — Four TUI tests read machine state and fail on dev boxes while CI stays green](https://github.com/Hmbown/CodeWhale/issues/5359)**  
   Tests read `~/.codewhale` and display-probe state, so they fail on real machines with existing state but pass in clean CI. 2 comments; fix PR #5368 is already up.

9. **[#1829 — SSH connection fails with exit code 255: suspected sandbox outbound TCP 22 block](https://github.com/Hmbown/CodeWhale/issues/1829)**  
   Local ssh works, but TUI shell-sandbox ssh/scp fail. Points to sandbox networking limitations on Windows. 5 comments.

10. **[#1732 — Merging and saving analysis reports is extremely slow, with low cache hit](https://github.com/Hmbown/CodeWhale/issues/1732)**  
   Reported cache-miss and long save times when writing combined analysis reports locally. 6 comments.

## 4. Key PR Progress

1. **[#5369 — fix(tools): degrade Moonshot schemas instead of refusing conditionals](https://github.com/Hmbown/CodeWhale/pull/5369)**  
   Prerequisite slice of the #5324 schema work; focuses purely on schema degradation so models stop failing on unsupported conditional shapes.

2. **[#5353 — feat(tui): model guardian tier for Auto-Review](https://github.com/Hmbown/CodeWhale/pull/5353)**  
   Auto-Review becomes a true two-layer mode: deterministic non-bypassable floor plus one-shot model guardian fallback for v0.9.8.

3. **[#5365 — feat(provider): add first-class local DS4 setup](https://github.com/Hmbown/CodeWhale/pull/5365)**  
   Makes DwarfStar (DS4) a keyless local DeepSeek V4 route through the existing OpenAI-compatible transport, with `/setup provider ds4`.

4. **[#5358 — feat(engine): auto-review denial rationale + turn circuit breaker](https://github.com/Hmbown/CodeWhale/pull/5358)**  
   Fixes denial loops where models rephrase the same denied action until the step budget runs out; adds rationale to `AutoReviewPlanDecision::Block` and a turn circuit breaker.

5. **[#5368 — fix(tui): confine unguarded tests to the isolated state root](https://github.com/Hmbown/CodeWhale/pull/5368)**  
   Fixes the four flaky tests from #5359 using three independent isolation mechanisms, each covered by its own regression test.

6. **[#5339 — fix(engine): suppress child-owned shell completions](https://github.com/Hmbown/CodeWhale/pull/5339)**  
   Filters child-owned background shell completion events out of the parent model stream while preserving unowned parent completions; closes #5325.

7. **[#5336 — fix(mcp): omit `nextCursor` when there are no further pages](https://github.com/Hmbown/CodeWhale/pull/5336)**  
   Fixes invalid `"nextCursor": null` responses in `tools/list` and `resources/list`, which strict MCP clients like Claude Code reject.

8. **[#5364 — feat(tui): render Markdown blockquotes with a quote rail](https://github.com/Hmbown/CodeWhale/pull/5364)**  
   Adds proper quote-rail rendering for blockquotes in the transcript, including nesting, inline formatting, wrapping, and selection-copy correctness.

9. **[#5333 — feat(tui): pin host terminal window as an always-on-top mini window](https://github.com/Hmbown/CodeWhale/pull/5333)**  
   Maintainer harvest of community PR #5318; brings `/pin` PiP mode for the Windows host terminal into the mainline.

10. **[#5318 — feat(tui): pin host terminal window as an always-on-top mini window](https://github.com/Hmbown/CodeWhale/pull/5318)**  
    Original community contribution from SparkofSpike: right-click or `/pin` shrinks the terminal to 640x400 and keeps it always-on-top on Windows.

## 5. Feature Request Trends

- **Input and keymap customization**  
  Users want configurable keybindings (#436), multi-line input modes and custom send shortcuts (#5345), and better Chinese IME behavior (#2323).

- **Tool schema and model-visible limits**  
  The 32-field agent schema is causing real model errors (#5324); users also want configurable model-visible `read`/tool-result size limits for self-hosted long-context models (#5367).

- **Provider and deployment flexibility**  
  Requests include a first-class DS4/DwarfStar local route (#5363), automatic profile failover on rate limits (#855), nVidia NIM support (#1482), and FreeBSD packaging (#1097).

- **i18n and Chinese text quality**  
  Expanding locale coverage beyond core UI (#790), fixing garbled Agent Chinese output (#1675), and adding hover tooltips for truncated text (#998).

- **Remote workbench and cloud lanes**  
  Community wants a unified US/global remote lane (#1990) and a more coherent CNB/Lighthouse/Feishu flow (#1984).

- **Agent lifecycle and review controls**  
  Multiple requests point to universal PreToolUse/PostToolUse hooks for cancel/pause/resume (#1917), read-only Fleet roles with bounded bash (#5356), and model-guardian fallbacks for Auto-Review (#5353).

## 6. Developer Pain Points

- **Chinese text and IME issues**  
  Garbled Chinese in Agent output (#1675), IME composition leaking into command input (#2323), and truncated labels with no tooltip fallback (#998).

- **Long-running agent workflows are fragile**  
  Subagent `agent_wait` timeouts deadlock sessions (#1425), YOLO agent execution can crash VS Code (#1651), and merged report saves are extremely slow with low cache hits (#1732).

- **Windows/Cygwin environment friction**  
  Config paths diverge across environments with silent migration bugs (#2369); SSH via the TUI shell sandbox is blocked on outbound TCP 22 (#1829); default launch uses raw `.exe` instead of Windows Terminal (#1854).

- **Upgrade and doctor reliability**  
  `codewhale doctor` can get permanently stuck on `first-run` / `update checkpoint` after upgrading (#5340).

- **Tests depend on real machine state**  
  TUI tests read `~/.codewhale` and display probes, causing deterministic failures on dev machines that CI never catches (#5359).

- **Protocol strictness and schema bloat**  
  MCP responses with `"nextCursor": null` break strict clients (#5336), while the agent tool’s 32-field schema causes models to error unnecessarily (#5324).

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*