# OpenClaw Sinh nhật báo 2026-03-26

> Vấn đề: 500 | PR: 500 | Dự án được bao phủ: 13 | Thời gian tạo: 2026-03-26 00:11 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## Báo cáo chuyên sâu dự án OpenClaw

# Nhật báo hoạt động dự án OpenClaw | 2026-03-26

---

## 1. Tóm tắt hôm nay

OpenClaw duy trì **mức độ hoạt động cực cao** hôm nay, với 500 **cập nhật Issues** (432 hoạt động/mới mở, 68 đã đóng) và 500 **cập nhật PR** (354 đang chờ hợp nhất, 146 đã hợp nhất/đóng) trong 24 giờ qua, cùng với việc phát hành **3 phiên bản**. Trọng tâm cốt lõi của dự án tập trung vào **mở rộng cổng tương thích OpenAI**, **sửa lỗi ổn định hệ thống hội thoại** và **triển khai ứng dụng khách gốc Linux**. Phản hồi của cộng đồng về quản lý token OAuth, sự ổn định của các kênh Discord/Telegram và trải nghiệm Control UI tiếp tục gia tăng, cho thấy những điểm yếu phát sinh từ quy mô triển khai ngày càng mở rộng trong môi trường sản xuất.

---

## 2. Phát hành phiên bản

### v2026.3.24 (Bản ổn định) | [Phát hành](https://github.com/openclaw/openclaw/releases/tag/v2026.3.24)

| Loại | Nội dung |
|:---|:---|
| **Thay đổi phá vỡ** | Không |
| **Cập nhật cốt lõi** | **Tăng cường tương thích Gateway/OpenAI**: Thêm các điểm cuối `/v1/models` và `/v1/embeddings`; hỗ trợ `/v1/chat/completions` và `/v1/responses` để chuyển tiếp ghi đè mô hình rõ ràng, cải thiện khả năng tương thích với các ứng dụng khách bên thứ ba và hệ thống RAG (Người đóng góp: @vincentkoc) |
| **Agents/Công cụ** | Điểm cuối `/tools` giờ đây có thể hiển thị danh sách các công cụ hiện có của agent |
| **Lưu ý di chuyển** | Người dùng phụ thuộc vào cổng tương thích OpenAI cần xác minh hành vi truyền tham số ghi đè mô hình |

### v2026.3.24-beta.2 | [Phát hành](https://github.com/openclaw/openclaw/releases/tag/v2026.3.24-beta.2)

| Loại | Nội dung |
|:---|:---|
| **Sửa lỗi** | **Truy cập media đầu ra/tệp cục bộ**: Đồng bộ với chính sách `fs` được định cấu hình — khi `workspaceOnly` tắt, các tệp cục bộ của máy chủ và đường dẫn media đầu vào được gửi đi; các agent chỉ workspace-only vẫn được cách ly trong sandbox |
| **Thời gian chạy** | Giảm phiên bản hỗ trợ tối thiểu của Node 22 xuống `22.14` |

### v2026.3.24-beta.1 | [Phát hành](https://github.com/openclaw/openclaw/releases/tag/v2026.3.24-beta.1)

| Loại | Nội dung |
|:---|:---|
| **Cập nhật cốt lõi** | Tương tự như Tăng cường tương thích Gateway/OpenAI và cải tiến `/tools` trong v2026.3.24 |

---

## 3. Tiến độ dự án

### Các PR quan trọng đã được hợp nhất/đóng hôm nay

| PR | Tác giả | Đóng góp cốt lõi | Đánh giá ảnh hưởng |
|:---|:---|:---|:---|
| [#54765](https://github.com/openclaw/openclaw/pull/54765) | CyberSpencer | **Sửa lỗi lưu trữ hội thoại**：Khôi phục cơ chế snapshot registry, ngăn chặn các lần thử khôi phục thất bại làm ô nhiễm chu kỳ khởi tạo tiếp theo; đặt lại latch khôi phục để hỗ trợ thử lại sạch sẽ | 🔴 **Cao** - Giải quyết vấn đề khôi phục hội thoại không đáng tin cậy trong môi trường sản xuất |
| [#54764](https://github.com/openclaw/openclaw/pull/54764) | CyberSpencer | **Dọn dẹp agent con bị cô lập**：Hợp nhất định tuyến sổ cái để cắt tỉa và chấm dứt các agent bị cô lập; chuẩn hóa việc chấm dứt chạy chế độ xóa | 🔴 **Cao** - Giảm rò rỉ tài nguyên hội thoại bị treo |
| [#53905](https://github.com/openclaw/openclaw/pull/53905) | tiagonix | **Ứng dụng đồng hành gốc Linux GTK4 v1**：Kiến trúc đa tiến trình cách ly ứng dụng chính GTK4/libadwaita với runtime agent Node.js | 🟡 **Trung bình** - Đáp ứng yêu cầu lâu dài #75, lấp đầy khoảng trống phía máy tính để bàn Linux |
| [#52007](https://github.com/openclaw/openclaw/pull/52007) | acgh213 | **Sửa lỗi lặp vòng Discord PluralKit**：Mở rộng cơ chế ngăn chặn webhook luồng được liên kết, thêm khử trùng trùng lặp nội dung ngắn hạn | 🟢 **Trung bình** - Cải thiện xử lý tin nhắn trong các tình huống phức tạp của Discord |
| [#54748](https://github.com/openclaw/openclaw/pull/54748) | snova-jorgep | **Hỗ trợ nhà cung cấp SambaNova**：Dựa trên việc triển khai sạch sẽ trước đó #8216, giải quyết xung đột hợp nhất | 🟢 **Trung bình** - Mở rộng hỗ trợ đám mây GPU cấp doanh nghiệp |

### Đánh giá tổng thể tiến độ

- **Lớp cơ sở hạ tầng**: Khả năng phục hồi của hệ thống hội thoại (khôi phục, dọn dẹp, lưu trữ) đã được củng cố có hệ thống, đáp ứng nhiều báo cáo sự cố sản xuất gần đây
- **Mở rộng hệ sinh thái**: Cổng tương thích OpenAI trở thành ưu tiên chiến lược, ứng dụng khách gốc Linux và hỗ trợ SambaNova mở rộng các kịch bản triển khai
- **Độ ổn định của kênh**: Xử lý các trường hợp biên của Discord, Telegram tiếp tục được chi tiết hóa

---

## 4. Điểm nóng cộng đồng

### Issues được thảo luận nhiều nhất (theo số lượng bình luận)

| Xếp hạng | Issue | Bình luận | 👍 | Yêu cầu cốt lõi | Trạng thái |
|:---|:---|:---:|:---|:---|
| 1 | [#75](https://github.com/openclaw/openclaw/issues/75) Ứng dụng Clawdbot gốc Linux/Windows | 49 | 65 | **Khoảng trống ứng dụng gốc đa nền tảng**：macOS/iOS/Android đã có ứng dụng chính thức, người dùng Linux/Windows đã lâu mong muốn phiên bản máy tính để bàn có chức năng tương đương | 🔥 **Ưu tiên cao** - PR #53905 đã khởi động triển khai Linux |
| 2 | [#52885](https://github.com/openclaw/openclaw/issues/52885) Vấn đề tương thích plugin WeChat | 40 | 0 | **Thay đổi phá vỡ SDK plugin**：`@tencent-weixin/openclaw-weixin` v1.0.3 bị lỗi trên 2026.3.22+ do thay đổi đường dẫn nhập ESM | 🐛 **Chờ sửa lỗi** - Ảnh hưởng đến hệ sinh thái người dùng Trung Quốc |
| 3 | [#52823](https://github.com/openclaw/openclaw/issues/52823) Lỗi xây dựng tài nguyên Control UI | 34 | 12 | **Hồi quy nâng cấp**：Giao diện người dùng bị lỗi sau khi nâng cấp lên 2026.3.22, yêu cầu `pnpm ui:build` thủ công | ✅ **Đã đóng** - Vấn đề quy trình xây dựng/tài liệu |
| 4 | [#44851](https://github.com/openclaw/openclaw/issues/44851) Lỗi 401 Kimi web_search | 29 | 3 | **Cách ly xác thực cấp công cụ**：API Chat hoạt động bình thường nhưng xác thực công cụ tìm kiếm thất bại, cho thấy sự tách biệt quản lý thông tin đăng nhập giữa chuỗi công cụ và API chính | 🔍 **Đang điều tra** |
| 5 | [#14593](https://github.com/openclaw/openclaw/issues/14593) Lỗi cài đặt kỹ năng brew trong Docker | 16 | 12 | **Quản lý kỹ năng trong môi trường container**：Hình ảnh chính thức không cài đặt sẵn Homebrew, cài đặt kỹ năng dựa trên brew bị lỗi | 🔥 **Điểm yếu lâu dài** - Xung đột hệ thống kỹ năng với triển khai container |

### Phân tích điểm nóng

- **Công bằng nền tảng**: 65 👍 cho #75 cho thấy lượng lớn người dùng Linux/Windows nhưng bị bỏ quên trong thời gian dài, việc triển khai PR #53905 sẽ cải thiện đáng kể sự hài lòng của cộng đồng
- **Tính mong manh của hệ sinh thái plugin**: #52885 cho thấy cam kết về độ ổn định của SDK plugin là không đủ, cần thiết lập ma trận kiểm tra khả năng tương thích phiên bản
- **Sự phức tạp của hệ thống xác thực**: Làm mới token OAuth (#26322, #52037, #53317, #36982) trở thành một mô hình lỗi cụm, yêu cầu tái cấu trúc ở cấp độ kiến trúc

---

## 5. Lỗi và độ ổn định

### Mức độ nghiêm trọng: 🔴 Cao (Chặn sản xuất)

| Issue | Mô tả | Phạm vi ảnh hưởng | PR sửa lỗi |
|:---|:---|:---|:---|
| [#53317](https://github.com/openclaw/openclaw/issues/53317) | **Ghi đè token OAuth mới khi khởi động Gateway**：Sau khi nâng cấp lên v2026.3.22, cổng ghi đè token mới bằng trạng thái bộ nhớ cache cũ, gây lỗi yêu cầu Codex | Người dùng openai-codex | 🔍 **Đang tìm** - Liên quan đến #52037 |
| [#52037](https://github.com/openclaw/openclaw/issues/52037) | **Làm mới token OAuth không được ghi vào đĩa**：Token được làm mới chỉ tồn tại trong bộ nhớ, bị mất sau khi khởi động lại cổng, dẫn đến xác thực lại nhiều lần | Người dùng triển khai systemd | 🔍 **Đang tìm** |
| [#26322](https://github.com/openclaw/openclaw/issues/26322) | **Điều kiện chạy đua làm mới token OAuth**：Lỗi `refresh_token_reused` do làm mới đồng thời khi nhiều agent chia sẻ cấu hình xác thực | Triển khai sản xuất nhiều agent | 🔍 **Đang tìm** |
| [#53644](https://github.com/openclaw/openclaw/issues/53644) | **Lỗi nghiêm trọng Discord WebSocket 1006**：Lỗi chưa được bắt `@buape/carbon` khiến toàn bộ tiến trình cổng thoát | Người dùng kênh Discord | ✅ **Đã sửa** (Đã hợp nhất hôm nay) |

### Mức độ nghiêm trọng: 🟡 Trung bình (Suy giảm chức năng)

| Issue | Mô tả | Phạm vi ảnh hưởng | PR sửa lỗi |
|:---|:---|:---|:---|
| [#52875](https://github.com/openclaw/openclaw/issues/52875) | **Session_send trả về "no session found"**：Agent chính không thể liên hệ với các agent khác sau 2026.3.22 | Kịch bản cộng tác nhiều agent | 🔍 **Đang tìm** |
| [#53132](https://github.com/openclaw/openclaw/issues/53132) | **Discord nhiều tài khoản cổng bị treo khi khởi động**：Carbon reconcile thay đổi khiến 2-4 tài khoản bot bị kẹt ngẫu nhiên tại "awaiting gateway readiness" | Triển khai nhiều bot Discord | 🔍 **Đang tìm** |
| [#53870](https://github.com/openclaw/openclaw/issues/53870) | **Quét bảo mật plugin Matrix chặn cài đặt**：VirusTotal quét chậm làm lỗi cài đặt | Người dùng mới Matrix | 🔍 **Vấn đề quy trình** |
| [#53513](https://github.com/openclaw/openclaw/issues/53513) | **Mô-đun mã hóa E2EE Matrix không khả dụng**：Mô-đun crypto thời gian chạy không được hiển thị | Người dùng mã hóa Matrix | 🔍 **Đang tìm** |

### Mức độ nghiêm trọng: 🟢 Thấp (Vấn đề trải nghiệm)

| Issue | Mô tả | PR sửa lỗi |
|:---|:---|:---|
| [#51085](https://github.com/openclaw/openclaw/issues/51085) | **Nút micrô STT bị chặn bởi Permissions-Policy** | 🔍 **Đang tìm** |
| [#46818](https://github.com/openclaw/openclaw/issues/46818) | **Dấu chấm than màu trắng ngẫu nhiên trên Web UI** | 🔍 **Đang tìm** |

---

## 6. Yêu cầu tính năng và tín hiệu lộ trình

### Yêu cầu có tiềm năng cao được đưa vào phiên bản tiếp theo

| Issue/PR | Yêu cầu | Cường độ tín hiệu | Cơ sở đánh giá |
|:---|:---|:---:|:---|
| [#29053](https://github.com/openclaw/openclaw/issues/29053) | **Hỗ trợ gốc cho MCP Client**：Kết nối với máy chủ MCP bên ngoài | ⭐⭐⭐⭐⭐ | 11 bình luận, 10 👍; MCP trở thành tiêu chuẩn ngành, hệ thống công cụ tự có của OpenClaw cần tương thích |
| [#54750](https://github.com/openclaw/openclaw/pull/54750) | **Hệ thống bộ nhớ tình huống (bộ nhớ hải mã lấy cảm hứng từ CLS)** | ⭐⭐⭐⭐⭐ | PR mới hôm nay, triển khai đầy đủ bộ nhớ sự kiện lấp đầy khoảng trống bộ nhớ dài hạn của agent |
| [#54562](https://github.com/openclaw/openclaw/pull/54562) | **Bộ định tuyến mô hình: Lựa chọn phân lớp tự động dựa trên độ phức tạp nhiệm vụ** | ⭐⭐⭐⭐☆ | PR mới hôm nay, chế độ "Fast-Fail + Escalate" giảm chi phí token |
| [#46729](https://github.com/openclaw/openclaw/pull/46729) | **Loại tải `exec` Cron**：Thực thi tập lệnh không có LLM | ⭐⭐⭐⭐☆ | Giảm chi phí token cho tác vụ định kỳ, yêu cầu hiệu suất rõ ràng |
| [#32495](https://github.com/openclaw/openclaw/issues/32495) | **Chuyển đổi nhiều agent Control UI** | ⭐⭐⭐⭐☆ | 7 bình luận, 4 👍; PR #54724 đã giải quyết một phần vấn đề lựa chọn mô hình |
| [#18237](https://github.com/openclaw/openclaw/issues/18237) | **Callback exec không đồng bộ**：Truyền kết quả khi tiến trình thoát | ⭐⭐⭐☆☆ | 8 bình luận, 5 👍; khả năng quan trọng cho chuỗi công cụ chạy dài hạn |

### Suy luận lộ trình

- **Hệ thống bộ nhớ**: Bộ nhớ tình huống trong PR #54750 + yêu cầu tối ưu hóa ngân sách token trong #9157, cho thấy quản lý bộ nhớ sẽ là chủ đề cốt lõi của Q2
- **Tối ưu hóa chi phí**: Bộ định tuyến mô hình và exec cron cho thấy nhu cầu cấp thiết của cộng đồng về hiệu quả token
- **Tiêu chuẩn mở**: Hỗ trợ MCP và tăng cường cổng tương thích OpenAI, cho thấy OpenClaw đang chuyển từ "hệ sinh thái đóng" sang "cơ sở hạ tầng mở"

---

## 7. Tóm tắt phản hồi người dùng

### Điểm đau thực tế (từ bình luận Issues)

> *"Sau khi nâng cấp, giao diện người dùng bị lỗi"* — [#52823](https://github.com/openclaw/openclaw/issues/52823)
> **Kịch bản**: Màn hình trắng Control UI sau khi cập nhật tự động trong môi trường sản xuất, yêu cầu xây dựng thủ công tài nguyên frontend
> **Tâm trạng**: Trải nghiệm nâng cấp không đáng tin cậy, thiếu cơ chế quay lui

> *"Token OAuth Qwen thường xuyên hết hạn, mỗi ngày cần xác thực lại"* — [#36982](https://github.com/openclaw/openclaw/issues/36982)
> **Kịch bản**: Người dùng Trung Quốc sử dụng nhà cung cấp Qwen-Portal, độ ổn định xác thực giảm sút kể từ ngày 2026.3.2
> **Tâm trạng**: Nghi ngờ về lời hứa chất lượng hỗ trợ nhà cung cấp bên thứ ba

> *"Việc truyền tệp Workspace lãng phí 93,5% ngân sách token"* — [#9157](https://github.com/openclaw/openclaw/issues/9157)
> **Kịch bản**: Tiêm lại lời nhắc hệ thống 35.600 token lặp đi lặp lại mỗi vòng hội thoại
> **Tâm trạng**: Người dùng nhạy cảm về chi phí (đặc biệt là các nhà cung cấp tính phí theo lượng như OpenRouter) chịu áp lực lớn

> *"Không thể cài đặt kỹ năng brew trong Docker, nhưng hình ảnh chính thức đề xuất triển khai Docker"* — [#14593](https://github.com/openclaw/openclaw/issues/14593)
> **Kịch bản**: Theo dõi tài liệu chính thức để triển khai, nhưng gặp lỗi trong giai đoạn onboarding
> **Tâm trạng**: Tài liệu và triển khai không đồng bộ, chiến lược container hóa không rõ ràng

### Điểm hài lòng

- Mở rộng cổng tương thích OpenAI (v2026.3.24) nhận được sự công nhận tích cực từ những người đóng góp ( @vincentkoc )
- Khởi động phát triển ứng dụng khách gốc Linux đáp ứng các yêu cầu cộng đồng lâu dài

---

## 8. Tồn đọng cần xử lý

### Issues có giá trị cao, chưa được xử lý trong thời gian dài (>30 ngày, tương tác cao)

| Issue | Số ngày | Tương tác | Rủi ro |
|:---|:---:|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Ứng dụng gốc Linux/Windows | 84 | 114 | ⚠️ **Đang giảm nhẹ** - PR #53905 đã bắt đầu nhưng Windows vẫn chưa có kế hoạch |
| [#9157](https://github.com/openclaw/openclaw/issues/9157) Lãng phí token | 50 | 26 | 🔴 **Cao** - Yêu cầu cốt lõi tối ưu hóa chi phí, không có người sở hữu rõ ràng |
| [#18237](https://github.com/openclaw/openclaw/issues/18237) Callback exec không đồng bộ | 38 | 13 | 🟡 **Trung bình** - Khả năng quan trọng cho chuỗi công cụ chạy dài hạn |
| [#15849](https://github.com/openclaw/openclaw/issues/15849) Doctor đánh giá sai dịch vụ không phải cổng | 41 | 9 | 🟢 **Thấp** - Vấn đề trải nghiệm nhà phát triển |

### Đề xuất người bảo trì quan tâm

1. **Quản lý token OAuth**: #26322, #52037, #53317, #36982 tạo thành một cụm mô hình lỗi, đề xuất thiết lập một sprint sửa chữa đặc biệt
2. **Độ ổn định của SDK plugin**: Vấn đề tương thích phiên bản được tiết lộ trong #52885 cần thiết lập kiểm tra tự động
3. **Chương trình chuyên biệt tối ưu hóa chi phí**: Vấn đề lãng phí token trong #9157 ảnh hưởng đến tỷ lệ giữ chân người dùng trả phí, đề xuất ưu tiên sắp xếp lịch trình

---

*Báo cáo này được tạo dựa trên dữ liệu công khai của kho lưu trữ chính thức OpenClaw | Thời gian dữ liệu kết thúc: 2026-03-26*

---

## Phân tích so sánh hệ sinh thái ngang

# Báo cáo phân tích ngang hệ sinh thái trợ lý AI cá nhân | 2026-03-26

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái mã nguồn mở trợ lý AI cá nhân/đại lý thông minh đang trải qua **bước nhảy vọt từ "phạm vi chức năng" sang "sẵn sàng cho sản xuất"**. Các dự án hàng đầu (OpenClaw, CoPaw, PicoClaw) xử lý trung bình hơn 200 thay đổi mã mỗi ngày, mâu thuẫn cốt lõi chuyển từ "có thể chạy không" sang "có thể chạy ổn định không" — lưu trữ hội thoại, quản lý token OAuth, cách ly đa người dùng trở thành các điểm đột phá chung. Tín hiệu thương mại hóa tăng cường đáng kể (LobsterAI ra mắt hệ thống trả phí, IronClaw thúc đẩy kiến trúc SaaS đa người dùng), đồng thời **giao thức MCP** đang phát triển từ một tính năng biên thành tiêu chuẩn hệ sinh thái. Các sự cố bảo mật chuỗi cung ứng (LiteLLM bị cô lập) đẩy nhanh quá trình chuyển đổi kiến trúc "gỡ bỏ phụ thuộc", việc triển khai gốc Rust/Go thay thế lớp keo Python trở thành xu hướng lựa chọn công nghệ mới.

---

## 2. So sánh mức độ hoạt động của từng dự án

| Dự án | Issues (24h) | PRs (24h) | Phát hành phiên bản | Đánh giá sức khỏe |
|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 (432 hoạt động/68 đóng) | 500 (354 chờ hợp nhất/146 đã hợp nhất) | 3 phiên bản bao gồm v2026.3.24 | 🟢 **Hoạt động cực cao** - Điểm yếu môi trường sản xuất tập trung lộ diện, sửa lỗi phản hồi dày đặc |
| **PicoClaw** | 170 (158 hoạt động/12 đóng) | 243 (208 chờ hợp nhất/35 đã hợp nhất) | v0.2.4 | 🟢 **Hoạt động cực cao** - Cột mốc chức năng đa phương tiện, tỷ lệ đóng 93% hiếm có trong ngành |
| **LobsterAI** | 37 (34 hoạt động/3 đóng) | 50 (45 chờ hợp nhất/5 đã hợp nhất) | 2026.3.25 | 🟡 **Áp lực hoạt động** - Thương mại hóa tăng tốc nhưng nợ ổn định hiện rõ |
| **CoPaw** | 50 (41 hoạt động/9 đóng) | 49 (20 chờ hợp nhất/29 đã hợp nhất) | v0.2.0.post1 | 🟡 **Đau khổ khi lặp lại** - Nâng cấp v0.2.0 gây ra các vấn đề điều chỉnh tập trung |
| **NanoBot** | 18 (13 hoạt động/5 đóng) | 51 (36 chờ hợp nhất/15 đã hợp nhất) | Không | 🟡 **Đối phó khủng hoảng chuỗi cung ứng** - Giai đoạn tái cấu trúc kiến trúc sau khi xóa LiteLLM |
| **NanoClaw** | 37 (11 hoạt động/26 đóng) | 50 (21 chờ hợp nhất/29 đã hợp nhất) | Không | 🟢 **Thúc đẩy mạnh mẽ** - Hình ảnh Docker chính thức hạ cánh giảm ngưỡng triển khai |
| **Zeroclaw** | 39 (33 hoạt động/6 đóng) | 50 (35 chờ hợp nhất/15 đã hợp nhất) | Không | 🟡 **Giai đoạn đơn giản hóa kiến trúc** - Xóa PG gây ra dọn dẹp nợ kỹ thuật quy mô lớn |
| **IronClaw** | 10 (9 hoạt động/1 đóng) | 50 (14 chờ hợp nhất/36 đã hợp nhất) | Không | 🟢 **Chạy nước rút cấp doanh nghiệp** - Động cơ v2 + cách ly đa người dùng đi vào giai đoạn cuối |
| **ZeptoClaw** | 9 (0 hoạt động/9 đóng) | 30 (8 chờ hợp nhất/22 đã hợp nhất) | Không | 🟢 **Lặp lại chất lượng cao** - Tỷ lệ đóng 100%, cột mốc công cụ trình duyệt |
| **TinyClaw** | 0 | 4 (1 chờ hợp nhất/3 đã hợp nhất) | Không | 🟢 **Hiện đại hóa kiến trúc** - Shell → Node.js tái cấu trúc hoàn tất |
| **NullClaw** | 3 (1 hoạt động/2 đóng) | 3 (2 chờ hợp nhất/1 đã hợp nhất) | Không | 🟡 **Hoạt động trung bình** - Xuất hiện nhu cầu tích hợp WeChat và khả năng thị giác |
| **Moltis** | 3 (1 hoạt động/2 đóng) | 3 (2 chờ hợp nhất/1 đã hợp nhất) | Không | 🟡 **Tập trung vào cơ sở hạ tầng** - Hiện đại hóa phụ thuộc Rust chiếm ưu thế |
| **EasyClaw** | 0 | 0 | Không | 🔴 **Đình trệ** - Hoạt động bằng không trong 24 giờ |

---

## 3. Định vị của OpenClaw trong hệ sinh thái

### Lợi thế cốt lõi
| Chiều | Biểu hiện cụ thể | Tham chiếu so sánh |
|:---|:---|:---|
| **Quy mô cộng đồng** | 500 Issues/PRs hoạt động hàng ngày = 2-3 lần tổng cộng của các dự án xếp thứ 2-4 | PicoClaw 170/243, LobsterAI 37/50 |
| **Hoàn chỉnh hệ sinh thái** | Duy nhất bao phủ ứng dụng khách chính thức cho tất cả các nền tảng macOS/iOS/Android/Linux/Windows | NanoClaw mới bắt đầu Linux, PicoClaw thiếu Windows |
| **Chiến lược cổng** | Cổng tương thích OpenAI được củng cố liên tục với tư cách là **khả năng cấp cơ sở hạ tầng** | NanoBot buộc phải xây dựng lại sau khi xóa LiteLLM, IronClaw triển khai gốc Rust |
| **Sự sẵn sàng cho doanh nghiệp** | Lưu trữ hội thoại, quản lý token OAuth, cộng tác đa agent đều được triển khai sâu sắc | CoPaw đa agent vừa giải quyết cách ly cấu hình, Zeroclaw xóa PG giảm cấp SQLite |

### Sự khác biệt về lộ trình kỹ thuật
- **So với dòng Rust (IronClaw/Zeroclaw/Moltis)**：OpenClaw kiên trì với toàn bộ ngăn xếp Node.js/TypeScript, **đánh đổi hiệu quả phát triển lấy hiệu suất thời gian chạy**, phù hợp với lặp lại nhanh chóng và hệ sinh thái plugin
- **So với dòng nhẹ (TinyClaw/NanoClaw)**：OpenClaw chọn **ưu tiên tính đầy đủ của chức năng**, chấp nhận mức sử dụng tài nguyên cao hơn để đổi lấy trải nghiệm sẵn sàng sử dụng ngay lập tức
- **So với trường phái thương mại (LobsterAI)**：OpenClaw duy trì lộ trình **mã nguồn mở thuần túy**, các tính năng trả phí do cộng đồng/bên thứ ba thực hiện

### So sánh quy mô cộng đồng
```
OpenClaw  500/500  (Cơ sở 100%)
PicoClaw  170/243  (34% / 49%)
CoPaw      50/49   (10% / 10%)
NanoBot    18/51   (4%  / 10%)
Các dự án khác   <40     (<8%)
```

---

## 4. Hướng công nghệ được quan tâm chung

| Hướng công nghệ | Dự án liên quan | Yêu cầu cụ thể | Mức độ khẩn cấp |
|:---|:---|:---|:---:|
| **Hỗ trợ gốc giao thức MCP** | OpenClaw #29053, NanoBot #2484, IronClaw #1631, PicoClaw tái cấu trúc gọi công cụ | Từ "có thể kết nối" đến "dễ dàng gỡ lỗi" — xác minh cấu hình, khám phá công cụ, chẩn đoán lỗi | 🔴 Rất cao |
| **Lưu trữ hội thoại/bộ nhớ** | OpenClaw #54765, NanoClaw #1256, CoPaw #2289, IronClaw #1650 | Trạng thái giữ nguyên qua các lần khởi động lại, hiệu quả truy xuất bộ nhớ dài hạn, quản lý ngân sách token | 🔴 Rất cao |
| **Quản lý token OAuth** | OpenClaw #26322/#52037/#53317, xác thực chế độ kép NanoClaw, Zeroclaw #4703 | Ghi vào đĩa khi làm mới, điều kiện chạy đua, cách ly đa người dùng | 🔴 Rất cao |
| **Kiến trúc đa Agent** | OpenClaw dọn dẹp agent con bị cô lập, CoPaw #2283, động cơ v2 IronClaw, NanoBot #2013 | Cách ly cấu hình, giao tiếp đồng thời, quản lý vòng đời | 🟡 Cao |
| **Triển khai cục bộ/riêng tư** | Ứng dụng khách gốc Linux OpenClaw, NanoClaw #1331 Ollama, TinyClaw khởi động không cần chứng chỉ, IronClaw đa người dùng | Giảm phụ thuộc vào đám mây, yêu cầu tuân thủ nghiêm ngặt, nhạy cảm về chi phí | 🟡 Cao |
| **Độ ổn định kênh** | OpenClaw Discord/Telegram, CoPaw Lark/XiaoYi, ZeptoClaw Telegram, NullClaw WeChat | Khử trùng trùng lặp tin nhắn, đồng bộ trạng thái, điều chỉnh IM doanh nghiệp | 🟡 Cao |
| **Prompt Caching** | NanoBot #2463, nén ngữ cảnh IronClaw, tối ưu hóa cổng LobsterAI #870 | Giảm chi phí API, tăng tốc độ phản hồi | 🟢 Trung bình |

---

## 5. Phân tích định vị khác biệt

| Dự án | Trọng tâm chức năng cốt lõi | Hồ sơ người dùng mục tiêu | Đặc điểm kiến trúc kỹ thuật |
|:---|:---|:---|:---|
| **OpenClaw** | Ứng dụng khách đa nền tảng + Cổng tương thích OpenAI + Cộng tác đa agent | **Người dùng siêu cấp cá nhân**, nhóm nhỏ, kịch bản đa nền tảng | Đơn thể Node.js, mở rộng theo plugin, nhấn mạnh "sẵn sàng sử dụng ngay" |
| **IronClaw** | Đa người dùng cấp doanh nghiệp + Hiệu suất Rust + Tích hợp blockchain NEAR | **Nhà phát triển SaaS**, CNTT doanh nghiệp, kịch bản Web3 | Toàn bộ ngăn xếp Rust, bảo mật thời gian biên dịch, mô hình thực thi tái cấu trúc động cơ v2 |
| **PicoClaw** | Tương tác đa phương tiện (giọng nói/hình ảnh) + Triển khai nhúng | **Nhà sáng tạo phần cứng**, tính toán biên, người dùng tiếng Trung | Kết hợp Python/Node, liên kết hệ sinh thái Sipeed, trải nghiệm phát triển tải lại nóng |
| **CoPaw** | Sắp xếp trực quan đa tác nhân + Kênh bản địa Trung Quốc | **Nhà phát triển trong nước**, tự động hóa doanh nghiệp, tích hợp IM | Chủ yếu là Python, nền tảng học thuật AgentScope, điều chỉnh kênh nhanh chóng |
| **NanoBot** | Kết nối trực tiếp đa nhà cung cấp sau khi gỡ bỏ LiteLLM | **Người dùng nhạy cảm về chi phí**, người quan tâm bảo mật chuỗi cung ứng | Giai đoạn tái cấu trúc khẩn cấp, hướng kiến trúc chưa xác định |
| **Zeroclaw** | Tối ưu hóa bộ nhớ + Biên dịch theo cờ chức năng + Quyền riêng tư Matrix | **Người đam mê quyền riêng tư**, người tự lưu trữ, môi trường tài nguyên thấp | Rust, SQLite nhúng, tinh giản mạnh mẽ (vừa xóa PG) |
| **TinyClaw** | Kiến trúc cực kỳ tối giản + CLI đa nền tảng | **Chuỗi công cụ nhà phát triển**, người dùng theo kịch bản | Thời gian chạy thuần Node.js, không phụ thuộc shell |
| **LobsterAI** | Vòng lặp thương mại hóa + Tích hợp hệ sinh thái NetEase | **Người dùng C-side trong nước**, dịch vụ giá trị gia tăng trả phí | Electron + máy chủ, kết hợp các thành phần đóng |
| **ZeptoClaw** | Tích hợp công cụ trình duyệt, trải nghiệm Telegram cực cao | **Luồng công việc tự động hóa**, người dùng IM nặng | TypeScript, tích hợp agent-browser, kiểm soát chất lượng ngăn xếp PR |

---

## 6. Mức độ phổ biến và độ trưởng thành của cộng đồng

### Giai đoạn lặp lại nhanh (Feature Rush)
| Dự án | Đặc điểm | Rủi ro |
|:---|:---|:---|
| **CoPaw** | Sau phiên bản lớn v0.2.0, sửa lỗi dày đặc, kiến trúc đa agent đang tái cấu trúc | Lỗi kết nối khi nâng cấp, cấu hình lộn xộn, nợ ổn định kênh |
| **NanoBot** | Tái cấu trúc nhà cung cấp sau khi xóa LiteLLM, tích hợp khẩn cấp AWS Bedrock/Step Fun | Suy giảm chức năng, vấn đề tương thích, biến động niềm tin cộng đồng |
| **Zeroclaw** | Di chuyển PG→SQLite, tái cấu trúc hệ thống cờ chức năng | Mất người dùng triển khai quy mô lớn, thiếu chức năng doanh nghiệp |

### Giai đoạn củng cố chất lượng (Stabilization)
| Dự án | Đặc điểm | Chỉ số quan trọng |
|:---|:---|:---|
| **OpenClaw** | Điểm yếu môi trường sản xuất tập trung lộ diện, hệ thống hội thoại/OAuth được củng cố có hệ thống | Tỷ lệ đóng 13,6% (68/500), cần tăng cường thông lượng sửa lỗi |
| **PicoClaw** | Sửa lỗi hồi quy lưu trữ cấu hình sau cột mốc đa phương tiện | Tỷ lệ đóng 93,4% hàng đầu ngành, phản hồi sửa lỗi nóng v0.2.4 |
| **IronClaw** | Động cơ v2 + cách ly đa người dùng tiến vào xem xét cuối cùng | Tỷ lệ hợp nhất PR 36/50 là 72%, chạy nước rút sẵn sàng cho doanh nghiệp |

### Giai đoạn hiện đại hóa kiến trúc (Refactoring)
| Dự án | Đặc điểm | Kết quả |
|:---|:---|:---|
| **TinyClaw** | Thay thế hoàn toàn Shell → Node.js, hỗ trợ gốc Docker | Giải quyết cơ bản vấn đề tương thích đa nền tảng, sẵn sàng hỗ trợ Windows |
| **ZeptoClaw** | Tích hợp công cụ trình duyệt, hoàn chỉnh trải nghiệm Telegram | Chuyển đổi từ công cụ hội thoại sang Agent thực thi |

### Giai đoạn khám phá vị trí hệ sinh thái (Positioning)
| Dự án | Đặc điểm | Giả thuyết cần xác minh |
|:---|:---|:---|
| **NullClaw** | Tích hợp WeChat, nhu cầu đường ống thị giác xuất hiện | Thị trường Châu Á - Thái Bình Dương có thể trở thành điểm khác biệt |
| **Moltis** | Hiện đại hóa phụ thuộc Rust, nhu cầu Local Thinking | Lộ trình ưu tiên hiệu suất có thể thu hút người dùng doanh nghiệp |
| **LobsterAI** | Phiên bản thương mại hóa đầu tiên, ra mắt hệ thống gói bổ sung | Liệu mô hình mã nguồn mở + giá trị gia tăng có thể hoạt động được không |

---

## 7. Tín hiệu đáng chú ý về xu hướng

### Tín hiệu 1: Giao thức MCP từ "chức năng" sang "cơ sở hạ tầng"
> **Bằng chứng**: OpenClaw #29053 (phiếu bầu cao nhất 11👍 cho chức năng), NanoBot khẩn cấp đánh giá #2484, IronClaw vấn đề cắt bớt lệnh công cụ #1631

**Ý nghĩa ngành**: Giao thức Ngữ cảnh Mô hình đang trở thành tiêu chuẩn thực tế để tương tác đại lý, nhưng khoảng cách từ "có thể kết nối" đến "dễ dàng gỡ lỗi" là rất lớn. Nhà phát triển cần chú ý:
- **Khám phá và quản trị máy chủ MCP** (ai được phép kết nối, khả năng tương thích phiên bản)
- Thiếu **chuỗi công cụ gỡ lỗi** (xác minh cấu hình, theo dõi lệnh gọi, chẩn đoán lỗi)

### Tín hiệu 2: Bảo mật chuỗi cung ứng thúc đẩy "gỡ bỏ phụ thuộc"
> **Bằng chứng**: NanoBot xóa LiteLLM (cô lập PyPI), triển khai gốc Rust IronClaw, OpenClaw cổng tự phát triển

**Ý nghĩa ngành**: **Kiểm soát chủ động** các phụ thuộc cốt lõi (định tuyến LLM, xác thực, SDK kênh) trở thành ưu tiên kiến trúc. Chỉ số mới để đánh giá sức khỏe dự án:
- Số lượng phụ thuộc bên ngoài trong các đường dẫn cốt lõi
- Rủi ro khóa nhà cung cấp (phụ thuộc sâu vào API của một nhà cung cấp đám mây duy nhất)

### Tín hiệu 3: Tối ưu hóa chi phí token từ "biên" sang "cốt lõi"
> **Bằng chứng**: OpenClaw #9157 (lãng phí 93,5% token), NanoBot #2463 (prompt caching lỗi), nén ngữ cảnh IronClaw #1631, tối ưu hóa cổng LobsterAI #870 (khởi động lại cổng)

**Ý nghĩa ngành**: Khi quy mô triển khai sản xuất tăng lên, **kỹ thuật chi phí** trở thành năng lực cạnh tranh cốt lõi. Hướng công nghệ:
- Chiến lược bộ nhớ đệm phân lớp (tách biệt lời nhắc hệ thống/lịch sử hội thoại/ngữ cảnh RAG)
- Định tuyến mô hình (nhiệm vụ đơn giản → mô hình nhẹ, nhiệm vụ phức tạp → mô hình suy luận)
- Cơ chế nén và tóm tắt ngữ cảnh

### Tín hiệu 4: Đa Agent từ "trình diễn" sang "sản xuất"
> **Bằng chứng**: OpenClaw dọn dẹp agent con bị cô lập, sửa lỗi cô lập cấu hình CoPaw #2283, động cơ thực thi thống nhất v2 IronClaw, NanoBot Nano Team Mode #2013

**Ý nghĩa ngành**: **Cách ly, khả năng quan sát, kiểm soát miền lỗi** của cộng tác đa Agent trở thành yêu cầu bắt buộc. Nguyên tắc thiết kế kiến trúc:
- Cách ly không gian tên cho cấu hình/trạng thái/chứng chỉ
- Giao thức rõ ràng cho giao tiếp giữa các Agent (không phải trạng thái chia sẻ ngầm)
- Ngắt mạch và giảm cấp lỗi Agent đơn lẻ

### Tín hiệu 5: Điều chỉnh kênh và mô hình Trung Quốc trở thành chiến trường khác biệt
> **Bằng chứng**: CoPaw XiaoYi/Lark/WeChat, NullClaw nhu cầu WeChat #714, LobsterAI DingTalk, NanoBot Step Fun/Qwen, PicoClaw WeChat doanh nghiệp

**Ý nghĩa ngành**: Mức độ điều chỉnh **hệ sinh thái IM địa phương + mô hình lớn trong nước** trở thành yếu tố cạnh tranh quan trọng tại khu vực Châu Á - Thái Bình Dương. Thách thức công nghệ:
- **Hàng đợi tin nhắn không đồng bộ** và **đồng bộ trạng thái** của WeChat doanh nghiệp/DingTalk/Lark
- **Sự khác biệt về định dạng gọi công cụ** của các mô hình trong nước (Qwen, Step Fun, GLM)
- Tích hợp **lọc trước an toàn nội dung và tuân thủ**

---

*Thời gian tạo báo cáo: 2026-03-26 | Nguồn dữ liệu: 12 dự án mã nguồn mở Hoạt động công khai GitHub*

---

## Báo cáo chi tiết dự án cùng cuộc đua

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Nhật báo hoạt động dự án NanoBot | 2026-03-26

---

## 1. Tóm tắt hôm nay

NanoBot hôm nay duy trì **mức độ hoạt động cao**, tạo ra 18 **cập nhật Issues** (13 hoạt động/mới mở, 5 đã đóng) và 51 **cập nhật PR** (36 chờ hợp nhất, 15 đã hợp nhất/đóng) trong 24 giờ qua. Cộng đồng tập trung vào **ứng phó khủng hoảng bảo mật chuỗi cung ứng** (giải pháp thay thế sau khi LiteLLM bị cô lập), **sửa lỗi tương thích đa nhà cung cấp** (xung đột tham số max_tokens/max_completion_tokens) và **tối ưu hóa trải nghiệm người dùng** (tái cấu trúc kênh Discord, chống rung tin nhắn). Không có phiên bản mới nào được phát hành, nhưng tốc độ hợp nhất mã ổn định, kiến trúc cốt lõi đang dần phát triển theo hướng "loại bỏ LiteLLM".

---

## 2. Phát hành phiên bản

**Không có phiên bản mới nào được phát hành**

---

## 3. Tiến độ dự án

### PR quan trọng đã được hợp nhất/đóng hôm nay

| PR | Tác giả | Đóng góp cốt lõi | Ý nghĩa dự án |
|:---|:---|:---|:---|
| [#2472](https://github.com/HKUDS/nanobot/pull/2472) | ZouR-Ma | **Tích hợp nhà cung cấp Step Fun (Giai Thừa Tinh Thần)** | Đáp ứng nhu cầu mô hình ngôn ngữ lớn trong nước, hoàn thiện hỗ trợ hệ sinh thái tiếng Trung |
| [#2477](https://github.com/HKUDS/nanobot/pull/2477) | Re-bin | **Hỗ trợ múi giờ có thể cấu hình** | Giải quyết sự mơ hồ trong lịch trình đa múi giờ, nâng cao độ tin cậy trong các kịch bản cấp doanh nghiệp |
| [#2478](https://github.com/HKUDS/nanobot/pull/2478) | chengyongru | **Cơ chế thử lại với hàm mũ giảm dần gửi tin nhắn** | Tăng cường độ ổn định kênh, giải quyết các vấn đề rung mạng như Telegram |
| [#1610](https://github.com/HKUDS/nanobot/pull/1610) | wb213 | **Chuyển đổi kiểu dữ liệu tham số công cụ tự động** | Giảm tỷ lệ lỗi gọi công cụ LLM, nâng cao tỷ lệ thành công thực thi agent |
| [#1680](https://github.com/HKUDS/nanobot/pull/1680) | rudy-of-the-corner | **Nhà cung cấp Mistral + dịch vụ ghi âm phổ quát** | Mở rộng khả năng âm thanh, giảm sự phụ thuộc vào một nhà cung cấp duy nhất |

**Đánh giá tiến độ tổng thể**: Các hợp nhất hôm nay tập trung vào **kỹ thuật độ tin cậy** (thử lại, an toàn kiểu, múi giờ) và **mở rộng hệ sinh thái** (Step Fun, Mistral), dự án đang chuyển từ "phạm vi chức năng" sang giai đoạn "sẵn sàng cho sản xuất".

---

## 4. Điểm nóng cộng đồng

### 🔥 Mức độ thảo luận cao nhất

| Chủ đề | Loại | Số lượng bình luận | Yêu cầu cốt lõi |
|:---|:---|:---:|:---|
| [#2208](https://github.com/HKUDS/nanobot/issues/2208) | Issue | **8** | Vấn đề tin nhắn trùng lặp trên Telegram Android, liên quan đến hồi quy nâng cấp phiên bản |
| [#2456](https://github.com/HKUDS/nanobot/issues/2456) | Issue | **7** | `nanobot onboard` gây khóa hệ thống môi trường Linux đa người dùng và khóa SSH — **Chặn triển khai doanh nghiệp** |
| [#2443](https://github.com/HKUDS/nanobot/issues/2443) | Issue | **6** | **Rủi ro bảo mật chuỗi cung ứng của LiteLLM bị cô lập (đánh cắp thông tin đăng nhập)**, cảnh báo bảo mật chuỗi cung ứng |
| [#2463](https://github.com/HKUDS/nanobot/issues/2463) | Issue | **6** | Lỗi kiến trúc: nanobot không giữ tiền tố prompt gốc, xung đột với caching prompt của OpenAI |

### Issues thảo luận sâu

- **Vấn đề khóa #2456**: Người dùng báo cáo `nanobot onboard` gây đóng băng hệ thống trên máy chủ dùng chung, không thể kết nối SSH. Đây là **lỗi chí mạng trong môi trường sản xuất**, ảnh hưởng trực tiếp đến ý định áp dụng của doanh nghiệp.
- **Khủng hoảng LiteLLM #2443**: PyPI đã gắn nhãn `litellm` là "quarantined" (có nguy cơ đánh cắp thông tin đăng nhập), NanoBot đã khẩn cấp xóa phụ thuộc ([#2493](https://github.com/HKUDS/nanobot/issues/2493) xác nhận `litellm_provider.py` đã bị xóa), nhưng điều này gây ra các vấn đề tương thích liên hoàn (LangSmith bị gián đoạn, AWS Bedrock cần triển khai lại).

---

## 5. Lỗi và độ ổn định

| Mức độ nghiêm trọng | Issue | Mô tả | Trạng thái PR sửa lỗi |
|:---|:---|:---|:---:|
| 🔴 **Nghiêm trọng** | [#2456](https://github.com/HKUDS/nanobot/issues/2456) | `onboard` lệnh gây khóa hệ thống + khóa SSH | ❌ Không có |
| 🔴 **Nghiêm trọng** | [#2443](https://github.com/HKUDS/nanobot/issues/2443) | Lỗ hổng bảo mật chuỗi cung ứng LiteLLM (đánh cắp thông tin đăng nhập) | ✅ Đã xóa phụ thuộc |
| 🟡 **Cao** | [#2465](https://github.com/HKUDS/nanobot/issues/2465) | RoutingProvider mã hóa cứng LiteLLMProvider, phá vỡ nhà cung cấp OAuth (OpenAI Codex) | ❌ Không có |
| 🟡 **Cao** | [#2476](https://github.com/HKUDS/nanobot/issues/2476) | Xung đột tham số `max_tokens`/`max_completion_tokens` (VolcEngine, v.v.) | ✅ [#2491](https://github.com/HKUDS/nanobot/pull/2491) |
| 🟡 **Cao** | [#2440](https://github.com/HKUDS/nanobot/issues/2440) | Khóa bộ nhớ cache `openai_codex` thay đổi mỗi vòng, phá vỡ hiệu quả bộ nhớ cache | ❌ Không có |
| 🟡 **Cao** | [#2463](https://github.com/HKUDS/nanobot/issues/2463) | Không giữ tiền tố prompt gốc, xung đột với quy cách caching prompt OpenAI | ❌ Không có |
| 🟢 **Trung bình** | [#2469](https://github.com/HKUDS/nanobot/issues/2469) | Lỗi gọi Qwen-3.5 (định dạng JSON `function.arguments` sai) | ❌ Không có |
| 🟢 **Trung bình** | [#2493](https://github.com/HKUDS/nanobot/issues/2493) | Tích hợp LangSmith bị gián đoạn (sau khi xóa LiteLLM) | ❌ Không có |

---

## 6. Yêu cầu tính năng và tín hiệu lộ trình

| Yêu cầu | Issue/PR | Đánh giá tính khả thi | Tỷ lệ đưa vào |
|:---|:---|:---|:---:|
| **Lệnh dấu gạch chéo `/skill`** | [#2489](https://github.com/HKUDS/nanobot/issues/2489) + [#2488](https://github.com/HKUDS/nanobot/pull/2488) | PR đã được gửi, triển khai kích hoạt kỹ năng rõ ràng cho người dùng | ⭐⭐⭐⭐⭐ |
| **Tái cấu trúc kênh Discord** | [#2486](https://github.com/HKUDS/nanobot/pull/2486) | Chuyển sang `discord.py`, giảm gánh nặng bảo trì | ⭐⭐⭐⭐⭐ |
| **Hỗ trợ gốc AWS Bedrock** | [#2485](https://github.com/HKUDS/nanobot/pull/2485) | Bổ sung khoảng trống nhà cung cấp đám mây sau khi xóa LiteLLM | ⭐⭐⭐⭐⭐ |
| **Giảm rung tin nhắn (chuyển tiếp + hợp nhất tin nhắn đột ngột)** | [#2492](https://github.com/HKUDS/nanobot/pull/2492) | Giải quyết điểm yếu trải nghiệm người dùng Telegram | ⭐⭐⭐⭐☆ |
| **Bỏ qua tác vụ trống Heartbeat** | [#2482](https://github.com/HKUDS/nanobot/pull/2482) | Tiết kiệm chi phí Token, tiếng nói người dùng cao | ⭐⭐⭐⭐☆ |
| **Lớp cầu nối plugin OpenClaw** | [#2484](https://github.com/HKUDS/nanobot/issues/2484) | Yêu cầu cấp độ kiến trúc, cần đánh giá khả năng tương thích với hệ thống plugin hiện có | ⭐⭐⭐☆☆ |
| **Chế độ Nano Team (cộng tác đa Agent)** | [#2013](https://github.com/HKUDS/nanobot/pull/2013) | Tính năng thử nghiệm, hướng phát triển dài hạn | ⭐⭐⭐☆☆ |

---

## 7. Tóm tắt phản hồi người dùng

### 😤 Điểm yếu cốt lõi

> *"Sau khi LiteLLM bị cô lập, toàn bộ giám sát LangSmith của chúng tôi đã bị gián đoạn"* — [#2493](https://github.com/HKUDS/nanobot/issues/2493)

> *"Lệnh nanobot onboard đã khóa máy chủ phát triển dùng chung của chúng tôi, ngay cả SSH cũng không kết nối được"* — [#2456](https://github.com/HKUDS/nanobot/issues/2456)

> *"Khóa bộ nhớ cache prompt OpenAI hoàn toàn vô dụng vì khóa bộ nhớ cache prompt thay đổi mỗi vòng hội thoại"* — [#2463](https://github.com/HKUDS/nanobot/issues/2463)

### ✅ Phản hồi tích cực

- Phản hồi nhanh chóng về việc tích hợp Step Fun (PR [#2472](https://github.com/HKUDS/nanobot/pull/2472) đã hợp nhất hôm nay)
- Lặp lại liên tục kênh WeChat (điều chỉnh cho plugin 1.0.3 trong [#2429](https://github.com/HKUDS/nanobot/issues/2429))

### 📊 Hiểu biết về kịch bản sử dụng

| Kịch bản | Mật độ phản hồi | Yêu cầu chính |
|:---|:---|:---|
| Triển khai máy chủ dùng chung cho nhiều người dùng doanh nghiệp | Cao | Cách ly tiến trình, giới hạn tài nguyên, chạy không cần đặc quyền |
| Tích hợp mô hình lớn trong nước | Trung-Cao | Hỗ trợ gốc Step Fun, Qwen, DashScope |
| Tối ưu hóa chi phí | Trung bình | Prompt caching, bỏ qua tác vụ trống Heartbeat |
| Giám sát khả năng quan sát | Trung bình | Giải pháp thay thế LangSmith, Langfuse |

---

## 8. Tồn đọng cần xử lý

### ⚠️ Cần người bảo trì quan tâm

| Issue/PR | Thời gian tạo | Vấn đề | Rủi ro |
|:---|:---|:---|:---|
| [#144](https://github.com/HKUDS/nanobot/issues/144) | 2026-02-05 | Lỗi logic cấu hình Gemini API, bắt buộc biến môi trường `gemini_api_key` | Ảnh hưởng đến việc áp dụng AI của Google, **không có phản hồi trong 49 ngày** |
| [#1861](https://github.com/HKUDS/nanobot/pull/1861) | 2026-03-11 | Kênh điểm cuối tương thích OpenAI (tích hợp ứng dụng bên ngoài) | Chưa hợp nhất trong 14 ngày, chặn tích hợp trò chuyện web tùy chỉnh |
| [#1940](https://github.com/HKUDS/nanobot/pull/1940) | 2026-03-12 | Thực thi sandbox bubblewrap (củng cố bảo mật) | Chưa hợp nhất trong 13 ngày, chức năng quan trọng về bảo mật |
| [#2013](https://github.com/HKUDS/nanobot/pull/2013) | 2026-03-14 | Nano Team Mode (cộng tác đa Agent) | Chưa hợp nhất trong 11 ngày, tính năng cấp độ kiến trúc |
| [#2232](https://github.com/HKUDS/nanobot/pull/2232) | 2026-03-18 | Trang web tài liệu MkDocs đa ngôn ngữ | Chưa hợp nhất trong 7 ngày, cơ sở hạ tầng quốc tế hóa |

---

**Thời gian tạo báo cáo**: 2026-03-26
**Nguồn dữ liệu**: Hoạt động công khai kho lưu trữ GitHub HKUDS/nanobot

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Nhật báo hoạt động dự án Zeroclaw | 2026-03-26

## 1. Tóm tắt hôm nay

ZeroClaw hôm nay cho thấy **mức độ phát triển cao**, với 39 cập nhật Issues (33 hoạt động/6 đóng) và 50 cập nhật PR (35 chờ hợp nhất/15 đã hợp nhất đóng) trong 24 giờ qua, không có phiên bản mới nào được phát hành. Trọng tâm cốt lõi tập trung vào **sửa lỗi ổn định kênh Matrix** (E2EE, giám sát đa phòng, lọc mention), **sửa lỗi khẩn cấp về chức năng phát trực tuyến v0.6.1 quay lại**, và **tối ưu hóa quản lý bộ nhớ** (nguy cơ OOM do lịch sử hội thoại không giới hạn). Phản hồi của cộng đồng mạnh mẽ về trải nghiệm sẵn sàng sử dụng của Docker và tính đầy đủ chức năng của tập lệnh cài đặt, cho thấy dự án đang ở giai đoạn **cân bằng giữa chức năng-độ ổn định-dễ sử dụng** điển hình của giai đoạn lặp lại nhanh chóng.

---

## 2. Phát hành phiên bản

**Không có phiên bản mới nào được phát hành**

> Lưu ý: v0.6.2 là phiên bản mới nhất hiện tại, nhưng các bản sửa lỗi chuyên sâu hôm nay về sự cố phát trực tuyến quay lại (#4670) và vấn đề đa phòng Matrix (#4658) cho thấy một phiên bản vá có thể sắp được phát hành.

---

## 3. Tiến độ dự án

### Các PR quan trọng đã được hợp nhất/đóng hôm nay

| PR | Tác giả | Đóng góp cốt lõi | Ý nghĩa thúc đẩy dự án |
|:---|:---|:---|:---|
| [#4680](https://github.com/zeroclaw-labs/zeroclaw/pull/4680) | singlerider | Tùy chọn cấu hình Matrix `mention_only` | Giải quyết vấn đề bot phản hồi quá mức trong trò chuyện nhóm, tương thích với hành vi nhất quán của kênh Discord/Telegram |
| [#4714](https://github.com/zeroclaw-labs/zeroclaw/pull/4714) | theonlyhennygod | **Xóa backend PostgreSQL, thống nhất SQLite** | Đơn giản hóa kiến trúc lớn: Di chuyển các tính năng KG của PG (truy vấn cạnh hai chiều, CTE đệ quy) sang SQLite, giảm độ phức tạp vận hành, nhưng có thể ảnh hưởng đến người dùng triển khai quy mô lớn |
| [#4678](https://github.com/zeroclaw-labs/zeroclaw/pull/4678) | theonlyhennygod | Hình ảnh Docker mặc định vô hiệu hóa `require_pairing` | Sửa lỗi bẫy xác thực 401 khi khởi động nhanh Docker, cải thiện trải nghiệm người dùng mới |

**Đánh giá tiến độ tổng thể**: Các hợp nhất hôm nay chủ yếu tập trung vào **dọn dẹp nợ kỹ thuật** (xóa PG) và **hoàn thiện trải nghiệm** (Docker/Matrix), với 35 PR chưa hợp nhất chứa các chức năng cốt lõi hơn.

---

## 4. Điểm nóng cộng đồng

### Issues được thảo luận nhiều nhất

| Xếp hạng | Issue | Bình luận | Yêu cầu cốt lõi | Tín hiệu sâu sắc |
|:---|:---|:---:|:---|:---|
| 1 | [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) Hình ảnh Docker "full" | 4 | **Hình ảnh Docker đầy đủ chức năng (bao gồm WhatsApp)** | **Lo lắng về ngưỡng người dùng mới**: Độ phức tạp của việc biên dịch cờ chức năng vs. định vị sản phẩm tối ưu hóa bộ nhớ xung đột |
| 2 | [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) Trình theo dõi ma sát Matrix | 2 | **Tổng hợp các điểm yếu kênh Matrix (vòng lặp OTK E2EE, không có phản hồi luồng)** | **Nhu cầu ổn định kênh cấp doanh nghiệp/nhạy cảm về quyền riêng tư** |
| 3 | [#3655](https://github.com/zeroclaw-labs/zeroclaw/issues/3655) Bảng điều khiển web gateway không khả dụng | 3 | **Thiếu xây dựng frontend sau khi cài đặt brew** | **Phân mảnh kênh phân phối**: Trải nghiệm không nhất quán giữa mã nguồn/nhị phân/Docker/brew |

### Issues phản ứng cao
- [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) 👍×2 - Nhu cầu về hình ảnh Docker đầy đủ chức năng được cộng đồng chấp nhận
- [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) 👍×1 - Ưu tiên hóa các kịch bản doanh nghiệp của Matrix đã được xác nhận

---

## 5. Lỗi và độ ổn định

### Theo mức độ nghiêm trọng

| Mức độ | Issue | Mô tả | Trạng thái PR sửa lỗi |
|:---|:---|:---|:---|
| **S0** | [#4299](https://github.com/zeroclaw-labs/zeroclaw/issues/4299) | Lỗi cổng 502 + không phản hồi sau khi tích hợp Mattermost | ❌ Không có PR |
| **S0** | [#4478](https://github.com/zeroclaw-labs/zeroclaw/issues/4478) | Chỉ hiển thị "Used tools" mà không có hành động thực tế khi thực thi công cụ | ✅ Sửa lỗi liên quan đến [#4675](https://github.com/zeroclaw-labs/zeroclaw/pull/4675) |
| **S0** | [#4649](https://github.com/zeroclaw-labs/zeroclaw/issues/4649) | Loại tin nhắn danh sách Lark không được hỗ trợ | ❌ Không có PR |
| **S0** | [#4672](https://github.com/zeroclaw-labs/zeroclaw/issues/4672) | Khóa API Groq bị lộ rõ | ❌ Không có PR |
| **S1** | [#4644](https://github.com/zeroclaw-labs/zeroclaw/issues/4644) | Mất trí nhớ sau hai vòng hội thoại web | ❌ Không có PR |
| **S1** | [#4655](https://github.com/zeroclaw-labs/zeroclaw/issues/4655) | Lệnh `onboard --channels-only` ghi đè thay vì hợp nhất cấu hình | ❌ Không có PR |
| **S1** | [#4652](https://github.com/zeroclaw-labs/zeroclaw/issues/4652) | Lỗi cài đặt Docker WSL Ubuntu | ❌ Không có PR |
| **S2** | [#4670](https://github.com/zeroclaw-labs/zeroclaw/issues/4670) | Tất cả các mô hình trong v0.6.1 trả về "unknown does not support streaming" | ✅ [#4675](https://github.com/zeroclaw-labs/zeroclaw/pull/4675), [#4690](https://github.com/zeroclaw-labs/zeroclaw/pull/4690) |
| **S2** | [#4630](https://github.com/zeroclaw-labs/zeroclaw/issues/4630) | Kết nối lại WebSocket kênh QQ định kỳ gây mất tin nhắn | ❌ Không có PR |
| **S2** | [#4699](https://github.com/zeroclaw-labs/zeroclaw/issues/4699) | Lịch sử hội thoại không giới hạn gây tăng bộ nhớ liên tục | ✅ [#4706](https://github.com/zeroclaw-labs/zeroclaw/pull/4706), [#4709](https://github.com/zeroclaw-labs/zeroclaw/pull/4709) |

**Rủi ro chính**: Các vấn đề bảo mật và kênh S0 (lộ key Groq, sập kênh Mattermost/Lark) thiếu phản hồi sửa lỗi, có thể gây rò rỉ dữ liệu người dùng hoặc gián đoạn dịch vụ.

---

## 6. Yêu cầu tính năng và tín hiệu lộ trình

| Yêu cầu | Issue/PR | Đánh giá tính khả thi | Dự đoán phiên bản |
|:---|:---|:---|:---|
| **Tích hợp GitHub gốc** | [#4353](https://github.com/zeroclaw-labs/zeroclaw/pull/4353) | PR đã mở 3 ngày, triển khai đầy đủ (thao tác repo/PR/issue) | Chức năng cốt lõi v0.7.0 |
| **Hỗ trợ giao thức A2A** | [#4166](https://github.com/zeroclaw-labs/zeroclaw/pull/4166) | PR đã mở 5 ngày, cơ sở hạ tầng proxy liên phiên bản | v0.7.0 hoặc v0.8.0 |
| **Backend bộ nhớ MariaDB** | [#4668](https://github.com/zeroclaw-labs/zeroclaw/issues/4668) | PG vừa bị xóa, xung đột với hướng kiến trúc | ❌ Khả năng áp dụng thấp |
| **Chuỗi quay vòng mô hình cấp nhà cung cấp** | [#4647](https://github.com/zeroclaw-labs/zeroclaw/issues/4647) | Tăng cường cấu hình mô hình, liên kết với mô-đun `reliability` hiện có | Có thể trong v0.6.3 |
| **CLI cấu hình mã hóa** | [#4669](https://github.com/zeroclaw-labs/zeroclaw/issues/4669) | Lệnh `zeroclaw secret set`, nhu cầu bảo mật cốt lõi | Có thể trong v0.6.3 |
| **Làm mới token OAuth Qwen** | [#4703](https://github.com/zeroclaw-labs/zeroclaw/issues/4703) | Điều chỉnh hệ sinh thái mô hình trong nước, mở rộng cấu hình | Có thể trong v0.6.3 |

**Tín hiệu lộ trình**: Sau khi xóa PostgreSQL, dự án rõ ràng nghiêng về hướng **nhúng nhẹ** (SQLite) và **không trạng thái gốc đám mây**, nhu cầu hỗ trợ cơ sở dữ liệu cấp doanh nghiệp có thể được đánh giá lại.

---

## 7. Tóm tắt phản hồi người dùng

### Điểm yếu thực tế

| Kịch bản | Nguồn | Tâm trạng |
|:---|:---|:---|
| "Sau khi cài đặt brew, bảng điều khiển hiển thị chỉ dẫn xây dựng thay vì giao diện" | [#3655](https://github.com/zeroclaw-labs/zeroclaw/issues/3655) | 😤 Thất vọng |
| "Khởi động nhanh Docker báo 401, tài liệu không đề cập đến việc tắt pairing" | [#4678](https://github.com/zeroclaw-labs/zeroclaw/issues/4678) | 😤 Thất vọng |
| "Tập lệnh cài đặt chọn Matrix nhưng không biên dịch tính năng tương ứng" | [#4654](https://github.com/zeroclaw-labs/zeroclaw/issues/4654) | 😤 Thất vọng |
| "Biên dịch Raspberry Pi 8GB bị OOM, mâu thuẫn với cam kết phần cứng <$10 trong README" | [#4704](https://github.com/zeroclaw-labs/zeroclaw/issues/4704) | 🤔 Bối rối |
| "Mã hóa E2EE Matrix hoàn toàn bị hỏng, không thể sử dụng cho các tình huống nhạy cảm" | [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) | 😰 Lo lắng |

### Điểm hài lòng
- Sự linh hoạt của kiến trúc: "Thiết kế cờ chức năng hợp lý, nhưng cần tài liệu tốt hơn" (ngụ ý trong bình luận #3642)
- Tốc độ phản hồi: Các PR liên quan đến Matrix ngày hôm nay xuất hiện dày đặc (#4665, #4700, #4707)

---

## 8. Tồn đọng cần xử lý

### Các hạng mục có giá trị cao cần người bảo trì quan tâm

| Issue/PR | Số ngày | Rủi ro/Giá trị | Đề xuất hành động |
|:---|:---|:---|:---|
| [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) Hình ảnh Docker đầy đủ chức năng | 11 | Nguyên nhân chính người dùng mới rời bỏ | Quyết định: Chiến lược hình ảnh chính thức (slim vs. full vs. xây dựng theo lớp) |
| [#2972](https://github.com/zeroclaw-labs/zeroclaw/issues/2972) Bảo mật sandbox plugin | 18 | Nợ kiến trúc bảo mật | Đánh giá tính khả thi của giải pháp WASM, hoặc tuyên bố chấp nhận rủi ro rõ ràng |
| [#4353](https://github.com/zeroclaw-labs/zeroclaw/pull/4353) Tích hợp GitHub | 3 | Chức năng cốt lõi của hệ sinh thái nhà phát triển | Ưu tiên xem xét mã |
| [#4166](https://github.com/zeroclaw-labs/zeroclaw/pull/4166) Giao thức A2A | 5 | Hiệu ứng mạng đa agent | Đồng bộ xem xét với tiêu chuẩn A2A của Google |
| [#4714](https://github.com/zeroclaw-labs/zeroclaw/pull/4714) Xóa PG | 1 | **Thay đổi phá vỡ** | Hướng dẫn di chuyển cần được nêu rõ trong ghi chú phát hành, đánh giá phản ứng của cộng đồng |

---

**Thời gian tạo báo cáo**: 2026-03-26
**Nguồn dữ liệu**: Hoạt động công khai kho lưu trữ GitHub
**Sức khỏe dự án**: 🟡 Đang phát triển tích cực, sửa lỗi ổn định dày đặc, cần chú ý tốc độ phản