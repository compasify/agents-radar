# Cập nhật Cộng đồng Công cụ AI CLI Nhật ký 2026-05-16

> Thời gian tạo: 2026-05-16 00:20 UTC | Số lượng công cụ được bao phủ: 9

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

# Báo cáo Phân tích So sánh Ngang Hệ sinh thái Công cụ AI CLI | 2026-05-16

---

## 1. Toàn cảnh Hệ sinh thái

Hệ sinh thái công cụ AI CLI hiện tại đang bước vào giai đoạn chuyển đổi quan trọng từ **"cạnh tranh chức năng sang giải quyết các vấn đề về độ tin cậy"**. Các công cụ đang dần hội tụ về các khả năng cốt lõi như tính tự chủ của Agent, mở rộng plugin MCP, quy trình làm việc từ xa/đa thiết bị. Tuy nhiên, phản hồi của cộng đồng tập trung vào ba nút thắt cổ chai cấp độ sản xuất: **ổn định bộ nhớ, khả năng phục hồi trong mạng yếu, và tính nhất quán đa nền tảng**. Đồng thời, **khả năng tương thích định dạng nội dung suy luận (reasoning_content)** trở thành điểm đau mới cho việc hỗ trợ đa mô hình, và **tính minh bạch về chi phí cũng như độ tin cậy của việc tính phí** đang chuyển từ "có thì tốt" sang yếu tố quyết định giữ chân người dùng. Tổng thể cho thấy đặc điểm "chức năng phong phú nhưng niềm tin chưa được thiết lập".

---

## 2. So sánh Hoạt động của các Công cụ

| Công cụ | Issues (24h) | PRs (24h) | Phiên bản phát hành | Tính năng phiên bản |
|:---|:---:|:---:|:---|:---|
| **Claude Code** | 50 | 3 | v2.1.143 | Kiểm tra bắt buộc các phụ thuộc plugin, dự báo chi phí ngữ cảnh |
| **OpenAI Codex** | ~15 | 13 | 3 bản alpha (v0.131.0-α.19~22) | Kiểm soát từ xa trực tuyến, tái cấu trúc hệ thống quyền, đồng bộ trạng thái TUI |
| **Gemini CLI** | 50 | 50 | v0.44.0-nightly | Nhật ký gỡ lỗi RAG, sửa lỗi xác thực cổng doanh nghiệp |
| **GitHub Copilot CLI** | 50 | 0 | v1.0.49-0/1 | Tìm kiếm/tải chậm MCP, tùy chọn suy luận "None" |
| **Kimi Code CLI** | 15 | 10 | — | Sửa lỗi do cộng đồng (bảo mật/Hook/phím tắt) |
| **OpenCode** | 50 | 20 | v1.15.0 + v1.14.51 | Hệ thống sự kiện Effect, thử nghiệm proxy phụ nền |
| **Pi** | ~15 | 13 | — | Sửa lỗi tương thích reasoning_content, nhà cung cấp FirePass |
| **Qwen Code** | ~10 | ~10 | 3 bản preview (v0.15.12-p.0~2) | Siêu liên kết đầu cuối, sửa lỗi xuất luồng |
| **DeepSeek TUI** | 40 | 24 | v0.8.38 | Sửa lỗi quyền Docker, tối ưu bộ nhớ đệm gợi ý hệ thống, công cụ đa vòng ACP |

> **Lưu ý**: Số lượng Issues/PR là giá trị được công bố hàng ngày, một số công cụ không được thống kê chính xác; Mức độ hoạt động của Codex/Gemini/Copilot được suy ra dựa trên "50 dòng Issues hoạt động".

---

## 3. Hướng chức năng được quan tâm chung

| Hướng chức năng | Công cụ liên quan | Yêu cầu cụ thể |
|:---|:---|:---|
| **Ổn định hệ sinh thái MCP/plugin** | Claude Code, Gemini CLI, Copilot CLI, DeepSeek TUI | Quản lý vòng đời plugin (#36800 instance ma), kiểm tra hoạt động pool kết nối (#3257 TCP connection chết), dọn dẹp container (#29058 Docker sót lại), đồng bộ trạng thái xác thực |
| **Quy trình làm việc từ xa/đa thiết bị** | Claude Code, OpenAI Codex | Tự động kết nối lại Remote Control (#34255), ghép nối iOS-desktop (#9224/#22696), xác thực khóa SSH (#22857), đồng bộ trạng thái thiết bị (#22700) |
| **Tính minh bạch về chi phí và hạn ngạch** | Claude Code, Kimi Code CLI, DeepSeek TUI, Qwen Code | Độ chính xác bộ đếm (#59572 reset bất thường), dự báo chi phí ngữ cảnh thời gian thực (v2.1.143), phân tích chi tiết Token (#1666), hỗ trợ đa tiền tệ (#1607) |
| **Ổn định bộ nhớ/hiệu suất** | OpenCode, Qwen Code, Gemini CLI | Khắc phục rò rỉ bộ nhớ (#20695 megathread), nén tự động khi heap bị ép (#4186), lỗi GC V8 (#4167), chiến lược loại bỏ bộ nhớ đệm (#4188) |
| **Khả năng tương thích nội dung suy luận** | Pi, DeepSeek TUI, Kimi Code CLI | Chuẩn hóa định dạng reasoning_content cho Kimi K2.6/MiMo/Claude (#4251/#4514/#4505), bảo vệ chế độ thinking API bên thứ ba (#1680) |
| **Quản lý vòng đời phiên** | Claude Code, Kimi Code CLI, OpenCode, Copilot CLI | Lệnh `/new` (#59275), rewind (#2290/#11626), Session forking (#1697 22👍), lưu trữ Agent thay vì hủy bỏ (#58966) |

---

## 4. Phân tích Định vị khác biệt

| Công cụ | Trọng tâm cốt lõi | Người dùng mục tiêu | Đặc điểm Lộ trình Kỹ thuật |
|:---|:---|:---|:---|
| **Claude Code** | Quy trình làm việc Agent cấp doanh nghiệp, quản trị hệ sinh thái plugin | Nhóm phát triển doanh nghiệp vừa và lớn | Ưu tiên mã nguồn đóng, MCP là tiêu chuẩn mở rộng chính thức; Kiểm tra phụ thuộc, dự báo chi phí thể hiện **tư duy quản trị nền tảng** |
| **OpenAI Codex** | Kiểm soát từ xa, đồng bộ đa client, sandbox quyền | Nhà phát triển ưu tiên đa thiết bị/di động | Lặp lại alpha nhanh chóng (3 phiên bản/24h), tái cấu trúc kiến trúc Named Permission Profiles **mạo hiểm nhưng đau đớn rõ ràng** |
| **Gemini CLI** | Xác thực doanh nghiệp, gỡ lỗi RAG, cơ sở hạ tầng đánh giá | Người dùng doanh nghiệp Google Cloud/Vertex | Tốc độ phát hành nightly, hiểu mã nguồn AST-aware **tiên phong nghiên cứu kỹ thuật**, nhưng độ tin cậy của Agent (treo máy #21409) làm chậm quá trình triển khai |
| **GitHub Copilot CLI** | Tích hợp gốc IDE, thị trường MCP, điều phối proxy | Người dùng sâu của hệ sinh thái VS Code | Liên kết hệ sinh thái Microsoft, chức năng thử nghiệm (tìm kiếm `/mcp`) **thúc đẩy thận trọng**, độ ổn định của công cụ chính sách doanh nghiệp còn nghi vấn |
| **Kimi Code CLI** | Tuân thủ bảo mật, hệ sinh thái mở rộng Hook, tương tác đa công cụ | Nhà phát triển/doanh nghiệp Trung Quốc | Đặc điểm **sửa lỗi tự tổ chức cộng đồng** nổi bật (ktwu01 và 2 người khác 9 PR), nhưng K2.6 quá tải (thiếu phản hồi chính thức #2077) |
| **OpenCode** | Khả năng mở rộng mã nguồn mở, hỗ trợ LLM cục bộ, ưu tiên quyền riêng tư | Người đóng góp mã nguồn mở/người dùng nhạy cảm về quyền riêng tư | Kiến trúc hàm Effect, proxy phụ nền **mạo hiểm kỹ thuật**, nợ kỹ thuật về rò rỉ bộ nhớ (#20695) và TUI nặng nề |
| **Pi** | Truy cập thống nhất đa mô hình, tinh chỉnh trải nghiệm đầu cuối | Người thử nghiệm mô hình/người dùng đầu cuối nặng | Kiến trúc nhẹ, cơ chế mở rộng provider trưởng thành (FirePass/LiteLLM), lớp trừu tượng `reasoning` **cần thống nhất khẩn cấp** |
| **Qwen Code** | Hệ thống chẩn đoán bộ nhớ, kiến trúc tiến trình giám sát, khả năng phục hồi mạng yếu | Hệ sinh thái Alibaba Cloud/nhà phát triển tiếng Trung | **Hệ thống chuỗi công cụ chẩn đoán `/doctor` `/stuck` có hệ thống hóa**, tài liệu thiết kế tiến trình giám sát (#3803) **nổi bật quy cách kỹ thuật**, nhưng chính sách hạn ngạch miễn phí (#3203) ảnh hưởng niềm tin người dùng |
| **DeepSeek TUI** | Trải nghiệm gốc tiếng Trung, tối ưu chi phí, triển khai Docker | Nhà phát triển C-end/người dùng cá nhân Trung Quốc | Đối chiếu trực quan Claude Code (#1697), định tuyến song song Dual (#1676) **tiên phong đổi mới chi phí**, mức độ trưởng thành của container chưa đủ |

---

## 5. Độ phổ biến và Độ trưởng thành của Cộng đồng

### 🔥 Hoạt động cao + Lặp lại nhanh

| Công cụ | Bằng chứng | Đánh giá độ trưởng thành |
|:---|:---|:---|
| **Gemini CLI** | 50 Issues + 50 PR / 24h, đóng góp cộng đồng dày đặc | ⭐⭐⭐☆☆ Hoạt động nhưng nhược điểm cốt lõi của Agent (treo máy/chết giả) chưa được khắc phục |
| **OpenCode** | 20 PR / 24h, phát hành hai phiên bản, tỷ lệ đóng góp viên cao | ⭐⭐⭐☆☆ Đang hiện đại hóa kiến trúc, nợ bộ nhớ/TUI hạn chế khả năng sử dụng sản xuất |
| **DeepSeek TUI** | 40 Issues + 24 PR, sửa lỗi khẩn cấp v0.8.38 | ⭐⭐⭐☆☆ Phản hồi cộng đồng nhanh, nhưng trải nghiệm cơ bản Docker/Windows biến động lớn |
| **OpenAI Codex** | 13 PR bao gồm tái cấu trúc toàn diện hệ thống quyền, 3 alpha / 24h | ⭐⭐⭐⭐☆ Chức năng mạo hiểm, kiểm soát từ xa gặp sự cố quy mô lớn ngay ngày đầu |

### ⚖️ Hoạt động trung bình + Tiến hóa ổn định

| Công cụ | Bằng chứng | Đánh giá độ trưởng thành |
|:---|:---|:---|
| **Claude Code** | 50 Issues nhưng chỉ 3 PR, tốc độ phát hành ổn định | ⭐⭐⭐⭐☆ Quản trị nền tảng trưởng thành, chất lượng Windows suy giảm (#47104) trở thành rủi ro mới |
| **GitHub Copilot CLI** | 50 Issues nhưng 0 PR, chủ yếu lặp lại nội bộ | ⭐⭐⭐⭐☆ Ổn định cấp doanh nghiệp, nhưng mức độ tham gia của cộng đồng mã nguồn mở thấp, đổi mới phụ thuộc vào tốc độ của Microsoft |
| **Pi** | 13 PR bao gồm nhiều mở rộng provider, sửa lỗi suy luận dày đặc | ⭐⭐⭐⭐☆ Nhẹ nhàng và trưởng thành, lớp tương thích đa mô hình đang được mài giũa liên tục |

### ⚠️ Hoạt động phân hóa + Khủng hoảng niềm tin

| Công cụ | Bằng chứng | Đánh giá độ trưởng thành |
|:---|:---|:---|
| **Kimi Code CLI** | 15 Issues + 10 PR, nhưng #2077 Critical không phản hồi trong 3 tuần | ⭐⭐☆☆☆ **Tự tổ chức cộng đồng vs Thiếu sót của chính thức**, rủi ro mất đóng góp cao |
| **Qwen Code** | ~10 Issues + ~10 PR, nhưng chính sách thay đổi đột ngột #3203 với 125 bình luận | ⭐⭐⭐☆☆ Năng lực kỹ thuật vững chắc, quyết định thương mại hóa ảnh hưởng đến niềm tin cộng đồng |

---

## 6. Tín hiệu Xu hướng đáng chú ý

| Xu hướng | Nguồn tín hiệu | Giá trị tham khảo cho nhà phát triển |
|:---|:---|:---|
| **"Nội dung suy luận" trở thành chiến trường tương thích mới** | Pi #4251/#4514, DeepSeek #1680, Kimi #2077 | Công cụ CLI đa mô hình cần trừu tượng hóa vòng đời reasoning_content (tiêm vào/trả về/làm sạch), tránh logic provider mã hóa cứng |
| **Chẩn đoán bộ nhớ chuyển từ "đoán dựa trên nhật ký" sang "có công cụ"** | Qwen `/doctor memory` + `/stuck`, OpenCode #20695 megathread | Cơ sở hạ tầng quan sát cần thiết cho Agent hội thoại dài, khuyến nghị lên kế hoạch trước giám sát heap ép, lưới an toàn nén tự động |
| **Tính minh bạch chi phí từ chức năng trở thành cơ sở hạ tầng niềm tin** | Claude Code dự báo ngữ cảnh, DeepSeek chi tiết Token, Kimi usage --json | Chỉ số quan trọng cho quyết định mua hàng của doanh nghiệp, công cụ CLI cần hỗ trợ truy vấn chi phí theo chương trình (JSON/API) |
| **Chế độ "sửa lỗi tự tổ chức cộng đồng" có hai mặt** | Kimi ktwu01 và 3 người khác 9 PR, tỷ lệ đóng góp viên OpenCode cao | Công cụ mã nguồn mở cần thiết lập SLA phản hồi xem xét của maintainer, nếu không sẽ mất đóng góp; Lựa chọn của doanh nghiệp cần đánh giá mức độ đầu tư của chính thức |
| **Quy trình làm việc từ xa/bất đồng bộ từ "có" sang "đáng tin cậy"** | Codex kiểm soát từ xa gặp sự cố ngay khi ra mắt, Claude #34255 chưa được giải quyết lâu dài | Kịch bản không giám sát cần tự phục hồi kết nối lại + đồng bộ trạng thái + không mất tin nhắn, thiết kế kiến trúc cần dự đoán chế độ lỗi |
| **Chế độ phê duyệt từ "YOLO" sang "phân loại rủi ro chi tiết"** | Gemini thay thế `--yolo` bằng `--full-access`, bộ phân loại LLM chế độ Auto của Qwen | Chuyên môn hóa thuật ngữ bảo mật + đánh giá rủi ro động trở thành tiêu chuẩn, thiết lập quyền tĩnh khó đáp ứng tuân thủ doanh nghiệp |
| **Nền tảng Windows tập thể hóa thành "công dân hạng hai"** | Claude #47104, Codex Gatekeeper, DeepSeek WSL treo máy, Gemini PTY stream lỗi | Tính nhất quán đa nền tảng vẫn là điểm yếu của ngành, triển khai Windows doanh nghiệp cần dự phòng chi phí thích ứng bổ sung |

---

*Báo cáo được tạo dựa trên dữ liệu cộng đồng công khai của từng công cụ vào ngày 2026-05-16, dữ liệu được trích xuất từ hoạt động GitHub công khai của ngày đó.*

---

## Báo cáo Chi tiết từng Công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Điểm Nóng Cộng đồng Claude Code Skills

> Nguồn dữ liệu: [anthropics/skills](https://github.com/anthropics/skills)

# Báo cáo Điểm Nóng Cộng đồng Claude Code Skills (2026-05-16)

---

## 1. Xếp hạng Skills Phổ biến (theo mức độ quan tâm của cộng đồng)

| Hạng | Skill | Mô tả chức năng | Trạng thái | Liên kết |
|:---|:---|:---|:---|:---|
| 1 | **document-typography** | Kiểm soát chất lượng định dạng tài liệu do AI tạo ra: ngăn chặn cô đơn dòng, cô đơn từ, lỗi đánh số,... | 🔵 Mở | [PR #514](https://github.com/anthropics/skills/pull/514) |
| 2 | **ODT** | Tạo văn bản OpenDocument, điền mẫu và chuyển đổi ODT → HTML, dành cho quy trình làm việc tài liệu tiêu chuẩn mở/ISO | 🔵 Mở | [PR #486](https://github.com/anthropics/skills/pull/486) |
| 3 | **frontend-design** | Cải thiện độ rõ ràng và khả năng thực thi của Skill thiết kế frontend, đảm bảo các chỉ dẫn thiết kế có thể hoàn thành trong một lượt hội thoại | 🔵 Mở | [PR #210](https://github.com/anthropics/skills/pull/210) |
| 4 | **skill-quality-analyzer / skill-security-analyzer** | Công cụ phân tích kép: Đánh giá chất lượng Skill (cấu trúc, tài liệu, khả năng bảo trì) và kiểm tra bảo mật (phụ thuộc, tấn công chèn, quyền) | 🔵 Mở | [PR #83](https://github.com/anthropics/skills/pull/83) |
| 5 | **testing-patterns** | Hệ thống kiểm thử toàn diện: Mô hình Testing Trophy, kiểm thử thành phần React, chiến lược kiểm thử tích hợp/đầu cuối | 🔵 Mở | [PR #723](https://github.com/anthropics/skills/pull/723) |
| 6 | **ServiceNow platform** | Trợ lý nền tảng ServiceNow cấp doanh nghiệp, bao gồm ITSM/ITOM/SecOps/FSM/SPM/CSDM/IntegrationHub | 🔵 Mở | [PR #568](https://github.com/anthropics/skills/pull/568) |
| 7 | **AURELION suite** | Khung nhận thức bốn lớp: Mẫu tư duy có cấu trúc (kernel), chế độ cố vấn, điều phối Agent, hệ thống ghi nhớ bền vững | 🔵 Mở | [PR #444](https://github.com/anthropics/skills/pull/444) |
| 8 | **sensory** | Tự động hóa macOS gốc (AppleScript/osascript), thay thế cách sử dụng máy tính chụp màn hình, hai cấp quyền | 🔵 Mở | [PR #806](https://github.com/anthropics/skills/pull/806) |

**Điểm thảo luận nóng**: document-typography giải quyết "dặm cuối cùng" trải nghiệm tài liệu do AI tạo ra; AURELION và shodh-memory đại diện cho sự khám phá sâu sắc của cộng đồng về **ghi nhớ bền vững và kiến trúc nhận thức**; ServiceNow phản ánh nhu cầu mạnh mẽ về tích hợp ITSM doanh nghiệp.

---

## 2. Xu hướng nhu cầu cộng đồng (Trích xuất từ Issues)

| Hướng | Issue đại diện | Yêu cầu cốt lõi |
|:---|:---|:---|
| **Chia sẻ Skill cấp tổ chức** | [#228](https://github.com/anthropics/skills/issues/228) | Chia sẻ trực tiếp kho Skill trong doanh nghiệp, thay thế quy trình thủ công gửi tệp qua Slack/Teams + tải lên từng người |
| **Tương thích giao thức MCP** | [#16](https://github.com/anthropics/skills/issues/16) | Công khai Skills dưới dạng công cụ MCP, chuẩn hóa ranh giới API phần mềm AI |
| **Ranh giới bảo mật và niềm tin** | [#492](https://github.com/anthropics/skills/issues/492) | Skills cộng đồng lạm dụng không gian tên `anthropic/`, cần phòng chống tấn công lừa đảo và nâng cao quyền |
| **Cơ sở hạ tầng kiểm thử và đánh giá** | [#556](https://github.com/anthropics/skills/issues/556) | Tỷ lệ kích hoạt `run_eval.py` 0% làm lộ khuyết điểm kỹ thuật của hệ thống đánh giá Skill |
| **Quản lý vòng đời Skill** | [#62](https://github.com/anthropics/skills/issues/62), [#189](https://github.com/anthropics/skills/issues/189) | Chống mất, loại bỏ trùng lặp, kiểm soát phiên bản — khả năng vận hành của Skill như một tài sản sản xuất |
| **Triển khai đa đám mây/doanh nghiệp** | [#29](https://github.com/anthropics/skills/issues/29), [#532](https://github.com/anthropics/skills/issues/532) | Tương thích Bedrock, người dùng doanh nghiệp SSO không cần API Key |

---

## 3. Skills tiềm năng cao chờ hợp nhất (Bình luận sôi nổi + Giải quyết rõ ràng điểm đau)

| Skill | Tiềm năng hợp nhất | Cơ sở đánh giá chính |
|:---|:---|:---|
| **document-typography** ⭐ | **Cực cao** | Tính phổ biến cao, không phụ thuộc, giải quyết các điểm đau chung của tất cả tài liệu do AI tạo ra, tác giả liên tục cập nhật |
| **ODT** | Cao | Lấp đầy khoảng trống hệ sinh thái LibreOffice/OpenDocument, bổ sung cho Skills docx/pdf hiện có |
| **testing-patterns** | Cao | Kiểm thử là nhu cầu cao sau khi tạo mã, PR có cấu trúc đầy đủ bao phủ toàn diện |
| **sensory** | Trung bình cao | Tự động hóa macOS là giải pháp thay thế nhẹ nhàng cho computer use, mô hình quyền được thiết kế trưởng thành |
| **faf-context** | Trung bình | Định dạng tệp `.faf` đổi mới (ngữ cảnh dự án giữa package.json ↔ README.md), nhưng cần cộng đồng chấp nhận |
| **AppDeploy** | Trung bình | Vòng lặp triển khai toàn diện, nhưng tính bền vững của dịch vụ bên ngoài [appdeploy.ai](https://appdeploy.ai/) còn nghi vấn |

> **PR sửa lỗi đáng chú ý**: Lubrsy706 liên tục gửi [#538](https://github.com/anthropics/skills/pull/538) (PDF chữ hoa chữ thường), [#541](https://github.com/anthropics/skills/pull/541) (xung đột ID DOCX), [#539](https://github.com/anthropics/skills/pull/539) (phân tích YAML), cho thấy chi tiết kỹ thuật của Skills tài liệu đang được mài giũa nhanh chóng.

---

## 4. Cái nhìn sâu sắc về Hệ sinh thái Skills

> **Nhu cầu tập trung nhất của cộng đồng: Từ "có thể tạo" đến "có thể cộng tác" — Skills cần có các thuộc tính sản xuất có thể chia sẻ, kiểm toán và đánh giá ở cấp tổ chức, thay vì là một tập hợp các tập lệnh cá nhân.**

Cụ thể thể hiện ở ba bước nhảy vọt:
- **Cấp độ cá nhân** → Ghi nhớ bền vững (shodh-memory / AURELION) và cấu trúc hóa nhận thức
- **Cấp độ nhóm** → Thị trường Skill nội bộ tổ chức và quản trị quyền (#228 / #492)
- **Cấp độ kỹ thuật** → Đánh giá tỷ lệ kích hoạt có thể định lượng (#556) và kết nối giao thức tiêu chuẩn (MCP)

---

*Báo cáo dựa trên dữ liệu công khai của github.com/anthropics/skills, tính đến ngày 2026-05-16.*

---

# Cập nhật Cộng đồng Claude Code Nhật ký 2026-05-16

## Lướt nhanh hôm nay

Anthropic phát hành **v2.1.143**, tập trung tăng cường quản lý phụ thuộc plugin và minh bạch chi phí; cộng đồng tiếp tục tập trung vào **ổn định plugin MCP**, **độ tin cậy kết nối đa nền tảng** và **tối ưu hóa trải nghiệm TUI/IDE**, báo cáo sự cố nền tảng Windows tăng đáng kể.

---

## Phát hành Phiên bản

### [v2.1.143](https://github.com/anthropics/claude-code/releases/tag/v2.1.143)

| Mục cập nhật | Mô tả |
|--------|------|
| **Kiểm tra bắt buộc các phụ thuộc plugin** | `claude plugin disable` hiện sẽ ngăn chặn việc vô hiệu hóa các mục tiêu đang được các plugin khác phụ thuộc, và cung cấp gợi ý chuỗi vô hiệu hóa có thể sao chép; `claude plugin enable` tự động buộc kích hoạt các phụ thuộc bắc cầu |
| **Dự báo chi phí ngữ cảnh** | Thêm hiển thị dự báo chi phí ngữ cảnh một lượt và tích lũy (cắt bỏ tóm tắt, nội dung đầy đủ xem trong bản phát hành) |

> Quản trị phụ thuộc của hệ sinh thái plugin bước vào giai đoạn mới, rất quan trọng đối với các kịch bản cộng tác đa plugin.

---

## Issues Nóng cộng đồng (Chọn lọc 10 mục)

| # | Trạng thái | Tiêu đề | Ảnh hưởng cốt lõi | Phản hồi cộng đồng |
|---|------|------|---------|---------|
| [#34255](https://github.com/anthropics/claude-code/issues/34255) | 🔴 MỞ | Remote Control tự động kết nối lại không hoạt động (macOS/iOS) | Phiên từ xa bị ngắt kết nối im lặng không phục hồi, ảnh hưởng nghiêm trọng đến quy trình làm việc di động/từ xa | **37 bình luận / 75 👍** , vấn đề tồn tại lâu dài với lượt bình chọn cao |
| [#15631](https://github.com/anthropics/claude-code/issues/15631) | 🔴 MỞ | Không thể vô hiệu hóa lịch sử lệnh liên phiên làm việc | Rủi ro tuân thủ trong các kịch bản nhạy cảm về quyền riêng tư (thiết bị chia sẻ, trình diễn) | **15 bình luận / 17 👍** , trùng lặp nhưng vẫn hoạt động |
| [#36800](https://github.com/anthropics/claude-code/issues/36800) | 🔴 MỞ | Plugin kênh MCP tạo lại nhiều lần gây xung đột 409 | Plugin như Telegram tự động tạo bản sao trong khi chạy, mất đăng ký công cụ | **14 bình luận** , bao gồm phân tích nguyên nhân và khắc phục chi tiết |
| [#47104](https://github.com/anthropics/claude-code/issues/47104) | 🔴 MỞ | Sau khi cập nhật Windows 11, Cowork/Connectors/Claude Code hoàn toàn bị sập | ERR_CONNECTION_RESET + OAuthError, có vẻ là vấn đề tương thích cập nhật | **12 bình luận** , người dùng Windows tập trung phản hồi |
| [#14836](https://github.com/anthropics/claude-code/issues/14836) | 🔴 MỞ | `/skills` không hỗ trợ thư mục liên kết tượng trưng | Người dùng phát triển thường sử dụng symlink để sắp xếp kho kỹ năng, chức năng bị thiếu | **8 bình luận / 34 👍** , nhu cầu thực tế có lượt bình chọn cao |
| [#58597](https://github.com/anthropics/claude-code/issues/58597) | ✅ ĐÃ ĐÓNG | Chế độ xem Agent có thể cấu hình hành vi worktree git | Việc tạo worktree bắt buộc của Agent Worker quá nặng, cần kiểm soát linh hoạt | **8 bình luận / 9 👍** , đã đóng nhưng cần theo dõi giải pháp |
| [#29058](https://github.com/anthropics/claude-code/issues/29058) | 🔴 MỞ | Phiên MCP Docker không dừng sau khi kết thúc | Rò rỉ tài nguyên, áp lực đĩa/bộ nhớ trên máy chạy thời gian dài | **7 bình luận** , điểm đau vận hành hạ tầng |
| [#59163](https://github.com/anthropics/claude-code/issues/59163) | 🔴 MỞ | Sau phiên dài, TUI tích hợp VS Code bị hỏng ký tự | Lỗi hiển thị ký tự glyph, ảnh hưởng đến phiên mã hóa dài | **5 bình luận** , vấn đề quay trở lại từ v2.1.141 |
| [#53454](https://github.com/anthropics/claude-code/issues/53454) | 🔴 MỞ | Mô hình sử dụng quá mức từ "load-bearing" | Hành vi mô hình bất thường, chất lượng và phong cách đầu ra có vấn đề | **5 bình luận / 8 👍** , thú vị nhưng phản ánh vấn đề tinh chỉnh |
| [#59572](https://github.com/anthropics/claude-code/issues/59572) | 🔴 MỞ | Bộ đếm tuần gói Max đột ngột về 0 giữa chu kỳ | Khủng hoảng minh bạch thanh toán, niềm tin người dùng bị tổn hại | **3 bình luận** , nhận được sự quan tâm ngay sau khi tạo |

---

## Tiến trình PR Quan trọng (Chọn lọc 3 mục, chỉ có 3 mục cập nhật thực tế)

| # | Trạng thái | Tiêu đề | Giá trị kỹ thuật |
|---|------|------|---------|
| [#59508](https://github.com/anthropics/claude-code/pull/59508) | 🟡 MỞ | Sửa lỗi dương tính giả của bộ xác thực lệnh bash | Cải thiện độ tin cậy của ví dụ hook bảo mật bằng cách giải quyết vấn đề bỏ qua xác minh của lệnh pipe `grep` với đường dẫn `rm -rf` |
| [#59495](https://github.com/anthropics/claude-code/pull/59495) | ✅ ĐÃ ĐÓNG | Sửa lỗi viết hoa chữ thường GitHub README | Sửa lỗi quy cách thương hiệu, đã được hợp nhất |
| [#59275](https://github.com/anthropics/claude-code/pull/59275) | 🟡 MỞ | Thêm plugin phiên `/new` | Lấp đầy khoảng trống giữa `/clear` (xóa ngữ cảnh) và `/branch` (fork lịch sử), hỗ trợ khởi tạo phiên mới thực sự, ngữ nghĩa quy trình làm việc rõ ràng hơn |

---

## Xu hướng Nhu cầu Chức năng

Dựa trên phân tích nhóm 50 Issues đang hoạt động:

| Hướng | Mức độ phổ biến | Nhu cầu điển hình |
|------|------|---------|
| **Ổn định hệ sinh thái MCP** | 🔥🔥🔥🔥🔥 | Quản lý vòng đời plugin, dọn dẹp container, tính nhất quán API đa kênh (proxy AskUserQuestion), đồng bộ trạng thái xác thực |
| **Tích hợp IDE/trình soạn thảo** | 🔥🔥🔥🔥🔥 | Xử lý liên kết mở rộng VS Code, ngắt luồng, hiển thị terminal; Độ tin cậy chế độ Cowork |
| **Quy trình làm việc từ xa và đa thiết bị** | 🔥🔥🔥🔥 | Kết nối lại Remote Control, đồng bộ phiên đa thiết bị, trải nghiệm di động |
| **Minh bạch chi phí và hạn ngạch** | 🔥🔥🔥🔥 | Độ chính xác bộ đếm, cầu chì vô hạn cho `/goal`, phản hồi chi phí ngữ cảnh theo thời gian thực |
| **Chi tiết tương tác TUI** | 🔥🔥🔥 | Cách ly lịch sử, đánh cắp tiêu điểm gợi ý quyền, phong phú nội dung thông báo, hiển thị Markdown hoàn chỉnh |
| **Quản trị quy trình làm việc Agent** | 🔥🔥🔥 | Lưu trữ Agent thay vì hủy bỏ, có thể cấu hình chiến lược worktree, thao tác nghịch đảo chế độ nền |

---

## Quan điểm của Nhà phát triển

### 🔴 Điểm đau Tần suất cao

1. **Chất lượng suy giảm trên nền tảng Windows** — Các vấn đề tập trung như #47104, #59559, #55021 bùng nổ, sự cố xác thực/kết nối/hiệu suất ba lần sau cập nhật, niềm tin vào việc triển khai Windows doanh nghiệp bị lung lay
2. **"Instance ma" MCP và rò rỉ tài nguyên** — Tạo lại trùng lặp #36800, container Docker sót lại #29058, độ bền vững của kiến trúc plugin trở thành nút thắt cổ chai
3. **Độ tin cậy của hệ thống thanh toán** — Reset bộ đếm bất thường #59572, báo cáo sai 429 #42616, người dùng gói Max/Pro nhạy cảm với tính công bằng khi thanh toán

### 🟡 Nhu cầu chưa được đáp ứng

4. **Vòng lặp hoàn chỉnh quy trình làm việc từ xa/bất đồng bộ** — Yêu cầu #59245 hỗ trợ proxy kênh MCP cho AskUserQuestion, #34255 yêu cầu tự phục hồi Remote Control, tất cả đều hướng đến kịch bản "không giám sát"
5. **Quản lý vòng đời phiên chi tiết** — Lệnh `/new` (#59275), lưu trữ Agent (#58966), cách ly lịch sử liên phiên làm việc (#15631), người dùng cần kiểm soát ngữ cảnh chi tiết hơn hiện tại

### 💡 Tín hiệu Tích cực

- **Kiểm tra bắt buộc các phụ thuộc plugin** trong v2.1.143 cho thấy Anthropic đang nhìn nhận sự phức tạp của hệ sinh thái
- **Dự báo chi phí ngữ cảnh** đáp ứng yêu cầu về tính minh bạch được kêu gọi lâu dài, nhưng việc triển khai đầy đủ cần được theo dõi

---

*Nhật ký hàng ngày được tạo dựa trên dữ liệu công khai trên GitHub, không đại diện cho lập trường chính thức của Anthropic.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Cập nhật OpenAI Codex Nhật ký 2026-05-16

---

## 1. Lướt nhanh hôm nay

Cộng đồng Codex hôm nay tập trung vào **triển khai và sửa lỗi quy mô lớn chức năng kiểm soát từ xa** — các vấn đề về kết nối từ xa iOS/desktop, ghép nối máy chủ SSH, quy trình ủy quyền tập trung bùng nổ, đồng thời CLI ra mắt ba phiên bản lặp lại nhanh chóng trong loạt `v0.131.0-alpha`. Tái cấu trúc kiến trúc hệ thống quyền đang tăng tốc, di chuyển sandbox Windows và hồ sơ quyền được đặt tên (Named Permission Profiles) trở thành hướng kỹ thuật cốt lõi.

---

## 2. Phát hành Phiên bản

| Phiên bản | Mô tả |
|:---|:---|
| **rust-v0.131.0-alpha.22** | Phiên bản phát hành trước CLI Rust đang lặp lại nhanh chóng, dự kiến bao gồm sửa lỗi ổn định kiểm soát từ xa |
| **rust-v0.131.0-alpha.21** | — |
| **rust-v0.131.0-alpha.19** | — |

> Lưu ý: Ba phiên bản alpha được phát hành liên tục trong vòng 24 giờ, tốc độ rất nhanh, khuyến nghị thận trọng khi theo dõi trong môi trường sản xuất.

---

## 3. Issues Nóng cộng đồng

### 🔴 Kiểm soát từ xa: Triển khai chức năng và lỗi đồng thời

| # | Issue | Trạng thái | Vấn đề cốt lõi | Phản hồi cộng đồng |
|:---|:---|:---|:---|:---|
| **[#9224](https://github.com/openai/codex/issues/9224)** | Codex Remote Control | ✅ ĐÃ ĐÓNG | Yêu cầu điều khiển CLI desktop từ ứng dụng ChatGPT trên điện thoại, **đã đóng nghĩa là chức năng đã trực tuyến** | 👍 **401** — Một trong những yêu cầu có lượt bình chọn cao nhất trong lịch sử, đóng ngày hôm nay đánh dấu một cột mốc |
| **[#22696](https://github.com/openai/codex/issues/22696)** | Failed to authorize remote control | 🔴 MỞ | Người dùng Pro sau khi cập nhật không thể hoàn tất ủy quyền kiểm soát từ xa, chặn sử dụng | 26 bình luận, 45 👍, lỗi nghiêm trọng cần sửa gấp |
| **[#22700](https://github.com/openai/codex/issues/22700)** | Sau khi thu hồi quyền truy cập thiết bị, bản ghi kết nối trên iOS vẫn còn, không thể ghép nối lại | 🔴 MỞ | Khuyết điểm đồng bộ trạng thái quản lý thiết bị, ảnh hưởng người dùng đa thiết bị | 15 bình luận, khả năng sử dụng kiểm soát từ xa trên iOS bị tổn hại |
| **[#22701](https://github.com/openai/codex/issues/22701)** | Chế độ chỉnh sửa trong Kết nối iOS không có tùy chọn xóa | 🔴 MỞ | Không thể xóa kết nối CLI cũ, giao diện người dùng thiếu chức năng cơ bản | 4 bình luận, vấn đề chi tiết trải nghiệm |
| **[#22831](https://github.com/openai/codex/issues/22831)** | Kết nối từ xa SSH liên tục bị ngắt kết nối "Network connection was lost" | 🔴 MỞ | Vấn đề ổn định kết nối SSH từ xa, khả năng tương thích đa nền tảng | 2 bình luận, người dùng máy chủ Linux bị chặn |
| **[#22857](https://github.com/openai/codex/issues/22857)** | Kết nối từ xa SSH cần hỗ trợ xác thực khóa tốt hơn | 🔴 MỞ | Hiện chỉ hỗ trợ mật khẩu, thiếu các giải pháp cấp doanh nghiệp như chuyển tiếp khóa/Agent | 1 bình luận, nhu cầu bảo mật của người dùng doanh nghiệp |

### 🟡 Nền tảng và Hiệu suất

| # | Issue | Trạng thái | Vấn đề cốt lõi | Phản hồi cộng đồng |
|:---|:---|:---|:---|:---|
| **[#11023](https://github.com/openai/codex/issues/11023)** | Codex desktop app for Linux | 🔴 MỞ | Yêu cầu ứng dụng desktop gốc cho Linux, vấn đề tiêu thụ điện năng trên Mac buộc phải chuyển đổi | 55 bình luận, **204 👍** , chưa được giải quyết trong thời gian dài |
| **[#22694](https://github.com/openai/codex/issues/22694)** | Computer Use phụ thuộc cứng vào macOS 26.0 | 🔴 MỞ | Ngưỡng phiên bản hệ thống không được ghi lại, người dùng hệ thống cũ bị sập | 12 bình luận, khuyết điểm tài liệu và tương thích |
| **[#17447](https://github.com/openai/codex/issues/17447)** | CLI v0.120+ bị Gatekeeper chặn trên macOS 26.4.1 | 🔴 MỞ | Phân phối Homebrew Cask thiếu chứng thực Apple, khởi động bị treo | 10 bình luận, xung đột chính sách bảo mật và quy trình phân phối |
| **[#11626](https://github.com/openai/codex/issues/11626)** | CLI `/rewind` cần khôi phục cả hội thoại và chỉnh sửa mã | 🔴 MỞ | Hiện chỉ hoàn nguyên hội thoại, thay đổi mã nguồn vẫn còn, phá vỡ khả năng đảo ngược | 29 bình luận, 130 👍 , khuyết điểm thiết kế tương tác cốt lõi |

---

## 4. Tiến trình PR Quan trọng

### Kiểm soát từ xa và Kiến trúc thực thi

| # | PR | Tác giả | Nội dung cốt lõi |
|:---|:---|:---|:---|
| **[#22769](https://github.com/openai/codex/pull/22769)** | exec-server: support auth-backed remote executor registration | miz-openai | Đăng ký máy chủ thực thi từ xa chuyển từ thông tin xác thực registry sang xác thực Codex tiêu chuẩn, đơn giản hóa việc triển khai và tăng cường bảo mật |
| **[#22878](https://github.com/openai/codex/pull/22878)** | Improve `codex remote-control` CLI UX | owenlin0 | Kiểm soát từ xa mặc định chạy ở tiền cảnh, hiển thị thông tin trạng thái, Ctrl-C để thoát; `--daemon` giữ chế độ nền |
| **[#22510](https://github.com/openai/codex/pull/22510)** | [3/3] Sync TUI next-turn state | etraut-openai | Chương cuối đồng bộ trạng thái TUI đa client: các thay đổi về mô hình, chế độ kế hoạch, quyền,... được phát sóng theo thời gian thực |
| **[#22509](https://github.com/openai/codex/pull/22509)** | [2/3] Add app-server next-turn state API | etraut-openai | Thêm API v2 hỗ trợ cập nhật cài đặt mặc định cho lượt tiếp theo mà không cần khởi động lượt |

### Tái cấu trúc Hệ thống Quyền (Named Permission Profiles)

| # | PR | Tác giả | Nội dung cốt lõi |
|:---|:---|:---|:---|
| **[#22920](https://github.com/openai/codex/pull/22920)** | core: set permission profiles from snapshots | bolinfest | Khôi phục hồ sơ quyền (`ActivePermissionProfile`) chính xác khi khôi phục snapshot, tránh mất danh tính do trạng thái quyền ẩn danh |
| **[#22924](https://github.com/openai/codex/pull/22924)** | app-server-protocol: remove PermissionProfile from API | bolinfest | ✅ **Đã hợp nhất** — API chỉ hiển thị mã định danh hồ sơ quyền, ẩn mô hình runtime cơ bản, giảm độ phức tạp cho client |
| **[#22923](https://github.com/openai/codex/pull/22923)** | windows-sandbox: drive write roots from resolved permissions | bolinfest | Di chuyển SandboxPolicy sang PermissionProfile cho Windows sandbox lần thứ ba: phân giải đường dẫn ghi |
| **[#22896](https://github.com/openai/codex/pull/22896)** | windows-sandbox: add resolved permissions helper | bolinfest | Giới thiệu lớp cầu nối `ResolvedWindowsSandboxPermissions`, cô lập các giả định cũ |
| **[#22918](https://github.com/openai/codex/pull/22918)** | windows-sandbox: send permission profiles to elevated runner | bolinfest | Di chuyển ranh giới IPC tiến trình lên `PermissionProfile`, mở kênh thực thi quyền cao |
| **[#21559](https://github.com/openai/codex/pull/21559)** | tui: add named permission profile picker | viyatb-oai | `/permissions` trong TUI hỗ trợ chế độ hồ sơ đặt tên, tránh ghi đè cấu hình người dùng bằng cài đặt ẩn danh |

### Khả năng mở rộng và Hệ thống Hook

| # | PR | Tác giả | Nội dung cốt lõi |
|:---|:---|:---|:---|
| **[#22782](https://github.com/openai/codex/pull/22782)** | Add SubagentStart hook | abhininav-oai | Kích hoạt trước yêu cầu mô hình đầu tiên sau khi tạo subagent, hỗ trợ xử lý theo `agent_type` |
| **[#22873](https://github.com/openai/codex/pull/22873)** | Add SubagentStop hook | abhininav-oai | Kích hoạt trước khi lượt của subagent kết thúc, bổ sung ngữ cảnh như `agent_id` / `parent_turn_id` |
| **[#22679](https://github.com/openai/codex/pull/22679)** | Support audio input | fjord-oai | Chuyển đổi khối nội dung âm thanh MCP sang định dạng đầu ra có cấu trúc của API Responses, kiểm soát khả năng của mô hình |

---

## 5. Xu hướng Nhu cầu Chức năng

```
Kiểm soát từ xa  ████████████████████████████████████████  Giai đoạn bùng nổ
├── Ghép nối và ủy quyền điện thoại ↔ desktop/CLI
├── Khám phá máy chủ SSH và xác thực khóa
├── Đồng bộ và dọn dẹp trạng thái đa thiết bị
└── Độ ổn định kết nối đa nền tảng (ngắt kết nối iOS-Linux)

Quyền và Sandbox  ██████████████████████████████░░░░░░░░░░  Giai đoạn nâng cấp kiến trúc
├── Di chuyển toàn diện Named Permission Profiles
├── Dọn dẹp nợ cũ của sandbox Windows
└── Thống nhất trình chọn quyền TUI/desktop

Bao phủ nền tảng    ██████████████████████████░░░░░░░░░░░░░░░░  Nhu cầu dài hạn
├── Ứng dụng desktop Linux (lượt bình chọn cao nhất lịch sử 204👍)
├── Cấu hình shell proxy Windows (Git Bash)
└── Ngưỡng phiên bản macOS (Computer Use)

Khả năng đảo ngược và Niềm tin ██████████████████░░░░░░░░░░░░░░░░░░░░░░  Chuyên sâu trải nghiệm
├── Khôi phục trạng thái toàn diện /rewind (hội thoại+mã)
├── Mở rộng hệ thống hook (SubagentStart/Stop)
└── Tiêu chuẩn hóa yêu cầu cài đặt IDE
```

---

## 6. Quan điểm của Nhà phát triển

| Điểm đau | Biểu hiện | Ảnh hưởng |
|:---|:---|:---|
| **Kiểm soát từ xa "có thể dùng nhưng khó dùng"** | Lỗi ủy quyền, sót lại thiết bị, kết nối lại, thiếu khóa | Chức năng cốt lõi vừa ra mắt, gặp sự cố quy mô lớn ngay ngày đầu |
| **Ma sát chính sách bảo mật phân phối macOS** | Thiếu chứng thực Gatekeeper, không tìm thấy ký hiệu dyld, ngưỡng phiên bản cứng | Cản trở ý định nâng cấp, rủi ro tuân thủ khi triển khai doanh nghiệp |
| **Đau đớn khi di chuyển hệ thống quyền** | Thay đổi API gây lỗi, độ trễ đồng bộ trạng thái TUI, cấu hình lệch pha | Trải nghiệm người dùng không nhất quán trong kịch bản đa client |
| **Vị thế công dân hạng hai của Linux** | Không có ứng dụng desktop, tràn tham số sandbox bubblewrap, ưu tiên kết nối từ xa cho Debian | Bỏ qua nhóm người dùng máy chủ chính |
| **Hành vi mô hình không kiểm soát được** | GPT-5.3 gọi web search vô nghĩa lặp lại, cửa sổ giới hạn tốc độ hiển thị sai | Tiêu tốn hạn ngạch, chất lượng đầu ra giảm |

---

*Nhật ký hàng ngày được tạo dựa trên dữ liệu công khai của GitHub, số lượng bình luận PR là `undefined` biểu thị trường này không trả về giá trị hợp lệ.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Cập nhật Gemini CLI Nhật ký 2026-05-16

## Lướt nhanh hôm nay

Gemini CLI hôm nay đã phát hành phiên bản nightly v0.44.0, tập trung tăng cường khả năng gỡ lỗi RAG và ổn định xác thực doanh nghiệp. Mức độ hoạt động của cộng đồng cao, với 50 Issues và 50 PR được cập nhật trong 24 giờ qua, tập trung cốt lõi vào độ tin cậy của Agent, chất lượng hệ thống bộ nhớ và sửa lỗi tương thích nền tảng Windows/WSL.

---

## Phát hành Phiên bản

### [v0.44.0-nightly.20260515.g928a311fb](https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0-nightly.20260515.g928a311fb)

| Loại cập nhật | Nội dung |
|---------|------|
| **feat(core)** | Phơi bày các đoạn mã RAG vào tệp nhật ký cục bộ, thuận tiện cho việc gỡ lỗi và theo dõi nguồn ngữ cảnh được tăng cường bởi truy xuất |
| **fix(acp/auth)** | Sửa lỗi xung đột thông tin xác thực trong kịch bản cổng doanh nghiệp, hỗ trợ cấu hình API Key tùy chọn gốc |

---

## Issues Nóng cộng đồng

| # | Issue | Mức độ ưu tiên | Điểm cốt lõi | Phản hồi cộng đồng |
|---|------|--------|---------|---------|
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Đánh giá đọc tệp AST-aware và ánh xạ kho mã nguồn | P2 | Khám phá việc đọc chính xác ranh giới phương thức thông qua AST, giảm lãng phí token, có khả năng tăng đáng kể hiệu quả hiểu mã của Agent | 7 bình luận, sự tham gia sâu sắc của người bảo trì vào nghiên cứu kỹ thuật |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Agent đa năng bị treo vô hạn | **P1** | Proxy phụ bị kẹt hoàn toàn sau khi ủy quyền, thậm chí các tác vụ đơn giản như tạo thư mục cũng không hoàn thành, ảnh hưởng nghiêm trọng đến khả năng sử dụng cơ bản | 7 bình luận, 7 👍 , phản hồi mạnh mẽ từ người dùng |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Tăng cường độ bền của hệ thống đánh giá thành phần | **P1** | 76 bài kiểm tra đánh giá hành vi hiện tại cần tiến hóa từ "có thể chạy" sang "đáng tin cậy", thiết lập đường cơ sở chất lượng có thể theo dõi | 6 bình luận, nợ cốt lõi của cơ sở hạ tầng đánh giá |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Cắt ngắn MAX_TURNS của proxy phụ bị báo cáo sai là thành công | **P1** | `codebase_investigator` đạt số lượt tối đa nhưng vẫn trả về thành công `GOAL`, che giấu sự thật bị gián đoạn khiến người dùng đánh giá sai | 6 bình luận, 2 👍 , khuyết điểm cốt lõi về độ tin cậy |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Mô hình không chủ động sử dụng Skills và proxy phụ | **P1** | Ngay cả khi người dùng đã cấu hình Skills như gradle/git, mô hình cũng không tự động gọi, chỉ có hiệu lực khi có chỉ dẫn rõ ràng | 6 bình luận, nút thắt cổ chai trong việc áp dụng hệ sinh thái Skill |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Proxy trình duyệt bị sập trong môi trường Wayland | **P1** | Người dùng Wayland trên Linux không thể sử dụng chức năng tự động hóa trình duyệt, kết thúc do `GOAL` nhưng thực tế thất bại | 4 bình luận, 1 👍 , khả năng tương thích desktop Linux |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Giả treo sau khi thực thi lệnh Shell "chờ nhập liệu" | **P1** | Sau khi lệnh đơn giản hoàn thành, giao diện người dùng vẫn hiển thị "Chờ người dùng nhập", chặn quy trình làm việc | 3 bình luận, 3 👍 , vấn đề trải nghiệm gặp phải thường xuyên |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | Mô hình tạo tệp tạm thời một cách ngẫu nhiên | P2 | Sau khi thực thi Shell, mô hình tạo tập lệnh chỉnh sửa ở nhiều thư mục, khó dọn dẹp ảnh hưởng đến việc cam kết mã | 3 bình luận, vấn đề ô nhiễm không gian làm việc |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Bảo mật nhật ký Auto Memory: Tẩy xóa xác định | P2 | Việc tẩy xóa mô hình xảy ra sau khi nội dung đã vào ngữ cảnh, máy chủ vẫn có thể ghi lại thông tin nhạy cảm, cần tẩy xóa xác định trước | 2 bình luận, tuân thủ bảo mật doanh nghiệp quan trọng |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Agent nên ngăn chặn/khuyên can các thao tác phá hoại | P2 | Lệnh nguy hiểm như `git reset --force` thiếu rào cản bảo mật, các kịch bản sửa đổi DB cần nhận thức rủi ro | 2 bình luận, 1 👍 , thiết kế ranh giới bảo mật AI |

---

## Tiến trình PR Quan trọng

| # | PR | Mức độ ưu tiên | Chức năng/Sửa lỗi | Phạm vi ảnh hưởng |
|---|-----|--------|------------|---------|
| [#27131](https://github.com/google-gemini/gemini-cli/pull/27131) | **P1** | Định tuyến người dùng OAuth cá nhân tới mô hình ổn định | Sửa lỗi `auto-gemini-3` alias được phân giải thành mô hình không hợp lệ dưới dạng OAuth cá nhân gây lỗi 404/400 | Hệ thống xác thực và định tuyến mô hình |
| [#27025](https://github.com/google-gemini/gemini-cli/pull/27025) | **P1** | Xử lý đường dẫn Windows trong môi trường WSL | Tự động chuyển đổi đường dẫn ký tự ổ đĩa Windows thành đường dẫn gắn kết WSL, giữ nguyên hành vi môi trường không phải WSL | Khả năng tương thích đa nền tảng |
| [#27123](https://github.com/google-gemini/gemini-cli/pull/27123) | **P1** | Xóa thông tin xác thực chuỗi khóa một cách idempotent | Khi thiếu thông tin xác thực được coi là đã xóa, tránh lỗi giữa chừng trong `clearAll()`, sửa lỗi [#21768](https://github.com/google-gemini/gemini-cli/issues/21768) | Độ ổn định quản lý thông tin xác thực |
| [#27134](https://github.com/google-gemini/gemini-cli/pull/27134) | P2 | Bỏ qua Hook ngữ cảnh được tiếp tục bởi công cụ | Việc tiếp tục `functionResponse` thuần túy không còn áp dụng hook trước agent lặp lại, giữ nguyên hành vi yêu cầu hỗn hợp | Hiệu quả thực thi Agent |
| [#27130](https://github.com/google-gemini/gemini-cli/pull/27130) | P2 | Bộ xử lý yêu cầu lấy mẫu MCP (1/3) | Triển khai bộ xử lý cốt lõi Lấy mẫu Client MCP, bước đầu tiên của quy trình ba bước [#10704](https://github.com/google-gemini/gemini-cli/issues/10704) | Mở rộng hệ sinh thái MCP |
| [#27128](https://github.com/google-gemini/gemini-cli/pull/27128) | P2 | Quay lại mô hình mặc định khi ID Mô hình Gemini không hợp lệ | ID mô hình lỗi thời (ví dụ: `gemini-pro-latest`) trong cấu hình bền vững tự động quay lại mô hình mặc định hợp lệ | Độ bền cấu hình |
| [#27126](https://github.com/google-gemini/gemini-cli/pull/27126) | P2 | Vertex xác thực cho phép sử dụng mô hình công cụ tùy chỉnh | Loại bỏ giới hạn `useCustomToolModel=false` của Vertex auth, thống nhất lộ trình khởi chạy Gemini 3.1 | Người dùng doanh nghiệp/Vertex |
| [#27026](https://github.com/google-gemini/gemini-cli/pull/27026) | P3 | Kiểm soát phê duyệt toàn quyền (thay thế YOLO) | `--full-access` thay thế `--yolo`, sandbox được kích hoạt mặc định, loại bỏ thuật ngữ không chuyên nghiệp | Trải nghiệm người dùng và nhận thức bảo mật |
| [#27091](https://github.com/google-gemini/gemini-cli/pull/27091) | P2 | Chuyển đổi bằng cách nhấp vào chỉ báo chế độ phê duyệt | Hỗ trợ nhấp vào chỉ báo UI để chuyển đổi chế độ phê duyệt theo vòng lặp, phản hồi [#27035](https://github.com/google-gemini/gemini-cli/issues/27035) | Hiệu quả tương tác |
| [#26951](https://github.com/google-gemini/gemini-cli/pull/26951) | - | Skill Issue-Fixer Bot | Triển khai Skill `issue-fixer` cho Gemini CLI Bot, hỗ trợ chế độ mandate được chọn thủ công | Quy trình làm việc tự động hóa |

---

## Xu hướng Nhu cầu Chức năng

Dựa trên 50 Issues đang hoạt động hôm nay, sự chú ý của cộng đồng tập trung vào ba hướng chính:

| Hướng xu hướng | Các Issues đại diện | Mức độ khẩn cấp |
|---------|-----------|--------|
| **Tính tự chủ và độ tin cậy của Agent** | #21409 treo máy, #22323 báo cáo thành công sai, #21968 gọi Skill không đủ, #22672 bảo vệ thao tác phá hoại | 🔴 Cao nhất |
| **Hiểu mã cấp AST/ngữ nghĩa** | #22745, #22746, #22747 loạt khám phá công cụ AST-aware thay thế thao tác tệp cấp văn bản | 🟡 Chiến lược |
| **Chất lượng và bảo mật hệ thống bộ nhớ** | #26525 tẩy xóa, #26523 cô lập bản vá không hợp lệ, #26522 thử lại phiên tín hiệu yếu — nợ Auto Memory bùng nổ vào tháng 5 | 🟡 Cao |

Tín hiệu mới nổi: proxy phụ theo ngữ cảnh ( #22741, Ctrl+B) và nhận thức về bản thân của Agent ( #21432, mô tả chính xác các cờ CLI) bắt đầu xuất hiện, hướng tới nhu cầu siêu năng lực "Agent như chuyên gia của chính nó".

---

## Quan điểm của Nhà phát triển

| Điểm đau | Phản hồi điển hình | Liên quan đến Issues |
|-----|---------|-----------|
| **Agent bị treo/chết giả** | "Việc tạo thư mục đơn giản mất một giờ", "vẫn hiển thị chờ nhập liệu sau khi lệnh hoàn thành" | #21409, #25166 |
| **Trạng thái proxy phụ gây hiểu lầm** | "Đạt MAX_TURNS nhưng báo cáo thành công GOAL, che giấu việc bị gián đoạn" | #22323 |
| **Hệ sinh thái Skill không hoạt động** | "Đã cấu hình Skill gradle/git, mô hình không bao giờ sử dụng nó một cách chủ động" | #21968 |

### 🟡 Ma sát Cụ thể Nền tảng

- **Windows/WSL**: Chuyển đổi đường dẫn, ưu tiên phiên bản PowerShell ( #25900), lỗi đọc nhị phân luồng PTY ( #26565)
- **Desktop Linux**: Tự động hóa trình duyệt Wayland bị lỗi ( #21983)

### 🟢 Nhu cầu Bảo mật và Quản trị

- **Tẩy xóa xác định** > Tẩy xóa sau mô hình ( #26525)
- **Chuyên nghiệp hóa thuật ngữ chế độ phê duyệt**: YOLO → full-access ( #27026)
- **Rào cản thao tác phá hoại**: Cần xác nhận rõ ràng trong các kịch bản như force git, sửa đổi DB ( #22672)

---

*Nhật ký được tạo dựa trên dữ liệu công khai của google-gemini/gemini-cli*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# Cập nhật GitHub Copilot CLI Nhật ký 2026-05-16

---

## 1. Lướt nhanh hôm nay

GitHub Copilot CLI hôm nay đã phát hành hai phiên bản **v1.0.49-0/1**, tập trung thúc đẩy **hoàn thiện hệ sinh thái MCP** (lệnh thử nghiệm `/mcp search`, tải chậm công cụ) và tối ưu hóa kiểm soát suy luận (thêm tùy chọn cường độ suy luận "None"). Mức độ hoạt động của Issues cộng đồng cực kỳ cao, 50 cập nhật tập trung vào ổn định kết nối MCP, kiểm soát truy cập chính sách mô hình và điều phối proxy.

---

## 2. Phát hành Phiên bản

### v1.0.49-1 (Phiên bản vá)
| Loại | Nội dung cập nhật |
|:---|:---|
| **Improved** | Chế độ Prompt (`-p`) tự động tải nguồn MCP của không gian làm việc khi thư mục hiện tại đã được tin cậy |

### v1.0.49-0 (Phiên bản chức năng)
| Loại | Nội dung cập nhật |
|:---|:---|
| **Added** | **Lệnh `/mcp search` thử nghiệm**: Tìm kiếm và cài đặt máy chủ MCP từ registry |
| | **Tìm kiếm công cụ thử nghiệm**: Hỗ trợ tải chậm MCP và công cụ bên ngoài, giảm chi phí khởi động |
| | **Thêm tùy chọn cường độ suy luận "None"**: Có thể vô hiệu hóa hoàn toàn suy luận mô hình trong trình chọn cường độ suy luận |
| | **Thêm biến môi trường `COPILOT_PLUGIN_DIR_ONLY`**: Kiểm soát cô lập thư mục plugin |

> 🔗 Trang phát hành: `github.com/github/copilot-cli/releases`

---

## 3. Issues Nóng cộng đồng (Chọn lọc 10 mục)

| # | Trạng thái | Tiêu đề | Điểm cốt lõi | Phản hồi cộng đồng |
|---|------|---|---|---|
| **#2282** | ✅ ĐÃ ĐÓNG | [MCP] Không thể kết nối máy chủ MCP | Sau khi cài đặt Windows Winget, kết nối `github-mcp-server` thất bại, thuộc về vấn đề cấu hình môi trường thường gặp | 9 bình luận, 1 👍 ; đã được giải quyết, phản ánh việc thích ứng hệ sinh thái Windows vẫn cần được mài giũa |
| **#3101** | ✅ ĐÃ ĐÓNG | Tải mô hình bị từ chối: Giới hạn chính sách Copilot | Người dùng Pro+ gặp lỗi chặn truy cập chính sách `/model`, tái phát cùng #2691, làm lộ vấn đề ổn định của công cụ chính sách doanh nghiệp | 6 bình luận, 3 👍 ; điểm đau của người dùng doanh nghiệp/trả phí |
| **#3080** | ✅ ĐÃ ĐÓNG | `claude-opus-4.7-high` báo lỗi 400 do `reasoning_effort=medium` | Biến thể mô hình không khớp với tham số cường độ suy luận, khiến mô hình cao cấp hoàn toàn không dùng được | 3 bình luận, 2 👍 ; ảnh hưởng trực tiếp đến khả năng sử dụng Claude Opus 4.7 |
| **#3257** | 🔴 MỞ | Máy chủ MCP HTTP `fetch failed` sau khi rảnh rỗi — sử dụng lại pool kết nối TCP bị chết | Sau thời gian rảnh, hết thời gian chờ NAT/tường lửa khiến kết nối TCP bị ngắt im lặng, CLI không phát hiện hoạt động của kết nối | 2 bình luận; **khuyết điểm ổn định cốt lõi cho tích hợp MCP cấp sản xuất** |
| **#3318** | 🔴 MỞ | Copilot đột ngột từ chối yêu cầu hợp lệ | Các phiên bản gần đây từ chối quá nhiều các yêu cầu bình thường như kiểm tra, sửa lỗi, truy vấn thư mục, có vẻ như chính sách bảo mật bị siết chặt quá mức | 2 bình luận, 2 👍 ; ảnh hưởng rộng rãi đến trải nghiệm phát triển hàng ngày |
| **#3344** | 🔴 MỞ | Tin nhắn bị kẹt trong khu vực `Queued (N)` trong khi proxy phụ chạy nền | Khóa tin nhắn trong kịch bản điều phối đa proxy, giải pháp thay thế "gửi thêm một tin nhắn" thực chất là an ủi | 0 bình luận; **khuyết điểm UX cốt lõi của kiến trúc song song proxy** |
| **#3330** | 🔴 MỞ | Gọi `tls.getCACertificates("system")` trên macOS mất 5+ giây mỗi lần | Gọi XPC đồng bộ duyệt qua keychain, làm chậm nghiêm trọng quá trình khởi động CLI | 1 bình luận; nút thắt cổ chai hiệu suất macOS, ảnh hưởng đến người dùng quy mô lớn |
| **#1697** | 🔴 MỞ | Session forking — song song khám phá nhánh phiên | Khi xử lý các vấn đề con độc lập trong hội thoại dài, hiện chỉ có thể chọn một hoặc mất ngữ cảnh | 2 bình luận, **22 👍** ; **thiếu chức năng cốt lõi của quản lý phiên, yêu cầu có lượt bình chọn cao trong thời gian dài** |
| **#3343** | 🔴 MỞ | Hỗ trợ lệnh Slash tùy chỉnh cấp máy | Quy trình làm việc nhất quán giữa các dự án, tránh cấu hình lại mỗi kho lưu trữ | 0 bình luận; nhu cầu về độ trưởng thành của hệ sinh thái plugin |
| **#3331** | 🔴 MỞ | Cơ chế tự động cập nhật plugin (cờ marketplace) | Trong kịch bản phân phối plugin nhóm, không thể đảm bảo sự nhất quán phiên bản của người dùng | 1 bình luận, 2 👍 ; nhu cầu triển khai quy mô doanh nghiệp/nhóm |

> 🔗 Tất cả Issues: `github.com/github/copilot-cli/issues`

---

## 4. Tiến trình PR Quan trọng

**Không có cập nhật PR mới nào hôm nay (0 mục)**

> Lưu ý: Không có hoạt động PR nào trong 24 giờ qua, trọng tâm phát triển có thể tập trung vào lặp lại phiên bản nội bộ và sửa lỗi Issue.

---

## 5. Xu hướng Nhu cầu Chức năng

Dựa trên phân tích 50 Issues đang hoạt động, các hướng quan tâm của cộng đồng thể hiện **năm cụm chính**:

| Hướng xu hướng | Các Issues đại diện | Mức độ |
|:---|:---|:---|
| **🔥 Hoàn thiện hệ sinh thái MCP** | #2282 lỗi kết nối, #3257 TCP chết kết nối, #3344 hàng đợi tin nhắn đa proxy | **Cao nhất** — Điểm tới hạn từ "có thể dùng" đến "có thể dùng trong sản xuất" |
| **Kiểm soát chính sách và suy luận mô hình** | #3101 bị chặn truy cập, #3080/#3066 hỗ trợ biến thể Opus 4.7, tùy chọn suy luận "None" v1.0.49 | **Cao** — Độ phức tạp cấu hình do mở rộng ma trận mô hình |
| **Điều phối proxy (Agent Orchestration)** | #2923 mất thông báo proxy phụ, #3344 tin nhắn bị kẹt, #3327 chỉ báo trạng thái không rõ ràng | **Cao** — Song song đa proxy là trọng tâm phát triển kiến trúc, nhưng UX và độ tin cậy bị tụt hậu |
| **Tối ưu hóa hiệu suất và khởi động** | #3330 tải chứng chỉ TLS macOS 5 giây, tải chậm công cụ (đã giải quyết một phần trong v1.0.49) | **Trung bình cao** — Người dùng quy mô doanh nghiệp nhạy cảm |
| **Quản lý phiên và ngữ cảnh** | #1697 Session forking (22 👍), #3128 khôi phục ID phiên chữ số | **Trung bình** — Công cụ hiệu suất cho người dùng nâng cao, nhu cầu tích tụ lâu dài |

---

## 6. Quan điểm của Nhà phát triển

### 🔴 Điểm đau Tần suất cao

| Điểm đau | Biểu hiện cụ thể | Ảnh hưởng |
|:---|:---|:---|
| **Tính "mong manh" của kết nối MCP** | Vấn đề đường dẫn cài đặt Windows, ngắt kết nối khi rảnh, ép HTTPS trong kịch bản SSH, không phát hiện hoạt động pool kết nối | Toàn nền tảng, chặn quy trình làm việc cốt lõi |
| **Truy cập mô hình "hộp đen"** | Thông tin lỗi chặn chính sách mờ nhạt (chỉ có ID Yêu cầu), ranh giới quyền Pro/Pro+/Enterprise không rõ ràng | Người dùng trả phí, làm suy giảm niềm tin |
| **Trạng thái proxy "không nhìn thấy"** | Không thể phân biệt "đang hoạt động" vs "chờ nhập liệu" vs "đã hoàn thành", luồng tin nhắn hỗn loạn khi có nhiều proxy |