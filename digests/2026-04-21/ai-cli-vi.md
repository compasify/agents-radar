# Cộng đồng Công cụ AI CLI: Nhật ký cập nhật hàng ngày ngày 21 tháng 4 năm 2026

> Thời gian tạo: 2026-04-21 00:16 UTC | Số công cụ được bao phủ: 8

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

# Báo cáo Phân tích So sánh Ngang Hệ sinh thái Công cụ AI CLI | Ngày 21 tháng 4 năm 2026

---

## 1. Toàn cảnh Hệ sinh thái

Hệ sinh thái công cụ AI CLI hiện tại thể hiện một cục diện cạnh tranh trưởng thành với **"chức năng tương đồng, trải nghiệm phân hóa"**: Các công cụ hàng đầu (Claude Code, Codex, Copilot CLI) đã bước vào giai đoạn doanh nghiệp áp dụng, với sự ổn định và độ sâu tích hợp trở thành chiến trường cốt lõi; các thế lực mới nổi (Kimi CLI, Qwen Code, Gemini CLI) đang bám đuổi với tốc độ lặp lại nhanh chóng, nhưng vẫn còn khoảng cách rõ ràng về độ tin cậy của Agent và các cơ sở hạ tầng như hệ thống xác thực. Các giải pháp thay thế mã nguồn mở (OpenCode, Pi) đang mở ra không gian khác biệt thông qua việc mở rộng hệ sinh thái và hỗ trợ đa đám mây. Ngành công nghiệp đang chuyển đổi từ "có thể trình diễn" sang "đáng tin cậy trong sản xuất". Nhu cầu của nhà phát triển về tính minh bạch về phí, tính nhất quán đa nền tảng và SLA cấp doanh nghiệp đang nổi bật hơn sự mong đợi về các chức năng mới.

---

## 2. So sánh Mức độ Hoạt động của Từng Công cụ

| Công cụ | Bản phát hành hôm nay | Hoạt động Issues | Hoạt động PR | Đặc trưng cốt lõi |
|:---|:---|:---|:---|:---|
| **Claude Code** | v2.1.116 (Tối ưu hiệu suất, bao gồm lỗi khôi phục Bedrock) | 10+ điểm nóng, #51377 chặn cấp doanh nghiệp, #45335 khủng hoảng phí 39 bình luận | 4 cập nhật, 2 không hợp lệ, PR yêu cầu mã nguồn mở #41447 không có tiến triển thực chất | **Phát triển vòng lặp nội bộ**, kênh đóng góp cộng đồng chưa mở |
| **OpenAI Codex** | v0.122.0 bản ổn định (Nâng cao trải nghiệm cài đặt + TUI) | #14593 tiêu thụ token 551 bình luận là mức độ phổ biến cao nhất toàn hệ sinh thái | 10 PR thực chất, dự án triển khai điểm theo dõi quy mô lớn do rhan-oai dẫn đầu | **Lặp lại dựa trên dữ liệu**, xây dựng cơ sở hạ tầng phân tích chuyên sâu |
| **Gemini CLI** | Không có | 10 điểm nóng, #25679 mất dữ liệu, #25688 phình to ngữ cảnh 200% | 10 PR hoạt động, #25716 tái cấu trúc kiến trúc bộ nhớ là quyết định kỹ thuật lớn | **Tái cấu trúc kiến trúc mạnh dạn**, hệ thống bộ nhớ chuyển từ proxy phụ sang điều khiển bằng lời nhắc |
| **Copilot CLI** | v1.0.33 + v1.0.34 (Tối ưu hóa phiên từ xa + gợi ý lỗi) | 10 điểm nóng, #1595 chính sách doanh nghiệp 27 bình luận, #2725 xuống cấp mô hình 25 bình luận | **0 PR trong 24 giờ** | **Bảo trì nội bộ của Microsoft**, mức độ tham gia của cộng đồng rất thấp |
| **Kimi CLI** | v1.37.0 (Làm mới mô hình OAuth + sửa lỗi chế độ print) | 15 Issue mới, #1927 vòng lặp vô hạn subagent, #1924 kiểm tra nhiệt độ API chặn | 16 PR, #1960 kiến trúc RalphFlow giải quyết vấn đề vòng lặp là cột mốc | **Mức độ hoạt động cộng đồng cao nhất**, phản hồi nhanh nhưng nợ ổn định tích lũy |
| **OpenCode** | Bản sửa lỗi nóng v1.14.19 (phụ thuộc vòng lặp + mất dữ liệu chỉnh sửa đồng thời) | 10 điểm nóng, bùng phát sự cố hệ thống chủ đề trên cụm ( #23521/#23196/#20926 ) | 10 PR mở, tích hợp doanh nghiệp (Databricks/#7984) và tối ưu hóa di động song song | **Mở rộng hệ sinh thái mã nguồn mở**, nhu cầu kết nối mô hình trong nước là đáng kể |
| **Pi** | v0.68.0 (Tùy chỉnh chỉ báo trạng thái hoạt động) | **Đã đóng 45+ Issue**, xử lý hiệu quả; #2616 kiến trúc đồng bộ SessionManager là một trong số ít nợ còn tồn đọng | 10 PR, di chuyển TypeBox #3474 là tái cấu trúc lớn cho lớp xác thực | **Hiệu quả hợp tác cộng đồng cao nhất**, chiến lược ưu tiên mở rộng rõ ràng |
| **Qwen Code** | v0.14.5-nightly (Hỗ trợ đầy đủ ACP Hooks) | #3203 điều chỉnh chính sách miễn phí OAuth **104 bình luận** là chủ đề nóng nhất hôm nay | 10 PR, tái cấu trúc đường dẫn quan trọng cho xác thực VSCode #3398 | **Hệ thống xác thực biến động**, điều chỉnh chính sách tiềm ẩn rủi ro mất người dùng |

---

## 3. Các hướng chức năng được quan tâm chung

| Hướng chức năng | Công cụ liên quan | Nhu cầu cụ thể và bằng chứng |
|:---|:---|:---|
| **Danh tính cấp doanh nghiệp và triển khai đa đám mây** | Claude Code, Codex, Pi, Qwen Code, Kimi CLI | Hỗ trợ gốc Bedrock: Codex #18744/#17820, Pi #3456, Claude Code #51377 quay lại; Làm mới tự động token doanh nghiệp: Pi #3462; Giải pháp thay thế OAuth: Qwen #3398, Kimi #1948 |
| **Độ tin cậy của Agent và kiểm soát hội tụ** | Kimi CLI, Gemini CLI, Claude Code, Qwen Code | Vòng lặp vô hạn Subagent: Kimi #1927/#1950 → RalphFlow #1960; Gemini #25672 kiểm tra toàn bộ dự án mất kiểm soát hiệu suất; Claude Code Edit tool race condition #51361; Qwen #2409 bắt kịp chức năng proxy phụ |
| **Nợ trải nghiệm nền tảng Windows** | Claude Code, Codex, Copilot CLI, Kimi CLI, OpenCode | Font/Render: Claude Code #48237, #49985; Thiếu dependency npm: Codex #17432; Thoát im lặng: Copilot #1164/#1250; Hỏng CRLF: Kimi #1952; Phát hiện chủ đề: Cụm OpenCode #23521 |
| **Tính minh bạch về phí và kiểm soát chi phí** | Codex, Claude Code | Codex #14593 551 bình luận "đốt token", #18345 biến động tiêu thụ 60% giữa các phiên bản; Claude Code #2603 yêu cầu cache 1 giờ 27 thumbs up, #45335 hủy đăng ký quà tặng tự động |
| **Tích hợp sâu IDE và chuẩn hóa giao thức** | Qwen Code, Kimi CLI, Claude Code, Gemini CLI | Giao thức ACP: Qwen #3108/#3483, Kimi #1956; Bắt kịp chức năng VSCode: Qwen #3377; Hỗ trợ gốc GitLab: Claude Code #12346 75 thumbs up; Zed/JetBrains: Kimi #1957 |
| **Độ ổn định và khả năng quan sát TUI Terminal** | Gemini CLI, Codex, Copilot CLI, OpenCode | Đệ quy vô hạn/nhấp nháy: Gemini #20885, Qwen #3013; Render lại sau khi thay đổi kích thước: Codex #5259; Treo dài phiên: Copilot #2625; Tương thích Ghostty: OpenCode #23543 |

---

## 4. Phân tích định vị khác biệt

| Công cụ | Tập trung chức năng | Người dùng mục tiêu | Lộ trình kỹ thuật |
|:---|:---|:---|:---|
| **Claude Code** | Hiểu mã sâu, hội thoại ngữ cảnh dài, tích hợp gốc GitHub | Nhà phát triển chuyên nghiệp, người dùng sâu hệ sinh thái GitHub | **Full-stack đóng kín**, ràng buộc mô hình tự phát triển, người thúc đẩy hệ sinh thái MCP giai đoạn đầu |
| **OpenAI Codex** | Tối ưu hóa hiệu quả token, CLI hiệu suất cao Rust, triển khai doanh nghiệp đa đám mây | Nhóm kỹ thuật doanh nghiệp, người dùng đám mây hỗn hợp AWS/Azure | **Viết lại bằng Rust**, gói cài đặt độc lập, lặp lại dựa trên điểm dữ liệu |
| **Gemini CLI** | Thông minh hóa hệ thống bộ nhớ, hỗ trợ mô hình cục bộ (Gemma), chi tiết hóa chính sách bảo mật | Người dùng Google Cloud, kịch bản triển khai biên | **Kiến trúc thử nghiệm mạnh dạn**, thay thế proxy phụ bằng điều khiển bằng lời nhắc, suy luận cục bộ LiteRT |
| **Copilot CLI** | Kết nối liền mạch hệ sinh thái GitHub, kiểm soát chính sách tổ chức, hội thoại từ xa | Người dùng đăng ký GitHub Copilot của doanh nghiệp | **Khóa hệ sinh thái Microsoft**, vòng lặp nội bộ, mức độ tham gia cộng đồng thấp nhất |
| **Kimi CLI** | Tính tự chủ của Agent, chuỗi công cụ MCP, lặp lại chức năng nhanh chóng | Nhà phát triển Trung Quốc, người dùng ưa thích mô hình mã nguồn mở | **Tốc độ lặp lại cao**, kiến trúc nguyên bản như RalphFlow, nợ ổn định song song tích lũy |
| **OpenCode** | Mã nguồn mở có thể mở rộng, trừu tượng hóa đa nhà cung cấp, tùy chỉnh sâu chủ đề/terminal | Người đóng góp mã nguồn mở, người dùng chuyển đổi đa mô hình | **Hệ sinh thái mở lớn nhất**, ưu tiên API mở rộng, mô hình trong nước theo dõi nhanh nhất |
| **Pi** | Hệ thống plugin mở rộng, tương thích tính toán biên, quản lý hội thoại chi tiết | Nhà tích hợp hạ nguồn, nhu cầu nhãn trắng/thương hiệu | **Định vị cơ sở hạ tầng**, lớp xác thực TypeBox, kiến trúc hướng sự kiện |
| **Qwen Code** | Tích hợp gốc Aliyun, ràng buộc sâu VSCode, tối ưu hóa tiếng Trung | Người dùng Aliyun, cộng đồng nhà phát triển tiếng Trung | **Ràng buộc nhà cung cấp đám mây**, tiêu chuẩn giao thức ACP tự phát triển, tái cấu trúc giữa biến động hệ thống xác thực |

---

## 5. Mức độ Phổ biến và Sự trưởng thành của Cộng đồng

### Các bậc hoạt động cộng đồng

| Bậc | Công cụ | Bằng chứng |
|:---|:---|:---|
| **🔥 Hoạt động cao** | Kimi CLI, Pi | Kimi: 15 Issue + 16 PR trong 24 giờ, phản hồi cực nhanh; Pi: Đóng 45+ Issue trong một ngày, hiệu quả hợp tác cộng đồng cao nhất toàn hệ sinh thái |
| **🟡 Hoạt động trung bình** | Codex, Gemini CLI, Qwen Code, OpenCode | Codex: Dự án điểm theo dõi chuyên sâu nhưng phản hồi Issue cộng đồng chậm; Gemini: Giai đoạn tái cấu trúc kiến trúc PR hoạt động; Qwen: Đỉnh điểm thảo luận do biến động chính sách; OpenCode: Đóng góp mã nguồn mở ổn định |
| **🔵 Hoạt động thấp / Vòng lặp nội bộ** | Claude Code, Copilot CLI | Claude Code: "Tiến triển thực chất hạn chế" cho hệ sinh thái PR, cộng đồng hướng tài liệu; Copilot CLI: **0 PR trong 24 giờ**, bảo trì hoàn toàn nội bộ Microsoft |

### Đánh giá sự trưởng thành

| Chiều | Trưởng thành nhất | Giai đoạn lặp lại nhanh | Giai đoạn nợ cơ sở hạ tầng |
|:---|:---|:---|:---|
| **Ổn định Doanh nghiệp** | Copilot CLI (SLA Microsoft), Claude Code (Thương hiệu Anthropic) | Codex (đang tái cấu trúc Rust) | Kimi CLI (vòng lặp subagent), Qwen Code (sập xác thực) |
| **Hệ sinh thái Mã nguồn mở** | Pi (API mở rộng hoàn chỉnh), OpenCode (PR hợp nhất hoạt động) | — | Gemini CLI (giai đoạn chuyển đổi tái cấu trúc bộ nhớ) |
| **Tính năng Hoàn chỉnh** | Claude Code (độ sâu tích hợp GitHub) | Codex (tối ưu hóa TUI liên tục), Kimi (kiến trúc RalphFlow) | Qwen Code (chênh lệch 40% chức năng proxy phụ), Gemini (mất dữ liệu #25679) |
| **Tính nhất quán Đa nền tảng** | Pi (chà nhám tương thích XDG/tmux/Ghostty) | OpenCode (đang sửa hệ thống chủ đề) | Claude Code/Copilot CLI (Windows kém hơn đáng kể so với macOS) |

---

## 6. Các Tín hiệu Xu hướng Đáng chú ý

### Tín hiệu 1: Từ "Cuộc đua Chức năng" sang "Cơ sở hạ tầng Tin cậy" (Toàn ngành)

> **Dữ liệu Hỗ trợ**: Khủng hoảng tin cậy phí Claude Code #45335 39 bình luận, Codex #14593 551 bình luận về tính minh bạch token, Qwen #3203 104 bình luận về sự phản kháng chính sách miễn phí.

Nhu cầu cốt lõi của nhà phát triển đã chuyển từ "có thể làm gì" sang "tính dự đoán được" - phí không thể đoán trước, điều chỉnh chính sách đột ngột, lỗi hồi quy do nâng cấp phiên bản có sức sát thương lớn hơn việc thiếu chức năng. **Người ra quyết định kỹ thuật nên đưa SLA ổn định, tính minh bạch quản lý thay đổi vào trọng số cốt lõi khi lựa chọn**.

### Tín hiệu 2: Đường phân chia kiến trúc giữa tính tự chủ và khả năng kiểm soát của Agent

| Lộ trình | Công cụ đại diện | Lựa chọn kỹ thuật | Đặc trưng rủi ro |
|:---|:---|:---|:---|
| **Tự chủ Proxy Phụ** | Claude Code (giai đoạn đầu), Gemini CLI (MemoryManagerAgent) | Proxy phụ chuyên dụng xử lý bộ nhớ/quyền | Vòng lặp mất kiểm soát, xung đột khó giải quyết, hộp đen gỡ lỗi |
| **Hội tụ Điều khiển bằng Lời nhắc** | Gemini CLI (#25716 tái cấu trúc), Kimi CLI (RalphFlow #1960) | Proxy chính thao tác trực tiếp, cô lập lặp lại + phát hiện hội tụ | Kỹ thuật lời nhắc phức tạp, phình to ngữ cảnh |
| **Điều phối Luồng Công việc Rõ ràng** | Pi (fork/duplicate session #3431), OpenCode (chế độ YOLO #11831) | Lớp tự động hóa người dùng có thể kiểm soát | Gánh nặng cấu hình, đường cong học tập |

**Gemini loại bỏ MemoryManagerAgent, Kimi giới thiệu RalphFlow, đánh dấu sự suy ngẫm của ngành về "thiết kế quá mức proxy phụ"** - kiến trúc đơn giản hơn có thể đáng tin cậy hơn.

### Tín hiệu 3: Triển khai đa đám mây/tư nhân trở thành điều kiện tiên quyết cho việc áp dụng của doanh nghiệp

> **Dữ liệu Hỗ trợ**: Codex #18744 Hỗ trợ gốc Bedrock + #17820 SigV4, Pi #3456 Token động + #3474 Tương thích biên TypeBox, Claude Code #51377 Bedrock quay lại chặn doanh nghiệp.

Phụ thuộc vào API chính thức của OpenAI đang suy yếu, tích hợp gốc AWS/Azure/Aliyun, mô hình cục bộ (Gemma #25498, tương thích Ollama #3384) trở thành nhu cầu tiêu chuẩn. **Lựa chọn của doanh nghiệp cần đánh giá rủi ro khóa nhà cung cấp, ưu tiên các công cụ trừu tượng hóa đa đám mây có lợi thế lâu dài**.

### Tín hiệu 4: Trải nghiệm Terminal trở thành chiến trường khác biệt

Font chữ Windows/render TUI, tương thích Ghostty/Alacritty, phím tmux, ổn định kịch bản SSH - những vấn đề "trải nghiệm cơ bản" này chiếm tỷ lệ 20-30% trong các Issue của các công cụ, và chưa được giải quyết triệt để trong thời gian dài. **Sự phân mảnh Terminal (thậm chí còn hơn IDE) có nghĩa là lợi tức đầu tư cho khung TUI đa nền tảng đã bị đánh giá thấp**. Các công cụ có lớp render thống nhất (như TUI Rust của Codex, SlicingMaxSizedBox #3013 của Gemini) sẽ có lợi thế liên tục.

### Tín hiệu 5: Cơ sở hạ tầng phân tích quyết định tốc độ lặp lại

> **Dữ liệu Hỗ trợ**: rhan-oai series của Codex 11 PR điểm theo dõi, Gemini #25344 cắt bỏ đo từ xa, kiến trúc hướng sự kiện Pi.

Khả năng quan sát đã nâng cấp từ "công cụ vận hành" thành "cốt lõi quyết định sản phẩm" - theo dõi đường dẫn tiêu thụ token, phân phối độ trễ gọi công cụ, phễu bỏ phiên, trực tiếp ảnh hưởng đến ưu tiên chức năng và chiến lược định giá. **Nhà phát triển có thể quan sát mật độ điểm theo dõi và tính minh bạch phân tích của công cụ để đánh giá khả năng tiến hóa lâu dài của chúng**.

---

*Báo cáo được tạo dựa trên dữ liệu công khai GitHub của từng công cụ vào ngày 2026-04-21, phù hợp cho người ra quyết định kỹ thuật lựa chọn công cụ và dự đoán rủi ro.*

---

## Báo cáo chi tiết từng công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Điểm nóng Cộng đồng Claude Code Skills

> Nguồn dữ liệu: [anthropics/skills](https://github.com/anthropics/skills)

# Báo cáo Điểm nóng Cộng đồng Claude Code Skills (Tính đến ngày 21 tháng 4 năm 2026)

---

## 1. Xếp hạng Skills Nóng (theo mức độ quan tâm của cộng đồng)

| Xếp hạng | Skill | Chức năng | Điểm nóng thảo luận | Trạng thái |
|:---|:---|:---|:---|:---|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | Kiểm soát chất lượng định dạng tài liệu do AI tạo ra: ngăn chặn dòng cô đơn, dòng lẻ, đánh số sai | Điểm nhức nhối phổ biến ảnh hưởng đến tất cả kết quả đầu ra tài liệu Claude; tác giả nhấn mạnh "người dùng hiếm khi chủ động yêu cầu định dạng tốt, nhưng vấn đề ở khắp mọi nơi" | 🟡 Mở |
| 2 | **[skill-quality-analyzer / skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | Meta-skill để đánh giá chất lượng Skill (năm chiều: cấu trúc, tài liệu, bảo mật, v.v.) và kiểm tra bảo mật | Đổi mới ở cấp độ năng lực meta, phản hồi mối quan tâm của cộng đồng về việc tiêu chuẩn hóa và chất lượng Skill không đồng đều | 🟡 Mở |
| 3 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | Cải thiện tính rõ ràng và khả năng thực thi của Skill thiết kế front-end | Thảo luận tập trung vào "làm thế nào để chỉ dẫn Skill thực sự có thể thực thi trong một lượt hội thoại", liên quan đến phương pháp luận thiết kế Skill cốt lõi | 🟡 Mở |
| 4 | **[odt](https://github.com/anthropics/skills/pull/486)** | Tạo, điền mẫu và chuyển đổi sang HTML cho định dạng OpenDocument (.odt/.ods) | lấp đầy khoảng trống hỗ trợ tiêu chuẩn tài liệu mã nguồn mở, bổ sung cho các skill docx/pdf hiện có | 🟡 Mở |
| 5 | **[SAP-RPT-1-OSS](https://github.com/anthropics/skills/pull/181)** | Tích hợp mô hình cơ sở bảng SAP mã nguồn mở để phân tích dự đoán dữ liệu kinh doanh | Trường hợp tích hợp AI cấp doanh nghiệp, cầu nối kết nối Claude với hệ sinh thái SAP | 🟡 Mở |
| 6 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | Các mẫu kiểm thử toàn diện: kiểm thử đơn vị, kiểm thử thành phần React, mô hình Testing Trophy | Triết lý kiểm thử + hướng dẫn thực hành, đáp ứng nhu cầu sâu sắc về "chất lượng mã do AI tạo ra" | 🟡 Mở |
| 7 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | Hệ thống bộ nhớ bền vững cho Agent AI qua các phiên | giải quyết điểm nhức nhối cốt lõi về mất ngữ cảnh của Claude Code, cạnh tranh với lớp bộ nhớ #521 record-knowledge | 🟡 Mở |
| 8 | **[sensory](https://github.com/anthropics/skills/pull/806)** | Tự động hóa gốc macOS thông qua AppleScript (thay thế chụp màn hình kiểu sử dụng máy tính) | Thiết kế phân cấp quyền (Tier 1/2) gây ra thảo luận, đại diện cho cuộc tranh luận lộ trình "tích hợp hệ thống gốc" so với "tự động hóa trực quan" | 🟡 Mở |

---

## 2. Xu hướng Nhu cầu Cộng đồng (Rút ra từ Issues)

| Hướng | Issue đại diện | Nhu cầu cốt lõi |
|:---|:---|:---|
| **Quản trị Skill cấp tổ chức** | [#228](https://github.com/anthropics/skills/issues/228) chia sẻ tổ chức, [#492](https://github.com/anthropics/skills/issues/492) bảo mật ranh giới tin cậy | Người dùng doanh nghiệp rất cần kho kỹ năng dành cho tổ chức, phân tách không gian tên, kiểm soát quyền, thay vì gửi tệp Slack |
| **Chất lượng và Tiêu chuẩn hóa Skill** | [#202](https://github.com/anthropics/skills/issues/202) thực tiễn tốt nhất cho skill-creator, [#556](https://github.com/anthropics/skills/issues/556) công cụ đánh giá bị lỗi | Từ "có thể chạy" đến "chạy tốt": Meta-Skill (phân tích chất lượng, đánh giá tự động, kiểm tra bảo mật) trở thành nhu cầu cơ sở hạ tầng thiết yếu |
| **Kiểm thử và Chất lượng Mã** | [#723](https://github.com/anthropics/skills/pull/723) testing-patterns | Cộng đồng không hài lòng với việc tạo mã, yêu cầu các chiến lược kiểm thử có hệ thống được nhúng vào luồng công việc của Skill |
| **Tiêu chuẩn Mở và Khả năng tương tác** | [#486](https://github.com/anthropics/skills/pull/486) ODT, [#16](https://github.com/anthropics/skills/issues/16) tiết lộ MCP | Chống khóa nhà cung cấp: Yêu cầu hỗ trợ định dạng tài liệu mở, tiêu chuẩn hóa giao thức MCP |
| **Lưu trữ và Bộ nhớ** | [#521](https://github.com/anthropics/skills/pull/521) record-knowledge, [#154](https://github.com/anthropics/skills/pull/154) shodh-memory | Duy trì trạng thái giữa các phiên là điểm nhức nhối thường xuyên, nhiều PR/Issue khám phá giải pháp song song |
| **Tương thích Nền tảng** | [#29](https://github.com/anthropics/skills/issues/29) Bedrock, [#532](https://github.com/anthropics/skills/issues/532) Xác thực SSO/Doanh nghiệp | Kịch bản xác thực không phải API Key (AWS Bedrock, SSO doanh nghiệp) bị ngắt kết nối chuỗi công cụ Skill |

---

## 3. Skills có tiềm năng cao chờ hợp nhất (bình luận sôi nổi + cập nhật gần đây)

| Skill | PR | Đánh giá tiềm năng | Tiến triển chính |
|:---|:---|:---|:---|
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | ⭐⭐⭐⭐⭐ | Cập nhật tháng 3, giải quyết vấn đề chất lượng tài liệu phổ biến, không xung đột với các skill docx/pdf hiện có, rào cản triển khai thấp |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | ⭐⭐⭐⭐⭐ | Cập nhật cuối tháng 3, bao phủ kiểm thử toàn diện, lấp đầy khoảng trống rõ ràng của cộng đồng, tác giả phản hồi tích cực |
| **odt** | [#486](https://github.com/anthropics/skills/pull/486) | ⭐⭐⭐⭐☆ | Vẫn cập nhật giữa tháng 4, nhu cầu tuân thủ tiêu chuẩn tài liệu mã nguồn mở rõ ràng, nhu cầu thiết yếu cho kịch bản chính phủ-doanh nghiệp |
| **sensory** | [#806](https://github.com/anthropics/skills/pull/806) | ⭐⭐⭐⭐☆ | Cập nhật đầu tháng 4, định vị khác biệt của tự động hóa gốc macOS, thiết kế quyền hạn trưởng thành |
| **record-knowledge** | [#521](https://github.com/anthropics/skills/pull/521) | ⭐⭐⭐☆☆ | Có sự chồng chéo chức năng với shodh-memory, cần quan sát thái độ của Anthropic đối với "giải pháp bộ nhớ chính thức" |
| **skill-quality-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | ⭐⭐⭐☆☆ | Giá trị của Meta-Skill cao, nhưng liên quan đến việc Anthropic tự đưa ra tiêu chuẩn chất lượng, chuỗi quyết định tương đối dài |

> **Lưu ý**: Loạt sửa lỗi của Lubrsy706 ([#541](https://github.com/anthropics/skills/pull/541), [#539](https://github.com/anthropics/skills/pull/539), [#538](https://github.com/anthropics/skills/pull/538)) mặc dù là sửa lỗi, nhưng cho thấy những người đóng góp cốt lõi của cộng đồng đang hoạt động, và tính ổn định của cơ sở hạ tầng đang tiếp tục được cải thiện.

---

## 4. Cái nhìn sâu sắc về Hệ sinh thái Skills

> **Cộng đồng đang chuyển từ "giai đoạn mở rộng chức năng" sang "giai đoạn quản trị và chất lượng"** - các loại Skill mới bùng nổ giai đoạn đầu (tài liệu, mã, thiết kế) đã bao phủ các kịch bản chính, mâu thuẫn cốt lõi hiện tại chuyển sang: làm thế nào để Skill được chia sẻ an toàn trong môi trường doanh nghiệp, làm thế nào để đánh giá chất lượng Skill, làm thế nào để duy trì trạng thái qua các phiên, và làm thế nào để chính cơ sở hạ tầng Skill (tạo, kiểm thử, phân phối) trở nên chuyên nghiệp hóa.

**Tóm tắt trong một câu**: Cộng đồng không còn chỉ hỏi "Claude có thể làm gì mới", mà còn truy vấn "Làm thế nào các Skill này có thể hoạt động đáng tin cậy, an toàn và bền vững trong môi trường sản xuất".

---

# Claude Code: Nhật ký Cập nhật Cộng đồng hàng ngày | Ngày 21 tháng 4 năm 2026

## Xem nhanh hôm nay

Tiêu điểm cộng đồng hôm nay tập trung vào **vấn đề hồi quy phiên bản v2.1.116** - người dùng Amazon Bedrock gặp lỗi 400 do không tương thích tham số `output_config.effort`, vấn đề này đã nhanh chóng được xác nhận bởi nguồn chính thức. Đồng thời, người đóng góp tài liệu `coygeek` tiếp tục đóng góp năng suất cao, gửi 4 Issue bổ sung tài liệu trong một ngày, phản ánh nhu cầu cấp bách của cộng đồng về tính đầy đủ của tài liệu chính thức.

---

## Phát hành Phiên bản

### [v2.1.116](https://github.com/anthropics/claude-code/releases/tag/v2.1.116) — Phiên bản Tối ưu Hiệu suất

| Hạng mục tối ưu | Chi tiết |
|--------|------|
| Khôi phục phiên `/resume` | **Tăng tốc 67% cho các phiên 40MB+**, tối ưu hóa hiệu quả xử lý mục nhánh chết |
| Hiệu suất khởi động MCP | Khởi động nhanh hơn khi cấu hình nhiều máy chủ stdio; `resources/templates/list` bị trì hoãn đến lần `@`-mention đầu tiên |

> ⚠️ **Rủi ro đã biết**: Phiên bản này đưa lỗi hồi quy tương thích API Bedrock trở lại (xem Issue #51377)

---

## Issues Nóng Cộng đồng

### 🔴 Hồi quy nghiêm trọng

| # | Tiêu đề | Trạng thái | Bình luận | Tính quan trọng |
|---|------|------|------|--------|
| [#51377](https://github.com/anthropics/claude-code/issues/51377) | **Lỗi 400 Bedrock v2.1.116: `output_config.effort` không được phép** | MỞ | 6 | **Chặn doanh nghiệp** |
| | Người dùng doanh nghiệp Amazon Bedrock hoàn toàn không thể sử dụng sau khi nâng cấp, lỗi rõ ràng chỉ ra tham số `output_config` của phiên bản mới. Lỗi này chắc chắn xảy ra trong môi trường WSL2 + Bedrock, cần sửa lỗi nóng khẩn cấp. | | | |

### 🔥 Thảo luận Nóng

| # | Tiêu đề | Trạng thái | Bình luận | Phản ứng cộng đồng |
|---|------|------|------|----------|
| [#45335](https://github.com/anthropics/claude-code/issues/45335) | Hủy đăng ký tự động gói quà tặng Claude Max 5x, tài khoản bị hạ cấp xuống Free | MỞ | 39 | **Khủng hoảng tin cậy phí** |
| | Gói quà tặng hết hạn sau 1 tuần mà người dùng không thực hiện thao tác nào, 14 lượt thích, 39 bình luận tập trung chất vấn tính ổn định của hệ thống phí Anthropic, có suy đoán về lỗ hổng đăng ký Apple ID tương tự. | | | |
| [#12346](https://github.com/anthropics/claude-code/issues/12346) | **Tích hợp GitLab (kết nối kho lưu trữ, MR, di động)** | MỞ | 23 | **Yêu cầu cao bỏ phiếu dài hạn** |
| | Yêu cầu chức năng Sử thi với 75 lượt thích, người dùng doanh nghiệp kêu gọi sánh ngang với độ sâu tích hợp GitHub, bao gồm xem xét mã, trạng thái CI/CD, quy trình phê duyệt di động. | | | |

### ⚡ Hiệu suất và Trải nghiệm

| # | Tiêu đề | Trạng thái | Bình luận | Điểm nhức nhối |
|---|------|------|------|------|
| [#2603](https://github.com/anthropics/claude-code/issues/2603) | **Hỗ trợ cache 1 giờ** | MỞ | 14 | Chi phí ngữ cảnh |
| | Hiện tại chỉ cache 5 phút, nhà phát triển kêu gọi tùy chọn 1 giờ để giảm chi phí API cho các tác vụ dài, 27 lượt thích phản ánh nhu cầu kinh tế rộng rãi. | | | |
| [#48237](https://github.com/anthropics/claude-code/issues/48237) | Điều chỉnh kích thước phông chữ tab trong Claude Desktop Code | MỞ | 11 | Khả năng tiếp cận |
| | Nền tảng Windows không thể điều chỉnh phông chữ, 32 lượt thích, ảnh hưởng đến sự thoải mái khi mã hóa trong thời gian dài, thuộc về nợ UX cơ bản. | | | |

### 🐛 Lỗi Chuỗi công cụ

| # | Tiêu đề | Trạng thái | Bình luận | Kịch bản |
|---|------|------|------|------|
| [#21242](https://github.com/anthropics/claude-code/issues/21242) | Hệ thống Skill nhắc lại quyền ghi tệp `.md` | MỞ | 9 | Gián đoạn quy trình làm việc Windows |
| | `settings.local.json` đã được cấp phép nhưng vẫn hiển thị cửa sổ bật lên, độc quyền trên Windows 10, mô hình quyền hệ thống tương tác với hệ thống tệp có lỗi. | | | |
| [#51361](https://github.com/anthropics/claude-code/issues/51361) | Lỗi cạnh tranh của công cụ Edit với linter/format-on-save | MỞ | 1 | **Kịch bản phát triển thường xuyên** |
| | Sau khi các công cụ như Prettier/Black sửa đổi tệp, công cụ Edit từ chối thực thi, gần như chắc chắn gặp phải trong các dự án front-end/Python hiện đại, cần cơ chế thao tác nguyên tử hoặc thử lại. | | | |
| [#51365](https://github.com/anthropics/claude-code/issues/51365) | Hiển thị diff khi công cụ Edit "String not found" | MỞ | 1 | Hiệu quả gỡ lỗi |
| | Khớp lỗi do sự khác biệt ký tự khoảng trắng (CRLF/LF, tab/space), hiện không có thông tin chẩn đoán, nhà phát triển buộc phải so sánh thủ công. | | | |

### 📱 Terminal và TUI

| # | Tiêu đề | Trạng thái | Bình luận | Ảnh hưởng |
|---|------|------|------|------|
| [#49985](https://github.com/anthropics/claude-code/issues/49985) | Nội dung hội thoại terminal hiển thị lại nhiều lần (v2.1.112) | MỞ | 3 | Gây nhiễu hình ảnh |
| | Vấn đề vẽ lớp TUI trên terminal Windows, mặc dù không mất chức năng nhưng làm giảm nghiêm trọng tính chuyên nghiệp. | | | |
| [#51379](https://github.com/anthropics/claude-code/issues/51379) | Lớp phủ `/btw` che khuất cửa sổ lời nhắc quyền | MỞ | 2 | Chặn tương tác |
| | Lỗi quản lý lớp UI của chức năng mới `/btw`, người dùng có thể không nhìn thấy hoặc nhấp vào lời nhắc quyền, dẫn đến quy trình bị kẹt. | | | |

---

## Tiến triển PR Quan trọng

> Lưu ý: Chỉ có 4 PR được cập nhật trong 24 giờ qua, trong đó 2 PR là PR không hợp lệ/thử nghiệm, tiến triển thực chất còn hạn chế.

| # | Tiêu đề | Trạng thái | Tác giả | Đánh giá |
|---|------|------|------|------|
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | **feat: open source claude code ✨** | MỞ | gameroman | ⭐ **Yêu cầu biểu tượng của cộng đồng** |
| | Đóng 5 Issue liên quan ( #59, #456, #2846, #22002, #41434 ), nhưng không có thay đổi mã thực tế, phản ánh sự mong đợi liên tục của nhà phát triển đối với mã nguồn mở, Anthropic chính thức chưa phản hồi. | | | |
| [#50643](https://github.com/anthropics/claude-code/pull/50643) | Main (Mẫu cấu hình dự án Ethos Aegis) | MỞ | GoodshytGroup | ❌ Gửi nhầm |
| | Tệp cấu hình dự án bên ngoài bị trộn lẫn vào kho lưu trữ chính, nghi ngờ thao tác nhầm của người mới, không có giá trị hợp nhất. | | | |
| [#50638](https://github.com/anthropics/claude-code/pull/50638) | Claude/fix readme images eu sfj | MỞ | GoodshytGroup | ❌ PR trống |
| | Không có mô tả, không thay đổi, gửi thử nghiệm. | | | |
| [#1](https://github.com/anthropics/claude-code/pull/1) | Create SECURITY.md | ĐÃ ĐÓNG | bcherny | Dọn dẹp lịch sử |
| | Cập nhật trạng thái PR cũ từ năm 2025, không có hành động mới. | | | |

**Kết luận**: Mức độ hoạt động của hệ sinh thái PR cực kỳ thấp, việc phát triển cốt lõi vẫn diễn ra nội bộ Anthropic, kênh đóng góp cộng đồng chưa mở cửa thực chất.

---

## Xu hướng Nhu cầu Chức năng

Dựa trên phân tích phân bố của 50 Issue đang hoạt động:

```
[Bổ sung Tài liệu]     ████████████████████  35%  (chủ yếu là loạt coygeek)
[Thích ứng Nền tảng]     ████████████          22%  (TUI/font chữ/quyền Windows)
[Tích hợp IDE]     ████████              15%  (VS Code/GitLab/Desktop)
[API/Mô hình]     ██████                12%  (Bedrock/Cache/Cấu hình)
[Chuỗi công cụ]       █████                 10%  (Edit/MCP/Thông báo)
[Phí/Tài khoản]    ██                     6%  (Đăng ký/Mã quà tặng)
```

**Ba Xu hướng Chính**:
1. **Cộng đồng hướng tài liệu** - Một người dùng duy nhất (`coygeek`) đóng góp 6+ Issue tài liệu, tiết lộ khoảng cách hệ thống giữa tài liệu chính thức và triển khai, bao gồm các chức năng nâng cao như hooks, worktree, permissions, context window.
2. **Nợ trải nghiệm Windows** - Mật độ các vấn đề như điều chỉnh phông chữ, render TUI, quyền đường dẫn cao hơn đáng kể so với macOS/Linux.
3. **Khoảng trống tích hợp Doanh nghiệp** - Hỗ trợ gốc GitLab, triển khai Bedrock riêng, chiến lược cache dài là rào cản cho việc áp dụng B-end.

---

## Sự quan tâm của Nhà phát triển

| Mức độ ưu tiên | Điểm nhức nhối | Issue điển hình | Trạng thái giảm nhẹ |
|--------|-----------|-----------|----------|
| P0 | **Tương thích môi trường doanh nghiệp Bedrock** | #51377 | ❌ Không có phản hồi chính thức |
| P1 | **Xung đột công cụ Edit với chuỗi công cụ phát triển hiện đại** | #51361, #51365 | ❌ Đang thiết kế |
| P1 | **Kiểm soát chi phí Cache (tùy chọn 1 giờ)** | #2603 | ❌ Bỏ quên dài hạn |
| P2 | **Mất trạng thái Extension VSCode** | #51362 | ❌ Mới báo cáo |
| P2 | **Độ tin cậy đẩy di động** | #50949, #49756 | ⚠️ Đóng một phần nhưng chưa giải quyết triệt để |
| P3 | **Xử lý đường dẫn Windows của hệ thống quyền** | #21242 | ❌ Chưa giải quyết trong nhiều tháng |

**Quan sát sâu sắc**: Claude Code đang chuyển đổi từ "người dùng thử nghiệm ban đầu" sang "công cụ tiêu chuẩn hóa nhóm", nhà phát triển không còn chấp nhận:
- Hành vi phí đăng ký không thể đoán trước
- Xung đột với hệ sinh thái CI/CD, linter, formatter hiện có
- Chi phí gỡ lỗi do tài liệu không nhất quán với triển khai

Tâm lý cộng đồng có đặc điểm **"chức năng đủ tốt, nhưng cơ sở hạ tầng (ổn định, tài liệu, tích hợp doanh nghiệp) phải theo kịp"**.

---

*Nhật ký hàng ngày được tạo dựa trên dữ liệu công khai GitHub, không đại diện cho lập trường chính thức của Anthropic.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex: Nhật ký Cập nhật Cộng đồng hàng ngày | Ngày 21 tháng 4 năm 2026

---

## Xem nhanh hôm nay

OpenAI đã phát hành phiên bản ổn định **Codex CLI v0.122.0**, nâng cao đáng kể tính tự chứa của gói cài đặt độc lập và sửa lỗi khởi động trên máy tính để bàn Windows/Intel Mac. Cộng đồng tiếp tục tập trung vào hai điểm nhức nhối chính là **tiêu thụ token bất thường** (Issue #14593 với 551 bình luận) và **lỗi API trong thời gian nhu cầu cao**. Đồng thời, nhóm đang tích cực đẩy mạnh các công việc cơ sở hạ tầng như **hỗ trợ gốc Amazon Bedrock** và **triển khai điểm theo dõi sự kiện phân tích terminal**.

---

## Phát hành Phiên bản

### rust-v0.122.0 (Bản ổn định)
| Thuộc tính | Nội dung |
|:---|:---|
| Phiên bản | 0.122.0 |
| Ngày phát hành | 2026-04-20 |
| Liên kết | [Bản phát hành GitHub](https://github.com/openai/codex/releases/tag/rust-v0.122.0) |

**Cập nhật cốt lõi:**
- **Nâng cao trải nghiệm cài đặt**: Gói cài đặt độc lập tự chứa hơn, lệnh `codex app` có thể mở hoặc cài đặt phiên bản máy tính để bàn chính xác trên Windows và Intel Mac ([#17022](https://github.com/openai/codex/issues/17022), [#18500](https://github.com/openai/codex/issues/18500))
- **Nâng cao tương tác TUI**: Hỗ trợ câu hỏi nhanh `/side` bên cạnh và hàng đợi đầu vào hiện hỗ trợ lệnh dấu gạch chéo và dấu nhắc shell `!`

> Phiên bản `v0.122.0-alpha.13` phát hành đồng thời là phiên bản phát hành trước, không có mô tả chức năng bổ sung.

---

## Issues Nóng Cộng đồng (Chọn lọc 10 mục)

| # | Issue | Trạng thái | Bình luận | Vấn đề cốt lõi | Phản ứng cộng đồng |
|:---|:---|:---|:---|:---|:---|
| [#14593](https://github.com/openai/codex/issues/14593) | Đốt token rất nhanh | 🔴 MỞ | **551** | Tốc độ tiêu thụ token bất thường, người dùng đăng ký Business phản ánh nghiêm trọng | 🔥 **Mức độ phổ biến cao nhất**, 230 👍, chưa được giải quyết trong 5 tuần, người dùng đặt câu hỏi về tính minh bạch phí |
| [#17615](https://github.com/openai/codex/issues/17615) | Triển khai Azure liên tục kích hoạt từ chối bảo mật | 🟢 ĐÃ ĐÓNG | 28 | GPT-5.2 high liên tục trả về "cannot assist" trên Azure | 18 👍, đã đóng nhưng phản ánh vấn đề cấu hình bộ lọc bảo mật Azure |
| [#17432](https://github.com/openai/codex/issues/17432) | Thiếu dependency gốc khi cài đặt npm trên Windows | 🔴 MỞ | 16 | Gói `@openai/codex-win32-x64` bị thiếu gây ra lỗi CLI | Vấn đề chặn người dùng Windows, 0 👍 nhưng bình luận sôi nổi |
| [#12773](https://github.com/openai/codex/issues/12773) | Hỗ trợ đa cửa sổ macOS | 🔴 MỞ | 12 | Không thể mở đồng thời nhiều cửa sổ dự án trên máy tính để bàn | 20 👍, yêu cầu chức năng dài hạn, nhu cầu kịch bản năng suất |
| [#15105](https://github.com/openai/codex/issues/15105) | Lỗi toàn diện API sau khi nén từ xa | 🔴 MỞ | 10 | Lỗi "high demand" kéo dài 2 giờ, CLI hoàn toàn không sử dụng được | Người dùng môi trường sản xuất bị ảnh hưởng, liên quan đến #18762 |
| [#18762](https://github.com/openai/codex/issues/18762) | Lỗi tạm thời trong thời gian nhu cầu cao | 🔴 MỞ | 9 | v0.122.0 vẫn gặp quá tải dịch vụ, Darwin ARM64 | Vấn đề lịch sử lặp lại với #6761, khủng hoảng tin cậy về tính ổn định |
| [#5259](https://github.com/openai/codex/issues/5259) | Render lại sau khi thay đổi kích thước terminal | 🔴 MỞ | 9 | Nội dung xuống dòng trên terminal hẹp không thể bố trí lại sau khi mở rộng | 28 👍, chi tiết trải nghiệm TUI, chưa được giải quyết trong thời gian dài |
| [#15057](https://github.com/openai/codex/issues/15057) | Xung đột AppArmor sandbox Linux | 🔴 MỞ | 8 | Chính sách bảo mật mặc định của Ubuntu chặn sandbox bwrap | Rào cản triển khai Linux doanh nghiệp, cần tắt thủ công các tính năng bảo mật |
| [#18463](https://github.com/openai/codex/issues/18463) | Sử dụng CPU bất thường 120%+ | 🔴 MỞ | 7 | Quá trình render tải nặng liên tục, tái hiện trên nhiều phiên bản | Lỗi hồi quy hiệu suất, ảnh hưởng thời lượng pin máy tính xách tay và đa nhiệm |
| [#18345](https://github.com/openai/codex/issues/18345) | v0.121.0 tiêu thụ token giảm 60% | 🟢 ĐÃ ĐÓNG | 6 | v0.121.0 tiêu thụ token nhiều hơn v0.116.0 tới 60%+ cho cùng một lời nhắc | Đã đóng nhưng không có giải thích nguyên nhân gốc rễ, người dùng lo ngại về hướng tối ưu hóa |

---

## Tiến triển PR Quan trọng (Chọn lọc 10 mục)

| # | PR | Tác giả | Chức năng/Sửa lỗi | Giá trị kỹ thuật |
|:---|:---|:---|:---|:---|
| [#18745](https://github.com/openai/codex/pull/18745) | Lựa chọn môi trường luồng cố định | starr-openai | Lưu trữ cấu hình môi trường theo luồng: phân tích theo thứ tự ưu tiên `ghi đè một lần > luồng cố định > cấu hình hiện có` | Khả năng cốt lõi cho quy trình làm việc phát triển đa môi trường |
| [#18744](https://github.com/openai/codex/pull/18744) | Nhà cung cấp gốc Amazon Bedrock tích hợp | celia-oai | Nhà cung cấp gốc `amazon-bedrock`, tích hợp điểm cuối mặc định và danh sách mô hình | ☁️ **Quan trọng cho chiến lược đa đám mây**, giảm gánh nặng cấu hình cho người dùng |
| [#17820](https://github.com/openai/codex/pull/17820) | Hỗ trợ xác thực AWS SigV4 | celia-oai | Thêm chữ ký SigV4 để tương thích với các điểm cuối được AWS lưu trữ (AOA/Mantle) tương thích với API OpenAI | Điều kiện tiên quyết tuân thủ bảo mật cho triển khai AWS doanh nghiệp |
| [#18748](https://github.com/openai/codex/pull/18748) | Triển khai điểm theo dõi sự kiện đánh giá công cụ terminal | rhan-oai | Phát sự kiện phân tích `terminal tool review` | Xây dựng khả năng quan sát, hỗ trợ quyết định sản phẩm |
| [#18747](https://github.com/openai/codex/pull/18747) | Lược đồ sự kiện đánh giá công cụ | rhan-oai | Định nghĩa cấu trúc dữ liệu điểm theo dõi | Phối hợp với #18748, cơ sở hạ tầng điểm theo dõi |
| [#18698](https://github.com/openai/codex/pull/18698) | Bật kiểm tra lint Clippy await-holding | bolinfest | Bắt buộc kiểm tra vi phạm giữ khóa bất đồng bộ | Chất lượng mã Rust và bảo mật đồng thời |
| [#18418](https://github.com/openai/codex/pull/18418) | Thu hẹp phạm vi khóa bất đồng bộ | bolinfest | Giảm thiểu các mẫu await-across-lock không cần thiết | Tối ưu hóa hiệu suất, tránh chặn bộ chạy bất đồng bộ |
| [#18446](https://github.com/openai/codex/pull/18446) | Gia cố bảo mật đường dẫn giữ lại sandbox | evawong-oai | Ngăn chặn bỏ qua chiến lược đường dẫn giữ lại khi không có thư mục `.git`/`.agents`; Tăng cường tính toàn vẹn của sandbox Linux/Mac | Lấp lỗ hổng biên bảo mật |
| [#17696](https://github.com/openai/codex/pull/17696) | Thu thập chỉ số thời gian token đầu tiên (TTFT) cho Guardian review | rhan-oai | Thu thập chỉ số thời gian token đầu tiên (TTFT) cho Guardian review | Hỗ trợ dữ liệu tối ưu hóa độ trễ |
| [#18030](https://github.com/openai/codex/pull/18030) | Phân tích lệnh gọi API Responses | rhan-oai | Phát sự kiện lệnh gọi API Responses | Hiểu biết về mẫu sử dụng API cốt lõi |

> **Quan sát xu hướng**: Loạt PR **codex-analytics** do `rhan-oai` dẫn đầu (#18748/#18747/#17090/#17089/#17088/#18030/#18029/#18028/#17696/#17695/#17693) tạo thành một dự án điểm theo dõi quy mô lớn, báo hiệu sự tăng tốc lặp lại sản phẩm dựa trên dữ liệu.

---

## Xu hướng Nhu cầu Chức năng

Dựa trên phân tích phân nhóm của 50 Issue đang hoạt động:

| Hướng | Issue đại diện | Mức độ phổ biến | Dự đoán xu hướng |
|:---|:---|:---|:---|
| **💰 Phí và Hiệu quả Token** | #14593, #18345, #18692, #18721 | 571 bình luận, 234 👍 | 🔴 **Điểm nhức nhối nhất**: Hiệu quả chi phí chế độ Fast, phán đoán giới hạn sai, biến động tiêu thụ giữa các phiên bản |
| **🪟 Hoàn thiện Hệ sinh thái Windows** | #17432, #17325, #18471, #17615 | 50 bình luận | 🟡 **Nợ nền tảng**: Thiếu dependency npm, tích hợp PowerShell, hành vi sandbox WSL không nhất quán |
| **🔒 Sandbox và Chính sách Bảo mật** | #15057, #18113, #10695, #18365 | 32 bình luận | 🟡 **Sẵn sàng cho Doanh nghiệp**: Xung đột AppArmor, sandbox bắt buộc không thể tắt, cô lập chuỗi khóa |
| **🖥️ Trải nghiệm Máy tính để bàn** | #12773, #12685, #18709, #18559 | 23 bình luận, 23 👍 | 🟢 **Mở rộng chức năng**: Đa cửa sổ, quản lý worktree, đồng bộ hóa phiên extension IDE |
| **📡 Tính ổn định Dịch vụ** | #15105, #18762, #6761 | 26 bình luận | 🔴 **Khủng hoảng tin cậy**: Lỗi "high demand" thường xuyên xảy ra, ảnh hưởng đến sử dụng sản xuất |
| **⚡ Tối ưu Hiệu suất** | #18463, #5259 | 35 bình luận, 30 👍 | 🟡 **Chi tiết trải nghiệm**: Sử dụng CPU, render terminal, phản hồi thay đổi kích thước |

---

## Sự quan tâm của Nhà phát triển

### 🔴 Điểm nhức nhối Thường xuyên

| Vấn đề | Phản hồi điển hình | Ảnh hưởng |
|:---|:---|:---|
| **Tiêu thụ token không thể đoán trước** | "v0.116.0 tiết kiệm token nhất, tăng lên sau khi nâng cấp 60%" (#18345) | Tất cả người dùng trả phí |
| **Phán đoán sai hệ thống giới hạn** | "Rõ ràng chưa đạt giới hạn nhưng báo đã sử dụng hết" (#18721) | Người dùng đăng ký Plus/Pro |
| **Công dân hạng hai Windows** | Cài đặt npm thành công nhưng chạy bị lỗi, PowerShell không khởi động được (#17432, #17325) | Nhà phát triển Windows |
| **Lỗi "nhu cầu cao" trở nên bình thường** | Thường xuyên kích hoạt ngay cả ngoài giờ cao điểm, CLI hoàn toàn không sử dụng được (#15105, #18762) | Người dùng môi trường sản xuất |

### 🟡 Nhu cầu cấp Kiến trúc

- **Đa đám mây/Triển khai tư nhân**: Hỗ trợ gốc Bedrock AWS (#18744, #17820) phản ánh nhu cầu của khách hàng doanh nghiệp thoát khỏi API chính thức của OpenAI
- **Minh bạch hóa khả năng quan sát**: Cộng đồng kêu gọi công khai chi tiết tiêu thụ token, theo dõi chuỗi lệnh gọi mô hình
- **Khả năng cấu hình sandbox**: Người dùng Linux cần tắt hoặc tùy chỉnh chính sách sandbox để phù hợp với môi trường CI/CD (#18113)

### 🟢 Tín hiệu Tích cực

- v0.122.0 sửa lỗi khởi động trên máy tính để bàn Windows/Mac, cho thấy trải nghiệm cài đặt được quan tâm
- Cải thiện tương tác terminal `/side` và hàng đợi đầu vào, tối ưu hóa tương tác terminal liên tục
- Triển khai điểm theo dõi sự kiện phân tích quy mô lớn, dự báo dữ liệu hiệu suất/trải nghiệm sẽ minh bạch hơn

---

*Nhật ký hàng ngày được tạo dựa trên dữ liệu công khai github.com/openai/codex | Thời gian thu thập dữ liệu: 2026-04-21*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI: Nhật ký Cập nhật Cộng đồng hàng ngày | Ngày 21 tháng 4 năm 2026

---

## 1. Xem nhanh hôm nay

Hôm nay không có bản phát hành phiên bản mới nào từ cộng đồng, nhưng mức độ hoạt động phát triển rất cao: **kiến trúc hệ thống bộ nhớ đã trải qua một lần tái cấu trúc lớn** (PR #25716 loại bỏ MemoryManagerAgent và sử dụng điều khiển bằng lời nhắc), đồng thời **hỗ trợ mô hình cục bộ** (`gemini gemma`) và **tăng cường chính sách bảo mật** (kiểm tra đệ quy lệnh shell) là trọng tâm hợp nhất mã. Về phía Issues, các vấn đề về độ ổn định như mất dữ liệu, phình to ngữ cảnh, và render UI tiếp tục gây ra phản ứng mạnh mẽ từ người dùng.

---

## 2. Phát hành Phiên bản

> **Không có bản phát hành phiên bản mới** (trong 24 giờ qua)

---

## 3. Issues Nóng Cộng đồng

| # | Tiêu đề | Trạng thái | Điểm cốt lõi |
|---|------|------|---------|
| **#25672** | [Kiểm tra toàn bộ dự án quá mức khiến các bản vá mã đơn giản bị lỗi](https://github.com/google-gemini/gemini-cli/issues/25672) | 🔴 MỞ | **Điểm nhức nhối về hiệu suất**: Bản vá tệp Go đơn giản kích hoạt quét toàn bộ dự án + tải thư viện tiêu chuẩn + phân tích cgo, khiến việc chỉnh sửa cực kỳ chậm. 5 bình luận phản ánh sự bất mãn chung của nhà phát triển đối với mô hình "coi trọng phân tích hơn chỉnh sửa". |
| **#22745** | [Đánh giá tác động của đọc, tìm kiếm và ánh xạ tệp nhận biết AST](https://github.com/google-gemini/gemini-cli/issues/22745) | 🔴 MỞ | **Hướng kiến trúc**: EPIC nội bộ của Google, khám phá các công cụ nhận biết AST để giảm thiểu ranh giới đọc sai, giảm nhiễu token. 5 bình luận, kết hợp với #22746 thành một bộ khảo sát chuỗi công cụ, báo hiệu khả năng nâng cấp lớp hiểu mã. |
| **#20885** | [Đệ quy UI/cuộn vô hạn khi mở rộng các diff lớn](https://github.com/google-gemini/gemini-cli/issues/20885) | 🔴 MỞ | **Độ ổn định**: Mở rộng 300 dòng mã trên macOS/Zed kích hoạt đệ quy vô hạn, crash terminal. 4 bình luận, lỗi cơ sở hạ tầng UI chưa được sửa lỗi trong thời gian dài. |
| **#25679** | [MẤT DỮ LIỆU lại và lại](https://github.com/google-gemini/gemini-cli/issues/25679) | 🔴 MỞ | **Nghiêm trọng**: Ngay cả khi người dùng rõ ràng nêu nguyên tắc "không mất dữ liệu" trong GEMINI.md, mô hình vẫn lặng lẽ xóa thẻ `xs:documentation` khỏi tệp XSD. **Tín hiệu khủng hoảng tin cậy**, 3 bình luận. |
| **#25656** | [Lỗi render Markdown với cú pháp kiểu LaTeX](https://github.com/google-gemini/gemini-cli/issues/25656) | 🔴 MỞ | **Chất lượng đầu ra**: Cú pháp LaTeX như `$` `\to` render lỗi, ảnh hưởng đến kịch bản tài liệu kỹ thuật. 3 bình luận, đã gắn thẻ help wanted. |
| **#24916** | [Gemini cli tiếp tục yêu cầu quyền đối với cùng một tệp](https://github.com/google-gemini/gemini-cli/issues/24916) | 🔴 MỞ | **Ma sát trải nghiệm**: Tùy chọn "Cho phép cho tất cả các phiên trong tương lai" không hoạt động không liên tục, logic bộ nhớ quyền có lỗi. 3 bình luận, vấn đề cân bằng giữa bảo mật và tiện lợi. |
| **#25166** | [Thực thi lệnh Shell bị kẹt với "Chờ đầu vào"](https://github.com/google-gemini/gemini-cli/issues/25166) | 🔴 MỞ | **Vấn đề treo máy**: Sau khi thực thi lệnh đơn giản, shell vẫn hiển thị "Chờ đầu vào người dùng", thực tế đã kết thúc. 3 lượt 👍 có lượt thích cao, lỗi nghiêm trọng chặn quy trình làm việc. |
| **#25688** | [Ngữ cảnh cực lớn sau khi dừng để giải phóng RAM](https://github.com/google-gemini/gemini-cli/issues/25688) | 🔴 MỞ | **Quản lý tài nguyên**: Sau khi khởi động lại, ngữ cảnh từ 40% tăng vọt lên >200%, `/compress` thất bại do thiếu token. **Có lỗi cơ bản trong chiến lược bộ nhớ và ngữ cảnh**. |
| **#23571** | [Mô hình thường xuyên tạo các tập lệnh tạm thời ở các vị trí ngẫu nhiên](https://github.com/google-gemini/gemini-cli/issues/23571) | 🔴 MỞ | **Ô nhiễm không gian làm việc**: Mô hình tạo ra nhiều tập lệnh chỉnh sửa ở các thư mục ngẫu nhiên khi thực thi trong shell bị hạn chế, chi phí dọn dẹp cao. Phản ánh sự ràng buộc hành vi Agent không đủ. |
| **#22819** | [Triển khai định tuyến bộ nhớ: toàn cục so với dự án](https://github.com/google-gemini/gemini-cli/issues/22819) | 🔴 MỞ | **Thiết kế sản phẩm**: Phân biệt lớp lưu trữ bộ nhớ `~/.gemini/` (sở thích toàn cục) và `.gemini/` (cụ thể dự án). 2 lượt 👍, PR #25716 hôm nay đang tái cấu trúc điều này. |

---

## 4. Tiến triển PR Quan trọng

| # | Tiêu đề | Trạng thái | Nội dung Chức năng/Sửa lỗi |
|---|------|------|--------------|
| **#25498** | [feat(cli): thêm thiết lập mô hình cục bộ `gemini gemma` được tinh giản](https://github.com/google-gemini/gemini-cli/pull/25498) | ✅ **ĐÃ HỢP NHẤT** | **Cột mốc mô hình cục bộ**: Cấu hình mô hình cục bộ Gemma chỉ bằng một cú nhấp chuột, bổ sung lệnh `gemini gemma logs` để xem nhật ký máy chủ LiteRT. Giảm rào cản triển khai AI cục bộ. |
| **#25716** | [refactor(memory): thay thế MemoryManagerAgent bằng chỉnh sửa bộ nhớ điều khiển bằng lời nhắc](https://github.com/google-gemini/gemini-cli/pull/25716) | 🔵 MỞ | **Tái cấu trúc kiến trúc**: Loại bỏ MemoryManagerAgent proxy phụ, thay vào đó sử dụng **chỉnh sửa điều khiển bằng lời nhắc bốn lớp** (toàn cục/dự án/phiên/tạm thời), proxy chính trực tiếp thao tác thông qua `edit`/`write_file` markdown. Giải quyết vấn đề proxy phụ chậm, xung đột nhiều. |
| **#25720** | [feat(core): tăng cường xác thực lệnh shell và thêm danh sách trắng công cụ cốt lõi](https://github.com/google-gemini/gemini-cli/pull/25720) | 🔵 MỞ | **Tăng cường bảo mật**: Công cụ engine chính sách hỗ trợ **kiểm tra đệ quy lệnh con, thay thế, shell con**; thêm danh sách trắng `tools.core` để người dùng kiểm soát chính xác các công cụ có rủi ro cao. |
| **#25718** | [feat(core): cho phép trình trích xuất kỹ năng đề xuất các bản vá GEMINI.md](https://github.com/google-gemini/gemini-cli/pull/25718) | 🔵 MỞ | **Thông minh hóa bộ nhớ**: Trình tự proxy trích xuất kỹ năng nền `confucius` có thể đề xuất bản vá cho `GEMINI.md` (trước đây chỉ hỗ trợ `SKILL.md`), sau khi được xem xét thủ công qua quy trình inbox sẽ được ghi vào. |
| **#25637** | [Feat: Thêm Tên Máy chủ vào Giao diện CLI](https://github.com/google-gemini/gemini-cli/pull/25637) | 🔵 MỞ | **Nâng cao UX**: Thanh trạng thái hỗ trợ hiển thị tên máy chủ, dễ nhận dạng môi trường hiện tại hơn trong các kịch bản phát triển đa thiết bị/từ xa. |
| **#25537** | [fix(cli): sử dụng xuống dòng trong bao bọc lệnh shell để tránh làm hỏng heredoc](https://github.com/google-gemini/gemini-cli/pull/25537) | 🔵 MỞ | **Sửa lỗi đa nền tảng**: Sử dụng `fs.mkdtempSync()` thay vì tên tệp tạm thời có thể dự đoán để chống tấn công symlink; chỉ định rõ ràng `PAGER=cat` để tránh trình phân trang tương tác bị treo. |
| **#25712** | [shell tool rc](https://github.com/google-gemini/gemini-cli/pull/25712) | 🔵 MỞ | **Trải nghiệm Shell**: Hỗ trợ cấu hình tùy chỉnh `shellToolRcFile`; khi không có tệp rc, buộc `PAGER=cat`, giải quyết vấn đề treo `more`/`less`. Tái hiện và mở rộng #5953. |
| **#25409** | [feat(core): kết nối ContextManager mới và AgentChatHistory](https://github.com/google-gemini/gemini-cli/pull/25409) | 🔵 MỞ | **Kiến trúc Ngữ cảnh**: Kết nối ContextManager mới và AgentChatHistory, đặt nền móng cho quản lý ngữ cảnh dài hạn của #25408. |
| **#25713-25715** | [Ba lần sửa lỗi của nileshpatil6](https://github.com/google-gemini/gemini-cli/pulls/nileshpatil6) | 🔵 MỞ | **Quản lý trường hợp biên**: Crash do chiều cột âm của terminal hẹp (#25713), `ENAMETOOLONG` cho đường dẫn cực dài (#25714), thiếu xác thực `text.response` chủ đề tùy chỉnh (#25715). |
| **#25344** | [fix(telemetry): triển khai cắt tỉa cấu trúc có giới hạn](https://github.com/google-gemini/gemini-cli/pull/25344) | 🔵 MỞ | **Độ ổn định cấp doanh nghiệp**: Đo từ xa có cấu trúc cắt tỉa có giới hạn, chống lỗi phân tích cú pháp JSON và OOM; sửa lỗi "Internal error" do thẻ có số lượng lớn trong Cloud Monitoring. |

---

## 5. Xu hướng Nhu cầu Chức năng

```
┌─────────────────────────────────────────────────────────┐
│  🔥 Hướng có độ phổ biến cao          │  Issue/PR đại diện                  │
├─────────────────────────────────────────────────────────┤
│  1. Mô hình cục bộ/Triển khai biên    │ #25498 hỗ trợ cục bộ gemma           │
│  2. Thông minh hóa hệ thống bộ nhớ       │ #25716 #25718 #22819 định tuyến bộ nhớ   │
│  3. Chi tiết hóa chính sách bảo mật       │ #25720 kiểm tra đệ quy shell #24916    │
│  4. Tối ưu hiệu suất và tài nguyên       │ #25672 quét toàn bộ dự án #25688 ngữ cảnh │
│  5. Độ ổn định UI/Terminal        │ #20885 đệ quy vô hạn #25218 render bảng │
│  6. Đảm bảo không mất dữ liệu       │ #25679 mất dữ liệu (cốt lõi tin cậy)     │
│  7. Hiểu mã/Ngữ nghĩa AST      │ #22745 #22746 nâng cấp ánh xạ mã      │
└─────────────────────────────────────────────────────────┘
```

> **Diễn giải xu hướng**: Cộng đồng đang chuyển từ "phong phú chức năng" sang "sản xuất đáng tin cậy", tái cấu trúc hệ thống bộ nhớ và tăng cường bảo mật là sự đầu tư rõ ràng của Google, trong khi các vấn đề về độ ổn định như mất dữ liệu, treo máy, phình to ngữ cảnh trở thành nút thắt cổ chai quan trọng cho việc giữ chân người dùng.

---

## 6. Sự quan tâm của Nhà phát triển

| Loại Điểm nhức nhối | Biểu hiện Cụ thể | Mức độ Khẩn cấp |
|---------|---------|--------|
| **An toàn Dữ liệu Tuyệt đối** | #25679 mất dữ liệu nhiều lần, ngay cả khi người dùng ràng buộc rõ ràng vẫn bị vi phạm; #23582 proxy phụ không nhận biết chế độ phê duyệt | 🔴🔴🔴 |
| **Hiệu suất và Tài nguyên mất kiểm soát** | #25672 chỉnh sửa đơn giản kích hoạt phân tích toàn bộ; #25688 ngữ cảnh phình to 200%+ sau khi khởi động lại; sử dụng bộ