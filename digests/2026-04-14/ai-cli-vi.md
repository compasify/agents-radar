# Công cụ AI CLI Cộng đồng cập nhật hàng ngày 2026-04-14

> Thời gian tạo: 2026-04-14 00:16 UTC | Công cụ được bao phủ: 8

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

# Báo cáo phân tích so sánh ngang hệ sinh thái công cụ AI CLI | 2026-04-14

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái công cụ AI CLI hiện đã bước vào **giai đoạn cạnh tranh kỹ thuật sâu sắc**: Các sản phẩm dẫn đầu (Claude Code, OpenAI Codex) tập trung vào việc tinh chỉnh hiệu suất mở rộng IDE, hệ sinh thái MCP và quản trị cấp doanh nghiệp; Google Gemini CLI và Kimi CLI đang tăng tốc bám đuổi, lần lượt tạo dựng sự khác biệt về triển khai ngoại tuyến và trải nghiệm trong bối cảnh tiếng Trung; GitHub Copilot CLI dựa vào hệ sinh thái nhưng đối mặt với khủng hoảng niềm tin về tính minh bạch trong thanh toán; các công cụ mới nổi như OpenCode, Pi, Qwen Code đang xâm nhập thị trường ngách bằng sự đổi mới kiến trúc (hiệu ứng/kết xuất TUI/phát hiện vòng lặp) và hỗ trợ mô hình cục bộ. Nhìn chung, **"hiệu suất ổn định + chi phí có thể kiểm soát + nhất quán đa nền tảng"** đã trở thành bộ ba quyết định cốt lõi cho các nhà phát triển khi lựa chọn công cụ.

---

## 2. So sánh mức độ hoạt động của từng công cụ

| Công cụ | Phát hành hôm nay | Mức độ nóng Issue | Mức độ hoạt động PR | Đặc điểm chính |
|:---|:---|:---|:---|:---|
| **Claude Code** | Phiên bản kép v2.1.104 / v2.1.105 | 🔥🔥🔥 Cực cao. Bài đăng về suy giảm mô hình với 395 bình luận/1717👍, vấn đề gói VM Cowork 10GB với 60 bình luận/148👍 | 10 PR đang hoạt động, bao gồm hệ thống hook, MCP OAuth, hướng dẫn bảo mật, manifest plugin | Tốc độ lặp lại nhanh nhất, tranh cãi và xây dựng cộng đồng song hành |
| **OpenAI Codex** | rust-v0.121.0-alpha.4/6 | 🔥🔥🔥 Cực cao. Bài đăng về vấn đề đốt token với 530 bình luận, cụm CPU tăng vọt của tiện ích mở rộng VS Code (#15764/#16849/#15393) | 10 PR đang hoạt động, sửa lỗi hiệu suất IDE, hook quyền MCP, giọng nói thời gian thực, nén tiền tố | Phản hồi nhanh chóng ở phía kỹ thuật, suy giảm hiệu suất trở thành tâm điểm dư luận lớn nhất |
| **Gemini CLI** | Bản vá v0.37.2 | 🔥🔥 Trung bình cao. Chặn khởi động ngoại tuyến RipGrep (nóng nhất trong ngày), hạ cấp chế độ YOLO, lỗi ghi nhớ quyền | 10 PR đang hoạt động, đóng gói SEA, sửa lỗi YOLO, kiểm soát đo lường từ xa, giọng nói thời gian thực | Phản hồi sửa lỗi nhanh nhạy, bối cảnh triển khai ngoại tuyến của doanh nghiệp ưu tiên tăng đột biến |
| **GitHub Copilot CLI** | v1.0.25 | 🔥🔥 Trung bình cao. Yêu cầu Premium black hole (#2591, 25 bình luận) tiếp tục lan truyền, đầu vào đa phương thức, thảo luận tích cực về quyền của doanh nghiệp | **Không có PR mới trong 24 giờ** | Thảo luận sôi nổi nhưng đầu ra kỹ thuật thấp, phụ thuộc vào quán tính hệ sinh thái GitHub |
| **Kimi CLI** | v1.33.0 / v1.32.0 | 🔥🔥 Trung bình. Chiến lược hiển thị Thinking phân kỳ (3 Issue đối lập), quản lý phiên, lỗi API Win11 400 | 10 PR đang hoạt động, xóa phiên, Web hóa YOLO, định tuyến nhật ký MCP, loại bỏ trùng lặp FetchURL | Thay đổi sản phẩm gây xung đột tâm trí người dùng, tính linh hoạt cấu hình cần được cải thiện khẩn cấp |
| **OpenCode** | Không có | 🔥🔥 Trung bình cao. Lỗi thanh toán Copilot (215 bình luận/79👍) trở thành tâm điểm nóng nhất, hội chứng compaction, cụm vấn đề Windows | 10 PR đang hoạt động, tái cấu trúc kiến trúc Effect, dịch vụ job shell, tải lại nóng, bảo mật cấu hình doanh nghiệp | Tiến hóa kiến trúc mạnh mẽ, áp lực ổn định ngắn hạn |
| **Pi** | v0.67.0 / v0.67.1 | 🔥🔥 Trung bình cao. Đóng 30+ Issues/PRs dày đặc, nhấp nháy TUI, tiến trình mồ côi, hỗ trợ mô hình cục bộ là cốt lõi | 10 PR đang hoạt động, tối ưu hóa kết xuất TUI, giao thức Kitty, Bedrock Bearer Token, Ollama/LM Studio sẵn sàng sử dụng | Hiệu quả bảo trì cực cao, định vị chủ nghĩa tối ưu TUI rõ ràng |
| **Qwen Code** | v0.14.4 | 🔥🔥 Trung bình. Phát hiện vòng lặp, hiệu suất khởi động, tiếng gọi hỗ trợ plugin JetBrains, tối ưu hóa trải nghiệm CJK | 10 PR đang hoạt động, fork subagent, ngắt vòng lặp, bộ phân tích khởi động, hệ thống ghi nhớ tự động, sửa lỗi VS Code bị treo | Cơ sở người dùng tiếng Trung lớn, hệ sinh thái IDE và độ tin cậy của proxy là điểm yếu |

> **Lưu ý**: Mức độ nóng Issue là sự kết hợp của số bình luận, số👍 và mức độ hoạt động mới trong ngày; Số PR là các PR quan trọng được liệt kê rõ ràng trong báo cáo.

---

## 3. Các hướng chức năng được quan tâm chung

| Hướng chức năng | Công cụ liên quan | Yêu cầu cụ thể |
|:---|:---|:---|
| **💰 Minh bạch chi phí và hạn ngạch** | Claude Code, OpenAI Codex, GitHub Copilot CLI, OpenCode | Token yêu cầu cùng một yêu cầu tăng vọt (Claude #46917), tiêu thụ 60-100 yêu cầu Premium cho mỗi phiên (Copilot #2591 / OpenCode #8030), đốt token quá nhanh (Codex #14593). Người dùng yêu cầu **mô tả ảnh hưởng chi phí kèm theo bản cập nhật, bảng điều khiển sử dụng thời gian thực, giới hạn ngữ cảnh có thể định cấu hình và ngưỡng nén** |
| **🖥️ Trải nghiệm nền tảng Windows** | Claude Code, OpenAI Codex, Gemini CLI, Kimi CLI, OpenCode | Độ trễ đầu vào 5 giây (Claude #39060), lỗi kiểm tra va chạm UI (Codex #17596), sự cố ký tự ổ đĩa tạm thời (Gemini #25216), ký tự lạ SSH (Kimi #24202 / Gemini #24202), chặn Defender (OpenCode #22300). **Windows vẫn bị coi là "công dân hạng hai" một cách phổ biến** |
| **🔌 Ổn định hệ sinh thái MCP** | Claude Code, OpenAI Codex, Gemini CLI, Kimi CLI, OpenCode | Token OAuth không thể lưu trữ lâu dài (Claude #47185 / PR #47554, Codex liên quan), cửa sổ bật lên phê duyệt quá mức (Codex #13476, Gemini #24916), làm ô nhiễm nhật ký TUI của MCP (Kimi #1637), lỗi thời MCP cục bộ của Windows (OpenCode). **Lớp xác thực và lớp kết nối là những phần yếu nhất hiện tại** |
| **🧠 Chất lượng mô hình và niềm tin vào năng lực kỹ thuật** | Claude Code, Kimi CLI, OpenCode | Suy giảm các nhiệm vụ kỹ thuật phức tạp sau bản cập nhật tháng 2 (Claude #42796, 395 bình luận/1717👍), tuân thủ prompt hệ thống kém (Kimi #2973), Opus 4.6 không hỗ trợ prefill (OpenCode #13768). Người dùng kêu gọi **phiên bản mô hình có thể ghim, chuyển đổi "chế độ kỹ thuật", mô tả thay đổi mô hình minh bạch hơn** |
| **🛠️ Hiệu suất mở rộng TUI/IDE và tương tác** | OpenAI Codex, Pi, Kimi CLI, Qwen Code | CPU tăng vọt/quá nhiệt của tiện ích mở rộng VS Code (cụm vấn đề Codex), nhấp nháy TUI (Pi #3094), rung lắc mạnh của thiết bị đầu cuối (Qwen #3144), treo đầu vào hội thoại dài (Qwen PR #2550). **Khoảng cách trải nghiệm từ "có thể sử dụng" đến "mượt mà" quyết định tỷ lệ giữ chân người dùng** |

---

## 4. Phân tích định vị khác biệt

| Công cụ | Trọng tâm chức năng | Người dùng mục tiêu | Đặc điểm lộ trình kỹ thuật |
|:---|:---|:---|:---|
| **Claude Code** | Luồng làm việc Agent cấp doanh nghiệp, cộng tác Cowork, mở rộng Hook/Plugin | Nhóm phát triển doanh nghiệp vừa và lớn, kỹ sư theo đuổi tự động hóa sâu sắc | Chủ yếu là mã nguồn đóng, hệ thống hook trưởng thành nhất, nhưng việc thích ứng Windows và minh bạch chi phí còn chậm |
| **OpenAI Codex** | Tích hợp gốc IDE (VS Code), giọng nói thời gian thực, quản lý ngữ cảnh nén tiền tố | Nhà phát triển đã có gói OpenAI, lập trình viên coi trọng trải nghiệm IDE | Tích hợp mạnh mẽ với tiện ích mở rộng VS Code, cốt lõi Rust + lớp ngoài TypeScript, tốc độ phản hồi kỹ thuật cực nhanh |
| **Gemini CLI** | Triển khai ngoại tuyến/doanh nghiệp, chế độ tự động YOLO, giọng nói đa phương thức thời gian thực | Người dùng hệ sinh thái Google Cloud, doanh nghiệp có yêu cầu nội bộ/tuân thủ | Thực thi đơn tệp SEA, tăng tốc giám sát tệp, kiểm soát đo lường từ xa chi tiết, mức độ thân thiện với doanh nghiệp tăng |
| **GitHub Copilot CLI** | Tích hợp registry MCP, di chuyển gói Copilot liền mạch, quản trị cấp tổ chức | Người dùng Copilot đã có gói GitHub, quản trị viên tổ chức doanh nghiệp | Tích hợp sâu vào hệ sinh thái GitHub, nhưng tốc độ đổi mới chậm lại, chiến lược thanh toán gây khủng hoảng niềm tin |
| **Kimi CLI** | Trải nghiệm nhà phát triển tiếng Trung, tối ưu hóa thiết bị đầu cuối CJK, chế độ YOLO kép Web/CLI | Nhà phát triển Trung Quốc, người dùng API Moonshot | Tinh chỉnh kỹ lưỡng bối cảnh tiếng Trung, nhưng hệ sinh thái plugin IDE (đặc biệt là JetBrains) và tính linh hoạt của cấu hình tư duy rõ ràng là tụt hậu |
| **OpenCode** | Truy cập thống nhất nhiều nhà cung cấp (Copilot/Azure/Cloudflare), kiến trúc Effect, khả năng quan sát | Kỹ sư công nghệ cao có nhu cầu chuyển đổi mô hình, nhóm DevOps doanh nghiệp | Mạnh dạn áp dụng tái cấu trúc cốt lõi bằng Effect-TS, khả năng bảo trì lâu dài mạnh mẽ, nhưng nợ ngắn hạn về compaction và ổn định Windows |
| **Pi** | Kết xuất TUI tối ưu, sẵn sàng sử dụng mô hình cục bộ, trải nghiệm thiết bị đầu cuối gốc | Người dùng thiết bị đầu cuối chuyên sâu, nhà phát triển nhạy cảm về quyền riêng tư, người yêu thích mô hình cục bộ | Tự phát triển công cụ kết xuất TUI, hỗ trợ đầy đủ các giao thức thiết bị đầu cuối nâng cao như Kitty/OSC 8, các vấn đề cấp hệ thống như tiến trình mồ côi cần được giải quyết |
| **Qwen Code** | Tích hợp gốc mô hình lớn tiếng Trung, phát hiện và ngắt vòng lặp, hệ thống ghi nhớ tự động | Nhà phát triển Trung Quốc, người dùng API Qwen, nhóm tìm kiếm giải pháp thay thế Claude | Đổi mới kiến trúc Agent như ghi nhớ tự động/fork subagent đang hoạt động tích cực, nhưng công cụ cơ bản (chỉnh sửa) thường xuyên quay trở lại, biến động ổn định lớn |

---

## 5. Mức độ nóng của cộng đồng và sự trưởng thành

### Phân loại mức độ nóng của cộng đồng

| Phân loại | Công cụ | Cơ sở đánh giá |
|:---|:---|:---|
| **🔥 Phân loại 1 (Mức độ hoạt động cực cao)** | Claude Code, OpenAI Codex | Số bình luận Issue đơn lẻ có thể đạt 395/530, 👍 vượt ngưỡng nghìn/hai trăm; cập nhật phiên bản hàng ngày/hai lần mỗi ngày; phản hồi kỹ thuật PR trong vòng 24 giờ dày đặc |
| **🔥 Phân loại 2 (Mức độ hoạt động trung bình cao)** | Gemini CLI, OpenCode, Pi, GitHub Copilot CLI | Số bình luận Issue cốt lõi 20-215, có điểm nóng rõ ràng trong ngày; hoạt động PR hoặc hiệu quả bảo trì cao, nhưng âm lượng tổng thể nhỏ hơn hai công cụ dẫn đầu |
| **🔥 Phân loại 3 (Mức độ hoạt động trung bình)** | Kimi CLI, Qwen Code | Số lượng Issue/PR tương đương nhưng mức độ nóng của từng bài đăng thấp (thường <15 bình luận), cộng đồng chủ yếu là người dùng Trung Quốc, âm lượng quốc tế hóa có hạn |

### Đánh giá giai đoạn lặp lại

| Giai đoạn | Công cụ | Đặc điểm |
|:---|:---|:---|
| **Giai đoạn lặp lại nhanh chóng** | OpenAI Codex, Gemini CLI, Pi, Qwen Code | Số lượng bản phát hành/PR dày đặc, phạm vi chức năng mở rộng nhanh chóng, đồng thời đi kèm với nhiều lỗi hồi quy và tái cấu trúc kiến trúc |
| **Giai đoạn hoàn thiện trưởng thành** | Claude Code, Kimi CLI | Khung chức năng cốt lõi đã được xác định, tập trung vào việc đào sâu hook, tối ưu hóa chi phí, bổ sung đa nền tảng, nhưng tranh cãi về chất lượng mô hình gia tăng |
| **Giai đoạn tích hợp hệ sinh thái/Rủi ro đình trệ** | GitHub Copilot CLI | Dựa vào cơ sở người dùng GitHub, nhưng đầu ra kỹ thuật rõ ràng chậm lại (không có PR trong 24 giờ), tranh cãi về chiến lược thanh toán có thể ăn mòn niềm tin |
| **Giai đoạn đau đớn tái cấu trúc kiến trúc** | OpenCode | Việc di chuyển cốt lõi Effect mang lại kỳ vọng lợi ích lâu dài, nhưng các vấn đề ngắn hạn như compaction, thanh toán Copilot, thích ứng Windows tập trung lại |

---

## 6. Tín hiệu xu hướng đáng chú ý

| Tín hiệu xu hướng | Hỗ trợ dữ liệu | Giá trị tham khảo cho nhà phát triển |
|:---|:---|:---|
| **"Chi phí có thể kiểm soát" đã từ nice-to-have trở thành deal-breaker** | Claude #46917 (tăng 2 vạn token), Codex #14593 (530 bình luận đốt token), Copilot #2591 / OpenCode #8030 (60-100 yêu cầu Premium cho mỗi phiên) | Khi lựa chọn, bắt buộc phải xác minh **khả năng quan sát sử dụng** ( `/usage`, `/context`, đếm token thời gian thực) và **liệu bản cập nhật phiên bản có kèm theo mô tả ảnh hưởng chi phí hay không** |
| **Hệ sinh thái MCP bước vào vùng nước sâu "xác thực và lưu trữ lâu dài"** | Claude #47185, Codex PR #17563, Gemini #24916, Kimi #1637 | Máy chủ MCP "cài đặt được, cấu hình không tốt, đăng nhập lại mỗi lần" trở thành điểm nghẽn chung. Trước khi triển khai doanh nghiệp, cần đánh giá **khả năng lưu trữ lâu dài OAuth, mức độ chi tiết của chiến lược phê duyệt, khả năng gỡ lỗi quan sát của MCP** của công cụ mục tiêu |
| **Khoảng cách trải nghiệm Windows đang khuếch đại sự phân hóa lựa chọn công cụ** | 7 công cụ cùng xuất hiện Issue nóng liên quan đến Windows trong ngày | Nếu tỷ lệ nhà phát triển Windows trong nhóm cao, nên ưu tiên xem xét **Gemini CLI (đóng gói SEA thân thiện với doanh nghiệp)** hoặc **Kimi CLI (tối ưu hóa bối cảnh Trung Quốc)**, đồng thời thận trọng với các công cụ có cụm vấn đề Windows nặng như Claude Code, OpenCode |
| **"Lo lắng suy giảm năng lực mô hình" lan rộng sang tất cả các công cụ dẫn đầu** | Claude #42796 (1717👍), Kimi #2973, OpenCode #13768 | Đề xuất áp dụng chiến lược cấu hình **phiên bản mô hình có thể ghim** trong môi trường sản xuất, tránh tự động theo dõi các mô hình mới nhất; đồng thời thiết lập benchmark nội bộ để đánh giá định lượng ảnh hưởng của các bản cập nhật mô hình |
| **Hiệu suất kết xuất TUI tăng từ vấn đề biên sang năng lực cạnh tranh cốt lõi** | CPU tăng vọt/quá nhiệt của Codex, tối ưu hóa nhấp nháy TUI của Pi, rung lắc thiết bị đầu cuối của Qwen | Người dùng thiết bị đầu cuối chuyên sâu nên chú ý đến **chiến lược kết xuất luồng đầu ra, quản lý bộ nhớ hội thoại dài, liệu có hỗ trợ các giao thức thiết bị đầu cuối nâng cao (OSC 8, Kitty)** của công cụ hay không |
| **Nhu cầu về mô hình cục bộ và triển khai riêng tư từ giới công nghệ cao trở nên phổ biến** | Pi (Ollama/LM Studio sẵn sàng sử dụng), Gemini CLI (đóng gói ngoại tuyến SEA), kiến trúc OpenCode đa nhà cung cấp | Doanh nghiệp nhạy cảm về tuân thủ dữ liệu có thể đưa **Pi (thân thiện với mô hình cục bộ)** và **Gemini CLI (triển khai ngoại tuyến)** vào danh sách POC |

---

*Báo cáo dựa trên dữ liệu cộng đồng GitHub công khai của từng công cụ vào ngày 2026-04-14, quan điểm dùng để tham khảo quyết định kỹ thuật.*

---

## Báo cáo chi tiết từng công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Điểm nóng cộng đồng Claude Code Skills

> Nguồn dữ liệu: [anthropics/skills](https://github.com/anthropics/skills)

# Báo cáo điểm nóng cộng đồng Claude Code Skills
**Dữ liệu đến:** 2026-04-14 | **Nguồn:** github.com/anthropics/skills

---

## 1. Xếp hạng Skills Nóng (theo mức độ quan tâm của cộng đồng)

| Thứ hạng | Skill | Giới thiệu chức năng | Trạng thái | Liên kết |
|:---|:---|:---|:---|:---|
| 1 | **document-typography** | Kiểm soát chất lượng dàn trang tài liệu do AI tạo ra: ngăn chặn các vấn đề dàn trang phổ biến như cô đơn, cô độc, đánh số sai | Mở | [PR #514](https://github.com/anthropics/skills/pull/514) |
| 2 | **skill-quality-analyzer / skill-security-analyzer** | Siêu kỹ năng: đánh giá chất lượng 5 chiều và kiểm tra bảo mật cho Claude Skills | Mở | [PR #83](https://github.com/anthropics/skills/pull/83) |
| 3 | **frontend-design** | Phiên bản cải tiến thiết kế front-end: nâng cao độ rõ ràng của chỉ dẫn và khả năng thực thi trong một lần tương tác | Mở | [PR #210](https://github.com/anthropics/skills/pull/210) |
| 4 | **ODT creation & template filling** | Tạo tài liệu OpenDocument, điền mẫu và phân tích cú pháp ODT → HTML | Mở | [PR #486](https://github.com/anthropics/skills/pull/486) |
| 5 | **codebase-inventory-audit** | Kiểm tra toàn diện kho mã nguồn: xác định mã chết, tệp không sử dụng, thiếu tài liệu | Mở | [PR #147](https://github.com/anthropics/skills/pull/147) |
| 6 | **testing-patterns** | Mẫu kiểm thử toàn diện: triết lý kiểm thử, kiểm thử đơn vị, kiểm thử thành phần React, E2E | Mở | [PR #723](https://github.com/anthropics/skills/pull/723) |
| 7 | **shodh-memory** | Hệ thống ghi nhớ lâu dài liên tục giữa các phiên, duy trì ngữ cảnh dài hạn cho AI Agent | Mở | [PR #154](https://github.com/anthropics/skills/pull/154) |
| 8 | **record-knowledge** | Ghi lại các phát hiện của Claude Code dưới dạng Markdown có gắn thẻ, để lưu trữ kiến thức của nhóm | Mở | [PR #521](https://github.com/anthropics/skills/pull/521) |

> **Điểm nóng thảo luận:** Các kỹ năng liên quan đến chất lượng tài liệu (#514, #486) và công cụ siêu cấp cấp doanh nghiệp (#83, #147, #723) chiếm ưu thế, phản ánh cả nhu cầu kép của cộng đồng về "chuyên nghiệp hóa đầu ra AI" và "quản trị kỹ thuật".

---

## 2. Xu hướng nhu cầu cộng đồng (từ Issues)

| Hướng | Issue đại diện | Yêu cầu cốt lõi |
|:---|:---|:---|
| **Chia sẻ và quản trị doanh nghiệp** | [#228](https://github.com/anthropics/skills/issues/228) | Chia sẻ Skill trực tiếp trong tổ chức, thay thế quy trình tải xuống-tải lên thủ công tốn kém |
| **Ranh giới an toàn và tin cậy** | [#492](https://github.com/anthropics/skills/issues/492) | Skill cộng đồng giả mạo không gian tên `anthropic/`, cần cơ chế phân phối tin cậy chính thức rõ ràng |
| **Khả năng tương tác giao thức MCP** | [#16](https://github.com/anthropics/skills/issues/16) | Phơi bày Skills dưới dạng công cụ MCP, thực hiện lệnh gọi API tiêu chuẩn hóa |
| **Khả năng tương thích nền tảng** | [#29](https://github.com/anthropics/skills/issues/29) | Hỗ trợ các kênh không phải Anthropic gốc như AWS Bedrock sử dụng Skills |
| **Quản trị an toàn Agent** | [#412](https://github.com/anthropics/skills/issues/412) | Bổ sung các chế độ quản trị như thực thi chính sách, phát hiện mối đe dọa, theo dõi kiểm toán cho hệ thống AI Agent |
| **Ổn định cơ sở hạ tầng** | [#62](https://github.com/anthropics/skills/issues/62), [#406](https://github.com/anthropics/skills/issues/406), [#403](https://github.com/anthropics/skills/issues/403) | Các vấn đề môi trường sản xuất như mất Skill, lỗi tải lên, lỗi xóa 500 cần được sửa chữa khẩn cấp |

---

## 3. Skills có tiềm năng cao chờ hợp nhất

Các PR sau đây, mặc dù chưa được hợp nhất, nhưng có chức năng rõ ràng và giải quyết các vấn đề nhức nhối, có tiềm năng triển khai trong tương lai gần:

| Skill | Điểm nổi bật | Liên kết |
|:---|:---|:---|
| **document-typography** | Giải quyết trực tiếp các điểm yếu phổ biến của tài liệu do AI tạo ra, phạm vi áp dụng cực kỳ rộng | [PR #514](https://github.com/anthropics/skills/pull/514) |
| **testing-patterns** | Hướng dẫn kiểm thử toàn diện bù đắp khoảng trống của Skills trong lĩnh vực thực hành kỹ thuật | [PR #723](https://github.com/anthropics/skills/pull/723) |
| **ODT creation** | Bổ sung hỗ trợ hệ sinh thái LibreOffice/OpenDocument, bổ sung cho các kỹ năng DOCX/PDF hiện có | [PR #486](https://github.com/anthropics/skills/pull/486) |
| **sensory (macOS AppleScript)** | Thay thế tự động hóa ảnh chụp màn hình bằng AppleScript gốc, mở ra con đường mới cho tự động hóa OS cục bộ | [PR #806](https://github.com/anthropics/skills/pull/806) |
| **x402 BSV micropayments** | Kết hợp dịch vụ AI với vi thanh toán tiền điện tử, khám phá các mô hình kinh tế Agent | [PR #374](https://github.com/anthropics/skills/pull/374) |

---

## 4. Insight về hệ sinh thái Skills

> **Nhu cầu tập trung nhất của cộng đồng hiện nay: Nâng cấp Skills từ "công cụ hiệu suất cá nhân" lên "cơ sở hạ tầng sản xuất cấp doanh nghiệp, có thể chia sẻ, có thể quản lý" - đồng thời giải quyết bốn bài toán về chuyên nghiệp hóa chất lượng đầu ra AI, lưu trữ ghi nhớ liên tục giữa các phiên, tin cậy phân phối nội bộ tổ chức và ổn định nền tảng.**

---

# Công cụ AI CLI Cộng đồng cập nhật hàng ngày 2026-04-14

---

## 1. Tổng quan hôm nay

Anthropic đã phát hành hai phiên bản **v2.1.104 / v2.1.105** trong 24 giờ qua, tập trung vào việc tăng cường khả năng chuyển đổi worktree, hệ thống hook và giám sát plugin. Về phía cộng đồng, một bài đăng chỉ trích gay gắt rằng "Claude không thể xử lý các nhiệm vụ kỹ thuật phức tạp sau bản cập nhật tháng 2" đã tích lũy **395 bình luận, 1717👍** trước khi đóng, tiếp tục gây ra các cuộc thảo luận sâu sắc về khả năng của mô hình; đồng thời, vấn đề **"Tính năng Cowork gây ra gói VM 10GB làm giảm hiệu suất nghiêm trọng"** trở thành lỗi kỹ thuật hoạt động tích cực nhất hiện nay.

---

## 2. Phát hành phiên bản

### v2.1.105
| Mục | Nội dung |
|:---|:---|
| **Cải tiến công cụ EnterWorktree** | Thêm tham số `path`, hỗ trợ chuyển trực tiếp đến worktree hiện có của kho lưu trữ hiện tại |
| **Hỗ trợ Hook PreCompact** | Hook có thể chặn compaction bằng mã thoát 2 hoặc trả về `{"decision":"block"}` |
| **Giám sát nền của Plug** | Bổ sung giám sát nền cho plugin plug |

### v2.1.104
- Phiên bản vá lỗi, không có mô tả chức năng bổ sung.

🔗 [Trang Phát hành](https://github.com/anthropics/claude-code/releases)

---

## 3. Issues nóng của cộng đồng

| # | Tiêu đề | Trạng thái | Bình luận/👍 | Điểm nhấn chính |
|---|:---|:---|:---|:---|
| **#42796** | [MODEL] Claude Code is unusable for complex engineering tasks with the Feb updates | CLOSED | 395 / 1717 | Bài đăng phản hồi chất lượng có ảnh hưởng nhất trong cộng đồng. Tác giả stellaraccident đã trình bày chi tiết về sự suy giảm trong các nhiệm vụ kỹ thuật phức tạp sau bản cập nhật mô hình tháng 2, gây tiếng vang lớn với nhiều nhà phát triển. Mặc dù đã đóng, nó vẫn là tiêu chuẩn để đo lường sự lo lắng của cộng đồng về chất lượng mô hình. [Liên kết](https://github.com/anthropics/claude-code/issues/42796) |
| **#22543** | Cowork feature creates 10GB VM bundle that severely degrades performance | OPEN | 60 / 148 | **Vấn đề oncall ưu tiên cao**. Tính năng Cowork tạo gói VM 10GB trên macOS, dẫn đến khởi động và phản hồi cực kỳ chậm, là lỗi kỹ thuật hoạt động tích cực nhất hôm nay. [Liên kết](https://github.com/anthropics/claude-code/issues/22543) |
| **#45756** | Pro Max 5x Quota Exhausted in 1.5 Hours Despite Moderate Usage | OPEN | 29 / 124 | Hạn ngạch của người dùng trả phí tiêu thụ quá nhanh, liên quan đến nền tảng WSL, ảnh hưởng trực tiếp đến trải nghiệm đăng ký và niềm tin vào chi phí. [Liên kết](https://github.com/anthropics/claude-code/issues/45756) |
| **#46917** | CC v2.1.100+ inflates cache_creation by ~20K tokens vs v2.1.98 — same payload, server-side | OPEN | 16 / 106 | **Có thể tái hiện**. `cache_creation_input_tokens` trong phiên bản mới tăng đột biến khoảng 20 nghìn token cho cùng một yêu cầu, và được xác nhận là vấn đề định tuyến phía máy chủ/UA. Cực kỳ quan trọng đối với việc kiểm soát chi phí. [Liên kết](https://github.com/anthropics/claude-code/issues/46917) |
| **#20052** | Claude Desktop incorrectly reads tags `<Name>` and `</Name>` as `<n>` and `</n>` from files | OPEN | 14 / 0 | **Có thể tái hiện**. Phiên bản máy tính để bàn Windows có lỗi phân tích cú pháp thẻ XML/HTML, có thể dẫn đến sai lệch trong hiểu và sửa đổi mã, ảnh hưởng đến niềm tin của nhà phát triển vào xử lý tệp. [Liên kết](https://github.com/anthropics/claude-code/issues/20052) |
| **#22115** | statusLine: pass terminal columns to command via stdin or env, and account for visual line wrapping | OPEN | 9 / 10 | Vấn đề trải nghiệm TUI. Lệnh tùy chỉnh statusLine không nhận được chiều rộng thiết bị đầu cuối, dẫn đến hiển thị dòng bị lệch, ảnh hưởng đến trải nghiệm tích hợp của người dùng nâng cao. [Liên kết](https://github.com/anthropics/claude-code/issues/22115) |
| **#39060** | 5 second keystroke lag at Claude Code prompt on Windows 11 | OPEN | 7 / 2 | Độ trễ đầu vào trên Windows 11 lên tới 5 giây, trải nghiệm tương tác cơ bản bị tổn hại nghiêm trọng và không liên quan đến cài đặt thiết bị đầu cuối. [Liên kết](https://github.com/anthropics/claude-code/issues/39060) |
| **#47587** | Usage limits gone crazy | OPEN | 6 / 1 | Người dùng macOS báo cáo giới hạn sử dụng tăng đột biến bất thường, cùng với #45756, #46917 cùng nhau tạo thành tín hiệu cho thấy **sự bùng phát tập trung của các vấn đề về chi phí/hạn ngạch** gần đây. [Liên kết](https://github.com/anthropics/claude-code/issues/47587) |
| **#47185** | Linear MCP OAuth fails with "Invalid client" — metadata-URL clientId + ephemeral loopback port | OPEN | 5 / 4 | **Có thể tái hiện**. Quy trình xác thực MCP OAuth do clientId động và cổng phản hồi tạm thời khiến mỗi phiên đều cần ủy quyền lại, ảnh hưởng đến khả năng sử dụng của hệ sinh thái MCP. [Liên kết](https://github.com/anthropics/claude-code/issues/47185) |
| **#46093** | Dispatch not working | OPEN | 5 / 0 | Chức năng Dispatch của Cowork trên nền tảng Windows không hoạt động, cùng với #22543 cho thấy độ ổn định của Cowork trên Windows đáng ngờ. [Liên kết](https://github.com/anthropics/claude-code/issues/46093) |

---

## 4. Tiến độ PR quan trọng

| # | Tiêu đề | Trạng thái | Nội dung chức năng/sửa lỗi |
|---|---|---|---|
| **#47676** | fix(plugins): make hookify and plugin-dev agent frontmatter valid YAML | OPEN | Sửa lỗi định dạng YAML cho 4 tệp agent dưới `plugins/hookify/` và `plugins/plugin-dev/` (gây lỗi phân tích cú pháp nghiêm ngặt do chuỗi không được trích dẫn: space) [Liên kết](https://github.com/anthropics/claude-code/pull/47676) |
| **#47673** | fix(plugin-dev): add missing .claude-plugin/plugin.json manifest | OPEN | Bổ sung tệp manifest còn thiếu cho plugin `plugin-dev`, khớp với danh sách thị trường, giải quyết thiếu sót duy nhất của plugin này là thiếu manifest [Liên kết](https://github.com/anthropics/claude-code/pull/47673) |
| **#47554** | Fix: MCP OAuth token persistence across sessions (Issue #47540) | OPEN | Thực hiện lưu trữ lâu dài chứng chỉ MCP OAuth giữa các phiên, giải quyết vấn đề máy chủ MCP như Supabase yêu cầu ủy quyền lại sau mỗi cuộc hội thoại mới [Liên kết](https://github.com/anthropics/claude-code/pull/47554) |
| **#47514** | fix(security-guidance): skip doc files for substring checks | OPEN | Hook hướng dẫn bảo mật bỏ qua kiểm tra heuristic chuỗi con cho các tệp tài liệu/văn bản thuần túy, giảm cảnh báo sai, đồng thời giữ lại kiểm tra cho tệp nguồn và đường dẫn quy trình làm việc [Liên kết](https://github.com/anthropics/claude-code/pull/47514) |
| **#47502** | fix(security-guidance): use a cross-platform Python launcher | OPEN | Bổ sung trình khởi chạy Node đa nền tảng cho hook hướng dẫn bảo mật, giải quyết vấn đề không tìm thấy Python trên Windows, giữ nguyên truyền stdin/stdout [Liên kết](https://github.com/anthropics/claude-code/pull/47502) |
| **#47490** | feat(hookify): add ask action support | OPEN | Bổ sung hỗ trợ `action: ask` cho quy tắc hookify, thực hiện luồng xác nhận trên PreToolUse, quay về cảnh báo cho các hook không phải PreToolUse [Liên kết](https://github.com/anthropics/claude-code/pull/47490) |
| **#47674** | docs(devcontainer): fix theme name typo in Dockerfile comment | OPEN | Chỉ sửa đổi chú thích: sửa `powerline10k` thành `powerlevel10k`, không có thay đổi chức năng [Liên kết](https://github.com/anthropics/claude-code/pull/47674) |
| **#47178** | feat(examples): add session auto-title UserPromptSubmit hook | CLOSED | Hook ví dụ mới: tự động chèn chỉ dẫn đặt tiêu đề khi có tin nhắn đầu tiên của phiên. Đã đóng. [Liên kết](https://github.com/anthropics/claude-code/pull/47178) |
| **#38105** | feat: add WhatsApp channel plugin | CLOSED | Plugin WhatsApp đã được di chuyển sang kho lưu trữ độc lập để tiếp tục phát triển, fork ban đầu đã bị gỡ bỏ do DMCA [Liên kết](https://github.com/anthropics/claude-code/pull/38105) |
| **#41447 / #41518** | open source claude code / Fully Open Source Claude Code | OPEN | PR mang tính biểu tượng cho lời kêu gọi mã nguồn mở liên tục của cộng đồng. #41518 tuyên bố đã trích xuất 1906 tệp TypeScript từ source map của gói npm và cố gắng xây dựng. Anthropic chính thức không hợp nhất. [Liên kết](https://github.com/anthropics/claude-code/pull/41447) [Liên kết](https://github.com/anthropics/claude-code/pull/41518) |

---

## 5. Xu hướng yêu cầu chức năng

Dựa trên 50 Issues hoạt động hôm nay, các hướng chức năng được cộng đồng quan tâm nhất như sau:

| Hướng | Biểu hiện |
|:---|:---|
| **💰 Minh bạch chi phí và hạn ngạch** | Nhiều Issues tập trung bùng nổ như #45756, #46917, #47587, #47659, người dùng cực kỳ nhạy cảm với việc tăng token trong phiên bản mới, tiêu thụ hạn ngạch quá nhanh, tỷ lệ ngữ cảnh khởi động nguội tăng đột biến. |
| **🖥️ Trải nghiệm nền tảng Windows** | Tỷ lệ Issues liên quan đến Windows cực kỳ cao: độ trễ đầu vào (#39060), lỗi phân tích cú pháp thẻ (#20052), kế thừa proxy SSH agent (#44522), chức năng Cowork không hoạt động (#46093), vấn đề surrogate JSON (#44230). Cho thấy Windows vẫn là công dân hạng hai. |
| **🔌 Ổn định hệ sinh thái MCP** | Lưu trữ lâu dài OAuth (#47185 / PR #47554), kết nối host gốc Chrome (#47202), lỗi xác thực MCP tuyến tính, lớp xác thực và kết nối MCP là những điểm yếu hiện tại. |
| **🤝 Chức năng Cowork / Cộng tác** | #22543 (gói VM 10GB) và #46093 (Dispatch không hoạt động) cho thấy chức năng Cowork chưa trưởng thành về hiệu suất và độ ổn định đa nền tảng. |
| **🧠 Chất lượng mô hình và khủng hoảng niềm tin** | Việc đóng #42796 không có nghĩa là tranh cãi kết thúc, #47598 tiếp tục báo cáo suy giảm trong lập lịch subagent và tải hook của Opus 4.6, sự lo lắng của nhà phát triển về việc mô hình "trở nên ngu ngốc" vẫn tiếp tục. |
| **🛠️ Chi tiết TUI / CLI** | Thay đổi hành vi `/resume` (#46887), lỗi dán mã xác thực (#47669, #47648, #47670), chiều rộng thiết bị đầu cuối statusLine (#22115), phản ánh yêu cầu của người dùng về độ chính xác của tương tác CLI. |

---

## 6. Điểm quan tâm của nhà phát triển

### 🔴 Điểm đau tần suất cao

1. **"Hóa đơn vô hình" - Mất kiểm soát Token và Hạn ngạch**
   - Phiên bản v2.1.100+ được đo lường thực tế cho thấy `cache_creation_input_tokens` tăng ~20K cho cùng một yêu cầu (#46917)
   - Gói Pro Max 5x tiêu thụ hết trong 1.5 giờ (#45756)
   - Ngữ cảnh khởi động nguội ban đêm tăng từ 4% lên 11% (#47659)
   - **Yêu cầu cốt lõi**: Bản cập nhật phiên bản cần kèm theo mô tả ảnh hưởng chi phí token, hoặc cung cấp cảnh báo bất thường về sử dụng.

2. **Khe nứt trải nghiệm cơ bản của người dùng Windows**
   - Độ trễ đầu vào 5 giây, lỗi phân tích cú pháp thẻ, kế thừa proxy SSH agent không thành công, chức năng Cowork Dispatch không hoạt động.
   - **Yêu cầu cốt lõi**: Phiên bản Windows cần được tối ưu hóa đặc biệt, thay vì "chạy được là tốt rồi".

3. **Ác mộng "mỗi lần đăng nhập lại" của hệ sinh thái MCP**
   - Lưu trữ lâu dài token OAuth không thành công (PR #47554 đang cố gắng sửa), nghiêm trọng cản trở việc triển khai MCP như một công cụ năng suất.

4. **Khủng hoảng niềm tin về suy giảm năng lực mô hình**
   - Từ #42796 đến #47598, nhà phát triển liên tục báo cáo sự suy giảm về khả năng của Claude trong các nhiệm vụ kỹ thuật phức tạp, lập lịch subagent, tải hook tự động.
   - **Yêu cầu cốt lõi**: Mô tả phiên bản mô hình minh bạch hơn, phiên bản mô hình có thể ghim, hoặc chuyển đổi rõ ràng hơn giữa "chế độ sáng tạo" và "chế độ kỹ thuật".

### 🟡 Nhu cầu mới nổi

- **Tăng cường hệ thống Hook**: Chặn PreCompact, hành động ask (PR #47490) cho thấy cộng đồng mong muốn hook có khả năng chặn và tương tác chi tiết hơn.
- **Trải nghiệm phát triển plugin**: Bổ sung manifest, sửa lỗi YAML, các PR phản ánh hệ sinh thái plugin đang phát triển từ "có thể chạy" đến "chuẩn hóa".
- **Tiếng gọi mã nguồn mở không giảm**: Các PR như #41447 / #41518 tiếp tục nhận được sự quan tâm, thậm chí README còn có Issue riêng (#47465) yêu cầu giải thích "kho lưu trữ này không chứa mã nguồn".

---

*Báo cáo hàng ngày dựa trên dữ liệu công khai, quan điểm không đại diện cho lập trường chính thức của Anthropic.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Cộng đồng cập nhật hàng ngày 2026-04-14

---

## 1. Tổng quan hôm nay

Cộng đồng Codex hôm nay có mức độ hoạt động cực kỳ cao, **vấn đề hiệu suất tiện ích mở rộng VS Code** trở thành tâm điểm chính, nhiều Issue nóng chỉ ra hiện tượng tăng vọt CPU và quá nhiệt khi áp dụng bản vá mã. Phía kỹ thuật đang tích cực thúc đẩy sửa chữa, bao gồm định tuyến `apply_patch` đến hệ thống tệp môi trường, sửa lỗi hồi quy thời gian chờ áp dụng-vá từ xa và khởi tạo dữ liệu ICU cho V8 chế độ mã, v.v. là các PR quan trọng.

---

## 2. Phát hành phiên bản

- **rust-v0.121.0-alpha.6** & **rust-v0.121.0-alpha.4**
  - Hai phiên bản alpha liên quan đến Rust đã được phát hành trong 24 giờ qua, nhưng ghi chú phát hành khá tóm tắt, không tiết lộ chi tiết thay đổi. Nên chú ý đến các bản ghi thay đổi đầy đủ sau này.

---

## 3. Issues nóng của cộng đồng

| # | Issue | Tầm quan trọng | Phản ứng của cộng đồng |
|---|---|---|---|
| [#14593](https://github.com/openai/codex/issues/14593) | **Đốt token quá nhanh** | Người dùng đăng ký kinh doanh phản ánh Codex đốt token với số lượng lớn trong thời gian ngắn, ảnh hưởng trực tiếp đến chi phí sử dụng, là Issue có số bình luận cao nhất (530). | 🔥 Cực cao, 201 👍, nhiều người dùng theo dõi yêu cầu minh bạch hóa chiến lược thanh toán và giới hạn. |
| [#10450](https://github.com/openai/codex/issues/10450) | **Hỗ trợ Codex Desktop cho phát triển từ xa** | Khoảng trống năng lực cốt lõi được kêu gọi rộng rãi sau khi phát hành Ứng dụng Máy tính để bàn, liên quan đến khả năng thay thế quy trình làm việc VS Code + SSH. | 535 👍, 112 bình luận, nhu cầu người dùng doanh nghiệp cao. |
| [#13041](https://github.com/openai/codex/issues/13041) | **WebSocket bị đóng bởi máy chủ với Chính sách 1008 sau khi nâng cấp** | Dẫn đến việc Codex quay về HTTPS, tạo thành vòng lặp kết nối lại, ảnh hưởng đến trải nghiệm phản hồi thời gian thực. Người dùng Arch Linux báo cáo nhiều. | 114 👍, 58 bình luận, vấn đề ổn định lớp mạng được quan tâm. |
| [#13476](https://github.com/openai/codex/issues/13476) | **MCP Playwright yêu cầu phê duyệt quá mức** | Vấn đề hồi quy, sau khi thay đổi sandbox, mỗi lần gọi đều bật lên phê duyệt, làm gián đoạn nghiêm trọng luồng phát triển. | 38 👍, 27 bình luận, trải nghiệm người dùng hệ sinh thái MCP bị tổn hại. |
| [#15764](https://github.com/openai/codex/issues/15764) | **VS Code: Code Helper (Renderer) CPU vượt quá 100% khi áp dụng bản vá** | Hồi quy hiệu suất, xuất hiện sau phiên bản 26.313.41514, liên quan đến [#16849](https://github.com/openai/codex/issues/16849), là đầu mối cốt lõi của vấn đề hiệu suất hôm nay. | 31 👍, 21 bình luận, người dùng macOS phản hồi tập trung. |
| [#16849](https://github.com/openai/codex/issues/16849) | **Vòng lặp lỗi open-in-targets của tiện ích mở rộng VSCode dẫn đến CPU cao** | Đã đóng. Nguyên nhân gốc rễ là webview không xử lý lỗi truy vấn mỗi phút một cách duyên dáng, kích hoạt Code Helper Renderer 100%+, tạo thành cụm vấn đề với [#15764](https://github.com/openai/codex/issues/15764). | 11 👍, 19 bình luận, chẩn đoán rõ ràng, đã xác định và sửa lỗi. |
| [#15393](https://github.com/openai/codex/issues/15393) | **Mức sử dụng CPU cao của tiện ích mở rộng IDE (Linux)** | Biểu hiện bên phía Linux của cùng một vấn đề hiệu suất, phiên bản 26.318.11754. | 22 👍, 15 bình luận, bằng chứng về suy giảm hiệu suất đa nền tảng gia tăng. |
| [#15706](https://github.com/openai/codex/issues/15706) | **MacBook Air M4 chạy tiện ích mở rộng VS Code Codex quá nóng** | Biểu hiện cực đoan của vấn đề hiệu suất trên Apple Silicon, đã ảnh hưởng đến bảo mật phần cứng và sử dụng hàng ngày. | 9 👍, 10 bình luận, cùng với [#15764](https://github.com/openai/codex/issues/15764) tạo áp lực sửa chữa khẩn cấp. |
| [#17615](https://github.com/openai/codex/issues/17615) | **Triển khai Azure liên tục kích hoạt chặn bảo mật "I cannot assist"** | Issue mới được tạo hôm nay, người dùng đăng ký Azure + API gặp sự cố kiểm tra bảo mật thường xuyên, dẫn đến dịch vụ không khả dụng. | 4 👍, 9 bình luận, chặn kịch bản triển khai cấp doanh nghiệp. |
| [#17596](https://github.com/openai/codex/issues/17596) | **Ứng dụng Máy tính để bàn Windows, nút "New Thread" ở thanh bên không thể nhấp khi mở rộng** | Mới được tạo hôm nay, vấn đề kiểm tra va chạm UI bùng phát tập trung trên đầu cuối Windows, cùng với [#17322](https://github.com/openai/codex/issues/17322) tạo thành khủng hoảng chất lượng đầu cuối máy tính để bàn Windows. | 2 👍, 6 bình luận, thiếu sót trải nghiệm cơ bản của lớp tương tác. |

---

## 4. Tiến độ PR quan trọng

| # | PR | Nội dung chức năng/sửa lỗi |
|---|---|---|
| [#17674](https://github.com/openai/codex/pull/17674) | **Route apply_patch through the environment filesystem** | Định tuyến thực thi thời gian chạy `apply_patch` đến hệ thống tệp Môi trường được chọn, thay vì đường dẫn thực thi cục bộ; bổ sung kiểm thử hồi quy sandbox, trực tiếp giải quyết các vấn đề hiệu suất và bảo mật của cộng đồng. |
| [#17725](https://github.com/openai/codex/pull/17725) | **Fix remote apply-patch timeout regression** | Sửa lỗi hồi quy thời gian chờ áp dụng-vá từ xa: ưu tiên sử dụng tệp nhị phân phụ `codex-linux-sandbox` thực tế và sao chép tệp nhị phân kiểm thử từ xa vào thư mục bin `/tmp` dùng chung để phát hiện. |
| [#17709](https://github.com/openai/codex/pull/17709) | **Initialize ICU data for code mode V8** | Liên kết dữ liệu ICU cho chế độ mã V8, sửa lỗi sự cố panic do các phương thức liên quan đến locale gây ra. |
| [#17286](https://github.com/openai/codex/pull/17286) | **Prefix Compaction** | Khởi động nền bằng nén tiền tố, nén tự động nền có thể thực hiện trước khi kết quả tiền tố sẵn sàng; tối ưu hóa quản lý ngữ cảnh phiên dài. |
| [#17714](https://github.com/openai/codex/pull/17714) | **Support original-detail metadata on MCP image outputs** | Hỗ trợ `_meta["codex/imageDetail"] == "original"` trên đầu ra hình ảnh MCP và tự động hạ cấp trên các mô hình không được hỗ trợ. |
| [#17563](https://github.com/openai/codex/pull/17563) | **Add PermissionRequest hooks support** | Tích hợp luồng hook `PermissionRequest` cho các lời nhắc phê duyệt shell, unified exec và mạng, cho phép hook tự động cho phép hoặc từ chối yêu cầu phê duyệt. |
| [#17724](https://github.com/openai/codex/pull/17724) | **feat(sandbox): config for log_macos_seatbelt_denials** | Bổ sung chức năng ghi nhật ký từ chối seatbelt macOS vào unified exec, giá trị mặc định thời gian chờ 5 giây có thể vẫn cần điều chỉnh. |
| [#17718](https://github.com/openai/codex/pull/17718) / [#17711](https://github.com/openai/codex/pull/17711) | **Add marketplace/add app-server RPC** | Bổ sung RPC `marketplace/add` vào giao thức app-server, máy khách có thể thêm thị trường plugin từ xa thông qua backend mà không cần lệnh gọi shell. |
| [#17717](https://github.com/openai/codex/pull/17717) | **Refactor marketplace add into shared core flow** | Tái cấu trúc `codex marketplace add` thành logic chia sẻ `codex-core`, CLI và app-server chia sẻ cùng một logic, loại bỏ mã trùng lặp. |
| [#17701](https://github.com/openai/codex/pull/17701) | **Add realtime output modality and transcript events** | Bổ sung `outputModality` cho `thread/realtime/start`, hỗ trợ lựa chọn đầu ra văn bản/âm thanh; chia thông báo phiên âm thời gian thực thành luồng sự kiện delta/done. |

---

## 5. Xu hướng yêu cầu chức năng

Từ sự phân bố Issues, có thể chắt lọc ra năm hướng cộng đồng quan tâm nhất hiện nay:

1. **Ổn định và hiệu suất tiện ích mở rộng IDE** - Vấn đề sử dụng CPU/bộ nhớ, quá nhiệt, treo của tiện ích mở rộng VS Code chiếm lưu lượng truy cập hàng đầu, là ưu tiên cao nhất gần đây.
2. **Luồng làm việc phát triển từ xa và đa máy** - Nhu cầu hỗ trợ Ứng dụng Máy tính để bàn cho SSH/phát triển từ xa có mức độ nóng cao lâu dài, cản trở khả năng thay thế chuỗi công cụ hiện có.
3. **Trải nghiệm công cụ MCP / Agent** - Các lỗi như lưu trữ lâu dài OAuth MCP, lời nhắc phê duyệt quá mức, khám phá công cụ thường xuyên được đề cập.
4. **Chất lượng đầu cuối máy tính để bàn Windows** - Các lỗi trải nghiệm cơ bản như lỗi khởi tạo sandbox, lỗi định dạng đường dẫn ( `/F:/...`), lỗi kiểm tra va chạm UI xuất hiện dày đặc.
5. **Quản lý ngữ cảnh và giới hạn tốc độ** - Các vấn đề về "chi phí + khả dụng" như đốt token quá nhanh, lỗi nén ngữ cảnh, phán đoán sai giới hạn tốc độ tiếp tục lan rộng.

---

## 6. Điểm quan tâm của nhà phát triển

| Điểm đau/Nhu cầu | Biểu hiện cụ thể |
|----------|---------|
| **Hồi quy hiệu suất khẩn cấp** | Sau nhiều phiên bản ( >26.313.41514), CPU của tiện ích mở rộng VS Code tăng vọt trên macOS/Linux, thậm chí gây quá nhiệt cho MacBook Air M4, đã tạo thành một cửa sổ thời gian hồi quy rõ ràng. |
| **Mệt mỏi vì phê duyệt** | MCP (đặc biệt là Playwright) thường xuyên bật lên sau khi thay đổi chính sách sandbox, người dùng kêu gọi "ghi nhớ lựa chọn" hoặc chính sách mặc định chi tiết hơn. |
| **Cảm giác công dân hạng hai trên Windows** | Các vấn đề như lỗi khởi tạo sandbox, lỗi định dạng đường dẫn (`/F:/...`), lỗi kiểm tra va chạm UI trên đầu cuối máy tính để bàn Windows xuất hiện dày đặc, tốc độ sửa lỗi bị nghi ngờ. |
| **Minh bạch thanh toán không đủ** | Người dùng Business/Pro phản ánh tiêu thụ token bất thường nhanh chóng, nhưng thiếu bảng điều khiển sử dụng thời gian thực hoặc phân tích chi tiết chi phí trên mỗi yêu cầu. |
| **Chặn triển khai Azure / Doanh nghiệp** | Hệ thống bảo mật quá nhạy cảm trên môi trường Azure, dẫn đến yêu cầu hợp pháp bị từ chối hàng loạt, ảnh hưởng đến việc áp dụng ở quy mô sản xuất. |

---

*Báo cáo hàng ngày dựa trên dữ liệu công khai của github.com/openai/codex.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Cộng đồng cập nhật hàng ngày 2026-04-14

---

## 1. Tổng quan hôm nay

Google đã phát hành phiên bản vá lỗi **v0.37.2**, sửa lỗi cherry-pick từ nhánh v0.37.1. Mức độ thảo luận của cộng đồng tập trung vào hai vấn đề trải nghiệm cốt lõi là **khởi động chậm do RipGrep gặp lỗi ngoại tuyến/tải xuống** và **chế độ YOLO bị hạ cấp đột ngột bởi cơ chế phát hiện bảo mật**, nhiều PR nhắm mục tiêu đã xuất hiện trong ngày.

---

## 2. Phát hành phiên bản

### v0.37.2
- **Loại**: Sửa lỗi vá
- **Nội dung**: Cherry-pick commit `9d741ab` vào nhánh `release/v0.1.1-pr-24565`, vá lỗi v0.37.1 và tạo 0.37.2.
- **Liên kết**: [Phát hành v0.37.2](https://github.com/google-gemini/gemini-cli/compare/v0.37.1...v0.37.2)

---

## 3. Issues nóng của cộng đồng

| # | Tiêu đề | Tầm quan trọng | Phản ứng của cộng đồng |
|---|---|---|---|
| **#25323** | [Failing to download RipGrep should not permanently slow down Gemini CLI startup](https://github.com/google-gemini/gemini-cli/issues/25323) | **Ưu tiên cao nhất 🔥**. Lỗi tải xuống RipGrep sẽ làm chậm khởi động CLI vĩnh viễn hơn 2 phút, ảnh hưởng nghiêm trọng đến khả năng sử dụng trong môi trường doanh nghiệp/ngoại tuyến. | 6 bình luận, hoạt động tích cực nhất trong ngày; đã có PR #25342/#25332 phản hồi trực tiếp, có kế hoạch đóng gói tệp nhị phân ripgrep vào SEA. |
| **#22745** | [Assess the impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745) | Hướng kiến trúc dài hạn. Khả năng nhận biết AST có thể giảm thiểu lỗi đọc sai ranh giới, giảm nhiễu token, là yếu tố quan trọng để Agent thao tác chính xác với kho mã nguồn. | 5 bình luận, người bảo trì liên tục theo dõi; liên quan đến #22746 đã bắt đầu nghiên cứu công cụ tilth/glyph. |
| **#24916** | [Gemini cli keeps asking for permissions on the same file](https://github.com/google-gemini/gemini-cli/issues/24916) | Vấn đề trải nghiệm người dùng tần suất cao. Cơ chế ghi nhớ quyền "Cho phép lần này/Luôn cho phép" có lỗi, dẫn đến cửa sổ bật lên lặp lại làm gián đoạn quy trình làm việc. | 3 bình luận, mô tả chi tiết nhưng chưa có PR tương ứng. |
| **#25166** | [Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166) | Lỗi ổn định cốt lõi. Sau khi thực thi lệnh đơn giản, nó bị treo, báo sai "đang chờ đầu vào", phá hủy nghiêm trọng luồng tự động của Agent. | 2 bình luận, có mô tả tái hiện, cần sửa lỗi khẩn cấp. |
| **#25216** | [Gemini failed to open in a temporary path A:\\](https://github.com/google-gemini/gemini-cli/issues/25216) | Lỗi tương thích Windows. Lỗi `EISDIR` xảy ra trên đường dẫn tạm thời (ví dụ: `A:\a`), phản ánh xử lý đường dẫn không bao phủ các trường hợp biên. | 1 bình luận, bao gồm ngăn xếp đầy đủ, thuận lợi cho việc định vị nhanh chóng. |
| **#23582** | [Subagents Awareness of Active Approval Modes](https://github.com/google-gemini/gemini-cli/issues/23582) | Tính nhất quán của kiến trúc. Sub Agent không nhận biết được chế độ phê duyệt hiện tại (Plan/Auto-Edit), dẫn đến xung đột giữa lời nhắc hệ thống và công cụ chính sách. | 1 bình luận, chỉ người bảo trì, thuộc về vấn đề quản trị dài hạn. |
| **#22819** | [Implement memory routing: global vs. project](https://github.com/google-gemini/gemini-cli/issues/22819) | Thiết kế cơ bản của hệ thống ghi nhớ. Phân biệt ghi nhớ toàn cầu (`~/.gemini/`) và ghi nhớ dự án (`.gemini/`) là tiền đề cho trải nghiệm cá nhân hóa. | 1 bình luận, 👍 2, cộng đồng kỳ vọng cao. |
| **#25218** | [Table renders incrementally during streaming causing broken/partial layout in screen reader mode](https://github.com/google-gemini/gemini-cli/issues/25218) | Khả năng truy cập (a11y) và chất lượng kết xuất. Khi đầu ra luồng, bảng được vẽ lại từng phần, dẫn đến đọc rối loạn cho trình đọc màn hình. | 0 bình luận nhưng là phát hiện dẫn xuất của #24675, cho thấy nhóm đang thực hiện đánh bóng chất lượng hệ thống. |
| **#24214** | [Address user feedback for plan mode post launch](https://github.com/google-gemini/gemini-cli/issues/24214) | Epic tổng hợp phản hồi sau khi ra mắt chế độ Plan, bao gồm phản hồi từ nhiều lĩnh vực cốt lõi + bảo mật + doanh nghiệp, là ngọn cờ định hướng lặp lại sản phẩm. | 0 bình luận, người bảo trì theo dõi nội bộ. |
| **#24202** | [Running SSH the text is scrambled](https://github.com/google-gemini/gemini-cli/issues/24202) | Bối cảnh phát triển từ xa. Ký tự lạ trên thiết bị đầu cuối sau khi SSH từ Windows sang gLinux, ảnh hưởng đến nhóm người dùng phát triển trên đám mây. | 1 bình luận, liên quan đến #24546 (tiện ích trợ giúp phát hiện SSH) đang được thúc đẩy. |

---

## 4. Tiến độ PR quan trọng

| # | Tiêu đề | Nội dung chức năng/sửa lỗi |
|---|---|---|
| **#25342** | [feat: bundle ripgrep binaries into SEA for offline support](https://github.com/google-gemini/gemini-cli/pull/25342) | Đóng gói tệp nhị phân gốc ripgrep cho 5 nền tảng vào SEA, giải quyết lỗi tải xuống và chặn khởi động trong môi trường ngoại tuyến/doanh nghiệp. (Thay thế #25332 đã đóng cùng ngày) |
| **#25341** | [fix(core): prevent YOLO mode from being downgraded](https://github.com/google-gemini/gemini-cli/pull/25341) | Sửa lỗi động cơ chính sách hạ cấp nhầm chế độ YOLO thành `ASK_USER` khi đánh giá bằng cơ chế phát hiện bảo mật, đảm bảo tính nhất quán của chế độ tự động hóa cao. |
| **#25338** | [fix(core): allow explicit write permissions to override governance file protections in sandboxes](https://github.com/google-gemini/gemini-cli/pull/25338) | Trong sandbox (Seatbelt/bwrap), quyền ghi rõ ràng hiện có thể ghi đè bảo vệ chỉ đọc đối với các tệp quản trị như `.git`, sửa lỗi logic ưu tiên quyền. |
| **#25331** | [feat(test): add large conversation scenario for performance test](https://github.com/google-gemini/gemini-cli/pull/25331) | Bổ sung bài kiểm tra hiệu suất cho cuộc trò chuyện lớn ~60MB, 1400 tin nhắn, bao gồm độ trễ tải, độ trễ phản hồi đầu vào và thời gian thực thi lệnh. |
| **#25256** | [feat: detect new files in @ recommendations with watcher based updates](https://github.com/google-gemini/gemini-cli/pull/25256) | Làm mới đề xuất tệp `@` theo thời gian thực dựa trên trình giám sát tệp, không cần đợi thu thập lại toàn bộ; kiểm soát bằng công tắc `context.fileFiltering.enableFileWatcher`. |
| **#25186** | [refactor(cli): migrate core tools to native ToolDisplay property and fix UI rendering](https://github.com/google-gemini/gemini-cli/pull/25186) | Di chuyển công cụ cốt lõi sang đối tượng `ToolDisplay` gốc, loại bỏ bộ chuyển đổi `returnDisplay`, nâng cao khả năng dự đoán kết xuất phản hồi của công cụ. |
| **#25343** | [feat(telemetry): add flag for enabling traces specifically](https://github.com/google-gemini/gemini-cli/pull/25343) | Giới thiệu cấu hình `telemetry.traces`, tách biệt theo dõi thuộc tính chi tiết với đo lường cơ bản, đặt theo dõi nghiêm ngặt thành opt-in. |
| **#25344** | [fix(telemetry): implement bounded structural truncation](https://github.com/google-gemini/gemini-cli/pull/25344) | Viết lại `truncateForTelemetry`, bằng cách giới hạn độ dài chuỗi, kích thước mảng và độ sâu duyệt, thực hiện cắt tỉa cấu trúc có giới hạn, ngăn lỗi phân tích cú pháp JSON và OOM. |
| **#24630** | [feat(cli): enable mouse clicking for cursor positioning in AskUser multi-line answers](https://github.com/google-gemini/gemini-cli/pull/24630) | Bật nhấp chuột để định vị con trỏ trong câu trả lời nhiều dòng của `AskUser`, giải quyết vấn đề nhấp chuột không hợp lệ trong chế độ buffer thay thế. |
| **#24174** | [feat(voice): implement real-time voice mode with cloud and local backends](https://github.com/google-gemini/gemini-cli/pull/24174) | Thực hiện chế độ giọng nói thời gian thực: hỗ trợ hai backend, Gemini Live API (cloud) và Whisper qua `whisper.cpp` (cục bộ). |

---

## 5. Xu hướng nhu cầu chức năng

Từ Issues/PR ngày hôm nay có thể chắt lọc **Năm hướng chức năng chính** mà cộng đồng và chính thức cùng quan tâm:

1. **Khả năng ngoại tuyến và triển khai doanh nghiệp**
   Đóng gói RipGrep vào SEA (#25342), tối ưu hóa khởi động ngoại tuyến (#25323) phản ánh môi trường doanh nghiệp/nội bộ là kịch bản mở rộng trọng điểm.

2. **Độ chính xác hiểu kho mã nguồn của Agent**
   Đọc nhận biết AST (#22745/#22746), nghiên cứu công cụ ánh xạ kho mã nguồn, chỉ ra sự đầu tư dài hạn vào "làm cho Agent hiểu cấu trúc mã nguồn hơn".

3. **Tính ổn định của hệ thống quyền và chế độ**
   Epic phản hồi sau khi ra mắt chế độ Plan (#24214), sửa lỗi hạ cấp chế độ YOLO (#25341), cửa sổ bật lên quyền lặp lại (#24916), Sub Agent nhận biết chế độ phê duyệt (#23582) - Trải nghiệm quyền vẫn là cốt lõi cần đánh bóng.

4. **Hiệu suất và khả năng mở rộng**
   Kiểm thử hội thoại quy mô lớn (#25331), quản lý bộ nhớ đầu ra công cụ lớn (#20406), điều tra lỗi nén (#23556), tăng tốc giám sát tệp (#25256) cho thấy tối ưu hóa có hệ thống cho các tình huống tải nặng.

5. **Tương tác đa phương thức và khả năng truy cập**
   Chế độ giọng nói thời gian thực (#24174), kết xuất bảng cho trình đọc màn hình (#25218), tương tác chuột (#24630) cho thấy lớp tương tác đang tiếp tục được làm phong phú.

---

## 6. Điểm quan tâm của nhà phát triển

| Điểm đau/Nhu cầu | Biểu hiện cụ thể | Liên kết liên quan |
|-----------|---------|---------|
| **Tốc độ khởi động và phụ thuộc mạng** | Lỗi tải xuống RipGrep làm chậm khởi động hơn 2 phút, môi trường ngoại tuyến hoàn toàn không sử dụng được. | [#25323](https://github.com/google-gemini/gemini-cli/issues/25323) |
| **Ký nhớ quyền không đáng tin cậy** | Liên tục yêu cầu quyền cho cùng một tệp, cài đặt "luôn cho phép" không hoạt động, làm gián đoạn luồng tự động. | [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) |
| **Thực thi Shell bị treo** | Lệnh đã kết thúc nhưng UI vẫn hiển thị "đang chờ đầu vào", Agent không thể tiếp tục. | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) |
| **Khả năng tương thích môi trường Windows/từ xa** | Ký tự lạ SSH, lỗi ký tự ổ đĩa tạm thời, màu nền tmux, v.v., xuất hiện dày đặc. | [#24202](https://github.com/google-gemini/gemini-cli/issues/24202) [#25216](https://github.com/google-gemini/gemini-cli/issues/25216) |
| **Hành vi không nhất quán của chế độ YOLO/Plan** | Ngay cả khi người dùng chọn rõ ràng chế độ tự động hóa cao, hệ thống vẫn hạ cấp xuống xác nhận thủ công do quy tắc phát hiện. | [#25341](https://github.com/google-gemini/gemini-cli/pull/25341) |
| **Cân bằng đo lường từ xa và quyền riêng tư** | Nhà phát triển muốn có các công tắc chi tiết, tách biệt đo lường cơ bản và theo dõi sâu. | [#25343](https://github.com/google-gemini/gemini-cli/pull/25343) |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https