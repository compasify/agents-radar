# OpenClaw Sinh hoạt hàng ngày | 2026-05-10

> Vấn đề: 500 | PR: 500 | Dự án được bao phủ: 13 | Thời gian tạo: 2026-05-10 00:20 UTC

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

# Nhật báo hoạt động dự án OpenClaw | 2026-05-10

## 1. Tổng quan nhanh hôm nay

OpenClaw hôm nay cho thấy mức độ hoạt động cộng đồng cực kỳ cao, với **500 cập nhật Vấn đề** (453 hoạt động/mở mới, 47 đóng) và **500 cập nhật PR** (326 chờ hợp nhất, 174 đã hợp nhất/đóng) đạt mức bão hòa trong 24 giờ, cho thấy dự án đang trong giai đoạn phát triển nhanh chóng. Ở cấp độ kiến trúc cốt lõi, **tái cấu trúc cơ sở dữ liệu SQLite ưu tiên thời gian chạy (PR #78595)** là chủ đề chính tuyệt đối, đi kèm với sự gia tăng của nhiều PR hỗ trợ; đồng thời, **độ ổn định của thời gian chạy ACP (Giao thức Giao tiếp Tác tử)** đã trở thành trọng tâm sửa lỗi khẩn cấp, với 3 PR liên quan được đẩy mạnh song song. Tiếng nói của cộng đồng về hỗ trợ đa nền tảng (khách hàng Linux/Windows, APK Android được tạo sẵn) tiếp tục tăng cao, trong khi nhu cầu triển khai cấp doanh nghiệp trên các kênh như Signal, Telegram ngày càng tăng đáng kể.

---

## 2. Phát hành phiên bản

### Đã phát hành v2026.5.9-beta.1
🔗 [Liên kết Phát hành](https://github.com/openclaw/openclaw/releases/tag/v2026.5.9-beta.1)

| Loại | Nội dung |
|:---|:---|
| **Tính năng mới** | Tăng cường lệnh trò chuyện: Thêm `/think default` và `/fast default` để xóa ghi đè cấp hội và kế thừa cấu hình/giá trị mặc định của nhà cung cấp ([PR #79385](https://github.com/openclaw/openclaw/issues/79385), cảm ơn @VACInc) |
| **Cập nhật phụ thuộc** | Làm mới khóa phụ thuộc không gian làm việc: `@openai/codex` → `0.130.0`, `acpx` → `0.7.0`, AWS SDK → `3.1044.0` |

**Lưu ý về di chuyển** : Lệnh `/think default` và `/fast default` là các lệnh mới, không có thay đổi gây lỗi; làm mới phụ thuộc liên quan đến chuỗi công cụ mã hóa AI cốt lõi, nên kiểm tra đường dẫn tích hợp Codex.

---

## 3. Tiến độ dự án

### Các PR chính đã hợp nhất/đóng hôm nay

| PR | Tác giả | Trạng thái | Đóng góp cốt lõi |
|:---|:---|:---|:---|
| [#79082](https://github.com/openclaw/openclaw/pull/79082) | brokemac79 | **Đã hợp nhất** | Khắc phục sự cố nhận dạng bí danh thời gian chạy CLI (ví dụ: `claude-cli/<model>`) trong lựa chọn tuyến `/status`, đảm bảo hiển thị trạng thái dự phòng chính xác |
| [#77816](https://github.com/openclaw/openclaw/pull/77816) | rubencu | **Đã hợp nhất** | Tắt theo dõi I/O đồng bộ mặc định của chế độ xem Gateway, loại bỏ nhiễu cuối |
| [#78153](https://github.com/openclaw/openclaw/pull/78153) | brokemac79 | **Đã hợp nhất** | Dịch mô tả kỹ năng QQBot từ tiếng Trung sang tiếng Anh, sửa lỗi quốc tế hóa |
| [#80025](https://github.com/openclaw/openclaw/pull/80025) | chrisaddassa | **Đã hợp nhất** | Khắc phục đường dẫn khởi chạy xây dựng Docker Compose cục bộ: xóa chặn nhập json5 tĩnh, thêm hỗ trợ `--allow-unconfigured` để sử dụng ngay |
| [#74023](https://github.com/openclaw/openclaw/pull/74023) | brokemac79 | **Đã hợp nhất** | Thêm xóa các mục đăng ký phiên cron quá hạn vào `tasks maintenance`, giảm sự phình to của trạng thái bảo trì |

**Thúc đẩy cấp độ kiến trúc** : Chủ đề chính tái cấu trúc thời gian chạy SQLite [#78595](https://github.com/openclaw/openclaw/pull/78595) tiếp tục nhận các PR hỗ trợ, hôm nay [#79971](https://github.com/openclaw/openclaw/pull/79971) tăng cường tính đúng đắn của thời gian chạy (sửa 5 lỗi như kiểm tra độ mới khi giới thiệu, tích hợp bác sĩ) và [#79934](https://github.com/openclaw/openclaw/pull/79934) thêm lớp chiếu bản dịch cung cấp giao diện an toàn kiểu cho người tiêu dùng đồng hành.

---

## 4. Điểm nóng cộng đồng

### 🔥 Các Vấn đề thảo luận sôi nổi nhất

| Vấn đề | Nhận xét | 👍 | Yêu cầu cốt lõi |
|:---|:---|:---|:---|
| [#75 Ứng dụng Clawdbot Linux/Windows](https://github.com/openclaw/openclaw/issues/75) | **104** | 74 | **Khoảng trống ứng dụng máy tính để bàn gốc đa nền tảng** : macOS/iOS/Android đã có, Linux/Windows còn thiếu từ lâu, người dùng yêu cầu mạnh mẽ về các phiên bản máy tính để bàn có chức năng tương đương |
| [#14593 Lỗi cài đặt kỹ năng trong Docker: `brew not installed`](https://github.com/openclaw/openclaw/issues/14593) | 29 | 17 | **Khả năng tương thích Linux trong triển khai container hóa** : cài đặt kỹ năng brew giả định bị ngắt trong container Linux, cản trở triển khai trên đám mây/máy chủ |
| [#25592 Văn bản giữa các lệnh công cụ bị rò rỉ vào kênh nhắn tin](https://github.com/openclaw/openclaw/issues/25592) | 26 | 0 | **Kiểm soát quyền riêng tư/nhiễu UX** : văn bản xử lý nội bộ giữa các lệnh công cụ (xử lý lỗi, xác nhận thực thi) bị định tuyến sai đến các kênh như Slack/iMessage |
| [#9443 Bản phát hành APK Android được tạo sẵn](https://github.com/openclaw/openclaw/issues/9443) | 24 | 1 | **Tính thuận tiện khi phân phối trên thiết bị di động** : mã nguồn tồn tại nhưng không có APK được tạo sẵn, ngưỡng quá cao đối với người dùng thông thường |
| [#22438 Tải tệp khởi động theo cấp bậc](https://github.com/openclaw/openclaw/issues/22438) | 16 | 0 | **Tối ưu hóa chi phí cửa sổ ngữ cảnh** : tải toàn bộ tệp khởi động của không gian làm việc lớn lãng phí token, cần tải theo cấp bậc theo yêu cầu |

### Phân tích yêu cầu
- **Lo lắng về phạm vi nền tảng** : #75 (104 nhận xét) là nhu cầu dài hạn cấp lịch sử của dự án, phản ánh áp lực của OpenClaw trong việc chuyển đổi từ "ưu tiên macOS" sang cơ sở hạ tầng đa nền tảng.
- **Ma sát triển khai doanh nghiệp** : Các vấn đề liên quan đến Docker ( #14593, #31331, #37634 ) xuất hiện theo cụm, cho thấy độ phức tạp triển khai trong môi trường sản xuất trở thành điểm nghẽn cho việc áp dụng.
- **Độ chi tiết tương tác tác tử AI** : #25592 phơi bày vấn đề ranh giới mờ nhạt giữa chuỗi công cụ và kênh nhắn tin, cần làm rõ ranh giới giữa "xử lý nội bộ" và "có thể nhìn thấy đối với người dùng".

---

## 5. Lỗi và Độ ổn định

| Ưu tiên | Vấn đề | Loại | Trạng thái | PR Sửa lỗi |
|:---|:---|:---|:---|:---|
| 🔴 **P0-Sự cố** | [#39038 Chương trình nút Windows 11 24H2 bị kẹt trên thông tin PATH sau khi khởi động](https://github.com/openclaw/openclaw/issues/39038) | Sự cố/Đóng băng | **Mở** | Không có |
| 🔴 **P0-Hồi quy** | [#38327 "Không thể chuyển đổi undefined hoặc null thành đối tượng" với google-vertex/gemini-3.1-pro-preview](https://github.com/openclaw/openclaw/issues/38327) | Hồi quy | **Mở** | Không có |
| 🔴 **P0-Hồi quy** | [#31583 Công cụ `exec` không kế thừa `skills.entries.*.env`](https://github.com/openclaw/openclaw/issues/31583) | Hồi quy (lỗi tiêm khóa) | **Mở** | Không có |
| 🟡 **P1-Hồi quy** | [#32473 giao diện điều khiển yêu cầu nhận dạng thiết bị (HTTPS/localhost)](https://github.com/openclaw/openclaw/issues/32473) | Hồi quy (chặn triển khai VPS/Docker) | **Mở** | Không có |
| 🟡 **P1-Hồi quy** | [#38439 Điểm cuối avatar Webchat 404](https://github.com/openclaw/openclaw/issues/38439) | Hồi quy | **Mở** | Không có |
| 🟡 **P1-Cạnh tranh** | [#22676 Tình trạng cạnh tranh `stop()` của daemon Signal trên khởi động lại SIGUSR1](https://github.com/openclaw/openclaw/issues/22676) | Tiến trình mồ côi/gửi lỗi | **Mở** | Không có |
| 🟡 **P1-Mất dữ liệu** | [#29387 Tệp khởi động trong agentDir bị bỏ qua một cách thầm lặng](https://github.com/openclaw/openclaw/issues/29387) | Cấu hình không hợp lệ | **Mở** | Không có |

### Cụm sửa lỗi khẩn cấp thời gian chạy ACP (đầu tư dày đặc hôm nay)
| PR | Mô tả |
|:---|:---|
| [#80023](https://github.com/openclaw/openclaw/pull/80023) | Truyền chi tiết `AcpRuntimeError` xuyên qua ranh giới vòng đời, chấm dứt `ACP_TURN_FAILED` mờ đục |
| [#79883](https://github.com/openclaw/openclaw/pull/79883) | Chấp nhận cấu hình `timeout` không được hỗ trợ ở backend |
| [#75306](https://github.com/openclaw/openclaw/pull/75306) | Bỏ qua cấu hình `timeout` của Claude ACP (Claude 0.31.x từ chối tùy chọn này) |
| [#73693](https://github.com/openclaw/openclaw/pull/73693) | Dừng `timeoutSeconds` của hình ảnh, từ chối lỗi mềm cho các điều khiển không được hỗ trợ |

> **Lưu ý** : Báo cáo [#78546](https://github.com/openclaw/openclaw/issues/78546) về Claude ACP thất bại qua `sessions_spawn` nhưng ACPX hoạt động trực tiếp, cụm PR trên đang giải quyết có mục tiêu.

---

## 6. Yêu cầu tính năng và tín hiệu lộ trình

### Các tính năng có khả năng cao được đưa vào phiên bản tiếp theo (đã có PR đang hoạt động hoặc phù hợp về kiến trúc)

| Yêu cầu | Vấn đề/PR | Cường độ tín hiệu | Cơ sở đánh giá |
|:---|:---|:---|:---|
| **SQLite transcription/session seams cho người tiêu dùng đồng hành** | [#79902](https://github.com/openclaw/openclaw/issues/79902), [#79904](https://github.com/openclaw/openclaw/issues/79904), [#79934](https://github.com/openclaw/openclaw/pull/79934) | ⭐⭐⭐⭐⭐ | Phần mở rộng trực tiếp của việc tái cấu trúc thời gian chạy ưu tiên cơ sở dữ liệu, PR đã sẵn sàng |
| **Tìm kiếm công cụ cốt lõi (Tool Search)** | [#79823](https://github.com/openclaw/openclaw/pull/79823) | ⭐⭐⭐⭐⭐ | Giải quyết chi phí token của danh mục công cụ lớn (~3.500 tok/phiên), tối ưu hóa cấp độ kiến trúc |
| **Chế độ mã gốc Codex** | [#80001](https://github.com/openclaw/openclaw/pull/80001) | ⭐⭐⭐⭐⭐ | Liên kết với khả năng Codex mới nhất của OpenAI, duy trì đường dẫn ưu tiên gốc |
| **tiêu đề yêu cầu cho mỗi tác tử/mỗi cron** | [#79990](https://github.com/openclaw/openclaw/pull/79990) | ⭐⭐⭐⭐☆ | Nhu cầu cấp bách cho các tình huống đa người thuê/đa khóa, PR hoàn chỉnh |
| **danh sách denylist exec-approvals** | [#6615](https://github.com/openclaw/openclaw/issues/6615) | ⭐⭐⭐⭐☆ | Nhu cầu tuân thủ bảo mật cao, bỏ phiếu cộng đồng 7👍 |

### Tín hiệu lộ trình trung và dài hạn (yêu cầu mạnh mẽ nhưng triển khai phức tạp)

| Yêu cầu | Vấn đề | Độ phức tạp | Điểm nghẽn chính |
|:---|:---|:---|:---|
| **Ứng dụng máy tính để bàn gốc Linux/Windows** | [#75](https://github.com/openclaw/openclaw/issues/75) | Rất cao (khung UI đa nền tảng) | Chi phí tài nguyên, mức độ chia sẻ mã với mã SwiftUI/AppKit hiện có |
| **Tăng cường hợp tác đa tác tử** | [#35203](https://github.com/openclaw/openclaw/issues/35203) | Cao (thiết kế giao thức) | Cần gắn kết với sự trưởng thành của thời gian chạy ACP |
| **Tích hợp quản lý bí mật gốc** | [#13610](https://github.com/openclaw/openclaw/issues/13610) | Trung bình-Cao | Cần thiết kế trừu tượng hóa nhà cung cấp (AWS SM, Vault, v.v.) |
| **Chế độ Thực thi Trực tiếp cho Cron** | [#18160](https://github.com/openclaw/openclaw/issues/18160) | Trung bình | Thiết kế đường dẫn thực thi bỏ qua `agentTurn` |

---

## 7. Tóm tắt phản hồi người dùng

### 💢 Các điểm đau cốt lõi

| Điểm đau | Vấn đề nguồn | Lời lẽ điển hình của người dùng/kịch bản |
|:---|:---|:---|
| **Triển khai Docker "gặp khó khăn khắp nơi"** | #14593, #31331, #37634, #39223 | "Chạy `openclaw onboard` trong Docker, chọn kỹ năng brew gặp lỗi ngay" / "Truy cập không gian làm việc sandbox hoàn toàn không hoạt động" |
| **Cấu hình và trạng thái thời gian chạy bị phân tách lộn xộn** | #29736, #29387 | `exec-approvals.json` được ghi vào `~/.openclaw` thay vì `/var/lib/openclaw` được cấu hình; Tệp khởi động của agentDir bị bỏ qua thầm lặng |
| **Trải nghiệm công dân hạng hai trên Windows** | #39038 | "Chương trình nút bị kẹt trên thông tin PATH sau khi khởi động, không thể kết nối với Gateway" |
| **Chi phí ngữ cảnh/token lo lắng** | #22438, #14785, #1210 | "Thuế lược đồ công cụ cố định 3.500 token mỗi phiên" / "Ảnh Discord base64 làm đầy giới hạn 200K token" |
| **Điều phối tác tử phụ ngoài tầm kiểm soát** | #8299, #27445, #39476 | "Tác tử phụ thông báo không thể bỏ qua một cách đáng tin cậy, mô hình thường không xuất `ANNOUNCE_SKIP`" / "A2A sessions_send dẫn đến tin nhắn trùng lặp" |

### ✅ Các điểm hài lòng của người dùng

- **Trải nghiệm thành thạo trên thiết bị macOS/iOS** : #75 gián tiếp chứng minh chất lượng của ứng dụng khách hiện có trên hệ sinh thái Apple
- **Phạm vi phủ sóng đa kênh rộng rãi** : Hỗ trợ hơn 20 kênh (Signal/Telegram/Slack/Discord/iMessage/QQ, v.v.) được công nhận
- **Hướng thời gian chạy ưu tiên cơ sở dữ liệu** : Các yêu cầu về seams đồng hành như #79902 cho thấy người dùng cao cấp mong đợi sự mở rộng của hệ sinh thái

---

## 8. Tồn đọng cần xử lý

### ⚠️ Các Vấn đề có giá trị cao chưa được phản hồi trong thời gian dài (nhắc nhở người bảo trì)

| Vấn đề | Ngày tạo | Trạng thái hiện tại | Rủi ro |
|:---|:---|:---|:---|
| [#75 Ứng dụng Clawdbot Linux/Windows](https://github.com/openclaw/openclaw/issues/75) | 2026-01-01 | **Mở 129 ngày**，104 nhận xét，74👍 | Khoảng trống chiến lược về phạm vi nền tảng, các đối thủ cạnh tranh có thể lợi dụng điều này để xâm nhập |
| [#1210 Lưu trữ base64 ảnh Discord gây tràn ngữ cảnh](https://github.com/openclaw/openclaw/issues/1210) | 2026-01-19 | **Mở 111 ngày**，6 nhận xét | Tổn thất chi phí token hàng ngày của người dùng hoạt động |
| [#6615 danh sách denylist exec-approvals](https://github.com/openclaw/openclaw/issues/6615) | 2026-02-01 | **Mở 98 ngày**，7 nhận xét，7👍 | Nhu cầu cấp bách cho các kịch bản tuân thủ bảo mật, chế độ chỉ cho phép là không đủ |
| [#6731 Chế độ ClawdBot an toàn/không an toàn](https://github.com/openclaw/openclaw/issues/6731) | 2026-02-02 | **Mở 97 ngày**，12 nhận xét | Liên quan đến đề xuất viết lại bằng Rust, cần làm rõ lộ trình kỹ thuật |
| [#16085 Hỗ trợ triển khai container hóa API REST Signal](https://github.com/openclaw/openclaw/pull/16085) | 2026-02-14 | **PR mở 85 ngày**， khối lượng lớn | Chặn triển khai Signal doanh nghiệp, gắn kết với vấn đề cạnh tranh #22676 |

### Phân kỳ kiến trúc cần ra quyết định
- **Đề xuất viết lại bằng Rust #6731** : Thành viên cộng đồng đề xuất "viết lại hoàn toàn bằng Rust" để đạt được chế độ an toàn/không an toàn, xung đột với ngăn xếp công nghệ TypeScript/Node hiện tại, cần người bảo trì làm rõ lập trường.
- **RFC hợp tác đa tác tử #35203** : Đề xuất phạm vi rộng về hồ sơ khả năng + bảng đen chia sẻ + bộ nhớ phân cấp + quản lý chi phí token, cần đánh giá khả năng tương thích với sự phát triển của ACP hiện tại.

---

*Thời gian tạo báo cáo hàng ngày: 2026-05-10 | Nguồn dữ liệu: Luồng hoạt động công khai của GitHub openclaw/openclaw*

---

## So sánh ngang hệ sinh thái

# Phân tích so sánh ngang hệ sinh thái mã nguồn mở Trợ lý AI Cá nhân/Tác tử Tự chủ | 2026-05-10

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái mã nguồn mở Trợ lý AI Cá nhân đang ở **giai đoạn kết hợp của việc tái cấu trúc kiến trúc và giai đoạn nước rút sản xuất hóa**. OpenClaw dẫn đầu cường độ lặp lại với năng suất bão hòa 500 Vấn đề/500 PR, IronClaw và ZeroClaw đồng thời thúc đẩy di chuyển kiến trúc v2/v0.8.0, trong khi NanoBot và CoPaw tập trung vào sửa lỗi ổn định và quản lý hiệu suất giao diện người dùng. Tổng thể cho thấy một cấu trúc ba lớp: "các dự án hàng đầu cạnh tranh về độ sâu kiến trúc, các dự án tầm trung cạnh tranh về triển khai kịch bản, các dự án dài hạn cạnh tranh về sự tồn tại khác biệt", với giao thức MCP, thời gian chạy đa tác tử và lớp tương thích nhà cung cấp là các chiến trường cơ sở hạ tầng chung.

---

## 2. So sánh mức độ hoạt động của từng dự án

| Dự án | Vấn đề (24h) | PR (24h) | Phát hành phiên bản | Đánh giá độ khỏe | Định vị giai đoạn |
|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 (453 hoạt động/47 đóng) | 500 (326 chờ hợp nhất/174 đã hợp nhất) | v2026.5.9-beta.1 | 🔶 Hoạt động chịu áp lực | Giai đoạn lặp lại nhanh chóng |
| **NanoBot** | 13 (9 đóng/4 mới) | 135 (105 chờ xem xét/30 đã hợp nhất) | Không có | 🟢 Khỏe mạnh | Giai đoạn nâng cấp kiến trúc |
| **Hermes Agent** | 50 (30 hoạt động/20 đóng) | 50 (35 chờ hợp nhất/15 đã hợp nhất) | Không có | 🟢 Khỏe mạnh | Giai đoạn mở rộng chức năng |
| **PicoClaw** | 12 (hoạt động) | 24 (14 chờ hợp nhất/10 đã hợp nhất) | v0.2.8-nightly | 🟡 Quan sát | Giai đoạn chuyển đổi đa tác tử |
| **NanoClaw** | 6 (5 hoạt động/1 đóng) | 19 (7 chờ xem xét/12 đã hợp nhất) | Không có | 🟢 Khỏe mạnh | Giai đoạn cứng rắn sản xuất |
| **NullClaw** | 3 (tất cả chưa xử lý) | 2 (đã hợp nhất) | nightly-20260509 | 🔴 Rủi ro | Giai đoạn bảo trì ban đầu |
| **IronClaw** | 19 (18 hoạt động/1 đóng) | 36 (23 chờ hợp nhất/13 đã hợp nhất) | Không có | 🔶 Hoạt động chịu áp lực | Giai đoạn di chuyển kiến trúc |
| **LobsterAI** | 0 | 13 (4 chờ hợp nhất/9 đã hợp nhất) | 2026.5.9 | 🟡 Quan sát | Giai đoạn tinh chỉnh chức năng |
| **Moltis** | 0 | 3 (1 chờ hợp nhất/2 đã hợp nhất) | Không có | 🟢 Vững chắc | Giai đoạn củng cố chất lượng |
| **CoPaw** | 42 (23 hoạt động/19 đóng) | 30 (8 chờ xem xét/22 đã hợp nhất) | v1.1.6 + beta.2 | 🔶 Hoạt động chịu áp lực | Giai đoạn phát hành ổn định |
| **ZeptoClaw** | 0 | 1 (chờ hợp nhất) | Không có | 🟡 Quan sát | Giai đoạn ngủ đông bảo trì |
| **ZeroClaw** | 50 (48 hoạt động/2 đóng) | 44 (35 chờ hợp nhất/9 đã hợp nhất) | Không có | 🔶 Hoạt động chịu áp lực | Giai đoạn nước rút kiến trúc |
| **TinyClaw** | 0 | 0 | Không có | ⚫ Yên lặng | Đình trệ |

> **Phân tầng mức độ hoạt động** : Lớp đầu tiên (OpenClaw/ZeroClaw/IronClaw/CoPaw) trung bình 40+ Vấn đề/ngày và PR>30; Lớp thứ hai (NanoBot/Hermes/PicoClaw/NanoClaw) trong khoảng 10-50 PR; Lớp thứ ba (NullClaw/LobsterAI/Moltis/ZeptoClaw) <10 PR, ở giai đoạn bảo trì hoặc ban đầu.

---

## 3. Định vị của OpenClaw trong hệ sinh thái

| Chiều | Biểu hiện OpenClaw | So sánh hệ sinh thái |
|:---|:---|:---|
| **Quy mô cộng đồng** | 500 Vấn đề/500 PR là đỉnh tuyệt đối, #75 với 74👍 là nhu cầu cấp lịch sử | ZeroClaw 50/44, CoPaw 42/30 theo sau, chênh lệch số lượng rõ rệt |
| **Lộ trình công nghệ** | **Thời gian chạy ưu tiên cơ sở dữ liệu** (tái cấu trúc SQLite #78595) + **giao thức ACP gốc** | IronClaw thúc đẩy kiến trúc Reborn, ZeroClaw thúc đẩy đa tác tử v0.8.0, đều cô lập và phân quyền mạnh mẽ hơn; OpenClaw nhấn mạnh "giao thức là sản phẩm" |
| **Phạm vi kênh** | 20+ kênh (Signal/Telegram/Slack/Discord/iMessage/QQ, v.v.) | Hermes cũng rộng nhưng tích hợp doanh nghiệp sâu hơn (dòng Jira); CoPaw tập trung vào hệ sinh thái tiếng Trung (Feishu/Volcengine) |
| **Chiến lược nền tảng** | **Ưu tiên hệ sinh thái Apple** (macOS/iOS/Android đã có, Linux/Windows còn thiếu #75) | ZeroClaw/IronClaw đa nền tảng gốc; NanoBot cộng đồng tự xây dựng WebUI lấp đầy |
| **Lợi thế cốt lõi** | ① Độ rộng kênh không ai sánh kịp ② Vị trí hệ sinh thái giao thức ACP ③ Nhu cầu triển khai doanh nghiệp cao (Signal/Telegram cấp doanh nghiệp) | Nhược điểm: Khoảng trống đa nền tảng trở thành gánh nặng lịch sử, ma sát triển khai Docker cao (#14593 cụm) |
| **Rủi ro khác biệt hóa** | Nhãn "ưu tiên macOS" so với căng thẳng cơ cấu của nhu cầu đa nền tảng | Đối thủ cạnh tranh có thể xâm nhập từ máy tính để bàn Linux/Windows (#75 mở 129 ngày) |

---

## 4. Các hướng công nghệ được quan tâm chung

| Hướng công nghệ | Dự án liên quan | Yêu cầu cụ thể | Mức độ khẩn cấp |
|:---|:---|:---|:---|
| **Hệ sinh thái giao thức MCP** | OpenClaw, PicoClaw, CoPaw, NanoClaw | PicoClaw #2546 yêu cầu OAuth 2.1+PKCE đơn giản hóa cấu hình; CoPaw #4152 sửa lỗi rò rỉ tiến trình con MCP; OpenClaw bị chặn cài đặt kỹ năng phụ thuộc vào container hóa brew | 🔴 Cao |
| **Thời gian chạy đa tác tử** | ZeroClaw, IronClaw, PicoClaw, OpenClaw | ZeroClaw #6545 cô lập ba backend; IronClaw Reborn bộ điều phối tài nguyên; PicoClaw #2158 hợp tác động; OpenClaw #35203 bảng đen chia sẻ + bộ nhớ phân cấp | 🔴 Cao |
| **Lớp tương thích nhà cung cấp** | Hermes, ZeroClaw, CoPaw, PicoClaw, NullClaw | DeepSeek thinking content (Hermes #22313 cụm); Điểm cuối tương thích OpenAI tool_calls trống (ZeroClaw #6298); Cấu hình Volcengine không hợp lệ (CoPaw #4165); Phản hồi trống Codex (PicoClaw #2674) | 🔴 Cao |
| **Quản lý chi phí ngữ cảnh/token** | OpenClaw, ZeroClaw, CoPaw, NanoBot | OpenClaw #22438 tải phân cấp; ZeroClaw #6361 nén ngữ cảnh loại bỏ tin nhắn công cụ; CoPaw #3350 đóng băng ở 200+ vòng; NanoBot #3711 tối ưu hóa bộ đệm KV | 🟡 Trung-Cao |
| **Độ ổn định sản xuất (tắt máy thanh lịch/lưu trữ bền vững)** | NanoClaw, ZeroClaw, NanoBot | NanoClaw #2359/2358 sửa lỗi kép SIGTERM; ZeroClaw #6419 WorkspaceManager khởi động thất bại; NanoBot #3680 tệp phiên bị hỏng tự động đặt lại | 🟡 Trung-Cao |
| **Hiệu suất giao diện người dùng và WebUI** | CoPaw, NanoBot, LobsterAI, Moltis | CoPaw #3350 hiển thị phiên rất dài; NanoBot #2949 yêu cầu WebUI chính thức; Vòng lặp hoàn chỉnh xem trước hiện vật LobsterAI; Moltis #985 tái cấu trúc trình soạn thảo | 🟡 Trung |

---

## 5. Phân tích định vị khác biệt

| Dự án | Trọng tâm chức năng cốt lõi | Người dùng mục tiêu | Đặc điểm kiến trúc công nghệ |
|:---|:---|:---|:---|
| **OpenClaw** | Trợ lý AI đa kênh + hệ sinh thái giao thức ACP | Người dùng đầu cuối/người chấp nhận sớm + CNTT doanh nghiệp (triển khai Signal/Telegram) | TypeScript/Node + khách hàng SwiftUI + đang tái cấu trúc thời gian chạy SQLite |
| **NanoBot** | Khung tác tử có thể cắm được + hệ sinh thái WebUI cộng đồng | Nhà phát triển/người dùng tự lưu trữ | Python + kiến trúc AgentLoop + WebUI kép cộng đồng (chính thức/bên thứ ba) |
| **Hermes Agent** | Cơ chế thực thi tự chủ + tích hợp công cụ doanh nghiệp | Người dùng cao cấp/cơ sở hạ tầng nhóm | Kết hợp Rust/TypeScript + quy trình ba giai đoạn /goal + tích hợp sâu Jira/Discord |
| **PicoClaw** | Điều phối hợp tác đa tác tử + tương tác thoại | Nhà phát triển phần cứng/biên (bối cảnh Sipeed) | Go + cơ chế steering-chain + sổ đăng ký khám phá tác tử |
| **NanoClaw** | Tác tử container hóa dưới dạng dịch vụ + kỹ năng tự trị | Điện toán đám mây/vận hành doanh nghiệp | Thời gian chạy container + cơ sở dữ liệu hóa cấu hình + lưu trữ kỹ năng |
| **IronClaw** | Bảo mật đa người thuê + hộp cát WASM + kiến trúc Reborn | Người xây dựng nền tảng/doanh nghiệp SaaS | Rust + libSQL/Postgres ba backend + chính sách tin cậy danh mục năng lực |
| **CoPaw** | Hệ sinh thái mô hình tiếng Trung + tự động hóa trình duyệt | Nhà phát triển Trung Quốc/Người dùng Volcengine/DashScope | Python + tiến hóa Tauri cho máy tính để bàn + trình duyệt_sử dụng hàng loạt |
| **ZeroClaw** | Lớp tương thích OpenAI + cô lập đa tác tử | Người dùng tự lưu trữ/yêu cầu đa người thuê | Rust + cô lập không gian làm việc per-alias + Lucid/SQLite/Postgres |
| **LobsterAI** | Hợp tác nhóm + hiện vật tệp Artifacts | Người dùng nội bộ NetEase Youdao/doanh nghiệp tiếng Trung | Electron/renderer + hộp cát tác tử + tác vụ Cron |
| **Moltis** | Trải nghiệm trò chuyện đơn giản + quốc tế hóa | Người dùng phổ thông/khu vực Châu Á Thái Bình Dương | Không tiết lộ ngăn xếp cốt lõi, tập trung vào việc trau chuốt UX |

**Phân kỳ kiến trúc chính** :
- **Ngăn xếp ngôn ngữ** : Rust (IronClaw/ZeroClaw/Hermes) so với TypeScript (OpenClaw) so với Python (NanoBot/CoPaw/NanoClaw) so với Go (PicoClaw)
- **Mô hình thời gian chạy** : Cô lập tiến trình (container NanoClaw) so với ưu tiên cơ sở dữ liệu (OpenClaw SQLite) so với hộp cát WASM (IronClaw) so với đa tác tử gốc (ZeroClaw per-alias)
- **Chiến lược khách hàng** : Ưu tiên gốc (hệ sinh thái Apple OpenClaw) so với ưu tiên WebUI (cộng đồng NanoBot) so với đa nền tảng máy tính để bàn (tiến hóa Tauri CoPaw)

---

## 6. Mức độ phổ biến và sự trưởng thành của cộng đồng

| Cấp độ | Dự án | Đặc điểm | Chỉ số chính |
|:---|:---|:---|:---|
| **🔥 Giai đoạn lặp lại nhanh chóng** | OpenClaw, ZeroClaw, IronClaw, CoPaw | Thay đổi kiến trúc và sửa lỗi bản ổn định song song, mật độ lỗi S0/S1 tăng | Vấn đề>40/PR>30, phát hành phiên bản thường xuyên, có phản hồi "sợ nâng cấp" |
| **🏗️ Giai đoạn nâng cấp kiến trúc** | NanoBot, PicoClaw | Tái cấu trúc mô-đun cốt lõi (AgentLoop/steering-chain), sự xuất hiện của các cụm PR hỗ trợ | 10-50 PR, những người đóng góp chính dẫn đầu (chengyongru 7 PR/ngày, bogdanovich 8 PR/ngày) |
| **🛡️ Giai đoạn cứng rắn sản xuất** | NanoClaw, Hermes | Cơ sở hạ tầng được thiết lập (lưu trữ bền vững/tắt máy thanh lịch/hệ thống bộ nhớ), chuyển từ mở rộng chức năng sang độ tin cậy | Tỷ lệ hợp nhất cao, sửa lỗi>tính năng mới, tăng phản hồi từ kịch bản doanh nghiệp |
| **✨ Giai đoạn tinh chỉnh chức năng** | LobsterAI, Moltis | Không có hoạt động Vấn đề, PR tập trung vào UX/quốc tế hóa/tài liệu | <10 PR, không có sửa lỗi khẩn cấp, nợ nâng cấp tích lũy (LobsterAI 3 phiên bản chính nhảy qua và bị treo 19 ngày) |
| **⚠️ Giai đoạn quan sát rủi ro** | NullClaw, ZeptoClaw | Không có phản hồi lỗi mới (NullClaw 3/3 chưa xử lý) hoặc không hoạt động (ZeptoClaw) | Thiếu bầu không khí hỗ trợ cộng đồng, tốc độ phản hồi của người bảo trì quyết định sự lưu giữ |
| **💀 Đình trệ** | TinyClaw | 24h không hoạt động | — |

---

## 7. Các tín hiệu xu hướng đáng chú ý

| Xu hướng | Nguồn tín hiệu | Giá trị cho nhà phát triển |
|:---|:---|:---|
| **"Khả năng tương thích của mô hình suy luận" trở thành rào cản cứng** | Hermes 3 Vấn đề 24h đóng, ZeroClaw #6298, PicoClaw #2745 | Việc xử lý thinking/reasoning_content không còn là tùy chọn thích ứng, mà là chức năng cơ bản; Đề xuất cơ chế truyền trường hợp lý cho trường hợp lý do trong các dự án mới |
| **MCP chuyển từ "hỗ trợ giao thức" sang vùng nước sâu "quản trị và vòng đời"** | CoPaw #4152 sửa lỗi rò rỉ 18GB, PicoClaw #2546 yêu cầu dân chủ hóa OAuth | Tích hợp MCP không thể dừng lại ở "có thể kết nối", cần đầu tư vào giám sát tiến trình con, làm mới chứng chỉ, kỹ thuật vận hành đơn giản hóa cấu hình |
| **"Hiệu suất hội thoại dài" từ vấn đề UX nâng cấp thành vấn đề kiến trúc** | CoPaw #3350 đóng băng 200+ vòng, OpenClaw #22438 tải phân cấp, ZeroClaw #6517 ảo giác ngữ cảnh | Cuộn ảo giao diện người dùng + nén ngữ cảnh backend cần thiết kế phối hợp, đơn thuần thay đổi mô hình hoặc thêm bộ nhớ là không bền vững |
| **Đa tác tử chuyển từ "trình diễn chức năng" sang kỹ thuật "cô lập và tin cậy"** | IronClaw Reborn bộ điều phối tài nguyên, ZeroClaw cô lập per-alias, PicoClaw sổ đăng ký tác tử | Đa tác tử môi trường sản xuất phải giải quyết: cô lập không gian làm việc, ranh giới danh tính, kiểm toán cuộc gọi giữa các tác tử, phân bổ chi phí token |
| **Hệ sinh thái mô hình tiếng Trung thúc đẩy kiến trúc "ưu tiên bản địa hóa"** | CoPaw #4164 thảo luận về lời nhắc tiếng Trung, cụm lỗi cấu hình Volcengine/DashScope | Quốc tế hóa không thể dừng lại ở dịch giao diện người dùng, cần xem xét: chiến lược lời nhắc cho các mô hình tư duy tiếng Trung, sự khác biệt API của các nhà cung cấp trong nước, lộ trình chứng nhận tuân thủ |
| **Khủng hoảng niềm tin "nâng cấp là hỏng" lan rộng** | NullClaw #902 đóng băng 2026.4.9, CoPaw #4133 hồi quy phiên bản, ma sát triển khai Docker OpenClaw | Đề xuất thiết lập: cam kết nhánh LTS, lộ trình hạ cấp tự động, ma trận kiểm tra tương thích cấu hình, đưa "nhịp độ phát hành" vào chiến lược sản phẩm |

---

*Phân tích dựa trên dữ liệu công khai của GitHub vào ngày 2026-05-10 | Phù hợp cho người ra quyết định công nghệ đánh giá lựa chọn, nhà phát triển xác định cơ hội đóng góp*

---

## Báo cáo chi tiết dự án cùng lĩnh vực

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Nhật báo hoạt động dự án NanoBot | 2026-05-10

## 1. Tổng quan nhanh hôm nay

NanoBot hôm nay cho thấy **mức độ hoạt động phát triển cực kỳ cao**: 135 cập nhật PR (30 đã hợp nhất/đóng, 105 chờ xem xét) và **13 cập nhật Vấn đề** (9 đóng, 4 mở mới/hoạt động) trong 24 giờ. Người đóng góp cốt lõi `chengyongru` đã gửi **7 PR** trong một ngày, dẫn đầu việc tái cấu trúc kiến trúc AgentLoop, tối ưu hóa bộ đệm KV và sửa lỗi đầu ra luồng. Dự án đang trong **giai đoạn lặp lại dày đặc**, không có bản phát hành mới, nhưng việc xóa nợ kỹ thuật và nâng cấp kiến trúc đang được đẩy mạnh song song, với sức khỏe tổng thể tốt, cần chú ý đến số lượng PR chờ xem xét tích lũy.

---

## 2. Phát hành phiên bản

**Không có bản phát hành mới**

---

## 3. Tiến độ dự án

### Các PR cốt lõi đã hợp nhất/đóng

| PR | Tác giả | Mô tả tiến độ |
|:---|:---|:---|
| [#3719](https://github.com/HKUDS/nanobot/pull/3719) | chengyongru | **Chất lượng mã** : Xóa mã chết trong `find_legal_message_start` (sửa #3716), loại bỏ vòng lặp không thể đạt được do cắt danh sách không hợp lệ |
| [#3720](https://github.com/HKUDS/nanobot/pull/3720) | chengyongru | **Sửa lỗi quan trọng** : Hoàn thành `stream_id` và `turn_end` cho đầu ra luồng của lời nhắc cron, giải quyết vấn đề không thể liên kết các đoạn luồng cho máy khách WebSocket (sửa #3718) |
| [#3711](https://github.com/HKUDS/nanobot/pull/3711) | chengyongru | **Tối ưu hóa hiệu suất** : Di chuyển bản tóm tắt lưu trữ khỏi ngữ cảnh thời gian chạy sang lời nhắc hệ thống, **tăng tỷ lệ sử dụng lại bộ đệm KV**, giảm độ trễ hội thoại nhiều vòng |
| [#3708](https://github.com/HKUDS/nanobot/pull/3708) | chengyongru | **Tái cấu trúc kiến trúc** : Giới thiệu `AgentLoop.from_config()` để thống nhất việc lắp ráp vòng lặp, loại bỏ mã khởi tạo trùng lặp tại bốn vị trí CLI/serve/gateway/agent |
| [#3705](https://github.com/HKUDS/nanobot/pull/3705) | eugenechae | **Sửa lỗi tương tác** : Tạm dừng spinner chính xác khi chờ thử lại CLI, tránh làm hỏng đầu ra cuối |
| [#3673](https://github.com/HKUDS/nanobot/pull/3673) | ivelin | **Sửa lỗi kênh** : Truyền trường `media` qua kênh WebSocket, cho phép hỗ trợ tệp đính kèm/hình ảnh đến tác tử (sửa #3674) |
| [#3709](https://github.com/HKUDS/nanobot/pull/3709) | Re-bin | **Cải thiện WebUI** : Trang cài đặt BYOK thêm cấu hình thông tin xác thực Tìm kiếm Web, sử dụng điều khiển phân đoạn theo phong cách Apple |
| [#3680](https://github.com/HKUDS/nanobot/pull/3680) | Lumjiel | **Sửa lỗi ổn định** : Tự động đặt lại tệp phiên khi bị hỏng (`last_consolidated` vượt giới hạn), ngăn mất lịch sử hội thoại |
| [#3534](https://github.com/HKUDS/nanobot/pull/3534) | chengyongru | **Trải nghiệm nhà phát triển** : Thêm hướng dẫn `CLAUDE.md` và `.agent/`, chuẩn hóa quy trình cộng tác kho lưu trữ của trợ lý AI |

**Tiến độ tổng thể** : Kiến trúc AgentLoop bước vào giai đoạn tái cấu trúc hệ thống (bước 1/4 trong 4 PR liên tiếp), năng lực cơ bản như bộ đệm KV, giao thức luồng, lưu trữ phiên được củng cố, đặt nền móng cho **chuyển đổi Model Preset động** (#3714) trong tương lai.

---

## 4. Điểm nóng cộng đồng

| Hạng | Vấn đề/PR | Chỉ số tương tác | Phân tích yêu cầu cốt lõi |
|:---|:---|:---|:---|
| 🔥1 | [#2949](https://github.com/HKUDS/nanobot/issues/2949) Thảo luận chính thức hóa WebUI | 10 nhận xét, 13 👍 | **Nhu cầu cấu trúc chưa được giải quyết trong thời gian dài** : Cộng đồng rất muốn có WebUI chính thức thay vì dựa vào bên thứ ba. Thảo luận bao gồm kiến trúc tích hợp so với plugin, bổ sung cho giải pháp cộng đồng #1922 |
| 🔥2 | [#1922](https://github.com/HKUDS/nanobot/issues/1922) Giải pháp WebUI cộng đồng nanobot-webui | 9 nhận xét, 10 👍 | **Tín hiệu phân hóa hệ sinh thái** : Người dùng `Good0007` đã có bảng điều khiển tự lưu trữ với các chức năng nâng cao như đa người dùng, cấu hình MCP, tác vụ định lịch. Câu hỏi liệu có nên thu nhận chính thức hay cung cấp giao diện tiêu chuẩn trở thành tâm điểm. |
| 🔥3 | [#3421](https://github.com/HKUDS/nanobot/issues/3421) Lệnh CLI `nanobot update` | 4 nhận xét, 1 👍 | **Điểm đau về nhịp độ phát hành** : Dự án lặp lại quá nhanh, người dùng gặp khó khăn khi nâng cấp thủ công, chính thức chưa phản hồi |
| 🔥4 | [#510](https://github.com/HKUDS/nanobot/issues/510) Lỗi gắn cổng Gateway | 5 nhận xét, 0 👍 | **Cạm bẫy triển khai** : Gắn cổng bị lỗi thầm lặng trong môi trường Docker, tài liệu và thông báo lỗi cần cải thiện |

**Tín hiệu sâu sắc** : Yêu cầu WebUI xuất hiện **thế trận "chính thức - cộng đồng" kép** — #2949/#3059 thúc đẩy giải pháp tích hợp, #1922 chứng minh cộng đồng đã có thể cung cấp giải pháp thay thế cấp sản xuất một cách độc lập. Chính thức cần làm rõ chiến lược: thu nhận, chuẩn hóa giao diện, hoặc duy trì hiện trạng.

---

## 5. Lỗi và Độ ổn định

| Mức độ nghiêm trọng | Vấn đề | Mô tả | Trạng thái |
|:---|:---|:---|:---|
| 🔴 **Cao** | [#3718](https://github.com/HKUDS/nanobot/issues/3718) → [#3720](https://github.com/HKUDS/nanobot/pull/3720) | Đầu ra luồng của lời nhắc Cron thiếu `stream_id`, máy khách WebSocket không thể lắp ráp tin nhắn | **Đã sửa, chờ hợp nhất** |
| 🟡 **Trung bình** | [#3716](https://github.com/HKUDS/nanobot/issues/3716) → [#3719](https://github.com/HKUDS/nanobot/pull/3719) | Mã chết trong `helpers.py` do cắt lát không hợp lệ, mặc dù không ảnh hưởng đến thời gian chạy nhưng làm tăng gánh nặng bảo trì | **Đã sửa và hợp nhất** |
| 🟡 **Trung bình** | [#3689](https://github.com/HKUDS/nanobot/issues/3689) | **Mất ngữ cảnh khi gián đoạn phiên** : Sau khi người dùng gián đoạn vòng lặp tác tử, tác tử không thể xem lại nội dung được chỉ định "kiểm tra" | **Mở, không có PR** |
| 🟡 **Trung bình** | [#3674](https://github.com/HKUDS/nanobot/issues/3674) → [#3673](https://github.com/HKUDS/nanobot/pull/3673) | Kênh WebSocket thầm lặng bỏ qua tệp đính kèm `media` | **Đã sửa và hợp nhất** |
| 🟢 **Thấp** | [#3680](https://github.com/HKUDS/nanobot/pull/3680) / [#3712](https://github.com/HKUDS/nanobot/pull/3712) | Vượt quá giới hạn `last_consolidated` trong tệp phiên dẫn đến mất lịch sử | **Đã sửa, #3712 chờ hợp nhất** |

**Rủi ro hồi quy** : #3710 hoàn tác giải pháp lưu trữ bền vững `_last_summary` từ #3685, cho thấy giải pháp này có vấn đề chưa được tiết lộ, cần chú ý đến thiết kế thay thế trong tương lai.

---

## 6. Yêu cầu tính năng và tín hiệu lộ trình

| Yêu cầu | Vấn đề/PR | Khả năng được đưa vào | Cơ sở đánh giá |
|:---|:---|:---|:---|
| **Công tắc cô lập Chủ đề Lark** | [#3692](https://github.com/HKUDS/nanobot/issues/3692) | ⭐⭐⭐⭐ Cao | Phản hồi trực tiếp từ tính năng mới v0.1.5.post3, yêu cầu cấu hình hóa rõ ràng, phạm vi thay đổi nhỏ |
| **Hồ sơ tác tử phụ có thể cấu hình** | [#1012](https://github.com/HKUDS/nanobot/issues/1012) | ⭐⭐⭐⭐ Cao | Phù hợp với hướng kiến trúc Model Preset của #3714, là phần tiếp theo tự nhiên sau khi xóa nợ kỹ thuật |
| **Chuyển đổi Model Preset động** | [#3714](https://github.com/HKUDS/nanobot/pull/3714) | ⭐⭐⭐⭐⭐ Đang được thúc đẩy | Dựa trên tái cấu trúc #3708, bước thứ 2 trong 4 PR liên tiếp, dự kiến sẽ hợp nhất sớm |
| **Hệ thống plugin HookCenter** | [#3564](https://github.com/HKUDS/nanobot/pull/3564) | ⭐⭐⭐ Trung bình | Thay đổi cấp độ kiến trúc, thay thế mô hình viết lại phương thức AgentHook, cần đánh giá rủi ro tương thích |
| **Lệnh `nanobot update`** | [#3421](https://github.com/HKUDS/nanobot/issues/3421) | ⭐⭐ Thấp | Không có phản hồi chính thức, có các giải pháp thay thế uv/pip trong cộng đồng |
| **Kênh chính thức OpenWebUI** | [#2389](https://github.com/HKUDS/nanobot/issues/2389) | ⭐⭐ Thấp | Đã đóng, chính thức ưu tiên trừu tượng hóa kênh thay vì gắn với một UI cụ thể |

---

## 7. Tóm tắt phản hồi người dùng

### 😫 Các điểm đau cốt lõi
- **Gián đoạn ngữ cảnh** : "Sau khi gián đoạn tác tử, nó hoàn toàn quên mất phải làm gì" (#3689) — Cơ chế gián đoạn chưa bảo toàn trạng thái thực thi, ảnh hưởng đến độ tin cậy của tác vụ dài.
- **Cô lập Chủ đề Lark quá mức** : Việc gửi nhiều tệp trong cùng một nhóm bị chia thành các chủ đề riêng biệt, không thể xử lý hàng loạt (#3692)
- **Lo lắng về nâng cấp** : "Quá nhiều bản vá gần đây, nâng cấp thủ công bằng pip/uv rất mệt mỏi" (#3421)

### ✅ Điểm hài lòng
- Tính linh hoạt của kiến trúc: Cộng đồng có thể độc lập xây dựng giải pháp thay thế hoàn chỉnh cho nanobot-webui (#1922)
- Tốc độ phản hồi: Vấn đề #3716 được báo cáo và PR sửa lỗi #3719 được hợp nhất trong cùng ngày

### 🤔 Hiểu biết về kịch bản sử dụng
- **Triển khai doanh nghiệp** : Docker + Feishu/WeChat là các mô hình triển khai chính, các chi tiết như gắn cổng, cô lập chủ đề quyết định tính khả dụng.
- **Nhiệm vụ dài hạn** : Người dùng cố gắng để nanobot thực hiện kiểm tra liên tục/nhiệm vụ lặp lại, nhưng thiếu cơ chế gián đoạn-phục hồi.

---

## 8. Tồn đọng cần xử lý

| Dự án | Thời gian | Rủi ro | Đề xuất hành động |
|:---|:---|:---|:---|
| [#1012](https://github.com/HKUDS/nanobot/issues/1012) Hồ sơ tác tử phụ | 2.5 tháng mở | Trùng lặp hoặc bổ sung cho kiến trúc Preset #3714 | Người bảo trì xác nhận có đưa vào thiết kế Preset 2.0 hay không |
| [#3564](https://github.com/HKUDS/nanobot/pull/3564) Hệ thống plugin HookCenter | 10 ngày chờ xem xét | Có thể bị chìm trong 105 PR chờ xem xét | Ưu tiên xem xét, tránh xung đột với chuỗi tái cấu trúc #3708-#3714 |
| [#3692](https://github.com/HKUDS/nanobot/issues/3692) Công tắc Chủ đề Lark | 1 ngày mới mở | Thắng nhanh, giá trị tức thì cho người dùng | Đánh dấu `good first issue` hoặc theo dõi nhanh |
| [#3689](https://github.com/HKUDS/nanobot/issues/3689) Bảo toàn ngữ cảnh gián đoạn | 1 ngày mới mở | Trải nghiệm cốt lõi trong kịch bản tác vụ dài | Cần thiết kế tài liệu, đánh giá mối liên hệ với tái cấu trúc máy trạng thái AgentLoop (#3715) |

---

*Báo cáo hàng ngày dựa trên dữ liệu công khai của GitHub | Địa chỉ dự án: https://github.com/HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Nhật báo hoạt động dự án Hermes Agent | 2026-05-10

---

## 1. Tổng quan nhanh hôm nay

Hermes Agent hôm nay duy trì **mức độ hoạt động cao**, tạo ra **50 cập nhật Vấn đề** (30 hoạt động/mở mới, 20 đóng) và **50 cập nhật PR** (35 chờ hợp nhất, 15 đã hợp nhất/đóng) trong 24 giờ, không có bản phát hành mới. Trọng tâm cộng đồng tập trung vào **sửa lỗi tương thích mô hình suy luận** (xử lý nội dung thinking của DeepSeek/Ollama), **độ ổn định của cổng** (làm sạch tiến trình systemd, hết hạn WebSocket) và **mở rộng tích hợp doanh nghiệp** (thúc đẩy chuỗi PR plugin Jira). Sức khỏe tổng thể của dự án tốt, nhóm cốt lõi phản hồi nhanh chóng, với các lỗi cấp P1-P2 được hợp nhất trong ngày.

---

## 2. Phát hành phiên bản

**Không có bản phát hành mới**

---

## 3. Tiến độ dự án

### Các PR quan trọng đã hợp nhất/đóng

| PR | Tác giả | Mô tả | Tiến độ dự án |
|:---|:---|:---|:---|
| [#22888](https://github.com/NousResearch/hermes-agent/pull/22888) | FlowGodPR | **Tái cấu trúc hệ thống /goal SOTA** — Nâng cấp công cụ thực thi mục tiêu từ phán đoán nhị phân lên quy trình bắt buộc ba giai đoạn (phát hiện vòng lặp ngữ nghĩa, chuyển hướng thực thi cứng, kiểm soát xác minh), điểm tổng thể 7.5→10 (+33%) | Bước nhảy vọt về chất trong khả năng thực thi tự chủ của Tác tử, giải quyết vấn đề trôi mục tiêu tồn tại từ lâu |
| [#22891](https://github.com/NousResearch/hermes-agent/pull/22891) | briandevans | **Sửa lỗi bùng nổ ngữ cảnh Sử dụng Máy tính** — Giới hạn mảng `elements` AX (thực tế Obsidian giảm từ 597 phần tử xuống phạm vi có thể kiểm soát) | Ngăn chặn việc chụp đơn lẻ tiêu tốn cửa sổ ngữ cảnh trong các kịch bản giao diện người dùng dày đặc |
| [#22697](https://github.com/NousResearch/hermes-agent/pull/22697) | dazhaxie328 | Tiêm thời gian máy chủ hiện tại vào lời nhắc hệ thống mỗi lần gọi API | Sửa lỗi trôi cảm nhận thời gian trong các phiên dài, cải thiện độ chính xác của lập lịch/nhiệm vụ theo kế hoạch |
| [#22877](https://github.com/NousResearch/hermes-agent/pull/22877) | etherman-os | Cập nhật danh mục mô hình được chọn của NVIDIA NIM (Kimi K2.6, DeepSeek V4 Pro/Flash) | Duy trì khả năng hiển thị mô hình cho triển khai GPU cấp doanh nghiệp, tránh bị danh sách chung của models.dev nhấn chìm |
| [#20262](https://github.com/NousResearch/hermes-agent/pull/20262) | McClean | **Quy trình bảo toàn thông minh Hindsight** — Trích xuất quyết định ở phía máy khách, giảm chi phí lưu trữ bộ nhớ | Cơ sở hạ tầng quản lý bộ nhớ ưu tiên quyền riêng tư |
| [#22854](https://github.com/NousResearch/hermes-agent/pull/22854) | acc001k | Thu hồi (withdrawn) | — |

**Đánh giá tổng thể** : Các PR đã hợp nhất hôm nay bao gồm 5 khía cạnh: **Động cơ thực thi Tác tử cốt lõi, Độ tin cậy Sử dụng Máy tính, Cảm nhận thời gian, Danh mục mô hình doanh nghiệp, Tối ưu hóa hệ thống bộ nhớ**, với sự tiến bộ thực chất cả về độ sâu kỹ thuật và phạm vi kịch bản.

---

## 4. Điểm nóng cộng đồng

### Các Vấn đề thảo luận sôi nổi nhất

| Vấn đề | Nhận xét | 👍 | Yêu cầu cốt lõi |
|:---|:---|:---|:---|
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) **Phản hồi bị cắt ngắn do giới hạn độ dài đầu ra** | 18 | 4 | **Điểm đau thường gặp** : Đầu ra trong các kịch bản tạo văn bản dài (tin nhắn CLI/cổng) bị cắt, ảnh hưởng đến quy trình làm việc cốt lõi như đánh giá mã, tạo tài liệu. Người dùng cần cơ chế giới hạn độ dài đầu ra có thể cấu hình hoặc phân đoạn tự động. |
| [#4505](https://github.com/NousResearch/hermes-agent/issues/4505) **Tối ưu hóa Tích hợp Ollama** | 10 | 2 | **Tối ưu hóa hiệu suất** : Cộng đồng thúc đẩy di chuyển từ điểm cuối tương thích OpenAI sang `/api/chat` gốc của Ollama để có được luồng tăng dần thực sự và hỗ trợ lệnh tốt hơn. Phản ánh sự phát triển của nhóm người dùng triển khai cục bộ. |
| [#6147](https://github.com/NousResearch/hermes-agent/issues/6147) **Trình cài đặt bị kẹt tại lời nhắc ripgrep/ffmpeg** | 6 | 0 | **Ngưỡng nhập cảnh** : Quy trình cài đặt bị kẹt ở giai đoạn xác nhận phụ thuộc, không có phản hồi đầu vào bàn phím, ngăn cản trải nghiệm người dùng mới. |

### Phân tích các yêu cầu đằng sau

- **Giới hạn độ dài đầu ra (#7237)** : Đây là một vấn đề kiến trúc tồn tại từ lâu, liên quan đến chiến lược phân bổ ngân sách token. Số lượt thích cao cho thấy phạm vi ảnh hưởng rộng, cần chuyển từ "cắt cứng" sang cơ chế "phân đoạn thông minh + nối tiếp".
- **Tích hợp gốc Ollama (#4505)** : Xu hướng triển khai cục bộ/biên rõ rệt, cộng đồng sẵn sàng đầu tư công sức để tối ưu hóa trải nghiệm tự lưu trữ, dự án cần cân bằng khả năng tương thích OpenAI với hiệu suất gốc.
- **Độ tin cậy cài đặt (#6147)** : Cài đặt tương tác cuối không ổn định trong CI/CD có giới hạn hoặc môi trường hạn chế, cần hỗ trợ chế độ im lặng `--yes` hoặc kiểm tra trước phụ thuộc.

---

## 5. Lỗi và Độ ổn định

### Sắp xếp theo mức độ nghiêm trọng

| Ưu tiên | Vấn đề | Trạng thái | Mô tả | PR Sửa lỗi |
|:---|:---|:---|:---|:---|
| **P1** | [#17666](https://github.com/NousResearch/hermes-agent/issues/17666) | ✅ ĐÃ ĐÓNG | Tin nhắn dán nhiều dòng CLI dài bị mất thầm lặng | Đã sửa |
| **P1** | [#22714](https://github.com/NousResearch/hermes-agent/issues/22714) | 🔴 ĐANG MỞ | Cổng Matrix: Không có trình điều khiển kênh nội bộ để điều phối LLM mỗi tin nhắn | Đang xử lý |
| **P2** | [#22313](https://github.com/NousResearch/hermes-agent/issues/22313) | ✅ ĐÃ ĐÓNG | DeepSeek Anthropic API tương thích — các khối thinking bị loại bỏ dẫn đến HTTP 400 | Đã sửa |
| **P2** | [#21946](https://github.com/NousResearch/hermes-agent/issues/21946) | ✅ ĐÃ ĐÓNG | DeepSeek V4 Pro thinking content không được lưu trữ vào phiên | Đã sửa |
| **P2** | [#21811](https://github.com/NousResearch/hermes-agent/issues/21811) | ✅ ĐÃ ĐÓNG | Mô hình suy luận Ollama: sự tồn tại của reasoning_content kích hoạt nhầm lời nhắc nội dung trống | Đã sửa |
| **P2** | [#22013](https://github.com/NousResearch/hermes-agent/issues/22013) | ✅ ĐÃ ĐÓNG | `delegate_task` cứng nhắc ưu tiên nền tảng Claude, người dùng không có Claude gặp lỗi | Đã sửa |
| **P2** | [#22035](https://github.com/NousResearch/hermes-agent/issues/22035) | ✅ ĐÃ ĐÓNG | `gateway restart --system` báo lỗi sai (vấn đề HERMES_HOME của root) | Đã sửa |
| **P2** | [#21801](https://github.com/NousResearch/hermes-agent/issues/21801) | 🔴 ĐANG MỞ | Bản dựng TUI v0.13.0 thất bại, `[session ended]` | Đang xử lý |
| **P2** | [#22864](https://github.com/NousResearch/hermes-agent/issues/22864) | 🔴 ĐANG MỞ | PTY WebSocket của Bảng điều khiển hết hạn trước khi phản hồi HTTP 101 | Đang xử lý |
| **P2** | [#21915](https://github.com/NousResearch/hermes-agent/issues/21915) | 🔴 ĐANG MỞ | Làm sạch tiến trình không đầy đủ khi khởi động lại systemd dẫn đến xung đột cổng + vòng lặp khởi động lại vô hạn | Đang xử lý |
| **P2** | [#21867](https://github.com/NousResearch/hermes-agent/issues/21867) | 🔴 ĐANG MỞ | Cron `action='run'` không kích hoạt thực thi ngay lập tức, thời gian lập lịch tiến nhưng last_run_at trống | Đang xử lý |
| **P2** | [#22855](https://github.com/NousResearch/hermes-agent/issues/22855) | 🔴 ĐANG MỞ | Quản lý vòng đời `slash_worker` có lỗi, hệ thống dễ bị tổn thương dưới tải nặng của Bảng điều khiển | Đang xử lý |
| **P2** | [#22818](https://github.com/NousResearch/hermes-agent/issues/22818) | ✅ ĐÃ ĐÓNG | Tin nhắn CLI bị bỏ qua thầm lặng trong quá trình thực thi công cụ | Đã sửa |
| **P2** | [#22212](https://github.com/NousResearch/hermes-agent/issues/22212) | 🔴 ĐANG MỞ | Thử lại nền tảng: logic luân chuyển cấu hình xác thực trong một chuỗi không đầy đủ | Đang xử lý |
| **P2** | [#22686](https://github.com/NousResearch/hermes-agent/issues/22686) | ✅ ĐÃ ĐÓNG | Lỗi cú pháp `_arguments` của tập lệnh hoàn thành zsh | Đã sửa |
| **P3** | [#21708](https://github.com/NousResearch/hermes-agent/issues/21708) | ✅ ĐÃ ĐÓNG | Lỗi `duplicate column name` tick đầu tiên của bộ điều phối kanban sau khi khởi động lại | Đã sửa |

### Đánh giá độ ổn định

- **Khả năng tương thích chuỗi suy luận DeepSeek** : Đã đóng 3 Vấn đề liên quan hôm nay (#22313, #21946, #21811), cho thấy sự hỗ trợ của dự án cho mô hình suy luận đang bước vào giai đoạn trưởng thành, nhóm cốt lõi phản hồi cực kỳ nhanh chóng (đóng trong vòng 24 giờ).
- **Tính mong manh của cổng/TUI** : Các hồi quy liên quan đến WebSocket PTY được giới thiệu trong v0.13.0 (#21801, #22864) chưa được sửa, ảnh hưởng đến trải nghiệm cốt lõi của Bảng điều khiển, nên ưu tiên xử lý.
- **Vòng đời tiến trình** : Các lỗi quản lý tiến trình của systemd (#21915) và slash_worker (#22855) có thể gây ra lỗi dây chuyền trong triển khai có sẵn sàng cao.

---

## 6. Yêu cầu tính năng và tín hiệu lộ trình

| Yêu cầu | Vấn đề/PR | Mức độ trưởng thành | Khả năng được đưa vào |
|:---|:---|:---|:---|
| **`max_tokens` OpenRouter được định cấu hình theo cấu hình** | [#22879](https://github.com/NousResearch/hermes-agent/issues/22879) | 🔴 Báo cáo mới | **Cao** — Thay đổi cấp độ cấu hình, ảnh hưởng đến nhiều người dùng, PR sẵn sàng cao |
| **Kỹ năng máy chủ MCP Gemini CLI** | [#22878](https://github.com/NousResearch/hermes-agent/pull/22878) | 🟡 PR chờ xem xét | **Cao** — Mở rộng hệ sinh thái MCP, phù hợp với chiến lược tích hợp công cụ |
| **Vòng lặp giao tiếp chủ động (Proactive Loop)** | [#22811](https://github.com/NousResearch/hermes-agent/pull/22811), [#22585](https://github.com/NousResearch/hermes-agent/pull/22855) | 🟡 PR chờ xem xét | **Trung-Cao** — Có tiếng nói cộng đồng, nhưng cần xem xét bảo mật (thiết kế opt-in giảm thiểu rủi ro) |
| **Tạm dừng ngân sách trước và chụp trạng thái kiểm toán** | [#22868](https://github.com/NousResearch/hermes-agent/pull/22868) | 🟡 PR chờ xem xét | **Trung bình** — Cải thiện trải nghiệm người dùng khi hết ngân sách lặp lại, liên quan đến nợ kỹ thuật |
| **Tích hợp hoàn chỉnh Jira Cloud** | [#22103](https://github.com/NousResearch/hermes-agent/pull/22103) ~ Chuỗi [#22121](https://github.com/NousResearch/hermes-agent/pull/22121) | 🟢 5 PR đang được thúc đẩy | **Cực kỳ cao** — Tích hợp quy trình làm việc doanh nghiệp, cấu trúc PR hoàn chỉnh (auth→plugin→skill→docs) |
| **Hỗ trợ ID người dùng DM Discord** | [#22882](https://github.com/NousResearch/hermes-agent/issues/22882) | 🔴 Báo cáo mới | **Cao** — Sửa lỗi tương thích nền tảng, phạm vi rõ ràng |
| **Bảo toàn quyền tệp bộ nhớ** | [#22889](https://github.com/NousResearch/hermes-agent/issues/22889) | 🔴 Báo cáo mới | **Trung bình** — Nhu cầu trong các môi trường có quyền nghiêm ngặt như NixOS, phạm vi ảnh hưởng hẹp |

### Tín hiệu lộ trình

- **Tăng tốc tích hợp doanh nghiệp** : Chuỗi Jira gồm 5 PR (#22103-#