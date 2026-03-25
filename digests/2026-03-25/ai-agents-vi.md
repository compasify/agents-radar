# OpenClaw Sinh thái Nhật báo 2026-03-25

> Issues: 500 | PRs: 500 | Dự án bao phủ: 13 | Thời gian tạo: 2026-03-25 00:09 UTC

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

# Nhật báo động thái dự án OpenClaw | 2026-03-25

---

## 1. Tổng quan hôm nay

OpenClaw hôm nay duy trì **mức độ hoạt động cực kỳ cao**, tạo ra **500 cập nhật Issues** (429 mới mở/hoạt động, 71 đóng) và **500 cập nhật PR** (403 chờ hợp nhất, 97 đã hợp nhất/đóng) trong 24 giờ. Dự án đang trong **giai đoạn lặp lại dày đặc**, đội ngũ cốt lõi đang nỗ lực sửa các vấn đề hồi quy nhiều lần được giới thiệu trong phiên bản 2026.3.22, đồng thời thúc đẩy hệ sinh thái ứng dụng đa nền tảng (ứng dụng Linux GTK4, Wear OS, kênh QQ, v.v.). Tâm trạng cộng đồng cho thấy **sự phân cực**: một mặt, có sự mong đợi lớn đối với việc mở rộng đa nền tảng; mặt khác, có những lo ngại về sự suy giảm ổn định của các phiên bản gần đây. Không có phiên bản mới nào được phát hành, trọng tâm bảo trì rõ ràng nghiêng về **sửa lỗi nóng và phục hồi chất lượng**.

---

## 2. Phát hành phiên bản

**Không có phiên bản mới nào được phát hành**

> Lưu ý: Các vấn đề hồi quy như thiếu Control UI và lỗi plugin WhatsApp do phiên bản 2026.3.22 gây ra vẫn đang được sửa khẩn cấp, dự kiến sẽ có bản vá lỗi sớm.

---

## 3. Tiến độ dự án

### Các PR quan trọng đã hợp nhất/đóng

| PR | Tác giả | Đóng góp cốt lõi | Issue liên quan |
|:---|:---|:---|:---|
| [#108](https://github.com/openclaw/openclaw/pull/108) | thewilloftheshadow | Thêm UI kết nối Discord, Signal, iMessage, hoàn thiện giao diện kênh tin nhắn đa nền tảng thống nhất | - |
| [#54097](https://github.com/openclaw/openclaw/pull/54097) | drobison00 | **Sửa lỗi bảo mật**: Lệnh thay đổi `/allowlist` nội bộ yêu cầu bắt buộc quyền `operator.admin`, bịt lỗ hổng leo thang đặc quyền | - |
| [#53715](https://github.com/openclaw/openclaw/pull/53715) | lndyzwdxhs | Sửa lỗi xác thực trường `card` của công cụ nhắn tin Feishu, gỡ bỏ chặn gửi tin nhắn media | #53697 |
| [#53992](https://github.com/openclaw/openclaw/pull/53992) | vincentkoc | **Hoàn thiện điểm cuối tương thích OpenAI**: Thêm `/v1/models` và `/v1/embeddings`, tăng cường khả năng tương thích với hệ sinh thái như Open WebUI/LibreChat | - |
| [#44969](https://github.com/openclaw/openclaw/pull/44969) | Kathie-yu | Sửa lỗi chuẩn hóa baseUrl cho nhà cung cấp Google Generative AI tùy chỉnh | - |
| [#43788](https://github.com/openclaw/openclaw/pull/43788) | lefarcen | Sửa lỗi bỏ qua tin nhắn nhóm Feishu một cách im lặng (khi hết thời gian chờ dò tìm bot-info) | - |
| [#44083](https://github.com/openclaw/openclaw/pull/44083) | bebule | Sửa lỗi phân tích biến môi trường cổng theo phong cách Compose (hiểu sai `127.0.0.1:18789` thành cổng 127) | - |

**Đánh giá tiến độ tổng thể**: Việc hợp nhất hôm nay chủ yếu tập trung vào **sửa lỗi ổn định và khả năng tương thích hệ sinh thái**, không có tính năng lớn mới nào được giới thiệu. Đội ngũ cốt lõi đang kiểm soát ảnh hưởng dây chuyền của phiên bản 2026.3.22 thông qua các bản vá dày đặc, chất lượng dự án đang trong **giai đoạn xác minh sửa lỗi**.

---

## 4. Điểm nóng cộng đồng

### Issues thảo luận sôi nổi nhất

| Issue | Số bình luận | Yêu cầu cốt lõi | Tín hiệu tâm trạng |
|:---|:---|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Ứng dụng Linux/Windows Clawdbot Apps | **48 bình luận** | Thiếu ứng dụng khách trên máy tính để bàn đa nền tảng trong thời gian dài, macOS/iOS/Android đã được bao phủ, người dùng Linux/Windows yêu cầu chức năng tương đương | ⭐ **Nóng bỏng lâu dài**, 65 👍, được coi là lỗ hổng quan trọng đối với tính toàn vẹn của hệ sinh thái |
| [#49836](https://github.com/openclaw/openclaw/issues/49836) Cảnh báo an ninh lừa đảo | 33 bình luận | Lừa đảo airdrop giả mạo sử dụng tên OpenClaw, cộng đồng cần làm rõ và bảo vệ chính thức | Nhạy cảm an ninh, đã đóng nhanh chóng |
| [#52885](https://github.com/openclaw/openclaw/issues/52885) Vấn đề tương thích plugin WeChat | 31 bình luận | Plugin WeChat chính thức của Tencent không tương thích với phiên bản 2026.3.22+, người dùng doanh nghiệp bị chặn | **Chặn cấp doanh nghiệp**, 0 👍 phản ánh sự khẩn cấp chứ không phải sự đồng tình |
| [#52823](https://github.com/openclaw/openclaw/issues/52823) Thiếu tài nguyên Control UI | 31 bình luận | Sau khi nâng cấp, UI bị lỗi, cần xây dựng thủ công hoặc chạy ở chế độ phát triển | Điểm đau hồi quy, thiếu sót trong quy trình tài liệu/phát hành |
| [#52808](https://github.com/openclaw/openclaw/issues/52808) Thiếu npm package dist/control-ui/ | 30 bình luận | Gói npm 2026.3.22 không bao gồm sản phẩm xây dựng Control UI | **Hồi quy ảnh hưởng cao**, 61 👍 |

### Phân tích điểm nóng

- **#75 Ứng dụng khách đa nền tảng** là **yêu cầu chức năng bền bỉ nhất** của cộng đồng, PR [#53905](https://github.com/openclaw/openclaw/pull/53905) hôm nay đã gửi phiên bản gốc của ứng dụng gốc Linux GTK4, đánh dấu Issue này bước vào giai đoạn giải quyết thực chất.
- **Khủng hoảng chất lượng phiên bản 2026.3.22** chiếm vị trí 3-5 trong các điểm nóng, phản ánh những thiếu sót mang tính hệ thống trong quy trình đóng gói npm và xác minh khả năng tương thích SDK plugin trong quy trình phát hành.
- Vấn đề tương thích plugin WeChat làm nổi bật khó khăn trong việc điều phối hệ sinh thái plugin bên thứ ba với vòng lặp phiên bản cốt lõi.

---

## 5. Lỗi và độ ổn định

### Mức độ nghiêm trọng: 🔴 Chặn (đã ảnh hưởng sản xuất)

| Issue | Hiện tượng | Phiên bản | PR Sửa lỗi | Trạng thái |
|:---|:---|:---|:---|:---|
| [#52808](https://github.com/openclaw/openclaw/issues/52808) | Control UI hoàn toàn không khả dụng (503) | 2026.3.22 | [#53373](https://github.com/openclaw/openclaw/pull/53373) | Đang xác minh |
| [#53247](https://github.com/openclaw/openclaw/issues/53247) | Lỗi plugin WhatsApp (thiếu light-runtime-api) | 2026.3.23 | - | **Cần sửa** |
| [#52885](https://github.com/openclaw/openclaw/issues/52885) | Lỗi tải plugin WeChat (thay đổi đường dẫn nhập ESM) | 2026.3.22+ | - | Cần Tencent cập nhật |
| [#52081](https://github.com/openclaw/openclaw/issues/52081) | Lỗi tải plugin Feishu (không tương thích API runtime) | 2026.3.22+ | - | **Cần sửa** |

### Mức độ nghiêm trọng: 🟡 Chức năng (cảnh bị tổn hại trong kịch bản cốt lõi)

| Issue | Hiện tượng | Ghi chú |
|:---|:---|:---|
| [#53644](https://github.com/openclaw/openclaw/issues/53644) | Lỗi đóng bất thường Discord WebSocket 1006 gây lỗi cổng | Không tự động kết nối lại, thoát tiến trình |
| [#53317](https://github.com/openclaw/openclaw/issues/53317) | Token OAuth bị ghi đè bởi bộ nhớ cache cũ khi khởi động | Người dùng openai-codex liên tục mất kết nối |
| [#52024](https://github.com/openclaw/openclaw/issues/52024) | Cắt bớt ngữ cảnh phân chia tool_use/tool_result, API từ chối | Kích hoạt khi hội thoại dài |
| [#53955](https://github.com/openclaw/openclaw/issues/53955) | QMD memory index 0/10 file, memory_search hoàn toàn trống | Hồi quy 2026.3.23-2 |

### Mức độ nghiêm trọng: 🟢 Thông thường

- [#54039](https://github.com/openclaw/openclaw/issues/54039) Đường dẫn tuyệt đối Windows bị nối lặp lại gốc workspace
- [#53363](https://github.com/openclaw/openclaw/issues/53363) Lỗi Mistral AI 422 tiếp tục (tuyên bố đã sửa nhưng chưa giải quyết)

**Đánh giá độ ổn định**: Phiên bản 2026.3.22-2026.3.23 giới thiệu **hồi quy hệ thống**, liên quan đến nhiều khía cạnh như đóng gói npm, SDK plugin, quản lý trạng thái OAuth. Khuyến nghị người dùng tạm dừng nâng cấp lên 2026.3.22+ và chờ phiên bản vá lỗi.

---

## 6. Yêu cầu chức năng và tín hiệu lộ trình

| Yêu cầu | Issue/PR | Mức độ trưởng thành | Khả năng đưa vào |
|:---|:---|:---|:---|
| **Ứng dụng máy tính gốc Linux** | [PR #53905](https://github.com/openclaw/openclaw/pull/53905) | 🔥 Phiên bản gốc đã gửi | **Cao** — Phản hồi trực tiếp #75, kiến trúc GTK4/libadwaita |
| **Ứng dụng Wear OS** | [PR #47604](https://github.com/openclaw/openclaw/pull/47604) | Đang phát triển | Trung bình — Phụ thuộc vào tái cấu trúc lớp chia sẻ Android |
| **Hỗ trợ kênh QQ** | [PR #52986](https://github.com/openclaw/openclaw/pull/52986) | Chức năng hoàn chỉnh chờ review | Trung bình — Giá trị chiến lược thị trường Trung Quốc |
| **"Chế độ giám sát" WhatsApp** | [PR #53190](https://github.com/openclaw/openclaw/pull/53190) | Chờ hợp nhất | Cao — Kịch bản ghi nhật ký nhóm thụ động |
| **CLI di chuyển giữa các thiết bị** | [PR #53520](https://github.com/openclaw/openclaw/pull/53520) | Chờ review | Cao — `openclaw migrate export/import` |
| **Lược đồ xem công cụ khả dụng khi chạy** | [PR #54088](https://github.com/openclaw/openclaw/pull/54088) | Chờ review | Cao — Giải quyết vấn đề gây hiểu lầm của `/tools` |
| **Bộ nhớ dài hạn & Quản lý kiến thức** | [#50096](https://github.com/openclaw/openclaw/issues/50096) | Giai đoạn thảo luận | Trung bình — Yêu cầu cấp kiến trúc, cần thiết kế RFC |
| **per-agent thinkingDefault** | [#21097](https://github.com/openclaw/openclaw/issues/21097) | Chờ triển khai | Trung bình — Kịch bản tối ưu chi phí |

**Tín hiệu lộ trình**: Đội ngũ cốt lõi đang chuyển từ "mở rộng chức năng" sang "**chuẩn hóa nền tảng & quản trị hệ sinh thái**" — ứng dụng khách đa nền tảng (Linux/Wear OS), di chuyển giữa các thiết bị, hoàn thiện API plugin (abort agent, lộ diện runId) tạo thành trục chính của Quý 2 năm 2026.

---

## 7. Tóm tắt phản hồi người dùng

### Đúc kết điểm đau

> *"The plumbing is fighting that promise."* — [#50096](https://github.com/openclaw/openclaw/issues/50096)

| Chủ đề | Phản hồi điển hình | Nguồn |
|:---|:---|:---|
| **Khủng hoảng niềm tin về chất lượng phiên bản** | "Sau khi nâng cấp lên 2026.3.22, UI hoàn toàn bị lỗi, việc khôi phục cũng khó khăn" | #52808, #52823 |
| **Phân mảnh hệ sinh thái plugin** | "Mỗi lần nâng cấp phiên bản cốt lõi đều sợ plugin bên thứ ba bị treo" | #52885, #52081 |
| **Độ tin cậy OAuth** | "Cạnh tranh làm mới token dẫn đến mất kết nối lặp đi lặp lại, không dám dùng trong môi trường sản xuất" | #26322, #53317 |
| **Thông tin chẩn đoán không đủ** | "WSL2 + Windows + CDP từ xa ba lớp không phân biệt được lỗi từ lớp nào" | #41553 |
| **Hiệu quả hệ thống bộ nhớ** | "Driftnet đã nghe 1000 giờ đối thoại, nhưng agent mỗi lần đều bắt đầu từ con số không" | #50096 |

### Điểm hài lòng

- Kiến trúc thống nhất kênh tin nhắn đa nền tảng (Discord/Telegram/Feishu, v.v.) được công nhận.
- Trải nghiệm tương tác thời gian thực của Control UI được coi là lợi thế khác biệt.

---

## 8. Tồn đọng cần xử lý

### Issues giá trị cao tồn đọng lâu ngày chưa phản hồi

| Issue | Số ngày | Vấn đề cốt lõi | Rủi ro |
|:---|:---|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Khách hàng Linux/Windows | **84 ngày** | Ứng dụng máy tính đa nền tảng | Mất cộng đồng về đối thủ cạnh tranh; **PR #53905 hôm nay đã gửi** |
| [#25215](https://github.com/openclaw/openclaw/issues/25215) Kiểm tra SSRF chặn fake-ip của Clash | **29 ngày** | Chức năng mạng của người dùng proxy bị lỗi | Uy tín về khả năng tương thích mạng |
| [#10386](https://github.com/openclaw/openclaw/issues/10386) Workspace skills không tìm thấy | **47 ngày** | Mở rộng kỹ năng tùy chỉnh không hoạt động | Hệ sinh thái nhà phát triển |
| [#27473](https://github.com/openclaw/openclaw/issues/27473) Cạm bẫy cấu hình Gateway allowedOrigins | **27 ngày** | Lỗi khởi động triển khai container | Trải nghiệm tự lưu trữ doanh nghiệp |

### PR quan trọng chờ Review

| PR | Số ngày | Giá trị | Rủi ro chặn |
|:---|:---|:---|:---|
| [#47604](https://github.com/openclaw/openclaw/pull/47604) Wear OS | **10 ngày** | Lối vào hệ sinh thái thiết bị đeo | Kích thước mã XL, thiếu tài nguyên review |
| [#52986](https://github.com/openclaw/openclaw/pull/52986) Kênh QQ | **2 ngày** | Giá trị thị trường Trung Quốc | Xem xét tuân thủ kênh |
| [#53520](https://github.com/openclaw/openclaw/pull/53520) Di chuyển giữa các thiết bị | **1 ngày** | Độ gắn kết người dùng | Kiểm toán an ninh dữ liệu |

---

**Thời gian tạo báo cáo**: 2026-03-25
**Cơ sở dữ liệu**: Cửa sổ cuộn 24h của GitHub API

---

## So sánh hệ sinh thái ngang

# Báo cáo phân tích so sánh ngang hệ sinh thái trợ lý AI cá nhân mã nguồn mở

**Ngày phân tích**: 2026-03-25 | **Nguồn dữ liệu**: Dữ liệu công khai trên GitHub

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái trợ lý AI cá nhân/tác nhân tự chủ mã nguồn mở đang trải qua **bước nhảy vọt từ "chức năng khả dụng" sang "sẵn sàng sản xuất"**. Các dự án hàng đầu xử lý trung bình 50-500 Issues/PR mỗi ngày, cho thấy cường độ kỹ thuật cực cao; **ứng dụng khách đa nền tảng** (Linux, Wear OS, WeChat) và **chức năng cấp doanh nghiệp** (SSO, RBAC, đa người thuê) trở thành hướng chạy nước rút chung; **an ninh chuỗi cung ứng** (sự kiện đầu độc LiteLLM) và **kiến trúc bộ nhớ dài hạn** (biểu đồ tri thức, thiết kế mô phỏng hải mã) nổi lên như chiến trường cạnh tranh thế hệ tiếp theo. Hệ sinh thái tổng thể cho thấy sự phân tầng theo cấp bậc của "tham chiếu cốt lõi (OpenClaw) + kịch bản dọc (LobsterAI/Cowork, IronClaw/hệ sinh thái NEAR, NanoBot/tương tác giọng nói) + cơ sở hạ tầng (Moltis/mô-đun hóa, TinyClaw/hệ thống hàng đợi)".

---

## 2. So sánh mức độ hoạt động của từng dự án

| Dự án | Issues (24h) | PRs (24h) | Phát hành | Đánh giá mức độ khỏe mạnh |
|:---|:---:|:---:|:---:|:---|
| **OpenClaw** | 500 (429 mới mở/hoạt động, 71 đóng) | 500 (403 chờ hợp nhất, 97 đã hợp nhất/đóng) | Không | 🔴 **Hoạt động cao - khủng hoảng cao**: Các vấn đề hồi quy hệ thống cần giải quyết, giai đoạn phục hồi chất lượng |
| **NanoBot** | 21 (19 hoạt động) | 51 (40 chờ hợp nhất) | Không | 🟡 **Hoạt động cao - phản ứng an ninh**: Khủng hoảng chuỗi cung ứng LiteLLM đang được xử lý khẩn cấp |
| **ZeroClaw** | 50 (43 đóng, 7 hoạt động) | 50 (31 chờ hợp nhất, 19 đã hợp nhất) | **v0.6.2** | 🟢 **Hoạt động cao - củng cố chất lượng**: Sửa lỗi dày đặc phiên bản v0.6, lặp lại nhanh chóng |
| **PicoClaw** | 17 (11 hoạt động, 6 đóng) | 68 (24 chờ xem xét, 44 đã hợp nhất) | **v0.2.3-nightly** | 🟢 **Hoạt động cao - chạy nước rút chức năng**: Tái cấu trúc WeChat doanh nghiệp + triển khai tương tác giọng nói |
| **NanoClaw** | 13 (tất cả hoạt động) | 50 (35 chờ hợp nhất) | Không | 🟡 **Hoạt động cao vừa phải - nợ kỹ thuật**: Lỗi hợp nhất nhánh kỹ năng lan tràn, cần kiến trúc chú ý |
| **NullClaw** | 0 | 6 (tất cả chờ hợp nhất) | Không | 🟡 **Sản lượng cao - không tương tác**: 6 PR không bình luận, nút thắt xem xét rõ ràng |
| **IronClaw** | 14 (hoạt động) | 49 (34 chờ hợp nhất) | Không | 🟢 **Hoạt động cao - chuyển đổi doanh nghiệp**: Hàng loạt tạo Issue chức năng cấp doanh nghiệp, chiến lược rõ ràng |
| **LobsterAI** | 23 (hoạt động) | 50 (cập nhật) | Không | 🟢 **Hoạt động cao - trau chuốt trải nghiệm**: Tối ưu hóa hội thoại Cowork + truy cập hệ sinh thái MCP |
| **TinyClaw** | 0 | 8 (tất cả đã hợp nhất) | **v0.0.19** (3 phiên bản/24h) | 🟢 **Lặp lại cực cao**: Tái cấu trúc hệ thống hàng đợi + triển khai trình quản lý kỹ năng |
| **Moltis** | 10 (4 hoạt động, 6 đóng) | 18 (1 chờ hợp nhất, 17 đã hợp nhất) | Không | 🟢 **Thông lượng cao - trưởng thành**: Tỷ lệ hợp nhất PR 94%, thúc đẩy kiến trúc mô-đun hóa |
| **CoPaw** | 50 (39 mới mở/hoạt động) | 50 (17 chờ hợp nhất, 33 đã hợp nhất) | **v0.2.0** | 🔴 **Khủng hoảng khi phát hành**: CPU 100%, Mất dữ liệu Docker chờ hotfix |
| **ZeptoClaw** | 29 (hoạt động) | 29 (8 chờ hợp nhất, 21 đã hợp nhất) | **v0.8.1/v0.8.2** | 🟢 **Lặp lại ổn định**: Trau chuốt kênh Telegram + bố cục giao thức ACP |
| **EasyClaw** | 0 | 0 (3 PR lịch sử đóng) | Không | 🟡 **Giai đoạn tĩnh lặng**: Tái cấu trúc UI hoàn thành, cần kích hoạt mức độ tham gia |

---

## 3. Vị thế của OpenClaw trong hệ sinh thái

### Ưu điểm cốt lõi
| Chiều | Biểu hiện cụ thể | Tham chiếu so sánh |
|:---|:---|:---|
| **Quy mô hệ sinh thái lớn nhất** | 500 Issues/PR hoạt động hàng ngày, gấp hơn 10 lần so với thứ hai | NanoBot 51 PR, IronClaw 49 PR |
| **Phạm vi kênh đầy đủ nhất** | Discord/Signal/iMessage/Feishu/WhatsApp/QQ, v.v. 10+ nền tảng | IronClaw tập trung vào Slack/Discord, PicoClaw tập trung vào hệ sinh thái WeChat |
| **UI Control khác biệt** | Giao diện tương tác thời gian thực được coi là lợi thế khác biệt | Hầu hết các dự án chỉ có giao diện CLI/API |
| **Chức năng doanh nghiệp đi trước** | CLI di chuyển giữa các thiết bị, lược đồ công cụ thời gian chạy đã được triển khai | IronClaw đang bắt kịp đa người thuê/SSO |

### Khác biệt về lộ trình kỹ thuật
| Đặc điểm | OpenClaw | So sánh hệ sinh thái |
|:---|:---|:---|
| **Triết lý kiến trúc** | "Tích hợp đầy đủ chức năng" — Bao gồm kênh, UI, bộ nhớ, công cụ | Moltis "crate mô-đun hóa", TinyClaw "hệ thống hàng đợi cốt lõi" giải trừ cực đoan |
| **Nhịp độ phát hành** | Phiên bản lớn hàng tháng (khủng hoảng hồi quy do 2026.3.22 gây ra) | ZeroClaw vá lỗi hàng ngày, TinyClaw lặp lại nửa ngày |
| **Hệ sinh thái plugin** | SDK plugin bên thứ ba (plugin WeChat/Feishu bảo trì độc lập) | TinyClaw trình quản lý kỹ năng tích hợp, NanoClaw lỗi hợp nhất nhánh kỹ năng tự động |
| **Chiến lược bộ nhớ** | Driftnet (theo dõi hội thoại) + ngữ cảnh cơ bản | PicoClaw Seahorse bộ nhớ mô phỏng, NullClaw KgMemory biểu đồ tri thức |

### So sánh quy mô cộng đồng
- **Quy mô tuyệt đối**: Hoạt động hàng ngày của OpenClaw ≈ Tổng của vị trí thứ 2-5
- **Độ sâu tham gia**: Tỷ lệ tương tác bình luận của ZeroClaw/Moltis cao hơn (người dùng tiếng Trung tăng đột biến, thảo luận RFC)
- **Cấu trúc người đóng góp**: OpenClaw phụ thuộc vào đội ngũ cốt lõi (thewilloftheshadow, v.v.), IronClaw do người dùng doanh nghiệp thúc đẩy (ilblackdragon tạo hàng loạt nhu cầu doanh nghiệp)

---

## 4. Hướng công nghệ được quan tâm chung

| Hướng công nghệ | Dự án liên quan | Yêu cầu cụ thể | Mức độ khẩn cấp |
|:---|:---|:---|:---|
| **Ứng dụng khách đa nền tảng** | OpenClaw (#75 Linux/Windows), PicoClaw (Wear OS), IronClaw (#1584 WeChat) | Bổ sung khoảng trống máy tính để bàn/thiết bị đeo ngoài macOS/iOS/Android | ⭐⭐⭐⭐⭐ |
| **Chức năng cấp doanh nghiệp** | IronClaw (#1610 SSO, #1607 Workspace), OpenClaw (di chuyển giữa các thiết bị), LobsterAI (khả năng quan sát Opik) | Đa người thuê, RBAC, nhật ký kiểm toán, SSO trở thành điểm chặn cho việc áp dụng B2B | ⭐⭐⭐⭐⭐ |
| **Kiến trúc bộ nhớ dài hạn** | PicoClaw (#1919 Seahorse), NullClaw (#712 KgMemory), NanoClaw (#2183 Honcho), OpenClaw (#50096) | "Bộ nhớ thực sự" vượt trội hơn tìm kiếm vector — suy luận quan hệ, tích lũy kinh nghiệm, tối ưu hóa tự động | ⭐⭐⭐⭐☆ |
| **An ninh chuỗi cung ứng** | NanoBot (#2439 đầu độc LiteLLM), OpenClaw (#54097 sửa lỗi leo thang đặc quyền) | Kiểm toán thư viện phụ thuộc, SBOM, nguyên tắc đặc quyền tối thiểu | ⭐⭐⭐⭐⭐ |
| **Khả năng tương thích giao thức MCP/A2A** | Moltis (#479 Node.js MCP tích hợp Docker), ZeptoClaw (#356 ACP), LobsterAI (#728 gỡ lỗi MCP) | Truy cập tiêu chuẩn hóa hệ sinh thái công cụ, tránh làm lại | ⭐⭐⭐⭐☆ |
| **Tương tác giọng nói** | PicoClaw (#1939 TTS/ASR), NanoBot (kỹ năng Whisper) | Đầu vào/đầu ra đa phương thức, giảm ma sát tương tác | ⭐⭐⭐⭐☆ |
| **Nén ngữ cảnh/Tối ưu hóa chi phí** | CoPaw (#2047, #1974), NanoBot (#2375 token Heartbeat bị nổ) | Kiểm soát chi phí hội thoại dài, tránh thảm họa "560k tokens cho một lần" | ⭐⭐⭐⭐☆ |

---

## 5. Phân tích định vị khác biệt

| Dự án | Tập trung chức năng cốt lõi | Hồ sơ người dùng mục tiêu | Đặc điểm kiến trúc kỹ thuật |
|:---|:---|:---|:---|
| **OpenClaw** | Trung tâm nhắn tin toàn kênh + UI Điều khiển | Nhà phát triển cuồng tín, người vận hành đa nền tảng | Đơn thể TypeScript, mở rộng SDK plugin |
| **ZeroClaw** | Tác nhân tự động (kỹ năng tự cải tiến, giao thức A2A) | Nhà nghiên cứu AI, người dùng nặng tự động hóa | Lõi Rust, vòng lặp học Hermes |
| **NanoBot** | Ưu tiên giọng nói + kênh như một dịch vụ | Người vận hành hệ sinh thái IM tiếng Trung | Bất đồng bộ Python, chuyển đổi trong khủng hoảng LiteLLM |
| **IronClaw** | Hệ sinh thái blockchain NEAR + SaaS doanh nghiệp | Nhà phát triển Web3, CNTT doanh nghiệp | Rust toàn diện, đang nâng cấp kiến trúc đa người thuê |
| **LobsterAI** | Trải nghiệm Cowork hóa IDE + mô hình nội địa | Nhà phát triển Trung Quốc, người dùng hệ sinh thái Youdao | Electron + ưu tiên mô hình cục bộ |
| **TinyClaw** | Độ tin cậy hàng đợi + quản lý tiến trình con | Người vận hành tự lưu trữ, triển khai biên | Node.js hướng sự kiện, giải trừ cực đoan |
| **Moltis** | Khung tác nhân mô-đun hóa | Nhà phát triển hệ sinh thái Rust, tích hợp hệ thống | Kiến trúc dạng crate, thiết kế có thể kết hợp |
| **CoPaw** | Phối hợp đa tác nhân (ACP) | Nhà nghiên cứu điều phối tác nhân, quy trình làm việc doanh nghiệp | Python, giao thức giao tiếp giữa các tác nhân |
| **PicoClaw** | Phối hợp phần cứng (hệ sinh thái Sipeed) + WeChat sâu | Nhà sáng tạo phần cứng Trung Quốc, người vận hành hệ sinh thái WeChat | Go + tối ưu hóa nhúng |
| **ZeptoClaw** | Tác nhân nhúng nhẹ | Môi trường hạn chế tài nguyên, người vận hành bot Telegram | Rust cực kỳ tối giản, sandbox an toàn |

---

## 6. Phân loại nhiệt độ và mức độ trưởng thành của cộng đồng

### 🔥 Giai đoạn lặp lại nhanh (trung bình 30+ PR mỗi ngày, mở rộng chức năng)
| Dự án | Tín hiệu chính | Rủi ro |
|:---|:---|:---|
| **OpenClaw** | 500 PR/ngày, chạy nước rút ứng dụng khách đa nền tảng | Khủng hoảng chất lượng 2026.3.22, tích lũy nợ kỹ thuật |
| **CoPaw** | Phát hành v0.2.0, triển khai giao thức ACP | Lỗi CPU 100%/mất dữ liệu Docker ngay sau khi phát hành, cần hotfix |
| **PicoClaw** | Song song tái cấu trúc WeChat doanh nghiệp + tương tác giọng nói | Rủi ro xóa cấu hình hệ thống (#1941) |

### 🛠️ Giai đoạn củng cố chất lượng (vá lỗi dày đặc, ưu tiên ổn định)
| Dự án | Tín hiệu chính | Tiến độ |
|:---|:---|:---|
| **ZeroClaw** | Vá lỗi hàng ngày v0.6.0→v0.6.2 | Viết lại chiến lược bảo mật "giảm trí thông minh", sửa lỗi truyền phát |
| **TinyClaw** | Lặp lại nửa ngày v0.0.17→v0.0.19 | Tái cấu trúc đầu cuối hệ thống hàng đợi hoàn thành |
| **NanoBot** | Phản ứng khẩn cấp với đầu độc LiteLLM | Đang đánh giá các giải pháp thay thế SDK gốc |

### 🏗️ Giai đoạn nâng cấp kiến trúc (tái cấu trúc cơ sở hạ tầng, giai đoạn nuôi dưỡng cộng đồng)
| Dự án | Tín hiệu chính | Nút thắt |
|:---|:---|:---|
| **Moltis** | Giải trừ lớp truyền tải HTTP, triển khai kiến trúc đa tác nhân | PR không bình luận cần bổ sung quy trình RFC |
| **NullClaw** | Bộ nhớ biểu đồ tri thức, đồng bộ hóa giữa các phiên bản | Nút thắt tài nguyên xem xét |
| **IronClaw** | Lập kế hoạch hàng loạt chức năng cấp doanh nghiệp | Phản ứng chậm với các kênh châu Á như WeChat |
| **ZeptoClaw** | Giao thức ACP chờ xem xét 11 ngày | Cơ sở hạ tầng chiến lược cần ưu tiên bảo trì |

### 😴 Giai đoạn tĩnh lặng/chuyển đổi
| Dự án | Trạng thái | Đề xuất |
|:---|:---|:---|
| **EasyClaw** | Tái cấu trúc UI hoàn thành, không tương tác | Thu thập phản hồi Demo triển khai, kích hoạt cộng đồng |
| **NanoClaw** | Lỗi hợp nhất nhánh kỹ năng lan tràn | Cần can thiệp tái cấu trúc kiến trúc hoặc công cụ tự động |

---

## 7. Tín hiệu xu hướng đáng chú ý

### Tín hiệu 1: Chuyển đổi cứng nhắc từ "chức năng khả dụng" sang "chi phí có thể kiểm soát"
> **Hỗ trợ dữ liệu**: NanoBot #2375 (Heartbeat 560k tokens/lần), CoPaw #2047 (thảm họa UX nén ngữ cảnh), OpenClaw #50096 ("Driftnet nghe 1000 giờ nhưng agent bắt đầu từ con số không")

**Gợi ý cho nhà phát triển**: Kinh tế token của tác nhân chu kỳ dài trở thành yếu tố cốt lõi cho triển khai sản xuất, cần tích hợp:
- Cơ chế cách ly trạng thái (phân tách Heartbeat vs ngữ cảnh tác vụ)
- Cắt ngữ cảnh thích ứng (bảo toàn tính toàn vẹn của tool_use/tool_result)
- Bảng điều khiển hiển thị chi phí (ước tính tiêu thụ token cho người dùng nhìn thấy)

### Tín hiệu 2: An ninh chuỗi cung ứng trở thành nền tảng tin cậy của hệ sinh thái
> **Hỗ trợ dữ liệu**: NanoBot đầu độc LiteLLM (#2439 Critical), OpenClaw sửa lỗi leo thang đặc quyền (#54097), Moltis tích hợp Node.js để giảm thiểu phụ thuộc bên ngoài (#479)

**Gợi ý cho nhà phát triển**:
- Khóa phụ thuộc cốt lõi + tạo SBOM trở thành tiêu chuẩn CI
- Cân nhắc sử dụng SDK gốc thay thế lớp tổng hợp (LiteLLM → SDK OpenAI/Anthropic)
- Kết hợp chữ ký hình ảnh container, Build có thể tái tạo vào quy trình phát hành

### Tín hiệu 3: "Bộ nhớ thực sự" vượt qua RAG trở thành chiến trường khác biệt
> **Hỗ trợ dữ liệu**: Đề xuất mô phỏng hải mã PicoClaw Seahorse (#1919), NullClaw KgMemory (#712), NanoClaw Honcho tích hợp (#2183), thảo luận dài hạn OpenClaw #50096

**Hướng công nghệ**:
| Cấp độ | Hiện tại chính thống | Khám phá thế hệ tiếp theo |
|:---|:---|:---|
| Lưu trữ | Cơ sở dữ liệu vector | Biểu đồ tri thức (SQLite CTE), mô phỏng hải mã (ngắn hạn không mất mát + dài hạn ngữ nghĩa) |
| Truy xuất | Tìm kiếm tương tự | Suy luận quan hệ, liên kết thời gian, củng cố kinh nghiệm (Hebbian/Ebbinghaus) |
| Cập nhật | Thủ công/Định kỳ | Tóm tắt tự động, tự cải tiến kỹ năng (vòng lặp Hermes của ZeroClaw #4619) |

### Tín hiệu 4: Chuẩn hóa giao thức đa tác nhân (ACP/A2A/MCP) tăng tốc
> **Hỗ trợ dữ liệu**: PR A2A của ZeroClaw (#4166), ZeptoClaw ACP (#356), Moltis Node.js tích hợp MCP (#479), phát hành CoPaw ACP v0.2.0

**Phán đoán hệ sinh thái**: Quý 2 năm 2026 sẽ là cửa sổ cạnh tranh giao thức, bên nào đạt được khả năng tương tác đa dự án trước sẽ định nghĩa tiêu chuẩn kết nối hệ sinh thái.

### Tín hiệu 5: Chức năng cấp doanh nghiệp từ "điểm cộng" thành "ngưỡng vào cửa"
> **Hỗ trợ dữ liệu**: IronClaw tạo hàng loạt SSO/RBAC/Workspace (#1610-1609), di chuyển giữa các thiết bị OpenClaw, khả năng quan sát Opik của LobsterAI

**Gợi ý sản phẩm**: Bước nhảy vọt của công cụ dành cho nhà phát triển cá nhân sang SaaS doanh nghiệp, cần hoàn thành đồng bộ:
- Hệ thống danh tính (SSO/OIDC/SAML)
- Phân tách dữ liệu (đa người thuê/Workspace)
- Kiểm toán tuân thủ (lưu giữ nhật ký, ma trận quyền)

---

**Kết luận báo cáo**: OpenClaw tiếp tục đóng vai trò là "tham chiếu cốt lõi" của hệ sinh thái nhờ lợi thế quy mô, nhưng khủng hoảng chất lượng và nút thắt băng thông xem xét tạo cơ hội cho những người theo kịp; **ZeroClaw (tác nhân tự động), IronClaw (SaaS doanh nghiệp), Moltis (kiến trúc mô-đun hóa)** tạo ra khả năng cạnh tranh khác biệt theo chiều dọc; **an ninh chuỗi cung ứng, bộ nhớ dài hạn, giao thức đa tác nhân** tạo thành ranh giới công nghệ của nửa đầu năm 2026.

---

## Báo cáo chi tiết dự án cùng đường đua

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Nhật báo động thái | 2026-03-25

## 1. Tổng quan hôm nay

NanoBot hôm nay ở trạng thái **hoạt động cao, phản ứng khủng hoảng cao**. Trong 24 giờ qua, đã tạo ra **21 Issues** (19 hoạt động/mở mới) và **51 PRs** (40 chờ hợp nhất), độ nóng thảo luận cộng đồng tăng đáng kể. Trọng tâm cốt lõi tập trung vào ứng phó khẩn cấp với **sự kiện đầu độc chuỗi cung ứng LiteLLM** (#2439, #2443, #2448, #2441), dự án đang nhanh chóng thúc đẩy các giải pháp thay thế phụ thuộc. Đồng thời, vấn đề nổ token do cơ chế Heartbeat gây ra (#2375) thu hút sự quan tâm rộng rãi, đã có PR tối ưu hóa mang tính nhắm mục tiêu được gửi đi (#2430, #2435). Nhìn chung, dự án thể hiện khả năng hợp tác cộng đồng mạnh mẽ trong việc phản ứng an ninh và tối ưu hóa hiệu suất, nhưng lượng PR chờ hợp nhất tích lũy khá nhiều (40), cần chú ý đến băng thông review.

---

## 2. Phát hành phiên bản

**Không có phiên bản mới nào được phát hành**

---

## 3. Tiến độ dự án

### PR quan trọng đã hợp nhất/đóng hôm nay

| PR | Trạng thái | Đóng góp cốt lõi | Ý nghĩa thúc đẩy dự án |
|:---|:---|:---|:---|
| [#2448](https://github.com/HKUDS/nanobot/pull/2448) `refactor: replace litellm with native openai + anthropic SDKs` | **Đã đóng** (điều chỉnh chiến lược) | Loại bỏ hoàn toàn phụ thuộc LiteLLM, thay thế bằng SDK gốc | **Sửa lỗi an ninh cấp kiến trúc** — Loại bỏ hoàn toàn rủi ro đầu độc chuỗi cung ứng, mặc dù cuối cùng đã đóng nhưng đã thúc đẩy thảo luận về giải pháp thay thế |
| [#2441](https://github.com/HKUDS/nanobot/pull/2441) `security: prevent litellm 1.82.7+` | **Đã đóng** | Giải pháp giảm thiểu khóa phiên bản | Biện pháp an ninh tạm thời, dành thời gian để thay thế hoàn toàn |
| [#2428](https://github.com/HKUDS/nanobot/pull/2428) `Fix/Feat(WeiXin): Adapt to WeChat plugin 1.0.3` | **Đã đóng** | Thích ứng kênh WeChat với plugin phiên bản mới | Nâng cao độ ổn định kênh, hỗ trợ các tính năng mới như `routeTag`/`SKRouteTag` |
| [#2423](https://github.com/HKUDS/nanobot/pull/2423) `fix: cherry-pick shell zombie process reaping` | **Đã đóng** | Sửa lỗi tiến trình zombie sau khi lệnh shell hết thời gian chờ | Sửa lỗi ổn định cho proxy chạy lâu dài |

**Đánh giá tiến độ tổng thể**: Tiến độ cốt lõi hôm nay nằm ở **phản ứng nhanh chóng với khủng hoảng an ninh** — cộng đồng đã hình thành và đánh giá nhiều giải pháp thay thế LiteLLM trong vòng 24 giờ, mặc dù #2448 cuối cùng đã đóng nhưng đã cung cấp một tham khảo quan trọng cho các quyết định tiếp theo. Ở cấp độ cơ sở hạ tầng (thích ứng WeChat, quản lý tiến trình) cũng có những sửa lỗi thực chất.

---

## 4. Điểm nóng cộng đồng

### Các vấn đề thảo luận sôi nổi nhất

| Thứ hạng | Issue/PR | Số bình luận | Phân tích yêu cầu cốt lõi |
|:---|:---|:---|:---|
| 🔥1 | [#2375](https://github.com/HKUDS/nanobot/issues/2375) Heartbeat session history causes ENORMOUS token usage | **9 bình luận** | **Khủng hoảng chi phí** — Người dùng thực nghiệm cho thấy Heartbeat một lần tiêu thụ **560k token**, tác vụ định kỳ 30 phút dẫn đến nhật ký phình to tới 600+ dòng. Yêu cầu: Cơ chế cách ly trạng thái + cắt lịch sử |
| 🔥2 | [#2443](https://github.com/HKUDS/nanobot/issues/2443) LiteLLM has been quarantined | **5 bình luận** | **Cảnh báo an ninh** — PyPI đánh dấu LiteLLM có rủi ro đánh cắp thông tin đăng nhập, người dùng yêu cầu phản hồi khẩn cấp chính thức |
| 🔥3 | [#2329](https://github.com/HKUDS/nanobot/issues/2329) custom model provider did not work with channels | **5 bình luận** | **Tính nhất quán cấu hình** — CLI hoạt động bình thường nhưng kênh Feishu bị lỗi, phản ánh kênh truyền thông và lớp cốt lõi có sự phân tầng trong truyền dẫn cấu hình |
| 🔥4 | [#2439](https://github.com/HKUDS/nanobot/issues/2439) Security: Malicious data-exfiltration code in litellm_init.pth | **4 bình luận** | **An ninh chuỗi cung ứng** — Phát hiện `nanobot-ai` v0.1.4.post5 gói mã độc, mức độ nghiêm trọng được đánh dấu là **Critical** |

**Tín hiệu đằng sau các điểm nóng**: Cộng đồng đang chịu áp lực kép **"hoảng loạn an ninh + lo lắng chi phí"**. Sự kiện LiteLLM đã phơi bày lỗ hổng rủi ro trong quản lý phụ thuộc, trong khi token Heartbeat bị nổ tiết lộ những thiếu sót trong thiết kế tác nhân chạy lâu dài — cả hai đều cần sửa lỗi kiến trúc chứ không phải vá lỗi.

---

## 5. Lỗi và độ ổn định

### Sắp xếp theo mức độ nghiêm trọng

| Mức độ nghiêm trọng | Issue | Mô tả | Trạng thái | PR Sửa lỗi |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#2439](https://github.com/HKUDS/nanobot/issues/2439) | Gói mã độc `litellm_init.pth`, có rủi ro rò rỉ dữ liệu | Mở | [#2448](https://github.com/HKUDS/nanobot/pull/2448) (đã đóng, cần giải pháp thay thế) |
| 🔴 **Critical** | [#2443](https://github.com/HKUDS/nanobot/issues/2443) | LiteLLM PyPI bị cách ly, rủi ro đánh cắp thông tin đăng nhập | Mở | Đang đánh giá |
| 🟠 **High** | [#2375](https://github.com/HKUDS/nanobot/issues/2375) | Lịch sử phiên Heartbeat dẫn đến tiêu thụ 560k token | Mở | [#2430](https://github.com/HKUDS/nanobot/pull/2430), [#2435](https://github.com/HKUDS/nanobot/pull/2435) |
| 🟠 **High** | [#2369](https://github.com/HKUDS/nanobot/issues/2369) | Nhắc nhở Cron bị bộ đánh giá chặn im lặng, người dùng không nhận được thông báo | Mở | [#2449](https://github.com/HKUDS/nanobot/pull/2449) |
| 🟡 **Medium** | [#2440](https://github.com/HKUDS/nanobot/issues/2440) | `openai_codex` sử dụng `prompt_cache_key` khác nhau mỗi vòng, bộ nhớ cache không hợp lệ | Mở | Không |
| 🟡 **Medium** | [#2437](https://github.com/HKUDS/nanobot/issues/2437) | Lưu kết quả công cụ 16k không khớp với toàn bộ văn bản yêu cầu LLM, nhật ký lớn dễ gây lỗi | Mở | Không |
| 🟡 **Medium** | [#2450](https://github.com/HKUDS/nanobot/issues/2450) | minimax-m2.7 qua Ollama Cloud lỗi yêu cầu thứ 2+ | Mở | Không |
| 🟢 **Low** | [#2432](https://github.com/HKUDS/nanobot/issues/2432) | Lỗi `'NoneType' object is not subscriptable` | Mở | Không (cộng đồng cung cấp đề xuất sửa tạm thời) |

---

## 6. Yêu cầu chức năng và tín hiệu lộ trình

| Hướng chức năng | Issue/PR đại diện | Khả năng đưa vào | Cơ sở đánh giá |
|:---|:---|:---|:---|
| **Bộ nhớ dài hạn (tích hợp Honcho)** | [#2183](https://github.com/HKUDS/nanobot/pull/2183) | ⭐⭐⭐⭐⭐ Cao | PR đã gửi trong 7 ngày, phản hồi trực tiếp lộ trình #39, kiến trúc rõ ràng |
| **Hệ thống Hook xử lý sự kiện** | [#1934](https://github.com/HKUDS/nanobot/pull/1934) | ⭐⭐⭐⭐☆ Cao | Bình luận sôi nổi, giải quyết điểm đau cập nhật nóng kỹ năng, đánh dấu `to-nightly` |
| **Kênh điểm cuối tương thích OpenAI** | [#1861](https://github.com/HKUDS/nanobot/pull/1861) | ⭐⭐⭐⭐☆ Cao | Mở rộng khả năng truy cập hệ sinh thái, phù hợp với hướng chuẩn hóa nền tảng |
| **Cách ly sandbox bwrap** | [#1940](https://github.com/HKUDS/nanobot/pull/1940) | ⭐⭐⭐☆☆ Trung bình | Tăng cường an ninh, nhưng phụ thuộc vào khả năng cấp hệ thống, có thể bị hạn chế |
| **Kỹ năng truy vấn thông tin IP** | [#2451](https://github.com/HKUDS/nanobot/pull/2451) | ⭐⭐⭐☆☆ Trung bình | Kỹ năng nhỏ hữu ích, ngưỡng hợp nhất thấp |
| **Ngữ cảnh bộ nhớ VoIP** | [#2444](https://github.com/HKUDS/nanobot/pull/2444) | ⭐⭐☆☆☆ Chờ quyết định | Thông tin không đầy đủ, cần đánh giá thêm |
| **Tối ưu hóa hành vi Discord Threads** | [#2452](https://github.com/HKUDS/nanobot/pull/2452) | ⭐⭐⭐⭐☆ Cao | Sửa lỗi trải nghiệm người dùng, thay đổi nhỏ mang lại lợi ích rõ ràng |

**Tín hiệu phiên bản tiếp theo**: Bộ nhớ dài hạn (Honcho) và hệ thống Hook có khả năng cao nhất được đưa vào `nightly`, cả hai đều giải quyết các vấn đề về khả năng mở rộng kiến trúc cốt lõi.

---

## 7. Tóm tắt phản hồi người dùng

### Điểm đau thực tế

| Kịch bản | Nguồn phản hồi | Sự bất mãn cốt lõi |
|:---|:---|:---|
| **Môi trường sản xuất WeChat doanh nghiệp** | [#2373](https://github.com/HKUDS/nanobot/issues/2373), [#2329](https://github.com/HKUDS/nanobot/issues/2329) | Lỗi API MiniMax thường xuyên, cấu hình lớp kênh và CLI không nhất quán, "cấu hình giống nhau thì CLI dùng được, Feishu/WeChat thì lỗi" |
| **Nhiệm vụ tự động hóa chu kỳ dài** | [#2375](https://github.com/HKUDS/nanobot/issues/2375) | Lỗi thiết kế Heartbeat dẫn đến mất kiểm soát chi phí, "600 dòng nhật ký → 560k token một lần" |
| **Kịch bản nhạy cảm an ninh hợp quy** | [#2439](https://github.com/HKUDS/nanobot/issues/2439) | An ninh chuỗi cung ứng không thể chấp nhận, "sau khi cài đặt mới phát hiện tệp độc hại" |
| **Nhắc nhở định kỳ không hoạt động** | [#2369](https://github.com/HKUDS/nanobot/issues/2369) | Chức năng cốt lõi lỗi im lặng, "đã đặt nhắc nhở nhưng không bao giờ nhận được" |

### Điểm hài lòng
- Hệ sinh thái kỹ năng (chuyển mã cục bộ Whisper) [#1358](https://github.com/HKUDS/nanobot/issues/1358)
- Khả năng bao phủ đa kênh (Telegram, WeChat, Matrix, v.v.)

### Đúc kết yêu cầu chính
> *"Cần chi phí có thể dự đoán, an ninh có thể xác minh, tác vụ định kỳ đáng tin cậy"* — Yêu cầu cứng nhắc của người dùng từ "chức năng khả dụng" sang "sẵn sàng sản xuất"

---

## 8. Tồn đọng cần xử lý

### Mục quan trọng tồn đọng lâu ngày chưa phản hồi

| Issue/PR | Thời gian tạo | Cập nhật cuối cùng | Rủi ro | Hành động đề xuất |
|:---|:---|:---|:---|:---|
| [#1681](https://github.com/HKUDS/nanobot/issues/1681) Matrix auth issue | 2026-03-07 | Hôm nay | Lỗi hội thoại mã hóa, kênh Matrix không khả dụng | Liên kết với [#2447](https://github.com/HKUDS/nanobot/pull/2447) hỗ trợ streaming, hợp nhất review |
| [#144](https://github.com/HKUDS/nanobot/issues/144) Missing gemini_api_key | 2026-02-05 | Hôm nay | 49 ngày không phản hồi chính thức, hỗ trợ Gemini bị phân mảnh | Chỉ định chủ sở hữu hoặc đánh dấu `help wanted` |
| [#1358](https://github.com/HKUDS/nanobot/issues/1358) OpenAI Codex Docker auth | 2026-02-28 | Hôm nay | 25 ngày, vấn đề xác thực môi trường Docker | Bổ sung bước tái hiện hoặc đóng |
| [#2170](https://github.com/HKUDS/nanobot/issues/2170) OAuth subscription options | 2026-03-17 | Hôm nay | Thảo luận mô hình kinh doanh, không có chủ sở hữu kỹ thuật | Chuyển sang Discussion hoặc lộ trình sản phẩm |
| [#2298](https://github.com/HKUDS/nanobot/issues/2298) Breaking endless tool loops | 2026-03-20 | Hôm nay | Chặn khả năng sử dụng cục bộ/mô hình nhỏ | Tăng mức độ ưu tiên, liên kết tối ưu hóa bộ đánh giá |

### Cảnh báo băng thông review PR
- **40 PR chờ hợp nhất**, trong đó [#1934](https://github.com/HKUDS/nanobot/pull/1934) (Hệ thống Hook), [#2183](https://github.com/HKUDS/nanobot/pull/2183) (Bộ nhớ Honcho), [#1650](https://github.com/HKUDS/nanobot/pull/1650) (Gateway Web UI) đều là các tính năng lớn, cần tập trung nguồn lực review.

---

**Thời gian tạo báo cáo**: 2026-03-25
**Nguồn dữ liệu**: GitHub API / HKUDS/nanobot
**Quan tâm tiếp theo**: Quyết định cuối cùng về giải pháp thay thế LiteLLM, tiến độ hợp nhất PR tối ưu hóa Heartbeat

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Nhật báo động thái | 2026-03-25

## 1. Tổng quan hôm nay

ZeroClaw hôm nay thể hiện **xu hướng lặp lại cường độ cao**: trong 24 giờ xử lý **50 Issues** (tỷ lệ đóng 86%) và **50 PRs** (tỷ lệ hợp nhất 62%), phát hành **4 phiên bản** (v0.6.0 → v0.6.2 và beta). Đội ngũ cốt lõi tập trung vào **sửa lỗi ổn định và tối ưu hóa trải nghiệm người dùng**, giải quyết dày đặc các vấn đề hồi quy được giới thiệu trong phiên bản v0.5/v0.6, bao gồm chính sách an ninh quá bảo thủ, lỗi truyền phát, thiếu sót xây dựng Docker, v.v. Mức độ hoạt động của cộng đồng cực kỳ cao, phản hồi của người dùng tiếng Trung tăng đột biến, phản ánh dự án đang bước vào nhóm người dùng rộng hơn.

---

## 2. Phát hành phiên bản

### v0.6.2 (Phiên bản ổn định mới nhất)
| Thuộc tính | Nội dung |
|:---|:---|
| Thời gian phát hành | 2026-03-24 |
| Bản chất cập nhật | Cải tiến tăng dần và trau chuốt (Incremental improvements and polish) |
| Thay đổi phá vỡ | Không có tuyên bố rõ ràng |

**Phỏng đoán sửa lỗi chính** (dựa trên PR liên quan được đóng cùng ngày):
- Viết lại chính sách an ninh: Giải quyết vấn đề "giảm trí thông minh" của v0.5+ ([#4615](https://github.com/zeroclaw-labs/zeroclaw/pull/4615))
- Sửa lỗi phát hiện rò rỉ đánh dấu media: Ngăn chặn `[IMAGE:path]` bị nhận dạng nhầm là token entropy cao ([#4614](https://github.com/zeroclaw-labs/zeroclaw/pull/4614))
- Triển khai đồng bộ thư mục Windows ([#4613](https://github.com/zeroclaw-labs/zeroclaw/pull/4613))
- Tính năng WhatsApp Web được đưa vào bản dựng Docker mặc định ([#4611](https://github.com/zeroclaw-labs/zeroclaw/pull/4611))

### v0.6.1 / v0.6.1-beta.637 / v0.6.0
- Đều là các phiên bản lặp lại nhanh được phát hành trong cùng ngày
- Tốc độ phát hành cho thấy đội ngũ áp dụng chiến lược **nhanh chóng với các bước nhỏ** để ứng phó với các vấn đề ổn định sau phiên bản lớn v0.6.

**Lưu ý di chuyển**: Người dùng nâng cấp từ v0.5 nếu gặp vấn đề "chặn chính sách an ninh" hoặc "hành vi AI bảo thủ", nên nâng cấp trực tiếp lên v0.6.2.

---

## 3. Tiến độ dự án

### Các PR cốt lõi đã hợp nhất/đóng hôm nay (theo mức độ ảnh hưởng)

| PR | Tác giả | Đóng góp cốt lõi | Thúc đẩy dự án |
|:---|:---|:---|:---|
| [#4615](https://github.com/zeroclaw-labs/zeroclaw/pull/4615) | theonlyhennygod | **Viết lại lời nhắc an ninh**, giảm hành vi bảo thủ của AI | Giải quyết điểm đau lớn nhất của người dùng v0.5+, khôi phục tính tự chủ của proxy |
| [#4614](https://github.com/zeroclaw-labs/zeroclaw/pull/4614) | theonlyhennygod | Phát hiện rò rỉ miễn trừ đánh dấu media | Sửa lỗi chặn truyền hình ảnh |
| [#4619](https://github.com/zeroclaw-labs/zeroclaw/pull/4619) | theonlyhennygod | Tự cải tiến kỹ năng + công cụ pipeline | Giới thiệu vòng lặp học tập kiểu Hermes, tiến tới tác nhân tự động |
| [#4620](https://github.com/zeroclaw-labs/zeroclaw/pull/4620) | joehoyle | Đầu ra stream REPL Agent + hủy bằng Ctrl+C | Nâng cấp lớn trải nghiệm tương tác |
| [#4618](https://github.com/zeroclaw-labs/zeroclaw/pull/4618) | theonlyhennygod | Sửa lỗi phát hiện chế độ tương tác onboarding | Giải quyết vấn đề hướng dẫn trên môi trường Debian/SSH/tmux |
| [#4611](https://github.com/zeroclaw-labs/zeroclaw/pull/4611) | theonlyhennygod | WhatsApp Web được đưa vào bản dựng Docker mặc định | Loại bỏ yêu cầu ảnh tạo tùy chỉnh |

**Đánh giá tiến độ tổng thể**: Các PR hợp nhất hôm nay tập trung giải quyết **ba vấn đề tồn đọng lớn của phiên bản v0.6**: chính sách an ninh quá nghiêm ngặt, truyền phát không ổn định, phân mảnh trải nghiệm triển khai. Dự án đang chuyển từ "giai đoạn bùng nổ chức năng" sang "giai đoạn củng cố chất lượng".

---

## 4. Điểm nóng cộng đồng

### Issues thảo luận sôi nổi nhất

| Thứ hạng | Issue | Số bình luận | Yêu cầu cốt lõi | Trạng thái |
|:---|:---|:---|:---|
| 1 | [#2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487) hàm `channel_ack_config` không hoạt động ở chế độ | 7 | **Độ ổn định khi chạy** : Lỗi phân tích chế độ gọi hàm OpenAI | ✅ Đã đóng |
| 2 | [#1518](https://github.com/zeroclaw-labs/zeroclaw/issues/1518) Giao tiếp giữa các tiến trình proxy độc lập | 7 | **Điều phối đa tác nhân** : Phát hiện và truyền tin nhắn giữa nhiều phiên bản trên cùng một máy chủ | ✅ Đã đóng |
| 3 | [#1924](https://github.com/zeroclaw-labs/zeroclaw/issues/1924) Hỗ trợ nền tảng FreeBSD | 6 | **Mở rộng nền tảng** : Yêu cầu cho kịch bản máy chủ/TrueNAS | ✅ Đã đóng |
| 4 | [#3454](https://github.com/zeroclaw-labs/zeroclaw/issues/3454) Web Dashboard 404 | 5 | **Trải nghiệm sẵn sàng hoạt động** : Thiếu bản dựng frontend dẫn đến chức năng không khả dụng | ✅ Đã đóng |
| 5 | [#4093](https://github.com/zeroclaw-labs/zeroclaw/issues/4093) Chức năng streaming bị mất trong master do xóa nhánh | 4 | **Rủi ro hệ thống** của việc mất công việc nhánh dev | ✅ Đã đóng |

### Phân tích điểm nóng

- **#1518 Giao tiếp giữa các tiến trình**: Người dùng @Mike-7777777 đề xuất giải pháp không phụ thuộc ([SQLite shared database]), đã được áp dụng để triển khai, cho thấy chất lượng đóng góp của cộng đồng cao.
- **#4093 Tai nạn quản lý nhánh**: Phơi bày rủi ro cốt lõi — chức năng quan trọng (streaming Provider) "chìm" do nhánh dev bị xóa, dẫn đến suy ngẫm về quy trình làm việc Git.
- **Lượng người dùng tiếng Trung tăng đột biến**: Phản hồi sử dụng tiếng Trung trong các Issues #4496, #4485, cho thấy tiến độ quốc tế hóa dự án và nhu cầu bản địa hóa tài liệu.

---

## 5. Lỗi và độ ổn định

### Sắp xếp theo mức độ nghiêm trọng

| Mức độ nghiêm trọng | Issue | Mô tả | PR Sửa lỗi | Trạng thái |
|:---|:---|:---|:---|:---|
| **S0** | [#3664](https://github.com/zeroclaw-labs/zeroclaw/issues/3664) | Mất dữ liệu/Rủi ro an ninh (ảnh chụp màn hình hiển thị lỗi khi chạy) | Cần liên kết | 🔴 **Mở** |
| **S0** | [#4532](https://github.com/zeroclaw-labs/zeroclaw/issues/4532) | Lỗi quyền `.secret_key` (root sở hữu dẫn đến lỗi tiếp theo) | Liên quan đến [#4613](https://github.com/zeroclaw-labs/zeroclaw/pull/4613)? | ✅ Đã đóng |
| **S0** | [#4445](https://github.com/zeroclaw-labs/zeroclaw/issues/4445) | Không thể đọc/ghi tệp trong ảnh Docker, thiếu công cụ hệ thống | Cần đánh giá | ✅ Đã đóng |
| **S0** | [#4604](https://github.com/zeroclaw-labs/zeroclaw/issues/4604) | Phát hiện rò rỉ đầu ra sai lầm với đánh dấu `[IMAGE:path]` | [#4614](https://github.com/zeroclaw-labs/zeroclaw/pull/4614) | ✅ Đã đóng |
| **S0** | [#4576](https://github.com/zeroclaw-labs/zeroclaw/issues/4576) | WhatsApp Web trong Docker yêu cầu ảnh tùy chỉnh | [#4611](https://github.com/zeroclaw-labs/zeroclaw/pull/4611) | ✅ Đã đóng |
| **S1** | [#4623](https://github.com/zeroclaw-labs/zeroclaw/issues/4623) | **Lỗi đoạn ARMv6 (Pi Zero W)** | Không đủ [#4569](https://github.com/zeroclaw-labs/zeroclaw/pull/4569) | 🔴 **Mở** |
| **S1** | [#4496](https://github.com/zeroclaw-labs/zeroclaw/issues/4496) | "Giảm trí thông minh" sau v0.5+: Chính sách an ninh chặn quá mức | [#4615](https://github.com/zeroclaw-labs/zeroclaw/pull/4615) | ✅ Đã đóng |
| **S1** | [#4485](https://github.com/zeroclaw-labs/zeroclaw/issues/4485) | Cấu hình chính sách an ninh không có hiệu lực (cho phép root vẫn bị chặn) | [#4615](https://github.com/zeroclaw-labs/zeroclaw/pull/4615) | ✅ Đã đóng |
| **S1** | [#4567](https://github.com/zeroclaw-labs/zeroclaw/issues/4567) | Lỗi streaming Azure AI "unknown does not support streaming" | [#4602](https://github.com/zeroclaw-labs/zeroclaw/pull/4602) | 🟡 Chờ xác minh |
| **S1** | [#4523](https://github.com/zeroclaw-labs/zeroclaw/issues/4523) | Lỗi streaming Web UI | [#4602](https://github.com/zeroclaw-labs/zeroclaw/pull/4602) | ✅ Đã đóng |
| **S1** | [#4550](https://github.com/zeroclaw-labs/zeroclaw/issues/4550) | Kết nối WebSocket kênh QQ lặp lại ngắt kết nối | Cần liên kết | ✅ Đã đóng |

### Rủi ro cốt lõi
- **Hỗ trợ ARMv6 bị gián đoạn** ([#4623](https://github.com/zeroclaw-labs/zeroclaw/issues/4623)): v0.6.2 vẫn không thể chạy trên Raspberry Pi Zero W, ảnh hưởng đến kịch bản triển khai biên.
- **#3664 chưa được giải quyết**: Mức S0 mở nhưng thiếu chi tiết kỹ thuật, có rủi ro thông tin không đầy đủ.

---

## 6. Yêu cầu chức năng và tín hiệu lộ trình

### Các yêu cầu quan trọng do người dùng đưa ra

| Yêu cầu | Issue/PR | Giải pháp kỹ thuật | Khả năng đưa vào |
|:---|:---|:---|:---|
| **Giao thức A2A (Agent-to-Agent)** | [#4166](https://github.com/zeroclaw-labs/zeroclaw/pull/4166) | Tương tác proxy dựa trên HTTP/JSON, hỗ trợ ủy quyền tác vụ và phát hiện khả năng | ⭐⭐⭐⭐⭐ **Cao** (PR đang mở, kiến trúc phù hợp với tầm nhìn đa tác nhân) |
| **Chế độ Máy chủ ACP** | [#2456](https://github.com/zeroclaw-labs/zeroclaw/issues/2456) | Giao thức Điều khiển Tác nhân gốc, kết nối với IDE như Zed | ⭐⭐⭐⭐☆ Cao (Đã đóng, có thể đã triển khai hoặc lên kế hoạch) |
| **Backend Bộ nhớ MuninnDB** | [#4607](https://github.com/zeroclaw-labs/zeroclaw/pull/4607) | Tích hợp dịch vụ bộ nhớ ngoài REST, hỗ trợ củng cố Hebbian và quên Ebbinghaus | ⭐⭐⭐⭐☆ Cao (PR đang mở, nâng cấp kiến trúc nhận thức) |
| **Tự tạo và tự cải tiến kỹ năng** | [#3683](https://github.com/zeroclaw-labs/zeroclaw/issues/3683) → [#4619](https://github.com/zeroclaw-labs/zeroclaw/pull/4619) | Vòng lặp học tập kiểu Hermes: vòng lặp thành công → tài liệu kỹ năng → tối ưu hóa liên tục | ⭐⭐⭐⭐⭐ **Đã triển khai** (hợp nhất hôm nay) |
| **Đầu ra streaming Discord** | [#4551](https://github.com/zeroclaw-labs/zeroclaw/pull/4551) | Phản hồi thời gian thực cho tác vụ dài, tránh "văn bản tường sau im lặng" | ⭐⭐⭐☆☆ Trung bình (PR đang mở, cải thiện UX) |
| **Chế độ proxy đầy đủ Claude Code** | [#3911](https://github.com/zeroclaw-labs/zeroclaw/pull/3911) | Bỏ qua quyền nguy hiểm, tách biệt lời nhắc hệ thống, phản hồi kết quả công cụ | ⭐⭐⭐☆☆ Trung bình (PR đang mở, cân nhắc an ninh có thể trì hoãn) |
| **Phân tách bộ nhớ không gian tên** | [#4626](https://github.com/zeroclaw-labs/zeroclaw/pull/4626) | Phân tách ngữ cảnh khi chia sẻ brain.db đa tác nhân | ⭐⭐⭐⭐☆ Cao (PR đang mở, yêu cầu kịch bản doanh nghiệp) |

### Tín hiệu lộ trình
- **Tính tự chủ của tác nhân** là hướng đi rõ ràng: tự cải tiến kỹ năng (#4619), tương tác A2A (#4166), bên ngoài