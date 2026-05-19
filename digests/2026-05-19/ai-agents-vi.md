# OpenClaw Sinh Nhật Hàng Ngày 2026-05-19

> Vấn đề: 500 | Yêu cầu kéo: 500 | Dự án được bao phủ: 13 | Thời gian tạo: 2026-05-19 00:26 UTC

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

# Nhật ký hoạt động dự án OpenClaw | 2026-05-19

---

## 1. Tổng quan hôm nay

OpenClaw duy trì hoạt động cực kỳ cao hôm nay, với dữ liệu cao cả về **500 Vấn đề** (441 mở mới/hoạt động, 59 đóng) và **500 Yêu cầu kéo** (446 chờ hợp nhất, 54 đã hợp nhất/đóng) trong vòng 24 giờ, cho thấy cộng đồng đang trong chu kỳ phát triển dày đặc. Năm phiên bản mới được phát hành liên tục cho thấy tốc độ phát hành nhanh chóng, nhưng nhiều Yêu cầu kéo vẫn đang trong trạng thái chờ xác minh như `needs-real-behavior-proof`, cho thấy một điểm nghẽn trong phễu hợp nhất. Các trọng tâm chính tập trung vào ba chủ đề: **sửa chữa hệ sinh thái plugin Codex**, **độ tin cậy của việc gửi tin nhắn đa kênh** và **tính nhất quán của trạng thái hội thoại**, đồng thời các vấn đề về quản lý bộ nhớ (rò rỉ RSS, phiên zombie) đã được sửa chữa quan trọng hôm nay.

---

## 2. Phát hành phiên bản

### v2026.5.19-beta.1 | [Liên kết phát hành](https://github.com/openclaw/openclaw/releases/tag/v2026.5.19-beta.1)
> Phiên bản beta mới nhất, bao gồm làm rõ đặc tả kiến trúc tác nhân và nâng cấp phụ thuộc

| Mục thay đổi | Chi tiết | Đánh giá tác động |
|:---|:---|:---|
| **Đặc tả kiến trúc Tác nhân** | Sửa lỗi mặc định sẽ áp dụng "tái cấu trúc có giới hạn sạch sẽ, tinh giản triển khai nội bộ, lộ trình rõ ràng để loại bỏ SDK/API plugin" | 🔶 Tương thích ngược: Ảnh hưởng đến đặc tả phát triển plugin của bên thứ ba |
| **Nâng cấp phụ thuộc** | `@openclaw/proxyline` → 0.3.3; Gói Pi → 0.75.1 | 🟢 Cập nhật bảo mật |
| **Phiên bản Node.js tối thiểu** | Tăng lên dòng Node.js 22 (phiên bản cụ thể không hiển thị đầy đủ) | 🔶 Tương thích ngược: Cần xác minh môi trường triển khai |

### v2026.5.18 | [Liên kết phát hành](https://github.com/openclaw/openclaw/releases/tag/v2026.5.18)
> Phiên bản ổn định, nội dung thay đổi giống với beta.1

### v2026.5.16-beta.7 / beta.6 | [Liên kết phát hành](https://github.com/openclaw/openclaw/releases/tag/v2026.5.16-beta.7)
| Mục thay đổi | Chi tiết |
|:---|:---|
| **Build Docker/Podman** | Thêm tham số build trung lập với runtime `OPENCLAW_IMAGE_APT_PACKAGES`, thay thế phương pháp cũ |
| **Trang cài đặt ứng dụng Mac** | Thiết kế lại hoàn toàn trang cài đặt: bố cục thẻ thống nhất, điều hướng bộ nhớ đệm, bảng điều khiển quyền/giọng nói/kỹ năng/tác vụ hẹn giờ/thực thi/gỡ lỗi rõ ràng hơn |

**Lưu ý di chuyển**: Yêu cầu phiên bản Node.js tối thiểu 22 có thể ảnh hưởng đến môi trường sản xuất sử dụng LTS cũ; `OPENCLAW_IMAGE_APT_PACKAGES` là tham số build mới được thêm vào, các tham số tiền tố `CLAW_*` cũ sẽ dần bị loại bỏ.

---

## 3. Tiến độ dự án

### Các PR quan trọng đã hợp nhất/đóng (mục có giá trị cao trong số 54 mục)

| PR | Tác giả | Đóng góp cốt lõi | Trạng thái |
|:---|:---|:---|:---|
| [#83821](https://github.com/openclaw/openclaw/pull/83821) | RomneyDa | **Sửa lỗi đẩy PWA trên iOS**：Thay đổi chủ đề VAPID mặc định từ `mailto:openclaw@localhost` thành `https://openclaw.ai`, giải quyết lỗi 403 Forbidden của Apple Web Push | ✅ Đã đóng |
| [#83752](https://github.com/openclaw/openclaw/issues/83752) | brokemac79 | **Sửa lỗi rò rỉ bộ nhớ RSS của cổng**：Kiểm tra trước toàn bộ ngữ cảnh bộ nhớ hoạt động của Telegram đã giảm RSS từ 1,6GB xuống 450MB, xác nhận sửa lỗi hiệu quả | ✅ Đã đóng |
| [#82858](https://github.com/openclaw/openclaw/issues/82858) | Piste | **Sửa lỗi gửi theo phân đoạn Discord**：Sự cố hồi quy được giới thiệu trong `sendDurableMessageBatch` vào ngày 2026.5.12, im lặng bỏ qua phân đoạn | ✅ Đã đóng |
| [#49692](https://github.com/openclaw/openclaw/issues/49692) | skillz-xx | **Cải thiện trải nghiệm người dùng khởi động lại cổng một cách duyên dáng**：Thông báo drain thân thiện hơn + thử lại tự động các tin nhắn chưa xử lý | ✅ Đã đóng |
| [#44353](https://github.com/openclaw/openclaw/issues/44353) | lucca-alma | **Sửa lỗi cơ chế dự phòng mô hình**：Các lỗi cấp nhà cung cấp như thay đổi ID mô hình AWS Bedrock hiện sẽ kích hoạt dự phòng | ✅ Đã đóng |

### Đánh giá tiến độ tổng thể

| Chiều | Tiến độ | Rào cản |
|:---|:---|:---|
| **Độ tin cậy** | ⬆️ Cao: Các vấn đề cốt lõi như rò rỉ bộ nhớ, mất tin nhắn, gửi phân đoạn đã được sửa chữa | Nhiều PR chờ xác minh hành vi |
| **Hệ sinh thái Codex** | ➡️ Trung bình: 3 PR quan trọng đang chờ hợp nhất (ràng buộc plugin, xác thực công cụ, giữ lại phản hồi) | Cần hàng đợi xem xét của người bảo trì |
| **Thích ứng đa kênh** | ➡️ Trung bình: Các PR sửa lỗi Feishu, Mattermost, Telegram dày đặc nhưng chưa được hợp nhất | Thiếu xác minh kiểm tra đầu cuối |
| **Trải nghiệm nhà phát triển** | ⬆️ Cao: Cấu trúc lệnh Doctor, sửa lỗi VAPID mặc định, hoàn thành bản địa hóa tiếng Trung-Phồn | — |

---

## 4. Điểm nóng cộng đồng

### Các Vấn đề hoạt động sôi nổi nhất (sắp xếp theo số lượng bình luận)

| Hạng | Vấn đề | Bình luận | Yêu cầu cốt lõi | Tín hiệu nhãn |
|:---|:---|:---:|:---|:---|
| 1 | [#48788](https://github.com/openclaw/openclaw/issues/48788) Công cụ mã hóa tên tệp tập trung | 17 | Cấu trúc hóa việc xử lý Content-Disposition đa mã hóa, vượt xa sửa lỗi Feishu đơn lẻ | `impact:data-loss`, `needs-product-decision` |
| 2 | [#48183](https://github.com/openclaw/openclaw/issues/48183) Rò rỉ bộ nhớ giám sát Feishu | 17 | Làm sạch không đầy đủ bản đồ httpServers, chưa giải phóng hoàn toàn sau khi đóng | `impact:message-loss`, `source-repro` |
| 3 | [#50090](https://github.com/openclaw/openclaw/issues/50090) Phát triển kỹ năng cộng đồng và hệ sinh thái ClawHub | 14 | Registry kỹ năng phân tán, phiên bản hỗn loạn, thiếu quản trị, kêu gọi hệ sinh thái tập trung | `impact:security`, `needs-product-decision` |
| 4 | [#45740](https://github.com/openclaw/openclaw/issues/45740) Lỗ hổng injection gợi ý kỹ năng gh-issues | 12 | Nội dung vấn đề gốc được inject trực tiếp vào gợi ý của tác nhân phụ, không có cách ly/lọc | `impact:security`, `needs-security-review` |
| 5 | [#44925](https://github.com/openclaw/openclaw/issues/44925) Tác nhân phụ mất im lặng khi hoàn thành | 12 | Không thử lại khi hết thời gian chờ, không thông báo, không tự khởi động lại, trạng thái tác vụ không đáng tin cậy | `impact:session-state`, `impact:message-loss` |

### Phân tích yêu cầu đằng sau

> **Căng thẳng giữa nợ kiến trúc và mở rộng chức năng**: Cộng đồng liên tục kêu gọi "không sửa lỗi đơn lẻ, hãy làm giải pháp cấp kiến trúc" trong #48788, #50090, nhưng các nhãn của người bảo trì cho thấy `clawsweeper:no-new-fix-pr` (cấm PR sửa lỗi mới) và `needs-product-decision` cùng tồn tại, cho thấy tầng quyết định sản phẩm có thái độ thận trọng đối với các thay đổi kiến trúc lớn.

> **Xung đột giữa bảo mật và tiện lợi**: #45740 (injection gợi ý), #83018 (lồng nhau sandbox), #45031 (quét bảo mật kỹ năng) cho thấy cộng đồng đặc biệt quan tâm đến ranh giới bảo mật của tác nhân AI, nhưng nhãn đánh giá bảo mật `needs-security-review` đã bị treo lâu dài, có thể trở thành điểm nghẽn cho việc mở rộng hệ sinh thái.

---

## 5. Lỗi và Độ ổn định

### Mức độ nghiêm trọng P1 (Ảnh hưởng sản xuất)

| Vấn đề | Triệu chứng | Trạng thái | PR Sửa lỗi |
|:---|:---|:---|:---|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) Tác nhân phụ mất im lặng khi hoàn thành | Không thử lại khi hết thời gian chờ, không thông báo, kết quả tác vụ biến mất | 🔴 Mở, thảo luận nhiều | ❌ Không có |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) A2A sessions_send gọi hai chiều dẫn đến tin nhắn trùng lặp | Tác nhân đích gọi bên gửi, tin nhắn trùng lặp | 🔴 Mở | ❌ Không có |
| [#83018](https://github.com/openclaw/openclaw/issues/83018) Sandbox lớp trong Codex xung đột với sandbox Docker | Sandbox lồng nhau không khởi động được, bwrap bên trong Docker | 🔴 Mở, mới tạo hôm qua | ❌ Không có |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) Công cụ write thiếu chế độ nối thêm | Phiên cách ly tác vụ hẹn giờ ghi đè tệp chia sẻ, mất dữ liệu | 🔴 Mở | ❌ Không có |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) Chế độ Steer không inject tin nhắn vào phiên chính | Tin nhắn xếp hàng đến cuối lượt, không can thiệp thời gian thực | 🔴 Mở, có liên kết PR | 🔗 Liên quan đến #52278 |
| [#43661](https://github.com/openclaw/openclaw/issues/43661) Hết thời gian nén dẫn đến phiên bị treo vô hạn | Gửi lại tin nhắn giống nhau, không có cơ chế khôi phục | 🔴 Mở | ❌ Không có |
| [#49876](https://github.com/openclaw/openclaw/issues/49876) Công cụ tác vụ hẹn giờ tạo ra kết quả ảo giác khi thất bại | Tạo ra kết quả đáng tin cậy sai thay vì thất bại sạch sẽ | 🔴 Mở | ❌ Không có |
| [#51593](https://github.com/openclaw/openclaw/issues/51593) Gọi công cụ moonshot/kimi-k2.5 ID lặp lại gây lỗi | Lỗi 400 HTTP trong cuộc trò chuyện WhatsApp | 🔴 Mở, cập nhật hôm qua | ❌ Không có |
| [#51396](https://github.com/openclaw/openclaw/issues/51396) clearUnboundScopes loại bỏ phạm vi của người điều hành một cách vô điều kiện | Client xác thực token không thể chat.send | 🔴 Mở, sự cố hồi quy | ❌ Không có |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) Tác vụ hẹn giờ hết thời gian chờ im lặng khi LLM gặp sự cố | Không thất bại nhanh chóng, tiêu tốn toàn bộ cửa sổ hết thời gian chờ | 🔴 Mở | ❌ Không có |

### Mức độ quan trọng P2 (Ảnh hưởng chức năng)

| Vấn đề | Triệu chứng | Trạng thái | PR Sửa lỗi |
|:---|:---|:---|:---|
| [#51429](https://github.com/openclaw/openclaw/issues/51429) Đường dẫn công việc được mã hóa cứng `/Users/wangtao` | Tạo thư mục của người khác làm không gian làm việc sau khi cài đặt | 🟡 Mở, được quan tâm cao | ❌ Không có |
| [#51871](https://github.com/openclaw/openclaw/issues/51871) UI Control không hiển thị tác vụ hẹn giờ | Trang trống, có dữ liệu trong jobs.json | 🟡 Mở, cập nhật hôm qua | ❌ Không có |
| [#43747](https://github.com/openclaw/openclaw/issues/43747) Quản lý bộ nhớ hỗn loạn | Hành vi người dùng khác nhau không nhất quán, đường dẫn chunk/embedding/SQLite khác nhau | 🟡 Mở, hồi quy | ❌ Không có |
| [#45698](https://github.com/openclaw/openclaw/issues/45698) UI Control dần dần bị đóng băng | Không phản hồi sau một thời gian mở | 🟡 Mở, `needs-info` | ❌ Không có |

### Đã sửa hôm nay

| Vấn đề | Nội dung sửa lỗi | Trạng thái xác minh |
|:---|:---|:---|
| [#83752](https://github.com/openclaw/openclaw/issues/83752) | Rò rỉ RSS cổng: tối ưu hóa kiểm tra trước bộ nhớ hoạt động của Telegram | ✅ Xác minh tại chỗ, RSS từ 1,6GB → 450MB |
| [#82858](https://github.com/openclaw/openclaw/issues/82858) | Bỏ qua phân đoạn gửi im lặng Discord `sendDurableMessageBatch` | ✅ Đã hợp nhất |

---

## 6. Yêu cầu chức năng và tín hiệu lộ trình

| Yêu cầu chức năng | Vấn đề | Độ nóng | Tín hiệu khả thi | Dự đoán phiên bản |
|:---|:---|:---|:---|:---|
| **Mô hình định tuyến theo kỹ năng** | [#43260](https://github.com/openclaw/openclaw/issues/43260) | 9 bình luận | Có yêu cầu kiến trúc, nhưng `needs-product-decision` | 2026.Q3 |
| **Ngân sách chi phí cổng theo tác nhân** | [#42475](https://github.com/openclaw/openclaw/issues/42475) | 11 bình luận | Có thể tích hợp với `session-cost-usage.ts` hiện có | 2026.Q3 |
| **Cấu hình ưu tiên kỹ năng** | [#50199](https://github.com/openclaw/openclaw/issues/50199) | 7 bình luận | Yêu cầu rõ ràng, nhưng vấn đề chồng chéo kỹ năng cần được quản trị trước | 2026.Q4 |
| **Làm mới bộ nhớ tác nhân đặt lại trước** | [#45608](https://github.com/openclaw/openclaw/issues/45608) | 8 bình luận, 3 👍 | Tái sử dụng cơ chế `runMemoryFlushIfNeeded` hiện có | **Có thể vào tháng 6 năm 2026** |
| **Sự kiện hệ thống ưu tiên/bỏ qua hàng đợi** | [#50739](https://github.com/openclaw/openclaw/issues/50739) | 6 bình luận | Quan trọng cho độ tin cậy, có các tình huống cụ thể | **Có thể vào tháng 6 năm 2026** |
| **RFC kiến trúc đa phiên** | [#48874](https://github.com/openclaw/openclaw/issues/48874) | 6 bình luận | Thay đổi cấp kiến trúc, thảo luận dài hạn | 2027 |
| **Nhà cung cấp tìm kiếm SearXNG** | PR [#52207](https://github.com/openclaw/openclaw/pull/52207) | Chờ hợp nhất | Nhu cầu định hướng riêng tư cao, PR đã cung cấp | **Có thể vào tháng 6 năm 2026** |

### PR quan trọng đã chờ hợp nhất

| PR | Chức năng | Trạng thái | Nhãn rủi ro |
|:---|:---|:---|:---|
| [#52207](https://github.com/openclaw/openclaw/pull/52207) | Nhà cung cấp SearXNG + hỗ trợ độ tươi Tavily | 📣 cần bằng chứng | Tương thích, chứng nhận, ranh giới bảo mật |
| [#52012](https://github.com/openclaw/openclaw/pull/52012) | Cấu hình dự phòng mô hình nén | 📣 cần bằng chứng | Tương thích, chứng nhận, trạng thái phiên |
| [#83753](https://github.com/openclaw/openclaw/pull/83753) | Kiểm tra bảo trì cấu trúc lệnh Doctor | 👀 Đang xem xét bởi người bảo trì | Tương thích, khả năng sử dụng |

---

## 7. Tóm tắt phản hồi người dùng

### 🔴 Điểm đau cốt lõi

> **"Trạng thái hoàn thành tác vụ không đáng tin cậy"** — Nhiều người dùng báo cáo tác nhân phụ/tác vụ hẹn giờ "hiển thị hoàn thành nhưng thực tế chưa hoàn thành" (#44925, #50165, #49876), ảnh hưởng trực tiếp đến độ tin cậy của quy trình làm việc tự động.

> **"Quản lý bộ nhớ giống như hộp đen"** — Ba người dùng trong #43747 có hành vi bộ nhớ khác nhau trong cùng một phiên bản, thiếu tính dự đoán.

> **"Sandbox lồng nhau không khởi động được"** — Người dùng #83018 mô tả điểm đau triển khai đám mây điển hình của Codex khi cố gắng khởi động sandbox bwrap trong Docker.

### 🟡 Ma sát trải nghiệm

> **"Tạo thư mục của người khác sau khi cài đặt"** — Vấn đề mã hóa cứng `/Users/wangtao` trong #51429 gây nghi ngờ về quy trình đánh giá mã trong cộng đồng.

> **"UI Control và TUI hiển thị không nhất quán"** — Tin nhắn WebChat #77136 "biến mất" nhưng TUI bình thường, độ tin cậy hiển thị phía trước bị nghi ngờ.

> **"Tài liệu đi trước bản phát hành"** — Người dùng #48920 định cấu hình `IsolatedSessions` theo tài liệu nhưng phiên bản không hỗ trợ, làm giảm lòng tin.

### 🟢 Tín hiệu tích cực

> **"Sửa lỗi rò rỉ bộ nhớ được xác minh là hiệu quả"** — Báo cáo viên #83752 xác nhận RSS giảm từ 1,6GB xuống 450MB, cộng đồng ghi nhận phản hồi nhanh chóng.

> **"Mong đợi cải tiến lệnh Doctor"** — Kiểm tra sức khỏe có cấu trúc của #83753 được xếp hạng `platinum hermit`, trải nghiệm vận hành tiếp tục được tối ưu hóa.

---

## 8. Tồn đọng cần xử lý

### Issues giá trị cao chưa phản hồi trong thời gian dài (nhắc nhở người bảo trì)

| Vấn đề | Ngày tạo | Cập nhật cuối cùng | Lý do chặn | Đề xuất hành động |
|:---|:---|:---|:---|:---|
| [#43367](https://github.com/openclaw/openclaw/issues/43367) Điều phối đa tác nhân không ổn định | 2026-03-11 | 2026-05-18 | `needs-live-repro`, `needs-product-decision` | Cung cấp mẫu tái tạo tối thiểu, hoặc hạ cấp thành tài liệu hóa giới hạn đã biết |
| [#45740](https://github.com/openclaw/openclaw/issues/45740) Gợi ý kỹ năng gh-issues bị inject | 2026-03-14 | 2026-05-18 | `needs-security-review` treo dài hạn | Xem xét đặc biệt của nhóm bảo mật, hoặc sự tham gia của chuyên gia bảo mật cộng đồng |
| [#50090](https://github.com/openclaw/openclaw/issues/50090) Quản trị hệ sinh thái ClawHub | 2026-03-19 | 2026-05-18 | `needs-product-decision`, `needs-security-review` | Lộ trình sản phẩm công khai, hoặc thành lập nhóm công tác quản trị cộng đồng |
| [#43260](https://github.com/openclaw/openclaw/issues/43260) Định tuyến mô hình theo kỹ năng | 2026-03-11 | 2026-05-18 | `needs-product-decision` | Đánh giá kết hợp với ưu tiên kỹ năng #50199 |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) Ngân sách cổng | 2026-03-10 | 2026-05-18 | `needs-product-decision` | Thu thập các trường hợp người dùng doanh nghiệp, thúc đẩy quyết định sản phẩm |

### Điểm nghẽn hợp nhất PR

> Trong số **446 PR chờ hợp nhất**, phần lớn được gắn nhãn `📣 needs proof` (cần bằng chứng hành vi thực tế), phản ánh nút thắt trong cơ sở hạ tầng kiểm tra tự động hoặc văn hóa xác minh cộng đồng. Đề xuất:
> - Ưu tiên hợp nhất các PR đã có `proof: sufficient` và `👀 ready for maintainer look` (như #83807, #83603, #83753)
> - Thiết lập sandbox kiểm tra tự động hoặc cơ chế kiểm tra cộng đồng cho `needs-real-behavior-proof`

---

*Thời gian tạo báo cáo hàng ngày: 2026-05-19 | Nguồn dữ liệu: Dữ liệu công khai của kho lưu trữ GitHub OpenClaw*

---

## So sánh sinh thái ngang

# Phân tích so sánh ngang hệ sinh thái cá nhân AI Assistant/Agent tự động | 2026-05-19

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái nguồn mở cá nhân AI Assistant đang ở bước ngoặt quan trọng của **"chuyển đổi từ xác minh nguyên mẫu sang độ tin cậy sản xuất"**. Các dự án hàng đầu (OpenClaw, ZeroClaw, IronClaw) có số lượng Vấn đề/PR trung bình hàng ngày cao (50+), nhưng tỷ lệ hợp nhất nói chung thấp hơn ngưỡng lành mạnh (14%-20%), phản ánh **sự không phù hợp nghiêm trọng giữa hoạt động đóng góp và băng thông xem xét**. Tăng cường bảo mật đã trở thành sự đồng thuận xuyên dự án — các PR về CSPRNG, bảo vệ injection lệnh, cô lập gợi ý đang ồ ạt xuất hiện, bề mặt tấn công của AI Agent đang chuyển từ rủi ro lý thuyết sang các ưu tiên kỹ thuật. Đồng thời, **hệ thống bộ nhớ, thích ứng đa kênh, truyền phát** tạo thành ba khu vực nước sâu kỹ thuật, giải pháp của mỗi dự án có sự phân hóa rõ rệt.

---

## 2. So sánh mức độ hoạt động của từng dự án

| Dự án | Vấn đề (Hoạt động/Đóng) | PR (Chờ hợp nhất/Đã xử lý) | Bản phát hành hôm nay | Tỷ lệ hợp nhất | Đánh giá sức khỏe |
|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 441 / 59 | 446 / 54 | v2026.5.19-beta.1 và 5 bản khác | 10.8% | 🔶 **Hoạt động áp lực cao**: Thông lượng kép 500 nhưng điểm nghẽn phễu hợp nhất nghiêm trọng, nhãn `needs-real-behavior-proof` tràn lan |
| **NanoBot** | 5 / 2 | 11 / 10 | Không | 47.6% | 🟢 **Lặp lại hiệu quả**: Tỷ lệ hợp nhất lành mạnh, cơ sở hạ tầng tạo ảnh nhanh chóng mở rộng, cần tăng cường phản hồi các điểm đau của người dùng |
| **Hermes Agent** | 44 / 6 | 43 / 7 | Không | 14.0% | 🔴 **Khủng hoảng hồi quy**: v0.14.0 giới thiệu 4 lỗi P1, áp lực kép từ điểm nghẽn xem xét + độ ổn định |
| **PicoClaw** | 5 / 3 | 18 / 8 | v0.2.8-nightly | 30.8% | 🟢 **Sửa lỗi nhanh**: Lỗ hổng ngân sách Seahorse được đóng vòng ngay trong ngày, nhưng 11/18 PR được gắn nhãn stale |
| **NanoClaw** | 4 / 0 | 29 / 6 | v2.0.64 | 17.1% | 🟡 **Nỗ lực an ninh**: 3 PR bảo mật P0 đang chờ xem xét, chứng chỉ SSL hết hạn 52 ngày làm tổn hại thương hiệu |
| **NullClaw** | 1 / 0 | 1 / 0 | Không | 0% | 🟢 **Trạng thái ổn định bảo trì thấp**: Hệ sinh thái ngôn ngữ Zig nhỏ hẹp, sửa lỗi DNS Windows đang chờ hợp nhất |
| **IronClaw** | 34 / 2 | 32 / 15 | Không (CI sẵn sàng 0.28.2) | 31.9% | 🟡 **Giai đoạn di chuyển kiến trúc**: Cơ sở hạ tầng Reborn đang được triển khai dày đặc, nhưng việc phát hành crates.io bị chặn 14 ngày |
| **LobsterAI** | 0 / 0 | 6 / 12 | 2026.5.18 | 66.7% | 🟢 **Tập trung nội bộ**: Tốc độ phát hành nhanh, nhưng hoạt động Vấn đề bằng 0, bình luận PR là undefined, cộng đồng bên ngoài yếu |
| **Moltis** | 1 / 7 | 2 / 6 | 20260518.01 | 75.0% | 🟢 **Ngày thanh toán nợ**: Hệ thống Hook được sửa lỗi và phát hành trong ngày, nhưng Yêu cầu chức năng không nhận được tương tác |
| **CoPaw** | 19 / 12 | 16 / 7 | v1.1.8-beta.1 | 30.4% | 🟡 **Tập trung giải quyết độ ổn định**: #4487 giải quyết triệt để tình trạng đơ toàn cục do giới hạn tốc độ, nhưng lỗ hổng RCE bị bỏ ngỏ 48 giờ |
| **ZeroClaw** | 15 / 11 | 42 / 8 | Không | 16.0% | 🟡 **Mở rộng chức năng**: Hệ thống kỹ năng + hỗ trợ nền tảng được đẩy mạnh song song, sự cố CI và 42 PR tồn đọng cộng dồn |
| **TinyClaw** | — | — | — | — | ⚪ **Ngủ đông** |
| **ZeptoClaw** | — | — | — | — | ⚪ **Ngủ đông** |

> **Ngưỡng lành mạnh của tỷ lệ hợp nhất**: >25% là lành mạnh, 14-25% là chịu áp lực, <14% là khủng hoảng.

---

## 3. Vị trí của OpenClaw trong hệ sinh thái

| Chiều | Hiệu suất của OpenClaw | So sánh hệ sinh thái |
|:---|:---|:---|
| **Quy mô** | 500 Vấn đề/PR kép mỗi ngày, quy mô tuyệt đối số một | ZeroClaw (50+), IronClaw (47+) đứng thứ hai, chênh lệch khoảng 10 lần |
| **Ưu điểm** | **Thích ứng đa kênh hoàn chỉnh nhất** (bao phủ đầy đủ Telegram/Discord/Feishu/WhatsApp/Mattermost); **Hệ sinh thái plugin Codex** được liên kết sâu; sửa lỗi cứng như rò rỉ bộ nhớ được xác minh đầy đủ (dữ liệu tại chỗ #83752 RSS 1.6GB→450MB) | NanoBot mở rộng Nhà cung cấp tạo ảnh nhanh, nhưng chỉ có một kênh; Hermes cổng đa nền tảng nhưng độ ổn định kém |
| **Khác biệt lộ trình kỹ thuật** | **Kiến trúc "trung tâm cổng"**: Quản lý tập trung việc gửi tin nhắn, trạng thái phiên, theo dõi chi phí, nhấn mạnh tính nhất quán giữa các kênh | ZeroClaw "trung tâm kỹ năng" (SkillForge schema nghiêm ngặt); IronClaw "dòng sự kiện Reborn" (ảnh chụp nhanh EventStreamManager); Moltis "điều khiển Hook" (chỉnh sửa chặn sự kiện) |
| **Mô hình cộng đồng** | **Quản trị cấp doanh nghiệp**: Nhãn `clawsweeper:no-new-fix-pr` cho thấy tầng quyết định sản phẩm thận trọng với các thay đổi kiến trúc, xem xét bảo mật `needs-security-review` bị treo dài hạn | PicoClaw/Moltis người bảo trì phản hồi nhanh (penso 6 PR/ngày); LobsterAI hoàn toàn tập trung nội bộ |
| **Rủi ro cốt lõi** | **Điểm nghẽn văn hóa xác minh**: Phần lớn trong số 446 PR chờ hợp nhất là `needs-real-behavior-proof`, cơ sở hạ tầng kiểm tra tự động chậm hơn tốc độ đóng góp | NanoClaw tương tự (29 chờ xem xét), nhưng PR bảo mật có ưu tiên rõ ràng |

**Tóm tắt định vị**: OpenClaw là dự án **"giống công ty cơ sở hạ tầng nhất"** trong hệ sinh thái — quy mô lớn, quản trị có quy tắc, bao phủ đa kênh toàn diện, nhưng tốc độ đổi mới bị giới hạn bởi quyết định sản phẩm, người đóng góp cộng đồng đối mặt với ma sát "xác minh ngưỡng cao".

---

## 4. Hướng kỹ thuật được quan tâm chung

| Hướng kỹ thuật | Dự án liên quan | Yêu cầu cụ thể | Cường độ tín hiệu |
|:---|:---|:---|:---|
| **Hệ thống bộ nhớ có thể kiểm soát** | OpenClaw (#44925 Tác nhân phụ mất im lặng), PicoClaw (#2894 Lỗ hổng ngân sách Seahorse), NullClaw (#919 FTS5 buộc gọi lại), NanoBot (#3885 Hệ thống Dream không thể tắt) | Từ "hộp đen tự động" đến **ngân sách/công tắc/phân lớp rõ ràng**: Gọi lại bộ nhớ cần có thể cấu hình, quan sát được, giới hạn được | 🔥🔥🔥🔥🔥 |
| **Cứng hóa ranh giới bảo mật** | NanoClaw (#2545 CSPRNG, #2538 Injection lệnh), CoPaw (#4470 Lỗ hổng RCE), OpenClaw (#45740 Injection gợi ý), ZeroClaw (#6729 Cờ năng lực Tác nhân) | **Khử trùng đầu vào, cách ly sandbox, làm mờ chứng chỉ, tối thiểu hóa năng lực** từ tùy chọn thành bắt buộc | 🔥🔥🔥🔥🔥 |
| **Truyền phát toàn bộ chuỗi** | PicoClaw (#2892, #2853 PR kép), IronClaw (#3761 EventStreamManager), OpenClaw (#48003 Tin nhắn chế độ Steer xếp hàng) | Phản hồi thời gian thực, tiến độ hiển thị, khôi phục khi ngắt, thay thế "giao một lần sau khi tạo" | 🔥🔥🔥🔥 |
| **Độ tin cậy thích ứng đa kênh** | OpenClaw (sửa lỗi Feishu/Discord/Telegram dày đặc), CoPaw (#4477 Lỗi WeChat iLink), NanoBot (#3863 Chặn đăng nhập WeChat), ZeroClaw (#6724 Supervisor kênh bị lỗi) | Tin nhắn **không mất, không trùng lặp, không thất bại im lặng**, tính nhất quán trạng thái đầu cuối | 🔥🔥🔥🔥 |
| **Quản lý chi phí ngữ cảnh dài** | LobsterAI (#2001 Cửa sổ 2M + #752 /compact nén), OpenClaw (#42475 Ngân sách cổng), ZeroClaw (#6661 Giữ luồng WebSocket) | **Cửa sổ lớn + nén thông minh + theo dõi chi phí** ba trong một | 🔥🔥🔥 |
| **Điểm cuối tùy chỉnh/riêng tư** | NanoClaw (#1984 Điểm cuối tương thích OpenAI), ZeroClaw (#6558 DashScope 405), Hermes (#15895 Lỗi quota Gemini) | Dữ liệu doanh nghiệp không rời khỏi miền, nhưng "lớp tương thích" có chất lượng không đồng đều | 🔥🔥🔥 |
| **Chẩn đoán/Khả năng quan sát** | Hermes (#28223 Lệnh doctor), OpenClaw (#83753 Doctor có cấu trúc), ZeroClaw (#6756 doctor bỏ qua api_key) | Trong các tình huống "khởi động lại không có tác dụng", người dùng cần **chẩn đoán tự phục vụ** thay vì báo cáo Vấn đề | 🔥🔥🔥 |

---

## 5. Phân tích định vị khác biệt

| Dự án | Trọng tâm chức năng cốt lõi | Người dùng mục tiêu | Khác biệt chính về kiến trúc kỹ thuật |
|:---|:---|:---|:---|
| **OpenClaw** | Trung tâm nhắn tin đa kênh + hệ sinh thái plugin Codex | Triển khai cấp doanh nghiệp, đội cần cổng nhắn tin thống nhất | Node.js/TypeScript, tập trung cổng, nhấn mạnh văn hóa "xác minh hành vi" |
| **NanoBot** | Tạo đa phương thức (ảnh/văn bản) + mở rộng Nhà cung cấp | Nhà phát triển, người dùng kỹ thuật cần tích hợp nhanh chóng với mô hình mới | Python, AgentRunner đang được tái cấu trúc, chế độ Registry Nhà cung cấp giải quyết khả năng mở rộng |
| **Hermes Agent** | Agent cục bộ ưu tiên CLI/TUI + di chuyển từ đối thủ cạnh tranh | Nhà phát triển cá nhân, người dùng di chuyển từ Claude Code/Cursor | Python, lớp định tuyến mô hình "Caelus", nhưng tái cấu trúc v0.14.0 gây ra khủng hoảng ổn định |
| **PicoClaw** | Triển khai nhúng/cạnh + bộ nhớ lấy cảm hứng từ sinh học | Phần cứng tài nguyên thấp, bối cảnh RISC-V/TrueNAS | Go, hệ thống bộ nhớ Seahorse, ưu tiên bản địa hóa (SiliconFlow) |
| **NanoClaw** | Mạng lưới tác nhân container hóa + giao thức ACP | Người dùng điều phối đa tác nhân | Elixir/Erlang VM, trạng thái phiên phân tán, đồng bộ hóa quy trình phê duyệt tức thời |
| **NullClaw** | Agent tối giản có thể kiểm soát + hiệu suất Zig | Người đam mê lập trình hệ thống, bối cảnh nhạy cảm với bộ nhớ | Zig, bộ nhớ FTS5 mã hóa cứng, theo đuổi "sự đơn giản có thể kiểm toán" |
| **IronClaw** | Thực thi đáng tin cậy TEE + quy trình làm việc sản phẩm Reborn | Doanh nghiệp yêu cầu bảo mật cao, hệ sinh thái NEAR AI | Rust, EventStreamManager + sổ cái bền vững, kiến trúc nặng nhất |
| **LobsterAI** | Bản địa hóa tiếng Trung + tích hợp hệ sinh thái Netease | Người dùng tiếng Trung, doanh nghiệp hệ sinh thái POPO/Youdao | TypeScript/Electron, thúc đẩy lặp lại nội bộ, cộng đồng bên ngoài yếu |
| **Moltis** | Chặn sự kiện Hook + kiểm soát chính xác mô hình nhỏ | Triển khai sản xuất nhạy cảm với chi phí, khả năng kiểm soát định tuyến công cụ | Elixir, cơ chế mở rộng cốt lõi là Hook, văn hóa cấu hình nhanh chóng |
| **CoPaw** | Thực thi tác vụ tự động (Chế độ Kế hoạch) + hệ sinh thái WeChat | Người dùng cá nhân tiếng Trung, quy trình làm việc tự động hóa cần thiết | Python/TypeScript, cơ chế xác nhận kế hoạch, giới hạn tốc độ LLM chi tiết |
| **ZeroClaw** | Hệ sinh thái kỹ năng (SkillForge) + runtime đa nền tảng | Nhà phát triển kết hợp nhiều kỹ năng, người dùng máy chủ BSD/cạnh | Rust, hệ thống kỹ năng schema nghiêm ngặt, tối ưu hóa mã hóa Morph/Gemini |

---

## 6. Mức độ nhiệt cộng đồng và sự trưởng thành

### Phân lớp mức độ hoạt động

| Lớp | Dự án | Đặc điểm |
|:---|:---|:---|
| **🔥 Siêu hoạt động · Giai đoạn áp lực cao** | OpenClaw, ZeroClaw, IronClaw | 30+ PR/ngày, tỷ lệ hợp nhất <20%, trong giai đoạn di chuyển kiến trúc hoặc mở rộng chức năng, nợ xem xét tích lũy |
| **⚡ Hoạt động · Giai đoạn hiệu quả** | NanoBot, PicoClaw, Moltis, CoPaw | 10-20 PR/ngày, tỷ lệ hợp nhất 30-75%, tập trung vào nợ kỹ thuật cụ thể hoặc sửa lỗi ổn định |
| **🌱 Hoạt động · Giai đoạn nút thắt** | NanoClaw, Hermes Agent | Khủng hoảng bảo mật/hồi quy cộng với hàng đợi xem xét, cần sắp xếp lại ưu tiên |
| **💤 Hoạt động thấp · Trạng thái ổn định** | NullClaw, LobsterAI | <2 hoạt động/ngày, cái trước là hệ sinh thái ngôn ngữ nhỏ hẹp, cái sau tập trung nội bộ và im lặng bên ngoài |
| **🚫 Ngủ đông** | TinyClaw, ZeptoClaw | 24 giờ không hoạt động |

### Giai đoạn trưởng thành

| Giai đoạn | Dự án | Dấu hiệu |
|:---|:---|:---|
| **Giai đoạn củng cố chất lượng** | Moltis, PicoClaw | Lỗi trong ngày, phát hành trong ngày, dọn dẹp nhanh chóng nợ kỹ thuật hệ thống Hook/bộ nhớ |
| **Giai đoạn di chuyển kiến trúc** | IronClaw (Reborn), NanoBot (Tái cấu trúc AgentRunner) | Triển khai dày đặc tái cấu trúc nội bộ, phạm vi kiểm tra đang đuổi kịp |
| **Giai đoạn mở rộng chức năng** | ZeroClaw (hệ thống kỹ năng), NanoBot (tạo ảnh) | Nhà cung cấp/nền tảng/công cụ được xếp chồng nhanh chóng, trừu tượng hóa cơ sở bị tụt hậu |
| **Giai đoạn sửa lỗi ổn định** | OpenClaw, CoPaw, Hermes Agent | Lỗi P0/P1 dày đặc, phản hồi tập trung của người dùng về "nhiệm vụ hoàn thành không đáng tin cậy" |
| **Giai đoạn nuôi dưỡng hệ sinh thái** | LobsterAI, NullClaw | Cơ chế đóng góp bên ngoài yếu, phụ thuộc vào đội ngũ cốt lõi hoặc hầu như không có cộng đồng |

---

## 7. Tín hiệu xu hướng đáng chú ý

### Tín hiệu 1: **"Hoàn thành chắc chắn" thay thế cho "kết thúc sau khi tạo"**

> *"Mô hình tạo ra văn bản là hoàn thành? Tôi cần xác minh kết quả thực tế"* — Hermes #28056

Chế độ Kế hoạch của CoPaw, cổng chất lượng của Hermes, theo dõi trạng thái của tác nhân phụ OpenClaw, cùng nhau chỉ ra rằng việc thực thi Tác nhân cần **chuyển từ "đầu ra xác suất" sang "hoàn thành theo hợp đồng"**. Giá trị đối với nhà phát triển: khi thiết kế Tác nhân, cần rõ ràng định nghĩa bằng chứng hoàn thành (mã thoát, khẳng định, xác nhận thủ công), thay vì dựa vào đánh giá tự động của LLM.

### Tín hiệu 2: **Cuộc cách mạng "ngân sách" của hệ thống bộ nhớ**

Lỗ hổng ngân sách Seahorse của PicoClaw (32 tin nhắn được miễn trừ hoàn toàn), gọi lại FTS5 buộc phải của NullClaw không thể tắt, hệ thống Dream của NanoBot "không thể tắt telemetry", tất cả đều tiết lộ xung đột cùng một mô hình: **bộ nhớ đầy đủ mặc định = tổn thất gấp ba về hiệu suất/chi phí/riêng tư**. Kiến trúc Agent thế hệ tiếp theo cần hỗ trợ **ngân sách bộ nhớ chi tiết theo lượt/theo kỹ năng/theo chi phí**.

### Tín hiệu 3: **Cạm bẫy "tương thích giả" — API OpenAI không phải là viên đạn bạc**

#6558 của ZeroClaw (DashScope 405), #1984 của NanoClaw (thiếu tài liệu về điểm cuối tùy chỉnh), #15895 của Hermes (lỗi quota Gemini), tất cả cùng phơi bày tính chất "lừa đảo" của nhãn "tương thích OpenAI". Trong tích hợp thực tế, đường dẫn, lặp lại `/v1`, xử lý `extra_headers`, phân tích sự kiện luồng đều có sự khác biệt. Khuyến nghị: coi lớp thích ứng Nhà cung cấp là **vấn đề kỹ thuật hạng nhất**, thay vì là một mục cấu hình.

### Tín hiệu 4: **Công cụ chẩn đoán trở thành ngưỡng áp dụng**

Cấu trúc Doctor của OpenClaw, lời kêu gọi `hermes doctor` của Hermes, lỗi `doctor` của ZeroClaw bỏ qua api_key, tất cả cho thấy trong các tình huống "khởi động lại không có tác dụng", **khả năng tự phục vụ của người dùng trực tiếp quyết định tỷ lệ giữ chân**. Các dự án Agent cần tích hợp đầy đủ bộ công cụ kiểm tra sức khỏe, xác minh cấu hình, kiểm tra kết nối, xuất nhật ký (nhật ký Ctrl-S của IronClaw).

### Tín hiệu 5: **"Lớp tương thích" của hệ sinh thái mô hình tiếng Trung quyết định thị trường Châu Á-Thái Bình Dương**

Qwen (ZeroClaw #6558, CoPaw #4489), GLM (ZeroClaw #6643), MiniMax (NanoBot #3879, ZeroClaw #6758), SiliconFlow (PicoClaw #2885) xuất hiện dày đặc, nhưng **giao thức luồng, mã lỗi, định dạng gọi công cụ của mỗi bên đều có sự khác biệt tinh tế**. Giá trị đối với nhà phát triển: nếu nhắm vào thị trường Châu Á-Thái Bình Dương, cần dành 20-30% tài nguyên kỹ thuật cho lớp thích ứng Nhà cung cấp, thay vì giả định "tương thích là hoạt động".

---

## Báo cáo chi tiết về dự án cùng phân khúc

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Nhật ký hoạt động dự án NanoBot | 2026-05-19

> **Dự án**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)  
> **Ngày phân tích**: 2026-05-19 (Dựa trên dữ liệu 24 giờ qua)  
> **Chu kỳ dữ liệu**: 2026-05-18 đến 2026-05-19

---

## 1. Tổng quan hôm nay

NanoBot duy trì **nhịp độ phát triển cao** hôm nay, với 21 PR được cập nhật (10 đã hợp nhất/đóng) cho thấy hiệu quả thúc đẩy mạnh mẽ của đội ngũ cốt lõi. Mô-đun tạo ảnh đã trở thành tâm điểm kỹ thuật hôm nay, với việc tích hợp lần lượt hai Nhà cung cấp mới là MiniMax và Gemini, đồng thời kiến trúc cơ sở bắt đầu áp dụng mô hình Registry Nhà cung cấp để giải quyết vấn đề khả năng mở rộng. Trải nghiệm WebUI/triển khai tiếp tục được tối ưu hóa, nhưng các lỗi ảnh hưởng người dùng như đăng nhập WeChat vẫn chưa được sửa. Về phía cộng đồng, người dùng tự xây dựng các plugin hệ sinh thái (bộ nhớ bền vững Mnemon), cho thấy mầm mống hệ sinh thái bên ngoài dự án. Sức khỏe tổng thể: **hoạt động phát triển, cần tăng cường phản hồi các điểm đau của người dùng**.

---

## 2. Phát hành phiên bản

**Không có bản phát hành mới**

> Phiên bản mới nhất vẫn là v0.15 post 3 (theo báo cáo của người dùng Vấn đề #3863). 10 PR hợp nhất hôm nay chưa kích hoạt phát hành phiên bản, có thể đang trong khoảng thời gian giữa các lần lặp lại phiên bản.

---

## 3. Tiến độ dự án

### ✅ Các PR quan trọng đã hợp nhất/đóng hôm nay (10 mục)

| PR | Tác giả | Đóng góp cốt lõi | Ý nghĩa thúc đẩy dự án |
|:---|:---|:---|:---|
| [#3892](https://github.com/HKUDS/nanobot/pull/3892) | chengyongru | **Tái cấu trúc AgentRunner.run()**: Phương thức đơn thể 330 dòng được chia thành 9 phương thức tập trung, giới thiệu `RunContext` và liệt kê `LoopAction` | 🏗️ **Trả nợ kiến trúc**: Khả năng đọc của công cụ thực thi cốt lõi được cải thiện đáng kể, đặt nền móng cho tác nhân song song, công cụ gỡ lỗi sau này |
| [#3900](https://github.com/HKUDS/nanobot/pull/3900) | Re-bin | **Thêm Nhà cung cấp Ant Ling**: Hỗ trợ hạng nhất cho API tương thích OpenAI | 🌐 Mở rộng hệ sinh thái: Giảm ma sát cấu hình tùy chỉnh của người dùng |
| [#3899](https://github.com/HKUDS/nanobot/pull/3899) | Re-bin | **Luồng hoạt động chỉnh sửa tệp thời gian thực WebUI**: Sự kiện `write_file`/`edit_file`/`notebook_edit` + tăng dần tham số luồng | 🎨 Đột phá về khả năng quan sát: Giải quyết điểm đau của người dùng "thao tác hộp đen của tác nhân" |
| [#3886](https://github.com/HKUDS/nanobot/pull/3886) | zayfod | **Hỗ trợ tạo ảnh Gemini**: Điểm cuối kép Imagen 4 + Gemini Flash | 🖼️ Bổ sung khả năng đa phương thức, bao phủ người dùng hệ sinh thái Google |
| [#3879](https://github.com/HKUDS/nanobot/pull/3879) | yaotutu | **Hỗ trợ tạo ảnh MiniMax**: Mô hình `image-01` + khả năng tham khảo ảnh | 🖼️ Tích hợp hệ sinh thái mô hình trong nước |
| [#3890](https://github.com/HKUDS/nanobot/pull/3890) | chengyongru | **Trình hướng dẫn cài đặt mô hình CLI**: Giao diện CRUD tương tác, phục hồi từ PR bị loại bỏ #3696 | 🧑‍💻 Tối ưu hóa trải nghiệm onboarding cho người mới |
| [#3889](https://github.com/HKUDS/nanobot/pull/3889) | chengyongru | **Sửa lỗi hiển thị dòng đơn Markdown**: Plugin `remark-breaks` | 🐛 Sửa lỗi khả năng đọc đầu ra của lệnh như `/help` |
| [#3875](https://github.com/HKUDS/nanobot/pull/3875) | algojogacor | **Bổ sung tài liệu Docker**: Yêu cầu cấu hình WebUI + cờ bảo mật bwrap | 📚 Giải quyết cạm bẫy triển khai #3873, giảm ngưỡng container hóa |
| [#3897](https://github.com/HKUDS/nanobot/pull/3897) | SaiAkashNeela | `Vision` (không mô tả, đã đóng) | — |
| [#3883](https://github.com/HKUDS/nanobot/pull/3883) | AZX-Eddie | `feat(cli): add model configuration management commands` (đánh dấu [invalid] đóng) | — Chức năng trùng lặp/xung đột với #3890? |

### 📊 Phân cụm chủ đề hợp nhất hôm nay
```
Cơ sở hạ tầng tạo ảnh ████████░░ 40% (Gemini/MiniMax/Registry)
Trải nghiệm WebUI/Triển khai   █████░░░░░ 25% (Hoạt động thời gian thực/Hiển thị dòng/Tài liệu Docker)
Trải nghiệm nhà phát triển       ███░░░░░░░ 15% (Trình hướng dẫn CLI/Tái cấu trúc Tác nhân)
Hệ sinh thái Nhà cung cấp     ██░░░░░░░░ 10% (Ant Ling)
```

---

## 4. Điểm nóng cộng đồng

### 🔥 Vấn đề được thảo luận sôi nổi nhất: [Vấn đề #3863 WeChat không thể Đăng nhập](https://github.com/HKUDS/nanobot/issues/3863)
| Chỉ số | Dữ liệu |
|:---|:---|
| Số bình luận | **5** (cao nhất hôm nay) |
| Tạo | 2026-05-16 | Cập nhật | 2026-05-18 |
| Trạng thái | **MỞ**, 👍 0 |

**Phân tích yêu cầu người dùng**: Tích hợp hệ sinh thái WeChat là bối cảnh cốt lõi của người dùng Trung Quốc, nhưng thông báo lỗi "Phiên bản WeChat quá cũ" cho thấy giao thức đăng nhập WeChat của NanoBot có thể đã lỗi thời so với bản cập nhật ứng dụng WeChat. Vấn đề này đã tồn tại 3 ngày mà không nhận được phản hồi từ người bảo trì, có **rủi ro mất người dùng**.

> So sánh: Tích hợp mạng xã hội tương tự (như API X) cũng có vấn đề [#3901](https://github.com/HKUDS/nanobot/issues/3901), nhưng vấn đề WeChat ảnh hưởng rộng hơn.

### 🔥 Thảo luận có tín hiệu hệ sinh thái mạnh nhất: [Vấn đề #3888 Tích hợp bộ nhớ bền vững Mnemon](https://github.com/HKUDS/nanobot/issues/3888)
- Mặc dù đã ĐÓNG (mang tính quảng bá), nhưng nó phản ánh **cộng đồng tự phát lấp đầy khoảng trống năng lực của chính thức**
- Cơ chế bộ nhớ gốc của NanoBot (Hệ thống Dream) đang bị đặt câu hỏi (xem [#3885](https://github.com/HKUDS/nanobot/issues/3885)), các giải pháp của bên thứ ba đang tìm cách thâm nhập.

### 🔥 Trọng tâm nợ kỹ thuật: [Vấn đề #3903 Theo dõi tạo ảnh](https://github.com/HKUDS/nanobot/issues/3903)
- Tự mở bởi tác giả #3893, liệt kê **2 vấn đề cấp kiến trúc**: mã hóa cứng MIME loại, vòng lặp HTTP bỏ qua lớp cơ sở
- Cho thấy rủi ro tích lũy nợ kỹ thuật trong quá trình mở rộng nhanh chóng của mô-đun tạo ảnh

---

## 5. Lỗi và Độ ổn định

| Ưu tiên | Vấn đề | Mô tả | Trạng thái | PR Sửa lỗi |
|:---|:---|:---|:---|:---|
| 🔴 **P0-Chặn người dùng** | [#3863](https://github.com/HKUDS/nanobot/issues/3863) | Đăng nhập WeChat hoàn toàn không khả dụng ("Phiên bản quá cũ") | MỞ 3 ngày | ❌ Không có |
| 🟡 **P1-Chức năng bất thường** | [#3901](https://github.com/HKUDS/nanobot/issues/3901) | Vòng lặp công cụ API X, đạt đến số lần lặp lại tối đa | MỞ | ❌ Không có |
| 🟡 **P1-Lỗi kiến trúc** | [#3903](https://github.com/HKUDS/nanobot/issues/3903) | MiniMax/AIHubMix tạo ảnh: mã hóa cứng MIME + vòng lặp HTTP bỏ qua lớp cơ sở | MỞ | 🔄 [#3893](https://github.com/HKUDS/nanobot/pull/3893) bao phủ một phần |
| 🟢 **P2-Ma sát triển khai** | [#3873](https://github.com/HKUDS/nanobot/issues/3873) | Tài liệu Docker không nhất quán với v0.2.0 (WebUI/bwrap/proxy ngược) | ĐÃ ĐÓNG | ✅ [#3875](https://github.com/HKUDS/nanobot/pull/3875) |

**Đánh giá độ ổn định**: Động cơ thực thi cốt lõi được cải thiện sức khỏe lâu dài nhờ tái cấu trúc #3892, nhưng **tính mong manh của tích hợp bên ngoài rất rõ ràng** (giao thức WeChat lỗi thời, logic kiểm soát tốc độ API X có lỗi). Mô-đun tạo ảnh có rủi ro "xếp chồng chức năng nhanh chóng, trừu tượng hóa cơ sở bị tụt hậu".

---

## 6. Yêu cầu chức năng và tín hiệu lộ trình

| Yêu cầu | PR/Vấn đề | Mức độ trưởng thành | Xác suất đưa vào phiên bản tiếp theo |
|:---|:---|:---|:---|
| **Công tắc toàn cục hệ thống Dream** | [#3885](https://github.com/HKUDS/nanobot/issues/3885) | Có giải pháp rõ ràng (trường boolean `enabled`), cộng đồng đã +1 | **Cao** ⭐ |
| **Cơ chế ủy quyền cho lệnh nguy hiểm** | [#3887](https://github.com/HKUDS/nanobot/issues/3887) | Yêu cầu rõ ràng, xung đột với mã hóa cứng `deny_patterns` | Trung-cao |
| **Registry Nhà cung cấp tạo ảnh** | [#3893](https://github.com/HKUDS/nanobot/pull/3893) | PR đã mở, giải quyết vấn đề "thay đổi 8 tệp để thêm Nhà cung cấp" | **Cao** ⭐ (đã mở) |
| **Chế độ hạn chế cô lập công cụ** | [#3898](https://github.com/HKUDS/nanobot/pull/3898) | PR đã mở, hướng tăng cường bảo mật | Trung bình |
| **Sửa lỗi mất nội dung công cụ skill_load** | [#3847](https://github.com/HKUDS/nanobot/pull/3847) | Chờ hợp nhất, sửa lỗi quan trọng cho cuộc trò chuyện đa lượt | Trung-cao |

**Tín hiệu lộ trình**:
- **Tăng cường bảo mật** trở thành chủ đề rõ ràng: #3887 (ủy quyền), #3898 (chế độ hạn chế), #3892 (tái cấu trúc tác nhân giảm bề mặt lỗi)
- **Nền tảng đa phương thức** bước vào giai đoạn nền tảng: Registry Nhà cung cấp (#3893) là bước chuyển quan trọng từ "cộng" sang "nhân".

---

## 7. Tóm tắt phản hồi người dùng

### 😫 Điểm đau cốt lõi

| Điểm đau | Nguồn | Kịch bản điển hình |
|:---|:---|:---|
| **Hệ sinh thái WeChat bị ngắt kết nối** | [#3863](https://github.com/HKUDS/nanobot/issues/3863) Bình luận | "Mã QR hiện lên, WeChat quét cái là báo phiên bản thấp" — Cổng chính của người dùng Trung Quốc không hoạt động |
| **Hệ thống bộ nhớ không thể kiểm soát** | [#3885](https://github.com/HKUDS/nanobot/issues/3885) | Mặc dù đã tắt hệ thống memory, các tác vụ Dream vẫn chạy ngầm, "cảm giác như telemetry không thể tắt" |
| **Phép thuật triển khai đen** | [#3873](https://github.com/HKUDS/nanobot/issues/3873) | Sự kết hợp Docker+WebUI+bwrap đòi hỏi phải đọc mã nguồn mới cấu hình được |
| **Thao tác của Tác nhân không hiển thị** | Gián tiếp (hướng sửa chữa #3899) | Các hành động quan trọng như chỉnh sửa tệp không có phản hồi thời gian thực, gây lo lắng cho người dùng |

### 😊 Điểm hài lòng
- **Khả năng mở rộng của hệ sinh thái**: Người dùng có thể tích hợp các giải pháp của bên thứ ba như Mnemon một cách tự phát ([#3888](https://github.com/HKUDS/nanobot/issues/3888))
- **Tốc độ mở rộng Nhà cung cấp**: Ant Ling, Gemini, MiniMax được tích hợp nhanh chóng

### 💡 Nhu cầu ngầm
> "Hy vọng có một công tắc cấu hình rõ ràng để người ta có thể chọn **không đăng ký hoàn toàn** các tác vụ Hệ thống Dream" —— [#3885](https://github.com/HKUDS/nanobot/issues/3885)

Người dùng không cần "thêm cấu hình", mà cần **cảm giác kiểm soát chắc chắn**. Hệ thống hiện tại quá "thông minh tự động", thay vào đó lại gây mất lòng tin.

---

## 8. Tồn đọng cần xử lý

### ⏳ PR có giá trị cao chưa phản hồi trong thời gian dài

| PR | Tạo | Cập nhật cuối cùng | Rủi ro | Hành động đề xuất |
|:---|:---|:---|:---|:---|
| [#3621](https://github.com/HKUDS/nanobot/pull/3621) Triển khai đa tác nhân HF Spaces | 2026-05-04 | 2026-05-18 | **15 ngày chưa giải quyết**, xác minh môi trường sản xuất đã hoàn thành | Cần người bảo trì xác định tiêu chí hợp nhất rõ ràng hoặc chia nhỏ |
| [#3568](https://github.com/HKUDS/nanobot/pull/3568) Router LLM Manifest | 2026-04-30 | 2026-05-18 | **19 ngày chưa giải quyết**, mô hình Nhà cung cấp kiểu cổng | Có sự phụ thuộc với tái cấu trúc Registry #3893, cần phối hợp |
| [#3643](https://github.com/HKUDS/nanobot/pull/3643) Nhà cung cấp Qiniu Cloud | 2026-05-06 | 2026-05-18 | **13 ngày chưa giải quyết**, nhà cung cấp đám mây trong nước | Phạm vi kiểm tra đầy đủ, có thể bị chặn bởi băng thông xem xét |
| [#3762](https://github.com/HKUDS/nanobot/pull/3762) Thử lại khi Codex lỗi | 2026-05-12 | 2026-05-18 | **7 ngày chưa giải quyết**, sửa lỗi ổn định | Tác giả đánh dấu [question], cần người bảo trì làm rõ thiết kế |

### ⏳ Lỗi ảnh hưởng người dùng chưa phản hồi

| Vấn đề | Số ngày | Ảnh hưởng |
|:---|:---|:---|
| [#3863](https://github.com/HKUDS/nanobot/issues/3863) Đăng nhập WeChat | **3 ngày** | Cổng chính cho người dùng Trung Quốc |
| [#3901](https://github.com/HKUDS/nanobot/issues/3901) Vòng lặp API X | **1 ngày** | Kịch bản tự động hóa mạng xã hội |

---

## Phụ lục: Bảng điều khiển dữ liệu hôm nay

```
Vấn đề     ████████░░░░░░░░░░░░  7 mục (5 hoạt động/2 đóng)
PRs     ████████████████████ 21 mục (11 chờ hợp nhất/10 đã xử lý)
Phát hành ░░░░░░░░░░░░░░░░░░░░  0 mục
Điểm nóng bình luận #3863(5) > #3888(1) = #3885(1) = #3873(1)
```

> **Đề xuất bảo trì**: Ưu tiên phản hồi vấn đề đăng nhập WeChat #3863 (chặn tăng trưởng người dùng), đẩy nhanh việc hợp nhất Registry tạo ảnh #3893 (kiềm chế nợ kỹ thuật), đặt thời hạn xem xét rõ ràng cho các PR dài hạn như #3621/#3568.

---

*Thời gian tạo báo cáo hàng ngày: 2026-05-19*  
*Nguồn dữ liệu: API GitHub / HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Nhật ký hoạt động dự án Hermes Agent | 2026-05-19

---

## 1. Tổng quan hôm nay

Hermes Agent hôm nay cho thấy **mức độ hoạt động cao, đặc điểm tồn đọng cao**. Trong 24 giờ qua, Vấn đề và PR đều cập nhật 50 mục, nhưng tỷ lệ hợp nhất/đóng thấp (chỉ đóng 6/50 Vấn đề, chỉ hợp nhất 7/50 PR), cho thấy hoạt động đóng góp cộng đồng tích cực nhưng băng thông xem xét mã bị điểm nghẽn. Chỉ 3 ngày sau khi phát hành v0.14.0, nhiều lỗi hồi quy quan trọng (4 lỗi cấp P1) đã bị lộ, đặc biệt là lỗi `NameError` trong `conversation_loop.py` và sự cố treo xử lý luồng Anthropic, cho thấy rủi ro ổn định được giới thiệu bởi tái cấu trúc v0.14.0 đang được giải phóng tập trung. Không có bản phát hành mới, trọng tâm của đội ngũ bảo trì rõ ràng chuyển sang sửa lỗi khẩn cấp.

---

## 2. Phát hành phiên bản

**Không có bản phát hành mới.**

Phiên bản mới nhất hiện tại vẫn là **v0.14.0 (2026-05-16)**, nhưng phiên bản này đã trở thành nguồn gốc của nhiều lỗi hồi quy cấp P1 hôm nay.

---

## 3. Tiến độ dự án

### Các PR quan trọng đã hợp nhất/đóng hôm nay (7 mục)

| PR | Loại | Mô tả | Liên kết |
|:---|:---|:---|:---|
| #28257 | ❌ ĐÃ ĐÓNG | `feat: add dry-run model routing preview` — Xem trước đề xuất phân cấp mô hình Caelus, bị đóng do không vượt qua đánh giá bảo mật/phạm vi | [PR #28257](https://github.com/NousResearch/hermes-agent/pull/28257) |
| #23854 | ❌ ĐÃ ĐÓNG | `feat(cli): add /update slash command to CLI and TUI` — Mở rộng `/update` từ gateway_only sang CLI/TUI, cải thiện sự tiện lợi khi cập nhật | [PR #23854](https://github.com/NousResearch/hermes-agent/pull/23854) |
| #28247 | ❌ ĐÃ ĐÓNG | `Add redacted credential wrapper` — Trình bao bọc làm mờ chứng chỉ, tăng cường bảo mật PR bị đóng (lý do không rõ, có thể cần tái cấu trúc) | [PR #28247](https://github.com/NousResearch/hermes-agent/pull/28247) |

> **Lưu ý**: Trong số 7 PR đã hợp nhất/đóng, chỉ có 3 PR xuất hiện trong danh sách hàng đầu. 4 PR còn lại không nằm trong top 20 bảng xếp hạng bình luận. Tỷ lệ hợp nhất hôm nay là 14% (7/50), thấp hơn ngưỡng lành mạnh (>25-30%) của các dự án lành mạnh, **điểm nghẽn xem xét đáng kể**.

### Hướng thúc đẩy chính

| Hướng | PR đại diện | Trạng thái |
|:---|:---|:---|
| Quản trị vòng đời hội thoại | #27029, #28255 | Sửa lỗi rò rỉ hội thoại CLI/TUI, vấn đề tồn đọng hàng trong cơ sở dữ liệu |
| Tính toàn vẹn của hệ sinh thái MCP | #22148 | Sửa lỗi xây dựng wheel thiếu mô-đun `mcp_serve` (khả năng sử dụng NixOS) |
| Độ mạnh mẽ của thích ứng nền tảng | #28261 (Discord), #28259 (Telegram) | Tải chậm, phạm vi kiểm tra hồi quy |
| Bảo mật ACP đa nền tảng | #28262 | Sửa lỗi phê duyệt tự động cho workspace trên macOS/Windows |

---

## 4. Điểm nóng cộng đồng

### Các Vấn đề được thảo luận sôi nổi nhất

| Vấn đề | Bình luận | Yêu cầu cốt lõi | Liên kết |
|:---|:---|:---|:---|
| **#15895** lỗi quota sai 429 cho google-gemini-cli | **13 bình luận** | Người dùng có quota Gemini Pro hợp lệ (xác nhận qua `/gquotas`), nhưng chế độ OAuth liên tục kích hoạt 405, nghi ngờ logic giới hạn tốc độ của Hermes không đồng bộ với hệ thống quota của Google | [Vấn đề #15895](https://github.com/NousResearch/hermes-agent/issues/15895) |
| **#7746** Lỗi làm mới JSON qwen-oauth | **5 bình luận** | Cùng một tệp chứng chỉ hoạt động bình thường với `qwen-code-api`, nhưng Hermes lại phân tích lỗi, **tính tương thích chứng chỉ giữa các công cụ** trở thành điểm đau | [Vấn đề #7746](https://github.com/NousResearch/hermes-agent/issues/7746) |
| **#23799** Tạo lại hạm đội OpenClaw + quy trình phụ MCP | **5 bình luận** | **Thiếu sót về rò rỉ bộ nhớ và quản trị quy trình** trong bối cảnh gọi công cụ hai chiều, ảnh hưởng đến độ ổn định chạy dài hạn | [Vấn đề #23799](https://github.com/NousResearch/hermes-agent/issues/23799) |
| **#28056** Cổng chất lượng trong quá trình chạy và thử lại có giới hạn | **4 bình luận** | Các tình huống tự động hóa cấp doanh nghiệp (kiểm tra bảo mật, kiểm tra tuân thủ) yêu cầu **tiêu chuẩn hoàn thành chắc chắn**, thay vì "kết thúc sau khi tạo" bởi mô hình | [Vấn đề #28056](https://github.com/NousResearch/hermes-agent/issues/28056) |
| **#524**