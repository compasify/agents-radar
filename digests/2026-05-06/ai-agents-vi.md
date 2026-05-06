# OpenClaw Sinh nhật ký ngày 2026-05-06

> Vấn đề: 500 | PR: 500 | Số dự án được bao phủ: 13 | Thời gian tạo: 2026-05-06 00:19 UTC

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

## Báo cáo chuyên sâu dự án OpenClaw

# Nhật ký hàng ngày về hoạt động dự án OpenClaw | 2026-05-06

## 1. Tổng quan hôm nay

OpenClaw duy trì hoạt động cực kỳ sôi nổi hôm nay, với **500 lượt cập nhật Vấn đề** (326 hoạt động/mới mở, 174 đã đóng) và **500 lượt cập nhật PR** (357 chờ hợp nhất, 143 đã hợp nhất/đóng) trong vòng 24 giờ, cho thấy động lực cộng đồng mạnh mẽ. Dự án vừa phát hành phiên bản ổn định **v2026.5.4** cùng hai phiên bản beta, tập trung cốt lõi vào tối ưu hóa cầu nối âm thanh thời gian thực cho Google Meet/Voice Call. Đáng chú ý, hôm nay có nhiều lỗi hồi quy ưu tiên cao mới xuất hiện, liên quan đến việc treo gateway Discord, mất tin nhắn Control UI, lỗi plugin WeChat, v.v., áp lực về tính ổn định đáng kể; đồng thời, nhu cầu đa nền tảng đối với các bản dựng máy tính để bàn Linux/Windows, hộp cát bảo mật, APK dựng sẵn, v.v. tiếp tục tăng cao, Vấn đề dài hạn #75 đã tích lũy 104 bình luận, trở thành một trong những yêu cầu chưa được giải quyết lớn nhất.

---

## 2. Phát hành phiên bản

### [v2026.5.4](https://github.com/openclaw/openclaw/releases/tag/v2026.5.4)（Phiên bản ổn định）
| Thuộc tính | Chi tiết |
|:---|:---|
| Thời gian phát hành | 2026-05-05 đến 2026-05-06 |
| Phiên bản trước | v2026.5.4-beta.3, v2026.5.4-beta.2 |

**Cập nhật cốt lõi: Tái cấu trúc cầu nối âm thanh thời gian thực Google Meet/Voice Call**
- **Tích hợp Gemini Real-time Voice Bridge với Twilio dial-in**: Thay thế fallback TwiML truyền thống, đạt được âm thanh hai chiều độ trễ thấp
- **Chi tiết kỹ thuật**: Luồng âm thanh theo bước (paced audio streaming), bộ đệm nhận biết áp lực ngược (backpressure-aware buffering), làm sạch hàng đợi ngắt quãng (barge-in queue clearing)
- **Trải nghiệm người dùng**: Người tham gia Meet có phản hồi thao tác nhanh hơn đáng kể ("Op nhanh hơn nhiều")

**Lưu ý di chuyển**: Người dùng plugin WeChat cần cảnh giác — [Vấn đề #77779](https://github.com/openclaw/openclaw/issues/77779) báo cáo rằng `@tencent-weixin/openclaw-weixin` v2.4.1 gặp lỗi lặp lại do `api.runtime undefined` sau khi nâng cấp lên 2026.5.4, hiện chưa có bản sửa lỗi chính thức.

---

## 3. Tiến độ dự án

### Các PR quan trọng được hợp nhất/đóng hôm nay

| PR | Tác giả | Đóng góp cốt lõi | Trạng thái |
|:---|:---|:---|:---|
| [#77205](https://github.com/openclaw/openclaw/pull/77205) | [steipete](https://github.com/steipete) | **Tái cấu trúc vòng đời tin nhắn liên kênh**：Di chuyển tin nhắn cuối cùng, tin nhắn công cụ, xem trước thời gian thực, xác nhận trả lời từ 20+ kênh (Discord/Slack/Telegram/WeChat, v.v.) sang `openclaw/plugin-sdk/channel-message`, lớp lõi quản lý vòng đời chia sẻ | 🔥 **Chờ hợp nhất** (Cấp XL) |
| [#78065](https://github.com/openclaw/openclaw/pull/78065) | [vincentkoc](https://github.com/vincentkoc) | Khắc phục sự cố che khuất phiên bản plugin chính thức sau `openclaw update`: Đồng bộ hóa trạng thái cài đặt plugin chính thức, ngăn phiên bản plugin cũ ghi đè chức năng cốt lõi của phiên bản mới | Chờ hợp nhất |
| [#77731](https://github.com/openclaw/openclaw/pull/77731) | [vincentkoc](https://github.com/vincentkoc) | **Sửa lỗi cấu hình định tuyến Codex cũ của `openclaw doctor`**: Tự động phát hiện và sửa lỗi tham chiếu lỗi thời `openai-codex/*`, giải quyết vấn đề khóa cấu hình do ghim phiên | Chờ hợp nhất |
| [#77880](https://github.com/openclaw/openclaw/pull/77880) | [BunsDev](https://github.com/BunsDev) | Thêm `openclaw sessions cleanup --fix-dm-scope`: Dọn dẹp các dòng phiên nhắn tin riêng bị cô lập còn sót lại sau khi `dmScope` trở về `main` | Chờ hợp nhất |
| [#77018](https://github.com/openclaw/openclaw/pull/77018) | [jesse-merhi](https://github.com/jesse-merhi) | **Tinh chỉnh bỏ qua proxy**: Giới thiệu `proxy.loopbackMode` (chỉ gateway/proxy/chặn) để tránh ô nhiễm biến môi trường NO_PROXY tạm thời | Chờ hợp nhất |
| [#75035](https://github.com/openclaw/openclaw/pull/75035) | [jesse-merhi](https://github.com/jesse-merhi) | **Cổng kiểm soát vòng đời chặn đầu vào người dùng**: Hook `before_agent_run`, hỗ trợ ủy quyền truy cập rõ ràng vào cuộc hội thoại, chỉ giữ lại bản tóm tắt ghi lại người dùng đã ẩn danh khi chặn | Chờ hợp nhất |
| [#75722](https://github.com/openclaw/openclaw/pull/75722) | [eleqtrizit](https://github.com/eleqtrizit) | **Cưỡng chế khả năng hiển thị phiên Bộ nhớ Wiki**: Truy vấn bộ nhớ chia sẻ khớp với chiến lược phiên gọi tác nhân, ngăn chặn rò rỉ dữ liệu giữa các phiên | ✅ Đã hợp nhất |

**Đánh giá tiến độ tổng thể**: Đã đạt được tiến bộ cấu trúc ở cấp độ cơ sở hạ tầng (vòng đời tin nhắn, chiến lược tác nhân, dọn dẹp phiên), nhưng việc sửa lỗi ổn định kênh (QQBot, Feishu, WeChat) vẫn rải rác trong nhiều PR riêng lẻ, thiếu kiểm tra hồi quy hợp nhất.

---

## 4. Điểm nóng cộng đồng

### Vấn đề được bình luận nhiều nhất (Phân tích yêu cầu)

| Xếp hạng | Vấn đề | Bình luận | 👍 | Yêu cầu cốt lõi | Liên kết |
|:---|:---|:---:|:---|:---|
| 1 | **Ứng dụng Linux/Windows Clawdbot** | 104 | Thiếu phiên bản máy tính để bàn đa nền tảng, macOS/iOS/Android đã bao phủ, nhà phát triển yêu cầu mạnh mẽ các chức năng tương đương trên Linux/Windows | [#75](https://github.com/openclaw/openclaw/issues/75) |
| 2 | **Văn bản giữa các lệnh công cụ bị rò rỉ sang các kênh nhắn tin** | 25 | Văn bản xử lý nội bộ của tác nhân (xử lý lỗi, xác nhận thực thi) được định tuyến sai thành tin nhắn hiển thị cho người dùng, lỗi UX nghiêm trọng | [#25592](https://github.com/openclaw/openclaw/issues/25592) |
| 3 | **Phát hành APK Android dựng sẵn** | 24 | Giảm ngưỡng nhập cho Android, hiện yêu cầu tự biên dịch `apps/android` | [#9443](https://github.com/openclaw/openclaw/issues/9443) |
| 4 | **Theo dõi hành vi và quỹ đạo của tác nhân phát triển trực tiếp** | 22 | Thí nghiệm quan sát hành vi tác nhân 24 giờ của người bảo trì [pashpashpash](https://github.com/pashpashpash), khám phá giới hạn của tác nhân tự trị | [#77598](https://github.com/openclaw/openclaw/issues/77598) |
| 5 | **`memoryFlush` không kích hoạt đáng tin cậy** | 19 | Lỗi logic khử trùng lặp trong chu kỳ nén tự động, dẫn đến kích hoạt không đều | [#12590](https://github.com/openclaw/openclaw/issues/12590) |

**Hiểu biết về yêu cầu**: Cộng đồng thể hiện sự lo lắng kép về "mở rộng nền tảng" (máy tính để bàn/APK) và "sẵn sàng cho sản xuất" (rò rỉ tin nhắn, độ tin cậy làm mới bộ nhớ). Vấn đề #75, kể từ khi tạo vào ngày 2026-01-01, đã liên tục gây chú ý, trở thành một điểm thiếu hụt mang tính biểu tượng về tính toàn vẹn của hệ sinh thái dự án; Vấn đề #25592, tiết lộ vấn đề "rò rỉ trạng thái nội bộ", nhắm trực tiếp vào các khiếm khuyết cơ bản của kiến trúc hội thoại đa vòng.

---

## 5. Lỗi và tính ổn định

### Sắp xếp theo mức độ nghiêm trọng

| Ưu tiên | Vấn đề | Loại | Phạm vi ảnh hưởng | Trạng thái sửa lỗi | Liên kết |
|:---|:---|:---|:---|:---|:---|
| 🔴 **P0-Hồi quy** | **Discord gateway bị treo khi 'chờ sẵn sàng gateway'** | Treo vô hạn, không có sự kiện hết giờ/lỗi | Người dùng macOS, lỗi vòng đời Carbon Client, 6 Vấn đề trùng lặp đã đóng | [PR #77067](https://github.com/openclaw/openclaw/pull/77067) (Sửa lỗi tương tự QQBot, không tương ứng trực tiếp) | [#77668](https://github.com/openclaw/openclaw/issues/77668) |
| 🔴 **P0-Hồi quy** | **Tin nhắn Trợ lý biến mất khỏi Giao diện Điều khiển** | Hủy hoại UX nghiêm trọng, tin nhắn trợ lý trước đó im lặng biến mất sau mỗi tin nhắn người dùng | Người dùng WebChat/Giao diện Điều khiển | Không có PR trực tiếp | [#77374](https://github.com/openclaw/openclaw/issues/77374) |
| 🔴 **P0-Hồi quy** | **Plugin WeChat không khởi động — `api.runtime undefined`** | Vòng lặp lỗi plugin sau khi nâng cấp lên 2026.5.4 (tự động khởi động lại sau 10 giây) | Người dùng kênh WeChat | Không có PR, được đánh dấu là Không đối với trình chặn beta | [#77779](https://github.com/openclaw/openclaw/issues/77779) |
| 🟡 **P1-Hồi quy** | **Kênh Feishu bị lỗi sau 2026.5.2** | Trường `appId`/`appSecret` không tương thích, vòng lặp lỗi gateway | Người dùng doanh nghiệp Feishu | Không có PR trực tiếp | [#77116](https://github.com/openclaw/openclaw/issues/77116) |
| 🟡 **P1-Hồi quy** | **`reasoning_content` trong lịch sử hội thoại gây lỗi phân tích cú pháp JSON oMLX** | Nội dung suy luận Qwen 3.5 làm ô nhiễm gói yêu cầu tiếp theo | Người dùng oMLX + Qwen 3.5 | Không có PR | [#46637](https://github.com/openclaw/openclaw/issues/46637) |
| 🟡 **P1** | **CPU/tỷ lệ tải cao trong các tác vụ thời gian chạy Codex** | CPU tăng đột biến trong thời gian chạy Codex trên máy chủ Linux cấu hình nhỏ, hook relay và hoạt động phiên/lịch sử khuếch đại | Triển khai bị giới hạn tài nguyên | Không có PR | [#76552](https://github.com/openclaw/openclaw/issues/76552) |
| 🟡 **P1** | **Chỉnh sửa tệp hộp cát ghi lại tệp không gian làm việc thành 0600** | Chỉnh sửa trong hộp cát Docker làm hỏng quyền tệp máy chủ, thất bại `EACCES` | Người dùng WSL/Docker | ✅ [PR #44077](https://github.com/openclaw/openclaw/issues/44077) đã đóng | [#44077](https://github.com/openclaw/openclaw/issues/44077) |
| 🟢 **P2** | **Việc gửi Chủ đề Diễn đàn Telegram Thất bại Im lặng** | Phản hồi chủ đề diễn đàn bị bỏ qua im lặng, không có lệnh gọi API `sendMessage` | Người dùng diễn đàn Telegram | ✅ Đã đóng | [#77248](https://github.com/openclaw/openclaw/issues/77248) |

**Đánh giá tính ổn định**: Mật độ lỗi hồi quy hôm nay cao bất thường, và nhiều lỗi liên quan đến "lỗi sau khi nâng cấp" (WeChat, Feishu, Discord), cho thấy việc kiểm tra khả năng tương thích của kênh trong chuỗi 2026.5.x có thể có lỗ hổng hệ thống. Mất tin nhắn Control UI (#77374) và không xác định thời gian chạy WeChat (#77779) vẫn chưa có PR sửa lỗi, nên người bảo trì ưu tiên xử lý.

---

## 6. Yêu cầu chức năng và tín hiệu lộ trình

| Vấn đề | Chức năng | Cường độ cộng đồng | Tín hiệu khả năng đưa vào | Liên kết |
|:---|:---|:---:|:---|:---|
| **Danh sách từ chối cho việc phê duyệt thực thi** | Chính sách "Cho phép tất cả trừ X", bổ sung chế độ danh sách trắng hiện có | 👍 7 | Cao — Yêu cầu an ninh cấp bách, PR [#75143](https://github.com/openclaw/openclaw/pull/75143) đã thúc đẩy tăng cường chế độ tham số danh sách cho phép | [#6615](https://github.com/openclaw/openclaw/issues/6615) |
| **Hồ sơ bảo mật OpenClaw v1.1** | Mô hình bảo mật tập trung vào dữ liệu: quy tắc mã hóa cứng thay vì phán đoán LLM, ngăn chặn trộm ví/xóa DB/lạm dụng plugin | 👍 3 | Trung bình cao — Khung hoàn chỉnh do [Ar3ss12](https://github.com/Ar3ss12) đề xuất, nhưng cần ủy ban kiến trúc xem xét | [#8719](https://github.com/openclaw/openclaw/issues/8719) |
| **Tự động cập nhật với lịch trình có thể cấu hình** | Cập nhật tự động tích hợp: định kỳ, lời nhắc xác nhận, thông báo sau cập nhật | 👍 0 | Trung bình — Cơ sở hạ tầng trưởng thành, nhưng cần tích hợp với `update.checkOnStart` hiện có | [#12855](https://github.com/openclaw/openclaw/issues/12855) |
| **Kích hoạt mô hình dự phòng khi vượt quá độ dài ngữ cảnh** | Tự động hạ cấp mô hình dự phòng khi vượt quá ngữ cảnh | 👍 0 | Trung bình — `agents.defaults.model.fallbacks` đã tồn tại, chỉ thiếu mở rộng điều kiện kích hoạt | [#9986](https://github.com/openclaw/openclaw/issues/9986) |
| **Webhook hook tái sử dụng phiên hiện có** | Thực hiện tính nhất quán `sessionKey` cho các cuộc gọi hook đa vòng thực sự | 👍 0 | Trung bình cao — Chức năng được hứa hẹn trong tài liệu không khớp với hành vi thực tế, thuộc loại "yêu cầu lỗi" | [#11665](https://github.com/openclaw/openclaw/issues/11665) |
| **Thêm `openai-codex/gpt-5.2` vào danh sách trắng suy nghĩ xhigh** | Mở rộng danh sách mô hình chế độ suy nghĩ cao | 👍 5 | **Cao** — Thay đổi cấu hình điểm duy nhất, cộng đồng kêu gọi làm rõ | [#6820](https://github.com/openclaw/openclaw/issues/6820) |
| **Hỗ trợ AllowBots cho nhóm Telegram** | Tương tác nhiều bot trong cùng một nhóm (đã có trên Discord/Slack) | 👍 4 | Trung bình — Yêu cầu điều chỉnh kiến trúc kênh Telegram | [#8295](https://github.com/openclaw/openclaw/issues/8295) |

---

## 7. Tóm tắt phản hồi của người dùng

### Điểm đau thực tế

| Kịch bản | Vấn đề Nguồn | Tâm trạng |
|:---|:---|:---:|
| **Lo lắng "nâng cấp là lỗi"**：Nhiều người dùng báo cáo plugin kênh (WeChat, Feishu, Discord) bị vô hiệu hóa trực tiếp sau khi nâng cấp từ 2026.4.x lên 2026.5.x, thiếu đường dẫn di chuyển mượt mà | #77779, #77116, #77668 | 😤 Tức giận |
| **Tình huống khó khăn "gỡ lỗi hộp đen"**：Văn bản xử lý nội bộ của tác nhân (trạng thái xử lý công cụ) bị rò rỉ vào tin nhắn người dùng, nhà phát triển không thể phân biệt "đầu ra hiển thị cho người dùng" và "nhật ký xử lý nội bộ" | #25592 | 😵‍💫 Hoang mang |
| **Sự tàn bạo của CPU cho các triển khai nhạy cảm về tài nguyên**：Thời gian chạy Codex trên máy chủ Linux cấu hình nhỏ có CPU tăng đột biến, hook relay và hoạt động phiên tạo ra hiệu ứng khuếch đại | #76552 | 😰 Lo lắng |
| **Mất tầm nhìn ngữ cảnh**：Tác nhân không có cửa sổ ngữ cảnh hiển thị theo phần trăm, dẫn đến nén và mất trạng thái bất ngờ, "giống như lái xe mà không có đồng hồ xăng" | #2597 | 😤 Tức giận |
| **Phóng đại bản ghi hình ảnh Discord**：Hình ảnh base64 được lưu trực tiếp vào bản ghi phiên, khoảng 7 hình ảnh là đạt đến giới hạn 200K token | #1210 | 😩 Mệt mỏi |

### Điểm hài lòng

- **Tối ưu hóa cầu nối âm thanh Google Meet** (v2026.5.4) nhận được đánh giá tích cực "nhanh hơn", độ trễ tương tác thời gian thực được cải thiện đáng kể
- Công cụ **`openclaw doctor`** tiếp tục mở rộng (PR #77731), giảm gánh nặng nhận thức khi di chuyển cấu hình

---

## 8. Tồn đọng chờ xử lý

### Các vấn đề tồn đọng dài hạn, cần sự tham gia của người bảo trì

| Vấn đề | Ngày tạo | Trạng thái hiện tại | Rủi ro | Liên kết |
|:---|:---|:---|:---|:---|
| **Ứng dụng Linux/Windows Clawdbot** | 2026-01-01 | 104 bình luận, 74 👍, nhãn `enhancement, help wanted` | ⚠️ **Thiếu hụt tính toàn vẹn hệ sinh thái**: Một lượng lớn nhà phát triển đang chuyển sang các đối thủ cạnh tranh, chiến lược độc quyền macOS không bền vững | [#75](https://github.com/openclaw/openclaw/issues/75) |
| **Mất ngữ cảnh/trạng thái sau khi nén bất ngờ** | 2026-01-27 | 8 bình luận, vấn đề cốt lõi nhưng thảo luận thưa thớt | Vấn đề cơ bản về trải nghiệm người dùng, kết hợp rủi ro với #12590 (không đáng tin cậy `memoryFlush`) | [#2597](https://github.com/openclaw/openclaw/issues/2597) |
| **Hình ảnh từ Discord được lưu dưới dạng base64 trong bản ghi phiên** | 2026-01-19 | 6 bình luận, không 👍 | Chi phí tiềm ẩn: lãng phí cửa sổ ngữ cảnh, phình to bộ nhớ, phá hủy khả năng đọc bản ghi | [#1210](https://github.com/openclaw/openclaw/issues/1210) |
| **Phát hành APK Android dựng sẵn** | 2026-02-05 | 24 bình luận, 1 👍 | Ngưỡng nhập cho thiết bị di động, hình thành khoảng trống "desktop + di động" kép với #75 | [#9443](https://github.com/openclaw/openclaw/issues/9443) |
| **ClawdBot an toàn/không an toàn** | 2026-02-02 | 12 bình luận, đề xuất viết lại bằng Rust | Tranh cãi lớn (viết lại hoàn toàn), nhưng nhu cầu hộp cát bảo mật là có thật | [#6731](https://github.com/openclaw/openclaw/issues/6731) |

**Đề xuất hành động của người bảo trì**:
1. **Khẩn cấp**: Phân bổ chủ sở hữu sửa lỗi cho #77779 (lỗi WeChat), #77374 (mất tin nhắn Giao diện Điều khiển), xem xét hotfix 2026.5.5
2. **Tuần này**: Đánh giá giải pháp kỹ thuật cho ứng dụng máy tính để bàn Linux/Windows của #75, phát hành RFC để thu thập đóng góp cộng đồng
3. **Tháng này**: Đưa "rò rỉ văn bản giữa các công cụ" #25592 vào phạm vi lặp lại tiếp theo của việc tái cấu trúc vòng đời tin nhắn (PR #77205)

---

*Nhật ký dựa trên dữ liệu công khai của GitHub, tất cả các liên kết trỏ đến `github.com/openclaw/openclaw`.*

---

## So sánh hệ sinh thái ngang

# Phân tích so sánh ngang hệ sinh thái mở của Trợ lý AI cá nhân / Tác nhân tự trị | 2026-05-06

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái nguồn mở trợ lý AI cá nhân đang ở một bước ngoặt quan trọng **"chuyển từ công cụ trình diễn sang cơ sở hạ tầng sản xuất"**. Các dự án hàng đầu (OpenClaw, ZeroClaw) có số lượng Vấn đề/PR trung bình hàng ngày vượt quá 50, động lực cộng đồng mạnh mẽ, nhưng mật độ lỗi hồi quy như "lỗi khi nâng cấp" cũng tăng theo, nợ ổn định trở thành nút cổ chai chung. Nhiều dự án đang đồng thời đẩy mạnh tái cấu trúc kiến trúc v2 (NanoClaw, IronClaw, ZeroClaw), mâu thuẫn cốt lõi chuyển từ "có hay không có chức năng" sang cạnh tranh chất lượng kỹ thuật về "tính nhất quán đa nền tảng, độ tin cậy của phiên, bảo mật cấp doanh nghiệp". Việc bao phủ thiết bị biên (Raspberry Pi, ARM64) và máy tính để bàn (Linux/Windows) trở thành thước đo mới về tính toàn vẹn của hệ sinh thái, trong khi các thay đổi giao thức kênh như WhatsApp gây ra lỗi tập trung phơi bày tính dễ bị tổn thương có hệ thống của các phụ thuộc của bên thứ ba.

---

## 2. So sánh mức độ hoạt động của từng dự án

| Dự án | Vấn đề (24h) | PR (24h) | Bản phát hành hôm nay | Đánh giá sức khỏe | Đặc điểm cốt lõi |
|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 (326 hoạt động/174 đã đóng) | 500 (357 chờ hợp nhất/143 đã hợp nhất) | **Phiên bản ổn định v2026.5.4** | ⚠️ **Hoạt động cao - Rủi ro cao** | Quy mô cộng đồng lớn nhất, mật độ lỗi hồi quy cực cao, khoảng cách đa nền tảng rõ rệt |
| **NanoBot** | 6 (4 hoạt động/2 đã đóng) | 14 (6 chờ xem xét/8 đã hợp nhất) | Không | ✅ **Hoạt động cao - Chất lượng cao** | Tỷ lệ sửa lỗi trong ngày 57%, tiêu chuẩn phản hồi "báo cáo hôm nay, sửa hôm nay" |
| **Hermes Agent** | 50 (39 mới mở/11 đã đóng) | 50 (42 chờ hợp nhất/8 đã hợp nhất) | Không | ⚠️ **Hoạt động cao - Nút cổ chai xem xét** | Tồn đọng xem xét PR nghiêm trọng, các lỗi phiên P1 tập trung bùng phát và không có bản sửa lỗi |
| **PicoClaw** | 17 (13 hoạt động/4 đã đóng) | 27 (18 chờ hợp nhất/9 đã hợp nhất) | **v0.2.8-nightly** | ✅ **Giai đoạn lặp lại nhanh** | Giao nhiều chức năng, lỗi trốn thoát hộp cát bảo mật mới, mở rộng trường hợp sử dụng IoT/biên |
| **NanoClaw** | 9 (4 hoạt động/5 đã đóng) | 50 (18 chờ xem xét/32 đã hợp nhất) | Không | ✅ **Giai đoạn tăng tốc ổn định** | Loại bỏ các điểm chặn di chuyển v2, tối ưu hóa hàng loạt trải nghiệm người dùng mới, hiệu quả hợp nhất cao |
| **NullClaw** | 1 (1 hoạt động) | 4 (3 chờ hợp nhất/1 đã hợp nhất) | Không | ⚠️ **Chế độ bảo trì** | Sửa lỗi chặn DNS Windows được phản hồi trong 24 giờ, nhưng động lực tổng thể không đủ |
| **IronClaw** | 16 (15 hoạt động/1 đã đóng) | 43 (20 chờ hợp nhất/23 đã hợp nhất) | Không | ⚠️ **Giai đoạn tái cấu trúc kiến trúc** | Đang di chuyển "Reborn", 5 PR cứu hộ cho thấy sự trôi dạt nhánh chính nghiêm trọng |
| **LobsterAI** | 0 | 3 (1 chờ hợp nhất/2 đã hợp nhất) | Không | ⚠️ **Hoạt động thấp - Rủi ro tồn đọng** | PR sửa lỗi Electron bị treo 42 ngày, lỗi P0 mất dữ liệu không được phản hồi |
| **TinyClaw** | 0 | 0 | Không | ❌ **Trạng thái ngủ đông** | Không hoạt động trong 24 giờ qua |
| **Moltis** | 0 | 1 (1 chờ hợp nhất) | Không | ❌ **Hoạt động cực thấp** | Chỉ cập nhật phụ thuộc Dependabot, không hoạt động của con người |
| **CoPaw** | 10 (6 hoạt động/4 đã đóng) | 10 (9 chờ hợp nhất/1 đã hợp nhất) | Không | ⚠️ **Hoạt động cao - Nút cổ chai xem xét** | 5 PR đóng góp lần đầu tiên đổ vào, nhưng 9/10 chờ hợp nhất, lỗi P0 không được phản hồi |
| **ZeptoClaw** | 0 | 11 (11 chờ hợp nhất) | Không | ⚠️ **Vận hành bảo trì** | 100% PR Dependabot, không phát triển chức năng của con người |
| **ZeroClaw** | 50 (46 hoạt động/4 đã đóng) | 50 (38 chờ hợp nhất/12 đã hợp nhất) | Không | ⚠️ **Hoạt động cực cao - Nút cổ chai hợp nhất** | Tỷ lệ mở/đóng 4:1, khủng hoảng WhatsApp, nút cổ chai hợp nhất |

---

## 3. Vị thế của OpenClaw trong hệ sinh thái

### Quy mô và tầm ảnh hưởng
- **Quy mô cộng đồng tuyệt đối số 1**: Hoạt động hàng ngày 500 Issues/500 PR là **10 lần** so với dự án thứ hai (ZeroClaw, Hermes Agent ở cấp 50), tạo ra hiệu ứng mạng lưới hệ sinh thái rõ rệt
- **Bao phủ kênh đầy đủ nhất**: 20+ kênh thống nhất vòng đời tin nhắn (PR #77205), bố trí toàn bộ ma trận bao gồm Discord/Slack/Telegram/WeChat/Feishu/Google Meet, v.v.

### Khác biệt về lộ trình kỹ thuật
| Chiều | OpenClaw | So sánh tương tự |
|:---|:---|:---|
| **Cốt lõi kiến trúc** | SDK kênh dạng plugin (`openclaw/plugin-sdk/channel-message`) | NanoBot nhấn mạnh kiểm soát đồng thời các tác nhân con, IronClaw thúc đẩy bộ điều phối TurnCoordinator |
| **Âm thanh thời gian thực** | Cầu nối Google Meet/Voice Call là điểm nổi bật khác biệt (Twilio + Gemini Real-time Voice) | Các dự án khác không có tích hợp sâu tương tự |
| **Chiến lược đa nền tảng** | **Ưu tiên macOS/iOS/Android, Linux/Windows còn thiếu trong thời gian dài** (Vấn đề #75, 104 bình luận) | PicoClaw bao phủ ARM64/RPi, NanoClaw bổ sung khay Windows, ZeroClaw thúc đẩy Binary Universal macOS |
| **Mô hình bảo mật** | "Bảo mật thông minh" dựa trên phán đoán LLM (Vấn đề #8719 chỉ trích là "không đủ") | NanoBot đã triển khai SSRF lỗi cấu trúc, giới hạn đồng thời mặc định của tác nhân con = 1; CoPaw thúc đẩy từ chối ràng buộc không loopback |

### Nhược điểm tương đối
- **Nợ ổn định nặng nhất**：3 lỗi hồi quy P0 trong cùng một ngày (treo gateway Discord, mất tin nhắn Giao diện Điều khiển, lỗi WeChat), mô hình "lỗi khi nâng cấp" làm tổn hại niềm tin
- **Khoảng cách đa nền tảng trở thành nút cổ chai cho tính toàn vẹn hệ sinh thái**: Vấn đề #75, được tạo từ tháng 1, 74 👍, rủi ro mất nhà phát triển
- **Năng suất xem xét không tương xứng với quy mô cộng đồng**: 357 PR chờ hợp nhất cho thấy băng thông của người bảo trì không đủ

---

## 4. Các hướng kỹ thuật được quan tâm chung

| Hướng kỹ thuật | Dự án liên quan | Yêu cầu và tiến độ cụ thể |
|:---|:---|:---|
| **Quản lý phiên và độ tin cậy của bộ nhớ** | OpenClaw (#77374, #12590), Hermes Agent (#20470, #20293, #19243), NanoBot (#3630, #3631), ZeroClaw (#5550, #6384), PicoClaw (#2364) | Phân tách phiên do nén, mất bộ nhớ im lặng, ô nhiễm ngữ cảnh là các điểm đau chung; nhiều dự án đang đồng thời thúc đẩy thống nhất backend phiên hoặc sửa lỗi con trỏ |
| **Khả năng tương thích giao thức MCP/SSE** | Hermes Agent (#17244, #20349), NanoClaw (#1906, #2208), ZeroClaw | Việc truy cập hệ sinh thái tiếng Trung như bản đồ Gaode bị chặn; mở rộng lớp truyền tải HTTP/SSE là nhu cầu chung |
| **Trải nghiệm máy tính để bàn Windows** | OpenClaw (#75), NanoClaw (#3751→#4041), CoPaw (#4043), NullClaw (#890), PicoClaw | Từ "không hỗ trợ" đến "hỗ trợ nhưng trải nghiệm kém", khởi động chậm, lỗi đăng ký kỹ năng, phân giải DNS là các điểm chặn cụ thể |
| **Hộp cát bảo mật và kiểm soát thực thi** | OpenClaw (#6615, #8719), NanoBot (#3635), PicoClaw (#2688), CoPaw (#4038, #4026), Hermes Agent (#17962, #20468) | Từ danh sách trắng đến danh sách đen, từ phán đoán LLM đến quy tắc mã hóa cứng, tinh chỉnh chiến lược bảo mật |
| **Sắp xếp tác nhân con/đa tác nhân** | NanoBot (#3611→#3634, #3292), Hermes Agent (#15153, #18420, #20458), PicoClaw (#2775), CoPaw (#3224) | Giới hạn đồng thời, cô lập vai trò, chia sẻ phiên ổn định là các vấn đề chưa được giải quyết quan trọng |
| **Đầu ra luồng và tương tác thời gian thực** | OpenClaw (cầu nối âm thanh Google Meet), PicoClaw (#1950, #2404), CoPaw | Trải nghiệm luồng đầu cuối từ "hạng mục cộng thêm" thành "kỳ vọng cơ bản" |
| **Bảo mật chuỗi cung ứng phụ thuộc** | ZeptoClaw (11 PR cập nhật Dependabot), Moltis (#967), IronClaw (wasmtime CVE) | Tồn đọng cập nhật phụ thuộc tự động, phát hành crates.io bị chậm trễ, sửa lỗi CVE bị chặn |

---

## 5. Phân tích định vị khác biệt

| Dự án | Trọng tâm chức năng cốt lõi | Người dùng mục tiêu | Đặc điểm kiến trúc kỹ thuật |
|:---|:---|:---|:---|
| **OpenClaw** | Thống nhất toàn kênh, cầu nối âm thanh thời gian thực, hệ sinh thái plugin | Nhà phát triển cao cấp triển khai đa nền tảng, tích hợp doanh nghiệp | Lớp trừu tượng SDK plugin, lớp lõi quản lý vòng đời, kết hợp Rust/TypeScript |
| **NanoBot** | Phản hồi nhanh, tính hoàn chỉnh SDK, thân thiện với triển khai cục bộ | Người dùng phần cứng tiêu dùng, nhà phát triển tạo mẫu nhanh | Chủ yếu là Python, nhấn mạnh "sửa lỗi trong ngày", kiểm soát tài nguyên tác nhân con nghiêm ngặt |
| **Hermes Agent** | Chia sẻ phiên đa nền tảng, quốc tế hóa, tầm nhìn WebUI | Doanh nghiệp đa thuê, triển khai toàn cầu | 18 nền tảng nhắn tin, hệ thống profile, tiến hóa thành "nền tảng tác nhân cấp hệ điều hành" |
| **PicoClaw** | Thiết bị biên/IoT, triển khai nhẹ, công cụ giám sát | Người dùng Raspberry Pi/ARM64, kịch bản nhúng | Hướng cấu hình, màn hình PicoWatch thử nghiệm, hỗ trợ tác vụ Cron |
| **NanoClaw** | Hướng dẫn thiết lập đa kênh, cổng OneCLI, kiến trúc LLM hỗn hợp | Người dùng mới, doanh nghiệp với nhiều chiến lược mô hình | Kịch bản di chuyển v2, điều chỉnh Baileys WhatsApp, khả năng tương thích trình chạy container |
| **IronClaw** | Bảo mật cấp doanh nghiệp (TDX/Phala), kiến trúc Reborn, điều phối Turn | Doanh nghiệp yêu cầu bảo mật cao, hệ sinh thái NEAR | Full-stack Rust, cô lập wasmtime, thiết kế bộ điều phối "Reborn", trong giai đoạn tái cấu trúc kiến trúc |
| **ZeroClaw** | Quản trị nút phân tán, tinh chỉnh chi phí, cấu hình theo lược đồ | Quản lý hạm đội đa phiên bản, người dùng nhạy cảm về chi phí | Lô tích hợp v0.8.0, họ nhà cung cấp có kiểu, biên nhận HMAC, bảng điều khiển Nodes |
| **CoPaw** | Hợp tác đa tác nhân (Nhóm Tác nhân), hệ sinh thái kỹ năng, tích hợp DingTalk | Người dùng doanh nghiệp Trung Quốc, điều phối nhóm dựa trên ngôn ngữ tự nhiên | Dựa trên hệ sinh thái Qwen, định tuyến kỹ năng ngữ nghĩa, bổ sung khay Windows |
| **LobsterAI** | Tích hợp hệ sinh thái Youdao, quản lý kỹ năng Windows | Người dùng ghi chú đám mây Youdao, kịch bản năng suất tiếng Trung | Máy tính để bàn Electron, chế độ cửa hàng kỹ năng, phản hồi bảo trì chậm trễ |

---

## 6. Phân lớp nhiệt độ cộng đồng và độ trưởng thành

### 🔥 Giai đoạn Lặp lại Nhanh (Trung bình Issues+PR hàng ngày > 30, Giao nhiều chức năng)
| Dự án | Tín hiệu chính | Rủi ro |
|:---|:---|:---|
| **OpenClaw** | 500/500 Cả hai đều cao, v2026.5.4 vừa phát hành | Mật độ lỗi hồi quy và quy mô cộng đồng tăng theo cấp số nhân, áp lực ổn định |
| **ZeroClaw** | 50/50, tái cấu trúc v0.8.0 song song | Tỷ lệ mở/đóng 4:1, khủng hoảng WhatsApp, nút cổ chai hợp nhất |
| **Hermes Agent** | 50/50, ổn định CI + quốc tế hóa + ba tuyến bảo mật song song | 42 PR chờ hợp nhất, khủng hoảng xem xét, lỗi phiên P1 không được sửa |

### ✅ Giai đoạn Củng cố Chất lượng (Tỷ lệ hợp nhất cao, phản hồi nhanh)
| Dự án | Tín hiệu chính | Hướng tiến hóa |
|:---|:---|:---|
| **NanoBot** | Tỷ lệ hợp nhất 57%, sửa lỗi trong ngày | Khả năng quan sát cấp doanh nghiệp (LangSmith), nâng cấp kiến trúc Tool Tập trung Cấp Phiên |
| **NanoClaw** | 32/50 PR đã hợp nhất, loại bỏ điểm chặn v2 | Tăng cường bảo mật OneCLI, hỗ trợ chính thức Podman, thị trường công cụ MCP |
| **PicoClaw** | 9/27 hợp nhất, v0.2.8-nightly | Phiên bản chính thức đầu ra luồng, sửa lỗi vai trò tác nhân con, tăng cường hộp cát bảo mật |

### ⚠️ Giai đoạn Tái cấu trúc Kiến trúc/Chế độ Bảo trì (Động lực không đủ hoặc điều chỉnh hướng)
| Dự án | Tín hiệu chính | Khuyến nghị chú ý |
|:---|:---|:---|
| **IronClaw** | 14 Vấn đề mở "Reborn", 5 PR cứu hộ | Thiếu hồ sơ quyết định kiến trúc (ADR), PR ban đầu bị loại bỏ, rủi ro trải nghiệm người đóng góp |
| **NullClaw** | Sửa lỗi DNS P0 trên Windows trong 24 giờ, nhưng hoạt động tổng thể thấp | Tín hiệu sẵn sàng cho doanh nghiệp (Hackathon quản trị dữ liệu), cần xác nhận cam kết bảo trì dài hạn |
| **CoPaw** | 9/10 PR chờ hợp nhất, 5 người đóng góp lần đầu | Nút cổ chai xem xét có thể làm nản lòng cộng đồng, Nhóm Tác nhân cần khởi động RFC |

### ❌ Rủi ro Ngủ đông/Lạc hậu
| Dự án | Tín hiệu chính | Đánh giá |
|:---|:---|:---|
| **LobsterAI** | 0 Vấn đề, PR P0 bị treo 42 ngày | Không phản hồi các lỗi mất dữ liệu, nghi ngờ về băng thông của người bảo trì |
| **TinyClaw** | Không hoạt động | Dự án bị đình trệ |
| **Moltis** | Chỉ Dependabot, không hoạt động của con người | Chế độ bảo trì, cần truyền đạt rõ ràng |
| **ZeptoClaw** | 11 PR Dependabot, không phát triển của con người | Giai đoạn bảo trì ổn định, nhưng không có phát triển chức năng dài hạn |

---

## 7. Tín hiệu xu hướng đáng chú ý

### Tín hiệu 1: **"Lỗi khi nâng cấp" trở thành khủng hoảng tin cậy chung của hệ sinh thái**
- OpenClaw (lỗi khi nâng cấp WeChat/Feishu/Discord), NanoBot (nâng cấp DeepSeek v0.1.5.post3 gây lỗi), NanoClaw (chẩn đoán sai di chuyển v1→v2) đồng loạt xuất hiện
- **Giá trị đối với nhà phát triển**: Thiết lập cơ chế "ma trận kiểm tra khả năng tương thích khi nâng cấp" và "nhánh sửa lỗi nóng", chuyển từ chiến lược phiên bản "ưu tiên chức năng" sang "ưu tiên ổn định"

### Tín hiệu 2: **Chuyển đổi kiến trúc từ "tác nhân đơn lẻ khả dụng" sang "hợp tác đa tác nhân đáng tin cậy"**
- NanoBot #3292 (Tool Tập trung Cấp Phiên), Hermes Agent #15153/#18420 (phiên vai trò ổn định), PicoClaw #2775 (danh tính độc lập của tác nhân con), CoPaw #3224 (Nhóm Tác nhân) tạo thành cụm yêu cầu
- **Giá trị đối với nhà phát triển**: Nút cổ chai sắp xếp đa tác nhân chuyển từ "khả năng sinh sản" sang "cô lập danh tính, ranh giới bộ nhớ, kiểm soát tài nguyên đồng thời", cần thiết kế trước hợp đồng vai trò và cơ chế giải quyết xung đột

### Tín hiệu 3: **Tính dễ bị tổn thương của phụ thuộc bên thứ ba được hiển thị rõ ràng do thay đổi giao thức kênh**
- Sự cố tập trung tại WhatsApp của ZeroClaw vào ngày 4/24 do nâng cấp giao thức (ngừng hoạt động + hạ cấp bảo mật + bỏ qua kiểm soát truy cập), OpenClaw sửa lỗi plugin kênh phân tán thiếu hồi quy hợp nhất
- **Giá trị đối với nhà phát triển**: Các kênh cốt lõi cần lớp trừu tượng điều chỉnh giao thức, thiết lập "trang trạng thái sức khỏe kênh" và giám sát các thay đổi của thượng nguồn, tránh lỗi giao thức điểm duy nhất làm sập sản xuất

### Tín hiệu 4: **"Sẵn sàng cho doanh nghiệp" trở thành tiêu chuẩn kỹ thuật có thể đánh giá được từ khẩu hiệu**
- Quản trị dữ liệu (NullClaw #885), nhật ký kiểm toán, RBAC, tinh chỉnh chi phí (ZeroClaw #6251), tuân thủ (IronClaw TDX/Phala) đi vào cấp độ mã
- **Giá trị đối với nhà phát triển**: Khoảng cách giữa dự án cá nhân và việc áp dụng của doanh nghiệp nằm ở "khả năng quan sát, khả năng kiểm toán, khả năng hoàn nguyên", cần được nhúng ở giai đoạn đầu của kiến trúc thay vì vá lỗi sau này

### Tín hiệu 5: **Bao phủ thiết bị biên và máy tính để bàn trở thành chỉ số cứng về tính toàn vẹn hệ sinh thái**
- OpenClaw #75 (Linux/Windows, 104 bình luận), PicoClaw RPi Zero W, ZeroClaw macOS Universal Binary, NanoClaw khay Windows
- **Giá trị đối với nhà phát triển**: Chiến lược "ưu tiên macOS" có thể làm mất 30%+ người dùng trong lĩnh vực công cụ nhà phát triển, lớp trừu tượng đa nền tảng (như Tauri, Flutter) lựa chọn ban đầu quyết định chi phí bao phủ dài hạn

### Tín hiệu 6: **Trải nghiệm người đóng góp cộng đồng trở thành chỉ số tiên tiến về sức khỏe dự án**
- 5 PR cứu hộ của IronClaw (trôi dạt nhánh chính), rủi ro mất người đóng góp lần đầu của CoPaw (9/10 PR chờ hợp nhất), nút cổ chai đơn điểm singlerider của ZeroClaw (chiếm 40%+ PR)
- **Giá trị đối với nhà phát triển**: Đầu tư vào cơ sở hạ tầng như Hàng đợi hợp nhất, kiểm tra CI tự động (định dạng tiêu đề PR), kênh ưu tiên cho người đóng góp lần đầu có thể dự đoán quy mô cộng đồng của dự án sau 6 tháng hơn cả phát triển chức năng

---

*Phân tích dựa trên dữ liệu công khai của từng dự án GitHub vào ngày 2026-05-06, phù hợp cho người ra quyết định kỹ thuật đánh giá sức khỏe dự án và người đóng góp lựa chọn ngăn xếp công nghệ.*

---

## Báo cáo chi tiết dự án cùng cạnh tranh

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Nhật ký hoạt động dự án NanoBot | 2026-05-06

## 1. Tổng quan hôm nay

NanoBot duy trì **hoạt động cao** hôm nay, với 14 PR được chuyển tiếp trong 24 giờ (8 đã hợp nhất/đóng, 6 chờ xem xét), 6 cập nhật Vấn đề (4 hoạt động, 2 đóng). Tiến độ cốt lõi tập trung vào **củng cố tính ổn định** và **thích ứng đa nền tảng**: lỗi treo cuộc gọi dài Telegram được sửa từ báo cáo đến PR sửa lỗi chỉ trong 1 ngày, lỗi OOM đồng thời tác nhân con được lặp lại giải pháp và hợp nhất trong ngày, cho thấy tốc độ phản hồi cực kỳ nhanh của cộng đồng. Tích hợp đầy đủ LangSmith và các kênh mới như SimpleX tiếp tục được thúc đẩy như các chức năng trung hạn, sức khỏe dự án tổng thể tốt, nhưng cần chú ý đến vấn đề hồi quy mới phát sinh về khả năng tương thích mô hình GPT-5.5.

---

## 2. Phát hành phiên bản

**Không có bản phát hành mới**

---

## 3. Tiến độ dự án

### Các PR quan trọng đã hợp nhất/đóng

| PR | Tác giả | Đóng góp cốt lõi | Vấn đề liên quan |
|:---|:---|:---|:---|
| [#3635](https://github.com/HKUDS/nanobot/pull/3635) | Re-bin | **Tối ưu hóa chiến lược bảo vệ SSRF**: Chặn SSRF từ "chấm dứt vòng lặp thời gian chạy" thành "trả về lỗi công cụ không thể thử lại mạnh mẽ", vừa giữ ranh giới an toàn vừa tránh tác nhân rơi vào vòng lặp thử lại vô hạn (các biến thể curl/wget/proxy/mã hóa IP) | - |
| [#3620](https://github.com/HKUDS/nanobot/pull/3620) | chengyongru | **Bổ sung khả năng quan sát SDK**: `RunResult.tools_used` và `RunResult.messages` được sửa đổi từ mã hóa cứng `[]` thành ghi lại thực tế thông qua `SDKCaptureHook`, giải quyết sự không nhất quán giữa tài liệu và triển khai cho người tiêu dùng SDK không thể lấy lịch sử lệnh công cụ | - |
| [#3629](https://github.com/HKUDS/nanobot/pull/3629) | kaseru | **Tăng cường quyền Telegram**: Lệnh `/start`, `/help` và kiểm tra `allowlist` trước `_on_message` để ngăn người dùng chưa được ủy quyền kích hoạt các hành động phụ như gõ/phản ứng | - |
| [#3552](https://github.com/HKUDS/nanobot/pull/3552) | BarclayII | **Nhận dạng danh tính nhóm Feishu**: Tiêm khối `[FEISHU-CONTEXT]` (bao gồm display_name/open_id/user_id) trước prompt mô hình, giải quyết vấn đề phân biệt người dùng trong các phiên trò chuyện nhóm | - |
| [#3632](https://github.com/HKUDS/nanobot/pull/3632) | futurist | **Sửa lỗi đường dẫn phương tiện Feishu**: `_download_media_resource` trả về đường dẫn tuyệt đối thay vì chỉ tên tệp, sửa lỗi quy trình hạ nguồn như ghi lại bị lỗi do đường dẫn không hợp lệ | - |
| [#3631](https://github.com/HKUDS/nanobot/pull/3631) | JiajunBernoulli | **Sửa lỗi mất bộ nhớ Dream im lặng**: Chỉ thúc đẩy `.dream_cursor` sau khi lô hoàn thành thành công, tránh các mục bộ nhớ bị bỏ qua im lặng khi Giai đoạn 1 lỗi (**Phản hồi Vấn đề #3630 cùng ngày**) | [#3630](https://github.com/HKUDS/nanobot/issues/3630) |
| [#3634](https://github.com/HKUDS/nanobot/pull/3634) | chengyongru | **Giới hạn đồng thời tác nhân con (phiên bản lặp lại giải pháp)**: Thêm cấu hình `agents.defaults.maxConcurrentSubagents` (mặc định là 1), khi vượt quá giới hạn, công cụ `spawn` trả về lỗi mô tả để tác nhân nhận biết và điều chỉnh | [#3611](https://github.com/HKUDS/nanobot/issues/3611) |
| [#3615](https://github.com/HKUDS/nanobot/pull/3615) | mrbob-git | ~~Giới hạn đồng thời tác nhân con (phiên bản đầu tiên)~~ Đã đóng do bị thay thế bởi vòng lặp #3634 | [#3611](https://github.com/HKUDS/nanobot/issues/3611) |

**Đánh giá tiến độ tổng thể**: Khối lượng hợp nhất hôm nay chiếm 57% luồng PR trong 24 giờ qua, bao phủ 5 lĩnh vực chính: chiến lược bảo mật, tính hoàn chỉnh của SDK, thích ứng kênh, cơ chế bộ nhớ cốt lõi, kiểm soát tài nguyên. Đây là một **ngày giao hàng cường độ cao**. Đặc biệt đáng chú ý là phản ứng "báo cáo hôm nay, sửa hôm nay" của #3631 đối với #3630, và vòng lặp giải pháp nhanh chóng của #3634 đối với #3615, thể hiện người bảo trì đánh giá cao ưu tiên các vấn đề ổn định.

---

## 4. Điểm nóng cộng đồng

### Vấn đề được thảo luận tích cực nhất

| Xếp hạng | Vấn đề | Số bình luận | Yêu cầu cốt lõi | Trạng thái |
|:---|:---|:---:|:---|:---|
| 1 | [#3292](https://github.com/HKUDS/nanobot/issues/3292) Công cụ Tập trung Cấp Phiên | **9** | Yêu cầu cơ chế chú ý ổn định như "bảng công việc": có thể tự động quay lại nhiệm vụ chính sau khi xử lý gián đoạn, thay vì là `scratchpad` tạm thời của công cụ `my` hiện tại | Mở, tạo ngày 4-19, tiếp tục hoạt động |
| 2 | [#3626](https://github.com/HKUDS/nanobot/issues/3626) Treo im lặng dài hạn Telegram | **2** | Vấn đề chết người trong môi trường sản xuất: sau khi kết nối mạng bị ngắt, bot "hoạt động giả", không có nhật ký lỗi, yêu cầu khởi động lại thủ công | **Đã có PR sửa lỗi #3627** |
| 3 | [#3584](https://github.com/HKUDS/nanobot/issues/3584) Lỗi suy luận API DeepSeek | **1** | Sau khi nâng cấp v0.1.5.post3, lịch sử tác nhân không lọc đúng trường suy luận, đã xác định nguyên nhân gốc và cung cấp bản vá | Mở, chờ xác minh hợp nhất |

**Phân tích yêu cầu**:
- **#3292** với 9 bình luận phản ánh nhu cầu mạnh mẽ của cộng đồng đối với "bộ nhớ làm việc giống con người" — tác nhân hiện tại thiếu **khả năng neo mục tiêu** trong các nhiệm vụ đa vòng phức tạp, điều này khác biệt với các tính năng nổi bật của các đối thủ cạnh tranh như AutoGPT, có thể trở thành điểm cạnh tranh khác biệt.
- Phản ứng nhanh chóng đối với **#3626** (tạo ngày 5-5 → PR cùng ngày) cho thấy ổn định sản xuất là ưu tiên hàng đầu của người bảo trì.
- Mô hình "vá lỗi do người dùng cung cấp" cho **#3584** rất đáng khuyến khích, nhưng cần lưu ý áp lực tương thích liên tục do hệ sinh thái mô hình DeepSeek phát triển nhanh chóng.

---

## 5. Lỗi và tính ổn định

| Ưu tiên | Vấn đề | Phạm vi ảnh hưởng | Trạng thái sửa lỗi | Liên kết |
|:---|:---|:---|:---|:---|
| 🔴 **P0-Sản xuất** | Treo im lặng dài hạn Telegram: hết hạn NAT/roaming Wi-Fi/reset tường lửa làm gián đoạn kết nối, bot hoạt động giả (có thể gửi, không nhận), không có nhật ký | Tất cả các triển khai sản xuất Telegram | **PR #3627 chờ xem xét** (giải pháp watchdog) | [#3626](https://github.com/HKUDS/nanobot/issues/3626) |
| 🔴 **P0-Hồi quy** | Lỗi gọi mô hình GPT-5.5: `ID trùng lặp được tìm thấy với ID rs_*`, Codex không thể phục hồi | Người dùng GPT-5.5, chặn quy trình làm việc | **Chưa có PR**, cần phản hồi khẩn cấp | [#3633](https://github.com/HKUDS/nanobot/issues/3633) |
| 🟡 **P1-Đã sửa, chờ xác minh** | Lỗi xác thực API DeepSeek `reasoning_content`: trường suy luận bị lọc không chính xác trong lịch sử tác nhân sau khi nâng cấp v0.1.5.post3 | Người dùng mô hình DeepSeek | Người dùng đã cung cấp bản vá, chờ người bảo trì hợp nhất | [#3584](https://github.com/HKUDS/nanobot/issues/3584) |
| 🟡 **P1-Đã sửa** | Thúc đẩy con trỏ mơ sai dẫn đến mất bộ nhớ im lặng: Phase 1 thất bại vẫn thúc đẩy con trỏ, không có tín hiệu Telegram/nhật ký | Người dùng chức năng Dream | **PR #3631 đã hợp nhất** | [#3630](https://github.com/HKUDS/nanobot/issues/3630) |
| 🟢 **P2-Đã sửa** | OOM đồng thời tác nhân con: máy chủ LLM cục bộ (mlx_lm/Ollama) phân bổ bộ đệm KV đồng thời dẫn đến lỗi | Người dùng phần cứng triển khai cục bộ | **PR #3634 đã hợp nhất** (giới hạn mặc định là 1) | [#3611](https://github.com/HKUDS/nanobot/issues/3611) |
| 🟢 **P2-Đã sửa** | Vòng lặp spin event loop khi kết nối MCP thất bại: `AsyncExitStack` bị cô lập dẫn đến truyền `anyio` hủy bỏ bị kẹt | Người dùng công cụ MCP | **PR #3610 chờ xem xét** | [#3610](https://github.com/HKUDS/nanobot/pull/3610) |

**Cảnh báo quan trọng**: **Lỗi P0 #3633 GPT-5.5 ID trùng lặp** là vấn đề P0 duy nhất không có giải pháp sửa lỗi hôm nay, và xảy ra trên mô hình mới nhất của OpenAI, có thể ảnh hưởng đến danh tiếng "khả năng tương thích mô hình tiên tiến" của dự án, nên người bảo trì nên ưu tiên phản hồi.

---

## 6. Yêu cầu chức năng và tín hiệu lộ trình

| Yêu cầu chức năng | Nguồn | Tín hiệu trưởng thành | Đánh giá khả năng tích hợp |
|:---|:---|:---|:---|
| **Công cụ Tập trung Cấp Phiên**（Tập trung nhiệm vụ cấp phiên） | [#3292](https://github.com/HKUDS/nanobot/issues/3292) | Thảo luận sâu 9 bình luận, có ý tưởng thiết kế cụ thể (mở rộng công cụ `my`, bảng nhiệm vụ ổn định, chiến lược nén) | ⭐⭐⭐⭐ Cao: Phù hợp với xu hướng "nhiệm vụ liên tục" của Agent 2.0, tiếng vang cộng đồng mạnh, nhưng cần thiết kế cấp độ kiến trúc |
| **Tích hợp đầy đủ LangSmith** | [#3140](https://github.com/HKUDS/nanobot/pull/3140) | PR đã mở 21 ngày, đáp ứng "hợp đồng nhật ký có thể đánh giá bốn mặt", PR phục hồi sau khi loại bỏ v0.1.5 | ⭐⭐⭐⭐ Cao: Nhu cầu quan sát cấp doanh nghiệp, PR đã có quy mô, chờ xem xét cuối cùng |
| **Hỗ trợ kênh SimpleX** | [#3486](https://github.com/HKUDS/nanobot/pull/3486) | PR đã mở 9 ngày, kênh nhắn tin ưu tiên quyền riêng tư dựa trên SimpleX CLI | ⭐⭐⭐ Trung bình: Nhu cầu nhóm người dùng quyền riêng tư/phi tập trung, nhưng phụ thuộc vào CLI bên ngoài làm tăng gánh nặng bảo trì |
| **Triển khai Đội Tác nhân Đa vai trò HF Spaces** | [#3621](https://github.com/HKUDS/nanobot/pull/3621) | PR mới mở, giải pháp điều phối Neo/Trinity/Sentinel đã được xác minh sản xuất | ⭐⭐⭐ Trung bình: Mở rộng trường hợp sử dụng triển khai đám mây gốc, nhưng cần đánh giá mức độ trùng lặp với trừu tượng hóa triển khai hiện có |
| **Hook tiền xử lý tin nhắn** | [#3628](https://github.com/HKUDS/nanobot/pull/3628) | Lại `before_process` + mở rộng trường phương tiện | ⭐⭐⭐⭐ Cao: Cơ sở hạ tầng hệ sinh thái plugin, ít xâm nhập, dễ hợp nhất |

---

## 7. Tóm tắt phản hồi của người dùng

### Điểm đau
- **Chẩn đoán "hoạt động giả" khó khăn**: Người dùng triển khai Telegram mô tả "bot hoạt động có thể gửi tin nhắn nhưng không nhận", không có nhật ký, không có cảnh báo, cơn ác mộng trong môi trường sản xuất ([#3626](https://github.com/HKUDS/nanobot/issues/3626))
- **Nâng cấp gây lỗi**: Mô hình DeepSeek không sử dụng được trực tiếp sau khi nâng cấp lên v0.1.5.post3, thông báo lỗi kiểm tra API khó hiểu ([#3584](https://github.com/HKUDS/nanobot/issues/3584))
- **Lời hứa SDK chưa được thực hiện**: `RunResult.tools_used` có trong tài liệu nhưng luôn trả về mảng trống, "kể từ khi facade được giới thiệu" ngụ ý vấn đề tồn đọng lịch sử ([#3620](https://github.com/HKUDS/nanobot/pull/3620))
- **Kiểm soát tài nguyên triển khai cục bộ kém**: Người dùng phần cứng tiêu dùng rõ ràng yêu cầu "không giới hạn mặc định đồng thời", không có suy giảm thanh lịch sau OOM ([#3611](https://github.com/HKUDS/nanobot/issues/3611))

### Điểm hài lòng
- **Tốc độ phản hồi**: #3630 báo cáo đến #3631 hợp nhất chỉ vài giờ, phân tích nguyên nhân gốc chi tiết của người dùng clive-stokes được chấp nhận nhanh chóng
- **Tinh chỉnh chiến lược bảo mật**: Bảo vệ SSRF từ "chấm dứt thô bạo" thành "lỗi có cấu trúc", cân bằng bảo mật và quyền tự chủ của tác nhân ([#3635](https://github.com/HKUDS/nanobot/pull/3635))

### Hiểu biết về kịch bản sử dụng
- **Trò chuyện nhóm Feishu là kịch bản tần suất cao thực tế**: Người dùng cần mô hình phân biệt "ai nói gì" thay vì xử lý ẩn danh ([#3552](https://github.com/HKUDS/nanobot/pull/3552))
- **"Bộ nhớ làm việc" là nút cổ chai về khả năng sử dụng của tác nhân**: Người dùng ví von nó như "bảng nhiệm vụ tinh thần", cho thấy khả năng phục hồi gián đoạn hiện tại của tác nhân còn kém xa kỳ vọng của con người ([#3292](https://github.com/HKUDS/nanobot/issues/3292))

---

## 8. Tồn đọng chờ xử lý

| Mục | Ngày tạo | Cập nhật cuối cùng | Rủi ro | Đề xuất hành động |
|:---|:---|:---|:---|:---|
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) Công cụ Tập trung Cấp Phiên | 2026-04-19 | 2026-05-05 | **Mở 17 ngày**, 9 bình luận không có phản hồi chính thức từ người bảo trì, mức độ đầu tư của cộng đồng cao nhưng có thể mất kiên nhẫn | Người bảo trì cần xác nhận liệu có đưa vào lộ trình v0.1.6 hay không, hoặc ít nhất đưa ra phản hồi về hướng thiết kế |
| [#3140](https://github.com/HKUDS/nanobot/pull/3140) Tích hợp đầy đủ LangSmith | 2026-04-14 | 2026-05-05 | **Mở 22 ngày**, nhu cầu quan sát cấp doanh nghiệp, PR phục hồi sau khi loại bỏ v0.1.5 bị treo | Sắp xếp xem xét chuyên sâu, hoặc làm rõ xung đột với kiến trúc tracing hiện có |
| [#3486](https://github.com/HKUDS/nanobot/pull/3486) Kênh SimpleX | 2026-04-27 | 2026-05-05 | **Mở 9 ngày**, cơ hội khác biệt hóa trong làn sóng quyền riêng tư, nhưng phụ thuộc vào CLI bên ngoài đòi hỏi quyết định kiến trúc | Đánh giá xem có chấp nhận chế độ "wrapper CLI" hay không, hoặc yêu cầu tích hợp thư viện gốc |
| [#3621](https://github.com/HKUDS/nanobot/pull/3621) Triển khai đa vai trò HF Spaces | 2026-05-04 | 2026-05-05 | PR mới mở nhưng liên quan đến điều phối cấp sản xuất, cần phản hồi nhanh để tránh lãng phí công sức của tác giả | Xác nhận mối quan hệ bổ sung hoặc thay thế với trừu tượng hóa triển khai Docker/K8s hiện có |

---

*Nhật ký hàng ngày dựa trên dữ liệu công khai của GitHub, không bao gồm kho lưu trữ riêng tư hoặc nội dung thảo luận.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Nhật ký hoạt động dự án Hermes Agent | 2026-05-06

## 1. Tổng quan hôm nay

Hermes Agent duy trì **hoạt động cao** hôm nay, với tổng cộng **100 sự kiện hợp tác mã** (50 Vấn đề + 50 PR) được tạo ra trong 24 giờ qua, trong đó Vấn đề tăng ròng 28 (39 mới mở/hoạt động so với 11 đã đóng), 42 PR đang chờ xem xét, chỉ 8 PR được hợp nhất/đóng, **áp lực thông lượng xem xét đáng kể**. Cộng đồng tập trung vào ba tuyến chính: **sửa lỗi tương thích giao thức MCP/SSE** (chặn tích hợp hệ sinh thái tiếng Trung như bản đồ Gaode), **tính ổn định và độ tin cậy của phiên và bộ nhớ đa nền tảng** (môi trường cô lập Windows, quyền Podman, phân tách phiên Telegram), và **cơ sở hạ tầng quốc tế hóa và UI** (tiếng Ukraina, tiếng Hàn, hệ thống chủ đề WebUI). Không có bản phát hành mới nào, nhìn chung dự án đang trong giai đoạn sửa lỗi tích cực và dự trữ chức năng, sức khỏe tốt nhưng cần chú ý đến nút cổ chai xem xét PR.

---

## 2. Phát hành phiên bản

**Không có bản phát hành hôm nay**

---

## 3. Tiến độ dự án

### Các PR đã hợp nhất/đóng (trong số 8 PR)

| PR | Tác giả | Trạng thái | Mô tả tiến độ | Liên kết |
|:---|:---|:---|:---|:---|
| #20446 | dandacompany | **ĐÃ ĐÓNG** (trùng lặp) | Bản địa hóa bảng điều khiển tiếng Hàn, đã đóng do trùng với #18894 | [Liên kết](https://github.com/NousResearch/hermes-agent/pull/20446) |
| #17537 | bogerman1 | **ĐÃ ĐÓNG** | Sửa lỗi xử lý lô token SSE phía máy chủ làm giảm hiện tượng giật cục đầu ra luồng Open WebUI, đã được triển khai | [Liên kết](https://github.com/NousResearch/hermes-agent/pull/17537) |

### Các PR quan trọng đang được thúc đẩy hôm nay (chờ hợp nhất)

| PR | Tác giả | Đóng góp cốt lõi | Liên kết |
|:---|:---|:---|:---|
| #20471 | steezkelly | **Ổn định cơ sở CI**：Cô lập rò rỉ cấu hình máy chủ, sửa lỗi 10+ hồi quy kiểm tra, cơ sở hạ tầng quan trọng | [Liên kết](https://github.com/NousResearch/hermes-agent/pull/20471) |
| #20469 | wali-reheman | **Sửa lỗi 6 trường hợp CI thất bại tồn đọng**, trải rộng trên 4 tệp kiểm tra, phối hợp với #20471 | [Liên kết](https://github.com/NousResearch/hermes-agent/pull/20469) |
| #20467 | teknium1 | **Bản địa hóa tiếng Ukraina** (`uk`), ngôn ngữ UI chính thức thứ 7, cột mốc quốc tế hóa | [Liên kết](https://github.com/NousResearch/hermes-agent/pull/20467) |
| #20468 | teknium1 | **Bảo vệ tràn ngữ cảnh Hook**: >10K ký tự tràn ra đĩa, ngăn chặn tấn công mở rộng plugin (chuyển từ OpenAI Codex) | [Liên kết](https://github.com/NousResearch/hermes-agent/pull/20468) |
| #20472 | wali-reheman | **Cầu nối chủ đề phông chữ Tailwind**, sửa lỗi phông chữ chủ đề tùy chỉnh không có hiệu lực | [Liên kết](https://github.com/NousResearch/hermes-agent/pull/20472) |
| #18188 | lancecheney | **Mở rộng siêu dữ liệu chân trang thời gian chạy Gateway** (nhà cung cấp/tài khoản/ngữ cảnh/hạn ngạch), thiết kế tùy chọn | [Liên kết](https://github.com/NousResearch/hermes-agent/pull/18188) |
| #17962 | briandevans | **Tăng cường bảo mật**: Bắt các cuộc tấn công shell ngược và thực thi tải xuống hai giai đoạn, bản vá quan trọng cho lớp phê duyệt đầu cuối | [Liên kết](https://github.com/NousResearch/hermes-agent/pull/17962) |
| #17416 | kagura-agent | **Bộ ngắt mạch Hindsight**: Ngăn chặn đóng băng phiên trong 177 giây khi tiến trình bảo vệ thất bại | [Liên kết](https://github.com/NousResearch/hermes-agent/pull/17416) |

**Đánh giá tổng thể**: Không có bản hợp nhất chức năng lớn hôm nay, nhưng ổn định hóa CI (#20471/#20469) + tăng cường bảo mật (#17962) + quốc tế hóa (#20467) tiến song song ba tuyến, đặt nền móng chất lượng cho v0.13.x. Bảo vệ tràn ngữ cảnh Hook (#20468) cho thấy dự án tích cực tiếp thu kinh nghiệm kỹ thuật từ hệ sinh thái OpenAI Codex.

---

## 4. Điểm nóng cộng đồng

### 🔥 Các Vấn đề được thảo luận tích cực nhất

| Xếp hạng | Vấn đề | Bình luận | Yêu cầu cốt lõi | Liên kết |
|:---|:---|:---|:---|:---|
| 1 | **#8118 Bảng điều khiển WebUI — Không thể chờ đợi điều này!** | 6 | Nỗi mong mỏi lâu dài của người dùng đối với bảng điều khiển Web