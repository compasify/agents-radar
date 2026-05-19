# Báo cáo Tình hình Cộng đồng Công cụ AI CLI Hàng ngày - 2026-05-19

> Thời gian tạo: 2026-05-19 00:26 UTC | Công cụ được bao phủ: 9

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

## So sánh ngang

# Báo cáo Phân tích So sánh Ngang Hệ sinh thái Công cụ AI CLI | 2026-05-19

---

## 1. Toàn cảnh Hệ sinh thái

Hệ sinh thái công cụ AI CLI hiện tại đang có mô hình **"Tầng cơ sở hạ tầng hội tụ, Tầng trải nghiệm phân hóa"**: Tất cả các công cụ chính đều đã bao phủ các khả năng cốt lõi như mở rộng MCP, điều phối đa Agent, tương tác TUI. Tuy nhiên, sự khác biệt tập trung vào **kỹ thuật độ tin cậy** (nợ tài liệu Claude Code vs. lỗ đen token Codex vs. tính ổn định của đại lý phụ Gemini) và **chiến lược mở** (Pi theo đuổi khả năng nhúng tối giản vs. Qwen đặt cược vào việc làm máy chủ hóa daemon vs. OpenCode tích cực hỗ trợ hệ sinh thái mô hình trong nước). Mật độ phản hồi của cộng đồng cho thấy người dùng đã chuyển từ "thử nghiệm chức năng" sang đánh giá "sẵn sàng cho sản xuất", với **tính ổn định, khả năng quan sát và tính nhất quán đa nền tảng** trở thành những ngưỡng chung.

---

## 2. So sánh Mức độ Hoạt động của từng Công cụ

| Công cụ | Issues Hôm nay | PRs Hôm nay | Phát hành Phiên bản | Động thái Cốt lõi |
|:---|---:|---:|:---|:---|
| **Claude Code** | ~10 mục nóng (50 trong nhóm hoạt động) | 2 (1 tăng cường bảo mật + 1 rác) | ❌ Không | Nợ tài liệu bùng nổ, một mình người dùng `coygeek` thúc đẩy 28 Issues tài liệu; Sự cố P0 hệ thống thanh toán chưa được giải quyết |
| **OpenAI Codex** | ~10 mục nóng (50+ trong nhóm hoạt động) | 10+ | ✅ rust-v0.131.0 + v0.132.0-alpha.1 | Lặp lại dày đặc TUI: Mặc định `@mentions` thống nhất, hoàn thiện ngăn xếp đồng bộ hóa cài đặt luồng 7-PR; Lỗ đen tiêu thụ Token vẫn là điểm đau hàng đầu (584 bình luận) |
| **Gemini CLI** | ~10 mục nóng (50 trong nhóm hoạt động) | 5 (Commit trong ngày) | ✅ v0.44.0-nightly.20260518 | Tăng cường bảo mật dày đặc (lộ trình duyệt, seatbelt, container rootless); Tính ổn định của hệ thống đại lý phụ vẫn là điểm đau lớn nhất |
| **GitHub Copilot CLI** | 31 cập nhật | 3 (Chất lượng không đồng đều) | ✅ v1.0.49 + v1.0.49-6 | Vùng nước sâu quản trị MCP: Xung đột cấu hình, lỗ đen hết thời gian chờ, sự cố không gian tên bùng nổ; Sửa chữa một phần `postToolUse` |
| **Kimi Code CLI** | 9 mục | 2 | ❌ Không | Khủng hoảng tính ổn định của máy chủ: K2.6 quá tải, giới hạn TPD bất thường; Cộng đồng đóng góp sửa lỗi kết nối và rò rỉ bộ nhớ |
| **OpenCode** | ~10 mục nóng (50 trong nhóm hoạt động) | 10 | ✅ v1.15.5 | Tăng tốc trả nợ cơ sở hạ tầng kiểm thử (6 PR/ngày của `kitlangton`); Thích ứng mô hình trong nước (GLM-5, DeepSeek-V4) dày đặc; Sự cố clipboard chưa giải quyết với 94 bình luận |
| **Pi** | 50+ hoạt động | 10 | ✅ v0.75.2 + v0.75.3 (sửa lỗi khẩn cấp) | Sửa lỗi khẩn cấp undici HTTP/2 quay về; Tối ưu hóa hiệu suất khởi động 21s→3s được triển khai; Giám đốc điều hành Hugging Face đề xuất phát hiện LLM cục bộ động |
| **Qwen Code** | ~10 mục nóng (33 trong nhóm hoạt động) | 10 | ✅ v0.15.11-nightly | Nước rút chế độ Daemon v0.16: Tái cấu trúc kiến trúc Wave 5 dày đặc; OOM/rò rỉ bộ nhớ trở thành mối đe dọa ổn định hàng đầu |
| **DeepSeek TUI** | 22 | 25 | ❌ Không | Bùng nổ đóng góp cộng đồng: 6 PR/ngày của `aboimpinto`; Sửa chữa toàn diện Windows (lập lịch Shell, ghi log, clipboard); Công cụ tìm kiếm bị tê liệt sau đó khẩn cấp tích hợp Metaso |

> **Thứ tự hoạt động** (Kết hợp mật độ Issues/PRs/bình luận): DeepSeek TUI > Pi > OpenCode ≈ Qwen Code ≈ OpenAI Codex > Gemini CLI ≈ Claude Code > GitHub Copilot CLI > Kimi Code CLI

---

## 3. Các hướng chức năng được quan tâm chung

| Hướng chung | Công cụ liên quan | Yêu cầu cụ thể |
|:---|:---|:---|
| **Quản trị hệ sinh thái MCP** | Codex, Copilot CLI, OpenCode, Gemini | Minh bạch ưu tiên nguồn cấu hình (Copilot #3379), hồi báo thời gian chờ/tiến độ đầy đủ (OpenCode #28186→#28246), tải lại nóng (Codex #23299), trần số lượng công cụ (Gemini #24246, >128 tức là 400) |
| **Tính ổn định đa Agent** | Gemini, OpenCode, DeepSeek TUI, Qwen Code | Đại lý phụ bị treo/giả báo thành công (Gemini #21409/#22323), chấm dứt worker đồng thời (OpenCode #28015), thiếu cấu hình mô hình (DeepSeek #1768), tiếp tục thực thi điểm dừng nhiệm vụ (Qwen #4278) |
| **Kiểm soát Token/Chi phí** | Codex, DeepSeek TUI, Kimi | Lỗ đen thăm dò nền (Codex #13733, tỷ lệ thuận với lịch sử dài × số lần thăm dò), tỷ lệ truy cập cache thấp (DeepSeek #1177), giới hạn TPD bất thường (Kimi #2318) |
| **Bổ sung nền tảng Windows** | Claude Code, Codex, Gemini, Pi, DeepSeek TUI, OpenCode | Lập lịch Shell mã hóa cứng (DeepSeek #1779→#1781), báo động sai nhị phân PTY (Gemini #25164), bẫy phân tích đường dẫn (Pi #4688), treo TUI (OpenCode #27589) |
| **Quản lý bộ nhớ/Ngữ cảnh** | Qwen Code, Codex, Kimi, OpenCode | OOM/GC thất bại (Qwen #4167/#4276, Node.js heap trong khoảng 2-4GB không hợp lệ), ngữ nghĩa nén không hợp lệ (Qwen #4098, OpenCode #13838), rò rỉ bộ nhớ (Kimi #2231/#2236) |
| **Tài liệu là sản phẩm** | Claude Code, Copilot CLI, Gemini | Chức năng đã ra mắt nhưng tài liệu chưa theo kịp (68% Issues Claude Code thuộc loại tài liệu), thiếu C# LSP (Copilot #2204), mâu thuẫn WSL (Claude #18061) |

---

## 4. Phân tích Định vị Khác biệt

| Công cụ | Trọng tâm chức năng | Người dùng mục tiêu | Lộ trình kỹ thuật |
|:---|:---|:---|:---|
| **Claude Code** | Điều phối Agent cấp doanh nghiệp, Tích hợp IDE sâu | Nhóm doanh nghiệp, Nhà phát triển chuyên nghiệp | Đóng mã nguồn + Mô hình đăng ký; Hệ sinh thái mở rộng MCP/Skills/Hooks; Thúc đẩy bằng tài liệu nhưng phản hồi chậm |
| **OpenAI Codex** | Tối ưu hóa trải nghiệm TUI, Hợp tác từ xa | Nhà phát triển toàn diện, Người dùng đa thiết bị | Cốt lõi Rust + Kiến trúc đồng bộ 7-PR; Mô hình đăng ký theo lớp Business/Pro; Tranh cãi về mô hình tiêu thụ Token |
| **Gemini CLI** | Sandbox bảo mật, Thực thi theo container | Doanh nghiệp nhạy cảm bảo mật, Người dùng hệ sinh thái Google | Khung ADK Agent, Sandbox macOS/seatbelt, container rootless; Cơ sở hạ tầng đánh giá đi trước |
| **GitHub Copilot CLI** | Tích hợp liền mạch hệ sinh thái trình soạn thảo | Người dùng nặng GitHub, Nhà phát triển gắn bó với IDE | Giao thức ACP, Tích hợp sâu MCP; Định tuyến mô hình "giả thông minh" làm lộ nợ kiến trúc |
| **Kimi Code CLI** | Tối ưu hóa gốc cho mô hình trong nước | Nhà phát triển Trung Quốc, Người dùng API Moonshot | Điểm yếu tính ổn định của máy chủ rõ ràng; Hệ sinh thái đóng (Cline danh sách trắng #2322); Vấn đề kết nối/bộ nhớ do cộng đồng thúc đẩy sửa chữa |
| **OpenCode** | Trung tâm hệ sinh thái mô hình trong nước, Triển khai riêng | Nhà phát triển trong nước, Nhu cầu triển khai riêng của doanh nghiệp | Thích ứng đa mô hình tích cực (GLM-5/DeepSeek-V4/Kimi/Alibaba Cloud); Song song Electron + TUI; Tăng tốc cơ sở hạ tầng kiểm thử |
| **Pi** | Tối giản có thể nhúng, Gốc LLM cục bộ | Nhà phát triển Geek, Người đam mê tự lưu trữ | Kiến trúc mở rộng Node.js, Tối ưu hóa tải Jiti; Liên kết hệ sinh thái Hugging Face; Tính ổn định lặp lại của máy khách HTTP |
| **Qwen Code** | Máy chủ hóa Daemon, Tích hợp IDE sâu | Triển khai cấp doanh nghiệp, Người dùng VS Code | Node.js + TypeScript; Tái cấu trúc kiến trúc `qwen serve`; Điểm nghẽn gốc của quản lý bộ nhớ Node.js |
| **DeepSeek TUI** | Chống mất tương tác Terminal, Đa Agent tinh chỉnh | Người dùng gốc Terminal, Nhà phát triển nhạy cảm về chi phí | TUI Rust; Sửa chữa toàn diện Windows tích cực; Giải pháp thay thế chuỗi công cụ tìm kiếm (Metaso) |

**Các chiều phân hóa chính**:
- **Triết lý kiến trúc**: Máy chủ hóa (daemon Qwen) vs. Có thể nhúng (Pi `--new-session-id`) vs. Gốc Terminal (DeepSeek TUI)
- **Chiến lược mở**: Hệ sinh thái đóng (danh sách trắng Kimi) vs. Trung lập mô hình (10+ mô hình trong nước OpenCode) vs. Giao thức mở (MCP trở thành tiêu chuẩn thực tế)
- **Lộ trình độ tin cậy**: Thúc đẩy đánh giá (76 bài kiểm tra hành vi Gemini #24353) vs. Huy động cộng đồng (phong trào tài liệu `coygeek` của Claude Code) vs. Bản vá khẩn cấp (Pi hai phiên bản trong 24 giờ)

---

## 5. Mức độ Phổ biến và Mức độ Trưởng thành của Cộng đồng

| Tứ phân vị | Công cụ | Đặc điểm |
|:---|:---|:---|
| **🔥 Hoạt động cao + Lặp lại nhanh** | DeepSeek TUI, Pi, OpenCode | 25 PRs/ngày (DeepSeek), hai phiên bản khẩn cấp (Pi), 6 PRs/ngày cơ sở hạ tầng kiểm thử (OpenCode); Mật độ đóng góp cộng đồng cực cao, nhưng nợ tính ổn định tích lũy đồng thời |
| **🔥 Hoạt động cao + Giai đoạn Tái cấu trúc Kiến trúc** | Qwen Code, OpenAI Codex | Nước rút daemon v0.16 (Qwen), ngăn xếp đồng bộ hóa luồng 7-PR (Codex); Kỹ thuật dày đặc nhưng giá trị nhìn thấy được của người dùng bị chậm trễ |
| **😐 Hoạt động trung bình + Chế độ Bảo trì** | Claude Code, Gemini CLI, GitHub Copilot CLI | Nợ tài liệu/sự cố thanh toán chưa được giải quyết (Claude), tính ổn định của Agent lặp đi lặp lại (Gemini), vùng nước sâu quản trị MCP (Copilot); Tốc độ phản hồi của chính thức thấp hơn kỳ vọng của cộng đồng |
| **😴 Hoạt động thấp + Khủng hoảng tính ổn định** | Kimi Code CLI | Máy chủ quá tải, giới hạn bất thường, hệ sinh thái đóng; Chỉ có 2 PRs và chúng đến từ cùng một người đóng góp bên ngoài, đầu tư kỹ thuật của chính thức rõ ràng là không đủ |

**Cảnh báo về Mức độ Trưởng thành**:
- **Claude Code**: Khủng hoảng độ tin cậy tài liệu (mâu thuẫn tài liệu đa chức năng) + tính dễ vỡ của hệ thống thanh toán, cơ sở hạ tầng thương mại hóa kéo lùi niềm tin sản phẩm cốt lõi
- **Codex**: Lỗ đen tiêu thụ Token 584 bình luận chưa được giải quyết, nhận thức "đăng ký Business thực sự đắt hơn" làm tổn hại đến chuyển đổi trả phí
- **Kimi**: Tính khả dụng của dịch vụ mô hình (K2.6 503) và tính ổn định của API (giá trị bất thường 1,5 triệu TPD) tấn công kép, ở trong **khủng hoảng khả năng sử dụng sản xuất**

---

## 6. Tín hiệu Xu hướng đáng chú ý

| Tín hiệu Xu hướng | Chuỗi bằng chứng | Giá trị tham khảo cho nhà phát triển |
|:---|:---|:---|
| **MCP từ "có/không chức năng" sang "vùng nước sâu quản trị"** | Phân chia nguồn cấu hình Copilot (#3379), giới hạn cứng số lượng công cụ Gemini (#24246), quan sát độ trễ plugin Codex (#22732) | Khi lựa chọn, đánh giá **sự minh bạch cấu hình, tính đầy đủ của thời gian chờ, khả năng chẩn đoán lỗi** của triển khai MCP, thay vì chỉ xem nhãn "hỗ trợ MCP" |
| **"Tài liệu là sản phẩm" trở thành điểm phân chia cạnh tranh** | 68% Issues Claude Code thuộc loại tài liệu, thiếu tài liệu C# Copilot (#2204), ngữ nghĩa nén OpenCode chưa được ghi lại (#13838) | Ưu tiên các công cụ có **Changelog đồng bộ với chức năng, hướng dẫn di chuyển cấu hình, tài liệu chính thức cho các trường hợp sử dụng nâng cao**, giảm chi phí onboarding cho nhóm |
| **Windows từ "công dân hạng hai" thành "ngưỡng nhập môn"** | Cả 9 công cụ đều có Issues/PRs liên quan đến Windows; 35% sự chú ý của cộng đồng DeepSeek TUI, báo động sai nhị phân PTY Gemini được cộng đồng đóng vòng lặp | Các nhóm đa nền tảng cần xác minh ba khả năng cơ bản: **chiến lược lập lịch Shell (không mã hóa cứng cmd.exe), phát hiện nhị phân PTY, chuẩn hóa đường dẫn** |
| **Quản lý bộ nhớ/Ngữ cảnh từ nợ tiềm ẩn thành nút thắt rõ ràng** | Tập hợp OOM Qwen (lỗi heap Node.js 2-4GB), rò rỉ kết nối Kimi, lỗ đen thăm dò nền Codex | Các cảnh bản hội thoại dài/CI yêu cầu thử nghiệm chủ động **đường cong tăng trưởng bộ nhớ, điều kiện kích hoạt nén ngữ cảnh, tiêu thụ Token của quy trình nền** |
| **"Chống mất" trở thành tiêu chuẩn tương tác Terminal mới** | Hồi quy Ctrl+C DeepSeek TUI (#1757→#1764), cuộn không xóa (#1778), clipboard OpenCode 94 bình luận | Lựa chọn công cụ Terminal cần chú ý đến **độ mạnh mẽ của máy trạng thái đầu vào, tính nhất quán ngữ nghĩa hủy/khôi phục, lưu trữ bản nháp** |
| **Thích ứng mô hình trong nước bước vào giai đoạn lặp lại dày đặc** | OpenCode GLM-5/DeepSeek-V4/Kimi, tương thích tự lưu trữ Qwen, Pi Xiaomi MiMo | Nhà phát triển trong nước có thể ưu tiên đánh giá các công cụ **trung lập về hệ sinh thái mô hình** (OpenCode, Pi), tránh khóa mô hình đơn lẻ |
| **Kiến trúc Daemon/Máy chủ hóa xuất hiện** | `qwen serve` của Qwen (#4175 Wave 5), TUI từ xa Codex (ngăn xếp đồng bộ 7-PR), cơ sở hạ tầng kiểm thử `opencode serve` của OpenCode | Dự báo AI CLI sẽ tiến hóa từ "quy trình cục bộ" sang **"client cục bộ + daemon từ xa/cục bộ"**, tích hợp IDE, đồng bộ đa thiết bị, tích hợp CI sẽ được hưởng lợi |

---

> **Đề xuất quyết định**: Ở giai đoạn hiện tại, **môi trường sản xuất đề xuất** ưu tiên Gemini CLI (sandbox bảo mật trưởng thành) hoặc Claude Code (chức năng đầy đủ nhưng cần dung thứ ma sát tài liệu/thanh toán); **nhóm kỹ thuật tiên tiến** có thể chú ý đến Pi (tối giản có thể nhúng) hoặc DeepSeek TUI (cộng đồng năng động, sửa chữa tích cực trên Windows); **hệ sinh thái trong nước** OpenCode có độ phủ mô hình rộng nhất nhưng cần chấp nhận biến động tính ổn định trong giai đoạn trả nợ cơ sở hạ tầng kiểm thử.

---

## Báo cáo chi tiết từng Công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Điểm nóng Cộng đồng Claude Code Skills

> Nguồn dữ liệu: [anthropics/skills](https://github.com/anthropics/skills)

# Báo cáo Điểm nóng Cộng đồng Claude Code Skills (Tính đến ngày 2026-05-19)

---

## 1. Bảng xếp hạng Skills Nóng (theo mức độ quan tâm của cộng đồng)

| Hạng | Skill | Mô tả chức năng | Trạng thái | Điểm thảo luận chính |
|:---|:---|:---|:---|:---|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | Kiểm soát chất lượng bố cục tài liệu do AI tạo: ngăn chặn dòng đơn lẻ, dòng lẻ, đánh số sai lệch, v.v. | 🟡 Mở | Giải quyết trực tiếp các điểm yếu phổ biến của tài liệu do Claude tạo, được coi là "ảnh hưởng đến mọi tài liệu", nhưng cần đánh giá xem liệu nó có nên là một skill độc lập hay được tích hợp vào các skill tài liệu hiện có hay không |
| 2 | **[ODT](https://github.com/anthropics/skills/pull/486)** | Tạo, điền, đọc định dạng OpenDocument (.odt/.ods) và chuyển đổi sang HTML | 🟡 Mở | Hỗ trợ định dạng tiêu chuẩn mở, bổ sung cho các skill docx/pdf hiện có; Cộng đồng quan tâm đến khả năng tương thích hệ sinh thái LibreOffice |
| 3 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | Skill thiết kế giao diện người dùng cải tiến, nâng cao độ rõ ràng và khả năng thực thi của chỉ lệnh | 🟡 Mở | Tập trung vào phương pháp luận kỹ thuật của skill: Làm thế nào để tránh "thuyết giáo con người" mà "có thể thực thi bởi Claude", là một trường hợp điển hình để tối ưu hóa chất lượng skill |
| 4 | **[skill-quality-analyzer / skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | Meta skill: Tự động đánh giá chất lượng (cấu trúc, tài liệu, ví dụ, v.v. theo 5 chiều) và rủi ro bảo mật của các skill khác | 🟡 Mở | Công cụ tự khởi động hệ sinh thái, giải quyết vấn đề quản trị sau khi số lượng skill bùng nổ; Được coi là "skill của skill" |
| 5 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | Hướng dẫn kiểm thử toàn diện: Mô hình Testing Trophy, kiểm thử thành phần React, kiểm thử tích hợp, E2E, v.v. | 🟡 Mở | Lấp đầy khoảng trống trong lĩnh vực kiểm thử, hình thành vòng lặp DevOps hoàn chỉnh với các skill phát triển hiện có |
| 6 | **[appdeploy](https://github.com/anthropics/skills/pull/360)** | Triển khai ứng dụng toàn diện lên URL công cộng trực tiếp từ Claude thông qua AppDeploy.ai | 🟡 Mở | Trải nghiệm tối ưu của "hội thoại là triển khai", đại diện cho sự tiến hóa của Claude Code từ công cụ mã hóa sang nền tảng cung cấp đầu cuối |
| 7 | **[sensory](https://github.com/anthropics/skills/pull/806)** | Tự động hóa gốc macOS: Thay thế chụp màn hình sử dụng máy tính bằng AppleScript | 🟡 Mở | Thiết kế phân lớp quyền (Tier 1/2) gây ra thảo luận, đại diện cho sự thay đổi mô hình tự động hóa GUI từ "mô phỏng trực quan" sang "gọi cấp hệ thống" |
| 8 | **[AURELION](https://github.com/anthropics/skills/pull/444)** | Khung nhận thức bốn bộ phận: Mẫu tư duy cấu trúc, Chế độ cố vấn, Chế độ đại lý, Bộ nhớ bền vững | 🟡 Mở | Khung nặng trong lĩnh vực quản lý kiến thức, điểm tranh cãi là liệu hạt nhân skill có nên được chia thành các module độc lập hay không |

---

## 2. Xu hướng Nhu cầu của Cộng đồng (Rút ra từ Issues)

| Hướng xu hướng | Issue đại diện | Yêu cầu cốt lõi |
|:---|:---|:---|
| **Quản trị Skill cấp tổ chức** | [#228](https://github.com/anthropics/skills/issues/228) | Chia sẻ skill trong doanh nghiệp: Nâng cấp từ "truyền tệp qua Slack + tải lên thủ công" lên kho skill cấp tổ chức hoặc chia sẻ liên kết trực tiếp |
| **Tích hợp Skill ↔ MCP** | [#16](https://github.com/anthropics/skills/issues/16) | Phơi bày skill dưới dạng công cụ MCP, chuẩn hóa giao thức API phần mềm AI; Skill nghệ thuật thuật toán nên trở thành `generateAlgorithmArt({...})` |
| **Biên giới Bảo mật Tin cậy** | [#492](https://github.com/anthropics/skills/issues/492) | Lạm dụng không gian tên `anthropic/` của skill cộng đồng để giả mạo chính thức, cần thiết lập cơ chế chữ ký/xác minh |
| **Tương thích Chứng nhận Doanh nghiệp** | [#532](https://github.com/anthropics/skills/issues/532) | Phụ thuộc mã hóa `ANTHROPIC_API_KEY` của skill-creator chặn người dùng SSO/giấy phép doanh nghiệp |
| **Tải plugin chính xác** | [#189](https://github.com/anthropics/skills/issues/189), [#1087](https://github.com/anthropics/skills/issues/1087) | Nội dung `document-skills` và `example-skills` trùng lặp, tải plugin toàn bộ thay vì tập hợp khai báo, dẫn đến ngữ cảnh mở rộng |
| **Cơ sở hạ tầng Đánh giá** | [#556](https://github.com/anthropics/skills/issues/556) | Tỷ lệ kích hoạt `claude -p` của `run_eval.py` là 0, thiếu xác minh CI/CD có thể định lượng về hiệu quả skill |

---

## 3. Skills Tiềm năng Cao Chờ Hợp nhất (Bình luận hoạt động + Cập nhật gần đây)

| Skill | PR | Đánh giá tiềm năng | Rủi ro chặn |
|:---|:---|:---|:---|
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | ⭐⭐⭐⭐⭐ Khả năng áp dụng rộng rãi, không có phụ thuộc bên ngoài, giải quyết điểm yếu thực tế | Cần xác nhận cách tích hợp với skill docx hiện có thay vì tồn tại độc lập |
| **ODT** | [#486](https://github.com/anthropics/skills/pull/486) | ⭐⭐⭐⭐☆ Nhu cầu cấp thiết trong các tình huống chính phủ/học thuật/mã nguồn mở, hoàn thiện ma trận định dạng tài liệu | Người bảo trì cần xác minh phạm vi kiểm thử tương thích LibreOffice |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | ⭐⭐⭐⭐☆ Mảnh ghép quan trọng của vòng lặp trải nghiệm phát triển, tác giả lặp lại liên tục (cập nhật tháng 4) | Cần làm rõ ranh giới trách nhiệm với các skill tạo mã hiện có |
| **sensory** | [#806](https://github.com/anthropics/skills/pull/806) | ⭐⭐⭐⭐☆ Giải pháp gốc cho tự động hóa macOS, hiệu suất tốt hơn giải pháp chụp màn hình | Ngưỡng trải nghiệm người dùng của mô hình quyền AppleScript |
| **ServiceNow** | [#568](https://github.com/anthropics/skills/pull/568) | ⭐⭐⭐☆☆ Bao phủ sâu nền tảng ITSM doanh nghiệp, tính hoàn chỉnh trong lĩnh vực dọc cao nhất | Bao phủ quá rộng (ITSM/ITOM/FSM/SPM/SecOps), có thể cần chia tách |
| **n8n-builder / n8n-debugger** | [#190](https://github.com/anthropics/skills/pull/190) | ⭐⭐⭐⭐☆ Công cụ quy trình làm việc mã thấp phổ biến, bao gồm skill gỡ lỗi tạo vòng lặp | Cần xác nhận chiến lược tương thích phiên bản n8n |

> **Lưu ý**: PR sửa lỗi liên tiếp ba lần của Lubrsy706 ([#538](https://github.com/anthropics/skills/pull/538) in hoa pdf, [#539](https://github.com/anthropics/skills/pull/539) xác thực YAML, [#541](https://github.com/anthropics/skills/pull/541) xung đột ID DOCX) mặc dù là sửa lỗi, nhưng phản ánh sự cải thiện về mức độ trưởng thành kỹ thuật trong quá trình sản xuất skill tài liệu, dự kiến sẽ được hợp nhất nhanh chóng.

---

## 4. Cái nhìn Sâu sắc về Hệ sinh thái Skills

> **Yêu cầu cốt lõi của cộng đồng: Tiến hóa từ "công cụ hiệu suất cá nhân" thành "cơ sở hạ tầng AI có thể quản lý, xác minh và hợp tác ở cấp doanh nghiệp"** - Bốn điểm yếu về chia sẻ tổ chức, biên giới bảo mật, hệ thống đánh giá và xác thực danh tính đang trở thành những điểm nghẽn quan trọng sau sự bùng nổ số lượng skill.

---

---

# Báo cáo Tình hình Cộng đồng Claude Code Hàng ngày - 2026-05-19

## Tóm tắt Hôm nay

Cộng đồng không có bản phát hành phiên bản mới hôm nay, các động thái cốt lõi tập trung vào hai chủ đề chính là **bổ sung hệ thống tài liệu** và **trải nghiệm thanh toán/đăng ký**. Thành viên cộng đồng kỳ cựu `coygeek` tiếp tục thúc đẩy sửa chữa 20+ lỗi tài liệu, trong khi sự cố thanh toán nâng cấp Pro→Max trở thành khiếu nại thường xuyên nhất của người dùng, tích lũy được sự quan tâm với 25+ bình luận.

---

## Issues Nóng của Cộng đồng (Chọn lọc 10 mục)

| Mức độ ưu tiên | Issue | Vấn đề Cốt lõi | Phản ứng của Cộng đồng |
|:---|:---|:---|:---|
| 🔴 **P0** | [#55917](https://github.com/anthropics/claude-code/issues/55917) Lỗi xác thực thanh toán Pro→Max trên tất cả các kênh | Sự cố cấp hệ thống thanh toán, ảnh hưởng đến tất cả các loại thẻ ngân hàng/phương thức thanh toán, người dùng không thể hoàn tất nâng cấp đăng ký | **15 bình luận**, nhiều người dùng xác nhận tái hiện, được đánh dấu `external` nhưng chưa nhận được phản hồi sửa chữa từ chính thức |
| 🔴 **P0** | [#56281](https://github.com/anthropics/claude-code/issues/56281) Lỗi thanh toán nâng cấp Max 5x→20x | Các cấp độ đăng ký cao cấp cũng gặp phải lỗi chặn thanh toán, đội ngũ hỗ trợ không phản hồi | **10 bình luận, 5 👍**, người dùng doanh nghiệp/nặng bị ảnh hưởng |
| 🟡 **P1** | [#59481](https://github.com/anthropics/claude-code/issues/59481) Biểu tượng chế độ ẩn danh của Windows chồng lên nút đóng hệ thống | Lỗi cấp độ UI, ảnh hưởng đến tương tác cơ bản của người dùng Windows | **9 bình luận, 7 👍**, vấn đề trực quan được cộng đồng công nhận rộng rãi |
| 🟡 **P1** | [#18061](https://github.com/anthropics/claude-code/issues/18061) Tài liệu tích hợp WSL Chrome mâu thuẫn với Changelog | Tài liệu chính thức tự mâu thuẫn, người dùng không thể xác nhận trạng thái hỗ trợ WSL | **7 bình luận**, kéo dài chưa giải quyết (tạo từ tháng 1) |
| 🟡 **P1** | [#42309](https://github.com/anthropics/claude-code/issues/42309) Hành vi bộ nhớ đệm gợi ý `--resume` chưa được tài liệu hóa | Liên quan đến cơ chế khôi phục phức tạp của máy chủ MCP, proxy tùy chỉnh thiếu giải thích | **5 bình luận**, ảnh hưởng đến quy trình làm việc nâng cao của nhà phát triển |
| 🟡 **P1** | [#29508](https://github.com/anthropics/claude-code/issues/29508) Hành vi "sao chép toàn bộ" của lưu trữ cố định `/copy` chưa được ghi lại | Tài liệu chế độ tương tác bỏ sót chức năng đã được phát hành, người dùng phát hiện hành vi khác với tài liệu | **5 bình luận** |
| 🟢 **P2** | [#28043](https://github.com/anthropics/claude-code/issues/28043) Thay đổi mặc định của bảng liệt kê công cụ Bash chưa được giải thích | Thiếu hướng dẫn về biến môi trường `CLAUDE_BASH_NO_LOGIN` và di chuyển | **4 bình luận, 3 👍**, sự khác biệt môi trường Shell gây ra sự cố tương thích kịch bản |
| 🟢 **P2** | [#60377](https://github.com/anthropics/claude-code/issues/60377) Danh sách Routine đang chạy không có phản hồi trực quan khi nhấp | Lỗi có thể khám phá UI, nhấp vào cấp độ hàng không có trạng thái hover/con trỏ | **2 bình luận**, được chú ý ngay sau khi tạo, phản ánh nhu cầu tinh chỉnh trải nghiệm web |
| 🟢 **P2** | [#52601](https://github.com/anthropics/claude-code/issues/52601) Đường dẫn tài liệu cài đặt chưa được cập nhật theo di chuyển cấu hình | Thay đổi từ `~/.claude.json` thành `~/.claude/settings.json` chưa được đồng bộ hóa | **4 bình luận**, dẫn đến người dùng thao tác theo đường dẫn cũ bị lỗi |
| 🟢 **P2** | [#53068](https://github.com/anthropics/claude-code/issues/53068) Tài liệu Windows vẫn ghi Git Bash là bắt buộc | Cơ chế quay lại PowerShell đã được phát hành nhưng tài liệu chưa được cập nhật | **4 bình luận**, giảm trải nghiệm nhập môn cho người dùng Windows |

---

## Tiến triển PR Quan trọng (Tổng cộng 2 mục, hiển thị toàn bộ)

| PR | Nội dung | Trạng thái | Đánh giá |
|:---|:---|:---|:---|
| [#60280](https://github.com/anthropics/claude-code/pull/60280) | **Tăng cường bảo mật CI**: Ghim SHA cho các tham chiếu còn lại của `actions/checkout` và `actions/github-script` (6 quy trình công việc), tiếp tục quản trị bảo mật chuỗi cung ứng của #56784 | `MỞ` | ✅ Thực hành bảo mật cấp sản xuất, giảm rủi ro giả mạo Action của bên thứ ba |
| [#58673](https://github.com/anthropics/claude-code/pull/58673) | Tiêu đề là `s`, không có mô tả hợp lệ, nghi là kiểm thử/commit nhầm | `MỞ` | ⚠️ PR rác, cần người bảo trì dọn dẹp |

---

## Xu hướng Yêu cầu Chức năng

Dựa trên phân tích 50 Issues hoạt động, sự quan tâm của cộng đồng thể hiện rõ ràng **"Nợ tài liệu > Yêu cầu chức năng"**:

```
Hoàn thiện hệ thống tài liệu  ████████████████████████████████████████  68%  (34 mục)
Trải nghiệm thanh toán/đăng ký  ████████                                  14%  (7 mục)
Tinh chỉnh UI/UX     ████                                       8%  (4 mục)
Tích hợp IDE       ██                                         4%  (2 mục)
Bảo mật/Cơ sở hạ tầng  ██                                         4%  (2 mục)
```

**Ba hướng xu hướng**:

1. **Tài liệu là sản phẩm (Docs-as-Product)**
   - Di chuyển cấu hình ( `~/.claude.json` → `~/.claude/settings.json`), hành vi chức năng mới (chip paste ảnh `[Image #N]`, lưu trữ cố định `/copy`), sự khác biệt nền tảng (Quay lại PowerShell của Windows, Chrome của WSL) đều có **"chức năng đã ra mắt, tài liệu chưa theo kịp"** một cách có hệ thống
   - Các trường hợp sử dụng nâng cao của hệ sinh thái mở rộng như MCP, Hooks, Skills gần như hoàn toàn dựa vào sự khám phá của cộng đồng

2. **Ma sát thương mại hóa đăng ký**
   - Lỗi xác thực thanh toán lan rộng trên tất cả các cấp Pro→Max→Max 20x, và thiếu phản hồi kênh hỗ trợ, ảnh hưởng trực tiếp đến chuyển đổi ARR

3. **Tính nhất quán trải nghiệm đa nền tảng**
   - Nhu cầu tinh chỉnh đầu cuối dày đặc trên Windows (chồng biểu tượng, yêu cầu Shell), macOS (hành vi chọn Option+click), Web (tương tác Routine)

---

## Tóm tắt Điểm yếu của Nhà phát triển

| Loại điểm yếu | Biểu hiện cụ thể | Phạm vi ảnh hưởng |
|:---|:---|:---|
| **Khủng hoảng độ tin cậy tài liệu** | Mâu thuẫn tài liệu đa chức năng (WSL), thay đổi đường dẫn chưa đồng bộ, chức năng đã gỡ bỏ vẫn được trích dẫn | Tất cả người dùng nền tảng, đặc biệt là người mới bắt đầu |
| **Hộp đen cấu hình hóa** | Cơ chế bộ nhớ đệm `--resume`, hành vi đăng nhập Shell Bash, logic nội bộ như di chuyển bí danh mô hình không có tài liệu | Người dùng nâng cao, cảnh CI/CD |
| **Tính dễ vỡ của hệ thống thanh toán** | Lỗi thanh toán không có mã lỗi, không có đường dẫn suy giảm, phản hồi hỗ trợ chậm trễ | Phễu chuyển đổi trả phí |
| **Khoảng trống tài liệu hệ sinh thái mở rộng** | Phát triển máy chủ MCP (nội dung lỗi đa block, cảnh báo ổn định song song Hooks) | Nhà xây dựng hệ sinh thái, đào tạo nội bộ doanh nghiệp |
| **Khả năng khám phá đầu cuối Web** | Gợi ý tương tác cho các chức năng Web mới như Routine, Toàn màn hình không đủ | Người dùng claude.ai/code |

---

> **Ghi chú của Nhà phân tích**: Một mình `coygeek` đóng góp 28/50 Issues tài liệu, hình thành hiện tượng rõ ràng **"tài liệu được huy động cộng đồng nhưng phản hồi của chính thức bị chậm trễ"** - Đề xuất Anthropic thành lập vai trò bảo trì chuyên dụng tài liệu hoặc mở quyền chỉnh sửa cộng đồng, chuyển mô hình dựa trên Issue chi phí cao hiện tại sang mô hình chỉnh sửa hợp tác hiệu quả hơn.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Báo cáo Tình hình Cộng đồng OpenAI Codex Hàng ngày - 2026-05-19

## Tóm tắt Hôm nay

Cộng đồng Codex hôm nay tiếp tục thảo luận xoay quanh hai điểm yếu cốt lõi là **tiêu thụ token mất kiểm soát** và **báo động sai bảo mật chặn quy trình làm việc**, vấn đề "đốt tiền" với 584 bình luận vẫn là tiêu điểm. Đồng thời, trải nghiệm TUI đón nhận những lần lặp lại dày đặc - `@mentions` thống nhất trở thành hành vi mặc định, ngăn xếp kỹ thuật 7-PR của đồng bộ hóa cài đặt luồng đang đi đến giai đoạn hoàn thiện.

---

## Phát hành Phiên bản

### rust-v0.131.0
**Nâng cấp Cốt lõi: Kiểm soát phiên TUI được tăng cường toàn diện**
- Lệnh cấp dịch vụ dựa trên dữ liệu, hiển thị lượng token hỗn hợp, trực quan hóa chế độ quyền/phê duyệt
- Hiển thị thư mục gốc của không gian làm việc có hiệu lực, bảng Markdown đáp ứng
- Mở rộng tính năng tìm kiếm `@` đề cập (liên quan đến [#21745](https://github.com/openai/codex/issues/21745), [#21906](https://github.com/openai/codex/issues/21906))

### rust-v0.132.0-alpha.1
Phiên bản xem trước sớm, không có mô tả thay đổi chi tiết.

---

## Issues Nóng của Cộng đồng

| # | Trạng thái | Tiêu đề | Bình luận | 👍 | Điểm chính |
|---|------|------|------|-----|---------|
| [#14593](https://github.com/openai/codex/issues/14593) | 🔴 OPEN | **Đốt token rất nhanh** | 584 | 258 | **Điểm yếu hàng đầu của cộng đồng**: Tiêu thụ token bất thường của người dùng đăng ký Business, 258 lượt thích cho thấy sự đồng cảm rộng rãi, OpenAI vẫn chưa đưa ra giải pháp cơ bản |
| [#3567](https://github.com/openai/codex/issues/3567) | 🟢 CLOSED | Undo không hoạt động (Windows) | 56 | 28 | Vấn đề hoàn tác trên Windows kéo dài 8 tháng cuối cùng đã được đóng, việc không thể hoàn tác sau khi chỉnh sửa ở chế độ Agent là điểm vấp ngã thường xuyên |
| [#12564](https://github.com/openai/codex/issues/12564) | 🔴 OPEN | Cho phép đổi tên tiêu đề tác vụ/luồng | 53 | 97 | **Yêu cầu chức năng có lượt thích cao**: Trải nghiệm điều hướng lịch sử kém, 97 lượt thích cho thấy đây là điểm nghẽn năng suất |
| [#20552](https://github.com/openai/codex/issues/20552) | 🔴 OPEN | Toggle File Tree không đáng tin cậy (Ứng dụng macOS) | 38 | 14 | Lỗi tương tác cơ bản của ứng dụng máy tính để bàn, ảnh hưởng đến quy trình làm việc duyệt tệp |
| [#13733](https://github.com/openai/codex/issues/13733) | 🔴 OPEN | Thăm dò nền lãng phí token | 19 | 17 | **Lộ nợ kỹ thuật**: Mỗi lần thăm dò trạng thái của các quy trình nền như `cargo build` đều kích hoạt trao đổi API đầy đủ + toàn bộ lịch sử, tiêu thụ token tỷ lệ thuận với lịch sử dài × số lần thăm dò |
| [#20741](https://github.com/openai/codex/issues/20741) | 🔴 OPEN | Lịch sử trò chuyện biến mất sau khi cập nhật | 16 | 7 | Lo ngại mất dữ liệu, lịch sử trò chuyện dự án của người dùng Pro bốc hơi |
| [#4218](https://github.com/openai/codex/issues/4218) | 🔴 OPEN | Lỗi Shift+Enter gửi gợi ý (macOS) | 15 | 13 | Trải nghiệm nhập TUI suy thoái, vấn đề lịch sử #545 tái phát |
| [#23220](https://github.com/openai/codex/issues/23220) | 🟢 CLOSED | Cờ an toàn mạng báo động sai chặn quy trình làm việc | 5 | 0 | **Khủng hoảng báo động sai hệ thống bảo mật**: Quy trình làm việc GSM/DevOps bình thường của người dùng trả phí bị chặn, Trusted Access cũng không thể gỡ chặn |
| [#23340](https://github.com/openai/codex/issues/23340) | 🔴 OPEN | Vòng lặp /goal tạo ra 34 GB nhật ký trong một ngày | 4 | 0 | **Sự cố hiệu suất cực đoan**: Dòng nhật ký đơn lẻ 480KB, chuỗi span theo dõi lồng nhau gây nổ bộ nhớ lưu trữ |
| [#23193](https://github.com/openai/codex/issues/23193) | 🔴 OPEN | Sau khi cập nhật ứng dụng máy tính để bàn Windows, trò chuyện cũ biến mất | Dữ liệu vẫn còn trong SQLite nhưng UI không hiển thị, lỗi logic di chuyển | 4 | 0 | |

---

## Tiến triển PR Quan trọng

| # | Trạng thái | Tiêu đề | Nội dung Cốt lõi |
|---|------|------|---------|
| [#23299](https://github.com/openai/codex/pull/23299) | 🟡 OPEN | Thêm lệnh tải lại plugin | CLI mới thêm `codex plugins reload`, hỗ trợ tải lại nóng plugin máy chủ MCP, không cần khởi động lại phiên |
| [#22510](https://github.com/openai/codex/pull/22510) | 🟡 OPEN | [7/7] Đồng bộ cài đặt luồng TUI | **Chặng cuối của ngăn xếp kỹ thuật 7-PR**: Đồng bộ hóa thay đổi cài đặt luồng theo thời gian thực từ client TUI từ xa (mô hình, chế độ lập kế hoạch, quyền, v.v.) |
| [#22509](https://github.com/openai/codex/pull/22509) | 🟡 OPEN | [6/7] Thêm API cài đặt luồng máy chủ ứng dụng | Cung cấp API cập nhật cài đặt không cần khởi động lượt đi cho client từ xa + cơ chế thông báo quảng bá |
| [#22508](https://github.com/openai/codex/pull/22508) | 🟡 OPEN | [5/7] Thay thế OverrideTurnContext bằng ThreadSettings | Giới thiệu cập nhật cài đặt kiểu hàng đợi `Op::ThreadSettings`, loại bỏ `OverrideTurnContext` cũ |
| [#22732](https://github.com/openai/codex/pull/22732) | 🟡 OPEN | Thêm nhật ký độ trễ chi tiết của plugin và đề cập | Quan sát độ trễ toàn diện của plugin/đề cập: list/read, thư mục từ xa, tìm kiếm mờ, đồng bộ cửa sổ bật lên, bao gồm liên kết ID yêu cầu JSON-RPC |
| [#23363](https://github.com/openai/codex/pull/23363) | 🟡 OPEN | TUI: Mặc định sử dụng đề cập thống nhất | **Di chuyển mô hình tương tác**: `@mentions` thống nhất trở thành mặc định, loại bỏ logic phân chia đề cập tệp và công cụ, cờ `mentions_v2` trở thành hoạt động trống tương thích |
| [#21909](https://github.com/openai/codex/pull/21909) | 🟡 OPEN | Tôn trọng các cấp dịch vụ mặc định của danh mục mô hình | Cấp dịch vụ mặc định dựa trên backend (ví dụ: `priority`), loại bỏ logic gợi ý kế hoạch tài khoản cục bộ của client |
| [#23372](https://github.com/openai/codex/pull/23372) | 🟡 OPEN | Tách khám phá cài đặt plugin | Cài đặt plugin được chia thành `list_available_plugins_to_install` (danh sách) và `request_plugin_install` (thực thi), giảm tải prompt |
| [#23357](https://github.com/openai/codex/pull/23357) | 🟡 OPEN | Hỗ trợ tham chiếu và định nghĩa cục bộ trong lược đồ đầu vào công cụ | Lược đồ công cụ kết nối hỗ trợ tham chiếu `$ref` cục bộ JSON Schema, tránh cấu trúc lồng nhau lớn lặp lại |
| [#23362](https://github.com/openai/codex/pull/23362) | 🟡 OPEN | Xóa tiêu đề số dòng cắt bớt | Chuẩn hóa định dạng hiển thị mô hình cho đầu ra công cụ bị cắt bớt, loại bỏ sự khác biệt biểu diễn siêu dữ liệu giữa shell/unified exec/chế độ mã |

---

## Xu hướng Yêu cầu Chức năng

```
🔥 Hướng tần suất cao (theo mật độ Issues)
├── Quản lý Lịch sử/Phiên  ████████████████████  Tìm kiếm, đổi tên, chống mất, đồng bộ đa thiết bị
├── Kiểm soát Token/Chi phí  ██████████████████    Thăm dò nền, phiên dài, tiêu thụ vòng lặp /goal
├── Chính sách Bảo mật/Phê duyệt   ██████████████      Tỷ lệ báo động sai, miễn trừ trong các tình huống Gov/GSM, Trusted Access bị lỗi
├── Điều khiển Từ xa/Di động  ██████████████        Hỗ trợ Windows, máy trạng thái ghép nối, kết nối lại sau khi hoàn tác
├── TUI/Trải nghiệm Nhập liệu    ████████████          Các mô hình CLI như Shift+Enter, mentions, /recap
├── Khả năng Quan sát Hiệu suất    ██████████            Nổ nhật ký, đo lường nén ngữ cảnh, tình trạng khỏe mạnh của Compaction
└── Môi trường Thực thi/Sandbox   ████████              Hỗ trợ MPS, biên giới không gian làm việc, trốn thoát quyền |
```

---

## Điểm quan tâm của Nhà phát triển

### 🔴 Điểm yếu gây trở ngại

| Vấn đề | Phạm vi ảnh hưởng | Tình huống điển hình |
|--------|--------|---------|
| **Lỗ đen tiêu thụ Token** | Tất cả nền tảng | Quy trình nền thăm dò, phiên lịch sử dài, thử lại tự động chế độ Agent, hóa đơn người dùng Business/Pro mất kiểm soát |
| **"Tạt cả họ" báo động sai bảo mật** | CLI + Người dùng doanh nghiệp | Phát triển GSM, DevOps, nhân Linux bình thường bị gắn cờ là rủi ro an ninh mạng, Trusted Access vô dụng |
| **Mất dữ liệu khi cập nhật** | Ứng dụng Máy tính để bàn | Sau khi nâng cấp phiên bản, dữ liệu SQLite tồn tại nhưng UI không hiển thị, không có công cụ di chuyển chính thức |

### 🟡 Ma sát trải nghiệm

- **Windows công dân hạng hai**: Điều khiển từ xa di động chỉ hỗ trợ macOS, bị loại trừ trong các tình huống dự án SSH từ xa
- **Hộp đen ngữ cảnh**: Khi nào mô hình nén, bỏ sót nội dung gì trong phiên dài, người dùng hoàn toàn không nhận biết (yêu cầu Telemetry Compaction [#22220])
- **Khoảng cách mô hình TUI**: Lệnh điều hướng phiên như `/recap`, `/btw` của Claude Code, cộng đồng Codex liên tục kêu gọi đối sánh

### 🟢 Tín hiệu tích cực

- **Ngăn xếp 7-PR đồng bộ cài đặt luồng**: Việc dọn dẹp kiến trúc do etraut-openai dẫn đầu sắp kết thúc, tạo tiền đề cho các cảnh đa người dùng/đa client
- **Thống nhất mentions được triển khai**: Giảm sự phân chia nhận thức giữa tìm kiếm tệp và gọi công cụ, cải thiện tính nhất quán của TUI
- **Kỹ thuật hóa hệ thống plugin**: Tải lại, quan sát độ trễ, tách cài đặt, cơ sở hạ tầng hệ sinh thái MCP đang trưởng thành

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Báo cáo Tình hình Cộng đồng Gemini CLI Hàng ngày - 2026-05-19

---

## 1. Tóm tắt Hôm nay

Cộng đồng Gemini CLI hôm nay có mức độ hoạt động đáng kể, phiên bản ban đêm **v0.44.0-nightly.20260518** được phát hành, bổ sung cờ kích hoạt ADK Agent Session Subagent; đồng thời **5 PR mới được cam kết vào ngày 18 tháng 5**, tập trung vào tăng cường bảo mật (bảo vệ lộ trình duyệt), mở rộng chiến lược mô hình (chuỗi quay lại gemini-2.5-flash-lite) và tối ưu hóa sandbox container. **Tính ổn định của hệ thống đại lý phụ** vẫn là điểm yếu tập trung nhất của cộng đồng, nhiều Issues ưu tiên cao liên tục theo dõi tình trạng đại lý phụ bị treo, lỗi khôi phục và các vấn đề về chiến lược gọi công cụ.

---

## 2. Phát hành Phiên bản

### v0.44.0-nightly.20260518.g5611ff40e
| Thuộc tính | Nội dung |
|:---|:---|
| Thời gian phát hành | 2026-05-18 |
| Thay đổi cốt lõi | Thêm cờ chức năng `adk.agentSessionSubagentEnabled` |
| Người đóng góp | @adamfweidman |

**Chi tiết cập nhật**: Cờ này cho phép nhà phát triển kiểm soát rõ ràng trạng thái kích hoạt của đại lý phụ trong phiên ADK (Bộ công cụ phát triển Agent), cung cấp điểm cấu hình cho việc điều phối Agent có độ chi tiết cao. [→ Xem Changelog đầy đủ](https://github.com/google-gemini/gemini-cli/compare/v0.44.0-nightly.20260517.g77e65c0db...v0.44.0-nightly.20260518.g5611ff40e)

---

## 3. Issues Nóng của Cộng đồng (Top 10)

| # | Issue | Mức độ ưu tiên | Vấn đề Cốt lõi | Phản ứng của Cộng đồng | Liên kết |
|:---|:---|:---|:---|:---|:---|
| **#21409** | Generalist agent hangs | P1 | **Đại lý phụ bị treo vô hạn**: Đại lý tổng quát (generalist) bị chặn vĩnh viễn trong các tác vụ đơn giản (như tạo thư mục), vô hiệu hóa đại lý phụ có thể khắc phục | 🔥 Quan tâm cao (7👍), người dùng buộc phải tắt chức năng đại lý phụ | [Liên kết](https://github.com/google-gemini/gemini-cli/issues/21409) |
| **#22745** | AST-aware file reads/search/mapping | P2 | **Tăng cường thông minh mã**: Đánh giá giá trị của các công cụ nhận biết AST đối với việc đọc tệp, tìm kiếm và ánh xạ cơ sở mã, giảm lỗi đọc và lãng phí Token | 7 bình luận, khám phá cấp kiến trúc, liên quan đến #22746, #22747 | [Liên kết](https://github.com/google-gemini/gemini-cli/issues/22745) |
| **#22323** | Subagent phục hồi báo cáo sai GOAL success | P1 | **Che dấu trạng thái nghiêm trọng Bug**: `codebase_investigator` vượt quá giới hạn MAX_TURNS nhưng vẫn trả về "success", che giấu sự gián đoạn | 6 bình luận, ảnh hưởng đến độ tin cậy của việc gỡ lỗi | [Liên kết](https://github.com/google-gemini/gemini-cli/issues/22323) |
| **#24353** | Robust component level evaluations | P1 | **Cơ sở hạ tầng đánh giá**: Cải thiện độ tin cậy của 76 bài kiểm tra hành vi, chạy liên tục 6 phiên bản mô hình Gemini | 6 bình luận, công việc cốt lõi của kỹ thuật chất lượng | [Liên kết](https://github.com/google-gemini/gemini-cli/issues/24353) |
| **#21968** | Gemini không chủ động sử dụng skills và sub-agents | P2 | **Lỗi tự chủ của Agent**: Mô hình không gọi các kỹ năng tùy chỉnh và đại lý phụ ngay cả khi đối mặt với các tác vụ liên quan cao, cần chỉ lệnh rõ ràng | 6 bình luận, điểm yếu trải nghiệm nhà phát triển | [Liên kết](https://github.com/google-gemini/gemini-cli/issues/21968) |
| **#25164** | [Windows] run_shell_command đầu ra trống | P1 | **Báo động sai nhị phân PTY Windows**: `isBinary()` quá nhạy cảm với byte null, dẫn đến đầu ra shell bị cắt bớt | ✅ **Đã đóng**, cộng đồng đóng góp 2 PR sửa lỗi (#26565, #25191) | [Liên kết](https://github.com/google-gemini/gemini-cli/issues/25164) |
| **#25166** | Sau khi hoàn thành lệnh Shell, bị kẹt "Waiting input" | P1 | **Lỗi máy trạng thái tương tác**: Sau khi thực thi lệnh đơn giản, UI vẫn hiển thị "chờ đầu vào", lệnh thực tế đã hoàn thành | 3👍, tái hiện thường xuyên | [Liên kết](https://github.com/google-gemini/gemini-cli/issues/25166) |
| **#21983** | Đại lý phụ Trình duyệt Wayland thất bại | P1 | **Tương thích Giao thức Hiển thị Linux**: Đại lý phụ trình duyệt bị treo trong phiên Wayland | 4 bình luận, người dùng máy tính để bàn Linux bị chặn | [Liên kết](https://github.com/google-gemini/gemini-cli/issues/21983) |
| **#26525** | Rò rỉ nhật ký Auto Memory và làm mất tác dụng dữ liệu xác định | P2 | **Tuân thủ An ninh và Bảo mật**: Auto Memory chỉ làm mất tác dụng dữ liệu sau khi vào ngữ cảnh mô hình, và phía máy chủ có thể ghi lại dữ liệu kỹ năng | Vấn đề đường biên đỏ về bảo mật, 2 bình luận | [Liên kết](https://github.com/google-gemini/gemini-cli/issues/26525) |
| **#24246** | >128 công cụ kích hoạt lỗi 400 | P2 | **Giới hạn cứng số lượng công cụ**: Lỗi API khi số lượng công cụ vượt quá 128, cần giới hạn phạm vi thông minh | 2 bình luận, chặn các dự án quy mô lớn | [Liên kết](https://github.com/google-gemini/gemini-cli/issues/24246) |

---

## 4. Tiến triển PR Quan trọng (Top 10)

| # | PR | Trạng thái | Nội dung Chức năng/Sửa lỗi | Liên kết |
|:---|:---|:---|:---|:---|
| **#27238** | Thêm gemini-2.5-flash-lite vào chuỗi quay lại mặc định | 🆕 Mở | **Trải nghiệm người dùng cấp miễn phí**: Khi hạn ngạch Pro/Flash hết, người dùng miễn phí có thể quay lại flash-lite, tránh gián đoạn dịch vụ | [Liên kết](https://github.com/google-gemini/gemini-cli/pull/27238) |
| **#27237** | Cụ thể hóa cấu hình seatbelt macOS | 🆕 Mở | **Minh bạch bảo mật**: Chân trang sandbox thay đổi từ "tiến trình hiện tại" chung chung thành hiển thị tên tệp cấu hình seatbelt cụ thể | [Liên kết](https://github.com/google-gemini/gemini-cli/pull/27237) |
| **#27234** | Bảo vệ Injection lộ trình cho tệp lệnh tùy chỉnh | 🆕 Mở | **Tăng cường bảo mật**: Cú pháp `@{...}` được giới hạn nghiêm ngặt trong phạm vi không gian làm việc, ngăn chặn truy cập trái phép tệp cục bộ | [Liên kết](https://github.com/google-gemini/gemini-cli/pull/27234) |
| **#27235** | Vô hiệu hóa cài đặt hostname cho container rootless | 🆕 Mở | **Tương thích Container**: Thêm cấu hình `setHostname`, giải quyết xung đột tham số `--hostname` trong Docker/Podman rootless | [Liên kết](https://github.com/google-gemini/gemini-cli/pull/27235) |
| **#27232** | Đảm bảo thông điệp cuối cùng được xử lý | 🆕 Mở | **Sửa lỗi ngữ cảnh**: Giải quyết vấn đề mất thông điệp cuối cùng trong hàng đợi tin nhắn (Sửa #27231) | [Liên kết](https://github.com/google-gemini/gemini-cli/pull/27232) |
| **#26565** | Sửa lỗi báo động sai PTY Windows `isBinary()` | ✅ Đã đóng | **Sửa lỗi cốt lõi Windows**: Thay đổi phát hiện byte null đơn lẻ thành chế độ đa byte mạnh mẽ hơn, giải quyết đầu ra shell trống | [Liên kết](https://github.com/google-gemini/gemini-cli/pull/26565) |
| **#27073** | Tải mặc định chính sách máy chủ A2A | Mở | **Tính tương đồng bảo mật**: Máy chủ A2A tự động kế thừa các chính sách bảo mật mặc định như chỉ đọc của CLI | [Liên kết](https://github.com/google-gemini/gemini-cli/pull/27073) |
| **#27145** | ESM bundle giữ lại xuất proxy-agent | Mở | **Sửa lỗi proxy mạng**: Ngăn chặn lỗi hàm tạo do `gaxios` tải lười `https-proxy-agent` khi `undefined` | [Liên kết](https://github.com/google-gemini/gemini-cli/pull/27145) |
| **#27050** | Sửa lỗi quy tắc React Hooks + dọn dẹp tác vụ nền | Mở | **Tính ổn định**: Sửa lỗi gọi Hook có điều kiện `AppContainer`, loại bỏ rò rỉ bộ nhớ và lỗi hiển thị | [Liên kết](https://github.com/google-gemini/gemini-cli/pull/27050) |
| **#27228** | Xử lý đúng kiểu mảng có thể null trong công cụ MCP | 🆕 Mở | **Tương thích MCP**: Sửa lỗi tuần tự hóa kiểu mảng có thể null trong các tham số công cụ | [Liên kết](https://github.com/google-gemini/gemini-cli/pull/27228) |

---

## 5. Xu hướng Yêu cầu Chức năng

Dựa trên phân tích 50 Issue hoạt động, các hướng quan tâm của cộng đồng có đặc điểm **"ưu tiên tính ổn định, theo sau là trí tuệ hóa"**:

| Hướng Xu hướng | Issue Đại diện | Mức độ Nóng |
|:---|:---|:---|
| **🔧 Độ tin cậy của Hệ thống Đại lý Phụ** | #21409 (Treo), #22323 (Báo cáo thành công sai), #21968 (Không gọi kỹ năng) | ⭐⭐⭐⭐⭐ |
| **🖥️ Trải nghiệm Nền tảng Windows** | #25164 (Đầu ra trống), #25166 (Chờ đầu vào), #25102 (UTF-8) | ⭐⭐⭐⭐⭐ |
| **🧠 Thông minh Mã/Nhận biết AST** | #22745, #22746, #22747 | ⭐⭐⭐⭐☆ |
| **🔒 Bảo mật và Tuân thủ Quyền riêng tư** | #26525 (Làm mất tác dụng), #27234 (Lộ trình duyệt), #26523 (Cách ly bản vá) | ⭐⭐⭐⭐☆ |
| **🧪 Cơ sở hạ tầng Đánh giá và Chất lượng** | #24353 (Đánh giá thành phần), #23313 (đánh giá lái) | ⭐⭐⭐⭐☆ |
| **🌐 Tương thích Môi trường Trình duyệt/Đồ họa** | #21983 (Wayland), #22267 (Ghi đè cấu hình) | ⭐⭐⭐☆☆ |
| **⚡ Hiệu suất và Hiển thị Terminal** | #21924 (Không nhấp nháy khi thay đổi kích thước), #24935 (làm mới khi thoát trình soạn thảo) | ⭐⭐⭐☆☆ |

> **Phân tích quan trọng**: Chuỗi công cụ nhận biết AST (tilth/glyph/ast-grep) được nhóm liệt kê rõ ràng là lộ trình nâng cấp tiềm năng cho trình điều tra cơ sở mã, có thể thay thế việc đọc tệp thô dựa trên văn bản trong các phiên bản tương lai.

---

## 6. Điểm quan tâm của Nhà phát triển

### 🔴 Điểm yếu Tần suất Cao

| Điểm yếu | Biểu hiện Cụ thể | Phạm vi Ảnh hưởng |
|:---|:---|:---|
| **Hành vi "hộp đen" của Đại lý Phụ** | Treo không có thời gian chờ, giả báo thành công sau MAX_TURNS, không chủ động gọi kỹ năng | Tất cả nhà phát triển sử dụng chế độ Agent |
| **Trải nghiệm Công dân Hạng hai Windows** | Cắt bớt đầu ra PTY, vấn đề mã hóa, thiếu tích hợp clipboard | Nhóm người dùng chính Windows |
| **Trần Số lượng Công cụ** | >128 công cụ lỗi 400 trực tiếp, không có cắt tỉa thông minh | Người dùng kho lưu trữ đơn thể lớn |

### 🟡 Nhu cầu Mới Nổi

- **Đưa Đại lý Cục bộ lên Nền tảng Daemon** (#22741): `Ctrl+B` đưa các đại lý phụ không chặn (như xây dựng, khám phá) vào nền, giải phóng phiên chính
- **Tự nhận thức của Agent** (#21432): Trả lời chính xác các cờ CLI của chính nó, các phím nóng, cách thực thi, trở thành một công cụ "tự tài liệu hóa"
- **Bảo vệ hoạt động phá hoại** (#22672): Cơ chế cảnh báo hoặc xác nhận cho các lệnh nguy hiểm như `git reset --force`

### 🟢 Tín hiệu Tích cực

- **Hoạt động sửa lỗi cộng đồng sôi nổi**: Vấn đề PTY Windows được đóng vòng lặp bởi người đóng góp bên ngoài (#26565, #25191)
- **Phản hồi bảo mật nhanh chóng**: 3 PR liên quan đến bảo mật được cam kết trong một ngày (18/5) (lộ trình trình duyệt, đồng bộ hóa chính sách, làm mất tác dụng nhật ký)
- **Linh hoạt hóa chính sách mô hình**: Chuỗi quay lại flash-lite thể hiện sự quan tâm liên tục đến cấp độ miễn phí

---

*Báo cáo hàng ngày được tạo dựa trên dữ liệu công khai của google-gemini/gemini-cli, các liên kết Issues/PR có thể nhấp trực tiếp để theo dõi tiến trình mới nhất.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# Báo cáo Tình hình Cộng đồng GitHub Copilot CLI Hàng ngày - 2026-05-19

---

## 1. Tóm tắt Hôm nay

Copilot CLI hôm nay phát hành phiên bản ổn định **v1.0.49**, tập trung sửa lỗi chèn ngữ cảnh của hook `postToolUse` (trước đó bị bỏ qua im lặng) và các vấn đề định vị chuột trong ký tự rộng CJK/emoji, đồng thời bổ sung lệnh con `/chronicle search` hỗ trợ tìm kiếm nội dung phiên. Mức độ hoạt động của Issues cộng đồng cực cao, trong số 31 bản cập nhật, quản trị cấu hình MCP, căn chỉnh lựa chọn mô hình và tính nhất quán trạng thái phiên trở thành những điểm yếu được nhà phát triển phản hồi nhiều nhất.

---

## 2. Phát hành Phiên bản

### v1.0.49 (Bản ổn định) | 2026-05-18
🔗 [github/copilot-cli/releases](https://github.com/github/copilot-cli/releases)

| Mục cập nhật | Mô tả |
|--------|------|
| Sửa lỗi hook `postToolUse` | `additionalContext` hiện được chèn vào mô hình dưới dạng thông báo hệ thống, không còn bị bỏ qua im lặng - trực tiếp giải quyết yêu cầu cốt lõi của Issue #2980 |
| Định vị ký tự rộng | Sửa lỗi lệch vị trí con trỏ khi nhấp chuột trong các ký tự CJK, emoji |
| `/chronicle search` | Lệnh con mới, hỗ trợ tìm kiếm nội dung tất cả các phiên, cải thiện khả năng truy xuất lịch sử |

### v1.0.49-6 (Bản xem trước)
Phiên bản xem trước được phát hành đồng thời, dành cho người dùng trải nghiệm sớm kiểm thử các thay đổi trên.

---

## 3. Issues Nóng của Cộng đồng (Chọn lọc 10 mục)

| # | Trạng thái | Tiêu đề | Điểm chính | Phản ứng của Cộng đồng |
|---|:--:|------|---------|---------|
| **#1044** | 🔵 OPEN | [Hỗ trợ lệnh dấu gạch chéo ở chế độ không tương tác](https://github.com/github/copilot-cli/issues/1044) | Frontend ACP (Giao thức Giao tiếp Agent) không thể lấy `available_commands_update`, khiến Custom Agent tích hợp trong IDE như Zed không thể sử dụng lệnh `/` - **Chặn tích hợp trình soạn thảo của bên thứ ba** | 14 bình luận, kéo dài chưa giải quyết, ảnh hưởng đến độ sâu của tích hợp trình soạn thảo |
| **#2204** | 🔵 OPEN | [Thiếu tài liệu cài đặt C# LSP](https://github.com/github/copilot-cli/issues/2204) | Tài liệu chính thức thiếu các giải pháp và hướng dẫn cấu hình được đề xuất cho máy chủ ngôn ngữ C#, chi phí onboarding của nhà phát triển .NET cao | 6 bình luận, 7 👍, đại diện điển hình cho nợ tài liệu |
| **#2695** | 🔵 OPEN | [Lỗi 400 do lựa chọn mô hình tùy chỉnh không khớp](https://github.com/github/copilot-cli/issues/2695) | Agent Copilot Cloud `model:` trường không khớp với lựa chọn mô hình của CLI (bao gồm cả `auto`) sẽ bị treo - "Định tuyến thông minh" ngược lại làm giảm độ tin cậy | 3 bình luận, điểm nghẽn quan trọng cho việc triển khai Agent cấp doanh nghiệp |
| **#2980** | 🔵 OPEN | [Ngữ cảnh hook `postToolUse` bị mất](https://github.com/github/copilot-cli/issues/2980) | `additionalContext` được trả về bởi nhà phát triển plugin không được chèn vào cửa sổ ngữ cảnh Agent - **Phiên bản v1.0.49 chỉ sửa một phần, Issue vẫn Mở cho thấy có thể chưa giải quyết hoàn toàn** | 2 bình luận, 2 👍, điểm yếu cốt lõi của hệ sinh thái plugin |
| **#3380** | 🔵 OPEN | [Thêm cờ `--disable-repo-mcps`](https://github.com/copilot-cli/issues/3380) | Cấu hình MCP cấp kho lưu trữ