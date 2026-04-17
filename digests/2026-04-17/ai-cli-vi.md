# Cộng đồng Công cụ AI CLI: Báo cáo Nhật ký 2026-04-17

> Thời gian tạo: 2026-04-17 00:15 UTC | Công cụ được bao phủ: 8

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

# Báo cáo Phân tích So sánh Ngang Hệ sinh thái Công cụ AI CLI | 2026-04-17

---

## 1. Toàn cảnh Hệ sinh thái

Hệ sinh thái công cụ AI CLI hiện tại đang chứng kiến sự "tập trung lặp lại ở nhóm đầu, nhóm giữa bám đuổi nhanh chóng". Các công cụ từ các ông lớn như Anthropic, OpenAI, và Google đang cạnh tranh gay gắt trong việc nâng cấp mô hình (Opus 4.7, GPT-5.4, Gemma 4), nhưng đồng thời các vấn đề về độ ổn định cũng gia tăng; GitHub Copilot CLI chịu áp lực từ cộng đồng do giới hạn tỷ lệ truy cập và lỗ hổng đồng bộ mô hình; phe Trung Quốc (Kimi, Qwen) đang nỗ lực cải thiện trải nghiệm tương tác và bản địa hóa, nhưng Qwen đang đối mặt với khủng hoảng niềm tin do điều chỉnh chính sách miễn phí; OpenCode và Pi, với vai trò là các công cụ độc lập/mở rộng thân thiện với nhà phát triển, đang tạo dựng không gian khác biệt nhờ khả năng tương thích cao và khả năng nhúng.

---

## 2. So sánh Mức độ Hoạt động của Từng Công cụ

| Công cụ | Issues Hôm nay | PRs Hôm nay | Phát hành Phiên bản | Hoạt động Cốt lõi |
|:---|:---:|:---:|:---|:---|
| **Claude Code** | 50+ | ~7 (3 đã đóng) | v2.1.111 / v2.1.112 | Opus 4.7 ra mắt + hotfix; Lỗi crash Cowork đa nền tảng |
| **OpenAI Codex** | 50 | 50 | rust-v0.122.0-alpha.3/5 | Hỗ trợ macOS Intel bị đóng; Hooks / Goal Mode đang trong giai đoạn hợp nhất |
| **Gemini CLI** | 50 | 10+ | Không có | Tập trung sửa lỗi trải nghiệm cốt lõi; Gemma 4 / API ưu tiên và các khả năng mới đang được hợp nhất |
| **GitHub Copilot CLI** | 50 | **0** | v1.0.29 / v1.0.30 / v1.0.31 | Ba bản cập nhật chính thức sửa lỗi render terminal; Đóng góp cộng đồng bằng 0 |
| **Kimi CLI** | ~15 | 5 | Không có | Tranh cãi về khả năng hiển thị "thinking"; Các vấn đề tích hợp MCP / IDE gia tăng |
| **OpenCode** | 50 | 20+ | v1.4.7 | Rò rỉ bộ nhớ trở thành megathread; kitlangton dẫn đầu tái cấu trúc namespace quy mô lớn |
| **Pi** | 50 | 10+ | v0.67.4 / v0.67.5 / v0.67.6 | Sửa lỗi tương thích terminal dày đặc; Mở rộng hệ sinh thái proxy Bedrock / Vertex / OpenAI |
| **Qwen Code** | 50+ | 20 | v0.14.5-nightly | Avalanche lỗi OAuth 401; Thay đổi chính sách hạn ngạch miễn phí gây khủng hoảng cộng đồng |

> **Lưu ý**: Thống kê Issues/PRs dựa trên tiêu chí "hoạt động trong 24 giờ qua" trong báo cáo hàng ngày, một số là giá trị ước tính.

---

## 3. Hướng Chức năng Được Quan Tâm Chung

| Hướng Chung | Công cụ Liên quan | Yêu cầu Cụ thể |
|:---|:---|:---|
| **Thích ứng Nhanh và Nhất quán với Mô hình Mới** | Claude Code, OpenCode, Pi, Copilot CLI, Kimi CLI | Ánh xạ cấu hình, truyền tham số, hiển thị UI cho Opus 4.7 / GPT-5.4 / Gemma 4 cần đồng bộ với việc phát hành mô hình; Kênh Bedrock / Azure / ACP thường xuất hiện sự phân chia "có đường dẫn tương tác, không có lớp giao thức" |
| **Giới hạn Tỷ lệ Truy cập và Khả năng Quan sát Chi phí** | Copilot CLI, Claude Code, Gemini CLI | Minh bạch hóa ngưỡng giới hạn, hiển thị hạn ngạch còn lại, chiến lược thử lại 429, theo dõi lượng token và tỷ lệ cache hit |
| **Tối ưu hóa Tương tác Terminal/TUI Sâu sắc** | Codex, Pi, Kimi, Qwen, Gemini CLI | Xuống dòng Shift+Enter, nhập nhiều dòng, không bỏ sót phím khi khởi động, siêu liên kết OSC 8, phản hồi trạng thái spinner, hiển thị quá trình thinking |
| **Tích hợp Hệ sinh thái MCP / Agent** | Codex, Kimi, Gemini CLI, Copilot CLI | Giảm thiểu lỗi kết nối máy chủ MCP, quy mô hóa số lượng công cụ (>128), khả năng quan sát Agent, Hook quyền, tương thích với trình điều phối bên ngoài |
| **Tương thích Windows / WSL / Terminal Biên** | Claude Code, Codex, Pi, OpenCode, Gemini CLI | Lỗi crash ARM64, phân tích đường dẫn WSL, xử lý phím tắt tmux/Zellij, tích hợp clipboard, phát triển từ xa qua SSH |

---

## 4. Phân tích Định vị Khác biệt

| Công cụ | Trọng tâm Chức năng | Người dùng Mục tiêu | Lộ trình Kỹ thuật |
|:---|:---|:---|:---|
| **Claude Code** | Hiểu mã sâu, định tuyến thông minh chế độ Auto, hợp tác Cowork | Nhà phát triển chuyên nghiệp theo đuổi "một công cụ giải quyết mọi thứ" | Thời gian chạy Agent hạng nặng được xây dựng bằng TypeScript/Bun; Gắn kết chặt chẽ với ngăn xếp mô hình Anthropic |
| **OpenAI Codex** | Song song CLI/TUI, Goal Mode, Hooks có thể điều phối, an toàn sandbox | Nhà phát triển cao cấp cần "quy trình làm việc AI có thể lập trình" | Viết lại cốt lõi bằng Rust, nhấn mạnh hiệu suất và máy tính để bàn đa nền tảng; Sandbox (Landlock/Seatbelt) là rào cản khác biệt |
| **Gemini CLI** | Khởi động nhanh, tích hợp hệ sinh thái Google, suy luận biên cục bộ Gemma | Nhà phát triển đã sử dụng sâu hệ sinh thái Google Cloud / Android | Được xây dựng bằng TypeScript, ACP (Agent Control Protocol) là đặc điểm của lớp giao thức nội bộ |
| **GitHub Copilot CLI** | Liên kết liền mạch với đăng ký Copilot, tương tác với tiện ích mở rộng IDE, đơn giản hóa cấu hình MCP | Người dùng VS Code đã có đăng ký Copilot Pro/Pro+ | Chủ yếu là mã nguồn đóng, tần suất phát hành cao nhưng kênh đóng góp cộng đồng cực kỳ hẹp |
| **Kimi CLI** | Ngữ cảnh dài, Plan Mode, trải nghiệm nhà phát triển tiếng Trung | Nhà phát triển trong nước, người dùng có nhu cầu xử lý tài liệu/kho mã dài | Mô hình tự phát triển + CLI tự phát triển, nhấn mạnh chạy nhiệm vụ dài không cần cấu hình |
| **OpenCode** | Tương thích đa mô hình (cục bộ/đám mây), thân thiện với nhà phát triển mở rộng, xác thực Workspace | "Người du mục mô hình" không muốn bị khóa bởi một mô hình duy nhất | TypeScript + AI SDK, lớp trừu tượng Provider có tính module hóa cao |
| **Pi** | API mở rộng phong phú, khả năng tương thích terminal tối ưu, triển khai đa đám mây/đa mô hình | Nhà phát triển mở rộng / SRE doanh nghiệp cần nhúng AI CLI vào chuỗi công cụ tùy chỉnh | TypeScript đơn kho, nhấn mạnh thời gian chạy mở rộng `pi.*` và hệ sinh thái mẫu Prompt |
| **Qwen Code** | Tạo mã tiếng Trung, tối ưu hóa gốc mô hình Qwen, dịch vụ cho nhà phát triển trong nước | Nhà phát triển Trung Quốc, người dùng hệ sinh thái Alibaba Cloud | Mô hình tự phát triển + lối vào miễn phí OAuth, nhưng đang trải qua khó khăn trong quá trình chuyển đổi mô hình kinh doanh |

---

## 5. Mức độ Phổ biến và Độ trưởng thành của Cộng đồng

### Hoạt động Cao + Lặp lại Nhanh
- **Claude Code**: Việc phát hành mô hình ngay lập tức gây ra thảo luận sôi nổi, nhưng vòng lặp "phát hành - crash - hotfix" cho thấy nợ ổn định đang tích lũy
- **OpenAI Codex**: 50 PRs/ngày thể hiện sự tham gia cao của cộng đồng mã nguồn mở, việc viết lại bằng Rust + hệ thống Hooks đang trong giai đoạn nâng cấp kiến trúc
- **Pi**: Tỷ lệ đóng Issue cao, phản hồi nhanh, lặp lại dày đặc các bản sửa lỗi tương thích terminal và API mở rộng, là một ví dụ điển hình về sự phát triển nhanh chóng

### Hoạt động Cao + Chịu Áp lực Cảm xúc
- **GitHub Copilot CLI**: Issue hoạt động sôi nổi nhưng **0 PR**, ở chế độ mã nguồn đóng người dùng chỉ có thể chờ đợi bản sửa lỗi chính thức; Tranh cãi về giới hạn tỷ lệ truy cập tiếp tục gia tăng
- **Qwen Code**: Thay đổi chính sách dẫn đến cảm xúc tiêu cực trong Issues, việc lặp lại công nghệ bị che mờ bởi khủng hoảng vận hành

### Hoạt động Trung bình + Tối ưu hóa Kiên định
- **Gemini CLI**: Không phát hành phiên bản mới nhưng PR có chất lượng cao, sửa lỗi trải nghiệm và mở rộng mô hình song song, nhịp độ ổn định
- **Kimi CLI**: PR được hợp nhất tích cực, nhưng tranh cãi về khả năng hiển thị "thinking" cho thấy sự sai lệch giữa quyết định sản phẩm và kỳ vọng của nhà phát triển
- **OpenCode**: Tái cấu trúc mã quy mô lớn và điều tra rò rỉ bộ nhớ song song, đầu tư rõ ràng cho khả năng bảo trì dài hạn, nhưng có khoảng trống QA ngắn hạn

---

## 6. Tín hiệu Xu hướng Đáng chú ý

| Tín hiệu Xu hướng | Hỗ trợ Dữ liệu | Giá trị Tham khảo cho Nhà phát triển |
|:---|:---|:---|
| **"Khả năng hiển thị Thinking" trở thành Cơ sở hạ tầng Niềm tin** | Kimi #1865 (11 bình luận phản đối mạnh mẽ việc ẩn thinking), Cộng đồng Claude Code đặc biệt quan tâm đến cấp độ "reasoning effort" | Nhà phát triển không chỉ quan tâm đến chất lượng đầu ra mà còn yêu cầu hiểu "cách mô hình suy nghĩ". Khi xây dựng công cụ AI, thiết kế tính minh bạch của quá trình suy luận nên được đưa vào UX cốt lõi |
| **Giới hạn Tỷ lệ Truy cập từ "Kiểm soát Chi phí" thành "Sát thủ Năng suất"** | Copilot CLI #2756/#2712 (sau giới hạn, 1-2 lần gọi lại kích hoạt), Claude Code vấn đề nan giải về khả năng quan sát chi phí lâu dài | Trong chế độ đa Agent / Auto, thiết kế giới hạn nên chuyển từ "yêu cầu người dùng đơn lẻ" sang "quản lý hạn ngạch theo nhiệm vụ". Doanh nghiệp nên ưu tiên kiểm tra sự phù hợp giữa chiến lược giới hạn và quy trình làm việc khi đánh giá công cụ |
| **Tương thích Terminal trở thành Rào cản Cứng để Doanh nghiệp Áp dụng** | Pi sửa lỗi Zellij/tmux/RTL trong một ngày; Claude Code lỗi crash Windows ARM64 kéo dài; Codex lỗi密集 WSL | "Có chạy được trong môi trường terminal của tôi không" đang thay thế "mô hình đủ mạnh" trở thành điều kiện tiên quyết cho quyết định mua hàng. Lựa chọn công cụ cần ưu tiên xác minh ma trận tương thích của môi trường mục tiêu |
| **Chuyển đổi từ "Công cụ Đơn lẻ" sang "Nền tảng Có thể Điều phối"** | Codex Hooks (#18236/#17563), Pi tách rời RPC (#3298), Gemini ACP, Kimi chế độ sidecar (#3352) | Nhà phát triển bắt đầu coi AI CLI như một thành phần có thể gọi được trong quy trình làm việc, thay vì một terminal độc lập. API mở rộng, đầu ra có cấu trúc, khả năng giao tiếp giữa các tiến trình sẽ trở thành tâm điểm cạnh tranh thế hệ tiếp theo |
| **"Nợ mã hóa cứng" Thích ứng Mô hình Bị Lộ ra** | OpenCode lỗi crash Opus 4.7 trong 24 giờ rồi sửa; Pi v0.67.5 sửa lỗi ánh xạ adaptive-thinking; Kimi #1911 mã hóa cứng `opus-4.6` | Lặp lại mô hình thượng nguồn tăng tốc, việc duy trì thủ công ánh xạ đặc điểm mô hình là không bền vững. Công cụ tự phát triển nên sớm đầu tư vào cơ chế tự động phát hiện/đăng ký khả năng mô hình |
| **Thu hẹp Lớp Miễn phí Thúc đẩy Bản địa hóa / Triển khai Mã nguồn Mở** | Qwen Code hạn ngạch miễn phí từ 1000→100 và sắp đóng; Claude Code Max đăng ký mới dùng được Opus 4.7 Auto | Nhà phát triển nên đẩy nhanh đánh giá tính khả thi của kết hợp mô hình cục bộ (Ollama/Gemma/Qwen) + CLI mã nguồn mở (OpenCode/Pi), giảm sự phụ thuộc vào lớp miễn phí/đăng ký trên đám mây |

---

*Báo cáo kết thúc*

---

## Báo cáo Chi tiết Từng Công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Các Điểm Nóng Cộng đồng Claude Code Skills

> Nguồn dữ liệu: [anthropics/skills](https://github.com/anthropics/skills)

# Báo cáo Điểm Nóng Cộng đồng Claude Code Skills (Tính đến ngày 2026-04-17)

---

## 1. Danh sách Skills Phổ biến (theo mức độ quan tâm của cộng đồng)

| Thứ hạng | Skill | Mô tả Chức năng | Điểm Nóng Thảo luận | Trạng thái |
|:---|:---|:---|:---|:---|
| 1 | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | Kiểm soát chất lượng dàn trang tài liệu do AI tạo ra, sửa các lỗi điển hình như dòng cô đơn, dòng côi, đánh số sai | Được coi là "lỗi phổ biến của tất cả tài liệu do Claude tạo ra", tính phổ biến cực cao, cộng đồng kêu gọi hợp nhất sớm | OPEN |
| 2 | **skill-quality-analyzer / skill-security-analyzer** ([#83](https://github.com/anthropics/skills/pull/83)) | Công cụ phân tích siêu cấp (meta-analysis) cho chính Skill về chất lượng và bảo mật, đánh giá theo các khía cạnh cấu trúc, tài liệu, bảo mật | Khái niệm siêu kỹ năng (meta skill) được quan tâm, nhưng thảo luận tập trung vào tiêu chuẩn đánh giá có uy tín hay không | OPEN |
| 3 | **frontend-design** ([#210](https://github.com/anthropics/skills/pull/210)) | Tối ưu hóa khả năng thực thi và độ rõ ràng của Skill thiết kế frontend, đảm bảo có thể triển khai trong một lượt hội thoại | Cộng đồng quan tâm đến ranh giới "khả năng thực thi" của kỹ thuật nhắc nhở Skill, tránh trừu tượng hóa quá mức | OPEN |
| 4 | **odt** ([#486](https://github.com/anthropics/skills/pull/486)) | Tạo, điền mẫu và chuyển đổi sang HTML định dạng OpenDocument (.odt/.ods) | Nhu cầu tiêu chuẩn tài liệu mã nguồn mở mạnh mẽ, bổ sung cho các skill docx/pdf hiện có | OPEN |
| 5 | **codebase-inventory-audit** ([#147](https://github.com/anthropics/skills/pull/147)) | Dọn dẹp kho mã và kiểm toán tài liệu, xác định mã con, tệp không sử dụng, phình to cơ sở hạ tầng | Bối cảnh bảo trì cấp doanh nghiệp rõ ràng, quy trình 10 bước gây ra thảo luận về "có quá dài không" | OPEN |
| 6 | **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) | Bao phủ các mẫu kiểm thử toàn diện, từ triết lý kiểm thử, kiểm thử đơn vị đến các thành phần React và E2E | Bổ sung khoảng trống trong lĩnh vực kiểm thử, cộng đồng quan tâm đến sự phối hợp với các skill tạo mã hiện có | OPEN |
| 7 | **shodh-memory** ([#154](https://github.com/anthropics/skills/pull/154)) | Cung cấp bộ nhớ bền vững giữa các phiên cho Agent AI, chủ động gọi lại thông qua `proactive_context` | Lớp bộ nhớ là điểm yếu cốt lõi của Agent, thảo luận liên quan đến quyền riêng tư, giải quyết xung đột và giới hạn lưu trữ | OPEN |
| 8 | **sensory** ([#806](https://github.com/anthropics/skills/pull/806)) | Tự động hóa gốc trên macOS thông qua AppleScript, thay thế việc sử dụng máy tính dựa trên ảnh chụp màn hình | Thiết kế phân lớp quyền được đánh giá cao, được coi là bước quan trọng để Claude Code tích hợp sâu vào OS | OPEN |

---

## 2. Xu hướng Nhu cầu Cộng đồng (từ Issues)

| Hướng | Issue Đại diện | Yêu cầu Cốt lõi |
|:---|:---|:---|
| **Quản trị Skill và Ranh giới Tin cậy** | [#492](https://github.com/anthropics/skills/issues/492) | Các kỹ năng của cộng đồng lạm dụng không gian tên `anthropic/` để giả mạo chính thức, khẩn cấp cần cơ chế chữ ký, xem xét và phân tách không gian tên |
| **Chia sẻ Skill Cấp Tổ chức** | [#228](https://github.com/anthropics/skills/issues/228) | Người dùng doanh nghiệp có nhu cầu mạnh mẽ về kho Skill nội bộ, việc truyền tệp thủ công hiện nay cực kỳ kém hiệu quả |
| **Nâng cấp Chuỗi công cụ skill-creator** | [#202](https://github.com/anthropics/skills/issues/202) | Lời nhắc do nhà cung cấp cung cấp cho skill-creator dài dòng, kém hiệu quả về token và không phù hợp với các phương pháp hay nhất của riêng họ |
| **Độ tin cậy của Đánh giá và Kích hoạt** | [#556](https://github.com/anthropics/skills/issues/556) | Tỷ lệ kích hoạt 0% của `run_eval.py` bộc lộ các khuyết tật hệ thống của cơ sở hạ tầng kiểm thử skill |
| **Tương tác Giao thức MCP** | [#16](https://github.com/anthropics/skills/issues/16) | Cộng đồng mong muốn Skills có thể được hiển thị dưới dạng Máy chủ MCP, đạt được đóng gói API tiêu chuẩn hóa |
| **Triển khai Đa đám mây/Đa mô hình** | [#29](https://github.com/anthropics/skills/issues/29) | Các kênh doanh nghiệp như AWS Bedrock không thể sử dụng skills trực tiếp, hạn chế việc triển khai thương mại |
| **Loại bỏ Trùng lặp Tài liệu và Plugin** | [#189](https://github.com/anthropics/skills/issues/189) | Nội dung `document-skills` và `example-skills` trùng lặp, dẫn đến ô nhiễm cửa sổ ngữ cảnh |

---

## 3. Skills Có Tiềm năng Cao Chờ Hợp nhất (Có thể Ra mắt Sớm)

Các PR sau đây, mặc dù chưa được hợp nhất, nhưng có chức năng tập trung, thảo luận trưởng thành hoặc sửa các lỗi quan trọng, có khả năng ra mắt sớm:

- **#514 document-typography** — sửa lỗi tài liệu phổ biến, không phụ thuộc, sự đồng thuận cao của cộng đồng
- **#541 Sửa lỗi xung đột bookmark DOCX** — sửa lỗi quan trọng làm hỏng tài liệu do skill DOCX gây ra ([Liên kết](https://github.com/anthropics/skills/pull/541))
- **#539 / #538 / #362 / #36 Loạt sửa lỗi skill-creator** — các bản vá cho phân tích cú pháp YAML, UTF-8, độ nhạy cảm với chữ hoa chữ thường, nhu cầu cấp thiết về độ ổn định của chuỗi công cụ
- **#509 CONTRIBUTING.md** — điểm số sức khỏe cộng đồng chỉ 25%, tài liệu này là cải tiến có đòn bẩy cao nhất ([Liên kết](https://github.com/anthropics/skills/pull/509))
- **#521 record-knowledge** — giải pháp nhẹ nhàng cho vấn đề mất trí nhớ giữa các phiên của Claude Code, tạo thành sự kết hợp cao-thấp với #154 shodh-memory
- **#806 sensory** — tự động hóa gốc trên macOS, bổ sung khoảng trống tích hợp OS

---

## 4. Thông tin Hệ sinh thái Skills

> **Nhu cầu tập trung nhất của cộng đồng: Làm cho Skills tiến hóa từ "bộ sưu tập lời nhắc cá nhân" thành "cơ sở hạ tầng cấp sản xuất đáng tin cậy, có thể chia sẻ, có thể kiểm thử" — mâu thuẫn cốt lõi tập trung vào quản trị tổ chức, độ tin cậy của đánh giá, triển khai đa nền tảng và mức độ trưởng thành của công cụ chính thức.**

---

---

# Claude Code: Báo cáo Nhật ký Cộng đồng | 2026-04-17

---

## 1. Tổng quan Hôm nay

Anthropic hôm nay đã phát hành liên tục **v2.1.111** và **v2.1.112**, chính thức ra mắt **Claude Opus 4.7** và bổ sung cấp độ nỗ lực `xhigh`, đồng thời sửa các vấn đề về khả năng sử dụng của Opus 4.7 ở chế độ Auto. Cộng đồng phản ứng nhiệt tình, nhưng sự cố tích hợp Bedrock, lỗi crash phiên Cowork và các vấn đề tương thích Windows ARM64 trở thành tâm điểm phản hồi tần suất cao nhất hôm nay.

---

## 2. Phát hành Phiên bản

### v2.1.111 → v2.1.112

| Phiên bản | Cập nhật Cốt lõi |
|:---|:---|
| **[v2.1.111](https://github.com/anthropics/claude-code/releases/tag/v2.1.111)** | **Claude Opus 4.7 chính thức ra mắt**; Bổ sung cấp độ nỗ lực `xhigh` (nằm giữa `high` và `max`); Người dùng đăng ký Max có thể sử dụng Opus 4.7 ở chế độ Auto; Hỗ trợ cấu hình qua tham số `/effort`, `--effort` và lựa chọn mô hình |
| **[v2.1.112](https://github.com/anthropics/claude-code/releases/tag/v2.1.112)** | Sửa lỗi hiển thị `"claude-opus-4-7 is temporarily unavailable"` ở chế độ Auto |

> **Giải thích**: Việc phát hành Opus 4.7 là bản nâng cấp mô hình quan trọng nhất gần đây, nhưng việc theo dõi bằng hotfix chỉ trong vòng 24 giờ cho thấy logic định tuyến chế độ Auto có các trường hợp biên trong phiên bản đầu tiên.

---

## 3. Issues Nóng Cộng đồng

### 🔥 Mô hình và Tích hợp API

| # | Issue | Trạng thái | Bình luận | Vấn đề Cốt lõi |
|:---|:---|:---|:---:|:---|
| **[#49238](https://github.com/anthropics/claude-code/issues/49238)** | Opus 4.7 doesn't work with Bedrock | 🟢 OPEN | 44 | **Người dùng Bedrock không thể sử dụng mô hình mới** ảnh hưởng đến nhiều triển khai Linux cấp doanh nghiệp, cộng đồng kêu gọi sửa lỗi nhanh chóng |
| **[#49609](https://github.com/anthropics/claude-code/issues/49609)** | Model selection mismatch: /model shows 4.7 but sets 4.6 | 🟢 OPEN | 1 | Lỗi không nhất quán giữa UI menu `/model` và cấu hình thực tế, có thể gây nhầm lẫn cho người dùng |
| **[#49604](https://github.com/anthropics/claude-code/issues/49604)** | Opus 4.5→4.6→4.7: Car wash failure persists | 🟢 OPEN | 2 | Người dùng sử dụng "kiểm tra rửa xe" để theo dõi sự suy giảm của mô hình, chỉ ra khả năng phục hồi đa lượt liên tục suy giảm |

### 🔥 Độ ổn định Chức năng Cốt lõi

| # | Issue | Trạng thái | Bình luận | Vấn đề Cốt lõi |
|:---|:---|:---|:---:|:---|
| **[#45596](https://github.com/anthropics/claude-code/issues/45596)** | Bring Back Buddy — A Consolidated Plea from the Community | 🟢 OPEN | 186 | **Phản hồi có tiếng nói nhất của cộng đồng**, skill `/buddy` bị xóa lặng lẽ trong v2.1.97, nhận được 806 👍, người dùng kịch liệt kêu gọi khôi phục |
| **[#46029](https://github.com/anthropics/claude-code/issues/46029)** | New Cowork sessions crash with "exited with code 1" | 🔴 CLOSED | 46 | Phiên Cowork mới trên Windows + VS Code bị crash, cả `/doctor` và `/bug` đều không hoạt động, đã đóng nhưng các vấn đề tương tự vẫn tiếp tục bùng phát |
| **[#49367](https://github.com/anthropics/claude-code/issues/49367)** | macOS sessions crash on macOS (SDK 2.1.111) | 🟢 OPEN | 19 | **Tạo tiến trình spawn cho SDK 2.1.111 trên máy tính để bàn macOS bị lỗi**, Cowork hoàn toàn bị crash, tạo thành một mẫu hình trên nhiều nền tảng cùng với vấn đề Windows |
| **[#49253](https://github.com/anthropics/claude-code/issues/49253)** | Agent Teams: subagent permission request crashes Bun | 🟢 OPEN | 4 | Trong tính năng Agent Teams thử nghiệm, yêu cầu quyền của đại lý phụ gây ra **lỗi tiến trình Bun**, chặn các trường hợp tự động hóa nâng cao |

### 🔥 Nền tảng và Tương thích

| # | Issue | Trạng thái | Bình luận | Vấn đề Cốt lõi |
|:---|:---|:---|:---:|:---|
| **[#26723](https://github.com/anthropics/claude-code/issues/26723)** | Bun v1.3.10 crashes on Windows 11 ARM64 | 🔴 CLOSED | 28 | Vấn đề căn chỉnh lỗi crash kéo dài trên Windows ARM64, chính thức xác nhận sẽ sửa trong phiên bản tiếp theo (phụ thuộc vào PR upstream của Bun) |
| **[#48241](https://github.com/anthropics/claude-code/issues/48241)** | SSH remote connection fails after Desktop update | 🟢 OPEN | 5 | Sau khi cập nhật Desktop v1.2581 phiên bản MSIX Windows, xác thực kết nối từ xa SSH đều thất bại, người dùng WSL bị ảnh hưởng |
| **[#48553](https://github.com/anthropics/claude-code/issues/48553)** | Windows app closes automatically after a minute in CODE-Mode | 🟢 OPEN | 5 | Ứng dụng Windows cùng phiên bản (1.2581) tự động thoát sau 1 phút ở chế độ CODE |

> **Tâm trạng Cộng đồng**: Việc phát hành Opus 4.7 mang lại sự phấn khích, nhưng **lỗi crash Cowork đa nền tảng, không tương thích Bedrock, và sự trở lại của Windows Desktop** nhanh chóng làm giảm bớt cảm xúc tích cực. Sự cố xóa `/buddy` tiếp tục lan rộng, cho thấy sự thiếu sót của Anthropic trong việc truyền đạt thông tin về việc ngừng cung cấp chức năng.

---

## 4. Tiến trình PR Quan trọng

| # | PR | Trạng thái | Tác giả | Chức năng/Sửa lỗi |
|:---|:---|:---|:---|:---|
| **[#49596](https://github.com/anthropics/claude-code/pull/49596)** | refactor: extract shared GitHub API client into `github-api.ts` with tests | 🟢 OPEN | bsene | Trích xuất ứng dụng khách GitHub API dùng chung và bổ sung kiểm thử, nâng cao khả năng bảo trì mã |
| **[#40322](https://github.com/anthropics/claude-code/pull/40322)** | feat(devcontainer): enhance firewall with hybrid static/dynamic IP management | 🟢 OPEN | scottrigby | Cải thiện tường lửa devcontainer, hỗ trợ quản lý IP tĩnh/động hỗn hợp, sửa các vấn đề như loại bỏ biến môi trường sudo |
| **[#48335](https://github.com/anthropics/claude-code/pull/48335)** | fix(hookify): support `Write` content for `new_text` rules | 🟢 OPEN | Rohan5commit | Sửa lỗi plugin hookify đọc trường `content` của công cụ `Write` (trước đó chỉ hỗ trợ `new_string` của `Edit`) |
| **[#49230](https://github.com/anthropics/claude-code/pull/49230)** | Format description and examples in `conversation-analyzer.md` | 🟢 OPEN | revo1290 | Cải thiện định dạng tài liệu, tối ưu hóa mô tả và ví dụ của `conversation-analyzer.md` |
| **[#48905](https://github.com/anthropics/claude-code/pull/48905)** | perf: run commit-commands with haiku | 🔴 CLOSED | abishekgiri | Thử tăng tốc tạo lệnh commit bằng mô hình Haiku, đã đóng |
| **[#45721](https://github.com/anthropics/claude-code/pull/45721)** | Add Claude Mythos operating contract for Veriflow immune system | 🔴 CLOSED | GoodshytGroup | PR phi kỹ thuật, tác giả tự nhận "không biết mình đang làm gì", đã đóng |
| **[#1](https://github.com/anthropics/claude-code/pull/1)** | Create SECURITY.md | 🔴 CLOSED | bcherny | Tạo tài liệu chính sách bảo mật, đã đóng |

> **Lưu ý**: Chỉ có 7 PR hoạt động thực tế trong 24 giờ qua, trong đó 3 PR đã đóng. Đóng góp của cộng đồng chủ yếu là các bản sửa lỗi nhỏ và cải tiến tài liệu, **không có PR nào của cộng đồng nhắm vào lỗi crash Opus 4.7/Bedrock hoặc Cowork**.

---

## 5. Xu hướng Nhu cầu Chức năng

Dựa trên sự phân bố của 50 Issues hôm nay, trọng tâm cộng đồng thể hiện các hướng sau:

| Thứ hạng | Hướng | Bằng chứng |
|:---|:---|:---|
| 1 | **TUI / Trải nghiệm Tương tác** | Kêu gọi khôi phục `/buddy` (#45596), điều hướng kiểu Vim (#49606), chia đôi màn hình nhập/xuất (#49608), khôi phục phím tắt Ctrl+W/Ctrl+U (#49317) |
| 2 | **Độ tin cậy của Mô hình và Kiểm soát Chi phí** | Lỗi chọn mô hình (#49609), bộ nhớ cache prompt bị hỏng (#49585), bộ nhớ cache resume bị lỗi (#43657), dữ liệu token thiếu cho SubagentStop (#47045) |
| 3 | **Độ ổn định Đa nền tảng (Windows / Desktop)** | Lỗi crash ARM64 (#26723), lỗi SSH sau khi cập nhật (#48241), ứng dụng tự thoát ở chế độ CODE (#48553) |
| 4 | **Tích hợp Doanh nghiệp (Bedrock / Quyền / Plugin)** | Bedrock không hỗ trợ Opus 4.7 (#49238), yêu cầu xác nhận Bypass Permissions vẫn tồn tại (#47081), lỗi tranh chấp SIGTERM plugin (#49610) |
| 5 | **Cowork / Chức năng Hợp tác** | Lỗi crash phiên mới đồng thời trên Windows (#46029) và macOS (#49367), trở thành điểm yếu ổn định lớn nhất của v2.1.111 |

---

## 6. Điểm Quan tâm của Nhà phát triển

### Điểm Đau Tần suất Cao

1. **Khủng hoảng Niềm tin từ "Xóa Lặng lẽ"**
   `/buddy` bị ngừng hoạt động mà không có thông báo trong v2.1.97, gây ra gần 200 bình luận trong #45596. Nhà phát triển đặt câu hỏi về tính đầy đủ của nhật ký thay đổi của Anthropic và cơ chế truyền đạt thông tin khi ngừng cung cấp chức năng.

2. **Căng thẳng giữa Phát hành Phiên bản Mới và Độ ổn định**
   Opus 4.7 và v2.1.111 ra mắt cùng ngày, nhưng Cowork bị crash trên hai nền tảng desktop chính (Windows, macOS) và tích hợp Bedrock cũng chưa sẵn sàng. Người dùng doanh nghiệp lo ngại rủi ro "đuổi theo cái mới".

3. **Sự phân mảnh Liên tục của Hệ sinh thái Windows**
   Lỗi crash ARM64, lỗi SSH sau cập nhật MSIX, lỗi flash ở chế độ CODE — mật độ phản hồi của người dùng Windows cao và chu kỳ sửa lỗi kéo dài, tạo ra sự chênh lệch rõ rệt về trải nghiệm nền tảng.

4. **Cạm bẫy "Thử nghiệm" của các Chức năng Nâng cao**
   Agent Teams (#49253) và chế độ Auto (hotfix v2.1.112) đều gặp lỗi nghiêm trọng ở cấp độ sản xuất, nhà phát triển kêu gọi bổ sung cảnh báo rủi ro rõ ràng hơn và cơ chế hoàn nguyên cho các chức năng thử nghiệm.

5. **Khả năng Quan sát Chi phí Không Đủ**
   Đại lý phụ `/btw` không có dữ liệu sử dụng token (#47045), bộ nhớ cache prompt bị hỏng bởi logic nội bộ (#49585), thay đổi đột ngột về chu kỳ sử dụng (#49599) — tính minh bạch về thanh toán vẫn là vấn đề nan giải lâu dài.

---

*Báo cáo hàng ngày được tạo dựa trên dữ liệu công khai từ github.com/anthropics/claude-code.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex: Báo cáo Nhật ký Cộng đồng | 2026-04-17

---

## 1. Tổng quan Hôm nay

Mức độ hoạt động cộng đồng hôm nay cực kỳ cao, với **50 Issues và 50 PRs** được cập nhật trong 24 giờ qua. Điểm chính: Hỗ trợ **ứng dụng máy tính để bàn macOS Intel (x86_64)** đã chính thức đóng (đã giải quyết), sau một thời gian dài im lặng, đồng thời hai chức năng CLI lớn là **PermissionRequest Hooks** và **Goal Mode TUI** đang bước vào giai đoạn hợp nhất cuối cùng. Các vấn đề về độ ổn định liên quan đến Windows/WSL vẫn là điểm tập trung phản hồi của cộng đồng.

---

## 2. Phát hành Phiên bản

| Phiên bản | Mô tả |
|:---|:---|
| **rust-v0.122.0-alpha.5** | Phiên bản xem trước CLI Rust, ghi chú thay đổi chi tiết không được công bố trong Release Note |
| **rust-v0.122.0-alpha.3** | Tương tự, là một chuỗi lặp lại của cùng một chuỗi |

> Lưu ý: Cả hai phiên bản alpha đều không cung cấp nhật ký thay đổi chi tiết, nên xem xét diff commit của tag tương ứng.

---

## 3. Issues Nóng Cộng đồng

| # | Issue | Trạng thái | Điểm Cốt lõi | Liên kết |
|:---|:---|:---|:---|:---|
| **#10410** | Codex Desktop App: macOS Intel (x86_64) support | 🟢 CLOSED | **285 👍 / 187 bình luận**, một trong những yêu cầu hỗ trợ nền tảng có tiếng nói nhất của cộng đồng, hôm nay chính thức đóng, đánh dấu việc người dùng Intel Mac nhận được hỗ trợ chính thức | [Liên kết](https://github.com/openai/codex/issues/10410) |
| **#10450** | Remote Development in Codex Desktop App | 🔴 OPEN | **555 👍 / 134 bình luận**, người dùng yêu cầu mạnh mẽ hỗ trợ phát triển từ xa trên ứng dụng máy tính để bàn (đối trọng với VS Code Remote-SSH), là yêu cầu có độ phổ biến cao nhất hiện nay | [Liên kết](https://github.com/openai/codex/issues/10450) |
| **#2109** | Event Hooks | 🟢 CLOSED | **526 👍 / 76 bình luận**, yêu cầu chức năng Hooks vòng đời đã đóng, phản ánh các PR liên quan đến Hooks hôm nay | [Liên kết](https://github.com/openai/codex/issues/2109) |
| **#11325** | Manual /compact command in Codex app | 🔴 OPEN | **145 👍 / 54 bình luận**, lệnh `/compact` đã có trong CLI bị thiếu trên ứng dụng máy tính để bàn, điểm đau của người dùng có phiên dài | [Liên kết](https://github.com/openai/codex/issues/11325) |
| **#13822** | macOS Input Bug: Control-F cursor movement broken | 🟢 CLOSED | 20 bình luận, vấn đề khôi phục phím tắt nhập gốc trên macOS đã được sửa, thể hiện sự chú trọng đến trải nghiệm chi tiết trên máy tính để bàn | [Liên kết](https://github.com/openai/codex/issues/13822) |
| **#16088** | WSL: empty `.codex` file left behind | 🔴 OPEN | 19 bình luận, hành vi sandbox bất thường khi có WSL + dự án không có `.codex`, nhà phát triển Windows thường xuyên gặp lỗi | [Liên kết](https://github.com/openai/codex/issues/16088) |
| **#17525** | Ubuntu: every normal edit requires skipping sandbox | 🔴 OPEN | 14 bình luận, chính sách sandbox Linux quá mạnh, ảnh hưởng nghiêm trọng đến sự trôi chảy của chỉnh sửa cục bộ | [Liên kết](https://github.com/openai/codex/issues/17525) |
| **#18069** | v0.121.0: apply_patch fails with `use_legacy_landlock=true` | 🔴 OPEN | 5 bình luận, **lỗi quay lại của 0.121.0**, chỉnh sửa kho làm việc thất bại với cấu hình Landlock cũ, cần chú ý khẩn cấp | [Liên kết](https://github.com/openai/codex/issues/18069) |
| **#17649** | VS Code extension: file reference links not working | 🔴 OPEN | 8 bình luận, liên kết tệp trong tiện ích mở rộng IDE hoàn toàn không hoạt động, là lỗi quay lại rõ ràng gần đây | [Liên kết](https://github.com/openai/codex/issues/17649) |
| **#17322** | Windows: App does not fully exit on close + UI hit-testing issue | 🔴 OPEN | 9 bình luận, đóng ứng dụng máy tính để bàn Windows không hoàn toàn + lỗi nhấp chuột vào thanh bên, lỗi trải nghiệm cơ bản | [Liên kết](https://github.com/openai/codex/issues/17322) |

---

## 4. Tiến trình PR Quan trọng

| # | PR | Trạng thái | Mô tả Chức năng/Sửa lỗi | Liên kết |
|:---|:---|:---|:---|:---|
| **#18236** | Add PermissionRequest hook plumbing | 🔵 OPEN | Cơ sở hạ tầng quan trọng của hệ thống Hooks (phần 1 của stack 2-PR), cung cấp kênh sự kiện để phê duyệt quyền | [Liên kết](https://github.com/openai/codex/pull/18236) |
| **#17563** | Add PermissionRequest hooks support | 🔵 OPEN | Thực hiện đầy đủ của stack tương tự, hỗ trợ người dùng tùy chỉnh logic thông báo/chặn trong Hooks | [Liên kết](https://github.com/openai/codex/pull/17563) |
| **#18077** | Add goal mode TUI UX (5 / 5) | 🔵 OPEN | **Chương cuối của TUI Goal Mode**, bổ sung lệnh `/goal`, chỉ báo thanh trạng thái, xử lý cập nhật mục tiêu, v.v. | [Liên kết](https://github.com/openai/codex/pull/18077) |
| **#18190** | Add `/side` conversations | 🔵 OPEN | Hỗ trợ TUI **hội thoại phụ (`/side`)**, cho phép đặt câu hỏi tạm thời nhanh chóng mà không làm gián đoạn luồng chính | [Liên kết](https://github.com/openai/codex/pull/18190) |
| **#18096** | feat(sandbox): add glob deny-read platform enforcement | 🔵 OPEN | Tăng cường bảo mật sandbox: cả macOS Seatbelt và Linux bwrap đều hỗ trợ quy tắc từ chối đọc theo mẫu glob | [Liên kết](https://github.com/openai/codex/pull/18096) |
| **#17862** | Stream apply_patch changes | 🔵 OPEN | `apply_patch` hỗ trợ đầu ra sự kiện **dạng luồng**, khách hàng có thể hiển thị tiến trình ghi tệp trong thời gian thực | [Liên kết](https://github.com/openai/codex/pull/17862) |
| **#18231** | codex: split thread/read view loading | 🔵 OPEN | Tái cấu trúc logic đọc luồng: tách rõ ràng việc tải dữ liệu bền vững, tải dữ liệu thời gian thực và các bước hợp nhất, chuẩn bị cho việc di chuyển ThreadStore sau này | [Liên kết](https://github.com/openai/codex/pull/18231) |
| **#18232** | codex: route thread/read persistence through thread store | 🔵 OPEN | Dựa trên #18231, định tuyến chính thức việc đọc/ghi dữ liệu bền vững của luồng đến `ThreadStore` | [Liên kết](https://github.com/openai/codex/pull/18232) |
| **#17713** | feat: add opt-in provider runtime abstraction | 🔵 OPEN | Bổ sung crate `codex-model-provider`, cung cấp lớp trừu tượng thời gian chạy cho các nhà cung cấp mô hình bên thứ ba | [Liên kết](https://github.com/openai/codex/pull/17713) |
| **#18173** | Add explicit thread environment selection | 🔵 OPEN | API khởi động luồng bổ sung `environmentId`, cho phép lựa chọn rõ ràng môi trường `local` hoặc `remote` | [Liên kết](https://github.com/openai/codex/pull/18173) |

---

## 5. Xu hướng Nhu cầu Chức năng

Dựa trên phân tích Issues trong 24 giờ qua, các hướng cộng đồng quan tâm nhất được sắp xếp như sau:

| Thứ hạng | Hướng | Nhu cầu Đại diện |
|:---|:---|:---|
| 🥇 | **Hoàn thiện Ứng dụng Máy tính để bàn Đa nền tảng** | Hỗ trợ macOS Intel đã được giải quyết, nhưng độ ổn định của Windows (đặc biệt là WSL/ARM64), hỗ trợ phát triển từ xa vẫn là khoảng trống lớn nhất |
| 🥈 | **Trải nghiệm Tiện ích Mở rộng IDE** | Liên kết tệp trong tiện ích mở rộng VS Code bị lỗi, lỗi hiển thị diff, thay đổi bố cục UI thường xuyên, v.v., các vấn đề tập trung bùng phát |
| 🥉 | **Tương tác CLI/TUI Nâng cao** | Nhu cầu quy trình làm việc người dùng chuyên sâu như `/compact`, xem terminal nền, hội thoại phụ `/side`, Goal Mode, v.v. |
| 4 | **Quản lý Sandbox và Quyền** | Chính sách sandbox Linux quá nhạy cảm, lỗi quay lại của cấu hình `use_legacy_landlock`, phê duyệt quyền Hooks trở thành chủ đề thảo luận tần suất cao |
| 5 | **Mô hình Tùy chỉnh và Hệ sinh thái MCP** | Tương thích mô hình cục bộ (LM Studio), hành vi bất thường của lệnh gọi công cụ sau khi nâng cấp phiên bản |

---

## 6. Điểm Quan tâm của Nhà phát triển

### 🔴 Điểm Đau Tần suất Cao

1. **Sự đứt gãy Trải nghiệm Windows/WSL**
   - Các vấn đề như đóng ứng dụng máy tính để bàn không hoàn toàn, không khởi động được ở chế độ WSL, vấn đề tương thích CPU ARM64, còn sót tệp `.codex` trống, v.v., xuất hiện dày đặc, gây áp lực lên sự hài lòng của nhóm nhà phát triển Windows.

2. **Lỗi Quay lại Tiện ích Mở rộng IDE**
   - Liên kết tệp bị lỗi, siêu liên kết không nhấp được, kiểu hiển thị diff bị hỏng hoàn toàn, vị trí phần tử UI thay đổi thường xuyên — chất lượng cập nhật gần đây của tiện ích mở rộng VS Code gây lo ngại.

3. **Chính sách Sandbox Linux Quá Nghiêm ngặt**
   - Người dùng Ubuntu hầu như mỗi lần chỉnh sửa thông thường đều phải bỏ qua sandbox thủ công, cấu hình `use_legacy_landlock` còn xuất hiện lỗi quay lại trong 0.121.0, ảnh hưởng nghiêm trọng đến hiệu quả.

### 🟡 Tín hiệu Tích cực

- **Hệ sinh thái Hooks hình thành**: Từ việc đóng Issue #2109 đến việc thúc đẩy PR #18236/#17563, Codex đang chuyển đổi từ "công cụ thuần túy" sang "nền tảng tự động hóa có thể điều phối".
- **Lặp lại Nhanh chóng Khả năng TUI**: Goal Mode, hội thoại phụ `/side`, v.v., cho thấy sự hiểu biết sâu sắc về quy trình làm việc của nhà phát triển chuyên nghiệp.
- **Bổ sung Phạm vi Nền tảng**: Việc triển khai hỗ trợ macOS Intel đã giảm bớt nỗi lo lắng về tương thích phần cứng kéo dài.

---

*Báo cáo hàng ngày được tạo dựa trên dữ liệu công khai từ github.com/openai/codex.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI: Báo cáo Nhật ký Cộng đồng | 2026-04-17

---

## 1. Tổng quan Hôm nay

Hôm nay không có phiên bản mới nào được phát hành cho cộng đồng, nhưng mức độ hoạt động của mã cao: việc sửa lỗi trải nghiệm cốt lõi là trọng tâm chính, bao gồm các vấn đề nóng gây tranh cãi như RipGrep tải lỗi dẫn đến khởi động chậm, cửa sổ bật lên quyền tệp liên tục, và tình trạng treo giả sau khi thực thi lệnh Shell. Đồng thời, hỗ trợ mô hình Gemma 4, ưu tiên gọi API, tối ưu hóa định tuyến mô hình và các khả năng mới khác đang được hợp nhất nhanh chóng.

---

## 3. Issues Nóng Cộng đồng

| # | Tiêu đề | Mức độ Quan trọng | Phản ứng Cộng đồng | Liên kết |
|---|------|--------|----------|------|
| **#25323** | RipGrep tải lỗi không nên làm chậm khởi động vĩnh viễn | **Vấn đề Trải nghiệm P0**。Người dùng không có môi trường truy cập GitHub mỗi lần khởi động chờ 2+ phút, đề xuất nhanh chóng thất bại và xem xét RipGrep tích hợp sẵn. | 6 bình luận, đã được gắn thẻ `need-triage` và `possible-duplicate`, thảo luận tập trung vào chiến lược thất bại và giải pháp bundle。 | [Liên kết](https://github.com/google-gemini/gemini-cli/issues/25323) |
| **#22745** | Đánh giá ảnh hưởng của việc đọc/tìm kiếm dựa trên AST và ánh xạ kho mã | **EPIC Cấp Kiến trúc**。Công cụ nhận biết AST có thể giảm thiểu lỗi đọc, giảm nhiễu token, có khả năng định hình lại khả năng hiểu mã của agent。 | 5 bình luận, người bảo trì dẫn đầu, thuộc về quy trình làm việc dài hạn `workstream-rollup`。 | [Liên kết](https://github.com/google-gemini/gemini-cli/issues/22745) |
| **#24916** | Hỏi lại quyền đối với cùng một tệp | **Điểm Đau Tần suất Cao**。Sau khi người dùng chọn "cho phép cho tất cả các phiên tương lai" vẫn nhận được cửa sổ bật lên, làm gián đoạn quy trình làm việc nghiêm trọng。 | 3 bình luận, không 👍 nhưng là lỗi ổn định điển hình, phản hồi trực tiếp của người dùng。 | [Liên kết](https://github.com/google-gemini/gemini-cli/issues/24916) |
| **#24936** | Công cụ Edit / WriteFile không hiển thị tệp đang sửa đổi | **P0 Đã đóng**。Thiếu thông tin quan trọng khiến người dùng không thể phê duyệt chỉnh sửa một cách an toàn, đã đóng hôm qua cho thấy việc sửa lỗi đã được triển khai。 | 2 bình luận, trạng thái đóng, phản ánh phản ứng nhanh của nhóm đối với khả năng hiển thị công cụ cốt lõi。 | [Liên kết](https://github.com/google-gemini/gemini-cli/issues/24936) |
| **#22323** | Lỗi báo cáo thành công GOAL khi agent phụ bị gián đoạn bởi MAX_TURNS | **Vấn đề Độ tin cậy P1**。Agent phụ thực tế không hoàn thành nhiệm vụ nhưng trả về success, dẫn đến quyết định cấp trên dựa trên tín hiệu sai。 | 2 bình luận, 2 👍, là lỗi ẩn của lớp điều phối agent。 | [Liên kết](https://github.com/google-gemini/gemini-cli/issues/22323) |
| **#25166** | Treo ở "Waiting input" sau khi thực thi lệnh Shell | **Chặn Tương tác P1**。Sau khi lệnh đơn giản kết thúc, ứng dụng bị treo giả, cần người dùng ngắt thủ công, ảnh hưởng nghiêm trọng đến trải nghiệm quy trình tự động hóa。 | 2 bình luận, 2 👍, người báo cáo cung cấp bối cảnh tái hiện, người bảo trì đã theo dõi。 | [Liên kết](https://github.com/google-gemini/gemini-cli/issues/25166) |
| **#22267** | Browser Agent bỏ qua cấu hình ghi đè settings.json (ví dụ: maxTurns) | **Nhất quán Cấu hình P2**。Cấu hình toàn cục/dự án không có hiệu lực đối với Browser Agent, người dùng không thể quản lý ranh giới hành vi một cách thống nhất。 | 2 bình luận, định vị vấn đề rõ ràng: Lớp đăng ký Agent đọc đúng nhưng Browser Agent không tiêu thụ。 | [Liên kết](https://github.com/google-gemini/gemini-cli/issues/22267) |
| **#25216** | Khởi động thất bại trong đường dẫn tạm thời `A:\` | **Tương thích Windows**。Khi thực thi `gemini --yolo` trong PowerShell, `realpath` ném ra `EISDIR` cho thư mục。 | 1 bình luận, phản ánh các trường hợp biên của ký tự ổ đĩa/đường dẫn tạm thời không chuẩn của Windows。 | [Liên kết](https://github.com/google-gemini/gemini-cli/issues/25216) |
| **#25218** | Bảng biểu được hiển thị từng dòng trong chế độ đầu ra luồng làm hỏng bố cục trong chế độ trình đọc màn hình | **Khuyết tật Khả năng Tiếp cận**。Bảng biểu được vẽ lại nhiều lần trong quá trình luồng, gây nhầm lẫn thông tin cho người dùng phụ thuộc vào trình đọc màn hình。 | 0 bình luận nhưng là phát hiện phát sinh từ #24675, thể hiện việc chủ động rà soát khả năng tiếp cận của nhóm。 | [Liên kết](https://github.com/google-gemini/gemini-cli/issues/25218) |
| **#24246** | Kích hoạt lỗi 400 khi số lượng công cụ khả dụng vượt quá 128 | **Nút cổ chai Quy mô hóa**。Khi số lượng công cụ phình to, vượt quá giới hạn API, cần chiến lược cắt tỉa phạm vi công cụ thông minh hơn。 | 0 bình luận, là vấn đề dự báo về quản trị công cụ agent。 | [Liên kết](https://github.com/google-gemini/gemini-cli/issues/24246) |

---

## 4. Tiến trình PR Quan trọng

| # | Tiêu đề | Nội dung Chức năng/Sửa lỗi | Liên kết |
|---|------|-------------|------|
| **#25426** | Khôi phục bundling và tăng tốc kiểm thử lên 16 lõi | Nâng cấp cơ sở hạ tầng CI lớn: Giới thiệu lộ trình CI dựa trên artifact và hành động `setup-gemini` có thể tái sử dụng, giảm đáng kể thời gian CI bằng cách thay đổi phân chia kiểm thử từ xây dựng mã nguồn sang tiêu thụ bundle đã xây dựng sẵn。 | [Liên kết](https://github.com/google-gemini/gemini-cli/pull/25426) |
| **#25256** | Cập nhật thời gian thực cho đề xuất `@` dựa trên giám sát tệp | Bổ sung công tắc `context.fileFiltering.enableFileWatcher`, sau khi nhấn `@`, có thể thấy các tệp mới mà không cần chờ quét lại toàn bộ, cải thiện trải nghiệm chọn ngữ cảnh trong kho lớn。 | [Liên kết](https://github.com/google-gemini/gemini-cli/pull/25256) |
| **#25344** | Cắt bớt cấu trúc có giới hạn cho tải telemetry | Thực hiện chiến lược cắt bớt phân lớp cho telemetry, ngăn chặn lỗi phân tích cú pháp JSON và OOM; Đồng thời sửa lỗi ghi Cloud Monitoring bị lỗi do nhãn có số lượng lớn bị bùng nổ。 | [Liên kết](https://github.com/google-gemini/gemini-cli/pull/25344) |
| **#25537** | Sửa lỗi ngắt heredoc bằng cách gói dòng lệnh Shell | Sửa lỗi CLI gói lệnh người dùng thành `{ <command>; };` khi ký tự kết thúc heredoc (ví dụ: `EOF`) bị thêm dấu chấm phẩy sau đó gây lỗi cú pháp。 | [Liên kết](https://github.com/google-gemini/gemini-cli/pull/25537) |
| **#25545** | Tăng cường phát hiện lệnh nguy hiểm `rm` | Trong môi trường POSIX, `isDangerousCommand` hiện có thể nhận dạng chính xác `rm` kèm đường dẫn (ví dụ: `/bin/rm`) và bất kỳ thứ tự cờ nào, ngăn chặn việc vô tình kích hoạt xóa quy mô lớn。 | [Liên kết](https://github.com/google-gemini/gemini-cli/pull/25545) |
| **#25560** | Hỗ trợ mô hình Gemma 4 mới | Thêm `gemma-4-26b-a4b-it` vào danh sách mô hình tùy chọn và quản lý thông qua ACP (Agent Control Protocol), mở rộng tùy chọn suy luận cục bộ/biên。 | [Liên kết](https://github.com/google-gemini/gemini-cli/pull/25560) |
| **#25497** | Cho phép GEMINI_API_KEY chứa dấu chấm | Hỗ trợ định dạng khóa API mới (ví dụ: `AQ.Ab8RN6LEVE...`) được liên kết với Service Account, giải quyết vấn đề tương thích xác thực。 | [Liên kết](https://github.com/google-gemini/gemini-cli/pull/25497) |
| **#25555** | Thiết lập yêu cầu ưu tiên API mới | Mở `model.geminiApiPriority: true` cho người dùng Tier 2/3, có thể đánh dấu yêu cầu là ưu tiên cao, giảm độ trễ cao điểm。 | [Liên kết](https://github.com/google-gemini/gemini-cli/pull/25555) |
| **#25554** | Bỏ qua khi phân loại định tuyến mô hình dư thừa | Khi `pro` và `flash` được ghi đè thành cùng một mô hình (ví dụ: đều trỏ đến Gemma 4), `ModelRouterService` bỏ qua bước phân loại nhẹ, giảm một lần gọi mô hình không cần thiết。 | [Liên kết](https://github.com/google-gemini/gemini-cli/pull/25554) |
| **#25515** | Đặt lại trạng thái phiên plan khi `/clear` | Sửa lỗi `/clear` chỉ xoay ID phiên nhưng không xóa trạng thái lập kế hoạch, đảm bảo phiên mới không kế thừa con trỏ kế hoạch đã được phê duyệt cũ。 | [Liên kết](https://github.com/google-gemini/gemini-cli/pull/25515) |

---

## 5. Xu hướng Nhu cầu Chức năng

Từ các Issues và PR gần đây, có thể rút ra các **hướng cộng đồng quan tâm nhất** sau:

1. **Trí tuệ Agent và Chiều sâu Hiểu mã**
   Việc đọc dựa trên AST ( #22745 / #22746) trở thành chủ đề dài hạn cốt lõi, cộng đồng mong đợi việc cắt tỉa ngữ cảnh chính xác thông qua cây cú pháp, giảm thiểu lỗi đọc và lãng phí token.

2. **Hiệu suất Khởi động và Thực thi**
   Chặn khởi động do tải RipGrep (#25323), gọi mô hình dư thừa (#25554), tăng tốc kiểm thử CI (#25426) đều hướng đến nhu cầu mạnh mẽ về "nhanh hơn".

3. **Mở rộng Hệ sinh thái Mô hình**
   Hỗ trợ Gemma 4 (#25560), ưu tiên API (#25555), chuyển đổi mô hình được lưu và chuyển đổi nhanh chóng (#25072) cho thấy người dùng liên tục theo đuổi sự linh hoạt trong lựa chọn mô hình.

4. **Quản trị Quyền và Sandbox**
   Cửa sổ bật lên lặp lại (#24916), phát hiện lệnh nguy hiểm (#25545), quyền ghi tệp governance (#25338) cho thấy sự cân bằng giữa bảo mật và sự trôi chảy vẫn là tâm điểm.

5. **Khả năng Tiếp cận và Tương thích Terminal**
   Hiển thị bảng biểu cho trình đọc màn hình (#25218), chữ lộn xộn trong phiên SSH (#24202), lỗi crash đường dẫn tạm thời Windows (#25216) phản ánh nhu cầu bao phủ các trường hợp biên cho nhiều nền tảng và nhóm người dùng.

---

## 6. Điểm Quan tâm của Nhà phát triển

| Điểm Đau/Nhu cầu | Biểu hiện Điển hình | Mục Liên quan |
|-----------|----------|----------|
| **Độ tin cậy Khởi động** | Bị chặn hoặc chậm khởi động do tải RipGrep khi không có mạng/truy cập GitHub | #25323 |
| **Lỗi Ghi nhớ Quyền** | Lựa chọn "cho phép lần này/luôn cho phép" không được lưu trữ bền vững, cửa sổ bật lên lặp lại cho cùng một tệp | #24916 |
| **Treo Tương tác Shell** | Lệnh đã kết thúc nhưng giao diện người dùng vẫn hiển thị "Awaiting user input", chặn các thao tác tiếp theo | #25166 |
| **Trạng thái Agent Phụ Không Minh bạch** | Sau khi đạt max turns, bị đánh dấu sai là thành công, khiến agent chính tiếp tục dựa trên thông tin sai lệch | #22323 |
| **Không nhất quán Cấu hình Ghi đè** | Các agent cụ thể như Browser Agent không sử dụng `settings.json`, người dùng không thể quản lý hành vi một cách thống nhất | #22267 |
| **Quy mô hóa Số lượng Công cụ** | Vượt quá 128 công cụ trực tiếp gây lỗi 400, thiếu chiến lược thu hẹp tự động | #24246 |
| **Trường hợp Biên Windows** | Các vấn đề về ký tự ổ đĩa không chuẩn, phiên SSH, đường dẫn và hiển thị terminal trong PowerShell tập trung | #25216, #24202, #24915 |

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI: Báo cáo Nhật ký Cộng đồng | 2026-04-17

---

## 1. Tổng quan Hôm nay

Hôm nay không có phiên bản mới nào được phát hành cho cộng đồng, nhưng mức độ hoạt động của mã cao: nhóm cốt lõi đã hợp nhất nhiều cải tiến trải nghiệm, bao gồm việc tăng `max_steps_per_turn` mặc định lên 500, sửa lỗi mất hoạt ảnh tải moon spinner trong khoảng thời gian giữa các lượt; đồng thời, **"quá trình thinking không hiển thị"** trở thành điểm đau được người dùng phản hồi nhiều nhất, các Issue liên quan đang được thảo luận sôi nổi. Tích hợp hệ sinh thái MCP và khả năng tương thích IDE cũng bắt đầu bước vào khu vực vấn đề tần suất cao.

---

## 2. Phát hành Phiên bản

Không có phiên bản mới nào được phát hành hôm nay.

---

## 3. Issues Nóng Cộng đồng

| # | Tiêu đề | Trạng thái | Điểm Quan trọng |
|---|------|------|---------|
| [#1865](https://github.com/MoonshotAI/kimi-cli/issues/1865) | Tại sao quá trình thinking biến mất? Đây không phải là một sự tối ưu hóa tiêu cực thuần túy sao | 🟢 OPEN | **Chủ đề Nóng nhất Hôm nay**. Người dùng phản ánh mạnh mẽ rằng quá trình reasoning/thinking của mô hình đã bị ẩn sau v1.33.0, dẫn đến "giảm cảm giác an toàn". 11 bình luận, 3 👍, phản ánh tính minh bạch là một trong những trải nghiệm cốt lõi của công cụ CLI. |
| [#1903](https://github.com/MoonshotAI/kimi-cli/issues/1903) | Mã lỗi: 400 (kimi-for-coding) | 🟢 OPEN | Lỗi 400 xuất hiện với v1.34.0 + mô hình `kimi-for-coding`, ảnh hưởng đến khả năng sử dụng thực tế, cần chú ý xem có phải do thay đổi giao diện API hay vấn đề tương thích tham số không. |
| [#1910](https://github.com/MoonshotAI/kimi-cli/issues/1910) | CLI không có phản hồi khi sử dụng IDEA | 🟢 OPEN | **Điểm Đau Tích hợp IDE**. Người dùng JetBrains phản ánh CLI hoàn toàn không phản hồi trong IDEA, kèm ảnh chụp màn hình, ảnh hưởng trực tiếp đến quy trình làm việc của nhà phát triển. |
| [#1897](https://github.com/MoonshotAI/kimi-cli/issues/1897) | Giao diện Web bị treo vô thời hạn khi máy chủ MCP không kết nối được | 🟢 OPEN | Máy chủ MCP không kết nối được dẫn đến `kimi web` treo vô thời hạn, worker bị crash nhưng frontend không có phản hồi, **độ ổn định và xử lý lỗi cần được tăng cường khẩn cấp**. |
| [#1867](https://github.com/MoonshotAI/kimi-cli/issues/1867) | `--yolo` không nên tự động phê duyệt kế hoạch trong Plan Mode | 🟢 OPEN | Tranh cãi về thiết kế chức năng: `--yolo` bỏ qua xác nhận kế hoạch và thực thi trực tiếp trong Plan Mode, người dùng cho rằng phân lớp rủi ro không hợp lý, kêu gọi phân biệt giữa "phê duyệt tự động của công cụ" và "phê duyệt tự động của kế hoạch". |
| [#1378](https://github.com/MoonshotAI/kimi-cli/issues/1378) | Lỗi phân tích cú pháp JSON khi đối số lệnh công cụ chứa các ký tự điều khiển | 🔴 CLOSED | Lỗi phân tích cú pháp JSON khi đối số lệnh công cụ chứa các ký tự điều khiển, đã đóng. Đại diện cho các vấn đề về độ mạnh mẽ của chuỗi công cụ ban đầu đã được sửa chữa. |

---

## 4. Tiến trình PR Quan trọng

| # | Tiêu đề | Trạng thái | Nội dung Chức năng/Sửa lỗi |
|---|------|------|--------------|
| [#1911](https://github.com/MoonshotAI/kimi-cli/pull/1911) | fix(kosong): support adaptive thinking for Opus 4.7+ models | 🟢 OPEN | Sửa lỗi mã hóa cứng `_use_adaptive_thinking()` chỉ khớp với `opus-4.6`, kích hoạt định dạng thinking thích ứng cho Opus 4.7+, **có liên quan đến vấn đề hiển thị thinking trong Issue #1865**. |
| [#1909](https://github.com/MoonshotAI/kimi-cli/pull/1909) | fix(shell): show moon spinner fallback during all active turn gaps | 🔴 CLOSED | Sửa lỗi hoạt ảnh tải moon spinner bị mất trong các khoảng thời gian hoạt động (sau khi công cụ được gọi, trước StepBegin, v.v.) dẫn đến "màn hình đen", cải thiện trực tiếp nhận thức tương tác。 |
| [#1908](https://github.com/MoonshotAI/kimi-cli/pull/1908) | feat(core): increase default max_steps_per_turn from 100 to 500 | 🔴 CLOSED | Tăng số bước tối đa mặc định mỗi lượt từ 100 lên 500, giảm thiểu việc nhiệm vụ phức tạp bị gián đoạn do giới hạn số bước, **cải thiện trải nghiệm không cần cấu hình**。 |
| [#1798](https://github.com/MoonshotAI/kimi-cli/pull/1798) | feat(telemetry): integrate telemetry tracking across interactive and … | 🟢 OPEN | Theo dõi toàn bộ quy trình cho cả chế độ tương tác và không tương tác, về lâu dài sẽ giúp tối ưu hóa sản phẩm dựa trên dữ liệu, nhưng cần chú ý đến việc tiết lộ quyền riêng tư và quyền lựa chọn của người dùng。 |
| [#1797](https://github.com/MoonshotAI/kimi-cli/pull/1797) | feat(shell): add Ctrl+A directory scope toggle to /sessions picker | 🔴 CLOSED | Bộ chọn `/sessions` hỗ trợ chuyển đổi phạm vi "thư mục hiện tại/tất cả thư mục" bằng `Ctrl+A`, đối trọng với Claude Code `/resume`, **trải nghiệm quản lý phiên được căn chỉnh với các sản phẩm hàng đầu**。 |

---

## 5. Xu hướng Nhu cầu Chức năng

Từ các Issues và PR gần đây, có thể rút ra các hướng cộng đồng quan tâm sau:

| Hướng Xu hướng | Mô tả |
|---------|------|
| **Minh bạch Suy luận Mô hình** | Khả năng hiển thị và kiểm soát quá trình thinking / reasoning trở thành yêu cầu cốt lõi, người dùng không hài lòng với đầu ra "hộp đen". |
| **Độ ổn định Hệ sinh thái MCP** | Các vấn đề như lỗi kết nối máy chủ MCP, lỗi phân tích cú pháp lệnh gọi công cụ thường xuyên xảy ra, cộng đồng cần cơ chế cách ly lỗi và giảm thiểu mạnh mẽ hơn. |
| **Tích hợp Sâu IDE/Trình soạn thảo** | Các yêu cầu về tương thích như không phản hồi trong JetBrains, điều chỉnh cho VS Code ngày càng tăng, CLI với vai trò "trợ lý mã hóa" phải liên kết liền mạch với quy trình làm việc của IDE. |
| **Tính Tự chủ và Ranh giới Bảo mật của Agent** | Các chiến lược phê duyệt tự động của `--yolo`, Plan Mode gây ra các cuộc thảo luận về "phân lớp rủi ro", người dùng muốn kiểm soát chi tiết các cấp độ