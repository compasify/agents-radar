# OpenClaw Sinh nhật hàng ngày 2026-05-07

> Số Issue: 500 | Số PR: 500 | Các dự án được bao phủ: 13 | Thời gian tạo: 2026-05-07 00:19 UTC

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

# Nhật báo về tiến độ dự án OpenClaw | 2026-05-07

## 1. Tổng quan nhanh hôm nay

OpenClaw hôm nay duy trì mức độ hoạt động cực kỳ cao, với **500 bản cập nhật Issue** (291 mới/hoạt động, 209 đã đóng) và **500 bản cập nhật PR** (358 chờ hợp nhất, 142 đã hợp nhất/đã đóng) trong vòng 24 giờ, cho thấy mật độ thảo luận cộng đồng tăng đáng kể. Dự án đang trong giai đoạn lặp lại dày đặc: hai phiên bản vá lỗi **v2026.5.5 và v2026.5.6** đã được phát hành trong vòng 24 giờ để khẩn cấp sửa lỗi hồi quy nghiêm trọng liên quan đến việc `doctor --fix` sửa đổi sai định tuyến OAuth. Trọng tâm phát triển cốt lõi là **ổn định Gateway, thích ứng kênh đa nền tảng (Telegram/Feishu/Discord/WeChat), độ tin cậy của lưu trữ phiên và tính đúng đắn của định tuyến mô hình**. Hàng đợi PR rõ ràng bị tồn đọng (358 chờ hợp nhất), cần chú ý đến băng thông đánh giá.

---

## 2. Phát hành phiên bản

### v2026.5.6 — Sửa lỗi khẩn cấp nóng
**Ngày phát hành**: 2026-05-06 | [Trang phát hành](https://github.com/openclaw/openclaw/releases/tag/v2026.5.6)

| Thuộc tính | Nội dung |
|:---|:---|
| **Loại** | Sửa lỗi khẩn cấp hoàn nguyên (thay đổi phá vỡ của v2026.5.5) |
| **Sửa lỗi cốt lõi** | Hoàn nguyên việc `doctor --fix` trong v2026.5.5 ghi đè sai định tuyến OAuth cho mô hình `openai-codex/*` |
| **Phạm vi ảnh hưởng** | Người dùng GPT-5.5 đăng nhập bằng OAuth ChatGPT/Codex |

**Mô tả chi tiết**:
- **Nguyên nhân gốc rễ của vấn đề**: Logic sửa lỗi tự động của `doctor --fix` trong v2026.5.5 đã di chuyển sai các tham chiếu mô hình `openai-codex/*` hợp lệ thành `openai/*`, dẫn đến cấu hình chỉ OAuth của GPT-5.5 bị lỗi hoặc vô tình chuyển người dùng sang định tuyến API-key.
- **Tính phá vỡ**: Nếu bạn đã nâng cấp lên v2026.5.5 và cấu hình đã bị sửa đổi tự động, bạn cần kiểm tra thủ công các trường `agents.defaults.modelOverrides` và `model` trong `openclaw.json`.
- **Đề xuất di chuyển**: Chạy `openclaw doctor --fix` trên v2026.5.6 sẽ giữ nguyên tiền tố `openai-codex/*` một cách chính xác; nếu trước đó đã bị hỏng, bạn cần khôi phục từ bản sao lưu hoặc định cấu hình lại tham chiếu mô hình OAuth.

### v2026.5.5 — Sửa lỗi kênh và tăng cường xác minh
**Ngày phát hành**: 2026-05-05 | [Trang phát hành](https://github.com/openclaw/openclaw/releases/tag/v2026.5.5)

| Mục sửa lỗi | Issue liên quan | Người đóng góp |
|:---|:---|:---|
| Feishu: sửa lỗi ID luồng tin nhắn đầu tiên/tiếp theo không nhất quán dẫn đến phân chia cuộc trò chuyện | #78262 | @joeyzenghuan |
| LINE: Từ chối cấu hình `dmPolicy: "open"` không có ký tự đại diện `allowFrom`, ngăn chặn bỏ qua xác minh webhook DM | — | — |

---

## 3. Tiến độ dự án

### Các PR quan trọng đã hợp nhất/đóng hôm nay

| PR | Trạng thái | Lĩnh vực chức năng | Mô tả tiến độ |
|:---|:---|:---|:---|
| [#78299](https://github.com/openclaw/openclaw/pull/78299) | **Đã đóng** | Kênh MS Teams | Sửa lỗi đường dẫn gửi chủ động bỏ qua ngữ cảnh luồng, buộc `replyStyle: "top-level"` làm cho tất cả tin nhắn trở thành bài đăng cấp trên cùng |
| [#78659](https://github.com/openclaw/openclaw/pull/78659) | **Đã đóng** | CLI | `openclaw completion --install` thêm bộ bảo vệ sự tồn tại của dòng nguồn profile shell, tránh lỗi shell đăng nhập sau khi gỡ cài đặt |
| [#78633](https://github.com/openclaw/openclaw/pull/78633) | **Chờ hợp nhất** | Cốt lõi Agent | **Thất bại nhanh chóng khóa phiên**: Chuỗi các mô hình dự phòng gặp sự cố hết thời gian chờ khóa ghi phiên sẽ không thử các mô hình ứng viên tiếp theo, giải quyết sự lãng phí nhân lên 10 giây × N trong #66646 |
| [#78644](https://github.com/openclaw/openclaw/pull/78644) | **Chờ hợp nhất** | Lập lịch Cron | Sửa lỗi kiểm tra trước thông báo ẩn của tác vụ cron bị cô lập, tránh lãng phí token mô hình khi không có định tuyến lịch sử |
| [#78668](https://github.com/openclaw/openclaw/pull/78668) | **Chờ hợp nhất** | Kênh Discord | Thêm hoạt động sửa đổi sự kiện và xóa sự kiện, hoàn thành quản lý vòng đời sự kiện đã lên lịch |
| [#78441](https://github.com/openclaw/openclaw/pull/78441) | **Chờ hợp nhất** | Agent phụ | `sessions_spawn` hỗ trợ chuyển tiếp tham số `toolsAllow` đến agent phụ, tăng cường kiểm soát quyền |
| [#78427](https://github.com/openclaw/openclaw/pull/78427) | **Chờ hợp nhất** | Tích hợp LM Studio | Sửa lỗi phân tích lệnh công cụ ký tự thuần túy Harmony OpenAI khiến agent bị chấm dứt im lặng theo vòng lặp (#78326) |

**Đánh giá tiến độ tổng thể**: Khối lượng hợp nhất hôm nay tương đối thận trọng (142/500), nhưng nhiều sửa lỗi cốt lõi trong các PR đang chờ hợp nhất đã vào trạng thái cuối cùng. Dự án đang chuyển từ "mở rộng chức năng" sang "tăng cường độ ổn định", tập trung giải quyết các trường hợp biên của lưu trữ phiên, tính nhất quán của luồng kênh và định tuyến mô hình.

---

## 4. Điểm nóng cộng đồng

### Issues thảo luận sôi nổi (sắp xếp theo số lượng bình luận)

| Hạng mục | Issue | Bình luận | 👍 | Yêu cầu cốt lõi | Trạng thái |
|:---|:---|:---:|:---|:---|
| 1 | [#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) | 104 | 74 | **Thiếu ứng dụng máy tính đa nền tảng**: Đã có ứng dụng cho macOS/iOS/Android, người dùng Linux/Windows đã kêu gọi chức năng tương đương từ lâu | 🔥 Mở lâu dài |
| 2 | [#9443 APK Android được tạo sẵn](https://github.com/openclaw/openclaw/issues/9443) | 24 | 1 | **Giảm rào cản sử dụng Android**: Mã nguồn hiện tại yêu cầu tự biên dịch, người dùng phổ thông không thể cài đặt trực tiếp | Mở |
| 3 | [#73655 Gateway bị rò rỉ ba chứng bệnh](https://github.com/openclaw/openclaw/issues/73655) | 16 | 1 | **Độ ổn định sản xuất**: Vòng lặp thử lại chiếm cổng khi khởi động lại plugin, tích lũy bộ xử lý tín hiệu, chặn I/O đồng bộ bắt tay WS | Mở |
| 4 | [#73323 Gateway suy thoái khi chạy](https://github.com/openclaw/openclaw/issues/73323) | 16 | 1 | **Hiệu suất trên nền tảng Windows**: Thời gian chờ lấy giá 60 giây, ngừng thăm dò Telegram, truy vấn chậm RPC, hồi quy mãn tính trên các phiên bản chéo | Mở |
| 5 | [#78407 doctor --fix ghi đè sai định tuyến OAuth](https://github.com/openclaw/openclaw/issues/78407) | 15 | 3 | **Bảo mật cấu hình**: Công cụ sửa lỗi tự động làm hỏng cấu hình sản xuất, dẫn đến phát hành khẩn cấp v2026.5.6 | ✅ Đã sửa |

**Phân tích yêu cầu**:
- **Công bằng nền tảng** (#75, #9443): Sự bất mãn của cộng đồng đối với sự hỗ trợ của hệ sinh thái không phải Apple liên tục gia tăng, #75 là một issue được tạo từ ngày 2026-01-01 đã hơn 4 tháng, 74 👍 cho thấy nhu cầu rộng rãi, nhưng vẫn chưa có người phụ trách.
- **Độ tin cậy của Gateway** (#73655, #73323): Hai issue có tính kỹ thuật cao phản ánh nợ kiến trúc cơ bản của vòng lặp sự kiện Node.js, xử lý tín hiệu, I/O đồng bộ, v.v., ảnh hưởng đến các phiên bản chạy dài hạn.
- **Khủng hoảng niềm tin vào công cụ tự động hóa** (#78407): Thay đổi phá vỡ của `doctor --fix` đã gây ra việc xem xét lại ranh giới bảo mật của "sửa lỗi tự động".

---

## 5. Lỗi và độ ổn định

### Sắp xếp theo mức độ nghiêm trọng

| Mức độ nghiêm trọng | Issue | Mô tả | Trạng thái sửa lỗi | Phiên bản phát hành/PR liên quan |
|:---|:---|:---|:---|:---|
| 🔴 **P0 - Đã sửa** | [#78407](https://github.com/openclaw/openclaw/issues/78407) | `doctor --fix` ghi đè `openai-codex/*` thành `openai/*`, làm hỏng cấu hình người dùng OAuth | ✅ v2026.5.6 | [v2026.5.6](https://github.com/openclaw/openclaw/releases/tag/v2026.5.6) |
| 🔴 **P0 - Đã sửa** | [#78262](https://github.com/openclaw/openclaw/issues/78262) | Cuộc trò chuyện chủ đề Feishu sử dụng `messageId` cho tin nhắn đầu tiên và `thread_id` cho các tin nhắn tiếp theo, dẫn đến phân chia cuộc trò chuyện | ✅ v2026.5.5 | [v2026.5.5](https://github.com/openclaw/openclaw/releases/tag/v2026.5.5) |
| 🟡 **P1 - Chờ sửa** | [#73655](https://github.com/openclaw/openclaw/issues/73655) | Ba chứng bệnh rò rỉ Gateway khi khởi động lại: vòng lặp thử lại EADDRINUSE, tích lũy bộ xử lý tín hiệu, đói vòng lặp sự kiện WS I/O đồng bộ | ⏳ Mở | — |
| 🟡 **P1 - Chờ sửa** | [#73323](https://github.com/openclaw/openclaw/issues/73323) | Suy thoái mạng/bộ định thời đa hệ thống Gateway trên Windows 11 + Node 24 | ⏳ Mở | — |
| 🟡 **P1 - Chờ sửa** | [#78232](https://github.com/openclaw/openclaw/issues/78232) | Plugin `openclaw-weixin` 2.4.1 không tương thích với thay đổi API `channelRuntime` trong 2026.5.4 | ⏳ Mở | — |
| 🟡 **P1 - Có PR** | [#66646](https://github.com/openclaw/openclaw/issues/66646) | Lỗi khóa tệp phiên lan truyền qua chuỗi dự phòng mô hình, lãng phí 10 giây × N | 🔄 [#78633](https://github.com/openclaw/openclaw/pull/78633) | — |
| 🟡 **P1 - Có PR** | [#78402](https://github.com/openclaw/openclaw/issues/78402) | Bị kẹt lệnh gọi công cụ gây đói vòng lặp sự kiện, kết nối WS liên tục đóng (1000/1005/1006) | ✅ Đã đóng | Cần xác nhận phiên bản sửa lỗi |
| 🟢 **P2 - Chờ sửa** | [#67793](https://github.com/openclaw/openclaw/issues/67793) | `queue.mode: "collect"` khử trùng lặp không hiệu quả, tin nhắn vẫn được xử lý riêng lẻ | ⏳ Mở | — |
| 🟢 **P2 - Chờ sửa** | [#78508](https://github.com/openclaw/openclaw/issues/78508) | Giao diện điều khiển proxy đáng tin cậy 2026.5.5 thiếu phạm vi `operator.read` cho phiên WS | ⏳ Mở | — |
| 🟢 **P2 - Đã sửa** | [#77837](https://github.com/openclaw/openclaw/issues/77837) | 2026.5.4 WeChat `getUpdates` fetch failed | ✅ Đã đóng | — |

**Sức khỏe độ ổn định**: ⚠️ **Rủi ro trung bình**. Việc hoàn nguyên khẩn cấp của v2026.5.5 đã làm lộ ra khoảng trống trong kiểm soát chất lượng của công cụ di chuyển tự động; độ ổn định của Gateway khi chạy trong thời gian dài (#73655, #73323) vẫn là vấn đề cấp kiến trúc chưa được giải quyết, ảnh hưởng đến niềm tin triển khai sản xuất.

---

## 6. Yêu cầu chức năng và tín hiệu lộ trình

### Các chức năng tiềm năng cao (đã có PR hoặc tín hiệu mạnh)

| Chức năng | Issue/PR | Trạng thái | Khả năng đưa vào phiên bản tiếp theo |
|:---|:---|:---|:---|
| **Phê duyệt kênh gọi công cụ MCP** | [#78308](https://github.com/openclaw/openclaw/issues/78308) | Mở, thiết kế hoàn chỉnh | ⭐⭐⭐⭐⭐ |
| **Chuyển tiếp quyền `toolsAllow` cho Agent phụ** | [#78441](https://github.com/openclaw/openclaw/pull/78441) | Chờ hợp nhất | ⭐⭐⭐⭐⭐ |
| **Chỉnh sửa/Xóa sự kiện Discord** | [#78668](https://github.com/openclaw/openclaw/pull/78668) | Chờ hợp nhất | ⭐⭐⭐⭐⭐ |
| **Plugin nhà cung cấp AI tạo sinh OCI** | [#78667](https://github.com/openclaw/openclaw/pull/78667) | Chờ hợp nhất (khối lượng XL) | ⭐⭐⭐⭐☆ |
| **Hỗ trợ API riêng tư iMessage** | [#78317](https://github.com/openclaw/openclaw/pull/78317) | Chờ hợp nhất (khối lượng XL, hỗ trợ AI) | ⭐⭐⭐⭐☆ |
| **Phê duyệt exec hai yếu tố TOTP** | [#67440](https://github.com/openclaw/openclaw/issues/67440) | Mở, yêu cầu rõ ràng | ⭐⭐⭐☆☆ |
| **Danh sách chặn phê duyệt exec** | [#6615](https://github.com/openclaw/openclaw/issues/6615) | Mở, 7 👍 | ⭐⭐⭐☆☆ |
| **Chỉ báo đang xử lý Telegram (⌛️)** | [#6946](https://github.com/openclaw/openclaw/issues/6946) | Mở | ⭐⭐⭐☆☆ |
| **Mô hình hết độ dài ngữ cảnh dự phòng** | [#9986](https://github.com/openclaw/openclaw/issues/9986) | Mở | ⭐⭐⭐☆☆ |

**Đánh giá lộ trình**:
- **Bảo mật và phê duyệt** là chủ đề rõ ràng: phong bì phê duyệt MCP, TOTP, danh sách chặn tạo thành một câu chuyện "ủy quyền phân lớp", có thể được nhóm lại thành chủ đề bảo mật của v2026.6.
- **Tích hợp sâu kênh** tiếp tục đầu tư: quản lý sự kiện Discord, API riêng tư iMessage, tối ưu hóa trải nghiệm Telegram cho thấy sự kiên trì "trở thành công dân gốc của nền tảng".
- **Kỹ thuật hiệu suất** bắt đầu xuất hiện: bộ nhớ đệm lược đồ công cụ (#78664), làm tắc nghẽn nhà cung cấp đích (#73261) cho thấy áp lực của các kịch bản triển khai quy mô lớn.

---

## 7. Tóm tắt phản hồi của người dùng

### Tinh lọc các điểm khó khăn

| Chủ đề | Trích dẫn điển hình/Kịch bản | Issue nguồn |
|:---|:---|:---|
| **Nỗi sợ di chuyển cấu hình** | "Sau khi chạy doctor --fix tự động trong v2026.5.5, tất cả cấu hình OAuth Codex đều bị hỏng và không thể hoàn nguyên." | [#78407](https://github.com/openclaw/openclaw/issues/78407) |
| **Công dân hạng hai trên Windows** | "Gateway suy thoái mãn tính trên Windows 11, lấy giá, thăm dò Telegram, RPC đều chậm lại, không cải thiện qua ba phiên bản." | [#73323](https://github.com/openclaw/openclaw/issues/73323) |
| **Hộp đen trạng thái phiên** | "Agent không thể cảm nhận tỷ lệ sử dụng cửa sổ ngữ cảnh, việc nén ngoài ý muốn dẫn đến mất trạng thái, chỉ có thể chấp nhận một cách thụ động." | [#2597](https://github.com/openclaw/openclaw/issues/2597) |
| **Phân mảnh hệ sinh thái plugin** | "Plugin WeChat 2.4.1 không tương thích với API phiên bản mới, nâng cấp là bị lỗi, không có đường dẫn di chuyển suôn sẻ." | [#78232](https://github.com/openclaw/openclaw/issues/78232) |
| **Tiếng ồn của Agent phụ** | "Bước thông báo của sessions_spawn thường xuyên xuất ra bản tóm tắt không liên quan, cách duy nhất để ngăn chặn là mô hình tình cờ xuất ANNOUNCE_SKIP." | [#8299](https://github.com/openclaw/openclaw/issues/8299) |
| **Rào cản biên dịch trên thiết bị di động** | "Mã nguồn Android có trong kho lưu trữ, nhưng không có APK được tạo sẵn, người dùng phổ thông không thể cài đặt trực tiếp." | [#9443](https://github.com/openclaw/openclaw/issues/9443) |

### Tín hiệu mức độ hài lòng
- Sửa lỗi chủ đề Feishu nhận được lời cảm ơn của người dùng (#78262 trích dẫn "Cảm ơn @joeyzenghuan")
- Bản cập nhật nháp luồng Telegram (#38066) đã đóng, cho thấy việc theo đuổi trải nghiệm gốc được công nhận.

---

## 8. Tồn đọng cần xử lý

### Cần sự chú ý đặc biệt từ người bảo trì

| Issue/PR | Ngày tạo | Cập nhật lần cuối | Số ngày tồn đọng | Mô tả rủi ro |
|:---|:---|:---|:---|:---|
| [#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) | 2026-01-01 | 2026-05-06 | **126 ngày** | 74 👍, yêu cầu cốt lõi về sự công bằng đa nền tảng, không có người phụ trách, không có cột mốc |
| [#2597 Mất trạng thái ngữ cảnh](https://github.com/openclaw/openclaw/issues/2597) | 2026-01-27 | 2026-05-06 | **100 ngày** | 8 bình luận, trải nghiệm cơ bản về quản lý ngữ cảnh, liên quan đến yêu cầu hoàn nguyên #9986 |
| [#6731 Safe/Unsafe ClawdBot](https://github.com/openclaw/openclaw/issues/6731) | 2026-02-02 | 2026-05-06 | **94 ngày** | 12 bình luận, đề xuất viết lại bằng Rust, thảo luận kiến trúc chế độ an toàn, cần quyết định kỹ thuật |
| [#8719 Cấu hình bảo mật v1.1](https://github.com/openclaw/openclaw/issues/8719) | 2026-02-04 | 2026-05-06 | **92 ngày** | 6 bình luận, 3 👍, thiết kế mô hình bảo mật sản xuất, có thể tích hợp với phê duyệt MCP #78308 |
| [#1210 Hình ảnh base64 Discord bị phình to](https://github.com/openclaw/openclaw/issues/1210) | 2026-01-19 | 2026-05-06 | **108 ngày** | 6 bình luận, hiệu quả lưu trữ bản ghi cuộc trò chuyện, ảnh hưởng đến độ ổn định của các cuộc trò chuyện dài |

### Nút thắt cổ chai trong đánh giá PR

| PR | Khối lượng | Số ngày chờ | Rủi ro chặn |
|:---|:---|:---:|:---|
| [#78558 Cắt tỉa bề mặt mã tạo/nhà cung cấp](https://github.com/openclaw/openclaw/pull/78558) | XL | 1 | Tái cấu trúc thử nghiệm, phạm vi ảnh hưởng rộng, cần đánh giá kiến trúc |
| [#78317 API riêng tư iMessage](https://github.com/openclaw/openclaw/pull/78317) | XL | 1 | Mã được hỗ trợ bởi AI, cần kiểm toán bảo mật |
| [#73261 Làm tắc nghẽn nhà cung cấp đích](https://github.com/openclaw/openclaw/pull/73261) | XL | 9 | Lộ trình hiệu suất quan trọng, chưa được giải quyết trong thời gian dài |
| [#71817 Sửa lỗi suy luận Telegram/Feishu](https://github.com/openclaw/openclaw/pull/71817) | L | 12 | Chức năng cốt lõi của kênh, tính nhất quán đa nền tảng |

---

**Thời gian tạo báo cáo hàng ngày**: 2026-05-07
**Nguồn dữ liệu**: [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)
**Đề xuất tiếp theo**: Chú ý đến tỷ lệ áp dụng của v2026.5.6 và #

---

## So sánh ngang hệ sinh thái

# Phân tích so sánh ngang hệ sinh thái trợ lý AI cá nhân/AI tự động | 2026-05-07

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái mã nguồn mở trợ lý AI cá nhân đang ở một **bước ngoặt quan trọng từ "chức năng khả dụng" sang "sản xuất đáng tin cậy"**. OpenClaw duy trì vị thế dẫn đầu tuyệt đối với quy mô hoạt động hàng ngày 500 Issue/500 PR, nhưng sự cố phá vỡ cấu hình `doctor --fix` của v2025.5.5 đã làm lộ ra khoảng trống trong kiểm soát chất lượng của công cụ tự động hóa; IronClaw khởi động tái cấu trúc kiến trúc "Reborn", chuyển từ đơn thể sang dịch vụ phân lớp, đại diện cho các dự án có nợ kỹ thuật nặng bắt đầu cải cách cơ bản; Moltis, CoPaw, LobsterAI và các dự án khác trong đội thứ hai tập trung vào sự sẵn sàng cho doanh nghiệp (bảo mật, kiểm toán, đa người thuê), trong khi NanoBot, ZeroClaw khám phá không gian khác biệt với định vị "nhẹ/biên". Tổng thể cho thấy một mô hình ba lớp: **đầu tàu củng cố cơ sở hạ tầng, phần giữa cạnh tranh các tình huống doanh nghiệp và phần cuối khám phá các phân khúc dọc**.

---

## 2. So sánh hoạt động của từng dự án

| Dự án | Issues (24h) | PR (24h) | PR chờ hợp nhất | Phát hành | Đánh giá sức khỏe |
|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 (mới/hoạt động 291, đóng 209) | 500 (chờ hợp nhất 358, đã hợp nhất 142) | 358 | v2026.5.6 (sửa lỗi nóng khẩn cấp) | ⚠️ **Hoạt động cao, rủi ro cao** — Lặp lại cực nhanh nhưng băng thông đánh giá rất thiếu, sửa lỗi khẩn cấp liên tục lộ ra khoảng trống QA |
| **IronClaw** | 39 (30/9) | 46 (21/25) | 21 | Không có | 🟡 **Thời kỳ tái cấu trúc kiến trúc** — Kỹ thuật di chuyển Reborn khối lượng lớn, thiết kế dày đặc nhưng sự tham gia bên ngoài hạn chế |
| **ZeroClaw** | 50 (45/5) | 50 (38/12) | 38 | Không có | 🔴 **Hoạt động cao, lỗi cao** — Mất dữ liệu S0 + Lỗi cô lập đa proxy P0, khủng hoảng độ ổn định |
| **CoPaw** | 41 (24/17) | 26 (12/14) | 12 | v1.1.5.post2 | 🟢 **Thời kỳ củng cố chất lượng** — Phản ứng nhanh với các bản sửa lỗi, cột mốc quản lý kỹ năng CLI được đạt được, hàng đợi chờ hợp nhất có thể kiểm soát |
| **LobsterAI** | ~1 (thiếu dữ liệu) | 29 (0/29) | 0 | Không có | 🟢 **Giao hàng hiệu quả** — Không có tồn đọng chờ hợp nhất, nhưng lỗ hổng bảo mật nghiêm trọng 24h không phản hồi là một mối nguy |
| **Moltis** | 4 (3/1) | 9 (0/9) | 0 | Không có | 🟢 **Lặp lại tinh gọn** — Tỷ lệ đóng vòng lặp 100%, các vấn đề cốt lõi như an toàn đồng thời của sandbox được sửa lỗi nhanh chóng |
| **PicoClaw** | 21 (14/7) | 62 (42/20) | 42 | v0.2.8-nightly | ⚠️ **Hoạt động cao, tồn đọng cao** — Bản dựng ban đêm thường xuyên, nhưng 42 PR chờ hợp nhất + 2 vấn đề cấp sản xuất không có giải pháp sửa lỗi |
| **Hermes Agent** | 50 (42/8) | 50 (43/7) | 43 | Không có | 🟡 **Thời kỳ dọn dẹp tồn đọng** — Đóng nhiều Issue nhưng khối lượng hợp nhất thấp, 43 PR chờ hợp nhất báo trước cửa sổ hợp nhất tập trung |
| **NanoBot** | 16 (7/9) | 37 (20/17) | 20 | Không có | 🟡 **Rủi ro hồi quy** — 4 PR lặp lại cùng một vấn đề trong Runtime Context, kiểm tra bao phủ có khoảng trống |
| **NanoClaw** | 4 (4/0) | 25 (22/3) | 22 | Không có | 🟢 **Hoàn tất di chuyển** — Ma sát di chuyển v2 tiếp tục được loại bỏ, 6 PR liên tiếp về UX Slack cho thấy hướng ưu tiên trải nghiệm |
| **NullClaw** | 0 | 1 (1/0) | 1 | Không có | 🔴 **Ngừng hoạt động để tích lũy năng lượng** — Phát triển 1 PR trong 30 ngày, không có tương tác cộng đồng, rủi ro bus factor cực cao |
| **TinyClaw** | 0 | 0 | 0 | Không có | ⚫ **Ngủ đông** |
| **ZeptoClaw** | 0 | 0 | 0 | Không có | ⚫ **Ngủ đông** |

---

## 3. Vị thế của OpenClaw trong hệ sinh thái

### Ưu điểm cốt lõi
| Chiều | Biểu hiện cụ thể |
|:---|:---|
| **Quy mô hệ sinh thái** | Hoạt động hàng ngày 500 Issues + 500 PR gấp 10 lần so với dự án có hoạt động cao tiếp theo (ZeroClaw), phạm vi kênh đầy đủ nhất (Telegram/Feishu/Discord/WeChat/Teams/LINE, v.v.) |
| **Độ sâu tích hợp doanh nghiệp** | Sửa lỗi luồng Feishu, gửi chủ động MS Teams, chiến lược DM LINE, v.v. cho thấy sự thích ứng tinh chỉnh với quy trình làm việc của B-end |
| **Chuỗi công cụ tự động hóa** | Mặc dù `doctor --fix` gặp sự cố, nhưng khái niệm "cấu hình dưới dạng mã + sửa lỗi tự động" đi đầu, cơ chế hoàn nguyên của v2026.5.6 phản ứng nhanh |

### Sự khác biệt về tuyến công nghệ
| Mục so sánh | OpenClaw | Đối thủ cạnh tranh điển hình |
|:---|:---|:---|
| **Triết lý kiến trúc** | Đơn thể + mở rộng plugin, tách biệt Gateway-Runtime | IronClaw hướng tới vi dịch vụ hóa Reborn; Moltis nhấn mạnh cô lập sandbox |
| **Mô hình cấu hình** | Trung tâm hóa JSON, điều khiển bằng công cụ di chuyển tự động | ZeroClaw thúc đẩy tái cấu trúc cấu hình family có kiểu; NanoClaw di chuyển từ kỹ năng v1 sang kiến trúc v2 |
| **Ranh giới bảo mật** | Cô lập mô hình cấp độ định tuyến OAuth + luồng phê duyệt | Sandbox Docker/Podman của Moltis + giải phong tự động Vault an toàn hơn khi chạy; CoPaw có hồ sơ sửa lỗi lỗ hổng duyệt qua thư mục Windows |

### So sánh quy mô cộng đồng
- **Quy mô tuyệt đối**: OpenClaw > Hermes Agent ≈ ZeroClaw > các dự án khác (chênh lệch 10 lần)
- **Độ sâu tham gia**: Issue #75 của OpenClaw về ứng dụng máy tính Linux/Windows đã 126 ngày không có người phụ trách, 74 👍 không phản hồi, cho thấy **phạm vi rộng nhưng băng thông của người bảo trì cốt lõi bị tắc nghẽn**; Moltis có 5 PR trong một ngày nhưng tỷ lệ đóng 100%, cho thấy **hiệu quả cao của đội ngũ nhỏ**
- **Người đóng góp bên ngoài**: 4 PR `first-time-contributor` của CoPaw, loạt UX Slack của alipgoldberg cho thấy **đóng góp tối ưu hóa trải nghiệm hoạt động sôi nổi**

---

## 4. Các hướng công nghệ được quan tâm chung

| Hướng công nghệ | Dự án liên quan | Yêu cầu cụ thể | Mức độ khẩn cấp |
|:---|:---|:---|:---|
| **Tương thích mô hình suy luận (reasoning_content)** | NanoBot, Moltis, CoPaw, PicoClaw | Yêu cầu trả lại nội dung chuỗi suy luận của các mô hình DeepSeek V4 / Claude / GPT-5.5, bị mất sau nhiều lượt hội thoại dẫn đến lỗi API hoặc gián đoạn cuộc trò chuyện | 🔴 Cao |
| **Cô lập đa proxy/Agent phụ** | OpenClaw, ZeroClaw, PicoClaw | Truyền quyền `sessions_spawn`, nhầm lẫn vai trò, trạng thái chia sẻ phiên kênh bị hỏng, từ "có thể đồng thời" đến "cô lập chính xác" | 🔴 Cao |
| **Tái cấu trúc hệ thống cấu hình** | ZeroClaw (v0.8.0), NanoClaw (v2), IronClaw (Reborn) | Từ hành vi ma thuật ẩn đến cấu hình có kiểu rõ ràng, giải quyết ánh xạ biến môi trường, hợp nhất thông tin xác thực, ma sát di chuyển | 🟡 Trung-cao |
| **Tích hợp hệ sinh thái MCP** | OpenClaw, PicoClaw, NanoClaw, CoPaw | Truyền HTTP có thể truyền phát, phong bì phê duyệt, tiêu chuẩn hóa bộ công cụ, từ thử nghiệm đến cấp sản xuất | 🟡 Trung-cao |
| **Sandbox/An toàn thực thi** | Moltis, LobsterAI, CoPaw | Cạnh tranh khởi động đồng thời Docker, lỗ hổng duyệt qua thư mục, danh sách chặn phê duyệt exec, ranh giới an toàn thực thi tự động của Agent | 🟡 Trung-cao |
| **Độ ổn định của cuộc trò chuyện dài** | OpenClaw, CoPaw, NanoBot | Nén ngữ cảnh không thành công, dấu thời gian tin nhắn bị sai lệch, hết thời gian chờ khóa phiên lan truyền, ảnh hưởng đến các tác vụ liên tục kéo dài hơn vài giờ | 🟡 Trung bình |
| **Công bằng đa nền tảng** | OpenClaw (#75), Hermes Agent (#20782, #20927), LobsterAI (#1891) | Thiếu ứng dụng máy tính Windows/Linux, dấu phân cách thư mục, sự khác biệt mô hình quyền, sự bất mãn lâu dài của người dùng không phải macOS | 🟡 Trung bình |
| **Phát hành/vận hành tự động** | ZeroClaw (v0.7.5), IronClaw (khôi phục quy trình làm việc Docker), LobsterAI (luân chuyển nhật ký) | Từ bump thủ công đến đường ống CI/CD, dấu hiệu trưởng thành của triển khai không giám sát | 🟢 Trung-thấp |

---

## 5. Phân tích định vị khác biệt

| Dự án | Trọng tâm chức năng cốt lõi | Người dùng mục tiêu | Sự khác biệt chính về kiến trúc công nghệ |
|:---|:---|:---|:---|
| **OpenClaw** | Trung tâm định tuyến mô hình + tích hợp toàn kênh doanh nghiệp | CNTT doanh nghiệp vừa và lớn, người vận hành đa kênh | Đơn thể Node.js + tách Gateway-Runtime, thích ứng kênh theo plugin |
| **IronClaw** | Vòng lặp Agent bền vững có thể xác minh (TurnCoordinator) | Các tình huống tài chính/chính phủ yêu cầu kiểm toán và tuân thủ | Dịch vụ phân lớp Rust (Reborn), nhiều bộ sao lưu libSQL/PostgreSQL, nhấn mạnh chứng minh tính đúng đắn |
| **Moltis** | Máy chủ AI cá nhân được sandbox hóa an toàn | Người dùng nhạy cảm về quyền riêng tư, người dùng tự lưu trữ | Elixir/BEAM, sandbox Docker/Podman, quản lý khóa Vault, giao thức nhận dạng phi tập trung |
| **CoPaw** | Trợ lý AI trên máy tính với rào cản thấp | Người dùng cá nhân, triển khai doanh nghiệp nhẹ | Kiến trúc giống plugin VS Code, quản lý thị trường kỹ năng + CLI theo hai đường, ứng dụng máy tính Electron |
| **ZeroClaw** | Kênh có thể mở rộng tối đa + ma trận nhà cung cấp | Geek công nghệ, người thử nghiệm đa mô hình | Rust + WASM runtime plugin, kiến trúc "mọi thứ đều là plugin", nhà cung cấp độc lập llama.cpp |
| **NanoBot** | Mã nhẹ ~4000 dòng để triển khai biên | Nhà phát triển di động/nhúng, tạo mẫu nhanh | Cốt lõi Python tối giản, hệ thống bộ nhớ Dream, nhấn mạnh khối lượng mã có thể kiểm toán |
| **PicoClaw** | Tích hợp IM tối ưu hóa ngữ cảnh tiếng Trung | Người dùng WeChat/DingTalk doanh nghiệp Trung Quốc | Go triển khai, thích ứng sâu WeChat/DingTalk, xác minh biên bộ nhớ MCP Engram |
| **LobsterAI** | Quy trình làm việc AI trong hệ sinh thái Netease Youdao | Người dùng sản phẩm Youdao, người làm việc tri thức tiếng Trung | Tích hợp plugin OpenClaw, hệ sinh thái độc quyền sau khi động cơ yd_cowork ngừng hoạt động |
| **Hermes Agent** | Công cụ dành cho nhà phát triển ưu tiên TUI | Người dùng nặng CLI, lập trình viên | Ink (React cho CLI), tích hợp quy trình công việc Kanban, nghiên cứu CodeAct |
| **NanoClaw** | Mở rộng hội thoại dựa trên kỹ năng (skill) | Người dùng không chuyên về công nghệ mở rộng khả năng thông qua ngôn ngữ tự nhiên | Kiến trúc v2 được định hình, liên kết sản phẩm thương mại baget.ai, bộ công cụ MCP Tier 1 |
| **NullClaw** | Lập lịch tự động hóa không giám sát | Vận hành cơ sở hạ tầng, tác vụ định kỳ | Phát triển điểm duy nhất, proxy phụ cron + khả năng quan sát lịch sử chạy, cộng đồng cần kích hoạt |

---

## 6. Mức độ phổ biến của cộng đồng và mức độ trưởng thành

### Giai đoạn lặp lại nhanh (hoạt động hàng ngày 30+, tập trung vào mở rộng chức năng)
| Dự án | Đặc điểm | Rủi ro |
|:---|:---|:---|
| **OpenClaw** | Thích ứng kênh dày đặc, liên tục phát hiện các trường hợp biên định tuyến mô hình | Nút thắt cổ chai băng thông đánh giá, tỷ lệ lỗi hồi quy tăng |
| **ZeroClaw** | 8 nhà cung cấp mới + 4 kênh mới mở rộng trong một ngày | Tích lũy lỗi S0/P0, nợ kiến trúc có thể tăng theo cấp số nhân với quy mô |
| **PicoClaw** | Bản dựng ban đêm thường xuyên, bổ sung nhanh lớp Nhà cung cấp | 42 PR chờ hợp nhất, phản ứng chậm với các vấn đề cấp sản xuất |

### Giai đoạn củng cố chất lượng (tỷ lệ đóng vòng lặp cao, ưu tiên độ ổn định)
| Dự án | Đặc điểm | Sự kiện mang tính biểu tượng |
|:---|:---|:---|
| **CoPaw** | Sửa lỗi nóng v1.1.5.post2, cột mốc CLI kỹ năng | Yêu cầu #4053 đóng 38 ngày, #3955 phản ứng nhanh với lỗ hổng bảo mật |
| **Moltis** | 100% đóng lỗi, penso dẫn đầu sửa lỗi tinh gọn | Sửa lỗi cạnh tranh sandbox #971, tương thích DeepSeek #961 sửa lỗi trong ngày |
| **LobsterAI** | Hợp nhất 29 PR không tồn đọng tập trung | Nhưng #1885 lỗ hổng nghiêm trọng 24h không phản hồi cho thấy thiếu SLA bảo mật |

### Giai đoạn tái cấu trúc kiến trúc (khối lượng công việc lớn, ít hiển thị bên ngoài)
| Dự án | Đặc điểm | Yếu tố chặn chính |
|:---|:---|:---|
| **IronClaw** | Reborn chuyển từ thiết kế sang mã, ba crate song song | TurnCoordinator #3013 là bộ chặn cắt, 6 Issue hạ nguồn đang chờ |
| **NanoClaw** | Hoàn tất di chuyển v2, loại bỏ kỹ năng `/claw` | Ma sát liên tục như thay đổi tên khóa biến môi trường không được gợi ý rõ ràng (#2294) |

### Giai đoạn đình trệ/tích lũy năng lượng
| Dự án | Trạng thái | Đề xuất |
|:---|:---|:---|
| **NullClaw** | 1 PR trong 30 ngày, không tương tác cộng đồng | Chia nhỏ bản phát hành, kích hoạt Thảo luận, tuyển dụng người đánh giá |
| **TinyClaw, ZeptoClaw** | 24h không hoạt động | Cần đánh giá tính bền vững của dự án |

---

## 7. Tín hiệu xu hướng đáng chú ý

### Tín hiệu 1: Mô hình suy luận buộc phải cải tạo toàn bộ quy trình
> **"Yêu cầu trả lại `reasoning_content` của DeepSeek V4"** xuất hiện đồng thời trên NanoBot, Moltis, CoPaw, PicoClaw, và NanoBot sau khi sửa lỗi một phần #3584 vẫn tái phát #3665.

**Giá trị cho nhà phát triển**: Mô hình chuỗi suy luận không chỉ đơn giản là "thay thế mô hình", mà yêu cầu sự thích ứng toàn bộ quy trình của mẫu lời nhắc, định dạng tin nhắn, và máy trạng thái đa lượt. Nên dự phòng một lớp trừu tượng cho các trường như `reasoning_content` / `thinking` / `redacted_thinking` trong giai đoạn thiết kế, thay vì mã hóa cứng vào một nhánh mô hình duy nhất.

---

### Tín hiệu 2: Từ "an toàn chức năng" đến "an toàn chuỗi cung ứng"
> **Moltis #975** bản vá OpenSSL, **LobsterAI #1885** duyệt qua thư mục, **NanoClaw #2004** ranh giới tin cậy của trình cài đặt kênh, **CoPaw #3955** duyệt qua tệp Windows.

**Giá trị cho nhà phát triển**: Lỗ hổng của framework Agent mở rộng từ các ứng dụng web truyền thống sang chuỗi hoàn chỉnh của "đầu ra LLM → thực thi công cụ → hệ thống tệp/mạng". Nên thiết lập:
- Danh sách trắng đường dẫn cho lệnh gọi công cụ + lọc `path.basename()`
- Sandbox thực thi mã được tạo bởi LLM (không chỉ đơn giản là exec)
- Quét bảo mật tự động các thư viện phụ thuộc (ngoài Dependabot cần SCA)

---

### Tín hiệu 3: Khủng hoảng phức tạp của "cấu hình dưới dạng mã"
> **OpenClaw #78407** di chuyển sai `doctor --fix`, **ZeroClaw #6416** yêu cầu kiểm tra trước không tương thích cấu hình-nhà cung cấp, **NanoClaw #2294** tên khóa biến môi trường bị hỏng im lặng, **IronClaw #3132** không khớp loại đầu ra LLM.

**Giá trị cho nhà phát triển**: Người dùng không còn hài lòng với "có thể cấu hình", mà yêu cầu "định vị nhanh khi cấu hình sai". Nên:
- Chuyển đổi tham số bắt buộc nhận biết lược đồ (không chuyển tiếp ký tự)
- Chế độ dry-run cho công cụ `onboard` / `doctor`
- Di chuyển tương thích ngược các thay đổi cấu hình + khai báo phiên bản hóa

---

### Tín hiệu 4: Kiến trúc đa proxy từ "trình diễn" sang "sản xuất"
> **ZeroClaw #6487** bộ chặn P0 (che lấp lẫn nhau các phiên kênh đa bí danh), **PicoClaw #2775** nhầm lẫn vai trò Agent phụ, **OpenClaw #78441** chuyển tiếp `toolsAllow`, **NanoBot #3639** đề xuất giao thức tin cậy giữa các Agent.

**Giá trị cho nhà phát triển**: Đa Agent không còn là giả thuyết "một Agent chính gọi một vài công cụ", mà cần:
- Cô lập danh tính (cặp khóa Ed25519, giao thức L1/L2)
- Cô lập tài nguyên (thư mục `state_dir` riêng, `ChannelRuntimeContext` không chia sẻ)
- Chuỗi ủy quyền quyền (chuyển tiếp rõ ràng `toolsAllow` thay vì kế thừa ẩn)

---

### Tín hiệu 5: Khoảng trống "cơ sở hạ tầng tin cậy" cho triển khai biên/nhẹ
> **NanoBot #3639** giao thức danh tính Agent đóng, **Moltis #973** giao thức tương tác giữa các phiên, **NanoBot** định vị bản thân với mã ~4000 dòng.

**Giá trị cho nhà phát triển**: Khi Agent di chuyển từ SaaS đám mây sang điện thoại/bộ định tuyến/máy điều khiển công nghiệp, sự căng thẳng giữa "nhẹ" và "đáng tin cậy" ngày càng rõ rệt. Nên chú ý:
- Tích hợp tối thiểu mô-đun bảo mật phần cứng (HSM) hoặc TEE
- Triển khai nhẹ định danh phi tập trung (DID) trên các thiết bị có tài nguyên hạn chế
- Cân bằng giữa khối lượng mã và khả năng kiểm toán (câu chuyện ~4000 dòng của NanoBot)

---

**Thời gian tạo báo cáo**: 2026-05-07
**Phạm vi dữ liệu**: Dữ liệu công khai của 12 dự án mã nguồn mở
**Đề xuất chú ý**: Tiến độ của bộ chặn P0 #6487 của ZeroClaw, tỷ lệ áp dụng của OpenClaw v2026.5.6, thời điểm cắt giảm của IronClaw Reborn

---

## Báo cáo chi tiết dự án cùng loại

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Nhật báo về tiến độ dự án NanoBot | 2026-05-07

> **Dự án**: HKUDS/nanobot | **Ngày**: 2026-05-07 | **Chu kỳ phân tích**: 24 giờ qua

---

## 1. Tổng quan nhanh hôm nay

NanoBot hôm nay thể hiện **xu hướng lặp lại cường độ cao**: trong vòng 24 giờ, 16 bản cập nhật Issue (7 mới/hoạt động, 9 đã đóng) và 37 bản cập nhật PR (20 chờ hợp nhất, 17 đã hợp nhất/đã đóng), không có bản phát hành mới nào. Trọng tâm cộng đồng tập trung vào **sự cố hồi quy của Runtime Context về rò rỉ gợi ý** (T3chC0wb0y đã gửi 4 PR liên quan liên tục), **khả năng tương thích với các mô hình quốc gia/tiên tiến như DeepSeek/Codex**, và **độ ổn định của MCP/tầng kênh**. WebUI và lớp kênh (WeChat, WhatsApp, Matrix) đã nhận được các bản sửa lỗi dày đặc, sức khỏe tổng thể của dự án tốt, nhưng cơ chế bộ nhớ đệm gợi ý của nhánh nightly có rủi ro hồi quy cần theo dõi liên tục.

---

## 2. Phát hành phiên bản

**Không có bản phát hành mới**. Phiên bản mới nhất vẫn là `v0.1.5.post3` (tham khảo báo cáo người dùng #3618).

---

## 3. Tiến độ dự án

### Các PR quan trọng đã hợp nhất/đóng hôm nay (17 mục)

| PR | Tác giả | Đóng góp cốt lõi | Issue liên quan |
|:---|:---|:---|:---|
| [#3669](https://github.com/HKUDS/nanobot/pull/3669) [ĐÃ ĐÓNG] | T3chC0wb0y | Sửa lỗi Runtime Context ephemeral (nhánh nightly, giữ lại bộ nhớ đệm prompt để tái sử dụng) | #3670, #2132 |
| [#3668](https://github.com/HKUDS/nanobot/pull/3668) [ĐÃ ĐÓNG] | T3chC0wb0y | Tương tự, phương án thay thế | #3670 |
| [#3666](https://github.com/HKUDS/nanobot/pull/3666) [ĐÃ ĐÓNG] | T3chC0wb0y | Loại bỏ phòng thủ Runtime Context khỏi CLI/lịch sử/đường dẫn lưu | #2132 |
| [#3660](https://github.com/HKUDS/nanobot/pull/3660) [ĐÃ ĐÓNG] | Jefsky | Đồng bộ hoàn nguyên `.dream_cursor` khi khôi phục bộ nhớ Dream | [#3657](https://github.com/HKUDS/nanobot/issues/3657) |
| [#3661](https://github.com/HKUDS/nanobot/pull/3661) [ĐÃ ĐÓNG] | Re-bin | Hoàn thiện trải nghiệm trò chuyện WebUI: kiểu dáng thanh bên, nhóm tìm kiếm, tạo tiêu đề cuộc trò chuyện không đồng bộ | — |
| [#3659](https://github.com/HKUDS/nanobot/pull/3659) [ĐÃ ĐÓNG] | chengyongru | Kênh WeChat: Ném ngoại lệ khi gửi thất bại, ngăn chặn tin nhắn bị mất im lặng | — |
| [#3658](https://github.com/HKUDS/nanobot/pull/3658) [ĐÃ ĐÓNG] | chengyongru | Tăng cường bảo mật khởi động WebUI LAN: liên kết `0.0.0.0` yêu cầu bắt buộc `token_issue_secret` | [#3656](https://github.com/HKUDS/nanobot/pull/3656) |
| [#3656](https://github.com/HKUDS/nanobot/pull/3656) [ĐÃ ĐÓNG] | chengyongru | Cho phép truy cập LAN khi liên kết `0.0.0.0` trên WebUI (sau đó được tăng cường bảo mật bởi #3658) | — |
| [#3646](https://github.com/HKUDS/nanobot/pull/3646) [ĐÃ ĐÓNG] | chengyongru | Chuyển giọng nói sang văn bản: thử lại lỗi thoáng qua Whisper (hồi giảm theo hàm mũ 502/503) | — |
| 8 mục khác | — | Bảo trì và đóng thông thường | — |

**Đánh giá tiến độ tổng thể**: PR được hợp nhất hôm nay bao gồm **vòng lặp proxy cốt lõi (cô lập Runtime Context)**, **tính nhất quán của hệ thống bộ nhớ (Dream cursor)**, **độ tin cậy của kênh đa kênh (xử lý ngoại lệ WeChat)**, và **sản phẩm hóa WebUI (UX + mô hình bảo mật)**, thuộc về ngày lặp lại chức năng cường độ cao + tăng cường độ ổn định.

---

## 4. Điểm nóng cộng đồng

### Các vấn đề thảo luận sôi nổi nhất

| Hạng mục | Issue/PR | Số bình luận | Phân tích mức độ phổ biến |
|:---|:---|:---:|:---|
| 🔥 1 | [#3618](https://github.com/HKUDS/nanobot/issues/3618) [ĐÃ ĐÓNG] Lỗi 403 về khả năng khả dụng của mô hình khu vực | **11 bình luận** | **Sự cố P0 môi trường sản xuất**: NanoBot của người dùng `bigsinger` bị dừng từ ngày 25 tháng 4 đến ngày 4 tháng 5 do giới hạn khu vực của Zhipu GLM, cuối cùng đã được khôi phục bằng cách hạ cấp bản sao lưu. Lộ ra điểm yếu cốt lõi: **thiếu cơ chế chịu lỗi cho các thay đổi chính sách khu vực của nhà cung cấp mô hình**, người dùng không có đường dẫn dự phòng tự động, thông báo lỗi không hướng dẫn thay đổi cấu hình. |
| 2 | [#3639](https://github.com/HKUDS/nanobot/issues/3639) [ĐÃ ĐÓNG] Đề xuất về danh tính Agent + giao thức đăng ký tin cậy giữa các Agent | **3 bình luận** | **Đề xuất cấp kiến trúc**: Đề xuất giao thức Lớp 2 dựa trên Ed25519, nhắm đến mã ~4000 dòng nhẹ của NanoBot trong việc triển khai quy mô lớn trên thiết bị di động/biên với cơ sở hạ tầng tin cậy. Mặc dù đã đóng, nhưng nó cung cấp tín hiệu cho lộ trình dài hạn của dự án. |
| 3 | [#3665](https://github.com/HKUDS/nanobot/issues/3665) [MỞ] Lỗi trả lại reasoning_content của DeepSeek v4 | **1 bình luận** | **Tiên phong về khả năng tương thích mô hình**: Mô hình mới DeepSeek yêu cầu phải trả lại `reasoning_content` ở chế độ thinking, NanoBot đã mất trường này sau nhiều lượt. Cùng nguyên nhân gốc rễ với [#3584](https://github.com/HKUDS/nanobot/issues/3584) đã đóng nhưng với các tình huống khác nhau, **việc sửa lỗi có thể chưa bao phủ toàn bộ quy trình**. |
| 4 | [#3638](https://github.com/HKUDS/nanobot/issues/3638) [ĐÃ ĐÓNG] Rò rỉ CPU 100% trong MCP streamable_http_client | **1 bình luận** | **Độ ổn định của tính toán biên**: `AgentLoop.close_mcp()` không thể dọn dẹp kết nối một cách gọn gàng, dẫn đến vòng lặp sự kiện `anyio.CancelScope` bị cô lập chạy vòng vòng. Được gắn nhãn `good first issue`, người đóng góp cộng đồng `LZDQ` đã phát hiện nó từ dự án riêng của mình `nanobot-soulboard`. |

**Tổng hợp yêu cầu**: Nỗi lo lắng cốt lõi của người dùng tập trung vào **"khả năng phục hồi khi nhà cung cấp mô hình bị khóa/thay đổi"**, **"rò rỉ tài nguyên trong các tình huống biên"**, và **"tốc độ thích ứng với các tính năng mô hình mới"**.

---

## 5. Lỗi và độ ổn định

### Sắp xếp theo mức độ nghiêm trọng

| Mức độ nghiêm trọng | Issue | Trạng thái | Mô tả | PR Sửa lỗi |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#3618](https://github.com/HKUDS/nanobot/issues/3618) | ✅ Đã đóng | Mô hình khu vực 403 dẫn đến dịch vụ hoàn toàn không khả dụng (lỗi liên tục từ 4/25 đến 5/4) | Không có (người dùng tự hạ cấp) |
| 🔴 **Critical** | [#3638](https://github.com/HKUDS/nanobot/issues/3638) | ✅ Đã đóng | Bộ hủy bỏ phạm vi hủy bỏ của MCP HTTP client không khớp → rò rỉ CPU 100% | Cần xác nhận PR hợp nhất |
| 🟡 **High** | [#3665](https://github.com/HKUDS/nanobot/issues/3665) | 🔴 Mở | DeepSeek v4-flash bị mất reasoning_content sau nhiều lượt | Không có (một phần sửa lỗi bởi [#3584](https://github.com/HKUDS/nanobot/issues/3584)) |
| 🟡 **High** | [#3670](https://github.com/HKUDS/nanobot/issues/3670) | 🔴 Mở | Lỗi thời gian chạy sao lưu trong nhánh nightly Runtime Context rò rỉ vào lịch sử bền vững | [#3671](https://github.com/HKUDS/nanobot/pull/3671) Chờ hợp nhất |
| 🟡 **High** | [#3633](https://github.com/HKUDS/nanobot/issues/3633) | 🔴 Mở | GPT-5.5 (Codex) lỗi ID mục lặp lại dẫn đến gián đoạn cuộc trò chuyện | Không có |
| 🟡 **High** | [#3649](https://github.com/HKUDS/nanobot/pull/3649) | 🔴 Mở | Lỗ hổng tiềm ẩn nguy hiểm về việc chèn mã `exec()` tại `server.py:210` (V-003) | [#3649](https://github.com/HKUDS/nanobot/pull/3649) Chờ xem xét |
| 🟢 **Medium** | [#3637](https://github.com/HKUDS/nanobot/issues/3637) | 🔴 Mở | Cấu hình chuyển mã Groq không rõ ràng, logic nối `apiBase` dễ sai | [#3663](https://github.com/HKUDS/nanobot/pull/3663) Chờ hợp nhất |
| 🟢 **Medium** | [#3605](https://github.com/HKUDS/nanobot/issues/3605) | ✅ Đã đóng | Safety guard im lặng loại bỏ lượt, người dùng không biết | Đã sửa |
| 🟢 **Medium** | [#3625](https://github.com/HKUDS/nanobot/issues/3625) | ✅ Đã đóng | Gửi tin nhắn từng token trên kênh WhatsApp (tăng dần tiến độ OpenAI Codex) | Đã sửa |
| 🟢 **Medium** | [#3597](https://github.com/HKUDS/nanobot/issues/3597) | ✅ Đã đóng | Nhầm lẫn truy cập thư mục gốc của không gian làm việc | Đã sửa |

**Cảnh báo hồi quy**: Các bản sửa lỗi liên quan đến `Runtime Context` (#3666/#3668/#3669/#3671) cho thấy **nhánh nightly có nhiều lần lặp lại cùng một vấn đề**, cho thấy quy trình kiểm tra hoặc xem xét mã có khoảng trống. T3chC0wb0y đã gửi 4 PR liên quan trong 24 giờ (3 đóng, 1 mở), cho thấy các giải pháp sửa lỗi vẫn đang hội tụ.

---

## 6. Yêu cầu chức năng và tín hiệu lộ trình

| Yêu cầu chức năng | Issue/PR | Khả năng đưa vào | Phân tích |
|:---|:---|:---:|:---|
| [#3652](https://github.com/HKUDS/nanobot/issues/3652) Công tắc tắt hoàn toàn Dream | Tăng cường cấu hình | ⭐⭐⭐⭐⭐ | **Khả năng đưa vào cao** đến cao. Đã có PR [#3591](https://github.com/HKUDS/nanobot/pull/3591) chờ hợp nhất để thực hiện "kiểm soát phạm vi cập nhật", bao gồm tùy chọn tắt Dream, yêu cầu và triển khai đã được căn chỉnh. |
| [#3650](https://github.com/HKUDS/nanobot/issues/3650) Tên bot và biểu tượng tùy chỉnh | Cá nhân hóa thương hiệu | ⭐⭐⭐⭐☆ | **Khả năng cao** đến trung bình. Điều khiển bằng cấu hình (`botName`/`botIcon`), chi phí triển khai thấp, nhu cầu cá nhân hóa của người dùng rõ ràng. |
| [#3647](https://github.com/HKUDS/nanobot/issues/3647) Ước tính token prompt của tokenizer cục bộ | Khả năng ngoại tuyến | ⭐⭐⭐⭐⭐ | **Khả năng đưa vào cao** đến cao. Đã có PR [#3662](https://github.com/HKUDS/nanobot/pull/3662) chờ hợp nhất, giải quyết sự chặn của cảnh kịch bản ngoại tuyến do phụ thuộc mạng `tiktoken`. |
| [#3655](https://github.com/HKUDS/nanobot/pull/3655) Hiển thị luồng lý luận mô hình trên CLI | Khả năng quan sát | ⭐⭐⭐⭐☆ | **Khả năng cao** đến trung bình. Điều khiển bằng cấu hình (`show_reasoning`), phù hợp với xu hướng phổ biến của các mô hình suy luận như DeepSeek/Claude. |
| [#3639](https://github.com/HKUDS/nanobot/issues/3639) Danh tính Agent + giao thức tin cậy giữa các Agent | Cơ sở hạ tầng kiến trúc | ⭐⭐☆☆☆ | **Tín hiệu lộ trình dài hạn**. Trạng thái đóng, nhưng vị trí nhẹ của mã ~4000 dòng và nhu cầu tin cậy của việc triển khai quy mô lớn có sự căng thẳng, có thể được đánh giá lại trong các phiên bản tương lai. |
| [#2526](https://github.com/HKUDS/nanobot/pull/2526) Giữ lại tin nhắn người dùng và lệnh gọi công cụ khi hủy bỏ `/stop` | Tính toàn vẹn của cuộc trò chuyện | ⭐⭐⭐⭐☆ | PR mở đã tồn tại 42 ngày, liên quan đến trạng thái vòng lặp proxy cốt lõi, cần người bảo trì xem xét cẩn thận. |
| [#3467](https://github.com/HKUDS/nanobot/pull/3467) Lệnh `/clear` đặt lại lịch sử cuộc trò chuyện | Tối ưu hóa tương tác | ⭐⭐⭐☆☆ | Được gắn nhãn `[không hợp lệ]`, có thể xung đột với thiết kế hiện có, khả năng đưa vào không chắc chắn. |

---

## 7. Tóm tắt phản hồi của người dùng

### Điểm khó khăn thực tế

| Nguồn | Kịch bản | Cảm xúc | Yêu cầu cốt lõi |
|:---|:---|:---|:---|
| #3618 `bigsinger` | 10 ngày ngừng hoạt động môi trường sản xuất, nhiệm vụ định kỳ và tất cả tin nhắn thất bại | 😤 **Thất vọng** | **Chịu lỗi nhà cung cấp**: Khi nhà cung cấp mô hình thay đổi khu vực, cần có khả năng hạ cấp tự động hoặc cảnh báo rõ ràng, thay vì thất bại im lặng. |
| #3637 `sandr1x` | Thử và sai cấu hình Groq | 😐 **Bối rối** | **Tính minh bạch của cấu hình**: Logic nối điểm cuối chuyển mã nên được tài liệu hóa hoặc tự động chuẩn hóa. |
| #3597 `fablau` | Đường dẫn lưu tệp không gian làm việc không như mong đợi | 😕 **Không tin tưởng** | **Tính dự đoán của đường dẫn**: Proxy nên hiểu "gốc không gian làm việc" giống như người dùng. |
| #3605 `rytyr` | Safety guard bị chặn mà không có phản hồi nào | 😤 **Bị bỏ qua** | **Khả năng truy cập lỗi**: Tất cả các hoạt động chặn phải đến được với người dùng, bất kể loại kênh. |
| #3665 `tomjuggler` | Mô hình mới DeepSeek bị lỗi sau nhiều lượt | 😐 **Thận trọng** | **Thích ứng nhanh với mô hình tiên tiến**: Hỗ trợ toàn bộ quy trình cho chế độ suy luận. |

### Điểm hài lòng
- **Cơ chế hạ cấp dự phòng**: Người dùng #3618 rõ ràng đã khen ngợi "May mắn là tôi có thói quen sao lưu", ám chỉ khả năng di chuyển cấu hình tốt của dự án.
- **Tốc độ phản hồi của cộng đồng**: Nhiều Issue đã đóng trong vòng 24 giờ (#3638, #3657, #3605, v.v.)
- **Sự công nhận định vị nhẹ**: Đề xuất #3639 nhấn mạnh "~4.000 dòng, hoàn hảo cho di động và biên".

---

## 8. Tồn đọng cần xử lý

| Loại | Mục | Thời gian mở | Mô tả rủi ro |
|:---|:---|:---:|:---|
| **PR** | [#2526](https://github.com/HKUDS/nanobot/pull/2526) Mất trạng thái cuộc trò chuyện khi hủy `/stop` | **42 ngày** | Lỗi vòng lặp proxy cốt lõi, ảnh hưởng đến trải nghiệm người dùng của tất cả các kênh, hợp nhất trong thời gian dài có thể do thiếu phạm vi kiểm tra |
| **PR** | [#1443](https://github.com/HKUDS/nanobot/pull/1443) Tách biệt suy luận heartbeat và thông báo | **66 ngày** | Thay đổi cấp kiến trúc, thay đổi hành vi mặc định (`sendReasoning: false`), cần người bảo trì quyết định có phá vỡ không |
| **Issue** | [#2132](https://github.com/HKUDS/nanobot/issues/2132) Hợp nhất Runtime Context vào tin nhắn người dùng | **50 ngày** | Vấn đề gốc rễ của các bản sửa lỗi dày đặc của T3chC0wb0y hôm nay, #3666 đã đóng nhưng #3671 cho thấy nightly vẫn có biến thể |
| **PR** | [#3514](https://github.com/HKUDS/nanobot/pull/3514) Xử lý hậu tố thiết bị JID WhatsApp | **9 ngày** | Lỗi khớp @mention nhóm, ảnh hưởng đến các tình huống doanh nghiệp/cộng đồng |

---

> **Giải thích báo cáo hàng ngày**: Phân tích tự động dựa trên dữ liệu công khai của GitHub, số lượng bình luận PR hiển thị là `undefined` là do thiếu trường dữ liệu gốc, không ảnh hưởng đến đánh giá tổng thể. Khuyến nghị người bảo trì ưu tiên các mục mở #3671 (hồi quy Runtime Context), #3665 (khả năng tương thích DeepSeek), và #3649 (lỗ hổng bảo mật) ba hạng mục mở.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Nhật báo về tiến độ dự án Hermes Agent | 2026-05-07

## 1. Tổng quan nhanh hôm nay

Hermes Agent hôm nay duy trì **mức độ hoạt động cực kỳ cao**, với 50 Issues và 50 PR được cập nhật trong vòng 24 giờ, hình thành tỷ lệ 42:8 cho các mục mới/hoạt động so với đã đóng, và tỷ lệ 43:7 cho các mục chờ hợp nhất so với đã hợp nhất/đã đóng. Mật độ thảo luận cộng đồng đáng kể, không có bản phát hành mới nào. Dự án đang trong **giai đoạn phát triển dày đặc** — hoàn thiện trải nghiệm TUI/CLI, sửa lỗi ổn định gateway đa nền tảng, và lặp lại hệ thống Kanban/plugin tạo thành ba dòng chính. Đáng chú ý, hôm nay có 8 Issue đã đóng nhưng chỉ có 7 PR được hợp nhất/đóng, cho thấy một số vấn đề đã được giải quyết bằng cách sửa lỗi trực tiếp hoặc tự giải quyết bởi cộng đồng, thay vì quy trình PR đầy đủ.

---

## 2. Phát hành phiên bản

**Không có bản phát hành mới**

---

## 3. Tiến độ dự án

### Các PR quan trọng đã hợp nhất/đóng hôm nay

| PR | Tác giả | Cải tiến cốt lõi | Liên kết |
|:---|:---|:---|:---|
| **#20916** `fix(tui): keep alt-screen exit clean and tighten exit summary` | OutThisLife | Sửa lỗi điều kiện tranh chấp khi thoát màn hình thay thế Ink (xung đột ghi đệm ghi với `writeSync` trực tiếp), loại bỏ mã ký tự còn sót lại trên terminal; tóm tắt thoát ngắn gọn | [PR #20916](https://github.com/NousResearch/hermes-agent/pull/20916) |
| **#20914** `send_message_tool._send_telegram doesn't use TelegramFallbackTransport` | vokasug | Sửa lỗi công cụ gửi tin nhắn Telegram không sử dụng FallbackTransport, giải quyết lỗi gửi tin nhắn ở các khu vực bị chặn mạng (ví dụ: Nga) | [Issue #20914](https://github.com/NousResearch/hermes-agent/issues/20914) |

**Đánh giá tiến độ tổng thể**: Khối lượng hợp nhất hôm nay thấp (7/50), nhưng trong số các Issue đã đóng bao gồm nhiều vấn đề lịch sử có tương tác cao (như #6475 xác thực đăng ký Anthropic, #7237 lỗi cắt bớt đầu ra), cho thấy nhóm bảo trì đang tiến hành **dọn dẹp các vấn đề tồn đọng**. Hàng đợi PR quy mô lớn (43 mục chờ hợp nhất) báo trước cửa sổ hợp nhất tập trung có thể diễn ra trong 2-3 ngày tới.

---

## 4. Điểm nóng cộng đồng

### Issues có tương