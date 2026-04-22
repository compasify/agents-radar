# Cập nhật Cộng đồng Công cụ AI CLI Hàng ngày 2026-04-22

> Thời gian tạo: 2026-04-22 00:13 UTC | Số lượng công cụ được bao phủ: 8

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

# Báo cáo Phân tích So sánh Ngang Hệ sinh thái Công cụ AI CLI | 2026-04-22

---

## 1. Toàn cảnh Hệ sinh thái

Hệ sinh thái công cụ AI CLI hiện đang có bước chuyển đổi quan trọng từ **khách hàng mô hình đơn lẻ** sang **nền tảng điều phối đa Agent**. Các công cụ hàng đầu như Claude Code, OpenAI Codex, Kimi Code đang tích cực thúc đẩy kiến trúc proxy con và tiêu chuẩn hóa hệ sinh thái MCP, trong khi giao thức ACP trở thành giao diện chung cho việc tích hợp IDE. Đồng thời, **tính minh bạch về phí, khả năng kiểm soát phiên bản mô hình và độ ổn định của hội thoại dài** đã trở thành những điểm yếu chung vượt qua ranh giới công cụ. Nhu cầu về "độ tin cậy cấp độ sản xuất" của cộng đồng đã vượt xa sự đổi mới chức năng. Các công cụ nội địa (Kimi Code, Qwen Code) đang tăng tốc đuổi kịp, nhưng vẫn còn nợ cơ sở hạ tầng về hệ thống chứng thực và khả năng tương thích mô hình quốc tế.

---

## 2. So sánh Mức độ Hoạt động của Từng Công cụ

| Công cụ | Số lượng Issue mới trong ngày | Số lượng PR hoạt động trong ngày | Phát hành Phiên bản | Động thái Cốt lõi |
|:---|:---:|:---:|:---|:---|
| **Claude Code** | ~10 vấn đề trọng tâm | 4 | v2.1.117 | Mở Fork Subagent, tải chủ luồng MCP; #16157 tranh cãi về giới hạn tốc độ 1452 bình luận |
| **OpenAI Codex** | ~8 vấn đề trọng tâm | 10+ | rust-v0.123.0-alpha.2~α7 | bolinfest hoàn thành 13 PR tái cấu trúc PermissionProfile; lặp lại alpha dày đặc |
| **Gemini CLI** | ~6 vấn đề trọng tâm | 10 | v0.39.0-preview.1 | Sửa lỗi khẩn cấp thư mục kế hoạch lồng nhau; các PR về tăng tốc khởi động, tệp RC Shell,... dày đặc |
| **GitHub Copilot CLI** | ~5 vấn đề trọng tâm | 2 | v1.0.35-0/1/2 | Triển khai giao thức ACP; khiếu nại cụm về tính khả dụng của mô hình Opus; tích hợp doanh nghiệp Hook HTTP |
| **Kimi Code** | **25 vấn đề** | **13 vấn đề** | — | Sửa lỗi treo terminal + rò rỉ MCP; tranh cãi chính sách mô hình K2.5/2.6; mở rộng hệ thống Hook |
| **OpenCode** | ~10 vấn đề trọng tâm | 10+ | v1.14.20 | Thích ứng khẩn cấp với thay đổi giao thức Anthropic; tích hợp Kimi K2.6; di chuyển Effect Schema |
| **Pi** | **50 vấn đề hoạt động** | 10 | v0.68.0 | Phiên bản gây ra lỗi hồi quy Bedrock/tương thích cụm; API mở rộng @mention mới |
| **Qwen Code** | **5+ 401 cụm** | 10 | v0.15.0-preview.1 | Sự cố chứng thực bùng nổ; SDK Python, tìm kiếm GLM tương thích trong nước; ACP Hooks |

> **Thứ tự Hoạt động**: Pi（50 Issues）> Kimi Code（25 Issues）> OpenCode/Qwen Code/Gemini CLI（10+ PR）> Claude Code/OpenAI Codix（tái cấu trúc cấp độ kiến trúc）> Copilot CLI（lặp lại phiên bản）

---

## 3. Hướng Chức năng Quan tâm Chung

| Hướng | Công cụ liên quan | Yêu cầu Cụ thể |
|:---|:---|:---|
| **🔒 Quyền và Sandboxing Tinh chỉnh** | Codex, Claude Code, Gemini CLI, Kimi Code | Tái cấu trúc PermissionProfile của Codex; giới hạn ghi của proxy con Claude Code; xác minh lệnh lồng nhau của Gemini; hooks PreToolUse của Kimi |
| **🤖 Kiến trúc Proxy Con / Đa Agent** | Claude Code, Qwen Code, Gemini CLI, Kimi Code | Mở Fork Subagent của Claude; #2409 của Qwen tương đương Claude; vấn đề đánh dấu gián đoạn của Gemini trong Agent con; lỗi 401 của proxy con OAuth Kimi |
| **⚡ Quản lý Hiệu suất và Tài nguyên** | Claude Code, Codex, Gemini CLI, Kimi Code, Pi | Tỷ lệ trúng bộ nhớ đệm Claude giảm mạnh 41-99pp; Codex đốt token / CPU 120%+; Gemini quét toàn bộ cơ sở mã; Kimi treo terminal; Pi PTY chặn song song |
| **🔌 Độ ổn định Hệ sinh thái MCP** | Claude Code, Codex, Kimi Code, OpenCode | Chủ luồng hóa MCP của Claude; tiến trình mồ côi #15/492 của Codex; rò rỉ kết nối Kimi; mất kết quả công cụ OpenCode |
| **🪟 Khả năng Tương thích Windows** | Codex, Gemini CLI, Kimi Code, OpenCode, Copilot CLI | Độ trễ nhập liệu TUI của Codex; phân tích đường dẫn / ổ đĩa A: của Gemini; lỗi `/login` của Kimi; sửa lỗi nhập liệu động OpenCode; giật màn hình Copilot |
| **📊 Tính minh bạch Phí / Hạn ngạch** | Claude Code, Codex, Copilot CLI | "Không đúng như tên gọi" của gói đăng ký Max Claude; token Business bất thường của Codex; thu hồi Opus không báo trước của Copilot |
| **🧠 Khả năng Kiểm soát Phiên bản Mô hình** | Claude Code, Copilot CLI, Kimi Code | Tranh cãi về việc xóa Opus 4.6 của Claude; cụm khả dụng Opus 4.5/4.6 của Copilot; yêu cầu giữ lại K2.5 của Kimi |

---

## 4. Phân tích Định vị Khác biệt

| Công cụ | Trọng tâm Chức năng | Người dùng Mục tiêu | Lộ trình Kỹ thuật |
|:---|:---|:---|:---|
| **Claude Code** | Nhiệm vụ kỹ thuật phức tạp, song song đa Agent, tích hợp IDE sâu | Nhà phát triển chuyên nghiệp, nhóm kỹ thuật doanh nghiệp | Lõi đóng + mở dần (Fork Subagent); gốc MCP; lợi thế kinh tế bộ nhớ đệm gợi ý |
| **OpenAI Codex** | Bảo mật sandbox cấp doanh nghiệp, triển khai đa đám mây, chạy Daemon dài hạn | Doanh nghiệp lớn, tình huống nhạy cảm về tuân thủ | Viết lại CLI Rust; quyền thống nhất PermissionProfile; gốc AWS SigV4; cô lập danh tính Agent |
| **Gemini CLI** | Hiệu suất khởi động, tích hợp hệ sinh thái Google, phân tích mã nhận biết AST | Người dùng Google Cloud, nhà phát triển nhạy cảm về hiệu suất | Kiến trúc không đồng bộ hóa; phân tích sâu `codebase_investigator`; điều khiển bằng cấu hình thử nghiệm |
| **GitHub Copilot CLI** | Tích hợp liền mạch IDE, gốc quy trình làm việc GitHub, tiêu chuẩn hóa ACP | Người dùng hiện tại của VS Code/Copilot, nhà phát triển nhóm | "LSP cho Agent AI" ACP; tích hợp không máy chủ Hook HTTP; chịu lỗi giảm dần tự động |
| **Kimi Code** | Đổi mới trải nghiệm terminal, hệ sinh thái mở rộng Hook, ưu tiên mô hình trong nước | Nhà phát triển Trung Quốc, người dùng terminal chuyên sâu | Thanh tiến trình trực quan, nhập liệu giọng nói; tích hợp rtk giảm token 60-90%; ngữ cảnh tạm thời RalphFlow |
| **OpenCode** | Điều phối đa mô hình, hệ sinh thái plugin, trải nghiệm máy tính đa nền tảng | Người dùng chuyển đổi đa mô hình, nhà phát triển plugin | Loại an toàn Effect Schema; Plugin SDK v2; phiên PTY bền vững; TUI hai đầu (desktop/mobile) |
| **Pi** | Thân thiện với mô hình cục bộ/mã nguồn mở, khả năng kết hợp mở rộng, cấu hình như mã | Người dùng tự lưu trữ, nhà phát triển nhạy cảm về quyền riêng tư, tác giả mở rộng | Lớp xác thực TypeBox; tương thích gọi công cụ XML; tiêu chuẩn mở rộng `@mention`; mở rộng đường dẫn settings.json |
| **Qwen Code** | Tích hợp hệ sinh thái nội địa, SDK Python, khả năng kiểm soát Agent con | Nhà phát triển Trung Quốc, người dùng Alibaba Cloud, tích hợp theo chương trình | Hỗ trợ đầy đủ ACP Hooks; tương thích tìm kiếm GLM/Byte; tối ưu kho lớn Worker Threads; bảng Todo gắn kết |

---

## 5. Độ Phổ biến và Độ Trưởng thành của Cộng đồng

### 🔥 Độ phổ biến cao · Giai đoạn lặp lại nhanh

| Công cụ | Chỉ số | Đặc điểm |
|:---|:---|:---|
| **Kimi Code** | 25 Issues/13 PR/24h | Đổi mới trải nghiệm terminal mạnh mẽ, hệ sinh thái Hook mở, nhưng nợ cơ sở hạ tầng về kiến trúc chứng thực, khả năng tương thích Windows rõ ràng |
| **Pi** | 50 Issues hoạt động/cụm lỗi phiên bản | API mở rộng lặp lại tích cực, thay đổi mạnh mẽ của v0.68.0 gây ra sự cố tương thích, đang trong giai đoạn "bùng nổ chức năng - đau đớn về độ ổn định" |
| **OpenCode** | 10+ PR/di chuyển Effect Schema | Đầu tư lớn vào hiện đại hóa kiến trúc, phản ứng nhanh chóng với sự thích ứng đa mô hình (triển khai nhanh Kimi K2.6), độ ổn định TUI cần củng cố |

### ⚙️ Giai đoạn đào sâu Kiến trúc

| Công cụ | Chỉ số | Đặc điểm |
|:---|:---|:---|
| **OpenAI Codex** | 13 PR tái cấu trúc quyền liên tục/6 phiên bản alpha | Di chuyển PermissionProfile do bolinfest dẫn đầu cho thấy sự trưởng thành về kỹ thuật, nhưng chi phí token, suy giảm hiệu suất chưa được giải quyết |
| **Claude Code** | Tranh cãi cấp độ hàng năm #16157/1452 bình luận | Sự gia tăng về khả năng mở chức năng (Fork Subagent) và sự kiểm soát thương mại (tính minh bạch giới hạn tốc độ không rõ ràng) tạo ra căng thẳng gay gắt, gây áp lực lên niềm tin cộng đồng |

### 🏢 Giai đoạn ổn định Doanh nghiệp

| Công cụ | Chỉ số | Đặc điểm |
|:---|:---|:---|
| **GitHub Copilot CLI** | 3 phiên bản/triển khai ACP | Tiêu chuẩn hóa giao thức dẫn đầu, nhưng "tính không chắc chắn của hợp đồng" về khả năng sẵn có của mô hình làm xói mòn niềm tin doanh nghiệp |
| **Gemini CLI** | Bản vá khẩn cấp/PR hiệu suất dày đặc | Lợi thế cơ sở hạ tầng của Google, nhưng 58% Issue chỉ dành cho người bảo trì cho thấy khả năng hiển thị cộng đồng hạn chế |

### 🌱 Giai đoạn xây dựng Hệ sinh thái

| Công cụ | Chỉ số | Đặc điểm |
|:---|:---|:---|
| **Qwen Code** | 401 cụm/PR SDK Python | Nhu cầu thay thế nội địa mạnh mẽ, hệ thống chứng thực yếu kém, phi tập trung hóa SDK và tìm kiếm là điểm đột phá quan trọng |

---

## 6. Tín hiệu Xu hướng Đáng chú ý

| Tín hiệu | Hỗ trợ Dữ liệu | Giá trị Tham khảo cho Nhà phát triển |
|:---|:---|:---|
| **"Khóa mô hình" trở thành nhu cầu cấp thiết** | Claude #49689（66👍）, Kimi #1925（Yêu cầu giữ lại K2.5）, Copilot #2873/#2867（cụm thu hồi Opus） | Môi trường sản xuất cần đánh giá **chiến lược phiên bản mô hình** của công cụ - nâng cấp bắt buộc vs. hỗ trợ dài hạn (LTS), tránh quy trình làm việc bị gián đoạn bởi bản cập nhật mô hình đơn lẻ |
| **Phân lớp giao thức ACP/MCP cố định** | Copilot #222 ACP đóng, chủ luồng hóa MCP của Claude, ACP Hooks của Qwen, sửa lỗi ACP #1957 của Kimi | Phát triển mở rộng nên ưu tiên thích ứng với ACP (tích hợp IDE) và MCP (hệ sinh thái công cụ), khả năng tương thích giao thức sẽ trở thành chỉ số cứng để lựa chọn công cụ |
| **"Phi tập trung hóa" ba yêu cầu** | #3496 của Qwen tìm kiếm phi Ali, #3464 mô hình phi đơn lẻ, #2427 cấu hình phi phức tạp; #3514 của Pi cấu hình có thể di chuyển | Nhà phát triển Trung Quốc đặc biệt quan tâm đến **lộ trình thay thế nội địa**; nhà phát triển toàn cầu quan tâm thiết kế **lớp trừu tượng nhà cung cấp** để tránh khóa đơn đám mây |
| **Tương tác Terminal trở thành điểm khác biệt về trải nghiệm** | #1972 của Kimi thanh tiến trình, #3492 của Pi cấu hình chiều rộng hình ảnh, #21343 của OpenCode chống cuộn ngược, #25712 của Gemini Shell RC | Chi tiết TUI (hiệu suất hiển thị, khả năng tùy chỉnh, tính đúng đắn ngữ nghĩa Unix) từ "tô điểm" thành "quan trọng để giữ chân", cảm giác gốc của terminal là cốt lõi khác biệt |
| **Chi phí ẩn của rò rỉ tài nguyên** | #18881 của Codex（492 tiến trình mồ côi）, #1984 của Kimi（rò rỉ kết nối MCP）, #51760 của Claude（ghi 4.86 TB） | Tình huống hội thoại dài / tự động hóa cần cơ chế **ngân sách tài nguyên** tích hợp (cgroup / Job Object / giới hạn đầu ra), hiện tại các công cụ đều thiếu biện pháp bảo vệ phổ biến |
| **Kiến trúc Hook / Plugin từ "trang trí" đến "phụ thuộc sản xuất"** | #1963 của Kimi tích hợp rtk giảm token 60-90%, SDK v2 #12042 của OpenCode, mở rộng @mention #3517 của Pi | Lựa chọn công cụ cần đánh giá **tính đầy đủ của các điểm mở rộng** - khả năng PreToolUse, ghi đè lệnh, gọi công cụ theo chương trình quyết định giới hạn trên của hệ sinh thái |

---

> **Đề xuất Quyết định**: Nếu theo đuổi **chiều sâu kỹ thuật và khả năng đa Agent**, Claude Code vẫn dẫn đầu nhưng cần chấp nhận sự không chắc chắn về chiến lược thương mại; Nếu coi trọng **tuân thủ doanh nghiệp và kiểm soát quyền chi tiết**, việc tái cấu trúc PermissionProfile của Codex đáng để theo dõi; Nếu cần **hệ sinh thái nội địa và đổi mới terminal**, Kimi Code lặp lại nhanh nhất nhưng cơ sở hạ tầng cần được củng cố; Nếu đánh giá cao **tự do đa mô hình và mở rộng plugin**, đầu tư hiện đại hóa kiến trúc của OpenCode có tính mở nhất.

---

## Báo cáo Chi tiết Từng Công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Điểm Nóng Cộng đồng Claude Code Skills

> Nguồn dữ liệu: [anthropics/skills](https://github.com/anthropics/skills)

# Báo cáo Điểm Nóng Cộng đồng Claude Code Skills (2026-04-22)

---

## 1. Xếp hạng Skills Phổ biến (theo mức độ quan tâm của cộng đồng)

| Xếp hạng | Skill | Mô tả Chức năng | Trạng thái | Tiêu điểm Thảo luận |
|:---|:---|:---|:---|:---|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | Kiểm soát chất lượng bố cục tài liệu do AI tạo: sửa lỗi cô lập, cô đơn, sai số thứ tự | 🟡 Mở | Được coi là "khả năng cơ bản mà mọi tài liệu Claude đều cần", giải quyết trải nghiệm cuối cùng cho nội dung do AI tạo |
| 2 | **[ODT skill](https://github.com/anthropics/skills/pull/486)** | Tạo định dạng OpenDocument (.odt/.ods), điền mẫu và chuyển đổi ODT → HTML | 🟡 Mở | Nhu cầu tuân thủ tiêu chuẩn tài liệu mở của doanh nghiệp / chính phủ mạnh mẽ, lấp đầy khoảng trống trong hệ sinh thái LibreOffice |
| 3 | **[skill-quality-analyzer + skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | Meta-skill: Đánh giá chất lượng 5 chiều và kiểm tra bảo mật cho chính Skill | 🟡 Mở | **Mô hình Meta-Skill**: Cộng đồng lần đầu tiên tập trung một cách có hệ thống vào chất lượng kỹ thuật và bảo mật chuỗi cung ứng của Skill |
| 4 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | Hướng dẫn kiểm thử toàn diện: Testing Trophy, mẫu AAA, kiểm thử thành phần React, E2E | 🟡 Mở | Phân lớp chiến lược kiểm thử và khung ra quyết định "kiểm tra cái gì / không kiểm tra cái gì" |
| 5 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | Tái cấu trúc kỹ năng thiết kế frontend: Nâng cao khả năng thực thi lệnh và khả năng hoàn thành trong một lượt hội thoại | 🟡 Mở | Triết lý thiết kế "khả năng hoạt động" của Skill - tránh trừu tượng hóa quá mức, đảm bảo Claude thực sự có thể thực thi |
| 6 | **[sensory](https://github.com/anthropics/skills/pull/806)** | Tự động hóa gốc macOS: Thay thế AppleScript/osascript cho Sử dụng Máy tính dựa trên ảnh chụp màn hình | 🟡 Mở | **Thiết kế phân lớp quyền** (Tier1/Tier2) gây tranh cãi, khám phá ranh giới an toàn của tự động hóa UI phi thị giác |
| 7 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | Hệ thống bộ nhớ bền vững giữa các cuộc hội thoại, gợi nhớ ngữ cảnh chủ động | 🟡 Mở | Kiến trúc bộ nhớ dài hạn của Agent: khi nào gợi nhớ, cấu trúc như thế nào, chiến lược suy giảm bộ nhớ |
| 8 | **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** | Kiểm toán làm sạch cơ sở mã: mã mồ côi, tệp không sử dụng, thiếu tài liệu, phình to cơ sở hạ tầng | 🟡 Mở | Quản trị có hệ thống nợ kỹ thuật, xuất CODEBASE-STATUS.md làm nguồn sự thật duy nhất |

---

## 2. Xu hướng Nhu cầu Cộng đồng (từ Issues được trích xuất)

| Hướng | Issue đại diện | Cường độ Nhu cầu | Yêu cầu Cốt lõi |
|:---|:---|:---|:---|
| **Quản trị Skill cấp Doanh nghiệp** | [#228](https://github.com/anthropics/skills/issues/228) Chia sẻ cấp tổ chức, [#492](https://github.com/anthropics/skills/issues/492) An toàn không gian tên | 🔥🔥🔥🔥🔥 | Từ công cụ cá nhân → Hợp tác nhóm: thư viện chia sẻ, quản lý quyền, ranh giới tin cậy (rủi ro lạm dụng không gian tên `anthropic/`) |
| **Tiêu chuẩn Kỹ thuật hóa Skill** | [#202](https://github.com/anthropics/skills/issues/202) Các thực tiễn tốt nhất của skill-creator, [#556](https://github.com/anthropics/skills/issues/556) Công cụ đánh giá bị lỗi | 🔥🔥🔥🔥🔥 | Khả năng bảo trì của bản thân kỹ năng: hiệu quả token, đánh giá tỷ lệ kích hoạt, độ mạnh mẽ của YAML, vòng lặp tối ưu hóa mô tả |
| **Tương tác Giao thức MCP** | [#16](https://github.com/anthropics/skills/issues/16) | 🔥🔥🔥🔥 | Chuyển đổi hai chiều Skill ↔ MCP: Đóng gói Skill thành API tiêu chuẩn hoặc để MCP trở thành giao thức cơ bản của Skill |
| **Triển khai Đa đám mây / Đa nền tảng** | [#29](https://github.com/anthropics/skills/issues/29) Tương thích Bedrock | 🔥🔥🔥🔥 | Thoát khỏi môi trường gốc của Claude Code, có thể chạy trên AWS/Azure/đám mây riêng |
| **Bao phủ Định dạng Tài liệu Toàn diện** | [#514](https://github.com/anthropics/skills/pull/514) Bố cục, [#486](https://github.com/anthropics/skills/pull/486) ODT, [#622](https://github.com/anthropics/skills/pull/622) HADS | 🔥🔥🔥🔥 | Vòng cuối cùng của quy trình làm việc tài liệu doanh nghiệp: từ tạo đến xuất bản cấp độ |
| **Bảo mật và Bộ nhớ Agent** | [#412](https://github.com/anthropics/skills/issues/412) Quản trị Agent, [#154](https://github.com/anthropics/skills/pull/154) Bộ nhớ bền vững | 🔥🔥🔥🔥 | Thực thi chính sách, phát hiện mối đe dọa, theo dõi kiểm toán, quản lý bộ nhớ dài hạn của hệ thống Agent AI |

---

## 3. Skills Tiềm năng Cao Chờ Hợp nhất (bình luận tích cực + giải quyết rõ ràng vấn đề)

| Skill | PR | Khả năng Hợp nhất | Giá trị Chính |
|:---|:---|:---|:---|
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | ⭐⭐⭐⭐⭐ | Skill cơ sở hạ tầng chung, ảnh hưởng đến tất cả đầu ra tài liệu; truy cập cấu hình bằng không |
| **ODT skill** | [#486](https://github.com/anthropics/skills/pull/486) | ⭐⭐⭐⭐⭐ | Nhu cầu tuân thủ khẩn cấp của chính phủ / EU / mã nguồn mở; tạo thành ma trận định dạng với skill docx/pdf hiện có |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | ⭐⭐⭐⭐⭐ | "Hướng dẫn quan điểm" về chiến lược kiểm thử, lấp đầy khoảng trống đảm bảo chất lượng sau khi tạo mã |
| **sensory** | [#806](https://github.com/anthropics/skills/pull/806) | ⭐⭐⭐⭐☆ | Mô hình mới về tự động hóa macOS: từ thị giác → API gốc; mô hình quyền có thể tái sử dụng cho các nền tảng khác |
| **skill-quality-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | ⭐⭐⭐⭐☆ | Khả năng tự nâng cấp hệ sinh thái: cho phép cộng đồng tự kiểm tra chất lượng Skill, giảm gánh nặng cho người bảo trì |
| **hads-convert** | [#622](https://github.com/anthropics/skills/pull/622) | ⭐⭐⭐⭐☆ | Middleware định dạng tài liệu: chi phí chuyển đổi một lần → tăng hiệu quả đọc AI vĩnh viễn |

> **Cụm Sửa chữa Gần đây**: Lubrsy706 liên tục gửi [#538](https://github.com/anthropics/skills/pull/538) [#539](https://github.com/anthropics/skills/pull/539) [#541](https://github.com/anthropics/skills/pull/541) sửa các trường hợp biên PDF/DOCX/skill-creator, cho thấy các kỹ năng tài liệu cốt lõi đang bước vào **giai đoạn đánh bóng độ ổn định**.

---

## 4. Nhận định Hệ sinh thái Skills

> **Cộng đồng đang chuyển từ "tích lũy chức năng" sang "quản trị kỹ thuật hóa"**: Các PR ban đầu tập trung vào khả năng của công cụ đơn lẻ (tạo hình ảnh, kết nối SAP), trong khi các điểm nóng Q1-Q2 2026 tập trung vào **Skill của Skill (meta-skill)**, **tiêu chuẩn tương tác đa nền tảng**, **cơ chế quản lý và chia sẻ cấp doanh nghiệp**, và **đánh bóng vòng cuối cùng về chất lượng đầu ra AI** - điều này đánh dấu hệ sinh thái Claude Code Skills chuyển từ giai đoạn Demo sang giai đoạn sẵn sàng sản xuất.

---

---

# Cập nhật Cộng đồng Claude Code Hàng ngày | 2026-04-22

## Xem nhanh Hôm nay

Mâu thuẫn cốt lõi của cộng đồng hôm nay tập trung vào **tranh cãi về giới hạn sử dụng của các cấp độ đăng ký** - người dùng đăng ký Max liên tục báo cáo gặp phải giới hạn tốc độ không hợp lý (#16157 đã đạt 1452 bình luận), đồng thời việc phát hành v2.1.117 mang lại hỗ trợ xây dựng bên ngoài cho Fork Subagent và khả năng tải MCP Servers trên luồng chính, cho thấy Anthropic đang đẩy nhanh quá trình mở hóa kiến trúc đa Agent.

---

## Phát hành Phiên bản

### [v2.1.117](https://github.com/anthropics/claude-code/releases/tag/v2.1.117)

| Mục cập nhật | Mô tả |
|--------|------|
| **Hỗ trợ xây dựng bên ngoài Fork Subagent** | Thông qua biến môi trường `CLAUDE_CODE_FORK_SUBAGENT=1`, bản dựng bên ngoài có thể kích hoạt proxy con Fork, phá vỡ giới hạn trước đây chỉ có thể sử dụng với bản dựng nội bộ |
| **Tải chủ luồng MCP Servers** | `mcpServers` trong Agent frontmatter hiện có thể được tải trong phiên Agent chủ luồng thông qua tham số `--agent`, đơn giản hóa cấu hình chuỗi công cụ |
| **Cải thiện tính bền vững `/model`** | Lựa chọn mô hình hiện có thể được giữ lại sau khi khởi động lại, ngay cả khi dự án cố định mô hình mặc định |

> **Giải thích Kỹ thuật**: Việc mở Fork Subagent là bước quan trọng về kỹ thuật, có nghĩa là quy trình CI/CD của bên thứ ba và quy trình xây dựng tùy chỉnh có thể tái sử dụng khả năng song song đa Agent của Claude Code; chủ luồng hóa MCP Server giảm chi phí tiến trình của lệnh gọi công cụ.

---

## Các Issue Trọng điểm Cộng đồng

| # | Trạng thái | Tiêu đề | Bình luận | 👍 | Điểm xem xét Cốt lõi |
|---|------|------|------|-----|---------|
| [#16157](https://github.com/anthropics/claude-code/issues/16157) | 🔴 MỞ | **[BUG] Ngay lập tức đạt giới hạn sử dụng với gói đăng ký Max** | 1452 | 681 | **Tranh cãi cấp độ hàng năm**. Người dùng trả phí gói Max báo cáo gần như ngay lập tức gặp giới hạn sử dụng, liên quan đến vấn đề minh bạch về phí và chính sách API. Tâm lý cộng đồng gay gắt, yêu cầu Anthropic làm rõ hạn ngạch thực tế cho từng cấp độ. |
| [#42796](https://github.com/anthropics/claude-code/issues/42796) | 🟢 ĐÃ ĐÓNG | **[MÔ HÌNH] Claude Code không thể sử dụng cho các tác vụ kỹ thuật phức tạp với các bản cập nhật tháng 2** | 565 | 2048 | **Đã đóng với số lượt thích cao**. 2048 👍 phản ánh sự đồng cảm rộng rãi - chất lượng tác vụ kỹ thuật phức tạp giảm sút sau bản cập nhật tháng 2. Trạng thái đóng gây ra câu hỏi "đã thực sự giải quyết chưa". |
| [#46987](https://github.com/anthropics/claude-code/issues/46987) | 🔴 MỞ | **[BUG] Lỗi API: Hết thời gian chờ luồng - đã nhận phản hồi một phần** | 108 | 97 | **Sự cố cơ sở hạ tầng tần suất cao**. Hết thời gian chờ phản hồi luồng trên nền tảng macOS, tạo thành mẫu chéo nền tảng với #47841 (vấn đề tương tự trên web), chỉ ra độ ổn định của cổng API Anthropic. |
| [#3471](https://github.com/anthropics/claude-code/issues/3471) | 🔴 MỞ | **[BUG] Quá nhiều lỗi chỉnh sửa tệp** | 54 | 34 | **Nợ độ tin cậy của công cụ**. Công cụ chỉnh sửa tệp thường xuyên báo lỗi ảnh hưởng đến quy trình làm việc cốt lõi, kéo dài từ tháng 7 năm 2025 đến nay, phản ánh nợ về độ mạnh mẽ của lệnh gọi công cụ. |
| [#49322](https://github.com/anthropics/claude-code/issues/49322) | 🔴 MỞ | **[BUG] Tóm tắt suy nghĩ của Opus 4.7 không được hiển thị trong extension VS Code** | 18 | 17 | **Độ trễ tích hợp IDE**. Tóm tắt suy nghĩ của mô hình mới không hiển thị trong extension VS Code, cho thấy sự khác biệt về chức năng giữa CLI và plugin IDE. |
| [#49689](https://github.com/anthropics/claude-code/issues/49689) | 🟢 ĐÃ ĐÓNG | **[BUG] Opus 4.6 bị xóa khỏi bộ chọn mô hình sau khi phát hành 4.7** | 13 | 66 | **Hỗn loạn quản lý phiên bản mô hình**. 4.6 bị xóa sau khi phát hành 4.7, 66 👍 cho thấy người dùng có nhu cầu mạnh mẽ về quyền lựa chọn mô hình, đã đóng nhưng không giải thích liệu có khôi phục lại không. |
| [#44657](https://github.com/anthropics/claude-code/issues/44657) | 🔴 MỞ | **[BUG] Công cụ ghi Subagent từ chối các tệp .md có tên "report"/"summary"/"findings"/"analysis"** | 4 | 8 | **Giới hạn quy trình làm việc của Agent**. Ghi tệp .md có tên cụ thể bị chặn mã hóa cứng, không có tùy chọn tắt, cản trở các tình huống tạo báo cáo tự động. |
| [#46834](https://github.com/anthropics/claude-code/issues/46834) | 🔴 MỞ | **TUI sắp xếp lại làm tràn toàn bộ bản ghi vào bộ nhớ đệm cuộn** | 4 | 5 | **Lỗi trải nghiệm terminal**. Chuyển đổi SIGWINCH/chế độ quyền làm cho lịch sử hội thoại đầy đủ được ghi lặp lại vào bộ đệm cuộn, làm sụp đổ khả năng sử dụng của hội thoại dài. |
| [#51764](https://github.com/anthropics/claude-code/issues/51764) | 🔴 MỞ | **Invalidation bộ nhớ đệm `--continue`/`--resume` vẫn xảy ra trên v2.1.116** | 1 | 0 | **Lỗi hệ thống bộ nhớ đệm**. Thí nghiệm đối chiếu TTL cho thấy việc khôi phục hội thoại làm giảm tỷ lệ trúng bộ nhớ đệm gợi ý 41-99pp, cam kết tối ưu hóa chi phí chưa được thực hiện. |
| [#51760](https://github.com/anthropics/claude-code/issues/51760) | 🔴 MỞ | **Các tiến trình bash nền tồn tại sau khi đóng phiên; chạy hoang dã 4.86 TB** | 1 | 0 | **Rò rỉ tài nguyên nghiêm trọng**. Tiến trình bash nền trên Windows tiếp tục ghi 2 giờ 40 phút sau khi đóng phiên, tạo ra tệp 4.86 TB, thiếu cơ chế giới hạn kích thước đầu ra. |

---

## Tiến trình PR Quan trọng

| # | Trạng thái | Tiêu đề | Tác giả | Nội dung Cốt lõi |
|---|------|------|------|---------|
| [#41611](https://github.com/anthropics/claude-code/pull/41611) | 🔵 MỞ | **thêm mã nguồn bị thiếu vào claude code** | [tornikeo](https://github.com/tornikeo) | Bổ sung mã nguồn bị thiếu - một số thành phần của Claude Code vẫn là mã nguồn đóng, cộng đồng tiếp tục kêu gọi mở hoàn toàn |
| [#51452](https://github.com/anthropics/claude-code/pull/51452) | 🔵 MỞ | **Cập nhật README.md** | [Ewanjohndennis](https://github.com/Ewanjohndennis) | Viết lại README: loại bỏ dấu vết tạo bởi AI (thêm cụm từ, ngôn ngữ quảng cáo), tinh giản khối cài đặt, sửa lỗi badge npm |
| [#51451](https://github.com/anthropics/claude-code/pull/51451) | 🔵 MỞ | **Xem xét lại chính sách bảo mật và hướng dẫn báo cáo** | [Ewanjohndennis](https://github.com/Ewanjohndennis) | Tái cấu trúc chính sách bảo mật: bắt buộc kênh báo cáo HackerOne duy nhất, làm rõ ranh giới ngoài phạm vi |
| [#51395](https://github.com/anthropics/claude-code/pull/51395) | 🔵 MỞ | **Claude/arrowhead gps logging pe arx** | [j7f7vr5997-netizen](https://github.com/j7f7vr5997-netizen) | Nội dung không rõ ràng, nghi ngờ là bản gửi thử nghiệm liên quan đến nhật ký GPS |

> **Quan sát Hệ sinh thái PR**: Chỉ có 4 PR hoạt động hôm nay, và hầu hết là cập nhật cấp độ tài liệu. Thiếu PR chức năng cốt lõi phản ánh người đóng góp bên ngoài bị giới hạn bởi mức độ mở của mã nguồn (#41611 trực tiếp chỉ ra vấn đề này). Anthropic cần cân bằng giữa kiểm soát thương mại và sự đồng xây dựng của cộng đồng.

---

## Xu hướng Yêu cầu Chức năng

Dựa trên phân tích phân cụm 50 Issue đang hoạt động:

```
┌─────────────────────────────────────────────────────────┐
│  🔥 Tính minh bạch phí và giới hạn sử dụng (Cost/Quota)    ████████████  Cao │
│     #16157 #51757 #37944 — Khủng hoảng niềm tin gói trả phí                │
│                                                         │
│  🔥 Chất lượng mô hình và quản lý phiên bản (Model Quality)    ██████████░░  Cao │
│     #42796 #49689 #49322 — Độ ổn định cập nhật và quyền lựa chọn            │
│                                                         │
│  🟡 Độ ổn định API/luồng (Infrastructure)       ████████░░░░  Trung bình │
│     #46987 #47841 #51756 — Hết thời gian chờ và mất kết nối                │
│                                                         │
│  🟡 Trải nghiệm Terminal/TUI (Terminal UX)           ██████░░░░░░  Trung bình │
│     #46834 #48825 #25366 #44479 — Hiển thị và khả năng tùy chỉnh         │
│                                                         │
│  🟢 Quy trình làm việc Agent/Subagent (Multi-Agent)   █████░░░░░░░  Trung bình │
│     #44657 #51764 — Giới hạn công cụ và tối ưu hóa bộ nhớ đệm             │
│                                                         │
│  🟢 Độ sâu tích hợp IDE (IDE Integration)        ████░░░░░░░░  Thấp │
│     #49322 #38006 — Bắt kịp chức năng VS Code                   │
│                                                         │
│  🔵 Tính năng Doanh nghiệp/Máy tính để bàn (Desktop/Enterprise)    ███░░░░░░░░░  Thấp │
│     #42776 #39336 #51759 — Độ ổn định Windows và Dispatch    │
└─────────────────────────────────────────────────────────┘
```

---

## Điểm quan tâm của Nhà phát triển

### Ma trận Điểm yếu

| Độ ưu tiên | Điểm yếu | Issue điển hình | Phạm vi Ảnh hưởng |
|:------:|------|-----------|--------|
| **P0** | **Cấp độ trả phí "không đúng như tên gọi"** | #16157 | Quy trình làm việc cốt lõi của người đăng ký gói Max bị gián đoạn, có tiếng nói "đề xuất hạ cấp" trong cộng đồng |
| **P0** | **Rủi ro hoàn nguyên cập nhật mô hình** | #42796 #49689 | Môi trường sản xuất phụ thuộc vào phiên bản mô hình cụ thể, chiến lược nâng cấp bắt buộc thiếu bộ đệm |
| **P1** | **Cam kết bộ nhớ đệm gợi ý chưa được thực hiện** | #51764 | Trực tiếp đẩy chi phí API lên cao, làm suy yếu lợi thế kinh tế của Claude Code |
| **P1** | **Sự khác biệt về độ ổn định đa nền tảng** | #51760 #42776 #39336 | Trải nghiệm Windows rõ ràng tụt hậu so với macOS, cản trở việc áp dụng của doanh nghiệp |
| **P2** | **Khả năng quan sát Agent còn thiếu** | #51713 #44657 | Gấp các lệnh gọi công cụ MCP, giới hạn đầu ra proxy con, khó gỡ lỗi |
| **P2** | **Suy giảm trực quan hóa quá trình suy nghĩ** | #48825 #49322 | Mất "words suy nghĩ", thiếu hiển thị tóm tắt, làm suy yếu niềm tin |

### Tín hiệu Nhu cầu Tần suất Cao

- **Khả năng khóa mô hình**：#49689 đã đóng, người dùng rõ ràng yêu cầu tùy chọn giữ lại các phiên bản mô hình cũ
- **Bảng điều khiển hạn ngạch sử dụng thời gian thực**：#16157 phát sinh nhu cầu - giới hạn hiện tại quá mơ hồ
- **Cô lập tài nguyên cấp phiên**：#51760 tiết lộ tiến trình nền mất kiểm soát, cần giới hạn cấp cgroup/Job Object
- **Hiển thị terminal LaTeX/định dạng phong phú**：#44479 tuy không phổ biến nhưng đại diện cho các tình huống chuyên nghiệp của người dùng học thuật/kỹ thuật

---

*Báo cáo hàng ngày dựa trên dữ liệu công khai trên GitHub, không đại diện cho lập trường chính thức của Anthropic. Dữ liệu tính đến 2026-04-22 00:00 UTC.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Cập nhật Cộng đồng OpenAI Codex Hàng ngày | 2026-04-22

## Xem nhanh Hôm nay

Động thái cốt lõi của cộng đồng Codex hôm nay tập trung vào **tái cấu trúc kiến trúc hệ thống quyền** - bolinfest liên tục gửi 13 PR di chuyển chiến lược sandbox từ `SandboxPolicy` cũ sang hệ thống `PermissionProfile` thống nhất, bao phủ toàn bộ chuỗi từ giao thức, app-server, TUI đến máy chủ thực thi. Đồng thời, phía Rust CLI chào đón các lần lặp lại trước bản phát hành alpha dày đặc (v0.123.0-alpha.2 đến alpha.7), chuẩn bị cho phiên bản chính thức sắp tới.

---

## Phát hành Phiên bản

| Phiên bản | Mô tả |
|:---|:---|
| `rust-v0.123.0-alpha.2` ~ `alpha.7` | Liên tục phát hành 6 phiên bản alpha CLI Rust trong 24 giờ qua, tần suất lặp lại cực cao, cho thấy phiên bản chính thức v0.123.0 đang vào giai đoạn nước rút cuối cùng. Hiện tại, các ghi chú phát hành tương đối ngắn gọn, nên theo dõi các thay đổi trong ghi chú phát hành chính thức sau này. |

> 🔗 Trang phát hành: https://github.com/openai/codex/releases

---

## Các Issue Trọng điểm Cộng đồng

| # | Tiêu đề | Trạng thái | Dữ liệu Cốt lõi | Phân tích Tầm quan trọng |
|:---|:---|:---|:---|:---|
| [#14593](https://github.com/openai/codex/issues/14593) | **Đốt token rất nhanh** | 🔴 MỞ | 555 bình luận / 234 👍 | **Chủ đề được cộng đồng thảo luận sôi nổi nhất**. Người dùng gói đăng ký Business phản hồi về tốc độ tiêu thụ token tăng đột biến, chưa được giải quyết triệt để trong hơn một tháng, ảnh hưởng trực tiếp đến việc kiểm soát chi phí của người dùng doanh nghiệp, số lượng bình luận dẫn đầu. |
| [#10450](https://github.com/openai/codex/issues/10450) | Phát triển Từ xa trong Ứng dụng Máy tính Codex | 🔴 MỞ | 148 bình luận / 580 👍 | **Yêu cầu chức năng được thích nhiều nhất**. Người dùng mạnh mẽ yêu cầu ứng dụng máy tính hỗ trợ phát triển từ xa (tương đương VS Code Remote-SSH), là trở ngại cốt lõi cho việc di chuyển IDE. |
| [#11678](https://github.com/openai/codex/issues/11678) | CLI 0.100+ Độ trễ nghiêm trọng của TUI trên Windows | 🔴 MỞ | 17 bình luận | Lỗi hồi quy, ảnh hưởng đến trải nghiệm cơ bản của nhà phát triển Windows, nguy cơ mất người dùng do chưa được sửa lỗi trong thời gian dài. |
| [#18755](https://github.com/openai/codex/issues/18755) | Lỗi đóng gói macOS: SkyComputerUseClient chỉ hỗ trợ macOS 15.0 | 🔴 MỞ | 8 bình luận / 15 👍 | **Ngắt kết nối tương thích**. Hệ thống kỹ năng mới bị treo trên macOS 14.x, cản trở người dùng doanh nghiệp nâng cấp, liên quan đến chiến lược ràng buộc phiên bản khung của Apple. |
| [#18463](https://github.com/openai/codex/issues/18463) | **[quan trọng] Tỷ lệ sử dụng CPU liên tục 120%+** | 🔴 MỞ | 8 bình luận | Thảm họa hiệu suất được đánh dấu là quan trọng, chỉ cần mở/mở lại ứng dụng là kích hoạt, tiến trình hiển thị mất kiểm soát, ảnh hưởng nghiêm trọng đến khả năng sử dụng. |
| [#17257](https://github.com/openai/codex/issues/17257) | Rò rỉ bộ nhớ Codex 5.4 Extra High | 🔴 MỞ | 6 bình luận / 8 👍 | Tăng bộ nhớ bất thường trong các tình huống thông lượng cao, ảnh hưởng đến môi trường sản xuất của người dùng Pro, vấn đề ghép nối giữa phiên bản mô hình và quản lý tài nguyên. |
| [#18881](https://github.com/openai/codex/issues/18881) | Rò rỉ tiến trình con MCP: 15 giờ 492 tiến trình mồ côi | 🔴 MỞ | 3 bình luận | **Rủi ro ổn định**. Tiến trình giám sát `--dangerously-bypass-approvals-and-sandbox` sau khi chạy dài hạn thay thế trình quản lý kết nối MCP dẫn đến rò rỉ tiến trình con, độ tin cậy của chế độ Daemon bị nghi ngờ. |
| [#15298](https://github.com/openai/codex/issues/15298) | Lệnh thoát sandbox `default.rules` không được tuân thủ | 🔴 MỞ | 6 bình luận / 6 👍 | Trường hợp xung đột giữa hệ thống quyền và cấu hình quy tắc, tình cờ đối chiếu với việc tái cấu trúc PermissionProfile hôm nay, phản ánh sự phức tạp của hệ thống cũ. |
| [#18247](https://github.com/openai/codex/issues/18247) | Tự động hóa với quyền đầy đủ | 🔴 MỞ | 7 bình luận | Người dùng rõ ràng yêu cầu tự động hóa quyền đầy đủ "không chịu trách nhiệm", phản ánh sự căng thẳng giữa chiến lược sandbox và tính linh hoạt của người dùng cao cấp. |
| [#14339](https://github.com/openai/codex/issues/14339) | Xóa ngữ cảnh trước khi thực hiện kế hoạch | 🟢 ĐÃ ĐÓNG | 13 bình luận / 22 👍 | Yêu cầu nâng cấp đã đóng, tương đương với luồng làm việc "xóa ngữ cảnh sau kế hoạch" của Copilot/Claude Code, thể hiện áp lực căn chỉnh chức năng dưới sự cạnh tranh đa công cụ. |

---

## Tiến trình PR Quan trọng

| # | Tiêu đề | Tác giả | Nội dung Cốt lõi |
|:---|:---|:---|:---|
| [#18745](https://github.com/openai/codex/pull/18745) | Thêm lựa chọn môi trường luồng cố định | starr-openai | **Lựa chọn môi trường cố định cấp luồng**: Hỗ trợ thử nghiệm cấu hình môi trường cố định cho luồng, xuyên suốt quá trình tạo luồng app-server đến `SessionConfiguration`, giải quyết vấn đề mất ngữ cảnh khi chuyển đổi môi trường đa dạng. |
| [#18416](https://github.com/openai/codex/pull/18416) | Thêm lựa chọn môi trường theo lượt | starr-openai | **Phủ sóng môi trường theo lượt**: Hỗ trợ chọn ID môi trường + cwd cho mỗi lượt ở cấp độ `turn/start`, tạo thành mô hình môi trường phân lớp "mặc định luồng + phủ sóng lượt" với #18745. |
| [#18871](https://github.com/openai/codex/pull/18871) | tái cấu trúc: thêm crate định danh agent | efrazer-oai | **Cô lập định danh Agent**: Thêm crate `codex-agent-identity`, đóng gói logic xây dựng khẳng định, đăng ký tác vụ, ký khóa riêng, làm nền tảng cho kiến trúc Agent phân tán. |
| [#17820](https://github.com/openai/codex/pull/17820) | tính năng: thêm xác thực AWS SigV4 cho nhà cung cấp tương thích OpenAI | celia-oai | **Hỗ trợ gốc AWS Bedrock**: Thêm xác thực SigV4 cho các điểm cuối được quản lý AWS như Amazon Bedrock Mantle, giữ lại lớp truyền tải API Responses, lộ trình quan trọng cho việc triển khai đa đám mây của doanh nghiệp. |
| [#18867](https://github.com/openai/codex/pull/18867) | sandbox: vật chất hóa glob quyền tương đối cwd | bolinfest | **Sửa lỗi neo đường dẫn quyền**: Giải quyết vấn đề glob từ chối tương đối của `:cwd` và `:project_roots` bị giải thích sai khi tái sử dụng phiên, làm chính xác ranh giới an toàn. |
| [#18277](https://github.com/openai/codex/pull/18277) | core: suy ra các hồ sơ quyền hoạt động | bolinfest | **Cốt lõi suy luận quyền**: `Permissions` không còn lưu trữ `PermissionProfile` độc lập, mà suy ra từ `SandboxPolicy` bị ràng buộc và cài đặt mạng, loại bỏ sự trôi dạt trạng thái. |
| [#18278](https://github.com/openai/codex/pull/18278) | app-server: hiển thị các hồ sơ quyền luồng | bolinfest | **Hiển thị quyền máy chủ**: API v2 của app-server trả về `PermissionProfile` cấp luồng, khách hàng không cần phải phân tích ngược các trường sandbox cũ nữa. |
| [#18279](https://github.com/openai/codex/pull/18279) | app-server: chấp nhận các ghi đè hồ sơ quyền | bolinfest | **Cổng ghi đè quyền**: Hỗ trợ truyền `PermissionProfile` khi khởi động / khôi phục / phân nhánh / ghi đè lượt, từ chối các yêu cầu mơ hồ không thể tồn tại cùng các trường cũ. |
| [#18284](https://github.com/openai/codex/pull/18284) | tui: đồng bộ hóa các hồ sơ quyền phiên | bolinfest | **Đồng bộ hóa trạng thái TUI**: Thành phần trò chuyện đồng bộ hóa `PermissionProfile` có thẩm quyền trong `SessionConfigured`, tránh trạng thái cục bộ cũ sau khi thay đổi cấu hình. |
| [#18897](https://github.com/openai/codex/pull/18897) | Thêm API môi trường cố định và trạng thái luồng | starr-openai | **Vòng lặp kín API môi trường cố định**: Phối hợp với #18745, hoàn thành việc lưu trữ lâu dài lựa chọn cố định cho `thread/start` và `turn/start` của app-server v2 và phạm vi kiểm thử. |

> 📌 **Chuỗi di chuyển PermissionProfile của bolinfest**（#18276-#18288, #18867）chiếm phần lớn thay đổi mã hôm nay, tổng cộng 13 PR tạo thành một chuỗi tái cấu trúc hoàn chỉnh: suy luận cốt lõi → hiển thị máy chủ → gửi khách hàng → báo cáo cấp giao thức → đồng bộ hóa TUI/thực thi → sửa lỗi đường dẫn sandbox.

---

## Xu hướng Nhu cầu Chức năng

Dựa trên phân tích phân cụm 50 Issue đang hoạt động:

| Hướng Xu hướng | Issue đại diện | Chỉ số Nhiệt độ |
|:---|:---|:---|
| **🖥️ Trải nghiệm IDE/Máy tính để bàn** | #10450 Phát triển từ xa, #18299 Hiển thị dotfiles, #18297 Hỗ trợ tìm kiếm @ | 580 👍 / Tương tác cao |
| **🔒 Quyền và Tinh chỉnh Sandbox** | #18247 Tự động hóa quyền đầy đủ, #16695 Phủ sóng sandbox cho mỗi tự động hóa, #15298 Tuân thủ quy tắc | Yêu cầu chức năng dày đặc, phản ánh việc tái cấu trúc hôm nay |
| **⚡ Hiệu suất và Quản lý Tài nguyên** | #14593 Đốt token, #18463 CPU nổ tung, #17257 Rò rỉ bộ nhớ | 555 bình luận, chặn môi trường sản xuất |
| **🪟 Thích ứng Nền tảng Windows** | #11678 Độ trễ TUI, #13549 Truy cập cấu hình WSL, #18861 Lỗi sandbox EPERM | Các vấn đề khác biệt nền tảng nổi bật |
| **🔌 Độ ổn định Hệ sinh thái MCP** | #18881 Rò rỉ tiến trình, #15508 Công cụ biến mất, #18233 Hỗn loạn lệnh gọi Agent | Độ trưởng thành cơ chế mở rộng không đủ |
| **🍎 Khả năng Tương thích macOS** | #18755 Lỗi ràng buộc phiên bản, #18341 Lỗi hiển thị Mac Intel, #18507 Quyền truy cập micrô | Phân mảnh hệ sinh thái Apple |

---

## Điểm quan tâm của Nhà phát triển

### 🔴 Điểm yếu Tần suất Cao

| Điểm yếu | Biểu hiện | Phạm vi Ảnh hưởng |
|:---|:---|:---|
| **Chi phí Token/Tài nguyên mất kiểm soát** | #14593 Tốc độ tiêu thụ bất thường, thiếu chi tiết thanh toán minh bạch | Người dùng đăng ký doanh nghiệp (Business/Enterprise) |
| **Suy giảm hiệu suất thường xuyên** | Độ trễ nhập liệu TUI CLI（#11678）, CPU đầy（#18463）, rò rỉ bộ nhớ（#17257） | Tình huống sử dụng cao tần suất trên mọi nền tảng |
| **Hệ thống quyền "vừa nghiêm ngặt vừa lộn xộn"** | Cấu hình quy tắc sandbox phức tạp（#18247）, `default.rules` lỗi（#15298）, mâu thuẫn với yêu cầu linh hoạt | Người dùng cao cấp / tình huống tự động hóa |
| **Mở rộng MCP không đáng tin cậy** | Rò rỉ tiến trình（#18881）, mất trạng thái giữa các phiên（#15508）, suy giảm lệnh gọi Agent（#18233） | Nhà phát triển hệ sinh thái mở rộng |

### 🟡 Nhu cầu Ngầm

- **Triển khai đa đám mây / đám mây lai**：Hỗ trợ AWS SigV4 #17820 phản ánh nhu cầu của doanh nghiệp thoát khỏi kết nối trực tiếp OpenAI
- **Chuyển đổi "Chế độ chuyên gia"**：Một số người dùng rõ ràng từ chối bảo vệ sandbox ( #18247), yêu cầu kênh quyền đầy đủ với trách nhiệm tự chịu
- **Độ ổn định hội thoại dài hạn**：#10823 lỗi nén ngữ cảnh, #11267 lỗi Ctrl+C, đều chỉ ra khoảng cách về độ tin cậy của hội thoại kéo dài hàng giờ / hàng ngày

---

> 📊 **Giải thích Dữ liệu**: Báo cáo hàng ngày dựa trên dữ liệu công khai từ kho lưu trữ `openai/codex` từ ngày 2026-04-21 đến 2026-04-22 UTC. Việc lọc Issue/PR ưu tiên xem xét số lượng bình luận, lượt thích và các đánh dấu như `[critical]`.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Cập nhật Cộng đồng Gemini CLI Hàng ngày | 2026-04-22

---

## 1. Xem nhanh Hôm nay

Cộng đồng hôm nay tập trung vào việc phát hành bản vá khẩn cấp **v0.39.0-preview.1**, sửa lỗi vấn đề lặp lại thư mục kế hoạch lồng nhau; đồng thời nhiều PR tối ưu hóa hiệu suất cốt lõi đang trong giai đoạn xem xét, bao gồm không đồng bộ hóa tăng tốc khởi động, hỗ trợ tệp RC Shell,... Người dùng phản hồi mạnh mẽ về các vấn đề độ ổn định như **nút cổ chai hiệu suất do quét dự án quá mức** và **cạn kiệt PTY trên macOS**.

---

## 2. Phát hành Phiên bản

### v0.39.0-preview.1
| Thuộc tính | Nội dung |
|:---|:---|
| Loại phát hành | Bản vá khẩn cấp (cherry-pick) |
| Nguồn sửa lỗi | PR #25138 ([`a4e98c0`](https://github.com/google-gemini/gemini-cli/pull/25138)) |
| Sửa lỗi Cốt lõi | Phân tích lặp lại đường dẫn tuyệt đối và tương đối trong tệp kế hoạch lồng nhau, chính sách bảo mật đường dẫn tương đối tuân thủ |

**Nội dung cập nhật**: Bản vá này sửa lỗi vấn đề tạo thư mục lồng nhau do phân tích đường dẫn kế hoạch tuyệt đối và tương đối gây ra sau khi `resolveAndValidatePlanPath` được giới thiệu, đồng thời đảm bảo đường dẫn tương đối đầu ra của Agent tuân thủ chính sách bảo mật tùy chỉnh.

> 🔗 [Trang phát hành](https://github.com/google-gemini/gemini-cli/releases) | [PR vá lỗi #25766](https://github.com/google-gemini/gemini-cli/pull/25766)

---

## 3. Các Issue Trọng điểm Cộng đồng (Top 10)

| # | Issue | Trạng thái | Bình luận | Vấn đề Cốt lõi & Phản hồi Cộng đồng |
|:---|:---|:---|:---|:---|
| **#25672** | [Quét cấp dự án quá mức dẫn đến lỗi vá mã nhỏ](https://github.com/google-gemini/gemini-cli/issues/25672) | 🔴 Chưa phân loại | 6 | **Điểm yếu hiệu suất**: Bản vá Go nhỏ kích hoạt quét toàn bộ dự án + tải thư viện tiêu chuẩn + cgo + kiểm tra vuln, 6 cuộc thảo luận tập trung kêu gọi **phân tích gia tăng** hoặc cơ chế **giới hạn phạm vi** |
| **#25583** | [Cạn kiệt thiết bị PTY chính ở chế độ YOLO trên macOS (ENXIO)](https://github.com/google-gemini/gemini-cli/issues/25583) | 🔒 Người bảo trì | 5 | **Khủng hoảng độ ổn định**: Sau khi chạy dài hạn, tiêu thụ hết giới hạn 511 PTY của hệ thống, dẫn đến **toàn bộ hệ thống không thể tạo thiết bị đầu cuối mới**, cộng đồng quan tâm đến nguyên nhân gốc rễ của rò rỉ tài nguyên |
| **#22745** | [Đánh giá ánh xạ / tìm kiếm / đọc / ghi tệp nhận biết AST](https://github.com/google-gemini/gemini-cli/issues/22745) | 🔒 Người bảo trì | 5 | **Tiến hóa kiến trúc**: Nghiên cứu cấp EPIC, khám phá cách sử dụng công cụ AST để đọc chính xác các ranh giới phương thức, giảm nhiễu token, có thể thay thế `codebase_investigator` hiện tại |
| **#22323** | [MAX_TURNS của Agent con bị báo cáo là THÀNH CÔNG MỤC TIÊU](https://github.com/google-gemini/gemini-cli/issues/22323) | 🔒 P1 | 3 | **Lỗi độ tin cậy**: `codebase_investigator` đạt giới hạn lượt nhưng trả về thành công, **ẩn gián đoạn dẫn đến sai lầm trong quyết định**, nhận 2 👍 |
| **#24916** | [Hỏi lặp lại quyền cho cùng một tệp](https://github.com/google-gemini/gemini-cli/issues/24916) | Mở | 3 | **Lỗi UX**: Cài đặt "cho phép tất cả các phiên trong tương lai" thỉnh thoảng không hoạt động, logic lưu trữ trạng thái quyền bị nghi ngờ |
| **#25166** | [Bị kẹt ở "chờ nhập liệu" sau khi lệnh Shell hoàn thành](https://github.com/google-gemini/gemini-cli/issues/25166) | 🔒 Người bảo trì | 2 | **Chặn tần suất cao**: Giả chết sau khi thực thi lệnh đơn giản, nhận 3 👍, ảnh hưởng đến vòng lặp tương tác cốt lõi |
| **#23571** | [Mô hình ngẫu nhiên tạo script tạm thời](https://github.com/google-gemini/gemini-cli/issues/23571) | 🔒 Người bảo trì | 2 | **Làm ô nhiễm không gian làm việc**: Mô hình phân tán script chỉnh sửa khắp nơi sau khi thực thi shell, chi phí dọn dẹp cao |
| **#22267** | [Browser Agent bỏ qua ghi đè settings.json](https://github.com/google-gemini/gemini-cli/issues/22267) | 🔒 Người bảo trì | 2 | **Cấu hình không hoạt động**: Cấu hình toàn cục / cấp dự án như `maxTurns` bị Browser Agent bỏ qua hoàn toàn, có lỗ hổng trong logic hợp nhất khởi tạo |
| **#22819** | [Định tuyến bộ nhớ: phân tách toàn cục vs. cấp dự án](https://github.com/google-gemini/gemini-cli/issues/22819) | 🔒 Người bảo trì | 1 | **Cơ sở hạ tầng cá nhân hóa**: Xác định chiến lược lưu trữ phân lớp giữa sở thích cấp người dùng (`~/.gemini/`) và bộ nhớ kho mã nguồn cụ thể (`.gemini/`), nhận 2 👍 |
| **#25216** | [Đường dẫn tạm thời A:\ mở lỗi (EISDIR)](https://github.com/google-gemini/gemini-cli/issues/25216) | Mở | 1 | **Khả năng tương thích Windows**: `realpath('A:\a')` trong PowerShell ném ra lỗi thao tác thư mục không hợp lệ, logic phân tích đường dẫn chưa xử lý gốc ổ đĩa Windows |

---

## 4. Tiến trình PR Quan trọng (Top 10)

| # | PR | Trạng thái | Chức năng / Nội dung Sửa lỗi | Đánh giá Ảnh hưởng |
|:---|:---|:---|:---|:---|
| **#25712** | [Hỗ trợ tệp RC Shell + Bắt buộc PAGER=cat](https://github.com/google-gemini/gemini-cli/pull/25712) | 🟡 Mở | Thêm cài đặt `shellToolRcFile`; bắt buộc `PAGER=cat` khi không có RC để tránh `more`/`less` bị treo | **Độ ổn định Tương tác**: Giải quyết vấn đề chặn lệnh pipeline |
| **#25775** | [Lệnh `/note`: Chụp nhanh ghi chú không gian làm việc](https://github.com/google-gemini/gemini-cli/pull/25775) | 🟡 Mở | Thêm dấu thời gian vào ghi chú trong `notes.md` bằng `/note <text>`; xem bằng `/note view` | **Nâng cao năng suất**: Hỗ trợ gốc ghi chú ngữ cảnh, giảm chuyển đổi công cụ bên ngoài |
| **#25758** | [Tăng tốc khởi động: Lấy cấu hình thử nghiệm và hạn ngạch không đồng bộ](https://github.com/google-gemini/gemini-cli/pull/25758) | 🔒 Đang xem xét | Bất đồng bộ hóa yêu cầu mạng trong giai đoạn `refreshAuth`, loại bỏ nút cổ chai chờ đồng bộ | **Hiệu suất Cốt lõi**: Trực tiếp phản hồi các khiếu nại hiệu suất như #25672 |
| **#25409** | [Truy cập ContextManager và AgentChatHistory mới](https://github.com/google-gemini/gemini-cli/pull/25409) | 🟡 Mở | Nâng cấp kiến trúc: thay thế triển khai quản lý ngữ cảnh, sửa #25408 | **Nợ Kiến trúc**: Đặt nền móng cho quản lý trạng thái Agent dài hạn |
| **#25426** | [Tăng tốc CI: Kiểm tra 16 lõi + quy trình trung tâm tạo sản phẩm](https://github.com/google-gemini/gemini-cli/pull/25426) | 🔒 Đang xem xét | Tái sử dụng sản phẩm được tạo sẵn, hiện đại hóa cơ sở hạ tầng kiểm tra cho phép song song 16 lõi | **Hiệu quả Kỹ thuật**: Rút ngắn chu kỳ phản hồi PR |
| **#25769** | [Tương thích toán tử đa nền tảng Shell Windows](https://github.com/google-gemini/gemini-cli/pull/25769) | 🟡 Mở | Ánh xạ cú pháp tương đương PowerShell/CMD cho `&&`/`||`/`/dev/null` | **Trải nghiệm Windows**: Thu hẹp khoảng cách lệnh Unix/Windows |
| **#25770** | [Hợp nhất sâu cài đặt A2A](https://github.com/google-gemini/gemini-cli/pull/25770) | 🟡 Mở | Sửa lỗi sao chép nông dẫn đến ghi đè cấu hình lồng nhau (`fileFiltering`, `tools`) | **Độ tin cậy Cấu hình**: Giải quyết vấn đề mất cấu hình #25747 |
| **#25720** | [Xác minh đệ quy lệnh Shell + Danh sách trắng cốt lõi](https://github.com/google-gemini/gemini-cli/pull/25720) | 🟡 Mở | Công cụ động cơ chiến lược hỗ trợ kiểm tra đệ quy lệnh con/thay thế/shell con; thêm danh sách trắng chính xác `tools.core` | **Tăng cường Bảo mật**: Đối phó với các tình huống tiêm lệnh phức tạp |
| **#25765** | [Sửa lỗi bộ đếm phần tử 1:1 phản hồi công cụ](https://github.com/google-gemini/gemini-cli/pull/25765) | 🟡 Mở | Căn chỉnh nghiêm ngặt số lượng lệnh gọi công cụ và phản hồi chức năng, sửa lỗi 400 Gemini đa phương thức | **Độ ổn định API**: Giải quyết vi phạm giao thức tương tác mô hình Gemini |
| **#24270** | [Truy vấn bên cạnh `/btw` thử nghiệm](https://github.com/google-gemini/gemini-cli/pull/24270) | 🟡 Mở | Lớp phủ truy vấn LLM tạm thời không sửa đổi lịch sử hội thoại chính, không kích hoạt công cụ | **Đổi mới Tương tác**: Hỗ trợ gốc cho tình huống "tiện thể hỏi" |

---

## 5. Xu hướng Nhu cầu Chức năng

Dựa trên phân tích phân cụm 50 Issue đang hoạt động:

| Hướng Xu hướng | Issue đại diện | Cường độ Nhu cầu của Cộng đồng |
|:---|:---|:---|
| **🚀 Hiệu suất và Tối ưu hóa Khởi động** | #25672, #25758, #25166 | ⭐⭐⭐⭐⭐ |
| **🔒 Độ tin cậy và Minh bạch Trạng thái Agent** | #22323, #23582, #24037, #22672 | ⭐⭐⭐⭐⭐ |
| **🧠 Bộ nhớ và Cơ sở hạ tầng Cá nhân hóa** | #22819, #22809, #22745 | ⭐⭐⭐⭐☆ |
| **🪟 Khả năng Tương thích Windows/Đa nền tảng** | #25216, #25769, #24202, #24915 | ⭐⭐⭐⭐☆ |
| **🛡️ Tinh chỉnh Quyền và Chính sách** | #24916, #25720, #23571 | ⭐⭐⭐⭐☆ |
| **♿ Khả năng Tiếp cận và Hiển thị** | #25218, #24943, #24599, #25339 | ⭐⭐⭐☆☆ |
| **🔧 Trải nghiệm Nhà phát triển (DX)** | #25712, #25775, #22816 | ⭐⭐⭐⭐☆ |

**Nhận định Cốt lõi**: Cộng đồng đang chuyển từ "chức năng khả dụng" sang **hiệu suất chấp nhận được, hành vi có thể dự đoán, trạng thái có thể quan sát** - mức độ trưởng thành kỹ thuật của hệ thống Agent trở thành rào cản cạnh tranh cốt lõi.

---

## 6. Điểm quan tâm của Nhà phát triển

### 🔥 Điểm yếu Tần suất Cao

| Điểm yếu | Phản hồi Điển hình | Mức độ Khẩn cấp |
|:---|:---|:------:|
| **Phạm vi quét mất kiểm soát** | "Chỉnh sửa một dòng tệp Go quét toàn bộ thư viện tiêu chuẩn" - phân tích toàn bộ dự án trở thành gánh nặng không thể chịu đựng đối với các chỉnh sửa nhỏ | 🔴 P0 |
| **Rò rỉ tài nguyên ẩn** | Cạn kiệt PTY trên macOS cần chạy nhiều tuần mới bộc lộ, thiếu giám sát thời gian chạy | 🔴 P0 |
| **Giả chết và Trạng thái không nhất quán** | UI bị kẹt sau khi lệnh Shell hoàn thành, gián đoạn Agent con được đánh dấu là thành công | 🟡 P1 |
| **Hệ thống cấu hình yếu kém** | Ghi đè settings.json không hoạt động, mất bộ nhớ quyền, hợp nhất nông A2A | 🟡 P1 |

### 💡 Nhu cầu Mới nổi

- **Chuỗi công cụ gốc AST**：Nhà phát triển mong đợi CLI tích hợp sẵn khả năng