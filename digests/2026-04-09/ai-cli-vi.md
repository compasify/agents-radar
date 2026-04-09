# Nhật ký Cộng đồng Công cụ AI CLI 2026-04-09

> Thời gian tạo: 2026-04-09 00:10 UTC | Bao phủ công cụ: 8

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

# Báo cáo Phân tích So sánh Ngang Hệ sinh thái Công cụ AI CLI 2026-04-09

## 1. Toàn cảnh Hệ sinh thái

Hiện tại, các công cụ AI CLI đã bước vào giai đoạn thứ hai của **đánh bóng chức năng chuyên sâu và xây dựng rào cản hệ sinh thái**. Claude Code dẫn đầu về sự trưởng thành và khả năng thâm nhập doanh nghiệp, nhưng khủng hoảng niềm tin về phí tính phí đang làm suy yếu lợi thế của nó; OpenAI Codex đang đuổi kịp với các vòng lặp cập nhật dày đặc, với các khoản nợ nền tảng Windows là điểm yếu lớn nhất; Google Gemini CLI và các công cụ nội địa (Kimi, Qwen) đang tăng tốc để đối chiếu chức năng, với các đề xuất cấp tiến như viết lại TypeScript, hệ thống quy tắc đa lớp đang xuất hiện. Toàn ngành đang thể hiện xu hướng **"trải nghiệm cốt lõi ngày càng giống nhau, sự khác biệt nằm ở chi tiết"**—quản lý hội thoại, nén ngữ cảnh, hệ sinh thái MCP trở thành chiến trường chung, trong khi tương tác giọng nói, bảo mật hộp cát, và độ sâu tích hợp IDE bắt đầu phân hóa cục diện cạnh tranh.

---

## 2. So sánh Hoạt động của từng Công cụ

| Công cụ | Issues Hôm nay | PRs Hôm nay | Phát hành Phiên bản | Động thái Quan trọng |
|:---|:---|:---|:---|:---|
| **Claude Code** | 10+ Điểm nóng | 10+ | v2.1.97 | Chế độ Focus View, làm mới tự động thanh trạng thái; Khủng hoảng phí tính phí gói Max (478 bình luận) |
| **OpenAI Codex** | 10+ Điểm nóng | 10+ | 6 phiên bản Alpha | Vòng lặp cập nhật dày đặc rust-v0.119.0-alpha.19~24; Tiêu thụ Token quá nhanh (491 bình luận) |
| **Gemini CLI** | 10+ Điểm nóng | 10+ | v0.37.0 → v0.39.0-nightly | 3 phiên bản liên tiếp, trực quan hóa hệ thống Hook; Đấu tranh với khả năng tương thích Terminal Windows |
| **GitHub Copilot CLI** | 10+ Điểm nóng | 3 | v1.0.22-0 | Giới hạn độ sâu của proxy phụ; Khủng hoảng 404 sổ đăng ký doanh nghiệp MCP |
| **Kimi Code CLI** | 9 Điểm nóng | 10+ | - | n-WN 6 PR trong một ngày tinh chỉnh tương tác Shell; Đề xuất viết lại TypeScript gây tranh luận |
| **OpenCode** | 10+ Điểm nóng | 10+ | v1.4.0 | Thay đổi đột phá SDK (tinh giản siêu dữ liệu Diff); Chế độ giọng nói, phát triển đăng ký tài nguyên MCP |
| **Pi** | 37 Issues | 8 | v0.66.0/v0.66.1 | Tối ưu hóa xác thực Anthropic + Trứng phục sinh Earendil; Cải thiện UX sổ đăng ký mô hình |
| **Qwen Code** | 10+ Điểm nóng | 10+ | v0.14.2 | Sửa lỗi khẩn cấp màn hình trắng VS Code; Đẩy mạnh chức năng v0.15.0 (/branch, /statusline) |

> **Phân cấp Hoạt động**: Claude Code/Codex/Gemini là nhóm đầu tiên (hoạt động cao trưởng thành); Kimi/Qwen/OpenCode/Pi là nhóm thứ hai (giai đoạn lặp lại nhanh); Copilot CLI tương đối kín đáo (chủ yếu là động lực nội bộ).

---

## 3. Hướng chức năng Quan tâm chung

| Hướng chức năng | Công cụ liên quan | Nhu cầu cụ thể và bằng chứng |
|:---|:---|:---|
| **Minh bạch phí và kiểm soát sử dụng** | Claude Code, OpenAI Codex | Gói Claude Max "tiêu hao phiên bất thường" (#38335, 478 bình luận); Codex "Token cháy quá nhanh" (#14593, 491 bình luận). Nhu cầu cốt lõi: bảng điều khiển thời gian thực, cảnh báo sử dụng, chi phí có thể dự đoán |
| **Bổ sung trải nghiệm nền tảng Windows** | OpenAI Codex, Gemini CLI, OpenCode, Kimi | Codex "Cửa hàng hạn chế triển khai doanh nghiệp" (#13993); Gemini "Phím mũi tên không hoạt động" (#20675); OpenCode "Lỗi lệnh shell song song" (#21550); Kimi "Ghostty TTY bị đóng băng" (#1807). Nhà phát triển Windows vẫn là "công dân hạng hai" |
| **Quản lý hội thoại và nén ngữ cảnh** | Claude Code, Qwen Code, Gemini CLI, OpenCode | P0 cấp độ Qwen "nén ngữ cảnh đa lớp" (#3017) + "Fork Subagent" (#3016); Plugin cộng đồng Claude Code #26328 (trình quản lý hội thoại); Gemini "Định tuyến bộ nhớ: Toàn cục vs Cấp dự án" (#22819). Độ ổn định của hội thoại dài trở thành thách thức ở cấp kiến trúc |
| **Quản trị hệ sinh thái MCP/Công cụ** | GitHub Copilot CLI, OpenCode, Qwen Code, Claude Code | Copilot "Sổ đăng ký MCP 404 chặn tất cả máy chủ" (#2498); OpenCode "Đăng ký tài nguyên MCP" (#20672); Qwen "VS Code MCP không hoạt động" (#3033); Claude Code "Truyền biến môi trường MCP" (#11927). Phát hiện công cụ, ủy quyền, phân mảnh cấu hình |
| **Trải nghiệm TUI và khả năng quan sát** | Claude Code, Gemini CLI, Kimi, Pi | Claude "Luôn hiển thị quá trình suy nghĩ" (#8477, 195 👍); Gemini "Trực quan hóa hệ thống Hook UI" (v0.39.0); Kimi "Hoàn thành dấu gạch chéo bằng Enter một lần" (#1793); Pi "Lỗi cuộn terminal" (#2940). Mật độ thông tin và minh bạch trạng thái là chiến trường chung |

---

## 4. Phân tích Định vị Khác biệt

| Công cụ | Trọng tâm Cốt lõi | Hồ sơ Người dùng Mục tiêu | Đặc điểm Tuyến kỹ thuật |
|:---|:---|:---|:---|
| **Claude Code** | Trợ lý mã cấp doanh nghiệp, nhiệm vụ kỹ thuật sâu | Nhà phát triển chuyên nghiệp, kỹ sư ML/hệ thống (ví dụ: tác giả #42796 stellaraccident là người đóng góp cốt lõi cho MLIR) | Mã nguồn đóng nhưng rất trưởng thành; Tối ưu hóa mật độ thông tin TUI (Focus View); Tích hợp sâu với mô hình Anthropic |
| **OpenAI Codex** | Luồng công việc phát triển toàn diện, API Thời gian thực | Nhà phát triển toàn diện, các tình huống yêu cầu giọng nói/cộng tác thời gian thực | Đang viết lại CLI Rust; Lặp lại Alpha dày đặc; Chính sách bảo mật hộp cát tương đối bảo thủ |
| **Gemini CLI** | Kiến trúc Agent tiên tiến, tích hợp hệ sinh thái Google | Người dùng Google Cloud, nhà phát triển tiên phong khám phá bộ nhớ Agent/proxy phụ | Thử nghiệm chức năng cấp tiến (nhận biết AST, định tuyến bộ nhớ, chế độ proxy phụ); Khả năng mở rộng hệ thống Hook |
| **GitHub Copilot CLI** | Tích hợp gốc vào luồng công việc GitHub, tuân thủ doanh nghiệp | Người dùng GitHub Enterprise, doanh nghiệp yêu cầu kiểm toán tuân thủ | Tích hợp sâu với nền tảng GitHub; Kiểm soát chính sách MCP nghiêm ngặt; Tốc độ lặp lại tương đối bảo thủ |
| **Kimi Code CLI** | Thay thế nội địa, đối chiếu trải nghiệm Claude Code | Nhà phát triển tiếng Trung, tìm kiếm trợ lý AI bản địa hóa | Python là ngăn xếp chính hiện tại, đề xuất viết lại TypeScript (#1707); Tinh chỉnh tương tác nhanh (n-WN 6 PR trong một ngày) |
| **OpenCode** | Có thể kiểm toán mã nguồn mở, đổi mới giọng nói/đa phương thức | Người dùng nhạy cảm về bảo mật, yêu cầu triển khai riêng, khám phá tương tác giọng nói | Kết hợp Dart/TypeScript mã nguồn mở; Chế độ giọng nói (#20677), đăng ký tài nguyên MCP dẫn đầu |
| **Pi** | Tổng hợp nhiều mô hình, nhẹ nhàng linh hoạt | Người thử nghiệm mô hình, cần chuyển đổi nhanh các điểm cuối tổng hợp như OpenRouter/Vercel | Khám phá động sổ đăng ký mô hình (#2957); Quản lý hội thoại chi tiết như /clone /fork |
| **Qwen Code** | Ưu tiên tích hợp IDE, kỹ thuật ngữ cảnh | Người dùng VS Code nặng, cần tích hợp cấp độ hoàn thành mã | Phát hành kép (CLI + plugin VS Code); Đầu tư kiến trúc nén ngữ cảnh cấp P0 |

---

## 5. Độ nóng và Mức độ Trưởng thành của Cộng đồng

```
Mức độ trưởng thành ╲ Hoạt động    Thấp ◄─────────────────► Cao
    ▲
    │
  Cao │    Copilot CLI          Claude Code
    │    (ổn định kín đáo)       (khủng hoảng phí phí nhưng trưởng thành)
    │
    │         OpenCode ─────►  Gemini CLI
    │    (chức năng cấp tiến)     (lặp lại dày đặc)
    │
    │    Pi ◄──────────────►  Codex
    │    (nhẹ đa mô hình)      (giai đoạn đuổi kịp hoạt động cao)
    │
  Thấp │         Kimi ─────────► Qwen
    │    (giai đoạn phân kỳ kiến trúc) (giai đoạn nợ IDE)
    │
    └────────────────────────────────────────►
```

| Góc phần tư | Công cụ | Đặc điểm |
|:---|:---|:---|
| **Trưởng thành Cao + Hoạt động Cao** | Claude Code | Quy mô cộng đồng lớn nhất, nhưng khủng hoảng niềm tin phí phí có thể đảo ngược lợi thế |
| **Trưởng thành Cao + Hoạt động Thấp** | Copilot CLI | Ổn định cấp doanh nghiệp, nhưng đổi mới chức năng tụt hậu so với kỳ vọng cộng đồng |
| **Trưởng thành Thấp + Hoạt động Cao** | Gemini CLI, Kimi, Qwen, OpenCode | Đối chiếu chức năng nhanh chóng, nợ kiến trúc và các vấn đề thích ứng nền tảng song song |
| **Trưởng thành Thấp + Hoạt động Thấp** | - | Hiện tại không có, Pi nằm giữa nhẹ nhàng và hoạt động |

**Tín hiệu lặp lại nhanh**: Gemini (3 phiên bản/ngày), Kimi (đề xuất viết lại TypeScript), Qwen (tối ưu hóa cấp kiến trúc P0), OpenCode (đổi mới giọng nói/MCP) đang trong giai đoạn mở rộng chức năng; Codex (6 Alpha/ngày) đang trong giai đoạn chuyển đổi ngăn xếp kỹ thuật.

---

## 6. Tín hiệu Xu hướng Đáng chú ý

| Xu hướng | Bằng chứng | Giá trị Tham khảo cho Nhà phát triển |
|:---|:---|:---|
| **Khủng hoảng niềm tin về mô hình phí** | Gói Claude Max + Kinh doanh Codex cùng bùng nổ sử dụng bất thường (tổng cộng 969 bình luận) | **Đánh giá khả năng kiểm soát chi phí**: Lựa chọn doanh nghiệp cần ưu tiên xác minh cơ chế giám sát và cảnh báo sử dụng, tránh rủi ro "phí tính phí hộp đen" |
| **Nén ngữ cảnh trở thành điểm phân chia kiến trúc** | P0 cấp độ Qwen "nén đa lớp", Gemini "nhận biết AST để đọc", thảo luận "định tuyến bộ nhớ" của cộng đồng Claude Code | **Cần thiết cho các tình huống hội thoại dài**: Nhiệm vụ kỹ thuật phức tạp yêu cầu xem xét chiến lược quản lý ngữ cảnh của công cụ, không chỉ nhìn vào kích thước cửa sổ |
| **Hệ sinh thái MCP từ "kết nối" sang "quản trị"** | Chặn chính sách Copilot, truyền biến môi trường Claude Code, đăng ký tài nguyên OpenCode | **Độ phức tạp tích hợp công cụ tăng lên**: Đánh giá trải nghiệm khám phá, ủy quyền, quản lý cấu hình của máy chủ MCP, không chỉ số lượng |
| **Nợ trải nghiệm nhà phát triển Windows hiện rõ** | 5 trên 8 công cụ có vấn đề dành riêng cho Windows, tổng cộng hơn 50 Issues | **Cân nhắc lựa chọn cho nhóm đa nền tảng**: Nhóm có Windows chiếm đa số cần ưu tiên xác minh khả năng tương thích terminal, không giả định "hỗ trợ phổ biến" |
| **Giọng nói/Đa phương thức từ chiêu trò sang luồng công việc** | Thực hiện đầy đủ chế độ giọng nói OpenCode (STT/TTS/VAD/ngắt lời), vòng lặp API Thời gian thực Codex | **Cổng tương tác thế hệ tiếp theo**: Nhóm khám phá có thể bố trí trước luồng công việc điều khiển bằng giọng nói, nhưng cần đánh giá độ ổn định |
| **Căng thẳng giữa mã nguồn mở và mã nguồn đóng gia tăng** | 3 PR mã nguồn mở của Claude Code (#41447/#41518/#41611), đề xuất viết lại TypeScript của Kimi | **Khả năng kiểm toán trở thành nhu cầu cấp thiết của doanh nghiệp**: Các tình huống nhạy cảm như tài chính/chính phủ ưu tiên đánh giá các giải pháp mã nguồn mở hoặc có thể kiểm toán mã nguồn |

---

*Báo cáo được tạo dựa trên dữ liệu công khai GitHub của từng công cụ vào ngày 2026-04-09 | Phù hợp cho người ra quyết định kỹ thuật đánh giá lựa chọn, nhà phát triển theo dõi sự phát triển của hệ sinh thái*

---

## Báo cáo Chi tiết Từng Công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Điểm nóng Cộng đồng Claude Code Skills

> Nguồn dữ liệu: [anthropics/skills](https://github.com/anthropics/skills)

# Báo cáo Điểm nóng Cộng đồng Claude Code Skills (2026-04-09)

---

## 1. Xếp hạng Skills Phổ biến (theo mức độ quan tâm của cộng đồng)

| Hạng | Skill | Trạng thái | Mô tả chức năng | Điểm nóng thảo luận cộng đồng |
|:---|:---|:---|:---|:---|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | 🟡 Mở | Kiểm soát chất lượng bố cục tài liệu do AI tạo ra (ngăn dòng đơn, dòng góa, đánh số sai) | Giải quyết các điểm yếu phổ biến của tài liệu do Claude tạo ra; tác giả nhấn mạnh "người dùng hiếm khi yêu cầu bố cục tốt một cách chủ động, nhưng vấn đề thì ở khắp mọi nơi" |
| 2 | **[skill-quality-analyzer](https://github.com/anthropics/skills/pull/83) + [skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | 🟡 Mở | Công cụ phân tích Skill ở hai khía cạnh chất lượng và bảo mật | Hướng meta-skill (siêu kỹ năng), lấp đầy khoảng trống công cụ đánh giá Skill chính thức |
| 3 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | 🟡 Mở | Cải thiện sự rõ ràng và khả năng thực thi của Skill thiết kế frontend | Tập trung vào "mọi chỉ dẫn đều có thể được thực thi trong một lượt hội thoại", chống lại vấn đề Skill quá dài |
| 4 | **[ODT](https://github.com/anthropics/skills/pull/486)** | 🟡 Mở | Skill tạo văn bản OpenDocument, điền mẫu và phân tích cú pháp ODT→HTML | Lấp đầy khoảng trống hệ sinh thái văn phòng mã nguồn mở/LibreOffice; Hỗ trợ định dạng tiêu chuẩn ISO |
| 5 | **[SAP-RPT-1-OSS](https://github.com/anthropics/skills/pull/181)** | 🟡 Mở | Skill phân tích dự đoán của mô hình cơ sở bảng mã nguồn mở SAP | Tình huống ERP doanh nghiệp; Theo dõi nhanh mô hình mới của SAP TechEd 2025 |
| 6 | **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** | 🟡 Mở | Kiểm kê và kiểm toán mã nguồn (mã cũ, tệp không sử dụng, phình to cơ sở hạ tầng) | Quy trình hệ thống hóa 10 bước, xuất CODEBASE-STATUS.md làm nguồn sự thật duy nhất |
| 7 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | 🟡 Mở | Hệ thống bộ nhớ bền vững cho Agent AI giữa các hội thoại | Giải quyết điểm yếu cốt lõi về mất ngữ cảnh của Claude Code; Cơ chế gọi `proactive_context` |
| 8 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | 🟡 Mở | Các mẫu kiểm thử toàn diện (Testing Trophy, AAA, React Testing Library, E2E) | Vượt ra ngoài hướng dẫn kiểm thử cơ bản, bao gồm cả khuôn khổ ra quyết định "kiểm tra gì/không kiểm tra gì" |

---

## 2. Xu hướng Nhu cầu Cộng đồng (Tổng hợp Issues)

| Hướng | Issue Đại diện | Nhu cầu Cốt lõi |
|:---|:---|:---|
| **Quản trị và Bảo mật cấp Doanh nghiệp** | [#412](https://github.com/anthropics/skills/issues/412) [Agent Governance](https://github.com/anthropics/skills/issues/412), [#492](https://github.com/anthropics/skills/issues/492) [Lạm dụng Ranh giới Tin cậy](https://github.com/anthropics/skills/issues/492) | Thực thi chính sách, phát hiện mối đe dọa, theo dõi kiểm toán; Rủi ro an ninh của Skill cộng đồng giả mạo chính thức |
| **Chia sẻ Skill Cấp Tổ chức** | [#228](https://github.com/anthropics/skills/issues/228) [chia sẻ toàn bộ tổ chức](https://github.com/anthropics/skills/issues/228) | Từ bỏ việc truyền tệp qua Slack + tải lên thủ công, cần thư viện chia sẻ tích hợp hoặc liên kết trực tiếp |
| **Tương tác Giao thức MCP** | [#16](https://github.com/anthropics/skills/issues/16) [Xuất Skill dưới dạng MCP](https://github.com/anthropics/skills/issues/16) | Chuẩn hóa khả năng của Skill thành công cụ MCP, cho phép tái sử dụng giữa các hệ thống AI |
| **Hỗ trợ AWS Bedrock** | [#29](https://github.com/anthropics/skills/issues/29) [Sử dụng với bedrock](https://github.com/anthropics/skills/issues/29) | Giải pháp tải Skill cho các tình huống triển khai riêng tư của doanh nghiệp |
| **Kỹ thuật Độ tin cậy của Skill** | [#556](https://github.com/anthropics/skills/issues/556) [tỷ lệ kích hoạt 0%](https://github.com/anthropics/skills/issues/556), [#202](https://github.com/anthropics/skills/issues/202) [thực tiễn tốt nhất cho skill-creator](https://github.com/anthropics/skills/issues/202) | Tối ưu hóa tỷ lệ kích hoạt Skill, hiệu quả token của công cụ tạo, tính mạnh mẽ của xác thực YAML |

---

## 3. Skills có Tiềm năng Cao đang chờ Hợp nhất (Bình luận tích cực + Cập nhật gần đây)

| Skill | Liên kết PR | Tại sao có khả năng triển khai gần đây |
|:---|:---|:---|
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | Giải quyết vấn đề chất lượng tài liệu phổ biến, không có phụ thuộc bên ngoài, cập nhật liên tục tháng 3 |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Mới tạo cuối tháng 3, kiểm thử là nhu cầu thường xuyên, cấu trúc bao phủ toàn diện |
| **record-knowledge** | [#521](https://github.com/anthropics/skills/pull/521) | Trực tiếp giải quyết vấn đề mất ngữ cảnh, cơ chế đơn giản (lưu trữ thẻ Markdown) |
| **sensory (macOS AppleScript)** | [#806](https://github.com/anthropics/skills/pull/806) | Con đường mới thay thế chụp màn hình tự động, cập nhật đầu tháng 4, thiết kế phân cấp quyền trưởng thành |
| **x402 Micro-payment BSV** | [#374](https://github.com/anthropics/skills/pull/374) | Gọi dịch vụ AI bằng ngôn ngữ tự nhiên + thanh toán, vẫn đang lặp lại tháng 4, có bản trình diễn trường hợp sử dụng thực tế |
| **Sửa lỗi chuỗi skill-creator** | [#539](https://github.com/anthropics/skills/pull/539), [#541](https://github.com/anthropics/skills/pull/541), [#538](https://github.com/anthropics/skills/pull/538) | Cùng tác giả Lubrsy706 tập trung sửa các vấn đề cơ bản như xác thực YAML, nhạy cảm với chữ hoa chữ thường, xung đột ID, cập nhật dày đặc ngày 7 tháng 4 |

---

## 4. Insight Hệ sinh thái Skills

> **Nhu cầu cốt lõi: Chuyển từ "trình diễn chức năng" sang "sẵn sàng sản xuất"** — Cộng đồng đang thúc đẩy Skills từ nguyên mẫu sáng tạo (nghệ thuật thuật toán, tạo trò chơi) sang độ tin cậy cấp doanh nghiệp (kiểm soát bố cục, hệ thống kiểm thử, quản trị bảo mật, bộ nhớ giữa các hội thoại, chia sẻ tổ chức), đồng thời yêu cầu bản thân công cụ chính thức (skill-creator) tuân thủ các thực tiễn tốt nhất.

---

---

# Nhật ký Cộng đồng Claude Code | 2026-04-09

## Tóm tắt Hôm nay

Điểm đáng chú ý nhất của cộng đồng hôm nay là **phát hành phiên bản v2.1.97**, mang đến các cải tiến TUI như chế độ Focus View, làm mới tự động thanh trạng thái. Đồng thời, **vấn đề tiêu hao bất thường của gói Claude Max** tiếp tục lan rộng (478 bình luận), trở thành chủ đề được thảo luận sôi nổi nhất trong cộng đồng; nhiều phản hồi về suy giảm hiệu suất mô hình cũng đã được đánh dấu là đã giải quyết.

---

## Phát hành Phiên bản

### v2.1.97 | [Phát hành](https://github.com/anthropics/claude-code/releases/tag/v2.1.97)
- **Chế độ Focus View** (`Ctrl+O`): Hiển thị lời nhắc, tóm tắt công cụ một dòng (bao gồm thống kê diff chỉnh sửa) và phản hồi cuối cùng ở chế độ `NO_FLICKER`
- **Làm mới thanh trạng thái tự động**: Thêm cài đặt `refreshInterval`, hỗ trợ chạy lại lệnh thanh trạng thái mỗi N giây
- **Thông tin không gian làm việc Git**: Thêm biến `workspace.git_worktree` vào thanh trạng thái

### v2.1.96 | [Phát hành](https://github.com/anthropics/claude-code/releases/tag/v2.1.96)
- Sửa lỗi **thiếu tiêu đề ủy quyền Bedrock 403** (vấn đề quay lại v2.1.94), ảnh hưởng người dùng sử dụng `AWS_BEARER_TOKEN_BEDROCK` hoặc `CLAUDE_CODE_SKIP_BEDROCK_AUTH`

---

## Issues Nóng trong Cộng đồng

| # | Chủ đề | Trạng thái | Bình luận | Tầm quan trọng |
|---|------|------|------|--------|
| [#38335](https://github.com/anthropics/claude-code/issues/38335) | **Giới hạn hội thoại gói Claude Max tiêu hao bất thường nhanh chóng** (từ ngày 23 tháng 3) | 🔴 Mở | 478 | **Chủ đề cấp độ khủng hoảng phí**。Nhiều người dùng trả phí báo cáo việc sử dụng CLI dẫn đến tiêu hao số lượng hội thoại bất thường, 369 👍 phản ánh phạm vi ảnh hưởng cực kỳ rộng, Anthropic vẫn chưa đưa ra phản hồi chính thức |
| [#42796](https://github.com/anthropics/claude-code/issues/42796) | Mô hình không thể xử lý nhiệm vụ kỹ thuật phức tạp sau bản cập nhật tháng 2 | 🟢 Đã đóng | 176 | Chủ đề có độ quan tâm cực cao 948 👍, hôm nay đã đóng. Tác giả stellaraccident là người đóng góp cốt lõi cho MLIR, đại diện cho phản hồi mạnh mẽ của các nhà phát triển chuyên nghiệp đối với sự suy giảm khả năng của mô hình |
| [#11405](https://github.com/anthropics/claude-code/issues/11405) | Thông báo cập nhật Homebrew không khớp với phiên bản thực tế | 🟢 Đã đóng | 60 | Vấn đề quy trình đóng gói/phát hành tồn tại lâu dài, hôm nay cuối cùng đã được giải quyết, ảnh hưởng đến trải nghiệm cập nhật hàng ngày của người dùng macOS |
| [#8477](https://github.com/anthropics/claude-code/issues/8477) | Yêu cầu thêm tùy chọn "luôn hiển thị quá trình suy nghĩ" | 🔴 Mở | 54 | Chức năng có nhu cầu cao 195 👍, bị ẩn sau v2.0, các nhà phát triển yêu cầu mạnh mẽ sự minh bạch |
| [#41930](https://github.com/anthropics/claude-code/issues/41930) | Tiêu hao sử dụng bất thường trên tất cả các cấp trả phí từ ngày 23 tháng 3 — Nhận dạng nhiều nguyên nhân gốc rễ | 🔴 Mở | 49 | Phân tích vấn đề phí tính phí có hệ thống song song với #38335, tác giả cố gắng xác định nguyên nhân gốc rễ từ góc độ kỹ thuật, kêu gọi giao tiếp chính thức |
| [#1486](https://github.com/anthropics/claude-code/issues/1486) | Khung xem bị nhảy về đầu một cách không thường xuyên khi xem xét mã | 🟢 Đã đóng | 32 | Vấn đề trải nghiệm TUI đa nền tảng (Windows/Linux), hôm nay đã đóng, ảnh hưởng đến luồng công việc xem xét mã |
| [#12443](https://github.com/anthropics/claude-code/issues/12443) | Xóa cảnh báo phần mềm độc hại khỏi phản hồi công cụ Read | 🔴 Mở | 16 | Báo động sai của công cụ bảo mật ảnh hưởng đến hiệu quả phát triển, cân bằng giữa bảo mật và trải nghiệm người dùng |
| [#13195](https://github.com/anthropics/claude-code/issues/13195) | Quyền `.git/**` không cho phép git ghi vào `.git/config` | 🟢 Đã đóng | 15 | Xung đột giữa chính sách bảo mật hộp cát và luồng công việc Git, hôm nay đã sửa |
| [#11927](https://github.com/anthropics/claude-code/issues/11927) | Biến môi trường `env` trong `.claude/settings.json` không được truyền đến plugin MCP | 🔴 Mở | 13 | Vấn đề cấu hình hệ sinh thái MCP, ảnh hưởng đến trải nghiệm tích hợp của nhà phát triển plugin |
| [#41034](https://github.com/anthropics/claude-code/issues/41034) | Tất cả các trang web chế độ Cowork đều bị chặn (phiên bản Chrome) | 🔴 Mở | 11 | Suy giảm chức năng tích hợp trình duyệt, ảnh hưởng đến các tình huống cộng tác từ xa |

---

## Tiến độ PR Quan trọng

| # | PR | Trạng thái | Nội dung |
|---|-----|------|------|
| [#45150](https://github.com/anthropics/claude-code/pull/45150) | Mở rộng tài liệu CLAUDE_CODE_ACCESSIBILITY | 🟡 Mở | Thêm hướng dẫn sử dụng trình đọc màn hình, mô tả hành vi đồng bộ hóa con trỏ terminal ở chế độ trợ năng |
| [#40322](https://github.com/anthropics/claude-code/pull/40322) | Tăng cường quản lý IP tĩnh/động hỗn hợp tường lửa DevContainer | 🟡 Mở | Giải quyết vấn đề IP trùng lặp DNS tường lửa container (liên quan đến #35197), cải thiện xử lý biến môi trường |
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | **Mã nguồn mở Claude Code** | 🟡 Mở | Một trong những vấn đề được cộng đồng yêu cầu cao nhất, cố gắng thúc đẩy mã nguồn mở hoàn chỉnh |
| [#45156](https://github.com/anthropics/claude-code/pull/45156) | Sửa lỗi định dạng gạch ngang không mong muốn trong tài liệu tiếng Hàn | 🟡 Mở | Sửa lỗi chất lượng tài liệu bản địa hóa |
| [#45151](https://github.com/anthropics/claude-code/pull/45151) | Thêm tài liệu biến môi trường FORCE_HYPERLINK | 🟡 Mở | Cải thiện tài liệu, bao gồm kích hoạt siêu liên kết bắt buộc trong các tình huống terminal như tmux/screen |
| [#41611](https://github.com/anthropics/claude-code/pull/41611) | Bổ sung mã nguồn còn thiếu | 🟡 Mở | Một PR liên quan đến mã nguồn mở khác, cố gắng bổ sung mã nguồn còn thiếu trong bản phân phối |
| [#41518](https://github.com/anthropics/claude-code/pull/41518) | **Mã nguồn mở Claude Code Hoàn chỉnh** | 🟡 Mở | Trích xuất 1906 tệp TypeScript từ source map, xây dựng và chạy thành công, xác minh tính khả thi về mặt kỹ thuật |
| [#26328](https://github.com/anthropics/claude-code/pull/26328) | Thêm plugin quản lý hội thoại | 🟢 Đã đóng | Cung cấp lệnh `/session-manager:delete/cleanup/list`, giải quyết điểm yếu quản lý vòng đời hội thoại |
| [#45355](https://github.com/anthropics/claude-code/pull/45355) | Tạo SECURITY_ANALYSIS.md | 🟢 Đã đóng | Tài liệu phân tích bảo mật (đã đóng, có thể nội dung không tuân thủ quy định) |
| [#45157](https://github.com/anthropics/claude-code/pull/45157) | Thêm khả năng hình ảnh | 🟢 Đã đóng | PR ngắn, có thể là thử nghiệm hoặc bị từ chối |

---

## Xu hướng Yêu cầu Chức năng

Dựa trên phân tích 50 Issues đang hoạt động, hướng cộng đồng hiện quan tâm nhất:

| Hạng | Hướng | Issue Đại diện | Mô tả Xu hướng |
|:---:|------|---------|---------|
| 1 | **Minh bạch phí và kiểm soát sử dụng** | #38335, #41930, #44726 | Bùng nổ các vấn đề sử dụng bất thường sau ngày 23 tháng 3, trở thành cốt lõi của khủng hoảng niềm tin |
| 2 | **Hiệu suất và khả năng của Mô hình** | #42796, #35297, #45499 | Các nhà phát triển chuyên nghiệp cực kỳ nhạy cảm với sự suy giảm của mô hình, cần các tiêu chuẩn chất lượng có thể dự đoán |
| 3 | **Tối ưu hóa Trải nghiệm TUI/Tương tác** | #8477, #30660, #1486, #31595 | Hiển thị luồng suy nghĩ thời gian thực, chế độ im lặng của hook không đồng bộ, độ ổn định của khung nhìn |
| 4 | **Mã nguồn mở và Khả năng Kiểm toán** | #41447, #41518, #41611 | 3 PR đang hoạt động thúc đẩy mở mã nguồn, phản ánh sự không tin tưởng vào các công cụ hộp đen |
| 5 | **Hệ sinh thái MCP/Plugin** | #11927, #12443 | Chi tiết tích hợp như truyền biến môi trường, cảnh báo bảo mật cần được hoàn thiện |
| 6 | **Cộng tác/Làm việc từ xa** | #41034, #40281, #44486 | Tích hợp trình duyệt, độ ổn định dịch vụ VM, vấn đề đồng bộ hóa tin nhắn |

---

## Điểm Quan tâm của Nhà phát triển

### 🔴 Điểm yếu Tần suất Cao

1. **Hệ thống phí không thể dự đoán**
   - Người dùng gói Max báo cáo việc sử dụng CLI "tiêu thụ" hạn ngạch hội thoại, thiếu bảng điều khiển sử dụng thời gian thực
   - Nhu cầu: Minh bạch hóa phí tính theo lệnh gọi công cụ/Token, hoặc cơ chế cảnh báo sử dụng

2. **Suy giảm hành vi mô hình không báo trước**
   - Việc đóng #42796 không có nghĩa là vấn đề đã được giải quyết, nhà phát triển cần khả năng **chọn mô hình theo phiên bản**
   - Nhu cầu: Khóa phiên bản mô hình cụ thể, hoặc nhận thông báo trước về nhật ký thay đổi

3. **Độ hiển thị trạng thái TUI không đủ**
   - Ẩn quá trình suy nghĩ mở rộng, mất ngữ cảnh giữa các Agent chạy ( #45493)
   - Nhu cầu: Phản hồi tiến độ chi tiết hơn và thông tin gỡ lỗi

### 🟡 Nhu cầu Xây dựng Hệ sinh thái

- **Quản lý hội thoại**: Các chức năng như #26328 nên được đưa vào cốt lõi, không phụ thuộc vào plugin
- **Hỗ trợ trợ năng**: Nhu cầu trình đọc màn hình được phản ánh trong #45150 cần đầu tư liên tục
- **Tính nhất quán đa nền tảng**: Các vấn đề về Cowork trên Windows, tường lửa DevContainer cho thấy nợ thích ứng nền tảng

### 🟢 Tín hiệu Tích cực

- Focus View của v2.1.97 cho thấy nhóm quan tâm đến **tối ưu hóa mật độ thông tin**
- Sửa lỗi nhanh Bedrock quay lại (v2.1.96) cho thấy **độ ổn định của luồng quan trọng** được coi trọng

---

*Nhật ký hàng ngày được tạo dựa trên dữ liệu công khai GitHub, không đại diện cho lập trường chính thức của Anthropic.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Nhật ký Cộng đồng OpenAI Codex | 2026-04-09

---

## 1. Tóm tắt Hôm nay

Cộng đồng Codex hôm nay hoạt động cực kỳ sôi nổi, **Rust CLI liên tục phát hành 6 phiên bản Alpha** (v0.119.0-alpha.19 đến alpha.24), cho thấy nhịp độ phát triển dày đặc. Chủ đề nóng nhất cộng đồng vẫn là **vấn đề tiêu thụ Token quá nhanh** (#14593, 491 bình luận), đồng thời **độ ổn định của nền tảng Windows** và **chính sách bảo mật hộp cát** trở thành hai điểm yếu lớn trong phản hồi của nhà phát triển.

---

## 2. Phát hành Phiên bản

| Phiên bản | Loại | Mô tả |
|:---|:---|:---|
| `rust-v0.119.0-alpha.19` ~ `alpha.24` | Bản xem trước Alpha | 6 phiên bản lặp lại liên tiếp, các thay đổi cụ thể không được nêu chi tiết trong Ghi chú Phát hành, nên xem [So sánh Commits](https://github.com/openai/codex/compare/rust-v0.119.0-alpha.19...rust-v0.119.0-alpha.24) |

> ⚠️ Tất cả đều là phiên bản Alpha, vui lòng nâng cấp thận trọng trong môi trường sản xuất.

---

## 3. Issues Nóng trong Cộng đồng (Top 10)

| # | Tiêu đề | Trạng thái | Bình luận | Vấn đề Cốt lõi | Phản hồi Cộng đồng |
|:---|:---|:---|:---|:---|:---|
| [#14593](https://github.com/openai/codex/issues/14593) | Đốt token rất nhanh | 🔴 Mở | 491 | Người dùng đăng ký Business báo cáo Token tiêu hao tăng tốc bất thường, nghi ngờ có lỗi tính phí hoặc gọi lặp lại | 🔥 **Độ nóng cao nhất**, 187 👍, người dùng yêu cầu minh bạch hóa cơ chế tính phí |
| [#10410](https://github.com/openai/codex/issues/10410) | Hỗ trợ macOS Intel (x86_64) | 🔴 Mở | 170 | Phiên bản máy tính để bàn chỉ hỗ trợ Apple Silicon, người dùng Intel Mac bị loại trừ | 248 👍, việc nâng cấp của người dùng doanh nghiệp bị cản trở, kêu gọi mạnh mẽ |
| [#10450](https://github.com/openai/codex/issues/10450) | Phát triển Từ xa trong Ứng dụng Máy tính để bàn Codex | 🔴 Mở | 105 | Phiên bản máy tính để bàn thiếu khả năng phát triển từ xa như VS Code Remote-SSH | 508 👍, **lượt thích cao nhất**, nhu cầu cấp thiết cho các tình huống phát triển đám mây/máy chủ |
| [#8648](https://github.com/openai/codex/issues/8648) | Codex trả lời tin nhắn cũ thay vì tin nhắn mới nhất | 🔴 Mở | 38 | Trong các cuộc hội thoại nhiều lượt, mô hình bị "mất trí nhớ", trả lời đầu vào mới nhất thay vì đầu vào lịch sử | 24 👍, ảnh hưởng nghiêm trọng đến trải nghiệm hội thoại dài |
| [#13476](https://github.com/openai/codex/issues/13476) | Lời nhắc phê duyệt quá mức cho Playwright MCP | 🔴 Mở | 24 | Sau khi gọi công cụ MCP, thường xuyên hiển thị lời nhắc ủy quyền, làm gián đoạn luồng công việc | 35 👍, điểm yếu trong các tình huống kiểm thử tự động |
| [#13993](https://github.com/openai/codex/issues/13993) | Hỗ trợ trình cài đặt Windows độc lập | 🔴 Mở | 19 | Chỉ phân phối qua Microsoft Store, không thể triển khai trong môi trường doanh nghiệp/tình huống ngoại tuyến | 58 👍, quản trị viên CNTT yêu cầu mạnh mẽ |
| [#15277](https://github.com/openai/codex/issues/15277) | `apply_patch` lỗi trên Windows sau lần ghi đầu tiên | 🔴 Mở | 14 | Sau lần ghi đầu tiên vào thư mục hộp cát, việc áp dụng bản vá sau đó bị lỗi | 0 👍, nhưng ảnh hưởng đến chức năng cốt lõi của Windows |
| [#16849](https://github.com/openai/codex/issues/16849) | Tiện ích mở rộng VSCode: Vòng lặp lỗi open-in-targets gây ra CPU cao | 🔴 Mở | 12 | Lỗi cơ chế thăm dò ý kiến WebView tiện ích mở rộng dẫn đến chiếm dụng CPU 100%+ | 5 👍, vấn đề khẩn cấp về hiệu suất |
| [#13542](https://github.com/openai/codex/issues/13542) | Windows: rg đi kèm phân giải nhưng gặp lỗi Truy cập bị từ chối | 🔴 Mở | 13 | ripgrep tích hợp bị từ chối quyền trong PowerShell | 16 👍, vấn đề tích hợp Windows |
| [#16402](https://github.com/openai/codex/issues/16402) | 0.118.0 lỗi ghi hộp cát trên Linux | 🔴 Mở | 8 | Chức năng ghi hộp cát của phiên bản mới nhất bị lỗi | 8 👍, vấn đề chặn nâng cấp |

---

## 4. Tiến độ PR Quan trọng (Top 10)

| # | Tiêu đề | Tác giả | Nội dung Cốt lõi | Phạm vi Ảnh hưởng |
|:---|:---|:---|:---|:---|
| [#17171](https://github.com/openai/codex/pull/17171) | Định tuyến đăng nhập khóa API Fed tới API Chính phủ | jackz-oai | Tổ chức tuân thủ FedRAMP tự động định tuyến tới API dành cho chính phủ | Người dùng tuân thủ chính phủ/doanh nghiệp |
| [#17170](https://github.com/openai/codex/pull/17170) | Render ngữ cảnh thanh trạng thái dưới dạng thước đo | etraut-openai | Hiển thị ngữ cảnh thanh trạng thái dưới dạng thanh tiến trình, tránh nhầm lẫn với hạn ngạch | Trải nghiệm người dùng TUI |
| [#17168](https://github.com/openai/codex/pull/17168) | Làm rõ các thông báo chặn hộp cát | viyatb-oai | Thông báo chặn proxy mạng bỏ thương hiệu, làm rõ lý do chính sách hộp cát | Bảo mật/Thông báo lỗi |
| [#17165](https://github.com/openai/codex/pull/17165) | Chuyển lời nhắc thời gian thực mặc định vào cốt lõi | aibrahim-oai | Lớp cốt lõi xử lý mẫu lời nhắc mặc định cho hội thoại thời gian thực | Độ ổn định API Thời gian thực |
| [#17164](https://github.com/openai/codex/pull/17164) | ~~Tự động phê duyệt các yêu cầu của máy chủ MCP ở chế độ Toàn quyền truy cập~~ | leoshimo-oai | ❌ **Đã đóng** - Tự động phê duyệt yêu cầu MCP ở chế độ toàn quyền truy cập | - |
| [#17087](https://github.com/openai/codex/pull/17087) | Thêm lệnh marketplace | xli-oai | Thêm lệnh `codex marketplace add`, hỗ trợ nguồn plugin cục bộ/GitHub/Git | Hệ sinh thái plugin |
| [#16944](https://github.com/openai/codex/pull/16944) | Mở rộng tìm kiếm công cụ tới MCP tùy chỉnh | mzeng-openai | Tìm kiếm công cụ mở rộng tới máy chủ MCP tùy chỉnh, chuẩn hóa vòng đời đặt tên | Khám phá công cụ MCP |
| [#16736](https://github.com/openai/codex/pull/16736) | Chuyển hộp cát thực thi thống nhất tới máy chủ thực thi | starr-openai | Chuyển logic khởi chạy hộp cát thực thi thống nhất sang dịch vụ exec-server | Tái cấu trúc kiến trúc/Thực thi từ xa |
| [#16276](https://github.com/openai/codex/pull/16276) | Thêm tiện ích mở rộng bộ nhớ | kliu128 | Thêm khả năng bộ nhớ cho Codex (đóng góp bên ngoài) | Hội thoại dài/Giữ trạng thái |
| [#10109](https://github.com/openai/codex/pull/10109) | Cho phép sendto(NULL, 0) cho việc đánh thức self-pipe asyncio | etraut-openai | Sửa lỗi treo SQLite asyncio trong hộp cát không có mạng | Độ ổn định hộp cát Linux |

---

## 5. Xu hướng Yêu cầu Chức năng

Dựa trên phân tích 50 Issues đang hoạt động, các hướng quan tâm của cộng đồng thể hiện ba chủ đề chính:

| Xu hướng | Issue Đại diện | Cường độ Nhu cầu |
|:---|:---|:---|
| **🖥️ Hỗ trợ Đa nền tảng Máy tính để bàn** | #10410 (Intel Mac), #13993 (Trình cài đặt độc lập Windows), #10450 (Phát triển Từ xa) | ⭐⭐⭐⭐⭐ |
| **💰 Chi phí và Minh bạch Phí** | #14593 (Tiêu thụ Token quá nhanh) | ⭐⭐⭐⭐⭐ |
| **🔒 Tối ưu hóa Hộp cát và Chính sách Bảo mật** | #13476 (Quá nhiều lời nhắc phê duyệt), #16402 (Lỗi hộp cát Linux), #15277 (Ghi hộp cát Windows) | ⭐⭐⭐⭐☆ |
| **🤖 Độ ổn định Hội thoại và Ngữ cảnh** | #8648 (Trả lời tin nhắn lịch sử), #15497 (Ức chế tin nhắn trạng thái Hook) | ⭐⭐⭐⭐☆ |

**Xu hướng mới nổi**: Nhu cầu tích hợp hệ sinh thái MCP (Model Context Protocol) đang gia tăng, trải nghiệm khám phá và ủy quyền công cụ trở thành trọng tâm mới.

---

## 6. Điểm Quan tâm của Nhà phát triển

### 🔴 Điểm yếu Tần suất Cao

| Vấn đề | Phản hồi Điển hình | Tình huống Ảnh hưởng |
|:---|:---|:---|
| **Trải nghiệm Công dân Hạng hai trên Windows** | "Cửa hàng hạn chế triển khai doanh nghiệp" "rg bị từ chối quyền" "lỗi ghi vá" | Môi trường doanh nghiệp Windows |
| **Chính sách Hộp cát Quá Bảo thủ** | "Mọi thao tác đều yêu cầu phê duyệt" "Toàn quyền truy cập vẫn hiển thị lời nhắc" | Tình huống Tự động hóa/CI |
| **Lỗi Quản lý Trạng thái Hội thoại** | "Trả lời sai tin nhắn" "CPU 100% vòng lặp vô hạn" | Phát triển hội thoại dài |
| **Lỗi Phiên bản Nâng cấp** | "Hộp cát 0.118.0 bị lỗi" | Niềm tin vào độ ổn định |

### 🟡 Khoảng trống Năng lực

- **Phát triển Từ xa**: Các tình huống phát triển SSH/container hoàn toàn dựa vào tiện ích mở rộng VS Code, phiên bản máy tính để bàn trống rỗng
- **Lưu trữ Bộ nhớ**: Mất ngữ cảnh dự án giữa các hội thoại (#16276 đang cố gắng giải quyết)
- **Triển khai Ngoại tuyến/Riêng tư**: Không thể chạy độc lập với dịch vụ chính thức của OpenAI

### 💡 Kỳ vọng Cộng đồng

> *"Hãy cho chúng tôi một trình cài đặt Windows độc lập, không chỉ trên Cửa hàng."* — #13993  
> *"Hỗ trợ Remote SSH là thứ duy nhất giữ tôi ở lại với VS Code."* — #10450

---

*Nhật ký hàng ngày được tạo dựa trên dữ liệu công khai GitHub, không đại diện cho lập trường chính thức của OpenAI.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Nhật ký Cộng đồng Gemini CLI | 2026-04-09

## Tóm tắt Hôm nay

Hôm nay Gemini CLI đã có bản cập nhật dày đặc, **phát hành 3 phiên bản liên tiếp** (v0.37.0 → v0.38.0-preview.0 → v0.39.0-nightly), tập trung cốt lõi vào việc sửa lỗi trải nghiệm UI và tăng cường hệ thống Hook. Hoạt động Issues trong cộng đồng tăng vọt, vấn đề tương thích Terminal Windows tiếp tục là điểm yếu của người dùng, đồng thời các chức năng cao cấp như định tuyến bộ nhớ, nhận biết AST của kiến trúc Agent đang bước vào giai đoạn thiết kế sâu.

---

## Phát hành Phiên bản

### v0.39.0-nightly.20260408.a39461718 🔥
| Tính năng | Mô tả |
|:---|:---|
| **Trực quan hóa Hệ thống Hook UI** | `feat(hooks)`: Các thông báo của hệ thống Hook hiện có thể hiển thị trực tiếp trong UI (@mbleigh) |
| **Sửa lỗi đầu cuối Bao phủ Mô hình** | `fix(core)`: Cấu hình bao phủ mô hình của Hook `BeforeModel` hiện được chuyển tiếp đầy đủ |
| **Tối ưu hóa Nút Phê duyệt** | Cải thiện tương tác phê duyệt ở lớp UI (@alisa-alisa) |

### v0.38.0-preview.0
| Tính năng | Mô tả |
|:---|:---|
| **Sửa lỗi Tải lại Kỹ năng Nóng** | Danh sách lệnh gạch chéo tự động làm mới sau khi `/skills reload` (@NTaylorMullen) |
| **Sửa lỗi Công cụ Hoàn thành Nhiệm vụ** | Tăng cường độ ổn định của công cụ `complete_task` |

### v0.37.0
| Tính năng | Mô tả |
|:---|:---|
| **Tái cấu trúc Kiến trúc Kiểm thử** | Agent đánh giá kiểm thử được tập trung tại `test-utils` để tái sử dụng (@Samee24) |
| **Quay lại Cấu hình Mặc định** | Khôi phục trạng thái mặc định Agent được bật (trước đó vô tình đặt thành mặc định tắt) |

---

## Issues Nóng trong Cộng đồng

| # | Issue | Trạng thái | Điểm quan tâm Cốt lõi |
|:---|:---|:---|:---|
| [#20675](https://github.com/google-gemini/gemini-cli/issues/20675) | Phím mũi tên trong terminal tương tác Windows 10 không hoạt động | 🟡 Mở | **17 bình luận độ nóng cao**—Trong các lệnh tương tác bên ngoài như `pnpm create vite`, nhấn phím mũi tên sẽ làm biến mất tùy chọn, vấn đề tương thích giữa lớp PTY và Terminal Windows tiếp tục làm người dùng khó chịu |
| [#20498](https://github.com/google-gemini/gemini-cli/issues/20498) | Đăng ký trả phí không truy cập được Gemini 3 | 🟡 Mở | **Nghi vấn mô hình kinh doanh**—Người dùng bối rối về mối quan hệ giữa quyền lợi đăng ký và khả năng sử dụng mô hình, cần chính thức làm rõ chiến lược cấp độ trả phí |
| [#21445](https://github.com/google-gemini/gemini-cli/issues/21445) | Ctrl+Backspace trên Windows không xóa được từ | 🟢 Đã đóng | Vừa đóng hôm nay—Người đóng góp cộng đồng @dogukanozen đã sửa lỗi phân tích ký tự điều khiển `^H` trên Terminal Windows |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Đánh giá đọc/ghi tệp nhận biết AST | 🔒 Nội bộ | **Khám phá cấp Kiến trúc**—Nghiên cứu tính khả thi của việc đọc chính xác ranh giới phương thức thông qua AST, giảm lãng phí Token, liên quan đến khả năng ánh xạ kho mã |
| [#24936](https://github.com/google-gemini/gemini-cli/issues/24936) | Công cụ Chỉnh sửa/Ghi tệp không hiển thị đường dẫn tệp đích | 🟢 Đã đóng | **Sửa lỗi khẩn cấp P0**—Giao diện người dùng bị lỗi khiến người dùng không thể xác nhận mục tiêu chỉnh sửa, đã nhanh chóng sửa lỗi |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | Hỏi lại quyền cho cùng một tệp | 🟡 Mở | Mất trí nhớ trạng thái quyền—Tùy chọn "Cho phép tất cả các hội thoại tương lai" thỉnh thoảng không hoạt động, có lỗi trong quản lý trạng thái chính sách bảo mật |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | Định tuyến bộ nhớ: Toàn cục vs Cấp dự án | 🔒 Nội bộ | **Kiến trúc bộ nhớ Agent**—Định nghĩa chiến lược lưu trữ phân cấp giữa sở thích cấp người dùng (`~/.gemini/`) và bộ nhớ cụ thể của kho mã (`.gemini/`) |
| [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) | Agent phụ nhận biết chế độ phê duyệt | 🔒 Nội bộ | Tính nhất quán của chế độ—Agent phụ cần đồng bộ hóa chế độ Plan/Auto-Edit của Agent chính, tránh xung đột chính sách |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Ngăn chặn các thao tác phá hoại | 🔒 Nội bộ | Tăng cường bảo mật—Thiết kế cơ chế chặn chủ động đối với các lệnh nguy hiểm như `git reset --force` |
| [#24917](https://github.com/google-gemini/gemini-cli/issues/24917) | Lỗi React #185 gây treo máy | 🟡 Mở | Vấn đề lớp hiển thị Ink—Người dùng thường xuyên gặp lỗi vòng lặp cập nhật vô hạn của React, cần điều tra khẩn cấp |

---

## Tiến độ PR Quan trọng

| # | PR | Tác giả | Đóng góp Cốt lõi |
|:---|:---|:---|:---|
| [#22619](https://github.com/google-gemini/gemini-cli/pull/22619) | Xóa trạng thái thought để ngăn dư ảnh UI | @euxaristia | Sửa lỗi trạng thái suy nghĩ không được xóa sau khi phản hồi dẫn đến dư ảnh trên giao diện |
| [#24752](https://github.com/google-gemini/gemini-cli/pull/24752) | Tách biệt ContextManager và kiến trúc Sidecar | @joshualitt | **Tái cấu trúc Kiến trúc**—Đặt nền móng cho các cải tiến trong loạt #24751, tăng tính mô-đun hóa của module quản lý ngữ cảnh Agent |
| [#24990](https://github.com/google-gemini/gemini-cli/pull/24990) | Sửa lỗi cắt xén lời nhắc đầu vào + nâng cấp Ink 6.6.9 | @jacob314 | Sửa lỗi hiển thị dòng đầu vào toàn chiều, đồng bộ nâng cấp thư viện TUI cơ bản |
| [#24985](https://github.com/google-gemini/gemini-cli/pull/24985) | Tập trung hóa phân tích đường dẫn hộp cát Linux | @ehedlund | Loại bỏ xử lý đường dẫn dư thừa giữa `LinuxSandboxManager` và `buildBwrapArgs`, sử dụng thống nhất `resolveSandboxPaths` |
| [#24984](https://github.com/google-gemini/gemini-cli/pull/24984) | Tập trung hóa phân tích đường dẫn hộp cát Seatbelt macOS | @ehedlund | PR đi kèm, chuẩn hóa logic phân tích đường dẫn hộp cát macOS |
| [#23505](https://github.com/google-gemini/gemini-cli/pull/23505) | Sửa lỗi phím mũi tên terminal tương tác Windows | @KumarADITHYA123 | **Đột phá điểm yếu kéo dài**—Giải quyết vấn đề ghi đè PSReadLine + chuyển đổi chế độ bảng điều khiển gốc, giải quyết triệt để #20675 |
| [#24667](https://github.com/google-gemini/gemini-cli/pull/24667) | Tối ưu hóa khởi chạy tiến trình cha nhẹ nhàng để tăng tốc độ | @sehoon38 | **Tăng hiệu suất 1.1 giây**—Loại bỏ điểm nghẽn khởi động kép, thời gian khởi động cho người dùng đăng nhập Google giảm từ 3.3s xuống 2.2s |
| [#24974](https://github.com/google-gemini/gemini-cli/pull/24974) | Khôi phục hiển thị đường dẫn tệp cho công cụ chỉnh sửa/ghi | @jwhelangoog | Sửa lỗi P0 quay lại cho #24936, đảm bảo người dùng xác nhận mục tiêu chỉnh sửa |
| [#24972](https://github.com/google-gemini/gemini-cli/pull/24972) | Sửa lỗi Bug khôi phục Tiêm ID phiên động | @scidomino | Vấn đề hiển thị ID sai cho `/stats session`, xóa trạng thái tĩnh cấp module |
| [#24968](https://github.com/google-gemini/gemini-cli/pull/24968) | Sửa lỗi rò rỉ bộ nhớ quy trình OAuth | @spencer426 | Xóa bộ đếm thời gian chờ 5 phút, loại bỏ Promise lơ lửng sau khi xác thực thành công |

---

## Xu hướng Yêu cầu Chức năng

Dựa trên phân tích 50 Issues đang hoạt động hôm nay, các trọng tâm cộng đồng thể hiện ba hướng chính:

| Hướng Xu hướng | Mức độ | Yêu cầu Điển hình |
|:---|:---|:---|
| **Tương thích Terminal Windows** | 🔥🔥🔥 | Phím mũi tên, Ctrl+Backspace, chữ loạn trong hội thoại SSH, tích hợp PowerShell—Trải nghiệm nhà phát triển Windows vẫn là điểm yếu lớn nhất |
| **Kiến trúc Bộ nhớ và Ngữ cảnh Agent** | 🔥🔥🔥 | Phân lớp bộ nhớ toàn cục/cấp dự án, nhận biết chế độ Agent phụ, chiến lược ghi bộ nhớ chủ động—Cơ sở hạ tầng quan trọng cho sự thông minh của hội thoại dài |
| **Hộp cát và Chính sách Bảo mật** | 🔥🔥 | Hỗ trợ đường dẫn tuyệt đối Seatbelt macOS, hợp nhất đường dẫn bwrap Linux, chặn các thao tác phá hoại—Nhu cầu bảo mật cấp doanh nghiệp gia tăng |
| **Tinh chỉnh UI/UX** | 🔥🔥 | Bố cục gọi công cụ song song, tối ưu hóa động lực cuộn, làm mới sau khi thoát trình chỉnh sửa bên ngoài—Việc đánh bóng trải nghiệm TUI đi vào vùng nước sâu |
| **Khả năng Mô hình và Chiến lược Đăng ký** | 🔥 | Nhu cầu minh bạch về quyền truy cập mô hình Gemini 3 và chiến lược trả phí |

---

## Điểm Quan tâm của Nhà phát triển

### 🔴 Điểm yếu Tần suất Cao
1. **Trải nghiệm Công dân Hạng hai trên Windows**—Từ điều khiển đầu vào đến hội thoại từ xa SSH, nhà phát triển Windows liên tục báo cáo tương tác cơ bản bị lỗi, mặc dù đã có PR sửa lỗi nhưng phạm vi vẫn chưa đủ
2. **Trạng thái quyền bị trôi**—Việc "cho phép tất cả các hội thoại tương lai" thỉnh thoảng không hoạt động làm gián đoạn luồng công việc, cơ chế duy trì chính sách bảo mật cần được củng cố
3. **Độ ổn định hiển thị React/Ink**—Các lỗi treo TUI như lỗi #185 làm suy giảm niềm tin của người dùng, cần tăng cường nâng cấp thư viện cơ bản và xử lý các trường hợp biên

### 🟡 Kỳ vọng Kiến trúc
- **Chuỗi công cụ nhận biết AST**—Nhà phát triển mong đợi điều hướng thông minh kho mã được nâng cấp từ tìm kiếm văn bản lên hiểu ngữ nghĩa, giảm lãng phí Token và đọc sai
- **Giao thức hợp tác Agent**—Cơ chế cách ly ngữ cảnh và đồng bộ hóa chế độ trong các tình huống nhiều Agent, là tiền đề cho tự động hóa luồng công việc phức tạp

### 🟢 Tín hiệu Tích cực
- Hoạt động đóng góp của cộng đồng tăng lên (@dogukanozen có PR đầu tiên được hợp nhất, @KumarADITHYA123 giải quyết vấn đề nan giải của Windows)
- Tối ưu hóa hiệu suất đi vào giai đoạn dựa trên dữ liệu (thử nghiệm cơ sở thời gian khởi động, thiết lập khung kiểm tra hiệu suất CPU/bộ nhớ)
- Kiến trúc bảo mật hộp cát tiếp tục hợp nhất (tập trung phân tích đường dẫn Linux/macOS, giảm độ phức tạp bảo trì)

---

*Nhật ký hàng ngày được tạo dựa trên dữ liệu công khai google-gemini/gemini-cli | Thời gian kết thúc dữ liệu: 2026-04-09*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# Nhật ký Cộng đồng GitHub Copilot CLI | 2026-04-09

---

## 1. Tóm tắt Hôm nay

Trọng tâm cộng đồng hôm nay tập trung vào **kiểm soát chính sách máy chủ MCP** và **vấn đề triển khai cấp doanh nghiệp**, nhiều Issues có độ nóng cao liên quan đến lỗi 404 sổ đăng ký MCP trong môi trường GitHub Enterprise khiến máy chủ bị chặn nhầm. Đồng thời, bản phát hành v1.0.22-0 giới thiệu giới hạn độ sâu proxy phụ và cảnh báo xung đột hội thoại, trực tiếp giải quyết các nguy cơ mất ổn định trong các tình huống nhiều proxy.

---

## 2. Phát hành Phiên bản

### v1.0.22-0 (Xem trước)

| Loại | Nội dung |
|:---|:---|
| **Mới** | Giới hạn độ sâu và đồng thời của proxy phụ, ngăn chặn tạo proxy vô hạn lặp lại |
| | Khi khôi phục hội thoại, nếu đã bị CLI/ứng dụng khác chiếm dụng, sẽ hiển thị cảnh báo |
| **Sửa lỗi** | Sửa lỗi sập do lỗi phân đoạn grapheme của engine V8 (ảnh hưởng đến hệ thống cụ thể) |
| | Sửa các vấn đề liên quan đến `sessionStart` và `sessionEn` (cắt xén tóm tắt) |

> 🔗 https://github.com/github/copilot-cli/releases/tag/v1.0.22-0

---

## 3. Issues Nóng trong Cộng đồng

| # | Trạng thái | Tiêu đề | Bình luận | Điểm cốt lõi |
|:---|:---|:---|:---:|:---|
| **#2498** | ✅ ĐÃ ĐÓNG | [Doanh nghiệp] Tất cả máy chủ MCP bị chặn bởi chính sách, GHE trả về 404 | 17 | **Vấn đề chặn cấp Doanh nghiệp**: GHE không hỗ trợ `/copilot/mcp_registry` khiến tất cả máy chủ MCP không phải mặc định bị chặn nhầm. Đã sửa, nhưng làm lộ ra khoảng cách tương thích giữa GHE và Copilot CLI. |
| **#1157** | ✅ ĐÃ ĐÓNG | Cấu hình Hooks toàn cục (UserPromptSubmit/Stop/Notification) | 12 | **Chức năng có độ nóng cao (25👍)**: Cộng đồng yêu cầu mạnh mẽ đối chiếu với global hooks của Claude Code/Cursor, tránh cấu hình lặp lại cho mỗi kho lưu trữ. |
| **#1897** | 🟡 MỞ | Lỗi ủy quyền "Bạn không được phép" | 11 | **Lỗi thường gặp**: Người dùng Copilot Pro gặp phải báo động sai của chính sách doanh nghiệp, trạng thái ủy quyền CLI và web không đồng bộ, chưa được giải quyết trong một tuần. |
| **#2236** | 🟡 MỞ | Máy chủ MCP sổ đăng ký tổ chức biến mất, báo động sai "bị tổ chức vô hiệu hóa" | 9 | **Lỗi quay lại phiên bản v1.0.11**, độ ổn định của cấu hình MCP cấp tổ chức bị nghi ngờ. |
| **#1976** | ✅ ĐÃ ĐÓNG | Không thể sử dụng máy chủ MCP và bất kỳ mô hình nào | 9 | Lỗi phức hợp: Chặn chính sách MCP + Từ chối truy cập mô hình, phản ánh lỗi liên hoàn của hệ thống quyền. |
| **#1108** | ✅ ĐÃ ĐÓNG | Proxy phụ cố gắng gọi `store_memory` thất bại | 8 | Vấn đề quyền truy cập của công cụ proxy phụ, liên quan đến "Giới hạn độ sâu proxy phụ" được phát hành hôm nay. |
| **#2541** | 🟡 MỞ | Tùy chọn tắt hoạt ảnh banner | 8 | Nhu cầu về khả năng tiếp cận và cá nhân hóa, tuy nhỏ nhưng phản ánh sự chú ý đến chi tiết UI. |
| **#2479** | 🟡 MỞ | Lỗi lấy chính sách sổ đăng ký MCP của người dùng cá nhân (404) | 8 | **12👍**: Người dùng Copilot Pro bản cá nhân gặp phải vấn đề sổ đăng ký tương tự như bản doanh nghiệp, phạm vi rộng hơn #2498. |
| **#2434** | 🟡 MỞ | Khôi phục hỗ trợ Gemini Pro | 6 | **7👍**: Loại bỏ `gemini-3-pro-preview` trong v1.0.14, nguy cơ mất người dùng—đa dạng mô hình là yếu tố then chốt để chọn CLI thay vì đối thủ cạnh tranh. |
| **#2551** | 🟡 MỞ | Lỗi 503/GOAWAY cho Claude Opus/Sonnet 4.5 | 5 | Vấn đề ổn định kết nối mô hình mới, kết nối HTTP/2 bị chấm dứt, ảnh hưởng đến sử dụng sản xuất. |

---

## 4. Tiến độ PR Quan trọng

| # | Trạng thái | Tiêu đề | Nội dung Chức năng/Sửa lỗi |
|:---|:---|:---|:---|
| **#2556** | 🟡 MỞ | Kỹ năng nhà phát triển | Nâng cấp hệ thống kỹ năng, "Nâng cấp kỹ năng"—có thể liên quan đến cấp kỹ năng hoặc cơ chế nâng cao |
| **#2587** | 🟡 MỞ | Giới thiệu Luồng làm việc Agent GitHub phân loại Issues tự động | Sử dụng `gh-aw` để tự động gắn thẻ `area:` và `triage`, giảm gánh nặng cho người bảo trì |
| **#2565** | 🟡 MỞ | Trình cài đặt ngăn chặn các mục PATH trùng lặp | Sửa lỗi chạy trình cài đặt nhiều lần dẫn đến ô nhiễm profile shell |

> Lưu ý: Hôm nay chỉ có 3 PR hoạt động, hoạt động đóng góp cộng đồng tương đối thấp, phát triển cốt lõi chủ yếu là vòng lặp nội bộ.

---

## 5. Xu hướng Yêu cầu Chức năng

Dựa trên phân tích 50 Issues đang hoạt động, trọng tâm cộng đồng thể hiện **ba cụm chính**:

| Xu hướng | Vấn đề Đại diện | Mức độ Khẩn cấp |
|:---|:---|:---:|
| **🔴 Quản trị Hệ sinh thái MCP** | #2498, #2236, #2479, #2528 | Rất Cao |
| Nhu cầu về chính sách sổ đăng ký MCP của doanh nghiệp/cá nhân, cấu hình cấp tổ chức, cấu hình cấp kho lưu trữ (`.github/mcp.json`) bùng nổ | | |
| **🟡 Hỗ trợ Mô hình và Độ ổn định** | #2434, #2551, #2597, #2166 | Cao |
| Khôi phục Gemini, vấn đề kết nối dòng Claude 4.5, sự không nhất quán về khả năng truy cập mô hình | | |
| **🟢 Trải nghiệm Nhà phát triển và Khả năng Mở rộng** | #1157, #1128, #1665, #2541 | Trung bình Cao |
| Hooks toàn cục, hooks chờ đầu vào, plugin cấp dự án, cá nhân hóa UI | | |

---

## 6. Điểm Quan tâm của Nhà phát triển

### 🔥 Tóm tắt Điểm yếu

| Loại | Vấn đề Cụ thể | Phạm vi Ảnh hưởng |
|:---|:---|:---|
| **Chặn Triển khai Doanh nghiệp** | Lỗi 404 sổ đăng ký MCP trong môi trường GHE → tất cả