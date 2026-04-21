# OpenClaw Sinh nhật Báo Cáo Hàng Ngày 2026-04-21

> Vấn đề: 500 | PR: 500 | Dự án bao phủ: 13 | Thời gian tạo: 2026-04-21 00:16 UTC

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

## Báo cáo Chi tiết Dự án OpenClaw

# Nhật báo Động thái Dự án OpenClaw | 2026-04-21

## 1. Tóm tắt Ngày

OpenClaw hôm nay duy trì **mức độ hoạt động cực cao**, với 500 cập nhật cho Vấn đề và PR trong vòng 24 giờ, thể hiện sự tham gia dày đặc của cộng đồng. Không có phiên bản mới nào được phát hành, trọng tâm phát triển tập trung vào **sửa lỗi ổn định và tối ưu hóa trải nghiệm người dùng**—các vấn đề như trạng thái cuộn Web UI, lưu trữ phương tiện lâu dài, độ trễ khởi động nguội CLI đang được tập trung giải quyết. 338 PR đang chờ hợp nhất cho thấy cộng đồng đóng góp rất năng động, nhưng tốc độ hợp nhất (162/500) gợi ý rằng băng thông đánh giá (review) có thể trở thành nút thắt cổ chai. Nhìn chung, sức khỏe dự án tốt, với việc lặp lại kiến trúc cốt lõi và đánh bóng các kịch bản biên được tiến hành song song.

---

## 2. Phát hành Phiên bản

**Không có phiên bản mới nào được phát hành** (0 releases)

---

## 3. Tiến độ Dự án

### Các PR Quan trọng được Hợp nhất/Đóng Ngày Hôm Nay

| PR | Tác giả | Đóng góp Cốt lõi | Vấn đề Liên quan |
|:---|:---|:---|:---|
| [#43961](https://github.com/openclaw/openclaw/pull/43961) | happydog-intj | **Độ ổn định của Gateway**：Sử dụng SIGKILL làm phương án cuối cùng để chấm dứt tiến trình bị treo, giải quyết lỗi khởi động lại do chiếm dụng cổng sau khi hết thời gian chờ tắt máy duyên dáng | #43960 |
| [#57737](https://github.com/openclaw/openclaw/pull/57737) | Vitalcheffe | **Độ tin cậy của Telegram**：Ngưỡng lỗi thời gian chờ (stall threshold) tăng từ 90 giây lên 300 giây, loại bỏ các lỗi khởi động lại sai trong quá trình xử lý LLM | #57660 |
| [#68721](https://github.com/openclaw/openclaw/pull/68721) | Lucenx9 | **Mặc định an toàn**：Chính sách phê duyệt Codex app-server mặc định là `on-request`, ngăn chặn rủi ro thực thi ngầm | — |
| [#69072](https://github.com/openclaw/openclaw/pull/69072) | ayeshakhalid192007-dev | **Sửa lỗi phiên Codex**：Giải phóng khóa session lane, giải quyết vấn đề tắc nghẽn khiến phiên chỉ trả lời được một lần rồi bị đóng băng | — |
| [#68310](https://github.com/openclaw/openclaw/pull/68310) | Chased1k | **Độ bền của trình thực thi nhúng**：Thêm 3 lần thử cho các lượt (turn) không có đầu ra (empty output) với `stopReason=error`, bao phủ các mô hình không phải tiên phong | — |
| [#43392](https://github.com/openclaw/openclaw/pull/43392) | dalefrieswthat | **Độ tin cậy của WebSocket**：Sửa lỗi đóng bất thường 1006 do điều kiện tranh chấp (race condition) trong trình xử lý nâng cấp (upgrade handler) | — |
| [#69477](https://github.com/openclaw/openclaw/pull/69477) | scoootscooob | **Cập nhật mô hình mặc định**：Mô hình mặc định Moonshot từ Kimi K2.5 → K2.6, theo kịp khả năng mới nhất của upstream | — |
| [#67280](https://github.com/openclaw/openclaw/pull/67280) | Sway-Chan | **Lưu trữ phiên ACP**：Tái sử dụng khóa phiên hiện có với cùng nhãn, tránh tạo UUID lặp lại dẫn đến mất trạng thái | — |

**Đánh giá tổng thể tiến độ**：Các PR được hợp nhất hôm nay tập trung vào **độ bền của môi trường sản xuất** (chu kỳ sống tiến trình, hết hạn mạng, trạng thái phiên) và **nâng cao tiêu chuẩn an toàn**, thuộc loại công trình "sửa mái nhà", tạo nền tảng vững chắc cho việc mở rộng chức năng sau này.

---

## 4. Điểm nóng Cộng đồng

### Các Vấn đề có Thảo luận Sôi nổi (Top Số lượt Bình luận)

| Vấn đề | Bình luận | 👍 | Yêu cầu Cốt lõi | Trạng thái |
|:---|:---|:---|:---|:---|
| [#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) | 88 | 71 | **Ứng dụng gốc đa nền tảng**：macOS/iOS/Android đã có, Linux/Windows còn thiếu từ lâu, cản trở triển khai doanh nghiệp | 🔥 OPEN |
| [#37757 Lỗi chính tả trong IDENTITITY.md](https://github.com/openclaw/openclaw/issues/37757) | 26 | 0 | Lỗi thẩm mỹ trong thông báo hệ thống, ảnh hưởng đến cảm giác chuyên nghiệp | OPEN stale |
| [#48205 Gateway khởi động lại khoảng ~50 phút một lần](https://github.com/openclaw/openclaw/issues/48205) | 21 | 0 | Độ ổn định của môi trường sản xuất, `reason=none` không có thông tin chẩn đoán | ✅ CLOSED |
| [#34830 Thiếu tiêu đề xác thực 401 của OpenRouter](https://github.com/openclaw/openclaw/issues/34830) | 20 | 0 | Hồi quy sau khi nâng cấp, cản trở gọi API | ✅ CLOSED |
| [#37623 GPT-5.4 hiển thị cấu hình nhưng chạy thất bại](https://github.com/openclaw/openclaw/issues/37623) | 16 | 7 | **Hỗ trợ mô hình mới chậm chạp**：lớp cấu hình và thời gian chạy bị tách rời, người dùng bị hiểu lầm | OPEN stale |

### PRs/Vấn đề có Phản ứng Mạnh mẽ

- **#75** (71 👍) tiếp tục dẫn đầu danh sách yêu cầu chức năng, phản ánh nhu cầu cấp thiết về **thị trường doanh nghiệp trên máy tính để bàn**
- **#37623** (7 👍) tiết lộ bẫy UX "cấu hình là hỗ trợ", quy trình tích hợp mô hình mới cần được cấu trúc lại

**Phân tích Yêu cầu**：Mâu thuẫn cốt lõi của cộng đồng nằm ở sự cạnh tranh tài nguyên giữa **phạm vi bao phủ nền tảng rộng** (khách hàng Linux/Windows) và **tốc độ theo kịp mô hình** (GPT-5.4, Kimi K2.6). Người dùng doanh nghiệp cần độ ổn định triển khai, người dùng tiên phong cần khả năng mô hình mới nhất, cả hai đều cần sự hỗ trợ nâng cấp cơ sở hạ tầng.

---

## 5. Lỗi và Độ ổn định

### Sắp xếp theo Mức độ Nghiêm trọng

| Ưu tiên | Vấn đề | Mô tả | Phạm vi Ảnh hưởng | PR Sửa lỗi |
|:---|:---|:---|:---|:---|
| **P0-Chặn Sản xuất** | [#48205](https://github.com/openclaw/openclaw/issues/48205) | Gateway khởi động lại định kỳ (~50 phút), không có lý do lỗi | Tất cả các phiên bản chạy dài hạn | #43961 (chấm dứt tiến trình làm phương án cuối cùng) |
| **P0-Chặn Sản xuất** | [#68944](https://github.com/openclaw/openclaw/issues/68944) | WebSocket CLI bị treo, tất cả các lệnh yêu cầu kết nối gateway đều vô hiệu | Người dùng phiên bản 2026.4.15 | 🚨 **Không có** |
| **P1-Suy giảm Chức năng** | [#68735](https://github.com/openclaw/openclaw/issues/68735) | Yêu cầu LLM bị từ chối sau khi nâng cấp từ 2026.4.14→4.15 (payload schema/tool) | Người dùng github-copilot/gpt-5-mini | 🚨 **Không có** |
| **P1-Suy giảm Chức năng** | [#65603](https://github.com/openclaw/openclaw/issues/65603) | Gọi công cụ/suy luận Azure Foundry GPT Model không hoạt động | Người dùng doanh nghiệp Azure | 🚨 **Không có** |
| **P1-Suy giảm Chức năng** | [#34830](https://github.com/openclaw/openclaw/issues/34830) | Thiếu tiêu đề xác thực 401 OpenRouter (hồi quy sau nâng cấp) | Người dùng OpenRouter | ✅ Đã đóng |
| **P2-Trải nghiệm Bị Hư hại** | [#37757](https://github.com/openclaw/openclaw/issues/37757) | Lỗi chính tả trong IDENTITITY.md | Tất cả người dùng (thẩm mỹ) | 🚨 **Không có** |
| **P2-Trải nghiệm Bị Hư hại** | [#52037](https://github.com/openclaw/openclaw/issues/52037) | Token làm mới OAuth OpenAI Codex không được lưu vào đĩa | Triển khai VPS/systemd | 🚨 **Không có** |

**Rủi ro Chính**：#68944 và #68735 là **hồi quy mới được báo cáo hôm qua**, ảnh hưởng đến phiên bản mới nhất (2026.4.15), chưa có PR tương ứng, nên đề nghị người bảo trì ưu tiên phản hồi.

---

## 6. Yêu cầu Chức năng và Tín hiệu Lộ trình

| Yêu cầu | Vấn đề/PR | Độ nóng | Đánh giá Khả năng Bao gồm |
|:---|:---|:---|:---|
| **Khách hàng gốc Linux/Windows** | [#75](https://github.com/openclaw/openclaw/issues/75) | 🔥 Rất cao (88 bình luận, 71👍) | Cao — Chiếm lĩnh không gian dài hạn, cần quyết định về framework Electron/Tauri hoặc gốc |
| **Tích hợp máy chủ MCP gốc** | [#34097](https://github.com/openclaw/openclaw/issues/34097) | Trung bình (6 bình luận, 3👍) | Trung-Cao — Tiêu chuẩn hệ sinh thái, Cursor/Claude Desktop đã áp dụng, chưa có PR |
| **Chế độ Safe/Unsafe ClawdBot** | [#6731](https://github.com/openclaw/openclaw/issues/6731) | Trung bình (9 bình luận) | Thấp — Liên quan đến việc viết lại bằng Rust, khối lượng công việc lớn, thuộc tầm nhìn |
| **Hồ sơ âm thanh Gemini TTS** | [#69321](https://github.com/openclaw/openclaw/pull/69321) | Giai đoạn PR | **Cao** — PR đã mở, khối lượng XS, dự kiến hợp nhất nhanh chóng |
| **Nhà cung cấp Typecast TTS** | [#10356](https://github.com/openclaw/openclaw/pull/10356) | Giai đoạn PR (từ tháng 2 đến nay) | Trung bình — Khối lượng L, cần băng thông review |
| **Chuỗi dự phòng mô hình heartbeat** | [#69495](https://github.com/openclaw/openclaw/pull/69495) | Giai đoạn PR | **Cao** — Khối lượng M, giải quyết độ bền sản xuất, đã nộp hôm nay |

**Tín hiệu Lộ trình**：Các PR hôm nay cho thấy nhóm đang thúc đẩy **mở rộng hệ sinh thái TTS** (hồ sơ âm thanh Gemini, Typecast) và **độ bền thời gian chạy** (dự phòng heartbeat, lưu trữ phương tiện), phù hợp với nhịp điệu lặp lại "ổn định trước, phong phú sau". Mặc dù có tiếng nói về tích hợp MCP, nhưng nó chưa đi vào hàng đợi phát triển.

---

## 7. Tóm tắt Phản hồi Người dùng

### Điểm đau Thực tế

| Kịch bản | Vấn đề Nguồn | Cảm xúc |
|:---|:---|:---|
| **"Cấu hình hiển thị hỗ trợ, thực tế chạy thất bại"** — GPT-5.4 có thể cấu hình nhưng không dùng được | #37623 | 😤 Thất vọng/Bị hiểu lầm |
| **"Nâng cấp là hồi quy"** — Yêu cầu LLM bị từ chối sau khi nâng cấp từ 4.14→4.15 | #68735 | 😤 Mất lòng tin |
| **"Triển khai VPS token OAuth hết hạn qua đêm"** — Làm mới không lưu vào đĩa, cần ủy quyền lại nhiều lần | #52037 | 😩 Gánh nặng vận hành |
| **"Docker + không gian làm việc Sandbox bị đứt kết nối"** — Nhầm lẫn đường dẫn nội bộ vs đường dẫn máy chủ | #31331 | 🤯 Cấu hình phức tạp |
| **"Lệnh /new Discord chờ 3 giây"** — Thiết kế tương tác chưa tính đến độ trễ khởi động nguội | #58602 | 😤 Trải nghiệm bị ngắt |

### Điểm Hài lòng

- **Ý định bao phủ đa nền tảng mạnh mẽ**：macOS/iOS/Android đã có, người dùng công nhận chiến lược ưu tiên thiết bị di động
- **Kênh kép TUI/Web UI**：Người dùng đầu cuối và người dùng trình duyệt đều có được thứ họ muốn
- **Phạm vi hệ sinh thái mô hình rộng**：Sự hỗ trợ từ nhiều nhà cung cấp như OpenRouter, Anthropic, Azure, Kimi được công nhận

---

## 8. Tồn đọng Cần Xử lý

### Các Vấn đề Có Giá trị Cao, Không được Phản hồi Lâu Dài (nhãn `stale` + Tương tác Cao)

| Vấn đề | Tạo | Cập nhật Cuối cùng | Rủi ro | Hành động Đề xuất |
|:---|:---|:---|:---|:---|
| [#75 Khách hàng Linux/Windows](https://github.com/openclaw/openclaw/issues/75) | 2026-01-01 | 2026-04-20 | Nút thắt cổ chai cho việc áp dụng của doanh nghiệp | Người bảo trì xác nhận lộ trình kỹ thuật (Electron/Tauri/gốc?) |
| [#37623 GPT-5.4 cấu hình tách rời thời gian chạy](https://github.com/openclaw/openclaw/issues/37623) | 2026-03-06 | 2026-04-20 | Uy tín theo kịp mô hình mới | Lớp xác thực cấu hình thêm kiểm tra sự tồn tại trong thời gian chạy |
| [#37834 Hỏng hóc ngữ cảnh phiên 400 vòng lặp](https://github.com/openclaw/openclaw/issues/37834) | 2026-03-06 | 2026-04-20 | Độ tin cậy của phiên dài | Đánh giá lại máy trạng thái phiên, logic dọn dẹp abort |
| [#35807 Hỏng hóc biến PowerShell pipeline](https://github.com/openclaw/openclaw/issues/35807) | 2026-03-05 | 2026-04-20 | Trải nghiệm nhà phát triển Windows | Kiểm tra logic thoát của công cụ Exec |
| [#34097 Tích hợp gốc MCP](https://github.com/openclaw/openclaw/issues/34097) | 2026-03-04 | 2026-04-20 | Tương thích hệ sinh thái | RFC giải pháp kỹ thuật, đánh giá mối quan hệ với hệ thống plugin hiện có |

### Cảnh báo Băng thông Review

- **338 PR đang chờ hợp nhất** bị tồn đọng, hôm nay chỉ hợp nhất/đóng 162 cái
- Nhiều PR `size: XL` (#69479, #69483, #68612, #10356) yêu cầu review sâu từ những người bảo trì cốt lõi

---

*Báo cáo hàng ngày được tạo dựa trên dữ liệu công khai trên GitHub, phạm vi thời gian: 2026-04-20 đến 2026-04-21*

---

## So sánh Hệ sinh thái Ngang

# Phân tích So sánh Ngang Hệ sinh thái Mã nguồn Mở Trợ lý AI Cá nhân/Tác nhân Thông minh Tự hành
**Ngày báo cáo: 2026-04-21**

---

## 1. Toàn cảnh Hệ sinh thái

Hệ sinh thái mã nguồn mở trợ lý AI cá nhân đang ở **giai đoạn chuyển đổi quan trọng từ xác minh nguyên mẫu sang sẵn sàng cho sản xuất**：Các dự án hàng đầu xử lý hơn 50 PR mỗi ngày, nhưng nút thắt cổ chai băng thông review phổ biến; Giao thức MCP (Model Context Protocol) trở thành tiêu chuẩn tích hợp công cụ thực tế, hơn 60% dự án hoạt động đã bao gồm hoặc đang tích hợp; Tương tác giọng nói, đầu vào đa phương thức, bộ nhớ dài hạn tạo thành tiêu điểm cạnh tranh khác biệt thế hệ tiếp theo. Đồng thời, các sự kiện như di chuyển thương hiệu (CoPaw → QwenPaw), nâng cấp cấp tiến Zig (NullClaw) cho thấy: Sự trưởng thành của hệ sinh thái đi kèm với việc tiết lộ nợ kỹ thuật tập trung, "ưu tiên ổn định" đang thay thế "tích lũy chức năng" trở thành sự đồng thuận của cộng đồng.

---

## 2. So sánh Mức độ Hoạt động của từng Dự án

| Dự án | Vấn đề (24h) | PR (24h) | Đã hợp nhất/Đóng | Chờ hợp nhất | Phát hành | Đánh giá Sức khỏe |
|:---|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 cập nhật | 500 cập nhật | 162 | **338** ⚠️ | 0 | 🔶 Hoạt động cực cao, nút thắt cổ chai review nghiêm trọng |
| **NanoBot** | 12 (7 đóng) | 51 (30 hợp nhất) | 30 | 21 | 0 | 🟢 Thông lượng cao, phản hồi bảo trì nhanh |
| **Hermes Agent** | 50 | 50 | 18 | 32 | 0 | 🟢 Phát triển vững chắc, chiều sâu kỹ thuật nổi bật |
| **PicoClaw** | 13 | 114 (chỉ 8 hợp nhất) | 8 | **106** 🔴 | 1 nightly | 🔴 Tồn đọng cao, khủng hoảng lớp xác thực |
| **NanoClaw** | 1 | 25 (8 hợp nhất) | 8 | 17 | 0 | 🟢 Kết thúc v2, định hướng chất lượng |
| **NullClaw** | 3 hoạt động | 3 (0 hợp nhất) | 0 | 3 | 0 | 🔴 Đau đớn khi di chuyển Zig 0.16 |
| **IronClaw** | 50 | 50 (15 hợp nhất) | 15 | 35 | 0 | 🟢 Chạy nước rút Engine V2, tập trung cấp doanh nghiệp |
| **LobsterAI** | 1 | 50 (28 hợp nhất) | 28 | 22 | 0 | 🟢 Được NetEase Youdao bảo trợ, đào sâu trải nghiệm máy tính để bàn |
| **TinyClaw** | 0 | 1 (1 đóng) | 1 | 0 | 0 | ⚪ Bảo trì ngủ đông |
| **Moltis** | 9 (9 đóng) | 12 (12 hợp nhất) | 12 | 5 | **1** ✅ | 🟢 Tiêu chuẩn hiệu quả kỹ thuật, lỗi được xóa trong ngày |
| **CoPaw/QwenPaw** | 42 (15 đóng) | 50 (33 hợp nhất) | 33 | 17 | 1 beta | 🔶 Đau đớn khi di chuyển thương hiệu, cộng đồng hoạt động |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | 0 | ⚪ Không hoạt động |
| **ZeroClaw** | 46 (21 đóng) | 50 (21 hợp nhất) | 21 | 29 | 0 | 🟢 Quản trị kiến trúc trưởng thành, thúc đẩy bằng RFC |

> **Chỉ số chính**：Moltis đạt 100% Issue được xóa trong ngày + 100% tỷ lệ hợp nhất PR; 106 PR chờ hợp nhất của PicoClaw là rủi ro cao nhất trong hệ sinh thái; 500 cập nhật PR của OpenClaw nhưng tỷ lệ hợp nhất chỉ 32%, khủng hoảng review trở nên rõ ràng.

---

## 3. Định vị của OpenClaw trong Hệ sinh thái

| Chiều | Hiệu suất của OpenClaw | So sánh Hệ sinh thái |
|:---|:---|:---|
| **Định vị Quy mô** | Dẫn đầu tuyệt đối: 500 Vấn đề/500 PR cập nhật hàng ngày = NanoBot × 10 | Quy mô vượt xa các đối thủ cùng loại, gần với dự án cấp cơ sở hạ tầng |
| **Lộ trình Kỹ thuật** | **Kiến trúc tích hợp "kênh toàn diện + đa mô hình + hộp cát tích hợp"**, hỗ trợ gốc cho các mô hình như Codex/Moonshot/Kimi | Hermes tập trung vào TUI/suy luận riêng tư; ZeroClaw đi theo hướng plugin hóa microkernel; NanoClaw tập trung vào hệ sinh thái Claude |
| **Mô hình Cộng đồng** | **Loại được đám đông đóng góp**：338 PR chờ hợp nhất cho thấy ngưỡng tham gia thấp, đóng góp bên ngoài sôi động | Moltis/IronClaw do đội ngũ cốt lõi chủ trì; LobsterAI được doanh nghiệp bảo trợ |
| **Lợi thế Cốt lõi** | ① Phạm vi kênh bao phủ rộng nhất (Telegram/Discord/Web/CLI ma trận đầy đủ)<br>② Hệ sinh thái mô hình phong phú nhất (OpenRouter + chế độ trực tiếp kép)<br>③ Sẵn sàng triển khai doanh nghiệp (chính sách phê duyệt app-server Codex, tích hợp OAuth) | So với hệ thống bộ nhớ của Hermes, hộp cát an toàn WASM của ZeroClaw, kiến trúc giải trừ v2 của NanoClaw, OpenClaw vượt trội ở **chiều rộng tích hợp và sẵn sàng sử dụng ngay** |
| **Hạn chế Tương đối** | Băng thông review không đủ (tỷ lệ hợp nhất 162/500); Khách hàng máy tính để bàn Linux/Windows còn thiếu từ lâu (vấn đề #75 88 bình luận chưa được giải quyết); Bẫy UX "cấu hình là hỗ trợ" cho mô hình mới (#37623) | Moltis xóa lỗi trong ngày, tỷ lệ hợp nhất 30/51 của NanoBot đều tốt hơn OpenClaw |

**Phân định Vị trí Hệ sinh thái**：OpenClaw là **cơ sở hạ tầng "ước số chung lớn nhất"** — không phải tiên tiến nhất về mặt kỹ thuật, nhưng là lựa chọn mặc định bao phủ nhiều kịch bản nhất, dễ bắt đầu nhất, tương tự vị trí của Kubernetes trong điều phối container.

---

## 4. Hướng Công nghệ được Quan tâm Chung

| Hướng Công nghệ | Dự án Liên quan | Yêu cầu Cụ thể và Tiến độ |
|:---|:---|:---|
| **Tích hợp gốc Giao thức MCP** | NanoBot ✅、NanoClaw ✅、Moltis ✅、Hermes (quan sát)、OpenClaw (một phần) | NanoBot đã triển khai ImageContent/cách ly theo cuộc trò chuyện/chịu lỗi kết nối; Moltis hoàn thành truyền SSE còn sót lại; **OpenClaw chưa hỗ trợ gốc**，#34097 chỉ có 6 bình luận, có rủi ro về vị trí hệ sinh thái |
| **Bộ nhớ Dài hạn/Trạng thái Liên-Phiên** | Hermes (#6323, #13236)、ZeroClaw (#5849 Chế độ Dream)、OpenClaw (lưu trữ phiên ACP #67280) | Hermes có tiếng nói mạnh mẽ nhất từ cộng đồng (👍21); ZeroClaw đề xuất ẩn dụ "ngủ-suy ngẫm"; OpenClaw chỉ lưu trữ phiên, không có kiến trúc bộ nhớ liên-phiên |
| **Toàn bộ Chuỗi Tương tác Giọng nói** | ZeroClaw (PR song công #5942)、NanoClaw (chuyển giọng nói Whisper cục bộ #1876)、LobsterAI (mở rộng TTS)、Moltis (kênh voice) | Từ "Bot văn bản" chuyển sang "Trợ lý giọng nói" rõ ràng; phân hóa lộ trình cục bộ hóa (Whisper.cpp) vs đám mây (Gemini STT) |
| **Độ bền Môi trường Sản xuất** | **Tất cả các dự án đều tập trung** | OpenClaw (chấm dứt tiến trình SIGKILL/cơ chế thử lại)、NanoBot (mô hình dự phòng/giới hạn hàng đợi)、Hermes (OOM TUI)、ZeroClaw (bảo vệ SSRF/cô lập biến môi trường) |
| **Bảo mật và Tuân thủ Doanh nghiệp** | IronClaw (Tự phục vụ Secrets #2754)、ZeroClaw (Plugin WASM #5912)、NanoClaw (phê duyệt chủ sở hữu #1877)、OpenClaw (chiến lược phê duyệt Codex #68721) | Nhu cầu nâng cấp từ "chức năng khả dụng" lên "có thể kiểm toán được", TEE/hộp cát/chuỗi phê duyệt trở thành tiêu chuẩn |
| **Di chuyển Thương hiệu/Nâng cấp Cấu hình Mượt mà** | CoPaw/QwenPaw (#3356)、NanoClaw (v1→v2 #1869) | Đau đớn phổ biến trong giai đoạn trưởng thành của dự án, chuỗi truyền bá cấu hình, công cụ di chuyển dữ liệu trở thành cơ sở hạ tầng ẩn |

---

## 5. Phân tích Định vị Khác biệt

| Dự án | Hình mẫu Người dùng Cốt lõi | Đặc điểm Kiến trúc Kỹ thuật | Trọng tâm Chức năng | Khác biệt Chính |
|:---|:---|:---|:---|:---|
| **OpenClaw** | Nhà phát triển/Đội ngũ Kỹ thuật, người có nhu cầu triển khai đa nền tảng | Node.js đơn khối, gateway tích hợp + Web UI | Tổng hợp đa kênh, định tuyến đa mô hình, tích hợp Codex | **"Nhiều kết nối nhất"**： Bao phủ tổ hợp bùng nổ kênh × mô hình |
| **NanoBot** | Người dùng cộng đồng Trung Quốc, người dùng IM nặng, quản trị viên nhóm doanh nghiệp | Python không đồng bộ, chế độ bộ điều hợp kênh | Tích hợp sâu WeChat/QQ/Teams, đa người thuê MCP | **"Giải pháp tốt nhất cho hệ sinh thái IM Trung Quốc"** |
| **Hermes Agent** | Người dùng nhạy cảm về quyền riêng tư, người yêu thích mô hình cục bộ, người dùng Nix | Rust + Node.js hỗn hợp, ưu tiên TUI | llama.cpp cục bộ, suy luận riêng tư (TDX), hệ thống bộ nhớ | **"Công cụ của chuyên gia ưu tiên quyền riêng tư"** |
| **Moltis** | Người dùng công cụ hiệu quả, người tiêu dùng thị trường kỹ năng | Nhịp điệu xây dựng phát hành hàng ngày, đóng gói hộp cát | 101 kỹ năng cài sẵn, vòng lặp tác nhân tự cải tiến, theo kịp Kimi nhanh chóng | **"Tốc độ lặp lại nhanh nhất + ngưỡng bắt đầu thấp nhất"** |
| **ZeroClaw** | Nhà phát triển Rust, tự lưu trữ doanh nghiệp, người xây dựng hệ sinh thái plugin | Microkernel + Plugin WASM (Extism), điều khiển bằng schema | Hộp cát an toàn, song công giọng nói, bộ nhớ backend Postgres | **"Nền tảng có thể mở rộng kiến trúc tiên tiến nhất"** |
| **IronClaw** | Người dùng hệ sinh thái NEAR Blockchain, người dùng dịch vụ đám mây TEE | Kiến trúc Engine V2, thời gian chạy WASM | Đăng ký kỹ năng trên chuỗi (ClawHub), truyền chứng chỉ TEE | **"Cơ sở hạ tầng AI gốc Web3"** |
| **NanoClaw** | Người dùng sâu hệ sinh thái Claude, người yêu thích Homelab/tự lưu trữ | V2 phân lớp: cầu nối/bộ định tuyến/kỹ năng | Tích hợp liền mạch Claude Code, Ollama cục bộ, Matrix E2EE | **"Giải pháp tự lưu trữ tốt nhất thay thế Claude chính thức"** |
| **LobsterAI** | Người dùng nội bộ NetEase Youdao, kịch bản máy tính để bàn doanh nghiệp Trung Quốc | Electron + React, lưu trữ cục bộ SQLite | Tích hợp DingTalk/POPO, tác vụ hẹn giờ, hồ sơ tác nhân | **"Tích hợp máy tính để bàn doanh nghiệp Trung Quốc trưởng thành nhất"** |
| **CoPaw/QwenPaw** | Người dùng hệ sinh thái Alibaba Cloud, kịch bản hợp tác đa tác nhân | Hệ thống plugin + Chế độ Kế hoạch | Sao lưu và khôi phục, heartbeat đa tác nhân, SDK ACP | **"Cổng vào hệ sinh thái dòng Alibaba Cloud"** |

---

## 6. Phân tầng Nóng cộng đồng và Độ trưởng thành

```
【Giai đoạn Lặp lại Nhanh】 PR trung bình hàng ngày > 30, tập trung vào mở rộng chức năng
├── OpenClaw (500 PR/ngày, nhưng khủng hoảng review)
├── CoPaw/QwenPaw (50 PR, đang đau đớn di chuyển thương hiệu)
└── IronClaw (50 PR, tái cấu trúc kiến trúc Engine V2)

【Giai đoạn Củng cố Chất lượng】 Tỷ lệ hợp nhất cao, ưu tiên độ ổn định
├── Moltis (100% tỷ lệ hợp nhất, lỗi xóa trong ngày) ⭐ Tiêu chuẩn
├── NanoBot (59% tỷ lệ hợp nhất, MCP/hiệu suất song song)
└── ZeroClaw (42% tỷ lệ hợp nhất, quản trị thúc đẩy bằng RFC)

【Giai đoạn Xóa Nợ Kỹ thuật】 Nâng cấp kiến trúc kèm theo hồi quy
├── NanoClaw (kết thúc v2, điểm mù truyền bá cấu hình #1870)
├── Hermes (xây dựng hệ thống bộ nhớ, Zig không liên quan)
└── NullClaw (đau đớn khi di chuyển Zig 0.16, hồi quy I/O mạng) 🔴

【Giai đoạn Ngủ đông/Bảo trì】
├── TinyClaw (1 PR/ngày, chỉ bảo trì)
└── ZeptoClaw (không hoạt động)

【Giai đoạn Bảo trợ Doanh nghiệp】
└── LobsterAI (NetEase Youdao, đào sâu trải nghiệm máy tính để bàn, tỷ lệ hợp nhất 56%)
```

**Phát hiện Chính**：Mô hình "xây dựng hàng ngày + xóa lỗi trong ngày" của Moltis chứng minh rằng **phát hành tần suất cao và chất lượng cao có thể đạt được**; "lưu lượng cao, tỷ lệ hợp nhất thấp" của OpenClaw tiết lộ rằng **nút thắt cổ chai quản trị là thách thức chung của hệ sinh thái** khi mở rộng quy mô.

---

## 7. Tín hiệu Xu hướng Đáng chú ý

| Xu hướng | Nguồn Tín hiệu | Giá trị cho Nhà phát triển |
|:---|:---|:---|
| **MCP trở thành khoảnh khắc "USB-C"** | NanoBot/Moltis/NanoClaw tích hợp toàn diện, OpenClaw tụt hậu | Tiêu chuẩn tích hợp công cụ thống nhất giảm thiểu phân mảnh hệ sinh thái, **dự án chưa tích hợp MCP sẽ bị loại trừ về khả năng tương thích** |
| **Bẫy UX "cấu hình là hỗ trợ"** | OpenClaw #37623 (GPT-5.4), PicoClaw #2598 (WebUI không hiển thị) | Ra mắt mô hình/chức năng mới cần **lớp xác thực thời gian chạy**, không chỉ tuyên bố trên lớp cấu hình, để tránh mất lòng tin của người dùng |
| **Tương tác giọng nói từ "chức năng bổ sung" thành "lối vào cốt lõi"** | PR song công ZeroClaw, giải pháp Whisper cục bộ NanoClaw, STT gốc Gemini | **Độ trễ/ngắt/cục bộ hóa tương tác giọng nói** sẽ trở thành trọng tâm cạnh tranh trải nghiệm vòng tiếp theo, đề xuất chuẩn bị trước kiến trúc streaming + VAD |
| **Sự trỗi dậy của ẩn dụ "Giấc ngủ/Suy ngẫm của Tác nhân"** | ZeroClaw #5849 Chế độ Dream, #803 vòng lặp tự cải tiến Moltis | Người dùng không hài lòng với "phản hồi tức thời", mong muốn **học hỏi liên tục, đồng hành nhân cách hóa**, hệ thống bộ nhớ cần nâng cấp từ "lưu trữ" lên "tích hợp" |
| **Bảo mật Doanh nghiệp từ "tùy chọn" thành "chặn"** | Tự phục vụ Secrets IronClaw, hộp cát WASM ZeroClaw, chiến lược phê duyệt OpenClaw | **SSRF/tiêm lệnh/rò rỉ biến môi trường** trở thành đường biên đỏ cho triển khai sản xuất, thiết kế bảo mật cần được đưa lên giai đoạn kiến trúc |
| **Băng thông Review = Trần nhà của Dự án** | OpenClaw 338 chờ hợp nhất, PicoClaw 106 chờ hợp nhất | Đề xuất **tự động hóa hàng đợi hợp nhất** (IronClaw #2719), **phân loại PR theo thẻ**, quản trị hai lớp "đội ngũ cốt lõi + người bảo trì được ủy quyền" |
| **ARM64/Nhúng trở thành chiến trường mới** | Vấn đề Pi 5 NullClaw, lỗi cập nhật aarch64 ZeroClaw, RPi Zero W PicoClaw | Nhu cầu **triển khai AI biên** là có thật, nhưng đầu tư vào ma trận kiểm tra biên dịch chéo còn thiếu, tồn tại mô hình nợ kỹ thuật "hỗ trợ trước, sửa sau" |

---

*Báo cáo này được tạo dựa trên dữ liệu công khai của GitHub từ các dự án vào ngày 2026-04-21, phù hợp để đánh giá lựa chọn kỹ thuật, chiến lược đóng góp và ưu tiên đầu tư hệ sinh thái.*

---

## Báo cáo Chi tiết Dự án Cùng Cuộc Đua

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Nhật báo Động thái Dự án NanoBot | 2026-04-21

> Địa chỉ Dự án: [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot) | Chu kỳ Dữ liệu: 2026-04-20 đến 2026-04-21

---

## 1. Tóm tắt Ngày

NanoBot hôm nay thể hiện **xu hướng phát triển với cường độ cao**: 51 PR được cập nhật trong 24 giờ (30 đã hợp nhất/đóng), 12 Vấn đề được cập nhật (7 đóng), cho thấy thông lượng mã đáng kể. Các tiến triển cốt lõi tập trung vào ba khía cạnh: **tăng cường hiệu suất và độ ổn định của Tác nhân** (các PR tối ưu hóa của mohamed-elkholy95 đã được tách và hợp nhất), **hoàn thiện hệ sinh thái MCP** (hỗ trợ ImageContent, cách ly theo cuộc trò chuyện, chịu lỗi kết nối) và **sửa lỗi trải nghiệm người dùng** (giữ lại ngữ cảnh `/stop`, cắt bớt tin nhắn dài Telegram). Nhu cầu của cộng đồng về tích hợp chính thức OpenWebUI, truyền dữ liệu QQ, cơ chế tiếp quản thủ công đang ngày càng tăng, nhưng chưa nằm trong lịch trình phát triển. Nhìn chung, sức khỏe dự án tốt, tốc độ phản hồi bảo trì nhanh, nhưng sự tồn đọng của các yêu cầu chức năng dài hạn cần được chú ý.

---

## 2. Phát hành Phiên bản

**Không có phiên bản mới nào được phát hành**

> Phiên bản mới nhất vẫn là phiên bản lịch sử, không có bản phát hành nào được thực hiện hôm nay. Nhiều bản sửa lỗi quan trọng (như giữ lại ngữ cảnh `/stop`, sửa lỗi Anthropic prefill) đã được hợp nhất vào nhánh chính, đề xuất theo dõi các bản vá lỗi sau này.

---

## 3. Tiến độ Dự án

### 🔀 PR Quan trọng Đã Hợp nhất/Đóng Hôm Nay (Chọn lọc 8 mục)

| PR | Tác giả | Đóng góp Cốt lõi | Giá trị Thúc đẩy Dự án |
|:---|:---|:---|:---|
| [#3299](https://github.com/HKUDS/nanobot/pull/3299) | hussein1362 | **Giữ lại một phần ngữ cảnh cho `/stop`** — Sửa #2966, giữ lại kết quả công cụ đã hoàn thành và tin nhắn trợ lý khi hủy tác vụ, tránh người dùng phải làm lại từ đầu | ⭐⭐⭐ Cao — Giải quyết điểm đau UX cốt lõi, giảm sự thất vọng của người dùng |
| [#3297](https://github.com/HKUDS/nanobot/pull/3297) | hussein1362 | **Tách bỏ tin nhắn trợ lý cuối của Anthropic** — Ngăn lỗi 400 prefill khi lịch sử hội thoại kết thúc bằng lượt trợ lý | ⭐⭐⭐ Cao — Loại bỏ lỗi hệ thống của nhà cung cấp Anthropic |
| [#2417](https://github.com/HKUDS/nanobot/pull/2417) | conversun | **Chuyển đổi lỗi mô hình tự động** — Sau khi thử lại mô hình chính hết hạn, thử các mô hình dự phòng theo thứ tự danh sách (trong các tình huống 429/500/502/503) | ⭐⭐⭐ Cao — Tính năng quan trọng cho độ tin cậy môi trường sản xuất |
| [#2523](https://github.com/HKUDS/nanobot/pull/2523) | conversun | **Cấm ủy quyền nhiệm vụ yêu cầu MCP cho các đại lý con** — SpawnTool động chèn tên công cụ MCP vào mô tả, để LLM biết rằng đại lý con không có khả năng MCP | ⭐⭐⭐ Cao — Loại bỏ lỗi ngầm, cải thiện hiệu quả gỡ lỗi |
| [#2416](https://github.com/HKUDS/nanobot/pull/2416) | conversun | **Hỗ trợ MCP ImageContent** — Xử lý đúng hình ảnh được mã hóa base64 (ví dụ: mã QR đăng nhập), thay thế đầu ra bị hỏng `str(block)` trước đó | ⭐⭐⭐ Cao — Mở khóa các kịch bản công cụ loại hình ảnh MCP |
| [#2424](https://github.com/HKUDS/nanobot/pull/2424) | conversun | **Cách ly MCP theo cuộc trò chuyện (`allowedChats`)** — Hỗ trợ ràng buộc các phiên bản máy chủ MCP khác nhau cho các nhóm khác nhau (ví dụ: nhiều tài khoản Xiaohongshu) | ⭐⭐⭐ Cao — Khả năng cốt lõi cho các kịch bản thương mại đa người thuê/đa tài khoản |
| [#3240](https://github.com/HKUDS/nanobot/pull/3240) | mohamed-elkholy95 | **Tăng cường bảo vệ bỏ qua tiện ích mở rộng Shell** — Sửa lỗi bỏ qua biểu thức chính quy `_guard_command` trong #2989 (các kỹ thuật như `$(echo tee)`) | ⭐⭐⭐ Cao — Phòng thủ chiều sâu về bảo mật |
| [#3158](https://github.com/HKUDS/nanobot/pull/3158) và các loạt tách biệt | mohamed-elkholy95 | **Tối ưu hóa toàn diện hiệu suất Tác nhân** — Sau khi tách thành #3180-#3184, giới hạn hàng đợi, xử lý hàng loạt ghi lịch sử, bộ nhớ đệm schema công cụ, ưu tiên luồng token đầu tiên đã được hợp nhất | ⭐⭐⭐⭐⭐ Cực kỳ cao — Phân tích cấp độ mã khoảng 66 nghìn dòng, cải thiện có hệ thống tốc độ phản hồi và tính chính xác |

**Đánh giá Tổng thể**：Nội dung hợp nhất hôm nay bao gồm bốn hướng chiến lược chính: **Độ tin cậy (dự phòng/chịu lỗi), Bảo mật (tăng cường bảo vệ chống tiêm lệnh), Hiệu suất (I/O và tối ưu hóa luồng) và Độ trưởng thành của Hệ sinh thái MCP**. Nợ kỹ thuật của dự án đã giảm đáng kể, khả năng sẵn sàng cho sản xuất đã được nâng cao một bậc.

---

## 4. Điểm nóng Cộng đồng

### 🔥 Các Vấn đề Thảo luận Sôi nổi nhất

| Hạng | Vấn đề/PR | Số lượt Bình luận | Phân tích Độ nóng |
|:---|:---|:---|:---|
| 1 | [#3143](https://github.com/HKUDS/nanobot/issues/3143) Lỗi "tham số tin nhắn LLM không hợp lệ" | **9 bình luận** | **Sự cố sản xuất thường xuyên** — Kênh Feishu kích hoạt lỗi Token khi hợp nhất, tiktoken tính toán vượt quá 71835/65536. Người dùng phản hồi "tần suất xuất hiện khá cao", nhưng hôm nay đã đóng, cần xác nhận có sửa triệt để hay chỉ đóng theo trường hợp cá biệt |
| 2 | [#3326](https://github.com/HKUDS/nanobot/issues/3326) Hỗ trợ thông báo gốc MCP (scheduled-reminder) | **3 bình luận** | **Yêu cầu mở rộng kiến trúc** — Người dùng muốn NanoBot làm máy khách MCP nhận đẩy chủ động từ máy chủ, thay vì chỉ thăm dò. Liên quan đến mở rộng lớp giao thức, hôm nay đã đóng, có thể do phạm vi quá lớn hoặc đã có giải pháp thay thế |
| 3 | [#2389](https://github.com/HKUDS/nanobot/issues/2389) Hỗ trợ kênh OpenWebUI chính thức | **3 bình luận** | **Tranh giành vị trí hệ sinh thái** — Người dùng muốn OpenWebUI làm giao diện trò chuyện của NanoBot, phản ánh kỳ vọng của cộng đồng về định vị "cổng AI thống nhất" |

**Thấu hiểu Yêu cầu**：
- **#3143**：Mâu thuẫn cốt lõi là **thích ứng động với giới hạn tính toán Token và kênh** — khoảng cách giữa giới hạn 65536 và ước tính của tiktoken đã phóng đại trong vòng lặp hợp nhất.
- **#2389**：Nhận thức thương hiệu của NanoBot là "bộ tổng hợp kênh" đã hình thành, người dùng không muốn chọn một trong hai giữa OpenWebUI và NanoBot, mà muốn **NanoBot nuốt chửng lối vào lưu lượng truy cập của OpenWebUI**.

---

## 5. Lỗi và Độ ổn định

| Mức độ Nghiêm trọng | Vấn đề | Trạng thái | PR Sửa lỗi |
|:---|:---|:---|:---|
| 🔴 **Cao** | [#3328](https://github.com/HKUDS/nanobot/issues/3328) | **MỞ** | **DeepSeek "không thể giải mã"** — Sau khi nâng cấp từ 0.1.5→0.1.5.post1, toàn bộ tin nhắn Telegram bị lỗi, quay lại cấu hình không hiệu quả | ❌ **Không có** — Mới tạo hôm nay, cần chú ý khẩn cấp |
| 🔴 **Cao** | [#3324](https://github.com/HKUDS/nanobot/issues/3324) | **MỞ** | **Windows WinError 193** — Lệnh `npx` trong tích hợp chrome-devtools-mcp bị nhận dạng là ứng dụng Win32 không hợp lệ, nghi ngờ vấn đề đường dẫn/kiến trúc Node | ❌ **Không có** — Đánh dấu `good first issue` |
| 🟡 **Trung bình** | [#2921](https://github.com/HKUDS/nanobot/issues/2921) | **MỞ** | **Cấu hình thông báo khởi động lại MS Teams được hiển thị nhưng chưa thực hiện** — Trường `restart_notify_*` tồn tại nhưng logic thiếu, gây hiểu lầm cấu hình | ❌ **Không có** — Tạo từ 4-8, đã tồn đọng 12 ngày |
| 🟡 **Trung bình** | [#3143](https://github.com/HKUDS/nanobot/issues/3143) | ĐÃ ĐÓNG | Tham số tin nhắn LLM bất hợp pháp (vượt giới hạn Token) | Không liên kết rõ ràng với PR nào |
| 🟢 **Thấp** | [#3315](https://github.com/HKUDS/nanobot/issues/3315) | ĐÃ ĐÓNG | Tin nhắn Telegram quá dài dẫn đến gửi lỗi | ✅ Đã sửa |
| 🟢 **Thấp** | [#3073](https://github.com/HKUDS/nanobot/issues/3073) | ĐÃ ĐÓNG | Tác nhân lặp vô hạn `read_file` trên history.jsonl | ✅ Đã sửa |
| 🟢 **Thấp** | [#3319](https://github.com/HKUDS/nanobot/issues/3319) | ĐÃ ĐÓNG | Mẹo công cụ Cron job bị rò rỉ ra kênh người dùng | ✅ Đã sửa (liên quan đến #3299) |

**Cảnh báo Độ ổn định**：**Lỗi phản giải mã DeepSeek #3328** là hồi quy mới được báo cáo hôm nay, ảnh hưởng đến toàn bộ tin nhắn của người dùng đã nâng cấp, đề xuất người bảo trì ưu tiên tái hiện. Sự cố tích hợp MCP trên Windows (#3324) cản trở trải nghiệm của nhà phát triển, nhưng người đóng góp cộng đồng có thể can thiệp.

---

## 6. Yêu cầu Chức năng và Tín hiệu Lộ trình

| Yêu cầu Chức năng | Vấn đề | Cường độ Tín hiệu | Đánh giá Khả năng Bao gồm trong Phiên bản Tiếp theo |
|:---|:---|:---|:---|
| **Kênh OpenWebUI Chính thức** | [#2389](https://github.com/HKUDS/nanobot/issues/2389) | 🔶🔶🔶 Mạnh | Trung bình — Về mặt kiến trúc, NanoBot là "backend kênh", OpenWebUI là "giao diện người dùng", có sự căng thẳng về định vị của cả hai. Nếu thực hiện, có thể là chế độ bộ điều hợp thay vì kênh gốc |
| **Hỗ trợ Truyền dữ liệu QQ** | [#3333](https://github.com/HKUDS/nanobot/issues/3333) | 🔶🔶 Trung bình | **Cao** — Đã đóng nhưng yêu cầu rõ ràng ("dễ bị kênh chặn"), người bảo trì kênh QQ có thể nhanh chóng theo dõi, chi phí thực hiện kỹ thuật thấp |
| **Tiếp quản Thủ công / Cơ chế Tạm dừng Bot** | [#3322](https://github.com/HKUDS/nanobot/issues/3322) | 🔶🔶 Trung bình | Trung bình — Điểm đau thực tế trong kịch bản WhatsApp (xung đột giữa nhân viên hỗ trợ và Bot), nhưng liên quan đến việc sửa đổi máy trạng thái hội thoại, độ phức tạp trung bình |
| **Nhận Thông báo Gốc MCP** | [#3326](https://github.com/HKUDS/nanobot/issues/3326) | 🔶 Yếu | Thấp — Đã đóng, có thể nằm ngoài phạm vi thiết kế máy khách MCP hiện tại, yêu cầu hỗ trợ cấp giao thức |

**Phán đoán Lộ trình**：Phiên bản tiếp theo rất có thể sẽ tập trung vào **hoàn thiện hệ sinh thái MCP** (PR của conversun đã tạo nền tảng) và **hiệu suất ổn định**. Các kênh mới/mô hình tương tác mới hướng tới người dùng có thể tạm dừng.

---

## 7. Tóm tắt Phản hồi Người dùng

### 😫 Điểm Đau Cốt lõi

> *"Hiện tại các lỗi này xuất hiện khá thường xuyên"* — Tác giả bigsinger của [#3143](https://github.com/HKUDS/nanobot/issues/3143), lỗi tham số LLM bất hợp pháp

> *"Đôi khi AI chỉ đi đường vòng, cần chúng tôi chỉ hướng, lúc này việc mất ngữ cảnh của toàn bộ lượt đi là một tổn thất nghiêm trọng"* — Tác giả Dasffafa của [#2966](https://github.com/HKUDS/nanobot/issues/2966), mất ngữ cảnh khi `/stop` ( **Đã sửa** ✅)

> *"QQbot dường như đều không theo luồng, dễ bị kênh chặn"* — Tác giả Chincherry93 của [#3333](https://github.com/HKUDS/nanobot/issues/3333), lo lắng về tuân thủ nền tảng

> *"Không có cách nào đáng tin cậy để tạm dừng bot cho một cuộc trò chuyện cụ thể mà không làm gián đoạn toàn bộ gateway"* — Tác giả CHM5 của [#3322](https://github.com/HKUDS/nanobot/issues/3322), tình huống khó xử khi trộn lẫn dịch vụ hỗ trợ của nhân viên

### 😊 Phản hồi Tích cực (Ngụ ý)

- Việc sửa lỗi giữ lại ngữ cảnh cho `/stop` (#3299) được người dùng chủ động nhận là "Tôi sẽ thử gửi một pr để sửa lỗi này" (#2966), cho thấy ý muốn tham gia mạnh mẽ của cộng đồng.
- PR khổng lồ #3158 của mohamed-elkholy95 được người bảo trì kiên nhẫn tách và xem xét, phản ánh sự quản trị dự án trưởng thành.

### 💡 Thấu hiểu Kịch bản Sử dụng

| Kịch bản | Nguồn |
|:---|:---|
| **Nhóm doanh nghiệp Feishu + quy trình làm việc Token lớn** | #3143 |
| **Trộn lẫn dịch vụ hỗ trợ của nhân viên WhatsApp** | #3322 |
| **Cách ly theo nhóm cho nhiều tài khoản Xiaohongshu** | #2424 |
| **Phát triển MCP cục bộ trên Windows** | #3324 |
| **Củng cố hành vi sau phản hồi "Cảm ơn"** | #3339 (PR) |

---

## 8. Tồn đọng Cần Xử lý

| Hạng mục Tồn đọng | Thời gian Tạo | Cập nhật Cuối cùng | Mức độ Rủi ro | Nhắc nhở |
|:---|:---|:---|:---|:---|
| [#2389](https://github.com/HKUDS/nanobot/issues/2389) Kênh OpenWebUI Chính thức | 2026-03-23 | 2026-04-20 | 🟡 Trung bình | **29 ngày không có kết luận**, cộng đồng liên tục hỏi, đề nghị người bảo trì rõ ràng từ chối hoặc đưa vào Backlog |
| [#2921](https://github.com/HKUDS/nanobot/issues/2921) Cấu hình thông báo khởi động lại MS Teams bị lộ | 2026-04-08 | 2026-04-20 | 🟡 Trung bình | **12 ngày không phản hồi**, sự không nhất quán giữa cấu hình và triển khai là nợ kỹ thuật, cần xóa trường hoặc hoàn thiện logic |
| [#3202](https://github.com/HKUDS/nanobot/pull/3202) Giới hạn hàng đợi đầu vào (phiên bản cải tiến) | 2026-04-16 | 2026-04-20 | 🟢 Thấp | Cải tiến dựa trên #3180 đã đóng, chờ xem xét, liên quan đến độ ổn định cốt lõi |
| [#3204](https://github.com/HKUDS/nanobot/pull/3204) Đo thời gian tùy chọn cho ProfilingHook | 2026-04-16 | 2026-04-20 | 🟢 Thấp | Cơ sở hạ tầng chẩn đoán hiệu suất, công cụ trải nghiệm nhà phát triển |

**Đề xuất Hành động cho Người bảo trì**：Ưu tiên phản hồi **hồi quy DeepSeek #3328** (mới tạo mức độ ưu tiên cao) và **quyết định OpenWebUI #2389** (treo dài hạn tiêu tốn sự kiên nhẫn của cộng đồng).

---

> 📊 **Cơ sở Tạo Báo cáo Hàng ngày**: Siêu dữ liệu GitHub Issues/PR, nhãn, chuỗi thời gian, phân tích tình cảm bình luận và tóm tắt thay đổi mã. Không bao gồm thảo luận riêng tư hoặc chi tiết trạng thái CI.
> 
> 🔗 **Trang chủ Dự án**: [https://github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Nhật báo Động thái Dự án Hermes Agent | 2026-04-21

---

## 1. Tóm tắt Ngày

Hermes Agent hôm nay duy trì **mức độ hoạt động cao**: 50 Vấn đề và 50 PR được cập nhật trong 24 giờ, mật độ thảo luận cộng đồng đáng kể. Các tiến triển cốt lõi tập trung vào **tăng cường độ ổn định TUI** (sửa lỗi Node V8 OOM), **an toàn đồng thời của máy chủ API** (khử trùng yêu cầu bất biến) và **mở rộng cơ sở hạ tầng AI** (suy luận riêng tư NEAR AI/Phala AI, STT đa phương thức gốc Gemini). Không có phiên bản mới nào được phát hành, nhưng 18 PR đã được hợp nhất/đóng, 32 đang chờ review, cho thấy dự án đang tiến triển vững chắc, với quản lý bộ nhớ và an toàn đồng thời là trọng tâm dọn dẹp nợ kỹ thuật gần đây.

---

## 2. Phát hành Phiên bản

**Không có phiên bản mới nào được phát hành** (v0.9.0 vẫn là phiên bản mới nhất)

---

## 3. Tiến độ Dự án

### Các PR Chính Đã Hợp nhất/Đóng

| PR | Tác giả | Đóng góp Cốt lõi | Liên kết |
|:---|:---|:---|:---|
| **#13231** | OutThisLife | **Ba lần sửa lỗi ổn định TUI**：Giải quyết OOM Node V8 cho các phiên dài hạn, rò rỉ bộ nhớ GatewayClient, các vấn đề hiệu suất khi thay đổi kích thước đầu cuối | [PR #13231](https://github.com/NousResearch/hermes-agent/pull/13231) |
| **#13119** | pc418 | **Sửa lỗi ngắt luồng Anthropic**：Khi luồng thất bại, trả về stub định dạng Anthropic chính xác thay vì định dạng OpenAI được mã hóa cứng | [PR #13119](https://github.com/NousResearch/hermes-agent/pull/13119) |
| **#13233** | rodrigoeqnit | Tái cấu trúc PR (đã đóng, chưa hợp nhất) | [PR #13233](https://github.com/NousResearch/hermes-agent/pull/13233) |

### Các PR Giá trị Cao Đang Chờ Review

| PR | Tác giả | Hướng Kỹ thuật | Liên kết |
|:---|:---|:---|:---|
| **#12201** | amiller | **Suy luận riêng tư NEAR AI + Phala AI**：Chứng minh từ xa Intel TDX + E2EE, cơ sở hạ tầng đám mây tin cậy để suy luận | [PR #12201](https://github.com/NousResearch/hermes-agent/pull/12201) |
| **#13239** | Yukipukii1 | **An toàn đồng thời máy chủ API**：Khử trùng khóa bất biến cho các yêu cầu đồng thời, ngăn chặn thực thi lặp lại | [PR #13239](https://github.com/NousResearch/hermes-agent/pull/13239) |
| **#13174** | Twanislas | **STT đa phương thức gốc Gemini**：Phân tích cảnh âm thanh vượt trội Whisper, hỗ trợ các sự kiện âm thanh không phải giọng nói | [PR #13174](https://github.com/NousResearch/hermes-agent/pull/13174) |
| **#13238** | teknium1 | **Lọc mô hình OpenRouter**：Ẩn các mô hình không hỗ trợ gọi công cụ, giảm lỗi thời gian chạy | [PR #13238](https://github.com/NousResearch/hermes-agent/pull/13238) |
| **#13236** | rfpassos | **Hệ thống bộ nhớ hermes_mem**：Tài liệu thiết kế hoạt động gốc + bản nháp SQLite/FTS5 | [PR #13236](https://github.com/NousResearch/hermes-agent/pull/13236) |

**Đánh giá Tổng thể**：Hôm nay, dự án đồng thời thúc đẩy hai tuyến đường chính là **kỹ thuật độ tin cậy** (bộ nhớ, đồng thời, khả năng tương thích định dạng) và **đa dạng hóa cơ sở hạ tầng AI** (suy luận riêng tư, đầu vào đa phương thức), thể hiện chiều sâu kỹ thuật đáng kể.

---

## 4. Điểm nóng Cộng đồng

### 🔥 Mức độ Thảo luận Cao nhất

| Vấn đề/PR | Số lượt Bình luận | Yêu cầu Cốt lõi | Liên kết |
|:---|:---|:---|:---|
| **#7893** [ĐÃ ĐÓNG] Xung đột xác thực 400 Gemini Provider gốc | **17** | Đồng thời tồn tại khóa `GEMINI_API_KEY` và chứng chỉ Vertex AI gây ra lỗi "Multiple authentication credentials", cần làm rõ ưu tiên chứng chỉ | [Issue #7893](https://github.com/NousResearch/hermes-agent/issues/7893) |
| **#6323** [MỞ] Tích hợp bộ nhớ ngoài mempalace | **11** / 👍21 | Cộng đồng có nhu cầu mạnh mẽ về **bộ nhớ bền vững, có thể truy vấn, liên-phiên**, giới hạn cửa sổ ngữ cảnh hiện tại cản trở các nhiệm vụ dài hạn | [Issue #6323](https://github.com/NousResearch/hermes-agent/issues/6323) |
| **#9782** [ĐÃ ĐÓNG] Hỗ trợ nix-darwin | **7** | Nhóm người dùng macOS ngày càng tăng, phạm vi hệ sinh thái Nix cần mở rộng từ NixOS sang nix-darwin | [Issue #9782](https://github.com/NousResearch/hermes-agent/issues/9782) |
| **#12242** [ĐÃ ĐÓNG] Lỗi cắt JSON kết quả StepFun API | **7** | `context_compressor.py` cắt bừa bãi làm hỏng cấu trúc JSON, cần **cắt cấu trúc hóa** hoặc **xác minh tuần tự hóa sớm** | [Issue #12242](https://github.com/NousResearch/hermes-agent/issues/12242) |

### Phân tích Yêu cầu

- **Độ phức tạp Xác thực** (#7893, #12639): Nhiều lớp proxy Google/Vertex AI/OpenRouter gây xung đột chứng chỉ, người dùng kêu gọi **Provider Google gốc** bỏ qua trung gian.
- **Cơ sở hạ tầng Bộ nhớ** (#6323, #13236): Cộng đồng đã đạt được sự đồng thuận—Hermes cần một hệ thống bộ nhớ gốc, với lộ trình song song cho tích hợp mempalace và tự phát triển hermes_mem.
- **Trải nghiệm Nhà phát triển** (#9782, #5346, #12894): Chi phí ma sát của CLI/TUI/đường dẫn cài đặt liên tục được đề cập.

---

## 5. Lỗi và Độ ổn định

| Ưu tiên | Vấn đề | Mô tả | Trạng thái | PR Sửa lỗi |
|:---|:---|:---|:---|:---|
| 🔴 **Quan trọng** | **#13208** | **Vòng lặp vô hạn khi gọi công cụ**：Lỗi tương tự lặp lại 90+ lần, không có cơ chế phát hiện vòng lặp/lui lại | MỞ, 0 bình luận, cần phản hồi khẩn cấp | ❌ Không có |
| 🟠 **Cao** | **#13164** [ĐÃ ĐÓNG] | Kết quả công cụ lớn làm cạn kiệt ngân sách token đuôi, tin nhắn hội thoại bị nuốt bởi tóm tắt | ĐÃ ĐÓNG | Chính PR #13164 |
| 🟠 **Cao** | **#13121** | Gateway khởi động lại làm mất ngữ cảnh tức thời：JSONL vs SQLite transcript không nhất quán | MỞ | ❌ Không có |
| 🟡 **Trung bình** | **#12242** [ĐÃ ĐÓNG] | context_compressor cắt làm hỏng cấu trúc JSON | ĐÃ ĐÓNG | Chính PR #12242 |
| 🟡 **Trung bình** | **#12068** | Lưu trữ bộ nhớ llama.cpp khi gọi công cụ: dấu nháy đơn không được thoát gây lỗi phân tích cú pháp JSON | MỞ | ❌ Không có |
| 🟡 **Trung bình** | **#12952** | Transport keepalive tùy chỉnh làm hỏng kết nối backend ChatGPT Codex | MỞ | ❌ Không có |
| 🟡 **Trung bình** | **#13206** | Webhook gửi bị lỗi: TELEGRAM_HOME_CHANNEL là tên người dùng dẫn đến lỗi chuyển đổi int() | MỞ | ❌ Không có |
| 🟡 **Trung bình** | **#13195** | Phân tách phiên nhóm Telegram: kích hoạt sai message_thread_id | MỞ | ❌ Không có |
| 🟢 **Thấp** | **#13091** | `/v1/props` phải là `GET /props` (tương thích llama.cpp) | MỞ | ❌ Không có |

**Tập trung vào Độ ổn định**：#13231 (OOM TUI) và #13119 (định dạng stub Anthropic) được hợp nhất hôm nay đã trực tiếp giải quyết các điểm đau về độ tin cậy trong môi trường sản xuất. Tuy nhiên, vấn đề **#13208 vòng lặp vô hạn** là vấn đề Cấp độ Quan trọng mới được báo cáo, chưa nhận được sự chú ý của cộng đồng, tiềm ẩn rủi ro mất người dùng.

---

## 6. Yêu cầu Chức năng và Tín hiệu Lộ trình

| Hướng Chức năng | Vấn đề/PR | Cường độ Tín hiệu | Khả năng Bao gồm trong Phiên bản Tiếp theo |
|:---|:---|:---|:---|
| **Hệ thống Bộ nhớ Gốc** | #6323 (mempalace) + #13236 (hermes_mem) | ⭐⭐⭐⭐⭐ | **Cao** — Tài liệu thiết kế đã hoàn thành, tiếng nói cộng đồng mạnh mẽ |
| **Provider Google/Vertex AI Gốc** | #12639 + #7893 | ⭐⭐⭐⭐⭐ | **Cao** — Bỏ qua OpenRouter 402/hạn chế tốc độ là nhu cầu cấp thiết |
| **Cơ sở hạ tầng Suy luận Riêng tư** | #12201 (NEAR AI + Phala TDX) | ⭐⭐⭐⭐☆ | Trung-Cao — Tiên phong về công nghệ, cần đánh giá chi phí bảo trì |
| **Gemini STT Đa phương thức** | #13174 | ⭐⭐⭐⭐☆ | Trung-Cao — Khả năng khác biệt hóa, phụ thuộc vào hệ sinh thái Google |
| **Quản lý Vòng đời Kỹ năng** | #11425 | ⭐⭐⭐☆☆ | Trung bình — Nhu cầu vận hành dài hạn, không chặn |
| **Kiểm soát Nhóm WhatsApp** | #7992 [ĐÃ ĐÓNG] | ⭐⭐⭐☆☆ | Trung bình — Nhu cầu kịch bản doanh nghiệp |
| **Di chuyển Slack Block Kit** | #8552 | ⭐⭐☆☆☆ | Thấp-Trung bình — Tối ưu hóa trải nghiệm, không phải đường dẫn cốt lõi |

**Suy luận Lộ trình**：Bộ nhớ + Provider Google gốc sẽ cấu thành hai cốt lõi có khả năng nhất cho v0.10.0; suy luận riêng tư (TDX) nếu được hợp nhất sẽ đánh dấu Hermes bước vào đường đua bảo mật cấp doanh nghiệp.

---

## 7. Tóm tắt Phản hồi Người dùng

### 😤 Điểm Đau

> *"Tôi thường gặp phải giới hạn tốc độ API và Lỗi 402 từ OpenRouter... Hermes cố gắng sử dụng gọi công cụ gốc mà OpenRouter tính phí thêm..."* — #12639
> 
> **Thuế phụ thuộc bên trung gian**：OpenRouter tính thêm phí cho việc gọi công cụ, người dùng buộc phải tìm Provider gốc để bỏ qua.

> *"Không có module nào có tên pip"* — #3002
> 
> **Tính mong manh của việc cài đặt**：Khởi tạo venv cho các thành phần tùy chọn như NeuTTS không đáng tin cậy, cản trở trải nghiệm đầu tiên.

> *"Các tệp iCloud Drive được tải theo yêu cầu... làm chặn toàn bộ lượt đi trong hàng chục giây"* — #10047
> 
> **Bẫy hiệu suất đường dẫn lưu trữ đám mây**：Tải theo yêu cầu của các tệp trong ổ đĩa đồng bộ hóa làm chặn việc xây dựng gợi ý hệ thống.

### 😊 Hài lòng

> *"Tích hợp WhatsApp cho tin nhắn trực tiếp hoạt động tốt"* — #7992
> 
> Tích hợp nền tảng nhắn tin tức thời được công nhận, nhưng kịch bản nhóm vẫn cần tinh chỉnh.

### 💡 Thấu hiểu Kịch bản Sử dụng

- **Nhiệm vụ lập trình dài hạn** (#6323): Người dùng cần khả năng hiểu kho mã liên tục giữa các phiên.
- **Triển khai đồng thời đa nền tảng** (#9751, #10147): Mô hình triển khai hỗn hợp Docker + cron + gateway trở thành tiêu chuẩn, yêu cầu phối hợp cấp tiến trình.
- **Ưu tiên mô hình cục bộ** (#12068, #13091): Tỷ lệ sử dụng llama.cpp làm backend tăng lên, nhu cầu tương thích tăng.

---

## 8. Tồn đọng Cần Xử lý

| Vấn đề/PR | Thời gian Tạo | Thời gian Hoạt động Cuối cùng | Rủi ro | Nhắc nhở |
|:---|:---|:---|:---|:---|
| **#3002** Lỗi cài đặt NeuTTS | 2026-03-25 | 2026-04-20 | 🔴 26 ngày không đóng, chặn người dùng mới | Quy trình cài đặt cần tái cấu trúc |
| **#6323** Tích hợp mempalace | 2026-04-08 | 2026-0