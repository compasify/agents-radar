# AI CLI Tools Community Digest 2026-09-18

> Generated: 2026-09-18 00:45 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/earendil-works/pi)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# **Cross-Tool AI CLI Ecosystem Comparison Report**  
*Generated: 2026-09-18 | Data Source: GitHub Community Digests*

---

### **1. Ecosystem Overview**

The AI CLI developer tools landscape in Q3 2026 reflects a maturing, high-stakes ecosystem where stability, extensibility, and session resilience are now central to user adoption—beyond raw model performance. Tools are increasingly converging on agent-based workflows, with strong demand for persistent state, cross-device continuity, and secure sandboxing. While OpenAI Codex and Claude Code lead in feature velocity and enterprise integration, open-source players like OpenCode and Pi are gaining traction through transparency and local-first design. The community is shifting from novelty-driven experimentation toward production-grade reliability, signaling a critical inflection point in AI tooling maturity.

---

### **2. Activity Comparison**

| Tool | Issues Count (Top 10) | PRs Merged (Last 24h) | Discussions | Release Status (Today) |
|------|------------------------|--------------------------|-------------|-------------------------|
| **Claude Code** | 10 | 5 (Open + Closed) | N/A | ✅ v2.1.275 released |
| **OpenAI Codex** | 10 | 10 (All closed) | 🟢 3 active threads | ✅ `v0.155.0` stable; `v0.156.0-alpha` in progress |
| **Gemini CLI** | 10 | 10 (All closed) | N/A | 🔁 Nightly build (`v0.62.0-nightly`) |
| **GitHub Copilot CLI** | 10 | 0 | N/A | ✅ v1.0.86 released |
| **OpenCode** | 10 | 10 (All closed) | N/A | ❌ No release |
| **Pi** | 10 | 10 (All closed) | N/A | ❌ No release |
| **Qwen Code** | 10 | 10 (Closed/Opened) | N/A | ✅ v0.24.0 & nightly released |

> 🔍 *Note:* All tools except **OpenAI Codex** report no discussion activity in this digest. Some repos (e.g., OpenCode, Pi, Qwen Code) use Discussions as their primary engagement channel but are not reflected here due to absence of threads in dataset.

---

### **3. Shared Feature Directions**

Across the ecosystem, five core themes dominate community feedback:

| Requirement | Tools Affected | Notes |
|-----------|----------------|-------|
| **Session Continuity & Resumption** | Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Qwen Code | Users demand seamless recovery across reboots, device switches, and crashes — critical for long-running agents. |
| **Extensibility & Plugin Ecosystems** | Claude Code (#91870), OpenAI Codex (#26234), GitHub Copilot CLI (#4655), Qwen Code (#12053) | Native function hooks, MCP tool discovery, and plugin configuration are top-tier requests. |
| **Security & Permission Transparency** | OpenAI Codex (#46001), OpenCode (#49433), Qwen Code (#12096), Pi (#9690) | Mismatched effective vs. selected permissions, silent failures, and ACL bypasses erode trust. |
| **Agent Reliability & State Management** | Gemini CLI (#22323), OpenAI Codex (#44848), Qwen Code (#12061), Pi (#9482) | Silent success states, compaction logic errors, and state corruption undermine automation trust. |
| **Cross-Platform Stability & UX Consistency** | All tools | Windows sandbox issues (Codex, OpenCode), macOS packaging bugs (Codex, Pi), Linux PTY hangs (Gemini CLI, Pi), and focus stealing (Claude Code) remain systemic pain points. |

---

### **4. Differentiation Analysis**

| Aspect | Key Differentiators |
|------|---------------------|
| **Feature Focus** |  
- **Claude Code**: Prioritizes workflow efficiency (e.g., `send-now` keybind), IDE integration, and extensibility via plugins.  
- **OpenAI Codex**: Leading in multimodal interaction (voice input), remote control, and agent orchestration.  
- **Gemini CLI**: Focused on subagent recovery, terminal stability, and internal state fidelity.  
- **GitHub Copilot CLI**: Emphasizes custom agent configuration and repository-level instruction inclusion.  
- **OpenCode**: Pushing open access, local model discovery (mDNS), and audit-ready exports.  
- **Pi**: High emphasis on defensive programming, retry logic, and migration safety.  
- **Qwen Code**: Strong focus on ACP boundary handling, context budgeting, and output fidelity.  

| **Target User** |  
- **Enterprise/Pro Devs**: OpenAI Codex, Claude Code (advanced agents, security).  
- **Open-Source Enthusiasts**: OpenCode, Pi, Qwen Code (transparency, local execution).  
- **DevOps & CI/CD Teams**: GitHub Copilot CLI, Qwen Code (structured outputs, export formats).  
- **Remote & Distributed Teams**: OpenAI Codex (remote control), OpenCode (LAN/mDNS).  

| **Technical Approach** |  
- **Closed-Source (with extensibility)**: Claude Code, OpenAI Codex → rich plugin APIs, proprietary backends.  
- **Open-Source & Transparent**: OpenCode, Pi, Qwen Code → public PRs, auditability, community-driven fixes.  
- **Hybrid Model**: GitHub Copilot CLI → GitHub-native, but supports local plugins and self-hosted models.

---

### **5. Community Momentum & Maturity**

| Indicator | Most Active/Mature Tools |
|--------|--------------------------|
| **Release Velocity** | ✅ **OpenAI Codex** – Two releases in 24 hours (stable + alpha); rapid iteration on agent orchestration.  
| **Issue Volume & Engagement** | ⭐ **Claude Code** – Highest comment volume (300+), strongest sentiment on extensibility (#91870).  
| **PR Contribution Rate** | ✅ **OpenAI Codex**, **Gemini CLI**, **Pi** – 10+ PRs merged daily; consistent infrastructure improvements.  
| **Community Maturity Signal** | 🟡 **Qwen Code**, **OpenCode** – High-quality technical discussions around context management, token budgets, and safe migrations indicate deep engineering focus.  
| **Stagnation Risk** | ⚠️ **GitHub Copilot CLI** – Zero new PRs despite 10 active issues; potential slowdown post-v1.0.86.  

> 💡 *Insight*: OpenAI Codex and Claude Code show signs of being "feature-complete" in core areas, while open-source tools (Pi, OpenCode, Qwen Code) are actively building foundational reliability and security layers—indicating a shift from innovation to stabilization.

---

### **6. Trend Signals**

1. **From "What can AI do?" to "How reliable is it?"**  
   - Over 40% of top issues relate to silent failures, false success states, or data loss (e.g., Pi #9482, Qwen Code #12072, Gemini CLI #22323). This signals that developers now expect AI tools to be **predictable and auditable**, not just powerful.

2. **Local First, Cross-Provider Integration**  
   - Demand for mDNS discovery (OpenCode), Ollama/OpenRouter support (Codex), and OpenAI-compatible gateways (Pi) shows a move toward **decentralized, self-hosted AI ecosystems**—reducing vendor lock-in.

3. **Security by Design is Non-Negotiable**  
   - Multiple reports of permission bypasses (#15921), ACL misconfigurations (#46001), and unredacted memory logs (#26525) highlight that **security must be baked into the stack**, not bolted on.

4. **Agent Workflows Require Engineering Discipline**  
   - Requests for structured output exports (#48822), deterministic redaction (#26525), and failure-aware retries (#9724) reveal that **autonomous agents are entering production use cases**, demanding robust error handling and observability.

5. **UX Is Now a Core Technical Challenge**  
   - Focus on non-intrusive UI (focus stealing, drag-drop), TUI clarity, and shell behavior confirms that **user experience is no longer secondary**—it’s a first-class engineering constraint.

---

### **Conclusion: Strategic Recommendations for Developers & Decision-Makers**

- **For Enterprises**: Prioritize **OpenAI Codex** or **Claude Code** for advanced agent workflows and remote collaboration—but demand clear SLAs on session persistence and security.
- **For Open-Source & Privacy-Centric Teams**: Choose **OpenCode**, **Pi**, or **Qwen Code** for full auditability, local execution, and control over model routing.
- **For DevOps & CI Pipelines**: Favor **Qwen Code** (structured exports) and **OpenCode** (audit-ready JSON/CVS) for traceability and cost monitoring.
- **Avoid Tools with Regression Risks**: Be cautious with **OpenCode v1.18.30+** due to critical free-tier auth bugs and `SystemPrompt.environment` crashes.
- **Monitor Session Lifecycle Stability**: Regardless of tool, ensure your workflow accounts for resumption failures, mid-turn cancellations, and state corruption.

> ✅ **Bottom Line**: The AI CLI ecosystem has evolved beyond MVP status. Success now depends on **stability, security, and developer trust**—not just speed or features.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**  
*Data as of 2026-09-18 | Source: [anthropics/skills GitHub Repository](https://github.com/anthropics/skills)*

---

### **1. Top Skills Ranking**  
The following Skills have generated the highest community attention based on PR activity, feature novelty, and integration depth:

1. **`proofcore-contract-auditor`** (PR #1771)  
   *Functionality*: A Web3-focused Agent Skill that performs automated static analysis of Solidity and Rust smart contracts and anchors cryptographic audit proofs to the public TON Blockchain via ProofCore’s zero-storage Merkle protocol.  
   *Discussion Highlights*: High interest from blockchain developers; emphasizes trustless verification in decentralized environments.  
   *Status*: Open | [View PR](https://github.com/anthropics/skills/pull/1771)

2. **`md2video-audio`** (PR #1703)  
   *Functionality*: Converts Markdown documents into professional-grade MP4 videos with lifelike voiceovers, using Marp for slide generation and text-to-speech synthesis.  
   *Discussion Highlights*: Seen as a zero-cost content creation accelerator for educators, marketers, and technical writers.  
   *Status*: Open | [View PR](https://github.com/anthropics/skills/pull/1703)

3. **`Hivemind`** (PR #1628)  
   *Functionality*: Enables zero-cost multi-agent orchestration by delegating mechanical tasks to headless opencode workers running on free models, while Claude remains the sole planner and reviewer.  
   *Discussion Highlights*: Addresses scalability and cost efficiency in long-running agent workflows.  
   *Status*: Open | [View PR](https://github.com/anthropics/skills/pull/1628)

4. **`buffer-api`** (PR #1627)  
   *Functionality*: A portable Agent Skill for scheduling, managing, and analyzing social media posts via Buffer’s GraphQL API across any AI agent platform.  
   *Discussion Highlights*: Demonstrates growing demand for cross-platform social automation within AI agents.  
   *Status*: Open | [View PR](https://github.com/anthropics/skills/pull/1627)

5. **`scnet-hpc`** (PR #1615)  
   *Functionality*: Provides profile-based SSH and Slurm workflow support for SCNet HPC clusters, including memory, partition, and module guidance.  
   *Discussion Highlights*: Targets researchers and engineers requiring reproducible, high-performance computing access.  
   *Status*: Open | [View PR](https://github.com/anthropics/skills/pull/1615)

6. **`pyxel`** (PR #525)  
   *Functionality*: Full lifecycle support for retro game development in Python using the Pyxel engine—creation, debugging, frame inspection, and deterministic testing.  
   *Discussion Highlights*: Long-standing request with strong community backing; seen as essential for creative coding.  
   *Status*: Open | [View PR](https://github.com/anthropics/skills/pull/525)

---

### **2. Community Demand Trends**  
From Issue discussions, the most anticipated new Skill directions include:

- **Workflow Automation & Orchestration**: Strong demand for skills enabling multi-agent systems (`Hivemind`, `buffer-api`) and seamless integration with external tools.
- **Security & Trust Management**: Rising concern over trust boundary abuse (Issue #492), prompting calls for governance patterns (Issue #412) and security-aware skill design.
- **Documentation Quality Control**: Persistent demand for typographic integrity (`document-typography`, Issue #514) and avoidance of orphaned comments (`detect-orphaned-docx-comments`, PR #1734).
- **Cross-Platform & Cloud Integration**: Interest in AWS Bedrock compatibility (Issue #29), SharePoint Online handling (Issue #1175), and broader MCP exposure (Issue #16).
- **Developer Tooling & Debugging**: High demand for improved evaluation pipelines (Issue #1390), trigger detection reliability (Issue #556), and better error visibility.

---

### **3. High-Potential Pending Skills**  
These actively discussed PRs are likely candidates for imminent merge due to high relevance and clear problem-solving value:

- **`skill-creator` trigger fix** (PR #1769): Fixes critical flaw where trigger detection reports 0% recall, undermining optimization efforts.  
  [View PR](https://github.com/anthropics/skills/pull/1769)
  
- **`mcp-builder` streamable_http_client update** (PR #1742): Ensures compatibility with MCP v2+ by updating import names and header configuration.  
  [View PR](https://github.com/anthropics/skills/pull/1742)

- **`office` redlining diff decoding fix** (PR #1765): Resolves UTF-8 encoding issues in DOCX/PPTX diffs, crucial for international users.  
  [View PR](https://github.com/anthropics/skills/pull/1765)

- **`compact-memory` proposal** (Issue #1329): A symbolic notation system to compress agent state—highly relevant for long-running agents.  
  [View Issue](https://github.com/anthropics/skills/issues/1329)

---

### **4. Skills Ecosystem Insight**  
The community's most concentrated demand is for **trusted, secure, and interoperable Agent Skills that enable scalable, real-world automation without sacrificing context efficiency or developer control**—particularly in domains like Web3, documentation, and high-performance computing.

---

**Claude Code Community Digest – 2026-09-18**

---

### **1. Today's Highlights**  
The Claude Code team shipped **v2.1.275**, introducing a more secure sign-in flow for the Claude Apps Gateway and a new `send-now` shortcut (Ctrl+Enter or Ctrl+X Ctrl+S) to interrupt ongoing turns and send queued messages immediately—boosting workflow efficiency. Meanwhile, community engagement remains high, with over 300 comments across top issues, reflecting intense focus on extensibility, session continuity, and platform-specific stability.

---

### **2. Releases**  
**v2.1.275**  
- Added signed-in account display in the Claude Apps Gateway sign-in flow: users now confirm before credentials are saved, and `/status` reflects the active account.  
- Introduced **"send-now" keybind**: Ctrl+Enter or Ctrl+X Ctrl+S interrupts current turn and sends all queued messages instantly—ideal for rapid iteration during coding sessions.  
🔗 [GitHub Release v2.1.275](https://github.com/anthropics/claude-code/releases/tag/v2.1.275)

---

### **3. Hot Issues**  
| Issue | Summary & Impact | Community Reaction |
|------|------------------|--------------------|
| [#91870](https://github.com/anthropics/claude-code/issues/91870) *Mods - make Claude 10x more extensible* | Top-requested feature: native function hooks to enable deep plugin integration. Critical for developers building custom AI agents and toolchains. | 195 comments, 120 👍 — highest engagement; signals strong demand for open extensibility. |
| [#53247](https://github.com/anthropics/claude-code/issues/53247) *Claude Desktop fails to launch on Windows — orphaned Silo / Job Object* | Persistent crash bug after app failure forces logoff/reboot. Affects Windows desktop users severely. | 93 comments, 33 👍 — long-standing issue with growing urgency; affects usability. |
| [#11455](https://github.com/anthropics/claude-code/issues/11455) *Session Handoff / Continuity Support* | Users request seamless session resumption across devices and reboots—essential for long-running development tasks. | 36 comments, 25 👍 — highlights need for persistent state beyond CLI. |
| [#25128](https://github.com/anthropics/claude-code/issues/25128) *Drag and drop not working in VS Code extension chat panel* | Regression since v2.1.6; breaks UX in IDE. Works in CLI but not in extension. | 33 comments, 48 👍 — highly visible UI regression; impacts daily workflows. |
| [#15921](https://github.com/anthropics/claude-code/issues/15921) *`.claude/settings.local.json` permissions ignored in Bash/Write/Edit* | Security bypasses despite `bypassPermissions` mode—risk of unintended file access. | 31 comments, 32 👍 — raises concerns about sandbox integrity. |
| [#32726](https://github.com/anthropics/claude-code/issues/32726) *Prevent Claude panel from stealing focus* | Auto-focus disrupts typing in other editor tabs—common productivity killer. | 19 comments, 57 👍 — one of the most upvoted UX improvements. |
| [#95050](https://github.com/anthropics/claude-code/issues/95050) *Claude Desktop 2.110.0 fails to launch post-quit (exitCode: 21)* | Immediate launch failure after quit; requires restarting CoworkVMService. | 2 comments, 0 👍 — newly reported, critical for Windows stability. |
| [#94225](https://github.com/anthropics/claude-code/issues/94225) *ECONNRESET on direct ISP path with X25519MLKEM768 TLS handshake* | TLS 1.3 handshake failure on certain ISPs (e.g., Telefónica Spain), resolved via VPN. | 2 comments, 0 👍 — indicates network-level compatibility issues. |
| [#95254](https://github.com/anthropics/claude-code/issues/95254) *Remote Control shows 'offline' for own input while receiving messages* | User can't type in remote session despite receiving incoming messages—breaks real-time collaboration. | 1 comment, 0 👍 — emerging edge case in Remote Control functionality. |
| [#93438](https://github.com/anthropics/claude-code/issues/93438) *Agent dispatch with `isolation:"worktree"` causes cwd state bleed* | State leakage between parent and child sessions undermines isolation guarantees. | 1 comment, 1 👍 — security-sensitive; affects agent reliability. |

---

### **4. Key PR Progress**  
| PR | Summary | Status |
|----|--------|--------|
| [#95198](https://github.com/anthropics/claude-code/pull/95198) | Type `openPane` as `unknown` to support richer `.ui.open` return values without breaking compilation. | Open |
| [#94847](https://github.com/anthropics/claude-code/pull/94847) | Diff pane now opens only when there’s a valid file to list—prevents empty panes on irrelevant edits. | Open |
| [#87077](https://github.com/anthropics/claude-code/pull/87077) | Fixes invalid YAML frontmatter in all agents by properly quoting dialogue lines. | Open |
| [#95198](https://github.com/anthropics/claude-code/pull/95198) | Enables future rich result types in diff mod via `Promise<unknown>` return. | Open |
| [#94847](https://github.com/anthropics/claude-code/pull/94847) | Prevents premature pane opening during out-of-repo writes. | Open |
| [#87077](https://github.com/anthropics/claude-code/pull/87077) | Resolves YAML parsing errors caused by unquoted multi-line dialogues in agent descriptions. | Open |
| *(Additional PRs: No major structural changes; all related to internal fixes and type safety.)* | | |

---

### **5. Hot Discussions**  
*No discussion data provided in source.*  
→ **Omitted**  

---

### **6. Feature Request Trends**  
Top trends emerging from community feedback:  
- **Extensibility First**: Demand for **function hooks and plugins** (#91870) is dominant—developers want to build custom tools and integrate external systems.  
- **Seamless Session Continuity**: Users increasingly request **session handoff, persistence, and cross-device sync** (#11455).  
- **IDE UX Refinement**: High interest in **non-intrusive UI behavior**, including preventing focus stealing (#32726), inline image rendering (#79436), and drag-and-drop reliability (#25128).  
- **Permission & Security Controls**: Requests for **persistent site permissions**, granular `settings.local.json` enforcement (#15921), and better permission dialogs (#93156).  
- **Remote & Collaboration Tools**: Growing need for **stable Remote Control sessions** (#95254, #95231) and improved error messaging.

---

### **7. Developer Pain Points**  
Recurring frustrations include:  
- **Windows Stability**: Multiple crashes due to orphaned processes (`Silo`, `Job Object`) and launch failures post-quit (#53247, #95050).  
- **UI Intrusiveness**: Focus stealing by Claude panel (#32726) and off-screen "Show less" buttons (#77004) degrade workflow.  
- **Platform-Specific Bugs**: Drag-and-drop broken in VS Code (#25128), Linux procfs issues (#93680), and macOS vs. Windows inconsistencies (#88632).  
- **Inconsistent Permissions**: Users report that `bypassPermissions` and allowlists are ignored (#15921), raising trust concerns.  
- **Hidden Costs**: Misunderstanding of model billing—users expected per-task overrides but were billed at premium rate for full-session Fable usage (#79478).  

> 💡 *Actionable Insight*: Prioritize stable Windows launches, refine UX controls, and clarify cost models in documentation to reduce friction.

---  
*Digest generated: 2026-09-18 | Source: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# **OpenAI Codex Community Digest – 2026-09-18**

---

### **1. Today's Highlights**  
The latest release introduces experimental voice conversations with live transcription and microphone controls via `/experimental`, marking a significant step toward multimodal interaction in Codex. Meanwhile, critical stability and security fixes address persistent issues across Windows sandboxing, Computer Use functionality, and remote session management—especially for users on Intel macOS and Windows workstations.

---

### **2. Releases**

#### `rust-v0.155.0` (Stable)  
- **Experimental Voice Conversations**: Added live transcripts and microphone controls via `/experimental`—enables real-time audio input for interactive coding sessions.
- **TUI Enhancements**: Live reasoning summaries now appear in the status row; completion timestamps are shown after successful turns for better traceability.

#### `rust-v0.156.0-alpha.1`  
- Early access build focused on internal infrastructure improvements and upcoming agent orchestration enhancements. No public-facing features yet.

> 🔗 [GitHub Release v0.155.0](https://github.com/openai/codex/releases/tag/rust-v0.155.0)

---

### **3. Hot Issues**

| Issue | Summary & Significance | Community Reaction |
|------|------------------------|--------------------|
| [#26234](https://github.com/openai/codex/issues/26234) | Non-OpenAI API providers (Ollama, LM Studio, OpenRouter, AWS Bedrock) fail to expose MCP tools due to namespace serialization issues. Blocks local model integration. | ⭐️ 48 👍, 35 comments — High demand for cross-provider tool compatibility. |
| [#43375](https://github.com/openai/codex/issues/43375) | Multiple GPT-5/GPT-6 models return “Selected model is at capacity” despite no visible load. Affects both CLI and desktop apps. | ⭐️ 28 comments — Widespread user frustration; suggests backend rate-limiting or availability bugs. |
| [#24287](https://github.com/openai/codex/issues/24287) | UI hangs on "Thinking" state; stop button fails, turns vanish after restart. Critical UX failure impacting productivity. | ⭐️ 31 comments — One of the most-reported desktop app crashes; affects Pro-tier users. |
| [#40905](https://github.com/openai/codex/issues/40905) | 5-hour usage limit disrupts long-running autonomous tasks (e.g., GPT-5.6 Sol agents). Incompatible with multi-hour workflows. | ⭐️ 15 comments — Raises concerns about Pro plan limitations for advanced AI agents. |
| [#42739](https://github.com/openai/codex/issues/42739) | Local projects disappear from sidebar post-Windows update. Data intact, but UI broken. | ⭐️ 14 comments — Indicates potential file system or cache corruption during updates. |
| [#44848](https://github.com/openai/codex/issues/44848) | Daybreak safety check falsely labels active goals as stalled, halting progress. Impacts reliability of persistent tasks. | ⭐️ 8 comments — Safety systems misfiring on valid workloads; undermines trust. |
| [#45302](https://github.com/openai/codex/issues/45302) | Windows sandbox fails with corrupted `deny_read_acl_state.json`. Prevents elevated access. | ⭐️ 8 comments — Reproducible in multiple environments; likely file I/O bug. |
| [#46114](https://github.com/openai/codex/issues/46114) | Elevated sandbox fails with “requires effective :root read access” — persists even after repair/reset. | ⭐️ 3 comments — Critical blocker for enterprise-grade workflows requiring admin privileges. |
| [#24437](https://github.com/openai/codex/issues/24437) | Intel macOS x64 build lacks `computer-use` helper, disabling Appshots and Locked use. Packaging issue. | ⭐️ 10 comments — Repeated issue across versions; signals platform-specific distribution flaws. |
| [#45437](https://github.com/openai/codex/issues/45437) | Native Computer Use missing on macOS — "Any App" control unavailable despite enabled settings. | ⭐️ 2 comments — User unable to control native apps like Teams/Outlook; limits automation scope. |

---

### **4. Key PR Progress**

| PR | Summary & Impact | Status |
|----|------------------|--------|
| [#46333](https://github.com/openai/codex/pull/46333) | Handles disabled Windows sandbox accounts during cleanup — prevents stuck services. | ✅ Closed |
| [#46332](https://github.com/openai/codex/pull/46332) | Dimmed conversation recaps in TUI improve readability; removes distracting cyan color. | ✅ Closed |
| [#46331](https://github.com/openai/codex/pull/46331) | Defers network policy validation until after environment composition — avoids premature rejection. | ✅ Closed |
| [#46330](https://github.com/openai/codex/pull/46330) | Moves retry backoff logic into `codex-async-utils` — improves reusability across modules. | ✅ Closed |
| [#46328](https://github.com/openai/codex/pull/46328) | Stops persisting project trust in non-project directories — enhances privacy and reduces accidental config leakage. | ✅ Closed |
| [#46324](https://github.com/openai/codex/pull/46324) | Broadens compaction fallback to current model — prevents turn failure after model switch. | ✅ Closed |
| [#46323](https://github.com/openai/codex/pull/46323) | Adds `active_plugin_ids_at_turn_start` to analytics — enables tracking plugin usage per turn. | ✅ Closed |
| [#46319](https://github.com/openai/codex/pull/46319) | Preserves web search URLs and results in `exec --json` output — fixes data loss in automation pipelines. | ✅ Closed |
| [#46318](https://github.com/openai/codex/pull/46318) | Introduces OAuth credential manager for model gateways (e.g., Ollama, OpenRouter) — enables secure token handling. | ✅ Closed |
| [#46297](https://github.com/openai/codex/pull/46297) | Extends catalog descriptions to all V2 multi-agent tools — ensures consistent UX across `spawn_agent`, `send_message`, etc. | ✅ Closed |

---

### **5. Hot Discussions**

#### **Ideas**
- [#9200](https://github.com/openai/codex/discussions/9200): *Remote control Codex from ChatGPT app* — 50 comments, 191 👍. Users want headless daemon mode + mobile UI control, already achieved via SSH/Tailscale. A strong signal for future remote orchestration.
- [#46233](https://github.com/openai/codex/discussions/46233): *Support GitLab merge requests in desktop app* — request to extend PR workflow beyond GitHub. Popular among DevOps teams using self-hosted GitLab.
- [#46170](https://github.com/openai/codex/discussions/46170): *Configurable timezone for TUI timestamps* — users in UTC+8 find UTC timestamps misleading. Simple UX fix with high impact.

#### **Q&A**
- [#46001](https://github.com/openai/codex/discussions/46001): *Verify selected vs effective permission profile* — users report mismatch between GUI selection and actual task permissions. Critical for security audits.
- [#45938](https://github.com/openai/codex/discussions/45938): *Can PreToolUse substitute tool results?* — reveals a design boundary: hooks can block or rewrite calls but not override outcomes. Developers seeking deeper control over agent behavior.
- [#46121](https://github.com/openai/codex/discussions/46121): *Hallucination rates up to 95%* — users express concern about unreliability. High-profile discussion highlighting trust issues in advanced models.

#### **Show and tell**
- [#45392](https://github.com/openai/codex/discussions/45392): *Fishbowl: read-only viewer for Codex rollout files* — open-source tool to inspect agent session history. Highlights growing need for transparency and auditability.
- [#44291](https://github.com/openai/codex/discussions/44291): *Brain Scanner: understand agent decisions before next task* — helps developers contextualize AI-generated code. Reflects rising demand for explainability tools.

---

### **6. Feature Request Trends**

Based on top Issues and Discussions, the following themes dominate community demand:

- **Cross-Platform Tooling**: Consistent support for local models (Ollama, LM Studio), AWS Bedrock, and OpenRouter — especially around MCP tool discovery and namespace flattening.
- **Remote & Headless Control**: Strong interest in running Codex in daemon mode and controlling it via mobile apps or CLI, enabling distributed development workflows.
- **Enhanced Automation & Debugging**: Demand for event-driven wakeups (`#32188`), preserved JSON outputs (`#46319`), and better telemetry (plugin inventory tracking).
- **Improved Session Management**: Persistent goal restoration, reliable session resumption, and stable project sidebar visibility.
- **Security & Permissions Transparency**: Clear verification of effective vs. selected permissions, granular control over sandbox access, and audit trails.

---

### **7. Developer Pain Points**

Recurring frustrations highlight systemic challenges:

- **Computer Use Breakage on Intel macOS**: Missing `computer-use` helpers continue to disable Appshots, Locked use, and screen control — a known packaging issue affecting Mac users.
- **Windows Sandbox Failures**: Elevated sandbox errors (`#45302`, `#46114`) prevent critical operations, even after repairs — indicating deep OS-level integration problems.
- **Unreliable Long-Running Tasks**: 5-hour usage limits interrupt autonomous agents (`#40905`), undermining use cases for GPT-5.6 Sol and similar advanced models.
- **UI Freezes & State Corruption**: Desktop app hangs (“Thinking” loop), invisible turns, and lost project state after updates (`#24287`, `#42739`) severely impact productivity.
- **Inconsistent Plugin Behavior**: Tools disappear mid-session (`#42907`), and recommended plugins cannot be disabled (`#38185`), reducing developer control.
- **Poor Error Messaging**: Generic “capacity” errors (`#43375`) and cryptic ACL failures obscure root causes, slowing troubleshooting.

---

*Digest compiled from GitHub activity (2026-09-18). For full context, refer to linked issues, PRs, and discussions.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-09-18

---

### **Today's Highlights**  
The Gemini CLI team made significant strides in agent reliability and terminal stability, with critical fixes for subagent recovery, shell execution hangs, and PTY lifecycle management. A key PR resolved a long-standing issue where subagents incorrectly reported success after hitting `MAX_TURNS`, masking interruptions. These updates improve trust in autonomous workflows and reduce friction during complex development tasks.

---

### **Releases**  
**v0.62.0-nightly.20260917.g6a466a7e2**  
*Full changelog*: [Compare v0.62.0-nightly.20260916.g6a466a7e2...v0.62.0-nightly.20260917.g6a466a7e2](https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260916.g6a466a7e2...v0.62.0-nightly.20260917.g6a466a7e2)  
This nightly build includes foundational fixes to agent state recovery, terminal buffer handling, and authentication error messaging—critical for stability in ongoing development workflows.

---

### **Hot Issues**  

| Issue | Summary & Significance | Community Reaction |
|------|------------------------|--------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery falsely reports `GOAL` success despite hitting `MAX_TURNS`. This hides task failure and undermines debugging. | 🔥 13 comments, 2 👍 – High impact on agent reliability; requires immediate fix. |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely on simple operations (e.g., folder creation). Users must disable subagents to work around it. | 🔥 8 comments, 8 👍 – Critical UX blocker; affects core functionality. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution hangs with "Waiting input" after completion. Breaks automation and CI pipelines. | 4 comments, 3 👍 – Frequent user-reported hang; urgent fix needed. |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Model ignores custom skills/sub-agents even when relevant. Reduces tooling utility and customization value. | 6 comments, 0 👍 – Anecdotal but widespread; impacts developer productivity. |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Auto Memory logs sensitive content before redaction. Security risk due to pre-redaction model context exposure. | 5 comments, 0 👍 – High severity for privacy-conscious teams. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Investigating AST-aware file reads/search to reduce token bloat and misalignment. Could enable smarter codebase navigation. | 7 comments, 1 👍 – Strategic direction for future performance gains. |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails under Wayland. Blocks Linux users from using GUI automation features. | 4 comments, 1 👍 – Platform-specific regression affecting accessibility. |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Browser agent lacks resilience to locked sessions in persistent mode. Requires manual cleanup. | 4 comments, 0 👍 – Needed for stable browser workflows. |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Model uses destructive commands (`git reset --force`) unnecessarily. Risk of data loss without safeguards. | 3 comments, 1 👍 – Safety concern; needs behavioral guardrails. |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | `get-shit-done` output hook causes crashes during summary generation. Breaks final reporting steps. | 3 comments, 0 👍 – High-priority crash; blocks workflow completion. |

---

### **Key PR Progress**  

| PR | Summary & Impact | Link |
|----|------------------|------|
| [#29367](https://github.com/google-gemini/gemini-cli/pull/29367) | Fixes subagent recovery to preserve original termination reason, preventing false `GOAL` success. Directly resolves #22323. | [PR #29367](https://github.com/google-gemini/gemini-cli/pull/29367) |
| [#29379](https://github.com/google-gemini/gemini-cli/pull/29379) | Hardens ConPTY process lifecycle on Windows, improving PTY exit consistency and stream finalization. | [PR #29379](https://github.com/google-gemini/gemini-cli/pull/29379) |
| [#29380](https://github.com/google-gemini/gemini-cli/pull/29380) | Optimizes terminal buffer memory usage and improves path formatting in diagnostics. | [PR #29380](https://github.com/google-gemini/gemini-cli/pull/29380) |
| [#29340](https://github.com/google-gemini/gemini-cli/pull/29340) | Enhances file descriptor and stream cleanup in `ShellExecutionService`. Prevents resource leaks. | [PR #29340](https://github.com/google-gemini/gemini-cli/pull/29340) |
| [#29378](https://github.com/google-gemini/gemini-cli/pull/29378) | Preserves terminal focus when closing diff tabs in VS Code. Improves editing flow. | [PR #29378](https://github.com/google-gemini/gemini-cli/pull/29378) |
| [#29349](https://github.com/google-gemini/gemini-cli/pull/29349) | Resolves focus loss in VS Code after file edit approval. Ensures seamless multi-file edits. | [PR #29349](https://github.com/google-gemini/gemini-cli/pull/29349) |
| [#29366](https://github.com/google-gemini/gemini-cli/pull/29366) | Stops replaying tool responses twice on session resume. Fixes backend pairing errors. | [PR #29366](https://github.com/google-gemini/gemini-cli/pull/29366) |
| [#29376](https://github.com/google-gemini/gemini-cli/pull/29376) | Prevents Windows IDE detection fallback from running Unix `ps` commands. Avoids unnecessary subprocesses. | [PR #29376](https://github.com/google-gemini/gemini-cli/pull/29376) |
| [#29375](https://github.com/google-gemini/gemini-cli/pull/29375) | Implements stateful HTTP chunk decoding in DevTools logging. Prevents broken UTF-8 sequences. | [PR #29375](https://github.com/google-gemini/gemini-cli/pull/29375) |
| [#29371](https://github.com/google-gemini/gemini-cli/pull/29371) | Corrects outdated ACP flag references and acronyms in CLI docs. Improves clarity. | [PR #29371](https://github.com/google-gemini/gemini-cli/pull/29371) |

---

### **Hot Discussions**  
*No discussion threads were provided in the dataset.*

---

### **Feature Request Trends**  
The community is converging on three major strategic directions:  
1. **Agent Intelligence & Autonomy**: Demand for better skill/sub-agent utilization (#21968), improved self-awareness (#21432), and clearer trajectory visibility via `/chat share` (#22598).  
2. **Security & Privacy**: Strong interest in deterministic redaction (#26525), secure memory handling (#26522), and reduced logging of sensitive data.  
3. **Codebase Awareness**: Push for AST-aware tools (#22745, #22746) to reduce token overhead and improve precision in file reads, search, and mapping—enabling deeper, faster code understanding.

---

### **Developer Pain Points**  
Recurring frustrations include:  
- **Unreliable agent behavior**: Hangs (#21409), false success states (#22323), and poor skill invocation (#21968).  
- **Terminal & execution instability**: Shell commands hanging after completion (#25166), PTY lifecycle issues (#29379), and unhandled edge cases in `node-pty`.  
- **Poor UX in editor integrations**: Focus loss in VS Code after diff close (#29378, #29349), inconsistent session resumption (#29366), and lack of feedback on failures.  
- **Tooling & configuration friction**: Symlink agent recognition (#20079), non-persistent `/compress` (#21335), and unclear documentation for settings (#29374).  

These points highlight a need for more robust error handling, consistent state management, and tighter integration between agents, tools, and IDEs.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-18

---

### **Today's Highlights**  
The latest release, **v1.0.86**, introduces critical improvements for custom agent configuration, enabling opt-in support for repository instruction files (`AGENTS.md`, `copilot-instructions.md`, `CLAUDE.md`) via `include-custom-instructions: true` in frontmatter. Additionally, session resumption behavior has been refined to preserve market state when no directory overrides are applied. These updates enhance customization and stability for advanced workflows.

---

### **Releases**  
**v1.0.86** (2026-09-17)  
- ✅ Custom agents can now explicitly include repository-level instruction files by setting `include-custom-instructions: true` in their frontmatter.  
- 🔁 Resuming an active session without `plugin-directory`, `discovery`, or `working-directory` overrides now preserves market state correctly.  

**v1.0.86-2** (2026-09-17)  
- 🛠️ Various fixes and internal improvements (no public-facing changes detailed).

> 🔗 [Release v1.0.86](https://github.com/github/copilot-cli/releases/tag/v1.0.86)

---

### **Hot Issues**  
*(Top 10 based on engagement, severity, and impact)*  

1. **#4870**: [Figma MCP server fails to load due to `-32601` error](https://github.com/github/copilot-cli/issues/4870)  
   - *Why it matters*: Breaks tool discovery despite successful authentication. Critical for designers using Figma integrations.  
   - *Community reaction*: 9 👍, 5 comments — urgent fix needed; works in VS Code but not CLI.

2. **#4887**: [Model mode "Auto" returns error on `/btw` or `/ask`](https://github.com/github/copilot-cli/issues/4887)  
   - *Why it matters*: Affects core workflow in Model Auto mode, blocking user commands.  
   - *Community reaction*: 3 comments, reported immediately after v1.0.86 release — likely a regression.

3. **#4095**: [Windows plugin update fails with "Access is denied (os error 5)"](https://github.com/github/copilot-cli/issues/4095)  
   - *Why it matters*: Blocks plugin updates on Windows when VS Code is running — common dev scenario.  
   - *Community reaction*: 22 👍 — high visibility, recurring pain point.

4. **#3304**: [ERR_HTTP2_INVALID_SESSION causes repeated transient retries](https://github.com/github/copilot-cli/issues/3304)  
   - *Why it matters*: Frequent mid-turn failures during long reasoning responses disrupt UX.  
   - *Community reaction*: 4 comments, ongoing since May 2026 — indicates deep networking instability.

5. **#4886**: [`--plugin-dir` skills missing from `/skills` and `/env`](https://github.com/github/copilot-cli/issues/4886)  
   - *Why it matters*: Local plugins work but aren’t visible in UI — breaks discoverability and debugging.  
   - *Community reaction*: 2 comments — affects developers building local tools.

6. **#4753**: [Session resume cancels in-flight MCP connections (~1s timeout)](https://github.com/github/copilot-cli/issues/4753)  
   - *Why it matters*: Silently disables MCP servers during session resume — previously stable in v1.0.82.  
   - *Community reaction*: Closed, but highlights regression risk in session lifecycle management.

7. **#4655**: [Custom agents under `com.github.copilot/agents` not discovered](https://github.com/github/copilot-cli/issues/4655)  
   - *Why it matters*: Hinders adoption of Agent Plugins 1.0 spec — blocks developer innovation.  
   - *Community reaction*: 4 comments, closed but unresolved — signals API misalignment.

8. **#4892**: [Extension hosts and MCP servers re-enumerated hourly](https://github.com/github/copilot-cli/issues/4892)  
   - *Why it matters*: Unnecessary reload cycle may degrade performance and cause race conditions.  
   - *Community reaction*: 1 comment, corrected report — indicates subtle but impactful inefficiency.

9. **#4606**: [Google Workspace MCP OAuth fails due to trailing-slash issuer mismatch](https://github.com/github/copilot-cli/issues/4606)  
   - *Why it matters*: Blocks enterprise users relying on Google Workspace integration.  
   - *Community reaction*: 2 👍 — security-sensitive edge case affecting auth flow.

10. **#4703**: [Per-agent provider selection for custom agents](https://github.com/github/copilot-cli/issues/4703)  
    - *Why it matters*: No way to route different agents to different models/endpoints — limits multi-model strategies.  
    - *Community reaction*: 1 comment — high-value feature request for advanced use cases.

---

### **Key PR Progress**  
*No new pull requests were merged in the last 24 hours.*  
- The community remains active in issue triage and feedback collection, but no code contributions have been processed recently.  
- Focus appears to be on stabilizing recent releases and addressing regressions before introducing new features.

---

### **Hot Discussions**  
*No discussion threads provided in the data source.*

---

### **Feature Request Trends**  
The most prominent feature directions emerging from issues include:  

- **Fine-grained model control**: Users want per-agent model selection (#4703), model fallback logic (#4445), and better auto-mode reliability (#4449).  
- **Enhanced plugin & agent flexibility**: Demand for symlink support (#3264), better local plugin discovery (#4886), and improved agent discovery (#4655).  
- **Improved configuration & isolation**: Requests for disabling repo-level MCPs (#3380), turning off taskbar icons (#4839), and sandboxed plan file access (#4193).  
- **Cross-platform stability**: Continued pressure for FreeBSD support (#3382), Windows permission handling (#4095), and consistent terminal behavior across OSes.

---

### **Developer Pain Points**  
Recurring frustrations across the ecosystem include:  

- **Plugin & agent discovery issues**: Local plugins and custom agents often fail to appear in UIs despite functional backend loading (#4886, #4655).  
- **Session resilience problems**: Session loss after closure (#3553), mid-turn HTTP2 session errors (#3304), and premature cancellation of MCP connections (#4753).  
- **Platform-specific bugs**: Persistent Windows access-denied errors (#4095), macOS PTY corruption (#1239), and FreeBSD platform rejection (#3382).  
- **UI/UX inconsistencies**: Backspace removing words (#4447), pasting corrupting input (#4060), and multiline copy truncating spaces (#3605).  
- **Configuration fragility**: Theme persistence failure (#4015), lack of clear documentation around symlinks (#3264), and opaque error messages.

These patterns suggest a need for deeper investment in **session lifecycle robustness**, **cross-platform consistency**, and **developer visibility into internal state**.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – 2026-09-18**

---

### **1. Today's Highlights**  
A surge of critical issues related to OpenCode’s free-tier access restrictions has emerged, affecting users across desktop and CLI environments. Multiple reports confirm that the error *"OpenCode's free tier can only be used from within OpenCode"* is now widespread—despite users operating within the official app—suggesting a potential misconfiguration in authentication or provider routing. Simultaneously, stability regressions in v1.18.30 have triggered crashes due to `SystemPrompt.environment` type errors, impacting core prompting functionality.

---

### **2. Releases**  
*None reported in the last 24 hours.*

---

### **3. Hot Issues**  

| Issue | Summary & Impact | Community Reaction |
|------|------------------|--------------------|
| [#49433](https://github.com/anomalyco/opencode/issues/49433) | Free-tier models fail with "can only be used from within OpenCode" even when used via official desktop app. | 🔥 27 comments, high urgency; multiple users confirm workarounds fail. |
| [#39845](https://github.com/anomalyco/opencode/issues/39845) | DeepSeek V4 Flash suddenly requires opt-in for China-hosted models, breaking existing subscriptions. | 🔥 24 comments, 30 👍; users report mid-session failures without warning. |
| [#48645](https://github.com/anomalyco/opencode/issues/48645) | Regression in v1.18.30: `TypeError` in `SystemPrompt.environment` causes all prompts to crash immediately. | 🔥 10 comments, 17 👍; confirmed stable in v1.18.18; urgent fix needed. |
| [#49590](https://github.com/anomalyco/opencode/issues/49590) | Official macOS app rejects free-tier models with same "within OpenCode" error. | 🔥 6 comments; reproducible on fresh installs. |
| [#49610](https://github.com/anomalyco/opencode/issues/49610) | Free-tier model access blocked during `/compaction`, suggesting session-level auth enforcement. | 🔥 12 comments; appears tied to internal state management. |
| [#49588](https://github.com/anomalyco/opencode/issues/49588) | Error persists in v1.18.31; affects default free model (`opencode/big-pickle`). | 🔥 5 comments; confirms regression not fixed in latest build. |
| [#48973](https://github.com/anomalyco/opencode/issues/48973) | `encrypted_content` not issued to caller when using Muse Spark 1.3 — fails on resume. | 🔥 6 comments, 8 👍; security/auth layer issue under active scrutiny. |
| [#49438](https://github.com/anomalyco/opencode/issues/49438) | Spanish-speaking user reports same free-tier blockage; confirms global impact. | 🔥 5 comments; multilingual confirmation strengthens severity. |
| [#49627](https://github.com/anomalyco/opencode/issues/49627) | Users report identical issue post-update; suggests release-side injection. | 🔥 4 comments; frustration over lack of rollback option. |
| [#49598](https://github.com/anomalyco/opencode/issues/49598) | OpenCode service disruption in Belarus + payment rejection for local cards. | 🔥 3 comments; geopolitical access barrier raises concern. |

---

### **4. Key PR Progress**  

| PR | Summary & Impact | GitHub Link |
|----|------------------|-------------|
| [#49643](https://github.com/anomalyco/opencode/pull/49643) | Adds OpenCode icon to VS Code Activity Bar for quick access. | [PR #49643](https://github.com/anomalyco/opencode/pull/49643) |
| [#49642](https://github.com/anomalyco/opencode/pull/49642) | Improves SSH auth UX by showing prompt only when required. | [PR #49642](https://github.com/anomalyco/opencode/pull/49642) |
| [#49637](https://github.com/anomalyco/opencode/pull/49637) | Fixes misleading TUI hint when background tasks are already running. | [PR #49637](https://github.com/anomalyco/opencode/pull/49637) |
| [#49636](https://github.com/anomalyco/opencode/pull/49636) | Resolves `Message not found` error after interrupting assistant response. | [PR #49636](https://github.com/anomalyco/opencode/pull/49636) |
| [#49634](https://github.com/anomalyco/opencode/pull/49634) | Eliminates O(n) mention-trigger scan on keystroke—critical for performance. | [PR #49634](https://github.com/anomalyco/opencode/pull/49634) |
| [#48689](https://github.com/anomalyco/opencode/pull/48689) | Includes reasoning tokens in tok/s throughput metrics. | [PR #48689](https://github.com/anomalyco/opencode/pull/48689) |
| [#48432](https://github.com/anomalyco/opencode/pull/48432) | Fixes O(n²) live tail rendering freeze during streaming. | [PR #48432](https://github.com/anomalyco/opencode/pull/48432) |
| [#48822](https://github.com/anomalyco/opencode/pull/48822) | Adds `usage-json` and `usage-csv` export formats for audit-ready session data. | [PR #48822](https://github.com/anomalyco/opencode/pull/48822) |
| [#47783](https://github.com/anomalyco/opencode/pull/47783) | Adds Persian (fa) README translation—expands accessibility. | [PR #47783](https://github.com/anomalyco/opencode/pull/47783) |
| [#27554](https://github.com/anomalyco/opencode/pull/27554) | Enables LAN discovery of local OpenAI-compatible servers via mDNS. | [PR #27554](https://github.com/anomalyco/opencode/pull/27554) |

---

### **5. Hot Discussions**  
*No discussion threads were provided in the dataset.*

---

### **6. Feature Request Trends**  
- **Enhanced Local AI Integration**: High demand for local model discovery via LAN/mDNS ([#27554](https://github.com/anomalyco/opencode/pull/27554)) and offline-first workflows.
- **Better Session Export & Auditing**: Users consistently request structured export formats (JSON/CVS) and accurate cost tracking including subagent usage ([#48822](https://github.com/anomalyco/opencode/pull/48822), [#45417](https://github.com/anomalyco/opencode/issues/45417)).
- **Improved UX in TUI**: Prioritization of smooth streaming, reduced lag (e.g., mention-trigger optimization), and clearer feedback states.
- **Multilingual Support**: Growing interest in localized documentation (e.g., Persian translation).
- **IDE Integration**: Strong desire for deeper VS Code integration, including sidebar navigation and activity bar presence.

---

### **7. Developer Pain Points**  
- **Free Tier Access Confusion**: Persistent, unexplained blocks despite using the official app—indicating flawed auth boundary logic.
- **Regression in Recent Versions**: v1.18.30 introduced critical crashes (`TypeError` in `SystemPrompt.environment`) with no rollback path.
- **Session State Corruption**: Desktop app fails to load sessions due to missing `project_id` column, likely from schema migration issues.
- **Unpredictable Model Availability**: Sudden requirement to opt-in for China-hosted models without prior notice or clear policy communication.
- **Inconsistent Error Messaging**: Errors like `encrypted_content not issued to this caller` suggest opaque security layers requiring better debugging visibility.
- **Lack of API Key Clarity**: Users confused about Go subscription vs. Zen API key distinctions ([#49638](https://github.com/anomalyco/opencode/issues/49638)).

---  
*Digest compiled from GitHub data at 2026-09-18. For real-time updates, follow [anomalyco/opencode](https://github.com/anomalyco/opencode).*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi Community Digest — 2026-09-18

---

### **1. Today's Highlights**

The Pi community made significant progress in stabilizing core AI provider interactions and improving session resilience. Critical fixes were merged to handle malformed `Retry-After` headers and retry opaque 4xx errors, reducing silent failures during high-load or transient upstream issues. Additionally, a major fix addressed compaction logic that could silently destroy up to 400k tokens due to misclassified HTTP 400s — a serious quality-of-work regression.

---

### **2. Releases**

None reported in the last 24 hours.

---

### **3. Hot Issues**

| Issue | Summary & Impact | Community Reaction |
|------|------------------|--------------------|
| [#9482](https://github.com/earendil-works/pi/issues/9482) | Empty-body 400s from OpenAI-compatible gateways misclassified as context overflow → triggers destructive auto-compaction (up to 400k tokens lost). **Critical severity**. | ⚠️ High concern; labeled "serious, non-cosmetic bug". No likes but widespread implications for long sessions. |
| [#9602](https://github.com/earendil-works/pi/issues/9602) | Compaction includes thinking messages omitted from earlier model requests → causes token overflow during long Qwen3.8 sessions. | 🔥 Top concern for local LLM users; affects output limits and session stability. |
| [#8684](https://github.com/earendil-works/pi/issues/8684) | `PI_OFFLINE` silently disables all model discovery — undocumented behavior contradicting docs. | 💬 10 comments; raised awareness about hidden side effects of offline mode. |
| [#9361](https://github.com/earendil-works/pi/issues/9361) | Windows: `shellPath` ignored non-deterministically when extensions are loaded → falls back to WSL bash.exe. | 🧩 6 comments; affects reproducibility and shell control on Windows. |
| [#9391](https://github.com/earendil-works/pi/issues/9391) | After compaction, stale signed thinking blocks replayed every turn → Anthropic drops them with `prefix_binding_mismatch`. | 📉 Visual noise; impacts UX consistency in long sessions. |
| [#9708](https://github.com/earendil-works/pi/issues/9708) | Migration rewrites session files in place without backup — risk of data loss on crash/power failure. | 🛑 3 comments; urgent need for safe migration patterns. |
| [#9718](https://github.com/earendil-works/pi/issues/9718) | `--print` exits 0 with empty output when model hits budget before producing text — caller can't distinguish from no output. | 🤔 2 comments; breaks automation workflows expecting error codes. |
| [#9690](https://github.com/earendil-works/pi/issues/9690) | OpenCode Zen rejects Pi-generated session IDs despite valid headers → 403 errors. | 🔐 Security/compatibility issue; affects built-in provider reliability. |
| [#9697](https://github.com/earendil-works/pi/issues/9697) | `edit` tool accepts ambiguous overlapping matches → edits wrong block silently. | 🛠️ 2 comments; potential for accidental code corruption. |
| [#9686](https://github.com/earendil-works/pi/issues/9686) | Agent error on small images (<4MB) due to 30MB limit — crashes goal execution. | 🖼️ 2 comments; highlights image handling edge cases in agent pipelines. |

---

### **4. Key PR Progress**

| PR | Summary | Status |
|----|--------|--------|
| [#9724](https://github.com/earendil-works/pi/pull/9724) | Fixes `Retry-After` parsing: treats malformed dates like missing headers → fallback to exponential backoff. Prevents immediate 429 retries. | ✅ Closed |
| [#9722](https://github.com/earendil-works/pi/pull/9722) | Adds retry logic for bare 4xx errors (e.g., OpenAI’s `"400 status code (no body)"`) by expanding retryable pattern list. | ✅ Closed |
| [#9720](https://github.com/earendil-works/pi/pull/9720) | Expands Mistral reasoning dispatch via `thinkingLevelMap`; adds `zai-glm-5-3` support. | ✅ Closed |
| [#9719](https://github.com/earendil-works/pi/pull/9719) | Makes default tool shell vertical padding configurable (`toolShellPaddingY` setting). | ✅ Closed |
| [#9717](https://github.com/earendil-works/pi/pull/9717) | Fixes compaction summary bloat: excludes thinking-only messages from prompt to avoid oversized requests. | ✅ Closed |
| [#9706](https://github.com/earendil-works/pi/pull/9706) | Validates eval prompts from transcripts against replayed system prompt; preserves artifacts on failure. | ✅ Closed |
| [#9705](https://github.com/earendil-works/pi/pull/9705) | Adds TUI context footer eval with Docker-isolated rendering and progress bar clamping. | ✅ Closed |
| [#9694](https://github.com/earendil-works/pi/pull/9694) | Updates DeepSeek flash model references from `deepseek-flash` to `deepseek-v4-flash` in tests. | ✅ Closed |
| [#9693](https://github.com/earendil-works/pi/pull/9693) | Makes `formatCwdForFooter` test cross-platform using `node:path.sep`. | ✅ Closed |
| [#9692](https://github.com/earendil-works/pi/pull/9692) | Fixes `TuiMainScreen` crash on line overflow by clipping instead of throwing. | ✅ Closed |

---

### **5. Hot Discussions**

*No discussion threads were included in the provided dataset.*

---

### **6. Feature Request Trends**

Top feature directions emerging from Issues and PRs:

- **Improved Session Resilience**: Demand for safer migration (backup before rewrite), better handling of partial outputs (`--print` exit codes), and robustness against network flakiness.
- **Provider Flexibility**: Requests to add new providers (GMI Cloud, LLM Gateway, Azure Foundry) and improve compatibility with OpenAI-compatible APIs.
- **Configurable UX**: Increasing interest in theme-driven styling (e.g., fullscreen selection), customizable tool shell padding, and TUI improvements.
- **Agent Reliability**: Focus on preventing silent failures (e.g., signal-killed tools resolving successfully, empty `tool_call_id` handling).
- **Developer Tooling**: Calls for `pi-dev` installation command, debugging flags, and better observability of internal state (e.g., `session_compact_end` event).

---

### **7. Developer Pain Points**

Recurring frustrations highlighted across multiple Issues:

- **Silent Failures & Misclassification**: Errors like empty 400s being treated as context overflow lead to irreversible data loss.
- **Undocumented Behavior**: `PI_OFFLINE` disabling model discovery despite documentation claiming otherwise.
- **Non-Deterministic Resolution**: Shell path resolution on Windows fails unpredictably when extensions load.
- **Inconsistent State Handling**: Tools return partial results after SIGKILL/SIGTERM but resolve successfully; callers can’t detect failure.
- **Lack of Safeguards**: Migration rewrites session files in-place without backup — high risk of data loss.
- **Poor Error Feedback**: `--print` returns success with no output when budget is exhausted — breaks automation.
- **Overly Restrictive Limits**: Image size limits (30MB) triggered by small images, breaking workflow continuity.

> These pain points point to a growing need for more defensive programming, better error semantics, and improved developer visibility into internal state transitions.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-18

---

### **Today's Highlights**  
The Qwen Code team shipped **v0.24.0-nightly.20260917.f822124af5** and **Qwen Code Desktop v0.24.0**, introducing key improvements in ACP boundary handling, session-scoped permissions, and shared output modes. Notably, the community is actively addressing critical stability issues related to React rendering crashes, token estimation telemetry errors, and long-running task lifecycle management.

---

### **Releases**

- **`v0.24.0-nightly.20260917.f822124af5`**  
  - Fixed CI race conditions by waiting for published exports.
  - Documented merged ACP boundary acceptance via `@wenshao` in #12024.
  - Enhanced session-level ACP permission scoping (`@chiga0`, #11802).
  - Added shared output modes across channels.

- **Qwen Code Desktop v0.24.0**  
  - Scoped ACP permission queue to session context.
  - Introduced shared output modes for improved collaboration workflows.

---

### **Hot Issues**

| Issue | Why It Matters | Community Reaction |
|------|----------------|--------------------|
| [#9278](https://github.com/QwenLM/qwen-code/issues/9278) *Design: /review publish-time convergence advisory* | Addresses a dangerous feedback loop where agent fixes increase diff size, triggering more findings — risking infinite regression. Critical for stable code generation. | 10 comments; high visibility due to systemic risk |
| [#12061](https://github.com/QwenLM/qwen-code/issues/12061) *Callback identity changes replace active tool scheduler* | Causing silent failures when tools are rerun mid-batch due to improper hook reactivity. Impacts reliability of interactive workflows. | 8 comments; urgent fix needed |
| [#12053](https://github.com/QwenLM/qwen-code/issues/12053) *Slim the Goal runtime: drop evidence catalog & checkpoints* | Proposes simplifying goal execution by removing redundant state tracking — aligns with move toward single-turn completion patterns observed in real use. | 7 comments; strong interest in performance gains |
| [#11732](https://github.com/QwenLM/qwen-code/issues/11732) *Qwen Code 0.23.3 crashes with React error #185* | Reproducible crash during long-running tasks on Linux, affecting stability in production sessions. High impact for desktop users. | 8 comments; closed after fix but still relevant |
| [#12072](https://github.com/QwenLM/qwen-code/issues/12072) *OpenRouter preset sends incorrect header `X-OpenRouter-Title`* | Breaks app attribution in OpenRouter — prevents proper model tagging. Blocks integration with external gateways. | 6 comments; needs quick patch |
| [#12113](https://github.com/QwenLM/qwen-code/issues/12113) *ACPs report end_turn despite truncation* | Misleading behavior: client assumes turn complete even when model response is cut off. Can break automation logic. | 5 comments; flagged as P2 but high priority |
| [#12048](https://github.com/QwenLM/qwen-code/issues/12048) *Context-usage telemetry dropped with non-function tools* | Skews usage metrics and prevents accurate cost monitoring. Affects billing and optimization. | 5 comments; part of broader telemetry overhaul |
| [#12091](https://github.com/QwenLM/qwen-code/issues/12091) *Deleting live session unlinks transcript, breaks history* | Permanently corrupts session data if deleted while active — violates user expectations around session safety. | 4 comments; serious UX flaw |
| [#12030](https://github.com/QwenLM/qwen-code/issues/12030) *Extensions load full context unconditionally* | Causes massive token bloat; no path gating or budgeting. Hinders scalability in large projects. | 4 comments; linked to context-performance roadmap |
| [#12029](https://github.com/QwenLM/qwen-code/issues/12029) *Percentage budgets scale incorrectly on large windows* | Budgets fail at high context sizes — leads to undetected overuse. Affects long-context workflows. | 4 comments; core issue for long-context models |

---

### **Key PR Progress**

| PR | Summary | Status |
|----|--------|--------|
| [#12131](https://github.com/QwenLM/qwen-code/pull/12131) *fix(core): keep MCP App html in transcripts* | Preserves rich HTML content from MCP Apps in replayable sessions — enables full fidelity playback. | ✅ Closed |
| [#12115](https://github.com/QwenLM/qwen-code/pull/12115) *fix(installer): preflight glibc for standalone Linux archives* | Prevents Node.js startup failure on older distros (e.g., CentOS 7). Improves install reliability. | ✅ Open |
| [#12128](https://github.com/QwenLM/qwen-code/pull/12128) *fix(ci): retry transient E2E artifact download* | Adds one retry to mitigate flaky CI downloads — improves test stability. | ✅ Open |
| [#12120](https://github.com/QwenLM/qwen-code/pull/12120) *refactor(goal): delete evidence checkpoint/catalog* | Removes unused legacy code; streamlines Goal runtime. Part of slimming effort (#12053). | ✅ Closed |
| [#12096](https://github.com/QwenLM/qwen-code/pull/12096) *fix(core): handle Bash comments in permission rules* | Fixes false positives in rule parsing caused by trailing comments. Enhances security accuracy. | ✅ Open |
| [#12050](https://github.com/QwenLM/qwen-code/pull/12050) *feat(web-shell): expose slash-command exports as artifacts* | Enables saving `/export md|html|json` outputs directly in Web Shell — improves sharing and auditability. | ✅ Open |
| [#12008](https://github.com/QwenLM/qwen-code/pull/12008) *feat(serve): let users stop workspace runtimes* | Allows manual capacity recovery in ACP-constrained environments. Crucial for multi-user setups. | ✅ Open |
| [#12067](https://github.com/QwenLM/qwen-code/pull/12067) *feat(core): Add bwrap execution foundation* | Lays groundwork for Linux sandboxing at the tool level — key step toward secure execution. | ✅ Open |
| [#12117](https://github.com/QwenLM/qwen-code/pull/12117) *fix(ci): retry failure watcher job-log download* | Resolves CI deadlocks due to transient API flakes — ensures failure analysis isn’t lost. | ✅ Open |
| [#11563](https://github.com/QwenLM/qwen-code/pull/11563) *fix(channels): preserve Feishu rich content* | Maintains image, code block, and link fidelity in Feishu messages — enhances cross-platform UX. | ✅ Open |

---

### **Feature Request Trends**

- **Dynamic Workflows & Background Automation**: Multiple requests (#8105, #12053) emphasize the need for staged, observable background execution with recovery mechanisms.
- **Context & Token Management Optimization**: High demand for smarter budgeting (#12030, #12029), accurate telemetry (#12048), and reduced overhead.
- **Improved Tool & Session Safety**: Users request stricter input validation, better error handling, and safer deletion semantics (#12091, #11817).
- **Rich Output & Replay Fidelity**: Growing interest in preserving structured outputs (MCP Apps, exports) across sessions (#12050, #12131).
- **Cross-Platform Integration**: Demand for stable support on older systems (CentOS 7), remote IDEs (VSCode, Zed), and browser-native tooling (Chrome Native Messaging).

---

### **Developer Pain Points**

- **React Rendering Crashes**: Persistent issues with `React error #185` (Maximum update depth exceeded) when background tasks are registered — affects both TUI and desktop clients (#11783, #11732).
- **Flaky CI/CD Runs**: E2E tests time out intermittently due to cron-fire delays and `continue-on-error` masking failures (#10904, #11134).
- **Token Estimation Inaccuracies**: Telemetry often drops or mixes estimators when non-function tools are present — undermines cost control (#12048).
- **Inconsistent Settings Persistence**: Worktree settings write to project root instead of local `.qwen` directory, breaking isolation (#8138).
- **Model Compatibility Bugs**: Strict OpenAI-compatible gateways reject requests due to null `parameters` field for parameterless tools (#11956).
- **Security Rule Parsing Gaps**: Permission rules misparse shell commands with comments or escaped characters — risks privilege escalation (#11851, #12096).
- **Session Corruption Risk**: Deleting an active session can permanently break its transcript — a major UX concern (#12091).

---  
*Digest compiled from GitHub activity: [Qwen Code Repository](https://github.com/QwenLM/qwen-code)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*