# Báo cáo Tình hình Cộng đồng Công cụ AI CLI Hàng ngày 2026-04-08

> Thời gian tạo: 2026-04-08 00:13 UTC | Công cụ được đề cập: 8

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

## So sánh Ngang

# Báo cáo Phân tích So sánh Ngang Hệ sinh thái Công cụ AI CLI | 2026-04-08

---

## 1. Toàn cảnh Hệ sinh thái

Hệ sinh thái công cụ AI CLI hiện tại đang có **thế cục "ba siêu, đa cường"**: Claude Code, OpenAI Codex, GitHub Copilot CLI chiếm ưu thế tâm lý nhờ sự hậu thuẫn của các tập đoàn lớn, nhưng cộng đồng có nhu cầu nhất quán về **tính minh bạch phí, khả năng tự lưu trữ/mã nguồn mở, và trải nghiệm gốc trên terminal**. Google Gemini CLI và Kimi CLI đang chuyển từ "đuổi kịp tính năng" sang "xây dựng nền tảng chất lượng", trong khi các công cụ mới nổi như OpenCode, Pi, Qwen Code đang tìm kiếm không gian khác biệt hóa thông qua **tổng hợp đa mô hình, tương thích hệ sinh thái Claude, và tối ưu hóa cho các kịch bản dọc**. Công nghệ cốt lõi đang có xu hướng dịch chuyển nhanh chóng sang **Rust/TypeScript**, MCP (Model Context Protocol) đang trở thành tiêu chuẩn mở rộng liên công cụ, nhưng mức độ trưởng thành của các triển khai còn chênh lệch.

---

## 2. So sánh Hoạt động của từng Công cụ

| Công cụ | Issues Hôm nay | PRs Hôm nay | Bản phát hành Phiên bản | Hoạt động Cốt lõi |
|:---|:---:|:---:|:---|:---|
| **Claude Code** | 8 mục hoạt động (#38335 456 bình luận) | 9 mục mở | v2.1.94 | Hỗ trợ Bedrock Mantle, tăng cường độ suy luận mặc định; tranh cãi về hạn ngạch Max tiếp tục lan rộng |
| **OpenAI Codex** | 10 mục nổi bật (#14593 464 bình luận) | 10 mục mở | 5 phiên bản alpha (.13-.17) | Tái cấu trúc Rust liên tục; tối ưu độ trễ khởi động TUI, triển khai dẫn động máy chủ MCP đang được xem xét |
| **Gemini CLI** | 10 mục nổi bật | 10 mục mở | v0.37.0-preview.2 | Kế hoạch kiểm tra hồi quy hiệu suất 6 mục; sửa lỗi rò rỉ bộ nhớ Scheduler |
| **Copilot CLI** | 10 mục nổi bật (30+ đã đóng) | 2 mục mở | v1.0.19→v1.0.21 | Lệnh `copilot mcp` chính thức phát hành; độ ổn định hiển thị terminal được cải thiện đáng kể |
| **Kimi CLI** | 11 mục nổi bật | 10 mục mở | Không có | Hệ thống Hook trở thành tâm điểm; đề xuất tái cấu trúc từ Python sang TypeScript gây tranh cãi về lộ trình |
| **OpenCode** | 10 mục nổi bật (50 cập nhật) | 10 mục mở | Không có | Giới hạn tốc độ Qwen 3.6 của Alibaba Cloud được bàn luận sôi nổi; chế độ giọng nói, Kiro đang được phát triển |
| **Pi** | 10 mục nổi bật (41 cập nhật) | 11 mục mở | Không có | Sửa lỗi tương thích Antigravity khẩn cấp; khám phá mô hình động GitHub Copilot được triển khai |
| **Qwen Code** | 10 mục nổi bật | 10 mục mở | v0.14.1→v0.14.2 | Sửa lỗi màn hình trắng VS Code khẩn cấp; @chinesepowered đóng góp 6 PR trong một ngày |

> **Chỉ số hoạt động**: Số lượng cập nhật Issues/PRs + Mật độ bình luận cộng đồng + Tần suất phát hành phiên bản

---

## 3. Các Hướng Tính năng được Quan tâm Chung

| Hướng Tính năng | Công cụ Liên quan | Yêu cầu Cụ thể |
|:---|:---|:---|
| **Tính minh bạch phí và Kiểm soát Chi phí** | Claude Code, OpenAI Codex, Kimi CLI, Qwen Code | Tiêu thụ hạn ngạch Claude Max bất thường (#38335 456 bình luận); Token Codex hết quá nhanh (#14593 464 bình luận); Qwen "chỉnh sửa code với hàng triệu token" |
| **Hoàn thiện Hệ sinh thái MCP** | Claude Code, OpenAI Codex, Copilot CLI, Gemini CLI, Kimi CLI | Kết quả công cụ không hiển thị (Claude #41361); Dẫn động máy chủ (Codex #17043); Lệnh `copilot mcp` gốc; Đăng ký tài nguyên MCP (OpenCode #20672) |
| **Tối ưu hóa Trải nghiệm Terminal/TUI** | Tất cả 8 công cụ | Độ trễ khởi động (Codex #17039), xung đột chiếm chuột (OpenCode #7926), độ ổn định của spinner (Copilot), hiển thị bất thường SSH (Gemini #24202) |
| **Quản lý Hội thoại và Ngữ cảnh** | Claude Code, OpenAI Codex, Gemini CLI, Kimi CLI, Qwen Code | Lưu trữ/Phục hồi lâu dài (Gemini #22819), cách ly trạng thái liên hội thoại (Codex #16799), hệ thống Quy tắc ba cấp (Kimi #1747 tương đương Claude) |
| **Hỗ trợ Đa Mô hình/Nhà cung cấp** | OpenCode, Pi, Kimi CLI, Claude Code | Giới hạn tốc độ Alibaba Cloud (OpenCode #21164), định tuyến đầy đủ OpenRouter (Pi #2904), Bedrock Mantle (Claude/Kimi) |
| **An ninh và Quyền hạn Chi tiết** | Claude Code, OpenAI Codex, Kimi CLI, Qwen Code | Chống lộ lọt Secrets (Claude #44868), quản lý quyền hạn lâu dài (Copilot #2505), Hook phê duyệt quyền hạn (Kimi #1751), mệt mỏi vì quyền hạn (Qwen #2946) |

---

## 4. Phân tích Định vị Khác biệt hóa

| Công cụ | Trọng tâm Tính năng | Người dùng Mục tiêu | Lộ trình Công nghệ |
|:---|:---|:---|:---|
| **Claude Code** | Luồng làm việc kỹ thuật sâu, Hợp tác đồng đội, Tuân thủ doanh nghiệp | Nhóm doanh nghiệp, Nhà phát triển chuyên nghiệp | Node.js mã nguồn đóng, tích hợp đám mây AWS/Azure/GCP mạnh mẽ |
| **OpenAI Codex** | Tốc độ mã hóa tối đa, Hiệu suất Rust, Cộng tác thời gian thực | Người đam mê hiệu suất, Nhà phát triển gốc AI | Đang viết lại bằng Rust, tối ưu hóa sâu cho dòng GPT-5.4 |
| **Gemini CLI** | Kỹ thuật hóa hiệu suất, An toàn bộ nhớ, Hệ sinh thái Google | Người dùng nhạy cảm về hiệu suất, Người dùng Google Cloud | TypeScript/Bun, nhấn mạnh hệ thống kiểm tra hồi quy |
| **Copilot CLI** | Tích hợp gốc GitHub, Quản lý MCP, Khả năng quan sát doanh nghiệp | Người dùng nặng hệ sinh thái GitHub, Nhà phát triển doanh nghiệp | TypeScript, OTel tích hợp sẵn, phối hợp VS Code |
| **Kimi CLI** | Hệ thống mở rộng Hook, Tương thích Claude, Cấu hình linh hoạt | Nhà phát triển cần tùy chỉnh sâu, Người dùng chuyển đổi | Python (đang tranh cãi), Kiến trúc Plugin/Hook |
| **OpenCode** | Tổng hợp đa mô hình, Thay thế mã nguồn mở, Giọng nói/đa phương thức | Người dùng chuyển đổi Claude Code, Người dùng chiến lược đa mô hình | TypeScript, ưu tiên tương thích hệ sinh thái Claude |
| **Pi** | Hệ sinh thái mở rộng, Đa thời gian chạy, Cấu hình khai báo | Nhà phát triển xây dựng khung Agent cấp cao | Thời gian chạy kép Node.js/Deno, đề xuất CREAM |
| **Qwen Code** | Gốc Alibaba Cloud, Tối ưu tiếng Trung, Tích hợp sâu IDE | Nhà phát triển trong nước, Người dùng Alibaba Cloud | TypeScript, plugin kép VS Code/JetBrains |

**Điểm phân hóa chính**:
- **Đóng vs Mở**: Claude/Codex mã nguồn đóng nhưng hệ sinh thái trưởng thành; Kimi/OpenCode/Pi khám phá các lộ trình mã nguồn mở/mở rộng
- **Đơn lẻ vs Tổng hợp**: Codex gắn liền với OpenAI; OpenCode/Pi nhấn mạnh "không phụ thuộc mô hình"
- **Ưu tiên Terminal vs Ưu tiên IDE**: Claude/Codex/Gemini tăng cường TUI; Qwen đặt cược vào trải nghiệm plugin IDE

---

## 5. Độ nhiệt và Mức độ Trưởng thành của Cộng đồng

### 🔥 Độ nhiệt Cao · Mức độ Trưởng thành Cao
| Công cụ | Bằng chứng | Đánh giá Giai đoạn |
|:---|:---|:---|
| **Claude Code** | #38335 456 bình luận, #41447 PR kêu gọi mã nguồn mở liên tục tồn tại | Giai đoạn trưởng thành, sự căng thẳng giữa khủng hoảng tin cậy cộng đồng và tính đóng thương mại cùng tồn tại |
| **OpenAI Codex** | 5 alpha/ngày, 464 bình luận về vấn đề Token | Giai đoạn lặp lại nhanh, tái cấu trúc Rust thể hiện tham vọng công nghệ |

### 🔥 Độ nhiệt Cao · Tăng trưởng Nhanh
| Công cụ | Bằng chứng | Đánh giá Giai đoạn |
|:---|:---|:---|
| **Kimi CLI** | Tính năng mới của hệ thống Hook gặp lỗi tức thì, tranh cãi về lộ trình tái cấu trúc TS | Giai đoạn bùng nổ tính năng, nợ kiến trúc và kỳ vọng cộng đồng va chạm |
| **OpenCode** | 50 Issues/PRs/ngày, tài liệu hóa hệ sinh thái tương thích Claude | Giai đoạn mở rộng hệ sinh thái, định vị khác biệt hóa rõ ràng |
| **Qwen Code** | Lặp lại phiên bản khẩn cấp, sự xuất hiện của người đóng góp 6 PR/ngày | Giai đoạn giải quyết chất lượng, đóng góp cộng đồng sôi nổi |

### 🌱 Giai đoạn Xây dựng Nền tảng Chất lượng
| Công cụ | Bằng chứng | Đánh giá Giai đoạn |
|:---|:---|:---|
| **Gemini CLI** | 6 kế hoạch kiểm tra hồi quy hiệu suất, sửa lỗi rò rỉ bộ nhớ có hệ thống | Chuyển từ bàn giao tính năng sang chất lượng kỹ thuật |
| **Copilot CLI** | 30+ Issues/ngày đã đóng, tính năng doanh nghiệp OTel/MCP | Lợi thế kỹ thuật của Microsoft, tốc độ phản hồi nổi bật |
| **Pi** | Đề xuất CREAM, khám phá mô hình động, thích ứng đa thời gian chạy | Giai đoạn khám phá kiến trúc, định vị công cụ cho nhà phát triển |

---

## 6. Tín hiệu Xu hướng Đáng chú ý

| Tín hiệu | Nguồn | Giá trị Tham khảo cho Nhà phát triển |
|:---|:---|:---|
| **MCP trở thành tiêu chuẩn thực tế, nhưng triển khai bị phân mảnh** | Lệnh `copilot mcp`, Codex #17043, OpenCode #20672 | Khi xây dựng các phần mở rộng liên công cụ, ưu tiên xác minh khả năng tương thích phiên bản MCP của công cụ đích; chú ý đến mức độ hỗ trợ của các tính năng nâng cao như `resources/subscribe` |
| **"Tương thích Claude" trở thành "hào quang" để chuyển đổi** | OpenCode #12472, Kimi #1747, Tải kỹ năng bên ngoài Pi | Khi đánh giá các công cụ thay thế, kiểm tra mức độ hỗ trợ đầy đủ của `CLAUDE.md`, hooks, skills; chi phí di chuyển hệ sinh thái cộng đồng bị đánh giá thấp |
| **Kỹ thuật hiệu suất chuyển từ "tối ưu hóa" sang "đo lường được"** | 6 bài kiểm tra hồi quy của Gemini, viết lại Rust của Codex, mở rộng token thích ứng của Qwen | CLI mô hình lớn bước vào giai đoạn tối ưu hóa mili giây, chú ý tài liệu minh bạch về độ trễ khởi động, mức sử dụng bộ nhớ, chiến lược nén ngữ cảnh của công cụ |
| **Lo lắng về phí thúc đẩy nhu cầu "địa phương/tự lưu trữ"** | Kêu gọi mã nguồn mở của Claude #41447, hỗ trợ mô hình cục bộ của Pi #2531, khiếu nại chi phí của Qwen | Trước khi triển khai môi trường sản xuất, xác minh khả năng xử lý giới hạn tốc độ, backoff tự động, ước tính chi phí của công cụ; dự phòng lộ trình hạ cấp mô hình cục bộ |
| **Luồng làm việc khai báo "giống Nix" nổi lên** | Đề xuất CREAM của Pi #2908 | Khi sử dụng ở quy mô nhóm, chú ý xem công cụ có hỗ trợ cấu hình không gian làm việc có thể kiểm soát phiên bản và tái tạo được hay không, giảm rủi ro "trôi mô hình" |
| **Căng thẳng giữa trải nghiệm gốc terminal và TUI hiện đại** | Các vấn đề về chiếm chuột, sao chép/dán, tương thích bộ đa hợp (multiplexer) trên tất cả các nền tảng | Người dùng terminal nặng ưu tiên các công cụ hỗ trợ `--no-mouse`, phát hiện tmux/screen, nhận biết SSH |

---

*Báo cáo dựa trên dữ liệu công khai GitHub của từng công cụ vào ngày 2026-04-08 | Phù hợp cho lựa chọn công nghệ, lập kế hoạch chuỗi công cụ nhóm, tham khảo chiến lược đóng góp mã nguồn mở*

---

## Báo cáo Chi tiết của từng Công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Điểm Nóng Cộng đồng Claude Code Skills

> Nguồn dữ liệu: [anthropics/skills](https://github.com/anthropics/skills)

# Báo cáo Điểm Nóng Cộng đồng Claude Code Skills (2026-04-08)

---

## 1. Xếp hạng Skills Nóng

| Thứ hạng | Skill | Tổng quan Chức năng | Điểm Nóng Cộng đồng | Trạng thái |
|:---|:---|:---|:---|:---|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | Kiểm soát chất lượng dàn trang AI cho tài liệu được tạo, giải quyết các vấn đề dàn trang phổ biến như cô đơn, cô lập dòng, đánh số sai lệch | Được xem là "sửa lỗi cơ bản mà mọi tài liệu Claude đều cần", thảo luận tập trung vào việc có nên là chức năng tích hợp hay Skill độc lập | 🟡 Mở |
| 2 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | Cải thiện sự rõ ràng và khả năng thực thi của Skill thiết kế giao diện người dùng | Cộng đồng quan tâm đến việc làm thế nào để các chỉ dẫn thiết kế có thể thực thi trong một lượt trò chuyện, tránh hướng dẫn mơ hồ | 🟡 Mở |
| 3 | **[skill-quality-analyzer](https://github.com/anthropics/skills/pull/83)** + [skill-security-analyzer](https://github.com/anthropics/skills/pull/83) | Meta Skill đánh giá chất lượng Skill (cấu trúc, tài liệu, ví dụ, tài nguyên, khả năng bảo trì) và kiểm tra an ninh | Khái niệm Meta Skill được quan tâm, thảo luận về cách tiêu chuẩn hóa ngưỡng chất lượng Skill | 🟡 Mở |
| 4 | **[ODT](https://github.com/anthropics/skills/pull/486)** | Tạo văn bản OpenDocument, điền mẫu và phân tích cú pháp ODT→HTML | Khắc phục khoảng trống trong hệ sinh thái LibreOffice/OpenOffice, nhu cầu luồng làm việc tài liệu doanh nghiệp rất mạnh mẽ | 🟡 Mở |
| 5 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | Các mẫu kiểm thử toàn diện: Triết lý kiểm thử, kiểm thử đơn vị, kiểm thử thành phần React, kiểm thử tích hợp/E2E | Giá trị hướng dẫn thực tế của phân lớp chiến lược kiểm thử (Testing Trophy) | 🟡 Mở |
| 6 | **[sensory](https://github.com/anthropics/skills/pull/806)** | Tự động hóa gốc macOS (AppleScript/osascript), thay thế thao tác máy tính dạng chụp màn hình | Thiết kế phân cấp quyền hai giai đoạn gây tranh cãi: chức năng cơ bản không có quyền vs kiểm soát đầy đủ quyền trợ năng | 🟡 Mở |
| 7 | **[ServiceNow](https://github.com/anthropics/skills/pull/568)** | Trợ lý nền tảng ServiceNow cấp doanh nghiệp, bao gồm toàn bộ mô-đun ITSM/ITOM/ITAM/SecOps/SPM | Cân bằng giữa phạm vi và độ sâu: một Skill duy nhất bao quát toàn bộ nền tảng có quá cồng kềnh không | 🟡 Mở |
| 8 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | Hệ thống bộ nhớ bền vững cho proxy AI, duy trì ngữ cảnh liên hội thoại | Thảo luận về thiết kế kiến trúc thời điểm kích hoạt bộ nhớ và ranh giới riêng tư | 🟡 Mở |

---

## 2. Xu hướng Nhu cầu Cộng đồng

| Hướng | Issue/PR Đại diện | Nhu cầu Cốt lõi |
|:---|:---|:---|
| **Quản trị Skill và Cơ chế Tin cậy** | [#492](https://github.com/anthropics/skills/issues/492) Lạm dụng ranh giới an ninh, [#412](https://github.com/anthropics/skills/issues/412) Mô hình quản trị Proxy | Cách ly không gian tên giữa Skill cộng đồng và Skill chính thức, tránh nhầm lẫn ranh giới tin cậy |
| **Tích hợp Luồng làm việc Cấp doanh nghiệp** | [#228](https://github.com/anthropics/skills/issues/228) Chia sẻ Skill cấp tổ chức, [#532](https://github.com/anthropics/skills/issues/532) Hỗ trợ SSO/Xác thực doanh nghiệp | Chuyển đổi từ công cụ cá nhân sang cơ sở hạ tầng hợp tác nhóm |
| **Chất lượng và Tiêu chuẩn hóa Đánh giá Skill** | [#202](https://github.com/anthropics/skills/issues/202) Thực hành tốt nhất cho `skill-creator`, [#83](https://github.com/anthropics/skills/pull/83) Bộ phân tích chất lượng | Thiết lập hệ thống đánh giá tự động và ngưỡng gia nhập cho Skill |
| **Khả năng tương tác Giao thức MCP** | [#16](https://github.com/anthropics/skills/issues/16) Skills dưới dạng MCP | Xuất khả năng của Skill dưới dạng công cụ MCP tiêu chuẩn, cho phép tái sử dụng đa nền tảng |
| **Triển khai Bedrock/Đa đám mây** | [#29](https://github.com/anthropics/skills/issues/29) | Chạy trong cơ sở hạ tầng doanh nghiệp như AWS, tách biệt khỏi môi trường gốc Claude Code |

---

## 3. Các Skill Tiềm năng Cao Chờ Hợp nhất

| Skill | Giá trị Chính | Rào cản Hợp nhất | Dự kiến Triển khai |
|:---|:---|:---|:---|
| **[document-typography](https://github.com/anthropics/skills/pull/514)** | Giải quyết các điểm đau phổ quát của việc tạo tài liệu AI | Cần đánh giá xem có nên tích hợp vào lõi Claude hay là Skill | 1-2 tháng |
| **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | Hệ thống hóa kiến thức lĩnh vực kiểm thử, khắc phục khoảng trống kỹ năng | Cần phối hợp phạm vi với các Skill liên quan đến mã hiện có | 2-4 tuần |
| **[sensory](https://github.com/anthropics/skills/pull/806)** | Ưu điểm về hiệu suất và độ tin cậy của tự động hóa gốc macOS | Kiểm tra an ninh của mô hình quyền hạn | 1-2 tháng |
| **[CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** | Cơ sở hạ tầng quan trọng để cải thiện sức khỏe cộng đồng từ 25% | Xem xét tiêu chuẩn hóa tài liệu quy trình | Đã sẵn sàng, chờ hợp nhất |

**PR Sửa lỗi Hoạt động** (Dọn dẹp nợ kỹ thuật):
- [#541](https://github.com/anthropics/skills/pull/541) Sửa lỗi xung đột ID bookmark DOCX
- [#539](https://github.com/anthropics/skills/pull/539) / [#361](https://github.com/anthropics/skills/pull/361) Bảo vệ phân tích ký tự đặc biệt YAML
- [#538](https://github.com/anthropics/skills/pull/538) Sửa lỗi đường dẫn nhạy cảm với chữ hoa/thường của Skill PDF

---

## 4. Góc nhìn Hệ sinh thái Skills

> **Nhu cầu Cốt lõi: Chuyển đổi từ "Công cụ Năng suất Cá nhân" sang "Cơ sở hạ tầng Đáng tin cậy Cấp doanh nghiệp"** - Cộng đồng đang thúc đẩy Skills trưởng thành trên bốn khía cạnh: chia sẻ tổ chức, quản trị an ninh, tiêu chuẩn hóa chất lượng và triển khai đa đám mây, đồng thời tiếp tục trau dồi sâu sắc các kịch bản dọc như dàn trang, kiểm thử, tự động hóa.

---

---

# Báo cáo Tình hình Cộng đồng Claude Code Hàng ngày | 2026-04-08

---

## 1. Tổng quan Hôm nay

Anthropic hôm nay đã phát hành **v2.1.94**, tập trung mở rộng hỗ trợ Amazon Bedrock và tăng cường độ suy luận mặc định; cộng đồng tiếp tục bàn luận sôi nổi về vấn đề **tiêu thụ hạn ngạch hội thoại bất thường của Claude Max** (456 bình luận), đồng thời các lời kêu gọi **mã nguồn mở Claude Code** tiếp tục lan rộng trên nhiều PR.

---

## 2. Phát hành Phiên bản

### v2.1.94 (2026-04-08)
| Mục Cập nhật | Mô tả |
|--------|------|
| **Amazon Bedrock + Mantle** | Thêm hỗ trợ biến môi trường `CLAUDE_CODE_USE_MANTLE=1`, tối ưu hóa lệnh gọi Bedrock thông qua lớp Mantle |
| **Tăng cường Độ suy luận Mặc định** | Khóa API, Người dùng Bedrock/Vertex/Foundry, Team và Enterprise mặc định effort từ medium tăng lên high (có thể điều chỉnh qua `/effort`) |
| **Tối ưu hóa Tích hợp Slack** | Thêm tiêu đề tin nhắn `Slacked #channel` phiên bản nhỏ gọn, kèm biểu tượng Claude |

🔗 [Chi tiết Phát hành](https://github.com/anthropics/claude-code/releases/tag/v2.1.94)

---

## 3. Issues Nóng Cộng đồng

| # | Trạng thái | Tiêu đề | Thông tin Cốt lõi | Phản ứng Cộng đồng |
|---|---|---|---------|---------|
| [#38335](https://github.com/anthropics/claude-code/issues/38335) | 🔴 MỞ | **Hạn ngạch hội thoại Claude Max tiêu thụ cực nhanh bất thường** | Kể từ ngày 23 tháng 3, số lượng hội thoại của người dùng CLI tăng đột biến bất thường, có thể là lỗi logic tính phí | **456 bình luận / 356 👍** , người dùng Max đồng loạt khiếu nại, Anthropic chưa phản hồi chính thức |
| [#24964](https://github.com/anthropics/claude-code/issues/24964) | 🟢 ĐÃ ĐÓNG | **Bộ chọn thư mục Cowork quá hạn chế** | Cấm chọn thư mục ngoài thư mục home, liên kết tượng trưng và junction | **144 bình luận / 186 👍** , luồng làm việc người dùng doanh nghiệp bị cản trở, đã sửa lỗi |
| [#42796](https://github.com/anthropics/claude-code/issues/42796) | 🟢 ĐÃ ĐÓNG | **Khả năng xử lý kỹ thuật phức tạp của mô hình giảm sút sau cập nhật tháng 2** | Chất lượng tái cấu trúc mã bị trượt dốc, đơn giản hóa quá mức, bỏ qua các điều kiện biên | **116 bình luận / 757 👍** , phản hồi kỹ thuật có lượt thích cao, nhóm mô hình đã can thiệp |
| [#44910](https://github.com/anthropics/claude-code/issues/44910) | 🔴 MỞ | **Xác thực AWS_BEARER_TOKEN_BEDROCK không hoạt động trong 2.1.92+** | Hồi quy từ 2.1.91→2.1.92, người dùng SSO doanh nghiệp không thể đăng nhập | **9 bình luận / 15 👍** , thẻ regression, ảnh hưởng môi trường sản xuất |
| [#2805](https://github.com/anthropics/claude-code/issues/2805) | 🔴 MỞ | **Hệ thống Linux liên tục tạo ký tự xuống dòng Windows** | Bỏ qua chỉ dẫn CLAUDE.md, gây lỗi thực thi script | **31 bình luận / 30 👍** , điểm đau phát triển đa nền tảng, tồn tại lâu chưa giải quyết |
| [#29214](https://github.com/anthropics/claude-code/issues/29214) | 🔴 MỞ | **Nhắc nhở quyền Remote Control bị bỏ qua không hoạt động** | Sau `--dangerously-skip-permissions`, thiết bị di động vẫn hiển thị cửa sổ bật lên | **22 bình luận / 54 👍** , trải nghiệm luồng làm việc từ xa bị gián đoạn |
| [#41361](https://github.com/anthropics/claude-code/issues/41361) | 🔴 MỞ | **Kết quả công cụ MCP không hiển thị sau 2.1.88** | Safeguard `outputSchema` safeParse trả về null | **8 bình luận / 6 👍** , hồi quy quan trọng của hệ sinh thái MCP |
| [#36411](https://github.com/anthropics/claude-code/issues/36411) | 🔴 MỞ | **Thông báo đến của plugin Telegram MCP bị mất** | Chỉ hoạt động gửi đi, tin nhắn đến không được gửi đến hội thoại | **12 bình luận / 10 👍** , tích hợp hai chiều chưa hoàn thành |
| [#43675](https://github.com/anthropics/claude-code/issues/43675) | 🟢 ĐÃ ĐÓNG | **Thư mục ~/.claude/ không được ghi lại tài liệu** | Cộng đồng phân tích sâu cấu trúc lưu trữ hội thoại, kêu gọi tài liệu chính thức | **4 bình luận / 5 👍** , nhu cầu kiểm tra an ninh thúc đẩy |
| [#44868](https://github.com/anthropics/claude-code/issues/44868) | 🔴 MỞ | **Secrets trong .env/.dev.vars bị lộ qua công cụ** | Bỏ qua lệnh cấm CLAUDE.md, công cụ grep/Read làm lộ secrets | **3 bình luận** , vấn đề đường biên an ninh và tuân thủ |

---

## 4. Tiến độ PR Quan trọng

| # | Trạng thái | Tiêu đề | Nội dung Cốt lõi | Đánh giá |
|---|---|---|---------|------|
| [#44874](https://github.com/anthropics/claude-code/pull/44874) | 🟡 MỞ | Plugin wmux-orchestrator | Điều phối tác vụ đa proxy, thực thi song song nhận biết phụ thuộc + kiểm tra nhất quán liên proxy | Giải pháp phân tách tác vụ phức tạp cấp doanh nghiệp |
| [#44742](https://github.com/anthropics/claude-code/pull/44742) | 🟡 MỞ | Công cụ chẩn đoán lưu trữ hội thoại | Sửa lỗi mất lịch sử hội thoại của extension VS Code (#12908 và 12+ issue lặp lại) | Lỗi nghiêm trọng mất dữ liệu |
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | 🟡 MỞ | Mã nguồn mở Claude Code | Meta PR được cộng đồng kêu gọi nhiều nhất, đóng #59 #456 #2846... | Ý nghĩa tượng trưng lớn hơn thực tế, Anthropic chưa phản hồi |
| [#41518](https://github.com/anthropics/claude-code/pull/41518) | 🟡 MỞ | Bổ sung mã nguồn còn thiếu | Phiên bản đơn giản hóa trích xuất source map | Nỗ lực xây dựng nhánh mã nguồn mở của cộng đồng |
| [#41611](https://github.com/anthropics/claude-code/pull/41611) | 🟡 MỞ | Bổ sung mã nguồn còn thiếu | Phiên bản đơn giản hóa trích xuất source map | Nỗ lực xây dựng nhánh mã nguồn mở của cộng đồng |
| [#44681](https://github.com/anthropics/claude-code/pull/44681) | 🟡 MỞ | Xóa bỏ chỉ dẫn an ninh exec lỗi thời | Dọn dẹp các đề xuất an ninh không còn hiệu lực trong tài liệu | Bảo trì tài liệu |
| [#44676](https://github.com/anthropics/claude-code/pull/44676) | 🟡 MỞ | Hoàn thiện danh sách thiếu của `plugin-dev` | Cập nhật siêu dữ liệu marketplace | Tính toàn vẹn của hệ sinh thái plugin |
| [#41938](https://github.com/anthropics/claude-code/pull/41938) | 🟡 MỞ | Script khởi động DevContainer Linux/macOS | Bù đắp khoảng trống chỉ có trên Windows PowerShell | Trải nghiệm phát triển đa nền tảng |
| [#39148](https://github.com/anthropics/claude-code/pull/39148) | 🟡 MỞ | Plugin `preserve-session` | Duy trì lịch sử hội thoại sau khi đổi tên/di chuyển dự án, tách biệt đường dẫn UUID | Giải pháp cho điểm đau quản lý hội thoại |
| [#1](https://github.com/anthropics/claude-code/pull/1) | 🟢 ĐÃ ĐÓNG | Tạo SECURITY.md | Tài liệu chính sách an ninh cơ bản | Nền tảng tuân thủ |

---

## 5. Xu hướng Nhu cầu Tính năng

Dựa trên phân tích 50 Issues đang hoạt động, trọng tâm cộng đồng:

| Hướng | Độ nhiệt | Yêu cầu Điển hình |
|------|---------|---------|
| **Tính minh bạch phí** | 🔥🔥🔥🔥🔥 | Thuật toán hạn ngạch kế hoạch Max là hộp đen, khấu trừ điểm khuyến mãi bất thường, nhầm lẫn giữa hạn ngạch API và đăng ký |
| **Mã nguồn mở/Tự lưu trữ** | 🔥🔥🔥🔥🔥 | 3 PR đang hoạt động thúc đẩy trích xuất source map, lo ngại về khóa nhà cung cấp lâu dài |
| **Độ ổn định Cowork** | 🔥🔥🔥🔥 | Lỗi treo khi đổi tên thiết bị chéo Windows, phục hồi chế độ ngủ VM Hyper-V, giới hạn quyền thư mục |
| **Hoàn thiện Hệ sinh thái MCP** | 🔥🔥🔥🔥 | Kết quả công cụ không hiển thị, tích hợp hai chiều Telegram, thiếu tài liệu phát triển plugin |
| **Trải nghiệm Điều khiển Từ xa** | 🔥🔥🔥 | Thông báo đẩy iOS, đồng bộ hóa quyền, luồng làm việc trên thiết bị di động |
| **An ninh và Tuân thủ** | 🔥🔥🔥 | Chống lộ lọt Secrets, kiểm tra thư mục .claude/, chi tiết hóa quyền hạn sandbox |
| **Quốc tế hóa/Bản địa hóa** | 🔥🔥 | Mất dấu thanh tiếng Việt/tiếng Bồ Đào Nha, vấn đề nhập Unicode |

---

## 6. Điểm quan tâm của Nhà phát triển

### 🔴 Điểm Đau Thường gặp
1. **Khủng hoảng Tin cậy về Hạn ngạch Hội thoại** — #38335 trở thành Issue có nhiều bình luận nhất lịch sử, người dùng doanh nghiệp yêu cầu nhật ký kiểm toán
2. **Khoảng cách Nhất quán Nền tảng** — Người dùng Windows liên tục gặp vấn đề Cowork/ký tự xuống dòng/đường dẫn, cảm giác như công dân hạng hai
3. **Mức độ Trưởng thành của Chuỗi Công cụ MCP** — Xác minh schema, xử lý lỗi, khả năng gỡ lỗi không đủ

### 🟡 Nhu cầu Mới nổi
- **Cá nhân hóa Buddy** — 3 Issue/PR liên quan đã đóng, cộng đồng đã chấp nhận tùy chỉnh giới hạn (màu sắc/tên)
- **Hỗ trợ DevContainer Đầy đủ** — Bù đắp từ chỉ dành cho Windows sang đa nền tảng
- **Kỹ thuật đảo ngược source map** — Cộng đồng tự phát khám phá lộ trình mã nguồn mở, phản ánh khoảng trống giao tiếp chính thức

### 💡 Quan sát Chiến lược
> Anthropic đang **tăng cường hợp tác với các nhà cung cấp đám mây** (AWS Bedrock) thông qua lớp **Mantle**, đồng thời **tăng cường độ suy luận mặc định** có thể làm gia tăng lo lắng về hạn ngạch của người dùng Max. Lời kêu gọi mã nguồn mở và sự căng thẳng với tính đóng thương mại tiếp tục tích lũy, trạng thái tồn tại của các PR như #41447 là cửa sổ quan sát.

---

*Báo cáo hàng ngày dựa trên dữ liệu công khai GitHub, không đại diện cho lập trường chính thức của Anthropic.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Báo cáo Tình hình Cộng đồng OpenAI Codex Hàng ngày | 2026-04-08

---

## 1. Tổng quan Hôm nay

Cộng đồng Codex hôm nay có hoạt động cực kỳ cao, **5 phiên bản Rust liên tiếp được phát hành** (v0.119.0-alpha.13 đến alpha.17), cho thấy nhóm đang lặp lại lõi CLI một cách liên tục. Vấn đề **tiêu thụ Token quá nhanh** được cộng đồng quan tâm nhất (#14593) tiếp tục lan rộng, 464 bình luận lập kỷ lục gần đây; đồng thời các PR quan trọng như **tối ưu hóa độ trễ khởi động TUI** (#17039) và **dẫn động máy chủ MCP** (#17043) đã bước vào giai đoạn xem xét, báo hiệu những cải thiện đáng kể về trải nghiệm người dùng.

---

## 2. Phát hành Phiên bản

### Lặp lại Liên tục CLI Rust: v0.119.0-alpha.13 ~ alpha.17
| Phiên bản | Thời gian Phát hành |
|:---|:---|
| rust-v0.119.0-alpha.17 | Trong 24 giờ qua |
| rust-v0.119.0-alpha.16 | Trong 24 giờ qua |
| rust-v0.119.0-alpha.15 | Trong 24 giờ qua |
| rust-v0.119.0-alpha.14 | Trong 24 giờ qua |
| rust-v0.119.0-alpha.13 | Trong 24 giờ qua |

> Lưu ý: Phần mô tả phát hành khá ngắn gọn, nên chú ý các Changelog đầy đủ sau này. Phát hành alpha với tần suất cao thường có nghĩa là sửa lỗi quan trọng hoặc điều chỉnh kiến trúc nội bộ.

---

## 3. Issues Nóng Cộng đồng (Chọn lọc 10 mục)

| # | Tiêu đề | Trạng thái | Bình luận | 👍 | Điểm nhấn Cốt lõi |
|:---|:---|:---|:---:|:---:|:---|
| [#14593](https://github.com/openai/codex/issues/14593) | Burning tokens very fast | 🔴 MỞ | **464** | 172 | **Chủ đề nóng nhất cộng đồng**: Người dùng đăng ký Business phản ánh Token tiêu thụ cực kỳ nhanh, có thể có vấn đề về tính phí hoặc hiệu quả gọi mô hình. 464 bình luận cho thấy sự đồng cảm lớn của nhiều người dùng, cần phản hồi khẩn cấp từ phía chính thức. |
| [#10410](https://github.com/openai/codex/issues/10410) | Codex Desktop App: macOS Intel (x86_64) support | 🔴 MỞ | 165 | **243** | **Yêu cầu tính năng có lượt thích cao**: Nhóm người dùng Intel Mac rất đông đảo, 243 👍 là cao nhất toàn trang. Chiến lược độc quyền Apple Silicon gây bất mãn mạnh mẽ cho người dùng thiết bị cũ. |
| [#12764](https://github.com/openai/codex/issues/12764) | The codex cli giving: 401 unauthorized | 🔴 MỞ | 93 | 4 | **Lỗi xác thực thường xuyên**: Người dùng CLI gặp lỗi không được phép, ảnh hưởng đến các kịch bản CI/CD và tự động hóa. Mặc dù 👍 không nhiều, nhưng bình luận sôi nổi cho thấy vấn đề gây gián đoạn. |
| [#9224](https://github.com/openai/codex/issues/9224) | Codex Remote Control | 🔴 MỞ | 37 | **246** | **Kịch bản sử dụng sáng tạo**: Người dùng muốn điều khiển Codex CLI trên máy tính từ xa bằng ứng dụng ChatGPT trên di động, 246 👍 chứng minh nhu cầu phối hợp di động-máy tính rất mạnh mẽ. |
| [#16231](https://github.com/openai/codex/issues/16231) | High CPU usage on macOS after updating Codex | 🔴 MỞ | 18 | 29 | **Hồi quy hiệu suất**: Extension VS Code mới nhất (26.325.31654) gây tải cao cho Mac M5 Pro, sinh nhiệt, ảnh hưởng trải nghiệm phát triển. |
| [#13993](https://github.com/openai/codex/issues/13993) | Support standalone Windows installer | 🔴 MỞ | 17 | 56 | **Rào cản triển khai doanh nghiệp**: Hạn chế của Microsoft Store khiến việc cài đặt trong môi trường doanh nghiệp/ngoại tuyến không thể thực hiện, cần gói cài đặt `.exe` truyền thống. |
| [#16904](https://github.com/openai/codex/issues/16904) | TUI return can leave stale busy spinner | 🔴 MỞ | 11 | 0 | **Lỗi trạng thái UI**: Sau khi proxy con hoàn thành, trạng thái UI không được dọn dẹp, người dùng Linux/tmux bị ảnh hưởng, phản ánh vấn đề ổn định tương tác terminal. |
| [#16553](https://github.com/openai/codex/issues/16553) | Codex becomes unresponsive on startup if `~/.ssh/config` is large | 🔴 MỞ | 5 | 1 | **Hiệu suất trong trường hợp biên**: Phân tích cấu hình SSH lớn chặn khởi động, điểm đau điển hình của người dùng DevOps/vận hành. |
| [#17041](https://github.com/openai/codex/issues/17041) | Live codex cli session cannot continue on auth refresh | 🔴 MỞ | 4 | 0 | **Đứt đoạn xác thực doanh nghiệp**: Token làm mới trong chế độ gọi API gây gián đoạn hội thoại, ảnh hưởng nghiêm trọng đến các tác vụ dài hạn. |
| [#16799](https://github.com/openai/codex/issues/16799) | Cross-project, cross-session state leak | 🟢 ĐÃ ĐÓNG | 4 | 0 | **Sửa lỗi an ninh**: Đã đóng! Rò rỉ trạng thái lệnh giữa các dự án đã được sửa, liên quan đến cách ly ranh giới an ninh. |

---

## 4. Tiến độ PR Quan trọng (Chọn lọc 10 mục)

| # | Tiêu đề | Trạng thái | Chức năng/Sửa lỗi Cốt lõi |
|:---|:---|:---|:---|
| [#17039](https://github.com/openai/codex/pull/17039) | fix(tui): reduce startup and new-session latency | 🔵 MỞ | **Tăng tốc khởi động TUI**: Lấy thông tin tài khoản/giới hạn tốc độ không đồng bộ, loại bỏ chặn khởi động; sửa lỗi tồn đọng chỉ báo stale của thẻ `/status`. |
| [#17043](https://github.com/openai/codex/pull/17043) | [mcp] Support server-driven elicitations | 🔵 MỞ | **Tăng cường MCP**: Hỗ trợ chủ động gợi ý (elicitation) từ máy chủ MCP tùy chỉnh, bổ sung trình bao bọc dịch vụ RMCP để giữ siêu dữ liệu `_meta`. |
| [#17057](https://github.com/openai/codex/pull/17057) | Attach WebRTC realtime starts to sideband websocket | 🔵 MỞ | **Tối ưu hóa giao tiếp thời gian thực**: Cuộc gọi WebRTC thiết lập qua WebSocket độc lập, giảm độ trễ và cải thiện độ ổn định kết nối. |
| [#17036](https://github.com/openai/codex/pull/17036) | [codex] feat: allow limited git writes in workspace sandbox | 🔵 MỞ | **Chi tiết hóa quyền hạn sandbox**: Sandbox ghi làm việc bổ sung `allow_limited_git_writes`, cho phép cập nhật siêu dữ liệu Git nhưng cấm sửa đổi cấu hình/hooks. |
| [#16949](https://github.com/openai/codex/pull/16949) | Use model metadata for Fast Mode status | 🔵 MỞ | **Phân lớp tốc độ mô hình**: Siêu dữ liệu mô hình bổ sung trường phân lớp tốc độ, TUI hiển thị trạng thái Fast Mode động dựa trên đó, tách biệt tên mô hình mã hóa cứng. |
| [#16736](https://github.com/openai/codex/pull/16736) | Move unified-exec sandbox launch to exec-server | 🔵 MỞ | **Tái cấu trúc kiến trúc**: Logic khởi động sandbox thực thi thống nhất được chuyển sang exec-server, đặt nền móng cho thực thi từ xa. |
| [#17030](https://github.com/openai/codex/pull/17030) | codex: add exec-server managed-network follow-up | 🔵 MỞ | **Quản lý mạng từ xa**: PR tiếp theo về khả năng mạng được quản lý bởi exec-server, làm rõ đường dẫn callback hỗ trợ/không hỗ trợ. |
| [#16276](https://github.com/openai/codex/pull/16276) | [codex] add memory extensions | 🔵 MỞ | **Mở rộng bộ nhớ**: Bổ sung cơ chế mở rộng bộ nhớ (chi tiết cần bổ sung mô tả PR), có thể liên quan đến việc duy trì ngữ cảnh liên hội thoại. |
| [#17052](https://github.com/openai/codex/pull/17052) | Add regression tests for JsonSchema | 🔵 MỞ | **Củng cố kiểm thử**: Bổ sung 4 bộ kiểm thử hồi quy cho phân tích đầu vào `JsonSchema`, bao phủ các trường hợp biên như ép buộc mô hình boolean, suy luận hình dạng đối tượng. |
| [#16937](https://github.com/openai/codex/pull/16937) | Surface remote startup exec approvals | 🔵 MỞ | **Phê duyệt thực thi khởi động từ xa**: Luồng phê duyệt khởi động từ xa của exec-server được thông suốt, tái sử dụng cơ chế phê duyệt cốt lõi, bổ sung kiểm tra smoke test. |

---

## 5. Xu hướng Nhu cầu Tính năng

Dựa trên phân tích 50 Issues đang hoạt động, trọng tâm cộng đồng thể hiện ba hướng chính:

| Xu hướng | Issue Đại diện | Độ nhiệt |
|:---|:---|:---:|
| **💰 Tính minh bạch phí và Kiểm soát Chi phí** | #14593 (Tiêu thụ Token quá nhanh) | 464 bình luận, 172 👍 |
| **🏢 Hỗ trợ Triển khai Doanh nghiệp/Tổ chức** | #13993 (Gói cài đặt độc lập Windows), #10410 (Intel Mac) | Tổng cộng 299 👍 |
| **📱 Phối hợp Đa thiết bị và Điều khiển Từ xa** | #9224 (Điều khiển CLI trên máy tính từ xa bằng điện thoại) | 246 👍 |
| **🔒 Sandbox An ninh và Chi tiết hóa Quyền hạn** | #17036 (Kiểm soát quyền ghi Git), #16799 (Sửa lỗi rò rỉ trạng thái) | Đang lặp lại liên tục |

> **Tín hiệu Mới nổi**: Nhu cầu tích hợp hệ sinh thái MCP (Model Context Protocol) tăng lên, #17043 và #11264 cho thấy cộng đồng kỳ vọng vào khả năng tùy chỉnh máy chủ MCP.

---

## 6. Điểm quan tâm của Nhà phát triển

### 🔴 Điểm Đau Thường gặp

| Điểm Đau | Kịch bản Điển hình | Issue Liên quan |
|:---|:---|:---|
| **Token/chi phí không thể kiểm soát** | Người dùng doanh nghiệp lo lắng script tự động hóa gây tăng hóa đơn đột biến | #14593, #8367 |
| **Hội thoại xác thực không ổn định** | CI/CD, tác vụ dài hạn bị lỗi làm mới Token | #12764, #17041 |
| **Phân mảnh hỗ trợ nền tảng** | Intel Mac, môi trường doanh nghiệp Windows bị loại trừ | #10410, #13993 |
| **Trạng thái UI/Terminal bất thường** | Proxy con, UI bị treo hoặc thông tin còn sót lại sau khi khôi phục hội thoại | #16904, #16421 |

### 🟡 Kỳ vọng về Khả năng

- **Hệ thống Hook có thể lập trình**: #16484, #16301 kêu gọi hỗ trợ chính thức về bề mặt sự kiện (event surface) có thể đọc được bằng máy, cho phép luồng phê duyệt tự động tương tự Claude Code
- **Xuất Hội thoại và Khả năng Quan sát**: #2880 (Xuất Markdown), #5781 (Nhật ký có thể đọc) phản ánh nhu cầu tài liệu hóa, kiểm toán
- **Khả năng Kiểm soát Hành vi Mô hình**: #16548 (Lựa chọn mô hình proxy bị ghi đè), #13867 (Làm ô nhiễm định dạng đầu ra mô hình) cho thấy nhu cầu kiểm soát chi tiết dòng GPT-5.4

---

*Báo cáo Hàng ngày: 2026-04-08 | Nguồn dữ liệu: github.com/openai/codex*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Báo cáo Tình hình Cộng đồng Gemini CLI Hàng ngày | 2026-04-08

---

## 1. Tổng quan Hôm nay

Cộng đồng Gemini CLI hôm nay tập trung vào **tối ưu hóa hiệu suất và sửa lỗi ổn định**: Nhóm đã liên tục phát hành 6 kế hoạch kiểm tra hồi quy hiệu suất, đồng thời sửa các vấn đề quan trọng như rò rỉ bộ nhớ Scheduler, cắt cụt URL OAuth. Phiên bản vá v0.37.0-preview.2 được phát hành, giải quyết vấn đề tương thích shebang.

---

## 2. Phát hành Phiên bản

### v0.37.0-preview.2
| Thuộc tính | Nội dung |
|:---|:---|
| Ngày Phát hành | 2026-04-07 |
| Loại | Phiên bản vá lỗi |
| Sửa lỗi Cốt lõi | Xóa bỏ tham số `-S` trong shebang, sửa lỗi thực thi thất bại trên hệ thống Windows và BSD |

🔗 [Chi tiết Phát hành](https://github.com/google-gemini/gemini-cli/releases/tag/v0.37.0-preview.2)

> Bối cảnh: Cờ `-S` trong shebang Node.js `#!/usr/bin/env -S node --no-warnings` không được hỗ trợ trên một số hệ thống Unix, khiến CLI không thể thực thi trực tiếp.

---

## 3. Issues Nóng Cộng đồng (Chọn lọc 10 mục)

| # | Issue | Trạng thái | Độ quan trọng | Điểm nhấn Cốt lõi |
|:---|:---|:---|:---|:---|
| [#24863](https://github.com/google-gemini/gemini-cli/issues/24863) | Rò rỉ bộ nhớ Scheduler: Listener McpProgress chưa được giải phóng | 🔴 ĐÃ ĐÓNG | **P0** | Thành viên cộng đồng Anjaligarhwal đã kiểm tra mã nguồn sâu và phát hiện mỗi lần gọi `scheduleAgentTools()` sẽ tạo một instance Scheduler đăng ký listener vĩnh viễn vào `coreEvents` toàn cục, dẫn đến tích tụ listener. Đã gửi PR sửa lỗi. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Đánh giá đọc file nhận biết AST | 🟡 MỞ | **EPIC** | Người bảo trì cốt lõi gundermanc dẫn đầu nghiên cứu dài hạn, khám phá cách xác định chính xác ranh giới phương thức thông qua AST (Abstract Syntax Tree), giảm lãng phí token và đọc sai. Liên quan đến #22746, có thể định hình lại khả năng phân tích mã nguồn. |
| [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) | Proxy con nhận biết chế độ phê duyệt hiện tại | 🟡 MỞ | **Kiến trúc** | Proxy con thiếu nhận biết về Chế độ Kế hoạch/Chế độ Tự chỉnh sửa, dẫn đến xung đột giữa công cụ chiến lược và chỉ dẫn của proxy. Cần thống nhất chỉ dẫn và lớp chiến lược. |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | Định tuyến bộ nhớ: Toàn cục vs Cấp dự án | 🟡 MỞ | **UX** | Xác định ranh giới lưu trữ bộ nhớ: Sở thích người dùng (`~/.gemini/`) và kiến thức cụ thể của kho mã nguồn (`.gemini/`) tách biệt. Ảnh hưởng trực tiếp đến trải nghiệm cá nhân hóa. |
| [#24869](https://github.com/google-gemini/gemini-cli/issues/24869) | Kiểm tra hồi quy bộ nhớ | 🟡 MỞ | **Xây dựng Chất lượng** | jacob314 đề xuất kiểm tra mức sử dụng bộ nhớ cho các cuộc hội thoại lớn, kịch bản khôi phục, ngăn chặn rò rỉ tham chiếu đối tượng gốc. |
| [#24864](https://github.com/google-gemini/gemini-cli/issues/24864) | Hệ thống kiểm tra hồi quy hiệu suất | 🟡 MỞ | **Xây dựng Chất lượng** | Yêu cầu mô phỏng chạy mô hình toàn bộ CLI, kiểm tra đa nền tảng, tránh suy giảm hiệu suất. |
| [#24768](https://github.com/google-gemini/gemini-cli/issues/24768) | Hiệu suất ngôn ngữ phi tiếng Anh | 🟡 MỞ | **Quốc tế hóa** | Xác minh hiệu suất trong các kịch bản hội thoại tiếng Châu Á không thua kém tiếng Anh, bộc lộ các điểm nghẽn tiềm ẩn về mã hóa/hiển thị. |
| [#24535](https://github.com/google-gemini/gemini-cli/issues/24535) | Khôi phục hội thoại thất bại: "Invalid session identifier" | 🔴 ĐÃ ĐÓNG | **Độ ổn định** | Issue tương tác cao với 9 bình luận, liên quan đến điều kiện cạnh tranh giữa `--resume` và xác thực khóa API. |
| [#24202](https://github.com/google-gemini/gemini-cli/issues/24202) | Chữ hiển thị sai lệch trong hội thoại SSH | 🟡 MỞ | **Tương thích** | Hiển thị bất thường của CLI sau khi SSH từ Windows đến gLinux, cần phát hiện môi trường SSH (liên quan #24546). |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | Mô hình tạo script tạm thời ngẫu nhiên | 🟡 MỞ | **Luồng làm việc** | Sau khi hạn chế thực thi shell, mô hình tạo script chỉnh sửa phân tán, tăng gánh nặng dọn dẹp. Cần hướng dẫn mô hình quản lý tập tin tạm thời tập trung. |

---

## 4. Tiến độ PR Quan trọng (Chọn lọc 10 mục)

| # | PR | Trạng thái | Tác giả | Tóm tắt Chức năng/Sửa lỗi |
|:---|:---|:---|:---|:---|
| [#24870](https://github.com/google-gemini/gemini-cli/pull/24870) | Sửa lỗi rò rỉ listener McpProgress của Scheduler | 🟡 MỞ | Anjaligarhwal | Bổ sung sửa lỗi #21006, bao phủ các điểm rò rỉ trước đó chưa được xử lý, đảm bảo gọi `dispose()` đáng tin cậy |
| [#24862](https://github.com/google-gemini/gemini-cli/pull/24862) | Giới hạn mức tăng trưởng bộ nhớ của thành phần dung lượng cao | 🟡 MỞ | spencer426 | Đặt số dòng giữ lại tối đa cho `AnsiOutput`, `SubagentProgressDisplay`, v.v., ngăn chặn tăng trưởng bộ nhớ không giới hạn |
| [#24861](https://github.com/google-gemini/gemini-cli/pull/24861) | Ctrl+G thay thế Ctrl+X để mở trình chỉnh sửa bên ngoài | 🟡 MỞ | jacob314 | Theo thông lệ ngành (như VS Code), giữ lại Ctrl+X gốc để chuyển hướng, lệnh gỡ lỗi IDE chuyển sang F4 |
| [#24859](https://github.com/google-gemini/gemini-cli/pull/24859) | Thêm cờ kích thước EPT và tăng giá trị mặc định | 🟡 MỞ | devr0306 | Giải quyết vấn đề giới hạn token trong kịch bản ngữ cảnh lớn |
| [#24858](https://github.com/google-gemini/gemini-cli/pull/24858) | Sửa lỗi nội dung biến mất khi thực thi công cụ | 🟡 MỞ | gundermanc | Sửa lỗi nội dung thơ/hội thoại bị ẩn sau khi thực thi công cụ do `topicUpdateNarration` bị kìm hãm quá mức |
| [#24853](https://github.com/google-gemini/gemini-cli/pull/24853) | Duy trì tính toàn vẹn của URL OAuth terminal | 🟡 MỞ | Aaxhirrr | **Ưu tiên P1**: URL OAuth dài bị cắt ngắn trên terminal hẹp, chuyển sang đường dẫn hiển thị chuyên dụng để đảm bảo quy trình đăng nhập đáng tin cậy |
| [#24763](https://github.com/google-gemini/gemini-cli/pull/24763) | Tăng cường cơ chế dọn dẹp sandbox | 🟡 MỞ | ehedlund | Sử dụng `try...finally` để bao bọc tất cả các đường dẫn thực thi tiến trình, ngăn chặn rò rỉ tiến trình sidecar và tập tin tạm thời |
| [#24752](https://github.com/google-gemini/gemini-cli/pull/24752) | Tách biệt ContextManager và kiến trúc Sidecar | 🟡 MỞ | joshualitt | Tái cấu trúc kiến trúc cốt lõi, giải quyết hàng loạt vấn đề #24751, cải thiện khả năng kiểm thử của mô-đun |
| [#24677](https://github.com/google-gemini/gemini-cli/pull/24677) | Tối ưu hóa định dạng đầu ra công cụ chế độ nhỏ gọn | 🟡 MỞ | jwhelangoog | Đầu ra công cụ tìm kiếm/đọc chuyển sang một dòng, tăng mật độ thông tin, thống nhất cách diễn đạt của công cụ danh sách |
| [#20406](https://github.com/google-gemini/gemini-cli/pull/20406) | Tối ưu hóa quản lý bộ nhớ đầu ra công cụ lớn | 🟡 MỞ | jacob314 | Đầu ra shell cực lớn được ghi trực tiếp vào đĩa thay vì lưu trữ toàn bộ trong bộ nhớ, ngăn chặn V8 OOM |

---

## 5. Xu hướng Nhu cầu Tính năng

Dựa trên phân tích 50 Issues đang hoạt động, trọng tâm cộng đồng thể hiện bốn hướng chính:

| Xu hướng | Đại diện Issue | Nhu cầu Cốt lõi |
|:---|:---|:---|
| **Kỹ thuật hóa Hiệu suất** | Các Issue dòng #24864-#24869 | Thiết lập hệ thống kiểm tra hồi quy hiệu suất đầy đủ, bao phủ bộ nhớ, cuộn, hội thoại dài, kịch bản đa ngôn ngữ |
| **An toàn Bộ nhớ** | #24863, #21006, #24862 | Loại bỏ các mối đe dọa rò rỉ trong Scheduler, listener sự kiện, thành phần UI |
| **Chi tiết hóa Trải nghiệm Terminal** | #24768, #24470, #24438, #24202 | Độ mượt khi cuộn, tương thích SSH, xử lý ranh giới hiển thị |
| **Tiến hóa Kiến trúc Proxy** | #22745, #23582, #22819, #24752 | Nhận biết AST, phân lớp bộ nhớ, phối hợp proxy con, tách biệt Context |

> Tín hiệu mới nổi: jacob314 đã tạo 6 Issue kiểm tra hiệu suất trong một ngày, cho thấy nhóm đang chuyển từ "bàn giao tính năng" sang "xây dựng nền tảng chất lượng".

---

## 6. Điểm quan tâm của Nhà phát triển

### 🔴 Điểm Đau Thường gặp

| Vấn đề | Kịch bản | Phản hồi Cộng đồng |
|:---|:---|:---|
| **Thiếu phát hiện môi trường SSH** | Phát triển từ xa Windows → gLinux | "Hiển thị chữ sai lệch khiến hoàn toàn không thể sử dụng" (#24202) |
| **Quy trình OAuth mong manh** | Đăng nhập trên terminal hẹp | Cắt cụt URL gây lỗi xác thực (#24853) |
| **Quản lý tập tin tạm thời lộn xộn** | Chế độ thực thi hạn chế | "Gánh nặng dọn dẹp khi làm sạch không gian làm việc để cam kết mã nguồn sạch sẽ là rất lớn" (#

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# Báo cáo Tình hình Cộng đồng GitHub Copilot CLI Hàng ngày | 2026-04-08

---

## 1. Tổng quan Hôm nay

GitHub Copilot CLI hôm nay đã phát hành liên tục **v1.0.19 → v1.0.21**, điểm nổi bật cốt lõi là chính thức giới thiệu lệnh **`copilot mcp`** để quản lý máy chủ MCP, và cải thiện đáng kể độ ổn định của hiển thị terminal (sửa lỗi spinner bị kẹt, nhấp nháy, v.v.). Hiệu quả xử lý Issue của cộng đồng cực kỳ cao, **hơn 30 Issue đã bị đóng trong 24 giờ qua**, nhưng vấn đề hồi quy quy trình xác thực (#2494) vẫn cần được chú ý.

---

## 2. Phát hành Phiên bản

### v1.0.21 (2026-04-07)
| Tính năng | Mô tả |
|:---|:---|
| **Lệnh `copilot mcp`** | Bổ sung lệnh chuyên dụng để quản lý máy chủ MCP, đánh dấu MCP chính thức hóa trên CLI |
| **Sửa lỗi ổn định Spinner** | Khi thực thi lệnh shell không đồng bộ thời gian dài, spinner không còn bị "treo giả" |
| **Tối ưu hóa Đăng nhập Doanh nghiệp** | Nhập URL GitHub Enterprise hỗ trợ nhấn Enter để gửi |
| **Sửa lỗi UI** | Bộ chọn lệnh dấu gạch chéo không còn nhấp nháy/nhảy |

### v1.0.20 / v1.0.20-1 (2026-04-07)
| Tính năng | Mô tả |
|:---|:---|
| **Hỗ trợ Khả năng Quan sát OTel** | Bổ sung chủ đề `copilot help monitoring`, hướng dẫn và ví dụ cấu hình OTel tích hợp sẵn |
| **Nhận biết Tác vụ Nền** | Spinner hiển thị liên tục cho đến khi agent nền và lệnh shell hoàn thành, người dùng nhập luôn khả dụng trong thời gian đó |
| **Định tuyến Mặc định Azure OpenAI** | Cảnh BYOK mặc định sử dụng phiên bản GA không có số phiên bản v1 |

> 🔗 [Trang Phát hành](https://github.com/github/copilot-cli/releases)

---

## 3. Issues Nóng Cộng đồng (Chọn lọc 10 mục)

| # | Trạng thái | Tiêu đề | Phân tích Tầm quan trọng | Phản ứng Cộng đồng |
|:---|:---|:---|:---|:---|
| [#2494](https://github.com/github/copilot-cli/issues/2494) | 🔴 MỞ | Nhắc nhở Keychain tự động nhập 'y/N' (hồi quy v1.0.16) | **Hồi quy nghiêm trọng quy trình xác thực**: Khi keychain hệ thống không khả dụng, CLI tự động nhập thay người dùng thay vì chờ xác nhận, gây gián đoạn xác thực. Ảnh hưởng người dùng doanh nghiệp/môi trường không có GUI. | 8 bình luận, 0 👍, cần sửa lỗi khẩn cấp |
| [#1748](https://github.com/github/copilot-cli/issues/1748) | ✅ ĐÃ ĐÓNG | Hỗ trợ Lấy mẫu MCP | Bổ sung khả năng cốt lõi MCP: Copilot Chat đã hỗ trợ, CLI trước đây thiếu, hiện đã đồng bộ hóa với lệnh `copilot mcp` | 3 bình luận, 3 👍, đóng vòng lặp tính năng |
| [#2446](https://github.com/github/copilot-cli/issues/2446) | ✅ ĐÃ ĐÓNG | `/resume` không hiển thị hội thoại gần đây | **Sửa lỗi quan trọng quản lý hội thoại**: Thiếu trường ngữ cảnh git trong `workspace.yaml` khiến hội thoại mới không hiển thị, nguyên nhân gốc đã được xác định tại `initializeWorkspace()`. | 3 bình luận, 2 👍, ảnh hưởng luồng làm việc |
| [#2344](https://github.com/github/copilot-cli/issues/2344) | ✅ ĐÃ ĐÓNG | Chức năng sao chép gốc terminal bị hỏng | **Tương thích terminal**: Tính năng báo cáo chuột được giới thiệu trong v1.0.15 đã chặn hành vi "chọn là sao chép", ảnh hưởng thói quen của nhiều người dùng Linux/terminal. | 3 bình luận, 7 👍, đóng với lượt thích cao |
| [#2499](https://github.com/github/copilot-cli/issues/2499) | ✅ ĐÃ ĐÓNG | Lệnh `/copy` lỗi + nội dung phản hồi dài bị cắt cụt | Vấn đề kép: chức năng sao chép bị hỏng + lỗi xử lý nội dung dài của engine hiển thị, đã được sửa trong quá trình tái cấu trúc lớp hiển thị. | 3 bình luận, 0 👍 |
| [#2471](https://github.com/github/copilot-cli/issues/2471) | ✅ ĐÃ ĐÓNG | Hỗ trợ Telemetry OTel (tương đương Claude Code) | **Khả năng quan sát doanh nghiệp**: Rõ ràng tương đương `CLAUDE_CODE_ENABLE_TELEMETRY` của Claude Code, v1.0.20 đã triển khai một phần. | 2 bình luận, 0 👍, người dùng doanh nghiệp quan tâm |
| [#2564](https://github.com/github/copilot-cli/issues/2564) | ✅ ĐÃ ĐÓNG | Tham số `model:` có thực sự kiểm soát lựa chọn mô hình không | **Làm rõ ngữ nghĩa cấu hình**: Hành vi thực tế của frontmatter `.agent.md` và tham số `model` của `task()` không khớp với tài liệu, cần làm rõ mong đợi. | 2 bình luận, 0 👍 |
| [#1444](https://github.com/github/copilot-cli/issues/1444) | 🔴 MỞ | Gọi bash không có tham số gây vòng lặp vô hạn | **Rủi ro ổn định**: Cơ chế chống lỗi cho lệnh bash không hợp lệ bị thiếu, có thể kích hoạt tới 5000+ lệnh gọi lặp lại cho đến khi tiến trình bị giết. | 2 bình luận, 0 👍, chờ sửa lỗi |
| [#2008](https://github.com/github/copilot-cli/issues/2008) | ✅ ĐÃ ĐÓNG | Yêu cầu: Tự động nén trước khi CAPIError 400 | **Trải nghiệm hội thoại dài**: Ngữ cảnh vượt quá giới hạn sau 190+ tin nhắn, đề xuất nén tự động trước thay vì mất công việc sau khi báo lỗi. | 2 bình luận, 3 👍, tối ưu hóa ở cấp độ kiến trúc |
| [#2557](https://github.com/github/copilot-cli/issues/2557) | ✅ ĐÃ ĐÓNG | Esc kép để hủy thao tác bị treo vô hạn (v1.0.19) | **Chặn tương tác**: Xử lý tín hiệu hủy trên macOS bị lỗi, trạng thái "Cancelling" không bao giờ kết thúc, đã sửa lỗi trong v1.0.20+. | 1 bình luận, 0 👍, phản hồi nhanh |

---

## 4. Tiến độ PR Quan trọng

| # | Trạng thái | Tiêu đề | Nội dung Chức năng/Sửa lỗi |
|:---|:---|:---|:---|
| [#2565](https://github.com/github/copilot-cli/pull/2565) | 🟡 MỞ | Script cài đặt ngăn chặn mục PATH trùng lặp | **Trải nghiệm cài đặt**: Khi chạy lại trình cài đặt, do `command -v copilot` cần khởi động lại shell để phát hiện, dẫn đến việc thêm dòng cấu hình PATH bị lặp lại. Sửa lỗi logic phát hiện để tránh làm ô nhiễm hồ sơ shell. |
| [#2556](https://github.com/github/copilot-cli/pull/2556) | 🟡 MỞ | Kỹ năng Developer | **Mở rộng hệ thống kỹ năng**: "Nâng cao kỹ năng" - chi tiết triển khai chờ được công bố, dự kiến là mẫu luồng làm việc cho nhà phát triển hoặc nâng cao khả năng proxy. |

> Lưu ý: Chỉ có 2 PR được cập nhật hôm nay, trọng tâm của nhóm là dọn dẹp Issue và phát hành phiên bản.

---

## 5. Xu hướng Nhu cầu Tính năng

Dựa trên phân tích 50 Issues đang hoạt động, trọng tâm cộng đồng thể hiện **Bốn cụm chính**:

| Xu hướng | Issue Đại diện | Tín hiệu Nhiệt |
|:---|:---|:---|
| **🔌 Đào sâu Hệ sinh thái MCP** | #1748 (Lấy mẫu), Phát hành lệnh `copilot mcp` | Chính thức đẩy mạnh, từ "hỗ trợ" đến "quản lý gốc" |
| **🔐 Trải nghiệm Doanh nghiệp/Xác thực** | #2494 (Hồi