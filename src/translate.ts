/**
 * Translate Chinese digest files to Vietnamese using LLM.
 *
 * Self-contained — does not import any upstream source files so that
 * upstream changes never break this script.
 *
 * Usage:
 *   pnpm translate            # translate today's digests
 *   pnpm translate 2026-03-24 # translate a specific date
 *
 * Required env vars:
 *   LLM_PROVIDER   - "openai" (default for this script)
 *   OPENAI_API_KEY  - API key
 *   OPENAI_BASE_URL - endpoint override (optional)
 *   OPENAI_MODEL    - model name (default: gpt-4o)
 */

import fs from "node:fs";
import path from "node:path";
import OpenAI from "openai";

const DIGESTS_DIR = "digests";
const MAX_TOKENS = 16384;
const LLM_CONCURRENCY = 3;
const MAX_RETRIES = 3;
const RETRY_BASE_MS = 5_000;

const ZH_REPORTS = ["ai-cli", "ai-agents", "ai-web", "ai-trending", "ai-hn"];
const ROLLUP_REPORTS = ["ai-weekly", "ai-monthly"];
const ALL_REPORTS = [...ZH_REPORTS, ...ROLLUP_REPORTS];

const client = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
  baseURL: process.env["OPENAI_BASE_URL"],
});
const model = process.env["OPENAI_MODEL"] ?? "gpt-4o";

let slots = LLM_CONCURRENCY;
const queue: Array<() => void> = [];

function acquire(): Promise<void> {
  if (slots > 0) {
    slots--;
    return Promise.resolve();
  }
  return new Promise((resolve) => queue.push(resolve));
}

function release(): void {
  const next = queue.shift();
  if (next) next();
  else slots++;
}

async function callLlm(prompt: string): Promise<string> {
  for (let attempt = 0; ; attempt++) {
    await acquire();
    let released = false;
    try {
      const res = await client.chat.completions.create({
        model,
        max_completion_tokens: MAX_TOKENS,
        messages: [{ role: "user", content: prompt }],
      });
      const text = res.choices[0]?.message?.content;
      if (!text) throw new Error("Empty LLM response");
      return text;
    } catch (err) {
      const is429 = (err as { status?: number })?.status === 429 || String(err).includes("429");
      if (attempt < MAX_RETRIES && is429) {
        release();
        released = true;
        const wait = RETRY_BASE_MS * 2 ** attempt;
        console.error(`[translate] 429 — retry ${attempt + 1}/${MAX_RETRIES} in ${wait / 1000}s`);
        await new Promise((r) => setTimeout(r, wait));
        continue;
      }
      throw err;
    } finally {
      if (!released) release();
    }
  }
}

function buildPrompt(markdown: string): string {
  return `You are a professional translator. Translate the following Markdown document from Chinese to Vietnamese.

Rules:
- Preserve ALL Markdown formatting exactly (headings, tables, links, bold, italic, code blocks, blockquotes, lists).
- Preserve ALL URLs, GitHub links, issue/PR numbers (e.g., #12345) unchanged.
- Preserve ALL proper nouns (tool names, company names, project names) in their original form.
- Preserve ALL code snippets unchanged.
- Translate naturally and fluently into Vietnamese — not word-by-word.
- Do NOT add any commentary, explanation, or notes.
- Output ONLY the translated Markdown document.

---

${markdown}`;
}

function todayCST(): string {
  const now = new Date();
  const cst = new Date(now.getTime() + 8 * 60 * 60 * 1000);
  return cst.toISOString().slice(0, 10);
}

async function translateFile(datePath: string, report: string): Promise<boolean> {
  const zhFile = path.join(datePath, `${report}.md`);
  const viFile = path.join(datePath, `${report}-vi.md`);

  if (!fs.existsSync(zhFile)) {
    console.log(`[translate] Skip ${report} — source not found`);
    return false;
  }

  if (fs.existsSync(viFile)) {
    console.log(`[translate] Skip ${report} — Vietnamese version exists`);
    return false;
  }

  const zhContent = fs.readFileSync(zhFile, "utf-8");
  if (!zhContent.trim()) {
    console.log(`[translate] Skip ${report} — source is empty`);
    return false;
  }

  console.log(`[translate] Translating ${report}...`);
  const viContent = await callLlm(buildPrompt(zhContent));
  const outPath = path.join(datePath, `${report}-vi.md`);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, viContent, "utf-8");
  console.log(`[translate] Done ${report}-vi.md`);
  return true;
}

async function main(): Promise<void> {
  const targetDate = process.argv[2] ?? todayCST();
  const datePath = path.join(DIGESTS_DIR, targetDate);

  if (!fs.existsSync(datePath)) {
    console.error(`[translate] Directory not found: ${datePath}`);
    process.exit(1);
  }

  console.log(`[translate] Processing date: ${targetDate}`);
  console.log(`[translate] Using model: ${model}`);

  const results = await Promise.allSettled(ALL_REPORTS.map((report) => translateFile(datePath, report)));

  let translated = 0;
  let failed = 0;
  for (const [i, result] of results.entries()) {
    if (result.status === "rejected") {
      console.error(`[translate] Failed ${ALL_REPORTS[i]}: ${result.reason}`);
      failed++;
    } else if (result.value) {
      translated++;
    }
  }

  console.log(`[translate] Complete: ${translated} translated, ${failed} failed`);
  if (failed > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
