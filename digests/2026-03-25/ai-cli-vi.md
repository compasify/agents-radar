# Cập nhật tin tức cộng đồng công cụ AI CLI Ngày 25-03-2026

> Thời gian tạo: 2026-03-25 00:09 UTC | Bao phủ công cụ: 7

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

# Báo cáo phân tích so sánh ngang hệ sinh thái công cụ AI CLI | Ngày 25-03-2026

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái công cụ AI CLI hiện tại thể hiện cấu trúc **"một siêu cường, nhiều đối thủ mạnh, phân hóa theo chiều dọc"**: Claude Code chiếm lĩnh phân khúc quy trình làm việc doanh nghiệp nhờ máy ảo Cowork và hệ sinh thái MCP, nhưng vấn đề hỗ trợ ARM và lỗ hổng bảo mật quyền truy cập đã gây ra khủng hoảng niềm tin; OpenAI Codex đang cố gắng bắt kịp với việc tái cấu trúc bằng Rust và đổi mới giao diện TUI, tính minh bạch về phí là nút thắt lớn nhất; Google Gemini CLI thúc đẩy hệ thống đánh giá hành vi mở dựa trên GSoC, kiến trúc đại lý phụ dẫn đầu; các nhà sản xuất Trung Quốc (Kimi, Qwen) nhanh chóng bổ sung tích hợp IDE và hệ sinh thái plugin, nhưng vẫn còn khoảng cách về độ ổn định trong các tình huống quốc tế. Xu hướng chung đang diễn tiến từ các công cụ đơn lẻ sang **nền tảng hóa, có khả năng mở rộng, đa phương thức**, trong đó các hoạt động tự tổ chức sửa lỗi của cộng đồng trở thành lực lượng quan trọng lấp đầy những khoảng trống phản hồi chính thức.

---

## 2. So sánh mức độ hoạt động của từng công cụ

| Công cụ | Cập nhật Issues | Cập nhật PR | Phát hành phiên bản | Động thái quan trọng |
|:---|:---:|:---:|:---:|:---|
| **Claude Code** | 50+ | 10+ | ❌ Không | Hỗ trợ ARM Cowork là chủ đề nóng nhất (92👍), lỗ hổng bảo mật được phơi bày dày đặc |
| **OpenAI Codex** | 50+ | 10+ | ✅ 4 bản alpha | Lặp lại cốt lõi Rust dày đặc, chức năng luồng phụ `/btw` được triển khai |
| **Gemini CLI** | 50+ | 10+ | ✅ v0.36.0-preview | Dự án GSoC khởi động, kiến trúc đa registry hỗ trợ lọc đại lý phụ |
| **GitHub Copilot CLI** | 50 | 0 | ❌ Không | Chính sách MCP tổ chức báo động sai, tính khả dụng của mô hình không nhất quán trở thành trọng tâm |
| **Kimi Code CLI** | 8 | 8 | ✅ v1.25.0 | Hệ thống plugin hóa Beta, độ ổn định của công cụ writefile giảm sút |
| **OpenCode** | 50+ | 20+ | ✅ v1.3.1/v1.3.2 | 20+ người đóng góp cùng nhau giải quyết rò rỉ bộ nhớ, Claude OAuth bị ngắt kết nối |
| **Qwen Code** | 50 | 20 | ✅ v0.13.0-nightly | Tích hợp Telegram, tác vụ lặp lại, chức năng gợi ý tiếp theo song hành |

> **Phân cấp mức độ hoạt động**: OpenCode ≈ Qwen > Claude Code ≈ Codex ≈ Gemini > Copilot CLI > Kimi (bị ảnh hưởng bởi sự kiện phiên bản)

---

## 3. Hướng chức năng được quan tâm chung

| Hướng chức năng | Công cụ liên quan | Yêu cầu cụ thể |
|:---|:---|:---|
| **Tích hợp sâu IDE** | OpenCode (#11176), Kimi (#1334, #1560), Qwen (#1370), Copilot CLI (#1703) | Tiện ích mở rộng gốc VS Code, plugin JetBrains, thống nhất giao diện cài đặt, hỗ trợ phát triển từ xa |
| **Củng cố quyền và bảo mật** | Claude Code (#33126, #34819), Codex (#15680), Gemini (#23717), Qwen (#2640, #2637) | Bảo vệ rò rỉ thông tin đăng nhập, thực thi bắt buộc cửa khẩu quyền, duy trì phê duyệt, tính nhất quán của ranh giới sandbox |
| **Quản lý ngữ cảnh/bộ nhớ** | Claude Code (#36582, #27140), Codex (#13784), Gemini (#22819), Qwen (#2523) | Độ ổn định hội thoại dài, nới lỏng giới hạn MEMORY.md, tách bộ nhớ toàn cục/dự án, gợi ý tiếp theo |
| **Hiệu suất và tối ưu hóa tài nguyên** | Claude Code (#27897), Codex (#11981, #15620), OpenCode (#16697), Qwen (#2632) | Khắc phục rò rỉ bộ nhớ, CPU nhàn rỗi, ngắt kết nối khi không hoạt động, chấm dứt phản hồi dạng luồng |
| **Hệ sinh thái MCP/plugin** | Claude Code (#3426, #38045), Codex (#15169), Kimi (#1566), Gemini (#22712) | Độ ổn định phơi bày công cụ, hỗ trợ MCP chính thức, khả năng tương tác plugin, hook vòng đời |
| **Tinh chỉnh trải nghiệm Terminal** | Claude Code (#36582), Codex (#15701), Gemini (#21109), Qwen (#241) | Khắc phục hành vi cuộn, phím tắt có thể cấu hình, hình ảnh hóa giọng nói, xuống dòng Shift+Enter |

---

## 4. Phân tích định vị khác biệt

| Công cụ | Trọng tâm chức năng cốt lõi | Hồ sơ người dùng mục tiêu | Đặc điểm lộ trình kỹ thuật |
|:---|:---|:---|:---|
| **Claude Code** | Máy ảo Cowork, Computer Use, Hệ sinh thái MCP | Nhà phát triển full-stack doanh nghiệp, cần môi trường thực thi cách ly | Cốt lõi đóng mã + plugin mở, ưu tiên máy tính để bàn Electron, ngữ cảnh dài 1M token |
| **OpenAI Codex** | Đổi mới tương tác TUI, hiệu suất Rust, nén `/compact` | Người dùng terminal theo đuổi hiệu quả tối đa, người dùng sâu hệ sinh thái OpenAI | Đang di chuyển tái cấu trúc Rust, đa phương thức (quay màn hình), chế độ YOLO cấp tiến |
| **Gemini CLI** | Kiến trúc đại lý phụ, đánh giá hành vi, hệ sinh thái mở GSoC | Nhà nghiên cứu, kỹ sư cần AI có thể giải thích | Kiến trúc Effect, đa registry, nhấn mạnh tính minh bạch của hệ thống đánh giá |
| **GitHub Copilot CLI** | Tích hợp liền mạch với hệ sinh thái GitHub, chính sách cấp tổ chức | Người dùng đăng ký Copilot hiện có, tình huống tuân thủ doanh nghiệp | Liên kết hệ sinh thái Microsoft, lớp định tuyến mô hình phức tạp, ưu tiên Windows |
| **Kimi Code CLI** | Hệ thống plugin, hook vòng đời, cấu hình mô hình nén | Nhà phát triển Trung Quốc, người dùng trung cấp cần mở rộng linh hoạt | Theo dõi nhanh chức năng cạnh tranh, kiến trúc Wire, lặp lại cấp tiến giai đoạn Beta |
| **OpenCode** | Truy cập linh hoạt đa nhà cung cấp, chẩn đoán bộ nhớ, kiến trúc Effect | Người dùng chiến lược đa mô hình, nhà phát triển hệ sinh thái TypeScript | Kiến trúc hàm Effect, tích hợp nhanh Poe/Bedrock, do cộng đồng thúc đẩy |
| **Qwen Code** | Tối ưu hóa tình huống tiếng Trung, tác vụ lặp lại, tích hợp Telegram | Nhà phát triển tiếng Trung, cần tự động hóa định thời/giám sát | Hệ sinh thái Alibaba, bổ sung nhanh chức năng quốc tế hóa, mở rộng giao thức ACP |

**Điểm khác biệt chính**:
- **Triết lý kiến trúc**: Claude/Codex tập trung vào "khả năng của tác nhân thông minh", Gemini/OpenCode tập trung vào "khả năng quan sát/mở rộng", Kimi/Qwen tập trung vào "bao phủ tình huống".
- **Mức độ mở**: OpenCode/Gemini mở nhất (Effect/đánh giá hành vi), hệ sinh thái plugin của Claude phát triển mạnh nhưng cốt lõi đóng.
- **Đặc điểm địa lý**: Công cụ Trung Quốc (Kimi/Qwen) phản hồi nhanh hơn về đường dẫn tiếng Trung, tích hợp IM trong nước, độ ổn định quốc tế hóa tụt hậu.

---

## 5. Mức độ phổ biến và trưởng thành của cộng đồng

### Ma trận mức độ phổ biến của cộng đồng

| Chiều | Lãnh đạo | Người đuổi theo nhanh | Giai đoạn ổn định |
|:---|:---|:---|:---|
| **Độ sâu thảo luận Issue** | Claude Code (vấn đề bảo mật 70+ bình luận) | OpenCode (rò rỉ bộ nhớ 20+ người đóng góp cùng nhau) | Copilot CLI (vấn đề phân tán, phản hồi chính thức chậm) |
| **Mức độ đóng góp PR** | OpenCode (20 PR), Qwen (20 PR) | Kimi (8 PR, lặp lại kiến trúc dày đặc) | Codex (10 PR, do chính thức chủ trì) |
| **Tần suất lặp lại phiên bản** | Codex (4 alpha/24h), OpenCode (2 phiên bản/2 ngày) | Gemini (kênh preview) | Claude Code (không phát hành, phụ thuộc vào vá lỗi của cộng đồng) |
| **Khả năng tự tổ chức hệ sinh thái** | Claude Code (plugin cộng đồng như scroll-fix, tool-mutex) | OpenCode (thích ứng đa nhà cung cấp do cộng đồng thúc đẩy) | — |

### Đánh giá mức độ trưởng thành

| Công cụ | Giai đoạn trưởng thành | Rủi ro chính |
|:---|:---|:---|
| Claude Code | **Giai đoạn trưởng thành/nền tảng** | Khủng hoảng niềm tin do lỗ hổng bảo mật, hỗ trợ ARM tụt hậu, phản hồi chính thức chậm |
| OpenAI Codex | **Giai đoạn đau đớn tái cấu trúc** | Độ ổn định di chuyển Rust, tranh cãi về tính minh bạch phí |
| Gemini CLI | **Giai đoạn nâng cấp kiến trúc** | Cơ sở hạ tầng kiểm thử không ổn định, độ phức tạp của đại lý phụ, tiến độ mở hệ thống đánh giá |
| GitHub Copilot CLI | **Giai đoạn bảo trì** | Không có tín hiệu cập nhật PR, lỗi chính sách tổ chức, hệ sinh thái mô hình bị phân mảnh |
| Kimi Code CLI | **Giai đoạn mở rộng nhanh** | Độ ổn định v1.25.0 giảm sút, tích hợp IDE thô sơ, hệ sinh thái plugin giai đoạn đầu |
| OpenCode | **Giai đoạn lặp lại nhanh do cộng đồng thúc đẩy** | Claude OAuth bị ngắt kết nối, khắc phục vấn đề bộ nhớ, khoảng cách trải nghiệm Windows |
| Qwen Code | **Giai đoạn bổ sung chức năng** | Nợ kỹ thuật như đường dẫn tiếng Trung, phạm vi kiểm thử tình huống quốc tế hóa, thiếu tài liệu |

---

## 6. Tín hiệu xu hướng đáng chú ý

### 🔮 Xu hướng công nghệ

| Tín hiệu | Bằng chứng | Giá trị tham khảo cho nhà phát triển |
|:---|:---|:---|
| **Tái cấu trúc Rust trở thành tiêu chuẩn cạnh tranh hiệu suất** | Codex 4 alpha/24h, Kimi đề cập thành phần Rust | Công cụ Terminal nhạy cảm về hiệu suất, tỷ lệ mã Rust/gốc sẽ là chỉ số lựa chọn |
| **Kiến trúc Effect/hàm thịnh hành** | Gemini, OpenCode áp dụng toàn diện | Quản lý trạng thái đại lý phức tạp cần các mô hình kiến trúc có thể kết hợp, kiểm thử được |
| **Quay màn hình/đầu vào trực quan hóa CLI** | Codex #15597 quay cục bộ, yêu cầu Computer Use của Claude hạ cấp | Đa phương thức từ "chức năng trình diễn" trở thành "yêu cầu sản xuất", chú ý cân bằng quyền riêng tư và hiệu suất |
| **Hook vòng đời tiêu chuẩn hóa** | Kimi #1561 (13 loại hook), Codex Pre/PostToolUse | Khả năng lập trình chuỗi công cụ trở thành chìa khóa nền tảng hóa, hệ sinh thái Hook sẽ phân hóa |

### 🏢 Xu hướng hệ sinh thái

| Tín hiệu | Bằng chứng | Giá trị tham khảo cho nhà phát triển |
|:---|:---|:---|
| **Plugin cộng đồng lấp đầy khoảng trống chính thức** | Claude scroll-fix, tool-mutex, lean-agents | Khi đánh giá công cụ cần xem xét khả năng tự tổ chức của cộng đồng, không chỉ Roadmap chính thức |
| **MCP trở thành tiêu chuẩn thực tế nhưng triển khai phân hóa** | Tất cả các công cụ đều đề cập, nhưng cách phơi bày, hết hạn, mô hình tin cậy khác nhau | Đầu tư vào phát triển công cụ MCP cần chú ý đến cam kết tương thích của triển khai cụ thể |
| **"Đừng để tôi rời IDE" trở thành yêu cầu cứng** | OpenCode #11176 (23👍), các vấn đề IDE của Kimi/Qwen dày đặc | Ứng dụng TUI độc lập đối mặt với áp lực hóa tiện ích mở rộng VS Code, kiến trúc cần dự phòng khả năng nhúng |
| **Tính minh bạch phí trở thành cơ sở hạ tầng tin cậy** | Codex #14593 (231 bình luận), sự cố rò rỉ thông tin đăng nhập của Claude | Việc áp dụng của doanh nghiệp cần kiểm toán mô hình phí và cơ chế bảo vệ rò rỉ dữ liệu |

### ⚠️ Cảnh báo rủi ro

| Tín hiệu | Phạm vi ảnh hưởng | Khuyến nghị |
|:---|:---|:---|
| **Các lỗ hổng loại vượt qua cửa khẩu quyền dày đặc** | Claude #33126, Codex #15680 | Trong môi trường sản xuất, vô hiệu hóa chế độ tự động, bắt buộc xác nhận thủ công các thao tác quan trọng |
| **Độ ổn định tình huống ngữ cảnh dài chưa được giải quyết** | Tất cả các công cụ đều có vấn đề về bộ nhớ/CPU/ngắt kết nối | Tuyên bố 1M token và khả năng sử dụng thực tế có khoảng cách, cần xác minh theo từng giai đoạn |
| **Nợ quốc tế hóa công cụ Trung Quốc tích lũy** | Đường dẫn tiếng Trung, vấn đề mã hóa của Kimi/Qwen | Nhóm đa quốc gia cần đánh giá phạm vi kiểm thử tình huống không phải ASCII |

---

*Thời gian tạo báo cáo: 2026-03-25 | Nguồn dữ liệu: Dữ liệu công khai từ cộng đồng GitHub của từng công cụ*

---

## Báo cáo chi tiết từng công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Điểm nóng cộng đồng Claude Code Skills

> Nguồn dữ liệu: [anthropics/skills](https://github.com/anthropics/skills)

# Báo cáo điểm nóng cộng đồng Claude Code Skills (Ngày 25-03-2026)

---

## 1. Xếp hạng Skills thịnh hành

| Xếp hạng | Skill | Mô tả chức năng | Điểm nóng cộng đồng | Trạng thái |
|:---|:---|:---|:---|:---|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | Kiểm soát chất lượng định dạng tài liệu do AI tạo ra, giải quyết các vấn đề định dạng như cô đơn, cô độc, đánh số sai | Chạm vào điểm đau phổ biến của việc tạo tài liệu Claude, tác giả chỉ ra "ảnh hưởng đến mọi tài liệu do Claude tạo ra" | 🔵 Đang mở |
| 2 | **[skill-quality-analyzer](https://github.com/anthropics/skills/pull/83)** + [skill-security-analyzer](https://github.com/anthropics/skills/pull/83) | Meta-skill để đánh giá chất lượng Skill theo năm chiều (cấu trúc, hướng dẫn, sử dụng công cụ, v.v.) và kiểm tra bảo mật | Công cụ tự kiểm tra Skill có hệ thống đầu tiên, lấp đầy khoảng trống về tiêu chuẩn chất lượng hệ sinh thái | 🔵 Đang mở |
| 3 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | Hệ thống bộ nhớ bền vững giữa các phiên, duy trì ngữ cảnh dài hạn của AI Agent | Giải quyết hạn chế cốt lõi của Claude Code không trạng thái, cộng đồng có nhu cầu mạnh mẽ về "bộ nhớ" | 🔵 Đang mở |
| 4 | **[plan-task](https://github.com/anthropics/skills/pull/522)** | Lưu trữ kế hoạch nhiều bước dưới dạng Markdown, hỗ trợ theo dõi Git hoặc lưu trữ cục bộ | Bổ sung cho shodh-memory, tập trung vào tính liên tục của việc thực thi tác vụ | 🔵 Đang mở |
| 5 | **[session-memory](https://github.com/anthropics/skills/pull/629)** | Bảo toàn các sự kiện kỹ thuật quan trọng trong quá trình nén ngữ cảnh, thực hiện không phụ thuộc | Nhắm vào điểm đau cụ thể là đầu ra công cụ bị mất do nén ngữ cảnh | 🔵 Đang mở |
| 6 | **[SAP-RPT-1-OSS](https://github.com/anthropics/skills/pull/181)** | Tích hợp mô hình cơ sở bảng nguồn mở SAP để phân tích dự báo dữ liệu kinh doanh | Trường hợp tích hợp cấp doanh nghiệp, kết nối Claude với hệ sinh thái SAP | 🔵 Đang mở |
| 7 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | Cải thiện kỹ năng thiết kế giao diện người dùng, nâng cao khả năng thực thi và tính nhất quán của hướng dẫn | Thảo luận về các thực tiễn tốt nhất để thiết kế Skill: hướng dẫn nên "có thể thực thi" thay vì "mang tính giải thích" | 🔵 Đang mở |
| 8 | **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** | Kiểm toán làm sạch kho mã, xác định mã vô chủ, tệp không sử dụng, thiếu tài liệu | Quy trình làm việc có hệ thống 10 bước, xuất CODEBASE-STATUS.md làm nguồn chân lý duy nhất | 🔵 Đang mở |

---

## 2. Xu hướng nhu cầu của cộng đồng

Bốn hướng từ các chủ đề tần suất cao của Issues:

| Hướng | Issue đại diện | Yêu cầu cốt lõi |
|:---|:---|:---|
| **Lưu trữ trạng thái** | [#62](https://github.com/anthropics/skills/issues/62), [#522](https://github.com/anthropics/skills/pull/522), [#629](https://github.com/anthropics/skills/pull/629) | Giải quyết hạn chế cơ bản của Claude Code "mỗi phiên làm việc bắt đầu từ đầu", nhu cầu bao gồm kế hoạch tác vụ, kiến thức kỹ thuật, bộ nhớ người dùng ba cấp độ |
| **Quản trị và chất lượng Skill** | [#202](https://github.com/anthropics/skills/issues/202), [#83](https://github.com/anthropics/skills/pull/83) | Xây dựng tiêu chuẩn viết Skill, đánh giá tự động, cơ chế kiểm tra bảo mật, tránh lãng phí token do Skill "mang tính giải thích" |
| **Tích hợp và triển khai doanh nghiệp** | [#29](https://github.com/anthropics/skills/issues/29), [#532](https://github.com/anthropics/skills/issues/532) | Hỗ trợ AWS Bedrock, xác thực doanh nghiệp SSO, thích ứng môi trường không có API Key |
| **Hội tụ giao thức MCP** | [#16](https://github.com/anthropics/skills/issues/16), [#369](https://github.com/anthropics/skills/issues/369) | Phơi bày Skills dưới dạng điểm cuối MCP, tiêu chuẩn hóa giao diện phần mềm AI |

---

## 3. Skills tiềm năng cao chờ hợp nhất

Các PR sau đây có thảo luận sôi nổi, chức năng rõ ràng, dự kiến sẽ được triển khai trong thời gian tới:

| Skill | Liên kết | Đánh giá tiềm năng hợp nhất |
|:---|:---|:---|
| **record-knowledge** | [#521](https://github.com/anthropics/skills/pull/521) | Cùng tác giả với plan-task, hình thành giải pháp lưu trữ "kiến thức + tác vụ" kép, kiến trúc đơn giản |
| **x402 BSV payment** | [#374](https://github.com/anthropics/skills/pull/374) | Tình huống thanh toán vi mô tiền điện tử rõ ràng, dịch vụ AI do ngôn ngữ tự nhiên điều khiển, định vị khác biệt |
| **management-consulting** | [#384](https://github.com/anthropics/skills/pull/384) | Lấp đầy khoảng trống kỹ năng phân tích kinh doanh, bao gồm các khung chiến lược, các trường hợp kinh doanh, giao tiếp điều hành cấp cao |
| **ODT document processing** | [#486](https://github.com/anthropics/skills/pull/486) | Hỗ trợ định dạng tài liệu nguồn mở (ISO 26300), nhu cầu cốt lõi của hệ sinh thái LibreOffice |
| **Google Workspace integration** | [#299](https://github.com/anthropics/skills/pull/299) | 6 Agent Skills bao gồm email, lịch, tác vụ, tình huống trợ lý cá nhân hoàn chỉnh |

---

## 4. Thấu hiểu hệ sinh thái Skills

> **Yêu cầu cốt lõi: Giúp Claude Code tiến hóa từ "công cụ không trạng thái" thành "đối tác làm việc bền vững, có thể tiếp tục, có khả năng tự trị"**.

Cộng đồng đang tự giải quyết vấn đề **quản lý trạng thái liên tục giữa các phiên làm việc** mà Claude Code gốc còn thiếu thông qua lớp Skills – từ kế hoạch tác vụ đến kiến thức kỹ thuật và sở thích người dùng, hệ thống bộ nhớ ba cấp độ (plan-task / record-knowledge / shodh-memory / session-memory) đang xuất hiện song song, phản ánh nhu cầu cấp thiết của người dùng về "tính liên tục" vượt xa thiết kế kiến trúc hiện tại của chính thức.

---

*Báo cáo dựa trên dữ liệu công khai từ github.com/anthropics/skills, tính đến ngày 25-03-2026*

---

# Cập nhật tin tức cộng đồng Claude Code Ngày 25-03-2026

## Tóm tắt hôm nay

Hôm nay, cộng đồng không có bản phát hành phiên bản mới nào, nhưng mức độ hoạt động của Issues cực kỳ cao, hỗ trợ kiến trúc ARM, độ ổn định chức năng Cowork và các vấn đề bảo mật quyền truy cập là trọng tâm thảo luận. Hệ sinh thái plugin tiếp tục phát triển mạnh mẽ, nhiều PR của cộng đồng cung cấp giải pháp cho các vấn đề quan trọng như cuộn terminal, rò rỉ bộ nhớ, BSOD.

---

## Issues cộng đồng nóng (Top 10)

| Mức độ ưu tiên | Issue | Điểm cốt lõi |
|:---|:---|:---|
| 🔥 | [#30864](https://github.com/anthropics/claude-code/issues/30864) **Hỗ trợ Cowork cho bộ xử lý ARM** | Nhu cầu cao với 92 👍, nhà phát triển rất mong muốn chạy máy ảo Cowork trên Apple Silicon và ARM Linux, số bình luận lên tới 70, là chủ đề nóng nhất hôm nay |
| 🔥 | [#30640](https://github.com/anthropics/claude-code/issues/30640) **Trình cài đặt gốc FreeBSD không hợp lệ** | 52 👍, sau khi bị bot đóng nhầm, người dùng đã buộc mở lại, phản ánh vấn đề hệ thống nhỏ bị bỏ qua |
| ⚠️ | [#27897](https://github.com/anthropics/claude-code/issues/27897) **Máy ảo Cowork bị hỏng hoàn toàn trên Win11 Insider** | Lỗi đổi tên EXDEV vẫn chưa được giải quyết, ảnh hưởng người dùng driver tệp đám mây Windows (Dropbox/OneDrive) |
| ⚠️ | [#36582](https://github.com/anthropics/claude-code/issues/36582) **Cuộn terminal tự động lên đầu trong hội thoại dài** | 56 👍, ảnh hưởng nghiêm trọng đến trải nghiệm sử dụng, đã có PR của cộng đồng cung cấp giải pháp khắc phục |
| ⚠️ | [#3426](https://github.com/anthropics/claude-code/issues/3426) **Công cụ MCP không thể phơi bày cho phiên làm việc AI** | Tích hợp máy chủ cục bộ Playwright bị lỗi, ảnh hưởng quy trình làm việc kiểm thử tự động |
| ⚠️ | [#2142](https://github.com/anthropics/claude-code/issues/2142) **Quy tắc bảo mật CLAUDE.md bị bỏ qua một cách có hệ thống** | Khóa API bị gửi nhầm nhiều lần vào kiểm soát phiên bản, phơi bày thiếu sót của trợ lý AI trong việc tuân thủ hướng dẫn tài liệu |
| ⚠️ | [#33126](https://github.com/anthropics/claude-code/issues/33126) **Chế độ quyền "hỏi trước khi chỉnh sửa" không hợp lệ** | Lỗi quan trọng về bảo mật: Claude bỏ qua lời nhắc xác nhận và trực tiếp sửa đổi tệp |
| ⚠️ | [#34819](https://github.com/anthropics/claude-code/issues/34819) **Nội dung tệp thông tin đăng nhập bị phơi bày hoàn toàn** | Sự cố bảo mật: Claude xuất nội dung đầy đủ của `~/.netrc` vào hội thoại |
| 📌 | [#27263](https://github.com/anthropics/claude-code/issues/27263) **Cấu hình danh sách trắng URL bên ngoài** | 45 👍, quy trình bên thứ ba như OAuth cần danh sách trắng xem trước linh hoạt |
| 📌 | [#32982](https://github.com/anthropics/claude-code/issues/32982) **Remote Control ngắt kết nối sau 20 phút không hoạt động** | 34 👍, TTL máy chủ bỏ qua keepalive, ảnh hưởng trải nghiệm phát triển từ xa |

---

## Tiến độ PR quan trọng (Top 10)

| PR | Tác giả | Chức năng/Nội dung sửa lỗi |
|:---|:---|:---|
| [#36614](https://github.com/anthropics/claude-code/pull/36614) | Debaq | **Plugin git-branch-info**: Hiển thị trạng thái nhánh khi bắt đầu phiên, chèn thông tin nhánh gọn gàng khi người dùng nhập, giải quyết vấn đề mất ngữ cảnh |
| [#38182](https://github.com/anthropics/claude-code/pull/38182) | ruspg | **Plugin đổi tên phiên**: Thêm lệnh `/rename`, lưu trữ tiêu đề tùy chỉnh thông qua tệp `.meta.json`, không phá hủy |
| [#38045](https://github.com/anthropics/claude-code/pull/38045) | moxer-mmh | **Plugin lean-agents**: 6 giải pháp thay thế đại lý lượng tử nhẹ, giải quyết lỗi "prompt quá dài" do lược đồ công cụ MCP bị phình to |
| [#35683](https://github.com/anthropics/claude-code/pull/35683) | cruzlauroiii | **Plugin sửa lỗi cuộn Terminal**: Tự động sửa lỗi cuộn lên đầu trong hội thoại dài, cung cấp chuyển đổi đóng băng Ctrl+6 |
| [#35710](https://github.com/anthropics/claude-code/pull/35710) | VRDate | **Sửa lỗi quan trọng: BSOD Windows (Wof.sys)**: Khóa loại trừ công cụ ngăn liệt kê hệ thống tệp song song gây xanh màn hình, nhắm vào #32870 |
| [#38105](https://github.com/anthropics/claude-code/pull/38105) | Rich627 | **Plugin kênh WhatsApp**: Thực hiện nhắn tin hai chiều qua giao thức Baileys, tương đương với chức năng Telegram/Discord |
| [#27140](https://github.com/anthropics/claude-code/pull/27140) | powerpig99 | **Plugin cầu nối bộ nhớ**: Tích hợp ngữ cảnh có cấu trúc ở ranh giới phiên, lệnh `/bridge` lưu trữ kết quả học tập bền vững |
| [#37159](https://github.com/anthropics/claude-code/pull/37159) | Cazador0 | **Hệ thống quản lý bộ nhớ và phiên bền vững**: Quản lý hội thoại đa vòng đầy đủ, xử lý cửa sổ ngữ cảnh tự động, trích xuất kho bộ nhớ |
| [#38085](https://github.com/anthropics/claude-code/pull/38085) | Ayush-Patel-56 | **Sửa lỗi tài liệu**: Bổ sung câu bị cắt trong mô tả `/plan` trong changelog v2.1.72 |
| [#31701](https://github.com/anthropics/claude-code/pull/31701) | rios0rios0 | **Hỗ trợ $TMPDIR**: Sửa lỗi đường dẫn mã hóa cứng `/tmp/claude`, hỗ trợ môi trường hạn chế như Termux/Android |

---

## Xu hướng nhu cầu chức năng

| Hướng | Mức độ phổ biến | Yêu cầu điển hình |
|:---|:---|:---|
| **Hỗ trợ kiến trúc ARM/dị thể** | ⭐⭐⭐⭐⭐ | Điện tử hóa máy ảo Cowork, hỗ trợ gốc FreeBSD/aarch64 Linux |
| **Độ tin cậy của Cowork** | ⭐⭐⭐⭐⭐ | Lỗi đổi tên VHDX, xung đột driver tệp đám mây Windows, khả năng di chuyển thư mục dự án |
| **Củng cố quyền và bảo mật** | ⭐⭐⭐⭐⭐ | Bảo vệ rò rỉ thông tin đăng nhập, khắc phục vượt qua cửa khẩu quyền, thực thi xác nhận chỉnh sửa bắt buộc |
| **Trải nghiệm Terminal/TUI** | ⭐⭐⭐⭐☆ | Sửa lỗi cuộn, phím tắt có thể cấu hình, hỗ trợ giọng nói đa ngôn ngữ |
| **Cộng tác từ xa/di động** | ⭐⭐⭐⭐☆ | Độ ổn định Remote Control, giám sát phiên trên thiết bị di động, truy cập từ xa Cowork |
| **Hoàn thiện hệ sinh thái MCP** | ⭐⭐⭐⭐☆ | Độ ổn định phơi bày công cụ, MCP Computer Use chính thức, danh sách trắng URL bên ngoài |
| **Quản lý bộ nhớ và ngữ cảnh** | ⭐⭐⭐⭐☆ | Nới lỏng giới hạn dòng MEMORY.md, lưu trữ suy nghĩ có nỗ lực, tuân thủ hướng dẫn CLAUDE.md |

---

## Điểm thu hút nhà phát triển

### 🔴 Điểm đau cốt lõi

| Vấn đề | Phạm vi ảnh hưởng | Tâm trạng cộng đồng |
|:---|:---|:---|
| **Cowork không ổn định trên Windows/ARM** | Rộng | Cảm giác thất vọng, nhiều issue chưa được giải quyết lâu dài |
| **AI không tuân thủ quy tắc bảo mật CLAUDE.md** | Nghiêm trọng | Khủng hoảng niềm tin, nhiều sự cố rò rỉ thông tin đăng nhập |
| **Thực thi chế độ quyền không nhất quán** | Quan trọng về bảo mật | Niềm tin vào quy trình làm việc tự động giảm |
| **Ngắt kết nối Remote Control** | Nhà phát triển từ xa | Gián đoạn năng suất, nhu cầu workaround |

### 🟡 Nhu cầu tần suất cao

- **Chính thức hóa plugin cộng đồng**：Chất lượng plugin cộng đồng không đồng đều, mong đợi cơ chế chính thức chấp nhận hoặc chứng nhận
- **CLI hóa Computer Use**：Chức năng độc quyền trên máy tính để bàn hạ cấp xuống tình huống Terminal (#38471)
- **Tận dụng cửa sổ ngữ cảnh**：Có thể sử dụng 1M token nhưng MEMORY.md giới hạn 200 dòng, cấu hình không đủ linh hoạt

### 💡 Điểm sáng hôm nay

Sửa lỗi tự tổ chức cộng đồng sôi nổi: các plugin như `scroll-fix`, `tool-mutex`, `lean-agents` trực tiếp đáp ứng các điểm đau cốt lõi, cho thấy các nhà phát triển đang lấp đầy khoảng trống phản hồi chậm trễ của chính thức.

---

*Nguồn dữ liệu: github.com/anthropics/claude-code | Thời gian tạo: 2026-03-25*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Cập nhật tin tức cộng đồng OpenAI Codex Ngày 25-03-2026

---

## 1. Tóm tắt hôm nay

Trọng tâm cộng đồng hôm nay tập trung vào hai chủ đề chính: **tiêu thụ token bất thường** (Issue #14593 đã tích lũy 231 bình luận) và **tăng cường tương tác TUI**. Thư viện cốt lõi Rust liên tục phát hành 4 phiên bản alpha lặp lại, đồng thời chức năng luồng phụ `/btw` chính thức có mặt trên TUI, đánh dấu một cuộc khám phá quan trọng của Codex trong quản lý luồng hội thoại.

---

## 2. Phát hành phiên bản

### Lặp lại dày đặc thư viện cốt lõi Rust (v0.117.0-alpha.11 ~ alpha.14)
| Phiên bản | Thời gian phát hành |
|:---|:---|
| [rust-v0.117.0-alpha.14](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.14) | Trong vòng 24 giờ |
| [rust-v0.117.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.13) | Trong vòng 24 giờ |
| [rust-v0.117.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.12) | Trong vòng 24 giờ |
| [rust-v0.117.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.11) | Trong vòng 24 giờ |

> Lưu ý: Release Note chỉ hiển thị số phiên bản, cần kết hợp lịch sử PR để theo dõi các thay đổi cụ thể. Việc phát hành alpha với tần suất cao cho thấy quá trình di chuyển Rust đang bước vào giai đoạn ổn định quan trọng.

---

## 3. Issues cộng đồng nóng (Chọn lọc 10 mục)

| # | Tiêu đề | Trạng thái | Bình luận | 👍 | Điểm cốt lõi |
|:---|:---|:---|:---:|:---:|:---|
| [#14593](https://github.com/openai/codex/issues/14593) | Tiện ích mở rộng VS Code tiêu thụ token quá nhanh sau khi cập nhật | 🔴 MỞ | **231** | 83 | **Chủ đề nóng nhất cộng đồng**。Người dùng gói Business phản hồi phiên bản 26.311.21342 vẫn còn tình trạng tính phí bất thường, OpenAI chính thức chưa đưa ra lời giải thích nguyên nhân gốc rễ, người dùng kêu gọi cơ chế tính phí minh bạch |
| [#10450](https://github.com/openai/codex/issues/10450) | Codex Desktop hỗ trợ phát triển từ xa | 🔴 MỞ | 78 | 439 | **Yêu cầu được yêu thích nhất**。Người dùng muốn phiên bản desktop hỗ trợ phát triển từ xa qua SSH/container, tương đương với VS Code Remote, hiện tại chỉ giới hạn trên trình duyệt gây ảnh hưởng nghiêm trọng đến quy trình làm việc di chuyển |
| [#11981](https://github.com/openai/codex/issues/11981) | Sử dụng 100% CPU khi chạy một agent | 🔴 MỞ | 18 | 0 | Trường hợp điển hình về hồi quy hiệu suất, người dùng Mac phản hồi ngay cả khi chỉ chạy một agent cũng xuất hiện CPU đầy tải, cùng với [#15620](https://github.com/openai/codex/issues/15620) cùng chỉ ra vấn đề lập lịch tiến trình nền Electron/Node |
| [#13784](https://github.com/openai/codex/issues/13784) | Lỗi tác vụ nén từ xa `/compact` | 🔴 MỞ | 17 | 8 | Vấn đề độ ổn định chức năng nén ngữ cảnh, phổ biến trên nền tảng Windows, thông báo lỗi "Error running remote compact task" |
| [#14860](https://github.com/openai/codex/issues/14860) | Giải pháp sửa lỗi hết hạn `/compact` trên Linux | 🔴 MỞ | 13 | 9 | Người đóng góp cộng đồng Grallen chủ động gửi bản sửa lỗi bug, thể hiện giá trị hợp tác nguồn mở, chờ chính thức hợp nhất |
| [#15277](https://github.com/openai/codex/issues/15277) | Lỗi ghi thư mục sandbox `apply_patch` trên Windows | 🔴 MỞ | 7 | 0 | Vấn đề ranh giới quyền sandbox, ghi lần đầu thành công sau đó các thao tác tiếp theo thất bại, ảnh hưởng trải nghiệm nhà phát triển Windows |
| [#15503](https://github.com/openai/codex/issues/15503) | CPU tăng đột biến trong quá trình sử dụng bình thường | 🔴 MỞ | 5 | 6 | Phiên bản 26.318.11754 quay lại, nhật ký debug hiển thị đầu ra vòng lặp ở mức mili giây, nghi ngờ là lỗi logic kiểm tra định kỳ |
| [#15620](https://github.com/openai/codex/issues/15620) | CPU cao khi nhàn rỗi: git/subprocess nền chạy không tải | 🔴 MỞ | 4 | 1 | **Issue quan trọng mới được bổ sung**。Ứng dụng Electron vẫn hoạt động CPU liên tục khi nhàn rỗi, giám sát tiến trình hiển thị tiến trình con git khởi động thường xuyên |
| [#15169](https://github.com/openai/codex/issues/15169) | Mất bộ nhớ phiên Playwright MCP | 🔴 MỞ | 4 | 7 | Sau khi cập nhật ứng dụng macOS, tùy chọn "approve for this session" biến mất, trải nghiệm công cụ MCP thụt lùi |
| [#15680](https://github.com/openai/codex/issues/15680) | Đại lý có thể sửa đổi `.codex/config.toml` mà không có quyền | 🔴 MỞ | 3 | 0 | **Vấn đề ranh giới bảo mật**。Cách ly sandbox thất bại, đại lý có thể tự ý sửa đổi cấu hình cấp dự án, gây lo ngại về mô hình quyền |

---

## 4. Tiến độ PR quan trọng (Chọn lọc 10 mục)

| # | Tiêu đề | Tác giả | Chức năng cốt lõi |
|:---|:---|:---|:---|
| [#15701](https://github.com/openai/codex/pull/15701) | TUI: Luồng hỏi phụ `/btw` mới | charley-oai | **Đổi mới tương tác**。Hỗ trợ phân nhánh luồng bên tạm thời từ hội thoại hiện tại để hỏi, quay lại luồng chính bằng Esc/Ctrl+C – tương đương chức năng trò chuyện cạnh bên của Claude |
| [#15699](https://github.com/openai/codex/pull/15699) | Chèn ngữ cảnh fork trì hoãn vào vòng đầu tiên | charley-oai | Tối ưu hóa hiệu suất fork, loại bỏ chèn `build_initial_context` khi khởi động, giảm chi phí bộ nhớ |
| [#15597](https://github.com/openai/codex/pull/15597) | Quay màn hình tạm thời cục bộ v1 | kliu128 | **Chức năng mới**。Quay màn hình nền cấp tiến, yêu cầu bật hai công tắc ( `features.screen_recording` + `recording.screen.enabled`), chuẩn bị cho khả năng hiểu trực quan của đại lý |
| [#15531](https://github.com/openai/codex/pull/15531) | Hook shell không đồng bộ PostToolUse | eternal-openai | Mở rộng hệ thống hook, hỗ trợ gọi lại đồng bộ sau khi thực thi lệnh shell, tạo thành vòng đời hoàn chỉnh với PreToolUse [#15211](https://github.com/openai/codex/pull/15211) |
| [#15583](https://github.com/openai/codex/pull/15583) | Tái sử dụng đường dẫn lạnh DB trạng thái app-server | charley-oai | Tối ưu hóa kiến trúc, tránh mở `StateRuntime` lặp lại, cải thiện hiệu quả truy vấn SQLite |
| [#15548](https://github.com/openai/codex/pull/15548) | Tách rollout thành crate độc lập | aibrahim-oai | Tái cấu trúc mã, tách các module ghi rollout, siêu dữ liệu, chính sách khỏi cốt lõi, đặt nền móng cho hệ thống đào tạo/phát lại phân tán |
| [#15667](https://github.com/openai/codex/pull/15667) | Xử lý rõ ràng thời gian chờ kiểm duyệt Guardian | charley-oai | Thời gian chờ 90s→120s, thêm trạng thái chấm dứt `TimedOut`, thời gian chờ chuyển thành văn bản lỗi có thể nhìn thấy bởi mô hình thay vì từ chối trực tiếp |
| [#15693](https://github.com/openai/codex/pull/15693) | Sửa lỗi tương thích bubblewrap phiên bản cũ | viyatb-oai | Giải quyết vấn đề tương thích tham số `--argv0` trên phiên bản bwrap cũ, ưu tiên sử dụng `/usr/bin/bwrap` của hệ thống |
| [#15695](https://github.com/openai/codex/pull/15695) | Di chuyển tải cấu hình không đồng bộ | pakrym-oai | Bắt đầu thúc đẩy toàn bộ đường dẫn async từ `resolve_root_git_project_for_trust`, chuẩn bị cho các hoạt động nặng về I/O |
| [#15688](https://github.com/openai/codex/pull/15688) | Điều chỉnh thứ tự hướng dẫn rõ ràng cho plugin | charley-oai | Đặt hướng dẫn đề cập plugin trước đầu vào của người dùng, tối ưu hóa ưu tiên hiểu ý định của plugin của mô hình |

---

## 5. Xu hướng nhu cầu chức năng

Dựa trên phân tích 50 Issues đang hoạt động, sự chú ý của cộng đồng tập trung vào **"một cốt lõi, hai cánh"**:

```
┌─────────────────────────────────────────┐
│           🔥 Cốt lõi: Tính minh bạch phí          │
│    tiêu thụ token bất thường, giới hạn tốc độ, đặt lại việc sử dụng      │
│         (Issue #14593, #14349)          │
├─────────────────────────────────────────┤
│  🛠️ Cánh trái: Tích hợp sâu hệ sinh thái IDE/Editor         │
│    • Hỗ trợ phát triển từ xa (#10450)               │
│    • Changelog tiện ích mở rộng VS Code (#4323)      │
│    • Tiến trình đại lý bền vững (#14110)          │
├─────────────────────────────────────────┤
│  ⚡ Cánh phải: Hiệu suất và hiệu quả tài nguyên                 │
│    • Tối ưu hóa CPU/bộ nhớ (#11981,#15503,#15620) |
│    • Tăng cường cách ly sandbox (#15680, #15277)       │
│    • Độ ổn định nén ngữ cảnh (#13784, #14860)    │
└─────────────────────────────────────────┘
```

**Xu hướng mới nổi**: Đổi mới tương tác TUI (`/btw`, `/loop`, phím tắt chế độ YOLO) và mức độ trưởng thành của chuỗi công cụ MCP trở thành điểm cạnh tranh khác biệt.

---

## 6. Điểm thu hút nhà phát triển

| Loại điểm đau | Biểu hiện cụ thể | Issue đại diện |
|:---|:---|:---|
| **Lo lắng về phí** | tiêu thụ token không thể đoán trước, giới hạn tốc độ giảm đột ngột, tài khoản Business/Teams không nhận được việc đặt lại như mong đợi | [#14593](https://github.com/openai/codex/issues/14593), [#14349](https://github.com/openai/codex/issues/14349) |
| **Công dân hạng hai Windows** | Lỗi sandbox `apply_patch`, xử lý khoảng trắng đường dẫn, lỗi quyền (EPERM) | [#15277](https://github.com/openai/codex/issues/15277), [#14594](https://github.com/openai/codex/issues/14594), [#14688](https://github.com/openai/codex/issues/14688) |
| **Hồi quy hiệu suất** | CPU nhàn rỗi chạy không tải, tiến trình nền Electron mất kiểm soát, tiến trình con git khởi động thường xuyên | [#11981](https://github.com/openai/codex/issues/11981), [#15620](https://github.com/openai/codex/issues/15620), [#15503](https://github.com/openai/codex/issues/15503) |
| **Khoảng trống quy trình làm việc cấp doanh nghiệp** | Không có phát triển từ xa, không có đại lý bền vững, thiếu khả năng lập lịch tác vụ/định thời | [#10450](https://github.com/openai/codex/issues/10450), [#14110](https://github.com/openai/codex/issues/14110), [#8317](https://github.com/openai/codex/issues/8317) |
| **Ranh giới bảo mật không rõ ràng** | Đại lý có thể tự sửa đổi cấu hình, rủi ro thoát khỏi sandbox | [#15680](https://github.com/openai/codex/issues/15680) |
| **Hệ sinh thái hook cần hoàn thiện** | PreToolUse/PostToolUse vừa được triển khai, cộng đồng mong đợi kiểm soát chất lượng mã, chặn các thao tác phá hủy | [#14754](https://github.com/openai/codex/issues/14754), [#15531](https://github.com/openai/codex/pull/15531) |

---

> 📊 Nguồn dữ liệu: [openai/codex](https://github.com/openai/codex) | Chu kỳ thống kê: 2026-03-24 đến 2026-03-25

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Cập nhật tin tức cộng đồng Gemini CLI Ngày 25-03-2026

---

## Tóm tắt hôm nay

Cộng đồng hôm nay tập trung vào **cải thiện độ ổn định** và **tiến hóa kiến trúc đại lý thông minh**: phiên bản v0.36.0-preview.0 ra mắt hỗ trợ lọc công cụ đại lý phụ đa registry, đồng thời cơ sở hạ tầng CI tiếp tục được củng cố, nhiều bài kiểm tra không ổn định đã được chuyển sang bộ không chặn. Khởi động dự án GSoC đã thúc đẩy các vấn đề về đánh giá hành vi và xây dựng cộng đồng nguồn mở nóng lên.

---

## Phát hành phiên bản

### v0.36.0-preview.0 & v0.35.0

| Phiên bản | Cập nhật cốt lõi |
|:---|:---|
| **v0.36.0-preview.0** | • **Kiến trúc đa registry**: Hỗ trợ lọc công cụ đại lý phụ, cải thiện tính linh hoạt của sự hợp tác của đại lý [#22712](https://github.com/google-gemini/gemini-cli/pull/22712) |
| **v0.35.0** | • **Phím tắt có thể tùy chỉnh**: Người dùng có thể tùy chỉnh phím tắt tương tác CLI [#21945](https://github.com/google-gemini/gemini-cli/pull/21945)<br>• **AgentLoopContext đa luồng**: Tối ưu hóa kiến trúc cốt lõi, đặt nền móng cho quy trình làm việc của đại lý phức tạp [#21944](https://github.com/google-gemini/gemini-cli/pull/21944) |

---

## Issues cộng đồng nóng

| # | Nghị đề | Mức độ quan trọng | Phản hồi cộng đồng |
|:---|:---|:---|:---|
| [#23331](https://github.com/google-gemini/gemini-cli/issues/23331) | **GSoC: Đánh giá hành vi, chất lượng và xây dựng cộng đồng nguồn mở** | 🔥 **Cấp chiến lược** | 52 bình luận, 14 👍。Dự án Google Summer of Code chính thức, quyết định trực tiếp mức độ mở của hệ thống đánh giá chất lượng sự tham gia của nhà phát triển bên ngoài |
| [#23328](https://github.com/google-gemini/gemini-cli/issues/23328) | Tối ưu hóa nhật ký đầu ra bộ kiểm thử | Hiệu quả kỹ thuật | 41 bình luận。Đầu ra nhật ký thành công của kiểm thử hàng trăm nghìn ký tự, làm chậm nghiêm trọng tốc độ phản hồi CI, cần được quản lý khẩn cấp |
| [#23230](https://github.com/google-gemini/gemini-cli/issues/23230) | Chế độ plan thoát không chuyển đổi mô hình | Trải nghiệm người dùng | 10 bình luận。Lỗi logic chuyển đổi gemini-3-flash-preview, ảnh hưởng đến việc triển khai chiến lược tối ưu hóa chi phí |
| [#21109](https://github.com/google-gemini/gemini-cli/issues/21109) | Hình ảnh hóa sóng động âm thanh chế độ thoại | Đổi mới tương tác | 9 bình luận。GSoC Dự án 11 yêu cầu rõ ràng, Live API cần tăng cường phản hồi trạng thái |
| [#23717](https://github.com/google-gemini/gemini-cli/issues/23717) | Phê duyệt người dùng ranh giới không gian làm việc không nhất quán | **Lỗ hổng bảo mật** | 2 bình luận。Công cụ bash và công cụ hệ thống tệp có sự khác biệt về chiến lược phê duyệt cho thư mục bên ngoài, cần sửa chữa khẩn cấp |
| [#22855](https://github.com/google-gemini/gemini-cli/issues/22855) | `/plan` hỗ trợ truyền tham số trực tiếp | Tối ưu hóa hiệu quả | 2 bình luận。Giảm bước tương tác, khởi động chế độ kế hoạch một lần bấm |
| [#23728](https://github.com/google-gemini/gemini-cli/issues/23728) | Hỗ trợ steering mô hình đại lý phụ | Khả năng kiến trúc | 1 bình luận。Đại lý phụ hiện tại không thể bị steering, hạn chế kiểm soát chi tiết |
| [#23724](https://github.com/google-gemini/gemini-cli/issues/23724) | Lưu trữ Tracker cấp dự án bền vững | Quản lý dữ liệu | 1 bình luận。Trạng thái tác vụ di chuyển từ thư mục tạm thời sang `.gemini/tracker/`, hỗ trợ hợp tác Git |
| [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) | Đại lý phụ nhận biết chế độ phê duyệt đang hoạt động | Tính nhất quán | 1 bình luận。Xung đột giữa động cơ chiến lược và hướng dẫn của đại lý, cần thống nhất nhận thức |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | Định tuyến bộ nhớ: toàn cục vs dự án | Cá nhân hóa | 1 bình luận。Tách biệt sở thích người dùng và bộ nhớ cụ thể của kho mã để lưu trữ |

---

## Tiến độ PR quan trọng

| # | Chức năng/Sửa lỗi | Giá trị kỹ thuật |
|:---|:---|:---|
| [#23732](https://github.com/google-gemini/gemini-cli/pull/23732) | Chuyển bài kiểm thử ctrl-c không ổn định sang bộ không chặn | Ổn định CI: Tuân theo mẫu #23259, gỡ bỏ chặn PR |
| [#23731](https://github.com/google-gemini/gemini-cli/pull/23731) | Bỏ qua bài kiểm thử Ctrl+C không ổn định trên macOS | Giải pháp tạm thời: Xử lý tín hiệu trên macOS không đáng tin cậy |
| [#23729](https://github.com/google-gemini/gemini-cli/pull/23729) | Phơi bày `additional_permissions` cho công cụ shell có điều kiện | Tăng cường bảo mật: Chỉ phơi bày tham số quyền khi sandbox được bật |
| [#23719](https://github.com/google-gemini/gemini-cli/pull/23719) | Giới thiệu chủ đề bảo mật/phong phú kép, hỗ trợ màu sắc thật | Khả năng tiếp cận: Ánh xạ rõ ràng màu 256, giải quyết vấn đề nhất quán |
| [#23720](https://github.com/google-gemini/gemini-cli/pull/23720) | Skill CI mới: Tự động tái hiện lỗi | Trải nghiệm nhà phát triển: Chẩn đoán chủ động sau khi đẩy, thay thế chờ đợi thụ động |
| [#23727](https://github.com/google-gemini/gemini-cli/pull/23727) | Đánh giá công cụ web | Cơ sở hạ tầng chất lượng: Phân biệt lựa chọn thông minh của `web_fetch` và `google_web_search` |
| [#23282](https://github.com/google-gemini/gemini-cli/pull/23282) | Triển khai đa nền tảng `forbiddenPaths` sandbox | Khả năng bảo mật: Kiểm soát đường dẫn thống nhất trên macOS/Linux/Windows |
| [#23725](https://github.com/google-gemini/gemini-cli/pull/23725) | Số lần chạy đánh giá ban đêm 3→10 | Độ chính xác dữ liệu: Loại bỏ nền nhiễu, thiết lập đường cơ sở ổn định có độ trung thực cao |
| [#22869](https://github.com/google-gemini/gemini-cli/pull/22869) | Chuyển đổi chế độ bộ đệm thay thế động | Tính linh hoạt: Chuyển đổi liền mạch giữa chế độ toàn màn hình/nội tuyến trong phiên làm việc |
| [#23064](https://github.com/google-gemini/gemini-cli/pull/23064) | Thiết kế lại UI nén ngữ cảnh | Tối ưu hóa trải nghiệm: Ép buộc nén tự động, làm mờ phần gây nhiễu bằng màu xám in nghiêng |

---

## Xu hướng nhu cầu chức năng

Dựa trên phân tích 50 Issues đang hoạt động, trọng tâm chú ý của cộng đồng thể hiện ba hướng:

```
┌─────────────────────────────────────────────────────────┐
│  1. Chuyên sâu kiến trúc đại lý thông minh (35%)                                 │
│     • Steering đại lý phụ / Định tuyến bộ nhớ / Nhận biết chế độ phê duyệt           │
│     • Công cụ mã nhận biết AST (#22745 #22746)                   │
│     • Tích hợp sâu quy trình làm việc SDD và Task Tracker                  │
├─────────────────────────────────────────────────────────┤
│  2. Trải nghiệm nhà phát triển và kỹ thuật chất lượng (30%)                           │
│     • Mở rộng hệ thống đánh giá hành vi (trọng tâm GSoC)                       │
│     • Ổn định CI và quản lý kiểm thử không ổn định                          │
│     • Cơ chế đóng gói và phân phối Skill                          │
├─────────────────────────────────────────────────────────┤
│  3. Tăng cường tương tác và hình ảnh hóa (25%)                               │
│     • Sóng động hoạt hình chế độ thoại / Chuyển đổi chủ đề động                     │
│     • Tự động điều chỉnh chiều cao Terminal chế độ Plan / UX danh sách tác vụ               │
├─────────────────────────────────────────────────────────┤
│  4. Bảo mật và Sandbox (10%)                               │
│     • Tính nhất quán ranh giới không gian làm việc / Mở rộng quyền động                  │
└─────────────────────────────────────────────────────────┘
```

---

## Điểm thu hút nhà phát triển

| Loại điểm đau | Biểu hiện cụ thể | Issue đại diện |
|:---|:---|:---|
| **Cơ sở hạ tầng kiểm thử mỏng manh** | Kiểm thử tín hiệu trên macOS không đáng tin cậy, lũ lụt nhật ký chặn phản hồi | #23733 #23328 |
| **Hành vi đại lý không thể đoán trước** | Tệp lệnh tạm thời rải rác, chuyển đổi mô hình không hợp lệ | #23571 #23230 |
| **Ngưỡng đánh giá chất lượng cao** | Khó khăn cho nhà phát triển bên ngoài tham gia đánh giá prompt/tools | #23331 |
| **Quản lý bộ nhớ hỗn loạn** | Bộ nhớ toàn cục/dự án chưa được tách biệt, ghi chủ động không đủ | #22819 #22809 |
| **Chiến lược sandbox không nhất quán** | Logic phê duyệt khác biệt giữa các công cụ, thời điểm phơi bày tham số quyền | #23717 #23729 |

---

*Nguồn dữ liệu: google-gemini/gemini-cli | Thời gian tạo: 2026-03-25*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# Cập nhật tin tức cộng đồng GitHub Copilot CLI Ngày 25-03-2026

## Tóm tắt hôm nay

Hoạt động cộng đồng hôm nay khá sôi nổi, có tổng cộng 50 Issues được cập nhật, nhưng không có bản phát hành phiên bản mới nào. Mâu thuẫn cốt lõi tập trung vào **báo động sai về chính sách máy chủ MCP cấp tổ chức** (nhiều người dùng phản hồi MCP của bên thứ ba bị vô hiệu hóa sai) và **tính khả dụng của mô hình không nhất quán** (danh sách mô hình CLI và VS Code không đồng bộ). Ngoài ra, các vấn đề về hiệu suất WSL và nhu cầu tương thích terminal tiếp tục nóng lên.

---

## Issues cộng đồng nóng

| # | Tiêu đề | Trạng thái | Mức độ quan trọng | Phản hồi cộng đồng | Điểm cốt lõi |
|---|------|------|--------|----------|----------|
| [#1703](https://github.com/github/copilot-cli/issues/1703) | CLI không liệt kê các mô hình đã được tổ chức bật (ví dụ: Gemini 3.1 Pro) | 🔵 Đang mở | ⭐⭐⭐⭐⭐ | 13 bình luận, 22 👍 | **Điểm đau của người dùng doanh nghiệp**：Các mô hình hiển thị trên VS Code cho cùng một tài khoản lại không hiển thị trên CLI, ảnh hưởng đến tính nhất quán của quy trình làm việc |
| [#2236](https://github.com/github/copilot-cli/issues/2236) | Máy chủ MCP registry tổ chức biến mất, báo động sai "bị tổ chức vô hiệu hóa" | 🔵 Đang mở | ⭐⭐⭐⭐⭐ | 3 bình luận, 7 👍 | **Vấn đề quay lại của v1.0.11**：Tương tự #1707, có lỗi trong phân tích chính sách tổ chức |
| [#172](https://github.com/github/copilot-cli/issues/172) | Cấu hình hết hạn MCP không được tôn trọng | 🔵 Đang mở | ⭐⭐⭐⭐ | 7 bình luận, 2 👍 | Tình huống máy chủ MCP chạy dài bị cản trở, cấu hình `mcp-config.json` không có tác dụng |
| [#2050](https://github.com/github/copilot-cli/issues/2050) | Claude Sonnet 4.6 thực thi lỗi: lỗi 503 GOAWAY | 🔵 Đang mở | ⭐⭐⭐⭐ | 6 bình luận, 3 👍 | Vấn đề độ ổn định cấp mô hình, Gemini 3 Pro bình thường, chỉ ra vấn đề phía Anthropic hoặc định tuyến |
| [#1477](https://github.com/github/copilot-cli/issues/1477) | Nhắc nhở tính phí "Continuing autonomously" bất thường | 🔵 Đang mở | ⭐⭐⭐⭐ | 6 bình luận, 7 👍 | Tranh cãi về logic tính phí chế độ tự động, người dùng cho rằng mô hình đã hoàn thành nhưng vẫn kích hoạt yêu cầu premium |
| [#2208](https://github.com/github/copilot-cli/issues/2208) | CPU 100% dưới WSL và TUI không phản hồi | 🔵 Đang mở | ⭐⭐⭐⭐ | 1 bình luận | Vấn đề quản lý trạng thái hội thoại dài (Claude Opus 4.6 1M), đã thu thập dấu vết hiệu suất |
| [#2101](https://github.com/github/copilot-cli/issues/2101) | Lỗi API tạm thời dẫn đến giới hạn tốc độ | 🔵 Đang mở | ⭐⭐⭐⭐ | 5 bình luận, 2 👍 | Cơ chế thử lại xung đột với chính sách giới hạn tốc độ, ảnh hưởng đến tính khả dụng |
| [#989](https://github.com/github/copilot-cli/issues/989) | ID công cụ chế độ `--acp` trả về lỗi | 🔵 Đang mở | ⭐⭐⭐ | 5 bình luận, 3 👍 | Lỗi triển khai giao thức ACP, ảnh hưởng đến tích hợp client |
| [#2269](https://github.com/github/copilot-cli/issues/2269) | Mức sử dụng CPU cao SDK đa phiên | 🔵 Đang mở | ⭐⭐⭐ | 0 bình luận | Codespace 4 core không thể sử dụng, Hỗ trợ GitHub đã xác nhận vấn đề |
| [#2272](https://github.com/github/copilot-cli/issues/2272) | Hiệu suất GPT-5.4 kém hơn GPT-5.3-codex | 🔵 Đang mở | ⭐⭐⭐ | 0 bình luận | Hồi quy chất lượng nâng cấp mô hình, Codex hoạt động tốt hơn với cùng một mô hình |

---

## Tiến độ PR quan trọng

**Không có cập nhật Pull Request hôm nay.**

---

## Xu hướng nhu cầu chức năng

Dựa trên phân tích 50 Issues đang hoạt động hôm nay, các hướng chú ý của cộng đồng phân bố như sau:

| Xu hướng | Issue đại diện | Mức độ phổ biến |
|----------|-----------|------|
| **Mở rộng tương thích Terminal** | [#1257](https://github.com/github/copilot-cli/issues/1257) Termux/Android, [#2246](https://github.com/github/copilot-cli/issues/2246) Warp, [#2252](https://github.com/github/copilot-cli/issues/2252) thanh cuộn Windows Terminal | 🔥🔥🔥🔥 |
| **Tinh chỉnh quyền và sandbox** | [#2256](https://github.com/github/copilot-cli/issues/2256) danh sách trắng nhị phân bền vững, [#2273](https://github.com/github/copilot-cli/issues/2273) lệnh chỉ đọc PowerShell miễn xác nhận | 🔥🔥🔥🔥 |
| **Tối ưu hóa hiệu suất và tài nguyên** | [#2208](https://github.com/github/copilot-cli/issues/2208) WSL CPU 100%, [#2269](https://github.com/github/copilot-cli/issues/2269) tải cao SDK đa phiên | 🔥🔥🔥🔥 |
| **Tính nhất quán của hệ sinh thái mô hình** | [#1703](https://github.com/github/copilot-cli/issues/1703) đồng bộ danh sách mô hình, [#2272](https://github.com/github/copilot-cli/issues/2272) hồi quy chất lượng GPT-5.4 | 🔥🔥🔥 |
| **Mức độ trưởng thành của hệ sinh thái MCP** | [#172](https://github.com/github/copilot-cli/issues/172) cấu hình hết hạn, [#2236](https://github.com/github/copilot-cli/issues/2236) báo động sai chính sách tổ chức | 🔥🔥🔥 |
| **Lập trình chế độ khởi động** | [#2268](https://github.com/github/copilot-cli/issues/2268) cờ `--plan`/`--autopilot`, [#2227](https://github.com/github/copilot-cli/issues/2227) chia sẻ hội thoại tự động | 🔥🔥 |

---

## Điểm thu hút nhà phát triển

### 🔴 Điểm đau tần suất cao

1. **Phân tích chính sách tổ chức không đáng tin cậy**  
   - [#1707](https://github.com/github/copilot-cli/issues/1707) [#2236](https://github.com/github/copilot-cli/issues/2236) hiển thị cảnh báo "MCP của bên thứ ba bị tổ chức vô hiệu hóa" không khớp với chính sách thực tế, có thể khôi phục bằng cách hạ cấp về v0.0.417, xác nhận là lỗi quay lại của v1.0.11

2. **Phân mảnh trải nghiệm đa nền tảng**  
   - Tính khả dụng của mô hình, danh mục kỹ năng (`~/.agents/skills`) không nhất quán giữa VS Code và CLI, người dùng doanh nghiệp khó thống nhất quy trình làm việc

3. **Độ ổn định hội thoại dài**  
   - CPU WSL tăng đột biến, TUI bị đơ trong tình huống ngữ cảnh 1M của Claude Opus 4.6, quản lý trạng thái nghi ngờ rò rỉ bộ nhớ

### 🟡 Nhu cầu mới nổi

- **Cấu hình Shell rõ ràng** ([#2271](https://github.com/github/copilot-cli/issues/2271)): Buộc sử dụng Bash thay vì PowerShell trên Windows
- **Thực thi bắt buộc chế độ PLAN** ([#2270](https://github.com/github/copilot-cli/issues/2270)): Đại lý `/fleet` bỏ qua chế độ kế hoạch và trực tiếp sửa đổi mã
- **Khả năng phục hồi phiên** ([#2227](https://github.com/github/copilot-cli/issues/2227)): Tự động `/share` để tránh mất công việc

---

*Nguồn dữ liệu: github.com/github/copilot-cli | Chu kỳ thống kê: 2026-03-24*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Cập nhật tin tức cộng đồng Kimi Code CLI Ngày 25-03-2026

---

## Tóm tắt hôm nay

Hoạt động cộng đồng hôm nay khá sôi