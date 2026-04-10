# Cộng đồng Công cụ AI CLI: Bản tin Hàng ngày 2026-04-10

> Thời gian tạo: 2026-04-10 00:13 UTC | Công cụ được đề cập: 8

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

# Báo cáo Phân tích So sánh Ngang Hệ sinh thái Công cụ AI CLI năm 2026-04-10

## 1. Toàn cảnh Hệ sinh thái

Hệ sinh thái công cụ AI CLI hiện tại mang một cấu trúc **"một ông lớn thống trị, nhiều đối thủ mạnh"**: Claude Code dẫn đầu với chức năng cấp doanh nghiệp sâu sắc và hệ sinh thái MCP tiên tiến, nhưng phải đối mặt với áp lực từ mã nguồn mở và tranh cãi về chức năng cảm xúc; OpenAI Codex tái cấu trúc bằng Rust để theo đuổi hiệu suất tối ưu, nhưng gặp khủng hoảng niềm tin từ người dùng doanh nghiệp do thiếu minh bạch về chi phí; Google Gemini CLI đặt cược vào sự đổi mới về nhận thức AST và kiến trúc bộ nhớ thông minh; Các nhà sản xuất Trung Quốc (Kimi, Qwen) đang nhanh chóng bắt kịp, thể hiện lợi thế địa phương hóa trong các tình huống như độ tin cậy xác thực và cộng tác Agent. Xu hướng tổng thể đang chuyển từ "chồng chất chức năng" sang "thông minh chính xác" và "đáng tin cậy cho doanh nghiệp".

---

## 2. So sánh Hoạt động của từng Công cụ

| Công cụ | Issues (24h) | PRs (24h) | Phát hành Phiên bản | Động thái Cốt lõi |
|:---|:---:|:---:|:---|:---|
| **Claude Code** | ~15 vấn đề quan trọng | ~12 PR | v2.1.98 | Bùng nổ phong trào "Bring Back Buddy", hỗ trợ cấp doanh nghiệp Perforce/Vertex AI |
| **OpenAI Codex** | ~12 vấn đề | ~15 PR | rust-v0.119.0-alpha.25~29 | Lặp lại alpha thường xuyên, tranh cãi về phí token tiếp tục |
| **Gemini CLI** | ~10 vấn đề | ~10 PR | v0.37.1 + v0.39.0-nightly | Nhận thức tệp theo thời gian thực, quản lý rò rỉ bộ nhớ, khám phá kiến trúc AST |
| **GitHub Copilot CLI** | ~10 vấn đề | 1 PR | v1.0.22 | Vấn đề lỗ hổng chính sách doanh nghiệp nổi bật, đóng góp cộng đồng trì trệ |
| **Kimi Code CLI** | ~6 vấn đề | **10 PR** | - | **4 PR liên tiếp về hệ thống xác thực**, người đóng góp n-WN hoạt động |
| **OpenCode** | ~12 vấn đề | ~15 PR | v1.4.1 + v1.4.2 | Megathread vấn đề bộ nhớ, cột mốc API máy chủ plugin |
| **Pi** | **44 vấn đề** | **15 PR** | - | **Hoạt động tích cực nhất hôm nay**, hỗ trợ mô hình Gemma 4/Codex mới, API mở rộng dày đặc |
| **Qwen Code** | **47 vấn đề** | **50 PR** | v0.14.2-nightly | **Số lượng PR cao nhất**, chức năng thử nghiệm Agent Team, vấn đề tuân thủ QWEN.md dai dẳng |

> **Lưu ý**: Số lượng Issues/PRs là ước tính dựa trên tóm tắt động thái, phản ánh mức độ hoạt động tương đối.

---

## 3. Hướng chức năng được Quan tâm Chung

| Hướng chức năng | Công cụ liên quan | Yêu cầu cụ thể |
|:---|:---|:---|
| **Quản lý Xác thực và Token** | Kimi, Claude, Codex | Kimi #1819-1822 4 PR giải quyết làm mới OAuth; Claude chuyển đổi tài khoản đa #27302; Codex đặt lại hạn ngạch doanh nghiệp #14329 |
| **Độ ổn định Bộ nhớ và Phiên dài** | OpenCode, Gemini, Pi | OpenCode #20695 Megathread theo dõi chủ động; Gemini #25049 sửa lỗi rò rỉ vòng đời; Pi tràn ngăn xếp/hết thời gian công cụ #2987 |
| **Quản lý Agent/Proxy phụ** | Qwen, Gemini, Claude | Qwen Agent Team thử nghiệm #2886 + kế thừa phê duyệt #3066; Gemini nhận thức proxy phụ #23582; Claude treo proxy song song #45958 |
| **Tương thích Windows/WSL** | Pi, OpenCode, Kimi | Pi sửa lỗi CRLF #2744, WSL clipboard #2469; OpenCode đường dẫn/tín hiệu Windows lặp lại; Kimi làm mới web #1623 |
| **Minh bạch Chi phí** | Codex, Copilot, Claude | Codex #14593 1 tin nhắn tiêu tốn 100% hạn ngạch; Copilot #2591 80-100 yêu cầu Premium mỗi lần; Claude lãng phí 15 triệu token #45958 |
| **Tích hợp IDE/LSP** | Claude, Codex, Qwen, OpenCode | Claude LSP hoàn toàn không hoạt động #15168; Codex VS Code CPU cao #15393; Qwen IDE bị lỗi #3053; OpenCode thích ứng di động #18767 |

---

## 4. Phân tích Định vị Khác biệt

| Công cụ | Trọng tâm chức năng | Người dùng Mục tiêu | Lộ trình Kỹ thuật |
|:---|:---|:---|:---|
| **Claude Code** | Quản trị cấp doanh nghiệp (Perforce, Vertex AI, MDM), hệ sinh thái MCP | Doanh nghiệp lớn, nhóm nhạy cảm về tuân thủ | Nền tảng Node.js, mã nguồn đóng, mở rộng theo plugin |
| **OpenAI Codex** | Hiệu suất tối ưu, Realtime V2, tính nhất quán fork proxy đa | Người dùng tần suất cao, nhà phát triển nhạy cảm về hiệu suất | **Tái cấu trúc hoàn toàn bằng Rust**, theo đuổi hiệu quả tầng dưới |
| **Gemini CLI** | Phân tích mã nhận thức AST, định tuyến bộ nhớ thông minh, trực quan hóa thiết bị đầu cuối | Kịch bản hiểu mã sâu, nhà phát triển ngữ cảnh dài | Công cụ kết xuất React Ink, khám phá kiến trúc tiên phong |
| **GitHub Copilot CLI** | Gốc hệ sinh thái GitHub, kiểm soát chính sách tổ chức | Người dùng doanh nghiệp GitHub, người đăng ký Copilot hiện tại | Mã nguồn đóng, tích hợp sâu với nền tảng GitHub |
| **Kimi Code CLI** | Độ tin cậy xác thực, quản lý phiên, liền mạch Web/CLI | Nhà phát triển Trung Quốc, người dùng thiết bị đa dạng | Lặp lại nhanh chóng, động lực cộng đồng rõ ràng |
| **OpenCode** | Độ sâu hệ thống plugin (API máy chủ), tương thích đa mô hình | Nhà phát triển plugin, người dùng mô hình cục bộ | **Kiến trúc plugin mở nhất**, điểm cuối /tool /status /exec |
| **Pi** | Sự phong phú của API mở rộng, hỗ trợ đa nhà cung cấp, trải nghiệm thiết bị đầu cuối | Nhà phát triển geek, quy trình làm việc tùy chỉnh | Thiết kế ưu tiên mở rộng, thích ứng nhanh với mô hình mới |
| **Qwen Code** | Cộng tác nhóm Agent, tích hợp sâu LSP, địa phương hóa CJK | Nhà phát triển Trung Quốc, người dùng hệ sinh thái Alibaba | Ưu tiên mô hình tự phát triển, đổi mới kiến trúc Agent Team |

---

## 5. Mức độ Phổ biến và Độ trưởng thành của Cộng đồng

### 🔥 Hoạt động cao (Giai đoạn Lặp lại Nhanh)

| Công cụ | Tín hiệu | Đánh giá Độ trưởng thành |
|:---|:---|:---|
| **Pi** | 44 Issues + 15 PRs, API mở rộng dày đặc | ⭐⭐⭐☆☆ Chức năng phong phú nhưng cần củng cố độ ổn định |
| **Qwen Code** | 50 PRs cao nhất, thử nghiệm Agent Team | ⭐⭐⭐☆☆ Đổi mới kiến trúc tích cực, nợ về độ tin cậy QWEN.md |
| **Kimi CLI** | 4 PR chuyên sâu về xác thực, người đóng góp cốt lõi n-WN | ⭐⭐⭐⭐☆ Quản lý xác thực/phiên ổn định, giao diện web cần củng cố |

### 🏢 Giai đoạn Doanh nghiệp Trưởng thành (Ưu tiên Độ sâu Chức năng)

| Công cụ | Tín hiệu | Đánh giá Độ trưởng thành |
|:---|:---|:---|
| **Claude Code** | Chức năng doanh nghiệp dày đặc, nhưng tranh cãi về Buddy bộc lộ sức căng thiết kế cảm xúc | ⭐⭐⭐⭐⭐ Trưởng thành nhất cho doanh nghiệp, áp lực mã nguồn mở tích lũy |
| **OpenAI Codex** | Tái cấu trúc Rust cấp tiến, tranh cãi về chi phí làm tổn thương niềm tin | ⭐⭐⭐⭐☆ Công nghệ tiên tiến, thiếu sót về minh bạch hoạt động |

### ⚠️ Rủi ro Hoạt động

| Công cụ | Tín hiệu | Cảnh báo Rủi ro |
|:---|:---|:---|
| **GitHub Copilot CLI** | Chỉ 1 PR trong 24 giờ, lỗ hổng chính sách doanh nghiệp | ⭐⭐⭐☆☆ Đóng góp cộng đồng cạn kiệt, quá phụ thuộc vào nhóm chính thức |

---

## 6. Tín hiệu Xu hướng Đáng chú ý

| Xu hướng | Bằng chứng | Giá trị Tham khảo cho Nhà phát triển |
|:---|:---|:---|
| **Từ "Agent" đến "Đội ngũ Agent"** | Qwen Agent Team #2886, Claude proxy song song #45958, Codex kế thừa fork #17247-17250 | Sự cộng tác đa agent trở thành tiêu chuẩn kiến trúc tiếp theo, cần chú ý đến thiết kế kế thừa ngữ cảnh và truyền quyền |
| **Nhận thức AST Thay thế Tham lam Văn bản** | Gemini #22745 AST Tool, #24840 Nhận thức tệp thời gian thực | Hiểu mã chuyển từ "đọc nhiều hơn" sang "đọc chính xác hơn", hiệu quả token và điều hướng chính xác trở thành chiến trường mới |
| **Minh bạch chi phí trở thành nền tảng niềm tin** | Codex #14593 501 bình luận, Copilot #2591, Claude lãng phí 15 triệu token | Mua sắm doanh nghiệp sẽ yêu cầu bắt buộc chi tiết tiêu thụ có thể kiểm toán, lựa chọn công cụ cần đánh giá khả năng quan sát chi phí |
| **Hệ sinh thái mở rộng từ "hook" đến "dịch vụ"** | OpenCode #21777 điểm cuối dịch vụ, API mở rộng Pi dày đặc | Kiến trúc plugin đang trải qua quá trình chuyển đổi từ hook sự kiện sang máy chủ đầy đủ, nhà phát triển mở rộng nên ưu tiên các nền tảng có điểm cuối mở |
| **Phản ứng phụ không mong muốn của thiết kế cảm xúc** | Claude "Bring Back Buddy" 253 👍 | Chức năng cá nhân hóa của công cụ AI một khi được thiết lập sẽ tạo ra sự phụ thuộc của người dùng, việc gỡ bỏ cần cực kỳ thận trọng |
| **Áp lực mã nguồn mở từ yêu cầu đến hành động** | Claude #41518 PR mã nguồn mở đảo ngược, #41447 thúc đẩy mã nguồn mở chính thức | Trần nhà niềm tin cộng đồng của các công cụ mã nguồn đóng hiển thị, lựa chọn dài hạn cần cân bằng giữa minh bạch và độ sâu chức năng |

---

> **Đề xuất Quyết định**: Đối với các tình huống cấp doanh nghiệp, hãy ưu tiên độ sâu quản trị của Claude Code, nhưng theo dõi tiến trình mã nguồn mở; Đối với các tình huống nhạy cảm về hiệu suất, hãy chú ý đến việc tái cấu trúc Rust của Codex, nhưng cần thiết lập giám sát chi phí; Đối với các yêu cầu tùy chỉnh mở rộng, hãy đánh giá mức độ mở của API của OpenCode/Pi; Nhà phát triển Trung Quốc có thể tích cực dùng thử tối ưu hóa địa phương hóa của Kimi/Qwen.

---

## Báo cáo Chi tiết từng Công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Điểm Nóng Cộng đồng Claude Code Skills

> Nguồn dữ liệu: [anthropics/skills](https://github.com/anthropics/skills)

# Báo cáo Điểm Nóng Cộng đồng Claude Code Skills (2026-04-10)

---

## 1. Xếp hạng Skills Phổ biến (theo Mức độ Quan tâm của Cộng đồng)

| Hạng | Skill | Mô tả chức năng | Trạng thái | Liên kết |
|:---|:---|:---|:---|:---|
| 1 | **document-typography** | Kiểm soát chất lượng bố cục tài liệu AI, giải quyết các vấn đề bố cục điển hình như xuống dòng ký tự đơn, tiêu đề cô đơn, đánh số sai | 🟡 Mở | [PR #514](https://github.com/anthropics/skills/pull/514) |
| 2 | **skill-quality-analyzer / skill-security-analyzer** | Meta-skill: Tự động đánh giá chất lượng của các Skill khác (điểm 5 chiều về cấu trúc, tài liệu, bảo mật, v.v.) | 🟡 Mở | [PR #83](https://github.com/anthropics/skills/pull/83) |
| 3 | **ODT skill** | Tạo văn bản OpenDocument, điền mẫu và phân tích cú pháp ODT→HTML, tương đương với chức năng DOCX/PDF hiện có | 🟡 Mở | [PR #486](https://github.com/anthropics/skills/pull/486) |
| 4 | **frontend-design** | Phiên bản cải tiến của Skill thiết kế front-end, nâng cao độ rõ ràng của lệnh và khả năng thực thi trong một lượt | 🟡 Mở | [PR #210](https://github.com/anthropics/skills/pull/210) |
| 5 | **testing-patterns** | Hướng dẫn kiểm thử toàn diện: Testing Trophy, Mẫu AAA, Kiểm thử thành phần React, Chiến lược E2E | 🟡 Mở | [PR #723](https://github.com/anthropics/skills/pull/723) |
| 6 | **shodh-memory** | Hệ thống bộ nhớ bền vững giữa các phiên, duy trì ngữ cảnh dài hạn cho AI Agent | 🟡 Mở | [PR #154](https://github.com/anthropics/skills/pull/154) |
| 7 | **record-knowledge** | Giải quyết vấn đề mất ngữ cảnh giữa các phiên Claude Code, hỗ trợ kho kiến thức Markdown để chia sẻ kiến thức nhóm | 🟡 Mở | [PR #521](https://github.com/anthropics/skills/pull/521) |
| 8 | **sensory** | Tự động hóa gốc macOS (AppleScript), thay thế chụp màn hình Computer Use, phân cấp quyền | 🟡 Mở | [PR #806](https://github.com/anthropics/skills/pull/806) |

**Điểm thảo luận nóng**: Các Skill loại tài liệu (typography, ODT) và công cụ meta (quality-analyzer) phản ánh nhu cầu mạnh mẽ của cộng đồng về **tiêu chuẩn hóa chất lượng đầu ra**; các Skill loại bộ nhớ/kiến thức lại chỉ ra **nhược điểm cốt lõi của kiến trúc không trạng thái** của Claude Code.

---

## 2. Xu hướng Nhu cầu Cộng đồng (Tổng hợp từ Issues)

| Hướng | Issue đại diện | Nhu cầu cốt lõi |
|:---|:---|:---|
| **Quản trị cấp doanh nghiệp** | [#412](https://github.com/anthropics/skills/issues/412) Agent Governance | Thực thi chính sách, phát hiện mối đe dọa, xếp hạng tin cậy và theo dõi kiểm toán của hệ thống AI Agent |
| **Cơ chế Chia sẻ Skill** | [#228](https://github.com/anthropics/skills/issues/228) | Chia sẻ trực tiếp Skill trong tổ chức, thay thế quy trình tải xuống-tải lên thủ công phức tạp |
| **Khả năng tương tác Giao thức MCP** | [#16](https://github.com/anthropics/skills/issues/16) | Phơi bày Skills dưới dạng công cụ MCP, tiêu chuẩn hóa API phần mềm AI |
| **Tương thích Bedrock** | [#29](https://github.com/anthropics/skills/issues/29) | Hỗ trợ chạy Skills trong môi trường AWS Bedrock |
| **Ranh giới An toàn Tin cậy** | [#492](https://github.com/anthropics/skills/issues/492) | Kiểm soát rủi ro Skill cộng đồng giả mạo không gian tên `anthropic/` |
| **Chuỗi Công cụ Đánh giá** | [#556](https://github.com/anthropics/skills/issues/556) | Gỡ lỗi và sửa lỗi tỷ lệ kích hoạt Skill `run_eval.py` là 0% |

---

## 3. Skills tiềm năng cao chưa được hợp nhất

| Skill | Giá trị chính | Động thái mới nhất | Liên kết |
|:---|:---|:---|:---|
| **document-typography** | Vấn đề phổ biến ảnh hưởng đến mọi tài liệu Claude tạo, tác giả liên tục cập nhật (hoạt động ngày 13-3) | Giải pháp kỹ thuật đã trưởng thành, chờ đánh giá chính thức | [PR #514](https://github.com/anthropics/skills/pull/514) |
| **ODT skill** | lấp đầy khoảng trống hệ sinh thái LibreOffice/OpenDocument, tạo thành bộ ứng dụng văn phòng hoàn chỉnh cùng với DOCX/PDF hiện có | Cập nhật chi tiết điền mẫu ngày 26-3 | [PR #486](https://github.com/anthropics/skills/pull/486) |
| **testing-patterns** | Hướng dẫn kiểm thử toàn diện cập nhật ngày 30-3, bao gồm phương pháp luận hoàn chỉnh từ đơn vị đến E2E | Đã gửi gần đây, độ hoàn chỉnh tài liệu cao | [PR #723](https://github.com/anthropics/skills/pull/723) |
| **sensory** | Tự động hóa gốc macOS cập nhật ngày 2-4, giải quyết vấn đề chụp màn hình không đáng tin cậy của Computer Use | Thiết kế phân cấp quyền đã được tinh chỉnh | [PR #806](https://github.com/anthropics/skills/pull/806) |
| **record-knowledge** | Trả lời trực tiếp vấn đề Skill bị mất #62, cung cấp tính bền vững kiến thức cấp nhóm | Cập nhật ngày 9-3, kiến trúc đơn giản | [PR #521](https://github.com/anthropics/skills/pull/521) |

---

## 4. Thông tin chi tiết về Hệ sinh thái Skills

> **Nhu cầu cốt lõi**: Cộng đồng đang chuyển từ "mở rộng chức năng" sang "quản trị chất lượng và tính bền vững trạng thái" - vừa yêu cầu đầu ra AI đáp ứng tiêu chuẩn chuyên nghiệp (bố cục, kiểm thử, quy ước tài liệu), vừa cấp bách mong muốn vượt qua giới hạn không trạng thái của Claude Code, đạt được **tích lũy và tái sử dụng kiến thức** giữa các phiên và giữa các nhóm.

---

*Thời điểm dữ liệu: 2026-04-10 | Nguồn: Kho lưu trữ GitHub anthropics/skills*

---

# Claude Code: Bản tin Hàng ngày Cộng đồng | 2026-04-10

## Tổng quan Hôm nay

Claude Code v2.1.98 đã được phát hành, tập trung vào việc tối ưu hóa trải nghiệm triển khai cấp doanh nghiệp, bổ sung trình hướng dẫn cấu hình tương tác Google Vertex AI và hỗ trợ Perforce. Cộng đồng đã bùng nổ phong trào lớn "Bring Back Buddy", việc gỡ bỏ Skill `/buddy` trong v2.1.97 mà không báo trước đã gây ra sự bất mãn mạnh mẽ từ các nhà phát triển, thu được 253 👍 và 75 bình luận chỉ trong một ngày.

---

## Phát hành Phiên bản

### [v2.1.98](https://github.com/anthropics/claude-code/releases/tag/v2.1.98)

| Loại Cập nhật | Nội dung |
|---------|------|
| **Tích hợp Doanh nghiệp** | Thêm trình hướng dẫn cấu hình tương tác Google Vertex AI, bao gồm chứng thực GCP, cấu hình dự án/khu vực, xác minh thông tin xác thực và toàn bộ quy trình cố định mô hình |
| **Kiểm soát Phiên bản** | Thêm biến môi trường `CLAUDE_CODE_PERFORCE_MODE`, mở rộng hỗ trợ kho Perforce |

---

## Điểm nóng Cộng đồng (Issues)

### 🔥 Tranh cãi về Khả năng Mô hình

| Issue | Trạng thái | Dữ liệu chính | Mâu thuẫn Cốt lõi |
|-------|------|---------|---------|
| [#42796](https://github.com/anthropics/claude-code/issues/42796) Khả năng thực hiện các tác vụ kỹ thuật phức tạp giảm sau bản cập nhật tháng 2 | **Đã đóng** | 228 bình luận / 1085 👍 | Cộng đồng nhìn chung cho rằng độ sâu suy luận của mô hình không đủ sau bản cập nhật tháng 2, báo cáo kỹ thuật chi tiết của tác giả stellaraccident (người đóng góp cốt lõi MLIR) đã gây tiếng vang lớn |

### 🗳️ Làn sóng Yêu cầu Chức năng

| Issue | Trạng thái | Dữ liệu chính | Yêu cầu Cộng đồng |
|-------|------|---------|---------|
| [#45596](https://github.com/anthropics/claude-code/issues/45596) **Bring Back Buddy** | Mở | 75 bình luận / 253 👍 | Chức năng người bạn ở thanh trạng thái `/buddy` đã bị gỡ bỏ mà không có thông báo, nhà phát triển yêu cầu khôi phục hoặc giải thích |
| [#27302](https://github.com/anthropics/claude-code/issues/27302) Hỗ trợ tài khoản đa Connector | Mở | 111 bình luận / 145 👍 | Nhu cầu chuyển đổi giữa các tài khoản của cùng một nền tảng, ảnh hưởng đến các tình huống đa người dùng của doanh nghiệp |
| [#36024](https://github.com/anthropics/claude-code/issues/36024) Gmail MCP đa tài khoản | Mở | 8 bình luận / 23 👍 | Hộp thư cá nhân + công việc kết nối đồng thời |

### 🐛 Vấn đề Độ ổn định Cấp Doanh nghiệp

| Issue | Trạng thái | Dữ liệu chính | Ảnh hưởng Kỹ thuật |
|-------|------|---------|---------|
| [#35899](https://github.com/anthropics/claude-code/issues/35899) Khởi động lạnh MCP tác vụ định kỳ thất bại | Mở | 36 bình luận / 31 👍 | Độ tin cậy của quy trình làm việc tự động bị ảnh hưởng trong các tình huống không giám sát |
| [#45897](https://github.com/anthropics/claude-code/issues/45897) MCP proxy từ xa không khả dụng token | Mở | 2 bình luận | Lỗi truy cập công cụ do sự khác biệt giữa trình kích hoạt lập lịch và môi trường CLI cục bộ |
| [#45958](https://github.com/anthropics/claude-code/issues/45958) Proxy song song bị treo im lặng 90 phút | Mở | 2 bình luận | Lãng phí 15 triệu token cache_read, đặt lại ngữ cảnh proxy phụ |

### 🔧 Lỗi Chuỗi Công cụ

| Issue | Trạng thái | Dữ liệu chính | Tình huống Bị chặn |
|-------|------|---------|---------|
| [#15168](https://github.com/anthropics/claude-code/issues/15168) Plugin LSP không thể kết nối máy chủ ngôn ngữ | Mở | 20 bình luận / 13 👍 | Chức năng điều hướng mã cấp IDE hoàn toàn bị vô hiệu hóa |
| [#15148](https://github.com/anthropics/claude-code/issues/15148) cấu hình lspServers của marketplace.json bị bỏ qua | Mở | 15 bình luận / 64 👍 | Plugin chính thức TypeScript/Python/Go không hoạt động sau khi cài đặt |
| [#43713](https://github.com/anthropics/claude-code/issues/43713) Lỗ hổng bỏ qua `autoAllowBashIfSandboxed` | Mở | 7 bình luận / 13 👍 | Lệnh có phần mở rộng shell vẫn yêu cầu cấp phép thủ công, phá vỡ quy trình tự động hóa |

---

## Tiến độ PR Quan trọng

### Phong trào Mã nguồn mở

| PR | Trạng thái | Hành động Cốt lõi |
|----|------|---------|
| [#41518](https://github.com/anthropics/claude-code/pull/41518) Fully Open Source Claude Code | **Mở** | Trích xuất 1906 tệp TS từ bản đồ nguồn, xây dựng phiên bản mã nguồn mở có thể chạy |
| [#41447](https://github.com/anthropics/claude-code/pull/41447) feat: open source claude code ✨ | **Mở** | Liên kết 5 Issue yêu cầu mã nguồn mở dài hạn, thúc đẩy mã nguồn mở chính thức |

### Plugin Bảo mật và Tuân thủ

| PR | Trạng thái | Chức năng |
|----|------|------|
| [#45604](https://github.com/anthropics/claude-code/pull/45604) plugin commit-guard | **Mở** | Hook PreToolUse chặn các tệp nhạy cảm (.env, khóa bí mật, token) khỏi `git add` |
| [#45599](https://github.com/anthropics/claude-code/pull/45599) plugin bash-workdir-guard | **Mở** | Ngăn chặn `cd`/`pushd` vượt quá ranh giới dự án, buộc sử dụng đường dẫn tuyệt đối hoặc tham số công cụ |
| [#45603](https://github.com/anthropics/claude-code/pull/45603) sửa chữa security-guidance | **Mở** | Nhật ký gỡ lỗi di chuyển từ /tmp đến ~/.claude/, sửa lỗi phân tích cú pháp boolean |
| [#45621](https://github.com/anthropics/claude-code/pull/45621) plugin notify-on-complete | **Mở** | Hook Stop thực hiện thông báo hoàn thành tác vụ, giải quyết vấn đề truyền ký tự và tham số UTF-8 |

### Cải tiến Kỹ thuật

| PR | Trạng thái | Cải tiến |
|----|------|------|
| [#45865](https://github.com/anthropics/claude-code/pull/45865) Sửa lỗi nhãn tự động đóng Issue bị mất | **Đã hợp nhất** | Thay thế nhãn PATCH bằng cách thêm, giữ lại siêu dữ liệu phân loại như bug/has repro |
| [#45694](https://github.com/anthropics/claude-code/pull/45694) jq thay thế sed xây dựng JSON | **Mở** | Giải quyết sự cố kiện dữ liệu nhật ký khi tiêu đề Issue chứa ký tự xuống dòng, dấu gạch chéo ngược |
| [#45854](https://github.com/anthropics/claude-code/pull/45854) phân lập phiên ralph-wiggum | **Mở** | Liên kết ID phiên được tạo bởi /ralph-loop, ngăn chặn vòng lặp sai lệch giữa các phiên |
| [#45866](https://github.com/anthropics/claude-code/pull/45866) Mẫu triển khai MDM | **Đã hợp nhất** | Cung cấp các ví dụ triển khai doanh nghiệp cho macOS (Jamf/Profile Cấu hình) và Windows (Intune/PS) |

### Quốc tế hóa

| PR | Trạng thái | Nội dung |
|----|------|------|
| [#45675](https://github.com/anthropics/claude-code/pull/45675) Tài liệu tiếng Trung cho Skill cốt lõi Superpowers | **Mở** | Bản địa hóa tiếng Trung cho 7 tài liệu Skill (brainstorming, writing-plans, execution, v.v.) |

---

## Xu hướng Nhu cầu Chức năng

Dựa trên phân tích 50 Issues đang hoạt động, mức độ ưu tiên của cộng đồng:

```
1. Hỗ trợ đa tài khoản/đa người dùng  ████████████████████  23%  (Connector, Gmail, MCP đa phiên bản)
2. Triển khai & Quản trị Doanh nghiệp      █████████████████░░░  18%  (MDM, quyền hạn bền vững, cài đặt được quản lý)
3. Tích hợp IDE/Trình soạn thảo      ███████████████░░░░░  15%  (LSP, VSCode, Neovim)
4. Tự động hóa/Không giám sát      ████████████░░░░░░░░  12%  (Tác vụ định kỳ, CI/CD, hooks)
5. Khả năng Mô hình & Chi phí       ██████████░░░░░░░░░░  10%  (Chất lượng suy luận, minh bạch phí token)
6. Tối ưu hóa Trải nghiệm Nhà phát triển       ████████░░░░░░░░░░░░   8%  (Tùy chỉnh thanh trạng thái, kiểm soát thông báo thinking)
7. Tương thích Nền tảng          ██████░░░░░░░░░░░░░░   7%  (Độ ổn định Windows, mạng proxy)
8. Bảo mật & Tuân thủ           ████░░░░░░░░░░░░░░░░   5%  (Sandboxing, quản lý thông tin xác thực, kiểm toán)
```

---

## Điểm Quan tâm của Nhà phát triển

### 🔴 Các Điểm Đau Tần suất Cao

| Lĩnh vực Vấn đề | Phản hồi Điển hình | Quy mô Ảnh hưởng |
|--------|---------|---------|
| **Công cụ LSP không hoạt động** | "Đã cài đặt typescript-lsp nhưng trả về Không có máy chủ LSP khả dụng" | Chức năng điều hướng mã cốt lõi bị tê liệt, ảnh hưởng đến việc phát triển các dự án lớn |
| **Trải nghiệm Windows kém** | Nhấp nháy bảng điều khiển, lỗi thời chạy Bun, không hỗ trợ biến môi trường | Rủi ro mất nhà phát triển Windows doanh nghiệp |
| **Phân mảnh hệ thống quyền hạn** | Cấp phép lại quyền truy cập MCP/Bash/tệp cho mỗi phiên mới | Không thể triển khai trong các tình huống tự động hóa |
| **Chi phí không thể đoán trước** | Proxy treo im lặng tiêu tốn 15 triệu token, mô hình đưa ra báo giá đào tạo GPU sai lệch | Khó khăn trong quản lý ngân sách doanh nghiệp |

### 🟡 Yêu cầu Mới nổi

- **Thu hồi thiết kế cảm xúc**: Việc gỡ bỏ chức năng Buddy phơi bày sự phụ thuộc của nhà phát triển vào "sự đồng hành nhân cách hóa" của AI, nhu cầu cảm xúc hiếm gặp xuất hiện trong cộng đồng kỹ thuật
- **Áp lực mã nguồn mở tích lũy**: 2 PR độc lập cố gắng mã nguồn mở đảo ngược, phản ánh mong muốn mạnh mẽ về tính minh bạch và động lực cộng đồng
- **Quy trình làm việc từ xa/hỗn hợp**: Mạng proxy VM Cowork, quản lý vòng đời proxy phụ trở thành nút thắt cổ chai chính cho việc áp dụng cấp doanh nghiệp

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex: Bản tin Hàng ngày Cộng đồng 2026-04-10

## Tổng quan Hôm nay

Vấn đề nổi bật nhất trong cộng đồng Codex hôm nay vẫn là **hạn chế tỷ lệ và tiêu thụ Token bất thường**, người dùng doanh nghiệp Business/Team tiếp tục báo cáo việc đặt lại hạn ngạch bị loại trừ, tiêu thụ 6%-100% hạn ngạch cho một tin nhắn. Đồng thời, nhóm phát triển đang đẩy mạnh lặp lại các phiên bản alpha cốt lõi **Rust v0.119** và nhiều PR cấp kiến trúc cho proxy fork, kế thừa MCP, tích hợp Realtime V2 đang trong giai đoạn xem xét.

---

## Phát hành Phiên bản

| Phiên bản | Mô tả |
|:---|:---|
| `rust-v0.119.0-alpha.25` ~ `alpha.29` | 5 phiên bản alpha lặp lại nhanh chóng, tập trung vào độ ổn định cốt lõi Rust và sửa lỗi lớp proxy mạng |

> Lưu ý: Hiện đang trong giai đoạn lặp lại thường xuyên, người dùng môi trường sản xuất được khuyến nghị chú ý đến việc sửa lỗi biến môi trường proxy trong `alpha.29` (xem PR #17271).

---

## Điểm nóng Cộng đồng (Issues)

| # | Tiêu đề | Trạng thái | Vấn đề Cốt lõi | Phản hồi Cộng đồng |
|:---|:---|:---|:---|:---|
| [#14593](https://github.com/openai/codex/issues/14593) | Đốt token rất nhanh | 🔴 MỞ | **Tiêu thụ Token bất thường** — Người dùng đăng ký Business báo cáo phiên bản tiện ích mở rộng IDE 26.311.21342 có tính phí quá mức nghiêm trọng | **501 bình luận, 191 👍**, người dùng doanh nghiệp gây áp lực tập thể, yêu cầu cơ chế thanh toán minh bạch |
| [#11325](https://github.com/openai/codex/issues/11325) | Lệnh /compact thủ công trong ứng dụng Codex | 🔴 MỞ | Thiếu lệnh nén thủ công `/compact` hiện có trong CLI trong ứng dụng | 44 bình luận, 126 👍, lỗ hổng chức năng dài hạn, ảnh hưởng đến quản lý phiên dài |
| [#14936](https://github.com/openai/codex/issues/14936) | bwrap: Nhắc nhở phê duyệt hiển thị cho gần như mọi lệnh | 🔴 MỞ | Vấn đề lỗi `bwrap` sandbox Linux — gần như mọi lệnh đều kích hoạt lời nhắc phê duyệt | 38 bình luận, ảnh hưởng nghiêm trọng đến sự trôi chảy của CLI, bị gọi là "đánh bại cài đặt Truy cập đầy đủ" |
| [#14329](https://github.com/openai/codex/issues/14329) | Tài khoản Team/Business bị loại trừ có hệ thống khỏi mọi lần đặt lại việc sử dụng | 🔴 MỞ | **Người dùng đăng ký doanh nghiệp bị loại trừ có hệ thống khỏi việc đặt lại hạn ngạch** | 9 bình luận, 10 👍, người dùng nói "tất cả các kênh khác đều đã thất bại" |
| [#15393](https://github.com/openai/codex/issues/15393) | Hiệu suất: Sử dụng CPU cao với tiện ích mở rộng IDE | 🔴 MỞ | Lỗi sử dụng CPU cao của tiện ích mở rộng VS Code quay trở lại | 13 bình luận, 20 👍, người dùng Linux x64 báo cáo quy trình `rg` bị mất kiểm soát |
| [#16759](https://github.com/openai/codex/issues/16759) | Truy cập đầy đủ vẫn hiển thị lời nhắc quyền - đánh bại mục đích | 🔴 MỞ | Cài đặt "Truy cập đầy đủ" không còn hiệu lực, vẫn buộc xác nhận bật lên | 9 bình luận, người dùng kêu gọi chế độ "YOLO" |
| [#16553](https://github.com/openai/codex/issues/16553) | Codex không phản hồi khi khởi động nếu `~/.ssh/config` lớn | 🔴 MỞ | Cấu hình SSH lớn gây ra lỗi khởi động | 7 bình luận, điểm đau tương thích cơ sở hạ tầng |
| [#17192](https://github.com/openai/codex/issues/17192) | Sử dụng hàng tuần 100% trên 1 lời nhắc | 🟢 ĐÃ ĐÓNG | Đặt lại hạn ngạch sau khi một tin nhắn tiêu tốn 100% hạn ngạch | 3 bình luận, đã đóng nhưng các vấn đề tương tự [#17157](https://github.com/openai/codex/issues/17157) vẫn đang được theo dõi |
| [#16889](https://github.com/openai/codex/issues/16889) | Giới hạn sử dụng Codex tiêu tốn nhanh hơn ~10 lần | 🟢 ĐÃ ĐÓNG | 1 tin nhắn ≈ 6% của cửa sổ 5 giờ | 4 bình luận, đã đóng nhưng người dùng đặt câu hỏi về nguyên nhân gốc rễ chưa rõ ràng |
| [#17083](https://github.com/openai/codex/issues/17083) | Lỗi phân bổ bộ nhớ trên Windows | 🔴 MỞ | Lỗi bộ nhớ Windows (mã lỗi 3221226505) | 5 bình luận, vấn đề độ ổn định của tiến trình con proxy |

---

## Tiến độ PR Quan trọng

| # | Tiêu đề | Tác giả | Nội dung Cốt lõi |
|:---|:---|:---|:---|
| [#17271](https://github.com/openai/codex/pull/17271) | fix: khôi phục môi trường proxy tệp cũ sau ảnh chụp nhanh vỏ | viyatb-oai | **Sửa lỗi biến môi trường proxy bị lỗi** — Khôi phục biến proxy được quản lý từ môi trường quy trình thời gian thực, giải quyết đồng bộ hóa thay đổi cổng `GIT_SSH_COMMAND` trên macOS |
| [#17155](https://github.com/openai/codex/pull/17155) | [codex-analytics] thêm sự kiện phân tích nén | rhan-oai | Thêm sự kiện phân tích nén phiên, hỗ trợ khả năng quan sát cho các chế độ nén cục bộ/từ xa/ngầm định |
| [#15981](https://github.com/openai/codex/pull/15981) | fix(permissions): sửa các gốc có thể ghi được liên kết tượng trưng trong sandbox | viyatb-oai | **Sửa lỗi quyền sandbox quan trọng** — Bảo toàn đường dẫn logic liên kết tượng trưng, sửa lỗi che giấu thoát của liên kết tượng trưng lồng nhau |
| [#17266](https://github.com/openai/codex/pull/17266) | Cải thiện hiển thị trạng thái hook | abhinav-oai | Tối ưu hóa hiển thị trạng thái hook — Giảm nhiễu lịch sử, nâng cao khả năng đọc trạng thái hoàn thành |
| [#17264](https://github.com/openai/codex/pull/17264) | Truyền tiến độ Codex Realtime V2 | aibrahim-oai | **Tích hợp Realtime V2** — Truyền tiến độ Codex dưới dạng cập nhật người dùng thời gian thực, định tuyến lệnh công cụ mới làm hướng dẫn tác vụ |
| [#17269](https://github.com/openai/codex/pull/17269) | feat(guardian): chỉ gửi delta bản ghi cho các phản hồi của guardian | owenlin0 | Tối ưu hóa xem xét bảo mật Guardian — Chỉ gửi bản ghi delta, tránh truyền toàn bộ lịch sử lặp lại |
| [#17247](https://github.com/openai/codex/pull/17247) ~ [#17250](https://github.com/openai/codex/pull/17250) | Ngăn xếp kế thừa agent Fork | friel-openai | **Ba PR kiến trúc fork proxy** — Kế thừa cấu hình mô hình proxy cha, khóa bộ đệm lời nhắc, trình quản lý MCP, đảm bảo tính nhất quán của hành vi proxy phân nhánh |
| [#15578](https://github.com/openai/codex/pull/15578) | Thêm hỗ trợ runtime thực thi thống nhất sandbox Windows | iceweasel-oai | **Runtime thực thi thống nhất sandbox Windows** — Hỗ trợ hai chế độ của backend token hạn chế và trình thực thi nâng cao |
| [#17210](https://github.com/openai/codex/pull/17210) | Thêm output_schema vào hiển thị chế độ mã | vivi | Tăng cường hiển thị chế độ mã — Thêm hỗ trợ `output_schema`, giới thiệu kiểu `ToolOrigin` để giải quyết xung đột bí danh kiểu đầu ra MCP |
| [#17260](https://github.com/openai/codex/pull/17260) | fix(guardian): dọn dẹp cấu hình và ngữ cảnh guardian | owenlin0 | Dọn dẹp cấu hình Guardian — Chính sách kế thừa proxy phụ rõ ràng, thu hẹp phạm vi lời nhắc xem xét, loại bỏ quyền truy cập công cụ |

---

## Xu hướng Nhu cầu Chức năng

Dựa trên 50 Issues đang hoạt động hôm nay, tiêu điểm cộng đồng thể hiện các cấp độ sau:

| Mức ưu tiên | Hướng | Yêu cầu Điển hình |
|:---|:---|:---|
| **P0** | **Minh bạch chi phí và hạn chế tỷ lệ** | Người dùng doanh nghiệp yêu cầu cơ chế đặt lại hạn ngạch có thể dự đoán, kiểm toán chi tiết tiêu thụ Token, đảm bảo quyền lợi đăng ký Business |
| **P1** | **Trải nghiệm IDE/Trình soạn thảo** | Tối ưu hóa hiệu suất tiện ích mở rộng VS Code (CPU/bộ nhớ), hỗ trợ đa thiết bị đầu cuối, lệnh `/compact` thủ công, xác nhận bảo mật liên kết ngoài |
| **P2** | **Sandboxing và Kiểm soát Quyền hạn** | Cài đặt "Truy cập đầy đủ" thực sự không cần xác nhận, độ ổn định `bwrap` Linux, tương thích Sandbox Windows |
| **P3** | **Quản lý Proxy và Ngữ cảnh** | Xóa ngữ cảnh trước khi lập kế hoạch, linh hoạt chuyển đổi mô hình, lưu giữ lịch sử phiên dài |
| **P4** | **Thích ứng Cơ sở hạ tầng** | Tương thích cấu hình SSH lớn, nhận dạng thư mục lời nhắc tùy chỉnh, trả lại công cụ chụp màn hình web |

---

## Điểm Quan tâm của Nhà phát triển

### 🔥 Các Điểm Đau Tần suất Cao

1. **Cảm giác "Công dân hạng hai" của Đăng ký Doanh nghiệp**
   Người dùng Team/Business liên tục báo cáo bị loại trừ khỏi việc đặt lại hạn ngạch, ưu đãi tỷ lệ, làm tổn hại niềm tin cộng đồng. Issue #14329, #17157 cho thấy các kênh giao tiếp chính thức không hiệu quả, người dùng buộc phải đòi quyền lợi qua GitHub.

2. **Tiêu thụ Token không thể đoán trước**
   Các trường hợp cực đoan tiêu thụ 6%-100% hạn ngạch cho một tin nhắn (#14593, #17192) thiếu giải thích nguyên nhân gốc rễ, nhà phát triển không thể tối ưu hóa chiến lược sử dụng.

3. **Sự không nhất quán giữa Cài đặt Sandbox và Trải nghiệm**
   "Truy cập đầy đủ" vẫn hiển thị bật lên bắt buộc (#16759), Linux cần xác nhận gần như mọi lệnh (#14936), mâu thuẫn với định vị "đại lý mã hóa tự động".

### 💡 Tiến bộ Cấp Kiến trúc

- **Tính nhất quán của fork proxy**: Chuỗi PR #17247-17250 thiết lập mô hình kế thừa cấu hình proxy phụ, đặt nền tảng cho các tình huống cộng tác đa proxy
- **Tích hợp sâu Realtime V2**: PR #17264 hiện thực hóa truyền tiến độ theo luồng, báo hiệu Codex sẽ mở rộng sang các tình huống cộng tác thời gian thực
- **Tăng cường khả năng quan sát**: Hệ thống sự kiện phân tích ( #17155, #16706, v.v.) cung cấp cơ sở dữ liệu cho khả năng minh bạch chi phí trong tương lai

---

*Bản tin được tạo dựa trên dữ liệu công khai từ github.com/openai/codex*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI: Bản tin Hàng ngày Cộng đồng 2026-04-10

## Tổng quan Hôm nay

Mức độ hoạt động của cộng đồng hôm nay khá cao, **phiên bản ổn định v0.37.1** và **v0.39.0-nightly** cùng ra mắt, công cụ kết xuất Ink đã được nâng cấp lên 6.6.8. Tiến bộ cốt lõi tập trung vào **nhận thức hệ thống tệp thời gian thực** (tệp mới tạo được thêm vào tự động hoàn thành `@` ngay lập tức) và **quản lý rò rỉ bộ nhớ** (làm sạch trình lắng nghe vòng đời), đồng thời **phân tích mã nhận thức AST** trở thành hướng phát triển kiến trúc quan trọng.

---

## Phát hành Phiên bản

### v0.37.1 (Phiên bản ổn định)
Phiên bản vá lỗi, xem nhật ký thay đổi đầy đủ tại [so sánh](https://github.com/google-gemini/gemini-cli/compare/v0.37.0...v0.37.1)

### v0.39.0-nightly.20260409.615e07834 (Bản dựng đêm)
| Thay đổi | Tác giả |
|:---|:---|
| Nâng cấp phiên bản Ink lên 6.6.8 (công cụ kết xuất UI thiết bị đầu cuối) | @jacob314 |
| Bỏ qua thư mục conductor | @JayadityaGit |
| Nhật ký thay đổi v0.38.0-preview.0 | @gemini-cli-robot |

---

## Điểm nóng Cộng đồng (Issues)

| # | Tiêu đề | Trạng thái | Điểm nhấn Cốt lõi |
|:---|:---|:---|:---|
| [#21230](https://github.com/google-gemini/gemini-cli/issues/21230) | **feat: visualize tool và lệnh /visualize** | 🔥 MỞ | **22 bình luận** đứng đầu. Kết xuất biểu đồ Mermaid nội bộ trong thiết bị đầu cuối (biểu đồ luồng, biểu đồ tuần tự, biểu đồ lớp, biểu đồ ER) dưới dạng nghệ thuật ASCII Unicode, lấp đầy khoảng trống trực quan hóa CLI. Cộng đồng có kỳ vọng rất cao. |
| [#11462](https://github.com/google-gemini/gemini-cli/issues/11462) | Kiểm thử hồi quy trực quan các thành phần UI thiết bị đầu cuối | 🔥 MỞ | **12 bình luận**. Các ứng dụng thiết bị đầu cuối thiếu sự đảm bảo nhất quán trực quan trong thời gian dài, đề xuất này trực tiếp giải quyết điểm đau về sự khác biệt kết xuất giữa các nền tảng, PR #20695 đã phản hồi. |
| [#17906](https://github.com/google-gemini/gemini-cli/issues/17906) | Sửa lỗi báo cáo log sai 429 ở chế độ headless | ✅ ĐÃ ĐÓNG | **8 bình luận**. Cảnh báo hạn ngạch đầy trong chế độ YOLO là dương tính giả, thực tế thử lại thành công. Đã sửa, nâng cao độ tin cậy cho các tình huống tự động hóa. |
| [#15503](https://github.com/google-gemini/gemini-cli/issues/15503) | Chủ đề thân thiện với người mù màu GitHub | 🔥 MỞ | Nhu cầu về khả năng tiếp cận, đề xuất bổ sung chủ đề GitHub Dark/Light Colorblind kép, chú ý đến thiết kế hòa nhập. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Đánh giá đọc tệp nhận thức AST và ánh xạ mã** | 🔥 MỞ | **EPIC cấp kiến trúc**. Khám phá việc sử dụng công cụ AST (tilth/glyph) để đọc ranh giới phương thức chính xác, giảm lãng phí token, nâng cao hiệu quả điều hướng mã. |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | Định tuyến bộ nhớ: Cấp độ toàn cục vs dự án | 🔥 MỞ | Lưu trữ phân lớp bộ nhớ thông minh — `~/.gemini/` lưu trữ tùy chọn người dùng, `.gemini/` lưu trữ quy ước dự án. Giải quyết vấn đề ô nhiễm bộ nhớ và tái sử dụng. |
| [#21413](https://github.com/google-gemini/gemini-cli/issues/21413) | Trứng phục sinh trò chơi khủng long trên thiết bị đầu cuối `/dino` | ✅ ĐÃ ĐÓNG | Đề xuất thú vị của cộng đồng, trò chơi nhảy ngang ASCII được triển khai bởi Ink. Đã đóng, hoặc đã được hợp nhất. |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | Hỏi lặp đi lặp lại về quyền truy cập tệp cùng loại | 🔥 MỞ | Điểm đau trải nghiệm người dùng: tùy chọn "Cho phép tất cả các phiên trong tương lai" không hoạt động đôi khi, logic ghi nhớ quyền cần được củng cố. |
| [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) | Proxy phụ nhận thức chế độ phê duyệt | 🔥 MỞ | Các proxy phụ thiếu nhận thức về ràng buộc ở chế độ Plan/Auto-Edit, có xung đột giữa công cụ chính sách và lệnh proxy, cần thống nhất. |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | Vấn đề tập lệnh tạm thời phân tán | 🔥 MỞ | Mô hình tạo nhiều tập lệnh chỉnh sửa sau khi thực thi vỏ, chi phí dọn dẹp cao, cần chuẩn hóa vị trí ghi. |

---

## Tiến bộ PR Quan trọng

| # | Tiêu đề | Trạng thái | Giá trị Kỹ thuật |
|:---|:---|:---|:---|
| [#24840](https://github.com/google-gemini/gemini-cli/pull/24840) | **Phát hiện động các tệp mới tạo để thêm vào tự động hoàn thành @** | 🔥 MỞ | Giải quyết điểm đau cốt lõi của việc proxy tạo tệp sau đó không tìm thấy, làm mới chỉ số tệp theo thời gian thực. |
| [#25049](https://github.com/google-gemini/gemini-cli/pull/25049) | **Sửa lỗi rò rỉ bộ nhớ vòng đời** | 🔥 MỞ | Quản lý các rò rỉ nghiêm trọng như bộ đệm Terminal, cây Fiber React, sửa lỗi độ ổn định phiên dài. |
| [#25077](https://github.com/google-gemini/gemini-cli/pull/25077) | Tối ưu hóa hiệu suất khởi tạo sandbox Windows | 🔥 MỞ | Thao tác quyền ACL được chuyển từ Node.js sang trợ lý C# gốc, loại bỏ chi phí quy trình đa cấp `icacls.exe`. |
| [#25075](https://github.com/google-gemini/gemini-cli/pull/25075) | Chỉ số sử dụng cho tự động hóa đánh giá hành vi | 🔥 MỞ | Tiêm giám sát lượt/token vào bộ đánh giá, hỗ trợ phân tích chi phí và hiệu quả của quy trình làm việc proxy. |
| [#25076](https://github.com/google-gemini/gemini-cli/pull/25076) | Sửa lỗi rò rỉ bộ hẹn giờ `generateIntentSummary` | 🔥 MỞ | Đường dẫn lỗi không dọn dẹp `setTimeout`, kích hoạt `abort()` lỗi thời sau 15 giây, sửa lỗi rò rỉ tài nguyên. |
| [#25072](https://github.com/google-gemini/gemini-cli/pull/25072) | Đánh dấu mô hình yêu thích & chuyển đổi phím tắt tuần hoàn | 🔥 MỞ | Người dùng có thể đánh dấu các mô hình thường dùng, chuyển đổi nhanh bằng bàn phím, phản hồi #20227, nâng cao hiệu quả quy trình làm việc đa mô hình. |
| [#25073](https://github.com/google-gemini/gemini-cli/pull/25073) | Ngừng ngăn chặn suy nghĩ và đầu ra văn bản của mô hình | 🔥 MỞ | Loại bỏ logic ngăn chặn dài cũ, kết hợp với chiến lược lời nhắc mới, cho phép mô hình giao tiếp tự nhiên thông qua `update_topic`. |
| [#24752](https://github.com/google-gemini/gemini-cli/pull/24752) | Tách rời kiến trúc ContextManager và Sidecar | 🔥 MỞ | Tái cấu trúc mô-đun, làm nền tảng cho những cải tiến của loạt #24751, nâng cao khả năng bảo trì mã. |
| [#21231](https://github.com/google-gemini/gemini-cli/pull/21231) | **Thực hiện công cụ visualize và lệnh /visualize** | ✅ ĐÃ ĐÓNG | Thực hiện đầy đủ kết xuất biểu đồ Mermaid trên thiết bị đầu cuối, bao gồm 6 lệnh con, tương ứng với #21230. |
| [#24945](https://github.com/google-gemini/gemini-cli/pull/24945) | Sửa lỗi bộ đếm hàng đợi xác nhận `update_topic` phình to | 🔥 MỞ | Tập trung logic hiển thị công cụ, giải quyết sự không nhất quán của UI "X trong số Y" có tính đến các công cụ nội bộ. |

---

## Xu hướng Nhu cầu Chức năng

```
1. Hiểu mã thông minh  ████████████████████  Phân tích nhận thức AST, đọc phương thức chính xác, ánh xạ mã
2. Nhận thức tệp thời gian thực  ████████████████     Chỉ mục tệp mới ngay lập tức, cập nhật động tự động hoàn thành @
3. Tối ưu hóa trải nghiệm thiết bị đầu cuối  ██████████████       Kiểm thử hồi quy trực quan, hiệu suất cuộn, chủ đề hỗ trợ tiếp cận
4. Bộ nhớ & Ngữ cảnh  ████████████         Phân lớp bộ nhớ toàn cục/dự án, định tuyến bộ nhớ, chính sách bền vững
5. Quản trị cộng tác Agent  ██████████           Nhận thức chế độ proxy phụ, nhất quán quy trình phê duyệt, ghi nhớ quyền
6. Hiệu suất & Độ ổn định  ██████████           Quản lý rò rỉ bộ nhớ, tối ưu hóa sandbox Windows, hỗ trợ phiên dài
```

**Phân tích Xu hướng Chính**: Cộng đồng đang chuyển từ "chức năng phong phú" sang "thông minh chính xác" - nhận thức AST và định tuyến bộ nhớ đại diện cho hướng kiến trúc tiếp theo, trong khi nhận thức thời gian thực hệ thống tệp là bước ngoặt cho trải nghiệm người dùng.

---

## Điểm Quan tâm của Nhà phát triển

| Loại Điểm đau | Phản hồi Điển hình | Issues/PR liên quan |
|:---|:---|:---|
| **Chậm đồng bộ hóa hệ thống tệp** | "Tệp được proxy tạo ra không tìm thấy bằng @, phải khởi động lại" | #24729, #24981, **#24840** |
| **Lỗi kết xuất thiết bị đầu cuối** | Văn bản sai lệch sau SSH, viền đen, lỗi React #185 | #24202, #24915, #24917, #24546 |
| **Ghi nhớ quyền không hoạt động** | Bị hỏi lại về "Cho phép tất cả các phiên trong tương lai" | #24916 |
| **Bộ nhớ & Hiệu suất** | Treo phiên dài, phình bộ nhớ, nhấp nháy cuộn | #24470, #24438, **#25049** |
| **Ngăn chặn đầu ra mô hình quá mức** | Nội dung hợp pháp biến mất khi thực thi công cụ | #25042, **#25073** |
| **Giới hạn số lượng công cụ** | Lỗi 400 khi kích hoạt >128 công cụ | #24246 |

**Đề xuất Hành động Hôm nay**: Chú ý đến tiến trình hợp nhất của #24840 (nhận thức tệp) và #25049 (rò rỉ bộ nhớ), cả hai sẽ cải thiện đáng kể trải nghiệm phát triển hàng ngày.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI: Bản tin Hàng ngày Cộng đồng 2026-04-10

---

## Tổng quan Hôm nay

GitHub Copilot CLI hôm nay đã phát hành **v1.0.22**, tập trung vào việc sửa lỗi tương thích công cụ MCP và hiệu suất kết xuất. Cộng đồng tiếp tục tập trung vào **lỗi bất thường về chính sách truy cập mô hình** (người dùng doanh nghiệp thường xuyên gặp lỗi tải danh sách mô hình) và **vấn đề khả dụng của mô hình Claude 4.5 series**, đồng thời **chặn chính sách máy chủ MCP** trở thành điểm đau mới trong việc triển khai doanh nghiệp.

---

## Phát hành Phiên bản

### v1.0.22 (2026-04-09)
| Mục Cập nhật | Mô tả |
|:---|:---|
| Tương thích Công cụ MCP | Các công cụ MCP không chuẩn Schema hiện được dọn dẹp tự động, thích ứng với tất cả các nhà cung cấp mô hình |
| Xử lý ảnh lớn | Tối ưu hóa khả năng xử lý ảnh lớn của MCP và các công cụ mở rộng |
| Hiệu suất Kết xuất | Trình kết xuất nội tuyến mới được đơn giản hóa, cải thiện tốc độ phản hồi giao diện người dùng |
| Lời nhắc Doanh nghiệp | Hiển thị hướng dẫn liên hệ quản trị viên rõ ràng hơn khi bị giới hạn chính sách tổ chức |

🔗 [Chi tiết Phát hành](https://github.com/github/copilot-cli/releases/tag/v1.0.22)

---

## Điểm nóng Cộng đồng (Issues)

| # | Trạng thái | Tiêu đề | Vấn đề Cốt lõi | Mức độ Phổ biến Cộng đồng |
|:---|:---|:---|:---|:---|
| [#1703](https://github.com/github/copilot-cli/issues/1703) | 🔴 MỞ | Danh sách mô hình CLI và VS Code không nhất quán (ví dụ: Gemini 3.1 Pro) | Mô hình được tổ chức bật nhưng không hiển thị trong CLI, trải nghiệm giữa các client bị chia cắt | 👍 31, bình luận 18 |
| [#2236](https://github.com/github/copilot-cli/issues/2236) | 🟢 ĐÃ ĐÓNG | Máy chủ MCP biến mất khỏi đăng ký tổ chức, báo cáo sai "bị tổ chức vô hiệu hóa" | Lỗi đồng bộ hóa trạng thái cấu hình MCP doanh nghiệp, ảnh hưởng đến quy trình làm việc của nhóm | 👍 67, bình luận 10 |
| [#1081](https://github.com/github/copilot-cli/issues/1081) | 🔴 MỞ | Tất cả lệnh sau khi đăng nhập đều báo lỗi: Không thể liệt kê mô hình | Lỗi tổng hợp mô hình tài khoản doanh nghiệp, chặn sử dụng cơ bản | 👍 8, bình luận 22 |
| [#1595](https://github.com/github/copilot-cli/issues/1595) | 🔴 MỞ | Chính sách chặn truy cập mô hình không liên tục | Hạn ngạch Premium còn lại đủ nhưng chính sách đưa ra phán đoán sai là từ chối truy cập | 👍 8, bình luận 18 |
| [#2597](https://github.com/github/copilot-cli/issues/2597) | 🔴 MỞ | Claude Sonnet 4.5 được liệt kê trong /models nhưng trả về lỗi 400 | Siêu dữ liệu mô hình không đồng bộ với khả dụng thực tế | bình luận 14 |
| [#2421](https://github.com/github/copilot-cli/issues/2421) | 🔴 MỞ | Điều kiện tranh chấp HTTP/2 GOAWAY dẫn đến lỗi thử lại nối tiếp | Lỗi quản lý nhóm kết nối, tiêu tốn ngầm hạn ngạch yêu cầu Premium | 👍 16, bình luận 5 |
| [#2334](https://github.com/github/copilot-cli/issues/2334) | 🔴 MỞ | Yêu cầu khôi phục chế độ no-alt-screen | Chế độ alt-screen làm hỏng trải nghiệm duyệt lịch sử, tìm kiếm thiết bị đầu cuối | 👍 16, bình luận 5 |
| [#2591](https://github.com/github/copilot-cli/issues/2591) | 🔴 MỞ | Một phiên tiêu tốn 80-100 yêu cầu Premium | Tính phí lặp lại cho các bước gọi công cụ/suy nghĩ, chi phí mất kiểm soát | 👍 3, bình luận 6 |
| [#92](https://github.com/github/copilot-cli/issues/92) | 🔴 MỞ | Yêu cầu chế độ /ask (chỉ hỏi đáp không thực thi) | Chế độ Agent bắt buộc hiện tại, không thể xem trước đề xuất một cách an toàn | 👍 8, bình luận 7 |
| [#2082](https://github.com/github/copilot-cli/issues/2082) | 🔴 MỞ | Sao chép Ctrl+Shift+C trên Linux không hoạt động | Xung đột phím tắt, phá vỡ thói quen thao tác thiết bị đầu cuối tiêu chuẩn | 👍 4, bình luận 14 |

---

## Tiến độ PR Quan trọng

> Chỉ **1 PR** được cập nhật trong 24 giờ qua, mức độ hoạt động đóng góp của cộng đồng thấp.

| # | Trạng thái | Tiêu đề | Mô tả |
|:---|:---|:---|:---|
| [#2556](https://github.com/github/copilot-cli/pull/2556) | 🟢 ĐÃ ĐÓNG | Developer skill | Liên quan đến nâng cấp cấp độ kỹ năng (không có mô tả kỹ thuật chi tiết), đã đóng |

**Quan sát**: Phát triển cốt lõi chủ yếu do nhóm chính thức thực hiện, mức độ tham gia của người đóng góp bên ngoài hạn chế.

---

## Xu hướng Nhu cầu Chức năng

Dựa trên phân tích 50 Issues đang hoạt động, tiêu điểm cộng đồng cho thấy **Bốn cụm chính**:

```
┌─────────────────────────────────────────┐
│  1. Hệ sinh thái Mô hình & Quản trị Chính sách (35%)            │
│     • Tích hợp nhanh mô hình mới (Gemini 3.1 Pro,  │
│       Claude 4.5 series)                 │
│     • Đồng bộ hóa chính sách doanh nghiệp & trạng thái khả dụng      │
│     • Tính nhất quán giữa các client (CLI/VS Code)      │
├─────────────────────────────────────────┤
│  2. Độ ổn định Hệ sinh thái MCP (25%)                │
│     • Lỗi phân tích chính sách đăng ký tổ chức             │
│     • Xử lý lỗi 404 & cơ chế hạ cấp             │
│     • Khác biệt hành vi giữa phiên bản phát hành trước & ổn định          │
├─────────────────────────────────────────┤
│  3. Tối ưu hóa Chi phí & Hiệu suất (20%)                │
│     • Minh bạch chi phí Premium request             │
│     • Độ tin cậy nhóm kết nối HTTP/2                │
│     • Hiệu suất kết xuất & chiếm dụng tài nguyên                 │
├─────────────────────────────────────────┤
│  4. Cải thiện Trải nghiệm Tương tác (20%)                  │
│     • Tính linh hoạt của chế độ thiết bị đầu cuối (no-alt-screen)    │
│     • Hỗ trợ tình huống không tương tác/Headless           │
│     • Tính bền vững của cấu hình quyền hạn                     │
└─────────────────────────────────────────┘
```

---

## Điểm Quan tâm của Nhà phát triển

### 🔴 Các Điểm Đau Tần suất Cao

| Loại | Vấn đề Cụ thể | Mức độ Ảnh hưởng |
|:---|:---|:---|
| **Lỗ hổng Chính sách Doanh nghiệp** | Danh sách mô hình được tổ chức bật và danh sách khả dụng thực tế của CLI không khớp nghiêm trọng, không có cách nào để điều tra | Ngăn chặn |
| **Chi phí không minh bạch** | Một yêu cầu phức tạp tiêu tốn hàng chục hạn ngạch Premium, không có chi tiết theo dõi | Chi phí mất kiểm soát |
| **Triển khai MCP dễ vỡ** | Chính sách 404 ngay lập tức vô hiệu hóa toàn bộ nhóm, không có hạ cấp thanh lịch | Rủi ro sản xuất |
| **Trôi nổi Khả năng Mô hình** | Được liệt kê trong /models nghĩa là sẵn sàng sử dụng, thực tế thường xuyên lỗi 400/503 | Sụp đổ niềm tin |

### 🟡 Yêu cầu Trải nghiệm

- **Tách biệt Chế độ**: Quyền lựa chọn giữa chế độ Agent bắt buộc vs chế độ xem trước an toàn (/ask)
- **Tính gốc của Thiết bị đầu cuối**: Tôn trọng quy ước phím tắt Linux, bảo toàn lịch sử cuộn lại
- **Cấu hình là Mã**: Quyền, tùy chọn mô hình hỗ trợ tính bền vững tệp cấu hình

### 💡 Nhu cầu Mới nổi

- **Khả năng Ngắt Agent**: Cơ chế tạm dừng/sửa chữa cho quá trình suy luận dài ([#1028](https://github.com/github/copilot-cli/issues/1028))
- **MCP HTTP Trực tiếp**: Bỏ qua giới hạn STDIO, hỗ trợ dịch vụ MCP từ xa ([#1283](https://github.com/github/copilot-cli/issues/1283))

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI: Bản tin Hàng ngày Cộng đồng 2026-04-10

## Tổng quan Hôm nay

Cộng đồng hôm nay có mức độ hoạt động rất cao, **hệ thống xác thực trở thành tâm điểm** — nhà phát triển n-WN đã liên tục gửi 4 PR để giải quyết có hệ thống các vấn đề làm mới token OAuth và phối hợp đa phiên bản. Đồng thời, **quản lý phiên** và **độ ổn định của giao diện người dùng web** cũng là những điểm đau được người dùng phản hồi thường xuyên, đã có người đóng góp cộng đồng gửi các giải pháp sửa lỗi tương ứng.

---

## Điểm nóng Cộng đồng (Issues)

| # | Tiêu đề | Loại | Phát hiện Cốt lõi |
|---|---|---|---|
| [#1623](https://github.com/MoonshotAI/kimi-cli/issues/1623) | Kimi Web làm mới trang web thường xuyên | 🐛 Lỗi | **Vấn đề độ ổn định chưa được giải quyết trong thời gian dài** ảnh hưởng đến trải nghiệm cốt lõi của người dùng Windows, 5 bình luận cho thấy cộng đồng liên tục quan tâm |
| [#1814](https://github.com/MoonshotAI/kimi-cli/issues/1814) | Yêu cầu truy vấn/khôi phục session tham số CLI | ✨ Cải tiến | **Điểm đau tần suất cao**: Người dùng thường quên thư mục session, cần khôi phục quy trình làm việc nhanh chóng giữa các thư mục |
| [#1808](https://github.com/MoonshotAI/kimi-cli/issues/1808) | Không thể ghi nhớ vĩnh viễn "cấm đẩy GIT tự động" |