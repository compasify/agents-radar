# Báo cáo Tóm tắt Động thái Cộng đồng Công cụ AI CLI Ngày 26-04-2026

> Thời gian tạo: 2026-04-26 00:15 UTC | Công cụ được bao phủ: 8

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

# Báo cáo Phân tích So sánh Ngang Hệ sinh thái Công cụ AI CLI | 2026-04-26

---

## 1. Toàn cảnh Hệ sinh thái

Hệ sinh thái công cụ AI CLI hiện tại mang cấu trúc **"một siêu cường, nhiều đối thủ mạnh, phân hóa theo chiều dọc"**: Claude Code và OpenAI Codex chiếm lĩnh vị trí dẫn đầu nhờ mô hình đăng ký cấp doanh nghiệp, nhưng các tranh cãi về độ ổn định và tính minh bạch của phí vẫn tiếp diễn; các đối thủ như Google Gemini CLI, Kimi CLI, Qwen Code đang bám đuổi với lợi thế **mã nguồn mở linh hoạt + tùy chỉnh địa phương hóa**, liên tục cải tiến hệ sinh thái MCP và khả năng định tuyến đa mô hình. Đồng thời, Pi nhanh chóng mở rộng hệ sinh thái nhà cung cấp với định vị "bộ định tuyến độc lập với mô hình", trong khi OpenCode tập trung vào trải nghiệm thống nhất đa nền tảng. Toàn bộ ngành đang chuyển dịch từ **"cuộc đua tính năng" sang "kỹ thuật độ tin cậy"** — tính xác định của việc thực thi Agent, bảo mật chuỗi cung ứng, và khả năng kiểm soát chi phí trở thành những điểm nhức nhối chung.

---

## 2. So sánh Mức độ Hoạt động của từng Công cụ

| Công cụ | Issues Hôm nay | PRs Hôm nay | Phát hành Phiên bản | Động thái Cốt lõi |
|:---|:---:|:---:|:---|:---|
| **Claude Code** | 10 điểm nóng | 8 | ❌ Không | Lỗi thanh toán HERMES.md, Time out khi Stream idle trở nên tồi tệ hơn, Sự cố an ninh typosquatting |
| **OpenAI Codex** | 12 điểm nóng | 9 | ✅ rust-v0.126.0-alpha.2 | Khủng hoảng tương thích GPT-5.5, Tái cấu trúc kiến trúc PermissionProfile đang gấp rút hoàn thành |
| **Gemini CLI** | 10 điểm nóng | 10 | ✅ v0.40.0-preview.4 | Sửa lỗi khẩn cấp Ctrl+Backspace, Chuẩn hóa đặt tên MCP, Nén cục bộ Ollama |
| **GitHub Copilot CLI** | 11 | 1 | ❌ Không | Vấn đề "đốt tiền" vòng lặp vô hạn của Autopilot tái diễn, Nhu cầu quản trị cấu hình doanh nghiệp |
| **Kimi CLI** | 6 | 5 | ❌ Không | v1.39.0 trở lại với bản vá kép cho Windows, Hỗ trợ git worktree, Đóng góp kiến trúc RalphFlow |
| **OpenCode** | 10 điểm nóng | 10 | ✅ v1.14.25 | Lỗi tắc nghẽn DeepSeek V4 reasoning_content, Tăng tốc cầu nối HttpApi |
| **Pi** | 40 | 18 | ❌ Không | Tranh cãi về cơ chế đóng hàng loạt cuối tuần, Bùng nổ kết nối đa nhà cung cấp DeepSeek/Together/Ark |
| **Qwen Code** | 10 điểm nóng | 37 | ❌ Không | Trình cài đặt macOS, Xác thực OpenRouter, Giao diện người dùng Agent nền đang được xem xét |

> **Xếp hạng mức độ hoạt động** (Tổng hợp Issues + PRs): Pi（58）> Qwen Code（47）> Gemini CLI/OpenCode（20）> Claude Code/Codex/Copilot CLI（~19）> Kimi CLI（11）

---

## 3. Hướng chức năng được Quan tâm Chung

| Hướng chức năng | Công cụ liên quan | Nhu cầu và Dữ liệu cụ thể |
|:---|:---|:---|
| **Sản xuất hóa Hệ sinh thái MCP** | Claude Code, Codex, Gemini CLI, Qwen Code, OpenCode | Giới hạn kết nối (Qwen #3277: giới hạn cứng 2 kết nối), Thiếu xác minh nguồn gốc (Claude #53386), Chuẩn hóa đặt tên (Gemini #25989), Rò rỉ tiến trình zombie (Codex #12491: 1300+ zombie/37GB) |
| **Tính khả thi thanh toán / Chi phí có thể kiểm soát** | Claude Code, Codex, Kimi CLI | Thanh toán bất thường HERMES.md $200 (Claude #53262), Hạn ngạch 5 giờ của GPT-5.5 tiêu thụ hết trong 20 phút (Codex #19571), Lỗi cũng tính phí (Kimi #2059) |
| **Hoàn tác và Khôi phục Trạng thái** | Codex, OpenCode, Pi | Lệnh `/undo` trở lại (Codex #9203: 154👍), Undo không hoàn tác tệp (OpenCode #5474: 21💬), Hủy bỏ ô nhiễm trạng thái `/tree` (Pi #3688) |
| **Định tuyến và Tương thích Đa Mô hình** | Pi, OpenCode, Codex, Qwen Code | Truyền lại `reasoning_content` của DeepSeek V4 (OpenCode #24190: 23💬), Giới hạn ngữ cảnh của GPT-5.5 (Codex #19464: 33💬), Tranh cãi "giảm trí tuệ" của GLM (Qwen #3464), Kết nối DeepSeek/Together/Ark/CrofAI (3 PR của Pi) |
| **Bình đẳng hóa Nền tảng Windows** | Gemini CLI, Kimi CLI, Codex, Pi | Lỗi A:\ đường dẫn (Gemini #25216), Lỗi kép mã hóa/MIME (Kimi #2070/#2074), Chiếm dụng CPU cao (Codex #16231: 60💬), Lỗi phát hiện đường dẫn Bash (Pi #3521: 9💬) |
| **Khả năng Quan sát và Kiểm soát Agent** | Gemini CLI, Qwen Code, OpenCode, Pi | Báo cáo sai trạng thái thành công của proxy con (Gemini #22323), Giao diện người dùng Agent nền (Qwen #3488), Proxy chết lâm sàng (OpenCode #24342), API `runWhenIdle` (Pi #2023) |

---

## 4. Phân tích Định vị Khác biệt

| Công cụ | Trọng tâm Chức năng | Người dùng Mục tiêu | Đặc điểm Lộ trình Kỹ thuật |
|:---|:---|:---|:---|
| **Claude Code** | Hiểu sâu mã nguồn cấp doanh nghiệp, Tích hợp sâu gói Max | Nhà phát triển trung cấp và cao cấp, Nhóm doanh nghiệp | Sản phẩm thương mại đóng, Ràng buộc sâu với API Anthropic; Hệ sinh thái MCP sớm nhưng thiếu xác minh an ninh |
| **OpenAI Codex** | Trải nghiệm gốc IDE, Mô hình tiên tiến GPT-5.5 | Người dùng VS Code, Người đăng ký Pro/Business | Sản phẩm liên minh Microsoft-OpenAI; Tái cấu trúc kiến trúc PermissionProfile cho thấy chiến lược sandbox ngày càng hoàn thiện |
| **Gemini CLI** | Tinh chỉnh tương tác đầu cuối, Tích hợp hệ sinh thái Google | Nhà phát triển Full-stack, Người dùng Google Cloud | Lặp lại nhanh chóng phiên bản xem trước (vá lỗi khẩn cấp preview.4); Phân luồng cục bộ Ollama thể hiện thiết kế ưu tiên quyền riêng tư |
| **GitHub Copilot CLI** | Gốc luồng làm việc GitHub, Tự động hóa Autopilot | Người dùng nặng GitHub, DevOps doanh nghiệp | Gắn liền với hệ thống đăng ký Copilot; Hệ thống quyền và môi trường phát triển từ xa yếu |
| **Kimi CLI** | Tối ưu hóa kịch bản tiếng Trung, Phối hợp đa thiết bị, Quản trị Skill | Nhà phát triển Trung Quốc, Kịch bản tuân thủ của nhóm | Tự phát triển bởi Moonshot AI; Hỗ trợ git worktree, Kiểm soát Skill bắt buộc phản ánh điểm nhức nhối trong luồng công việc của nhóm |
| **OpenCode** | Thống nhất đa nền tảng (Desktop/CLI/Mobile), Hệ sinh thái mở rộng | Người dùng chuyển đổi đa thiết bị, Nhà phát triển mở rộng | Cầu nối HttpApi thúc đẩy thống nhất API; Chi tiết tương tác TUI được cộng đồng thúc đẩy tinh chỉnh |
| **Pi** | **Bộ định tuyến Mô hình** , Trung lập đa nhà cung cấp, API mở rộng | Người thử nghiệm mô hình, Người dùng triển khai cục bộ, Nhà phát triển mở rộng | Mã nguồn mở mạnh mẽ; Lưu lượng cuối tuần với 40 Issues/18 PRs cho thấy động lực cộng đồng cực đoan; Cơ chế `closed-because-weekend` gây tranh cãi về quản trị |
| **Qwen Code** | Gốc Aliyun, Tối ưu hóa sâu mô hình Qwen, Trợ lý IDE | Nhà phát triển Trung Quốc, Người dùng Aliyun, Nhu cầu tự lưu trữ | Mã nguồn mở; Điều khiển Agent nền và tích hợp OpenRouter cho thấy bước nhảy từ "công cụ đơn mô hình" sang "nền tảng hóa" |

**Tín hiệu Phân hóa Quan trọng**:
- **"Phe thương mại đóng"** (Claude/Codex/Copilot) vs **"Phe định tuyến mã nguồn mở"** (Pi/OpenCode/Gemini CLI/Qwen/Kimi)
- **"Ràng buộc sâu đơn đám mây"** vs **"Trung lập mô hình đa đám mây"** — Tích hợp Together/Ark/CrofAI của Pi và hỗ trợ OpenRouter của Qwen tạo ra sự tương phản
- **"Gốc đầu cuối"** (Claude/Codex/Gemini/Pi) vs **"Bao phủ đa nền tảng"** (OpenCode/Kimi/Qwen bao gồm Desktop/Web/Mobile)

---

## 5. Độ nóng và Sự trưởng thành của Cộng đồng

### Ma trận Độ nóng (Dữ liệu hôm nay + Xu hướng dài hạn)

| Công cụ | Độ nóng Cộng đồng | Giai đoạn Lặp lại | Đánh giá Mức độ trưởng thành |
|:---|:---|:---|:---|
| **Pi** | 🔥🔥🔥🔥🔥 Rất cao | Giai đoạn mở rộng nhanh | Chức năng phong phú nhưng quản trị thô sơ (tranh cãi về cơ chế đóng hàng loạt); Thiết kế API mở rộng tiên phong |
| **Qwen Code** | 🔥🔥🔥🔥🔥 Rất cao | Giai đoạn lặp lại nhanh | 37 PRs cho thấy tăng tốc kỹ thuật hóa; Các chức năng quan trọng như trình cài đặt macOS, Agent nền đang đi vào triển khai |
| **Gemini CLI** | 🔥🔥🔥🔥 Cao | Giai đoạn lặp lại ổn định | Nhịp độ phiên bản xem trước trưởng thành; Tinh chỉnh chi tiết MCP (đặt tên, biến môi trường, đầu ra cô đọng) cho thấy sự tinh vi hóa của hệ sinh thái |
| **OpenCode** | 🔥🔥🔥🔥 Cao | Giai đoạn di chuyển kiến trúc | Cầu nối HttpApi thúc đẩy mạnh mẽ; Bản vá v1.14.25 cho thấy phản hồi bảo trì nhanh chóng, nhưng nợ kỹ thuật DeepSeek nổi bật |
| **Claude Code** | 🔥🔥🔥 Trung-cao | Giai đoạn chịu áp lực bảo trì | Time out khi Stream (143💬/128👍) không được khắc phục triệt để trong thời gian dài; Sự cố an ninh (typosquatting) bộc lộ điểm yếu chuỗi cung ứng |
| **OpenAI Codex** | 🔥🔥🔥 Trung-cao | Giai đoạn tái cấu trúc kiến trúc | 6 PRs của PermissionProfile cho thấy việc thanh toán nợ kỹ thuật nội bộ; Ra mắt GPT-5.5 gây ra khủng hoảng tam giác "năng lực - chi phí" |
| **Kimi CLI** | 🔥🔥🔥 Trung bình | Giai đoạn sửa chữa chất lượng | v1.39.0 trở lại với bản vá kép cho Windows cho thấy khoảng trống QA; Đóng góp kiến trúc cộng đồng như RalphFlow nổi bật |
| **GitHub Copilot CLI** | 🔥🔥 Trung-thấp | Giai đoạn trì trệ bảo trì | Chỉ có 1 PR; Chế độ "sửa - quay lại" của vòng lặp vô hạn Autopilot cho thấy phân tích nguyên nhân gốc rễ không đủ |

### Nghịch lý Mức độ Trưởng thành
- **Hoạt động nhiều nhất ≠ Trưởng thành nhất**: Lưu lượng của Pi cao nhất nhưng cơ chế `closed-because-weekend` làm tổn hại lòng tin; Claude Code tương đối "yên tĩnh" nhưng lại tồn đọng các vấn đề dai dẳng như Stream timeout
- **Cửa sổ rủi ro của Lặp lại Nhanh**: Qwen Code (37 PRs), OpenCode (di chuyển HttpApi) đang trong giai đoạn thay đổi kiến trúc, độ ổn định ngắn hạn có thể bị ảnh hưởng

---

## 6. Tín hiệu Xu hướng Đáng chú ý

| Tín hiệu Xu hướng | Hỗ trợ Dữ liệu | Giá trị Tham khảo cho Nhà phát triển |
|:---|:---|:---|
| **🔴 "Mô hình Suy luận" trở thành thước đo khả năng tương thích** | Vấn đề truyền lại `reasoning_content` của DeepSeek V4 đồng thời ảnh hưởng đến OpenCode (#24190 cluster), Pi (#3691), Codex (lỗi nén ngữ cảnh #19558) | Khi lựa chọn, cần xác minh **hỗ trợ đầu cuối** cho luồng `reasoning`/`thinking`, không chỉ ở cấp độ gọi mô hình |
| **🔴 MCP chuyển từ "chức năng" sang "cơ sở hạ tầng tin cậy"** | Typosquatting của Claude (#53393) + Thiếu xác minh nguồn gốc MCP (#53386), Rò rỉ zombie Codex (#12491), Giới hạn kết nối Qwen (#3277) | Trước khi doanh nghiệp áp dụng MCP, cần tự xây dựng cơ chế **quản lý pool kết nối, giám sát tiến trình, ký chuỗi cung ứng**, không nên dựa vào triển khai mặc định của công cụ |
| **🟡 Nhu cầu triển khai cục bộ/riêng tư thúc đẩy đổi mới kiến trúc** | Phân luồng nén Ollama của Gemini (#25915), Giới hạn thời gian chờ 5 phút của Pi (#3715), Tương thích Ollama/vLLM của Qwen cluster (#1280/#1281/#528) | Đối với các kịch bản nhạy cảm, ưu tiên các công cụ hỗ trợ **định tuyến mô hình cục bộ + phân luồng tính toán riêng tư**; Chú ý xem cấu hình như `timeoutMs` có thực sự được truyền đến lớp HTTP hay không |
| **🟡 "Khả năng Quan sát Agent" trở thành chiều cạnh cạnh tranh mới** | Giao diện người dùng Agent nền của Qwen (#3488), Báo cáo sai trạng thái proxy con của Gemini (#22323), Proxy chết lâm sàng của OpenCode (#24342) | Khi đánh giá công cụ, vượt ra ngoài "danh sách tính năng", tập trung kiểm tra khả năng **khôi phục gián đoạn, minh bạch trạng thái, bàn giao thủ công** |
| **🟢 Tính minh bạch thanh toán từ "trải nghiệm" trở thành "ranh giới đỏ tin cậy"** | Tổn thất HERMES.md $200 của Claude, "Hạn ngạch 5 giờ của Codex tiêu thụ hết trong 20 phút", "Lỗi cũng tính phí của Kimi" | Trước khi triển khai trong môi trường sản xuất, cần thiết lập **giám sát sử dụng độc lập** (không hoàn toàn dựa vào thống kê tích hợp của công cụ), đặt ra giới hạn cứng về ngân sách |
| **🟢 Cấu hình dưới dạng mã + Mô tả tự thân của kho lưu trữ** | Cấu hình cấp kho lưu trữ của Copilot MCP (#2528), Kiểm soát Skill bắt buộc của Kimi (#2071), `persistModelSelection` của Pi (#3254) | Đối với các kịch bản nhóm, ưu tiên các công cụ hỗ trợ **cách ly cấu hình cấp độ `.gitignore`, thân thiện với kiểm soát phiên bản, chuyển đổi nhiều tài khoản/dự án** |

---

## Tóm tắt Khuyến nghị Quyết định Nhanh

| Kịch bản | Công cụ Quan tâm Khuyến nghị | Điểm Xác minh Chính |
|:---|:---|:---|
| Hiểu sâu mã nguồn cấp doanh nghiệp | Claude Code / Codex | Giải pháp giảm thiểu time out khi Stream, API kiểm toán sử dụng |
| Chuyển đổi linh hoạt mô hình đa đám mây | Pi / Qwen Code + OpenRouter | Mô hình mục tiêu có trong danh sách hỗ trợ không, khả năng tương thích luồng thinking |
| Ưu tiên cục bộ / Nhạy cảm với quyền riêng tư | Gemini CLI / Pi | Khả năng phân luồng Ollama, Khả năng kiểm soát cấu hình thời gian chờ cục bộ |
| Quản trị & Kiểm soát Skill nhóm | Kimi CLI / OpenCode | Cơ chế kiểm soát như `.kimi/require-skills`, Đồng bộ hóa trạng thái đa thiết bị |
| Phát triển hệ sinh thái mở rộng / plugin | Pi / OpenCode | API vòng đời như `runWhenIdle`, Tiến độ cầu nối HttpApi |
| Môi trường phát triển chính Windows | Tạm dừng Kimi v1.39.0 / Xác minh Gemini preview.4 | Kiểm tra lại các chức năng cơ bản như mã hóa, MIME, xử lý đường dẫn |

---

*Báo cáo dựa trên dữ liệu công khai của cộng đồng của từng công cụ vào ngày 2026-04-26, trạng thái và liên kết tùy thuộc vào kho lưu trữ thực tế.*

---

## Báo cáo Chi tiết Từng Công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Điểm nóng Cộng đồng Claude Code Skills

> Nguồn dữ liệu: [anthropics/skills](https://github.com/anthropics/skills)

# Báo cáo Điểm nóng Cộng đồng Claude Code Skills (Tính đến ngày 26-04-2026)

---

## 1. Xếp hạng Skills Nóng (theo mức độ quan tâm của cộng đồng)

| Xếp hạng | Skill | Trạng thái | Mô tả Chức năng | Điểm nóng Cộng đồng |
|:---|:---|:---|:---|:---|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | 🟡 Mở | Kiểm soát chất lượng bố cục tài liệu do AI tạo: Ngăn ngừa ngắt dòng cô lập, tiêu đề cô đơn, đánh số sai | Được coi là "bản sửa lỗi cơ bản mà mọi tài liệu Claude đều cần", thảo luận tập trung vào cách đạt được quy tắc bố cục mà không làm tăng tiêu thụ token |
| 2 | **[skill-quality-analyzer](https://github.com/anthropics/skills/pull/83) / [skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | 🟡 Mở | Công cụ meta đánh giá chất lượng Skill: Điểm số 5 chiều về cấu trúc tài liệu, bảo mật, khả năng bảo trì | Giá trị meta Skill được công nhận, điểm gây tranh cãi là trọng số điểm có nên tùy chỉnh được không |
| 3 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | 🟡 Mở | Skill thiết kế front-end tái cấu trúc độ rõ ràng: Đảm bảo mỗi chỉ dẫn có thể thực thi trong một vòng hội thoại | Trọng tâm thảo luận: Ranh giới "khả năng hoạt động" của Skill — quá cụ thể đến mức nào là đủ |
| 4 | **[odt](https://github.com/anthropics/skills/pull/486)** | 🟡 Mở | Tạo văn bản OpenDocument, điền mẫu và chuyển đổi ODT↔HTML | Nhu cầu cấp thiết về định dạng mã nguồn mở của doanh nghiệp/chính phủ, quan tâm đến sự trùng lặp chức năng với skill docx hiện có |
| 5 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | 🟡 Mở | Mẫu kiểm thử full-stack: Testing Trophy, kiểm thử thành phần React, E2E, kiểm thử hiệu năng | Bổ sung lĩnh vực kiểm thử được cộng đồng kêu gọi từ lâu, thảo luận tập trung vào việc có nên tách thành nhiều Skill con |
| 6 | **[servicenow](https://github.com/anthropics/skills/pull/568)** | 🟡 Mở | Trợ lý full-stack nền tảng ServiceNow: ITSM/ITOM/SecOps/ITAM/FSM/SPM/CSDM/IntegrationHub | Skill đơn lẻ lớn nhất trên thị trường ITSM doanh nghiệp, quy mô gây ra thảo luận "có nên chia module hóa" |
| 7 | **[sensory](https://github.com/anthropics/skills/pull/806)** | 🟡 Mở | Tự động hóa gốc macOS: Thay thế AppleScript bằng cách chụp màn hình sử dụng máy tính, phân cấp quyền | Cân bằng giữa quyền riêng tư và hiệu quả: Tier 2 yêu cầu quyền Accessibility, đội ngũ an ninh doanh nghiệp quan tâm |
| 8 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | 🟡 Mở | Hệ thống trí nhớ bền vững cho Agent AI: Duy trì ngữ cảnh đa hội thoại, gọi lại ngữ cảnh chủ động | Tranh cãi về thiết kế lớp trí nhớ: Chiến lược kích hoạt khi nào gọi `proactive_context` |

---

## 2. Xu hướng Nhu cầu Cộng đồng (từ Issues)

| Hướng | Issue Đại diện | Cường độ Nhu cầu | Nhu cầu Cốt lõi |
|:---|:---|:---|:---|
| **Quản trị Skill cấp Tổ chức** | [#228](https://github.com/anthropics/skills/issues/228) Chia sẻ tổ chức, [#492](https://github.com/anthropics/skills/issues/492) Ranh giới tin cậy | 🔥🔥🔥🔥🔥 | Người dùng doanh nghiệp từ chối mô hình tự phát "gửi tệp .skill qua Slack", yêu cầu hỗ trợ chính thức cho thư viện org-wide + cách ly không gian tên (phân biệt `anthropic/` chính thức vs cộng đồng) |
| **Cơ sở hạ tầng Chất lượng Skill** | [#202](https://github.com/anthropics/skills/issues/202) Thực tiễn tốt nhất cho skill-creator, [#556](https://github.com/anthropics/skills/issues/556) Tỷ lệ kích hoạt eval là 0 | 🔥🔥🔥🔥🔥 | Từ "có thể chạy" đến "có thể đánh giá": Cần một khung đánh giá hiệu quả Skill tự động, `run_eval.py` hiện tại có vấn đề hệ thống |
| **Tích hợp Danh tính Doanh nghiệp và API** | [#532](https://github.com/anthropics/skills/issues/532) Người dùng SSO không có API Key, [#29](https://github.com/anthropics/skills/issues/29) Tương thích Bedrock | 🔥🔥🔥🔥 | Người dùng SSO/giấy phép được lưu trữ của doanh nghiệp bị loại khỏi vòng lặp tối ưu hóa skill-creator, nhu cầu triển khai đa đám mây (AWS Bedrock) rõ ràng |
| **Tương thích Giao thức MCP** | [#16](https://github.com/anthropics/skills/issues/16) Skills là MCPs | 🔥🔥🔥 | Cộng đồng hy vọng khả năng Skill được hiển thị dưới dạng API tiêu chuẩn hóa thông qua giao thức MCP, để tái sử dụng giữa các Agent |
| **Độ ổn định và Bảo mật Dữ liệu** | [#62](https://github.com/anthropics/skills/issues/62) Skill biến mất, [#406](https://github.com/anthropics/skills/issues/406) Lỗi tải lên 500, [#403](https://github.com/anthropics/skills/issues/403) Lỗi xóa | 🔥🔥🔥🔥 | Khủng hoảng tin cậy trong môi trường sản xuất: Thiếu cơ chế bền vững dữ liệu Skill, quản lý phiên bản, khôi phục lỗi |

---

## 3. Skills tiềm năng cao đang chờ hợp nhất

> Tiêu chuẩn: Trạng thái PR Mở, có giá trị kỹ thuật rõ ràng hoặc lấp đầy khoảng trống hệ sinh thái, dự kiến có thể triển khai trong vòng 1-2 tháng

| Skill | PR | Đánh giá Tiềm năng | Đường dẫn Chính |
|:---|:---|:---|:---|
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | ⭐⭐⭐⭐⭐ | Phổ biến, không phụ thuộc, chỉ cần xác nhận quy tắc kích hoạt không làm tăng gánh nặng prompt hệ thống |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | ⭐⭐⭐⭐⭐ | Kiểm thử là khoảng trống cuối cùng trong vòng lặp tạo mã, cần quyết định: Skill đơn thể vs tách theo framework |
| **odt** | [#486](https://github.com/anthropics/skills/pull/486) | ⭐⭐⭐⭐ | Nhu cầu tuân thủ thị trường chính phủ/EU, cần phối hợp chiến lược định dạng với nhà phát triển skill docx |
| **skill-quality-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | ⭐⭐⭐⭐ | Điểm khởi đầu của hệ sinh thái meta Skill, nhưng cần giải quyết vấn đề đệ quy "ai sẽ đánh giá công cụ đánh giá" |
| **sensory** | [#806](https://github.com/anthropics/skills/pull/806) | ⭐⭐⭐⭐ | Giá trị độc đáo của tự động hóa macOS, quyền Tier 2 cần bổ sung giải thích tuân thủ an ninh doanh nghiệp |
| **xiao** | [#997](https://github.com/anthropics/skills/pull/997) | ⭐⭐⭐ | Kịch bản điều khiển IoT/phần cứng mới, nhưng mẫu thiết bị đơn lẻ (X20+), tính phổ biến cần mở rộng |

---

## 4. Cái nhìn sâu sắc về Hệ sinh thái Skills

> **Nhu cầu cốt lõi: Tiến hóa từ "công cụ hiệu quả cá nhân" thành "cơ sở hạ tầng năng suất có thể quản trị được của doanh nghiệp" — cộng đồng không còn hài lòng với nhiều Skill hơn, mà yêu cầu giải quyết các khoảng trống năng lực cơ bản về tin cậy không gian tên, phân phối cấp tổ chức, hiệu quả có thể đánh giá, và tương thích hệ thống danh tính.**

---

---

# Báo cáo Tóm tắt Động thái Cộng đồng Claude Code Ngày 26-04-2026

---

## 1. Tổng quan Hôm nay

Điểm đáng chú ý nhất trong cộng đồng hôm nay là lỗi kỳ lạ **HERMES.md kích hoạt định tuyến thanh toán bất thường** (#53262) — thông tin commit git chứa một chuỗi ký tự cụ thể lại khiến yêu cầu bỏ qua hạn ngạch gói, tính trực tiếp vào dung lượng bổ sung, khiến người dùng thiệt hại 200 đô la. Đồng thời, sự cố **Stream idle timeout** tiếp tục lan rộng, với nhiều báo cáo trùng lặp mới trong 24 giờ qua, trở thành điểm nhức nhối lớn nhất về độ ổn định gần đây. Về an ninh, cộng đồng lần đầu tiên phơi bày **kho lưu trữ độc hại typosquatting** nhắm vào Claude Code (#53393), làm dấy lên lo ngại về rủi ro chuỗi cung ứng.

---

## 2. Phát hành Phiên bản

**Không có phiên bản mới được phát hành** (không có Releases trong 24 giờ qua)

---

## 3. Issues Nóng trên Cộng đồng

| # | Tiêu đề | Trạng thái | Bình luận | Điểm Cốt lõi |
|---|------|------|------|---------|
| [#53262](https://github.com/anthropics/claude-code/issues/53262) | HERMES.md trong tin nhắn commit git khiến yêu cầu được định tuyến đến thanh toán dung lượng bổ sung thay vì hạn ngạch gói | 🔴 ĐÃ ĐÓNG | 4 | **Lỗi Thanh toán Kỳ lạ**: Khi lịch sử commit kho lưu trữ chứa chuỗi `HERMES.md`, yêu cầu API bị định tuyến sai đến thanh toán "dung lượng bổ sung" thay vì hạn ngạch gói Max. Người dùng do đó thiệt hại 200 đô la, cơ chế kích hoạt không rõ ràng, đã nhanh chóng đóng nhưng ảnh hưởng nghiêm trọng |
| [#46987](https://github.com/anthropics/claude-code/issues/46987) | Lỗi API: Time out khi Stream idle - nhận được phản hồi một phần - nhiều lần hôm nay | 🟢 ĐANG MỞ | 143 | **Kẻ thù số một về độ ổn định**: Vấn đề time out khi stream idle tiếp tục trở nên tồi tệ hơn, với 143 bình luận, 128 👍 cho thấy người dùng bị ảnh hưởng trên diện rộng, sự kết hợp macOS + Anthropic API là khu vực bị ảnh hưởng nặng nề nhất, chính thức vẫn chưa đưa ra giải pháp khắc phục gốc rễ |
| [#53390](https://github.com/anthropics/claude-code/issues/53390) | Lỗi API liên tục: Time out khi Stream idle - nhận được phản hồi một phần | 🟢 ĐANG MỞ | 2 | Báo cáo lặp lại của #46987, chứng tỏ vấn đề vẫn đang lan rộng, người dùng nền tảng web cũng bắt đầu gặp phải |
| [#53393](https://github.com/anthropics/claude-code/issues/53393) | Cảnh báo an ninh — kho lưu trữ typosquatting độc hại Claude Code: github.com/Enxs969/skiller chứa Trojan:Win64/Lazy.PGPK!MTB | 🟢 ĐANG MỞ | 1 | **Cảnh báo An ninh Chuỗi Cung ứng**: Kho lưu trữ độc hại giả mạo tên để lừa người dùng tải xuống, chứa trojan Win64 tích hợp. Lần đầu tiên phơi bày trên cộng đồng về thiếu xác minh chuỗi cung ứng của hệ sinh thái plugin Claude Code |
| [#27302](https://github.com/anthropics/claude-code/issues/27302) | Hỗ trợ nhiều tài khoản Connector (cùng connector, tài khoản khác nhau) trong Claude và Claude Code trên web | 🟢 ĐANG MỞ | 141 | **Nhu cầu cấp doanh nghiệp**: Yêu cầu chuyển đổi đa tài khoản rất cao (196 👍), liên quan đến thiết kế cách ly tài khoản của kiến trúc MCP/Connector, ảnh hưởng trực tiếp đến kịch bản hợp tác nhóm |
| [#36151](https://github.com/anthropics/claude-code/issues/36151) | Chuyển đổi đa tài khoản trong ứng dụng Claude Mobile mà không cần email chia sẻ | 🟢 ĐANG MỞ | 46 | Nhu cầu đa tài khoản trên di động (147 👍), tạo sự hưởng ứng trên đa nền tảng với #27302, cho thấy hệ thống tài khoản là điểm yếu chung của tất cả các sản phẩm |
| [#53386](https://github.com/anthropics/claude-code/issues/53386) | Máy chủ MCP không có xác minh nguồn gốc — rủi ro chuỗi cung ứng | 🟢 ĐANG MỞ | 2 | **Lỗ hổng kiến trúc an ninh**: Máy chủ MCP chỉ xác định bằng tên, không có cơ chế xác minh nguồn gốc, kiểm tra tính toàn vẹn, nhận thông tin xác thực người dùng nhưng lại ở trạng thái "trần trụi" về độ tin cậy, tạo thành chuỗi nhân quả với #53393 |
| [#46621](https://github.com/anthropics/claude-code/issues/46621) | Quan trọng: Claude Code lặng lẽ xóa lịch sử hội thoại mà không có sự đồng ý của người dùng | 🟢 ĐANG MỞ | 2 | **Bảo mật dữ liệu**: Tệp hội thoại `.jsonl` bị xóa tự động lặng lẽ, không có tùy chọn cấu hình, không thông báo, không thể đảo ngược, người dùng chỉ phát hiện mất dữ liệu khi cố gắng truy vấn lại |
| [#53394](https://github.com/anthropics/claude-code/issues/53394) | Kết xuất TUI: thay đổi kích thước cửa sổ gây trùng lặp đầu ra, tua lại gây đóng băng (yêu cầu tắt tiến trình) | 🟢 ĐANG MỞ | 1 | **Trải nghiệm đầu cuối**: Thay đổi kích thước cửa sổ gây trùng lặp đầu ra, chức năng tua lại bị kẹt cần tắt tiến trình cưỡng bức, độ ổn định TUI trong các phiên dài đáng lo ngại |
| [#3473](https://github.com/anthropics/claude-code/issues/3473) | Yêu cầu Chức năng: Khả năng thay đổi thư mục làm việc trong phiên Claude | 🟢 ĐANG MỞ | 21 | **Linh hoạt Luồng công việc**: Nhu cầu thay đổi thư mục làm việc trong phiên (59 👍), phản ánh kịch bản thực tế người dùng muốn quản lý nhiều dự án bằng một phiên bản, hiện tại phải thoát và vào lại |

---

## 4. Tiến độ PR Quan trọng

| # | Tiêu đề | Trạng thái | Nội dung Chức năng/Sửa lỗi |
|---|------|------|--------------|
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | feat: open source claude code ✨ | 🟢 ĐANG MỞ | **PR mang tính biểu tượng**: Tuyên bố mã nguồn mở Claude Code, đóng các yêu cầu dài hạn như #59, #456, #2846, #22002, #41434. Tuy nhiên, cần lưu ý: tác giả là thành viên cộng đồng `gameroman`, không phải tài khoản chính thức của Anthropic, triển vọng hợp nhất thực tế còn bỏ ngỏ |
| [#53204](https://github.com/anthropics/claude-code/pull/53204) | feat: add sql_injection and hardcoded_secret patterns to security-guidance | 🟢 ĐANG MỞ | Tăng cường plugin an ninh: Bổ sung hai loại mẫu kiểm tra là injection SQL (phát hiện nối chuỗi/chuỗi f) và khóa cứng bí mật, thư viện quy tắc mở rộng từ 9 lên 11 |
| [#53203](https://github.com/anthropics/claude-code/pull/53203) | docs: add README.md for security-guidance plugin | 🟢 ĐANG MỞ | Bổ sung nợ tài liệu: Thêm tài liệu đầy đủ cho plugin duy nhất không có README trong thư mục `/plugins` là security-guidance, bao gồm mô tả cơ chế hook PreToolUse |
| [#40458](https://github.com/anthropics/claude-code/pull/40458) | fix: normalize Europe/Kiev to Europe/Kyiv | 🟢 ĐANG MỞ | Sửa lỗi nhạy cảm chính trị múi giờ: Ánh xạ bí danh IANA cũ `Europe/Kiev` sang tên chuẩn `Europe/Kyiv` (đổi tên tzdata 2022b của IANA), giải quyết vấn đề tương thích hệ thống cũ |
| [#46024](https://github.com/anthropics/claude-code/pull/46024) | docs: document --exclude-dynamic-system-prompt-sections in README | 🟢 ĐANG MỞ | Tài liệu hóa tối ưu hóa bộ nhớ đệm prompt: Ghi lại cờ `--exclude-dynamic-system-prompt-sections`, di chuyển các phần động liên quan đến máy từ prompt hệ thống sang tin nhắn người dùng đầu tiên để tăng tỷ lệ tái sử dụng bộ nhớ đệm |
| [#46025](https://github.com/anthropics/claude-code/pull/46025) | docs: add Linux subprocess isolation and CLAUDE_CODE_SCRIPT_CAPS docs | 🟢 ĐANG MỞ | Tài liệu tăng cường an ninh: Bổ sung ví dụ về cách ly không gian tên PID Linux, biến môi trường `CLAUDE_CODE_SCRIPT_CAPS` và cấu hình `settings-subprocess-hardening.json` |
| [#47532](https://github.com/anthropics/claude-code/pull/47532) | Rename marketplace for AgentNXT deployment | 🔴 ĐÃ ĐÓNG | Đã đóng, nội dung thay đổi cụ thể chưa được tiết lộ, có vẻ là điều chỉnh thương hiệu hoặc kiến trúc triển khai |
| [#53354](https://github.com/anthropics/claude-code/pull/53354) | Add files via upload | 🟢 ĐANG MỞ | PR bất thường: Chỉ tải lên tệp đính kèm `knowledge_compiler_scaffold (1).zip`, không có mô tả thay đổi mã, có vẻ là thao tác nhầm hoặc commit rác |

---

## 5. Xu hướng Yêu cầu Chức năng

Dựa trên phân tích 50 Issues đang hoạt động hôm nay, trọng tâm cộng đồng thể hiện **năm hướng chính**:

| Hướng Xu hướng | Issue Đại diện | Tín hiệu Độ nóng |
|---------|-----------|---------|
| **Hệ thống Tài khoản và Hạn ngạch Tái cấu trúc** | #27302, #36151, #27915, #52679 | Chuyển đổi đa tài khoản (343 👍 tổng cộng), Trực quan hóa hạn ngạch, Quản lý sử dụng cấp doanh nghiệp |
| **Độ ổn định và Độ tin cậy** | #46987, #53390, #16970, #46621 | Hiện tượng time out khi stream lan tràn, Mất lịch sử, Xóa dữ liệu lặng lẽ |
| **An ninh và Tin cậy Chuỗi Cung ứng** | #53386, #53393, #53204 | Thiếu xác minh nguồn gốc MCP, Kho lưu trữ giả mạo độc hại, Mở rộng quy tắc kiểm tra an ninh |
| **Linh hoạt Luồng công việc** | #3473, #12748, #45732 | Thay đổi thư mục, Hỗ trợ git worktree, Phục hồi chức năng /buddy |
| **Minh bạch và Công bằng Thanh toán** | #53262, #53378, #53379 | Định tuyến thanh toán bất thường, Tăng dung lượng lặng lẽ nền, Độ tin cậy của thống kê sử dụng |

---

## 6. Điểm Quan tâm của Nhà phát triển

### 🔴 Điểm nhức nhối Tần suất Cao

1. **Khủng hoảng Độ ổn định API** : Time out khi Stream idle (#46987) đã từ lỗi ngẫu nhiên trở thành suy giảm dịch vụ liên tục, ảnh hưởng đến nhóm người dùng chính trên macOS, 143 bình luận chứa đầy sự thất vọng vì gián đoạn luồng công việc
2. **Hộp đen Thanh toán** : Thanh toán bất thường do HERMES.md kích hoạt (#53262) bộc lộ tính dễ vỡ của logic định tuyến thanh toán, kết hợp với việc tăng dung lượng nền lặng lẽ (#53378), người dùng đặt câu hỏi căn bản về khả năng kiểm soát chi phí
3. **Thiếu chủ quyền Dữ liệu** : Xóa lịch sử hội thoại tự động (#46621) không có công tắc cấu hình, hoàn toàn xung đột với kỳ vọng sản phẩm "Trợ lý mã hóa AI nên giữ ngữ cảnh đầy đủ"

### 🟡 Yêu cầu Cấp Kiến trúc

4. **Khoảng trống Cơ sở hạ tầng An ninh MCP** : Xác thực danh tính máy chủ, ký mã, cơ chế truy xuất nguồn gốc chuỗi cung ứng hoàn toàn thiếu sót (#53386), sau sự cố kho lưu trữ độc hại công khai đầu tiên (#53393) đã từ "nice-to-have" trở thành "must-have"
5. **Phân mảnh Tài khoản Đa nền tảng** : Hệ thống tài khoản của Web/CLI/Desktop/Mobile không tương thích lẫn nhau, nhu cầu cách ly đa tài khoản của cùng một Connector trong kịch bản doanh nghiệp (#27302) bị cản trở

### 🟢 Tối ưu hóa Trải nghiệm

6. **Chi tiết Kỹ thuật Đầu cuối** : Lỗi hiển thị TUI khi thay đổi kích thước cửa sổ (#53394), quản lý bộ nhớ phiên dài, tính linh hoạt thay đổi thư mục (#3473) — những "lỗi nhỏ" tích lũy thành hao tổn năng suất

---

*Báo cáo hàng ngày dựa trên dữ liệu công khai trên GitHub, không đại diện cho lập trường chính thức của Anthropic.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Báo cáo Tóm tắt Động thái Cộng đồng OpenAI Codex Ngày 26-04-2026

---

## 1. Tổng quan Hôm nay

Cộng đồng Codex hôm nay sôi nổi xoay quanh hai trục chính: **tương thích mô hình GPT-5.5 và tái cấu trúc hệ thống quyền**. Sau khi GPT-5.5 ra mắt, hàng loạt phản hồi về giới hạn ngữ cảnh, tiêu thụ tốc độ quá nhanh đã xuất hiện; đồng thời, quá trình di chuyển hệ thống quyền `PermissionProfile` do bolinfest dẫn đầu đang đi vào giai đoạn hoàn thiện dày đặc, với 6 PR liên quan được thúc đẩy thay thế kiến trúc cốt lõi trong một ngày. CLI Rust phát hành phiên bản thử nghiệm `v0.126.0-alpha.2`.

---

## 2. Phát hành Phiên bản

| Phiên bản | Loại | Mô tả |
|:---|:---|:---|
| [rust-v0.126.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.2) | Trước khi phát hành | Phiên bản thử nghiệm của CLI Rust, chi tiết thay đổi cụ thể sẽ được bổ sung trong Ghi chú Phát hành chính thức |

---

## 3. Issues Nóng trên Cộng đồng

### 🔥 Các vấn đề dài hạn có độ nóng cao

| # | Issue | Điểm Cốt lõi | Phản hồi Cộng đồng |
|:---|:---|:---|:---|
| [#10450](https://github.com/openai/codex/issues/10450) | **Phát triển Từ xa trong Ứng dụng Codex Desktop** | Thiếu chức năng phát triển từ xa trên phiên bản desktop, khoảng cách lớn với trải nghiệm VS Code Remote-SSH, là rào cản quan trọng cho việc áp dụng cấp doanh nghiệp | **167 bình luận / 604 👍**, hoạt động cao liên tục trong 3 tháng, nhu cầu mạnh mẽ từ người dùng doanh nghiệp |
| [#9203](https://github.com/openai/codex/issues/9203) | **Vui lòng khôi phục lệnh `/undo`** | Không có cơ chế hoàn tác khi xóa nhầm tệp không theo dõi, sửa đổi nhầm tệp chưa commit, là điểm nhức nhối thường xuyên của người dùng CLI | **29 bình luận / 154 👍**, yêu cầu phục hồi chức năng |
| [#11626](https://github.com/openai/codex/issues/11626) | **Khôi phục điểm kiểm tra `/rewind` của CLI** | `Esc` hiện tại chỉ hoàn tác trạng thái hội thoại, không hoàn tác thay đổi mã, cần hoàn tác nguyên tử | **12 bình luận / 92 👍**, nhu cầu bổ sung cho yêu cầu `/undo` |

### 🆕 Phản hồi liên quan đến GPT-5.5 (Khu vực tập trung mới)

| # | Issue | Điểm Cốt lõi | Phản hồi Cộng đồng |
|:---|:---|:---|:---|
| [#19464](https://github.com/openai/codex/issues/19464) | **Hỗ trợ ngữ cảnh 1M Token của GPT-5.5** | Tài liệu chính thức nói 400K, nhưng phiên bản API hỗ trợ 1M, phía Codex có giới hạn nhân tạo | **33 bình luận / 29 👍**, năng lực mô hình chưa được phát huy đầy đủ |
| [#19215](https://github.com/openai/codex/issues/19215) | **Tỷ lệ giới hạn GPT-5.5 bị kích hoạt quá sớm** | Lượng sử dụng thực tế thấp hơn hạn ngạch nhưng đã bị giới hạn tốc độ | **8 bình luận**, phản hồi từ người dùng đăng ký Business |
| [#19558](https://github.com/openai/codex/issues/19558) | **Nén ngữ cảnh từ xa của GPT-5.5 bị lỗi dẫn đến luồng bị hỏng** | Sau khi nén tự động lỗi, luồng vĩnh viễn không khả dụng, chỉ có thể tạo mới | **5 bình luận / 2 👍**, vấn đề nghiêm trọng về khả năng sử dụng |
| [#19585](https://github.com/openai/codex/issues/19585) | **Hạn ngạch hàng tuần của người dùng Pro bị tiêu thụ nhanh bất thường dưới GPT-5.5** | Hạn ngạch hàng tuần tiêu thụ hết ngay cả khi sử dụng nhẹ, kết hợp với sự bất ổn của nén ngữ cảnh làm tăng tiêu thụ | **4 bình luận**, phản hồi nhạy cảm về chi phí đăng ký Pro 200 đô la |
| [#19571](https://github.com/openai/codex/issues/19571) | **Hạn ngạch 5 giờ của Pro bị tiêu thụ hết trong 20 phút** | Chế độ `gpt-5.5-high-fast` tiêu thụ hạn ngạch bất thường | **4 bình luận / 1 👍**, tính minh bạch thanh toán bị nghi ngờ |

### 🐛 Lỗi Quan trọng về Nền tảng/Hiệu năng

| # | Issue | Điểm Cốt lõi | Phản hồi Cộng đồng |
|:---|:---|:---|:---|
| [#16231](https://github.com/openai/codex/issues/16231) | **Chiếm dụng CPU quá cao sau khi cập nhật macOS (M5 Pro)** | Phiên bản tiện ích mở rộng VS Code 26.325.31654 quay lại, thiết bị Apple Silicon nóng nghiêm trọng | **60 bình luận / 58 👍**, ảnh hưởng môi trường sản xuất |
| [#12491](https://github.com/openai/codex/issues/12491) | **Rò rỉ tiến trình zombie của tiến trình con MCP (1300+ zombie / 37GB bộ nhớ)** | Nhiệm vụ GUI của Codex.app không thu hồi tiến trình con MCP sau khi hoàn thành, thảm họa bộ nhớ quy mô lớn | **17 bình luận / 3 👍**, ranh giới đỏ về độ ổn định cấp doanh nghiệp |
| [#19181](https://github.com/openai/codex/issues/19181) | **Màn hình trắng nhấp nháy với tiện ích mở rộng VS Code mới nhất** | Phiên bản 26.5422.20832 trên Windows gặp lỗi UI nghiêm trọng | **8 bình luận / 3 👍**, ngay sau khi phát hành đã nhận phản hồi chặn |

---

## 4. Tiến độ PR Quan trọng

### 🔐 Tái cấu trúc Hệ thống Quyền (do bolinfest dẫn đầu, thay đổi cấp kiến trúc)

| # | PR | Nội dung Chức năng/Sửa lỗi | Trạng thái |
|---|---|---|---|
| [#19606](https://github.com/openai/codex/pull/19606) | **permissions: make runtime config profile-backed** | Cấu hình thời gian chạy hoàn toàn di chuyển sang `PermissionProfile`, thay thế `SandboxPolicy` cũ; Do lỗi hợp nhất nhánh GitHub, PR được gửi lại | **Mở** |
| [#19395](https://github.com/openai/codex/pull/19395) | **permissions: finish profile-backed app surfaces** | Giao diện người dùng và giao diện ứng dụng ngừng hiển thị hình chiếu sandbox cũ, trạng thái `External`/`Disabled` được phân biệt chính xác | **Mở** |
| [#19393](https://github.com/openai/codex/pull/19393) | **permissions: migrate approval and sandbox consumers to profiles** | Người dùng phê duyệt và sandbox được di chuyển sang profiles, loại bỏ sự sụp đổ ngữ nghĩa của `Disabled`/`External` | **Mở** |
| [#19394](https://github.com/openai/codex/pull/19394) | **permissions: remove core legacy policy round trips** | Loại bỏ chuyển đổi không mất mát của Profile→SandboxPolicy→Profile trong đường dẫn cốt lõi, giữ lại ngữ nghĩa split filesystem | **Mở** |
| [#19392](https://github.com/openai/codex/pull/19392) | **permissions: derive compatibility policies from profiles** | Chính sách tương thích được suy ra từ Profiles, loại bỏ rủi ro trôi dạt của bộ nhớ đệm và cấu hình thực tế | **Mở** |

### ⚡ Chức năng và Sửa lỗi

| # | PR | Nội dung Chức năng/Sửa lỗi | Trạng thái |
|---|---|---|---|
| [#19610](https://github.com/openai/codex/pull/19610) | **Support `end_turn` in `response.completed`** | API phản hồi hỗ trợ tín hiệu kết thúc vòng rõ ràng từ mô hình, tối ưu hóa vòng lặp suy luận đa vòng | **Mở** |
| [#19184](https://github.com/openai/codex/pull/19184) | **fix: handle deferred network proxy denials** | Sửa lỗi điều kiện tranh chấp khi yêu cầu mạng bị từ chối trong kịch bản phê duyệt tự động của Guardian, sau đó lệnh đã được khởi chạy | **Mở** |
| [#19458](https://github.com/openai/codex/pull/19458) | **ChatGPT Library file upload/download hooks** | Hỗ trợ tải tệp lên thư viện ChatGPT, truyền `library_file_id` vào tham số công cụ MCP | **Mở** |
| [#19537](https://github.com/openai/codex/pull/19537) | **[mcp] Save Plugin MCP policies to config.toml** | Sở thích "luôn cho phép" của plugin MCP được lưu trữ bền vững trong cấu hình, giải quyết vấn đề mất quyền sau khi khởi động lại | **Mở** |
| [#19591](https://github.com/openai/codex/pull/19591) | **Fix filtered thread-list resume regression in TUI** | Sửa lỗi hồi quy khôi phục luồng trong danh sách lọc luồng trong TUI | **Mở** |

---

## 5. Xu hướng Yêu cầu Chức năng

```
【Phát huy Năng lực Mô hình】████████████████████  ████  Mở rộng ngữ cảnh GPT-5.5, Minh bạch tốc độ/thanh toán
【Tích hợp IDE Sâu sắc】████████████████░░░░░░░░░░  Phát triển từ xa, Độ ổn định VS Code, Quản lý hội thoại
【Hoàn tác/Cơ chế An ninh】██████████░░░░░░░░░░░░░░  /undo, /rewind, Khôi phục điểm kiểm tra
【Hiệu năng và Tài nguyên】██████████░░░░░░░░░░░░░░░░  Rò rỉ CPU/bộ nhớ, Quản lý tiến trình MCP, Tốc độ khởi động
【Quyền và Sandbox】██████████░░░░░░░░░░░░░░░░░░  Kiến trúc PermissionProfile, Chính sách proxy mạng
【Trải nghiệm Đa nền tảng】████████░░░░░░░░░░░░░░░░░░░░  Sandbox Windows, Đường dẫn WSL, Kết xuất macOS
```

**Giải thích Xu hướng Cốt lõi**: Ra mắt GPT-5.5 đã gây ra mâu thuẫn "năng lực - giới hạn - chi phí" — người dùng vừa yêu cầu giải phóng hoàn toàn ngữ cảnh 1M, vừa phàn nàn về tính minh bạch thanh toán, tiêu thụ hạn ngạch quá nhanh. Điều này phản ánh khoảng trống thiết kế về **khả năng kiểm soát chi phí cấp doanh nghiệp** của Codex với tư cách là một công cụ năng suất.

---

## 6. Điểm Quan tâm của Nhà phát triển

| Loại Điểm nhức nhối | Biểu hiện | Ảnh hưởng |
|:---|:---|:---|
| **Hộp đen Thanh toán GPT-5.5** | Tốc độ tiêu thụ hạn ngạch không thể nhìn thấy theo thời gian thực, "Hạn ngạch 5 giờ tiêu thụ hết trong 20 phút" không thể giải thích | Người dùng trả phí Pro/Business |
| **Quản lý Ngữ cảnh Mong manh** | Lỗi nén từ xa dẫn đến luồng hỏng, Giới hạn 400K/1M không rõ ràng, Mất lịch sử | Người dùng sử dụng nhiều hội thoại dài |
| **Thiếu cơ chế Hoàn tác** | Không có `/undo`, Không có `/rewind` cấp mã, Rủi ro tệp ngoài Git cao | Người dùng cốt lõi CLI |
| **Rò rỉ Tài nguyên MCP/Plugin** | Tiến trình zombie, Mở rộng bộ nhớ, Cấu hình không bền vững | Kịch bản tự động hóa doanh nghiệp |
| **Dao động Chất lượng Tiện ích mở rộng VS Code** | Màn hình trắng nhấp nháy, Chiếm dụng CPU cao, Chức năng thanh bên hội thoại bị thiếu | Người dùng tích hợp IDE |
| **Trải nghiệm Công dân Hạng hai trên Windows** | Lỗi `CreateProcessAsUserW` của sandbox, Đường dẫn WSL bị đứt gãy, Xung đột phím tắt | Nhà phát triển Windows |

---

*Báo cáo hàng ngày dựa trên dữ liệu công khai trên GitHub, không đại diện cho lập trường chính thức của OpenAI.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Báo cáo Tóm tắt Động thái Cộng đồng Gemini CLI Ngày 26-04-2026

## Tổng quan Hôm nay

Cộng đồng hôm nay có mức độ hoạt động cực kỳ cao, với hơn 50 Issues và 45+ PR được cập nhật trong 24 giờ. Điểm nhấn cốt lõi: **Bản vá khẩn cấp v0.40.0-preview.4 sửa lỗi quay lại vấn đề Ctrl+Backspace**; các nhà đóng góp cộng đồng tích cực gửi các PR về chuẩn hóa cấu hình, tăng cường công cụ MCP, tích hợp mô hình cục bộ; các vấn đề về trạng thái proxy con của Agent gây hiểu lầm, cửa sổ bật lên quyền lặp lại tiếp tục gây thảo luận về trải nghiệm người dùng.

---

## Phát hành Phiên bản

### v0.40.0-preview.4
| Thuộc tính | Nội dung |
|:---|:---|
| Loại | Bản vá khẩn cấp |
| Nội dung Sửa lỗi | Lấy vá lỗi Ctrl+Backspace không hoạt động trên Terminal Windows ( #25941 → #25942 ) |
| Bối cảnh | Bản xem trước trước đó đã đưa ra lỗi phụ Ctrl+Backspace không hoạt động, bản lặp lại nhanh chóng này khôi phục chức năng |

🔗 [Changelog Đầy đủ](https://github.com/google-gemini/gemini-cli/compare/v0.40.0-preview.3...v0.40.0-preview.4)

---

## Issues Nóng trên Cộng đồng (10 cái)

| # | Issue | Vấn đề Cốt lõi | Tại sao Quan trọng | Phản hồi Cộng đồng |
|:---|:---|:---|:---|:---|
| **#22745** | [Đánh giá Đọc/Tìm kiếm/Ánh xạ tệp nhận biết AST](https://github.com/google-gemini/gemini-cli/issues/22745) | Khám phá việc sử dụng công cụ AST thay thế thao tác tệp dựa trên văn bản | **Tối ưu hóa Cấp Kiến trúc**: Giảm thiểu đọc sai ranh giới, giảm tiêu thụ Token, tăng độ chính xác khi điều hướng kho mã nguồn; tạo thành bộ EPIC với #22746 | 🔒 Dành riêng cho người bảo trì, 5 bình luận, theo dõi dài hạn |
| **#22323** | [Proxy con ngắt ở MAX_TURNS được báo cáo là thành công](https://github.com/google-gemini/gemini-cli/issues/22323) | `codebase_investigator` đạt giới hạn vòng lặp nhưng trả về `status: "success"` | **Lỗi Độ tin cậy**: Việc che giấu ngắt quãng gây hiểu lầm cho người dùng rằng phân tích đã hoàn thành, dẫn đến việc đưa ra quyết định dựa trên kết quả không đầy đủ | Ưu tiên P1, 4 bình luận, 2 👍 |
| **#24916** | [Cửa sổ bật lên quyền lặp lại](https://github.com/google-gemini/gemini-cli/issues/24916) | Tùy chọn "Cho phép cho tất cả các phiên trong tương lai" không hoạt động không liên tục | **Điểm nhức nhối thường xuyên**: Phá vỡ luồng công việc không giám sát, mỗi lần khởi động lại CLI cần cấp lại quyền cho cùng một tệp | Lĩnh vực An ninh, 3 bình luận |
| **#25166** | [Đóng băng giả sau khi thực thi lệnh Shell](https://github.com/google-gemini/gemini-cli/issues/25166) | Sau khi lệnh đơn giản hoàn thành, vẫn hiển thị "Đang chờ đầu vào người dùng" | **Lỗi Chặn**: Chức năng cơ bản không ổn định, ảnh hưởng đến vòng lặp tương tác cốt lõi | 3 👍 mức độ quan tâm cao, 2 bình luận |
| **#23571** | [Tệp script tạm thời rải rác khắp nơi](https://github.com/google-gemini/gemini-cli/issues/23571) | Khi thực thi Shell bị hạn chế, proxy tạo tệp chỉnh sửa ở thư mục ngẫu nhiên | **Ô nhiễm Khu vực làm việc**: Tăng gánh nặng dọn dẹp trước khi commit, xung đột với nguyên tắc "commit sạch sẽ" | Ưu tiên P2, Lĩnh vực Agent |
| **#22819** | [Định tuyến bộ nhớ: Toàn cục vs Dự án](https://github.com/google-gemini/gemini-cli/issues/22819) | Proxy con của bộ nhớ cần phân biệt lưu trữ cấp người dùng và cấp dự án | **Cơ sở Cá nhân hóa**: Xác định khả năng CLI hình thành khả năng học hỏi thói quen người dùng liên tục | 2 👍, Thiết kế cốt lõi hệ thống bộ nhớ |
| **#25216** | [Lỗi đường dẫn tạm thời A:\ của Windows](https://github.com/google-gemini/gemini-cli/issues/25216) | `gemini --yolo` gặp lỗi `EISDIR: realpath 'A:\a'` khi gặp PowerShell | **Tương thích Nền tảng**: Người dùng Windows gặp lỗi ngay khi khởi động | 1 bình luận |
| **#22267** | [Browser Agent bỏ qua settings.json](https://github.com/google-gemini/gemini-cli/issues/22267) | Cấu hình như `maxTurns` ghi đè không có hiệu lực đối với proxy trình duyệt | **Đứt gãy Tính nhất quán Cấu hình**: Người dùng kỳ vọng cấu hình toàn cục có hiệu lực thống nhất, thực tế có sự khác biệt ở các cấp độ proxy | P2, Lĩnh vực Agent |
| **#23582** | [Proxy con nhận biết chế độ phê duyệt](https://github.com/google-gemini/gemini-cli/issues/23582) | Proxy con không biết chế độ hiện tại là Plan Mode hay Auto-Edit Mode | **Lỗ hổng Kiến trúc An ninh**: Chặn của công cụ chính sách xung đột với chỉ dẫn của proxy, dẫn đến thử lại không hiệu quả | 🔒 Dành riêng cho người bảo trì, 1 👍 |
| **#22672** | [Ngăn chặn thao tác phá hoại](https://github.com/google-gemini/gemini-cli/issues/22672) | Proxy sử dụng các lệnh nguy hiểm như `git reset --force` trong các thao tác Git | **Ranh giới Đỏ An ninh**: Thiếu sở thích thao tác thận trọng trong các kịch bản phức tạp, có thể làm mất dữ liệu người dùng | 1 👍, Thiết kế ràng buộc hành vi |

---

## 4. Tiến độ PR Quan trọng (10 cái)

| # | PR | Loại | Nội dung Chức năng/Sửa lỗi | Giá trị Kỹ thuật |
|:---|:---|:---|:---|:---|
| **#25989** | [Xử lý nhất quán tên máy chủ dấu gạch nối MCP](https://github.com/google-gemini/gemini-cli/pull/25989) | 🐛 Sửa lỗi | Mô hình thường chuẩn hóa `mcp_hyphen-server_tool` thành `mcp_hyphen_server_tool` với dấu gạch dưới, dẫn đến lỗi tìm kiếm công cụ; Hiện đã thống nhất khớp | Giải quyết điểm nhức nhối về khả năng tương tác của hệ sinh thái MCP |
| **#25947** | [Sao lưu ghi trước theo phiên bản và khôi phục do proxy điều khiển](https://github.com/google-gemini/gemini-cli/pull/25947) | ✨ Chức năng | Giới thiệu lớp giao dịch cấp hội thoại: Tự động sao lưu trước mỗi lần `write_file`, hỗ trợ proxy tự động hoàn tác; Ngăn chặn "vòng lặp sửa đổi phá hoại" | **Cột mốc Độ tin cậy**: Cơ sở hạ tầng cho Agent tự sửa lỗi |
| **#25943** | [Giải pháp thay thế Ctrl+Backspace](https://github.com/google-gemini/gemini-cli/pull/25943) | 🐛 Sửa lỗi | Đối với vấn đề còn sót lại sau khi quay lại #25941, thêm cơ chế thay thế `modifyOtherKeys` cho Terminal Windows để khôi phục xóa từ | Liên kết với bản phát hành hôm nay, hoàn thiện trải nghiệm nhập liệu |
| **#25975** | [Mở rộng biến môi trường tham số MCP](https://github.com/google-gemini/gemini-cli/pull/25975) | 🐛 Sửa lỗi | `${VAR}` trong cấu hình MCP chưa được mở rộng trong các trường `args`/`command`/`cwd`; Hiện đã xử lý thống nhất | Cần thiết cho quản lý cấu hình môi trường doanh nghiệp |
| **#25915** | [/compress định tuyến đến Ollama cục bộ](https://github.com/google-gemini/gemini-cli/pull/25915) | ✨ Chức năng | Thêm `OllamaCompressClient`, phân luồng nhiệm vụ nén lịch sử sang mô hình cục bộ (ví dụ: `gemma3:4b`), mô hình chính chỉ nhận văn bản thuần túy đã khử trùng | **Tối ưu kép về Quyền riêng tư + Chi phí**: Dữ liệu nhạy cảm không rời khỏi cục bộ, giảm gọi API |
| **#25971** | [Đặt lại tên cài đặt boolean](https://github.com/google-gemini/gemini-cli/pull/25971) | ♻️ Tái cấu trúc | `hide*`/`disable*`/`skip*` → `show*`/`enable*`, bao gồm di chuyển cấu hình tự động; Loại bỏ gánh nặng tâm lý | Tinh chỉnh trải nghiệm nhà phát triển (DX) |
| **#25912** | [Đầu ra công cụ MCP cô đọng](https://github.com/google-gemini/gemini-cli/pull/25912) | ✨ Chức năng | `compactToolOutput` (mặc định `true`) trước đây chỉ có hiệu lực đối với công cụ gốc, hiện đã mở rộng cho công cụ MCP | Giảm nhiễu đầu ra luồng, tăng khả năng đọc |
| **#25788** | [Đầu ra luồng thời gian thực của công cụ cục bộ](https://github.com/google-gemini/gemini-cli/pull/25788) | ✨ Chức năng | Công cụ được đăng ký bởi `discoveryCommand` hỗ trợ luồng stdout thời gian thực + chuyển tiếp stderr | Vấn đề độ trễ phản hồi tác vụ dài được giải quyết |
| **#25980** | [Proxy không bị lỗi khi @-mention Blob không phải đường dẫn](https://github.com/google-gemini/gemini-cli/pull/25980) | 🐛 Sửa lỗi | Dán JSON hoặc ảo giác mô hình dẫn đến đường dẫn giả siêu dài kích hoạt `ENAMETOOLONG`; Hiện đã giảm cấp một cách duyên dáng | Tăng cường tính mạnh mẽ |
| **#25981** | [/clear xóa biểu ngữ cập nhật](https://github.com/google-gemini/gemini-cli/pull/25981) | 🐛 Sửa lỗi | `ui.clear()` hiện đồng bộ hóa việc đặt lại trạng thái `updateInfo`, /clear có thể thực sự xóa màn hình | Tinh chỉnh trải nghiệm chi tiết |

---

## Xu hướng Yêu cầu Chức năng

Năm hướng chính được trích xuất từ 50 Issues đang hoạt động:

| Hướng Xu hướng | Issue Đại diện | Đánh giá Mức độ Trưởng thành |
|:---|:---|:---|
| **🧠 Hệ thống Bộ nhớ Thông minh** | #22819 (định tuyến), #22809 (ghi chủ động), #22816 (cấp UI) | Giai đoạn thiết kế kiến trúc, cơ sở hạ tầng cốt lõi |
| **🔒 Quản trị An ninh và Quyền** | #24916 (cấp lại quyền), #23582 (nhận biết chế độ), #22672 (chặn thao tác phá hoại) | Ưu tiên cao, điểm chặn trải nghiệm người dùng |
| **🛠️ Kỹ thuật Độ tin cậy Agent** | #22323 (báo cáo sai trạng thái), #23571 (tệp tạm thời), #24353 (đánh giá cấp thành phần) | Bước nhảy quan trọng từ "có thể dùng" đến "đáng tin cậy" |
| **⚡ Tối ưu hóa Hiệu năng và Nén** | #23556 (nén bệnh lý), #25915 (nén phân luồng Ollama) | Kịch bản nhạy cảm về chi phí, đóng góp chủ động từ cộng đồng |
| **🌉 Tương thích Đa nền tảng/Đầu cuối** | #25216 (đường dẫn Windows), #24202 (mã hóa SSH), #24546 (phát hiện SSH) | Ngưỡng gia nhập của người dùng doanh nghiệp Windows |

---

## Điểm Quan tâm của Nhà phát triển

### 🔴 Điểm nhức nhối Tần suất Cao (Top 3)

1. **Hệ thống Quyền không đáng tin cậy** — "Cho phép cho tất cả các phiên trong tương lai" như không có tác dụng (#24916), hoàn toàn không thể sử dụng trong kịch bản CI/tự động hóa
2. **Trạng thái Agent không minh bạch** — Proxy con thực sự thất bại nhưng báo cáo thành công (#22323), Shell đóng băng giả (#25166), người dùng phải tự xác minh kết quả
3. **Công dân Hạng hai trên Windows** — Xử lý đường dẫn (#25216), đầu vào đầu cuối (#25943), kịch bản SSH (#24202) liên tục phơi bày sự khác biệt nền tảng

### 🟡 Nhu cầu Mới nổi

- **Ưu tiên Mô hình Cục bộ**: #25915 (phân luồng Ollama) phản ánh người dùng nhạy cảm về quyền riêng tư muốn nhiều thao tác được thực hiện cục bộ hơn
- **Cấu hình như Mã**: #25971/#25962 cho thấy cộng đồng thúc đẩy chuẩn hóa hệ thống cấu hình, giảm ma sát hợp tác nhóm
- **Trưởng thành hóa Hệ sinh thái MCP**: #25989/#25975 cho thấy MCP đang đi từ "có thể kết nối" sang giai đoạn "dễ sử dụng", các chi tiết về đặt tên, biến môi trường được chú trọng

### 💡 Tín hiệu từ Người bảo trì

- Gắn nhãn 🔒 xuất hiện dày đặc: Nhiều vấn đề thiết kế cốt lõi bị giới hạn chỉ người bảo trì xem được, nhà đóng góp cộng đồng chủ yếu hoạt động ở bên ngoài
- Gắn nhãn `workstream