# OpenClaw Sinh nhật 2026-04-11

> Vấn đề: 500 | PR: 500 | Dự án được đề cập: 12 | Thời gian tạo: 2026-04-11 01:50 UTC

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

---

## Báo cáo chuyên sâu về dự án OpenClaw

 # Nhật ký hoạt động dự án OpenClaw | 2026-04-11

---

## 1. Tổng quan hôm nay

Dự án OpenClaw hôm nay duy trì **hoạt động cực kỳ tích cực**, với **500 cập nhật Issue** (406 mới/hoạt động, 94 đóng) và **500 cập nhật PR** (301 chờ gộp, 199 đã gộp/đóng) trong 24 giờ qua, không có bản phát hành mới nào. Tâm điểm cộng đồng tập trung vào **xác minh danh tính tác nhân** (đề xuất cấp RFC), **hỗ trợ thời gian chạy mô hình GPT-5.4/Codex**, và **sửa lỗi ổn định kênh như WhatsApp/Matrix**. Dự án đang trong giai đoạn lặp lại dày đặc, với việc mở rộng tính năng và sửa lỗi song song. Tuy nhiên, số lượng Issue tồn đọng đáng kể, đòi hỏi người bảo trì cần chú ý đến các vấn đề tồn đọng lâu dài.

---

## 2. Phát hành phiên bản

**Không có phiên bản mới nào được phát hành**

---

## 3. Tiến độ dự án

### Các PR quan trọng đã được gộp/đóng hôm nay

| PR | Tác giả | Đóng góp cốt lõi | Trạng thái |
|:---|:---|:---|:---|
| [#50575](https://github.com/openclaw/openclaw/pull/50575) | claudiomolt | **Tái cấu trúc gửi tin nhắn CLI**: `openclaw message send` giờ đây ủy quyền qua Gateway RPC, khắc phục lỗi do thiếu trình lắng nghe WhatsApp Web | ✅ Đã gộp |
| [#48137](https://github.com/openclaw/openclaw/pull/48137) | wotterfree | **Độ ổn định WhatsApp Web**: Thêm kiểm tra hoạt động của trình lắng nghe, tự động dọn dẹp kết nối chết, giải quyết vấn đề trạng thái "kết nối giả" | ✅ Đã gộp |
| [#53432](https://github.com/openclaw/openclaw/pull/53432) | sudie-codes | **Hoàn thiện tính năng MS Teams**: Thêm tính năng ghim/bỏ ghim tin nhắn, đánh dấu đã đọc, phản ứng bằng biểu tượng cảm xúc, đạt được sự tương đương với các kênh Slack/Discord | ✅ Đã gộp |
| [#64572](https://github.com/openclaw/openclaw/pull/64572) | jalehman | **Sửa lỗi định tuyến chủ đề Telegram**: Sự kiện hoàn thành exec nền bảo toàn ngữ cảnh phân phối ban đầu, đảm bảo phản hồi chủ đề diễn đàn không bị lệch (sau đó được thay thế bởi #64580) | ✅ Đã đóng |
| [#64569](https://github.com/openclaw/openclaw/pull/64569) | EronFan | **Sửa lỗi hook hàng đợi tin nhắn**: Phát sự kiện `message_received` cho tin nhắn đến đang chờ xử lý, bảo toàn siêu dữ liệu tin nhắn gốc | ❌ Đã đóng (r: too-many-prs) |

**Đánh giá tiến độ tổng thể**: Các PR được gộp hôm nay tập trung vào **độ ổn định của kênh** (sức khỏe kết nối WhatsApp Web, hoàn thiện tính năng MS Teams) và **độ tin cậy của việc phân phối tin nhắn** (truyền thông CLI-Gateway, bảo toàn ngữ cảnh định tuyến chủ đề), thuộc giai đoạn củng cố cơ sở hạ tầng, tạo nền tảng cho việc mở rộng tính năng trong tương lai.

---

## 4. Điểm nóng cộng đồng

### Các Issue/PR được thảo luận sôi nổi nhất

| Thứ hạng | Mục | Bình luận | Yêu cầu cốt lõi | Liên kết |
|:---|:---|:---:|:---|:---|
| 🥇 | **RFC: Danh tính Tác nhân Gốc & Xác minh Tin cậy** | 79 | **Hệ thống danh tính tác nhân phi tập trung**: MolTrust đề xuất một khuôn khổ xác minh danh tính tác nhân gốc dựa trên ERC-8004, W3C DID/VC, giải quyết vấn đề xác thực danh tính và kiểm toán khi nhiều tác nhân hợp tác, thuộc loại đề xuất cấp kiến trúc | [#49971](https://github.com/openclaw/openclaw/issues/49971) |
| 🥈 | Hỗ trợ Đàm thoại Giọng nói Thời gian thực | 17 | **Hỗ trợ gọi thoại thời gian thực** như điện thoại hai chiều âm thanh luồng (Twilio/WebRTC), hiện chỉ hỗ trợ tin nhắn thoại ghi âm trước | [#7200](https://github.com/openclaw/openclaw/issues/7200) |
| 🥉 | Đồng bộ kênh Matrix nhưng không nhận được tin nhắn | 16 | **Lỗi hồi quy kênh Matrix**: Kết nối thành công nhưng nhận tin nhắn thất bại, nghi ngờ hồi quy tương tự #54069, người dùng khẩn cấp cần hỗ trợ Matrix ổn định | [#61773](https://github.com/openclaw/openclaw/issues/61773) |
| 4 | Công cụ gpt-5.3-codex không hoạt động | 16 | **Tương thích thời gian chạy mô hình**: Sau bản cập nhật 2026.3.23-2, mô hình Codex hoàn toàn không thực thi công cụ, chặn quy trình làm việc của nhà phát triển | [#53959](https://github.com/openclaw/openclaw/issues/53959) |
| 5 | `memoryFlush` không được kích hoạt đáng tin cậy | 15 | **Độ ổn định quản lý bộ nhớ**: `memoryFlush` được kích hoạt xen kẽ trong chu kỳ nén tự động, ảnh hưởng đến độ ổn định khi chạy lâu dài | [#12590](https://github.com/openclaw/openclaw/issues/12590) |

**Phân tích điểm nóng**: Các yêu cầu cốt lõi của cộng đồng cho thấy **sự phân hóa ba lớp** — cơ sở hạ tầng cấp thấp (tin cậy danh tính, quản lý bộ nhớ), độ ổn định kênh (Matrix, WhatsApp, iMessage), và hỗ trợ mô hình tiên tiến (dòng GPT-5.x). 79 bình luận của RFC #49971 cho thấy sự quan tâm cao của cộng đồng đối với **hợp tác an toàn đa tác nhân**, có thể xác định hướng kiến trúc của OpenClaw trong giai đoạn tiếp theo.

---

## 5. Lỗi và Độ ổn định

### Sắp xếp theo mức độ nghiêm trọng

| Mức độ nghiêm trọng | Vấn đề | Phạm vi ảnh hưởng | Trạng thái | Liên kết |
|:---|:---|:---|:---|:---|
| 🔴 **P0-Hồi quy** | **Thực thi công cụ gpt-5.3-codex hoàn toàn thất bại** | Tất cả người dùng Codex | Mở, không có PR sửa lỗi | [#53959](https://github.com/openclaw/openclaw/issues/53959) |
| 🔴 **P0-Hồi quy** | **Gửi phương tiện WhatsApp thất bại thầm lặng** (chỉ gửi văn bản) | Người dùng kênh WhatsApp | Sửa một phần (đã đóng #61726, #64352, nhưng #54131 vẫn mở) | [#54131](https://github.com/openclaw/openclaw/issues/54131) |
| 🟡 **P1-Chức năng bị lỗi** | Kết nối kênh Matrix thành công nhưng không nhận được tin nhắn | Người dùng Matrix | Mở, PR #64451 có thể liên quan | [#61773](https://github.com/openclaw/openclaw/issues/61773) |
| 🟡 **P1-Chức năng bị lỗi** | **Cấu hình gpt-5.4 hiển thị nhưng thiếu trong thời gian chạy** | Người dùng thử nghiệm GPT-5.4 | Mở, có theo dõi chuyên dụng #64227 | [#37623](https://github.com/openclaw/openclaw/issues/37623) |
| 🟡 **P1-Chức năng bị lỗi** | **memoryFlush được kích hoạt xen kẽ** | Các phiên chạy lâu dài | Mở, thẻ stale | [#12590](https://github.com/openclaw/openclaw/issues/12590) |
| 🟡 **P1-Chức năng bị lỗi** | Quyền FDA của iMessage không kế thừa qua LaunchAgent | Người dùng macOS 26 | Mở, thẻ stale | [#5116](https://github.com/openclaw/openclaw/issues/5116) |
| 🟡 **P1-Chức năng bị lỗi** | Tin nhắn thoại Telegram không được chuyển ngữ | Người dùng Telegram | Mở | [#17101](https://github.com/openclaw/openclaw/issues/17101) |
| 🟢 **P2-Vấn đề trải nghiệm** | Lỗi `EADDRINUSE` của công cụ `voice-call` | Người dùng thử nghiệm gọi thoại | Mở, mới tạo hôm nay | [#64117](https://github.com/openclaw/openclaw/issues/64117) |
| 🟢 **P2-Vấn đề trải nghiệm** | **Hiển thị WebUI trang Dreaming bất thường** (hồi quy 4.9) | Người dùng WebUI | Mở | [#64131](https://github.com/openclaw/openclaw/issues/64131) |

**Quan sát chính**: **Khả năng tương thích thời gian chạy của dòng mô hình GPT-5.x** đã trở thành một điểm đau nổi bật, "Chương trình Tương đương GPT-5.4 / Codex" #64227 đã được thiết lập làm theo dõi chuyên dụng. Vấn đề gửi phương tiện WhatsApp đã trải qua nhiều lần sửa lỗi-hồi quy, cho thấy sự mong manh của đường dẫn mã kênh này.

---

## 6. Yêu cầu tính năng và Tín hiệu lộ trình

| Yêu cầu tính năng | Độ nóng | Tín hiệu khả thi | Xác suất đưa vào phiên bản tiếp theo |
|:---|:---:|:---|:---|
| **Cuộc gọi thoại thời gian thực** (Twilio/WebRTC luồng hai chiều) | ⭐⭐⭐⭐⭐ | PR #10356 (Typecast TTS) đang xem xét, plugin voice-call được lặp lại liên tục | **Cao** |
| **Che giấu dữ liệu nhạy cảm** (lưu trữ mã hóa khóa API/token, che giấu nhật ký) | ⭐⭐⭐⭐☆ | Issue mới tạo hôm nay #64046, nhu cầu tuân thủ quy định an ninh | **Trung bình cao** |
| **Theo dõi mức sử dụng Token và bảng điều khiển chi phí** | ⭐⭐⭐⭐☆ | #49232 mở lâu dài, có thể triển khai nhanh sau khi cơ sở hạ tầng sẵn sàng | **Trung bình** |
| **Ranh giới tin cậy / TrustChain đa tác nhân** | ⭐⭐⭐⭐☆ | #33106 tương ứng với RFC #49971, tính năng cấp kiến trúc, cần thiết kế dài hạn | **Trung bình thấp** |
| **Xác thực danh tính tác nhân thời gian chạy** | ⭐⭐⭐⭐☆ | Phụ thuộc vào việc triển khai RFC #49971 | **Trung bình thấp** |

**Tín hiệu lộ trình**: Issue mới tạo hôm nay #64046 (che giấu dữ liệu nhạy cảm) phản ánh nhu cầu tuân thủ quy định an ninh của người dùng doanh nghiệp, có thể trở thành mục ưu tiên tăng cao trong Q2 2026. Tính năng thoại thời gian thực có ngăn xếp công nghệ (mở rộng nhà cung cấp TTS, plugin voice-call) đã sẵn sàng, chỉ còn một bước nhỏ để sản xuất hóa.

---

## 7. Tóm tắt phản hồi người dùng

### Điểm đau thực tế

> *"GPT-5.4 via openai-codex can be added to config and appears in models list, but it is still treated as missing"* — **Phân tách cấu hình-thời gian chạy**, người dùng bị hiểu lầm rằng tính năng có sẵn [#37623](https://github.com/openclaw/openclaw/issues/37623)

> *"openai-codex/gpt-5.3-codex stopped executing any tools... says it will execute, but then does nothing"* — **Nâng cấp mô hình phá vỡ quy trình làm việc hiện có**, hồi quy đột ngột [#53959](https://github.com/openclaw/openclaw/issues/53959)

> *"API key、token、secretkey 等敏感信息都是明文存储"* — **Rào cản tuân thủ an ninh doanh nghiệp** [#64046](https://github.com/openclaw/openclaw/issues/64046)

> *"WhatsApp media send returns successful tool result with real-looking messageId, but recipient only receives caption/text"* — **Lỗi thầm lặng khó gỡ lỗi hơn báo lỗi** [#61726](https://github.com/openclaw/openclaw/issues/61726)

### Điểm hài lòng

- Liên tục bổ sung các tính năng cho kênh MS Teams (phản ứng bằng biểu tượng cảm xúc, quản lý tin nhắn), chiến lược tương đương đa nền tảng được công nhận [#53432](https://github.com/openclaw/openclaw/pull/53432)
- Việc ủy quyền RPC CLI-Gateway sửa lỗi gửi WhatsApp, hướng cải tiến kiến trúc là đúng đắn [#50575](https://github.com/openclaw/openclaw/pull/50575)

---

## 8. Tồn đọng cần xử lý

| Issue | Thời gian tạo | Cập nhật cuối | Rủi ro | Liên kết |
|:---|:---:|:---:|:---|:---|
| **Bảo vệ SSRF chặn nhầm Discord CDN** (Clash TUN fake-ip) | 2026-03-03 | Hôm nay | Người dùng proxy không thể tải tệp đính kèm Discord, PR #55176 đã sửa một phần nhưng chưa giải quyết hoàn toàn | [#33086](https://github.com/openclaw/openclaw/issues/33086) |
| **Lệnh /session Slack bị hỏng** | 2026-03-03 | Hôm nay | Hồi quy chức năng cơ bản, không có PR sửa lỗi | [#33229](https://github.com/openclaw/openclaw/issues/33229) |
| **Tin nhắn luồng DM Telegram không bao giờ được kích hoạt** | 2026-03-03 | Hôm nay | Chức năng trải nghiệm tin nhắn cốt lõi bị lỗi | [#33025](https://github.com/openclaw/openclaw/issues/33025) |
| **Dấu thời gian sự kiện exec bị lỗi** (sai lệch khoảng 11,5 giờ) | 2026-03-03 | Hôm nay | Vấn đề độ tin cậy kiểm toán nhật ký | [#33083](https://github.com/openclaw/openclaw/issues/33083) |
| **Suy luận Gemini Flash bị rò rỉ vào iMessage** | 2026-03-03 | Hôm nay | Thiếu bộ lọc đầu ra mô hình | [#33091](https://github.com/openclaw/openclaw/issues/33091) |

**Nhắc nhở người bảo trì**: Các Issue trên đều được gắn thẻ `stale` nhưng liên tục có hoạt động hôm nay, cho thấy người dùng bị ảnh hưởng lâu dài. Nên ưu tiên xử lý #33025 (luồng DM Telegram) và #33229 (Slack /session), cả hai đều là chức năng kênh cốt lõi.

---

*Thời gian tạo báo cáo: 2026-04-11 | Nguồn dữ liệu: Dữ liệu công khai từ kho GitHub OpenClaw*

---

## So sánh chéo hệ sinh thái

 # Báo cáo phân tích so sánh ngang hàng hệ sinh thái trợ lý AI cá nhân
**Ngày phân tích**: 2026-04-11

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái mã nguồn mở trợ lý AI cá nhân/tác nhân thông minh tự trị đang thể hiện một mô hình **"một siêu cường, nhiều thế lực mạnh, phân hóa theo chiều dọc"**: OpenClaw với hơn 1000+ cập nhật Issues/PRs trong một ngày giữ vị trí dẫn đầu tuyệt đối, nhưng NanoBot, Hermes Agent, IronClaw và các đội thứ hai khác đang nhanh chóng chiếm lĩnh các kịch bản ngách thông qua các định vị khác biệt (nhẹ và ổn định, tích hợp doanh nghiệp, đổi mới kiến trúc). Tiêu điểm công nghệ tổng thể đang chuyển từ **"chức năng khả dụng" sang "sẵn sàng cho sản xuất"** — danh tính tin cậy, hợp tác đa tác nhân, tối ưu hóa chi phí, và độ ổn định kênh trở thành hướng tấn công chung, đồng thời các khả năng tiên tiến như tương tác thoại, đầu ra luồng thời gian thực, và tích hợp hệ sinh thái MCP đang được triển khai nhanh chóng.

---

## 2. So sánh mức độ hoạt động của từng dự án

| Dự án | Issues (24h) | PRs (24h) | Phát hành phiên bản | Đánh giá sức khỏe |
|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 (406 mới/hoạt động, 94 đóng) | 500 (301 chờ gộp, 199 đã gộp) | Không | 🟢 **Hoạt động cực cao** — Mở rộng tính năng và sửa lỗi song song, Issue tồn đọng đáng kể, cần chú ý vấn đề tồn đọng lâu dài |
| **NanoBot** | 30 (18 mới/hoạt động) | 48 (29 chờ gộp) | Không | 🟢 **Hoạt động cao** — Cân bằng giữa nâng cấp kiến trúc (danh sách cấu hình) và mở rộng tính năng, độ ổn định trên Windows nổi bật |
| **Hermes Agent** | 50 (38 mới/hoạt động, 12 đóng) | 50 (43 chờ gộp, 7 đã gộp) | Không | 🟢 **Hoạt động cao** — Việc tiết lộ hàng loạt lỗ hổng bảo mật cần phản ứng khẩn cấp, tối ưu hóa hiệu suất (đồng bộ tệp hàng loạt) là chủ đề rõ ràng |
| **IronClaw** | 38 (35 mới/hoạt động, 3 đóng) | 50 (7 chờ gộp, 43 đã gộp/đóng) | **v0.25.0** | 🟡 **Nước rút phát hành** — Động cơ kiến trúc v2 đang được thúc đẩy, phản hồi QA hàng loạt bộc lộ các vấn đề chi tiết tương tác |
| **PicoClaw** | 16 (13 mới/hoạt động, 3 đóng) | 28 (10 chờ gộp, 18 đã gộp) | v0.2.6-nightly | 🟡 **Tăng tốc lặp lại** — Vấn đề hồi quy WebSocket cần sửa chữa khẩn cấp, mở rộng hỗ trợ gốc iMessage/Gemini vào hệ sinh thái |
| **NanoClaw** | 6 | 19 (12 chờ gộp) | Không | 🟢 **Tiến triển ổn định** — Tăng cường sự sẵn sàng cho sản xuất (OAuth, bộ nhớ bền vững, kiểm tra bảo mật), tích hợp các tính năng cấp doanh nghiệp dày đặc |
| **NullClaw** | 2 (mới) | 8 (4 chờ gộp, 4 đã gộp) | Không | 🟡 **Hoạt động trung bình** — Tăng cường bảo mật dày đặc, báo cáo mới về sự cố Docker + mất dữ liệu SQLite cần chú ý |
| **LobsterAI** | 7 (hoạt động) | 20 (9 chờ gộp, 11 đã gộp) | Không | 🟡 **Sửa chữa khẩn cấp** — Lỗi khởi động cổng OpenClaw P0 đã được sửa, độ ổn định của máy khách vẫn còn tiềm ẩn |
| **CoPaw** | 29 (21 mới/hoạt động, 8 đóng) | 50 (16 chờ gộp, 34 đã gộp) | Không | 🟢 **Hoạt động cao** — Các vấn đề về độ ổn định v1.0.2 bùng nổ, rò rỉ bộ nhớ MCP + khởi động chậm cần sửa chữa nóng |
| **Moltis** | 7 (đóng) | 12 (4 chờ gộp, 8 đã gộp) | **20260410.01** | 🟢 **Lặp lại hiệu quả** — Dọn dẹp nợ kiến trúc hệ thống Hook một cách tập trung, nén xác định để giảm chi phí sáng tạo |
| **TinyClaw** | 0 | 1 (chờ gộp) | Không | 🔵 **Bảo trì hoạt động thấp** — Giai đoạn ổn định trưởng thành, chỉ sửa lỗi biên |
| **ZeptoClaw** | — | — | Không | ⚫ **Không hoạt động** |

---

## 3. Vị trí của OpenClaw trong hệ sinh thái

| Chiều | Biểu hiện của OpenClaw | So sánh hệ sinh thái |
|:---|:---|:---|
| **Quy mô cộng đồng** | Hơn 1000+ cập nhật mỗi ngày, dẫn đầu về số lượng tuyệt đối | NanoBot/Hermes/IronClaw khoảng 50-100, chênh lệch 10-20 lần |
| **Lộ trình kỹ thuật** | **"Nền tảng hóa toàn diện"** — Hỗ trợ gốc 20+ kênh, thời gian chạy đa mô hình, khuôn khổ tin cậy doanh nghiệp (RFC #49971) | NanoBot theo hướng "nhẹ và có kiểm soát", IronClaw theo hướng "đổi mới kiến trúc", NanoClaw theo hướng "cô lập vùng chứa" |
| **Ưu điểm cốt lõi** | ① **Hệ sinh thái kênh toàn diện nhất** (bao phủ đầy đủ WhatsApp/Matrix/Teams/Telegram/iMessage)<br>② **Kiến trúc doanh nghiệp tiên phong** (xác minh danh tính tác nhân MolTrust, tiêu chuẩn W3C DID/VC)<br>③ **Hỗ trợ mô hình hàng đầu** (thích ứng thời gian chạy GPT-5.4/Codex) | So với độ ổn định trên Windows của NanoBot, mở rộng WASM của IronClaw, cô lập vùng chứa của NanoClaw |
| **Hạn chế chính** | ① **Nợ ổn định tích lũy** (hồi quy gửi phương tiện WhatsApp nhiều lần, lỗi tương thích GPT-5.x) <br>② **Phân tách cấu hình-thời gian chạy** (người dùng bị hiểu lầm rằng tính năng có sẵn)<br>③ **Quản lý Issue tồn đọng** (vấn đề tồn đọng lâu dài ảnh hưởng đến niềm tin của nhà phát triển) | Người dùng NanoBot thẳng thắn nói "hoàn toàn vượt trội OpenClaw... không biết đã cài đặt lại bao nhiêu lần, còn bị nhiễm virus hai lần" |
| **Vị trí hệ sinh thái** | **Nền tảng mở "kiểu Android"** — Tính năng đầy đủ nhất, hệ sinh thái lớn nhất, nhưng đi kèm với sự phân mảnh và thách thức về độ ổn định | So với các sản phẩm tinh tế, đóng của iOS (NanoClaw), kịch bản chiều dọc của ChromeOS (IronClaw) |

---

## 4. Hướng kỹ thuật được quan tâm chung

| Hướng kỹ thuật | Dự án liên quan | Yêu cầu cụ thể và tín hiệu |
|:---|:---|:---|
| **Tương tác thoại/luồng thời gian thực** | OpenClaw #7200, IronClaw #2274, NanoBot #2949 | Âm thanh luồng hai chiều (Twilio/WebRTC), công cụ gọi thoại, mở rộng nhà cung cấp TTS; PR #1764 của IronClaw đã triển khai luồng đầu ra API Responses |
| **Tích hợp hệ sinh thái MCP và độ ổn định** | NanoBot #3019, CoPaw #3226, IronClaw #2246, Moltis | Độ ổn định kết nối đa máy chủ, mô hình thống nhất cho công cụ MCP và mở rộng WASM, quản lý rò rỉ tiến trình (40+ tiến trình node.exe của CoPaw) |
| **Tin cậy danh tính và hợp tác đa tác nhân** | OpenClaw #49971 (79 bình luận), Hermes Agent #346, NanoClaw #1163 | Danh tính tác nhân phi tập trung (ERC-8004/W3C DID), TrustChain, ranh giới bảo mật đa tác nhân; đề xuất cấp RFC của OpenClaw cho thấy sự quan tâm cấp kiến trúc |
| **Tối ưu hóa chi phí và nén ngữ cảnh** | Moltis #653 (nén xác định), NanoClaw #1493 (Headroom), OpenClaw #12590 (memoryFlush) | Nén nén LLM bằng 0, theo dõi mức sử dụng Token, nén phiên tự động; từ "triển khai tính năng" sang "kiểm soát chi phí quy mô lớn" |
| **Độ ổn định kênh và tích hợp doanh nghiệp** | OpenClaw (WhatsApp/Matrix), Hermes Agent (Feishu #6893), CoPaw (DingTalk/Feishu #3001), LobsterAI (POPO) | Tích hợp sâu với nền tảng IM doanh nghiệp (Feishu/DingTalk/Teams), minh bạch hóa lỗi OAuth, cam kết về độ ổn định định dạng tin nhắn |
| **Bảo mật và tuân thủ cấp sản xuất** | Hermes Agent (5 Issue bảo mật DataAdvisory), NullClaw (#798 khóa SHA), NanoClaw (kiểm tra mount-security 35 mục) | Bảo mật chuỗi cung ứng, mã hóa lịch sử hội thoại, che giấu khóa API, tính không thể đoán trước của ID phiên |

---

## 5. Phân tích định vị khác biệt

| Dự án | Trọng tâm chức năng cốt lõi | Hồ sơ người dùng mục tiêu | Khác biệt kiến trúc kỹ thuật chính |
|:---|:---|:---|:---|
| **OpenClaw** | Bao phủ toàn kênh + hợp tác đa tác nhân cấp doanh nghiệp | Nhà phát triển nền tảng, kiến trúc sư CNTT doanh nghiệp | Kiến trúc đơn thể TypeScript/Node, nhấn mạnh hệ sinh thái plugin và ban hành tiêu chuẩn cấp RFC |
| **NanoBot** | Nhẹ, ổn định + khả năng điều chỉnh kỹ năng | Người dùng cá nhân Windows, nhà phát triển SMB | Mã nguồn Python gọn gàng, hỗ trợ gốc Windows, danh tiếng ổn định "hoàn toàn vượt trội OpenClaw" |
| **Hermes Agent** | Tối ưu hóa hiệu suất + tích hợp nhà cung cấp đám mây trong nước | Nhà phát triển trong nước, người dùng z.ai/Kimi | Hệ sinh thái NixOS, tối ưu hóa đồng bộ tệp hàng loạt (13 phút → 3 giây), độ tin cậy cấp doanh nghiệp như điều tiết RPM |
| **IronClaw** | Đổi mới kiến trúc + hệ sinh thái mở rộng WASM | Geek công nghệ, nhà phát triển mở rộng | Rust + thời gian chạy WASM, động cơ v2 nén trừu tượng 7 → 3 lớp, nhấn mạnh sự tiến hóa bản thân của "vòng đời kỹ năng" |
| **NanoClaw** | Bảo mật vùng chứa + tích hợp sâu Claude Code | Nhóm an ninh doanh nghiệp, người dùng hệ sinh thái Claude | Cô lập hộp cát Docker bắt buộc, mạng không tin cậy Tailscale, bộ nhớ bền vững Supermemory |
| **PicoClaw** | Phối hợp phần cứng + tối ưu hóa tiếng Trung bản địa | Nhà phát triển tiếng Trung, người dùng thiết bị biên | Lặp lại nhanh, hỗ trợ gốc iMessage/Gemini, nhưng độ ổn định WebSocket cần sửa chữa |
| **Moltis** | Middleware Hook + giảm chi phí xác định | Người dùng cao cấp, người xây dựng quy trình làm việc phức tạp | Hệ thống Hook khai báo (Block/ModifyPayload), nén quy tắc thay thế tóm tắt LLM |
| **CoPaw** | Hợp tác đa tác nhân + tích hợp sâu IM doanh nghiệp | Nhóm số hóa doanh nghiệp, người dùng nền tảng tác nhân | Cơ sở AgentScope, hệ thống bộ nhớ ReMe, điều khiển bằng ngôn ngữ tự nhiên của Agent Teams (#3224) |
| **NullClaw** | Ưu tiên bảo mật + hiệu suất cấp hệ thống Zig | Nhà phát triển nhạy cảm bảo mật, người đam mê lập trình hệ thống | Ngôn tắc Zig, nguyên tắc mặc định bảo mật AGENTS.md, HTTPS OTLP bắt buộc |
| **LobsterAI** | Tích hợp hệ sinh thái Netease + hoạt động ngay lập tức | Người dùng C-end trong nước, người dùng sản phẩm Youdao | Đóng gói dựa trên OpenClaw, loại bỏ động cơ cũ, tập trung tích hợp địa phương như POPO/Baidu Qianfan |

---

## 6. Mức độ phổ biến và sự trưởng thành của cộng đồng

| Giai đoạn | Dự án | Tín hiệu đặc trưng |
|:---|:---|:---|
| **🔥 Giai đoạn lặp lại nhanh** | OpenClaw, CoPaw, IronClaw | Hoạt động hơn 500+ mỗi ngày; các tính năng mới (thoại/động cơ v2/Agent Teams) và sửa lỗi song song; phát hành phiên bản thường xuyên hoặc đang chuẩn bị |
| **🚀 Giai đoạn mở rộng tăng tốc** | NanoBot, Hermes Agent, Moltis | Hoạt động 50-100 mỗi ngày; nâng cấp kiến trúc (danh sách cấu hình/hệ thống Hook trưởng thành) và mở rộng hệ sinh thái (Nix/WASM) đồng bộ; người đóng góp lần đầu tăng |
| **🛡️ Giai đoạn củng cố chất lượng** | NanoClaw, PicoClaw, NullClaw | Hoạt động 10-30 mỗi ngày; tập trung vào sự sẵn sàng cho sản xuất (kiểm tra bảo mật/sửa lỗi OAuth/độ ổn định vùng chứa); dọn dẹp nợ kỹ thuật > tính năng mới |
| **💤 Giai đoạn bảo trì hoạt động thấp** | TinyClaw, ZeptoClaw | Hoạt động <5 mỗi ngày hoặc không hoạt động; trưởng thành và ổn định, chỉ sửa lỗi biên; cần cảnh giác với việc mất người đóng góp |

**Thông tin chi tiết chính**: Hệ sinh thái thể hiện **hiệu ứng "Ma-thê"** — OpenClaw thu hút lượng truy cập lớn nhất nhưng nợ ổn định tích lũy, các đội thứ hai thiết lập các hào phòng thủ khác biệt thông qua chiến lược "sản phẩm tinh tế" (NanoBot ổn định, IronClaw kiến trúc, NanoClaw bảo mật). Moltis thể hiện hiệu quả thực thi tối đa với **tỷ lệ đóng Issue 100% trong một ngày**, xứng đáng để học hỏi.

---

## 7. Tín hiệu xu hướng đáng chú ý

| Xu hướng | Nguồn bằng chứng | Giá trị tham khảo cho nhà phát triển |
|:---|:---|:---|
| **Rào cản cứng từ "chức năng khả dụng" sang "sẵn sàng cho sản xuất"** | Khủng hoảng độ ổn định v1.0.2 của CoPaw, lỗi tương thích GPT-5.x của OpenClaw, kiểm toán DataAdvisory của Hermes Agent | Tác nhân AI chuyển từ bản demo sang sản xuất, **kỹ thuật độ tin cậy** (kiểm tra hỗn loạn, chiến lược giảm tải, khả năng quan sát) trở thành năng lực cạnh tranh cốt lõi |
| **Tối ưu hóa chi phí trở thành ràng buộc thiết kế cấp kiến trúc** | Nén xác định của Moltis (0 lần gọi LLM), nén ngữ cảnh Headroom của NanoClaw, nhu cầu bảng điều khiển Token của OpenClaw | Trong kịch bản triển khai quy mô lớn, **"giảm chi phí tương đương tính năng"** — thuật toán nén, chiến lược bộ đệm, định tuyến mô hình sẽ được đưa vào kiến trúc cốt lõi |
| **Danh tính và tin cậy trở thành cơ sở hạ tầng của kỷ nguyên đa tác nhân** | OpenClaw RFC #49971 (79 bình luận), nhu cầu đa nhà cung cấp của NanoClaw, vòng đời kỹ năng của IronClaw | Trong quá trình tiến hóa từ hợp tác đơn tác nhân sang đa tác nhân, **danh tính phi tập trung (DID/VC)** và **quản lý ranh giới tin cậy** sẽ trở thành các mô-đun tiêu chuẩn |
| **Phân mảnh kênh buộc phải có lớp trừu tượng thống nhất** | IronClaw #2246 (MCP/WASM thống nhất), nợ độ ổn định kênh của OpenClaw, CoPaw Feishu/DingTalk/WeChat song song | Hỗ trợ 20+ kênh không phải là điểm cuối, **"phát triển một lần, trải nghiệm nhất quán trên tất cả các kênh"** của lớp trừu tượng (như ChannelBinding của Moltis) trở thành yếu tố then chốt |
| **Tương tác thoại chuyển từ "tính năng" sang "chế độ tương tác mặc định"** | OpenClaw #7200 (17 bình luận), đầu ra luồng AI Card của CoPaw trên DingTalk, sự xuất hiện của các PR gọi thoại thời gian thực | Di chuyển mô hình tương tác từ văn bản sang giọng nói đang tăng tốc, **xử lý âm thanh luồng, cơ chế ngắt, phát hiện hoạt động thoại** trở thành ngăn xếp kỹ năng mới |
| **Bảo mật chuyển sang trái và quản trị chuỗi cung ứng** | NullClaw #798 (khóa SHA), kiểm toán DataAdvisory của Hermes Agent, kiểm tra mount-security của NanoClaw | Tác nhân AI chạm đến dữ liệu nhạy cảm và quyền thực thi, **bảo mật chuỗi cung ứng CI, quản lý khóa, cô lập hộp cát** cần được đưa vào thiết kế từ ngày đầu |

---

## Báo cáo chi tiết dự án cùng cuộc đua

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Nhật ký hoạt động dự án NanoBot | 2026-04-11

## 1. Tổng quan hôm nay

NanoBot hôm nay duy trì **nhịp độ phát triển hoạt động cao**, với 30 lượt cập nhật Issues (18 mới/hoạt động), 48 lượt cập nhật PR (29 chờ gộp) trong 24 giờ qua, thu hút sự chú ý đáng kể của cộng đồng. Các điểm nổi bật cốt lõi bao gồm: **thảo luận về chức năng WebUI ngày càng tăng** (#2949, 9 bình luận), **tái cấu trúc lớn hệ thống cấu hình** (nhiều PR thúc đẩy di chuyển định dạng danh sách nhà cung cấp), **sửa lỗi độ ổn định kết nối đa máy chủ MCP** (#3019), và **vấn đề rò rỉ thẻ suy nghĩ của mô hình Gemma 4 đã đóng** (#2944). Dự án đạt được sự cân bằng giữa dọn dẹp nợ kỹ thuật và mở rộng tính năng, nhưng một số PR tồn đọng lâu dài (như kênh NapCat QQ #2379) vẫn cần người bảo trì chú ý.

---

## 2. Phát hành phiên bản

**Không có phiên bản mới nào được phát hành**

---

## 3. Tiến độ dự án

### Các PR quan trọng đã được gộp/đóng hôm nay

| PR | Tác giả | Đóng góp cốt lõi | Trạng thái |
|:---|:---|:---|:---|
| [#3025](https://github.com/HKUDS/nanobot/pull/3025) | JackLuguibin | Di chuyển cấu hình nhà cung cấp: từ đối tượng đơn lẻ sang định dạng danh sách, hỗ trợ nhiều điểm cuối và lựa chọn ưu tiên | **Đã đóng** (được thay thế bởi #3026) |
| [#3022](https://github.com/HKUDS/nanobot/pull/3022) | OldSuns | Tên nhà cung cấp tùy chỉnh và lệnh có thể mở rộng, gỡ bỏ giới hạn registry | **Đã đóng** (đang lặp lại) |
| [#2985](https://github.com/HKUDS/nanobot/pull/2985) | chengyongru | Tiêm tin nhắn giữa vòng: tin nhắn người dùng có thể được chèn vào ngữ cảnh tác nhân đang chạy theo thời gian thực, tránh phải chờ đợi | **Đã đóng** |
| [#2831](https://github.com/HKUDS/nanobot/pull/2831) | benlenarts | **Sửa lỗi bảo mật**: Ngăn chặn công cụ exec làm rò rỉ biến môi trường tiến trình (khóa API, v.v.) | **Đã đóng** |
| [#2911](https://github.com/HKUDS/nanobot/pull/2911) | JackLuguibin | Kiến trúc ban đầu của công cụ gỡ lỗi WebSocket (index.html/package.json/cấu hình TS) | **Đã đóng** |
| [#2946](https://github.com/HKUDS/nanobot/pull/2946) | JackLuguibin | Triển khai và thử nghiệm kênh máy chủ WebSocket (chỉ Python, không có webui) | **Đã đóng** |

### Đánh giá tiến độ tổng thể
- **Nâng cấp kiến trúc**: Hệ thống cấu hình chuyển từ nhà cung cấp đơn lẻ sang định dạng danh sách, tạo nền tảng cho các kịch bản đa đám mây/đa mô hình
- **Trải nghiệm tương tác**: Tiêm tin nhắn thời gian thực + xây dựng kênh WebSocket, độ trễ phản hồi có thể giảm
- **Tăng cường bảo mật**: Sửa lỗi cô lập môi trường exec khắc phục các lỗ hổng quan trọng

---

## 4. Điểm nóng cộng đồng

### 🔥 Thảo luận sôi nổi nhất: Thảo luận tính năng WebUI (#2949)
- **Liên kết**: [HKUDS/nanobot#2949](https://github.com/HKUDS/nanobot/issues/2949)
- **Dữ liệu**: 9 bình luận, 6 👍, tạo ngày 2026-04-08
- **Yêu cầu cốt lõi**: Người dùng mong muốn nanobot có một WebUI hoàn chỉnh, thay vì chỉ có kênh CLI và trò chuyện. Thư mục `webui/websocket-debug` hiện tại có chức năng hạn chế, cộng đồng đang thảo luận xem có nên tích hợp giao diện kiểu Gradio/Streamlit hay chỉ tập trung vào khả năng tác nhân cốt lõi một cách nhẹ nhàng.
- **Tín hiệu**: Lượt thích cao cho thấy nhu cầu mở rộng của nhóm người dùng mạnh mẽ, có thể phân chia một phần người dùng từ OpenClaw.

### 🔧 Thảo luận kỹ thuật sâu: Quy trình truy vấn ngữ nghĩa Embedding (#2937)
- **Liên kết**: [HKUDS/nanobot#2937](https://github.com/HKUDS/nanobot/issues/2937)
- **Dữ liệu**: 3 bình luận
- **Yêu cầu cốt lõi**: Tác giả JackLuguibin đề xuất thay thế việc cắt tỉa ngân sách token và tóm tắt LLM hiện có bằng một giải pháp dựa trên embedding, giải quyết vấn đề mất thông tin chi tiết và chi phí tính toán. Liên quan đến lưu trữ vector, giới thiệu kiến trúc RAG.

### ⚡ Độ nóng yêu cầu tính năng: Phát hiện kỹ năng tự động (#2927)
- **Liên kết**: [HKUDS/nanobot#2927](https://github.com/HKUDS/nanobot/issues/2927)
- **Dữ liệu**: 6 bình luận
- **Yêu cầu cốt lõi**: Hệ thống kỹ năng hiện tại hoàn toàn thụ động, người dùng mong muốn tác nhân có thể nhận biết mô hình hành vi của chính mình và **tự động tạo kỹ năng**. Liên quan đến học siêu cấp, kiến trúc tác nhân tự cải thiện, độ khó kỹ thuật cao nhưng sức hấp dẫn của tầm nhìn mạnh mẽ.

---

## 5. Lỗi và Độ ổn định

| Mức độ nghiêm trọng | Issue | Mô tả | Trạng thái | PR sửa lỗi |
|:---|:---|:---|:---|:---|
| 🔴 **Cao** | [#3004](https://github.com/HKUDS/nanobot/issues/3004) | Biểu thức chính quy `strip_think()` khớp sai dẫn đến cắt tin nhắn giữa chừng (ví dụ: khi commit summary đề cập đến `<think>`) | **Mở** | [#3020](https://github.com/HKUDS/nanobot/pull/3020) đã gửi |
| 🔴 **Cao** | [#2980](https://github.com/HKUDS/nanobot/issues/2980) | Dream git store gặp sự cố khi khởi tạo workspace/repo lồng nhau và ghi đè .gitignore | **Mở** | [#3009](https://github.com/HKUDS/nanobot/pull/3009) đã gửi |
| 🔴 **Cao** | [#2970](https://github.com/HKUDS/nanobot/issues/2970) | Khởi động kênh Feishu thất bại: `No module named 'lark_oapi.api.bot'` (phiên bản 0.1.5) | **Mở** | Chờ sửa |
| 🟡 **Trung bình** | [#2994](https://github.com/HKUDS/nanobot/issues/2994) | Xung đột chỉ mục giữa `_backfill_missing_tool_results` và `_save_turn`, tính toán biên lịch sử bị lỗi | **Mở** | Chờ điều tra |
| 🟡 **Trung bình** | [#2958](https://github.com/HKUDS/nanobot/issues/2958) | Vấn đề tương thích giữa openai-responses và nhà cung cấp tùy chỉnh | **Mở** | Chờ sửa |
| 🟡 **Trung bình** | [#2954](https://github.com/HKUDS/nanobot/issues/2954) | Xử lý kiểm tra email không nhất quán (cấu hình Gmail IMAP không phản hồi) | **Mở** | Chờ sửa |
| 🟢 **Thấp** | [#2944](https://github.com/HKUDS/nanobot/issues/2944) | Rò rỉ thẻ `<thought>` của mô hình Gemma 4 vào tin nhắn người dùng | **Đã đóng** | Đã sửa |
| 🟢 **Thấp** | [#2917](https://github.com/HKUDS/nanobot/issues/2917) | Không tìm thấy đường dẫn Python sau khi nâng cấp lên 0.1.5 | **Đã đóng** | Đã sửa |

---

## 6. Yêu cầu tính năng và Tín hiệu lộ trình

### Được đưa vào khả năng cao (đã có PR hoặc được người bảo trì cốt lõi thúc đẩy)

| Tính năng | Issue/PR | Tín hiệu | Mô tả |
|:---|:---|:---|:---|
| **Định dạng danh sách cấu hình nhà cung cấp** | #3026, #3023 | ⭐⭐⭐⭐⭐ | JackLuguibin và OldSuns thúc đẩy song song, tính cần thiết ở cấp độ kiến trúc rõ ràng |
| **Kiểm soát phiên của Dream với SQLite** | [#3015](https://github.com/HKUDS/nanobot/pull/3015) | ⭐⭐⭐⭐⭐ | Giải quyết điểm đau của repo lồng nhau, JiajunBernoulli đã thực hiện API tương thích đầy đủ |
| **Kiểm soát yêu cầu đồng thời thông minh** | [#3008](https://github.com/HKUDS/nanobot/issues/3008) | ⭐⭐⭐⭐☆ | Mã hóa cứng `MAX_CONCURRENT=3` bị đặt câu hỏi, cộng đồng có giải pháp tối ưu hóa rõ ràng |
| **Nén phiên tự động** | [#3007](https://github.com/HKUDS/nanobot/pull/3007) | ⭐⭐⭐⭐☆ | chengyongru cherry-pick từ nhánh nightly, giảm chi phí token |

### Tầm nhìn trung và dài hạn (cần quyết định kiến trúc)

| Tính năng | Issue | Thách thức |
|:---|:---|:---|
| **WebUI hoàn chỉnh** | #2949 | Cân bằng với định vị "cốt lõi tác nhân nhẹ" |
| **Phát hiện/tạo kỹ năng tự động** | #2927 | Cần khả năng học siêu cấp, lộ trình triển khai kỹ thuật không rõ ràng |
| **Điểm kiểm tra và khôi phục tác nhân** | [#3027](https://github.com/HKUDS/nanobot/issues/3027) | Cơ chế can thiệp vòng lặp dài, liên quan đến tuần tự hóa trạng thái |
| **Công cụ cuộc gọi từ xa Claude Code** | [#3024](https://github.com/HKUDS/nanobot/issues/3024) | Tích hợp với máy chủ M5, áp dụng cho kịch bản doanh nghiệp |

---

## 7. Tóm tắt phản hồi người dùng

### ✅ Điểm hài lòng
> *"nanobot rất ổn định, hoàn toàn vượt trội openclaw... openclaw tôi không biết đã cài đặt lại bao nhiêu lần rồi, còn bị nhiễm virus hai lần... nanobot ổn định như mọi khi"*
> — [bigsinger](https://github.com/HKUDS/nanobot/issues/2774), người dùng Windows lâu năm

> *"Mã nguồn Python sạch sẽ và dễ hiểu so với OpenClaw"*
> — [yokoyama-flogics](https://github.com/HKUDS/nanobot/issues/2989), người dùng kỹ thuật công nhận chất lượng mã

**Ưu điểm chính**: Hỗ trợ gốc Windows (không cần WSL), độ ổn định, khả năng điều chỉnh hệ thống kỹ năng

### ❌ Điểm đau và ma sát
| Điểm đau | Nguồn | Kịch bản |
|:---|:---|:---|
| Lệnh `/stop` làm mất toàn bộ ngữ cảnh vòng hiện tại | [#2966](https://github.com/HKUDS/nanobot/issues/2966) | Cần can thiệp khi AI đi sai đường, nhưng không muốn mất tiến độ |
| Hết hạn API không có cảnh báo, trực tiếp không phản hồi | [#3006](https://github.com/HKUDS/nanobot/issues/3006) | Khó khăn trong việc gỡ lỗi sự cố môi trường sản xuất |
| Thiếu cô lập dữ liệu đa người dùng WhatsApp | [#2836](https://github.com/HKUDS/nanobot/issues/2836) | Rủi ro riêng tư trong kịch bản doanh nghiệp/đa người thuê |
| Đầu vào ngôn ngữ tự nhiên QQ/WeChat thất bại, chỉ lệnh dấu gạch chéo khả dụng | [#2977](https://github.com/HKUDS/nanobot/issues/2977) | Đã đóng, nhưng phản ánh sự phân mảnh của việc thích ứng kênh |

---

## 8. Tồn đọng cần xử lý

> Các Issue/PR sau đây đã quá 2 tuần không nhận được phản hồi từ người bảo trì hoặc bị đình trệ lâu dài, đề xuất xem xét ưu tiên:

| Loại | Số hiệu | Tiêu đề | Thời gian tạo | Nguyên nhân chặn |
|:---|:---|:---|:---|:---|
| PR | [#2379](https://github.com/HKUDS/nanobot/pull/2379) | Thêm NapCat QQ | 2026-03-23 | Gộp sau 18 ngày, bổ sung quan trọng cho hệ sinh thái QQ, không xung đột với kênh QQ hiện có |
| PR | [#2475](https://github.com/HKUDS/nanobot/pull/2475) | Chế độ cho phép/từ chối exec theo cấu hình người dùng | 2026-03-25 | Liên quan đến bảo mật, cần thiết cho kịch bản đa người thuê |
| PR | [#2867](https://github.com/HKUDS/nanobot/pull/2868) | Danh sách trắng nhóm Telegram + tác nhân dự phòng | 2026-04-06 | Gắn thẻ [invalid] cần làm rõ |
| Issue | [#2836](https://github.com/HKUDS/nanobot/issues/2836) | Cô lập workspace phân chia WhatsApp | 2026-04-06 | Yêu cầu tuân thủ quy định riêng tư quan trọng |

---

*Thời gian tạo nhật ký: 2026-04-11 | Nguồn dữ liệu: HKUDS/nanobot GitHub*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Nhật ký hoạt động dự án Hermes Agent | 2026-04-11

## 1. Tổng quan hôm nay

Hermes Agent hôm nay thể hiện **cường độ phát triển cao**: 24 giờ qua tạo ra **50 cập nhật Issue** (38 hoạt động/mới, 12 đóng) và **50 cập nhật PR** (43 chờ gộp, 7 đã gộp/đóng), không có phiên bản mới nào được phát hành. Cộng đồng hoạt động cực kỳ sôi nổi, các nhà đóng góp cốt lõi `alt-glitch`, `Tranquil-Flow`, `konsisumer`, `Dusk1e` liên tục đưa ra các nội dung, tập trung vào **bốn tuyến chính: độ ổn định cổng, tái cấu trúc hệ sinh thái Matrix, tối ưu hóa hiệu suất và tăng cường bảo mật**. Đáng chú ý, nhà nghiên cứu bảo mật `DataAdvisory` đã gửi 5 Issue bảo mật cùng lúc, tiết lộ rủi ro hệ thống ở cấp độ máy chủ API, đòi hỏi sự phản hồi ưu tiên từ nhóm bảo trì.

---

## 2. Phát hành phiên bản

**Không có phiên bản mới nào được phát hành**

---

## 3. Tiến độ dự án

### Các PR quan trọng đã được gộp hôm nay (7 PR)

| PR | Tác giả | Cải tiến cốt lõi |
|:---|:---|:---|
| #5223 | hermes-assistant | **Sửa lệnh cổng `/model` thiếu nhà cung cấp Hermes-overlay** (ví dụ: `openai-codex`) — Cải thiện tính hoàn chỉnh của trải nghiệm cổng |
| #4594 | sgiath | **Giải quyết lỗi tích hợp Matrix NixOS** — Cột mốc tương thích nền tảng |
| #5502 | Aypex | **Sửa lỗi Nix build thiếu mô-đun `hermes_logging`** — Sửa lỗi chặn |
| #4426 | ferranbonas | **Sửa lỗi lưu trữ cấu hình Docker và cô lập Profile** — Bảo mật dữ liệu và độ ổn định đa người thuê |
| #6908 | malaiwah | **Sửa lỗi báo động sai trạng thái zombie tiến trình nền** — Độ tin cậy quản lý tiến trình |
| #4287/#4288 | Heavy-A | **Tính năng bộ hẹn giờ phản hồi CLI** (hợp nhất Issue lặp lại) — Tối ưu hóa trải nghiệm nhà phát triển |

**Đánh giá tiến độ tổng thể**: Các PR được gộp hôm nay bao phủ **UX cổng, hệ sinh thái NixOS, triển khai Docker, quản lý tiến trình, công cụ CLI**, đều là các điểm đau thường gặp của người dùng, độ trưởng thành của cơ sở hạ tầng dự án đã được cải thiện đáng kể.

---

## 4. Điểm nóng cộng đồng

### Issues được thảo luận sôi nổi nhất

| Issue | Bình luận | Yêu cầu cốt lõi | Liên kết |
|:---|:---|:---|:---|
| **#6893 Lỗi phê duyệt lệnh nguy hiểm cổng Feishu/Lark (Lỗi 200340)** | 14 lượt | Người dùng doanh nghiệp tích hợp Hermes qua Feishu bị chặn bởi quy trình phê duyệt bảo mật, mã lỗi `200340` thiếu tài liệu, yêu cầu khẩn cấp tối ưu hóa xử lý lỗi ở cấp độ cổng | [Liên kết](https://github.com/NousResearch/hermes-agent/issues/6893) |
| **#3926 Hỗ trợ nhà cung cấp Ollama Cloud tích hợp sẵn** | 7 lượt, 👍19 | Yêu cầu cao của cộng đồng, người dùng buộc phải sử dụng `custom_providers` dẫn đến việc cấu hình tính năng phụ bị lỗi, yêu cầu tích hợp gốc | [Liên kết](https://github.com/NousResearch/hermes-agent/issues/3926) |
| **#346 Hệ thống bộ nhớ có cấu trúc (nút đồ thị + tìm kiếm hỗn hợp)** | 4 lượt | Đề xuất kiến trúc dài hạn, bộ nhớ văn bản phẳng hiện tại hạn chế khả năng suy luận dài hạn của tác nhân, cần phản hồi lộ trình từ nhóm cốt lõi | [Liên kết](https://github.com/NousResearch/hermes-agent/issues/346) |

### Phân tích yêu cầu đằng sau
- **Điểm đau tích hợp doanh nghiệp**: Độ ổn định và minh bạch lỗi của cổng cho các nền tảng như Feishu/Lark chưa đủ
- **Phân mảnh hệ sinh thái**: Thiếu vị thế công dân hạng nhất cho nhà cung cấp tùy chỉnh, trải nghiệm cấu hình bị phân mảnh
- **Nợ kiến trúc**: Hệ thống bộ nhớ là khả năng cốt lõi của tác nhân, cộng đồng mong đợi một cam kết tiến hóa rõ ràng

---

## 5. Lỗi và Độ ổn định

| Mức độ ưu tiên | Issue | Mô tả | Trạng thái | PR sửa lỗi |
|:---|:---|:---|:---|:---|
| 🔴 **P0** | **Docker build hoàn toàn thất bại**: Bộ phân tích `pip` gặp sự cố nghiêm trọng trên `[all]` extras, CI liên tục thất bại | **Mở**, chặn v0.8.0+ | Không có |
| 🔴 **P0** | **Lỗi khởi động**: Trình quét bảo mật `tirith` phát hiện lỗi sử dụng không thành công dẫn đến traceback thoát | **Mở** | Không có |
| 🟡 **P1** | **Nhà cung cấp do người dùng định nghĩa không thể phân tích cú pháp qua `/model` hoặc `--provider`** | **Mở** | Không có |
| 🟡 **P1** | **`checkpoint_manager` không hoạt động khi đường dẫn chứa `~`** | **Mở** (mới tạo hôm nay) | Không có |
| 🟡 **P1** | **Hồi quy định dạng tin nhắn WeChat**: v0.8.0 suy thoái từ bảng cấu trúc thành bong bóng phân mảnh | **Mở** (mới tạo hôm nay) | Không có |
| 🟢 **P2** | **Nhắc nhở luồng Discord lần đầu tiên thiếu ngữ cảnh** | **Mở** | Không có |
| 🟢 **P2** | **Webhook bỏ qua tính toán trong các kịch bản phân nhánh đa định tuyến** | **Mở** | [#7471](https://github.com/NousResearch/hermes-agent/pull/7471) đang xem xét |

### Vụ nổ hàng loạt lỗ hổng bảo mật (Gửi bởi DataAdvisory)

| Issue | Mức độ rủi ro | Mô tả | Liên kết |
|:---|:---|:---|:---|
| [#7487](https://github.com/NousResearch/hermes-agent/issues/7487) | Trung bình | Máy chủ API thiếu tiêu đề bảo mật CSP/X-Frame-Options/HSTS | Mở |
| [#7486](https://github.com/NousResearch/hermes-agent/issues/7486) | **Cao** | Lịch sử hội thoại được lưu trữ dưới dạng văn bản thuần túy trong SQLite, không mã hóa | Mở |
| [#7485](https://github.com/NousResearch/hermes-agent/issues/7485) | Trung bình | Biểu thức chính quy lệnh nguy hiểm có rủi ro ReDoS | Mở |
| [#7484](https://github.com/NousResearch/hermes-agent/issues/7484) | **Cao** | ID phiên có thể dự đoán (suy ra xác định SHA256), có nguy cơ tấn công cố định | Mở |
| [#7483](https://github.com/NousResearch/hermes-agent/issues/7483) | Trung bình | Điểm cuối API không có giới hạn tốc độ, có thể bị tấn công brute-force/DoS | Mở |

> ⚠️ **Đề xuất**: Cụm Issue bảo mật cần người bảo trì phản hồi trong vòng 48 giờ, đề xuất tạo thẻ `security` và bắt đầu quy trình đánh giá lỗ hổng.

---

## 6. Yêu cầu tính năng và Tín hiệu lộ trình

### Yêu cầu Tính năng Giá trị Cao Mới Tạo Hôm Nay

| Issue/PR | Lĩnh vực | Đánh giá xác suất đưa vào |
|:---|:---|:---|
| [#7489](https://github.com/NousResearch/hermes-agent/issues/7489) / [#7490](https://github.com/NousResearch/hermes-agent/pull/7490) **Điều tiết trước RPM** | Độ tin cậy | ⭐⭐⭐⭐⭐ **Cao** — PR đã được gửi đồng bộ, kiến trúc rõ ràng |
| [#7479](https://github.com/NousResearch/hermes-agent/pull/7479) **Tín hiệu đồng thời của nhà cung cấp** (z.ai/Kimi) | Độ tin cậy | ⭐⭐⭐⭐⭐ **Cao** — Bổ sung cho #7489, giải quyết vấn đề 429 |
| [#7467](https://github.com/NousResearch/hermes-agent/pull/7467) / [#7465](https://github.com/NousResearch/hermes-agent/pull/7465) **Đồng bộ tệp hàng loạt nền backend** | Hiệu suất | ⭐⭐⭐⭐⭐ **Cao** — PR đã gửi, giải pháp đường ống SSH tar, tối ưu hóa 13 phút → 3 giây |
| [#7488](https://github.com/NousResearch/hermes-agent/pull/7488) **Di chuyển Matrix SDK sang mautrix-python** | Hệ sinh thái | ⭐⭐⭐⭐☆ **Trung bình cao** — Giải quyết vấn đề xây dựng Nix, dọn dẹp nợ kỹ thuật |
| [#7481](https://github.com/NousResearch/hermes-agent/issues/7481) **Chuỗi nhà cung cấp dự phòng theo nhiệm vụ ủy quyền** | Độ tin cậy | ⭐⭐⭐⭐☆ **Trung bình cao** — Nhu cầu về khả năng phục hồi của tác nhân phụ rõ ràng |
| [#7457](https://github.com/NousResearch/hermes-agent/issues/7457) **Hỗ trợ gọi công cụ Gemma 4** | Khả năng mô hình | ⭐⭐⭐☆☆ **Trung bình** — Phụ thuộc vào cải tiến phân tích phía API của Nous |
| [#2422](https://github.com/NousResearch/hermes-agent/issues/2422) **Hỗ trợ nền tảng tin nhắn WeChat** | Mở rộng nền tảng | ⭐⭐⭐☆☆ **Trung bình** — Giá trị chiến lược cao, nhưng vấn đề tích hợp WeChat hiện tại #7468 cần được giải quyết trước |
| [#7476](https://github.com/NousResearch/hermes-agent/issues/7476) **Epic 1: Nền tảng backend .NET 8** | Kiến trúc | ⭐★☆☆☆ **Thấp** — Xung đột với mã nguồn Python hiện có, cần làm rõ vị trí |

### Tín hiệu lộ trình
- **Tối ưu hóa hiệu suất** trở thành chủ đề rõ ràng: đồng bộ tệp hàng loạt, điều tiết RPM, kiểm soát đồng thời ba hướng
- **Độ tin cậy cấp doanh nghiệp**: Xuất hiện nhu cầu tích hợp sâu với các nhà cung cấp trong nước như z.ai, Kimi
- **An ninh và tuân thủ**: Kiểm toán DataAdvisory cho thấy khoảng cách về sự sẵn sàng cho sản xuất

---

## 7. Tóm tắt phản hồi người dùng

### Điểm đau thực tế

> *"Feishu gateway approval failed, error code 200340 completely untraceable"* — [#6893](https://github.com/NousResearch/hermes-agent/issues/6893)
> **Yêu cầu**: Lỗi cổng cần được minh bạch hóa, tích hợp IM doanh nghiệp cần đảm bảo SLA

> *"Ollama Cloud as a custom provider, all auxiliary functions are broken"* — [#3926](https://github.com/NousResearch/hermes-agent/issues/3926)
> **Yêu cầu**: Hỗ trợ công dân hạng nhất cho dịch vụ suy luận đám mây, thay vì giải pháp tạm thời

> *"581 files took 13 minutes to upload sequentially, every sandbox initialization is torture"* — [#7467](https://github.com/NousResearch/hermes-agent/issues/7467)
> **Yêu cầu**: Đảm bảo hiệu suất cơ bản cho kịch bản phát triển từ xa

> *"WeChat format degraded from table to bubble, readability dropped off a cliff"* — [#7468](https://github.com/NousResearch/hermes-agent/issues/7468)
> **Yêu cầu**: Cam kết về độ ổn định của định dạng cụ thể cho nền tảng, tránh thay đổi thầm lặng

### Tín hiệu hài lòng
- Người dùng NixOS [#4594](https://github.com/NousResearch/hermes-agent/issues/4594) công nhận việc sửa lỗi Matrix
- Bộ hẹn giờ phản hồi CLI [#4287](https://github.com/NousResearch/hermes-agent/issues/4287) được gộp nhanh chóng, trải nghiệm nhà phát triển được coi trọng

---

## 8. Tồn đọng cần xử lý

### Issues quan trọng tồn đọng lâu ngày

| Issue | Thời gian tạo | Trạng thái | Nhắc nhở |
|:---|:---|:---|:---|
| [#346](https://github.com/NousResearch/hermes-agent/issues/346) Hệ thống bộ nhớ có cấu trúc | 2026-03-04 (38 ngày trước) | 👍1, 4 bình luận | **Vấn đề cốt lõi trong lộ trình kiến trúc**, cần phản hồi từ người bảo trì cốt lõi về việc có đưa vào v0.9 hay không |
| [#3926](https://github.com/NousResearch/hermes-agent/issues/3926) Hỗ trợ Ollama Cloud tích hợp sẵn | 2026-03-30 (12 ngày trước) | 👍19, 7 bình luận | **Nhu cầu được bình chọn cao nhất của cộng đồng**, chi phí triển khai kỹ thuật thấp, đề xuất ưu tiên xếp lịch |
| [#2422](https://github.com/NousResearch/hermes-agent/issues/2422) Tích hợp WeChat chính thức | 2026-03-22 (20 ngày trước) | 👍0, 1 bình luận | Thị trường chiến lược (Trung Quốc), nhưng vấn đề chức năng WeChat hiện tại #7468 cần được giải quyết trước |

### Cảnh báo rủi ro PR đang chờ xem xét
- Trong số **43 PR đang mở**, [#7488](https://github.com/NousResearch/hermes-agent/pull/7488) (di chuyển Matrix SDK), [#7490](https://github.com/NousResearch/hermes-agent/pull/7490) (điều tiết RPM), [#7465](https://github.com/NousResearch/hermes-agent/pull/7465) (đồng bộ tệp hàng loạt) là những cải tiến cơ sở hạ tầng chất lượng cao, đề xuất xem xét nhanh chóng để tránh mất người đóng góp.

---

*Thời gian tạo nhật ký: 2026-04-11*
*Nguồn dữ liệu: Kho GitHub NousResearch/hermes-agent*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Nhật ký hoạt động dự án PicoClaw | 2026-04-11

## 1. Tổng quan hôm nay

PicoClaw hôm nay duy trì **hoạt động tích cực**, với **16 cập nhật Issue** (13 hoạt động/mới, 3 đóng) và **28 cập nhật PR** (10 chờ gộp, 18 đã gộp/đóng) trong 24 giờ qua, cùng với việc phát hành **1 phiên bản build ban đêm**. Trọng tâm cộng đồng tập trung vào **độ ổn định kết nối WebSocket** (vấn đề hồi quy được giới thiệu trong v0.2.5) và **tối ưu hóa hiển thị đầu ra suy luận AI** (tách biệt chuỗi suy nghĩ và phản hồi người dùng). Tình hình sức khỏe tổng thể của dự án tốt, tỷ lệ gộp PR là 64%, nhưng cần chú ý đến tiến độ sửa lỗi liên quan đến WebSocket đối với niềm tin của người dùng.

---

## 2. Phát hành phiên bản

### 🔧 Bản dựng ban đêm: v0.2.6-nightly.20260411.748ac58d

| Thuộc tính | Chi tiết |
|:---|:---|
| **Loại phát hành** | Bản dựng ban đêm tự động (phiên bản không ổn định) |
| **Commit Git** | `748ac58d` |
| **Nhật ký thay đổi đầy đủ** | [compare/v0.2.6...main](https://github.com/sipeed/picoclaw/compare/v0.2.6...main) |

> ⚠️ **Cảnh báo sử dụng**: Đây là bản dựng tự động, có thể có các yếu tố không ổn định, hãy sử dụng thận trọng trong môi trường sản xuất.

**Phạm vi thay đổi chính** (dựa trên so sánh nhánh main):
- Bao gồm PR #2475: Hỗ trợ nhà cung cấp gốc Gemini và tách biệt tin nhắn suy nghĩ
- Bao gồm PR #2474: Sửa lỗi phiên độc lập của tác vụ Cron
- Bao gồm PR #2460: Sửa lỗi tuần tự hóa tham số trống MCP

---

## 3. Tiến độ dự án

### Các PR quan trọng đã được gộp/đóng hôm nay

| PR | Tác giả | Đóng góp cốt lõi | Đánh giá ảnh hưởng |
|:---|:---|:---|:---|
| [#2475](https://github.com/sipeed/picoclaw/pull/2475) | lc6464 | **Nhà cung cấp gốc Gemini + tách biệt suy nghĩ/phản hồi** | 🔴 **Cao** - Giải quyết vấn đề hiển thị WebUI #2448, tái cấu trúc lớp giao thức |
| [#2474](https://github.com/sipeed/picoclaw/pull/2474) | srcrs | **Cơ chế phiên độc lập cho tác vụ Cron** | 🟡 **Trung bình** - Khắc phục vấn đề lịch sử tác vụ định kỳ tích lũy |
| [#2449](https://github.com/sipeed/picoclaw/pull/2449) | lc6464 | Sửa lỗi đồng bộ hóa công cụ gọi WebUI và đầu ra của trợ lý | 🟡 **Trung bình** - Giải quyết vấn đề hiển thị bất thường #2427 |
| [#2467](https://github.com/sipeed/picoclaw/pull/2467) | wj-xiao | Căn chỉnh phiên bản React/React-DOM | 🟢 **Thấp** - Loại bỏ rủi ro lỗi thời |
| [#2466](https://github.com/sipeed/picoclaw/pull/2466) | wj-xiao | Quay lại khả năng tương thích nền tảng xác thực Launcher | 🟡 **Trung bình** - Tăng cường khả năng triển khai đa nền tảng |
| [#2436](https://github.com/sipeed/picoclaw/pull/2436) | winterfx | Làm sạch đầu vào tìm kiếm FTS5 | 🟢 **Thấp** - Tăng cường bảo mật |
| [#2224](https://github.com/sipeed/picoclaw/pull/2224) | xf33333