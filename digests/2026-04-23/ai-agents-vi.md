# OpenClaw Sinh Nhật Nhật Ký 2026-04-23

> Vấn đề: 500 | PR: 500 | Dự án được bao phủ: 13 | Thời gian tạo: 2026-04-23 00:18 UTC

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

# Nhật ký hàng ngày của dự án OpenClaw | 2026-04-23

---

## 1. Tóm tắt hôm nay

OpenClaw hôm nay cho thấy **mức độ hoạt động cao, tình trạng áp lực cao**: 500 Vấn đề và PR được cập nhật trong vòng 24 giờ, với các cuộc thảo luận cộng đồng dày đặc. Sự kiện cốt lõi là **khủng hoảng phụ thuộc do việc phát hành v2026.4.21** — việc thiếu các phụ thuộc runtime được gói kèm như plugin LarkSuite `@larksuiteoapi/node-sdk` đã khiến nhiều người dùng gặp sự cố khi cài đặt/nâng cấp. Nhóm bảo trì đã khẩn cấp ứng phó và đóng nhiều Vấn đề liên quan. Đồng thời, kế hoạch hợp nhất upstream 9-PR, sửa lỗi runtime MCP và tái cấu trúc hệ thống xác thực Codex đang tiếp tục được đẩy mạnh, cho thấy dự án đang mở rộng cả về chiều sâu kỹ thuật và phạm vi sinh thái.

---

## 2. Phát hành phiên bản

### [v2026.4.21](https://github.com/openclaw/openclaw/releases/tag/v2026.4.21) — Đã phát hành

| Danh mục | Nội dung |
|:---|:---|
| **Ngày phát hành** | 2026-04-21 |
| **Thay đổi cốt lõi** | Mặc định nâng cấp chức năng tạo ảnh OpenAI lên `gpt-image-2`; siêu dữ liệu tài liệu và công cụ mới bổ sung gợi ý kích thước 2K/4K |
| **Các mục sửa lỗi** | Plugins/doctor: Sửa lỗi phụ thuộc runtime plugin được gói kèm |
| **⚠️ Vấn đề đã biết** | **Lỗi nghiêm trọng đã được giới thiệu trong phiên bản này**: Phụ thuộc runtime của các plugin được gói kèm như LarkSuite (Feishu), WhatsApp, Telegram chưa được đóng gói đúng cách, dẫn đến Gateway không khởi động sau `npm install -g` hoặc `openclaw doctor --fix` thất bại (xem chi tiết tại [#70198](https://github.com/openclaw/openclaw/issues/70198), [#70025](https://github.com/openclaw/openclaw/issues/70025), [#70292](https://github.com/openclaw/openclaw/issues/70292)) |

**Lưu ý di chuyển**: Người dùng nâng cấp từ 2026.4.15 nếu gặp lỗi `Cannot find module '@larksuiteoapi/node-sdk'` hoặc `grammy` cần thực hiện `npm rebuild` thủ công hoặc đợi bản vá 2026.4.22. Một số người dùng báo cáo rằng sau khi `doctor --fix` thất bại, `openclaw.json` của họ bị ghi đè thành cấu hình tối thiểu không hợp lệ. **Khuyến cáo sao lưu cấu hình trước khi nâng cấp**.

---

## 3. Tiến độ dự án

### Các PR quan trọng được hợp nhất/đóng hôm nay

| PR | Tác giả | Đóng góp cốt lõi | Trạng thái |
|:---|:---|:---|:---|
| [#70329](https://github.com/openclaw/openclaw/pull/70329) | PratikRai0101 | Khóa tỷ lệ bao phủ thư mục Pi, sửa lỗi runtime `model_not_found` cho các mô hình như `opencode-go/kimi-k2.6` | ✅ Đã hợp nhất |
| [#70340](https://github.com/openclaw/openclaw/pull/70340) | Lucenx9 | Tối ưu hóa quy trình phê duyệt quyền Codex: cung cấp bản tóm tắt rõ ràng cho các yêu cầu quyền `/network`/`/fileSystem`, thay thế nhãn phê duyệt tệp chung | ✅ Đã hợp nhất |
| [#69976](https://github.com/openclaw/openclaw/pull/69976) | chen-zhang-cs-code | Bỏ qua thay đổi mô tả công cụ trong dấu vân tay luồng Codex, ngăn chặn lỗi binding luồng do thay đổi văn bản trợ giúp của công cụ cục bộ trong thời gian chạy | ✅ Đã hợp nhất |
| [#70313](https://github.com/openclaw/openclaw/pull/70313) | vincentkoc | Bổ sung các hook `before_prompt_build`, `before_compaction`, `after_compaction` cho Codex app-server, đảm bảo tính nhất quán của hành vi giữa PI và engine Codex | ✅ Đã hợp nhất |
| [#70090](https://github.com/openclaw/openclaw/pull/70090) | pashpashpash | Điều chỉnh thử nghiệm chính sách mặc định của Codex app-server: giữ nguyên `workspace-write` + `approvalPolicy: "on-request"`, thay thế mặc định chuỗi hoàn toàn | ✅ Đã hợp nhất |
| [#70390](https://github.com/openclaw/openclaw/pull/70390) | pashpashpash | **Thay đổi kiến trúc quan trọng**: Loại bỏ đường dẫn tiện lợi để nhập thông tin xác thực từ Codex CLI trong quá trình khởi tạo, giải quyết vấn đề lộn xộn về quyền sở hữu tài liệu OAuth | 🔄 Mở/Chờ hợp nhất |

**Cột mốc kỹ thuật**: Các PR liên quan đến Codex được triển khai dày đặc hôm nay, đánh dấu sự tích hợp của OpenClaw với OpenAI Codex đã chuyển từ "khả năng sử dụng chức năng" sang "hành vi nhất quán, an toàn và có thể kiểm soát". Đồng thời, **kế hoạch hợp nhất upstream 9-PR** được khởi động trong [#70101](https://github.com/openclaw/openclaw/issues/70101) sẽ thay thế PR khổng lồ trước đó với 38k dòng code, 734 commit, sử dụng chiến lược hợp nhất từng giai đoạn để giảm thiểu rủi ro.

---

## 4. Điểm nóng cộng đồng

### Các Vấn đề được thảo luận sôi nổi nhất

| Vấn đề | Bình luận | 👍 | Yêu cầu cốt lõi |
|:---|:---:|:---:|:---|
| [#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) | 91 | 71 | **Khoảng trống ứng dụng desktop đa nền tảng**: Đã có ứng dụng cho macOS/iOS/Android, người dùng Linux/Windows rất yêu cầu các ứng dụng khách gốc có chức năng tương đương, gây cản trở cho các tình huống triển khai doanh nghiệp |
| [#38902 HTTP 422: check open ai req parameter error](https://github.com/openclaw/openclaw/issues/38902) | 22 | 0 | **Khả năng tương thích với mô hình trong nước**: Lỗi xác thực tham số sau khi triển khai CentOS7 + DeepSeek-R1-Distill-Qwen-32B, phản ánh tài liệu điều chỉnh mô hình cục bộ chưa đủ |
| [#7200 Real-time Voice Conversation Support](https://github.com/openclaw/openclaw/issues/7200) | 21 | 23 | **Tương tác giọng nói thời gian thực**: Người dùng mong muốn hỗ trợ gốc cho âm thanh hai chiều dạng luồng (Twilio/WebRTC), vượt qua chế độ tin nhắn thoại ghi âm trước hiện tại |
| [#58814 Dashboard 500 Internal Server Error](https://github.com/openclaw/openclaw/issues/58814) | 19 | 5 | **Độ ổn định của Dashboard**: Bảng quản lý bị lỗi sau khi nâng cấp lên v2026.3.31, đã đóng nhưng phản ánh vấn đề quản lý chất lượng phiên bản |
| [#67936 Matrix channel cannot start](https://github.com/openclaw/openclaw/issues/67936) | 14 | 0 | **Vấn đề hồi quy**: Kênh Matrix không thể khởi động sau khi nâng cấp ngày 2026.04.15 do không tìm thấy gói `openclaw` |

**Phân tích yêu cầu**: Mâu thuẫn cốt lõi của cộng đồng là **"Phạm vi bao phủ nền tảng rộng" so với "Độ ổn định của một phiên bản sâu"**. Ứng dụng đa nền tảng (#75) là nhu cầu được bỏ phiếu cao nhất trong thời gian dài, nhưng các phiên bản gần đây liên tục gặp lỗi hồi quy về phụ thuộc, làm giảm lòng tin của người dùng. Giao diện giọng nói thời gian thực (#7200) đại diện cho hướng nâng cấp mô hình tương tác của trợ lý AI, có thể trở thành trọng tâm của lộ trình quý tới.

---

## 5. Lỗi và độ ổn định

### Sắp xếp theo mức độ nghiêm trọng

| Ưu tiên | Vấn đề | Mô tả | Trạng thái | PR Sửa lỗi |
|:---|:---|:---|:---|:---|
| 🔴 **P0-Chặn** | [#70198](https://github.com/openclaw/openclaw/issues/70198) | Thiếu phụ thuộc cho các plugin Feishu/Nostr trong cài đặt toàn cầu v2026.4.21 | ✅ Đã đóng | Đã sửa |
| 🔴 **P0-Chặn** | [#70292](https://github.com/openclaw/openclaw/issues/70292) | Cài đặt thất bại trên Ubuntu 24.04: Thiếu module `@larksuiteoapi/node-sdk` | ✅ Đã đóng | Đã sửa |
| 🔴 **P0-Chặn** | [#70025](https://github.com/openclaw/openclaw/issues/70025) | Gateway không khởi động sau khi nâng cấp plugin Feishu (báo cáo của người dùng Trung Quốc) | ✅ Đã đóng | Đã sửa |
| 🔴 **P0-Chặn** | [#70346](https://github.com/openclaw/openclaw/issues/70346) | Trình hướng dẫn cài đặt mới trên Windows gặp sự cố, ngay cả khi người dùng chưa bao giờ bật Feishu | ✅ Đã đóng | Đã sửa |
| 🔴 **P0-Chặn** | [#70096](https://github.com/openclaw/openclaw/issues/70096) | `doctor --fix` ghi đè `openclaw.json` thành cấu hình tối thiểu không hợp lệ sau khi thất bại | ✅ Đã đóng | Giảm nhẹ một phần |
| 🟡 **P1-Nghiêm trọng** | [#67936](https://github.com/openclaw/openclaw/issues/67936) | Kênh Matrix không thể khởi động sau ngày 2026.04.15 | 🔄 Mở | Chờ xác minh |
| 🟡 **P1-Nghiêm trọng** | [#68735](https://github.com/openclaw/openclaw/issues/68735) | Yêu cầu LLM thất bại: nhà cung cấp từ chối lược đồ yêu cầu hoặc tải trọng công cụ (lỗi hồi quy GPT-5-mini) | 🔄 Mở | Chờ chẩn đoán |
| 🟡 **P1-Nghiêm trọng** | [#68056](https://github.com/openclaw/openclaw/issues/68056) | WhatsApp gửi hai lần cho một phản hồi phương tiện | ✅ Đã đóng | Đã sửa |
| 🟡 **P1-Nghiêm trọng** | [#68113](https://github.com/openclaw/openclaw/issues/68113) | Lệnh Mattermost slash trả về 503 "chưa được khởi tạo" | 🔄 Mở | Chờ chẩn đoán |
| 🟢 **P2-Thông thường** | [#65722](https://github.com/openclaw/openclaw/issues/65722) | `wiki bridge import` luôn trả về 0 artifact, CLI chưa khởi tạo memory-core | 🔄 Mở | Chờ PR |

**Đánh giá độ ổn định**: Quy trình đóng gói phụ thuộc được gói kèm trong v2026.4.21 có lỗi hệ thống, ảnh hưởng đến nhiều kênh như Feishu, WhatsApp, Telegram, Nostr. Nhóm bảo trì đã đóng 5+ Vấn đề liên quan trong vòng 24 giờ, tốc độ phản hồi đạt yêu cầu, nhưng **nguyên nhân gốc rễ nằm ở phạm vi kiểm tra thử nghiệm khói của quy trình đóng gói phụ thuộc CI/CD chưa đủ**, cần thiết lập kiểm tra khói cài đặt plugin kênh.

---

## 6. Yêu cầu chức năng và tín hiệu lộ trình

| Vấn đề/PR | Loại | Khả năng được đưa vào | Cơ sở phán đoán |
|:---|:---|:---|:---|
| [#7200 Real-time Voice Conversation](https://github.com/openclaw/openclaw/issues/7200) | Cuộc gọi thoại thời gian thực | ⭐⭐⭐ Cao | 23 👍, PR [#10356](https://github.com/openclaw/openclaw/pull/10356) đã chuẩn bị sẵn nhà cung cấp Typecast |
| [#75 Linux/Windows Ứng dụng desktop](https://github.com/openclaw/openclaw/issues/75) | Khách hàng đa nền tảng | ⭐⭐⭐ Cao | 71 👍 là yêu cầu cao nhất của toàn bộ dự án, nhu cầu thiết yếu cho triển khai doanh nghiệp |
| [#70036 Zero-Lag Global Rule Sync](https://github.com/openclaw/openclaw/issues/70036) | Đồng bộ quy tắc toàn cầu tức thời | ⭐⭐☆ Trung bình | Nhu cầu quản trị cấp doanh nghiệp, giải pháp kỹ thuật cụ thể (tiêm userContent) |
| [#63829 Per-agent memory-wiki vault](https://github.com/openclaw/openclaw/issues/63829) | Kho kiến thức cô lập đa tác nhân | ⭐⭐☆ Trung bình | 3 👍, phù hợp với hướng kiến trúc đa tác nhân |
| [#68596 Configurable streaming watchdog timeout](https://github.com/openclaw/openclaw/issues/68596) | Cấu hình giới hạn thời gian chờ luồng | ⭐⭐☆ Trung bình | Nhu cầu cấp thiết cho các mô hình suy nghĩ dài như kimi-k2.5/DeepSeek-R1, phạm vi thay đổi nhỏ |
| [#39206 before_llm_call + after_llm_call hooks](https://github.com/openclaw/openclaw/pull/39206) | Hooks chặn lệnh gọi LLM | ⭐⭐⭐ Cao | PR cỡ XL, được Claude chú thích là "sự giám sát của nhà phát triển con người", quan trọng về an toàn |
| [#64046 敏感数据脱敏](https://github.com/openclaw/openclaw/issues/64046) | An ninh tuân thủ | ⭐⭐☆ Trung bình | Được người dùng doanh nghiệp Trung Quốc đề xuất, liên quan đến ba lớp: cấu hình, nhật ký và giao diện người dùng |

---

## 7. Tóm tắt phản hồi người dùng

### Điểm đau thực tế

> *"Sau khi nâng cấp lên 2026.4.21, openclaw update không hoàn thành bình thường, gây ra tai nạn khiến phiên bản cục bộ không sử dụng được"*
> — [#70096](https://github.com/openclaw/openclaw/issues/70096) ZemonVunter

> *"Cài đặt mới trên Windows, chưa bao giờ bật Feishu, nhưng trình hướng dẫn lại gặp sự cố với phụ thuộc Feishu"*
> — [#70346](https://github.com/openclaw/openclaw/issues/70346) loong-Lcl

> *"streaming watchdog: no stream updates for 30s; resetting status. Backend có thể đã âm thầm loại bỏ quy trình này"*
> — [#68596](https://github.com/openclaw/openclaw/issues/68596) Yaemikoreal (người dùng mô hình suy nghĩ dài)

### Kịch bản sử dụng

- **Triển khai đa kênh doanh nghiệp**: Người dùng đồng thời cấu hình Discord, WhatsApp, Feishu, Matrix, lỗi phụ thuộc của bất kỳ kênh nào cũng có thể chặn khởi động toàn cục.
- **Điều chỉnh mô hình trong nước**: Nhu cầu triển khai cục bộ các dòng Qwen/DeepSeek rất cao, nhưng tài liệu ánh xạ tham số lớp tương thích OpenAI còn thiếu.
- **Chạy trên thiết bị biên**: Người dùng Raspberry Pi 5 báo cáo rằng agent bootstrap bị treo trong 60 giây + 140% CPU ([#70214](https://github.com/openclaw/openclaw/issues/70214))

### Tín hiệu hài lòng

- ✅ Tối ưu hóa độ sâu tích hợp Codex được công nhận (nhiều PR tập trung vào tính nhất quán hành vi)
- ✅ Tốc độ phản hồi của cộng đồng nhanh (đóng nhiều vấn đề phụ thuộc trong vòng 24 giờ)
- ❌ **Biến động chất lượng phiên bản**: Hai phiên bản liên tiếp (4.15, 4.21) gặp lỗi hồi quy, niềm tin nâng cấp của người dùng giảm sút

---

## 8. Tồn đọng cần xử lý

### Các vấn đề quan trọng chưa được phản hồi trong thời gian dài

| Vấn đề/PR | Ngày tạo | Cập nhật cuối cùng | Rủi ro | Lời nhắc |
|:---|:---|:---|:---|:---|
| [#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) | 2026-01-01 | 2026-04-22 | 🔴 **Yêu cầu chức năng được bỏ phiếu cao nhất bị đình trệ gần 4 tháng** | Khuyến nghị người bảo trì công bố lựa chọn công nghệ và lịch trình cho ứng dụng desktop |
| [#27996 Cron scheduler nextRunAtMs không tính toán lại](https://github.com/openclaw/openclaw/issues/27996) | 2026-02-26 | 2026-04-22 | 🟡 Được gắn nhãn lỗi thời nhưng vẫn hoạt động | Lỗi logic lập lịch cốt lõi, ảnh hưởng đến độ tin cậy của tác vụ hẹn giờ |
| [#29552 Version mismatch](https://github.com/openclaw/openclaw/issues/29552) | 2026-02-28 | 2026-04-22 | 🟡 Tồn tại liên tục từ 2026.2.25 | Cơ chế đồng bộ hóa phiên bản toàn cầu cần được tái cấu trúc |
| [#31331 Docker + Sandbox workspaceAccess thất bại](https://github.com/openclaw/openclaw/issues/31331) | 2026-03-02 | 2026-04-22 | 🟡 Kịch bản triển khai Docker cốt lõi | Lỗi thiết kế ánh xạ đường dẫn bên trong và bên ngoài vùng chứa |
| [#39206 before_llm_call + after_llm_call hooks](https://github.com/openclaw/openclaw/pull/39206) | 2026-03-07 | 2026-04-22 | 🟡 PR liên quan đến an toàn cỡ XL bị đình trệ | Khuyến nghị ưu tiên xem xét bảo mật |

---

**Ghi chú tạo báo cáo hàng ngày**: Dựa trên dữ liệu công khai của GitHub, các liên kết Issue/PR là các đường dẫn thực tế dưới `https://github.com/openclaw/openclaw`. Số lượng nhận xét của một số PR hiển thị là `undefined` là đặc điểm của dữ liệu gốc, đã được trình bày trung thực.

---

## So sánh hệ sinh thái ngang

# Phân tích so sánh ngang hệ sinh thái trợ lý AI cá nhân/ tác nhân tự hành nguồn mở | 2026-04-23

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái nguồn mở trợ lý AI cá nhân đang trải qua **bước nhảy vọt tập thể từ "khả dụng chức năng" sang "sẵn sàng sản xuất"**, nhưng sự phân hóa chất lượng là đáng kể: các dự án hàng đầu (OpenClaw, Moltis) đang thúc đẩy việc làm sâu sắc kiến trúc với thông lượng trung bình 50+ PR/Issue mỗi ngày, trong khi các dự án cuối chuỗi (TinyClaw) đã rơi vào tình trạng đình trệ. Mâu thuẫn cốt lõi tập trung vào sự căng thẳng ba chiều giữa **mảnh vụn điều phối đa mô hình** (tranh cãi về việc giữ hay bỏ LiteLLM), **nợ ổn định cấp doanh nghiệp** (khủng hoảng niềm tin hệ thống cấu hình, quản lý tiến trình gateway) và **nâng cấp mô hình tương tác** (giọng nói thời gian thực, đầu vào đa phương thức). Điều đáng chú ý là **khả năng tương thích nền tảng của Trung Quốc** (WeChat, Enterprise WeChat, Feishu, DingTalk) đã chuyển từ điểm bán hàng khác biệt thành ngưỡng chất lượng, độ sâu của khả năng tương thích trực tiếp quyết định ý định áp dụng của doanh nghiệp.

---

## 2. So sánh mức độ hoạt động của từng dự án

| Dự án | Vấn đề hôm nay | PR hôm nay | Phát hành phiên bản | Đánh giá sức khỏe | Tín hiệu quan trọng |
|:---|:---:|:---:|:---|:---|:---|
| **OpenClaw** | 500 | 500 | v2026.4.21 (hồi quy nghiêm trọng) | ⚠️ **Hoạt động cao/Áp lực cao** | Khủng hoảng phụ thuộc được ứng phó khẩn cấp trong 24 giờ, nhưng lỗi hồi quy phiên bản liên tục ăn mòn niềm tin |
| **NanoBot** | 26 (Tỷ lệ đóng 58%) | 41 (Tỷ lệ hợp nhất 59%) | Không | ✅ **Lưu thông lành mạnh** | Cơn đau tương thích do việc loại bỏ LiteLLM, nỗ lực xây dựng khả năng quan sát tích cực |
| **Hermes Agent** | 50 | 50 | Không | ⚠️ **Hoạt động cao/Hàng đợi tồn đọng** | 35 PR chờ hợp nhất, tính dễ bị tổn thương hệ thống của hệ thống quản lý PID gateway |
| **PicoClaw** | 9 | 19 (hợp nhất 11) | **v0.2.7** + nightly | ✅ **Lặp lại nhanh chóng** | Giai đoạn đánh bóng trải nghiệm, rõ ràng hóa ngữ nghĩa cấu hình, thúc đẩy tính nhất quán đa kênh |
| **NanoClaw** | 3 (tiếng ồn quảng bá) | 27 (hợp nhất 19) | Không | ⚠️ **Kỹ thuật mạnh mẽ/Ưu tiên quản trị** | Tái cấu trúc kiến trúc v2 38k LOC được hợp nhất, vận hành cộng đồng cần sửa sai |
| **NullClaw** | 5 (Tăng trưởng ròng bằng không) | 1 chờ hợp nhất | Không | ✅ **Thanh toán ổn định** | Trả nợ Matrix tập trung, tối ưu hóa hiệu suất thiết bị biên đang chờ giải quyết |
| **IronClaw** | 29 | 50 (39 chờ hợp nhất) | Không (lỗi trình cài đặt v0.26.0) | ⚠️ **Lặp lại mạnh mẽ/Kiểm tra chịu áp lực** | 4 lần Live Canary cùng commit thất bại, đồng bộ hóa trạng thái trở thành vấn đề cấp Epic |
| **LobsterAI** | 1 (Không phản hồi) | 19 (hợp nhất 19) | Không | ⚠️ **Thông lượng cao/Phản hồi thấp** | PR nội bộ nhanh chóng, chức năng cốt lõi của Vấn đề #1796 của cộng đồng không có bình luận |
| **Moltis** | 6 (Đóng ròng 4) | 25 (hợp nhất 10) | **20260422.01** | ✅ **Thanh toán xuất sắc** | Thời gian sửa lỗi trung bình 2.3 ngày, các cụm chủ đề bảo mật - kiểm toán - khả năng xác minh rõ ràng |
| **CoPaw/QwenPaw** | 40 (Đóng 17) | 49 (hợp nhất 27) | **v1.1.3** | ⚠️ **Hoạt động cao/Tỷ lệ giải quyết trung bình** | 2 P0 giả chết MCP không có PR sửa lỗi, khủng hoảng niềm tin quản lý phiên bản chưa được giải quyết |
| **ZeptoClaw** | 0 | 16 (hợp nhất 8) | Không | ✅ **Giai đoạn chạy nước rút chức năng** | Chùm kiểm toán bảo mật hàng ngày của `manelsen` 6 PR, quy mô cộng đồng còn nhỏ |
| **ZeroClaw** | 39 | 39 (hợp nhất 8) | Không | ⚠️ **Hoạt động cao/Nợ S1 tích lũy** | Sửa lỗi ACP/cấu hình nhanh chóng, nhưng 10 lỗi S1 đang mở |
| **TinyClaw** | 0 | 0 | Không | ❌ **Đình trệ** | 24 giờ không hoạt động |

---

## 3. Định vị của OpenClaw trong hệ sinh thái

| Chiều | Hiệu suất OpenClaw | So sánh hệ sinh thái |
|:---|:---|:---|
| **Quy mô cộng đồng** | Dẫn đầu tuyệt đối: 500 Issues/PR hoạt động hàng ngày, yêu cầu chức năng được bỏ phiếu cao nhất 71 👍 | NanoBot (26/41), Hermes (50/50) đều có khoảng cách về quy mô; IronClaw (29/50) gần bằng nhưng hàng đợi PR lành mạnh hơn |
| **Chiều sâu kỹ thuật** | Tích hợp Codex từ "khả dụng" đến "nhất quán hành vi": dấu vân tay luồng, phê duyệt quyền, căn chỉnh hook | Phân tách khả năng Engine V2 và khám phá công cụ của IronClaw cấp tiến hơn; Hệ thống làm chứng zkperf của Moltis có sự khác biệt hơn |
| **Phạm vi nền tảng** | Ma trận đầy đủ Feishu/WhatsApp/Telegram/Matrix/Discord, nhưng **lỗi hệ thống trong quy trình đóng gói phụ thuộc được gói kèm** | Trải nghiệm hoạt ảnh phản hồi công cụ nhất quán hơn của PicoClaw; Khả năng mở rộng kiến trúc kênh v2 của NanoClaw mạnh mẽ hơn |
| **Văn hóa ổn định** | **Lỗi hồi quy phiên bản liên tục** (4.15 Matrix, 4.21 phụ thuộc Feishu), thiếu kiểm tra khói CI/CD | Thời gian sửa lỗi trung bình 2.3 ngày của Moltis, các vấn đề WSL2/Gemini đã đóng của PicoClaw tạo ra sự tương phản rõ rệt |
| **Lộ trình kiến trúc** | Tăng cường dần dần: PI engine + Codex CLI hai đường, hợp nhất 9-PR theo giai đoạn thay thế PR khổng lồ | Tái cấu trúc v2 của NanoClaw (319 commit/38k LOC) cấp tiến hơn; Mặt phẳng kiểm soát đa người thuê của IronClaw mang tính dự đoán hơn |

**Phán đoán cốt lõi**: OpenClaw là **"tiêu chuẩn về phạm vi"** của hệ sinh thái (chức năng đầy đủ nhất, cộng đồng lớn nhất), nhưng đang đối mặt với áp lực từ cả **"người thách thức về chiều sâu"** (Moltis, IronClaw) và **"người tinh chỉnh trải nghiệm"** (PicoClaw). Lựa chọn lộ trình kỹ thuật của nó **thận trọng và ổn định** — từ chối tái cấu trúc phá hủy, kiểm soát rủi ro bằng cách hợp nhất theo giai đoạn, nhưng cái giá phải trả là nợ hệ thống cấu hình (phân tích cú pháp dấu gạch chéo ngược trực giác) và tính dễ bị tổn thương của quy trình đóng gói tiếp tục tích lũy.

---

## 4. Các hướng kỹ thuật được quan tâm chung

| Hướng kỹ thuật | Dự án liên quan | Yêu cầu cụ thể | Mức độ khẩn cấp |
|:---|:---|:---|:---:|
| **Tương tác thoại/âm thanh thời gian thực** | OpenClaw (#7200, 23 👍), PicoClaw (#2626 PR đã gửi), ZeroClaw (#5942 Giao thức VoiceEvent) | Vượt quá ghi âm, âm thanh hai chiều dạng luồng (Twilio/WebRTC/VAD) | 🔥🔥🔥 |
| **Tích hợp hệ sinh thái giao thức MCP** | PicoClaw (#2535 Lệnh dấu gạch chéo), Moltis (#840 Kỹ năng quản lý máy chủ), CoPaw (#3640/#3642 Sửa lỗi giả chết) | Khám phá và quản lý vòng đời công cụ thống nhất, nhưng nợ ổn định nổi bật | 🔥🔥🔥 |
| **Tích hợp sâu nền tảng Trung Quốc** | OpenClaw (khủng hoảng phụ thuộc Feishu), Hermes (thiếu sót ba phần của Feishu topic/authorization card), PicoClaw (sự cố gateway DingTalk), CoPaw (WeChat/DingTalk), LobsterAI (plugin Enterprise WeChat), ZeroClaw (Feishu mention_only) | Từ "khả dụng" đến "dễ sử dụng": phân tách chủ đề, đăng nhập QR, mức độ chi tiết quyền, tin nhắn tiến độ có thể kiểm soát | 🔥🔥🔥 |
| **Xây dựng lại niềm tin hệ thống cấu hình** | OpenClaw (ghi đè cấu hình doctor --fix), NanoClaw (danh sách di chuyển v2), ZeroClaw (mục mồ côi schema v2), CoPaw (lộn xộn phiên bản), NanoBot (lỗi bộ nhớ cache API Key #173, 78 ngày) | Quy tắc phân tích cú pháp minh bạch, di chuyển không gây mất dữ liệu, tải lại nóng đáng tin cậy, nhất quán phiên bản | 🔥🔥🔥 |
| **Điều phối đa mô hình và chống lỗi** | NanoBot (#3376 chuyển đổi lỗi, #2465 định tuyến mã hóa cứng), OpenClaw (model_not_found opencode-go/kimi-k2.6), PicoClaw (#2548 xung đột nhiều chứng chỉ Gemini), ZeroClaw (#5815 bỏ qua llama.cpp) | Tái cấu trúc kiến trúc định tuyến sau khi loại bỏ LiteLLM, điều chỉnh cho các mô hình trong nước (Kimi/DeepSeek/Qwen) | 🔥🔥🔥 |
| **Khả năng quan sát/Tuân thủ kiểm toán** | Moltis (#528 Kiểm toán chuỗi băm), ZeptoClaw (#528 chức năng tương tự), ZeroClaw (#6009 OTel tool spans), NanoBot (#3173 PR OpenTelemetry), IronClaw (hệ thống Live Canary) | Truy vết thực thi công cụ, quy kết chi phí, hooks chặn lệnh gọi LLM | 🔥🔥 |
| **Tối ưu hóa triển khai cục bộ/biên** | PicoClaw (điểm khó khăn biên dịch Pi Zero 2), NullClaw (Pi 5 CPU 100%), OpenClaw (Pi 5 treo 60 giây), LobsterAI (hỗ trợ LM Studio), ZeroClaw (Chế độ ưu tiên cục bộ #5287) | Xây dựng ARM, hiệu quả tài nguyên, khả năng ngoại tuyến, tích hợp mô hình cục bộ | 🔥🔥 |
| **Đồng bộ hóa trạng thái và đồng thời** | IronClaw (#2792 Epic hội tụ trạng thái, #2833 ô nhiễm giữa các phiên), OpenClaw (#70036 đồng bộ quy tắc Zero-Lag), NanoClaw (#2892 đồng bộ hóa nóng tác vụ hẹn giờ) | Đối soát trạng thái chính thức UI/backend, song song nhiều cuộc trò chuyện, tính cô lập phiên | 🔥🔥 |

---

## 5. Phân tích định vị khác biệt

| Dự án | Trọng tâm chức năng cốt lõi | Hồ sơ người dùng mục tiêu | Khác biệt chính về kiến trúc kỹ thuật |
|:---|:---|:---|:---|
| **OpenClaw** | Cổng AI đa kênh + tích hợp sâu Codex | Người triển khai đa kênh doanh nghiệp, nhóm vận hành cần "một phiên bản quản lý tất cả IM" | Đơn thể Node.js, hai engine PI/Codex, runtime plugin được gói kèm |
| **NanoBot** | Điều phối gốc đa nhà cung cấp không có LiteLLM | Kỹ sư cốt lõi theo đuổi chuyển đổi mô hình tự do, người tự xây dựng cơ sở hạ tầng LLM | Python, định tuyến nhà cung cấp rõ ràng, OpenTelemetry gốc |
| **Hermes Agent** | Khả năng mở rộng hệ thống plugin + phạm vi đa nền tảng | Nhà phát triển cá nhân, nhóm nhỏ, coi trọng tùy chỉnh nhanh | Python, tích hợp gốc systemd/launchd, tạo kỹ năng tự động (chất lượng không đồng đều) |
| **PicoClaw** | Triển khai nhẹ + tính nhất quán trải nghiệm đa kênh | Người triển khai IoT/thiết bị biên, doanh nghiệp nhỏ và vừa Trung Quốc | Go, cấu hình nhà cung cấp rõ ràng, chuỗi công cụ MCP yêu cầu thấp |
| **NanoClaw** | Đa người thuê cấp doanh nghiệp của kiến trúc v2 | Người triển khai SaaS, người xây dựng nền tảng cần cô lập người dùng/vai trò/quyền | TypeScript, tách mô hình thực thể mới, ưu tiên container hóa |
| **NullClaw** | Tự lưu trữ nâng cao + linh hoạt mạng | Người dùng Tailscale/Podman, người dùng kỹ thuật ưu tiên quyền riêng tư | Rust, mạng không tin cậy gốc, tối ưu hóa biên ARM |
| **IronClaw** | Phân tách khả năng Engine V2 + mặt phẳng kiểm soát đa người thuê | Người vận hành nền tảng Agent quy mô lớn, doanh nghiệp cần kiểm soát chi phí chi tiết | Rust, hai runtime V1/V2, hệ thống ngân sách (cấp USD) |
| **LobsterAI** | Trải nghiệm gốc trên máy tính để bàn + hệ sinh thái dịch vụ doanh nghiệp Trung Quốc | Người dùng doanh nghiệp Trung Quốc, người dùng cuối cần "sẵn sàng sử dụng ngay" | Electron, hỗ trợ Youdao, tích hợp sâu Enterprise WeChat/DingTalk |
| **Moltis** | Ba trong một: bảo mật - kiểm toán - khả năng xác minh | Ngành nhạy cảm tuân thủ như tài chính/y tế, nhóm bảo mật doanh nghiệp | Rust, hệ thống làm chứng zkperf, chặn SSRF mặc định |
| **CoPaw/QwenPaw** | Hệ sinh thái mô hình của Alibaba + hệ thống sao lưu và khôi phục | Người dùng mô hình Qwen, nhà phát triển cần sự bền vững của trạng thái Agent | Python, máy tính để bàn PyInstaller, các chức năng đặc trưng như nhật ký giấc mơ |
| **ZeptoClaw** | Đường cơ sở bảo mật sản xuất + tiêu chuẩn mã hóa | Người áp dụng doanh nghiệp dựa trên kiểm toán, người ra quyết định cần đánh giá khả năng khách quan | Thép kép Rust+JS, kiểm tra SHA256 kỹ năng, bộ công cụ đo lường hiệu suất |
| **ZeroClaw** | Giao thức ACP + chế độ ưu tiên cục bộ | Người dùng Neovim, người triển khai mô hình cục bộ, người ủng hộ loại bỏ đám mây | Rust, giao thức trình soạn thảo ACP, chế độ phân tích cú pháp nghiêm ngặt |

---

## 6. Phân lớp mức độ phổ biến của cộng đồng và mức độ trưởng thành

```
┌─────────────────────────────────────────────────────────────┐
│  🚀 Giai đoạn lặp lại nhanh chóng (tập trung chức năng/bước nhảy vọt kiến trúc) │
│  • IronClaw: Engine V2 + đa người thuê, Live Canary chịu áp lực │
│  • NanoClaw: Tái cấu trúc v2 vừa hợp nhất, rủi ro lộ ra do quyền container bị trả về │
│  • CoPaw/QwenPaw: Hệ thống sao lưu v1.1.3 ra mắt, MCP giả chết cần giải quyết │
│  • ZeptoClaw: Chạy nước rút cụm kiểm toán bảo mật, quy mô cộng đồng cần mở rộng │
├─────────────────────────────────────────────────────────────┤
│  ✅ Giai đoạn củng cố chất lượng (chế độ thanh toán/đầu tư ổn định) │
│  • Moltis: Thời gian sửa lỗi trung bình 2.3 ngày, tất cả các lỗi ưu tiên cao đã biết được đóng trong ngày        │
│  • PicoClaw: Đánh bóng trải nghiệm v0.2.7, làm rõ ngữ nghĩa cấu hình                   │
│  • NullClaw: Tăng trưởng ròng Vấn đề bằng không, nợ Matrix đã được giải quyết hoàn toàn              │
│  • NanoBot: Tỷ lệ đóng Vấn đề 58%, thúc đẩy xây dựng khả năng quan sát                 │
├─────────────────────────────────────────────────────────────┤
│  ⚠️ Giai đoạn điều chỉnh áp lực cao (hoạt động cao/nợ cao/khắc phục niềm tin) │
│  • OpenClaw: Lỗi hồi quy phiên bản liên tục, quy trình đóng gói CI/CD cần tái cấu trúc hệ thống           │
│  • Hermes: 35 PR chờ hợp nhất, vá nhiều điểm của quản lý PID gateway                  │
│  • ZeroClaw: 10 lỗi S1 đang mở, lỗi hệ thống của lớp cấu hình                 │
│  • LobsterAI: 19 PR hợp nhất/0 phản hồi Vấn đề, khoảng cách kéo nguy hiểm của cộng đồng            │
├─────────────────────────────────────────────────────────────┤
│  ❌ Giai đoạn đình trệ/quan sát                                │
│  • TinyClaw: 24 giờ không hoạt động                                    │
└─────────────────────────────────────────────────────────────┘
```

---

## 7. Tín hiệu xu hướng đáng chú ý

### Tín hiệu 1: **"Loại bỏ LiteLLM" trở thành nỗi đau chung của nhiều dự án**
- **Bằng chứng**: NanoBot #2493 xóa `litellm_provider.py` khiến hệ sinh thái LangChain bị đứt gãy; NanoBot #2465 `RoutingProvider` định tuyến mã hóa cứng thất bại; IronClaw #2823-2829 Canary đa nhà cung cấp thất bại
- **Giá trị**: Việc loại bỏ lớp trừu tượng thống nhất không tự động mang lại sự linh hoạt trong định tuyến, mà còn làm lộ chi phí điều chỉnh mảnh vụn. **Khuyến nghị cho nhà phát triển**: Giữ lại lớp trừu tượng thống nhất tối thiểu trong các đường dẫn cốt lõi, hoặc đầu tư vào ma trận kiểm tra tự động cho việc điều chỉnh nhà cung cấp.

### Tín hiệu 2: **Hệ thống cấu hình chuyển từ "chức năng" thành "cơ sở hạ tầng niềm tin"**
- **Bằng chứng**: doctor --fix của OpenClaw ghi đè cấu hình thành cấu hình tối thiểu không hợp lệ; mục mồ côi schema v2 của ZeroClaw dẫn đến silent 401; danh sách di chuyển v2 của NanoClaw; sự lộn xộn phiên bản PyPI/Release của CoPaw
- **Giá trị**: Lỗi nhỏ trong lớp phân tích cú pháp cấu hình có thể dẫn đến việc không sử dụng được toàn cục và chi phí gỡ lỗi cực kỳ cao cho người dùng. **Khuyến nghị cho nhà phát triển**: Đưa việc kiểm tra di chuyển cấu hình vào các mục CI bắt buộc, thiết lập văn hóa "thay đổi cấu hình = thay đổi có khả năng phá hủy tiềm ẩn".

### Tín hiệu 3: **Khả năng tương thích nền tảng Trung Quốc từ "hạng mục cộng điểm" thành "yêu cầu nhập môn"**
- **Bằng chứng**: Khủng hoảng phụ thuộc Feishu của OpenClaw dẫn đến lỗi cài đặt toàn cục; Hermes Feishu bị thiếu ba phần về chủ đề/thẻ ủy quyền/nhắc nhở kênh; lỗi gateway DingTalk của PicoClaw; CoPaw DingTalk @ chỉ là văn bản thuần túy không có tác dụng
- **Giá trị**: Trong các tình huống triển khai doanh nghiệp, bất kỳ lỗi nào trong khả năng tương thích của nền tảng Trung Quốc đều có thể ngăn chặn quyết định mua hàng. **Khuyến nghị cho nhà phát triển**: Thiết lập môi trường kiểm tra chuyên dụng cho nền tảng Trung Quốc (bao gồm đăng nhập QR, phân tách chủ đề, tin nhắn tiến độ, v.v.), thay vì chỉ xác minh kết nối API.

### Tín hiệu 4: **Thoại thời gian thực chuyển từ "yêu cầu chức năng" sang "cạnh tranh lớp giao thức"**
- **Bằng chứng**: OpenClaw #7200 (23 👍, PR TTS đang chuẩn bị); PicoClaw #2626 (PR âm thanh gốc Gemini 1.5); ZeroClaw #5942 (trait Vad + giao thức VoiceEvent); IronClaw không trực tiếp liên quan nhưng việc tách khả năng Engine V2 để lại điểm mở rộng
- **Giá trị**: Tương tác giọng nói đang chuyển từ tích hợp bề mặt "gọi API TTS/STT" sang **thiết kế giao thức hai chiều dạng luồng** (VAD, gateway song công, phát hiện hoạt động). **Khuyến nghị cho nhà phát triển**: Đầu tư trước vào trừu tượng hóa giao thức của đường ống âm thanh để tránh tái cấu trúc sau này.

### Tín hiệu 5: **Kiểm toán và khả năng xác minh trở thành ngưỡng ngầm cho việc áp dụng của doanh nghiệp**
- **Bằng chứng**: Moltis #528 kiểm toán chuỗi băm; ZeptoClaw chức năng tương tự; ZeroClaw #6009 OTel tool spans; IronClaw #2843 hệ thống ngân sách chi phí
- **Giá trị**: Việc triển khai Agent trong các ngành như tài chính, y tế cần trả lời "công cụ đã làm gì, tốn bao nhiêu, có thể tái hiện không". **Khuyến nghị cho nhà phát triển**: Thiết kế truy vết kiểm toán là tùy chọn mặc định thay vì plugin tùy chọn, quy kết chi phí cần chi tiết đến cấp luồng.

### Tín hiệu 6: **"Chế độ Lập kế hoạch" và neo tác vụ đại diện cho việc nâng cấp kiến trúc nhận thức của Agent**
- **Bằng chứng**: CoPaw #3686 PR Chế độ Lập kế hoạch; NanoBot #3292 Focus Tool cấp phiên; IronClaw #2873 dòng công cụ Nhiệm vụ
- **Giá trị**: Người dùng không hài lòng với "hỏi đáp một lần", cần Agent duy trì ngữ cảnh tác vụ dài hạn và chủ động báo cáo tiến độ. **Khuyến nghị cho nhà phát triển**: Chuyển từ mô hình "phản hồi tin nhắn" sang mô hình "máy trạng thái tác vụ", tích hợp vòng lặp nhận thức lập kế hoạch - thực thi - kiểm tra - điều chỉnh.

---

*Phân tích dựa trên dữ liệu công khai của GitHub vào ngày 2026-04-23, phù hợp cho người ra quyết định kỹ thuật đánh giá sức khỏe dự án, người phát triển tham khảo lựa chọn ngăn xếp công nghệ.*

---

## Báo cáo chi tiết dự án cùng cuộc đua

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Nhật ký hàng ngày của dự án NanoBot | 2026-04-23

## 1. Tóm tắt hôm nay

NanoBot hôm nay duy trì **mức độ hoạt động cao**: 24 giờ qua xử lý 26 Vấn đề (tỷ lệ đóng 58%), xử lý 41 PR (tỷ lệ hợp nhất/đóng 59%), không có phiên bản mới được phát hành. Cộng đồng tập trung vào **sửa lỗi ổn định đa nền tảng** (luồng Discord, nút nội tuyến Telegram, rò rỉ tin nhắn heartbeat) và **tăng cường khả năng quan sát** (truy vết OpenTelemetry). Đáng chú ý, các vấn đề sâu sắc của kiến trúc định tuyến Nhà cung cấp tiếp tục lộ ra - từ mã hóa cứng LiteLLM đến khả năng tương thích của nhà cung cấp OAuth, phản ánh rằng điều phối đa mô hình vẫn là điểm đau cốt lõi. Việc xây dựng cộng đồng WeChat đang hoạt động, nhưng có các Vấn đề quảng bá lặp lại cần được làm sạch.

---

## 2. Phát hành phiên bản

**Không có phiên bản mới được phát hành**

---

## 3. Tiến độ dự án

### Các PR chính đã hợp nhất/đóng

| PR | Tác giả | Đóng góp cốt lõi | Ý nghĩa thúc đẩy dự án |
|:---|:---|:---|:---|
| [#3393](https://github.com/HKUDS/nanobot/pull/3393) | Re-bin | Chuỗi liên kết đầy đủ tệp đính kèm hình ảnh WebUI: bộ chọn composer + đường ống phương tiện có chữ ký + tải lên kéo và thả | **Bổ sung điểm yếu tương tác đa phương tiện** , WebUI lần đầu tiên hỗ trợ vòng lặp đầu vào và đầu ra hình ảnh |
| [#3387](https://github.com/HKUDS/nanobot/pull/3387) | tetratorus | Sửa đổi định dạng khối `image_url` trong kết quả công cụ Anthropic | Sửa lỗi tương thích quan trọng đối với lỗi đầu ra công cụ hình ảnh được xử lý bởi dòng Claude |
| [#3383](https://github.com/HKUDS/nanobot/pull/3383) | saimonventura | `resolve_config_env_vars` giữ lại trường `exclude=True` (ví dụ: `DreamConfig.cron`) | Ngăn chặn dữ liệu bị mất im lặng trong quá trình tuần tự hóa cấu hình, cải thiện độ tin cậy của hệ thống cấu hình |
| [#3317](https://github.com/HKUDS/nanobot/pull/3317) → [#3398](https://github.com/HKUDS/nanobot/pull/3398) | gthieleb | Hỗ trợ nút bàn phím nội tuyến Telegram, định tuyến nhấp chuột tới tin nhắn người dùng | **Nâng cấp mô hình tương tác**, Bot có thể hiển thị các tùy chọn có cấu trúc cho người dùng thay vì chỉ văn bản thuần túy |
| [#3171](https://github.com/HKUDS/nanobot/pull/3171) | saimonventura | Lọc cấp kênh Discord (`allowChannels`) | Khả năng kiểm soát an toàn cho các tình huống triển khai doanh nghiệp |
| [#2037](https://github.com/HKUDS/nanobot/pull/2037) | benlenarts | Sửa lỗi kỹ năng tích hợp không khả dụng khi `restrictToWorkspace=true` | Sửa xung đột cơ bản giữa chế độ an toàn và khả năng chức năng |
| [#2059](https://github.com/HKUDS/nanobot/pull/2059) | KacperLa | Kênh API cục bộ JSON-RPC qua Socket Unix | Cung cấp giải pháp **giao tiếp cục bộ không mất chi phí** cho tích hợp chương trình bên ngoài |

**Đánh giá thúc đẩy tổng thể**: Các hợp nhất hôm nay tập trung vào **nâng cấp trải nghiệm tương tác** (hình ảnh WebUI, nút Telegram) và **củng cố triển khai cấp doanh nghiệp** (quyền Discord, độ tin cậy cấu hình), dự án tiến thêm một bước hướng tới "sẵn sàng sản xuất".

---

## 4. Điểm nóng cộng đồng

### Các Vấn đề được thảo luận sôi nổi nhất

| Xếp hạng | Vấn đề | Bình luận | Yêu cầu cốt lõi | Phân tích sâu |
|:---|:---|:---|:---|:---|
| 🔥1 | [#2892](https://github.com/HKUDS/nanobot/issues/2892) Nghi ngờ thiết kế cơ chế tác vụ hẹn giờ | 10 | Yêu cầu tác nhân tạo tác vụ hẹn giờ động mà không cần khởi động lại Gateway | **Điểm nghẽn ghép nối kiến trúc** : Trong thiết kế tách biệt Agent-Gateway, trạng thái lập lịch tác vụ không đạt được đồng bộ hóa nóng, người dùng mong đợi trải nghiệm đám mây gốc "cấu hình có hiệu lực ngay lập tức" |
| 🔥2 | [#2049](https://github.com/HKUDS/nanobot/issues/2049) Khả năng tạo Kỹ năng đã biến mất | 8 | Công cụ `skill-creator` không khả dụng sau khi nâng cấp | **Thiếu quản lý thay đổi phá hủy** : Sau khi tái cấu trúc, không cung cấp đường dẫn di chuyển, chức năng người dùng cũ bị thụt lùi |
| 🔥3 | [#2493](https://github.com/HKUDS/nanobot/issues/2493) Tích hợp LANGSMITH không hoạt động | 6 | Hệ sinh thái LangChain bị đứt gãy sau khi xóa `litellm_provider.py` | **Khủng hoảng tương thích hệ sinh thái Nhà cung cấp** : Việc loại bỏ LiteLLM với tư cách là lớp trừu tượng thống nhất đã dẫn đến sự đứt gãy của chuỗi công cụ Giám sát hạ nguồn |
| 🔥4 | [#2469](https://github.com/HKUDS/nanobot/issues/2469) Lỗi gọi Qwen-3.5 | 6 | Xác thực định dạng JSON `function.arguments` của mô hình mã | Sự khác biệt nhỏ về định dạng giữa DashScope của Alibaba Cloud và OpenAI |
| 🔥5 | [#2235](https://github.com/HKUDS/nanobot/issues/2235) Trả lời trùng lặp Telegram | 6 👍6 | Truyền dữ liệu giả dạng luồng dẫn đến nhấp nháy tin nhắn | **Vấn đề UX có ảnh hưởng cao**, đã nhận được 6 lượt thích cho thấy tính phổ biến |

**Tín hiệu tâm trạng cộng đồng**: Việc "loại bỏ LiteLLM" khỏi kiến trúc Nhà cung cấp đã gây ra hiệu ứng domino (số #2493, #2465, #3360), người dùng buộc phải đối mặt với chi phí điều chỉnh mảnh vụn. Khuyến nghị người bảo trì phát hành hướng dẫn di chuyển Nhà cung cấp.

---

## 5. Lỗi và độ ổn định

| Mức độ nghiêm trọng | Vấn đề/PR | Mô tả | Trạng thái |
|:---|:---|:---|:---|
| 🔴 **Cao** | [#3328](https://github.com/HKUDS/nanobot/issues/3328) | DeepSeek "failed to deserialize" lỗi, Telegram hoàn toàn không hoạt động sau khi nâng cấp từ 0.1.5→0.1.5.post1 | **Chờ sửa lỗi**, không có PR |
| 🔴 **Cao** | [#3390](https://github.com/HKUDS/nanobot/issues/3390) | Lỗi khái quát hóa Gọi Công cụ "Sorry, I encountered an error", giao tiếp LLM hoàn toàn bị gián đoạn sau khi dọn dẹp không gian làm việc | **Chờ sửa lỗi**, không có PR |
| 🟡 **Trung bình** | [#3377](https://github.com/HKUDS/nanobot/issues/3377) | Nhiều Tác nhân con thực hiện tác vụ dẫn đến Tác nhân chính trả lời trùng lặp | ✅ Đã đóng (cùng ngày) |
| 🟡 **Trung bình** | [#3360](https://github.com/HKUDS/nanobot/issues/3360) | GPT-5.x của GitHub Copilot yêu cầu API `/responses` thay vì `/chat/completions` | Người dùng đề xuất bản vá tạm thời, **chờ giải pháp chính thức** |
| 🟡 **Trung bình** | [#2465](https://github.com/HKUDS/nanobot/issues/2465) | `RoutingProvider` mã hóa cứng `LiteLLMProvider`, định tuyến Nhà cung cấp OAuth (OpenAI Codex) thất bại | Vấn đề cấp kiến trúc, **cần tái cấu trúc logic định tuyến** |
| 🟢 **Thấp** | [#2921](https://github.com/HKUDS/nanobot/issues/2921) | Thông báo cấu hình khởi động MS Teams được hiển thị nhưng không được triển khai | ✅ Đã đóng |
| 🟢 **Thấp** | [#2582](https://github.com/HKUDS/nanobot/issues/2582) | Tin nhắn trạng thái không cần thiết của Heartbeat gây nhiễu | Có PR sửa lỗi [#3389](https://github.com/HKUDS/nanobot/pull/3389), [#3391](https://github.com/HKUDS/nanobot/pull/3391) chờ xem xét |

**Đánh giá rủi ro độ ổn định**: Hai lỗi cấp 🔴 (phản giải mã DeepSeek #3328, lỗi khái quát hóa Gọi Công cụ #3390) đều không có PR sửa lỗi và ảnh hưởng đến đường truyền giao tiếp cốt lõi, nên ưu tiên phản hồi.

---

## 6. Yêu cầu chức năng và tín hiệu lộ trình

| Yêu cầu | Vấn đề/PR | Đánh giá khả năng áp dụng | Khả năng được đưa vào |
|:---|:---|:---|:---|
| **Chuyển đổi lỗi tự động Nhà cung cấp/Mô hình** | [#3376](https://github.com/HKUDS/nanobot/issues/3376) | Yêu cầu rõ ràng, xung đột với kiến trúc định tuyến hiện có | ⭐⭐⭐ Cao, nhưng trước tiên cần giải quyết vấn đề mã hóa cứng #2465 |
| **Tỷ lệ nén có thể cấu hình** | [#3270](https://github.com/HKUDS/nanobot/issues/3270) | Chiều sâu kỹ thuật cao, tác giả đề xuất các nguyên tắc kỹ thuật | ⭐⭐⭐ Cao, thay đổi nén gần đây nhiều, nhu cầu cấu hình có thật |
| **Focus Tool cấp Phiên (neo tác vụ)** | [#3292](https://github.com/HKUDS/nanobot/issues/3292) | Khái niệm mới lạ, tương đương với mô hình nhận thức "bảng tác vụ" của con người | ⭐⭐ Trung bình, cần thiết kế kiến trúc, có thể là hạng mục dài hạn cho việc tăng cường nhận thức của Agent |
| **Khả năng quan sát OpenTelemetry** | [#3173](https://github.com/HKUDS/nanobot/pull/3173) | PR đã mở, hỗ trợ Langfuse/LangSmith | ⭐⭐⭐⭐ Cực kỳ cao, tiêu chuẩn đám mây gốc, mã đã sẵn sàng |
| **Hooks thông báo vòng đời Gateway** | [#3373](https://github.com/HKUDS/nanobot/pull/3373) | PR đã mở, điều khiển bằng cấu hình | ⭐⭐⭐⭐ Cao, nhu cầu vận hành thiết yếu |
| **Tải trọng Tin nhắn-Sự kiện Công cụ có cấu trúc** | [#3399](https://github.com/HKUDS/nanobot/pull/3399) | PR mới mở, giải quyết tình trạng dữ liệu nghèo nàn của `on_progress` | ⭐⭐⭐ Cao, phụ thuộc trước vào Giao diện người dùng phong phú |
| **Phân tách Nhà cung cấp Z.AI (đổi thương hiệu Zhipu)** | [#3207](https://github.com/HKUDS/nanobot/pull/3207) | PR đã mở, 4 nhà cung cấp chi tiết + bí danh tương thích ngược | ⭐⭐⭐ Cao, tuân thủ thương hiệu Trung Quốc cấp bách |

**Suy luận lộ trình**: Phiên bản tiếp theo rất có thể sẽ tập trung vào **Khả năng quan sát (#3173)** + **Chống lỗi Nhà cung cấp đa dạng (#3376/#2465)** + **Khả năng tương thích hệ sinh thái mô hình Trung Quốc (#3207 Z.AI, #2469 Qwen)**.

---

## 7. Tóm tắt phản hồi người dùng

### Điểm đau thực tế

| Kịch bản | Nguồn | Cường độ cảm xúc |
|:---|:---|:---|
| **Kỳ vọng "cấu hình có hiệu lực ngay lập tức" bị thất vọng** : Sau khi tạo tác vụ hẹn giờ, Gateway phải khởi động lại, "không phù hợp với thói quen sử dụng" | [#2892](https://github.com/HKUDS/nanobot/issues/2892) | 😤 Cảm giác thất vọng mạnh |
| **Chức năng bị mất ngay sau khi nâng cấp** : Việc tạo Kỹ năng, tích hợp LANGSMITH biến mất lặng lẽ trong vòng lặp phát hành | [#2049](https://github.com/HKUDS/nanobot/issues/2049), [#2493](https://github.com/HKUDS/nanobot/issues/2493) | 😤 Mất niềm tin |
| **Cấu hình Nhà cung cấp đa dạng ≠ tính sẵn sàng cao** : Cấu hình trước nhiều mô hình, nhưng lỗi điểm duy nhất vẫn dẫn đến gián đoạn tác vụ | [#3376](https://github.com/HKUDS/nanobot/issues/3376) | 😔 Kỳ vọng thất vọng |
| **Lỗi bộ nhớ cache API Key** : Sau khi cập nhật tệp cấu hình, khóa cũ vẫn được sử dụng lại, khởi động lại thông thường không có tác dụng | [#173](https://github.com/HKUDS/nanobot/issues/173) | 😵 Ác mộng gỡ lỗi |

### Điểm hài lòng

- **Xây dựng cộng đồng tích cực**: Nhóm giao tiếp WeChat nhanh chóng được thành lập (#3394-3396), hỗ trợ người dùng Trung Quốc được cải thiện
- **Đóng góp của bên thứ ba hoạt động mạnh mẽ**: Nhà phát triển độc lập đóng góp Dashboard (#2213), API Socket Unix (#2059)

### Lời khuyên chính

> "Trigger point should be engineered, not configured" — Suy nghĩ triết học kỹ thuật của tác giả về cấu hình bộ nhớ đệm (#3270), phản ánh kỳ vọng của người dùng cao cấp về "mặc định thông minh tốt hơn vụ nổ cấu hình".

---

## 8. Tồn đọng cần xử lý

| Vấn đề/PR | Ngày tạo | Cập nhật cuối cùng | Mô tả rủi ro |
|:---|:---|:---|:---|
| [#173](https://github.com/HKUDS/nanobot/issues/173) Lỗi bộ nhớ cache API Key | 2026-02-05 | Hôm nay | **78 ngày chưa được giải quyết** , liên quan đến chức năng cốt lõi của hệ thống cấu hình, người dùng đã thử nhiều phương pháp thông thường nhưng đều thất bại, có thể gợi ý bộ nhớ cache cấp tiến trình hoặc vấn đề cô lập chuỗi công cụ uv |
| [#2526](https://github.com/HKUDS/nanobot/pull/2526) Trạng thái phiên bị mất lệnh `/stop` | 2026-03-26 | Hôm nay | **28 ngày mở** , đường dẫn trải nghiệm người dùng cốt lõi (ngắt ngữ cảnh sau khi hủy phản hồi), có PR chờ xem xét |
| [#3173](https://github.com/HKUDS/nanobot/pull/3173) Truy vết OpenTelemetry | 2026-04-15 | Hôm nay | **8 ngày mở** , PR chức năng lớn, thời gian xem xét có thể dài, nhưng người dùng đám mây gốc rất cần |
| [#3207](https://github.com/HKUDS/nanobot/pull/3207) Phân tách Nhà cung cấp Z.AI | 2026-04-16 | Hôm nay | **7 ngày mở** , sự cấp bách về tuân thủ thương hiệu Trung Quốc |

**Đề xuất hành động cho người bảo trì**:
1. **Ưu tiên**: #173 cần người bảo trì cốt lõi tham gia chẩn đoán, các giải pháp tự trợ giúp hiện tại của người dùng đã cạn kiệt
2. **Đẩy nhanh xem xét**: #3173, #3207 có giá trị người dùng rõ ràng và mã đã sẵn sàng
3. **Dọn dẹp**: Các Vấn đề quảng bá WeChat lặp lại #3394-3396, đề nghị giữ một cái, đóng những cái còn lại để tránh nhiễu

---

*Thời gian tạo báo cáo hàng ngày: 2026-04-23 | Nguồn dữ liệu: Hoạt động công khai trên GitHub HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Nhật ký hàng ngày của dự án Hermes Agent | 2026-04-23

---

## 1. Tóm tắt hôm nay

Hermes Agent hôm nay duy trì **mức độ hoạt động cao**, với 50 Vấn đề và 50 PR được cập nhật trong 24 giờ qua, trong đó 44 Vấn đề hoạt động/mới mở, 6 đóng; 35 PR chờ hợp nhất, 15 đã hợp nhất/đóng. Các cuộc thảo luận cộng đồng tập trung vào **độ ổn định của gateway** (PID cũ, tiến trình zombie), **lỗi điều chỉnh nền tảng** (phân tách chủ đề Feishu, truyền dữ liệu dạng luồng WhatsApp) và **ranh giới bảo mật** (công cụ tệp có thể sửa đổi cấu hình mặt phẳng điều khiển) ba chủ đề chính. Đáng chú ý, không có phiên bản mới nào được phát hành hôm nay, nhưng 3 PR cấp P0/P1 về bảo mật và độ ổn định đã vào hàng đợi hợp nhất, cho thấy nhóm bảo trì đang ưu tiên rủi ro môi trường sản xuất.

---

## 2. Phát hành phiên bản

**Không có phiên bản mới được phát hành**

---

## 3. Tiến độ dự án

### Các PR chính đã hợp nhất/đóng

| PR | Tác giả | Thay đổi cốt lõi | Ảnh hưởng |
|:---|:---|:---|:---|
| [#14204](https://github.com/NousResearch/hermes-agent/pull/14204) | j-sperling | `hermes update` sử dụng `npm ci` thay thế `npm install` | Loại bỏ trạng thái kho bẩn do lệch lockfile, cải thiện độ tin cậy của việc cập nhật CLI |
| [#14198](https://github.com/NousResearch/hermes-agent/pull/14198) | teknium1 | Sửa độ dài ngữ cảnh Gemma-4 / `gemma4:*` thành 256K | Sửa lỗi hồi quy sử dụng sai ngữ cảnh 8K, đóng [#12976](https://github.com/NousResearch/hermes-agent/issues/12976) |
| [#14199](https://github.com/NousResearch/hermes-agent/pull/14199) | teknium1 | Nâng cấp agent-browser 0.13→0.26, tích hợp thời gian chờ rảnh rỗi cho tiến trình bảo vệ | Tiến trình con trình duyệt có thể tự chấm dứt, giảm rủi ro rò rỉ bộ nhớ |
| [#247](https://github.com/NousResearch/hermes-agent/pull/247) | Bartok9 | Căn giữa tiêu đề lệnh `/tools` + cắt bớt mô tả dài | Đánh bóng chi tiết giao diện người dùng |
| [#245](https://github.com/NousResearch/hermes-agent/pull/245) | Bartok9 | Thêm cờ `re.DOTALL` vào phát hiện lệnh nguy hiểm | Sửa lỗ hổng bỏ qua kiểm tra bảo mật do ký tự xuống dòng |
| [#6884](https://github.com/NousResearch/hermes-agent/pull/6884) | ViFigueiredo | Hỗ trợ nhà cung cấp TTS/STT naga.ac mới | Mở rộng hệ sinh thái khả năng giọng nói |
| [#14174](https://github.com/NousResearch/hermes-agent/pull/14174) salvage | — | — | Xem #14198, #14199 |

**Đánh giá thúc đẩy tổng thể**: Các hợp nhất hôm nay chủ yếu tập trung vào **sửa lỗi ổn định** và **nâng cấp cơ sở hạ tầng**, không có bản phát hành chức năng lớn. Nâng cấp agent-browser và sửa lỗi ngữ cảnh Gemma-4 đã loại bỏ hai rủi ro sản xuất đã biết, nhưng 35 PR chờ hợp nhất cho thấy áp lực hàng đợi khá lớn.

---

## 4. Điểm nóng cộng đồng

### Các Vấn đề được thảo luận sôi nổi nhất

| Xếp hạng | Vấn đề | Bình luận | Yêu cầu cốt lõi | Liên kết |
|:---|:---|:---|:---|:---|
| 1 | Lỗi API CopilotConnectionError (MacBook M5 + Python 3.9.6) | **9 mục** | Sau khi cấu hình, trò chuyện báo lỗi, nghi ngờ vấn đề tương thích phiên bản mạng/SSL/TLS hoặc Python | [#10980](https://github.com/NousResearch/hermes-agent/issues/10980) |
| 2 | Phản hồi Codex trống bị gắn nhãn sai là chưa hoàn chỉnh và thử lại 3 lần | **7 mục** | Khi người dùng rõ ràng yêu cầu "không trả lời", Hermes vẫn buộc phải thử lại và đưa ra cảnh báo, phá vỡ cam kết im lặng | [#3956](https://github.com/NousResearch/hermes-agent/issues/3956) |
| 3 | Tin nhắn tiến độ chủ đề Feishu tạo chủ đề mới thay vì ở lại chủ đề ban đầu | **6 mục** | Trong kịch bản hợp tác doanh nghiệp, ngữ cảnh tin nhắn bị gián đoạn, ảnh hưởng đến quy trình làm việc liên tục của nhóm | [#6969](https://github.com/NousResearch/hermes-agent/issues/6969) |
| 4 | Hai vấn đề plugin Feishu (lỗi nút thẻ ủy quyền + phản hồi chủ đề mất kiểm soát) | **6 mục** | Khả năng tương thích của hệ sinh thái WeChat doanh nghiệp chưa đủ trưởng thành, người dùng cần hành vi có thể kiểm soát "chỉ trả lời trong chủ đề hiện tại" | [#7734](https://github.com/NousResearch/hermes-agent/issues/7734) |

**Phân tích yêu cầu**: Vấn đề kết nối Copilot đã tồn tại 7 ngày chưa được giải quyết, liên quan đến sự kết hợp Apple Silicon + phiên bản Python cũ, cộng đồng cần hướng dẫn chẩn đoán rõ ràng hơn; Hai vấn đề Feishu phản ánh **khả năng tương thích nền tảng doanh nghiệp Trung Quốc** là chìa khóa cạnh tranh khác biệt, nhưng chất lượng thực hiện hiện tại kém hơn Discord/Slack; Vấn đề cam kết im lặng của Codex chạm đến **triết lý thiết kế ranh giới hành vi của Agent** - Khi nào nên tôn trọng chỉ dẫn "không hành động" của người dùng.

---

## 5. Lỗi và độ ổn định

### Sắp xếp theo mức độ nghiêm trọng

| Mức độ nghiêm trọng | Vấn đề | Mô tả | Trạng thái PR Sửa lỗi |
|:---|:---|:---|:---|
| **P0** | [#14072](https://github.com/NousResearch/hermes-agent/issues/14072) | `write_file`/`patch` có thể sửa đổi các tệp mặt phẳng điều khiển như `~/.hermes/auth.json`, `config.yaml`, v.v., rủi ro trốn thoát sandbox | **Không có PR**, mới tạo hôm nay |
| **P1** | [#13655](https://github.com/NousResearch/hermes-agent/issues/13655) | `gateway.pid` cũ khiến gateway gặp sự cố và rơi vào vòng lặp khởi động lại vô tận, cần can thiệp thủ công | [#14203](https://github.com/NousResearch/hermes-agent/issues/14203) Đã đóng, nhưng [#14176](https://github.com/NousResearch/hermes-agent/issues/14176) báo cáo vấn đề treo tương tự vẫn còn |
| **P1** | [#12875](https://github.com/NousResearch/hermes-agent/issues/12875) | `/restart` tạo tiến trình zombie trong systemd, `_stop_impl` hủy tác vụ nền dẫn đến không đạt `SystemExit(75)` | **Không có PR**, liên quan #11258, #12438 |
| **P1** | [#12925](https://github.com/NousResearch/hermes-agent/issues/12925) | Lỗi truyền dữ liệu dạng luồng WhatsApp: `edit_message()` từ chối đối số `finalize`, lỗi hồi quy v0.10.0