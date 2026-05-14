# OpenClaw Sinh thái Nhật báo 2026-05-14

> Issues: 500 | PRs: 500 | Dự án bao phủ: 13 | Thời gian tạo: 2026-05-14 00:25 UTC

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

# Nhật báo động thái dự án OpenClaw | 2026-05-14

---

## 1. Tổng quan hôm nay

OpenClaw hôm nay duy trì mức độ hoạt động cực cao, với **500 lượt cập nhật Issues** (437 mới/hoạt động, 63 đóng) và **500 lượt cập nhật PRs** (477 chờ hợp nhất, 23 đã hợp nhất/đóng) trong vòng 24 giờ, cho thấy mật độ tham gia cộng đồng đáng kể. Dự án liên tục phát hành 3 phiên bản beta (v2026.5.12-beta.4~6), tập trung vào việc gửi phương tiện iMessage, nâng cấp giao thức Gateway và sửa lỗi thời gian chạy Codex. Các điểm nghẽn cốt lõi vẫn tập trung vào ba lĩnh vực chính: **hết giờ mạng Gateway, độ ổn định kênh Slack/Telegram, và hiệu suất phối hợp đa Agent**. Vấn đề suy thoái thời gian chạy trong môi trường Windows + Node 24 nhận được sự quan tâm cao nhất từ cộng đồng (17 bình luận). Tỷ lệ hợp nhất PR thấp (4.6%), với nhiều đóng góp đang chờ xác minh hành vi, cho thấy nút thắt quy trình rõ ràng.

---

## 2. Phát hành phiên bản

### v2026.5.12-beta.6
| Thuộc tính | Nội dung |
|:---|:---|
| Ngày phát hành | 2026-05-12 (được đẩy lên beta.6 hôm nay) |
| Thay đổi cốt lõi | **Sửa lỗi gửi phương tiện iMessage** + Tối ưu hóa khởi tạo phiên Agent |

**Cập nhật chi tiết:**
- **Sửa lỗi iMessage** ([#81209](https://github.com/openclaw/openclaw/issues/81209)): Ngừng hiển thị văn bản giữ chỗ `<media:image>` khi gửi ảnh gốc thuần phương tiện, đồng thời giữ nguyên khóa echo nội bộ để tránh trả lời lặp lại. Cảm ơn @homer-byte
- **Phiên Agent**: Tạo phiên chính được cấu hình trước `session` đầu tiên (tóm tắt bị cắt bớt, nội dung đầy đủ xem ghi chú phát hành)

**Lưu ý di chuyển:** Người dùng plugin iMessage nếu phụ thuộc vào văn bản giữ chỗ cũ để gỡ lỗi, cần điều chỉnh logic giám sát.

---

### v2026.5.12-beta.5
| Thuộc tính | Nội dung |
|:---|:---|
| Thay đổi cốt lõi | **Nâng cấp bắt buộc giao thức Gateway v4** + Truyền phạm vi phiên Talk |

**Cập nhật chi tiết:**
- **Thay đổi phá vỡ giao thức Gateway** ([#80725](https://github.com/openclaw/openclaw/issues/80725)): **Bắt buộc client v4**, thêm khung truyền trực tiếp `deltaText`/`replace` rõ ràng, client SDK có thể tiêu thụ cập nhật trợ lý mà không cần diff cục bộ. Cảm ơn @samzong
- **Sửa lỗi phạm vi Talk** ([#81379](https://github.com/openclaw/openclaw/issues/81379)): Truyền phạm vi phiên Talk cho resolver [AI]. Cảm ơn @pgondhi987
- **GitHub Copilot**: Hỗ trợ cắt bớt (nội dung đầy đủ xem ghi chú phát hành)

**⚠️ Thay đổi phá vỡ:** Nâng cấp bắt buộc giao thức v4 có nghĩa là các SDK/client phiên bản cũ phải được cập nhật, nếu không sẽ không thể kết nối. Khuyến nghị tất cả các bên tích hợp kiểm tra khả năng tương thích.

---

### v2026.5.12-beta.4
| Thuộc tính | Nội dung |
|:---|:---|
| Thay đổi cốt lõi | **Sửa lỗi thời gian chạy Codex** + Tối ưu hóa quy trình di chuyển |

**Cập nhật chi tiết:**
- **Thời gian chạy Codex** (không có issue riêng): Cho phép gói `@openclaw/codex` đã cài đặt chính thức sử dụng trợ lý SDK task-runtime riêng, sửa lỗi `MODULE_NOT_FOUND` trong thời gian chạy beta OpenAI/Codex sau khi di chuyển
- **UX di chuyển Codex**: Nhấn Enter để kích hoạt hộp kiểm được tô sáng trước khi tiếp tục, làm cho thao tác `Skip for now` trực quan hơn (tóm tắt bị cắt bớt)

**Lưu ý di chuyển:** Người dùng di chuyển từ Codex beta của OpenAI cần đảm bảo phiên bản gói khớp nhau, tránh xung đột phân giải mô-đun.

---

## 3. Tiến độ dự án

### Các PR quan trọng được hợp nhất/đóng hôm nay

| PR | Trạng thái | Người đóng góp | Đóng góp cốt lõi | Giá trị thúc đẩy |
|:---|:---|:---|:---|:---|
| [#81487](https://github.com/openclaw/openclaw/pull/81487) | **Đã hợp nhất** | @BunsDev | Cài đặt kích thước phông chữ cục bộ trên trình duyệt của UI điều khiển (5 mức từ 90%-140%) | Nâng cao khả năng truy cập đáng kể, phản hồi yêu cầu [#8547](https://github.com/openclaw/openclaw/issues/8547) cách đây 3 tháng |
| [#81187](https://github.com/openclaw/openclaw/pull/81187) | **Đã hợp nhất** | @YB0y | Xuất `openclaw commitments --json` ra stdout | Sửa lỗi kênh tiêu thụ JSON của CLI bị gián đoạn |
| [#81570](https://github.com/openclaw/openclaw/pull/81570) | Chờ hợp nhất | @Kaspre | Memoization cấp quy trình cho snapshot siêu dữ liệu plugin | Tối ưu hóa hiệu suất, giảm nhẹ vấn đề quét lại manifest [#81143](https://github.com/openclaw/openclaw/issues/81143) |
| [#81572](https://github.com/openclaw/openclaw/pull/81572) | Chờ hợp nhất | @efpiva | Lưu trạng thái hoàn thành gia tăng của tác vụ Cron | Độ tin cậy: Giải quyết vấn đề hiển thị tác vụ cron "bị treo giả" |
| [#81573](https://github.com/openclaw/openclaw/pull/81573) | Chờ hợp nhất | @freeter226 | Kiểm tra khả năng tương thích định dạng DeepSeek thinking của mô hình Xiaomi MiMo | Mở rộng hệ sinh thái: Bao phủ giao thức mô hình trong nước |
| [#80749](https://github.com/openclaw/openclaw/pull/80749) | Chờ hợp nhất | @sahilsatralkar | Yêu cầu Slack xác nhận biên nhận gửi đi | Độ ổn định: Giải quyết triệt để vấn đề "gửi ma" của tin nhắn Slack |

**Đánh giá tiến độ tổng thể**: Việc hợp nhất hôm nay chủ yếu tập trung vào sửa lỗi UX, với lượng lớn PR về kiến trúc cốt lõi (hiệu suất, độ tin cậy) đang chờ xem xét. Việc nâng cấp giao thức v4 đánh dấu Gateway bước vào thế hệ mới, nhưng áp lực di chuyển client cũng đồng thời tăng lên.

---

## 4. Điểm nóng cộng đồng

### Issues hoạt động sôi nổi nhất (sắp xếp theo số bình luận)

| Thứ hạng | Issue | Bình luận | 👍 | Yêu cầu cốt lõi | Liên kết |
|:---|:---|:---:|:---|:---|:---|
| 1 | **Suy thoái thời gian chạy Gateway**: Mạng đa hệ thống con Windows 11 + Node 24 / bộ định thời kém hiệu quả | 17 | 1 | Độ ổn định môi trường sản xuất, nguyên nhân gốc rễ của hồi quy giữa các phiên bản | [#73323](https://github.com/openclaw/openclaw/issues/73323) |
| 2 | **Ngắt kết nối im lặng Slack**: Sau nhiều ngày kết nối không phản hồi, không có nhật ký lỗi | 16 | 2 | Độ tin cậy IM doanh nghiệp, thiếu khả năng quan sát | [#72808](https://github.com/openclaw/openclaw/issues/72808) |
| 3 | **Thời gian chờ watchdog truyền có thể cấu hình**: Mô hình suy luận dài (Kimi K2.5/DeepSeek-R1) thường xuyên kích hoạt đặt lại 30 giây | 12 | 7 | Thích ứng mô hình AI gốc, tính linh hoạt của tham số | [#68596](https://github.com/openclaw/openclaw/issues/68596) |
| 4 | **Từ dừng quá hẹp của plugin Dreaming**: Dấu vết token hóa làm ô nhiễm việc trích xuất chủ đề | 10 | 2 | Chất lượng plugin, làm sạch dữ liệu | [#68449](https://github.com/openclaw/openclaw/issues/68449) |
| 5 | **Phát hiện phiên bị treo không có hành động khôi phục**: Cần khởi động lại Gateway từ bên ngoài | 9 | 0 | Khả năng tự phục hồi, tự động hóa vận hành | [#71127](https://github.com/openclaw/openclaw/issues/71127) |

**Phân tích yêu cầu**: Các chủ đề nóng cho thấy đặc điểm ưu tiên **"Độ ổn định > Hiệu suất > Chức năng"**. Sự kết hợp Windows/Node 24 trở thành khu vực phát sinh vấn đề mới, có thể liên quan đến bộ định thời libuv hoặc thay đổi ngăn xếp mạng. Vấn đề ngắt kết nối Slack phản ánh lỗi cơ chế giữ kết nối đường truyền dài. Yêu cầu cấu hình bộ giám sát được nhiều người thích (👍7) cho thấy số lượng người dùng mô hình suy luận đang tăng lên, nhưng cơ sở hạ tầng chưa theo kịp sự phát triển của mô hình.

---

## 5. Lỗi và Độ ổn định

### Sắp xếp theo mức độ nghiêm trọng

| Mức | Issue | Mô tả | Trạng thái | PR Sửa lỗi |
|:---|:---|:---|:---|:---|
| 🔴 **P0-Chặn sản xuất** | [#73323](https://github.com/openclaw/openclaw/issues/73323) | Suy thoái mạng đa hệ thống con Gateway: Lấy giá 60 giây hết giờ, vòng lặp Telegram dừng 127-266 giây, RPC chậm 8-83 giây | **Mở**, chưa giải quyết qua 4 phiên bản | Không |
| 🔴 **P0-Chặn sản xuất** | [#72808](https://github.com/openclaw/openclaw/issues/72808) | Ngắt kết nối im lặng Slack, không tự động kết nối lại hoặc cảnh báo | **Mở** | Không |
| 🟡 **P1-Chức năng bị hỏng** | [#72879](https://github.com/openclaw/openclaw/issues/72879) | Lỗi `thought_signature` 400 xuất hiện trở lại vào ngày 2026.4.25, đã sửa vào 4.24 trước đó | **Mở**, lỗi tái hiện | Không |
| 🟡 **P1-Chức năng bị hỏng** | [#71992](https://github.com/openclaw/openclaw/issues/71992) | Webchat Control UI hiển thị lại mỗi phản hồi của trợ lý | **Mở**, hồi quy từ #5964/#39469 | Không |
| 🟡 **P1-Chức năng bị hỏng** | [#74358](https://github.com/openclaw/openclaw/issues/74358) | Xem trước luồng Slack hoàn toàn im lặng khi `toolProgress: false`, chế độ verbose không hoạt động | **Mở**, được giới thiệu vào v2026.4.21 | Không |
| 🟡 **P1-Chức năng bị hỏng** | [#71127](https://github.com/openclaw/openclaw/issues/71127) | Không có hành động chấm dứt/khôi phục sau khi phát hiện phiên bị treo | **Mở** | Không |
| 🟡 **P1-Chức năng bị hỏng** | [#71412](https://github.com/openclaw/openclaw/issues/71412) | `stopChannel` kết thúc tác vụ zombie hết thời gian chờ, ngăn chặn giám sát sức khỏe khởi động lại | **Mở** | Không |
| 🟢 **P2-Vấn đề trải nghiệm** | [#68944](https://github.com/openclaw/openclaw/issues/68944) | Lệnh CLI bị treo ở giai đoạn bắt tay Gateway WebSocket | **Mở** | Không |
| 🟢 **P2-Vấn đề trải nghiệm** | [#70628](https://github.com/openclaw/openclaw/issues/70628) | DM Telegram vẫn tổng hợp bong bóng "không có phản hồi" ngay cả khi không có phản hồi rõ ràng | **Mở** | Không |

**Các lỗi quan trọng được đóng hôm nay:**
- [#80730](https://github.com/openclaw/openclaw/issues/80730) ✅ **TUI yêu cầu cấp phép lại sau khi khởi động lại** — Đã sửa (6 bình luận)
- [#78851](https://github.com/openclaw/openclaw/issues/78851) ✅ **Thiếu bộ kết nối HTTP dẫn đến phân tích mô hình 7-8 giây** — Đã đóng, giải pháp đã được triển khai (6 bình luận)
- [#74334](https://github.com/openclaw/openclaw/issues/74334) ✅ **Không khớp chuẩn hóa đoạn dẫn đến thất bại ứng viên thăng cấp im lặng** — Đã sửa (5 bình luận)
- [#71178](https://github.com/openclaw/openclaw/issues/71178) ✅ **Cập nhật dẫn đến mất hoàn toàn tin nhắn Telegram** — Đã sửa (5 bình luận)

---

## 6. Yêu cầu chức năng và Tín hiệu lộ trình

| Issue/PR | Loại | Độ mạnh tín hiệu | Khả năng đưa vào phiên bản tiếp theo | Lập luận chính |
|:---|:---|:---:|:---|:---|
| [#68596](https://github.com/openclaw/openclaw/issues/68596) Thời gian chờ watchdog truyền có thể cấu hình | Yêu cầu chức năng | ⭐⭐⭐⭐⭐ | **Cao** | 👍7 là cao nhất hôm nay, nhu cầu thiết yếu của người dùng mô hình suy luận, phạm vi thay đổi rõ ràng |
| [#71736](https://github.com/openclaw/openclaw/issues/71736) Khe cắm đóng góp plugin Control UI | RFC | ⭐⭐⭐⭐⭐ | Trung-cao | Đề xuất cấp kiến trúc, nhu cầu giải tỏa chế độ Plan, cần xem xét thiết kế |
| [#71195](https://github.com/openclaw/openclaw/issues/71195) Đường dẫn thời gian thực OpenAI Talk Mode macOS | Yêu cầu chức năng | ⭐⭐⭐⭐☆ | Trung | Đối trọng với plugin voice-call, tối ưu hóa độ trễ rõ ràng, nhưng dành riêng cho nền tảng |
| [#71058](https://github.com/openclaw/openclaw/issues/71058) Bot Azure/Teams đa Gateway đơn lẻ | Yêu cầu chức năng | ⭐⭐⭐⭐☆ | Trung | Kịch bản đa người thuê doanh nghiệp, thay đổi cấu trúc cấu hình, không phá vỡ |
| [#71142](https://github.com/openclaw/openclaw/issues/71142) Giới hạn kích thước tải lên Control UI có thể cấu hình | Yêu cầu chức năng | ⭐⭐⭐☆☆ | Cao | Giới hạn cứng 5MB, thay đổi cực nhỏ, cải thiện trực tiếp trải nghiệm người dùng |
| [#69066](https://github.com/openclaw/openclaw/issues/69066) Tách biệt danh tính dịch vụ nội bộ và xác thực người dùng | RFC | ⭐⭐⭐☆☆ | Thấp-Trung | Thay đổi sâu về kiến trúc bảo mật, chu kỳ dài, cần sự đồng thuận của cộng đồng |

**Theo dõi triển khai PR:**
- [#81570](https://github.com/openclaw/openclaw/pull/81570) Memoization siêu dữ liệu plugin → Trực tiếp đáp ứng nhu cầu loại hiệu suất
- [#73991](https://github.com/openclaw/openclaw/pull/73991) Cách ly kênh lệnh cho mỗi Agent → Cơ sở hạ tầng độ tin cậy đa Agent
- [#73967](https://github.com/openclaw/openclaw/pull/73967) Hiển thị thành phần gốc Discord → Bổ sung khả năng kênh

---

## 7. Tóm tắt phản hồi người dùng

### Đau khổ thực tế

| Kịch bản | Trích dẫn gốc | Nguồn |
|:---|:---|:---|
| **Thất bại khi trình diễn** | *"Hôm nay tôi muốn trình diễn cho bạn bè trong bữa trưa, nhưng nó hoàn toàn không phản hồi"* — Slack bị ngắt kết nối im lặng sau vài ngày | [#72808](https://github.com/openclaw/openclaw/issues/72808) |
| **Lo lắng về thích ứng mô hình suy luận** | *"streaming watchdog: no stream updates for 30s; resetting status. The backend may have dropped this run silently"* — Mô hình suy luận dài thường xuyên bị báo tử sai | [#68596](https://github.com/openclaw/openclaw/issues/68596) |
| **Cảnh báo vận hành lúc nửa đêm** | *"affected sessions remain frozen indefinitely until external restart"* — Phát hiện treo phiên không tự phục hồi | [#71127](https://github.com/openclaw/openclaw/issues/71127) |
| **Chi phí thay đổi cấu hình** | *"every change requires image rebuild in policy-locked sandboxes"* — Cấu hình plugin thiếu đường dẫn env-var | [#72950](https://github.com/openclaw/openclaw/issues/72950) |
| **Môi trường sản xuất Windows** | *"chronic across 4.23/4.25/4.26 on Windows 11 + Node 24"* — Suy thoái liên tục qua các phiên bản | [#73323](https://github.com/openclaw/openclaw/issues/73323) |

### Điểm hài lòng
- Lặp lại nhanh chóng các phiên bản beta: *"appreciate how quickly the team is shipping fixes"* ([#80714](https://github.com/openclaw/openclaw/issues/80714))
- Sửa lỗi chính xác: Sửa lỗi đọc lại cấu hình (#79947) và sửa lỗi ghim IPv4 SSRF (#80078) đã trực tiếp giúp môi trường sản xuất

### Điểm không hài lòng
- Lỗi hồi quy lặp lại: Lỗi `thought_signature` 400 được sửa vào 4.24 nhưng lại xuất hiện trở lại vào 4.25 ([#72879](https://github.com/openclaw/openclaw/issues/72879))
- Thiếu thông tin gỡ lỗi: Ngắt kết nối Slack "không có nhật ký lỗi", suy thoái Gateway chỉ ở mức WARN ([#72808](https://github.com/openclaw/openclaw/issues/72808), [#73323](https://github.com/openclaw/openclaw/issues/73323))
- Hành vi CLI ẩn: Phục hồi im lặng phiên gần nhất mặc định `--channel last`, không có biểu ngữ cảnh báo ([#71417](https://github.com/openclaw/openclaw/issues/71417))

---

## 8. Tồn đọng chưa xử lý

### Issue/PR có giá trị cao chưa phản hồi trong thời gian dài

| Mục | Ngày tạo | Cập nhật cuối | Số ngày tồn đọng | Rủi ro | Hành động đề xuất |
|:---|:---|:---|:---:|:---|:---|
| [#53408](https://github.com/openclaw/openclaw/issues/53408) Tham số công cụ write/exec bị mất im lặng sau phiên dài | 2026-03-24 | 2026-05-13 | **51 ngày** | 🔴 Rủi ro toàn vẹn dữ liệu | Liên kết logic nén ngữ cảnh, cần sự can thiệp của đội ngũ cốt lõi |
| [#40165](https://github.com/openclaw/openclaw/issues/40165) Tách bỏ tiền tố/hậu tố NO_REPLY hai lần | 2026-03-08 | 2026-05-13 | **67 ngày** | 🟡 Rò rỉ chặn phản hồi | Đã có issue liên quan #28874/#39335, có thể đóng gói sửa lỗi |
| [#54724](https://github.com/openclaw/openclaw/pull/54724) Sửa lỗi chọn mô hình chính của Agent và tải thư mục | 2026-03-25 | 2026-05-14 | **50 ngày** | 🟡 Nút thắt xem xét PR quy mô XL | Cần xác minh hành vi, đề xuất tách hoặc ưu tiên xem xét |
| [#43810](https://github.com/openclaw/openclaw/pull/43810) Người dùng chưa được phê duyệt nhận lại mã ghép nối | 2026-03-12 | 2026-05-14 | **63 ngày** | 🟢 Trải nghiệm an toàn | Quy mô XS, không nên chặn hợp nhất nhanh chóng |
| [#55596](https://github.com/openclaw/openclaw/pull/55596) Căn chỉnh cột bảng Markdown ký tự CJK | 2026-03-27 | 2026-05-14 | **48 ngày** | 🟢 Trải nghiệm quốc tế hóa | Cần xác minh hiển thị trên Telegram, quy trình bị kẹt |

### Cảnh báo nút thắt quy trình
- **Nhãn triage "needs-real-behavior-proof" tràn lan**: 12/30 PR được hiển thị (40%) gắn nhãn này, trở thành vật cản hợp nhất thực tế
- **Tồn đọng PR bot clawsweeper**: 6 PR sửa lỗi (từ #73950 đến #73991) do @openclaw-clownfish[bot] gửi đều đang chờ xem xét, đóng góp tự động hóa chưa được ưu tiên xử lý

---

*Thời gian tạo báo cáo nhật ký: 2026-05-14 | Nguồn dữ liệu: Kho lưu trữ công khai GitHub openclaw/openclaw*

---

## Đối chiếu hệ sinh thái ngang

# Báo cáo phân tích so sánh ngang về hệ sinh thái trợ lý AI cá nhân / tác tử tự động nguồn mở

**Ngày phân tích**: 2026-05-14 | **Dự án bao phủ**: 12 kho lưu trữ đang hoạt động

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái nguồn mở trợ lý AI cá nhân đang trải qua một **bước nhảy vọt tập thể từ "xác minh chức năng" sang "sẵn sàng sản xuất"**. Các dự án hàng đầu (OpenClaw, ZeroClaw, CoPaw) xử lý 50-500 Issues/PRs mỗi ngày, nhưng tỷ lệ hợp nhất có sự phân hóa rõ rệt — Tỷ lệ hợp nhất PR chỉ 4.6% của OpenClaw bộc lộ nút thắt quy trình xác minh hành vi, trong khi LobsterAI dọn sạch 22 PR tồn đọng cho thấy sự khác biệt trong chiến lược quản lý nợ kỹ thuật. Việc áp dụng bùng nổ các mô hình suy luận (DeepSeek V4/R1, Kimi K2.5, GLM-5.1) đang thúc đẩy việc thích ứng toàn bộ ngăn xếp: thời gian chờ watchdog truyền trực tuyến, khả năng tương thích định dạng nội dung suy nghĩ, và nén ngữ cảnh dài trở thành những thách thức cơ sở hạ tầng chung. Đồng thời, **nhu cầu cấp doanh nghiệp** (cô lập chứng từ đa người thuê, độ ổn định kênh IM, khả năng quan sát, hộp cát bảo mật) đã chuyển từ yêu cầu biên sang lộ trình cốt lõi, đánh dấu sự di chuyển cấu trúc của hồ sơ người dùng từ giới công nghệ đến nhóm/tổ chức.

---

## 2. So sánh mức độ hoạt động của từng dự án

| Dự án | Issues (24h) | PRs (24h) | Hợp nhất/Đóng | Chờ hợp nhất | Phát hành | Đánh giá sức khỏe |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| **OpenClaw** | 500 cập nhật | 500 cập nhật | 23 | **477** | v2026.5.12-beta.4~6 | ⚠️ Hoạt động cực cao nhưng nút thắt hợp nhất nghiêm trọng, thẻ "needs-real-behavior-proof" chặn 40% PR |
| **NanoBot** | 14 (5 chờ xử lý) | 8 (9 chờ hợp nhất) | 8 | 9 | Không | ✅ Cột mốc khắc phục thảm họa được triển khai, độ phủ thử nghiệm tăng, tiến tới giai đoạn sẵn sàng sản xuất |
| **Hermes Agent** | 50 | 50 | 3 | **47** | Không | 🔥 Chế độ cứu hỏa, hồi quy hệ thống v0.13.0 gây ra khủng hoảng mất dữ liệu, phản ứng sửa chữa khẩn cấp nhanh nhưng áp lực tồn đọng |
| **PicoClaw** | 10 (5 hoạt động) | 42 (14 chờ xem xét) | 28 | 14 | v0.2.8-nightly | ✅ Lặp lại ổn định, phạm vi các tình huống biên như trò chuyện nhóm, OAuth, tạo ảnh tích cực |
| **NanoClaw** | 8 (7 hoạt động) | 26 (5 chờ xem xét) | 21 | 5 | Không | ✅ Giao hàng mật độ cao, chiến lược rõ ràng về bản địa hóa kỹ năng tiếp thị và khả năng quan sát (LangFuse) |
| **NullClaw** | 1 | 1 | 0 | 1 | Không | ⚠️ Hoạt động cực thấp, PR Cron 2.0 bị kẹt 37 ngày, quy trình kiểm toán bảo mật hóa nhưng không có tiến triển chức năng |
| **IronClaw** | 22 (20 hoạt động) | 50 (35 chờ hợp nhất) | 15 | **35** | Không | 🔥 Tái cấu trúc kiến trúc Reborn đang được triển khai toàn diện, 35 PR chờ hợp nhất dự báo khủng hoảng băng thông xem xét |
| **LobsterAI** | 2 | 23 (1 chờ hợp nhất) | 22 | 1 | 2026.5.12 | ✅ Hiệu quả kỹ thuật cực cao, xử lý đồng thời 50 ngày PR tồn đọng, nhưng cần chú ý lỗi cuộn ảo mới |
| **Moltis** | 1 | 0 | 0 | 0 | Không | ⚠️ Gần như đình trệ, chỉ có lỗi hồi quy UI, mức độ tham gia cộng đồng giảm nghiêm trọng |
| **CoPaw** | 30 (12 hoạt động) | 50 (29 chờ hợp nhất) | 21 | 29 | v1.1.7-beta.2 | 🔥 Lặp lại dày đặc, các vấn đề sản xuất như hết giờ MCP/hết bộ nhớ tập trung bộc lộ, tải xem xét tập trung |
| **ZeptoClaw** | 4 (tự xây dựng/đóng) | 0 | 0 | 0 | Không | ⚠️ Chế độ bảo trì im lặng, kiểm toán bảo mật nội bộ hóa, không có đóng góp bên ngoài |
| **ZeroClaw** | 34 (15 đóng) | 50 (16 hợp nhất) | 16 | 34 | Không | ✅ Chu trình tự động hóa kỹ năng (phân nhánh xem xét kiểu Hermes) và khả năng quan sát OTel song song thúc đẩy |

---

## 3. Vị thế của OpenClaw trong hệ sinh thái

| Chiều | Biểu hiện OpenClaw | Đối chiếu hệ sinh thái |
|:---|:---|:---|
| **Quy mô cộng đồng** | 500 Issues + 500 PRs hàng ngày, quy mô tuyệt đối số 1 | ZeroClaw/CoPaw/IronClaw khoảng 50 PRs/ngày, là 1/10; NanoBot/PicoClaw thấp hơn |
| **Lộ trình kỹ thuật** | **Kiến trúc tập trung Gateway**: Hướng giao thức (nâng cấp bắt buộc v4), trừu tượng hóa kênh đa kênh, hệ sinh thái plugin mở | Hermes Agent nghiêng về "Agent đơn thể + chợ kỹ năng"; IronClaw đặt cược vào tái cấu trúc thành phần hóa WASM Reborn; NanoClaw tập trung vào ngăn xếp kỹ năng tự động hóa tiếp thị |
| **Lợi thế cốt lõi** | ① **Chiều rộng bao phủ kênh** (Ma trận đầy đủ iMessage/Slack/Telegram/Discord) ② **Khả năng tiêu chuẩn hóa giao thức** (Thiết kế khung `deltaText`/`replace` của Gateway v4) ③ **Chiều sâu tích hợp doanh nghiệp** (Bot Azure/Teams đa, SSO, nhật ký kiểm toán) | Đối chiếu: PicoClaw theo kịp việc phân bổ người dùng nhóm chat; CoPaw tích hợp DingTalk/WeChat/QQ nhưng độ ổn định kém; ZeroClaw bảo mật doanh nghiệp (mã ghép nối, độ tin cậy CA) quyết liệt hơn |
| **Hạn chế cấu trúc** | **Tỷ lệ hợp nhất PR 4.6%** so với 32% của ZeroClaw, 96% của LobsterAI; Quy trình xác minh hành vi trở thành nút thắt thực tế; Môi trường Windows + Node 24 suy thoái chưa được giải quyết qua 4 phiên bản | Hermes Agent mặc dù cũng có tỷ lệ đóng 6%, nhưng sửa chữa khẩn cấp <24h; NanoBot đóng vòng 22 ngày cho nhu cầu khắc phục thảm họa |
| **Vị trí hệ sinh thái** | **"Người đặt ra tiêu chuẩn lớp cơ sở hạ tầng"** — Tương tự Kubernetes trong điều phối container, định nghĩa mô hình tương tác ngành thông qua API plugin và giao thức Gateway | Rủi ro: Nếu nút thắt hợp nhất tiếp tục, người đóng góp có thể chuyển sang các giải pháp thay thế "nhẹ nhàng và dễ tiếp cận" hơn như PicoClaw/ZeroClaw |

---

## 4. Các hướng kỹ thuật được quan tâm chung

| Hướng kỹ thuật | Dự án liên quan | Yêu cầu cụ thể | Mức độ khẩn cấp |
|:---|:---|:---|:---|
| **Cơ sở hạ tầng thích ứng mô hình suy luận** | OpenClaw, NanoBot, PicoClaw, ZeroClaw, CoPaw | Thời gian chờ watchdog truyền có thể cấu hình (mã cứng 30 giây tự động phát hiện DeepSeek-R1/Kimi K2.5 chết); Khả năng tương thích định dạng trường `reasoning_content`; Ngăn chặn rò rỉ nội dung suy nghĩ | 🔴 **Cực cao** |
| **Độ ổn định và khả năng quan sát kênh IM** | OpenClaw, NanoBot, PicoClaw, NanoClaw, CoPaw | Ngắt kết nối im lặng Slack (không có nhật ký/không tự động kết nối lại); Dừng vòng lặp Telegram; Thiếu phạm vi quyền tệp đính kèm; Mất ngữ cảnh webhook | 🔴 **Cực cao** |
| **Quản lý ngữ cảnh/bộ nhớ dài** | OpenClaw, NanoBot, LobsterAI, CoPaw | Chiến lược nén ngữ cảnh (lối vào thủ công + kích hoạt tự động); Lưu giữ lịch sử lưu trữ phiên; Khôi phục ngữ cảnh sau khi gián đoạn; Hiển thị số lượng token sử dụng theo thời gian thực | 🟡 **Cao** |
| **Cô lập đa người thuê/chứng từ** | NanoClaw, ZeroClaw, CoPaw | Hạn ngạch API theo nhóm và phân tách danh tính; Hết hạn vòng khóa; Đường dẫn cấu hình biến môi trường (tránh tái tạo hình ảnh) | 🟡 **Cao** |
| **Khả năng quan sát (Tracing/Metrics)** | NanoClaw, ZeroClaw, IronClaw | Tích hợp LangFuse; Span OTEL và dấu vết cấp turn; CLI chẩn đoán `doctor`; Lưu trữ lịch sử chạy Cron | 🟡 **Cao** |
| **Hộp cát bảo mật và ranh giới thực thi** | PicoClaw, CoPaw, ZeptoClaw | Thoát hộp cát không gian làm việc (`find /` bỏ qua); Cân bằng giữa chặn im lặng lệnh shell và tính khả dụng; MCP không được xác thực RCE mặt | 🟡 **Cao** |
| **Tương tác giọng nói/đa phương thức** | NanoClaw, CoPaw, LobsterAI | Chuyển giọng nói sang văn bản whisper.cpp hoàn toàn cục bộ; Luồng đầu vào giọng nói riêng biệt; Nhất quán định tuyến trực quan (`.any()` so với `default`) | 🟢 **Trung bình** |

---

## 5. Phân tích định vị khác biệt

| Dự án | Trọng tâm chức năng cốt lõi | Người dùng mục tiêu | Khác biệt chính về kiến trúc kỹ thuật |
|:---|:---|:---|:---|
| **OpenClaw** | Gateway đa kênh cấp doanh nghiệp, tiêu chuẩn hóa giao thức, hệ sinh thái plugin | Bộ phận CNTT của nhóm/tổ chức vừa và lớn | Thời gian chạy Node.js, kiến trúc tập trung Gateway, chiến lược nâng cấp bắt buộc giao thức v4 |
| **Hermes Agent** | Tự động hóa cá nhân (Cron), kỹ năng blockchain (EVM đa chuỗi), quản lý Dashboard | Người dùng cao cấp cá nhân, nhà phát triển Crypto | Kết hợp Rust + TypeScript, lưu trữ systemd/launchd, kiến trúc phân mảnh profile |
| **NanoBot** | Chuyển đổi khắc phục thảm họa mô hình, hệ sinh thái công cụ MCP, triển khai IM đa kênh nhẹ | Người dùng Trung Quốc đại lục (trong các tình huống mạng không ổn định), nhà phát triển cá nhân | Chủ yếu là Python, kiến trúc xếp tầng `fallback_models` |
| **PicoClaw** | Thiết bị biên/nhúng, trò chuyện đa người dùng, thích ứng mô hình trong nước | Nhà phát triển phần cứng, người điều phối cộng đồng | Ngôn ngữ Go, phân phối liên tục bản dựng đêm, tuân thủ nghiêm ngặt nhà cung cấp |
| **NanoClaw** | Tự động hóa tiếp thị (Reddit/LinkedIn/quảng cáo), quyền riêng tư giọng nói, khả năng quan sát | Hoạt động tiếp thị, người dùng nhạy cảm về quyền riêng tư | TypeScript, kiểm toán Lighthouse tự lưu trữ, giải pháp thuần cục bộ whisper.cpp |
| **IronClaw** | Thành phần hóa hộp cát WASM, gốc blockchain NEAR, kiến trúc Reborn | Nhà phát triển Web3, người ủng hộ phi tập trung | Full-stack Rust, thời gian chạy WASMtime, thiết kế nguyên tắc tin cậy của hook |
| **LobsterAI** | Tích hợp sâu trên máy tính để bàn (POPO/IM doanh nghiệp), chỉnh sửa tạo tác bên ngoài, đầu vào giọng nói | Người dùng doanh nghiệp Trung Quốc, hệ sinh thái Youdao | Electron + SQLite, quản lý trạng thái Redux, gọi hệ thống đa nền tảng |
| **CoPaw** | Điều phối Agent ít mã, mẫu dựng sẵn, quốc tế hóa UI Console | Người dùng phi kỹ thuật, thị trường Đông Nam Á (tiếng Indonesia) | Python/FastAPI, APIRouter đăng ký plugin, thích ứng trên di động MobileNavContext |
| **ZeroClaw** | Tiến hóa tự động hóa kỹ năng (phân nhánh xem xét Hermes), OTEL toàn bộ đường dẫn, bảo mật Gateway | Doanh nghiệp tự lưu trữ, đội ngũ tuân thủ bảo mật | Rust/TypeScript, di chuyển lược đồ v3, vòng lặp động `skill_improvement.enabled` |
| **NullClaw** | Trung tâm điều phối Cron, tích hợp JIRA, quy trình kiểm toán bảo mật | Tự động hóa quy trình R&D doanh nghiệp | Không rõ ràng về ngăn xếp kỹ thuật, tư thế bảo trì phòng ngừa |
| **Moltis/ZeptoClaw** | — | — | Mức độ hoạt động quá thấp, định vị không rõ ràng |

---

## 6. Phân tầng nhiệt độ cộng đồng và mức độ trưởng thành

| Cấp độ | Dự án | Đặc điểm | Chỉ số chính |
|:---|:---|:---|:---|
| **🔥 Giai đoạn lặp lại nhanh** | OpenClaw, CoPaw, IronClaw, ZeroClaw | 30-500 Issues/PRs hàng ngày, tái cấu trúc cấp kiến trúc song song, vấn đề sản xuất và mở rộng chức năng song hành | 29-477 PR chờ hợp nhất, tồn tại nút thắt băng thông xem xét; Phản hồi P0 Bug <24h nhưng rủi ro hồi quy cao |
| **✅ Giai đoạn củng cố chất lượng** | NanoBot, PicoClaw, NanoClaw, LobsterAI | Các chức năng cột mốc được triển khai (khắc phục thảm họa/trò chuyện nhóm/ngăn xếp tiếp thị/dọn dẹp tồn đọng), quản lý chủ động phạm vi thử nghiệm và nợ kỹ thuật | Tỷ lệ hợp nhất 50-96%, dọn dẹp PR lịch sử quyết đoán; Mở rộng các tình huống biên (di động/giọng nói/quốc tế hóa) |
| **⚠️ Giai đoạn bảo trì đình trệ** | Hermes Agent, NullClaw, Moltis, ZeptoClaw | Động lực cộng đồng giảm mạnh, hoặc sửa chữa kiểu cứu hỏa (hồi quy v0.13.0), hoặc kiểm toán bảo mật nội bộ hóa, hoặc hoạt động gần như bằng không | Tự xây dựng/đóng Issues, PR tồn đọng 37 ngày, không đóng góp bên ngoài; Có rủi ro mất người đóng góp |

**Tín hiệu bước nhảy vọt về sự trưởng thành**: NanoBot hôm nay đã hoàn thành "ba trụ cột độ tin cậy" (khắc phục thảm họa mô hình, sự mạnh mẽ của MCP, phạm vi thử nghiệm), đánh dấu sự chuyển đổi từ giai đoạn "xác minh chức năng" v0.1.x sang giai đoạn "sẵn sàng sản xuất"; LobsterAI xử lý hàng loạt 50 ngày PR tồn đọng, giải phóng gia tốc lặp lại sau khi thanh toán nợ kỹ thuật.

---

## 7. Các tín hiệu xu hướng đáng chú ý

| Xu hướng | Chuỗi bằng chứng | Giá trị tham khảo cho nhà phát triển |
|:---|:---|:---|
| **"Nguyên bản mô hình suy luận" trở thành giả định cơ sở hạ tầng** | #68596 OpenClaw (👍7 yêu cầu cấu hình watchdog), #3760 NanoBot (Lỗi 400 DeepSeek V4), #2306 PicoClaw (sửa lỗi thinking_level), #6643 ZeroClaw (rò rỉ suy nghĩ GLM-5.1) | Khi thiết kế thời gian chờ/thử lại/giao thức truyền trực tuyến, **mô hình hóa mặc định với thời gian suy nghĩ 120 giây+**; Xử lý trường `reasoning_content` cần được đưa vào danh sách kiểm tra tiêu chuẩn thích ứng nhà cung cấp |
| **Bảo mật cấp doanh nghiệp từ "chức năng" trở thành "tiêu chuẩn gia nhập"** | #6613 ZeroClaw (cường độ mã ghép nối), #6528 (tin cậy CA hệ thống); #3768 NanoClaw (danh sách trắng dmPolicy), #3770/#3771 (quy tắc truy cập cấp trò chuyện Telegram); #4244 CoPaw (chặn im lặng shell) | Triển khai tự lưu trữ cần đặt trước **nguyên tắc quyền tối thiểu**: chặn mặc định lệnh đa dòng, mã ghép nối alphanumeric bắt buộc, ACL cấp trò chuyện kênh IM; Cần có thể cấu hình sự cân bằng giữa chính sách bảo mật và tính khả dụng |
| **"Thất bại ma" gây hại hơn "lỗi rõ ràng"** | Ngắt kết nối im lặng Slack của OpenClaw, "No errors, nothing interesting" của NanoBot, lỗi quyền tệp im lặng của NanoClaw, hành vi không nhất quán của cấu hình CoPaw | Khi thiết kế kênh/công cụ/hệ thống cấu hình, **bắt buộc phải có nhật ký cấp ERROR + cảnh báo trên đầu người dùng**; Tránh hành vi ẩn "cấu hình hợp lệ nhưng thời gian chạy giảm về mặc định" |
| **Khả năng quan sát từ "tô điểm thêm" thành "bắt buộc sản xuất"** | #2456 NanoClaw (LangFuse), #6009/#6641/#6642 ZeroClaw (OTel toàn bộ đường dẫn), đề xuất CLI `doctor` của NanoBot #3769 | Khi bắt đầu dự án mới, nên **nhúng các điểm đánh dấu tracing** (thời gian gọi công cụ, số token nén ngữ cảnh, phân vị độ trễ nhà cung cấp); Chế độ `doctor` nguồn mở trở thành tiêu chuẩn mong đợi của cộng đồng |
| **Kiến trúc kỹ năng/plugin từ "tải tĩnh" sang "tiến hóa động"** | #6594 ZeroClaw (phân nhánh xem xét Hermes), bên ngoài hóa plugin bộ nhớ Hermes Agent #25302, thành phần hóa WASM IronClaw #3572, phiên sang kỹ năng `/make-skill` CoPaw #4282 | Thiết kế hệ thống plugin cần dự phòng **giao diện tự cải thiện**: xem xét sau lần lặp, trích xuất tóm tắt tự động, hoàn nguyên phiên bản; WASM làm điểm cân bằng giữa bảo mật và hiệu suất đáng để nghiên cứu trước |
| **"Nút thắt điểm" đóng góp cộng đồng** | PR chờ hợp nhất của `aqilaziz` là 15/29, đóng góp dày đặc của `Alix-007` PicoClaw, 6 Issues trong một ngày của Hermes Agent | Người bảo trì cần thiết lập **cơ chế luân phiên xem xét**, tránh tình trạng người đóng góp cốt lõi bị quá tải |

---

## Báo cáo chi tiết dự án cùng phân khúc

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Nhật báo động thái dự án NanoBot | 2026-05-14

## 1. Tổng quan hôm nay

NanoBot hôm nay thể hiện **trạng thái bảo trì tích cực**: xử lý 14 Issues và 8 PRs (hợp nhất/đóng) trong 24 giờ, đồng thời vẫn còn 5 Issues đang chờ xử lý và 9 PRs chờ hợp nhất. Nhu cầu cốt lõi của cộng đồng tập trung vào ba hướng chính: **chuyển đổi khắc phục thảm họa mô hình** (đã được triển khai), **lưu trữ ngữ cảnh phiên** (đang sửa chữa) và **kiểm soát bảo mật đa kênh** (đề xuất mới). Đáng chú ý, hôm nay có thêm 2 PR liên quan đến bảo mật Telegram và 1 đề xuất công cụ chẩn đoán, cho thấy dự án đang chuyển đổi từ "mở rộng chức năng" sang "độ tin cậy cấp doanh nghiệp".

---

## 2. Phát hành phiên bản

**Không có phiên bản mới**

---

## 3. Tiến độ dự án

### PR quan trọng đã hợp nhất/đóng ✅

| PR | Tác giả | Đóng góp cốt lõi | Giá trị thúc đẩy dự án |
|:---|:---|:---|:---|
| [#3756](https://github.com/HKUDS/nanobot/pull/3756) `feat(runner): model failover with fallback_models` | chengyongru | **Cascading khắc phục thảm họa mô hình**: `fallback_models` hỗ trợ chuyển đổi tự động giữa các nhà cung cấp, dự phòng theo thứ tự khi mô hình chính thất bại | 🔴 **Cột mốc**: Giải quyết điểm yếu lâu dài #3376, đánh dấu NanoBot chuyển từ "mô hình đơn điểm" sang "kiến trúc đa hoạt động" |
| [#3740](https://github.com/HKUDS/nanobot/pull/3740) `fix(mcp): probe HTTP port before connecting` | chengyongru | Thăm dò cổng TCP trước khi kết nối MCP, ngăn chặn sự cố vòng lặp sự kiện | Sửa lỗi độ ổn định khởi động môi trường sản xuất, liên quan đến việc đóng #3739 |
| [#3655](https://github.com/HKUDS/nanobot/pull/3655) `feat(reason): display model reasoning content during streaming` | Flinn-X | Hiển thị quá trình suy luận mô hình trong quá trình truyền trực tuyến (`show_reasoning` được cấu hình) | Đáp ứng yêu cầu #1860, tăng cường tính minh bạch tương tác cho các mô hình suy luận như DeepSeek/R1 |
| [#1923](https://github.com/HKUDS/nanobot/pull/1923) `feat: add exec output truncation config` | ethanclaw | Cấu hình cắt bớt đầu ra công cụ Exec ( `max_output` + `truncate_mode: head/tail/both`) | Đóng #1871, giải quyết điểm yếu "lựa chọn thông tin đầu/đuôi" trong các tình huống đầu ra dài |
| [#3766](https://github.com/HKUDS/nanobot/pull/3766) `test(agent): expand coverage and refactor test structure` | chengyongru | Thêm 121 bài kiểm thử, tách tệp bài kiểm thử lớn 3313 dòng thành 9 mô-đun | Dọn dẹp nợ kỹ thuật, đặt nền móng chất lượng cho việc lặp lại nhanh chóng trong tương lai |

**Đánh giá cột mốc tổng thể**: Các PR được hợp nhất hôm nay đánh dấu NanoBot hoàn thành xây dựng các **"Trụ cột độ tin cậy"** (khắc phục thảm họa mô hình, sự mạnh mẽ của MCP, phạm vi thử nghiệm), mức độ trưởng thành của dự án đã tiến đáng kể từ giai đoạn "xác minh chức năng" v0.1.x sang "sẵn sàng sản xuất".

---

## 4. Điểm nóng cộng đồng

### 🔥 Các vấn đề được thảo luận sôi nổi nhất

| Thứ hạng | Issue/PR | Dữ liệu tương tác | Phân tích yêu cầu cốt lõi |
|:---|:---|:---|:---|
| **#1** | [#235](https://github.com/HKUDS/nanobot/issues/235) `"I've completed processing but have no response to give."` | 👍 9, 💬 15, Đã đóng | **Lỗi phản hồi ma cổ điển**: Mô hình kết hợp Telegram + DeepSeek trả về nội dung trống, không có cảnh báo lỗi ở phía người dùng. Tương tác cao phản ánh phạm vi ảnh hưởng rộng của vấn đề, giải pháp cuối cùng là cơ chế chuyển đổi/thử lại mô hình |
| **#2** | [#3376](https://github.com/HKUDS/nanobot/issues/3376) `[enhancement] Hỗ trợ chuyển đổi mô hình tự động khi lỗi` | 👍 1, 💬 13, Đã đóng | **Nhu cầu sản xuất cốt lõi** : Người dùng so sánh rõ ràng giữa "thử lại trong một nhà cung cấp" và "chuyển đổi giữa các nhà cung cấp", thúc đẩy #3756 được triển khai. Thảo luận về các thực tiễn tốt nhất cấu hình đa nhà cung cấp xuất hiện trong phần bình luận |
| **#3** | [#3689](https://github.com/HKUDS/nanobot/issues/3689) `[enhancement] Phiên bị gián đoạn làm mất bản ghi trò chuyện vòng trước` | 👍 0, 💬 5, **Vẫn mở** | **Phân mảnh trải nghiệm tương tác**: Sau khi Agent gián đoạn tác vụ vòng lặp, nó không thể truy ngược ngữ cảnh, buộc phải "bắt đầu lại". Yêu cầu đã nâng cấp từ "ghi nhớ cuộc trò chuyện" lên "ghi nhớ các bước thực thi", liên quan đến việc sửa lỗi trong PR #3765 |

**Tín hiệu phía sau**: Cộng đồng đang chuyển từ "có thể sử dụng" sang "sử dụng tốt" — **trải nghiệm các tình huống biên** như phản hồi trống, mất ngữ cảnh, khôi phục tác vụ bị gián đoạn đang trở thành tâm điểm chú ý, phản ánh tải người dùng thực tế đang tăng lên.

---

## 5. Lỗi và Độ ổn định

| Mức độ nghiêm trọng | Issue | Trạng thái | Mô tả | PR Sửa lỗi |
|:---|:---|:---|:---|:---|
| 🔴 **Cao** | [#3760](https://github.com/HKUDS/nanobot/issues/3760) `deepseek-v4-flash + post3: lỗi 400 do reasoning_content` | **Mở** | Trường `reasoning_content` của DeepSeek V4 kích hoạt lỗi xác thực API, ảnh hưởng đến các tình huống cốt lõi của mô hình suy luận | ❌ Hiện chưa có; cần thích ứng với thay đổi giao thức API DeepSeek |
| 🟡 **Trung bình** | [#3726](https://github.com/HKUDS/nanobot/issues/3726) `[bug] Lỗi nén ngữ cảnh. Dẫn đến hệ thống không chạy` | Đã đóng | `no safe boundary` trong quá trình nén token dẫn đến sự cố vòng lặp | ✅ Đang sửa lỗi #3765 (logic thúc đẩy con trỏ của `AutoCompact._archive()`) |
| 🟡 **Trung bình** | [#3739](https://github.com/HKUDS/nanobot/issues/3739) `[bug] Lỗi khi khởi động nanobot agent khi dịch vụ mcp chưa khởi động` | Đã đóng | Vòng lặp sự kiện không bắt được ngoại lệ khi MCP chưa sẵn sàng | ✅ #3740 |
| 🟢 **Thấp** | [#1640](https://github.com/HKUDS/nanobot/issues/1640) `session stuck even after manual memory file deletion` | Đã đóng | Lưu trữ trạng thái phiên mô hình đám mây GLM-4.7 bất thường, xóa tệp thủ công không thể đặt lại | Đã đóng, phương án chờ xác nhận |
| 🟢 **Thấp** | [#1777](https://github.com/HKUDS/nanobot/issues/1777) `Giao diện yêu cầu truy cập xxx.onrender.com gặp lỗi 403` | Đã đóng | Đoạn mã Python trong gợi ý hệ thống kích hoạt chặn WAF của Render | Đã đóng, tối ưu hóa gợi ý |

**Rủi ro chính**: [#3760](https://github.com/HKUDS/nanobot/issues/3760) là **lỗi nghiêm trọng duy nhất chưa được sửa chữa hôm nay**, sự thay đổi giao thức `reasoning_content` của dòng mô hình DeepSeek V4 có thể khiến chức năng suy luận hoàn toàn không khả dụng, cần theo dõi khẩn cấp.

---

## 6. Yêu cầu chức năng và Tín hiệu lộ trình

| Đề xuất | Loại | Trạng thái | Khả năng tích hợp | Cơ sở đánh giá |
|:---|:---|:---|:---|:---|
| [#3769](https://github.com/HKUDS/nanobot/issues/3769) `nanobot doctor` — CLI chẩn đoán cấu hình và sức khỏe kênh | Công cụ/Khả năng quan sát | **Mới mở** | ⭐⭐⭐⭐⭐ **Cực cao** | Đối trọng trực tiếp với chế độ chẩn đoán `openclaw doctor` trưởng thành, điểm đau gỡ lỗi thường xuyên của cộng đồng, chi phí thực hiện thấp |
| [#3768](https://github.com/HKUDS/nanobot/issues/3768) `dmPolicy` — Ghép nối/danh sách trắng người gửi không xác định | Bảo mật/Kiểm soát truy cập | **Mới mở** | ⭐⭐⭐⭐⭐ **Cực cao** | Cùng ngày đã có 2 PR bảo mật Telegram ( #3770 quy tắc truy cập cấp trò chuyện, #3771 kiểm tra sức khỏe), chủ đề bảo mật trở thành tâm điểm hôm nay |
| [#3746](https://github.com/HKUDS/nanobot/issues/3746) Tối ưu hóa chunk tải trước markdown WebUI (>1MB) | Hiệu suất | **Mở** | ⭐⭐⭐⭐☆ Cao | Dữ liệu hiệu suất rõ ràng, tối ưu hóa giao diện người dùng độc lập mạnh mẽ |
| [#3742](https://github.com/HKUDS/nanobot/issues/3742) Lệnh `/model` chuyển đổi mô hình động | Cải tiến tương tác | Đã đóng | — | Chức năng đã được bao phủ bởi #3756 `fallback_models`, người bảo trì hướng dẫn sử dụng phương pháp cấu hình |
| [#3689](https://github.com/HKUDS/nanobot/issues/3689) Bảo lưu ngữ cảnh khi gián đoạn phiên | Trải nghiệm | Mở | ⭐⭐⭐⭐⭐ **Cực cao** | PR #3765 đã được gửi, dự kiến hợp nhất sớm |

**Tín hiệu lộ trình**: Bảo mật (danh sách trắng DM + ủy quyền cấp trò chuyện) và khả năng quan sát (chẩn đoán doctor) tạo thành chủ đề **"tiêu chuẩn gia nhập doanh nghiệp"**, dự báo dự án có thể mở rộng sang các kịch bản triển khai cấp nhóm/tổ chức.

---

## 7. Tóm tắt phản hồi người dùng

### 😤 Đau khổ cốt lõi

| Kịch bản | Trích dẫn gốc | Tần suất |
|:---|:---|:---|
| **Lỗi mô hình đơn điểm** | "Ngay cả khi nhiều nhà cung cấp đã được cấu hình trước, tác vụ vẫn bị gián đoạn do lỗi đơn điểm" | Tần suất cao |
| **Phản hồi ma** | "No errors, nothing interesting being outputted" — Thất bại im lặng | Tần suất cao |
| **Phân mảnh ngữ cảnh** | "Khi gián đoạn, nanobot nên ghi nhớ cuộc trò chuyện, thậm chí ghi nhớ nó đã thực hiện đến bước nào" | Tần suất trung bình |
| **"Lộ thiên" bảo mật** | "Anyone who knows (or guesses) your bot's handle can consume your API quota" | Mới |

### 😊 Điểm hài lòng

- **Tính linh hoạt của cấu hình**: Cấu hình cắt bớt đầu ra exec (#1871/#1923) đã được phản hồi nhanh chóng, người dùng đánh giá cao "chế độ đuôi hữu ích hơn"
- **Tốc độ phản hồi cộng đồng**: #3376 đến #3756 mất 22 ngày để hợp nhất, yêu cầu khắc phục thảm họa được ưu tiên xử lý

### 🎯 Kịch bản sử dụng điển hình

- **Người dùng ở Trung Quốc đại lục**: Codex/GPT-5.5 không ổn định mạng, cần chuyển đổi `/model` hoặc dự phòng tự động ( #3742, #3756)
- **Kết hợp cục bộ + đám mây**: Điểm cuối cục bộ Ollama/vLLM + mô hình đám mây, kiểm soát đồng thời nhạy cảm (#3693)
- **Triển khai đa IM**: Telegram/WhatsApp/QQ song song, yêu cầu nhất quán UX trên các kênh khác nhau (#3761 chỉ báo trạng thái gõ của WhatsApp)

---

## 8. Tồn đọng chưa xử lý

| Loại | Mục | Thời gian tạo | Cập nhật cuối | Rủi ro |
|:---|:---|:---|:---|:---|
| **PR** | [#3693](https://github.com/HKUDS/nanobot/pull/3693) `fix(agent): centralize LLM concurrency gate` | 2026-05-08 | 2026-05-13 | ⚠️ **6 ngày chờ xem xét**: Sửa lỗi kiểm soát đồng thời LLM cục bộ, liên quan đến lỗi hết giờ người dùng Ollama/vLLM, ảnh hưởng đến trải nghiệm cốt lõi |
| **PR** | [#3460](https://github.com/HKUDS/nanobot/pull/3460) `feat(long-task): add LongTaskTool` | 2026-04-26 | 2026-05-13 | ⚠️ **18 ngày chờ xem xét**: Phân rã tác vụ Agent đa bước, liên quan chặt chẽ đến vấn đề mất ngữ cảnh hôm nay (#3689), có thể phụ thuộc lẫn nhau |
| **Issue** | [#3760](https://github.com/HKUDS/nanobot/issues/3760) Lỗi 400 DeepSeek V4 | 2026-05-12 | 2026-05-13 | 🔴 **Khẩn cấp**: Chức năng mô hình suy luận cốt lõi bị hỏng, không có PR sửa lỗi |
| **PR** | [#3643](https://github.com/HKUDS/nanobot/pull/3643) `feat(provider): add Qiniu provider` | 2026-05-06 | 2026-05-13 | 8 ngày chờ xem xét, mở rộng nhà cung cấp đám mây trong nước, liên quan đến hệ sinh thái Qiniu Cloud |

**Khuyến nghị hành động cho người bảo trì:**
1. **Ưu tiên**: Xem xét việc sửa lỗi kiểm soát đồng thời #3693, giảm nhẹ điểm đau của người dùng LLM cục bộ
2. **Khẩn cấp**: Phân bổ nhà phát triển cho #3760 để thích ứng với giao thức DeepSeek V4
3. **Phối hợp**: Đánh giá xem giải pháp lưu trữ ngữ cảnh của #3460 và #3765 có xung đột không, tránh xây dựng lại

---

*Thời gian tạo báo cáo nhật ký: 2026-05-14 | Nguồn dữ liệu: Hoạt động công khai GitHub HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Nhật báo động thái dự án Hermes Agent | 2026-05-14

---

## 1. Tổng quan hôm nay

Hermes Agent hôm nay thể hiện **mức độ hoạt động cao, áp lực cao**: Lượng Issues 50 + PRs 50 mỗi ngày cho thấy sự tham gia dày đặc của cộng đồng, nhưng **tỷ lệ mở/đóng 47:3** và **tỷ lệ chờ hợp nhất/đã xử lý 22:28** cho thấy hàng đợi bảo trì đang chịu áp lực. Cập nhật v0.13.0 đã gây ra **hồi quy hệ thống** — mất dữ liệu cron, xóa cấu hình mô hình, hết hạn xác thực trở thành các điểm đau tập trung, người dùng cộng đồng `fwends` đã gửi 6 Issue liên quan trong một ngày. Đồng thời, những người đóng góp cốt lõi đã nhanh chóng phản hồi, với các PR sửa lỗi quan trọng đã được gửi hôm nay để giải quyết vấn đề mất dữ liệu nghiêm trọng nhất. Không có phiên bản mới nào được phát hành.

---

## 2. Phát hành phiên bản

**Không có phiên bản mới**

> Lưu ý: Ảnh hưởng sau v0.13.0 (2026-05-07) vẫn tiếp tục lan rộng, trở thành nguyên nhân gốc rễ của hầu hết các báo cáo lỗi hôm nay.

---

## 3. Tiến độ dự án

### PR quan trọng đã hợp nhất/đóng

| PR | Tác giả | Mô tả | Liên kết |
|:---|:---|:---|:---|
| **#25297** `fix(profile): exclude cron from distribution payload on update` | shanewas | **Sửa lỗi quan trọng**: Giải quyết lỗi nghiêm trọng là nút "Update" trên dashboard **xóa tất cả tác vụ cron** trong bản cập nhật v0.13.0 (#25281) | [PR #25297](https://github.com/NousResearch/hermes-agent/pull/25297) |
| **#25298** `fix(cli): preserve systemd unit paths when service user differs from CLI user` | zccyman | Sửa lỗi `hermes update` ghi đè sai đường dẫn dịch vụ systemd, giải quyết vấn đề phá vỡ cấu hình trong các kịch bản triển khai tài khoản dịch vụ (#25282) | [PR #25298](https://github.com/NousResearch/hermes-agent/pull/25298) |
| **#25299** `feat(skills): unified EVM multi-chain skill` | teknium1 | Hợp nhất kỹ năng EVM thống nhất cho 8 chuỗi và 14 lệnh, thay thế cho #25291/#2010/cơ sở trước đó | [PR #25299](https://github.com/NousResearch/hermes-agent/pull/25299) |
| **#25302** `docs: close in-tree memory plugins to new PRs` | teknium1 | **Quyết định kiến trúc**: Đóng PR mới cho 9 plugin bộ nhớ tích hợp, buộc phải bên ngoài hóa plugin, giảm gánh nặng bảo trì cốt lõi | [PR #25302](https://github.com/NousResearch/hermes-agent/pull/25302) |
| **#25301** `fix(deepseek): subclass ProviderProfile so reasoning_effort + thinking reach the API` | Unveiling9559 | Sửa lỗi truyền tham số suy luận cho plugin DeepSeek | [PR #25301](https://github.com/NousResearch/hermes-agent/pull/25301) |
| **#25303** `fix(update): rebase local commits instead of git reset --hard origin` | Unveiling9559 | Thay đổi `git reset --hard` phá vỡ thành rebase, bảo vệ các cam kết cục bộ của người dùng | [PR #25303](https://github.com/NousResearch/hermes-agent/pull/25303) |
| **#24182** `feat(codex-runtime): optional codex app-server runtime` | teknium1 | Cung cấp thời gian chạy app-server codex tùy chọn cho mô hình OpenAI/Codex, tương đương với openclaw#78899 | [PR #24182](https://github.com/NousResearch/hermes-agent/pull/24182) |

**Đánh giá tiến độ tổng thể**: Việc hợp nhất hôm nay chủ yếu là **"sửa chữa kiểu cứu hỏa"**, tập trung giải quyết các vấn đề bảo mật nâng cấp v0.13.0 và tính bền vững của dữ liệu. Về mặt kiến trúc, việc đưa plugin bộ nhớ ra bên ngoài và thống nhất kỹ năng EVM là những quyết định vì sức khỏe lâu dài, nhưng việc sửa chữa lòng tin của người dùng là ưu tiên hàng đầu trong ngắn hạn.

---

## 4. Điểm nóng cộng đồng

### Issues hoạt động sôi nổi nhất

| Thứ hạng | Issue | Bình luận | 👍 | Yêu cầu cốt lõi | Liên kết |
|:---|:---|:---|:---|:---|:---|
| 1 | **#18080** Cải thiện Chủ đề cho Dashboard — hiện tại khó đọc | 6 | 15 | **Khủng hoảng khả năng truy cập**: Chủ đề hiện tại sử dụng phông chữ serif có độ tương phản thấp, ảnh hưởng nghiêm trọng đến khả năng đọc; người dùng yêu cầu hệ thống thiết kế tuân thủ WCAG | [Issue #18080](https://github.com/NousResearch/hermes-agent/issues/18080) |
| 2 | **#503** Tương tác phong phú gốc nền tảng | 4 | 0 | **Nâng cấp mô hình tương tác**: Yêu cầu chuyển từ văn bản thuần túy sang bàn phím nội tuyến gốc của Telegram/Discord/Slack, UI cấu trúc kế hoạch thực thi | [Issue #503](https://github.com/NousResearch/hermes-agent/issues/503) |
| 3 | **#25290** Cron jobs phân tán giữa các thư mục profile | 2 | 0 | **Hỗn loạn cấu trúc dữ liệu**: Trong hệ thống đa profile, lưu trữ cron bị phân mảnh, gateway và CLI không nhìn thấy nhau | [Issue #25290](https://github.com/NousResearch/hermes-agent/issues/25290) |
| 4 | **#25281** Nút Update xóa tất cả cron jobs đã lên lịch | 2 | 0 | **Bảo mật dữ liệu**: Hồi quy chết người của v0.13.0, PR #25297 đã sửa | [Issue #25281](https://github.com/NousResearch/hermes-agent/issues/25281) |

**Phân tích yêu cầu**: Cộng đồng đang chuyển từ "sự phong phú về chức năng" sang "**chất lượng và độ tin cậy**". 15 👍 của #18080 cho thấy nợ trải nghiệm người dùng đã tích lũy từ lâu; #503 (tạo ngày 2026-03-06) phản ánh nợ kiến trúc cho việc thích ứng nền tảng. Chiến lược cập nhật mạnh mẽ của v0.13.0 đã bộc lộ vấn đề sâu sắc về **thiếu cơ chế hoàn nguyên nâng cấp và thử nghiệm di chuyển cấu hình**.

---

## 5. Lỗi và Độ ổn định

### 🔴 P1 (Nghiêm trọng) — Đã ảnh hưởng đến sản xuất

| Issue | Mô tả | Nguyên nhân gốc | PR Sửa lỗi | Liên kết |
|:---|:---|:---|:---|:---|
| **#25281** | Nút "Update" Dashboard xóa tất cả tác vụ cron | Thư mục `cron/` bị ghi đè bởi thư mục trống khi cập nhật profile | ✅ **#25297** | [Issue #25281](https://github.com/NousResearch/hermes-agent/issues/25281) |
| **#25295** | Tác vụ cron CLI tạo ra không chạy im lặng | Phân mảnh profile dẫn đến gateway đọc sai đường dẫn | ⏳ Đang xử lý | [Issue #25295](https://github.com/NousResearch/hermes-agent/issues/25295) |
| **#25272** | Tất cả cấu hình mô hình tùy chỉnh biến mất sau khi cập nhật v0.13.0 | Quy trình nâng cấp không di chuyển cấu hình tùy chỉnh của người dùng | ⏳ Đang xử lý | [Issue #25272](https://github.com/NousResearch/hermes-agent/issues/25272) |
| **#25205** | `_restore_primary_runtime` sử dụng api_key cũ đã bị thu hồi | Vòng quay kho chứng từ chưa cập nhật ảnh chụp nhanh | ⏳ Đang xử lý | [Issue #25205](https://github.com/NousResearch/hermes-agent/issues/25205) |
| **#21549** | Hai phiên bản launchd kích hoạt vòng lặp khởi động lại vô hạn | Cạnh tranh tệp PID + mã thoát 1 bị `KeepAlive` hiểu sai | ⏳ Đang xử lý | [Issue #21549](https://github.com/NousResearch/hermes-agent/issues/21549) |

### 🟡 P2 (Ưu tiên cao)

| Issue | Mô tả | PR Sửa lỗi | Liên kết |
|:---|:---|:---|:---|
| **#25290** | Phân mảnh tác vụ Cron trên thư mục profile | ⏳ Quyết định kiến trúc | [Issue #25290](https://github.com/NousResearch/hermes-agent/issues/25290) |
| **#25275** | API Dashboard