# AI CLI Công cụ Cộng đồng Động thái Nhật báo 2026-05-05

> Thời gian tạo: 2026-05-05 00:20 UTC | Số lượng công cụ được bao phủ: 8

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

## Đối chiếu Ngang

# Báo cáo Phân tích Đối chiếu Hệ sinh thái Công cụ AI CLI | 2026-05-05

---

## 1. Toàn cảnh Hệ sinh thái

Hệ sinh thái công cụ AI CLI hiện tại đang thể hiện cấu trúc "chức năng tương đồng, trải nghiệm phân hóa": tất cả các công cụ chính đều đã bao phủ các khả năng cơ bản như cộng tác đa Agent, mở rộng MCP, hỗ trợ mô hình tư duy, v.v., nhưng lại tạo ra khoảng cách ở ba khía cạnh là **tính minh bạch về phí, độ tin cậy của thiết bị đầu cuối, và mức độ hoàn thiện của tự động hóa**. Claude Code của Anthropic dẫn đầu với kiến trúc đa Agent nhưng lại rơi vào khủng hoảng niềm tin về hạn ngạch, OpenAI Codex đang đẩy nhanh quá trình tái cấu trúc Rust nhưng thường xuyên gặp vấn đề TUI quay trở lại, Google Gemini CLI bị ảnh hưởng bởi sự cố về tính khả dụng của mô hình. Phe Trung Quốc (Kimi/Qwen/OpenCode) đang nhanh chóng bắt kịp trong việc thích ứng mô hình nội địa và đổi mới tương tác. Pi tạo ra sự khác biệt bằng cách tích hợp LLM cục bộ và kiến trúc mở. Nhìn chung, **"từ demo có thể sử dụng đến sản xuất đáng tin cậy"** đã trở thành mục tiêu chung cần phải nỗ lực vượt qua trong Quý 2 năm 2026.

---

## 2. Đối chiếu Hoạt động của từng Công cụ

| Công cụ | Issues Hôm nay | PRs Hôm nay | Phát hành Phiên bản | Động thái Cốt lõi |
|:---|:---|:---|:---|:---|
| **Claude Code** | 30+ (Tập trung vào khủng hoảng phí #38335, 681 bình luận) | 4 mục (Đóng góp cộng đồng thấp) | v2.1.128 | Số lượng công cụ MCP, plugin zip, vấn đề hạn ngạch bất thường tiếp tục leo thang |
| **OpenAI Codex** | 30+ (#19464 GPT-5.5 1M ngữ cảnh 120 bình luận) | 10+ (Di chuyển ThreadStore tăng tốc) | rust-v0.129.0-alpha.4/5 | Giai đoạn nước rút tái cấu trúc Rust, đầu vào TUI trở lại chưa được sửa hoàn toàn |
| **Gemini CLI** | 30+ (#19624 Mô hình không khả dụng 16 bình luận) | 10+ (Hàng loạt PR lịch sử được hợp nhất tập trung) | v0.42.0-nightly | Tái cấu trúc module hóa ACP, tính khả dụng của mô hình trở thành sự cố P0 |
| **GitHub Copilot CLI** | 30 cập nhật | **0 mục** (Hoạt động bằng không) | v1.0.41-0 | Hỗ trợ tệp đính kèm không tương tác, đóng băng PR thu hút sự chú ý |
| **Kimi Code CLI** | 5 mục (Quy mô cộng đồng tương đối nhỏ) | 1 mục (#2158 Chuyển đổi tư duy Ctrl+T) | Không có | Tính kiểm soát nội dung tư duy, lỗi tắt đột ngột trên Windows |
| **OpenCode** | 34 mục (Nhiều `closed-because-bigrefactor`) | 10+ (Bao gồm bản nháp tái cấu trúc cấp kiến trúc #25667) | v1.14.34 | Tính ổn định kết nối thiết bị đầu cuối, tương thích suy luận DeepSeek/Kimi |
| **Pi** | 34 mục (Liên tục `closed-because-bigrefactor`) | 10+ (#4154 Chính thức hóa LLM cục bộ, v.v.) | v0.73.0 | Di chuyển phí Xiaomi MiMo, mở rộng hệ sinh thái LLM cục bộ |
| **Qwen Code** | 15 mục | 10+ (Chuỗi cơ chế bảo mật FileReadCache) | v0.15.6-nightly | Chùm lỗi lớp hiển thị thiết bị đầu cuối, nâng cấp bảo mật thao tác tệp |

> **Phân tầng Hoạt động**: Claude Code / OpenAI Codex / Gemini CLI / OpenCode / Pi thuộc nhóm đầu tiên (Issues hoạt động hàng ngày 30+); Qwen Code trung bình; Kimi Code CLI giai đoạn đầu; **Copilot CLI hoạt động thấp bất thường (0 PR)**.

---

## 3. Hướng Chức năng được Quan tâm Chung

| Hướng chức năng | Công cụ liên quan | Yêu cầu cụ thể | Mức độ khẩn cấp |
|:---|:---|:---|:---|
| **Tính minh bạch phí & kiểm soát hạn ngạch** | Claude Code (#38335 681 bình luận), Copilot CLI (#2591 80-100 lần yêu cầu Premium), Gemini CLI (Chuyển đổi lỗi Flash→Flash-Lite) | Bảng điều khiển tiêu thụ thời gian thực, phát hiện bất thường, truy xuất lịch sử, cơ chế giảm cấp | 🔴 **Cao nhất** |
| **Trải nghiệm đầu vào Thiết bị đầu cuối/TUI** | OpenAI Codex (Quay lại Shift+Enter #20580/#21115), Kimi Code CLI (Tùy chỉnh Shift+Enter #1585), Qwen Code (Tàn dư thay đổi kích thước #3824/#3838) | Đầu vào nhiều dòng, căn chỉnh quy ước phím tắt, ổn định hiển thị | 🔴 **Cao nhất** |
| **Tính kiểm soát nội dung Tư duy/Suy luận** | Kimi Code CLI (Chuyển đổi Ctrl+T #2158), Pi (Cấp độ Tư duy #3208), OpenCode (Tương thích reasoning_content #24722/#25758) | Mặc định thu gọn, mở rộng theo yêu cầu, cấu hình cấp mô hình, thích ứng giao thức | 🟡 **Cao** |
| **Tự động hóa đa Agent & Không giám sát** | Claude Code (#53610 9 lỗ hổng), OpenAI Codex (Quyền hooks #20702), Qwen Code (Nhiệm vụ nền Phase D) | Lưu giữ quyền, phục hồi trạng thái, hệ thống hook, kiểm soát định tuyến | 🟡 **Cao** |
| **Quản trị hệ sinh thái MCP** | Claude Code (Tiêm bắt buộc #44112), Copilot CLI (Phân chia cấu hình #3019), Gemini CLI (Lỗi outputSchema #21053), Qwen Code (Quy trình MCP đồng thời #3819) | Khám phá máy chủ, ranh giới quyền, tương tác cấu hình, khả năng tương thích | 🟡 **Cao** |
| **Hỗ trợ LLM cục bộ/riêng tư** | Pi (#3357/#4154 Nhà cung cấp cục bộ chính thức), OpenCode (Thích ứng DeepSeek/Kimi) | Khám phá mô hình động, cấu hình một lần nhấp, tuân thủ quyền riêng tư | 🟢 **Trung bình** (Pi dẫn đầu) |

---

## 4. Phân tích Định vị Khác biệt

| Công cụ | Sự khác biệt cốt lõi | Đối tượng người dùng mục tiêu | Lộ trình công nghệ | Điểm rủi ro |
|:---|:---|:---|:---|:---|
| **Claude Code** | **Cộng tác đa Agent** (Phân phối tiểu Agent, thực thi song song) | Nhóm tự động hóa cấp doanh nghiệp, người bảo trì kho mã phức tạp | Ưu tiên mã nguồn đóng chính thức, hệ thống plugin dần mở | Khủng hoảng kép về mức độ hoàn thiện runtime Agent và niềm tin về phí |
| **OpenAI Codex** | **Trần năng lực mô hình** (GPT-5.5), Đồng bộ hóa nhiều điểm cuối ThreadStore | Người dùng sâu của hệ sinh thái OpenAI, nhà phát triển đa nền tảng | Tái cấu trúc cốt lõi Rust, theo đuổi hiệu suất và bảo mật | Ổn định TUI cản trở việc áp dụng sản xuất, khoảng cách giới hạn ngữ cảnh |
| **Gemini CLI** | **Tích hợp hệ sinh thái Google** (Mô hình Gemini, Anti-Gravity) | Người dùng Google Cloud, nhà phát triển theo đuổi hạn ngạch miễn phí | Mô-đun hóa lớp giao thức ACP, nhấn mạnh mở rộng giao thức | Sự cố tính khả dụng của mô hình xảy ra thường xuyên, đường cơ sở "có thể sử dụng" bị phá vỡ |
| **GitHub Copilot CLI** | **Tích hợp gốc GitHub** (Ngữ cảnh kho lưu trữ, quy trình làm việc PR) | Người dùng nặng GitHub, các tình huống tuân thủ doanh nghiệp | Lái xe nội bộ của Microsoft, liên kết với hệ sinh thái VS Code | Ngừng đổi mới (0 PR), phân chia cấu hình, dĩ thứ công dân headless |
| **Kimi Code CLI** | **Tinh chỉnh trải nghiệm mô hình tư duy** (Ctrl+T có thể kiểm soát), Tương tác nhẹ | Nhà phát triển Trung Quốc, người dùng mô hình Kimi | Lặp lại nhanh các chi tiết UX, plugin hệ sinh thái đang nảy mầm | Ổn định (lỗi tắt đột ngột trên Windows), quy mô hệ sinh thái nhỏ |
| **OpenCode** | **Ưu tiên thích ứng mô hình nội địa** (DeepSeek/Kimi), Mã nguồn mở | Nhà phát triển Trung Quốc, người dùng cần chuyển đổi nhiều mô hình | Giao diện kép Desktop Tauri + Thiết bị đầu cuối, đang tái cấu trúc kiến trúc | Vấn đề quay lại trong giai đoạn tái cấu trúc dày đặc, tắc nghẽn băng thông hợp nhất |
| **Pi** | **Chính thức hóa LLM cục bộ** (llama.cpp/ollama/LM Studio/vLLM), Tính mở của kiến trúc | Người dùng nhạy cảm về quyền riêng tư, triển khai riêng tư doanh nghiệp, người đam mê mô hình | Lái xe cơ chế mở rộng, cốt lõi nhỏ nhất + nhà cung cấp phong phú | Tổn hao niềm tin `closed-because-bigrefactor` trong giai đoạn tái cấu trúc |
| **Qwen Code** | **Cơ chế bảo mật thao tác tệp** (Nâng cấp chuỗi FileReadCache), Quản lý tác vụ nền | Nhà phát triển phiên dài, tình huống cộng tác đa Agent | Lớp hiển thị thiết bị đầu cuối Ink, SDK Python/Node kép | Ổn định của công cụ kết xuất thiết bị đầu cuối, khả năng tương thích SDK |

---

## 5. Mức độ Phổ biến & Mức độ Hoàn thiện của Cộng đồng

### Ma trận Mức độ Phổ biến của Cộng đồng (Lượng tương tác Issue × Đa dạng người đóng góp)

```
Tương tác Cao ┤  Claude Code (#38335 681 bình luận) ●
        │  OpenAI Codex (#19464 120 bình luận) ●
        │  Pi (#3208 14 bình luận, #3357 21👍) ●
        │  OpenCode (#11112 62 bình luận) ●
        │  Gemini CLI (#19624 16 bình luận) ○
        │
Tương tác Thấp ┤  Kimi Code CLI (5 Issues) ○
        │  Qwen Code (15 Issues, Chiều sâu kỹ thuật cao) ○
        │
        └────────────────────────────────────
          Đa dạng người đóng góp thấp          Đa dạng người đóng góp cao
          
● = Nhóm đầu tiên  ○ = Giai đoạn đuổi bắt
```

### Đánh giá Giai đoạn Lặp lại

| Giai đoạn | Công cụ | Đặc điểm |
|:---|:---|:---|
| **Giai đoạn Hoàn thiện · Đối phó Khủng hoảng** | Claude Code, Copilot CLI | Chức năng hoàn chỉnh, nhưng khủng hoảng niềm tin (phí/minh bạch) hoặc ngừng đổi mới (0 PR) |
| **Giai đoạn Tái cấu trúc · Tăng trưởng Đau đớn** | OpenAI Codex, OpenCode, Pi | Thay đổi kiến trúc cơ bản, đổi ổn định ngắn hạn lấy năng lực dài hạn, Issue dày đặc |
| **Giai đoạn Đuổi bắt · Bổ sung Nhanh chóng** | Kimi Code CLI, Qwen Code | Đang bổ sung chức năng cốt lõi, đổi mới tương tác sôi nổi, hệ sinh thái cần xây dựng |
| **Giai đoạn Sự cố · Sửa chữa Khả năng sử dụng** | Gemini CLI | Đường cơ sở khả năng sử dụng mô hình bị phá vỡ, rủi ro mất người dùng |

---

## 6. Tín hiệu Xu hướng Cần chú ý

| Tín hiệu | Bằng chứng | Giá trị tham khảo cho nhà phát triển |
|:---|:---|:---|
| **"Phát triển nhận thức về phí" trở thành nhu cầu tiêu chuẩn** | Claude Code #38335 (681 bình luận), Copilot CLI #2591 (80-100 lần tính phí), Chuyển đổi lỗi Gemini CLI PR | **Cần xác minh khi lựa chọn sản xuất**: Bảng điều khiển tiêu thụ thời gian thực, cơ chế ngắt khẩn cấp, cơ chế giảm cấp có hoàn chỉnh không; Khuyến nghị thiết lập cảnh báo ngân sách hạn ngạch nội bộ |
| **Trải nghiệm thiết bị đầu cuối nâng cấp từ "có thể sử dụng" lên "lợi thế cạnh tranh sản phẩm"** | Bốn công cụ (Codex/Kimi/Qwen/Pi) đồng thời xuất hiện vấn đề TUI/đầu vào/hiển thị | **CLI không phải là lớp bọc mỏng của API**, chất lượng tương tác thiết bị đầu cuối ảnh hưởng trực tiếp đến tỷ lệ giữ chân; Cần bao gồm thay đổi kích thước, phím tắt, khả năng tương thích thiết bị đầu cuối đa nền tảng khi đánh giá |
| **"Kiểm soát quy trình" nội dung suy luận/tư duy trở thành điểm khác biệt của UX** | Kimi Ctrl+T, Cấp độ tư duy Pi, Thích ứng reasoning_content OpenCode | **Nhu cầu điều chỉnh của người dùng chuyên sâu tăng lên**: Từ "có hay không có tư duy" đến "khi nào xem, xem bao nhiêu, cấu hình như thế nào", xem xét tính hoàn chỉnh của giao thức mô hình khi lựa chọn |
| **Tự động hóa đa Agent & Không giám sát là bài kiểm tra độ hoàn thiện của Agent** | Claude Code #53610 (9 lỗ hổng), Qwen Code Phase D, Codex ThreadStore | **Tất cả các cam kết "tự động hóa" hiện tại của mọi công cụ đều có lỗ hổng**, Đối với các tình huống kinh doanh quan trọng, nên giữ lại các điểm xác nhận thủ công, tránh hoàn toàn không giám sát |
| **LLM cục bộ chuyển từ "sở thích biên" sang "hỗ trợ cấp một chính thức"** | Pi #4154 Bốn công cụ chính thức hóa, OpenCode ưu tiên thích ứng mô hình nội địa | **Các tình huống nhạy cảm về quyền riêng tư & nhạy cảm về chi phí có thể bố trí trước các giải pháp cục bộ/riêng tư**, chú ý đến hiệu suất suy luận định lượng, khám phá mô hình động |
| **Quản trị MCP từ "mở rộng chức năng" thành "thách thức quản trị"** | Tranh cãi về tiêm bắt buộc Claude Code, phân chia cấu hình Copilot CLI, lỗi outputSchema Gemini | **Trước khi doanh nghiệp áp dụng MCP, cần thiết lập**: Danh sách kiểm soát truy cập máy chủ, nguyên tắc quyền tối thiểu, kiểm soát phiên bản cấu hình; Tránh "mở rộng hệ sinh thái = mất an toàn" |

---

> **Khuyến nghị Quyết định**: Nếu theo đuổi **chiều sâu tự động hóa đa Agent**, Claude Code vẫn dẫn đầu nhưng cần chấp nhận sự không chắc chắn về phí; Nếu coi trọng **ổn định thiết bị đầu cuối & đồng bộ hóa đa nền tảng**, OpenAI Codex sau khi tái cấu trúc Rust đáng để chờ đợi; Nếu **quyền riêng tư/triển khai cục bộ** là ràng buộc cứng, Pi với việc chính thức hóa LLM cục bộ có tính xác định cao nhất; **Nhà phát triển Trung Quốc** có thể ưu tiên lợi thế thích ứng mô hình nội địa của OpenCode/Kimi/Qwen, nhưng cần đánh giá rủi ro về ổn định thiết bị đầu cuối.

---

## Báo cáo Chi tiết từng Công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Điểm Nóng Cộng đồng Claude Code Skills

> Nguồn dữ liệu: [anthropics/skills](https://github.com/anthropics/skills)

# Báo cáo Điểm Nóng Cộng đồng Claude Code Skills (Tính đến 2026-05-05)

---

## 1. Xếp hạng Skills Phổ biến (Theo mức độ quan tâm của Cộng đồng)

| Thứ hạng | Skill | Mô tả chức năng | Trạng thái | Điểm Nóng Cộng đồng | Liên kết |
|:---|:---|:---|:---|:---|:---|
| 1 | **document-typography** | Kiểm soát chất lượng dàn trang tài liệu do AI tạo: ngăn chặn cô đơn, cô độc, lỗi đánh số, v.v. | 🟡 Mở | Được coi là "năng lực cơ bản mạnh mẽ ảnh hưởng đến mọi tài liệu do Claude tạo ra" | [PR #514](https://github.com/anthropics/skills/pull/514) |
| 2 | **frontend-design** | Cải thiện độ rõ ràng và khả năng thực thi của Skill thiết kế frontend, đảm bảo mỗi chỉ dẫn có thể hoàn thành trong một lần trò chuyện | 🟡 Mở | Tập trung vào khả năng sử dụng của chính Skill — "Claude có thực sự làm theo được không" | [PR #210](https://github.com/anthropics/skills/pull/210) |
| 3 | **skill-quality-analyzer / skill-security-analyzer** | Meta Skill: Tự động đánh giá chất lượng (năm chiều: cấu trúc, tài liệu, ví dụ, v.v.) và bảo mật của các Skill khác | 🟡 Mở | Nhu cầu quản trị tự động của hệ sinh thái Skill, công cụ cấp meta | [PR #83](https://github.com/anthropics/skills/pull/83) |
| 4 | **odt** | Tạo, điền mẫu và chuyển đổi ODT→HTML định dạng OpenDocument (.odt/.ods) | 🟡 Mở | Nhu cầu tuân thủ doanh nghiệp đối với các định dạng tài liệu mở/tiêu chuẩn ISO | [PR #486](https://github.com/anthropics/skills/pull/486) |
| 5 | **testing-patterns** | Hệ thống kiểm thử toàn diện: triết lý kiểm thử, kiểm thử đơn vị, kiểm thử thành phần React, kiểm thử tích hợp/E2E | 🟡 Mở | Lấp đầy khoảng trống hướng dẫn có hệ thống của Claude trong lĩnh vực kiểm thử kỹ thuật | [PR #723](https://github.com/anthropics/skills/pull/723) |
| 6 | **ServiceNow** | Bao phủ đầy đủ tất cả các module của nền tảng ServiceNow cấp doanh nghiệp: ITSM, ITOM, SecOps, ITAM, FSM, SPM, v.v. | 🟡 Mở | Nhu cầu chuyên sâu của lĩnh vực dọc về tự động hóa quy trình làm việc của doanh nghiệp lớn | [PR #568](https://github.com/anthropics/skills/pull/568) |
| 7 | **sensory** | Tự động hóa gốc macOS: thay thế Sử dụng Máy tính dạng ảnh chụp màn hình thông qua AppleScript/osascript | 🟡 Mở | Khám phá con đường tự động hóa cục bộ "không có hình ảnh, quyền hạn thấp" | [PR #806](https://github.com/anthropics/skills/pull/806) |
| 8 | **AppDeploy** | Triển khai trực tiếp ứng dụng web toàn diện từ Claude lên URL công cộng, quản lý vòng đời ứng dụng | 🟡 Mở | Vòng lặp "Vibe Coding": nhu cầu một điểm dừng từ mã đến triển khai | [PR #360](https://github.com/anthropics/skills/pull/360) |

---

## 2. Xu hướng Nhu cầu Cộng đồng (Tổng hợp Issues)

| Hướng | Issue đại diện | Yêu cầu cốt lõi |
|:---|:---|:---|
| **Chia sẻ Skill Cấp tổ chức** | [#228](https://github.com/anthropics/skills/issues/228) | Các Skill trong doanh nghiệp cần bỏ qua quy trình cồng kềnh "tải xuống → Slack → tải lên thủ công", hỗ trợ thư viện chia sẻ cấp tổ chức hoặc liên kết trực tiếp |
| **Tương thích giao thức Skill và MCP** | [#16](https://github.com/anthropics/skills/issues/16) | Xuất Skill thành MCP (Model Context Protocol), chuẩn hóa ranh giới API của phần mềm AI |
| **Hỗ trợ đa nền tảng/đa đám mây** | [#29](https://github.com/anthropics/skills/issues/29) | Khả năng tương thích Skill trong các tình huống triển khai doanh nghiệp như AWS Bedrock |
| **Ranh giới Bảo mật và Tin cậy** | [#492](https://github.com/anthropics/skills/issues/492) | Skill cộng đồng lạm dụng không gian tên `anthropic/`, cần ngăn chặn tấn công ranh giới tin cậy |
| **Hệ thống Đánh giá và Chất lượng Skill** | [#556](https://github.com/anthropics/skills/issues/556), [#202](https://github.com/anthropics/skills/issues/202) | Tỷ lệ kích hoạt `run_eval.py` là 0, skill-creator không tuân theo thực tiễn tốt nhất — chính công cụ meta cần được tái cấu trúc |
| **Tích hợp Google Workspace** | [#299](https://github.com/anthropics/skills/pull/299) | Phân loại email, quản lý lịch, xử lý tác vụ và các tình huống trợ lý cá nhân khác (PR đã gửi) |
| **Trí nhớ bền vững** | [#154](https://github.com/anthropics/skills/pull/154) | Hệ thống trí nhớ của Agent xuyên suốt các cuộc trò chuyện (shodh-memory) |

---

## 3. Skills Có Tiềm năng Cao Chờ Hợp nhất (Bình luận sôi nổi + Cập nhật gần đây)

| Skill | Động thái Cập nhật | Tiềm năng Hợp nhất | Liên kết |
|:---|:---|:---|:---|
| **document-typography** | Cập nhật sôi nổi vào ngày 2026-03-13, giải quyết các điểm đau phổ biến | ⭐⭐⭐⭐⭐ | [PR #514](https://github.com/anthropics/skills/pull/514) |
| **testing-patterns** | Lặp lại liên tục vào ngày 2026-04-21, bao phủ toàn bộ ngăn xếp kiểm thử | ⭐⭐⭐⭐⭐ | [PR #723](https://github.com/anthropics/skills/pull/723) |
| **odt** | Cập nhật vào ngày 2026-04-14, nhu cầu tuân thủ doanh nghiệp cấp thiết | ⭐⭐⭐⭐☆ | [PR #486](https://github.com/anthropics/skills/pull/486) |
| **ServiceNow** | Cập nhật vào ngày 2026-04-23, chiều sâu lĩnh vực chuyên biệt | ⭐⭐⭐⭐☆ | [PR #568](https://github.com/anthropics/skills/pull/568) |
| **sensory** | Cập nhật vào ngày 2026-04-02, con đường đổi mới tự động hóa macOS | ⭐⭐⭐⭐☆ | [PR #806](https://github.com/anthropics/skills/pull/806) |
| **AppDeploy** | **Cập nhật ngày hôm qua 2026-05-04**, vòng lặp triển khai | ⭐⭐⭐⭐☆ | [PR #360](https://github.com/anthropics/skills/pull/360) |
| **skill-quality-analyzer** | Không có cập nhật kể từ 2026-01-07, nhưng nhu cầu meta rõ ràng | ⭐⭐⭐☆☆ | [PR #83](https://github.com/anthropics/skills/pull/83) |

> **Lưu ý**: Nhiều PR sửa lỗi ( [PR #538](https://github.com/anthropics/skills/pull/538), [PR #539](https://github.com/anthropics/skills/pull/539), [PR #541](https://github.com/anthropics/skills/pull/541) ) được tác giả Lubrsy706 gửi tập trung, cho thấy mức độ quan tâm ngày càng tăng đối với chất lượng bảo trì Skill hiện có.

---

## 4. Thông tin chi tiết về Hệ sinh thái Skills

> **Nhu cầu tập trung nhất của cộng đồng: Để Skill tiến hóa từ "script cá nhân" thành "cơ sở hạ tầng cấp doanh nghiệp có thể chia sẻ, đánh giá và quản trị" — bao gồm cơ chế phân phối cấp tổ chức (#228), hệ thống đánh giá chất lượng (#83/#556), ranh giới tin cậy bảo mật (#492), và tương thích với các tiêu chuẩn mở (MCP #16).**

---

---

# Claude Code Nhật báo Động thái Cộng đồng | 2026-05-05

## Tổng quan hôm nay

Trọng tâm cộng đồng hôm nay tập trung vào **vấn đề phí và hạn ngạch bất thường** — người dùng Max/Pro tiếp tục báo cáo tốc độ tiêu thụ cửa sổ trò chuyện tăng đột biến (Issue #38335 đã tích lũy 681 bình luận), đồng thời bản phát hành v2.1.128 mang đến nhiều cải tiến trải nghiệm. Cơ chế quyền và tự động hóa của runtime đa Agent trở thành điểm tranh cãi mới nổi.

---

## Phát hành Phiên bản

### [v2.1.128](https://github.com/anthropics/claude-code/releases/tag/v2.1.128)

| Mục Cập nhật | Mô tả |
|--------|------|
| `/color` | Chọn ngẫu nhiên màu chủ đề trò chuyện khi gọi mà không có tham số |
| `/mcp` | Hiển thị số lượng công cụ đã kết nối máy chủ, đánh dấu máy chủ rảnh rỗi không có công cụ nào |
| `--plugin-dir` | Thêm hỗ trợ cho gói nén plugin định dạng `.zip` |
| `--channels` | Mở rộng hỗ trợ cho chế độ console (Liên quan đến AP, mô tả bị cắt ngắn) |

> Bản cập nhật này chủ yếu tối ưu hóa hệ sinh thái MCP và trải nghiệm plugin, thuộc về cải tiến gia tăng.

---

## Issues Điểm Nóng Cộng đồng

### 🔥 Khủng hoảng Phí & Hạn ngạch (Ưu tiên cao nhất)

| # | Issue | Trạng thái | Bình luận | Vấn đề Cốt lõi |
|---|---|---|---|---|
| [#38335](https://github.com/anthropics/claude-code/issues/38335) | Giới hạn phiên kế hoạch Max tiêu hao cực kỳ nhanh kể từ ngày 3/23 | MỞ | **681** / 👍452 | Người dùng CLI gặp phải tốc độ tiêu thụ hạn ngạch tăng tốc, phạm vi ảnh hưởng cực lớn, tâm lý cộng đồng mạnh mẽ |
| [#45756](https://github.com/anthropics/claude-code/issues/45756) | Hạn ngạch Pro Max 5x tiêu hao trong vòng 1,5 giờ | MỞ | 58 / 👍143 | Hạn ngạch bất thường trong tình huống sử dụng trung bình trên nền tảng WSL, cộng hưởng với #38335 |
| [#55053](https://github.com/anthropics/claude-code/issues/55053) | Cửa sổ phiên 5 giờ tiêu hao tăng tốc 5-10 lần kể từ tối 4/29 | MỞ | 34 / 👍12 | Thao tác chỉnh sửa nhẹ (scp/Read/Edit) tiêu hao cửa sổ nhanh chóng, đặc biệt nghiêm trọng đối với sub-agents Sonnet |

**Tại sao quan trọng**: Vấn đề phí trực tiếp ảnh hưởng đến tỷ lệ giữ chân và niềm tin của người dùng. #38335 với 681 bình luận đã là một trong những Issue có tương tác cao nhất trong lịch sử cộng đồng, nhưng chính thức vẫn chưa đưa ra giải thích nguyên nhân rõ ràng hoặc phương án bồi thường. Mốc thời gian 4/29 gợi ý có thể có những thay đổi ở phía máy chủ chưa được thông báo cho người dùng.

---

### ⚠️ Ổn định & Hiệu suất

| # | Issue | Trạng thái | Bình luận | Vấn đề Cốt lõi |
|---|---|---|---|---|
| [#11315](https://github.com/anthropics/claude-code/issues/11315) | Rò rỉ bộ nhớ nghiêm trọng: 129GB bộ nhớ ảo gây đóng băng hệ thống | MỞ | 51 / 👍43 | Vấn đề ổn định cốt lõi tồn tại lâu dài trên nền tảng Linux, 16GB bộ nhớ vật lý bị tiêu hao |
| [#56148](https://github.com/anthropics/claude-code/issues/56148) | Cache của tiểu Agent bị hỏng dẫn đến tiêu hao hạn ngạch token nhanh chóng | MỞ | 1 / 👍0 | Mới báo cáo, chồng chất với vấn đề hạn ngạch, ảnh hưởng đến tính kinh tế của quy trình làm việc Agent |

---

### 🤖 Lỗi Cơ chế Runtime Đa Agent

| # | Issue | Trạng thái | Bình luận | Vấn đề Cốt lõi |
|---|---|---|---|---|
| [#53610](https://github.com/anthropics/claude-code/issues/53610) | Runtime đa Agent cần thực thi cơ học cưỡng bức: 9 lỗ hổng cản trở chạy không giám sát qua đêm | MỞ | 25 / 👍0 | Tổng hợp hệ thống các rào cản tự động hóa của Agent, bao gồm quyền, hook, phục hồi trạng thái, v.v. |
| [#43869](https://github.com/anthropics/claude-code/issues/43869) | Định tuyến mô hình Subagent hoàn toàn thất bại, tất cả quay về mô hình cha (Opus) | MỞ | 5 / 👍6 | Không thể giảm cấp xuống Sonnet trong các tình huống nhạy cảm về chi phí, dẫn đến chi phí mất kiểm soát |
| [#56151](https://github.com/anthropics/claude-code/issues/56151) | PreToolUse hook khớp với "Agent" không kích hoạt khi phân phối Agent cha | MỞ | 1 / 👍0 | Lỗ hổng tích hợp của hệ thống hook và chuỗi công cụ Agent |
| [#56146](https://github.com/anthropics/claude-code/issues/56146) | Skill tích hợp `fewer-permission-prompts` chiếm quyền phân phối Agent, gây phí thực tế | MỞ | 1 / 👍0 | Tác dụng phụ ngoài dự kiến của skill tích hợp, chỉ dẫn của người dùng bị giảm cấp |

**Tại sao quan trọng**: Đa Agent là tính năng khác biệt cốt lõi của Claude Code, nhưng ba cơ chế quyền, định tuyến và hook đều có lỗi ngăn chặn, khoảng cách giữa tầm nhìn "không giám sát" và trải nghiệm thực tế còn đáng kể.

---

### 🔒 Tranh cãi về Quyền & Quyền riêng tư

| # | Issue | Trạng thái | Bình luận | Vấn đề Cốt lõi |
|---|---|---|---|---|
| [#44112](https://github.com/anthropics/claude-code/issues/44112) | Máy chủ MCP đám mây (Gmail/Google Calendar) tự động chèn mà không có sự đồng ý | MỞ | 6 / 👍3 | Không có cơ chế opt-out, nhắc nhở xác thực bắt buộc mỗi lần khởi động, ranh giới quyền riêng tư không rõ ràng |
| [#55523](https://github.com/anthropics/claude-code/issues/55523) | Chế độ Tự động bị suy yếu lặng lẽ bởi hook, tương đương với "Chấp nhận Chỉnh sửa Bật" | MỞ | 5 / 👍0 | Lời hứa tự động hóa không nhất quán với hành vi thực tế, quản lý kỳ vọng người dùng thất bại |

---

### 💳 Thanh toán & Đăng ký

| # | Issue | Trạng thái | Bình luận | Vấn đề Cốt lõi |
|---|---|---|---|---|
| [#54204](https://github.com/anthropics/claude-code/issues/54204) | Nâng cấp Max 5x → Max 20x rơi vào vòng lặp void_invoice | MỞ | 10 / 👍0 | Máy chủ trả về PaymentIntent đã bị hủy, logic thử lại bị khóa |

---

## Tiến trình PR Quan trọng

| # | PR | Trạng thái | Tác giả | Nội dung Chức năng/Sửa lỗi |
|---|-----|------|------|-------------|
| [#55864](https://github.com/anthropics/claude-code/pull/55864) | feat: thêm plugin lưu trạng thái phiên | **MỞ** | SanskaarUndale21 | **Plugin lưu trạng thái phiên phía máy khách**：Bảo tồn ngữ cảnh làm việc sau khi đóng cửa sổ, như một giải pháp thay thế tạm thời cho giải pháp phía máy chủ hoàn chỉnh (#55860). Giải quyết điểm đau cốt lõi "đóng cửa sổ giữa chừng = mất toàn bộ ngữ cảnh" |
| [#55832](https://github.com/anthropics/claude-code/pull/55832) | Fix: Xóa nội dung còn sót lại khỏi plugin-validator.md | **MỞ** | EnjouZeratul | Dọn dẹp nội dung trò chuyện còn sót lại trong tài liệu, nâng cao tính chuyên nghiệp của tài liệu plugin |
| [#33007](https://github.com/anthropics/claude-code/pull/33007) | fix(hookify): sửa ánh xạ trường cho sự kiện stop và prompt | ĐÓNG | daniel-dallimore | Sửa lỗi ánh xạ trường trong plugin hookify cho sự kiện `stop`/`prompt`, nhánh else của `Rule.from_dict()` ánh xạ nhầm sự kiện thành `field='content'` |
| [#33006](https://github.com/anthropics/claude-code/pull/33006) | fix(code-review): đồng bộ hóa README với quy trình làm việc thực tế | ĐÓNG | daniel-dallimore | Đồng bộ hóa tài liệu plugin code-review với triển khai thực tế, cập nhật mô tả kiến trúc xác minh và bổ sung quyền cần thiết |

> Lưu ý: Tổng số PR chỉ có 4 mục, mức độ hoạt động đóng góp của cộng đồng tương đối thấp, phát triển chức năng cốt lõi vẫn do chính thức chủ đạo.

---

## Xu hướng Yêu cầu Chức năng

Dựa trên phân tích 50 Issue đang hoạt động, các hướng quan tâm của cộng đồng thể hiện những điểm tập trung sau:

| Thứ hạng | Hướng | Issue Đại diện | Đặc điểm Mức độ Phổ biến |
|:---:|------|-----------|---------|
| 1 | **Tính minh bạch phí & Kiểm soát hạn ngạch** | #38335, #45756, #55053, #45390 | 🔥 Bùng nổ, người dùng yêu cầu đo lường tiêu thụ có thể quan sát được và truy xuất lịch sử |
| 2 | **Tự động hóa đa Agent & Không giám sát** | #53610, #43869, #55523, #56146 | Yêu cầu chuyển đổi từ "có thể sử dụng" sang "đáng tin cậy", nhu cầu cấp thiết cho các tình huống cấp doanh nghiệp |
| 3 | **Quản trị Hệ sinh thái MCP** | #44112, #53408, Công cụ `/mcp` | Khám phá máy chủ, ranh giới quyền, hỗ trợ loại tài khoản |
| 4 | **Kỹ thuật Bộ nhớ & Hiệu suất** | #11315, #56148 | Tồn tại lâu dài, ảnh hưởng đến các tình huống kho mã quy mô lớn |
| 5 | **Sâu sắc tích hợp IDE/Trình soạn thảo** | #7618, #56142 | Làm bóng các chi tiết như chiếm dụng tiêu điểm VS Code, trải nghiệm đầu vào TUI |
| 6 | **Khả năng mở rộng Hệ thống Plugin** | #55864, Hỗ trợ plugin zip trong v2.1.128 | Cổng đóng góp cộng đồng, nhưng tài liệu và chuỗi công cụ vẫn chưa hoàn thiện |

---

## Tóm tắt Điểm Đau của Nhà phát triển

### Điểm Đau Tần suất Cao

| Điểm Đau | Biểu hiện | Ảnh hưởng |
|---|---|---|
| **Hộp đen hạn ngạch** | Tốc độ tiêu thụ không thể đoán trước, không có bảng điều khiển thời gian thực, không thể phân biệt "tiêu thụ bình thường" và "rò rỉ bất thường" | Tất cả người dùng trả phí |
| **Định tuyến Agent mất kiểm soát** | Cơ chế giảm cấp mô hình thất bại, bộ nhớ đệm tiểu Agent không khớp, skill tích hợp kích hoạt ngoài dự kiến | Người dùng Agent nặng |
| **Mệt mỏi về quyền** | "Luôn cho phép" không bền vững, hook làm suy yếu chế độ Tự động, khớp mẫu wildcard thất bại | Người theo đuổi tự động hóa |
| **Ngữ cảnh mong manh** | Đóng cửa sổ là mất, hành vi `/resume` không nhất quán, trạng thái worktree bị trôi | Người làm việc trong phiên dài |

### Nhu cầu Mới nổi

- **Lưu trạng thái phiên**：Giải pháp phía máy khách của PR #55864 được quan tâm, nhưng cộng đồng mong đợi kiến trúc phi trạng thái phía máy chủ #55860 hơn
- **Mở khóa giao diện người dùng suy luận của bên thứ ba**：Phản ánh Issue #54647 về việc `disableAutoUpdates` khóa quá mức giao diện suy luận của bên thứ ba, nhu cầu mở rộng hệ sinh thái tăng lên
- **Quản trị MCP cấp doanh nghiệp**：Tài khoản Microsoft cá nhân bị từ chối (#53408), tiêm bắt buộc MCP đám mây (#44112) cho thấy nhu cầu về danh tính và tuân thủ trong các tình huống B2B

---

> **Ghi chú của Nhà phân tích**: Dữ liệu hôm nay thể hiện sự giao thoa của hai tuyến chính là "khủng hoảng phí" và "mức độ hoàn thiện Agent". Khuyến nghị theo dõi xem liệu Anthropic có công bố cải tiến về tính minh bạch của hệ thống hạn ngạch trong tương lai gần hay không, và liệu runtime đa Agent có nhận được cơ chế thực thi cơ học cưỡng bức trong phiên bản tiếp theo hay không. Về đóng góp cộng đồng, số lượng PR rất ít, mức độ mở rộng của hệ sinh thái plugin vẫn là chỉ số quan sát dài hạn.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Nhật báo Động thái Cộng đồng | 2026-05-05

---

## Tổng quan hôm nay

Mâu thuẫn cốt lõi cộng đồng hôm nay tập trung vào **vấn đề quay lại đầu vào TUI của v0.128.0** — Shift+Enter xuống dòng thất bại bùng phát trên quy mô lớn trên môi trường Windows/macOS/đa thiết bị đầu cuối, đồng thời **giới hạn ngữ cảnh 400K của GPT-5.5 và khoảng cách 1M với API** gây ra cuộc thảo luận có mức độ phổ biến cao nhất (120 bình luận). Phía kỹ thuật đang đẩy nhanh việc di chuyển kiến trúc ThreadStore và hoàn thiện hệ thống quyền hooks.

---

## Phát hành Phiên bản

| Phiên bản | Loại | Mô tả |
|:---|:---|:---|
| [rust-v0.129.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.129.0-alpha.5) | Trước phát hành | Lặp lại alpha cốt lõi Rust, chi tiết thay đổi cần bổ sung mô tả phát hành |
| [rust-v0.129.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.129.0-alpha.4) | Trước phát hành | Tương tự, phát hành tần suất cao liên tục hai ngày cho thấy quá trình di chuyển Rust đã bước vào giai đoạn nước rút |

> ⚠️ Lưu ý: Phiên bản ổn định của CLI vẫn là **0.128.0**, tức là phiên bản bị ảnh hưởng bởi vấn đề quay lại TUI hiện tại.

---

## Issues Điểm Nóng Cộng đồng (Top 10)

| # | Vấn đề | Trạng thái | Tương tác | Điểm Cốt lõi |
|:---|:---|:---|:---|:---|
| [#19464](https://github.com/openai/codex/issues/19464) | **Giới hạn ngữ cảnh GPT-5.5: Hỗ trợ 1M token** | 🔵 Mở | 120💬 153👍 | **Nóng nhất hôm nay**. GPT-5.5 trong Codex chỉ có 400K ngữ cảnh, khoảng cách đáng kể với 1M của phiên bản API, cản trở nghiêm trọng việc xử lý kho mã lớn. Cộng đồng yêu cầu mạnh mẽ sự tương đồng. |
| [#20161](https://github.com/openai/codex/issues/20161) | **Xác minh số điện thoại chặn đăng nhập** | 🔵 Mở | 64💬 54👍 | Sau khi đăng nhập SSO, yêu cầu bắt buộc số điện thoại chưa liên kết, bị khóa khi sử dụng đa thiết bị. Quy trình xác minh danh tính có sự đứt gãy rõ ràng. |
| [#11023](https://github.com/openai/codex/issues/11023) | **Ứng dụng máy tính để bàn Linux** | 🔵 Mở | 45💬 115👍 | Nhu cầu cao từ lâu. Vấn đề tiêu thụ năng lượng của Mac buộc nhà phát triển chuyển sang Linux, việc thiếu ứng dụng chính thức trở thành nút thắt cổ chai quan trọng. |
| [#17615](https://github.com/openai/codex/issues/17615) | Kiểm tra bảo mật Azure báo động sai: "Không thể hỗ trợ" | 🟢 Đã đóng | 30💬 19👍 | Đã đóng nhưng có tính đại diện — trong tình huống triển khai Azure, chính sách bảo mật kích hoạt quá mức, ảnh hưởng đến quy trình làm việc phát triển bình thường. |
| [#17322](https://github.com/openai/codex/issues/17322) | **Thoát ứng dụng Windows không hoàn toàn + Kiểm tra va chạm UI** | 🔵 Mở | 16💬 14👍 | Sau khi đóng cửa sổ, tiến trình còn sót lại, khu vực nhấp vào "Trò chuyện mới" ở thanh bên có vấn đề, trải nghiệm Windows chưa được trau chuốt. |
| [#20580](https://github.com/openai/codex/issues/20580) | **[Hồi quy] Shift+Enter/Alt+Enter xuống dòng thất bại** | 🟢 Đã đóng | 3💬 11👍 | Thay đổi gây phá hoại trong v0.128.0, ảnh hưởng đến đa nền tảng thiết bị đầu cuối. Mặc dù đã đóng nhưng các vấn đề phát sinh liên tục xuất hiện (xem #21115). |
| [#21046](https://github.com/openai/codex/issues/21046) | **Windows Shift+Backspace/Ctrl+Backspace thất bại** | 🟢 Đã đóng | 5💬 0👍 | Cùng nguồn gốc với vấn đề xuống dòng — lỗi đặc trưng Windows do tái cấu trúc xử lý đầu vào v0.128.0 gây ra. |
| [#19891](https://github.com/openai/codex/issues/19891) | **Chế độ "Dành cho lập trình" ẩn tên tệp và lệnh** | 🔵 Mở | 6💬 6👍 | Tóm tắt tổng hợp UI quá đơn giản hóa, nhà phát triển không thể theo dõi tệp sửa đổi cụ thể và lệnh đã thực thi, minh bạch bị thụt lùi. |
| [#20678](https://github.com/openai/codex/issues/20678) | **Browser Use không thể kết nối IAB (macOS)** | 🔵 Mở | 6💬 0👍 | Lỗi kết nối backend trình duyệt được phát hiện bởi công cụ Node REPL, ảnh hưởng đến tự động hóa quy trình làm việc dựa trên trình duyệt. |
| [#21115](https://github.com/openai/codex/issues/21115) | **Codex CLI - Shift+Enter không hoạt động [Mới]** | 🔵 Mở | 1💬 0👍 | Báo cáo mới nhất về vấn đề quay lại v0.128.0, người dùng doanh nghiệp Windows, cho thấy việc sửa chữa chưa bao phủ hoàn toàn. |

---

## Tiến trình PR Quan trọng (Top 10)

| # | PR | Tác giả | Nội dung Cốt lõi | Ảnh hưởng |
|:---|:---|:---|:---|:---|
| [#20576](https://github.com/openai/codex/pull/20576) | Cập nhật siêu dữ liệu định tuyến ThreadStore | wiltzius-openai | Cập nhật siêu dữ liệu luồng thống nhất qua ThreadStore, thêm ngữ nghĩa vá git (set/partial/clear), xóa nhiều mã chết | Lớp cơ sở kiến trúc, đặt nền móng cho đồng bộ hóa đa nền tảng |
| [#20575](https://github.com/openai/codex/pull/20575) | Di chuyển nhiều lịch sử luồng hơn sang ThreadStore | wiltzius-openai | Phát lại mức sử dụng token, phản hồi hoàn tác, xem xét ngắt kết nối, v.v. thoát khỏi đọc tệp trực tiếp, chuyển sang ThreadStore | Cùng với #20576 tạo thành một cặp di chuyển |
| [#20702](https://github.com/openai/codex/pull/20702) | PreToolUse hỗ trợ `permissionDecision: ask` | abhinav-oai | Hooks có thể nâng "cho phép" lên "xác nhận thủ công rõ ràng", nhưng không thể làm suy yếu chính sách cốt lõi | **Mở rộng quyền/bảo mật quan trọng** |
| [#21090](https://github.com/openai/codex/pull/21090) | Loại bỏ cảnh báo siêu dữ liệu mô hình dự phòng trùng lặp | canvrno-oai | Sửa #21046, cảnh báo mô hình nhà cung cấp/cổng mạng dự phòng không còn lặp lại mỗi vòng, siết chặt chế độ tìm kiếm tiền tố | Giảm tiếng ồn, cải thiện khả năng bảo trì |
| [#21111](https://github.com/openai/codex/pull/21111) | Các giá trị cấu hình không hợp lệ liệt kê cảnh báo thay vì lỗi | aibrahim-oai | Một giá trị enum không hợp lệ gây lỗi tải toàn bộ cấu hình quá nghiêm khắc, chuyển sang đường dẫn cảnh báo khi khởi động | **Sửa chữa quan trọng cho trải nghiệm nhà phát triển** |
| [#20672](https://github.com/openai/codex/pull/20672) | Tự động xem xét từ chối liên tục nâng cấp thành phê duyệt người dùng | won-openai | Tự động xem xét dừng đột ngột khi từ chối quá nhiều trong một vòng quá thô bạo, chuyển thành yêu cầu kích hoạt do người dùng tự quyết định | Cải thiện nhân văn hóa quy trình phê duyệt |
| [#20619](https://github.com/openai/codex/pull/20619) | Ứng dụng máy tính để bàn yêu cầu token chứng thực thiết bị | jiamingz42 | codex-rs/app-server yêu cầu chứng thực DeviceCheck từ máy tính để bàn, đính kèm vào đường dẫn Codex | **Bảo mật/Tuân thủ doanh nghiệp** |
| [#21113](https://github.com/openai/codex/pull/21113) | Xcode 26.4 từ chối yêu cầu MCP của máy khách tự động | etraut-openai | Phiên bản Xcode cũ không tương thích với sự kiện yêu cầu MCP mới, khôi phục hành vi cũ có chủ đích để đảm bảo tương thích | Đảm bảo tương thích phía máy khách |
| [#21109](https://github.com/openai/codex/pull/21109) | Lệnh tải tệp cục bộ TUI `/upload` | efrazer-oai | Thêm `/upload <local-path>`, gửi tệp máy khách qua `fs/uploadFile` và chèn đường dẫn host | **Bổ sung chức năng TUI** |
| [#21108](https://github.com/openai/codex/pull/21108) | Tải lên tệp máy chủ được quản lý | efrazer-oai | Giải quyết vấn đề máy chủ thực thi từ xa không thể đọc đường dẫn cục bộ của máy khách, `fs/uploadFile` nhận luồng byte để lưu vào `$CODEX_HOME/uploads` | Phối hợp với #21109, năng lực phát triển từ xa quan trọng |

---

## Xu hướng Yêu cầu Chức năng

```
🔥 Hướng Tần suất Cao (Sắp xếp theo mật độ Issue & Lượng tương tác)
```

| Hướng | Issue Đại diện | Yêu cầu của Cộng đồng |
|:---|:---|:---|
| **Tương thích Năng lực Mô hình** | #19464 (1M ngữ cảnh) | Khoảng cách năng lực mô hình giữa Codex và API phải được xóa bỏ, 400K→1M là nhu cầu cấp thiết |
| **Hỗ trợ Gốc Linux** | #11023, #8160 | Flatpak/RPM/Ứng dụng chính thức, từ chối "dùng CLI để bù đắp" |
| **Trải nghiệm Đầu vào TUI** | #8673, #20580, #20607, #21046, #21115 | Đầu vào nhiều dòng, phím tắt, khả năng tương thích thiết bị đầu cuối là nền tảng của nền tảng |
| **Hooks/Khả năng Mở rộng** | #16226, #17132, #20702 | Phân biệt proxy phụ, vòng đời Skill, quyết định quyền — tùy chỉnh cấp doanh nghiệp phụ thuộc vào |
| **Độ chính xác Kiểm tra Bảo mật** | #17615, #19403, #21086, #21114 | Tỷ lệ báo động sai ảnh hưởng trực tiếp đến khả năng sử dụng, "Tôi xin lỗi" trở thành điểm đau cấp meme |
| **Đồng bộ hóa Trò chuyện Đa nền tảng** | #21079 | Lịch sử giữa CLI và Máy tính để bàn bị cắt đứt, yêu cầu chế độ xem luồng thống nhất |
| **Tích hợp Trình duyệt/Chuỗi Công cụ** | #20678, #19463, #19027 | Khám phá backend và ổn định nhúng của các kỹ năng như Browser Use, Imagen |

---

## Điểm Quan tâm của Nhà phát triển

### 🔴 Điểm Đau Khẩn cấp
1. **Chùm vấn đề quay lại TUI v0.128.0**
   - Shift+Enter xuống dòng, Shift/Ctrl+Backspace xóa từ thất bại trên đa nền tảng
   - Vòng lặp sửa chữa chưa hoàn thành (đã đóng #20580 nhưng #21115 mới báo cáo), khuyến nghị tạm dừng nâng cấp môi trường sản xuất hoặc cung cấp bản sửa lỗi nhanh

2. **Báo động sai Kiểm tra Bảo mật (False Positives)**
   - Nghiên cứu thụ động, tra cứu tài liệu công khai, các tác vụ phát triển thông thường bị chặn
   - Dường như trầm trọng hơn dưới mô hình GPT-5.5 (#21114), chặn quy trình làm việc mà không có đường lối khiếu nại

### 🟡 Nhu cầu Cấu trúc
3. **Trần ngữ cảnh**
   - 400K không đủ cho các tình huống monorepo lớn, di chuyển mã cũ
   - Không đồng bộ với năng lực API gây ra ma sát nhận thức "cùng một mô hình, hai trải nghiệm"

4. **Trải nghiệm công dân hạng hai trên Windows**
   - Quản lý vòng đời ứng dụng (#17322), xử lý đầu vào (#21046, #21115), chi tiết UI liên tục tụt hậu so với macOS

5. **Tính bền bỉ của Hệ thống Cấu hình**
   - Một giá trị không hợp lệ làm hỏng toàn bộ cấu hình tải (#21111 đang sửa), phản ánh thiết kế chịu lỗi không đủ cho cấu hình có thể chỉnh sửa của người dùng

### 🟢 Tín hiệu Tích cực
- Di chuyển kiến trúc ThreadStore tăng tốc (#20575/#20576), mở đường cho sự thống nhất đa nền tảng và khả năng quan sát dữ liệu
- Tinh chỉnh hệ thống quyền Hooks (#20702), từ nhị phân "cho phép/từ chối" sang tam phân "nâng cấp xác nhận"

---

*Nhật báo dựa trên dữ liệu công khai từ kho lưu trữ chính thức `openai/codex`.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Nhật báo Động thái Cộng đồng | 2026-05-05

---

## 1. Tổng quan hôm nay

Hôm nay Gemini CLI phát hành phiên bản ban đêm **v0.42.0-nightly**, cải tiến cốt lõi là tái cấu trúc module hóa máy khách ACP và cập nhật quy trình làm việc tài liệu. Về phía cộng đồng, **khủng hoảng tính khả dụng của mô hình tiếp tục leo thang** — vấn đề truy cập mô hình Gemini 3.x trở thành lời phàn nàn thường xuyên nhất, đồng thời hàng loạt PR lịch sử được hợp nhất và đóng tập trung, cho thấy nhóm đang đẩy nhanh việc dọn dẹp tồn đọng.

---

## 2. Phát hành Phiên bản

### [v0.42.0-nightly.20260504.g37edd1d4d](https://github.com/google-gemini/gemini-cli/releases/tag/v0.42.0-nightly.20260504.g37edd1d4d)

| Mục Thay đổi | Mô tả |
|--------|------|
| `refactor(acp)` | **Mô-đun hóa máy khách ACP**：Tách `acpClient` nguyên khối thành nhiều tệp chuyên dụng, nâng cao khả năng bảo trì ([#26143](https://github.com/google-gemini/gemini-cli/pull/26143)) |
| `docs` | Cập nhật quy trình làm việc tài liệu, thêm hỗ trợ workspace trust ([#26150](https://github.com/google-gemini/gemini-cli/pull/26150)) |
| `test` | Sửa lỗi kiểm thử (phạm vi cụ thể chưa được nêu chi tiết) |

> 💡 ACP (Agent Communication Protocol) là lớp giao thức cốt lõi để Gemini CLI tương tác với mô hình backend, lần tái cấu trúc này đặt nền móng cho việc mở rộng giao thức trong tương lai.

---

## 3. Issues Điểm Nóng Cộng đồng (Top 10)

### 🔴 Khủng hoảng Tính khả dụng của Mô hình (Cấp P0)

| # | Issue | Trạng thái | Bình luận | 👍 | Vấn đề Cốt lõi |
|---|---|---|---|-----|---------|
| [#19624](https://github.com/google-gemini/gemini-cli/issues/19624) | gemini-3-pro-preview không thể truy cập kể từ khi phát hành 3.1 | MỞ | 16 | 22 | **Vấn đề có nhiều lượt thích nhất**：Sau khi chuyển đổi mô hình, liên tục trả về lỗi "nhu cầu cao", người dùng hoàn toàn không thể sử dụng dòng 3.x |
| [#20308](https://github.com/google-gemini/gemini-cli/issues/20308) | CLI liên tục tìm kiếm gemini-3.1-pro-preview không tồn tại | MỞ | 8 | 1 | Cơ chế chuyển đổi mô hình tự động thất bại, chỉ có 3-flash-preview khả dụng nhưng năng lực mã hóa cực kỳ kém |
| [#20115](https://github.com/google-gemini/gemini-cli/issues/20115) | Chỉ Gemini-2.5 khả dụng, không thể chuyển sang 3.0/3.1 | MỞ | 7 | 0 | Lệnh `/model` thiếu các mô hình mới nhất, chỉ định rõ ràng cũng không có tác dụng |
| [#20857](https://github.com/google-gemini/gemini-cli/issues/20857) | Gemini 3.0/3.1 không phản hồi | MỞ | 4 | 1 | Mô hình hoàn toàn không trả về, ảnh hưởng đến v0.31.0 |

> **Phản hồi của Cộng đồng**: Người dùng nói chung đặt câu hỏi về sự thiếu liên kết nghiêm trọng giữa chiến lược phát hành mô hình của Google và cơ chế khám phá mô hình của CLI, một số người dùng buộc phải quay lại phiên bản 2.5 hoặc chuyển sang đối thủ cạnh tranh.

---

### 🟡 Vấn đề Chuỗi Công cụ & Hành vi Agent

| # | Issue | Trạng thái | Bình luận | Vấn đề Cốt lõi |
|---|---|---|---|---------|
| [#20521](https://github.com/google-gemini/gemini-cli/issues/20521) | Hành vi ReadFiles không nhất quán | MỞ | 12 | **Vấn đề ổn định cốt lõi**: `ReadFiles` gốc ngẫu nhiên thất bại sau đó quay lại `cat`, dẫn đến chất lượng mã giảm sút nghiêm trọng |
| [#20718](https://github.com/google-gemini/gemini-cli/issues/20718) | Gemini 3.1 qua Anti-Gravity từ chối thực thi chỉ dẫn | MỞ | 4 | Agent phớt lờ chỉ dẫn của người dùng, hành vi tự chủ mất kiểm soát |
| [#20866](https://github.com/google-gemini/gemini-cli/issues/20866) | Trở lại công cụ nguy hiểm gốc dưới tải nhận thức cao | MỞ | 3 | Bỏ qua trình bọc bảo mật `safe_log_append.ts`, sử dụng trực tiếp `write_file` dẫn đến **mất dữ liệu bị cắt ngắn** |
| [#21053](https://github.com/google-gemini/gemini-cli/issues/21053) | Lỗi xác minh MCP outputSchema (-32600) | MỞ | 3 | Chặn khả năng tương thích hệ sinh thái công cụ MCP |

---

### 🟢 Nền tảng & Phân phối

| # | Issue | Trạng thái | Bình luận | 👍 | Yêu cầu Cốt lõi |
|---|---|---|---|-----|---------|
| [#1442](https://github.com/google-gemini/gemini-cli/issues/1442) | Thêm kênh phân phối winget | MỞ | 7 | 10 | **Yêu cầu lâu dài của người dùng Windows**, Google đã có kinh nghiệm phân phối winget nhưng CLI vẫn chưa bao phủ |
| [#21131](https://github.com/google-gemini/gemini-cli/issues/21131) | Hồi quy kiểm thử Windows (chuẩn hóa đường dẫn, liên kết tượng trưng, bao bọc shell) | MỞ | 5 | 0 | 18 bài kiểm thử thất bại trong môi trường phát triển Windows, chất lượng hỗ trợ nền tảng đáng lo ngại |

---

## 4. Tiến trình PR Quan trọng (Top 10)

### ✅ Đã hợp nhất (Đã đóng hôm qua)

| # | PR | Tác giả | Chức năng/Sửa chữa | Issue Liên quan |
|---|---|---|----------|-----------|
| [#25890](https://github.com/google-gemini/gemini-cli/pull/25890) | fix(cli): Sửa lỗi cảnh báo sử dụng `os.homedir()` | TirthNaik-99 | Sửa lỗi báo động sai/bỏ sót do biến môi trường `GEMINI_CLI_HOME` gây ra | [#22309](https://github.com/google-gemini/gemini-cli/issues/22309) |
| [#23705](https://github.com/google-gemini/gemini-cli/pull/23705) | fix(core): Giữ lại dòng cuối của shell thực thi | Aaxhirrr | **Sửa lỗi đứt gãy cấu trúc shell nhiều dòng như heredoc** | [#20755](https://github.com/google-gemini/gemini-cli/issues/20755) |
| [#25684](https://github.com/google-gemini/gemini-cli/pull/25684) | fix(core): Chuyển đổi lỗi runtime Flash→Flash-Lite | kazukinakai | **Giảm cấp tự động khi hết hạn ngạch**, giải quyết vòng lặp vô hạn 429 và treo lặng | #23397, #18059, v.v. 5 mục |
| [#24782](https://github.com/google-gemini/gemini-cli/pull/24782) | feat: Thêm tùy chọn chính sách `allowEnv` | rmedranollamas | Cho phép thực thi lệnh tiền tố biến môi trường (ví dụ: `PAGER=cat git commit`) mà không cần xác nhận | - |
| [#25712](https://github.com/google-gemini/gemini-cli/pull/25712) | shell tool hỗ trợ tệp rc | jacob314 | Thêm cài đặt `shellToolRcFile`, sửa cài đặt rõ ràng `PAGER=cat`, ngăn chặn `more`/`less` bị treo | - |
| [#25705](https://github.com/google-gemini/gemini-cli/pull/25705) | test(perf): Đổi mới quản lý cơ sở hiệu suất & bộ nhớ | sripasg | Cập nhật cơ sở từ xa tự động hóa GitHub Actions, so sánh tự động với nhánh main cục bộ | - |
| [#25691](https://github.com/google-gemini/gemini-cli/pull/25691) | feat(cli): Hiển thị bộ đếm thời gian thực cho các công cụ tốn thời gian dài | rushikeshsakharleofficial | Công cụ >3s hiển thị bộ hẹn giờ động `⠿ 7s`, giảm lo lắng khi chờ đợi | - |
| [#25683](https://github.com/google-gemini/gemini-cli/pull/25683) | fix(cli): Thông báo mới trong khi thực thi được truyền dưới dạng chỉ dẫn điều khiển | rushikeshsakharleofficial | **Giải quyết vấn đề hàng đợi tin nhắn lặng lẽ**, người dùng có thể sửa chữa Agent trong thời gian thực | - |
| [#25681](https://github.com/google-gemini/gemini-cli/pull/25681) | feat(core): Cho phép người dùng phản hồi khi hủy lệnh công cụ | luckyrandom | Mở rộng `ToolConfirmationPayload`, cho phép đính kèm lý do giải thích khi hủy | - |
| [#25404](https://github.com/google-gemini/gemini-cli/pull/25404) | fix(core): Chính sách hỗ trợ liên kết tượng trưng | kschaab | Trình tải tệp cấu hình chính sách đi theo symlink đúng cách, thuận tiện cho việc tái sử dụng không gian làm việc | - |

---

### 🔄 Mới gửi

| # | PR | Tác giả | Mô tả |
|---|---|---|------|
| [#26477](https://github.com/google-gemini/gemini-cli/pull/26477) | BT-36: Tối ưu hóa trình quản lý vòng đời & dọn dẹp tồn đọng | gemini-cli[bot] | **Quản trị tự động**: Xử lý nút thắt phân trang của hơn 2000+ issue mở, thực hiện chiến lược cắt tỉa quyết liệt hơn |

---

## 5. Xu hướng Yêu cầu Chức năng

Năm hướng tập trung cộng đồng chính được rút ra từ 50 Issue đang hoạt động:

| Hướng Xu hướng | Chỉ số Mức độ Phổ biến | Issue Đại diện | Diễn giải |
|----------|----------|-----------------|------|
| ① Hỗ trợ Mô hình Mới (Tính khả dụng của 3.0/3.1/3.x) | ████████████████████ 🔥🔥🔥 | | **Tính khả dụng của mô hình** đã từ "yêu cầu chức năng" trở thành "sự cố khả năng sử dụng", nhiều Issue người dùng cho biết "không thể làm việc chút nào" |
| ② Độ tin cậy của Agent & Ổn định Chuỗi Công cụ | ████████████████ 🔥🔥 | | **Giao thức MCP** trở thành tiêu chuẩn thực tế cho mở rộng Agent, nhưng khả năng tương thích outputSchema vẫn còn tắc nghẽn |
| ③ Tích hợp Hệ sinh thái IDE/Trình soạn thảo (SSH, winget, MCP) | ██████████ 🔥 | | **Xu hướng mã hóa chính sách** đang xuất hiện: cộng đồng đề xuất di chuyển từ TOML sang CUELang, theo đuổi khả năng diễn đạt chính sách mạnh mẽ hơn |
| ④ Tăng cường Bảo mật & Công cụ Chính sách (CUELang, allowEnv) | ████████ | | |
| ⑤ Hiệu suất & Khả năng quan sát (Telemetry, Hẹn giờ, Nhật ký) | ██████ | | |

**Thông tin chi tiết chính**：
- **Tính khả dụng của mô hình** đã từ "yêu cầu chức năng" trở thành "sự cố khả năng sử dụng", nhiều Issue người dùng cho biết "không thể làm việc chút nào".
- **Giao thức MCP** trở thành tiêu chuẩn thực tế cho mở rộng Agent, nhưng khả năng tương thích outputSchema vẫn còn tắc nghẽn.
- **Xu hướng mã hóa chính sách** đang xuất hiện: cộng đồng đề xuất di chuyển từ TOML sang CUELang, theo đuổi khả năng diễn đạt chính sách mạnh mẽ hơn.

---

## 6. Điểm Quan tâm của Nhà phát triển

### 🔥 Điểm Đau Tần suất Cao

| Điểm Đau | Phản hồi Điển hình | Phạm vi Ảnh hưởng |
|---------|---------|---------|
| **Tính khả dụng "ảo giác" của Mô hình** | "gemini-3-pro-preview đột nhiên ngừng hoạt động mà không có bất kỳ thay đổi nào" | Tất cả người dùng |
| **Agent Tự chủ mất kiểm soát** | "Tôi yêu cầu nó làm theo cách này, nó từ chối và tự làm theo cách của nó" | Người dùng 3.1/Anti-Gravity |
| **Rủi ro Bảo mật Thao tác Tệp** | "Vượt qua trình bao bọc bảo mật khi tải cao, ghi trực tiếp `write_file` cắt tệp" | Tình huống chỉnh sửa tệp lớn |
| **Công dân Hạng hai trên Windows** | "18 bài kiểm thử thất bại, Shift+Tab thất bại, thiếu winget" | Nhà phát triển Windows |

### 💡 Nhu cầu Mới nổi

- **Quản lý tiến trình nền chạy dài**：Cần công cụ gốc để giám sát trạng thái & đầu ra của lệnh nền ([#20944](https://github.com/google-gemini/gemini-cli/issues/20944))
- **Tương tác Ngữ cảnh Gems**：Đồng bộ hóa ngữ cảnh giữa CLI và Web UI Gems ([#19268](https://github.com/google-gemini/gemini-cli/issues/19268))
- **Ủy