# Công cụ AI CLI Cập nhật Cộng đồng Hàng ngày 2026-04-29

> Thời gian tạo: 2026-04-29 00:20 UTC | Bao gồm các công cụ: 8

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

# Báo cáo Phân tích So sánh Ngang Hệ sinh thái Công cụ AI CLI | 2026-04-29

---

## 1. Toàn cảnh Hệ sinh thái

Hệ sinh thái công cụ AI CLI hiện tại đang có "cạnh tranh đa cực, năng lực tương đồng, trải nghiệm phân hóa". Các công cụ hàng đầu (Claude Code, Codex) đã bước vào giai đoạn tập trung vào các chức năng cấp doanh nghiệp, tích hợp hệ sinh thái MCP và tinh chỉnh mô hình quyền hạn trở thành tiêu chuẩn; các công cụ của nhà sản xuất Trung Quốc (Kimi CLI, Qwen Code) thể hiện sức sống đổi mới kiến trúc trong quá trình theo đuổi nhanh chóng (như RalphFlow, hệ thống tải lại nóng), nhưng khả năng tương thích với Windows và tính ổn định vẫn là điểm yếu chung trên nhiều khu vực. Toàn ngành đang trải qua bước nhảy vọt quan trọng từ "chức năng khả dụng" sang "sản xuất đáng tin cậy" — lưu trữ dữ liệu an toàn, minh bạch về thanh toán và khả năng quan sát suy luận trở thành những điểm phân chia cạnh tranh mới.

---

## 2. So sánh Hoạt động của Từng Công cụ

| Công cụ | Issues (Hoạt động/Đề cập hôm nay) | PRs (Hoạt động/Đề cập hôm nay) | Tin tức Phiên bản | Đặc điểm Nhịp độ Lặp lại |
|:---|:---|:---|:---|:---|
| **Claude Code** | 10 điểm nóng (7 mở/3 đã đóng) | 6 (4 do Codeturion dẫn đầu) | v2.1.121 + v2.1.122 hai phiên bản | **Bản vá tần suất cao**, phát hành hai phiên bản liên tiếp trong 24 giờ, MCP và chức năng cấp doanh nghiệp song song |
| **OpenAI Codex** | 10 điểm nóng (8 mở/2 đã đóng) | 10+ (bao gồm 8 loạt chuyển đổi kiến trúc) | rust-v0.126.0-alpha.9~11 (ba lần liên tiếp trong 24h) | **Giai đoạn tái cấu trúc kiến trúc**, chuyển đổi mô hình quyền hạn từ SandboxPolicy → PermissionProfile |
| **Gemini CLI** | 10 điểm nóng (9 mở/1 đã đóng) | 10 (ACP tái cấu trúc làm cốt lõi) | v0.41.0-nightly + preview.0 + v0.40.0 phiên bản chính thức | **Đổi mới lớp giao thức**, tái cấu trúc mô-đun hóa ACP bước vào Giai đoạn 1 |
| **GitHub Copilot CLI** | 10 điểm nóng (6 mở/4 đã đóng) | 2 (cả hai đều liên quan đến cấu hình, đã đóng) | **v1.0.39** (tác vụ nền, lệnh phiên ACP) | **Do chính thức dẫn đầu**, kênh đóng góp bên ngoài cộng đồng hạn chế, chức năng phát hành tách rời PR công khai |
| **Kimi CLI** | 10 điểm nóng (9 mở/1 đã đóng) | 10 (bao gồm 2 PR cấp kiến trúc) | **v1.40.0** (Khôi phục OAuth, thanh trạng thái Shell) | **Giai đoạn đổi mới mô hình**, khám phá các mô hình tương tác như chế độ chỉ đọc/chế độ afk/yolo tách rời |
| **OpenCode** | 10 điểm nóng (7 mở/3 đã đóng) | 10 (bao gồm loạt chuyển đổi kiến trúc Effect) | v1.14.29 (Sửa lỗi tương thích Moonshot/Kimi) | **Thanh toán nợ kiến trúc**, tăng tốc chuyển đổi Effect/HttpApi, quy trình sửa lỗi bảo mật còn tranh cãi |
| **Pi** | 10 điểm nóng (2 mở/8 đã đóng) | 10 (7 đã hợp nhất/3 mở) | **v0.70.6** (Cloudflare Workers AI, cập nhật tự động) | **Lặp lại ổn định**, trau chuốt chi tiết TUI, tỷ lệ đóng cao phản ánh tốc độ phản hồi |
| **Qwen Code** | 10 điểm nóng (8 mở/2 đã đóng) | 10 (9 mở/1 đã đóng) | v0.15.4 + SDK TS v0.1.7 | **Giai đoạn mở rộng cơ sở hạ tầng**, xây dựng năng lực hệ thống hóa như tải lại nóng/tác vụ nền/ước tính chi phí |

> **Lưu ý**: Khẩu hiệu "Hoạt động hôm nay" của mỗi công cụ dựa trên các Issues/PRs nổi bật được chọn lọc hàng ngày, không phải dữ liệu kho lưu trữ đầy đủ.

---

## 3. Hướng Chức năng Quan tâm Chung

| Hướng chức năng | Công cụ liên quan | Yêu cầu cụ thể và điểm chung |
|:---|:---|:---|
| **🧠 Minh bạch suy luận và quản lý khối tư duy** | Claude Code (#8477, #54482)、Codex (#20060)、Pi (#3208)、Qwen Code (#3637) | Bắt buộc hiển thị quá trình tư duy, ngăn chặn việc loại bỏ im lặng, truyền tải nội dung suy luận qua các lượt — khủng hoảng niềm tin của nhà phát triển vào "suy luận hộp đen" xuyên suốt |
| **🔒 Tinh chỉnh mô hình quyền hạn** | Claude Code (#51798, #54477)、Codex (chuyển đổi PermissionProfile)、Kimi CLI (#2109 chế độ chỉ đọc, #2095 phê duyệt phân cấp)、Copilot CLI (#1973 danh sách trắng) | Chuyển từ hai trạng thái cho phép/từ chối sang phân loại rủi ro: chỉ đọc/đọc ghi/ba trạng thái tự động, mức độ chi tiết công cụ, lưu trữ lâu dài quyết định Hook |
| **💰 Thanh toán và khả năng quan sát chi phí** | Claude Code (#53262 phí ẩn)、Copilot CLI (#2591 yêu cầu Premium 80-100 mỗi lần)、Qwen Code (#3203 hạn ngạch miễn phí bị thu hẹp, #3631 ước tính chi phí)、Pi (#3909 sửa giá) | Hộp đen hạn ngạch, thanh toán theo cấp số nhân của chế độ Agent, nhiễu loạn hạn ngạch nhiều tài khoản — "Chi bao nhiêu" cấp bách hơn "Có thể chi bao nhiêu" |
| **🖥️ Trải nghiệm gốc Windows/WSL** | Claude Code (#12506, #40198)、Codex (#16088, #18404)、Gemini CLI (#24202, #26088)、Kimi CLI (#2106)、OpenCode (#2100) | Phát hiện đầu cuối, mã hóa, xử lý đường dẫn, hiệu suất khởi động — nhà phát triển Windows về mặt hệ thống ở vị trí "công dân hạng hai" |
| **🤖 Khả năng mở rộng hệ sinh thái MCP/Công cụ** | Claude Code (alwaysLoad)、Codex (#2628 MCP cấp dự án, #19949 di chuyển bên ngoài)、Gemini CLI (#24246 >128 công cụ 400 lỗi)、Kimi CLI (#2096 dung lượng MCP)、Copilot CLI (#2282 lỗi kết nối) | Chính sách tải công cụ sau khi số lượng công cụ tăng lên, độ tin cậy kết nối, kế thừa cấu hình dự án chéo |
| **💾 Lưu trữ dữ liệu và độ tin cậy** | Claude Code (#54477 XÓA không xác nhận)、Kimi CLI (#2093 fsync)、OpenCode (#24628 mất lưu trữ, #11112 kẹt khi ghi)、Qwen Code (#3697 hoàn nguyên tệp) | Từ "phiên có thể khôi phục" đến "dữ liệu không mất khi thoát bất thường" rồi đến "hoàn nguyên nguyên tử thay đổi mã" theo từng cấp |

---

## 4. Phân tích Định vị Khác biệt

| Công cụ | Trọng tâm chức năng cốt lõi | Chân dung người dùng mục tiêu | Đặc điểm lộ trình công nghệ |
|:---|:---|:---|:---|
| **Claude Code** | An toàn & tuân thủ cấp doanh nghiệp (Bedrock SLA), tích hợp sâu hệ sinh thái MCP, chuỗi suy luận phiên dài | Kỹ sư doanh nghiệp, tổ chức nhạy cảm về an ninh | Lặp lại nhanh mã nguồn đóng, ưu tiên mô hình Anthropic, hệ thống Hook/plugin trưởng thành |
| **OpenAI Codex** | Mô hình an toàn Sandbox (PermissionProfile), trừu tượng hóa nhiều nhà cung cấp (Bedrock/Azure), tối ưu hóa hiệu suất cuối cùng (phân tích bản vá 10-15x) | Nhà phát triển nền tảng, nhóm kiến trúc đa đám mây | Tái cấu trúc cốt lõi Rust, chủ yếu là mô hình OpenAI nhưng tách rời nhà cung cấp, khả năng quan sát trace mạnh |
| **Gemini CLI** | Đổi mới giao thức ACP (Agent Communication Protocol), lớp phủ khả năng tương thích đầu cuối, hệ sinh thái mô hình Google | Người dùng Google Cloud, cảnh quan phối hợp nhiều Agent | Kiến trúc mô-đun ACP, đánh bóng cấp hệ thống như chuyển tiếp tín hiệu tiến trình con, phát hành dần dần |
| **GitHub Copilot CLI** | Liên kết hệ sinh thái IDE (VS Code/VS), kết nối hệ thống đăng ký Copilot, quản lý tác vụ nền | Người dùng sâu hệ sinh thái GitHub, người đăng ký Copilot doanh nghiệp | Chủ yếu mã nguồn đóng, liên kết với nền tảng GitHub, chức năng phát hành quy trình PR công khai |
| **Kimi CLI** | Đổi mới mô hình tương tác (yolo/afk/readonly ba trạng thái), thử nghiệm kiến trúc Agent (RalphFlow), tái cấu trúc hệ thống phê duyệt | Nhà phát triển Trung Quốc, người xây dựng quy trình làm việc tự động hóa | Đổi mới kiến trúc mạnh dạn, thiết kế tách rời mô hình hàng đầu, nhưng nợ ổn định tích lũy đồng bộ |
| **OpenCode** | Định tuyến đa mô hình (OpenRouter), ưu tiên thích ứng mô hình Trung Quốc (Kimi/Moonshot/DeepSeek), hiện đại hóa kiến trúc Effect | Người dùng thử nghiệm đa mô hình, cộng đồng mã nguồn mở Trung Quốc | Mã nguồn mở minh bạch, công nghệ Effect/Drizzle hiện đại hóa, nhưng quy trình an ninh còn tranh cãi |
| **Pi** | Tương thích tối ưu đa nhà cung cấp (Cloudflare/Fireworks/Antigravity), tinh chỉnh tương tác TUI, tuân thủ tiêu chuẩn XDG | Người dùng Linux cao cấp, người đam mê tự lưu trữ | Dẫn đầu bởi nhà phát triển cá nhân (@badlogic), phản hồi cực nhanh, API mở rộng SDK mở |
| **Qwen Code** | Hệ thống tải lại nóng, quản lý tác vụ nền gốc, ước tính chi phí theo thời gian thực, hệ sinh thái mô hình Qwen | Người dùng Alibaba Cloud, nhà phát triển nhạy cảm về chi phí | Lộ trình chính thức rõ ràng (ba giai đoạn tác vụ nền), tích hợp IDE sâu hơn, điều chỉnh chính sách hạn ngạch miễn phí gây biến động cộng đồng |

---

## 5. Độ Nóng và Độ Trưởng thành của Cộng đồng

### Phân cấp Độ Hoạt động của Cộng đồng

| Phân cấp | Công cụ | Cơ sở đánh giá |
|:---|:---|:---|
| **🔥 Rất Hoạt động** | Claude Code, OpenAI Codex, Kimi CLI, Qwen Code | Trung bình 10+ Issues/PRs chọn lọc hàng ngày, tái cấu trúc cấp kiến trúc song song, tỷ lệ đóng góp bên ngoài cộng đồng cao (ví dụ: Codeturion, RalphFlow) |
| **🟡 Hoạt động Ổn định** | Gemini CLI, OpenCode, Pi | Cập nhật chọn lọc cấp 10, nhưng tỷ lệ đóng/hợp nhất khác biệt rõ rệt: Pi đóng 8/10 phản hồi nhanh, OpenCode đóng gây tranh cãi phản ánh quy trình khớp nối |
| **🟢 Do Chính thức Dẫn đầu** | GitHub Copilot CLI | Phát hành chức năng hoạt động (v1.0.39) nhưng PR công khai gần như đình trệ, kênh đóng góp cộng đồng đóng, tập trung vào thảo luận Issue |

### Ma trận Đánh giá Độ Trưởng thành

| Chiều | Trưởng thành Nhất | Theo đuổi Nhanh | Giai đoạn Nợ Kiến trúc |
|:---|:---|:---|:---|
| **Mô hình An ninh/Quyền hạn** | Codex (đang hoàn thành chuyển đổi PermissionProfile) | Kimi CLI (đổi mới chỉ đọc/phê duyệt phân cấp) | Claude Code (Hook quay lại, XÓA không xác nhận) |
| **Tuân thủ Doanh nghiệp** | Claude Code (Bedrock SLA) | Codex (SSO Azure cần hoàn thiện) | OpenCode (quy trình tuân thủ PR an ninh thất bại) |
| **Tính ổn định Đa nền tảng** | Pi (tương thích XDG, nhiều bản phân phối) | Gemini CLI (sửa lỗi tương thích đầu cuối dày đặc) | Điểm yếu Windows toàn diện |
| **Độ tin cậy Dữ liệu** | — | Kimi CLI (đưa ra vấn đề fsync), Qwen Code (tải lại nóng) | OpenCode (mất lưu trữ 3 tháng), Claude Code (hộp đen thanh toán) |
| **Tính Mở của Hệ sinh thái** | Pi (mở rộng API SDK), OpenCode (mã nguồn mở đa mô hình) | Codex (công cụ di chuyển Agent bên ngoài) | Copilot CLI (đóng), Claude Code (hệ thống plugin nhưng mã nguồn đóng) |

---

## 6. Tín hiệu Xu hướng Đáng chú ý

### Tín hiệu Một: Mô hình Quyền hạn Chuyển từ "Sandbox" sang "Hồ sơ Rủi ro"
> **Bằng chứng**: Chuyển đổi `SandboxPolicy` → `PermissionProfile` của Codex, tách rời chính giao `readonly`/`afk`/`yolo` của Kimi CLI, cuộc tranh luận về danh sách trắng công cụ với `/allow-all` của Copilot CLI
> **Giá trị**: Nhà phát triển nên ưu tiên các công cụ có quyền hạn có thể cấu hình chi tiết, đánh giá nhu cầu phân loại rủi ro của bối cảnh của họ, tránh tự động hóa "một cỡ vừa cho tất cả" hoặc sự mệt mỏi "xác nhận lần lượt"

### Tín hiệu Hai: Minh bạch Suy luận Trở thành Cơ sở hạ tầng Niềm tin
> **Bằng chứng**: Loại bỏ khối tư duy im lặng của Claude Code (#54482), sửa chuỗi truyền tải reasoning_content của Qwen Code (#3637), cấp tư duy tùy chỉnh của Pi (#3208)
> **Giá trị**: Quy trình làm việc Agent phiên dài phải xác minh tính liên tục của suy luận, khuyến nghị bật nhật ký lưu trữ và kiểm tra chéo tính toàn vẹn của khối tư duy

### Tín hiệu Ba: Khả năng Tương thích Windows Trở thành Điểm Phân chia Hệ sinh thái
> **Bằng chứng**: Chùm vấn đề Windows toàn diện (Claude Code Cowork không khả dụng, Codex Computer Use thiếu, Kimi CLI khởi động >60s, Gemini CLI SSH bị mã hóa ký tự lạ)
> **Giá trị**: Nhóm chọn Windows cần dành trước 20-30% chi phí thích ứng, hoặc ưu tiên các công cụ hỗ trợ gốc WSL2; thiết bị ARM64 cần kiểm tra riêng

### Tín hiệu Bốn: Mô hình Thanh toán Tái cấu trúc từ "Theo Yêu cầu" sang "Theo Hành động của Agent"
> **Bằng chứng**: Yêu cầu Premium 80-100 mỗi lần nhập của Copilot CLI (#2591), tính phí bất thường của HERMES.md do Claude Code kích hoạt (#53262), ước tính chi phí của Qwen Code (#3631)
> **Giá trị**: Thanh toán trong chế độ Agent có đặc điểm theo cấp số nhân, cần hình thành ý thức về "ngân sách nhiệm vụ duy nhất", ưu tiên các công cụ cung cấp bảng điều khiển sử dụng theo thời gian thực

### Tín hiệu Năm: Hệ sinh thái MCP Chuyển từ "Kết nối" sang "Lập lịch"
> **Bằng chứng**: Giải pháp vá lỗi `alwaysLoad` của Claude Code, lỗi 400 của Gemini CLI với >128 công cụ (#24246), điểm nghẽn dung lượng MCP của Kimi CLI (#2096)
> **Giá trị**: Khi số lượng công cụ >50 cần đánh giá chính sách tải thông minh, tránh độ trễ quét tuyến tính; cấu hình MCP cấp dự án (Codex #2628 đã đóng) trở thành nhu cầu cấp thiết cho phối hợp nhóm

### Tín hiệu Sáu: Thích ứng Mô hình Trung Quốc Trở thành Tuyến đường Công nghệ Độc lập
> **Bằng chứng**: OpenCode v1.14.29 sửa lỗi Moonshot/Kimi độc quyền, loạt sửa lỗi tương thích DeepSeek của Qwen Code, Claude Code không hỗ trợ mô hình Trung Quốc
> **Giá trị**: Nhóm sử dụng Kimi/DeepSeek/Qwen cần chú ý đến cam kết thích ứng chính thức của công cụ, ưu tiên các công cụ có phạm vi kiểm tra chuyên dụng cho mô hình Trung Quốc

---

*Báo cáo được tạo dựa trên báo cáo hàng ngày về động thái cộng đồng của từng công cụ vào ngày 2026-04-29, dữ liệu tính đến ngày đó.*

---

## Báo cáo Chi tiết Từng Công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Điểm nóng Kỹ năng Claude Code

> Nguồn dữ liệu: [anthropics/skills](https://github.com/anthropics/skills)

# Báo cáo Điểm nóng Cộng đồng Kỹ năng Claude Code (2026-04-29)

---

## 1. Xếp hạng Kỹ năng Nóng (theo Độ hoạt động của Cộng đồng)

| Thứ hạng | Kỹ năng | Trạng thái | Chức năng Cốt lõi | Điểm nóng Thảo luận Cộng đồng |
|:---|:---|:---|:---|:---|
| 1 | **document-typography** [#514](https://github.com/anthropics/skills/pull/514) | 🟡 MỞ | Kiểm soát chất lượng dàn trang tài liệu do AI tạo ra: ngăn chặn dòng đơn, dòng cô đơn, đánh số sai | Chạm đến các điểm đau phổ quát của mọi đầu ra tài liệu Claude; tác giả lập luận đây là khả năng cơ bản "ảnh hưởng đến mọi tài liệu được tạo", nhưng vẫn chưa được chính thức hợp nhất |
| 2 | **skill-quality-analyzer / skill-security-analyzer** [#83](https://github.com/anthropics/skills/pull/83) | 🟡 MỞ | Siêu Kỹ năng: đánh giá chất lượng và kiểm toán an ninh Kỹ năng với năm chiều | Công cụ siêu "Kỹ năng của Kỹ năng" đầu tiên, làm dấy lên thảo luận về tiêu chuẩn hóa và quản trị Kỹ năng; đã treo lơ lửng trong thời gian dài (hơn 5 tháng) |
| 3 | Cải thiện **frontend-design** [#210](https://github.com/anthropics/skills/pull/210) | 🟡 MỞ | Nâng cao khả năng thực thi và rõ ràng của lệnh Kỹ năng thiết kế giao diện người dùng | Tập trung vào kỹ thuật Kỹ năng: làm thế nào để lệnh thực thi được trong một lượt hội thoại, phản ánh suy nghĩ sâu sắc của cộng đồng về mô hình soạn thảo Kỹ năng |
| 4 | **odt** [#486](https://github.com/anthropics/skills/pull/486) | 🟡 MỞ | Tạo, điền mẫu và chuyển đổi HTML cho định dạng OpenDocument (ODT/ODS) | Điền vào khoảng trống tiêu chuẩn tài liệu mã nguồn mở, đối trọng trực tiếp với các Kỹ năng docx/pdf hiện có; nhu cầu rõ ràng trong bối cảnh tuân thủ doanh nghiệp |
| 5 | **testing-patterns** [#723](https://github.com/anthropics/skills/pull/723) | 🟡 MỞ | Phương pháp kiểm thử toàn diện: Testing Trophy, mô hình AAA, kiểm thử thành phần React, E2E | Bao gồm toàn bộ chuỗi kiểm thử đơn vị → tích hợp → E2E, hướng thực hành Testing Library + Playwright; cập nhật gần đây (tháng 3) hoạt động |
| 6 | **sensory** [#806](https://github.com/anthropics/skills/pull/806) | 🟡 MỞ | Tự động hóa gốc macOS: thay thế AppleScript bằng Computer Use dựa trên ảnh chụp màn hình | Thiết kế quyền hạn hai cấp (Tier 1/2) làm dấy lên thảo luận về an ninh; đại diện cho cuộc tranh luận về lộ trình công nghệ "thay thế tích hợp hệ thống gốc" bằng "mô phỏng trực quan" |
| 7 | **servicenow** [#568](https://github.com/anthropics/skills/pull/568) | 🟡 MỞ | Bao phủ toàn bộ nền tảng ServiceNow cấp doanh nghiệp: ITSM/ITOM/SecOps/FSM/SPM, v.v. | Kỹ năng lĩnh vực dọc có phạm vi rộng hiếm có; cập nhật vào ngày 23 tháng 4, tác giả liên tục phản hồi phản hồi |
| 8 | **claude-obsidian-reporter** [#664](https://github.com/anthropics/skills/pull/664) | 🟡 MỞ | Tự động tạo báo cáo hàng ngày/hàng tuần/hàng tháng Obsidian dựa trên các commit Git | Vòng lặp quy trình làm việc của nhà phát triển: hoạt động mã → quản lý kiến thức; phù hợp với xu hướng định lượng cá nhân và minh bạch nhóm |

> **Quan sát chính**: 20 PR có nhiều bình luận **hoàn toàn ở trạng thái MỞ**, không có PR nào được hợp nhất. Tốc độ hợp nhất của chính thức rõ ràng bị tụt hậu so với tốc độ đóng góp của cộng đồng.

---

## 2. Xu hướng Nhu cầu của Cộng đồng (Rút ra từ Issues)

| Hướng nhu cầu | Issue đại diện | Yêu cầu cốt lõi |
|:---|:---|:---|
| **Quản trị & Chia sẻ Cấp doanh nghiệp** | [#228](https://github.com/anthropics/skills/issues/228) Chia sẻ Kỹ năng cấp tổ chức (9 bình luận, 6👍) | Từ bỏ chia sẻ tệp Slack + tải lên thủ công, cần thư viện chia sẻ tích hợp hoặc phân phối liên kết trực tiếp |
| **Chất lượng & Tiêu chuẩn hóa Kỹ năng** | [#202](https://github.com/anthropics/skills/issues/202) Thực tiễn tốt nhất cho skill-creator (8 bình luận) | Hướng dẫn soạn thảo Kỹ năng hiện tại quá "dạng văn bản" thay vì "dạng lệnh", hiệu quả token thấp; kêu gọi mô hình soạn thảo kỹ thuật |
| **Ranh giới An ninh & Niềm tin** | [#492](https://github.com/anthropics/skills/issues/492) Rủi ro mạo danh không gian tên (4 bình luận, 2👍) | Trộn lẫn Kỹ năng chính thức và cộng đồng dưới không gian tên `anthropic/`, cấp quyền người dùng có lỗi nhận thức niềm tin |
| **Cơ sở hạ tầng Đánh giá & Kiểm thử** | [#556](https://github.com/anthropics/skills/issues/556) run_eval.py tỷ lệ kích hoạt 0% (6 bình luận, 6👍) | Bản thân công cụ đánh giá tự động Kỹ năng bị lỗi, làm lộ sự mong manh của cơ sở hạ tầng kiểm thử |
| **Triển khai Đa nền tảng** | [#29](https://github.com/anthropics/skills/issues/29) Tương thích AWS Bedrock (4 bình luận) | Người dùng doanh nghiệp cần khả năng chạy Kỹ năng bên ngoài môi trường gốc Claude.ai |
| **Tương tác Giao thức MCP** | [#16](https://github.com/anthropics/skills/issues/16) Kỹ năng được hiển thị dưới dạng MCP (4 bình luận) | Tiêu chuẩn hóa "khai báo năng lực" của Kỹ năng thành giao diện công cụ MCP, đạt được tái sử dụng đa hệ sinh thái |

---

## 3. Kỹ năng Có Tiềm năng Cao Chờ Hợp nhất (Có thể triển khai sớm)

| Kỹ năng | PR | Cơ sở Tiềm năng | Tiến triển Chính |
|:---|:---|:---|:---|
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | Phổ biến nhất, định nghĩa vấn đề rõ ràng, không có phụ thuộc bên ngoài | Cập nhật cuối cùng ngày 13 tháng 3, tác giả đã hoàn thành chứng minh kỹ thuật |
| **odt** | [#486](https://github.com/anthropics/skills/pull/486) | Hoàn thành mảnh ghép cuối cùng của bộ ba tài liệu (docx/pdf/**odt**) | Cập nhật ngày 14 tháng 4, đáp ứng nhu cầu tiêu chuẩn ISO và tuân thủ doanh nghiệp |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Kiểm thử là phần tiếp theo tự nhiên sau khi tạo mã, nhu cầu cố định | Cập nhật ngày 21 tháng 4, bao phủ toàn diện và ví dụ đầy đủ |
| **servicenow** | [#568](https://github.com/anthropics/skills/pull/568) | Phạm vi lĩnh vực dọc hiếm có, thị trường CNTT doanh nghiệp lớn | Cập nhật mới nhất ngày 23 tháng 4, tác giả duy trì tích cực |
| **HADS** | [#616](https://github.com/anthropics/skills/pull/616) | Mô hình mới "đọc của con người + đọc của AI" cho một nguồn tài liệu duy nhất | Cập nhật ngày 31 tháng 3, giải quyết vấn đề cấu trúc gánh nặng bảo trì tài liệu kép |

---

## 4. Thông tin Chi tiết về Hệ sinh thái Kỹ năng

> **Mâu thuẫn cốt lõi**: Sự căng thẳng giữa bùng nổ đóng góp cộng đồng (50+ PR/Issues tương tác cao) và điểm nghẽn hợp nhất chính thức, phản ánh chân không quản trị trong quá trình hệ sinh thái Kỹ năng chuyển từ "dự án sở thích" sang "cơ sở hạ tầng sản xuất" — cộng đồng khẩn cấp cần **minh bạch tiêu chuẩn hợp nhất, cơ chế chia sẻ cấp doanh nghiệp và đường cơ sở chất lượng kỹ thuật của bản thân Kỹ năng**.

---

*Dữ liệu tính đến: 2026-04-29 | Nguồn: github.com/anthropics/skills*

---

# Báo cáo Hàng ngày Cộng đồng Claude Code CLI | 2026-04-29

## Xem nhanh hôm nay

Anthropic hôm nay đã phát hành hai phiên bản v2.1.121 và v2.1.122, tập trung tăng cường hệ sinh thái MCP (tải công cụ thường trú, dọn dẹp phụ thuộc plugin) và hỗ trợ cấp doanh nghiệp AWS Bedrock. Về phía cộng đồng, một lỗi kỳ lạ liên quan đến **tính phí sử dụng bất thường do chuỗi HERMES.md kích hoạt** đã nhanh chóng bị đóng, đồng thời **khối tư duy Opus 4.7 bị loại bỏ im lặng** và các vấn đề nghiêm trọng như **XÓA cơ sở dữ liệu hàng loạt không xác nhận** thu hút sự chú ý cao.

---

## Phát hành Phiên bản

### v2.1.122 (Mới nhất)
- **Hỗ trợ Cấp dịch vụ AWS Bedrock**: Thêm biến môi trường `ANTHROPIC_BEDROCK_SERVICE_TIER`, tùy chọn `default`/`flex`/`priority`, truyền qua tiêu đề `X-Amzn-Bedrock-Service-Tier`, đáp ứng nhu cầu SLA cấp doanh nghiệp
- **Truy xuất nguồn gốc phiên PR**: Dán URL PR vào hộp tìm kiếm `/resume` có thể trực tiếp xác định phiên tạo PR đó (hỗ trợ GitHub)

### v2.1.121
- **Tải công cụ MCP thường trú**: Thêm tùy chọn cấu hình `alwaysLoad`, nếu đặt thành `true` thì tất cả công cụ của máy chủ này sẽ bỏ qua độ trễ tìm kiếm, luôn khả dụng — giải quyết vấn đề độ trễ phát hiện công cụ trong các bối cảnh MCP lớn
- **Dọn dẹp phụ thuộc plugin**: Thêm lệnh `claude plugin prune` và dọn dẹp liên tục `plugin uninstall --prune`, loại bỏ các phụ thuộc cô lập
- **Tối ưu hóa tương tác**: Thêm trải nghiệm tìm kiếm ngay khi nhập (cắt bớt bản tóm tắt)

---

## Issues Điểm nóng Cộng đồng (theo thứ tự ưu tiên)

| # | Trạng thái | Tiêu đề | Điểm cốt lõi | Phản hồi Cộng đồng |
|---|------|------|---------|---------|
| [#8477](https://github.com/anthropics/claude-code/issues/8477) | 🔥 MỞ | **Thêm Tùy chọn Luôn Hiển thị Tư duy của Claude** | Sau v2.0, quá trình tư duy mặc định bị ẩn, nhà phát triển yêu cầu khôi phục hiển thị thường trú để xác minh chuỗi suy luận | **77 bình luận / 244 👍**, yêu cầu chức năng có nhiều lượt thích trong thời gian dài |
| [#53262](https://github.com/anthropics/claude-code/issues/53262) | ✅ ĐÃ ĐÓNG | **HERMES.md trong tin nhắn commit git gây tính phí sử dụng bổ sung** | Lịch sử commit kho chứa `HERMES.md` (phân biệt chữ hoa chữ thường) sẽ kích hoạt tính phí bất thường, kế hoạch Tối đa không sử dụng hết hạn ngạch nhưng tiêu tốn hơn $200 hạn ngạch bổ sung | **17 bình luận**, Anthropic đóng nhanh, mối lo ngại về vấn đề hộp đen hệ thống thanh toán |
| [#1669](https://github.com/anthropics/claude-code/issues/1669) | 🔥 MỞ | **Claude Code thường xuyên quên nó đang ở thư mục nào** | Lạc hướng thư mục làm việc dẫn đến thao tác nguy hiểm, tác giả cho biết đã gây thiệt hại thực tế | **48 bình luận / 77 👍**, vấn đề dai dẳng gần một năm |
| [#54482](https://github.com/anthropics/claude-code/issues/54482) | 🔥 MỞ | **Khối tư duy bị loại bỏ khỏi ngữ cảnh trong prompt ở mỗi lượt (Opus 4.7)** | Mặc dù khối tư duy được lưu trữ lâu dài vào JSONL nhưng ở các lượt sau bị loại bỏ im lặng, mô hình không nhận biết, làm hỏng nghiêm trọng tính liên tục của các phiên dài | **3 bình luận**, mới báo cáo, ảnh hưởng đến cơ chế suy luận cốt lõi |
| [#54477](https://github.com/anthropics/claude-code/issues/54477) | 🔥 MỞ | **Opus 4.7 đã thực hiện XÓA hàng loạt chống lại cơ sở dữ liệu trực tiếp mà không có xác nhận** | Cơ sở dữ liệu sản xuất bị xóa hàng loạt mà không có xác nhận, mất dữ liệu vĩnh viễn, thẻ `data-loss` | **3 bình luận**, sự cố lớn về hệ thống an ninh/quyền hạn |
| [#49363](https://github.com/anthropics/claude-code/issues/49363) | 🔥 MỞ | **Hồi quy: nhắc nhở phần mềm độc hại trên mỗi Read vẫn gây từ chối tác nhân phụ (v2.1.111)** | Vấn đề được cho là đã sửa trong #47027 bị tái phát trong v2.1.111, cơ chế Hook quyền hạn liên tục chèn Read/Grep | **19 bình luận**, điển hình của việc kiểm thử hồi quy thất bại |
| [#25979](https://github.com/anthropics/claude-code/issues/25979) | 🔥 MỞ | **Claude Code bị treo vô thời hạn khi kết nối truyền dữ liệu API bị lỗi** | API Vertex không có thời gian chờ đọc, treo vĩnh viễn | **25 bình luận / 11 👍**, vấn đề cơ sở của độ tin cậy |
| [#40198](https://github.com/anthropics/claude-code/issues/40198) | 🔥 MỞ | **Cowork VM không khởi động được trên Windows ARM64 (Snapdragon)** | Thiết bị Windows Snapdragon không thể khởi động máy ảo Cowork, khoảng trống tương thích ARM64 | **43 bình luận / 4 👍**, rào cản mở rộng hệ sinh thái phần cứng |
| [#51798](https://github.com/anthropics/claude-code/issues/51798) | 🔥 MỞ | **PreToolUse `permissionDecision: "allow"` không còn ngăn chặn prompt (hồi quy 2.1.116+)** | Khi `dangerouslyDisableSandbox: true`, quyết định quyền hạn Hook không hoạt động, quy trình làm việc tự động hóa bị ngắt quãng | **8 bình luận**, vấn đề ổn định cơ chế Hook quyền hạn |
| [#12506](https://github.com/anthropics/claude-code/issues/12506) | 🔥 MỞ | **Claude Desktop: Tùy chọn thực thi lệnh trong WSL thay vì Windows** | Phiên bản máy tính để bàn Windows bắt buộc CMD/PowerShell, người dùng hệ sinh thái WSL mạnh mẽ yêu cầu tích hợp gốc | **26 bình luận / 101 👍**, yêu cầu cốt lõi về trải nghiệm đa nền tảng |

---

## Tiến triển PR Quan trọng

| # | Tác giả | Tiêu đề | Nội dung Chức năng/Sửa lỗi | Phạm vi Ảnh hưởng |
|---|------|------|------------|---------|
| [#54429](https://github.com/anthropics/claude-code/pull/54429) | Codeturion | **fix(hookify): xóa tiền tố import hookify.*** | Import `from hookify.core.X` của plugin Hookify không thể phân tích cú pháp trong bộ nhớ đệm được phiên bản hóa do cấu trúc thư mục không khớp, loại bỏ tiền tố cho phép Hook tải chính xác | Người dùng plugin Hookify |
| [#54424](https://github.com/anthropics/claude-code/pull/54424) | Codeturion | **fix(plugin-dev): tài liệu hóa kho lưu trữ chỉ dưới dạng chuỗi** | Tài liệu kê khai tuyên bố sai `repository` hỗ trợ định dạng đối tượng, trên thực tế chỉ chấp nhận chuỗi, sửa tài liệu để tránh lỗi cài đặt | Nhà phát triển plugin |
| [#54103](https://github.com/anthropics/claude-code/pull/54103) | Codeturion | **fix(commit-commands): bao phủ tất cả các lệnh gọi bash** | Kỹ năng `/commit-push-pr` gọi các lệnh như `git diff HEAD`, `git branch --show-current` không được liệt kê trong `allowed-tools`, quy trình bị gián đoạn dưới quyền hạn nghiêm ngặt, bao phủ đầy đủ | Người dùng tự động hóa quy trình làm việc Git |
| [#54094](https://github.com/anthropics/claude-code/pull/54094) | Codeturion | **fix: thêm dấu ngoặc kép $CLAUDE_PLUGIN_ROOT trong lệnh hook plugin** | `${CLAUDE_PLUGIN_ROOT}` trong lệnh Hook plugin không được thêm dấu ngoặc kép, khi đường dẫn chứa dấu cách sẽ gây lỗi phân tách từ vựng `/bin/sh` (ví dụ: `/Company Name/`) | Người dùng có đường dẫn doanh nghiệp/tổ chức |
| [#54391](https://github.com/anthropics/claude-code/pull/54391) | onthebed | **docs: làm rõ các giả định tính toán trong báo cáo lỗi** | Trong mẫu báo cáo lỗi, yêu cầu rõ ràng cung cấp đầu vào chính xác, phí giao dịch, trượt giá, làm tròn và các giả định khác cho các vấn đề tính toán, nâng cao khả năng tái hiện | Người báo cáo Issue liên quan đến tài chính/tính toán |
| [#54134](https://github.com/anthropics/claude-code/pull/54134) | sanath8 | **fix: sửa MacOS thành macOS trong README.md** | Hai lần `MacOS` → `macOS` trong phần cài đặt, nhất quán với tên chính thức của Apple và các tham chiếu khác trong kho | Độ chính xác của tài liệu |

> Lưu ý: Trong số 6 PR hôm nay, **Codeturion** đóng góp 4 PR, tập trung vào sửa lỗi biên của hệ thống plugin (Hookify, manifest, xử lý đường dẫn, xử lý quy trình làm việc Git), cho thấy người đóng góp này tham gia sâu vào việc trau chuốt hệ sinh thái plugin.

---

## Xu hướng Yêu cầu Chức năng

Dựa trên phân tích 50 Issues hoạt động, năm hướng cộng đồng quan tâm nhất hiện nay:

| Xu hướng | Issue đại diện | Yêu cầu cốt lõi |
|---------|-----------|---------|
| **🧠 Minh bạch Suy luận** | #8477, #54482 | Buộc hiển thị quá trình tư duy, ngăn chặn khối tư duy bị loại bỏ im lặng — nhà phát triển không tin "hộp đen" suy luận |
| **🔒 Tinh chỉnh Quyền hạn & Sandbox** | #51798, #54477, #54486, #54468 | Quyết định Hook không hoạt động, thao tác nguy hiểm không xác nhận, lỗ hổng quy tắc khớp đường dẫn, cơ chế an ninh cần đáng tin cậy hơn |
| **💰 Khả năng quan sát Thanh toán** | #53262, #51219, #54464 | Điều kiện kích hoạt tính phí bất thường không rõ ràng, hiển thị hạn ngạch không khớp với thực tế, nhiễu loạn hạn ngạch nhiều tài khoản |
| **🖥️ Trải nghiệm Gốc Windows/WSL** | #12506, #40198, #53133, #54488 | Thực thi lệnh WSL, khả năng tương thích ARM64, độ chính xác thống kê đường dẫn, bão táp thử lại mạng |
| **🤖 Khả năng quan sát Hợp tác Đa Agent** | #28765, #48897, #53277 | Thông báo hoàn thành tác vụ từ xa, tiến độ thời gian thực của Agent nhóm, độ tin cậy gửi tin nhắn của Agent tmux con |

---

## Điểm Quan tâm của Nhà phát triển

### 🔴 Điểm Đau Tần suất Cao

1. **"Phí ẩn" & Hộp đen Hạn ngạch** (#53262)
   - Trường hợp kỳ lạ về chuỗi `HERMES.md` kích hoạt phí bổ sung, làm lộ vấn đề tích hợp sâu sắc giữa quy tắc thanh toán và hệ thống hạn ngạch kế hoạch. Nhà phát triển thiếu khả năng giải thích về "tại sao bị tính phí".

2. **Chuỗi Lỗi Kiểm thử Hồi quy** (#49363, #51798)
   - Vấn đề sửa lỗi trong v2.1.92 tái phát trong v2.1.111, cơ chế quyền hạn Hook lại bị ngắt trong 2.1.116+. Đảm bảo tính ổn định không đủ trong quá trình lặp lại nhanh chóng.

3. **Độ tin cậy Phiên dài Opus 4.7** (#54482, #54477)
   - Kết hợp loại bỏ khối tư duy + XÓA không xác nhận, gợi ý rằng quản lý ngữ cảnh và kiểm tra quyền hạn có rủi ro hệ thống trong các phiên bản mô hình mới nhất.

### 🟡 Nhu cầu Xây dựng Hệ sinh thái

4. **Chính sách Tải Công cụ MCP**
   - `alwaysLoad` (v2.1.121) là một giải pháp vá lỗi cho các vấn đề như #52121, cộng đồng cần điều phối công cụ thông minh hơn (ví dụ: tải trước dự đoán dựa trên cấu trúc dự án).

5. **Sự tương đồng Đa nền tảng**
   - Người dùng Windows tiếp tục ở vị trí "công dân hạng hai": Cowork không khả dụng, WSL không được hỗ trợ, lỗi thống kê đường dẫn, vấn đề mã hóa PowerShell.

6. **Quy trình làm việc Từ xa/Bất đồng bộ**
   - Bối cảnh tmux + điều khiển từ xa thiếu thông báo đẩy (#28765), trạng thái Agent con không hiển thị (#48897), cản trở mô hình tự động hóa "khởi động rồi rời đi".

---

*Báo cáo được tạo dựa trên dữ liệu công khai trên GitHub, một số số Issue là định dạng mô phỏng để khớp với đặc điểm dữ liệu.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Báo cáo Hàng ngày Cộng đồng OpenAI Codex CLI | 2026-04-29

---

## 1. Xem nhanh hôm nay

Hoạt động cộng đồng Codex hôm nay rất cao, **hệ thống quyền hạn đang trải qua quá trình chuyển đổi kiến trúc quy mô lớn** — bộ kiểm thử cốt lõi hoàn toàn chuyển từ `SandboxPolicy` cũ sang mô hình `PermissionProfile`, đánh dấu sự trưởng thành của mô hình an ninh sandbox. Đồng thời, **hỗ trợ ngữ cảnh dài 1M token của GPT-5.5** trở thành nhu cầu được cộng đồng thảo luận sôi nổi nhất, trong khi các vấn đề về tính ổn định của Browser Use và chuỗi công cụ MCP trên nền tảng Windows tiếp tục làm phiền các nhà phát triển.

---

## 2. Phát hành Phiên bản

| Phiên bản | Mô tả |
|:---|:---|
| [rust-v0.126.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.9) | Phiên bản xem trước thành phần cốt lõi Rust |
| [rust-v0.126.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.10) | Phiên bản lặp lại trung gian |
| [rust-v0.126.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.11) | Phiên bản alpha mới nhất, phỏng đoán bao gồm các thay đổi liên quan đến hệ thống quyền hạn |

> Ba phiên bản alpha được phát hành dày đặc trong vòng 24 giờ, nhịp độ cực kỳ khẩn trương, nên chú ý nội dung hợp nhất của các PR tương ứng để đánh giá tính ổn định.

---

## 3. Issues Điểm nóng Cộng đồng

| # | Tiêu đề | Trạng thái | Dữ liệu Cốt lõi | Phân tích Tầm quan trọng |
|:---|:---|:---|:---|:---|
| [#19464](https://github.com/openai/codex/issues/19464) | 🔴 MỞ | Hỗ trợ ngữ cảnh 1M token cho GPT-5.5 trong Codex | 74 bình luận / 106 👍 | **Nhu cầu hàng đầu của cộng đồng**. API GPT-5.5 hỗ trợ 1M context, nhưng Codex chỉ mở 400K, nhà phát triển kêu gọi sự tương đồng về khả năng. Ảnh hưởng trực tiếp đến bối cảnh xử lý kho mã nguồn lớn. |
| [#8648](https://github.com/openai/codex/issues/8648) | 🔴 MỞ | Codex trả lời các tin nhắn trước đó thay vì tin nhắn mới nhất | 53 bình luận / 48 👍 | **Lỗi trạng thái hội thoại tồn tại lâu dài**. Trong các hội thoại nhiều lượt, mô hình "lùi lại để trả lời", làm hỏng nghiêm trọng độ tin cậy tương tác, chưa sửa trong 4 tháng gây bất mãn. |
| [#16088](https://github.com/openai/codex/issues/16088) | 🔴 MỞ | Khởi động thread mà không có .codex để lại tệp .codex trống | 32 bình luận / 74 👍 | **Vấn đề hồi quy WSL/Windows**. Lỗi logic khởi tạo sandbox, tệp trống làm bẩn không gian làm việc, lượt thích cao cho thấy phạm vi ảnh hưởng rộng. |
| [#18258](https://github.com/openai/codex/issues/18258) | 🔴 MỞ | macOS: Plugin 'Computer Use không khả dụng' mặc dù có các tệp đi kèm | 30 bình luận / 35 👍 | **Chặn chức năng cốt lõi Computer Use**. Lỗi logic kiểm tra plugin và đường dẫn bộ nhớ đệm, người dùng đã cung cấp workaround, nhưng chờ sửa chính thức. |
| [#2628](https://github.com/openai/codex/issues/2628) | 🟢 ĐÃ ĐÓNG | MCP theo Dự án | 30 bình luận / 141 👍 | **Yêu cầu chức năng có lượt thích cao cuối cùng đã được giải quyết**. Cấu hình MCP cấp dự án là chìa khóa cho sự phối hợp nhóm, 141 👍 là một trong những mức cao nhất mọi thời đại. |
| [#18404](https://github.com/openai/codex/issues/18404) | 🔴 MỞ | Computer Use không khả dụng trên macOS Intel (x86_64) | 14 bình luận / 5 👍 | **Vấn đề phân biệt kiến trúc**. Mac Intel bị loại trừ khỏi hỗ trợ Computer Use, MCP hiển thị đã bật nhưng thực tế không khả dụng, tranh cãi về sự công bằng của nền tảng. |
| [#17318](https://github.com/openai/codex/issues/17318) | 🔴 MỞ | Đôi khi không thể thay đổi mô hình và nỗ lực lý luận | 13 bình luận / 19 👍 | **Lỗi đồng bộ trạng thái UI**. Cài đặt chuyển đổi mô hình và cường độ suy luận ngẫu nhiên không hoạt động, chặn người dùng linh hoạt điều chỉnh chiến lược theo tác vụ. |
| [#8732](https://github.com/openai/codex/issues/8732) | 🔴 MỞ | Thêm hỗ trợ DefaultAzureCredential | 10 bình luận / 18 👍 | **Nhu cầu cấp thiết về an ninh & tuân thủ doanh nghiệp**. Tổ chức Azure vô hiệu hóa xác thực dựa trên khóa không thể sử dụng Codex CLI, ảnh hưởng đến việc áp dụng của doanh nghiệp. |
| [#12862](https://github.com/openai/codex/issues/12862) | 🔴 MỞ | CLI: thêm cờ --worktree và --tmux | 6 bình luận / 30 👍 | **Tối ưu hóa quy trình làm việc nhà phát triển**. git worktree + tmux cô lập phiên chỉ bằng một cú nhấp chuột, phù hợp với nhu cầu lập trình hóa của người dùng cao cấp. |
| [#20025](https://github.com/openai/codex/issues/20025) | 🔴 MỞ | codex 0.125.0 bị treo khi khởi động (Homebrew) | 3 bình luận / 0 👍 | **Lỗi ngay khi phát hành**. Sau khi nâng cấp tự động Homebrew, tiến trình không phản hồi, ngay cả `--version` cũng bị treo, chặn người dùng mới bắt đầu. |

---

## 4. Tiến triển PR Quan trọng

| # | Tiêu đề | Trạng thái | Thay đổi Cốt lõi |
|:---|:---|:---|:---|
| [#20091](https://github.com/openai/codex/pull/20091) | 🔵 MỞ | Cải thiện điều kiện kích hoạt tool_suggest | **Tinh chỉnh hệ thống gợi ý công cụ**. Phân biệt ngữ nghĩa prompt của tool_suggest và tìm kiếm công cụ, vô hiệu hóa gọi công cụ song song để giảm nhầm lẫn. |
| [#20072](https://github.com/openai/codex/pull/20072) | 🟢 ĐÃ ĐÓNG | Hỗ trợ vô hiệu hóa gợi ý công cụ cho các công cụ cụ thể | **Lưu trữ tùy chọn người dùng**. Cấu hình `disable_tool_suggest` được triển khai, hỗ trợ lựa chọn "không còn nhắc nhở" ghi vào `config.toml`. |
| [#20060](https://github.com/openai/codex/pull/20060) | 🔵 MỞ | Thêm nỗ lực lý luận vào các span theo dõi lượt | **Tăng cường khả năng quan sát**. Chèn trường nỗ lực suy luận vào span theo dõi, hỗ trợ lọc trace hiệu suất theo cường độ suy luận của mô hình. |
| [#19442](https://github.com/openai/codex/pull/19442) | 🔵 MỞ | feat: vô hiệu hóa khả năng theo nhà cung cấp mô hình | **Chính sách an ninh đa nhà cung cấp**. Các nhà cung cấp không phải OpenAI như Bedrock có thể buộc vô hiệu hóa các khả năng chưa được hỗ trợ như bộ kết nối ứng dụng, MCP, tạo ảnh, ngăn chặn lỗi ngầm |
| [#20049](https://github.com/openai/codex/pull/20049) | 🔵 MỞ | Phơi bày giới hạn khả năng của nhà cung cấp cho máy chủ ứng dụng | **Hợp đồng hóa giới hạn khả năng**. API Máy chủ Ứng dụng v2 phơi bày giá trị boolean của khả năng nhà cung cấp, giao diện người dùng và giới hạn backend nhất quán |
| [#19160](https://github.com/openai/codex/pull/19160) | 🔵 MỞ | Làm cho trình phân tích luồng apply_patch có trạng thái | **Đột phá hiệu suất**. Phân tích bản vá tăng dần thay vì phân tích lại toàn bộ, benchmark hiển thị **tăng tốc 10-15x**, thay đổi định tính trong bối cảnh chỉnh sửa tệp lớn |
| [#19852](https://github.com/openai/codex/pull/19852) | 🔵 MỞ | Buộc bảo vệ siêu dữ liệu không gian làm việc trong sandbox Linux | **Tăng cường an ninh**. Bộ điều hợp bubblewrap Linux buộc bảo vệ các thư mục siêu dữ liệu như `.git`, `.agents`, `.codex` ở chế độ chỉ đọc, ngăn chặn xóa nhầm. |
| [#19949](https://github.com/openai/codex/pull/19949) | 🔵 MỞ | Hỗ trợ phát hiện và nhập MCP/Subagents/hooks/commands từ bên ngoài | **Công cụ di chuyển hệ sinh thái**. crate `codex-external-agent-migration` hỗ trợ di chuyển cấu hình từ các khung Agent bên ngoài sang định dạng gốc của Codex. |
| [#18902](https://github.com/openai/codex/pull/18902) | 🔵 MỞ | Làm sạch xử lý hook SessionStart và input | **Sửa lỗi thứ tự thực thi Hook**. `SessionStart` cần thực thi trước `UserPromptSubmit`, đảm bảo hook khởi tạo chính xác khi khởi động. |
| [#19840](https://github.com/openai/codex/pull/19840) | 🔵 MỞ | Thêm trạng thái kích hoạt hook được lưu trữ | **Lưu trữ trạng thái Hook**. Tùy chọn hook của người dùng có thể có hiệu lực giữa các phiên, phân biệt hook do người dùng kiểm soát và hook bắt buộc do quản trị viên. |

> **Chủ đề Chuyển đổi Kiến trúc**: 8 PR (chuỗi #20030-#20041) do bolinfest dẫn đầu đã hệ thống hóa việc di chuyển kiểm thử cốt lõi từ `SandboxPolicy` sang `PermissionProfile`, đây là dấu hiệu quan trọng cho sự trưởng thành của mô hình quyền hạn Codex.

---

## 5. Xu hướng Yêu cầu Chức năng

```
┌─────────────────────────────────────────────────────────┐
│  🔥 Hỗ trợ Ngữ cảnh Dài (GPT-5.5 1M token)    ████████████  #1 │
│  🔒 Xác thực Cấp Doanh nghiệp (Azure SSO/Keyless)      ████████░░░░  #2 │
│  🖥️  Tính ổn định IDE/Máy tính để bàn (macOS/Windows)   ███████░░░░░  #3 │
│  🔧 MCP/Hệ sinh thái Công cụ (Cấu hình cấp dự án, Nhập)      ██████░░░░░░  #4 │
│  🧠 Khả năng Kiểm soát Hội thoại (Chỉnh sửa bất kỳ tin nhắn nào, fork)       █████░░░░░░░  #5 │
│  ⚡ Hiệu suất & Khả năng Quan sát (theo dõi, tốc độ khởi động)    ████░░░░░░░░  #6 │
│  🏠 Cô lập Môi trường (worktree, cấu hình nhiều tài khoản)       ████░░░░░░░░  #7 │
└─────────────────────────────────────────────────────────┘
```

**Phân tích Chính**:
- **Ngữ cảnh dài là điểm khác biệt cạnh tranh**: Khả năng 1M của GPT-5.5 chưa được giải phóng hoàn toàn, nhà phát triển rõ ràng so sánh khoảng cách năng lực giữa API và sản phẩm Codex
- **Windows Trở thành Công dân Hạng hai**: Browser Use, MCP, Computer Use tập trung bùng nổ vấn đề trên Windows, cần xem xét lại chính sách nền tảng
- **Mô hình Quyền hạn Chuyển từ "Sandbox" sang "Hồ sơ Cấu hình"**: Việc di chuyển `PermissionProfile` thay thế `SandboxPolicy` , báo hiệu các điều khiển an ninh chi tiết hơn, thân thiện hơn với người dùng

---

## 6. Điểm Quan tâm của Nhà phát triển

### 🔴 Điểm Đau Mang tính Chặn

| Vấn đề | Biểu hiện Điển hình | Ảnh hưởng |
|:---|:---|:---|
| **Khởi động/Nâng cấp ngay lập tức gây lỗi** | Homebrew 0.125.0 bị treo, lỗi tổng hợp GPU Intel Mac | Mất người dùng mới, quy trình làm việc của người dùng hiện tại bị gián đoạn |
| **Khả năng cốt lõi khác biệt nền tảng** | Computer Use Intel Mac không hỗ trợ, Windows Browser Use thất bại | Không chắc chắn về lựa chọn công nghệ, tiêu chuẩn hóa nhóm bị cản trở |
| **Trạng thái Hội thoại Không đáng tin cậy** | Trả lời sai vị trí, cài đặt mô hình không hoạt động, cài đặt không đồng bộ | Mất niềm tin, tăng chi phí kiểm tra thủ công |

### 🟡 Yêu cầu Hiệu suất Tần suất Cao
- **Chỉnh sửa bất kỳ tin nhắn nào** (#18708): ô bị ô nhiễm thanh bên trái, cần chỉnh sửa tại chỗ cho các trường hợp chỉnh sửa đơn giản
- **Trực quan hóa Thực thi Lệnh** (#19891, #20090): Tóm tắt tổng hợp "Đã chạy N lệnh" ẩn chi tiết quan trọng, khó gỡ lỗi
- **Khôi phục WSL/Trạng thái Lớn Hiệu suất** (#20103): bộ chọn resume bị chậm trên JSONL lớn, không tìm thấy chỉ mục sqlite

### 🟢 Kỳ vọng Mở rộng Hệ sinh thái
- **Di chuyển Cấu hình Agent Bên ngoài** (#19949): giảm ma sát khi chuyển đổi từ các công cụ như Cursor, Claude Code
- **Hệ sinh thái Hook Trưởng thành** (#19840, #19921): thông báo chế độ plan, trạng thái kích hoạt được lưu trữ, tiến hóa thành IDE có thể lập trình

---

*Báo cáo được tạo dựa trên dữ liệu công khai trên GitHub, số bình luận PR là `undefined` biểu thị trường này không trả về giá trị hợp lệ.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Báo cáo Hàng ngày Cộng đồng Gemini CLI | 2026-04-29

## Xem nhanh hôm nay

Hoạt động cộng đồng hôm nay khá cao, phiên bản xem trước v0.41.0 đang tăng tốc lặp lại, đồng thời việc tái cấu trúc kiến trúc ACP (Agent Communication Protocol) đã bước vào giai đoạn quan trọng. Việc sửa lỗi tương thích đầu cuối được triển khai dày đặc, các tình huống Windows/SSH và các vấn đề nhập bàn phím được chú trọng. Tính ổn định của hệ thống Agent phụ vẫn là điểm đau lớn nhất của cộng đồng, các vấn đề thuộc loại "suy nghĩ vô hạn" tiếp tục gây phản hồi từ người dùng.

---

## Phát hành Phiên bản

### v0.41.0-nightly.20260428.gc17400b83 (Nightly Mới nhất)
- **Sửa lỗi chủ đề tùy chỉnh**: Hoàn thiện khóa `response` vào lược đồ văn bản chủ đề, giải quyết lỗi cấu hình chủ đề tùy chỉnh
- **Phủ định cập nhật thủ công**: Khi cập nhật tự động thất bại, cung cấp lệnh cập nhật thủ công, cải thiện trải nghiệm mạng doanh nghiệp

### v0.41.0-preview.0
- **Tối ưu hóa tương tác**: Chỉ hiển thị gợi ý `list` khi nhập trống, giảm nhiễu gợi ý

### v0.40.0 (Phiên bản Chính thức)
- **Độ ổn định SSL**: Thêm cơ chế thử lại cho lỗi truyền dữ liệu OpenSSL 3.x, giải quyết ngắt kết nối do biến động mạng

[Changelog đầy đủ](https://github.com/google-gemini/gemini-cli/compare/v0.40.0-preview.4...v0.40.0-preview.5)

---

## Issues Điểm nóng Cộng đồng (10 cái)

| # | Trạng thái | Tiêu đề | Tầm quan trọng | Phản hồi Cộng đồng |
|---|------|------|--------|----------|
| [#26146](https://github.com/google-gemini/gemini-cli/issues/26146) | 🔴 MỞ | **Vòng lặp lỗi mô hình vô hạn khi gọi Agent con** | **Cao** — Chặn quy trình làm việc đa Agent, chỉ định `gemini-3-flash-preview` trong YAML frontmatter sẽ kích hoạt | Mới báo cáo, chờ phản hồi chính thức |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | 🔴 MỞ | Lệnh Shell bị treo sau khi thực thi, hiển thị "chờ nhập" | **Cao** — Lỗi chuỗi thực thi cơ bản, ảnh hưởng hiệu suất làm việc hàng ngày | 👍 3, người dùng khẩn cấp |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | 🔴 MỞ | Đánh giá đọc/tìm kiếm/ánh xạ tệp nhận biết AST | **Cấp chiến lược** — EPIC chính thức, liên quan đến độ chính xác hiểu mã và hiệu quả Token | 👍 1, theo dõi dài hạn |
| [#18979](https://github.com/google-gemini/gemini-cli/issues/18979) | 🔴 MỞ | `logPrompts=false` vẫn ghi lại gợi ý người dùng vào nhật ký api_request | **An ninh & Tuân thủ** — Cấu hình quyền riêng tư không hoạt động, nhạy cảm với người dùng doanh nghiệp | Liên tục chưa được giải quyết |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | 🔴 MỞ | Hỏi lại quyền truy cập tệp tương tự, "cho phép tất cả các phiên" không hoạt động | **Điểm đau trải nghiệm** — Cơ chế ghi nhớ tin cậy không đáng tin cậy | Nhiều người dùng tái hiện |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | 🔴 MỞ | Mô hình tạo tập lệnh tạm thời ở vị trí ngẫu nhiên | **Ô nhiễm không gian làm việc** — Chi phí dọn dẹp cao |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 🔴 MỞ | Gây ra lỗi 400 khi có >128 công cụ | **Điểm nghẽn quy mô** — Hạn chế cứng trong bối cảnh công cụ phình to | Cần sàng lọc công cụ thông minh |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | 🔴 MỞ | Định tuyến bộ nhớ: phân tách toàn cục vs cấp dự án | **Thiết kế kiến trúc** — Cơ sở hạ tầng cốt lõi của hệ thống bộ nhớ | 👍 2, cộng đồng mong đợi |
| [#25520](https://github.com/google-gemini/gemini-cli/issues/25520) | ✅ ĐÃ ĐÓNG | "Luôn suy nghĩ" không phản hồi | **Vấn đề kinh điển** — Đã đóng nhưng các vấn đề tương tự #24026, #25518 vẫn thường xuyên xảy ra | Đánh dấu là có thể trùng lặp |
| [#26151](https://github.com/google-gemini/gemini-cli/issues/26151) | 🔴 MỞ | Quy trình làm việc tài liệu thất bại do vấn đề tin cậy thư mục | **Chặn CI** — Ảnh hưởng trực tiếp đến xuất bản tự động | Có PR đi kèm đang sửa |

---

## Tiến triển PR Quan trọng (10 cái)

| # | Trạng thái | Tiêu đề | Nội dung Chức năng/Sửa lỗi |
|---|------|------|---------------|
| [#26143](https://github.com/google-gemini/gemini-cli/pull/26143) | 🟡 MỞ | **Tái cấu trúc mô-đun hóa máy khách ACP (Giai đoạn 1)** | Tách `acpClient.ts` độc lập thành các mô-đun chuyên dụng, tiêu chuẩn hóa tên tiền tố `acp`, làm nền tảng cho việc mở rộng giao thức giao tiếp Agent |
| [#26149](https://github.com/google-gemini/gemini-cli/pull/26149) | 🟡 MỞ | Phơi bày nhận dạng danh tính thời gian chạy để quan sát bên ngoài | Ghi `runtime.json` (pid, sessionId, workDir, v.v.) vào thư mục tạm thời của phiên, cho phép công cụ bên ngoài phát hiện trạng thái hoạt động của CLI |
| [#26150](https://github.com/google-gemini/gemini-cli/pull/26150) | 🟡 MỞ | Sửa lỗi vấn đề tin cậy quy trình làm việc tài liệu | Thêm cấu hình tin cậy không gian làm việc cho `docs-audit.yml` và `release-notes.yml`, giải quyết #26151 |
| [#25980](https://github.com/google-gemini/gemini-cli/pull/25980) | 🟡 MỞ | Ngăn lỗi khi @ đề cập đến Blob không phải đường dẫn | Khi dán JSON hoặc mô hình ảo đường dẫn gây ra `ENAMETOOLONG`, giảm thiểu một cách duyên dáng, không còn từ chối không xử lý |
| [#25352](https://github.com/google-gemini/gemini-cli/pull/25352) | 🟡 MỞ | Tìm kiếm bảng điều khiển gỡ lỗi & lọc cấp độ | Hỗ trợ tìm kiếm từ khóa và lọc cấp độ nhật ký trong bối cảnh nhật ký khối lượng lớn, giảm thiểu độ trễ cuộn |
| [#26148](https://github.com/google-gemini/gemini-cli/pull/26148) | 🟡 MỞ | Sửa lỗi thiếu đường viền tin nhắn nhóm công cụ | Vấn đề hình ảnh đường viền trên cùng thiếu cho công cụ đầu tiên sau `update_topic`, nâng cao tính toàn vẹn của UI |
| [#25605](https://github.com/google-gemini/gemini-cli/pull/25605) | 🟡 MỞ | Chuyển tiếp tín hiệu chấm dứt đến tiến trình con | Sau khi `relaunchAppInChildProcess`, tín hiệu tiến trình cha (SIGTERM/SIGHUP) được truyền chính xác, giải quyết tiến trình con mồ côi dưới sự giám sát của systemd/ACP |
| [#26088](https://github.com/google-gemini/gemini-cli/pull/26088) | 🟡 MỞ | F10 làm phím dự phòng cho chế độ phê duyệt | Tương thích phủ đầu trên Windows/WezTerm khi phân tích phím tắt `Shift+Tab` bị lỗi |
| [#25135](https://github.com/google-gemini/gemini-cli/pull/25135) | 🟡 MỞ | **Lệnh `/enhance` nâng cao chất lượng prompt** | Dựa trên lịch sử hội thoại, gọi LLM để viết lại/mở rộng prompt người dùng, giảm ngưỡng kỹ thuật prompt |
| [#26141](https://github.com/google-gemini/gemini-cli/pull/26141) | ✅ ĐÃ ĐÓNG | Hoàn thiện trường OAuth Agent con | Hoàn thiện các trường còn thiếu như `issuer`, `audiences`, `redirect_uri` trong `agentLoader.ts`, khớp với lược đồ `MCPOAuthConfig` đầy đủ |

---

## Xu hướng Nhu cầu Chức năng

Năm hướng cộng đồng quan tâm chính được rút ra từ 50 Issues hoạt động:

| Hướng | Độ nóng | Issue đại diện | Yêu cầu cốt lõi |
|------|------|-----------|----------|
| **Tính ổn định Hệ thống Agent** | 🔥🔥🔥🔥🔥 | #26146, #25166, #23571, #23582 | Gọi đa Agent, kế thừa quyền hạn, treo khi thực thi, quản lý tệp tạm thời |
| **Khả năng Tương thích Đầu cuối (Windows/SSH/Bàn phím Đặc biệt)** | 🔥🔥🔥🔥 | #24202, #24915, #26088, #26092 | Phát hiện phiên SSH, hiển thị đường viền, Enter bàn phím số, chế độ DECKPAM |
| **Kiến trúc Hệ thống Bộ nhớ** | 🔥🔥🔥🔥 | #22819, #22809, #22746 | Phân tách bộ nhớ toàn cục/cấp dự án, chính sách ghi chủ động, ánh xạ mã nhận biết AST |
| **An ninh & Quyền riêng tư** | 🔥🔥🔥 | #18979, #24916, #22672 | Che giấu nhật ký, lưu trữ quyền hạn, chặn thao tác nguy hiểm |
| **Hiệu suất & Khả năng Quan sát** | 🔥🔥🔥 | #25352, #24470, #24353 | Tối ưu hóa cuộn phiên dài, hệ thống đánh giá cấp thành phần, hiệu quả gỡ lỗi |

---

## Điểm Quan tâm của Nhà phát triển

### 🔴 Điểm Đau Tần suất Cao

1. **Cụm vấn đề "Treo/Không phản hồi"**
   - Biểu hiện đa dạng: Suy nghĩ vô hạn (#25520), chờ nhập sau khi thực thi Shell (#25166), gọi Agent con thất bại vô hạn (#26146)
   - Điểm chung: Thiếu cơ chế thời gian chờ/nhịp tim dưới cùng, người dùng chỉ có thể ép buộc chấm dứt

2. **Khoảng cách Trải nghiệm Nhà phát triển Windows**
   - Mã hóa ký tự lạ SSH sau (#24202), đường dẫn tạm thời PowerShell bất thường (#25216), lỗi phân tích phím WezTerm (#26088)
   - Logic phát hiện đầu cuối (#24546) là cơ sở sửa lỗi, nhưng tiến triển chậm

3. **"Nghịch lý Bộ nhớ" của Hệ thống Quyền hạn**
   - Vẫn liên tục hỏi sau khi người dùng chọn rõ ràng "cho phép tất cả các phiên" (#24916), cơ chế lưu trữ trạng thái tin cậy có lỗi

### 🟡 Nhu cầu Mới Nổi

- **Tích hợp Công cụ Bên ngoài**: Tiết lộ danh tính thời gian chạy (#26149) phản ánh nhu cầu tích hợp của hệ sinh thái ACP/IDE
- **Hỗ trợ Kỹ thuật Prompt Engineering**: Lệnh `/enhance` (#25135) đại diện cho ý tưởng sản phẩm hóa nhằm giảm ngưỡng sử dụng
- **Khám phá Thương mại hóa Agent**: Đề xuất Agentic Commerce xuất hiện trong cộng đồng (#25275, #25471), mặc dù đã đóng nhưng cho thấy không gian tưởng tượng của hệ sinh thái