# Báo cáo Cập nhật Hàng ngày về Cộng đồng Công cụ AI CLI Ngày 2026-04-15

> Thời gian tạo: 2026-04-15 00:17 UTC | Số công cụ được đề cập: 8

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

# Báo cáo Phân tích So sánh Ngang Hệ sinh thái Công cụ AI CLI | Ngày 2026-04-15

---

## 1. Toàn cảnh Hệ sinh thái

Hệ sinh thái công cụ AI CLI hiện tại đã bước vào giai đoạn **hội tụ chức năng và đào sâu kỹ thuật song song**: Các sản phẩm dẫn đầu (Claude Code, OpenAI Codex) đang cạnh tranh gay gắt xoay quanh hệ sinh thái MCP, nén ngữ cảnh và khả năng mở rộng Hook; các công cụ tầm trung (Gemini CLI, Kimi CLI, Qwen Code) vừa theo đuổi trải nghiệm cốt lõi, vừa tích cực khám phá các phân khúc khác biệt như nhập liệu bằng giọng nói, tác nhân song song, triển khai cục bộ; còn OpenCode và Pi, với tư cách là những người tham gia tương đối mới, đang tìm kiếm định vị phân khúc bằng cách tăng cường khả năng tùy chỉnh đầu cuối và hỗ trợ nhiều nhà cung cấp mô hình. Nhìn chung, **độ ổn định > chức năng mới** đã trở thành sự đồng thuận của cộng đồng — các vấn đề về chất lượng kỹ thuật như rò rỉ tiến trình, mất ngữ cảnh, lỗi ủy quyền đã trở thành yếu tố hàng đầu trong quyết định di chuyển của người dùng.

---

## 2. So sánh Hoạt động của từng Công cụ

| Công cụ | Issues Hôm nay | PRs Hôm nay | Phát hành Phiên bản | Động thái Cốt lõi |
|:---|:---|:---|:---|:---|
| **Claude Code** | ~10 vấn đề nổi bật (#46987, v.v.) | 10+ PR đang hoạt động | v2.1.107 / v2.1.108 hai phiên bản | Prompt Caching có thể kiểm soát, Recap tóm tắt cuộc họp dài |
| **OpenAI Codex** | ~10 vấn đề nổi bật (#17809, v.v.) | 10+ PR đang hoạt động | rust-v0.121.0-alpha.8~10 | Sửa lỗi khẩn cấp lỗi `prompt_cache_retention` |
| **Gemini CLI** | ~10 vấn đề nổi bật (#25323, v.v.) | 10+ PR đang hoạt động | v0.38.0 + v0.39.0-preview.0 + nightly | Đơn giản hóa engine chiến lược, di chuyển tsgo, PR nhập liệu bằng giọng nói |
| **GitHub Copilot CLI** | ~10 vấn đề nổi bật (chọn lọc từ 50 PR đang hoạt động) | 1 PR có giá trị thấp | v1.0.26 | Chặn chiến lược đăng ký doanh nghiệp, lỗi ủy quyền bùng phát tập trung |
| **Kimi CLI** | 12 Issues | 10 PRs | v1.34.0 | Cấu hình `show_thinking_stream`, sửa lỗi đóng băng tác vụ nền |
| **OpenCode** | ~10 vấn đề nổi bật (chọn lọc từ 50 PR đang hoạt động) | 10 PRs | v1.4.4 | Lỗi OAuth, tương thích Azure OpenAI, lỗi sao chép vào clipboard |
| **Pi** | 50 Issues | 24 PRs | v0.67.2 | Sửa hiệu suất hiển thị TUI, tương thích phím đầu cuối, nhúng extension factory |
| **Qwen Code** | 50 Issues đang hoạt động | 10 PRs | v0.14.4-nightly | Tranh cãi chính sách hạn ngạch miễn phí, tối ưu hóa tác nhân song song |

> **Thứ tự Hoạt động** (tổng hợp mật độ Issues/PR/thảo luận): Pi > Qwen Code ≈ OpenCode > Claude Code ≈ OpenAI Codex ≈ Gemini CLI > Kimi CLI > GitHub Copilot CLI

---

## 3. Hướng chức năng được Quan tâm Chung

| Hướng | Công cụ liên quan | Yêu cầu cụ thể |
|:---|:---|:---|
| **Nén ngữ cảnh & Khôi phục hội thoại** | Codex, Claude Code, Copilot CLI, Kimi CLI, OpenCode | Lỗi Codex `prompt_cache_retention` chặn khôi phục hội thoại; Claude Code thêm cơ chế Recap; Copilot CLI #947 yêu cầu tắt nén tự động bắt buộc; Kimi #1878 báo lỗi nén nhận dạng sai |
| **Độ bền hệ sinh thái MCP** | Codex, Claude Code, Copilot CLI, OpenCode, Qwen Code | Rò rỉ tiến trình (Codex #12491/#17832, Claude Code PR #47830), lỗi tìm kiếm công cụ (Copilot CLI #2176), giới hạn số kết nối (Qwen Code #3277), lưu trữ trạng thái OAuth lâu dài (OpenCode v1.4.4) |
| **Trải nghiệm tương tác đầu cuối/TUI** | Gemini CLI, Kimi CLI, OpenCode, Pi | Sao chép/Clipboard (OpenCode #4283, Gemini CLI #24202), tương thích phím bấm (Pi #3113/#3162), mở rộng thinking (Kimi #1864/#1877), sticky input (Claude Code #13591) |
| **Chất lượng & Độ tin cậy Mô hình** | Claude Code, Kimi CLI, Pi, Qwen Code | Opus 4.6 "mất trí nhớ"/bỏ qua prompt (Claude Code #48136/#48185), độ dài thinking mất kiểm soát (Kimi #1874), lỗi phân tích cú pháp JSON (Pi #3175), lỗi nhận dạng sai phản hồi trống của mô hình suy luận (Qwen Code #3251) |
| **Khả năng kiểm soát chi phí & Minh bạch** | Claude Code, Qwen Code, Codex | Tăng đột biến cache_creation (Claude Code #46917), giảm đột ngột hạn ngạch miễn phí (Qwen Code #3203/#3267), Max plan hết nhanh (Claude Code #46185) |
| **Khả năng mở rộng Hook/Plugin** | Codex, Claude Code, Copilot CLI | Hook PermissionRequest (Codex #17563/#17757), phát hành plugin chính thức dồn dập (Claude Code #47759/#47760), inject ngữ cảnh hook (Copilot CLI #1139) |

---

## 4. Phân tích Định vị Khác biệt

| Công cụ | Trọng tâm chức năng | Người dùng mục tiêu | Lộ trình Kỹ thuật |
|:---|:---|:---|:---|
| **Claude Code** | Nhiệm vụ kỹ thuật ngữ cảnh dài, quy trình làm việc Skill/Slash Command, tối ưu chi phí Prompt Caching | Nhà phát triển chuyên nghiệp, người bảo trì kho mã lớn | CLI Node.js đóng, gắn chặt với hệ sinh thái API Anthropic, hệ thống plugin ngày càng hoàn thiện |
| **OpenAI Codex** | Tạo mã toàn diện, CLI hiệu suất cao viết lại bằng Rust, tích hợp doanh nghiệp MCP + Hook | Nhóm phát triển doanh nghiệp, người dùng có nhu cầu tích hợp CI/CD mạnh mẽ | Phiên bản Rust CLI thay thế hoàn toàn phiên bản cũ, nhấn mạnh bảo mật sandbox và hook quyền, chỉ độc quyền mô hình OpenAI |
| **Gemini CLI** | Plan Mode dựa trên engine chiến lược, nhập liệu bằng giọng nói, biên dịch hiệu suất cao tsgo, mở rộng đa phương thức | Người dùng hệ sinh thái Google, nhà phát triển theo đuổi hiệu quả nhập liệu | TypeScript monorepo, chuyển sang biên dịch gốc tsgo, ưu tiên Gemini API |
| **GitHub Copilot CLI** | Tích hợp liền mạch với hệ thống đăng ký GitHub/Copilot, liên kết hệ sinh thái VS Code | Nhà phát triển đã đăng ký Copilot, các trường hợp tuân thủ quy định doanh nghiệp | Được Microsoft chứng thực, đóng, chi phí và thanh toán tích hợp sâu với hệ thống tài khoản GitHub |
| **Kimi CLI** | Khả năng quan sát chuỗi suy nghĩ, phê duyệt Plan Mode chi tiết, tác vụ Agent nền | Nhà phát triển Trung Quốc, người dùng coi trọng tính minh bạch của suy luận mô hình | CLI Python tự phát triển, lặp lại nhanh cấu hình UI, nhấn mạnh kiểm soát hiển thị quá trình thinking |
| **OpenCode** | Hỗ trợ nhiều nhà cung cấp mô hình (Azure/Databricks/Vertex), TUI tùy chỉnh cao, mở rộng nhúng | Doanh nghiệp triển khai đa đám mây/tại chỗ, người dùng cực đoan đầu cuối | Mã nguồn mở/bán mở, dựa trên TypeScript, nhấn mạnh hệ sinh thái nhà cung cấp và system prompt tùy chỉnh |
| **Pi** | Trải nghiệm gốc đầu cuối, định tuyến đa mô hình, nhỏ gọn có thể nhúng, mở rộng quản lý gói | Người dùng đầu cuối chuyên sâu, nhà phát triển cần nhúng AI CLI vào công cụ khác | Thiết kế SDK TypeScript, hỗ trợ `main()` nội tuyến extension factory, nhấn mạnh tương thích đa đầu cuối |
| **Qwen Code** | Lối vào miễn phí/chi phí thấp, tác vụ Agent song song hàng loạt, plugin VS Code hai đầu | Nhà phát triển Trung Quốc, người dùng nhạy cảm về ngân sách, người dùng hệ sinh thái Alibaba | CLI tự phát triển + plugin VS Code song song, ưu tiên DashScope API, tích cực mở rộng hỗ trợ mô hình reasoning |

---

## 5. Độ nóng và Độ trưởng thành của Cộng đồng

### Độ trưởng thành Cao + Độ nóng Cao
- **Claude Code**: Quy mô cộng đồng lớn nhất, thảo luận Issue có độ sâu cao, nhưng chất lượng gần đây (độ tin cậy Opus 4.6) gây biến động niềm tin.
- **OpenAI Codex**: Phát triển kỹ thuật cực nhanh sau khi viết lại bằng Rust, 3 bản alpha trong 24 giờ để sửa lỗi P0, tốc độ phản hồi dẫn đầu, nhưng nợ ổn định (sandbox Windows, rò rỉ bộ nhớ) vẫn còn nặng.

### Giai đoạn Lặp lại Nhanh
- **Gemini CLI**: Tốc độ phát hành phiên bản dày đặc (bản ổn định + preview + nightly), di chuyển tsgo và PR nhập liệu bằng giọng nói cho thấy tham vọng kỹ thuật, nhưng quá trình hoàn thiện các tình huống biên Windows/SSH còn thiếu sót.
- **Kimi CLI**: v1.34.0 phản hồi trực tiếp tranh cãi lớn nhất của cộng đồng (hiển thị thinking), lặp lại phản hồi nhanh, nhưng độ ổn định Windows, trải nghiệm plugin IDE còn rõ ràng tụt hậu.
- **Pi**: Mật độ 50 Issues + 24 PR mỗi ngày cực kỳ nổi bật, sửa lỗi hiển thị TUI và tương thích đầu cuối dồn dập, cho thấy đang trong giai đoạn tăng tốc hoàn thiện chức năng.

### Độ nóng cao nhưng Độ trưởng thành còn nghi vấn
- **OpenCode**: Lỗi OAuth (151 bình luận) và sự cố tương thích Azure làm lộ ra hạ tầng yếu kém, nhưng PR đa nhà cung cấp hoạt động, ý định mở rộng hệ sinh thái rất mạnh mẽ.
- **Qwen Code**: Tranh cãi chính sách hạn ngạch miễn phí chiếm trung tâm dư luận ( #3203 ), thảo luận kỹ thuật bị loãng bởi quyết định kinh doanh; tối ưu hóa tác nhân song song có điểm sáng, nhưng nhược điểm rõ ràng là trải nghiệm plugin VS Code và độ ổn định đa nền tảng.

### Tương đối ảm đạm
- **GitHub Copilot CLI**: Chỉ 1 PR giá trị thấp mỗi ngày, động lực đổi mới kém; lỗi chiến lược doanh nghiệp/ủy quyền tích tụ, cho thấy sản phẩm đang ở giai đoạn bảo trì thay vì mở rộng.

---

## 6. Tín hiệu Xu hướng Đáng chú ý

| Tín hiệu Xu hướng | Hỗ trợ Dữ liệu | Giá trị Tham khảo cho Nhà phát triển |
|:---|:---|:---|
| **Khả năng quan sát chuỗi suy luận trở thành hạ tầng tin cậy** | Kimi #1864 (9 👍), #1865 cảm xúc mãnh liệt; Claude Code #48185 nghi ngờ Opus "bỏ qua" prompt | Khi chọn công cụ, **độ hoàn chỉnh và khả năng kiểm soát quá trình thinking** nên được đưa vào tiêu chí đánh giá cốt lõi, đặc biệt đối với các tình huống xem xét mã, kiểm toán bảo mật |
| **MCP từ "điểm nhấn chức năng" trở thành "nợ ổn định"** | Codex #12491 (rò rỉ 37GB), #17832 (13.6GB RSS); Claude Code PR #47830 chuyên dọn dẹp tiến trình bị bỏ rơi | Trước khi triển khai MCP trong môi trường sản xuất, bắt buộc phải đánh giá cơ chế quản lý tiến trình con, giới hạn số kết nối, cơ chế giám sát bộ nhớ để tránh khả năng mở rộng phản tác dụng lên độ ổn định hệ thống |
| **Cơ chế nén ngữ cảnh phổ biến chưa trưởng thành** | Lỗi P0 của Codex `prompt_cache_retention`; Copilot CLI nén bắt buộc không thể tắt; Kimi #1878 nén nhận dạng sai | Luồng công việc hội thoại dài nên ưu tiên chọn công cụ **cung cấp khả năng kiểm soát chiến lược nén** hoặc **cơ chế phân đoạn/Recap hội thoại**, và thiết lập thói quen sao lưu thủ công |
| **Chênh lệch trải nghiệm gốc đầu cuối quyết định giữ chân người dùng** | OpenCode #4283 (84 bình luận), Pi #3094 TUI nhấp nháy, Gemini CLI #25323 khởi động chặn 2 phút | Độ trưởng thành TUI của công cụ CLI (sao chép, phím bấm, hiển thị, độ tin cậy khởi động) đã từ "điểm cộng" trở thành **ngưỡng cơ bản**, tương thích với môi trường đầu cuối phức tạp đặc biệt quan trọng |
| **Lo lắng chi phí lan từ cá nhân sang doanh nghiệp** | Claude Code #46917 (cache_creation tăng đột biến 2 vạn token), Qwen Code #3203 (hủy hạn ngạch miễn phí), Claude Code #46185 (Max plan hết nhanh) | Lựa chọn nhóm cần thiết lập **giám sát tiêu thụ Token và cảnh báo ngân sách**, ưu tiên công cụ hỗ trợ khả năng kiểm soát prompt caching, chuyển đổi nhà cung cấp, fallback mô hình cục bộ |
| **Hook/Plugin mở rộng trở thành điều kiện tiên quyết cho doanh nghiệp** | PR dồn dập hook PermissionRequest của Codex; Thông báo phát hành plugin chính thức/giám sát sử dụng của Claude Code; Copilot CLI #1139 kêu gọi tương thích với Claude Code | Các nhóm có nhu cầu tích hợp CI/CD, chặn chiến lược bảo mật, tuân thủ kiểm toán, nên coi **độ hoàn chỉnh của hệ thống hook và chất lượng tài liệu** là tiêu chí lựa chọn quan trọng |

---

*Báo cáo dựa trên việc tổng hợp dữ liệu cộng đồng công khai của từng công cụ vào ngày 2026-04-15, phù hợp cho người ra quyết định kỹ thuật đánh giá chiến lược lựa chọn công cụ và di chuyển nhóm.*

---

## Báo cáo Chi tiết Từng Công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Điểm Nóng Cộng đồng Claude Code Skills

> Nguồn dữ liệu: [anthropics/skills](https://github.com/anthropics/skills)

# Báo cáo Điểm Nóng Cộng đồng Claude Code Skills (Tính đến ngày 2026-04-15)

---

## 1. Xếp hạng Skills Nổi bật (theo Mức độ Quan tâm Cộng đồng)

| Hạng | Skill | Mô tả Chức năng | Điểm Nóng Cộng đồng | Trạng thái |
|:---|:---|:---|:---|:---|
| 1 | **document-typography** [#514](https://github.com/anthropics/skills/pull/514) | Kiểm soát chất lượng bố cục tài liệu do AI tạo, sửa lỗi dòng cô đơn, dòng mồ côi, đánh số sai lệch | Được coi là ảnh hưởng đến "mọi tài liệu Claude tạo", là khả năng nền tảng có tính phổ quát cực cao; thảo luận tập trung vào giá trị thực tế và các tình huống triển khai | Mở |
| 2 | **skill-quality-analyzer / skill-security-analyzer** [#83](https://github.com/anthropics/skills/pull/83) | Hai meta-skill: Đánh giá chất lượng Skill (cấu trúc, tài liệu, kỹ thuật nhắc nhở, v.v. 5 chỉ số) & kiểm tra bảo mật | Cộng đồng cực kỳ quan tâm đến công cụ tự hoàn thiện hệ sinh thái Skill, thuộc về "hạ tầng nền tảng của skill" | Mở |
| 3 | **Cải thiện frontend-design** [#210](https://github.com/anthropics/skills/pull/210) | Nâng cao độ rõ ràng và khả năng thực thi của Skill thiết kế frontend, cho phép triển khai trong một lần trò chuyện | Thảo luận tập trung vào cách làm cho lệnh Skill cụ thể hơn, tránh trừu tượng hóa quá mức, phản ánh sự cầu toàn của cộng đồng về "khả năng sử dụng" | Mở |
| 4 | **odt** [#486](https://github.com/anthropics/skills/pull/486) | Tạo văn bản OpenDocument, điền mẫu và chuyển đổi ODT→HTML | Bù đắp khoảng trống định dạng tài liệu mã nguồn mở, bổ sung cho các skill docx/pdf hiện có; cập nhật hoạt động (vẫn lặp lại vào tháng 4) | Mở |
| 5 | **codebase-inventory-audit** [#147](https://github.com/anthropics/skills/pull/147) | Dọn dẹp kho mã và kiểm toán tài liệu, xác định mã mồ côi, tệp không sử dụng, khoảng trống tài liệu, v.v. | Quy trình 15 bước tạo ra CODEBASE-STATUS.md, được coi là nhu cầu thiết yếu của công cụ quản trị dự án lớn | Mở |
| 6 | **testing-patterns** [#723](https://github.com/anthropics/skills/pull/723) | Hướng dẫn kiểm thử toàn diện: triết lý kiểm thử, kiểm thử đơn vị, kiểm thử thành phần React, kiểm thử tích hợp, v.v. | Bao gồm các thực hành hiện đại như Testing Trophy, Testing Library, MSW, là nhu cầu thường xuyên của nhà phát triển | Mở |
| 7 | **shodh-memory** [#154](https://github.com/anthropics/skills/pull/154) | Cung cấp hệ thống bộ nhớ bền vững liên tục hội thoại cho tác nhân AI | Giải quyết trực tiếp vấn đề không trạng thái của Claude Code; thảo luận tập trung vào thiết kế cấu trúc bộ nhớ và ranh giới riêng tư | Mở |
| 8 | **sensory** [#806](https://github.com/anthropics/skills/pull/806) | Thực hiện tự động hóa gốc macOS thông qua AppleScript, thay thế sử dụng máy tính dựa trên ảnh chụp màn hình | Thiết kế quyền hai cấp gây tranh cãi, được coi là hướng đổi mới để giảm chi phí tự động hóa và tăng độ tin cậy | Mở |

---

## 2. Xu hướng Nhu cầu Cộng đồng (từ Issues tổng hợp)

| Hướng | Issue đại diện | Nhu cầu cốt lõi |
|:---|:---|:---|
| **Quản trị Skill và Công cụ Meta** | [#202](https://github.com/anthropics/skills/issues/202) | `skill-creator` cần tái cấu trúc từ "tài liệu nhà phát triển" thành "Skill vận hành", nhấn mạnh các thực hành tốt nhất và hiệu quả token |
| **Triển khai & Tích hợp cấp Doanh nghiệp** | [#29](https://github.com/anthropics/skills/issues/29), [#228](https://github.com/anthropics/skills/issues/228) | Hỗ trợ AWS Bedrock, thư viện chia sẻ Skill trong tổ chức, tương thích môi trường SSO |
| **Ranh giới Bảo mật & Tin cậy** | [#492](https://github.com/anthropics/skills/issues/492) | Vấn đề Skill cộng đồng giả mạo không gian tên `anthropic/`, kêu gọi quản trị chính thức và cơ chế ký |
| **Tương tác Giao thức Tiêu chuẩn** | [#16](https://github.com/anthropics/skills/issues/16) | Phơi bày Skills dưới dạng MCP (Model Context Protocol), thực hiện đóng gói API hóa và tái sử dụng đa nền tảng |
| **Lỗi Nền tảng & Độ ổn định** | [#62](https://github.com/anthropics/skills/issues/62), [#406](https://github.com/anthropics/skills/issues/406), [#403](https://github.com/anthropics/skills/issues/403) | Mất Skill, tải lên 500, không thể xóa phiên bản là những vấn đề hạ tầng nghiêm trọng ảnh hưởng đến sử dụng sản xuất |
| **Cơ chế Đánh giá & Kích hoạt** | [#556](https://github.com/anthropics/skills/issues/556) | Tỷ lệ kích hoạt 0% của `run_eval.py` làm lộ ra những thiếu sót cơ bản của hệ thống đánh giá Skill, cần sửa chữa khẩn cấp |

---

## 3. Skills Có tiềm năng Cao Sắp được Hợp nhất

Các PR sau đây có thảo luận cộng đồng sôi nổi, chức năng rõ ràng và vẫn đang được cập nhật gần đây, có tiềm năng được hợp nhất sớm:

- **document-typography** [#514](https://github.com/anthropics/skills/pull/514) — Thảo luận liên tục sau khi tạo vào tháng 3, giải quyết các điểm yếu chất lượng tài liệu phổ biến
- **odt** [#486](https://github.com/anthropics/skills/pull/486) — Vẫn được cập nhật vào ngày 14 tháng 4, tác giả phản hồi tích cực
- **testing-patterns** [#723](https://github.com/anthropics/skills/pull/723) — Mới tạo vào cuối tháng 3, bao phủ lĩnh vực kiểm thử nhu cầu thiết yếu nhất của nhà phát triển
- **sensory** [#806](https://github.com/anthropics/skills/pull/806) — Cập nhật đầu tháng 4, hướng tự động hóa macOS khác biệt rõ rệt
- **record-knowledge** [#521](https://github.com/anthropics/skills/pull/521) — Giải quyết điểm yếu cốt lõi về mất trạng thái hội thoại của Claude Code, sự đồng cảm mạnh mẽ của cộng đồng |

---

## 4. Hiểu biết về Hệ sinh thái Skills

> **Nhu cầu tập trung nhất của cộng đồng hiện nay là: Chuyển từ "mở rộng số lượng kỹ năng" sang "quản trị chất lượng kỹ năng và độ tin cậy sản xuất"** — Cộng đồng vừa mong đợi các kỹ năng dọc trực tiếp nâng cao chất lượng đầu ra như kiểm soát bố cục, mẫu kiểm thử, kiểm toán mã, vừa cấp thiết yêu cầu tái cấu trúc công cụ meta `skill-creator`, sửa chữa hệ thống đánh giá, ổn định triển khai cấp doanh nghiệp, và quản trị ranh giới tin cậy của không gian tên chính thức.

---

# Báo cáo Cập nhật Cộng đồng Claude Code Ngày 2026-04-15

---

## 1. Xem nhanh Hôm nay

Anthropic liên tục phát hành hai phiên bản v2.1.107/v2.1.108, tập trung vào việc tối ưu hóa chiến lược Prompt Caching và trải nghiệm phản hồi thao tác dài. Về phía cộng đồng, các chủ đề về hết thời gian chờ API và hiện tượng mở rộng bộ nhớ cache bất thường trở thành các chủ đề có độ nóng cao nhất, đồng thời các phản hồi của nhà phát triển về khả năng tuân thủ lệnh của mô hình giảm sút và gọi Skill không ổn định ngày càng nhiều.

---

## 2. Phát hành Phiên bản

### v2.1.108
- **Prompt Caching có thể kiểm soát**: Thêm biến môi trường `ENABLE_PROMPT_CACHING_1H`, hỗ trợ kích hoạt TTL cache 1 giờ trên API Key, Bedrock, Vertex, Foundry ( `ENABLE_PROMPT_CACHING_1H_BEDROCK` cũ đã bị loại bỏ nhưng vẫn tương thích); Đồng thời cung cấp `FORCE_PROMPT_CACHING_5M` để ép buộc TTL 5 phút.
- **Chức năng Recap hội thoại**: Thêm cơ chế Recap, cung cấp tóm tắt ngữ cảnh cho các hội thoại dài.

### v2.1.107
- **Hiển thị Hint Suy nghĩ nhanh hơn**: Trong quá trình thao tác dài, hint suy nghĩ sẽ hiển thị sớm hơn, giảm bớt sự lo lắng chờ đợi của người dùng.

🔗 [Trang Phát hành](https://github.com/anthropics/claude-code/releases)

---

## 3. Issues Nổi bật Cộng đồng

| # | Chủ đề | Tầm quan trọng | Phản hồi Cộng đồng |
|---|------|--------|---------|
| [#46987](https://github.com/anthropics/claude-code/issues/46987) | **API Error: Stream idle timeout - partial response received** | Người dùng macOS thường xuyên gặp phải tình trạng ngắt quãng do hết thời gian chờ luồng, ảnh hưởng đến khả năng sử dụng hàng ngày | 83 bình luận / 61 👍, hoạt động sôi nổi nhất hôm nay |
| [#46917](https://github.com/anthropics/claude-code/issues/46917) | **CC v2.1.100+ cache_creation mở rộng bất thường khoảng 2 vạn Token** | Phiên bản mới tiêu tốn nhiều hơn 2 vạn Token tạo cache so với v2.1.98 cho cùng một yêu cầu, và là vấn đề định tuyến máy chủ/UA, trực tiếp ảnh hưởng chi phí | 23 bình luận / 150 👍, người dùng nhạy cảm chi phí cực kỳ quan tâm |
| [#28817](https://github.com/anthropics/claude-code/issues/28817) | **Remote Control vẫn không khả dụng trong gói Pro** | Quyền truy cập chức năng trả phí bất thường, liên quan đến hệ thống tài khoản và tính nhất quán của tài liệu | 43 bình luận / 60 👍, chưa giải quyết lâu dài |
| [#48136](https://github.com/anthropics/claude-code/issues/48136) | **Opus trong nhiệm vụ áp lực cao bỏ qua quy tắc phiên/bộ nhớ dẫn đến lỗi triển khai sản xuất** | Mô hình hệ thống quên các quy tắc bền vững trong các nhiệm vụ đa kho mã phức tạp, gây ra tai nạn sản xuất thực tế | 2 bình luận, nhưng mức độ nghiêm trọng được đánh dấu là High |
| [#48183](https://github.com/anthropics/claude-code/issues/48183) | **Khả năng gọi Skill và bảo toàn lệnh suy giảm rõ rệt** | Độ tin cậy gọi Skill giảm mạnh trong hai tuần qua, ảnh hưởng đến quy trình làm việc phụ thuộc nặng vào Slash Command | 2 bình luận, phản hồi chất lượng quay trở lại dồn dập |
| [#48185](https://github.com/anthropics/claude-code/issues/48185) | **Opus 4.6 bỏ qua prompt handoff dài, hành động dựa trên trạng thái cục bộ lỗi thời** | Mô hình 1M ngữ cảnh không tổng hợp hiệu quả trạng thái bàn giao chi tiết do người dùng cung cấp, hiệu quả sử dụng ngữ cảnh bị nghi ngờ | 2 bình luận |
| [#47298](https://github.com/anthropics/claude-code/issues/47298) | **Sử dụng dấu chấm trong tên mô hình OpenRouter làm giảm khả năng tương thích** | Tên `claude-opus-4.6` không khớp với `claude-opus-4-6`, khiến người dùng OpenRouter mất hỗ trợ ngữ cảnh 1M một cách im lặng | 4 bình luận, điểm yếu tích hợp của bên thứ ba |
| [#13591](https://github.com/anthropics/claude-code/issues/13591) | **Chế độ Nhập Sticky/Fixed — Giữ ô nhập hiển thị khi cuộn** | Nhu cầu cải thiện trải nghiệm TUI, tối ưu hóa tương tác cơ bản trong tình huống đầu ra dài | 14 bình luận / 36 👍 |
| [#42192](https://github.com/anthropics/claude-code/issues/42192) | **Banner khởi chạy đột ngột xuất hiện lại trong phiên Windows gây nhấp nháy hình ảnh** | Vấn đề hiển thị lại giao diện, mặc dù không ảnh hưởng đến dữ liệu nhưng gây gián đoạn nghiêm trọng đến sự nhập tâm | 3 bình luận |
| [#46185](https://github.com/anthropics/claude-code/issues/46185) | **Tiêu thụ Token gói Max tăng đột biến, nghi ngờ loại bỏ giới hạn đầu ra** | Người dùng báo cáo hạn ngạch gói nhanh chóng hết, liên quan đến thay đổi chiến lược đầu ra của mô hình | 2 bình luận, lo lắng về chi phí |

---

## 4. Tiến độ PR Quan trọng

| # | PR | Nội dung Chức năng/Sửa lỗi |
|---|-----|-------------|
| [#48151](https://github.com/anthropics/claude-code/pull/48151) | **fix: include cwd project dir in multi-worktree session discovery** | Sửa lỗi không tìm thấy phiên trong bố cục repo trần (bare repo) + worktree với `--resume` |
| [#27395](https://github.com/anthropics/claude-code/pull/27395) | **feat: add completion subcommand for bash and zsh shell completion** | Cung cấp script hoàn chỉnh cho bash/zsh/fish để hoàn thành lệnh, bao phủ tất cả các lệnh con |
| [#23853](https://github.com/anthropics/claude-code/pull/23853) | **fix: Replace deprecated npm install with native installer in Dockerfile** | Sử dụng `npm install -g` lỗi thời trong Dockerfile của DevContainer, thay thế bằng install.sh gốc |
| [#47836](https://github.com/anthropics/claude-code/pull/47836) | **fix(plugin-dev): align hook validator with plugin hooks format** | Sửa lỗi xác thực định dạng `hooks.json` trong phát triển plugin không khớp với ví dụ tài liệu |
| [#47830](https://github.com/anthropics/claude-code/pull/47830) | **feat: add subagent-cleanup plugin to terminate orphaned processes** | Plugin mới, dọn dẹp các tiến trình subagent còn sót lại khi khởi động phiên, ngăn chặn rò rỉ CPU/bộ nhớ |
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | **feat: open source claude code ✨** | Yêu cầu mã nguồn mở được cộng đồng kêu gọi mạnh mẽ (PR mang tính biểu tượng), liên kết nhiều issue lịch sử |
| [#47759](https://github.com/anthropics/claude-code/pull/47759) | **feat(plugins): add notify-on-complete** | Plugin chính thức: gửi thông báo trên máy tính/phát âm thanh nhắc nhở/phát sóng giọng nói khi hoàn thành tác vụ |
| [#47760](https://github.com/anthropics/claude-code/pull/47760) | **feat(plugins): add usage monitor** | Plugin chính thức: tích hợp giám sát sử dụng thời gian thực trên thanh menu của macOS SwiftBar |
| [#39148](https://github.com/anthropics/claude-code/pull/39148) | **feat: add preserve-session plugin for path-independent session history** | Plugin: liên kết dự án bằng UUID, vẫn giữ lịch sử phiên sau khi đổi tên/di chuyển thư mục |
| [#46912](https://github.com/anthropics/claude-code/pull/46912) | **Add mythos runtime workflow** | PR thử nghiệm của cộng đồng, quy trình tự động hóa chạy hợp đồng "Claude Mythos" |

> Chú thích: #47895, #46095 là các PR liên quan đến "Claude Mythos" của cùng một tác giả, nội dung có độ trùng lặp cao, không được liệt kê riêng.

---

## 5. Xu hướng Nhu cầu Chức năng

Dựa trên phân phối Issues trong 24 giờ qua, các hướng chức năng được cộng đồng quan tâm nhất như sau:

| Hướng | Biểu hiện |
|------|------|
| **Khả năng kiểm soát Chi phí & Cache** | Biến môi trường TTL của Prompt Caching nhận được phản hồi chính thức, nhưng vấn đề mở rộng cache_creation vẫn chưa được giải quyết triệt để |
| **Trải nghiệm TUI/Tương tác** | Các nhu cầu như Sticky Input, nhấp nháy Banner, dọn dẹp xóa phiên tập trung, cho thấy mức độ trưởng thành của giao diện CLI được quan tâm |
| **Khả năng tuân thủ Lệnh Mô hình & Độ tin cậy** | Nhiều issue phản ánh Opus 4.6 "mất trí nhớ", bỏ qua prompt dài, chất lượng quay trở lại trở thành trọng tâm mới |
| **Tích hợp IDE & Hệ sinh thái** | Các vấn đề tích hợp VS Code, Chrome MCP, LSP đa máy chủ, Remote Control liên tục sôi động |
| **Hoàn thiện Hệ thống Plugin** | PR plugin chính thức và cộng đồng dồn dập, xác thực hook, dọn dẹp tiến trình, thông báo, giám sát sử dụng là các điểm nóng hiện tại |
| **Quản lý Đa Tài khoản & Hội thoại** | Nhu cầu chuyển đổi đa tài khoản trên di động, xóa phiên, giữ lại lịch sử qua các đường dẫn khác nhau đang xuất hiện |

---

## 6. Điểm Quan tâm của Nhà phát triển

### Điểm yếu Thường gặp

1. **Độ ổn định & Hết thời gian chờ API** 
   Stream idle timeout (#46987) lặp lại trên macOS, đã trở thành trở ngại phát triển hàng ngày, cộng đồng mong đợi cơ chế thử lại rõ ràng hơn hoặc giải thích nguyên nhân gốc rễ.

2. **Chi phí Token không thể kiểm soát** 
   Phiên bản mới gây bùng nổ cache_creation (#46917) và gói Max nhanh chóng hết hạn (#46185), nhà phát triển cực kỳ nhạy cảm với thay đổi chiến lược thanh toán "hộp đen".

3. **Chất lượng Mô hình Quay trở lại** 
   Các vấn đề tập trung xuất hiện trong hai tuần qua như gọi Skill thất bại (#48183), bỏ qua prompt handoff (#48185), bỏ qua quy tắc bền vững (#48136), chỉ ra độ tin cậy suy giảm của Opus 4.6 trong các nhiệm vụ kỹ thuật thực tế.

4. **Ma sát Tích hợp Plugin/Chuỗi Công cụ** 
   Các vấn đề tích hợp của bên thứ ba như tương thích tên OpenRouter (#47298), cầu nối Chrome MCP thất bại (#47808/#24935), giới hạn máy chủ đơn LSP (#32912) có thời gian sửa chữa dài.

5. **Quản lý Phiên & Quy trình Làm việc** 
   `--resume` không hoạt động trong trường hợp worktree/bare repo, Plan mode không thể vào lại (#48188), lịch sử phiên không thể xóa, v.v., cho thấy quản lý trạng thái của Claude Code trong quy trình làm việc kỹ thuật phức tạp vẫn còn yếu.

---

*Báo cáo hàng ngày dựa trên dữ liệu công khai của GitHub, nếu cần phân tích sâu một chủ đề nào đó, có thể mở rộng thêm.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Báo cáo Cập nhật Hàng ngày OpenAI Codex Ngày 2026-04-15

---

## 1. Xem nhanh Hôm nay

Codex CLI v0.120.0 gặp **lỗi hồi quy nén ngữ cảnh prompt_cache_retention**, khiến nhiều người dùng không thể khôi phục hội thoại lịch sử, nhóm OpenAI đã đóng dồn dập nhiều Issue liên quan trong vòng 24 giờ. Đồng thời, **vấn đề sandbox và hiệu suất trên nền tảng Windows** tiếp tục leo thang, phản hồi của cộng đồng về rò rỉ tiến trình MCP, chiếm dụng CPU/GPU cao tăng lên đáng kể.

---

## 2. Phát hành Phiên bản

**CLI Rust liên tục phát hành 3 phiên bản Alpha**
- `rust-v0.121.0-alpha.8` / `alpha.9` / `alpha.10`

Ghi chú phát hành tương đối ngắn gọn, dự đoán là sửa lỗi lặp lại nhanh chóng cho các vấn đề hồi quy của v0.120.0. Nên chú ý xem `alpha.10` có bao gồm xử lý tương thích tham số `prompt_cache_retention` hay không.

---

## 3. Issues Nổi bật Cộng đồng

| # | Issue | Tầm quan trọng | Phản hồi Cộng đồng |
|---|-------|--------|---------|
| [#17809](https://github.com/openai/codex/issues/17809) | **Context compaction fails with unknown parameter `prompt_cache_retention`** | 🔴 **P0 Hồi quy**. Nén ngữ cảnh tự động của Codex App thất bại do tham số không xác định, ảnh hưởng đến quy trình sử dụng cốt lõi. | 37 bình luận, 56 👍, đã đóng |
| [#17812](https://github.com/openai/codex/issues/17812) | **Error running remote compact task** (CLI) | Biểu hiện bên phía CLI của vấn đề tương tự, lỗi tác vụ nén từ xa. | 12 bình luận, 23 👍, đã đóng |
| [#17814](https://github.com/openai/codex/issues/17814) | **CLI v0.120.0 fails to resume old sessions: `prompt_cache_retention`** | Khôi phục hội thoại lịch sử hoàn toàn bị chặn, rủi ro về khả năng sử dụng dữ liệu người dùng. | 4 bình luận, đã đóng |
| [#17819](https://github.com/openai/codex/issues/17819) | **0.120.0 regression: resumed threads fail during remote compaction** | Xác nhận thêm việc hạ cấp về `0.119.0` có thể giải quyết, cung cấp giải pháp tạm thời cho cộng đồng. | 3 bình luận, 1 👍, đã đóng |
| [#10601](https://github.com/openai/codex/issues/10601) | **Sandbox setup error on Windows** | Lỗi khởi tạo sandbox chưa được giải quyết lâu dài trên nền tảng Windows, chặn người dùng doanh nghiệp áp dụng. | 44 bình luận, 10 👍, vẫn mở |
| [#16231](https://github.com/openai/codex/issues/16231) | **High CPU usage on macOS after VS Code extension update** | Hồi quy hiệu suất, thiết bị Apple Silicon nóng nghiêm trọng, ảnh hưởng đến lập trình viên hàng ngày. | 27 bình luận, 49 👍 |
| [#12491](https://github.com/openai/codex/issues/12491) | **MCP child processes not reaped — 1300+ zombies, 37GB memory leak** | Trường hợp rò rỉ bộ nhớ cực đoan, quản lý tiến trình con MCP có khuyết tật cơ bản. | 12 bình luận, 3 👍 |
| [#17832](https://github.com/openai/codex/issues/17832) | **Regression: Playืดlight MCP stdio processes still leak** | Tuy bố cáo là đã sửa nhưng lại tái diễn, 213 tiến trình bị bỏ rơi, 13.6 GB RSS. | 3 bình luận, mới gửi |
| [#16088](https://github.com/openai/codex/issues/16088) | **WSL: empty `.codex` file left behind without `.codex` in project** | Tình huống biên giới của WSL + extension VS Code, làm ô nhiễm kho người dùng. | 15 bình luận, 53 👍 |
| [#16857](https://github.com/openai/codex/issues/16857) | **High GPU usage while "thinking" due to tiny useless animation** | Hoạt ảnh UI dẫn đến tải GPU cao, phản ánh tối ưu hóa lớp hiển thị chưa đủ. | 9 bình luận, 14 👍 |

---

## 4. Tiến độ PR Quan trọng

| # | PR | Nội dung Chức năng/Sửa lỗi |
|---|-----|--------------|
| [#17839](https://github.com/openai/codex/pull/17839) | **[TUI] Add high-risk app warnings** | Thêm `riskLevel` và `subtitle` cho các yêu cầu hướng dẫn MCP, hiển thị dưới dạng cảnh báo rủi ro cao ⚠️ trong TUI để phê duyệt Computer Use. Đã được hợp nhất. |
| [#17757](https://github.com/openai/codex/pull/17757) | **Implement turn-scoped hook interrupts** | Thay đổi `PermissionRequest` `deny { interrupt: true }` thành chấm dứt ở cấp độ lượt, duy trì tính xác định đồng bộ của việc chấm dứt bên ngoài. Đã được hợp nhất. |
| [#17853](https://github.com/openai/codex/pull/17853) | **Add dummy tools for previously called but currently missing MCP tools** | Chèn công cụ giả khi thiếu công cụ MCP, tránh hội thoại bị gián đoạn do công cụ không khả dụng. |
| [#17850](https://github.com/openai/codex/pull/17850) | **Render high-risk MCP elicitation warnings in TUI** | Hiển thị cảnh báo hướng dẫn rủi ro cao trên TUI đa nền tảng, phối hợp với các thay đổi cấp giao thức của #17839. |
| [#17831](https://github.com/openai/codex/pull/17831) | **Add resource URI meta to tool call item** | Cho phép ứng dụng client-server lấy trước tài nguyên mà không cần tải trạng thái MCP server, tối ưu hóa độ trễ. |
| [#17824](https://github.com/openai/codex/pull/17824) | **Add local thread store listing** | Trừu tượng hóa thao tác danh sách luồng của hệ thống tệp + SQLite thành `ThreadStore`, chuẩn bị cho kiến trúc ưu tiên cục bộ/ngoại tuyến. |
| [#17563](https://github.com/openai/codex/pull/17563) | **Add PermissionRequest hooks support** | Đưa việc phê duyệt shell, thực thi thống nhất, phê duyệt mạng vào luồng hook `PermissionRequest`, hỗ trợ chặn chiến lược tự động hóa. |
| [#17739](https://github.com/openai/codex/pull/17739) | **Add permission suggestions to PermissionRequest hooks** | Thêm `permission_suggestions` vào đầu vào hook, dựa trên `proposed_execpolicy_amendment` để suy luận tương thích tiền tố quy tắc. |
| [#17713](https://github.com/openai/codex/pull/17713) | **Add opt-in provider runtime abstraction** | Thêm crate `codex-model-provider`, cung cấp trừu tượng hóa chung để nhà cung cấp mô hình của bên thứ ba tham gia, hành vi sản xuất không đổi. |
| [#17854](https://github.com/openai/codex/pull/17854) | **Update ToolSearch to be enabled by default** | `Feature::ToolSearch` được nâng cấp từ trạng thái thử nghiệm lên `Stable`, được bật theo mặc định. |

---

## 5. Xu hướng Nhu cầu Chức năng

Dựa trên phân phối Issues trong 24 giờ qua, các hướng cộng đồng quan tâm nhất:

| Xu hướng | Mô tả |
|------|------|
| **Độ ổn định & Hiệu suất** | Chiếm nửa bảng xếp hạng các vấn đề nóng về sử dụng CPU/GPU cao, rò rỉ bộ nhớ, vấn đề tiến trình zombie, đã trở thành nhu cầu cấp bách hơn cả việc thiếu chức năng. |
| **Trải nghiệm Nền tảng Windows** | Các vấn đề khởi tạo sandbox, xử lý đường dẫn WSL, định dạng đường dẫn tab Review, v.v., tiếp tục tích tụ, người dùng Windows vẫn cảm thấy là "công dân hạng hai". |
| **Độ bền Hệ sinh thái MCP** | Từ rò rỉ tiến trình đến truyền đường dẫn thư mục làm việc, quản lý vòng đời máy chủ MCP là điểm yếu cốt lõi của người dùng cao cấp. |
| **Khả năng Mở rộng Hook** | Nhu cầu `PreToolUse` / `PostToolUse`, hook PermissionRequest, v.v., sôi động, người dùng doanh nghiệp muốn tích hợp Codex vào quy trình CI/CD được kiểm soát. |
| **Ngữ cảnh & Quản lý Hội thoại** | Cơn bão `prompt_cache_retention` làm lộ ra sự mong manh của cơ chế khôi phục hội thoại dài, người dùng giảm niềm tin vào sự bền vững của hội thoại. |

---

## 6. Điểm Quan tâm của Nhà phát triển

- **Khuyến nghị Hồi quy v0.120.0 trở thành đồng thuận**：Nhiều Issue xác nhận hạ cấp xuống `0.119.0` có thể khắc phục lỗi `prompt_cache_retention`, tốc độ phản hồi của nhóm được công nhận, nhưng kiểm tra hồi quy đặt ra nghi vấn.
- **Vấn đề hiệu suất macOS "bình thường hóa"**：Phản hồi về nóng máy, GPU chạy không tải, hao pin trên thiết bị Apple Silicon đã từ phàn nàn không thường xuyên trở thành nhãn dán tần suất cao, cần tối ưu hóa hệ thống lớp hiển thị và sandbox một cách có hệ thống.
- **MCP là con dao hai lưỡi**：Người dùng cao cấp tích cực hưởng ứng khả năng mở rộng của MCP, nhưng các vấn đề rò rỉ tiến trình, tiến trình zombie, bùng nổ bộ nhớ khiến việc triển khai môi trường sản xuất đầy lo ngại.
- **Áp dụng Doanh nghiệp Windows bị chặn**：Từ lỗi ACL sandbox đến lỗi đăng nhập OAuth Codespaces, tích hợp chuỗi công cụ nhà phát triển Windows vẫn còn khoảng trống đáng kể.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Báo cáo Cập nhật Hàng ngày Gemini CLI Ngày 2026-04-15

---

## 1. Xem nhanh Hôm nay

Google hôm qua đã phát hành dày đặc ba phiên bản (v0.38.0 bản ổn định, v0.39.0-preview.0 và nightly), tập trung vào việc đơn giản hóa engine chiến lược, cơ sở hạ tầng kiểm thử bộ nhớ và sửa lỗi hiển thị hạn ngạch. Đồng thời, cộng đồng thảo luận về **lỗi tải RipGrep làm chậm khởi động**, **tương thích hội thoại SSH** và **nhập liệu bằng giọng nói** gia tăng, nhiều PR hạ tầng (di chuyển tsgo, thử lại OpenSSL 3.x, thư mục kế hoạch động) đã bước vào giai đoạn phát triển tích cực.

---

## 2. Phát hành Phiên bản

### v0.39.0-preview.0
- **Đơn giản hóa chiến lược**: Tái cấu trúc mô-đun `plan`, đơn giản hóa ưu tiên chiến lược và tích hợp các quy tắc chỉ đọc.
- **Tăng cường kiểm thử**: Thêm framework kiểm thử tích hợp sử dụng bộ nhớ.
- [→ Chi tiết Phát hành](https://github.com/google-gemini/gemini-cli/pull/25417)

### v0.39.0-nightly.20260414.gdaf500623
- **Sửa lỗi bộ nhớ**: Sửa lỗi rò rỉ bộ nhớ `streamWrapper` trong trace.
- **Sửa lỗi hiển thị hạn ngạch**: Sửa lỗi hiển thị footer hạn ngạch cho các mô hình không tự động.
- [→ Chi tiết Phát hành](https://github.com/google-gemini/gemini-cli/releases/tag/v0.39.0-nightly.20260414.gdaf500623)

### v0.38.0 (Bản ổn định)
- **Tải lại Skill**: Sửa lỗi danh sách lệnh slash không được làm mới sau khi `/skills reload`.
- **Sửa lỗi Công cụ**: Đảm bảo hành vi công cụ `complete_task` hoàn chỉnh.
- [→ Chi tiết Phát hành](https://github.com/google-gemini/gemini-cli/pull/25419)

---

## 3. Issues Nổi bật Cộng đồng

| # | Tiêu đề | Tầm quan trọng | Phản hồi Cộng đồng |
|---|------|--------|---------|
| [#25323](https://github.com/google-gemini/gemini-cli/issues/25323) | Lỗi tải RipGrep không nên làm chậm khởi động vĩnh viễn | **Vấn đề Trải nghiệm P1**. Chặn khởi động hơn 2 phút do lỗi mạng/quyền, người dùng kêu gọi fail-fast hoặc tích hợp sẵn RipGrep. | 6 bình luận, được đánh dấu là `possible-duplicate`, cần phân loại. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Đánh giá ảnh hưởng của việc đọc, tìm kiếm và ánh xạ tệp nhận biết AST | **Hướng kiến trúc dài hạn**. Nhận biết AST có thể giảm lỗi đọc biên, giảm nhiễu token, là bản nâng cấp cốt lõi cho trí tuệ mã. | 5 bình luận, EPIC dành riêng cho người bảo trì, đang theo dõi liên tục. |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | Yêu cầu quyền lặp lại cho cùng một tệp | **Điểm yếu thường gặp**. Logic lưu trữ quyền có lỗi, đôi khi "cho phép tất cả các phiên trong tương lai" không hoạt động. | 3 bình luận, người dùng phản hồi cụ thể, cần sửa lỗi nhanh chóng. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Bị kẹt hiển thị "Waiting input" sau khi thực thi lệnh Shell | **Vấn đề ổn định cốt lõi**. Treo giả sau lệnh đơn giản, ảnh hưởng nghiêm trọng đến trải nghiệm chế độ tự động. | 2 bình luận, có 👍, người dùng mô tả tình huống rõ ràng. |
| [#24175](https://github.com/google-gemini/gemini-cli/issues/24175) | Thực hiện chế độ giọng nói thời gian thực | **Yêu cầu chức năng nóng**. Mong muốn tích hợp Gemini Live API hoặc Whisper cục bộ, giảm ngưỡng nhập liệu. | 2 bình luận, tương ứng trực tiếp với PR đang hoạt động #18499. |
| [#25216](https://github.com/google-gemini/gemini-cli/issues/25216) | Lỗi khởi động khi khởi động trong đường dẫn tạm thời `A:\` | **Tương thích Windows**. Thao tác bất hợp pháp với thư mục của `realpath` gây ra sự cố. | 1 bình luận, ngăn xếp lỗi đầy đủ, dễ định vị. |
| [#24202](https://github.com/google-gemini/gemini-cli/issues/24202) | Hiển thị văn bản tiếng Trung bị lỗi trong hội thoại SSH | **Vấn đề quan trọng trong tình huống phát triển từ xa**. Lỗi hiển thị đầu cuối khi Windows → gLinux qua SSH. | 1 bình luận, người dùng không chuyên về kỹ thuật phản hồi, phạm vi ảnh hưởng có thể rộng. |
| [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) | Tác nhân phụ cần nhận biết chế độ phê duyệt hiện tại | **Khuyết điểm kiến trúc Tác nhân**. Lệnh tác nhân phụ xung đột với ràng buộc engine chiến lược, gây ra thử lại không hợp lệ. | 1 bình luận, dành riêng cho người bảo trì, liên quan đến phối hợp đa tác nhân. |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | Thực hiện bộ nhớ định tuyến: toàn cục vs cấp dự án | **Nền tảng trải nghiệm cá nhân hóa**. Phân biệt lưu trữ bộ nhớ của `~/.gemini/` và `.gemini/`, là chìa khóa cho sự gắn kết lâu dài của người dùng. | 1 bình luận, có 2 👍, ý tưởng thiết kế đã khá rõ ràng. |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Tác nhân phụ MAX_TURNS bị ngắt quãng bị báo cáo nhầm là GOAL thành công | **Vấn đề Độ tin cậy P1**. Tác nhân phụ như `codebase_investigator` vẫn trả về success sau khi hết lượt, che giấu lỗi. | 1 bình luận, có 2 👍, ảnh hưởng đến độ tin cậy của chế độ tự động. |

---

## 4. Tiến độ PR Quan trọng

| # | Tiêu đề | Nội dung Chức năng/Sửa lỗi |
|---|------|--------------|
| [#25187](https://github.com/google-gemini/gemini-cli/pull/25187) | Sửa lỗi thử lại SSL trong truyền dữ liệu luồng trên OpenSSL 3.x | OpenSSL 3.x thay đổi định dạng mã lỗi cảnh báo TLS từ `SSLV3_ALERT_BAD_RECORD_MAC` thành `SSL/TLS_ALERT_BAD_RECORD_MAC`, khiến logic thử lại ban đầu không hoạt động. Bổ sung mã lỗi mới vào danh sách có thể thử lại, giải quyết lỗi treo giả do ngắt luồng. |
| [#18499](https://github.com/google-gemini/gemini-cli/pull/18499) | Thêm nhập liệu bằng giọng nói với backend có thể cắm (Gemini không cần cài đặt + Whisper) | Nhập liệu bằng giọng nói gốc, mặc định sử dụng Gemini API miễn phí cài đặt, tùy chọn Whisper cục bộ. Phản hồi trực tiếp Issue #24175, là một trong những PR chức năng được quan tâm nhất gần đây. |
| [#25240](https://github.com/google-gemini/gemini-cli/pull/25240) | Di chuyển sang `@typescript/native-preview` (tsgo) | Di chuyển monorepo từ trình biên dịch TypeScript tiêu chuẩn sang trình biên dịch gốc tsgo. Tốc độ kiểm tra kiểu tăng **~5.6x** (7.9s → 1.4s), cải thiện đáng kể trải nghiệm lặp lại của nhà phát triển. |
| [#25343](https://github.com/google-gemini/gemini-cli/pull/25343) | Telemetry: Thêm công tắc kích hoạt trace độc lập | Tách các thuộc tính theo dõi chi tiết (đầu ra công cụ, đọc tệp, phản hồi mô hình) khỏi telemetry cơ bản, trace lại thành opt-in nghiêm ngặt, cân bằng độ sâu gỡ lỗi và chi phí hiệu suất. |
| [#24736](https://github.com/google-gemini/gemini-cli/pull/24736) | Nén ngữ cảnh Union-Find của AgentHistoryProvider | Thay thế nén cắt bỏ nhị phân truyền thống, sử dụng phân cụm ngữ nghĩa để di chuyển tin nhắn từ bộ đệm nóng sang "rừng lạnh", có thể cải thiện vấn đề mất ngữ cảnh trong hội thoại dài. |
| [#24664](https://github.com/google-gemini/gemini-cli/pull/24664) | Hỗ trợ yêu cầu đầu vào host ACP | Thêm đường dẫn phản hồi tự động của host cho `ask_user` và `exit_plan_mode` cho client ACP (Agent Communication Protocol), và mặc định là tắt, cần opt-in rõ ràng. |
| [#25383](https://github.com/google-gemini/gemini-cli/pull/25383) + [#25382](https://github.com/google-gemini/gemini-cli/pull/25382) + [#25384](https://github.com/google-gemini/gemini-cli/pull/25384) | Phân tích thư mục kế hoạch mở rộng động (ba giai đoạn) | Từ sửa lỗi `ShellExecutionConfig`, đến công cụ phân tích đường dẫn an toàn, sau đó là cung cấp thư mục kế hoạch theo yêu cầu JIT, hoàn thành việc hiện thực hóa thư mục kế hoạch mở rộng động, là hạ tầng quan trọng của kiến trúc mở rộng. |
| [#25412](https://github.com/google-gemini/gemini-cli/pull/25412) | Phím tắt UI sử dụng cấu hình phím tùy chỉnh của người dùng | Sửa lỗi gợi ý UI luôn hiển thị phím tắt mặc định (ví dụ: `Ctrl+G`) thay vì phím đã ánh xạ lại của người dùng, cải thiện tính nhất quán của khả năng cấu hình. |
| [#25072](https://github.com/google-gemini/gemini-cli/pull/25072) | Thực hiện mô hình yêu thích và chuyển đổi mô hình tuần hoàn | Thêm cài đặt `model.favorites`, hỗ trợ chuyển đổi tuần hoàn giữa các mô hình yêu thích bằng phím tắt, phản hồi Issue #20227. |
| [#25060](https://github.com/google-gemini/gemini-cli/pull/25060) | Danh sách đề cập `@` hỗ trợ mở trình soạn thảo/trình duyệt tệp bằng phím tắt | `Ctrl+X` mở trình soạn thảo, `Ctrl+Shift+X` mở trình duyệt tệp, giảm chi phí chuyển đổi ngữ cảnh. |

---

## 5. Xu hướng Nhu cầu Chức năng

Từ 24 giờ qua Issues, có thể chắt lọc ra **5 hướng chính** được cộng đồng quan tâm nhất:

| Hướng | Issue/PR Đại diện | Xu hướng Mô tả |
|------|--------------|---------|
| **Nhập liệu Giọng nói/Đa phương thức** | #24175, PR #18499 | Nhu cầu chế độ giọng nói thời gian thực rõ ràng, sự cân bằng giữa "không cần cài đặt" và "Whisper cục bộ" trở thành trọng tâm thiết kế. |
| **Hiệu suất Khởi động & Độ bền Phụ thuộc** | #25323 | Ảnh hưởng chết người của lỗi tải phụ thuộc bên ngoài (RipGrep) đến khởi động, thúc đẩy nhu cầu "tích hợp sẵn + fail-fast". |
| **Tương thích Phát triển Từ xa/SSH** | #24202, #24546, #25216 | Các vấn đề hiển thị và đường dẫn trong các tình huống biên như Windows + SSH + đường dẫn tạm thời bùng nổ tập trung, tỷ lệ nhà phát triển doanh nghiệp/từ xa tăng lên. |
| **Bộ nhớ Tác nhân & Quản lý Ngữ cảnh** | #22819, #22809, #23582, PR #24736 | Từ "bộ nhớ nên lưu ở đâu" đến "khi nào chủ động ghi bộ nhớ", sau đó là nén hội thoại dài, hệ thống bộ nhớ đang tiến hóa từ có đến tốt hơn. |
| **Tinh chỉnh Quyền & Chế độ Phê duyệt** | #24916, #23582, #22672 | Kỳ vọng của người dùng đối với tính bền vững của quyền, nhận biết chế độ tác nhân phụ, lời khuyên ngăn chặn thao tác phá hủy tăng lên, trải nghiệm bảo mật trở thành yếu tố khác biệt chính. |

---

## 6. Điểm Quan tâm của Nhà phát triển

Tổng hợp phản hồi từ Issues và PR, các điểm yếu và nhu cầu thường gặp của nhà phát triển hiện nay:

1. **Độ tin cậy Khởi động > Tốc độ Khởi động**：Chặn 2+ phút do lỗi tải RipGrep (#25323) còn tệ hơn cả tốc độ chậm đơn thuần, nhà phát triển rất mong muốn "thất bại thì từ bỏ" thay vì thử lại vô hạn.
2. **Điểm yếu Trải nghiệm Phát triển Windows / Từ xa**：Lỗi hiển thị tiếng Trung SSH (#24202), lỗi treo ổ đĩa tạm thời (#25216) cho thấy việc hoàn thiện công cụ trong các tình huống chính không phải Mac/Linux còn thiếu sót rõ ràng.
3. **"Sự trung thực" của Tác nhân**：Tác nhân phụ hết lượt nhưng báo success (#22323), cùng một tệp yêu cầu quyền lặp đi lặp lại (#24916) — những hành vi "giấu lỗi" này còn làm suy giảm niềm tin hơn cả việc báo lỗi trực tiếp.
4. **Tốc độ Biên dịch/Lặp lại**：Việc di chuyển tsgo (PR #25240) nhận được sự quan tâm cao, cho thấy hiệu suất xây dựng của monorepo TS lớn đã trở thành điểm nghẽn của hiệu quả phát triển nội bộ.
5. **Cân bằng Khả năng Quan sát & Kiểm soát**：Công tắc trace telemetry (PR #25343) phản ánh nhà phát triển hoan nghênh khả năng gỡ lỗi sâu, nhưng kiên quyết phản đối những lo ngại về hiệu suất và quyền riêng tư do "mặc định bật tất cả".

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# Báo cáo Cập nhật Hàng ngày GitHub Copilot CLI Ngày 2026-04-15

---

## 1. Xem nhanh Hôm nay

Copilot CLI hôm nay phát hành **v1.0.26**, tập trung sửa các vấn đề ổn định như kẹt khi hủy gợi ý bằng phím Esc, lỗi ngắt quãng gọi công cụ do nén ngữ cảnh. Về phía cộng đồng, **chặn mô hình truy cập theo chính sách đăng ký doanh nghiệp** trở thành chủ đề có độ nóng cao nhất, ngày hôm nay có thêm nhiều Issue liên quan; đồng thời **lỗi ủy quyền (`/login`)** và **lỗi kết nối máy chủ MCP** vẫn là các điểm yếu tập trung phản hồi của nhà phát triển.

---

## 2. Phát hành Phiên bản

### v1.0.26 & v1.0.26-0 (2026-04-14)

| Loại | Nội dung Cập nhật |
|:---|:---|
| **Sửa lỗi** | Phím Esc có thể hủy `ask_user` và gợi ý dẫn đường một cách đáng tin cậy, không còn bị kẹt |
| **Sửa lỗi** | Các tham số trong khối `find -exec` không còn kích hoạt nhầm gợi ý quyền truy cập thư mục |
| **Sửa lỗi** | Sửa lỗi lỗi không thể khôi phục do nén ngữ cảnh làm đứt quãng gọi công cụ đơn lẻ |
| **Mới** | Biến môi trường mới cho hook plugin `PLUGIN_ROOT` / `COPILOT_PLUGIN_ROOT` / `CLAUDE_PLUGIN_ROOT`, chỉ đến thư mục cài đặt plugin |
| **Cải tiến** | Bộ chọn phạm vi phiên trong gợi ý đồng bộ rõ ràng hơn, hỗ trợ điều hướng bằng bàn phím phím mũi tên trái/phải |

🔗 [Trang Phát hành](https://github.com/github/copilot-cli/releases)

---

## 3. Issues Nổi bật Cộng đồng

> Chọn lọc 10 chủ đề có độ quan tâm cao từ 50 Issues đang hoạt động, sắp xếp theo mức độ quan trọng và độ nóng thảo luận.

### #1595 [OPEN] Chính sách đăng ký doanh nghiệp chặn truy cập mô hình không liên tục
- **Tác giả**: jaroslaw-buryk-lgs | **Bình luận**: 26 | **👍**: 9
- **Vấn đề cốt lõi**: Tài khoản Copilot doanh nghiệp hiển thị còn 40% yêu cầu Premium, nhưng lệnh `/models` bị chính sách từ chối truy cập.
- **Tại sao quan trọng**: Đây là Issue có nhiều bình luận nhất từ cộng đồng, ảnh hưởng trực tiếp đến khả năng sử dụng cốt lõi của người dùng doanh nghiệp, và vấn đề có đặc điểm "không liên tục", khó gỡ lỗi.
- **Phản hồi Cộng đồng**: Nhiều người dùng doanh nghiệp theo dõi xác nhận gặp vấn đề tương tự, yêu cầu GitHub làm rõ cơ chế đồng bộ chính sách.
🔗 [github/copilot-cli#1595](https://github.com/github/copilot-cli/issues/1595)

### #2686 [CLOSED] Tài khoản dùng thử Copilot Pro gặp lỗi gây hiểu lầm "Lỗi kết nối máy chủ"
- **Tác giả**: kyleluc | **Bình luận**: 24 | **👍**: 8
- **Vấn đề cốt lõi**: Trang thanh toán hiển thị đăng ký Pro đang hoạt động, nhưng cả tải mô hình và kết nối máy chủ MCP trong CLI đều thất bại, thông báo lỗi gây hiểu lầm.
- **Tại sao quan trọng**: Issue có thảo luận cao đã nhanh chóng bị đóng, cho thấy nhóm rất coi trọng các lỗi trong quy trình chuyển đổi dùng thử.
- **Phản hồi Cộng đồng**: Người dùng phản hồi thông tin lỗi và trạng thái đăng ký thực tế hoàn toàn không khớp, ảnh hưởng đến trải nghiệm người dùng mới.
🔗 [github/copilot-cli#2686](https://github.com/github/copilot-cli/issues/2686)

### #2684 [OPEN] Thường xuyên gặp "Lỗi ủy quyền, vui lòng chạy /login"
- **Tác giả**: shayne-snap | **Bình luận**: 12 | **👍**: 0
- **Vấn đề cốt lõi**: Trạng thái đã đăng nhập nhưng liên tục kích hoạt lỗi ủy quyền, kèm theo lỗi tải skill.
- **Tại sao quan trọng**: Đây là báo cáo lỗi tần suất cao mới phát sinh hôm nay, ảnh hưởng trực tiếp đến quy trình sử dụng cơ bản của người dùng.
- **Phản hồi Cộng đồng**: Người dùng thử đăng nhập lại không hiệu quả, nghi ngờ vấn đề làm mới token máy chủ hoặc đồng bộ trạng thái phiên.
🔗 [github/copilot-cli#2684](https://github.com/github/copilot-cli/issues/2684)

### #1164 [OPEN] Trên Windows 11, CLI phiên bản mới cài đặt xong không có đầu ra và thoát ngay lập tức
- **Tác giả**: VujaNS | **Bình luận**: 11 | **👍**: 3
- **Vấn đề cốt lõi**: Phiên bản v0.0.368 trở lên cài đặt thành công nhưng chạy không có bất kỳ đầu ra nào, chỉ có v0.0.366 hoạt động bình thường.
- **Tại sao quan trọng**: Khả năng tương thích đa nền tảng là yêu cầu cơ bản của công cụ CLI, lỗi hồi quy này đã tồn tại hàng tháng mà chưa được giải quyết.
- **Phản hồi Cộng đồng**: Người dùng Windows liên tục theo dõi cung cấp thông tin môi trường, nhưng chưa nhận được giải pháp sửa lỗi hiệu quả.
🔗 [github/copilot-cli#1164](https://github.com/github/copilot-cli/issues/1164)

### #2698 [OPEN] Bản dùng thử Copilot Pro gặp thông báo lỗi khó hiểu do "tạm dừng tạm thời"
- **Tác giả**: avanipai2026 | **Bình luận**: 6 | **👍**: 1
- **Vấn đề cốt lõi**: Lệnh `/model` báo lỗi "access denied by Copilot policy", nhưng người dùng thực tế đang trong trạng thái dùng thử Pro.
- **Tại sao quan trọng**: Tương tự #2686, chỉ ra vấn đề hệ thống trong đồng bộ chính sách/thanh toán cho tài khoản dùng thử.
- **Phản hồi Cộng đồng**: Người dùng bối rối vì thông báo lỗi thiếu hướng dẫn có thể hành động.
🔗 [github/copilot-cli#2698](https://github.com/github/copilot-cli/issues/2698)

### #947 [OPEN] Yêu cầu chức năng: Thêm tùy chọn cấu hình `auto_compact` để tắt nén hội thoại tự động
- **Tác giả**: ssfdre38 |