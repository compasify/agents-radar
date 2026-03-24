# Translate Digest (Vietnamese)

Fork này tự động sync báo cáo hàng ngày từ [duanyytop/agents-radar](https://github.com/duanyytop/agents-radar) và dịch sang tiếng Việt bằng LLM.

## Cách hoạt động

```
┌─────────────────────────┐     ┌──────────────────────┐     ┌─────────────────┐
│ upstream (duanyytop)     │     │ fork (compasify)     │     │ output          │
│ daily-digest.yml         │────▶│ translate-digest.yml │────▶│ *-vi.md files   │
│ chạy 00:00 UTC hàng ngày│     │ chạy 01:00 UTC       │     │ commit & push   │
└─────────────────────────┘     └──────────────────────┘     └─────────────────┘
```

1. **01:00 UTC hàng ngày** (hoặc trigger thủ công)
2. `git fetch upstream master` → merge file mới từ upstream
3. Tìm file `.md` tiếng Trung trong `digests/YYYY-MM-DD/` chưa có bản `-vi.md`
4. Gọi LLM dịch → lưu file `*-vi.md`
5. Commit & push

## Setup GitHub Secrets

Vào repo **Settings → Secrets and variables → Actions**:

### Secrets

| Name              | Bắt buộc | Giá trị                                                                                |
| ----------------- | -------- | -------------------------------------------------------------------------------------- |
| `OPENAI_API_KEY`  | ✅       | API key (vd: `sk-xxxxx`)                                                               |
| `OPENAI_BASE_URL` | ❌       | Proxy URL nếu có (vd: `https://your-proxy.com/v1`). Bỏ trống nếu dùng OpenAI trực tiếp |

### Variables

| Name           | Bắt buộc | Giá trị                                                    |
| -------------- | -------- | ---------------------------------------------------------- |
| `OPENAI_MODEL` | ❌       | Model name (vd: `gpt-4o`). Mặc định `gpt-4o` nếu không set |

## Chạy local

```bash
# Set env vars
export OPENAI_API_KEY=sk-xxxxx
export OPENAI_BASE_URL=https://your-proxy.com/v1  # optional
export OPENAI_MODEL=gpt-4o                        # optional

# Dịch ngày hôm nay
npx tsx src/translate.ts

# Dịch ngày cụ thể
npx tsx src/translate.ts 2026-03-24
```

## Trigger thủ công

Vào **Actions → Translate Digest (Vietnamese) → Run workflow**. Có thể nhập ngày cụ thể hoặc để trống (dùng ngày hiện tại).

## Disable workflow gốc

Các workflow gốc (daily, weekly, monthly) đã có condition `if: github.repository == 'duanyytop/agents-radar'` nên **không chạy trên fork**.

## File output

Mỗi ngày tạo ra các file `-vi.md` trong `digests/YYYY-MM-DD/`:

| Source (Chinese) | Output (Vietnamese) |
| ---------------- | ------------------- |
| `ai-cli.md`      | `ai-cli-vi.md`      |
| `ai-agents.md`   | `ai-agents-vi.md`   |
| `ai-web.md`      | `ai-web-vi.md`      |
| `ai-trending.md` | `ai-trending-vi.md` |
| `ai-hn.md`       | `ai-hn-vi.md`       |
| `ai-weekly.md`   | `ai-weekly-vi.md`   |
| `ai-monthly.md`  | `ai-monthly-vi.md`  |

File đã dịch sẽ được skip (không dịch lại).
