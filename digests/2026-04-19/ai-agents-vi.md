# OpenClaw Sinh nhật ký 2026-04-19

> Vấn đề: 500 | PR: 500 | Dự án được bao phủ: 13 | Thời gian tạo: 2026-04-19 00:13 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Báo cáo chuyên sâu về dự án OpenClaw

# Nhật ký hoạt động dự án OpenClaw | 2026-04-19

## 1. Tổng quan hôm nay

OpenClaw tiếp tục duy trì hoạt động rất cao hôm nay, với **500 cập nhật Vấn đề** (326 mới/đang hoạt động, 174 đã đóng) và **500 cập nhật PR** (346 đang chờ hợp nhất, 154 đã hợp nhất/đã đóng) trong vòng 24 giờ, không có bản phát hành mới nào. Mâu thuẫn cốt lõi của cộng đồng tập trung vào **cơ sở hạ tầng ổn định và đáng tin cậy**: một mặt, lỗi onboarding trong phiên bản v2026.4.14 (`.trim()` trên undefined) đã gây tắc nghẽn hàng loạt người dùng và nhóm bảo trì đã nhanh chóng đóng 5 Vấn đề trùng lặp liên quan; mặt khác, **Đề xuất RFC về Danh tính Agent gốc và Xác minh Tin cậy** do MolTrust đề xuất (#49971) đã trở thành đề xuất thiết kế được thảo luận sôi nổi nhất trong lịch sử dự án với 96 bình luận, đánh dấu sự chuyển đổi của cộng đồng từ "lặp lại chức năng" sang giai đoạn quản trị sâu hơn về "kiến trúc an toàn". Hệ sinh thái Amazon Bedrock (cơ chế phát hiện Mantle, hỗ trợ Claude Opus 4.7, plugin giọng nói thống nhất) đã trở thành chiến trường chính cho các đóng góp mã ngày nay.

---

## 2. Phát hành phiên bản

**Không có bản phát hành mới.** Phiên bản mới nhất hiện tại vẫn là **2026.4.14** (npm), nhưng có một vấn đề hồi quy nghiêm trọng đã biết và người dùng được khuyến nghị tạm dừng nâng cấp hoặc tham khảo phần sửa lỗi dưới đây.

---

## 3. Tiến độ dự án

### Các PR chính đã hợp nhất/đóng

| PR | Tác giả | Đóng góp cốt lõi | Tác động |
|:---|:---|:---|:---|
| [#68729](https://github.com/openclaw/openclaw/pull/68729) | ender-wiggin-ai | **Thu hẹp công cụ động Hooks Prompt** — `before_prompt_build` lộ `availableTools`, plugin có thể giới hạn động bộ công cụ mỗi lượt | Tất cả các lần chạy Agent, giảm tiêu thụ Token và bề mặt tấn công |
| [#68608](https://github.com/openclaw/openclaw/pull/68608) | stroupaloop | Tái cấu trúc quy mô XL cho chức năng tương tự (đã đóng, được thay thế bởi #68729) | Hợp nhất sau khi xác minh hướng kiến trúc |
| [#68726](https://github.com/openclaw/openclaw/pull/68726) | BKF-Gitty | **Tăng cường tải trọng lỗi của Agent con** — `sessions_spawn` mang theo role, khóa phiên, thời gian lỗi | Cải thiện khả năng quan sát và quyết định thử lại của quy trình cha |
| [#68730](https://github.com/openclaw/openclaw/pull/68730) | wirjo | **Hỗ trợ Bedrock Mantle cho Claude Opus 4.7** — Bao phủ qua Anthropic Messages API | Người dùng doanh nghiệp AWS, mô hình Mantle Claude đầu tiên |
| [#68725](https://github.com/openclaw/openclaw/pull/68725) | wirjo | **Sửa cửa sổ ngữ cảnh Mô hình Mantle** — Mã hóa cứng 32K → MiniMax 1M, Qwen3 256K, v.v. giá trị thực tế | Loại bỏ cảnh báo sai "vượt quá cửa sổ ngữ cảnh" |
| [#68724](https://github.com/openclaw/openclaw/pull/68724) | Lucenx9 | **Sửa lỗi bảo vệ SSRF BlueBubbles** — Giữ lại trình phân phối đã ghim để lấy phương tiện | Bảo mật cầu nối iMessage |
| [#68722](https://github.com/openclaw/openclaw/pull/68722) | kagura-agent | **Tăng cường quyền cho tệp cấu hình** — `chmod 0o600` sau khi ghi `openclaw.json` | Giảm thiểu rò rỉ khóa do umask mặc định của systemd |
| [#68721](https://github.com/openclaw/openclaw/pull/68721) | Lucenx9 | **Chính sách phê duyệt mặc định của Codex thay đổi thành theo yêu cầu** | Mặc định an toàn, ngăn chặn thực thi mã trái phép |
| [#68717](https://github.com/openclaw/openclaw/pull/68717) | BKF-Gitty | **Cảnh báo lỗi Cron mặc định được bật** | Ngăn chặn tích lũy lỗi im lặng (từng có 95 lần lỗi liên tiếp không có thông báo) |
| [#68269](https://github.com/openclaw/openclaw/pull/68269) | Lucenx9 | **Doctor bỏ qua cảnh báo chế độ trusted-proxy** | Loại bỏ cảnh báo sai, đã đóng |

### PR lớn đang tiến hành

| PR | Tác giả | Trạng thái | Ý nghĩa |
|:---|:---|:---|:---|
| [#68718](https://github.com/openclaw/openclaw/pull/68718) | garrytan | **XL: minions — Hàng đợi tác vụ bền vững SQLite** | Giải quyết các lỗi kiến trúc như lỗi Gateway làm mất nhiệm vụ, tiến trình mồ côi của Agent con, thiếu hủy bỏ liên tiếp, v.v., cung cấp lớp bền vững thống nhất cho ACP/CLI/Cron |
| [#65554](https://github.com/openclaw/openclaw/pull/65554) | jdc4429 | **XL: Hỗ trợ đa phương tiện đầy đủ WebChat v2** | JPEG/PNG/GIF/WebP, OGG/MP3/WAV/FLAC, MP4/WebM/AVI/MKV tất cả các định dạng, lấp đầy khoảng trống chức năng lớn nhất của giao diện người dùng Web chính thức |
| [#67815](https://github.com/openclaw/openclaw/pull/67815) | mcaxtr | **XL: Tăng cường tính bền vững của xác thực WhatsApp** | Giải quyết các vấn đề về độ tin cậy cấp sản xuất như hỏng `creds.json`, gián đoạn hàng đợi, cạnh tranh đa luồng |
| [#64318](https://github.com/openclaw/openclaw/pull/64318) | wirjo | **XL: Plugin Amazon thống nhất** (Polly TTS + Transcribe STT + Giọng nói thời gian thực Nova Sonic) | Tương đương với mô hình plugin đa hợp đồng của OpenAI, tích hợp toàn diện khả năng giọng nói của AWS |

---

## 4. Điểm nóng cộng đồng

### 🔥 Thảo luận sôi nổi nhất: Danh tính Agent và Cơ sở hạ tầng Tin cậy

| Vấn đề/PR | Bình luận | Yêu cầu cốt lõi | Liên kết |
|:---|:---|:---|:---|
| **#49971 RFC: Danh tính Agent gốc & Xác minh Tin cậy** | **96** | Xây dựng lớp danh tính Agent phi tập trung dựa trên ERC-8004 / W3C DID / W3C VC, giải quyết vấn đề truy xuất nguồn gốc và kiểm toán "ai đang thực hiện nhiệm vụ" | [Liên kết](https://github.com/openclaw/openclaw/issues/49971) |
| #55342 Danh tiếng hành vi cho kỹ năng — vượt ra ngoài danh tính | 16 | Xếp chồng danh tiếng hành vi lên xác minh danh tính, đối phó với thực tế an ninh của 341 Kỹ năng độc hại, tỷ lệ lỗ hổng nghiêm trọng 13,4% | [Liên kết](https://github.com/openclaw/openclaw/issues/55342) |

**Phân tích:** RFC của MolTrust (CryptoKRI GmbH) đã gây ra một cuộc tranh luận cấp kiến trúc. Sự bất đồng của cộng đồng nằm ở: **a)** Liệu danh tính blockchain (ERC-8004) có nên được đưa vào cốt lõi hay không; b) Chiều sâu tích hợp với các tiêu chuẩn W3C hiện có; c) Khả năng tương thích với hệ sinh thái plugin không cần cấp phép. Nếu RFC này được thông qua, nó sẽ định hình lại mô hình tin cậy của OpenClaw, chuyển từ "mã là sự tin cậy" sang hệ thống hai lớp "danh tính có thể xác minh + danh tiếng hành vi". #55342, với tư cách là sự tiếp nối trực tiếp, đã phơi bày cuộc khủng hoảng an ninh của thị trường plugin ClawHub — quét tĩnh hiện tại (Snyk, VirusTotal) không thể phát hiện các cuộc tấn công động như tiêm thuốc nhắc nhở, giả mạo Agent.

### 📢 Lỗi và Tính năng có tương tác cao

| Vấn đề | Bình luận | Điểm nhức nhối | Liên kết |
|:---|:---|:---|:---|
| #45064 Rò rỉ bộ nhớ — OOM trên các lệnh cơ bản | 31 | CLI v2026.3.12 hoàn toàn không sử dụng được, tràn bộ đệm JS Heap | [Liên kết](https://github.com/openclaw/openclaw/issues/45064) |
| #14593 Lỗi cài đặt Kỹ năng trong Docker: `brew không được cài đặt` | 24 | Thiếu sót trong thiết kế hình ảnh cơ sở, trình quản lý gói macOS phụ thuộc vào trình quản lý gói Linux chính thức | [Liên kết](https://github.com/openclaw/openclaw/issues/14593) |
| #40082 Agent chấp nhận tác vụ nhưng không thực thi | 21 | Hồi quy: UI hiển thị trình giữ chỗ "One sec", thực tế không có thực thi, khả năng hiển thị nhật ký không nhất quán | [Liên kết](https://github.com/openclaw/openclaw/issues/40082) |
| #36399 Treo 60 giây khi gọi công cụ OAuth so với proxy nhanh hơn 6 lần | 21 | Mã hóa cứng Google Gemini CLI OAuth 60 giây thử lại, proxy tự lưu trữ tiết lộ vấn đề kiến trúc | [Liên kết](https://github.com/openclaw/openclaw/issues/36399) |
| #25592 Văn bản giữa các lần gọi công cụ bị rò rỉ vào tin nhắn | 20 | Văn bản xử lý nội bộ (xử lý lỗi, xác nhận thực thi) bị rò rỉ vào Slack/iMessage, thiếu sót UX nghiêm trọng | [Liên kết](https://github.com/openclaw/openclaw/issues/25592) |

---

## 5. Lỗi và Tính ổn định

### 🔴 Critical: Chặn onboarding người dùng mới

| Vấn đề | Triệu chứng | Phiên bản | PR Sửa lỗi | Liên kết |
|:---|:---|:---|:---|:---|
| #67353 / #67074 / #67130 / #67076 / #67076 | `Không thể đọc thuộc tính của undefined (đọc 'trim')` — kênh chọn/bỏ qua ngay lập tức bị lỗi | 2026.4.14 | **Đã sửa** (hoàn thành siêu dữ liệu plugin cài đặt) | [67353](https://github.com/openclaw/openclaw/issues/67353) [67074](https://github.com/openclaw/openclaw/issues/67074) |
| #67295 `agents add` ghi sai baseUrl | OpenRouter/Arcee/OpenAI-Codex/GitHub Copilot đồng thời bị lỗi | 2026.4.14 | **Đã sửa** | [Liên kết](https://github.com/openclaw/openclaw/issues/67295) |
| #67780 Plugin `contextEngine`: `toolMsg.content.filter không phải là một hàm` | Agent gặp lỗi với mỗi tin nhắn | v2026.4.14 | **Đã sửa** | [Liên kết](https://github.com/openclaw/openclaw/issues/67780) |
| #67261 Mô hình Venice thiếu `id/status` lỗi | `Không thể đọc thuộc tính của undefined (đọc 'id')` | - | **Đã sửa** | [Liên kết](https://github.com/openclaw/openclaw/issues/67261) |

### 🟠 High: Tính ổn định sản xuất

| Vấn đề | Triệu chứng | Trạng thái | Liên kết |
|:---|:---|:---|:---|
| #45064 Rò rỉ bộ nhớ — OOM trên các lệnh cơ bản | CLI v2026.3.12 hoàn toàn không sử dụng được | **Đã đóng**，cần xác minh xem đã sửa lỗi hoàn toàn chưa | [Liên kết](https://github.com/openclaw/openclaw/issues/45064) |
| #36399 Treo 60 giây trên OAuth nhiều bước | Gemini CLI của Google mã hóa cứng thử lại, proxy tự lưu trữ nhanh hơn 6 lần | **Mở**，nguyên nhân gốc rễ: Xử lý 429 HTTP im lặng | [Liên kết](https://github.com/openclaw/openclaw/issues/36399) |
| #40082 Tác vụ được chấp nhận nhưng không được thực thi | Hồi quy: Trả lời giữ chỗ, nhật ký hoạt động không nhất quán | **Mở**，nghi ngờ lỗi lớp lập lịch | [Liên kết](https://github.com/openclaw/openclaw/issues/40082) |
| #36994 Exec và công cụ tiếp tục bị lỗi | Liên tục bị lỗi sau lần chạy đầu tiên, cả browser/exec/read/write đều không hoạt động | **Mở**，cũ, liên quan đến cài đặt Pinokio | [Liên kết](https://github.com/openclaw/openclaw/issues/36994) |
| #62272 Nâng cấp lên 2026.4.5 lỗi: thiếu `@buape/carbon` | Thiếu phụ thuộc, vấn đề đường dẫn cài đặt pnpm | **Mở**，👍 7 | [Liên kết](https://github.com/openclaw/openclaw/issues/62272) |
| #57099 Nhà cung cấp Ollama "Không có nhà cung cấp API nào được đăng ký" | Hồi quy v2026.3.28, cấu hình rõ ràng không hoạt động | **Mở** | [Liên kết](https://github.com/openclaw/openclaw/issues/57099) |
| #67575 / #67425 / #67698 OpenRouter "payloads=0" / "lượt không đầy đủ" | Phản hồi đến nhưng không trả về cho người dùng, chặn cấp độ Beta | **Hỗn hợp Đã đóng/Mở**，nguyên nhân gốc rễ chưa được làm rõ hoàn toàn | [67575](https://github.com/openclaw/openclaw/issues/67575) [67425](https://github.com/openclaw/openclaw/issues/67425) [67698](https://github.com/openclaw/openclaw/issues/67698) |

### 🟡 Medium: Trải nghiệm và Tương thích

| Vấn đề | Triệu chứng | Liên kết |
|:---|:---|:---|
| #25592 Rò rỉ văn bản giữa các lần gọi công cụ vào kênh nhắn tin | [Liên kết](https://github.com/openclaw/openclaw/issues/25592) |
| #14593 Cài đặt Kỹ năng trong Docker phụ thuộc vào brew | [Liên kết](https://github.com/openclaw/openclaw/issues/14593) |
| #31486 Công cụ hình ảnh không hỗ trợ nhà cung cấp tùy chỉnh | [Liên kết](https://github.com/openclaw/openclaw/issues/31486) |
| #28222 Plugin diagnostics-otel thiếu `@opentelemetry/api` | [Liên kết](https://github.com/openclaw/openclaw/issues/28222) |
| #5116 Quyền FDA iMessage không được kế thừa qua LaunchAgent | [Liên kết](https://github.com/openclaw/openclaw/issues/5116) |

---

## 6. Yêu cầu chức năng và tín hiệu lộ trình

| Vấn đề/PR | Loại | Khả năng được đưa vào | Tín hiệu chính |
|:---|:---|:---|:---|
| #49971 Xác minh Danh tính & Tin cậy Agent | RFC Kiến trúc | ⭐⭐⭐⭐⭐ Cao | 96 bình luận, chứng thực doanh nghiệp MolTrust, căn chỉnh tiêu chuẩn ERC-8004/W3C DID, phụ thuộc trực tiếp vào #55342 |
| #55342 Danh tiếng hành vi cho kỹ năng | Tăng cường Bảo mật | ⭐⭐⭐⭐⭐ Cao | Trích dẫn các sự cố an ninh thực tế (341 Kỹ năng độc hại), tạo thành ngăn xếp tin cậy hoàn chỉnh với #49971 |
| #68718 minions: Hàng đợi công việc được lưu trữ SQLite | Cơ sở hạ tầng | ⭐⭐⭐⭐⭐ Cao | PR quy mô XL, do garrytan đệ trình, giải quyết nợ kiến trúc thiếu lớp bền vững |
| #65554 Hỗ trợ đa phương tiện đầy đủ WebChat v2 | Bổ sung chức năng | ⭐⭐⭐⭐☆ Trung-Cao | Nhu cầu cộng đồng mạnh mẽ, jdc4429 lặp lại liên tục, tương thích 2026.4.11 |
| #51130 Thông báo khởi động lại Gateway | Tối ưu hóa trải nghiệm | ⭐⭐⭐☆☆ Trung | 9 bình luận, điểm nhức nhối trong cảnh quan sản xuất, chi phí thực hiện trung bình |
| #17311 SecretsProvider: env/keyring/1Password | Cơ sở hạ tầng bảo mật | ⭐⭐⭐⭐☆ Trung-Cao | Dựa trên #16663 (GCP/AWS/Azure/Vault), nhu cầu về tính toàn vẹn của hệ sinh thái |
| #65824 Gói yêu cầu chức năng: 11 khoảng trống nền tảng | Bổ sung toàn diện | ⭐⭐⭐☆☆ Trung | 5 bình luận, người đóng góp cung cấp giải pháp thay thế cấp sản xuất, có thể được sử dụng làm tham chiếu ưu tiên |

**Phán đoán lộ trình:** Chủ đề cốt lõi của quý 2 năm 2026 đã rõ ràng — **"Thực thi Đáng tin cậy"**. Tầng trên là hệ thống danh tính/danh tiếng của #49971/#55342, tầng dưới là cơ sở hạ tầng độ tin cậy bền vững của #68718, và ở giữa là kiểm soát an ninh thời gian chạy được cung cấp bởi việc thu hẹp công cụ động của #68729.

---

## 7. Tóm tắt phản hồi người dùng

### 😤 Điểm nhức nhối cốt lõi

> *"Đã cập nhật lên phiên bản mới nhất, tiếp tục. Đã cài đặt qua pinokio. Những gì tôi muốn là nhận các khả năng mặc định mà không bị lỗi."* — #36994

**Vòng lặp "nâng cấp là hỏng"** là kẻ giết niềm tin lớn nhất. Người dùng báo cáo rằng lần chạy đầu tiên hoạt động bình thường, sau đó exec/browser/tools đều ngừng hoạt động, việc cập nhật/cài đặt lại không giải quyết được. Khả năng tương thích của các trình cài đặt của bên thứ ba như Pinokio chưa được đưa vào CI.

> *"Các Agent chấp nhận tác vụ nhưng thường không thực thi chúng, trả về các phản hồi giữ chỗ"* — #40082

**Chế độ "chấp nhận giả"** nguy hiểm hơn lỗi trực tiếp — người dùng không thể phân biệt giữa "đang xử lý" và "đã lỗi im lặng", dẫn đến mất nhiệm vụ.

> *"Sử dụng CÙNG MỘT Tài khoản" — Sự khác biệt của proxy OAuth 60s so với 10s* — #36399

**Hiệu suất đường dẫn OAuth gốc trên đám mây kém hơn** proxy tự lưu trữ, cho thấy việc triển khai nhà cung cấp chính thức có vấn đề về chiến lược thử lại quá mức/giáng cấp.

### 😊 Phản hồi tích cực

- PR hỗ trợ đa phương tiện WebChat (#65554) được mong đợi, người dùng chủ động thử nghiệm và cung cấp phản hồi về khả năng tương thích
- Phản hồi sửa lỗi nhanh: Các Vấn đề lỗi onboarding đã được đóng hàng loạt trong vòng 24 giờ, nhóm bảo trì phản hồi vào cuối tuần

### 🔍 Hiểu biết về trường hợp sử dụng

| Kịch bản | Bằng chứng | Gợi ý sản phẩm |
|:---|:---|:---|
| Triển khai máy chủ Docker/Linux | Phụ thuộc brew trong #14593, thiếu otel trong #28222 | Hình ảnh chính thức cần loại bỏ các giả định của macOS |
| Chuyển đổi dự phòng nhiều mô hình | Lỗi baseUrl trong #67295, 500 Codex không kích hoạt chuyển đổi dự phòng trong #35119 | Lớp định tuyến mô hình cần mạnh mẽ hơn |
| Kiểm toán tuân thủ doanh nghiệp | Yêu cầu DID/VC trong #49971 | Rào cản gia nhập cho các phân khúc tài chính/y tế |
| Nhiệm vụ tự động hóa dài hạn | Phạm vi mô hình Cron trong #33577, cảnh báo lỗi trong #68717 | Độ tin cậy không có người giám sát là chìa khóa chuyển đổi khách hàng tiềm năng |

---

## 8. Tồn đọng cần xử lý

### ⚠️ Vấn đề cũ nhưng có giá trị cao (>30 ngày không có cập nhật, vẫn hoạt động hôm nay)

| Vấn đề | Số ngày | Rủi ro | Đề xuất hành động |
|:---|:---|:---|:---|
| #14593 Phụ thuộc brew trong Docker | 66 ngày | Ảnh hưởng đến khả năng sử dụng của hình ảnh chính thức, 👍 17 | Tái cấu trúc trình cài đặt Kỹ năng, phát hiện môi trường chạy |
| #12590 `memoryFlush` kích hoạt theo chu kỳ | 69 ngày | Quản lý bộ nhớ không đáng tin cậy | Sửa logic so sánh `shouldRunMemoryFlush` |
| #36982 OAuth Qwen thường xuyên lỗi | 43 ngày | Kênh mô hình chính cho người dùng Trung Quốc | Kiểm tra cơ chế lưu trữ mã thông báo làm mới |
| #26691 Plugin Nextcloud Talk lỗi 998 | 53 ngày | Tích hợp doanh nghiệp tự lưu trữ bị lỗi | Kiểm tra khả năng tương thích phiên bản API Nextcloud |
| #29670 Tailscale allowTailscale vẫn yêu cầu ghép nối | 50 ngày | Chặn kịch bản mạng không tin cậy | Tích hợp logic ghép nối với nguồn danh tính Tailscale |

### 📋 RFC mở dài hạn cần quyết định

| Vấn đề | Trạng thái | Yếu tố chặn |
|:---|:---|:---|
| #49971 Xác minh Danh tính & Tin cậy Agent | Mở, 96 bình luận | Đang được ủy ban kiến trúc đánh giá, cần cân bằng lý tưởng phi tập trung với độ phức tạp thực hiện |
| #55342 Danh tiếng hành vi | Mở, 16 bình luận | Phụ thuộc vào lớp danh tính #49971 trước |

---

**Thời gian tạo báo cáo**: 2026-04-19
**Bao phủ dữ liệu**: Hoạt động GitHub trong 24 giờ qua
**Điểm sức khỏe dự án**: ⚡ Hoạt động A+ | 🐛 Độ ổn định B (lỗi onboarding v2026.4.14) | 🛡️ Tiến hóa kiến trúc an toàn A (chiều sâu RFC) | 📦 Tính toàn vẹn hệ sinh thái B+ (Docker/WhatsApp/hỗ trợ đa phương tiện đang tiến hành)

---

## Phân tích so sánh ngang các dự án trong hệ sinh thái

# Phân tích so sánh ngang hệ sinh thái mã nguồn mở của Trợ lý AI Cá nhân / Tác nhân Thông minh Tự trị
**Dữ liệu đến ngày**: 2026-04-19

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái mã nguồn mở của trợ lý AI cá nhân đang trải qua một **bước nhảy tập thể từ "có chức năng" sang "có thể sản xuất đáng tin cậy"**. Các dự án hàng đầu đạt trung bình 50+ lượt xử lý Vấn đề/PR mỗi ngày, và trọng tâm cộng đồng đã mở rộng từ việc truy cập mô hình sang **cơ sở hạ tầng tin cậy danh tính** (OpenClaw #49971), **kiến trúc bộ nhớ dài hạn** (NanoBot #3227, Hermes #6323), và **hợp tác & cô lập nhiều tác nhân** (tái cấu trúc mô-đun NanoClaw, bảo mật phiên ZeroClaw). Các dự án Rust (ZeroClaw, Moltis) đang tăng tốc độ thâm nhập vào các trường hợp sử dụng doanh nghiệp nhờ kiến trúc Workspace và an toàn kiểu, trong khi các dự án Node.js/Python (OpenClaw, NanoBot) duy trì vị trí dẫn đầu trên thị trường đại chúng với hệ sinh thái phong phú và tốc độ lặp lại. Nhìn chung, nó cho thấy một xu hướng song song của "cuộc chạy đua vũ trang kiến trúc an toàn" và "triển khai biên nhẹ".

---

## 2. So sánh hoạt động từng dự án

| Dự án | Vấn đề (24h) | PR (24h) | Hợp nhất/Đóng | Phát hành | Đánh giá sức khỏe |
|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 (326 mở/174 đóng) | 500 (346 chờ/154 hợp nhất) | Lưu lượng cao | Không (v2026.4.14 có hồi quy) | ⚡ A+ Hoạt động / 🐛 B Độ ổn định / 🛡️ A Tiến hóa an toàn |
| **NanoBot** | 25 (tỷ lệ đóng 40%) | 54 (tỷ lệ hợp nhất/đóng 70%) | Hiệu quả cao | Không | Tốt, nợ bộ nhớ cần thanh toán |
| **Hermes Agent** | 50 (39 mở/11 đóng) | 50 (37 chờ/13 hợp nhất) | Điểm tắc nghẽn | Không | Đầu vào cao, đầu ra thấp, tồn đọng kiểm tra |
| **PicoClaw** | 11 (tất cả mở) | 8 (3 hợp nhất/5 chờ) | Cực thấp | Nightly v0.2.6 | ⚠️ Phản ứng bảo trì chậm, khủng hoảng xác thực |
| **NanoClaw** | 5 (2 mở/3 đóng) | 21 (14 hợp nhất/7 chờ) | Lập lịch hiệu quả cao | Không | 🔥 Đột phá tái cấu trúc, hồi quy lập lịch |
| **NullClaw** | 7 (6 mở/1 đóng) | 11 (tất cả chờ xem xét) | **Không hợp nhất** | Không | ⚠️ Lưu lượng vào > Lưu lượng ra, tắc nghẽn xem xét |
| **IronClaw** | 18 (8 mở/10 đóng) | 50 (41 chờ/9 hợp nhất) | Thanh toán nợ kiểm tra | Không (v0.25.0) | Tốt, CI đang được cứng rắn hóa |
| **LobsterAI** | **0** | 2 (tất cả chờ xem xét) | Đình trệ | Không | 🔴 Trạng thái ngủ đông, tồn đọng PR 34-38 ngày |
| **Moltis** | 4 (2 mở/2 đóng) | 11 (6 hợp nhất/5 chờ) | Chặt chẽ | Không | Tốt, kỹ thuật hóa tài liệu |
| **CoPaw** | 12 (hoạt động) | 9 (tất cả chờ xem xét) | Không hợp nhất | Không | Lặp lại nhanh, Windows mỏng manh |
| **ZeroClaw** | 49 (46 mở/3 đóng) | 46 (29 chờ/17 hợp nhất) | Đỉnh cao | **v0.7.0 + v0.7.1** | 🔥 Đau đớn tái cấu trúc kiến trúc, đẩy nhanh bổ sung khả năng |
| **TinyClaw** | — | — | — | — | Không hoạt động |
| **ZeptoClaw** | — | — | — | — | Không hoạt động |

---

## 3. Vị thế của OpenClaw trong hệ sinh thái

| Chiều | Hiệu suất OpenClaw | So sánh hệ sinh thái |
|:---|:---|:---|
| **Dẫn đầu về quy mô** | 500 Vấn đề/500 PR hoạt động hàng ngày, quy mô gấp 10 lần dự án đứng thứ hai | Dự án duy nhất đạt được hoạt động "cấp nền tảng", tạo ra tiềm năng tiêu chuẩn thực tế |
| **Tiên phong kiến trúc an toàn** | RFC Danh tính Agent #49971 (96 bình luận, cao nhất lịch sử) | Các đối thủ cạnh tranh chủ yếu dừng ở cấp độ công cụ (sửa lỗi SSRF, v.v.), OpenClaw đi tiên phong trong việc thúc đẩy lớp danh tính phi tập trung (ERC-8004/W3C DID) |
| **Chiều sâu hệ sinh thái nhà cung cấp đám mây** | Ba plugin Amazon Bedrock thống nhất (#64318), cơ chế phát hiện Mantle | Hermes/ZeroClaw tập trung vào ma trận kênh (Signal/WhatsApp), NanoBot tập trung vào định tuyến mô hình, OpenClaw khác biệt hóa bằng tích hợp cơ sở hạ tầng doanh nghiệp |
| **Chi phí nợ kỹ thuật** | Lỗi onboarding v2026.4.14 chặn hàng loạt người dùng mới | ZeroClaw đồng thời hoàn thành tái cấu trúc v0.7.0 + bản vá nhanh, IronClaw tránh các lỗi tương tự bằng cách làm cứng E2E; mô hình "lặp lại tốc độ cao - sửa lỗi nhanh" của OpenClaw gây tổn thất niềm tin |
| **Mô hình quản trị cộng đồng** | Nhóm bảo trì phản hồi vào cuối tuần, đóng hàng loạt Vấn đề trùng lặp | So với việc tái cấu trúc điểm duy nhất của NanoClaw do gavrielc thúc đẩy, cụm PR cá nhân của NullClaw do manelsen, OpenClaw thể hiện cấu trúc bảo trì phân tán trưởng thành hơn |

**Sự khác biệt cốt lõi**: OpenClaw là dự án duy nhất bao phủ cả **chiều rộng kênh người tiêu dùng** (Slack/iMessage/Discord/WebChat) và **chiều sâu cơ sở hạ tầng doanh nghiệp** (Bedrock/lớp danh tính/tuân thủ kiểm toán), nhưng "bao phủ mọi tình huống" dẫn đến độ phức tạp kiến trúc cao hơn so với các đối thủ cạnh tranh dọc.

---

## 4. Hướng công nghệ được quan tâm chung

| Hướng | Dự án liên quan | Yêu cầu cụ thể | Mức độ khẩn cấp |
|:---|:---|:---|:---|
| **Kiến trúc bộ nhớ dài hạn** | NanoBot #3227, Hermes #6323, ZeroClaw #5849, các vấn đề về bộ nhớ OpenClaw | Lưu trữ bền vững vượt quá cửa sổ ngữ cảnh, tính liên tục giữa các phiên, nén không làm mất chi tiết | 🔴 Cao |
| **Danh tính & Tin cậy Agent** | OpenClaw #49971/#55342, cô lập phiên ZeroClaw #5833, mô-đun quyền NanoClaw | Truy xuất nguồn gốc có thể xác minh của "ai đang thực thi", cô lập đa người dùng, bảo mật chuỗi cung ứng kỹ năng | 🔴 Cao |
| **Khả năng quan sát cấp sản xuất** | Hộp cát Moltis #784, vòng đời Gateway NanoBot #3279, làm cứng E2E IronClaw, cảnh báo Cron OpenClaw #68717 | Từ "chạy hộp đen" đến ghi nhật ký phân cấp, kiểm tra sức khỏe, cảnh báo lỗi | 🟡 Trung-Cao |
| **Triển khai cục bộ/biên** | PicoClaw #286 Termux, Docker "full" ZeroClaw #3642, biến môi trường NanoBot #3251, nix-darwin Hermes #9782 | Khả năng ngoại tuyến, tính toàn vẹn của vùng chứa, quản lý gói đa nền tảng | 🟡 Trung-Cao |
| **Định tuyến & Giáng cấp mô hình** | Định tuyến nhẹ NanoBot #3109, gọi công cụ gốc ZeroClaw #5762, sửa lỗi baseUrl OpenClaw #67295 | Tối ưu hóa chi phí, chuyển đổi tự động lỗi nhà cung cấp, chiến lược đa mô hình | 🟡 Trung |
| **Bổ sung API đa phương thức** | Tải lên hình ảnh Hermes #12329/#5621, đa phương tiện WebChat OpenClaw #65554, tham số trình duyệt CoPaw #3558 | Đầu vào/đầu ra hình ảnh/âm thanh/video thống nhất, đối xứng API-CLI | 🟡 Trung |
| **Quốc tế hóa & Kỹ thuật tài liệu** | "Doc Rotisserie" Moltis, Mozilla Fluent ZeroClaw #5787, i18n kỹ năng CoPaw #3558 | Từ "thực hiện chức năng" sang "sản phẩm toàn cầu có thể bảo trì" | 🟢 Trung |

---

## 5. Phân tích định vị khác biệt

| Dự án | Trọng tâm chức năng cốt lõi | Người dùng mục tiêu | Khác biệt kỹ thuật chính |
|:---|:---|:---|:---|
| **OpenClaw** | Tích hợp doanh nghiệp đa kênh + cơ sở hạ tầng tin cậy an toàn | Nhóm vừa và lớn, doanh nghiệp nhạy cảm về tuân thủ | Thị trường Kỹ năng dạng plugin, môi trường chạy TypeScript, căn chỉnh tiêu chuẩn W3C |
| **NanoBot** | Tối ưu hóa hệ thống bộ nhớ + trải nghiệm nhà phát triển | Người đam mê công nghệ, người dùng dự án dài hạn | Lõi không đồng bộ Python, nhẹ và tùy chỉnh, chất lượng mã được cộng đồng ca ngợi |
| **Hermes Agent** | Agent tự cải tiến + hệ sinh thái kỹ năng | Nhà nghiên cứu AI, người dùng tự động hóa nặng | Thực thi công cụ không đồng bộ (Atropos), nén ngữ cảnh, nền tảng học thuật của Nous Research |
| **ZeroClaw** | Hộp cát an toàn + ma trận kênh + tuân thủ doanh nghiệp | Các phân khúc tài chính/y tế, người dùng tự lưu trữ | Workspace Cargo Rust, cấu hình dạng lược đồ, công cụ chính sách/OTP |
| **Moltis** | Trí tuệ mã + khả năng quan sát hộp cát | Tích hợp chuỗi công cụ nhà phát triển, lập trình viên AI hỗ trợ | Rust + giao diện người dùng TypeScript, phân tích AST tree-sitter, thực thi công cụ dạng vùng chứa |
| **NanoClaw** | Nền tảng Agent mở dạng mô-đun | Kỹ sư giao thức, cộng đồng phi tập trung | Hệ thống mô-đun dạng đăng ký, hỗ trợ gốc Nostr/Matrix, tái cấu trúc kiến trúc v2 đang tiến hành |
| **CoPaw** | Bảng điều khiển giao diện người dùng + chuẩn hóa bộ nhớ | Người dùng hệ sinh thái Qwen, nhà phát triển Trung Quốc | Tích hợp sâu AgentScope 2.0, giai đoạn chuyển thương hiệu (CoPaw → QwenPaw) |
| **PicoClaw** | Tối ưu hóa nhúng/biên nhẹ | Nhà phát triển IoT, triển khai địa phương ở Trung Quốc | Ngôn ngữ Go, quản lý gói opkg, tương thích phần cứng RISC-V (Sipeed) |
| **NullClaw** | Tùy chỉnh công cụ + đa không gian làm việc | Nhóm nhỏ, nhu cầu cô lập đa dự án | Giai đoạn mở rộng chức năng nhanh chóng, tắc nghẽn kiểm tra, đang chuyển đổi sang cấp doanh nghiệp |
| **LobsterAI** | Truy cập nhiều nhà cung cấp mô hình | Người dùng hệ sinh thái Netease Youdao | Đình trệ bảo trì, dự án rủi ro |
| **IronClaw** | Hệ sinh thái blockchain NEAR + học hỏi hành vi | Giao thoa Web3/AI | Rust, CI quảng bá giai đoạn, công cụ học hành vi |

---

## 6. Sự nhiệt tình của cộng đồng và mức độ trưởng thành

```
【Giai đoạn lặp lại nhanh】🔥 Hoạt động cao + thay đổi kiến trúc
├── OpenClaw: Chạy nước rút kép chức năng-an toàn, RFC sâu nhưng độ ổn định biến động
├── ZeroClaw: Bổ sung khả năng sau tái cấu trúc v0.7.x, đỉnh PR nhưng hồi quy dày đặc
├── NanoClaw: Tiến triển quyết định trong tái cấu trúc mô-đun, nợ lập lịch cần thanh toán
└── CoPaw: Tiến triển ba tuyến về bộ nhớ/định tuyến/kiểm tra, khoảng trống chất lượng Windows

【Giai đoạn củng cố chất lượng】🛠️ Hoạt động cao + thanh toán nợ
├── NanoBot: Giai đoạn thảo luận kiến trúc bộ nhớ, phản hồi nhanh good first issue
├── Hermes Agent: Làm cứng CI/kiểm tra/đa nền tảng, tắc nghẽn thông lượng hợp nhất
├── Moltis: Cột mốc lập chỉ mục mã, dự án lớn di chuyển giao diện người dùng
└── IronClaw: Thanh toán nợ kiểm tra E2E tập trung, bảo vệ ranh giới cổng

【Giai đoạn rủi ro/đình trệ】⚠️ Hoạt động thấp hoặc vấn đề cấu trúc
├── PicoClaw: Khủng hoảng xác thực + tỷ lệ đóng Vấn đề bằng không, băng thông bảo trì không đủ
├── NullClaw: Ngày không hợp nhất + lỗi phân tích công cụ chưa được sửa, khủng hoảng kiểm tra
└── LobsterAI: Tồn đọng PR 38 ngày, nghi ngờ người bảo trì rời đi
```

---

## 7. Tín hiệu xu hướng đáng chú ý

| Xu hướng | Nguồn tín hiệu | Giá trị cho nhà phát triển |
|:---|:---|:---|
| **"Thực thi đáng tin cậy" trở thành rào cản mới** | RFC Danh tính Agent #49971 của OpenClaw + cụm PR bảo mật phiên ZeroClaw + mô-đun quyền NanoClaw | Chỉ sự phong phú chức năng đơn thuần là không đủ, **khả năng kiểm toán, cô lập và xác minh** của Agent sẽ trở thành ngưỡng bắt buộc để doanh nghiệp mua hàng. Nên đi trước một bước trong DID/VC hoặc ít nhất là triển khai cô lập cấp phiên |
| **Hệ thống bộ nhớ chuyển từ "tham số nén" sang "neo tác vụ"** | Công cụ Tập trung Cấp Phiên #3292 của NanoBot, mempalace #6323 của Hermes, Chế độ Giấc mơ #5849 của ZeroClaw | Bộ nhớ dài hạn đang chuyển từ "lưu nhiều hơn" sang "ghi nhớ những gì cần ghi nhớ". **Bộ nhớ có cấu trúc (không phải tóm tắt thuần văn bản) + neo tác vụ rõ ràng** là hướng kiến trúc thế hệ tiếp theo |
| **Doanh nghiệp hóa dự án Rust tăng tốc** | Tái cấu trúc Workspace v0.7.0 của ZeroClaw, lập chỉ mục mã Moltis #771, bảo vệ ranh giới Gateway IronClaw | An toàn kiểu và kiến trúc Cargo Workspace của Rust làm cho nó trở thành một áp lực thay thế Node/Python trong các tình huống hợp tác đa nhóm, bảo trì dài hạn và kiểm toán tuân thủ. Nên đánh giá Rust cho cơ sở hạ tầng doanh nghiệp, tùy chọn ngăn xếp linh hoạt cho các dự án cá nhân |
| **Vòng lặp "nâng cấp là hỏng" làm tổn hại niềm tin** | Hồi quy v2026.4.14 của OpenClaw, làm gián đoạn schema v2 của ZeroClaw, sự lộn xộn thư mục di chuyển thương hiệu của CoPaw | **Tự động hóa di chuyển cấu hình + schema có phiên bản + cơ chế hoàn tác** là nhu cầu cơ sở hạ tầng. Nên giới thiệu cơ chế "di chuyển thời gian thực" theo kiểu OpenClaw hoặc cơ chế phiên bản schema của ZeroClaw |
| **Khoảng cách trưởng thành của công cụ mô hình cục bộ** | Ollama mất ngữ cảnh #3562, lỗi phân tích llama.cpp #3560, phản hồi trống Ollama PicoClaw #2583 | Nhu cầu triển khai cục bộ tăng vọt, nhưng **chi tiết như định dạng gọi công cụ, phân tích luồng, quản lý ngữ cảnh** có sự khác biệt về hành vi so với các mô hình đám mây. Nên bao gồm ma trận kiểm tra khả năng tương thích khi tích hợp mô hình cục bộ |
| **Xây dựng giao diện người dùng trở thành điểm tắc nghẽn chung cho các dự án Rust/Go** | Lỗi xây dựng bảng điều khiển Web #4866 của ZeroClaw (15 bình luận), không có giao diện người dùng Web chính thức của PicoClaw | Ưu thế hiệu suất backend cần phù hợp với khả năng **nhúng tài nguyên giao diện người dùng + phân phối trang tĩnh**. Tauri (ZeroClaw), Vite (Moltis #775) là các lộ trình khả thi, nhưng quy trình xây dựng cần được làm cứng trong CI |
| **Rủi ro của mô hình do người đóng góp cá nhân thúc đẩy** | 8 PR của gavrielc trong một ngày của NanoClaw, 8 cụm PR của manelsen tại NullClaw, ba lần liên tiếp các chức năng cấp hệ thống của Hermes | Sự phụ thuộc cao vào những người đóng góp cá nhân mang lại **rủi ro về tính nhất quán kiến trúc và băng thông xem xét**. Nên thiết lập ngưỡng "đánh giá thiết kế" cho những người bảo trì cốt lõi để tránh cộng đồng thiếu khả năng hiển thị đối với các thay đổi lớn |

---

**Kết luận**: Hệ sinh thái trợ lý AI cá nhân vào quý 2 năm 2026 đang ở điểm tới hạn của **"tái cấu trúc niềm tin sau khi bão hòa chức năng"**. OpenClaw dẫn đầu về quy mô và kiến trúc an toàn, nhưng nợ ổn định làm xói mòn lợi thế; ZeroClaw/Moltis chiếm được cảm tình của doanh nghiệp bằng kỹ thuật hóa Rust; NanoBot giành được sự ủng hộ của nhà phát triển bằng chất lượng mã. Điểm quyết định của giai đoạn tiếp theo sẽ là tích của **"độ chính xác bộ nhớ dài hạn × cường độ cô lập đa người dùng × độ tin cậy nâng cấp"**, chứ không phải là một điểm nhấn chức năng đơn lẻ.

---

## Báo cáo chi tiết dự án cùng cạnh tranh

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Nhật ký hoạt động dự án NanoBot | 2026-04-19

---

## 1. Tổng quan hôm nay

NanoBot hôm nay duy trì **hoạt động cao**: 25 Vấn đề được xử lý trong 24 giờ (tỷ lệ đóng 60%), 54 PR được lưu chuyển (tỷ lệ hợp nhất/đóng 70%), không có bản phát hành mới. Nhu cầu cốt lõi của cộng đồng tập trung vào **tối ưu hóa kiến trúc hệ thống bộ nhớ** (bảo toàn chi tiết trong các dự án dài hạn, khả năng cấu hình chiến lược nén) và **tính ổn định môi trường sản xuất** (nhận biết vòng đời Gateway, khả năng chống lỗi kết nối MCP, bảo vệ ranh giới hàng đợi). Nhiều good first issue đã nhanh chóng được đóng, cho thấy người đóng góp mới tích hợp trơn tru. Sức khỏe tổng thể tốt, nhưng nợ kỹ thuật của hệ thống bộ nhớ đang tích lũy và cần chú ý đến các phản hồi ở cấp độ kiến trúc.

---

## 2. Phát hành phiên bản

**Không có bản phát hành mới** (phiên bản mới nhất vẫn là phiên bản lịch sử).

---

## 3. Tiến độ dự án

### Các PR quan trọng đã hợp nhất/đóng

| PR | Tác giả | Đóng góp cốt lõi | Ý nghĩa thúc đẩy dự án |
|:---|:---|:---|:---|
| [#3289](https://github.com/HKUDS/nanobot/pull/3289) | longle325 | **Sửa lỗi ô nhiễm kho lưu trữ Git lồng nhau**: Ngăn chặn việc khởi tạo `.git` lồng nhau trong không gian làm việc của kho lưu trữ git hiện có và bảo vệ `.gitignore` hiện có | Đóng #2980, loại bỏ các tác dụng phụ phá hoại của việc đồng bộ mẫu không gian làm việc |
| [#3287](https://github.com/HKUDS/nanobot/pull/3287) | chengyongru | **Thêm mẫu Vấn đề/PR**: Báo cáo lỗi có cấu trúc (bao gồm kênh/nhà cung cấp/phiên bản Python/menu thả xuống OS), mẫu yêu cầu chức năng, tắt Vấn đề trống và hướng đến Thảo luận | Đáp ứng trực tiếp yêu cầu của cộng đồng trong #3283, giảm chi phí sao chép cho người bảo trì |
| [#3109](https://github.com/HKUDS/nanobot/pull/3109) | wanghesong2019 | **Định tuyến mô hình nhẹ**: Tự động định tuyến các tác vụ hội thoại đơn giản đến "mô hình nhẹ" rẻ tiền, giữ lại mô hình chính cho các tác vụ phức tạp (tạo mã, gỡ lỗi, luồng nhiều công cụ) | Đóng #3070, chi phí tối ưu hóa thực hiện không có phụ thuộc, có giá trị đáng kể cho việc triển khai sản xuất |
| [#3112](https://github.com/HKUDS/nanobot/pull/3112) | zijiefang | **Căn chỉnh phân tích cú pháp cấu hình**: `Config.get_api_base()` trả về `default_api_base` trong sổ đăng ký nhà cung cấp | Loại bỏ sự không nhất quán giữa phân tích cú pháp cấu hình và cấu trúc thời gian chạy, giảm các vấn đề kỳ lạ như "cấu hình đúng nhưng kết nối thất bại" |
| [#3125](https://github.com/HKUDS/nanobot/pull/3125) | yeyitech | **Tăng cường hợp đồng công cụ cron**: Hành động `add` buộc `message` không trống, ngăn chặn việc gọi công cụ giống nhau lặp đi lặp lại, trả về thông tin lỗi có thể hành động | Cải thiện khả năng dự đoán của các lệnh gọi công cụ, giảm các thao tác cron không hợp lệ do ảo giác LLM |
| [#3271](https://github.com/HKUDS/nanobot/pull/3271) | pixan-ai | **Tôn trọng phát hiện TTY trong hiển thị luồng CLI**: Loại bỏ ghi đè `force_terminal=True`, tránh đầu ra bị rối trong các cảnh không có TTY (docker exec -i, pipe) | Cải thiện trải nghiệm trong các cảnh CI/tự động hóa |
| [#3277](https://github.com/HKUDS/nanobot/pull/3277) | chengyongru | **Mở rộng giao diện người dùng hướng dẫn**: Thêm menu và xác minh ràng buộc cho Kênh Chung, Máy chủ API | Cải thiện tính đầy đủ của hướng dẫn cấu hình, giảm ngưỡng khởi đầu cho người dùng mới |

**Đánh giá tổng thể**: Các PR được hợp nhất hôm nay chủ yếu tập trung vào **sửa lỗi ổn định** và **trải nghiệm nhà phát triển**, với định tuyến mô hình là điểm nổi bật về mặt chức năng. Các vấn đề kiến trúc cốt lõi của hệ thống bộ nhớ (#3227, #3047, #3270) chưa có giải pháp hợp nhất và vẫn đang trong giai đoạn thảo luận.

---

## 4. Điểm nóng cộng đồng

### Các Vấn đề được thảo luận sôi nổi nhất

| Thứ hạng | Vấn đề | Bình luận | 👍 | Yêu cầu cốt lõi | Liên kết |
|:---|:---|:---|:---|:---|:---|
| 1 | **Hạn chế dài hạn của hệ thống bộ nhớ** | 13 | 4 | `history.jsonl` + `MEMORY.md` chỉ chèn văn bản khối dẫn đến mất chi tiết trong các dự án lớn/dài hạn, kêu gọi cải tiến cấp kiến trúc | [#3227](https://github.com/HKUDS/nanobot/issues/3227) |
| 2 | **Lỗi Khóa API Nhà cung cấp Gemini** | 5 | 0 | Xung đột nhiều thông tin xác thực: `"Đã nhận nhiều thông tin xác thực xác thực. Vui lòng chỉ cung cấp một thông tin."` | [#3206](https://github.com/HKUDS/nanobot/issues/3206) |
| 3 | **Câu hỏi kỹ thuật về chiến lược nén** | 4 | 0 | Sự khác biệt giữa chiến lược tóm tắt của `maybe_consolidate_by_tokens()` và `AutoCompact._archive()`, tìm kiếm thực tiễn tốt nhất | [#3274](https://github.com/HKUDS/nanobot/issues/3274) |

### Phân tích các yêu cầu cơ bản

- **#3227** là phản hồi sâu sắc nhất của cộng đồng hôm nay: Người dùng rõ ràng khen ngợi chất lượng mã ("sạch sẽ, nhẹ nhàng, dễ bắt đầu") nhưng chỉ ra **trần thiết kế của hệ thống bộ nhớ** — quy trình gồm Session → `history.jsonl` → `MEMORY.md` + Dream tóm tắt có những hạn chế về cấu trúc về mật độ thông tin và độ chính xác tìm kiếm. 13 bình luận, 4 lượt thích cho thấy đây là một **điểm nhức nhối được đồng cảm rộng rãi**, không phải là trường hợp cá biệt.
- **#3274** cho thấy nhu cầu của cộng đồng trong việc hiểu cơ chế nén bộ nhớ: Các hành vi của hai đường dẫn lưu trữ không nhất quán (`AutoCompact._archive()` giữ lại việc chèn tóm tắt vào prompt, `maybe_consolidate_by_tokens()` không giữ lại), khiến người dùng bối rối về "khi nào ngữ cảnh bị mất".
- **#3206** về vấn đề xác thực Gemini có thể liên quan đến việc truyền khóa API / token Bearer hai lần ở cấp độ nhà cung cấp, cần được quan tâm khẩn cấp.

---

## 5. Lỗi và Tính ổn định

| Mức độ nghiêm trọng | Vấn đề | Trạng thái | Sửa lỗi PR | Liên kết |
|:---|:---|:---|:---|:---|
| **P0** | **Biến môi trường `${VAR}` trong config.json không được phân tích cú pháp, dẫn đến lỗi xác thực im lặng trong 78+ giờ** | ✅ Đã đóng | Đã hợp nhất (không có PR cụ thể được đánh dấu) | [#3251](https://github.com/HKUDS/nanobot/issues/3251) |
| **P1** | **Vòng lặp gọi công cụ trống vô hạn của Agent**: Cổng API không chuẩn vẫn chèn `tool_calls` khi `finish_reason != "tool_calls"` | ✅ Đã đóng | Đã sửa | [#3220](https://github.com/HKUDS/nanobot/issues/3220) |
| **P1** | **DuckDuckGo tìm kiếm bị treo vô hạn**: `asyncio.to_thread(ddgs.text, ...)` chặn xử lý tin nhắn của toàn bộ phiên | ✅ Đã đóng | Đã sửa | [#2804](https://github.com/HKUDS/nanobot/issues/2804) |
| **P1** | **Không thử lại khi luồng phản hồi bị cắt giữa chừng**: `_run_with_retry()` chỉ thử lại khi `finish_reason == "error"` | ✅ Đã đóng | Đã sửa | [#3256](https://github.com/HKUDS/nanobot/issues/3256) |
| **P2** | **Xung đột nhiều thông tin xác thực của Nhà cung cấp Gemini** | 🔴 Đang mở | Không | [#3206](https://github.com/HKUDS/nanobot/issues/3206) |
| **P2** | **Lỗi ClosedResourceError truyền HTTP MCP không kết nối lại**: Kênh được lưu vào bộ nhớ cache `ClientSession` đã đóng sau khi máy chủ khởi động lại | 🔴 Đang mở | [#3290](https://github.com/HKUDS/nanobot/pull/3290) đang chờ xem xét | [#3290](https://github.com/HKUDS/nanobot/pull/3290) |
| **P2** | **Hàng đợi đầu vào MessageBus không giới hạn** | 🔴 Đang mở | [#3202](https://github.com/HKUDS/nanobot/pull/3202) đang chờ xem xét | [#3202](https://github.com/HKUDS/nanobot/pull/3202) |

**Rủi ro chính**: Vấn đề xác thực Gemini trong [#3206](https://github.com/HKUDS/nanobot/issues/3206) ảnh hưởng đến cơ sở người dùng Google AI và đã có 5 bình luận mà không nhận được phản hồi rõ ràng từ người bảo trì, có nguy cơ trở thành vấn đề dẫn đến mất người dùng.

---

## 6. Yêu cầu chức năng và tín hiệu lộ trình

| Yêu cầu chức năng | Trạng thái | PR liên quan | Đánh giá khả năng được đưa vào | Liên kết |
|:---|:---|:---|:---|:---|
| **Neo Tác vụ Tập trung Cấp Phiên: Neo tác vụ bền vững giữa các lần ngắt và nén** | 🔴 Mới mở | Không | **Cao** — Đáp ứng trực tiếp điểm nhức nhối bộ nhớ #3227, tính đổi mới kiến trúc cao, bổ sung cho công cụ `my` hiện có | [#3292](https://github.com/HKUDS/nanobot/issues/3292) |
| **Thông báo vòng đời Gateway (on_start/on_stop)** | 🟡 PR hiện có | [#3291](https://github.com/HKUDS/nanobot/pull/3291) đang chờ xem xét | **Cực cao** — PR đã được đệ trình, dành cho các tình huống triển khai systemd, nhu cầu rõ ràng và thực hiện đơn giản | [#3279](https://github.com/HKUDS/nanobot/issues/3279) |
| **Tỷ lệ nén bộ nhớ có thể cấu hình** | 🟡 PR hiện có | [#3285](https://github.com/HKUDS/nanobot/pull/3285) đang chờ xem xét / [#3281](https://github.com/HKUDS/nanobot/pull/3281) đã đóng | **Cao** — Tiếng nói cộng đồng mạnh mẽ (#3270), nhưng có tranh chấp về thiết kế ("điểm kích hoạt nên được thực hiện hóa thay vì cấu hình hóa"), cần người bảo trì quyết định | [#3270](https://github.com/HKUDS/nanobot/issues/3270) |
| **Kiểm soát tùy chỉnh Dream/Skill Drift** | 🔴 Mở | Không | **Trung bình** — Người dùng đã tự giải quyết bằng cách ghi đè mẫu, hỗ trợ chính thức cần cân bằng tính linh hoạt và trải nghiệm mặc định | [#3282](https://github.com/HKUDS/nanobot/issues/3282) |
| **Kiểm tra & Khôi phục Agent** | 🔴 Mở | Không | **Trung bình** — Nhu cầu cấp thiết cho các tình huống chạy dài, nhưng liên quan đến độ phức tạp của tuần tự hóa trạng thái, có thể bị xếp hạng thấp | [#3027](https://github.com/HKUDS/nanobot/issues/3027) |
| **LLM đọc lịch sử phiên đầy đủ theo yêu cầu** | 🟡 PR hiện có | [#3263](https://github.com/HKUDS/nanobot/pull/3263) đang chờ xem xét | **Trung-Cao** — Giảm thiểu mất thông tin do nén, nhất quán với #3227 | [#3263](https://github.com/HKUDS/nanobot/pull/3263) |

**Tín hiệu lộ trình**: Hệ thống bộ nhớ đang trở thành **chiến trường chính cho sự phát triển kiến trúc**. Cộng đồng đang chuyển từ "tinh chỉnh tham số nén" (#3270) sang "cơ chế neo tác vụ" (#3292), cho thấy nhu cầu đang chuyển từ **tối ưu hóa thụ động** sang **thiết kế chủ động**. Nếu người bảo trì có thể đáp lại phê bình có cấu trúc của #3227 trong phiên bản tiếp theo, điều đó sẽ củng cố đáng kể vị thế của dự án trong cộng đồng kỹ thuật.

---

## 7. Tóm tắt phản hồi người dùng

### ✅ Điểm hài lòng
- **Chất lượng mã được đánh giá cao**: Tác giả của #3227 nói "sạch sẽ, nhẹ nhàng, dễ bắt đầu, là một niềm vui khi khám phá", loại phản hồi này rất hiếm trong các dự án mã nguồn mở và là tài sản cốt lõi của NanoBot.
- **Trải nghiệm phản hồi nhanh**: Nhiều good first issue (như #3220, #2980) đã được đóng trong vòng 2-3 ngày, trải nghiệm của người đóng góp mới tốt.

### ❌ Điểm nhức nhối
- **Hệ thống bộ nhớ "lâu dần quên"**: Người dùng dự án dài hạn cảm nhận rõ rệt **suy giảm ngữ cảnh**, các chi tiết ban đầu bị nén không thể phục hồi, dẫn đến hành vi Agent bị lệch.
- **Thiếu khả năng quan sát môi trường sản xuất**: Người dùng triển khai systemd không thể cảm nhận trạng thái Gateway (#3279), "đã tự khởi động lại nhưng không biết có bình thường không".
- **Bẫy ẩn của hệ thống cấu hình**: `${VAR}` không được phân tích cú pháp dẫn đến lỗi im lặng (#3251), `apiBase` bị ghi đè bởi biến môi trường và cấu hình không hợp lệ (#3213), cho thấy khoảng trống trong mức ưu tiên cấu hình và tài liệu.
- **Trải nghiệm gỡ cài đặt tồi tệ**: Người dùng #3267 đã bày tỏ sự tức giận ( "sửa nó ngay bây giờ làm ơn" ), phản ánh việc thiếu tài liệu và sự ma sát trong quy trình cài đặt/gỡ cài đặt.

### 🔍 Hiểu biết về trường hợp sử dụng
- **Hợp tác nhiều Agent**: Nhu cầu tin nhắn bot-to-bot xuất hiện trong bối cảnh Discord (#3280), cho thấy người dùng đang xây dựng **cấu trúc đa tác nhân** của NanoBot.
- **Xử lý tài liệu doanh nghiệp**: Thiếu trích xuất nội dung bảng/hình dạng tổ hợp PPTX (#3250), cho thấy NanoBot đang được sử dụng để **xây dựng cơ sở kiến thức doanh nghiệp**.

---

## 8. Tồn đọng cần xử lý

| Loại | Dự án | Ngày tạo | Cập nhật cuối cùng | Rủi ro |
|:---|:---|:---|:---|:---|
| **Vấn đề** | DuckDuckGo tìm kiếm không hoạt động (khi không có cấu hình tham số) | 2026-03-15 | 2026-04-18 | 35 ngày chưa đóng, có thể liên quan đến #2804 nhưng chưa được liên kết, có nguy cơ lao động lặp lại |
| **Vấn đề** | Giới hạn 10 phút của lệnh gọi luồng | 2026-04-01 | 2026-04-18 | Chặn các tác vụ dài trong kịch bản doanh nghiệp, chỉ có 1 bình luận chưa nhận được phản hồi kỹ thuật |
| **Vấn đề** | Chi tiết hoàn thành tác vụ nền của Sub Agent Gemini | 2026-04-06 | 2026-04-18 | Người dùng đã cung cấp giải pháp tạm thời ( `current_role = "user"` ), nhưng chưa được người bảo trì đánh giá để hợp nhất |
| **PR** | Bảo lưu /dừng tin nhắn người dùng và lệnh gọi công cụ khi hủy bỏ | 2026-03-26 | 2026-04-18 | 24 ngày chưa hợp nhất, ảnh hưởng đến trải nghiệm người dùng Telegram, tác giả pblocz đã cập nhật liên tục |
| **PR** | Hợp nhất CRUD công cụ `manage_skill` | 2026-04-14 | 2026-04-18 | Tái cấu trúc cấp kiến trúc quản lý kỹ năng, 5 ngày chưa hợp nhất, có thể do phạm vi lớn cần xem xét nhiều hơn |

**Đề xuất hành động cho người bảo trì**:
1. **Ưu tiên xử lý #3206** (xác thực Gemini), tránh mất người dùng Google AI;
2. **Đánh giá ưu tiên hợp nhất của #2526 và #3137**, cả hai đều cải thiện tính toàn vẹn tương tác và kiến trúc quản lý kỹ năng tương ứng;
3. **Đưa ra phản hồi kỹ thuật chính thức cho #3227**, ngay cả khi không có kế hoạch tái cấu trúc ngắn hạn, việc nêu rõ lộ trình sẽ ổn định kỳ vọng của cộng đồng.

---

*Thời gian tạo báo cáo hàng ngày: 2026-04-19 | Nguồn dữ liệu: Hoạt động công khai của GitHub HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Nhật ký hoạt động dự án Hermes Agent | 2026-04-19

## 1. Tổng quan hôm nay

Hermes Agent hôm nay duy trì **hoạt động cao**: 50 cập nhật Vấn đề (39 hoạt động/mới, 11 đóng) và 50 cập nhật PR (37 chờ hợp nhất, 13 hợp nhất/đóng) tạo ra tỷ lệ mở/đóng là 2:1, cho thấy cộng đồng đầu tư mạnh mẽ nhưng có điểm tắc nghẽn về năng suất hợp nhất. Trọng tâm cốt lõi tập trung vào **sửa lỗi lớp xác thực cho nhà cung cấp Google Gemini** (đóng 4 Vấn đề liên quan trong một ngày), **bổ sung khả năng đa phương thức cho máy chủ API**, và **cải thiện trải nghiệm cài đặt đa nền tảng như Windows/Termux**. Không có bản phát hành mới, việc lặp lại chức năng chủ yếu là các bản vá và sửa lỗi ổn định.

---

## 2. Phát hành phiên bản

**Không có bản phát hành mới** (v0.x.x chưa xác định)

---

## 3. Tiến độ dự án

### Các PR quan trọng đã hợp nhất/đóng

| PR | Tác giả | Đóng góp cốt lõi | Ý nghĩa thúc đẩy dự án |
|:---|:---|:---|:---|
| [#201](https://github.com/NousResearch/hermes-agent/pull/201) | 0xbyt4 | Logic loại bỏ trùng lặp Chợ Kỹ năng: Sắp xếp theo mức độ tin cậy (builtin > trusted > community) | Loại bỏ thứ tự ưu tiên nguồn kỹ năng bị đảo ngược, đảm bảo kỹ năng chính thức không bị ghi đè bởi cộng đồng, cải thiện bảo mật chuỗi cung ứng |
| [#19](https://github.com/NousResearch/hermes-agent/pull/19) | teknium1 | Tái cấu trúc thực thi công cụ không đồng bộ: Hỗ trợ hàm không đồng bộ chạy trong vòng lặp sự kiện hiện có, giới thiệu bộ thực thi luồng | Đặt nền tảng cho việc tích hợp Atropos, giải quyết vấn đề chặn vòng lặp chính của công cụ không đồng bộ |
| [#55](https://github.com/NousResearch/hermes-agent/pull/55) | bierlingm | Bắt ngoại lệ SystemExit trong giai đoạn dọn dẹp Ctrl+C | Loại bỏ tiếng ồn traceback khi tắt máy, cải thiện trải nghiệm người dùng đầu cuối |
| [#12328](https://github.com/NousResearch/hermes-agent/pull/12328) | yakovkhalinsky | Sửa lỗi kiểm tra CI: Hợp nhất phân loại trường đơn + điều chỉnh kiểm tra gián đoạn đồng thời + đánh dấu kiểm tra không ổn định là tuần tự | Khôi phục trạng thái màu xanh CI, loại bỏ tắc nghẽn quy trình hợp nhất |
| [#12148](https://github.com/NousResearch/hermes-agent/pull/12148) | mtuwei | Cơ chế chờ giới hạn tốc độ: Bỏ qua các lần thử khôi phục nhà cung cấp chính sau 429 | Giảm các yêu cầu không hợp lệ trong vòng lặp giáng cấp, giảm lãng phí hạn ngạch API |
| [#433](https://github.com/NousResearch/hermes-agent/pull/433) | Farukest | Dọn dẹp cổng đa nền tảng WhatsApp: Linux `fuser` → giải pháp điều chỉnh theo nền tảng | Mở khóa đường dẫn chính cho hỗ trợ gốc Windows |

**Đánh giá tổng thể**: Các PR được hợp nhất hôm nay tập trung vào **tính bền bỉ của cơ sở hạ tầng** (CI, xử lý tín hiệu, đa nền tảng) và **độ mạnh mẽ của hệ sinh thái nhà cung cấp** (giới hạn tốc độ, quản trị nguồn kỹ năng), quét sạch nợ kỹ thuật cho các bản phát hành chức năng lớn hơn.

---

## 4. Điểm nóng cộng đồng

### 🔥 Các Vấn đề được thảo luận sôi nổi nhất

| Vấn đề | Bình luận | 👍 | Yêu cầu cốt lõi |
|:---|:---|:---|:---|
| [#6323](https://github.com/NousResearch/hermes-agent/issues/6323) Thêm mô-đun bộ nhớ ngoài mempalace | 10 | 21 | **Mở rộng kiến trúc bộ nhớ dài hạn**: Cộng đồng mong muốn mạnh mẽ bộ nhớ bền vững vượt ra ngoài cửa sổ ngữ cảnh, hỗ trợ tính liên tục giữa các phiên. Repo đã có (milla-jovovich/mempalace), ý định tích hợp rõ ràng |
| [#7893](https://github.com/NousResearch/hermes-agent/issues/7893) Lỗi xung đột nhiều thông tin xác thực Gemini HTTP 400 | 16 | 0 | **Độ phức tạp của lớp xác thực nhà cung cấp**: Hệ thống khóa kép Vertex AI và AI Studio gây ra xung đột, người dùng khó cấu hình đúng |
| [#2706](https://github.com/NousResearch/hermes-agent/issues/2706) Giới hạn độ dài đầu ra dẫn đến cắt bớt phản hồi | 8 | 0 | **Xử lý ranh giới đầu ra mô hình**: Cơ chế quay lui kích hoạt bởi max_tokens tạo ra sự đứt gãy trải nghiệm người dùng, cần chiến lược luồng/phân trang duyên dáng hơn |
| [#12127](https://github.com/NousResearch/hermes-agent/issues/12127) Hồi quy Google Provider API_KEY_INVALID | 6 | 2 | **Khả năng tương thích nâng cấp phiên bản**: Hành vi không nhất quán của cùng một khóa giữa các phiên bản, chỉ ra một lỗi hồi quy trong tái cấu trúc xác thực |
| [#9782](https://github.com/NousResearch/hermes-agent/issues/9782) Hỗ trợ mô-đun nix-darwin | 6 | 0 | **Mở rộng hệ sinh thái Nix**: Người dùng macOS mong muốn hỗ trợ công dân hạng nhất tương đương với NixOS |

**Phân tích yêu cầu:** Cộng đồng đang chuyển từ "có thể sử dụng" sang "sử dụng tốt" — lưu trữ bộ nhớ bền vững (#6323) đại diện cho **chiều sâu khả năng**, hỗ trợ nix-darwin/Windows (#9782, #12317) đại diện cho **chiều