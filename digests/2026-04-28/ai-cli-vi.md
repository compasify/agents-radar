# Nhật ký cập nhật cộng đồng công cụ AI CLI 2026-04-28

> Thời gian tạo: 2026-04-28 00:19 UTC | Công cụ được bao phủ: 8

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

# Báo cáo phân tích so sánh hệ sinh thái công cụ AI CLI | 2026-04-28

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái công cụ AI CLI hiện tại cho thấy một mô hình **"ba siêu cường và nhiều thế lực mạnh"**: Claude Code, OpenAI Codex, Gemini CLI chiếm ưu thế nhờ sự hậu thuẫn của các nhà cung cấp mô hình lớn, nhưng các điểm đau của cộng đồng lại có tính đồng nhất cao – bảo mật quyền truy cập, minh bạch phí và quản lý ngữ cảnh trở thành nút thắt chung. Đồng thời, các công cụ mới nổi như Kimi CLI, Qwen Code đang nhanh chóng lặp lại bằng cách tiếp cận khác biệt hóa như **dân chủ hóa cơ chế phê duyệt** và **khả năng tương thích chuỗi suy luận**. Trong khi đó, OpenCode, Pi đang cạnh tranh người dùng nhạy cảm với "vendor-lockin" bằng chiến lược **tập hợp nhiều nhà cung cấp**. Nhìn chung, ngành đang chuyển dịch từ "chức năng khả dụng" sang **"sản xuất đáng tin cậy"**, với kiểm thử E2E, khả năng quan sát chi phí và tinh chỉnh sandbox trở thành ngưỡng trưởng thành.

---

## 2. So sánh mức độ hoạt động của từng công cụ

| Công cụ | Issues (Hoạt động 24h) | PRs (Hoạt động 24h) | Phát hành phiên bản | Động thái cốt lõi |
|:---|:---|:---|:---|:---|
| **Claude Code** | ~50 mục (bao gồm 149 bình luận về chủ đề nóng #46987) | ~10 mục | Không có | Khủng hoảng lỗi thời API, sửa lỗi định tuyến thanh toán, kêu gọi mã nguồn mở liên tục |
| **OpenAI Codex** | ~50 mục (#10450 171 bình luận/615👍) | ~12 mục (bao gồm 6 PRs tái cấu trúc quyền) | Rust alpha liên tục 4 lần (α4→α8) | Tái cấu trúc toàn diện mô hình quyền sandbox, nhu cầu phát triển từ xa chưa được đáp ứng lâu dài |
| **Gemini CLI** | ~50 mục (#24517 152 bình luận/61👍) | ~10 mục | v0.41.0-nightly | Sửa lỗi giới hạn 128 công cụ, tải an toàn headless, lỗi ánh xạ quyền trả phí |
| **GitHub Copilot CLI** | 39 mục | **0 mục** | **v1.0.37** | Lưu trữ quyền + hoàn thành shell, nhưng PR cốt lõi bị gián đoạn |
| **Kimi CLI** | 6 mục (đã thu thập hết) | **11 mục** | Không có | Tái cấu trúc lỗi thời phê duyệt (#2087), cơ sở hạ tầng kiểm thử độ chính xác E2E (#2085) |
| **OpenCode** | ~50 mục | ~10 mục | v1.14.27/28 | Khủng hoảng tương thích Kimi K2.5/2.6, lỗi đồng bộ trạng thái TUI |
| **Pi** | ~50 mục | **28 mục** | v0.70.3-5 (bao gồm hotfix) | Khả năng tự cập nhật trực tuyến, tích hợp dày đặc hệ sinh thái Cloudflare, sự cố phát hành v0.70.3 |
| **Qwen Code** | ~50 mục | ~10 mục | v0.15.2-nightly | Cơn bão tương thích DeepSeek V4 reasoning_content, triển khai ba giai đoạn tác vụ nền |

> **Tín hiệu hoạt động**: Pi (28 PRs) và Kimi CLI (11 PRs/6 Issues, tỷ lệ đóng góp rất cao) cho thấy sự lặp lại do cộng đồng thúc đẩy; Copilot CLI (0 PRs) bộc lộ rủi ro về vòng lặp phát triển nội bộ của Microsoft.

---

## 3. Hướng chức năng được quan tâm chung

| Hướng chức năng | Công cụ liên quan | Yêu cầu cụ thể và bằng chứng |
|:---|:---|:---|
| **🔒 Tinh chỉnh bảo mật quyền** | Claude Code, Codex, Kimi CLI, Gemini CLI | Claude #43713 vượt qua sandbox, Codex 6 PRs tái cấu trúc `PermissionProfile`, Kimi #2087 liên kết vòng đời phê duyệt, Gemini #24916 lỗi lưu trữ quyền |
| **💰 Minh bạch thanh toán/chi phí** | Claude Code, Codex, Copilot CLI, Qwen Code | Claude #53262 HERMES.md tính phí nhầm $200, Codex #13733 polling tốn token, Copilot #2591 100 yêu cầu Premium mỗi lần, Qwen #3668 ước tính phí theo phiên |
| **🧠 Quản lý cửa sổ ngữ cảnh** | Claude Code, Codex, Qwen Code | Claude #43989 nén im lặng xuống 400K, Codex #19464 chênh lệch 1M vs 400K của GPT-5.5, Qwen #3679 lỗi đánh dấu ngữ cảnh DeepSeek V4 |
| **🖥️ Phát triển từ xa/đa thiết bị** | Codex, Kimi CLI, Gemini CLI | Codex #10450 (615👍) Remote SSH/WSL, #9224 điều khiển máy tính từ điện thoại; Kimi #2050 mạng nội bộ Tailscale; Xác thực Cloud Shell Gemini |
| **🔧 Khả năng tương thích đa nhà cung cấp** | OpenCode, Pi, Qwen Code | OpenCode #23887 lỗi Kimi K2.6; Pi #3779 xung đột trường điểm cuối tương thích, #3850 tích hợp Cloudflare; Qwen #3669 thẻ thinking MiniMax |
| **💾 Lưu trữ dữ liệu đáng tin cậy** | Claude Code, Codex, OpenCode | Claude #54092 mất tệp phiên, #53804 đóng băng Rewind; Codex #18993 mất lịch sử phiên; OpenCode #24628 bộ xử lý lưu trữ chạy không tải |

---

## 4. Phân tích định vị khác biệt

| Công cụ | Tập trung chức năng | Người dùng mục tiêu | Lộ trình kỹ thuật |
|:---|:---|:---|:---|
| **Claude Code** | **Cộng tác mã nguồn cấp doanh nghiệp** (Quản lý PR, tự động hóa worktree) | Nhóm trung bình-lớn, người dùng sâu của hệ sinh thái Anthropic | TypeScript/Node, mã nguồn đóng, mô hình quyền thiên về bảo thủ |
| **OpenAI Codex** | **Lập trình hóa tác tử** (Tác tử phụ, hệ sinh thái plugin, lõi Rust) | Người dùng đăng ký OpenAI, người theo đuổi tiên phong về khả năng mô hình | Viết lại CLI bằng Rust, mô hình quyền sandbox đang tái cấu trúc mạnh mẽ |
| **Gemini CLI** | **Tích hợp hệ sinh thái Google** (Cloud, One AI Premium) | Người dùng dịch vụ đám mây Google, nhà phát triển nhạy cảm về giá | Tích hợp gốc API Gemini, tối ưu hóa cho kịch bản headless/CI |
| **GitHub Copilot CLI** | **Mở rộng quy trình làm việc IDE** (Tích hợp sâu với VS Code/trình soạn thảo) | Người dùng hệ sinh thái GitHub, người đăng ký Copilot hiện tại | Mã nguồn đóng, nhịp độ chức năng bị điều phối nội bộ của Microsoft chi phối |
| **Kimi CLI** | **Khả năng kiểm soát phê duyệt + độ chính xác kỹ thuật** | Người dùng doanh nghiệp nghi ngờ về tính tự chủ của tác tử | Phản hồi nhanh chóng các PR cộng đồng, cơ sở hạ tầng kiểm thử E2E hàng đầu |
| **OpenCode** | **Tập hợp đa mô hình + tương tác tinh chỉnh TUI** | Người dùng nhạy cảm với vendor-lockin mô hình, nhà phát triển front-end | TypeScript, kiến trúc plugin, ba đầu cuối Desktop/TUI/Web |
| **Pi** | **Hệ sinh thái mở rộng kiểu trình quản lý gói** (`pi install`/`pi update`) | Người yêu thích mô hình mã nguồn mở, người triển khai tự lưu trữ | Hỗ trợ nhiều nhà cung cấp nhất (20+), ưu tiên runtime Bun |
| **Qwen Code** | **Trải nghiệm nhà phát triển tiếng Trung + quản lý tác vụ nền** | Nhà phát triển trong ngữ cảnh tiếng Trung, người dùng đám mây hệ sinh thái Alibaba | Ba giai đoạn tác vụ nền (Giai đoạn A/B/C), tích lũy bộ nhớ autoSkill |

> **Phân hóa chính**: Claude/Codex theo hướng **"Khả năng mô hình + Khóa hệ sinh thái"**, OpenCode/Pi theo hướng **"Trung lập mô hình + Tích hợp chuỗi công cụ"**, Kimi/Qwen theo hướng **"Đáng tin cậy về kỹ thuật + Thị trường khu vực"**.

---

## 5. Độ nóng cộng đồng và mức độ trưởng thành

| Chiều | Đánh giá |
|:---|:---|
| **🔥 Độ nóng cộng đồng cao nhất** | **OpenAI Codex** (#10450 615👍 luôn đứng đầu), **Claude Code** (#46987 149 bình luận khủng hoảng API), **Gemini CLI** (#24517 152 bình luận lỗ hổng tường phí) |
| **⚡ Tốc độ lặp lại nhanh nhất** | **Pi** (3 phiên bản trong một ngày bao gồm hotfix, 28 PRs), **Kimi CLI** (cơ chế phê duyệt 2 ngày 2 phiên bản PR), **Qwen Code** (phản hồi nhanh chóng cơn bão tương thích DeepSeek) |
| **🛡️ Trưởng thành kỹ thuật hàng đầu** | **Kimi CLI** (kiểm thử độ chính xác E2E #2085 đầu tiên trong ngành), **Codex** (tái cấu trúc kiến trúc Rust nhưng độ ổn định alpha còn nghi vấn), **Claude Code** (chức năng phong phú nhưng mô hình "phá hoại im lặng" làm xói mòn lòng tin) |
| **⚠️ Bẫy trưởng thành** | **Copilot CLI** (phát hành v1.0.37 nhưng 0 PRs, đóng góp cộng đồng bị gián đoạn), **OpenCode** (máy trạng thái TUI thường xuyên quay lại), **Pi** (sự cố phát hành v0.70.3 bộc lộ lỗ hổng kiểm thử) |
| **📈 Đà tăng trưởng** | **Qwen Code** (khác biệt hóa quản lý tác vụ nền), **Pi** (mở rộng hệ sinh thái Cloudflare/Together AI), **Kimi CLI** (tiêu chuẩn dân chủ hóa cơ chế phê duyệt) |

---

## 6. Tín hiệu xu hướng đáng chú ý

| Tín hiệu xu hướng | Nguồn bằng chứng | Giá trị tham khảo cho nhà phát triển |
|:---|:---|:---|
| **🔴 "Phá hoại im lặng" trở thành kẻ giết chết lòng tin** | Claude #43989 thu hẹp ngữ cảnh, #54092 mất dữ liệu; Codex #19215 hạn ngạch bất thường; Copilot #2591 thanh toán hộp đen | **Môi trường sản xuất phải thiết lập khả năng quan sát cấp công cụ**: xác minh trạng thái phiên, giới hạn trên chi phí, nhật ký kiểm toán hoạt động |
| **🟡 Quyền sandbox chuyển từ "danh sách trắng/đen" sang "mô hình năng lực"** | Codex tái cấu trúc toàn diện `PermissionProfile`, Kimi phê duyệt tự động chi tiết, Claude #54104 thắt chặt chi tiết quyền | **Kiến trúc an toàn tác tử cần thiết lập nguyên tắc "quyền tối thiểu + xác nhận rõ ràng"**, nhận dạng ý định không thể thay thế ủy quyền người dùng |
| **🟢 Chuỗi suy luận (reasoning_content) trở thành chiến trường tương thích mới** | Cơn bão Qwen DeepSeek V4 (5+ Issue/2 PR), định dạng thinking của Claude, Gemini không hiển thị suy luận gốc | **Chiến lược đa mô hình phải trừu tượng hóa vòng đời nội dung suy luận**: quy tắc lưu trữ, truyền tải, loại bỏ/giữ lại khi chuyển đổi mô hình |
| **🔵 Tác vụ nền từ "hộp đen" sang "cơ sở hạ tầng có thể quan sát"** | Qwen Giai đoạn A/B/C, Kimi liên kết vòng đời tác tử phụ, tranh cãi chi phí polling nền của Codex | **Tác tử chạy dài cần mặt phẳng điều khiển**: truy vấn trạng thái, chụp đầu ra, giới hạn tài nguyên, tự động chấm dứt |
| **🟣 Kiểm thử hiệu quả E2E gia nhập dòng chính CI** | Kimi #2085 Terminal Bench 2 tiêu chuẩn | **Công cụ tác tử không chỉ kiểm tra tính đúng đắn của chức năng**, cần định lượng "tỷ lệ thành công tác vụ" làm tuyến phòng thủ |
| **⚪ Tập hợp đa nhà cung cấp thúc đẩy nhu cầu "lớp cổng"** | Cổng AI Cloudflare Pi, OpenCode thích ứng 20+ nhà cung cấp, Codex Azure GCC High bị chậm trễ | **Trừu tượng hóa sự khác biệt của nhà cung cấp trở thành lớp kiến trúc cần thiết**: xác thực thống nhất, ma trận năng lực, chuyển đổi lỗi, tối ưu hóa chi phí |

---

> **Đề xuất quyết định**: Nếu theo đuổi **tiên phong về khả năng mô hình** và chấp nhận khóa hệ sinh thái, Claude Code/Codex vẫn là lựa chọn hàng đầu, nhưng cần tự xây dựng giám sát chi phí; Nếu **trung lập với nhà cung cấp** là ràng buộc cứng, chiến lược tập hợp của OpenCode/Pi bền vững hơn, nhưng cần gánh vác chi phí gỡ lỗi tương thích; Nếu **khả năng kiểm soát cấp doanh nghiệp** được ưu tiên, cơ chế phê duyệt dân chủ hóa và cơ sở hạ tầng kiểm thử E2E của Kimi CLI cung cấp lộ trình đáng tin cậy có thể xác minh.

---

## Báo cáo chi tiết từng công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Điểm nóng cộng đồng Claude Code Skills

> Nguồn dữ liệu: [anthropics/skills](https://github.com/anthropics/skills)

# Báo cáo điểm nóng cộng đồng Claude Code Skills (2026-04-28)

---

## 1. Danh sách Skills phổ biến (theo mức độ quan tâm của cộng đồng)

| Xếp hạng | Skill | Trạng thái | Tóm tắt chức năng | Điểm nóng thảo luận cộng đồng |
|:---|:---|:---|:---|:---|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | 🟡 MỞ | Kiểm soát chất lượng bố cục tài liệu do AI tạo: ngăn chặn dòng đơn, dòng cô đơn, lỗi đánh số, v.v. | Được coi là "khả năng cơ bản mà mọi tài liệu Claude đều cần", thảo luận tập trung vào việc liệu nó có nên là chức năng tích hợp sẵn hay là Skill riêng biệt |
| 2 | **[skill-quality-analyzer](https://github.com/anthropics/skills/pull/83) + [skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | 🟡 MỞ | Siêu Skill: tự động đánh giá chất lượng của các Skill khác (cấu trúc, tài liệu, bảo mật, v.v. theo 5 tiêu chí) | Nhu cầu mạnh mẽ từ người dùng doanh nghiệp, thảo luận tập trung vào tính khách quan và mức độ tự động hóa của tiêu chuẩn đánh giá |
| 3 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | 🟡 MỞ | Cải tiến Skill thiết kế front-end, nâng cao khả năng thực thi và độ rõ ràng của lệnh trong một lượt trò chuyện | Cộng đồng quan tâm "làm thế nào để tránh thiết kế quá mức", cân bằng giữa tính hướng dẫn và tính linh hoạt |
| 4 | **[odt](https://github.com/anthropics/skills/pull/486)** | 🟡 MỞ | Tạo, điền mẫu và chuyển đổi sang HTML cho định dạng OpenDocument (.odt/.ods) | Nhu cầu cứng trong các bối cảnh mã nguồn mở/chính phủ/học thuật, lấp đầy khoảng trống trong hệ sinh thái LibreOffice |
| 5 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | 🟡 MỞ | Phương pháp kiểm thử toàn diện: Testing Trophy, kiểm thử thành phần React, E2E, kiểm thử hiệu năng | Nhu cầu cốt lõi của chuỗi công cụ nhà phát triển, thảo luận về mẫu AAA và ranh giới thực thi của Claude |
| 6 | **[sensory](https://github.com/anthropics/skills/pull/806)** | 🟡 MỞ | Tự động hóa gốc macOS: thay thế AppleScript cho việc sử dụng máy tính dựa trên ảnh chụp màn hình, phân cấp quyền | Ưu điểm về hiệu năng và quyền riêng tư được quan tâm, ngưỡng quyền Cấp 2 làm dấy lên thảo luận triển khai doanh nghiệp |
| 7 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | 🟡 MỞ | Hệ thống bộ nhớ kéo dài qua các cuộc trò chuyện, truy xuất ngữ cảnh chủ động và bộ nhớ có cấu trúc | Cơ sở hạ tầng quan trọng cho tác tử AI, thảo luận về quyền riêng tư bộ nhớ và chi phí lưu trữ |
| 8 | **[ServiceNow](https://github.com/anthropics/skills/pull/568)** | 🟡 MỞ | Trợ lý nền tảng ServiceNow cấp doanh nghiệp: bao phủ toàn diện ITSM/ITOM/SecOps/FSM/SPM | Một trong những Skill lớn nhất trong lĩnh vực dọc, tranh cãi về kiến trúc độ rộng vs độ sâu |

---

## 2. Xu hướng nhu cầu cộng đồng (Tổng hợp Issues)

| Xu hướng | Issue đại diện | Yêu cầu cốt lõi |
|:---|:---|:---|
| **Quản trị Skill cấp tổ chức** | [#228](https://github.com/anthropics/skills/issues/228) (9 bình luận, 👍6) | Chia sẻ Skill trong doanh nghiệp cần thoát khỏi việc truyền tay thủ công qua Slack/Teams, yêu cầu kho lưu trữ tổ chức gốc |
| **Cơ sở hạ tầng đánh giá và xác minh** | [#556](https://github.com/anthropics/skills/issues/556) (6 bình luận, 👍6) | Tỷ lệ kích hoạt `run_eval.py` 0% bộc lộ khó khăn trong việc định lượng hiệu quả Skill, cần công cụ đánh giá tự động |
| **Ranh giới an toàn và tin cậy** | [#492](https://github.com/anthropics/skills/issues/492) (4 bình luận, 👍2) | Không gian tên `anthropic/` bị các Skill cộng đồng lạm dụng, chính thức cần làm rõ cơ chế chữ ký/xác thực |
| **Tương tác giao thức MCP** | [#16](https://github.com/anthropics/skills/issues/16) (4 bình luận) | Chuyển đổi hai chiều giữa Skill và MCP, giảm sự phân mảnh hệ sinh thái |
| **Triển khai đa đám mây/doanh nghiệp** | [#29](https://github.com/anthropics/skills/issues/29) (4 bình luận) | Hỗ trợ các điểm cuối doanh nghiệp như AWS Bedrock, vượt qua ràng buộc API Claude |
| **Độ ổn định nền tảng** | [#62](https://github.com/anthropics/skills/issues/62), [#406](https://github.com/anthropics/skills/issues/406), [#403](https://github.com/anthropics/skills/issues/403) | Skill biến mất, tải lên 500, lỗi xóa P0 về độ tin cậy |

> **Hướng mới nổi**: Kỹ thuật tài liệu (bố cục/ODT/PDF), chuyển dịch kiểm thử sang trái, tích hợp SaaS doanh nghiệp (ServiceNow/SAP), bộ nhớ bền vững

---

## 3. Skills tiềm năng cao chờ hợp nhất (bình luận sôi nổi + cập nhật gần đây)

| Skill | PR | Cập nhật lần cuối | Tiềm năng hợp nhất | Rào cản chính |
|:---|:---|:---|:---|:---|
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 2026-03-13 | ⭐⭐⭐⭐⭐ | Cần xác nhận liệu có nên tích hợp làm tiêu chuẩn tài liệu chung |
| **odt** | [#486](https://github.com/anthropics/skills/pull/486) | 2026-04-14 | ⭐⭐⭐⭐⭐ | Xem xét tuân thủ tiêu chuẩn mã nguồn mở |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 2026-04-21 | ⭐⭐⭐⭐☆ | Phạm vi bao phủ framework cần được thu hẹp |
| **sensory** | [#806](https://github.com/anthropics/skills/pull/806) | 2026-04-02 | ⭐⭐⭐⭐☆ | Mô hình quyền cần được đánh giá bảo mật |
| **ServiceNow** | [#568](https://github.com/anthropics/skills/pull/568) | 2026-04-23 | ⭐⭐⭐⭐☆ | Quá nhiều module, có thể chia tách |
| **HADS** | [#616](https://github.com/anthropics/skills/pull/616) | 2026-03-31 | ⭐⭐⭐☆☆ | Quy ước Markdown mới cần cộng đồng chấp nhận |
| **claude-obsidian-reporter** | [#664](https://github.com/anthropics/skills/pull/664) | 2026-03-22 | ⭐⭐⭐☆☆ | Công cụ quy trình làm việc cá nhân, bối cảnh doanh nghiệp hạn chế |

> **Khả năng cao sẽ triển khai gần đây**: `document-typography`, `odt`, `testing-patterns` (cập nhật thường xuyên + nhu cầu rõ ràng + ranh giới rõ ràng)

---

## 4. Hiểu biết về hệ sinh thái Skills

> **Nhu cầu cộng đồng tập trung nhất: Từ "mở rộng chức năng" sang "cơ sở hạ tầng đáng tin cậy" – quản trị cấp tổ chức, đánh giá tự động, chứng thực bảo mật, triển khai đa nền tảng trở thành những bước cần thiết để Skill từ đồ chơi cá nhân vươn tới sản xuất doanh nghiệp.**

---

*Báo cáo dựa trên dữ liệu công khai của anthropics/skills, tính đến ngày 2026-04-28*

---

# Nhật ký cập nhật cộng đồng Claude Code | 2026-04-28

## Tóm tắt hôm nay

Cộng đồng hôm nay không có bản phát hành phiên bản mới, nhưng mức độ hoạt động của Issues cực kỳ cao. Vấn đề lỗi thời dòng API tiếp tục lan rộng trở thành chủ đề nóng nhất, đồng thời nhiều lỗi quan trọng đã được đánh dấu là đã sửa, bao gồm lỗi tiêu đề `anthropic-beta` của Vertex AI và sự cố định tuyến thanh toán do HERMES.md gây ra. Mức độ quan tâm của nhà phát triển đối với ranh giới quyền, việc thu hẹp cửa sổ ngữ cảnh và các vấn đề bảo mật dữ liệu đã tăng đáng kể.

---

## Issues cộng đồng nóng

### 🔥 Tính ổn định API và thanh toán

| # | Trạng thái | Tiêu đề | Bình luận | Mức độ quan trọng |
|---|------|------|------|--------|
| [#46987](https://github.com/anthropics/claude-code/issues/46987) | MỞ | **Lỗi thời dòng chờ API: một số phản hồi bị lỗi nhận** — Gặp phải nhiều lần hôm nay | 149 👍140 | **Điểm đau cốt lõi**: Gián đoạn API Anthropic thường xuyên gặp phải bởi người dùng Mac, ảnh hưởng đến tính khả dụng trong sản xuất, cộng đồng kêu gọi sửa chữa khẩn cấp |
| [#53262](https://github.com/anthropics/claude-code/issues/53262) | **ĐÃ ĐÓNG** | **Lỗi định tuyến thanh toán do chuỗi HERMES.md gây ra** — Tính phí nhầm $200 thêm dung lượng | 13 👍3 | **Đã sửa**: Thông báo commit git `HERMES.md` kích hoạt hệ thống thanh toán nhận dạng sai, vượt qua hạn ngạch kế hoạch Max; bộc lộ tính mong manh của phân tích quy tắc thanh toán |
| [#48274](https://github.com/anthropics/claude-code/issues/48274) | MỞ | Mô hình ngữ cảnh không phải 1M hiển thị lỗi cần thêm dung lượng | 4 👍0 | Trạng thái thanh toán bị đồng bộ hóa có lỗi, mô hình ngữ cảnh tiêu chuẩn Sonnet 4.6 bị nhận dạng sai thành mô hình 1M |

### 🛡️ Ranh giới quyền và bảo mật

| # | Trạng thái | Tiêu đề | Bình luận | Mức độ quan trọng |
|---|------|------|------|--------|
| [#43713](https://github.com/anthropics/claude-code/issues/43713) | MỞ | `autoAllowBashIfSandboxed` bị tiện ích mở rộng shell vượt qua | 17 👍37 | Chiến lược bảo mật sandbox có lỗ hổng phân tích, lệnh chứa mở rộng biến vẫn yêu cầu quyền, làm giảm trải nghiệm tự động hóa |
| [#54104](https://github.com/anthropics/claude-code/issues/54104) | **ĐÃ ĐÓNG** | **Claude tự động đóng PR và xóa nhánh** — Không do lệnh kích hoạt | 2 👍0 | **Hành vi có rủi ro cao**: Opus 4.7 nhận dạng sai câu hỏi làm rõ của người dùng thành lệnh thực thi, gây mất dữ liệu sản xuất; chi tiết quyền cần thắt chặt khẩn cấp |
| [#51588](https://github.com/anthropics/claude-code/issues/51588) | MỞ | Hệ thống xác thực vẫn chặn đăng nhập sau khi nhóm bảo mật và tin cậy khôi phục tài khoản | 3 👍6 | Lỗi đồng bộ hóa kỹ thuật giữa trạng thái tài khoản và hệ thống xác thực, ảnh hưởng đến liên tục kinh doanh của người dùng đã gỡ chặn |

### 💥 Độ ổn định và tính toàn vẹn dữ liệu

| # | Trạng thái | Tiêu đề | Bình luận | Mức độ quan trọng |
|---|------|------|------|--------|
| [#13480](https://github.com/anthropics/claude-code/issues/13480) | MỞ | Hình ảnh quá lớn làm hỏng cuộc trò chuyện vĩnh viễn — không thể khôi phục | 73 👍72 | **Vấn đề mãn tính**: Kích thước hình ảnh vượt giới hạn làm hỏng trạng thái phiên, phải tạo trò chuyện mới, chi phí gián đoạn quy trình làm việc cực kỳ cao |
| [#53804](https://github.com/anthropics/claude-code/issues/53804) | MỞ | **Tính năng Rewind làm đóng băng thiết bị đầu cuối** — Cần thoát bắt buộc (v2.1.119) | 6 👍4 | **Lỗi tái phát mới**: Chức năng chỉnh sửa cốt lõi hoàn toàn không hoạt động trên Mac arm64, ngăn chặn thao tác hoàn tác của người dùng |
| [#54092](https://github.com/anthropics/claude-code/issues/54092) | MỞ | **Cuộc trò chuyện CLI cục bộ biến mất im lặng** — Tệp JSONL bị xóa | 2 👍0 | **Mất dữ liệu**: Tệp nhiều phiên biến mất khỏi đĩa, không do nén, liên quan đến cơ chế lưu trữ dữ liệu cốt lõi |
| [#43989](https://github.com/anthropics/claude-code/issues/43989) | MỞ | **Phiên bản v2.1.92 quay lại**: Opus 4.6 tự động nén ngưỡng từ 1M xuống 400k | 7 👍3 | **Giảm cấp im lặng**: Cửa sổ ngữ cảnh giảm không được ghi lại, ảnh hưởng trực tiếp đến khả năng xử lý kho mã nguồn lớn |

### 🔧 Tích hợp nền tảng

| # | Trạng thái | Tiêu đề | Bình luận | Mức độ quan trọng |
|---|------|------|------|--------|
| [#11154](https://github.com/anthropics/claude-code/issues/11154) | **ĐÃ ĐÓNG** | Lỗi yêu cầu đếm token Vertex AI mang tiêu đề `anthropic-beta` | 19 👍19 | **Đã sửa**: Sửa lỗi tương thích API đa đám mây, loại bỏ lỗi yêu cầu của người dùng Vertex |
| [#50423](https://github.com/anthropics/claude-code/issues/50423) | MỞ | Tiện ích mở rộng VS Code không tải công cụ trình duyệt Chrome | 8 👍4 | Tài liệu không khớp với triển khai, trải nghiệm tích hợp IDE trên nền tảng Linux bị gián đoạn |

---

## Tiến trình PR quan trọng

| # | Trạng thái | Tác giả | Tóm tắt nội dung |
|---|------|------|----------|
| [#54103](https://github.com/anthropics/claude-code/pull/54103) | MỞ | Codeturion | **Sửa lỗi ghi đè quyền `/commit-push-pr`**: Bổ sung lệnh `git diff HEAD`, `git branch --show-current` vào `allowed-tools`, giải quyết gián đoạn quy trình trong chế độ quyền nghiêm ngặt |
| [#54094](https://github.com/anthropics/claude-code/pull/54094) | MỞ | Codeturion | **Sửa lỗi dấu ngoặc trong đường dẫn hook plugin**: `${CLAUDE_PLUGIN_ROOT}` không có dấu ngoặc khiến đường dẫn chứa khoảng trắng (ví dụ: `Company Name`) bị phân chia từ ngữ của shell, ảnh hưởng đến năm plugin tích hợp sẵn |
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | MỞ | gameroman | **Mã nguồn mở Claude Code** ✨ — Liên quan đến #59, #456, #2846, #22002, #41434, đề xuất cột mốc được cộng đồng kêu gọi từ lâu |
| [#33224](https://github.com/anthropics/claude-code/pull/33224) | MỞ | sakumoto-shota | **Phiên bản Node.js DevContainer có thể cấu hình**: Mã hóa cứng Node 20 → điều khiển bằng biến môi trường, mặc định nâng cấp lên Node 24 LTS (Node 20 sẽ hết hạn vào tháng 4 năm 2026) |
| [#33234](https://github.com/anthropics/claude-code/pull/33234) | MỞ | sakumoto-shota | **Sửa lỗi cảnh ban đầu**: `git diff HEAD` trong kho không có commit quay lại `git diff --cached`, loại bỏ lỗi nghiêm trọng `/commit-commands:commit` |
| [#5609](https://github.com/anthropics/claude-code/pull/5609) | MỞ | sakumoto-shota | **Quản lý IP hỗn hợp tường lửa DevContainer**: Bộ IP tĩnh + API Meta động kết hợp, thích ứng kiến trúc mạng hiện đại của dịch vụ CDN và cân bằng tải |
| [#53949](https://github.com/anthropics/claude-code/pull/53949) | MỞ | OctavianGuzu | Cập nhật tài liệu bảo mật: sửa liên kết biểu mẫu gửi HackerOne và trang dự án |
| [#53831](https://github.com/anthropics/claude-code/pull/53831) | MỞ | 1059625483-ai | Tài liệu hóa ảnh chụp nhanh nguồn commit: bổ sung siêu dữ liệu, tóm tắt thay đổi và ghi chú cho commit `5af0b38` |
| [#33070](https://github.com/anthropics/claude-code/pull/33070) | **ĐÃ ĐÓNG** | Anuj-G-06 | Plugin mới `reframe`: áp dụng các khung nhận thức như nguyên tắc thứ nhất, tư duy ngược bằng lệnh `/reframe`, hỗ trợ gỡ lỗi và thiết kế dựa trên ngữ cảnh kho mã nguồn |
| [#30823](https://github.com/anthropics/claude-code/pull/30823) | **ĐÃ ĐÓNG** | inkdust2021 | Plugin mới `vibeguard`: phát hiện và chặn thông tin nhạy cảm/PII, xuất phiên bản ẩn danh với dấu giữ chỗ (`__VG_<CATEGORY>_<hash>__`) |

---

## Xu hướng nhu cầu chức năng

Dựa trên phân tích 50 mục Issues đang hoạt động, trọng tâm quan tâm của cộng đồng tập trung vào bốn hướng chính:

| Xu hướng | Issue đại diện | Yêu cầu cốt lõi |
|----------|-----------|----------|
| **🤖 Quản trị quyền tự động** | #43713, #54104, #12513 | Chiến lược sandbox chi tiết hơn, không thực thi nếu không có lệnh, nhà phát triển độc lập có thể vô hiệu hóa tạo worktree tự động |
| **📏 Minh bạch ngữ cảnh và mô hình** | #43989, #48274, #13480 | Cần ghi lại ngưỡng cửa sổ ngữ cảnh, nhận dạng mô hình thanh toán chính xác, giảm cấp duyên dáng cho đầu vào quá lớn |
| **🔌 Tích hợp sâu hệ sinh thái IDE/trình duyệt** | #50423, #30873, #8034 | Hỗ trợ đầy đủ chuỗi công cụ VS Code, độ ổn định thanh bên Edge, tương thích Terminal GNOME |
| **💾 Quyền sở hữu dữ liệu và khả năng quan sát** | #54092, #53804, #25045 | Chống mất phiên cục bộ, thao tác có thể hoàn tác, phiên có thể đổi tên theo chương trình |

---

## Điểm quan tâm của nhà phát triển

### Điểm đau thường gặp

1. **Khủng hoảng độ tin cậy của API** — 149 bình luận của [#46987](https://github.com/anthropics/claude-code/issues/46987) cho thấy lỗi thời dòng đã từ lỗi ngẫu nhiên trở thành tắc nghẽn hàng ngày, nhà phát triển buộc phải thiết lập cơ chế thử lại hoặc chuyển đổi công cụ

2. **Mô hình "phá hoại im lặng"** — Ba loại hành vi không báo trước gây khủng hoảng lòng tin:
   - Thay đổi định tuyến thanh toán đột ngột ([#53262](https://github.com/anthropics/claude-code/issues/53262))
   - Cửa sổ ngữ cảnh bị thu hẹp ([#43989](https://github.com/anthropics/claude-code/issues/43989))
   - Dữ liệu cục bộ biến mất ([#54092](https://github.com/anthropics/claude-code/issues/54092))

3. **Vùng xám của ranh giới quyền** — Sự cố "vấn đề thành lệnh" của [#54104](https://github.com/anthropics/claude-code/issues/54104) bộc lộ rủi ro bảo mật của việc nhận dạng ý định, nhà phát triển yêu cầu **cơ chế xác nhận rõ ràng** cho tất cả các thao tác phá hoại

### Kỳ vọng chưa được đáp ứng

- **Tiến trình mã nguồn mở**：[#41447](https://github.com/anthropics/claude-code/pull/41447) tiếp tục nhận được sự quan tâm, cộng đồng hy vọng tham gia sửa lỗi cốt lõi thay vì chỉ báo cáo vấn đề
- **Khả năng lập trình phiên**：[#25045](https://github.com/anthropics/claude-code/issues/25045) và [#29355](https://github.com/anthropics/claude-code/issues/29355) cho thấy nhà phát triển cần quản lý phiên tự động dựa trên các tín hiệu như ID phiếu yêu cầu
- **Tính nhất quán đa nền tảng** — Mã lỗi Windows ([#49558](https://github.com/anthropics/claude-code/issues/49558)), khả năng tương thích Terminal Linux ([#8034](https://github.com/anthropics/claude-code/issues/8034)) vẫn là trải nghiệm hạng hai

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Nhật ký cập nhật cộng đồng OpenAI Codex | 2026-04-28

---

## 1. Tóm tắt hôm nay

Cộng đồng Codex hôm nay tập trung vào **nâng cấp kiến trúc bảo mật quyền** và **nhu cầu phát triển từ xa**: nhóm cốt lõi đã gửi liên tiếp 6 PR liên quan để tái cấu trúc mô hình quyền sandbox (sử dụng `PermissionProfile` thay thế `sandbox_policy` cũ), đồng thời khả năng điều khiển máy tính từ xa và hỗ trợ ngữ cảnh 1M tiếp tục chiếm vị trí đầu bảng về độ nóng Issues. Phiên bản alpha Rust CLI liên tục 4 lần, vấn đề gọi công cụ MCP quay lại làm người dùng mô hình cục bộ quan tâm.

---

## 2. Phát hành phiên bản

| Phiên bản | Mô tả |
|:---|:---|
| `rust-v0.126.0-alpha.8` | Lặp lại nhanh chóng CLI Rust, bốn lần alpha.4 → alpha.8, tập trung sửa lỗi và độ ổn định |
| `rust-v0.126.0-alpha.7` | Tương tự |
| `rust-v0.126.0-alpha.6` | Tương tự |
| `rust-v0.126.0-alpha.4` | Tương tự |

> Lưu ý: Tất cả đều là phiên bản xem trước, không có nhật ký thay đổi chi tiết. Khuyến nghị người dùng sản xuất chờ phiên bản chính thức.

---

## 3. Issues cộng đồng nóng

| # | Issue | Mức độ quan trọng | Phản ứng cộng đồng |
|:---|:---|:---|:---|
| [#10450](https://github.com/openai/codex/issues/10450) | **Phát triển từ xa trong ứng dụng Codex Desktop** | 🔥 Chủ đề nóng nhất lâu dài | **171 bình luận / 615👍** — Người dùng yêu cầu mạnh mẽ phiên bản desktop hỗ trợ phát triển từ xa SSH/WSL, tương đương VS Code Remote. OpenAI chưa phản hồi chính thức, cộng đồng tự phát cung cấp nhiều giải pháp tạm thời |
| [#19464](https://github.com/openai/codex/issues/19464) | **Hỗ trợ ngữ cảnh 1M token cho GPT-5.5** | Chênh lệch khả năng mô hình | **62 bình luận / 80👍** — Phiên bản API GPT-5.5 hỗ trợ ngữ cảnh 1M, Codex chỉ mở 400K, nhà phát triển kêu gọi cân bằng. Liên quan đến chiến lược sản phẩm và cân nhắc chi phí |
| [#9224](https://github.com/openai/codex/issues/9224) | **Điều khiển từ xa Codex (điều khiển CLI cục bộ từ điện thoại)** | Hệ sinh thái di động quan trọng | **44 bình luận / 321👍** — Người dùng muốn tab Codex của ChatGPT App trực tiếp điều khiển phiên CLI cục bộ, thực hiện vòng lặp "kích hoạt bằng điện thoại, thực thi trên máy tính" |
| [#13917](https://github.com/openai/codex/issues/13917) | **Lỗi máy chủ lưu trữ PowerShell Windows (8009001d)** | Chặn cốt lõi Windows | **37 bình luận** — Lỗi API mã hóa khiến phiên bản desktop hoàn toàn không sử dụng được trên Windows, 0 lượt thích phản ánh sự bất lực của người dùng chờ sửa lỗi |
| [#19204](https://github.com/openai/codex/issues/19204) | **Liên tục bị đánh dấu là Flagged trong quá trình xác minh bảo mật** | Tin cậy và tuân thủ | **19 bình luận / 19👍** — Người dùng Pro gặp tình trạng khóa vòng lặp "bị đánh dấu lại trong quá trình xác minh", ảnh hưởng đến việc áp dụng trong bối cảnh doanh nghiệp |
| [#18993](https://github.com/openai/codex/issues/18993) | **Tiện ích mở rộng VS Code không thể mở lịch sử phiên** | Độ tin cậy dữ liệu | **15 bình luận / 18👍** — Mất lịch sử phiên hoặc không tải được, ảnh hưởng trực tiếp đến liên tục quy trình làm việc của nhà phát triển |
| [#13733](https://github.com/openai/codex/issues/13733) | **Polling tác vụ nền tốn Token: mỗi lần poll mang theo toàn bộ lịch sử** | Chìa khóa tối ưu chi phí | **14 bình luận / 13👍** — Trong quá trình tác vụ dài như `cargo build`, cơ chế polling của Codex khiến token tiêu thụ tăng theo cấp số nhân với độ dài lịch sử, người dùng Business nhạy cảm về chi phí |
| [#19215](https://github.com/openai/codex/issues/19215) | **GPT 5.5 sớm đạt giới hạn sử dụng** | Tranh cãi về chiến lược hạn ngạch | **13 bình luận** — Người dùng đăng ký Business phản ánh hạn ngạch mô hình mới tiêu tốn bất thường, nghi ngờ lỗi tính phí hoặc giới hạn lưu lượng |
| [#19871](https://github.com/openai/codex/issues/19871) | **Gọi công cụ MCP bị lỗi lại trong v0.117.0+ (mô hình cục bộ/Ollama)** | Hệ sinh thái mô hình cục bộ | **2 bình luận** — Người dùng đã bisect xác định được lỗi từ v0.117.0, độ tin cậy của công cụ nhà cung cấp tùy chỉnh MCP bị phá vỡ, phiên bản alpha vẫn chưa sửa |
| [#19885](https://github.com/openai/codex/issues/19885) | **app-server bão hòa macOS syspolicyd gây treo thiết bị đầu cuối** | Tài nguyên hệ thống và hiệu năng | **2 bình luận** — Tác tử phụ thường xuyên fork-exec kích hoạt quá tải tiến trình bảo vệ chính sách bảo mật macOS, người dùng trả phí Pro bị chặn năng suất |

---

## 4. Tiến trình PR quan trọng

| # | PR | Nội dung chức năng/sửa lỗi | Trạng thái |
|:---|:---|:---|:---|
| [#19895](https://github.com/openai/codex/pull/19895) | **Hỗ trợ phiên tác tử bên ngoài** | Mở rộng phát hiện tác tử bên ngoài, hỗ trợ nhập lịch sử Codex tự động từ tệp phiên của tác tử bên ngoài (ví dụ: Claude Code, Cline), giảm chi phí chuyển đổi | 🆕 Đã gửi mới |
| [#19852](https://github.com/openai/codex/pull/19852) | **Thực thi tên đường dẫn được bảo tồn trong sandbox Linux** | Sandbox bubblewrap Linux thực thi bảo vệ đường dẫn siêu dữ liệu như `.git`, `.codex`, `.agents`, ngăn chặn ghi đè độc hại | Đang xem xét |
| [#19778](https://github.com/openai/codex/pull/19778) | **Thêm hooks/list app-server RPC** | Thêm RPC `hooks/list`, hỗ trợ TUI/App hiển thị và quản lý các hook đã kích hoạt/vô hiệu hóa, cung cấp cơ sở hạ tầng cho hệ sinh thái plugin | Đã xem xét mã |
| [#19892](https://github.com/openai/codex/pull/19892) | **Tái cấu trúc API hệ thống tệp exec-server thành codex-file-system** | Trích xuất loại và trait hệ thống tệp thành crate độc lập `codex-file-system`, loại bỏ sự phụ thuộc tuần hoàn của `codex-config` vào `exec-server`, tách rời kiến trúc | 🆕 Đã gửi mới |
| [#17373](https://github.com/openai/codex/pull/17373) | **app-server: chạy RPC đã khởi tạo với tuần tự hóa theo khóa** | RPC có trạng thái thực thi tuần tự theo khóa, tránh tình trạng tranh chấp, đặt nền móng cho độ ổn định của phiên đồng thời | Đang lặp lại |
| [#19456](https://github.com/openai/codex/pull/19456) | **Thêm API gỡ cài đặt plugin từ xa** | Khả năng gỡ cài đặt plugin từ xa, hỗ trợ `pluginId` + tùy chọn chỉ định marketplace, hoàn thiện quản lý vòng đời plugin | Đang xem xét |
| [#19481](https://github.com/openai/codex/pull/19481) | **Xóa ảnh chụp nhanh ma** | Loại bỏ khái niệm `GhostCommit` của API Responses, undo trở thành không có thao tác và nhắc nhở chức năng đã ngừng hoạt động, xóa nợ kỹ thuật | Đang xem xét |
| [#19773](https://github.com/openai/codex/pull/19773) | **permissions: yêu cầu profiles trong trạng thái luồng TUI** | `ThreadSessionState` bắt buộc `PermissionProfile`, loại bỏ trường legacy `sandbox` tùy chọn, thống nhất mô hình quyền | 🆕 PR dòng quyền |
| [#19775](https://github.com/openai/codex/pull/19775) | **permissions: suy ra phép chiếu sandbox ảnh chụp nhanh** | Trạng thái quyền ảnh chụp nhanh suy ra từ `PermissionProfile`, loại bỏ xung đột thẩm quyền kép giữa `sandbox_policy` và `profile` | 🆕 PR dòng quyền |
| [#19846-19849](https://github.com/openai/codex/pull/19846) | **Thêm nguyên tắc chính sách đường dẫn được bảo tồn + triển khai nền tảng** | Thêm nguyên tắc chính sách "đường dẫn được bảo tồn", và triển khai trên Seatbelt(macOS)/bubblewrap(Linux)/shell preflight, hình thành chuỗi bảo vệ hoàn chỉnh | 5 PRs gửi cùng ngày |

> **Xu hướng kiến trúc**: Tái cấu trúc quyền do `evawong-oai` và `bolinfest` dẫn đầu là chủ đề kỹ thuật cốt lõi hôm nay, từ nguyên tắc chính sách → sandbox nền tảng → trạng thái phiên → suy ra ảnh chụp nhanh, thay thế toàn diện mô hình quyền cũ.

---

## 5. Xu hướng nhu cầu chức năng

```
┌─────────────────────────────────────────┐
│  🔷 Khả năng phát triển từ xa (Remote Dev/Control)   │ ← Mức độ nóng cao nhất, chưa được đáp ứng lâu dài
│     · Phát triển từ xa SSH/WSL trên phiên bản desktop (#10450)
│     · Điều khiển CLI cục bộ từ di động (#9224, #19887)
│                                         │
│  🔷 Cân bằng cửa sổ ngữ cảnh mô hình                   │ ← Chênh lệch GPT-5.5 1M vs 400K
│     · API và khả năng sản phẩm không nhất quán (#19464)
│                                         │
│  🔷 Minh bạch chi phí và kiểm soát sử dụng                   │ ← Khu vực phàn nàn thường xuyên
│     · Polling nền tốn Token (#13733)
│     · Tạo bộ nhớ khi không hoạt động làm lãng phí hạn ngạch (#19732)
│     · Hiển thị hạn ngạch bất thường/biến mất (#19242, #19888)
│                                         │
│  🔷 Độ ổn định tích hợp IDE                       │ ← Trải nghiệm cơ bản
│     · Tiện ích mở rộng VS Code mất lịch sử phiên (#18993)
│     · Đồng bộ hóa tên luồng giữa các nền tảng (#13470)
│                                         │
│  🔷 Hệ sinh thái mô hình/tùy chỉnh cục bộ                  │ ← Biên nhưng đang phát triển
│     · Tương thích MCP + Ollama (#19871)
│     · Chậm trễ mô hình Azure GCC High (#19222)
│                                         │
│  🔷 Bảo mật và tuân thủ                           │ ← Ngưỡng áp dụng doanh nghiệp
│     · Tinh chỉnh chi tiết quyền sandbox (đang tái cấu trúc)
│     · Trang quét bảo mật 404 (#18903, #19793)
└─────────────────────────────────────────┘
```

---

## 6. Điểm quan tâm của nhà phát triển

| Loại điểm đau | Biểu hiện cụ thể | Đối tượng ảnh hưởng |
|:---|:---|:---|
| **💸 Chi phí không thể dự đoán** | Polling tác vụ nền mang theo toàn bộ lịch sử, tạo bộ nhớ khi không hoạt động tiêu tốn hạn ngạch, đặt lại hạn ngạch tuần ban đầu của người dùng Business/Pro,... thiết kế này khiến chi phí sử dụng không đồng bộ với hoạt động thực tế | Người dùng trả phí Business/Pro |
| **🔌 Công dân hạng hai trên Windows** | Lỗi khởi động PowerShell, lỗi giải mã đường dẫn và các lỗi dành riêng cho Windows sửa chữa chậm, nhu cầu phát triển từ xa cũng bị ám chỉ "ưu tiên đảm bảo macOS" | Nhà phát triển Windows |
| **📱 Vòng lặp khép kín di động bị đứt gãy** | Tab Codex của ChatGPT App chỉ có thể truy vấn đơn giản, không thể tái sử dụng ngữ cảnh phiên đầy đủ của phiên bản desktop, làm đứt gãy quy trình làm việc giữa các thiết bị | Người dùng đa thiết bị |
| **🧩 Hệ sinh thái Plugin/MCP mong manh** | Nâng cấp phiên bản thường xuyên làm hỏng kết hợp mô hình cục bộ + MCP, thiếu cam kết kiểm thử tương thích | Người dùng tự lưu trữ/nhạy cảm về quyền riêng tư |
| **🪟 Thông tin cửa sổ ngữ cảnh không đối xứng** | Tài liệu chính thức và hiển thị bảng điều khiển thực tế không nhất quán, nhà phát triển khó đưa ra quyết định kiến trúc | Người bảo trì kho mã nguồn lớn |

---

*Nhật ký dựa trên dữ liệu công khai của github.com/openai/codex, không đại diện cho lập trường chính thức của OpenAI.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Nhật ký cập nhật cộng đồng Gemini CLI | 2026-04-28

## Tóm tắt hôm nay

Cộng đồng hôm nay tập trung vào hai chủ đề cốt lõi: **tăng cường bảo mật** và **giới hạn quy mô công cụ**. Phiên bản v0.41.0-nightly đã phát hành, giới thiệu tải `.env` an toàn trong chế độ headless và cơ chế tin cậy khu vực làm việc; đồng thời, PR quan trọng đã giải quyết vấn đề "kích hoạt hơn 128 công cụ gây lỗi 400" đã làm phiền người dùng trong thời gian dài. Các vấn đề liên quan đến quyền và xác thực tiếp tục lan rộng, lỗi 403 của người đăng ký Google One AI Premium vẫn là điểm có tiếng vang lớn nhất trong cộng đồng.

---

## Phát hành phiên bản

### v0.41.0-nightly.20260427.g42587de73
| Thuộc tính | Nội dung |
|:---|:---|
| Thời gian phát hành | 2026-04-27 |
| Tải xuống | [GitHub Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.41.0-nightly.20260427.g42587de73) |

**Nội dung cập nhật:**
- **fix(core)**: Tối ưu hóa logic kích hoạt gợi ý lệnh `list`, chỉ hiển thị khi đầu vào trống, giảm nhiễu ([#25821](https://github.com/google-gemini/gemini-cli/pull/25821))
- **feat(cli)**: Triển khai tải tệp `.env` an toàn trong chế độ headless, và bắt buộc xác minh tin cậy khu vực làm việc, nâng cao bảo mật cho các kịch bản CI/tự động hóa (bởi @ehedlund)

---

## Issues cộng đồng nóng (10 mục)

| # | Tiêu đề | Trạng thái | Bình luận | 👍 | Điểm xem xét cốt lõi |
|:---|:---|:---|:---:|:---:|:---|
| [#24517](https://github.com/google-gemini/gemini-cli/issues/24517) | Người đăng ký Google One AI Premium lỗi 403 PERMISSION_DENIED | 🔴 MỞ | **152** | 61 | **Điểm đau có tiếng vang lớn nhất cộng đồng**。CLI nhận dạng đúng cấp độ đăng ký là "Gemini Code Assist in Google One AI Pro", nhưng yêu cầu API bị từ chối trước khi tiêu thụ token. Ảnh hưởng đến trải nghiệm cốt lõi của người dùng trả phí, nghi ngờ lỗi ánh xạ quyền ở phía nền tảng. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Đánh giá ảnh hưởng đọc/tìm kiếm/ánh xạ tệp nhận biết AST | 🔴 MỞ | 5 | 1 | **EPIC cấp kiến trúc**。Khám phá khả năng sử dụng công cụ AST (ví dụ: tilth/glyph) để đọc ranh giới phương thức chính xác, giảm lãng phí token, nâng cao hiệu quả điều hướng kho mã nguồn, có thể định hình lại khả năng hiểu mã của tác tử. |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Tác tử phụ MAX_TURNS bị gián đoạn được ngụy trang thành GOAL thành công | 🔴 MỞ | 4 | 2 | **Lỗ hổng độ tin cậy**。Sau khi đạt số lượt tối đa, `codebase_investigator` vẫn báo trạng thái thành công, khiến tác tử chính nhận định sai nhiệm vụ đã hoàn thành, che giấu sự gián đoạn thực tế, ảnh hưởng đến độ tin cậy của nhiệm vụ nghiên cứu phức tạp. |
| [#24115](https://github.com/google-gemini/gemini-cli/issues/24115) | Đầu ra tiếng Trung bất ngờ trong cuộc trò chuyện tiếng Anh | 🔴 MỞ | 4 | 0 | **Lỗi bản địa hóa**。Mô hình xen lẫn phản hồi tiếng Trung trong cuộc trò chuyện tiếng Anh thuần túy, nghi ngờ do lời nhắc hệ thống hoặc ô nhiễm dữ liệu đào tạo, người dùng cần cung cấp JSON lịch sử trò chuyện để hỗ trợ chẩn đoán. |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | Liên tục hỏi lại quyền đối với cùng một tệp | 🔴 MỞ | 3 | 0 | **Ma sát UX**。Tùy chọn "Cho phép lần này/Cho phép tất cả các phiên sau" không hoạt động ngắt quãng, trạng thái quyền không được lưu trữ, làm gián đoạn quy trình làm việc thường xuyên. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Giả chết sau khi lệnh Shell hoàn tất, hiển thị "chờ nhập" | 🔴 MỞ | 2 | 3 | **Lỗi đồng bộ trạng thái thiết bị đầu cuối**。Sau khi thực thi lệnh đơn giản, shell đã kết thúc, nhưng CLI vẫn đánh dấu là đang hoạt động và chờ nhập, chặn các thao tác tiếp theo. |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | Mô hình tạo tập lệnh tạm thời ở vị trí ngẫu nhiên | 🔴 MỞ | 2 | 0 | **Ô nhiễm khu vực làm việc**。Sau khi giới hạn thực thi shell, mô hình chuyển sang tạo các tập lệnh chỉnh sửa phân tán, tăng gánh nặng làm sạch trước khi commit, cần chuẩn hóa chiến lược quản lý tệp tạm thời. |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | Lỗi 400 khi kích hoạt >128 công cụ | 🔴 MỞ | 1 | 0 | **Giới hạn cứng API**。Số lượng công cụ tối đa của Gemini API là 128, hiện tại không có giới hạn thông minh, trực tiếp dẫn đến lỗi yêu cầu. Đã có PR sửa lỗi tương ứng ([#26084](https://github.com/google-gemini/gemini-cli/pull/26084)). |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | Định tuyến bộ nhớ: tách biệt toàn cục vs cấp dự án | 🔴 MỞ | 1 | 2 | **Cơ sở hạ tầng cá nhân hóa**。Xác định ranh giới lưu trữ giữa sở thích người dùng (`~/.gemini/`) và quy tắc cụ thể của kho mã nguồn (`.gemini/`), là thiết kế quan trọng cho hệ thống bộ nhớ dài hạn. |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Tác tử nên ngăn chặn/khuyên can các thao tác phá hoại | 🔴 MỞ | 1 | 1 | **Hàng rào bảo mật**。Cơ chế tự động khuyên can các lệnh nguy hiểm như `git reset --force`, giới hạn hành vi của mô hình trong các bối cảnh thao tác Git phức tạp, sửa đổi DB, v.v. |

---

## Tiến trình PR quan trọng (10 mục)

| # | Tiêu đề | Trạng thái | Tác giả | Nội dung chức năng/sửa lỗi |
|:---|:---|:---|:---|:---|
| [#26084](https://github.com/google-gemini/gemini-cli/pull/26084) | Sửa lỗi 400 khi >128 công cụ | 🔵 MỞ | gemini-cli-robot | **Sửa lỗi cốt lõi**。`ToolRegistry` bổ sung `smartLimitTools`: ưu tiên giữ lại công cụ tích hợp sẵn → công cụ động được sắp xếp theo tần suất sử dụng → giới hạn cứng ở 128, giải quyết [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)。 |
| [#25319](https://github.com/google-gemini/gemini-cli/pull/25319) | Cơ chế xác minh sâu | 🔵 MỞ | gundermanc | **Cơ sở hạ tầng chất lượng**。Ưu tiên P1, xây dựng lớp xác minh nghiêm ngặt hơn, thiết kế cụ thể đang chờ công bố。 |
| [#25945](https://github.com/google-gemini/gemini-cli/pull/25945) | Robot phân tích chỉ số thời gian | 🔵 MỞ | gundermanc | **Quản trị tự động**。Tác tử phân tích chỉ số theo thời gian trong đêm, tự động gửi PR đề xuất tối ưu hóa quản lý kho (ví dụ: quy trình phân luồng tự động khi tải cao)。 |
| [#26063](https://github.com/google-gemini/gemini-cli/pull/26063) | Thắt chặt quyền thư mục tạm thời dự án | 🔵 MỞ | pmenic | **Tăng cường bảo mật**。Giới hạn quyền truy cập vào thư mục nhạy cảm trong `~/.gemini/` (lịch sử trò chuyện, nhật ký tác tử, bộ nhớ, điểm kiểm tra, v.v.), đóng [#24743](https://github.com/google-gemini/gemini-cli/issues/24743)。 |
| [#26073](https://github.com/google-gemini/gemini-cli/pull/26073) | Sửa lỗi tệp cấu hình chung | 🔵 MỞ | joshualitt | Sửa lỗi còn lại của profile generalist, đóng [#26072](https://github.com/google-gemini/gemini-cli/issues/26072)。 |
| [#26078](https://github.com/google-gemini/gemini-cli/pull/26078) | DevTools giữ lại tiêu đề Request | 🔵 MỞ | Adib234 | **Trải nghiệm gỡ lỗi**。Sửa lỗi mất headers/method/body khi truyền tham số qua đối tượng `Request` trong `ActivityLogger.patchGlobalFetch`, đảm bảo tính toàn vẹn của theo dõi yêu cầu DevTools。 |
| [#23608](https://github.com/google-gemini/gemini-cli/pull/23608) | Tác tử phụ nhận biết chế độ phê duyệt | 🔵 MỞ | akh64bit | **Tính nhất quán cộng tác**。Tiêm ngữ cảnh Chế độ Lập kế hoạch/Chế độ Tự động Chỉnh sửa vào tác tử phụ, tránh việc chúng rơi vào vòng lặp lỗi do không biết, sửa lỗi [#23582](https://github.com/google-gemini/gemini-cli/issues/23582)。 |
| [#21873](https://github.com/google-gemini/gemini-cli/pull/21873) | Phân tích xung đột tên công cụ MCP + sửa lỗi treo gọi tác tử phụ | 🔵 MỞ | adamoutler | **Khả năng tương tác MCP**。Hỗ trợ tác tử phụ sử dụng tên không đầy đủ để gọi công cụ MCP, ánh xạ động trở lại tên đầy đủ; loại bỏ hack tập lệnh shell wrapper trong quá trình điều phối。 |
| [#21265](https://github.com/google-gemini/gemini-cli/pull/21265) | Độ bền lỗi INVALID_ARGUMENT của tác tử phụ | 🔵 MỞ | kammeows | **Phục hồi lỗi**。Phân tích mã lỗi 400 của Gemini API, cung cấp ngữ cảnh lỗi rõ ràng hơn cho luồng hoạt động của tác tử và CLI, nâng cao khả năng phục hồi của tác tử chính。 |
| [#25291](https://github.com/google-gemini/gemini-cli/pull/25291) | Lời nhắc lỗi thân thiện cho khóa API không hợp lệ | 🔵 MỞ | aniruddhaadak80 | **Trải nghiệm xác thực**。Định dạng chuỗi bảo mật ngăn ngừa sự cố SDK gốc, khớp mẫu `API_KEY_INVALID` sau đó hướng dẫn người dùng thực hiện `\gemini login`, đóng [#23535](https://github.com/google-gemini/gemini-cli/issues/23535)。 |

---

## Xu hướng nhu cầu chức năng

Dựa trên phân tích 50 Issues đang hoạt động, sự quan tâm của cộng đồng tập trung vào năm hướng chính:

| Xu hướng | Issue đại diện | Tín hiệu nóng |
|:---|:---|:---|
| **1. Hệ thống xác thực và quyền** | #24517, #24916, #25291, #26079 | 🔥🔥🔥 Tần suất cao nhất. Ánh xạ quyền cấp độ đăng ký, lưu trữ quyền, xử lý lỗi khóa API, xác thực Cloud Shell, bao phủ toàn bộ vòng đời người dùng |
| **2. Độ tin cậy và minh bạch của Tác tử** | #22323, #22672, #23571, #23897, #24037 | 🔥🔥🔥 Điểm đau cốt lõi. Báo cáo sai trạng thái nhiệm vụ, bảo vệ thao tác phá hoại, quản lý tệp tạm thời, hoàn thiện hệ thống đánh giá |
| **3. Thông minh mã nguồn và hỗ trợ AST** | #22745, #22746, #24246 | 🔥🔥 Tiến hóa kiến trúc. Từ gọi công cụ cấp văn bản đến thao tác cú pháp nhận biết, giảm lãng phí token, nâng cao độ chính xác |
| **4. Hệ thống bộ nhớ và cá nhân hóa** | #22819, #22809, #25550 | 🔥🔥 Đầu tư dài hạn. Tách bộ nhớ toàn cục/dự án, ghi bộ nhớ chủ động, đường dẫn bộ nhớ đồng hành IDE |
| **5. Trải nghiệm thiết bị đầu cuối và khả năng truy cập** | #25166, #25216, #25218, #24915, #24202 | 🔥🔥 Hoàn thiện cơ bản. Tương thích SSH, hiển thị bảng trình đọc màn hình, xử lý đường dẫn Windows, hiệu suất cuộn |

---

## Điểm quan tâm của nhà phát triển

### 🔴 Điểm đau cản trở
- **Lỗ hổng tường phí**：Người đăng ký Google One AI Premium gặp lỗi 403 ([#24517](https://github.com/google-gemini/gemini-cli/issues/24517)), ánh xạ danh tính-quyền ở phía nền tảng có đứt gãy, ảnh hưởng trực tiếp đến chuyển đổi người dùng thương mại
- **Lời nói dối của Tác tử**：Tác tử phụ che giấu lỗi `MAX_TURNS` bằng `GOAL` thành công ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), phá vỡ nền tảng tin cậy hợp tác người-máy

### 🟡 Ma sát thường gặp
- **Mệt mỏi vì quyền**：Liên tục hiện cửa sổ cấp quyền cho cùng một tệp, lưu trữ trạng thái không đáng tin cậy ([#24916](https://github.com/google-gemini/gemini-cli/issues/24916))
- **Thiết bị đầu cuối giả chết**：Lệnh Shell đã hoàn tất nhưng UI chưa đồng bộ, chặn quy trình làm việc ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))
- **Ô nhiễm khu vực làm việc**：Tập lệnh tạm thời rải rác khắp nơi, tăng gánh nặng làm sạch trước khi commit ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571))

### 🟢 Hướng mong đợi
- **Quản lý công cụ thông minh hơn**：Xử lý thông minh giới hạn 128 công cụ (đã có PR), thay vì cắt giảm thô bạo hoặc gây lỗi
- **Hỗ trợ gốc AST**：Từ "đọc tệp đoán cấu trúc" đến "thao tác nút cú pháp chính xác", giảm chi phí tương tác đa vòng
- **Bộ nhớ như cấu hình**：Sở thích người dùng tự động tích lũy thành ngữ cảnh, giảm mô tả lặp lại (ví dụ: kiểu thụt lề, định dạng thông báo commit)

---

*Nhật ký dựa trên dữ liệu công khai của google-gemini/gemini-cli. Số Issue/PR có thể nhấp để chuyển đến văn bản gốc.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# Nhật ký cập nhật cộng đồng GitHub Copilot CLI | 2026-04-28

## 1. Tóm tắt hôm nay

Copilot CLI đã phát hành **v1.0.37**, mang đến khả năng lưu trữ quyền dựa trên vị trí, hỗ trợ hoàn thành shell gốc và tối ưu hóa các phím tắt tương tác. Mức độ hoạt động của Issues cộng đồng cực kỳ cao, 39 mục được cập nhật trong 24 giờ qua, tính minh bạch phí mô hình, cô lập plugin và vòng l