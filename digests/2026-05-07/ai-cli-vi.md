# Bản tin hàng ngày về cộng đồng công cụ AI CLI 2026-05-07

> Thời gian tạo: 2026-05-07 00:19 UTC | Số lượng công cụ được bao phủ: 9

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

# Báo cáo phân tích so sánh ngang hệ sinh thái công cụ AI CLI | 2026-05-07

---

## 1. Toàn cảnh hệ sinh thái

Các công cụ AI CLI hiện đang trong giai đoạn chuyển đổi quan trọng từ "công cụ hiệu suất cá nhân" sang "cơ sở hạ tầng nhóm". Các sản phẩm hàng đầu (Claude Code, Codex) đã đi sâu vào quản trị doanh nghiệp, hợp tác từ xa và tiêu chuẩn hóa hệ sinh thái MCP; nhóm thứ hai (Gemini CLI, Qwen Code, OpenCode) đang đuổi kịp trong việc hiện đại hóa kiến trúc và khắc phục sự ổn định; các công cụ mới nổi (DeepSeek TUI, Pi, Kimi CLI) đang tìm kiếm chỗ đứng thông qua triển khai cục bộ, hiệu suất tối ưu hoặc tương tác khác biệt. Viết lại bằng Rust, Daemon hóa và các chiến lược nén ngữ cảnh trở thành những khoản đầu tư công nghệ chung, trong khi tính nhất quán trên nền tảng Windows và tính mạnh mẽ của hệ thống cấu hình vẫn là những khoản nợ trải nghiệm của toàn ngành.

---

## 2. So sánh mức độ hoạt động của từng công cụ

| Công cụ | Cập nhật Issues hôm nay | Cập nhật PR hôm nay | Phát hành phiên bản | Động thái cốt lõi |
|:---|:---:|:---:|:---|:---|
| **Claude Code** | 10+ | 6 | v2.1.129-132 (4 bản vá) | Sửa lỗi tích cực về khả năng tương thích Windows/Bedrock, nhu cầu đa cửa sổ #123👍 tiếp tục tăng |
| **OpenAI Codex** | 10+ | 10+ | rust-v0.129.0-alpha.9/10/12, rusty-v8-v147.4.0 | Cơ sở hạ tầng điều khiển từ xa, đơn giản hóa không gian tên MCP, thực thi chính sách doanh nghiệp |
| **Gemini CLI** | 10 | 10 | v0.41.2, v0.42.0-preview.2, nightly | Lỗi P0 chặn hạn ngạch, chuyển đổi hệ thống bộ nhớ v2 có ma sát, sửa lỗi bảo mật SSRF |
| **GitHub Copilot CLI** | 10+ | 2 | v1.0.42-43 (3 phiên bản) | Tai nạn chất lượng vòng lặp vô hạn của Agent, sửa lỗi rò rỉ tiến trình MCP, định tuyến mô hình phía máy chủ |
| **Kimi CLI** | 9 | 3 | Không có | Áp lực đối chiếu lỗi chịu lỗi của MCP, tranh cãi về khả năng hiển thị System Prompt, RFC tùy chỉnh giao diện nhanh chóng triển khai |
| **OpenCode** | 10+ | 10 | Không có | Sự trở lại khẩn cấp của cluster v1.14.34, tích hợp DigitalOcean, hoàn thành tab Shell TUI |
| **Pi** | 10+ | 10+ | Không có | Giai đoạn điều chỉnh kiến trúc bigrefactor, tăng tốc tải song song 1.8x, dấu mốc API tương tác chuột |
| **Qwen Code** | 10 | 10+ | v0.15.7-preview.0, v0.15.6-preview.1, nightly | Tối ưu hóa bộ nhớ đệm đọc tệp, dấu mốc theo dõi đóng góp AI, phơi bày sự yếu kém của hệ thống cấu hình |
| **DeepSeek TUI** | 10+ | 10+ | v0.8.14 | Trải nghiệm cài đặt Windows sụp đổ, hỗ trợ cục bộ Ollama đi vào dòng chính, yêu cầu bản địa hóa hoàn toàn |

> **Lưu ý**: "10+" biểu thị hơn 10 mục và không liệt kê đầy đủ, dựa trên suy luận "chọn lọc/Top 10" của bản tin hàng ngày, hoạt động thực tế có thể cao hơn.

---

## 3. Các hướng chức năng được quan tâm chung

| Hướng chức năng | Công cụ liên quan | Yêu cầu cụ thể | Cường độ tín hiệu |
|:---|:---|:---|:---:|
| **🖥️ Tích hợp sâu IDE/Máy tính để bàn** | Claude Code (#30154 đa cửa sổ), Codex (Tiện ích mở rộng VS Code), DeepSeek TUI (#735 Plugin VS Code), Qwen Code (#597 Tích hợp IDE), Kimi CLI (Thông báo Web UI) | Song song đa cửa sổ, thanh bên thường trực, nhận biết vị trí con trỏ, tùy chỉnh thanh trạng thái | ⭐⭐⭐⭐⭐ |
| **🔧 Tiêu chuẩn hóa hệ sinh thái MCP** | Claude Code (#7744 Phạm vi OAuth), Codex (#21442 Xóa tiền tố `mcp__`), Copilot CLI (#3162 Xác minh registry), Gemini CLI (#26554 Giao thức ACP), Kimi CLI (#769 Giảm lỗi chịu lỗi) | Thống nhất không gian tên, quản lý vòng đời tiến trình, tuân thủ OAuth, giảm dần thanh lịch | ⭐⭐⭐⭐⭐ |
| **🏢 Quản trị và Tuân thủ Doanh nghiệp** | Codex (#21413 Thực thi chính sách lưu trữ), Claude Code (#56784 Khắc phục SHA), Copilot CLI (#3101 Chính sách doanh nghiệp), Qwen Code (#3115 Theo dõi đóng góp AI), Pi (#4217 Tùy chỉnh thương hiệu) | Kiểm soát nguồn gốc Artifact, theo dõi kiểm toán, tính nhất quán chính sách, bảo mật chuỗi cung ứng | ⭐⭐⭐⭐⭐ |
| **🌐 Gọi từ xa/Không đầu/Theo chương trình** | Codex (#21424 remote-control), Claude Code (#56849 MCP theo chương trình), Qwen Code (#2271 Chế độ Daemon), Kimi CLI (#2169 usage không tương tác) | Máy phát triển từ xa SSH, tích hợp CI/CD, tác vụ nền, gọi theo API | ⭐⭐⭐⭐☆ |
| **🪟 Tính công bằng trên nền tảng Windows** | Claude Code (Kích hoạt tiện ích mở rộng, quyền đường dẫn), Codex (Báo động sai của Defender, ô nhiễm tiến trình), Copilot CLI (Cài đặt WinGet bị hỏng), DeepSeek TUI (Lỗi cài đặt npm toàn cục), Gemini CLI (Vừa sửa lỗi dấu ngoặc kép) | Đường ống cài đặt, xử lý PTY terminal, khả năng tương thích phần mềm bảo mật, liên kết tượng trưng | ⭐⭐⭐⭐☆ |
| **⚡ Tối ưu hóa Ngữ cảnh và Hiệu suất** | Codex (#19464 Đồng bộ hóa ngữ cảnh 1M), Claude Code (#13480 Sửa lỗi hình ảnh siêu lớn), Gemini CLI (#26614 Chặn hạn ngạch), Qwen Code (#3879 Nén phản ứng), DeepSeek TUI (#528 Chế độ Cache-maximal) | Độ tin cậy ngữ cảnh dài, giảm dần thông minh, chiến lược bộ nhớ đệm, rò rỉ bộ nhớ | ⭐⭐⭐⭐☆ |
| **🔐 Quyền và Sandboxing Chi tiết** | Claude Code (#56843 Trạng thái Sandbox), Copilot CLI (Cửa sổ bật lên quyền trùng lặp), Gemini CLI (#24916 Cơ chế tin cậy), Kimi CLI (Cách ly Phiên) | Kế thừa quyền của đại lý phụ, ủy quyền bền vững, chặn các thao tác phá hoại, minh bạch trạng thái | ⭐⭐⭐☆☆ |

---

## 4. Phân tích định vị khác biệt

| Công cụ | Tập trung chức năng | Người dùng mục tiêu | Tuyến công nghệ | Khác biệt cốt lõi |
|:---|:---|:---|:---|:---|
| **Claude Code** | Hợp tác Agent cấp doanh nghiệp, máy tính đa cửa sổ, hệ sinh thái plugin | Nhóm phát triển doanh nghiệp vừa và lớn, nhà phát triển chuyên nghiệp | TypeScript/Electron, triển khai đa đám mây Bedrock/GCP | Hệ thống plugin trưởng thành nhất (tải URL, hooks), tối ưu hóa gốc mô hình Anthropic |
| **OpenAI Codex** | Cơ sở hạ tầng từ xa, quản trị doanh nghiệp, hiệu suất Rust | Kỹ thuật nền tảng doanh nghiệp, nhóm phát triển từ xa | Viết lại Rust (v0.120+), kiến trúc app-server | Đồng bộ hóa GPT-5.5 ra mắt đầu tiên, xem xét mã /review, hệ sinh thái Skills |
| **GitHub Copilot CLI** | Vòng lặp kín hệ sinh thái IDE, tích hợp thanh toán, kiểm soát chính sách | Người dùng gắn bó với hệ sinh thái GitHub, đăng ký doanh nghiệp | Cơ sở hạ tầng chia sẻ với VS Code/Copilot Chat | Tích hợp gốc GitHub (PR, Issues, Actions), hệ thống đăng ký liền mạch |
| **Gemini CLI** | Đầu vào đa phương thức (giọng nói), hệ sinh thái Google, giao thức A2A | Người dùng Google Cloud, các tình huống đa phương thức | Ngôn ngữ Go, định tuyến mô hình Gemini | Tương tác giọng nói thời gian thực, tích hợp sâu dịch vụ Google (Lịch, Gmail) |
| **Kimi CLI** | Ngữ cảnh dài (200K+), tối ưu hóa tiếng Trung, trải nghiệm nhẹ | Nhà phát triển tiếng Trung, xử lý tài liệu dài | Python/Node hỗn hợp, ưu tiên Moonshot API | Hiệu quả chi phí ngữ cảnh dài, phản hồi cộng đồng nhanh chóng RFC-PR |
| **OpenCode** | Tổng hợp đa mô hình (hơn 20 nhà cung cấp), mã nguồn mở có thể mở rộng, máy tính để bàn | Người dùng so sánh đa mô hình, nhu cầu tự lưu trữ | TypeScript/Bun, kiến trúc plugin | Hỗ trợ mô hình rộng nhất, mã nguồn mở miễn phí, chế độ kép TUI/máy tính để bàn |
| **Pi** | Hiệu suất TUI tối ưu, hệ sinh thái mở rộng, trải nghiệm gốc terminal | Người dùng chuyên sâu terminal, nhu cầu tùy chỉnh | TypeScript, mô-đun ảo jiti, giao thức chuột SGR | Tải song song hơn 50 tiện ích mở rộng, tương tác chuột, tuân thủ tiêu chuẩn XDG |
| **Qwen Code** | Ưu tiên mô hình nội địa, kiểm toán đóng góp AI, Daemon hóa | Doanh nghiệp Trung Quốc bản địa, các tình huống nhạy cảm về tuân thủ | Node.js, tích hợp hệ sinh thái Alibaba Cloud | Đóng góp trực tiếp của người phụ trách công nghệ Alibaba Cloud, theo dõi tỷ lệ mã AI, phạm vi i18n sâu |
| **DeepSeek TUI** | Tư nhân hóa cục bộ, chi phí tối ưu, gốc tiếng Trung | Người dùng nhạy cảm về chi phí, chủ quyền dữ liệu | Rust, hỗ trợ Ollama gốc | Chi phí API thấp nhất, chạy Ollama cục bộ bằng một cú nhấp chuột, tương tác cộng đồng thường xuyên của người sáng lập |

---

## 5. Độ nóng và sự trưởng thành của cộng đồng

```
Ma trận sự trưởng thành × Hoạt động

Sự trưởng thành cao ┤  ████████████████  Claude Code (Sẵn sàng cho doanh nghiệp, lặp lại ổn định)
         │  ██████████████    OpenAI Codex (Đau khổ tái cấu trúc Rust, đầu tư vào cơ sở hạ tầng)
         │  ████████████      GitHub Copilot CLI (Vòng lặp kín hệ sinh thái, khủng hoảng độ tin cậy Agent)
         │  ██████████        Gemini CLI (Tài nguyên Google, ma sát về hạn ngạch/di chuyển)
         │  
Lặp lại nhanh ┤  ████████████████  Pi (Thay đổi kiến trúc bigrefactor, tối ưu hóa hiệu suất mạnh mẽ)
         │  ██████████████    Qwen Code (Phiên bản dày đặc, khắc phục hệ thống cấu hình)
         │  ████████████      OpenCode (Phiên bản 1.14 trở lại cluster, mở rộng đa mô hình)
         │  ██████████        DeepSeek TUI (Giai đoạn đầu v0.8, nợ trải nghiệm Windows)
         │  ████████          Kimi CLI (Mức độ hoạt động tăng lên, thúc đẩy áp lực đối chiếu)
         └────────────────────────────────────────────────────────
              Hoạt động thấp                              Hoạt động cao
```

| Giai đoạn | Công cụ | Đặc điểm |
|:---|:---|:---|
| **Giai đoạn trưởng thành** | Claude Code, Copilot CLI | Số phiên bản ổn định (v2.x/v1.0.x), Issues chủ yếu là sửa lỗi và tối ưu hóa, tỷ lệ chức năng doanh nghiệp cao |
| **Giai đoạn tái cấu trúc** | Codex (Rust), Pi (bigrefactor) | Thay đổi kiến trúc cơ bản, vấn đề mới và cũ chồng chéo, rủi ro xung đột hợp nhất đóng góp cộng đồng |
| **Giai đoạn đuổi kịp** | Gemini CLI, Qwen Code, OpenCode | Chức năng được bổ sung nhanh chóng, các khoản nợ ổn định lộ rõ, cấu hình/hệ thống di chuyển yếu kém |
| **Giai đoạn đầu** | DeepSeek TUI, Kimi CLI | Luồng công việc cốt lõi vừa hình thành, khả năng tương thích nền tảng (đặc biệt là Windows) và trải nghiệm cơ bản vẫn đang được xây dựng |

---

## 6. Tín hiệu xu hướng đáng chú ý

| Tín hiệu | Bằng chứng | Giá trị tham khảo cho nhà phát triển |
|:---|:---|:---|
| **🔥 Độ tin cậy của Agent trở thành đường biên đỏ về chất lượng** | Copilot CLI 217 lần vòng lặp plan→compact không tạo ra sản phẩm; Gemini CLI Agent phụ báo cáo sai `MAX_TURNS` là `GOAL`; Kimi CLI Tool Call không hợp lệ làm ô nhiễm Phiên | Khi đánh giá AI CLI, **chiến lược nén ngữ cảnh, cơ chế cách ly lỗi, khôi phục gián đoạn tác vụ** nên được liệt kê là các mục chấp nhận cốt lõi, thay vì chỉ tập trung vào danh sách chức năng |
| **🔥 Nghịch lý tái cấu trúc Rust "Tiến về chức năng, Dao động về trải nghiệm"** | Phiên bản Rust của Codex đưa vào Gatekeeper/rò rỉ bộ nhớ; Pi bigrefactor đóng góp cộng đồng hàng loạt | Lựa chọn công nghệ cần cân nhắc **lợi ích hiệu suất và rủi ro ổn định**, những người chấp nhận sớm nên khóa phiên bản LTS hoặc giữ lại đường dẫn khôi phục |
| **🔥 Máy phát triển từ xa sẵn sàng sử dụng trở thành chiến trường mới** | Codex `remote-control` + tiến trình nền app-server; Qwen Code Chế độ Daemon; Claude Code máy tính đa cửa sổ | Mua cơ sở hạ tầng nhóm nên chú ý đến **hỗ trợ gốc SSH/container, duy trì phiên, API chế độ không đầu**, thay vì chỉ trải nghiệm TUI cục bộ |
| **🔥 MCP từ "có thể sử dụng" đến "dễ quản lý"** | Toàn bộ chuỗi công cụ cùng đóng góp: đơn giản hóa không gian tên, sửa lỗi rò rỉ tiến trình, tuân thủ OAuth, xác minh registry | Khi xây dựng công cụ MCP nội bộ, **ưu tiên triển khai giảm dần thanh lịch (không bị lỗi điểm đơn lẻ) và các hook vòng đời (khởi động/dừng/kiểm tra sức khỏe)** |
| **🔥 Nợ nền tảng Windows rõ ràng cho toàn ngành** | 6/9 công cụ có Issues chặn liên quan đến Windows hôm nay; bốn loại vấn đề: đường dẫn, PTY, khả năng tương thích phần mềm bảo mật, đường ống cài đặt | Lựa chọn công cụ đa nền tảng cần **xác minh riêng các tình huống Windows**, không giả định "khả dụng trên Linux là toàn cầu khả dụng" |
| **🔥 Sự yếu kém của hệ thống cấu hình bị đánh giá thấp** | Qwen Code bao phủ `settings.json`, Claude Code phạm vi biến môi trường mở rộng, Kimi CLI tranh cãi về việc xóa System Prompt | Triển khai môi trường sản xuất nên **phiên bản hóa cấu hình, thử nghiệm logic di chuyển, giữ lại công tắc giảm dần**, tránh cấu hình bị mất khi nâng cấp |
| **🔥 Khả năng kiểm toán đóng góp AI từ tùy chọn tuân thủ trở thành nhu cầu bắt buộc** | Qwen Code #3115 thuộc tính commit, yêu cầu nghiêm ngặt của chính sách doanh nghiệp đối với nguồn gốc Artifact | Nhóm nên **thiết lập trước cơ chế theo dõi mã được tạo bởi AI**, chuẩn bị dữ liệu cho các yêu cầu bản quyền, kiểm toán bảo mật, yêu cầu bồi thường bảo hiểm trong tương lai |

---

> **Đề xuất quyết định**: Tại thời điểm hiện tại, **Claude Code** phù hợp với các nhóm theo đuổi triển khai doanh nghiệp ổn định; **Codex** phù hợp với các nhóm kỹ thuật nền tảng sẵn sàng chấp nhận rủi ro tái cấu trúc Rust để đổi lấy khả năng cơ sở hạ tầng từ xa; **OpenCode/Pi** phù hợp với những người đam mê công nghệ có chiến lược đa mô hình hoặc nhu cầu tùy chỉnh tối ưu; **Qwen Code/DeepSeek TUI** phù hợp với các tình huống nhạy cảm về chi phí, chủ quyền dữ liệu hoặc gốc tiếng Trung. Tất cả các lựa chọn đều cần xác minh riêng đường dẫn triển khai Windows và chiến lược di chuyển cấu hình.

---

## Báo cáo chi tiết từng công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Điểm nóng cộng đồng Claude Code Skills

> Nguồn dữ liệu: [anthropics/skills](https://github.com/anthropics/skills)

# Báo cáo điểm nóng cộng đồng Claude Code Skills (2026-05-07)

---

## 1. Xếp hạng Skills phổ biến (theo mức độ quan tâm của cộng đồng)

| Hạng | Skill | Trạng thái | Mô tả chức năng | Điểm nóng thảo luận cộng đồng |
|:---|:---|:---|:---|:---|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | 🟡 Mở | Kiểm soát chất lượng dàn trang tài liệu do AI tạo ra: ngăn chặn các vấn đề về dàn trang như dòng cô đơn, dòng mồ côi, đánh số sai | Chạm vào các điểm đau phổ quát của mọi quá trình tạo tài liệu; tác giả nhấn mạnh "người dùng hiếm khi chủ động yêu cầu dàn trang đẹp, nhưng vấn đề ở khắp mọi nơi" |
| 2 | **[skill-quality-analyzer](https://github.com/anthropics/skills/pull/83) / [skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | 🟡 Mở | Công cụ phân tích siêu dữ liệu Skill: đánh giá chính Skill dựa trên năm khía cạnh: cấu trúc, bảo mật, chất lượng tài liệu | "Skill để đánh giá Skill" đầu tiên, lấp đầy khoảng trống cơ sở hạ tầng chất lượng hệ sinh thái |
| 3 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | 🟡 Mở | Skill thiết kế giao diện người dùng cải tiến: nâng cao độ rõ ràng của lệnh và khả năng thực thi trong một vòng lặp | Thảo luận tập trung vào "làm thế nào để làm cho các lệnh Skill đủ cụ thể mà không quá ràng buộc" |
| 4 | **[odt](https://github.com/anthropics/skills/pull/486)** | 🟡 Mở | Tạo định dạng OpenDocument (ODT/ODS), điền mẫu và chuyển đổi HTML | Nhu cầu tiêu chuẩn hóa tài liệu mã nguồn mở, đối chiếu với ma trận Skill PDF/DOCX hiện có |
| 5 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | 🟡 Mở | Hệ thống kiểm thử toàn diện: Testing Trophy, kiểm thử thành phần React, E2E, hiệu suất và khả năng truy cập | Bao phủ toàn bộ chuỗi từ đơn vị → tích hợp → E2E, nhấn mạnh khung quyết định "kiểm tra gì, không kiểm tra gì" |
| 6 | **[appdeploy](https://github.com/anthropics/skills/pull/360)** | 🟡 Mở | Triển khai ứng dụng toàn diện một cú nhấp chuột lên mạng công cộng (tích hợp AppDeploy.ai) | Vòng lặp kín từ mã đến URL, đại diện cho xu hướng "Claude tức là DevOps" |
| 7 | **[servicenow](https://github.com/anthropics/skills/pull/568)** | 🟡 Mở | Trợ lý toàn nền tảng ServiceNow: ITSM/ITOM/SecOps/FSM/SPM/CSDM, v.v. | Tích hợp sâu ERP/ITSM cấp doanh nghiệp, phạm vi hiếm có |
| 8 | **[aurelion](https://github.com/anthropics/skills/pull/444)** | 🟡 Mở | Khung nhận thức bốn phần: mẫu tư duy có cấu trúc, chế độ cố vấn, điều phối Agent, bộ nhớ bền vững | Phương pháp luận hệ thống cho quản lý kiến thức + hợp tác AI, không phải công cụ đơn lẻ |

---

## 2. Xu hướng nhu cầu cộng đồng (Tổng hợp Issues)

| Hướng | Issue đại diện | Nhu cầu cốt lõi |
|:---|:---|:---|
| **🔐 Bảo mật và Quản trị** | [#492](https://github.com/anthropics/skills/issues/492) Lạm dụng ranh giới tin cậy, [#412](https://github.com/anthropics/skills/issues/412) Mô hình quản trị Agent | Phân tách không gian tên Skill cộng đồng và Skill chính thức; thực thi chính sách, phát hiện mối đe dọa, theo dõi kiểm toán của hệ thống AI Agent |
| **🏢 Cơ sở hạ tầng hợp tác Doanh nghiệp** | [#228](https://github.com/anthropics/skills/issues/228) Chia sẻ Skill cấp tổ chức, [#532](https://github.com/anthropics/skills/issues/532) Tương thích xác thực SSO/Doanh nghiệp | Từ công cụ cá nhân sang tài sản kiến thức nhóm: thư viện chia sẻ, quản lý quyền, tích hợp SSO không cần API Key |
| **🧪 Hệ thống Chất lượng và Đánh giá Skill** | [#556](https://github.com/anthropics/skills/issues/556) Tỷ lệ kích hoạt tập lệnh đánh giá 0%, [#202](https://github.com/anthropics/skills/issues/202) Các thực hành tốt nhất cho skill-creator | Xác minh hiệu quả Skill có thể định lượng; nâng cấp mô hình của chính công cụ tạo (từ "huấn luyện con người" sang "lệnh cho Claude") |
| **🔌 Khả năng tương tác giao thức** | [#16](https://github.com/anthropics/skills/issues/16) Skills xuất dưới dạng MCP, [#29](https://github.com/anthropics/skills/issues/29) Khả năng tương thích AWS Bedrock | Giao thức tiêu chuẩn hóa kỹ năng (MCP) và khả năng triển khai đa đám mây, phá vỡ khóa nền tảng |
| **📦 Quản lý và loại bỏ trùng lặp gói** | [#189](https://github.com/anthropics/skills/issues/189) Trùng lặp nội dung kỹ năng | Cơ chế phân giải phụ thuộc và giải quyết xung đột cho thị trường kỹ năng |

---

## 3. Skills tiềm năng cao đang chờ hợp nhất (Bình luận tích cực + Cập nhật gần đây)

| Skill | PR | Tín hiệu chính | Giá trị dự kiến |
|:---|:---|:---|:---|
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | Được tạo sau tháng 3 năm 2026 và liên tục cập nhật, giải quyết các lỗi chất lượng tiềm ẩn trong mọi quá trình tạo tài liệu | Có thể trở thành bản vá tăng cường cho Skill tài liệu mặc định |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Được tạo ngày 22 tháng 3 năm 2026, vẫn có các lần lặp lại vào tháng 4, bao phủ toàn bộ chuỗi kiểm thử giao diện người dùng hiện đại | Khắc phục điểm yếu của Claude Code trong lĩnh vực kiểm thử kỹ thuật |
| **sensory (macOS AppleScript)** | [#806](https://github.com/anthropics/skills/pull/806) | Mới được thêm vào ngày 29 tháng 3 năm 2026, thiết kế chi tiết phân biệt quyền Tier1/Tier2 | Con đường tự động hóa gốc thay thế cho việc sử dụng máy tính qua ảnh chụp màn hình, hiệu suất và quyền riêng tư tốt hơn |
| **shodh-memory** | [#154](https://github.com/anthropics/skills/pull/154) | Bộ nhớ bền vững qua các phiên, cơ sở hạ tầng cốt lõi cho ngữ cảnh dài của Agent | Bổ sung hoặc cạnh tranh với chức năng Bộ nhớ chính thức |
| **SAP-RPT-1-OSS** | [#181](https://github.com/anthropics/skills/pull/181) | Dự báo dữ liệu ERP doanh nghiệp, tích hợp mô hình mã nguồn mở Apache 2.0 | Khả năng khác biệt trong các ngành dọc (sản xuất/chuỗi cung ứng) |

---

## 4. Thông tin chi tiết về hệ sinh thái Skills

> **Nhu cầu cốt lõi của cộng đồng: Nâng cấp từ "công cụ hiệu suất cá nhân" lên "cơ sở hạ tầng kiến thức cấp doanh nghiệp có thể xác minh, chia sẻ và quản lý được"** - Ranh giới bảo mật, hợp tác tổ chức, định lượng hiệu quả, mở giao thức là không thể thiếu.

---

*Nguồn dữ liệu: github.com/anthropics/skills, tính đến ngày 2026-05-07*

---

# Bản tin hàng ngày về cộng đồng Claude Code | 2026-05-07

---

## 1. Tổng quan hôm nay

Anthropic hôm nay đã phát hành một loạt các phiên bản **v2.1.129-v2.1.132**, tập trung vào việc sửa lỗi kích hoạt tiện ích mở rộng VS Code trên Windows và các vấn đề tương thích `anthropic_beta` của Bedrock, đồng thời bổ sung các chức năng thân thiện với nhà phát triển như tải URL plugin và bật đầu ra đồng bộ hóa. Về cộng đồng, các yêu cầu chức năng dài hạn như **hỗ trợ đa cửa sổ** và **đổi tên phiên thông minh** tiếp tục nóng lên, trong khi nhiều vấn đề ổn định trên nền tảng Windows trở thành tâm điểm báo cáo mới hôm nay.

---

## 2. Phát hành phiên bản

### v2.1.132 | [Liên kết phát hành](https://github.com/anthropics/claude-code/releases/tag/v2.1.132)
- **Cải tiến công cụ Bash**: Biến môi trường `CLAUDE_CODE_SESSION_ID` được tự động đưa vào các tiến trình con, nhất quán với `session_id` của hooks, giúp theo dõi phiên qua các công cụ.
- **Tùy chọn thoát bộ kết xuất**: Thêm biến môi trường `CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN=1` để tắt bộ kết xuất màn hình luân phiên toàn màn hình, giữ lại lịch sử cuộn của terminal (phù hợp với các tình huống cần xem lại lịch sử hội thoại).

### v2.1.131 | [Liên kết phát hành](https://github.com/anthropics/claude-code/releases/tag/v2.1.131)
- **Sửa lỗi khẩn cấp trên Windows**: Khắc phục lỗi `createRequire` polyfill do đường dẫn build được mã hóa cứng trong SDK đóng gói, gây lỗi kích hoạt tiện ích mở rộng trên VS Code cho người dùng Windows.
- **Sửa lỗi xác thực Mantle**: Bổ sung tiêu đề yêu cầu `x-api-key` bị thiếu, giải quyết lỗi xác thực điểm cuối Mantle.

### v2.1.129 | [Liên kết phát hành](https://github.com/anthropics/claude-code/releases/tag/v2.1.129)
- **Tải plugin từ xa**: ` --plugin-url <url>` hỗ trợ tải trực tiếp tệp nén plugin `.zip` từ URL, không cần cài đặt cục bộ.
- **Chế độ đầu ra đồng bộ hóa bắt buộc**: `CLAUDE_CODE_FORCE_SYNC_OUTPUT=1` giải quyết các vấn đề phát hiện tự động của terminal như Emacs `eat` không hoạt động.
- **Liên quan đến trình quản lý gói**: Hỗ trợ biến môi trường (tóm tắt bị cắt bớt, suy đoán liên quan đến `CLAUDE_CODE_PACKAGE_MANAGER`).

---

## 3. Issues cộng đồng nổi bật

| # | Trạng thái | Tiêu đề | Bình luận | 👍 | Điểm quan trọng |
|---|:---|:---|:---:|:---:|:---|
| [#13480](https://github.com/anthropics/claude-code/issues/13480) | 🟢 ĐÃ ĐÓNG | Hình ảnh siêu lớn làm hỏng hội thoại vĩnh viễn, không thể khôi phục | 98 | 85 | **Lỗi tồn đọng lịch sử được đánh giá cao cuối cùng đã được sửa**. Tải lên hình ảnh vượt quá giới hạn khiến hội thoại bị treo, người dùng buộc phải khởi động lại. 98 bình luận phản ánh điểm đau này có tác động rộng rãi, phản hồi của cộng đồng tích cực sau khi sửa lỗi. |
| [#30154](https://github.com/anthropics/claude-code/issues/30154) | 🔴 MỞ | **Hỗ trợ đa cửa sổ** (Claude Code Desktop) | 41 | 123 | **Yêu cầu chức năng được đánh giá cao nhất**. Chuyển đổi thanh bên cửa sổ đơn bị giảm hiệu quả, nhà phát triển rất cần làm việc song song trên nhiều màn hình. 123 👍 cho thấy nhu cầu cấp thiết. |
| [#7744](https://github.com/anthropics/claude-code/issues/7744) | 🔴 MỞ | Khách hàng MCP bỏ qua `scopes_supported` dẫn đến không thể phát hành mã thông báo làm mới | 18 | 27 | **Vấn đề cốt lõi về khả năng tương tác OAuth/MCP**. Ảnh hưởng đến triển khai liên kết danh tính cấp doanh nghiệp, phernandez cung cấp phân tích giao thức và tái hiện chi tiết. |
| [#56595](https://github.com/anthropics/claude-code/issues/56595) | 🟢 ĐÃ ĐÓNG | v2.1.129 gửi cờ `anthropic_beta` không được hỗ trợ tới Bedrock gây lỗi 400 | 11 | 10 | **Sự cố khẩn cấp cho người dùng doanh nghiệp AWS**. Phiên bản mới nhanh chóng được khôi phục và sửa lỗi, cho thấy tốc độ phản hồi của Anthropic đối với khả năng tương thích của nhà cung cấp dịch vụ đám mây. |
| [#15762](https://github.com/anthropics/claude-code/issues/15762) | 🔴 MỞ | **Đổi tên phiên thông minh** | 10 | 37 | Tên phiên bị lộn xộn khi làm việc trên nhiều dự án, người dùng đề xuất đổi tên tự động dựa trên ngữ cảnh. 37 👍 chứng tỏ chi tiết UX ảnh hưởng đến hiệu quả công việc. |
| [#36547](https://github.com/anthropics/claude-code/issues/36547) | 🔴 MỞ | Trình kết nối MCP Gmail: Thêm công cụ quản lý nhãn/lưu trữ | 8 | 21 | **Mở rộng hệ sinh thái MCP**. Bộ công cụ Gmail hiện tại thiếu quản lý vòng đời thư, hạn chế độ sâu của luồng công việc tự động. |
| [#49282](https://github.com/anthropics/claude-code/issues/49282) | 🔴 MỞ | Đăng ký lại quyền riêng tư sau mỗi lần cập nhật trên macOS (vấn đề đường dẫn phiên bản) | 8 | 3 | **Lỗi kiến trúc ký hiệu và đường dẫn**. Số phiên bản được ghi vào đường dẫn cài đặt khiến hệ thống coi đó là ứng dụng mới, trải nghiệm ủy quyền lặp đi lặp lại của người dùng rất tệ. |
| [#36091](https://github.com/anthropics/claude-code/issues/36091) | 🟢 ĐÃ ĐÓNG | `CLAUDE_CODE_SKIP_PROMPT_HISTORY` vô hiệu hóa nhầm toàn bộ tính bền vững của phiên | 7 | 1 | **Lỗi hồi quy**. Biến môi trường từ v2.1.77 trở đi có phạm vi hoạt động mở rộng, dẫn đến mất `transcript.jsonl` và các tệp khác, khôi phục dữ liệu khó khăn. |
| [#53437](https://github.com/anthropics/claude-code/issues/53437) | 🔴 MỞ | "Thử ngay" trên trình duyệt mới không thể gửi lời nhắc | 5 | 0 | **Chặn trải nghiệm Web**. Lỗi tương tác chính trong việc quảng bá Claude Code trên nền tảng Web. |
| [#56182](https://github.com/anthropics/claude-code/issues/56182) | 🔴 MỞ | Máy tính để bàn Windows bị treo câm hoàn toàn sau sự cố ngày 4/5 | 5 | 0 | **Di chứng sau sự cố Opus 4.7**. Liên quan đến sự cố API của Anthropic ngày 4 tháng 5, máy tính để bàn Windows tiếp tục bị ảnh hưởng. |

---

## 4. Tiến độ PR quan trọng

| # | Trạng thái | Tiêu đề | Nội dung sửa lỗi/chức năng |
|---|---|---|---|
| [#56334](https://github.com/anthropics/claude-code/pull/56334) | 🔴 MỞ | Tài liệu hướng dẫn chế độ nhà phát triển Windows | Bổ sung giải thích về việc chế độ Developer Mode của Windows yêu cầu liên kết tượng trưng, giải quyết vấn đề lỗi im lặng "0 tokens" trong #55263 |
| [#49596](https://github.com/anthropics/claude-code/pull/49596) | 🔴 MỞ | Trích xuất client API GitHub chung vào `github-api.ts` | Tái cấu trúc mã: thống nhất lớp gọi API GitHub, tăng cường phạm vi kiểm thử, nâng cao khả năng bảo trì |
| [#56784](https://github.com/anthropics/claude-code/pull/56784) | 🔴 MỞ | Khắc phục GitHub Actions vào commit SHA | **Bảo mật chuỗi cung ứng**: Tham chiếu Action của bên thứ ba được thay đổi từ thẻ nổi sang commit SHA không thể thay đổi, ngăn chặn tấn công đầu độc phụ thuộc |
| [#56621](https://github.com/anthropics/claude-code/pull/56621) | 🔴 MỞ | Sửa lỗi quy tắc trùng lặp khởi tạo tường lửa | `init-firewall.sh` gặp lỗi do thêm quy tắc trùng lặp khi khởi động container/sandbox, thêm kiểm tra sự tồn tại |
| [#20824](https://github.com/anthropics/claude-code/pull/20824) | 🟢 ĐÃ ĐÓNG | Hướng dẫn trợ lý AI `CLAUDE.md` mới | Quy tắc hợp tác AI cấp dự án: cấu trúc dự án, hệ thống plugin, các thực hành tốt nhất về quy trình làm việc phát triển |
| [#42162](https://github.com/anthropics/claude-code/pull/42162) | 🟢 ĐÃ ĐÓNG | Sửa lỗi đường dẫn tương đối của plugin hookify | Đường dẫn cài đặt bộ nhớ đệm của plugin thay đổi gây lỗi nhập tuyệt đối, chuyển sang đường dẫn tương đối để tăng khả năng tương thích |

> Lưu ý: Chỉ có 6 PR được cập nhật trong vòng 24 giờ, tất cả các PR trên đều đã được đề cập.

---

## 5. Xu hướng yêu cầu chức năng

Dựa trên phân tích 50 Issues đang hoạt động, sự quan tâm của cộng đồng tập trung vào năm hướng chính:

| Hướng xu hướng | Issue đại diện | Chỉ số nhiệt |
|:---|:---|:---:|
| **🖥️ Nâng cấp trải nghiệm IDE/Máy tính để bàn** | #30154 đa cửa sổ, #15762 đổi tên phiên thông minh, #46419 tùy chỉnh thanh trạng thái | 👍 160+ |
| **🔐 Kiểm soát quyền và Sandbox chi tiết** | #56843 phơi bày trạng thái sandbox, #56834 thanh trạng thái quyền, #56854 kế thừa quyền đại lý phụ | Bình luận 6+ |
| **🌐 Mở rộng hệ sinh thái MCP** | #36547 Quản lý nhãn Gmail, #56849 Công cụ thực thi MCP theo chương trình, #7744 Sửa phạm vi OAuth | 👍 48+ |
| **🪟 Tính ổn định nền tảng Windows** | #56182 Treo, #56593 Bash EEXIST, #49282 Đăng ký lại quyền, #48378 Tiêm mã thông báo OAuth | Issues mới 4+ |
| **⏱️ Nhận thức về Phiên và Thời gian** | #56855 Nhận thức dấu thời gian, #50246 Mô hình hàng đợi tin nhắn, #56841 Phạm vi ngày /insights | Bình luận 6+ |

---

## 6. Điểm quan tâm của nhà phát triển

### 🔴 Điểm đau tần suất cao

| Điểm đau | Biểu hiện | Phạm vi ảnh hưởng |
|:---|:---|:---|
| **Trải nghiệm công dân hạng hai trên Windows** | Lỗi kích hoạt tiện ích mở rộng, vấn đề quyền đường dẫn, lỗi im lặng liên kết tượng trưng, cấp phép lại sau cập nhật | Toàn bộ người dùng Windows |
| **Hệ thống quyền không minh bạch** | Kế thừa quyền đại lý phụ lộn xộn, hành vi chế độ plan/acceptEdits không nhất quán, thiếu thông tin thanh trạng thái | Người dùng đa đại lý/tự động hóa |
| **Tính bền vững của dữ liệu bền vững** | Phạm vi biến môi trường sai, phiên bị hỏng không thể khôi phục, /insights ghi đè không có cảnh báo | Người dùng phiên dài/nhạy cảm về dữ liệu |

### 🟡 Nhu cầu mới nổi

- **Gọi từ xa/theo chương trình**: Yêu cầu #56849 CLI trực tiếp thực thi công cụ MCP, phản ánh mong muốn của người dùng nhúng Claude Code vào quy trình CI/CD hoặc quy trình tập lệnh.
- **Tuân thủ doanh nghiệp**: #56784 Khắc phục SHA, #7744 Tuân thủ phạm vi OAuth, cho thấy yêu cầu bảo mật triển khai cấp doanh nghiệp ngày càng tăng.
- **Khả năng tương thích hệ sinh thái terminal**: Các yêu cầu về khả năng tương thích trong các tình huống biên như Emacs `eat`, Windows Terminal, PowerShell, v.v., đang tăng lên.

---

*Bản tin hàng ngày được tạo dựa trên dữ liệu công khai từ github.com/anthropics/claude-code, tất cả các liên kết đều có thể truy cập trực tiếp để có được cuộc thảo luận đầy đủ.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Bản tin hàng ngày về cộng đồng OpenAI Codex | 2026-05-07

---

## 1. Tổng quan hôm nay

Giới hạn ngữ cảnh 400K của GPT-5.5 đã gây ra phản ứng mạnh mẽ trong cộng đồng, #19464 trở thành chủ đề được thảo luận nhiều nhất (132 bình luận, 167 👍); đồng thời, nhóm đã thúc đẩy mạnh mẽ các chức năng điều khiển từ xa, tiêu chuẩn hóa chuỗi công cụ MCP và quản trị cấp doanh nghiệp, với hơn 15 PR mới được thêm vào trong 24 giờ qua, bao gồm quản lý vòng đời app-server, đơn giản hóa không gian tên công cụ và thực thi chính sách lưu trữ.

---

## 2. Phát hành phiên bản

| Phiên bản | Mô tả |
|:---|:---|
| [rust-v0.129.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.129.0-alpha.9) | Phiên bản phát hành trước CLI Rust |
| [rust-v0.129.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.129.0-alpha.10) | Như trên |
| [rust-v0.129.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.129.0-alpha.12) | Như trên |
| [rusty-v8-v147.4.0](https://github.com/openai/codex/releases/tag/rusty-v8-v147.4.0) | Cập nhật ràng buộc V8 |

> Lưu ý: Tất cả đều là các bản cập nhật trước khi phát hành/thành phần, không có nhật ký thay đổi chi tiết.

---

## 3. Issues cộng đồng nổi bật

| # | Trạng thái | Tiêu đề | Bình luận | 👍 | Điểm mấu chốt |
|:---|:---|:---|:---:|:---|:---|
| [#19464](https://github.com/openai/codex/issues/19464) | 🔴 MỞ | **Hỗ trợ ngữ cảnh 1M Token cho GPT-5.5** | 132 | 167 | **Nóng nhất hôm nay**. Người dùng chỉ ra rằng GPT-5.5 trong Codex chỉ mở ra ngữ cảnh 400K, trong khi phiên bản API hỗ trợ 1M, hạn chế nghiêm trọng việc xử lý kho mã lớn. Cộng đồng kêu gọi căn chỉnh khả năng API, người dùng doanh nghiệp gọi đây là "rào cản áp dụng". |
| [#20161](https://github.com/openai/codex/issues/20161) | 🟢 ĐÃ ĐÓNG | Xác minh số điện thoại không hợp lệ | 94 | 71 | Sau khi đăng nhập SSO, bắt buộc phải có số điện thoại chưa liên kết, gây gián đoạn đăng nhập đa thiết bị. Đã đóng nhưng phản ánh sự yếu kém của quy trình xác thực danh tính. |
| [#8259](https://github.com/openai/codex/issues/8259) | 🔴 MỞ | Tối ưu hóa khả năng đọc bảng Markdown | 29 | 110 | Vấn đề trải nghiệm TUI tồn tại lâu đời, khoảng trắng bảng bị lệch ảnh hưởng đến việc xem xét thủ công. 👍 cao cho thấy các khoản nợ trải nghiệm cơ bản đang tích lũy. |
| [#19558](https://github.com/openai/codex/issues/19558) | 🔴 MỞ | Nén ngữ cảnh từ xa của GPT-5.5 không thành công gây treo luồng | 17 | 10 | Sau khi nén tự động thất bại, luồng trở nên không khả dụng vĩnh viễn, chỉ có thể tạo mới. Ảnh hưởng nghiêm trọng đến tính ổn định của các phiên dài, kết hợp với điểm đau ngữ cảnh #19464. |
| [#5547](https://github.com/openai/codex/issues/5547) | 🔴 MỞ | `/review` hỗ trợ số lượng vấn đề cấu hình | 15 | 58 | Chức năng xem xét mã được đánh giá cao, nhưng thiếu kiểm soát chi tiết. Cộng đồng hy vọng tránh "xem xét quá mức" hoặc tập trung vào các vấn đề quan trọng. |
| [#19601](https://github.com/openai/codex/issues/19601) | 🟢 ĐÃ ĐÓNG | Nhiệm vụ không an toàn vô tình kích hoạt kiểm soát mạng | 13 | 11 | Báo động sai của hệ thống kiểm tra bảo mật làm gián đoạn phiên, ảnh hưởng đến người dùng Pro. Phản ánh vấn đề về độ chính xác của chính sách kiểm duyệt nội dung. |
| [#20162](https://github.com/openai/codex/issues/20161) | 🔴 MỞ | Cài đặt tốc độ tiện ích mở rộng VS Code bị đặt lại và không thể sửa đổi | 11 | 7 | Lỗi bền vững cấu hình, ảnh hưởng đến tính liên tục của quy trình làm việc IDE. Người dùng đăng ký Business báo cáo. |
| [#20845](https://github.com/openai/codex/issues/20845) | 🔴 MỞ | Nhật ký `taskkill` của đầu ra `/mcp` trên Windows làm ô nhiễm | 9 | 1 | Các công cụ MCP trên PowerShell của Windows tạo ra thông tin chấm dứt tiến trình dư thừa, trải nghiệm terminal kém. |
| [#20315](https://github.com/openai/codex/issues/20315) | 🔴 MỞ | `browser-use` bị Windows Defender gắn cờ là trojan | 9 | 6 | Tiện ích tự động hóa trình duyệt kích hoạt báo động sai của phần mềm bảo mật, cản trở việc người dùng Windows sử dụng chức năng agentic. |
| [#20740](https://github.com/openai/codex/issues/20740) | 🔴 MỞ | Bộ nhớ phiên cơ bản tăng lên 75GB+ | 4 | 0 | **Hồi quy hiệu suất nghiêm trọng**. Rò rỉ bộ nhớ trên macOS dẫn đến sự cố cấp hệ thống, cần điều tra khẩn cấp. |

---

## 4. Tiến độ PR quan trọng

| # | Trạng thái | Tiêu đề | Nội dung cốt lõi |
|:---|:---|:---|:---|
| [#21424](https://github.com/openai/codex/pull/21424) | 🟡 MỞ | Lệnh `remote-control` cấp cao nhất | Đơn giản hóa `codex --enable remote_control app-server --listen off` thành `codex remote-control`, giảm gánh nặng nhận thức cho triển khai từ xa không đầu |
| [#20718](https://github.com/openai/codex/pull/20718) | 🟡 MỞ | Quản lý vòng đời tiến trình nền app-server dành riêng cho Unix | Cung cấp khả năng khởi động có thể đọc được bởi máy cho các tình huống từ xa SSH và `remote_control`, hỗ trợ "máy phát triển từ xa sẵn sàng sử dụng ngay" |
| [#21442](https://github.com/openai/codex/pull/21442) | 🟡 MỞ | Loại bỏ tiền tố `mcp__` của công cụ MCP | Loại bỏ tiền tố khỏi không gian tên công cụ hiển thị cho mô hình, `codex_apps__calendar.create_event` giữ lại tên phẳng, làm cho việc gọi công cụ trở nên tự nhiên hơn |
| [#21427](https://github.com/openai/codex/pull/21427) | 🟡 MỞ | Xóa lớp gián tiếp của kế hoạch xử lý công cụ | Loại bỏ sự phụ thuộc đăng ký của liệt kê tĩnh `ToolHandlerKind`, mã đăng ký và lắp ráp công cụ được hoàn thành tại cùng một vị trí, giảm độ phức tạp mở rộng |
| [#21109](https://github.com/openai/codex/pull/21109) | 🟡 MỞ | Lệnh tải lên tệp cục bộ TUI `/upload` | Dựa trên khả năng staging từ xa của app-server, người dùng có thể truyền tệp cục bộ dưới dạng luồng thông qua `/upload <đường dẫn>` vào máy chủ từ xa |
| [#21108](https://github.com/openai/codex/pull/21108) | 🟡 MỞ | Tải lên tệp từ xa được lưu trữ (app-server) | Hỗ trợ phía máy chủ: lời gọi client `fs/createUpload` phân bổ đường dẫn do Codex quản lý, giải quyết vấn đề "đường dẫn client không thể truy cập từ xa" |
| [#21413](https://github.com/openai/codex/pull/21413) | 🟡 MỞ | Thực thi bắt buộc các yêu cầu artifact được lưu trữ | Quản trị viên doanh nghiệp có thể giới hạn nguồn gốc của tiện ích mở rộng Codex (skills/plugins), xác minh hiệu quả chính sách tại thời điểm chạy |
| [#21414](https://github.com/openai/codex/pull/21414) | 🟡 MỞ | Phơi bày các yêu cầu artifact được lưu trữ trên đám mây | Đồng bộ hóa chính sách cục bộ của #21413 với cổng quản lý đám mây, đảm bảo tính nhất quán của chính sách doanh nghiệp |
| [#21441](https://github.com/openai/codex/pull/21441) | 🟡 MỞ | Tải danh sách skills song song | Độ phức tạp song song `skills/list` tăng lên 8, dấu vết khởi động nguội hiển thị hoạt động này trước đó chặn hàng đợi cấu hình dùng chung |
| [#21340](https://github.com/openai/codex/pull/21340) | 🟡 MỞ | Hàng đợi app-server hỗ trợ chế độ đọc dùng chung | Các yêu cầu đọc dùng chung liên tiếp trong cùng một họ có thể được thực thi song song, các yêu cầu độc quyền vẫn theo thứ tự, các dấu hiệu đầu tiên là `skills/list`, `config/read`, `plugin/list` |

---

## 5. Xu hướng yêu cầu chức năng

```
┌─────────────────────────────────────────┐
│  🔥 Căn chỉnh khả năng mô hình mới (Ngữ cảnh 1M GPT-5.5)   │ ← Sự quan tâm bùng nổ
│  🖥️  Tinh chỉnh trải nghiệm TUI/CLI (Bảng, Vim, Tải lên)│ ← Tích lũy dài hạn
│  🏢 Quản trị doanh nghiệp và chính sách lưu trữ (Kiểm soát artifact)   │ ← Đầu tư dày đặc trong tuần này
│  🌐 Luồng công việc từ xa/SSH (remote-control)    │ ← Cơ sở hạ tầng hóa
│  🔧 Tiêu chuẩn hóa hệ sinh thái MCP (Không gian tên, Khám phá công cụ)  │ ← Giai đoạn tích hợp hệ sinh thái
│  🪟 Tính ổn định nền tảng Windows (Defender, Tiến trình)  │ ← Nợ nền tảng
│  ⚡ Kiểm soát hiệu suất và tài nguyên (Bộ nhớ, Song song, Khởi động nguội)  │ ← Ràng buộc kỹ thuật cứng
└─────────────────────────────────────────┘
```

**Thông tin chi tiết chính**: Nhu cầu cộng đồng đang chuyển từ "có hay không có chức năng" sang "độ sâu trải nghiệm" và "sẵn sàng cho doanh nghiệp". Giới hạn ngữ cảnh GPT-5.5 đã trở thành rào cản rõ ràng cho việc áp dụng, trong khi việc nhóm đồng thời thúc đẩy điều khiển từ xa, chính sách doanh nghiệp và tiêu chuẩn hóa MCP cho thấy Codex đang phát triển từ một công cụ cá nhân thành một cơ sở hạ tầng nhóm.

---

## 6. Điểm quan tâm của nhà phát triển

| Loại điểm đau | Biểu hiện | Issue đại diện |
|:---|:---|:---|
| **Trần ngữ cảnh** | Kho mã lớn/phiên dài buộc phải cắt giảm, chênh lệch rõ rệt 400K so với 1M | #19464, #19558 |
| **Tính công bằng nền tảng** | Người dùng Windows liên tục gặp phải lỗi chức năng, báo động sai bảo mật, ô nhiễm tiến trình | #20845, #20315, #21438, #20526 |
| **Tính bền vững của cấu hình** | Cài đặt bị mất, phiên biến mất, nhập thất bại, phá vỡ tính liên tục của công việc | #20162, #20493, #21128 |
| **Kiểm soát tài nguyên ngoài tầm tay** | Rò rỉ bộ nhớ, CPU tăng cao, rò rỉ PTY, ảnh hưởng đến tính ổn định của hệ thống | #20740, #19903, #17133 |
| **Ma sát chính sách bảo mật** | Kiểm soát tự động quá nhạy cảm làm gián đoạn luồng phát triển bình thường | #19601 |
| **Rào cản khả năng mở rộng** | Tải Skills/MCP bị chặn, phân tích cấu hình yếu kém, thiếu kiểm soát doanh nghiệp | #21441, #21111, #21413 |

**Tâm trạng của nhà phát triển**: Sự công nhận về khả năng agentic của Codex rất cao (chế độ Vim, `/review` được đánh giá cao), nhưng sự kiên nhẫn đối với **tính ổn định, tính nhất quán nền tảng và sự trưởng thành của các tình huống doanh nghiệp** đang cạn kiệt. Các vấn đề mới do tái cấu trúc Rust (v0.120+) đưa vào (Gatekeeper, rò rỉ bộ nhớ) chồng chéo với các khoản nợ TUI hiện có, tạo ra nhận thức về "tiến về chức năng, dao động về trải nghiệm".

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Bản tin hàng ngày về cộng đồng Gemini CLI | 2026-05-07

## Tổng quan hôm nay

Hôm nay, Gemini CLI đã phát hành dày đặc ba phiên bản (v0.41.2, v0.42.0-preview.2 và bản dựng ban đêm), tập trung chủ yếu vào việc sửa lỗi chặn hạn ngạch mô hình và điều kiện tranh chấp phê duyệt công cụ. Đồng thời, cuộc thảo luận về lỗi nghiêm trọng của việc `gemini-3-flash-preview` hết hạn ngạch và không thể chuyển sang mô hình khác đã bùng nổ trong cộng đồng, trong khi việc sửa lỗi lỗ hổng bảo mật SSRF và tái cấu trúc hệ thống bộ nhớ trở thành trọng tâm cốt lõi ở cấp độ mã.

---

## Phát hành phiên bản

### v0.42.0-preview.2
| Thuộc tính | Nội dung |
|:---|:---|
| Loại | Bản vá xem trước |
| Thay đổi cốt lõi | Cherry-pick sửa lỗi vào nhánh v0.42.0-preview.1 |
| Người phát hành | @gemini-cli-robot (Tự động hóa) |

### v0.42.0-nightly.20260506.g80d269054
| Thuộc tính | Nội dung |
|:---|:---|
| Loại | Bản dựng ban đêm |
| Sửa lỗi cốt lõi | ① Điều kiện tranh chấp công cụ phê duyệt của máy chủ A2A; ② Vấn đề cắt viền của hộp thoại cấu hình |
| Người đóng góp | @kschaab, @jackwotherspoon |

### v0.41.2
| Thuộc tính | Nội dung |
|:---|:---|
| Loại | Bản vá ổn định |
| Thay đổi cốt lõi | Đồng bộ hóa cherry-pick sửa lỗi vào nhánh v0.41.1 |
| Người phát hành | @gemini-cli-robot (Tự động hóa) |

> 🔗 [Trang phát hành](https://github.com/google-gemini/gemini-cli/releases)

---

## Issues cộng đồng nổi bật (Chọn lọc 10 mục)

| # | Issue | Trạng thái | Vấn đề cốt lõi | Mức độ quan tâm cộng đồng | Phân tích tầm quan trọng |
|:---|:---|:---|:---|:---|:---|
| [#26614](https://github.com/google-gemini/gemini-cli/issues/26614) | Chuyển đổi mô hình bị chặn bởi hạn ngạch | 🔴 MỞ | Sau khi `gemini-3-flash-preview` hết hạn ngạch, ngay cả khi chuyển rõ ràng sang `gemini-3.1-pro-preview`, việc thực thi vẫn bị chặn hoàn toàn | 1👍, 1 bình luận | **Lỗi cấp P0**: Ảnh hưởng trực tiếp đến luồng công việc cốt lõi, người dùng buộc phải ngừng sử dụng |
| [#26613](https://github.com/google-gemini/gemini-cli/issues/26613) | Tương tự (mục trùng lặp đã đóng) | 🟢 ĐÃ ĐÓNG | Tương tự, tác giả bổ sung và xác nhận rằng v0.41.2 vẫn tồn tại | - | Xác nhận bản vá không giải quyết triệt để, cần tiếp tục theo dõi #26614 |
| [#26563](https://github.com/google-gemini/gemini-cli/issues/26563) | Lệnh `/memory add` không hoạt động | 🔴 MỞ | Công cụ `save_memory` trong v0.41.1 chưa được đăng ký, dẫn đến lỗi chức năng bộ nhớ | 2 bình luận | Hồi quy chức năng, liên quan đến di chuyển hệ thống bộ nhớ v2 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Lệnh Shell giả chết | 🔴 MỞ | Sau khi thực thi lệnh đơn giản, UI tiếp tục hiển thị "chờ nhập", nhưng thực tế đã hoàn thành | 3👍, 2 bình luận | Lỗi xảy ra thường xuyên, ảnh hưởng nghiêm trọng đến trải nghiệm tương tác |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | Cửa sổ bật lên quyền trùng lặp | 🔴 MỞ | Cài đặt "Luôn cho phép tất cả các phiên trong tương lai" không hoạt động, yêu cầu ủy quyền liên tục cho cùng một tệp | 3 bình luận | Cơ chế tin cậy không hoạt động, gây mệt mỏi cho người dùng |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Agent phụ báo cáo thành công sai sau số vòng lặp tối đa | 🔴 MỞ | `codebase_investigator` đạt `MAX_TURNS` vẫn trả về trạng thái `GOAL`, che giấu sự thật bị gián đoạn | 2👍, 5 bình luận | Lỗi hệ thống đánh giá, dẫn đến quyết định sai lầm cho người dùng |
| [#23718](https://github.com/google-gemini/gemini-cli/issues/23718) | Lời nhắc khôi phục phiên chứa dấu ngoặc kép thừa | 🟢 ĐÃ ĐÓNG | Trong cmd Windows, ID phiên bị bao bọc dấu ngoặc kép sai | 19 bình luận | Đã sửa (xem PR #26599), vấn đề gây khó chịu kéo dài cho người dùng Windows |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Hệ thống đánh giá cấp thành phần | 🔴 MỞ | Kiểm tra đánh giá hành vi mở rộng lên 76 mục, cần thiết lập đánh giá chi tiết hơn | 5 bình luận | Cơ sở hạ tầng kỹ thuật chất lượng, quyết định độ tin cậy dài hạn |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Thao tác tệp nhận biết AST | 🔴 MỞ | Khám phá đọc và điều hướng mã chính xác dựa trên AST, giảm lãng phí token | 1👍, 5 bình luận | Tối ưu hóa cấp kiến trúc, ảnh hưởng trực tiếp đến hiệu suất trong các tình huống kho mã lớn |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | Số lượng công cụ vượt quá giới hạn 400 lỗi | 🔴 MỞ | Khi có hơn 128 công cụ, kích hoạt lỗi API 400, cần thu hẹp thông minh | 1 bình luận | Rào cản khả năng mở rộng, vấn đề bắt buộc phải giải quyết sau khi hệ sinh thái MCP phình to |

---

## Tiến trình PR quan trọng (Chọn lọc 10 mục)

| # | PR | Trạng thái | Lĩnh vực | Nội dung cốt lõi | Đánh giá ảnh hưởng |
|:---|:---|:---|:---|:---|:---|
| [#26615](https://github.com/google-gemini/gemini-cli/pull/26615) | Sửa lỗ hổng SSRF web-fetch | 🔴 MỞ | Bảo mật | Ngăn chặn chuyển hướng mở bỏ qua danh sách đen IP riêng: `redirect: 'manual'` + kiểm tra lại chuỗi chuyển hướng | **Sửa lỗi bảo mật quan trọng**, chặn bề mặt tấn công thăm dò mạng nội bộ |
| [#26594](https://github.com/google-gemini/gemini-cli/pull/26594) | Chính sách GC biên giới linh hoạt | 🔴 MỞ | Cốt lõi | Sửa vòng lặp phản hồi của trình quản lý ngữ cảnh, thêm nhật ký độ chính xác tính toán token | Nâng cao tính ổn định, giải quyết các tình huống rò rỉ bộ nhớ hiếm gặp |
| [#26599](https://github.com/google-gemini/gemini-cli/pull/26599) | Loại bỏ bao bọc dấu ngoặc kép thừa của tham số | 🟢 ĐÃ ĐÓNG | Cốt lõi | Trong cmd Windows, lời nhắc khôi phục phiên không còn bao bọc dấu ngoặc kép, sửa #23718 | Trải nghiệm người dùng, vấn đề Issue dài 19 bình luận cuối cùng đã được giải quyết |
| [#26529](https://github.com/google-gemini/gemini-cli/pull/26529) | Tiêu chuẩn hóa trạng thái vòng đời công cụ | 🔴 MỞ | Agent | `AgentProtocol` giới thiệu công cụ bậc một, tách biệt đường ống hiển thị UI khỏi siêu dữ liệu cũ | Hiện đại hóa kiến trúc, đặt nền móng cho hình ảnh hóa song song đa công cụ |
| [#26548](https://github.com/google-gemini/gemini-cli/pull/26548) | Lưu bộ nhớ đệm quyết định định tuyến mô hình | 🔴 MỞ | Cốt lõi/Agent | `LocalAgentExecutor` lưu bộ nhớ đệm kết quả định tuyến của chế độ `auto` trong cùng một phiên, tránh gọi lại lặp lại | Tối ưu hóa hiệu suất, giải quyết chi phí dư thừa #25156 |
| [#26605](https://github.com/google-gemini/gemini-cli/pull/26605) | Ẩn `/memory add` của bộ nhớ v2 | 🔴 MỞ | Cốt lõi | Khi `experimental.memoryV2` được kích hoạt, ẩn lệnh phụ `/memory add` không hoạt động | Làm cho chức năng trung thực, tránh người dùng gặp phải #26563 |
| [#26609](https://github.com/google-gemini/gemini-cli/pull/26609) | Sửa hiển thị bản ghi giọng nói | 🔴 MỞ | UX | Kéo dài thời gian chờ ghi âm lên 4000ms (dịch vụ thời gian thực) / 3000ms | Độ tin cậy tương tác giọng nói, giải quyết vấn đề mất văn bản sau khi thả tay |
| [#26554](https://github.com/google-gemini/gemini-cli/pull/26554) | Di chuyển giải thích công cụ MCP | 🟢 ĐÃ ĐÓNG | Giao thức ACP | Di chuyển giải thích công cụ từ luồng suy nghĩ sang nội dung cuộc gọi công cụ, loại bỏ tiếng ồn của UI | Tối ưu hóa trải nghiệm giao thức ACP |
| [#26303](https://github.com/google-gemini/gemini-cli/pull/26303) | Tăng cường vai trò đánh giá Bot | 🔴 MỞ | Bot | Làm rõ vai trò chỉ phê bình của đại lý đánh giá, vòng lặp phản hồi đa vòng, tăng cường nhận dạng xung đột kiến trúc | Nâng cấp cửa ngõ chất lượng tự động |
| [#25825](https://github.com/google-gemini/gemini-cli/pull/25825) | Luồng đầu ra Shell thời gian thực | 🟢 ĐÃ ĐÓNG | Shell | `stream_output: true` + `is_background: true` chuyển tiếp stdout theo thời gian thực | Khả năng quan sát tác vụ nền, tắt "cửa sổ mù" |

---

## Xu hướng yêu cầu chức năng

Dựa trên phân tích phân cụm 50 Issues đang hoạt động:

```
┌─────────────────────────────────────────┬──────────┬─────────────────────────────┐
│ Hướng                                   │ Chỉ số nhiệt │ Đại diện điển hình                     │
├─────────────────────────────────────────┼──────────┼─────────────────────────────┤
│ 1. Hạn ngạch mô hình & Chiến lược định tuyến                   │ ████████ │ #26614, #26548, #24246      │
│    → Chuyển đổi dự phòng đa mô hình, giảm dần thông minh, tối ưu hóa bộ nhớ đệm  │          │                             │
├─────────────────────────────────────────┼──────────┼─────────────────────────────┤
│ 2. Di chuyển hệ thống bộ nhớ v2                 │ ███████░ │ #26563, #26605, #26525-26522│
│    → Khử nhiễu xác định, cách ly bản vá không hợp lệ, chiến lược thử lại       │          │                             │
├─────────────────────────────────────────┼──────────┼─────────────────────────────┤
│ 3. Kỹ thuật độ tin cậy của Agent                 │ ██████░░ │ #22323, #24353, #22232      │
│    → Khôi phục Agent phụ, hệ thống đánh giá, xử lý số vòng lặp tối đa     │          │                             │
├─────────────────────────────────────────┼──────────┼─────────────────────────────┤
│ 4. Trải nghiệm tương tác Terminal                  │ █████░░░ │ #25166, #23718, #25218      │
│    → Hiển thị luồng, phát hiện giả chết, hỗ trợ trợ năng     │          │                             │
├─────────────────────────────────────────┼──────────┼─────────────────────────────┤
│ 5. Nhận thức kho mã thông minh                 │ ████░░░░ │ #22745, #22746, #23571      │
│    → Tích hợp công cụ AST, đọc chính xác, quản lý tệp tạm thời     │          │                             │
├─────────────────────────────────────────┼──────────┼─────────────────────────────┤
│ 6. Bảo mật và Quyền                               | ████░░░░ │ #26615, #24916, #22672      │
│    → Bảo vệ SSRF, ủy quyền bền vững, chặn các thao tác phá hoại    │          │                             │
└─────────────────────────────────────────┴──────────┴─────────────────────────────┘
```

---

## Điểm quan tâm của nhà phát triển

### 🔴 Điểm đau gây cản trở (ảnh hưởng đến việc phát triển hàng ngày)

| Điểm đau | Biểu hiện | Liên quan đến Issue |
|:---|:---|:---|
| **Chặn cứng hạn ngạch mô hình** | Hết hạn ngạch một mô hình là dừng toàn bộ hoạt động, không thể chuyển sang mô hình khả dụng tự động hoặc thủ công | #26614, #26613 |
| **Tương tác Shell giả chết** | Lệnh đã hoàn thành nhưng UI bị treo, cần buộc thoát | #25166 |
| **Bộ nhớ quyền không hoạt động** | Lời hứa "luôn cho phép" không được thực hiện, làm gián đoạn trạng thái luồng do tần suất cao | #24916 |

### 🟡 Ma sát di chuyển kiến trúc

| Điểm đau | Nguyên nhân gốc rễ | Tiến trình |
|:---|:---|:---|
| **Ngắt quãng chức năng hệ thống bộ nhớ v1→v2** | Công cụ `save_memory` chưa được đăng ký trong v2, nhưng `/memory add` vẫn được hiển thị | PR #26605 đang chờ hợp nhất |
| **Giới hạn API sau khi số lượng công cụ tăng lên** | Vượt quá 128 công cụ kích hoạt lỗi 400, thiếu sự thu hẹp thông minh | #24246 đang chờ giải pháp |
| **Báo cáo sai trạng thái Agent phụ** | Việc gián đoạn `MAX_TURNS` được gói gọn thành thành công `GOAL` | #22323 chưa được giải quyết trong thời gian dài |

### 