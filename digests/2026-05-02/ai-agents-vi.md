# OpenClaw Sinh nhật ký hoạt động hàng ngày 2026-05-02

> Số lượng Issue: 500 | Số lượng PR: 500 | Dự án được bao phủ: 13 | Thời gian tạo: 2026-05-02 00:20 UTC

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

# Nhật ký hoạt động hàng ngày của dự án OpenClaw | 2026-05-02

> **Nguồn dữ liệu**: openclaw/openclaw | **Chu kỳ thống kê**: 2026-05-01 đến 2026-05-02 (UTC)

---

## 1. Tổng quan hôm nay

Dự án OpenClaw đã thể hiện **mức độ hoạt động cộng đồng cực kỳ cao** trong 24 giờ qua, với 500 lượt cập nhật Issues và 500 lượt cập nhật PR. Tỷ lệ Issues mới mở/hoạt động chiếm tới 93% (465/500), và hàng đợi PR chờ hợp nhất lên tới 474 lượt. Không có phiên bản mới nào được phát hành, trọng tâm phát triển rõ ràng chuyển sang **sửa lỗi ổn định và tối ưu hóa hiệu suất**. Đáng chú ý, trong số 35 Issues đã đóng hôm nay, nhiều Bug có số lượng bình luận cao đã được giải quyết nhanh chóng. Tuy nhiên, tỷ lệ PR chờ hợp nhất (94.8%) cho thấy có thể có điểm nghẽn trong quy trình xem xét mã và hợp nhất, do đó cần chú ý đến hiệu quả tích hợp của dự án.

---

## 2. Phát hành phiên bản

**Không có phiên bản mới nào được phát hành**

Hôm nay không có Release nào được tạo ra. Kết hợp với nhịp độ sửa lỗi hồi quy hàng loạt của dòng `2026.4.x`, phiên bản tiếp theo (dự kiến `2026.5.x`) có thể sẽ tập trung chủ yếu vào **bản vá lỗi ổn định**.

---

## 3. Tiến độ dự án

### Các Issues quan trọng đã đóng hôm nay (bao gồm xác minh sửa lỗi)

| Issue | Tiến trình cốt lõi | Ảnh hưởng |
|:---|:---|:---|
| [#72338](https://github.com/openclaw/openclaw/issues/72338) Gateway CPU spin dẫn đến Telegram bị kẹt | **Đã đóng**，23 lượt bình luận chẩn đoán sâu, xác nhận khởi động lại `openclaw-gateway.service` có thể khôi phục tạm thời, sửa lỗi dài hạn chờ xác nhận | Tính ổn định của gateway tải cao |
| [#73306](https://github.com/openclaw/openclaw/issues/73306) Lỗi hồi quy với plugin Active Memory timeout 15s | **Đã đóng**，lỗi chạy nhúng được giới thiệu trong v2026.4.26, liên quan đến các Issues trước đó #68825/#66708/#66157/#65159 | Độ tin cậy của hệ thống con bộ nhớ |
| [#75412](https://github.com/openclaw/openclaw/issues/75412) Tối ưu hóa chi phí cố định 16-18s của plugin bộ nhớ | **Đã đóng**，đề xuất giải pháp `fastPath` opt-in để giảm chi phí chuẩn bị chạy nhúng | Thiết lập lộ trình tối ưu hóa hiệu suất |
| [#75650](https://github.com/openclaw/openclaw/issues/75650) Độ trễ đại lý nhúng 40-47s trong 2026.4.29 | **Đã đóng**，nguyên nhân do thiếu phụ thuộc kênh đóng gói và cảnh báo vòng lặp sự kiện | Khắc phục nhanh chóng các lỗi hồi quy gần đây |
| [#74630](https://github.com/openclaw/openclaw/issues/74630) Hồi quy ổn định mặt phẳng điều khiển/runtime/khởi động gateway trong cụm 2026.4.24-4.26 | **Đã đóng**，Issue tổng hợp liên kết hệ thống nhiều vấn đề con, thiết lập khung theo dõi vấn đề | Kiểm soát rủi ro hệ thống |
| [#75591](https://github.com/openclaw/openclaw/issues/75591) Danh sách plugin đọc hơn 100 lần trong một yêu cầu | **Đã đóng**，xác định nguyên nhân gốc rễ trong giai đoạn chuẩn bị 60 giây, điểm đau cộng đồng có lượt thích cao (6👍) | Khắc phục triệt để vấn đề khuếch đại I/O |
| [#62364](https://github.com/openclaw/openclaw/issues/62364) Khởi động chậm với nhiều Provider (30s+) | **Đã đóng**，thời gian xác minh `models.list` từ ~12 giây xuống ~85 giây hồi quy | Hiệu suất khởi động |
| [#59839](https://github.com/openclaw/openclaw/issues/59839) Lịch sử trò chuyện không thể truy cập sau khi tạo phiên mới trong Control UI | **Đã đóng**，sửa lỗi hồi quy chức năng chuyển đổi phiên WebChat | Trải nghiệm frontend |
| [#73095](https://github.com/openclaw/openclaw/issues/73095) `prepareContextEngineSubagentSpawn` không khởi tạo registry | **Đã đóng**，sửa lỗi cài đặt cliBackend-only lỗi 100% | Kịch bản cài đặt biên |

**Đánh giá tổng thể**: Các Issues đóng hôm nay chủ yếu tập trung vào **lỗi hồi quy hiệu suất** và **hệ thống con chạy nhúng (embedded run)**, cho thấy nhóm bảo trì đang tập trung giải quyết sự suy giảm chất lượng của dòng `2026.4.x`. Tuy nhiên, tỷ lệ hợp nhất PR chỉ **5.2%** (26/500), hiệu quả tích hợp mã rõ ràng là điểm yếu.

---

## 4. Điểm nóng cộng đồng

### 🔥 Issues có nhiều bình luận nhất (TOP 5)

| Hạng | Issue | Bình luận | Yêu cầu cốt lõi | Trạng thái |
|:---|:---|:---|:---|:---|
| 1 | [#72338](https://github.com/openclaw/openclaw/issues/72338) Gateway CPU spin / Telegram bị kẹt | 23 | **Tính khả dụng trong môi trường sản xuất**：không thể phát hiện trạng thái khi gateway CPU cao, người vận hành không thể nhận biết lỗi | ✅ Đã đóng |
| 2 | [#73323](https://github.com/openclaw/openclaw/issues/73323) Suy thoái runtime Gateway: định giá lấy timeout 60s, kẹt truy vấn Telegram, RPC chậm | 15 | **Tính ổn định lâu dài trên Windows + Node 24**：suy thoái mãn tính trên nhiều phiên bản (4.23/4.25/4.26), cần chẩn đoán hệ thống | 🔴 Mở |
| 3 | [#73306](https://github.com/openclaw/openclaw/issues/73306) Plugin Active Memory luôn timeout | 14 | **Độ tin cậy của plugin**：timeout 100% sau khi nâng cấp, chặn quy trình làm việc bình thường | ✅ Đã đóng |
| 4 | [#67035](https://github.com/openclaw/openclaw/issues/67035) Hồi quy UI trò chuyện Windows: bỏ sót ký tự khi nhập, phản hồi dạng luồng không hiển thị | 13 | **Trải nghiệm trên máy tính Windows**：hỏng chức năng tương tác cốt lõi, ảnh hưởng đến tính khả dụng hàng ngày | 🔴 Mở |
| 5 | [#72808](https://github.com/openclaw/openclaw/issues/72808) Kết nối Slack bị mất âm thầm | 11 | **Độ tin cậy kết nối kênh**：lỗi âm thầm không có nhật ký lỗi, lỗi nghiêm trọng trong kịch bản trình diễn | 🔴 Mở |

### Issues có phản hồi cao (sắp xếp theo 👍)

| Issue | 👍 | Yêu cầu |
|:---|:---|:---|
| [#75591](https://github.com/openclaw/openclaw/issues/75591) Đọc lại danh sách plugin nhiều lần | 6 | Tối ưu hóa hiệu suất, năng suất nhà phát triển |
| [#62364](https://github.com/openclaw/openclaw/issues/62364) Khởi động chậm với nhiều Provider | 4 | Hồi quy thời gian khởi động |
| [#75650](https://github.com/openclaw/openclaw/issues/75650) Độ trễ đại lý nhúng | 3 | Độ trễ phản hồi |
| [#72338](https://github.com/openclaw/openclaw/issues/72338) CPU spin | 4 | Tính ổn định sản xuất |

**Phân tích tâm lý cộng đồng**: Các nhà phát triển thể hiện sự thất vọng rõ rệt đối với **nền tảng Windows** và **hiệu suất chạy nhúng (embedded run)**. Nhiều thẻ "regression" cho thấy cần tăng cường kiểm soát chất lượng cho dòng `2026.4.x`. **Lỗi âm thầm** (không có nhật ký, không có cảnh báo) trên các kênh như Slack/Telegram/Discord là những điểm đau thường xuyên.

---

## 5. Lỗi và tính ổn định

### 🔴 Nghiêm trọng / Ảnh hưởng sản xuất

| Issue | Mức độ nghiêm trọng | Mô tả | Fix PR | Trạng thái |
|:---|:---|:---|:---|:---|
| [#73323](https://github.com/openclaw/openclaw/issues/73323) | **P0-suy thoái mãn tính** | Suy thoái mạng/bộ định thời đa hệ thống con gateway Windows, chưa giải quyết triệt để qua 3 phiên bản | Không có PR rõ ràng | 🔴 Mở, 15 bình luận |
| [#75137](https://github.com/openclaw/openclaw/issues/75137) | **P0-cạn kiệt tài nguyên** | TUI 89-99% CPU bận rộn khi không hoạt động (busy-loop) | Không | 🔴 Mở, 6 bình luận |
| [#57349](https://github.com/openclaw/openclaw/issues/57349) | **P0-sập** | Hết bộ nhớ OOM sau khi chạy tiện ích mở rộng (~17-20 giờ), sập khi quét hệ thống tệp | Không | 🔴 Mở, 6 bình luận |
| [#50642](https://github.com/openclaw/openclaw/issues/50642) | **P0-bảo mật** | Node macOS tự động tin cậy chứng chỉ TLS đầu tiên, CVSS 9.0/9.5 Critical | Không | 🔴 Mở, 5 bình luận |
| [#50630](https://github.com/openclaw/openclaw/issues/50630) | **P0-bảo mật** | Tailscale serve + auth.mode=none lộ gateway mà không có xác thực, CVSS 9.3 Critical | Không | 🔴 Mở, 5 bình luận |

### 🟡 Hồi quy chức năng / Trải nghiệm bị hỏng

| Issue | Mô tả | Fix PR | Trạng thái |
|:---|:---|:---|:---|
| [#67035](https://github.com/openclaw/openclaw/issues/67035) | Bỏ sót ký tự khi nhập, phản hồi luồng không hiển thị trên UI trò chuyện Windows | Không | 🔴 Mở |
| [#72808](https://github.com/openclaw/openclaw/issues/72808) | Mất kết nối Slack âm thầm, không tự động khôi phục | Không | 🔴 Mở |
| [#65309](https://github.com/openclaw/openclaw/issues/65309) | Active Memory chặn cuộc trò chuyện trực tiếp trong 30 giây rồi timeout | Không | 🔴 Mở |
| [#74907](https://github.com/openclaw/openclaw/issues/74907) | Vòng lặp nhiều công cụ phát sinh khối `tool_use` bị cô lập, lỗi 400 của Anthropic | Không | 🔴 Mở |
| [#74617](https://github.com/openclaw/openclaw/issues/74617) | Sự kiện READY của Discord không bao giờ được kích hoạt, điều kiện chạy đua | Không | 🔴 Mở |
| [#74377](https://github.com/openclaw/openclaw/issues/74377) | Mảng công cụ của Anthropic Provider trống, mất 17 công cụ sau khi tính toán | Không | 🔴 Mở |
| [#72879](https://github.com/openclaw/openclaw/issues/72879) | Hồi quy 400 `thought_signature`, xuất hiện lại trong 4.25 sau khi sửa lỗi trong 4.24 | Không | 🔴 Mở |
| [#74209](https://github.com/openclaw/openclaw/issues/74209) | Plugin mặc định (đặc biệt là bonjour) chặn khởi động gateway | Không | 🔴 Mở |

### 🟢 Hướng khắc phục đã có (PR liên quan hôm nay)

| PR | Vấn đề liên quan | Nội dung sửa lỗi |
|:---|:---|:---|
| [#75860](https://github.com/openclaw/openclaw/pull/75860) | Thu hồi QMD | Cải thiện thu hồi QMD cho truy vấn kênh Discord, cơ chế thử lại với kết quả trống |
| [#75822](https://github.com/openclaw/openclaw/pull/75822) | Khóa phiên | Thu hồi các khóa phiên tự sở hữu chưa được theo dõi |
| [#73993](https://github.com/openclaw/openclaw/pull/73993) | #44930 | Khôi phục tính bền vững của truy vấn Telegram, ngăn mất cập nhật đang bay |
| [#73998](https://github.com/openclaw/openclaw/pull/73998) | #55532 | Sửa lỗi backoff kết nối lại WebSocket của Lark |
| [#73849](https://github.com/openclaw/openclaw/pull/73849) | #73673 | Cấu hình KeepAlive của launchd macOS ngăn chặn vòng lặp sập |
| [#73772](https://github.com/openclaw/openclaw/pull/73772) | Quản lý bộ nhớ | Thêm RPC quản lý bộ nhớ theo phạm vi |

---

## 6. Yêu cầu chức năng và tín hiệu lộ trình

### Chức năng tiềm năng cao (có PR hỗ trợ hoặc tín hiệu cộng đồng mạnh mẽ)

| Chức năng | Issue/PR | Khả năng đưa vào | Cơ sở đánh giá |
|:---|:---|:---|:---|
| **Khe đóng góp plugin cho Control UI** | [#71736](https://github.com/openclaw/openclaw/issues/71736) RFC | ⭐⭐⭐⭐⭐ Cao | Thiết kế cốt lõi cho khả năng mở rộng SDK, 8 bình luận, nhu cầu ở cấp độ kiến trúc |
| **Cấu hình ưu tiên Skill** | [#50199](https://github.com/openclaw/openclaw/issues/50199) | ⭐⭐⭐⭐☆ | 7 bình luận, điểm đau rõ ràng cho xung đột đa kỹ năng, độ phức tạp triển khai trung bình |
| **Thanh bên phiên và quản lý lịch sử** | [#50404](https://github.com/openclaw/openclaw/issues/50404) | ⭐⭐⭐⭐☆ | 6 bình luận, điểm yếu trải nghiệm Control UI, phối hợp với sửa lỗi #59839 |
| **Chế độ ưu tiên/bỏ qua hàng đợi sự kiện hệ thống** | [#50739](https://github.com/openclaw/openclaw/issues/50739) | ⭐⭐⭐⭐☆ | 6 bình luận, nhu cầu quan trọng về độ tin cậy, có PR #73968 liên quan một phần |
| **Kiểm tra hàng đợi trước khi gửi (ngăn phản hồi lỗi thời)** | [#48814](https://github.com/openclaw/openclaw/issues/48814) | ⭐⭐⭐☆☆ | 6 bình luận, tối ưu hóa UX, yêu cầu thay đổi lịch trình cốt lõi |
| **`streamTo="parent"` cho subagent** | [#47597](https://github.com/openclaw/openclaw/issues/47597) | ⭐⭐⭐⭐☆ | 5 bình luận, xuất đầu ra luồng của subagent, có kịch bản sử dụng rõ ràng |
| **`mediaLocalRoots` có thể định cấu hình** | [#47856](https://github.com/openclaw/openclaw/issues/47856) | ⭐⭐⭐☆☆ | 5 bình luận, kịch bản tệp đính kèm iMessage, ranh giới rõ ràng |

### Tín hiệu ở cấp độ kiến trúc

- **Phân tách kênh lệnh theo từng agent** ([#73991](https://github.com/openclaw/openclaw/pull/73991)): cô lập agent nặng khỏi kênh chính dùng chung, cải tiến khả năng mở rộng quan trọng cho triển khai đa agent
- **RPC quản lý bộ nhớ theo phạm vi** ([#73772](https://github.com/openclaw/openclaw/pull/73772)): hệ thống bộ nhớ chuyển từ hộp đen sang có thể quan sát, quản lý được

---

## 7. Tóm tắt phản hồi người dùng

### 💔 Điểm đau cốt lõi

| Kịch bản | Phản hồi điển hình | Issue nguồn |
|:---|:---|:---|
| **Trải nghiệm công dân hạng hai trên Windows** | "Trải nghiệm trò chuyện suy giảm nghiêm trọng sau khi nâng cấp, nhập không hiển thị, phải làm mới mới thấy phản hồi" | [#67035](https://github.com/openclaw/openclaw/issues/67035) |
| **Gateway "chết dần mãn tính"** | "CPU tăng cao nhưng truy vấn có vẻ bình thường, kênh phản hồi hoàn toàn bị kẹt, phát hiện trạng thái timeout" | [#72338](https://github.com/openclaw/openclaw/issues/72338), [#73323](https://github.com/openclaw/openclaw/issues/73323) |
| **Plugin/hệ thống bộ nhớ không đáng tin cậy** | "Plugin Active Memory timeout 15 giây mỗi lần chạy, không có đầu ra ký tự, hoàn toàn không sử dụng được" | [#73306](https://github.com/openclaw/openclaw/issues/73306), [#65309](https://github.com/openclaw/openclaw/issues/65309) |
| **Lỗi âm thầm khó gỡ lỗi** | "Kết nối Slack bình thường trong nhiều ngày, đột nhiên không phản hồi khi demo, không có lỗi nào cả" | [#72808](https://github.com/openclaw/openclaw/issues/72808) |
| **Nâng cấp là một canh bạc** | "Nâng cấp từ 3.28 lên 4.5, thời gian khởi động từ 12s → 85s" | [#62364](https://github.com/openclaw/openclaw/issues/62364) |
| **Tài nguyên TUI bị chiếm dụng khủng khiếp** | "Để cửa sổ mở mà không làm gì, CPU 89-99%, quạt quay hết tốc lực" | [#75137](https://github.com/openclaw/openclaw/issues/75137) |

### ✅ Hướng đi được người dùng công nhận

- **Phản hồi và chẩn đoán nhanh chóng**：Trong các Issues như #72338, người bảo trì hướng dẫn người dùng thu thập `openclaw channels status --deep` và nhật ký, không khí hợp tác cộng đồng tốt.
- **Tính linh hoạt của chạy nhúng (embedded run)**：Mặc dù có vấn đề về hiệu suất, người dùng công nhận thiết kế chức năng của các plugin như `active-memory`, mong đợi được tối ưu hóa thay vì loại bỏ.

---

## 8. Tồn đọng cần xử lý

### ⚠️ Issues giá trị cao chưa được phản hồi trong thời gian dài

| Issue | Ngày tạo | Cập nhật cuối | Số ngày tồn đọng | Rủi ro |
|:---|:---|:---|:---|:---|
| [#50199](https://github.com/openclaw/openclaw/issues/50199) Cấu hình ưu tiên Skill | 2026-03-19 | 2026-05-01 | **44 ngày** | Xung đột đa kỹ năng không có quy tắc, ảnh hưởng đến độ tin cậy của agent |
| [#50404](https://github.com/openclaw/openclaw/issues/50404) Thanh bên phiên | 2026-03-19 | 2026-05-01 | **44 ngày** | Thiếu UX cơ bản, trùng lặp một phần với #59839 đã đóng nhưng chưa giải quyết hoàn toàn |
| [#50291](https://github.com/openclaw/openclaw/issues/50291) Theo dõi ngữ cảnh hook plugin | 2026-03-19 | 2026-05-01 | **44 ngày** | Cơ sở hạ tầng khả năng quan sát, nhu cầu cấp thiết cho theo dõi phân tán |
| [#50739](https://github.com/openclaw/openclaw/issues/50739) Hàng đợi ưu tiên sự kiện hệ thống | 2026-03-20 | 2026-05-02 | **43 ngày** | Độ tin cậy cảnh báo, quan trọng cho các kịch bản vận hành |
| [#49692](https://github.com/openclaw/openclaw/issues/49692) UX drain tin nhắn gateway | 2026-03-18 | 2026-05-01 | **45 ngày** | Hoảng loạn người dùng trong kịch bản khởi động lại, tối ưu hóa văn bản là quả chín thấp |
| [#50093](https://github.com/openclaw/openclaw/issues/50093) Bù đắp ngắt kết nối WhatsApp | 2026-03-19 | 2026-05-01 | **44 ngày** | Mất tin nhắn, không thể chấp nhận trong các kịch bản doanh nghiệp |

### 🔧 Điểm nghẽn xem xét PR

| PR | Tạo | Quy mô | Rủi ro chặn |
|:---|:---|:---|:---|
| [#75649](https://github.com/openclaw/openclaw/pull/75649) Sửa chữa chuyển giao cập nhật Windows | 2026-05-01 | **XL** | Tuyến đường cập nhật đa nền tảng quan trọng, cần ưu tiên xem xét |
| [#73772](https://github.com/openclaw/openclaw/pull/73772) RPC quản lý bộ nhớ theo phạm vi | 2026-04-28 | **XL** | Thay đổi cấp độ kiến trúc, phạm vi ảnh hưởng lớn nhưng giá trị cao |
| [#69310](https://github.com/openclaw/openclaw/pull/69310) Làm rõ việc loại bỏ phương tiện | 2026-04-20 | **L** | Trải nghiệm người dùng, chuyển lỗi im lặng thành cảnh báo có thể nhìn thấy |

---

## Phụ lục: Tra cứu nhanh dữ liệu

| Chỉ số | Giá trị | Đánh giá so với kỳ trước |
|:---|:---|:---|
| Tổng số lượng cập nhật Issues | 500 | Hoạt động cực cao |
| Issues mới mở/hoạt động | 465 (93%) | Phát hiện vấn đề > Giải quyết |
| Issues đã đóng | 35 (7%) | Tỷ lệ đóng thấp |
| PRs |

---

## So sánh hệ sinh thái theo chiều ngang

# Phân tích so sánh ngang hệ sinh thái trợ lý AI cá nhân / tác nhân tự trị
**Ngày dữ liệu: 2026-05-02 | Khung phân tích: Hoạt động cộng đồng · Lộ trình kỹ thuật · Mức độ trưởng thành**

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái mã nguồn mở trợ lý AI cá nhân đang trải qua **sự chuyển đổi tập thể từ "chạy đua tính năng" sang "chinh phục độ tin cậy"**. Các dự án hàng đầu (OpenClaw, ZeroClaw, Hermes Agent) có trung bình hơn 100 Issues+PR mỗi ngày, nhưng tỷ lệ hợp nhất thường dưới 10%, làm nổi bật điểm nghẽn xem xét mã. Các dự án cỡ trung (NanoBot, NullClaw, Moltis) thể hiện hiệu quả đóng vòng lặp sửa lỗi cao hơn, một số đạt được "Sửa lỗi trong ngày". **Kiến trúc bảo mật (cô lập đa người thuê, sandbox hóa)** và hiện đại hóa hệ thống cấu hình (Schema v3, i18n) trở thành sự đồng thuận trên toàn dự án. Điều đáng chú ý là **"hiệu suất chạy nhúng" và "trải nghiệm trên Windows/di động"** đang dần từ yêu cầu biên nâng cấp thành điểm đau cấp hệ sinh thái, phản ánh sự lan rộng của nhóm người dùng từ những người chấp nhận sớm sang các nhà phát triển phổ thông.

---

## 2. So sánh mức độ hoạt động của từng dự án

| Dự án | Issues (hoạt động/đóng) | PR (chờ hợp nhất/đã xử lý) | Release | Tỷ lệ hợp nhất | Đánh giá sức khỏe |
|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 (465/35) | 500 (474/26) | 0 | **5.2%** | 🔶 Hoạt động nhưng tắc nghẽn, PR tồn đọng nghiêm trọng, sửa lỗi hồi quy dày đặc |
| **NanoBot** | 10 (2/8) | 31 (7/24) | 0 | 77% | 🟢 Phản hồi hiệu quả, đóng vòng lặp trong ngày, chịu áp lực từ việc thích ứng mô hình nội địa |
| **Hermes Agent** | 50 (43/7) | 50 (47/3) | 0 | 6% | 🔶 Hoạt động cao nhưng hợp nhất thấp, trong giai đoạn tái cấu trúc kiến trúc Reborn, mật độ Bug tăng |
| **PicoClaw** | 11 (10/1) | 24 (11/13) | 1 (nightly) | 54% | 🔶 Đạt được cột mốc kiến trúc bảo mật, khủng hoảng chất lượng v0.2.8 |
| **NanoClaw** | 10 (6/4) | 27 (11/16) | 0 | 59% | 🟢 Ba lần liên tiếp ổn định OpenCode, di chuyển V2 khởi động |
| **NullClaw** | 9 (1/8) | 27 (4/23) | 0 | **85%** | 🟢 Thông lượng cực cao, đang xử lý tồn đọng, rủi ro phụ thuộc điểm đơn |
| **IronClaw** | 30 (23/7) | 50 (31/19) | 0 | 38% | 🔶 Vùng nước sâu kiến trúc Reborn, cơ sở hạ tầng (trình cài đặt/Docker) bị tách rời |
| **LobsterAI** | 0 (0/0) | 15 (6/9) | 0 | 60% | 🟡 Không có Issue bất thường, lặp lại dựa trên PR, tồn đọng xem xét 33 ngày |
| **Moltis** | 5 (1/5) | 9 (0/9) | 0 | **100%** | 🟢 Không có Bug tồn đọng, là tiêu chuẩn về hiệu quả vận hành "báo cáo và sửa lỗi" |
| **CoPaw** | 7 (7/0) | 4 (3/1) | 0 | 25% | 🔴 Không có Issue nào đóng, P0 chặn không phản hồi, sức khỏe thấp nhất |
| **ZeroClaw** | 50 (37/13) | 50 (45/5) | **v0.7.4** | 10% | 🔶 Phát hành phiên bản tích cực, 45 PR chờ hợp nhất, di chuyển cấu hình phiên bản lớn |
| **TinyClaw** | 0 | 0 | 0 | — | ⚫ Ngủ |
| **ZeptoClaw** | 0 | 0 | 0 | — | ⚫ Ngủ |

> **Phát hiện chính**: Tỷ lệ hợp nhất và quy mô dự án có mối tương quan nghịch rõ rệt. OpenClaw/Hermes/ZeroClaw ba dự án mạnh với 100+ cập nhật trung bình/ngày nhưng tỷ lệ hợp nhất <10%, phản ánh **mâu thuẫn giữa nợ kỹ thuật và băng thông xem xét của các dự án lớn**. NullClaw/Moltis với <30 cập nhật/ngày đạt tỷ lệ hợp nhất >80%, xác nhận **lợi thế nhanh nhẹn của các dự án cỡ trung**.

---

## 3. Vị thế của OpenClaw trong hệ sinh thái

| Chiều | Hiệu suất OpenClaw | So sánh hệ sinh thái |
|:---|:---|:---|
| **Quy mô cộng đồng** | Dẫn đầu tuyệt đối: 500 Issues/500 PR cập nhật hàng ngày = **gấp 10 lần** ZeroClaw/Hermes đứng sau | Tạo ra mô hình "một siêu sao và nhiều người khác", nhưng mức độ hoạt động có thể bao gồm nhiều Issues trùng lặp/liên quan (ví dụ: cụm Issue tổng hợp #74630) |
| **Lộ trình kỹ thuật** | Phe cấp tiến về **chạy nhúng (embedded run) + hệ thống bộ nhớ dạng plugin** | NanoBot/NanoClaw tập trung vào "khung Agent đàm thoại", NullClaw đặt cược vào "kiến trúc có thể chiếm dụng đồng thời", IronClaw khám phá sandbox hóa WASM |
| **Lĩnh vực lợi thế** | ① Bao phủ đa nền tảng gateway (Telegram/Discord/Slack/Feishu và hơn 10 kênh khác)<br>② Chiều rộng hệ sinh thái plugin (hệ thống con đổi mới như Active Memory)<br>③ Chức năng cấp doanh nghiệp được chuẩn bị sẵn (Control UI, định tuyến đa Provider) | Mật độ ma trận kênh không có đối thủ, nhưng kiến trúc bảo mật "Agent Shield" của PicoClaw, hiệu quả vận hành "không có Bug tồn đọng" của Moltis tạo ra những thách thức khác biệt |
| **Rủi ro cốt lõi** | **Tỷ lệ hợp nhất PR 5.2%** thấp nhất toàn hệ sinh thái, 474 PR chờ hợp nhất tạo hiệu ứng "đóng băng mã"; sự suy giảm chất lượng dòng `2026.4.x` (9 lỗi hồi quy đóng hôm nay) bộc lộ **sự mất cân bằng giữa nhịp độ phát hành và phạm vi kiểm thử** | So với tỷ lệ hợp nhất 85% của NullClaw, hiệu quả tích hợp của OpenClaw đã trở thành **mối đe dọa lớn nhất đối với hào kinh tế của vị thế hệ sinh thái** |

> **Kết luận vị thế**: OpenClaw là **"người định nghĩa chức năng"** của hệ sinh thái (tiên phong đưa ra các khái niệm như chạy nhúng, bộ nhớ dạng plugin), nhưng đang đối mặt với **cơn đau chuyển đổi điển hình của việc mở rộng quy mô** từ "dẫn đầu đổi mới" sang "vận hành chất lượng". Nếu nút thắt hợp nhất kéo dài, có nguy cơ bị các dự án cỡ trung thay thế bằng cách "bắt kịp chức năng + vượt trội về trải nghiệm".

---

## 4. Hướng kỹ thuật được quan tâm chung

| Hướng kỹ thuật | Dự án liên quan | Yêu cầu cụ thể | Mức độ khẩn cấp |
|:---|:---|:---|:---|
| **Điều phối đa agent (Multi-Agent Routing)** | NanoBot #2072, Hermes #9459, Moltis #949 | Từ "trò chuyện Agent đơn lẻ" nâng cấp thành "chuỗi Agent, chuyển đổi lỗi, ủy thác nhiệm vụ" | 🔴 Cao |
| **Hiện đại hóa hệ thống cấu hình (Schema v3/i18n)** | ZeroClaw #5947, NullClaw #838, IronClaw Reborn | Định dạng cấu hình thống nhất, hỗ trợ đa ngôn ngữ, cô lập môi trường, di chuyển tương thích ngược | 🔴 Cao |
| **Hiệu suất và độ tin cậy chạy nhúng** | OpenClaw #73306/#75412/#75650, NanoBot #3581, NanoClaw #2149 | Kiểm soát timeout, quản lý bộ nhớ, tính toàn vẹn ngữ cảnh, thích ứng mô hình cục bộ | 🔴 Cao |
| **Sandbox bảo mật và cô lập đa người thuê** | PicoClaw stevef1uk loạt bài, IronClaw Reborn Sandcastle, ZeroClaw #5775 | Cô lập thư mục làm việc, danh sách trắng kỹ năng, khử trùng đầu ra công cụ, quyền per-Skill | 🟡 Trung-cao |
| **Quản lý lỗi âm thầm kênh** | OpenClaw #72808/#72338, NanoClaw #2177, Hermes #4469 | Mất kết nối không có nhật ký/cảnh báo, khôi phục tự động, phát hiện trạng thái | 🟡 Trung-cao |
| **Trải nghiệm Windows/di động** | OpenClaw #67035, PicoClaw #2744/#2651, LobsterAI #1841/#1190 | Tương tác đầu vào, hướng dẫn xây dựng, tính ổn định trình cài đặt, quản lý bộ xử lý tệp | 🟡 Trung |
| **Khả năng quan sát chuỗi suy luận/nội dung suy nghĩ** | IronClaw #3129, CoPaw #3996, OpenClaw #18529 | Trích xuất `reasoning_content`, hiển thị quá trình suy nghĩ, gỡ lỗi hành vi mô hình | 🟢 Mới nổi |

> **Phân tích xu hướng**: "Điều phối đa agent" đồng thời xuất hiện trên NanoBot/Hermes/Moltis, đánh dấu sự chuyển dịch của hệ sinh thái từ "công cụ Agent đơn lẻ" sang "hệ điều hành Agent". Mặc dù OpenClaw dẫn đầu về chức năng (đã có `delegate_task`), tiếng nói của cộng đồng về "ưu tiên độ tin cậy" có thể định hình lại tiêu chuẩn cạnh tranh.

---

## 5. Phân tích định vị khác biệt

| Dự án | Tập trung chức năng cốt lõi | Hồ sơ người dùng mục tiêu | Đặc điểm kiến trúc kỹ thuật |
|:---|:---|:---|:---|
| **OpenClaw** | Ma trận gateway + hệ thống con bộ nhớ dạng plugin + chạy nhúng | Nhà phát triển tích hợp doanh nghiệp, người vận hành bot đa nền tảng | Gateway Node.js đơn thể, tải nóng plugin, UI Điều khiển tập trung |
| **NanoBot** | Khung Agent đàm thoại + thích ứng kênh nhanh | Nhà phát triển cộng đồng tiếng Trung, người dùng mô hình nội địa | Lõi bất đồng bộ Python, kênh kênh kênh mô-đun, hệ thống plugin HookCenter |
| **Hermes Agent** | Tối ưu hóa LLM cục bộ + thị trường kỹ năng + nhiệm vụ ủy thác | Người dùng nhạy cảm về quyền riêng tư, người yêu thích triển khai cục bộ | Lõi hiệu suất Rust, tích hợp sâu llama.cpp, sandbox kỹ năng WASM |
| **PicoClaw** | Triển khai biên/nhúng + tuân thủ quy định doanh nghiệp | Nhà phát triển IoT, người xây dựng SaaS đa người thuê | Runtime Go nhẹ, K3s đám mây gốc, bộ công cụ bảo mật Agent Shield |
| **NanoClaw** | Tích hợp gốc OpenCode + kế thừa hợp đồng vận hành | Kỹ sư tự động hóa doanh nghiệp, người dùng di chuyển từ V1→V2 | Container hóa TypeScript, máy trạng thái SQLite, điểm vào thống nhất OneCLI |
| **NullClaw** | Có thể chiếm dụng đồng thời + kênh ưu tiên quyền riêng tư | Người dùng công nghệ cao, người dùng Matrix/E2EE | Định tuyến hàm thuần túy Rust, phiên hạn chế đồng thời, proxy pantalaimon |
| **IronClaw** | Sandbox hóa WASM + quản trị tài nguyên + tuân thủ pháp luật | Bộ phận tuân thủ doanh nghiệp, kịch bản bảo mật cao | Runtime WASM Rust, mô hình nghĩa vụ CapabilityHost, kiến trúc Reborn |
| **Moltis** | Không ma sát vận hành + tính ổn định đa nền tảng | Nhà phát triển cá nhân, nhóm nhỏ triển khai nhanh | Full-stack Rust, tích hợp đầu cuối tmux, thúc đẩy bởi kiểm thử E2E |
| **ZeroClaw** | Đôi đường CLI/Web + hệ thống cấu hình thống nhất | Nhà phát triển toàn diện, người dùng tự lưu trữ | Mô hình không gian làm việc TypeScript, phiên bản hóa Schema, plugin WASM |
| **CoPaw** | Căn chỉnh mô hình nội địa + tích hợp IM doanh nghiệp | Người dùng doanh nghiệp Trung Quốc, hệ sinh thái DingTalk/Feishu | Bất đồng bộ Python, tối ưu hóa dòng Qwen, mở rộng kho kiến thức |

> **Phân chia kiến trúc**: Các dự án Rust (Hermes/NullClaw/Moltis) chiếm lĩnh không gian hiệu suất và độ tin cậy, TypeScript/Node.js (OpenClaw/NanoClaw/ZeroClaw) kiểm soát tốc độ tích hợp hệ sinh thái, Python (NanoBot/CoPaw) đi sâu vào thích ứng mô hình và kịch bản tiếng Trung. **Go (PicoClaw) là kẻ ngoại lai duy nhất rõ ràng đặt cược vào tính toán biên và đám mây gốc**.

---

## 6. Phân tầng nhiệt độ cộng đồng và mức độ trưởng thành

```
┌─────────────────────────────────────────────────────────────┐
│  🚀 Giai đoạn lặp lại nhanh (hoạt động cao · biến động cao)     │
│  OpenClaw │ ZeroClaw │ Hermes Agent │ IronClaw              │
│  Đặc điểm: cập nhật hàng ngày 50-100+, tỷ lệ hợp nhất <15%, lỗi hồi quy song hành với nợ kỹ thuật │
│  Rủi ro: tồn đọng PR dẫn đến người đóng góp rời bỏ, mất kiểm soát chất lượng phiên bản     │
├─────────────────────────────────────────────────────────────┤
│  ⚡ Giai đoạn phân phối nhanh nhẹn (hoạt động cao · vòng lặp kín cao)    │
│  NullClaw │ Moltis │ NanoBot │ NanoClaw │ PicoClaw          │
│  Đặc điểm: cập nhật hàng ngày 10-30, tỷ lệ hợp nhất >50%, "sửa lỗi trong ngày"           │
│  Rủi ro: phụ thuộc điểm đơn vào người đóng góp cốt lõi (NullClaw manelsen, Moltis penso)   │
├─────────────────────────────────────────────────────────────┤
│  🛠️ Giai đoạn củng cố chất lượng (hoạt động trung bình · tập trung sửa lỗi)   │
│  LobsterAI │ CoPaw                                               │
│  Đặc điểm: dựa trên Issue hoặc không có Issue bất thường, điểm nghẽn xem xét PR hoặc phản hồi chậm        │
│  Rủi ro: tồn đọng PR 33 ngày của LobsterAI, không đóng Issue nào của CoPaw       │
├─────────────────────────────────────────────────────────────┤
│  💤 Giai đoạn quan sát ngủ đông                                                │
│  TinyClaw │ ZeptoClaw                                          │
│  Đặc điểm: hoạt động 24 giờ không có hoạt động                                          │
│  Rủi ro: tính bền vững của dự án bị nghi ngờ                                        │
└─────────────────────────────────────────────────────────────┘
```

> **Nghịch lý trưởng thành**: Mức độ hoạt động tuyệt đối của OpenClaw cao nhất, nhưng **hiệu quả phân phối thực tế (tỷ lệ Issue đã đóng)** là thấp nhất toàn hệ sinh thái. Moltis chứng minh triết lý vận hành "ít là nhiều" với tỷ lệ xóa Bug 100%. Khuyến nghị cho người ra quyết định kỹ thuật: chọn dựa trên quy mô nhóm: **nhóm lớn chịu được ma sát tích hợp của OpenClaw/ZeroClaw, nhóm nhỏ ưu tiên lợi tức nhanh nhẹn của NullClaw/Moltis**.

---

## 7. Tín hiệu xu hướng cần chú ý

| Tín hiệu xu hướng | Hỗ trợ dữ liệu | Giá trị tham khảo cho nhà phát triển |
|:---|:---|:---|
| **"Hệ điều hành Agent" hóa** | Hermes #9459 (8👍 cao nhất), NanoBot #2072, Moltis #949 đồng thời xuất hiện | Thị trường công cụ Agent đơn lẻ bão hòa, khung điều phối đa Agent (tương tự Kubernetes cho Agent) là đỉnh cao kiến trúc tiếp theo |
| **Thích ứng mô hình nội địa trở thành đường đua độc lập** | NanoBot #3584 DeepSeek bị ngắt, CoPaw #3996 DeepSeek V4, OpenClaw #62364 khởi động đa Provider bị suy thoái | Độ phức tạp của việc thích ứng mô hình không phải OpenAI bị đánh giá thấp, nên dành **20-30% băng thông kỹ thuật** cho khả năng tương thích với mô hình nội địa/tự lưu trữ |
| **Lỗi âm thầm > lỗi sập** | Slack mất kết nối âm thầm của OpenClaw #72808, NanoClaw #2177 chế độ push bị kẹt, NanoBot #3571 làm ô nhiễm bộ đệm giữa các phiên | Ưu tiên xây dựng khả năng quan sát hơn phát triển tính năng — "hộp đen không có nhật ký" khó gỡ lỗi hơn "lỗi rõ ràng", trực tiếp phá hủy lòng tin sản xuất |
| **Sự trỗi dậy của kịch bản biên/nhúng** | NullClaw #851 Raspberry Pi 5, PicoClaw #1757 Raspberry Pi Zero W, OpenClaw #75137 TUI chiếm dụng tài nguyên khủng khiếp | Thiết bị ARM/hạn chế tài nguyên từ "kịch bản đồ chơi" trở thành "cơ sở hạ tầng tự động hóa 7x24", hiệu quả bộ nhớ và CPU trở lại KPI cốt lõi |
| **Hệ thống cấu hình trở thành điểm nghẽn di chuyển phiên bản** | ZeroClaw #5947 Schema v3 bị chặn, NanoClaw #2175 hợp đồng vận hành V1→V2, OpenClaw phá vỡ cấu hình ngầm | Các dự án sớm cần **thiết kế cơ chế phiên bản hóa cấu hình trước**, chi phí di chuyển sau này tăng theo cấp số nhân |
| **Bảo mật từ "tính năng" thành "kiến trúc"** | PicoClaw Agent Shield loạt bài, IronClaw Reborn Sandcastle, ZeroClaw #5775 quyền per-Skill | Cô lập đa người thuê, nguyên tắc đặc quyền tối thiểu, khử trùng đầu ra công cụ đang chuyển từ "plugin tùy chọn" thành "cơ sở hạ tầng mặc định", thúc đẩy tuân thủ không thể đảo ngược |

---

**Kết luận báo cáo**: Hệ sinh thái trợ lý AI cá nhân vào ngày 2026-05-02 thể hiện một bức tranh rõ ràng: **"đầu bị tắc nghẽn, eo thon nhanh nhẹn, đuôi phân hóa"**. OpenClaw cần giải quyết khẩn cấp nút thắt hợp nhất để duy trì vị trí dẫn đầu, NullClaw/Moltis xác nhận mô hình hiệu quả của dự án cỡ trung, IronClaw/PicoClaw lần lượt tạo dựng rào cản kỹ thuật trong sandbox hóa WASM và bảo mật biên. Lời khuyên cho nhà phát triển phổ thông: **ưu tiên Moltis/NullClaw cho môi trường sản xuất, giữ lại OpenClaw cho khám phá chức năng, đánh giá PicoClaw cho triển khai biên, chú ý đến IronClaw cho các tình huống tuân thủ quy định**.

---

## Báo cáo chi tiết dự án cùng phân khúc

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Nhật ký hoạt động hàng ngày của dự án NanoBot | 2026-05-02

> **Dự án**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)  
> **Ngày**: 2026-05-02  
> **Nhà phân tích**: Nhà phân tích dự án mã nguồn mở về Agent AI và Trợ lý AI cá nhân

---

## 1. Tổng quan hôm nay

NanoBot hôm nay thể hiện **nhịp độ bảo trì cường độ cao**: trong 24 giờ, xử lý 31 PR (hợp nhất/đóng 24, chờ hợp nhất 7), 10 Issues được đóng vòng lặp với tỷ lệ 80% (8 đóng/2 hoạt động). Nhóm cốt lõi phản hồi cực nhanh, nhiều Bug được báo cáo trong ngày (như `#3581` lỗi tiktoken, `#3584` lỗi xác minh API DeepSeek) đã có PR sửa lỗi trong vòng vài giờ. Dự án hiện tập trung vào **củng cố tính ổn định** (sửa lỗi kênh Matrix/Anthropic/DeepSeek...), **hỗ trợ kịch bản đa người dùng** (tiêm `sender_id` vào ngữ cảnh trò chuyện nhóm) và **tối ưu hóa trải nghiệm WebUI**. Sức khỏe tổng thể: **hoạt động và ổn định**, không có kế hoạch phát hành phiên bản.

---

## 2. Phát hành phiên bản

**Không có phiên bản mới nào được phát hành**

---

## 3. Tiến độ dự án

### 🔧 Sửa lỗi ổn định cốt lõi (vòng lặp đóng trong ngày)

| PR | Issue liên quan | Mô tả |
|:---|:---|:---|
| [#3582](https://github.com/HKUDS/nanobot/pull/3582) | [#3581](https://github.com/HKUDS/nanobot/issues/3581) | **Sửa lỗi sập tiktoken fallback**：`estimate_prompt_tokens_chain()` gặp lỗi do biến `estimated` chưa được định nghĩa khi bộ đếm provider bất thường, hiện đã khôi phục đường dẫn hạ cấp an toàn |
| [#3579](https://github.com/HKUDS/nanobot/pull/3579) | [#2709](https://github.com/HKUDS/nanobot/issues/2709) | **Hạ cấp tự động luồng dài cho Anthropic**：khi gọi phi luồng vượt quá 10 phút, tự động bắt `ValueError` và chuyển sang chế độ luồng |
| [#3578](https://github.com/HKUDS/nanobot/pull/3578) | [#1851](https://github.com/HKUDS/nanobot/issues/1851) | **Quản lý lỗi tràn xác thực Matrix**：lỗi xác thực nghiêm trọng (`M_UNKNOWN_TOKEN`) hiện sẽ chấm dứt vòng lặp sync thay vì thử lại mỗi 2 giây |
| [#3555](https://github.com/HKUDS/nanobot/pull/3555) | [#3551](https://github.com/HKUDS/nanobot/issues/3551) | **Sửa vòng đời luồng SSE cho OpenAI tương thích**：vấn đề luồng SSE kết thúc quá sớm trong kịch bản lệnh |
| [#3560](https://github.com/HKUDS/nanobot/pull/3560) | [#3554](https://github.com/HKUDS/nanobot/issues/3554) | **Sửa điều kiện phát hiện chế độ suy luận DeepSeek** |

### 🚀 Đột phá trong kịch bản đa người dùng/nhóm trò chuyện

| PR | Issue liên quan | Mô tả |
|:---|:---|:---|
| [#3549](https://github.com/HKUDS/nanobot/pull/3549) | [#3511](https://github.com/HKUDS/nanobot/issues/3511) | **Tiêm `sender_id` vào ngữ cảnh LLM runtime**：trong các kịch bản nhóm như Discord/Feishu, mô hình có thể nhận dạng người dùng khác nhau, hỗ trợ phản hồi cá nhân hóa |
| [#3552](https://github.com/HKUDS/nanobot/pull/3552) | — | **Cải thiện kênh Feishu**：tiền tố khối `[FEISHU-CONTEXT]` vào prompt, bao gồm tên hiển thị/open_id/user_id của người gửi |

### 🔄 Tính bền vững của phiên và độ mạnh mẽ của chuỗi công cụ

| PR | Mô tả |
|:---|:---|
| [#2334](https://github.com/HKUDS/nanobot/pull/2334) | Tin nhắn phiên được lưu trữ **mỗi lần lặp** thay vì "chỉ khi LLM dừng", ngăn mất tiến trình khi gặp sự cố giữa chừng |
| [#3580](https://github.com/HKUDS/nanobot/pull/3580) | **Hàng rào vòng lặp công cụ**：phát hiện mẫu lặp lại `(tool, args, result)`, chặn hành vi mất kiểm soát "gọi cùng một công cụ lỗi 40 lần" |

### 📺 Mở rộng kênh

| PR | Mô tả |
|:---|:---|
| [#2337](https://github.com/HKUDS/nanobot/pull/2337) / [#2379](https://github.com/HKUDS/nanobot/pull/2379) | **Kênh NapCatQQ**：bỏ qua giới hạn thành viên nhóm 20 người của nền tảng QQ mở, hỗ trợ QQ phụ làm bot, bao gồm tin nhắn hình ảnh/văn bản |

---

## 4. Điểm nóng cộng đồng

### 💬 Thảo luận sôi nổi nhất: Yêu cầu kiến trúc định tuyến đa agent

| Mục | Dữ liệu | Phân tích |
|:---|:---|:---|
| [#2072](https://github.com/HKUDS/nanobot/issues/2072) [ĐÃ ĐÓNG] | 8 bình luận, 👍×1, tạo ngày 2026-03-16 | **Yêu cầu cốt lõi**：người dùng yêu cầu hỗ trợ gốc cho Định tuyến đa Agent tương tự OpenClaw. Hiện tại, cần thủ công khởi động nhiều instance gateway để ấp từng agent, thao tác phức tạp. Issue đã đóng nhưng **không rõ có được đưa vào lộ trình hay không** - có thể do khác biệt kiến trúc hoặc điều chỉnh ưu tiên, nhu cầu triển khai quy mô lớn của cộng đồng vẫn chưa được đáp ứng |

### 🔥 Đề xuất mới giá trị cao: Neo tập trung cấp phiên

| Mục | Dữ liệu | Phân tích |
|:---|:---|:---|
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) [MỞ] | 4 bình luận, 👍×0, tạo ngày 2026-04-19 | **"Công cụ Tập trung Cấp Phiên"**：đề xuất rằng LLM agent thiếu khả năng neo tập trung như "bảng nhiệm vụ" của con người - khi bị gián đoạn bởi các vấn đề phụ, không thể quay lại nhiệm vụ chính. `_runtime_vars` của công cụ `my` hiện tại là "sổ nháp runtime" thay vì "ngăn xếp nhiệm vụ bền vững". Issue này chạm đến **lỗ hổng cốt lõi trong lập kế hoạch nhiệm vụ dài hạn**, bổ sung cho PR #2334 đã hợp nhất hôm nay (lưu trữ theo vòng lặp), nhu cầu phối hợp được đề cập. |

---

## 5. Lỗi và tính ổn định

| Mức độ nghiêm trọng | Mục | Trạng thái | Chi tiết |
|:---|:---|:---|:---|
| 🔴 **Cao** | [#3584](https://github.com/HKUDS/nanobot/issues/3584) Lỗi xác minh API `reasoning_content` của DeepSeek | **Đã xác định nguyên nhân gốc rễ, vá lỗi chờ hợp nhất** | Sau v0.1.5.post3, mô hình DeepSeek (deepseek-v4-flash/deepseek-reasoner) gặp lỗi xác minh nghiêm ngặt do trường `reasoning_content` của tin nhắn lịch sử không được truyền chính xác; tác giả đã cung cấp giải pháp sửa lỗi |
| 🟡 **Trung bình** | [#3581](https://github.com/HKUDS/nanobot/issues/3581) `NameError: name 'estimated' is not defined` | ✅ **Đã sửa** [#3582](https://github.com/HKUDS/nanobot/pull/3582) | Đường dẫn fallback tiktoken bị sập khi tích hợp bộ nhớ, ảnh hưởng đến các kịch bản có ngân sách token bị giới hạn |
| 🟡 **Trung bình** | [#3553](https://github.com/HKUDS/nanobot/issues/3553) Đọc lại tin nhắn cũ lặp lại khi khởi động Matrix | ✅ **Đã đóng** | Phát lại tin nhắn lịch sử sau `/restart` gây ra vòng lặp, người dùng cần ngắt bằng `/new` thủ công |
| 🟡 **Trung bình** | [#3571](https://github.com/HKUDS/nanobot/issues/3571) Ô nhiễm bộ đệm giữa các phiên của ReadFileTool | ✅ **Đã đóng** | Sau khi phiên A đọc tệp, phiên B chỉ nhận được bản sao lưu "Tệp không thay đổi kể từ lần đọc cuối" thay vì nội dung, nguyên nhân gốc rễ là khóa bộ đệm của `file_state.py` không được cô lập theo phiên |
| 🟢 **Thấp** | [#2709](https://github.com/HKUDS/nanobot/issues/2709) Lỗi bắt buộc luồng Anthropic | ✅ **Đã sửa** [#3579](https://github.com/HKUDS/nanobot/pull/3579) | Lỗi SDK kích hoạt khi yêu cầu dài phi luồng trong kịch bản doanh nghiệp WeChat |
| 🟢 **Thấp** | [#1851](https://github.com/HKUDS/nanobot/issues/1851) Máy chủ lỗi xác thực Matrix bị tràn | ✅ **Đã sửa** [#3578](https://github.com/HKUDS/nanobot/pull/3578) | Token không hợp lệ gây ra thử lại vô hạn, nhật ký bị bùng nổ |

> **Đánh giá rủi ro**: #3584 của DeepSeek là hạng mục nguy cơ cao duy nhất **chưa hoàn toàn đóng vòng lặp** ảnh hưởng đến nhóm người dùng cốt lõi của mô hình nội địa; các lỗi đường dẫn quan trọng khác đã được sửa lỗi trong ngày, cơ chế phản hồi hiệu quả.

---

## 6. Yêu cầu chức năng và tín hiệu lộ trình

| Yêu cầu | Nguồn | Tín hiệu khả thi | Tỷ lệ đưa vào |
|:---|:---|:---|:---|
| **Định tuyến đa Agent gốc** | [#2072](https://github.com/HKUDS/nanobot/issues/2072) | Xung đột ở cấp độ kiến trúc với thiết kế gateway hiện có, cần tái cấu trúc lớp điều phối; không có PR liên quan | ⚠️ Thấp (ngắn hạn) |
| **Công cụ Tập trung cấp Phiên / Ngăn xếp nhiệm vụ** | [#3292](https://github.com/HKUDS/nanobot/issues/3292) | Phù hợp với hướng mở rộng công cụ `my` hiện có; cơ chế lưu trữ của PR #2334 có thể làm cơ sở hạ tầng | 🔶 Trung bình (cần đánh giá thiết kế) |
| **Chuyển đổi nhanh cài đặt mô hình** | [#3358](https://github.com/HKUDS/nanobot/pull/3358) [MỞ] | PR đã được gửi, bao gồm `ModelPresetConfig` + xác thực Pydantic + tích hợp CLI | ✅ **Cao** (phiên bản tiếp theo) |
| **Hệ thống plugin HookCenter** | [#3564](https://github.com/HKUDS/nanobot/pull/3564) [MỞ] | Thay thế chế độ ghi đè phương thức AgentHook, hỗ trợ phân phối `entry_points`; bộ điều hợp tương thích ngược đã hoàn thành | ✅ **Cao** (nâng cấp kiến trúc) |
| **Tải lười biếng công cụ MCP** | [#1759](https://github.com/HKUDS/nanobot/pull/1759) [MỞ] | Giải quyết vấn đề mở rộng ngữ cảnh MCP, chi phí ngữ cảnh sẽ trầm trọng hơn trong bối cảnh mở rộng hệ sinh thái MCP | 🔶 Trung bình (ưu tiên tối ưu hóa hiệu suất) |
| **Bảo mật tăng cường WebUI** | [#3492](https://github.com/HKUDS/nanobot/pull/3492) [MỞ] | Rủi ro lộ token, truy cập trái phép trong kịch bản public deploy; quan trọng về bảo mật | ✅ **Cao** (chặn) |

---

## 7. Tóm tắt phản hồi người dùng

### 😤 Điểm đau cốt lõi

| Điểm đau | Issue nguồn | Lời người dùng/kịch bản |
|:---|:---|:---|
| **Mất nhận dạng danh tính trong nhóm trò chuyện** | "Bot không thể nhận ra ai đang nói trong kênh Discord của gia đình" —— [#3511](https://github.com/HKUDS/nanobot/issues/3511), đã thúc đẩy tiêm `sender_id` vào toàn bộ kênh |
| **Thích ứng mô hình nội địa yếu** | Trường `reasoning_content` của DeepSeek thường xuyên bị đứt gãy theo các phiên bản lặp lại —— [#3584](https://github.com/HKUDS/nanobot/issues/3584) |
| **Vòng lặp công cụ mất kiểm soát** | "Mô hình nhỏ liên tục gọi cùng một công cụ lỗi 40 lần cho đến khi đạt max_iterations" —— [#2298](https://github.com/HKUDS/nanobot/issues/2298), lo lắng về chi phí token của người dùng |

### ✅ Hài lòng/Mong đợi

- **Tốc độ phản hồi sửa lỗi**：Hiệu quả vòng lặp PR trong ngày, sửa lỗi trong ngày (chỉ vài giờ từ #3581→#3582)
- **Tính linh hoạt mở rộng kênh**：NapCatQQ bỏ qua giới hạn nền tảng chính thức, sự đóng góp tích cực của cộng đồng

### 🤔 Nhu cầu kịch bản
- **Triển khai cấp doanh nghiệp**：tăng cường bảo mật public tunnel (#3492), tính sẵn sàng cao cho Matrix (#1851/#3553)
- **Độ tin cậy nhiệm vụ dài hạn**：không mất tiến trình khi phiên bị sập (#2334 đã giải quyết một phần), quay lại sau khi nhiệm vụ bị gián đoạn (#3292 chờ phản hồi)

---

## 8. Tồn đọng cần xử lý

| Mục | Ngày tạo | Cập nhật cuối | Rủi ro | Nhắc nhở |
|:---|:---|:---|:---|:---|
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) Công cụ Tập trung cấp Phiên | 2026-04-19 | 2026-05-01 | 🔶 14 ngày hoạt động, 4 bình luận không có phản hồi từ người bảo trì | **Khoảng trống UX cốt lõi**, giá trị phối hợp cao với PR lưu trữ/chuỗi công cụ, đề xuất đưa vào thảo luận kế hoạch v0.2 |
| [#1759](https://github.com/HKUDS/nanobot/pull/1759) Tải lười biếng MCP | 2026-03-09 | 2026-05-01 | 🔶 54 ngày mở, bình luận không xác định | Quan trọng về hiệu suất, vấn đề chi phí ngữ cảnh sẽ trầm trọng hơn trong bối cảnh mở rộng MCP |
| [#3358](https://github.com/HKUDS/nanobot/pull/3358) Cài đặt mô hình | 2026-04-21 | 2026-05-01 | 🟢 Chức năng hoàn chỉnh chờ xem xét | Đề xuất ưu tiên hợp nhất, nhu cầu rõ ràng từ người dùng thường xuyên chuyển đổi mô hình (phát triển/sản xuất/kiểm thử) |
| [#3492](https://github.com/HKUDS/nanobot/pull/3492) Bảo mật WebUI | 2026-04-28 | 2026-05-02 | 🔴 Quan trọng về bảo mật, rủi ro phơi nhiễm trong public deploy | **Đề xuất hợp nhất chặn việc phát hành phiên bản tiếp theo** |

---

> **Thời gian tạo báo cáo hàng ngày**: 2026-05-02  
> **Cửa sổ dữ liệu**: 24 giờ qua (2026-05-01 đến 2026-05-02)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Nhật ký hoạt động hàng ngày của dự án Hermes Agent | 2026-05-02

> **Dự án**: [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)  
> **Ngày**: 2026-05-02  
> **Nhà phân tích**: Nhà phân tích dự án mã nguồn mở về Agent AI và Trợ lý AI cá nhân

---

## 1. Tổng quan hôm nay

Hermes Agent hôm nay duy trì **mức độ hoạt động cộng đồng cực kỳ cao**, tạo ra 50 lượt cập nhật Issues (43 mới mở/hoạt động, 7 đóng) và 50 lượt cập nhật PR (47 chờ hợp nhất, 3 đã hợp nhất/đóng) trong 24 giờ, tạo ra tỷ lệ hợp nhất/đóng là 1:7, cho thấy áp lực đáng kể lên hàng đợi xem xét mã. Hôm nay không có phiên bản mới nào được phát hành, nhưng các đóng góp của cộng đồng thể hiện hai tuyến chính: **sâu hóa thích ứng nền tảng + tấn công ổn định cốt lõi**: các nền tảng gateway như Telegram/Discord/Feishu tiếp tục được lặp lại, đồng thời các Bug ở lớp cơ sở hạ tầng như bộ đệm KV, nén ngữ cảnh, và chuỗi ủy quyền liên tục xuất hiện. Điều đáng chú ý là 5 trong số 7 Issues mới xuất hiện vào ngày 1 tháng 5 là báo cáo Bug, cho thấy các thay đổi mã gần đây có thể mang lại rủi ro hồi quy.

---

## 2. Phát hành phiên bản

**Không có phiên bản mới nào được phát hành** (Số lượng Release hôm nay: 0)

---

## 3. Tiến độ dự án

### PR đã hợp nhất/đóng (3 lượt)

| PR | Tác giả | Trạng thái | Đóng góp cốt lõi |
|:---|:---|:---|:---|
| [#18583](https://github.com/NousResearch/hermes-agent/pull/18583) Add skill: flight-transfer-finder | wali-reheman | **Đã đóng** | Mở rộng thị trường kỹ năng: kỹ năng tra cứu chuyển tiếp chuyến bay (đã quét qua Hermes Skills Guard) |
| [#18516](https://github.com/NousResearch/hermes-agent/issues/18516) Gateway automatic session freshness resets | mikejflex | **Issue Đã đóng** | Yêu cầu cơ chế làm mới phiên tự động của gateway đã được giải quyết hoặc đưa vào PR khác |
| [#18513](https://github.com/NousResearch/hermes-agent/issues/18513) Telegram polling conflict alert & degrade | mikejflex | **Issue Đã đóng** | Cơ chế cảnh báo và hạ cấp xung đột truy vấn Telegram của gateway đã được triển khai |

**Đánh giá tiến độ tổng thể**: Tỷ lệ hợp nhất hôm nay hơi thấp (3/50 = 6%), nhưng việc xây dựng khả năng phục hồi cơ sở hạ tầng đã đạt được tiến triển đáng kể - khả năng quan sát vận hành của gateway Telegram (#18513) và quản lý vòng đời phiên (#18516) đã bước vào trạng thái đóng. Nhiều PR giá trị cao vẫn còn trong hàng đợi, bao gồm tối ưu hóa hiệu suất (tăng tốc Numba #18295), sửa lỗi cốt lõi (nhận dạng mô hình hiệu quả #17214), v.v.

---

## 4. Điểm nóng cộng đồng

### 🔥 Issues có nhiều thảo luận nhất (sắp xếp theo số bình luận)

| Hạng | Issue | Bình luận | 👍 | Yêu cầu cốt lõi | Liên kết |
|:---|:---|:---|:---|:---|:---|
| 1 | **Hỗ trợ OAuth MiniMax** #3347 | 6 | 1 | Nhu cầu thích ứng xác thực cho người dùng di chuyển từ OpenClaw, tham chiếu hướng dẫn tích hợp của bên thứ ba | [#3347](https://github.com/NousResearch/hermes-agent/issues/3347) |
| 2 | **Ràng buộc vai trò chủ đề diễn đàn Telegram** #4622 | 5 | 2 | Tải các kỹ năng/nhân cách khác nhau trong các luồng chủ đề khác nhau trong siêu nhóm, đạt được "một bot nhiều vai trò" | [#4622](https://github.com/NousResearch/hermes-agent/issues/4622) |
| 3 | **Lỗi 401 xác thực OpenRouter** #14637 | 4 | 0 | **Đã đóng** — Vấn đề về chuỗi xác thực tải cấu hình và biến môi trường | [#14637](https://github.com/NousResearch/hermes-agent/issues/14637) |
| 4 | **Bộ đệm KV không hợp lệ cho tin nhắn mới** #4555 | 3 | 2 | Trong kịch bản slot đơn của llama.cpp, sự khác biệt về định dạng tin nhắn giữa vòng lặp agentic và tải lại phiên khiến bộ đệm không hợp lệ toàn bộ | [#4555](https://github.com/NousResearch/hermes-agent/issues/4555) |
| 5 | **Thích ứng nền tảng Linear** #5826 | 3 | 3 | Tích hợp gateway cho công cụ quản lý dự án Linear, kích hoạt quy trình làm việc bằng @mention | [#5826](https://github.com/NousResearch/hermes-agent/issues/5826) |
| 6 | **Tính liên tục của phiên giữa các giao diện** #18457 | 3 | 0 | **Đề xuất lặp lại** — Di chuyển phiên liền mạch giữa thiết bị đầu cuối/Telegram/Discord/Slack/Teams | [#18457](https://github.com/NousResearch/hermes-agent/issues/18457) |
| 7 | **Cấu hình Agent nhiệm vụ ủy thác** #9459 | 3 | 8 | Hỗ trợ cấu hình Agent được đặt tên cho `delegate_task`, xây dựng khung điều phối tùy chỉnh (tương tự Pantheon agents) | [#9459](https://github.com/NousResearch/hermes-agent/issues/9459) |

**Phân tích yêu cầu**: