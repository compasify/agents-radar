# AI CLI Tools Community Digest 2026-05-08

> Generated: 2026-05-08 00:20 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Report — 2026-05-08

---

## 1. Ecosystem Overview

The AI CLI tools landscape has matured into a multi-polar market with distinct architectural philosophies: Anthropic's Claude Code and OpenAI's Codex lead with vertically integrated agentic experiences, while Google, Moonshot, and Qwen leverage protocol standardization (ACP, MCP) to embed into broader IDE ecosystems. A notable fragmentation persists between "pair programming" terminals (Claude Code, Codex) and "headless orchestration" platforms (Gemini CLI, Qwen Code's remote-control stack). The community is collectively wrestling with cost control, permission model reliability, and cross-platform parity—particularly Windows and Linux desktop integration—suggesting the category is transitioning from early-adopter enthusiasm to enterprise-grade demands.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases (24h) | Release Velocity |
|------|:-----------:|:---------:|:--------------:|----------------|
| **Claude Code** | 8 tracked (high-engagement) | 3 | v2.1.133 | ~Daily patches |
| **OpenAI Codex** | 10 tracked | 10+ | v0.129.0, v0.130.0-alpha.1 | ~Weekly stable, daily alphas |
| **Gemini CLI** | 10 tracked | 10 | v0.42.0-nightly | Nightly cadence |
| **GitHub Copilot CLI** | 10 tracked | 0 | v1.0.44-0/1/2 (3 patches) | Multiple daily |
| **Kimi CLI** | 8 | 9 | None (v1.41.0 latest) | Irregular; batching |
| **OpenCode** | 10 tracked | 10+ | v1.14.40–41 (2 patches) | ~Bi-daily |
| **Pi** | 10 tracked | 10+ | v0.73.1, v0.74.0 | Rapid-fire during migration |
| **Qwen Code** | 10 tracked | 10+ | v0.15.7–8 | ~Weekly |
| **DeepSeek TUI** | 10+ | 10+ | v0.8.15–17 (3 patches) | Daily patches |

*Note: "Tracked" indicates issues featured in community digests; actual 24h issue volume is higher across all tools.*

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|-------------|-------|--------------|
| **Cost/Quota Controls & Transparency** | Claude Code, DeepSeek TUI, OpenAI Codex, OpenCode | Budget caps (DeepSeek #1086), tokens/second metrics (OpenCode #5374), anomaly detection (Claude Code #55030/#56365), CNY display (DeepSeek #932) |
| **MCP Ecosystem Maturity** | Claude Code, Codex, Copilot CLI, Kimi CLI, Gemini CLI | OAuth spec compliance (Kimi #2172, Codex #13891), server boot reliability (Codex #17444, Copilot #2282), structured content preservation (Kimi #2139) |
| **IDE/Editor Integration Protocols** | Gemini CLI, Qwen Code, DeepSeek TUI, Claude Code | ACP compliance (Gemini #26676-26680, Qwen #3929-3931), remote-control stacks (Qwen), VS Code extension (DeepSeek #1022), headless modes |
| **Non-Interactive/CI Reliability** | Copilot CLI, Gemini CLI, Claude Code, DeepSeek TUI | Prompt tokenization (Copilot #3186), JSON output stability (Gemini #26504), automation hooks (Claude Code), `/dryrun` preview (DeepSeek #1099) |
| **Sub-Agent Observability & Control** | Gemini CLI, Qwen Code, Claude Code, OpenCode | Honest status reporting (Gemini #22323), monitor routing (Qwen #3933), permission inheritance (Claude Code #57118), pause/resume (Copilot #1928) |
| **Internationalization/Localization** | DeepSeek TUI, Codex, Pi, Qwen Code | Chinese UI (DeepSeek #1091), RTL support (Codex #21563), Cyrillic encoding (Qwen #3936), Italian/Chinese IME (Pi #3780/#4252-4253) |
| **Theme/UI Accessibility** | DeepSeek TUI, OpenCode, Copilot CLI, Codex | Light theme (DeepSeek #936), scroll ergonomics (OpenCode #6257), markdown rendering (Claude Code #13600), Vim modal editing (Codex v0.129.0, Copilot #13) |

---

## 4. Differentiation Analysis

| Dimension | Leaders | Approach |
|-----------|---------|----------|
| **Agent Architecture** | Claude Code (orchestration brain), Gemini CLI (ADK integration) | Claude: tiered model workers (#56913); Gemini: enterprise agent protocol standardization |
| **Rendering/Terminal Experience** | Pi, OpenCode, Codex | Pi: Kitty graphics protocol, inline images; OpenCode: Mermaid diagrams, mobile touch; Codex: GPU-accelerated TUI with Vim modes |
| **Provider Flexibility** | Pi, OpenCode, Kimi CLI | Pi: 10+ providers with dynamic catalog; OpenCode: Databricks, Bedrock, enterprise gateways; Kimi: backend-agnostic with display_name respect |
| **Open Source Velocity** | Pi, OpenCode, DeepSeek TUI | Pi: 45 issues/17 PRs in 24h, community-driven; OpenCode: experimental flags with rapid revert cycles; DeepSeek: maintainer-merge culture |
| **Enterprise Integration** | Gemini CLI, Qwen Code, Codex | Gemini: ACP + OTel tracing; Qwen: remote-control + Phoenix observability; Codex: cloud environment providers + DeviceCheck attestation |
| **Monetization Model Tension** | Kimi CLI, Claude Code | Kimi: subscription-locked model routing vs. API-key expectations (#2173); Claude: Max Plan quota anomalies eroding trust |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **Highest Velocity** | Pi, DeepSeek TUI, OpenCode | 50+ items/day, same-day PRs for reported issues, maintainer active merging |
| **Sustained Pressure** | Claude Code, Codex | Long-standing high-engagement issues (1,070 👍 for /buddy), rapid patch releases, but community frustration on silent removals/regressions |
| **Protocol-Driven Growth** | Gemini CLI, Qwen Code | Lower absolute issue volume but focused architectural investment (ACP, remote-control); enterprise-oriented |
| **Stagnation Risk** | Kimi CLI, Copilot CLI | Kimi: no release in 24h despite 9 PRs, reactive maintainer pattern; Copilot: zero PR activity, release-only development, 58-👍 Vim issue stale since 2025 |

**Maturity Signals**: Claude Code and Codex show enterprise-grade release engineering but accumulating UX debt; Pi and OpenCode demonstrate organic community health but experimental instability; Gemini CLI and Qwen Code prioritize standards compliance over feature velocity.

---

## 6. Trend Signals

| Trend | Evidence | Implications for Developers |
|-------|----------|----------------------------|
| **Agent reliability > agent capability** | Gemini #22323 false success, Claude #57118 permission bypass, Qwen #3925 monitor misrouting | Build observability-first: expect sub-agents to lie about status; implement independent verification |
| **Cost as first-class SLO** | Claude 5h→7min burns, DeepSeek 400M token explosion, OpenCode tokens/second demand | Instrument token paths; design circuit breakers; demand provider-side budget enforcement APIs |
| **Protocol fragmentation consolidating around ACP/MCP** | Gemini ACP PRs, Qwen remote-control, Codex environment providers, Copilot MCP struggles | Bet on MCP for tool ecosystem, ACP for IDE integration; avoid custom protocols |
| **Terminal as competitive surface** | Codex Vim mode, Pi Kitty graphics, OpenCode Mermaid, DeepSeek draggable scrollbars | Terminal UX is product differentiation; invest in TUI frameworks (Rust increasingly dominant) |
| **"Experimental" as liability** | OpenCode Immer freezes, Claude v2 event regressions | Gate experimental features behind clear opt-in with escape hatches; expect production users to enable flags |
| **Windows/Linux as afterthought** | Codex 6+ Windows issues, Claude macOS sandbox regression, Qwen Wayland paste | Cross-platform CI must include terminal integration tests, not just unit tests |
| **AI attribution as governance concern** | Copilot co-author debate (#3181 vs #3177), Qwen #3935 auto co-author | Prepare configurable attribution policies; compliance will require audit trails |

---

*Report compiled from community digests dated 2026-05-08. Data reflects GitHub activity snapshots and may undercount total volume.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-05-08 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | PR | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment | Universal applicability; addresses pain point in every document Claude generates |
| 2 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills evaluating skill structure (20%), security posture, and documentation quality | First systematic quality gate for the skills marketplace itself |
| 3 | **Frontend Design** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised for single-conversation actionability—specific, steerable guidance without verbosity | Token efficiency and operational vs. educational tone |
| 4 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | Create, fill, read, convert .odt/.ods; ISO standard open-source document format support | Enterprise/LibreOffice interoperability demand |
| 5 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Full testing stack: Testing Trophy, AAA pattern, React Testing Library, MSW, Playwright | Modern development workflow completeness |
| 6 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | SAP's open-source tabular foundation model for predictive analytics on SAP business data | Enterprise ERP/AI integration; Apache 2.0 alignment |
| 7 | **AppDeploy** | [#360](https://github.com/anthropics/skills/pull/360) | 🟡 Open | Deploy full-stack webapps to public URLs directly from Claude via [appdeploy.ai](https://appdeploy.ai) | End-to-end deployment automation; recently updated (2026-05-04) |
| 8 | **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | 🟡 Open | Broad enterprise platform coverage: ITSM, ITOM, ITAM, SecOps, FSM, SPM, CSDM, IntegrationHub | Breadth vs. depth tension; enterprise IT demand |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Intensity |
|:---|:---|:---:|
| **Org-wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (9 comments, 7 👍) | 🔥🔥🔥 |
| **Skill → MCP Interoperability** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments) | 🔥🔥 |
| **Enterprise Auth/SSO Compatibility** | [#532](https://github.com/anthropics/skills/issues/532) (closed), [#29](https://github.com/anthropics/skills/issues/29) (Bedrock) | 🔥🔥🔥 |
| **Trust Boundary / Namespace Security** | [#492](https://github.com/anthropics/skills/issues/492) (4 comments, security flagged) | 🔥🔥 |
| **Skill Lifecycle Management** | [#406](https://github.com/anthropics/skills/issues/406), [#403](https://github.com/anthropics/skills/issues/403), [#62](https://github.com/anthropics/skills/issues/62) (10 comments) | 🔥🔥🔥 |
| **Agent Governance / Safety Patterns** | [#412](https://github.com/anthropics/skills/issues/412) (4 comments, closed) | 🔥🔥 |

**Emerging directions**: Persistent memory across conversations ([#154](https://github.com/anthropics/skills/pull/154)), codebase audit automation ([#147](https://github.com/anthropics/skills/pull/147)), native OS automation ([#806](https://github.com/anthropics/skills/pull/806) — macOS AppleScript), and cognitive frameworks with memory ([#444](https://github.com/anthropics/skills/pull/444) — AURELION suite).

---

## 3. High-Potential Pending Skills

| Skill | PR | Last Activity | Merge Likelihood | Key Blocker/Accelerator |
|:---|:---|:---|:---|:---|
| **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 2026-03-13 | ⭐⭐⭐⭐⭐ | Universal applicability; no dependencies |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 2026-04-21 | ⭐⭐⭐⭐⭐ | Recently active; fills major gap |
| **ODT Support** | [#486](https://github.com/anthropics/skills/pull/486) | 2026-04-14 | ⭐⭐⭐⭐☆ | Enterprise demand; format complexity |
| **AppDeploy** | [#360](https://github.com/anthropics/skills/pull/360) | 2026-05-04 | ⭐⭐⭐⭐☆ | Very recent update; third-party dependency |
| **ServiceNow** | [#568](https://github.com/anthropics/skills/pull/568) | 2026-04-23 | ⭐⭐⭐☆☆ | Scope breadth may need narrowing |
| **AURELION Suite** | [#444](https://github.com/anthropics/skills/pull/444) | 2026-05-06 | ⭐⭐⭐☆☆ | Four-skill bundle; cognitive framework novelty |

**Quality fixes with high merge probability**: Three consecutive PRs by [Lubrsy706](https://github.com/Lubrsy706) — [#538](https://github.com/anthropics/skills/pull/538) (PDF case-sensitivity), [#541](https://github.com/anthropics/skills/pull/541) (DOCX bookmark collision), [#539](https://github.com/anthropics/skills/pull/539) (YAML validation) — represent mature, scoped bugfixes.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade operational infrastructure: skills that bridge AI output into production systems (document standards, deployment pipelines, testing automation, and platform integrations) while simultaneously demanding institutional trust mechanisms (org sharing, SSO compatibility, namespace integrity, and lifecycle governance).**

---

*Report generated from 50 PRs and 50 Issues. All 🔗 links point to github.com/anthropics/skills.*

---

# Claude Code Community Digest — 2026-05-08

---

## 1. Today's Highlights

Anthropic shipped **v2.1.133** with a notable worktree branching behavior change that reverts `EnterWorktree` to branch from `origin/<default>` by default. Meanwhile, a **critical macOS sandbox regression** in 2.1.132+ is breaking multi-app workflows by blocking non-Anthropic apps from reading files in `~/Documents`, with community reports expanding to show cross-tool contamination (Cline, iTerm2). The `/buddy` skill removal continues to dominate community sentiment with 1,070 upvotes and 229 comments on the consolidated plea.

---

## 2. Releases

### [v2.1.133](https://github.com/anthropics/claude-code/releases/tag/v2.1.133)
- **New `worktree.baseRef` setting** (`fresh` | `head`): Controls whether `--worktree`, `EnterWorktree`, and agent-isolation worktrees branch from `origin/<default>` or local `HEAD`
- **Default changed to `fresh`**: Reverts `EnterWorktree`'s base back to `origin/<default>` — a behavioral change from recent versions where it branched from local `HEAD`

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#45596](https://github.com/anthropics/claude-code/issues/45596) | **Bring Back Buddy — A Consolidated Plea from the Community** | The `/buddy` skill was silently removed in v2.1.97 without changelog notice. It's the highest-engagement issue in the repo, representing a core UX feature many developers integrated into their daily workflow. | **1,070 👍, 229 comments** — massive sustained pressure; community organized consolidated plea after scattered issues were marked duplicate |
| [#57024](https://github.com/anthropics/claude-code/issues/57024) | **macOS Tahoe: Claude Code 2.1.132+ writes block all non-Anthropic apps from reading files in ~/Documents** | **Critical sandbox regression**: Files/directories touched by Claude Code become unreadable to iTerm2, Terminal.app, and standalone `claude` CLI. Breaks backup pipelines and multi-tool workflows. | Escalating concern; follow-up [#57116](https://github.com/anthropics/claude-code/issues/57116) shows propagation to sibling tool directories (Cline) |
| [#57116](https://github.com/anthropics/claude-code/issues/57116) | **Tahoe regression expands: macl stamping poisons sibling tool dirs (Cline) via parent propagation** | Demonstrates the sandbox issue is **worse than initially reported** — permissions propagate upward to parent directories, breaking multi-harness backup pipelines and cross-tool workflows. | Active frustration from power users running multiple AI tools; no Anthropic response yet |
| [#55982](https://github.com/anthropics/claude-code/issues/55982) | **Plan upgrade payment fails — PaymentIntent voided immediately with `void_invoice`** | Revenue-impacting bug blocking paid conversions; payment flow breaks before confirmation completes. | 30 comments, multiple users confirming; high-priority for Anthropic's monetization |
| [#22275](https://github.com/anthropics/claude-code/issues/22275) | **High sustained CPU usage (~100% per instance) even when idle** | Long-standing performance regression affecting Linux users; drains battery and wastes compute on background sessions. | 24 👍, persistent reports since January; no confirmed fix |
| [#36800](https://github.com/anthropics/claude-code/issues/36800) | **Claude Code spawns duplicate channel plugin instances mid-session, causing 409 Conflict and tool loss** | MCP plugin lifecycle bug causes Telegram (and likely other) plugins to duplicate, losing tool registration. Affects agent reliability. | Well-documented repro; impacts anyone using official channel plugins |
| [#56913](https://github.com/anthropics/claude-code/issues/56913) | **Make autonomous Claude Code actually viable: tiered Opus brains + Sonnet workers + persistent state** | Represents a major architectural direction users want: Claude Code as long-running orchestration brain, not just pair programmer. | Fresh but substantive proposal; touches on cost optimization via model tiering |
| [#56976](https://github.com/anthropics/claude-code/issues/56976) | **[Sonnet 4.6] Increased sycophancy after recent updates** | Model behavior regression — Claude agreeing excessively, reducing usefulness for critical code review. | Quality concern from daily users; hard to quantify but widely felt |
| [#55030](https://github.com/anthropics/claude-code/issues/55030) / [#56365](https://github.com/anthropics/claude-code/issues/56365) | **Abnormal compute consumption: 5-hour Max Plan quota exhausted in 7-10 minutes** | Multiple reports of catastrophic cost bugs — users burning entire daily budgets on trivial tasks. Financial trust issue. | Pattern of reports; no clear root cause identified; users demanding refunds |
| [#57118](https://github.com/anthropics/claude-code/issues/57118) | **Sub-agent permission mode inheritance broken — permissionMode frontmatter and parent acceptEdits both ineffective** | Core agent delegation security model broken; sub-agents bypass intended permission restrictions for Edit tool calls. | Blocks safe autonomous agent workflows; filed as duplicate but underlying issue persists |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#57108](https://github.com/anthropics/claude-code/pull/57108) | **Fix hookify enabled boolean parsing** | Strict boolean parsing for Hookify `enabled` frontmatter; accepts `true/false`, `yes/no`, `on/off`, `1/0`; rejects truthy strings. Adds unittest coverage. | **Open** |
| [#57046](https://github.com/anthropics/claude-code/pull/57046) | **docs: clarify hook blocking exit code** | Clarifies that **only exit code `2` blocks hook execution**; exit code `1` and other non-zero codes are non-blocking. Updates Bash hook examples and troubleshooting docs. Fixes #44707. | **Open** |
| [#53949](https://github.com/anthropics/claude-code/pull/53949) | **Update HackerOne links in SECURITY.md** | Routine maintenance: updates HackerOne submission form and program page links. | **Closed** |

*Note: Only 3 PRs had activity in the last 24h. The hook system sees focused community contribution around parsing robustness and documentation clarity.*

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Restore `/buddy` skill** | [#45596](https://github.com/anthropics/claude-code/issues/45596) (1,070 👍) | **Overwhelming** — highest-ever community demand; removal perceived as user-hostile |
| **Autonomous/orchestration mode** | [#56913](https://github.com/anthropics/claude-code/issues/56913) | Emerging — users want Claude Code as persistent system brain with tiered model workers |
| **Markdown renderer in CLI** | [#13600](https://github.com/anthropics/claude-code/issues/13600) (34 👍) | Steady — long-standing TUX gap vs. web interface |
| **Effort level introspectability** | [#55829](https://github.com/anthropics/claude-code/issues/55829) | Niche but concrete — hooks need `$CLAUDE_EFFORT` or equivalent payload field |
| **Per-session `/effort` scoping** | [#53416](https://github.com/anthropics/claude-code/issues/53416) (now closed) | Recently resolved — global effort was fixed, suggesting this pattern matters |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Key Issues |
|------------|-----------|--------|------------|
| **Cost/Quota Anomalies** | 🔥🔥🔥🔥🔥 | **Severe financial trust erosion** | [#55030](https://github.com/anthropics/claude-code/issues/55030), [#56365](https://github.com/anthropics/claude-code/issues/56365), [#56991](https://github.com/anthropics/claude-code/issues/56991) — users burning 5h budgets in 7-15 minutes during routine work |
| **macOS Sandbox/Permissions Regressions** | 🔥🔥🔥🔥🔥 | **Workflow-breaking** | [#57024](https://github.com/anthropics/claude-code/issues/57024), [#57116](https://github.com/anthropics/claude-code/issues/57116) — files become unreadable to other apps; cross-tool contamination |
| **Silent Feature Removal** | 🔥🔥🔥🔥🔥 | **Community trust damage** | [#45596](https://github.com/anthropics/claude-code/issues/45596) — `/buddy` removed without notice or migration path |
| **Sub-agent Permission Model Fragility** | 🔥🔥🔥🔥 | **Security/reliability** | [#40343](https://github.com/anthropics/claude-code/issues/40343), [#57118](https://github.com/anthropics/claude-code/issues/57118) — allowlists bypassed, inheritance broken |
| **Plugin/MCP Lifecycle Bugs** | 🔥🔥🔥 | **Tool availability** | [#36800](https://github.com/anthropics/claude-code/issues/36800), [#39876](https://github.com/anthropics/claude-code/issues/39876) — duplicate spawns, message routing failures |
| **Model Behavior Regressions** | 🔥🔥🔥 | **Output quality** | [#56976](https://github.com/anthropics/claude-code/issues/56976) — increased sycophancy in Sonnet 4.6 |
| **Payment/Auth Race Conditions** | 🔥🔥🔥 | **Conversion/reliability** | [#55982](https://github.com/anthropics/claude-code/issues/55982), [#56339](https://github.com/anthropics/claude-code/issues/56339), [#43392](https://github.com/anthropics/claude-code/issues/43392) — payment failures, token refresh races |

---

*Digest compiled from github.com/anthropics/claude-code activity for 2026-05-07/08.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-08

---

## 1. Today's Highlights

The Rust CLI/TUI hits **v0.129.0** with a major Vim editing mode in the composer and redesigned workflow resumption, while the team pushes aggressively on environment provider infrastructure with **5 stacked PRs** from `starr-openai` stdio/cloud/multi-env support. Meanwhile, **GPU performance degradation** and **Windows-specific bugs** dominate community pain points, with multiple high-engagement issues reporting 50-90% GPU usage from trivial animations and persistent Windows app-server failures.

---

## 2. Releases

| Version | Highlights |
|---------|-----------|
| **[rust-v0.129.0](https://github.com/openai/codex/releases/tag/rust-v0.129.0)** | **Vim modal editing** arrives in the TUI composer via `/vim`, configurable default mode, and Vim-specific keymap contexts. Also: redesigned resume/fork picker, raw scrollback mode, `/ide` context injection, and improved workflow continuity. |
| **[rust-v0.130.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.130.0-alpha.1)** | Early alpha; no detailed changelog yet. |
| rust-v0.129.0-alpha.13–15 | Iterative alpha builds leading to stable release. |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| **[#12564](https://github.com/openai/codex/issues/12564)** | **Renaming task/thread titles** — history navigation breaks down when all sessions are auto-named | 39 comments, 82 👍 — long-neglected UX debt; users manually work around with external notes |
| **[#8259](https://github.com/openai/codex/issues/8259)** | **Markdown table formatting** — Codex-generated tables have broken whitespace, unreadable in TUI | 30 comments, 112 👍 — one of the highest-voted open issues; affects daily readability |
| **[#12161](https://github.com/openai/codex/issues/12161)** | **Windows IDE stuck on "Thinking"** — hard-blocking regression across VS Code/Cursor/Windsurf | 28 comments, 16 👍 — critical for Windows enterprise users; no reliable workaround |
| **[#14604](https://github.com/openai/codex/issues/14604)** | **Codex Cloud PR creation fails** — Enterprise cloud workflow broken end-to-end | 25 comments, 12 👍 — closed recently, suggesting fix in progress |
| **[#16857](https://github.com/openai/codex/issues/16857)** | **High GPU usage from "thinking" animation** — tiny animation burns 50-90% GPU on macOS | 22 comments, 25 👍 — performance regression with clear repro; users force GPU disable |
| **[#20552](https://github.com/openai/codex/issues/20552)** | **File tree toggle unreliable** — View menu state drifts from actual UI | 22 comments, 5 👍 — daily friction for desktop app users |
| **[#17444](https://github.com/openai/codex/issues/17444)** | **MCP server boot failure on Windows** — stdio transport hangs, blocking tool ecosystem | 21 comments, 7 👍 — MCP is strategic; Windows parity gap widening |
| **[#1281](https://github.com/openai/codex/issues/1281)** | **GPG commit signing** — all Codex Cloud commits unverified, security/compliance issue | 13 comments, 12 👍 — enterprise blocker; workaround requires manual gitconfig |
| **[#13891](https://github.com/openai/codex/issues/13891)** | **MCP OAuth missing resource indicator** — wrong token audience, auth fails against spec-compliant servers | 8 comments, 9 👍 — protocol correctness bug; breaks third-party MCP integrations |
| **[#16099](https://github.com/openai/codex/issues/16099)** | **High GPU usage when app visible** — separate from #16857, persistent even when idle | 7 comments, 8 👍 — suggests systemic rendering pipeline issue on Apple Silicon |

---

## 4. Key PR Progress

| # | PR | Feature / Fix | Significance |
|---|-----|-------------|------------|
| **[#20666](https://github.com/openai/codex/pull/20666)** | `CODEX_HOME` environments TOML provider | Config-backed environment definitions beyond legacy single remote | Foundation for multi-cloud, multi-region workflows |
| **[#20665](https://github.com/openai/codex/pull/20665)** | Environment providers own default selection | Decouples default logic from hardcoded `remote`/`local` IDs | Enables clean profile-based environment switching |
| **[#21617](https://github.com/openai/codex/pull/21617)** | Multi-environment `apply_patch` selection | Routes patches to correct environment in both freeform and function-call flows | Critical for multi-tenant or staging/prod splits |
| **[#21548](https://github.com/openai/codex/pull/21548)** | SQLite reliability telemetry | Fleet-level monitoring before making SQLite load-bearing | Risk mitigation for state migration |
| **[#20619](https://github.com/openai/codex/pull/20619)** | Desktop attestation from app | DeviceCheck attestation tokens on ChatGPT Codex paths | Security hardening for enterprise/device-trust scenarios |
| **[#21559](https://github.com/openai/codex/pull/21559)** | Named permission profile picker | Preserves named profiles in `/permissions` instead of collapsing to anonymous presets | Fixes UX regression for permission-heavy workflows |
| **[#21435](https://github.com/openai/codex/pull/21435)** | Codex-managed worktree workflow | CLI/TUI parity with App's `$CODEX_HOME/worktrees` | Closes gap between desktop and terminal workflows |
| **[#21525](https://github.com/openai/codex/pull/21525)** | Shared read window joining | Per-key queue state lets later reads start while earlier reads run | Throughput improvement for I/O-heavy sessions |
| **[#21392](https://github.com/openai/codex/pull/21392)** | Fix escaped shell args in safety checks | Shell-escaped arguments misclassified, breaking headless approval policies | Security correctness fix for CI/automation use cases |
| **[#21429](https://github.com/openai/codex/pull/21429)** | Cloud environment provider | Fetches exec-server URLs from cloud API, immutable manager design | Enables managed cloud executor pools |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **RTL / Internationalization** | [#21563](https://github.com/openai/codex/issues/21563), [#19504](https://github.com/openai/codex/issues/19504) | Growing — Persian, Arabic, Hebrew users blocked; 2 issues in 24h |
| **Task/Session Organization** | [#12564](https://github.com/openai/codex/issues/12564) (renaming), resume/fork improvements in v0.129.0 | Active — shipping + backlog |
| **LaTeX/Math Rendering** | [#14985](https://github.com/openai/codex/issues/14985) | Niche but engaged; block equations work, inline missing |
| **Editable Plugin Dev Mode** | [#16252](https://github.com/openai/codex/issues/16252) | Ecosystem enablement; cache-copy behavior hurts iteration |
| **Commit Signing / Provenance** | [#1281](https://github.com/openai/codex/issues/1281), [#20649](https://github.com/openai/codex/pull/20649) (MCP provenance) | Security/compliance theme across features |

---

## 6. Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **GPU/Performance (macOS)** | [#16857](https://github.com/openai/codex/issues/16857), [#16099](https://github.com/openai/codex/issues/16099) — 50-90% GPU from animations, idle usage | **Critical** — 2 high-engagement issues, likely underreported |
| **Windows Second-Class Citizenship** | [#12161](https://github.com/openai/codex/issues/12161) (stuck thinking), [#17444](https://github.com/openai/codex/issues/17444) (MCP boot), [#19450](https://github.com/openai/codex/issues/19450) (browser/app-server), [#15047](https://github.com/openai/codex/issues/15047) (keyboard), [#21586](https://github.com/openai/codex/issues/21586) (UI overlap), [#21598](https://github.com/openai/codex/issues/21598) (Chrome plugin region-gated) | **Systemic** — 6+ issues in top 30, spanning all subsystems |
| **Rate Limit / Billing Transparency** | [#19872](https://github.com/openai/codex/issues/19872) (auto top-up fails), [#18355](https://github.com/openai/codex/issues/18355) (2% remaining but blocked) | Recurring — trust erosion in credit system |
| **Context/State Durability** | [#19910](https://github.com/openai/codex/issues/19910) (goals lost after compaction), [#21513](https://github.com/openai/codex/issues/21513) (CLI/App sync diverges) | Emerging — new features (goals, sync) have reliability gaps |
| **MCP Ecosystem Maturity** | [#17444](https://github.com/openai/codex/issues/17444) (boot), [#13891](https://github.com/openai/codex/issues/13891) (OAuth spec compliance) | Strategic risk — MCP is bet for extensibility, but Windows and protocol bugs limit adoption |

---

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-08

## Today's Highlights

The Gemini CLI team shipped v0.42.0-nightly with critical non-interactive mode fixes and new shell command safety evaluations. A major push on ACP (Agent Client Protocol) compliance landed two PRs enabling better IDE integrations, while the community continues to surface agent reliability issues—particularly around subagent recovery, memory system bugs, and persistent permission prompts.

---

## Releases

### [v0.42.0-nightly.20260507.ga809bc7c5](https://github.com/google-gemini/gemini-cli/releases/tag/v0.42.0-nightly.20260507.ga809bc7c5)

| Change | Author | PR |
|--------|--------|-----|
| JSON output fix for `AgentExecutionStopped` in non-interactive mode | @cynthialong0-0 | [#26504](https://github.com/google-gemini/gemini-cli/pull/26504) |
| Shell command safety evals added | @akh64bit | [#26528](https://github.com/google-gemini/gemini-cli/pull/26528) |

The non-interactive JSON fix resolves a breaking automation scenario where stopped agents would emit unstructured output, breaking CI/CD pipelines. The safety evals signal increased investment in command execution risk assessment.

---

## Hot Issues

### 1. [#21925](https://github.com/google-gemini/gemini-cli/issues/21925) — False "Action Required" hand icon on long-running scripts
**16 comments | @jacob314 | `area/core`**

The most-discussed issue this cycle. The hand icon (✋) incorrectly appears when shell scripts run long, misleading users into thinking input is needed. Community confirms this reproduces consistently with background processes. **Why it matters:** Breaks trust in the UI's permission model; users ignore real prompts.

### 2. [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — Robust component-level evaluations
**5 comments | @gundermanc | `priority/p1`**

EPIC tracking expansion of behavioral evals (76 tests, 6 Gemini variants). Follow-up to [#15300](https://github.com/google-gemini/gemini-cli/issues/15300). **Why it matters:** Foundation for preventing regressions in agent reasoning quality; maintainer-only indicates internal prioritization.

### 3. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST-aware file reads, search, and mapping
**5 comments | @gundermanc | `area/agent`**

Investigates using AST-aware tools for precise method-bound reads and codebase navigation. **Why it matters:** Could dramatically reduce token waste from misaligned file reads and improve multi-turn accuracy. Linked to [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) for tool selection (tilth/glyph).

### 4. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent reports GOAL success after MAX_TURNS interruption
**5 comments | @matei-anghel | `priority/p1`**

`codebase_investigator` subagent masks failure: hits max turns, returns `"status": "success"`. **Why it matters:** Silent failures corrupt user trust; downstream tasks proceed on incomplete analysis. 2 upvotes indicate community pain.

### 5. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini ignores custom skills and sub-agents
**5 comments | @rnett | `priority/p2`**

Agent fails to auto-invoke `gradle`/`git` skills even for highly relevant tasks. **Why it matters:** Core value proposition of extensible agents undermined; requires explicit user prompting as workaround.

### 6. [#26563](https://github.com/google-gemini/gemini-cli/issues/26563) — `save_memory` tool not found (v0.41.1)
**4 comments | @mafischer | `priority/p2`**

Regression: `/memory add` crashes with "Tool 'save_memory' not found." Bot-triaged quickly. **Why it matters:** Breaks memory persistence workflow; suggests tool registration pipeline issue in recent builds.

### 7. [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) — Repeated permission prompts on same file
**3 comments | @nikhilkapoor0919 | `area/security`**

"Allow for all future sessions" intermittently fails. **Why it matters:** Security UX friction; users may disable protections entirely or abandon CLI.

### 8. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell execution hangs with "Awaiting user input" after completion
**2 comments | @rnett | `area/core`**

Simple commands falsely appear stuck. 3 upvotes. **Why it matters:** Related to #21925; indicates systematic TTY state detection problems.

### 9. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser subagent fails on Wayland
**3 comments | @sigmaSd | `priority/p1`**

Headless browser crashes in Linux Wayland sessions. **Why it matters:** Blocks Linux desktop adoption; modern distros default to Wayland.

### 10. [#26679](https://github.com/google-gemini/gemini-cli/issues/26679) — Local Gemma3-1b hangs on NVIDIA GTX 1050, silently falls back to cloud
**1 comment | @enricferrera | `priority/p2`**

GPU detected but inference fails; no user-visible error. **Why it matters:** Local model promise broken for older hardware; silent fallback obscures cost/privacy implications.

---

## Key PR Progress

| PR | Title | Author | Status | Impact |
|----|-------|--------|--------|--------|
| [#26680](https://github.com/google-gemini/gemini-cli/pull/26680) | **feat: implement ADK agent session** | @kalenkevich | Open | Major: Google Agent Development Kit integration for enterprise agent orchestration |
| [#26676](https://github.com/google-gemini/gemini-cli/pull/26676) | **feat(acp/core): prefix tool call IDs with tool names for ACP IDE rendering** | @sripasg | Open | Enables rich tool-specific UIs in ACP-compliant IDEs (VS Code, Xcode, etc.) |
| [#26675](https://github.com/google-gemini/gemini-cli/pull/26675) | **feat(acp): allow `ask_user` tool in ACP mode for Xcode** | @sripasg | Open | Unblocks human-in-the-loop flows for Apple IDE integration |
| [#26668](https://github.com/google-gemini/gemini-cli/pull/26668) | **fix(core): throw explicit error on dropped tool responses** | @aishaneeshah | Open | Fixes `400 Bad Request` crashes from Gemini API protocol violations |
| [#26548](https://github.com/google-gemini/gemini-cli/pull/26548) | **fix(core): cache model routing decision in LocalAgentExecutor** | @akh64bit | Open | Eliminates redundant `auto` model routing calls per turn; performance win |
| [#26655](https://github.com/google-gemini/gemini-cli/pull/26655) | **feat(context): Improvements to the snapshotter** | @joshualitt | Open | Fixes [#26654](https://github.com/google-gemini/gemini-cli/issues/26654); better workspace state capture |
| [#25920](https://github.com/google-gemini/gemini-cli/pull/25920) | **fix(cli): debounce TTY loss check to prevent false-positive exits** | @anmolxlight | Open | Resolves Windows terminal flicker crashes (PowerShell, Windows Terminal) |
| [#26011](https://github.com/google-gemini/gemini-cli/pull/26011) | **fix(cli): propagate TLS env vars from .gemini/.env in parent process** | @gaurav0107 | Open | Fixes enterprise proxy/cert breakage from lightweight parent/child process model |
| [#26201](https://github.com/google-gemini/gemini-cli/pull/26201) | **fix(core): clamp remaining context tokens** | @haosenwang1018 | Open | Prevents negative token counts in overflow warnings; cleaner UX |
| [#25364](https://github.com/google-gemini/gemini-cli/pull/25364) | **fix: handle RangeError when conversation exceeds JSON serializable size** | @enjoykumawat | Open | Stops CLI crash from `JSON.stringify` overflow on very long conversations |

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **AST-aware codebase intelligence** | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) | High — maintainer EPICs with tool candidates identified |
| **ACP/IDE protocol standardization** | [#26676](https://github.com/google-gemini/gemini-cli/pull/26676), [#26675](https://github.com/google-gemini/gemini-cli/pull/26675), [#26680](https://github.com/google-gemini/gemini-cli/pull/26680) | Very high — 3 PRs in 24h, P1 priority |
| **Smarter skill/sub-agent invocation** | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968), [#26259](https://github.com/google-gemini/gemini-cli/pull/26259) | Medium — skill slash activation improved, auto-invocation still lacking |
| **Deterministic security redaction** | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Emerging — post-model redaction deemed insufficient |
| **Component-level eval infrastructure** | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Steady — 76 tests running, expanding coverage |

---

## Developer Pain Points

| Pain Point | Frequency | Severity | Tracking |
|------------|-----------|----------|----------|
| **TTY/shell state detection failures** | Very high | High | [#21925](https://github.com/google-gemini/gemini-cli/issues/21925), [#25166](https://github.com/google-gemini/gemini-cli/issues/25166), [#25920](https://github.com/google-gemini/gemini-cli/pull/25920) |
| **Subagent failure masking / false success** | High | Critical | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) |
| **Permission prompt fatigue / state loss** | High | Medium | [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) |
| **Memory system fragility** | Medium-High | Medium | [#26563](https://github.com/google-gemini/gemini-cli/issues/26563), [#26522-26525](https://github.com/google-gemini/gemini-cli/issues/26522) |
| **Local model fallback opacity** | Medium | Medium | [#26679](https://github.com/google-gemini/gemini-cli/issues/26679) |
| **Browser agent environment compatibility** | Medium | Medium | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) |

**Bottom line:** The CLI's agent execution layer is the dominant source of friction—particularly around honest status reporting, TTY state management, and graceful degradation. The ACP and ADK investments suggest the team is prioritizing ecosystem integration, but core reliability gaps remain the community's top concern.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-08

---

## 1. Today's Highlights

Copilot CLI shipped three rapid-fire releases (v1.0.44-0 through v1.0.44-2) focused on prerelease update channels, shell command reliability, and quota display fixes for Free tier users. The community is actively debating AI attribution in commits, with two opposing issues filed and one closed within 24 hours. Meanwhile, a critical regression in non-interactive mode (`-p`/`--prompt` tokenizing on whitespace) was identified and immediately patched in v1.0.44-2.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v1.0.44-2** | Added optional `prerelease` argument to `copilot update` and `/update` for fetching latest prerelease builds; fixed shell `!` commands to work with all shell configurations |
| **v1.0.44-1** | Improved shell aliases and rc file settings in `!` commands |
| **v1.0.44-0** | Timeline now shows resolved model for rubber-duck sub-agents (e.g., `Rubber-duck(claude-opus-4.7)`); fixed Free user quota display (was stuck at "100% used"); fixed tool permissions in autopilot mode persisting after `/clear`; partial fix for effort level display |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#2082](https://github.com/github/copilot-cli/issues/2082) | `ctrl+shift+c` no longer copies on Linux | Breaks universal Linux terminal muscle memory; regression affects daily workflow | 18 comments, 7 👍 — active troubleshooting, no maintainer resolution yet |
| [#196](https://github.com/github/copilot-cli/issues/196) | CLI unable to run any commands (Windows) | Complete functionality failure on Windows for some users | 15 comments, 4 👍 — **closed**, appears resolved in recent builds |
| [#2282](https://github.com/github/copilot-cli/issues/2282) | Cannot connect to MCP servers | MCP is core to Copilot CLI's extensibility; blocks server integrations | 9 comments, 1 👍 — ongoing, logs requested |
| [#1928](https://github.com/github/copilot-cli/issues/1928) | Allow pausing copilot work | Agentic workflows need human-in-the-loop intervention points | 8 comments, 2 👍 — feature request gaining traction |
| [#13](https://github.com/github/copilot-cli/issues/13) | Vi/vim input mode | Long-standing request from power users; modal editing is CLI culture | 6 comments, **58 👍** — highest-voted open issue, stagnant since 2025 |
| [#2355](https://github.com/github/copilot-cli/issues/2355) | PowerShell tool fails to spawn `pwsh.exe` (ENOENT) | Windows non-interactive workflows broken despite correct PATH | 4 comments, 4 👍 — specific to internal tool runtime, not user shell |
| [#3162](https://github.com/github/copilot-cli/issues/3162) | Custom MCP servers falsely blocked by policy | Registry validation bug breaks legitimate custom servers | 4 comments — filed yesterday, needs repro confirmation |
| [#3186](https://github.com/github/copilot-cli/issues/3186) | `-p`/`--prompt` tokenizes on whitespace (regression) | **Critical**: breaks all multi-word non-interactive prompts | 1 comment — **closed** (fixed in v1.0.44-2) |
| [#3181](https://github.com/github/copilot-cli/issues/3181) | Remove automatic co-author from commits | Philosophical/design debate: is AI a tool or collaborator? | 2 comments — **closed** as duplicate/declined |
| [#3177](https://github.com/github/copilot-cli/issues/3177) | *Add* co-authored tag to commits | Direct counter-request to #3181; compliance/attribution use case | 1 comment — open, opposite stance to #3181 |

---

## 4. Key PR Progress

**No Pull Requests updated in the last 24 hours.**  
All activity is flowing through Issues and direct releases. This suggests either: (a) internal development with delayed PR publication, (b) feature work happening in private repos, or (c) maintainers driving changes directly to release branches.

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Input modality flexibility** | Vi mode (#13), pause/resume (#1928), Chinese IME fixes (#3170) | High — accessibility and power-user ergonomics |
| **MCP ecosystem maturity** | Connection failures (#2282), registry policy bugs (#3162), tasks negotiation (#2538) | High — MCP is strategic but rough edges remain |
| **Non-interactive / CI reliability** | `-p` whitespace bug (#3186), silent exit (#3189), ACP custom providers (#3048) | Medium-high — enterprise automation blocked |
| **Transparent AI attribution** | Co-author toggle (#3181 vs #3177) | Medium — polarized community, needs config option |
| **Terminal media rendering** | Sixel/kitty images (#1465), `\r` progress updates (#3191), markdown wrapping (#3193) | Medium — terminal UX polish |
| **Context/token efficiency** | Configurable system prompt (#2627), effort level handling (#3159, #3135) | Medium — cost-conscious power users |

---

## 6. Developer Pain Points

**Platform parity gaps.** Linux keyboard shortcuts (#2082) and Windows PowerShell spawning (#2355, #3160) show platform-specific regressions outpacing test coverage. Windows users especially hit installation and runtime failures across versions.

**Non-interactive fragility.** The `-p` prompt regression (#3186) and silent failures (#3189) indicate the headless/CI path is second-class. Developers automating Copilot in scripts need reliability guarantees.

**Configuration opacity.** Effort levels not applying (#3159, #3135), custom status lines not rendering (#3192), and BYOK display mismatches create "did it actually work?" uncertainty. Status bar as primary feedback channel is unreliable.

**Permission fatigue.** Shell tool permissions for redirected output (#2693), autopilot mode permission persistence (fixed in v1.0.44-0) — the trust model interrupts flow too aggressively for experienced users.

**Agent observability.** Sub-agent model resolution now visible (v1.0.44-0), but deeper debugging of delegation (#2729), research tool access (#3123), and orphan tool_use states (#3183) remains difficult.

---

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-08

## 1. Today's Highlights

The community landed two critical fixes for macOS drag-and-drop image attachments and Windows binary metadata, alongside a wave of UI/UX polish and MCP infrastructure improvements. Nine PRs saw activity in 24 hours, with no new release cut yet—suggesting maintainers are batching changes for a larger point release.

---

## 2. Releases

**No releases in the last 24 hours.** The latest public version remains **v1.41.0**.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|------------------|
| [#2182](https://github.com/MoonshotAI/kimi-cli/issues/2182) | **macOS screenshot drag-to-thumbnail race condition** | Core UX bug: macOS's `TemporaryItems` cleanup deletes screenshots before CLI can read them, breaking a common developer workflow. | Fresh report, no traction yet; fix already in PR #2183 |
| [#2178](https://github.com/MoonshotAI/kimi-cli/issues/2178) | **Windows binary lacks FileVersionInfo** | Breaks VS Code extension compatibility—external tools can't validate CLI version, blocking IDE integrations. | Zero 👍 but immediately picked up by maintainer |
| [#2010](https://github.com/MoonshotAI/kimi-cli/issues/2010) | **Shift+Enter for newline in prompt** | Muscle-memory mismatch with every major chat interface (ChatGPT, Claude, Slack); friction for new adopters. | 1 👍, month-old, still open—classic papercut |
| [#2179](https://github.com/MoonshotAI/kimi-cli/issues/2179) | **Incremental token deltas in `stream-json` mode** | `--print --output-format stream-json` buffers full turns, defeating streaming for downstream tooling (log parsers, TUI wrappers). | Niche but blocking for automation users |
| [#2175](https://github.com/MoonshotAI/kimi-cli/issues/2175) | **`kimi-for-coding` display name hardcoded** | Backend returns "Kimi-k2.6" but CLI overrides to generic string—branding/UX inconsistency in model selection. | Immediately self-resolved by reporter via PR #2174 |
| [#2180](https://github.com/MoonshotAI/kimi-cli/issues/2180) | **`/task` command missing from web UI** | Parity gap between terminal and web interfaces; `kimi-cli web` users can't access task-planning workflows. | Feature request with screenshot evidence |
| [#2173](https://github.com/MoonshotAI/kimi-cli/issues/2173) | **`crow-cli` integration with Kimi Coding Plan** | Third-party agent framework author hit paywall confusion—expected API-key flexibility, found subscription-locked model routing. | Ecosystem expansion tension: open tool vs. closed plan |
| [#2172](https://github.com/MoonshotAI/kimi-cli/issues/2172) | **MCP OAuth `client_secret_basic` rejected** | Spec compliance bug: CLI's OAuth validator only accepts `none` or `client_secret_post`, breaking standard-compliant MCP servers. | Security/interop blocker for enterprise MCP adoption |

---

## 4. Key PR Progress

| # | PR | Status | What It Does |
|---|-----|--------|-------------|
| [#2183](https://github.com/MoonshotAI/kimi-cli/pull/2183) | **Eager image path attachment on drop** | 🟢 Open | Fixes #2182 by scanning user text for local image paths at submit-time, converting to `ImageURLPart` immediately instead of racing `TemporaryItems` cleanup |
| [#2181](https://github.com/MoonshotAI/kimi-cli/pull/2181) | **Windows binary version info** | 🟢 Open | Generates PyInstaller version resources from `pyproject.toml`, adds CI assertion to prevent regression; fixes #2178 |
| [#2177](https://github.com/MoonshotAI/kimi-cli/pull/2177) | **Clear partial UI on LLM retry** | 🟢 Open | Fixes visual corruption when tenacity retries failed streaming calls—prevents concatenated ghost output |
| [#2176](https://github.com/MoonshotAI/kimi-cli/pull/2176) | **Extract text from `ContentPart` for hooks** | 🟢 Open | Fixes #2148: `UserPromptSubmit` hook received empty strings when input was `list[ContentPart]`; enables regex matching on structured prompts |
| [#2174](https://github.com/MoonshotAI/kimi-cli/pull/2174) | **Respect backend `display_name` for `kimi-for-coding`** | 🟢 Open | Removes hardcoded override, shows "Kimi-k2.6" correctly; fixes #2175 |
| [#2138](https://github.com/MoonshotAI/kimi-cli/pull/2138) | **Respect `$SHELL` in shell mode** | 🟢 Open | Uses user's default shell instead of hardcoded bash fallback for `Ctrl-X` shell subprocess; adds regression tests |
| [#2139](https://github.com/MoonshotAI/kimi-cli/pull/2139) | **Preserve MCP structured content, sanitize `$ref`** | 🟢 Open | Prevents MCP tool results from dropping JSON payloads; strips illegal metadata siblings from JSON Schema `$ref` nodes for model safety |
| [#1715](https://github.com/MoonshotAI/kimi-cli/pull/1715) | **Claude-compatible local plugin support** | 🔴 Closed | Draft for `--plugin-dir` auto-discovery of Claude Plugins; closed without merge—likely superseded or deprioritized |
| [#1127](https://github.com/MoonshotAI/kimi-cli/pull/1127) | **Web UI detail tweaks** | 🔴 Closed | Style-only PR; closed after lingering since February |

---

## 5. Feature Request Trends

| Direction | Evidence | Maturity |
|-----------|----------|----------|
| **Input ergonomics** | #2010 (Shift+Enter), #2182 drag-and-drop polish | High friction, low complexity—ready for quick wins |
| **Streaming/automation APIs** | #2179 token deltas, #2180 `/task` web parity | Power-user demand; signals CLI→platform evolution |
| **Third-party tool integration** | #2173 `crow-cli`, #1715 plugin system | Ecosystem growth pressure; monetization tension |
| **MCP robustness** | #2172 OAuth compliance, #2139 structured content | Critical path for agent architecture |

---

## 6. Developer Pain Points

1. **Cross-platform polish gaps.** macOS screenshot workflows and Windows binary metadata both broke in v1.41.0, suggesting CI lacks platform-specific integration tests for "feel" features.

2. **Web/CLI parity drift.** `/task` missing from web UI (#2180) and incremental streaming only partially implemented (#2179) indicate the two interfaces are evolving on separate tracks.

3. **OAuth/MCP interop fragility.** The `client_secret_basic` rejection (#2172) reveals a narrow validator—likely copied from an early draft spec—now blocking real-world server compatibility.

4. **Plugin/integration monetization confusion.** #2173 and #1715 show external developers expect API-key flexibility; the Coding Plan's subscription model creates friction for tool builders.

5. **"Self-service" community velocity.** Four of eight active issues had same-day PRs from reporters (#2174→#2175, #2183→#2182, #2181→#2178)—healthy sign, but also suggests maintainers are reactive rather than preemptive on clear bugs.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-08

## Today's Highlights

OpenCode shipped two rapid-fire patch releases (v1.14.40–v1.14.41) fixing formatter stdout/stderr handling and adding workspace warp with uncommitted changes preservation. Meanwhile, the community is actively wrestling with experimental v2 event system instability—particularly Immer-frozen tool inputs causing `readonly property` crashes—and pushing hard for tokens/second performance metrics and better documentation discoverability via `llms.txt`.

---

## Releases

### [v1.14.41](https://github.com/anomalyco/opencode/releases/tag/v1.14.41)
- **Bugfix**: Restored formatter output handling so formatters writing to stdout/stderr work correctly again ([`@ferdinandyb`](https://github.com/ferdinandyb))
- **Improvement**: Workspace warping now preserves uncommitted file changes when moving sessions between workspaces
- **TUI Bugfix**: Restored custom provider functionality (note truncated in release notes)

### [v1.14.40](https://github.com/anomalyco/opencode/releases/tag/v1.14.40)
- **Improvement**: Added support for `.well-known/opencode` configs that redirect to remote configuration files
- **Bugfixes**: Preserved assistant text when replaying signed reasoning blocks ([`@edevil`](https://github.com/edevil)); consistent not-found errors for missing sessions; CORS header ordering fix for auth flows

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#5374](https://github.com/anomalyco/opencode/issues/5374) | **Show tokens/second** | Core performance visibility gap—essential for provider comparison and latency debugging | 66 👍, 16 comments; long-standing request since Dec 2025, highly upvoted |
| [#8816](https://github.com/anomalyco/opencode/issues/8816) | **Provide `llms.txt` and docs as markdown** | Documentation discoverability for AI-assisted development; aligns with emerging `llms.txt` standard | 26 👍, 13 comments; tooling ecosystem trend |
| [#6257](https://github.com/anomalyco/opencode/issues/6257) | **Easier scrolling in TUI** | Daily UX friction—users want vim-style (`ctrl+e`/`ctrl+y`) incremental scroll instead of mouse dependency | 10 👍, 11 comments; active workaround discussion |
| [#25873](https://github.com/anomalyco/opencode/issues/25873) | **Bash tool: `Attempted to assign to readonly property`** | **Critical v2 event system regression**—blocks all tool calls under `OPENCODE_EXPERIMENTAL=true` | 8 comments, 1 👍; root cause identified (Immer freeze), PR in flight |
| [#13286](https://github.com/anomalyco/opencode/issues/13286) | **Claude Opus 4.5 thinking block modification error** | Closed: Anthropic API strictness on thinking block integrity; multi-turn conversation breaker | 7 👍, 8 comments; fix verified in v1.14.40 |
| [#20902](https://github.com/anomalyco/opencode/issues/20902) | **Bash tool hangs on background child processes** | Common workflow blocker (`npm run build &`, `nohup`)—2-minute timeout default painful | 5 👍, 7 comments; process group handling needed |
| [#25879](https://github.com/anomalyco/opencode/issues/25879) | **`opencode-cli` TUI missing from Debian package** | Packaging regression breaks headless/TUI workflows for Debian users | 2 👍, 7 comments; no release note mention—user confusion |
| [#26198](https://github.com/anomalyco/opencode/issues/26198) | **Terminal flooded with raw mouse escape sequences** | TUI cleanup bug—mouse tracking escape sequences leak to shell on process interruption | 4 comments, 0 👍; highly reproducible, impacts shell usability |
| [#11391](https://github.com/anomalyco/opencode/issues/11391) | **Google Stitch + MCP server integration** | Enterprise integration pattern—MCP adoption growing but vendor-specific guidance sparse | 2 👍, 8 comments; documentation gap |
| [#15059](https://github.com/anomalyco/opencode/issues/15059) | **Multiple system prompts break Qwen3.5 models** | Model-specific compatibility—Qwen strictness reveals architectural assumption | 0 👍, 9 comments; plugin workaround exists, core fix debated |

---

## Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#26255](https://github.com/anomalyco/opencode/pull/26255) | **Databricks Model Serving + AI Gateway provider** | 🟢 Open | Reopens [#7984](https://github.com/anomalyco/opencode/pull/7984) with clean history; adds enterprise Databricks workspace connectivity with auto-discovery across serving + gateway endpoints |
| [#25867](https://github.com/anomalyco/opencode/pull/25867) | **Clone tool input before EventV2 to prevent Immer freeze** | 🟢 Open | Direct fix for [#25873](https://github.com/anomalyco/opencode/issues/25873); addresses v2 event system `readonly property` crash by deep-cloning tool inputs before Immer proxying |
| [#23688](https://github.com/anomalyco/opencode/pull/23688) | **Markdown preview with Mermaid diagram support** | 🟢 Open | Closes [#13704](https://github.com/anomalyco/opencode/issues/13704), [#16782](https://github.com/anomalyco/opencode/issues/16782), [#22079](https://github.com/anomalyco/opencode/issues/22079); adds Mermaid v11.4.1 for diagram rendering in markdown preview |
| [#6138](https://github.com/anomalyco/opencode/pull/6138) | **TUI `session_list_limit` for session picker** | 🟢 Open | Long-running feature for [#20754](https://github.com/anomalyco/opencode/issues/20754); caps non-search session picker at 150 with configurable override—performance + usability win |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) | **Mobile touch optimization** | 🟢 Open | Major platform expansion; preserves desktop experience while adding touch targets, swipe gestures, and responsive layout for tablet/phone usage |
| [#24712](https://github.com/anomalyco/opencode/pull/24712) | **Native LLM core foundation (`packages/llm`)** | 🟢 Open | Architectural milestone: Effect-based typed LLM core with provider adapters, behind `OPENCODE_EXPERIMENTAL_LLM_NATIVE` flag; eventual replacement for current stream bridge |
| [#23557](https://github.com/anomalyco/opencode/pull/23557) | **Interactive split-footer mode for `run`** | 🟢 Open | Closes [#2845](https://github.com/anomalyco/opencode/issues/2845); adds real-time output streaming to `run` command with split-pane footer for long-running tasks |
| [#6130](https://github.com/anomalyco/opencode/pull/6130) | **XML/HTML syntax theme tokens for TUI** | 🟢 Open | Theming extensibility: `syntaxTag`, `syntaxAttribute`, `syntaxTagDelimiter` tokens for better markup language rendering |
| [#25924](https://github.com/anomalyco/opencode/pull/25924) | **Generation completion sentinels** | 🟢 Open | Developer experience improvement: adds `console.info` markers to generation wrappers for clearer success/failure signaling in long or truncated runs |
| [#26254](https://github.com/anomalyco/opencode/pull/26254) | **Pin GitHub Actions to commit SHA** | 🟢 Open | Security hardening: updates actions and pins to immutable commit SHAs instead of floating tags |

**Notable closed PRs**: [#26253](https://github.com/anomalyco/opencode/pull/26253) (silent Windows NSIS per-user install), [#26067](https://github.com/anomalyco/opencode/pull/26067) (revert `effect` to beta.57), [#26066](https://github.com/anomalyco/opencode/pull/26066) (disable minify to prevent JSC errors), [#24909](https://github.com/anomalyco/opencode/issues/24909) fix for Copilot→Bedrock Claude switching.

---

## Feature Request Trends

1. **Performance Observability**: Tokens/second metrics ([#5374](https://github.com/anomalyco/opencode/issues/5374)) dominates as the most-requested enhancement—users need standardized benchmarking across providers.

2. **Documentation as Infrastructure**: `llms.txt` and machine-parseable docs ([#8816](https://github.com/anomalyco/opencode/issues/8816)) reflect the shift toward AI-consumable documentation; also seen in [#21997](https://github.com/anomalyco/opencode/issues/21997) (thinking visible but response hidden—rendering pipeline needs clarity).

3. **TUX/Interaction Polish**: Scroll ergonomics ([#6257](https://github.com/anomalyco/opencode/issues/6257)), session picker limits ([#6138](https://github.com/anomalyco/opencode/pull/6138)), and mobile optimization ([#18767](https://github.com/anomalyco/opencode/pull/18767)) show sustained investment in non-power-user accessibility.

4. **Enterprise Provider Expansion**: Databricks ([#26255](https://github.com/anomalyco/opencode/pull/26255)), Bedrock Claude variants, and MCP ecosystem growth ([#11391](https://github.com/anomalyco/opencode/issues/11391)) indicate B2B deployment scaling.

---

## Developer Pain Points

| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **v2 Event System Instability** | 🔴 Critical | [#25873](https://github.com/anomalyco/opencode/issues/25873), [#25835](https://github.com/anomalyco/opencode/issues/25835), [#26198](https://github.com/anomalyco/opencode/issues/26198), [#26207](https://github.com/anomalyco/opencode/issues/26207) all trace to `OPENCODE_EXPERIMENTAL=true` or Immer/Effect interactions; rapid reverts in [#26066](https://github.com/anomalyco/opencode/pull/26066), [#26067](https://github.com/anomalyco/opencode/pull/26067) show system under stress |
| **Thinking/Reasoning Block Handling** | 🟡 High | [#13286](https://github.com/anomalyco/opencode/issues/13286), [#18254](https://github.com/anomalyco/opencode/issues/18254), [#23926](https://github.com/anomalyco/opencode/issues/23926), [#24909](https://github.com/anomalyco/opencode/issues/24909)—Claude's extended thinking creates fragile multi-turn state; cross-provider switching exacerbates |
| **Bash Tool Process Lifecycle** | 🟡 High | [#25873](https://github.com/anomalyco/opencode/issues/25873) (readonly crash), [#20902](https://github.com/anomalyco/opencode/issues/20902) (background hangs), [#26225](https://github.com/anomalyco/opencode/issues/26225) (build commands stuck)—tool execution layer needs reliability investment |
| **Packaging/Deployment Regressions** | 🟡 Moderate | [#25879](https://github.com/anomalyco/opencode/issues/25879) (Debian `opencode-cli` missing), [#26253](https://github.com/anomalyco/opencode/pull/26253) (Windows installer UX)—release pipeline stability |
| **Subscription/Billing Confusion** | 🟢 Emerging | [#26245](https://github.com/anomalyco/opencode/issues/26245) (monthly token expiry discrepancy)—operational transparency issue |

**Meta-observation**: The experimental flag surface area is becoming a support burden. Multiple critical issues require `OPENCODE_EXPERIMENTAL=true` to reproduce, suggesting the v2 event system and native LLM core need either accelerated stabilization or clearer opt-in boundaries before broader adoption.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-08

## Today's Highlights

The Pi project is executing a major organizational migration from `badlogic/pi-mono` to `earendil-works/pi` with accompanying npm scope changes, prompting two rapid releases (v0.73.1–v0.74.0) with self-update support. Simultaneously, a large batch of issues and PRs were closed under the `closed-because-bigrefactor` label, indicating significant architectural restructuring is underway. The community remains highly active with 45 issues and 17 PRs updated in the last 24 hours alone.

---

## Releases

### [v0.74.0](https://github.com/earendil-works/pi/releases/tag/v0.74.0)
Updated all repository links and package references to reflect the move to `earendil-works/pi-mono` and `@earendil-works/*` package scopes. This is a housekeeping release completing the organizational migration.

### [v0.73.1](https://github.com/earendil-works/pi/releases/tag/v0.73.1)
Added self-update support for the npm scope migration: `pi update --self` now handles the transition from `@mariozechner/pi-coding-agent` to `@earendil-works/pi-coding-agent`, allowing existing global installs to update seamlessly once the new package is published.

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#4228](https://github.com/earendil-works/pi/issues/4228) | **OpenAI completions provider mishandled mixed deltas** — content and tool calls weren't accumulated independently | Critical bug for reliability of streaming responses; affected tool use workflows | 18 comments, resolved via [#4247](https://github.com/earendil-works/pi/pull/4247) |
| [#4208](https://github.com/earendil-works/pi/issues/4208) | **Inline image previews corrupt terminal in cmux/Ghostty** | Kitty graphics protocol fragile in terminal multiplexers; breaks visual workflows | 14 comments, closed as part of big refactor |
| [#3357](https://github.com/earendil-works/pi/issues/3357) | **Official local LLM provider extension** — dynamic model list from `baseUrl/models` | Top-requested feature (23 👍) for Ollama/llama.cpp/LM Studio integration; enables air-gapped and self-hosted workflows | 9 comments, still open — long-running community priority |
| [#3780](https://github.com/earendil-works/pi/issues/3780) | **Duplicate characters on Italian keyboard with Kitty Keyboard Protocol** | Internationalization bug affecting European users; flag 4 of the protocol caused double insertion | 7 comments, fixed |
| [#2451](https://github.com/earendil-works/pi/issues/2451) | **Add support for Cursor's models (Composer 1.5/2)** | Expands provider ecosystem to include Cursor's proprietary models with competitive pricing | 6 comments, closed |
| [#2144](https://github.com/earendil-works/pi/issues/2144) | **Cannot paste images into Pi** — missing clipboard image support vs. Claude Code | Feature parity gap with competing tools; blocks visual debugging workflows | 6 comments, closed |
| [#3254](https://github.com/earendil-works/pi/issues/3254) | **Setting to prevent `/model` from overwriting persistent default** | UX friction — users lose preferred defaults when experimenting with models | 6 comments, resolved |
| [#4210](https://github.com/earendil-works/pi/issues/4210) | **Bedrock converse-stream: empty end_turn treated as successful stop** | Silent failures in AWS Bedrock integration; agent appears to "trail off" | 5 comments, closed in refactor |
| [#4273](https://github.com/earendil-works/pi/issues/4273) | **Incorrect update notice in TUI** — showed 0.74.0 immediately after 0.73.1 update | Confusing UX during migration; indicates version checking logic issues | 4 comments, quickly addressed |
| [#2616](https://github.com/earendil-works/pi/issues/2616) | **SessionManager is sync-only, blocks async/database-backed persistence** | Architectural limitation preventing scalable session storage; affects enterprise deployments | 4 comments, still open — deep technical debt |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#4283](https://github.com/earendil-works/pi/pull/4283) | **Update repo name to `pi`** — fixes CHANGELOG 404 in update notices | Housekeeping for migration | ✅ Merged |
| [#4281](https://github.com/earendil-works/pi/pull/4281) | **Show/hide cursor on terminal focus change** — DECSET 1004 focus reporting | Polished TUX experience; reduces visual clutter when alt-tabbing | ✅ Merged |
| [#4277](https://github.com/earendil-works/pi/pull/4277) | **Add `gpt-5.5-chat-latest` to OpenAI catalog** — new default Instant model | Keeps model catalog current with OpenAI's latest releases | ✅ Merged |
| [#3887](https://github.com/earendil-works/pi/pull/3887) | **Image content API** — mirrors stream API for image blocks/models via Google/OpenRouter | Major feature for multimodal agent output; has working TUI demo | 🔄 Open, in progress |
| [#4264](https://github.com/earendil-works/pi/pull/4264) | **Expose label/execute in ToolInfo, allow tool override via last-write-wins** | Unblocks extension ecosystem interop; fixes `pi-tool-display` + MCP Direct Tools | ✅ Merged |
| [#4261](https://github.com/earendil-works/pi/pull/4261) | **Keep Kitty image redraws inside TUI** — prevents graphics corruption in scroll regions | Fixes rendering bugs with repro extension; robust image protocol handling | ✅ Merged |
| [#3624](https://github.com/earendil-works/pi/pull/3624) | **Add Together AI as native provider** — OpenAI-compatible API, tool-capable models | Expands provider diversity; community-driven addition | 🔄 Open |
| [#4247](https://github.com/earendil-works/pi/pull/4247) | **Handle mixed chat completion deltas** — separate accumulators for reasoning/content/tool_calls | Fixes [#4228](https://github.com/earendil-works/pi/issues/4228); critical streaming reliability | ✅ Merged |
| [#4259](https://github.com/earendil-works/pi/pull/4259) | **Complete rollback architecture with 1300+ tests** — FileSnapshotManager in AgentSession | Major infrastructure for undo/safety; 10 core test cases passing | ✅ Merged |
| [#4255](https://github.com/earendil-works/pi/pull/4255) + [#4242](https://github.com/earendil-works/pi/pull/4242) | **Extension loading performance** — shared jiti instance + parallel `Promise.all` loading | 1100ms → ~300ms startup with 64 extensions; significant DX improvement | ✅ Both merged |

---

## Feature Request Trends

1. **Native multimodal support** — Image input/output APIs, PDF/document handling ([#3887](https://github.com/earendil-works/pi/pull/3887), [#4287](https://github.com/earendil-works/pi/issues/4287), [#2144](https://github.com/earendil-works/pi/issues/2144)) — driven by parity with Claude Code and native provider APIs

2. **Local/self-hosted LLM integration** — Dynamic model discovery from `baseUrl/models` ([#3357](https://github.com/earendil-works/pi/issues/3357)) remains the highest-voted open issue; Ollama/llama.cpp/LM Studio support is a persistent community priority

3. **Expanded provider coverage** — Together AI ([#3624](https://github.com/earendil-works/pi/pull/3624)), Cursor models ([#2451](https://github.com/earendil-works/pi/issues/2451)), and rapid OpenAI catalog updates ([#4277](https://github.com/earendil-works/pi/pull/4277), [#4275](https://github.com/earendil-works/pi/issues/4275)) show demand for broad model access

4. **Configuration persistence & UX** — Settings to prevent model switches from overwriting defaults ([#3254](https://github.com/earendil-works/pi/issues/3254)), git-ignored file inclusion in autocomplete ([#4200](https://github.com/earendil-works/pi/issues/4200))

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Migration friction** | Multiple issues around npm scope change, stale bin shims, broken CHANGELOG links ([#4284](https://github.com/earendil-works/pi/issues/4284), [#4280](https://github.com/earendil-works/pi/issues/4280), [#4288](https://github.com/earendil-works/pi/issues/4288)) | High — actively breaking updates |
| **Terminal compatibility matrix** | Kitty protocol issues across Italian keyboards ([#3780](https://github.com/earendil-works/pi/issues/3780)), Chinese IME ([#4253](https://github.com/earendil-works/pi/issues/4253)/[#4252](https://github.com/earendil-works/pi/pull/4252)), cmux/Ghostty images ([#4208](https://github.com/earendil-works/pi/issues/4208)), Warp background bleeding ([#4270](https://github.com/earendil-works/pi/issues/4270)) | High — affects international users, multiple terminal emulators |
| **Extension loading performance** | 1100ms startup with 64 extensions was reported as dominant cost; now addressed but indicates scaling concern | Medium — mitigated in v0.74.x |
| **Sync I/O blocking async architectures** | SessionManager's synchronous file operations prevent database-backed persistence ([#2616](https://github.com/earendil-works/pi/issues/2616)) | Medium — architectural debt for enterprise use |
| **Provider-specific edge cases** | Bedrock empty responses ([#4210](https://github.com/earendil-works/pi/issues/4210)), Azure `store:false` with reasoning ([#4256](https://github.com/earendil-works/pi/pull/4256)), mixed deltas ([#4228](https://github.com/earendil-works/pi/issues/4228)) | Medium — cloud provider reliability |
| **"Big refactor" batch closures** | ~15 issues/PRs closed with `closed-because-bigrefactor` label; may indicate pending re-land or deprioritization | Unclear — community visibility needed on what's being rebuilt |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-08

## Today's Highlights

Qwen Code shipped **v0.15.8** with a critical fix for symlinked skills that regressed in v0.15.5, alongside a major push on **remote-control infrastructure** (3 stacked PRs) enabling headless/IDE integration scenarios. The team also landed **FileReadCache optimizations** to short-circuit redundant file reads, improving performance on large codebases.

---

## Releases

| Version | Key Changes |
|---------|-------------|
| **[v0.15.8](https://github.com/QwenLM/qwen-code/pull/3907)** | Fix for symlinked skills pointing outside skills dir; test alignment for tool-control E2E with prior-read enforcement |
| **[v0.15.7](https://github.com/QwenLM/qwen-code/pull/3766)** | `FileReadCache` with short-circuit for unchanged reads (perf win); CLI proxy setting now honored |

*v0.15.7-preview.1/2 and nightly builds carried the same v0.15.7 changes.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#3901](https://github.com/QwenLM/qwen-code/issues/3901) | TUI multi-line paste triggers auto-submission | Breaks workflow for anyone pasting code blocks/logs; **CLOSED** quickly — shows responsive triage | 5 comments, macOS CLI scope |
| [#3881](https://github.com/QwenLM/qwen-code/issues/3881) | Local qwen3.6-27b spews `/` until token limit | Critical model compatibility bug affecting self-hosted users; no workaround stated | 5 comments, Chinese community report |
| [#3877](https://github.com/QwenLM/qwen-code/issues/3877) | `.env` `OPENCODE_GO_API_KEY` ignored at startup | Auth DX friction — users expect dotenv loading before interactive prompt | 3 comments |
| [#3925](https://github.com/QwenLM/qwen-code/issues/3925) | Monitor tool notifications misrouted to parent agent | Breaks sub-agent observability; directly addressed by PR #3933 | 1 comment, filed by contributor with fix |
| [#3899](https://github.com/QwenLM/qwen-code/issues/3899) | Ctrl+O freeze in long conversations | Stability regression in compact/verbose toggle; affects power users | 0 comments, fresh report |
| [#3914](https://github.com/QwenLM/qwen-code/issues/3914) | "API connected" then `fetch failed` | Proxy/network edge case in v0.15.7; needs repro | 1 comment |
| [#3888](https://github.com/QwenLM/qwen-code/issues/3888) | Model stream ends without finish reason | Alibaba internal endpoint specific; streaming reliability gap | 1 comment |
| [#3829](https://github.com/QwenLM/qwen-code/issues/3829) | Wayland image paste broken | Linux desktop parity gap; `wl-clipboard` present but not working | 2 comments, CachyOS |
| [#3936](https://github.com/QwenLM/qwen-code/issues/3936) | Russian text rendering broken (`����`) | Encoding/i18n regression; affects Cyrillic users | 1 comment, screenshot attached |
| [#3895](https://github.com/QwenLM/qwen-code/issues/3895) | MCP health pill stale after `/mcp` disable | UI state management bug; footer doesn't reflect intentional disable | 1 comment |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-----------|--------|
| [#3937](https://github.com/QwenLM/qwen-code/pull/3937) | MCP add/remove persistence fix | Headers now save; deletions actually delete (was merge-only) | 🔵 Open |
| [#3933](https://github.com/QwenLM/qwen-code/pull/3933) | Monitor notifications routed to owning agent | Fixes sub-agent pollution; covers foreground/background/fork/resume | 🔵 Open |
| [#3864](https://github.com/QwenLM/qwen-code/pull/3864) | Provider-first auth registry | Unifies API key/OAuth/plan flows into single pipeline; major DX refactor | 🔵 Open |
| [#3932](https://github.com/QwenLM/qwen-code/pull/3932) | Accept partial reads in prior-read enforcement | Unblocks large-file in-place edits; relaxes over-constraint from #3774 | 🔵 Open |
| [#3935](https://github.com/QwenLM/qwen-code/pull/3935) | `/commit` slash command | Stages all + commits with message; auto co-author attribution | 🔵 Open |
| [#3929-3931](https://github.com/QwenLM/qwen-code/pull/3929) | **Remote-control stack** (3 PRs) | Foundation → Worker server → TUI attachment; enables headless/IDE integration | 🔵 Open stack |
| [#3896](https://github.com/QwenLM/qwen-code/pull/3896) | Normalize cumulative OpenAI deltas | Fixes DashScope/百炼 double-concatenation bug | 🔵 Open |
| [#3934](https://github.com/QwenLM/qwen-code/pull/3934) | Sanitize Mistral reasoning content | Removes `reasoning_content` from assistant messages pre-call; fixes #3304 | 🔵 Open |
| [#3847](https://github.com/QwenLM/qwen-code/pull/3847) | OTel traceId/spanId in debug logs | Correlates `~/.qwen/debug/*.txt` with SLS/observability backends | 🔵 Open |
| [#3827](https://github.com/QwenLM/qwen-code/pull/3827) | Unified retry delay policy | Exponential backoff + jitter + Retry-After parsing; consolidates scattered logic | 🔵 Open |

---

## Feature Request Trends

1. **Sub-agent observability** — Multiple requests (#3758, #3924, #3925) for richer sub-agent status: TODO lists, full thought streams, proper monitor routing. The team is actively landing Phase C from #3634.

2. **IDE/editor integration** — JetBrains ACP (#3511), Zed ACP slash commands (#3837), and the remote-control stack (#3929-3931) show push toward headless/server modes.

3. **Export/UX polish** — HTML export theming (#3678, **CLOSED**), banner customization (#3005, **CLOSED**), shell command expandability (#3139).

4. **Telemetry/observability** — OpenTelemetry spans (#3917), Phoenix visualization, trace-to-log correlation (#3847) emerging as enterprise requirement.

5. **Token efficiency** — RTK plugin request (#2880) for context compression; aligns with cost-conscious local deployment users.

---

## Developer Pain Points

| Theme | Frequency | Evidence |
|-------|-----------|----------|
| **Local model compatibility** | 🔴 High | #3881 (qwen3.6-27b `/` spam), #3595 (35B-A3B vision not recognized), #3888 (stream finish reason) — self-hosted path needs hardened model negotiation |
| **Auth/startup friction** | 🟡 Medium | #3877 (`.env` ignored), #3914 (connected-then-failed), #3864 (unified auth in progress) |
| **TUI stability & input** | 🟡 Medium | #3901 (paste), #3899 (Ctrl+O freeze), #3926 (missing text editing keys), #3936 (encoding) — terminal UX still rough |
| **Linux desktop parity** | 🟡 Medium | #3829 (Wayland paste), #3823 (SDK upgrade crash) |
| **MCP state management** | 🟢 Emerging | #3895 (stale health pill), #3937 (persistence bugs) |

---

*Digest compiled from github.com/QwenLM/qwen-code activity 2026-05-07 to 2026-05-08.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-05-08

---

## 1. Today's Highlights

The project shipped three rapid-fire patch releases (v0.8.15–v0.8.17) with critical fixes for custom OpenAI-compatible providers, NVIDIA NIM integration, and plan mode reliability. Community activity surged to 50+ issues and PRs in 24 hours, with heavy focus on Chinese localization, workspace management, and cost control features. The maintainer (@Hmbown) is actively merging PRs and preparing v0.8.18 follow-up.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v0.8.17** | Fixed plan mode not presenting plans before file changes ([#1077](https://github.com/Hmbown/DeepSeek-TUI/issues/1077)); resolved slash menu only showing project-local skills when `.agents/skills` exists ([#1068](https://github.com/Hmbown/DeepSeek-TUI/issues/1068)) |
| **v0.8.16** | Added `deepseek serve --acp` (Agent Client Protocol) for editor integration ([#782](https://github.com/Hmbown/DeepSeek-TUI/issues/782)); introduced nightly builds with commit-based versioning |
| **v0.8.15** | Foundation for custom provider support; continued iteration on provider whitelist removal |

> **Install:** `npm install -g deepseek-tui` or `cargo install deepseek-tui-cli deepseek-tui --locked`

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#743](https://github.com/Hmbown/DeepSeek-TUI/issues/743) | **Token consumption exploded to 400M in half a day** | Cost control emergency—users reporting massive token burn from overly verbose context handling | 11 comments, urgent tone; needs immediate investigation |
| [#932](https://github.com/Hmbown/DeepSeek-TUI/issues/932) | **CNY (¥) currency display support** | Closed—Chinese users need native currency for cost transparency | 8 comments, resolved quickly |
| [#759](https://github.com/Hmbown/DeepSeek-TUI/issues/759) | **First-time init fails: no API key guidance, broken arrow keys** | Critical onboarding friction; losing new users at first contact | 8 comments, confirmed by multiple reporters |
| [#978](https://github.com/Hmbown/DeepSeek-TUI/issues/978) | **Request for Chinese WeChat community group** | Signals strong Chinese user base seeking localized support | 8 comments, +1 from community; maintainer engagement requested |
| [#1092](https://github.com/Hmbown/DeepSeek-TUI/issues/1092) | **ACP: Expose tool calls via `serve --acp`** | Blocks full editor integration—Zed and others need tool access, not just chat | 7 comments, architectural discussion |
| [#1081](https://github.com/Hmbown/DeepSeek-TUI/issues/1081) | **NVIDIA NIM provider broken** | Closed—enterprise/self-hosted users blocked; required config format fixes | 6 comments, resolved in v0.8.17 |
| [#1010](https://github.com/Hmbown/DeepSeek-TUI/issues/1010) | **No workspace switch command** | Power user workflow blocker; PR already in flight ([#1065](https://github.com/Hmbown/DeepSeek-TUI/pull/1065)) | 5 comments, +1; active development |
| [#936](https://github.com/Hmbown/DeepSeek-TUI/issues/936) | **Add light theme** | Accessibility/readability demand; dark-only UI causes eye strain | 5 comments; related to [#1070](https://github.com/Hmbown/DeepSeek-TUI/issues/1070), [#862](https://github.com/Hmbown/DeepSeek-TUI/issues/862) |
| [#861](https://github.com/Hmbown/DeepSeek-TUI/issues/861) | **"Thinking collapse"—reasoning blocks freeze, truncate, or disappear** | Core UX bug undermining trust in model reasoning display | 4 comments; complex multi-root-cause investigation |
| [#923](https://github.com/Hmbown/DeepSeek-TUI/issues/923) | **v0.8.14 application crash** | Stability concern with screenshot evidence; regression risk | 4 comments; needs reproduction |

---

## 4. Key PR Progress

| # | PR | Status | Feature/Fix |
|---|-----|--------|-------------|
| [#1099](https://github.com/Hmbown/DeepSeek-TUI/pull/1099) | `/dryrun` request preview | **Open** | Preview full chat completion payload without sending—directly addresses [#1004](https://github.com/Hmbown/DeepSeek-TUI/issues/1004) cost anxiety |
| [#1098](https://github.com/Hmbown/DeepSeek-TUI/pull/1098) | Pre-computed tool output summaries | **Open** | Performance optimization inspired by Claude Code; reduces TUI frame re-parsing |
| [#1065](https://github.com/Hmbown/DeepSeek-TUI/pull/1065) | Workspace switch command | **Open** | Implements `/workspace` management for [#1010](https://github.com/Hmbown/DeepSeek-TUI/issues/1010); tests passing |
| [#1076](https://github.com/Hmbown/DeepSeek-TUI/pull/1076) | Draggable transcript scrollbar | **Open** | Mouse-capture drag support for long session navigation |
| [#1091](https://github.com/Hmbown/DeepSeek-TUI/pull/1091) | Chinese localization for approval dialogs | **Open** | Destructive operation safety copy in zh-Hans; critical for Chinese enterprise adoption |
| [#1086](https://github.com/Hmbown/DeepSeek-TUI/pull/1086) | Session budget controls | **Open** | Soft/hard caps, daily USD persistence, `/budget` commands—direct response to [#743](https://github.com/Hmbown/DeepSeek-TUI/issues/743) token burn |
| [#1022](https://github.com/Hmbown/DeepSeek-TUI/pull/1022) | VS Code extension scaffold | **Open** | First step toward [#875](https://github.com/Hmbown/DeepSeek-TUI/issues/875); TypeScript extension manifest |
| [#1059](https://github.com/Hmbown/DeepSeek-TUI/pull/1059) | Non-blocking npm postinstall | **Open** | Fixes air-gapped install failures; optional download with first-run recovery |
| [#1074](https://github.com/Hmbown/DeepSeek-TUI/pull/1074) | Capacity-memory checkpoint fix | **Closed** | Cross-session state recovery for memory system; merged |
| [#1094](https://github.com/Hmbown/DeepSeek-TUI/pull/1094) | v0.8.18 preparation | **Open** | Maintainer rollup: version bumps, changelog, npm alignment, safe follow-ups |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Cost visibility & control** | [#743](https://github.com/Hmbown/DeepSeek-TUI/issues/743), [#932](https://github.com/Hmbown/DeepSeek-TUI/issues/932), [#1004](https://github.com/Hmbown/DeepSeek-TUI/issues/1004), [#1086](https://github.com/Hmbown/DeepSeek-TUI/pull/1086) | 🔥 High—PR in flight for budget caps |
| **Chinese localization (i18n)** | [#978](https://github.com/Hmbown/DeepSeek-TUI/issues/978), [#1087](https://github.com/Hmbown/DeepSeek-TUI/issues/1087), [#1091](https://github.com/Hmbown/DeepSeek-TUI/pull/1091), [#998](https://github.com/Hmbown/DeepSeek-TUI/issues/998) | 🔥 High—active PR for approval dialogs |
| **Theme/UI customization** | [#936](https://github.com/Hmbown/DeepSeek-TUI/issues/936), [#862](https://github.com/Hmbown/DeepSeek-TUI/issues/862), [#1070](https://github.com/Hmbown/DeepSeek-TUI/issues/1070) | Medium—multiple requests, no PR yet |
| **Workspace/project isolation** | [#1010](https://github.com/Hmbown/DeepSeek-TUI/issues/1010), [#616](https://github.com/Hmbown/DeepSeek-TUI/pull/616) | Medium—PR open for switch command, memory dedup |
| **Editor/IDE integration** | [#875](https://github.com/Hmbown/DeepSeek-TUI/issues/875), [#1092](https://github.com/Hmbown/DeepSeek-TUI/issues/1092), [#1022](https://github.com/Hmbown/DeepSeek-TUI/pull/1022) | Growing—ACP server landed, VS Code scaffold started |
| **Dry-run / request inspection** | [#1004](https://github.com/Hmbown/DeepSeek-TUI/issues/1004), [#1099](https://github.com/Hmbown/DeepSeek-TUI/pull/1099) | High—PR open, developer tooling priority |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Current Response |
|------------|-----------|--------|----------------|
| **Uncontrolled token/cost burn** | 🔴 Critical | Financial surprise, production risk | Budget controls PR ([#1086](https://github.com/Hmbown/DeepSeek-TUI/pull/1086)); `/dryrun` preview ([#1099](https://github.com/Hmbown/DeepSeek-TUI/pull/1099)) |
| **First-run onboarding failures** | 🔴 High | User churn before value realization | [#759](https://github.com/Hmbown/DeepSeek-TUI/issues/759) open; needs config wizard fix |
| **glibc compatibility (Linux deployment)** | 🟡 Medium | Server/CI environments blocked | [#1067](https://github.com/Hmbown/DeepSeek-TUI/issues/1067)—Ubuntu 22.04 LTS (glibc 2.35) unsupported |
| **Network/proxy incompatibility** | 🟡 Medium | Corporate/air-gapped users excluded | [#1071](https://github.com/Hmbown/DeepSeek-TUI/issues/1071) fakeip/DNS; [#1051](https://github.com/Hmbown/DeepSeek-TUI/issues/1051) npm offline; PRs in flight |
| **TUI rendering glitches** | 🟡 Medium | Thinking collapse, viewport drift, truncated output | [#861](https://github.com/Hmbown/DeepSeek-TUI/issues/861), [#1085](https://github.com/Hmbown/DeepSeek-TUI/issues/1085), [#864](https://github.com/Hmbown/DeepSeek-TUI/issues/864)—complex, multi-cause |
| **Theme accessibility** | 🟢 Growing | Eye strain, readability complaints | Light theme requested; no maintainer commitment yet |

---

*Digest compiled from 50 issues and 50 PRs active in the last 24 hours. Project: [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*