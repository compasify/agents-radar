# Cộng đồng công cụ AI CLI: Báo cáo động thái hàng ngày 2026-05-02

> Thời gian tạo: 2026-05-02 00:20 UTC | Công cụ được đề cập: 8

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## So sánh ngang

# Báo cáo phân tích so sánh ngang hệ sinh thái công cụ AI CLI | 2026-05-02

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái công cụ AI CLI hiện đang có xu hướng **"cơ sở hạ tầng trưởng thành hóa, cạnh tranh khác biệt hóa ngày càng gay gắt"**: Các công cụ hàng đầu (Claude Code, Codex, Gemini CLI) đã bước vào cuộc cạnh tranh sâu sắc về **minh bạch hóa phí và độ ổn định cấp doanh nghiệp**, trong khi các lực lượng mới nổi (Pi, Kimi, Qwen Code) đang nhanh chóng bám đuổi bằng **khả năng tương thích đa mô hình và triển khai cục bộ**. Giao thức MCP đã trở thành tiêu chuẩn tích hợp công cụ thực tế, nhưng độ ổn định của các triển khai khác nhau còn chưa đồng đều. Mâu thuẫn cốt lõi của cộng đồng đã chuyển từ "có dùng được không" sang "có dám dùng cho sản xuất không" — độ chính xác của đo lường hạn ngạch, độ tin cậy của trạng thái phiên và tính nhất quán đa nền tảng tạo thành một tam giác tin cậy.

---

## 2. So sánh mức độ hoạt động của từng công cụ

| Công cụ | Issues Hoạt động Hôm nay | PRs Hoạt động Hôm nay | Phát hành Phiên bản | Tâm trạng Cộng đồng |
|:---|:---:|:---:|:---|:---|
| **Claude Code** | 5+ Chủ đề nóng (tổng cộng 2.478 bình luận) | 3 (thấp) | v2.1.126 | 🔴 **Lo lắng**: Khủng hoảng thanh toán chưa giải quyết, việc loại bỏ /buddy gây ra kiến nghị |
| **OpenAI Codex** | 10 được chọn lọc | 10 | v0.129.0-alpha.2 | 🟡 **Mong đợi**: Nâng cấp kiến trúc tích cực, trải nghiệm Windows vẫn là điểm yếu |
| **Gemini CLI** | 10 được chọn lọc | 10 | Không có | 🟡 **Bối rối**: Thảm họa hiệu suất Agent (173 bình luận) bao trùm tất cả |
| **GitHub Copilot CLI** | 16 (5 đóng/11 mở) | Cập nhật 0 | v1.0.40 | 🟢 **Ổn định**: Cột mốc tích hợp hệ sinh thái MCP, chờ khắc phục lỗi đóng băng terminal |
| **Kimi Code CLI** | 4 | 7 (bugkeep đóng góp 4) | Không có | 🟢 **Tích cực**: Mật độ sửa lỗi cao, khả năng tương thích của bên thứ ba trở thành trọng tâm mới |
| **OpenCode** | 10 được chọn lọc | 10 | v1.14.31 | 🟡 **Mệt mỏi**: Tốc độ "đã sửa nhưng chưa hoàn toàn sửa" làm xói mòn niềm tin |
| **Pi** | 10 được chọn lọc (đóng 40+) | 10 | v0.72.0 / v0.71.1 | 🟢 **Hoạt động**: Tích hợp nhà cung cấp mới dày đặc, sửa lỗi quốc tế hóa đã hoàn tất |
| **Qwen Code** | 6 | 27 có cập nhật | v0.15.6-nightly | 🟢 **Tiên phong**: Tính năng cấp doanh nghiệp dày đặc, nợ CI lộ ra |

> **Lưu ý**: Số lượng Issues/PRs là số lượng được chọn lọc hàng ngày, không phải thống kê toàn bộ; số bình luận liên quan đến thanh toán của Claude Code là tổng số tích lũy trong quá khứ.

---

## 3. Hướng chức năng được quan tâm chung

| Hướng chức năng | Công cụ liên quan | Yêu cầu cụ thể | Mức độ khẩn cấp |
|:---|:---|:---|:---:|
| **Minh bạch hóa phí và kiểm soát hạn ngạch** | Claude Code, Codex, OpenCode | Bảng điều khiển sử dụng thời gian thực, cảnh báo tiêu thụ bất thường, bộ đếm ngược giới hạn tốc độ | 🔴 P0 |
| **Độ ổn định hệ sinh thái MCP** | Copilot CLI, Kimi, OpenCode | Lỗi tiến trình con không đóng băng terminal, xác thực OAuth thống nhất, sử dụng lại cấu hình giữa các công cụ | 🔴 P0 |
| **Khả năng tương thích mô hình bên thứ ba** | Kimi, OpenCode, Qwen Code, Pi | Chuyển tiếp `reasoning_content`, điều chỉnh giao thức chế độ tư duy, phát hiện mô hình động | 🟡 P1 |
| **Quản lý ngữ cảnh và bộ nhớ** | Gemini CLI, Codex, Qwen Code | Nén thông minh (Union-Find/phân cụm ngữ nghĩa), trích xuất bộ nhớ tự động, cô lập cấp dự án | 🟡 P1 |
| **Tính nhất quán đa nền tảng TUI/Terminal** | Pi, Gemini CLI, Codex, Kimi | Đầu vào IME, ánh xạ phím, hiển thị SSH, tương thích terminal Windows | 🟡 P1 |
| **Khả năng hoàn tác thao tác** | Codex, Claude Code | Khôi phục lệnh `/undo`, checkpoint nguyên tử `/rewind`, bảo vệ cửa sổ phiên | 🟢 P2 |

**Phân tích chuyên sâu**: **Khủng hoảng thanh toán** là vấn đề nhức nhối của ngành trong Q2 năm 2026 — giới hạn tốc độ đăng ký Max của Claude Code, đốt token bất thường của Codex, báo cáo sai hạn ngạch của OpenCode, tất cả cùng chỉ ra **nợ cơ sở hạ tầng hệ thống đo lường**.

---

## 4. Phân tích định vị khác biệt

| Công cụ | Trọng tâm chính | Người dùng mục tiêu | Đặc điểm lộ trình kỹ thuật |
|:---|:---|:---|:---|
| **Claude Code** | Luồng công việc mã hóa sâu, tương tác cảm xúc | Nhà phát triển chuyên nghiệp cá nhân, người dùng nặng Max | Mã nguồn đóng, độc quyền mô hình Anthropic, `/buddy` từng khác biệt nay đã bị loại bỏ |
| **OpenAI Codex** | Kiến trúc Agent cấp doanh nghiệp, khả năng lập trình Hook | Nhóm kỹ thuật doanh nghiệp, nhà tích hợp nền tảng | Lõi Rust, sandbox TUI, hệ thống Hook (Pre/Post ToolUse) |
| **Gemini CLI** | Ngữ cảnh dài, đa phương thức, hệ sinh thái Google | Người dùng Google Cloud, nhà phát triển nghiên cứu | Vòng lặp Agent tự phát triển, Bộ nhớ tự động thử nghiệm, tích hợp Vertex AI |
| **Copilot CLI** | Tích hợp liền mạch hệ sinh thái IDE, dẫn đầu tiêu chuẩn MCP | Người dùng VS Code, DevOps doanh nghiệp | Liên kết hệ sinh thái Microsoft, đồng bộ hóa cấu hình hai chiều với VS Code, ưu tiên độ ổn định |
| **Kimi Code CLI** | Tương thích mô hình bên thứ ba, phản hồi sửa lỗi nhanh | Nhà phát triển Trung Quốc, người dùng chuyển đổi đa mô hình | Kiến trúc nhẹ, đóng góp bugkeep thường xuyên, điều chỉnh DeepSeek/MiMo |
| **OpenCode** | Mã nguồn mở có thể mở rộng, trừu tượng hóa đa nhà cung cấp | Cộng đồng mã nguồn mở, người dùng tự lưu trữ | Kiến trúc hàm Effect, tái cấu trúc lõi LLM gốc, hệ sinh thái plugin |
| **Pi** | Hỗ trợ đa mô hình tối đa, trau chuốt trải nghiệm terminal | Nhà phát triển Geek, người đam mê LLM cục bộ | Lái xe API mở rộng, bộ công cụ LLM cục bộ chính thức, ưu tiên quốc tế hóa |
| **Qwen Code** | An toàn và tuân thủ cấp doanh nghiệp, chi phí kiểm soát được | Doanh nghiệp Trung Quốc, kịch bản tài chính/chính phủ | Hợp đồng đọc-ghi bắt buộc trước, kiểm toán phân bổ cam kết, Telemetry hóa sản xuất |

**Cấu trúc cạnh tranh**: Hình thành sự phân hóa tứ phân **"Đội ngũ trải nghiệm mã nguồn đóng" (Claude/Codex)** vs **"Đội ngũ mở rộng mã nguồn mở" (OpenCode/Pi)** vs **"Đội ngũ liên kết hệ sinh thái" (Copilot/Gemini)** vs **"Đội ngũ tuân thủ dọc" (Kimi/Qwen)**.

---

## 5. Mức độ phổ biến và sự trưởng thành của cộng đồng

```
Mức độ trưởng thành ╲ Mức độ phổ biến    Thấp ◄─────────────────► Cao
    ▲
    │
 Cao │  [Copilot CLI]        [Codex]
    │    v1.0.40 ổn định      nâng cấp kiến trúc tích cực
    │    Cột mốc MCP          nợ Windows
    │
    │         [Pi]              [Claude Code]
    │       Nhà cung cấp mới dày đặc        khủng hoảng thanh toán chưa giải quyết
    │       Sửa lỗi quốc tế hóa thành công      kiến nghị cộng đồng 1.019👍
    │
    │    [Qwen Code]           [Gemini CLI]
    │    Đặc tính doanh nghiệp bám đuổi       thảm họa hiệu suất Agent
    │    Nợ CI lộ ra            áp lực 173 bình luận
    │
 Thấp │       [Kimi]            [OpenCode]
    │      Sửa lỗi phản hồi nhanh         "Đã sửa nhưng chưa hoàn toàn sửa"
    │      Vị trí sinh thái mơ hồ        đang tái cấu trúc lõi gốc
    │
    └────────────────────────────────────────►
```

| Giai đoạn | Công cụ | Đặc điểm |
|:---|:---|:---|
| **Giai đoạn trưởng thành** | Copilot CLI | Số phiên bản bước vào 1.x, nhịp độ phát hành ổn định, tập trung tích hợp hệ sinh thái |
| **Giai đoạn lặp lại nhanh** | Codex, Pi, Qwen Code | Đầu tư mạnh vào nâng cấp kiến trúc hoặc tính năng doanh nghiệp, thông lượng PR cao |
| **Giai đoạn sửa chữa niềm tin** | Claude Code, OpenCode | Các chức năng cốt lõi (chất lượng sửa lỗi/thanh toán) gây nghi ngờ cho cộng đồng, cần xây dựng lại niềm tin |
| **Giai đoạn tấn công hiệu suất** | Gemini CLI | Hiệu suất vòng lặp Agent là vấn đề sống còn, nợ kỹ thuật tập trung lộ ra |
| **Giai đoạn chiếm lĩnh hệ sinh thái** | Kimi | Phản hồi nhanh về khả năng tương thích của bên thứ ba, nhưng giá trị khác biệt cần được làm rõ |

---

## 6. Tín hiệu xu hướng đáng chú ý

| Tín hiệu | Bằng chứng | Giá trị tham khảo cho nhà phát triển |
|:---|:---|:---|
| **"Truyền tải nội dung suy luận" trở thành yêu cầu bắt buộc về khả năng tương thích** | Kimi #2141, OpenCode #24722/#25311, Qwen #3772 đều xoay quanh `reasoning_content` | Khi tích hợp mô hình chế độ Tư duy, giao thức tin nhắn cần dự phòng cơ chế truyền tải trường linh hoạt, tránh giả định mã hóa cứng |
| **MCP chuyển từ "kết nối được" sang "kết nối ổn định"** | Copilot CLI #3067 đóng băng terminal, #3064 hợp đồng mã thoát CI, Kimi #2112 bảo vệ danh sách công cụ lớn | Khi tích hợp môi trường sản xuất MCP, cần tự xây dựng giám sát tiến trình con, ngắt mạch quá tải, hợp đồng mã lỗi, không thể dựa vào hành vi mặc định của client |
| **Nén ngữ cảnh bước vào kỷ nguyên ngữ nghĩa** | Gemini CLI #24736 phân cụm Union-Find, Qwen #3698 nén tự động ACP | Trong các tình huống phiên dài, chiến lược lưu giữ/bỏ nhị phân đã lỗi thời, cần chú ý các giải pháp nén thông minh như phân cụm ngữ nghĩa, tần suất truy cập |
| **"Đọc-ghi bắt buộc trước" trở thành cơ sở an toàn** | Qwen #3774 cấm sửa đổi mù quáng, Claude Code #`project purge` dọn dẹp trạng thái | Chuỗi công cụ chỉnh sửa mã Agent cần tích hợp điều kiện tiên quyết "xác minh đọc", ngăn chặn các thay đổi phá hoại do ảo giác |
| **Chi phí quốc tế hóa trải nghiệm terminal trở nên rõ ràng** | Pi #4062 sửa lỗi IME tiếng Việt, Claude Code #14131 dấu phụ tiếng Đức, Gemini #26189 Windows Git Bash | Triển khai toàn cầu cần dự phòng ngân sách kiểm thử ma trận môi trường terminal (IME/phím/mã hóa/bộ lặp), không phải nhu cầu biên |
| **Hệ thống thanh toán trở thành cơ sở hạ tầng niềm tin** | Claude Code 2.478 bình luận khủng hoảng thanh toán, Codex #14593 đốt token, OpenCode #8030 báo cáo sai hạn ngạch | Khi đánh giá lựa chọn, **minh bạch hóa đo lường** nên được đưa vào chỉ số cốt lõi — ưu tiên các công cụ cung cấp API sử dụng thời gian thực hoặc nhật ký kiểm toán cục bộ |

---

> **Khuyến nghị ra quyết định**: Ngắn hạn (1-3 tháng) ưu tiên theo dõi **Copilot CLI** (tính xác định của hệ sinh thái MCP) và **Pi** (tính linh hoạt đa mô hình); Trung và dài hạn (6-12 tháng) theo dõi các tính năng an toàn cấp doanh nghiệp của **Qwen Code** và việc tái cấu trúc lõi LLM gốc của **OpenCode**. Đối với **Claude Code**, khuyến nghị đánh giá lại đầu tư môi trường sản xuất sau khi khủng hoảng thanh toán nhận được phản hồi cấu trúc chính thức.

---

## Báo cáo chi tiết từng công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Kỹ năng Claude Code: Chủ đề nóng cộng đồng

> Nguồn dữ liệu: [anthropics/skills](https://github.com/anthropics/skills)

# Báo cáo Chủ đề nóng Cộng đồng Kỹ năng Claude Code (tính đến ngày 2026-05-02)

---

## 1. Xếp hạng Kỹ năng Nóng (theo mức độ quan tâm của cộng đồng)

| Thứ hạng | Kỹ năng | Trạng thái | Mô tả chức năng | Chủ đề thảo luận cộng đồng |
|:---|:---|:---|:---|:---|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | 🟡 MỞ | Kiểm soát chất lượng dàn trang tài liệu do AI tạo: ngăn chặn các vấn đề dàn trang như cô đơn, quả phụ, đánh số sai | Chạm vào điểm yếu chung của việc tạo tài liệu Claude, tác giả nhấn mạnh "mọi tài liệu Claude tạo ra đều bị ảnh hưởng", gây đồng cảm sâu sắc |
| 2 | **[skill-quality-analyzer](https://github.com/anthropics/skills/pull/83)** + [skill-security-analyzer](https://github.com/anthropics/skills/pull/83) | 🟡 MỞ | Siêu kỹ năng: Đánh giá chất lượng Kỹ năng theo năm tiêu chí (cấu trúc, kỹ thuật gợi ý, bảo mật, v.v.) + quét lỗ hổng bảo mật | Công cụ kiểm toán Kỹ năng có hệ thống đầu tiên, lấp đầy khoảng trống tự quản trị của hệ sinh thái; việc không hợp nhất trong thời gian dài gây ra suy đoán "liệu chính thức có chấp nhận siêu kỹ năng không" |
| 3 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | 🟡 MỞ | Hướng dẫn kiểm thử toàn diện: triết lý kiểm thử, kiểm thử đơn vị, kiểm thử thành phần React, E2E, tích hợp CI/CD | Bao gồm mô hình Testing Trophy đến ví dụ mã cụ thể, phản hồi lại "chất lượng kiểm thử do Claude tạo ra không ổn định" |
| 4 | **[odt](https://github.com/anthropics/skills/pull/486)** | 🟡 MỞ | Tạo, điền, đọc định dạng OpenDocument (ODT/ODS) và chuyển đổi sang HTML | Yêu cầu tuân thủ của doanh nghiệp đối với định dạng tài liệu tiêu chuẩn mở/ISO; bổ sung cho các kỹ năng docx/pdf hiện có |
| 5 | **[sensory](https://github.com/anthropics/skills/pull/806)** | 🟡 MỞ | Tự động hóa gốc macOS: thay thế sử dụng máy tính dạng chụp màn hình thông qua AppleScript/osascript | Thiết kế quyền hai lớp (Tier 1/2) gây ra thảo luận, được coi là hướng khám phá "tích hợp sâu giữa Claude và hệ điều hành" |
| 6 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | 🟡 MỞ | Hệ thống bộ nhớ bền vững giữa các phiên AI Agent, chủ động gọi `proactive_context` để truy xuất bộ nhớ liên quan | Giải quyết hạn chế trạng thái không trạng thái cốt lõi của Claude; thiết kế cấu trúc bộ nhớ (nội dung phong phú, suy giảm thời gian, biểu đồ liên kết) được quan tâm |
| 7 | **[ServiceNow](https://github.com/anthropics/skills/pull/568)** | 🟡 MỞ | Bao phủ toàn bộ mô-đun nền tảng ServiceNow cấp doanh nghiệp: ITSM/ITOM/SecOps/FSM/SPM/CSDM, v.v. | Kỹ năng dọc doanh nghiệp nặng nhất (bao phủ 10+ mô-đun), phản ánh sự xâm nhập của Claude Code vào kịch bản vận hành CNTT của ITSM |
| 8 | **[claude-obsidian-reporter](https://github.com/anthropics/skills/pull/664)** | 🟡 MỞ | Tự động đọc cam kết Git, tạo báo cáo ngày/tuần/tháng có cấu trúc và ghi vào thư viện ghi chú Obsidian | Vòng lặp quy trình công việc của nhà phát triển: mã hóa → cam kết → tự động phục hồi; kết hợp với hệ sinh thái Obsidian nhắm chính xác vào nhóm người dùng PKM |

---

## 2. Xu hướng nhu cầu cộng đồng (từ Issues được rút ra)

| Hướng nhu cầu | Issue đại diện | Yêu cầu cốt lõi |
|:---|:---|:---|
| **Quản trị Kỹ năng cấp tổ chức** | [#228](https://github.com/anthropics/skills/issues/228) (9 bình luận, 7👍) | Chia sẻ Kỹ năng trong doanh nghiệp cần thoát khỏi chế độ nguyên thủy "truyền tệp Slack → tải lên thủ công", yêu cầu kho chia sẻ/phân phối liên kết trực tiếp |
| **Chất lượng và độ tin cậy của Kỹ năng** | [#202](https://github.com/anthropics/skills/issues/202), [#556](https://github.com/anthropics/skills/issues/556) | Bản thân `skill-creator` cần tái cấu trúc (tài liệu giáo dục → lệnh thao tác); công cụ đánh giá `run_eval.py` có tỷ lệ kích hoạt 0 là lỗi cần sửa |
| **Biên giới an toàn và tin cậy** | [#492](https://github.com/anthropics/skills/issues/492) (4 bình luận, 2👍) | Không gian tên `anthropic/` bị Kỹ năng cộng đồng lạm dụng, người dùng khó phân biệt chính thức/bên thứ ba, có bề mặt tấn công leo thang quyền |
| **Tương tác giao thức MCP** | [#16](https://github.com/anthropics/skills/issues/16) (4 bình luận) | Yêu cầu Kỹ năng được phơi bày dưới dạng công cụ MCP, cho phép gọi nghệ thuật thuật toán, v.v. một cách tiêu chuẩn hóa (`generateAlgorithmArt({...})`) |
| **Triển khai đa đám mây/doanh nghiệp** | [#29](https://github.com/anthropics/skills/issues/29) (4 bình luận) | Khả năng tương thích Kỹ năng trong các kịch bản lưu trữ mô hình của bên thứ ba như AWS Bedrock |
| **Độ ổn định cơ sở hạ tầng** | [#62](https://github.com/anthropics/skills/issues/62), [#406](https://github.com/anthropics/skills/issues/406), [#403](https://github.com/anthropics/skills/issues/403) | Sự bùng nổ tập trung của các vấn đề về độ tin cậy cấp P0 như mất Kỹ năng, lỗi 500 khi tải lên, lỗi xóa |

---

## 3. Kỹ năng có tiềm năng cao chờ hợp nhất (bình luận tích cực + cập nhật gần đây)

| Kỹ năng | PR | Đánh giá tiềm năng | Tiến triển chính |
|:---|:---|:---|:---|
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | ⭐⭐⭐⭐⭐ | Cập nhật liên tục sau khi tạo vào tháng 2026-03, giải quyết các điểm yếu phổ biến, không có tranh chấp kỹ thuật, kháng cự hợp nhất thấp |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | ⭐⭐⭐⭐⭐ | Cập nhật mới nhất ngày 2026-04-21, bao phủ kim tự tháp kiểm thử hoàn chỉnh, tạo thành vòng lặp khép kín với các kỹ năng tạo mã hiện có |
| **sensory** | [#806](https://github.com/anthropics/skills/pull/806) | ⭐⭐⭐⭐☆ | Lộ trình khác biệt về tự động hóa gốc macOS, thiết kế quyền hạn cấp bậc đã xem xét biên an ninh, có thể được chính thức ưu ái |
| **HADS (Human-AI Document Standard)** | [#616](https://github.com/anthropics/skills/pull/616) | ⭐⭐⭐⭐☆ | Quy ước Markdown nhẹ, giải quyết vấn đề bảo trì hai chiều "cùng một tài liệu phục vụ con người và AI", phù hợp với dòng chính của kỹ năng tài liệu |
| **Cải tiến frontend-design** | [#210](https://github.com/anthropics/skills/pull/210) | ⭐⭐⭐☆☆ | Tối ưu hóa kỹ năng hiện có thay vì bổ sung mới, cần đánh giá tích hợp với các kỹ năng thiết kế hiện có, nhưng hướng cải tiến "khả năng thực thi" đã rõ ràng |
| **Hỗ trợ định dạng ODT** | [#486](https://github.com/anthropics/skills/pull/486) | ⭐⭐⭐☆☆ | Cập nhật ngày 2026-04-14, nhu cầu tuân thủ doanh nghiệp cấp thiết, nhưng cần xác minh mức độ tái sử dụng mã với kỹ năng docx |

> **Lưu ý**: Các PR sửa lỗi của Lubrsy706 (sửa lỗi kích thước tệp PDF [ #538 ](https://github.com/anthropics/skills/pull/538), xác thực YAML [ #539 ](https://github.com/anthropics/skills/pull/539), xung đột ID DOCX [ #541 ](https://github.com/anthropics/skills/pull/541)) mặc dù là sửa lỗi, nhưng chạm vào độ ổn định cơ sở hạ tầng, dự kiến sẽ được ưu tiên hợp nhất.

---

## 4. Phân tích chuyên sâu hệ sinh thái Kỹ năng

> **Mâu thuẫn cốt lõi**: Cộng đồng đang chuyển từ "mở rộng số lượng kỹ năng" sang "quản trị chất lượng kỹ năng và phân phối đáng tin cậy" — Nhà phát triển không chỉ cần nhiều kỹ năng hơn, mà còn cần cơ sở hạ tầng kỹ năng có thể **chia sẻ an toàn, đánh giá đáng tin cậy, kiểm soát cấp tổ chức**; đồng thời, **chiều sâu lĩnh vực dọc** (ServiceNow, SAP, tự động hóa gốc macOS) đang thay thế khả năng phổ quát trở thành điểm khác biệt cạnh tranh.

---

---

# Claude Code: Báo cáo động thái cộng đồng hàng ngày | 2026-05-02

## Tổng quan hôm nay

Mâu thuẫn cốt lõi của cộng đồng hôm nay tập trung vào **hệ thống thanh toán và hạn ngạch**: Người dùng đăng ký Max tiếp tục báo cáo các vấn đề về giới hạn tốc độ bất thường, hơn 2.200 bình luận tích lũy trong nhiều Issue vẫn chưa nhận được phản hồi chính thức. Đồng thời, phiên bản v2.1.126 phát hành hai bản cập nhật hữu ích — chức năng phát hiện mô hình cổng và làm sạch trạng thái dự án, trong khi việc loại bỏ im lặng Kỹ năng `/buddy` đã gây ra kiến nghị quy mô lớn từ cộng đồng (👍 1.019).

---

## Phát hành phiên bản

### [v2.1.126](https://github.com/anthropics/claude-code/releases/tag/v2.1.126)

| Mục cập nhật | Mô tả |
|--------|------|
| **Phát hiện mô hình cổng** | Khi `ANTHROPIC_BASE_URL` trỏ đến cổng tương thích Anthropic, bộ chọn `/model` tự động lấy danh sách mô hình khả dụng từ điểm cuối `/v1/models` |
| **Làm sạch trạng thái dự án** | Thêm lệnh `claude project purge [path]` , có thể xóa hoàn toàn mọi dữ liệu trạng thái của dự án được chỉ định (lịch sử hội thoại, tác vụ, lịch sử tệp, mục cấu hình) |

> Mục thứ hai đặc biệt hữu ích cho các dự án sử dụng lâu dài, có thể giải quyết vấn đề suy giảm hiệu suất do phình to trạng thái.

---

## Chủ đề nóng Issues Cộng đồng

### 🔴 Khủng hoảng thanh toán và hạn ngạch (ưu tiên cao nhất)

| # | Issue | Trạng thái | Bình luận/👍 | Vấn đề cốt lõi |
|---|-------|------|---------|---------|
| [#16157](https://github.com/anthropics/claude-code/issues/16157) | Instantly hitting usage limits with Max subscription | 🟢 MỞ | 1.463 / 689 | Vượt giới hạn sử dụng ngay lập tức với đăng ký Max, chưa được giải quyết trong 4 tháng |
| [#38335](https://github.com/anthropics/claude-code/issues/38335) | Claude Max plan session limits exhausted abnormally fast since March 23 | 🟢 MỞ | 673 / 449 | Giới hạn phiên của gói Max tiêu hao nhanh bất thường kể từ ngày 23 tháng 3 (gấp 5-10 lần) |
| [#55053](https://github.com/anthropics/claude-code/issues/55053) | Sudden 5-hour session window squeeze starting Apr 29 | 🟢 MỞ | 22 / 9 | Cửa sổ 5 giờ đột ngột thu hẹp nghiêm trọng từ tối ngày 29 tháng 4, thao tác nhẹ tiêu tốn 20-25% trong 1 giờ |
| [#5088](https://github.com/anthropics/claude-code/issues/5088) | Claude Account Disabled After Payment for Max 5x Plan | 🟢 MỞ | 168 / 54 | Tài khoản bị khóa ngay sau khi thanh toán, liên quan đến hệ thống thanh toán và kiểm soát rủi ro |
| [#29579](https://github.com/anthropics/claude-code/issues/29579) | Rate limit reached despite Max subscription and only 16% usage | 🟢 MỞ | 150 / 92 | Đăng ký hiển thị chỉ 16% sử dụng nhưng vẫn bị giới hạn tốc độ |

**Tại sao quan trọng**: 5 Issue này với tổng cộng 2.478 bình luận, đại diện cho một cuộc khủng hoảng niềm tin mang tính hệ thống đối với người dùng cốt lõi đã trả phí. Mẫu vấn đề rất nhất quán — hệ thống đo lường hạn ngạch có lỗi nghiêm trọng hoặc chính sách thay đổi ngầm, nhưng không có giao tiếp minh bạch từ phía chính thức.

---

### 🟡 Tính năng quay lại và vấn đề trải nghiệm

| # | Issue | Trạng thái | Bình luận/👍 | Vấn đề cốt lõi |
|---|-------|------|---------|---------|
| [#45596](https://github.com/anthropics/claude-code/issues/45596) | **Bring Back Buddy — A Consolidated Plea from the Community** | 🟢 MỞ | **225 / 1.019** | Kỹ năng `/buddy` bị loại bỏ mà không có thông báo trong v2.1.97, cộng đồng cùng nhau kiến nghị khôi phục |
| [#46987](https://github.com/anthropics/claude-code/issues/46987) | API Error: Stream idle timeout - partial response received | 🟢 MỞ | 173 / 157 | Thời gian chờ luồng thường xuyên xảy ra trên đầu cuối macOS, ảnh hưởng đến độ ổn định của môi trường sản xuất |
| [#13480](https://github.com/anthropics/claude-code/issues/13480) | Oversized image breaks conversation permanently | 🔴 ĐÃ ĐÓNG | 82 / 81 | Ảnh quá lớn làm hỏng vĩnh viễn cuộc hội thoại, **đã sửa và đóng** |
| [#14131](https://github.com/anthropics/claude-code/issues/14131) | German umlauts randomly replaced with ASCII substitutes | 🟢 MỞ | 24 / 16 | Dấu phụ tiếng Đức bị thay thế ngẫu nhiên bằng ký tự ASCII (ä→ae), lỗi xử lý quốc tế hóa |
| [#54200](https://github.com/anthropics/claude-code/issues/54200) | Memory leak causing excessive RAM usage since v2.1.118 | 🟢 MỞ | 5 / 0 | Rò rỉ bộ nhớ sau v2.1.118, chiếm 10GB RAM chỉ sau 30 giây rảnh rỗi |

**Phản ứng của cộng đồng**: Sự kiện loại bỏ `/buddy` trở thành tâm điểm cảm xúc hôm nay — người dùng mô tả "thanh trạng thái trống rỗng như mất đi bạn đồng hành", bình luận có nhiều lượt thích đặt câu hỏi về quy trình ra quyết định sản phẩm bị thiếu. Vấn đề rò rỉ bộ nhớ tuy có ít bình luận nhưng ảnh hưởng đến khả năng sử dụng của các dự án cụ thể, người dùng rất cần công cụ chẩn đoán.

---

### 🟢 Khác đáng chú ý

| # | Issue | Trạng thái | Bình luận/👍 | Vấn đề cốt lõi |
|---|-------|------|---------|---------|
| [#55455](https://github.com/anthropics/claude-code/issues/55455) | Token drift in parallel Write tool calls: "shane" → "seine" | 🟢 MỞ | 2 / 0 | Tiền tố đường dẫn bị đổi tên do trôi token khi ghi song song, dẫn đến lỗi ghi |
| [#53171](https://github.com/anthropics/claude-code/issues/53171) | Literal "HERMES.md" in git commits triggers 400 "out of extra usage" | 🔴 ĐÃ ĐÓNG | 2 / 7 | Bộ lọc nội dung nhận dạng nhầm chuỗi ký tự cụ thể thành lỗi hạn ngạch, **đã sửa** |

---

## Tiến triển PR quan trọng

| # | PR | Tác giả | Trạng thái | Nội dung chức năng/sửa lỗi |
|---|-----|------|------|--------------|
| [#55433](https://github.com/anthropics/claude-code/pull/55433) | Fix/powershell silent exit windows | risingsamurai | 🟢 MỞ | **Sửa lỗi PowerShell Windows thoát lặng lẽ**: Sau hơn 50+ lần gọi công cụ Bash trong phiên dài, REPL biến mất không lỗi, nguyên nhân gốc là chuỗi lệnh bash dày đặc gây cạn kiệt tay cầm |
| [#55425](https://github.com/anthropics/claude-code/pull/55425) | Fix drag-and-drop image hang on macOS | risingsamurai | 🟢 MỞ | **Sửa lỗi treo khi kéo thả ảnh trên macOS**: Cơ chế xem trước hình thu nhỏ nổi trên macOS khiến tệp chưa được ghi hoàn chỉnh đã bị đọc, gây ra tình trạng khóa "pasting text..." |
| [#45721](https://github.com/anthropics/claude-code/pull/45721) | Add Claude Mythos operating contract for Veriflow immune system | GoodshytGroup | 🔴 ĐÃ ĐÓNG | Tác giả tự nhận "Idk what I'm doing", không có nội dung thực chất đã đóng |

> Chỉ có 3 PR có cập nhật hôm nay, mức độ đóng góp của cộng đồng thấp. Hai PR sửa lỗi đều tập trung vào các vấn đề ổn định, do cùng một nhà phát triển risingsamurai đệ trình, tập trung vào trải nghiệm nền tảng Windows/macOS.

---

## Xu hướng nhu cầu chức năng

Các hướng quan tâm của cộng đồng được rút ra từ 50 Issue đang hoạt động:

```
1. Minh bạch hóa phí và kiểm soát hạn ngạch  ████████████████████  hàng đầu áp đảo
2. Khôi phục bạn đồng hành AI/tương tác cảm xúc   ████████████          kiến nghị /buddy
3. Quản lý trạng thái và tối ưu hóa hiệu suất       ████████              lệnh purge, rò rỉ bộ nhớ
4. Kiểm soát an ninh và quyền hạn cấp doanh nghiệp      ██████                phạm vi monorepo, cô lập chứng chỉ
5. Trải nghiệm nhà phát triển và khả năng quan sát      █████                 công cụ chẩn đoán, mở rộng hook
6. Quốc tế hóa và địa phương hóa           ███                   tiếng Đức, xử lý đa ngôn ngữ
```

**Phân tích chuyên sâu**: Việc phát hành `claude project purge` rất kịp thời, nhưng cộng đồng cần **bảng điều khiển giám sát hạn ngạch chủ động** (sử dụng thời gian thực, bộ đếm ngược giới hạn tốc độ, cảnh báo tiêu thụ bất thường) thay vì công cụ dọn dẹp sau sự kiện.

---

## Tóm tắt điểm yếu của nhà phát triển

| Mức độ điểm yếu | Vấn đề cụ thể | Issue đại diện |
|---------|---------|-----------|
| **P0-Chặn sản xuất** | Đánh giá sai giới hạn tốc độ đăng ký Max dẫn đến đình trệ hoàn toàn công việc | #16157, #38335, #29579 |
| **P1-Tổn thất hiệu suất** | Cửa sổ phiên thu hẹp bất thường, buộc phải xây dựng lại ngữ cảnh thường xuyên | #55053 |
| **P2-Đứt gãy trải nghiệm** | Chức năng bị loại bỏ không có thông báo, phá vỡ sự phụ thuộc vào quy trình công việc của người dùng | #45596 (/buddy) |
| **P3-Khả năng bảo trì** | Rò rỉ bộ nhớ, phình to trạng thái thiếu phương tiện chẩn đoán | #54200, #33153 |
| **P4-Lỗi chi tiết** | Trôi token, mã hóa ký tự, tương tác kéo thả | #55455, #14131 |

**Lời kêu gọi nhu cầu thường xuyên**:
- **Trực quan hóa hạn ngạch thời gian thực** ("minh bạch như hóa đơn AWS")
- **Cơ chế bảo vệ cửa sổ phiên** (đánh dấu thao tác ưu tiên cao không tính vào giới hạn)
- **Thời gian thông báo hủy bỏ chức năng** (ít nhất là cảnh báo deprecation trong 2 chu kỳ phiên bản)
- **Cô lập tài nguyên cấp dự án** (kiểm soát quyền hạn thư mục con monorepo, đã đề xuất trong #55451)

---

*Báo cáo hàng ngày dựa trên dữ liệu công khai trên GitHub, không đại diện cho lập trường chính thức của Anthropic.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex: Báo cáo động thái cộng đồng hàng ngày | 2026-05-02

---

## Tổng quan hôm nay

Cộng đồng Codex hôm nay hoạt động sôi nổi xoay quanh hai tuyến chính là **độ ổn định trên nền tảng Windows** và **nâng cấp kiến trúc Hook/chuỗi công cụ**. Lõi Rust phát hành `v0.129.0-alpha.2`, đồng thời nhiều PR thúc đẩy cơ chế tin cậy Hook, tiêu chuẩn hóa lệnh gọi công cụ MCP và truyền tải phụ thuộc cơ sở dữ liệu trạng thái; phía Issues, lỗi trên diện rộng của Browser Use bản Windows và tranh cãi về tiêu thụ Token tiếp tục lan rộng.

---

## Phát hành phiên bản

### Lõi Rust v0.129.0-alpha.2
- **Thẻ**: `rust-v0.129.0-alpha.2`
- **Mô tả**: Phiên bản phát hành trước, các thay đổi cụ thể không được nêu chi tiết trong Ghi chú phát hành, nên chú ý đến cải thiện độ ổn định và điều chỉnh API trong các lần lặp lại alpha tiếp theo.

---

## Chủ đề nóng Issues Cộng đồng (chọn lọc 10 mục)

| # | Tiêu đề | Trạng thái | Bình luận/👍 | Điểm chính |
|---|---|---|---|---|
| [#14593](https://github.com/openai/codex/issues/14593) | **Tiêu thụ Token quá nhanh** | 🔴 MỞ | 568 / 248 | **Mức độ quan tâm cao nhất của cộng đồng**. Người dùng đăng ký Business phản ánh token bị đốt cháy bất thường, liên quan đến minh bạch hóa thanh toán và hiệu suất gọi mô hình, OpenAI vẫn chưa đưa ra nguyên nhân rõ ràng. |
| [#19464](https://github.com/openai/codex/issues/19464) | **GPT-5.5 hỗ trợ ngữ cảnh 1M Token** | 🔴 MỞ | 100 / 131 | Bản API đã hỗ trợ 1M, Codex vẫn giới hạn 400K, nhà phát triển kêu gọi căn chỉnh. Ảnh hưởng trực tiếp đến kịch bản xử lý ngữ cảnh lớn của mã. |
| [#9203](https://github.com/openai/codex/issues/9203) | **Khôi phục lệnh `/undo`** | 🔴 MỞ | 34 / 171 | Yêu cầu quay lại chức năng có nhiều lượt thích. Thiếu lưới an toàn trong trường hợp xóa/sửa tệp sai ngoài Git, điểm yếu trải nghiệm người dùng TUI. |
| [#11626](https://github.com/openai/codex/issues/11626) | **`/rewind` hoàn nguyên mã + trạng thái hội thoại** | 🔴 MỞ | 21 / 107 | Tăng cường có nhiều lượt thích. Hiện tại chỉ hoàn nguyên hội thoại, sửa đổi mã cần hoàn tác thủ công, nhà phát triển mong muốn khôi phục checkpoint nguyên tử. |
| [#13542](https://github.com/openai/codex/issues/13542) | **Windows: Quyền truy cập `rg` tích hợp bị từ chối** | 🔴 MỞ | 36 / 26 | Vấn đề quyền đường dẫn sandbox của phiên bản Desktop Windows, ảnh hưởng đến khả năng sử dụng chuỗi công cụ tích hợp, trải nghiệm tích hợp PowerShell bị suy giảm. |
| [#20591](https://github.com/openai/codex/issues/20591) | **Lệnh `/goal` bị lỗi trong 0.128.0** | ✅ ĐÃ ĐÓNG | 14 / 2 | Sửa lỗi nhanh trong ngày. Lỗi quay lại TUI, phản ánh độ ổn định của lệnh slash cần tăng cường phạm vi kiểm thử. |
| [#20048](https://github.com/openai/codex/issues/20048) | **Windows Browser Use: app-server không khởi chạy** | 🔴 MỞ | 6 / 1 | Nhóm vấn đề cùng nguồn với #20048. Lỗi cốt lõi của tự động hóa trình duyệt Desktop Windows, npm CLI bình thường nhưng khởi động tích hợp bị lỗi. |
| [#20206](https://github.com/openai/codex/issues/20206) | **Windows Browser Use: lỗi os 3 không tìm thấy đường dẫn** | 🔴 MỞ | 5 / 0 | Lỗi hệ thống tiếng Đức, ám chỉ lỗi xử lý đường dẫn quốc tế hóa hoặc lỗi đóng gói. |
| [#19558](https://github.com/openai/codex/issues/19558) | **Nén từ xa GPT-5.5 thất bại dẫn đến hỏng luồng** | 🔴 MỞ | 10 / 8 | Vấn đề độ ổn định của dịch vụ nén ngữ cảnh, kích hoạt xong chỉ có thể tạo phiên mới, ảnh hưởng nghiêm trọng đến tính liên tục của nhiệm vụ dài. |
| [#20699](https://github.com/openai/codex/issues/20699) | **CTF/Kiểm thử xâm nhập bị nhận dạng sai là rủi ro an ninh mạng** | ✅ ĐÃ ĐÓNG | 3 / 0 | Tranh cãi về việc chính sách an ninh chặn quá mức, đóng trong ngày nhưng nguyên nhân gốc chưa rõ, mức độ quan tâm của cộng đồng mũ trắng cao. |

---

## Tiến triển PR quan trọng (chọn lọc 10 mục)

| # | Tiêu đề | Tác giả | Nội dung cốt lõi |
|---|---|---|---|
| [#20321](https://github.com/openai/codex/pull/20321) | **Siêu dữ liệu tin cậy Hook và thực thi bắt buộc** | `abhinav-oai` | Thống nhất hệ thống tin cậy Hook của App và TUI, Hook không được quản lý cần được ủy quyền rõ ràng mới có thể chạy, biên an ninh được siết chặt. |
| [#20689](https://github.com/openai/codex/pull/20689) | **Truyền tải cơ sở dữ liệu trạng thái, Agent Graph Store** | `rasmusrygaard` | Truyền tải Agent Graph Store làm phụ thuộc thực tế (tương tự Thread Store), hỗ trợ các triển khai không phải SQLite, tách lớp lưu trữ. |
| [#20708](https://github.com/openai/codex/pull/20708) | **RPC trạng thái sẵn sàng sandbox Windows** | `iceweasel-oai` | Thêm RPC chỉ đọc để phát hiện trạng thái cấu hình sandbox Windows sớm, tránh phát hiện cần cài đặt lại khi gọi công cụ, cải thiện UX. |
| [#20566](https://github.com/openai/codex/pull/20566) | **Tối ưu hóa gợi ý Tool Suggest** | `mzeng-openai` | Đổi tên `tool_suggest` thành `request_plugin_install`, loại bỏ nhầm lẫn ngữ nghĩa với `tool_search`, giảm kích hoạt sai. |
| [#20677](https://github.com/openai/codex/pull/20677) | **Chuyển đổi lệnh gọi công cụ MCP thành Turn Items** | `pakrym-oai` | Di chuyển ToolCall MCP từ sự kiện legacy begin/end sang `TurnItem` cốt lõi, thống nhất vòng đời, sự kiện còn lại chỉ dùng để fanout tương thích. |
| [#19040](https://github.com/openai/codex/pull/19040) | **API thực thi lệnh không qua sandbox** | `euroelessar` | Cung cấp đường dẫn thực thi đồng cấu trúc nhưng bỏ qua lựa chọn sandbox cho client App-server, phù hợp với môi trường quản lý bên ngoài. |
| [#20703](https://github.com/openai/codex/pull/20703) | **PostToolUse hỗ trợ updatedToolOutput** | `abhinav-oai` | Hook có thể thay thế đầu ra công cụ mà mô hình nhìn thấy, hỗ trợ xử lý sau khi khử trùng / chuẩn hóa, tăng khả năng lập trình của Hook. |
| [#20676](https://github.com/openai/codex/pull/20676) | **Sửa lỗi đăng nhập CA tùy chỉnh sau khi phát hiện TLS proxy** | `jgershen-oai` | Buộc `codex-client` sử dụng rustls và đăng ký chứng chỉ gốc gốc, giải quyết lỗi đăng nhập trong kịch bản proxy phát hiện TLS của doanh nghiệp (SE-6311). |
| [#20709](https://github.com/openai/codex/pull/20709) | **Compact yêu cầu tái sử dụng phương thức phụ trợ responses** | `aibrahim-oai` | Chia sẻ logic xây dựng yêu cầu giữa `/responses/compact` và `/responses`, ngăn chặn bỏ sót trường mới, duy trì tính nhất quán. |
| [#20561](https://github.com/openai/codex/pull/20561) | **Truyền tay cầm cơ sở dữ liệu trạng thái cho người tiêu dùng** | `euroelessar` | Loại bỏ vấn đề đa kết nối do tải lười `OnceCell`, khắc phục cạnh tranh `database is locked` của SQLite. |

---

## Xu hướng nhu cầu chức năng

Dựa trên 50 Issue đang hoạt động, sự quan tâm của cộng đồng có **ba cực**:

| Hướng | Issue đại diện | Đặc điểm mức độ phổ biến |
|---|---|---|
| **Khả năng và mô hình ngữ cảnh** | #19464 (ngữ cảnh 1M), #19558 (lỗi nén) | Cửa sổ ngữ cảnh của Codex khi áp dụng GPT-5.5, độ ổn định nén trở thành nhu cầu cấp thiết cho các dự án lớn |
| **Trải nghiệm nền tảng Windows** | #13542 (quyền rg), #20048/#20206/#20661 (Browser Use), #17770 (lưu lại tiến trình) | Chuỗi công cụ, tự động hóa trình duyệt, các vấn đề vòng đời tiến trình của phiên bản Desktop Windows bùng nổ tập trung |
| **Bảo mật và tin cậy TUI/CLI** | #9203 (/undo), #11626 (/rewind), #6395 (bộ nhớ quyền) | Nhà phát triển rất mong muốn có cơ chế "hoàn tác thao tác", giảm lo lắng về rủi ro do AI tự chỉnh sửa |
| **Sandbox và GPU** | #3141 (truy cập GPU) | Chạy quy trình công việc AI/ML trong sandbox bị hạn chế, nhu cầu kịch bản biên |

---

## Điểm quan tâm của nhà phát triển

### 🔴 Điểm yếu tần suất cao

1. **Tính minh bạch của phí Token** (#14593)
   - Hiện tượng: Người dùng gói Business/Pro phản ánh rộng rãi về tiêu thụ bất thường, thiếu kiểm toán lệnh gọi chi tiết, khủng hoảng niềm tin.

2. **Trải nghiệm công dân hạng hai trên Windows**
   - Chức năng Browser Use gần như không thể sử dụng trên Windows (#20048/#20206/#20661), quyền công cụ tích hợp `rg` bị đứt gãy (#13542), lưu lại tiến trình sau khi đóng (#17770).

3. **Chính sách an ninh chặn nhầm** (#19601/#20699/#20495)
   - CTF, kiểm thử xâm nhập, nghiên cứu an ninh hợp pháp bị từ chối dịch vụ bởi mô hình, mức độ chi tiết của chính sách thô, không có kênh khiếu nại.

### 🟡 Kỳ vọng kiến trúc

4. **Khả năng lập trình của hệ sinh thái Hook**
   - PR #20321/#20702/#20703 cho thấy OpenAI đang đẩy nhanh việc mở rộng khả năng của hệ thống Hook (PreToolUse/PostToolUse), cộng đồng mong đợi các kịch bản nâng cao như công cụ động, thay thế đầu ra.

5. **Tách biệt lưu trữ trạng thái**
   - PR #20689/#20561 thúc đẩy truyền tải phụ thuộc SQLite và tái sử dụng kết nối, mở đường cho lưu trữ từ xa, triển khai đa phiên bản.

---

*Báo cáo hàng ngày dựa trên dữ liệu công khai, có thể truy cập trực tiếp để có được cuộc thảo luận đầy đủ.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI: Báo cáo động thái cộng đồng hàng ngày | 2026-05-02

---

## 1. Tổng quan hôm nay

Hôm nay không có phiên bản mới nào được phát hành, nhưng mức độ hoạt động của mã rất cao: chức năng **Hộp thư bộ nhớ thông minh Tự động Bộ nhớ** đã bước vào giai đoạn thử nghiệm, sẽ tự động trích xuất bộ nhớ bền vững từ các phiên lịch sử; đồng thời nhiều bản sửa lỗi cốt lõi đã được hợp nhất, bao gồm khôi phục trạng thái phiên, vòng lặp vô hạn thử lại và các vấn đề tương thích terminal Windows. Hiệu suất và độ tin cậy vẫn là các chủ đề gây bối rối nhất cho cộng đồng.

---

## 2. Phát hành phiên bản

> **Không có phiên bản mới nào được phát hành** (Không có Bản phát hành nào trong 24 giờ qua)

---

## 3. Chủ đề nóng Issues Cộng đồng

| # | Tiêu đề | Trạng thái | Bình luận | Điểm chính |
|---|---|---|---|---|
| [#22141](https://github.com/google-gemini/gemini-cli/issues/22141) | Vòng lặp Agent gây ra CLI cực kỳ chậm (hơn 1 giờ) | 🔥 MỞ | 173 | **Điểm yếu nhất của cộng đồng**: Các nhiệm vụ chỉnh sửa mã quy mô nhỏ rơi vào vòng lặp agent chết + độ trễ phản hồi mô hình, 145 lượt thích phản ánh tính phổ biến. Cần tối ưu hóa chiến lược gọi công cụ và thử lại khẩn cấp. |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Hệ thống đánh giá hành vi cấp thành phần (EPIC) | 📋 MỞ | 5 | Cơ sở hạ tầng chất lượng do người bảo trì chủ trì: dựa trên 76 bài kiểm tra đánh giá hành vi, xây dựng đánh giá chi tiết hơn cấp thành phần, ảnh hưởng trực tiếp đến việc lặp lại độ tin cậy của agent. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Đọc/ghi tệp nhận biết AST và ánh xạ kho mã | 📋 MỞ | 5 | Chủ đề tiên phong về công nghệ: định vị phạm vi mã chính xác thông qua cây cú pháp, giảm lãng phí token và đọc sai, có thể cải thiện về cơ bản hiệu suất agent trong các kịch bản kho mã lớn. |
| [#21185](https://github.com/google-gemini/gemini-cli/issues/21185) | Cài đặt quyền riêng tư toàn cầu: Kiểm soát sử dụng dữ liệu Gemini Code Assist | 📋 MỞ | 4 | **Nhu cầu tuân thủ cấp thiết**: Người dùng doanh nghiệp/cá nhân yêu cầu công tắc quyền riêng tư cấp tài khoản, hiện tại mỗi lần cần chọn thủ công, cản trở việc triển khai quy mô. |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Agent báo cáo sai "thành công" sau khi đạt vòng lặp tối đa | 📋 MỞ | 4 | Lỗi nghiêm trọng ẩn giấu: `codebase_investigator` và các agent con khác trả về thành công MỤC TIÊU do ngắt quãng MAX_TURNS, dẫn đến người dùng đánh giá sai nhiệm vụ đã hoàn thành. |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | Hỏi đi hỏi lại về quyền tệp cùng một tệp | 📋 MỞ | 3 | Điểm ma sát trải nghiệm người dùng: cài đặt "cho phép tất cả các phiên trong tương lai" không có hiệu lực, làm suy yếu cảm giác tin cậy của quy trình công việc tự động. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Giả chết "chờ nhập" sau khi lệnh shell thực thi | 📋 MỞ | 2 | Lỗi đồng bộ hóa trạng thái terminal: lệnh đơn giản đã hoàn thành nhưng UI vẫn hiển thị đang chạy, gây trở ngại cho người dùng đánh giá. |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | Agent tùy tiện tạo tập lệnh tạm thời trong thư mục | 📋 MỞ | 2 | Vấn đề ô nhiễm không gian làm việc: agent lạm dụng tập lệnh tạm thời sau khi thực thi shell, làm tăng chi phí dọn dẹp trước khi cam kết. |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent bỏ qua cài đặt settings.json | 📋 MỞ | 2 | Lỗi nhất quán cấu hình: các mục ghi đè như `maxTurns` bị bỏ qua, làm suy yếu khả năng tùy chỉnh của người dùng. |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | Bộ nhớ: phân tách toàn cục vs cấp dự án | 📋 MỞ | 1 | Thiết kế kiến trúc sản phẩm: ranh giới lưu trữ giữa sở thích của người dùng (`~/.gemini/`) và quy ước mã (`.gemini/`) ảnh hưởng trực tiếp đến trải nghiệm cộng tác đa dự án. |

---

## 4. Tiến triển PR quan trọng

| # | Tiêu đề | Trạng thái | Nội dung chức năng/sửa lỗi |
|---|---|---|-------------|
| [#26338](https://github.com/google-gemini/gemini-cli/pull/26338) | Hộp thư Bộ nhớ Tự động (thử nghiệm) | 🟢 MỞ | **Chức năng nặng ký**: Trích xuất bản vá bộ nhớ được hợp nhất từ lịch sử phiên quét agent trong nền, người dùng xem xét và áp dụng. Tắt theo mặc định, cần bật `experimental.autoMemory`. |
| [#26355](https://github.com/google-gemini/gemini-cli/pull/26355) | Tích hợp quản lý vòng đời an ninh quy mô lớn | 🟢 MỞ | Hiệu quả kỹ thuật: hợp nhất quy trình làm việc bảo trì kho lưu trữ phân mảnh, tối ưu hóa truy vấn phân loại issue, hỗ trợ tăng trưởng quy mô dự án. |
| [#26332](https://github.com/google-gemini/gemini-cli/pull/26332) | Sửa lỗi ngắt kết nối chế độ agent máy khách ACP | 🔴 ĐÃ ĐÓNG | Sửa lỗi tích hợp IDE quan trọng: giải quyết lỗi đồng bộ hóa chế độ (Plan/YOLO/Auto-Edit) với máy khách JetBrains/Zed, cập nhật trạng thái UI hai chiều. |
| [#24736](https://github.com/google-gemini/gemini-cli/pull/24736) | Chiến lược nén ngữ cảnh Union-Find | 🟢 MỞ | **Tối ưu hóa hiệu suất**: Thay thế chiến lược lưu giữ/bỏ nhị phân, tổ chức tin nhắn lịch sử thành "bộ đệm nóng + rừng lạnh" thông qua phân cụm ngữ nghĩa, quản lý cửa sổ ngữ cảnh thông minh hơn. |
| [#26303](https://github.com/google-gemini/gemini-cli/pull/26303) | Tăng cường vai trò đánh giá Bot và phản hồi đa vòng | 🟢 MỞ | Cơ sở hạ tầng chất lượng: làm rõ vai trò chỉ đánh giá của agent phê bình, bổ sung vòng lặp phản hồi đa vòng để giải quyết xung đột kiến trúc, nâng cao độ tin cậy của đánh giá mã tự động. |
| [#26189](https://github.com/google-gemini/gemini-cli/pull/26189) | Phím Backspace kích hoạt xóa từ sai trên Git Bash Windows | 🟢 MỞ | **Tương thích Windows**: Sửa lỗi chuỗi ESC+DEL bị nhận dạng sai thành Alt+Backspace dẫn đến xóa toàn bộ từ thay vì một ký tự, ảnh hưởng đến trải nghiệm chỉnh sửa cơ bản. |
| [#26342](https://github.com/google-gemini/gemini-cli/pull/26342) | Đặt lại trạng thái cấp phiên khi khôi phục phiên | 🔴 ĐÃ ĐÓNG | **Sửa lỗi ổn định**: giải quyết vấn đề "phân tách trạng thái" nơi dịch vụ nội bộ vẫn liên kết với ID phiên cũ sau khi resume, tránh nhầm lẫn danh tính và quyền hạn. |
| [#26352](https://github.com/google-gemini/gemini-cli/pull/26352) | Lọc các loại đa phương thức không được hỗ trợ trong phản hồi công cụ | 🟢 MỞ | **Tương thích API**: Thực hiện cơ chế "chuyển hướng thông minh", chặn dữ liệu nhị phân như `audio/mpeg`, `video/mp4`, tránh lỗi API Gemini trả về 400. |
| [#26306](https://github.com/google-gemini/gemini-cli/pull/26306) | Ngăn chặn vòng lặp thử lại vô hạn do lỗi liên tục của backend | 🟢 MỞ | **Sửa lỗi tính sẵn sàng cao**: Khi cả mô hình chính và mô hình dự phòng đều lỗi, dừng vòng lặp vô hạn, tránh CLI bị treo hoàn toàn, cực kỳ quan trọng đối với các kịch bản gián đoạn dịch vụ. |
| [#25362](https://github.com/google-gemini/gemini-cli/pull/25362) | Cấu hình phủ sóng khu vực Vertex AI `vertexLocation` | 🟢 MỞ | **Khả năng sử dụng mô hình**: Cho phép chỉ định các khu vực không mặc định như `global`, giải quyết lỗi 404 của mô hình xem trước (như `gemini-3.1-pro-preview`) trong `us-central1`. |

---

## 5. Xu hướng nhu cầu chức năng

Năm hướng tập trung chính của cộng đồng được rút ra từ 50 Issue đang hoạt động:

| Xu hướng | Issue đại diện | Mức độ yêu cầu của cộng đồng |
|---|---|---|
| **🚀 Hiệu suất và độ tin cậy của Agent** | #22141, #22323, #23556, #23571 | ⭐⭐⭐⭐⭐ |
| Mâu thuẫn cốt lõi: hiệu suất vòng lặp agent, nén ngữ cảnh, phối hợp agent con, biên gọi công cụ. Nhiều người dùng bị mắc kẹt bởi "chậm chạp cho nhiệm vụ nhỏ" |
| **🧠 Bộ nhớ thông minh và quản lý ngữ cảnh** | #22819, #22809, #26338 | ⭐⭐⭐⭐⭐ |
| Từ lưu trữ thụ động sang trích xuất chủ động: hộp thư Tự động Bộ nhớ, định tuyến bộ nhớ toàn cục/dự án, chiến lược ghi bộ nhớ chủ động, tạo thành nền tảng trải nghiệm cá nhân hóa lâu dài. |
| **🔒 Quản trị an ninh và quyền hạn** | #21185, #24916, #22672, #23897 | ⭐⭐⭐⭐☆ |
| Quyền riêng tư dữ liệu (cài đặt toàn cục), tính bền vững của quyền tệp, bảo vệ thao tác phá hoại, hạ cánh duyên dáng sau khi gọi công cụ agent con bị từ chối. |
| **🖥️ Trải nghiệm Terminal và Tích hợp IDE** | #25166, #24202, #24546, #26189, #26332 | ⭐⭐⭐⭐☆ |
| Hiển thị kịch bản SSH, tương thích terminal Windows, tích hợp trình soạn thảo bên ngoài, đồng bộ hóa chế độ giao thức ACP, tính nhất quán đa nền tảng vẫn là điểm yếu. |

---

## 6. Điểm quan tâm của nhà phát triển

### 🔴 Điểm yếu tần suất cao

1. **Thảm họa hiệu suất vòng lặp Agent (#22141)**
   - Hiện tượng: Chỉnh sửa 1-3 tệp mất hơn 1 giờ, trả lời câu hỏi đơn giản trong 13 phút
   - Phỏng đoán nguyên nhân gốc: Quá nhiều lượt đi-về gọi công cụ + độ trễ phản hồi mô hình + thiếu cơ chế ngắt hiệu quả
   - Tâm trạng cộng đồng: Lo lắng, 173 bình luận liên tục gây áp lực, cần lộ trình tối ưu hóa chính thức.

2. **Đồng bộ hóa trạng thái Terminal không đáng tin cậy (#25166, #24202)**
   - Văn bản nhòe trong kịch bản SSH, UI giả chết sau khi lệnh shell hoàn thành, màn hình bị hỏng sau khi thoát trình soạn thảo bên ngoài
   - Vấn đề cơ bản: Tương tác giữa lớp hiển thị ink và chế độ terminal chưa được xử lý hoàn hảo

3. **Phân mảnh hệ thống cấu hình (#22267, #21185)**
   - Browser Agent bỏ qua `settings.json`, cài đặt quyền riêng tư thiếu kiểm soát toàn cục cấp tài khoản
   - Yêu cầu: Thống nhất cấp cấu hình (toàn cục → dự án → phiên) và đảm bảo tính nhất quán hiệu lực

### 🟡 Kỳ vọng mới

- **Chuỗi công cụ nhận biết AST (#22745, #22746)**: Nhà phát triển mong đợi tiến hóa từ "tìm kiếm văn bản thô" sang "định vị ngữ nghĩa chính xác", đặc biệt có lợi cho các monorepo lớn
- **Thông minh hóa bộ nhớ (#26338 tính năng thử nghiệm)**: Từ `/remember` thủ công đến trích xuất tự động, là bước nhảy vọt quan trọng để trợ lý AI "càng dùng càng hiểu tôi"
- **Hỗ trợ cấp doanh nghiệp Vertex AI (#25362)**: Cấu hình khu vực linh hoạt, cập nhật nhanh chóng các phiên bản mô hình, ảnh hưởng trực tiếp đến ý định áp dụng của doanh nghiệp

---

> 📌 **Nguồn dữ liệu**: [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | Chu kỳ thống kê: 2026-05-01 đến 2026-05-02

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI: Báo cáo động thái cộng đồng hàng ngày | 2026-05-02

---

## 1. Tổng quan hôm nay

Hôm nay Copilot CLI phát hành phiên bản ổn định **v1.0.40**, tập trung sửa lỗi hiển thị UI, quản lý trạng thái Agent tùy chỉnh và vấn đề hiển thị phiên bản plugin. Các Issues cộng đồng có mức độ hoạt động cao, **tích hợp hệ sinh thái MCP** trở thành tiêu điểm tuyệt đối — từ hỗ trợ xác thực OAuth đến đóng băng terminal do lỗi của tiến trình con stdio, đến lỗi phân tích kết quả trả về mảng JSON, các Issues liên quan đến MCP chiếm một nửa số lượng.

---

## 2. Phát hành phiên bản

### v1.0.40 (2026-05-01)

| Mục cập nhật | Mô tả |
|--------|------|
| **Sửa lỗi trang trí nhánh PR** | Hiển thị nhánh PR ở chân trang không còn bị ảnh hưởng bởi độ dài tên mô hình |
| **Đặt lại trạng thái Agent** | `/clear` và `/new` hiện đặt lại đúng Agent tùy chỉnh đã chọn |
| **Tối ưu hóa hiển thị luồng** | Văn bản phản hồi của Assistant được hiển thị luồng mượt mà hơn |
| **Đồng bộ hóa phiên bản plugin** | `copilot plugin list` hiển thị đúng phiên bản sau `copilot plugin update` |

🔗 [Trang phát hành](https://github.com/github/copilot-cli/releases/tag/v1.0.40)

---

## 3. Chủ đề nóng Issues Cộng đồng

> Hôm nay có tổng cộng 16 Issues đang hoạt động, trong đó **5 Issues đã đóng, 11 Issues vẫn đang mở**. Chọn lọc 10 Issues theo mức độ ảnh hưởng kỹ thuật và mức độ quan tâm của cộng đồng:

| # | Trạng thái | Tiêu đề | Tác giả | 👍 | Điểm chính |
|---|:--:|------|------|:--:|---------|
| **#33** | ✅ ĐÃ ĐÓNG | [Support OAuth http MCP servers](https://github.com/github/copilot-cli/issues/33) | Tiberriver256 | 110 | **Đóng mốc quan trọng**: Yêu cầu được cộng đồng bình chọn cao (110👍) trong 7 tháng, cuối cùng đã hỗ trợ máy chủ MCP xác thực OAuth như Figma, Atlassian, đánh dấu Copilot CLI chính thức tích hợp hệ sinh thái MCP từ xa cấp doanh nghiệp |
| **#1081** | 🔴 MỞ | [AggregateError: Failed to list models](https://github.com/github/copilot-cli/issues/1081) | saiaprameya | 8 | **Bug chặn người dùng doanh nghiệp**: Đăng nhập thành công nhưng tất cả các lệnh đều thất bại do lỗi lấy danh sách mô hình, theo dõi liên tục với 23 bình luận, ảnh hưởng đến khả năng sử dụng của Copilot Enterprise |
| **#3019** | 🔴 MỞ | [Breaking Change: .vscode/mcp.json is no longer supported](https://github.com/github/copilot-cli/issues/3019) | kchungmsft | 2 | **Đứt gãy cấu hình giữa các công cụ**: Cấu hình MCP của VS Code và CLI tách biệt, người dùng nội bộ Microsoft kêu gọi thống nhất cấu hình, phản ánh điểm yếu phân mảnh của hệ sinh thái đa client |
| **#3067** | 🔴 MỞ | [Terminal freezes when stdio MCP child crashes](https://github.com/github/copilot-cli/issues/3067) | Windyztree | 0 | **Lỗi chí mạng về độ ổn định**: Tiến trình con MCP bị lỗi khiến toàn bộ terminal không phản hồi, Ctrl+C không có tác dụng, chỉ có thể buộc đóng — Bug có rủi ro cao trong môi trường sản xuất |
| **#3030** | 🔴 MỞ | [Sub-agent MCP tool calls fail with JSON arrays](https://github.com/github/copilot-cli/issues/3030) | mihaiLucian | 0 | **Lỗi sâu trong kiến trúc Agent**: Lỗi xác thực Zod khi agent con gọi công cụ MCP, cùng một công cụ hoạt động bình thường trên agent chính, lộ ra sự không nhất quán trong tuần tự hóa lớp điều phối đa agent |
| **#2880** | ✅ ĐÃ ĐÓNG | [Add `keep-alive` as config value or CLI flag](https://github.com/nextDouble/copilot-cli/issues/2880) | MattKotsenas | 1 | **Hiện thực hóa tối ưu hóa trải nghiệm**: Cấu hình cố định `/keep-alive busy` thử nghiệm cuối cùng cũng có thể được cấu hình lâu dài, giảm ma sát nhập liệu lặp lại |
| **#3070** | 🔴 MỞ | [Custom agent frontmatter: accept array for `model:`](https://github.com/nextDouble/copilot-cli/issues/3070) | dknappettmsft | 0 | **Nhu cầu căn chỉnh tính năng VS Code**: Trường `model` của Agent tùy chỉnh cần hỗ trợ mảng để thực hiện bộ chọn mô hình, nhu cầu về khả năng tương thích cấu hình đa nền tảng |
| **#3066** | 🔴 MỞ | [macOS prerelease hides Opus 4.7 reasoning variants](https://github.com/nextDouble/copilot-cli/issues/3066) | supreeth20 | 0 | **Lỗi hiển thị định tuyến mô hình**: Người dùng Pro+ đã trả phí không thể truy cập các cấp suy luận cao của Claude Opus 4.7, không khớp với khả năng định tuyến backend |
| **#3068** | 🔴 MỞ | [session.setModel() does not update footer UI](https://github.com/nextDouble/copilot-cli/issues/306