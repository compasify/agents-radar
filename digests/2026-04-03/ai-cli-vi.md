# Báo cáo Tóm tắt Cộng đồng Công cụ AI CLI Ngày 03/04/2026

> Thời gian tạo: 2026-04-03 00:11 UTC | Bao gồm các công cụ: 8

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

# Báo cáo Phân tích So sánh Ngang Hệ sinh thái Công cụ AI CLI | 03/04/2026

---

## 1. Toàn cảnh Hệ sinh thái

Hệ sinh thái công cụ AI CLI hiện tại đang thể hiện một **"mô hình ba siêu cường và nhiều đối thủ mạnh"**: Claude Code, OpenAI Codex, Gemini CLI chiếm ưu thế nhờ lợi thế mô hình mã nguồn đóng, nhưng đang đối mặt với khủng hoảng về tính minh bạch trong tính phí theo mức sử dụng và thử thách về lòng tin từ cộng đồng; Kimi, OpenCode, Pi, Qwen Code và các công cụ mới nổi khác đang nhanh chóng bắt kịp với tư thế mã nguồn mở/bán mã nguồn mở, cạnh tranh khác biệt hóa trên các phương diện như khả năng tương thích Windows, tối ưu hóa chi phí, và sự đa dạng của mô hình. Toàn ngành đang chuyển đổi từ **"chức năng khả dụng" sang "sản xuất đáng tin cậy"**, với tính ổn định, khả năng quan sát và kiểm soát chi phí trở thành những nút thắt chung, sự lo lắng của cộng đồng về tính minh bạch kiến trúc và tình trạng khóa nhà cung cấp ngày càng gia tăng.

---

## 2. So sánh Mức độ Hoạt động của từng Công cụ

| Công cụ | Issues mới hôm nay | PR mới hôm nay | Phát hành phiên bản | Động thái chính |
|:---|:---:|:---:|:---|:---|
| **Claude Code** | 10+ | 8+ | v2.1.91（Bản vá khẩn cấp） | Khủng hoảng phí theo mức sử dụng tiếp diễn, hơn 400 bình luận đặt câu hỏi về sự sụp đổ lòng tin |
| **OpenAI Codex** | 8+ | 10+ | rust-v0.119.0-alpha.3~5 | Tối ưu hóa biên dịch lõi Rust (-48%~-63%), thúc đẩy phạm vi kiểm thử Windows |
| **Gemini CLI** | 6+ | 10+ | v0.37.0-preview.1 | Tái cấu trúc kiến trúc TerminalBuffer để khắc phục hiện tượng nhấp nháy, sửa lỗi khẩn cấp hộp cát Windows |
| **GitHub Copilot CLI** | 5+ | 0 | v1.0.16 | Lỗi liên tục HTTP/2 chưa được giải quyết, chính sách MCP 404 chặn nhầm người dùng cá nhân |
| **Kimi Code CLI** | 13 | 26 | v1.30.0 | Hoạt động cộng đồng tăng vọt, khả năng tương thích plugin Claude trở thành trọng tâm chiến lược |
| **OpenCode** | 10+ | 10+ | — | Tăng cường sửa lỗi Windows trên diện rộng, thu thập dữ liệu chẩn đoán vấn đề bộ nhớ từ cộng đồng |
| **Pi** | 10+ (đã đóng 19) | 8 (đã hợp nhất 8) | v0.64.0 Sửa lỗi khẩn cấp | Chất lượng ổn định trở lại sau nhiều lần gặp sự cố, chức năng grep bốn trong một được đánh giá cao |
| **Qwen Code** | 8+ | 10+ | v0.14.0-preview.5 / nightly | Hỗ trợ Qwen 3.6 là yêu cầu hàng đầu, hiệu suất Bun runtime tăng gấp 3-5 lần |

> **Thứ tự mức độ hoạt động**: Kimi (39) > Pi (27) > Codex/Gemini/Qwen (~18) > Claude Code/OpenCode (~18) > Copilot CLI (5)

---

## 3. Các hướng chức năng được Quan tâm Chung

| Hướng chức năng | Công cụ liên quan | Yêu cầu cụ thể và dữ liệu |
|:---|:---|:---|
| **🔥 Tính minh bạch phí sử dụng** | Claude Code, OpenCode, Qwen Code | Chi tiêu bất thường của Claude #38335 (365 bình luận/294👍); Chênh lệch đo lường OpenCode #5951 gấp 40 lần; Lỗi bộ nhớ đệm ẩn Qwen #2823 dẫn đến hóa đơn 456 đô la |
| **🖥️ Trải nghiệm nền tảng Windows** | Codex, Gemini CLI, Kimi, OpenCode, Pi | Chặn cài đặt Codex #11744; Lỗi ghi hộp cát Gemini #24571; Sửa đổi đặc biệt Kimi v1.30.0; 7 PR sửa lỗi Windows OpenCode; Lỗi tương thích Node 18 Pi #2779 |
| **🧠 Quản lý ngữ cảnh/bộ nhớ** | Claude Code, Codex, Gemini CLI, OpenCode, Pi | Rò rỉ bộ nhớ Claude #1421 chưa được giải quyết trong nhiều tháng (64 bình luận); Nén ngữ cảnh MCP Codex #13142; Kiến trúc định tuyến bộ nhớ Gemini #22819; Yêu cầu ảnh chụp nhanh heap chính thức OpenCode #20695; Rò rỉ heap 1GB+ Pi #2752 |
| **🔌 Quản trị hệ sinh thái MCP** | Claude Code, Codex, Copilot CLI, Qwen Code | Sửa lỗi cắt kết quả lớn Claude v2.1.91; Sửa lỗi chính sách phê duyệt Codex #16632; Chặn nhầm người dùng cá nhân Copilot #2479; Lỗi kiểm tra anyOf Qwen #2839 |
| **⚡ Kiểm soát chi phí và bộ nhớ đệm** | Codex, OpenCode, Qwen Code, Pi | Phân cấp suy luận động Codex #8649; Bộ nhớ đệm cấp nhà cung cấp OpenCode #5422; Chính sách nén nhỏ Qwen #2813; Tối ưu hóa đọc bộ nhớ đệm Pi |
| **📝 Quản lý và khôi phục hội thoại** | Kimi, Claude Code, Codex, Copilot CLI | `/undo`/`/fork` Kimi v1.30.0; Khủng hoảng giới hạn hội thoại Claude; Thêm thư mục động Codex #11747; Khả năng phục hồi `/resume` Copilot #2446 |

---

## 4. Phân tích Định vị Khác biệt

| Công cụ | Định vị cốt lõi | Đối tượng mục tiêu | Lộ trình công nghệ | Điểm khác biệt chính |
|:---|:---|:---|:---|:---|
| **Claude Code** | Nền tảng Agent cấp doanh nghiệp | Nhà phát triển chuyên nghiệp có ngân sách cao, nhóm doanh nghiệp | Node.js mã nguồn đóng + ảo hóa Cowork | **Khả năng Agent mạnh nhất**, nhưng tình trạng phí sử dụng không minh bạch gây khủng hoảng lòng tin; Hệ sinh thái MCP trưởng thành nhất |
| **OpenAI Codex** | Lõi Rust ưu tiên hiệu suất | Nhóm kỹ thuật theo đuổi hiệu suất tối ưu | Viết lại bằng Rust + Xây dựng bằng Bazel | **Tốc độ biên dịch dẫn đầu** (tối ưu hóa -63%), kiến trúc nhóm kết nối HTTP/2 cần hoàn thiện |
| **Gemini CLI** | Tích hợp hệ sinh thái Google | Người dùng hiện tại của GCP/Vertex AI | TypeScript + Mô hình bảo mật hộp cát | **Cải tiến TerminalBuffer** giải quyết vấn đề hiển thị nhấp nháy, khám phá chuỗi công cụ nhận biết AST mang tính tiên phong |
| **GitHub Copilot CLI** | Mở rộng quy trình làm việc IDE | Người dùng liên kết hệ sinh thái GitHub | Mã nguồn đóng, liên kết với đăng ký Copilot | **Thiếu sự đa dạng mô hình** (Gemini bị gỡ bỏ gây tranh cãi), khủng hoảng ổn định nghiêm trọng nhất |
| **Kimi Code CLI** | Giải pháp thay thế mã nguồn mở tương thích | Người dùng di chuyển từ Claude Code, nhà phát triển Trung Quốc | Kết hợp Python/Node.js mã nguồn mở | **Chiến lược tương thích plugin Claude** (#1715), cần khắc phục nợ tài liệu |
| **OpenCode** | Minh bạch ưu tiên cục bộ | Nhà phát triển nhạy cảm về quyền riêng tư, nhạy cảm về chi phí | Bun/TypeScript mã nguồn mở | **Số lượng token có thể xác minh**, nhưng ổn định trên Windows còn yếu; Cải tiến bộ nhớ đệm cấp nhà cung cấp |
| **Pi** | Tùy chỉnh dựa trên mở rộng | Nhà phát triển cao cấp, người xây dựng hệ sinh thái plugin | Node.js mã nguồn mở + Hệ thống Skill | Cơ chế **Skill/Prompt template linh hoạt**, chất lượng ổn định trở lại nhanh chóng sau khủng hoảng chất lượng v0.64.0 |
| **Qwen Code** | Mô hình nội địa nguyên bản | Nhà phát triển Trung Quốc, người dùng Alibaba Cloud | TypeScript mã nguồn mở, thử nghiệm Bun | **Hiệu suất Bun runtime tăng gấp 3-5 lần**, việc đồng bộ mô hình chậm hơn nền tảng của bên thứ ba là một điểm khó xử |

---

## 5. Mức độ Phổ biến và Sự trưởng thành của Cộng đồng

### 🔥 Lặp lại nhanh với độ phổ biến cao (Dựa trên cộng đồng)
| Công cụ | Bằng chứng | Đánh giá sự trưởng thành |
|:---|:---|:---|
| **Kimi Code CLI** | 13 Issues + 26 PR mới trong ngày, phát hành v1.30.0, chiến lược tương thích Claude rõ ràng | ⭐⭐⭐☆ Nhanh chóng bắt kịp chức năng, tài liệu và ổn định cần lắng đọng |
| **Pi** | Đóng 19 Issues/hợp nhất 8 PR, các PR chất lượng cao như grep bốn trong một, hỗ trợ Qwen từ đóng góp cộng đồng | ⭐⭐⭐⭐ Thể hiện khả năng phục hồi sau khủng hoảng v0.64.0, cơ chế mở rộng trưởng thành |
| **Qwen Code** | PR kiến trúc 4 cái trong ngày từ chinesepowered, Issues hỗ trợ Qwen 3.6 nhận 5 bình luận trong 5 giờ | ⭐⭐⭐☆ Tốc độ phản hồi nhanh, nhưng còn thiếu sót lớn về đồng bộ mô hình và tương thích Windows |

### 🏭 Mức độ quan tâm cao nhưng khủng hoảng lòng tin (Do các công ty lớn dẫn đầu)
| Công cụ | Bằng chứng | Đánh giá sự trưởng thành |
|:---|:---|:---|
| **Claude Code** | Khủng hoảng lòng tin #38335 với hơn 400 bình luận, nhưng hệ sinh thái MCP, khả năng Agent vẫn dẫn đầu | ⭐⭐⭐⭐⭐ Chức năng trưởng thành nhất, **khủng hoảng tính minh bạch phí sử dụng** đe dọa lòng tin cốt lõi |
| **OpenAI Codex** | Tối ưu hóa lõi Rust dày đặc, nhưng nhu cầu kiến trúc như chỉ mục mã ngữ nghĩa #5181 (31👍) chưa được phản hồi | ⭐⭐⭐⭐ Hiệu suất kỹ thuật nổi bật, cơ sở hạ tầng kỹ thuật AI cần hoàn thiện |
| **Gemini CLI** | Tái cấu trúc kiến trúc TerminalBuffer cho thấy chiều sâu kỹ thuật, nhưng quy mô cộng đồng còn nhỏ | ⭐⭐⭐⭐ Tiên phong đổi mới, phạm vi hệ sinh thái chưa đủ rộng |

### ⚠️ Đèn đỏ về ổn định (Cần cảnh giác)
| Công cụ | Rủi ro cốt lõi |
|:---|:---|
| **GitHub Copilot CLI** | #2421 Tích hợp lỗi liên tục HTTP/2 với 5 Issues, chính sách MCP 404 chặn người dùng cá nhân, 0 PR phản hồi hôm nay |

---

## 6. Tín hiệu Xu hướng đáng chú ý

| Xu hướng | Nguồn tín hiệu | Giá trị tham khảo cho nhà phát triển |
|:---|:---|:---|
| **🔴 Phí sử dụng "hộp đen" phản tác dụng** | Khủng hoảng 400+ bình luận của Claude Code, chênh lệch đo lường 40x của OpenCode, trường hợp hóa đơn 456 đô la của Qwen | **Môi trường sản xuất phải tự xây dựng cơ chế kiểm tra đo lường**; ưu tiên các công cụ có thể kiểm toán như OpenCode |
| **🟡 Tái cấu trúc kiến trúc hiển thị đầu cuối** | TerminalBuffer của Gemini, tranh cãi nén ngữ cảnh Claude Code, yêu cầu no-alt-screen của Copilot #2334 | **Mô hình alternate buffer truyền thống đạt đến giới hạn**, thế hệ công cụ mới đang khám phá các giải pháp thay thế như hiển thị tĩnh, nén thông minh |
| **🟢 Di chuyển sang Runtime Rust/Bun** | Lõi Rust của Codex (giảm 63% tốc độ biên dịch), hỗ trợ Bun của Qwen (tăng gấp 3-5 lần tốc độ khởi động) | **Giới hạn hiệu suất Node.js đã hiện rõ**, các trường hợp nhạy cảm về hiệu suất nên chú ý đến các tùy chọn runtime không phải JS |
| **🔵 MCP trở thành tiêu chuẩn thực tế nhưng quản trị bị phân mảnh** | Tỷ lệ Issues liên quan đến MCP của tất cả các công cụ >15%, nhưng hệ thống chính sách, logic kiểm tra, cơ chế phê duyệt không tương thích giữa các công cụ | **Phát triển máy chủ MCP cần kiểm thử khả năng tương thích đa nhà cung cấp**, tránh khóa công cụ đơn lẻ |
| **🟣 Yêu cầu "Mang trở lại" gia tăng** | Gemini bị gỡ bỏ của Copilot, no-alt-screen; PR mã nguồn mở #41447 của Claude Code | **Thay đổi chức năng của các công ty lớn thiếu giao tiếp đầy đủ gây mất người dùng**, lựa chọn công cụ cần đánh giá sự trưởng thành của quản lý thay đổi nhà cung cấp |
| **⚪ Chuỗi công cụ mô hình nội địa đang bắt kịp** | Sự chậm trễ đồng bộ Qwen 3.6 là điều khó xử, chiến lược tương thích Claude của Kimi, hỗ trợ Qwen của Pi | **Nhà phát triển trong nước nên chú ý đến các chiến lược sao lưu đa mô hình**, tránh phụ thuộc vào một mô hình/chuỗi công cụ duy nhất |

---

> **Khuyến nghị quyết định**: Ở giai đoạn hiện tại, **khuyến nghị sử dụng Pi/OpenCode (tính minh bạch + khả năng kiểm soát) hoặc Claude Code (khả năng mạnh nhất nhưng cần giám sát mức sử dụng tự xây dựng) cho môi trường sản xuất**; **nghiên cứu công nghệ tập trung vào lõi Rust của Codex và kiến trúc TerminalBuffer của Gemini**; **Copilot CLI khuyên nên chờ đợi cho đến khi các vấn đề về HTTP/2 và chính sách MCP được giải quyết**.

---

## Báo cáo Chi tiết từng Công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Điểm Nóng Cộng đồng Claude Code Skills

> Nguồn dữ liệu: [anthropics/skills](https://github.com/anthropics/skills)

# Báo cáo Điểm Nóng Cộng đồng Claude Code Skills (03/04/2026)

---

## 1. Xếp hạng Skills Phổ biến

| Hạng | Skill | Tóm tắt chức năng | Trạng thái | Liên kết |
|:---|:---|:---|:---|:---|
| 1 | **document-typography** | Kiểm soát chất lượng dàn trang tài liệu, giải quyết các vấn đề dàn trang phổ biến trong tài liệu do AI tạo ra như cô độc, cô quả, đánh số sai | 🟡 Mở | [PR #514](https://github.com/anthropics/skills/pull/514) |
| 2 | **frontend-design** | Tái cấu trúc Skill thiết kế giao diện người dùng, nâng cao độ rõ ràng của chỉ dẫn và khả năng thực thi, đảm bảo hoàn thành tác vụ thiết kế trong một lần trò chuyện | 🟡 Mở | [PR #210](https://github.com/anthropics/skills/pull/210) |
| 3 | **skill-quality-analyzer / skill-security-analyzer** | Meta-skill: Tự động đánh giá chất lượng (5 khía cạnh: cấu trúc, tài liệu, kỹ thuật gợi ý, bảo mật) của các Skill khác | 🟡 Mở | [PR #83](https://github.com/anthropics/skills/pull/83) |
| 4 | **ODT** | Tạo văn bản OpenDocument, điền mẫu và phân tích cú pháp ODT→HTML, lấp đầy khoảng trống trong hệ sinh thái LibreOffice | 🟡 Mở | [PR #486](https://github.com/anthropics/skills/pull/486) |
| 5 | **SAP-RPT-1-OSS** | Tích hợp mô hình cơ sở bảng SAP mã nguồn mở, dùng để phân tích dự đoán dữ liệu kinh doanh SAP | 🟡 Mở | [PR #181](https://github.com/anthropics/skills/pull/181) |
| 6 | **codebase-inventory-audit** | Dọn dẹp kho mã nguồn và kiểm tra tài liệu, xác định mã nguồn bị bỏ rơi, tệp không sử dụng, thiếu sót tài liệu, v.v. trong quy trình làm việc 10 bước | 🟡 Mở | [PR #147](https://github.com/anthropics/skills/pull/147) |
| 7 | **shodh-memory** | Hệ thống bộ nhớ bền vững cho đại lý AI, duy trì ngữ cảnh giữa các hội thoại, hỗ trợ truy xuất ngữ cảnh chủ động | 🟡 Mở | [PR #154](https://github.com/anthropics/skills/pull/154) |
| 8 | **testing-patterns** | Hướng dẫn kiểm thử toàn diện: Mô hình Testing Trophy, mẫu AAA, kiểm thử thành phần React, chiến lược E2E | 🟡 Mở | [PR #723](https://github.com/anthropics/skills/pull/723) |

---

## 2. Xu hướng nhu cầu của cộng đồng

Bốn hướng chính được chắt lọc từ các chủ đề tần suất cao của Issues:

| Hướng | Nhu cầu điển hình | Issue đại diện |
|:---|:---|:---|
| **Quản trị và chia sẻ cấp doanh nghiệp** | Chia sẻ Skill trong tổ chức, tích hợp SSO, kiểm soát quyền, nhật ký kiểm toán | [#228](https://github.com/anthropics/skills/issues/228) Kho Skill cấp tổ chức, [#532](https://github.com/anthropics/skills/issues/532) Tương thích SSO doanh nghiệp |
| **Chất lượng và độ tin cậy của Skill** | Phân biệt Skill chính thức/cộng đồng, ranh giới an toàn, đánh giá tự động | [#492](https://github.com/anthropics/skills/issues/492) Ranh giới tin cậy không gian tên, [#202](https://github.com/anthropics/skills/issues/202) Thực tiễn tốt nhất cho skill-creator |
| **Tích hợp giao thức MCP** | Phơi bày Skills dưới dạng MCP, chuẩn hóa giao diện API | [#16](https://github.com/anthropics/skills/issues/16) Skills là MCP |
| **Triển khai đa nền tảng** | Hỗ trợ AWS Bedrock, ổn định API, quản lý phiên bản | [#29](https://github.com/anthropics/skills/issues/29) Tương thích Bedrock, [#389](https://github.com/anthropics/skills/issues/389) Ổn định API |

---

## 3. Các Skills có tiềm năng cao đang chờ hợp nhất

Các PR sau đây có thảo luận sôi nổi, chức năng đầy đủ và dự kiến sẽ được hợp nhất trong thời gian tới:

| Skill | Điểm nổi bật cốt lõi | Cập nhật gần nhất | Liên kết |
|:---|:---|:---|:---|
| **quality-playbook** | Phục hồi các thực tiễn kỹ thuật chất lượng truyền thống, chiến lược kiểm thử do AI tạo ra (không dựa trên mã, dựa trên yêu cầu) | 2026-03-29 | [PR #659](https://github.com/anthropics/skills/pull/659) |
| **sensory** | Tự động hóa macOS gốc (AppleScript), thay thế giải pháp chụp màn hình, thiết kế quyền phân lớp | 2026-04-02 | [PR #806](https://github.com/anthropics/skills/pull/806) |
| **masonry-generate-image-and-videos** | Công cụ CLI tạo đa phương tiện tích hợp Imagen 3.0 / Veo 3.1 | 2026-03-14 | [PR #335](https://github.com/anthropics/skills/pull/335) |
| **Bộ sửa lỗi docx** | Giải quyết xung đột ID tracked changes, các vấn đề hư hỏng tài liệu tham chiếu nhạy cảm với chữ hoa chữ thường | 2026-03-31 | [PR #541](https://github.com/anthropics/skills/pull/541) [#538](https://github.com/anthropics/skills/pull/538) |

---

## 4. Quan sát Hệ sinh thái Skills

> **Nhu cầu cốt lõi: Chuyển đổi từ "công cụ hiệu suất cá nhân" sang "hệ thống sản xuất có thể quản trị cấp doanh nghiệp"** - Cộng đồng đang thúc đẩy Skills từ các tập lệnh cho người dùng đơn lẻ sang cơ sở hạ tầng có thể chia sẻ trong tổ chức, có thể đo lường chất lượng và có thể kiểm toán, đồng thời yêu cầu khẩn cấp kết nối với các giao thức mở như MCP để đạt được khả năng tương tác hệ sinh thái.

---

---

# Báo cáo Tóm tắt Cộng đồng Claude Code Ngày 03/04/2026

---

## 1. Tóm tắt hôm nay

**Khủng hoảng phí sử dụng tiếp tục leo thang**: Kể từ ngày 23 tháng 3, một lượng lớn người dùng gói Max/Max 20 báo cáo tiêu thụ giới hạn hội thoại bất thường, mỗi tin nhắn tiêu thụ 2-3% hạn ngạch trở thành thường xuyên, các Issue liên quan đã có hơn 400 bình luận. Anthropic chưa đưa ra tuyên bố chính thức, làn sóng nghi ngờ từ cộng đồng ngày càng tăng. Đồng thời, bản vá khẩn cấp v2.1.91 đã được phát hành, sửa lỗi cắt kết quả lớn MCP và thực thi bảo mật Skill.

---

## 2. Phát hành phiên bản

### v2.1.91 (02/04/2026)

| Mục cập nhật | Mô tả |
|--------|------|
| **Lưu trữ kết quả lớn MCP** | Thêm chú thích `_meta["anthropic/maxResultSizeChars"]`, hỗ trợ kết quả công cụ MCP lên đến 500K ký tự, giải quyết vấn đề kết quả lớn như lược đồ cơ sở dữ liệu bị cắt |
| **Kiểm soát thực thi Shell Skill** | Thêm cài đặt `disableSkillShellExecution`, có thể vô hiệu hóa việc thực thi Shell nội bộ trong Skill, nâng cao bảo mật |

🔗 [Chi tiết phát hành](https://github.com/anthropics/claude-code/releases/tag/v2.1.91)

---

## 3. Các Issues Nóng cộng đồng

| # | Issue | Trạng thái | Bình luận | Vấn đề cốt lõi | Phản ứng cộng đồng |
|---|-------|------|------|---------|---------|
| [#38335](https://github.com/anthropics/claude-code/issues/38335) | Giới hạn hội thoại gói Max tiêu thụ bất thường nhanh chóng (sử dụng CLI) | 🔴 ĐANG MỞ | **365** | Từ ngày 23/3, tốc độ tiêu thụ hạn ngạch của người dùng CLI bất thường, nghi ngờ thay đổi mô hình phí sử dụng không được thông báo | 🔥 **Nóng nhất**, 294 👍, người dùng yêu cầu giải thích minh bạch |
| [#41814](https://github.com/anthropics/claude-code/issues/41814) | Tin nhắn đầu cuối biến mất sau cập nhật v2.1.89 | 🔴 ĐANG MỞ | 50 | Tin nhắn người dùng và phản hồi Claude trong lịch sử hội thoại bị xóa tự động, ảnh hưởng nghiêm trọng đến tính liên tục của ngữ cảnh | 86 👍, nhìn chung là lỗi nghiêm trọng quay lại |
| [#41788](https://github.com/anthropics/claude-code/issues/41788) | Gói Max 20 tiêu thụ 100% hạn ngạch trong 70 phút | 🔴 ĐANG MỞ | 26 | Lần đầu xuất hiện sau v2.1.89, hoàn toàn khác với hành vi của phiên bản trước | 44 👍, người dùng doanh nghiệp lo ngại chi phí mất kiểm soát |
| [#1421](https://github.com/anthropics/claude-code/issues/1421) | "Đang suy nghĩ" liên tục bị lỗi: thiếu bộ nhớ heap JavaScript | 🔴 ĐANG MỞ | 64 | Vấn đề rò rỉ bộ nhớ tồn tại từ lâu, chắc chắn xảy ra trong các hội thoại dài | 30 👍, các nhà phát triển nổi tiếng như Ray Ozzie liên tục phản hồi |
| [#41930](https://github.com/anthropics/claude-code/issues/41930) | Tiêu thụ bất thường trên diện rộng ở các cấp độ trả phí - Nhận dạng nhiều nguyên nhân | 🔴 ĐANG MỞ | 9 | Phân tích tổng hợp, chỉ ra các yếu tố đa dạng như thay đổi gợi ý hệ thống, chính sách nén ngữ cảnh, phiên bản mô hình | 14 👍, được coi là phân tích kỹ thuật hệ thống nhất |
| [#42052](https://github.com/anthropics/claude-code/issues/42052) | Gói Max 20x tiêu thụ 100% hạn ngạch sau 2 giờ làm việc nhẹ | 🔴 ĐANG MỞ | 19 | Chỉ 5 lần gửi mã nhỏ, không sử dụng công cụ Agent, loại trừ lỗi sử dụng của người dùng | Người dùng nghi ngờ độ tin cậy của hệ thống tính phí |
| [#32145](https://github.com/anthropics/claude-code/issues/32145) | Hỗ trợ cấu hình máy chủ MCP qua `~/.claude/settings.json` | 🔴 ĐANG MỞ | 6 | Cấu hình MCP cấp người dùng tách biệt với cấp dự án, thuận tiện cho quản lý đa dự án | 9 👍, vấn đề quản lý cấu hình |
| [#42837](https://github.com/anthropics/claude-code/issues/42837) | Thư mục làm việc Bash không còn tồn tại giữa các lệnh gọi | 🔴 ĐANG MỞ | 4 | Thư mục được đặt lại ngay sau khi `cd` vào, phá vỡ quy trình làm việc hiện có | Vấn đề quay lại, ảnh hưởng đến việc sử dụng script |
| [#42857](https://github.com/anthropics/claude-code/issues/42857) | Sandbox chặn API cấu hình hệ thống macOS | 🔴 ĐANG MỞ | 1 | Gây lỗi cho các công cụ CLI Rust (như Codex CLI) | Xung đột chính sách hộp cát với công cụ nhà phát triển |
| [#42835](https://github.com/anthropics/claude-code/issues/42835) | Công cụ bị im lặng mất trong quá trình nén ngữ cảnh | 🔴 ĐANG MỞ | 2 | AI tự tin tuyên bố công cụ "không khả dụng", thực tế là bị nén và loại bỏ | Vấn đề về hành vi mô hình và tính minh bạch hệ thống |

---

## 4. Tiến độ PR Quan trọng

| # | PR | Trạng thái | Đóng góp cốt lõi | Giá trị kỹ thuật |
|---|-----|------|---------|---------|
| [#35710](https://github.com/anthropics/claude-code/pull/35710) | Thêm plugin tool-mutex để ngăn chặn BSOD Windows | 🟡 ĐANG MỞ | Giới hạn đồng thời các công cụ liệt kê fs để tránh lỗi driver Wof.sys | **Sửa lỗi ổn định quan trọng**, ảnh hưởng môi trường sản xuất Windows |
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | Mã nguồn mở Claude Code ✨ | 🟡 ĐANG MỞ | Yêu cầu mã nguồn mở hàng đầu của cộng đồng, trích dẫn 5 Issue liên quan đã đóng | PR mang tính biểu tượng, phản ánh nhu cầu cốt lõi của cộng đồng |
| [#41518](https://github.com/anthropics/claude-code/pull/41518) | Mã nguồn mở hoàn toàn Claude Code | 🟡 ĐANG MỞ | Xác minh tính khả thi kỹ thuật, khám phá lộ trình mã nguồn mở thực tế | Trích xuất 1906 tệp TS từ bản đồ nguồn, xây dựng và chạy thành công |
| [#42807](https://github.com/anthropics/claude-code/pull/42807) | Sửa lỗi hookify stop/prompt chế độ đơn giản | 🟡 ĐANG MỞ | Ánh xạ chính xác quy tắc `pattern:` sang trường `reason`/`user_prompt` | Sửa lỗi quan trọng cho hệ thống plugin |
| [#39148](https://github.com/anthropics/claude-code/pull/39148) | Thêm plugin preserve-session | 🟡 ĐANG MỞ | Bảo tồn lịch sử hội thoại khi đổi tên/di chuyển dự án, tách biệt đường dẫn UUID | Giải quyết vấn đề quản lý hội thoại lâu dài |
| [#39043](https://github.com/anthropics/claude-code/pull/39043) / [#42604](https://github.com/anthropics/claude-code/pull/42604) | Xóa đề xuất "retro-futuristic" khỏi Frontend Design Skill | 🟡 ĐANG MỞ | Xóa đề xuất thiết kế lỗi thời | Phản hồi văn hóa cộng đồng, được thúc đẩy bởi các nhà phát triển nổi tiếng như Theo |
| [#42505](https://github.com/anthropics/claude-code/pull/42505) | Sửa lỗi tham số git không hợp lệ trong commit-commands | 🟡 ĐANG MỞ | `git checkout --branch` → `-b`, sửa bước đầu tiên của `/commit-push-pr` | Tính ổn định lệnh hàng ngày |
| [#38728](https://github.com/anthropics/claude-code/pull/38728) | Thêm plugin memory-alert | 🟡 ĐANG MỞ | Giám sát bộ nhớ tiến trình Claude Code, cảnh báo đầu cuối khi vượt ngưỡng | Giải pháp giảm thiểu cho vấn đề bộ nhớ #1421 từ cộng đồng |
| [#42665](https://github.com/anthropics/claude-code/pull/42665) | Tài liệu kho mã nguồn hoàn chỉnh | 🟡 ĐANG MỞ | Phân tích kiến trúc sâu, giải thích MCP, tổng hợp các vấn đề đã biết | Giảm rào cản đóng góp, bù đắp sự thiếu hụt tài liệu chính thức |
| [#41589](https://github.com/anthropics/claude-code/pull/41589) | Phân tích kiến trúc mã nguồn Claude Code (tiếng Trung) | 🟡 ĐANG MỞ | Phân tích kiến trúc hơn 770 dòng tiếng Trung/Anh, bao gồm QueryEngine, hệ thống công cụ, mô hình quyền | Đóng góp từ cộng đồng nhà phát triển Trung Quốc |

---

## 5. Xu hướng nhu cầu chức năng

Dựa trên phân tích 50 Issue hoạt động, các trọng tâm cộng đồng thể hiện các xu hướng sau:

| Hướng | Mức độ phổ biến | Nhu cầu điển hình |
|------|------|---------|
| **Tính minh bạch và kiểm soát phí sử dụng** | 🔥🔥🔥🔥🔥 | Hiển thị mức sử dụng thời gian thực, chi tiết tiêu thụ, cảnh báo bất thường, tùy chọn phí theo mức sử dụng |
| **Quản lý ngữ cảnh và bộ nhớ** | 🔥🔥🔥🔥 | Lưu trữ hội thoại bền vững giữa các thiết bị, trực quan hóa chính sách nén thông minh, tối ưu hóa bộ nhớ dài hạn |
| **Tích hợp sâu IDE/trình soạn thảo** | 🔥🔥🔥 | Tiện ích mở rộng VS Code chính thức, plugin JetBrains, hỗ trợ giao thức LSP |
| **Ổn định ảo hóa Cowork** | 🔥🔥🔥 | Độ tin cậy của mount VirtioFS, khả năng tương thích Hyper-V Windows, tối ưu hóa hiệu suất |
| **Hệ sinh thái plugin và mở rộng** | 🔥🔥🔥 | Thị trường plugin chính thức, hoàn thiện API Hooks, chuẩn hóa cấu hình máy chủ MCP |
| **Lựa chọn mô hình và chính sách hạ cấp** | 🔥🔥 | Chuyển đổi mô hình tự động, hỗ trợ mô hình cục bộ, kiểm soát cân bằng chi phí-chất lượng |
| **An ninh và tinh chỉnh quyền hạn** | 🔥🔥 | Mẫu quyền cấp dự án, nhật ký kiểm toán hoạt động, quét dữ liệu nhạy cảm |

---

## 6. Điểm quan tâm của Nhà phát triển

### 🔴 Điểm đau khẩn cấp

| Vấn đề | Phạm vi ảnh hưởng | Ý kiến người dùng |
|------|---------|---------|
| **"Hộp đen" phí sử dụng** | Tất cả người dùng trả phí | "Tiêu tốn 200 đô la trong 2 giờ, không có giải thích nào" — Khủng hoảng lòng tin |
| **Lỗi quay lại hàng loạt v2.1.89** | Người dùng đã cập nhật | Tin nhắn biến mất + chi phí tăng đột biến + mất khả năng lưu thư mục, nghi ngờ cùng một nguyên nhân gốc |
| **Rò rỉ bộ nhớ chưa được giải quyết** | Người dùng hội thoại dài | Chưa được giải quyết trong nhiều tháng, buộc phải khởi động lại hội thoại thường xuyên |

### 🟡 Nhu cầu tần suất cao

- **Yêu cầu mã nguồn mở**: Nhiều PR cố gắng đảo ngược/mã nguồn mở, sự kiên nhẫn của cộng đồng với mô hình phát triển đóng đang giảm dần
- **Quản lý cấu hình**: Phân lớp quản lý MCP/cài đặt (cấp người dùng/cấp dự án/cấp nhóm)
- **Khả năng quan sát**: Minh bạch hóa mức sử dụng, hiệu suất, cuộc gọi mô hình theo thời gian thực
- **Tính nhất quán đa nền tảng**: Khả năng tương đương chức năng Windows/WSL/macOS

### 🟢 Tín hiệu tích cực

- Hoạt động hệ sinh thái plugin cộng đồng (memory-alert, preserve-session, tool-mutex, v.v.)
- Sự tham gia của nhà phát triển Trung Quốc tăng lên (tài liệu phân tích kiến trúc, trích xuất mã nguồn)
- Người dùng kỹ thuật chủ động cung cấp phân tích nguyên nhân gốc (ví dụ: phân tách đa yếu tố của #41930)

---

> 📌 **Nguồn dữ liệu báo cáo hàng ngày**: Kho lưu trữ GitHub `anthropics/claude-code`, khoảng thời gian thống kê từ 02/04/2026 đến 03/04/2026 UTC.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Báo cáo Tóm tắt Cộng đồng OpenAI Codex Ngày 03/04/2026

---

## 1. Tóm tắt hôm nay

Cộng đồng Codex hôm nay tập trung vào **tối ưu hóa hiệu suất lõi Rust** và **hoàn thiện hệ sinh thái Windows**. Nhóm cốt lõi đã liên tục hợp nhất nhiều PR tối ưu hóa biên dịch, giảm thời gian xây dựng `codex-core` từ **48%-63%**; đồng thời, phạm vi kiểm thử Bazel và sửa lỗi chuỗi công cụ cho nền tảng Windows đã đạt được những tiến bộ đáng kể. Về phía cộng đồng, nhu cầu về khả năng kỹ thuật AI như chỉ mục kho mã ngữ nghĩa và phân cấp suy luận động ngày càng tăng.

---

## 2. Phát hành phiên bản

| Phiên bản | Loại | Mô tả |
|:---|:---|:---|
| `rust-v0.119.0-alpha.5` | Alpha | Phiên bản xem trước lõi Rust, đang được lặp lại liên tục |
| `rust-v0.119.0-alpha.4` | Alpha | - |
| `rust-v0.119.0-alpha.3` | Alpha | - |

> Lưu ý: Phiên bản Rust hiện tại vẫn đang trong giai đoạn lặp lại dày đặc, khuyến nghị sử dụng phiên bản CLI ổn định cho môi trường sản xuất.

---

## 3. Các Issues Nóng cộng đồng (Top 10)

| # | Tiêu đề | Loại | Mức độ phổ biến | Giá trị cốt lõi |
|---|---|---|---|---|
| [#5181](https://github.com/openai/codex/issues/5181) | **Chỉ mục và tìm kiếm kho mã ngữ nghĩa** | Nâng cao | 👍31 / 💬17 | **Cơ sở hạ tầng kỹ thuật AI**: Cung cấp khả năng tìm kiếm ngữ nghĩa cho các kho mã từ quy mô trung bình trở lên, giải quyết hạn chế hiện tại về khớp tên tệp/ký hiệu, là nút thắt cổ chai cốt lõi cho độ tin cậy của Agent |
| [#11744](https://github.com/openai/codex/issues/11744) | npm install bị lỗi trên Windows sau thay đổi dist-tag | Lỗi | 👍17 / 💬12 | **Chặn cài đặt Windows**: Người dùng doanh nghiệp/Pro thường gặp phải, ảnh hưởng đến trải nghiệm giới thiệu người dùng mới |
| [#1721](https://github.com/openai/codex/issues/1721) | Thêm tích hợp theo dõi Langfuse | Nâng cao | 👍15 / 💬10 | **Khả năng quan sát**: Nhu cầu cấp thiết cho triển khai Agent cấp doanh nghiệp, dùng để theo dõi chi phí và tối ưu hóa hiệu suất |
| [#8649](https://github.com/openai/codex/issues/8649) | "Suy luận tự động" (phân cấp động) | Nâng cao | 👍3 / 💬6 | **Tối ưu hóa chi phí**: Mô phỏng phân cấp suy luận động của ChatGPT, tự động chọn các cấp từ minimal đến xhigh |
| [#11436](https://github.com/openai/codex/issues/11436) | Nhóm Agent | Nâng cao | 👍11 / 💬5 | **Hợp tác đa Agent**: Chức năng Team của Claude Code, nhu cầu kiến trúc cho việc chia nhỏ tác vụ phức tạp |
| [#11747](https://github.com/openai/codex/issues/11747) | Lệnh dấu gạch chéo `/add-dir` giữa phiên | Nâng cao | 👍9 / 💬6 | **Tính liên tục của quy trình làm việc**: Tránh phải khởi động lại hội thoại để mở rộng thư mục làm việc, cải thiện trải nghiệm hội thoại dài |
| [#4849](https://github.com/openai/codex/issues/4849) | Hồ sơ Config.toml có thể chọn qua CLI | Nâng cao | 👍19 / 💬4 | **Quản lý cấu hình**: Vấn đề chuyển đổi cấu hình cho nhiều nhà cung cấp mô hình (LM Studio/Ollama, v.v.) |
| [#13142](https://github.com/openai/codex/issues/13142) | Nén ngữ cảnh tùy chỉnh | Nâng cao | 👍3 / 💬4 | **Quản trị ngữ cảnh MCP**: Chính sách nén tùy chỉnh để giải quyết vấn đề phình ngữ cảnh do công cụ MCP gây ra |
| [#12200](https://github.com/openai/codex/issues/12200) | Sao chép sạch cho đầu ra nhiều dòng | Nâng cao | 👍15 / 💬4 | **Trải nghiệm nhà phát triển**: Vấn đề định dạng sao chép TUI (thụt lề HEREDOC, cắt bỏ dòng mới) ảnh hưởng đến việc tái sử dụng mã |
| [#8317](https://github.com/openai/codex/issues/8317) | Lên lịch dựa trên thời gian cho lệnh/tác vụ | Nâng cao | 👍18 / 💬4 | **Mở rộng tự động hóa**: Hỗ trợ gốc cho các tình huống xử lý hàng loạt như tác vụ định kỳ, kiểm tra định kỳ |

---

## 4. Tiến độ PR Quan trọng (Top 10)

| # | Tiêu đề | Tác giả | Trạng thái | Giá trị kỹ thuật |
|---|---|---|---|---|
| [#16631](https://github.com/openai/codex/pull/16631) | core: giảm thời gian biên dịch codex-core **48%** với SessionTask bất đồng bộ gốc | bolinfest | 🔄 Đã hợp nhất | Loại bỏ macro `#[async_trait]` mở rộng, giảm chi phí đơn hình |
| [#16630](https://github.com/openai/codex/pull/16630) | core: giảm thời gian biên dịch codex-core **63%** với ToolHandler bất đồng bộ gốc | bolinfest | 🔄 Đã hợp nhất | Loại bỏ kiểu `ToolHandler`, loại bỏ việc giải quyết trait lặp lại |
| [#16627](https://github.com/openai/codex/pull/16627) | core: giảm thời gian biên dịch codex-core **57%** bằng cách loại bỏ kiểu ToolHandler | bolinfest | 🔄 Đã hợp nhất | Tối ưu hóa cùng chuỗi, thúc đẩy tăng tốc biên dịch theo từng lớp |
| [#16460](https://github.com/openai/codex/pull/16460) | Sửa lỗi phạm vi kiểm thử Rust của Windows Bazel | bolinfest | 🔄 Đang mở | Sửa lỗi chuỗi công cụ thực thi Windows, hoàn thiện tín hiệu kiểm thử `//codex-rs/...` |
| [#16632](https://github.com/openai/codex/pull/16632) | fix(core): các gợi ý phê duyệt mặc định cho các công cụ MCP tùy chỉnh | fcoury-oai | 🔄 Đang mở | Sửa lỗi lỗi quay lại #15519, duy trì hành vi an toàn của việc phê duyệt công cụ MCP mặc định |
| [#16508](https://github.com/openai/codex/pull/16508) | trích xuất trình quản lý mô hình và quyền sở hữu liên quan khỏi lõi | aibrahim-oai | 🔄 Đang mở | Giải trừ kiến trúc: đường dẫn siêu dữ liệu mô hình không còn phụ thuộc vào `core::Config`, hỗ trợ các tình huống đa người dùng |
| [#16626](https://github.com/openai/codex/pull/16626) | xóa các re-export quyền sở hữu tạm thời | aibrahim-oai | 🔄 Đang mở | Dọn dẹp các shim chuyển tiếp của #16508, hoàn thành tái cấu trúc ranh giới mô-đun |
| [#15890](https://github.com/openai/codex/pull/15890) | Sửa lỗi dọn dẹp hậu duệ lệnh shell hết thời của Windows | mle-foo | 🔄 Đang mở | Thu hồi tiến trình con bị treo của lệnh hết thời, đảm bảo thu hồi tiến trình con bị bỏ rơi bằng `taskkill /T /F` |
| [#16462](https://github.com/openai/codex/pull/16462) | fix(guardian): sửa thứ tự các sự kiện guardian | owenlin0 | 🔄 Đang mở | Sửa lỗi thời gian các sự kiện xem xét tự động của Guardian, hỗ trợ hiển thị luồng phê duyệt chính xác ở giao diện người dùng |
| [#16533](https://github.com/openai/codex/pull/16533) | refactor: chuyển mã shell và snapshot ra khỏi codex-core | bolinfest | 🔄 Đang mở | Loại bỏ 3 định nghĩa trùng lặp của `ShellType`, tiếp tục thu nhỏ dung lượng `codex-core` |

---

## 5. Xu hướng nhu cầu chức năng

Dựa trên phân tích phân cụm của 50 Issue hoạt động:

| Xu hướng | Issue đại diện | Cường độ nhu cầu |
|:---|:---|:---|
| **🔍 Hiểu mã ngữ nghĩa** | Chỉ mục ngữ nghĩa #5181, nén ngữ cảnh #13142 | ⭐⭐⭐⭐⭐ Nhu cầu cấp kiến trúc, nút thắt cổ chai độ tin cậy của Agent |
| **⚡ Kiểm soát chi phí suy luận** | Phân cấp động #8649, chính sách quay lại #11496 | ⭐⭐⭐⭐⭐ Quan tâm cốt lõi cho triển khai quy mô lớn |
| **🪟 Hoàn thiện hệ sinh thái Windows** | Sửa lỗi cài đặt #11744, cấu hình WSL #13699, WinGet #11283 | ⭐⭐⭐⭐ Rào cản gia nhập của người dùng doanh nghiệp |
| **🔧 Khả năng quan sát và quản trị** | Langfuse #1721, chính sách lưu giữ hội thoại #6015 | ⭐⭐⭐⭐ Yêu cầu tuân thủ môi trường sản xuất |
| **👥 Hợp tác đa Agent** | Nhóm Agent #11436, song song đa vũ trụ #13509 | ⭐⭐⭐⭐ Tiến hóa tự động hóa tác vụ phức tạp |
| **🎨 Đánh bóng trải nghiệm nhà phát triển** | Thêm thư mục động #11747, sao chép sạch #12200, thích ứng chủ đề #12840 | ⭐⭐⭐☆☆ Tối ưu hóa hiệu quả hội thoại dài |

---

## 6. Điểm quan tâm của Nhà phát triển

### 🔴 Điểm đau tần suất cao
1. **Trải nghiệm công dân hạng hai trên Windows**: Nhiều điểm ma sát trong cài đặt, phát hiện WSL, xử lý CRLF, đặt tên WinGet, v.v.
2. **Quản trị cửa sổ ngữ cảnh**: Sau khi công cụ MCP được giới thiệu, thiếu chính sách nén minh bạch và nhận thức về chi phí.
3. **Khả năng di chuyển cấu hình**: Thiếu cơ chế chuyển đổi giữa nhiều nhà cung cấp mô hình, chia sẻ cấu hình nhóm.

### 🟡 Nhu cầu mới nổi
- **Hội thoại từ xa/di động**: Việc phơi bày app-server qua truyền mạng #11166 đã đóng, cho thấy hướng này được cơ quan chức năng chấp nhận.
- **Kỹ thuật hóa Harness**: Quan điểm tường thuật ngữ nghĩa #13544 phản ánh sự tiến hóa của đầu ra Agent từ "có thể thực thi" sang "có thể kiểm toán".

### 🟢 Tín hiệu phản hồi chính thức
- Chuỗi PR tối ưu hóa biên dịch cho thấy đội ngũ lõi Rust tập trung vào **hiệu quả kỹ thuật**.
- Việc sửa lỗi liên tục cho chính sách phê duyệt công cụ MCP (#16632/#16043) cho thấy sự củng cố nguyên tắc **mặc định an toàn**.

---

*Báo cáo hàng ngày dựa trên dữ liệu công khai của GitHub, chỉ mang tính tham khảo. Các quyết định quan trọng phải dựa trên Ghi chú phát hành chính thức.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Báo cáo Tóm tắt Cộng đồng Gemini CLI Ngày 03/04/2026

---

## Tóm tắt hôm nay

Cộng đồng hôm nay tập trung vào hai chủ đề chính: **ổn định hiển thị UI** và **khả năng tương thích nền tảng Windows**. Nhóm cốt lõi đang khắc phục vấn đề nhấp nháy giao diện người dùng lâu dài bằng cách giới thiệu chế độ hiển thị `TerminalBuffer`, đồng thời khẩn cấp sửa lỗi sự cố ghi tệp trong môi trường hộp cát Windows. Việc tối ưu hóa sâu về quản lý bộ nhớ và kiến trúc Agent cũng đang được tiến hành.

---

## Phát hành phiên bản

### v0.37.0-preview.1
- **Loại**: Phiên bản vá lỗi
- **Thay đổi cốt lõi**: Cherry-pick bản vá sửa lỗi `64c928f` vào nhánh `v0.37.0-preview.0`
- **Người phát hành**: @gemini-cli-robot (tự động hóa)
- [Xem nhật ký thay đổi đầy đủ](https://github.com/google-gemini/gemini-cli/releases/tag/v0.37.0-preview.1)

### v0.36.0-nightly.20260402.13ccc1645
- **Loại**: Bản dựng đêm
- **Sửa lỗi cốt lõi**:
  - Sự cố ghi đè cấu hình công cụ Subagent có hiệu lực thời gian thực ([#23161](https://github.com/google-gemini/gemini-cli/pull/23161))
  - Sửa lỗi nhấp nháy ranh giới danh sách `BaseSelectionList` (bởi @jackwotherspoon)

---

## Các Issues Nóng cộng đồng (Top 10)

| # | Tiêu đề | Trạng thái | Mức độ quan trọng | Động thái cộng đồng |
|---|------|--------|--------|----------|
| [#24557](https://github.com/google-gemini/gemini-cli/issues/24557) | Dán nội dung lớn bằng CMD+V trên Mac kích hoạt nhiều lần gửi tự động | 🔥 Mới | **P0** | 7 bình luận, người dùng iTerm gặp phải thường xuyên, có thể cùng nguyên nhân với lỗi ký tự lạ SSH [#24202](https://github.com/google-gemini/gemini-cli/issues/24202) |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Đánh giá tác động đọc/tìm kiếm tệp nhận biết AST | Tiếp tục theo dõi | **Cấp kiến trúc** | 4 bình luận, EPIC của nhóm cốt lõi, nhằm giảm lãng phí token và ranh giới đọc sai |
| [#24509](https://github.com/google-gemini/gemini-cli/issues/24509) | "Nén đầu ra công cụ" được bật theo mặc định | Mới | **P1** | 0 bình luận nhưng có ý nghĩa chiến lược lớn, sẽ thay đổi hoàn toàn phong cách trực quan mặc định |
| [#24546](https://github.com/google-gemini/gemini-cli/issues/24546) | Hàm hỗ trợ phát hiện hội SSH | Mới | **Công cụ chẩn đoán** | 0 bình luận, cung cấp cơ sở để điều tra các vấn đề môi trường đầu cuối như [#24202](https://github.com/google-gemini/gemini-cli/issues/24202) |
| [#24507](https://github.com/google-gemini/gemini-cli/issues/24507) | Theo dõi tăng cường cho Nén đầu ra công cụ | Mới | **P1** | 0 bình luận, triển khai hỗ trợ cho [#24509](https://github.com/google-gemini/gemini-cli/issues/24509) |
| [#22863](https://github.com/google-gemini/gemini-cli/issues/22863) | Agent thường xuyên sử dụng đối tượng sao chép không an toàn | Tiếp tục | **Chất lượng mã** | 2 bình luận, phản ánh vấn đề an toàn kiểu TypeScript của mã được tạo ra |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Agent bỏ qua ghi đè cấu hình settings.json | Tiếp tục | **P2** | 2 bình luận, `maxTurns` và các cấu hình quan trọng khác không có hiệu lực ảnh hưởng đến việc sử dụng sản xuất |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | MAX_TURNS của Subagent bị báo cáo nhầm là GOAL thành công do gián đoạn | Tiếp tục | **P1** | 1 bình luận, 2 👍, lỗi ẩn gây báo cáo sai trạng thái hoàn thành tác vụ |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | Định tuyến bộ nhớ: Tách biệt toàn cục và cấp dự án | Tiếp tục | **P1** | 1 bình luận, 1 👍, quyết định thiết kế cốt lõi cho kiến trúc bộ nhớ dài hạn |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Agent nên ngăn chặn/cảnh báo các thao tác phá hoại | Tiếp tục | **An toàn** | 1 bình luận, 1 👍, cơ chế bảo vệ cho các lệnh có rủi ro cao như `git reset --force` |

---

## 4. Tiến độ PR Quan trọng (Top 10)

| # | Tiêu đề | Tác giả | Trạng thái | Điểm kỹ thuật |
|---|------|------|------|----------|
| [#24512](https://github.com/google-gemini/gemini-cli/pull/24512) | feat(ui): bật chế độ TerminalBuffer để giải quyết hiện tượng nhấp nháy | @jacob314 | 🆕 Cập nhật | **Thay đổi kiến trúc cốt lõi**: Thay thế alternate buffer truyền thống, hiển thị tĩnh loại bỏ hiện tượng nhấp nháy, đầu tư kỹ thuật quan trọng nhất hôm nay |
| [#24571](https://github.com/google-gemini/gemini-cli/pull/24571) | fix(core): xóa bản dịch PowerShell bị hỏng, sửa lỗi ghi __write hộp cát Windows | @scidomino | 🆕 Cập nhật | **Sửa lỗi khẩn cấp P0**: Vấn đề tệp bị làm trống trên Windows của công cụ `replace`, loại bỏ lớp PS thừa và gọi trực tiếp trợ lý C# |
| [#24275](https://github.com/google-gemini/gemini-cli/pull/24275) | feat(core): Loại giao diện giao thức Agent và cờ thử nghiệm | @mbleigh | Cập nhật | Thêm loại `_meta.legacyState` cho `ToolRequest/ToolResponse`, hỗ trợ giao thức UI thế hệ tiếp theo |
| [#24577](https://github.com/google-gemini/gemini-cli/pull/24577) | fix(core): Khớp phê duyệt hộp cát với mở rộng chủ động | @galz10 | Mới | Quyền truy cập bộ nhớ đệm mạng/toàn cục như npm được "cho phép trong phiên này" giờ đây sẽ được lưu trữ chính xác |
| [#24582](https://github.com/google-gemini/gemini-cli/pull/24582) | feat(cli): Nhãn trạng thái hộp cát tối giản | @galz10 | Mới | Tái cấu trúc bộ chỉ thị trạng thái chân trang: Docker/Podman/Seatbelt thống nhất thành "current process", cấp công cụ thay đổi thành "all tools" |
| [#24376](https://github.com/google-gemini/gemini-cli/pull/24376) | feat(cli): Tăng cường giao diện xác nhận công cụ và bố cục lựa chọn | @galz10 | Cập nhật | Hiển thị tham số `description` của công cụ Shell, ranh giới trực quan rõ ràng hơn giữa lệnh và diff |
| [#24578](https://github.com/google-gemini/gemini-cli/pull/24578) | Sửa lỗi crash từ kiểu không an toàn | @gundermanc | Mới | Sửa lỗi crash `data.slice is not a function`, tăng cường bảo vệ kiểu |
| [#24476](https://github.com/google-gemini/gemini-cli/pull/24476) | test: Sửa lỗi thực thi CI Windows và phơi bày lỗi nền tảng | @ehedlund | Cập nhật | Sửa lỗi mở rộng tham số PowerShell, đảm bảo mã thoát không bằng không của `npm` được truyền đi chính xác |
| [#23956](https://github.com/google-gemini/gemini-cli/pull/23956) | fix(ui): Tự động hoàn thành hỗ trợ thực thi tức thì và mở rộng lệnh con | @keithguerin | Cập nhật | Thay thế giải pháp UX của #20136, giải quyết vấn đề đề xuất lệnh bị "treo" |
| [#24575](https://github.com/google-gemini/gemini-cli/pull/24575) | docs: Làm rõ quy trình điều phối phát hành | @scidomino | Mới | Cập nhật tài liệu: nhấn mạnh sự phối hợp với người quản lý phát hành, xóa cảnh báo kiểm thử Windows |

---

## Xu hướng nhu cầu chức năng

Dựa trên phân tích phân cụm của 50 Issue hoạt động, bốn hướng chính được cộng đồng quan tâm:

| Hướng | Issue đại diện | Chỉ số mức độ phổ biến |
|---------|-----------|---------|
| **Ổn định hiển thị đầu cuối** | #24512, #24557, #24202, #24470, #24438 | 🔥🔥🔥 Cao nhất |
| **Kiến trúc bộ nhớ/ngữ cảnh** | #22819, #22809, #22895, #24070 | 🔥🔥🔥 Cao nhất |
| **An toàn và kiểm soát Agent** | #22672, #23582, #22323, #22267 | 🔥🔥 Cao |
| **Trải nghiệm nền tảng Windows** | #24571, #24476, #24546, #24202 | 🔥🔥 Cao |
| **Trí tuệ mã/AST** | #22745, #22746, #22863 | 🔥 Trung bình cao |
| **Quy mô mô hình và công cụ** | #24246 (>128 công cụ lỗi 400), #23823 (chuyển đổi flash lite 3.1) | 🔥 Trung bình cao |

> **Quan sát**: Việc bật "Nén đầu ra công cụ" theo mặc định (#24509) đánh dấu sự dịch chuyển triết lý sản phẩm - từ "hoàn thiện thông tin" sang "mật độ thông tin", phù hợp với xu hướng tối giản của các đối thủ cạnh tranh như Cursor.

---

## Điểm quan tâm của Nhà phát triển

### 🔴 Điểm đau tần suất cao

1. **Ma trận tương thích môi trường đầu cuối phức tạp**
   - Dán bất thường iTerm + Mac (#24557)
   - Làm hỏng hiển thị hội SSH (#24202 → #24546)
   - Khác biệt hành vi PowerShell/CMD Windows (#24571, #24476)
   - **Nguyên nhân gốc rễ**: Thiếu trừu tượng hóa thống nhất để xử lý chuỗi điều khiển cấp thấp

2. **Tính minh bạch trạng thái Agent không rõ ràng**
   - MAX_TURNS bị báo cáo sai là hoàn thành (#22323)
   - Subagent không nhận biết chế độ phê duyệt (#23582)
   - Ghi đè cấu hình Agent trình duyệt không có hiệu lực (#22267)

3. **Phân mảnh quản lý quyền hộp cát**
   - Phê duyệt không đáng tin cậy (#24577)
   - Chỉ báo trạng thái lộn xộn (đang cố gắng giải quyết #24582)

### 🟡 Tín hiệu nợ kiến trúc

- **Chế độ sao chép không an toàn** (#22863): Hệ thống kiểu TypeScript không ngăn chặn được đối tượng proxy được triển khai một phần.
- **Giới hạn số lượng công cụ cứng** (#24246): >128 công cụ gây ra lỗi 400, cần có chính sách lựa chọn công cụ thông minh.
- **Suy giảm chất lượng nén** (#23556): Nén quá mức gây mất ngữ cảnh.

### 🟢 Tín hiệu tích cực

- **TerminalBuffer** đầu tư cho thấy nhóm sẵn sàng thực hiện tái cấu trúc cấp kiến trúc để giải quyết vấn đề gốc rễ.
- Khám phá **chuỗi công cụ nhận biết AST** cho thấy sự theo đuổi sâu sắc về hiểu mã trong dài hạn.
- **Thiết kế định tuyến bộ nhớ** (#22819) thể hiện mô hình hóa rõ ràng về ngữ cảnh người dùng-dự án-hội thoại ba cấp.

---

*Báo cáo hàng ngày dựa trên dữ liệu công khai của google-gemini/gemini-cli | Thời gian dữ liệu kết thúc: 03/04/2026*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# Báo cáo Tóm tắt Cộng đồng GitHub Copilot CLI Ngày 03/04/2026

---

## 1. Tóm tắt hôm nay

Copilot CLI hôm nay đã phát hành phiên bản chính thức **v1.0.16**, tập trung vào sửa lỗi ổn định cho chuỗi công cụ MCP, bao gồm kết nối lại xác thực, trực quan hóa lệnh gọi công cụ, v.v. Cộng đồng tiếp tục tập trung vào **lỗi liên tục HTTP/2** gây ra lỗi thử lại liên tục, và vấn đề **lỗi 404 chính sách MCP** chặn nhầm người dùng cá nhân, vấn đề sau đã có thêm nhiều Issue liên quan hôm nay.

---

## 2. Phát hành phiên bản

### v1.0.16 (02/04/2026) | [Liên kết phát hành](https://github.com/github/copilot-cli/releases/tag/v1.0.16)

| Mục cập nhật | Mô tả |
|--------|------|
| Lọc thẻ công cụ SQL | Khi công cụ `sql` bị loại trừ bởi `excludedTools` hoặc `availableTools`, thẻ prompt SQL sẽ không hiển thị |
| Trực quan hóa lệnh gọi công cụ MCP | Hiển thị tên công cụ và tóm tắt tham số trên dòng thời gian |
| Sửa lỗi kết nối lại xác thực MCP | Khi thư mục làm việc thay đổi, máy chủ MCP có thể kết nối lại chính xác với xác thực hợp lệ |
| Thêm yêu cầu quyền | Thêm chức năng `PermissionRequest` |

> Phiên bản xem trước **v1.0.16-1** cũng có sẵn đồng thời.

---

## 3. Các Issues Nóng cộng đồng (theo mức độ ưu tiên)

### 🔴 Khủng hoảng ổn định: Lỗi liên tục HTTP/2 GOAWAY
**#2421** [Điều kiện đua HTTP/2 GOAWAY gây ra lỗi thử lại liên tục](https://github.com/github/copilot-cli/issues/2421)
- **Vấn đề cốt lõi**: Nhóm kết nối HTTP/2 của undici có điều kiện đua khi xử lý khung GOAWAY của máy chủ, gây ra các yêu cầu đang được gửi đi, trạng thái kết nối không nhất quán, dẫn đến thử lại vô hạn và lãng phí yêu cầu cao cấp "vô hình".
- **Phản ứng cộng đồng**: Đã tích hợp 5 Issue liên quan #1743, #1754, #2050, #2101, #2189, 8 👍, yêu cầu khẩn cấp sửa lỗi cấp kiến trúc từ cơ quan chức năng.

### 🔴 Chặn nhầm người dùng cá nhân bởi chính sách MCP
**#2479** [Không lấy được chính sách đăng ký MCP cho người dùng cá nhân (404)](https://github.com/github/copilot-cli/issues/2479)
- **Vấn đề cốt lõi**: Người dùng cá nhân Copilot Pro bật MCP, nhưng yêu cầu chính sách trả về 404, dẫn đến tất cả các máy chủ MCP tùy chỉnh bị chặn nhầm.
- **Phản ứng cộng đồng**: 10 👍, hôm nay đã thêm Issue liên quan #2481, phạm vi ảnh hưởng rộng.

**#2481** [Các máy chủ MCP tùy chỉnh bị chặn bởi chính sách khi yêu cầu chính sách đăng ký MCP trả về 404](https://github.com/github/copilot-cli/issues/2481)
- Vấn đề tương tự được báo cáo mới, xác nhận không phải là vấn đề dành riêng cho tài khoản tổ chức.

### 🟡 Tranh cãi hỗ trợ mô hình
**#2434** [Khôi phục hỗ trợ cho Gemini Pro](https://github.com/github/copilot-cli/issues/2434)
- **Vấn đề cốt lõi**: v1.0.14 đã gỡ bỏ `gemini-3-pro-preview`, người dùng chuyển sang Claude Code/Codex.
- **Phản ứng cộng đồng**: 5 👍, phản ánh sự đa dạng mô hình là năng lực cạnh tranh cốt lõi của CLI.

### 🟡 Tính ổn định API và giới hạn tốc độ
**#2101** [Yêu cầu thất bại do lỗi API tạm thời](https://github.com/github/copilot-cli/issues/2101)
- **Vấn đề cốt lõi**: Lỗi API tạm thời kích hoạt thử lại thường xuyên, cuối cùng dẫn đến giới hạn tốc độ ("Vui lòng thử lại sau 1 phút").
- **Phản ứng cộng đồng**: 16 bình luận, 12 👍, là một trong những Issue nóng nhất gần đây.

**#1274** [CLI liên tục nhận lỗi 400 cho thân yêu cầu không hợp lệ](https://github.com/github/copilot-cli/issues/1274)
- **Vấn đề cốt lõi**: 95% yêu cầu trả về 400 khi xem trước diff mã, nghi ngờ vấn đề xác thực phía máy chủ hoặc xây dựng yêu cầu của CLI.
- **Phản ứng cộng đồng**: 14 bình luận, ảnh hưởng đến quy trình làm việc cốt lõi.

### 🟡 Suy giảm trải nghiệm đầu cuối
**#2082** [ctrl+shift+c không còn sao chép vào bảng nhớ tạm trên Linux](https://github.com/github/copilot-cli/issues/2082)
- **Vấn đề cốt lõi**: v1.0.4+ làm hỏng phím tắt sao chép đầu cuối tiêu chuẩn của Linux, giải pháp mới (ctrl+c/nhấp chuột phải) xung đột với thói quen đầu cuối.
- **Phản ứng cộng đồng**: 13 bình luận, người dùng Ubuntu 24.04 phản hồi tập trung.

**#2334** [Vui lòng mang lại no-alt-screen](https://github.com/github/copilot-cli/issues/2334)
- **Vấn đề cốt lõi**: Chế độ alt-screen gây ra không có thanh cuộn, không thể tìm kiếm lịch sử, không thể xem mã nguồn trong khi xem lịch sử.
- **Phản ứng cộng đồng**: 14 👍, yêu cầu chức năng có nhiều lượt thích nhất hôm nay.

### 🟡 Hiển thị trạng thái UI bất thường
**#2462** / **#2459** [Chỉ báo môi trường đang tải vẫn hiển thị](https://github.com/github/copilot-cli/issues/2462)
- **Vấn đề cốt lõi**: Sau v1.0.15, vòng quay "Loading environment" vô hạn, trong khi chức năng thực tế đã sẵn sàng.
- **Phản ứng cộng đồng**: Mỗi Issue 6 👍, ảnh hưởng đến kỳ vọng tâm lý của người dùng.

### 🟡 Khả năng tương thích đa nền tảng
**#1257** [Hỗ trợ Termux/Android](https://github.com/github/copilot-cli/issues/1257)
- **Vấn đề cốt lõi**: Không tải được mô-đun gốc `pty.node` trên thiết bị di động.
- **Phản ứng cộng đồng**: 7 👍, phản ánh nhu cầu từ các tình huống phát triển di động.

---

## 4. Tiến độ PR Quan trọng

> **Không có cập nhật PR mới nào hôm nay** (0 trong vòng 24 giờ qua)

---

## 5. Xu hướng nhu cầu chức năng

| Xu hướng | Issue đại diện | Cường độ nhu cầu cộng đồng |
|:---|:---|:---|
| **Ổn định lớp kết nối** | #2421, #2101, #2050, #1274 | ⭐⭐⭐⭐⭐ Điểm đau cốt lõi, ảnh hưởng đến khả năng sử dụng cơ bản