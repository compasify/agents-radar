# Cập nhật hàng ngày về cộng đồng công cụ AI CLI Ngày 16-04-2026

> Thời gian tạo: 2026-04-16 00:17 UTC | Công cụ được bao phủ: 8

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

# Báo cáo phân tích so sánh ngang hệ sinh thái công cụ AI CLI | 16-04-2026

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái công cụ AI CLI hiện tại đã bước vào "vùng nước sâu của sự đồng nhất chức năng và sự khác biệt hóa trải nghiệm". Tối ưu hóa trải nghiệm TUI, khả năng quan sát Agent, và tính ổn định của tích hợp MCP đã trở thành chiến trường chung của tất cả các bên tham gia; đồng thời, mỗi công cụ bắt đầu thể hiện những con đường rõ rệt - Anthropic đặt cược vào hệ sinh thái mở rộng và bảo mật cấp doanh nghiệp, OpenAI đẩy mạnh thị trường plugin và kiến trúc thực thi từ xa, Google khám phá sự tiến hóa đa phương thức của mô hình cục bộ và giọng nói thời gian thực, trong khi các công cụ nội địa (Kimi, Qwen) đang vật lộn để cân bằng lòng tin của người dùng giữa "khả năng suy luận có thể nhìn thấy" và "sự đau đớn khi thương mại hóa". Một tín hiệu đáng chú ý là: **Khả năng chấp nhận của cộng đồng đối với "độ tin cậy của quy trình làm việc Agent" đang nhanh chóng giảm sút**, sự chậm trễ, giới hạn tốc độ, lỗi quyền truy cập đã từ những thiếu sót trong trải nghiệm trở thành khủng hoảng lòng tin sản phẩm.

---

## 2. So sánh mức độ hoạt động của từng công cụ

| Công cụ | Mức độ hoạt động của Issues hôm nay | Mức độ hoạt động của PR hôm nay | Phát hành phiên bản | Tín hiệu cốt lõi |
|:---|:---|:---|:---|:---|
| **Claude Code** | Rất cao (#45596 177 bình luận/739👍, nhiều issues có hơn 50 bình luận) | Cao (Rohan5commit 13 PR trong một ngày sửa siêu dữ liệu plugin) | **v2.1.109 + v2.1.110** hai phiên bản | TUI lặp lại nhanh chóng, sự trở lại của Buddy trở thành chủ đề mang tính hiện tượng |
| **OpenAI Codex** | Rất cao (#14593 542 bình luận/222👍, #17809 38 bình luận) | Rất cao (Tái cấu trúc MCP thực thi từ xa bằng 8-PR Stack, nhiều PR được đẩy mạnh theo kiểu xếp chồng) | **rust-v0.121.0** bản ổn định + 4 bản alpha | Thị trường plugin ra mắt, tái cấu trúc kiến trúc hệ thống dày đặc |
| **Gemini CLI** | Cao (#22141 154 bình luận/122👍) | Cao (Các PR quan trọng như giọng nói thời gian thực, ContextManager, Gemma cục bộ) | **v0.38.1** + **v0.40.0-nightly** | Khủng hoảng hiệu suất Agent và tham vọng đa phương thức song hành |
| **GitHub Copilot CLI** | Trung bình cao (Vấn đề giới hạn tốc độ bùng phát tập trung, #618 đóng cửa thu hút sự chú ý) | **Rất thấp** (Chỉ có 2 PR hợp lệ, 5 PR không hợp lệ/rác) | **v1.0.28** + **v1.0.27** | Cộng đồng hoạt động nhưng cửa đóng góp bên ngoài thu hẹp, giới hạn tốc độ trở thành hố đen lòng tin |
| **Kimi Code CLI** | Trung bình cao (17 issues hoạt động, khả năng nhìn thấy thinking trở thành tâm điểm) | Trung bình cao (#1900 đã hợp nhất, nhiều bản sửa lỗi plugin VS Code đang được xem xét) | **v1.35.0** | Phản hồi nhanh chóng các phản hồi của cộng đồng, nhưng chất lượng phía plugin rõ ràng là chậm |
| **OpenCode** | Trung bình cao (Tranh cãi về thanh toán Copilot 221 bình luận, vấn đề ổn định Azure khẩn cấp) | Trung bình cao (10 PR bao gồm quyền truy cập, đồng bộ hóa, hiệu suất, khởi tạo plugin) | **v1.4.5 + v1.4.6** hai phiên bản | Áp lực tùy chỉnh doanh nghiệp và tương thích mô hình nổi bật |
| **Pi** | Trung bình cao (Vấn đề tương thích thiết bị đầu cuối, thích ứng mô hình, API mở rộng dày đặc) | Cao (Nhiều PR hợp nhất trong ngày phát hành v0.67.3, khả năng phục hồi của lệnh gọi công cụ luồng được tăng cường) | **v0.67.3** | Thân thiện với nhà phát triển mở rộng, thích ứng hệ sinh thái thiết bị đầu cuối sâu sắc nhất |
| **Qwen Code** | Cao (Việc chấm dứt hạn ngạch miễn phí gây ra cuộc thảo luận lớn 48 bình luận, nhiều issues liên quan) | Trung bình cao (Các PR kiến trúc như Agent Team, tối ưu hóa khởi động, hệ thống Hook được đẩy mạnh) | **v0.14.5** | Điều chỉnh cắt giảm thương mại hóa, lo lắng mất người dùng rõ rệt |

> **Lưu ý**: "Mức độ hoạt động" của Issues/PR xem xét tổng hợp số lượng, độ sâu thảo luận, số lượng 👍 và tốc độ phản hồi sửa lỗi.

---

## 3. Các hướng chức năng được quan tâm chung

| Hướng chức năng | Công cụ liên quan | Nhu cầu cụ thể |
|:---|:---|:---|
| **Tối ưu hóa trải nghiệm TUI/thiết bị đầu cuối** | Claude Code, OpenAI Codex, Kimi, Pi, Gemini | Hiển thị không nhấp nháy (Claude `/tui fullscreen`), khả năng hiển thị quá trình suy nghĩ (Kimi `show_thinking_stream`, Codex `/compact`), tiêu đề cửa sổ/phông chữ/thanh trạng thái (Claude #7229, Copilot #2342), tương thích trình quản lý đa phiên bản thiết bị đầu cuối (Pi #3167/#3162) |
| **Khả năng quan sát và quản trị Agent** | Claude Code, OpenAI Codex, Gemini, Kimi, Qwen | Trạng thái Subagent minh bạch (Claude #46076, Kimi #1889), làm sạch tiến trình "mồ côi" (Claude #47830, Pi #3057), Agent bị kẹt/ngắt mạch (Gemini #22141, Qwen Agent Team), lan truyền lỗi MAX_TURNS (Gemini #22323) |
| **Tính ổn định của MCP/Tích hợp** | Claude Code, OpenAI Codex, GitHub Copilot, Gemini, Qwen | Lỗi phơi nhiễm công cụ (Claude #30457), MCP thực thi từ xa (Codex 8-PR Stack), gián đoạn tải cấu hình (Copilot #2232), giới hạn số kết nối MCP (Qwen #3277), treo kết nối lỗi (Kimi #1897) |
| **Quản lý và nén ngữ cảnh** | OpenAI Codex, Gemini, Claude Code | Lệnh `/compact` thủ công (Codex #11325, 141👍), nén lỗi/treo (Codex #14346/#17809, Gemini #24736 nhóm hợp), khả năng quan sát sử dụng ngữ cảnh (Qwen v0.14.5 `/context`) |
| **Tinh chỉnh quyền và bảo mật** | Claude Code, OpenAI Copilot, OpenCode, Gemini | Khớp lệnh phức hợp theo thành phần (Claude #16561, 140👍), cấu hình quyền không có hiệu lực (OpenCode #8832), chính sách sandbox quá chặt/quá lỏng (Gemini #25338, OpenCode #2632), chặn PreToolUse cấp doanh nghiệp (Claude #36286) |
| **Giới hạn tốc độ và tính minh bạch phí** | GitHub Copilot, OpenCode, Qwen Code | Giới hạn tốc độ cực đoan của Agent nền Copilot 58 giờ (#2696), tính phí sai Copilot premium OpenCode (#8030, 221 bình luận), chấm dứt hạn ngạch miễn phí Qwen (#3203, 48 bình luận) |

---

## 4. Phân tích định vị khác biệt

| Công cụ | Trọng tâm chức năng | Người dùng mục tiêu | Đặc điểm lộ trình kỹ thuật |
|:---|:---|:---|:---|
| **Claude Code** | Bảo mật cấp doanh nghiệp, hệ sinh thái mở rộng (Hooks/Plugins), tinh chỉnh TUI | Nhà phát triển doanh nghiệp vừa và lớn, nhóm nhạy cảm về bảo mật | Chủ yếu là TypeScript/Node, được điều khiển bởi framework proxy agnix cho plugin, nhấn mạnh các móc bảo mật doanh nghiệp như PreToolUse |
| **OpenAI Codex** | Thị trường plugin, thực thi từ xa, tích hợp IDE đa nền tảng | Nhà phát triển chuyên nghiệp tìm kiếm khả năng mở rộng hệ sinh thái, nhóm hợp tác từ xa | **Tái cấu trúc cốt lõi bằng Rust**, kiến trúc thực thi từ xa MCP stdio, hệ thống xây dựng Bazel, nhấn mạnh hiệu suất và quy mô |
| **Gemini CLI** | Mô hình cục bộ (Gemma), giọng nói thời gian thực, tái cấu trúc cơ bản kiến trúc Agent | Nhà thám hiểm đa phương thức, người dùng ngoại tuyến/cách ly doanh nghiệp | Ngăn xếp Node.js, đầu tư mạnh vào **ContextManager/AgentChatHistory** và nhóm hợp nén, hai backend giọng nói (cloud + cục bộ) |
| **GitHub Copilot CLI** | Tích hợp sâu với hệ sinh thái GitHub, Agent nền ( /fleet ) | Người dùng nặng GitHub, nhà phát triển đã đăng ký Copilot | Chủ yếu là mã nguồn đóng, cửa đóng góp bên ngoài cực kỳ nhỏ, phát hành chức năng liên kết chặt chẽ với tiện ích mở rộng VS Code, nhưng trải nghiệm phía CLI rõ ràng bị tụt hậu |
| **Kimi Code CLI** | Khả năng hiển thị suy luận, phản hồi cộng đồng nhanh chóng, trải nghiệm nhà phát triển Trung Quốc | Nhà phát triển trong nước, người dùng gỡ lỗi coi trọng dấu vết suy nghĩ | Lặp lại nhanh chóng, CLI và tiện ích mở rộng VS Code song song, nhưng nợ kỹ thuật phía plugin tương đối nặng |
| **OpenCode** | Truy cập đa mô hình, triển khai doanh nghiệp (Azure/Proxy), cơ chế quyền và đồng bộ hóa | Nhóm chiến lược đa mô hình, nhu cầu tự lưu trữ của doanh nghiệp | Cực kỳ mô-đun hóa, nhấn mạnh đo từ xa AI SDK, xuất OTLP, hàng rào đồng bộ hóa workspace, áp lực lớn đối với lớp thích ứng mô hình |
| **Pi** | Trải nghiệm nhà phát triển mở rộng, tương thích sâu hệ sinh thái thiết bị đầu cuối, hiển thị tùy chỉnh | Kẻ cuồng TUI, nhà phát triển mở rộng tạo công cụ trực quan hóa phức tạp | Thiết kế ưu tiên mở rộng, API như `renderShell: "self"` dẫn đầu, hỗ trợ toàn diện nhất cho các thiết bị đầu cuối như Kitty/Ghostty/tmux/Zellij |
| **Qwen Code** | Agent Team song song, hệ thống Hook, tối ưu hóa hiệu suất khởi động | Nhà phát triển trong nước, người tiên phong khám phá quy trình làm việc đa Agent | Đầu tư mạnh vào kiến trúc **Agent Team/fork subagent**, nhưng tốc độ thương mại hóa và lòng tin của người dùng mâu thuẫn nghiêm trọng |

---

## 5. Mức độ phổ biến và sự trưởng thành của cộng đồng

### Phân lớp mức độ phổ biến cộng đồng

| Lớp | Công cụ | Cơ sở phán đoán |
|:---|:---|:---|
| **🔥 Hoạt động cực cao** | Claude Code, OpenAI Codex | Một issue có thể đạt hơn 500 bình luận, PR được đẩy mạnh một cách có hệ thống theo kiểu Stack, phát hành phiên bản thường xuyên, tiếng vang cộng đồng có ý nghĩa định hướng ngành |
| **🔥 Hoạt động cao** | Gemini CLI, Qwen Code, Pi | Gemini #22141 trở thành điểm đau mang tính hiện tượng; Qwen thảo luận quy mô lớn về vấn đề thương mại hóa; Pi mặc dù quy mô nhỏ nhưng lòng trung thành của nhà phát triển mở rộng cao, độ sâu thảo luận kỹ thuật đủ |
| **⚠️ Hoạt động trung bình, vấn đề cấu trúc rõ ràng** | Kimi Code CLI, OpenCode, GitHub Copilot CLI | Kimi phản hồi nhanh nhưng phía plugin bị tụt hậu; OpenCode tập trung vào vấn đề doanh nghiệp nhưng cộng đồng phân tán; Copilot CLI đóng góp bên ngoài gần như cạn kiệt, tỷ lệ PR hợp lệ chỉ 2/7 |

### Phán đoán giai đoạn lặp lại

| Giai đoạn | Công cụ | Đặc điểm |
|:---|:---|:---|
| **Giai đoạn lặp lại nhanh** | OpenAI Codex, Gemini CLI, Qwen Code | Kiến trúc cốt lõi vẫn đang tái cấu trúc mạnh mẽ (Rust hóa, ContextManager, Agent Team), ranh giới chức năng mở rộng nhanh chóng |
| **Giai đoạn tinh chỉnh trải nghiệm** | Claude Code, Kimi Code CLI, Pi | Khung cốt lõi tương đối ổn định, tập trung vào các chi tiết TUI, hệ sinh thái plugin, khả năng tương thích thiết bị đầu cuối và các trải nghiệm đuôi dài khác |
| **Giai đoạn khó khăn bảo trì** | GitHub Copilot CLI | Phiên bản liên tục được phát hành nhưng cộng đồng thiếu đổi mới, cửa đóng góp bên ngoài đóng cửa, phàn nàn của người dùng tập trung vào lớp chính sách (giới hạn tốc độ, ẩn cấp mô hình) chứ không phải lớp kỹ thuật |
| **Giai đoạn vật lộn tùy chỉnh doanh nghiệp** | OpenCode | Việc truy cập đa mô hình và cơ chế đồng bộ hóa mang lại nhiều nợ tương thích, các vấn đề về mạng Azure/doanh nghiệp thường xuyên xảy ra |

---

## 6. Tín hiệu xu hướng đáng chú ý

### Tín hiệu 1: Độ tin cậy của Agent từ "yếu tố cộng thêm" trở thành "đường sống chết"
> **Gemini #22141** (154 bình luận, kẹt trong 1 giờ cho nhiệm vụ nhỏ), **Claude #26224** (treo dài hạn), **Copilot #2336/#2696** (kích hoạt giới hạn tốc độ cực đoan của Agent nền) cùng chỉ ra: Khả năng chấp nhận hành vi tự phát của Agent của nhà phát triển gần như đóng băng. **"Có thể hủy, có thể quan sát, có thể ngắt mạch"** sẽ trở thành tiêu chuẩn của CLI Agent thế hệ tiếp theo.

### Tín hiệu 2: "Khả năng hiển thị suy luận" trở thành cơ sở hạ tầng cốt lõi cho lòng tin của nhà phát triển
> **Kimi** do ẩn giấu thinking gây ra phản ứng dữ dội, khẩn cấp đặt `show_thinking_stream` mặc định là `true`; Nhu cầu phục hồi Buddy của **Claude** (739👍) về bản chất cũng là khát vọng về "tương tác có thể giải thích được nhân cách hóa". Điều này tiết lộ một nhu cầu sâu sắc: Nhà phát triển không chỉ cần kết quả đầu ra của AI, mà còn cần **hiểu AI đã đạt đến kết quả đó như thế nào** để xác minh tính bảo mật và chính xác.

### Tín hiệu 3: MCP đang chuyển từ "giao thức mở rộng" thành "chiến trường ổn định thời gian chạy"
> **Codex** sử dụng 8 PR để tái cấu trúc hệ thống hóa thực thi từ xa MCP, **Claude** lỗi công cụ Cowork/Google Drive, **Qwen** giới hạn cứng số kết nối MCP (2), **Kimi** lỗi kết nối MCP làm treo Web UI. Tốc độ phổ biến của MCP vượt xa sự trưởng thành của thời gian chạy, **"Phát hiện, kết nối, cách ly, phục hồi lỗi của máy chủ MCP"** sẽ trở thành trọng tâm kỹ thuật trong nửa cuối năm của mỗi công cụ.

### Tín hiệu 4: Xung đột cấu trúc giữa mô hình thanh toán và tính tự chủ của Agent
> Yêu cầu của **Copilot** tính vào hạn ngạch người dùng, **Qwen** chấm dứt đột ngột hạn ngạch miễn phí, **OpenCode** tính phí sai Copilot premium, cả ba cùng phơi bày mâu thuẫn thiết kế sản phẩm: **Agent càng tự chủ, người dùng càng cảm thấy mất kiểm soát về chi phí**. Tiêu điểm cạnh tranh trong tương lai có thể chuyển từ "số lượng chức năng" sang "khả năng dự đoán chi phí" - Ai có thể cho phép người dùng ước tính và kiểm soát mức tiêu thụ token/yêu cầu của Agent một cách rõ ràng, người đó sẽ giành được thị trường doanh nghiệp.

### Tín hiệu 5: Khả năng cục bộ/ngoại tuyến từ nhu cầu biên trở thành chiến lược chính thống
> Hỗ trợ **Gemini** cho mô hình Gemma cục bộ (`gemini gemma`) và backend giọng nói cục bộ (Whisper/`whisper.cpp`), **Gemini CLI** kêu gọi nhúng RipGrep, **Pi** thích ứng sâu với Ollama, tất cả đều chỉ về cùng một hướng: Mạng cách ly doanh nghiệp, các tình huống nhạy cảm tuân thủ dữ liệu, người dùng nhạy cảm về chi phí đang thúc đẩy **"ưu tiên cục bộ" từ điểm bán hàng khác biệt trở thành tiêu chuẩn bắt buộc**.

---

*Báo cáo được tổng hợp dựa trên dữ liệu cộng đồng công khai của mỗi công cụ vào ngày 2026-04-16.*

---

## Báo cáo chi tiết từng công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Các điểm nóng cộng đồng Claude Code Skills

> Nguồn dữ liệu: [anthropics/skills](https://github.com/anthropics/skills)

# Báo cáo các điểm nóng cộng đồng Claude Code Skills
**Dữ liệu đến: 16-04-2026**

---

## 1. Bảng xếp hạng Skills phổ biến (theo mức độ quan tâm của cộng đồng)

| Xếp hạng | Skill | Mô tả chức năng | Trạng thái | Liên kết |
|:---|:---|:---|:---|:---|
| 1 | **document-typography** | Kiểm soát chất lượng định dạng tài liệu do AI tạo: ngăn ngừa các vấn đề định dạng phổ biến như cô đơn, ít dòng, sai số thứ tự | OPEN | [PR #514](https://github.com/anthropics/skills/pull/514) |
| 2 | **skill-quality-analyzer / skill-security-analyzer** | Hai meta-skill: đánh giá chất lượng năm chiều của cấu trúc, tài liệu, bảo mật của Skill; phát hiện các rủi ro như injection prompt, vượt quá quyền truy cập | OPEN | [PR #83](https://github.com/anthropics/skills/pull/83) |
| 3 | **frontend-design** | Skill thiết kế giao diện người dùng cải tiến, nâng cao độ rõ ràng của lệnh và khả năng thực thi trong một lượt | OPEN | [PR #210](https://github.com/anthropics/skills/pull/210) |
| 4 | **odt** | Tạo văn bản OpenDocument, điền mẫu và chuyển đổi ODT sang HTML | OPEN | [PR #486](https://github.com/anthropics/skills/pull/486) |
| 5 | **testing-patterns** | Hướng dẫn kiểm thử toàn diện: triết lý kiểm thử, kiểm thử đơn vị, kiểm thử thành phần React, E2E, kiểm thử hiệu suất và khả năng truy cập | OPEN | [PR #723](https://github.com/anthropics/skills/pull/723) |
| 6 | **shodh-memory** | Cung cấp bộ nhớ bền vững giữa các phiên cho AI Agent, tự động gọi lại ngữ cảnh liên quan | OPEN | [PR #154](https://github.com/anthropics/skills/pull/154) |
| 7 | **codebase-inventory-audit** | Kiểm tra và kiểm kê kho mã nguồn: xác định mã nguồn "mồ côi", tệp không sử dụng, khoảng trống tài liệu | OPEN | [PR #147](https://github.com/anthropics/skills/pull/147) |
| 8 | **sensory** | Tự động hóa gốc macOS: thay thế sử dụng máy tính dựa trên ảnh chụp màn hình bằng AppleScript | OPEN | [PR #806](https://github.com/anthropics/skills/pull/806) |

---

## 2. Xu hướng nhu cầu cộng đồng (từ Issues được chắt lọc)

| Hướng | Issue đại diện | Nhu cầu cốt lõi |
|:---|:---|:---|
| **Độ ổn định nền tảng Skill** | [#62](https://github.com/anthropics/skills/issues/62), [#406](https://github.com/anthropics/skills/issues/406), [#403](https://github.com/anthropics/skills/issues/403) | Skill bị mất, tải lên thất bại, xóa báo lỗi 500, người dùng doanh nghiệp không thể sử dụng bình thường |
| **Độ tin cậy của cơ chế kích hoạt Skill** | [#556](https://github.com/anthropics/skills/issues/556) | Chế độ `claude -p` Skill không được kích hoạt, tập lệnh đánh giá bị lỗi |
| **Chia sẻ cấp doanh nghiệp/tổ chức** | [#228](https://github.com/anthropics/skills/issues/228) | Cần thư viện Skill toàn tổ chức, thay thế truyền tệp thủ công |
| **Tương thích giao thức MCP** | [#16](https://github.com/anthropics/skills/issues/16) | Phơi bày Skills thành MCP, thực hiện lệnh gọi API tiêu chuẩn hóa |
| **Ranh giới an toàn và tin cậy** | [#492](https://github.com/anthropics/skills/issues/492) | Skill cộng đồng giả mạo không gian tên `anthropic/`, cần phòng chống lừa đảo |
| **Tương thích Bedrock** | [#29](https://github.com/anthropics/skills/issues/29) | Người dùng AWS Bedrock không thể sử dụng Skills |
| **Nâng cấp chuỗi công cụ skill-creator** | [#202](https://github.com/anthropics/skills/issues/202) | Công cụ tạo hiện tại quá tài liệu hóa, hiệu quả token thấp, cần tái cấu trúc theo phương pháp hay nhất |

---

## 3. Skills tiềm năng cao đang chờ hợp nhất

Các PR sau đang thảo luận sôi nổi, chức năng rõ ràng và lấp đầy khoảng trống sinh thái, có khả năng cao sẽ được triển khai trong thời gian tới:

| Skill | Điểm nổi bật | Liên kết |
|:---|:---|:---|
| **document-typography** | Trực tiếp giải quyết các điểm đau phổ biến của tài liệu do AI tạo, tác giả liên tục bảo trì | [PR #514](https://github.com/anthropics/skills/pull/514) |
| **testing-patterns** | Kiểm thử là nhu cầu tần suất cao, bao phủ toàn diện và cấu trúc hoàn chỉnh | [PR #723](https://github.com/anthropics/skills/pull/723) |
| **odt** | Hỗ trợ định dạng tài liệu nguồn mở, lấp đầy khoảng trống sinh thái LibreOffice | [PR #486](https://github.com/anthropics/skills/pull/486) |
| **sensory** | Lộ trình đổi mới tự động hóa gốc macOS, tránh được sự mong manh của giải pháp chụp ảnh màn hình | [PR #806](https://github.com/anthropics/skills/pull/806) |
| **record-knowledge** | Giải quyết điểm đau cốt lõi của việc mất trạng thái phiên Claude Code, tình huống chia sẻ kiến thức nhóm rõ ràng | [PR #521](https://github.com/anthropics/skills/pull/521) |

---

## 4. Hiểu biết sâu sắc về hệ sinh thái Skills

> **Nhu cầu tập trung nhất của cộng đồng: Nâng cấp Skills từ "công cụ thử nghiệm cá nhân" lên "cơ sở hạ tầng năng suất đáng tin cậy của doanh nghiệp" - Mâu thuẫn cốt lõi nằm ở tính ổn định nền tảng không đủ, thiếu chia sẻ cấp tổ chức và ranh giới bảo mật tin cậy không rõ ràng.**

---

# Báo cáo hàng ngày về động thái cộng đồng Claude Code | 16-04-2026

---

## 1. Tổng quan hôm nay

Claude Code hôm nay đã liên tục phát hành hai phiên bản **v2.1.109 / v2.1.110**, tập trung vào việc tinh chỉnh trải nghiệm TUI, thêm chế độ hiển thị toàn màn hình không nhấp nháy `/tui` và lệnh chuyển đổi độc lập `/focus`. Về cộng đồng, chủ đề **#45596 "Bring Back Buddy"** tiếp tục lan tỏa, với 177 bình luận và 739 lượt 👍 trở thành chủ đề nóng nhất hiện nay; đồng thời, hệ sinh thái plugin đón nhận một làn sóng sửa lỗi dày đặc, Rohan5commit đã gửi 13 PR trong một ngày để tập trung giải quyết vấn đề phân tích cú pháp YAML frontmatter.

---

## 2. Phát hành phiên bản

### v2.1.110
- **Thêm lệnh `/tui` và cài đặt `tui`**: Hỗ trợ `/tui fullscreen` để chuyển sang hiển thị toàn màn hình không nhấp nháy trong cùng một phiên
- **Điều chỉnh hành vi `Ctrl+O`**: Đã thay đổi để chỉ chuyển đổi giữa bản ghi bình thường/chi tiết; chế độ xem focus được kiểm soát riêng bởi lệnh mới `/focus`
- Mô tả thay đổi khác bị cắt cụt (`Added pus`)

### v2.1.109
- Tối ưu hóa bộ chỉ báo extended-thinking, thêm gợi ý tiến trình xoay vòng

> Nguồn: [Releases](https://github.com/anthropics/claude-code/releases)

---

## 3. Issues cộng đồng nóng (chọn lọc 10 mục)

| # | Tiêu đề | Trạng thái | Bình luận/👍 | Điểm mấu chốt |
|---|------|------|---------|----------|
| **#45596** | [Bring Back Buddy — A Consolidated Plea from the Community](https://github.com/anthropics/claude-code/issues/45596) | OPEN | 177 / 739 | **Tiếng nói lớn nhất của cộng đồng**. Sau khi `/buddy` bị xóa từ v2.1.97 mà không có ghi chú nhật ký thay đổi, người dùng kêu gọi phục hồi mạnh mẽ. Thẻ bao gồm `duplicate`, cho thấy nó đã được đề cập nhiều lần và Anthropic chưa chính thức phản hồi. |
| **#26224** | [Claude Code is hanging / freezing / stuck on heaps of prompts for 5-20 minutes or more](https://github.com/anthropics/claude-code/issues/26224) | OPEN | 76 / 100 | Vấn đề hiệu suất/ổn định tồn tại lâu dài, ảnh hưởng rộng rãi, người dùng đánh dấu `URGENT!!!`, cần tiếp tục chú ý. |
| **#30457** | [Google Drive connector shows connected but tools not exposed in Cowork](https://github.com/anthropics/claude-code/issues/30457) | OPEN | 55 / 39 | Lỗi điển hình của lớp tích hợp Cowork - xác thực thành công nhưng công cụ không được phơi bày, ảnh hưởng quy trình làm việc của người dùng doanh nghiệp. |
| **#16561** | [Parse compound Bash commands and match each component against permissions](https://github.com/anthropics/claude-code/issues/16561) | OPEN | 19 / 140 | **Yêu cầu chức năng được đánh giá cao**. Lệnh phức hợp như `&&`, `\|` được khớp toàn bộ dẫn đến cửa sổ bật lên quá mức, điểm cân bằng giữa bảo mật và trải nghiệm. |
| **#7229** | [Terminal window title settings](https://github.com/anthropics/claude-code/issues/7229) | OPEN | 34 / 47 | Yêu cầu cải thiện trải nghiệm TUI tồn tại gần 8 tháng, phù hợp với hướng cập nhật TUI của v2.1.110 hôm nay. |
| **#36286** | [PermissionDecision in PreToolUse is ignored in latest VS Code Extension](https://github.com/anthropics/claude-code/issues/36286) | OPEN | 12 / 0 | Lỗi hồi quy, khả năng cốt lõi của nhà phát triển Hooks bị lỗi trong tiện ích mở rộng VS Code, ảnh hưởng đến hệ sinh thái mở rộng. |
| **#43454** | [apply-seccomp fails on Linux - cannot write /proc/self/setgroups](https://github.com/anthropics/claude-code/issues/43454) | OPEN | 7 / 12 | Cơ chế bảo mật sandbox Linux bị lỗi trên một số bản phân phối, có bước tái hiện, vấn đề ổn định cơ sở hạ tầng. |
| **#48813** | [Claude Desktop cowork/CC-in-Desktop leaks ~19GB kernel non-paged pool memory](https://github.com/anthropics/claude-code/issues/48813) | OPEN | 2 / 0 | **Vấn đề nghiêm trọng cấp hệ thống**. Chức năng Cowork gây rò rỉ bộ nhớ không phân trang của nhân Windows, cần khởi động lại hệ thống để giải phóng. |
| **#46076** | [VS Code: Can't see what subagents are doing or if they're stuck](https://github.com/anthropics/claude-code/issues/46076) | OPEN | 4 / 0 | Thiếu khả năng quan sát chế độ Agent Team, tương ứng với plugin subagent-cleanup trong #47830. |
| **#48840** | [Add --no-hooks flag to claude -p](https://github.com/anthropics/claude-code/issues/48840) | OPEN | 2 / 0 | Yêu cầu quan trọng cho các cảnh CI/tự động hóa: `--bare` sẽ mất xác thực OAuth, cần một giải pháp chỉ vô hiệu hóa hooks. |

---

## 4. Tiến độ PR quan trọng (chọn lọc 10 mục)

| # | Tiêu đề | Tác giả | Nội dung cốt lõi |
|---|------|------|----------|
| **#39148** | [feat: add preserve-session plugin for path-independent session history](https://github.com/anthropics/claude-code/pull/39148) | wonbywondev | Gán UUID độc lập với đường dẫn cho dự án, lịch sử phiên không bị mất khi đổi tên/di chuyển/sao chép thư mục. |
| **#48714** | [Add proposal scraper Stop hook example](https://github.com/anthropics/claude-code/pull/48714) | WGlynn | Thêm ví dụ Hooks: cố định đề xuất của trợ lý vào `PROPOSALS.md`, ngăn mất do phiên bị lỗi hoặc nén. |
| **#47830** | [feat: add subagent-cleanup plugin to terminate orphaned processes](https://github.com/anthropics/claude-code/pull/47830) | hmennen90 | Làm sạch tiến trình subagent "mồ côi" khi khởi động phiên, ngăn chặn rò rỉ CPU/bộ nhớ; bảo vệ chuỗi tiến trình phiên hiện tại. |
| **#41447** | [feat: open source claude code ✨](https://github.com/anthropics/claude-code/pull/41447) | gameroman | PR mang tính biểu tượng cho yêu cầu mã nguồn mở lâu dài của cộng đồng, liên kết nhiều issues lịch sử, tiếp tục thu hút sự chú ý. |
| **#48377** | [fix: semgrep-run-shell-injection](https://github.com/anthropics/claude-code/pull/48377) | NagendraOpsmx | Sửa lỗi rủi ro shell injection trong bước `run` của quy trình làm việc GitHub Actions (vấn đề nội suy `${{...}}`). |
| **#48353** | [fix(plugin-dev): align agent-development skill metadata](https://github.com/anthropics/claude-code/pull/48353) | Rohan5commit | Thống nhất tên skill và quy ước đặt tên thư mục/agnix, sửa lỗi thẻ `<example>` chưa được thoát. |
| **#48351** | [fix(hookify): align writing-rules skill name with directory](https://github.com/anthropics/claude-code/pull/48351) | Rohan5commit | Đổi tên Hookify skill thành `writing-rules`, khớp với cấu trúc thư mục. |
| **#48350** | [fix(pr-review-toolkit): make frontmatter valid YAML](https://github.com/anthropics/claude-code/pull/48350) | Rohan5commit | Tương tự trên, sửa frontmatter YAML của `pr-test-analyzer`. |
| **#48349** | [fix(pr-review-toolkit): make silent-failure-hunter frontmatter valid YAML](https://github.com/anthropics/claude-code/pull/48349) | Rohan5commit | Tương tự trên, sửa frontmatter YAML của `silent-failure-hunter` và trình giữ chỗ giống XML. |
| **#48348** | [fix(pr-review-toolkit): make pr-test-analyzer frontmatter valid YAML](https://github.com/anthropics/claude-code/pull/48348) | Rohan5commit | Tương tự trên, sửa frontmatter YAML của `pr-test-analyzer`. |

> **Lưu ý**: Rohan5commit đã gửi tổng cộng 13 PR tương tự hôm nay, tập trung vào việc sửa lỗi phân tích siêu dữ liệu plugin, cho thấy sự thay đổi gần đây trong yêu cầu nghiêm ngặt của YAML đối với agnix (framework proxy nội bộ của Anthropic).

---

## 5. Xu hướng nhu cầu chức năng

Từ Issues hôm nay có thể chắt lọc ra **5 hướng** được cộng đồng quan tâm nhất:

1. **Tối ưu hóa trải nghiệm TUI / thiết bị đầu cuối**  
   - Phản hồi trực tiếp của phiên bản hôm nay: `/tui fullscreen`, bộ chỉ báo tiến trình xoay vòng, cài đặt tiêu đề cửa sổ (#7229), thay đổi phông chữ (#48841), trạng thái hai ngôn ngữ (#48838)
2. **Khả năng quan sát và quản trị Agent / Subagent**  
   - Không thấy trạng thái subagent trong VS Code (#46076), làm sạch tiến trình "mồ côi" (#47830), lỗi quyết định quyền (#36286)
3. **Độ ổn định tích hợp Cowork / MCP**  
   - Công cụ Google Drive không được phơi bày (#30457), công cụ tự động hóa trình duyệt Windows bị mất (#38783), MCP tùy chỉnh bị vô hiệu hóa trong Cowork (#42453), rò rỉ bộ nhớ (#48813)
4. **Tinh chỉnh quyền và bảo mật**  
   - Khớp thành phần lệnh Bash phức hợp với quyền (#16561, 140 👍), chặn MCP cục bộ bằng lệnh gọi lại PreToolUse (#35436), quyết định quyền không được xem xét lại trong thư mục Dispatch (#36313)
5. **Phục hồi chức năng cảm xúc / cá nhân hóa**  
   - **Phục hồi chức năng Buddy** (#45596) trở thành chủ đề mang tính hiện tượng, phản ánh sự coi trọng của nhà phát triển đối với giá trị đồng hành "nhân cách hóa" của công cụ

---

## 6. Điểm thu hút của nhà phát triển

### Điểm đau tần suất cao
- **Ổn định và hiệu suất**：treo dài hạn (#26224), lỗi Desktop (#48281, #48553), lỗi sandbox Linux (#43454)
- **Chênh lệch trải nghiệm Windows**：Nhiều lỗi tập trung vào môi trường Windows Desktop / VS Code / WSL, bao gồm rò rỉ bộ nhớ, thiếu công cụ, cắt TUI (#48826)
- **Vấn đề hồi quy trải nghiệm của Hooks / hệ sinh thái mở rộng**：Quyết định quyền PreToolUse bị bỏ qua trong VS Code (#36286), ảnh hưởng trực tiếp đến chính sách bảo mật tùy chỉnh của doanh nghiệp

### Nhu cầu mới nổi
- **Thân thiện với CI/tự động hóa**：`claude -p` cần `--no-hooks` thay vì `--bare` (#48840), cho thấy ngày càng nhiều nhóm nhúng Claude Code vào quy trình làm việc
- **Tính di động của phiên**：`--resume` lỗi với worktree git chéo (#48835), lịch sử bị mất sau khi di chuyển dự án (#39148), nhà phát triển mong đợi phiên được tách rời khỏi đường dẫn hệ thống tệp
- **Đa người thuê OAuth**：Plugin MCP (ví dụ: Figma) cần cô lập phiên OAuth theo dự án (#48834), phù hợp với cảnh phát triển đa khách hàng/đa tổ chức

---

*Báo cáo hàng ngày được tổng hợp dựa trên dữ liệu công khai của github.com/anthropics/claude-code trong 24 giờ qua.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Báo cáo hàng ngày về động thái cộng đồng OpenAI Codex | 16-04-2026

---

## 1. Tổng quan hôm nay

OpenAI hôm nay đã phát hành **phiên bản ổn định rust-v0.121.0** và nhiều phiên bản alpha, điểm nhấn cốt lõi là **hỗ trợ thị trường plugin (Marketplace)** và **cải tiến lịch sử gợi ý TUI**. Đồng thời, các cuộc thảo luận cộng đồng về **tiêu thụ token quá nhanh, lỗi nén ngữ cảnh, chiếm dụng CPU/GPU cao trên macOS** đang nóng lên, mức độ hoạt động của Issues trong 24 giờ qua cực kỳ cao.

---

## 2. Phát hành phiên bản

### rust-v0.121.0
- **Cài đặt thị trường plugin**: Thêm lệnh `codex marketplace add` và hỗ trợ app-server, có thể cài đặt thị trường plugin từ GitHub, URL git, thư mục cục bộ hoặc URL `marketplace.json` trực tiếp ([#17087](https://github.com/openai/codex/issues/17087), [#17717](https://github.com/openai/codex/issues/17717), [#17756](https://github.com/openai/codex/issues/17756))
- **Tối ưu hóa trải nghiệm TUI**: Lịch sử gợi ý hỗ trợ tìm kiếm ngược `Ctrl+R` và ghi nhớ cục bộ

### Các phiên bản khác
- `rust-v0.122.0-alpha.1`, `rust-v0.121.0-alpha.11~14` - Lặp lại bản phát hành trước thông thường

---

## 3. Issues cộng đồng nóng

| # | Tiêu đề | Trạng thái | Bình luận | Điểm mấu chốt |
|---|------|------|------|----------|
| [#14593](https://github.com/openai/codex/issues/14593) | Burning tokens very fast | 🔴 OPEN | 542 | **Chủ đề nóng nhất cộng đồng**. Người dùng Business phản hồi việc tiêu thụ token trong tiện ích mở rộng VS Code cực kỳ nhanh, 222 👍, nhiều người dùng theo dõi yêu cầu phí minh bạch và cơ chế hạn chế. |
| [#11325](https://github.com/openai/codex/issues/11325) | Manual `/compact` command in Codex app | 🔴 OPEN | 51 | Thiếu lệnh nén ngữ cảnh thủ công trong ứng dụng giống như CLI, 141 👍, là khoảng trống chức năng lâu dài. |
| [#8648](https://github.com/openai/codex/issues/8648) | Codex replies to earlier messages instead of latest one | 🔴 OPEN | 41 | **Lỗi sai ngữ cảnh**. Trợ lý thỉnh thoảng trả lời tin nhắn cũ trong cuộc trò chuyện nhiều vòng, ảnh hưởng nghiêm trọng đến độ tin cậy của tương tác, người dùng Pro phản hồi. |
| [#17809](https://github.com/openai/codex/issues/17809) | Context compaction fails with unknown parameter 'prompt_cache_retention' | 🟢 CLOSED | 38 | Nén ngữ cảnh tự động của ứng dụng phiên bản mới nhất gặp lỗi, 56 👍, đã đóng nhanh, cho thấy việc sửa lỗi đã được triển khai. |
| [#16231](https://github.com/openai/codex/issues/16231) | High CPU usage on macOS after updating Codex in VS Code extension | 🔴 OPEN | 36 | Sau khi cập nhật tiện ích mở rộng trên M5 Pro + macOS Tahoe, CPU và nhiệt độ tăng đột biến, 50 👍, vấn đề hồi quy hiệu suất. |
| [#17615](https://github.com/openai/codex/issues/17615) | Keep throwing "I'm sorry, but I cannot assist with that request" | 🟢 CLOSED | 27 | Người dùng Azure API gặp phải sự chặn bảo mật quá mức, 18 👍, đã đóng. |
| [#14346](https://github.com/openai/codex/issues/14346) | Context Compaction Hanging | 🔴 OPEN | 20 | Nén ngữ cảnh bị treo trong tiện ích mở rộng VS Code, cửa sổ đầy chỉ sau một phiên trên mô hình Extra High, 19 👍. |
| [#17624](https://github.com/openai/codex/issues/17624) | Review tab gets stuck on "Loading diff" on Windows | 🔴 OPEN | 15 | Truyền tham số đường dẫn `git diff` bị lỗi trong phiên bản Windows ( /F:/... ), khiến chức năng xem lại mã không khả dụng. |
| [#12241](https://github.com/openai/codex/issues/12241) | Failed to apply patch constantly | 🔴 OPEN | 14 | Tỷ lệ lỗi áp dụng patch trong CLI cực kỳ cao, người dùng Linux phản hồi, ảnh hưởng đến khả năng chỉnh sửa cốt lõi. |
| [#16857](https://github.com/openai/codex/issues/16857) | High GPU usage while the app is "thinking" due to tiny useless animation | 🔴 OPEN | 11 | Hoạt ảnh nhỏ khi ứng dụng "suy nghĩ" trên macOS gây chiếm dụng GPU quá cao, 15 👍, nhu cầu tối ưu hóa hiệu suất UI. |

---

## 4. Tiến độ PR quan trọng

| # | Tiêu đề | Tác giả | Nội dung chức năng/sửa lỗi |
|---|------|------|---------------|
| [#18027](https://github.com/openai/codex/pull/18027) | [8/8] Fail exec client operations after disconnect | aibrahim-oai | Từ chối hoạt động mới sau khi ngắt kết nối bộ thực thi, chuyển RPC bị treo thành lỗi rõ ràng, nâng cao độ tin cậy thực thi từ xa. |
| [#17984](https://github.com/openai/codex/pull/17984)~[#18027](https://github.com/openai/codex/pull/18027) | 8-PR Stack: MCP stdio remote executor support | aibrahim-oai | **Tái cấu trúc hệ thống kiến trúc MCP stdio**: Từ trừu tượng hóa cấu hình, hỗ trợ stdin đường ống, sự kiện tiến trình đẩy, đến truyền bộ thực thi từ xa, thực hiện đầy đủ việc triển khai linh hoạt của máy chủ MCP trong môi trường cục bộ/từ xa. |
| [#17982](https://github.com/openai/codex/pull/17982) | [rollout-trace] Add rollout trace capture and reducer | cassirer-openai | Thêm dấu vết rollout phiên có thể chọn, ghi lại bằng chứng thời gian chạy dưới dạng gói cục bộ và giảm thành biểu đồ trạng thái ngữ nghĩa, để điều tra sự cố phức tạp. |
| [#17713](https://github.com/openai/codex/pull/17713) | feat: add opt-in provider runtime abstraction | celia-oai | Giới thiệu crate `codex-model-provider`, tách hành vi của nhà cung cấp mô hình khỏi mô-đun cốt lõi, mở đường cho việc mở rộng đa nhà cung cấp trong tương lai. |
| [#17980](https://github.com/openai/codex/pull/17980) | [codex] Use AgentAssertion downstream behind use_agent_identity | adrian-openai | Triển khai chuỗi hạ nguồn AgentAssertion sau một công tắc chức năng, hỗ trợ nhận dạng danh tính proxy. |
| [#17998](https://github.com/openai/codex/pull/17998) | bazel: add explicit rust test shard labels | bolinfest | Thêm nhãn phân đoạn rõ ràng cho các mục tiêu kiểm thử Rust của Bazel, tối ưu hóa thời gian và phân tích lỗi trong BuildBuddy. |
| [#17956](https://github.com/openai/codex/pull/17956) | [codex] Match usage-limit TUI copy and owner nudge type | richardopenai | Sau khi thành viên nhóm dùng hết hạn ngạch có thể thông báo cho quản trị viên, sửa lỗi điểm cuối auth trước đó gây ra sev. |
| [#17791](https://github.com/openai/codex/pull/17791) | Stabilize Windows and integration tests | ddr-oai | Sửa lỗi thất bại ngẫu nhiên trong các bài kiểm tra tích hợp và Windows, nâng cao độ ổn định CI. |
| [#18026](https://github.com/openai/codex/pull/18026) | Add OTEL metrics for hook runs | abhinav-oai | Bổ sung chỉ số OTEL (số lượng và độ trễ) cho việc chạy hook, lấp đầy khoảng trống khả năng quan sát. |
| [#17692](https://github.com/openai/codex/pull/17692)~[#17696](https://github.com/openai/codex/pull/17696) | 5-PR Stack: guardian review analytics plumbing | rhan-oai | Đặt đường ống phân tích siêu dữ liệu TTFT, cắt giảm, luồng và token cho chức năng guardian review. |

---

## 5. Xu hướng nhu cầu chức năng

Từ Issues và PR hôm nay có thể chắt lọc ra **5 hướng** được cộng đồng quan tâm nhất:

1. **Kiểm soát chi phí và minh bạch** — Tiêu thụ token quá nhanh (#14593), hiển thị hạn ngạch bất thường (#17764) là những điểm đau tần suất cao, người dùng yêu cầu mạnh mẽ phí dự đoán được.
2. **Quản lý ngữ cảnh** — Nén ngữ cảnh thủ công (`/compact`) (#11325), tải động `AGENTS.md` lồng nhau (#12115), nén ngữ cảnh bị treo/lỗi (#14346, #17809) tiếp tục chiếm bảng xếp hạng nóng.
3. **Trải nghiệm IDE/trình soạn thảo** — Hồi quy hiệu suất tiện ích mở rộng VS Code (#16231), nhảy cuộn (#17748), liên kết tệp bị lỗi (#17649) ảnh hưởng nghiêm trọng đến luồng phát triển hàng ngày.
4. **Độ ổn định đa nền tảng** — Xử lý đường dẫn Windows (#17624), cửa sổ bật lên sandbox Ubuntu thường xuyên (#17525), chiếm dụng CPU/GPU quá cao trên macOS (#10530, #16857, #16231) cho thấy việc thích ứng nền tảng vẫn là một thử thách lớn.
5. **Tính linh hoạt của mô hình** — Cấu hình mô hình riêng biệt cho `/plan` và `/review` (#13206, #14969), hỗ trợ mô hình cục bộ (#17899) nhu cầu đang tăng lên.

---

## 6. Điểm thu hút của nhà phát triển

| Điểm đau/Nhu cầu | Biểu hiện đại diện | Giải thích |
|-----------|-----------|------|
| **Lo lắng về phí** | #14593, #17764 | Người dùng doanh nghiệp/Pro cực kỳ nhạy cảm với tốc độ tiêu thụ Token và tính nhất quán của hạn ngạch |
| **Độ tin cậy của ngữ cảnh** | #8648, #14346, #17809, #14513 | Sự hỗn loạn trong cuộc trò chuyện, lỗi nén, trả lời tin nhắn cũ phá hủy lòng tin trực tiếp |
| **Hồi quy hiệu suất (macOS)** | #16231, #10530, #16857, #16185 | Các vấn đề về CPU/GPU/nhiệt độ xuất hiện lặp đi lặp lại trên Apple Silicon |
| **Lỗi/thất bại Patch/chỉnh sửa** | #12241, #17899 | Khả năng sửa đổi mã cốt lõi không ổn định, đặc biệt là trong các cảnh CLI và mô hình cục bộ |
| **Sự phân chia trải nghiệm sandbox** | #17525, #17644, #18005 | Mỗi lần chỉnh sửa trên Linux phải bỏ qua sandbox, chế độ "không sandbox" trên Windows, truy cập GPU bị chặn |
| **Công dân hạng hai Windows** | #17624, #17649, #18005, #16994 | Xử lý đường dẫn, liên kết, triển khai tự động hóa và các chức năng khác thường gặp sự cố trên Windows |

---

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Báo cáo hàng ngày về động thái cộng đồng Gemini CLI | 16-04-2026

---

## 1. Tổng quan hôm nay

Hôm nay Gemini CLI đã phát hành **bản vá v0.38.1** và **bản dựng nightly v0.40.0**, đồng thời cộng đồng tiếp tục phàn nàn về **kẹt/độ trễ cực cao của vòng lặp Agent** (Issue #22141 đã có 154 bình luận). Phía phát triển đang tích cực đẩy mạnh các chức năng quan trọng như **chế độ giọng nói thời gian thực**, **hỗ trợ mô hình Gemma cục bộ** và **tái cấu trúc ContextManager**.

---

## 2. Phát hành phiên bản

### v0.38.1 (Bản vá ổn định)
- **Sửa lỗi**: Lược bỏ commit cherry-pick `050c303` vào nhánh `release/v0.38.0-pr-25317`, giải quyết một vấn đề cụ thể trong v0.38.0.
- [→ Xem Release](https://github.com/google-gemini/gemini-cli/compare/v0.38.0...v0.38.1)

### v0.40.0-nightly.20260415.g06e7621b2 (Bản dựng hàng ngày)
- **docs(core)**: Cập nhật tài liệu Generalist Agent (#25325)
- **chore(mcp)**: Kiểm tra mã lỗi MCP từ khớp chuỗi sang phán đoán mạnh mẽ dựa trên mã lỗi (#25381)
- **feat(plan)**: Cập nhật chức năng lập kế hoạch (chi tiết sẽ có trong ghi chú phát hành đầy đủ)

---

## 3. Issues cộng đồng nóng

| # | Tiêu đề | Trạng thái | Bình luận | Điểm mấu chốt |
|---|------|------|------|----------|
| **#22141** | [Gemini CLI becomes extremely slow (1+ HOURS) / stuck during small code-edit tasks](https://github.com/google-gemini/gemini-cli/issues/22141) | 🔥 OPEN | **154** | **Điểm đau cốt lõi hiện tại của cộng đồng**: Ngay cả với các chỉnh sửa nhỏ cho 1-3 tệp, Agent cũng có thể rơi vào vòng lặp trong vài phút đến vài giờ. 122 👍, người dùng kêu gọi cung cấp công cụ chẩn đoán hoặc giải pháp tạm thời. |
| **#25323** | [Failing to download RipGrep should not permanently slow down Gemini CLI startup](https://github.com/google-gemini/gemini-cli/issues/25323) | OPEN | 6 | Người dùng doanh nghiệp/mạng bị cô lập thường gặp trở ngại: Tải RipGrep thất bại khiến khởi động bị chặn hơn 2 phút, đề xuất nhúng RipGrep hoặc thoát nhanh. |
| **#22745** | [Assess the impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745) | 🔒 OPEN | 5 | **EPIC chiến lược**: Khám phá xem công cụ nhận biết AST có thể giảm lỗi đọc ranh giới, giảm nhiễu Token hay không, đây là giải pháp lâu dài cho độ chính xác của Agent. |
| **#24916** | [Gemini cli keeps asking for permissions on the same file](https://github.com/google-gemini/gemini-cli/issues/24916) | OPEN | 3 | Lỗi ghi nhớ quyền UX, "Cho phép cho tất cả các phiên trong tương lai" đôi khi không có hiệu lực, làm gián đoạn luồng phát triển. |
| **#25166** | [Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166) | OPEN | 2 | Thực thi lệnh đơn giản bị treo với "Đang chờ đầu vào" sau khi lệnh hoàn tất, ảnh hưởng đến độ tin cậy của tập lệnh tự động. |
| **#25503** | [Issue with /security:analyze](https://github.com/google-gemini/gemini-cli/issues/25503) | OPEN | 1 | Báo cáo mới hôm nay: Phân tích bảo mật tệp HTML sau một thời gian dài suy nghĩ rồi báo lỗi, có thể phơi bày các vấn đề về biên của Agent phân tích bảo mật. |
| **#25216** | [Gemini failed to open in a temporary path A:\\](https://github.com/google-gemini/gemini-cli/issues/25216) | OPEN | 1 | Đường dẫn tạm thời Windows (ví dụ: `A:\a`) gây ra lỗi `EISDIR`, xử lý đường dẫn đa nền tảng vẫn cần được tinh chỉnh. |
| **#23582** | [Subagents Awareness of Active Approval Modes](https://github.com/google-gemini/gemini-cli/issues/23582) | 🔒 OPEN | 1 | Sub Agent không biết chế độ phê duyệt hiện tại là Plan Mode hay Auto-Edit Mode, dẫn đến việc cơ chế chính sách chặn thường xuyên, thiếu sự phối hợp ở cấp kiến trúc. |
| **#22819** | [Implement memory routing: global vs. project](https://github.com/google-gemini/gemini-cli/issues/22819) | 🔒 OPEN | 1 | Hệ thống bộ nhớ cần phân biệt sở thích toàn cục (`~/.gemini/`) và kiến thức dự án cụ thể (`.gemini/`), là cơ sở hạ tầng cốt lõi cho trải nghiệm cá nhân hóa. |
| **#22323** | [Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption](https://github.com/google-gemini/gemini-cli/issues/22323) | 🔒 OPEN | 1 | **Ưu tiên P1**: Sub Agent đạt đến số lượt tối đa vẫn trả về "success", dẫn đến Agent chính tiếp tục thực thi dựa trên giả định sai, có tính ẩn giấu cực cao. |

---

## 4. Tiến độ PR quan trọng

| # | Tiêu đề | Tác giả | Nội dung cốt lõi |
|---|------|------|----------|
| **#24174** | [feat(voice): implement real-time voice mode with cloud and local backends](https://github.com/google-gemini/gemini-cli/pull/24174) | Abhijit-2592 | **Chức năng quan trọng**: Chế độ giọng nói thời gian thực, hỗ trợ hai backend Gemini Live API (cloud) và Whisper/`whisper.cpp` (cục bộ), hình thức tương tác sẽ có nâng cấp lớn. |
| **#25409** | [feat(core): wire up the new ContextManager and AgentChatHistory](https://github.com/google-gemini/gemini-cli/pull/25409) | joshualitt | Kết nối `ContextManager` và `AgentChatHistory` mới vào cốt lõi, mở đường cho việc nén ngữ cảnh thông minh hơn và quản lý lịch sử. |
| **#25498** | [feat(cli): add `gemini gemma` local model setup and logs commands](https://github.com/google-gemini/gemini-cli/pull/25498) | Samee24 | Bước quan trọng trong hệ sinh thái mô hình cục bộ: Thêm lệnh `gemini gemma` để thiết lập mô hình cục bộ bằng một cú nhấp chuột và hỗ trợ xem nhật ký máy chủ LiteRT. |
| **#25338** | [fix(core): allow explicit write permissions to override governance file protections in sandboxes](https://github.com/google-gemini/gemini-cli/pull/25338) | galz10 | Sửa lỗi bảo vệ tệp quản trị (ví dụ: `.git`) trong sandbox quá nghiêm ngặt, có lợi cho cả Seatbelt macOS và bwrap Linux. |
| **#25421** | [feat(core): integrate skill-creator into skill extraction agent](https://github.com/google-gemini/gemini-cli/pull/25421) | SandyTao520 | Agent trích xuất kỹ năng thống nhất sử dụng quy cách `skill-creator` tích hợp để tạo `SKILL.md`, loại bỏ định dạng mã hóa cứng, giảm chi phí bảo trì. |
| **#25343** | [feat(telemetry): add flag for enabling traces specifically](https://github.com/google-gemini/gemini-cli/pull/25343) | spencer426 | Giới thiệu công tắc độc lập `telemetry.traces`, tách biệt việc theo dõi tải nặng với đo từ xa cơ bản, cân bằng giữa quyền riêng tư của doanh nghiệp và khả năng quan sát. |
| **#24736** | [feat(core): union-find context compaction for AgentHistoryProvider](https://github.com/google-gemini/gemini-cli/pull/24736) | kimjune01 | Sử dụng nhóm hợp để thay thế cắt ngữ cảnh hai giá trị, các tin nhắn tương tự về ngữ nghĩa có thể được "nâng cấp" vào bộ đệm lạnh, chiến lược nén tinh tế hơn. |
| **#25489** | [refactor(core): abstract OsSandboxManager and centralize common logic](https://github.com/google-gemini/gemini-cli/pull/25489) | ehedlund | Trừu tượng hóa lớp cơ sở `AbstractOsSandboxManager`, hợp lý hóa logic sandbox Linux/macOS/Windows, thuận tiện cho việc mở rộng các nền tảng mới trong tương lai. |
| **#25384** | [feat(core): implement JIT plan directory provisioning with path safety](https://github.com/google-gemini/gemini-cli/pull/25384) | mahimashanware | Phân tích và cung cấp thư mục kế hoạch JIT mở rộng động theo yêu cầu, kết hợp kiểm tra an toàn đường dẫn, là việc triển khai chính của Giai đoạn 3 kiến trúc mở rộng. |
| **#25396** | [feat(core): isolate sub-agent activeExtensionName via AsyncLocalStorage](https://github.com/google-gemini/gemini-cli/pull/25396) | mahimashanware | Cô lập `activeExtensionName` của sub Agent thông qua `AsyncLocalStorage`, giải quyết vấn đề nhiễu ngữ cảnh khi nhiều tiện ích mở rộng đồng thời. |

---

## 5. Xu hướng nhu cầu chức năng

Dựa trên 50 Issues hoạt động hôm nay, các điểm tập trung của cộng đồng và nhóm phát triển chính thức thể hiện các xu hướng sau:

| Hướng | Các vấn đề đại diện | Phân tích xu hướng |
|------|------|----------|
| **Hiệu suất và hiệu quả vòng lặp Agent** | #22141, #22745, #23556, #24736 | Độ trễ lớn cho nhiệm vụ nhỏ là kẻ thù số một, nhận biết AST, nén ngữ cảnh, nén theo đường dẫn trở thành các hướng kỹ thuật dự phòng của chính thức. |
| **Khả năng cục bộ/ngoại tuyến** | #24174 (backend giọng nói cục bộ), #25498 (Gemma), #25323 (nhúng RipGrep) | Từ giọng nói đến mô hình và sau đó là chuỗi công cụ, nhu cầu "ưu tiên cục bộ" rất mạnh mẽ, các tình huống mạng cách ly của doanh nghiệp thúc đẩy quá trình ngoại tuyến hóa. |
| **Quyền và quản trị sandbox** | #24916, #25338, #25489, #23582 | Ghi nhớ quyền, chính sách sandbox, nhận biết chế độ sub Agent, sự cân bằng giữa bảo mật và sự trôi chảy tiếp tục được tinh chỉnh. |
| **Khả năng quan sát và đo từ xa** | #25343, #25344, #25480 | Việc triển khai cấp doanh nghiệp yêu cầu kiểm soát theo dõi chi tiết hơn và các chính sách cắt giảm đo từ xa an toàn hơn. |
| **Độ ổn định đa nền tảng** | #25216, #24202, #24546, #24935 | Xử lý đường dẫn Windows, hiển thị thiết bị đầu cuối SSH, làm mới màn hình sau khi thoát trình soạn thảo bên ngoài, cho thấy UX đa nền tảng vẫn là kỹ thuật đuôi dài. |

---

## 6. Điểm thu hút của nhà phát triển

1. **Kẹt/treo Agent là điểm đau lớn nhất**  
   154 bình luận và 122 👍 cho Issue #22141 cho thấy đây không còn là trường hợp cá biệt. Nhà phát triển khẩn cấp cần: lệnh chẩn đoán chính thức, cơ chế ngắt mạch quá giờ, hoặc cửa thoát để tạm thời tắt vòng lặp Agent.

2. **Tốc độ khởi động và phụ thuộc mạng**  
   Lỗi tải RipGrep chặn khởi động (#25323) phản ánh sự mong manh của các phụ thuộc bên ngoài chuỗi công cụ, "sẵn sàng sử dụng" là lời kêu gọi cao.

3. **Tính nhất quán bộ nhớ của hệ thống quyền**  
   Yêu cầu quyền liên tục cho cùng một tệp (#24916) phá hủy nghiêm trọng luồng làm việc, nhà phát triển mong đợi trải nghiệm xác định "cho phép một lần, có hiệu lực toàn bộ".

4. **Tính minh bạch và độ tin cậy của Sub Agent**  
   MAX_TURNS bị giả dạng là thành công (#22323), Sub Agent không biết chế độ phê duyệt của cha mẹ (#23582), v.v., phơi bày những thách thức sâu sắc về khả năng giải thích và lan truyền lỗi trong kiến trúc đa Agent.

5. **Sự mong đợi về triển khai mô hình và giọng nói cục bộ**  
   `gemini gemma` (#25498) và giọng nói thời gian thực (#24174) đại diện cho tham vọng tiến hóa của CLI từ "trợ lý mã văn bản thuần túy" thành "trạm làm việc AI cục bộ đa phương thức", cộng đồng rất quan tâm đến tính dễ sử dụng của nó.

---

*Báo cáo được tổng hợp dựa trên dữ liệu công khai của github.com/google-gemini/gemini-cli.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# Báo cáo hàng ngày về động thái cộng đồng GitHub Copilot CLI | 16-04-2026

---

## 1. Tổng quan hôm nay

GitHub Copilot CLI hôm nay đã phát hành **v1.0.28**, tập trung vào việc sửa lỗi hiển thị đường dẫn gợi ý quyền trong các submodule git và gửi thông báo Agent nền dư thừa. Về cộng đồng, **Giới hạn tốc độ (Rate Limit)** đã trở thành chủ đề thảo luận gay gắt nhất, trong 24 giờ qua đã có nhiều Issue liên quan mới được tạo; đồng thời, **cấp độ suy luận xhigh của GPT-5.4 bị ẩn trong UI** cũng gây ra sự bất mãn của người dùng.

---

## 2. Phát hành phiên bản

### v1.0.28 (16-04-2026)
- **Sửa lỗi hiển thị đường dẫn submodule git**: Gợi ý quyền hiện hiển thị chính xác đường dẫn kho lưu trữ trong submodule, thay vì kho lưu trữ cha.
- **Tối ưu hóa thông báo Agent nền**: Khi `read_agent` đang chờ kết quả, sẽ không gửi lại thông báo hoàn thành.
- **Cải thiện gợi ý di chuyển MCP**: Liên kết đến trang tài liệu chứa hướng dẫn cụ thể cho từng nền tảng.

### v1.0.27 (15-04-2026)
- **Tối ưu hóa gợi ý trạng thái đăng ký**: Hiển thị giải thích rõ ràng khi tạm dừng dùng thử Copilot Pro, thay thế cho thông báo lỗi chính sách chung trước đó.
- **Cải thiện thanh trạng thái**: Hiển thị gợi ý `@files` và `#issues` khi nhập, hiển thị gợi ý `/help` khi mở trình chọn lệnh dấu gạch chéo.
- **Sửa lỗi bảng nhớ tạm WSL**: Khi sao chép sẽ không rò rỉ ký tự BOM không nhìn thấy được.

> Liên kết: https://github.com/github/copilot-cli/releases

---

## 3. Issues cộng đồng nóng

| # | Issue | Trạng thái | Điểm mấu chốt |
|---|-------|------|---------|
| [#618](https://github.com/github/copilot-cli/issues/618) | Hỗ trợ tải lệnh dấu gạch chéo tùy chỉnh từ thư mục `.github/prompts` | **Đã đóng** | 👍95 · 30 bình luận. Đây là một trong những chức năng được cộng đồng yêu cầu cao nhất, người dùng muốn CLI có thể hỗ trợ lệnh Prompt tùy chỉnh như tiện ích mở rộng VS Code. Đóng cửa có thể có nghĩa là đã được thực hiện hoặc hợp nhất. |
| [#2082](https://github.com/github/copilot-cli/issues/2082) | `ctrl+shift+c` không thể sao chép vào bảng nhớ tạm trên Linux | Mở | 16 bình luận. Phím tắt cơ bản bị lỗi trên Ubuntu 24.04, ảnh hưởng nghiêm trọng đến luồng công việc hàng ngày của nhà phát triển Linux, thuộc loại vấn đề trải nghiệm ưu tiên cao. |
| [#2336](https://github.com/github/copilot-cli/issues/2336) | Thông báo giới hạn tốc độ kỳ lạ | Mở | 13 bình luận. Người dùng phản hồi Agent nền thực hiện tác vụ bình thường thì bị giới hạn tốc độ sau nửa phút, thông báo không rõ ràng, gây nghi ngờ về tính hợp lý của chính sách giới hạn tốc độ. |
| [#978](https://github.com/github/copilot-cli/issues/978) | Skills không được sử dụng trừ khi được đề cập rõ ràng | Mở | 11 bình luận. Người dùng Claude Sonnet 4.5 phản hồi cơ chế kích hoạt Skill không thông minh, làm suy yếu mục đích ban đầu của thiết kế `AGENTS.md` nhẹ. |
| [#25