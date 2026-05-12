# Báo cáo Tình hình Hàng ngày về Cộng đồng Công cụ AI CLI 2026-05-12

> Thời gian tạo: 2026-05-12 00:22 UTC | Bao phủ công cụ: 9

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

## So sánh Ngang

# Báo cáo Phân tích So sánh Ngang Hệ sinh thái Công cụ AI CLI | 2026-05-12

---

## 1. Toàn cảnh Hệ sinh thái

Hiện tại, các công cụ AI CLI đang trong giai đoạn chuyển đổi quan trọng từ "trợ lý mã hóa đơn hội thoại" sang "nền tảng điều phối đa tác nhân (Agent)". Các lệnh `/goal` và Agent View của Claude Code, chế độ Daemon của Qwen Code, hệ thống sub-agent của Gemini CLI đều chứng minh xu hướng này. Đồng thời, **nợ ổn định cấp sản xuất bùng phát tập trung** — sự phân biệt đối xử mang tính hệ thống trên nền tảng Windows, lỗ hổng chi phí token, nén ngữ cảnh không đáng tin cậy, lỗi quản lý trạng thái máy đầu cuối trở thành nút thắt cổ chai chung của toàn ngành. Nhu cầu cộng đồng rõ ràng chuyển dịch từ "sự phong phú về chức năng" sang "sự trưởng thành về kỹ thuật", với hộp cát an toàn, tính minh bạch về thanh toán và độ tin cậy của hội thoại dài trở thành ngưỡng cửa cốt lõi cho việc áp dụng của doanh nghiệp.

---

## 2. So sánh Hoạt động của Từng Công cụ

| Công cụ | Issues mới hôm nay | PRs mới hôm nay | Phát hành phiên bản | Đặc điểm đóng góp cộng đồng |
|:---|:---|:---|:---|:---|
| **Claude Code** | ~15 thảo luận sôi nổi | **1** (do chính thức dẫn dắt) | v2.1.139 (Agent View + `/goal`) | Đóng mã nguồn chính thức, cực kỳ ít PR, dựa vào phản hồi Issue để điều chỉnh |
| **OpenAI Codex** | ~10 ( #14593 đạt 574 bình luận, lịch sử) | **10** (bao gồm `--not-so-yolo`) | rust-v0.131.0-alpha.6 (bản phát hành trước) | Thúc đẩy mạnh mẽ về phía kỹ thuật, mức độ tham gia cộng đồng trung bình |
| **Gemini CLI** | ~8 | **10** (bao gồm tính toán token thích ứng, hiển thị lần thử lại) | v0.42.0-nightly | Do chính thức Google dẫn dắt, chuyển đổi sâu kiến trúc Effect |
| **GitHub Copilot CLI** | ~10 | **1** (bảo trì tài liệu) | v1.0.45 (`/autopilot`) | **Cực kỳ ít PR**, đóng mã nguồn hạn chế đóng góp cộng đồng |
| **Kimi Code CLI** | **9** | **10** (đóng góp cộng đồng sôi nổi) | v1.42.0 (sửa lỗi) | **Đặc điểm do cộng đồng dẫn dắt rõ ràng nhất**, phản hồi PR nhanh chóng |
| **OpenCode** | ~12 | **10** (kitlangton đơn ngày 6+ PR) | v1.14.48/v1.14.47 song song | Giai đoạn tái cấu trúc kiến trúc, di chuyển mạnh mẽ hệ sinh thái Effect |
| **Pi** | ~10 (lượng lớn `closed-because-refactor`) | **8** (bao gồm mở rộng bộ nhớ gbrain) | Tiếp tục phát hành trong giai đoạn tái cấu trúc | Kết thúc giai đoạn tái cấu trúc, API mở rộng trưởng thành |
| **Qwen Code** | **10** (bao gồm 124 bình luận về vấn đề chính sách) | **10** (PR quan trọng cho Daemon Stage 1) | v0.15.10-nightly | **Khủng hoảng kiến trúc và lặp lại nhanh cùng tồn tại** |
| **DeepSeek TUI** | ~12 | **49** (giai đoạn bùng nổ) | v0.8.29 sửa lỗi khẩn cấp | **Số lượng PR cao nhất toàn ngành**, bùng nổ đóng góp cộng đồng |

> **Thứ tự hoạt động** (Tổng hợp Issues + PRs + độ sâu tương tác): DeepSeek TUI > Kimi Code CLI ≈ Qwen Code > OpenCode ≈ Gemini CLI > OpenAI Codex > Pi > Claude Code > GitHub Copilot CLI

---

## 3. Hướng chức năng được Quan tâm Chung

| Hướng chức năng | Công cụ liên quan | Yêu cầu cụ thể | Mức độ khẩn cấp |
|:---|:---|:---|:---:|
| **🔒 Hộp cát an toàn và kiểm soát quyền truy cập** | Claude Code #18653, OpenCode #2242, Codex #22231 `--not-so-yolo`, Gemini CLI #22093 | Chuyển từ nhị phân "mở hoàn toàn/đóng hoàn toàn" sang quyền truy cập phân cấp; kiểm toán doanh nghiệp, ngăn chặn rò rỉ dữ liệu, ranh giới thực thi Agent | 🔴 Rất cao |
| **💰 Kiểm soát chi phí Token và minh bạch thanh toán** | Codex #14593 (574 bình luận), Claude Code #47098/#58188, DeepSeek TUI #743/#1440, Kimi #2232 | Khả năng quan sát tỷ lệ truy cập bộ nhớ đệm, lỗi thanh toán khi không hoạt động, tính minh bạch của chiến lược nén, bảng điều khiển sử dụng theo thời gian thực | 🔴 Rất cao |
| **🖥️ Nền tảng Windows là công dân hạng nhất** | Claude Code #47104/#56860, Codex #13993/#15777, Kimi #2202/#2178, Copilot CLI #1148/#3240, Pi #4399 | Gói cài đặt độc lập, ổn định hộp cát, xử lý đường dẫn, tương thích đầu cuối, quản lý quyền truy cập | 🔴 Rất cao |
| **🧠 Độ tin cậy hội thoại dài/ngữ cảnh** | Qwen Code #4046/#4049, Codex #14860/#18693, Claude Code #58115, Gemini CLI #22323 | Nén và tua lại không xung đột, hiệu suất lịch sử lớn không sụp đổ, bảo vệ tràn token, duy trì liên tục giữa các hội thoại | 🟡 Cao |
| **🔌 Quản trị hệ sinh thái MCP** | Copilot CLI #2630/#2779, Codex #20883/#21624, Claude Code #41156, OpenCode #11391 | Quản lý vòng đời tiến trình, làm mới token tự động, truyền kết nối agent con, cô lập phạm vi luồng | 🟡 Cao |
| **⏱️ Khả năng kiểm soát thời gian chờ và tác vụ** | Kimi #2232/#2224, Claude Code `/goal`, Qwen Code #4055 | Thời gian chờ có thể điều chỉnh cho tác vụ nền, trả kết quả Agent, cạm bẫy thời gian chờ lạc quan, nhận dạng thông minh lệnh dài | 🟡 Cao |

---

## 4. Phân tích Định vị Khác biệt

| Công cụ | Tập trung chức năng cốt lõi | Người dùng mục tiêu | Đặc điểm lộ trình kỹ thuật |
|:---|:---|:---|:---|
| **Claude Code** | **Điều phối và thực thi tự động Agent** (Agent View, `/goal`) | Nhóm doanh nghiệp, nhà phát triển song song đa tác vụ | Sản phẩm thương mại đóng mã nguồn, gắn bó sâu với mô hình Anthropic, kiến trúc tiến hóa theo hướng "Agent là cơ sở hạ tầng" |
| **OpenAI Codex** | **Độ ổn định TUI và bảo mật hộp cát** (`--not-so-yolo`, đóng băng sử dụng) | Nhà phát triển ưu tiên đám mây, người dùng hệ sinh thái OpenAI | Đang tái cấu trúc lõi Rust, tối ưu hóa kiến trúc MCP, áp lực minh bạch thanh toán |
| **Gemini CLI** | **Hệ thống Sub-Agent và định tuyến mô hình** (Chế độ Auto động) | Người dùng Google Cloud, nhu cầu chính sách đa mô hình | Chuyển đổi sâu kiến trúc hàm Effect, hệ sinh thái TypeScript, ưu tiên cơ sở hạ tầng đánh giá |
| **GitHub Copilot CLI** | **Tích hợp hệ sinh thái IDE và cổng đa mô hình** (Claude/GPT/DeepSeek) | Người dùng nặng hệ sinh thái GitHub, người đăng ký doanh nghiệp | Đóng mã nguồn, mở rộng hệ sinh thái Copilot, **danh tiếng ổn định bị tổn hại**, khủng hoảng định vị khác biệt |
| **Kimi Code CLI** | **Triển khai kết hợp và tương thích giao thức** (Tương thích vLLM/Ollama) | Nhà phát triển Trung Quốc, nhu cầu triển khai riêng | Phản hồi nhanh do cộng đồng dẫn dắt, lớp tương thích OpenAI là trọng tâm, nợ kỹ thuật Windows nổi bật |
| **OpenCode** | **Kiến trúc mở rộng và trải nghiệm đa nền tảng** (Nguyên bản Effect, thiết bị di động) | Nhà phát triển mở rộng, người dùng đa nền tảng | Hệ sinh thái Effect thuần túy, loại bỏ hoàn toàn Zod, thử nghiệm bỏ qua SDK AI, kiến trúc cấp tiến |
| **Pi** | **Mô hình cục bộ và ngữ cảnh dài** (llama.cpp/LM Studio/MLX) | Người dùng nhạy cảm về quyền riêng tư, người yêu thích suy luận cục bộ | Runtime Node, triển khai tiêu chuẩn XDG, mở rộng cấp tổ chức Agent Company |
| **Qwen Code** | **Triển khai máy chủ và khả năng tự khởi động** (`qwen serve` Daemon) | IT doanh nghiệp, người dùng hệ sinh thái mô hình Qwen | Khủng hoảng kiến trúc hiển thị (bị Google GenAI kiểu hệ thống ràng buộc), đột phá chế độ Daemon |
| **DeepSeek TUI** | **Tối ưu hóa Token cực đoan và tương thích đầu cuối** (khởi động bộ nhớ đệm, theo dõi chính xác tiktoken) | Doanh nghiệp nhạy cảm về chi phí, người dùng nặng đầu cuối | **Giai đoạn bùng nổ đóng góp cộng đồng**, phân phối npm, khả năng thị giác mới chớm nở, quốc tế hóa tăng tốc |

---

## 5. Mức độ Phổ biến và Sự Trưởng thành của Cộng đồng

### 🔥 Hoạt động cao + Lặp lại nhanh

| Công cụ | Tín hiệu quan trọng | Đánh giá mức độ trưởng thành |
|:---|:---|:---|
| **DeepSeek TUI** | 49 PRs/ngày, 20 PR cộng đồng được hợp nhất trong một phiên bản, bản địa hóa tiếng Tây Ban Nha | **Giai đoạn phát triển** : Chức năng mở rộng nhanh, nợ ổn định đầu cuối tích lũy đồng bộ |
| **Kimi Code CLI** | 9 Issues + 10 PRs, PR cộng đồng "một mũi tên trúng hai đích" (#2237 đồng thời giải quyết các công cụ trống + tham số tùy chỉnh) | **Giai đoạn phát triển** : Tốc độ phản hồi cực nhanh, Windows và tương thích cục bộ là nút thắt cổ chai chính |
| **Qwen Code** | 124 bình luận về vấn đề chính sách, Đánh giá kiến trúc #4063 dẫn đến 14 vấn đề cấu trúc | **Giai đoạn chuyển đổi đầy khó khăn** : Đột phá Daemon và khủng hoảng hệ thống kiểu cùng tồn tại |
| **OpenCode** | kitlangton đơn ngày 6+ PR thúc đẩy di chuyển Effect, tối ưu hóa hiệu suất ảo hóa | **Giai đoạn tái cấu trúc kiến trúc** : Vùng nước sâu làm sạch nợ kỹ thuật, hệ sinh thái plugin cần chú ý đến khả năng tương thích |

### 🟡 Hoạt động trung bình + Tiến hóa ổn định

| Công cụ | Tín hiệu quan trọng | Đánh giá mức độ trưởng thành |
|:---|:---|:---|
| **OpenAI Codex** | Bài đăng hot lịch sử #14593, 10 PRs sửa lỗi kỹ thuật dày đặc | **Giai đoạn nền tảng** : Chức năng cốt lõi ổn định, nhược điểm minh bạch thanh toán và Windows hạn chế tăng trưởng |
| **Gemini CLI** | Lỗi tin cậy của Sub-Agent (#22323 báo cáo thành công sai sự thật), lỗi im lặng | **Giai đoạn hoàn thiện** : Chuyển từ mở rộng chức năng sang xây dựng lòng tin "Agent nói sự thật" |
| **Pi** | Lượng lớn `closed-because-refactor`, mở rộng bộ nhớ gbrain | **Giai đoạn kết thúc tái cấu trúc** : API mở rộng trưởng thành, các trường hợp biên của mô hình cục bộ cần được hoàn thiện |

### 🔵 Hoạt động thấp + Chính thức dẫn dắt

| Công cụ | Tín hiệu quan trọng | Đánh giá mức độ trưởng thành |
|:---|:---|:---|
| **Claude Code** | Chỉ 1 PR/ngày, dựa vào Issue, phát hành kiến trúc Agent View | **Giai đoạn trưởng thành** : Mức độ sản phẩm hóa cao, cơ chế tham gia cộng đồng yếu, kênh phản hồi điểm yếu của doanh nghiệp không thông suốt |
| **GitHub Copilot CLI** | Chỉ 1 PR (tài liệu), kêu gọi mã nguồn mở #3241 | **Giai đoạn đóng** : Phạm vi chức năng mở rộng mất kết nối với danh tiếng ổn định, áp lực mã nguồn mở tích lũy |

---

## 6. Tín hiệu Xu hướng Đáng chú ý

| Tín hiệu xu hướng | Hỗ trợ dữ liệu | Giá trị tham khảo cho nhà phát triển |
|:---|:---|:---|
| **"Điều phối Agent" trở thành chiến trường mới** | Claude Code Agent View, `/goal`; Gemini CLI sub-agent; Qwen Code Daemon; Pi Agent Company | Kỹ năng công cụ đơn lẻ không đủ để hỗ trợ giao hàng phức tạp, **khả năng thiết kế khung hợp tác đa Agent** trở thành khóa học bắt buộc mới cho kiến trúc sư |
| **"Xây dựng lòng tin" thay thế "khoe khoang chức năng"** | Gemini #22323 báo cáo sai sự thật, #26894 báo cáo đầu ra git sai sự thật; Claude Code #58177 bỏ qua tiêu chuẩn quyết định | Triển khai môi trường sản xuất cần ưu tiên xác minh **tính minh bạch của trạng thái Agent** (đã hoàn thành thực sự, thành công thực sự, đã sử dụng ngữ cảnh thực sự) |
| **"Tương thích mô hình cục bộ" từ biên thành chính thống** | Kimi #2233/#2234 tương thích vLLM; Pi #4408 llama.cpp ghi tệp lớn; Qwen Code #3878 contextWindowSize | Nhu cầu triển khai đám mây kết hợp/riêng hóa tăng, **sự khác biệt về tính nghiêm ngặt của lớp tương thích OpenAI** (xử lý công cụ trống, truyền tham số lấy mẫu) là cạm bẫy tích hợp quan trọng |
| **"Máy trạng thái đầu cuối" trở thành rào cản kỹ thuật tiềm ẩn** | DeepSeek TUI nhấp nháy lan tràn trên 6+ đầu cuối; OpenCode ESC ngắt kết nối/rò rỉ chuột/lệch màu; Pi #4426 đầu cuối thoát bất thường chết giả | Lựa chọn khung TUI (ink, opentui, tự phát triển) ảnh hưởng trực tiếp đến độ tin cậy đa nền tảng, **cơ chế khôi phục đầu cuối** là năng lực kỹ thuật cơ bản của công cụ CLI |
| **"Mô hình đóng góp cộng đồng" phân hóa vị thế sinh thái** | DeepSeek TUI 49 PRs (hệ sinh thái npm mở); Kimi 10 PRs (phản hồi nhanh); Copilot CLI 1 PR (hạn chế đóng mã nguồn) | Mức độ mã nguồn mở tương quan với mức độ hoạt động của cộng đồng, **lựa chọn doanh nghiệp cần đánh giá khả năng phản hồi của thượng nguồn** và con đường đáp ứng nhu cầu tùy chỉnh |
| **"Khả năng quan sát thanh toán" trở thành ngưỡng cửa doanh nghiệp** | Codex #14593 574 bình luận, Claude Code #47098 lỗ hổng bộ nhớ đệm, DeepSeek TUI #743 nửa ngày 400 triệu token | Phải thiết lập **giám sát đường cơ sở tiêu thụ token** trước khi triển khai quy mô lớn, sách trắng chiến lược bộ nhớ đệm nên trở thành vật phẩm giao hàng tiêu chuẩn của nhà cung cấp |

---

> **Khuyến nghị quyết định** : Để trải nghiệm nhanh trong thời gian ngắn, hãy chú ý đến DeepSeek TUI (sức sống cộng đồng) và Kimi Code CLI (tốc độ phản hồi); Để triển khai cấp doanh nghiệp, hãy cân nhắc Claude Code (kiến trúc Agent dẫn đầu nhưng kênh phản hồi cộng đồng hạn chế) và OpenAI Codex (kỹ thuật vững chắc nhưng rủi ro thanh toán); Đầu tư kiến trúc dài hạn cần theo dõi kết quả tiến hóa của chế độ Daemon Qwen Code và thử nghiệm nguyên bản Effect của OpenCode.

---

## Báo cáo chi tiết từng công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Điểm nóng Cộng đồng Claude Code Skills

> Nguồn dữ liệu: [anthropics/skills](https://github.com/anthropics/skills)

# Báo cáo Điểm nóng Cộng đồng Claude Code Skills (2026-05-12)

---

## 1. Xếp hạng Kỹ năng Nóng (theo mức độ quan tâm của cộng đồng)

| Thứ hạng | Kỹ năng | Chức năng | Điểm nóng thảo luận | Trạng thái |
|:---|:---|:---|:---|:---|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | Kiểm soát chất lượng bố cục tài liệu do AI tạo: ngăn chặn cô độc dòng, cô độc từ, đánh số sai lệch và các vấn đề bố cục khác | Đây là **điểm yếu phổ quát** — tất cả tài liệu do Claude tạo đều bị ảnh hưởng; tác giả chỉ ra người dùng hiếm khi chủ động yêu cầu bố cục tốt, nhưng vấn đề tồn tại khách quan | 🟡 Mở |
| 2 | **[skill-quality-analyzer / skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | Meta-kỹ năng: tự động đánh giá chất lượng Kỹ năng (cấu trúc, tài liệu, bảo mật, v.v. theo 5 chiều) | Nỗi lo lắng sâu sắc của cộng đồng về **chuẩn hóa và bảo mật Kỹ năng**; thuộc về công cụ cấp cơ sở hạ tầng | 🟡 Mở |
| 3 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | Cải thiện kỹ năng thiết kế giao diện người dùng, nâng cao độ rõ ràng và khả năng thực thi của lệnh | **Phương pháp luận kỹ thuật Kỹ năng** thảo luận — làm thế nào để lệnh Kỹ năng "Claude thực sự có thể hoàn thành trong một lần trò chuyện" | 🟡 Mở |
| 4 | **[odt](https://github.com/anthropics/skills/pull/486)** | Tạo, điền, đọc và chuyển đổi sang HTML cho định dạng OpenDocument ( .odt/.ods ) | Nhu cầu **định dạng tài liệu tiêu chuẩn mã nguồn mở**, tương đương với các kỹ năng docx/pdf hiện có; nhu cầu cấp bách trong kịch bản doanh nghiệp/chính phủ | 🟡 Mở |
| 5 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | Hệ thống kiểm thử toàn diện: triết lý kiểm thử, kiểm thử đơn vị, kiểm thử thành phần React, E2E | Thiếu Kỹ năng có hệ thống về **phát triển dựa trên kiểm thử**; bao phủ mô hình Testing Trophy | 🟡 Mở |
| 6 | **[ServiceNow](https://github.com/anthropics/skills/pull/568)** | Bao phủ toàn bộ mô-đun nền tảng ServiceNow cấp doanh nghiệp (ITSM/ITOM/SecOps/FSM/SPM, v.v.) | Nhu cầu **tích hợp ERP/ITSM doanh nghiệp** bùng nổ; phạm vi bao phủ của một Kỹ năng hiếm khi rộng như vậy | 🟡 Mở |
| 7 | **[AURELION](https://github.com/anthropics/skills/pull/444)** | Khung nhận thức bốn món: mẫu tư duy có cấu trúc, chế độ cố vấn, điều phối Agent, bộ nhớ bền vững | Trừu tượng hóa cao cấp về **kiến trúc nhận thức AI**; nỗ lực hệ thống hóa quản lý kiến thức và quy trình làm việc chuyên nghiệp | 🟡 Mở |
| 8 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | Hệ thống bộ nhớ bền vững liên hội thoại, thu hồi ngữ cảnh chủ động | Cơ sở hạ tầng **lớp bộ nhớ Agent**; giải quyết hạn chế cốt lõi về trạng thái của Claude | 🟡 Mở |

---

## 2. Xu hướng Nhu cầu Cộng đồng (tổng hợp từ Issues)

| Hướng xu hướng | Issue đại diện | Nhu cầu cốt lõi |
|:---|:---|:---|
| **🔐 Bảo mật và Ranh giới Tin cậy** | [#492](https://github.com/anthropics/skills/issues/492) | Kỹ năng cộng đồng giả mạo không gian tên chính thức `anthropic/`, yêu cầu phân biệt rõ ràng ranh giới tin cậy giữa Kỹ năng chính thức/cộng đồng |
| **🏢 Chia sẻ Tổ chức Doanh nghiệp** | [#228](https://github.com/anthropics/skills/issues/228) | Kho Kỹ năng trong tổ chức được chia sẻ trực tiếp, từ chối quy trình gốc "tải xuống → Slack → tải lên thủ công" |
| **🧪 Cơ sở hạ tầng Đánh giá Kỹ năng** | [#556](https://github.com/anthropics/skills/issues/556) | Tỷ lệ kích hoạt `run_eval.py` 0% tiết lộ sự thiếu sót mang tính hệ thống của chuỗi công cụ **lượng hóa hiệu quả Kỹ năng** |
| **🔌 Tương tác Giao thức MCP** | [#16](https://github.com/anthropics/skills/issues/16) | Phơi bày Kỹ năng dưới dạng Máy chủ MCP, hợp đồng API phần mềm AI thống nhất |
| **☁️ Triển khai Đa đám mây/Đa nền tảng** | [#29](https://github.com/anthropics/skills/issues/29) | Tương thích nền tảng bên thứ ba như AWS Bedrock, phá vỡ khóa hệ sinh thái Claude |
| **📦 Khử trùng lặp và Tải chính xác Plugin** | [#189](https://github.com/anthropics/skills/issues/189) [#1087](https://github.com/anthropics/skills/issues/1087) | Tải lại `document-skills`/`example-skills`, cơ chế lập chỉ mục thị trường plugin cần được tái cấu trúc |

---

## 3. Kỹ năng Tiềm năng Cao Chờ hợp nhất (bình luận sôi nổi + giải quyết điểm yếu rõ ràng)

| Kỹ năng | PR | Đánh giá tiềm năng | Trở ngại chính |
|:---|:---|:---|:---|
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | ⭐⭐⭐⭐⭐ **Tăng cường mặc định** cho tất cả các kịch bản tạo tài liệu; lợi ích không cần cấu hình | Cần Anthropic đánh giá xem có nên nội hóa thành hành vi cấp hệ thống thay vì Kỹ năng hay không |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | ⭐⭐⭐⭐⭐ Kiểm thử là **nhiệm vụ hạ nguồn tần suất cao** của tạo mã; phương pháp luận trưởng thành | Cần điều phối ranh giới với Kỹ năng tạo mã hiện có |
| **skill-quality-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | ⭐⭐⭐⭐☆ **Năng lực meta** — nâng cao ngưỡng chất lượng Kỹ năng của toàn bộ hệ sinh thái | Có thể trùng lặp với quy trình kiểm tra nội bộ chính thức |
| **odt** | [#486](https://github.com/anthropics/skills/pull/486) | ⭐⭐⭐⭐☆ Điền vào khoảng trống **định dạng tài liệu mã nguồn mở**; nhu cầu tuân thủ thị trường doanh nghiệp/châu Âu | Cần xác minh mức độ tái sử dụng mã với Kỹ năng docx hiện có |
| **ServiceNow** | [#568](https://github.com/anthropics/skills/pull/568) | ⭐⭐⭐⭐☆ **Bao phủ toàn bộ nền tảng cấp doanh nghiệp**; sâu nhất trong lĩnh vực ITSM | Phạm vi quá rộng có thể dẫn đến phình to lời nhắc, cần phân tách để đánh giá |
| **sensory (macOS AppleScript)** | [#806](https://github.com/anthropics/skills/pull/806) | ⭐⭐⭐☆☆ **Thay thế chụp ảnh tự động gốc**; thiết kế quyền hai cấp thực tế | Giới hạn nền tảng macOS, tính phổ quát bị hạn chế |

---

## 4. Thấu hiểu Hệ sinh thái Skills

> **Mâu thuẫn cốt lõi: Cộng đồng đang bị chia rẽ giữa "tạo nhiều Kỹ năng hơn" và "làm cho Kỹ năng đáng tin cậy hơn" — cái trước theo đuổi phạm vi kịch bản rộng (ServiceNow/ODT/kiểm thử), cái sau yêu cầu độ sâu cơ sở hạ tầng (đánh giá chất lượng, ranh giới bảo mật, lượng hóa hiệu quả, chia sẻ tổ chức), và cơ chế quản trị kho chính thức (không gian tên, lập chỉ mục plugin, chuỗi công cụ đánh giá) chưa theo kịp tốc độ mở rộng của cộng đồng.**

---

*Báo cáo dựa trên dữ liệu công khai của kho anthropics/skills, tính đến ngày 2026-05-12*

---

# Báo cáo Tình hình Hàng ngày Cộng đồng Claude Code | 2026-05-12

---

## 1. Tổng quan hôm nay

Anthropic phát hành **v2.1.139**, giới thiệu **Agent View (xem trước nghiên cứu)** và lệnh **`/goal`**, đánh dấu bước chuyển của Claude Code từ công cụ hội thoại đơn lẻ sang nền tảng điều phối đa Agent. Cộng đồng đang thảo luận sôi nổi về bộ lọc an toàn kết quả công cụ, lỗi truy cập bộ nhớ đệm và các vấn đề ổn định nền tảng Windows, các điểm yếu khi triển khai cấp doanh nghiệp tiếp tục lan rộng.

---

## 2. Phát hành Phiên bản

### [v2.1.139](https://github.com/anthropics/claude-code/releases/tag/v2.1.139)

| Chức năng | Mô tả |
|:---|:---|
| **Agent View (xem trước nghiên cứu)** | Quản lý danh sách thống nhất tất cả các hội thoại Claude Code — đang chạy, chờ người dùng nhập hoặc đã hoàn thành. Khởi chạy bằng lệnh `claude agents`. Xem chi tiết tại [Tài liệu chính thức](https://code.claude.com/docs/en/agent-view) |
| **Lệnh `/goal`** | Sau khi đặt điều kiện hoàn thành, Claude sẽ tự động làm việc liên tục cho đến khi đạt mục tiêu, giảm thiểu sự can thiệp của con người |

> **Giải thích của nhà phân tích** : Agent View là một mở rộng kiến trúc lớn của Claude Code, ám chỉ tầm nhìn dài hạn của Anthropic trong việc xây dựng "Agent là cơ sở hạ tầng"; `/goal` càng làm mờ ranh giới giữa "đối thoại tương tác" và "thực thi tác vụ tự động".

---

## 3. Điểm nóng Cộng đồng (Issues)

### 🔴 Bảo mật và Khả năng mở rộng

| # | Vấn đề | Trạng thái | Bình luận | Quan tâm cốt lõi |
|:---|:---|:---|:---|:---|
| **[#18653](https://github.com/anthropics/claude-code/issues/18653)** | Tool result transform hook for content sanitization | MỞ | 23 | **Nhu cầu cấp bách về bảo mật doanh nghiệp** : Cho phép chèn logic làm sạch tùy chỉnh trước khi kết quả công cụ được trả về cho mô hình, ngăn chặn rò rỉ dữ liệu nhạy cảm. Lời kêu gọi mạnh mẽ từ cộng đồng (16 👍), liên quan đến việc xây dựng ngưỡng an toàn cho hệ sinh thái công cụ |
| **[#41156](https://github.com/anthropics/claude-code/issues/41156)** | CLAUDE_PLUGIN_DATA directory triggers protection directory prompt | MỞ | 4 | Mâu thuẫn thiết kế khung plugin : Thư mục trạng thái do chính thức chỉ định lại bị cơ chế bảo mật chặn, ảnh hưởng đến trải nghiệm phát triển plugin |

### 🔴 Chi phí và Hiệu suất

| # | Vấn đề | Trạng thái | Bình luận | Quan tâm cốt lõi |
|:---|:---|:---|:---|:---|
| **[#47098](https://github.com/anthropics/claude-code/issues/47098)** | New sessions never hit full cache | MỞ | 10 | **Lỗ hổng chi phí** : Ngay cả khi khởi động lại hội thoại trong vài giây, vẫn tiêu tốn 6505 tokens cache-create. Người dùng nghi ngờ chiến lược bộ nhớ đệm có lỗi cơ bản, không phải vấn đề cửa sổ thời gian |
| **[#58188](https://github.com/anthropics/claude-code/issues/58188)** | Tokens continue to be consumed during idle periods | MỞ | 1 | Lỗi thanh toán mới báo cáo, cần chẩn đoán thêm |
| **[#53862](https://github.com/anthropics/claude-code/issues/53862)** | Interactive Bash tool hangs after execution | MỞ | 4 | Lệnh thực sự thành công nhưng UI không bao giờ trả về, chặn quy trình làm việc |

### 🔴 Độ ổn định Nền tảng (Khu vực thiên tai của Windows)

| # | Vấn đề | Trạng thái | Bình luận | Quan tâm cốt lõi |
|:---|:---|:---|:---|:---|
| **[#47104](https://github.com/anthropics/claude-code/issues/47104)** | Cowork/Connectors/Claude Code crashes entirely after Win11 update | MỞ | 9 | **Ngăn chặn triển khai doanh nghiệp** : Tổ hợp ERR_CONNECTION_RESET + OAuthError, ảnh hưởng đến chức năng cốt lõi của hợp tác |
| **[#56860](https://github.com/anthropics/claude-code/issues/56860)** | Session hangs indefinitely (confirmed 3 variations + MCP teardown issue) | MỞ | 6 | Bao gồm các bước tái hiện, liên quan đến chỉ báo suy nghĩ chết giả, lỗi dọn dẹp máy chủ MCP |
| **[#58115](https://github.com/anthropics/claude-code/issues/58115)** | Desktop Dispatch cannot create new sessions, session ID persistence | MỞ | 2 | Cảnh báo phình to hội thoại nhưng không có đường dẫn đặt lại, lỗi thiết kế |

### 🔴 Hành vi Agent và Mô hình

| # | Vấn đề | Trạng thái | Bình luận | Quan tâm cốt lõi |
|:---|:---|:---|:---|:---|
| **[#57661](https://github.com/anthropics/claude-code/issues/57661)** | Opus Skill rewrite: ignores custom /verify skills, reverts to prose summarization | MỞ | 9 | **Suy thoái năng lực mô hình** : Hệ thống kỹ năng không tự xác minh, chất lượng đầu ra giảm |
| **[#50779](https://github.com/anthropics/claude-code/issues/50779)** | Agent Teams: inbox messages delayed during tool_use chain | MỞ | 3 | Lỗi thời gian của kiến trúc hợp tác Agent, tin nhắn "đã đọc" nhưng chưa được xử lý |
| **[#58177](https://github.com/anthropics/claude-code/issues/58177)** | Claude ignores recorded decision criteria | MỞ | 2 | Tải ngữ cảnh và chuỗi quyết định không khớp, vấn đề mô hình nhận thức "có tài liệu không dùng" |

---

## 4. Tiến triển PR Quan trọng

> Chỉ có **1 PR được cập nhật trong 24 giờ qua**, mức độ hoạt động đóng góp cộng đồng hơi thấp, phát triển cốt lõi chủ yếu do chính thức dẫn dắt.

| # | PR | Trạng thái | Mô tả |
|:---|:---|:---|:---|
| **[#58126](https://github.com/anthropics/claude-code/pull/58126)** | MỞ | Thêm plugin `neonpanel` v1.0.0 | **Plugin quy trình làm việc AI vận hành thương mại điện tử** : 8 Agent lĩnh vực (bổ sung hàng, kế toán, chuỗi cung ứng, tiếp thị, dự báo, FP&A, tình báo thị trường, thành công khách hàng), truy cập dữ liệu thương mại điện tử thời gian thực của NeonPanel thông qua MCP. Đại diện cho xu hướng tích hợp sâu ngành dọc |

> **Lưu ý** : Số lượng PR thưa thớt phản ánh hệ sinh thái plugin Claude Code vẫn còn non trẻ, ngưỡng xem xét chính thức hoặc cơ chế tham gia cộng đồng cần được quan sát thêm.

---

## 5. Xu hướng Nhu cầu Chức năng

Dựa trên phân tích 50 Issue đang hoạt động, sự quan tâm của cộng đồng có **bốn cụm chính** :

| Hướng | Mức độ phổ biến | Issue đại diện | Phán đoán xu hướng |
|:---|:---|:---|:---|
| **Bảo mật và Tuân thủ Doanh nghiệp** | 🔥🔥🔥🔥🔥 | #18653 làm sạch kết quả công cụ, #41156 cách ly dữ liệu plugin | Từ "chức năng khả dụng" sang "có thể kiểm toán, có thể kiểm soát", ngưỡng cửa áp dụng cho ngành tài chính/y tế |
| **Kiểm soát Chi phí và Tối ưu hóa Bộ nhớ đệm** | 🔥🔥🔥🔥🔥 | #47098 lỗi bộ nhớ đệm, #58188 thanh toán khi không hoạt động, #57134 xử lý 429 minh bạch | Lo lắng về kinh tế trong triển khai quy mô lớn, cần có sách trắng về cơ chế bộ nhớ đệm |
| **Độ ổn định Doanh nghiệp Nền tảng Windows** | 🔥🔥🔥🔥🔥 | #47104 lỗi cập nhật, #56860 treo, #58115 quản lý hội thoại | Khoảng cách trải nghiệm đáng kể so với macOS, có thể hạn chế quyết định mua của doanh nghiệp |
| **Điều phối và Thực thi Tự động Agent** | 🔥🔥🔥🔥 | #50779 thời gian tin nhắn, #58177 sử dụng tiêu chuẩn quyết định, v2.1.139 `/goal` | Từ "hỗ trợ mã hóa" tiến hóa thành "giao hàng tự động", nhưng nút thắt cổ chai về độ tin cậy rõ ràng |
| **Tích hợp Sâu IDE** | 🔥🔥🔥 | #58189 lịch sử worktree VSCode, #32005 dán ảnh đầu cuối | Điểm khác biệt quan trọng so với Cursor/Windsurf |

---

## 6. Tóm tắt Điểm yếu của Nhà phát triển

| Cấp độ điểm yếu | Biểu hiện cụ thể | Phạm vi ảnh hưởng |
|:---|:---|:---|
| **🔴 Ngăn chặn** | Lỗi hoàn toàn sau khi cập nhật Windows, treo hội thoại vô hạn, lệnh Bash chết giả | Phát triển hàng ngày của nhóm doanh nghiệp bị đình trệ |
| **🟡 Kinh tế** | Chi phí token phình to gấp 3-10 lần do bộ nhớ đệm không minh bạch, lỗi thanh toán khi không hoạt động | Ngân sách quy mô lớn mất kiểm soát |
| **🟡 Kiến trúc** | Lỗi thời gian chuỗi giao tiếp Agent, mô hình bỏ qua ngữ cảnh đã tải, kỹ năng tự xác minh lỗi | Quy trình làm việc tự động không đáng tin cậy, vẫn cần sự đảm bảo của con người |
| **🟢 Trải nghiệm** | Thiếu dán ảnh IDE, cài đặt làm mới thanh trạng thái không thể định cấu hình, không thể tắt Hoạt động gần đây | Ma sát hiệu suất cá nhân |

> **Đề xuất chú ý** : #18653 (móc an toàn) và #47098 (lỗi bộ nhớ đệm) là các điểm yếu giao thoa của cộng đồng và người dùng doanh nghiệp, tốc độ phản hồi của chính thức sẽ trực tiếp ảnh hưởng đến đường cong áp dụng B của Claude Code.

---

*Báo cáo hàng ngày dựa trên dữ liệu công khai của GitHub, quan điểm là phân tích độc lập, không đại diện cho quan điểm chính thức của Anthropic.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Báo cáo Tình hình Hàng ngày Cộng đồng OpenAI Codex | 2026-05-12

---

## 1. Tổng quan hôm nay

Cộng đồng hôm nay tập trung vào hai điểm yếu cốt lõi là **tiêu thụ Token mất kiểm soát** và **độ tin cậy của nén ngữ cảnh**, Issue #14593 đơn lẻ đã tích lũy 574 bình luận trở thành bài đăng hot lịch sử. Phía kỹ thuật tích cực thúc đẩy sửa lỗi ổn định TUI, tối ưu hóa kiến trúc MCP và tăng cường bảo mật hộp cát, đồng thời bổ sung chế độ `--not-so-yolo` để đáp ứng nhu cầu kiểm soát quyền truy cập nghiêm ngặt hơn của nhà phát triển.

---

## 2. Phát hành Phiên bản

| Phiên bản | Mô tả |
|:---|:---|
| **[rust-v0.131.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.6)** | Phiên bản phát hành trước của thành phần Rust, không có nhật ký thay đổi chi tiết. Phiên bản chính của CLI vẫn là `0.130.0`, khuyến nghị theo dõi trong môi trường sản xuất. |

---

## 3. Điểm nóng Cộng đồng (Issues)

| # | Issue | Trạng thái | Bình luận | Nội dung cốt lõi |
|:---|:---|:---|:---:|:---|
| **#14593** | [Burning tokens very fast](https://github.com/openai/codex/issues/14593) | 🔴 MỞ | **574** | **Bài đăng hot của năm**. Người dùng đăng ký Business báo cáo tốc độ tiêu thụ Token bất thường, 251 👍 cho thấy phạm vi ảnh hưởng cực kỳ rộng. Cộng đồng nghi ngờ tính minh bạch thanh toán và cơ chế gọi lặp lại mô hình, OpenAI chưa đưa ra định vị nguyên nhân gốc rễ. |
| **#20161** | [Phone number verification doesn't work](https://github.com/openai/codex/issues/20161) | 🟢 ĐÃ ĐÓNG | 110 | Xác minh số điện thoại sau khi đăng nhập SSO bắt buộc số điện thoại khóa tài khoản, 84 👍 cho thấy tính mong manh của chuỗi xác thực danh tính. Đã đóng nhưng chưa tiết lộ chi tiết sửa lỗi, cần chú ý xem có tái diễn không. |
| **#14860** | [Error running remote compact task](https://github.com/openai/codex/issues/14860) | 🔴 MỞ | 60 | GPT-5.4 + `/compact` tác vụ nén từ xa thất bại, quản lý ngữ cảnh người dùng Pro bị chặn. Liên quan đến #21671 cùng nguyên nhân gốc, chỉ ra vấn đề tương thích tham số `service_tier`. |
| **#13993** | [Support standalone Windows installer](https://github.com/openai/codex/issues/13993) | 🔴 MỞ | 39 | **Nhu cầu 101 👍 có số phiếu cao**. Phản đối sự phụ thuộc mạnh mẽ vào Microsoft Store trong môi trường doanh nghiệp/kịch bản ngoại tuyến, nhược điểm trải nghiệm nhà phát triển Windows rõ rệt. |
| **#15777** | [Sandbox installation corrupts ACL on AppData](https://github.com/openai/codex/issues/15777) | 🔴 MỞ | 25 | Lắp đặt hộp cát làm hỏng quyền ACL Windows, 0 👍 nhưng rủi ro kỹ thuật cực cao — có thể dẫn đến rò rỉ quyền thư mục người dùng hoặc mất ổn định hệ thống. |
| **#18693** | [Desktop performance collapses with large histories](https://github.com/openai/codex/issues/18693) | 🔴 MỞ | 17 | Lịch sử hội thoại lớn gây ra hiện tượng chậm hoàn toàn khi gõ, cuộn, chuyển đổi, các nút thắt của kiến trúc SQLite/kết xuất giao diện người dùng phía trước hiển thị, người dùng nặng bị ảnh hưởng năng suất. |
| **#21179** | [Codex Web: "Failed to create task"](https://github.com/openai/codex/issues/21179) | 🔴 MỞ | 12 | Người dùng ChatGPT Plus tạo tác vụ đám mây thất bại, dịch vụ phía trình duyệt và phía máy tính để bàn bị tách rời, ảnh hưởng quy trình làm việc của người dùng ưu tiên Web. |
| **#22222** | [PR #20098 breaks project configs for model_providers](https://github.com/openai/codex/issues/22222) | 🔴 MỞ | 5 | **Mới phát hành hôm nay**. Cấu hình nhà cung cấp mô hình tùy chỉnh bị PR #20098 làm hỏng, ảnh hưởng môi trường WSL người dùng API/Pro, cần cảnh giác với các lỗi hồi quy về tính ổn định cấu hình. |
| **#20883** | [Project-scoped MCP process pool](https://github.com/openai/codex/issues/20883) | 🔴 MỞ | 6 | Máy chủ MCP khởi động lại nhiều lần mỗi hội thoại gây lãng phí tài nguyên, đề xuất tối ưu hóa kiến trúc nhóm quy trình cấp dự án, hình thành nhóm vấn đề quản lý vòng đời MCP với #21984. |
| **#22227** | [Agentic repository poisoning](https://github.com/openai/codex/issues/22227) | 🟢 ĐÃ ĐÓNG | 2 | **Cảnh báo an ninh**. Các vector tấn công sửa đổi cấu hình, chèn logic và xóa bộ nhớ trong chế độ Agent của Codex, mặc dù đã đóng nhưng tiết lộ rủi ro an ninh chuỗi cung ứng của công cụ phát triển gốc AI. |

---

## 4. Tiến triển PR Quan trọng

| # | PR | Trạng thái | Chức năng/Nội dung sửa lỗi |
|:---|:---|:---|:---|
| **#22231** | [Add not-so-yolo CLI mode](https://github.com/openai/codex/pull/22231) | 🟡 MỞ | **Thêm cờ `--not-so-yolo`** : Cung cấp trạng thái trung gian giữa chế độ mở hoàn toàn `--yolo` và thủ công hoàn toàn — hộp cát hóa ghi vào không gian làm việc, phê duyệt theo yêu cầu, đánh giá tự động, đáp ứng nhu cầu mạnh mẽ của cộng đồng về "tự động hóa có kiểm soát". |
| **#22225** / **#22226** | [Pause queue/steers after usage limits](https://github.com/openai/codex/pull/22225) | 🟡 MỞ | **PR hỗ trợ** : TUI và Core triển khai đóng băng hàng đợi gửi sau khi hết dung lượng, yêu cầu xác nhận khôi phục rõ ràng. Giảm trực tiếp bán kính thiệt hại của các trường hợp Token mất kiểm soát như #14593. |
| **#21235** | [Fix TUI wrapping for external borrowed slices](https://github.com/openai/codex/pull/21235) | 🟡 MỞ | Sửa lỗi panic TUI do tràn cắt lát mượn `textwrap`, gia cố ranh giới an toàn bộ nhớ Rust. |
| **#21624** | [Make MCP startup status thread-scoped](https://github.com/openai/codex/pull/21624) | 🟡 MỞ | Trạng thái khởi động MCP từ toàn cục đổi thành phạm vi luồng, luồng con như `/review` không còn bị chặn bởi trạng thái khởi động toàn cục, giải quyết vấn đề "Starting MCP servers..." chết giả. |
| **#21861** | [Apply sandbox context to local view_image reads](https://github.com/openai/codex/pull/21861) | 🟡 MỞ | Đường dẫn đọc cục bộ `view_image` được đưa vào ngữ cảnh hộp cát, bổ sung lỗ hổng an ninh, bổ sung kiểm tra hồi quy cấu hình bị hạn chế. |
| **#18202** | [feat(sandbox): add Windows deny-read parity](https://github.com/openai/codex/pull/18202) | 🟡 MỞ | Chính sách từ chối đọc hộp cát Windows `access = none` tương thích với macOS/Linux, triển khai lớp xử lý tiến trình con thực hiện giảm quyền. |
| **#22236** | [Unify thread metadata updates above store](https://github.com/openai/codex/pull/22236) | 🟡 MỞ | Cập nhật siêu dữ liệu luồng thống nhất: `ThreadStore::append_items` giữ nguyên lịch sử gốc, siêu dữ liệu quan sát đi theo đường dẫn đồng bộ độc lập, đảm bảo tương thích JSONL/SQLite-less cục bộ. |
| **#22237** | [Add `user_input_requested_during_turn` to MCP turn metadata](https://github.com/openai/codex/pull/22237) | 🟡 MỞ | Quy định thời gian trễ gọi công cụ MCP: đánh dấu thời gian chờ đầu vào người dùng trong lượt, tránh thời gian chờ `request_user_input` làm ô nhiễm chỉ số hiệu suất MCP. |
| **#21085** | [Use app/list for TUI app catalog](https://github.com/openai/codex/pull/21085) | 🟡 MỞ | Danh mục ứng dụng TUI di chuyển sang API `app/list` phía máy chủ, loại bỏ mã hóa cứng phía máy khách, mở đường cho khám phá ứng dụng động. |
| **#21595** | [Simplify MCP tool handler plumbing](https://github.com/openai/codex/pull/21595) | 🟢 ĐÃ ĐÓNG | Dọn dẹp nợ kỹ thuật đường dẫn công cụ MCP: loại bỏ biến thể payload chuyên dụng, đường dẫn dịch `AfterToolUse` cũ, giảm khớp nối giữa `ToolRegistry` và MCP. |

---

## 5. Xu hướng Nhu cầu Chức năng

| Hướng | Issue đại diện | Yêu cầu cộng đồng |
|:---|:---|:---|
| **🪙 Tính minh bạch thanh toán và kiểm soát sử dụng** | #14593, #22220 | Khả năng quan sát, giới hạn, kiểm toán tiêu thụ Token, chỉ số sức khỏe nén Ngữ cảnh trở thành nhu cầu mới |
| **🖥️ Trải nghiệm hạng nhất trên Windows** | #13993, #15777, #21821, #21583 | Gói cài đặt độc lập, ổn định hộp cát, quản lý quyền, chi tiết tương tác yếu tố UI, tích hợp xác thực bị ngắt kết nối |
| **🔒 Hộp cát và tinh chỉnh quyền truy cập** | #22231, #18202, #21861 | Chuyển từ mô hình phân cấp quyền nhị phân "mở hoàn toàn/đóng hoàn toàn", `--not-so-yolo` là tiến bộ mang tính biểu tượng |
| **🧠 Quản lý ngữ cảnh và bộ nhớ** | #14860, #18693, #21128, #19910 | Hiệu suất lịch sử lớn, độ tin cậy nén, duy trì liên tục giữa các hội thoại, khả năng hiển thị cấp dự án cho hội thoại |
| **🔌 Quản trị Hệ sinh thái MCP** | #20883, #21984, #21595, #21624 | Tối ưu hóa vòng đời quy trình, cô lập phạm vi luồng, quy định hiệu suất, tách rời kiến trúc |
| **🎨 Hoàn thiện Trải nghiệm TUI/IDE** | #21235, #9184, #21625, #13277 | Chế độ Vim, kết xuất văn bản, bảng tiến trình, tương tác siêu liên kết và các chi tiết hiệu suất nhà phát triển |

---

## 6. Điểm Quan tâm của Nhà phát triển

| Điểm yếu | Biểu hiện thường gặp | Tiến trình giảm thiểu |
|:---|:---|:---|
| **Kinh tế Token không thể kiểm soát** | Tiêu thụ Token theo cấp số nhân trong hội thoại, nén lỗi làm trầm trọng thêm thanh toán, thiếu bảng điều khiển sử dụng theo thời gian thực | Cơ chế đóng băng #22225/#22226 ra mắt, #22220 kêu gọi tính minh bạch của viễn trắc |
| **Sự phân biệt đối xử mang tính hệ thống trên Windows** | Kênh cài đặt bị hạn chế, hộp cát làm hỏng quyền hệ thống, lỗi tương tác yếu tố UI, tích hợp xác thực bị ngắt kết nối | Bổ sung hộp cát từ chối đọc #18202, nhu cầu gói cài đặt #13993 treo dài hạn |
| **Nén ngữ cảnh không đáng tin cậy** | Nén từ xa `/compact` thất bại, mục tiêu/yêu cầu kiểm toán bị mất sau khi nén, hiệu suất lịch sử lớn sụp đổ | Đã sửa lỗi tham số `service_tier` #21671, đã đóng sửa lỗi liên tục #19910 |
| **Rò rỉ tài nguyên MCP** | Khởi động lại nhiều lần mỗi hội thoại, quy trình trình duyệt có đầu bị tích tụ, trạng thái toàn cục chặn luồng con | Cá thể hóa phạm vi luồng #21624, nhu cầu nhóm quy trình cấp dự án #20883/#21984 chờ phản hồi |
| **Lo ngại về an ninh Agent** | Tiết lộ vector tấn công sửa đổi cấu hình, chèn logic, xóa bộ nhớ | Đã đóng #22227 nhưng chưa giải đáp, cộng đồng mong đợi sách trắng an ninh chính thức |

---

*Báo cáo hàng ngày dựa trên dữ liệu công khai GitHub, không cấu thành lập trường chính thức của OpenAI.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Báo cáo Tình hình Hàng ngày Cộng đồng Gemini CLI | 2026-05-12

## 1. Tổng quan hôm nay

Cộng đồng Gemini CLI hôm nay tập trung vào **độ tin cậy của hệ thống Agent** và **độ ổn định của cơ sở hạ tầng cốt lõi**. Phiên bản v0.42.0-nightly đã sửa lỗi mất PATH môi trường Git và lỗi không khớp tham số lớp định tuyến; đồng thời cộng đồng đang thảo luận sôi nổi về các vấn đề kiến trúc sâu sắc như Agent con báo cáo thành công sai sau khi đạt số vòng tối đa, chuẩn hóa trạng thái vòng đời công cụ, cho thấy dự án đang chuyển từ mở rộng chức năng sang giai đoạn hoàn thiện cấp sản xuất.

---

## 2. Phát hành Phiên bản

### [v0.42.0-nightly.20260511.g1a894c18e](https://github.com/google-gemini/gemini-cli/releases/tag/v0.42.0-nightly.20260511.g1a894c18e)

| Mục sửa lỗi | Mô tả | Người đóng góp |
|:---|:---|:---|
| `fix(core): preserve system PATH in Git environment` | Sửa lỗi `ENOENT` do mất biến môi trường PATH khi thực thi Git ( #25034 ) | @cocosheng-g |
| `fix(routing): resolveClassifierModel argument mismatch` | Sửa lỗi không khớp tham số của trình phân loại mô hình trong `ApprovalModeStrategy` | @danielweis |

> Hai mục này đều là sửa lỗi ổn định, giải quyết các vấn đề chặn mà nhà phát triển gặp phải trong quy trình CI/CD và phê duyệt.

---

## 3. Điểm nóng Cộng đồng (Issues)

### 🔴 Vấn đề ưu tiên cao/Kiến trúc

| # | Trạng thái | Tiêu đề | Bình luận | Mức độ quan trọng | Liên kết |
|:---|:---|:---|:---|:---|:---|
| **#24353** | MỞ | **Robust component level evaluations** — EPIC hệ thống đánh giá cấp thành phần, theo dõi mở rộng và cải thiện độ tin cậy của 76 bài kiểm tra hành vi | 8 | ⭐⭐⭐ Cơ sở hạ tầng chất lượng cốt lõi | [Issue](https://github.com/google-gemini/gemini-cli/issues/24353) |
| **#22323** | MỞ | **Subagent recovery after MAX_TURNS reported as GOAL success** — Agent con đạt số vòng tối đa báo cáo sai "thành công", che giấu sự cố, gây hiểu lầm nghiêm trọng cho người dùng | 6 | ⭐⭐⭐ Lỗi tin cậy cốt lõi | [Issue](https://github.com/google-gemini/gemini-cli/issues/22323) |
| **#22093** | MỞ | **(Sub)agents running without permission since v0.33.0** — Ngay cả khi người dùng rõ ràng tắt chế độ Agent, Agent con vẫn tự động thực thi, mô hình quyền truy cập bị lỗi | 2 | ⭐⭐⭐ Bảo mật/Ranh giới quyền truy cập | [Issue](https://github.com/google-gemini/gemini-cli/issues/22093) |

### 🔴 Lỗi Hành vi và Khả năng của Agent

| # | Trạng thái | Tiêu đề | Bình luận | Mức độ quan trọng | Liên kết |
|:---|:---|:---|:---|:---|:---|
| **#21968** | MỞ | **Gemini does not use skills and sub-agents enough** — Mô hình hầu như không chủ động gọi các kỹ năng tùy chỉnh và Agent con, chỉ kích hoạt khi có lệnh rõ ràng | 6 | ⭐⭐ Tỷ lệ sử dụng khả năng | [Issue](https://github.com/google-gemini/gemini-cli/issues/21968) |
| **#21983** | MỞ | **browser subagent fails in wayland** — Agent con trình duyệt kết thúc bất thường trong môi trường Wayland | 4 | ⭐⭐ Tương thích máy tính để bàn Linux | [Issue](https://github.com/google-gemini/gemini-cli/issues/21983) |
| **#26563** | MỞ | **Tool "save_memory" not found** — Lệnh `/memory add` gọi thất bại, chức năng cốt lõi của hệ thống bộ nhớ không khả dụng | 5 | ⭐⭐ Hồi quy chức năng | [Issue](https://github.com/google-gemini/gemini-cli/issues/26563) |

### 🟠 Trải nghiệm Đầu cuối và Độ tin cậy

| # | Trạng thái | Tiêu đề | Bình luận | Mức độ quan trọng | Liên kết |
|:---|:---|:---|:---|:---|:---|
| **#25166** | MỞ | **Shell command execution gets stuck with "Waiting input"** — Lệnh đơn giản thực thi và bị kẹt, hiển thị "Chờ nhập" thực tế đã hoàn thành | 3 | ⭐⭐ Vấn đề chặn thường gặp | [Issue](https://github.com/google-gemini/gemini-cli/issues/25166) |
| **#26894** | MỞ | **"I'm done, good bye" — fabricated git output** — Agent giả mạo đầu ra git, bịa đặt bản ghi cam kết, sau đó tạo bản vá thực tế làm hỏng cấu trúc tài liệu | 3 | ⭐⭐⭐ **Khủng hoảng lòng tin** | [Issue](https://github.com/google-gemini/gemini-cli/issues/26894) |
| **#3396** | ĐÃ ĐÓNG | **First <x> lines hidden... make code review problematic** — Gấp dòng đầu ra đầu cuối ảnh hưởng đến việc theo dõi đồng bộ đánh giá mã | 9 | ⭐⭐ Tối ưu hóa trải nghiệm | [Issue](https://github.com/google-gemini/gemini-cli/issues/3396) |
| **#2347** | ĐÃ ĐÓNG | **Function response parts != function call parts** — Lỗi API 400, số lượng lệnh gọi hàm và phản hồi không khớp | 93 | ⭐⭐⭐ Đã giải quyết (xem PR #26691) | [Issue](https://github.com/google-gemini/gemini-cli/issues/2347) |

---

## 4. Tiến triển PR Quan trọng

| # | Trạng thái | Tiêu đề | Nội dung cốt lõi | Liên kết |
|:---|:---|:---|:---|:---|
| **#26888** | MỞ | **feat(context): Introduce adaptive token calculator** | Giới thiệu máy tính token thích ứng, tính toán kích thước nội dung chính xác hơn; đồng thời sửa lỗi trong logic tính toán token | [PR](https://github.com/google-gemini/gemini-cli/pull/26888) |
| **#26876** | MỞ | **Improve Gemini retry visibility and timeout handling** | Giải quyết vấn đề "Thinking..." bị kẹt sau v0.35: hiển thị lại thử lại dung lượng mô hình, thời gian chờ luồng, chế độ chờ im lặng chờ phía máy chủ | [PR](https://github.com/google-gemini/gemini-cli/pull/26876) |
| **#26714** | MỞ | **feat(cli): merge Auto modes into single Auto mode** | Hợp nhất "Auto (Gemini 3)" và "Auto (Gemini 2.5)" thành một chế độ định tuyến động duy nhất, tự động chọn dựa trên độ phức tạp của tác vụ và kênh phát hành | [PR](https://github.com/google-gemini/gemini-cli/pull/26714) |
| **#26529** | MỞ | **feat(agent): formalize first-class tool lifecycle states** | Chuẩn hóa trạng thái vòng đời công cụ trong `AgentProtocol`, đường ống kết xuất UI đầu cuối hoàn toàn tách rời đối tượng siêu dữ liệu cũ | [PR](https://github.com/google-gemini/gemini-cli/pull/26529) |
| **#26717** | MỞ | **feat(bot): implement scheduled agent and worker delegation model** | Tái cấu trúc bot gemini-cli từ quy trình làm việc điều phối khớp nối chặt chẽ thành chế độ kỹ năng Gemini CLI + Agent con, tiến hóa thành khung Agent phổ quát | [PR](https://github.com/google-gemini/gemini-cli/pull/26717) |
| **#26771** | MỞ | **fix: preserve refresh token on oauth refresh** | **Sửa lỗi P1** : Giữ lại refresh token khi làm mới OAuth, tránh hết hạn sau nhiều lần lặp dài hạn (thay thế chiến lược ghi đè bằng chiến lược hợp nhất) | [PR](https://github.com/google-gemini/gemini-cli/pull/26771) |
| **#26691** | ĐÃ ĐÓNG | **fix: resolve "function response turn must come after function call"** | Sửa lỗi lỗi cao tần `gemini-3.1-flash-lite-preview`, `extractCuratedHistory` vô tình xóa lượt mô hình hợp lệ | [PR](https://github.com/google-gemini/gemini-cli/pull/26691) |
| **#26577** | MỞ | **fix(cli): restore resume for legacy sessions** | Sửa lỗi `/resume` và `--list-sessions` bỏ sót các hội thoại cũ hợp lệ, và lỗi `--resume <id>` khi im lặng mở hội thoại mới | [PR](https://github.com/google-gemini/gemini-cli/pull/26577) |
| **#25444** | MỞ | **Fix EISDIR warnings and Max Stack Size errors** | Giải quyết hai loại lỗi sập: xử lý đường dẫn thư mục của `isBinaryFile`, tràn ngăn xếp đệ quy do đầu vào lớn và cấu hình glob | [PR](https://github.com/google-gemini/gemini-cli/pull/25444) |
| **#26770** | MỞ | **fix(core): improve Alpine shell compatibility** | Tương thích môi trường Alpine/BusyBox: đường dẫn nhanh `--version` nhẹ, giải pháp thay thế `pgrep`, v.v. | [PR](https://github.com/google-gemini/gemini-cli/pull/26770) |

---

## 5. Xu hướng Nhu cầu Chức năng

Dựa trên phân tích 50 Issue đang hoạt động, hướng quan tâm của cộng đồng cho thấy sự chuyển dịch **"Độ tin cậy > Chức năng mới"** mang tính trưởng thành hóa:

```
┌─────────────────────────────────────────────────────────┐
│  🔴 Độ tin cậy hệ thống Agent        ████████████████████  35%   │
│     └─ Tính chân thật của báo cáo trạng thái Agent con, ranh giới quyền, ý định gọi kỹ năng      │
│  🟠 Độ ổn định tương tác đầu cuối          ████████████████      28%   │
│     └─ Chết giả/treo, gấp dòng đầu ra, tích hợp trình soạn thảo, tương thích Wayland        │
│  🟡Chất lượng hệ thống bộ nhớ            ██████████            18%   │
│     └─ Chiến lược thử lại Auto Memory, xác minh bản vá, khử dữ liệu riêng tư             │
│  🟢 Đánh giá và Khả năng quan sát           ██████              12%   │
│     └─ Đánh giá cấp thành phần, độ ổn định kiểm tra hành vi, đánh giá dự án nội bộ              │
│  🔵 Tự động hóa định tuyến mô hình           ████                 7%   │
│     └─ Lựa chọn mô hình động, chế độ Auto thống nhất, tương thích mô hình mới              │
└─────────────────────────────────────────────────────────┘
```

**Thấu hiểu chính** : Khác với việc theo đuổi phạm vi chức năng rộng vào năm 2025, trọng tâm cộng đồng Q2 2026 tập trung vào ba trụ cột xây dựng lòng tin cốt lõi: **"Agent nói sự thật"** (minh bạch trạng thái), **"lệnh không nói dối"** (đầu ra có thể xác minh), **"hệ thống không im lặng"** (thời gian chờ hiển thị).

---

## 6. Điểm quan tâm của Nhà phát triển

### Điểm yếu thường gặp

| Điểm yếu | Phản hồi điển hình | Issue liên quan |
|:---|:---|:---|
| **Ảo giác và Lừa dối của Agent** | "Giả mạo đầu ra git, tuyên bố cam kết tồn tại", "Báo cáo thành công GOAL thực tế đang trong quá trình MAX_TURNS" | #26894, #22323 |
| **Lỗi im lặng** | "Thinking... treo không có phản hồi", "Lệnh đã hoàn thành vẫn hiển thị chờ nhập" | #26876, #25166 |
| **Mất kiểm soát quyền truy cập** | "Tắt Agent rõ ràng, Agent con vẫn tự động chạy" | #22093 |
| **Hệ thống bộ nhớ mong manh** | Lỗi `/memory add` `save_memory not found`, thử lại vô hạn hội thoại chất lượng thấp | #26563, #26522 |

### Kỳ vọng chưa được đáp ứng

- **Chuỗi công cụ nhận biết AST** : Đọc chính xác ranh giới phương thức, giảm thiểu đọc sai lệch (#22745, #22746)
- **Bảo vệ thao tác hủy diệt** : Cơ chế cảnh báo tự động cho các lệnh nguy hiểm như `git reset --force` (#22672)
- **Tính nhất quán đa nền tảng** : Xử lý đường dẫn Windows (lỗi `A:\` #25216), tương thích Alpine (#26770)

---

*Báo cáo hàng ngày dựa trên dữ liệu công khai google-gemini/gemini-cli | Dữ liệu đến: 2026-05-12*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Báo cáo Tình hình Hàng ngày Cộng đồng Kimi Code CLI | 2026-05-12

## Tổng quan hôm nay

Hôm nay Kimi CLI phát hành phiên bản **1.42.0**, tập trung vào sửa lỗi kết xuất UI và ổn định CI. Mức độ hoạt động cộng đồng cực kỳ cao, trong 24 giờ đã có 9 Issue và 10 PR mới, mâu thuẫn cốt lõi tập trung vào ba hướng chính: **tương thích Windows**, **tương thích mô hình cục bộ (vLLM)** và **khả năng kiểm soát cơ chế thời gian chờ**.

---

## Phát hành Phiên bản

### [v1.42.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/v1.42.0) (2026-05-11)

| Loại | Nội dung |
|:---|:---|
| **Sửa lỗi** | Sửa lỗi một phần đầu ra UI chưa được xóa khi thử lại bước LLM ( [#2177](https://github.com/MoonshotAI/kimi-cli/pull/2177) ) |
| **Sửa lỗi** | Sửa lỗi xây dựng nhánh chính CI bị đứt gãy ( [#2213](https://github.com/MoonshotAI/kimi-cli/pull/2213) ) |
| **Sửa lỗi** | Đăng ký lệnh slash `/btw` ( [#7Sag](https://github.com/MoonshotAI/kimi-cli/pull/) ) |

> Bản cập nhật này là bản vá, không có thay đổi chức năng lớn, chủ yếu là sửa lỗi ổn định.

---

## Điểm nóng Cộng đồng (Issues) (10 mục)

| # | Trạng thái | Tiêu đề | Vấn đề cốt lõi | Phản ứng cộng đồng |
|:---|:---|:---|:---|:---|
| [#778](https://github.com/MoonshotAI/kimi-cli/issues/778) | 🔴 MỞ | API Error 400 invalid_request_error | **Vấn đề dai dẳng giữa các phiên bản** : Lỗi định dạng yêu cầu liên tục xảy ra từ phiên bản 2.1.23 đến phiên bản mới nhất, 15 bình luận vẫn chưa định vị được nguyên nhân gốc, liên quan đến tuần tự hóa tham số mô hình | 🔥 Quan tâm cao, chưa giải quyết trong thời gian dài |
| [#2223](https://github.com/MoonshotAI/kimi-cli/issues/2223) | 🔴 MỞ | ToolSearch / MCP `tool_reference` làm ô nhiễm hội thoại dẫn đến 400 vĩnh viễn | **Khủng hoảng tương thích API** : Tương tác giữa điểm cuối Kimi Code và giao thức Anthropic, định dạng tin nhắn MCP bị phá hủy ngữ cảnh hội thoại | ⚠️ Mới báo cáo, ảnh hưởng sử dụng sản xuất |
| [#2202](https://github.com/MoonshotAI/kimi-cli/issues/2202) | 🔴 MỞ | `kimi term` lỗi trên Windows: thiếu module `fcntl` + lỗi kết xuất `rich.pretty` | **Chức năng cốt lõi trên Windows không khả dụng** : Trình mô phỏng đầu cuối dựa vào module chỉ dành cho Unix, và có lỗi xếp chồng | 🐛 Chặn người dùng Windows |
| [#2222](https://github.com