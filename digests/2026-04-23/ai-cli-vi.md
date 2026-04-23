# Công cụ AI CLI Cộng đồng cập nhật hàng ngày 2026-04-23

> Thời gian tạo: 2026-04-23 00:18 UTC | Công cụ được bao phủ: 8

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

# Báo cáo phân tích so sánh ngang hệ sinh thái công cụ AI CLI | 2026-04-23

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái công cụ AI CLI hiện tại đang trong tình trạng **"bảy cường tranh bá, sự trưởng thành phân hóa"**: Claude Code và OpenAI Codex chiếm lĩnh vị trí dẫn đầu nhờ sự bảo trợ của doanh nghiệp, nhưng các vấn đề về độ ổn định và tính minh bạch chi phí trở thành nút thắt chung; các công cụ trong nước như Kimi CLI, Qwen Code đang theo kịp với tốc độ lặp lại mạnh mẽ, nhưng lại thường xuyên biến động chính sách do áp lực thương mại hóa; các giải pháp mã nguồn mở như OpenCode, Pi đang khám phá các con đường khác biệt về khả năng mở rộng và tăng cường bảo mật. Nhìn chung, **tái cấu trúc hệ thống quyền/hộp cát, quản trị hệ sinh thái MCP, đồng bộ hóa hội thoại đa nền tảng** đã trở thành trọng tâm đột phá công nghệ của toàn ngành, trong khi **khủng hoảng niềm tin về thanh toán** đang từ điểm đau biên chuyển thành rủi ro cốt lõi gây mất người dùng.

---

## 2. So sánh mức độ hoạt động của từng công cụ

| Công cụ | Phát hành hôm nay | Số lượng Issues đang hoạt động | Số lượng PR đang hoạt động | Đặc điểm chính |
|:---|:---|:---|:---|:---|
| **Claude Code** | Không | Rất cao (#46987 114 bình luận mỗi mục) | Thấp (chủ yếu dọn rác PR) | Quy mô người dùng hiện có lớn, quản trị dựa trên Issues, tốc độ phản hồi của chính thức phân hóa (khắc phục 24h cho quy trình cốt lõi vs. tồn đọng nhu cầu dài hạn) |
| **OpenAI Codex** | 3 phiên bản Rust alpha (v0.123.0-alpha.8~10) | Cao (#16231 42 bình luận, #14936 56 bình luận) | Rất cao (6 PR di chuyển PermissionProfile đang được thúc đẩy đồng thời) | Tái cấu trúc kiến trúc dày đặc, phiên bản Rust/Node song song bị phân mảnh |
| **Gemini CLI** | 1 bản vá khẩn cấp (v0.39.0-preview.2) | Trung-cao (50 Issues đang hoạt động được phân nhóm) | Cao (#25825/#25834 Luồng đầu ra Shell 2 PR liên kết) | Lặp lại nhanh kênh xem trước, lấy thời gian thực và kiểm soát Agent làm trọng tâm |
| **GitHub Copilot CLI** | 2 phiên bản (v1.0.35-3/35-4) | Trung bình (Issues liên quan đến mô hình chiếm hơn 30%) | Rất thấp (chỉ cập nhật 2 PR, cốt lõi là mã đóng) | Lặp lại dựa trên phát hành phiên bản, mức độ tham gia của cộng đồng mã nguồn mở hạn chế |
| **Kimi CLI** | 1 phiên bản ổn định (v1.38.0) | Rất cao (13 Issues mới trong 24 giờ, bao gồm P0) | Cao (10 PR, bao gồm đổi mới kiến trúc #1960 RalphFlow) | PR cơ sở hạ tầng được hợp nhất dày đặc, áp lực thương mại hóa ngày càng rõ rệt |
| **OpenCode** | Không | Cao (50 Issues/PR đang hoạt động) | Cao (chẩn đoán LSP, tối ưu hóa TUI, tương thích mô hình song song đa tuyến) | Hệ sinh thái plugin và tương thích đa mô hình là chiến trường cốt lõi |
| **Pi** | 1 phiên bản ổn định (v0.69.0) | Cao (hơn 20 Issues chất lượng cao được đóng mỗi ngày) | Trung bình (di chuyển TypeBox là cốt lõi) | Chuyên sâu hệ thống mở rộng và tăng cường bảo mật song song |
| **Qwen Code** | 1 phiên bản ổn định (v0.15.0) + 2 phiên bản bảo trì | Rất cao (#3203 113 bình luận mỗi mục, vấn đề chính sách gây bùng nổ) | Trung-cao (khắc phục hiển thị, PR quan trọng như giao diện người dùng Agent nền) | Tâm lý cộng đồng bị thúc đẩy bởi thay đổi chính sách, xác thực và thanh toán trở thành biến số lớn nhất |

> **Thứ tự mức độ hoạt động** (Tổng hợp Issues/PR/Phát hành): Kimi CLI ≈ Qwen Code > OpenAI Codex > Claude Code > OpenCode ≈ Pi > Gemini CLI > GitHub Copilot CLI

---

## 3. Hướng chức năng được quan tâm chung

| Hướng chức năng | Công cụ liên quan | Nhu cầu cụ thể | Mức độ khẩn cấp của ngành |
|:---|:---|:---|:---|
| **🛡️ Tái cấu trúc hệ thống quyền/hộp cát** | Codex (di chuyển PermissionProfile), Gemini (#24916 cấp phép lại → #25823 cấp phép vĩnh viễn mặc định), Copilot (#892 giới hạn hộp cát 37👍), Qwen (#3532 mô hình cục bộ vẫn bắt buộc xác thực) | Cách mạng hóa UX từ "xác nhận mỗi lần" sang "theo chính sách", triển khai chính sách hàng loạt cho doanh nghiệp | 🔥🔥🔥🔥🔥 |
| **💰 Tính minh bạch chi phí và hạn ngạch có thể kiểm soát** | Claude Code (#45756 hạn ngạch cạn kiệt trong 1.5h 140👍), Kimi (#1994 hạn ngạch 2 giờ ≈ 2 nhiệm vụ), Copilot (#2591 mỗi phiên 80-100 yêu cầu Premium), Qwen (#3203 hạn ngạch miễn phí 1000→100/ngày) | Ước tính trước mức tiêu thụ Token, tùy chọn thanh toán theo số yêu cầu, kiểm soát rõ ràng độ dài chuỗi suy nghĩ | 🔥🔥🔥🔥🔥 |
| **☁️ Đồng bộ hóa hội thoại đa nền tảng** | Claude Code (#28791 cô lập CLI-Desktop 33👍), Codex (#9224 điều khiển máy tính từ xa bằng điện thoại 304👍) | Liên tục lịch sử, ngữ cảnh, trạng thái plugin trên nhiều thiết bị | 🔥🔥🔥🔥 |
| **🔌 Quản trị hệ sinh thái MCP** | Codex (#18333 MCP khởi động lại nhiều lần 492 tiến trình mồ côi), Gemini (#3502 loại bỏ tìm kiếm tích hợp chuyển sang MCP), Claude Code (#9354 lỗi đường dẫn plugin) | Quản lý vòng đời tiến trình, mở rộng hook, tính nhất quán của lược đồ thị trường | 🔥🔥🔥🔥 |
| **🖥️ Tinh chỉnh trải nghiệm TUI/terminal** | Claude Code (#8477 bắt buộc hiển thị thinking 232👍), OpenCode (#6096 hiển thị TPS 44👍), Gemini (#25166 Shell treo), Kimi (#1990 IDEA terminal sập) | Trực quan hóa trạng thái, chạy nền, độ sâu tích hợp IDE, khả năng kiểm soát hiển thị | 🔥🔥🔥🔥 |
| **🏢 Thích ứng triển khai cấp doanh nghiệp** | Claude Code (#32668 backend Bedrock 225👍), Pi (hỗ trợ Cloudflare Workers), Qwen (#3535 bỏ qua SSL), Kimi (#2000 loại bỏ CIDR IPv6 proxy) | Đám mây riêng, nội mạng, thời gian chạy biên, tuân thủ SSO/kiểm toán | 🔥🔥🔥🔥 |

---

## 4. Phân tích định vị khác biệt

| Công cụ | Trọng tâm chức năng | Người dùng mục tiêu | Lộ trình kỹ thuật | Rủi ro cốt lõi |
|:---|:---|:---|:---|:---|
| **Claude Code** | Hiểu mã sâu, tương tác TUI, hệ sinh thái plugin MCP | Nhà phát triển chuyên nghiệp, người áp dụng sớm quy trình làm việc gốc AI | Cốt lõi Node.js, ràng buộc sâu với API Anthropic | Độ ổn định API, hộp đen đo lường hạn ngạch, phân mảnh đa nền tảng |
| **OpenAI Codex** | Kiến trúc hệ thống quyền, hiệu suất Rust, mở rộng IDE | Cảnh báo bảo mật cấp doanh nghiệp, người dùng nặng VS Code | Rust/Node song song song, tái cấu trúc SandboxPolicy → PermissionProfile | Phân mảnh phiên bản, sự cố hộp cát thường xuyên, dịch vụ nén ngữ cảnh không ổn định |
| **Gemini CLI** | Kiểm soát biên thông minh Agent, đầu ra luồng thời gian thực, tương tác giọng nói | Người dùng hệ sinh thái Google, nhà khám phá đa phương thức | Lặp lại nhanh kênh xem trước, tái cấu trúc kiến trúc ContextManager | Hành vi Agent con không thể đoán trước, nợ tương thích SSH/Windows |
| **GitHub Copilot CLI** | Đặt tên phiên, trực quan hóa biểu đồ đóng góp, tích hợp liền mạch hệ sinh thái Copilot | Người dùng đăng ký trả phí GitHub, người dùng mở rộng Copilot hiện có | Chủ yếu mã đóng, tích hợp sâu với VS Code/IDE | Tính khả dụng của mô hình không rõ ràng, hộp đen chi phí Agent, mức độ tham gia cộng đồng thấp |
| **Kimi CLI** | Viễn trắc toàn bộ liên kết, độ tin cậy OAuth, đổi mới kiến trúc RalphFlow | Nhà phát triển Trung Quốc, cảnh báo CI/CD doanh nghiệp | Cốt lõi Python, tối ưu hóa sâu mô hình K2.6 | Biến động chính sách thương mại hóa, quản lý kỳ vọng bùng nổ Token, khả năng tương thích Windows |
| **OpenCode** | Tương thích đa mô hình (GPT/Kimi/Claude/Copilot), khả năng mở rộng plugin, tích hợp sâu LSP | Người chuyển đổi đa mô hình, người ưa chuộng mã nguồn mở, người dùng hợp tác nhóm | Kiến trúc plugin TypeScript, lớp trừu tượng nhà cung cấp | Tổn thương thay đổi im lặng của nhà cung cấp mô hình, địa ngục phụ thuộc zod, phạm vi kiểm tra Windows không đủ |
| **Pi** | Chuyên sâu hệ thống mở rộng (phạm vi hiển thị/MentionProvider), tăng cường bảo mật, hỗ trợ thời gian chạy hạn chế | Nhà phát triển mở rộng, cảnh báo triển khai biên/tư nhân hóa | Di chuyển TypeBox 1.x, ưu tiên nhúng SDK | Cam kết độ ổn định API mở rộng, thiếu trừu tượng hóa đường dẫn đa nền tảng |
| **Qwen Code** | Hook ACP, chế độ nén, trực quan hóa Agent nền | Người dùng hệ sinh thái Alibaba Cloud, cộng đồng nhà phát triển Trung Quốc | TUI React, điều chỉnh kiến trúc MCP hóa | Biến động kép chính sách xác thực và kỹ thuật, hộp đen cấu hình mô hình cục bộ, cắt giảm hạn ngạch miễn phí |

---

## 5. Mức độ phổ biến và sự trưởng thành của cộng đồng

```
Sự trưởng thành ╲ Mức độ phổ biến    Thấp ◄────────────────────────► Cao
    ▲
    │  Cao    [Pi]          [OpenCode]   [Kimi CLI] [Qwen Code]
    │        (Bảo mật/Mở rộng)    (Tương thích đa mô hình)  (Viễn trắc/OAuth) (ACP/Chính sách)
    │                      /
    │        [Gemini CLI] /
    │        (Thời gian thực/Agent)/
    │                     /
    │  Trung    [Claude Code]──────────────[OpenAI Codex]
    │        (Quy mô lớn/Dựa trên Issues)         (Tái cấu trúc kiến trúc/Phân mảnh phiên bản)
    │        /
    │       /
    │  Thấp  [Copilot CLI]
    │      (Mã đóng/Mức độ tham gia cộng đồng cực thấp)
    │
    └──────────────────────────────────────────────►
```

| Góc phần tư | Công cụ | Đặc điểm |
|:---|:---|:---|
| **Mức độ phổ biến cao · Lặp lại nhanh** | Kimi CLI, Qwen Code, OpenCode | Hợp nhất PR hàng ngày, mở rộng chức năng mạnh mẽ, áp lực thương mại hóa rõ rệt |
| **Mức độ phổ biến cao · Tái cấu trúc kiến trúc** | OpenAI Codex | Di chuyển mô hình quyền cơ bản, di chuyển sang Rust, đau đớn về độ ổn định |
| **Mức độ phổ biến cao · Chịu áp lực quản trị** | Claude Code | Quy mô người dùng lớn, tồn đọng nhu cầu dài hạn, phản hồi của chính thức phân hóa |
| **Mức độ phổ biến trung bình · Khám phá khác biệt** | Gemini CLI, Pi | Tối ưu hóa chuyên sâu cho các cảnh báo cụ thể (thời gian thực/khả năng mở rộng/bảo mật) |
| **Mức độ phổ biến thấp · Hệ sinh thái đóng** | Copilot CLI | Lặp lại dựa trên phát hành phiên bản, cộng đồng mã nguồn mở bị gạt ra ngoài lề, niềm tin phụ thuộc vào thương hiệu |

---

## 6. Tín hiệu xu hướng đáng chú ý

### 🔮 Xu hướng cấp ngành

| Tín hiệu | Bằng chứng | Giá trị tham khảo cho nhà phát triển |
|:---|:---|:---|
| **Mô hình thanh toán chuyển đổi từ "hộp đen Token" sang "yêu cầu có thể dự đoán"** | Kimi #1994 "lời hứa 300-1200 yêu cầu" lệch 100 lần so với mức tiêu thụ Token thực tế; Claude Code #51141 người dùng sẵn sàng trả $600 cho 100 lần nhưng yêu cầu đo lường minh bạch | **Ưu tiên xác minh cơ chế cảnh báo hạn ngạch khi lựa chọn** , yêu cầu nhà cung cấp cung cấp ước tính Token trước yêu cầu hoặc tùy chọn thanh toán theo số yêu cầu |
| **Hệ thống quyền trở thành hào thành khác biệt** | Di chuyển toàn bộ PermissionProfile của Codex (6 PR), mặc định hóa cấp phép vĩnh viễn của Gemini, nhu cầu hộp cát Copilot 37👍 | **Đánh giá khả năng biểu đạt chính sách của mô hình quyền khi xem xét các cảnh báo bảo mật** , thay vì chỉ xem xét "có hay không có hộp cát" |
| **MCP từ "mở rộng chức năng" chuyển thành "nợ kiến trúc"** | Codex #18333 492 tiến trình mồ côi, Claude Code #9354 lỗi phân tích đường dẫn, Gemini #3502 loại bỏ tìm kiếm tích hợp chuyển sang MCP | **Quản lý vòng đời tiến trình MCP sẽ trở thành tiêu chuẩn vận hành** , cần lên kế hoạch trước giám sát tiến trình và thu hồi tài nguyên |
| **"Biến động chính sách" của công cụ trong nước trở thành thường lệ** | Qwen #3203 hạn ngạch miễn phí 1000→100/ngày, tranh chấp hạn ngạch Kimi | **Khi sử dụng công cụ trong nước trong môi trường sản xuất, cần có đường dẫn dự phòng cho mô hình cục bộ** , tránh bị gián đoạn quy trình làm việc do thay đổi chính sách đột ngột của một nhà cung cấp duy nhất |
| **Tổn thương "thay đổi im lặng của nhà cung cấp mô hình" lan rộng** | OpenCode #22788 Copilot loại bỏ max effort, #20698 Azure GPT 5.4 định dạng suy luận thay đổi, #14593 Kimi bỏ qua quyền | **Lớp trừu tượng nhà cung cấp mô hình (ví dụ: chế độ OpenCode) sẽ trở thành kiến trúc phòng thủ** , giảm thiểu rủi ro khóa nhà cung cấp duy nhất |
| **TUI từ "có thể sử dụng" chuyển sang cạnh tranh "trải nghiệm gốc"** | Claude Code #8477 hiển thị thinking 232👍, OpenCode #6096 hiển thị TPS, Kimi #2010 chuẩn hóa Shift+Enter, chế độ giọng nói Gemini | **Chi tiết tương tác terminal trở thành chi phí di chuyển quan trọng** , khi đánh giá cần chú ý đến quy ước phím tắt, độ sâu tích hợp IDE, khả năng chạy nền |

### ⚡ Đề xuất hành động ngắn hạn

| Mức độ ưu tiên | Hành động |
|:---|:---|
| **Ngay lập tức** | Kiểm toán mô hình tiêu thụ hạn ngạch của công cụ AI CLI hiện có, đặt ngưỡng cảnh báo bất thường |
| **Trong tháng này** | Xác minh tính khả thi của đường dẫn dự phòng cho quy trình làm việc cốt lõi trên mô hình cục bộ (Ollama/vLLM) |
| **Trong quý này** | Đánh giá giá trị giảm thiểu rủi ro khóa nhà cung cấp của lớp trừu tượng đa mô hình (OpenCode/Pi SDK) |
| **Hàng năm** | Đưa khả năng biểu đạt chính sách quyền vào danh sách kiểm tra tuân thủ bảo mật khi lựa chọn công cụ AI |

---

*Báo cáo được tạo dựa trên dữ liệu công khai trên GitHub của từng công cụ vào ngày 2026-04-23, chỉ dùng để tham khảo quyết định kỹ thuật.*

---

## Báo cáo chi tiết từng công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Điểm nóng cộng đồng Claude Code Skills

> Nguồn dữ liệu: [anthropics/skills](https://github.com/anthropics/skills)

# Báo cáo điểm nóng cộng đồng Claude Code Skills (2026-04-23)

---

## 1. Xếp hạng Skills phổ biến (theo mức độ quan tâm của cộng đồng)

| Thứ hạng | Skill | Tổng quan chức năng | Trạng thái | Liên kết |
|:---|:---|:---|:---|:---|
| 1 | **document-typography** | Kiểm soát chất lượng dàn trang tài liệu do AI tạo ra: khắc phục các vấn đề dàn trang điển hình như cô độc dòng, cô độc từ, đánh số sai | 🟡 Mở | [PR #514](https://github.com/anthropics/skills/pull/514) |
| 2 | **frontend-design** | Cải thiện độ rõ ràng và khả năng thực thi của Skill thiết kế giao diện người dùng: đảm bảo có thể hoàn thành lệnh thiết kế trong một lần hội thoại | 🟡 Mở | [PR #210](https://github.com/anthropics/skills/pull/210) |
| 3 | **skill-quality-analyzer / skill-security-analyzer** | Siêu Skill: đánh giá chất lượng Skill hiện có theo 5 chiều (cấu trúc, lệnh, bảo mật, v.v.) và kiểm toán bảo mật | 🟡 Mở | [PR #83](https://github.com/anthropics/skills/pull/83) |
| 4 | **odt** | Tạo, điền mẫu và chuyển đổi định dạng OpenDocument (odt/ods) sang HTML | 🟡 Mở | [PR #486](https://github.com/anthropics/skills/pull/486) |
| 5 | **testing-patterns** | Các mẫu kiểm thử toàn diện: triết lý kiểm thử, kiểm thử đơn vị, kiểm thử thành phần React, E2E, hiệu suất và khả năng truy cập | 🟡 Mở | [PR #723](https://github.com/anthropics/skills/pull/723) |
| 6 | **SAP-RPT-1-OSS predictor** | Tích hợp mô hình cơ sở bảng SAP mã nguồn mở để phân tích dự đoán dữ liệu kinh doanh SAP | 🟡 Mở | [PR #181](https://github.com/anthropics/skills/pull/181) |
| 7 | **sensory** | Tự động hóa gốc macOS: thay thế Sử dụng Máy tính dựa trên ảnh chụp màn hình bằng AppleScript/osascript | 🟡 Mở | [PR #806](https://github.com/anthropics/skills/pull/806) |
| 8 | **hads-convert / HADS** | Human-AI Document Standard: Chuyển đổi tài liệu kỹ thuật sang định dạng thân thiện với cả AI và con người | 🟡 Mở | [PR #622](https://github.com/anthropics/skills/pull/622) · [PR #616](https://github.com/anthropics/skills/pull/616) |

**Điểm nóng thảo luận**: document-typography giải quyết các vấn đề phổ biến của tài liệu do AI tạo ra; testing-patterns và SAP-RPT-1-OSS đại diện cho hai hướng tích hợp bộ công cụ nhà phát triển và ERP doanh nghiệp; ý tưởng tự động hóa gốc macOS của sensory đã thúc đẩy các cuộc thảo luận về các giải pháp thay thế cho "điều khiển GUI không có thị giác".

---

## 2. Xu hướng nhu cầu cộng đồng (tổng hợp từ Issues)

| Nhu cầu | Issue đại diện | Yêu cầu cốt lõi |
|:---|:---|:---|
| **Chia sẻ Skill cấp tổ chức** | [#228](https://github.com/anthropics/skills/issues/228) | Chia sẻ Skill trực tiếp trong doanh nghiệp/nhóm, thay vì tải thủ công → phân phối qua Slack/Teams → tải lên từng cái một |
| **Skill dưới dạng MCP hiển thị** | [#16](https://github.com/anthropics/skills/issues/16) | Đóng gói Skill thành API chuẩn hóa MCP (Model Context Protocol), cho phép gọi liên công cụ |
| **Tương thích AWS Bedrock** | [#29](https://github.com/anthropics/skills/issues/29) | Giải pháp sử dụng Skills trên các kênh không chính thức của Anthropic (Bedrock doanh nghiệp) |
| **Ranh giới an toàn và tin cậy** | [#492](https://github.com/anthropics/skills/issues/492) | Skill cộng đồng mạo danh không gian tên `anthropic/`, cần quản trị chính thức để ngăn chặn lạm dụng quyền |
| **Chất lượng Skill và hệ thống đánh giá** | [#202](https://github.com/anthropics/skills/issues/202) | `skill-creator` tự nó phải tuân theo các phương pháp hay nhất, giảm thiểu phản mẫu "dạy con người thay vì dạy Claude" |
| **Độ tin cậy thời gian chạy** | [#556](https://github.com/anthropics/skills/issues/556) · [#406](https://github.com/anthropics/skills/issues/406) · [#403](https://github.com/anthropics/skills/issues/403) | Tỷ lệ kích hoạt Skill 0%, lỗi 500 khi tải lên, lỗi thất bại khi xóa phiên bản và các vấn đề về độ ổn định cơ sở hạ tầng |

---

## 3. Skills có tiềm năng cao chờ hợp nhất (PR đang hoạt động, có thể ra mắt sớm)

| Skill | Tác giả | Điểm nổi bật | Liên kết |
|:---|:---|:---|:---|
| **document-typography** | PGTBoos | Giải quyết các điểm đau phổ biến của tài liệu do AI tạo ra, giải pháp kỹ thuật trưởng thành (từ cô độc, dòng cô độc, lỗi định dạng) | [PR #514](https://github.com/anthropics/skills/pull/514) |
| **testing-patterns** | 4444J99 | Bao phủ kim tự tháp kiểm thử đầy đủ, lấp đầy khoảng trống Skill kiểm thử chính thức | [PR #723](https://github.com/anthropics/skills/pull/723) |
| **odt** | GitHubNewbie0 | Hỗ trợ định dạng tài liệu mã nguồn mở, đáp ứng nhu cầu tiêu chuẩn ISO cho các tình huống tuân thủ của chính phủ/doanh nghiệp | [PR #486](https://github.com/anthropics/skills/pull/486) |
| **sensory** | AdelElo13 | Tự động hóa gốc macOS so với Sử dụng Máy tính trực quan, hiệu suất và lợi thế quyền riêng tư đáng kể | [PR #806](https://github.com/anthropics/skills/pull/806) |
| **hads-convert** | catcam | Mô hình kinh tế rõ ràng của "chi phí chuyển đổi một lần, giảm vĩnh viễn token đọc AI", đã được cộng đồng độc lập xác minh | [PR #622](https://github.com/anthropics/skills/pull/622) |

> Lưu ý: Lubrsy706 đã liên tục gửi 3 PR sửa lỗi ([#538](https://github.com/anthropics/skills/pull/538) · [#539](https://github.com/anthropics/skills/pull/539) · [#541](https://github.com/anthropics/skills/pull/541)), tập trung vào các vấn đề ổn định cơ bản như phân tích YAML, tính toàn vẹn tài liệu DOCX, cho thấy sự quan tâm ngày càng tăng của cộng đồng đối với độ tin cậy ở cấp độ sản xuất.

---

## 4. Phân tích hệ sinh thái Skills

> **Yêu cầu cốt lõi**: Cộng đồng đang chuyển từ "sự phong phú chức năng" sang "độ tin cậy trong sản xuất" - người dùng doanh nghiệp yêu cầu chia sẻ cấp tổ chức và tuân thủ SSO, nhà phát triển yêu cầu kích hoạt Skill có thể dự đoán, chuẩn hóa định dạng tài liệu, ranh giới bảo mật rõ ràng, và sự xuất hiện của các siêu Skill (phân tích chất lượng, kiểm toán bảo mật, chuyển đổi định dạng HADS) đánh dấu sự đi vào giai đoạn tự quản trị và tối ưu hóa hiệu quả mới của hệ sinh thái.

---

---

# Báo cáo cập nhật cộng đồng Claude Code | 2026-04-23

---

## 1. Tổng quan hôm nay

Hôm nay, cộng đồng không có bản phát hành mới, nhưng mức độ hoạt động của Issues cực kỳ cao: **vấn đề hết thời gian chờ luồng API tiếp tục gia tăng** (#46987 vượt 114 bình luận), **tiêu thụ hạn ngạch chi phí bất thường** trở thành điểm đau mới (#45756, #52163). Đồng thời, nhu cầu chức năng cấp doanh nghiệp như trực quan hóa trạng thái TUI, đồng bộ hóa đa nền tảng tiếp tục tồn đọng, nhu cầu của cộng đồng về độ ổn định và khả năng quan sát của Claude Code tăng đáng kể.

---

## 2. Phát hành phiên bản

**Không có bản phát hành mới** (không có Release trong 24 giờ qua)

---

## 3. Issues nóng cộng đồng

| # | Tiêu đề | Trạng thái | Dữ liệu chính | Phân tích mức độ quan trọng |
|---|------|------|---------|-----------|
| [#46987](https://github.com/anthropics/claude-code/issues/46987) | API Error: Stream idle timeout - partial response received | 🔴 MỞ | 114 bình luận / 104 👍 | **Nóng nhất hôm nay**: Sự cố hết thời gian chờ luồng API của Anthropic bùng phát trên nền tảng macOS, người dùng thường xuyên gặp phải tình trạng gián đoạn phản hồi một phần, ảnh hưởng đến trải nghiệm sử dụng cốt lõi, cộng đồng vẫn đang chờ giải pháp sửa chữa từ chính thức |
| [#8477](https://github.com/anthropics/claude-code/issues/8477) | Add Option to Always Show Claude's Thinking | 🔴 MỞ | 71 bình luận / 232 👍 | **Nhu cầu có phiếu bầu cao dài hạn**: Sau phiên bản v2.0, nội dung thinking bị ẩn theo mặc định, nhà phát triển rất muốn hiển thị bắt buộc để hiểu quy trình ra quyết định của mô hình, nhu cầu cần thiết cho các tình huống giáo dục và gỡ lỗi |
| [#32668](https://github.com/anthropics/claude-code/issues/32668) | Support Amazon Bedrock as backend for Claude Desktop / Cowork | 🔴 MỞ | 58 bình luận / 225 👍 | **Điểm đau tuân thủ doanh nghiệp**: CLI đã hỗ trợ `CLAUDE_CODE_USE_BEDROCK=1`, nhưng Desktop/Cowork còn thiếu, tích hợp hệ sinh thái AWS của các doanh nghiệp lớn bị cản trở |
| [#45756](https://github.com/anthropics/claude-code/issues/45756) | Pro Max 5x Quota Exhausted in 1.5 Hours Despite Moderate Usage | 🔴 MỞ | 47 bình luận / 140 👍 | **Khủng hoảng niềm tin hệ thống thanh toán**: Người dùng nền tảng WSL báo cáo tiêu thụ hạn ngạch bất thường, gói 5x cạn kiệt trong 1.5 giờ, gây nghi ngờ về tính chính xác của đo lường chi phí |
| [#34820](https://github.com/anthropics/claude-code/issues/34820) | claude.ai visualize feature broken — DNS_PROBE_FINISHED_NXDOMAIN | 🔴 MỞ | 45 bình luận / 16 👍 | **Tính khả dụng của dịch vụ**: Lỗi phân giải tên miền `claudemcpcontent.com` khiến chức năng trực quan hóa toàn bộ không khả dụng, cần sửa chữa ở cấp độ cơ sở hạ tầng |
| [#51874](https://github.com/anthropics/claude-code/issues/51874) | [Error] Tool result could not be submitted | 🟢 ĐÃ ĐÓNG | 38 bình luận / 33 👍 | **Xác minh sửa chữa nhanh**: Vấn đề báo cáo lỗi gửi công cụ mới hôm qua, đã đóng trong vòng 24 giờ, cho thấy Anthropic phản hồi nhanh với các lỗi quy trình cốt lõi |
| [#9354](https://github.com/anthropics/claude-code/issues/9354) | Fix `${CLAUDE_PLUGIN_ROOT}` in command markdown OR support local project plugin installation | 🔴 MỞ | 25 bình luận / 49 👍 | **Tắc nghẽn hệ sinh thái plugin**: Lỗi phân tích đường dẫn plugin cản trở quy trình làm việc phát triển cục bộ, ảnh hưởng đến việc mở rộng hệ sinh thái plugin MCP |
| [#45775](https://github.com/anthropics/claude-code/issues/45775) | claude.ai Gmail MCP regression: create_draft missing threadId parameter | 🔴 MỞ | 18 bình luận / 16 👍 | **Khả năng tương thích giao thức MCP**: Tham số thiếu trong lệnh gọi công cụ Gmail khiến chức năng tạo bản nháp thư bị lỗi, vấn đề ổn định máy chủ MCP của bên thứ ba |
| [#9686](https://github.com/anthropics/claude-code/issues/9686) | JSON schema specified in the marketplace.json doesn't exist | 🔴 MỞ | 15 bình luận / 33 👍 | **Tính toàn vẹn của thị trường plugin**: Siêu dữ liệu thị trường không đồng bộ với tệp lược đồ, ảnh hưởng đến quy trình xác thực và phân phối plugin |
| [#28791](https://github.com/anthropics/claude-code/issues/28791) | Sync conversation history between CLI and Claude Code desktop app | 🔴 MỞ | 14 bình luận / 33 👍 | **Phân mảnh trải nghiệm đa nền tảng**: Hội thoại CLI và Desktop bị cô lập, nhà phát triển buộc phải chọn một, thiếu kiến trúc đồng bộ hóa đám mây |

---

## 4. Tiến triển PR quan trọng

| # | Tiêu đề | Trạng thái | Tác giả | Nội dung chức năng/sửa chữa |
|---|------|------|------|-------------|
| [#51948](https://github.com/anthropics/claude-code/pull/51948) | Add workflow for publishing package to WinGet repository | 🟡 MỞ | mdanish-kh | **Bổ sung quan trọng cho hệ sinh thái Windows**: Tự động phát hành lên trình quản lý gói WinGet của Microsoft, giải quyết vấn đề đường dẫn cài đặt cho người dùng Windows, [liên quan #17160](https://github.com/anthropics/claude-code/issues/17160) |
| [#51875](https://github.com/anthropics/claude-code/pull/51875) | Sort unique IPs from DNS resolution before using in ipset(8) | 🟡 MỞ | tandon | **Sửa lỗi ổn định DevContainer**: Mở rộng CNAME `dig` dẫn đến bản ghi A trùng lặp khiến `ipset` thất bại, khởi động vùng chứa bị gián đoạn dưới `set -e`, sắp xếp loại bỏ trùng lặp giải quyết sự cố khởi tạo tường lửa |
| [#24509](https://github.com/anthropics/claude-code/pull/24509) | fix(plugin-dev): add marketplace.json entry example in create-plugin | 🟢 ĐÃ ĐÓNG | HerrEmil | **Tối ưu hóa trải nghiệm nhà phát triển**: Lệnh `create-plugin` thiếu ví dụ `marketplace.json` dẫn đến AI suy luận sai tên trường ( `path` vs `source` ), bổ sung ví dụ quy chuẩn để tránh lỗi cấu hình plugin |
| [#50643](https://github.com/anthropics/claude-code/pull/50643) | Main | 🟢 ĐÃ ĐÓNG | GoodshytGroup | Mẫu cấu hình không liên quan đến dự án (đã xóa) |
| [#50638](https://github.com/anthropics/claude-code/pull/50638) | Claude/fix readme images eu sfj | 🟢 ĐÃ ĐÓNG | GoodshytGroup | PR trống / đã xóa |
| [#50637](https://github.com/anthropics/claude-code/pull/50637) | Goodshyt group patch 1 | 🟢 ĐÃ ĐÓNG | GoodshytGroup | PR trống / đã xóa |
| [#50595](https://github.com/anthropics/claude-code/pull/50595) | Copilot/fix duplicate imports and restore classes | 🟢 ĐÃ ĐÓNG | GoodshytGroup | PR trống / đã xóa |
| [#50578](https://github.com/anthropics/claude-code/pull/50578) | Wrangler observability bootstrap | 🟢 ĐÃ ĐÓNG | GoodshytGroup | PR trống / đã xóa |
| [#50565](https://github.com/anthropics/claude-code/pull/50565) | Copilot/fix configuration again | 🟢 ĐÃ ĐÓNG | GoodshytGroup | PR trống / đã xóa |
| [#47895](https://github.com/anthropics/claude-code/pull/47895) | Add Claude Mythos operating contract for Veriflow immune system | 🟢 ĐÃ ĐÓNG | GoodshytGroup | Không liên quan đến dự án / đã xóa |

> **Lưu ý**: Một lượng lớn PR đã đóng từ `GoodshytGroup` là các bản gửi rác/thử nghiệm, đã nhanh chóng được người bảo trì xóa, cho thấy quản trị kho lưu trữ cần tăng cường kiểm soát truy cập.

---

## 5. Xu hướng nhu cầu chức năng

Dựa trên phân tích 50 Issues đang hoạt động, sự chú ý của cộng đồng tập trung vào năm hướng chính:

| Hướng xu hướng | Issues đại diện | Chỉ số mức độ phổ biến | Yêu cầu cốt lõi |
|---------|-----------|---------|---------|
| **🖥️ Trực quan hóa trạng thái/TUI** | #8477, #21894, #52160, #42107 | Tổng cộng 316 👍 | Hiển thị thinking bắt buộc, chỉ báo trạng thái terminal, phân biệt màu nền trạng thái đang chạy/rảnh/lỗi |
| **💰 Chi phí và minh bạch hạn ngạch** | #45756, #51141, #52163 | 140+ 👍 | Giải thích tiêu thụ hạn ngạch bất thường, gói siêu cao cấp 100 lần, giám sát sử dụng thời gian thực |
| **☁️ Đa nền tảng/Đồng bộ hóa đám mây** | #28791, #32668 | Tổng cộng 258 👍 | Đồng bộ hóa hội thoại CLI-Desktop, backend doanh nghiệp Bedrock, liên tục quy trình làm việc đa thiết bị |
| **🔌 MCP/Hệ sinh thái Plugin** | #9354, #39061, #9686, #46448 | 82 👍 | Phân tích đường dẫn plugin, báo cáo lỗi khởi động, tính nhất quán của lược đồ thị trường, hỗ trợ phát triển cục bộ |
| **🐛 Độ ổn định và độ tin cậy** | #46987, #51874, #47625, #52166 | Hơn 200 bình luận | Khôi phục hết thời gian chờ API, lỗi gửi công cụ, đóng băng mất tiêu điểm TUI, vẽ lại trình soạn thảo bên ngoài |

---

## 6. Điểm chú ý của nhà phát triển

### 🔴 Điểm đau tần suất cao

| Điểm đau | Phạm vi ảnh hưởng | Phản hồi điển hình |
|-----|---------|---------|
| **Hết thời gian chờ luồng API không có thử lại tự động** | Người dùng macOS trên mọi nền tảng | "multiple time today" — Gián đoạn nhiều lần trong ngày, không có cơ chế tiếp tục từ điểm dừng |
| **Hộp đen đo lường hạn ngạch** | Người dùng trả phí Pro/Max | Mức độ sử dụng nhảy vọt từ 8% lên 100% sau khi nâng cấp gói, độ tin cậy của hệ thống thanh toán bị tổn hại |
| **Độ nhạy tiêu điểm TUI dẫn đến treo** | Nhà phát triển đa nhiệm | Tạm dừng thực thi ngay khi terminal mất tiêu điểm, không thể chạy nhiệm vụ dài ở chế độ nền |
| **Cô lập hội thoại đa nền tảng** | Người dùng sử dụng cả CLI và Desktop | Lịch sử, ngữ cảnh, trạng thái plugin hoàn toàn bị cô lập |

### 🟡 Nhu cầu mới nổi

- **Triển khai cấp doanh nghiệp**：Backend Bedrock, xác thực SSO, nhật ký kiểm toán (xác thực Cowork bị treo #44654)
- **Tăng cường khả năng quan sát**：Làm rõ quy trình suy luận của mô hình, theo dõi chuỗi lệnh gọi công cụ, phân tích hiệu suất
- **Bổ sung trải nghiệm Windows**：Phân phối WinGet (tiến triển #51948), độ ổn định thiết bị ARM, tối ưu hóa phát hiện ảo hóa

### 💡 Xu hướng đề xuất của cộng đồng

> "we need 100x plan like ultra 100x i can pay for this $600" — [#51141](https://github.com/anthropics/claude-code/issues/51141)

Người dùng nặng sẵn sàng trả tiền cho hạn ngạch cao hơn, nhưng điều kiện tiên quyết là **đo lường minh bạch, tiêu thụ có thể dự đoán** . Thâm hụt niềm tin hiện tại của hệ thống chi phí có thể trở thành nút thắt cho việc thương mại hóa.

---

*Báo cáo hàng ngày được tạo dựa trên dữ liệu công khai trên GitHub, không đại diện cho lập trường chính thức của Anthropic.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Báo cáo cập nhật cộng đồng OpenAI Codex | 2026-04-23

## Tổng quan hôm nay

Hôm nay, cộng đồng Codex đã phát hành dày đặc 3 phiên bản alpha của phần Rust (v0.123.0-alpha.8~10), hệ thống quyền đang trải qua quá trình di chuyển toàn diện từ SandboxPolicy truyền thống sang `PermissionProfile`, với 6 PR liên quan đang được thúc đẩy đồng thời. Đồng thời, sự cố hộp cát Linux/macOS tiếp tục gia tăng, với mức sử dụng CPU cao của phần mở rộng VS Code trở thành phản hồi đau đớn nhất của các nhà phát triển.

---

## Phát hành phiên bản

| Phiên bản | Loại |
|:---|:---|
| [rust-v0.123.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.123.0-alpha.8) | Alpha |
| [rust-v0.123.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.123.0-alpha.9) | Alpha |
| [rust-v0.123.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.123.0-alpha.10) | Alpha |

> Lưu ý: Ba ghi chú phát hành phiên bản alpha đều trống, dự đoán là các thay đổi cơ sở hạ tầng của quá trình lặp lại cốt lõi Rust, có thể bao gồm các thay đổi cơ sở hạ tầng của quá trình tái cấu trúc hệ thống quyền.

---

## Issues nóng cộng đồng (chọn lọc 10 mục)

### 🔴 Ưu tiên cao: Hiệu suất và độ ổn định

| # | Issue | Trạng thái | Bình luận | Vấn đề cốt lõi |
|:---|:---|:---|:---|:---|
| [#16231](https://github.com/openai/codex/issues/16231) | Mức sử dụng CPU của phần mở rộng VS Code trên macOS tăng vọt sau khi cập nhật | MỞ | 42 | **Tiến trình `Code Helper renderer` có tải cao liên tục sau khi cập nhật M5 Pro Mac 26.325.31654** , cao nhất hôm nay là 58 👍, vấn đề hồi quy chưa được giải quyết |
| [#15764](https://github.com/openai/codex/issues/15764) | Code Helper (Renderer) trên 100% CPU | ĐÃ ĐÓNG | 23 | Vấn đề cùng gốc, ảnh hưởng đến các phiên bản sau 26.313.41514, đã đóng nhưng #16231 cho thấy việc sửa chữa không hoàn toàn |
| [#18333](https://github.com/openai/codex/issues/18333) | Áp lực bộ nhớ do khởi động lại ngăn xếp MCP đầy đủ trên Desktop nhiều lần | MỞ | 13 | **Khởi động ngăn xếp MCP cấp phiên/Agent con**, làm chậm hệ thống nghiêm trọng, lỗi kiến trúc |
| [#14666](https://github.com/openai/codex/issues/14666) | Rò rỉ bộ nhớ ứng dụng | MỞ | 4 | Vấn đề quản lý bộ nhớ tồn tại lâu đời, sử dụng RAM "tăng điên cuồng như crackhead" |

### 🟡 Hộp cát và Quyền: Khu vực thảm họa hồi quy

| # | Issue | Trạng thái | Bình luận | Vấn đề cốt lõi |
|:---|:---|:---|:---|:---|
| [#14936](https://github.com/openai/codex/issues/14936) | bwrap bật cảnh báo phê duyệt gần như mọi lệnh | **ĐÃ ĐÓNG** | 56 | Hồi quy hộp cát bubblewrap Linux, **21 👍, 56 bình luận là nóng nhất hôm nay**, đang xác minh sửa chữa |
| [#17525](https://github.com/openai/codex/issues/17525) | Ubuntu yêu cầu bỏ qua hộp cát cho mỗi lần chỉnh sửa thông thường | **ĐÃ ĐÓNG** | 24 | Cùng gốc với #14936, suy thoái nghiêm trọng trong 0.120.0, đã đóng |
| [#19020](https://github.com/openai/codex/issues/19020) | apply_patch bị treo dưới workspace-write | MỞ | 5 | **Lỗi mới trên macOS 0.122.0**: Đường dẫn hộp cát bình thường bị treo vô hạn, --dangerously-bypass có thể bỏ qua, bảo mật và chức năng phải chọn một |

### 🟢 Chức năng và Hệ sinh thái

| # | Issue | Trạng thái | Bình luận | Vấn đề cốt lõi |
|:---|:---|:---|:---|:---|
| [#9224](https://github.com/openai/codex/issues/9224) | Điều khiển từ xa Codex (điện thoại → máy tính) | MỞ | 40 | **204 👍 là một trong những nhu cầu cao nhất mọi thời đại** , ứng dụng ChatGPT trên điện thoại điều khiển CLI trên máy tính, chức năng cấp chiến lược sản phẩm |
| [#19015](https://github.com/openai/codex/issues/19015) | `/permissions` cần được gọi động trong nhiệm vụ | MỞ | 6 | Lỗi UX quản lý quyền: phải hủy nhiệm vụ mới có thể thay đổi quyền, làm gián đoạn quy trình làm việc |
| [#18918](https://github.com/openai/codex/issues/18918) | Hộp cát Windows áp dụng ACL DENY cho thư mục .git | MỞ | 5 | **Lỗi mới 0.122.0**: Thư mục .git trong thư mục gốc có thể ghi bị từ chối sai, `git commit` thất bại |

---

## Tiến triển PR quan trọng (chọn lọc 10 mục)

### Di chuyển kiến trúc hệ thống quyền (Loạt 6 PR do bolinfest dẫn đầu)

| # | PR | Thay đổi cốt lõi |
|:---|:---|:---|
| [#18282](https://github.com/openai/codex/pull/18282) | protocol: report session permission profiles | Sự kiện `SessionConfigured` mang theo `PermissionProfile`, đồng bộ hóa trạng thái máy khách không cần suy luận lại trường sandbox cũ |
| [#18283](https://github.com/openai/codex/pull/18283) | app-server: accept command permission profiles | Điểm vào `command/exec` trực tiếp chấp nhận `PermissionProfile`, quyền thực thi lệnh được căn chỉnh với API thread |
| [#18284](https://github.com/openai/codex/pull/18284) | tui: sync session permission profiles | Widget chat TUI lấy hồ sơ làm trạng thái có thẩm quyền của `SessionConfigured`, tránh hiển thị quyền lỗi thời sau khi cấu hình/khôi phục |
| [#18285](https://github.com/openai/codex/pull/18285) | tui: carry permission profiles on user turns | Ghi đè quyền của lượt người dùng sử dụng hồ sơ chuẩn hóa, loại bỏ việc qua lại trường sandbox cũ |
| [#18286](https://github.com/openai/codex/pull/18286) | mcp: include permission profiles in sandbox state | Siêu dữ liệu công cụ MCP hiển thị `permission_profile`, người tiêu dùng không cần suy luận từ trường cũ |
| [#18287](https://github.com/openai/codex/pull/18287) | shell-escalation: carry resolved permission profiles | Shell nâng cao quyền mang theo `PermissionProfile` đã phân tích cú pháp, bên gọi có thể xử lý quyền thống nhất |

> **Diễn giải kiến trúc**: 6 PR tạo thành quá trình di chuyển hoàn chỉnh `PermissionProfile` thay thế `SandboxPolicy`, bao phủ toàn bộ liên kết từ protocol → app-server → TUI → MCP → shell-escalation, là quá trình tái cấu trúc cơ bản của mô hình quyền thời gian chạy của Codex.

### Tăng cường chức năng và bảo mật

| # | PR | Thay đổi cốt lõi |
|:---|:---|:---|
| [#19050](https://github.com/openai/codex/pull/19050) | feat(request-permissions): approve with strict review | **Chức năng bảo mật quan trọng**: Cho phép người dùng phê duyệt `request_permissions_tool` với điều kiện bổ sung - tất cả các lệnh còn lại của lượt này phải được người giám sát xem xét, bất kể trạng thái hộp cát |
| [#19053](https://github.com/openai/codex/pull/19053) | Feat: enable fast mode for enterprise | Doanh nghiệp/Hội thoại thương mại mặc định bật FastMode; thêm thẻ `notice.fast_default_opt_out`, `/fast off` có thể duy trì lựa chọn tiêu chuẩn |
| [#18385](https://github.com/openai/codex/pull/18385) | Support MCP tools in hooks | **Mở rộng móc thời gian chạy**: `PreToolUse`/`PostToolUse`/`PermissionRequest` từ chỉ Bash mở rộng sang công cụ MCP, lược đồ hook giải phóng ràng buộc `tool_name: "Bash"` |
| [#18584](https://github.com/openai/codex/pull/18584) | [4/4] Wire remote streamable HTTP MCP | Hoàn thành kết nối MCP HTTP Streamable từ xa, `experimental_environment = "remote"` khả dụng đầu cuối |

---

## Xu hướng nhu cầu chức năng

```
┌─────────────────────────────────────────┐
│  1. Tái cấu trúc trải nghiệm quyền/hộp cát  ████████████████  │
│     (Di chuyển PermissionProfile + quyền động)   │
│                                         │
│  2. Tối ưu hóa hiệu suất mở rộng IDE    ████████████     │
│     (CPU/bộ nhớ/tiến trình hiển thị VS Code)           │
│                                         │
│  3. Quản trị hệ sinh thái MCP       ██████████       │
│     (Rò rỉ tài nguyên, khởi động lại nhiều lần, hỗ trợ hook)        │
│                                         │
│  4. Điều khiển từ xa/đa thiết bị     ████████         │
│     (Ứng dụng điện thoại ↔ CLI máy tính)                │
│                                         │
│  5. Độ tin cậy nén ngữ cảnh    ██████           │
│     (remote compact task 503/thất bại)       │
│                                         │
│  6. Khả năng tương thích hộp cát Windows           │
│     (ACL, .git, rò rỉ đường dẫn WSL)             │
└─────────────────────────────────────────┘
```

---

## Điểm chú ý của nhà phát triển

### 🔥 Điểm đau tần suất cao

| Điểm đau | Biểu hiện | Phiên bản ảnh hưởng |
|:---|:---|:---|
| **Thảm họa hiệu suất phần mở rộng VS Code** | `Code Helper renderer` 100%+ CPU, rò rỉ bộ nhớ, quạt quay điên cuồng | ≥26.313.41514, cả M5 Pro/Intel đều bị ảnh hưởng |
| **Phê duyệt hộp cát Linux mệt mỏi** | `bwrap` bật cửa sổ bật lên cho gần như mọi lệnh, quy trình làm việc bị gián đoạn hoàn toàn | 0.115.0~0.120.0, #14936/#17525 vừa đóng chờ xác minh |
| **Kiểm soát tài nguyên MCP mất kiểm soát** | Khởi động lại nhiều lần ngăn xếp MCP đầy đủ cho phiên mới, 492 tiến trình mồ côi trong 15 giờ | Desktop 26.415.x |
| **Dịch vụ nén ngữ cảnh không ổn định** | `remote compact task` 503/thất bại gây gián đoạn hội thoại | Khắp 0.114~0.122, người dùng Azure đặc biệt bị ảnh hưởng |

### 📣 Yêu cầu mạnh mẽ

1. **Cách mạng hóa UX hệ thống quyền**: Gọi động `/permissions` trong nhiệm vụ (#19015), duy trì phê duyệt vĩnh viễn (#16171 đã đóng nhưng vấn đề chưa được giải quyết triệt để), triển khai chính sách hàng loạt cho doanh nghiệp
2. **Vòng lặp phát triển từ xa hoàn chỉnh**: #9224 "điều khiển máy tính từ xa bằng điện thoại" 304 👍 chưa được thực hiện từ lâu, tạo ra khoảng cách khác biệt so với Cursor
3. **Công dân hạng nhất Windows**: Xử lý đường dẫn WSL (#18506), sửa ACL .git (#18918), hộp cát cùng tồn tại với git gốc

### ⚠️ Tín hiệu nợ kỹ thuật

- **Rủi ro xóa SandboxPolicy cũ**: Cảnh báo #18800 loại bỏ `codex --enable use_legacy_landlock` sẽ "gây ra nhiều vấn đề", nhưng quá trình di chuyển vẫn đang tăng tốc
- **Phân mảnh phiên bản Rust/Node**: CLI 0.122.0, App 26.415.x, Rust alpha 0.123.x song song ba tuyến, khó cho nhà phát triển căn chỉnh môi trường tái hiện vấn đề

---

*Báo cáo hàng ngày được tạo dựa trên dữ liệu công khai, không cấu thành lập trường chính thức của OpenAI.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Báo cáo cập nhật cộng đồng Gemini CLI | 2026-04-23

## Tổng quan hôm nay

Hoạt động cộng đồng hôm nay tăng đáng kể, **bản vá khẩn cấp v0.39.0-preview.2** đã khắc phục các vấn đề trong phiên bản xem trước, đồng thời **đầu ra luồng thời gian thực của lệnh shell** (PR #25825/#25834) và **mặc định kích hoạt cấp phép công cụ vĩnh viễn** (PR #25823) hai tối ưu hóa trải nghiệm lớn đã bước vào giai đoạn xem xét. Phản hồi của nhà phát triển về quản lý quyền, khả năng tương thích SSH và kiểm soát hành vi Agent tiếp tục gia tăng.

---

## Phát hành phiên bản

### v0.39.0-preview.2
| Thuộc tính | Nội dung |
|:---|:---|
| Loại | Bản vá khẩn cấp |
| Thay đổi | Cherry-pick sửa lỗi `d6f88f8` vào nhánh `v0.39.0-preview.1` |
| Kích hoạt | Robot tự động `@gemini-cli-robot` |
| Liên kết | [Phát hành](https://github.com/google-gemini/gemini-cli/pull/25776) |

> Bản vá này lặp lại nhanh chóng các vấn đề cụ thể của nhánh xem trước, cho thấy nhóm chú trọng vào độ ổn định của kênh xem trước.

---

## Issues nóng cộng đồng (10 mục)

| # | Issue | Vấn đề cốt lõi | Tầm quan trọng | Phản hồi cộng đồng |
|:---|:---|:---|:---|:---|
| **#22745** | [Đánh giá ánh xạ thư mục mã & đọc tệp nhận biết AST](https://github.com/google-gemini/gemini-cli/issues/22745) | Khám phá việc sử dụng công cụ AST để đọc chính xác ranh giới phương pháp, giảm lãng phí token | 🔥 **EPIC cấp kiến trúc** | 5 bình luận, dành riêng cho người bảo trì, liên quan đến việc nâng cao cơ bản khả năng hiểu mã của Agent |
| **#24916** | [Yêu cầu cấp phép lặp lại](https://github.com/google-gemini/gemini-cli/issues/24916) | Cài đặt "Cho phép tất cả các phiên trong tương lai" không hoạt động, cửa sổ bật lên lặp lại cho cùng một tệp | 🔒 Điểm đau trải nghiệm | 3 bình luận, ảnh hưởng trực tiếp đến luồng sử dụng bình thường ngoài `--yolo` |
| **#22323** | [Agent con bị ngắt ở MAX_TURNS bị báo cáo sai là thành công](https://github.com/google-gemini/gemini-cli/issues/22323) | `codebase_investigator` trả về trạng thái `GOAL` ngay cả sau khi hết giới hạn | 🐛 **Bug P1** | 3 bình luận, che giấu sự gián đoạn thực thi, dẫn đến chuỗi quyết định sai |
| **#25166** | [Shell lệnh bị treo: trạng thái "chờ nhập liệu"](https://github.com/google-gemini/gemini-cli/issues/25166) | Giao diện người dùng bị treo sau khi thực thi lệnh đơn giản, hiển thị "Awaiting user input" | 🐛 Vấn đề thường xuyên | 2 bình luận, 3 👍, phá vỡ nghiêm trọng quy trình làm việc tự động hóa |
| **#23571** | [Tệp script tạm thời nằm rải rác khắp nơi](https://github.com/google-gemini/gemini-cli/issues/23571) | Mô hình tạo tệp script chỉnh sửa trong thư mục ngẫu nhiên khi thực thi Shell bị giới hạn | 🧹 Gánh nặng dọn dẹp | 2 bình luận, cản trở việc cam kết sạch sẽ |
| **#22267** | [Browser Agent bỏ qua settings.json](https://github.com/google-gemini/gemini-cli/issues/22267) | Cấu hình như `maxTurns` không có hiệu lực đối với Agent duyệt | 🐛 Tính nhất quán cấu hình | 2 bình luận, hệ thống cấu hình và hệ thống con Agent bị phân mảnh |
| **#22819** | [Định tuyến bộ nhớ: toàn cục vs dự án](https://github.com/google-gemini/gemini-cli/issues/22819) | Agent bộ nhớ con cần phân biệt tùy chọn cấp người dùng và quy ước cấp dự án | ✨ Thiết kế chức năng cốt lõi | 1 bình luận, 2 👍, cơ sở hạ tầng quan trọng cho trải nghiệm Agent cá nhân hóa |
| **#23582** | [Agent con nhận biết chế độ phê duyệt](https://github.com/google-gemini/gemini-cli/issues/23582) | Lệnh Agent con mâu thuẫn với các ràng buộc thực tế trong chế độ Plan/Auto-Edit | 🔒 Bảo mật/Tính nhất quán | 1 bình luận, động cơ chính sách và lớp lệnh Agent bị tách rời |
| **#25216** | [Lỗi mở đường dẫn tạm thời A:\ ](https://github.com/google-gemini/gemini-cli/issues/25216) | Trên Windows, `realpath('A:\a')` ném `EISDIR` | 🐛 Khả năng tương thích nền tảng | 1 bình luận, chặn trải nghiệm người dùng Windows |
| **#24202** | [Văn bản bị lỗi trong phiên SSH](https://github.com/google-gemini/gemini-cli/issues/24202) | Lỗi hiển thị terminal trong phiên SSH từ Windows đến gLinux | 🐛 Phát triển từ xa | 1 bình luận, rào cản cốt lõi cho cảnh báo phát triển đám mây |

---

## Tiến triển PR quan trọng (10 mục)

| # | PR | Chức năng/Sửa chữa | Trạng thái | Giá trị cốt lõi |
|:---|:---|:---|:---|:---|
| **#25546** | [Kéo dài thời gian chờ pollCommand lên 120 giây](https://github.com/google-gemini/gemini-cli/pull/25546) | Giải quyết lỗi lệnh do mô hình "suy nghĩ lâu" | 🟡 Mở P1 | Loại bỏ lỗi hết thời gian chờ sai "đang suy nghĩ", nâng cao tỷ lệ thành công của nhiệm vụ phức tạp |
| **#25409** | [Tích hợp ContextManager mới & AgentChatHistory](https://github.com/google-gemini/gemini-cli/pull/25409) | Tái cấu trúc kiến trúc cốt lõi: quản lý ngữ cảnh và lịch sử hội thoại | 🟡 Mở | Đặt nền tảng cho bộ nhớ dài hạn, suy luận đa lượt |
| **#25825** | [Đầu ra luồng thời gian thực Shell (PR 1/2)](https://github.com/google-gemini/gemini-cli/pull/25825) | `stream_output: true` + `is_background: true` chuyển tiếp stdout thời gian thực | 🟡 Mở | **Lấp đầy khoảng trống "hộp đen" của tiến trình nền** , Agent có thể cảm nhận các sự kiện như giám sát tệp |
| **#25834** | [Đầu ra luồng Shell tiếp tục qua các lượt (PR 2/2)](https://github.com/google-gemini/gemini-cli/pull/25834) | Vẫn giữ luồng sự kiện sau khi kết thúc lượt, hỗ trợ các tình huống ConsultaSkill | 🟡 Mở | Xếp chồng lên #25825, đạt được **kết nối dài thực sự không đồng bộ** |
| **#25814** | [Tăng cường bảo mật chế độ không có giao diện người dùng](https://github.com/google-gemini/gemini-cli/pull/25814) | Tải an toàn .env + xác minh bắt buộc độ tin cậy không gian làm việc | 🟡 Mở P1 | Ngăn chặn rò rỉ cấu hình nhạy cảm trong các tình huống CI/CD |
| **#24174** | [Chế độ giọng nói thời gian thực](https://github.com/google-gemini/gemini-cli/pull/24174) | Backend kép (Gemini Live API) + cục bộ (Whisper.cpp) đầu vào giọng nói | 🟡 Mở | Nâng cấp tương tác lớn, ưu tiên quyền riêng tư cục bộ |
| **#25823** | [Mặc định kích hoạt cấp phép công cụ vĩnh viễn](https://github.com/google-gemini/gemini-cli/pull/25823) | Giá trị mặc định `enablePermanentToolApproval` được thay đổi thành `true` | 🟡 Mở | Giảm ma sát xác nhận lặp lại, phản hồi các phản hồi tương tự #24916 |
| **#25773** | [Quy trình làm việc Draft Optimizer](https://github.com/google-gemini/gemini-cli/pull/25773) | Dây chuyền tối ưu hóa bản nháp (chi tiết chờ bổ sung) | 🟡 Mở P1 | Tối ưu hóa chất lượng tạo mã, liên quan đến việc tinh chỉnh đầu ra Agent |
| **#25821** | [Sửa lỗi `/chat list` kích hoạt sai](https://github.com/google-gemini/gemini-cli/pull/25821) | Chỉ hiển thị gợi ý `list` khi nhập trống, lọc các đầu vào không khớp | 🟡 Mở P2 | Sửa lỗi chính xác tự động hoàn thành |
| **#25822** | [Bổ sung khóa response chủ đề tùy chỉnh](https://github.com/google-gemini/gemini-cli/pull/25822) | Lược đồ `CustomTheme` thiếu xác minh `text.response` | 🟡 Mở | Tính nhất quán giữa tài liệu hệ thống chủ đề và triển khai |

> **Điểm chính đã đóng**: #25832 sửa lỗi hộp thoại thả xuống lệnh `/` không phản hồi khi nhấn Enter (tương ứng với Issue #25835); #24496 Tối ưu hóa bộ nhớ DevTools (bộ đệm nhật ký mạng 2000→10, kết nối theo yêu cầu)

---

## Xu hướng nhu cầu chức năng

Bốn hướng chính được trích xuất từ 50 Issues đang hoạt động:

| Hướng xu hướng | Issues đại diện | Mức độ khẩn cấp của cộng đồng |
|:---|:---|:---|
| **🧠 Kiểm soát biên thông minh Agent** | #22323 Phục hồi Agent con, #23582 Nhận biết chế độ phê duyệt, #22672 Ngăn chặn hành vi phá hoại | ⭐⭐⭐⭐⭐ |
| **🔐 Hệ thống quyền và tin cậy** | #24916 Cấp phép lại, #25823 Mặc định hóa cấp phép vĩnh viễn, #25814 Bảo mật chế độ không có giao diện người dùng | ⭐⭐⭐⭐⭐ |
| **🖥️ Tương thích terminal/môi trường từ xa** | #24202 SSH bị lỗi, #24546 Phát hiện SSH, #25216 Đường dẫn Windows, #25166 Shell bị treo | ⭐⭐⭐⭐☆ |
| **📊 Độ sâu hiểu mã (AST)** | #22745 Đọc nhận biết AST, #22746 Ánh xạ thư mục mã AST | ⭐⭐⭐⭐☆ |

**Tín hiệu mới nổi**: Định tuyến toàn cục/dự án của hệ thống bộ nhớ (#22819, #22809) đang chuyển từ thiết kế sang triển khai, báo hiệu rằng trải nghiệm Agent cá nhân hóa sắp ra mắt.

---

## Điểm chú ý của nhà phát triển

### 🔴 Điểm đau tần suất cao

| Điểm đau | Biểu hiện cụ thể | Phạm vi ảnh hưởng |
|:---|:---|:---|
| **Phân mảnh quản lý quyền** | "Cho phép tất cả các phiên trong tương lai" không hoạt động, Agent con không nhận biết phê duyệt cấp cha | Tất cả người dùng tương tác |
| **Độ tin cậy thực thi Shell** | Bị treo, hết thời gian chờ quá ngắn, hộp đen tiến trình nền | Quy trình làm việc tự động hóa/script |
| **Khả năng tương thích terminal đa nền tảng** | Đường dẫn Windows, hiển thị phiên SSH, màu nền tmux | Phát triển từ xa, người dùng Windows |

### 🟡 Cải tiến mong muốn

- **Giới hạn số lượng công cụ**: #24246 đề cập đến việc kích hoạt lỗi 400 >128 công cụ, cần cắt giảm phạm vi tác vụ thông minh
- **Chất lượng nén**: Ví dụ nén cấp bệnh lý #23556 làm hỏng chất lượng đầu ra
- **Nâng cấp mô hình**: #23823 Di chuyển chuỗi công cụ nội bộ sang 3.1 flash lite

### 🟢 Tín hiệu tích cực

- **Tăng cường tính thời gian thực**: Chế độ giọng nói (#24174) + đầu ra luồng Shell (#25825/25834) song song
- **Hiện đại hóa kiến trúc**: Tái cấu trúc ContextManager (#25409) hỗ trợ hợp tác Agent phức tạp hơn

---

*Báo cáo hàng ngày được tạo dựa trên dữ liệu công khai của github.com/google-gemini/gemini-cli*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# Báo cáo cập nhật cộng đồng GitHub Copilot CLI | 2026-04-23

---

## Tổng quan hôm nay

Hôm nay, Copilot CLI đã liên tục phát hành hai phiên bản **v1.0.35-3** và **v1.0.35-4**, tập trung giới thiệu hai chức năng lớn là **Phiên có tên (Named Sessions)** và **Biểu đồ đóng góp theo phong cách GitHub**. Về phía cộng đồng, Issues liên quan đến mô hình vẫn tiếp tục nóng, hiển thị bất thường của bộ chọn mô hình GPT-5.4, các vấn đề về tính khả dụng của mô hình Opus 4.5/4.6 đã gây ra các cuộc thảo luận dày đặc; đồng thời, việc xác thực lược đồ nghiêm ngặt của v1.0.35-3 đã khiến các phiên cũ không thể khôi phục, và đã có nhiều báo cáo từ người dùng.

---

## Phát hành phiên bản

### v1.0.35-4 (mới nhất)
| Loại | Nội dung |
|:---|:---|
| **Mới** | Hỗ trợ đặt tên phiên bằng `--name`, khôi phục phiên theo tên bằng `--resume=<name>` |
| **Tối ưu hóa** | Cấu hình máy chủ LSP hỗ trợ thời gian chờ spawn/initialization/warmup tùy chỉnh; chỉ báo cửa sổ ngữ cảnh trên thanh trạng thái ẩn theo mặc định; di chuyển MCP OAuth sang lớp chạy chung |

### v1.0.35-3
| Loại | Nội dung |
|:---|:---|
| **Mới** | `/usage` bổ sung biểu đồ đóng góp theo phong cách GitHub, chế độ terminal không có màu tự động hạ cấp thành đồ họa ký tự; thích ứng với chế độ màu terminal |
| **Tối ưu hóa** | Tối ưu hóa đáng kể hiệu suất hiển thị văn bản số lượng lớn trong dòng thời gian; gọi tác vụ đồng bộ hóa thành chặn cho đến khi hoàn thành |

> ⚠️ **Rủi ro đã biết**: Việc xác thực lược đồ nghiêm ngặt được giới thiệu trong v1.0.35-3 khiến sự kiện `session.compaction_complete` phiên bản cũ không thể tải, xem Issue #2899

---

## Issues nóng cộng đồng

| # | Trạng thái | Tiêu đề | Bình luận | 👍 | Điểm mấu chốt |
|:---|: