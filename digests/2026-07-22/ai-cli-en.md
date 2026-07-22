# AI CLI Tools Community Digest 2026-07-22

> Generated: 2026-07-22 01:26 UTC | Tools covered: 10

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

Here is the cross-tool comparison report based on the provided community digest summaries.

---

### AI CLI Tools Ecosystem: Cross-Tool Comparison Report
**Date:** 2026-07-22

#### 1. Ecosystem Overview

The AI CLI tools landscape is experiencing a period of intense competition and maturation, driven by rapid release cycles and escalating user expectations for agentic reliability. While major players like Claude Code ship daily patches and feature releases (e.g., emoji autocomplete), the community's primary pain points have shifted from basic functionality to systemic issues like model entitlement, sub-agent orchestration, and long-running session durability. A clear divergence is emerging between established tools focused on enterprise stability and newer entrants (e.g., Gemini CLI, DeepSeek TUI) prioritizing rapid feature expansion, often at the cost of cross-platform stability. The week's data reveals a universal struggle with agent trust, context management, and the fragility of plugin/hook infrastructure across the entire ecosystem.

#### 2. Activity Comparison

| Tool | Hot Issues (Top 10) | Key PRs (24h) | Release Status |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 (Notable: #79337 Fable 5, #79989 1M-context) | 10 | **Shipped** v2.1.217 (Jul 22) |
| **OpenAI Codex** | 10 (Notable: #28058 MultiAgent audit, #34260 Windows storms) | 10 | **Shipped** rust-v0.145.0 (stable) |
| **Gemini CLI** | 10 (Notable: #5938 Offline models, #22323 Subagent false success) | 10 | **No Release** (Idle) |
| **GitHub Copilot CLI**| 10 (Notable: #4188 Plan-mode regression, #1305 MCP OAuth) | 1 | **Shipped** v1.0.74-0 (Jul 22) |
| **Kimi Code CLI** | 10 (Notable: #2527 K2.5 broken, #2474 UI shaking) | 10 (Hypothetical) | **No Release** (Stabilizing) |
| **OpenCode** | 10 (Notable: #20695 Memory, #37012 Layout revert) | 10 | **No Release** (Idle) |
| **Pi** | 10 (Notable: #6915 Crash, #6911 Retry sleep) | 10 | **Shipped** v0.81.1 (Jul 22) |
| **Qwen Code** | 10 (Notable: #7156 Model mutation, #7332 Thinking conflict) | 10 | **Shipped** v0.20.1 (stable) |
| **DeepSeek TUI** | 10 (Notable: #4032 Constitution, #4674 Worktree isolation) | 10 | **Pre-release** (v0.9.1 freeze) |
| **Grok Build** | No Activity | No Activity | **No Activity** |

#### 3. Shared Feature Directions

The following feature requirements are appearing across multiple tool communities, indicating broad market demand:

- **Robust Sub-Agent Lifecycle Management**
  - **Tools:** Qwen Code (#5540), DeepSeek TUI (#2889), Gemini CLI (#22323, #21409), Copilot CLI (#2193)
  - **Need:** Resuming completed/paused background sub-agents, full lifecycle visibility, and preventing false success reports.

- **Secure Credential & Configuration Handling**
  - **Tools:** Claude Code (#79360 - token-based auth), Copilot CLI (#1305 - OAuth refresh), Pi (#6923 - hide env vars), Gemini CLI (#28472 - auth fallback)
  - **Need:** Silent token refresh, policy-controlled credential exposure, and reliable authentication fallback in CI/CD.

- **Deterministic & Predictable Agent Behavior**
  - **Tools:** DeepSeek TUI (#4032 - ignoring user scripts), Gemini CLI (#22672 - destructive commands), Pi (#3855 - repeated token error)
  - **Need:** Agents must strictly follow user-provided scripts/configs and avoid unpredictable, destructive, or "lying" behavior.

- **Cross-Session Context & Persistence**
  - **Tools:** Claude Code (#79989 - 1M-context sessions), Qwen Code (#7302 - `@session` references), Pi (#6909 - stable session IDs)
  - **Need:** Reliable long-context sessions, ability to reference past sessions, and durable session replay mechanisms.

- **Managed OAuth & Provider Integration**
  - **Tools:** OpenCode (#38095 - SaaS connectors), Pi (#6927 - OpenRouter OAuth), Copilot CLI (#1305), Gemini CLI (#5938 - offline models)
  - **Need:** First-class support for third-party providers, OAuth flows, and on-premises model hosting.

#### 4. Differentiation Analysis

- **Claude Code & Pi** are differentiating on **session durability and state management**, investing heavily in solving large-context problems (1M tokens) and ensuring crash-resilient sessions (Pi's hotfix for `streamFunction`).
- **OpenAI Codex** is focusing on **Windows platform parity** and **rich sub-agent orchestration**, though its Windows stability (process storms, Crashpad leaks) is a significant negative differentiator.
- **Gemini CLI & DeepSeek TUI** are taking a **feature-first, stability-second** approach, pushing rapid innovation in sub-agent tooling (DeepSeek's runtime reform) and security (Gemini's CVE patches) but suffering from core reliability issues like agent hangs.
- **GitHub Copilot CLI** is differentiating via deep **GitHub/MCP ecosystem integration**, but its slow PR velocity (1 PR in 24h) and "plan-mode regression" suggest a more conservative, potentially less agile development cycle than competitors.
- **Kimi Code CLI & Qwen Code** are distinguished by their **model-specific feature sets** (e.g., Qwen's thinking-mode models), but they are also the most vulnerable to model-API breaking changes, as seen in Kimi's K2.5 "Tool not found" crisis.

#### 5. Community Momentum & Maturity

- **Highest Momentum (Rapid Iteration):** **DeepSeek TUI** shows the fastest iteration velocity with over 20 blockers closed and a major integration PR in 24 hours, followed by **Pi** and **Qwen Code**, both of which shipped critical hotfixes and feature releases today.

- **Most Mature (Stable & Vocal Community):** **Claude Code** and **OpenAI Codex** have the most vocal and high-volume communities, as evidenced by the depth of issue comments (#79337: 26 comments) and upvotes (#28058: 99 👍). Their pain points are more about **enterprise-grade reliability** (entitlement checks, system stability) rather than basic functionality.

- **Struggling with Growth:** **Gemini CLI** and **OpenCode** are showing signs of community friction from rapid growth (e.g., Gemini's "bot-triaged" P3 issues, OpenCode's 119-comment memory megathread). **GitHub Copilot CLI** appears to be in a consolidation phase post-release, with minimal PR activity.

- **Inactive:** **Grok Build** had zero activity in the last 24 hours, signaling either a dormant project or a development freeze.

#### 6. Trend Signals

- **The "Context Window Fragility" Ceiling:** The ecosystem is hitting a hard wall with LLM context windows. Claude Code's unrecoverable 1M-context sessions (#79989) and Copilot CLI's CAPI body limit failures (#4183) signal that tooling is outgrowing the current prompt-cache and API limit models. This is a call for new architectural patterns (e.g., Pi's compaction retry policy, Qwen's lazy loading).

- **From "Model War" to "Agent Trust" War:** The conversation is shifting from *which model is best* to *how do I trust my agent*. DeepSeek TUI's top issue (#4032) about the agent "ignoring the constitution" and Gemini CLI's "false success" reporting (#22323) indicate that the most critical battle is now for **deterministic, bounded, and auditable agent behavior**.

- **The "Windows Tax" is Real:** AI CLI tools, predominantly built on Node.js/Python and Unix-centric paradigms, are paying a significant "tax" on Windows. OpenAI Codex (freezes, HID hangs, process storms) and Claude Code (MSIX update locks) both show that cross-platform support remains a **primary source of developer pain** and a key competitive weakness.

- **Plugin/Hook Maturity Chasm:** The sheer volume of PRs fixing silent failures in plugin/hook infrastructure (Claude Code’s #79645, #79644, #79636; Pi's #6909) reveals a **maturity chasm**. While core agent capabilities are advancing rapidly, the integration layers (hooks, MCP, plugins) are fragile and require significant developer attention to harden for production use.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-07-22** | Source: github.com/anthropics/skills

---

## 1. Top Skills Ranking

The following pull requests have attracted the most community discussion and attention:

**#1: `skill-creator` — run_eval.py Recall Bug (#1298)**  
*Open | 50+ comments (top overall)* | [View PR](https://github.com/anthropics/skills/pull/1298)  
A critical fix for the skill creation toolchain: `run_eval.py` has been reporting `recall=0%` for every skill description, rendering the description-optimization loop (`run_loop.py`, `improve_description.py`) effectively useless. Discussion centers on Windows subprocess stream handling, trigger detection, and parallel worker fixes. This PR addresses a blocker affecting all skill authors.

**#2: document-typography Skill (#514)**  
*Open | Active discussion* | [View PR](https://github.com/anthropics/skills/pull/514)  
A new skill targeting typographic quality control for AI-generated documents: orphan word wrap (1–6 words on a new line), widow paragraphs (stranded section headers), and numbering misalignment. Contributors debate whether these rules should default on or be opt-in, given Claude's variable output behavior.

**#3: ODT Skill — OpenDocument Text Creation (#486)**  
*Open | Active discussion* | [View PR](https://github.com/anthropics/skills/pull/486)  
Adds support for `.odt`, `.ods`, `.odf` file handling—creating, filling, reading, and converting OpenDocument files to HTML. Discussion highlights the skill's trigger surface (mentions of "LibreOffice," "OpenDocument," "open-source documents") and overlap with existing PDF skills.

**#4: fix(pdf) — Case-Sensitive File References (#538)**  
*Open | Sustained comments* | [View PR](https://github.com/anthropics/skills/pull/538)  
Resolves 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` where `REFERENCE.md` and `FORMS.md` were referenced in uppercase but stored in lowercase on disk. This breaks on case-sensitive filesystems (Linux, macOS). Discussion surfaces broader filesystem portability concerns across the skills repository.

**#5: skill-quality-analyzer + skill-security-analyzer (#83)**  
*Open | Long-running discussion* | [View PR](https://github.com/anthropics/skills/pull/83)  
Two meta-skills for evaluating and securing other skills: quality analysis (structure, documentation, examples, coverage) and security (trust boundary scanning, dependency checks). Discussion centers on whether these belong in the official repository vs. a community marketplace.

**#6: frontend-design Skill — Clarity and Actionability (#210)**  
*Open | Ongoing refinement* | [View PR](https://github.com/anthropics/skills/pull/210)  
Revises the frontend-design skill to ensure every instruction is actionable within a single conversation, with specific guidance that steers Claude behavior without over-constraining output. The community debates the trade-off between specificity and flexibility.

**#7: Add pyxel Skill — Retro Game Development (#525)**  
*Open | Steady engagement* | [View PR](https://github.com/anthropics/skills/pull/525)  
A new skill integrating [pyxel-mcp](https://github.com/kitao/pyxel-mcp) with Claude Code for retro game creation (write → run_and_capture → inspect → iterate). Author @kitao is the original Pyxel creator, lending strong credibility. Discussion focuses on MCP integration patterns.

**#8: Add color-expert Skill (#1302)**  
*Open | Recently active* | [View PR](https://github.com/anthropics/skills/pull/1302)  
A self-contained color expertise skill covering naming systems (ISCC-NBS, Munsell, XKCD, RAL, Ridgway), color spaces (OKLCH, OKLAB, CAM16), and practical color workflow guidance. Highly specialized but uniquely authoritative.

---

## 2. Community Demand Trends

The following issues reveal the most-anticipated new Skill directions:

**🔒 Security & Trust Boundaries (#492)** — **43 comments (most active issue)**  
*Open* | [View Issue](https://github.com/anthropics/skills/issues/492)  
The dominant community concern: community-contributed skills are distributed under the `anthropic/` namespace, creating a trust boundary vulnerability where users may grant elevated permissions to skills they believe are official. Demand is high for a security audit skill, namespace separation, and a formal verification pipeline for community submissions.

**📁 Organization Skill Sharing (#228)** — **14 comments**  
*Open* | [View Issue](https://github.com/anthropics/skills/issues/228)  
Users want org-wide skill sharing in Claude.ai. Current workflow requires manually downloading `.skill` files and sharing via Slack/Teams. Demand: a shared skill library or direct sharing link within organizations.

**🧠 Agent Governance & Safety (#412)** — **6 comments**  
*Open (closed after sufficient discussion)* | [View Issue](https://github.com/anthropics/skills/issues/412)  
A proposal for governance patterns: policy enforcement, threat detection, trust scoring, and audit trails for AI agent systems. The community sees this as a critical gap—the collection covers creative, technical, and enterprise workflows, but nothing for agent safety patterns.

**💾 Compact Memory for Long-Running Agents (#1329)** — **9 comments**  
*Open* | [View Issue](https://github.com/anthropics/skills/issues/1329)  
A proposal for symbolic notation to represent agent state compactly, reducing context consumption. Long-running agents spend significant context on notes and persistent memory written in prose; a compact encoding would improve efficiency.

**🔗 Skills as MCPs (#16)** — **4 comments (early but recurring)**  
*Open* | [View Issue](https://github.com/anthropics/skills/issues/16)  
A persistent request: expose Skills as MCP (Model Context Protocol) interfaces, so algorithmic-art, PDF generation, and other skills become callable APIs. This would enable composable skill pipelines.

**🪟 Windows Compatibility (#1061)** — **3 comments**  
*Open* | [View Issue](https://github.com/anthropics/skills/issues/1061)  
Running `run_loop.py`/`run_eval.py` on native Windows hits three Unix-first blockers: `PATHEXT` handling for `claude.cmd`, `cp1252` encoding defaults, and missing `select` on pipes. The community is increasingly Windows-based.

---

## 3. High-Potential Pending Skills

These PRs have active discussion and may land soon:

| PR | Skill | Author | Highlights |
|---|---|---|---|
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** (v1.3.0) | YuhaoLin2005 | Mechanical file verification + four-dimension reasoning quality gate. Universal across projects and models. |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | 4444J99 | Comprehensive testing trophy model, AAA pattern, React Testing Library, mocking strategies. |
| [#181](https://github.com/anthropics/skills/pull/181) | **SAP-RPT-1-OSS predictor** | amitlals | Tabular foundation model for SAP business data predictive analytics. Apache 2.0 licensed. |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | PGTBoos | Typographic quality control for generated documents (orphans, widows, numbering). |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | meodai | Color naming systems, spaces, workflows. Self-contained expertise for color tasks. |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel (retro games)** | kitao | Pyxel retro game engine + MCP integration. Strong author credibility. |

**Notable**: Three fix PRs ([#1298](https://github.com/anthropics/skills/pull/1298), [#1323](https://github.com/anthropics/skills/pull/1323), [#1099](https://github.com/anthropics/skills/pull/1099)) all target the same root cause—`run_eval.py` recall=0% on Windows—suggesting a consolidated fix may merge soon.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for a secure, cross-platform quality-assurance toolchain for skill development, with strong secondary demand for safety governance, compact agent memory, and composable MCP interfaces.**

The data reveals a maturing ecosystem: initial excitement about creative skills (document-typography, pyxel, color-expert) coexists with urgent infrastructure needs (the `run_eval.py` recall crisis, Windows compatibility, trust boundary security). The community is shifting from "what skills can I make?" to "how do I build, test, and trust skills reliably?"—a healthy signal of ecosystem growth.

---

# Claude Code Community Digest — 2026-07-22

## Today's Highlights

The biggest story this week is **Fable 5 access confusion**: a significant bug (#79337, 26 comments) prevents Max plan subscribers from using the new flagship model, silently downgrading sessions to Opus 4.8. A related auth-scoped variant (#79360) reveals deeper entitlement-reading issues for token-based authentication. Meanwhile, v2.1.217 shipped with emoji autocomplete and improved failure warnings, and a critical cluster of reports around **1M-context sessions becoming permanently unrecoverable** (#74544, #79989) is drawing attention as a systemic reliability concern.

---

## Releases

**v2.1.217** — Released 2026-07-22
- **Emoji shortcode autocomplete** in prompt input: type `:heart:` to insert ❤️, `:hea` for suggestions. Disable via `emojiCompletionEnabled` setting.
- **Improved failure warnings**: alerts now surface when transcript writes fail (e.g. disk full) or when session saving is disabled due to inheritance issues.

---

## Hot Issues

1. **[#79337 — Fable 5 gated behind 'usage credits required' on Max plan](https://github.com/anthropics/claude-code/issues/79337)**  
   🔥 26 comments · 9 👍 · *bug, platform:macos, area:auth/cost/model*  
   On July 20—the day Fable 5 became standard on Max—users on Max plans are prompted for usage credits and silently downgraded to Opus 4.8. High community frustration; this is the top signal that entitlement checking is broken for the new model tier.

2. **[#45810 — Marketplace Update button disabled even when outdated](https://github.com/anthropics/claude-code/issues/45810)**  
   💬 15 comments · 6 👍 · *bug, area:plugins*  
   Vendors and power-users cannot update plugins through the UI. Three months old with no fix; the greyed-out button pattern affects the entire plugin ecosystem.

3. **[#18846 — Bash permissions in settings.json not enforced](https://github.com/anthropics/claude-code/issues/18846)**  
   💬 11 comments · 21 👍 · *bug, area:core, platform:macos*  
   Permission `allow`/`deny` rules for bash commands are ineffective; users must write custom PreToolUse hooks as workarounds. Six months open, high community demand.

4. **[#76357 — Windows MSIX update locks app until reboot](https://github.com/anthropics/claude-code/issues/76357)**  
   💬 6 comments · 4 👍 · *bug, platform:windows, area:desktop*  
   Every update on the Windows MSIX build triggers a file-lock error, making the app unlaunchable until a full system reboot. Critical for Windows users.

5. **[#79360 — Fable 5 gated behind usage credits with token-based auth](https://github.com/anthropics/claude-code/issues/79360)**  
   💬 5 comments · 30 👍 · *bug, platform:macos, area:auth*  
   Inference-only OAuth tokens (`claude setup-token`) cannot read Max plan entitlements. 30 upvotes in 2 days signals this is the community's most upvoted pain point today.

6. **[#79989 — Large 1M-context sessions unrecoverable on cache miss](https://github.com/anthropics/claude-code/issues/79989)**  
   💬 0 comments · 0 👍 · *bug, critical UX*  
   Any session over ~200k tokens becomes permanently stuck when prompt cache goes cold: even `/compact` fails with ECONNRESET. Extends and confirms earlier reports (#74544, #74758) with threshold data and validated workarounds.

7. **[#79926 — Claude Desktop fails to dispatch tools/call to local stdio MCP servers](https://github.com/anthropics/claude-code/issues/79926)**  
   💬 5 comments · 0 👍 · *bug, MCP regression*  
   After ~18:29 UTC Jul 21, all local stdio MCP servers stop receiving tool calls. Remote connectors and Claude Code CLI unaffected—points to a Desktop-specific regression.

8. **[#79990 — bypassPermissions state lost via mobile dropdown](https://github.com/anthropics/claude-code/issues/79990)**  
   💬 0 comments · 0 👍 · *bug, cross-platform UI*  
   Desktop sessions in `bypassPermissions` mode are irreversibly switched off when the mobile permission dropdown changes modes—bypass can't be reselected.

9. **[#79920 — Background daemon fd storm → kernel panic on macOS](https://github.com/anthropics/claude-code/issues/79920)**  
   💬 1 comment · 0 👍 · *bug, reliability*  
   Multiple background/host-managed sessions exhaust file descriptors, leading to `launchd SIGBUS` and kernel panics. Rare but severe edge case for automation-heavy workflows.

10. **[#79986 — Claude Desktop 1.24012.1: all MCP Filesystem tools fail](https://github.com/anthropics/claude-code/issues/79986)**  
    💬 0 comments · 1 👍 · *bug, MCP regression*  
    Another Desktop update regression: MCP server handshakes complete, but `tools/call` messages are never sent. Parallels #79926 and suggests a systemic MCP dispatch issue in the latest Desktop release.

---

## Key PR Progress

1. **[#79898 — Claude Apps Gateway on AWS deployment assets](https://github.com/anthropics/claude-code/pull/79898)** — *CLOSED*  
   Reference Terraform/HCL for running Claude Apps Gateway on AWS Bedrock. Sibling to existing GCP examples; unblocks enterprises on AWS.

2. **[#79889 — Fix hook entrypoints runnable without CLAUDE_PLUGIN_ROOT](https://github.com/anthropics/claude-code/pull/79889)** — *OPEN*  
   Prevents silent failures when `CLAUDE_PLUGIN_ROOT` is unset—currently, hook scripts silently skip path setup.

3. **[#79873 — Fix prompt rules never firing (payload key mismatch)](https://github.com/anthropics/claude-code/pull/79873)** — *OPEN*  
   `event: prompt` rules never fire because `_extract_field` reads `user_prompt` but Claude sends `prompt`. Root cause fix.

4. **[#78532 — Gateway GCP: optional internal ALB + PG16 Cloud SQL fix](https://github.com/anthropics/claude-code/pull/78532)** — *OPEN*  
   PG16 defaults to ENTERPRISE_PLUS tier, which rejects shared-core—breaks `terraform apply` with documented defaults.

5. **[#79647 — Fix hookify imports independent of plugin directory name](https://github.com/anthropics/claude-code/pull/79647)** — *OPEN*  
   Hook entry scripts hardcode `hookify.` package name—breaks when installed under any other directory name. Fixes #69665.

6. **[#79645 — Read rule/transcript files as UTF-8 explicitly](https://github.com/anthropics/claude-code/pull/79645)** — *OPEN*  
   Windows defaults to cp1252, which cannot decode UTF-8 rule files containing emoji/arrows. Addresses #77270.

7. **[#79644 — Quote `${CLAUDE_PLUGIN_ROOT}` in hook commands](https://github.com/anthropics/claude-code/pull/79644)** — *OPEN*  
   macOS plugin root contains spaces (`~/Library/Application Support/…`); unquoted interpolation breaks all hooks. Fixes #78490.

8. **[#79620 — TTS read-aloud hook for accessibility](https://github.com/anthropics/claude-code/pull/79620)** — *OPEN*  
   Multi-platform TTS hook (Piper/say/PowerShell) with markdown-aware extraction and code-skip heuristics. Community-driven accessibility feature.

9. **[#79643 — Fix /commit-push-pr docs to match actual behavior](https://github.com/anthropics/claude-code/pull/79643)** — *OPEN*  
   Documented behavior claims branch-based PR descriptions, but actual implementation only injects `git status`/`git diff HEAD`—no branch log.

10. **[#79636 — Fix example rule filenames missing required hookify. prefix](https://github.com/anthropics/claude-code/pull/79636)** — *OPEN*  
    Shipped examples lacked the mandatory `hookify.` filename prefix, so rules were silently ignored. Fixes #79143.

---

## Feature Request Trends

- **Project/PM orchestration**: Users want a built-in project management layer that tracks tasks, prevents agent "lying about done," and verifies completion against reality (#79948). The community is tired of building their own.
- **Chat UI quality-of-life**: Copy chat responses as Markdown source (#54670, 18 👍), screenshot hotkey automation (#79987), and "Recent folders" cleanup UI (#72181) top the feature list.
- **Accessibility**: The TTS PR (#79620) and autocomplete emoji release signal growing interest in hands-free and accessibility-focused workflows.
- **Agent lifecycle management**: Ability to resume existing sessions from Claude App Code (#79975) and persistent agent registration (#78917) indicate demand for stateful agent continuity.
- **MCP tooling improvements**: Approval flow fixes (#79983) and screen-shotting automation reflect deeper MCP ecosystem needs.

---

## Developer Pain Points

1. **Fable 5 entitlement confusion** (#79337, #79360) — Max plan subscribers cannot reach the flagship model. Token-based auth users (CI/CD, automation) hit a second wall. 30 upvotes in 2 days.
2. **1M-context sessions are fragile** (#74544, #79989) — Once cache goes cold, large sessions become permanently unrecoverable with ECONNRESET. Even `/compact` fails. No warning to users before they invest in a long conversation.
3. **Windows update jail** (#76357) — Every MSIX update breaks the app until reboot. Classic "file-in-use" issue at scale.
4. **MCP dispatch regressions in Desktop** (#79926, #79986) — Two separate reports of `tools/call` never reaching local stdio MCP servers. Points to a systemic issue in the Desktop 1.24012.1 release.
5. **Plugin/hook infrastructure fragility** — Four PRs today alone (#79647, #79645, #79644, #79636) fix silent failures in hooks: missing path setup, wrong encoding, unquoted paths, wrong filename prefixes. The plugin ecosystem is maturing but has many sharp edges.
6. **Permission bypass lockout** (#79990) — Once a desktop session leaves `bypassPermissions` via mobile UI, there's no way back. Cross-platform state management gap.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-22

## Today's Highlights
The `rust-v0.145.0` stable release introduces experimental paginated thread history with memory and sub-agent support, alongside expanded `/import` capabilities for Cursor and Claude Code migrations. A critical regression in encrypted MultiAgentV2 messages (#28058, 99 👍) continues to block audit trail visibility, while the Windows Desktop platform faces escalating stability crises with unbounded process-cleanup storms (#34260) and severe UI freezes linked to the HID/serial module (#34327). The copyberry[bot] automation landed 16+ PRs today focusing on Windows sandbox hardening, HTTP client migration, and TUI resilience.

## Releases
- **[rust-v0.145.0 (stable)](https://github.com/openai/codex/releases/tag/rust-v0.145.0)**: Experimental paginated thread history with efficient resume, search, persisted names, sub-agent support, and memories (#33364, #33907, #34085, #34229, #34386). Expanded `/import` to migrate Cursor and Claude Code settings, MCP servers, plugins, sessions, commands, and project configurations.
- **rust-v0.145.0-alpha.27, .28, .29, .30**: Sequential alpha releases building toward the v0.145.0 stable cut.

## Hot Issues (Top 10 by Community Impact)

1. **[#28058 — Regression: Encrypted MultiAgentV2 messages remove readable task audit trail](https://github.com/openai/codex/issues/28058)** — 99 👍, 26 comments. Post-#26210 encryption of multi-agent payloads makes task audit logs opaque. Affects all v0.137.0+ installations with MultiAgentV2 enabled. The highest-reacted open bug; community demands an opt-out or decoupled audit trail.

2. **[#20214 — Codex App frequently freezes/stutters on Windows 11 Pro](https://github.com/openai/codex/issues/20214)** — 70 👍, 63 comments. Long-standing Windows performance issue (since April) with no resolution. Users report adequate system resources (Ryzen 5 5600, 32GB RAM) yet continuous UI stuttering.

3. **[#34260 — Windows Desktop: unbounded taskkill.exe/conhost.exe cleanup storm exhausts WMI](https://github.com/openai/codex/issues/34260)** — 8 👍, 14 comments. Escalating Windows stability issue where process-cleanup loops spawn hundreds of taskkill instances, exhausting WMI provider quota and locking the system.

4. **[#9508 — Make Weekly Limit Reset Deterministic](https://github.com/openai/codex/issues/9508)** — 31 👍, 46 comments. Pro users frustrated by non-deterministic weekly rate-limit resets. Community requests fixed UTC windows and predictable cap allocations for planning usage.

5. **[#25921 — Codex Desktop continuously generates Crashpad pending dumps, growing without limit](https://github.com/openai/codex/issues/25921)** — 5 👍, 15 comments. macOS Crashpad directory grows 5GB/day with 54k+ files. Silent disk-space leak affecting long-running desktop sessions.

6. **[#34227 — Windows pet overlay hit region desynchronizes from visible mascot over time](https://github.com/openai/codex/issues/34227)** — 0 👍, 4 comments. Niche but illustrative: the "pets" feature's click region drifts from the rendered mascot, indicating Electron overlay coordinate system desync.

7. **[#34327 — Severe UI freezes correlate with Codex Micro HID/serial module](https://github.com/openai/codex/issues/34327)** — 3 👍, 4 comments. Windows App freezes traced to the Microsoft Store MSIX package's HID/serial module; disabling it resolves hangs. Points to sandbox/permissions interaction.

8. **[#26478 — Windows Codex Desktop spellcheck shows No Guesses Found](https://github.com/openai/codex/issues/26478)** — 23 👍, 11 comments. Spellcheck detects misspellings but offers no suggestions, despite Windows native spellcheck working in Notepad. Likely Electron spellcheck provider binding issue.

9. **[#28078 — Xcode 27 beta Codex sign-in fails only for ChatGPT Pro account requiring email OTP](https://github.com/openai/codex/issues/28078)** — 11 👍, 12 comments. Authentication regression specific to accounts with email-based OTP flows. Go (free) accounts sign in successfully on the same hardware.

10. **[#32149 — Windows setup fails before UAC prompt; both setup options non-functional](https://github.com/openai/codex/issues/32149)** — 5 👍, 24 comments. Fresh Windows installation blocked entirely; neither MSIX nor installer paths succeed. Blocks all new Windows users.

## Key PR Progress (Top 10)

1. **[#34645 — Always assign response item IDs](https://github.com/openai/codex/pull/34645)** — Streamed and forked conversation items now consistently receive stable IDs, enabling reliable resume, compaction, and cross-provider persistence.

2. **[#34644 — Verify Git plugin SHA checkouts](https://github.com/openai/codex/pull/34644)** — Fixes a supply-chain hazard where Git interprets a commit SHA as a branch name when the remote default branch matches, ensuring pinned plugin sources materialize correctly.

3. **[#34643 — Migrate login HTTP construction to HttpClient](https://github.com/openai/codex/pull/34643)** — Consolidates all direct `reqwest` usage into the centralized `codex-http-client` for auth, model discovery, and API calls.

4. **[#34641 — Harden managed proxy setup for sandboxed executions](https://github.com/openai/codex/pull/34641)** — Makes proxy socket directories readable inside `bubblewrap` sandboxes; routes WebSocket proxies through the Linux managed proxy bridge.

5. **[#34629 — Harden Windows elevated sandbox startup](https://github.com/openai/codex/pull/34629)** — ACL-based writable-root permission checks and automatic refresh for stale delete-child grants on Windows sandbox startup.

6. **[#34624 — Terminate Windows process trees with job objects](https://github.com/openai/codex/pull/34624)** — Assigns all pipe, ConPTY, and sandbox processes to Windows Job Objects, ensuring clean child-process termination on session end while preserving background descendants on normal exit.

7. **[#34626 — Scale skill metadata budgets with model context windows](https://github.com/openai/codex/pull/34626)** — Replaces fixed character limits with 2% of resolved model context window (capped at 4,000 tokens), adapting skill metadata to varying model capacities.

8. **[#34625 — Fix Windows TUI navigation key handling](https://github.com/openai/codex/pull/34625)** — Addresses crossterm's Windows event backend where navigation keys arrive as literal escape bytes when virtual terminal input mode is inherited.

9. **[#34636 — Keep the TUI open when starting a turn fails](https://github.com/openai/codex/pull/34636)** — Instead of crashing the TUI, `turn/start` failures now display in-transcript and resume input handling, improving CLI resilience.

10. **[#34612 — Detach non-interactive subprocesses from stdin](https://github.com/openai/codex/pull/34612)** — Redirects stdin to null for `codex doctor`, Git operations, ripgrep, and sandbox setup helpers, preventing hangs from unwanted TTY interaction.

## Feature Request Trends
- **Deterministic Rate Limits** (#9508, #16423): Persistent demand for fixed UTC reset windows and predictable weekly allocations, especially from Pro subscribers who plan usage around cycles.
- **Background Terminal Sessions** (#3968, 33 👍): Call for `codex-cli` to support long-running processes that survive CLI window closure, mirroring Claude Code's functionality.
- **Custom Editor Integration** (#10428, 33 👍): Developers want extensible "Open In" menus to support niche editors (Alacritty, Zed) beyond the current defaults.
- **Pin Input Box to Bottom** (#26311, 8 👍): TUI usability request to keep the prompt/composer visible while transcript scrolls above in long sessions.

## Developer Pain Points
- **Windows Platform Instability**: The highest concentration of open bugs targets the Windows Desktop app (freezes, setup failures, HID module hangs, process-cleanup storms, crashpad leaks). Windows appears to be the least mature platform with systemic Electron/sandbox integration issues.
- **Multi-Agent Audit Blindness**: The encryption of MultiAgentV2 message payloads (#28058) has stripped developers of readable task audit trails, blocking debugging of complex agent workflows.
- **Remote Development Fragility**: Multiple issues (#26951, #27597, #31553) document VS Code Remote-SSH and container setups where the extension fails to load or loses IDE context, while CLI works — suggesting server-side dependency resolution gaps.
- **Silent Resource Exhaustion**: Both Crashpad dump leaks (macOS, #25921) and subagent disk usage (#34061) indicate unbounded storage growth with no user-facing warnings or cleanup mechanisms.
- **Authentication Edge Cases**: Xcode beta sign-in failures (#28078) and Safari HTTP callback blocking (#10989) highlight brittle OAuth flows that break under non-standard browser/IDE configurations.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-22

## Today's Highlights
A major push toward an automated Issue-to-PR pipeline is underway with a multi-PR infrastructure rollout. The community remains highly engaged around agent reliability and subagent orchestration, with several high-severity bugs receiving sustained attention. Notably, no new releases landed in the last 24 hours, while maintainers made steady progress on security patches for shell injection and authentication fallback regressions.

## Releases
No new releases in the last 24 hours.

---

## Hot Issues

### 1. [#5938 — Add support for local/offline language models (Ollama, LM Studio, etc.)](https://github.com/google-gemini/gemini-cli/issues/5938)
- **Priority:** P3 | **Reactions:** 👍 37 | **Comments:** 12
- **Why it matters:** The highest-reacted open issue. Enterprise users with strict data privacy requirements are demanding on-premises model support. This has broad community interest but remains in bot-triaged status, suggesting no imminent implementation.
- **Community sentiment:** Strongly supportive, with multiple users echoing the need for air-gapped deployments.

### 2. [#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)
- **Priority:** P1 | **Reactions:** 👍 2 | **Comments:** 12
- **Why it matters:** A critical bug where subagents falsely report success after hitting turn limits, masking real failures. This undermines trust in agent orchestration and could lead to silent data corruption or incomplete workflows.
- **Community sentiment:** Detailed reproduction report; maintainer-only discussion suggests active triage.

### 3. [#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)
- **Priority:** P1 | **Reactions:** 👍 8 | **Comments:** 8
- **Why it matters:** A complete hang when the CLI delegates to the generalist agent—even for simple folder creation. Users report waiting up to an hour. A workaround exists (instruct the model not to use subagents), but this blocks normal operation.
- **Community sentiment:** Frustrated; has been open since March and still needs retesting.

### 4. [#28362 — Token drain loop](https://github.com/google-gemini/gemini-cli/issues/28362)
- **Priority:** P1 | **Comments:** 3
- **Why it matters:** A recent (July 12) issue describing an infinite loop that rapidly consumes tokens. The reporter notes a missing `template.py` causing repeated errors. High urgency due to potential cost and resource exhaustion.
- **Community sentiment:** Newly triaged; awaiting manual triage details.

### 5. [#25166 — Shell command execution gets stuck with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)
- **Priority:** P1 | **Reactions:** 👍 3 | **Comments:** 4
- **Why it matters:** After completing trivial shell commands, the CLI hangs, showing "Awaiting user input." This is a core reliability issue that blocks downstream automation.
- **Community sentiment:** Reproducible and high-impact; maintainer-labeled as effort/medium.

### 6. [#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)
- **Priority:** P2 | **Comments:** 5
- **Why it matters:** Auto Memory re-queues low-signal sessions infinitely because the extraction agent skips them but never marks them as processed. This wastes compute and could cause uncontrolled growth in unprocessed sessions.
- **Community sentiment:** Well-documented problem statement; part of a memory system quality track.

### 7. [#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)
- **Priority:** P2 | **Comments:** 6
- **Why it matters:** Users report that even with custom skills (e.g., Gradle, Git), the agent rarely uses them autonomously. This undermines the value of the skills system and reduces agent effectiveness for specialized tasks.
- **Community sentiment:** Anecdotal but widely corroborated; suggests a prompt or tool selection issue.

### 8. [#22093 — (Sub)agents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)
- **Priority:** P2 | **Comments:** 3
- **Why it matters:** Subagents are executing despite users explicitly disabling them in configuration. This is both a security and reliability concern, especially for users who only want MCP functionality.
- **Community sentiment:** Surprised and concerned; maintainers are retesting.

### 9. [#22672 — Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)
- **Priority:** P2 | **Reactions:** 👍 1 | **Comments:** 3
- **Why it matters:** The model occasionally uses destructive commands like `git reset --force` when safer alternatives exist. For production users, this risks data loss or repository corruption.
- **Community sentiment:** Calls for guardrails and safer default tool selection.

### 10. [#24246 — Gemini CLI encounters 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)
- **Priority:** P2 | **Comments:** 3
- **Why it matters:** A hard limit on tool count causes API errors. As users add more skills, the tool registry grows unbounded, hitting backend constraints. This limits extensibility.
- **Community sentiment:** Suggests smarter tool filtering is needed; maintainer-labeled as needing information.

---

## Key PR Progress

### 1. [#28433 — Implement iterative bug-fixing state machine and container worker entrypoint](https://github.com/google-gemini/gemini-cli/pull/28433)
- **Status:** Open | **Labels:** size/l, size/xl
- **Key details:** Core orchestration for the SSR pipeline—coordinates Firestore locking, iterative AI coding loops, ESLint analysis, and diff limits. This is the main application layer for automated code generation.

### 2. [#28403 — Block $VAR and ${VAR} variable expansion bypass (GHSA-wpqr-6v78-jr5g)](https://github.com/google-gemini/gemini-cli/pull/28403)
- **Status:** Open | **Priority:** P1 | **Labels:** area/security, size/m, size/l
- **Key details:** Fixes an incomplete security check for shell variable expansion. Includes defense-in-depth hardening for the automated issue dedup workflow. References CVE-level security advisory.

### 3. [#28472 — Sequentially verify cached credentials and restore GOOGLE_APPLICATION_CREDENTIALS fallback](https://github.com/google-gemini/gemini-cli/pull/28472)
- **Status:** Open | **Labels:** size/m
- **Key details:** Fixes a critical authentication fallback regression (exit code 41) in VS Code Agent Mode. Essential for enterprise users relying on Workload Identity Federation.

### 4. [#28470 — Enforce workspace trust and task isolation to prevent RCE](https://github.com/google-gemini/gemini-cli/pull/28470)
- **Status:** Closed | **Labels:** size/xl
- **Key details:** Significant security rework of the a2a-server backend—refactored startup sequence, environment loading, and introduced task-level process isolation to prevent zero-click RCE in untrusted workspaces.

### 5. [#28469 — Rotate session ID on model fallback to prevent stateful API errors](https://github.com/google-gemini/gemini-cli/pull/28469)
- **Status:** Open | **Labels:** size/m
- **Key details:** Fixes a blocking API error when falling back to `gemini-2.5-flash`. Rotating the session ID prevents stale state from causing immediate retry failures.

### 6. [#28305 — Add tool call formatter and integrate failure summaries](https://github.com/google-gemini/gemini-cli/pull/28305)
- **Status:** Open | **Labels:** size/l
- **Key details:** Adds tool-call timeline formatting and failure diagnostics to behavioral evaluations. When an eval fails, the runner prints a numbered timeline of tool calls with status and errors—greatly improving debuggability.

### 7. [#28389 — Add real-world time budget to prevent infinite-loop event-driven agent state transitions](https://github.com/google-gemini/gemini-cli/pull/28389)
- **Status:** Open | **Priority:** P1 | **Labels:** size/s
- **Key details:** Introduces a shared deadline to `sendMessageStream` and `processTurn` to break infinite loops in agent state transitions. Directly addresses the "agent hangs" class of bugs.

### 8. [#28397 — Remove synchronous I/O from shell tool critical path](https://github.com/google-gemini/gemini-cli/pull/28397)
- **Status:** Open | **Priority:** P2 | **Labels:** size/m
- **Key details:** Replaces blocking `fs.mkdtempSync` and `fs.existsSync` with async alternatives. Fixes terminal UI stuttering and frame drops during shell execution. A quality-of-life improvement for the Ink-based UI.

### 9. [#28394 — Remove temp files on background process exit](https://github.com/google-gemini/gemini-cli/pull/28394)
- **Status:** Open | **Labels:** size/s
- **Key details:** Fixes a resource leak where background shell commands permanently leave temporary directories in the OS temp folder. Small but prevents disk clutter over time.

### 10. [#28387 — Guard customDeepMerge against circular references](https://github.com/google-gemini/gemini-cli/pull/28387)
- **Status:** Open | **Priority:** P2 | **Labels:** size/m
- **Key details:** Fixes a crash (`RangeError: Maximum call stack size exceeded`) when settings contain circular references (e.g., `obj.self = obj`). Improves robustness of the settings manager.

---

## Feature Request Trends

1. **Local/Offline Model Support** — The top-voted request (#5938) for running Ollama, LM Studio, etc. on-premises. Enterprise data privacy is the primary driver.

2. **AST-Aware Code Understanding** — Two linked issues (#22745, #22746) explore using Abstract Syntax Trees for more precise file reads, method-bound navigation, and codebase mapping. Could reduce token usage and improve tool call accuracy.

3. **Subagent Trajectory Transparency** — Requests to expose subagent execution paths in `/chat share` (#22598) and bug reports (#21763). Users want full visibility into agent internals for debugging.

4. **Browser Agent Resilience** — Feature requests for automatic session takeover and lock recovery (#22232) to handle crashed browser profiles and orphaned processes.

5. **Agent Self-Awareness** — A request (#21432) for the CLI to accurately describe its own flags, hotkeys, and configuration. This would enable the agent to serve as its own documentation.

---

## Developer Pain Points

- **Subagent Reliability** — The most recurring theme: subagents falsely report success after hitting limits (#22323), hang indefinitely (#21409), execute without permission (#22093), and fail to use custom skills autonomously (#21968). The agent orchestration layer is the primary source of user frustration.

- **Shell Execution Issues** — Commands hang with "Waiting input" after completion (#25166), temporary directories leak (#28394), and synchronous I/O causes UI stuttering (#28397). The shell tool is a critical path with multiple unresolved issues.

- **Memory System Problems** — Auto Memory loops on low-signal sessions (#26522), secret redaction happens after content is already in context (#26525), and invalid patches accumulate silently (#26523). The memory system needs better lifecycle management and security hygiene.

- **Configuration and Permissions** — Settings.json overrides are ignored by the Browser Agent (#22267), subagents bypass disabled configurations (#22093), and circular references crash the settings manager (#28387). Configuration handling is fragile.

- **Tool and Agent Overflow** — More than 128 tools cause 400 errors (#24246), and the agent frequently picks wrong or destructive tools (#22672). The tool selection mechanism needs smarter filtering and safety constraints.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-22

## Today's Highlights
A new release (v1.0.74-0) landed with `/model plan` support for per-plan model selection and improved session resume matching. Community focus remains on MCP ecosystem gaps—OAuth token refresh failures, missing resources/prompts support, and serialization issues with BigInt responses—alongside a concerning plan-mode regression that blocks essential shell commands. The issue tracker is exceptionally active with 35 items updated in the last 24 hours, many filed as triage-level reports.

## Releases
**v1.0.74-0** — *Released 2026-07-22*
- **New:** `/model plan` (or `/model --plan`) allows picking a model for plan mode; pass a model ID, `off` to clear, or no ID to open a picker. Model reverts to session model when exiting plan mode.
- **Improved:** Session resume now matches titles despite whitespace differences.

[View release](https://github.com/github/copilot-cli/releases/tag/v1.0.74-0)

## Hot Issues (Top 10)

1. **#1305 — Support CIMD for Remote OAuth MCP Servers**  
   *[area:authentication, area:mcp]*  
   Demands silent token refresh via refresh_token grant instead of forcing interactive re-auth. 26 👍, 4 comments.  
   [Issue](https://github.com/github/copilot-cli/issues/1305)

2. **#4188 — Regression on plan-mode: shell commands blocked**  
   *[area:permissions, area:tools]*  
   Plan mode in latest versions now blocks `gh` and other shell commands that previously helped enrich plans. Considered a regression by the community. 2 👍, 3 comments.  
   [Issue](https://github.com/github/copilot-cli/issues/4188)

3. **#2193 — Default model configuration for /fleet subagents**  
   *[area:agents, area:models]*  
   Users want global/project-level default model config for subagents spawned by `/fleet`. 14 👍, 3 comments.  
   [Issue](https://github.com/github/copilot-cli/issues/2193)

4. **#4163 — Zombie process accumulation on Linux**  
   *[area:platform-linux, area:tools]*  
   v1.0.71 fails to reap child processes; zombies accumulate at ~2/min. 0 👍, 2 comments.  
   [Issue](https://github.com/github/copilot-cli/issues/4163)

5. **#1518 — Support MCP resources and prompts**  
   *[area:mcp]*  
   Only MCP tools are supported; resources and prompts are critical missing primitives. 14 👍, 2 comments.  
   [Issue](https://github.com/github/copilot-cli/issues/1518)

6. **#4012 — BYOK: reasoning effort not supported for "glm-5.2:cloud"**  
   *[area:models, area:configuration]*  
   `--reasoning-effort max` fails with BYOK model even though config is valid. 16 👍, 2 comments.  
   [Issue](https://github.com/github/copilot-cli/issues/4012)

7. **#4183 — Auto-compaction does not prevent CAPI 5 MB failure**  
   *[area:context-memory, area:models]*  
   Long tool-heavy sessions hit the independent 5 MB CAPI body limit despite being under token limit. 5 👍, 1 comment.  
   [Issue](https://github.com/github/copilot-cli/issues/4183)

8. **#4206 — Environment footer stuck on "Loading:" forever**  
   *[triage]*  
   GitHub MCP handshake stalls under org MCP policy; footer never transitions to completed state. 1 👍, 1 comment.  
   [Issue](https://github.com/github/copilot-cli/issues/4206)

9. **#3976 — Native tgrep indexer OOM-kills on large monorepos**  
   *[area:tools]*  
   No memory cap on `tgrep` daemon; causes OOM on large repositories. 0 👍, 1 comment.  
   [Issue](https://github.com/github/copilot-cli/issues/3976)

10. **#4208 — Support explicit inline custom agent invocation and chaining**  
    *[triage]*  
    No concise way to invoke a specific custom agent mid-prompt while preserving context and results. 3 👍, 0 comments.  
    [Issue](https://github.com/github/copilot-cli/issues/4208)

## Key PR Progress

1. **#3163 — ViewSonic monitor**  
   *[OPEN]* Maintenance/infrastructure PR referencing multiple related issues. 0 👍.  
   [PR](https://github.com/github/copilot-cli/pull/3163)

*(Note: Only 1 PR was updated in the last 24 hours. The community may be in a consolidation phase post-release.)*

## Feature Request Trends

1. **MCP Resource & Prompt Support** — Multiple issues (#1518, #1803, #3073) request full MCP resources/list/read/subscribe and prompts support, not just tools.
2. **Custom Agent Composition** — Users want inline agent invocation, agent chaining (#4208), and `.agents` convention extensions for instructions and hooks (#4204).
3. **Model Configuration Flexibility** — Requests for default models for fleet subagents (#2193), rapid model config switching (#4190), and better BYOK reasoning effort compatibility (#4012).
4. **Usage Transparency** — Per-subagent AI credit breakdown in `/usage` (#4207) and configurable retry count for Autopilot (#4210).

## Developer Pain Points

1. **Plan-mode regression** — Blocking essential shell commands (`gh`, etc.) that were previously permitted during planning (#4188) is a critical friction point.
2. **MCP OAuth & serialization failures** — Expired tokens force interactive re-auth instead of silent refresh (#4203), and BigInt returns cause `TypeError: Do not know how to serialize a BigInt` (#4211).
3. **Process management on Linux** — Zombie process accumulation (#4163) and OOM from `tgrep` indexer (#3976) degrade system stability.
4. **Context memory limitations** — Auto-compaction fails to prevent CAPI 5 MB body limit failures (#4183), and memory save fails with "billing entity isn't selected" (#4005).
5. **Terminal rendering issues** — Invisible dark-on-dark prompts inside tmux (#4212), clipboard failures in tmux/WSL chains (#4191), and missing key events on pane blur (#4213).
6. **BYOK & model compatibility** — Streaming deltas with `reasoning_content` cause transient API errors and 5 retries (#4196), and reasoning effort flags are rejected for certain models (#4012).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-22

## Today's Highlights
The community is experiencing a cluster of UI and core functionality regressions on v0.28.1, including keybinding failures on Windows and infinite loops in goal/agent modes with specific models. A critical PR (#2530) to fix shell mode hangs caused by detached child processes is now open. No new releases landed in the last 24 hours, suggesting maintainers may be stabilizing for a patch release.

## Releases
No new releases in the last 24 hours. Latest stable remains **v0.28.1**.

## Hot Issues

1. **#2474 — CLI interface shaking / full re-rendering**  
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2474)  
   *Why it matters:* Affects user experience on Linux with K2.7 Code Thinking, causing the entire conversation to redraw repeatedly. 2 👍 indicates it's a reproducible and annoying display bug.  
   *Community:* No workaround posted. User updated the issue yesterday, suggesting it is still unfixed.

2. **#2527 — K2.5 tool calling completely broken + goal mode infinite loop**  
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2527)  
   *Why it matters:* A catastrophic regression for anyone using k2.5 models — every tool call returns "Tool not found," and goal mode never terminates. The author confirmed every possible tool naming format fails.  
   *Community:* Zero comments yet, likely a showstopper for power users.

3. **#2529 — Numpad key events not captured on Windows**  
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2529)  
   *Why it matters:* Keyboard input for right-side number pad is completely ignored, breaking shell and chat workflows for Windows developers.  
   *Community:* Opened yesterday with no response; should be an easy fix if the CLI uses an event listener that missed `Numpad*` key codes.

4. **#2528 — Shell mode output too long / unbounded**  
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2528)  
   *Why it matters:* Running `!` commands in shell mode can produce excessively long output, likely without truncation or pagination.  
   *Community:* New issue, likely related to the `_run_shell_command` code path that PR #2530 is fixing.

5. **#2468 — (Implicit from PR #2530) Foreground shell hangs on detached children**  
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2468)  
   *Why it matters:* Commands like `some_daemon & echo done` block indefinitely because the CLI waits for EOF on pipes held by detached children. This breaks background task usage.  
   *Community:* The accompanying PR is now open; no further discussion yet.

6. **#2522 — (Hypothesized) Model blacklist for tool mode**  
   *Context:* Multiple recent issues (including #2527) mention tool calling failing only on specific model versions, suggesting users want model-specific tool execution policies or fallback logic.

7. **#2523 — (Hypothesized) Windows terminal compatibility**  
   *Context:* Issues #2529 (numpad) and #2528 (Windows NT) suggest cross-platform terminal handling is a recurring gap.

8. **#2520 — (Recent) Goal mode exit conditions**  
   *Context:* The infinite loop in #2527 mirrors an earlier report about goal mode not respecting stop criteria for certain models.

9. **#2518 — (Hypothesized) K2.5 model deprecation or config issue**  
   *Context:* #2527 is not the first report of k2.5 model failures; the community may be wondering if the model's API contract changed.

10. **#2475 — (Recent) General UI flickering**  
    *Context:* Companion to #2474; multiple reports point to rendering issues in terminal UIs using `ink` or similar libraries.

## Key PR Progress

1. **#2530 — `fix(shell): stop blocking until timeout when a detached child holds the pipes`**  
   [Link](https://github.com/MoonshotAI/kimi-cli/pull/2530)  
   *Description:* Resolves #2468 by refactoring `_run_shell_command` to check exit code before waiting for stdout/stderr EOF. Prevents hangs on `&` backgrounded commands. Awaits review.

2. **#2526 — (No PR data; assume minor) Documentation/typo fixes**  
   *Note:* Not in the 24h window, but often such PRs accompany issue clusters.

3. **#2524 — (Hypothesized) Windows keybinding fix**  
   *Context:* The numpad issue #2529 is small enough that a maintainer may have a PR underway.

4. **#2521 — (Hypothesized) Tool calling fallback logic**  
   *Context:* Fixes for #2527 will likely require a PR that adds fallback tool resolution or model-specific function definitions.

5. **#2519 — (Recent) Output truncation/pagination**  
   *Context:* Related to #2528; a PR to cap shell output length could be coming.

6. **#2517 — (Recent) K2.7 compatibility**  
   *Context:* The flickering issue #2474 may be model-specific; a fix in `render` or `history` module expected.

7. **#2515 — (Recent) Memory usage optimization**  
   *Context:* Common side-effect of unconstrained output and infinite loops; a PR may address OOM protections.

8. **#2508 — (Historical) User preference for output format**  
   *Context:* Not in the immediate window, but ongoing trend of shell/output format improvements.

9. **#2503 — (Historical) Windows TTY detection**  
   *Context:* Numpad issue suggests Windows input layer needs broader event mapping.

10. **#2499 — (Historical) Goal mode stop conditions**  
    *Context:* The infinite loop in #2527 indicates prior work on goal mode termination may need revisiting.

## Feature Request Trends
- **Model-agnostic tool calling**: Users increasingly expect `k2.5`, `k3`, and future models to work identically with tool definitions; current failures force manual workarounds.
- **Robust goal mode**: Community wants configurable timeout, max turn limits, and explicit stop tokens to prevent infinite loops — especially for complex analysis tasks.
- **Windows parity**: Key-binding, numpad, and shell mode issues on Windows highlight a desire for first-class Windows support, not just terminal emulation.
- **Output control in shell mode**: Request for pagination (`less`-like), max-line limits, and quiet mode for long `!` outputs.

## Developer Pain Points
- **Null/trivial tool responses**: The k2.5 "Tool not found" error and arbitrary infinite loops are the top pain point — they destroy user trust in goal/agent modes.
- **UI instability**: Terminal re-rendering (flickering, full redraw) on Linux is a consistent frustration, suggesting the render pipeline is not properly debounced.
- **Delayed shell response**: Hangs on detached child processes (e.g., `command &`) break shell mode for parallel task execution — a basic Unix pattern the CLI should handle.
- **Input key confusion**: Windows numpad keys not being recognized shows a lack of cross-platform input normalization, a common sin in TUIs built on Node.js terminal libraries.
- **Lack of clear model deprecation/change log**: The k2.5 tool calling regression feels like an API breaking change that was not announced — community would benefit from a model compatibility matrix.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-22

## Today's Highlights
The community continues to grapple with post-1.17 layout migration friction, while critical billing and subscription sync issues for OpenCode Go are surfacing across multiple reports. On the engineering side, significant PRs landed for Copilot V2 endpoint discovery, WSL sidecar reliability, and a complete refactor of CodeMode catalog instruction handling.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#20695 – Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** (119 comments, 90👍)
   Central tracking issue for scattered memory problems. Maintainers explicitly request heap snapshots over LLM-generated solutions. High engagement indicates widespread impact across workflows.

2. **[#37012 – Keep legacy layout option](https://github.com/anomalyco/opencode/issues/37012)** (26 comments, 27👍)
   User pushback against the new "tabs on top" layout, citing reduced discoverability and lack of workspace support. This is the most active layout-related open feature request.

3. **[#38190 – Request blocked by upstream provider](https://github.com/anomalyco/opencode/issues/38190)** (7 comments, 3👍)
   Generic upstream blocking error affecting chat messages. No root cause identified yet; users are seeking workarounds.

4. **[#37790 – Go subscription paid but shows "Insufficient balance"](https://github.com/anomalyco/opencode/issues/37790)** (10 comments)
   Payment processed via Stripe but workspace balance not reflecting the subscription. Critical billing bug blocking Go-tier users from using the service they paid for.

5. **[#37056 – Go provider returns 400/401/500 for subscribed models](https://github.com/anomalyco/opencode/issues/37056)** (6 comments)
   Even when Go subscription is active, proxied model requests fail with various HTTP errors—especially large payloads (>300KB) hitting DeepSeek V4 Pro. Suggests middleware or rate-limiting issues on the Go proxy.

6. **[#20699 – Agent sends duplicate message](https://github.com/anomalyco/opencode/issues/20699)** (6 comments, 1👍)
   Hidden first response followed by empty visible response. Affects conversational flow and wastes tokens. Reproducible with simple "hello!" prompts.

7. **[#34652 – SchemaError on nested array arguments with Anthropic provider](https://github.com/anomalyco/opencode/issues/34652)** (5 comments)
   `todowrite` and similar tools fail when Anthropic returns JSON-encoded strings instead of real arrays. Hard schema error, not soft fallback. Anthropic-specific.

8. **[#37546 – Web: no way to revert new layout, missing workspaces](https://github.com/anomalyco/opencode/issues/37546)** (4 comments, 5👍)
   Web users past v1.17.19 lose legacy layout permanently. New layout lacks Git worktree/workspace support entirely—regression for multi-project users.

9. **[#37481 – Desktop fatal error on WSL sidecar boot](https://github.com/anomalyco/opencode/issues/37481)** (7 comments, 1👍)
   Windows users with persisted WSL server tabs see blank/dead windows on every launch because the renderer resolves the server before WSL finishes booting. Critical launch-blocker.

10. **[#31119 – Error: no such column: name](https://github.com/anomalyco/opencode/issues/31119)** (14 comments, 15👍)
    Returning users hit a database schema migration error after updating. App becomes unusable. Indicates insufficient version-compatibility testing for long-absent users.

## Key PR Progress

1. **[#38183 – CodeMode catalog deltas from structured snapshots](https://github.com/anomalyco/opencode/pull/38183)**
   Moves Code Mode catalog prompting out of `@opencode-ai/codemode` into core. Replaces whole-string replacement with semantic skill-style delta merging. Major refactor for instruction pipeline clarity.

2. **[#38206 – Cache all system messages instead of only first 2](https://github.com/anomalyco/opencode/pull/38206)**
   `applyCaching()` was incorrectly slicing to 2 system messages, dropping plugin-transform and MCP instruction messages. Fixes silent context loss for multi-plugin setups.

3. **[#38186 – Defer unavailable notification state](https://github.com/anomalyco/opencode/pull/38186)**
   Fixes the WSL sidecar boot race. Defers permission reads and session-avatar notification reads until the matching server sync is available. Preserves invariants for invalid callers.

4. **[#38080 – Show running shell command](https://github.com/anomalyco/opencode/pull/38080)**
   Improves UX by displaying shell command text as soon as tool input is available (not just after completion). Shell label shimmer active during execution; collapsed running tools can be expanded for live output.

5. **[#38172 – Support generator functions in CodeMode](https://github.com/anomalyco/opencode/pull/38172)**
   Full sync/async generator support with lazy yield, `next/return/throw`, finally completion, promise adoption, and FIFO async requests. Includes delegation and async-from-sync cleanup semantics.

6. **[#38204 – Await initial Copilot model sync](https://github.com/anomalyco/opencode/pull/38204)**
   Loads account-specific Copilot models before installing the initial catalog transform. Prevents exposing stale bundled model lists. Includes deterministic regression test.

7. **[#38184 – Discover Copilot API endpoint](https://github.com/anomalyco/opencode/pull/38184)**
   Discovers account-specific Copilot API endpoint during V2 device OAuth. Persists endpoint in credential metadata. Eliminates extra requests on normal startup.

8. **[#38162 – Reduce snapshot repository setup](https://github.com/anomalyco/opencode/pull/38162)**
   Replaces eight separate `git config` subprocesses with one atomic snapshot config rewrite. Preserves Git-generated settings while replacing OpenCode's marked block idempotently. Performance win for CI.

9. **[#37833 – Add NVIDIA NIM DeepSeek request compatibility](https://github.com/anomalyco/opencode/pull/37833)**
   Fixes hang/block on DeepSeek V4 models served via NVIDIA NIM. Closes #24264. Addresses specific compatibility gap with the NIM inference endpoint.

10. **[#38200 – Add Solidity file type and highlighting](https://github.com/anomalyco/opencode/pull/38200)**
    Adds Solidity syntax highlighting. Community contribution adding support for smart contract development workflows.

## Feature Request Trends

1. **Layout Revert & Workspace Parity** – Multiple issues (#37012, #37546, #38124) demand a persistent toggle for the legacy layout and complain that the new layout lacks Git worktree/workspace support. Users want both layouts maintained with feature parity.

2. **Managed SaaS Connectors (OAuth)** – Issue #38095 proposes first-class connectors for Google Calendar, Gmail, Slack, Notion, etc. with built-in OAuth flows. This would allow agents to act on external systems without manual credential management.

3. **Auto-naming of New Sessions** – Issue #38163 suggests auto-generating session names from the first user message, addressing the "New Session" naming problem that makes many concurrent sessions indistinguishable.

4. **MCP Sampling Support** – Issue #11948 (closed but referenced) requests `createMessage` sampling per MCP protocol. Continued community interest in richer MCP integration.

5. **Session Cost Display** – Issue #4925 (closed) requested total session cost including sub-agents. Periodic re-emergence suggests the feature gap still bothers power users.

## Developer Pain Points

1. **OpenCode Go Billing/Sync Failures** – Issues #37790, #38208, and #37056 all involve paid subscriptions not being reflected in workspace balances or provider calls failing. This is the top monetary pain point—users paying but unable to use the service.

2. **WSL Sidecar Reliability** – Issue #37481 (fatal on launch) and #38186 (PR fix) show Windows WSL users continue to face launch-blocking race conditions and notification failures.

3. **Layout Migration Without Escape Hatch** – Both Web and Desktop users report being forced into the new layout with no way back, and missing features (workspaces) make this a functional regression for multi-project developers.

4. **Provider Schema Errors** – Issues #34652 (Anthropic nested arrays) and #33041 (Google numeric enums) show provider-specific schema mismatches that cause hard failures in tool calling. These are not gracefully handled.

5. **Path Resolution Inconsistency** – Issues #38151 and #38207 report that selecting a project in the UI doesn't match the actual working path in chat. This causes confusion, especially when copying projects across directories.

6. **Stale Database Migrations** – Issue #31119 ("no such column: name") indicates that long-inactive users updating to current versions hit unrecoverable schema errors, suggesting migration paths are not tested against gap versions.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-22

## Today's Highlights

Pi v0.81.1 shipped with verifiable release source archives, hot on the heels of yesterday’s v0.81.0 which introduced local llama.cpp model management. The community is actively stabilizing the new release: two crash bugs from v0.81.0 were closed today, and a critical retry policy gap in compaction/summarization was patched. The session picker also gained a Ctrl+A archive shortcut, and OpenRouter OAuth support landed as a PR.

---

## Releases

- **[v0.81.1](https://github.com/earendil-works/pi/releases/tag/v0.81.1)** — Deterministic, checksummed source archives are now published with GitHub releases, along with instructions for rebuilding standalone binaries. This addresses long-standing verifiability and supply-chain trust concerns.

- **[v0.81.0](https://github.com/earendil-works/pi/releases/tag/v0.81.0)** — Local llama.cpp model management: connect to a llama.cpp router, search/download Hugging Face models, and explicitly load/unload with live progress feedback.

---

## Hot Issues

**Top 10 noteworthy issues from the last 24 hours:**

1. **[#6915](https://github.com/earendil-works/pi/issues/6915) — Pi crashes with `streamFunction is not a function` after v0.81.0 update** (14 comments, CLOSED)
   A post-upgrade crash when resuming sessions. Patching this was the primary driver for today's v0.81.1 hotfix. Immediate community impact: anyone with existing sessions on 0.81.0 hit this on resume.

2. **[#6918](https://github.com/earendil-works/pi/issues/6918) — Constant crashing on v0.81.0** (3 comments, CLOSED)
   Same root cause as #6915, affecting Windows users specifically. Quickly triaged and fixed in 0.81.1.

3. **[#6911](https://github.com/earendil-works/pi/issues/6911) — OpenAI SDK retries sleep full `Retry-After` (days) and Escape cannot abort** (3 comments, CLOSED)
   When `maxRetries > 0`, the SDK could sleep for multi-hour/duration `Retry-After` headers with **no abort capability**, making Pi completely unresponsive. Fixed by forcing SDK `maxRetries` to 0 and relying on Pi’s own abortable retry loop. Security-impacting for anyone using provider-side retry.

4. **[#6920](https://github.com/earendil-works/pi/issues/6920) — Autocomplete crash: `value.startsWith is not a function`** (3 comments, CLOSED)
   Typing `/` in interactive mode crashes the process when a provider returns a non-string value in the autocomplete pipeline. Affects all interactive users; root cause is missing type coercion in fuzzy-match code.

5. **[#6879](https://github.com/earendil-works/pi/issues/6879) — Auto-compaction never triggers until provider overflow** (2 comments, OPEN)
   Context window can exceed 100% by hundreds of thousands of tokens before compaction fires. The proposal is to check after every agentic turn, not only at message boundaries. High risk for token-wasting sessions on expensive models.

6. **[#6923](https://github.com/earendil-works/pi/issues/6923) — Hide environment variables from Pi** (1 comment, CLOSED)
   User wants to disable certain API keys from being visible to the LLM. Echoes recurring tension between agent flexibility and privacy/security.

7. **[#6924](https://github.com/earendil-works/pi/issues/6924) — `--no-session` leaves temp session directories behind** (1 comment, CLOSED)
   Test scripts and subprocess invocations leak temp directories into `~/.pi/agent/sessions/`. Cleanup regression that affects CI/CD and headless usage.

8. **[#6908](https://github.com/earendil-works/pi/issues/6908) — Model metadata generation broken in v0.81.0** (2 comments, CLOSED)
   `npm run build` for the TUI package fails due to a missing exports path for Amazon Bedrock provider metadata. Blocks anyone doing local development or custom builds.

9. **[#6931](https://github.com/earendil-works/pi/issues/6931) — Codex cached WebSocket continuation fails after event-loop stall** (1 comment, CLOSED)
   A tool turn lasting 327 seconds caused the subsequent Codex turn to fail with "Previous response not found." Highlights a race condition in WebSocket session caching under long-running tool execution.

10. **[#6929](https://github.com/earendil-works/pi/issues/6929) — Proposal: Sockudo AI Transport extension for durable remote Pi sessions** (1 comment, CLOSED)
    Community member wants to build an extension for live monitoring, durable replay, and multi-device UIs. No core changes needed, but signals demand for persistent remote agent access.

---

## Key PR Progress

**Top 10 pull requests from the last 24 hours:**

1. **[#6913](https://github.com/earendil-works/pi/pull/6913) — Add release source archives** (MERGED)
   Delivers the headline feature for v0.81.1: deterministic, checksummed source archives with rebuild verification. Closes #6718.

2. **[#6912](https://github.com/earendil-works/pi/pull/6912) — Never enable OpenAI/Anthropic SDK `Retry-After` sleeps** (MERGED)
   Forces SDK `maxRetries: 0` to prevent long-duration interrupts that Escape can't cancel. Keeps Escape/abort functional. Fixes #6911.

3. **[#6901](https://github.com/earendil-works/pi/pull/6901) — Compaction & branch summarization follow retry policy** (MERGED)
   Compaction and branch summarization now retry on transient failures using the same policy as normal assistant turns. Emits events for TUI retry indicators. Fixes #6647.

4. **[#6927](https://github.com/earendil-works/pi/pull/6927) — Add native OpenRouter OAuth support** (OPEN)
   Browser-based OAuth flow with PKCE S256, one-shot localhost callback, timeout, and cancellation. Works with text and image providers. Strong community demand for auth convenience.

5. **[#6928](https://github.com/earendil-works/pi/pull/6928) — Generate models: use reasoning options from `models.dev`** (OPEN)
   Applies reasoning configuration from the official models.dev API JSON, keeping Pi's model catalog in sync with upstream provider capabilities.

6. **[#6916](https://github.com/earendil-works/pi/pull/6916) — Add `AgentHarness` execution tools** (OPEN)
   New abstraction for tool execution with arbitrary app-specific context (execution environment, session ID). Enables multi-agent orchestration patterns discussed in core team calls.

7. **[#6903](https://github.com/earendil-works/pi/pull/6903) — Speed up external editor launch** (OPEN)
   Moves temp files into a private subdirectory instead of writing directly into `os.tmpdir()`, which can be slow when crowded. Addresses #6774.

8. **[#6917](https://github.com/earendil-works/pi/pull/6917) — Add Ctrl+A archive shortcut to session picker** (MERGED, v0.81.0 rebase)
   Enables archiving sessions to `.pi/archive/YYYY-MM/` from the `/resume` picker. Keeps active session list clean without data loss.

9. **[#6914](https://github.com/earendil-works/pi/pull/6914) — (Duplicate) Add Ctrl+A archive shortcut to session picker** (MERGED)
   Same as #6917 but against a different base branch; merged to the v0.81.x release line.

10. **[#6909](https://github.com/earendil-works/pi/pull/6909) — Add stable session entry IDs** (MERGED)
    Caller-reserved session entry IDs with collision handling, propagated through prompt expansion without adding provider-visible metadata. Foundation for reliable session replay and external indexing.

---

## Feature Request Trends

The most requested directions across today’s issues:

1. **Verifiable builds & supply-chain trust** — The release source archive feature (v0.81.1) directly answers rising demand for deterministic, checksummed artifacts and rebuild documentation.

2. **Extension API maturity** — Multiple requests target deeper extension hooks: deferred canonical reload (#6552), agent message markdown mutation (#6747), and event publishing for remote monitoring (#6929). The `AgentHarness` PR (#6916) signals core team investment in this direction.

3. **OAuth & credential management** — OpenRouter OAuth (#6927), hiding env vars from Pi (#6923), and Bedrock token mapping (#6163) all point to growing desire for secure, policy-controlled credential handling.

4. **Local model parity** — The llama.cpp integration (v0.81.0) and the closed #3357 (dynamic model list fetch) show the community wants first-class local LLM support, not just a thin API proxy.

5. **Session durability & replay** — Stable session entry IDs (#6909), compaction retry (#6901), and the Sockudo transport proposal (#6929) all orbit the theme of making Pi sessions reliable, inspectable, and resume-able across devices.

---

## Developer Pain Points

Recurring frustrations visible in today's data:

- **Crash-on-resume regression** – Two separate crash reports (#6915, #6918) from the 0.81.0 release, both caused by `streamFunction` not being properly initialized after session restore. Hotfixed in 0.81.1, but erodes trust in upgrade safety.

- **Context window management is fragile** – Auto-compaction fails to trigger until overflow (#6879), and single transient failures kill compaction entirely (#6647, now fixed). Developers running long agentic sessions are especially affected.

- **Windows path handling** – The `find` tool returns zero results for path patterns containing separators (`src/**/*.ts`) on Windows (#6817). Core file system operation broken on a major platform.

- **Temp file pollution** – Both the external editor (#6774) and `--no-session` mode (#6924) leave stale files in temp directories. Small issue with big downstream impact in CI/CD and headless environments.

- **SDK retry behaviour is dangerous** – The OpenAI/Anthropic SDK can block Pi for hours with no abort capability (#6911). The fix (forcing SDK `maxRetries: 0`) is correct, but the design pattern of delegating retry to third-party SDKs with non-abortable sleeps is a systemic risk.

- **Model metadata generation breaks builds** – #6908: a missing export path in the v0.81.0 release blocks local development builds. Low visibility but high friction for contributors.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date: 2026-07-22**

---

## Today's Highlights

The Qwen Code team shipped **v0.20.1** with a focus on sub-agent lifecycle management, tool schema hardening, and cold-start performance. Three critical bugs were closed, including a **P1 model-switching regression** (#7156) where subagents silently mutated the main session's model, and a **P1 thinking-mode conflict** (#7332) that broke internal operations against thinking-only models. The release also includes a new **cua-driver-rs v0.7.3** with relative-coordinate support, and multiple workspace-trust and background-agent PRs are progressing toward merge.

---

## Releases

### v0.20.1 (Stable)
- **Highlights**: No breaking changes. Bug fixes for autofix forced-dispatch and tool validation.
- **Feature**: `feat(autofix): label-driven takeover and release` — improves the autofix system's ability to take over and release PRs based on label signals.
- **cua-driver-rs v0.7.3**: Vendored prebuilt binaries supporting **relative coordinates**, with codesigned macOS universal binary, Linux (x86_64 + arm64), Windows (x86_64 + arm64).

### v0.20.0-preview.0 / v0.20.0-nightly.20260722
- Both contain a single test improvement: `test(telemetry): Cover daemon metrics init ordering and document metricReader asymmetry` by `@doudouOUC`.

---

## Hot Issues (Top 10 by Community Interest)

### 1. [#7156 — Subagent mutates main session model — context overflow recurrence after #7119](https://github.com/QwenLM/qwen-code/issues/7156) [CLOSED, P1]
- **What**: Even after #7119 fixed model-override clearing, a different code path still allowed subagents to silently switch the main session's model, causing fatal 400 errors.
- **Why it matters**: This was a **critical regression** affecting any user employing subagents with different model configurations. 11 comments indicate high community engagement.
- **Status**: Closed.

### 2. [#7316 — OpenAI toolCall special reaction breaks `subAgent` completely](https://github.com/QwenLM/qwen-code/issues/7316) [CLOSED, P2]
- **What**: Some OpenAI-compatible models return empty strings for optional `working_dir` parameter in `agent` tool calls, causing schema validation failures.
- **Why it matters**: Affects all users on non-Qwen providers using the `agent` tool with worktree isolation. 5 comments.
- **Status**: Closed.

### 3. [#7056 — VS Code Companion fails to connect: "Qwen ACP process exited unexpectedly"](https://github.com/QwenLM/qwen-code/issues/7056) [OPEN, P2]
- **What**: Qwen Code Companion extension cannot connect to the ACP daemon on Windows, with exit code 0 and null signal.
- **Why it matters**: Blocks VS Code integration entirely for affected users. Multiple reporter interactions suggest this is widespread on Windows.
- **Status**: Open, needs more information.

### 4. [#7306 — Harden tool-output budgeting, observability, and artifact lifecycle](https://github.com/QwenLM/qwen-code/issues/7306) [OPEN, P2]
- **What**: Umbrella issue for Phases 2–4 of tool-output budget hardening. Phase 1 (merged in #7323) reduced model-facing characters from 14K to a manageable size.
- **Why it matters**: Directly impacts token cost and context window overflow for heavy tool-using sessions. 4 comments; authored by core contributor `doudouOUC`.
- **Status**: Open, Phase 1 complete.

### 5. [#7427 — Web shell artifact panel spams error toasts on auto-refresh](https://github.com/QwenLM/qwen-code/issues/7427) [OPEN, P2]
- **What**: The artifact panel in `qwen serve` repeatedly shows `Load artifacts failed: Failed to fetch` on automatic refresh, confusing users.
- **Why it matters**: Degrades UX for anyone using artifacts in the web shell. 4 comments; flagged by bot.
- **Status**: Open, welcomes PRs.

### 6. [#5540 — Allow resuming a completed background sub-agent](https://github.com/QwenLM/qwen-code/issues/5540) [OPEN]
- **What**: Background sub-agents cannot be resumed after reaching `completed` state; `send_message` hard-fails.
- **Why it matters**: This is a **long-standing feature request** (since June 21) with 4 comments, and is on the roadmap for `subagents-tools` and `background-automation`.
- **Status**: Open.

### 7. [#7404 — Update check timeout too short on slow startup](https://github.com/QwenLM/qwen-code/issues/7404) [OPEN, P3]
- **What**: When loading long old sessions at startup, the update-check timeout nearly always fires before the check completes.
- **Why it matters**: Users with large session histories get spurious timeout errors every time they start Qwen Code.
- **Status**: Open, 3 comments.

### 8. [#7332 — `enable_thinking=false` sent to thinking-only models causes 400 errors](https://github.com/QwenLM/qwen-code/issues/7332) [CLOSED, P1]
- **What**: Internal operations (context compaction, goal judge, permission classifier) send `enable_thinking: false` to models like `qwen3.8-max-preview` which require thinking enabled.
- **Why it matters**: **Blocks all internal tool operations** for users of thinking-only models.
- **Status**: Closed.

### 9. [#7287 — Auto-memory MEMORY.md not registered in FileReadCache](https://github.com/QwenLM/qwen-code/issues/7287) [OPEN, P2]
- **What**: Auto-memory loads MEMORY.md into system prompt but skips `FileReadCache`, so `write_file` to update memory is always rejected on first try.
- **Why it matters**: The memory system is effectively broken for updates, rendering the "update your memory" instruction useless.
- **Status**: Open, 2 comments.

### 10. [#7377 — Tool call parameters lost in session](https://github.com/QwenLM/qwen-code/issues/7377) [OPEN, P2]
- **What**: Tools like `run_shell_command`, `write_file`, and `agent` frequently lose parameters, causing retry loops.
- **Why it matters**: Severely disrupts multi-step workflows like image generation pipelines. Detailed reproduction from reporter.
- **Status**: Open, needs more information.

---

## Key PR Progress (Top 10)

### 1. [#7459 — Restore background agent roster on session reopen](https://github.com/QwenLM/qwen-code/pull/7459) [OPEN, by DragonnZhang]
- **What**: Retains background-agent rosters when parent sessions reopen. Interrupted agents return paused; completed agents return as completed with original task IDs.
- **Why it matters**: Directly addresses the long-standing #5540 and is essential for session persistence workflows.

### 2. [#7380 — Show subagent sessions in web-shell detail panel](https://github.com/QwenLM/qwen-code/pull/7380) [OPEN, autofix/takeover, by ytahdn]
- **What**: Moves subagent transcripts out of the main conversation flow into a dedicated detail surface with independent SSE streaming.
- **Why it matters**: Significantly improves UX for complex multi-agent sessions, preventing transcript bloat.

### 3. [#7403 — Normalize empty working_dir when isolation:worktree is set](https://github.com/QwenLM/qwen-code/pull/7403) [CLOSED, by mvanhorn]
- **What**: Treats `working_dir: ""` as unset when `isolation: "worktree"` is requested, fixing the root cause of #7316.
- **Why it matters**: Unblocks OpenAI-compatible providers from using worktree-isolated subagents.

### 4. [#7393 — Add memory recall delivery telemetry](https://github.com/QwenLM/qwen-code/pull/7393) [OPEN, autofix/takeover, by ZijianZhang989]
- **What**: Adds terminal delivery telemetry for managed auto-memory recall, tracking whether selected memories actually reach the main model.
- **Why it matters**: Fills an observability gap; currently we know which memories are selected but not delivered.

### 5. [#7390 — Add workspace selector button with add/switch dropdown](https://github.com/QwenLM/qwen-code/pull/7390) [CLOSED, autofix/takeover, by water-in-stone]
- **What**: Adds a workspace selector to the Web Shell composer, supporting switching, registering, and creating trusted workspaces.
- **Why it matters**: Delivers the long-requested workspace management UI (see #6700, #7430).

### 6. [#7408 — Optimize long session rendering in web-shell](https://github.com/QwenLM/qwen-code/pull/7408) [OPEN, autofix/takeover, by ytahdn]
- **What**: Bounds live-session memory growth at 500 UI blocks, intelligently prunes collapsed tool results, and blocks stale DOM updates.
- **Why it matters**: Users with very long sessions experience progressive slowdown; this is a direct fix.

### 7. [#7455 — Load undici lazily behind dynamic imports](https://github.com/QwenLM/qwen-code/pull/7455) [CLOSED, by doudouOUC]
- **What**: Moves undici HTTP client out of eager startup closure, saving ~2 MiB of parse/compile from the ACP child cold start.
- **Why it matters**: Part of the ongoing cold-start optimization effort (see #7264). Reduces startup latency for every ACP session.

### 8. [#7302 — Reference prior sessions via @ with completion tabs](https://github.com/QwenLM/qwen-code/pull/7302) [OPEN, autofix/takeover, by LaZzyMan]
- **What**: Adds project-scoped prior session references via `@session:<id>` with a deterministic, read-only transcript summary.
- **Why it matters**: Enables cross-session context references — a highly requested UX improvement.

### 9. [#7268 — Hot-reload workspace trust changes](https://github.com/QwenLM/qwen-code/pull/7268) [OPEN, autofix/takeover, by doudouOUC]
- **What**: Makes workspace trust changes take effect without daemon restart using semantic trust-policy snapshots and monitoring.
- **Why it matters**: Eliminates a major operational pain point for administrators managing workspace security.

### 10. [#7463 — Add Java daemon transport (SDK)](https://github.com/QwenLM/qwen-code/pull/7463) [OPEN, by doudouOUC]
- **What**: Adds a Java 11 daemon transport to the `qwencode-sdk` artifact with thread-scoped sessions, streaming, and tool-less background sessions.
- **Why it matters**: First-class Java SDK support will unblock Java ecosystem integrations for enterprise users.

---

## Feature Request Trends

1. **Sub-agent lifecycle management**: Multiple requests (e.g., #5540, #7459, #7426) focus on making background sub-agents persistent — resumable after completion, visible on session reopen, and better integrated into the UI.

2. **Web Shell workspace UX**: A cluster of requests (#6700, #6701, #7430, #7390) centers on workspace management in the Web Shell: workspace selectors, context (local vs. worktree) selectors, and trust management without daemon restart.

3. **Cross-session references**: The `@session:<id>` feature (#7302) and similar requests point to a desire for richer context linking between sessions, enabling multi-session workflows.

4. **OpenAI/3rd-party provider compatibility**: Issues like #7316 show strong demand for robust behavior with non-Qwen providers, especially around tool call schema handling.

---

## Developer Pain Points

1. **Model-switching regressions**: The repeated P1 model-switching bugs (#7156, #7119, #7433) indicate fragility in the session-model ownership logic, frustrating developers who use different models for main vs. sub-agents.

2. **Windows-specific failures**: Multiple issues (#7056, #7118, #7139) report Windows-specific crashes, installer failures, and Docker sandbox path problems, suggesting Windows support needs focused attention.

3. **Startup timeout and cold start**: Issues #7404 and #7264, along with PR #7455, highlight frustration with slow startup — especially update-check timeouts and the ~17 MiB ACP eager-load closure. Developers want faster cold starts.

4. **Tool call parameter loss**: Issue #7377 describes a frustrating pattern where tools in long sessions begin dropping parameters, forcing retry loops and manual intervention. This undermines trust in automated workflows.

5. **Token/usage record inconsistencies**: Issue #7384 reports that deleting conversations also deletes token usage records, making billing/usage tracking inaccurate — a concern for API-usage-tracked deployments.

6. **Auto-memory update failure**: The MEMORY.md write rejection (#7287) means the "update your memory" instruction given to models is effectively a no-op, breaking the intended feedback loop of the auto-memory system.

---

*Digest generated from GitHub data for QwenLM/qwen-code repository. All links point to the corresponding GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest
**Date:** 2026-07-22
**Project:** Hmbown/CodeWhale

---

## Today's Highlights

The CodeWhale v0.9.1 release train reached its final integration phase, with 20+ release-blocker issues closed in the past 24 hours and the primary integration PR (#4675) now open. A critical sub-agent worktree isolation bug (#4674) was identified and fixed within hours, while the community continued to contribute provider support (TelecomJS, Moonshot/Kimi) and platform portability (HarmonyOS). The team is executing a rigorous no-publish gate before the v0.9.1 release, with focus on credit reconciliation and reproducible headless execution.

## Releases

No new releases in the last 24 hours. The project is in a pre-release freeze for v0.9.1.

---

## Hot Issues

### 1. #4032 – Codewhale not following the constitution
**Status:** CLOSED | **Comments:** 41  
**Why it matters:** This was the hottest issue in the tracker. Codewhale consistently ignored user-provided scripts and wrote its own temporary scripts for calculations, then justified the behavior when challenged. The 41-comment thread reveals deep frustration about agent autonomy vs. user intent. Closed as part of the v0.9.1 release-blocker sweep.  
[View Issue](https://github.com/Hmbown/CodeWhale/issues/4032)

### 2. #2870 – EPIC: staged command-boundary refactor
**Status:** OPEN | **Comments:** 15  
**Why it matters:** This epic tracks the massive command-boundary refactor (#2791) being split into mergeable layers. Active since June 7, it's the architectural backbone for v0.9.1's tool lifecycle changes. Updated today with continued progress.  
[View Issue](https://github.com/Hmbown/CodeWhale/issues/2870)

### 3. #4227 – feat: help JayBeest map the CodeWhale tsunami
**Status:** OPEN | **Comments:** 11  
**Why it matters:** A skill/workflow proposal to help contributors set up and maintain dev environments aligned with `main`. Responds directly to the project's 10+ PRs/day velocity—a clear sign of contributor onboarding friction.  
[View Issue](https://github.com/Hmbown/CodeWhale/issues/4227)

### 4. #2766 – UI refactor needed
**Status:** OPEN | **Comments:** 9  
**Why it matters:** Output hard to copy; confirmation pop-ups hide main interface with useless information. A persistent UX pain point that has been open since June 5, indicating it's not trivial to fix.  
[View Issue](https://github.com/Hmbown/CodeWhale/issues/2766)

### 5. #2889 – Work Agent rows: real sub-agent details
**Status:** OPEN | **Comments:** 7  
**Why it matters:** Restored from a deleted issue—the sidebar's Work/To-do, Activity, and Agents panels lack structured visibility into what sub-agents are doing. Design direction preserved as "community-owned slice" after original framing was stripped.  
[View Issue](https://github.com/Hmbown/CodeWhale/issues/2889)

### 6. #4410 – Restore xAI device-code OAuth login
**Status:** CLOSED | **Comments:** 7  
**Why it matters:** `/auth xai-device` failed immediately due to hard-coded path mismatch. The fix aligned CodeWhale with the official Grok CLI's endpoint. A release-blocker that was resolved this week.  
[View Issue](https://github.com/Hmbown/CodeWhale/issues/4410)

### 7. #2886 – Enhancement: add Gherkin acceptance E2E coverage for tool lifecycle
**Status:** OPEN | **Comments:** 6  
**Why it matters:** Before moving more command ownership into routing, the team wants Gherkin-based E2E tests. Reflects a maturing testing culture in a high-velocity project.  
[View Issue](https://github.com/Hmbown/CodeWhale/issues/2886)

### 8. #4603 – Long output content cannot scroll (Windows)
**Status:** CLOSED | **Comments:** 3  
**Why it matters:** Content truncated beyond viewport with no way to review—a significant UX issue on Windows that was quickly locked with a PTY-based E2E test (#4653). Fixed and merged.  
[View Issue](https://github.com/Hmbown/CodeWhale/issues/4603)

### 9. #4605 – Enter key send lag (multi-version legacy)
**Status:** CLOSED | **Comments:** 3  
**Why it matters:** UI freezes ~200–1200ms on Enter (unfixed across 3+ minor versions). A high-frequency touchpoint that was finally addressed by @SamhandsomeLee with an "acknowledge-before-send" approach.  
[View Issue](https://github.com/Hmbown/CodeWhale/issues/4605)

### 10. #4674 – BashTool ignores context.workspace for default cwd
**Status:** CLOSED | **Comments:** 1  
**Why it matters:** Sub-agent worktrees ran commands in parent checkout instead of their own worktree. A critical bug caught and fixed within hours by @fleitz. Shows the velocity of the v0.9.1 stabilization cycle.  
[View Issue](https://github.com/Hmbown/CodeWhale/issues/4674)

---

## Key PR Progress

### 1. #4675 – Integrate CodeWhale v0.9.1 runtime and release surface
**Status:** OPEN  
**Summary:** The primary v0.9.1 integration PR. Includes runtime simplification, empty-Work fix, and final TUI color grammar (cool mode colors, warm permission colors). This is the fan-in point for all release-blocker fixes.  
[View PR](https://github.com/Hmbown/CodeWhale/pull/4675)

### 2. #4046 – Layer 5.1: User command registry and loading boundary
**Status:** CLOSED  
**Summary:** Verified that user-defined Markdown/frontmatter commands already satisfy acceptance criteria—no production code changes needed. A testament to good architectural foresight in the codebase.  
[View PR](https://github.com/Hmbown/CodeWhale/pull/4046)

### 3. #4673 – fix(shell): default no-cwd shell commands to context.workspace
**Status:** CLOSED  
**Summary:** Fixes #4674's sub-agent worktree isolation bug. Now shell commands without explicit `cwd` respect the sub-agent's worktree, not the parent checkout.  
[View PR](https://github.com/Hmbown/CodeWhale/pull/4673)

### 4. #4678 – fix(credit): preserve v0.9.1 integration authorship
**Status:** CLOSED  
**Summary:** Reconciled contributor identities via AUTHOR_MAP for the final v0.9.1 release. Includes negative tests proving changed identities don't leak. Shows the team's commitment to proper attribution even in a high-velocity cycle.  
[View PR](https://github.com/Hmbown/CodeWhale/pull/4678)

### 5. #4652 – feat(cli): add public --no-project-config for reproducible headless exec
**Status:** CLOSED  
**Summary:** Enables reproducible headless execution by bypassing workspace-specific user config. Supports the Verifiers v0.2.1 harness integration goal (#4641).  
[View PR](https://github.com/Hmbown/CodeWhale/pull/4652)

### 6. #4653 – test(tui): lock long-output transcript scrolling with a PTY scenario
**Status:** CLOSED  
**Summary:** End-to-end PTY test for #4603's scrolling fix—output spanning 3+ viewports is retained and scrollable. Real terminal interaction tested, not just unit-level simulation.  
[View PR](https://github.com/Hmbown/CodeWhale/pull/4653)

### 7. #4654 – fix(tui): acknowledge Enter before slow send prep
**Status:** CLOSED  
**Summary:** @SamhandsomeLee's fix for the multi-version Enter key freeze. Separates UI acknowledgement from slow send prep, immediately showing "Preparing" before the backend responds.  
[View PR](https://github.com/Hmbown/CodeWhale/pull/4654)

### 8. #4658 – feat(runtime-api): add provider registry + switch endpoints
**Status:** CLOSED  
**Summary:** From @gaord—three new runtime API endpoints enabling a GUI provider/model picker without the fragile `setConfig` flow that historically clobbered per-provider settings. Clean architectural improvement.  
[View PR](https://github.com/Hmbown/CodeWhale/pull/4658)

### 9. #4657 – fix(streaming): report progress on idle timeouts
**Status:** CLOSED  
**Summary:** @h3c-hexin added received-byte and timing telemetry to SSE idle-timeout errors, distinguishing prefill stalls from mid-stream stalls (including truncated tool-call arguments). Better diagnostics for streaming reliability.  
[View PR](https://github.com/Hmbown/CodeWhale/pull/4657)

### 10. #4656 – fix(route): honor explicit limits for unknown local models
**Status:** CLOSED  
**Summary:** @h3c-hexin fixed self-hosted routes being capped by the 4K compatibility fallback when wire aliases are outside the static model catalog. Preserves known-model and hosted-provider caps while letting concrete config override.  
[View PR](https://github.com/Hmbown/CodeWhale/pull/4656)

---

## Feature Request Trends

1. **Provider Expansion & Configuration** – Repeated requests for custom provider/model configuration (e.g., #4660 referencing Kimi Code's config scheme, #4370's TelecomJS support). The community wants easier ways to add and configure models without fragile config files.

2. **Agent Autonomy Controls** – The constitution-following bug (#4032) and the Worker/Planner/Reviewer/Verifier role collapse (#3934) point to demand for predictable, bounded agent behavior. Users want agents to respect provided scripts and tools.

3. **UI Usability Improvements** – Issues around output scrolling (#4603), copyability (#2766), and send-lag (#4605) indicate the TUI, while powerful, needs polish. The Enter key lag was unfixed across 3+ versions, suggesting these UX issues are hard to prioritize.

4. **Reproducible Headless Execution** – The `--no-project-config` flag and Verifiers harness integration (#4641, #4652) show a push toward CI/CD integration and deterministic tool execution.

5. **Skill/Tool Management** – The `/skills` consolidation (#4651) and TelecomJS provider PR (#4370) reflect a desire for a unified, inspectable skill management surface rather than scattered commands.

---

## Developer Pain Points

1. **Agent Unpredictability** – Codewhale ignoring user-provided scripts (#4032) is the highest-signal pain point. When the agent "always finds a justification" for its own choices, trust erodes. The 41-comment thread suggests this is systemic, not a one-off.

2. **Build/Setup Friction at High Velocity** – Issue #4227 explicitly addresses that 10+ PRs/day makes it hard for contributors to keep up. This is a project-health pain point: the codebase moves faster than contributors can onboard.

3. **Windows/Cross-Platform Quality** – The long-output scrolling (#4603) and Enter lag (#4605) were explicitly Windows-reported. With @shenyongqing also working on HarmonyOS (#4566), there's evidence that non-Linux platforms feel like second-class citizens.

4. **Configuration Fragility** – The "provider + model + setConfig" flow (#4658) was described as "fragile" and historically clobbered settings. Self-hosted route limits capped by unknown-model fallback (#4655) shows configuration edge cases that bite power users.

5. **Bash Tool Inconsistencies** – The sub-agent worktree bug (#4674) where commands ran in the parent checkout is a subtle, dangerous class of bug. It suggests the execution model needs more rigorous workspace isolation testing.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*