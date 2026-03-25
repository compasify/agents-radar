# Cộng đồng AI CLI công cụ tin tức hàng ngày 2026-03-25

> Thời gian tạo: 2026-03-25 00:09 UTC | Công cụ được bao phủ: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## So sánh ngang

# Phân tích so sánh ngang hệ sinh thái công cụ AI CLI | 2026-03-25

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái công cụ AI CLI hiện tại đang thể hiện mô hình **"Một bá chủ, nhiều cường quốc, phân hóa theo chiều dọc"**: Claude Code chiếm lĩnh cao địa quy trình làm việc doanh nghiệp nhờ máy ảo Cowork và hệ sinh thái MCP, nhưng sự cố về hỗ trợ ARM và lỗ hổng bảo mật quyền truy cập đang gây khủng hoảng niềm tin; OpenAI Codex đang bắt kịp với việc tái cấu trúc Rust và đổi mới TUI, với tính minh bạch về phí là trở ngại lớn nhất; Google Gemini CLI dựa vào GSoC để thúc đẩy hệ thống đánh giá hành vi mở, kiến trúc đại lý phụ dẫn đầu; Các nhà sản xuất Trung Quốc (Kimi, Qwen) nhanh chóng bổ sung tích hợp IDE và hệ sinh thái plugin, nhưng vẫn còn khoảng cách về độ ổn định trong các tình huống quốc tế hóa. Xu hướng tổng thể đang chuyển đổi từ công cụ đơn lẻ sang **nền tảng hóa, có thể mở rộng, đa phương thức**, với việc cộng đồng tự tổ chức sửa lỗi trở thành một lực lượng quan trọng để lấp đầy khoảng trống phản hồi chính thức.

---

## 2. So sánh mức độ hoạt động của từng công cụ

| Công cụ | Cập nhật Issues | Cập nhật PR | Phát hành phiên bản | Động thái quan trọng |
|:---|:---:|:---:|:---:|:---|
| **Claude Code** | 50+ | 10+ | ❌ Không | Hỗ trợ ARM Cowork là chủ đề được thảo luận sôi nổi nhất (92👍), lỗ hổng bảo mật liên tục xuất hiện |
| **OpenAI Codex** | 50+ | 10+ | ✅ 4 alpha | Lặp lại cốt lõi Rust liên tục, chức năng luồng phụ `/btw` được triển khai |
| **Gemini CLI** | 50+ | 10+ | ✅ v0.36.0-preview | Dự án GSoC khởi động, hỗ trợ kiến trúc nhiều registry để lọc đại lý phụ |
| **GitHub Copilot CLI** | 50 | 0 | ❌ Không | Lỗi báo động sai chính sách MCP của tổ chức, tính khả dụng không nhất quán của mô hình là tâm điểm |
| **Kimi Code CLI** | 8 | 8 | ✅ v1.25.0 | Hệ thống plugin chuyển sang Beta, độ ổn định của công cụ writefile giảm |
| **OpenCode** | 50+ | 20+ | ✅ v1.3.1/v1.3.2 | Hơn 20 người đóng góp cùng nhau giải quyết rò rỉ bộ nhớ, OAuth của Claude bị ngắt |
| **Qwen Code** | 50 | 20 | ✅ v0.13.0-nightly | Tích hợp Telegram, tác vụ lặp lại, đề xuất tiếp theo được triển khai đồng thời |

> **Phân cấp mức độ hoạt động**: OpenCode ≈ Qwen > Claude Code ≈ Codex ≈ Gemini > Copilot CLI > Kimi (bị ảnh hưởng bởi sự kiện phiên bản)

---

## 3. Hướng chức năng được quan tâm chung

| Hướng chức năng | Công cụ liên quan | Yêu cầu cụ thể |
|:---|:---|:---|
| **Tích hợp sâu IDE** | OpenCode (#11176), Kimi (#1334, #1560), Qwen (#1370), Copilot CLI (#1703) | Tiện ích mở rộng gốc VS Code, plugin JetBrains, thống nhất lối vào cài đặt, hỗ trợ phát triển từ xa |
| **Củng cố quyền và bảo mật** | Claude Code (#33126, #34819), Codex (#15680), Gemini (#23717), Qwen (#2640, #2637) | Bảo vệ lộ thông tin xác thực, thực thi cửa kiểm soát quyền, duy trì phê duyệt, tính nhất quán của ranh giới hộp cát |
| **Quản lý ngữ cảnh/bộ nhớ** | Claude Code (#36582, #27140), Codex (#13784), Gemini (#22819), Qwen (#2523) | Độ ổn định hội thoại dài, nới lỏng giới hạn MEMORY.md, tách bộ nhớ toàn cục/dự án, đề xuất tiếp theo |
| **Tối ưu hóa hiệu suất và tài nguyên** | Claude Code (#27897), Codex (#11981, #15620), OpenCode (#16697), Qwen (#2632) | Giải quyết triệt để rò rỉ bộ nhớ, CPU chạy không tải, ngắt kết nối khi không hoạt động, dừng phản hồi dạng luồng |
| **Hệ sinh thái MCP/plugin** | Claude Code (#3426, #38045), Codex (#15169), Kimi (#1566), Gemini (#22712) | Độ ổn định phơi nhiễm công cụ, hỗ trợ MCP chính thức, khả năng tương tác plugin, móc nối vòng đời |
| **Tinh chỉnh trải nghiệm Terminal** | Claude Code (#36582), Codex (#15701), Gemini (#21109), Qwen (#241) | Sửa lỗi hành vi cuộn, phím tắt có thể cấu hình, hình ảnh hóa giọng nói, xuống dòng Shift+Enter |

---

## 4. Phân tích định vị khác biệt

| Công cụ | Trọng tâm chức năng cốt lõi | Chân dung người dùng mục tiêu | Đặc điểm lộ trình kỹ thuật |
|:---|:---|:---|:---|
| **Claude Code** | Máy ảo Cowork, Sử dụng Máy tính, Hệ sinh thái MCP | Nhà phát triển toàn diện cấp doanh nghiệp, cần môi trường thực thi cô lập | Cốt lõi đóng + plugin mở, ưu tiên máy tính Electron, ngữ cảnh dài 1M token |
| **OpenAI Codex** | Đổi mới tương tác TUI, hiệu suất Rust, nén `/compact` | Người dùng Terminal tối ưu hiệu quả, người dùng sâu hệ sinh thái OpenAI | Đang chuyển đổi tái cấu trúc Rust, đa phương thức (quay màn hình), chế độ YOLO cấp tiến |
| **Gemini CLI** | Kiến trúc đại lý phụ, Đánh giá hành vi, Hệ sinh thái mở GSoC | Nhà nghiên cứu, kỹ sư cần AI có thể giải thích | Kiến trúc Effect, nhiều registry, nhấn mạnh tính minh bạch của hệ thống đánh giá |
| **GitHub Copilot CLI** | Tích hợp liền mạch với hệ sinh thái GitHub, chính sách cấp tổ chức | Người dùng đăng ký Copilot hiện tại, tình huống tuân thủ doanh nghiệp | Gắn liền với hệ sinh thái Microsoft, lớp định tuyến mô hình phức tạp, ưu tiên Windows |
| **Kimi Code CLI** | Hệ thống plugin, Móc nối vòng đời, Cấu hình mô hình nén | Nhà phát triển Trung Quốc, người dùng trung gian cần mở rộng linh hoạt | Nhanh chóng theo dõi chức năng của đối thủ cạnh tranh, kiến trúc Wire, lặp lại cấp tiến ở giai đoạn Beta |
| **OpenCode** | Tích hợp nhà cung cấp tùy chọn linh hoạt, chẩn đoán bộ nhớ, kiến trúc Effect | Người dùng chính sách đa mô hình, nhà phát triển hệ sinh thái TypeScript | Kiến trúc hàm Effect, tích hợp nhanh Poe/Bedrock, thúc đẩy bởi cộng đồng |
| **Qwen Code** | Tối ưu hóa tình huống tiếng Trung, tác vụ lặp lại, tích hợp Telegram | Nhà phát triển tiếng Trung, cần tình huống tự động hóa theo thời gian/giám sát | Hệ sinh thái Alibaba, nhanh chóng bổ sung chức năng quốc tế hóa, mở rộng giao thức ACP |

**Điểm khác biệt chính**:
- **Triết lý kiến trúc**: Claude/Codex tập trung vào "khả năng của tác nhân thông minh", Gemini/OpenCode tập trung vào "khả năng quan sát/khả năng mở rộng", Kimi/Qwen tập trung vào "phạm vi tình huống"
- **Mức độ mở**: OpenCode/Gemini mở nhất (Effect/đánh giá hành vi), hệ sinh thái plugin của Claude phát triển mạnh nhưng cốt lõi đóng
- **Đặc điểm địa lý**: Công cụ Trung Quốc (Kimi/Qwen) phản hồi nhanh hơn trong các tình huống tiếng Trung, tích hợp IM trong nước, độ ổn định quốc tế hóa bị tụt hậu

---

## 5. Độ nóng và độ trưởng thành của cộng đồng

### Ma trận độ nóng cộng đồng

| Chiều | Lãnh đạo | Người theo đuổi nhanh | Giai đoạn ổn định |
|:---|:---|:---|:---|
| **Độ sâu thảo luận Issue** | Claude Code (vấn đề bảo mật 70+ bình luận) | OpenCode (hợp tác hơn 20 người đóng góp về rò rỉ bộ nhớ) | Copilot CLI (vấn đề phân tán, phản hồi chính thức chậm) |
| **Mức độ đóng góp PR** | OpenCode (20 PR), Qwen (20 PR) | Kimi (8 PR, lặp lại dày đặc nâng cấp kiến trúc) | Codex (10 PR, chính thức chủ đạo) |
| **Tần suất lặp lại phiên bản** | Codex (4 alpha/24h), OpenCode (2 phiên bản/2 ngày) | Gemini (kênh preview) | Claude Code (không phát hành, dựa vào vá lỗi cộng đồng) |
| **Khả năng tự tổ chức cộng đồng** | Claude Code (plugin cộng đồng scroll-fix, tool-mutex, v.v.) | OpenCode (thích ứng đa nhà cung cấp thúc đẩy bởi cộng đồng) | — |

### Đánh giá độ trưởng thành

| Công cụ | Giai đoạn trưởng thành | Rủi ro chính |
|:---|:---|:---|
| Claude Code | **Giai đoạn trưởng thành/nền tảng** | Khủng hoảng niềm tin do lỗ hổng bảo mật, hỗ trợ ARM chậm, phản hồi chính thức chậm trễ |
| OpenAI Codex | **Giai đoạn đau đớn tái cấu trúc** | Độ ổn định chuyển đổi Rust, tranh cãi về tính minh bạch phí, Windows bị biên giới hóa |
| Gemini CLI | **Giai đoạn nâng cấp kiến trúc** | Cơ sở hạ tầng thử nghiệm không ổn định, độ phức tạp của đại lý phụ, tiến độ mở hệ thống đánh giá |
| GitHub Copilot CLI | **Giai đoạn bảo trì** | Không có tín hiệu cập nhật PR, lỗi chính sách tổ chức, hệ sinh thái mô hình bị phân mảnh |
| Kimi Code CLI | **Giai đoạn mở rộng nhanh** | Độ ổn định v1.25.0 giảm, tích hợp IDE thô sơ, hệ sinh thái plugin giai đoạn đầu |
| OpenCode | **Giai đoạn lặp lại nhanh được thúc đẩy bởi cộng đồng** | OAuth của Claude bị ngắt, giải quyết vấn đề bộ nhớ, khoảng cách trải nghiệm Windows |
| Qwen Code | **Giai đoạn bổ sung chức năng** | Nợ kỹ thuật như lộ trình tiếng Trung, phạm vi kiểm tra tình huống quốc tế hóa, thiếu tài liệu |

---

## 6. Tín hiệu xu hướng đáng chú ý

### 🔮 Xu hướng kỹ thuật

| Tín hiệu | Bằng chứng | Giá trị tham khảo cho nhà phát triển |
|:---|:---|:---|
| **Tái cấu trúc Rust trở thành tiêu chuẩn cạnh tranh hiệu suất** | 4 alpha/24h của Codex, thành phần Rust được đề cập trong Kimi | Hiệu suất công cụ Terminal nhạy cảm, tỷ lệ mã Rust/gốc sẽ trở thành chỉ số lựa chọn |
| **Kiến trúc Effect/hàm thịnh hành** | Gemini, OpenCode áp dụng toàn diện | Quản lý trạng thái đại lý phức tạp yêu cầu các mẫu kiến trúc có thể kết hợp, có thể kiểm thử |
| **Quay màn hình/Đầu vào trực quan hóa CLI** | Quay màn hình tạm thời cục bộ #15597 của Codex, yêu cầu hạ cấp Sử dụng Máy tính của Claude | Đa phương thức chuyển từ "chức năng trình diễn" thành "sự cần thiết cho sản xuất", chú ý đến sự cân bằng giữa quyền riêng tư và hiệu suất |
| **Chuẩn hóa móc nối vòng đời** | #1561 của Kimi (13 loại móc nối), Pre/PostToolUse của Codex | Khả năng lập trình của chuỗi công cụ trở thành chìa khóa để nền tảng hóa, hệ sinh thái Hook sẽ phân mảnh |

### 🏢 Xu hướng hệ sinh thái

| Tín hiệu | Bằng chứng | Giá trị tham khảo cho nhà phát triển |
|:---|:---|:---|
| **Plugin cộng đồng lấp đầy khoảng trống chính thức** | Plugin scroll-fix, tool-mutex, lean-agents của Claude | Khi đánh giá công cụ cần xem xét khả năng tự tổ chức của cộng đồng, không chỉ Lộ trình chính thức |
| **MCP trở thành tiêu chuẩn thực tế nhưng triển khai phân mảnh** | Tất cả các công cụ đều đề cập, nhưng phương thức phơi nhiễm, thời gian chờ, mô hình tin cậy khác nhau | Đầu tư vào phát triển công cụ MCP cần chú ý đến cam kết tương thích của việc triển khai cụ thể |
| **"Đừng để tôi rời IDE" trở thành yêu cầu bắt buộc** | #11176 của OpenCode (23👍), vấn đề IDE dày đặc của Kimi/Qwen | Ứng dụng TUI độc lập đối mặt với áp lực biến thành tiện ích mở rộng VS Code, kiến trúc cần dự phòng khả năng nhúng |
| **Tính minh bạch về phí trở thành cơ sở hạ tầng tin cậy** | #14593 của Codex (231 bình luận), sự cố lộ thông tin xác thực của Claude | Việc áp dụng của doanh nghiệp yêu cầu kiểm toán mô hình phí và cơ chế bảo vệ chống lộ dữ liệu |

### ⚠️ Cảnh báo rủi ro

| Tín hiệu | Phạm vi ảnh hưởng | Đề xuất |
|:---|:---|:---|
| **Lỗ hổng loại bỏ cửa kiểm soát quyền liên tục xuất hiện** | Claude #33126, Codex #15680 | Vô hiệu hóa chế độ tự động trong môi trường sản xuất, bắt buộc xác nhận thủ công các thao tác quan trọng |
| **Độ ổn định tình huống ngữ cảnh dài chưa được giải quyết** | Tất cả các công cụ đều có vấn đề về bộ nhớ/CPU/ngắt kết nối | Quảng cáo 1M token và khả năng sử dụng thực tế có khoảng cách, cần xác minh theo từng giai đoạn |
| **Tích lũy nợ quốc tế hóa của công cụ Trung Quốc** | Lộ trình tiếng Trung của Kimi/Qwen, vấn đề mã hóa | Nhóm xuyên quốc gia cần đánh giá phạm vi kiểm tra các tình huống không phải ASCII |

---

*Thời gian tạo báo cáo: 2026-03-25 | Nguồn dữ liệu: Dữ liệu công khai cộng đồng GitHub của từng công cụ*

---

## Báo cáo chi tiết từng công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Điểm nóng cộng đồng Claude Code Skills

> Nguồn dữ liệu: [anthropics/skills](https://github.com/anthropics/skills)

# Báo cáo điểm nóng cộng đồng Claude Code Skills (2026-03-25)

---

## 1. Xếp hạng Skills phổ biến

| Thứ hạng | Skill | Mô tả chức năng | Điểm nóng cộng đồng | Trạng thái |
|:---|:---|:---|:---|:---|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | Kiểm soát chất lượng định dạng tài liệu do AI tạo, giải quyết các vấn đề định dạng như cô độc dòng, cô thủ dòng, đánh số sai | Chạm vào điểm đau phổ biến của việc tạo tài liệu Claude, tác giả chỉ ra "ảnh hưởng đến mọi tài liệu do Claude tạo ra" | 🔵 Mở |
| 2 | **[skill-quality-analyzer](https://github.com/anthropics/skills/pull/83)** + [skill-security-analyzer](https://github.com/anthropics/skills/pull/83) | Meta-skill cho đánh giá chất lượng Skill theo 5 chiều (cấu trúc, chỉ dẫn, sử dụng công cụ, v.v.) và kiểm tra bảo mật | Công cụ tự kiểm tra Skill có hệ thống đầu tiên, lấp đầy khoảng trống về tiêu chuẩn chất lượng hệ sinh thái | 🔵 Mở |
| 3 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | Hệ thống bộ nhớ bền vững giữa các phiên trò chuyện, duy trì ngữ cảnh dài hạn của AI Agent | Giải quyết giới hạn cốt lõi không trạng thái của Claude Code, cộng đồng có nhu cầu mạnh mẽ về "bộ nhớ" | 🔵 Mở |
| 4 | **[plan-task](https://github.com/anthropics/skills/pull/522)** | Lưu trữ kế hoạch nhiều bước dưới dạng Markdown, hỗ trợ theo dõi Git hoặc lưu trữ cục bộ | Bổ sung cho shodh-memory, tập trung vào tính liên tục của việc thực thi tác vụ | 🔵 Mở |
| 5 | **[session-memory](https://github.com/anthropics/skills/pull/629)** | Lưu giữ các sự kiện kỹ thuật quan trọng trong quá trình nén ngữ cảnh, triển khai không phụ thuộc | Nhắm vào điểm đau cụ thể do nén ngữ cảnh làm mất kết quả đầu ra công cụ | 🔵 Mở |
| 6 | **[SAP-RPT-1-OSS](https://github.com/anthropics/skills/pull/181)** | Tích hợp mô hình cơ sở bảng SAP mã nguồn mở để phân tích dự báo dữ liệu kinh doanh | Trường hợp tích hợp cấp doanh nghiệp, kết nối Claude với hệ sinh thái SAP | 🔵 Mở |
| 7 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | Cải thiện kỹ năng thiết kế front-end, tăng khả năng thực thi và tính nhất quán của chỉ dẫn | Thảo luận về thực tiễn tốt nhất trong thiết kế Skill: chỉ dẫn nên "có thể thực thi" thay vì "mang tính giải thích" | 🔵 Mở |
| 8 | **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** | Kiểm tra dọn dẹp kho mã nguồn, xác định mã mồ côi, tệp không sử dụng, khoảng trống tài liệu | Quy trình làm việc hệ thống 10 bước, xuất CODEBASE-STATUS.md làm nguồn chân lý duy nhất | 🔵 Mở |

---

## 2. Xu hướng nhu cầu cộng đồng

Trích xuất từ các chủ đề tần suất cao của Issues cho bốn hướng:

| Hướng | Issue đại diện | Nhu cầu cốt lõi |
|:---|:---|:---|
| **Lưu trữ trạng thái bền vững** | [#62](https://github.com/anthropics/skills/issues/62), [#522](https://github.com/anthropics/skills/pull/522), [#629](https://github.com/anthropics/skills/pull/629) | Giải quyết giới hạn cơ bản "mỗi phiên trò chuyện bắt đầu từ đầu" của Claude Code, nhu cầu bao gồm kế hoạch tác vụ, kiến thức kỹ thuật, bộ nhớ người dùng ba lớp |
| **Quản trị và chất lượng Skill** | [#202](https://github.com/anthropics/skills/issues/202), [#83](https://github.com/anthropics/skills/pull/83) | Xây dựng tiêu chuẩn viết Skill, đánh giá tự động, cơ chế kiểm tra bảo mật, tránh lãng phí token của Skill "mang tính giải thích" |
| **Tích hợp và triển khai doanh nghiệp** | [#29](https://github.com/anthropics/skills/issues/29), [#532](https://github.com/anthropics/skills/issues/532) | Hỗ trợ AWS Bedrock, xác thực doanh nghiệp SSO, thích ứng môi trường không có API Key |
| **Tích hợp giao thức MCP** | [#16](https://github.com/anthropics/skills/issues/16), [#369](https://github.com/anthropics/skills/issues/369) | Phơi nhiễm Skills thành các điểm cuối MCP, thống nhất tiêu chuẩn giao diện phần mềm AI |

---

## 3. Skills tiềm năng cao chờ hợp nhất

Các PR sau đây có thảo luận sôi nổi, chức năng rõ ràng và dự kiến sẽ được triển khai trong thời gian tới:

| Skill | Liên kết | Đánh giá tiềm năng hợp nhất |
|:---|:---|:---|
| **record-knowledge** | [#521](https://github.com/anthropics/skills/pull/521) | Tác giả cùng với plan-task, hình thành giải pháp lưu trữ "kiến thức + tác vụ" kép, kiến trúc đơn giản |
| **x402 BSV Payment** | [#374](https://github.com/anthropics/skills/pull/374) | Tình huống thanh toán vi mô tiền điện tử rõ ràng, thanh toán dịch vụ AI do ngôn ngữ tự nhiên điều khiển, định vị khác biệt |
| **management-consulting** | [#384](https://github.com/anthropics/skills/pull/384) | Lấp đầy khoảng trống kỹ năng phân tích kinh doanh, bao gồm các khuôn khổ chiến lược, các trường hợp kinh doanh, giao tiếp điều hành cấp cao |
| **ODT Document Processing** | [#486](https://github.com/anthropics/skills/pull/486) | Hỗ trợ định dạng tài liệu mã nguồn mở (ISO 26300), nhu cầu cấp thiết của hệ sinh thái LibreOffice |
| **Google Workspace Integration** | [#299](https://github.com/anthropics/skills/pull/299) | 6 Skills Agent bao gồm email, lịch, tác vụ, tình huống trợ lý cá nhân đầy đủ |

---

## 4. Nhận định hệ sinh thái Skills

> **Nhu cầu cốt lõi: Giúp Claude Code tiến hóa từ "công cụ không trạng thái" thành "cộng tác viên làm việc bền vững, có trí nhớ, có thể tiếp tục và tự trị".**

Cộng đồng đang tự giải quyết vấn đề **quản lý trạng thái giữa các phiên trò chuyện** mà Claude Code thiếu nguyên bản thông qua lớp Skills — từ kế hoạch tác vụ đến kiến thức kỹ thuật và sở thích người dùng, ba hệ thống bộ nhớ (plan-task / record-knowledge / shodh-memory / session-memory) đang xuất hiện song song, phản ánh nhu cầu cấp thiết của người dùng về "tính liên tục" vượt xa thiết kế kiến trúc hiện tại của chính thức.

---

*Báo cáo dựa trên dữ liệu công khai của github.com/anthropics/skills, tính đến ngày 2026-03-25*

---

# Claude Code Cộng đồng Tin tức hàng ngày | 2026-03-25

## Xem nhanh hôm nay

Hôm nay, cộng đồng không có bản phát hành phiên bản mới, nhưng mức độ hoạt động của Issues cực kỳ cao, hỗ trợ kiến trúc ARM, độ ổn định chức năng Cowork và các vấn đề bảo mật quyền truy cập là tâm điểm thảo luận. Hệ sinh thái plugin tiếp tục phát triển mạnh mẽ, nhiều PR của cộng đồng cung cấp giải pháp cho các vấn đề quan trọng như cuộn Terminal, rò rỉ bộ nhớ, BSOD.

---

## Điểm nóng cộng đồng Issues (Top 10)

| Mức độ ưu tiên | Issue | Điểm cốt lõi |
|:---|:---|:---|
| 🔥 | [#30864](https://github.com/anthropics/claude-code/issues/30864) **Hỗ trợ Cowork cho bộ xử lý ARM** | Nhu cầu cao với 92 👍, nhà phát triển rất mong muốn chạy máy ảo Cowork trên Apple Silicon và Linux ARM, số bình luận lên tới 70, là chủ đề nóng nhất hôm nay |
| 🔥 | [#30640](https://github.com/anthropics/claude-code/issues/30640) **Trình cài đặt gốc FreeBSD không hoạt động** | 52 👍, bị đóng nhầm bởi bot sau đó người dùng mở lại, phản ánh vấn đề hỗ trợ hệ thống nhỏ bị bỏ qua |
| ⚠️ | [#27897](https://github.com/anthropics/claude-code/issues/27897) **Máy ảo Cowork Windows Insider hoàn toàn bị hỏng** | Lỗi đổi tên EXDEV vẫn chưa được giải quyết, ảnh hưởng đến người dùng thư mục tệp đám mây Windows (Dropbox/OneDrive) |
| ⚠️ | [#36582](https://github.com/anthropics/claude-code/issues/36582) **Cuộn Terminal tự động lên đầu trong hội thoại dài** | 56 👍, ảnh hưởng nghiêm trọng đến trải nghiệm người dùng, đã có PR cộng đồng cung cấp giải pháp khắc phục |
| ⚠️ | [#3426](https://github.com/anthropics/claude-code/issues/3426) **Công cụ MCP không thể phơi nhiễm cho phiên trò chuyện AI** | Tích hợp máy chủ MCP Playwright cục bộ thất bại, ảnh hưởng đến quy trình làm việc kiểm thử tự động |
| ⚠️ | [#2142](https://github.com/anthropics/claude-code/issues/2142) **Quy tắc bảo mật CLAUDE.md bị bỏ qua một cách có hệ thống** | Khóa API bị vô tình gửi vào kiểm soát phiên bản nhiều lần, làm lộ lỗi tuân thủ chỉ dẫn của trợ lý AI |
| ⚠️ | [#33126](https://github.com/anthropics/claude-code/issues/33126) **Chế độ quyền "hỏi trước khi chỉnh sửa" không hoạt động** | Lỗi bảo mật nghiêm trọng: Claude bỏ qua lời nhắc xác nhận và sửa đổi tệp trực tiếp |
| ⚠️ | [#34819](https://github.com/anthropics/claude-code/issues/34819) **Nội dung tệp xác thực bị lộ hoàn toàn** | Sự cố bảo mật: Claude xuất nội dung đầy đủ của `~/.netrc` vào hội thoại |
| 📌 | [#27263](https://github.com/anthropics/claude-code/issues/27263) **Cấu hình danh sách trắng URL bên ngoài** | 45 👍, quy trình bên thứ ba như OAuth yêu cầu danh sách trắng xem trước linh hoạt |
| 📌 | [#32982](https://github.com/anthropics/claude-code/issues/32982) **Remote Control ngắt kết nối sau 20 phút không hoạt động** | 34 👍, TTL máy chủ bỏ qua keepalive, ảnh hưởng đến trải nghiệm phát triển từ xa |

---

## Tiến triển PR quan trọng (Top 10)

| PR | Tác giả | Nội dung chức năng/sửa lỗi |
|:---|:---|:---|
| [#36614](https://github.com/anthropics/claude-code/pull/36614) | Debaq | **Plugin git-branch-info**: Hiển thị trạng thái nhánh khi bắt đầu phiên, truyền thông tin nhánh ngắn gọn khi người dùng nhập, giải quyết vấn đề mất ngữ cảnh |
| [#38182](https://github.com/anthropics/claude-code/pull/38182) | ruspg | **Plugin đổi tên phiên**: Thêm lệnh `/rename`, lưu tiêu đề tùy chỉnh thông qua tệp `.meta.json` bên cạnh, không phá vỡ |
| [#38045](https://github.com/anthropics/claude-code/pull/38045) | moxer-mmh | **Plugin lean-agents**: 6 giải pháp thay thế cho đại lý lượng tử nhẹ, giải quyết lỗi "prompt too long" do lược đồ công cụ MCP phình to |
| [#35683](https://github.com/anthropics/claude-code/pull/35683) | cruzlauroiii | **Plugin sửa lỗi cuộn Terminal**: Tự động sửa lỗi cuộn lên đầu trong hội thoại dài, cung cấp chuyển đổi đóng băng Ctrl+6 |
| [#35710](https://github.com/anthropics/claude-code/pull/35710) | VRDate | **Sửa lỗi quan trọng: BSOD Windows (Wof.sys)**: Khóa loại trừ công cụ ngăn chặn liệt kê hệ thống tệp song song dẫn đến lỗi màn hình xanh, nhắm vào #32870 |
| [#38105](https://github.com/anthropics/claude-code/pull/38105) | Rich627 | **Plugin kênh WhatsApp**: Thực hiện nhắn tin hai chiều thông qua giao thức Baileys, phù hợp với chức năng Telegram/Discord |
| [#27140](https://github.com/anthropics/claude-code/pull/27140) | powerpig99 | **Plugin memory-bridge**: Tích hợp ngữ cảnh có cấu trúc ranh giới phiên, lệnh `/bridge` để lưu trữ kết quả học tập bền vững |
| [#37159](https://github.com/anthropics/claude-code/pull/37159) | Cazador0 | **Hệ thống quản lý bộ nhớ và phiên bền vững**: Quản lý hội thoại đa lượt hoàn chỉnh, xử lý cửa sổ ngữ cảnh tự động, trích xuất kho bộ nhớ |
| [#38085](https://github.com/anthropics/claude-code/pull/38085) | Ayush-Patel-56 | **Sửa lỗi tài liệu**: Hoàn thành câu bị cắt trong mô tả `/plan` của changelog v2.1.72 |
| [#31701](https://github.com/anthropics/claude-code/pull/31701) | rios0rios0 | **Hỗ trợ $TMPDIR**: Sửa lỗi đường dẫn cứng `/tmp/claude`, hỗ trợ môi trường hạn chế như Termux/Android |

---

## Xu hướng yêu cầu chức năng

| Hướng | Mức độ nóng | Yêu cầu điển hình |
|:---|:---|:---|
| **Hỗ trợ kiến trúc ARM/dị thể** | ⭐⭐⭐⭐⭐ | Máy ảo Cowork hóa ARM, hỗ trợ gốc FreeBSD/aarch64 Linux |
| **Độ tin cậy của Cowork** | ⭐⭐⭐⭐⭐ | Lỗi đổi tên VHDX, xung đột trình điều khiển tệp đám mây Windows, khả năng di chuyển thư mục dự án |
| **Củng cố quyền và bảo mật** | ⭐⭐⭐⭐⭐ | Bảo vệ lộ thông tin xác thực, sửa lỗi bỏ qua cửa kiểm soát quyền, thực thi xác nhận chỉnh sửa bắt buộc |
| **Trải nghiệm Terminal/TUI** | ⭐⭐⭐⭐☆ | Sửa lỗi hành vi cuộn, phím tắt có thể cấu hình, hỗ trợ giọng nói đa ngôn ngữ |
| **Phối hợp từ xa/di động** | ⭐⭐⭐⭐☆ | Độ ổn định Remote Control, giám sát phiên trên thiết bị di động, truy cập từ xa Cowork |
| **Hoàn thiện hệ sinh thái MCP** | ⭐⭐⭐⭐☆ | Độ ổn định phơi nhiễm công cụ, MCP Sử dụng Máy tính chính thức, danh sách trắng URL bên ngoài |
| **Quản lý bộ nhớ và ngữ cảnh** | ⭐⭐⭐⭐☆ | Nới lỏng giới hạn dòng MEMORY.md, lưu trữ nỗ lực suy nghĩ bền vững, tuân thủ chỉ dẫn CLAUDE.md |

---

## Điểm quan tâm của nhà phát triển

### 🔴 Điểm đau chính

| Vấn đề | Phạm vi ảnh hưởng | Tâm trạng cộng đồng |
|:---|:---|:---|
| **Cowork không ổn định trên Windows/ARM** | Rộng rãi | Thất vọng cao, nhiều issue tồn đọng lâu chưa giải quyết |
| **AI không tuân thủ quy tắc CLAUDE.md** | Nghiêm trọng | Khủng hoảng niềm tin, nhiều sự cố lộ thông tin xác thực |
| **Thực thi chế độ quyền không nhất quán** | Quan trọng về bảo mật | Niềm tin vào quy trình làm việc tự động giảm |
| **Remote Control ngắt kết nối** | Nhà phát triển từ xa | Gián đoạn năng suất, nhu cầu về giải pháp tạm thời cấp bách |

### 🟡 Yêu cầu thường xuyên

- **Chính thức hóa hệ sinh thái plugin**：Chất lượng plugin cộng đồng không đồng đều, mong đợi cơ chế chấp nhận hoặc chứng nhận chính thức
- **Chuyển đổi Computer Use sang CLI**：Chức năng độc quyền trên máy tính hạ cấp xuống tình huống Terminal (#38471)
- **Tận dụng cửa sổ ngữ cảnh**：1M token có thể sử dụng nhưng MEMORY.md giới hạn 200 dòng, cấu hình thiếu linh hoạt

### 💡 Điểm sáng hôm nay

Sửa lỗi tự tổ chức cộng đồng sôi nổi: các plugin `scroll-fix`, `tool-mutex`, `lean-agents` trực tiếp đáp ứng các điểm đau cốt lõi, cho thấy nhà phát triển đang lấp đầy khoảng trống chậm trễ phản hồi của chính thức.

---

*Nguồn dữ liệu: github.com/anthropics/claude-code | Thời gian tạo: 2026-03-25*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Cộng đồng Tin tức hàng ngày | 2026-03-25

---

## 1. Xem nhanh hôm nay

Tiêu điểm cộng đồng hôm nay tập trung vào **tiêu thụ token bất thường** (Issue #14593 đã tích lũy 231 bình luận) và **tăng cường tương tác TUI**. Thư viện cốt lõi Rust đã liên tục phát hành 4 phiên bản alpha để lặp lại, đồng thời chức năng luồng phụ `/btw` để đặt câu hỏi đã chính thức ra mắt trên TUI, đánh dấu một cuộc khám phá quan trọng của Codex trong quản lý luồng hội thoại.

---

## 2. Phát hành phiên bản

### Lặp lại dày đặc thư viện cốt lõi Rust (v0.117.0-alpha.11 ~ alpha.14)
| Phiên bản | Thời gian phát hành |
|:---|:---|
| [rust-v0.117.0-alpha.14](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.14) | Trong vòng 24 giờ |
| [rust-v0.117.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.13) | Trong vòng 24 giờ |
| [rust-v0.117.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.12) | Trong vòng 24 giờ |
| [rust-v0.117.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.11) | Trong vòng 24 giờ |

> Lưu ý: Ghi chú phát hành chỉ đánh dấu số phiên bản, cần theo dõi lịch sử PR để biết các thay đổi cụ thể. Việc phát hành alpha thường xuyên cho thấy quá trình di chuyển sang Rust đang bước vào giai đoạn ổn định quan trọng.

---

## 3. Điểm nóng cộng đồng Issues (Top 10)

| # | Tiêu đề | Trạng thái | Bình luận | 👍 | Điểm cốt lõi |
|:---|:---|:---|:---:|:---:|:---|
| [#14593](https://github.com/openai/codex/issues/14593) | Tiện ích mở rộng VS Code tiêu thụ token quá nhanh sau khi cập nhật | 🔴 MỞ | **231** | 83 | **Chủ đề nóng nhất cộng đồng**。Người dùng đăng ký Business báo cáo phiên bản 26.311.21342 vẫn tồn tại phí bất thường, OpenAI chính thức chưa đưa ra giải thích nguyên nhân, người dùng kêu gọi minh bạch hóa cơ chế tính phí |
| [#10450](https://github.com/openai/codex/issues/10450) | Codex Desktop hỗ trợ phát triển từ xa | 🔴 MỞ | 78 | 439 | **Yêu cầu được yêu thích nhất**。Người dùng mong muốn phiên bản desktop hỗ trợ phát triển từ xa SSH/container, cạnh tranh với VS Code Remote, hiện tại bị giới hạn bởi phiên bản trình duyệt gây ảnh hưởng nghiêm trọng đến quy trình làm việc di chuyển |
| [#11981](https://github.com/openai/codex/issues/11981) | Chiếm 100% CPU khi chạy một đại lý | 🔴 MỞ | 18 | 0 | Trường hợp điển hình về suy giảm hiệu suất, người dùng Mac báo cáo CPU quá tải ngay cả khi chỉ chạy một đại lý, cùng với [#15620](https://github.com/openai/codex/issues/15620) cùng chỉ ra vấn đề lập lịch tiến trình nền Electron/Node |
| [#13784](https://github.com/openai/codex/issues/13784) | Lỗi nén từ xa `/compact` | 🔴 MỞ | 17 | 8 | Vấn đề độ ổn định chức năng nén ngữ cảnh, thường gặp trên nền tảng Windows, thông báo lỗi "Error running remote compact task" |
| [#14860](https://github.com/openai/codex/issues/14860) | Giải pháp sửa lỗi hết hạn `/compact` trên Linux | 🔴 MỞ | 13 | 9 | Người đóng góp cộng đồng Grallen chủ động gửi bản sửa lỗi, thể hiện giá trị hợp tác mã nguồn mở, chờ chính thức hợp nhất |
| [#15277](https://github.com/openai/codex/issues/15277) | Lỗi ghi thư mục hộp cát `apply_patch` | 🔴 MỞ | 7 | 0 | Vấn đề ranh giới quyền hộp cát, ghi lần đầu thành công sau đó các thao tác tiếp theo thất bại, ảnh hưởng đến trải nghiệm nhà phát triển Windows |
| [#15503](https://github.com/openai/codex/issues/15503) | CPU tăng đột ngột trong quá trình sử dụng bình thường | 🔴 MỞ | 5 | 6 | Phiên bản 26.318.11754 quay lại, nhật ký gỡ lỗi hiển thị đầu ra lặp lại theo mili giây, nghi ngờ lỗi logic quay vòng |
| [#15620](https://github.com/openai/codex/issues/15620) | CPU cao khi không hoạt động: git/subprocess chạy không tải nền | 🔴 MỞ | 4 | 1 | **Issue quan trọng mới bổ sung**。Ứng dụng Electron vẫn hoạt động CPU liên tục khi không hoạt động, giám sát tiến trình hiển thị tiến trình con git khởi động thường xuyên |
| [#15169](https://github.com/openai/codex/issues/15169) | Mất bộ nhớ phiên trò chuyện MCP Playwright | 🔴 MỞ | 4 | 7 | Sau khi cập nhật ứng dụng macOS, tùy chọn "approve for this session" biến mất, trải nghiệm công cụ MCP thụt lùi |
| [#15680](https://github.com/openai/codex/issues/15680) | Đại lý có thể sửa đổi `.codex/config.toml` mà không có quyền | 🔴 MỞ | 3 | 0 | **Vấn đề ranh giới bảo mật**。Cô lập hộp cát thất bại, đại lý có thể tự sửa đổi cấu hình cấp dự án, gây lo ngại về mô hình quyền |

---

## 4. Tiến triển PR quan trọng (Top 10)

| # | Tiêu đề | Tác giả | Chức năng cốt lõi |
|:---|:---|:---|:---|
| [#15701](https://github.com/openai/codex/pull/15701) | TUI: Thêm luồng đặt câu hỏi phụ trợ `/btw` | charley-oai | **Đổi mới tương tác**。Hỗ trợ phân nhánh luồng phụ tạm thời từ phiên hiện tại để đặt câu hỏi, quay lại luồng chính bằng Esc/Ctrl+C — cạnh tranh với chức năng trò chuyện bên của Claude |
| [#15699](https://github.com/openai/codex/pull/15699) | Tiêm ngữ cảnh phân nhánh chậm vào vòng lặp đầu tiên | charley-oai | Tối ưu hóa hiệu suất phân nhánh, loại bỏ việc tiêm `build_initial_context` khi khởi động, giảm chi phí bộ nhớ |
| [#15597](https://github.com/openai/codex/pull/15597) | Quay màn hình tạm thời cục bộ v1 | kliu128 | **Chức năng mới**。Quay màn hình nền cấp tiến, cần bật hai công tắc ( `features.screen_recording` + `recording.screen.enabled`), chuẩn bị cho việc hiểu trực quan của đại lý |
| [#15531](https://github.com/openai/codex/pull/15531) | Móc nối shell không đồng bộ PostToolUse | eternal-openai | Mở rộng hệ thống hooks, hỗ trợ lệnh gọi lại đồng bộ sau khi thực thi lệnh shell, tạo thành vòng đời hoàn chỉnh với PreToolUse #15211 |
| [#15583](https://github.com/openai/codex/pull/15583) | Tái sử dụng đường dẫn lạnh DB trạng thái app-server | charley-oai | Tối ưu hóa kiến trúc, tránh mở `StateRuntime` lặp lại, cải thiện hiệu quả truy vấn SQLite |
| [#15548](https://github.com/openai/codex/pull/15548) | Trích xuất rollout thành crate độc lập | aibrahim-oai | Tái cấu trúc mã, tách các mô-đun ghi rollout, siêu dữ liệu, chính sách khỏi lõi, đặt nền móng cho hệ thống đào tạo/phát lại phân tán |
| [#15667](https://github.com/openai/codex/pull/15667) | Xử lý rõ ràng thời gian chờ kiểm tra Guardian | charley-oai | Thời gian chờ 90 giây → 120 giây, thêm trạng thái terminal `TimedOut`, chuyển sang văn bản thất bại hiển thị cho mô hình thay vì từ chối trực tiếp khi hết thời gian chờ |
| [#15693](https://github.com/openai/codex/pull/15693) | Sửa lỗi tương thích bubblewrap phiên bản cũ | viyatb-oai | Giải quyết vấn đề tương thích tham số `--argv0` trên bwrap phiên bản cũ, ưu tiên sử dụng `/usr/bin/bwrap` của hệ thống |
| [#15695](https://github.com/openai/codex/pull/15695) | Chuyển đổi tải cấu hình sang bất đồng bộ | pakrym-oai | Bắt đầu đẩy toàn bộ đường dẫn sang async từ `resolve_root_git_project_for_trust`, chuẩn bị cho các hoạt động chuyên sâu về I/O |
| [#15688](https://github.com/openai/codex/pull/15688) | Điều chỉnh thứ tự hướng dẫn rõ ràng của plugin | charley-oai | Đặt hướng dẫn đề cập plugin trước đầu vào của người dùng, tối ưu hóa ưu tiên hiểu ý định plugin của mô hình |

---

## 5. Xu hướng yêu cầu chức năng

Dựa trên phân tích 50 Issues đang hoạt động, sự quan tâm của cộng đồng có **phân bố "một lõi hai cánh"**:

```
┌─────────────────────────────────────────┐
│           🔥 Lõi: Tính minh bạch phí          │
│    tiêu thụ token bất thường, giới hạn tốc độ, đặt lại mức sử dụng      │
│         (Issue #14593, #14349)          │
├─────────────────────────────────────────┤
│  🛠️ Cánh trái: Tích hợp sâu IDE/trình soạn thảo         │
│    • Hỗ trợ phát triển từ xa (#10450)               │
│    • Changelog tiện ích mở rộng VS Code (#4323)      │
│    • Tiến trình đại lý bền vững (#14110)          │
├─────────────────────────────────────────┤
│  ⚡ Cánh phải: Hiệu suất và hiệu quả tài nguyên                 │
│    • Tối ưu hóa CPU/bộ nhớ (#11981,#15503,#15620) │
│    • Tăng cường cô lập hộp cát (#15680, #15277)       │
│    • Độ ổn định nén ngữ cảnh (#13784, #14860)    │
└─────────────────────────────────────────┘
```

**Xu hướng mới nổi**: Đổi mới tương tác TUI (phím tắt `/btw`, `/loop`, YOLO) và độ trưởng thành của chuỗi công cụ MCP trở thành điểm cạnh tranh khác biệt.

---

## 6. Điểm quan tâm của nhà phát triển

| Loại điểm đau | Biểu hiện cụ thể | Issue đại diện |
|:---|:---|:---|
| **Lo lắng về phí** | tiêu thụ token không thể đoán trước, giới hạn tốc độ giảm đột ngột, tài khoản Business/Teams không nhận được mức sử dụng như mong đợi | [#14593](https://github.com/openai/codex/issues/14593), [#14349](https://github.com/openai/codex/issues/14349) |
| **Công dân hạng hai Windows** | Lỗi hộp cát `apply_patch`, xử lý khoảng trống đường dẫn, lỗi quyền (EPERM) | [#15277](https://github.com/openai/codex/issues/15277), [#14594](https://github.com/openai/codex/issues/14594), [#14688](https://github.com/openai/codex/issues/14688) |
| **Suy giảm hiệu suất** | CPU chạy không tải khi không hoạt động, tiến trình nền Electron mất kiểm soát, tiến trình con git khởi động thường xuyên | [#11981](https://github.com/openai/codex/issues/11981), [#15620](https://github.com/openai/codex/issues/15620), [#15503](https://github.com/openai/codex/issues/15503) |
| **Khoảng trống quy trình làm việc cấp doanh nghiệp** | Không có phát triển từ xa, không có đại lý bền vững, thiếu khả năng lập lịch tác vụ/thời gian | [#10450](https://github.com/openai/codex/issues/10450), [#14110](https://github.com/openai/codex/issues/14110), [#8317](https://github.com/openai/codex/issues/8317) |
| **Ranh giới bảo mật mơ hồ** | Đại lý có thể tự sửa đổi cấu hình, rủi ro trốn thoát hộp cát | [#15680](https://github.com/openai/codex/issues/15680) |
| **Hệ sinh thái hooks cần hoàn thiện** | PreToolUse/PostToolUse mới ra mắt, cộng đồng mong đợi kiểm soát chất lượng mã, chặn các thao tác phá vỡ | [#14754](https://github.com/openai/codex/issues/14754), [#15531](https://github.com/openai/codex/pull/15531) |

---

> 📊 Nguồn dữ liệu: [openai/codex](https://github.com/openai/codex) | Chu kỳ thống kê: 2026-03-24 đến 2026-03-25

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Cộng đồng Tin tức hàng ngày | 2026-03-25

---

## Xem nhanh hôm nay

Cộng đồng hôm nay tập trung vào **cải thiện độ ổn định** và **tiến hóa kiến trúc đại lý thông minh**: phát hành v0.36.0-preview.0 hỗ trợ lọc công cụ đại lý phụ đa registry, đồng thời cơ sở hạ tầng CI tiếp tục được củng cố, nhiều bài kiểm tra không ổn định đã được chuyển sang bộ không chặn. Khởi động dự án GSoC đã thúc đẩy các chủ đề về đánh giá hành vi và xây dựng cộng đồng mã nguồn mở nóng lên.

---

## Phát hành phiên bản

### v0.36.0-preview.0 & v0.35.0

| Phiên bản | Cập nhật cốt lõi |
|:---|:---|
| **v0.36.0-preview.0** | • **Kiến trúc đa registry**: Hỗ trợ lọc công cụ đại lý phụ, tăng tính linh hoạt trong cộng tác đại lý [#22712](https://github.com/google-gemini/gemini-cli/pull/22712) |
| **v0.35.0** | • **Phím tắt bàn phím có thể tùy chỉnh**: Người dùng có thể tùy chỉnh phím tắt tương tác CLI [#21945](https://github.com/google-gemini/gemini-cli/pull/21945)<br>• **AgentLoopContext đa luồng**: Tối ưu hóa kiến trúc cốt lõi, đặt nền móng cho quy trình làm việc đại lý phức tạp [#21944](https://github.com/google-gemini/gemini-cli/pull/21944) |

---

## Điểm nóng cộng đồng Issues

| # | Chủ đề | Tầm quan trọng | Phản hồi cộng đồng |
|:---|:---|:---|:---|
| [#23331](https://github.com/google-gemini/gemini-cli/issues/23331) | **GSoC: Đánh giá hành vi, chất lượng và xây dựng cộng đồng mã nguồn mở** | **Cấp chiến lược** | 52 bình luận, 14 👍。Dự án Google Summer of Code chính thức, trực tiếp quyết định mức độ mở của hệ thống đánh giá chất lượng bởi các nhà phát triển bên ngoài |
| [#23328](https://github.com/google-gemini/gemini-cli/issues/23328) | Tối ưu hóa nhật ký đầu ra bộ kiểm tra | Hiệu quả kỹ thuật | 41 bình luận。Đầu ra nhật ký thành công lên tới hàng trăm nghìn ký tự, làm chậm nghiêm trọng tốc độ phản hồi CI, cần quản lý khẩn cấp |
| [#23230](https://github.com/google-gemini/gemini-cli/issues/23230) | Thoát chế độ plan mà không chuyển đổi mô hình | Trải nghiệm người dùng | 10 bình luận。Lỗi logic chuyển đổi gemini-3-flash-preview, ảnh hưởng đến việc thực hiện chiến lược tối ưu hóa chi phí |
| [#21109](https://github.com/google-gemini/gemini-cli/issues/21109) | Hình ảnh hóa dạng sóng động chế độ giọng nói | Đổi mới tương tác | 9 bình luận。Dự án GSoC 11 yêu cầu rõ ràng, API Trực tiếp cần tăng cường phản hồi trạng thái |
| [#23717](https://github.com/google-gemini/gemini-cli/issues/23717) | Phê duyệt người dùng ranh giới không gian làm việc không nhất quán | **Lỗ hổng bảo mật** | 2 bình luận。Công cụ bash và công cụ hệ thống tệp có sự khác biệt trong chính sách phê duyệt cho thư mục bên ngoài, cần sửa chữa khẩn cấp |
| [#22855](https://github.com/google-gemini/gemini-cli/issues/22855) | `/plan` hỗ trợ truyền tham số trực tiếp | Tối ưu hóa hiệu quả | 2 bình luận。Giảm bước tương tác, khởi động chế độ lập kế hoạch bằng một cú nhấp chuột |
| [#23728](https://github.com/google-gemini/gemini-cli/issues/23728) | Hỗ trợ steering mô hình đại lý phụ | Khả năng kiến trúc | 1 bình luận。Đại lý phụ hiện tại không thể được điều khiển, hạn chế kiểm soát chi tiết |
| [#23724](https://github.com/google-gemini/gemini-cli/issues/23724) | Lưu trữ Tracker cấp dự án bền vững | Quản lý dữ liệu | 1 bình luận。Trạng thái tác vụ chuyển từ thư mục tạm thời sang `.gemini/tracker/`, hỗ trợ cộng tác Git |
| [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) | Đại lý phụ nhận biết chế độ phê duyệt đang hoạt động | Tính nhất quán | 1 bình luận。Xung đột giữa bộ máy chính sách và chỉ dẫn đại lý, cần thống nhất nhận thức |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | Định tuyến bộ nhớ: Toàn cục vs Dự án | Cá nhân hóa | 1 bình luận。Sở thích người dùng và bộ nhớ mã nguồn cụ thể được lưu trữ riêng biệt |

---

## Tiến triển PR quan trọng

| # | Chức năng/Sửa lỗi | Giá trị kỹ thuật |
|:---|:---|:---|
| [#23732](https://github.com/google-gemini/gemini-cli/pull/23732) | Chuyển bài kiểm tra ctrl-c không ổn định sang bộ không chặn | Độ ổn định CI: Tuân theo mẫu #23259, loại bỏ chặn PR |
| [#23731](https://github.com/google-gemini/gemini-cli/pull/23731) | Bỏ qua bài kiểm tra Ctrl+C không ổn định trên macOS | Giải pháp tạm thời: Kiểm tra đầu cuối không đáng tin cậy trên macOS do xử lý tín hiệu |
| [#23729](https://github.com/google-gemini/gemini-cli/pull/23729) | Phơi nhiễm rõ ràng `additional_permissions` cho công cụ shell | Tăng cường bảo mật: Chỉ phơi nhiễm tham số quyền cho mô hình khi hộp cát được bật |
| [#23719](https://github.com/google-gemini/gemini-cli/pull/23719) | Giới thiệu hai chủ đề bảo mật/phong phú, hỗ trợ màu sắc thật | Khả năng truy cập: Ánh xạ rõ ràng 256 màu, giải quyết vấn đề nhất quán |
| [#23720](https://github.com/google-gemini/gemini-cli/pull/23720) | Thêm Skill CI: Tự động tái hiện lỗi | Trải nghiệm nhà phát triển: Chẩn đoán chủ động sau khi đẩy, thay thế việc chờ đợi thụ động |
| [#23727](https://github.com/google-gemini/gemini-cli/pull/23727) | Đánh giá hành vi lựa chọn công cụ web | Cơ sở hạ tầng chất lượng: Phân biệt lựa chọn thông minh giữa `web_fetch` và `google_web_search` |
| [#23282](https://github.com/google-gemini/gemini-cli/pull/23282) | Thực hiện `forbiddenPaths` hộp cát đa nền tảng | Khả năng bảo mật: Kiểm soát đường dẫn thống nhất trên macOS/Linux/Windows |
| [#23725](https://github.com/google-gemini/gemini-cli/pull/23725) | Tăng số lần chạy đánh giá ban đêm từ 3→10 | Độ chính xác dữ liệu: Loại bỏ nền nhiễu, thiết lập đường cơ sở độ ổn định có độ trung thực cao |
| [#22869](https://github.com/google-gemini/gemini-cli/pull/22869) | Chuyển đổi bộ đệm dự phòng động | Tính linh hoạt: Chuyển đổi liền mạch giữa chế độ toàn màn hình/nội tuyến trong phiên |
| [#23064](https://github.com/google-gemini/gemini-cli/pull/23064) | Thiết kế lại UI nén ngữ cảnh | Tối ưu hóa trải nghiệm: Ép buộc nén tự động, làm mờ sự xáo trộn bằng màu xám nghiêng |

---

## Xu hướng yêu cầu chức năng

Dựa trên 50 Issues đang hoạt động, trọng tâm của cộng đồng thể hiện ba hướng chính:

| Ưu tiên | Hướng | Yêu cầu điển hình |
|:---|:---|:---|
| 1. | **Chuyên sâu kiến trúc đại lý thông minh (35%)** | • Steering đại lý phụ / định tuyến bộ nhớ / nhận biết chế độ phê duyệt <br> • Công cụ mã nhận biết AST (#22745 #22746) <br> • Tích hợp sâu quy trình làm việc SDD và Trình theo dõi tác vụ |
| 2. | **Trải nghiệm nhà phát triển và kỹ thuật chất lượng (30%)** | • Mở rộng hệ thống đánh giá hành vi (trọng tâm GSoC) <br> • Quản lý CI không ổn định và bài kiểm tra không ổn định <br> • Cơ chế đóng gói và phân phối Skill |
| 3. | **Tăng cường tương tác và trực quan hóa (25%)** | • Hoạt ảnh dạng sóng chế độ giọng nói / chuyển đổi chủ đề động <br> • Chiều cao Terminal chế độ Plan tự thích ứng / UX danh sách tác vụ |
| 4. | **Bảo mật và hộp cát (10%)** | • Tính nhất quán ranh giới không gian làm việc / mở rộng quyền động |

---

## Điểm quan tâm của nhà phát triển

| Loại điểm đau | Biểu hiện cụ thể | Issue đại diện |
|:---|:---|:---|
| **Cơ sở hạ tầng kiểm thử mỏng manh** | Bài kiểm tra tín hiệu không đáng tin cậy trên macOS, nhật ký tràn làm chặn phản hồi | #23733 #23328 |
| **Hành vi đại lý khó đoán** | Tệp tập lệnh tạm thời rải rác, chuyển đổi mô hình thất bại | #23571 #23230 |
| **Rào cản đánh giá chất lượng cao** | Nhà phát triển bên ngoài khó tham gia đánh giá prompt/tools | #23331 |
| **Quản lý bộ nhớ lộn xộn** | Bộ nhớ toàn cục/dự án không tách biệt, ghi chủ động không đủ | #22819 #22809 |
| **Chính sách hộp cát không nhất quán** | Khác biệt logic phê duyệt giữa các công cụ, thời điểm phơi nhiễm tham số quyền | #23717 #23729 |

---

*Nguồn dữ liệu: google-gemini/gemini-cli | Thời gian tạo: 2026-03-25*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Cộng đồng Tin tức hàng ngày | 2026-03-25

## Xem nhanh hôm nay

Cộng đồng hôm nay hoạt động sôi nổi, có tổng cộng 50 Issues được cập nhật, nhưng không có phiên bản mới nào được phát hành. Mâu thuẫn cốt lõi tập trung vào **lỗi báo động sai máy chủ MCP của tổ chức** (nhiều người dùng báo cáo MCP của bên thứ ba bị vô hiệu hóa nhầm) và **tính khả dụng không nhất quán của mô hình** (danh sách mô hình CLI và VS Code không đồng bộ). Ngoài ra, các vấn đề về hiệu suất WSL và yêu cầu tương thích Terminal tiếp tục gia tăng.

---

## Điểm nóng cộng đồng Issues

| # | Tiêu đề | Trạng thái | Mức độ quan trọng | Phản hồi cộng đồng | Điểm cốt lõi |
|---|------|------|--------|----------|----------|
| [#1703](https://github.com/github/copilot-cli/issues/1703) | CLI không liệt kê các mô hình đã được tổ chức bật (ví dụ: Gemini 3.1 Pro) | 🔵 MỞ | ⭐⭐⭐⭐⭐ | 13 bình luận, 22 👍 | **Điểm đau của người dùng doanh nghiệp**：Mô hình hiển thị trên VS Code cho cùng một tài khoản không hiển thị trên CLI, ảnh hưởng đến tính nhất quán của quy trình làm việc |
| [#2236](https://github.com/github/copilot-cli/issues/2236) | Máy chủ MCP registry của tổ chức biến mất, báo động sai "bị tổ chức vô hiệu hóa" | 🔵 MỞ | ⭐⭐⭐⭐⭐ | 3 bình luận, 7 👍 | **Vấn đề quay lại của v1.0.11**：Tương tự #1707, có lỗi trong phân tích chính sách tổ chức |
| [#172](https://github.com/github/copilot-cli/issues/172) | Cấu hình thời gian chờ MCP không được tôn trọng | 🔵 MỞ | ⭐⭐⭐⭐ | 7 bình luận, 2 👍 | Gặp khó khăn trong các tình huống máy chủ MCP chạy dài, cấu hình `mcp-config.json` không có tác dụng |
| [#2050](https://github.com/github/copilot-cli/issues/2050) | Claude Sonnet 4.6 thực thi thất bại: lỗi 503 GOAWAY | 🔵 MỞ | ⭐⭐⭐⭐ | 6 bình luận, 3 👍 | Vấn đề độ ổn định ở lớp mô hình, Gemini 3 Pro hoạt động bình thường, chỉ ra vấn đề ở phía Anthropic hoặc định tuyến |
| [#1477](https://github.com/github/copilot-cli/issues/1477) | Thông báo phí "Continuing autonomously" bất thường | 🔵 MỞ | ⭐⭐⭐⭐ | 6 bình luận, 7 👍 | Tranh cãi về logic tính phí chế độ tự động, người dùng cho rằng mô hình đã hoàn thành nhưng vẫn yêu cầu cao cấp |
| [#2208](https://github.com/github/copilot-cli/issues/2208) | CPU 100% dưới WSL và TUI không phản hồi | 🔵 MỞ | ⭐⭐⭐⭐ | 1 bình luận | Vấn đề quản lý trạng thái hội thoại dài (Claude Opus 4.6 1M), đã thu thập trace hiệu suất |
| [#2101](https://github.com/github/copilot-cli/issues/2101) | Lỗi API tạm thời dẫn đến giới hạn tốc độ | 🔵 MỞ | ⭐⭐⭐⭐ | 5 bình luận, 2 👍 | Cơ chế thử lại xung đột với chính sách giới hạn tốc độ, ảnh hưởng đến tính khả dụng |
| [#989](https://github.com/github/copilot-cli/issues/989) | Chế độ `--acp` trả về ID công cụ sai | 🔵 MỞ | ⭐⭐⭐ | 5 bình luận, 3 👍 | Lỗi triển khai giao thức ACP, ảnh hưởng đến tích hợp client |
| [#2269](https://github.com/github/copilot-cli/issues/2269) | CPU cao của SDK CLI đa phiên | 🔵 MỞ | ⭐⭐⭐ | 0 bình luận | Không thể sử dụng 4 lõi Codespace, GitHub Support đã xác nhận vấn đề |
| [#2272](https://github.com/github/copilot-cli/issues/2272) | GPT-5.4 hoạt động kém hơn GPT-5.3-codex | 🔵 MỞ | ⭐⭐⭐ | 0 bình luận | Suy giảm chất lượng nâng cấp mô hình, Codex hoạt động tốt hơn ở cùng một mô hình |

---

## Tiến triển PR quan trọng

**Không có cập nhật Pull Request hôm nay.**

---

## Xu hướng yêu cầu chức năng

Dựa trên phân tích 50 Issues đang hoạt động hôm nay, các hướng quan tâm của cộng đồng thể hiện như sau:

| Hướng xu hướng | Issue đại diện | Mức độ nóng |
|----------|-----------|------|
| **Mở rộng tương thích Terminal** | [#1257](https://github.com/github/copilot-cli/issues/1257) Termux/Android, [#2246](https://github.com/github/copilot-cli/issues/2246) Warp, [#2252](https://github.com/github/copilot-cli/issues/2252) Thanh cuộn Windows Terminal | 🔥🔥🔥🔥 |
| **Tinh chỉnh quyền và hộp cát** | [#2256](https://github.com/github/copilot-cli/issues/2256) Danh sách trắng nhị phân bền vững, [#2273](https://github.com/github/copilot-cli/issues/2273) Lệnh chỉ đọc PowerShell không cần xác nhận | 🔥🔥🔥🔥 |
| **Tối ưu hóa hiệu suất và tài nguyên** | [#2208](https://github.com/github/copilot-cli/issues/2208) WSL CPU 100%, [#2269](https://github.com/github/copilot-cli/issues/2269) Tải nặng đa phiên SDK | 🔥🔥🔥🔥 |
| **Tính nhất quán của hệ sinh thái mô hình** | [#1703](https://github.com/github/copilot-cli/issues/1703) Đồng bộ danh sách mô hình, [#2272](https://github.com/github/copilot-cli/issues/2272) Suy giảm chất lượng GPT-5.4 | 🔥🔥🔥 |
| **Độ trưởng thành hệ sinh thái MCP** | [#172](https://github.com/github/copilot-cli/issues/172) Cấu hình thời gian chờ, [#2236](https://github.com/github/copilot-cli/issues/2236) Lỗi báo động sai chính sách tổ chức | 🔥🔥🔥 |
| **Khả năng lập trình chế độ khởi động** | [#2268](https://github.com/github/copilot-cli/issues/2268) Cờ `--plan`/`--autopilot`, [#2227](https://github.com/github/copilot-cli/issues/2227) Chia sẻ phiên tự động | 🔥🔥 |

---

## Điểm quan tâm của nhà phát triển

### 🔴 Điểm đau thường xuyên

1. **Phân tích chính sách tổ chức không đáng tin cậy** 
   - #1707 #2236 hiển thị cảnh báo "MCP của bên thứ ba bị tổ chức vô hiệu hóa" không khớp với chính sách thực tế, quay lại v0.0.417 có thể khôi phục, xác nhận là lỗi quay lại của v1.0.11

2. **Trải nghiệm phân mảnh giữa các thiết bị** 
   - Mô hình khả dụng, thư mục kỹ năng (`~/.agents/skills`) giữa VS Code và CLI không nhất quán, người dùng doanh nghiệp khó thống nhất quy trình làm việc

3. **Độ ổn định hội thoại dài** 
   - Tình huống ngữ cảnh 1M Claude Opus 4.6, CPU WSL tăng đột ngột, TUI bị treo, quản lý trạng thái nghi ngờ rò rỉ bộ nhớ

### 🟡 Nhu cầu mới nổi

- **Cấu hình Shell rõ ràng** ([#2271](https://github.com/github/copilot-cli/issues/2271))：Buộc sử dụng Bash thay vì PowerShell trên Windows
- **Buộc chế độ PLAN** ([#2270](https://github.com/github/copilot-cli/issues/2270))：Đại lý `/fleet` bỏ qua chế độ lập kế hoạch và sửa đổi mã trực tiếp
- **Khả năng phục hồi phiên** ([#2227](https://github.com/github/copilot-cli/issues/2227))：Tự động `/share` để tránh mất công việc

---

*Nguồn dữ liệu: github.com/github/copilot-cli | Chu kỳ thống kê: 2026-03-24*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Cộng đồng Tin tức hàng ngày | 2026-03-25

---

## Xem nhanh hôm nay

Cộng đồng hôm nay hoạt động sôi nổi, **phiên bản v1.25.0 gây ra nhiều vấn đề về độ ổn định của chuỗi công cụ**, công cụ `writefile` gặp lỗi phân tích tham số trên cả nền tảng Windows và Linux. Đồng thời, **hệ thống plugin chính thức được