# Nhật ký cộng đồng AI CLI 2026-05-09

> Thời gian tạo: 2026-05-09 00:21 UTC | Công cụ được bao phủ: 9

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

# Báo cáo phân tích so sánh ngang hệ sinh thái AI CLI | 2026-05-09

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái công cụ AI CLI hiện tại thể hiện rõ đặc điểm **"tăng tốc lặp lại chức năng và khủng hoảng ổn định song hành"**: Các công cụ hàng đầu (Claude Code, Codex, Gemini CLI) có tần suất cập nhật phiên bản dày đặc hàng ngày, nhưng các vấn đề hệ thống như lỗi trên nền tảng Windows, "hố đen" tính phí Token, trạng thái phiên yếu kém liên tục tái diễn; các nhà sản xuất Trung Quốc (Kimi, Qwen, DeepSeek) đang nhanh chóng bắt kịp về tích hợp IDE và đổi mới kiến trúc, nhưng nhịp độ thương mại hóa mạnh mẽ gây ra biến động niềm tin cộng đồng; các giải pháp thay thế mã nguồn mở (Pi, OpenCode) lấy khả năng mở rộng và tính minh bạch làm điểm bán hàng, hiện đang trải qua giai đoạn tái cấu trúc quy mô lớn. Nhìn chung, **việc vượt qua rào cản từ "demo khả dụng" đến "công cụ sản xuất đáng tin cậy" vẫn là bài tập chưa hoàn thành của toàn ngành**.

---

## 2. So sánh mức độ hoạt động của từng công cụ

| Công cụ | Cập nhật Issues hôm nay | Cập nhật PR hôm nay | Phát hành phiên bản | Đặc điểm chính |
|:---|:---:|:---:|:---|:---|
| **Claude Code** | 10 bài nóng (bao gồm 1 bản sửa lỗi khẩn cấp) | 8 bài (2 đã đóng) | **v2.1.137 Bản sửa lỗi** | Lần thứ ba đường dẫn CI bị mã hóa cứng quay trở lại, người dùng Windows cảm nhận ngày càng tệ |
| **OpenAI Codex** | 10 bài nóng | 10 bài (2 đã đóng) | **rust-v0.130.0** + 5 bản alpha | Tiêu thụ Token bất thường (572 bình luận) chưa được giải quyết trong 2 tháng |
| **Gemini CLI** | 10 bài nóng | 10 bài (tất cả mở) | Không có | Suy giảm hiệu suất v0.35.3 gây ra làn sóng hạ cấp, khoảng trống giao tiếp chính thức |
| **GitHub Copilot CLI** | 10 bài nóng | 2 bài | **v1.0.44 / v1.0.44-3** | Tăng cường khả năng bỏ qua LLM của Hooks, bộc lộ lỗi kiến trúc proxy con MCP |
| **Kimi Code CLI** | 10 bài nóng | 10 bài (1 đã đóng) | Không có | Tỷ lệ vấn đề Windows chiếm 40%, 5 Issue + 2 PR tập trung tấn công trong một ngày |
| **OpenCode** | 10 bài nóng | 10 bài (1 đã đóng) | Không có | Triển khai kiến trúc LLM Core gốc, sửa lỗi liên tục chuỗi phục hồi phiên |
| **Pi** | 10 bài nóng (nhiều `closed-because-bigrefactor`) | 10 bài (bao gồm 2 đã đóng) | Không có | Giai đoạn tái cấu trúc "bigrefactor", đóng loạt Issue lịch sử |
| **Qwen Code** | 10 bài nóng | 10 bài | **v0.15.9** + 2 bản xem trước | Thay đổi chính sách hạn ngạch miễn phí OAuth 1000→100, bùng nổ 122 bình luận |
| **DeepSeek TUI** | 10 bài nóng | 10 bài | **v0.8.18-v0.8.22** 5 bản liên tiếp | Tỷ lệ truy cập cache và chi phí Token là chiến trường cốt lõi |

> **Phân cấp mức độ hoạt động**: Claude Code / Codex / Qwen Code thuộc nhóm **hoạt động cao + khủng hoảng cao**; Kimi / DeepSeek TUI thuộc nhóm **hoạt động cao + nhanh chóng bắt kịp**; Pi / OpenCode thuộc nhóm **biến động trong giai đoạn tái cấu trúc**; Copilot CLI do chính thức chủ đạo, đóng góp cộng đồng thấp.

---

## 3. Hướng chức năng được quan tâm chung

| Hướng chung | Công cụ liên quan | Nhu cầu cụ thể | Mức độ khẩn cấp |
|:---|:---|:---|:---|
| **Bình đẳng hóa nền tảng Windows** | Claude Code, Codex, Gemini CLI, Kimi, Copilot CLI, Qwen Code | Mã hóa cứng đường dẫn, quản lý tiến trình, hành vi bảng điều khiển, đặt lại phông chữ, tương thích PowerShell | 🔴 P0 |
| **Khả năng quan sát và kiểm soát Token/Chi phí** | Codex (#14593 572 bình luận), DeepSeek TUI (#743 nửa ngày 4 trăm triệu token), Gemini CLI (bão 429 tài khoản Pro), Qwen Code (thay đổi chính sách hạn ngạch đột ngột) | Minh bạch tiêu thụ, phát hiện bất thường, định tuyến thông minh, tối ưu hóa cache, chính xác phí | 🔴 P0 |
| **Độ tin cậy của trạng thái phiên** | Claude Code (Dispatch ngoại tuyến), Gemini CLI (v0.35.3 suy giảm), OpenCode (thử lại vô hạn #21960), Kimi (dừng quá giờ nền #2193) | Cơ chế phục hồi, giảm cấp thanh lịch, khả năng quan sát máy trạng thái, ngăn chặn sụp đổ dây chuyền | 🔴 P0 |
| **Mức độ trưởng thành của hệ sinh thái MCP/Plugin** | Copilot CLI (mất kết nối proxy con #2630), Claude Code (Google Drive chỉ đọc #51040), DeepSeek TUI (chợ plugin #1240), Pi (an toàn kiểu MCP #4326) | CRUD đầy đủ chức năng, tải lại nóng, an toàn đồng thời, giới hạn kiểu, quản trị đăng ký riêng | 🟡 P1 |
| **Luồng công việc từ xa/không đầu/tự động hóa** | Codex (remote-control #10450), Claude Code (Hooks API #51798), Copilot CLI (`-p` treo không dấu #3189), Qwen Code (`qwen serve` #3889) | Tích hợp CI/CD, đầu ra xác định, ghi nhật ký có cấu trúc, móc nối vòng đời, ổn định không tương tác | 🟡 P1 |
| **Hiện đại hóa kết xuất TUI** | Codex (bảng Markdown #8259), Qwen Code (làm mới vô hạn #3838), Kimi (ký tự lạ #2189), Pi (treo đầu cuối hẹp #4302), DeepSeek TUI (nhấp nháy hoạt ảnh #1191) | Ma trận tương thích đầu cuối, mã hóa quốc tế hóa, điều kiện cạnh tranh đầu ra luồng, chi tiết tương tác | 🟡 P1 |

---

## 4. Phân tích định vị khác biệt

| Công cụ | Tập trung chức năng | Người dùng mục tiêu | Lộ trình kỹ thuật |
|:---|:---|:---|:---|
| **Claude Code** | Hợp tác doanh nghiệp (Cowork/Dispatch), công cụ quy tắc Chế độ Tự động, khả năng quan sát OpenTelemetry | Nhóm doanh nghiệp, nhà phát triển đa thiết bị | TypeScript/Node, kiến trúc đồng bộ hóa trạng thái nặng, độc quyền mô hình Anthropic |
| **OpenAI Codex** | Thương mại hóa plugin, lưu trữ SQLite, điều khiển từ xa, lặp lại dày đặc | Nhà phát triển full-stack, người tham gia hệ sinh thái plugin | Đang viết lại bằng Rust, kiến trúc app-server, đa mô hình nhưng ưu tiên OpenAI |
| **Gemini CLI** | Định tuyến động chế độ Tự động duy nhất, kiến trúc ủy quyền Bot, đánh giá nén ngữ cảnh | Người dùng hệ sinh thái Google, người nhạy cảm về chi phí | Node/TypeScript, đang tái cấu trúc proxy điều phối, tích hợp sâu Vertex AI |
| **GitHub Copilot CLI** | Bỏ qua LLM bằng Hooks, gọi lệnh gạch chéo linh hoạt, hiệu suất đa tài khoản | Người dùng nặng GitHub, DevOps doanh nghiệp | Tích hợp sâu với VS Code / IDE, mở rộng Azure BYOK |
| **Kimi Code CLI** | Tấn công Windows, thực thi shell linh hoạt, minh bạch chuỗi suy nghĩ | Nhà phát triển Trung Quốc, kịch bản tỷ lệ người dùng Windows cao | Python/Node hỗn hợp, giao thức ACP, ưu tiên mô hình tự phát triển |
| **OpenCode** | LLM Core gốc (kiến trúc Effect), theo dõi chi phí, tích hợp VCS | Người ưa thích mã nguồn mở, luồng công việc dựa trên cấu hình | TypeScript/Effect, mô-đun hóa cao, trừu tượng hóa nhà cung cấp đa dạng |
| **Pi** | Trải nghiệm đầu cuối gốc (dán ảnh, cuộn ảo), tương thích đa nhà cung cấp (Together/DeepSeek/Kimi), Zig đa nền tảng | Người theo chủ nghĩa nguyên thủy đầu cuối, người thử nghiệm đa mô hình | Thời gian chạy kép Zig + TypeScript, mở rộng bus socket Unix |
| **Qwen Code** | Bắt kịp tiện ích mở rộng VS Code, `qwen serve` hóa máy chủ, quy định phân bổ AI | Nhà phát triển Trung Quốc, hệ sinh thái Aliyun, doanh nghiệp nhạy cảm tuân thủ | TypeScript, tiến hóa thành máy khách-máy chủ, độc quyền mô hình Qwen |
| **DeepSeek TUI** | Tối ưu hóa tỷ lệ truy cập cache triệt để, định tuyến chi phí thông minh, gia cố bảo mật, Docker hóa chính thức | Người dùng nặng API DeepSeek, người cực kỳ nhạy cảm về chi phí | Node, ưu tiên TUI, thử nghiệm kiến trúc song song proxy con |

**Điểm phân hóa chính**:
- **Triết lý kiến trúc**: Claude/Copilot theo hướng "tích hợp sâu quy trình công việc doanh nghiệp", Codex/Qwen theo hướng "tiến hóa máy chủ hóa nền tảng", Pi/OpenCode theo hướng "mở rộng mô-đun hóa mã nguồn mở"
- **Chiến lược mô hình**: Claude/Qwen/DeepSeek độc quyền mô hình; Codex/Gemini/Pi/OpenCode tương thích đa nhà cung cấp
- **Ưu tiên nền tảng**: Kimi rõ ràng ưu tiên tấn công Windows; Claude/Codex Windows liên tục là "công dân hạng hai"

---

## 5. Mức độ phổ biến và trưởng thành của cộng đồng

| Góc phần tư | Công cụ | Căn cứ phán đoán |
|:---|:---|:---|
| **Hoạt động cao + Trưởng thành cao** (Rủi ro: Nợ ổn định) | Claude Code, OpenAI Codex | Số lượng bình luận Issue cực cao (572/122), lặp lại phiên bản dày đặc, nhưng các vấn đề tương tự tái diễn (phí Token, đường dẫn CI) |
| **Hoạt động cao + Giai đoạn bắt kịp** (Rủi ro: Tiến quân thương mại hóa mạo hiểm) | Kimi Code CLI, Qwen Code, DeepSeek TUI | Bổ sung chức năng nhanh chóng, phản hồi cộng đồng tích cực, nhưng thay đổi chính sách đột ngột (hạn ngạch Qwen), suy giảm hiệu suất (Gemini v0.35.3) thử thách niềm tin |
| **Giai đoạn tái cấu trúc + Không chắc chắn** | Pi, OpenCode | Đóng Issue hàng loạt "bigrefactor", chuyển đổi kiến trúc LLM Core gốc, tiềm năng dài hạn và rủi ro gián đoạn ngắn hạn song hành |
| **Chính thức chủ đạo + Cộng đồng yếu** | GitHub Copilot CLI, Gemini CLI | Tốc độ phát hành phiên bản có thể kiểm soát, nhưng số lượng PR đóng góp thưa thớt (Copilot hôm nay 2 PR), vòng lặp phản hồi phụ thuộc vào hiệu quả chính thức |

**Cảnh báo về mức độ trưởng thành**:
- **Claude Code**: Lần thứ ba vấn đề CI tương tự quay trở lại → Hệ thống quản lý chất lượng có điểm mù hệ thống
- **Codex**: Vấn đề Token 572 bình luận trong 2 tháng không có quy nhân rõ ràng → Ngưỡng tin cậy trong môi trường sản xuất
- **Gemini CLI**: Cảm nhận "không phản hồi" của chính thức → Hiệu ứng khuếch đại cảm xúc cộng đồng

---

## 6. Tín hiệu xu hướng đáng chú ý

| Tín hiệu xu hướng | Hỗ trợ dữ liệu | Giá trị tham khảo cho nhà phát triển |
|:---|:---|:---|
| **"Nhận thức chi phí" đang trở thành yếu tố mua sắm cốt lõi** | DeepSeek #743 (nửa ngày 4 trăm triệu token), Codex #14593 (572 bình luận), Qwen #3203 (122 bình luận phản đối cắt giảm hạn ngạch) | Khi đánh giá công cụ, cần đưa vào **kiểm tra cơ sở tiêu thụ Token thực tế**, chú ý chất lượng thực hiện kỹ thuật của cơ chế cache, định tuyến thông minh, chiến lược nén |
| **Windows từ "hạng mục tương thích" trở thành "hạng mục quyết định thắng bại"** | Kimi 5 Issue Windows trong một ngày, Claude lần thứ ba CI quay lại, Codex mở rộng Chrome tập trung bùng nổ | Việc mua sắm doanh nghiệp cần xác minh **kiểm tra khói đầu cuối trên nền tảng Windows**, tránh thiên kiến ẩn của nhóm "ưu tiên Linux/Mac" |
| **Hệ sinh thái MCP tiến hóa từ "giao thức kết nối" thành "khung quản trị"** | Copilot #2630 (proxy con lỗi), #3207 (vượt qua đăng ký MCP riêng), Claude #51040 (tranh chấp CRUD chỉ đọc) | Việc triển khai doanh nghiệp cần thiết lập **ma trận quyền, nhật ký kiểm toán, quản trị vòng đời cho máy chủ MCP**, thay vì chỉ quan tâm "có kết nối được không" |
| **Chuyển đổi kiến trúc "hóa máy chủ" tăng tốc** | Qwen `qwen serve` (#3889), tiện ích mở rộng máy khách app-server Codex, chế độ bus Pi `worker-loop` | Công cụ CLI đang tiến hóa thành **dịch vụ chạy dài hạn + truy cập đa máy khách**, khi đánh giá cần xem xét khả năng mở rộng kiến trúc thay vì chỉ trải nghiệm đầu cuối |
| **Hệ thống Hooks/plugin trở thành cơ sở hạ tầng tự động hóa quan trọng** | Copilot `userPromptSubmitted` vượt qua LLM, quy tắc `hard_deny` của Claude, `--dangerously-bypass-hook-trust` của Codex | Việc tích hợp CI/CD doanh nghiệp cần **cam kết ổn định của API Hooks và chiến lược quản lý thay đổi**, tránh tự động hóa bị gián đoạn "thay đổi tùy ý" |
| **Phần thưởng "minh bạch hóa" của các giải pháp thay thế mã nguồn mở** | Pi chuỗi suy nghĩ được tiết lộ đầy đủ, OpenCode LLM Core gốc, Kimi #1864 (yêu cầu khả năng hiển thị chuỗi suy nghĩ 10👍) | Quyền gỡ lỗi và khả năng quan sát trở thành điểm bán hàng khác biệt, **chi phí tin cậy của công cụ hộp đen đang tăng lên** |

---

*Báo cáo được tạo dựa trên dữ liệu công khai GitHub của từng công cụ vào ngày 2026-05-09, phù hợp cho việc lựa chọn công nghệ, quyết định mua sắm của nhóm và tham khảo định hướng cho người đóng góp.*

---

## Báo cáo chi tiết từng công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Tin tức cộng đồng Claude Code Skills

> Nguồn dữ liệu: [anthropics/skills](https://github.com/anthropics/skills)

# Báo cáo tin tức cộng đồng Claude Code Skills (2026-05-09)

---

## 1. Xếp hạng Skills phổ biến (theo mức độ quan tâm của cộng đồng)

| Hạng | Skill | Tổng quan chức năng | Tin tức cộng đồng | Trạng thái |
|:---|:---|:---|:---|:---|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | Kiểm soát chất lượng định dạng tài liệu do AI tạo: ngăn ngừa xuống dòng ký tự đơn lẻ, tiêu đề ít đoạn, sai lệch đánh số | Chạm đến các điểm đau phổ biến của mọi cảnh quan tạo tài liệu, tác giả nhấn mạnh "người dùng hiếm khi chủ động yêu cầu định dạng tốt, nhưng vấn đề ở khắp mọi nơi" | 🔵 Mở |
| 2 | **[skill-quality-analyzer / skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | Meta-skill: Đánh giá chất lượng năm chiều của chính Skill (cấu trúc/an toàn/hiệu quả/khả năng bảo trì/trải nghiệm người dùng) | Skill "duyệt Skill" đầu tiên, lấp đầy khoảng trống tự quản trị của hệ sinh thái | 🔵 Mở |
| 3 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | Tái cấu trúc Skill thiết kế frontend: cải thiện sự rõ ràng của chỉ dẫn và khả năng thực thi trong một lượt | Thảo luận tập trung vào "tính hạt của Skill" - làm thế nào để cân bằng giữa hướng dẫn cụ thể và thích ứng linh hoạt | 🔵 Mở |
| 4 | **[odt](https://github.com/anthropics/skills/pull/486)** | Tạo văn bản OpenDocument, điền mẫu và chuyển đổi ODT↔HTML | Nhu cầu tuân thủ định dạng mở của doanh nghiệp/chính phủ mạnh mẽ, bổ sung cho các skill docx/pdf hiện có | 🔵 Mở |
| 5 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | Hệ thống kiểm thử full-stack: Mô hình Testing Trophy, kiểm thử component React, chiến lược tích hợp/E2E | Skill "kiểm thử là quy trình công việc" được cộng đồng kêu gọi từ lâu, bao phủ từ triết lý đến chuỗi công cụ | 🔵 Mở |
| 6 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | Hệ thống bộ nhớ bền vững giữa các phiên, truy xuất ngữ cảnh chủ động và cấu trúc hóa bộ nhớ | Giải quyết hạn chế cốt lõi không trạng thái của Claude Code, cơ sở hạ tầng quan trọng cho agent chạy dài hạn | 🔵 Mở |
| 7 | **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** | Quản trị mã nguồn: nhận diện mã orphan, phát hiện thiếu tài liệu, kiểm toán sự phình to của cơ sở hạ tầng | Quy trình 10 bước xuất ra CODEBASE-STATUS.md, quản lý định lượng nợ kỹ thuật | 🔵 Mở |
| 8 | **[AURELION](https://github.com/anthropics/skills/pull/444)** | Bộ bốn skill: Khung nhận thức có cấu trúc (kernel) + chế độ cố vấn (advisor) + thực thi agent (agent) + lớp bộ nhớ (memory) | Đề xuất cấp phương pháp luận quản lý kiến thức chuyên môn, kiến trúc hợp tác AI hướng khoa học nhận thức | 🔵 Mở |

---

## 2. Xu hướng nhu cầu cộng đồng (tổng hợp từ Issues)

| Hướng | Issue đại diện | Nhu cầu cốt lõi |
|:---|:---|:---|
| **Quản trị Skill cấp tổ chức** | [#228](https://github.com/anthropics/skills/issues/228) Chia sẻ tổ chức, [#492](https://github.com/anthropics/skills/issues/492) An toàn không gian tên | Triển khai doanh nghiệp yêu cầu cách ly không gian tên chính thức, tích hợp SSO, thư viện chia sẻ thay vì truyền tệp qua Slack |
| **Cơ sở hạ tầng chất lượng Skill** | [#202](https://github.com/anthropics/skills/issues/202) Thực tiễn tốt nhất cho skill-creator, [#556](https://github.com/anthropics/skills/issues/556) Công cụ đánh giá lỗi | Từ "viết được Skill" đến "viết Skill tốt" hệ thống công cụ: đánh giá tự động, kiểm thử tỷ lệ kích hoạt, tối ưu hóa mô tả |
| **Tương thích giao thức MCP** | [#16](https://github.com/anthropics/skills/issues/16) | Phơi bày năng lực Skill dưới dạng MCP tiêu chuẩn, thực hiện tái sử dụng giữa các máy khách AI |
| **Triển khai đa đám mây/đa nền tảng** | [#29](https://github.com/anthropics/skills/issues/29) Tương thích Bedrock | Thoát khỏi môi trường gốc Claude Code, tải Skill cho các kịch bản tự lưu trữ/AWS/Azure |
| **Sửa lỗi cơ chế phân phối plugin** | [#189](https://github.com/anthropics/skills/issues/189) Cài đặt lặp lại, [#1087](https://github.com/anthropics/skills/issues/1087) Tải toàn bộ | marketplace.json cài đặt khai báo so với xung đột kéo toàn bộ kho lưu trữ thực tế |

---

## 3. Skills tiềm năng cao chờ hợp nhất (bình luận tích cực + cập nhật gần đây)

| Skill | PR | Đánh giá tiềm năng | Tiến triển chính |
|:---|:---|:---|:---|
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | ⭐⭐⭐⭐⭐ | Cập nhật tháng 3 năm 2026, không có phản đối, tính phổ quát cao, ít rào cản hợp nhất |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | ⭐⭐⭐⭐⭐ | Cập nhật ngày 21 tháng 4 năm 2026, lấp đầy khoảng trống lớn nhất của hệ sinh thái (kiểm thử), tác giả phản hồi tích cực |
| **odt** | [#486](https://github.com/anthropics/skills/pull/486) | ⭐⭐⭐⭐☆ | Cập nhật ngày 14 tháng 4 năm 2026, nhu cầu tuân thủ thị trường chính phủ/EU mạnh mẽ, khác biệt rõ ràng |
| **Skill nền tảng ServiceNow** | [#568](https://github.com/anthropics/skills/pull/568) | ⭐⭐⭐⭐☆ | Cập nhật ngày 23 tháng 4 năm 2026, Skill dọc bao phủ ITSM doanh nghiệp toàn diện nhất |
| **sensory (AppleScript macOS)** | [#806](https://github.com/anthropics/skills/pull/806) | ⭐⭐⭐⭐☆ | Cập nhật ngày 02 tháng 4 năm 2026, giải pháp thay thế chụp màn hình tự động hóa gốc, thiết kế mô hình quyền hạn trưởng thành |
| **AppDeploy** | [#360](https://github.com/anthropics/skills/pull/360) | ⭐⭐⭐☆☆ | Vẫn cập nhật vào ngày 04 tháng 5 năm 2026, vòng lặp đóng triển khai full-stack, nhưng phụ thuộc vào dịch vụ bên thứ ba |
| **SAP-RPT-1-OSS** | [#181](https://github.com/anthropics/skills/pull/181) | ⭐⭐⭐☆☆ | Cập nhật ngày 16 tháng 3 năm 2026, độc quyền hệ sinh thái SAP, ràng buộc mô hình mã nguồn mở Apache 2.0 |

---

## 4. Phân tích sâu về hệ sinh thái Skills

> **Mâu thuẫn cốt lõi: Cộng đồng đã chuyển từ "mở rộng số lượng Skill" sang "quản trị chất lượng Skill và phân phối có thể tin cậy cấp tổ chức"** - Những người đóng góp tập trung vào lớp cơ sở hạ tầng như meta-skill (skill duyệt skill), bộ nhớ bền vững, an toàn định dạng; người dùng lại khẩn cấp yêu cầu chính thức giải quyết các nút thắt cổ chai của hệ sinh thái như ranh giới tin cậy không gian tên, chia sẻ doanh nghiệp SSO, lỗi công cụ đánh giá.

---

---

# Nhật ký cộng đồng Claude Code | 2026-05-09

## Tóm tắt hôm nay

Sự kiện quan trọng nhất trong cộng đồng hôm nay là **lỗi kích hoạt quy mô lớn trên nền tảng Windows của tiện ích mở rộng VS Code v2.1.136**, do đường dẫn CI bị mã hóa cứng gây ra, Anthropic đã khẩn cấp phát hành bản sửa lỗi v2.1.137. Ngoài ra, vấn đề ổn định kết nối Cowork/Dispatch trên nền tảng macOS tiếp tục lan rộng, trở thành lĩnh vực nhận được nhiều khiếu nại nhất của người dùng gần đây.

---

## Phát hành phiên bản

### v2.1.137 (Bản sửa lỗi)
- **[VSCode] Sửa lỗi kích hoạt tiện ích mở rộng Windows thất bại** — Sửa lỗi khẩn cấp cho vấn đề đường dẫn CI mã hóa cứng `createRequire` được giới thiệu trong v2.1.136
- [GitHub Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.137)

### v2.1.136 (Cập nhật chức năng)
- **Khảo sát phản hồi đo lường từ xa doanh nghiệp**：Thêm biến môi trường `CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL`, hỗ trợ thu thập khảo sát chất lượng phiên trong kịch bản doanh nghiệp thông qua OpenTelemetry
- **Quy tắc từ chối bắt buộc của Chế độ Tự động**：Thêm cấu hình `settings.autoMode.hard_deny`, cho phép quy tắc phân loại chặn các thao tác cụ thể một cách tuyệt đối, bất kể ý định người dùng hay danh sách cho phép
- [GitHub Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.136)

---

## Tin tức cộng đồng Issues nóng

| # | Tiêu đề | Trạng thái | Bình luận | Phân tích tầm quan trọng |
|---|------|------|------|-----------|
| [#45937](https://github.com/anthropics/claude-code/issues/45937) | Cuộc trò chuyện chính của Dispatch bị ngoại tuyến vĩnh viễn, nhưng tác vụ Cowork vẫn hoạt động bình thường | 🔴 MỞ | 27 | **Vấn đề kiến trúc cốt lõi**：Trạng thái luồng cuộc trò chuyện chính và kênh tác vụ Cowork tách biệt, ảnh hưởng đến cộng tác trên thiết bị di động + máy tính để bàn, người dùng phản ánh chưa giải quyết trong một tháng |
| [#51798](https://github.com/anthropics/claude-code/issues/51798) | `PreToolUse permissionDecision: "allow"` không thể ngăn chặn xác nhận vô hiệu hóa sandbox (quay lại từ 2.1.116+) | 🔴 MỞ | 18 | **Thay đổi phá vỡ API Hooks**：Cơ chế ủy quyền im lặng mà luồng công việc doanh nghiệp dựa vào đã không hoạt động, điểm cân bằng giữa an toàn và hiệu quả đã được thiết lập lại |
| [#49545](https://github.com/anthropics/claude-code/issues/49545) | Dispatch của Claude hiển thị "máy tính để bàn ngoại tuyến" trong nhiều tuần | 🔴 MỞ | 13 | Trường hợp trùng lặp/liên quan của #45937, cho thấy vấn đề này có tính phổ biến, không phải trường hợp cá biệt |
| [#57415](https://github.com/anthropics/claude-code/issues/57415) | Tiện ích mở rộng VS Code v2.1.136 Windows kích hoạt thất bại (đường dẫn CI mã hóa cứng quay lại) | 🟢 ĐÃ ĐÓNG | 10 | **Ưu tiên cao nhất hôm nay**：Cùng nguồn gốc với #56549/#56725, quy trình CI/CD có lỗi hệ thống, v2.1.137 đã sửa |
| [#50810](https://github.com/anthropics/claude-code/issues/50810) | Opus 4.7 thiếu trong CLI / bộ chọn model | 🔴 MỞ | 9 | **Độ trễ đồng bộ hóa mô hình**：API và Desktop đã hỗ trợ, nhưng CLI lại chưa theo kịp, ảnh hưởng đến sự nhất quán trải nghiệm của nhà phát triển |
| [#53442](https://github.com/anthropics/claude-code/issues/53442) | MCP Google Drive không thể truy cập ổ đĩa đám mây chia sẻ Workspace | 🔴 MỞ | 5 | **Tắc nghẽn kịch bản doanh nghiệp**：Google Workspace là công cụ hợp tác cốt lõi của doanh nghiệp, việc thiếu truy cập ổ đĩa chia sẻ làm giảm đáng kể giá trị tích hợp MCP |
| [#51040](https://github.com/anthropics/claude-code/issues/51040) | MCP Google Drive/Gmail/Calendar thiếu thao tác ghi | 🔴 MỞ | 5 | **Tranh chấp tính năng hoàn chỉnh**：Chỉ đọc + tạo = tích hợp nửa vời, cộng đồng đặt câu hỏi "tại sao không làm CRUD đầy đủ chức năng" |
| [#57254](https://github.com/anthropics/claude-code/issues/57254) | Tín hiệu SIGTTIN/SIGTTOU khi khởi động macOS 26 gây treo máy | 🔴 MỞ | 4 | **Tương thích hệ điều hành mới**：Phiên bản xem trước macOS 26 đã xuất hiện xung đột tín hiệu điều khiển TTY, cần chuẩn bị trước |
| [#57361](https://github.com/anthropics/claude-code/issues/57361) | Giao diện người dùng không thể khôi phục sau khi khôi phục phiên chia sẻ của Dispatch (CLI có thể khôi phục) | 🔴 MỞ | 3 | **Không nhất quán quản lý trạng thái**：Logic tự động dispose của sessions-bridge không khớp với khả năng resume của CLI, độ tin cậy của máy tính để bàn bị đặt dấu hỏi |
| [#57473](https://github.com/anthropics/claude-code/issues/57473) | Vòng lặp `sh -c 'sleep 1'` mỗi giây 1Hz gây ra bão đo lường từ xa EDR và hết pin | 🔴 MỞ | 2 | **Tuân thủ an ninh doanh nghiệp**：Công cụ EDR cảnh báo tần suất cao, có thể kích hoạt điều tra SOC, đồng thời gây khủng hoảng thời lượng pin cho máy tính xách tay |

---

## Tiến triển PR quan trọng

| # | Tiêu đề | Trạng thái | Nội dung chức năng/sửa lỗi |
|---|------|------|--------------|
| [#34735](https://github.com/anthropics/claude-code/pull/34735) | ci: cập nhật actions | 🟡 MỞ | Hiện đại hóa quy trình công việc GitHub Actions, cải thiện độ tin cậy và bảo mật CI |
| [#14842](https://github.com/anthropics/claude-code/pull/14842) | fix: cập nhật liên kết tài liệu trỏ đến trang web Claude Code mới | 🟡 MỞ | Di chuyển cơ sở hạ tầng tài liệu, đảm bảo người dùng nhận được hướng dẫn chính thức mới nhất |
| [#56784](https://github.com/anthropics/claude-code/pull/56784) | Pin GitHub Actions đến SHA commit | 🟢 ĐÃ ĐÓNG | **An ninh chuỗi cung ứng**：Khóa tham chiếu Action bên thứ ba vào commit hash không thể thay đổi, chống lại các cuộc tấn công chiếm đoạt thẻ |
| [#57267](https://github.com/anthropics/claude-code/pull/57267) | Sửa lỗi phân trang quét tự động làm sạch Issue lỗi thời | 🟡 MỞ | Giải quyết vấn đề bỏ sót phân trang API GitHub, cải thiện phạm vi tự động hóa quản trị kho lưu trữ |
| [#57223](https://github.com/anthropics/claude-code/pull/57223) | feat(frontend-design): thêm Cổng quy trình Superpowers trước khi thực hiện | 🟢 ĐÃ ĐÓNG | **Phương pháp luận kỹ thuật**：Trong SKILL `frontend-design`, bắt buộc áp dụng quy trình TDD brainstorm→plan→visual→review, nâng cao chất lượng thiết kế mã do AI tạo ra |
| [#57199](https://github.com/anthropics/claude-code/pull/57199) | fix(code-review): sử dụng --body-file để giữ nguyên dòng mới tóm tắt bình luận | 🟡 MỞ | Sửa lỗi chuyển đổi dấu ngoặc cho shell `gh pr comment -b`, đảm bảo định dạng tóm tắt đánh giá mã được hiển thị chính xác |
| [#57190](https://github.com/anthropics/claude-code/pull/57190) | Xóa 'statsig.anthropic.com' khỏi tập lệnh tường lửa | 🟡 MỞ | Xóa tên miền đo lường từ xa đã lỗi thời, giảm gánh nặng bảo trì quy tắc mạng không cần thiết |
| [#57333](https://github.com/anthropics/claude-code/pull/57333) | Update README.md | 🟡 MỞ | Cập nhật nội dung tài liệu (chi tiết thay đổi cần xem xét) |

> Lưu ý: Chỉ 8 PR có cập nhật trong 24 giờ qua, trong đó có 2 PR đã đóng, mức độ hoạt động đóng góp của cộng đồng tương đối ổn định.

---

## Xu hướng nhu cầu chức năng

Dựa trên phân tích 50 Issue đang hoạt động, trọng tâm cộng đồng thể hiện các cấp độ sau:

| Mức độ ưu tiên | Hướng | Issue điển hình | Diễn giải xu hướng |
|--------|------|-----------|---------|
| 🔥 P0 | **Độ ổn định IDE Windows** | #57415, #57495, #57479, #57503, #57500, #57397 | Sự quay lại của đường dẫn CI trong v2.1.136 gây ra phản ứng dây chuyền, nhận thức người dùng VS Code Windows trở thành "công dân hạng hai" ngày càng gia tăng |
| 🔥 P0 | **Độ tin cậy kết nối Cowork/Dispatch** | #45937, #49545, #57361, #57501 | Đồng bộ hóa trạng thái giữa máy tính để bàn và thiết bị di động, cơ chế phục hồi phiên có lỗi kiến trúc |
| 🔥 P1 | **Khả năng dự đoán hệ thống Hooks/Quyền** | #51798, #57137 | Kịch bản tự động hóa doanh nghiệp yêu cầu kiểm soát ủy quyền ổn định, có thể lập trình, thay đổi quay lại phá vỡ niềm tin |
| 🔥 P1 | **Mức độ trưởng thành của hệ sinh thái MCP** | #53442, #51040, #57211, #57496 | Từ "kết nối được" đến "sản xuất được", cộng đồng yêu cầu CRUD đầy đủ chức năng, tải lại môi trường, hỗ trợ ổ đĩa chia sẻ |
| P2 | **Đồng bộ hóa và tính thời sự của mô hình** | #50810 | Nhịp độ ra mắt mô hình CLI và Desktop cần phải đồng bộ |
| P2 | **Quản lý hiệu suất và tài nguyên** | #57473, #57498 | Thân thiện với EDR, làm sạch tiến trình, tối ưu hóa pin được đưa vào danh sách xem xét của doanh nghiệp |
| P3 | **Tương thích nền tảng mới** | #57254 (macOS 26), #57502 (WSL2) | Nhu cầu chuẩn bị trước cho các nền tảng tiên tiến |

---

## Điểm đau của nhà phát triển và nhu cầu tần suất cao

### 🔴 Điểm đau tức thời (cần phản hồi khẩn cấp từ chính thức)

1. **"Windows lại bị lỗi" — Thiếu cổng kiểm soát chất lượng CI/CD**
   - v2.1.136 là lần **thứ ba** quay lại tương tự ( #56549 → #56725 → #57415), nhà phát triển đặt câu hỏi: Tại sao vấn đề đường dẫn Linux mã hóa cứng lại xuất hiện nhiều lần? Có thiếu kiểm thử kích hoạt tự động trên nền tảng Windows không?
   - Đề xuất: Mở rộng quy trình phát hành để thêm cổng kiểm tra khói `win32-x64`

2. **"Hooks thay đổi tùy ý" — Thay đổi hành vi không có hướng dẫn di chuyển**
   - `permissionDecision: "allow"` trong #51798 không hoạt động là một thay đổi im lặng từ 2.1.116+, người dùng doanh nghiệp dựa vào cơ chế này để thực hiện dây chuyền không giám sát
   - Yêu cầu: Changelog chính thức đánh dấu rõ ràng các thay đổi hành vi của API Hooks, cung cấp cửa sổ di chuyển

### 🟡 Nhu cầu tần suất cao (ảnh hưởng đến độ sâu chấp nhận)

3. **"MCP nhìn thì hay dùng thì dở" — Tích hợp chưa đủ sâu**
   - Google Drive chỉ đọc, thiếu ổ đĩa chia sẻ, thiếu thao tác ghi → Phạm vi kịch bản sản xuất thực tế < 30%
   - Yêu cầu làm lại nóng của #57496 phản ánh hiệu quả phát triển MCP thấp

4. **"Trạng thái Dispatch khó hiểu" — Thiếu phương tiện gỡ lỗi**
   - Cuộc trò chuyện chính ngoại tuyến vs Cowork bình thường, UI không thể khôi phục vs CLI có thể khôi phục — Hộp đen máy trạng thái, người dùng không thể tự chẩn đoán
   - Yêu cầu: Phơi bày lệnh chẩn đoán như `claude status --dispatch`, hoặc trực quan hóa topo kết nối

5. **"Tiến trình nền như cỏ dại" — Thiếu quản trị tài nguyên**
   - Tích tụ 112 tiến trình trong #57498, vòng lặp 1Hz trong #57473, cho thấy quản lý vòng đời thô sơ
   - Nhu cầu kịch bản doanh nghiệp: Giới hạn tiến trình có thể cấu hình, tín hiệu thoát thanh lịch, chế độ tích hợp với systemd/launchd

### 🟢 Kỳ vọng dài hạn

6. **Hoàn thiện hệ sinh thái OpenTelemetry** — Đo lường khảo sát mới được thêm vào v2.1.136 chỉ là khởi đầu, cộng đồng mong đợi một ma trận khả năng quan sát đầy đủ (thiếu chỉ số trong #57402 đã được phản hồi)
7. **Tinh chỉnh quy tắc Chế độ Tự động** — `hard_deny` là một khởi đầu tốt, cần đi kèm với công cụ gỡ lỗi và phát hiện xung đột quy tắc

---

*Báo cáo hàng ngày được tạo dựa trên dữ liệu công khai GitHub, không đại diện cho lập trường chính thức của Anthropic. Nếu bạn cần đăng ký hoặc phản hồi, vui lòng liên hệ người bảo trì cộng đồng.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Nhật ký cộng đồng OpenAI Codex | 2026-05-09

## Tóm tắt hôm nay

Phiên bản Rust v0.130.0 đã được phát hành chính thức, mang đến các bản cập nhật lớn như hiển thị chi tiết hook plugin, lối vào điều khiển từ xa không đầu `codex remote-control`, v.v.; các khiếu nại của cộng đồng về **sự gia tăng bất thường trong tiêu thụ Token** (số bình luận #14593 đã lên tới 572) tiếp tục lan rộng, đồng thời vấn đề kết nối tiện ích mở rộng trình duyệt trên nền tảng Windows trở thành khu vực tập trung Bug mới hôm nay.

---

## Phát hành phiên bản

### [rust-v0.130.0](https://github.com/openai/codex/releases/tag/rust-v0.130.0)

| Hạng mục cập nhật | Mô tả |
|--------|------|
| **Tăng cường hệ thống plugin** | Trang chi tiết plugin hiện hiển thị các hook đi kèm, chia sẻ plugin hỗ trợ siêu dữ liệu liên kết và kiểm soát khả năng hiển thị |
| **Lối vào điều khiển từ xa** | Thêm lệnh `codex remote-control`, đơn giản hóa quy trình khởi động app-server không đầu, có thể điều khiển từ xa |
| **Máy khách App-server** | Mở rộng khả năng máy khách (mô tả phát hành bị cắt, suy đoán là tối ưu hóa giao thức kết nối) |

> Đồng thời phát hành 5 phiên bản alpha (alpha.3 đến alpha.10), nhịp độ lặp lại dày đặc.

---

## Tin tức cộng đồng Issues nóng

| # | Trạng thái | Tiêu đề | Bình luận | 👍 | Điểm cốt lõi |
|---|:---:|------|:--:|:--:|----------|
| [#14593](https://github.com/openai/codex/issues/14593) | 🔴 MỞ | Tốc độ tiêu thụ Token cực kỳ nhanh | 572 | 250 | **Chủ đề nóng nhất cộng đồng**，Người dùng đăng ký Business báo cáo Token bị tiêu thụ nhanh chóng, nghi ngờ có lỗi logic tính phí/gọi mô hình, chưa được giải quyết trong 2 tháng |
| [#10450](https://github.com/openai/codex/issues/10450) | 🔴 MỞ | Codex Desktop hỗ trợ phát triển từ xa | 174 | 644 | **Yêu cầu chức năng có nhiều lượt thích**，Người dùng hy vọng phiên bản Desktop đạt được trải nghiệm như VS Code Remote-SSH, cản trở việc di chuyển từ trình duyệt |
| [#20161](https://github.com/openai/codex/issues/20161) | 🟢 ĐÃ ĐÓNG | Xác minh số điện thoại lỗi | 101 | 77 | Sau khi đăng nhập SSO, buộc yêu cầu số điện thoại chưa liên kết, quy trình xác thực bị gián đoạn; đóng hôm nay cho thấy đã sửa lỗi |
| [#8259](https://github.com/openai/codex/issues/8259) | 🔴 MỞ | Tối ưu hóa khả năng đọc bảng Markdown | 31 | 115 | Điểm đau trải nghiệm TUI, bảng do AI tạo ra có sai lệch khoảng trắng, ảnh hưởng đến việc xem xét mã |
| [#20552](https://github.com/openai/codex/issues/20552) | 🔴 MỞ | Chuyển đổi cây tệp không đáng tin cậy | 26 | 7 | Trạng thái menu `View > Toggle File Tree` của Desktop macOS không đồng bộ với UI thực tế |
| [#18993](https://github.com/openai/codex/issues/18993) | 🔴 MỞ | Tiện ích mở rộng VS Code không thể mở phiên lịch sử | 24 | 41 | **Lỗi quay lại**，Phiên bản 1.117.0 làm hỏng việc tải lịch sử phiên, ảnh hưởng đến tính liên tục của quy trình công việc |
| [#4432](https://github.com/openai/codex/issues/4432) | 🔴 MỞ | Xác thực đa tài khoản `--auth-profile` | 12 | 94 | Nhu cầu cấp thiết trong kịch bản doanh nghiệp/đa khách hàng, giả định một tài khoản của CLI hạn chế năng suất |
| [#19910](https://github.com/openai/codex/issues/19910) | 🔴 MỞ | Chức năng Goals mất ngữ cảnh sau khi nén | 11 | 0 | Lỗi quan trọng của chức năng Goals mới, nén giữa vòng lặp làm mất yêu cầu kiểm toán |
| [#21671](https://github.com/openai/codex/issues/21671) | 🔴 MỞ | Lỗi tham số `service_tier` của lệnh `/compact` | 5 | 3 | **Quay lại từ 0.129.0**，Sau khi nâng cấp, lệnh cốt lõi bị lỗi, làm đứt gãy khả năng tương thích API |
| [#21746](https://github.com/openai/codex/issues/21746) | 🔴 MỞ | Gọi LLM bổ sung dẫn đến Token tăng vọt | 3 | 1 | Trường hợp mới cùng chủ đề với #14593, người dùng định vị cuộc gọi bổ sung kiểm tra an toàn thông qua phân tích nhật ký |

---

## Tiến triển PR quan trọng

| # | Trạng thái | Tiêu đề | Nội dung cốt lõi |
|---|:---:|------|----------|
| [#21844](https://github.com/openai/codex/pull/21844) | 🟡 MỞ | Bỏ qua dấu hiệu git lỗi thời `/tmp` | Sửa lỗi nhận diện sai thư mục world-writable trong CI, cải thiện độ bền của việc tìm thư mục gốc dự án |
| [#21819](https://github.com/openai/codex/pull/21819) | 🟡 MỞ | Kiểm thử bao phủ hành vi ghi liên kết sandbox | Bổ sung khoản nợ kỹ thuật của #1705, kiểm thử tích hợp cho kịch bản thoát liên kết tượng trưng sau khi sandbox hóa `apply_patch` |
| [#21396](https://github.com/openai/codex/pull/21396) | 🟡 MỞ | Lệnh CLI chợ plugin | **Xây dựng hệ sinh thái**，Thêm lệnh con `codex plugin marketplace`, hỗ trợ thêm/bớt/tìm kiếm plugin, tạo nền tảng cho việc phân phối plugin của bên thứ ba |
| [#21617](https://github.com/openai/codex/pull/21617) | 🟡 MỞ | Định tuyến `apply_patch` đa môi trường | Hỗ trợ chọn đích patch theo môi trường, phân tích và xác minh bộ chọn môi trường, đặt nền tảng cho luồng công việc từ xa/container hóa |
| [#21843](https://github.com/openai/codex/pull/21843) | 🟡 MỞ | Loại bỏ bộ lắng nghe WebSocket TCP | **Đơn giản hóa kiến trúc**，app-server thống nhất đi qua stdio/Unix socket + `remote_control`, giảm bề mặt tấn công |
| [#21590](https://github.com/openai/codex/pull/21590) | 🟡 MỞ | Sử dụng ổ đĩa công việc tốc độ cao trong CI Windows | Sử dụng VHD của ổ đĩa Dev hoặc ổ đĩa VHD tốc độ cao để tăng tốc xây dựng Rust/Bazel, giải quyết nút thắt cổ chai của quy trình Windows |
| [#21847](https://github.com/openai/codex/pull/21847) | 🟡 MỞ | Lưu trữ trạng thái SQLite | **Cơ sở hạ tầng quan trọng**，Loại bỏ cơ chế xóa DB khi nâng cấp phiên bản, thay vào đó là di chuyển thanh lịch, tạo nền tảng cho độ tin cậy trạng thái |
| [#21768](https://github.com/openai/codex/pull/21768) | 🟡 MỞ | Cờ `--dangerously-bypass-hook-trust` | Bỏ qua độ tin cậy hook cho kịch bản không đầu/tự động hóa, cân bằng giữa an toàn và tính khả dụng của CI/CD |
| [#21840](https://github.com/openai/codex/pull/21840) | 🟢 ĐÃ ĐÓNG | Tiêu đề định danh máy khách Bedrock Mantle | Thêm `x-amzn-mantle-client-agent: codex` cho tích hợp Amazon Bedrock, ngăn chặn có thể truy nguyên ngăn xếp an toàn |
| [#20718](https://github.com/openai/codex/pull/20718) | 🟢 ĐÃ ĐÓNG | Quản lý vòng đời tiến trình nền App-server | Quy trình khởi động có thể quản lý được cho kịch bản máy tính để bàn/thiết bị di động SSH từ xa, hợp nhất hôm nay |

---

## Xu hướng nhu cầu chức năng

Dựa trên phân tích 50 Issue đang hoạt động:

| Xu hướng | Mức độ | Vấn đề đại diện |
|----------|------|----------|
| **Độ minh bạch về kiểm soát Token/Phí** | ████████░░ | #14593, #21746, #16889 — Sự bất thường về tiêu thụ là khủng hoảng niềm tin kéo dài hai tháng |
| **Windows trở thành công dân hạng nhất** | ██████░░░░ | #19305, #20567, #21638, #21741, #21822 — Máy tính để bàn + tiện ích mở rộng trình duyệt + Sử dụng máy tính đều bị tụt hậu |
| **Luồng công việc từ xa/không đầu/tự động hóa** | █████░░░░░ | #10450, #21424(release), #21843, #21768 — Từ phát triển từ xa đến tích hợp CI, nhu cầu cấp thiết của doanh nghiệp |
| **Hệ sinh thái trình duyệt (tiện ích mở rộng Chrome)** | █████░░░░░ | #21700, #21791, #21822, #21824, #21851 — Gỡ bỏ khỏi cửa hàng tiện ích mở rộng, lỗi thời gian chờ kết nối, lỗi API tập trung bùng nổ |
| **Độ tin cậy Ngữ cảnh/Bộ nhớ** | ████░░░░░░ | #19910, #18720, #21671 — Nén, bàn giao, mất trạng thái mục tiêu ảnh hưởng đến tỷ lệ hoàn thành tác vụ |
| **Xác thực và đa tài khoản** | ████░░░░░░ | #4432, #20161, #13891 — SSO doanh nghiệp, OAuth MCP, kịch bản đa người thuê |

---

## Điểm quan tâm của nhà phát triển

### Điểm đau tần suất cao

| Mức độ ưu tiên | Vấn đề | Phạm vi ảnh hưởng |
|:------:|------|--------|
| **P0** | **Hố đen phí Token** | Người dùng không thể dự đoán/kiểm soát tiêu thụ, #14593 572 bình luận không có quy nhân rõ ràng từ chính thức, ảnh hưởng đến mọi cấp Plus/Business/Enterprise |
| **P1** | **Khoảng cách trải nghiệm Windows** | Dán lặp lại, tràn tiến trình git, lỗi kết nối tiện ích mở rộng Chrome, thiếu Sử dụng máy tính, buộc người dùng Win phải hạ cấp về trình duyệt |
| **P1** | **Quay lại khi nâng cấp phiên bản** | 0.128→0.129 lệnh `/compact` lỗi, con trỏ nhấp nháy, tìm kiếm kích hoạt quá mức, việc lặp lại nhanh chóng đi kèm với chi phí ổn định |
| **P2** | **Khả năng đọc TUI/Đầu ra** | Bảng Markdown sai lệch, lũ lụt tìm kiếm làm ngập ngữ cảnh, nhấp nháy chuỗi ESC, chất lượng hiển thị nội dung do AI tạo ra chưa đạt tiêu chuẩn sản xuất |

### Tín hiệu nhu cầu mới nổi

- **Thương mại hóa chợ plugin**：Lệnh thị trường CLI trong #21396 + kiểm soát khả năng hiển thị chia sẻ trong Release, ám chỉ OpenAI đang xây dựng hệ thống phân phối plugin của bên thứ ba
- **Tập trung hóa SQLite làm trung tâm bộ nhớ**：Biểu đạt "load-bearing" trong #21847, đánh dấu sự chuyển đổi của Codex từ công cụ tạm thời sang nền tảng công việc bền vững
- **Tinh chỉnh sandbox an toàn**：Kiểm thử ghi liên kết trong #21819/#21845, cờ bỏ qua hook trong #21768, cho thấy sự căng thẳng giữa tính linh hoạt và an toàn trong chiến lược sandbox

---

> 📌 **Lưu ý của nhà phân tích**: Dữ liệu hôm nay thể hiện bức tranh "lặp lại chức năng nhanh chóng (v0.130.0 + PR dày đặc) và khủng hoảng ổn định cốt lõi song hành (Token/Windows/quay lại)". Đề xuất chú ý đến phản hồi chính thức về #14593 và mức độ ưu tiên vá lỗi cho vấn đề tiện ích mở rộng Chrome trên Windows.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Nhật ký cộng đồng Gemini CLI | 2026-05-09

---

## 1. Tóm tắt hôm nay

Hôm nay không có phiên bản mới nào được phát hành bởi cộng đồng, nhưng **vấn đề suy giảm hiệu suất nghiêm trọng của v0.35.3** (#24294) tiếp tục lan rộng, người dùng mạnh mẽ phản hồi rằng việc hạ cấp xuống v0.34.0 mới có thể khôi phục sử dụng bình thường. Đồng thời, nhóm đang đẩy mạnh nhiều bản sửa lỗi cốt lõi, bao gồm các vấn đề treo máy/tiến trình zombie trên môi trường Windows, sửa lỗi hỗ trợ proxy, và tái cấu trúc proxy điều phối cho kiến trúc Bot.

---

## 2. Phát hành phiên bản

**Không có phiên bản mới được phát hành** (trong 24 giờ qua)

---

## 3. Tin tức cộng đồng Issues nóng

| # | Issue | Tầm quan trọng | Phản hồi cộng đồng |
|---|------|--------|---------|
| **[#24294](https://github.com/google-gemini/gemini-cli/issues/24294)** | **Suy giảm hiệu suất cực đoan v0.35.3: Phản hồi gợi ý đơn giản quá 80 giây, hạ cấp v0.34.0 có thể giải quyết** | 🔴 P1 | 28 👍, nhiều người dùng xác nhận. Nhãn nền tảng cốt lõi + mô-đun cốt lõi, đã gắn thẻ maintainer only |
| **[#24184](https://github.com/google-gemini/gemini-cli/issues/24184)** | **Bùng nổ cảm xúc người dùng: Vấn đề vẫn tồn tại dù cập nhật liên tục** | 🟡 Quan tâm cao | 15 👍, 14 bình luận. Phản ánh sự thất vọng kéo dài của người dùng trả phí, cần chú ý đến mức độ tin cậy của cộng đồng |
| **[#19936](https://github.com/google-gemini/gemini-cli/issues/19936)** | **Vòng lặp xác minh vô hạn của tài khoản Pro: Xác minh thành công nhưng vẫn báo cần xác minh** | 🟡 P2 | 12 bình luận, 5 👍. Quy trình xác thực chặn đường dẫn sử dụng cốt lõi |
| **[#23984](https://github.com/google-gemini/gemini-cli/issues/23984)** | **CLI hoàn toàn không phản hồi: Gợi ý đầu tiên treo 15 phút+, /quit không hoạt động** | 🟡 Ổn định cốt lõi | 11 bình luận, ảnh hưởng khả năng tương tác cơ bản |
| **[#24222](https://github.com/google-gemini/gemini-cli/issues/24222)** | **Kế hoạch AI Pro không thể sử dụng Gemini 3.1 Pro Preview** | 🔴 P1 | 9 bình luận, 7 👍. Vấn đề truy cập chức năng trả phí, nghi ngờ bị chặn ẩn |
| **[#24322](https://github.com/google-gemini/gemini-cli/issues/24322)** | **Không thể sử dụng trong nhiều ngày, người dùng tìm hướng dẫn hoàn tiền** | 🔴 P1 | 7 bình luận. Rủi ro mất người dùng trả phí |
| **[#23973](https://github.com/google-gemini/gemini-cli/issues/23973)** | **Tài khoản Pro bị nhận dạng là cấp tiêu chuẩn** | 🟡 P2 | 10 bình luận. Lỗi hệ thống phí/quyền |
| **[#23984](https://github.com/google-gemini/gemini-cli/issues/23984)** | **Vòng lặp thử lại 429 vô hạn của tài khoản Pro + phình to ngữ cảnh** | 🟡 Ảnh hưởng cao | 9 👍, 4 bình luận. Chính sách giới hạn tốc độ API bất thường |
| **[#24208](https://github.com/google-gemini/gemini-cli/issues/24208)** | **Người dùng không miễn phí liên tục lỗi 429, chính thức không phản hồi** | 🟡 Chỉ số cảm xúc | 4 bình luận. Người dùng phàn nàn thiếu giao tiếp |
| **[#26402](https://github.com/google-gemini/gemini-cli/issues/26402)** | ** /clear không dừng luồng phản hồi, chủ đề đang hoạt động bị rò rỉ sang phiên tiếp theo** | 🟡 Báo cáo mới | 3 bình luận, 2 👍. Điều kiện cạnh tranh quản lý trạng thái |

---

## 4. Tiến triển PR quan trọng

| # | PR | Trạng thái | Nội dung chức năng/sửa lỗi |
|---|-----|------|-------------|
| **[#26717](https://github.com/google-gemini/gemini-cli/pull/26717)** | **feat(bot): Triển khai proxy điều phối và mô hình ủy thác luồng công việc** | 🟢 MỞ | Tái cấu trúc kiến trúc Bot: Giới thiệu proxy WORKER, bộ não nghiên cứu và phân loại bắt buộc của interactive/metrics, cải thiện tính mô-đun và bảo mật (ranh giới không tin cậy) |
| **[#26392](https://github.com/google-gemini/gemini-cli/pull/26392)** | **fix(windows): Giải quyết vấn đề treo máy, tiến trình zombie, cải thiện độ tin cậy của proxy con** | 🟢 MỞ | Ưu tiên P1: Tối ưu hóa quản lý tiến trình Windows, lưu trữ nhật ký, ổn định proxy con, hỗ trợ mô hình thế hệ tiếp theo |
| **[#26361](https://github.com/google-gemini/gemini-cli/pull/26361)** | **fix(core): Bên ngoài hóa https-proxy-agent sửa lỗi hỗ trợ proxy** | 🟢 MỞ | Ưu tiên P1: Giải quyết lỗi `TypeError: HttpsProxyAgent is not a constructor`, nhu cầu cấp thiết trong môi trường mạng doanh nghiệp |
| **[#26324](https://github.com/google-gemini/gemini-cli/pull/26324)** | **fix(cli): Ngăn chặn vòng lặp vô hạn của phantom text xuống dòng** | 🟢 MỞ | Ưu tiên P2: Sửa lỗi treo CLI do hoàn thành gợi ý dài, bao gồm đầu vào đặc biệt `@getskill.sh:3` |
| **[#26714](https://github.com/google-gemini/gemini-cli/pull/26714)** | **feat(cli): Hợp nhất Chế độ Tự động thành Chế độ Thông minh duy nhất** | 🟢 MỞ | Đơn giản hóa nỗi lo chọn lựa của người dùng: "Auto (Gemini 3)" và "Auto (Gemini 2.5)" được hợp nhất thành "Auto" duy nhất với định tuyến động |
| **[#26652](https://github.com/google-gemini/gemini-cli/pull/26652)** | **fix(core): Vertex AI tương thích snake_case thought_signature** | 🟢 MỞ | Ưu tiên P1: Sửa lỗi Vertex AI backend 400 INVALID_ARGUMENT, đồng bộ hóa quy ước đặt tên |
| **[#24528](https://github.com/google-gemini/gemini-cli/pull/24528)** | **feat(core): Thêm khung đánh giá nén** | 🟢 MỞ | Ưu tiên P1: Cơ sở hạ tầng kiểm thử đo lường, có thể so sánh cho chiến lược nén ngữ cảnh |
| **[#24736](https://github.com/google-gemini/gemini-cli/pull/24736)** | **feat(core): Nén ngữ cảnh của AgentHistoryProvider bằng hợp kim và phân cụm** | 🟢 MỞ | Thay thế chiến lược nén phân cụm ngữ nghĩa cắt nhị phân, nhóm các tin nhắn tương tự vào rừng lưu trữ lạnh |
| **[#26139](https://github.com/google-gemini/gemini-cli/pull/26139)** | **fix(cli): Lỗi closure lỗi thời của FooterConfigDialog** | 🟢 MỞ | Ưu tiên P2: Sửa lỗi closure lỗi thời của `useSettingsStore` |
| **[#24758](https://github.com/google-gemini/gemini-cli/pull/24758)** | **Core(fix)!: Bắt buộc phải có trường `mode` khi đặt chiến lược (thay đổi phá vỡ)** | 🟢 MỞ | Mặc định an toàn: Ngăn chặn vô hiệu hóa tất cả các chế độ khi không chỉ định mode, quy tắc cũ sẽ không còn hiệu lực |

---

## 5. Xu hướng nhu cầu chức năng

Dựa trên phân tích 50 Issue đang hoạt động, trọng tâm cộng đồng thể hiện sự phân bổ sau:

| Hướng | Mức độ | Biểu hiện điển hình |
|------|------|---------|
| **Hiệu suất và ổn định** | 🔥🔥🔥🔥🔥 | Suy giảm hiệu suất v0.35.3, vòng lặp vô hạn, treo máy, tiến trình zombie, bão thử lại 429 |
| **Quyền lợi trả phí và tính phí** | 🔥🔥🔥🔥🔥 | Lỗi nhận dạng tài khoản Pro, giới hạn truy cập chức năng, yêu cầu hoàn tiền, minh bạch hạn ngạch |
| **Xác thực và ủy quyền** | 🔥🔥🔥🔥 | Vòng lặp xác minh vô hạn, chặn đăng nhập, chặn ẩn SSO |
| **Hỗ trợ nền tảng Windows** | 🔥🔥🔥🔥 | Quản lý tiến trình, lỗi phím tắt (Ctrl+Insert/Shift+Insert) |
| **Quản lý ngữ cảnh/nén** | 🔥🔥🔥 | Khung đánh giá, nén hợp kim, phình to Token |
| **Proxy và mạng** | 🔥🔥🔥 | Hỗ trợ proxy HTTP, hỗ trợ cài đặt Bun, tương thích giao thức MCP |
| **Tích hợp IDE/chuỗi công cụ** | 🔥🔥 | Kết xuất công cụ giao thức ACP, tương thích tiêu đề tmux, quy ước thư mục mở rộng |

---

## 6. Điểm quan tâm của nhà phát triển

### 🔴 Điểm đau tần suất cao

| Điểm đau | Phạm vi ảnh hưởng | Issue đại diện |
|------|--------|-----------|
| **"Nâng cấp đi thụt lùi" vòng lặp** | Tất cả người dùng | #24294 — Phiên bản mới hiệu suất tệ hơn phiên bản cũ, buộc phải ghim phiên bản |
| **Trải nghiệm công dân hạng hai của người dùng trả phí** | Pro/Enterprise | #24222, #23973, #24208, #23984 — Lỗi 429, chặn chức năng, lỗi nhận dạng cấp độ |
| **Khoảng trống giao tiếp chính thức** | Bộ khuếch đại cảm xúc | #24184, #24208 — Người dùng thẳng thắn nói "không thèm trả lời 'k'" |
| **Hệ thống xác thực mong manh** | Người dùng mới/kịch bản đăng nhập lại | #19936 — Xác minh thành công ≠ xác minh thành công, lỗi máy trạng thái |

### 🟡 Tín hiệu nợ kỹ thuật

- **An toàn kiểu**：#19708 theo dõi làm sạch `no-unsafe-type-assertion` với 18 bình luận, phản ánh nợ kỹ thuật từ việc lặp lại nhanh chóng ban đầu
- **Cơ sở hạ tầng kiểm thử**：#24353 thúc đẩy đánh giá hành vi cấp component (bao phủ 76 bài kiểm thử cho 6 mô hình), kỹ thuật chất lượng dần được tăng cường
- **Tự động hóa CI**：#26666 tích hợp logic phân cấp khối lượng công việc vào quy trình, giảm gánh nặng phân loại thủ công

### 💡 Cơ hội tiềm năng

- **Chế độ Tự động duy nhất** (#26714) có thể giảm bớt nỗi lo chọn lựa của người dùng, nhưng cần đảm bảo tính minh bạch của định tuyến
- **Kiến trúc ủy thác Bot** (#26717) tạo nền tảng cho việc triển khai doanh nghiệp không tin cậy, có thể trở thành điểm bán hàng khác biệt

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# Nhật ký cộng đồng GitHub Copilot CLI | 2026-05-09

---

## 1. Tóm tắt hôm nay

Copilot CLI hôm nay đã phát hành dày đặc hai phiên bản **v1.0.44 và v1.0.44-3**, tập trung vào tối ưu hóa việc gọi lệnh gạch chéo linh hoạt, hiệu suất chuyển đổi tài khoản, và mở rộng khả năng bỏ qua LLM của hooks `userPromptSubmitted`. Cộng đồng đồng thời bùng nổ **33 Issue được cập nhật**, trong đó các lỗi như mất kết nối máy chủ MCP, hỏng trạng thái đồng thời proxy con, treo máy im lặng ở chế độ không tương tác đã thu hút sự chú ý cao, các vấn đề về cấu hình BYOK/Azure và hiển thị đầu cuối tiếp tục lan rộng.

---

## 2. Phát hành phiên bản

### v1.0.44 / v1.0.44-3 (2026-05-08)

| Phiên bản | Thay đổi cốt lõi |
|:---|:---|
| **v1.0.44** | • Hoàn thành đường dẫn `/add-dir` không còn nhấp nháy hoặc bị chặn bởi bộ chọn `@`/`#`<br>• Lệnh gạch chéo hỗ trợ **chèn giữa nhập liệu**, một tin nhắn có thể **gọi nhiều skill**<br>• Hooks `userPromptSubmitted` có thể trực tiếp xử lý yêu cầu, **bỏ qua LLM để trả về phản hồi** |
| **v1.0.44-3** | • Tăng cường khả năng bỏ qua LLM của hooks, rõ ràng không cần khởi tạo cuộc gọi model<br>• **Người dùng đa tài khoản** lệnh `/user list` và `/user switch` hiệu suất cải thiện |

> 🔗 Trang phát hành: https://github.com/github/copilot-cli/releases

---

## 3. Tin tức cộng đồng Issues nóng

### 🔴 Lỗi ưu tiên cao

| # | Issue | Tầm quan trọng | Phản hồi cộng đồng |
|:---|:---|:---|:---|
| **#2630** | [Agent tùy chỉnh `mcp-servers` không kết nối ở chế độ proxy con/`--prompt`](https://github.com/github/copilot-cli/issues/2630) | **Lỗi kiến trúc**: Chuỗi công cụ MCP tùy chỉnh hoàn toàn thất bại ở chế độ gọi proxy con và xử lý hàng loạt, làm suy yếu nghiêm trọng khả năng sắp xếp agent cấp doanh nghiệp | 6 bình luận, chưa giải quyết trong 28 ngày, ảnh hưởng đến thiết kế luồng công việc tự động hóa |
| **#2543** | [Sự kiện proxy con đồng thời làm hỏng trạng thái phiên, gây ra lỗi không khớp `tool_use`/`tool_result` vĩnh viễn](https://github.com/github/copilot-cli/issues/2543) | **Khủng hoảng ổn định**: Trạng thái phiên bị hỏng không thể đảo ngược trong kịch bản đồng thời, phải khởi động lại CLI, cản trở đa nhiệm song song | 4 bình luận, 2 👍, năng suất người dùng doanh nghiệp bị ảnh hưởng |
| **#3189** | [`copilot -p` chế độ không tương tác treo im lặng trên macOS (v1.0.44-1)](https://github.com/github/copilot