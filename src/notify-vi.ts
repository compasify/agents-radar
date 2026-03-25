/**
 * Telegram notification for Vietnamese translated digests.
 *
 * Self-contained — does not import upstream source files.
 * Scans digests/{date}/ for *-vi.md files, reads highlights.json (en),
 * and sends links pointing to raw GitHub files.
 *
 * Required env vars:
 *   TELEGRAM_BOT_TOKEN  — bot token from @BotFather
 *   TELEGRAM_CHAT_ID    — channel/group/user chat ID
 * Optional:
 *   GITHUB_REPO         — owner/repo (default: compasify/agents-radar)
 *   GITHUB_BRANCH       — branch name (default: master)
 */

import fs from "node:fs";
import path from "node:path";

const DIGESTS_DIR = "digests";
const DEFAULT_REPO = "compasify/agents-radar";
const DEFAULT_BRANCH = "master";

const LABELS: Record<string, string> = {
  "ai-cli-vi": "AI CLI Tools",
  "ai-agents-vi": "AI Agents Ecosystem",
  "ai-web-vi": "Official AI Content",
  "ai-trending-vi": "GitHub AI Trends",
  "ai-hn-vi": "HN Community Digest",
  "ai-weekly-vi": "AI Tools Weekly",
  "ai-monthly-vi": "AI Tools Monthly",
};

const HIGHLIGHT_KEY: Record<string, string> = {
  "ai-cli-vi": "ai-cli",
  "ai-agents-vi": "ai-agents",
  "ai-web-vi": "ai-web",
  "ai-trending-vi": "ai-trending",
  "ai-hn-vi": "ai-hn",
};

async function sendTelegram(text: string): Promise<void> {
  const BOT_TOKEN = process.env["TELEGRAM_BOT_TOKEN"] ?? "";
  const CHAT_ID = process.env["TELEGRAM_CHAT_ID"] ?? "";
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Telegram API ${res.status}: ${body}`);
  }
}

function findViReports(date: string): string[] {
  const dir = path.join(DIGESTS_DIR, date);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith("-vi.md"))
    .map((f) => f.replace(/\.md$/, ""))
    .sort();
}

function loadEnHighlights(date: string): Record<string, string[]> {
  const p = path.join(DIGESTS_DIR, date, "highlights.json");
  if (!fs.existsSync(p)) return {};
  try {
    const data = JSON.parse(fs.readFileSync(p, "utf-8")) as {
      en?: Record<string, string[]>;
    };
    return data.en ?? {};
  } catch {
    return {};
  }
}

function buildMessage(date: string, reports: string[]): string {
  const repo = process.env["GITHUB_REPO"] ?? DEFAULT_REPO;
  const branch = process.env["GITHUB_BRANCH"] ?? DEFAULT_BRANCH;
  const baseUrl = `https://github.com/${repo}/blob/${branch}/digests/${date}`;

  const isWeekly = reports.includes("ai-weekly-vi");
  const isMonthly = reports.includes("ai-monthly-vi");
  const icon = isMonthly ? "📆" : isWeekly ? "📅" : "📡";
  const suffix = isMonthly ? " Monthly" : isWeekly ? " Weekly" : "";
  const lines: string[] = [`${icon} <b>agents-radar${suffix} (Vietnamese) · ${date}</b>`];

  const highlights = loadEnHighlights(date);

  const daily = reports.filter((r) => !r.includes("weekly") && !r.includes("monthly"));
  const rollup = reports.filter((r) => r.includes("weekly") || r.includes("monthly"));

  for (const r of [...daily, ...rollup]) {
    const label = LABELS[r] ?? r;
    const url = `${baseUrl}/${r}.md`;
    lines.push("");
    lines.push(`• <a href="${url}">${label}</a>`);

    const hKey = HIGHLIGHT_KEY[r];
    const items = hKey ? highlights[hKey] : undefined;
    if (items?.length) {
      for (const h of items) {
        lines.push(`  ◦ ${h}`);
      }
    }
  }

  lines.push(`\n<a href="https://github.com/${repo}">📂 Repository</a>`);
  return lines.join("\n");
}

function todayUTC(): string {
  return new Date().toISOString().slice(0, 10);
}

async function main(): Promise<void> {
  const BOT_TOKEN = process.env["TELEGRAM_BOT_TOKEN"] ?? "";
  if (!BOT_TOKEN) {
    console.log("[notify-vi] TELEGRAM_BOT_TOKEN not set — skipping.");
    return;
  }
  const CHAT_ID = process.env["TELEGRAM_CHAT_ID"] ?? "";
  if (!CHAT_ID) {
    console.log("[notify-vi] TELEGRAM_CHAT_ID not set — skipping.");
    return;
  }

  const date = process.argv[2] ?? todayUTC();
  const reports = findViReports(date);

  if (reports.length === 0) {
    console.log(`[notify-vi] No Vietnamese reports found for ${date} — skipping.`);
    return;
  }

  const text = buildMessage(date, reports);
  console.log(`[notify-vi] Sending Telegram for ${date} (${reports.length} reports)…`);
  await sendTelegram(text);
  console.log("[notify-vi] Done!");
}

main().catch((e: unknown) => {
  console.error("[notify-vi]", e instanceof Error ? e.message : e);
  process.exit(1);
});
