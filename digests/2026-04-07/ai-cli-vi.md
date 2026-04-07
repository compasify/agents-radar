# Nhật báo cộng đồng công cụ AI CLI 2026-04-07

> Thời gian tạo: 2026-04-07 00:12 UTC | Số lượng công cụ được đề cập: 8

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

# Báo cáo phân tích so sánh ngang hệ sinh thái công cụ AI CLI | 2026-04-07

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái công cụ AI CLI hiện tại đang thể hiện một cục diện cạnh tranh với đặc điểm **"chức năng tương đồng, trải nghiệm phân hóa"**: Claude Code và OpenAI Codex đang tranh đấu quyết liệt về tính minh bạch trong thanh toán và hiệu quả Token, Google Gemini CLI đang tăng tốc xây dựng năng lực quản trị cấp doanh nghiệp, các công cụ nội địa (Kimi, Qwen) đang tìm kiếm đột phá về đổi mới kiến trúc và các tình huống dọc. MCP (Model Context Protocol) đã trở thành tiêu chuẩn tích hợp công cụ thực tế, nhưng khoảng cách giữa các nhà cung cấp về hỗ trợ đám mây, mức độ phân quyền, điều phối đa Agent và các năng lực cốt lõi khác là rất rõ rệt. Cộng đồng đang phải đối mặt với ba thách thức chung phổ biến: **kiểm soát chi phí hội thoại dài, tương thích đầu cuối đa nền tảng, và sự linh hoạt về quyền truy cập quy trình làm việc tự động hóa**.

---

## 2. So sánh mức độ hoạt động của từng công cụ

| Công cụ | Issues (Hoạt động hôm nay) | PRs (Hoạt động hôm nay) | Phát hành phiên bản | Động thái quan trọng |
|:---|:---:|:---:|:---|:---|
| **Claude Code** | 10 | 9 | Không | Khủng hoảng thanh toán #38335 (437 bình luận) tiếp tục leo thang, lời kêu gọi mã nguồn mở #41447 nhận được sự chú ý |
| **OpenAI Codex** | 10 | 11 | rust-v0.119.0-alpha.12 | Chùm cơ sở hạ tầng phân tích (5 PR phân tích), bổ sung công cụ Alarm |
| **Gemini CLI** | 10 | 10 | v0.36.0-nightly | Sửa lỗi hệ thống Hook #24784, trình chiến lược ép buộc trường `modes` |
| **GitHub Copilot CLI** | 10 (48 đã đóng) | 0 | v1.0.19 + v1.0.19-0 | Chiến dịch dọn dẹp Issue, ổn định trạng thái MCP, tăng cường OTEL |
| **Kimi CLI** | 5 | 4 | Không | Tranh cãi về tái cấu trúc Python → TypeScript #1707, ổn định MCP được sửa hai lần |
| **OpenCode** | 10 | 10 | v1.3.16 + v1.3.17 | Tương thích Copilot+Opus #13768 (52 bình luận) trở thành tâm điểm |
| **Pi** | 10+ | 10 | Không | Xác thực AWS Bedrock #2879, hỗ trợ suy luận Gemma #2828 được hợp nhất nhanh chóng |
| **Qwen Code** | 10 | 17 | Không | Tái cấu trúc `/review` #2932, chức năng sáng tạo `/thinkback`, sửa lỗi khẩn cấp độ ổn định TUI |

> **Lưu ý**: Issues/PRs được thống kê theo số lượng được đề cập rõ ràng trong "Tổng quan hôm nay", một số công cụ có khối lượng xử lý thực tế cao hơn.

---

## 3. Hướng chức năng được quan tâm chung

| Hướng chức năng | Công cụ liên quan | Yêu cầu cụ thể |
|:---|:---|:---|
| **Minh bạch thanh toán/Token** | Claude Code, OpenAI Codex | Tiêu thụ hạn mức Claude Max bất thường (#38335, 437 bình luận); Đốt Token Kinh doanh Codex (#14593, 450 bình luận) |
| **Hoàn thiện hệ sinh thái MCP** | Tất cả 8 công cụ | Hỗ trợ tác vụ định kỳ trên đám mây (Claude #43397), phát hiện máy chủ (Copilot #679), tải blob lớn (Gemini #16369), khả năng chịu lỗi kết nối (Kimi #1769) |
| **Điều phối đa Agent** | Codex, Qwen, Claude | Phân loại sai trạng thái Agent con (Codex #16900), xung đột tiêu điểm song song (Qwen #2929), căn chỉnh khả năng Claude Code (Qwen #2409) |
| **Tinh chỉnh trải nghiệm đầu cuối** | Claude, Codex, Gemini, Kimi, OpenCode, Pi, Qwen | Chủ đề tùy chỉnh (Claude #1302), lịch sử cuộn TUI (Claude #42670), dán ảnh (Gemini #15051), nhấp nháy/tiêu điểm (Qwen #2928/#2929) |
| **Phát triển từ xa/đa nền tảng** | Claude, Codex, Copilot | Máy chủ SSH macOS (Claude #26694), phát triển từ xa trên máy tính để bàn (Codex #10450, 499👍), hỗ trợ WSL (Copilot #475) |
| **Kiểm soát chi phí hội thoại dài** | Claude, Kimi, OpenCode | Bất thường sau khi nén ngữ cảnh (Claude #41148), bộ nhớ tăng dần không tốn chi phí (Kimi #1691), tỷ lệ lỗi cao của `/compact` |

---

## 4. Phân tích định vị khác biệt

| Công cụ | Trọng tâm cốt lõi | Người dùng mục tiêu | Đặc điểm lộ trình kỹ thuật |
|:---|:---|:---|:---|
| **Claude Code** | An toàn cấp doanh nghiệp và năng lực kỹ thuật sâu | Nhà phát triển chuyên nghiệp, nhóm lớn | Sản phẩm đóng, sandbox Cowork, hệ thống phân quyền chi tiết, nhưng áp lực mã nguồn mở ngày càng tăng |
| **OpenAI Codex** | Lặp lại sản phẩm dựa trên phân tích | Nhóm nhạy cảm dữ liệu, doanh nghiệp | Cốt lõi Rust + lớp TypeScript, đầu tư mạnh vào cơ sở hạ tầng phân tích |
| **Gemini CLI** | Quản trị doanh nghiệp như mã chiến lược | Tổ chức yêu cầu tuân thủ nghiêm ngặt | Trình chiến lược TOML, hệ thống mở rộng Hook, tích hợp sâu hệ sinh thái Google |
| **Copilot CLI** | Tích hợp gốc quy trình làm việc GitHub | Người dùng GitHub nặng, hệ sinh thái Microsoft | Phối hợp với IDE/trình soạn thảo, tính ổn định của MCP, khả năng quan sát OTEL |
| **Kimi CLI** | Tình huống hội thoại dài nhạy cảm về chi phí | Nhà phát triển nội địa, nhóm có ngân sách hạn chế | Tranh cãi tái cấu trúc Python → TypeScript, đổi mới kiến trúc như bộ nhớ tăng dần |
| **OpenCode** | Khả năng tương thích hệ sinh thái đa mô hình | Người có nhu cầu chuyển đổi mô hình linh hoạt | Kiến trúc plugin, thích ứng nhanh với các biến thể mô hình, hỗ trợ di động dẫn đầu |
| **Pi** | Hệ sinh thái đám mây gốc và mở rộng | Người dùng đám mây AWS/GCP/Azure | Kiến trúc hệ thống mở rộng tiên tiến, chuỗi xác thực đa nhà cung cấp mạnh mẽ, khả năng cảm nhận môi trường |
| **Qwen Code** | Đổi mới chức năng khác biệt | Nhà phát triển theo đuổi công cụ hiệu quả | Các chức năng độc đáo như truy ngược hội thoại `/thinkback`, chế độ `/plan`, Agent con đang đuổi kịp |

---

## 5. Mức độ phổ biến và sự trưởng thành của cộng đồng

### 🔥 Hoạt động cao · Lặp lại nhanh
| Công cụ | Chỉ số | Đánh giá giai đoạn |
|:---|:---|:---|
| **Qwen Code** | 17 PRs/ngày, bàn giao chức năng dày đặc | **Giai đoạn bùng nổ chức năng**: Các chức năng sáng tạo như /review, /plan, /thinkback được triển khai nhanh chóng, nhưng nợ ổn định TUI ngày càng rõ rệt |
| **Pi** | 10+ Issues + 10 PRs, sửa lỗi P0 trong ngày | **Giai đoạn trưởng thành kỹ thuật**: Phản ứng cực nhanh với các vấn đề cấp sản xuất như hỗ trợ AWS Bedrock, suy luận Gemma |
| **OpenCode** | Phát hành hai phiên bản, Issue nóng 52 bình luận | **Giai đoạn mở rộng hệ sinh thái**: Thách thức về khả năng tương thích đa mô hình song song với lặp lại chức năng |

### 🌡️ Hoạt động trung bình · Tiến hóa ổn định
| Công cụ | Đặc điểm |
|:---|:---|
| **OpenAI Codex** | Xây dựng hệ thống cơ sở hạ tầng phân tích theo hệ thống, nhịp độ phiên bản có quy luật (alpha.12) |
| **Gemini CLI** | Các chức năng cấp doanh nghiệp (trình chiến lược, hệ thống Hook) được thúc đẩy ổn định, tiếp tục với nightly |
| **Claude Code** | Quy mô cộng đồng lớn nhưng phản hồi chính thức chậm, khủng hoảng thanh toán làm tiêu hao vốn tin |

### ❄️ Hoạt động thấp · Chế độ bảo trì
| Công cụ | Đặc điểm |
|:---|:---|
| **GitHub Copilot CLI** | Chủ yếu dọn dẹp Issue (48/50 đã đóng), không có PR mới, có vẻ như nguồn lực đang được chuyển đổi |
| **Kimi CLI** | Tranh cãi tái cấu trúc chưa được giải quyết, lặp lại chức năng chậm lại, sửa lỗi MCP là ưu tiên hàng đầu |

---

## 6. Tín hiệu xu hướng đáng chú ý

| Xu hướng | Nguồn tín hiệu | Giá trị tham khảo cho nhà phát triển |
|:---|:---|:---|
| **MCP trở thành lớp cơ sở hạ tầng** | Tất cả các công cụ đều đưa vào lộ trình, nhưng hỗ trợ trên đám mây phân hóa | Ưu tiên chọn các công cụ có hệ sinh thái MCP hoàn thiện, tránh khóa nhà cung cấp |
| **Phương pháp luận sản phẩm "Ưu tiên phân tích"** | Nhóm PR phân tích của Codex, tăng cường OTEL cho Claude/Copilot | Lựa chọn doanh nghiệp cần đánh giá khả năng quan sát, kiểm toán Token trở thành nhu cầu tuân thủ bắt buộc |
| **Kiến trúc đa Agent bước vào giai đoạn kỹ thuật cốt lõi** | Xung đột tiêu điểm song song của Qwen, phân loại sai Agent con của Codex, bỏ qua quyền của Claude | Các tình huống tự động hóa phức tạp cần đánh giá thận trọng sự trưởng thành của cơ chế điều phối |
| **Trải nghiệm đầu cuối trở thành chiến trường khác biệt** | 7/8 công cụ liên quan đến các vấn đề TUI/chủ đề/bảng tạm | Trong các tình huống sử dụng tần suất cao, trọng số trải nghiệm gốc của đầu cuối tăng lên |
| **Đổi mới kiến trúc công cụ nội địa sôi nổi** | Bộ nhớ tăng dần của Kimi, /thinkback của Qwen, hệ thống mở rộng của Pi | Chú ý đến sự đổi mới khác biệt của các nhà cung cấp không đứng đầu, có thể nuôi dưỡng mô hình thế hệ tiếp theo |
| **Áp lực mã nguồn mở và căng thẳng mã nguồn đóng** | Claude #41447, tranh cãi tái cấu trúc Kimi #1707 | Người ra quyết định kỹ thuật cần cân nhắc sự minh bạch, khả năng kiểm soát và hỗ trợ thương mại |

---

> **Khuyến nghị quyết định**: Tình huống cấp doanh nghiệp ưu tiên Claude Code (an toàn) hoặc Gemini CLI (quản trị); nhóm nhạy cảm về chi phí chú ý đến tiến trình bộ nhớ tăng dần của Kimi; nhu cầu chuyển đổi mô hình linh hoạt chọn OpenCode; người dùng sâu về đám mây gốc đánh giá hệ sinh thái mở rộng của Pi.

---

## Báo cáo chi tiết từng công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Điểm nóng cộng đồng Claude Code Skills

> Nguồn dữ liệu: [anthropics/skills](https://github.com/anthropics/skills)

# Báo cáo điểm nóng cộng đồng Claude Code Skills (2026-04-07)

---

## 1. Kỹ năng hàng đầu (theo mức độ quan tâm của cộng đồng)

| Hạng | Kỹ năng | Mô tả chức năng | Trạng thái | Liên kết |
|:---|:---|:---|:---|:---|
| 1 | **document-typography** | Kiểm soát chất lượng bố cục tài liệu do AI tạo ra, giải quyết các vấn đề bố cục phổ biến như dòng đơn, dòng lẻ, đánh số sai | 🔵 Mở | [PR #514](https://github.com/anthropics/skills/pull/514) |
| 2 | **frontend-design** | Phiên bản cải tiến của Kỹ năng thiết kế giao diện người dùng, nâng cao sự rõ ràng và khả năng thực thi của lệnh, đảm bảo các tác vụ thiết kế có thể hoàn thành trong một lần hội thoại | 🔵 Mở | [PR #210](https://github.com/anthropics/skills/pull/210) |
| 3 | **skill-quality-analyzer / skill-security-analyzer** | Meta Skills: Tự động đánh giá chất lượng (cấu trúc, tài liệu, ví dụ, v.v. trên 5 khía cạnh) và bảo mật của các Kỹ năng khác | 🔵 Mở | [PR #83](https://github.com/anthropics/skills/pull/83) |
| 4 | **ODT** | Tạo văn bản OpenDocument, điền mẫu và phân tích cú pháp ODT → HTML, lấp đầy khoảng trống của hệ sinh thái LibreOffice | 🔵 Mở | [PR #486](https://github.com/anthropics/skills/pull/486) |
| 5 | **codebase-inventory-audit** | Kiểm tra toàn diện kho mã: xác định mã mồ côi, tệp không sử dụng, thiếu tài liệu, phình to cơ sở hạ tầng | 🔵 Mở | [PR #147](https://github.com/anthropics/skills/pull/147) |
| 6 | **shodh-memory** | Hệ thống bộ nhớ bền vững cho AI Agent, duy trì ngữ cảnh giữa các hội thoại, chủ động truy xuất bộ nhớ liên quan | 🔵 Mở | [PR #154](https://github.com/anthropics/skills/pull/154) |
| 7 | **testing-patterns** | Hướng dẫn kiểm thử toàn diện: triết lý kiểm thử (Testing Trophy), mẫu AAA kiểm thử đơn vị, kiểm thử thành phần React, chiến lược E2E | 🔵 Mở | [PR #723](https://github.com/anthropics/skills/pull/723) |
| 8 | **sensory** | Tự động hóa gốc macOS (AppleScript/osascript), thay thế việc sử dụng máy tính dựa trên ảnh chụp màn hình | 🔵 Mở | [PR #806](https://github.com/anthropics/skills/pull/806) |

---

## 2. Xu hướng nhu cầu của cộng đồng (Tổng hợp Issues)

| Hướng nhu cầu | Issue đại diện | Yêu cầu cốt lõi |
|:---|:---|:---|
| **Quản trị & Bảo mật cấp doanh nghiệp** | [#492](https://github.com/anthropics/skills/issues/492) Lạm dụng ranh giới tin cậy, [#412](https://github.com/anthropics/skills/issues/412) Mô hình quản trị Agent | Rủi ro bảo mật của Kỹ năng cộng đồng mạo danh không gian tên chính thức; Cần Kỹ năng quản trị để thực thi chính sách, phát hiện mối đe dọa, theo dõi kiểm toán |
| **Nâng cấp chuỗi công cụ tạo Kỹ năng** | [#202](https://github.com/anthropics/skills/issues/202) | skill-creator cần chuyển đổi từ "tài liệu dành cho nhà phát triển" thành "lệnh thao tác", giảm tiêu thụ token, phù hợp với các thực hành tốt nhất |
| **Cơ sở hạ tầng đánh giá & kiểm thử** | [#556](https://github.com/anthropics/skills/issues/556) | Vấn đề tỷ lệ kích hoạt 0% của `run_eval.py`, khung kiểm thử tự động Kỹ năng đang cấp thiết phải sửa chữa |
| **Tích hợp giao thức MCP** | [#16](https://github.com/anthropics/skills/issues/16) | Phơi bày Kỹ năng dưới dạng công cụ MCP, tiêu chuẩn hóa giao diện API phần mềm AI |
| **Chia sẻ Kỹ năng cấp tổ chức** | [#228](https://github.com/anthropics/skills/issues/228) | Chia sẻ trực tiếp thư viện Kỹ năng trong doanh nghiệp, thay thế quy trình tải xuống/tải lên thủ công tốn thời gian |
| **Triển khai đa đám mây/đa nền tảng** | [#29](https://github.com/anthropics/skills/issues/29) | Hỗ trợ tương thích với các nền tảng bên thứ ba như AWS Bedrock |

---

## 3. Các Kỹ năng tiềm năng cao chờ hợp nhất (Tổng quan PR đang hoạt động)

| Kỹ năng | Điểm nổi bật | Cập nhật lần cuối | Liên kết |
|:---|:---|:---|:---|
| **quality-playbook** | Phục hồi các thực hành kỹ thuật chất lượng truyền thống, do AI điều khiển với chi phí thấp, tạo kiểm thử từ yêu cầu thay vì mã | 2026-03-29 | [PR #659](https://github.com/anthropics/skills/pull/659) |
| **SAP-RPT-1-OSS predictor** | Tích hợp mô hình cơ sở bảng mã nguồn mở SAP, chuyên phân tích dự đoán dữ liệu kinh doanh SAP | 2026-03-16 | [PR #181](https://github.com/anthropics/skills/pull/181) |
| **masonry-generate-image-and-videos** | Tạo ảnh và video dựa trên Imagen 3.0/Veo 3.1, quản lý toàn bộ vòng đời tác vụ tạo | 2026-03-14 | [PR #335](https://github.com/anthropics/skills/pull/335) |
| **Bộ sưu tập 11 Kỹ năng bao gồm UX Product Engineer** | Trình xác minh xác minh trước triển khai, nghệ thuật thuật toán, bản đồ hành trình UX, hàng loạt đóng góp như trình soạn thảo dòng lệnh Mermaid | 2026-03-30 | [PR #740](https://github.com/anthropics/skills/pull/740) |

> 🔧 **Sửa chữa cơ sở hạ tầng**: Lubrsy706 liên tục gửi 3 PR sửa lỗi ([#538](https://github.com/anthropics/skills/pull/538), [#539](https://github.com/anthropics/skills/pull/539), [#541](https://github.com/anthropics/skills/pull/541)), giải quyết các vấn đề ổn định như độ nhạy với chữ hoa chữ thường của DOCX/PDF, phân tích cú pháp YAML, xung đột ID.

---

## 4. Insight hệ sinh thái Kỹ năng

> **Yêu cầu cốt lõi**: Cộng đồng đang chuyển từ "Kỹ năng công cụ đơn điểm" sang "Năng lực kỹ thuật hệ thống" - vừa cần **cơ sở hạ tầng chất lượng cho tài liệu/mã/kiểm thử** (typography, testing-patterns, quality-playbook), vừa cần **khung quản trị, chia sẻ và đánh giá cấp doanh nghiệp** (skill-quality-analyzer, tích hợp MCP, chia sẻ cấp tổ chức), đồng thời **sửa chữa độ tin cậy của chuỗi công cụ** (skill-creator, run_eval.py) đã trở thành nút thắt cản trở.

---

---

# Nhật báo cộng đồng Claude Code | 2026-04-07

## Tổng quan hôm nay

Người dùng gói Claude Max tiếp tục báo cáo vấn đề tiêu thụ hạn mức hội thoại bất thường (#38335), đã gây ra 437 bình luận và 346 lượt thích, trở thành chủ đề được cộng đồng thảo luận sôi nổi nhất. Đồng thời, nhiều yêu cầu chức năng về bỏ qua quyền, tùy chỉnh chủ đề đầu cuối và hỗ trợ từ xa SSH trên macOS vẫn hoạt động tích cực, phản ánh nhu cầu tùy chỉnh sâu quy trình làm việc mạnh mẽ của các nhà phát triển chuyên nghiệp.

---

## Issues cộng đồng nóng

| # | Tiêu đề | Trạng thái | Bình luận | Điểm nhấn quan trọng |
|---|------|------|------|---------|
| [#38335](https://github.com/anthropics/claude-code/issues/38335) | Hạn mức hội thoại gói Claude Max tiêu hao bất thường và nhanh chóng | 🔴 MỞ | 437 | **Khủng hoảng thanh toán**: Kể từ ngày 23 tháng 3, mức sử dụng CLI được tính toán bất thường, người dùng Max báo cáo tiêu hao hạn mức hàng tháng trong vài giờ. Tâm lý cộng đồng gay gắt, chính thức Anthropic vẫn chưa đưa ra thời gian sửa chữa rõ ràng. |
| [#42796](https://github.com/anthropics/claude-code/issues/42796) | Claude Code không thể xử lý các tác vụ kỹ thuật phức tạp sau bản cập nhật tháng 2 | 🟢 ĐÃ ĐÓNG | 65 | **Tranh cãi về chất lượng mô hình**: 365 lượt thích phản ánh sự đồng tình rộng rãi, người dùng báo cáo chất lượng tạo mã giảm đáng kể, ảo giác tăng lên. Mặc dù đã bị đóng, vẫn có người dùng mới báo cáo các vấn đề tương tự. |
| [#27801](https://github.com/anthropics/claude-code/issues/27801) | Lỗi dịch vụ VM "không thể khởi động không gian làm việc" của chức năng Cowork | 🔴 MỞ | 57 | **Chặn chức năng cốt lõi**: Lỗi nghiêm trọng ở chế độ Sandbox, vẫn không thể khôi phục sau khi khởi động lại, ảnh hưởng đến các tình huống cộng tác nhóm dựa vào môi trường cô lập. |
| [#36168](https://github.com/anthropics/claude-code/issues/36168) | Chức năng bỏ qua quyền bị vô hiệu hóa sau bản cập nhật v2.1.77 | 🔴 MỞ | 39 | **Đứt gãy quy trình làm việc tự động hóa**: Các tùy chọn bỏ qua nguy hiểm như `bypassPermissions` bị hỏng, ảnh hưởng nghiêm trọng đến các tình huống tích hợp CI/CD. |
| [#1302](https://github.com/anthropics/claude-code/issues/1302) | Hỗ trợ tùy chỉnh chủ đề đầu cuối | 🔴 MỞ | 29 | **Cá nhân hóa trải nghiệm**: Nhu cầu lâu dài với 122 lượt thích, nhà phát triển hy vọng vượt qua giới hạn 6 chủ đề được đặt sẵn, phù hợp với phong cách đầu cuối cá nhân/thương hiệu. |
| [#26694](https://github.com/anthropics/claude-code/issues/26694) | Hỗ trợ macOS làm máy chủ từ xa SSH | 🔴 MỞ | 13 | **Phát triển từ xa đa nền tảng**: Hiện chỉ hỗ trợ Linux, nhà phát triển macOS không thể sử dụng chức năng từ xa SSH của phiên bản máy tính để bàn, hạn chế các tình huống máy chủ Apple Silicon. |
| [#15898](https://github.com/anthropics/claude-code/issues/15898) | Shift+Tab lặp lại để thêm chế độ YOLO | 🔴 MỞ | 9 | **Tối ưu hóa hiệu quả**: 15 lượt thích, yêu cầu thêm `bypassPermissions` vào chuyển đổi nhanh chế độ quyền, giảm ma sát xác nhận trong các thao tác tần suất cao. |
| [#42670](https://github.com/anthropics/claude-code/issues/42670) | Bộ đệm màn hình thay thế v2.1.89+ giết chết lịch sử cuộn | 🔴 MỞ | 4 | **Suy giảm UX nghiêm trọng**: Chế độ TUI toàn màn hình khiến chức năng cuộn gốc của đầu cuối không hoạt động, không thể xem đầu ra lịch sử, cực kỳ khó khăn khi gỡ lỗi hội thoại dài. |
| [#43397](https://github.com/anthropics/claude-code/issues/43397) | Tác vụ định kỳ trên đám mây không thể truy cập trình kết nối MCP | 🔴 MỞ | 8 | **Khoảng trống hệ sinh thái tự động hóa**: Tải công cụ MCP thất bại trong tình huống Cloud, ảnh hưởng đến tích hợp chuỗi công cụ của quy trình làm việc không giám sát. |
| [#44445](https://github.com/anthropics/claude-code/issues/44445) | Claude ưu tiên nghi ngờ các yếu tố bên ngoài thay vì tự chỉnh sửa khi gỡ lỗi | 🔴 MỞ | 1 | **Thiếu sót siêu nhận thức**: Báo cáo phản tư do chính Claude viết, chỉ ra mô hình "đổ lỗi" cho mã người dùng khi gỡ lỗi thay vì kiểm tra các thay đổi tự thực hiện. |

---

## Tiến độ PR quan trọng

| # | Tiêu đề | Trạng thái | Nội dung chức năng/sửa chữa |
|---|------|------|--------------|
| [#41661](https://github.com/anthropics/claude-code/pull/41661) | Thêm 14 plugin mang tính cách mạng | 🟢 ĐÃ ĐÓNG | Bộ plugin bảo mật, hiệu suất, kiến trúc, tự động hóa toàn diện, bao gồm mở rộng thị trường 27 plugin, đã bị đóng vì "nộp plugin không chính thức" |
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | Mã nguồn mở Claude Code | 🔴 MỞ | Lời kêu gọi lâu dài của cộng đồng (đóng #59, #456, #2846, v.v.), PR mang tính biểu tượng phản ánh kỳ vọng của nhà phát triển về tính minh bạch và đóng góp cộng đồng |
| [#44159](https://github.com/anthropics/claude-code/pull/44159) | Thêm chế độ bảo mật Java | 🔴 MỞ | Bổ sung phạm vi Java cho plugin security-guidance: phát hiện 5 loại lỗ hổng SQL injection, XXE, deserialization, JNDI, command injection |
| [#41938](https://github.com/anthropics/claude-code/pull/41938) | Thêm tập lệnh khởi động DevContainer cho Linux/macOS | 🔴 MỞ | Bổ sung hỗ trợ DevContainer chỉ dành cho Windows, nâng cao trải nghiệm nhà phát triển đa nền tảng |
| [#44393](https://github.com/anthropics/claude-code/pull/44393) | Sửa tập lệnh backfill-duplicate-comments bỏ qua DAYS_BACK | 🔴 MỞ | Sửa chữa quy trình làm việc: làm cho biến môi trường có hiệu lực thực tế, tối ưu hóa logic phân trang vấn đề |
| [#44055](https://github.com/anthropics/claude-code/pull/44055) | Sửa lỗi phân tích cú pháp YAML trường mô tả agent | 🔴 MỞ | Sửa lỗi định dạng frontmatter YAML cho 6 tệp agent, giải quyết lỗi `mapping values are not allowed` |
| [#41611](https://github.com/anthropics/claude-code/pull/41611) | Bổ sung mã nguồn bị thiếu | 🔴 MỞ | Phản hồi lại #41447, yêu cầu mã nguồn mở đầy đủ |
| [#44071](https://github.com/anthropics/claude-code/pull/44071) | Sửa lỗi nhất quán chữ hoa chữ thường tiêu đề README | 🔴 MỞ | `Get started` → `Get Started`, chỉnh sửa tài liệu |
| [#1](https://github.com/anthropics/claude-code/pull/1) | Tạo SECURITY.md | 🟢 ĐÃ ĐÓNG | Tài liệu chính sách bảo mật cơ bản, được tạo năm 2025, gần đây bị xóa và đóng |

---

## Xu hướng yêu cầu chức năng

Dựa trên phân tích 50 Issues hoạt động trong 24 giờ qua, trọng tâm cộng đồng tập trung vào:

| Hướng | Mức độ phổ biến | Yêu cầu điển hình |
|------|------|---------|
| **Kiểm soát quyền và tự động hóa** | 🔥🔥🔥 | Chuyển đổi nhanh chế độ YOLO, sửa lỗi bỏ qua quyền, chặn móc nối trước khi khởi động hội thoại |
| **Tùy chỉnh sâu trải nghiệm đầu cuối/IDE** | 🔥🔥🔥 | Chủ đề tùy chỉnh, bảo lưu lịch sử cuộn, phân biệt trực quan tin nhắn người dùng |
| **Phát triển từ xa và đa nền tảng** | 🔥🔥 | Hỗ trợ máy chủ SSH macOS, truyền qua GPU, tối ưu hóa xử lý worktree |
| **Chất lượng và độ tin cậy của mô hình** | 🔥🔥🔥 | Bất thường hành vi sau khi nén ngữ cảnh, cơ chế tự nghi ngờ khi gỡ lỗi, chất lượng suy luận giảm |
| **Quy trình làm việc doanh nghiệp/nhóm** | 🔥🔥 | Chuyển đổi đa tài khoản, khôi phục lưu trữ hội thoại, ổn định VM Cowork, hỗ trợ đám mây MCP |
| **Khả năng quan sát và tích hợp** | 🔥 | Bổ sung sự kiện OTEL, mã thoát Hook, hỗ trợ đăng ký động LSP |

---

## Điểm thu hút sự chú ý của nhà phát triển

### 🔴 Điểm đau tần suất cao

1. **Khủng hoảng minh bạch thanh toán** — Tiêu thụ hạn mức hội thoại bất thường trong #38335 gây ra khủng hoảng niềm tin, nhà phát triển yêu cầu kiểm toán sử dụng chi tiết hơn và cảnh báo theo thời gian thực
2. **Suy giảm UX chế độ TUI** — Chuyển đổi toàn màn hình làm mất chức năng gốc của đầu cuối (cuộn, sao chép, tìm kiếm), #42796 và #34269 phản ánh nhu cầu mạnh mẽ về "TUI tùy chọn"
3. **Nghịch lý về sự linh hoạt của hệ thống quyền** — Hạn chế bảo mật trở thành trở ngại trong các tình huống tự động hóa, cộng đồng đang tìm kiếm trạng thái trung gian chi tiết hơn giữa "mở hoàn toàn" và "kiểm soát chặt chẽ"

### 🟡 Khoảng trống năng lực

- **Quản lý ngữ cảnh**：hành vi mô hình bất thường khi khôi phục hội thoại sau khi nén (#41148), độ tin cậy hội thoại dài đáng ngờ
- **Bình đẳng đa nền tảng**：macOS tiếp tục tụt hậu so với Linux về hỗ trợ SSH từ xa, GPU
- **Danh tính doanh nghiệp**：chuyển đổi đa tài khoản (#30031, 17 lượt thích) là điểm nghẽn cho việc triển khai quy mô lớn

### 🟢 Kỳ vọng hệ sinh thái

- **Tiếng gọi mã nguồn mở tiếp tục**：các PR như #41447, mặc dù là nộp mang tính biểu tượng, nhưng phản ánh mong muốn của cộng đồng chuyển từ "sản phẩm hộp đen" sang "nền tảng có thể tham gia"
- **Sự trưởng thành của hệ sinh thái MCP**：tích hợp tác vụ định kỳ trên đám mây + MCP (#43397) được coi là cơ sở hạ tầng tự động hóa thế hệ tiếp theo

---

*Nguồn dữ liệu: github.com/anthropics/claude-code | Chu kỳ thống kê: 2026-04-06 đến 2026-04-07*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Nhật báo cộng đồng OpenAI Codex | 2026-04-07

---

## 1. Tổng quan hôm nay

Vấn đề nổi bật nhất trong cộng đồng hôm nay vẫn là **tiêu thụ Token quá nhanh** (#14593 đã tích lũy 450 bình luận), đồng thời nhóm OpenAI đang tích cực thúc đẩy xây dựng **cơ sở hạ tầng phân tích**, với 5 PR liên quan đến phân tích được thêm mới trong một ngày. Phiên bản Rust phát hành `v0.119.0-alpha.12`, mở rộng hệ sinh thái MCP và năng lực phát triển từ xa là trọng tâm kỹ thuật.

---

## 2. Phát hành phiên bản

| Phiên bản | Mô tả |
|:---|:---|
| **rust-v0.119.0-alpha.12** | Cập nhật thành phần Rust, các thay đổi cụ thể không được tiết lộ chi tiết, suy đoán là sửa lỗi lặp lại thông thường |

---

## 3. Issues cộng đồng nóng

| # | Issue | Phân tích tầm quan trọng | Phản hồi cộng đồng |
|:---|:---|:---|:---|
| [#14593](https://github.com/openai/codex/issues/14593) | **Tiêu thụ Token quá nhanh** — Người dùng đăng ký Business báo cáo Token bị đốt cháy bất thường | 🔴 **Ưu tiên cao nhất** — Liên quan đến sự công bằng trong thanh toán, đã kéo dài 25 ngày mà không nhận được phản hồi rõ ràng chính thức | 450 bình luận, 170 👍, người dùng liên tục gây áp lực yêu cầu minh bạch hóa cơ chế thanh toán |
| [#10450](https://github.com/openai/codex/issues/10450) | **Hỗ trợ ứng dụng máy tính để bàn cho phát triển từ xa** | Lấp đầy khoảng trống trải nghiệm giữa phát triển SSH/container từ xa của VS Code và Codex phiên bản máy tính để bàn | 103 bình luận, 499 👍, người dùng doanh nghiệp có nhu cầu mạnh mẽ |
| [#10601](https://github.com/openai/codex/issues/10601) | **Lỗi thiết lập Sandbox trên Windows** | Chặn sử dụng chức năng cốt lõi của người dùng Windows, vấn đề tương thích nền tảng | 41 bình luận, 10 👍, chưa được giải quyết trong thời gian dài |
| [#14936](https://github.com/openai/codex/issues/14936) | **bwrap hầu như mọi lệnh đều kích hoạt lời nhắc phê duyệt** | Chính sách bảo mật Sandbox quá nhạy cảm, gây cản trở nghiêm trọng luồng phát triển | 32 bình luận, 16 👍, vấn đề quay lại |
| [#13733](https://github.com/openai/codex/issues/13733) | **Quy trình nền định kỳ lãng phí Token** — `write_stdin` mỗi lần định kỳ đều mang theo toàn bộ lịch sử | Lỗi hiệu quả cấp kiến trúc, chi phí chạy dài tăng gấp đôi | 9 bình luận, phân tích kỹ thuật chuyên sâu nhận được sự chú ý |
| [#3962](https://github.com/openai/codex/issues/3962) | **Phát âm báo khi tác vụ hoàn thành** | Chi tiết trải nghiệm người dùng, nhu cầu thiết yếu cho các tác vụ nền dài | 36 bình luận, 131 👍, cộng đồng có nhu cầu cao |
| [#16158](https://github.com/openai/codex/issues/16158) | **Ứng dụng khởi động sau 5 phút không phản hồi** | Vấn đề ổn định ứng dụng máy tính để bàn, ảnh hưởng ấn tượng ban đầu | 10 bình luận, người dùng Pro phản hồi |
| [#14513](https://github.com/openai/codex/issues/14513) | **Codex dừng giữa chừng và trả lời câu hỏi cũ** | Quản lý trạng thái/ô nhiễm ngữ cảnh nghiêm trọng | 7 bình luận, 9 👍, ảnh hưởng đến độ tin cậy |
| [#13491](https://github.com/openai/codex/issues/13491) | **Worker được Fork kế thừa ý định của cha dẫn đến ủy quyền đệ quy** | Lỗi thiết kế sâu của kiến trúc đa Agent | 6 bình luận, 8 👍, thảo luận ở cấp độ kiến trúc |
| [#16900](https://github.com/openai/codex/issues/16900) | **Agent con khỏe mạnh bị phân loại sai là bị đình trệ, dẫn đến làm việc lặp lại** | Cơ chế điều phối đa Agent chưa trưởng thành, lãng phí Token + phình ngữ cảnh | 3 bình luận, mới được thêm hôm nay, vấn đề cấp bách |

---

## 4. Tiến độ PR quan trọng

| # | PR | Nội dung chức năng/sửa chữa | Ý nghĩa kỹ thuật |
|:---|:---|:---|:---|
| [#16962](https://github.com/openai/codex/pull/16962) | **Tái cấu trúc kiểu cấu hình thành Crate độc lập** | Di chuyển các kiểu cấu hình ra khỏi crate chính, giảm phình mã do mở rộng macro | Tối ưu hóa biên dịch và cải tiến kiến trúc mô-đun |
| [#16949](https://github.com/openai/codex/pull/16949) | **Chế độ Nhanh hỗ trợ dựa trên siêu dữ liệu mô hình** | Loại bỏ phán đoán slug mô hình được mã hóa cứng, hiển thị UI động thông qua bit năng lực `supportsFastMode` | Tăng khả năng tương thích đa mô hình và khả năng bảo trì |
| [#16950](https://github.com/openai/codex/pull/16950) | **Hỗ trợ khôi phục hội thoại sau `/clear` bằng `/resume`** | Bắt trạng thái luồng trước `/clear` và `/new`, nhắc người dùng có thể khôi phục | Giải quyết điểm đau mất dữ liệu do thao tác nhầm |
| [#16912](https://github.com/openai/codex/pull/16912) | **Tạo `installation_id` và đưa vào siêu dữ liệu yêu cầu** | Lưu trữ UUID bền vững tại `$CODEX_HOME/installation_id`, dùng để theo dõi phân tích | Một phần quan trọng của cơ sở hạ tầng quan sát |
| [#16953](https://github.com/openai/codex/pull/16953) | **Bổ sung công cụ Alarm** | Cơ chế lập lịch tác vụ định kỳ giữa các máy khách, hỗ trợ tác vụ kiểu `/loop`, duy trì hoạt động của Harness | Cơ sở cho quy trình làm việc tự động hóa và tác vụ bền vững |
| [#16960](https://github.com/openai/codex/pull/16960) | **Máy chủ ứng dụng hỗ trợ tạo cuộc gọi Thời gian thực WebRTC** | Khả năng tương tác thời gian thực thử nghiệm, phân biệt đường dẫn khóa API và xác thực ChatGPT | Mở rộng khả năng tương tác thời gian thực |
| [#16875](https://github.com/openai/codex/pull/16875) | **JsonSchema hỗ trợ `anyOf` và `enum`** | Phù hợp với quy ước đầu ra có cấu trúc của API OpenAI, làm phong phú thêm việc hiển thị chữ ký hàm | Hoàn thiện hệ thống kiểu gọi công cụ |
| [#16944](https://github.com/openai/codex/pull/16944) | **Tìm kiếm công cụ mở rộng cho MCP tùy chỉnh** | Tăng cường khả năng khám phá công cụ hệ sinh thái MCP | Nâng cao trải nghiệm tích hợp công cụ của bên thứ ba |
| [#16937](https://github.com/openai/codex/pull/16937) | **Khởi động thực thi từ xa quy trình phê duyệt** | Việc khởi động từ xa của dịch vụ thực thi thống nhất phải trải qua quy trình phê duyệt cốt lõi | Đảm bảo tính nhất quán của chính sách bảo mật |
| [#16640](https://github.com/openai/codex/pull/16640) | **[Analytics] Bù dữ liệu cấu hình lượt và phát** | Thực hiện thu thập sự kiện tùy chỉnh dữ liệu cấu hình cấp lượt | Cơ sở cho quyết định dựa trên dữ liệu sản phẩm |

> 📊 **Chùm cơ sở hạ tầng phân tích**: PR #16640, #16706, #16659, #16641, #16870 tạo thành ngăn xếp Sapling, xây dựng hệ thống liên kết hoàn chỉnh từ việc sử dụng token, gửi hàng đợi, điều hướng đến siêu dữ liệu luồng cho phân tích.

---

## 5. Xu hướng yêu cầu chức năng

Dựa trên phân tích 50 Issues hoạt động, trọng tâm cộng đồng thể hiện bốn hướng chính:

| Hướng | Issue đại diện | Cường độ yêu cầu |
|:---|:---|:---:|
| **💰 Minh bạch thanh toán & Hiệu quả Token** | #14593, #13733, #16900 | ⭐⭐⭐⭐⭐ |
| **🖥️ Hoàn thiện trải nghiệm IDE/máy tính để bàn** | #10450, #3962, #2880, #13942 | ⭐⭐⭐⭐⭐ |
| **🪟 Tính ổn định nền tảng Windows** | #10601, #12414, #15975, #13659 | ⭐⭐⭐⭐☆ |
| **🤖 Độ bền kiến trúc đa Agent** | #13491, #16900, #15723, #14667 | ⭐⭐⭐⭐☆ |
| **🔒 Trải nghiệm bảo mật & phê duyệt Sandbox** | #14936, #16937 | ⭐⭐⭐☆☆ |
| **📊 Ngữ cảnh/Quản lý nén** | #10823, #11641, #12468, #12790 | ⭐⭐⭐☆☆ |

---

## 6. Điểm thu hút sự chú ý của nhà phát triển

### 🔥 Điểm đau tần suất cao

| Điểm đau | Biểu hiện cụ thể | Phạm vi ảnh hưởng |
|:---|:---|:---|
| **Kinh tế Token không thể kiểm soát** | Định kỳ nền, truyền lịch sử lặp lại, Agent con thực hiện lặp lại dẫn đến chi phí tăng vọt | Tất cả người dùng trả phí trên mọi nền tảng |
| **Trải nghiệm công dân hạng hai trên Windows** | Lỗi Sandbox, rò rỉ bộ nhớ (OOM 90GB+), khởi động bị kẹt, đóng băng UI | Nhà phát triển Windows |
| **Quản lý cửa sổ ngữ cảnh không hoạt động** | Khôi phục sau lỗi nén, các vấn đề đặc biệt với mô hình Spark, sự cố hội thoại dài | Người dùng dự án phức tạp |
| **Điều phối đa Agent là hộp đen** | Trạng thái Agent con không hiển thị, phân loại sai đình trệ, kế thừa ý định lộn xộn | Người dùng tự động hóa cao cấp |

### 🎯 Nhu cầu cốt lõi chưa được đáp ứng

1. **Hỗ trợ phát triển từ xa gốc** — Nhu cầu thiết yếu cho tình huống doanh nghiệp/phát triển đám mây (#10450, 499 👍)
2. **Chế độ mặc định có thể cấu hình** — Quy trình làm việc cá nhân hóa như khởi động mặc định chế độ Plan (#13942)
3. **Chi tiết hóa sự kiện Hook** — Phân biệt nguồn sự kiện của Agent chính/con (#16226)
4. **Hệ thống âm thanh/thông báo** — Nhận biết tác vụ nền hoàn thành (#3962, 131 👍)

---

*Nhật báo dựa trên dữ liệu công khai của github.com/openai/codex, không đại diện cho lập trường chính thức của OpenAI.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Nhật báo cộng đồng Gemini CLI | 2026-04-07

## Tổng quan hôm nay

Cộng đồng hôm nay tập trung vào tối ưu hóa hiệu suất đầu cuối và chức năng tự động cấu hình bộ nhớ của phiên bản **v0.36.0-nightly**, đồng thời hai vấn đề cấp P1 là **mô hình BeforeModel Hook không bao phủ** (#21847) và **lỗi quyền 403 sau khi đăng nhập OAuth** (#24734) đã gây ra các cuộc thảo luận rộng rãi. Về chức năng cấp doanh nghiệp, đơn giản hóa quy tắc TOML của trình chiến lược và yêu cầu chế độ bắt buộc là trọng tâm phát triển nội bộ.

---

## Phát hành phiên bản

### v0.36.0-nightly.20260406.15298b28c
| Thuộc tính | Nội dung |
|:---|:---|
| Thời gian phát hành | 2026-04-06 |
| Đóng góp cốt lõi | @jacob314, @alisa-alisa |

**Điểm nổi bật cập nhật:**
- **Tối ưu hóa trình tuần tự Terminal** ([#24485](https://github.com/google-gemini/gemini-cli/pull/24485)) — Tối ưu hóa hiệu suất tuần tự đầu cuối, nâng cao hiệu quả hiển thị đầu ra quy mô lớn
- **Tự động cấu hình bộ nhớ** ([#24474](https://github.com/google-gemini/gemini-cli/pull/24474)) — Tự động cấu hình bộ nhớ, giảm gánh nặng điều chỉnh thủ công
- **Chất lượng mã**: Sửa lỗi biến không sử dụng của khối catch (tuân thủ chế độ nghiêm ngặt của TypeScript)

---

## Issues cộng đồng nóng

| # | Tiêu đề | Trạng thái | Ưu tiên | Mức độ phổ biến của cộng đồng | Phân tích cốt lõi |
|:---|:---|:---|:---|:---|:---|
| [#21847](https://github.com/google-gemini/gemini-cli/issues/21847) | Hook BeforeModel bỏ qua việc ghi đè `llm_request.model` | 🔴 MỞ | P1 | 💬 15 | **Lỗi cốt lõi của hệ thống Hook** : Nhà phát triển không thể chuyển đổi động mô hình trong hook BeforeModel, ảnh hưởng nghiêm trọng đến quy trình làm việc đa mô hình. Cộng đồng đã cung cấp ví dụ tái hiện tối thiểu, chờ sửa chữa chính thức. |
| [#24734](https://github.com/google-gemini/gemini-cli/issues/24734) | OAuth thành công nhưng trả về 403 PERMISSION_DENIED | 🔴 MỞ | P1 | 💬 4, 👍 3 | **Chặn onboarding người dùng mới**: Người dùng đăng ký Google AI Pro vẫn bị từ chối xác thực sau khi hoàn thành OAuth, nghi ngờ do độ trễ đồng bộ hóa trạng thái đăng ký hoặc vấn đề cấu hình scope. |
| [#16060](https://github.com/google-gemini/gemini-cli/issues/16060) | Sự cố đóng băng sau khi cập nhật phiên bản 0.23 (đóng băng không phản hồi) | 🔴 MỞ | P1 | 💬 22, 👍 4 | **Vấn đề tồn đọng lâu dài**: Chưa được giải quyết kể từ báo cáo tháng 1, người dùng phản hồi bị đóng băng ngẫu nhiên khi khôi phục hội thoại sau khi nâng cấp, Ctrl+C không có tác dụng. Số lượng bình luận cao phản ánh ảnh hưởng rộng rãi. |
| [#16369](https://github.com/google-gemini/gemini-cli/issues/16369) | Tải blob lớn MCP gây ra sự cố | 🟢 ĐÃ ĐÓNG | P2 | 💬 12 | **Sửa chữa cốt lõi hệ sinh thái MCP**: Sự cố khi tải các tài nguyên lớn như PDF arXiv, đã đóng nhưng các vấn đề xử lý tài nguyên tương tự vẫn đáng được theo dõi. |
| [#18302](https://github.com/google-gemini/gemini-cli/issues/18302) | `security.environmentVariableRedaction.allowed` không hoạt động | 🟢 ĐÃ ĐÓNG | P1 | 💬 5, 👍 2 | **Lỗ hổng chính sách bảo mật**: Danh sách trắng biến môi trường toàn cục bị bỏ qua, đã sửa chữa nhanh chóng, thể hiện khả năng phản hồi bảo mật. |
| [#20394](https://github.com/google-gemini/gemini-cli/issues/20394) | Chuỗi suy luận bị lộ + vòng lặp vô hạn khi tải ảnh lên | 🔴 MỞ | - | 💬 4 | **Hành vi bất thường của Agent**: Khối `thought` nội bộ bị lộ ra giao diện người dùng và kích hoạt vòng lặp vô hạn, ảnh hưởng đến trải nghiệm đa phương thức. |
| [#23264](https://github.com/google-gemini/gemini-cli/issues/23264) | Không thể chuyển đổi mô hình sau khi hết hạn ngạch gemini-3-flash-preview | 🔴 MỞ | P2 | 💬 3 | **Lỗi quản lý hạn ngạch**: Chỉ định rõ ràng các mô hình khác vẫn bị chặn bởi hạn ngạch flash, logic chuyển đổi mô hình quá chặt chẽ với kiểm tra hạn ngạch. |
| [#12446](https://github.com/google-gemini/gemini-cli/issues/12446) | Không nhận dạng được đăng ký Google AI Pro, bị kẹt ở mô hình auto | 🔴 MỞ | P2 | 💬 3, 👍 3 | **Vấn đề cũ về nhận dạng đăng ký**: Chạy trong terminal VS Code không thể phát hiện đăng ký Code Assist, tạo thành nhóm vấn đề với #24734. |
| [#15051](https://github.com/google-gemini/gemini-cli/issues/15051) | Hỗ trợ Alt+V để dán ảnh trực tiếp | 🔴 MỞ | - | 💬 3, 👍 9 | **Yêu cầu chức năng có số phiếu cao nhất**: Tương đương với Codex CLI và Claude Code về truyền ảnh trực tiếp từ bảng tạm, số 👍 cao nhất, cải thiện UX rõ ràng. |
| [#24796](https://github.com/google-gemini/gemini-cli/issues/24796) | Rò rỉ tay cầm PTY trên macOS | 🔴 MỞ | - | 💬 2 | **Rò rỉ tài nguyên**: `lsof` hiển thị một tiến trình giữ 498 tay cầm PTY, tiềm ẩn nguy cơ ổn định khi chạy trong thời gian dài. |

---

## Tiến độ PR quan trọng

| # | Tiêu đề | Trạng thái | Thay đổi cốt lõi | Đánh giá ảnh hưởng |
|:---|:---|:---|:---|:---|
| [#24784](https://github.com/google-gemini/gemini-cli/pull/24784) | Sửa lỗi truyền cuối cùng của việc ghi đè mô hình Hook BeforeModel | 🔵 MỞ | Hoàn thiện sửa chữa tiếp theo của #22326, đảm bảo việc ghi đè `llm_request.model` có hiệu lực thực tế | **Sửa chữa quan trọng cho Issue #21847**, nâng cao tính toàn vẹn của hệ thống Hook |
| [#24758](https://github.com/google-gemini/gemini-cli/pull/24758) | Quy tắc chiến lược ép buộc trường `modes` (Phá vỡ) | 🔵 MỞ | Các chiến lược không chỉ định `modes` sẽ tải lỗi, ngăn chặn hành vi bất ngờ của việc áp dụng toàn bộ chế độ mặc định | Gia cố bảo mật cấp doanh nghiệp, cần chú ý đến chi phí di chuyển |
| [#24752](https://github.com/google-gemini/gemini-cli/pull/24752) | Tách biệt kiến trúc ContextManager và Sidecar | 🔵 MỞ | Giới thiệu mô-đun quản lý ngữ cảnh độc lập, sửa lỗi hàng loạt vấn đề #24751 | Tái cấu trúc kiến trúc Agent, đặt nền móng cho quy trình làm việc phức tạp |
| [#24489](https://github.com/google-gemini/gemini-cli/pull/24489) | Thống nhất công cụ Subagent thành `invoke_agent` | 🔵 MỞ | Hợp nhất các công cụ Agent chuyên dụng, trình chiến lược hỗ trợ bí danh công cụ ảo | Đơn giản hóa chuỗi công cụ, nâng cao tính nhất quán của chiến lược |
| [#24793](https://github.com/google-gemini/gemini-cli/pull/24793) | Lịch sử mở rộng theo chủ đề chọn lọc + mở theo nhấp chuột | 🔵 MỞ | Chuyển đổi tiêu đề theo chủ đề riêng lẻ bằng chuột, giữ lại Ctrl+O toàn cục | Tinh chỉnh trải nghiệm tương tác, thân thiện với người dùng màn hình lớn |
| [#24664](https://github.com/google-gemini/gemini-cli/pull/24664) | Hỗ trợ yêu cầu đầu vào máy chủ ACP | 🔵 MỞ | Máy khách ACP có thể tự chủ phản hồi `ask_user` và `exit_plan_mode` | Năng lực cốt lõi cho các tình huống không tương tác/tự động hóa |
| [#24795](https://github.com/google-gemini/gemini-cli/pull/24795) | Sửa lỗi logic phát hiện tmux | 🔵 MỞ | Sửa lỗi phát hiện chế độ bộ đệm thay thế, loại bỏ cảnh báo sai | Sửa lỗi trải nghiệm người dùng tmux |
| [#24457](https://github.com/google-gemini/gemini-cli/pull/24457) | Đánh giá và sửa lỗi hành vi sao chép không an toàn | 🔵 MỞ | Đối với vấn đề tạo mã Agent #22863, tăng cường đánh giá hành vi | Đảm bảo chất lượng mã AI tạo ra |
| [#24677](https://github.com/google-gemini/gemini-cli/pull/24677) | Tối ưu hóa định dạng đầu ra công cụ chế độ nén | 🔵 MỞ | Công cụ tìm kiếm/đọc dòng đơn, công cụ danh sách thống nhất cách diễn đạt | Cân bằng mật độ thông tin và khả năng đọc |
| [#24794](https://github.com/google-gemini/gemini-cli/pull/24794) | Cô lập các phiên bản proxy trình duyệt đồng thời | 🔵 MỞ | Khắc phục xung đột điều hướng trang khi gọi song song `browser_agent` | Ổn định tự động hóa đa tác vụ trình duyệt |

---

## Xu hướng yêu cầu chức năng

Dựa trên phân tích 50 Issues hoạt động, trọng tâm cộng đồng thể hiện các cấp độ sau:

```
Đợt 1: Hệ thống xác thực và đăng ký (4 Issues liên quan)
├── Nhận dạng đăng ký Google AI Pro / Code Assist không đáng tin cậy
├── Quy trình OAuth và ranh giới quyền
└── Hạn ngạch mô hình và chiến lược chuyển đổi

Đợt 2: Hành vi và độ tin cậy của Agent (5 Issues liên quan)
├── Chuỗi suy luận / rò rỉ trạng thái nội bộ
├── Vòng lặp vô hạn và đóng băng
├── Chế độ tạo mã không an toàn
└── Sự phối hợp của Agent con và chế độ phê duyệt

Đợt 3: Trải nghiệm đa phương thức và tương tác (3 Issues liên quan)
├── Dán ảnh trực tiếp từ bảng tạm (số phiếu cao)
├── Tối ưu hóa hiển thị ảnh đầu cuối
└── Tương thích phiên SSH/từ xa

Đợt 4: Quản trị cấp doanh nghiệp (4 Issues liên quan)
├── Đơn giản hóa TOML của trình chiến lược
├── Kiểm soát an toàn biến môi trường
└── Tích hợp ổn định hệ sinh thái MCP
```

---

## Điểm thu hút sự chú ý của nhà phát triển

### 🔴 Điểm đau tần suất cao

| Điểm đau | Biểu hiện điển hình | Vấn đề liên quan |
|:---|:---|:---|
| **Nhận dạng trạng thái đăng ký không đáng tin cậy** | Người dùng Pro bị hạ cấp xuống mô hình auto, hoặc 403 sau OAuth | #12446, #24734 |
| **Hệ thống Hook chưa hoàn thiện** | Ghi đè BeforeModel không hoạt động, khả năng điểm mở rộng bị hạn chế | #21847, #24784 |
| **Sự kết hợp giữa hạn ngạch và chuyển đổi mô hình** | Hạn ngạch một mô hình bị cạn kiệt chặn toàn bộ chức năng, không thể giảm cấp duyên dáng | #23264 |
| **Hành vi mất kiểm soát của Agent** | Vòng lặp vô hạn, rò rỉ suy luận, đóng băng không phản hồi | #20394, #16060, #24749 |

### 🟡 Mong đợi cải thiện

1. **Tích hợp sâu IDE**：vấn đề nhận dạng đăng ký trong terminal VS Code kéo dài nhiều tháng, cần ưu tiên giải quyết
2. **Quy trình làm việc bảng tạm**：dán ảnh Alt+V (#15051) là UX đã được Codex/Claude xác minh
3. **Chiến lược như mã**：đơn giản hóa quy tắc TOML (#24798) phản ánh nhu cầu về khả năng bảo trì của người dùng doanh nghiệp
4. **Quản lý tài nguyên**：rò rỉ PTY (#24796), tải lớn MCP (#16369) và các chi tiết ổn định khác

### 💡 Tín hiệu cộng đồng

- **Người dùng doanh nghiệp**：quan tâm đến tính rõ ràng của trình chiến lược và giá trị mặc định an toàn (bắt buộc `modes`)
- **Tình huống tự động hóa**：nhu cầu về đầu vào máy chủ ACP (#24664), đầu ra không tương tác (#24566) tăng lên
- **Nhà phát triển đa phương thức**：mật độ vấn đề của liên kết tải ảnh cao hơn tương tác văn bản

---

*Nguồn dữ liệu: google-gemini/gemini-cli | Chu kỳ thống kê: 2026-04-06 đến 2026-04-07*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# Nhật báo cộng đồng GitHub Copilot CLI | 2026-04-07

---

## 1. Tổng quan hôm nay

GitHub đã phát hành phiên bản chính thức **v1.0.19** và phiên bản thử nghiệm vào ngày hôm qua, tập trung vào việc hoàn thiện khả năng ổn định trạng thái MCP (Model Context Protocol) và khả năng quan sát; cộng đồng Issues đã trải qua một đợt dọn dẹp lớn, 48/50 Issues đã được đóng, cho thấy nhóm bảo trì đang đẩy nhanh việc hoàn thành các vấn đề tồn đọng cuối năm 2025.

---

## 2. Phát hành phiên bản

### v1.0.19 (Chính thức) | 2026-04-06
- **Ổn định trạng thái MCP**: `/mcp enable` và `/mcp disable` hiện duy trì giữa các hội thoại
- **Tăng cường OpenTelemetry**: Span Agent con sử dụng loại `INTERNAL`; Span trò chuyện bổ sung thuộc tính `github.copilot.time_to_first_chunk` (chỉ truyền dữ liệu luồng)
- **Sửa lỗi Plugin**: Các tập lệnh hook plugin thiếu quyền thực thi hiện có thể chạy chính xác

### v1.0.19-0 (Thử nghiệm)
- **Tối ưu hóa kết nối IDE**: Bỏ qua kết nối tự động khi hội thoại đã bị chiếm bởi máy khách khác
- **Cải thiện tương tác**: Dòng thời gian lệnh dấu gạch chéo hiện hiển thị tên lệnh (ví dụ: "Review", "Plan")
- **Sửa lỗi macOS**: Vấn đề quyền tập lệnh hook plugin đã được giải quyết triệt để trên macOS

---

## 3. Issues cộng đồng nóng

| Ưu tiên | Issue | Trạng thái | Điểm nhấn cốt lõi |
|:---|:---|:---|:---|
| 🔴 Cao | [#679](https://github.com/github/copilot-cli/issues/679) Phát hiện máy chủ MCP cục bộ không hoạt động | **ĐÃ ĐÓNG** | Vấn đề quay lại từ v0.0.359, 18 bình luận phản ánh thách thức về tính ổn định ban đầu của hệ sinh thái MCP; cộng đồng kêu gọi thêm lệnh chẩn đoán trạng thái |
| 🔴 Cao | [#713](https://github.com/github/copilot-cli/issues/713) Lệnh tùy chỉnh không tải tự động | **ĐÃ ĐÓNG** | Tài liệu và hành vi thực tế không khớp, 18 👍 cho thấy tính nhất quán của hệ thống cấu hình là điểm đau tần suất cao |
| 🟡 Trung bình | [#566](https://github.com/github/copilot-cli/issues/566) Thiếu cơ chế cập nhật tự động | **ĐÃ ĐÓNG** | 10 👍, nhà phát triển mệt mỏi với việc kiểm tra cập nhật thủ công, mong đợi trình cập nhật tích hợp hoặc lời nhắc khởi động |
| 🟡 Trung bình | [#475](https://github.com/github/copilot-cli/issues/475) Hỗ trợ Terminal WSL | **ĐÃ ĐÓNG** | Sự mỉa mai khi sản phẩm của Microsoft không hỗ trợ WSL của riêng mình, 8 bình luận + yêu cầu chế độ Vim |
| 🟡 Trung bình | [#599](https://github.com/github/copilot-cli/issues/599) Kiểm soát chính sách MCP cấp doanh nghiệp | **ĐÃ ĐÓNG** | Điểm nghẽn triển khai cấp doanh nghiệp, cần danh sách trắng MCP cấp tổ chức để ép buộc chính sách |
| 🟡 Trung bình | [#714](https://github.com/github/copilot-cli/issues/714) Tìm kiếm lịch sử hội thoại | **ĐÃ ĐÓNG** | 9 👍, lưu trữ JSONL nhưng không có khả năng truy vấn, cản trở tình huống sử dụng lại kiến thức |
| 🟡 Trung bình | [#547](https://github.com/github/copilot-cli/issues/547) / [#562](https://github.com/github/copilot-cli/issues/562) Vấn đề độ tương phản chủ đề | **ĐÃ ĐÓNG** | Thảm họa về khả năng đọc với văn bản trắng trên nền xám, ảnh hưởng người dùng Mac, trải nghiệm cơ bản về khả năng truy cập trực quan |
| 🟢 Thấp | [#679](https://github.com/github/copilot-cli/issues/679) Đọc cấu hình Shell người dùng | **ĐÃ ĐÓNG** | 5 👍, công cụ Bash bỏ qua `~/.bashrc` dẫn đến mất hiệu lực bí danh/hàm, sự cân bằng giữa bảo mật và tiện lợi |
| 🟢 Thấp | [#528](https://github.com/github/copilot-cli/issues/528) Xác nhận ghi tệp lặp lại | **ĐÃ ĐÓNG** | Cùng một bản xem trước hiện lên hai lần, ma sát tương tác tuy nhỏ nhưng tần suất cao |
| 🟢 Thấp | [#844](https://github.com/github/copilot-cli/issues/844) Chuyển đổi mô hình tạm thời cho một yêu cầu | **MỞ** | Nhu cầu về luồng làm việc linh hoạt với Claude 4.5 hàng ngày + Opus theo yêu cầu, tránh chi phí chuyển đổi cấu hình toàn cục |

---

## 4. Tiến độ PR quan trọng

> **Không có cập nhật PR mới hôm nay** (0 mục)

Nhóm bảo trì tập trung vào việc dọn dẹp Issue và phát hành phiên bản, hoạt động hợp nhất mã tạm dừng.

---

## 5. Xu hướng yêu cầu chức năng

Dựa trên phân tích 50 Issues, trọng tâm cộng đồng thể hiện bốn hướng chính:

| Xu hướng | Issue đại diện | Mức độ phổ biến |
|:---|:---|:---|
| **Hoàn thiện hệ sinh thái MCP** | #679, #599, #693 | 🔥🔥🔥 Phát hiện máy chủ, chính sách doanh nghiệp, cơ chế phơi bày công cụ đều đang lặp lại nhanh chóng |
| **Thống nhất hệ thống cấu hình** | #713, #670, #688 | 🔥🔥🔥 Thứ tự tải lệnh, phân cấp cấu hình toàn cục/cục bộ, kế thừa môi trường Shell |
| **Trải nghiệm gốc đầu cuối** | #475, #540, #660, #547 | 🔥🔥 Hỗ trợ WSL, ràng buộc phím, nhập nhiều dòng, khả năng truy cập chủ đề |
| **Tình huống doanh nghiệp/bảo mật** | #599, #707, #688 | 🔥🔥 Kiểm soát chính sách, bỏ qua lệnh (không chấm dứt), tương thích trình bao bọc bảo mật |

---

## 6. Điểm thu hút sự chú ý của nhà phát triển

### Điểm đau tần suất cao
1. **Tính xác định của "Cấu hình như mã"** — Thứ tự tải tệp lệnh, trạng thái bật MCP, v.v. cần phải hoàn toàn nhất quán với tài liệu (#713, #679)
2. **Tính nhất quán của đầu cuối đa nền tảng** — Che phủ kém ở các tình huống biên như WSL, phím Linux, quyền macOS (#475, #540, #659)
3. **Tính ổn định hội thoại dài** — Mô hình treo, gián đoạn luồng, đoạn cuối bị cắt cụt ảnh hưởng đến quy trình làm việc sâu (#548, #574, #641)

### Kỳ vọng chưa được đáp ứng
- **Chế độ YOLO** (#458): Quy trình làm việc tự động hoàn toàn, cộng đồng sử dụng meme để bày tỏ nhu cầu mạnh mẽ
- **Điều phối mô hình linh hoạt** (#844, #684): Đa mô hình Agent đơn, chuyển đổi tạm thời yêu cầu đơn, tránh chi phí cấu hình toàn cục
- **Khả năng truy vấn hội thoại** (#714): Kết tủa kiến thức và tái sử dụng hội thoại lịch sử

---

*Nhật báo được tạo dựa trên dữ liệu công khai của github.com/github/copilot-cli*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Nhật báo cộng đồng Kimi Code CLI | 2026-04-07

---

## 1. Tổng quan hôm nay

Hoạt động cộng đồng hôm nay ổn định, không có phiên bản mới phát hành. Trọng tâm cốt lõi tập trung vào **sửa lỗi ổn định hệ sinh thái MCP** và **tranh cãi tái cấu trúc kiến trúc** — he-yufeng liên tục gửi hai PR sửa lỗi quan trọng để giải quyết lỗi kết nối MCP và vấn đề định dạng tin nhắn công cụ; đồng thời, một PR tái cấu trúc toàn diện mã nguồn từ Python sang Bun + TypeScript + React Ink đã gây ra thảo luận về lộ trình kỹ thuật. Vấn đề phản hồi của người dùng về trải nghiệm dán trên nền tảng Windows và sự phù hợp chủ đề đầu cuối Linux tiếp tục nhận được phản hồi.

---

## 2. Phát hành phiên bản

**Không có phiên bản mới phát hành** (Phiên bản mới nhất vẫn là v1.30.0)

---

## 3. Issues cộng đồng nóng

| # | Tiêu đề | Trạng thái | Mức độ quan trọng | Phân tích |
|---|------|------|--------|------|
| [#781](https://github.com/MoonshotAI/kimi-cli/issues/781) | Ctrl+V không dán được ảnh trong Windows Terminal, đề xuất Alt+V làm tùy chọn thay thế | 🔵 MỞ | ⭐⭐⭐⭐ | **Điểm đau trải nghiệm đa nền tảng**. Chặn cấp hệ thống Ctrl+V của Windows Terminal làm mất chức năng dán ảnh cốt lõi, ảnh hưởng đến quy trình làm việc chính của người dùng Windows. Cộng đồng đã có 2 👍, cần chính thức cung cấp giải pháp thụt lùi phím tắt dành riêng cho nền tảng. |
| [#1691](https://github.com/MoonshotAI/kimi-cli/issues/1691) | Bộ nhớ hội thoại tăng dần: nén ngữ cảnh chi phí bằng không | 🔵 MỞ | ⭐⭐⭐⭐⭐ |