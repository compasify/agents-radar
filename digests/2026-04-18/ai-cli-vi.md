# Cộng đồng công cụ AI CLI Nhật ký cập nhật 2026-04-18

> Thời gian tạo: 2026-04-18 00:13 UTC | Công cụ được bao phủ: 8

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

# Báo cáo phân tích so sánh ngang hệ sinh thái công cụ AI CLI | 2026-04-18

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái công cụ AI CLI hiện tại đang có xu hướng **"phân cực ba cực, đào sâu theo chiều dọc"**: Anthropic Claude Code và OpenAI Codex chiếm lĩnh thị trường doanh nghiệp nhờ lợi thế đi đầu, nhưng cả hai đều đang vướng vào **khủng hoảng niềm tin về tính minh bạch phí** (#38335 642 bình luận, #14593 550 bình luận); Google Gemini CLI và Moonshot Kimi CLI tạo ra sự khác biệt bằng cách **mở rộng hệ sinh thái mô hình** (Gemma 4, K2.6) và **khả năng suy luận cục bộ**; các giải pháp thay thế mã nguồn mở (OpenCode, Pi, Qwen Code) tập trung vào **khả năng lập trình, khả năng tương thích đa đám mây và khả năng kiểm soát chi phí**, thu hút người dùng kỹ thuật nhạy cảm với việc bị khóa bởi nhà cung cấp. Ngành công nghiệp đang chuyển từ "cuộc đua tính năng" sang cuộc cạnh tranh về sự trưởng thành của **"khả năng kiểm soát, khả năng quan sát, khả năng dự đoán chi phí"**.

---

## 2. So sánh mức độ hoạt động của từng công cụ

| Công cụ | Bản phát hành hôm nay | Hoạt động Issues | Hoạt động PR | Đặc điểm cốt lõi |
|:---|:---|:---|:---|:---|
| **Claude Code** | v2.1.113（Kiến trúc nhị phân gốc, danh sách đen sandbox） | 8 Issues nổi bật, #38335 Tranh cãi về phí 642 bình luận, #45596 Buddy ngừng hoạt động 840👍 | 4 PR (mức độ hoạt động thấp, chủ yếu là lặp lại nội bộ) | Cộng đồng thúc đẩy bởi tranh cãi, khủng hoảng niềm tin chưa được giải quyết |
| **OpenAI Codex** | rust-v0.122.0-alpha.6~.9（4 alpha） | 10 Issues nổi bật, #14593 Tiêu thụ Token 550 bình luận, #10450 Phát triển từ xa 565👍 | **14 PR**, Loạt 4 PR cho phiên bản khóa thiết bị v2 | **Đầu tư kỹ thuật cao nhất**, tái cấu trúc Rust + nâng cấp kiến trúc bảo mật |
| **Gemini CLI** | v0.38.2（Bản vá sửa lỗi thượng nguồn） | 10 Issues nổi bật, #25323 Tải RipGrep 7 bình luận | 10 PR, #25604 Hỗ trợ Gemma 4, #25498 Lệnh mô hình cục bộ | Mở rộng hệ sinh thái mô hình tích cực, cột mốc quốc tế hóa |
| **GitHub Copilot CLI** | v1.0.32 / .32-1 / .32-0（Tự động chọn mô hình） | 10 Issues nổi bật, #2591 Thảm họa phí 27 bình luận, #1703 Đồng bộ mô hình 33👍 | **Chỉ 1 PR** (Cấu hình Dev Container) | Do chính thức dẫn dắt, ngưỡng đóng góp cộng đồng cao |
| **Kimi CLI** | v1.36.0（max_steps 100→500） | 10 Issues nổi bật, K2.6 tập trung vào suy nghĩ quá nhiều | 11 PR (7 đã hợp nhất/4 đang tiến hành), Sửa lỗi song song Opus 4.7 | Thúc đẩy bởi tranh cãi về hành vi mô hình, sự kiện tuân thủ quy trình |
| **OpenCode** | v1.4.8 / .9 / .10（Ba lần sửa lỗi ổn định） | 10 Issues nổi bật, #23110 Bedrock quay trở lại, #23200 Lỗi dán | 10 PR, **6 PR trong một ngày** của kitlangton Di chuyển Effect Schema | Tái cấu trúc kiến trúc mạnh mẽ, áp lực về ổn định |
| **Pi** | v0.67.68（Bedrock Bearer Token） | 10 Issues nổi bật, Vertex AI ra mắt 8 bình luận | **18 PR đã hợp nhất**, 30+ Issues đã đóng | **Thông lượng xử lý cao nhất**, tập trung vào đám mây gốc doanh nghiệp |
| **Qwen Code** | v0.15.0-preview.0（ACP Hooks） | 10 Issues nổi bật, #3203 Chính sách hạn ngạch miễn phí **93 bình luận** | 10 PR, Di chuyển hệ thống xác thực là cốt lõi | Cộng đồng bị rung chuyển bởi chính sách, tập trung vào lo lắng sinh tồn |

> **Chỉ số chính**: Pi (18 PR/30+ Issues đã đóng) > OpenAI Codex (14 PR) > Kimi/Gemini/OpenCode/Qwen (cấp 10 PR) > Claude Code (4 PR) > Copilot CLI (1 PR)

---

## 3. Hướng chức năng được quan tâm chung

| Hướng chung | Công cụ liên quan | Yêu cầu cụ thể | Mức độ nghiêm trọng |
|:---|:---|:---|:---|
| **Tính minh bạch phí và kiểm soát chi phí** | Claude Code, OpenAI Codex, GitHub Copilot CLI, Qwen Code | Chi tiết từng yêu cầu, cảnh báo tiêu thụ, tái tạo cơ sở tiêu chuẩn giữa các phiên bản, ổn định chính sách hạn ngạch miễn phí | 🔴 **P0** |
| **Tinh chỉnh chính sách sandbox/bảo mật** | Claude Code, OpenAI Codex, Gemini CLI | Giảm bớt phê duyệt phiền toái (#14936), xung đột truy cập GPU/MLX (#17644), bộ nhớ cache quyền liên tục (#24916), chiến lược kết hợp danh sách trắng và danh sách đen | 🟡 P1 |
| **Chất lượng tích hợp IDE và tính nhất quán đa nền tảng** | OpenAI Codilot, OpenCode, Kimi CLI, Gemini CLI | Phát triển từ xa VS Code (#10450), bàn phím số đầu cuối (#16100), đường dẫn WSL (#13762), cắt xén bản dán Windows (#5017) | 🟡 P1 |
| **Khả năng kiểm soát và quan sát của Agent** | OpenCode, Kimi CLI, Pi, Qwen Code | Hủy bỏ xếp hàng (#4821), hiển thị luồng suy luận (#1923), báo cáo trạng thái tác nhân phụ thực tế (#22323), kiểm soát thứ tự thực thi công cụ | 🟡 P1 |
| **Căn chỉnh nhanh khả năng mô hình và lựa chọn phiên bản** | Claude Code, Pi, Kimi CLI, OpenCode | Khả năng tương thích định dạng suy nghĩ Opus 4.7, kênh dự phòng K2.5, cơ chế khóa mô hình, chế độ tự động có thể tắt | 🟢 P2 |
| **Xác thực đám mây gốc doanh nghiệp và tuân thủ** | Pi, OpenCode, Claude Code, OpenAI Codex | Hỗ trợ Bedrock/Vertex AI/GovCloud, khóa thiết bị v2 (#18428-18431), Bearer Token, kiểm toán ID phiên tùy chỉnh | 🟢 P2 |

---

## 4. Phân tích định vị khác biệt

| Công cụ | Trọng tâm chức năng cốt lõi | Chân dung người dùng mục tiêu | Đặc điểm lộ trình kỹ thuật |
|:---|:---|:---|:---|
| **Claude Code** | Nhóm Agent Doanh nghiệp, Trải nghiệm tương tác TUI, Chính sách mạng sandbox | Nhóm phát triển doanh nghiệp vừa và lớn, người dùng nhạy cảm với bảo mật và tuân thủ | **Chuyển từ gói JS sang nhị phân gốc**, lặp lại nội bộ mã nguồn đóng, mức độ hoạt động của cộng đồng thấp |
| **OpenAI Codex** | Ngăn xếp cốt lõi Rust, Kiến trúc bảo mật khóa thiết bị, Hệ sinh thái MCP/Skill | Nhà phát triển doanh nghiệp, người dùng cần bảo mật và tuân thủ cao | **Tái cấu trúc hoàn toàn bằng Rust**, phát hành alpha liên tục, kiến trúc bảo mật nâng cấp từ bản vá lên thiết kế hệ thống |
| **Gemini CLI** | Hệ sinh thái mô hình cục bộ (Gemma), Quốc tế hóa đa ngôn ngữ, Định tuyến doanh nghiệp Vertex AI | Người dùng hệ sinh thái Google Cloud, nhà phát triển đa ngôn ngữ, kịch bản AI biên | Hai chiều: Mô hình dưới dạng dịch vụ (MaaS) + Suy luận cục bộ, dẫn đầu quốc tế hóa RTL/BiDi |
| **GitHub Copilot CLI** | Tích hợp sâu IDE (VS Code), Tự động chọn mô hình, Cảnh báo sử dụng | Người dùng nặng hệ sinh thái GitHub, nhà phát triển trả phí theo đăng ký | Lặp lại nội bộ đóng chính thức, ưu tiên sự tương đồng với chức năng VS Code, mức độ tham gia cộng đồng thấp nhất |
| **Kimi CLI** | Mở rộng ngữ cảnh dài (500 bước), Chế độ kép Web UI, Trải nghiệm nhà phát triển Trung Quốc | Nhà phát triển Trung Quốc, người dùng tự động hóa quy trình dài, nhạy cảm với chi phí API | Liên kết chặt chẽ với mô hình K2.6, **kiểm soát độ dài suy nghĩ là con dao hai lưỡi**, hệ thống xác thực biến động |
| **OpenCode** | Mở rộng có thể lập trình (Effect Schema), Chuyển đổi nhà cung cấp đa đám mây, Tùy chỉnh TUI | Người dùng ưa chuộng mã nguồn mở, nhóm kiến trúc đa đám mây, người dùng có nhu cầu tùy chỉnh cao | **Tái cấu trúc kiến trúc mạnh mẽ** (Di chuyển Schema, kiểu kết hợp V2), linh hoạt đổi lấy sự ổn định |
| **Pi** | Tương thích đám mây gốc đa năng (Bedrock/Vertex/Azure), Đầu vào đa phương thức, API Widget mở rộng | Người dùng doanh nghiệp đa đám mây, nhu cầu định tuyến đa mô hình, nhà phát triển mở rộng | **Thông lượng kỹ thuật cao nhất**, khả năng lập trình cấp SDK, hệ sinh thái gói npm trưởng thành |
| **Qwen Code** | Hệ sinh thái giao thức ACP, Thương mại hóa Coding Plan, Trải nghiệm chế độ nhỏ gọn | Người dùng hệ sinh thái Alibaba Cloud, doanh nghiệp nhỏ và vừa tại Trung Quốc, kịch bản giáo dục/POC | **Tăng tốc thương mại hóa và căng thẳng niềm tin cộng đồng lớn nhất**, việc loại bỏ OAuth buộc phải di chuyển |

---

## 5. Sự phổ biến của cộng đồng và mức độ trưởng thành

### Phân tầng mức độ hoạt động của cộng đồng

| Cấp độ | Công cụ | Bằng chứng | Phán đoán mức độ trưởng thành |
|:---|:---|:---|:---|
| **🔥 Hoạt động cao + Sản lượng cao** | **Pi** | 18 PR/ngày, 30+ Issues đã đóng, giao hàng tính năng đa đám mây liên tục | Giai đoạn trưởng thành nhanh: Năng lực kỹ thuật mạnh, nhưng cần đề phòng sự phân mảnh của hệ sinh thái mở rộng |
| **🔥 Hoạt động cao + Tranh cãi cao** | **OpenAI Codex** | 14 PR/ngày, Issues 550 bình luận, đầu tư lớn vào khóa thiết bị | Giai đoạn đau đớn khi tái cấu trúc: Di chuyển Rust + nâng cấp bảo mật, áp lực ổn định ngắn hạn |
| **🟡 Hoạt động trung bình + Chuyển đổi kiến trúc** | **OpenCode, Gemini CLI** | 10 PR/ngày, Di chuyển Effect Schema / Mở rộng Gemma 4 | Giai đoạn chuyển đổi kiến trúc: Dọn dẹp nợ kỹ thuật và mở rộng tính năng song song |
| **🟡 Hoạt động trung bình + Biến động chính sách** | **Qwen Code, Kimi CLI** | Issues 93 bình luận về chính sách, tranh cãi về hành vi K2.6 | Giai đoạn xây dựng lại niềm tin: Quyết định thương mại hóa ảnh hưởng đến kỳ vọng của cộng đồng |
| **🟢 Hoạt động thấp + Chính thức dẫn dắt** | **Claude Code, Copilot CLI** | 4 PR/ngày, 1 PR/ngày | Giai đoạn lặp lại đóng: Chất lượng tính năng phụ thuộc vào nhịp độ chính thức, đổi mới cộng đồng bị hạn chế |

### Tín hiệu quan trọng

- **Lành mạnh nhất**: Pi (sản lượng cao, ít tranh cãi) → Phù hợp cho lựa chọn công nghệ doanh nghiệp
- **Biến động nhất**: Qwen Code (thay đổi chính sách đột ngột) + Claude Code (khủng hoảng niềm tin về phí) → Chờ hoặc khóa phiên bản
- **Tiềm năng nhất**: OpenAI Codex (có thể giải phóng lợi ích hiệu suất sau khi tái cấu trúc Rust xong)

---

## 6. Tín hiệu xu hướng đáng chú ý

| Tín hiệu xu hướng | Bằng chứng nguồn | Giá trị tham khảo cho nhà phát triển |
|:---|:---|:---|
| **"Khả năng kiểm soát" thay thế "thông minh hóa" trở thành yêu cầu cốt lõi** | Sự phẫn nộ của cộng đồng về Kimi K2.6 "suy nghĩ quá nhiều" (#1874/#1926), Claude Buddy ngừng hoạt động 840👍, OpenCode hủy bỏ xếp hàng 34👍 | Ưu tiên đánh giá **cơ chế ràng buộc hành vi mô hình** (giới hạn nhiệt độ, cấp độ nỗ lực suy nghĩ, giới hạn bước) khi lựa chọn, thay vì chỉ nhìn vào độ dài ngữ cảnh |
| **Khả năng quan sát phí trở thành nhu cầu cơ sở hạ tầng thiết yếu** | Ba "hố đen phí" #38335/#14593/#2591, UI nhắc nhở sử dụng Codex, cảnh báo sử dụng Copilot | Yêu cầu nhà cung cấp cung cấp **API chi tiết token từng yêu cầu**, xây dựng bảng điều khiển giám sát sử dụng của riêng bạn, tránh khóa các công cụ không có khả năng kiểm toán |
| **Kiến trúc bảo mật nâng cấp từ bản vá tính năng lên thiết kế giao thức** | Codex khóa thiết bị v2 (loạt 4 PR), Pi Bedrock Bearer Token, danh sách đen sandbox Claude | Người dùng doanh nghiệp nên yêu cầu **lộ trình kiến trúc không tin cậy**, chú ý đến danh tính liên kết thiết bị, khả năng truy xuất nguồn gốc kiểm toán phiên |
| **Suy luận cục bộ và định tuyến đa đám mây trở thành chiến lược chống khóa** | Hỗ trợ cục bộ Gemma 4 của Gemini, Chuyển đổi nhà cung cấp đa đám mây của Pi, Kế hoạch mã hóa Qwen thay thế OAuth | Thiết kế kiến trúc dự phòng **lớp trừu tượng nhà cung cấp mô hình**, tránh phụ thuộc điểm duy nhất; đánh giá chi phí triển khai biên |
| **Quốc tế hóa và khả năng truy cập từ yếu tố bổ sung trở thành ngưỡng gia nhập** | Hỗ trợ RTL/BiDi của Gemini, Trình đọc màn hình OpenCode, Nhu cầu nguồn phản chiếu Kimi tại Trung Quốc | Nhóm xuất ngoại/đa quốc gia cần xác minh **xử lý Unicode, hiển thị BiDi, khả năng truy cập mạng khu vực** của công cụ |
| **Rủi ro phân mảnh giao thức MCP/ACP gia tăng** | Qwen ACP Hooks, Widget mở rộng OpenCode, Di chuyển trình thực thi MCP Codex | Chú ý **khóa phiên bản giao thức** khi tích hợp chuỗi công cụ, ưu tiên các cơ chế mở rộng hỗ trợ LSP/JSON-RPC tiêu chuẩn |

---

> **Khuyến nghị quyết định**: Tại thời điểm này, **chọn Pi nếu theo đuổi sự ổn định, chọn Codex nếu đặt cược vào lợi ích hiệu suất Rust (chờ đến khi kết thúc alpha), tránh khủng hoảng phí bằng cách khóa các phiên bản Claude Code trước v2.1.97 hoặc chuyển sang chế độ cục bộ của Gemini CLI, nhà phát triển Trung Quốc khẩn cấp đánh giá các giải pháp thay thế Qwen Code.**

---

## Báo cáo chi tiết từng công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Skills Nhật ký cập nhật cộng đồng | 2026-04-18

---

## 1. Tổng quan nhanh

Hôm nay, Anthropic đã phát hành **v2.1.113**, chuyển đổi kiến trúc cơ sở CLI từ gói JavaScript sang tệp nhị phân gốc, đồng thời bổ sung khả năng kiểm soát chi tiết danh sách đen mạng sandbox. Cộng đồng tiếp tục tập trung vào hai tranh cãi lớn là **tiêu thụ bất thường của gói Claude Max** và **Buddy ngừng hoạt động**, với các Issues liên quan tích lũy hơn 830 bình luận.

---

## Phát hành phiên bản

### [v2.1.113](https://github.com/anthropics/claude-code/releases/tag/v2.1.113)

| Mục cập nhật | Mô tả |
|--------|------|
| **Kiến trúc nhị phân gốc** | CLI được chuyển sang khởi chạy tệp nhị phân gốc Claude Code tùy thuộc vào nền tảng, thay thế phương pháp gói JavaScript trước đây, dự kiến tối ưu hóa đáng kể về hiệu suất khởi động và mức tiêu thụ bộ nhớ |
| **Danh sách đen mạng Sandbox** | Thêm cài đặt `sandbox.network.deniedDomains`, cho phép chặn chính xác các tên miền cụ thể trong phạm vi ký tự đại diện của `allowedDomains`, giải quyết nhu cầu "cho phép sau đó hạn chế" của chính sách bảo mật doanh nghiệp |

---

## Các Issues Nổi bật trong Cộng đồng

### 🔴 Tranh cãi về đăng ký và phí

| # | Tiêu đề | Trạng thái | Bình luận | 👍 | Mâu thuẫn cốt lõi |
|---|------|------|------|-----|---------|
| [#38335](https://github.com/anthropics/claude-code/issues/38335) | Số lượng phiên của Claude Max tiêu thụ bất thường nhanh chóng kể từ ngày 23/3 | OPEN | 642 | 425 | **Ưu tiên cao nhất**: Nhiều người dùng báo cáo số lượng phiên Max tiêu thụ nhanh gấp đôi trong các tình huống sử dụng CLI, Anthropic chưa đưa ra giải thích nguyên nhân gốc, cộng đồng yêu cầu minh bạch hóa logic tính phí |
| [#45335](https://github.com/anthropics/claude-code/issues/45335) | Đăng ký quà tặng Max 5x tự động hủy và quay lại phiên bản miễn phí | OPEN | 33 | 13 | Mã quà tặng bị hệ thống thu hồi khoảng một tuần sau khi đổi, liên quan đến lỗi đồng bộ trạng thái đăng ký |

### 🟠 Yêu cầu khôi phục tính năng đã ngừng hoạt động

| # | Tiêu đề | Trạng thái | Bình luận | 👍 | Phản ứng của cộng đồng |
|---|------|------|------|-----|---------|
| [#45596](https://github.com/anthropics/claude-code/issues/45596) | Yêu cầu tập thể: Khôi phục tính năng Buddy | OPEN | 189 | **840** | **Issue được yêu thích nhất mọi thời đại**: Việc âm thầm xóa `/buddy` trong v2.1.97 đã gây phẫn nộ, người dùng mô tả "thanh trạng thái trống trơn", yêu cầu giải thích quyết định ngừng hoạt động và xem xét các giải pháp thay thế phiên bản cộng đồng |

### 🟡 Khả năng tương thích mô hình và nền tảng

| # | Tiêu đề | Trạng thái | Bình luận | 👍 | Điểm kỹ thuật |
|---|------|------|------|-----|---------|
| [#49238](https://github.com/anthropics/claude-code/issues/49238) | Opus 4.7 không tương thích với Bedrock | **CLOSED** | 75 | 97 | Kênh AWS Bedrock không thể gọi Opus 4.7 mới nhất, đã nhanh chóng khắc phục, phản ánh thách thức hệ thống trong việc đồng bộ mô hình mới với nhà cung cấp dịch vụ đám mây |
| [#49302](https://github.com/anthropics/claude-code/issues/49302) | Đọc bộ nhớ cache Opus 4.7 bị tính phí theo tốc độ token đầu vào | OPEN | 3 | 3 | Tiêu thụ sai `cache_read_input_tokens` 5 giờ thay vì tốc độ bộ nhớ cache, chi phí nhạy cảm cho gói Max $100 |

### 🟢 Trải nghiệm TUI/Tương tác

| # | Tiêu đề | Trạng thái | Bình luận | 👍 | Phạm vi ảnh hưởng |
|---|------|------|------|-----|---------|
| [#49313](https://github.com/anthropics/claude-code/issues/49313) | Cmd+Delete xóa toàn bộ dòng nhắc thay vì dòng hiện tại | OPEN | 18 | 37 | Người dùng macOS/VS Code thao tác nhầm thường xuyên, trải nghiệm bị gián đoạn trong các tình huống chỉnh sửa nhiều dòng |
| [#50020](https://github.com/anthropics/claude-code/issues/50020) | Phím tắt tùy chỉnh âm thầm không hoạt động trong ngữ cảnh Chat (quay lại từ v2.1.105+) | OPEN | 7 | 0 | Nền tảng Linux, ảnh hưởng quy trình làm việc của người dùng nặng về bàn phím |
| [#5017](https://github.com/anthropics/claude-code/issues/5017) | Dán nhiều dòng văn bản trên Windows bị cắt xén | OPEN | 24 | 20 | **Chưa được sửa trong nhiều tháng**: Báo cáo từ tháng 8 năm 2025 vẫn chưa được giải quyết, chức năng cơ bản của người dùng Windows Terminal/PowerShell bị ảnh hưởng |

### 🔵 Chức năng doanh nghiệp/nhóm

| # | Tiêu đề | Trạng thái | Bình luận | 👍 | Kịch bản |
|---|------|------|------|-----|------|
| [#49865](https://github.com/anthropics/claude-code/issues/49865) | Trưởng nhóm gặp sự cố: `getAppState is not a function` | **CLOSED** | 15 | 7 | Quy trình gặp sự cố khi thành viên Agent Teams yêu cầu quyền công cụ, đã được sửa chữa |
| [#26479](https://github.com/anthropics/claude-code/issues/26479) | Agent Teams bỏ qua bypassPermissions và không kế thừa cài đặt cục bộ | OPEN | 8 | 13 | Cấu hình quyền trong kịch bản nhóm không thể hạ cấp, chặn kịch bản CI/tự động hóa |

### 🟣 Mạng và Sandbox

| # | Tiêu đề | Trạng thái | Bình luận | 👍 | Liên quan |
|---|------|------|------|-----|--------|
| [#30112](https://github.com/anthropics/claude-code/issues/30112) | Chặn 403 danh sách trắng cổng ra mạng Cowork | OPEN | 40 | 38 | Bổ sung cho `deniedDomains` trong v2.1.113 hôm nay - người dùng cần chiến lược kết hợp "danh sách trắng + danh sách đen" có hiệu lực |

---

## Tiến độ PR Quan trọng

| # | Tiêu đề | Trạng thái | Tác giả | Giá trị |
|---|------|------|------|------|
| [#39148](https://github.com/anthropics/claude-code/pull/39148) | Plugin `preserve-session`: Giữ lịch sử phiên không phụ thuộc vào đường dẫn | OPEN | wonbywondev | **Đóng góp cộng đồng giá trị cao**: Giải quyết vấn đề mất phiên sau khi đổi tên/di chuyển/sao chép dự án thông qua ánh xạ UUID, video trình diễn đã đính kèm |
| [#49825](https://github.com/anthropics/claude-code/pull/49825) | Sửa lỗi loại bỏ trùng lặp tập lệnh khởi tạo tường lửa Devcontainer | OPEN | christoph-schauppel | Sửa lỗi khởi động container do trùng lặp IP, tăng cường tính mạnh mẽ bằng `sort -u` |
| [#49767](https://github.com/anthropics/claude-code/pull/49767) | Tài liệu và bước xác minh plugin thị trường Warp | OPEN | havn0r | Hoàn thiện hệ sinh thái tích hợp Warp, bao gồm mô tả phụ thuộc jq và quy trình xác minh đầu cuối |
| [#1](https://github.com/anthropics/claude-code/pull/1) | Tạo SECURITY.md | **CLOSED** | bcherny | Tệp quản trị bảo mật cơ bản, đã đóng sau hơn một năm |

> Lưu ý: Chỉ có 4 PR có cập nhật trong vòng 24 giờ, mức độ hoạt động của đóng góp cộng đồng tương đối thấp, phát triển cốt lõi chủ yếu là lặp lại nội bộ.

---

## Xu hướng nhu cầu chức năng

Dựa trên phân tích phân nhóm 50 Issues đang hoạt động:

```
┌─────────────────────────────────────────┐
│  1. Minh bạch phí và quản lý đăng ký    ████████░░  18%  │
│  2. Trải nghiệm tương tác TUI/Terminal   ██████░░░░  15%  │
│  3. Chức năng doanh nghiệp Agent Teams   █████░░░░░  12%  │
│  4. Nhận thức thời gian và chèn ngữ cảnh   ████░░░░░░  10%  │
│  5. Tích hợp IDE (VS Code)            ████░░░░░░   9%  │
│  6. Tinh chỉnh chính sách mạng/sandbox    ███░░░░░░░   8%  │
│  7. Khả năng mở rộng hệ thống Skill       ███░░░░░░░   8%  │
│  8. Độ ổn định trên máy tính để bàn        ███░░░░░░░   7%  │
│  9. Tính nhất quán đa nền tảng (Win/Lin) ██░░░░░░░░   6%  │
│ 10. Quản lý phiên và lưu trữ liên tục    ██░░░░░░░░   5%  │
└─────────────────────────────────────────┘
```

**Xu hướng mới nổi**: Nhận thức thời gian trở thành chủ đề nổi bật trong tháng 4 - [#32913](https://github.com/anthropics/claude-code/issues/32913) và [#49084](https://github.com/anthropics/claude-code/issues/49084) lần lượt thúc đẩy Claude có khả năng suy luận thời gian trong phiên từ góc độ "chèn ngày vào lời nhắc" và "hiển thị dữ liệu thời gian có cấu trúc".

---

## Điểm tập trung của nhà phát triển

| Mức độ nghiêm trọng | Biểu hiện cụ thể | Issue đại diện |
|---------|---------|-----------|
| **Khủng hoảng niềm tin P0** | Hộp đen phí đăng ký Max, ngừng hoạt động âm thầm tính năng | #38335, #45596 |
| **Gián đoạn quy trình làm việc P1** | Phím tắt quay lại không hoạt động, cắt xén bản dán, không thể bỏ qua quyền | #50020, #5017, #43406 |
| **Ma sát hệ sinh thái P2** | Phí token công cụ MCP không minh bạch, tải ngữ cảnh cồng kềnh | #50061, #44536 |
| **Sự khác biệt nền tảng P3** | Trải nghiệm công dân hạng hai trên Windows, thiếu tính năng trên máy tính để bàn | #48407, #48560 |

**Từ khóa được yêu cầu cao**: Kế thừa `bypassPermissions`, lưu trữ UUID phiên liên tục, chi tiết token `/context`, khả năng lập trình hệ thống Hook, tính nhất quán giữa thẻ chọn mô hình và gọi thực tế.

---

*Nhật ký hàng ngày dựa trên dữ liệu công khai trên GitHub, không đại diện cho lập trường chính thức của Anthropic.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Nhật ký cập nhật cộng đồng | 2026-04-18

## Tổng quan nhanh hôm nay

Cộng đồng Codex hôm nay vẫn duy trì hoạt động cao, **tiêu thụ Token bất thường** (#14593) vẫn là điểm khó khăn lớn nhất, 550 bình luận cho thấy sự lo lắng của người dùng về việc chi phí mất kiểm soát chưa giảm; đồng thời nhóm đã liên tục phát hành 4 phiên bản alpha Rust và đầu tư mạnh vào **kiến trúc khóa thiết bị bảo mật** (#18428-18431 loạt PR), ám chỉ rằng bảo mật và tuân thủ cấp doanh nghiệp sẽ là trọng tâm tiếp theo.

---

## Phát hành phiên bản

| Phiên bản | Mô tả |
|:---|:---|
| `rust-v0.122.0-alpha.6` ~ `alpha.9` | 4 lần lặp lại alpha liên tiếp, tập trung vào sửa lỗi ổn định cốt lõi Rust, không có thay đổi tính năng lớn. Tốc độ tăng trưởng nhanh chóng của số phiên bản cho thấy nhịp độ phát hành chặt chẽ, khuyến nghị người dùng sản xuất tạm thời quan sát. |

---

## Các Issues Nổi bật trong Cộng đồng

| # | Tiêu đề | Trạng thái | Bình luận/👍 | Phân tích chính |
|:---|:---|:---|:---|:---|
| [#14593](https://github.com/openai/codex/issues/14593) | **Tiêu thụ Token quá nhanh** | 🔴 OPEN | 550 / 225 | **Điểm khó khăn hàng đầu của cộng đồng**, người dùng gói Business báo cáo có rò rỉ phí nghiêm trọng ở phần mở rộng IDE. Tỷ lệ "thảo luận cao, chấp nhận thấp" (225 👍 so với 550 bình luận) cho thấy vấn đề phức tạp và phản hồi chính thức chưa đạt kỳ vọng. |
| [#10450](https://github.com/openai/codex/issues/10450) | Ứng dụng máy tính để bàn Codex hỗ trợ phát triển từ xa | 🔴 OPEN | 142 / 565 | **Nhu cầu được yêu thích nhất** (565👍), người dùng mong muốn trải nghiệm giống VS Code Remote-SSH trên phiên bản máy tính để bàn. Vẫn bị treo kéo dài, có thể bị ảnh hưởng bởi ưu tiên tái cấu trúc kiến trúc. |
| [#18258](https://github.com/openai/codex/issues/18258) | Plugin "Computer Use" trên macOS không khả dụng | 🔴 OPEN | 18 / 24 | **Mới ra mắt hôm nay, ưu tiên cao**, người dùng đã xác định vấn đề đường dẫn bộ nhớ cache và cung cấp giải pháp tạm thời. Ảnh hưởng đến khả năng tự động hóa cốt lõi, việc sửa chữa là cấp bách. |
| [#18333](https://github.com/openai/codex/issues/18333) | Khởi động lại ngăn xếp MCP lặp lại gây áp lực bộ nhớ | 🔴 OPEN | 7 / 2 | **Vấn đề hiệu suất cấp kiến trúc**, mỗi phiên mới/tác nhân phụ đều khởi động đầy đủ quy trình MCP, lỗi thiết kế rõ ràng, ảnh hưởng đến việc sử dụng quy mô lớn. |
| [#14936](https://github.com/openai/codex/issues/14936) | gần như mọi lệnh bwrap đều hiện phê duyệt | 🔴 OPEN | 48 / 20 | Trải nghiệm sandbox Linux bị thụt lùi, cơ chế "phê duyệt liên tục" không hoạt động, làm chậm đáng kể hiệu quả quy trình làm việc CLI. |
| [#18264](https://github.com/openai/codex/issues/18264) | Độ trễ 8 giây khi hiển thị tin nhắn phiên mới trong ứng dụng máy tính để bàn | 🔴 OPEN | 11 / 12 | **Mới ra mắt hôm nay**, phiên bản mới nhất quay trở lại, ảnh hưởng trực tiếp đến trải nghiệm tương tác cốt lõi, trải nghiệm người dùng trả phí bị ảnh hưởng |
| [#17644](https://github.com/openai/codex/issues/17644) | Sandbox `danger-full-access` vẫn chặn GPU/MLX | 🔴 OPEN | 8 / 0 | Xung đột giữa chính sách sandbox và khối lượng công việc ML, ngay cả khi người dùng bỏ qua rõ ràng vẫn bị giới hạn bởi IOKit, ranh giới bảo mật-tính năng cần được xác định lại. |
| [#18345](https://github.com/openai/codex/issues/18345) | Mức tiêu thụ Token v0.121.0 tăng 60%+ so với v0.116.0 | 🟢 CLOSED | 5 / 1 | **Đã đóng nhưng cần cảnh giác**, người dùng thực hiện kiểm tra hồi quy định lượng chính xác, cho thấy rủi ro thay đổi chiến lược quản lý ngữ cảnh giữa các phiên bản. |
| [#17649](https://github.com/openai/codex/issues/17649) | Liên kết tệp mở rộng VS Code tất cả đều không hợp lệ | 🔴 OPEN | 12 / 9 | Quay trở lại trên nền tảng Windows, chức năng cơ bản của tích hợp IDE bị gián đoạn, ảnh hưởng đến trải nghiệm cốt lõi điều hướng mã. |
| [#13762](https://github.com/openai/codex/issues/13762) | Chế độ WSL sử dụng sai hệ thống tệp Windows | 🔴 OPEN | 12 / 13 | Lỗi kéo dài về xử lý đường dẫn đa nền tảng, thảm họa hiệu suất của /mnt/c so với xung đột cơ bản của hệ thống tệp gốc WSL. |

---

## Tiến độ PR Quan trọng

| # | Tiêu đề | Phân tích |
|:---|:---|:---|
| [#18419](https://github.com/openai/codex/pull/18419) | Bảo vệ runtime Linux còn thiếu `.git` ở lớp trên cùng | **Củng cố bảo mật**, ngăn chặn `git init` thoát ra khỏi đường dẫn được bảo vệ bên trong sandbox bubblewrap. Sửa chữa quan trọng do Bugcrowd tài trợ, quan trọng cho môi trường sản xuất. |
| [#18428](https://github.com/openai/codex/pull/18428) ~ [#18431](https://github.com/openai/codex/pull/18431) | **Thực hiện toàn bộ ngăn xếp giao thức khóa thiết bị v2** (loạt 4 PR) | Đầu tư kỹ thuật lớn nhất hôm nay: Định nghĩa giao thức → Trích xuất crate → Thực hiện máy chủ ứng dụng → Nhà cung cấp khóa phần cứng Secure Enclave của macOS. Hướng tới rõ ràng **danh tính liên kết thiết bị, kiến trúc không tin cậy, tuân thủ doanh nghiệp**. |
| [#18298](https://github.com/openai/codex/pull/18298) | Kiểm soát ngân sách siêu dữ liệu Skill và cảnh báo cắt tỉa | **Quản trị ngữ cảnh**, giới hạn tỷ lệ cửa sổ ngữ cảnh mà mô hình có thể nhìn thấy, cảnh báo không gây chết người khi vượt quá giới hạn. Phản hồi trực tiếp đến mối lo ngại của cộng đồng về tiêu thụ Token. |
| [#18212](https://github.com/openai/codex/pull/18212) | Tích hợp executor hỗ trợ MCP stdio | **Nâng cấp kiến trúc**, lớp truyền MCP chuyển từ quy trình cục bộ sang môi trường thực thi, chuẩn bị cho thực thi tác nhân từ xa/phân tán. Bước 5/6 của loạt PR. |
| [#18221](https://github.com/openai/codex/pull/18221) + [#18220](https://github.com/openai/codex/pull/18220) | UI nhắc nhở sử dụng cho chủ sở hữu không gian làm việc + API | **Trải nghiệm thanh toán B2B**, gửi lời nhắc mua thêm cho chủ sở hữu khi thành viên kích hoạt giới hạn. Tách ra từ #17956, hoàn thiện cơ sở hạ tầng thương mại hóa. |
| [#18254](https://github.com/openai/codex/pull/18254) | Crate ổ cắm Unix Domain không đồng bộ mới | **Tái cấu trúc giao tiếp cơ sở**, bộ trung gian stdio↔socket với Tokio, tạo nền tảng cho IPC cục bộ hiệu suất cao và giao thức từ xa trong tương lai. |
| [#18413](https://github.com/openai/codex/pull/18413) | Sửa định tuyến công cụ động không gian tên tự tạo | **Chuỗi công cụ Agent**, hoàn thành đường dẫn gọi sau khi khám phá công cụ động bị trì hoãn, vòng lặp khép kín khả năng tự động hóa phụ. |
| [#18197](https://github.com/openai/codex/pull/18197) | Tăng cường ngữ cảnh kích hoạt phê duyệt mạng Guardian | **Kiểm toán bảo mật**, hiển thị ngữ cảnh lệnh đầy đủ (cwd, quyền sandbox, trạng thái TTY, v.v.) cho hệ thống kiểm tra Guardian, đáp ứng nhu cầu truy xuất nguồn gốc tuân thủ doanh nghiệp. |
| [#18424](https://github.com/openai/codex/pull/18424) ~ [#18427](https://github.com/openai/codex/pull/18427) | Bật lint Clippy giữ await + tài liệu hóa | **Chất lượng mã**, buộc định dạng mô hình giữ khóa không đồng bộ, kết thúc tái cấu trúc loạt bolinfest, giảm rủi ro lỗi đồng thời. |
| [#17891](https://github.com/openai/codex/pull/17891) | Nhắc nhở di chuyển cấu hình bên ngoài khi TUI khởi động | **Trải nghiệm người dùng**, hỗ trợ di chuyển một cú nhấp chuột từ cấu hình tác nhân bên ngoài (bao gồm skills, AGENTS.md, plugin), giảm chi phí chuyển đổi hệ sinh thái. |

---

## Xu hướng nhu cầu chức năng

Dựa trên phân tích phân nhóm 50 Issues đang hoạt động:

| Hướng | Độ nóng | Biểu hiện điển hình |
|:---|:---|:---|
| **Kiểm soát chi phí/Hiệu quả Token** | 🔥🔥🔥🔥🔥 | #14593, #18345, #17313, v.v. tạo ra tiếng vang liên tục, người dùng bắt đầu tự thực hiện kiểm tra cơ sở giữa các phiên bản |
| **Chất lượng tích hợp IDE** | 🔥🔥🔥🔥 | Liên kết mở rộng VS Code không hợp lệ (#17649), Phát triển từ xa (#10450), Cầu nối hệ thống tệp (#13762) |
| **Tinh chỉnh chính sách Sandbox** | 🔥🔥🔥🔥 | Phiền toái phê duyệt (#14936), Xung đột truy cập GPU (#17644), Phê duyệt liên tục không hoạt động (#17668), Chính sách mạng không nhất quán (#12996) |
| **Độ ổn định ứng dụng máy tính để bàn** | 🔥🔥🔥 | Độ trễ khởi động (#18264), Tải plugin (#18258), Lỗi hiển thị UI (#18341), Sự cố cửa sổ thu nhỏ (#18311) |
| **Hiệu suất kiến trúc MCP/Agent** | 🔥🔥🔥 | Khởi động quy trình lặp lại (#18333), Gọi công cụ chậm/bị chặn (#16940), Rò rỉ khe cắm tác nhân phụ (#18335) |
| **Bảo mật/Tuân thủ doanh nghiệp** | 🔥🔥 | Khóa thiết bị (#18428-18431), Ngữ cảnh kiểm toán (#18197), Truy cập sandbox API GitHub (#12919) |

---

## Điểm tập trung của nhà phát triển

### 🔴 Các điểm khó khăn thường gặp

| Vấn đề | Phạm vi ảnh hưởng | Chiến lược đối phó của người dùng |
|:---|:---|:---|
| **Tính phí Token không thể dự đoán** | Mọi nền tảng, mọi cấp độ đăng ký | Khóa phiên bản cũ (v0.116.0), theo dõi thủ công mức sử dụng, yêu cầu nhà cung cấp cung cấp chi tiết từng yêu cầu |
| **"Bảo mật quá mức" của Sandbox làm chậm hiệu quả** | Người dùng nặng CLI trên Linux/macOS | `--dangerously-bypass-approvals-and-sandbox`, phê duyệt nhiều lần, bỏ qua phiên liên tục |
| **Trải nghiệm công dân hạng hai trên Windows** | Vấn đề đường dẫn hỗn hợp WSL + Windows không thể giải quyết, xung đột quyền ssh, tích tụ quy trình phụ | Sử dụng hỗn hợp WSL + đường dẫn Windows không thể giải quyết, xung đột quyền ssh, tích tụ quy trình phụ |

### 🟡 Nhu cầu mới nổi

- **Khả năng quan sát**: Yêu cầu hiển thị mức sử dụng cửa sổ ngữ cảnh theo thời gian thực, chi tiết tải skill, chỉ số vòng đời quy trình MCP
- **Phân lớp cấu hình**: Phân biệt mức độ ưu tiên và quy tắc phủ của cấu hình cấp người dùng/dự án/phiên/không gian làm việc (#18208 đã bắt đầu)
- **Tính nhất quán đa nền tảng**: Lộ trình parity tính năng cho phiên bản máy tính để bàn, CLI, phần mở rộng IDE

### 🟢 Tín hiệu tích cực

- Nhóm tăng cường đầu tư vào **ngăn xếp cốt lõi Rust** (4 alpha/ngày + nhiều PR cơ sở hạ tầng)
- **Kiến trúc bảo mật** đã nâng cấp từ "bản vá tính năng" lên "thiết kế hệ thống" (giao thức khóa thiết bị, kiểm toán Guardian, bảo vệ .git)
- **Văn hóa workaround cộng đồng trưởng thành**: Người dùng #18258 tự nguyện cung cấp giải pháp sửa bộ nhớ cache, chất lượng phản hồi được cải thiện

---

*Nhật ký hàng ngày dựa trên dữ liệu công khai trên github.com/openai/codex, chỉ để tham khảo cộng đồng kỹ thuật.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Nhật ký cập nhật cộng đồng | 2026-04-18

## Tổng quan nhanh hôm nay

Hôm nay Gemini CLI đã phát hành **bản vá v0.38.2**, sửa lỗi phiên bản trước đó. Cộng đồng phát triển sôi nổi, **hỗ trợ mô hình Gemma 4** trở thành tâm điểm - PR mới #25604 giới thiệu `gemma-4-31b-it` và `gemma-4-26b-a4b-it`, đồng thời lệnh cài đặt mô hình cục bộ `gemini gemma` (#25498) đang tiếp tục được đẩy mạnh. Về trải nghiệm cốt lõi, lỗi tải RipGrep thất bại gây khởi động chậm, lệnh shell bị treo, v.v. đã gây ra các cuộc thảo luận sôi nổi.

---

## Phát hành phiên bản

### Bản phát hành bản vá v0.38.2
- **Ghi chú phát hành**: Chuyển các bản sửa lỗi sang nhánh v0.38.1, giải quyết các vấn đề liên quan đến PR thượng nguồn #24974
- **Nội dung thay đổi**: Phiên bản vá nâng cấp cho release/v0.38.1-pr-24974
- **So sánh đầy đủ**: [v0.38.1...v0.38.2](https://github.com/google-gemini/gemini-cli/compare/v0.38.1...v0.38.2)
- **PR liên quan**: [ #25585](https://github.com/google-gemini/gemini-cli/pull/25585) | [PR Changelog #25593](https://github.com/google-gemini/gemini-cli/pull/25593)

---

## Các Issues Nổi bật trong Cộng đồng (Top 10)

| # | Issue | Vấn đề cốt lõi | Phản ứng của cộng đồng | Tầm quan trọng |
|---|-------|---------|---------|--------|
| [#25323](https://github.com/google-gemini/gemini-cli/issues/25323) | Tải RipGrep thất bại khiến khởi động chậm vĩnh viễn | Môi trường mạng bị hạn chế (ví dụ: không truy cập được GitHub), CLI chờ 2+ phút; đề xuất thất bại nhanh chóng và xem xét gói RipGrep | 🔥 **7 bình luận**, người bảo trì đánh dấu là tổng hợp quy trình làm việc | **Vấn đề trải nghiệm P0** - Ảnh hưởng trực tiếp đến lần sử dụng đầu tiên và kịch bản CI/CD |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Đánh giá đọc/tìm kiếm/ánh xạ tệp nhận biết AST | Khám phá đọc phương thức chính xác thông qua AST, giảm nhiễu token, nâng cao hiệu quả điều hướng mã | 5 bình luận, EPIC dài hạn | Tối ưu hóa cấp kiến trúc, liên quan đến giới hạn trên khả năng hiểu mã của Agent |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | Hỏi lại quyền nhiều lần cho cùng một tệp | Cài đặt "Cho phép tất cả các phiên trong tương lai" không có hiệu lực liên tục, cơ chế bộ nhớ cache quyền có lỗi | 3 bình luận, phản hồi cụ thể của người dùng | Lỗi cơ chế niềm tin, gây cản trở nghiêm trọng quy trình làm việc |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Lệnh Shell bị treo sau khi thực thi hiển thị "Chờ nhập" | Sau khi lệnh đơn giản hoàn thành, trạng thái vẫn hiển thị hoạt động, lỗi đồng bộ trạng thái giả thiết bị đầu cuối | 2 bình luận, 👍×2 | Vấn đề ổn định tương tác cốt lõi |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Tác nhân phụ báo cáo thành công sau khi hết số lượt | `codebase_investigator` đạt MAX_TURNS nhưng trả về `status: "success"`, che giấu sự gián đoạn | 2 bình luận, 👍×2, ưu tiên P1 | **Lỗi độ tin cậy** - Hướng dẫn sai quyết định của người dùng |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Tác nhân trình duyệt bỏ qua cấu hình ghi đè settings.json | Cấu hình toàn cục/dự án như `maxTurns` hoàn toàn bị bỏ qua, khởi tạo Registry Tác nhân và lớp thực thi cấu hình bị tách rời | 2 bình luận | Lỗi nhất quán hệ thống cấu hình |
| [#25216](https://github.com/google-gemini/gemini-cli/issues/25216) | Thư mục tạm thời Windows `A:\` mở thất bại | Lỗi `EISDIR`, xử lý realpath gốc ký tự ổ đĩa bất thường | 1 bình luận | Trường hợp cạnh của khả năng tương thích Windows |
| [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) | Tác nhân phụ thiếu nhận thức chế độ phê duyệt | Công cụ chặn động cơ chiến lược chặn các lệnh vi phạm, nhưng lệnh và định nghĩa công cụ của tác nhân phụ vẫn xung đột với các ràng buộc chế độ | 1 bình luận, 👍×1 | Vấn đề thiết kế kiến trúc điều phối nhiều tác nhân |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | Thực hiện định tuyến bộ nhớ: toàn cục vs dự án | Lưu trữ bộ nhớ cần phân biệt giữa sở thích cấp người dùng (`~/.gemini/`) và thông tin cụ thể của kho mã nguồn (`.gemini/`) | 1 bình luận, 👍×2 | Cơ sở hạ tầng quan trọng cho cá nhân hóa và quyền riêng tư |
| [#24915](https://github.com/google-gemini/gemini-cli/issues/24915) | Viền đen dày trên cùng/dưới cùng của thanh nhắc | Lỗi hiển thị, có thể là vấn đề tương thích thiết bị đầu cuối | 1 bình luận, đánh dấu có thể trùng lặp | Làm bóng trải nghiệm hình ảnh |

---

## Tiến độ PR Quan trọng (Top 10)

| # | PR | Tính năng/Sửa lỗi | Trạng thái | Giá trị cốt lõi |
|---|-----|----------|------|---------|
| [#25604](https://github.com/google-gemini/gemini-cli/pull/25604) | Hỗ trợ mô hình Gemma 4 mới | Tích hợp `gemma-4-31b-it` và `gemma-4-26b-a4b-it`, hỗ trợ khả năng "Suy nghĩ" | 🆕 **Mới tạo hôm nay** | **Mở rộng hệ sinh thái mô hình**, nâng cấp đáng kể khả năng suy luận cục bộ |
| [#25601](https://github.com/google-gemini/gemini-cli/pull/25601) | Tách cờ `memoryManager` thành `autoMemory` | Tách biệt `MemoryManagerAgent` với dịch vụ trích xuất skill nền, kiểm soát độc lập | Đang hoạt động tích cực | Tinh chỉnh cấu hình, tránh gói gọn tính năng |
| [#25498](https://github.com/google-gemini/gemini-cli/pull/25498) | Lệnh cài đặt mô hình cục bộ `gemini gemma` mới | Quản lý mô hình cục bộ dạng luồng + xem nhật ký `gemini gemma logs` | Ưu tiên P1 | **Giảm ngưỡng triển khai cục bộ** |
| [#25138](https://github.com/google-gemini/gemini-cli/pull/25138) | Sửa lỗi thư mục kế hoạch lồng nhau lặp lại và chiến lược đường dẫn tương đối | Phân tích đường dẫn tập trung, Tác nhân tuân thủ chính sách bảo mật tùy chỉnh | Lĩnh vực mở rộng | Nâng cao độ tin cậy của Chế độ Kế hoạch |
| [#25426](https://github.com/google-gemini/gemini-cli/pull/25426) | Khôi phục gói CI và tăng tốc thử nghiệm 16 lõi | Đường dẫn trung tâm sản phẩm CI, gói được tạo sẵn + cơ sở hạ tầng thử nghiệm hiện đại hóa | Cơ sở hạ tầng hiệu quả phát triển |
| [#25243](https://github.com/google-gemini/gemini-cli/pull/25243) | Hỗ trợ RTL/BiDi phổ quát + hiển thị ANSI an toàn | Hỗ trợ toàn diện tiếng Ả Rập/Hebrew/Ba Tư, v.v., giữ lại kiểu mã thoát | Cột mốc quốc tế hóa quan trọng |
| [#25461](https://github.com/google-gemini/gemini-cli/pull/25461) | Giới hạn luồng hiển thị văn bản Shell | Mỗi khối dữ liệu kích hoạt kết xuất lại React → giới hạn khoảng thời gian 1 giây, giải quyết tình trạng giật lag khi hiển thị hàng nghìn dòng | Tối ưu hóa hiệu suất, giải quyết #25459 |
| [#25362](https://github.com/google-gemini/gemini-cli/pull/25362) | Ghi đè cấu hình `vertexLocation` của Vertex AI | Giá trị mặc định `us-central1` gây lỗi 404 cho mô hình xem trước, hỗ trợ các khu vực như `global` | Sửa lỗi khả dụng Vertex AI |
| [#25513](https://github.com/google-gemini/gemini-cli/pull/25513) | Cấu hình định tuyến yêu cầu Vertex AI | Ánh xạ `billing.vertexAi.requestType` / `sharedRequestType` vào tiêu đề yêu cầu | Kiểm soát định tuyến cấp doanh nghiệp |
| [#21873](https://github.com/google-gemini/gemini-cli/pull/21873) | Sửa lỗi tác nhân phụ gọi công cụ bị treo + xung đột tên công cụ MCP | Ánh xạ động tên không đầy đủ trở lại tên đầy đủ, loại bỏ tập lệnh vỏ bọc hacky | Sửa lỗi cốt lõi ổn định tác nhân phụ |

---

## Xu hướng nhu cầu chức năng

Bốn hướng chính được trích xuất từ 50 Issues đang hoạt động:

| Xu hướng | Vấn đề đại diện | Cường độ nhu cầu cộng đồng |
|-----------|-----------|-----------|
| **Kiến trúc Agent sâu sắc hơn** | #22745 Nhận biết AST, #22819 Định tuyến bộ nhớ, #23582 Nhận thức chế độ phê duyệt, #22323 Tác nhân phụ hồi phục | ⭐⭐⭐⭐⭐ Ưu tiên cao nhất, tổng hợp quy trình làm việc dồn dập |
| **Tối ưu hóa hiệu suất và khởi động** | #25323 Tải RipGrep, #25166 Lệnh Shell bị treo, #25218 Hiển thị luồng bảng | ⭐⭐⭐⭐⭐ Ảnh hưởng trực tiếp đến trải nghiệm hàng ngày |
| **Mở rộng mô hình và nền tảng** | #25604 Gemma 4, #25498 Gemma cục bộ, #23823 Nâng cấp 3.1 flash lite, #25362/#25513 Khu vực Vertex AI | ⭐⭐⭐⭐☆ Đang phát triển nhanh chóng |
| **Khả năng truy cập và quốc tế hóa** | #25243 RTL/BiDi, #25218 Trình đọc màn hình, #24915 Viền UI | ⭐⭐⭐☆☆ Thiếu cơ sở hạ tầng |

---

## Điểm tập trung của nhà phát triển

### 🔴 Các điểm khó khăn thường gặp

1. **Độ tin cậy khi khởi động** - Lỗi tải RipGrep (#25323) đã trở thành rào cản "dặm đầu tiên" đối với người dùng môi trường doanh nghiệp/Windows, cộng đồng mạnh mẽ kêu gọi gói gọn hoặc giảm dần một cách duyên dáng

2. **Nhất quán đồng bộ trạng thái** - Trạng thái giả thiết bị đầu cuối của lệnh Shell (#25166), báo cáo thành công/thất bại của tác nhân phụ (#22323), bộ nhớ cache quyền (#24916) đều bộc lộ vấn đề hệ thống "trạng thái hiển thị không khớp với trạng thái thực tế"

3. **Phân mảnh hệ thống cấu hình** - Tác nhân trình duyệt bỏ qua settings.json (#22267), khu vực Vertex AI mã hóa cứng (#25362) cho thấy chuỗi truyền cấu hình có lỗ hổng

### 🟡 Nhu cầu mới nổi

- **Bình dân hóa mô hình cục bộ**: Lệnh `gemini gemma` (#25498) + hỗ trợ Gemma 4 (#25604) tạo thành một cặp, giảm sự phụ thuộc vào API đám mây
- **Tinh chỉnh hệ thống bộ nhớ**: Từ "công tắc thử nghiệm" đến "định tuyến phân lớp toàn cục/dự án" (#22819/#25601), cơ sở hạ tầng cá nhân hóa dần hình thành
- **Tăng cường tuân thủ doanh nghiệp**: Tiêu đề định tuyến Vertex AI (#25513), nhận thức chế độ phê duyệt (#23582) hướng tới các kịch bản B2B

### 📊 Phân tích dữ liệu

- **Tỷ lệ Issue dành riêng cho người bảo trì cao**: 70% của Top Issues bình luận được đánh dấu 🔒 maintainer only, cho thấy các quyết định kiến trúc cốt lõi vẫn tập trung cao độ
- **PR "Đang tìm kiếm sự giúp đỡ" hoạt động tích cực**: #25243, #25362, #25461, v.v. phụ thuộc vào đóng góp bên ngoài, là cửa sổ để nhà phát triển bên ngoài tham gia

---

*Nhật ký hàng ngày dựa trên dữ liệu công khai trên github.com/google-gemini/gemini-cli*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Nhật ký cập nhật cộng đồng | 2026-04-18

## 1. Tổng quan nhanh hôm nay

GitHub hôm nay đã phát hành liên tục Copilot CLI **v1.0.32** và hai bản vá của nó, điểm nổi bật cốt lõi bao gồm **tự động chọn mô hình** (`auto` mode), phục hồi đơn giản hóa tiền tố ID phiên, và cơ chế cảnh báo sử dụng. Về phía cộng đồng, **vấn đề phí mô hình và giới hạn tốc độ tiếp tục sôi sục**, lỗi nghiêm trọng #2591 về tiêu thụ 80-100 yêu cầu premium mỗi phiên đã gây ra mối quan tâm cao, đồng thời nhiều vấn đề tương thích liên quan đến thư mục cấu hình XDG vẫn chưa được giải quyết triệt để.

---

## 2. Phát hành phiên bản

### v1.0.32 / v1.0.32-1 / v1.0.32-0 (2026-04-17)

| Phiên bản | Loại | Thay đổi cốt lõi |
|:---|:---|:---|
| **v1.0.32** | Phiên bản chính thức | Tập hợp tính năng đầy đủ |
| **v1.0.32-1** | Sửa lỗi bản vá | `/feedback` tự động lưu vào TEMP khi thư mục làm việc không thể ghi |
| **v1.0.32-0** | Phát hành trước | Thêm tự động chọn mô hình, in thông tin gỡ lỗi, cảnh báo sử dụng |

**Tính năng mới quan trọng:**

- **🤖 Tự động chọn mô hình `auto`**: Tự động chọn mô hình khả dụng tối ưu cho mỗi phiên, giảm chi phí chuyển đổi thủ công của người dùng
- **⚡ Đơn giản hóa khôi phục phiên**: `--resume` và `/resume` hỗ trợ tiền tố ngắn thập lục phân 7 chữ số trở lên, không cần ID phiên đầy đủ
- **📊 Cảnh báo sử dụng**: Cảnh báo chủ động khi gần đạt 75%/90% giới hạn hàng tuần
- **🔧 Tăng cường gỡ lỗi**: `--print-debug-info` xuất thông tin phiên bản, khả năng thiết bị đầu cuối và biến môi trường
- **🛡️ Cải thiện khả năng chịu lỗi**: `/feedback` tự động hạ cấp xuống thư mục TEMP khi ở thư mục chỉ đọc

> Liên kết: https://github.com/github/copilot-cli/releases

---

## 3. Các Issues Nổi bật trong Cộng đồng (Chọn lọc 10 mục)

| # | Trạng thái | Tiêu đề | Bình luận | 👍 | Phân tích tầm quan trọng |
|:---|:---|:---|:---:|:---:|:---|
| **[#2591](https://github.com/github/copilot-cli/issues/2591)** | 🔴 OPEN | Yêu cầu một phiên → Tiêu thụ vô hạn yêu cầu premium (tính phí cho mỗi lần gọi công cụ/bước suy nghĩ) | 27 | 12 | **Lỗi thảm họa về phí 🔥**: Một yêu cầu của người dùng bị chia thành 80-100 lần tính phí riêng biệt, ảnh hưởng trực tiếp đến quyền lợi người dùng trả phí, mức độ phẫn nộ của cộng đồng cao, cần sửa chữa khẩn cấp |
| **[#1703](https://github.com/github/copilot-cli/issues/1703)** | 🔴 OPEN | CLI không hiển thị các mô hình đã bật của tổ chức (ví dụ: Gemini 3.1 Pro), hoạt động bình thường trên đầu cuối VS Code | 21 | 33 | **Khoảng trống đồng bộ mô hình**: Điểm khó khăn cốt lõi của người dùng doanh nghiệp, danh sách mô hình CLI và VS Code không nhất quán, ảnh hưởng đến việc triển khai chiến lược AI cấp tổ chức |
| **[#2725](https://github.com/github/copilot-cli/issues/2725)** | 🔴 OPEN | Bộ chọn mô hình GPT-5.4 ẩn cấp "Extra High", nhưng vẫn có thể sử dụng ở cấp dưới | 20 | 15 | **Không nhất quán UI/khả năng**: Tính năng khả dụng nhưng giao diện ẩn, gây nhầm lẫn cho người dùng, có vẻ như quyết định sản phẩm và thực thi bị tách rời |
| **[#575](https://github.com/github/copilot-cli/issues/575)** | ✅ CLOSED | Môi trường thực thi Bash bị treo, tất cả lệnh đều hết hạn | 32 | 1 | **Vấn đề dai dẳng cuối cùng cũng được sửa chữa**: Lỗi môi trường M1 Mac kéo dài 5 tháng đã đóng, đánh dấu sự cải thiện về độ ổn định thực thi cơ sở |
| **[#2336](https://github.com/github/copilot-cli/issues/2336)** | 🔴 OPEN | Thông báo giới hạn tốc độ bất thường (nhiệm vụ trung bình kích hoạt giới hạn) | 16 | 4 | **Chiến lược giới hạn không minh bạch**: Người dùng đặt câu hỏi về tính hợp lý của thuật toán tính phí/giới hạn, cùng với #2591 phản ánh khủng hoảng niềm tin hệ thống hạn ngạch |
| **[#1750](https://github.com/github/copilot-cli/issues/1750)** | ✅ CLOSED | Sử dụng `XDG_CONFIG_HOME` với thư mục con `.copilot` vi phạm quy tắc XDG | 7 | 11 | **Tuân thủ hệ sinh thái Linux**: Mặc dù đã đóng, #1347, #1954 cho thấy vấn đề chưa được giải quyết triệt để, hỗ trợ XDG vẫn là điểm khó khăn của người dùng Linux |
| **[#1838](https://github.com/github/copilot-cli/issues/1838)** | 🔴 OPEN | Tắc nghẽn I/O tiến trình con trong môi trường Nix/direnv gây treo | 6 | 9 | **Khả năng tương thích môi trường nhà phát triển**: Người dùng hệ sinh thái Nix ngày càng tăng, vấn đề này cản trở việc áp dụng môi trường phát triển có thể tái tạo |
| **[#2769](https://github.com/github/copilot-cli/issues/2769)** | ✅ CLOSED | Giới hạn tốc độ hàng tuần của đăng ký Pro+ không được đặt lại như mong đợi | 4 | 2 | **Đảm bảo trải nghiệm trả phí**: Đã đóng nhanh chóng, cho thấy GitHub ưu tiên cao phản hồi của người dùng trả phí |
| **[#2789](https://github.com/github/copilot-cli/issues/2789)** | ✅ CLOSED | V1.0.31 hiển thị sai lượng còn lại | 5 | 3 | **Độ chính xác dữ liệu**: Phản ánh chức năng cảnh báo sử dụng được phát hành hôm nay, cho thấy mô-đun thống kê sử dụng đang được lặp lại tích cực gần đây |
| **[#2374](https://github.com/github/copilot-cli/issues/2374)** | 🔴 OPEN | Autopilot vào vòng lặp vô hạn | 4 | 0 | **Độ tin cậy của Agent**: Kịch bản cốt lõi của chế độ tự động, lỗi vòng lặp trực tiếp ảnh hưởng đến năng suất và niềm tin |

---

## 4. Tiến độ PR Quan trọng

> **Lưu ý**: Chỉ **1 PR được cập nhật** trong 24 giờ qua, mức độ hoạt động của đóng góp cộng đồng tương đối thấp, các lần lặp lại chính được thúc đẩy bởi nhóm chính thức.

| # | Trạng thái | Tiêu đề | Mô tả |
|:---|:---|:---|:---|
| **[#2800](https://github.com/github/copilot-cli/pull/2800)** | 🟡 OPEN | Thêm cấu hình devcontainer ban đầu | Cấu hình Dev Container đầu tiên được thêm vào, giảm ngưỡng thiết lập môi trường cho người đóng góp mới, ám chỉ GitHub đang cải thiện cơ sở hạ tầng hợp tác mã nguồn mở |

**Phân tích**: Số lượng PR ít ỏi phản ánh hai khả năng - (1) Dự án vẫn đang trong giai đoạn lặp lại nhanh chóng do chính thức dẫn dắt, ngưỡng tham gia sâu của cộng đồng cao; (2) Hoặc mã gần đây bị đóng băng để chuẩn bị cho các phiên bản quan trọng. Khuyến nghị theo dõi xem có nhiều issue `good-first-issue` được mở ra trong tương lai hay không.

---

## 5. Xu hướng nhu cầu chức năng

Dựa trên phân tích 50 Issues đang hoạt động, năm hướng tập trung chính của cộng đồng:

```
┌─────────────────────────────────────────────────────────┐
│  📈 Biểu đồ độ nóng xu hướng (đánh giá tổng hợp theo số lượng & mức độ tương tác của Issues)            │
├─────────────────────────────────────────────────────────┤
│  ████████████████████████████████████████  Mô hình/Phí    │ ← 35%  #2591 #1703 #2725 #2336
│  ██████████████████████████████            Cấu hình/Tương thích  │ ← 25%  #1750 #1347 #1954 #1838
│  ██████████████████████                    Tính tự động của Agent │ ← 18%  #2374 #935 #2416 #1529
│  ████████████████                          Terminal/Hiển thị    │ ← 14%  #2625 #2580 #2789
│  ███████████                               Hệ sinh thái MCP/Công cụ │ ←  8%  #2176 #2692 #1255 #1040
└─────────────────────────────────────────────────────────┘
```

**Phân tích quan trọng:**

| Hướng | Yêu cầu cốt lõi | Issues đại diện |
|:---|:---|:---|
| **Phí mô hình công bằng** | Đo lường tiêu thụ minh bạch, có thể dự đoán; danh sách mô hình CLI/VS Code nhất quán | #2591, #1703, #2725 |
| **Trải nghiệm gốc Linux/Unix** | Hỗ trợ thư mục XDG tuân thủ quy tắc; tương thích Nix/direnv; khả dụng trong kịch bản SSH | #1750, #1347, #1838, #2159 |
| **Khả năng kiểm soát Agent** | Cơ chế chống vòng lặp; chế độ xem xét; đảm bảo khả năng hiển thị của skill | #2374, #1529, #2416 |
| **Tối ưu hóa hiệu suất Terminal** | Hiển thị không bị giật trong phiên dài; xử lý ký tự ẩn; sao chép đáng tin cậy | #2625, #2580, #1160 |
| **Chuẩn hóa MCP/Công cụ** | Hỗ trợ đầy đủ giao thức ACP; truyền cấu hình MCP; tìm kiếm Web ổn định | #1255, #1040, #2692 |

---

## 6. Điểm tập trung của nhà phát triển

### 🔴 Các điểm khó khăn thường gặp (Top 5)

| Hạng | Điểm khó khăn | Biểu hiện cụ thể | Phạm vi ảnh hưởng |
|:---|:---|:---|:---|
| 1 | **Hố phí** | Một yêu cầu bị chia thành hàng chục lần tính phí, không có chi tiết để truy xuất | Tất cả người dùng trả phí |
| 2 | **Tính khả dụng của mô hình không nhất quán** | Mô hình được bật trong tổ chức "biến mất" trên CLI | Người dùng doanh nghiệp/Pro+ |
| 3 | **Quy tắc XDG lặp đi lặp lại** | Sửa chữa rồi quay lại, di chuyển thư mục cấu hình làm đứt gãy chuỗi công cụ | Nhà phát triển Linux/macOS |
| 4 | **Rủi ro mất kiểm soát Agent** | Vòng lặp vô hạn, cắt xén skill, gọi sai Agent | Người dùng quy trình làm việc tự động hóa |
| 5 | **