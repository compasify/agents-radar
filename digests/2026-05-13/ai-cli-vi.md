# Báo cáo Tình hình Cộng đồng Công cụ AI CLI Hàng ngày 2026-05-13

> Thời gian tạo: 2026-05-13 00:24 UTC | Số công cụ được bao phủ: 9

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

## So sánh Ngang

# Báo cáo Phân tích So sánh Ngang Hệ sinh thái Công cụ AI CLI | 2026-05-13

---

## 1. Toàn cảnh Hệ sinh thái

Hệ sinh thái công cụ AI CLI hiện tại thể hiện cấu trúc **"Ba ông lớn dẫn đầu (Claude Code / Codex / Gemini CLI) dẫn dắt cơ sở hạ tầng, các công cụ chuyên biệt (Kimi / Qwen / DeepSeek) đuổi theo sự khác biệt hóa, và các giải pháp thay thế mã nguồn mở (OpenCode / Pi) khám phá sự đổi mới kiến trúc"**. Cạnh tranh cốt lõi đã chuyển từ "có chạy được không" sang cuộc chiến ba chiều về **độ sâu kỹ thuật đầu cuối** (độ ổn định hiển thị, định dạng sao chép, ánh xạ phím), **độ tin cậy cấp doanh nghiệp** (bộ kết nối MCP, lưu trữ quyền, ghi nguyên tử) và **tính minh bạch về chi phí** (đo lường token, tỷ lệ truy cập bộ nhớ đệm, định tuyến hạn ngạch). Việc tái cấu trúc mã nguồn cấp thấp bằng các ngôn ngữ hệ thống như Rust/Effect, quá trình chuyển đổi sang kiến trúc Daemon hóa và việc sẵn sàng công nghiệp hóa hệ sinh thái giao thức MCP/ACP trở thành dòng kỹ thuật xuyên suốt ngành.

---

## 2. So sánh Mức độ Hoạt động của từng Công cụ

| Công cụ | Issues (Cập nhật 24h) | PRs (Cập nhật 24h) | Động thái Phát hành | Đánh giá Mức độ Hoạt động |
|:---|:---|:---|:---|:---|
| **Claude Code** | ~10 mục theo dõi trọng điểm | 3 mục đang hoạt động (chủ yếu là tài liệu) | v2.1.140 (Sửa lỗi khớp Agent, sửa lỗi treo `/goal`) | ⭐⭐⭐⭐⭐ Giai đoạn bảo trì ổn định |
| **OpenAI Codex** | Cao (#14593 một mục 575 bình luận) | 10 mục dày đặc (tái cấu trúc kiến trúc quyền) | 3 lần phát hành liên tiếp Rust CLI α.7→α.9 | ⭐⭐⭐⭐⭐ **Hoạt động cao nhất** |
| **Gemini CLI** | ~10 mục (thêm định tuyến 429) | 10 mục (hợp nhất chế độ Auto, sửa lỗi bảo mật) | v0.43.0-preview.0 + v0.42.0 hai phiên bản | ⭐⭐⭐⭐⭐ Giai đoạn lặp lại nhanh chóng |
| **GitHub Copilot CLI** | 32 mục | **0 mục** (chế độ sửa lỗi nóng khẩn cấp) | v1.0.46 (Sửa lỗi khẩn cấp PowerShell) | ⭐⭐⭐☆☆ Phản ứng dựa trên sự kiện |
| **Kimi Code CLI** | 10 mục | 10 mục (đóng góp cộng đồng sôi nổi) | v1.43.0 (Tối ưu hóa UI/viễn trắc) | ⭐⭐⭐⭐☆ Đang tăng ổn định |
| **OpenCode** | **50 mục** | **50 mục** (làn sóng di chuyển kiểm thử kitlangton) | Không có phát hành mới, lỗi quay lại đầu vào 1.14.48 cần sửa | ⭐⭐⭐⭐⭐ **Tổng số Issue/PR cao nhất** |
| **Pi** | ~10 mục (đóng hàng loạt Issue cũ tái cấu trúc) | 8 mục (7 đóng 1 mở) | Không có | ⭐⭐⭐☆☆ Giai đoạn hoàn thiện tái cấu trúc |
| **Qwen Code** | 37 mục | **50 mục** | v0.15.11-preview.x hai lần phát hành | ⭐⭐⭐⭐⭐ Giai đoạn bùng nổ kỹ thuật |
| **DeepSeek TUI** | ~15 mục | 10 mục (sửa lỗi nhấp nháy dày đặc) | v0.8.32 (Gây ra lỗi quay lại nhấp nháy) | ⭐⭐⭐⭐☆ Giai đoạn tập trung vào chất lượng |

> **Phân tích cốt lõi**: Codex, Gemini CLI, OpenCode, Qwen Code tạo thành nhóm "bốn cao" hôm nay (cao Issues + cao PRs + tần suất phát hành cao), phản ánh sự cạnh tranh nóng bỏng ở lớp cơ sở hạ tầng; 0 PRs và chế độ sửa lỗi nóng khẩn cấp của Copilot CLI bộc lộ rủi ro về tính khép kín của quy trình phát hành.

---

## 3. Định hướng Tính năng được Quan tâm Chung

| Định hướng Tính năng | Công cụ Liên quan | Yêu cầu Cụ thể & Bằng chứng |
|:---|:---|:---|
| **🖥️ Độ sâu Kỹ thuật Terminal/TUI** | Claude Code #18170（107 bình luận）, OpenCode #16100/#27096, DeepSeek TUI #1378/#1515, Qwen Code #3838 | **Ô nhiễm định dạng sao chép** (thụt lề/khoảng trắng thừa), **lỗi quay lại ánh xạ phím** (Dvorak/bàn phím số), **nhấp nháy hiển thị** (resize/xuất dạng luồng), **terminal bị treo** (shell chờ nhập) — tính nhất quán của terminal đa nền tảng trở thành "vua về tiếng nói" |
| **💰 Tính minh bạch Chi phí & Quản lý hạn ngạch** | Codex #14593（575 bình luận）, Gemini CLI #26862/#26619, DeepSeek TUI #1177, Kimi #1925 | **Hộp đen tiêu thụ Token** (không có đo lường thời gian thực, tiêu thụ bất thường), **giảm cấp thông minh 429** (thử lại vòng lặp vô hạn vs định tuyến tự động), **tiêu thụ hạn ngạch ma** (khóa mô hình không có hiệu lực), **khả năng quan sát tỷ lệ truy cập bộ nhớ đệm** |
| **🔌 Công nghiệp hóa Hệ sinh thái MCP/ACP** | Claude Code #10071/#10265, Codex #17444/#21624/#22399, Gemini CLI #26954, Copilot CLI #3257, DeepSeek TUI #1092/#1488, Qwen Code #3994 | **Độ tin cậy kết nối** (ngắt kết nối khi không hoạt động, không có kết nối lại tự động), **an toàn giao thức** (MCP Ssafe Grade F→đã sửa), **duy trì phiên** (mã-id-phiên), **phơi bày công cụ đầy đủ** (bộ điều hợp ACP) |
| **🔐 Cân bằng Quyền & Tự động hóa** | Claude Code #53728, Codex #22327 (tái cấu trúc quyền cấp luồng), OpenCode #8463 (47 👍 Chế độ YOLO), Kimi #2249 (thống nhất chế độ quyền), Qwen Code #4016 | **CI/CD không người lái** (cờ bỏ qua toàn cục), **lưu trữ quyền** (lưu trữ liên phiên), **xung đột nguồn xác thực đa** (khóa API ghi đè đăng ký một cách im lặng), **chính sách Hook doanh nghiệp** |
| **🧠 Tính tự chủ & Độ tin cậy của Agent** | Gemini CLI #21968/#22323, Claude Code #10238 (thư mục con Skills), Codex #21343 (lỗi nén ngữ cảnh), Qwen Code #4055/#3730 (tự lặp lại/tự dừng), Pi #4290 (lỗi phán đoán vượt giới hạn độ dài) | **Cơ chế khám phá kỹ năng** (không được gọi sau khi cấu hình), **tính đúng đắn ngữ nghĩa của máy trạng thái** (thành công vs gián đoạn vs cắt ngắn), **độ ổn định của nhiệm vụ dài** (>1 tuần chạy), **ngữ cảnh đáng tin cậy** (bị lỗi sau khi nén) |
| **🔄 Quản lý Vòng đời Phiên** | Copilot CLI #2058 (8 bình luận về `/fork`), OpenCode #27163 (nguyên bản `/goal`), Kimi #2218 (đối chiếu Codex `/goal`), Codex #12098 (phiên song song thẻ) | **Phân nhánh/tạm dừng/tiếp tục** (ngữ nghĩa phân nhánh kiểu Git), **đồng bộ hóa đa thiết bị** (lịch sử CLI/Desktop), **chạy thời gian dài** (làm mới token không bị gián đoạn) |

---

## 4. Phân tích Định vị Khác biệt

| Công cụ | Trọng tâm Chức năng Cốt lõi | Chân dung Người dùng Mục tiêu | Đặc điểm Tuyến Công nghệ |
|:---|:---|:---|:---|
| **Claude Code** | **Sắp xếp Công cụ Agent + Hệ sinh thái Skills** | Nhóm doanh nghiệp, người bảo trì kho mã nguồn phức tạp | Toàn diện TypeScript, gắn bó sâu với mô hình Anthropic; tinh chỉnh chi tiết như khớp màu Agent, khớp `subagent_type`; thiếu sót tài liệu được lấp đầy một cách có hệ thống bởi cộng đồng |
| **OpenAI Codex** | **Kiến trúc Quyền An toàn + Tuân thủ Doanh nghiệp** | Tổ chức lớn, các tình huống nhạy cảm về an ninh | Đang tái cấu trúc **cơ chế cốt lõi Rust**, mô hình quyền cấp luồng (#22327) là sâu nhất trong ngành; cơ sở hạ tầng thương mại hóa thị trường plugin (#22397); mở rộng IDE và CLI song song |
| **Gemini CLI** | **Định tuyến Thông minh + Hệ thống Trí nhớ** | Người dùng hệ sinh thái Google, các tình huống chuyển đổi mô hình theo yêu cầu | **Hợp nhất chế độ Auto** (định tuyến động độ phức tạp), xóa nợ kỹ thuật sau khi ra mắt chức năng JIT context + memory; tăng cường an ninh MCP (MCP Ssafe Grade F→đã sửa) |
| **GitHub Copilot CLI** | **Tích hợp Nguyên bản GitHub + Phiên là Mã** | Người dùng nặng GitHub, người đăng ký Copilot hiện tại | Phát triển đóng, tích hợp sâu với gh CLI; ý tưởng phân nhánh phiên `/fork` tiên phong nhưng thực hiện thô sơ; tính minh bạch của quy trình phát hành bị nghi ngờ |
| **Kimi Code CLI** | **Tương thích OpenAI + Lựa chọn Phiên bản Mô hình** | Nhà phát triển Trung Quốc, doanh nghiệp tìm kiếm giải pháp thay thế nội địa | Tích cực áp dụng tương thích API OpenAI (#2208/#1947) để phá vỡ sự cô lập hệ sinh thái; tranh cãi về việc lặp lại mô hình K2.5/K2.6 dẫn đến "nâng cấp năng lực ≠ nâng cấp trải nghiệm" |
| **OpenCode** | **Quản lý Nhiều Nhà cung cấp + Kiến trúc Effect** | Nhà phát triển cao cấp, nhu cầu quản lý nhiều mô hình/tài khoản | **Kiến trúc hàm Effect** độc đáo (di chuyển kiểm thử do kitlangton chủ trì); khả năng cấu hình cấp doanh nghiệp như OpenRouter đa phiên bản, cố định nhà cung cấp dẫn đầu; API danh sách mô hình v2 khám phá theo chương trình |
| **Pi** | **Hệ sinh thái LLM Cục bộ + Thích ứng Đa đám mây** | Người dùng ưu tiên quyền riêng tư, người triển khai mô hình cục bộ | **Môi trường chạy Bun**; đề xuất cao nhất về hỗ trợ gốc llama.cpp/ollama/LM Studio (23 👍); phản ứng nhanh về an ninh chuỗi cung ứng (shrinkwrap) |
| **Qwen Code** | **Daemon hóa + Tuân thủ An ninh Doanh nghiệp** | Thị trường chính phủ-doanh nghiệp Trung Quốc, các tổ chức yêu cầu giải pháp nội địa hóa | **Tiến bộ kiến trúc tiến trình守护 HTTP qwen serve** (#3889); lưu trữ mã hóa AES-256-GCM, ghi tệp nguyên tử, theo dõi viễn trắc phân lớp — **đường cơ sở an ninh cấp doanh nghiệp đầy đủ nhất** |
| **DeepSeek TUI** | **Tối ưu hóa Bộ nhớ đệm Tiền tố + Hiệu suất Terminal** | Người dùng cực kỳ nhạy cảm về chi phí, người dùng nặng API DeepSeek | **Theo dõi độ ổn định của prefix-cache** (#1517) đối chiếu tỷ lệ truy cập 95%+ của Reasonix; thực thi công cụ song song chunk an toàn (#1535); khả năng tùy chỉnh hệ thống chủ đề (Catppuccin/Tokyo Night) |

---

## 5. Mức độ Phổ biến & Sự Trưởng thành của Cộng đồng

### 🔥 Các bậc Độ hoạt động của Cộng đồng

| Bậc | Công cụ | Cơ sở Phán đoán |
|:---|:---|:---|
| **Bậc Một: Giai đoạn Bùng nổ Kỹ thuật** | **Codex, Gemini CLI, OpenCode, Qwen Code** | Thay đổi mã trung bình hàng ngày 50+, tái cấu trúc cấp kiến trúc đang diễn ra, người đóng góp cộng đồng đa dạng (không phải người bảo trì duy nhất) |
| **Bậc Hai: Giai đoạn Lặp lại Ổn định** | **Claude Code, Kimi, DeepSeek TUI** | Tốc độ phiên ổn định (2-4 tuần), phản hồi Issue kịp thời, tinh chỉnh sâu vào các lĩnh vực cụ thể |
| **Bậc Ba: Giai đoạn Tái cấu trúc/Điều chỉnh** | **Pi, Copilot CLI** | Pi đang trong giai đoạn dọn dẹp sau "Tái cấu trúc lớn"; Copilot CLI phát triển đóng dẫn đến kênh tham gia cộng đồng hẹp |

### 📊 Phân tích Chéo Chỉ số Trưởng thành

| Chiều | Trưởng thành nhất | Kém trưởng thành nhất | Giải thích |
|:---|:---|:---|:---|
| **Kỹ thuật Terminal** | Claude Code (tinh chỉnh chi tiết sâu) | DeepSeek TUI (lỗi quay lại nhấp nháy v0.8.32) | Định dạng sao chép, ánh xạ phím, độ ổn định resize |
| **An ninh Doanh nghiệp** | Qwen Code (mã hóa + ghi nguyên tử + theo dõi) | Pi (shrinkwrap vừa được đề xuất) | Tính toàn vẹn dữ liệu, an ninh chuỗi cung ứng, tuân thủ kiểm toán |
| **Tính mở của Hệ sinh thái** | OpenCode (đa Nhà cung cấp + API v2) | Kimi (vẫn đang đuổi kịp tương thích OpenAI) | Khám phá mô hình, tích hợp bên thứ ba, khả năng tương tác cấu hình |
| **Tính minh bạch Chi phí** | — | **Điểm yếu toàn ngành** | Codex #14593 575 bình luận, Gemini #26619 "hạn ngạch ma" — không có công ty nào thực sự giải quyết |
| **Tính đầy đủ của Tài liệu** | Claude Code (cải thiện sau khi cộng đồng lấp đầy một cách có hệ thống) | Copilot CLI (ghi chú phát hành không khớp với thực tế #3252) | Tính chính xác của nhật ký thay đổi, tham khảo cấu hình, hướng dẫn di chuyển |

---

## 6. Tín hiệu Xu hướng Đáng chú ý

### 🎯 Giá trị Tham khảo cho Người ra Quyết định Kỹ thuật

| Tín hiệu Xu hướng | Nguồn Bằng chứng | Ý nghĩa Chiến lược |
|:---|:---|:---|
| **"Định dạng Sao chép Terminal" trở thành Kẻ thù Chung trên các Công cụ** | Claude Code #18170 (107 bình luận), #37796; OpenCode #16100 | **Kỹ thuật TUI đã nâng cấp từ "tối ưu hóa trải nghiệm" lên "cơ sở hạ tầng năng suất"** — khi đánh giá AI CLI, cần đưa kiểm thử khả năng tương thích terminal vào CI, thay vì chỉ xác minh chức năng |
| **Tái cấu trúc Cốt lõi CLI bằng Rust/Ngôn ngữ Hệ thống** | Codex Rust CLI chuỗi α, tối ưu hóa hiệu suất Qwen Code | **Nút thắt cổ chai môi trường chạy Python/Node.js hiện rõ**, an toàn bộ nhớ và hiệu suất trong các tình huống phiên dài, đồng thời cao trở thành rào cản khác biệt; lựa chọn công nghệ cần chú ý đến sự phát triển của môi trường chạy cấp thấp |
| **Daemon hóa = Điểm phân chia Thế hệ Kiến trúc** | Qwen Code #3803/#3889 (qwen serve), Codex phi máy chủ hóa quyền cấp luồng | Công cụ CLI đang tiến hóa thành "dịch vụ thường trú", hỗ trợ gọi từ xa, đa máy khách, kích hoạt Webhook; **đánh giá kiến trúc cần bao gồm chế độ triển khai máy chủ** |
| **MCP từ "Giao thức Demo" đến "Nợ Sản xuất"** | Các Issue MCP dày đặc trên tất cả các công cụ: Claude #10071, Codex #17444, Gemini #26954, Copilot #3257, DeepSeek #1488 | Hệ sinh thái MCP bước vào "giai đoạn đau đớn công nghiệp hóa", bộ kết nối, duy trì phiên, giảm cấp lỗi, đường cơ sở an ninh trở thành ngưỡng cứng; **mua sắm doanh nghiệp cần xác minh cam kết cấp sản xuất của nhà cung cấp MCP** |
| **"Lựa chọn Phiên bản Mô hình" làm phản tác dụng các nhà sản xuất mô hình** | Kimi #1925 (tranh cãi gay gắt K2.5 vs K2.6), Gemini #26714 (hợp nhất chế độ Auto) | **Người dùng bắt đầu từ chối "mới nhất là tốt nhất"**, yêu cầu giữ lại phiên bản cũ, chuyển đổi minh bạch, hành vi có thể dự đoán; chiến lược lặp lại mô hình cần bao gồm xem xét trải nghiệm người dùng |
| **Tính minh bạch Chi phí = Cổng thanh toán** | Codex #14593 (575 bình luận, 2 tháng không giải quyết), Gemini #26619 (người dùng trả phí phản đối), DeepSeek #1177 (đối chiếu tỷ lệ truy cập bộ nhớ đệm) | **Hộp đen kinh tế Token đang phá hủy lòng tin thanh toán**; sản phẩm cần tích hợp đo lường thời gian thực, bảng điều khiển tỷ lệ truy cập, công cụ diff chi phí giữa các phiên bản |
| **"Phiên là Mã" định hình lại mô hình tương tác** | Copilot #2058 (/fork), OpenCode #27163 (/goal), Kimi #2218 (đối chiếu Codex) | Nhà phát triển coi AI CLI là **môi trường hợp tác trạng thái**, yêu cầu ngữ nghĩa phân nhánh, lưu trữ, phục hồi kiểu Git; thiết kế sản phẩm chuyển từ "hỏi đáp" sang "sắp xếp quy trình làm việc" |

---

> **Thời gian tạo báo cáo**: 2026-05-13 | **Nguồn dữ liệu**: Kho lưu trữ công khai GitHub của từng công cụ | **Khung phân tích**: Dựa trên so sánh chéo 400+ Issues/PRs/Phát hành

---

## Báo cáo Chi tiết Từng Công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Điểm nóng Cộng đồng Claude Code Skills

> Nguồn dữ liệu: [anthropics/skills](https://github.com/anthropics/skills)

# Báo cáo Điểm nóng Cộng đồng Claude Code Skills (Tính đến ngày 2026-05-13)

---

## 1. Xếp hạng Skills Phổ biến (theo mức độ quan tâm của cộng đồng)

| Xếp hạng | Skill | Mô tả Chức năng | Trạng thái | Liên kết |
|:---|:---|:---|:---|:---|
| 1 | **document-typography** | Kiểm soát chất lượng bố cục tài liệu do AI tạo ra: ngăn chặn các vấn đề bố cục phổ biến như dòng đơn, dòng cô đơn, đánh số sai | 🟡 Mở | [PR #514](https://github.com/anthropics/skills/pull/514) |
| 2 | **testing-patterns** | Bộ kỹ năng kiểm thử toàn diện: triết lý kiểm thử (Testing Trophy), kiểm thử đơn vị (mô hình AAA), kiểm thử thành phần React, kiểm thử E2E | 🟡 Mở | [PR #723](https://github.com/anthropics/skills/pull/723) |
| 3 | **odt** | Tạo, điền mẫu, phân tích và chuyển đổi sang HTML của định dạng OpenDocument (.odt/.ods) | 🟡 Mở | [PR #486](https://github.com/anthropics/skills/pull/486) |
| 4 | **sensory** | Tự động hóa macOS gốc: thay thế việc sử dụng máy tính dựa trên ảnh chụp màn hình bằng AppleScript/osascript, kiểm soát quyền phân cấp | 🟡 Mở | [PR #806](https://github.com/anthropics/skills/pull/806) |
| 5 | **AURELION suite** | Bộ khung nhận thức bốn phần: mẫu tư duy có cấu trúc (kernel), cố vấn chuyên nghiệp (advisor), đại lý tự chủ (agent), bộ nhớ bền vững (memory) | 🟡 Mở | [PR #444](https://github.com/anthropics/skills/pull/444) |
| 6 | **ServiceNow platform** | Trợ lý nền tảng ServiceNow cấp doanh nghiệp: bao gồm ITSM/ITOM/ITAM/FSM/SPM/SecOps/IntegrationHub | 🟡 Mở | [PR #568](https://github.com/anthropics/skills/pull/568) |
| 7 | **AppDeploy** | Triển khai ứng dụng web toàn diện chỉ với một cú nhấp chuột: triển khai trực tiếp lên URL công khai thông qua Claude, hỗ trợ quản lý vòng đời | 🟡 Mở | [PR #360](https://github.com/anthropics/skills/pull/360) |
| 8 | **masonry-generate-image-and-videos** | Tạo ảnh/video AI: tích hợp Imagen 3.0, Veo 3.1, hỗ trợ quản lý tác vụ và tải xuống | 🟡 Mở | [PR #335](https://github.com/anthropics/skills/pull/335) |

**Điểm nóng thảo luận**: `document-typography` giải quyết các vấn đề phổ biến về tài liệu do AI tạo ra ("ảnh hưởng đến mọi tài liệu do Claude tạo ra"); `testing-patterns` lấp đầy khoảng trống phương pháp luận kiểm thử toàn diện; `sensory` đại diện cho mô hình mới về "giải pháp thay thế tự động hóa gốc cho ảnh chụp màn hình".

---

## 2. Xu hướng Yêu cầu của Cộng đồng (Lọc từ Issues)

| Hướng | Issue Đại diện | Yêu cầu Cốt lõi |
|:---|:---|:---|
| **Chia sẻ Skill Cấp Tổ chức** | [#228](https://github.com/anthropics/skills/issues/228)（11 bình luận, 7 👍） | Chia sẻ trực tiếp kho Skill trong doanh nghiệp, thay thế quy trình vụng về truyền tệp qua Slack + tải lên thủ công |
| **Độ tin cậy Kích hoạt Skill** | [#556](https://github.com/anthropics/skills/issues/556)（8 bình luận, 6 👍） | Tỷ lệ kích hoạt Skill bằng không trong chế độ `claude -p`, cần công cụ đánh giá/gỡ lỗi khẩn cấp |
| **Tương tác Giao thức MCP** | [#16](https://github.com/anthropics/skills/issues/16) | Phơi bày Skills dưới dạng MCP, cho phép gọi theo thuật toán (`generateAlgorithmArt({...})`) |
| **Ranh giới Tin cậy An ninh** | [#492](https://github.com/anthropics/skills/issues/492)（6 bình luận, 2 👍） | Skill cộng đồng chiếm dụng không gian tên `anthropic/`, cần ngăn chặn lạm dụng quyền |
| **Loại bỏ Trùng lặp Plugin & Tải Chính xác** | [#189](https://github.com/anthropics/skills/issues/189)（6 bình luận, 8 👍）, [#1087](https://github.com/anthropics/skills/issues/1087) | `document-skills` và `example-skills` tải trùng lặp, plugin nên tuân theo khai báo `marketplace.json` |
| **Tương thích AWS Bedrock** | [#29](https://github.com/anthropics/skills/issues/29) | Nhu cầu truy cập mô hình không phải của Anthropic |
| **Tối ưu hóa Nén Dữ liệu MCP** | [#1102](https://github.com/anthropics/skills/issues/1102) | Dữ liệu trả về quá nhiều từ MCP loại cơ sở dữ liệu gây tắc nghẽn ngữ cảnh |

---

## 3. Skills Tiềm năng Cao Chờ Gộp

| Skill | Tác giả | Giá trị Chính | Rủi ro Chặn | Liên kết |
|:---|:---|:---|:---|:---|
| **document-typography** | PGTBoos | Tính phổ quát cực cao, ảnh hưởng đến chất lượng đầu ra của mọi tài liệu; mô tả vấn đề chính xác | Cần Anthropic xem xét tính tương thích của quy tắc bố cục và quy trình tạo của Claude | [PR #514](https://github.com/anthropics/skills/pull/514) |
| **testing-patterns** | 4444J99 | Khoảng trống phương pháp luận trong lĩnh vực kiểm thử, bao gồm chuỗi đầy đủ từ triết học đến thực hành | Khối lượng lớn, có thể cần tách hoặc tinh giản | [PR #723](https://github.com/anthropics/skills/pull/723) |
| **sensory** | AdelElo13 | Tự động hóa AppleScript nhẹ và chính xác hơn so với ảnh chụp màn hình; thiết kế phân cấp quyền trưởng thành | Chỉ dành cho macOS, khả năng mở rộng đa nền tảng hạn chế | [PR #806](https://github.com/anthropics/skills/pull/806) |
| **odt** | GitHubNewbie0 | Hỗ trợ tiêu chuẩn tài liệu mã nguồn mở (ISO), bổ sung cho skill docx/pdf hiện có | Cần xác minh độ sâu tích hợp với hệ sinh thái LibreOffice | [PR #486](https://github.com/anthropics/skills/pull/486) |
| **skill-quality-analyzer** + **skill-security-analyzer** | eovidiu | Siêu kỹ năng (Meta Skill): tự động đánh giá chất lượng và an ninh của Skill, hệ sinh thái tự hoàn thiện | Tiêu chí đánh giá cần phù hợp với thông số kỹ thuật của chính thức | [PR #83](https://github.com/anthropics/skills/pull/83) |
| **codebase-inventory-audit** | p19dixon | Quản lý nợ kỹ thuật: phát hiện mã bị mồ côi, tệp không sử dụng, thiếu tài liệu | Quy trình làm việc 10 bước có thể quá nặng nề | [PR #147](https://github.com/anthropics/skills/pull/147) |

> **Lưu ý**: Tất cả các PR có tiềm năng cao đều ở trạng thái **Mở**, không có PR nào được gộp. Cộng đồng đóng góp sôi nổi nhưng tốc độ gộp của chính thức thận trọng.

---

## 4. Phân tích Hệ sinh thái Skills

> **Mâu thuẫn Cốt lõi**: Cộng đồng đang có sự đổi mới bùng nổ ở "phía sản xuất Skill" (bố cục tài liệu, phương pháp luận kiểm thử, tích hợp nền tảng doanh nghiệp, tự động hóa gốc), nhưng cơ sở hạ tầng ở "phía tiêu thụ Skill" thì cực kỳ tụt hậu — cơ chế phân phối như chia sẻ tổ chức, độ tin cậy kích hoạt, loại bỏ trùng lặp plugin, tương tác MCP vẫn chưa được mở khóa, dẫn đến các Skill chất lượng cao khó có thể triển khai quy mô lớn.

---

*Báo cáo dựa trên dữ liệu công khai của anthropics/skills, các liên kết PR/Issue có thể truy cập trực tiếp để lấy trạng thái mới nhất.*

---

# Báo cáo Tình hình Cộng đồng Claude Code Hàng ngày | 2026-05-13

---

## Tóm tắt Hôm nay

Anthropic hôm nay đã phát hành phiên bản v2.1.140, tập trung sửa lỗi khớp công cụ Agent và vấn đề lệnh `/goal` bị treo. Cộng đồng tiếp tục tập trung vào vấn đề định dạng sao chép terminal (#18170 bình luận vượt trăm) và hoàn thiện tài liệu, các nhà đóng góp coygeek và nawazxz đã bổ sung dày đặc hơn 10 hạng mục còn thiếu trong tài liệu.

---

## Phát hành Phiên bản

### [v2.1.140](https://github.com/anthropics/claude-code/releases/tag/v2.1.140)

| Mục cập nhật | Mô tả |
|--------|------|
| Tăng cường khớp `subagent_type` cho công cụ Agent | Hỗ trợ khớp không phân biệt chữ hoa chữ thường và dấu phân cách, ví dụ `"Code Reviewer"` tự động phân tích thành `code-reviewer` |
| Cập nhật lược đồ màu Agent | Điều chỉnh màu trực quan hóa đại lý |
| Sửa lỗi lệnh `/goal` | Giải quyết vấn đề lệnh bị treo im lặng khi cài đặt `disableAllHooks` hoặc `allowManagedHooksOnly`, hiện hiển thị lời nhắc bình thường |

---

## Issues Cộng đồng Nóng bỏng

| # | Trạng thái | Tiêu đề | Mức độ Quan trọng | Phản ứng Cộng đồng | Liên kết |
|---|:---:|------|--------|----------|------|
| 18170 | 🔴 MỞ | Sao chép terminal bao gồm thụt lề thừa và khoảng trắng cuối | ⭐⭐⭐⭐⭐ | **107 bình luận, 235 👍**，vấn đề đau đầu nhất của cộng đồng; ảnh hưởng hiệu quả dán mã, người dùng kêu gọi sửa lỗi khẩn cấp | [Liên kết](https://github.com/anthropics/claude-code/issues/18170) |
| 10238 | 🔴 MỞ | Hỗ trợ Skills cấu trúc thư mục con | ⭐⭐⭐⭐⭐ | 36 bình luận, 144 👍； nhu cầu cốt lõi của các nhóm lớn để quản lý kỹ năng, bị treo từ lâu | [Liên kết](https://github.com/anthropics/claude-code/issues/10238) |
| 23347 | 🟢 ĐÃ ĐÓNG | Cài đặt cấp người dùng `spinnerVerbs` bị bỏ qua | ⭐⭐⭐⭐ | 26 bình luận, 31 👍；đã đóng hôm nay, sửa lỗi trải nghiệm cá nhân hóa | [Liên kết](https://github.com/anthropics/claude-code/issues/23347) |
| 10071 | 🔴 MỞ | Cơ chế tự động kết nối lại khi MCP ngắt kết nối | ⭐⭐⭐⭐ | 24 bình luận, 37 👍； nhu cầu về độ ổn định tích hợp MCP cấp doanh nghiệp | [Liên kết](https://github.com/anthropics/claude-code/issues/10071) |
| 33502 | 🔴 MỞ | Thêm thư mục vào GUI hỗ trợ xóa khỏi danh sách gần đây | ⭐⭐⭐ | 15 bình luận, 15 👍；tối ưu hóa chi tiết tương tác UI | [Liên kết](https://github.com/anthropics/claude-code/issues/33502) |
| 48694 | 🟢 ĐÃ ĐÓNG | Ứng dụng Desktop hiển thị trạng thái PR đã đóng/gộp trên thanh trạng thái | ⭐⭐⭐ | 9 bình luận, 2 👍； sửa lỗi quay lại | [Liên kết](https://github.com/anthropics/claude-code/issues/48694) |
| 10265 | 🔴 MỞ | Khả năng tự động cập nhật plugin Marketplace | ⭐⭐⭐⭐ | 9 bình luận, 53 👍； nhu cầu quan trọng cho các tình huống tuân thủ an ninh doanh nghiệp | [Liên kết](https://github.com/anthropics/claude-code/issues/10265) |
| 37796 | 🔴 MỞ | Sao chép văn bản chứa thụt lề 2 khoảng trắng (macOS TUI) | ⭐⭐⭐⭐ | 5 bình luận, 21 👍； vấn đề liên quan/lặp lại của #18170, nguyên nhân gốc rễ ở lớp hiển thị terminal | [Liên kết](https://github.com/anthropics/claude-code/issues/37796) |
| 53728 | 🔴 MỞ | `ANTHROPIC_API_KEY` ghi đè đăng ký Max một cách im lặng | ⭐⭐⭐⭐ | 4 bình luận； xung đột nhiều phương thức xác thực, người dùng dễ dàng chạm bẫy chi phí | [Liên kết](https://github.com/anthropics/claude-code/issues/53728) |
| 58272 | 🔴 MỞ | Rò rỉ bộ nhớ gốc nghiêm trọng trên macOS (~738 GB/h) | ⭐⭐⭐⭐⭐ | 3 bình luận, 1 👍； vấn đề hiệu suất cực đoan, CLI hoàn toàn không phản hồi | [Liên kết](https://github.com/anthropics/claude-code/issues/58272) |

> **Lưu ý**: #56995, #53857, #58530, v.v. không được liệt kê vì được đánh dấu là trùng lặp hoặc thiếu thông tin, nhưng chúng phản ánh các vấn đề hệ thống về độ ổn định của terminal và phân phối tin nhắn.

---

## Tiến độ PR Quan trọng

| # | Trạng thái | Tiêu đề | Tác giả | Nội dung Chức năng/Sửa lỗi | Liên kết |
|---|:---:|------|------|-------------|------|
| 58323 | 🟡 MỞ | Tài liệu: tùy chọn `continueOnBlock` của PostToolUse | nawazxz | Bổ sung tùy chọn cấu hình cho tài liệu hooks về lý do phản hồi và tiếp tục lượt sau khi bị chặn; sửa #58120 | [Liên kết](https://github.com/anthropics/claude-code/pull/58323) |
| 58314 | 🟡 MỞ | Tài liệu: biến môi trường MCP `CLAUDE_PROJECT_DIR` | nawazxz | Hoàn thiện mô tả biến môi trường được máy chủ stdio MCP nhận, căn chỉnh với hành vi hooks; sửa #58121 | [Liên kết](https://github.com/anthropics/claude-code/pull/5814) |
| 58126 | 🟡 MỞ | Plugin `neonpanel` mới v1.0.0 | msoroch | Plugin quy trình làm việc AI vận hành thương mại điện tử: 8 đại lý lĩnh vực (bổ sung hàng tồn kho, tài chính, chuỗi cung ứng, v.v.), dựa trên dữ liệu kinh doanh thời gian thực của NeonPanel qua MCP | [Liên kết](https://github.com/anthropics/claude-code/pull/58126) |

> Hôm nay chỉ có 3 PR đang hoạt động, chủ yếu là bổ sung tài liệu, ít PR phát triển chức năng.

---

## Xu hướng Yêu cầu Chức năng

Dựa trên phân tích 50 Issue đang hoạt động, trọng tâm cộng đồng tập trung vào:

| Hướng | Issue Đại diện | Mức độ Nhiệt |
|-----------|-----------|------|
| **Trải nghiệm Terminal/TUI** | #18170, #37796, #53857, #56344 | 🔥🔥🔥🔥🔥 |
| **Xác thực & Tính minh bạch Chi phí** | #53728, #58530, #51382 | 🔥🔥🔥🔥 |
| **Độ ổn định Hệ sinh thái MCP** | #10071, #10265, #58121 | 🔥🔥🔥🔥 |
| **Quản lý Skills/Plugin** | #10238, #33502, #58171 | 🔥🔥🔥 |
| **Tính đầy đủ của Tài liệu** | #57148-57151, #57437-57438, #58117-58121 | 🔥🔥🔥🔥 |
| **Hiệu suất & Bộ nhớ** | #58272 | 🔥🔥🔥 |

**Phân tích Xu hướng**: Vấn đề định dạng sao chép terminal đã trở thành "vua về tiếng nói" của cộng đồng, tính nhất quán đa nền tảng (Windows/macOS/Linux) và logic ưu tiên xác thực là những điểm đau mới nổi; các khoảng trống tài liệu đang được các nhà đóng góp cộng đồng lấp đầy một cách có hệ thống.

---

## Điểm chú ý của Nhà phát triển

### 🔴 Điểm Đau Tần suất Cao

| Vấn đề | Ảnh hưởng | Hiện trạng |
|------|------|------|
| **Ô nhiễm sao chép đầu ra terminal** | Mã dán cần làm sạch thủ công, phá vỡ luồng phát triển | #18170 107 bình luận chưa giải quyết, #37796 liên quan |
| **Rò rỉ bộ nhớ (tình huống cực đoan)** | Rò rỉ 738 GB/h trên macOS làm hệ thống sập | #58272 vừa báo cáo, chờ điều tra |
| **Xung đột nhiều nguồn xác thực** | Khóa API ghi đè đăng ký một cách im lặng, chi phí không kiểm soát được | #53728 thiếu phản hồi chính thức |

### 🟡 Khoảng trống Năng lực

- **Khả năng phục hồi của MCP**: Không có phục hồi tự động sau khi ngắt kết nối, triển khai doanh nghiệp bị cản trở (#10071)
- **Khả năng mở rộng của Skills**: Thiếu hỗ trợ thư mục con, khó bảo trì kho kỹ năng của nhóm (#10238)
- **Cô lập Workspace**: Danh sách toàn cục `claude agents`, chuyển đổi dự án đa dạng gây nhầm lẫn (#58171)

### 🟢 Tín hiệu Tích cực

- Nhà đóng góp cộng đồng **coygeek** đã gửi liên tiếp 10 Issue tài liệu, bao gồm các module cốt lõi như settings, hooks, commands, MCP, đã được **nawazxz** chuyển đổi thành PR sửa lỗi.
- Mở rộng hệ sinh thái plugin: NeonPanel đại diện cho mô hình tích hợp đại lý AI ngành dọc (vận hành thương mại điện tử).

---

*Báo cáo hàng ngày dựa trên dữ liệu công khai GitHub, không đại diện cho lập trường chính thức của Anthropic.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Báo cáo Tình hình Cộng đồng OpenAI Codex Hàng ngày | 2026-05-13

---

## 1. Tóm tắt Hôm nay

Hoạt động cộng đồng Codex hôm nay cực kỳ cao, **di chuyển kiến trúc hệ thống quyền** trở thành trọng tâm kỹ thuật, một loạt PR do bolinfest dẫn đầu đang tái cấu trúc mô hình quyền cấp luồng; đồng thời **tiêu thụ token quá nhanh** (#14593) tiếp tục lan rộng đến 575 bình luận, trở thành điểm đau trải nghiệm thanh toán gay gắt nhất của cộng đồng. Vòng lặp kỹ thuật của hệ sinh thái MCP và hệ thống plugin đã tăng tốc đáng kể.

---

## 2. Phát hành Phiên bản

**Liên tục phát hành 3 phiên bản Alpha của Rust CLI**
- `v0.131.0-alpha.7` → `alpha.8` → `alpha.9`

Tất cả đều là các phiên bản lặp lại thông thường, không có thông báo thay đổi chức năng đáng kể. Đáng chú ý là số phiên bản CLI đã vượt xa phiên bản App công khai hiện tại (26.506.x), ám chỉ cơ chế cốt lõi Rust đang chuẩn bị cho việc nâng cấp kiến trúc lớn.

---

## 3. Issues Cộng đồng Nóng bỏng (Top 10)

| # | Issue | Mức độ Quan trọng | Phản ứng Cộng đồng |
|---|---|---|---|
| [#14593](https://github.com/openai/codex/issues/14593) | **Tiêu thụ token quá nhanh** — Người dùng đăng ký Business báo cáo tiện ích mở rộng IDE tiêu thụ token bất thường | 🔴 **Ưu tiên cao nhất** | 575 bình luận / 251 👍, chưa giải quyết trong 2 tháng, ảnh hưởng trực tiếp đến ý định thanh toán |
| [#12161](https://github.com/openai/codex/issues/12161) | **Windows "Thinking" bị treo** — Tiện ích mở rộng IDE liên tục bị treo | 🟠 Điểm đau Tần suất Cao | 30 bình luận / 16 👍, tái hiện trên VS Code/Cursor/Windsurf |
| [#9926](https://github.com/openai/codex/issues/9926) | **Công cụ khảo sát tương tác `ask_user_question`** — Thay thế hội thoại tự do có cấu trúc | 🟢 Tính năng Giá trị Cao | 23 bình luận / 24 👍, hướng phát triển tối ưu hóa trải nghiệm CLI rõ ràng |
| [#17444](https://github.com/openai/codex/issues/17444) | **Máy chủ MCP Windows khởi động thất bại** | 🟠 Tính tương thích Nền tảng | 23 bình luận / 9 👍, chặn việc triển khai hệ sinh thái MCP trên Windows |
| [#12098](https://github.com/openai/codex/issues/12098) | **Phiên song song thẻ trong tiện ích mở rộng IDE** — Đối chiếu trải nghiệm đa luồng của Cursor | 🟢 Khoảng cách Cạnh tranh Cốt lõi | 11 bình luận / 26 👍, nhu cầu cấp kiến trúc UX |
| [#11086](https://github.com/openai/codex/issues/11086) | **Chức năng chỉnh sửa tin nhắn Ứng dụng** — Hỗ trợ sửa đổi và hoàn tác lịch sử | 🟢 Bổ sung Trải nghiệm Cơ bản | 10 bình luận / 43 👍, lượt thích cao ít thảo luận = nhu cầu đồng thuận |
| [#21343](https://github.com/openai/codex/issues/21343) | **Lỗi nén ngữ cảnh** — Trạng thái bị lỗi sau phiên dài | 🟠 Độ tin cậy | 10 bình luận / 11 👍, trải nghiệm thanh toán của người dùng Pro $200 bị ảnh hưởng |
| [#21079](https://github.com/openai/codex/issues/21079) | **Đồng bộ hóa phiên CLI với lịch sử Desktop** — Tính liên tục đa thiết bị | 🟢 Tích hợp Hệ sinh thái | 8 bình luận / 4 👍, vấn đề kho dữ liệu lịch sử cô lập |
| [#21977](https://github.com/openai/codex/issues/21977) | **Hỗ trợ Sandbox OpenBSD** — Mở rộng nền tảng ưu tiên an ninh | 🟡 Nhỏ nhưng Quan trọng | 7 bình luận, tình huống tuân thủ an ninh doanh nghiệp |
| [#22135](https://github.com/openai/codex/issues/22135) | **Báo động sai phần mềm độc hại trên macOS** — `codex-aarch64-apple-darwin` bị Gatekeeper chặn | 🟠 An ninh Phân phối | 4 bình luận / 11 👍, chặn cài đặt người dùng M1 |

---

## 4. Tiến độ PR Quan trọng (Top 10)

| # | PR | Nội dung Chức năng/Sửa lỗi | Ý nghĩa Kỹ thuật |
|---|---|------------|---------|
| [#22327](https://github.com/openai/codex/pull/22327) | **permissions: di chuyển gốc workspace lên trạng thái luồng** | Di chuyển thư mục gốc có thể ghi từ `SandboxPolicy::WorkspaceWrite` sang cấu hình quyền cấp luồng | 🔧 **Di chuyển cốt lõi kiến trúc quyền**, cấu hình quyền máy chủ trở thành nguồn đáng tin cậy duy nhất |
| [#22266](https://github.com/openai/codex/pull/22266) | **core: đóng gói các future xử lý đa agent** | Cô lập ngăn xếp Future của bộ xử lý đa Agent | Giải quyết rủi ro tràn ngăn xếp đệ quy sâu, dọn đường cho PR quyền |
| [#22399](https://github.com/openai/codex/pull/22399) | **Route các yêu cầu ủy quyền MCP trở lại phiên con** | Sửa lỗi xuyên phiên của MCP trong cảnh quan xem xét mã | Khắc phục lỗi xuyên phiên của MCP trong cảnh quan xem xét mã |
| [#21624](https://github.com/openai/codex/pull/21624) | **Make trạng thái khởi động MCP cấp luồng** | Cô lập luồng trạng thái khởi động MCP, tách biệt sự chặn `/review` | Nền tảng độ ổn định đa luồng của MCP |
| [#22268](https://github.com/openai/codex/pull/22268) | **hooks: sử dụng ID phiên mới cho hooks, áp dụng ID của cha cho đại lý con** | Thống nhất ngữ nghĩa ID phiên Hook, đại lý con kế thừa định danh phiên cha | Sửa lỗi quan trọng cho khả năng quan sát tích hợp Hook cấp doanh nghiệp |
| [#22395](https://github.com/openai/codex/pull/22395) | **fix(core): phát vòng đời từ chối sandbox thực thi thống nhất** | Hoàn thiện sự kiện vòng đời lỗi khi từ chối sandbox được đưa lên trước | Tính nhất quán khả năng hiển thị mô hình, tránh mất trạng thái im lặng |
| [#22397](https://github.com/openai/codex/pull/22397) | **Phơi bày phiên bản plugin và kiểm soát bật/tắt chia sẻ plugin** | Cơ sở hạ tầng thương mại hóa thị trường plugin |
| [#22261](https://github.com/openai/codex/pull/22261) | **Encapsulate mục tìm kiếm công cụ trong bộ xử lý** | Tích hợp siêu dữ liệu tìm kiếm công cụ vào bộ xử lý | Tối ưu hóa kiến trúc đăng ký công cụ động (MCP/Deferred) |
| [#22374](https://github.com/openai/codex/pull/22374) | **ci: kiểm thử nâng cấp v8 do Skill cung cấp** | Diễn tập kỹ thuật nâng cấp môi trường chạy rusty-v8 dựa trên Skill ( **Không gộp** ) |
| [#22236](https://github.com/openai/codex/pull/22236) | **Thống nhất cập nhật siêu dữ liệu luồng trên cửa hàng** | Lớp cập nhật siêu dữ liệu luồng được thống nhất, tương thích ghi kép SQLite + JSONL | Hiện đại hóa kiến trúc lưu trữ cục bộ |

---

## 5. Xu hướng Yêu cầu Chức năng

```
┌─────────────────────────────────────────────────────────┐
│  🔥 Trải nghiệm IDE Căn chỉnh với Đối thủ cạnh tranh  ──  Thẻ, Chỉnh sửa Tin nhắn, Phiên song song          │
│     (Issue #12098, #11086, #9926)                       │
├─────────────────────────────────────────────────────────┤
│  ⚡ Kiểm soát Chi phí & Tính minh bạch  ──  Trực quan hóa tiêu thụ Token, Khả năng nhận biết giới hạn tốc độ      │
│     (Issue #14593 — Tiếng nói cộng đồng lớn nhất)                        │
├─────────────────────────────────────────────────────────┤
│  🔗 Hoàn thiện Hệ sinh thái MCP  ──  Độ ổn định khởi động, Đa nền tảng, Định tuyến ủy quyền          │
│     (PR #21624, #22399, Issue #17444)                   │
├─────────────────────────────────────────────────────────┤
│  🏗️  Kiến trúc Quyền & An ninh  ──  Quyền cấp luồng, Chính sách Hook Doanh nghiệp, Mở rộng Sandbox   │
│     (PR #22327, #22268, Issue #21977)                   │
├─────────────────────────────────────────────────────────┤
│  📱  Tính liên tục Dữ liệu Đa thiết bị  ──  Đồng bộ hóa lịch sử CLI/Desktop, Di chuyển Workspace       │
│     (Issue #21079, #15347)                              │
└─────────────────────────────────────────────────────────┘
```

---

## 6. Điểm chú ý của Nhà phát triển

| Loại Điểm Đau | Biểu hiện | Issue Đại diện |
|---|---|---|
| **Công dân hạng hai Windows** | IDE bị treo, MCP khởi động thất bại, tràn bố cục tin nhắn, tiện ích mở rộng không phản hồi | #12161, #17444, #22292, #22393 |
| **Hộp đen Kinh tế Token** | Tốc độ tiêu thụ không thể đoán trước, không có đo lường thời gian thực, người dùng Business/Pro cũng bị ảnh hưởng | #14593 |
| **Độ tin cậy Ngữ cảnh** | Nén ngữ cảnh dài thất bại, trạng thái bị lỗi sau khi nén, luồng lịch sử biến mất | #9546, #21343, #21076 |
| **Ma sát An ninh Nền tảng** | Báo động sai Gatekeeper macOS, đăng nhập SSO doanh nghiệp bất thường | #22135, #2187 |
| **Ngữ nghĩa Thực thi Agent Mơ hồ** | Tương tác `/goal` với chính sách phê duyệt không xác định, không có thử lại lỗi dung lượng | #22362, #22390 |

---

*Báo cáo hàng ngày dựa trên dữ liệu công khai của github.com/openai/codex*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Báo cáo Tình hình Cộng đồng Gemini CLI Hàng ngày | 2026-05-13

---

## 1. Tóm tắt Hôm nay

Cộng đồng hôm nay chào đón bản phát hành phiên bản xem trước **v0.43.0-preview.0**, cải tiến cốt lõi là hướng dẫn mô hình sử dụng công cụ chỉnh sửa để thực hiện sửa đổi mã "ngoại khoa" chính xác hơn; đồng thời phiên bản chính thức **v0.42.0** đã sửa lỗi ổn định của việc chuyển đổi kênh cập nhật tự động. Về phía Issue, vấn đề giới hạn dung lượng 429 tiếp tục lan rộng, Issue mới #26862 phản ánh thiếu cơ chế định tuyến lại hiệu quả khi mô hình gặp vấn đề dung lượng, tương ứng với Issue được đóng theo dõi tập trung #24937.

---

## 2. Phát hành Phiên bản

### v0.43.0-preview.0 (Phiên bản xem trước)
| Thuộc tính | Nội dung |
|:---|:---|
| Thời gian phát hành | 2026-05-12 |
| Thay đổi Cốt lõi | ① **Tối ưu hóa công cụ chỉnh sửa**: Hướng dẫn mô hình ưu tiên sử dụng công cụ `edit` để sửa đổi cục bộ chính xác, giảm việc viết lại toàn bộ tệp ([#26480](https://github.com/google-gemini/gemini-cli/pull/26480))；② **Làm rõ tài liệu**: Làm rõ cơ chế cập nhật "đề xuất" của Auto Memory và logic kích hoạt kỹ năng ([#26](https://github.com/google-gemini/gemini-cli/pull/26)) |

### v0.42.0 (Phiên bản ổn định)
| Thuộc tính | Nội dung |
|:---|:---|
| Thời gian phát hành | 2026-05-12 |
| Thay đổi Cốt lõi | ① **Bảo vệ kênh cập nhật**: Ngăn chặn cập nhật tự động hạ cấp từ phiên bản ổn định sang các kênh kém ổn định hơn (nightly/preview) ([#26132](https://github.com/google-gemini/gemini-cli/pull/26132))；② Đồng bộ hóa số phiên bản với bản dựng nightly |

### v0.42.0-nightly.20260512 (Bản dựng ban đêm)
| Thuộc tính | Nội dung |
|:---|:---|
| Thay đổi Cốt lõi | ① Sửa lỗi cấu hình mô hình ảnh chụp nhanh ([#26745](https://github.com/google-gemini/gemini-cli/pull/26745))；② Hỗ trợ cài đặt tiện ích mở rộng kho lưu trữ SSH ([#26274](https://github.com/google-gemini/gemini-cli/pull/26274))；③ Sửa lỗi tạo `Session` trùng lặp |

---

## 3. Issues Cộng đồng Nóng bỏng

| # | Issue | Trạng thái | Bình luận | Điểm Cốt lõi |
|:---|:---|:---|:---|:---|
| [#24937](https://github.com/google-gemini/gemini-cli/issues/24937) | **Theo dõi: Sự cố 429 / Dung lượng** | 🔒 ĐÃ ĐÓNG | 91 | **Bài viết theo dõi tập trung về sự cố dung lượng**, sau hơn một tháng đã đóng, nhưng cộng đồng vẫn tiếp tục báo cáo các biến thể mới. Đánh dấu Google đã thu hẹp tạm thời lối vào thảo luận về vấn đề này, hiệu quả giải quyết thực tế cần quan sát. |
| [#26862](https://github.com/google-gemini/gemini-cli/issues/26862) | **Sự cố dung lượng mô hình 429, Không định tuyến lại đủ** | 🔴 ĐANG MỞ | 9 | **Vấn đề ưu tiên cao mới được thêm hôm nay**: Khi sử dụng Auto (Gemini 3) với tài khoản Pro, sau khi gặp 429, CLI sẽ **thử lại vòng lặp vô hạn với cùng một mô hình không có dung lượng** (như gemini-3-flash-preview), thay vì tự động hạ cấp xuống mô hình khả dụng. Bộc lộ khuyết điểm của chiến lược định tuyến. |
| [#26902](https://github.com/google-gemini/gemini-cli/issues/26902) | **Trình phân tích liên kết URI thất bại trong việc xóa số dòng/cột trên Windows** | 🔴 ĐANG MỞ | 9 | Lỗi phân tích đường dẫn tệp trên nền tảng Windows: liên kết `file:line:column` trong terminal được truyền dưới dạng đường dẫn đầy đủ cho `stat`, dẫn đến `FileSystemError`. Ảnh hưởng đến trải nghiệm chuyển đổi IDE. |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Đánh giá mạnh mẽ cấp thành phần** | 🔴 ĐANG MỞ | 10 | **Vấn đề cơ sở hạ tầng kỹ thuật**: Kiểm thử đánh giá hành vi đã tích lũy 76 mục, bao phủ 6 mô hình, nhưng thiếu đánh giá chi tiết cấp thành phần. Liên quan đến hệ thống định lượng về độ tin cậy của Agent. |
| [#26619](https://github.com/google-gemini/gemini-cli/issues/26619) | **[QUAN TRỌNG] Mô hình Lừa dối Ép buộc: Dung lượng Flash đã tiêu thụ mặc dù bị khóa ở 3.1-Pro** | 🔴 ĐANG MỞ | 6 | **Người dùng trả phí phản đối mạnh mẽ**: Người đăng ký Google One AI Ultra phát hiện, ngay cả khi rõ ràng khóa `3.1-Pro`, CLI vẫn **tiêu thụ im lặng hạn ngạch Flash**, dẫn đến gián đoạn giới hạn tốc độ. Liên quan đến tính minh bạch hạn ngạch và lòng tin thương mại. |
| [#23182](https://github.com/google-gemini/gemini-cli/issues/23182) | **Gemini-cli tiêu tốn token trong vòng lặp thất bại trong việc chọn công cụ read_file** | 🔴 ĐANG MỞ | 6 | Mô hình rơi vào vòng lặp trong quyết định chọn công cụ, liên tục tiêu tốn Token nhưng không thực hiện được việc đọc tệp. Vấn đề ranh giới quyết định Agent điển hình. |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Phục hồi Đại lý con sau MAX_TURNS được báo cáo là thành công MỤC TIÊU** | 🔴 ĐANG MỞ | 6 | Đại lý con `codebase_investigator` đạt số lượt tối đa sau đó **báo cáo sai "thành công"**, che giấu sự thật nhiệm vụ bị gián đoạn. Lỗi ngữ nghĩa nghiêm trọng của máy trạng thái. |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini không sử dụng đủ kỹ năng và đại lý con** | 🔴 ĐANG MỞ | 6 | **Vấn đề áp dụng hệ thống kỹ năng**: Người dùng cấu hình các kỹ năng như gradle/git, nhưng mô hình hiếm khi tự động gọi, cần chỉ thị rõ ràng mới kích hoạt. Cơ chế khám phá kỹ năng bị lỗi. |
| [#26563](https://github.com/google-gemini/gemini-cli/issues/26563) | **Công cụ "save_memory" không tìm thấy** | 🔴 ĐANG MỞ | 5 | Lệnh `/memory add` trong v0.41.1 gọi công cụ đã bị xóa `save_memory`, hiển thị "Bạn có muốn: ask_user". Vòng lặp chức năng và tài liệu/CLI không đồng bộ. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell lệnh bị treo với "Chờ nhập" sau khi hoàn thành** | 🔴 ĐANG MỞ | 3 | Sau khi thực thi lệnh shell đơn giản, CLI bị treo, hiển thị "Chờ người dùng nhập". Lỗi đồng bộ hóa trạng thái giả terminal, ảnh hưởng đến quy trình làm việc cơ bản. |

---

## 4. Tiến độ PR Quan trọng

| # | PR | Trạng thái | Nội dung Chức năng/Sửa lỗi | Phạm vi Ảnh hưởng |
|:---|:---|:---|:---|:---|
| [#26941](https://github.com/google-gemini/gemini-cli/pull/26941) | **chore: dọn dẹp các tính năng bộ nhớ đã khởi chạy** | 🟡 ĐANG MỞ | **Dọn dẹp các đường dẫn thử nghiệm** của chức năng JIT context và memory đã hoạt động: xóa cài đặt cũ, giao diện tải memory còn sót lại, vô hiệu hóa chế độ trong tài liệu/kiểm thử | Dọn dẹp nợ kỹ thuật, mở đường cho phiên bản chính thức của chức năng memory |
| [#26714](https://github.com/google-gemini/gemini-cli/pull/26714) | **feat(cli): hợp nhất các chế độ Auto thành chế độ Auto duy nhất** | 🟡 ĐANG MỞ | Hợp nhất "Auto (Gemini 3)" và "Auto (Gemini 2.5)" thành **chế độ định tuyến thông minh duy nhất**, tự động chọn mô hình theo độ phức tạp tác vụ và kênh phát hành | Đơn giản hóa quyết định người dùng, nhưng cần xác minh tính chính xác của định tuyến |
| [#26955](https://github.com/google-gemini/gemini-cli/pull/26955) | **fix(core): giới hạn đầu ra văn bản shell và giới hạn bộ đệm UI trực tiếp** | 🟡 ĐANG MỞ | Giới hạn đầu ra công cụ Shell (1 lần/giây) + giới hạn bộ đệm UI thời gian thực (100k ký tự), tránh kích hoạt lại toàn bộ kết xuất React mỗi chunk | Giải quyết lỗi hiệu suất trong các tình huống đầu ra lớn |
| [#26953](https://github.com/google-gemini/gemini-cli/pull/26953) | **feat(core): thay đổi đăng ký Agent thành ưu tiên người đến trước và ưu tiên dự án** | 🟡 ĐANG MỞ | Chiến lược đăng ký Agent thành **"ưu tiên người đến trước"**, thứ tự tải được điều chỉnh thành **cấp dự án > cấp người dùng**, tránh xung đột định nghĩa trùng lặp | Tính xác định của quản lý Agent đa môi trường |
| [#26948](https://github.com/google-gemini/gemini-cli/pull/26948) + [#26947](https://github.com/google-gemini/gemini-cli/pull/26947) | **feat(core): kết nối lệnh gọi AgentSession vào agent-tool** + **cờ** | 🟡 ĐANG MỞ | Cờ thử nghiệm mới `adk.agentSessionSubagentEnabled`, tích hợp lệnh gọi `AgentSession` vào `AgentTool` | Tái cấu trúc cơ sở hạ tầng lệnh gọi đại lý con |
| [#26951](https://github.com/google-gemini/gemini-cli/pull/26951) | **feat(bot): triển khai kỹ năng issue-fixer và yêu cầu lựa chọn bắt buộc** | 🟡 ĐANG MỞ | Triển khai kỹ năng `issue-fixer` cho Gemini CLI Bot, hỗ trợ chọn thủ công mandate (auto/issue-fixer/metrics/interactive) khi kích hoạt quy trình làm việc | Nâng cao năng lực xử lý issue tự động |
| [#26950](https://github.com/google-gemini/gemini-cli/pull/26950) | **fix(ui): làm cho tệp ngữ cảnh được nối thêm thay vì thay thế** | 🟡 ĐANG MỞ | Khi cài đặt `settings.context.fileName`, tệp ngữ cảnh được **thêm vào thay vì ghi đè** | Tránh mất ngữ cảnh lịch sử ngoài ý muốn |
| [#26954](https://github.com/google-gemini/gemini-cli/pull/26954) | **fix(security): giải quyết các phát hiện an ninh MCP (MCP Ssafe Grade F)** | 🟡 ĐANG MỞ | Sửa các lỗ hổng an ninh cấp cao/trung bình trong tích hợp MCP: tăng cường chiến lược heuristic Shell (phát hiện chuyển hướng, đường ống), bảo vệ chống truy cập đường dẫn | Nâng cao đường cơ sở an ninh hệ sinh thái MCP |
| [#26361](https://github.com/google-gemini/gemini-cli/pull/26361) | **fix(core): bên ngoài hóa https-proxy-agent để sửa hỗ trợ proxy** | 🟡 ĐANG MỞ | **Bên ngoài hóa** `https-proxy-agent` khỏi gói esbuild, sửa `TypeError: HttpsProxyAgent is not a constructor` | Khả năng sử dụng trong môi trường proxy doanh nghiệp |
| [#26922](https://github.com/google-gemini/gemini-cli/pull/26922) | **fix(core): cập nhật lược đồ read_file để tương thích v1** | ✅ ĐÃ ĐÓNG | Kiểu tham số `start_line`/`end_line` của `read_file` được thay đổi từ `number` thành `integer`, tương thích với API Gemini `v1` | Sửa lỗi `400 Invalid JSON` |

---

## 5. Xu hướng Yêu cầu Chức năng

Dựa trên phân tích 50 Issue đang hoạt động, trọng tâm cộng đồng thể hiện bốn hướng chính:

| Xu hướng | Issue Đại diện | Yêu cầu Cốt lõi |
|:---|:---|:---|
| **🚨 Quản lý Dung lượng & Hạn ngạch** | #24937, #26862, #26619, #2305 | Xử lý lỗi 429 từ "thử lại thụ động" nâng cấp lên "giảm cấp thông minh", và cần **tính minh bạch về tiêu thụ hạn ngạch** — người dùng yêu cầu biết rõ logic chuyển đổi mô hình và khấu trừ hạn ngạch |
| **🧠 Tính tự chủ & Độ tin cậy của Agent** | #21968, #22323, #23182, #21740 | **Khám phá & gọi tự động** kỹ năng/đại lý con, tính đúng đắn ngữ nghĩa máy trạng thái (thành công vs gián đoạn), ảnh hưởng của bộ theo dõi hợp tác đa đại lý |
| **🔒 An ninh & Quyền riêng tư** | #26525, #26954, #22672 | **Tẩy xóa dữ liệu xác định** của Auto Memory (không phải redaction phía mô hình), an ninh chuỗi cung ứng MCP, chiến lược bảo vệ hoạt động phá hoại |
| **🛠️ Trải nghiệm Nhà phát triển (DX)** | #26902, #25166, #25216, #21924 | Xử lý đường dẫn Windows, treo terminal, hiển thị bị hỏng sau khi thoát trình chỉnh sửa bên ngoài, hiệu suất resize terminal — **độ ổn định đa nền tảng** vẫn là điểm yếu |

---

## 6. Điểm chú ý của Nhà phát triển

| Điểm Đau | Biểu hiện | Mức độ Thường xuyên |
|:---|:---|:---|
| **Vấn đề "hạn ngạch ma"** | Mô hình bị khóa không có hiệu lực, hạn ngạch Flash/Pro sử dụng chung, không có giảm cấp sau 429 → **khủng hoảng niềm tin của người dùng trả phí** | 🔥🔥🔥🔥🔥 |
| **Hộp đen quyết định của Agent** | Vòng lặp chọn công cụ, kỹ năng bị bỏ trống, đại lý con báo cáo thành công giả → **chi phí gỡ lỗi cực cao** | 🔥🔥🔥🔥🔥 |
| **Phân mảnh Hệ thống Memory** | Lệnh tệp sót lại `save_memory`, bản vá inbox bị bỏ qua im lặng, phiên tín hiệu yếu thử lại vô hạn → **vòng lặp chức năng không đồng bộ** | 🔥🔥🔥🔥 |
| **Công dân hạng hai Windows** | Phân tích đường dẫn, thư mục gốc ổ đĩa, lược đồ URI → **thích ứng nền tảng bị tụt hậu** | 🔥🔥🔥🔥 |
| **Độ ổn định Hiển thị Terminal** | Treo Shell, nhấp nháy resize, bị hỏng sau khi thoát trình chỉnh sửa bên ngoài → **độ sâu kỹ thuật TUI không đủ** | 🔥🔥🔥 |

---

*Báo cáo hàng ngày dựa trên dữ liệu công khai của github.com/google-gemini/gemini-cli*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# Báo cáo Tình hình Cộng đồng GitHub Copilot CLI Hàng ngày | 2026-05-13

## Tóm tắt Hôm nay

GitHub đã phát hành **Copilot CLI v1.0.46**, khẩn cấp sửa các vấn đề quan trọng như PowerShell khởi động thất bại, hiển thị diff bị cắt cụt và bổ sung cơ chế cảnh báo phiên bản lỗi thời. Cộng đồng đang thảo luận sôi nổi về lệnh **/fork** — mặc dù chức năng này đã được phát hành trong v1.0.45 nhưng có lỗi thực hiện, đồng thời quản lý phiên, giao thức MCP và lưu trữ quyền trở thành các điểm đau thường xuyên được nhà phát triển phản hồi. Hoạt động Issues 24 giờ qua đã tăng đáng kể, có tổng cộng 32 mục được cập nhật, nhưng không có PR mới nào được gộp.

---

## Phát hành Phiên bản

### [v1.0.46](https://github.com/github/copilot-cli/releases/tag/v1.0.46) | 2026-05-12

| Mục cập nhật | Mô tả |
|:---|:---|
| **⚠️ Cảnh báo Phiên bản Lỗi thời** | Hiển thị cảnh báo khi CLI quá cũ, tránh mất quyền truy cập mô hình cao cấp ngoài ý muốn |
| **Sửa lỗi Khởi động PowerShell** | Giải quyết vấn đề khởi động thất bại khi cài đặt `pwsh` dưới dạng công cụ global của .NET (tương ứng với [#3259](https://github.com