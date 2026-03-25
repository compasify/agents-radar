# OpenClaw Sinh nhật ký sinh thái ngày 2026-03-25

> Issues: 500 | PRs: 500 | Dự án được bao phủ: 13 | Thời gian tạo: 2026-03-25 00:09 UTC

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

## Báo cáo chuyên sâu về dự án OpenClaw

# Nhật ký hoạt động dự án OpenClaw | 2026-03-25

---

## 1. Tóm tắt nhanh trong ngày

OpenClaw duy trì **mức độ hoạt động cực cao** hôm nay, với 500 cập nhật Issues (429 mới mở/hoạt động, 71 đóng) và 500 cập nhật PR (403 chờ hợp nhất, 97 đã hợp nhất/đóng) trong 24 giờ. Dự án đang trong **giai đoạn lặp lại dày đặc**, đội ngũ cốt lõi đang nỗ lực khắc phục nhiều vấn đề hồi quy được giới thiệu trong phiên bản 2026.3.22, đồng thời thúc đẩy hệ sinh thái khách hàng đa nền tảng (ứng dụng GTK4 Linux, Wear OS, kênh QQ, v.v.). Tâm lý cộng đồng **phân cực**: một mặt là kỳ vọng vào việc mở rộng đa nền tảng, mặt khác là lo ngại về sự suy giảm ổn định của các phiên bản gần đây. Không có phiên bản mới nào được phát hành, trọng tâm bảo trì rõ ràng nghiêng về **sửa lỗi nóng và ổn định lại chất lượng**.

---

## 2. Phát hành phiên bản

**Không có phiên bản mới nào được phát hành**

> Lưu ý: Các vấn đề hồi quy như thiếu Control UI và sự cố ứng dụng WhatsApp do phiên bản 2026.3.22 gây ra đang được khẩn cấp khắc phục, dự kiến bản vá sẽ sớm được phát hành.

---

## 3. Tiến độ dự án

### Các PR quan trọng đã hợp nhất/đóng

| PR | Tác giả | Đóng góp cốt lõi | Issue liên quan |
|:---|:---|:---|:---|
| [#108](https://github.com/openclaw/openclaw/pull/108) | thewilloftheshadow | Thêm giao diện kết nối Discord, Signal, iMessage, hoàn thiện giao diện thống nhất kênh nhắn tin đa nền tảng | - |
| [#54097](https://github.com/openclaw/openclaw/pull/54097) | drobison00 | **Sửa lỗi bảo mật**: Lệnh biến đổi `/allowlist` nội bộ yêu cầu bắt buộc quyền `operator.admin`, bịt kín lỗ hổng leo thang đặc quyền | - |
| [#53715](https://github.com/openclaw/openclaw/pull/53715) | lndyzwdxhs | Sửa lỗi xác thực trường `card` của công cụ tin nhắn Feishu, giải tỏa tắc nghẽn gửi tin nhắn media | #53697 |
| [#53992](https://github.com/openclaw/openclaw/pull/53992) | vincentkoc | **Hoàn thiện điểm cuối tương thích OpenAI**: Thêm `/v1/models` và `/v1/embeddings`, tăng cường khả năng tương thích với hệ sinh thái như Open WebUI/LibreChat | - |
| [#44969](https://github.com/openclaw/openclaw/pull/44969) | Kathie-yu | Sửa lỗi chuẩn hóa baseUrl cho nhà cung cấp Google Generative AI tùy chỉnh | - |
| [#43788](https://github.com/openclaw/openclaw/pull/43788) | lefarcen | Sửa lỗi bỏ qua tin nhắn nhóm Feishu một cách im lặng (trường hợp hết thời gian chờ phát hiện bot-info) | - |
| [#44083](https://github.com/openclaw/openclaw/pull/44083) | bebule | Sửa lỗi phân tích biến môi trường cổng theo kiểu Compose (`127.0.0.1:18789` bị đọc sai thành cổng 127) | - |

**Đánh giá tiến độ tổng thể**: Các PR hợp nhất hôm nay chủ yếu tập trung vào **sửa lỗi ổn định và khả năng tương thích hệ sinh thái**, không giới thiệu các tính năng mới lớn. Đội ngũ cốt lõi đang kiểm soát ảnh hưởng dây chuyền của bản hồi quy phiên bản 2026.3.22 thông qua các bản vá dày đặc, chất lượng dự án đang trong **giai đoạn xác minh sửa lỗi**.

---

## 4. Điểm nóng cộng đồng

### Các Issues được thảo luận sôi nổi nhất

| Issue | Số bình luận | Yêu cầu cốt lõi | Tín hiệu cảm xúc |
|:---|:---|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Ứng dụng Clawdbot trên Linux/Windows | **48 bình luận** | Khách hàng máy tính để bàn đa nền tảng còn thiếu từ lâu, macOS/iOS/Android đã bao phủ, người dùng Linux/Windows kêu gọi chức năng tương đương | ⭐ **Nóng bỏng lâu dài**, 65 👍, được coi là lỗ hổng quan trọng đối với sự hoàn chỉnh của hệ sinh thái |
| [#49836](https://github.com/openclaw/openclaw/issues/49836) Cảnh báo an ninh lừa đảo | 33 bình luận | Lừa đảo airdrop giả mạo nhân danh OpenClaw, cộng đồng cần làm rõ và bảo vệ chính thức | Nhạy cảm về an ninh, đã đóng nhanh chóng |
| [#52885](https://github.com/openclaw/openclaw/issues/52885) Vấn đề tương thích ứng dụng WeChat | 31 bình luận | Ứng dụng WeChat chính thức của Tencent không tương thích với phiên bản 2026.3.22+, người dùng doanh nghiệp bị cản trở | **Chặn cấp doanh nghiệp**, 0 👍 phản ánh tính khẩn cấp chứ không phải sự đồng ý |
| [#52823](https://github.com/openclaw/openclaw/issues/52823) Thiếu tài nguyên Control UI | 31 bình luận | Giao diện người dùng bị lỗi sau khi nâng cấp, cần xây dựng thủ công hoặc chạy ở chế độ nhà phát triển | Điểm đau hồi quy, lỗi quy trình tài liệu/phát hành |
| [#52808](https://github.com/openclaw/openclaw/issues/52808) Thiếu gói npm dist/control-ui/ | 30 bình luận | Gói npm 2026.3.22 không bao gồm sản phẩm xây dựng Control UI | **Hồi quy ảnh hưởng cao**, 61 👍 |

### Phân tích điểm nóng

- **#75 Ứng dụng đa nền tảng** là **yêu cầu chức năng dai dẳng nhất** của cộng đồng, PR #53905 hôm nay đã gửi phiên bản đầu tiên của ứng dụng gốc GTK4 cho Linux, đánh dấu Issue này bước vào giai đoạn giải quyết thực chất.
- **Khủng hoảng chất lượng phiên bản 2026.3.22** chiếm các vị trí nóng từ 3-5, phản ánh sự thiếu sót hệ thống trong việc xác minh khả năng tương thích của gói npm và SDK plugin trong quy trình phát hành.
- Vấn đề tương thích ứng dụng WeChat nhấn mạnh khó khăn trong việc phối hợp giữa **hệ sinh thái plugin của bên thứ ba** và vòng đời phiên bản cốt lõi.

---

## 5. Lỗi và độ ổn định

### Mức độ nghiêm trọng: 🔴 Chặn (Đã ảnh hưởng đến sản xuất)

| Issue | Hiện tượng | Phiên bản | PR Sửa lỗi | Tình trạng |
|:---|:---|:---|:---|:---|
| [#52808](https://github.com/openclaw/openclaw/issues/52808) | Control UI hoàn toàn không khả dụng (503) | 2026.3.22 | [#53373](https://github.com/openclaw/openclaw/pull/53373) | Đang xác minh thử nghiệm |
| [#53247](https://github.com/openclaw/openclaw/issues/53247) | Ứng dụng WhatsApp gặp sự cố (thiếu light-runtime-api) | 2026.3.23 | - | **Chờ sửa** |
| [#52885](https://github.com/openclaw/openclaw/issues/52885) | Lỗi tải ứng dụng WeChat (thay đổi đường dẫn nhập ESM) | 2026.3.22+ | - | Cần Tencent cập nhật |
| [#52081](https://github.com/openclaw/openclaw/issues/52081) | Lỗi tải ứng dụng Feishu (API runtime không tương thích) | 2026.3.22+ | - | **Chờ sửa** |

### Mức độ nghiêm trọng: 🟡 Chức năng (Cảnh bị ảnh hưởng)

| Issue | Hiện tượng | Ghi chú |
|:---|:---|:---|
| [#53644](https://github.com/openclaw/openclaw/issues/53644) | Discord WebSocket 1006 đóng bất thường gây sập cổng | Không có tự động kết nối lại, tiến trình thoát |
| [#53317](https://github.com/openclaw/openclaw/issues/53317) | Token OAuth bị ghi đè bởi bộ nhớ cache lỗi thời khi khởi động | người dùng openai-codex liên tục bị ngắt kết nối |
| [#52024](https://github.com/openclaw/openclaw/issues/52024) | tool_use/tool_result cắt ngữ cảnh, API từ chối | Kích hoạt bởi cuộc hội thoại dài |
| [#53955](https://github.com/openclaw/openclaw/issues/53955) | QMD bộ nhớ chỉ mục 0/10 tệp, memory_search hoàn toàn trống | Hồi quy 2026.3.23-2 |

### Mức độ nghiêm trọng: 🟢 Chung

- [#54039](https://github.com/openclaw/openclaw/issues/54039) Đường dẫn tuyệt đối Windows bị nối lặp lại thư mục gốc của workspace
- [#53363](https://github.com/openclaw/openclaw/issues/53363) Lỗi Mistral AI 422 liên tục (tuyên bố đã sửa nhưng chưa giải quyết)

**Đánh giá độ ổn định**: Phiên bản 2026.3.22-2026.3.23 đã gây ra **nhiều lỗi hồi quy hệ thống**, liên quan đến đóng gói npm, SDK plugin, và quản lý trạng thái OAuth. Khuyến nghị người dùng tạm dừng nâng cấp lên 2026.3.22+, chờ bản vá.

---

## 6. Yêu cầu chức năng và tín hiệu lộ trình

| Yêu cầu | Issue/PR | Mức độ trưởng thành | Khả năng tích hợp |
|:---|:---|:---:|:---|
| **Ứng dụng máy tính gốc Linux** | [PR #53905](https://github.com/openclaw/openclaw/pull/53905) | 🔥 Phiên bản đầu tiên đã được gửi | **Cao** — Trực tiếp phản hồi #75, kiến trúc GTK4/libadwaita |
| **Ứng dụng Wear OS** | [PR #47604](https://github.com/openclaw/openclaw/pull/47604) | Đang phát triển | Trung bình — Phụ thuộc vào việc tái cấu trúc lớp chia sẻ Android |
| **Hỗ trợ kênh QQ** | [PR #52986](https://github.com/openclaw/openclaw/pull/52986) | Hoàn thành chức năng chờ đánh giá | Trung bình — Giá trị chiến lược thị trường Trung Quốc |
| **"Chế độ giám sát" WhatsApp** | [PR #53190](https://github.com/openclaw/openclaw/pull/53190) | Chờ hợp nhất | Cao — Cảnh ghi nhật ký nhóm thụ động |
| **CLI di chuyển giữa các thiết bị** | [PR #53520](https://github.com/openclaw/openclaw/pull/53520) | Chờ đánh giá | Cao — `openclaw migrate export/import` |
| **Chế độ xem khả năng công cụ thời gian chạy** | [PR #54088](https://github.com/openclaw/openclaw/pull/54088) | Chờ đánh giá | Cao — Giải quyết vấn đề gây hiểu lầm của `/tools` |
| **Bộ nhớ dài hạn và quản lý kiến thức** | [#50096](https://github.com/openclaw/openclaw/issues/50096) | Giai đoạn thảo luận | Trung bình — Yêu cầu cấp độ kiến trúc, cần thiết kế RFC |
| **tư duy mặc định cho mỗi tác nhân** | [#21097](https://github.com/openclaw/openclaw/issues/21097) | Chờ triển khai | Trung bình — Cảnh tối ưu hóa chi phí |

**Tín hiệu lộ trình**: Đội ngũ cốt lõi đang chuyển từ "mở rộng chức năng" sang "**nền tảng hóa và quản trị hệ sinh thái**" — các ứng dụng khách đa nền tảng (Linux/Wear OS), di chuyển giữa các thiết bị, cải thiện API plugin (abort agent, lộ ra runId) tạo thành đường chính cho Q2 2026.

---

## 7. Tóm tắt phản hồi người dùng

### Tổng hợp điểm đau

> *"The plumbing is fighting that promise."* — [#50096](https://github.com/openclaw/openclaw/issues/50096)

| Chủ đề | Phản hồi điển hình | Nguồn |
|:---|:---|:---|
| **Khủng hoảng niềm tin vào chất lượng phiên bản** | "Sau khi nâng cấp lên 2026.3.22, giao diện người dùng bị lỗi hoàn toàn, việc quay lại cũng khó khăn" | #52808, #52823 |
| **Phân mảnh hệ sinh thái plugin** | "Mỗi lần nâng cấp phiên bản cốt lõi đều sợ các plugin của bên thứ ba bị treo" | #52885, #52081 |
| **Độ tin cậy của OAuth** | "Cạnh tranh làm mới token dẫn đến việc ngắt kết nối liên tục, không dám sử dụng trong môi trường sản xuất" | #26322, #53317 |
| **Thông tin chẩn đoán không đủ** | "WSL2 + Windows + CDP từ xa ba lớp vấn đề không phân biệt được lỗi ở lớp nào" | #41553 |
| **Hiệu quả hệ thống bộ nhớ** | "Driftnet đã nghe 1000 giờ hội thoại, nhưng tác nhân luôn bắt đầu từ con số không" | #50096 |

### Điểm hài lòng

- Thiết kế kiến trúc thống nhất cho các kênh nhắn tin đa nền tảng (Discord/Telegram/Feishu, v.v.) được công nhận.
- Trải nghiệm tương tác thời gian thực của Control UI được coi là lợi thế khác biệt.

---

## 8. Tồn đọng cần xử lý

### Các Issues có giá trị cao, tồn đọng lâu ngày

| Issue | Số ngày | Vấn đề cốt lõi | Rủi ro |
|:---|:---|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Ứng dụng máy tính Linux/Windows | **84 ngày** | Ứng dụng máy tính đa nền tảng | Mất cộng đồng vào đối thủ cạnh tranh; **PR #53905 hôm nay đã gửi** |
| [#25215](https://github.com/openclaw/openclaw/issues/25215) Kiểm tra SSRF chặn fake-ip của Clash | **29 ngày** | Chức năng mạng của người dùng proxy bị ảnh hưởng | Danh tiếng về khả năng tương thích mạng |
| [#10386](https://github.com/openclaw/openclaw/issues/10386) Workspace skills không phát hiện được | **47 ngày** | Mở rộng kỹ năng tùy chỉnh không hiệu quả | Hệ sinh thái nhà phát triển |
| [#27473](https://github.com/openclaw/openclaw/issues/27473) Cài đặt Gateway allowedOrigins gây nhầm lẫn | **27 ngày** | Lỗi khi triển khai tự host doanh nghiệp | Trải nghiệm tự host của doanh nghiệp |

### Các PR quan trọng chờ đánh giá

| PR | Số ngày | Giá trị | Rủi ro chặn |
|:---|:---|:---|:---|
| [#47604](https://github.com/openclaw/openclaw/pull/47604) Wear OS | **10 ngày** | Lối vào hệ sinh thái thiết bị đeo | Kích thước mã XL, thiếu tài nguyên đánh giá |
| [#52986](https://github.com/openclaw/openclaw/pull/52986) Kênh QQ | **2 ngày** | Thị trường Trung Quốc | Kiểm tra tuân thủ kênh |
| [#53520](https://github.com/openclaw/openclaw/pull/53520) Di chuyển giữa các thiết bị | **1 ngày** | Độ bám dính của người dùng | Kiểm toán an ninh dữ liệu |

---

**Thời gian tạo báo cáo**: 2026-03-25  
**Cơ sở dữ liệu**: Cửa sổ cuộn 24h của GitHub API

---

## So sánh hệ sinh thái ngang

# Báo cáo phân tích so sánh ngang hệ sinh thái trợ lý AI cá nhân

**Ngày phân tích**: 2026-03-25 | **Nguồn dữ liệu**: Dữ liệu công khai của GitHub

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái mã nguồn mở trợ lý AI cá nhân/tác nhân tự hành đang trải qua **bước nhảy vọt quan trọng từ "sẵn sàng chức năng" sang "sẵn sàng sản xuất"**. Các dự án hàng đầu xử lý trung bình 50-500 Issues/PR mỗi ngày, cho thấy cường độ kỹ thuật cực cao; **khách hàng đa nền tảng** (Linux, Wear OS, WeChat) và **chức năng cấp doanh nghiệp** (SSO, RBAC, đa người thuê) đang trở thành hướng đích chung; **an ninh chuỗi cung ứng** (sự cố đầu độc LiteLLM) và **kiến trúc bộ nhớ dài hạn** (sơ đồ kiến thức, thiết kế bắt chước hải mã) nổi lên như các chiến trường khác biệt thế hệ tiếp theo. Hệ sinh thái tổng thể thể hiện sự phân tầng theo cấp bậc: "tham chiếu cốt lõi (OpenClaw) + kịch bản dọc (LobsterAI/Cowork, IronClaw/Hệ sinh thái NEAR, NanoBot/Tương tác giọng nói) + cơ sở hạ tầng (Moltis/mô-đun hóa, TinyClaw/hệ thống hàng đợi)".

---

## 2. So sánh mức độ hoạt động của từng dự án

| Dự án | Issues (24h) | PRs (24h) | Phát hành | Đánh giá sức khỏe |
|:---|:---:|:---:|:---:|:---|
| **OpenClaw** | 500 (429 mới/hoạt động, 71 đóng) | 500 (403 chờ hợp nhất, 97 hợp nhất/đóng) | Không | 🔴 **Hoạt động cao - khủng hoảng cao**: Vấn đề hồi quy hệ thống chờ giải quyết, giai đoạn ổn định lại chất lượng |
| **NanoBot** | 21 (19 hoạt động) | 51 (40 chờ hợp nhất) | Không | 🟡 **Hoạt động cao - phản ứng an ninh**: Khẩn cấp xử lý khủng hoảng chuỗi cung ứng LiteLLM |
| **ZeroClaw** | 50 (43 đóng, 7 hoạt động) | 50 (31 chờ hợp nhất, 19 hợp nhất) | **v0.6.2** | 🟢 **Hoạt động cao - củng cố chất lượng**: Sửa lỗi hồi quy v0.6 dày đặc, lặp lại nhanh chóng |
| **PicoClaw** | 17 (11 hoạt động, 6 đóng) | 68 (24 chờ đánh giá, 44 hợp nhất) | **v0.2.3-nightly** | 🟢 **Hoạt động cao - nước rút chức năng**: Tái cấu trúc WeChat doanh nghiệp + triển khai tương tác giọng nói |
| **NanoClaw** | 13 (tất cả hoạt động) | 50 (35 chờ hợp nhất) | Không | 🟡 **Hoạt động cao trung bình - nợ kỹ thuật**: Hợp nhất lỗi nhánh kỹ năng tràn lan, cần chú ý kiến trúc |
| **NullClaw** | 0 | 6 (tất cả chờ hợp nhất) | Không | 🟡 **Sản lượng cao - tương tác bằng không**: 6 PR không có bình luận, rõ ràng tắc nghẽn đánh giá |
| **IronClaw** | 14 (hoạt động) | 49 (34 chờ hợp nhất) | Không | 🟢 **Hoạt động cao - chuyển đổi doanh nghiệp**: Tạo hàng loạt Issues chức năng cấp doanh nghiệp, chiến lược rõ ràng |
| **LobsterAI** | 23 (hoạt động) | 50 (cập nhật) | Không | 🟢 **Hoạt động cao - trau dồi trải nghiệm**: Tối ưu hóa hội thoại Cowork + tích hợp hệ sinh thái MCP |
| **TinyClaw** | 0 | 8 (tất cả hợp nhất) | **v0.0.19** (3 phiên bản/24h) | 🟢 **Lặp lại cực cao**: Tái cấu trúc hệ thống hàng đợi + triển khai trình quản lý kỹ năng |
| **Moltis** | 10 (4 hoạt động, 6 đóng) | 18 (1 chờ hợp nhất, 17 hợp nhất) | Không | 🟢 **Thông lượng cao - trưởng thành**: Tỷ lệ hợp nhất PR 94%, thúc đẩy kiến trúc mô-đun |
| **CoPaw** | 50 (39 mới/hoạt động) | 50 (17 chờ hợp nhất, 33 hợp nhất) | **v0.2.0** | 🔴 **Khủng hoảng khi phát hành**: CPU 100%, mất dữ liệu Docker chờ hotfix |
| **ZeptoClaw** | 29 (hoạt động) | 29 (8 chờ hợp nhất, 21 hợp nhất) | **v0.8.1/v0.8.2** | 🟢 **Lặp lại ổn định**: Trau dồi kênh Telegram + bố trí giao thức ACP |
| **EasyClaw** | 0 | 0 (3 PR lịch sử đã đóng) | Không | 🟡 **Giai đoạn im lặng**: Tái cấu trúc UI hoàn thành, cần kích hoạt lại mức độ tham gia |

---

## 3. Vị thế của OpenClaw trong hệ sinh thái

### Lợi thế cốt lõi
| Khía cạnh | Biểu hiện cụ thể | Tham chiếu so sánh |
|:---|:---|:---|
| **Quy mô hệ sinh thái lớn nhất** | 500 Issues/PR hoạt động hàng ngày, gấp hơn 10 lần so với dự án đứng thứ hai | NanoBot 51 PR, IronClaw 49 PR |
| **Phủ sóng kênh toàn diện nhất** | Discord/Signal/iMessage/Feishu/WhatsApp/QQ và hơn 10+ nền tảng | IronClaw tập trung vào Slack/Discord, PicoClaw tập trung vào hệ sinh thái WeChat |
| **Control UI khác biệt** | Giao diện tương tác thời gian thực được coi là lợi thế khác biệt | Hầu hết các dự án chỉ có CLI/giao diện API |
| **Chức năng doanh nghiệp đi đầu** | CLI di chuyển giữa các thiết bị, chế độ xem công cụ thời gian chạy đã được triển khai | IronClaw đang bắt kịp đa người thuê/SSO |

### Khác biệt về tuyến công nghệ
| Đặc điểm | OpenClaw | So sánh hệ sinh thái |
|:---|:---|:---|
| **Triết lý kiến trúc** | "Tích hợp toàn năng" — kênh, UI, bộ nhớ, công cụ tích hợp sẵn | Moltis "crate mô-đun", TinyClaw "hạt nhân hàng đợi" tách rời tối đa |
| **Nhịp độ phát hành** | Phiên bản lớn hàng tháng (khủng hoảng hồi quy do 2026.3.22 gây ra) | Bản vá hàng ngày của ZeroClaw, lặp lại nửa ngày của TinyClaw |
| **Hệ sinh thái plugin** | SDK plugin của bên thứ ba (ứng dụng WeChat/Feishu được bảo trì độc lập) | Trình quản lý kỹ năng tích hợp của CoPaw, lỗi hợp nhất tự động nhánh kỹ năng của NanoClaw |
| **Chiến lược bộ nhớ** | Driftnet (giám sát hội thoại) + ngữ cảnh cơ bản | Bộ nhớ sinh học Seahorse của PicoClaw, biểu đồ kiến thức KgMemory của NullClaw |

### So sánh quy mô cộng đồng
- **Khối lượng tuyệt đối**: Hoạt động hàng ngày của OpenClaw ≈ Tổng của dự án thứ 2-5
- **Độ sâu tham gia**: Tỷ lệ tương tác bình luận của ZeroClaw/Moltis cao hơn (gia tăng người dùng tiếng Trung, thảo luận RFC)
- **Cấu trúc người đóng góp**: OpenClaw dựa vào đội ngũ cốt lõi (thewilloftheshadow, v.v.), IronClaw do người dùng doanh nghiệp thúc đẩy (ilblackdragon tạo hàng loạt nhu cầu doanh nghiệp)

---

## 4. Hướng công nghệ được quan tâm chung

| Hướng công nghệ | Dự án liên quan | Yêu cầu cụ thể | Mức độ khẩn cấp |
|:---|:---|:---|:---:|
| **Khách hàng đa nền tảng** | OpenClaw (#75 Linux/Windows), PicoClaw (Wear OS), IronClaw (#1584 WeChat) | Bổ sung khoảng trống máy tính để bàn/thiết bị đeo ngoài macOS/iOS/Android | ⭐⭐⭐⭐⭐ |
| **Chức năng cấp doanh nghiệp** | IronClaw (#1610 SSO, #1607 Workspace), OpenClaw (di chuyển giữa các thiết bị), LobsterAI (Khả năng quan sát Opik) | Đa người thuê, RBAC, nhật ký kiểm toán, SSO trở thành rào cản áp dụng B2B | ⭐⭐⭐⭐⭐ |
| **Kiến trúc bộ nhớ dài hạn** | PicoClaw (#1919 Seahorse), NullClaw (#712 KgMemory), NanoClaw (#2183 Honcho), OpenClaw (#50096) | "Bộ nhớ thực sự" vượt xa tìm kiếm vector — suy luận quan hệ, tích lũy kinh nghiệm, tối ưu hóa tự động | ⭐⭐⭐⭐☆ |
| **An ninh chuỗi cung ứng** | NanoBot (#2439 đầu độc LiteLLM), OpenClaw (#54097 sửa lỗi leo thang đặc quyền) | Kiểm tra thư viện phụ thuộc, SBOM, nguyên tắc đặc quyền tối thiểu | ⭐⭐⭐⭐⭐ |
| **Tương thích giao thức MCP/A2A** | Moltis (#479 Node.js MCP tích hợp Docker), ZeptoClaw (#356 ACP), LobsterAI (#728 gỡ lỗi MCP) | Tiêu chuẩn hóa kết nối hệ sinh thái công cụ, tránh làm lại bánh xe | ⭐⭐⭐⭐☆ |
| **Tương tác giọng nói** | PicoClaw (#1939 TTS/ASR), NanoBot (Kỹ năng Whisper) | Đầu vào/đầu ra đa phương thức, giảm ma sát tương tác | ⭐⭐⭐⭐☆ |
| **Nén ngữ cảnh/tối ưu hóa chi phí** | CoPaw (#2047, #1974), NanoBot (#2375 Heartbeat token bùng nổ) | Kiểm soát chi phí hội thoại dài, tránh thảm họa "560k token mỗi lần" | ⭐⭐⭐⭐☆ |

---

## 5. Phân tích định vị khác biệt

| Dự án | Trọng tâm chức năng cốt lõi | Hồ sơ người dùng mục tiêu | Đặc điểm kiến trúc công nghệ |
|:---|:---|:---|:---|
| **OpenClaw** | Trung tâm nhắn tin đa kênh + Control UI | Nhà phát triển cực đoan, người điều hành đa nền tảng | Monolithic TypeScript, mở rộng SDK plugin |
| **ZeroClaw** | Tác nhân tự hành (cải tiến kỹ năng tự động, giao thức A2A) | Nhà nghiên cứu AI, người dùng tự động hóa nặng | Lõi Rust, vòng lặp học tập Hermes |
| **NanoBot** | Ưu tiên giọng nói + kênh dưới dạng dịch vụ | Người điều hành hệ sinh thái IM tiếng Trung | Bất đồng bộ Python, chuyển đổi trong khủng hoảng LiteLLM |
| **IronClaw** | Hệ sinh thái blockchain NEAR + SaaS doanh nghiệp | Nhà phát triển Web3, CNTT doanh nghiệp | Full-stack Rust, đang nâng cấp kiến trúc đa người thuê |
| **LobsterAI** | Trải nghiệm Cowork hóa IDE + mô hình nội địa | Nhà phát triển Trung Quốc, người dùng hệ sinh thái Youdao | Electron + ưu tiên mô hình cục bộ |
| **TinyClaw** | Độ tin cậy hàng đợi + quản lý tiến trình con | Người vận hành tự host, triển khai biên | Sự kiện hướng Node.js, tách rời tối đa |
| **Moltis** | Khung tác nhân mô-đun | Nhà phát triển hệ sinh thái Rust, tích hợp hệ thống | Kiến trúc dạng Crate, thiết kế có thể kết hợp |
| **CoPaw** | Cộng tác đa tác nhân (ACP) | Nhà nghiên cứu điều phối tác nhân, quy trình công việc doanh nghiệp | Python, giao thức truyền thông giữa các tác nhân |
| **PicoClaw** | Phối hợp phần cứng (hệ sinh thái Sipeed) + WeChat sâu | Nhà sáng tạo phần cứng Trung Quốc, người điều hành hệ sinh thái WeChat | Go + tối ưu hóa nhúng |
| **ZeptoClaw** | Tác nhân nhúng nhẹ | Môi trường hạn chế tài nguyên, người điều hành Bot Telegram | Rust tối giản, hộp cát an toàn |

---

## 6. Phân tầng mức độ nóng và trưởng thành của cộng đồng

### 🔥 Giai đoạn lặp lại nhanh (Trung bình 30+ PR/ngày, mở rộng chức năng)
| Dự án | Tín hiệu chính | Rủi ro |
|:---|:---|:---|
| **OpenClaw** | 500 PR/ngày, nước rút khách hàng đa nền tảng | Khủng hoảng chất lượng 2026.3.22, tích lũy nợ kỹ thuật |
| **CoPaw** | Phát hành v0.2.0, triển khai giao thức ACP | CPU 100%/mất dữ liệu Docker khi phát hành, cần hotfix |
| **PicoClaw** | Tái cấu trúc WeChat doanh nghiệp + tương tác giọng nói song song | Rủi ro làm sạch cấu hình (#1941) |

### 🛠️ Giai đoạn củng cố chất lượng (Bản vá dày đặc, ưu tiên ổn định)
| Dự án | Tín hiệu chính | Tiến độ |
|:---|:---|:---|
| **ZeroClaw** | v0.6.0→v0.6.2 bản vá hàng ngày | Tái viết chiến lược an ninh "giảm trí thông minh", sửa lỗi truyền phát |
| **TinyClaw** | v0.0.17→v0.0.19 lặp lại nửa ngày | Tái cấu trúc đầu cuối hệ thống hàng đợi hoàn thành |
| **NanoBot** | Phản ứng khẩn cấp với đầu độc LiteLLM | Đang đánh giá giải pháp thay thế SDK gốc |

### 🏗️ Giai đoạn nâng cấp kiến trúc (Tái cấu trúc cơ sở hạ tầng, giai đoạn nuôi dưỡng cộng đồng)
| Dự án | Tín hiệu chính | Điểm nghẽn |
|:---|:---|:---|
| **Moltis** | Tách rời lớp truyền tải HTTP, triển khai kiến trúc đa tác nhân | PR không có bình luận cần bổ sung quy trình RFC |
| **NullClaw** | Bộ nhớ biểu đồ kiến thức, đồng bộ hóa giữa các phiên bản | 6 PR không có tương tác, tắc nghẽn tài nguyên đánh giá |
| **IronClaw** | Lập kế hoạch hàng loạt chức năng doanh nghiệp | Phản hồi kênh châu Á như WeChat bị chậm |
| **ZeptoClaw** | Giao thức ACP chờ 11 ngày | Cơ sở hạ tầng cấp chiến lược cần người bảo trì ưu tiên |

### 😴 Giai đoạn im lặng/chuyển đổi
| Dự án | Tình trạng | Đề xuất |
|:---|:---|:---|
| **EasyClaw** | Tái cấu trúc UI hoàn thành, không có tương tác | Triển khai Demo thu thập phản hồi, kích hoạt cộng đồng |
| **NanoClaw** | Lỗi hợp nhất nhánh kỹ năng tràn lan | Tái cấu trúc kiến trúc hoặc can thiệp công cụ tự động |

---

## 7. Tín hiệu xu hướng đáng chú ý

### Tín hiệu một: Chuyển đổi cứng từ "sẵn sàng chức năng" sang "chi phí kiểm soát được"
> **Hỗ trợ dữ liệu**: NanoBot #2375 (Heartbeat 560k token/lần), CoPaw #2047 (thảm họa UX nén ngữ cảnh), OpenClaw #50096 ("Driftnet nghe 1000 giờ nhưng tác nhân bắt đầu từ con số không")

**Khải thị cho nhà phát triển**: Kinh tế token của tác nhân chu kỳ dài trở thành yếu tố cốt lõi cho việc triển khai sản xuất, cần tích hợp:
- Cơ chế cách ly trạng thái (tách biệt Heartbeat so với ngữ cảnh tác vụ)
- Cắt ngữ cảnh thích ứng (bảo toàn tính toàn vẹn của tool_use/tool_result)
- Bảng điều khiển hiển thị chi phí (dự đoán tiêu thụ token cho người dùng)

### Tín hiệu hai: An ninh chuỗi cung ứng trở thành nền tảng tin cậy của hệ sinh thái
> **Hỗ trợ dữ liệu**: NanoBot đầu độc LiteLLM (#2439 Critical), sửa lỗi OpenClaw leo thang đặc quyền (#54097), Moltis tích hợp Node.js nội bộ để giảm phụ thuộc bên ngoài (#479)

**Khải thị cho nhà phát triển**:
- Khóa phụ thuộc cốt lõi + tạo SBOM trở thành tiêu chuẩn CI
- Xem xét thay thế lớp tổng hợp bằng SDK gốc (LiteLLM → SDK OpenAI/Anthropic)
- Bao gồm chữ ký hình ảnh container, Build có thể tái sản xuất vào quy trình phát hành

### Tín hiệu ba: "Bộ nhớ thực sự" vượt qua RAG trở thành chiến trường khác biệt
> **Hỗ trợ dữ liệu**: Đề xuất sinh học Seahorse của PicoClaw (#1919), KgMemory của NullClaw (#712), tích hợp Honcho của NanoClaw (#2183), thảo luận dài hạn #50096 của OpenClaw

**Hướng công nghệ**:
| Cấp độ | Chính thống hiện tại | Khám phá thế hệ tiếp theo |
|:---|:---|:---|
| Lưu trữ | Cơ sở dữ liệu vector | Biểu đồ kiến thức (SQLite CTE), bắt chước hải mã (mất mát ngắn hạn + ngữ nghĩa dài hạn) |
| Tìm kiếm | Tìm kiếm độ tương tự | Suy luận quan hệ, liên kết thời gian, củng cố kinh nghiệm (Hebbian/Ebbinghaus) |
| Cập nhật | Thủ công/theo thời gian | Tự động tóm tắt, cải tiến kỹ năng tự động (vòng lặp Hermes của ZeroClaw #4619) |

### Tín hiệu bốn: Chuẩn hóa giao thức đa tác nhân (ACP/A2A/MCP) tăng tốc
> **Hỗ trợ dữ liệu**: PR A2A của ZeroClaw (#4166), ACP của ZeptoClaw (#356), Node.js tích hợp của Moltis (#479), phát hành CoPaw ACP v0.2.0

**Phán đoán hệ sinh thái**: Q2 2026 sẽ là cửa sổ cạnh tranh giao thức, những người đạt được khả năng tương tác đa dự án trước sẽ định nghĩa tiêu chuẩn kết nối hệ sinh thái.

### Tín hiệu năm: Chức năng cấp doanh nghiệp từ "điểm cộng" thành "điều kiện tiên quyết"
> **Hỗ trợ dữ liệu**: IronClaw tạo hàng loạt SSO/RBAC/Workspace (#1610-1609), OpenClaw di chuyển giữa các thiết bị, LobsterAI khả năng quan sát Opik

**Khải thị sản phẩm**: Bước nhảy vọt từ công cụ dành cho nhà phát triển cá nhân sang SaaS doanh nghiệp, cần đồng bộ hoàn thành:
- Hệ thống danh tính (SSO/OIDC/SAML)
- Phân tách dữ liệu (đa người thuê/Workspace)
- Kiểm toán tuân thủ (lưu trữ nhật ký, ma trận đặc quyền)

---

**Kết luận báo cáo**: OpenClaw tiếp tục đóng vai trò "tham chiếu cốt lõi" của hệ sinh thái với lợi thế quy mô, nhưng khủng hoảng chất lượng và tắc nghẽn băng thông đánh giá tạo cơ hội cho những người theo kịp; **ZeroClaw (tác nhân tự hành), IronClaw (SaaS doanh nghiệp), Moltis (kiến trúc mô-đun)** hình thành năng lực cạnh tranh khác biệt theo hướng dọc; **an ninh chuỗi cung ứng, bộ nhớ dài hạn, giao thức đa tác nhân** tạo thành bước ngoặt công nghệ của H1 2026.

---

## Báo cáo chi tiết dự án cùng hạng mục

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Nhật ký hoạt động NanoBot | 2026-03-25

## 1. Tóm tắt nhanh trong ngày

NanoBot hôm nay ở trạng thái **hoạt động cao, phản ứng khủng hoảng cao**. Trong 24 giờ qua, đã có 21 Issues (19 hoạt động/mới mở) và 51 PRs (40 chờ hợp nhất), mức độ thảo luận cộng đồng tăng đáng kể. Trọng tâm cốt lõi tập trung vào **phản ứng khẩn cấp với sự cố đầu độc chuỗi cung ứng LiteLLM** (#2439, #2443, #2448, #2441), dự án đang nhanh chóng thúc đẩy các giải pháp thay thế phụ thuộc. Đồng thời, vấn đề bùng nổ token do cơ chế Heartbeat gây ra (#2375) thu hút sự chú ý rộng rãi, đã có PR tối ưu hóa có mục tiêu được gửi. Tổng thể, dự án thể hiện khả năng hợp tác cộng đồng mạnh mẽ về phản ứng an ninh và tối ưu hóa hiệu suất, nhưng PR chờ hợp nhất tồn đọng khá nhiều (40), cần chú ý băng thông đánh giá.

---

## 2. Phát hành phiên bản

**Không có phiên bản mới nào được phát hành**

---

## 3. Tiến độ dự án

### PR quan trọng đã hợp nhất/đóng hôm nay

| PR | Tình trạng | Đóng góp cốt lõi | Ý nghĩa tiến độ dự án |
|:---|:---|:---|:---|
| [#2448](https://github.com/HKUDS/nanobot/pull/2448) `refactor: replace litellm with native openai + anthropic SDKs` | **Đã đóng** (điều chỉnh chiến lược) | Loại bỏ hoàn toàn phụ thuộc LiteLLM, thay thế bằng SDK gốc | **Sửa lỗi an ninh cấp kiến trúc** — Loại bỏ hoàn toàn rủi ro đầu độc chuỗi cung ứng, mặc dù cuối cùng đã đóng nhưng đã thúc đẩy thảo luận về giải pháp thay thế |
| [#2441](https://github.com/HKUDS/nanobot/pull/2441) `security: prevent litellm 1.82.7+` | **Đã đóng** | Giải pháp giảm nhẹ khóa phiên bản | Biện pháp an ninh tạm thời, giành thời gian để thay thế hoàn chỉnh |
| [#2428](https://github.com/HKUDS/nanobot/pull/2428) `Fix/Feat(WeiXin): Adapt to WeChat plugin 1.0.3` | **Đã đóng** | Thích ứng kênh WeChat với plugin phiên bản mới | Nâng cao độ ổn định kênh, hỗ trợ các tính năng mới như `routeTag`/`SKRouteTag` |
| [#2423](https://github.com/HKUDS/nanobot/pull/2423) `fix: cherry-pick shell zombie process reaping` | **Đã đóng** | Sửa lỗi tiến trình zombie sau khi lệnh shell hết thời gian chờ | Sửa lỗi ổn định cho proxy chạy lâu dài |

**Đánh giá tiến độ tổng thể**: Tiến độ cốt lõi hôm nay nằm ở **phản ứng nhanh chóng với khủng hoảng an ninh** — cộng đồng đã hình thành và đánh giá nhiều giải pháp thay thế LiteLLM trong vòng 24 giờ, mặc dù #2448 cuối cùng đã đóng, nó đã cung cấp một tham chiếu quan trọng cho các quyết định tiếp theo. Ở cấp độ cơ sở hạ tầng (thích ứng WeChat, quản lý tiến trình), cũng có những sửa chữa thực chất.

---

## 4. Điểm nóng cộng đồng

### Các Issue thảo luận sôi nổi nhất

| Thứ hạng | Issue/PR | Số bình luận | Phân tích yêu cầu cốt lõi |
|:---|:---|:---|:---|
| 🔥1 | [#2375](https://github.com/HKUDS/nanobot/issues/2375) Heartbeat session history causes ENORMOUS token usage | **9 bình luận** | **Khủng hoảng chi phí**: Người dùng thử nghiệm thực tế cho thấy Heartbeat đơn lẻ tiêu tốn **560k token**, nhiệm vụ định kỳ 30 phút khiến nhật ký phình to thành hơn 600 dòng. Yêu cầu: cơ chế cách ly trạng thái + cơ chế cắt lịch sử |
| 🔥2 | [#2443](https://github.com/HKUDS/nanobot/issues/2443) LiteLLM has been quarantined | **5 bình luận** | **Cảnh báo an ninh**: PyPI đánh dấu LiteLLM có rủi ro đánh cắp thông tin đăng nhập, người dùng yêu cầu phản hồi khẩn cấp chính thức |
| 🔥3 | [#2329](https://github.com/HKUDS/nanobot/issues/2329) custom model provider did not work with channels | **5 bình luận** | **Tính nhất quán của cấu hình**: CLI bình thường nhưng Feishu channel không hoạt động, phản ánh kênh tầng và lớp cốt lõi có khoảng cách truyền thông tin cấu hình |
| 🔥4 | [#2439](https://github.com/HKUDS/nanobot/issues/2439) Security: Malicious data-exfiltration code in litellm_init.pth | **4 bình luận** | **An ninh chuỗi cung ứng**: Phát hiện `nanobot-ai` v0.1.4.post5 gói tệp độc hại, mức độ nghiêm trọng được đánh dấu là **Critical** |

**Tín hiệu đằng sau điểm nóng**: Cộng đồng đang ở dưới áp lực kép của **"hoảng loạn an ninh + lo lắng chi phí"**. Sự cố LiteLLM bộc lộ lỗ hổng rủi ro của quản lý phụ thuộc, trong khi sự bùng nổ token của Heartbeat làm lộ ra khuyết điểm thiết kế của proxy chạy lâu dài — cả hai đều cần sửa chữa cấp độ kiến trúc chứ không phải vá lỗi.

---

## 5. Lỗi và độ ổn định

### Sắp xếp theo mức độ nghiêm trọng

| Mức độ nghiêm trọng | Issue | Mô tả | Tình trạng | PR Sửa lỗi |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#2439](https://github.com/HKUDS/nanobot/issues/2439) | Gói tệp chứa mã độc `litellm_init.pth`, có rủi ro rò rỉ dữ liệu | Mở | [#2448](https://github.com/HKUDS/nanobot/pull/2448) (đã đóng, cần giải pháp thay thế) |
| 🔴 **Critical** | [#2443](https://github.com/HKUDS/nanobot/issues/2443) | LiteLLM PyPI bị cách ly, rủi ro đánh cắp thông tin đăng nhập | Mở | Đang đánh giá |
| 🟠 **High** | [#2375](https://github.com/HKUDS/nanobot/issues/2375) | Lịch sử phiên Heartbeat dẫn đến tiêu thụ 560k token/lần | Mở | [#2430](https://github.com/HKUDS/nanobot/pull/2430), [#2435](https://github.com/HKUDS/nanobot/pull/2435) |
| 🟠 **High** | [#2369](https://github.com/HKUDS/nanobot/issues/2369) | Lời nhắc Cron bị trình đánh giá chặn im lặng, người dùng không nhận được thông báo | Mở | [#2449](https://github.com/HKUDS/nanobot/pull/2449) |
| 🟡 **Medium** | [#2440](https://github.com/HKUDS/nanobot/issues/2440) | `openai_codex` sử dụng `prompt_cache_key` khác nhau mỗi vòng, bộ nhớ cache vô hiệu | Mở | Không |
| 🟡 **Medium** | [#2437](https://github.com/HKUDS/nanobot/issues/2437) | Kết quả công cụ ghi vào tệp 16k không nhất quán với toàn bộ văn bản yêu cầu LLM, nhật ký lớn dễ gây lỗi | Mở | Không |
| 🟡 **Medium** | [#2450](https://github.com/HKUDS/nanobot/issues/2450) | minimax-m2.7 qua Ollama Cloud yêu cầu thứ 2+ thất bại | Mở | Không |
| 🟢 **Low** | [#2432](https://github.com/HKUDS/nanobot/issues/2432) | Lỗi `'NoneType' object is not subscriptable` | Mở | Không (cộng đồng cung cấp đề xuất sửa lỗi tạm thời) |

---

## 6. Yêu cầu chức năng và tín hiệu lộ trình

| Hướng chức năng | Issue/PR đại diện | Khả năng tích hợp | Căn cứ đánh giá |
|:---|:---|:---:|:---|
| **Bộ nhớ dài hạn (tích hợp Honcho)** | [#2183](https://github.com/HKUDS/nanobot/pull/2183) | ⭐⭐⭐⭐⭐ Cao | PR đã mở 7 ngày, trực tiếp phản hồi lộ trình #39, kiến trúc rõ ràng |
| **Hệ thống Hook kích hoạt sự kiện** | [#1934](https://github.com/HKUDS/nanobot/pull/1934) | ⭐⭐⭐⭐☆ Cao | Thảo luận sôi nổi, giải quyết điểm đau cập nhật kỹ năng nóng, đánh dấu `to-nightly` |
| **Kênh tương thích điểm cuối OpenAI** | [#1861](https://github.com/HKUDS/nanobot/pull/1861) | ⭐⭐⭐⭐☆ Cao | Mở rộng khả năng tích hợp hệ sinh thái, phù hợp với hướng nền tảng hóa |
| **Cách ly hộp cát bwrap** | [#1940](https://github.com/HKUDS/nanobot/pull/1940) | ⭐⭐⭐☆☆ Trung bình | Tăng cường an ninh, nhưng phụ thuộc vào khả năng cấp hệ thống, có thể bị hạn chế |
| **Kỹ năng truy vấn thông tin IP** | [#2451](https://github.com/HKUDS/nanobot/pull/2451) | ⭐⭐⭐☆☆ Trung bình | Kỹ năng nhỏ hữu ích, ngưỡng hợp nhất thấp |
| **Ngữ cảnh bộ nhớ VoIP** | [#2444](https://github.com/HKUDS/nanobot/pull/2444) | ⭐⭐☆☆☆ Chờ quyết định | Thông tin không đầy đủ, cần đánh giá thêm |
| **Tối ưu hóa hành vi Discord Threads** | [#2452](https://github.com/HKUDS/nanobot/pull/2452) | ⭐⭐⭐⭐☆ Cao | Sửa lỗi trải nghiệm người dùng, thay đổi nhỏ mang lại lợi ích rõ ràng |

**Tín hiệu phiên bản tiếp theo**: Bộ nhớ dài hạn (Honcho) và hệ thống Hook có khả năng cao nhất sẽ vào `nightly`, cả hai đều giải quyết vấn đề về khả năng mở rộng kiến trúc cốt lõi.

---

## 7. Tóm tắt phản hồi người dùng

### Điểm đau thực tế

| Kịch bản | Nguồn phản hồi | Sự bất mãn cốt lõi |
|:---|:---|:---|
| **Môi trường sản xuất WeChat doanh nghiệp** | [#2373](https://github.com/HKUDS/nanobot/issues/2373), [#2329](https://github.com/HKUDS/nanobot/issues/2329) | Lỗi API MiniMax thường xuyên, cấu hình kênh khác với CLI, "cùng một cấu hình CLI hoạt động, Feishu/WeChat thì lỗi" |
| **Nhiệm vụ tự động hóa chu kỳ dài** | [#2375](https://github.com/HKUDS/nanobot/issues/2375) | Lỗi thiết kế Heartbeat dẫn đến chi phí mất kiểm soát, "600 dòng nhật ký → 560k token/lần" |
| **Kịch bản nhạy cảm về an ninh tuân thủ** | [#2439](https://github.com/HKUDS/nanobot/issues/2439) | An ninh chuỗi cung ứng không thể chấp nhận, "cài đặt xong mới biết có tệp độc hại" |
| **Nhắc nhở định kỳ không hoạt động** | [#2369](https://github.com/HKUDS/nanobot/issues/2369) | Chức năng cốt lõi lỗi im lặng, "đặt nhắc nhở nhưng không bao giờ nhận được" |

### Điểm hài lòng
- Khả năng bao phủ kênh đa dạng (Telegram, WeChat, Matrix, v.v.)
- Hệ sinh thái kỹ năng (chuyển mã cục bộ Whisper) [ #1358](https://github.com/HKUDS/nanobot/issues/1358)

### Yêu cầu cốt lõi được chắt lọc
> *"Cần chi phí dự đoán được, an ninh có thể xác minh, nhiệm vụ định kỳ đáng tin cậy"* — Yêu cầu cứng từ người dùng chuyển từ "sẵn sàng chức năng" sang "sẵn sàng sản xuất"

---

## 8. Tồn đọng cần xử lý

### Các mục quan trọng chưa phản hồi lâu ngày

| Issue/PR | Thời gian tạo | Cập nhật cuối cùng | Rủi ro | Hành động đề xuất |
|:---|:---|:---|:---|:---|
| [#1681](https://github.com/HKUDS/nanobot/issues/1681) Matrix auth issue | 2026-03-07 | Hôm nay | Phiên mã hóa bị lỗi, kênh Matrix không khả dụng | Liên quan [#2447](https://github.com/HKUDS/nanobot/pull/2447) hỗ trợ stream, hợp nhất đánh giá |
| [#144](https://github.com/HKUDS/nanobot/issues/144) Missing gemini_api_key | 2026-02-05 | Hôm nay | 49 ngày không có phản hồi chính thức, hỗ trợ Gemini bị phân mảnh | Chỉ định chủ sở hữu hoặc đánh dấu `help wanted` |
| [#1358](https://github.com/HKUDS/nanobot/issues/1358) OpenAI Codex Docker auth | 2026-02-28 | Hôm nay | 25 ngày, vấn đề xác thực môi trường Docker | Bổ sung bước tái hiện hoặc đóng |
| [#2170](https://github.com/HKUDS/nanobot/issues/2170) OAuth subscription options | 2026-03-17 | Hôm nay | Thảo luận mô hình kinh doanh, không có chủ sở hữu kỹ thuật | Chuyển sang Discussion hoặc lộ trình sản phẩm |
| [#2298](https://github.com/HKUDS/nanobot/issues/2298) Breaking endless tool loops | 2026-03-20 | Hôm nay | Tắc nghẽn khả năng sử dụng cho mô hình cục bộ/nhỏ | Tăng mức độ ưu tiên, liên quan đến tối ưu hóa trình đánh giá |

### Cảnh báo băng thông đánh giá PR
- **40 PR chờ hợp nhất**, trong đó [#1934](https://github.com/HKUDS/nanobot/pull/1934) (Hệ thống Hook), [#2183](https://github.com/HKUDS/nanobot/pull/2183) (Bộ nhớ Honcho), [#1650](https://github.com/HKUDS/nanobot/pull/1650) (Web UI Gateway) đều là các chức năng lớn, cần tập trung nguồn lực đánh giá.

---

**Thời gian tạo báo cáo**: 2026-03-25  
**Nguồn dữ liệu**: GitHub API / HKUDS/nanobot  
**Tiếp theo cần chú ý**: Quyết định cuối cùng về giải pháp thay thế LiteLLM, tiến độ hợp nhất PR tối ưu hóa Heartbeat

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Nhật ký hoạt động ZeroClaw | 2026-03-25

## 1. Tóm tắt nhanh trong ngày

ZeroClaw hôm nay thể hiện **xu hướng lặp lại cường độ cao**: xử lý 50 Issues (tỷ lệ đóng 86%) và 50 PRs (tỷ lệ hợp nhất 62%) trong 24 giờ, phát hành 4 phiên bản (v0.6.0 → v0.6.2 và beta). Đội ngũ cốt lõi tập trung vào **sửa lỗi ổn định và tối ưu hóa trải nghiệm người dùng**, giải quyết dồn dập các vấn đề hồi quy được giới thiệu trong phiên bản v0.5/v0.6, bao gồm chiến lược an ninh quá thận trọng, sự cố truyền phát, thiếu sót trong xây dựng Docker, v.v. Mức độ hoạt động cộng đồng cực cao, phản hồi của người dùng tiếng Trung tăng đột biến, cho thấy dự án đang tiếp cận nhóm người dùng rộng hơn.

---

## 2. Phát hành phiên bản

### v0.6.2 (Phiên bản ổn định mới nhất)
| Thuộc tính | Nội dung |
|:---|:---|
| Thời gian phát hành | 2026-03-24 |
| Bản chất cập nhật | Cải tiến tăng dần và trau chuốt (Incremental improvements and polish) |
| Thay đổi phá vỡ | Không tuyên bố rõ ràng |

**Suy đoán sửa lỗi chính** (dựa trên các PR liên quan đã đóng cùng ngày):
- Tái viết chiến lược an ninh: Giải quyết vấn đề "giảm trí thông minh" của v0.5+ ([#4615](https://github.com/zeroclaw-labs/zeroclaw/pull/4615))
- Sửa lỗi phát hiện rò rỉ đánh dấu phương tiện: Ngăn chặn `[IMAGE:path]` bị nhận dạng sai là token entropy cao ([#4614](https://github.com/zeroclaw-labs/zeroclaw/pull/4614))
- Triển khai đồng bộ thư mục Windows ([#4613](https://github.com/zeroclaw-labs/zeroclaw/pull/4613))
- Tích hợp WhatsApp Web vào bản dựng Docker mặc định ([#4611](https://github.com/zeroclaw-labs/zeroclaw/pull/4611))

### v0.6.1 / v0.6.1-beta.637 / v0.6.0
- Tất cả đều là các phiên bản lặp lại nhanh trong cùng một ngày
- Nhịp độ phát hành cho thấy nhóm áp dụng chiến lược **chạy nhanh với các bước nhỏ, tần suất cao** để đối phó với các vấn đề ổn định sau phiên bản lớn v0.6

**Lưu ý di chuyển**: Người dùng nâng cấp từ v0.5 gặp phải vấn đề "chặn chiến lược an ninh" hoặc "hành vi AI thận trọng" nên nâng cấp trực tiếp lên v0.6.2.

---

## 3. Tiến độ dự án

### Các PR cốt lõi đã hợp nhất/đóng hôm nay (theo mức độ ảnh hưởng)

| PR | Tác giả | Đóng góp cốt lõi | Tiến độ dự án |
|:---|:---|:---|:---|
| [#4615](https://github.com/zeroclaw-labs/zeroclaw/pull/4615) | theonlyhennygod | **Tái viết lời nhắc an ninh**, giảm hành vi thận trọng của AI | Giải quyết điểm đau lớn nhất của người dùng v0.5+, khôi phục tính tự chủ của proxy |
| [#4614](https://github.com/zeroclaw-labs/zeroclaw/pull/4614) | theonlyhennygod | Phát hiện rò rỉ miễn trừ đánh dấu phương tiện | Sửa lỗi gián đoạn truyền ảnh |
| [#4619](https://github.com/zeroclaw-labs/zeroclaw/pull/4619) | theonlyhennygod | Cải tiến kỹ năng tự động + công cụ pipeline | Giới thiệu vòng lặp học tập kiểu Hermes, hướng tới tác nhân tự hành |
| [#4620](https://github.com/zeroclaw-labs/zeroclaw/pull/4620) | joehoyle | Đầu ra stream REPL Agent + hủy bằng Ctrl+C | Nâng cấp trải nghiệm tương tác lớn |
| [#4618](https://github.com/zeroclaw-labs/zeroclaw/pull/4618) | theonlyhennygod | Sửa lỗi phát hiện chế độ tương tác onboarding | Giải quyết vấn đề hướng dẫn trên môi trường Debian/SSH/tmux |
| [#4611](https://github.com/zeroclaw-labs/zeroclaw/pull/4611) | theonlyhennygod | Tích hợp WhatsApp Web vào bản dựng Docker mặc định | Loại bỏ yêu cầu hình ảnh tùy chỉnh |

**Đánh giá tiến độ tổng thể**: Các PR hợp nhất hôm nay tập trung giải quyết **ba vấn đề tồn đọng của phiên bản v0.6**: chiến lược an ninh quá nghiêm ngặt, truyền phát không ổn định, phân mảnh trải nghiệm triển khai. Dự án đang chuyển từ "giai đoạn bùng nổ chức năng" sang "giai đoạn củng cố chất lượng".

---

## 4. Điểm nóng cộng đồng

### Các Issues thảo luận sôi nổi nhất

| Thứ hạng | Issue | Bình luận | Yêu cầu cốt lõi | Tình trạng |
|:---|:---|:---:|:---|:---|
| 1 | [#2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487) `channel_ack_config` không hoạt động ở chế độ hàm | 7 | **Độ ổn định thời gian chạy** | ✅ Đã đóng |
| 2 | [#1518](https://github.com/zeroclaw-labs/zeroclaw/issues/1518) Giao tiếp giữa các tiến trình proxy độc lập | 7 | **Điều phối đa tác nhân** | ✅ Đã đóng |
| 3 | [#1924](https://github.com/zeroclaw-labs/zeroclaw/issues/1924) Hỗ trợ nền tảng FreeBSD | 6 | **Mở rộng nền tảng** | ✅ Đã đóng |
| 4 | [#3454](https://github.com/zeroclaw-labs/zeroclaw/issues/3454) Web Dashboard 404 | 5 | **Trải nghiệm dùng ngay** | ✅ Đã đóng |
| 5 | [#4093](https://github.com/zeroclaw-labs/zeroclaw/issues/4093) Chức năng stream không vào master do xóa nhánh | 4 | **Rủi ro hệ thống quản lý mã** | ✅ Đã đóng |

### Phân tích điểm nóng

- **#1518 Giao tiếp giữa các tiến trình**: Người dùng @Mike-7777777 đề xuất giải pháp không phụ thuộc (cơ sở dữ liệu SQLite chia sẻ), đã được áp dụng để triển khai, cho thấy chất lượng đóng góp cộng đồng cao.
- **#4093 Tai nạn quản lý nhánh**: Bộc lộ rủi ro cốt lõi — chức năng quan trọng (truyền phát nhà cung cấp) bị "chìm" do nhánh dev bị xóa, gây ra sự suy ngẫm về quy trình làm việc Git.
- **Gia tăng đột biến người dùng tiếng Trung**: Phản hồi bằng tiếng Trung trong các Issue như #4496, #4485, phản ánh tiến độ quốc tế hóa dự án và nhu cầu bản địa hóa tài liệu.

---

## 5. Lỗi và độ ổn định

### Sắp xếp theo mức độ nghiêm trọng

| Mức độ nghiêm trọng | Issue | Mô tả | PR Sửa lỗi | Tình trạng |
|:---|:---|:---|:---|:---|
| **S0** | [#3664](https://github.com/zeroclaw-labs/zeroclaw/issues/3664) | Mất dữ liệu/rủi ro an ninh (ảnh chụp màn hình cho thấy lỗi thời gian chạy) | Chưa liên kết | 🔴 **Mở** |
| **S0** | [#4532](https://github.com/zeroclaw-labs/zeroclaw/issues/4532) | Lỗi quyền `.secret_key` (root sở hữu gây lỗi tiếp theo) | Liên quan đến [#4613](https://github.com/zeroclaw-labs/zeroclaw/pull/4613)? | ✅ Đã đóng |
| **S0** | [#4445](https://github.com/zeroclaw-labs/zeroclaw/issues/4445) | Không thể đọc/ghi tệp trong hình ảnh Docker, thiếu công cụ hệ thống | Chưa đánh giá | ✅ Đã đóng |
| **S0** | [#4604](https://github.com/zeroclaw-labs/zeroclaw/issues/4604) | Phát hiện rò rỉ phát ra làm sai lệch đánh dấu `[IMAGE:path]` | [#4614](https://github.com/zeroclaw-labs/zeroclaw/pull/4614) | ✅ Đã đóng |
| **S0** | [#4576](https://github.com/zeroclaw-labs/zeroclaw/issues/4576) | WhatsApp Web trong Docker yêu cầu hình ảnh tùy chỉnh | [#4611](https://github.com/zeroclaw-labs/zeroclaw/pull/4611) | ✅ Đã đóng |
| **S1** | [#4623](https://github.com/zeroclaw-labs/zeroclaw/issues/4623) | **Lỗi phân đoạn ARMv6 (Pi Zero W)** | [#4569](https://github.com/zeroclaw-labs/zeroclaw/pull/4569) không đủ | 🔴 **Mở** |
| **S1** | [#4496](https://github.com/zeroclaw-labs/zeroclaw/issues/4496) | "Giảm trí thông minh" từ v0.5+: chiến lược an ninh chặn quá mức | [#4615](https://github.com/zeroclaw-labs/zeroclaw/pull/4615) | ✅ Đã đóng |
| **S1** | [#4485](https://github.com/zeroclaw-labs/zeroclaw/issues/4485) | Cấu hình chiến lược an ninh không có hiệu lực (cho phép root vẫn bị chặn) | [#4615](https://github.com/zeroclaw-labs/zeroclaw/pull/4615) | ✅ Đã đóng |
| **S1** | [#4567](https://github.com/zeroclaw-labs/zeroclaw/issues/4567) | Truyền phát Azure AI lỗi "unknown does not support streaming" | [#4602](https://github.com/zeroclaw-labs/zeroclaw/pull/4602) | 🟡 Chờ xác minh |
| **S1** | [#4523](https://github.com/zeroclaw-labs/zeroclaw/issues/4523) | Lỗi Web UI stream | [#4602](https://github.com/zeroclaw-labs/zeroclaw/pull/4602) | ✅ Đã đóng |
| **S1** | [#4550](https://github.com/zeroclaw-labs/zeroclaw/issues/4550) | Vòng lặp ngắt kết nối WebSocket kênh QQ | Chưa liên kết | ✅ Đã đóng |

### Rủi ro chính
- **Hỗ trợ ARMv6 bị đứt gãy** ([#4623](https://github.com/zeroclaw-labs/zeroclaw/issues/4623)): v0.6.2 vẫn không chạy được trên Raspberry Pi Zero W, ảnh hưởng đến kịch bản triển khai biên.
- **#3664 chưa được giải quyết**: Issue cấp S0 mở nhưng thiếu chi tiết kỹ thuật, tiềm ẩn rủi ro thông tin không đầy đủ.

---

## 6. Yêu cầu chức năng và tín hiệu lộ trình

### Các yêu cầu quan trọng do người dùng đưa ra

| Yêu cầu | Issue/PR | Giải pháp kỹ thuật | Khả năng tích hợp |
|:---|:---|:---|:---:|
| **Giao thức A2A (Agent-to-Agent)** | [#4166](https://github.com/zeroclaw-labs/zeroclaw/pull/4166) | Dựa trên HTTP/JSON tương tác proxy, hỗ trợ ủy thác nhiệm vụ và khám phá khả năng | ⭐⭐⭐⭐⭐ **Cao** (PR đang mở, kiến trúc phù hợp với tầm nhìn đa tác nhân) |
| **Chế độ Server ACP** | [#2456](https://github.com/zeroclaw-labs/zeroclaw/issues/2456) | Giao thức điều khiển Agent gốc, kết nối với IDE như Zed | ⭐⭐⭐⭐☆ Cao (Đã đóng, có thể đã được triển khai hoặc lên kế hoạch) |
| **Backend bộ nhớ MuninnDB** | [#4607](https://github.com/zeroclaw-labs/zeroclaw/pull/4607) | Tích hợp REST dịch vụ bộ nhớ bên ngoài, hỗ trợ củng cố Hebbian và quên Ebbinghaus | ⭐⭐⭐⭐☆ Cao (PR đang mở, nâng cấp kiến trúc nhận thức) |
| **Tự tạo và cải tiến kỹ năng tự động** | [#3683](https://github.com/zeroclaw-labs/zeroclaw/issues/3683) → [#4619](https://github.com/zeroclaw-labs/zeroclaw/pull/4619) | Vòng lặp học tập kiểu Hermes: vòng thành công → tài liệu kỹ năng → cải tiến liên tục | ⭐⭐⭐⭐⭐ **Đã triển khai** (Hợp nhất hôm nay) |
| **Đầu ra stream Discord** | [#4551](https://github.com/zeroclaw-labs/zeroclaw/pull/4551) | Phản hồi thời gian thực cho nhiệm vụ dài, tránh "văn bản tường đen sau khi im lặng" | ⭐⭐⭐☆☆ Trung bình (PR đang mở, cải thiện UX) |
| **Chế độ proxy đầy đủ Claude Code** | [#3911](https://github.com/zeroclaw-labs/zeroclaw/pull/3911) | Bỏ qua quyền nguy hiểm, tách lời nhắc hệ thống, phản hồi kết quả công cụ | ⭐⭐⭐☆☆ Trung bình (PR đang mở, cân nhắc an ninh có thể trì hoãn) |
| **Phân tách bộ nhớ không gian tên** | [#4626](https://github.com/zeroclaw-labs/zeroclaw/pull/4626) | Ngữ cảnh cách ly khi đa tác nhân chia sẻ brain.db | ⭐⭐⭐⭐☆ Cao (PR đang mở, yêu cầu kịch bản doanh nghiệp) |

### Tín hiệu lộ trình
- **Tính tự chủ của tác nhân** là hướng đi rõ ràng: cải tiến kỹ năng tự động (#4619), tương tác A2A (#4166), bộ nhớ bên ngoài hóa (#4607) tạo thành một bộ công nghệ hoàn chỉnh.
- **Tích hợp IDE** được coi trọng: chế