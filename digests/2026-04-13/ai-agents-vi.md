# OpenClaw Sinh thái Nhật ký Hàng ngày 2026-04-13

> Issues: 500 | PRs: 500 | Dự án được bao phủ: 12 | Thời gian tạo: 2026-04-13 00:13 UTC

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

---

## Báo cáo Chuyên sâu về Dự án OpenClaw

# Nhật ký Hàng ngày về Động thái Dự án OpenClaw | 2026-04-13

---

## 1. Tổng quan Nhanh trong Ngày

Dự án OpenClaw hôm nay thể hiện **mức độ hoạt động cực kỳ cao**, với 500 cập nhật Issues (381 mới mở/hoạt động, 119 đóng) và 500 cập nhật PR (306 chờ hợp nhất, 194 đã hợp nhất/đóng) trong 24 giờ, cùng với việc phát hành **2 phiên bản mới**. Cộng đồng tập trung vào **tối ưu hóa runtime cho tác nhân GPT-5.4**, **nâng cấp kiến trúc bảo mật plugin** và **lặp lại chức năng của hệ thống ghi nhớ (Dreaming/Memory-Wiki)**. Khoảng trống trên nhiều nền tảng client (Linux/Windows) vẫn là một điểm yếu dài hạn, trong khi các vấn đề về độ ổn định như rò rỉ tin nhắn qua gateway và lỗ hổng bảo mật OAuth đã được khắc phục nhanh chóng. Mức độ lành mạnh tổng thể của dự án là tốt, đội ngũ cốt lõi phản hồi nhanh chóng, nhưng số lượng Issue tồn đọng lớn cần được chú ý.

---

## 2. Phát hành Phiên bản

### v2026.4.12-beta.1 | [Release](https://github.com/openclaw/openclaw/releases/tag/v2026.4.12-beta.1)

**Thay đổi cốt lõi: Tái cấu trúc kiến trúc bảo mật tải plugin**
- **Thay đổi có thể gây lỗi**：Cơ chế kích hoạt CLI, provider và channel được siết chặt, chỉ tải các thành phần cần thiết được khai báo trong manifest.
- **Tăng cường bảo mật**：Giữ lại rõ ràng các ranh giới scope và trust, chính sách manifest-owner tập trung hóa.
- **Tối ưu hóa hiệu suất**：Khởi động, khám phá lệnh và kích hoạt runtime tránh tải các plugin không cần thiết.

> **Lưu ý di chuyển**：Các plugin tùy chỉnh cần đảm bảo manifest khai báo đầy đủ tất cả các thành phần phụ thuộc, nếu không chúng có thể bị bỏ qua một cách im lặng.

---

### v2026.4.11 | [Release](https://github.com/openclaw/openclaw/releases/tag/v2026.4.11)

**Thay đổi cốt lõi: Tăng cường Hệ thống Ghi nhớ và WebChat**

| Module | Nội dung thay đổi | Liên kết Issue |
|:---|:---|:---|
| Dreaming/Memory-Wiki | Thêm nhập ChatGPT, hỗ trợ các thẻ con `Imported Insights` và `Memory Palace` | #64505 |
| Control UI/WebChat | Hỗ trợ hiển thị media của trợ lý/output REPL | - |

**Giá trị người dùng**：Có thể kiểm tra trực tiếp trong UI các bản ghi trò chuyện nguồn đã nhập, các trang wiki đã biên dịch và các trang nguồn đầy đủ.

---

## 3. Tiến độ Dự án

### Các PR Quan trọng Đã Hợp nhất/Đóng Hôm Nay

| PR | Tác giả | Đóng góp cốt lõi | Trạng thái |
|:---|:---|:---|:---|
| [#65219](https://github.com/openclaw/openclaw/pull/65219) | 100yenadmin | **Tự động kích hoạt hợp đồng thực thi `strict-agentic` cho runtime GPT-5.4** — Người dùng không cần cấu hình thủ công để đạt được cải thiện hành vi | ✅ Đã hợp nhất |
| [#64779](https://github.com/openclaw/openclaw/pull/64779) | feiskyer | Sửa lỗi phân tích bí danh lệnh CLI, giải quyết vấn đề lệnh `wiki` bị chặn nhầm | ✅ Đã hợp nhất |
| [#12296](https://github.com/openclaw/openclaw/pull/12296) | akoscz | **Tăng cường bảo mật**：Tẩy trừ khóa lớp lưu trữ bản ghi phiên (xây dựng bằng AI, kiểm tra đầy đủ) | ✅ Đã hợp nhất |
| [#43961](https://github.com/openclaw/openclaw/pull/43961) | happydog-intj | Gateway buộc SIGKILL tiến trình zombie sau khi hết thời gian chờ đóng thanh lịch | ✅ Đã hợp nhất |
| [#65586](https://github.com/openclaw/openclaw/pull/65586) | FroeMic | SDK Plugin thêm callback sự kiện trả lời (Codex) | ✅ Đã hợp nhất |

**Tiến độ Tổng thể**：Runtime tác nhân GPT-5.4 bước vào giai đoạn ổn định hóa, kiến trúc bảo mật chuyển từ "chức năng khả dụng" sang "sẵn sàng cho sản xuất", cơ sở hạ tầng hệ sinh thái plugin tiếp tục được hoàn thiện.

---

## 4. Điểm Nóng Cộng Đồng

### 🔥 Issues Được Thảo Luận Nhiều Nhất

| Hạng mục | Issue | Bình luận | Yêu cầu cốt lõi | Liên kết |
|:---|:---|:---:|:---|:---|
| 1 | **Ứng dụng Clawdbot cho Linux/Windows** | 81 | Khoảng trống client đa nền tảng là điểm yếu lớn nhất, macOS/iOS/Android đã được phủ sóng, nhà phát triển mạnh mẽ kêu gọi sự tương đồng trên desktop | [#75](https://github.com/openclaw/openclaw/issues/75) |
| 2 | **Tương đương runtime agent GPT-5.4 / Codex** | 24 | Yêu cầu tác nhân GPT-5.4 đạt chất lượng thực thi như tác nhân Claude: sử dụng công cụ chủ động, nhiệm vụ nhiều bước, giảm xác nhận quá mức | [#64227](https://github.com/openclaw/openclaw/issues/64227) |
| 3 | **Tokens bị đốt cháy khi kéo ngữ cảnh lớn về phía trước** | 19 | Lỗi quản lý ngữ cảnh hội thoại dài dẫn đến kích hoạt thường xuyên trong giới hạn 5 giờ, người dùng nhạy cảm về chi phí bất mãn mạnh mẽ | [#1594](https://github.com/openclaw/openclaw/issues/1594) |
| 4 | **Hỗ trợ Hội thoại Thoại Thời gian Thực** | 19 | Yêu cầu luồng âm thanh hai chiều thời gian thực (Twilio/WebRTC), hiện chỉ hỗ trợ âm thanh ghi sẵn | [#7200](https://github.com/openclaw/openclaw/issues/7200) |
| 5 | **Session_send không tìm thấy session** | 18 | Giao tiếp giữa các tác nhân bị gián đoạn sau khi nâng cấp v2026.3-22, ảnh hưởng đến kịch bản điều phối đa tác nhân | [#52875](https://github.com/openclaw/openclaw/issues/52875) |

**Phân tích Yêu cầu**：Cộng đồng đang chuyển từ "chức năng cơ bản khả dụng" sang "độ tin cậy cấp doanh nghiệp" và "tương tác đa phương thức", tính đầy đủ của nền tảng, hiệu quả chi phí, khả năng thời gian thực trở thành tiêu điểm mới.

---

## 5. Lỗi và Độ ổn định

### 🔴 Nghiêm trọng (Ảnh hưởng chức năng cốt lõi/bảo mật dữ liệu)

| Issue | Mô tả | Trạng thái | Tiến độ sửa lỗi |
|:---|:---|:---|:---|
| [#65599](https://github.com/openclaw/openclaw/pull/65599) | **Lỗ hổng tiêm lệnh OAuth trên Windows** — Provider độc hại có thể thực thi lệnh tùy ý thông qua `cmd.exe` | 🚨 **PR Đã mở** | [#65599](https://github.com/openclaw/openclaw/pull/65599) chờ hợp nhất |
| [#64250](https://github.com/openclaw/openclaw/issues/64250) | Sau v2026.4.9, tất cả tin nhắn đều kích hoạt dương tính giả "Context limit exceeded", hội thoại hoàn toàn không sử dụng được | 🔴 Mở | Không có PR |
| [#60213](https://github.com/openclaw/openclaw/issues/60213) | Nén sau khi vượt giới hạn ngữ cảnh âm thầm giết chết hội thoại, **mất toàn bộ ký ức cuộc trò chuyện** | 🔴 Mở | Không có PR |
| [#65507](https://github.com/openclaw/openclaw/issues/65507) | Lập lịch đường dẫn nóng LCM dẫn đến hết thời gian chờ gateway thời gian thực, độ trễ sau lượt tăng lên | 🔴 Mở | [#65233](https://github.com/openclaw/openclaw/pull/65233) bảo trì nền |

### 🟡 Trung bình (Sự cố với kịch bản/Provider cụ thể)

| Issue | Mô tả | Trạng thái | Tiến độ sửa lỗi |
|:---|:---|:---|:---|
| [#65245](https://github.com/openclaw/openclaw/issues/65245) | azure-responses/gpt-5.3-codex thường xuyên trả về "Unknown error" | 🟡 Mở | Không có PR |
| [#62045](https://github.com/openclaw/openclaw/issues/62045) | Hồi quy v2026.4.5: gpt-5.1-codex-mini cần hoàn nguyên về 4.2 để khôi phục | 🟡 Mở | Không có PR |
| [#64799](https://github.com/openclaw/openclaw/issues/64799) | Volcengine Coding Plan lỗi phân tích mô hình | 🟡 Mở | Không có PR |
| [#62496](https://github.com/openclaw/openclaw/issues/62496) | Chuyển ngữ tin nhắn thoại Telegram DM thất bại một cách im lặng | 🟡 Mở | Không có PR |

### ✅ Đã sửa lỗi Hôm nay

| Issue | PR sửa lỗi | Mô tả |
|:---|:---|:---|
| [#63918](https://github.com/openclaw/openclaw/issues/63918) Tham số thinking của agentTurn Cron bị lỗi | — | Đã đóng |
| [#64068](https://github.com/openclaw/openclaw/issues/64068) dreaming của memory-core 0 candidate | — | Đã đóng |
| [#7365](https://github.com/openclaw/openclaw/issues/7365) Lỗi undici fetch của Telegram | — | Đã đóng |
| [#64667](https://github.com/openclaw/openclaw/issues/64667) Phạm vi OAuth của OpenAI Codex không hợp lệ | — | Đã đóng |
| [#63092](https://github.com/openclaw/openclaw/issues/63092) memory-wiki bridge nhập 0 artifact | — | Đã đóng |
| [#828](https://github.com/openclaw/openclaw/issues/828) Rò rỉ tin nhắn Slack qua gateway | — | Đã đóng |

---

## 6. Yêu cầu Tính năng và Tín hiệu Lộ trình

### Các Tính năng Có Khả năng Cao Sẽ Được Bao Gồm Trong Phiên bản Tiếp Theo (Đã có PR hoặc Đội ngũ Cốt lõi Theo dõi)

| Tính năng | Trạng thái | Tín hiệu |
|:---|:---|:---|
| **Chế độ Nhân cách Hỗn hợp GPT-5.4** (Chia sẻ KV Cache giữa mô hình thực thi + mô hình nhân cách) | [#65591](https://github.com/openclaw/openclaw/pull/65591) Mở | Đội ngũ cốt lõi 100yenadmin dẫn đầu, giải pháp kỹ thuật trưởng thành |
| **Hỗ trợ Client MCP Nguyên bản** | [#29053](https://github.com/openclaw/openclaw/issues/29053) 16 bình luận | Giao thức tiêu chuẩn ngành, tiếng nói cộng đồng cao, chờ phản hồi từ đội ngũ cốt lõi |
| **Phối hợp Song song Agent Teams** | [#10010](https://github.com/openclaw/openclaw/issues/10010) 13 bình luận | Đối trọng với chức năng thử nghiệm của Claude Code, kiến trúc đã có nền tảng |
| **Cuộc gọi Thoại Thời gian Thực** | [#7200](https://github.com/openclaw/openclaw/issues/7200) 19 bình luận | Cơ sở hạ tầng có nhu cầu rõ ràng, chờ đầu tư tài nguyên |
| **Nhà cung cấp TTS Typecast** | [#10356](https://github.com/openclaw/openclaw/pull/10356) Mở | PR đã được gửi, giá trị khác biệt hóa của cài đặt cảm xúc ngôn ngữ Châu Á |

### Tín hiệu Lộ trình Dài hạn

| Tính năng | Issue | Rào cản |
|:---|:---|:---|
| Ứng dụng Nguyên bản Linux/Windows | [#75](https://github.com/openclaw/openclaw/issues/75) | Quyết định đầu tư tài nguyên, không phải rào cản kỹ thuật |
| Hệ thống Uy tín Hành vi (Bảo mật Kỹ năng) | [#55342](https://github.com/openclaw/openclaw/issues/55342) | Độ phức tạp kiến trúc cao, cần thiết kế đa phiên bản |
| Đơn giản hóa Quy trình Phê duyệt Thực thi | [#59510](https://github.com/openclaw/openclaw/issues/59510) | Cân bằng thiết kế UX, cân bằng bảo mật và tiện lợi |

---

## 7. Tóm tắt Phản hồi Người dùng

### 😊 Điểm Hài lòng
- **Hệ thống Ghi nhớ (Dreaming)**: Tính năng nhập ChatGPT nhận phản hồi tích cực, trực quan hóa "Memory Palace" được mong đợi.
- **Runtime GPT-5.4**: Kích hoạt tự động `strict-agentic` giảm gánh nặng cấu hình ([#65219](https://github.com/openclaw/openclaw/pull/65219)).
- **Tốc độ Phản hồi Bảo mật**: Khắc phục nhanh chóng các lỗ hổng như OAuth, rò rỉ qua gateway.

### 😤 Điểm Yếu
- **Lo lắng về Chi phí**: "400 tin nhắn trong giới hạn 5 giờ đã kích hoạt" ([#1594](https://github.com/openclaw/openclaw/issues/1594)), chiến lược quản lý ngữ cảnh không minh bạch.
- **Khóa Nền tảng**: "Chúng tôi có macOS, iOS, Android, còn thiếu Linux và Windows" ([#75](https://github.com/openclaw/openclaw/issues/75)), quy trình làm việc của nhà phát triển bị hạn chế.
- **Ngại Nâng cấp**: Nhiều báo cáo "chức năng bị gián đoạn sau khi nâng cấp, cần hoàn nguyên" ([#62045](https://github.com/openclaw/openclaw/issues/62045), [#52875](https://github.com/openclaw/openclaw/issues/52875)), phạm vi kiểm tra hồi quy không đủ.
- **Khả dụng tại Trung Quốc Đại lục**: Lỗi cấu hình proxy Memory Search + hạn chế mạng ([#38503](https://github.com/openclaw/openclaw/issues/38503)).

### 💡 Kịch bản Sử dụng Điển hình
- **Điều phối Đa Tác nhân**: Người dùng doanh nghiệp xây dựng quy trình làm việc thông qua `sessions_spawn`, nhưng độ tin cậy giao tiếp giữa các tác nhân trở thành nút thắt cổ chai.
- **Quản lý Kiến thức Dài hạn**: Người dùng cá nhân nhập lịch sử ChatGPT nhiều năm vào Dreaming, mong đợi trải nghiệm "bộ não thứ hai".
- **Tương tác Thời gian Thực**: Kịch bản dịch vụ khách hàng có nhu cầu mạnh mẽ về khả năng gọi thoại, hiện tại văn bản/âm thanh ghi sẵn không đáp ứng được.

---

## 8. Tồn đọng Cần xử lý

### ⚠️ Các Issue Giá trị Cao, Lâu Ngày Không Phản hồi (>30 ngày, tương tác cao)

| Issue | Số ngày | Bình luận | Rủi ro | Đề xuất Hành động |
|:---|:---:|:---:|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Ứng dụng Linux/Windows | 102 | 81 | Khoảng trống phủ sóng nền tảng mở rộng, lợi thế của đối thủ cạnh tranh | Đặt ra lộ trình công khai hoặc tuyển dụng người đóng góp cộng đồng |
| [#7200](https://github.com/openclaw/openclaw/issues/7200) Thoại Thời gian Thực | 70 | 19 | Cửa sổ thị trường tương tác thời gian thực | Đánh giá tính khả thi tích hợp WebRTC, phân bổ các cột mốc |
| [#29053](https://github.com/openclaw/openclaw/issues/29053) Client MCP | 45 | 16 | Giao thức tiêu chuẩn ngành lạc hậu | Đánh giá kỹ thuật cốt lõi, đưa vào kế hoạch Q2 |
| [#10010](https://github.com/openclaw/openclaw/issues/10010) Agent Teams | 66 | 13 | Chức năng khác biệt hóa tính toán song song | Thiết kế phối hợp với runtime GPT-5.4 [#64227](https://github.com/openclaw/openclaw/issues/64227) |
| [#1594](https://github.com/openclaw/openclaw/issues/1594) Đốt Token | 79 | 19 | Mất người dùng nhạy cảm về chi phí | Nâng cao ưu tiên, chiến lược ngân sách ngữ cảnh minh bạch |

### 🕸️ Cụm Bug "Stale" (Đánh dấu stale, ảnh hưởng trải nghiệm)

| Issue | Vấn đề | Cập nhật cuối cùng |
|:---|:---|:---|
| [#24662](https://github.com/openclaw/openclaw/issues/24662) | Hình ảnh dán WebChat không được gửi đến Agent | 2026-04-12 |
| [#23208](https://github.com/openclaw/openclaw/issues/23208) | Công cụ TTS bỏ qua cấu hình voiceId của ElevenLabs | 2026-04-12 |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | File Bootstrap trong agentDir bị bỏ qua một cách im lặng | 2026-04-12 |
| [#17890](https://github.com/openclaw/openclaw/issues/17890) | PATH ứng dụng macOS không bao gồm Homebrew | 2026-04-12 |

> **Nhắc nhở Người bảo trì**: Các Issue trên mặc dù được bình luận liên tục, nhưng không có thành viên cốt lõi phản hồi, có nguy cơ mất người dùng. Đề xuất phân loại hàng loạt, phân biệt "cần quyết định thiết kế" và "có thể sửa nhanh".

---

*Thời gian tạo nhật ký: 2026-04-13 | Nguồn dữ liệu: Dữ liệu công khai từ kho lưu trữ GitHub OpenClaw*

---

## So sánh Sinh thái Ngang

# Báo cáo Phân tích So sánh Ngang Sinh thái Trợ lý AI Cá nhân
**Ngày Cơ sở: 2026-04-13**

---

## 1. Toàn cảnh Sinh thái

Sinh thái nguồn mở trợ lý AI cá nhân/tác nhân tự trị đang ở **bước ngoặt quan trọng từ "chức năng khả dụng" sang "sẵn sàng cho sản xuất"**. Các dự án hàng đầu (OpenClaw, NanoBot, Hermes Agent) có thông lượng Issue/PR trung bình hàng ngày đạt mức 50-500, cho thấy nhu cầu cộng đồng bùng nổ; tiêu điểm công nghệ chuyển từ khả năng hội thoại cơ bản sang **tương tác đa phương thức** (thoại thời gian thực, tự động hóa trình duyệt), **hiệu quả chi phí** (nén ngữ cảnh, tối ưu Token) và **độ tin cậy cấp doanh nghiệp** (phát hành ổn định, lưu trữ xác thực). Đồng thời, **giao thức MCP** đang trở thành tiêu chuẩn thực tế cho hệ sinh thái công cụ, và **Web UI** thay thế CLI trở thành điểm cao cạnh tranh trải nghiệm người dùng. Phân hóa sinh thái rõ ràng: một bên đào sâu các kịch bản dọc (hệ sinh thái WeChat, thiết bị biên), một bên đặt cược vào nền tảng tác nhân phổ thông.

---

## 2. So sánh Mức độ Hoạt động của từng Dự án

| Dự án | Issues (24h) | PRs (24h) | Phát hành Phiên bản | Đánh giá Độ lành mạnh |
|:---|:---:|:---:|:---|:---|
| **OpenClaw** | 500 (381 mới mở/119 đóng) | 500 (306 chờ hợp nhất/194 đã hợp nhất) | v2026.4.12-beta.1, v2026.4.11 | 🔥 **Hoạt động Cực kỳ Cao** — Quy mô cộng đồng lớn nhất, nhưng Issue tồn đọng khổng lồ (11000+), cần chú ý hiệu quả quản trị |
| **NanoBot** | 21 (16 hoạt động/5 đóng) | 117 (102 chờ hợp nhất/15 đã hợp nhất) | Không có | 🟢 **Hoạt động Cao** — Thông lượng PR nổi bật, codebase Python được cộng đồng khen ngợi "sạch sẽ và dễ hiểu" |
| **Hermes Agent** | 50 (32 hoạt động/18 đóng) | 50 (32 chờ hợp nhất/18 đã hợp nhất) | Không có | 🟢 **Hoạt động Cao** — Sửa lỗi hệ sinh thái WeChat dày đặc, 1000+ Issue mở gây tranh luận quản trị |
| **PicoClaw** | 13 (10 hoạt động/3 đóng) | 17 (12 chờ hợp nhất/5 đã hợp nhất) | v0.2.6-nightly | 🟡 **Hoạt động Trung-Cao** — Đặc trưng ARM/nhúng rõ ràng, biên dịch chéo Android có bước đột phá |
| **NanoClaw** | 2 | 8 (3 chờ hợp nhất/5 đã hợp nhất) | Không có | 🟡 **Hoạt động Trung bình** — PR cấp kiến trúc dày đặc (Coordinator/Workspace, proxy bộ nhớ), thảo luận chiến lược (đa provider) chờ phản hồi |
| **NullClaw** | 3 (2 mới mở/1 đóng) | 2 (chờ hợp nhất) | Không có | 🟡 **Hoạt động Trung-Thấp** — Giao thức A2A và tăng cường bảo mật song song, engine cron sub-agent chờ hợp nhất |
| **IronClaw** | 15 (14 hoạt động/1 đóng) | 50 (40 chờ hợp nhất/10 đã hợp nhất) | Không có | 🔥 **Hoạt động Cao** — Giai đoạn quan trọng lặp lại kiến trúc Engine v2, kế hoạch sử dụng trình duyệt sử thi khởi động |
| **LobsterAI** | 4 (3 mới mở/1 đóng) | 7 (tất cả chờ hợp nhất) | Không có | 🟡 **Hoạt động Trung-Cao** — Giai đoạn tinh chỉnh trải nghiệm dày đặc, 0xFLX đóng góp 5 PR tối ưu hóa tương tác trong một ngày |
| **TinyClaw** | 1 (mới mở) | 0 | Không có | 🔴 **Hoạt động Cực kỳ Thấp** — 24h không hoạt động PR, tín hiệu suy giảm động lực cộng đồng |
| **Moltis** | 11 (2 mới mở/9 đóng) | 21 (5 chờ hợp nhất/16 đã hợp nhất) | Không có | 🟢 **Hoạt động Cao** — Tái cấu trúc kiến trúc (tách rời Gateway) và bàn giao chức năng song song, hiệu quả làm sạch Issue cực cao |
| **CoPaw/QwenPaw** | 15 (11 mới mở/4 đóng) | 24 (17 chờ hợp nhất/7 đã hợp nhất) | v1.1.0, v1.1.0-beta.1 | 🔥 **Hoạt động Cao** — Giai đoạn quan trọng tái cấu trúc thương hiệu, tư vấn di chuyển và nhu cầu lặp lại chức năng song song |
| **ZeptoClaw** | 0 | 0 | Không có | ⚫ **Không hoạt động** — Dự án đình trệ hoặc lưu trữ |

---

## 3. Vị thế của OpenClaw trong Hệ sinh thái

### Ưu điểm Cốt lõi
| Chiều | Biểu hiện | Hỗ trợ Dữ liệu |
|:---|:---|:---|
| **Hiệu ứng Quy mô** | Dẫn đầu tuyệt đối về quy mô cộng đồng | 500 Issues/24h + 500 PRs, tương đương 10 lần NanoBot, 10 lần Hermes Agent |
| **Tính Hoàn chỉnh Hệ sinh thái** | Duy nhất phủ sóng client đa nền tảng (macOS/iOS/Android) + kiến trúc đa gateway | Khoảng trống Linux/Windows (#75) ngược lại với tham vọng đa nền tảng |
| **Tính Tiên phong Kỹ thuật** | Hỗ trợ runtime GPT-5.4 đầu tiên, hệ thống ghi nhớ Dreaming/Memory-Wiki | Kích hoạt tự động `strict-agentic` (#65219) hợp đồng |
| **Tốc độ Phản hồi Bảo mật** | Chu kỳ sửa lỗi lỗ hổng nghiêm trọng ngắn | Tiêm lệnh OAuth (#65599), rò rỉ qua gateway (#828) phản hồi trong 24 giờ |

### Khác biệt Tuyến đường Kỹ thuật
| Mục So sánh | OpenClaw | Điển hình Hệ sinh thái (NanoBot/Hermes) |
|:---|:---|:---|
| **Triết lý Kiến trúc** | Tập trung vào Gateway (Gateway-centric), liên minh đa phiên bản | Đơn thể hoặc proxy nhẹ |
| **Hệ thống Ghi nhớ** | Tích hợp sẵn Dreaming/Memory-Wiki, hỗ trợ nhập lịch sử ChatGPT | Phụ thuộc vào cơ sở dữ liệu vector bên ngoài hoặc ngữ cảnh đơn giản |
| **Bảo mật Plugin** | Khai báo manifest rõ ràng + cô lập scope (tái cấu trúc v2026.4.12-beta.1) | Tải động runtime, ranh giới mờ nhạt |
| **Chiến lược Provider** | Gắn kết sâu với hệ sinh thái OpenAI/Anthropic, tối ưu hóa nguyên bản | Tương thích đa provider (định tuyến kiểu OpenRouter) |

### So sánh Quy mô Cộng đồng
```
OpenClaw  500 Issues/24h  ───────────────────────────────  Gã khổng lồ sinh thái
NanoBot   21 Issues/24h   ────────  Tiêu chuẩn hiệu quả kỹ thuật (tỷ lệ PR/Issue 5.6)
Hermes    50 Issues/24h   ─────────────  Đào sâu dọc hệ sinh thái WeChat
PicoClaw  13 Issues/24h   ────  Khác biệt hóa nhúng/ARM
Các dự án còn lại  <10 Issues/24h  ─  Định vị ban đầu hoặc niche
```

### Thách thức Cốt lõi
- **Nút thắt Quản trị**: 11000+ Issue mở, vấn đề nguyên mẫu kiểu #7335 cảnh báo thiếu cơ chế phân loại.
- **Khoảng trống Phủ sóng Nền tảng**: Thiếu client desktop Linux/Windows (#75, 102 ngày 81 bình luận) trở thành điểm yếu lớn nhất.
- **Tính Minh bạch Chi phí**: Vấn đề đốt Token (#1594) gây bất mãn cho người dùng nhạy cảm về chi phí.

---

## 4. Hướng Công nghệ Được Quan Tâm Chung

| Hướng Công nghệ | Dự án Liên quan | Yêu cầu Cụ thể | Mức độ Khẩn cấp |
|:---|:---|:---|:---|
| **Web UI / Client Desktop** | OpenClaw (#75), Hermes Agent (#501), NanoBot (#3059), IronClaw (#2369) | Giao diện tương tác thay thế CLI, hỗ trợ hiển thị phong phú, truy cập hệ thống tệp cục bộ | 🔴 P0 |
| **Tự động hóa Trình duyệt** | IronClaw (#2355 kế hoạch sử thi), NullClaw (#808 tiến độ A2A), OpenClaw (sử dụng công cụ Codex) | Tác nhân có khả năng tương tác web thực tế (đăng nhập, biểu mẫu, hiển thị JS, CDP) | 🔴 P0 |
| **Luồng Thoại/Âm thanh Thời gian Thực** | OpenClaw (#7200), IronClaw (#90), NanoClaw (đang thảo luận) | Luồng thoại hai chiều (Twilio/WebRTC), tích hợp STT/TTS | 🟡 P1 |
| **Tối ưu hóa Chi phí Ngữ cảnh/Token** | OpenClaw (#1594), NanoBot (#2982 Auto Compact), NanoClaw (#1752 SQLite chi phí thấp), Moltis (#652 ngân sách nén) | Quản lý hội thoại dài, nén tự động, giải pháp chi phí LLM bằng không qua các kênh | 🔴 P0 |
| **Hỗ trợ Nguyên bản Giao thức MCP** | NanoBot (#29053), Moltis (#690 trích xuất dịch vụ MCP), OpenClaw (kiến trúc plugin đang tiến gần) | Tiêu chuẩn hóa hệ sinh thái công cụ, thay thế hệ thống Skill bị phân mảnh | 🟡 P1 |
| **Định tuyến Đa Provider/Mô hình** | NanoBot (#3070), NanoClaw (#1163 OpenCode), Hermes (Terminal đa backend #1855) | Tránh khóa nhà cung cấp, chọn mô hình có chi phí-hiệu quả tự động dựa trên độ phức tạp nhiệm vụ | 🟡 P1 |
| **Độ ổn định Cấp Doanh nghiệp** | Hermes Agent (#8063 phát hành cố định), OpenClaw (tái cấu trúc kiến trúc bảo mật), CoPaw (di chuyển thương hiệu) | Chu kỳ phát hành có thể dự đoán, độ bền xác thực, lộ trình nâng cấp mượt mà | 🔴 P0 |
| **Thích ứng Hệ sinh thái Trung Quốc/WeChat** | Hermes Agent (5+ Issue đã đóng), CoPaw (#3296), PicoClaw (#2280 dòng chảy silicon) | Kênh IM trong nước, truy cập mô hình cục bộ, tuân thủ mạng | 🟡 P1 |

---

## 5. Phân tích Định vị Khác biệt

| Dự án | Trọng tâm Chức năng Cốt lõi | Người dùng Mục tiêu | Khác biệt Kiến trúc Kỹ thuật Chính |
|:---|:---|:---|:---|
| **OpenClaw** | Nền tảng Tác nhân Phổ thông, Hệ thống Ghi nhớ, Liên minh Đa Gateway | Kỹ sư công nghệ, người dùng đa thiết bị, người tiên phong | Kết hợp Rust/Go, tập trung vào Gateway, mô hình bảo mật manifest |
| **NanoBot** | Triển khai Nhẹ, Khả năng Bảo trì Python, Auto Compact | Nhà phát triển, người dùng tự lưu trữ, kịch bản nhạy cảm chi phí | Python thuần túy, danh tiếng "codebase sạch sẽ", lớp trừu tượng LiteLLM |
| **Hermes Agent** | Tích hợp Sâu Hệ sinh thái WeChat, Phủ sóng IM Đa Nền tảng | Người dùng thị trường Trung Quốc, kịch bản tác nhân xã hội hóa | TypeScript/Node, lớp thích ứng nền tảng dày |
| **PicoClaw** | Triển khai Biên/Di động Nhúng, Tích hợp Nguyên bản Android | Nhà phát triển IoT, kịch bản điện toán biên, người dùng ưu tiên quyền riêng tư | Biên dịch chéo Rust, liên kết JNI, kênh riêng tư Signal |
| **NanoClaw** | Runtime Tác nhân Container hóa, Kiến trúc Coordinator, Proxy Bộ nhớ | Triển khai Cấp Doanh nghiệp, SaaS đa người thuê | TypeScript, ưu tiên SQLite, cô lập Workspace |
| **NullClaw** | Giao thức A2A, Proxy Phụ Cron, Tăng cường Bảo mật | Quy trình làm việc tự động hóa, kịch bản nhiệm vụ định kỳ | Rust, SKILL như mã, mô hình bảo mật token ghép nối |
| **IronClaw** | Lớp Thực thi Engine v2, Tự động hóa Trình duyệt, Hệ sinh thái NEAR | Kịch bản Blockchain, tự động hóa nhiệm vụ phức tạp | Rust, tích hợp CDP, bộ chọn ba trạng thái (trả lời trực tiếp/Action/CodeAct) |
| **LobsterAI** | Trải nghiệm Sử dụng Ngay, Tích hợp Hệ thống Windows, Hệ sinh thái NetEase | Người dùng phổ thông Trung Quốc, kịch bản văn phòng desktop | Electron/Tauri, tích hợp cấp hệ thống/menu chuột phải |
| **Moltis** | Công cụ Tệp Nguyên bản, Nostr Phi tập trung, Tách rời Gateway | Người dùng ưu tiên quyền riêng tư, tự lưu trữ doanh nghiệp | Rust, vi nhân dạng module hóa, Lược đồ tương thích Claude Code |
| **CoPaw/QwenPaw** | Cộng tác Đa Tác nhân, Lập kế hoạch nhiệm vụ PlanNotebook, Hệ sinh thái Alibaba | Nhà phát triển Trung Quốc, điều phối tác nhân | Python, framework AgentScope, liên kết thương hiệu Qwen |
| **TinyClaw** | Thực hiện Cực kỳ Đơn giản, ưu tiên Telegram | Mục đích Giáo dục/Học tập, người theo chủ nghĩa tối giản | Chưa xác định, động lực hoạt động đang suy yếu |

---

## 6. Phân lớp Nhiệt độ Cộng đồng và Độ trưởng thành

### 🔥 Giai đoạn Lặp lại Nhanh (Giai đoạn Bùng nổ Chức năng)
| Dự án | Đặc điểm | Tín hiệu Chính |
|:---|:---|:---|
| **OpenClaw** | Động lực quy mô, hai đường công nghệ-bảo mật | Runtime GPT-5.4, tái cấu trúc bảo mật plugin, lặp lại hệ thống ghi nhớ |
| **IronClaw** | Tái cấu trúc kiến trúc, mở rộng ranh giới khả năng | Engine v2, sử thi tự động hóa trình duyệt, kế hoạch luồng âm thanh |
| **CoPaw/QwenPaw** | Tái cấu trúc thương hiệu, kiến trúc đa tác nhân | Phát hành v1.1.0, Coordinator/Workspace, PlanNotebook |
| **Moltis** | Hiện đại hóa kiến trúc, bàn giao chức năng dày đặc | Loạt 4-PR tách rời Gateway, công cụ tệp/Nostr/bảo mật terminal |

### 🟢 Giai đoạn Củng cố Chất lượng (Giai đoạn Tối ưu hóa Kỹ thuật)
| Dự án | Đặc điểm | Tín hiệu Chính |
|:---|:---|:---|
| **NanoBot** | Dọn dẹp nợ kỹ thuật, tinh chỉnh trải nghiệm | Diệt trừ xử lý lỗi, thống nhất số phiên bản, sửa lỗi Unicode, PR Web UI chờ hợp nhất |
| **Hermes Agent** | Sửa lỗi hệ sinh thái, xây dựng cơ chế quản trị | Sửa lỗi WeChat dày đặc, thảo luận quản trị 1000+ Issue, RFC cơ chế phát hành |
| **NanoClaw** | Nâng cấp kiến trúc, quyết định chiến lược chờ | Hợp nhất Coordinator, PR proxy bộ nhớ, thảo luận đa provider chờ phản hồi |

### 🟡 Giai đoạn Đào sâu Khác biệt (Kịch bản Dọc)
| Dự án | Đặc điểm | Tín hiệu Chính |
|:---|:---|:---|
| **PicoClaw** | Đột phá Biên/Di động | Biên dịch chéo Android ARM64, công kiên cố hóa ổn định OpenWrt |
| **LobsterAI** | Tinh chỉnh trải nghiệm dày đặc | 0xFLX 5 PR tối ưu hóa tương tác trong một ngày, menu chuột phải Windows |
| **NullClaw** | Bảo mật và Tự động hóa Song song | Engine cron sub-agent, luồng tiến độ A2A, tăng cường bảo mật token ghép nối |

### 🔴 Tín hiệu Rủi ro/Đình trệ
| Dự án | Trạng thái | Cảnh báo |
|:---|:---|:---|
| **TinyClaw** | Suy giảm động lực | 24h không PR, Issue duy nhất không phản hồi, cần đánh giá kích hoạt hoặc lưu trữ |
| **ZeptoClaw** | Đình trệ hoàn toàn | Không hoạt động, có thể đã bị loại bỏ |

---

## 7. Tín hiệu Xu hướng Đáng chú ý

### Tín hiệu 1: Bước nhảy vọt về khả năng từ "Tác nhân Hội thoại" sang "Nhân viên Kỹ thuật số"
> **Bằng chứng**: Sử thi tự động hóa trình duyệt IronClaw #2355 (6 nhiệm vụ phụ), hợp đồng `strict-agentic` OpenClaw GPT-5.4, luồng tiến độ A2A NullClaw |
> **Ý nghĩa**: Tác nhân cần có khả năng thao tác môi trường chủ động (web, hệ thống tệp, nhiệm vụ định kỳ), thay vì phản hồi bị động. Nhà phát triển nên chú ý **tích hợp CDP/Puppeteer, engine lập lịch Cron, khả năng quan sát quy trình thực thi**.

### Tín hiệu 2: Hiệu quả Chi phí trở thành Chiều cạnh Cạnh tranh Cốt lõi
> **Bằng chứng**: Sự lo lắng về đốt Token của OpenClaw (#1594), Auto Compact của NanoBot đã hợp nhất, ngữ cảnh SQLite chi phí thấp của NanoClaw (#1752), ràng buộc cứng ngân sách nén của Moltis (#652) |
> **Ý nghĩa**: Quản lý hội thoại dài từ "chức năng" trở thành vấn đề "mô hình kinh tế". Hướng công nghệ chính: **nén ngữ nghĩa, ghi nhớ phân lớp (trí nhớ làm việc/ghi nhớ dài hạn), tái sử dụng KV Cache qua các hội thoại**.

### Tín hiệu 3: Giao thức MCP Tăng tốc Tiêu chuẩn hóa Hệ sinh thái Công cụ
> **Bằng chứng**: NanoBot #29053, Moltis #690 trích xuất dịch vụ MCP, OpenClaw (kiến trúc plugin đang tiến gần) |
> **Ý nghĩa**: Hệ thống Skill bị phân mảnh đang tiến hóa thành thị trường công cụ theo giao thức. Nhà phát triển nên ưu tiên **client/server MCP** thay vì định dạng công cụ riêng.

### Tín hiệu 4: Web UI Thay thế CLI Trở thành Ngưỡng áp dụng
> **Bằng chứng**: Hermes Agent #501 (47 ngày 81 bình luận), OpenClaw #75 phủ sóng nền tảng, NanoBot #3059 PR Web UI, IronClaw #2369 "UX cấp Apple" |
> **Ý nghĩa**: Thị trường người dùng phi kỹ thuật mở rộng, yêu cầu **chất lượng sản phẩm tiêu dùng**. Đề xuất stack công nghệ: Tauri (Rust), Electron (trưởng thành), hoặc Flutter/React Native nguyên bản.

### Tín hiệu 5: Chiến lược Đa Provider Chuyển từ "Tương thích" sang "Định tuyến Thông minh"
> **Bằng chứng**: Thảo luận NanoClaw #1163 OpenCode, định tuyến mô hình NanoBot #3070, tối ưu hóa định tuyến trực quan của Hermes (#8610) |
> **Ý nghĩa**: Rủi ro phụ thuộc vào LLM đơn lẻ ngày càng rõ nét, **engine ghép nối nhiệm vụ-mô hình** (mô hình nhẹ cho nhiệm vụ đơn giản, mô hình suy luận cho nhiệm vụ phức tạp) trở thành cơ sở hạ tầng.

### Tín hiệu 6: Căng thẳng giữa Hệ sinh thái Khu vực (Trung Quốc/WeChat) và Giao thức Toàn cầu
> **Bằng chứng**: Sửa lỗi dày đặc của Hermes Agent WeChat, liên kết thương hiệu CoPaw Qwen, thích ứng dòng chảy silicon PicoClaw |
> **Ý nghĩa**: Các dự án nguồn mở toàn cầu cần xử lý sự cân bằng giữa **tuân thủ địa phương hóa và kiến trúc quốc tế hóa**, thích ứng với các hệ sinh thái đóng như WeChat/QQ là lựa chọn bắt buộc cho thị trường Trung Quốc.

---

**Kết luận Báo cáo**: Sinh thái trợ lý AI cá nhân đang ở giai đoạn cửa sổ **phân hóa và tích hợp công nghệ song song**. OpenClaw duy trì vị thế dẫn đầu nhờ hiệu ứng quy mô, nhưng quản trị hiệu quả và khoảng trống phủ sóng nền tảng tạo ra thách thức; các dự án cỡ trung (NanoBot, Moltis, IronClaw) tìm kiếm không gian khác biệt hóa thông qua đổi mới kiến trúc (khả năng bảo trì Python, module hóa Rust, tự động hóa trình duyệt); các dự án đình trệ (TinyClaw, ZeptoClaw) cảnh báo về sự mong manh của động lực cộng đồng. Đề xuất lựa chọn nhà phát triển: **chọn OpenClaw nếu theo đuổi hệ sinh thái trưởng thành, NanoBot nếu theo đuổi hiệu quả kỹ thuật, PicoClaw nếu theo đuổi triển khai biên, IronClaw/Moltis nếu theo đuổi chiều sâu tự động hóa**.

---

## Báo cáo Chi tiết Dự án Cùng Đường đua

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Nhật ký Hàng ngày Dự án NanoBot · 2026-04-13

---

## 1. Tổng quan Nhanh trong Ngày

NanoBot hôm nay thể hiện **động thái phát triển hoạt động cao**: 21 cập nhật Issues (16 hoạt động/mở mới, 5 đóng) và 117 cập nhật PR (102 chờ hợp nhất, 15 hợp nhất/đóng) trong 24 giờ. Các tiến triển cốt lõi tập trung vào **sửa lỗi ổn định proxy** (phát hiện vòng lặp vô hạn, lưu trữ tin nhắn), **tăng cường độ tin cậy kênh** (chữa dứt điểm vấn đề pool kết nối Telegram) và **mở rộng hệ sinh thái đa provider** (backend MiniMax Anthropic, GitHub Copilot trở lại). Nhu cầu tối ưu trải nghiệm về định tuyến mô hình, Web UI, tương thích Windows ngày càng tăng trong cộng đồng, việc dọn dẹp nợ kỹ thuật và đổi mới chức năng được thúc đẩy song song.

---

## 2. Phát hành Phiên bản

**Không có phiên bản mới nào được phát hành**

> Lưu ý: Nhánh `nightly` ngày hôm qua đã hoàn thành làm mới ([#3071](https://github.com/HKUDS/nanobot/issues/3071)), đồng bộ với nhánh `main`, đặt nền móng cho vòng lặp lặp lại phiên bản tiếp theo.

---

## 3. Tiến độ Dự án

### PRs Chính Đã Hợp nhất/Đóng

| PR | Tác giả | Đóng góp Cốt lõi | Ảnh hưởng |
|:---|:---|:---|:---|
| [#3053](https://github.com/HKUDS/nanobot/pull/3053) | Bahtya | **Chữa dứt điểm lỗi xử lý ngoại lệ kênh**: Sửa 5 trường hợp `except Exception` quá rộng trong kênh dẫn đến khuếch đại thử lại và tin nhắn bị mất im lặng | Giải quyết cạn kiệt pool kết nối Telegram ([#3050](https://github.com/HKUDS/nanobot/issues/3050)), nâng cao độ tin cậy của tất cả các kênh |
| [#2877](https://github.com/HKUDS/nanobot/pull/2877) | Bahtya | Sửa ánh xạ tên camelCase `e2eeEnabled` cho kênh Matrix | Cấu hình sử dụng ngay, loại bỏ sự bối rối cấu hình của người dùng |
| [#2860](https://github.com/HKUDS/nanobot/pull/2860) | Bahtya | Thống nhất số phiên bản: sử dụng `importlib.metadata` làm nguồn chân lý duy nhất | Loại bỏ sự không nhất quán phiên bản giữa `nanobot gateway` và `pyproject.toml` (0.4.1 vs 0.1.5) |
| [#2869](https://github.com/HKUDS/nanobot/pull/2869) | Bahtya | Dọn dẹp ký tự proxy Unicode trong lịch sử CLI | Sửa lỗi `UnicodeEncodeError` do emoji/đầu vào hỗn hợp trên Windows |
| [#2982](https://github.com/HKUDS/nanobot/pull/2982) | chengyongru | **Nén Phiên tự động (Auto Compact)** (Đã đóng, chức năng được hợp nhất vào dòng chính) | Giảm chi phí token hội thoại dài và độ trễ token đầu tiên, giải quyết chi phí "khởi động nguội" |

**Đánh giá Tiến độ Tổng thể**: Các hợp nhất hôm nay tập trung vào **cơ sở hạ tầng độ ổn định** — xử lý ngoại lệ, tính đúng đắn của cấu hình, khả năng tương thích đa nền tảng, đặt nền móng vững chắc cho việc mở rộng chức năng. Việc hợp nhất Auto Compact đánh dấu giai đoạn quản lý hội thoại chuyển sang giai đoạn thông minh hóa.

---

## 4. Điểm Nóng Cộng đồng

### Các Vấn đề Được Thảo Luận Nhiều Nhất

| Hạng mục | Issue/PR | Số bình luận | Yêu cầu Cốt lõi |
|:---|:---|:---:|:---|
| 1 | [#2927](https://github.com/HKUDS/nanobot/issues/2927) Khám phá và tạo kỹ năng tự động | 9 | **Sự tiến hóa tự động của tác nhân**: Người dùng mong muốn NanoBot chuyển từ hệ thống kỹ năng bị động sang chủ động nhận dạng mẫu hành vi, tự động tạo kỹ năng, giảm gánh nặng cấu hình thủ công |
| 2 | [#2947](https://github.com/HKUDS/nanobot/issues/2947) Siêu dữ liệu ngữ cảnh Runtime bị rò rỉ cho người dùng | 5 | **Làm sạch cấu trúc thông tin**: Siêu dữ liệu nội bộ (thời gian, ID Kênh) không nên hiển thị cho người dùng cuối, ảnh hưởng đến trải nghiệm sản phẩm |
| 3 | [#2958](https://github.com/HKUDS/nanobot/issues/2958) Cấu hình provider tùy chỉnh openai-responses | 3 | **Triển khai riêng cho doanh nghiệp**: Người dùng cần kết nối với điểm cuối tương thích OpenAI tự lưu trữ, tài liệu cấu hình cần được hoàn thiện |
| 4 | [#2757](https://github.com/HKUDS/nanobot/issues/2757) Provider OpenAI vẫn gửi `max_tokens` thay vì `max_completion_tokens` | 3 | **Theo dõi tương thích API**: Việc chậm trễ thích ứng với quy tắc tham số mới của OpenAI ảnh hưởng đến việc gọi các mô hình mới |

**Phân tích Yêu cầu**: Cộng đồng đang chuyển từ "có thể sử dụng" sang "sử dụng tốt" — lớp thông minh tự động (khám phá kỹ năng, nén hội thoại), làm sạch ranh giới quyền riêng tư, tính linh hoạt triển khai cấp doanh nghiệp trở thành tiêu điểm.

---

## 5. Lỗi và Độ ổn định

| Mức độ Nghiêm trọng | Issue | Mô tả | Trạng thái |
|:---|:---|:---|:---|
| 🔴 **Cao** | [#3073](https://github.com/HKUDS/nanobot/issues/3073) | **Vòng lặp vô hạn**: Tác nhân lặp lại cùng một lệnh gọi `read_file` trên `history.jsonl`, 15+ vòng lặp không có output | **Đã có PR [#3077](https://github.com/HKUDS/nanobot/pull/3077)** chờ hợp nhất: phát hiện lặp lại 3 lần sẽ ngắt và ép buộc tóm tắt |
| 🔴 **Cao** | [#3028](https://github.com/HKUDS/nanobot/issues/3028) | **Lỗi cơ chế heartbeat**: Heartbeat lặp lại tạo tác vụ hẹn giờ khi được kích hoạt, dẫn đến gửi tin nhắn lặp lại và không đọc phân tích ngữ cảnh | Chờ sửa, liên quan đến tái cấu trúc logic lập lịch |
| 🟡 **Trung bình** | [#3069](https://github.com/HKUDS/nanobot/issues/3069) | Ollama chạy cục bộ thành công nhưng yêu cầu NanoBot bị 502 | **Đã có PR [#3075](https://github.com/HKUDS/nanobot/pull/3075)** chờ hợp nhất: Cải thiện gợi ý khôi phục lỗi 502 của điểm cuối cục bộ |
| 🟡 **Trung bình** | [#3062](https://github.com/HKUDS/nanobot/issues/3062) | v0.1.5 Windows không thể truy cập tệp Desktop và chạy tệp bat/py | Chờ tài liệu cấu hình hoặc sửa lỗi quyền |
| 🟡 **Trung bình** | [#1783](https://github.com/HKUDS/nanobot/issues/1783) | Provider Codex mã hóa cứng thời gian chờ 60 giây không có thử lại, tác vụ định kỳ thất bại thường xuyên | Lâu ngày không sửa, cần nâng cao ưu tiên |
| 🟡 **Trung bình** | [#3064](https://github.com/HKUDS/nanobot/issues/3064) | Tác vụ định kỳ gửi nhiều lượt tin nhắn "đang suy nghĩ", quá nhiều nhiễu | Chờ tối ưu UX, cần phân biệt suy luận nội bộ và output cuối cùng |
| 🟢 **Thấp** | [#2757](https://github.com/HKUDS/nanobot/issues/2757) | Tương thích tham số `max_tokens`/`max_completion_tokens` | Nợ kỹ thuật, nên xử lý cùng với việc tái cấu trúc provider |

---

## 6. Yêu cầu Tính năng và Tín hiệu Lộ trình

| Yêu cầu Tính năng | Issue/PR | Tín hiệu Khả thi | Xác suất Bao gồm Trong Phiên bản Tiếp theo |
|:---|:---|:---|:---|
| **Định tuyến Mô hình (Kiểu OpenRouter)** | [#3070](https://github.com/HKUDS/nanobot/issues/3070) | Người dùng tự xây dựng thư viện mô hình, tự động chọn mô hình có chi phí-hiệu quả theo độ phức tạp nhiệm vụ | Cao |
| **Web UI Tích hợp Sẵn** | [#3059](https://github.com/HKUDS/nanobot/pull/3059) | **Đã có PR đầy đủ**: ứng dụng đơn trang hỗ trợ trò chuyện, lịch sử, chỉnh sửa cấu hình, quản lý hội thoại | **Cực kỳ Cao** |
| **Backend Nguyên bản MiniMax Anthropic** | [#3078](https://github.com/HKUDS/nanobot/pull/3078) | **Đã có PR**: hỗ trợ khả năng thinking/reasoning của mô hình M2.x | Cao |
| **Provider GitHub Copilot Trở lại** | [#2522](https://github.com/HKUDS/nanobot/pull/2522) | **Đã có PR**: loại bỏ phụ thuộc liteLLM, làm mới xác thực nguyên bản | Cao |
| **Hệ thống Đa Tác nhân Tự động Định tuyến** | [#2509](https://github.com/HKUDS/nanobot/pull/2509) | **Đã có PR**: định tuyến sub-agent dựa trên ý định, mỗi agent có cấu hình độc lập | Trung bình (thay đổi kiến trúc lớn) |
| **SelfTool v2 Tự tiến hóa** | [#2521](https://github.com/HKUDS/nanobot/pull/2521) | **Đã có PR**: tự kiểm tra/sửa đổi/gọi trạng thái runtime, tắt theo mặc định | Trung bình (đang kiểm tra bảo mật) |
| **MCP Cô lập theo Phạm vi Trò chuyện** | [#2424](https://github.com/HKUDS/nanobot/pull/2424) | **Đã có PR**: trường `allowedChats` thực hiện định tuyến MCP cho mỗi nhóm | Cao |
| **MCP Hỗ trợ ImageContent** | [#2416](https://github.com/HKUDS/nanobot/pull/2416) | **Đã có PR**: sửa lỗi hình ảnh trả về dưới dạng văn bản bị lỗi | Cao |
| **Middleware Bảo mật Có thể Cắm ToolGuard** | [#2374](https://github.com/HKUDS/nanobot/pull/2374) | **Đã có PR**: thay thế so khớp chuỗi mã hóa cứng, chống vượt rào | Trung bình (đang đánh giá kiến trúc) |
| **Provider Lịch Cục bộ** | [#3049](https://github.com/HKUDS/nanobot/pull/3049) | **Đã có PR**: CRUD đầy đủ, phát hiện xung đột, tìm kiếm khoảng thời gian trống | Cao |
| **Lưu trữ Tự động LLM-Wiki** | [#3052](https://github.com/HKUDS/nanobot/pull/3052) | **Đã có PR**: lưu trữ tự động dựa trên ngưỡng token, tập hợp lệnh | Cao |

**Tín hiệu Lộ trình**: Phiên bản v0.2.x rất có thể sẽ bao gồm **Web UI, mở rộng đa provider (MiniMax/Copilot), tăng cường MCP, công cụ lịch**. Hệ thống đa tác nhân và SelfTool có thể bị trì hoãn sang v0.3 do độ phức tạp kiến trúc.

---

## 7. Tóm tắt Phản hồi Người dùng

### Điểm Yếu
- **Trải nghiệm Windows bị gián đoạn**: Quyền truy cập tệp, sự cố lịch sử Unicode, số phiên bản không nhất quán ([#3062](httpshttps://github.com/HKUDS/nanobot/issues/3062), [#2869](https://github.com/HKUDS/nanobot/pull/2869), [#2860](https://github.com/HKUDS/nanobot/pull/2860))
- **Ma sát khi kết nối mô hình cục bộ**: Lời nhắc lỗi 502 Ollama không thân thiện, thiếu tài liệu cấu hình ([#3069](https://github.com/HKUDS/nanobot/issues/3069))
- **Nhiễu tác vụ định kỳ**: Thông báo kết quả thực thi, tin nhắn quá trình suy nghĩ làm phiền quá mức ([#3066](https://github.com/HKUDS/nanobot/issues/3066), [#3064](https://github.com/HKUDS/nanobot/issues/3064))
- **Trải nghiệm "Bị kẹt" của Proxy**: Vòng lặp vô hạn không có phản hồi, người dùng không biết có nên can thiệp không ([#3073](https://github.com/HKUDS/nanobot/issues/3073))

### Điểm Hài lòng
- **Khả năng Bảo trì Mã**: Người dùng chủ động khen ngợi "codebase Python sạch sẽ và dễ hiểu hơn so với OpenClaw" ([#2989](https://github.com/HKUDS/nanobot/issues/2989))
- **Giá trị Nén Hội thoại**: Auto Compact được công nhận là khả năng quan trọng "giải quyết chi phí khởi động nguội" ([#2982](https://github.com/HKUDS/nanobot/pull/2982))

### Thấu hiểu Kịch bản Sử dụng
- **Triển khai Riêng cho Doanh nghiệp**: Nhu cầu tùy chỉnh điểm cuối tương thích OpenAI, cô lập MCP cho mỗi cuộc trò chuyện làm nổi bật kịch bản đa người thuê.
- **Đồng hành Cảm xúc**: Cơ chế "heartbeat" dùng để chủ động quan tâm đến tâm trạng người dùng, nhưng lỗi kỹ thuật hiện tại đã phá hỏng trải nghiệm ([#3028](https://github.com/HKUDS/nanobot/issues/3028)).

---

## 8. Tồn đọng Cần xử lý

| Issue/PR | Thời gian tạo | Vấn đề | Nhắc nhở |
|:---|:---|:---|:---|
| [#1783](https://github.com/HKUDS/nanobot/issues/1783) | 2026-03-09 (34 ngày) | Thời gian chờ cứng 60 giây của Codex, 80% tác vụ định kỳ trong môi trường sản xuất thất bại | **Ưu tiên Cao**: Ảnh hưởng đến độ tin cậy chức năng cốt lõi, cần cấu hình hóa thời gian chờ + chiến lược thử lại |
| [#2757](https://github.com/HKUDS/nanobot/issues/2757) | 2026-04-02 (11 ngày) | Thích ứng quy tắc tham số mới của OpenAI | Nợ kỹ thuật, nên xử lý cùng với việc tái cấu trúc provider |
| [#2522](https://github.com/HKUDS/nanobot/pull/2522) | 2026-03-26 (18 ngày) | Provider GitHub Copilot | Chức năng đầy đủ, cần review cuối cùng để hợp nhất |
| [#2509](https://github.com/HKUDS/nanobot/pull/2509) | 2026-03-26 (18 ngày) | Hệ thống đa tác nhân | Thay đổi kiến trúc lớn, nên người bảo trì làm rõ lập trường lộ trình |
| [#2521](https://github.com/HKUDS/nanobot/pull/2521) | 2026-03-26 (18 ngày) | SelfTool v2 | Nhạy cảm về bảo mật, cần làm rõ rủi ro kích hoạt và quy trình xem xét |

---

*Ngày tạo nhật ký: 2026-04-13*  
*Nguồn dữ liệu: Kho lưu trữ GitHub HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Nhật ký Hàng ngày về Động thái Dự án Hermes Agent | 2026-04-13

---

## 1. Tổng quan Nhanh trong Ngày

Hermes Agent hôm nay duy trì **nhịp độ phát triển hoạt động cao**, mỗi ngày cập nhật 50 Issues và 50 PR, hình thành tỷ lệ 32:18 hoạt động/đóng, cho thấy nhu cầu cộng đồng dồi dào và đội ngũ bảo trì phản hồi tích cực. Tiêu điểm cốt lõi tập trung vào **sửa lỗi ổn định hệ sinh thái WeChat** (5+ Issue liên quan đã đóng), **tiếng gọi Web UI dài hạn** (#501 tiếp tục dẫn đầu thảo luận) và **tính mạnh mẽ của cơ sở hạ tầng** (systemd, phân tích đường dẫn, định tuyến mô hình). Đáng chú ý, không có phiên bản mới nào được phát hành hôm nay, nhưng yêu cầu về chu kỳ phát hành cố định của cộng đồng đã chính thức hình thành Issue (#8063). Mức độ lành mạnh tổng thể là tốt, nhưng vấn đề tồn đọng 1000+ Issue mở gây chú ý cho cộng đồng (#7335).

---

## 2. Phát hành Phiên bản

**Không có phiên bản mới nào được phát hành**

---

## 3. Tiến độ Dự án

### Các PR Quan trọng Đã Hợp nhất/Đóng Hôm Nay

| PR | Tác giả | Đóng góp Cốt lõi | Thúc đẩy Dự án |
|:---|:---|:---|:---|
| [#8675](https://github.com/NousResearch/hermes-agent/pull/8675) | MaramKandora | Thêm tệp koko | Bảo trì cơ sở hạ tầng |
| [#8660](https://github.com/NousResearch/hermes-agent/pull/8660) | ciolansteen | Thêm git làm phụ thuộc vào image cơ sở Docker | **Sửa lỗi WhatsApp bridge build thất bại**, giải quyết lỗi ENOENT khi chuẩn bị phụ thuộc npm |
| [#8670](https://github.com/NousResearch/hermes-agent/pull/8670) | sgaofen | Sửa lỗi con trỏ tuần tự bị kẹt trên nền tảng không có khả năng chỉnh sửa | **Cải thiện trải nghiệm người dùng WeChat và các nền tảng khác**, tránh ký tự `▉` còn sót lại |

### Các PR Chính Chờ Hợp nhất (Đã gửi hôm nay)

| PR | Tác giả | Đánh giá Giá trị |
|:---|:---|:---|
| [#8676](https://github.com/NousResearch/hermes-agent/pull/8676) | helix4u | **Cao**: Sửa lỗi `context_length` của provider tùy chỉnh bị ghi đè và mất, ảnh hưởng đến việc gọi mô hình trong môi trường sản xuất |
| [#8672](https://github.com/NousResearch/hermes-agent/pull/8672) [#8671](https://github.com/NousResearch/hermes-agent/pull/8671) | iRonin, sgaofen | **Cao**: Loạt PR đôi giải quyết vấn đề ghi đè `HOME` của sandbox dẫn đến mất thư mục người dùng thực, sửa lỗi tạo dịch vụ systemd và nhập module thất bại |
| [#8678](https://github.com/NousResearch/hermes-agent/pull/8678) | KeWang0622 | **Trung-Cao**: Sửa lỗi định tuyến sai các văn bản CJK đến các mô hình rẻ tiền, cải thiện trải nghiệm người dùng tiếng Trung |
| [#8677](https://github.com/NousResearch/hermes-agent/pull/8677) | teknium1 | **Trung bình**: Chuyển từ OpenClaw, từ chối placeholder mật khẩu yếu, nâng cao cơ sở bảo mật |
| [#8610](https://github.com/NousResearch/hermes-agent/pull/8610) | 0xbyt4 | **Cao**: Định tuyến trực quan đa phương thức gốc, tránh lãng phí các lệnh gọi Gemini Flash cho các mô hình hỗ trợ trực quan gốc (Claude Opus 4.6, GPT-5.4, v.v.), **giảm đáng kể chi phí token** |

**Đánh giá Tổng thể**: Các PR hôm nay tập trung vào hai chủ đề chính là **độ tin cậy của cơ sở hạ tầng** (quản lý đường dẫn/môi trường/dịch vụ) và **tối ưu hóa chi phí** (định tuyến trực quan), dự án có những bước tiến thực chất hướng tới sự sẵn sàng cho sản xuất.

---

## 4. Điểm Nóng Cộng đồng

### Các Issue Được Thảo Luận Nhiều Nhất

| Hạng mục | Issue | Số bình luận | 👍 | Phân tích Yêu cầu Cốt lõi |
|:---|:---|:---:|:---:|:---|
| 1 | [#501](https://github.com/NousResearch/hermes-agent/issues/501) Web UI Gateway | 10 | 1 | **Yêu cầu Chức năng Ưu tiên Cao Nhất Lâu dài**。Người dùng yêu cầu rõ ràng giao diện trình duyệt cục bộ, đối trọng với Claude Artifacts, OpenClaw Desktop. Giải pháp kỹ thuật đã chi tiết hóa đến streaming, hiển thị phong phú, truy cập hệ thống tệp cục bộ. [#8118](https://github.com/NousResearch/hermes-agent/issues/8118) hôm nay lặp lại, cho thấy tính bền vững của nhu cầu. |
| 2 | [#6393](https://github.com/NousResearch/hermes-agent/issues/6393) Lỗi khởi động sau khi cài đặt | 8 | 2 | **Điểm yếu onboarding người dùng mới**。Kiểm tra khả năng sử dụng của trình quét bảo mật Tirith thất bại dẫn đến lỗi khởi động, đã đóng nhưng phản ánh sự mong manh của quản lý phụ thuộc. |
| 3 | [#6475](https://github.com/NousResearch/hermes-agent/issues/6475) Chứng nhận đăng ký Claude hết hạn | 7 | 9 | **Vấn đề xác thực có ảnh hưởng cao**。Người dùng đăng ký Anthropic gặp lỗi "out of extra usage", khởi động lại/đăng nhập lại không có tác dụng, 9 lượt 👍 cho thấy ảnh hưởng rộng rãi. Có thể liên quan đến cơ chế làm mới token hoặc lỗi đồng bộ hóa hạn ngạch. |
| 4 | [#8063](https://github.com/NousResearch/hermes-agent/issues/8063) Cơ chế phát hành phiên bản ổn định theo chu kỳ cố định | 6 | 0 | **Yêu cầu Cốt lõi của Người dùng Doanh nghiệp**。Kịch bản triển khai sản xuất yêu cầu phiên bản ổn định hàng tháng/hàng tuần có thể dự đoán, sự lo lắng về độ ổn định do phát triển thường xuyên hiện tại. |
| 5 | [#7907](https://github.com/NousResearch/hermes-agent/issues/7907) `claw migrate` nên cảnh báo OpenClaw đang chạy | 5 | 1 | **Bảo mật công cụ di chuyển**。Cạnh tranh token hai tiến trình dẫn đến gián đoạn tin nhắn, đã đóng, nhưng #8502 cho thấy lệnh dọn dẹp liên quan vẫn có tính phá hoại. |

### Yêu cầu Cốt lõi Đằng sau Các Điểm Nóng

```
┌─────────────────────────────────────────────────────────┐
│  1. Hiện đại hóa lớp tương tác: CLI → Web UI là nhu cầu nâng cấp trải nghiệm mạnh mẽ nhất của người dùng    │
│  2. Độ tin cậy Cấp Doanh nghiệp: Phát hành ổn định, độ bền xác thực, bảo mật di chuyển           │
│  3. Tích hợp Sâu Hệ sinh thái WeChat: Nhu cầu thiết yếu của thị trường Trung Quốc, hôm nay 5+ Issue liên quan đã đóng   │
│  4. Khả năng dự đoán Chi phí: Tối ưu hóa định tuyến trực quan trực tiếp đáp ứng lo lắng kiểm soát chi phí token    │
└─────────────────────────────────────────────────────────┘
```

---

## 5. Lỗi và Độ ổn định

### Sắp xếp theo Mức độ Nghiêm trọng

| Mức độ Nghiêm trọng | Issue | Trạng thái | Mô tả | PR Fix |
|:---|:---|:---:|:---|:---|
| 🔴 **Cao** | [#6475](https://github.com/NousResearch/hermes-agent/issues/6475) | MỞ | Xác thực đăng ký Claude không ổn định ngẫu nhiên, ảnh hưởng đến chức năng cốt lõi của người dùng trả phí | Không có |
| 🔴 **Cao** | [#8340](https://github.com/NousResearch/hermes-agent/issues/8340) | MỞ | Dịch vụ backend `setsid + disown` Terminal khi khởi động tiến trình nền bị treo vô hạn | Không có |
| 🟡 **Trung bình** | [#8519](https://github.com/NousResearch/hermes-agent/issues/8519) | MỞ | Sử dụng đường dẫn Python đã phân tích của dịch vụ Systemd thay vì liên kết tượng trưng venv, dẫn đến lỗi nhập module | [#8672](https://github.com/NousResearch/hermes-agent/pull/8672) [#8671](https://github.com/NousResearch/hermes-agent/pull/8671) |
| 🟡 **Trung bình** | [#8326](https://github.com/NousResearch/hermes-agent/issues/8326) | ĐÓNG | Khối đen cuối tin nhắn chế độ luồng + lỗi hiển thị Markdown | [#8670](https://github.com/NousResearch/hermes-agent/pull/8670) |
| 🟡 **Trung bình** | [#7468](https://github.com/NousResearch/hermes-agent/issues/7468) | ĐÓNG | Định dạng tin nhắn WeChat suy thoái từ bảng thành