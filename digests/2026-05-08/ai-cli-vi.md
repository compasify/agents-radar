# Cập nhật hàng ngày về cộng đồng công cụ AI CLI ngày 08-05-2026

> Thời gian tạo: 2026-05-08 00:20 UTC | Số lượng công cụ được đề cập: 9

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

## So sánh ngang

# Báo cáo phân tích so sánh ngang hệ sinh thái công cụ AI CLI | Ngày 08-05-2026

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái công cụ AI CLI hiện tại đang có xu hướng **"phân cực ba cực, đào sâu theo chiều dọc"**: Claude Code và OpenAI Codex chiếm lĩnh thị trường doanh nghiệp nhờ lợi thế mô hình đóng, nhưng đang đối mặt với khủng hoảng niềm tin về quản trị quyền và tính minh bạch trong thanh toán; các công cụ thuộc tầng thứ hai như Google Gemini CLI, Qwen Code, DeepSeek TUI đang tăng tốc tích hợp IDE và thâm nhập vào các kịch bản riêng tư hóa thông qua các **giao thức mở (ACP/MCP)** và **triển khai cục bộ**; các công cụ mới nổi như OpenCode, Pi đang khám phá không gian tồn tại khác biệt thông qua **kiến trúc có thể quan sát được** và **trải nghiệm gốc trên terminal**. Các chủ đề cộng đồng tổng thể đang chuyển từ "có hay không có chức năng" sang "sẵn sàng cho sản xuất" — các chỉ số hiệu suất, khả năng kiểm soát chi phí và tính nhất quán đa nền tảng trở thành những nút thắt cổ chai chung.

---

## 2. So sánh mức độ hoạt động của từng công cụ

| Công cụ | Cập nhật Issues hôm nay | Cập nhật PR hôm nay | Phát hành phiên bản | Động thái cốt lõi |
|:---|:---:|:---:|:---|:---|
| **Claude Code** | ~50 mục | 3 mục | v2.1.133 | Vấn đề nghiêm trọng macOS Tahoe quay trở lại; Lời kêu gọi Buddy 1070+👍 không có phản hồi; Khiếu nại về "lỗ hổng thanh toán" tăng vọt |
| **OpenAI Codex** | Số lượng cụ thể không được tiết lộ | 10 mục được chọn lọc | Rust v0.129.0 | Chế độ chỉnh sửa Vim chính thức ra mắt; Kiến trúc thực thi đa môi trường được tái cấu trúc; Nợ ổn định trên Windows bùng phát tập trung |
| **Gemini CLI** | Số lượng cụ thể không được tiết lộ | 10 mục được chọn lọc | v0.42.0-nightly | Hệ thống Auto Memory được củng cố mạnh mẽ; Tích hợp IDE giao thức ACP tăng tốc; Kiến trúc ADK Session mở rộng |
| **GitHub Copilot CLI** | 10 mục được chọn lọc | Không có cập nhật | v1.0.44-0~2 | Ba bản vá liên tiếp sửa lỗi tương thích Shell; Xung đột phím tắt Linux chưa giải quyết; Chế độ Vim 58👍 bị đình trệ dài hạn |
| **Kimi Code CLI** | 8 mục | 9 mục | Không có | PR theo dõi đồng thời về race condition chụp màn hình macOS, thiếu thông tin phiên bản Windows; Ngữ nghĩa đầu ra luồng cần được hoàn thiện |
| **OpenCode** | 10 mục được chọn lọc | 10 mục được chọn lọc | v1.14.40/41 | Khắc phục khẩn cấp lỗi đóng băng Immer; Chỉ số Tokens/s 66👍 có lượt bình chọn cao dài hạn; Đẩy mạnh chuẩn hóa llms.txt |
| **Pi** | 10 mục được chọn lọc | 10 mục được chọn lọc | v0.73.1/v0.74.0 | Di chuyển gói hoàn tất; Vấn đề đầu vào giao thức Kitty bùng phát tập trung; Danh sách động LLM cục bộ 23👍 |
| **Qwen Code** | 35 mục | 50 mục | v0.15.8 | Diễn biến kiến trúc quan trọng của ngăn xếp PR ba lớp điều khiển từ xa (máy chủ HTTP/WebSocket); Khả năng quan sát của proxy phụ được cải thiện |
| **DeepSeek TUI** | 10 mục được chọn lọc | 10 mục được chọn lọc | v0.8.17 | Điều tra khẩn cấp về Token tiêu thụ mất kiểm soát (400 triệu / nửa ngày); Khung giàn mở rộng VS Code lần đầu tiên được đưa vào kho lưu trữ; Mở rộng giao thức ACP |

> **Thứ tự mức độ hoạt động** (tổng hợp tần suất Issues/PR/phát hành): Qwen Code > DeepSeek TUI ≈ OpenCode ≈ Pi > Claude Code > Gemini CLI ≈ OpenAI Codex > Kimi Code CLI > GitHub Copilot CLI

---

## 3. Các hướng chức năng được quan tâm chung

| Hướng chức năng | Công cụ liên quan | Yêu cầu cụ thể |
|:---|:---|:---|
| **Tích hợp sâu IDE** | Gemini CLI, Qwen Code, DeepSeek TUI, GitHub Copilot CLI, Kimi Code CLI | Lộ diện lệnh gọi công cụ giao thức ACP (#1092), Tiện ích mở rộng VS Code/JetBrains/Zed, Máy chủ điều khiển từ xa (#3931), Trình kết xuất UI dành riêng cho công cụ IDE (#26676) |
| **Khả năng kiểm soát chi phí/ngân sách** | Claude Code, DeepSeek TUI, OpenCode, GitHub Copilot CLI | Quy kết "lỗ hổng thanh toán" (#55030/#743), Giới hạn cứng ngân sách phiên (#1086), Chỉ số tiêu thụ Token thời gian thực (#5374), Xem trước `/dryrun` (#1099) |
| **Tinh chỉnh trải nghiệm Terminal TUI** | OpenAI Codex, Pi, OpenCode, Kimi Code CLI, GitHub Copilot CLI | Chế độ chỉnh sửa Vim (v0.129.0), Tương thích giao thức Kitty (#4208/#3780), Shift+Enter xuống dòng (#2010), Cuộn bằng chuột (#1076), Chủ đề Light (#936) |
| **Kiến trúc thực thi đa môi trường/từ xa** | OpenAI Codex, Qwen Code, Gemini CLI | Định tuyến hợp nhất cục bộ/từ xa/đám mây (#20666/#21617), Chuyển đổi không gian làm việc (#1010/#1065), Cấu hình môi trường dưới dạng mã (khai báo TOML) |
| **Khả năng quan sát Proxy phụ/Nhiệm vụ nền** | Qwen Code, Claude Code, Gemini CLI | Cách ly định tuyến thông báo Monitor (#3925), Báo động sai MAX_TURNS thành công (#22323), Giám sát sự kiện tác vụ nền (#3634), Quản lý trạng thái bền vững |
| **Chuẩn hóa hệ sinh thái MCP/Công cụ** | Claude Code, Gemini CLI, Qwen Code, Kimi Code CLI, GitHub Copilot CLI | Sửa lỗi cấu hình bền vững (#3937), Mở rộng xác thực OAuth (#2172), Giữ lại `structured_content` (#2139), Dương tính giả xác minh registry (#3162) |

---

## 4. Phân tích định vị khác biệt

| Công cụ | Trọng tâm chức năng cốt lõi | Hồ sơ người dùng mục tiêu | Đặc điểm lộ trình kỹ thuật |
|:---|:---|:---|:---|
| **Claude Code** | Lập trình cặp cấp doanh nghiệp, Thực thi tác nhân tự động, Bảo mật Sandbox | Nhóm lớn, Doanh nghiệp có yêu cầu bảo mật cao | Gắn kết với mô hình đóng (Sonnet/Opus), Ưu tiên macOS, Mô hình quyền phức tạp nhưng nhiều lỗ hổng |
| **OpenAI Codex** | Ngữ cảnh dài đa phương thức, Khôi phục quy trình công việc, Đồng bộ hóa đa nền tảng | Nhà phát triển toàn diện, Người dùng đa thiết bị | TUI viết lại bằng Rust, Lớp trạng thái SQLite, Kiến trúc ba đầu cuối Cloud/CLI/App |
| **Gemini CLI** | Định chuẩn giao thức ACP, Auto Memory, Tương tác hệ sinh thái ADK | Người dùng Google Cloud, Người ủng hộ tiêu chuẩn | Thiết kế dựa trên giao thức, Bộ đệm định tuyến mô hình, Hệ thống kiểm tra an toàn Shell có hệ thống |
| **GitHub Copilot CLI** | Tích hợp gốc quy trình làm việc GitHub, Proxy phụ rubber-duck | Người dùng GitHub chuyên sâu, Người đăng ký Copilot hiện tại | Tích hợp sâu với nền tảng GitHub, Trực quan hóa Timeline, Máy trạng thái chuyển đổi mô hình |
| **Kimi Code CLI** | Tương tác đa phương thức (kéo thả ảnh chụp màn hình), Chuỗi công cụ JSON luồng | Nhà phát triển Trung Quốc, Nhà xây dựng công cụ hạ nguồn | Phân phối Python/PyInstaller, Phản hồi lỗi nhanh chóng, Chế độ truy cập API đang mở |
| **OpenCode** | Khả năng quan sát hiệu suất (Tokens/s), Chuẩn hóa llms.txt, Triển khai doanh nghiệp | Người ra quyết định công nghệ, Người dùng hệ sinh thái Effect-TS | Kiến trúc hàm Effect-TS, Hệ thống sự kiện v2 thử nghiệm, Phân phối gói Debian |
| **Pi** | Trải nghiệm gốc terminal tối ưu, Hệ thống mở rộng, Phát hiện LLM cục bộ động | Người dùng cuối chuyên sâu, Nhà phát triển mở rộng | Kiến trúc mở rộng TypeScript, Giao thức đồ họa Kitty, Tối ưu hóa tải 64 tiện ích mở rộng đồng thời |
| **Qwen Code** | Điều khiển từ xa/API có thể lập trình, Điều phối proxy phụ sâu, Theo dõi OTel | Nhóm nền tảng doanh nghiệp, Người dùng Alibaba Cloud | Diễn tiến kiến trúc ngăn xếp PR ba lớp, Tái cấu trúc nhà cung cấp xác thực đầu tiên, Chạy nhiệm vụ nền dài hạn |
| **DeepSeek TUI** | Tối ưu hóa kiểm soát chi phí mạnh mẽ, Bản địa hóa tiếng Trung, Back-end hóa trình soạn thảo | Người dùng nhạy cảm về giá, Cộng đồng nhà phát triển Trung Quốc | Phân phối kép npm/cargo, Chế độ máy chủ ACP, Thanh toán CNY và hoạt động nhóm WeChat |

**Tín hiệu phân hóa quan trọng**:
- **"Ưu tiên Terminal" vs "Backend Trình soạn thảo"**: Pi/OpenCode đào sâu trải nghiệm gốc TUI; DeepSeek TUI/Qwen Code thâm nhập IDE thông qua ACP/điều khiển từ xa
- **"Gắn kết mô hình đóng" vs "Định tuyến mở"**: Claude Code/Copilot khóa mô hình riêng; OpenCode/Pi/DeepSeek TUI tích cực kết nối nhiều nhà cung cấp

---

## 5. Mức độ phổ biến và trưởng thành của cộng đồng

| Góc phần tư | Công cụ | Cơ sở đánh giá |
|:---|:---|:---|
| **Hoạt động cao · Lặp lại nhanh** | Qwen Code, DeepSeek TUI, Pi | 35-50 PR/ngày, Phát hành phiên bản dày đặc, Ngăn xếp PR cấp kiến trúc xuất hiện; Tuy nhiên, nợ ổn định cũng tích lũy đồng thời |
| **Hoạt động cao · Trưởng thành chịu áp lực** | Claude Code, OpenAI Codex | Khối lượng Issues bùng nổ vượt xa khả năng xử lý PR (50:3), Các vấn đề dài hạn bị đình trệ; Kiến trúc cốt lõi đóng, đóng góp bên ngoài bị hạn chế |
| **Hoạt động trung bình · Được thúc đẩy bởi giao thức** | Gemini CLI | PR tập trung vào định chuẩn ACP/ADK, Nhịp độ kỹ thuật bị ảnh hưởng bởi điều phối nội bộ Google |
| **Hoạt động thấp · Chế độ bảo trì** | GitHub Copilot CLI | Không có cập nhật PR trong 24 giờ, Yêu cầu chức năng tích lũy dài hạn (Chế độ Vim 8 tháng 58👍); Ba bản vá liên tiếp cho thấy phản ứng thụ động |
| **Hoạt động trung bình · Tinh chỉnh tỉ mỉ** | Kimi Code CLI, OpenCode | Sửa lỗi được theo dõi trong ngày, nhưng các vấn đề sâu sắc như ngữ nghĩa luồng/tính ổn định của hệ thống thử nghiệm cần đầu tư kiến trúc |

**Nghịch lý về sự trưởng thành**: Claude Code có chức năng hoàn chỉnh nhất nhưng khủng hoảng niềm tin sâu sắc nhất (thanh toán/quyền/loại bỏ Buddy); Qwen Code/DeepSeek TUI lặp lại nhanh nhất nhưng tính sẵn sàng cho sản xuất còn nghi ngờ (Token mất kiểm soát, lỗi Thinking).

---

## 6. Tín hiệu xu hướng đáng chú ý

| Tín hiệu xu hướng | Nguồn bằng chứng | Giá trị tham khảo cho nhà phát triển |
|:---|:---|:---|
| **ACP/MCP đang tranh giành vị thế là tiêu chuẩn thực tế** | Gemini CLI #26676/26675, DeepSeek TUI #1092/#1022, Qwen Code #3931-3929 | Nhà phát triển chuỗi công cụ nên ưu tiên thích ứng với giao thức ACP; Doanh nghiệp cần xem xét cam kết mở của giao thức khi đánh giá nhà cung cấp |
| **"Backend hóa Agent" định hình lại vị thế CLI** | DeepSeek `serve --acp`, Máy chủ điều khiển từ xa Qwen Code, Codex Cloud | CLI tiến hóa từ giao diện tương tác thành môi trường chạy Agent có thể lập trình; Cân nhắc đóng gói CLI hiện tại làm dịch vụ HTTP/WebSocket |
| **Khả năng quan sát chi phí trở thành rào cản lựa chọn cứng** | "Lỗ hổng thanh toán" Claude Code, 400 triệu Token/nửa ngày DeepSeek, Tokens/s 66👍 OpenCode | Môi trường sản xuất phải yêu cầu: Đếm Token thời gian thực, Giới hạn cứng ngân sách, API quy kết tiêu thụ; Tránh rơi vào "hố đen hạn ngạch" |
| **Nhu cầu chính sách đàm phán và xuống cấp khả năng Terminal trở nên bắt buộc** | Xung đột giao thức Kitty Pi #4208/#3780, Rò rỉ trạng thái TUI OpenCode #26198 | Công cụ TUI đa nền tảng cần tích hợp kiểm tra đặc tính Terminal (Ghostty/iTerm2/Warp/Windows Terminal), Tránh giả định các tính năng nâng cao phổ biến |
| **"Khoảng cách khả năng quan sát" của Proxy phụ/Nhiệm vụ nền** | Định tuyến Monitor Qwen Code #3925, Báo động sai MAX_TURNS Gemini #22323, Gián đoạn kế thừa quyền Claude Code #57118 | Kiến trúc đa Agent cần đầu tư: Chuyển tiếp ID Trace qua các Agent, Lộ rõ máy trạng thái, Bảo vệ khỏi báo động sai lỗi thành thành công |
| **"Tính nhất quán hành vi mô hình" vượt qua "Khả năng mô hình" trở thành điểm đau** | Claude Code xu nịnh #56976, Hành vi Lệch sau cập nhật Sonnet 4.6, Lỗi đầu ra cục bộ Qwen 3.6 #3881 | Khóa phiên bản mô hình, Thiết lập kiểm tra hồi quy chất lượng đầu ra, Yêu cầu nhà cung cấp cung cấp nhật ký thay đổi hành vi, thực tế hơn là theo đuổi mô hình mới nhất |

---

**Đề xuất quyết định**: Tại thời điểm này, các **nhóm doanh nghiệp theo đuổi sự ổn định** nên theo dõi việc giải quyết khủng hoảng thanh toán/quyền của Claude Code; các **nhà phát triển khám phá những điều mới mẻ** có thể tập trung vào kiến trúc điều khiển từ xa của Qwen Code và tiện ích mở rộng ACP của DeepSeek TUI; những người **tin tưởng vào nguyên bản Terminal** nên tiếp tục theo dõi hệ thống mở rộng và giao thức Kitty của Pi; **kịch bản nhạy cảm về chi phí** nhất thiết phải yêu cầu nhà cung cấp cung cấp API có thể quan sát được ở cấp Token, tránh rơi vào "hố đen hạn ngạch".

---

## Báo cáo chi tiết từng công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Điểm nóng cộng đồng Claude Code Skills

> Nguồn dữ liệu: [anthropics/skills](https://github.com/anthropics/skills)

# Báo cáo điểm nóng cộng đồng Claude Code Skills (Ngày 08-05-2026)

---

## 1. Xếp hạng Skills phổ biến (theo mức độ quan tâm của cộng đồng)

| Thứ hạng | Skill | Chức năng | Điểm nóng thảo luận | Trạng thái |
|:---|:---|:---|:---|:---|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | Kiểm soát chất lượng bố cục tài liệu do AI tạo (ngắt dòng đơn lẻ, đoạn văn ngắn, sai số thứ tự) | Giải quyết các vấn đề phổ biến của tài liệu do Claude tạo; Nên được tích hợp làm khả năng phổ quát thay vì là Skill | 🟡 Mở |
| 2 | **[skill-quality-analyzer / skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | Đánh giá chất lượng Skill (cấu trúc, tài liệu, ví dụ, tỷ lệ kích hoạt) và kiểm toán bảo mật | Xác nhận giá trị meta-skill (meta-skill); Mối quan hệ với quy trình xét duyệt chính thức | 🟡 Mở |
| 3 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | Cải thiện độ rõ ràng và khả năng thực thi của Skill thiết kế frontend | Làm thế nào để chỉ thị của Skill có thể được Claude thực thi trong một lượt hội thoại | 🟡 Mở |
| 4 | **[odt](https://github.com/anthropics/skills/pull/486)** | Tạo tài liệu OpenDocument, điền mẫu, chuyển đổi ODT↔HTML | Hỗ trợ tiêu chuẩn tài liệu mã nguồn mở; Ranh giới chức năng với các Skill docx/pdf hiện có | 🟡 Mở |
| 5 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | Hệ thống kiểm thử toàn diện (triết lý kiểm thử, kiểm thử đơn vị, thành phần React, tích hợp/E2E) | Triển khai mô hình Testing Trophy; Phối hợp với Skill tạo mã hiện có | 🟡 Mở |
| 6 | **[SAP-RPT-1-OSS](https://github.com/anthropics/skills/pull/181)** | Phân tích dự đoán của mô hình cơ sở bảng biểu mã nguồn mở SAP | Kịch bản dữ liệu ERP doanh nghiệp; Độ sâu tích hợp hệ sinh thái SAP | 🟡 Mở |
| 7 | **[appdeploy](https://github.com/anthropics/skills/pull/360)** | Triển khai ứng dụng web toàn diện lên internet công cộng bằng một cú nhấp chuột | Vòng lặp khép kín từ mã đến triển khai; Mối quan hệ cạnh tranh/hợp tác với các nền tảng như Vercel/Netlify | 🟡 Mở |
| 8 | **[aurelion](https://github.com/anthropics/skills/pull/444)** | Bộ khung nhận thức + trí nhớ (lõi, cố vấn, proxy, bốn lớp trí nhớ) | Trí nhớ dài hạn và tư duy có cấu trúc của proxy AI; Trùng lặp với chức năng trí nhớ chính thức | 🟡 Mở |

---

## 2. Xu hướng nhu cầu cộng đồng (trích từ Issues)

| Hướng | Issue đại diện | Yêu cầu cốt lõi |
|:---|:---|:---|
| **Quản trị Skill cấp tổ chức** | [#228](https://github.com/anthropics/skills/issues/228) Chia sẻ trong tổ chức, [#492](https://github.com/anthropics/skills/issues/492) Bảo mật không gian tên | Doanh nghiệp cần thị trường Skill chính thức + kiểm soát quyền, loại bỏ sự lạm dụng ranh giới tin cậy "giả chính thức" |
| **Cơ sở hạ tầng đánh giá và chất lượng Skill** | [#556](https://github.com/anthropics/skills/issues/556) Tỷ lệ kích hoạt 0%, [#202](https://github.com/anthropics/skills/issues/202) Thực tiễn tốt nhất skill-creator | Xác minh hiệu quả Skill định lượng (tỷ lệ kích hoạt, hiệu quả token, tỷ lệ hoàn thành tác vụ) |
| **Tương tác giao thức MCP** | [#16](https://github.com/anthropics/skills/issues/16) | Phơi bày Skill làm công cụ MCP tiêu chuẩn, phá vỡ hòn đảo sinh thái Claude Code |
| **Tương thích triển khai đa đám mây/doanh nghiệp** | [#29](https://github.com/anthropics/skills/issues/29) Hỗ trợ Bedrock, [#532](https://github.com/anthropics/skills/issues/532) Đăng nhập SSO không cần khóa API Key | Thoát khỏi sự phụ thuộc vào kết nối trực tiếp Anthropic, thích ứng với các hệ thống tuân thủ và xác thực của doanh nghiệp |
| **Mở rộng định dạng tài liệu và mẫu** | [#189](https://github.com/anthropics/skills/issues/189) Trùng lặp plugin, ODT/ServiceNow và các PR khác | Mở rộng từ hệ sinh thái Office sang các tiêu chuẩn mở (ODF), SaaS theo chiều dọc (ServiceNow, SAP) |

---

## 3. Skills có tiềm năng cao chờ hợp nhất (bình luận sôi nổi + cập nhật gần đây)

| Skill | PR | Đánh giá tiềm năng | Tiến triển chính |
|:---|:---|:---|:---|
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | ⭐⭐⭐⭐⭐ | Cập nhật tháng 3, giải quyết vấn đề phổ biến; Nếu hợp nhất sẽ trở thành tiêu chuẩn cho Skill loại tài liệu |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | ⭐⭐⭐⭐⭐ | Cập nhật liên tục tháng 4, bao phủ lỗ hổng kiểm thử toàn diện, bổ sung cho Skill mã hóa hiện có |
| **odt** | [#486](https://github.com/anthropics/skills/pull/486) | ⭐⭐⭐⭐☆ | Cập nhật tháng 4, tính đúng đắn chính trị của tiêu chuẩn tài liệu mã nguồn mở (chống lại câu chuyện độc quyền của Microsoft) |
| **ServiceNow** | [#568](https://github.com/anthropics/skills/pull/568) | ⭐⭐⭐⭐☆ | Cập nhật đáng kể tháng 4, thị trường ITSM doanh nghiệp rộng lớn, phạm vi nền tảng đầy đủ |
| **sensory (macOS AppleScript)** | [#806](https://github.com/anthropics/skills/pull/806) | ⭐⭐⭐⭐☆ | Cập nhật tháng 4, thay thế tự động hóa chụp màn hình, kết hợp cả quyền riêng tư và hiệu quả |
| **shodh-memory** | [#154](https://github.com/anthropics/skills/pull/154) | ⭐⭐⭐☆☆ | Cập nhật tháng 3, trí nhớ dài hạn là năng lực cốt lõi của proxy, nhưng có thể trùng lặp với lộ trình chính thức |

> **Lưu ý**: Các PR sửa lỗi liên tiếp của Lubrsy706 ( [PR #538](https://github.com/anthropics/skills/pull/538) chữ hoa/thường pdf, [PR #541](https://github.com/anthropics/skills/pull/541) xung đột bookmark docx, [PR #539](https://github.com/anthropics/skills/pull/539) kiểm tra YAML) mặc dù có giá trị kỹ thuật cao, nhưng thuộc loại sửa chữa bảo trì, không được liệt kê trong bảng xếp hạng tiềm năng "Skill mới".

---

## 4. Cái nhìn sâu sắc về hệ sinh thái Skills

> **Nhu cầu cốt lõi của cộng đồng**: Nâng cấp từ **"Công cụ hiệu quả cá nhân" lên "Cơ sở hạ tầng năng suất có thể quản lý được ở cấp doanh nghiệp"** — Tổ chức cần thị trường chính thức, hệ thống đánh giá định lượng, khả năng tương thích SSO/đa đám mây và tương tác giao thức tiêu chuẩn (MCP), thay vì một tập hợp các tập lệnh cá nhân rải rác trên GitHub.

---

*Báo cáo dựa trên dữ liệu 50 PR / 50 Issues hoạt động gần đây nhất trong kho lưu trữ anthropics/skills trước ngày 08-05-2026.*

---

# Cập nhật hàng ngày về cộng đồng Claude Code | Ngày 08-05-2026

## Xem nhanh hôm nay

Điều đáng chú ý nhất trong cộng đồng hôm nay là **vấn đề nghiêm trọng khi quay trở lại của macOS Tahoe**: Claude Code 2.1.132+ ghi tệp sẽ ngăn các ứng dụng không phải Anthropic đọc chúng, đã xác nhận ảnh hưởng đến iTerm2, Terminal.app và Cline cũng như các công cụ của bên thứ ba khác, gây ra sự gián đoạn trong quy trình sao lưu nhiều chuỗi công cụ. Đồng thời, lời kêu gọi cộng đồng "Bring Back Buddy" tiếp tục lan rộng, với 229 bình luận, 1070+ 👍 vẫn chưa có phản hồi chính thức.

---

## Phát hành phiên bản

### v2.1.133
| Thuộc tính | Nội dung |
|:---|:---|
| Loại | Cập nhật chức năng |
| Thay đổi cốt lõi | Thêm cài đặt `worktree.baseRef` (`fresh` \| `head`), kiểm soát cơ sở nhánh cho `--worktree`, `EnterWorktree` và không gian làm việc cô lập của tác nhân |

**Chi tiết**: `fresh` (mặc định) từ nhánh `origin/<default>`, `head` từ nhánh `HEAD` cục bộ. **Lưu ý**: `fresh` mặc định đã thay đổi cơ sở của `EnterWorktree` trở lại `origin/<default>` (hành vi trước đó đã thay đổi). Cài đặt này cung cấp các chiến lược quản lý không gian làm việc linh hoạt hơn cho các kịch bản CI/CD và cô lập tác nhân.

🔗 [Liên kết phát hành](https://github.com/anthropics/claude-code/releases/tag/v2.1.133)

---

## Điểm nóng cộng đồng Issues

### 🔴 Lỗi nghiêm trọng / Loại bảo mật

| # | Issue | Trạng thái | Bình luận | 👍 | Vấn đề cốt lõi |
|:---|:---|:---|---:|---:|:---|
| **#57024** | [macOS Tahoe: Tệp được ghi bởi 2.1.132+ ngăn ứng dụng không phải Anthropic đọc](https://github.com/anthropics/claude-code/issues/57024) | 🟡 Mở | 4 | 0 | **Lỗi quyền hệ thống tệp macOS**: Thẻ `macl` lan truyền khiến tệp trong `~/Documents` không thể đọc được đối với các ứng dụng khác, xác nhận ảnh hưởng đến iTerm2, Terminal.app |
| **#57116** | [Lỗi mở rộng Tahoe: Thẻ macl lan truyền qua thư mục cha làm ô nhiễm thư mục công cụ con như Cline](https://github.com/anthropics/claude-code/issues/57116) | 🟡 Mở | 1 | 0 | **Phá hủy nối tiếp**: Sau khi thư mục cha của hoạt động Claude Code nhận thẻ hạn chế, các công cụ con trong thư mục con cũng không thể đọc được, quy trình sao lưu nhiều harness bị gián đoạn |
| **#57118** | [Quyền truy cập của proxy phụ bị lỗi — Lệnh Edit bỏ qua kiểm soát quyền truy cập](https://github.com/anthropics/claude-code/issues/57118) | 🟡 Mở | 2 | 0 | `permissionMode` frontmatter và `acceptEdits` đều không hiệu quả đối với lệnh Edit của proxy phụ |

### 🟠 Chủ đề nóng dài hạn

| # | Issue | Trạng thái | Bình luận | 👍 | Vấn đề cốt lõi |
|:---|:---|:---|---:|---:|:---|
| **#45596** | [Bring Back Buddy — Lời kêu gọi của cộng đồng](https://github.com/anthropics/claude-code/issues/45596) | 🟡 Mở | **229** | **1070** | Skill `/buddy` đã bị loại bỏ lặng lẽ trong v2.1.97, cộng đồng không hài lòng mạnh mẽ, yêu cầu khôi phục hoặc giải thích |
| **#22275** | [Sử dụng CPU 100% liên tục khi không hoạt động](https://github.com/anthropics/claude-code/issues/22275) | 🟡 Mở | 12 | 24 | Vấn đề hiệu suất ưu tiên cao, nền tảng Linux, chưa được giải quyết trong nhiều tháng |
| **#36800** | [Nhiều phiên bản máy chủ MCP dẫn đến Lỗi 409 Conflict](https://github.com/anthropics/claude-code/issues/36800) | 🟡 Mở | 12 | 6 | Plugin như Telegram không kích hoạt quá trình thứ hai trong phiên, thiếu đăng ký công cụ |

### 🟡 Khủng hoảng thanh toán / chi phí

| # | Issue | Trạng thái | Bình luận | 👍 | Vấn đề cốt lõi |
|:---|:---|:---|---:|---:|:---|
| **#55030** | [Hạn ngạch 5 giờ của Gói Tối đa hết trong 7 phút](https://github.com/anthropics/claude-code/issues/55030) | 🟡 Mở | 2 | 0 | Tái cấu trúc nhẹ tiêu tốn bất thường hạn ngạch tính toán |
| **#56365** | [Ngân sách 5 giờ hết trong 10 phút](https://github.com/anthropics/claude-code/issues/56365) | 🟡 Mở | 2 | 0 | Lỗi thanh toán tương tự trên ứng dụng máy tính macOS |
| **#56991** | [Hạn ngạch 15 phút của thuê bao Tối đa hết](https://github.com/anthropics/claude-code/issues/56991) | 🟡 Mở | 2 | 0 | Thanh toán bất thường khi sử dụng bình thường chế độ Sonnet không phải Thought, mức độ nỗ lực 2 |

### 🟢 Hành vi mô hình / Nhu cầu mới

| # | Issue | Trạng thái | Bình luận | 👍 | Vấn đề cốt lõi |
|:---|:---|:---|---:|---:|:---|
| **#56976** | [Hành vi xu nịnh tăng sau cập nhật Sonnet 4.6](https://github.com/anthropics/claude-code/issues/56976) | 🟡 Mở | 2 | 0 | Đầu ra mô hình quá chiều người dùng, ảnh hưởng chất lượng đánh giá mã |
| **#56913** | [Đề xuất kiến trúc phân lớp Claude Code tự động](https://github.com/anthropics/claude-code/issues/56913) | 🟡 Mở | 5 | 0 | Đề xuất cộng đồng: Não Opus + Nút công việc Sonnet + Trạng thái bền vững, hỗ trợ hệ thống chạy dài hạn |

---

## Tiến triển PR quan trọng

> Lưu ý: Chỉ có 3 PR có cập nhật trong 24 giờ qua, đây là toàn bộ nội dung

| # | PR | Trạng thái | Tác giả | Nội dung chức năng/sửa lỗi |
|:---|:---|:---|:---|:---|
| **#57108** | [Fix hookify enabled boolean parsing](https://github.com/anthropics/claude-code/pull/57108) | 🟡 Mở | parasol-aser | **Độ mạnh mẽ của hệ thống Hook**: Phân tích nghiêm ngặt `enabled` frontmatter thành giá trị boolean, hỗ trợ `true/false/yes/no/on/off/1/0`, từ chối kích hoạt quy tắc sai bằng chuỗi giá trị đúng, bổ sung kiểm thử đơn vị |
| **#57046** | [docs: clarify hook blocking exit code](https://github.com/anthropics/claude-code/pull/57046) | 🟡 Mở | MiladZarour | **Sửa lỗi tài liệu**: Làm rõ chỉ mã thoát `2` mới chặn thực thi hook, mã thoát `1` và các mã khác không phải số không là không chặn; Sửa lỗi tài liệu gây hiểu lầm #44707 |
| **#53949** | [Update HackerOne links in SECURITY.md](https://github.com/anthropics/claude-code/pull/53949) | 🔴 Đã đóng | OctavianGuzu | Cập nhật liên kết gửi lỗ hổng bảo mật (đã hợp nhất) |

**Quan sát xu hướng PR**: Hệ thống Hook đang trở thành tâm điểm đóng góp của cộng đồng gần đây, nhưng số lượng PR mã cốt lõi cực kỳ nhỏ (3 PR / 24h), tương phản rõ rệt với số lượng Issues bùng nổ (50 mục / 24h), cho thấy khó khăn trong việc người đóng góp bên ngoài tham gia vào kiến trúc cốt lõi.

---

## Xu hướng nhu cầu chức năng

Dựa trên phân tích phân loại 50 Issues đang hoạt động:

```
┌─────────────────────────────────────────┬─────────┬─────────────────────────────────────┐
│ Hướng chức năng                            │ Mức độ phổ biến    │ Issues đại diện                      │
├─────────────────────────────────────────┼─────────┼─────────────────────────────────────┤
│ 1. Hành vi mô hình và khả năng dự đoán    │ ████████│ #45596 Buddy, #56976 xu nịnh, #56913  │
│    (Kết nối cảm xúc / Tính nhất quán / Năng lực tự động)        │ Rất cao    │ Kiến trúc phân lớp                            │
├─────────────────────────────────────────┼─────────┼─────────────────────────────────────┤
│ 2. Bảo mật Sandbox và tương thích đa ứng dụng         │ ███████ │ #57024/#57116 thẻ macl Tahoe, #57118   │
│    (Quyền macOS / Cô lập tệp / Kế thừa quyền)    │ Cao      │ Kế thừa quyền                               │
├─────────────────────────────────────────┼─────────┼─────────────────────────────────────┤
│ 3. Minh bạch thanh toán và kiểm soát chi phí        │ ██████  │ #55030/#56365/#56991 tiêu thụ hạn ngạch bất thường   │
│    (Cảnh báo hạn ngạch / Quy kết tiêu thụ / Kiểm toán doanh nghiệp)      │ Cao      │                                     │
├─────────────────────────────────────────┼─────────┼─────────────────────────────────────┤
│ 4. Cô lập trạng thái đa phiên                     │ ███████   │ #53416 mức độ nỗ lực toàn cục, #56339      │
│    (Phạm vi cấu hình / Cạnh tranh token / Bảo mật đồng thời)  │ Trung cao    │ Cạnh tranh làm mới token                      │
├─────────────────────────────────────────┼─────────┼─────────────────────────────────────┤
│ 5. Tích hợp IDE và truyền phát phản hồi           │ ████    │ #45534 Phản hồi không luồng VSCode, #55500    │
│    (VSCode / iOS / Tính nhất quán Terminal)           │ Trung      │ Thiếu bộ chọn nhánh iOS                  │
├─────────────────────────────────────────┼─────────┼─────────────────────────────────────┤
│ 6. Tính ổn định của hệ thống Plugin                 │ ████    │ #36800 Nhiều phiên bản MCP, #39876         │
│    (Quản lý vòng đời / Định tuyến đa phiên)            │ Trung      │ Cạnh tranh đa phiên Telegram                 │
└─────────────────────────────────────────┴─────────┴─────────────────────────────────────┘
```

---

## Điểm thu hút nhà phát triển

### 🔥 Điểm đau khẩn cấp

| Điểm đau | Phạm vi ảnh hưởng | Tâm trạng cộng đồng |
|:---|:---|:---|
| **Ô nhiễm hệ thống tệp macOS Tahoe** | Người dùng đa chuỗi công cụ, quy trình sao lưu | 😤 Tức giận — Đã gây tổn hại môi trường sản xuất, xuất hiện 2 Issues liên quan trong 24h |
| **"Lỗ hổng thanh toán"** | Người đăng ký Gói Tối đa | 😰 Lo lắng — Thao tác bình thường hết hạn ngạch 5 giờ trong 7-15 phút, không cảnh báo, không quy kết |
| **Loại bỏ Buddy lặng lẽ** | Người dùng lâu năm, Phụ thuộc cảm xúc | 😢 Thất vọng + Tức giận — Không có lời giải thích chính thức trong 29 ngày, 1070+ 👍 bị bỏ qua |

### 📊 Nợ kỹ thuật tần suất cao

| Lĩnh vực | Vấn đề cụ thể | Số lượng Issues tích lũy |
|:---|:---|---:|
| **Mô hình quyền truy cập** | `bypassPermissions` không bypass, `dangerous-skip-permissions` không skip, Kế thừa quyền của proxy phụ bị đứt gãy | 5+ |
| **Quản lý Token** | Cạnh tranh làm mới OAuth đa phiên, Không có khóa tệp cho `.credentials.json` | 3+ |
| **Rò rỉ CPU/Bộ nhớ** | CPU 100% khi không hoạt động, Treo suy nghĩ lâu dài | 4+ |
| **TUI/Kết xuất** | Thiếu kết xuất Markdown, Truyền phát bị gián đoạn, Thiếu bộ chọn nhánh | 5+ |

### 💡 Nhu cầu kiến trúc mới nổi

- **Chế độ "Não bộ"**: Cộng đồng bắt đầu coi Claude Code là một tác nhân điều phối cho hệ thống chạy dài hạn, thay vì một công cụ lập trình cặp (#56913)
- **Phân lớp mô hình**: Opus cho quyết định lập kế hoạch, Sonnet cho thực thi, lớp trạng thái bền vững — Tương tự như tách biệt mặt phẳng điều khiển/nút công việc của Kubernetes
- **Khả năng quan sát**: Biến số thời gian chạy như `effort` được phơi bày bởi hệ thống Hook (đề xuất #55829), nhưng các chỉ số cốt lõi (tiêu thụ token, phiên bản mô hình, chuỗi lệnh gọi thực tế) vẫn là hộp đen

---

*Báo cáo hàng ngày dựa trên dữ liệu công khai của GitHub, không đại diện cho lập trường chính thức của Anthropic. Các liên kết Issue/PR đều có tiền tố `https://github.com/anthropics/claude-code/issues/` hoặc `/pull/`.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Cập nhật hàng ngày về cộng đồng OpenAI Codex | Ngày 08-05-2026

## Xem nhanh hôm nay

Codex hôm nay đã phát hành **phiên bản chính thức Rust v0.129.0**, TUI chính thức hỗ trợ chế độ chỉnh sửa Vim và chức năng khôi phục quy trình công việc, đồng thời cộng đồng phản ánh dày đặc các vấn đề về tính ổn định trên nền tảng Windows và hiệu suất GPU bất thường. Ở cấp độ cơ sở hạ tầng, hệ thống cấu hình môi trường đang trải qua quá trình tái cấu trúc quy mô lớn, định tuyến vá lỗi thực thi đa môi trường và đo lường từ xa về độ tin cậy của SQLite trở thành trọng tâm kỹ thuật cốt lõi.

---

## Phát hành phiên bản

### [Rust v0.129.0](https://github.com/openai/codex/releases/tag/rust-v0.129.0) ⭐ Phiên bản chính thức

| Tính năng | Mô tả |
|:---|:---|
| **Chế độ chỉnh sửa Vim** | TUI Composer hỗ trợ lệnh `/vim` để chuyển đổi, cấu hình chế độ mặc định và ngữ cảnh phím tắt dành riêng cho Vim |
| **Cải thiện khôi phục quy trình công việc** | Bộ chọn resume/fork được thiết kế lại, chế độ quay lại cuộn ban đầu, chèn ngữ cảnh `/ide` |
| **Phiên bản trước** | v0.130.0-alpha.1 và v0.129.0-alpha.13~15 tổng cộng 4 phiên bản tiền phát hành liên tục lặp lại |

---

## Điểm nóng cộng đồng Issues (Chọn lọc 10 mục)

| # | Tiêu đề | Trạng thái | Mâu thuẫn cốt lõi | Phản ứng cộng đồng |
|:---|:---|:---|---|:---|
| [#12564](https://github.com/openai/codex/issues/12564) | Cho phép đổi tên tác vụ/tiêu đề luồng | 🔵 Mở | Nút thắt cổ chai trải nghiệm điều hướng lịch sử | **39 bình luận / 82 👍**, nhu cầu có lượt bình chọn cao dài hạn, người dùng tiện ích mở rộng IDE kêu gọi mạnh mẽ |
| [#8259](https://github.com/openai/codex/issues/8259) | Định dạng bảng Markdown dễ đọc | 🔵 Mở | Khoảng cách giữa đầu ra AI và trải nghiệm đọc của con người | **30 bình luận / 112 👍**, một trong những lượt bình chọn cao nhất lịch sử, tiêu chuẩn chất lượng kết xuất TUI |
| [#12161](https://github.com/openai/codex/issues/12161) | Tiện ích mở rộng IDE liên tục bị kẹt "Thinking" | 🔵 Mở | Lỗi ổn định cốt lõi trên nền tảng Windows | **28 bình luận / 16 👍**, tái hiện trên VS Code/Cursor/Windsurf, người dùng doanh nghiệp bị cản trở |
| [#14604](https://github.com/openai/codex/issues/14604) | Codex Cloud tạo PR thất bại | 🔴 Đã đóng | Cản trở quy trình công việc cấp doanh nghiệp | **25 bình luận / 12 👍**, đóng hôm nay, vấn đề độ tin cậy đầu cuối của Cloud |
| [#16857](https://github.com/openai/codex/issues/16857) | Hoạt ảnh "Thinking" gây chiếm dụng GPU cao | 🔵 Mở | Xung đột thiết kế giữa hiệu suất và phản hồi trực quan | **22 bình luận / 25 👍**, người dùng macOS tập trung phản ánh, đã xác định hoạt ảnh nhỏ là nguyên nhân gốc rễ |
| [#20552](https://github.com/openai/codex/issues/20552) | Chuyển đổi cây tệp không đáng tin cậy | 🔵 Mở | Lỗi quản lý trạng thái điều hướng ứng dụng máy tính | **22 bình luận / 5 👍**, vấn đề đồng bộ hóa hệ thống menu macOS và trạng thái xem |
| [#17444](https://github.com/openai/codex/issues/17444) | Máy chủ MCP khởi động thất bại | 🔵 Mở | Tương thích chuỗi công cụ hệ sinh thái Windows | **21 bình luận / 7 👍**, vấn đề cụ thể của môi trường CLI dưới mô hình GPT-5.4 Medium Fast |
| [#21569](https://github.com/openai/codex/issues/21569) | Azure OpenAI nén từ xa thất bại khi nhu cầu cao | 🔵 Mở | Vùng mù quy hoạch dung lượng triển khai riêng tư của doanh nghiệp | **5 bình luận**, ngưỡng ~244k token được xác định là kích hoạt, xác thực A/B không đặc trưng cho điểm cuối |
| [#19872](https://github.com/openai/codex/issues/19872) | Tự động nạp tiền không kích hoạt khi hết hạn ngạch hàng tuần | 🔵 Mở | Lỗi logic máy trạng thái hệ thống thanh toán | **5 bình luận / 1 👍**, cản trở luồng tiền của người dùng thương mại |
| [#19910](https://github.com/openai/codex/issues/19910) | Chức năng Goals bị nén và mất yêu cầu kiểm toán | 🔵 Mở | Lỗ hổng lưu trữ ngữ cảnh của chức năng mới (Goals) | **4 bình luận**, phản hồi sâu sắc từ người dùng cốt lõi, công nhận giá trị chức năng nhưng chỉ ra vấn đề độ tin cậy cốt lõi |

---

## Tiến triển PR quan trọng (Chọn lọc 10 mục)

| # | PR | Tác giả | Thay đổi cốt lõi | Ý nghĩa kỹ thuật |
|:---|:---|:---|:---|:---|
| [#20666](https://github.com/openai/codex/pull/20666) | Nhà cung cấp cấu hình TOML môi trường CODEX_HOME | starr-openai | Nhà cung cấp cấu hình dựa trên `environments.toml` mới | Nền tảng của hệ thống cấu hình môi trường, hỗ trợ khai báo điểm cuối thực thi từ xa đa dạng |
| [#21617](https://github.com/openai/codex/pull/21617) | Hỗ trợ chọn apply_patch đa môi trường | starr-openai | Đường dẫn môi trường kép văn bản tự do và lệnh gọi hàm | Vòng lặp khép kín của liên kết thực thi đa môi trường |
| [#21548](https://github.com/openai/codex/pull/21548) | Đo lường từ xa độ tin cậy của SQLite | owenlin0 | Tỷ lệ thành công khởi tạo, Thất bại hoạt động cốt lõi, Chỉ số quay lại hệ thống tệp | Cơ sở quyết định dựa trên dữ liệu trước khi loại bỏ quay lại hệ thống tệp |
| [#20619](https://github.com/openai/codex/pull/20619) | Yêu cầu mã thông báo chứng thực ứng dụng máy tính | jiamingz42 | Chèn chứng thực DeviceCheck `x-oai-attestation` | Tăng cường ranh giới bảo mật, ngăn chặn giả mạo yêu cầu |
| [#21559](https://github.com/openai/codex/pull/21559) | Bộ chọn cấu hình quyền đặt tên TUI | viyatb-oai | Bảo tồn ngữ nghĩa cấu hình đặt tên `/permissions` | Giải quyết vấn đề mất danh tính do ghi đè cấu hình |
| [#21591](https://github.com/openai/codex/pull/21591) | Kích hoạt lại sccache CI Windows | starr-openai | Giải pháp quay lại lưu trữ Dev Drive | Sửa lỗi hồi quy hiệu suất xây dựng Windows |
| [#21435](https://github.com/openai/codex/pull/21435) | Quy trình làm việc lưu trữ Codex | fcoury-oai | Hỗ trợ gốc CLI/TUI cho `$CODEX_HOME/worktrees` | Tính nhất quán không gian làm việc giữa Ứng dụng/CLI |
| [#21525](https://github.com/openai/codex/pull/21525) | Gia nhập động cửa sổ đọc chia sẻ | xli-oai | Thay thế lô cố định bằng trạng thái hàng đợi khóa theo thời gian thực | Tối ưu hóa thông lượng bộ điều phối, duy trì tính công bằng ưu tiên người ghi |
| [#21392](https://github.com/openai/codex/pull/21392) | Sửa các tham số thoát trong kiểm tra bảo mật | adrianbravo-oai | Phân loại tham số thoát shell thành argv hợp lệ | Sửa lỗi phạm vi chính sách phê duyệt chế độ không đầu |
| [#21429](https://github.com/openai/codex/pull/21429) | Nhà cung cấp môi trường đám mây | starr-openai | Lấy URL WS từ `/cloud/executor/{id}/register` | Kết nối cơ sở hạ tầng thực thi gốc đám mây |

---

## Xu hướng nhu cầu chức năng

```
┌─────────────────────────────────────────────────────────┐
│  🔥 Hướng đi chính          │  Issue / PR đại diện                 │
├─────────────────────────────────────────────────────────┤
│  1. Chi tiết hóa trải nghiệm chỉnh sửa     │ #12564 đổi tên, #8259 Markdown,    │
│     (Tích hợp Vim/IDE)    │ v0.129.0 chế độ chỉnh sửa Vim              │
├─────────────────────────────────────────────────────────┤
│  2. Kiến trúc thực thi đa môi trường     │ #20666/#21617/#21429 ngăn cấu hình môi trường     │
│     (Hợp nhất cục bộ/từ xa/đám mây)      │ Tái cấu trúc, định tuyến apply_patch             │
├─────────────────────────────────────────────────────────┤
│  3. Quản trị nền tảng Windows   │ #12161 bị kẹt, #17444 MCP, #19450    │
│     (Trả nợ ổn định)   │ Trình duyệt, #15047 dán, #21583 trò chuyện bên |
├─────────────────────────────────────────────────────────┤
│  4. Hiệu suất và hiệu quả tài nguyên     │ #16857/#16099 bất thường GPU, #21569     │
│     (Kết xuất/lập lịch/nén)   │ Thất bại nén Azure                     │
├─────────────────────────────────────────────────────────┤
│  5. Quốc tế hóa và khả năng tiếp cận   │ #19504/#21563 Hỗ trợ RTL, #14985     │
│     (Ả Rập/Do Thái/Ba Tư)│ Kết xuất toán học LaTeX                     │
├─────────────────────────────────────────────────────────┤
│  6. Vòng lặp khép kín quy trình làm việc cấp doanh nghiệp   │ #14604 PR Đám mây, #19872 thanh toán,     │
│     (Kiểm toán/tuân thủ/tự động hóa) │ #1281 ký GPG, #19910 kiểm toán Goals   │
└─────────────────────────────────────────────────────────┘
```

---

## Điểm thu hút nhà phát triển

### 🔴 Phân loại điểm đau

| Loại | Biểu hiện cụ thể | Phạm vi ảnh hưởng |
|:---|:---|:---|
| **Công dân hạng hai trên Windows** | 6+ issue hoạt động bao phủ tiện ích mở rộng IDE bị kẹt, khởi động MCP, tích hợp trình duyệt, xung đột phím tắt, định tuyến trò chuyện bên | Quyết định triển khai doanh nghiệp bị cản trở |
| **Lạm dụng tài nguyên GPU** | Hai issue riêng biệt (#16857, #16099) cùng chỉ về một pipeline kết xuất của phiên bản `26.325.31654`, hoạt ảnh nhỏ chiếm 50-90% GPU liên tục | Pin laptop và hiệu suất đa nhiệm |
| **Tính mỏng manh của lưu trữ trạng thái** | Goals bị nén và mất ngữ cảnh, Quay lại SQLite không hiển thị, Đồng bộ hóa CLI/Ứng dụng phiên bị lệch (#21513 đã đóng nhưng mẫu điển hình) | Khủng hoảng niềm tin vào độ tin cậy của tác vụ dài hạn |

### 🟡 Nhu cầu tần suất cao

- **Minh bạch hóa khả năng quan sát**: Nhà phát triển yêu cầu rõ ràng xem "Tại sao lại Thinking" (#12161), SQLite có bị hạ cấp không (#21548 là yêu cầu tiền đề), thời điểm kích hoạt nén token (#21569)
- **Cấu hình dưới dạng mã**: Từ yêu cầu khôi phục cấu hình profiles `config.toml` (#21580) đến khai báo môi trường TOML (#20666), cộng đồng từ chối cấu hình hộp đen
- **Tính nhất quán trạng thái đa nền tảng**: Đồng bộ hóa phiên Ứng dụng/CLI/Web vẫn là thách thức cấp kiến trúc (#21513 là trường hợp mới nhất)

---

*Báo cáo hàng ngày dựa trên dữ liệu công khai của github.com/openai/codex, các liên kết có thể nhấp để theo dõi tiến trình mới nhất.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Cập nhật hàng ngày về cộng đồng Kimi Code CLI | Ngày 08-05-2026

---

## Xem nhanh hôm nay

Hoạt động cộng đồng hôm nay khá sôi nổi, **8 Issues và 9 PR** đã được cập nhật trong vòng 24 giờ, nhưng không có phiên bản mới nào được phát hành. Trọng tâm là các vấn đề xung quanh **lỗi đính kèm ảnh chụp màn hình macOS bị kéo thả, thiếu thông tin phiên bản trên Windows, tối ưu hóa trải nghiệm đầu ra luồng LLM**, người đóng góp cộng đồng phản hồi nhanh chóng, 2 PR sửa lỗi đã được theo dõi nhanh chóng.

---

## Điểm nóng cộng đồng Issues

| # | Tiêu đề | Trạng thái | Mức độ quan trọng | Phân tích |
|---|------|------|--------|------|
| [#2182](https://github.com/MoonshotAI/kimi-cli/issues/2182) | Bug: Hình thu nhỏ ảnh chụp màn hình macOS bị kéo vào terminal không đính kèm được (TemporaryItems race) | 🔴 Mở | ⭐⭐⭐⭐⭐ | **Ảnh hưởng cao đến trải nghiệm người dùng**：Người dùng macOS kéo hình thu nhỏ ảnh chụp màn hình vào terminal bị mất tệp đính kèm do điều kiện tranh chấp `TemporaryItems`. Đây là một kịch bản tương tác tần suất cao, PR #2183 đã nhanh chóng sửa lỗi. |
| [#2178](https://github.com/MoonshotAI/kimi-cli/issues/2178) | Windows: kimi.exe v1.41.0 có FileVersionInfo trống, khiến tiện ích mở rộng VS Code từ chối là "không tương thích" | 🔴 Mở | ⭐⭐⭐⭐⭐ | **Vấn đề tương thích hệ sinh thái chặn lỗi**: Thông tin phiên bản tệp nhị phân Windows trống, khiến tiện ích mở rộng VS Code đánh dấu là không tương thích. Ảnh hưởng trực tiếp đến tích hợp hệ sinh thái IDE, PR #2181 đã gửi để sửa lỗi. |
| [#2010](https://github.com/MoonshotAI/kimi-cli/issues/2010) | Yêu cầu chức năng: Shift+Enter để chèn xuống dòng trong đầu vào lời nhắc | 🔴 Mở | ⭐⭐⭐⭐☆ | **Căn chỉnh tiêu chuẩn tương tác**: Shift+Enter chèn xuống dòng đã là quy ước phổ biến trên ChatGPT/Claude/Slack, hiện tại Ctrl-J/Alt-Enter làm tăng gánh nặng nhận thức. Cộng đồng 👍 1, lời kêu gọi dài hạn. |
| [#2179](https://github.com/MoonshotAI/kimi-cli/issues/2179) | Yêu cầu chức năng: delta token tăng dần ở chế độ `--print --output-format stream-json` | 🔴 Mở | ⭐⭐⭐⭐☆ | **Nhu cầu cốt lõi cho chuỗi công cụ hạ nguồn**: Chế độ `stream-json` hiện tại đệm toàn bộ tin nhắn thay vì đầu ra từng token, làm hỏng ngữ nghĩa xử lý luồng, ảnh hưởng đến việc xây dựng các công cụ phái sinh như giám sát thời gian thực, TTS. |
| [#2172](https://github.com/MoonshotAI/kimi-cli/issues/2172) | MCP OAuth thất bại khi máy chủ trả về `client_secret_basic` | 🔴 Mở | ⭐⭐⭐⭐☆ | **Khả năng tương thích hệ sinh thái MCP**: Xác thực khách hàng OAuth chỉ hỗ trợ `none`/`client_secret_post`, từ chối `client_secret_basic`, cản trở việc kết nối một số máy chủ MCP. |
| [#2175](https://github.com/MoonshotAI/kimi-cli/issues/2175) | fix: model_display_name bỏ qua display_name cho kimi-for-coding | 🔴 Mở | ⭐⭐⭐☆☆ | **Tính nhất quán thương hiệu**: Backend đã trả về tên chính xác như "Kimi-k2.6", nhưng frontend ghi đè cứng thành "kimi-for-coding", ảnh hưởng đến nhận thức của người dùng. PR #2174 đã sửa lỗi. |
| [#2180](https://github.com/MoonshotAI/kimi-cli/issues/2180) | Cần lệnh `/task` cho web kimi cli | 🔴 Mở | ⭐⭐⭐☆☆ | **Tính ngang bằng chức năng giao diện web**: Giao diện web thiếu lệnh `/task` của CLI, người dùng cần chuyển đổi logic hoạt động giữa các giao diện. Kèm ảnh chụp màn hình để làm rõ, nhu cầu rõ ràng. |
| [#2173](https://github.com/MoonshotAI/kimi-cli/issues/2173) | Thêm hỗ trợ crow-cli cho kế hoạch mã hóa Kimi | 🔴 Mở | ⭐⭐⭐☆☆ | **Kết nối hệ sinh thái công cụ của bên thứ ba**: Tác giả `crow-cli` phản hồi rằng sau khi thanh toán, không thể kết nối qua khóa API + URL cơ sở như trước, liên quan đến các chiến lược tương thích mô hình ủy quyền thương mại và chuỗi công cụ của nhà phát triển. |

---

## Tiến triển PR quan trọng

| # | Tiêu đề | Trạng thái | Nội dung cốt lõi |
|---|------|------|----------|
| [#2183](https://github.com/MoonshotAI/kimi-cli/pull/2183) | fix(shell): attach dropped image paths eagerly | 🟢 Mở | **Sửa lỗi #2182**: Chủ động quét đường dẫn ảnh cục bộ trong văn bản khi gửi lời nhắc, đọc ngay lập tức và chuyển đổi thành `ImageURLPart`, tránh phụ thuộc vào `ReadMediaFile` sau đó để theo dõi đường dẫn tệp tạm thời. Khắc phục triệt để vấn đề tranh chấp TemporaryItems. |
| [#2181](https://github.com/MoonshotAI/kimi-cli/pull/2181) | fix: add Windows binary version info | 🟢 Mở | **Sửa lỗi #2178**: Tạo tệp thông tin phiên bản Windows cho PyInstaller từ `pyproject.toml`, chèn vào bản dựng one-file/one-dir, và thêm khẳng định CI để đảm bảo sản phẩm phát hành không có thông tin phiên bản trống. |
| [#2177](https://github.com/MoonshotAI/kimi-cli/pull/2177) | fix(soul): clear partial UI output when LLM step is retried | 🟢 Mở | **Tối ưu hóa trải nghiệm đầu ra luồng**: Khi tenacty thử lại lệnh gọi LLM, xóa đầu ra một phần đã hiển thị, tránh nối nội dung của lần thử thất bại với nội dung mới, giải quyết điểm đau "đầu ra lặp lại/hỗn loạn". |
| [#2176](https://github.com/MoonshotAI/kimi-cli/pull/2176) | fix(hooks): extract text from ContentPart for UserPromptSubmit hook | 🟢 Mở | **Sửa lỗi #2148**: Hook `UserPromptSubmit` trả về `prompt` trống một cách sai lầm khi `user_input` là `list[ContentPart]` (trường hợp mặc định), dẫn đến khớp regex thất bại. Bổ sung logic trích xuất văn bản. |
| [#2174](https://github.com/MoonshotAI/kimi-cli/pull/2174) | fix: respect model display_name for kimi-for-coding | 🟢 Mở | **Sửa lỗi #2175**: Loại bỏ việc ghi đè cứng "kimi-for-coding"/"kimi-code" trong `model_display_name()`, tin tưởng `display_name` (ví dụ: "Kimi-k2.6") được trả về bởi backend. |
| [#2138](https://github.com/MoonshotAI/kimi-cli/pull/2138) | fix(shell): respect default shell in shell mode | 🟢 Mở | **Tính nhất quán môi trường Shell**: Chế độ Shell Ctrl-X ưu tiên sử dụng `$SHELL` thay vì bash mã hóa cứng, cải thiện trải nghiệm người dùng zsh/fish, v.v. Bao gồm kiểm thử hồi quy. |
| [#2139](https://github.com/MoonshotAI/kimi-cli/pull/2139) | fix(mcp): preserve structured content and sanitize refs | 🟢 Mở | **Tính toàn vẹn dữ liệu MCP**: Giữ lại `structured_content` MCP làm đầu ra văn bản JSON, tránh mất tải có thể đọc được bằng máy của kết quả công cụ; Làm sạch các nút anh em của siêu dữ liệu trong nút `$ref`, ngăn chặn mô hình tiết lộ cấu trúc lược đồ nội bộ. |
| [#1715](https://github.com/MoonshotAI/kimi-cli/pull/1715) | feat(plugin): add Claude-compatible local plugin support | ⚫ Đã đóng | ~~Lớp tương thích plugin Claude: Tự động phát hiện plugin Claude cục bộ thông qua `--plugin-dir`.~~ **Đã đóng**, có thể do điều chỉnh hướng kiến trúc hoặc hợp nhất vào PR khác. |
| [#1127](https://github.com/MoonshotAI/kimi-cli/pull/1127) | style(web): tweak some web ui details | ⚫ Đã đóng | ~~Điều chỉnh chi tiết UI web.~~ **Đã đóng**, nội dung điều chỉnh cụ thể không được công khai. |

---

## Xu hướng nhu cầu chức năng

Dựa trên phân tích Issues hôm nay, các hướng quan tâm của cộng đồng cho thấy mô hình **"Ba ngang hai dọc"**:

| Hướng | Issue đại diện | Mức độ khẩn cấp |
|------|-----------|--------|
| **🖥️ Tích hợp hệ sinh thái IDE/Trình soạn thảo** | #2178 (Tương thích tiện ích mở rộng VS Code), #2010 (Căn chỉnh tiêu chuẩn phím tắt) | 🔥 Cao |
| **📤 Đầu ra luồng và chuỗi công cụ** | #2179 (token-level stream-json), #2177 (Làm sạch đầu ra khi thử lại) | 🔥 Cao |
| **🖼️ Trải nghiệm tương tác đa phương thức** | #2182 (Kéo thả ảnh chụp màn hình macOS), #2183 (Phân tích đường dẫn ảnh tức thời) | 🔥 Cao |
| **🔌 Hoàn thiện giao thức MCP** | #2172 (Mở rộng xác thực OAuth), #2139 (Giữ lại structured_content) | ⚡ Trung bình |
| **🌐 Tính ngang bằng chức năng Web/CLI** | #2180 (Thiếu lệnh `/task`) | ⚡ Trung bình |

> **Tín hiệu mới nổi**: Việc kết nối các công cụ của bên thứ ba (#2173 crow-cli) phản ánh nhu cầu của nhà phát triển đối với **mô hình truy cập API mở**, có sự căng thẳng với tính độc quyền của kế hoạch thanh toán hiện tại.

---

## Điểm thu hút nhà phát triển

### 🔴 Điểm đau tần suất cao

| Điểm đau | Kịch bản | Mật độ phản hồi cộng đồng |
|------|------|-----------|
| **Ma sát tương tác cấp nền tảng** | Lỗi kéo thả ảnh chụp màn hình macOS, Thiếu thông tin phiên bản Windows, Môi trường mặc định Shell không khớp | ⬛⬛⬛⬛⬛ |
| **Ý nghĩa ngữ nghĩa đầu ra luồng không đầy đủ** | JSONL không phải luồng thực, UI còn sót lại khi thử lại | ⬛⬛⬛⬛⬜ |
| **Gánh nặng nhận thức phím tắt** | Alt-Enter/Ctrl-J so với Shift+Enter tiêu chuẩn ngành | ⬛⬛⬛⬜⬜ |

### 🟡 Nhu cầu sâu sắc

1. **Cân bằng giữa tính mở và thương mại hóa**: Tác giả #2173 nêu rõ mong đợi "chỉ cần chèn khóa API là có thể sử dụng như vài tháng trước", mô hình ủy quyền của Kế hoạch Mã hóa hiện tại không thân thiện với nhà phát triển chuỗi công cụ.
2. **MCP làm trung tâm hệ sinh thái**: Các chi tiết như phương thức xác thực OAuth, xử lý nội dung có cấu trúc, trực tiếp ảnh hưởng đến ý muốn kết nối của máy chủ của bên thứ ba.
3. **Nhận thức thương hiệu nhất quán**: Việc ghi cứng tên hiển thị mô hình (#2175) phản ánh cơ chế đồng bộ hóa thông tin giữa frontend và backend cần được tối ưu hóa.

### 💡 Đánh giá phản hồi của người bảo trì

Hôm nay, **2 lỗi có mức độ ưu tiên cao đều có PR được theo dõi trong ngày** (#2182→#2183, #2178→#2181), hướng sửa lỗi chính xác. Đề xuất theo dõi:
- Nhu cầu delta token stream-json trong #2179 liên quan đến điều chỉnh kiến trúc, cần đánh giá xem có đưa vào lộ trình không
- Shift+Enter trong #2010 là hạng mục có thay đổi nhỏ nhưng mang lại lợi ích trải nghiệm cao, có thể xem xét hợp nhất nhanh chóng

---

*Báo cáo hàng ngày dựa trên dữ liệu công khai của github.com/MoonshotAI/kimi-cli.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# Cập nhật hàng ngày về cộng đồng OpenCode | Ngày 08-05-2026

## Xem nhanh hôm nay

OpenCode hôm nay đã phát hành liên tục 2 phiên bản vá lỗi **v1.14.40/41**, tập trung sửa lỗi xử lý đầu ra trình định dạng, giữ lại các thay đổi chưa commit khi di chuyển phiên, v.v. Cộng đồng tiếp tục đặc biệt quan tâm đến hai yêu cầu chức năng **hiển thị chỉ số hiệu suất Tokens/s** (#5374, 66👍) và **chuẩn hóa tài liệu llms.txt** (#8816), đồng thời vấn đề lỗi đóng băng Immer của hệ thống sự kiện v2 thử nghiệm đã gây ra thảo luận và sửa lỗi dày đặc.

---

## Phát hành phiên bản

### [v1.14.41](https://github.com/anomalyco/opencode/releases/tag/v1.14.41) | 08-05-2026
- **Sửa lỗi cốt lõi**: Khôi phục xử lý đầu ra trình định dạng, sửa lỗi định dạng không hiệu quả khi trình định dạng ghi vào stdout/stderr (@ferdinandyb)
- **Cải tiến cốt lõi**: Giữ lại các thay đổi tệp cục bộ chưa commit khi di chuyển phiên giữa các không gian làm việc

### [v1.14.40](https://github.com/anomalyco/opencode/releases/tag/v1.14.40) | 07-05-2026
- **Cải tiến cốt lõi**: Hỗ trợ cấu hình từ xa độc lập bằng cách trỏ đến `.well-known/opencode`
- **Sửa lỗi cốt lõi**: Giữ lại văn bản trợ lý khi phát lại khối suy luận (chuỗi mã hóa) (@edevil); Chuẩn hóa định dạng lỗi 404 khi thiếu phiên; Sửa lỗi tiêu đề CORS được áp dụng trước xác thực

---

## Điểm nóng cộng đồng Issues (Top 10)

| # | Trạng thái | Tiêu đề | Động thái quan trọng | Phản ứng cộng đồng |
|---|---|---|---------|---------|
| [#5374](https://github.com/anomalyco/opencode/issues/5374) | 🔥 Mở | **Hiển thị chỉ số hiệu suất Tokens/second** | Nhu cầu cốt lõi để so sánh hiệu suất giữa các nhà cung cấp, 16 bình luận thảo luận sâu về giải pháp | 66👍, lượt bình chọn cao dài hạn |
| [#8816](https://github.com/anomalyco/opencode/issues/8816) | 🔥 Mở | **Cung cấp tài liệu định dạng llms.txt và Markdown** | Cộng đồng thúc đẩy chuẩn hóa tài liệu công cụ AI, thuận tiện cho LLM phân tích | 26👍, 13 bình luận |
| [#6257](https://github.com/anomalyco/opencode/issues/6257) | Mở | Tối ưu hóa trải nghiệm cuộn TUI | Người dùng kêu gọi cuộn tăng dần `Ctrl+E/Y` thay vì chuột, điểm đau về khả năng đọc đối thoại dài | 10👍, 11 bình luận |
| [#25873](https://github.com/anomalyco/opencode/issues/25873) | 🐛 Mở | **Lỗi công cụ Bash: `Attempted to assign to readonly property`** | Hệ thống sự kiện v2 thử nghiệm + kết hợp đóng băng Immer sau v1.14.34+, ảnh hưởng đến lệnh gọi công cụ | 8 bình luận, khẩn cấp |
| [#15059](https://github.com/anomalyco/opencode/issues/15059) | Mở | Hệ thống lời nhắc hệ thống đa hệ thống làm hỏng mô hình Qwen3.5 | Chuỗi công cụ tự động thêm lời nhắc hệ thống gây ra mô hình bất thường, cần ràng buộc ở cấp kiến trúc | 9 bình luận |
| [#13286](https://github.com/anomalyco/opencode/issues/13286) | ✅ Đã đóng | Khối `thinking` của