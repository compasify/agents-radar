# OpenClaw Sinh hoạt hàng ngày 2026-05-15

> Số lượng vấn đề: 500 | Số lượng PR: 500 | Các dự án được bao phủ: 13 | Thời gian tạo: 2026-05-15 00:23 UTC

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

# Nhật báo hoạt động dự án OpenClaw | 2026-05-15

---

## 1. Tổng quan hôm nay

OpenClaw duy trì **mức độ hoạt động cực cao** hôm nay: 500 cập nhật vấn đề trong 24 giờ (95% là đang hoạt động/mới mở, chỉ 25 được đóng), 500 cập nhật PR (90% đang chờ hợp nhất, 50 đã xử lý), mật độ thảo luận cộng đồng tăng đáng kể. Hướng cốt lõi của dự án tập trung vào **xây dựng khung tuân thủ chiến lược** (4 PR cấp XL liên quan đang được thúc đẩy song song), **sửa lỗi ổn định đa nền tảng** (có các bản sửa lỗi dành riêng cho Telegram/Line/WhatsApp) và **giảm dung lượng gói cài đặt** (tùy thuộc vào Bedrock/Slack/Vertex, v.v.). Đáng chú ý, tỷ lệ hợp nhất PR chỉ là 10%, với nhiều đóng góp chất lượng cao đang bị tồn đọng chờ xem xét, băng thông của người bảo trì trở thành nút thắt cổ chai quan trọng.

---

## 2. Phát hành phiên bản

### v2026.5.14-beta.1 | [Trang Phát hành](https://github.com/openclaw/openclaw/releases/tag/v2026.5.14-beta.1)
| Thuộc tính | Nội dung |
|:---|:---|
| **Loại** | Beta phát hành trước |
| **Thay đổi cốt lõi** | Tái cấu trúc định tuyến proxy + công cụ cơ sở quốc tế hóa |

**Thay đổi chi tiết:**
- **Tinh giản các phụ thuộc**: Định tuyến proxy Node cấp gốc được thống nhất tới `@openclaw/proxyline`, loại bỏ các phụ thuộc trực tiếp `proxy-agent`, `https-proxy-agent`, `minimatch`, giảm bề mặt tấn công chuỗi cung ứng.
- **Trải nghiệm phát triển**: Thêm báo cáo cơ sở `pnpm ui:i18n:report`, đánh dấu các văn bản được mã hóa cứng tập trung vào khu vực và siêu dữ liệu fallback locale, làm nền tảng cho phạm vi đa ngôn ngữ đầy đủ trong tương lai.

**Lưu ý di chuyển**: Nếu các dự án hạ nguồn phụ thuộc trực tiếp vào các gói proxy đã bị xóa, chúng cần di chuyển sang `@openclaw/proxyline` hoặc được cài đặt rõ ràng.

---

### v2026.5.12 | [Trang Phát hành](https://github.com/openclaw/openclaw/releases/tag/v2026.5.12)
| Thuộc tính | Nội dung |
|:---|:---|
| **Loại** | Phiên bản ổn định |
| **Chủ đề cốt lõi** | **Cài đặt tinh gọn** + Nâng cấp độ tin cậy Telegram |

**Thay đổi gây lỗi / Hướng dẫn di chuyển:**

| Thay đổi | Ảnh hưởng | Thao tác di chuyển |
|:---|:---|:---|
| Các phụ thuộc WhatsApp/Slack/Amazon Bedrock/Anthropic Vertex được tách ra bên ngoài | Các cài đặt hiện có sử dụng nhà cung cấp/plugin này có thể thiếu chức năng sau khi nâng cấp | Chạy `openclaw install @openclaw/provider-<tên>` để cài đặt lại rõ ràng |
| Tái cấu trúc cơ chế thăm dò Telegram | Hành vi của mục cấu hình `channels.telegram.pollingMode` thay đổi | Kiểm tra cấu hình thăm dò tùy chỉnh, xác nhận `isolatedPolling: true` được bật |

**Cải thiện độ ổn định**: Telegram triển khai thăm dò cô lập, hàng đợi lưu trữ cục bộ, xử lý phương tiện nhóm an toàn hơn, giải quyết các vấn đề mất tin nhắn và gửi trùng lặp trong các tình huống đồng thời cao của các phiên bản trước.

---

### v2026.5.12-beta.8 / beta.7 | [Trang Phát hành](https://github.com/openclaw/openclaw/releases)
- Xác nhận lại việc tách các nhà cung cấp Bedrock và Mantle ra bên ngoài, tách các plugin sandbox Slack/OpenShell/Anthropic Vertex ra bên ngoài.
- **Không có thay đổi gia tăng từ beta.7 đến beta.8**, có thể do CI/CD kích hoạt hoặc gửi lại chữ ký.

---

## 3. Tiến độ dự án

### Các PR quan trọng đã được hợp nhất/đóng hôm nay

| PR | Tác giả | Trạng thái | Nội dung được thúc đẩy |
|:---|:---|:---|:---|
| [#44051](https://github.com/openclaw/openclaw/pull/44051) | libeibei-22 | **Đã đóng** | Khắc phục lỗi `Skipping skill path` của kỹ năng chính thức clawhub trong môi trường WSL, kiểm tra hồi quy bao gồm phân tích đường dẫn WSL2 |

**Đánh giá tiến độ tổng thể**: Tỷ lệ hợp nhất hôm nay cực kỳ thấp (50/500=10%), nhưng **cơ sở hạ tầng tuân thủ chiến lược** đã tạo thành một ngăn xếp kỹ thuật hoàn chỉnh thông qua 4 PR cấp XL:

| Chuỗi PR | Chức năng | Trạng thái |
|:---|:---|:---|
| [#80407](https://github.com/openclaw/openclaw/pull/80407) → [#80056](https://github.com/openclaw/openclaw/pull/80056) → [#80783](https://github.com/openclaw/openclaw/pull/80783) → [#81104](https://github.com/openclaw/openclaw/pull/81104) | Kiểm tra kênh → Tuân thủ siêu dữ liệu công cụ → Tuân thủ mô hình/mạng/MCP → Kiểm toán thời gian chạy và thực thi bằng chứng | Tất cả **ĐANG MỞ**, tạo ra sự phụ thuộc tuần tự |

Chuỗi này do `giodl73-repo` dẫn đầu, đại diện cho khoản đầu tư kiến trúc cốt lõi của OpenClaw vào việc phát triển thành **nền tảng đại lý AI có thể kiểm toán cấp doanh nghiệp**.

---

## 4. Điểm nóng cộng đồng

### Issues hoạt động nhiều nhất (sắp xếp theo số lượng bình luận)

| Hạng mục | Vấn đề | Bình luận | Yêu cầu cốt lõi | Liên kết |
|:---|:---|:---:|:---|:---|
| 1 | **Ứng dụng Clawdbot trên Linux/Windows** — Thiếu ứng dụng máy tính để bàn đa nền tảng | 104 | 74 | Đã có trên macOS/iOS/Android, người dùng Linux/Windows tích cực kêu gọi chức năng tương đương, nhu cầu triển khai doanh nghiệp | [#75](https://github.com/openclaw/openclaw/issues/75) |
| 2 | **Cài đặt kỹ năng trong Docker thất bại: `brew not installed`** | 29 | 17 | Homebrew không nên được sử dụng trong vùng chứa Linux, cần hỗ trợ trình quản lý gói gốc hoặc các tệp nhị phân được biên dịch trước | [#14593](https://github.com/openclaw/openclaw/issues/14593) |
| 3 | **Rò rỉ văn bản giữa các lệnh gọi công cụ tới kênh tin nhắn** | 26 | 0 | Văn bản xử lý nội bộ/khôi phục lỗi hiển thị với người dùng, lỗi UX nghiêm trọng, cần phân biệt đầu ra `internal` so với `user-facing` tại lớp định tuyến | [#25592](https://github.com/openclaw/openclaw/issues/25592) |
| 4 | **Yêu cầu phát hành tệp APK Android được biên dịch trước** | 24 | 1 | Giảm rào cản cho người dùng không phải nhà phát triển, hoàn thành vòng lặp trải nghiệm trên thiết bị di động với #75 | [#9443](https://github.com/openclaw/openclaw/issues/9443) |
| 5 | **Suy thoái thời gian chạy Gateway: Lỗi thời gian chờ 60 giây khi lấy giá và dừng thăm dò Telegram** | 17 | 1 | Suy thoái mạng/bộ hẹn giờ mãn tính trên môi trường Windows 11 + Node 24, hồi quy đa phiên bản, cần chẩn đoán hệ thống | [#73323](https://github.com/openclaw/openclaw/issues/73323) |

**Phân tích yêu cầu**: Mâu thuẫn cốt lõi của cộng đồng tập trung vào **tính đầy đủ của phạm vi nền tảng** (máy tính để bàn/tệp được biên dịch trước) và **độ tin cậy trong môi trường sản xuất** (triển khai Docker hóa, độ ổn định chạy dài). Vấn đề #75 có lượt thích cao đã kéo dài 5 tháng chưa được giải quyết, trở thành điểm rủi ro làm mất người dùng.

---

## 5. Lỗi và độ ổn định

### Sắp xếp theo mức độ nghiêm trọng

| Mức độ nghiêm trọng | Vấn đề | Mô tả | Trạng thái PR Sửa lỗi |
|:---|:---|:---|:---|
| 🔴 **P0-Sập/Treo** | [#71127](https://github.com/openclaw/openclaw/issues/71127) | Xử lý tình huống bị kẹt chỉ cảnh báo WARN mà không có hành động khôi phục, cần khởi động lại Gateway từ bên ngoài | MỞ | Không có |
| 🔴 **P0-Rủi ro mất dữ liệu** | [#71412](https://github.com/openclaw/openclaw/issues/71412) | Thời gian chờ `stopChannel` để lại các tác vụ zombie, giám sát sức khỏe báo cáo sai là khởi động lại thành công | MỞ | Không có |
| 🟡 **P1-Hồi quy** | [#32473](https://github.com/openclaw/openclaw/issues/32473) | Giao diện người dùng Điều khiển yêu cầu danh tính thiết bị (HTTPS/localhost), ngăn chặn triển khai Docker VPS | MỞ | Không có |
| 🟡 **P1-Chức năng không hoạt động** | [#31583](https://github.com/openclaw/openclaw/issues/31583) | Công cụ `exec` không kế thừa `skills.entries.*.env`, việc tiêm khóa bị ngắt | MỞ | Không có |
| 🟡 **P1-Chức năng không hoạt động** | [#81368](https://github.com/openclaw/openclaw/issues/81368) | Tách biệt cron watchdog giết quá trình chạy beta.4 sau 60 giây, việc sửa lỗi #80888 không có hiệu lực | MỞ | Không có |
| 🟡 **P1-Lỗi UX** | [#25592](https://github.com/openclaw/openclaw/issues/25592) | Văn bản nội bộ giữa các lệnh gọi công cụ bị rò rỉ vào kênh người dùng | MỞ | Không có |
| 🟢 **P2-Hành vi bất thường** | [#70628](https://github.com/openclaw/openclaw/issues/70628) | Phản hồi DM Telegram giả tạo bong bóng trả lời im lặng khi không có phản hồi rõ ràng | MỞ | Không có |
| 🟢 **P2-Hành vi bất thường** | [#32296](https://github.com/openclaw/openclaw/issues/32296) | Đại lý trả lời tin nhắn trước đó thay vì tin nhắn hiện tại, gây nhầm lẫn ngữ cảnh hội thoại | MỞ | Không có |

**PR sửa lỗi hôm nay**:
- [#81964](https://github.com/openclaw/openclaw/pull/81964) Giới hạn thời gian chờ gửi Telegram mặc định (khắc phục cảm giác "treo vài phút")
- [#81704](https://github.com/openclaw/openclaw/pull/81704) Sửa lỗi gửi im lặng Line (recipient viết thường gây HTTP 400)
- [#81883](https://github.com/openclaw/openclaw/pull/81883) Xử lý suy giảm gửi phương tiện tệp tải lên trên WhatsApp

---

## 6. Yêu cầu chức năng và tín hiệu lộ trình

### Các yêu cầu có tiềm năng cao được đưa vào phiên bản tiếp theo (đã có PR hoặc tín hiệu mạnh)

| Yêu cầu | Vấn đề/PR | Tín hiệu đưa vào | Phiên bản dự kiến |
|:---|:---|:---|:---|
| **Kiểm soát định tuyến hoàn thành của đại lý phụ** | [#27445](https://github.com/openclaw/openclaw/issues/27445) + [#80242](https://github.com/openclaw/openclaw/pull/80242) | PR đã mở, sửa lỗi định tuyến thông báo tới phiên hội thoại chính thay vì phiên kênh | v2026.5.15-beta |
| **Tin nhắn phong phú Slack Block Kit** | [#12602](https://github.com/openclaw/openclaw/issues/12602) | 13 bình luận, nhu cầu thường xuyên của người dùng doanh nghiệp, hoàn thành vòng lặp trải nghiệm với trạng thái tiến độ công cụ #33413 | v2026.6.x |
| **Chế độ thực thi Cron trực tiếp** | [#18160](https://github.com/openclaw/openclaw/issues/18160) | 9 👍, tránh chi phí giải thích LLM của `agentTurn`, quan trọng đối với độ tin cậy | v2026.6.x |
| **Khung tuân thủ chiến lược** | Chuỗi PR #80407→#81104 | 4 PR cấp XL song song, nhu cầu cấp bách về an ninh và tuân thủ doanh nghiệp, đầu tư cấp kiến trúc | Phiên bản ổn định v2026.5.x |
| **Ảnh chụp nhanh phiên lưu/tải** | [#13700](https://github.com/openclaw/openclaw/issues/13700) | Nhu cầu A/B thử nghiệm quy trình làm việc của nhà phát triển, phối hợp với tiered bootstrap #22438 | Đang đánh giá |

### Tín hiệu kiến trúc dài hạn

| Yêu cầu | Vấn đề | Hướng kỹ thuật |
|:---|:---|:---|
| **Tăng cường hợp tác Đa đại lý** | [#35203](https://github.com/openclaw/openclaw/issues/35203) | Lập hồ sơ năng lực + Bảng đen chia sẻ + Bộ nhớ phân lớp + Quản trị chi phí Token — Nghiên cứu tiên tiến về đa đại lý tương đương AutoGen/Magma |
| **Sandboxing bảo mật bubblewrap** | [#39244](https://github.com/openclaw/openclaw/pull/39244) | Cách ly không gian tên cấp hạt nhân, giải pháp cuối cùng safeBins Linux |
| **Backend tương tác Claude CLI** | [#81851](https://github.com/openclaw/openclaw/pull/81851) | Chụp lý luận_delta bằng proxy MITM TLS cục bộ, hỗ trợ mô hình thanh toán thử nghiệm |

---

## 7. Tóm tắt phản hồi người dùng

### 😫 Điểm đau cốt lõi

| Điểm đau | Vấn đề nguồn | Lời nói điển hình |
|:---|:---|:---|
| **Trải nghiệm triển khai Docker bị gián đoạn** | [#14593](https://github.com/openclaw/openclaw/issues/14593), [#31331](https://github.com/openclaw/openclaw/issues/31331) | "Chạy `openclaw onboard` trong Docker báo brew chưa được cài đặt"; "Docker + Sandbox workspace mount hoàn toàn không hoạt động" |
| **Quản lý khóa thô** | [#10659](https://github.com/openclaw/openclaw/issues/10659), [#13610](https://github.com/openclaw/openclaw/issues/13610), [#31583](https://github.com/openclaw/openclaw/issues/31583) | "Đại lý có thể thấy khóa API đầy đủ"; "Công cụ `exec` không kế thừa biến môi trường của kỹ năng, việc tiêm khóa bị ngắt" |
| **Lo lắng về độ ổn định khi chạy dài** | [#73323](https://github.com/openclaw/openclaw/issues/73323), [#71127](https://github.com/openclaw/openclaw/issues/71127), [#81368](https://github.com/openclaw/openclaw/issues/81368) | "Gateway trên Windows chạy vài ngày thì bộ hẹn giờ bị suy thoái"; "Chỉ có thể khởi động lại thủ công các phiên bị treo" |
| **Phạm vi phủ sóng không đồng đều của nền tảng** | [#75](https://github.com/openclaw/openclaw/issues/75), [#9443](https://github.com/openclaw/openclaw/issues/9443) | "Chúng tôi có macOS/iOS/Android, Linux/Windows bị thiếu" |

### 😊 Điểm hài lòng

- **Nâng cấp độ tin cậy Telegram được công nhận**: Thăm dò cô lập và hàng đợi lưu trữ trong v2026.5.12 đã giải quyết vấn đề mất tin nhắn lịch sử.
- **Giảm dung lượng gói cài đặt được đánh giá cao**: Việc cài đặt nhà cung cấp theo yêu cầu làm giảm các phụ thuộc không liên quan, giảm đáng kể kích thước hình ảnh vùng chứa.

### 💡 Hiểu biết sâu sắc về trường hợp sử dụng

- **An ninh và tuân thủ doanh nghiệp**: [#8719](https://github.com/openclaw/openclaw/issues/8719) đề xuất "an ninh tập trung vào dữ liệu, không dựa vào đánh giá của LLM", phù hợp với hướng của chuỗi PR tuân thủ chiến lược chính thức.
- **Quy tắc cứng về định lượng/tài chính**: [#13583](https://github.com/openclaw/openclaw/issues/13583) yêu cầu "ngăn chặn cơ học đại lý đưa ra câu trả lời cuối cùng trước khi gọi công cụ X", prompt mềm là không đủ.
- **Cộng đồng đa ngôn ngữ**: Plugin Feishu [#13583](https://github.com/openclaw/openclaw/issues/13583) cần giảm yêu cầu quyền, rào cản áp dụng cho doanh nghiệp Trung Quốc.

---

## 8. Tồn đọng cần xử lý

### ⚠️ Nhắc nhở chú ý của người bảo trì

| Vấn đề/PR | Ngày tạo | Cập nhật cuối cùng | Ngày tồn đọng | Rủi ro | Liên kết |
|:---|:---|:---|:---:|:---|:---|
| **Ứng dụng máy tính để bàn Linux/Windows** | 2026-01-01 | 2026-05-14 | **134 ngày** | Mức độ ưu tiên cao nhất (74 👍), khoảng trống chiến lược đa nền tảng, đối thủ cạnh tranh đã bao phủ | [#75](https://github.com/openclaw/openclaw/issues/75) |
| **Phình base64 hình ảnh Discord** | 2026-01-19 | 2026-05-14 | **116 ngày** | 7 hình ảnh đạt giới hạn 200K token, tính khả dụng của phiên bị sập | [#1210](https://github.com/openclaw/openclaw/issues/1210) |
| **Chế độ ClawdBot an toàn/không an toàn** | 2026-02-02 | 2026-05-14 | **102 ngày** | Đề xuất viết lại Rust, rủi ro phân chia cộng đồng, cần lập trường kỹ thuật chính thức | [#6731](https://github.com/openclaw/openclaw/issues/6731) |
| **Danh sách chặn phê duyệt exec** | 2026-02-01 | 2026-05-14 | **103 ngày** | 7 👍, quan trọng về an ninh, hoàn thành chiến lược đầy đủ với danh sách cho phép hiện có | [#6615](https://github.com/openclaw/openclaw/issues/6615) |
| **Chuỗi PR chiến lược cấp XL** | 2026-05-10~12 | 2026-05-15 | 3~5 ngày | 4 PR phụ thuộc lẫn nhau, bất kỳ sự đình trệ nào cũng sẽ làm chậm toàn bộ dòng, cần ưu tiên xem xét | [#80407](https://github.com/openclaw/openclaw/pull/80407) v.v. |

---

**Thời gian tạo báo cáo**: 2026-05-15
**Phạm vi dữ liệu**: Hoạt động GitHub trong 24 giờ qua
**Điểm số sức khỏe dự án**: ⭐⭐⭐⭐☆ (4/5)
- Mức độ hoạt động: ★★★★★
- Thông lượng hợp nhất: ★★☆☆☆ (Nút cổ chai)
- Phản hồi sửa lỗi ổn định: ★★★★☆
- Đáp ứng nhu cầu dài hạn: ★★★☆☆ (Đình trệ đa nền tảng/Docker hóa)

---

## So sánh hệ sinh thái ngang

# Phân tích so sánh ngang về hệ sinh thái mã nguồn mở của Trợ lý AI cá nhân/Tác nhân tự trị
**Ngày báo cáo**: 2026-05-15 | **Chu kỳ dữ liệu**: 24 giờ qua

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái mã nguồn mở của trợ lý AI cá nhân đang ở trong **giai đoạn song song của "mở rộng chức năng và củng cố chất lượng"**: Các dự án hàng đầu (OpenClaw, ZeroClaw, CoPaw) duy trì tốc độ lặp lại cao hàng ngày với hơn 50 PR/Vấn đề, nhưng tỷ lệ hợp nhất nhìn chung thấp (4%-12%), băng thông xem xét trở thành nút cổ chai chung; Tuân thủ cấp doanh nghiệp (kiểm toán chiến lược, bảo mật TLS, cô lập vùng chứa) đã tăng từ nhu cầu biên lên hướng kiến trúc cốt lõi; Khả năng tương thích kênh đa nền tảng (Telegram/Feishu/Discord) và khả năng tương thích mô hình suy luận (DeepSeek V4/MiMo/Claude mở rộng suy nghĩ) trở thành tâm điểm cạnh tranh khác biệt hóa. Đồng thời, một số dự án (PicoClaw, Moltis) cho thấy mức độ hoạt động giảm mạnh, thể hiện **hiệu ứng người giàu rõ ràng**.

---

## 2. So sánh hoạt động dự án

| Dự án | Vấn đề (24h) | PR (24h) | Hợp nhất/Đóng | Chờ hợp nhất | Phát hành phiên bản | Đánh giá sức khỏe |
|:---|:---:|:---:|:---:|:---:|:---|:---|
| **OpenClaw** | 500 cập nhật | 500 cập nhật | 50 | 450 | v2026.5.14-beta.1 / v2026.5.12 | ⭐⭐⭐⭐⭐ Mức độ hoạt động cực cao, tỷ lệ hợp nhất chỉ 10% là nút cổ chai, đầu tư kiến trúc tuân thủ doanh nghiệp rõ ràng |
| **NanoBot** | 21 cập nhật | 24 cập nhật | 7 | 17 | Không | ⭐⭐⭐⭐☆ Hoạt động cao, khủng hoảng tương thích DeepSeek V4 cần giải quyết, quy hoạch đại lý đi vào kỹ thuật hóa |
| **Hermes Agent** | 50 cập nhật | 50 cập nhật | 14 | 36 | Không | ⭐⭐⭐⭐☆ Hoạt động cao, tích tụ nợ kỹ thuật cụm TUI đầu cuối, biên bảo mật đang được củng cố |
| **PicoClaw** | 7 cập nhật | 24 cập nhật | 1 | 23 | Bản dựng ban đêm v0.2.8 | ⭐⭐⭐☆☆ Hoạt động trung bình, hợp nhất chức năng cốt lõi bị đình trệ, niềm tin vào độ ổn định bị tổn hại |
| **NanoClaw** | 1 hoạt động | 22 cập nhật | 13 | 9 | Không | ⭐⭐⭐⭐☆ Mở rộng hệ sinh thái kỹ năng cường độ cao, chiến lược trung lập với nhà cung cấp rõ ràng |
| **NullClaw** | Không | Không | 0 | 0 | Không | — Hoạt động bằng không, dự án ngủ đông |
| **IronClaw** | 50 cập nhật | 50 cập nhật | 6 | 44 | Không | ⭐⭐⭐☆☆ Hoạt động cực cao nhưng tỷ lệ hợp nhất 12%, nợ tái cấu trúc Reborn tích lũy, lỗi sản xuất không phản hồi trong 22 ngày |
| **LobsterAI** | 0 | 28 cập nhật | 27 | 1 | **2026.5.14** | ⭐⭐⭐⭐⭐ Thời gian cao điểm phát hành, dọn dẹp nợ kỹ thuật dứt khoát, sự tham gia của cộng đồng yếu |
| **TinyClaw** | Không | Không | 0 | 0 | Không | — Hoạt động bằng không, dự án ngủ đông |
| **Moltis** | 2 mới mở | 0 | 0 | 0 | Không | ⭐⭐⭐☆☆ Hoạt động hai ngày liên tiếp không có tiến triển về mã, rủi ro các vấn đề mới bị chìm |
| **CoPaw** | 50 cập nhật | 50 cập nhật | 2 | 48 | **v1.1.7** | ⭐⭐⭐☆☆ Hoạt động cực cao, tỷ lệ hợp nhất 4% cảnh báo nghiêm trọng, lỗi P0 bộc lộ ngay trong ngày phát hành |
| **ZeptoClaw** | Không | Không | 0 | 0 | Không | — Hoạt động bằng không, dự án ngủ đông |
| **ZeroClaw** | 23 cập nhật | 50 cập nhật | 7 | 43 | Không | ⭐⭐⭐⭐☆ Phát triển cường độ cao, tái cấu trúc hệ thống Cron + kỹ năng tự trị 2.0 hai đường chính, 153 commits hoàn tác nợ bị đình chỉ |

---

## 3. Vị trí của OpenClaw trong hệ sinh thái

### Lợi thế cốt lõi
| Chiều | Biểu hiện cụ thể |
|:---|:---|
| **Hiệu ứng quy mô** | 500 Issues/PR mỗi ngày, quy mô cộng đồng là **10-20 lần** so với các dự án cấp hai (NanoBot/Hermes/ZeroClaw), tạo ra sức mạnh tiêu chuẩn thực tế |
| **Dẫn đầu về tuân thủ doanh nghiệp** | 4 chuỗi PR tuân thủ chiến lược cấp XL ( #80407→#81104 ) đang được thúc đẩy song song, bao gồm kiểm tra kênh → siêu dữ liệu công cụ → tuân thủ mô hình/mạng/MCP → kiểm toán thời gian chạy, **hoàn thành duy nhất trong toàn bộ hệ sinh thái vòng lặp kiến trúc "nền tảng đại lý AI có thể kiểm toán"** |
| **Cơ sở hạ tầng quốc tế hóa** | Công cụ cơ sở `pnpm ui:i18n:report` được triển khai, phạm vi đa ngôn ngữ chuyển từ "vá cộng đồng" sang "quản trị kỹ thuật" |
| **Tinh giản gói cài đặt** | Việc tách các phụ thuộc Bedrock/Slack/Vertex ra bên ngoài, mô hình cài đặt theo yêu cầu được các dự án như NanoBot, LobsterAI làm theo |

### Khác biệt về lộ trình kỹ thuật
| Mục so sánh | OpenClaw | Điển hình tương tự (ZeroClaw/NanoClaw) |
|:---|:---|:---|
| Ngôn ngữ cốt lõi | Node.js/TypeScript | Rust (ZeroClaw), Python (NanoBot) |
| Triết lý kiến trúc | **Khả năng mở rộng dạng plugin** (nhà cung cấp/kỹ năng bên ngoài) | **Hạt nhân tích hợp** (ZeroClaw nhấn mạnh an toàn bộ nhớ, NanoClaw nhấn mạnh khả năng thích ứng CLI đa dạng) |
| Mô hình bảo mật | **Khung tuân thủ chiến lược** (quy tắc khai báo + kiểm toán thời gian chạy) | Sandboxing/kiểm soát quyền truyền thống (thử nghiệm bubblewrap của ZeroClaw) |
| Lộ trình thương mại | Cốt lõi mã nguồn mở + giá trị gia tăng tuân thủ doanh nghiệp | Thị trường kỹ năng/tối ưu hóa hạn ngạch đa nhà cung cấp (NanoClaw #2470) |

### So sánh quy mô cộng đồng
- **Vấn đề #75 của OpenClaw** (ứng dụng máy tính để bàn Linux/Windows) có 74 lượt thích cho một vấn đề duy nhất và được cập nhật liên tục trong 134 ngày, **độ phổ biến của một vấn đề duy nhất vượt quá tổng hoạt động hàng ngày của hầu hết các dự án**.
- Tuy nhiên, **tỷ lệ hợp nhất là 10%**, thấp hơn nhiều so với LobsterAI (96%), NanoClaw (59%), **sự chênh lệch giữa băng thông của người bảo trì và lượng đóng góp của cộng đồng** là rủi ro lớn nhất.

---

## 4. Hướng kỹ thuật được quan tâm chung

| Hướng kỹ thuật | Dự án liên quan | Yêu cầu cụ thể | Mức độ khẩn cấp |
|:---|:---|:---|:---|
| **Khả năng tương thích mô hình suy luận sâu** | NanoBot (#3754, #3760), ZeroClaw (#6269, #5652), CoPaw (#4314), PicoClaw (#2859) | Xử lý `reasoning_content` của DeepSeek V4, mô hình suy nghĩ MiMo + gọi công cụ, hỗ trợ gốc cho suy nghĩ mở rộng của Anthropic | 🔴 **Cực kỳ cao** |
| **Độ tin cậy của Cron/Nhiệm vụ hẹn giờ** | ZeroClaw (#6647, #6105, #6654, #6634), NanoBot (#3718), Hermes Agent (#26004) | Định tuyến đầu ra tới kênh, kế thừa ngữ cảnh phiên, lưu trữ giao dịch, truyền siêu dữ liệu có cấu trúc | 🔴 **Cực kỳ cao** |
| **Tinh chỉnh kênh Telegram** | OpenClaw (tái cấu trúc thăm dò), ZeroClaw (#6286, #6663), Hermes Agent (#25710), PicoClaw (#2798), CoPaw | Thăm dò cô lập, lọc phương tiện chỉ có mention, hiển thị tiến độ gọi công cụ, hỗ trợ âm thanh | 🟡 **Cao** |
| **Trải nghiệm triển khai Docker hóa** | OpenClaw (#14593, #31331), NanoBot (#3780), Hermes Agent (#24099, #15290), PicoClaw (#2812) | Cài đặt kỹ năng trong Docker không phụ thuộc vào brew, cân bằng giữa sandbox và restrictWorkspace, thích ứng quyền NAS | 🟡 **Cao** |
| **An ninh và tuân thủ doanh nghiệp** | OpenClaw (chuỗi PR tuân thủ chiến lược), ZeroClaw (#5122, #6657), LobsterAI (#842), CoPaw (#3957) | Kiểm toán thời gian chạy, xác minh tên máy chủ TLS, danh sách chặn phê duyệt exec, cô lập danh tính đại lý | 🟡 **Cao** |
| **Phạm vi phủ sóng máy tính để bàn đa nền tảng** | OpenClaw (#75, #9443), NanoBot (Không), LobsterAI (Cơ sở Electron) | Chức năng Linux/Windows tương đương, giảm rào cản APK được biên dịch trước | 🟢 **Trung bình** |
| **Khả năng quan sát/xuất phiên** | NanoBot (#3777, #3778), LobsterAI (#853), ZeroClaw (#6641, #6642) | Quản lý phiên CLI, xuất JSON/JSONL/Markdown, liên kết dấu vết OTel | 🟢 **Trung bình** |

---

## 5. Phân tích định vị khác biệt

| Dự án | Trọng tâm chức năng | Người dùng mục tiêu | Đặc điểm kiến trúc kỹ thuật | Tường thuật khác biệt cốt lõi |
|:---|:---|:---|:---|:---|
| **OpenClaw** | Tổng hợp kênh đa nền tảng, tuân thủ doanh nghiệp, quốc tế hóa | Nhà phát triển nhóm/doanh nghiệp vừa và lớn | Hệ sinh thái plugin Node.js, khung tuân thủ chiến lược | **"Nền tảng đại lý AI có thể kiểm toán"** |
| **NanoBot** | Quy hoạch và theo dõi mục tiêu của đại lý, giảm chi phí định tuyến mô hình | Nhà phát triển/Người dùng am hiểu công nghệ | Python, định tuyến động AgentHook, tương thích LiteLLM | **"Luồng công việc của đại lý thông minh tiết kiệm chi phí"** |
| **Hermes Agent** | Đại lý tự cải thiện, TUI đầu cuối, Docker hóa | Người dùng geek/tự lưu trữ | Rust + Ink/Rich, ưu tiên Docker, kỹ năng tự trị | **"Trợ lý AI duy nhất có thể tự sửa đổi"** |
| **ZeroClaw** | Tự động hóa Cron, quản lý kỹ năng, hệ thống bộ nhớ | Vận hành tự động/Người dùng siêu cấp cá nhân | Rust, lưu trữ giao dịch, OTel gốc | **"Đại lý tự động hóa 'Thiết lập và quên'"** |
| **NanoClaw** | Thích ứng CLI đa nhà cung cấp, thị trường kỹ năng, tiếp thị và vận hành | Người dùng vận hành doanh nghiệp/đa nền tảng | TypeScript, tích hợp MCP, tối ưu hóa hạn ngạch | **"Nền tảng vận hành AI trung lập với nhà cung cấp"** |
| **CoPaw** | Tự động hóa trình duyệt, hợp tác đa đại lý, hệ sinh thái Qwen | Nhà phát triển Trung Quốc/Người dùng DingTalk Feishu | Python, Sử dụng trình duyệt, Cơ sở AgentScope | **"Khung đại lý gốc mô hình Trung Quốc"** |
| **LobsterAI** | Đóng gói máy tính để bàn, xem trước Artifacts, hệ sinh thái plugin | Người dùng cuối không chuyên về kỹ thuật/văn phòng doanh nghiệp | Electron, hạt nhân OpenClaw được đóng gói | **"Bộ công cụ văn phòng AI sẵn sàng sử dụng"** |
| **IronClaw** | Mô-đun hóa WASM, kiến trúc Reborn, tích hợp chuỗi NEAR | Nhà phát triển Web3/phi tập trung | Rust, thời gian chạy WASM, truy vết sự kiện | **"Cơ sở hạ tầng đại lý có thể xác minh phi tập trung"** |
| **PicoClaw** | Triển khai nhẹ, ưu tiên tiếng Trung/hệ sinh thái Xiaomi | Cộng đồng Trung Quốc/Thiết bị biên | Python, thích ứng phần cứng Pico | **"Đại lý ưu tiên tiếng Trung nhẹ"** |
| **Moltis** | Giao tiếp đại lý P2P, chuyển tiếp riêng tư | Người dùng đam mê quyền riêng tư/những người ủng hộ phi tập trung | Không xác định (hoạt động thấp) | **"Mạng lưới đại lý không có bên thứ ba đáng tin cậy"** |

---

## 6. Mức độ phổ biến và sự trưởng thành của cộng đồng

### Giai đoạn lặp lại nhanh (hoạt động trung bình 50+ mỗi ngày, giai đoạn mở rộng chức năng)
| Dự án | Đặc điểm lặp lại | Rủi ro chính |
|:---|:---|:---|
| **OpenClaw** | Đầu tư kiến trúc tuân thủ, tinh giản gói cài đặt, sửa lỗi đa nền tảng | Tỷ lệ hợp nhất 10%, 450 PR tồn đọng, nút cổ chai xem xét |
| **CoPaw** | Tăng cường tự động hóa trình duyệt, xử lý nợ kiểm tra chất lượng | Tỷ lệ hợp nhất 4% cảnh báo nghiêm trọng, lỗi P0 bộc lộ ngay trong ngày phát hành |
| **IronClaw** | Tái cấu trúc kiến trúc Reborn bảy module, bùng nổ khung Hook | 44/50 PR chờ hợp nhất, không phản hồi lỗi sản xuất trong 22 ngày |

### Giai đoạn củng cố chất lượng (hoạt động cao nhưng tập trung vào sửa lỗi và tối ưu hóa)
| Dự án | Đặc điểm củng cố | Rủi ro chính |
|:---|:---|:---|
| **ZeroClaw** | Tái cấu trúc hệ thống Cron, kỹ năng tự trị 2.0, củng cố bảo mật | Hoàn tác 153 commits trong 48 ngày không phục hồi, nợ lịch sử |
| **Hermes Agent** | Sửa lỗi cụm TUI đầu cuối, củng cố biên bảo mật | Nợ kỹ thuật thay đổi kích thước đầu cuối cần tái cấu trúc hệ thống thay vì vá lỗi |
| **NanoBot** | Công cụ quy hoạch đại lý, chẩn đoán CLI, sửa lỗi Feishu/Telegram | Khủng hoảng tương thích DeepSeek V4, lỗi stale #2880 bị gắn cờ sai |

### Giai đoạn chạy nước rút phát hành/dọn dẹp nợ
| Dự án | Đặc điểm | Rủi ro chính |
|:---|:---|:---|
| **LobsterAI** | Phát hành tập trung 2026.5.14, đóng hàng loạt 8 PR cũ hơn 50 ngày | Sự tham gia của cộng đồng gần như bằng không, hệ sinh thái đóng góp bên ngoài yếu |
| **NanoClaw** | Tỷ lệ hợp nhất cao 13/22, mở rộng quy mô hệ sinh thái kỹ năng | Tính tuân thủ mô hình thanh toán (#2470) cần quyết định sản phẩm |

### Giai đoạn hoạt động thấp/đệm bảo trì
| Dự án | Trạng thái | Rủi ro |
|:---|:---|:---|
| **PicoClaw** | Hoạt động trung bình, hợp nhất chức năng cốt lõi bị đình trệ, chủ yếu đồng bộ hóa tài liệu | Độ trong suốt của sửa lỗi vấn đề ổn định không đủ, làm tổn hại niềm tin của cộng đồng |
| **Moltis** | Không có PR trong hai ngày liên tiếp, không có phản hồi đối với các vấn đề mới | Lỗi sản xuất (#996 TLS hạn chế) không phản hồi sau 48h là một cuộc khủng hoảng niềm tin |
| **NullClaw / TinyClaw / ZeptoClaw** | Hoàn toàn ngủ đông | Tính bền vững của dự án đáng nghi ngờ |

---

## 7. Tín hiệu xu hướng đáng chú ý

### Tín hiệu một: Khả năng tương thích mô hình suy luận trở thành "vé vào cửa" chứ không phải "điểm cộng"
> **Hỗ trợ dữ liệu**: Lỗi liên quan đến DeepSeek V4 của NanoBot ( #3754, #3760, #1998 ), ZeroClaw #6269 mất `reasoning_content`, CoPaw #4314 mô hình suy nghĩ MiMo + lỗi 400 khi gọi công cụ, PicoClaw #2859 lỗi tham số MiMo của Xiaomi.

**Ý nghĩa ngành**: Với các mô hình suy luận như DeepSeek V4, Claude 4, Qwen3, v.v., trở thành lựa chọn ưu việt về chi phí hiệu quả, "hỗ trợ mô hình suy luận" đã chuyển từ nhu cầu của người áp dụng sớm sang **yêu cầu tương thích cơ bản**. Nhà phát triển cần quản lý vòng đời của `reasoning_content` (nén, truyền, hiển thị) ngay từ giai đoạn thiết kế, thay vì vá lỗi sau này.

### Tín hiệu hai: "Dặm cuối tự động hóa" chuyển từ khả năng sử dụng chức năng sang vòng lặp trải nghiệm
> **Hỗ trợ dữ liệu**: ZeroClaw #6647 Đầu ra Cron chỉ có ở Dashboard chứ không gửi đến kênh; #6105 Đại lý không có ngữ cảnh cron; NanoBot #3689 Mất ngữ cảnh khi tạm dừng phiên; Yêu cầu chế độ thực thi Cron trực tiếp OpenClaw #18160.

**Ý nghĩa ngành**: Người dùng không còn hài lòng với "nhiệm vụ hẹn giờ có thể chạy", mà yêu cầu **kết quả có thể đến nơi, trạng thái có thể tiếp tục, lỗi có thể phát hiện**. Hệ thống Cron đang phát triển từ "bộ kích hoạt" thành "bộ điều phối quy trình công việc", cần tích hợp sẵn vòng lặp hoàn chỉnh bao gồm định tuyến kênh, kế thừa phiên, thử lại lỗi, thông báo tiến độ.

### Tín hiệu ba: An ninh và tuân thủ doanh nghiệp nâng cao từ "chức năng an toàn" lên "cốt lõi kiến trúc"
> **Hỗ trợ dữ liệu**: OpenClaw 4 chuỗi PR tuân thủ chiến lược cấp XL, ZeroClaw #5122 lỗi chiến lược an ninh không sửa lỗi trong 47 ngày, LobsterAI #842 quét môi trường an ninh, CoPaw #3957 nhầm lẫn danh tính đại lý.

**Ý nghĩa ngành**: "An ninh tập trung vào dữ liệu, không dựa vào đánh giá của LLM" (OpenClaw #8719) đã trở thành sự đồng thuận. Đánh giá mua hàng của doanh nghiệp trong tương lai sẽ chuyển từ "có kiểm soát quyền truy cập không" sang "có thể chứng minh sự tuân thủ không" — thiết kế kiến trúc **có thể kiểm toán, có thể phát lại, có thể chứng minh** sẽ trở thành rào cản khác biệt hóa.

### Tín hiệu bốn: Thích ứng đa CLI/đa nhà cung cấp trở thành chiến lược "giải khóa"
> **Hỗ trợ dữ liệu**: NanoClaw #2474/#2475 Làm cho Claude Code ↔ Codex tương đương, #2470 Chế độ CLI thay thế SDK đại lý để tối ưu hóa hạn ngạch; Tách các phụ thuộc bên ngoài của OpenClaw làm giảm sự ràng buộc của nhà cung cấp.

**Ý nghĩa ngành**: Khi cục diện CLI mã hóa AI (Claude Code, Codex, Gemini CLI, Aider) vẫn chưa định hình, sự lo lắng về "ràng buộc nhà cung cấp" đã tăng từ cấp độ mô hình lên cấp độ chuỗi công cụ. **Lớp trừu tượng thích ứng + chuyển đổi dựa trên cấu hình** trở thành kiến trúc bắt buộc đối với các dự án nền tảng, các dự án ràng buộc nhà cung cấp thuần túy sẽ đối mặt với sự chất vấn về chi phí di chuyển.

### Tín hiệu năm: Mâu thuẫn giữa "tương tác phong phú" và "độ ổn định" của TUI đầu cuối ngày càng trầm trọng
> **Hỗ trợ dữ liệu**: Các vấn đề thay đổi kích thước đầu cuối của Hermes Agent (8+ vấn đề liên quan), cơ chế reflow của Ink/Rich bị lỗi; So sánh ưu tiên WebUI của OpenClaw, đóng gói Electron của LobsterAI.

**Ý nghĩa ngành**: Đầu cuối, với vai trò là "giao diện thân mật nhất của nhà phát triển", đang gặp phải các rào cản kỹ thuật — sự kết hợp của **đầu ra luồng, bố cục động, thay đổi kích thước cửa sổ** tạo áp lực hệ thống lên các khung TUI hiện có. Tương lai có thể chứng kiến sự phân hóa thành "WebView hóa đầu cuối" (như Warp terminal) hoặc "CLI thoái lui thành máy khách API".

---

**Kết luận của nhà phân tích**: Bức tranh hệ sinh thái vào ngày 2026-05-15 cho thấy cuộc đua trợ lý AI cá nhân đã chuyển từ "cuộc đua chức năng" sang "vùng nước sâu về chất lượng và tuân thủ". OpenClaw duy trì vị trí dẫn đầu nhờ hiệu ứng quy mô và đầu tư kiến trúc tuân thủ, nhưng nút cổ chai hợp nhất là mối nguy lớn nhất; ZeroClaw và NanoClaw thiết lập sự khác biệt hóa trong các kịch bản dọc (tự động hóa, vận hành); IronClaw, CoPaw với kiến trúc tái cấu trúc mạnh mẽ và thiếu ngưỡng chất lượng đóng vai trò cảnh báo. Đối với các nhà phát triển, **hỗ trợ gốc cho mô hình suy luận, vòng lặp quy trình công việc Cron hoàn chỉnh, kiến trúc có thể kiểm toán** là những điều bắt buộc đối với nền tảng đại lý thế hệ tiếp theo.

---

## Báo cáo chi tiết dự án cùng phân khúc

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Nhật báo hoạt động dự án NanoBot | 2026-05-15

---

## 1. Tổng quan hôm nay

NanoBot duy trì **hoạt động cao** hôm nay, với 21 cập nhật Issues trong 24 giờ (10 mới mở/đang hoạt động, 11 đã đóng), 24 cập nhật PR (17 chờ hợp nhất, 7 đã hợp nhất/đóng). Tốc độ phát triển cốt lõi của dự án rất dày đặc, **chengyongru** trở thành người đóng góp tích cực nhất hôm nay, gửi 5 PR trong một ngày, bao gồm các mô-đun chính như công cụ quy hoạch đại lý, sửa lỗi Feishu và quy trình ghép nối. Mặt trận cộng đồng tập trung vào các điểm đau môi trường sản xuất như **khả năng tương thích DeepSeek V4 Flash**, **an ninh không có sandbox trên Windows** và **SSL proxy doanh nghiệp**. Sức khỏe tổng thể tốt, nhưng 17 PR đang chờ hợp nhất đang bị tồn đọng, cần chú ý đến nút cổ chai xem xét.

---

## 2. Phát hành phiên bản

**Không có bản phát hành phiên bản mới**

Phiên bản mới nhất vẫn là **v0.1.5.post3.2026.05.13**, không có bản sửa lỗi nóng hoặc bản vá nào được phát hành ngày hôm qua. Điều đáng chú ý là Issue #3790 báo cáo vấn đề hiển thị nội dung phiên WebUI bị lỗi trong phiên bản này, có thể ảnh hưởng đến trải nghiệm người dùng.

---

## 3. Tiến độ dự án

### Các PR quan trọng đã được hợp nhất/đóng hôm nay (7 PR)

| PR | Tác giả | Đóng góp cốt lõi | Thúc đẩy dự án |
|:---|:---|:---|:---|
| [#3779](https://github.com/HKUDS/nanobot/pull/3779) | chengyongru | **Sửa lỗi lưu trữ lệnh nhanh**: Lệnh như `/help`, `/pairing` bỏ qua trạng thái BUILD/SAVE dẫn đến phiên WebUI trống | Giải quyết vấn đề cơ sở hạ tầng cốt lõi của việc ghi lại lịch sử WebUI, làm nền tảng cho các PR quy trình ghép nối trong tương lai |
| [#3775](https://github.com/HKUDS/nanobot/pull/3775) | chengyongru | **Xử lý sự kiện không hoạt động của bot Feishu**: Đăng ký trình xử lý no-op cho `im.chat.member.bot.added/deleted_v1` | Khắc phục hoàn toàn lỗi "processor not found" do bot khác @ trong nhóm Feishu (liên quan đến Issues #3772, #3787) |
| [#3786](https://github.com/HKUDS/nanobot/pull/3786) | liflovs | **Chuyển tiếp cấu hình bản ghi âm Telegram**: Khắc phục các cấu hình như `transcription_provider` bị bỏ qua | Sửa lỗi hoàn chỉnh quy trình tin nhắn thoại, ảnh hưởng đến các kịch bản triển khai đa ngôn ngữ |
| [#3783](https://github.com/HKUDS/nanobot/pull/3783) | HengWeiBin | **Cấu hình xác minh SSL proxy doanh nghiệp**: Thêm tùy chọn `ssl_verify` để giải quyết lỗi chuỗi chứng chỉ tự ký | Giải phóng nút thắt cổ chai quan trọng cho triển khai mạng nội bộ doanh nghiệp (sau đó được tối ưu hóa bởi #3784) |
| [#3483](https://github.com/HKUDS/nanobot/pull/3483) | flyzstu | **Bổ sung tài liệu OpenCode Go**: Thêm giải thích cấu hình nhà cung cấp cổng hợp nhất | Giảm rào cản cho việc tích hợp mô hình Trung Quốc |
| [#3121](https://github.com/HKUDS/nanobot/pull/3121) | JiajunBernoulli | **Hỗ trợ định tuyến đại lý AgentHook**: Thực hiện định tuyến động thông qua `AgentHookContext.model` | Đóng yêu cầu chức năng dài hạn Issue #3070, cung cấp điểm mở rộng để giảm chi phí thông minh |
| [#3773](https://github.com/HKUDS/nanobot/pull/3773) | shen-baise | **[Đóng] Hợp nhất thành ba PR độc lập**: Lệnh `doctor`, quản lý phiên, `/export` | Chia nhỏ các PR lớn, cải thiện hiệu quả xem xét |

**Tiến độ chung**: Việc hợp nhất hôm nay tập trung vào **sửa lỗi ổn định** (Feishu/Telegram/SSL) và **trải nghiệm nhà phát triển** (chẩn đoán CLI, quản lý phiên), đồng thời hoàn thành việc triển khai kiến trúc cho **định tuyến mô hình** - một yêu cầu lâu dài của cộng đồng.

---

## 4. Điểm nóng cộng đồng

### Issues hoạt động nhiều nhất

| Hạng mục | Vấn đề | Bình luận | Phân tích độ phổ biến |
|:---|:---|:---|:---|
| 🔥1 | [#2880](https://github.com/HKUDS/nanobot/issues/2880) Bất kỳ lỗi tin nhắn nào (lỗi cũ) | **17 bình luận** | **Vấn đề chặn tần suất cao còn tồn tại từ ngày 7 tháng 4**, người dùng báo cáo "gỡ cài đặt và cài đặt lại, xóa sạch đều không hiệu quả", nhưng chỉ có chế độ Đại lý là bình thường. Có vẻ như kênh xử lý tin nhắn cốt lõi và đường dẫn đại lý bị phân nhánh, cần người bảo trì can thiệp để xác định |
| 2 | [#3689](https://github.com/HKUDS/nanobot/issues/3689) Mất ngữ cảnh khi tạm dừng phiên | 5 bình luận | **Đã đóng**, yêu cầu cốt lõi của người dùng: cần ghi nhớ các bước thực thi khi ngắt một vòng lặp nhiệm vụ. Phản ánh khoảng cách giữa kỳ vọng của người dùng về quản lý trạng thái nhiệm vụ dài và việc thực hiện. |
| 3 | [#3780](https://github.com/HKUDS/nanobot/issues/3780) Kiểm soát an ninh không có sandbox trên Windows | 3 bình luận | **Đã đóng**, kịch bản điển hình cho triển khai doanh nghiệp dùng chung: mâu thuẫn giữa `restrictWorkspace` chặn đọc dữ liệu bên ngoài và rủi ro an ninh, cần thiết kế ACL chi tiết hơn. |

### Tóm tắt yêu cầu nóng

- **Chi phí ẩn của #2880**: 17 bình luận không có phản hồi rõ ràng từ người bảo trì, người dùng liên tục cố gắng tự cứu, có rủi ro mất người dùng.
- **Cân bằng giữa an ninh và tiện lợi**: #3780 cho thấy khó khăn cấu trúc trong triển khai doanh nghiệp Windows — Nguyên tắc quyền tối thiểu khó thực hiện khi thiếu sandbox.
- **Độ tin cậy của nhiệm vụ dài**: #3689 và PR #3460, #3788 hình thành vòng lặp nhu cầu-thực hiện, cộng đồng đang tiến hóa từ "có thể chạy" sang "chạy ổn định".

---

## 5. Lỗi và độ ổn định

| Mức độ nghiêm trọng | Vấn đề/PR | Mô tả | Trạng thái sửa lỗi |
|:---|:---|:---|:---|
| 🔴 **Cao** | [#2880](https://github.com/HKUDS/nanobot/issues/2880) | Lỗi xảy ra với bất kỳ đầu vào nào, chế độ không phải đại lý hoàn toàn không khả dụng | ❌ **Không sửa lỗi**, nhãn cũ gây nghi ngờ (vẫn cập nhật vào ngày 14/05) |
| 🔴 **Cao** | [#3790](https://github.com/HKUDS/nanobot/issues/3790) | Hiển thị nội dung phiên WebUI bị lỗi, cần làm mới thủ công | ❌ **Không sửa lỗi**, ảnh hưởng đến phiên bản post3 mới nhất |
| 🟡 **Trung bình** | [#3772](https://github.com/HKUDS/nanobot/issues/3772) → [#3775](https://github.com/HKUDS/nanobot/pull/3775) | Sập khi bot Feishu trong nhóm chat bị bot khác @ | ✅ **Đã sửa lỗi** (trình xử lý no-op) |
| 🟡 **Trung bình** | [#3760](https://github.com/HKUDS/nanobot/issues/3760) | Lỗi 400 `reasoning_content` của DeepSeek V4 Flash | ❌ **Không sửa lỗi**, thất bại ngay trong cuộc hội thoại đầu tiên, chặn việc tích hợp mô hình |
| 🟡 **Trung bình** | [#3754](https://github.com/HKUDS/nanobot/issues/3754) | DeepSeek V4 Flash bỏ qua các tệp bên ngoài, bịa đặt nội dung | ❌ **Không sửa lỗi**, lỗi xảy ra thường xuyên trong các kịch bản tệp nhỏ/kiến thức phổ biến |
| 🟡 **Trung bình** | [#1998](https://github.com/HKUDS/nanobot/issues/1998) | Lỗi định dạng JSON của mô hình loại Coder (GLM5/Qwen3.5) | ❌ **Không sửa lỗi**, hồi quy trong post4, vấn đề tương thích lớp LiteLLM |
| 🟢 **Thấp** | [#3787](https://github.com/HKUDS/nanobot/issues/3787) | Sự kiện mention bot trả lời Feishu chưa được xử lý | ✅ **Đã sửa lỗi** (cùng gốc rễ #3775) |
| 🟢 **Thấp** | [#3718](https://github.com/HKUDS/nanobot/issues/3718) | Đầu ra gợi ý Cron thiếu streamId | ❌ **Không sửa lỗi**, truy vết sự kiện máy chủ không đầy đủ |

**Tín hiệu quan trọng**: Các lỗi liên quan đến DeepSeek V4 Flash ( #3754, #3760 ) bùng nổ dày đặc, mô hình này được sử dụng rộng rãi vì chi phí hiệu quả, nhưng NanoBot có lỗ hổng hệ thống trong việc thích ứng với `reasoning_content` và hành vi đọc tệp.

---

## 6. Yêu cầu chức năng và tín hiệu lộ trình

| Yêu cầu | Vấn đề/PR | Khả năng được đưa vào | Cơ sở đánh giá |
|:---|:---|:---|:---|
| **Công cụ quy hoạch nhiệm vụ đại lý** | PR [#3791](https://github.com/HKUDS/nanobot/pull/3791) | ⭐⭐⭐⭐⭐ **Rất cao** | PR đã được gửi, hỗ trợ vòng đời đầy đủ create/update/show/done, lưu trữ liên tục qua các lượt |
| **Đồng bộ hóa luồng trạng thái Goal + WebUI** | PR [#3788](https://github.com/HKUDS/nanobot/pull/3788) | ⭐⭐⭐⭐⭐ **Rất cao** | Tái cấu trúc lớn do Re-bin dẫn đầu, đầu cuối, thay thế bộ điều phối cũ |
| **Đại lý con đa bước của LongTaskTool** | PR [#3460](https://github.com/HKUDS/nanobot/pull/3460) | ⭐⭐⭐⭐☆ **Cao** | Pending từ ngày 26 tháng 4, có thể trùng lặp kiến trúc với #3788, cần điều phối chiến lược hợp nhất |
| **CLI chẩn đoán `doctor`** | PR [#3776](https://github.com/HKUDS/nanobot/pull/3776) + Vấn đề [#3769](https://github.com/HKUDS/nanobot/issues/3769) | ⭐⭐⭐⭐⭐ **Rất cao** | Nhu cầu mạnh mẽ của cộng đồng (tương đương OpenClaw), đã chia thành PR riêng |
| **CLI quản lý phiên (list/export/delete)** | PR [#3777](https://github.com/HKUDS/nanobot/pull/3777) | ⭐⭐⭐⭐☆ **Cao** | Bổ sung cho lệnh gạch chéo #3778, bao phủ đầy đủ UX |
| **Ghép nối/danh sách trắng người gửi DM** | Vấn đề [#3768](https://github.com/HKUDS/nanobot/issues/3768) | ⭐⭐⭐⭐☆ **Cao** | Nhu cầu an ninh cốt lõi, PR #3774 đã thực hiện ghép nối gốc chat, có thể mở rộng tự nhiên |
| **Theo dõi sử dụng token lịch sử `/insights`** | Vấn đề [#3731](https://github.com/HKUDS/nanobot/issues/3731) | ⭐⭐⭐☆☆ **Trung bình** | Nhu cầu cấp thiết cho kịch bản trả phí, nhưng cần hỗ trợ lớp lưu trữ, có thể phụ thuộc vào tích hợp bên ngoài trong thời gian ngắn |
| **Ước tính bộ mã hóa cục bộ** | Vấn đề [#3647](https://github.com/HKUDS/nanobot/issues/3647) | ⭐⭐⭐☆☆ **Trung bình** | Nhu cầu cấp thiết cho môi trường ngoại tuyến, phạm vi thay đổi nhỏ, phù hợp với good-first-issue |
| **Nhà cung cấp tìm kiếm công cụ lưu trữ của Nhà cung cấp** | Vấn đề [#3741](https://github.com/HKUDS/nanobot/issues/3741) | ⭐⭐⭐☆☆ **Trung bình** | Dành riêng cho Azure OpenAI, tính phổ biến bị hạn chế |
| **Tiêm sự kiện công cụ luồng của Máy chủ API** | Vấn đề [#3698](https://github.com/HKUDS/nanobot/issues/3698) | ⭐⭐⭐⭐☆ **Cao** | Thay đổi 15 dòng, tương đương với chế độ Hermes-agent, chi phí thực hiện thấp |

**Tín hiệu phiên bản tiếp theo**: **Quy hoạch và theo dõi mục tiêu của đại lý** trở thành chủ đề rõ ràng (3 PR #3791, #3788, #3460 phối hợp), **trải nghiệm nhà phát triển CLI** được tăng cường đáng kể (doctor + quản lý phiên), **ghép nối an ninh** chuyển từ nhu cầu doanh nghiệp sang kiến trúc cốt lõi.

---

## 7. Tóm tắt phản hồi người dùng

### 😫 Điểm đau cốt lõi

| Kịch bản | Nguồn | Trích dẫn nguyên văn |
|:---|:---|:---|
| **Thảm họa tương thích mô hình** | #1998, #3754, #3760 | "Mô hình loại Coder luôn gặp lỗi 400" "DeepSeek V4 Flash tự bịa ra bảng tuần hoàn hóa học" "reasoning_content lỗi ngay từ lượt đầu tiên" |
| **Độ tin cậy của WebUI** | #3790 | "Hiển thị bị lỗi sau khi cập nhật mã nguồn mới nhất, cần làm mới trang để khôi phục" |
| **Lo lắng về an ninh triển khai doanh nghiệp Windows** | #3780 | "Không thể bật sandbox, lo ngại vô tình sửa đổi hoặc xóa tệp bên ngoài khu vực làm việc" "restrictWorkspace ngăn đọc dữ liệu bên ngoài, dẫn đến không thể phân tích" |
| **Sự mong manh của môi trường sản xuất Feishu** | #3772, #3787 | "Bị lỗi khi bị bot khác @""Nhận tất cả sự kiện nhóm qua kết nối dài, nếu không có trình xử lý sẽ bị sập" |

### 😊 Sự hài lòng và mong đợi

| Kịch bản | Nguồn | Trích dẫn nguyên văn |
|:---|:---|:---|
| **Độ ổn định của chế độ Đại lý** | Bình luận #2880 | "Nếu sử dụng nanobot agent thì có thể trả lời bình thường" - ngụ ý rằng đường dẫn đại lý đáng tin cậy hơn đường dẫn tin nhắn truyền thống |
| **Khả năng mở rộng mã nguồn mở** | #3070 → #3121 | "Có thể tự xây dựng kho mô hình, chọn những cái có chi phí hiệu quả cho các nhiệm vụ đơn giản" - cộng đồng đã thực hiện định tuyến lớp hook |
| **Mong đợi chẩn đoán CLI** | #3769 | "Lấy cảm hứng từ `openclaw doctor`... một trong những công cụ gỡ lỗi hữu ích nhất" |

### 💡 Cái nhìn sâu sắc

- **"Chế độ Đại lý hoạt động, chế độ thông thường bị lỗi"** (#2880) cho thấy nợ kỹ thuật hai đường ray tồn tại trong kiến trúc cốt lõi, kênh xử lý tin nhắn truyền thống có thể bị lỗi thời sau một số lần tái cấu trúc.
- **Windows + chia sẻ đa người dùng** là một thị trường chưa được phục vụ đầy đủ, yêu cầu kiểm soát an ninh xung đột với giả định Docker hóa Linux.
- **"Bẫy chi phí hiệu quả của DeepSeek V4 Flash"**: Người dùng chọn mô hình này vì chi phí, nhưng lại mất nhiều thời gian gỡ lỗi hơn do vấn đề tương thích.

---

## 8. Tồn đọng cần xử lý

### 🔴 Cần người bảo trì khẩn cấp quan tâm

| Vấn đề/PR | Tạo ngày | Cập nhật cuối cùng | Rủi ro |
|:---|:---|:---|:---|
| [#2880](https://github.com/HKUDS/nanobot/issues/2880) Lỗi với bất kỳ tin nhắn nào | 2026-04-07 | **2026-05-14** | **Không giải quyết trong 38 ngày**, 17 bình luận người dùng tự cứu không thành công, mâu thuẫn giữa nhãn cũ và cập nhật hoạt động, có thể bị gắn cờ sai |
| [#3460](https://github.com/HKUDS/nanobot/pull/3460) LongTaskTool | 2026-04-26 | 2026-05-14 | **Pending 19 ngày**, trùng lặp mục tiêu với #3788, cần quyết định hợp nhất hoặc chia nhỏ |
| [#3693](https://github.com/HKUDS/nanobot/pull/3693) Kiểm soát đồng thời LLM | 2026-05-08 | 2026-05-14 | **Pending 7 ngày**, sửa lỗi hệ thống cho sự sập đồng thời LLM cục bộ, ảnh hưởng người dùng Ollama/vLLM |
| [#3762](https://github.com/HKUDS/nanobot/pull/3762) Sửa lỗi thử lại Codex | 2026-05-12 | 2026-05-14 | **Pending 3 ngày**, kiểm tra đầy đủ nhưng xem xét bị đình trệ |

### 🟡 Cần phối hợp cộng đồng

| Vấn đề/PR | Lý do chặn |
|:---|:---|
| [#3774](https://github.com/HKUDS/nanobot/pull/3774) Quy trình ghép nối | **Phụ thuộc vào #3779** (đã hợp nhất), có thể tiếp tục rebase |
| [#3784](https://github.com/HKUDS/nanobot/pull/3784) Xác minh SSL | Phiên bản tối ưu hóa sau khi đóng #3783, cần xác nhận phạm vi khác biệt với #3783 |
| [#3785](https://github.com/HKUDS/nanobot/pull/3785) Nhà cung cấp OpenCode Go | PR tài liệu #3483 đã hợp nhất, cần xem xét thực hiện mã |

---

**Thời gian tạo báo cáo hàng ngày**: 2026-05-15
**Nguồn dữ liệu**: Luồng hoạt động công khai của GitHub HKUDS/nanobot
**Ghi chú của nhà phân tích**: Khuyến nghị người bảo trì ưu tiên xử lý lỗi gắn cờ cũ #2880 và thiết lập ma trận kiểm tra tương thích chuyên dụng cho dòng mô hình DeepSeek V4.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Nhật báo hoạt động dự án Hermes Agent | 2026-05-15

---

## 1. Tổng quan hôm nay

Hermes Agent duy trì **mức độ hoạt động cao** hôm nay: 50 cập nhật Issues (38 đang hoạt động/mới mở, 12 đã đóng), 50 cập nhật PR (36 chờ hợp nhất, 14 đã hợp nhất/đóng), không có bản phát hành phiên bản mới. Trọng tâm cộng đồng tập trung vào **độ ổn định hiển thị TUI/CLI đầu cuối** (nhiều sự cố trực quan do thay đổi kích thước đầu cuối) và **khả năng thích ứng proxy đa nền tảng** (Telegram, Discord, Feishu, v.v.). Đáng chú ý, hôm nay có 2 PR P1 về an ninh/ổn định (hard_stop được kích hoạt mặc định, bảo vệ chmod thư mục gốc), cho thấy dự án đang tăng cường biên an ninh môi trường sản xuất.

---

## 2. Phát hành phiên bản

**Không có bản phát hành phiên bản mới**

---

## 3. Tiến độ dự án

### Các PR quan trọng đã được hợp nhất hôm nay

| PR | Tác giả | Cải tiến cốt lõi | Trạng thái |
|:---|:---|:---|:---|
| [#26000](https://github.com/NousResearch/hermes-agent/pull/26000) | alaamohanad169-ship-it | **Sửa lỗi fallback đại lý phụ**: deep-copy chuỗi fallback khi quay lại `delegate_task`, ưu tiên sử dụng `base_url` của mục nhập fallback thay vì cấu hình đại lý chính | ✅ Đã đóng |
| [#24099](https://github.com/NousResearch/hermes-agent/pull/24099) | helix4u | **Sửa lỗi gói kỹ năng Docker**: Quay lại tệp kỹ năng được đính kèm khi không có thư mục `skills/` đồng bộ, giải quyết lỗi tải kỹ năng khi triển khai Docker hóa | ✅ Đã đóng |
| [#25710](https://github.com/NousResearch/hermes-agent/pull/25710) | andkulikov | **Sửa lỗi hiển thị luồng Telegram**: Khắc phục lỗi hồi quy định dạng MarkdownV2 cuối cùng chưa được áp dụng, còn lại Markdown gốc | ✅ Đã đóng |

**Đánh giá tiến độ tổng thể**: Việc hợp nhất hôm nay tập trung vào **độ tin cậy của chuỗi ủy quyền đại lý** và **trải nghiệm triển khai Docker hóa**, thuộc về vòng lặp vá lỗi ổn định v0.13.x. Các PR tái cấu trúc TUI quy mô lớn ( #25981 v.v.) vẫn đang chờ xem xét, chưa đi vào nhánh chính.

---

## 4. Điểm nóng cộng đồng

### Issues hoạt động nhiều nhất

| Vấn đề | Bình luận | Yêu cầu cốt lõi | Liên kết |
|:---|:---|:---|:---|
| **#15080** Lỗi Anthropic OAuth 400 (Đăng ký Claude Max 20x) | 12 | Liên kết xác thực của người dùng đăng ký doanh nghiệp bị gián đoạn, nghi ngờ cơ chế làm mới token hoặc phạm vi OAuth không tương thích với API mới nhất của Anthropic | [Liên kết](https://github.com/NousResearch/hermes-agent/issues/15080) |
| **#11692** Cơ chế truy vết "biên lai" của đại lý tự cải thiện | 9 | Đề xuất nhu cầu **quản trị và kiểm toán** cho tính năng khác biệt cốt lõi của Hermes (đại lý tự sửa đổi): Làm thế nào để chứng minh phiên bản kỹ năng nào đã tạo ra đầu ra nào | [Liên kết](https://github.com/NousResearch/hermes-agent/issues/11692) |
| **#152