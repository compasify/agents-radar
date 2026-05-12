# OpenClaw Sinh nhật ký hàng ngày 2026-05-12

> Số vấn đề: 500 | Số PR: 500 | Dự án được bao phủ: 13 | Thời gian tạo: 2026-05-12 00:22 UTC

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

# OpenClaw Nhật ký hàng ngày về dự án | 2026-05-12

---

## 1. Tổng quan nhanh trong ngày

OpenClaw hôm nay duy trì **mức độ hoạt động cực cao**, với 500 lượt cập nhật Issues và 500 lượt cập nhật PR trong 24 giờ, cho thấy mật độ tham gia cộng đồng đáng kể. Nhịp độ lặp lại phiên bản chặt chẽ, liên tục phát hành 3 phiên bản beta tập trung vào việc phát hiện plugin CI và nhận dạng môi trường thời gian chạy. **Tín hiệu cốt lõi**: cơ sở hạ tầng QA trở thành tâm điểm trong ngày — người bảo trì `100yenadmin` đã tập trung đóng 4 Issues liên quan đến harness/mock, làm rõ những sai sót về lỗi thời gian chạy Codex trước đó đã báo cáo sai; đồng thời, việc sửa lỗi ổn định kênh Discord, Telegram và các kênh khác đang bước vào giai đoạn giao hàng dày đặc, cho thấy dự án đang chuyển từ mở rộng chức năng sang **giai đoạn tập trung giải quyết độ tin cậy**. 434 PR đang chờ hợp nhất cho thấy hàng đợi đóng góp dồi dào, nhưng băng thông xem xét có thể là nút thắt cổ chai.

---

## 2. Phát hành phiên bản

### v2026.5.10-beta.5 / beta.4 / beta.3
**Ngày phát hành**: 2026-05-10 đến 2026-05-11

| Phiên bản | Thay đổi cốt lõi | Đánh giá tác động |
|:---|:---|:---|
| **beta.5** | CI: Thêm tạo tác `plugin-inspector-advisory` không chặn vào Plugin Prerelease, nắm bắt phân loại tương thích của plugin đã đóng gói mà không chặn cổng kiểm soát phát hành | 🔧 Chỉ quy trình CI, không thay đổi nào người dùng nhìn thấy |
| | Runtime/Fly: Phát hiện môi trường container Fly Machines thông qua biến môi trường thời gian chạy, tối ưu hóa việc gắn cổng | 🚀 Trải nghiệm triển khai Fly.io được cải thiện |
| **beta.4** | Như trên (phát hành lại, có thể điều chỉnh quy trình xây dựng) | — |
| **beta.3** | Build: Bật các quy tắc lint Vitest nghiêm ngặt hơn (kiểm tra tập trung/vô hiệu hóa/có điều kiện, hook, matcher, rủi ro của matcher, expectation) | 🔒 Nâng cao tiêu chuẩn chất lượng kiểm thử |
| | Build: Khóa cấu hình mặc định của oxfmt, đảm bảo hành vi định dạng ổn định trong quá trình nâng cấp | 🔒 Trải nghiệm nhà phát triển |
| | TypeScript: Bật kiểm tra trình biên dịch nghiêm ngặt hơn | ⚠️ Có thể làm lộ các vấn đề về kiểu hiện có |

**Lưu ý di chuyển**: Việc nâng cấp chế độ nghiêm ngặt của TypeScript trong beta.3 có thể khiến việc xây dựng plugin tùy chỉnh thất bại, các nhà phát triển plugin nên xác minh trước trong điều kiện `strict: true`.

---

## 3. Tiến độ dự án

### Các Issue quan trọng đã đóng hôm nay (bao gồm xác minh sửa lỗi)

| Issue | Trạng thái | Sửa lỗi cốt lõi | Thúc đẩy dự án |
|:---|:---|:---|:---|
| [#76877](https://github.com/openclaw/openclaw/issues/76877) | ✅ ĐÃ ĐÓNG | Vấn đề hồi quy Agent ngừng phản hồi giữa chừng trong phiên bản 2026.5.2 | **Độ tin cậy của Agent**: Giải quyết vấn đề hồi quy nghiêm trọng về việc Agent bị treo lặng lẽ sau khi gọi công cụ |
| [#52305](https://github.com/openclaw/openclaw/issues/52305) | ✅ ĐÃ ĐÓNG | Báo cáo hoàn thành tác vụ không đồng bộ bị mất do định tuyến sự kiện không theo phiên | **Kiến trúc không đồng bộ**: Sửa lỗi độ tin cậy của thông báo trình chạy tác vụ bên ngoài |
| [#80320](https://github.com/openclaw/openclaw/issues/80320) | ✅ ĐÃ ĐÓNG | QA harness mock Pi provider ID và đối tượng so sánh của bộ dụng cụ fs.read thất bại bị biến dạng | **Cơ sở hạ tầng chất lượng**: Làm rõ không phải lỗi sản phẩm, tiết kiệm tài nguyên chẩn đoán |
| [#80312](https://github.com/openclaw/openclaw/issues/80312) | ✅ ĐÃ ĐÓNG | QA harness fs.read thất bại bộ dụng cụ đối tượng so sánh bị lỗi | **Cơ sở hạ tầng chất lượng**: Như trên |
| [#80236](https://github.com/openclaw/openclaw/issues/80236) | ✅ ĐÃ ĐÓNG | Mock approval followthrough không khai báo vấn đề đọc | **Cơ sở hạ tầng chất lượng**: Như trên |
| [#80321](https://github.com/openclaw/openclaw/issues/80321) | ✅ ĐÃ ĐÓNG | Mục tiêu công cụ trực tiếp của bộ dụng cụ tin nhắn trực tiếp không khớp với hồ sơ mã hóa | **Cơ sở hạ tầng chất lượng**: Như trên |
| [#80434](https://github.com/openclaw/openclaw/issues/80434) | ✅ ĐÃ ĐÓNG | first-hour-20 thời gian chạy parity 3 bằng chứng thời gian thực gốc còn thiếu | **Sự sẵn sàng của Codex**: Xác định các điểm chặn của harness, xác nhận mức độ ưu tiên P1 |
| [#80760](https://github.com/openclaw/openclaw/issues/80760) | ✅ ĐÃ ĐÓNG | Codex context-engine chiếu hạn chế đầu ra LCM thành 24k ký tự | **Tích hợp Codex**: Sửa lỗi hồi quy giao hàng theo ngữ cảnh |
| [#74879](https://github.com/openclaw/openclaw/issues/74879) | ✅ ĐÃ ĐÓNG | Giảm tốc độ giới thiệu phiên bản gần đây | **Trải nghiệm người dùng mới**: Sửa lỗi hồi quy hiệu suất |
| [#58443](https://github.com/openclaw/openclaw/issues/58443) | ✅ ĐÃ ĐÓNG | Cổng lặp lại tin nhắn đến | **Đường ống tin nhắn**: Loại bỏ lũ lụt trả lời trùng lặp |
| [#58890](https://github.com/openclaw/openclaw/issues/58890) | ✅ ĐÃ ĐÓNG | Cập nhật tự động tiến trình con gặp sự cố khi giết cổng cha trong bootout | **Độ ổn định của Mac**: Sửa lỗi gỡ cài đặt vô hạn do phụ thuộc vào đường ống stdout/stderr |
| [#62294](https://github.com/openclaw/openclaw/issues/62294) | ✅ ĐÃ ĐÓNG | Nhận thức về nhịp tim không định kỳ bỏ qua việc thực thi bắt buộc của khoảng thời gian | **Hệ thống lập lịch**: Loại bỏ chạy đột xuất và khoảng lặng |
| [#57296](https://github.com/openclaw/openclaw/issues/57296) | ✅ ĐÃ ĐÓNG | WebChat TTS báo cáo thành công nhưng không có đầu ra âm thanh | **Phương tiện Giao diện Người dùng Web**: Sửa lỗi không nhất quán khi Telegram hoạt động bình thường nhưng WebChat lại thất bại |
| [#79595](https://github.com/openclaw/openclaw/issues/79595) | ✅ ĐÃ ĐÓNG | `google-vertex` authEvidence được phát hiện nhưng không có hồ sơ được ghi | **Xác thực GCP**: Sửa lỗi thất bại do thiếu khóa API thời gian chạy |

**Tiến bộ tổng thể**: Đóng 14 Issues hôm nay, trong đó có 4 cái làm rõ cơ sở hạ tầng QA, 5 cái sửa lỗi ổn định cấp sản phẩm, giúp cải thiện đáng kể độ tin cậy thực thi của Agent, độ ổn định tích hợp nền tảng và sự sẵn sàng di chuyển Codex.

---

## 4. Điểm nóng cộng đồng

### Các Issue được thảo luận nhiều nhất (theo số lượng bình luận)

| Hạng mục | Issue | Bình luận | 👍 | Yêu cầu cốt lõi | Liên kết |
|:---|:---|:---:|:---:|:---|:---|
| 1 | Ngắt kết nối Slack lặng lẽ | 16 | 2 | **Độ tin cậy của tích hợp doanh nghiệp**: Tính bền vững của kết nối trong các tình huống trình diễn môi trường sản xuất | [#72808](https://github.com/openclaw/openclaw/issues/72808) |
| 2 | Agent ngừng phản hồi giữa chừng (Đã đóng) | 14 | 4 | **Tính toàn vẹn của thực thi Agent**: Máy trạng thái bị kẹt sau khi gọi công cụ | [#76877](https://github.com/openclaw/openclaw/issues/76877) |
| 3 | Agent mã hóa không bao giờ hoàn thành (hồi quy) | 12 | 1 | **Quy trình làm việc của nhà phát triển**: Suy giảm khả năng sử dụng các tình huống mã hóa cốt lõi | [#62505](https://github.com/openclaw/openclaw/issues/62505) |
| 4 | Bộ công cụ QA mặc định làm rối loạn các công cụ gốc và động của Codex | 12 | 1 | **Tính chính xác của kiểm thử**: Phương pháp luận đánh giá khả năng tương thích của Codex | [#80319](https://github.com/openclaw/openclaw/issues/80319) |
| 5 | Agent hứa sẽ theo dõi nhưng không bắt đầu hành động | 12 | 2 | **Niềm tin của người dùng**: Lời hứa sai lệch so với việc thực thi thực tế ở hậu trường | [#58450](https://github.com/openclaw/openclaw/issues/58450) |
| 6 | Cổng khởi động quá chậm (hook chặn khởi tạo) | 11 | 0 | **Hiệu quả vận hành**: Thời gian khởi động 4 phút là không thể chấp nhận được | [#61278](https://github.com/openclaw/openclaw/issues/61278) |
| 7 | Mất báo cáo hoàn thành tác vụ không đồng bộ (Đã đóng) | 11 | 0 | **Độ tin cậy của hệ thống tác vụ**: Cơ chế thông báo của trình chạy bên ngoài | [#52305](https://github.com/openclaw/openclaw/issues/52305) |
| 8 | Yêu cầu tính năng SQLite transcription/session seams | 11 | 2 | **Mở rộng hệ sinh thái**: Khả năng quan sát của thời gian chạy ưu tiên cơ sở dữ liệu | [#79902](https://github.com/openclaw/openclaw/issues/79902) |

### Phân tích yêu cầu đằng sau

- **Lo lắng về sự sẵn sàng của doanh nghiệp**: Các vấn đề như ngắt kết nối Slack, cổng khởi động chậm, Agent bị kẹt tập trung vào các tình huống "trình diễn/sản xuất đáng tin cậy", phản ánh áp lực tại điểm tới hạn của người dùng khi chuyển từ thử nghiệm sang triển khai sản xuất.
- **Không chắc chắn về việc di chuyển Codex**: Mức độ hoạt động cao của các Issue liên quan đến QA cho thấy cộng đồng nhạy cảm với sự tương đương chức năng OpenClaw vs Codex, việc người bảo trì chủ động làm rõ các báo cáo sai của harness là một hoạt động quản lý niềm tin tích cực.
- **Giới hạn về quyền tự chủ của Agent**: Vấn đề "lời hứa sai lệch" trong #58450 chạm đến hợp đồng UX cốt lõi của trợ lý AI — người dùng cần đảm bảo thực thi có thể xác minh, thay vì sự an ủi về mặt ngôn ngữ.

---

## 5. Lỗi và Độ ổn định

### Được sắp xếp theo mức độ nghiêm trọng

| Mức độ nghiêm trọng | Issue | Mô tả | Trạng thái | PR sửa lỗi |
|:---|:---|:---|:---|:---|
| 🔴 **P0-Chặn** | [#76562](https://github.com/openclaw/openclaw/issues/76562) | CPU 100%, độ trễ RPC mặt phẳng điều khiển cực cao, vòng lặp không ổn định sau khi nâng cấp lên 2026.4.24/5.2 | MỞ | Không có PR rõ ràng |
| 🔴 **P0-Chặn** | [#63216](https://github.com/openclaw/openclaw/issues/63216) | Đặt lại cứng khóa phiên lặp lại, vòng lặp thử lại chèn lại ngữ cảnh khởi động | MỞ | Không có PR rõ ràng |
| 🟡 **P1-Nghiêm trọng** | [#72808](https://github.com/openclaw/openclaw/issues/72808) | Ngắt kết nối Slack lặng lẽ (tình huống trình diễn sản xuất) | MỞ | Không có PR rõ ràng |
| 🟡 **P1-Nghiêm trọng** | [#62505](https://github.com/openclaw/openclaw/issues/62505) | Agent mã hóa không bao giờ hoàn thành (hồi quy 2026.4.2) | MỞ | Không có PR rõ ràng |
| 🟡 **P1-Nghiêm trọng** | [#58479](https://github.com/openclaw/openclaw/issues/58479) | Hộp thoại phê duyệt thành công nhưng exec không tiêu thụ phê duyệt, tạo ID phê duyệt mới | MỞ | Không có PR rõ ràng |
| 🟡 **P1-Nghiêm trọng** | [#59330](https://github.com/openclaw/openclaw/issues/59330) | Chế độ Raw Control UI bị vô hiệu hóa vĩnh viễn (hồi quy 2026.3.31, 👍 12) | MỞ | Không có PR rõ ràng |
| 🟡 **P1-Nghiêm trọng** | [#45698](https://github.com/openclaw/openclaw/issues/45698) | Control UI bị treo dần sau khi mở (2026.3.12) | MỞ | Không có PR rõ ràng |
| 🟢 **P2-Thông thường** | [#72879](https://github.com/openclaw/openclaw/issues/72879) | `thought_signature` 400 hồi quy (2026.4.25) | MỞ | Không có PR rõ ràng |
| 🟢 **P2-Thông thường** | [#61137](https://github.com/openclaw/openclaw/issues/61137) | Lỗi phân tích cú pháp JSON không liên tục trên Raspberry Pi 5 arm64 | MỞ | Không có PR rõ ràng |
| 🟢 **P2-Thông thường** | [#80437](https://github.com/openclaw/openclaw/issues/80437) | Lệnh gạch chéo gốc Discord triển khai thất bại (hồi quy) | MỞ | Không có PR rõ ràng |
| 🟢 **P2-Thông thường** | [#80777](https://github.com/openclaw/openclaw/issues/80777) | Sau khi nâng cấp, các mục token dạng văn bản thuần túy không được xóa, khóa bí mật còn lại vĩnh viễn | MỞ | Không có PR rõ ràng |

### Hiểu biết quan trọng

- **Cụm hồi quy hiệu suất**: #76562 và #63216 tạo thành một mô hình "hiệu suất/độ ổn định suy giảm sau khi nâng cấp", cho thấy có các vấn đề hệ thống trong khoảng thời gian từ 2026.4.24 đến 2026.5.2.
- **Nợ kỹ thuật UI**: Các Issue liên quan đến Control UI (#59330, #45698) chưa được giải quyết trong thời gian dài, ảnh hưởng đến quản lý cấu hình và trải nghiệm vận hành hàng ngày.
- **Tuân thủ bảo mật**: Vấn đề lưu giữ khóa bí mật trong #80777, mặc dù mới được báo cáo, liên quan đến kiểm toán và tuân thủ, đòi hỏi phản hồi nhanh chóng.

---

## 6. Yêu cầu chức năng và Tín hiệu lộ trình

| Yêu cầu chức năng | Độ phổ biến | Hướng kỹ thuật | Khả năng đưa vào | PR liên quan |
|:---|:---:|:---|:---|:---|
| **Hỗ trợ đa người thuê** (Máy chủ chia sẻ + RBAC) | 👍 0, 💬 6 | Kiến trúc doanh nghiệp | ⭐⭐⭐ Cao | Không, nhưng cấu trúc #60127 hoàn chỉnh |
| **Kiến trúc bộ nhớ đa khe** | 👍 3, 💬 5 | Mở rộng hệ thống plugin | ⭐⭐⭐ Cao | Không, tương ứng trực tiếp với #60572 |
| **Số lần thử lại cho mỗi ứng viên cho việc quay lại mô hình** | 👍 0, 💬 7 | Nhà cung cấp dự phòng/linh hoạt | ⭐⭐⭐ Cao | Không, định nghĩa vấn đề #59413 rõ ràng |
| **SQLite transcription/session seams** | 👍 2, 💬 11 | Khả năng quan sát/hệ sinh thái | ⭐⭐⭐ Cao | Không, #79902 có thiết kế chi tiết |
| **Khởi động cổng không đồng bộ** (hook không chặn) | 👍 0, 💬 11 | Hiệu suất/vận hành | ⭐⭐⭐ Cao | Không, điểm đau #61278 rõ ràng |
| **Tiêm tin nhắn chế độ Steer** | 👍 2, 💬 9 | Tính tương tác thời gian thực | ⭐⭐☆ Trung bình | Không, #48003 có phân tích nguyên nhân gốc rễ |
| **thử lại mỗi ứng viên** quay lại mô hình | 👍 0, 💬 7 | Độ tin cậy | ⭐⭐☆ Trung bình | Không |

### Phán đoán lộ trình

- **Tăng tốc chức năng doanh nghiệp**: Đa người thuê, RBAC, tuân thủ kiểm toán (#80777 thúc đẩy) dự kiến sẽ ưu tiên vào 2026.H2.
- **Làm sâu sắc thêm thời gian chạy ưu tiên cơ sở dữ liệu**: SQLite seams trong #79902 phù hợp với hướng "thời gian chạy ưu tiên cơ sở dữ liệu" gần đây, có thể là phần mở rộng API plugin.
- **Quỹ đạo song song Codex**: Đầu tư dày đặc vào harness QA ám chỉ hỗ trợ gốc Codex là ưu tiên cao ẩn, nhưng khả năng hiển thị cộng đồng thấp.

---

## 7. Tóm tắt phản hồi người dùng

### Điểm đau

| Tình huống | Trích dẫn gốc | Issue |
|:---|:---|:---|
| **Trình diễn thất bại** | "Hôm nay lúc ăn trưa, tôi đã cố gắng trình diễn cho một vài người bạn và nó không bao giờ trả lời" | [#72808](https://github.com/openclaw/openclaw/issues/72808) |
| **Sợ nâng cấp** | "Do có rất nhiều lỗi, tôi không thể chạy bất cứ thứ gì mới hơn phiên bản 2026.04-23" | [#76877](https://github.com/openclaw/openclaw/issues/76877) |
| **Lời hứa sai lệch của Agent** | "Tôi sẽ kiểm tra bộ nhớ dự án và quay lại với một lần theo dõi ngắn" — Thực tế không có hành động nền | [#58450](https://github.com/openclaw/openclaw/issues/58450) |
| **Trôi cấu hình** | "Sau khi nâng cấp từ v4.5 lên v4.8, `openclaw gateway restart` hiển thị lỗi" | [#63101](https://github.com/openclaw/openclaw/issues/63101) |
| **Khởi động không thể chấp nhận được** | "Cổng mất khoảng ~4 phút để khởi động" | [#61278](https://github.com/openclaw/openclaw/issues/61278) |

### Điểm hài lòng

- **Hệ sinh thái công cụ**: PR [#62773](https://github.com/openclaw/openclaw/pull/62773) của công cụ `list` cho thấy cộng đồng đang tích cực lấp đầy khoảng trống trong bộ công cụ fs.
- **Tiêm môi trường**: PR [#73349](https://github.com/openclaw/openclaw/pull/73349) của biến môi trường `OPENCLAW_SESSION_KEY`/`AGENT_ID` giải quyết điểm đau tích hợp tập lệnh.
- **Phạm vi kênh**: Sửa lỗi đa kênh Telegram, Discord, Signal, Zalo, MS Teams được đẩy mạnh song song, thân thiện với triển khai quốc tế.

---

## 8. Tồn đọng cần xử lý

### Các Issue/PR có giá trị cao, không phản hồi trong thời gian dài

| Dự án | Tạo | Cập nhật lần cuối | Số ngày | Rủi ro | Đề xuất hành động |
|:---|:---|:---|:---:|:---|:---|
| [#48003](https://github.com/openclaw/openclaw/issues/48003) Chế độ Steer bị lỗi | 2026-03-16 | 2026-05-11 | **56 ngày** | Chế độ tương tác cốt lõi bị hỏng, có phân tích nguyên nhân gốc rễ | Phân công người sửa lỗi, sử dụng ngữ cảnh `KeyedAsyncQueue` hiện có |
| [#45698](https://github.com/openclaw/openclaw/issues/45698) Control UI dần bị kẹt | 2026-03-14 | 2026-05-11 | **58 ngày** | Chặn vận hành hàng ngày, ảnh hưởng đến tất cả người dùng Web UI | Phân tích hiệu suất mặt trước, có thể liên quan đến rò rỉ bộ nhớ |
| [#57326](https://github.com/openclaw/openclaw/issues/57326) Đường dẫn phụ CLI bỏ qua lập lịch CLI | 2026-03-29 | 2026-05-11 | **44 ngày** | Nợ tính nhất quán kiến trúc | Đánh dấu `good first issue`, làm rõ ranh giới `isCliProvider()` |
| [#58450](https://github.com/openclaw/openclaw/issues/58450) Lời hứa sai lệch của Agent | 2026-03-31 | 2026-05-11 | **42 ngày** | Xói mòn niềm tin UX | Thiết kế giao thức xác minh "lời hứa-thực thi", hoặc hạn chế đầu ra thời hiện tại trong tương lai |
| [#62505](https://github.com/openclaw/openclaw/issues/62505) Agent mã hóa không bao giờ hoàn thành | 2026-04-07 | 2026-05-11 | **35 ngày** | Quy trình làm việc cốt lõi bị lỗi | Liên kết với #76877 để phân tích, có thể có cùng nguyên nhân gốc rễ |
| [#43837](https://github.com/openclaw/openclaw/pull/43837) Mức độ suy nghĩ một lần `/think` | 2026-03-12 | 2026-05-12 | **61 ngày** | Tối ưu hóa trải nghiệm người dùng, thực hiện đầy đủ | Xem xét hợp nhất, rủi ro thấp, giá trị cao |

### Lời nhắc người bảo trì

- **Cần khẩn trương chẩn đoán hồi quy hiệu suất #76562**: CPU 100% + độ trễ RPC là kẻ giết người trong môi trường sản xuất, nên tạo một phòng chiến tranh chuyên dụng.
- **Nợ harness QA**: Việc `100yenadmin` đóng 4 Issue harness hôm nay là một tín hiệu tích cực, nhưng #80434 tiết lộ tỷ lệ "tổng cộng 18 / vượt qua 6 / thất bại 12" cho thấy cổng di chuyển Codex chưa sẵn sàng, cần tiếp tục đầu tư.
- **Băng thông xem xét PR**: 434 đang chờ hợp nhất so với 66 đã hợp nhất/đóng, tỷ lệ khoảng 6.6:1, cần chú ý đến sức khỏe của hàng đợi xem xét.

---

*Thời gian tạo nhật ký hàng ngày: 2026-05-12 | Nguồn dữ liệu: kho lưu trữ GitHub openclaw/openclaw*

---

## So sánh ngang hệ sinh thái

# Phân tích so sánh ngang hệ sinh thái Trợ lý AI Cá nhân / Tác nhân Tự hành Mã nguồn mở | 2026-05-12

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái mã nguồn mở trợ lý AI cá nhân đang trải qua một **sự chuyển đổi tập thể từ cạnh tranh chức năng sang giải quyết độ tin cậy**. Đằng sau thông lượng cao trung bình hàng ngày 50+ Issues/PR của các dự án hàng đầu (OpenClaw, Hermes Agent, ZeroClaw), là sự chuyển dịch lo lắng của cộng đồng từ "demo khả dụng" sang "có thể tin cậy trong sản xuất" — các vấn đề về độ ổn định như ngắt kết nối Slack, Agent bị kẹt, hồi quy nâng cấp chiếm vị trí hàng đầu trong bảng xếp hạng. Đồng thời, **kiến trúc đa người thuê** (NanoBot, IronClaw), **hệ thống bộ nhớ thông minh hóa** (Hermes #509, NanoClaw Hindsight, LobsterAI Dreaming) và **quỹ đạo tương thích Codex** (OpenClaw, PicoClaw, NanoClaw) trở thành ba tuyến chính ẩn, ám chỉ ngành công nghiệp đang dự trữ cơ sở hạ tầng cho "triển khai doanh nghiệp" và "giao diện mô hình thế hệ tiếp theo". Điều đáng chú ý là các dự án do các nhóm Trung Quốc dẫn đầu (NanoBot, LobsterAI, CoPaw) đã hình thành lợi thế khu vực đáng kể trong việc thích ứng hệ sinh thái IM (Feishu, WeChat, POPO, DingTalk).

---

## 2. So sánh hoạt động của từng dự án

| Dự án | Issues (24h) | PRs (24h) | Phát hành phiên bản | Đánh giá sức khỏe | Tín hiệu quan trọng |
|:---|:---:|:---:|:---|:---|:---|
| **OpenClaw** | 500 cập nhật | 500 cập nhật | 3 beta (5.10-5.11) | ⚡ Hoạt động cực cao / ⚠️ Nút thắt cổ chai xem xét | 434 PR chờ hợp nhất, giai đoạn tập trung giải quyết độ tin cậy |
| **Hermes Agent** | 50 (46 hoạt động) | 50 (36 chờ hợp nhất) | Bản dựng kiểm tra (PR #20059) | ⚡ Hoạt động cực cao / 🔴 Hàng đợi chịu áp lực | Tỷ lệ đóng chỉ 8%, áp lực hồi quy v0.10.x |
| **ZeroClaw** | 16 (10 hoạt động) | 48 (33 chờ hợp nhất) | Không có | 🟡 Hoạt động trung-cao / 🟡 Chậm trễ phiên bản | Phân nhánh tích hợp v0.8.0 bị chặn, kiểm soát cổng Matrix |
| **CoPaw** | 49 (28 hoạt động) | 38 (22 chờ hợp nhất) | Không có | 🟡 Hoạt động trung-cao / 🟢 Phản hồi sửa lỗi nhanh | Đột phá về độ ổn định của phiên, người đóng góp lần đầu hoạt động |
| **IronClaw** | 38 (23 hoạt động) | 50 (27 chờ hợp nhất) | v0.28.1 | ⚡ Hoạt động cực cao / ⚠️ Nợ bảo mật | Giai đoạn triển khai kiến trúc Reborn, lỗ hổng quyền P1 |
| **LobsterAI** | 1 hoạt động | 30 hợp nhất/1 chờ hợp nhất | Không có (nhánh phát hành hợp nhất) | 🟢 Phát triển mạnh mẽ / 🔴 Phản hồi cộng đồng yếu | Đặc điểm "chạy nước rút phát hành", 30 PR hợp nhất trong một ngày |
| **NanoBot** | 10 (7 hoạt động) | 21 (15 chờ hợp nhất) | Không có | 🟡 Hoạt động trung-cao / 🟢 Hướng đi rõ ràng | Cột mốc đa người thuê, rủi ro ổn định MCP |
| **NanoClaw** | 4 hoạt động | 18 (8 chờ hợp nhất) | Không có | 🟡 Hoạt động trung bình / 🟡 Rủi ro sản xuất | Tái cấu trúc đường ống tin nhắn v2, lỗi gửi kép |
| **PicoClaw** | 12 (8 đóng) | 28 (19 chờ hợp nhất) | nightly | 🟡 Hoạt động trung-cao / 🟡 Dọn dẹp stale tích cực | Truyền dữ liệu thời gian thực phần cứng, tình huống nhúng |
| **NullClaw** | 1 đóng | 5 (tất cả chờ hợp nhất) | Không có | 🔴 Hoạt động thấp / 🔴 Không hợp nhất kịp thời | #902 đóng mà không sửa, triển khai Zig là tiểu số |
| **ZeptoClaw** | 1 đóng | 1 chờ hợp nhất | Không có | 🔴 Hoạt động thấp / 🟡 Đang tái cấu trúc kiến trúc | Đường ống Giai đoạn 2, không có phản hồi bên ngoài |
| **Moltis** | 4 (3 đóng) | 2 hợp nhất | Không có | 🟡 Hoạt động thấp / 🟢 Kiểm soát tồn đọng tốt | Lỗi lặp lại đường dẫn Proxmox |
| **TinyClaw** | 0 | 0 | Không có | ⚫ Không hoạt động | — |

---

## 3. Định vị của OpenClaw trong hệ sinh thái

| Chiều | Biểu hiện của OpenClaw | So sánh hệ sinh thái |
|:---|:---|:---|
| **Thước đo quy mô** | 500 Issues + 500 PR / 24h, 434 chờ hợp nhất | Cao hơn các dự án khác một bậc, là 10x của Hermes/IronClaw, 20x của ZeroClaw |
| **Lộ trình kỹ thuật** | **"Thời gian chạy hợp nhất toàn diện"**: Vòng lặp Agent tự phát triển, trừu tượng hóa cổng, sổ đăng ký công cụ, harness QA hoàn toàn tự xây dựng | Hermes tập trung vào Sử dụng Máy tính nặng (cua-driver); ZeroClaw đi theo hộp cát bảo mật Rust/WASM; NanoBot tập trung vào plugin nhẹ; IronClaw đặt cược vào kiến trúc truy xuất nguồn gốc sự kiện Reborn |
| **Lợi thế cốt lõi** | ① **Phạm vi kênh toàn diện nhất** (Telegram/Discord/Slack/Signal/Zalo/MS Teams/WebChat); ② **Sự sẵn sàng của Codex cao nhất** (đầu tư harness sớm nhất, khoảng trống bằng chứng thời gian thực gốc #80434 đã được xác định); ③ **Tích hợp doanh nghiệp sâu nhất** (Gmail/Outlook/Feishu/WeChat đều có sửa lỗi chuyên dụng) | So sánh: Hermes mạnh về tương tác TUI và tự động hóa trình duyệt; NanoBot mạnh về tốc độ thích ứng IM tiếng Trung; PicoClaw mạnh về tình huống cạnh phần cứng |
| **Nhược điểm tương đối** | ① **Nút thắt cổ chai băng thông xem xét** (tỷ lệ 434:66 hợp nhất là 6.6:1, ngưỡng lành mạnh ~1.5:1); ② **Hồi quy nâng cấp thường xuyên** (khoảng thời gian 2026.4.24→5.2 có vấn đề hệ thống, "sợ nâng cấp" của người dùng); ③ **Nợ kỹ thuật Control UI** (chưa được giải quyết trong thời gian dài #59330, #45698) | TUI của Hermes cũng dễ bị tổn thương trong xử lý đầu vào; sự chậm trễ của phân nhánh v0.8.0 của ZeroClaw còn lâu hơn |
| **Cấu trúc cộng đồng** | Người bảo trì `100yenadmin` dẫn đầu cơ sở hạ tầng QA, sửa lỗi song song trên các kênh Discord/Telegram | So sánh: `serrrfirat` của IronClaw thúc đẩy Reborn đơn điểm; `hoangtuanm` của NanoBot đột phá đa người thuê |

> **Phán đoán định vị**: OpenClaw là **"ước số chung lớn nhất"** của hệ sinh thái — chức năng toàn diện nhất, cộng đồng lớn nhất, thông lượng Issue cao nhất, nhưng đang buộc phải chuyển từ "mở rộng chức năng" sang "giải quyết độ tin cậy", đồng bộ với nhịp độ tổng thể của hệ sinh thái.

---

## 4. Các hướng kỹ thuật được quan tâm chung

| Hướng kỹ thuật | Dự án liên quan | Yêu cầu cụ thể | Mức độ khẩn cấp |
|:---|:---|:---|:---:|
| **Đa người thuê/cách ly nhiều người dùng** | NanoBot (#3749), IronClaw (#3490), NanoClaw (#3744), CoPaw (ngụ ý) | Không gian trạng thái cấp người dùng kênh WebUI/IM bị cô lập, MEMORY/cấu hình không xung đột | 🔴 Cao |
| **Độ tin cậy thực thi Agent** | OpenClaw (treo #76877, lời hứa sai lệch #58450), Hermes (#62505 không bao giờ hoàn thành), CoPaw (#3843 biến mất), NanoClaw (#2404 gửi kép) | Gọi công cụ không bị kẹt, không trùng lặp, không mất, trạng thái máy có thể xác minh | 🔴 Cao |
| **Thông minh hóa hệ thống bộ nhớ** | Hermes (#509 bộ nhớ nhận thức), NanoClaw (#2420 Hindsight), LobsterAI (#1943 Dreaming), CoPaw (#4220 đồng bộ hóa chỉ mục vector) | Từ lưu trữ văn bản thụ động → mã hóa chủ động / củng cố / thu hồi thích ứng, bền bỉ qua các phiên | 🟡 Trung-cao |
| **Tương thích Codex/mô hình thế hệ tiếp theo** | OpenClaw (harness dày đặc), PicoClaw (#2581 khôi phục luồng), NanoClaw (#1984 điểm cuối tùy chỉnh), CoPaw (#4133 OpenCode thất bại) | Giao thức gọi công cụ, đầu ra luồng, tính nhất quán mô hình giao hàng theo ngữ cảnh | 🟡 Trung-cao |
| **Khả năng phục hồi mạng/khôi phục ngắt kết nối** | OpenClaw (#72808 ngắt kết nối Slack), CoPaw (#4017 xung đột HEARTBEAT), ZeroClaw (#6530 matrix sdk), NanoBot (#3742 chuyển đổi /model) | Môi trường proxy doanh nghiệp, tự động kết nối lại và giảm cấp trong mạng di động | 🟡 Trung bình |
| **Quan sát/theo dõi chi phí** | NullClaw (#909 thống kê hiệu suất), NanoBot (#3731 /insights), Hermes (#7798 nén định tuyến), ZeroClaw (#6074 theo dõi kiểm toán) | I/O Token, tỷ lệ thành công công cụ, minh bạch quyết định định tuyến mô hình | 🟡 Trung bình |
| **Trải nghiệm nhà phát triển Windows** | CoPaw (#4123 nhấp nháy bảng điều khiển, #4103 PowerShell), Hermes (cạnh tranh TUI) | Vượt qua mã hóa cứng /bin/sh, vấn đề mã hóa, nhấp nháy UI | 🟢 Trung-thấp |

---

## 5. Định vị khác biệt

| Dự án | Tập trung chức năng cốt lõi | Hồ sơ người dùng mục tiêu | Khác biệt chính về kiến trúc kỹ thuật |
|:---|:---|:---|:---|
| **OpenClaw** | Cổng toàn kênh + tích hợp doanh nghiệp + sẵn sàng Codex | Các nhóm vừa và lớn cần "một Agent bao quát mọi quy trình làm việc" | TypeScript đơn khối, vòng lặp Agent tự xây dựng, sổ đăng ký plugin |
| **Hermes Agent** | Sử dụng Máy tính nặng (tự động hóa trình duyệt) + TUI tương tác | Nhà phát triển/geek, người dùng kỹ thuật thích kiểm soát thiết bị đầu cuối | Hỗn hợp Rust + TS, tích hợp gốc cua-driver, quản lý gói Nix |
| **ZeroClaw** | Hộp cát bảo mật Rust + ưu tiên quyền riêng tư + định tuyến đa mô hình | Doanh nghiệp nhạy cảm về bảo mật, người dùng ưu tiên tự lưu trữ | Toàn diện Rust, mở rộng WASM, điều khiển cấu hình dựa trên Schema v3 |
| **NanoBot** | Plugin hóa nhẹ + hệ sinh thái IM tiếng Trung + khởi đầu đa người thuê | Doanh nghiệp vừa và nhỏ Trung Quốc, nhu cầu triển khai nhanh | Lõi nhẹ Node.js, bộ điều hợp IM được plugin hóa, xác minh HF Spaces |
| **IronClaw** | Kiến trúc truy xuất nguồn gốc sự kiện Reborn + cứng hóa ranh giới tin cậy | Triển khai cấp doanh nghiệp yêu cầu kiểm toán, cô lập mạnh mẽ | Kiến trúc phân lớp Rust, luồng bất biến ironclaw_turns, sổ đăng ký WASM |
| **NanoClaw** | Đường ống tin nhắn v2 + thị trường kỹ năng + MCP TỰ LÀM | Nhà phát triển kỹ năng, người dùng cần quy trình làm việc Agent tùy chỉnh | Di chuyển tổ chức tập trung lại, vòng lặp poll + hai đường dẫn MCP |
| **PicoClaw** | Thời gian thực cạnh phần cứng + tin nhắn đa phương tiện + nhúng | Người dùng IoT/thiết bị biên, tình huống phần cứng Pico | Triển khai Go, luồng thời gian thực WebSocket, chiến lược không đồng bộ spawn |
| **LobsterAI** | Hệ sinh thái Netease Youdao + xem trước Artifacts + POPO/WeChat | Người dùng doanh nghiệp Trung Quốc, khách hàng hiện tại của sản phẩm Youdao | Đầu cuối máy tính Electron, hai động cơ Cowork/OpenClaw (đã hợp nhất) |
| **CoPaw** | Quy trình làm việc đa Agent + tích hợp sâu DingTalk/Feishu + bảng điều khiển | Kịch bản hợp tác doanh nghiệp Trung Quốc, điều phối Agent đa vai trò | Động cơ định tuyến phiên, kết hợp tệp auto_memory + vector |
| **NullClaw** | Hiệu suất gốc Zig + cốt lõi tối giản | Người dùng kỹ thuật theo đuổi hiệu suất tối đa, sẵn sàng chấp nhận ngôn ngữ tiểu số | Toàn diện Zig, IO không đồng bộ tự xây dựng, phụ thuộc tối giản |
| **ZeptoClaw** | Phần mềm trung gian Agent Rust | Người xây dựng hệ thống cần kiến trúc Agent có thể kết hợp | Rust, mô hình Pipeline, quá trình chuyển đổi LegacyTerminal |
| **Moltis** | Tự động hóa triển khai tự lưu trữ + hộp cát container | Người dùng đám mây riêng/Homelab | Go, triển khai một cú nhấp chuột Proxmox LXC, hộp cát discrawl |

---

## 6. Mức độ phổ biến và sự trưởng thành của cộng đồng

| Cấp độ | Dự án | Đặc điểm | Phán đoán giai đoạn |
|:---|:---|:---|:---|
| **🔥 Giai đoạn lặp lại nhanh** | OpenClaw, Hermes Agent, IronClaw | Hoạt động trung bình 50+ mỗi ngày, tính năng mới và sửa lỗi ổn định song song, hàng đợi PR chịu áp lực, nhịp độ phiên bản chặt chẽ (beta/vá thường xuyên) | Giai đoạn đau khổ khi chuyển từ mở rộng chức năng sang giải quyết độ tin cậy |
| **🚀 Giai đoạn đột phá kiến trúc** | NanoBot, NanoClaw, PicoClaw | Các thay đổi kiến trúc quan trọng được triển khai (đa người thuê, đường ống v2, thời gian thực phần cứng), sự nhiệt tình của cộng đồng cao, nhưng độ ổn định sản xuất cần được xác minh | Cửa sổ tăng cường năng lực sau khi xóa nợ kỹ thuật |
| **🛠️ Giai đoạn củng cố chất lượng** | ZeroClaw, CoPaw, LobsterAI | Phản hồi nhanh chóng các lỗi có giá trị cao (CoPaw #3843 sửa lỗi trong ngày), nhưng phát hành phiên bản chậm trễ (ZeroClaw v0.7.6 cổng kiểm soát), hoặc phản hồi cộng đồng yếu (LobsterAI chỉ 1 Issue hoạt động) | Hoàn thiện sản phẩm hóa, cần bổ sung vòng lặp phản hồi người dùng |
| **🔧 Chế độ bảo trì** | NullClaw, ZeptoClaw, Moltis | Hoạt động thấp, thúc đẩy bởi người bảo trì cốt lõi, đóng góp bên ngoài thưa thớt, đang tái cấu trúc kiến trúc nhưng không có cảm nhận của người dùng | Rủi ro tồn tại: mất người đóng góp, không ai phản hồi Issue |
| **💀 Đình trệ** | TinyClaw | 24h không hoạt động | Sức khỏe dự án đáng ngờ |

---

## 7. Tín hiệu xu hướng đáng chú ý

| Tín hiệu | Bằng chứng nguồn | Giá trị đối với nhà phát triển |
|:---|:---|:---|
| **"Sợ nâng cấp" trở thành điểm đau chung** | OpenClaw "Do có rất nhiều lỗi, tôi không thể chạy bất cứ thứ gì mới hơn 2026.04-23"; CoPaw "v1.1.5 hoàn toàn bình thường, nâng cấp lên thì lỗi" | **Phiên bản ngữ nghĩa + kiểm thử hồi quy tự động** không còn là tùy chọn, mà là cơ sở hạ tầng niềm tin cộng đồng. Đề xuất giới thiệu kênh canary và cơ chế quay lại. |
| **"Lời hứa sai lệch" của Agent ăn mòn hợp đồng UX** | OpenClaw #58450 "Tôi sẽ kiểm tra... và quay lại" không có hành động nền; NanoClaw #2404 gửi kép dẫn đến "nhồi tin nhắn" | **Giao thức thực thi có thể xác minh** đang thay thế tương tác ngôn ngữ tự nhiên — nhà phát triển cần thiết kế khả năng hiển thị máy trạng thái "lời hứa-thực thi", hạn chế đầu ra thời hiện tại hoặc cung cấp UI theo dõi thực thi. |
| **Đa người thuê từ "chức năng" thành "ngưỡng"** | NanoBot #3749 hợp nhất, IronClaw #3490 lỗ hổng quyền P1, CoPaw sửa lỗi cô lập phiên | **Cô lập trạng thái cấp người dùng** là điều kiện tiên quyết cứng để mua hàng doanh nghiệp. Đề xuất đưa vào phân lập ULID/không gian tên sớm, thay vì vá sau này. |
| **Hiệu ứng "con dao hai lưỡi" của hệ sinh thái MCP** | NanoBot #3739 MCP chưa khởi động đã gặp sự cố, NanoClaw cạnh tranh MCP+XML kép, Hermes #23799 các tiến trình mồ côi của đội con MCP | **MCP làm giao diện chuẩn cũng mang đến bề mặt lỗi mới**. Đề xuất bổ sung kiểm tra trước TCP, quản trị vòng đời tiến trình và giảm thiểu lỗi cho công cụ MCP. |
| **Lo lắng về độ tin cậy của "tìm kiếm là cơ sở hạ tầng"** | NanoBot DuckDuckGo bị treo dẫn đến Proxmox tắt máy cưỡng bức; PicoClaw Brave sau khi thu phí tìm giải pháp thay thế; ZeroClaw SearXNG tìm kiếm riêng tư | **Công cụ tìm kiếm đã nâng cấp từ "plugin chức năng" lên "phụ thuộc cấp hệ thống"**. Đề xuất triển khai chuỗi dự phòng cho nhà cung cấp tìm kiếm và cô lập ảnh hưởng của vòng lặp sự kiện lỗi tìm kiếm. |
| **"Trực quan hóa" hệ thống bộ nhớ cạnh tranh** | LobsterAI Dreaming chỉ hiển thị đọc, NanoClaw Hindsight giải pháp đóng gói, Hermes #509 bộ nhớ nhận thức | **Người dùng cần "nhìn thấy" bộ nhớ của Agent**, thay vì tin tưởng hộp đen. Giao diện người dùng hóa hệ thống bộ nhớ (dòng thời gian, độ tin cậy, truy vết nguồn) sẽ trở thành điểm bán hàng khác biệt. |
| **"Thích ứng sâu" vào rào cản hệ sinh thái IM Trung Quốc** | LobsterAI POPO/WeChat, NanoBot Feishu/WeChat, CoPaw DingTalk/Feishu, Hermes WPS Xiezuo | **Các sản phẩm Agent tại thị trường Trung Quốc đã hình thành ma trận thích ứng kênh độc lập**, lợi thế Slack/Discord của các dự án nước ngoài (OpenClaw, Hermes) bị vô hiệu hóa ở đây. Xuất/Nhập Trung Quốc cần đánh giá chi phí thích ứng IM. |
| **Khả năng tương thích Codex trở thành ưu tiên cao ẩn** | Tỷ lệ 18/6 vượt qua harness của OpenClaw, PicoClaw khôi phục luồng Codex, căng thẳng điểm cuối tùy chỉnh của NanoClaw | **Giao thức gọi công cụ của OpenAI Codex đang trở thành tiêu chuẩn thực tế**. Đề xuất xác minh sớm khả năng tương thích của việc gọi chức năng, đầu ra luồng, giao hàng theo ngữ cảnh, thay vì phản hồi thụ động. |

---

## 6. Báo cáo chi tiết dự án cùng ngành

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Nhật ký hàng ngày về dự án | 2026-05-12

## 1. Tổng quan nhanh trong ngày

NanoBot hôm nay thể hiện **mô hình phát triển hoạt động cao**, với 21 PR được cập nhật (15 chờ hợp nhất) và 10 Issues được cập nhật (7 hoạt động) trong 24 giờ, cho thấy tinh thần đóng góp cao của cộng đồng. Các tiến bộ cốt lõi tập trung vào ba hướng chính: **kiến trúc đa người thuê, tái cấu trúc hệ thống công cụ, sửa lỗi ổn định MCP**, đồng thời tiếp tục tăng cường thích ứng các kênh Trung Quốc như Feishu và WeChat. Đáng chú ý, việc đóng các vấn đề treo lịch sử kéo dài (treo hệ thống DuckDuckGo #2828 và vấn đề kiểm soát suy luận MiMo #3585) hôm nay cho thấy nhóm bảo trì đang giải quyết các lỗi tồn đọng. Sức khỏe tổng thể tốt, nhưng số lượng PR chờ hợp nhất cao (15) đòi hỏi sự chú ý đến nút thắt cổ chai xem xét mã.

---

## 2. Phát hành phiên bản

**Không có phiên bản mới nào được phát hành**

---

## 3. Tiến độ dự án

### Các PR quan trọng đã hợp nhất/đóng hôm nay

| PR | Tác giả | Đóng góp cốt lõi | Ý nghĩa thúc đẩy dự án |
|:---|:---|:---|:---|
| [#3749](https://github.com/HKUDS/nanobot/pull/3749) | hoangtuanm | **Hệ thống tài khoản WebUI đa người thuê**: Di chuyển từ kiến trúc đơn người thuê `~/.nanobot/` sang phân lập nhiều người dùng `~/.nanobot/users/<ulid>/` | **Đột phá cấp kiến trúc**: Đặt nền tảng cho triển khai SaaS, WebUI lần đầu hỗ trợ không gian trạng thái độc lập cho người dùng cá nhân; kênh IM (Telegram/Slack, v.v.) duy trì phạm vi quản trị viên để mở rộng cho v2 |
| [#3673](https://github.com/HKUDS/nanobot/pull/3673) | ivelin | **Sửa lỗi truyền phương tiện WebSocket**: `_dispatch_envelope` hoàn thành xử lý trường `media`, tệp đính kèm ảnh không còn bị mất lặng lẽ | Khắc phục các lỗi đường dẫn quan trọng cho khả năng đa phương thức của Agent, ảnh hưởng đến tương tác ảnh trên tất cả các kênh WebSocket |
| [#3733](https://github.com/HKUDS/nanobot/pull/3733) | NearlCrews | **Khả năng tương thích ngữ cảnh không an toàn của WebUI**: Thêm shim cho `crypto.randomUUID` để hỗ trợ truy cập LAN HTTP thuần túy | Phối hợp với các cam kết truy cập LAN gần đây (như `bad584cb`), giảm ngưỡng triển khai mạng cục bộ |
| [#3734](https://github.com/HKUDS/nanobot/pull/3734) | pixan-ai | **Sửa lỗi kiểm soát suy luận MiMo**: `reasoning_effort: "none"` được ánh xạ chính xác thành `thinking.type: "disabled"` | Đóng #3585, bổ sung sự không nhất quán giữa tài liệu và triển khai, người dùng hệ sinh thái Xiaomi có thể kiểm soát chi phí |
| [#3736](https://github.com/HKUDS/nanobot/pull/3736) | JiajunBernoulli | **Tích hợp Meituan LongCat**: Thêm provider `longcat`, hỗ trợ các mô hình dòng Flash-Chat/Flash-Thinking | Mở rộng hệ sinh thái LLM của Trung Quốc, bao gồm cả nhóm người dùng mô hình tự phát triển của Meituan |

**Đánh giá tiến độ tổng thể**: Việc hợp nhất hôm nay bao gồm các lĩnh vực **kiến trúc (đa người thuê), độ ổn định (MCP/WebSocket), hệ sinh thái (LongCat/MiMo), triển khai (LAN HTTP)**, dự án đã thúc đẩy đáng kể tính khả dụng cấp doanh nghiệp và khả năng thích ứng nội địa hóa.

---

## 4. Điểm nóng cộng đồng

### Các Issue được thảo luận sôi nổi nhất

| Hạng mục | Issue/PR | Số bình luận | Phân tích độ phổ biến |
|:---|:---|:---|:---|
| 🥇 | [#2828 Treo hệ thống do tìm kiếm DuckDuckGo](https://github.com/HKUDS/nanobot/issues/2828) | 5 | **Vấn đề khó khăn kéo dài cuối cùng đã được giải quyết**. Được tạo vào ngày 5 tháng 5, sau 6 ngày điều tra, cuối cùng đã xác định được nguyên nhân là do cách triển khai cụ thể của DuckDuckGo chặn vòng lặp sự kiện, thậm chí ảnh hưởng đến việc tắt máy cưỡng bức máy chủ Proxmox. Phản ánh **sự nhạy cảm cực độ của cộng đồng đối với độ ổn định của công cụ tìm kiếm** — tìm kiếm là khả năng cốt lõi của Agent, việc treo hệ thống thuộc cấp độ nghiêm trọng cao nhất |
| 🥈 | [#3650 Tên bot và biểu tượng tùy chỉnh](https://github.com/HKUDS/nanobot/issues/3650) | 3 | **Nhu cầu thương hiệu mạnh mẽ**. Người dùng muốn thay thế "nanobot đang suy nghĩ..." mặc định và biểu tượng mèo, giải pháp cấu hình config.json được đánh dấu là `good first issue`, phù hợp cho những người đóng góp mới bắt đầu |
| 🥉 | [#3744 Cô lập người dùng đa phiên MEMORY cấp phiên](https://github.com/HKUDS/nanobot/issues/3744) | 1 | **Điểm đau cốt lõi của triển khai doanh nghiệp**. Vấn đề xung đột `USER.md`/`MEMORY.md` khi nhiều người dùng IM chia sẻ Agent, chỉ ra cơ chế bộ nhớ hiện tại thiếu sự cô lập người thuê, tạo ra sự kết hợp cung-cầu với PR đa người thuê #3749 |

**Hiểu biết về nhu cầu**: Cộng đồng hiện đang tiến hóa từ "chạy được" sang "tùy chỉnh được, cô lập được, có thể thương mại hóa", thương hiệu hóa và đa người thuê là những tín hiệu quan trọng cho việc triển khai B2B.

---

## 5. Lỗi và Độ ổn định

| Mức độ nghiêm trọng | Vấn đề | Issue/PR | Trạng thái | Phạm vi ảnh hưởng | Tiến độ sửa lỗi |
|:---|:---|:---|:---|:---|:---|
| 🔴 **Cực kỳ nghiêm trọng** | MCP khởi động dịch vụ chưa bắt đầu khi Agent gặp sự cố | [#3739](https://github.com/HKUDS/nanobot/issues/3739) | **MỞ** | Tất cả người dùng MCP | 🛠️ [#3740](https://github.com/HKUDS/nanobot/pull/3740) đã được gửi: phát hiện trước cổng TCP để ngăn chặn sự cố vòng lặp sự kiện |
| 🔴 **Cực kỳ nghiêm trọng** | Treo hệ thống cấp độ DuckDuckGo do tìm kiếm | [#2828](https://github.com/HKUDS/nanobot/issues/2828) | **ĐÃ ĐÓNG** | Người dùng DuckDuckGo | ✅ Đã đóng, nguyên nhân gốc rễ là chặn vòng lặp sự kiện |
| 🟡 **Cao** | Mã chunk tô sáng 1MB+ tải trước WebUI | [#3746](https://github.com/HKUDS/nanobot/issues/3746) | **MỞ** | Toàn bộ người dùng WebUI | ⏳ Đang xử lý, ảnh hưởng đến hiệu suất khởi động và trải nghiệm trên thiết bị di động |
| 🟡 **Cao** | Lỗi nhận dạng tên tệp WeChat | [#3737](https://github.com/HKUDS/nanobot/issues/3737) | **MỞ** | Người dùng WeChat | ⏳ Đang xử lý, được đánh dấu là `good first issue` |
| 🟡 **Cao** | VolcEngine gửi đồng thời max_tokens+max_completion_tokens bị từ chối | [#3738](https://github.com/HKUDS/nanobot/pull/3738) | **MỞ (PR)** | Người dùng Volcano Engine | 🛠️ PR đã được gửi, đặt cờ `supports_max_completion_tokens` |
| 🟢 **Trung bình** | MiMo reasoning_effort: null không vô hiệu hóa suy luận | [#3585](https://github.com/HKUDS/nanobot/issues/3585) | **ĐÃ ĐÓNG** | Người dùng MiMo | ✅ #3734 đã được hợp nhất, ánh xạ `thinking_type` mới |

**Xu hướng độ ổn định**: Khả năng phục hồi của hệ sinh thái MCP là rủi ro lớn nhất hiện nay — trải nghiệm gặp sự cố khi chưa khởi động là cực kỳ không thân thiện, giải pháp phát hiện trước cổng trong #3740 xứng đáng được ưu tiên xem xét và hợp nhất.

---

## 6. Yêu cầu chức năng và Tín hiệu lộ trình

| Yêu cầu chức năng | Issue/PR | Liên kết với PR hiện tại | Đánh giá khả năng đưa vào |
|:---|:---|:---|:---|
| **Cô lập bộ nhớ cấp phiên** (MEMORY đa người dùng) | [#3744](https://github.com/HKUDS/nanobot/issues/3744) | Kiến trúc đa người thuê #3749 đã hợp nhất cô lập WebUI, kênh IM cần mở rộng | ⭐⭐⭐⭐⭐ **Cao**。Nhu cầu phù hợp với hướng kiến trúc của #3749, là phần mở rộng tự nhiên của v2 |
| **Chuyển đổi mô hình động** `/model` | [#3742](https://github.com/HKUDS/nanobot/issues/3742) | Không có PR trực tiếp | ⭐⭐⭐⭐⭐ **Trung-cao**。Nhu cầu cấp thiết cho các khu vực mạng không ổn định, chi phí triển khai thấp |
| **Theo dõi Token lịch sử** `/insights` | [#3731](https://github.com/HKUDS/nanobot/issues/3731) | [#3735](https://github.com/HKUDS/nanobot/pull/3735) đã được gửi | ⭐⭐⭐⭐⭐ **Cao**。PR đã sẵn sàng, nhu cầu cốt lõi của người dùng trả phí |
| **Tìm kiếm web do nhà cung cấp lưu trữ** (Tìm kiếm gốc của Azure) | [#3741](https://github.com/HKUDS/nanobot/issues/3741) | [#3743](https://github.com/HKUDS/nanobot/pull/3743) đã được gửi | ⭐⭐⭐⭐⭐ **Cao**。PR và Issue được gửi cùng ngày, phản hồi cực nhanh |
| **Sự kiện luồng SSE cho tiến trình công cụ** | — | [#3745](https://github.com/HKUDS/nanobot/pull/3745) đã được gửi | ⭐⭐⭐⭐☆ **Trung-cao**。Cải thiện trải nghiệm người dùng, tương thích OpenAI |
| **Hook tự sửa lỗi Agent** (phát hiện vòng lặp + suy ngẫm lại) | — | [#3728](https://github.com/HKUDS/nanobot/pull/3728) đã được gửi | ⭐⭐⭐⭐⭐ **Cao**。Giải quyết hai vấn đề cố hữu của Agent: "vòng lặp vô hạn gọi công cụ" và "thử lại mù quáng" |
| **Quản lý bộ nhớ MGP giữa các phiên** | — | [#3408](https://github.com/HKUDS/nanobot/pull/3408) đang mở | ⭐⭐⭐☆☆ **Trung bình**。Tầm nhìn kiến trúc nhưng phụ thuộc vào sự trưởng thành của giao thức bên ngoài |

**Tín hiệu lộ trình**: Phiên bản tiếp theo có khả năng tập trung vào ba chủ đề chính: **khả năng quan sát (/insights), khả năng phục hồi (/model switching), cấp doanh nghiệp (tìm kiếm/quản lý bộ nhớ)**.

---

## 7. Tóm tắt phản hồi người dùng

### Điểm đau thực tế
- **"Tìm kiếm gây treo hệ thống"**: Người dùng gặp vấn đề DuckDuckGo mô tả "thậm chí không thể tắt máy Proxmox một cách duyên dáng, buộc phải dừng lại bắt buộc" — độ tin cậy của chuỗi công cụ Agent bị đặt câu hỏi ở **cấp độ cơ sở hạ tầng** ([#2828](https://github.com/HKUDS/nanobot/issues/2828))
- **"Mạng Trung Quốc đại lục không ổn định"**: Người dùng GPT-5.5 yêu cầu chuyển đổi /model, phản ánh **sự khác biệt về khu vực về khả năng khả dụng của mô hình** là rào cản cốt lõi ([#3742](https://github.com/HKUDS/nanobot/issues/3742))
- **"Không nhận thức được chi phí khi trả phí"**: `/status` chỉ cho phiên hiện tại, việc thiếu tính liên tục giữa các phiên gây ra **lo lắng về lỗ hổng chi phí** ([#3731](https://github.com/HKUDS/nanobot/issues/3731))

### Kịch bản sử dụng
- **Hợp tác nhóm**: Xung đột MEMORY của Agent chia sẻ bởi nhiều người dùng IM, cho thấy NanoBot đang được sử dụng cho các **kịch bản hỗ trợ khách hàng, trợ lý nội bộ, v.v.** ([#3744](https://github.com/HKUDS/nanobot/issues/3744))
- **Triển khai HF Spaces**: PR #3621 xác minh nhiều Agent (vai trò Neo/Trinity/Sentinel, v.v.) chạy trong môi trường sản xuất một hộp chứa, **Đội Agent theo vai trò** trở thành cách sử dụng nâng cao

### Điểm hài lòng
Tốc độ phản hồi của kiến trúc đa người thuê #3749 (vòng lặp Issue-to-PR nhanh)
Thích ứng tích cực với các kênh Trung Quốc (Feishu, WeChat, Meituan LongCat)

---

## 8. Tồn đọng cần xử lý

| Rủi ro | Thời gian tạo | Cập nhật lần cuối | Lý do chặn | Đề xuất hành động |
|:---|:---|:---|:---|:---|
| [#3408 Quản lý bộ nhớ MGP giữa các phiên](https://github.com/HKUDS/nanobot/pull/3408) | 2026-04-23 | 2026-05-11 | Kiến trúc phức tạp, cần sự ổn định của giao thức MGP bên ngoài | Xác định các mốc v1.0/ v2.0, tránh đình chỉ vô thời hạn |
| [#3621 Đội Agent nhiều vai trò HF Spaces](https://github.com/HKUDS/nanobot/pull/3621) | 2026-05-04 | 2026-05-11 | Chu kỳ xác minh sản xuất dài, cạnh tranh tài nguyên hộp chứa đơn cần được kiểm tra | Yêu cầu bổ sung kiểm tra cơ sở hạ tầng giới hạn tài nguyên (CPU/Bộ nhớ) |
| [#3693 Tập trung kiểm soát đồng thời LLM](https://github.com/HKUDS/nanobot/pull/3693) | 2026-05-08 | 2026-05-11 | Lý do `invalid` không rõ ràng, tranh chấp thiết kế | Người bảo trì cần làm rõ lý do invalid hoặc đánh giá lại |
| [#3729 Tái cấu trúc plugin hệ thống công cụ](https://github.com/HKUDS/nanobot/pull/3729) | 2026-05-10 | 2026-05-11 | Thay đổi kiến trúc cốt lõi, ảnh hưởng lớn | Ưu tiên xem xét bởi người bảo trì cốt lõi, tránh xung đột với #3748/3728 |

**Cảnh báo nút thắt cổ chai xem xét**: Trong số 15 PR chờ hợp nhất, 5 cái được gửi hôm nay, nhưng các PR dài hạn như #3408 đã tồn đọng gần 20 ngày, đề xuất nhóm bảo trì phân biệt **kênh nhanh (sửa lỗi/tính năng nhỏ)** và **kênh xem xét sâu (tái cấu trúc kiến trúc)** để tránh người đóng góp rời đi.

---

*Nhật ký hàng ngày được tạo lúc: 2026-05-12 | Nguồn dữ liệu: Hoạt động công khai của kho lưu trữ HKUDS/nanobot GitHub*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Nhật ký hàng ngày về dự án | 2026-05-12

## 1. Tổng quan nhanh trong ngày

Hermes Agent hôm nay thể hiện **mức độ hoạt động và thông lượng cao**: 50 Issues (46 hoạt động/mới, chỉ 4 đóng) và 50 PR (36 chờ hợp nhất, 14 đã hợp nhất/đóng) trong 24 giờ, cho thấy mật độ tham gia cộng đồng cực kỳ cao. Lớp engine cốt lõi (`comp/agent`), lớp cổng (`comp/gateway`) và lớp tương tác TUI/CLI đều có các bản sửa lỗi dày đặc, cho thấy dự án đang ở giai đoạn **lặp lại nhanh và giải quyết độ ổn định đồng thời**. Đáng chú ý, tỷ lệ đóng hôm nay tương đối thấp (tỷ lệ đóng Issue là 8%, tỷ lệ hợp nhất/đóng PR là 28%), sự gia nhập của nhiều lỗi mới và hàng đợi PR có thể báo hiệu **áp lực hồi quy trong phiên bản v0.10.x**, người bảo trì cần chú ý đến sức khỏe của hàng đợi hợp nhất.

---

## 2. Phát hành phiên bản

### `desktop-pr20059-installers` — Bản dựng kiểm tra trải nghiệm người dùng trình cài đặt trên máy tính để bàn (Ad-hoc)

| Thuộc tính | Chi tiết |
|:---|:---|
| **Loại** | Bản dựng kiểm tra chưa ký / Ad-hoc (phiên bản ổn định chưa ký) |
| **Nguồn** | Phân nhánh `bb/gui` của PR #20059 @ commit `bff052d61` |
| **Mục đích** | Kiểm tra trải nghiệm người dùng trình cài đặt |

**Sản phẩm phân phối:**
- `Hermes-0.0.0-mac-arm64.dmg` (macOS ARM64)
- Trình cài đặt NSIS cho Windows x64 + ARM64
- AppImage cho Linux x64 + ARM64

| Giá trị kiểm tra | |
|:---|:---|
| `Hermes-0.0.0-mac-arm64.dmg` | `a598cd3b88df7381a4c52e4c4c65d4c...` |

> ⚠️ **Lưu ý quan trọng**: Đây là **bản dựng kiểm tra chưa ký**, chỉ được sử dụng để xác minh quy trình cài đặt của PR #20059, **không được sử dụng trong môi trường sản xuất**. Người dùng phiên bản chính thức vui lòng đợi bản phát hành ổn định đã ký.

🔗 [Trang phát hành](https://github.com/NousResearch/hermes-agent/releases/tag/desktop-pr20059-installers)

---

## 3. Tiến độ dự án

### Các PR quan trọng đã hợp nhất/đóng hôm nay

| PR | Tác giả | Đóng góp cốt lõi | Trạng thái |
|:---|:---|:---|:---|
| **#24063** | teknium1 | `hermes update` tự động làm mới cua-driver, giải quyết điểm đau của người dùng phải cài đặt lại thủ công do sửa lỗi lấy nét cửa sổ Safari (v0.1.6) | ✅ **Đã hợp nhất** |
| **#24061** → **#24062** | AgentArcLab | Bộ điều hợp tích hợp WPS Xiezuo (WPS365 Collaboration), bao gồm ACK- trước khi phản hồi, làm sạch đầu ra, phát hiện kết nối chết | ⚠️ #24061 Đã đóng, **#24062 Mở lại để tối ưu hóa** |
| **#24057** | ddupont808 | Sửa lỗi tham số `app=` bị thiếu khi `capture_after=True` dẫn đến sai lệch trong việc chụp cửa sổ | ✅ **Đã hợp nhất** |
| **#23848** → **#23269** | AgentArcLab | Vòng lặp ban đầu của bộ điều hợp WPS Xiezuo đã đóng | ✅ Đã đóng |
| **#24031** | Eji4h | Sửa lỗi điểm cuối phân tích múi giờ gặp sự cố: `utcoffset(None)` trả về None dưới zoneinfo | ✅ **Đã hợp nhất** |

### Ý nghĩa của các cột mốc quan trọng

- **Mở rộng hệ sinh thái hợp tác doanh nghiệp**: Bộ điều hợp WPS Xiezuo trải qua 3 vòng lặp PR ( #23269 → #23848 → #24061 → #24062), đánh dấu Hermes chính thức tham gia **thị trường văn phòng Trung Quốc**, song hành với Feishu như một cổng cấp doanh nghiệp.
- **Cải thiện độ tin cậy của Computer-Use**: Cập nhật tự động cua-driver + sửa lỗi chụp cửa sổ, giảm thiểu ma sát vận hành cho Agent đa phương thức.
- **Toàn cầu hóa múi giờ/bản địa hóa**: Sửa lỗi gặp sự cố múi giờ Châu Á như Bangkok, kết hợp với các vấn đề bản địa hóa Nix (#23943), cho thấy cơ sở hạ tầng quốc tế hóa đang được củng cố.

---

## 4. Điểm nóng cộng đồng

### 🔥 Các Issue được thảo luận sôi nổi nhất

| Hạng mục | Issue | Bình luận | 👍 | Yêu cầu cốt lõi |
|:---|:---|:---:|:---:|:---|
| 1 | **[#15080](https://github.com/NousResearch/hermes-agent/issues/15080)** Claude Max 20x lỗi OAuth 400 | 10 | 0 | **Mất xác thực người dùng trả phí**: Token OAuth hợp lệ của người dùng đăng ký Claude Max bị API gốc của Anthropic từ chối, chặn cấp P1 |
| 2 | **[#14853](https://github.com/NousResearch/hermes-agent/issues/14853)** Hợp tác kênh Discord đa Agent | 6 | 1 | **Điều phối Agent phân tán**: 3 phiên bản Hermes chia sẻ kênh không thể nhìn thấy lẫn nhau, cần chèn lịch sử + phòng chống vòng lặp liên tục |
| 3 | **[#7798](https://github.com/NousResearch/hermes-agent/issues/7798)** Sai ngưỡng nén kiểm tra trước `smart_model_routing` | 5 | 1 | **Tối ưu hóa chi phí phản tác dụng**: Khi định tuyến đến mô hình rẻ tiền, nén ngữ cảnh được thực hiện theo ngưỡng của mô hình rẻ tiền, dẫn đến việc cắt bớt ngữ cảnh chất lượng cao lẽ ra không nên nén |
| 4 | **