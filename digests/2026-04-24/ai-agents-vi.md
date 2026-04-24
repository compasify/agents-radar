# OpenClaw Sinh nhật 2026-04-24

> Vấn đề: 500 | PR: 500 | Dự án bao phủ: 13 | Thời gian tạo: 2026-04-24 00:18 UTC

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

# Nhật ký hoạt động dự án OpenClaw | 2026-04-24

## 1. Tổng quan hôm nay

OpenClaw đã duy trì mức độ hoạt động cực cao vào ngày hôm qua (2026-04-23): **500 cập nhật Vấn đề** (356 mới/hoạt động, 144 đã đóng) và **500 cập nhật PR** (318 chờ hợp nhất, 182 đã hợp nhất/đóng), mật độ thảo luận cộng đồng đạt đỉnh gần đây. Dự án vừa phát hành phiên bản v2026.4.22, tập trung vào việc bổ sung khả năng đa phương thức cho xAI. Rủi ro nổi bật hiện tại là **vấn đề thiếu phụ thuộc mở rộng được giới thiệu trong v2026.4.21** — phụ thuộc npm của các tiện ích mở rộng như Feishu/Nostr chưa được đóng gói đúng cách, dẫn đến sự cố hàng loạt khi cài đặt mới, với hơn 5 Vấn đề liên quan xuất hiện trong 24 giờ và một PR sửa lỗi khẩn cấp đã chờ hợp nhất. Ngoài ra, tỷ lệ đóng góp mã được AI hỗ trợ đã tăng đáng kể, cần chú ý đến chiều sâu của việc xem xét mã.

---

## 2. Phát hành phiên bản

### [v2026.4.22](https://github.com/openclaw/openclaw/releases/tag/v2026.4.22) — openclaw 2026.4.22

**Ngày phát hành**: 2026-04-22 (phát hành hôm qua)

**Cập nhật cốt lõi**:
| Module | Nội dung thay đổi |
|:---|:---|
| **Tạo ảnh xAI** | Thêm các mô hình `grok-imagine-image` / `grok-imagine-image-pro`, hỗ trợ chỉnh sửa dựa trên ảnh tham khảo (reference-image edits) |
| **Tổng hợp giọng nói xAI (TTS)** | 6 giọng nói xAI thời gian thực, hỗ trợ các định dạng MP3/WAV/PCM/G.711 |
| **Nhận dạng giọng nói xAI (STT)** | Thêm bản ghi âm `grok-stt` |
| **Phiên âm thời gian thực xAI** | Hỗ trợ luồng nhận dạng giọng nói thời gian thực |

**Lưu ý di chuyển**:
- Đây là phiên bản mở rộng khả năng, không có thay đổi gây lỗi đã biết
- Cần đảm bảo `providers.xai.apiKey` đã được cấu hình để sử dụng các chức năng mới của xAI

**Rủi ro liên quan đã biết**: Sự cố đóng gói phụ thuộc của v2026.4.21 có thể ảnh hưởng đến lộ trình nâng cấp của một số người dùng, khuyến nghị nâng cấp trực tiếp từ v2026.4.20 hoặc phiên bản cũ hơn lên v2026.4.22 để bỏ qua phiên bản có vấn đề.

---

## 3. Tiến độ dự án

### PR chính đã hợp nhất/đóng hôm qua (sắp xếp theo mức độ ảnh hưởng)

| PR | Tác giả | Trạng thái | Đóng góp cốt lõi |
|:---|:---|:---|:---|
| [#70488](https://github.com/openclaw/openclaw/pull/70488) | @ottodeng | **Đã hợp nhất** | **Sửa lỗi định tuyến tạo ảnh Azure OpenAI**: Giải quyết vấn đề `gpt-image-2` trỏ cứng đến `api.openai.com` trên điểm cuối Azure, hỗ trợ triển khai riêng tư cho doanh nghiệp |
| [#70503](https://github.com/openclaw/openclaw/pull/70503) | @ottodeng | **Đã hợp nhất** | **Phơi bày tham số sản xuất cho gpt-image-2**: Thêm điều khiển `quality` / `output_format` / `background` / `moderation`, hỗ trợ hiển thị kết xuất chi phí thấp ( `quality: "low"` ) |
| [#70741](https://github.com/openclaw/openclaw/pull/70741) | @Patrick-Erichsen | **Đã hợp nhất** | **Sửa lỗi xác thực ghép nối thiết bị Control UI**: Chấp nhận token thiết bị ghép nối để xác thực assistant-media, giải quyết vấn đề quyền phát lại phương tiện |
| [#67344](https://github.com/openclaw/openclaw/pull/67344) / [#67254](https://github.com/openclaw/openclaw/pull/67254) | @oliviareid-svg / @Joel-Claw | **Đã hợp nhất** | **Sửa lỗi proxy mạng riêng cho Google Generative AI**: Tôn trọng cấu hình `allowPrivateNetwork` của người dùng, giải quyết vấn đề tạo ảnh Gemini bị chặn bởi chính sách SSRF trong môi trường proxy |
| [#46325](https://github.com/openclaw/openclaw/pull/46325) | @dt-chenwenxiong | **Đã hợp nhất** | **Sửa định dạng ảnh nhà cung cấp tương thích OpenAI**: Ngừng định dạng cứng `input_image` cho tất cả nhà cung cấp, khôi phục hoạt động bình thường cho các mô hình trực quan như OpenRouter |
| [#50492](https://github.com/openclaw/openclaw/pull/50492) | @mculp | **Đã hợp nhất** | **Nhà cung cấp hiểu phương tiện OpenRouter**: Công cụ `image` hỗ trợ mô hình trực quan OpenRouter (như `mimo-v2-omni`) |
| [#56678](https://github.com/openclaw/openclaw/pull/56678) | @YoungMoneyInvestments | **Đã hợp nhất** | **Chuẩn hóa ID hiểu phương tiện cho openai-codex / github-copilot**: Sửa chức năng phân tích hình ảnh cho hai nhà cung cấp OAuth này |
| [#57357](https://github.com/openclaw/openclaw/pull/57357) | @Aoiujz | **Đã hợp nhất** | **Thời gian chờ tạo ảnh có thể định cấu hình**: Cung cấp kiểm soát thời gian chờ riêng cho các nhà cung cấp hình ảnh chậm |
| [#70832](https://github.com/openclaw/openclaw/pull/70832) | @ayesha-aziz123 | **Đã hợp nhất** | **Sửa điều kiện chạy đua hết thời gian Cron**: Ngăn chặn các tác vụ nền ghi đè kết quả hết thời gian sau khi hết thời gian |

**Đánh giá tiến độ tổng thể**: Các PR được hợp nhất hôm qua tập trung vào **bổ sung khả năng đa phương thức** (định tuyến, định dạng, tham số cho tạo/hiểu hình ảnh) và **thích ứng triển khai doanh nghiệp** (Azure, proxy mạng riêng, SSRF), dự án đã có một bước tiến quan trọng về mức độ sẵn sàng sản xuất.

---

## 4. Điểm nóng cộng đồng

### Các vấn đề được thảo luận sôi nổi nhất

| Thứ hạng | Vấn đề/PR | Số lượng bình luận | Yêu cầu cốt lõi |
|:---|:---|:---:|:---|
| 🔥1 | [#49971](https://github.com/openclaw/openclaw/issues/49971) RFC: Bản sắc Agent gốc & Xác minh Tin cậy | **102** | **Cơ sở hạ tầng nhận dạng phi tập trung**: MolTrust đề xuất khung xác minh nhận dạng agent gốc dựa trên ERC-8004 + W3C DID/VC, cố gắng giải quyết vấn đề xây dựng lòng tin giữa các agent AI — đây là đề xuất quan trọng để OpenClaw phát triển thành mạng hợp tác đa agent |
| 🔥2 | [#75](https://github.com/openclaw/openclaw/issues/75) Ứng dụng Clawdbot Linux/Windows | **92** / 👍71 | **Sự tương đương của ứng dụng khách trên nhiều nền tảng**: macOS/iOS/Android đã có ứng dụng gốc, người dùng Linux/Windows đã bị loại trừ khỏi bộ tính năng đầy đủ trong thời gian dài, đây là **yêu cầu chức năng có nhiều phiếu bầu nhất** |
| 🔥3 | [#70457](https://github.com/openclaw/openclaw/issues/70457) Lỗi thiếu `@larksuiteoapi/node-sdk` và `nostr-tools` khi cài đặt toàn cục npm | **26** / 👍3 | **Thảm họa phụ thuộc v2026.4.21**: Cài đặt mới gây lỗi, ảnh hưởng đến các tiện ích mở rộng Feishu/Lark và Nostr, xuất hiện dày đặc trong 24 giờ |
| 4 | [#7200](https://github.com/openclaw/openclaw/issues/7200) Hỗ trợ hội thoại thoại thời gian thực | **22** / 👍23 | **Thoại thời gian thực cấp độ điện thoại**: Âm thanh luồng hai chiều Twilio/WebRTC, tương ứng với nhu cầu-cung cấp được công bố cùng với khả năng xAI TTS/STT hôm qua |
| 5 | [#36994](https://github.com/openclaw/openclaw/issues/36994) Lỗi liên tục Exec và công cụ | **19** | **Tính ổn định của hệ thống công cụ**: Trình duyệt/exec/read/write liên tục bị lỗi sau lần chạy đầu tiên, đặc biệt là trên đường dẫn cài đặt Pinokio |

**Phân tích yêu cầu**: Cộng đồng đang chuyển đổi từ "có thể sử dụng" sang "dễ sử dụng + đáng tin cậy" — xác minh nhận dạng (#49971) phản ánh sự lo lắng về lòng tin trong hợp tác đa agent, thoại thời gian thực (#7200) đồng bộ với việc phát hành xAI để xác minh tính xác thực của nhu cầu, trong khi khoảng trống bao phủ nền tảng (#75) tiếp tục hạn chế sự mở rộng cơ sở người dùng.

---

## 5. Lỗi và tính ổn định

### Sắp xếp theo mức độ nghiêm trọng

| Ưu tiên | Vấn đề | Loại | Trạng thái | Phạm vi ảnh hưởng | Fix PR |
|:---|:---|:---|:---|:---|:---|
| **P0 🔴** | [#70457](https://github.com/openclaw/openclaw/issues/70457) / [#70292](https://github.com/openclaw/openclaw/issues/70292) / [#70198](https://github.com/openclaw/openclaw/issues/70198) / [#70346](https://github.com/openclaw/openclaw/issues/70346) / [#70587](https://github.com/openclaw/openclaw/issues/70587) | **Hồi quy: Thiếu phụ thuộc cài đặt toàn cục** | 3 Đã đóng / 2 Mở | **Tất cả người dùng mới** (macOS/Ubuntu/Windows), lỗi ngay khi `npm install -g` | [#70819](https://github.com/openclaw/openclaw/pull/70819) Đã mở (sửa lỗi tin cậy liên kết tượng trưng) |
| **P0 🔴** | [#70096](https://github.com/openclaw/openclaw/issues/70096) | **Sự cố nâng cấp: doctor --fix của v2026.4.21 thất bại và làm hỏng cấu hình** | Đã đóng | Người dùng nâng cấp, `openclaw.json` bị ghi đè thành cấu hình tối thiểu không hợp lệ | Đã sửa (v2026.4.22) |
| **P1 🟡** | [#68735](https://github.com/openclaw/openclaw/issues/68735) | **Hồi quy: Yêu cầu LLM bị nhà cung cấp từ chối schema** | Mở | Người dùng GitHub Copilot / gpt-5-mini, được giới thiệu trong v2026.4.15 | Đang điều tra |
| **P1 🟡** | [#67936](https://github.com/openclaw/openclaw/issues/67936) | **Hồi quy: Khởi chạy kênh Matrix thất bại** | Mở | Người dùng Matrix, `Cannot find package 'openclaw'` | Đang điều tra |
| **P1 🟡** | [#53317](https://github.com/openclaw/openclaw/issues/53317) | **Hồi quy: Token OAuth Gateway bị ghi đè bởi bộ nhớ đệm** | Mở | Người dùng openai-codex, được giới thiệu trong v2026.3.22 | Đang điều tra |
| **P1 🟡** | [#67888](https://github.com/openclaw/openclaw/issues/67888) | **Khả năng tương thích ngược Opus 4.7: Thiếu phát hiện tư duy thích ứng** | Mở | Người dùng `claude-opus-4-7`, lỗi 400 mỗi vòng đầu tiên | [#70828](https://github.com/openclaw/openclaw/pull/70828) Đã mở (cấu hình bộ đệm stdout) |
| **P2 🟢** | [#60213](https://github.com/openclaw/openclaw/issues/60213) | **Phiên bị mất lặng lẽ sau khi nén** | Mở | Người dùng phiên dài, mất dữ liệu | Đang điều tra |
| **P2 🟢** | [#51056](https://github.com/openclaw/openclaw/issues/51056) | **Thiếu tiêu đề xác thực 401 OpenRouter** | Mở | Người dùng OpenRouter | [#46325](https://github.com/openclaw/openclaw/pull/46325) Đã hợp nhất (liên quan nhưng có thể không bao phủ đầy đủ) |

**Đánh giá tính ổn định**: v2026.4.21 là phiên bản có chất lượng tệ nhất gần đây, với lỗi đóng gói phụ thuộc và lộ trình nâng cấp bị trục trặc kép. Khuyến nghị người bảo trì cân nhắc **sửa lỗi nóng khẩn cấp (v2026.4.21-hotfix)** hoặc tăng tốc quảng bá v2026.4.22.

---

## 6. Yêu cầu chức năng và tín hiệu lộ trình

| Yêu cầu chức năng | Vấn đề | Mức độ phổ biến | Liên kết với PR hiện tại | Xác suất đưa vào phiên bản tiếp theo |
|:---|:---|:---:|:---|:---|
| **Cuộc gọi thoại thời gian thực** | [#7200](https://github.com/openclaw/openclaw/issues/7200) | 👍23 | XAI TTS/STT vừa ra mắt; [#70765](https://github.com/openclaw/openclaw/pull/70765) thêm plugin Google Meet bao gồm DTMF cuộc gọi thoại | **Cao** |
| **Ứng dụng máy tính để bàn Linux/Windows** | [#75](https://github.com/openclaw/openclaw/issues/75) | 👍71 | Không có PR hoạt động | Trung bình (yêu cầu tài nguyên lớn) |
| **Nhà cung cấp gốc NVIDIA NIM** | [#50898](https://github.com/openclaw/openclaw/issues/50898) | 👍5 | Không có | Trung bình |
| **Hệ thống mở rộng plugin UI** | [#66944](https://github.com/openclaw/openclaw/issues/66944) | 👍3 | [#65972](https://github.com/openclaw/openclaw/pull/65972) Kỹ năng Bluesky MCP (xác minh kiến trúc) | Khá cao |
| **Kỹ năng xã hội Bluesky** | — | — | [#65972](https://github.com/openclaw/openclaw/pull/65972) Chờ hợp nhất | **Cao** |
| **Kênh QA thời gian thực Discord** | — | — | [#70792](https://github.com/openclaw/openclaw/pull/70792) Chờ hợp nhất | **Cao** |
| **Bảo vệ SSRF cấp mạng** | — | — | [#70044](https://github.com/openclaw/openclaw/pull/70044) Chờ hợp nhất (proxy chuyển tiếp Caddy) | Khá cao |
| **Thực thi chính sách đầu ra không thể bỏ qua** | [#56349](https://github.com/openclaw/openclaw/issues/56349) | — | Không có | Trung bình (cơ sở hạ tầng bảo mật) |
| **Xác minh nhận dạng agent gốc** | [#49971](https://github.com/openclaw/openclaw/issues/49971) | 102 bình luận | Không có | Trung bình (vị trí chiến lược, cần tiêu chuẩn hóa) |

---

## 7. Tóm tắt phản hồi người dùng

### Điểm yếu (trích xuất nguyên văn)

> *"Fresh installation using `npm install -g openclaw@latest` fails... required extension dependencies such as `@larksuiteoapi/node-sdk` and `nostr-tools` are missing"* — [#70457](https://github.com/openclaw/openclaw/issues/70457)

> *"After upgrading from 2026.4.14 to 2026.4.15, configured use model github-copilot/gpt-5-mini, worked at first message, failed in later messages"* — [#68735](https://github.com/openclaw/openclaw/issues/68735)

> *"Session was silently abandoned after compaction, causing complete loss of conversation context"* — [#60213](https://github.com/openclaw/openclaw/issues/60213)

> *"Gateway startup takes approximately 20 minutes... chat.history fails to load"* — [#70050](https://github.com/openclaw/openclaw/issues/70050)

### Kịch bản sử dụng và Mức độ hài lòng

| Kịch bản | Mức độ hài lòng | Phản hồi điển hình |
|:---|:---|:---|
| **Ứng dụng gốc macOS** | ✅ Cao | Tính năng đầy đủ, nhưng Cron UI có vấn đề giải mã JSON [#38971](https://github.com/openclaw/openclaw/issues/38971) |
| **Tạo ảnh đa nhà cung cấp** | ⚠️ Biến động | Cải thiện sau khi sửa lỗi Azure/OpenRouter, nhưng xác minh cấu hình dễ dàng xóa khóa [#50659](https://github.com/openclaw/openclaw/issues/50659) |
| **Quản lý phiên dài/trí nhớ** | ❌ Thấp | Mất ngữ cảnh sau khi nén, chặn khởi động, chế độ cầu nối wiki báo cáo 0 xuất [#66082](https://github.com/openclaw/openclaw/issues/66082) |
| **Triển khai doanh nghiệp/riêng tư** | ⚠️ Đang cải thiện | Khả năng sử dụng được cải thiện sau khi sửa lỗi định tuyến Azure, proxy mạng riêng |
| **Trải nghiệm Windows** | ❌ Thấp | Lỗi cài đặt, cửa sổ dòng lệnh nền nhấp nháy [#70238](https://github.com/openclaw/openclaw/issues/70238), chương trình node bị kẹt [#39038](https://github.com/openclaw/openclaw/issues/39038) |

---

## 8. Tồn đọng cần xử lý

### Các vấn đề quan trọng chưa phản hồi trong thời gian dài (>30 ngày, giá trị cao/ảnh hưởng cao)

| Vấn đề | Ngày tạo | Số ngày | Vấn đề cốt lõi | Nhắc nhở |
|:---|:---|:---:|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Ứng dụng Clawdbot Linux/Windows | 2026-01-01 | **113** | **Yêu cầu chức năng có nhiều phiếu bầu nhất**, khoảng trống bao phủ nền tảng hạn chế sự tăng trưởng | Cần quyết định sản phẩm và phân bổ tài nguyên |
| [#7200](https://github.com/openclaw/openclaw/issues/7200) Hội thoại thoại thời gian thực | 2026-02-02 | **81** | Phù hợp với chiến lược phát hành xAI, nền tảng kỹ thuật đã có sẵn | Khuyến nghị phối hợp với plugin Google Meet [#70765](https://github.com/openclaw/openclaw/pull/70765) |
| [#49971](https://github.com/openclaw/openclaw/issues/49971) RFC Xác minh nhận dạng agent | 2026-03-18 | **37** | Đề xuất nhận dạng phi tập trung với 102 bình luận, quan trọng cho vị trí chiến lược | Cần phản hồi đánh giá RFC từ người bảo trì cốt lõi |
| [#17101](https://github.com/openclaw/openclaw/issues/17101) Tin nhắn thoại Telegram không được phiên âm | 2026-02-15 | **68** | Vấn đề hỗ trợ định dạng âm thanh Opus | Có thể được giải quyết bằng khả năng STT của xAI |
| [#18598](https://github.com/openclaw/openclaw/issues/18598) macOS Sequoia cách ly tải xuống Chrome không thành công | 2026-02-16 | **67** | Chức năng cốt lõi của công cụ trình duyệt, ảnh hưởng đến quy trình làm việc tạo dữ liệu | Cần sửa lỗi chuyên sâu cho module trình duyệt |
| [#51056](https://github.com/openclaw/openclaw/issues/51056) Thiếu tiêu đề xác thực 401 OpenRouter | 2026-03-20 | **35** | Chất lượng tích hợp nhà cung cấp | [#46325](https://github.com/openclaw/openclaw/pull/46325) Đã hợp nhất, cần xác minh xem đã giải quyết hoàn toàn chưa |
| [#32638](https://github.com/openclaw/openclaw/issues/32638) Groq + mô hình suy luận lỗi 400 | 2026-03-03 | **52** | Khả năng tương thích tham số nhà cung cấp cụ thể | Blogger chặn mở rộng hệ sinh thái mô hình suy luận |

---

**Thời gian tạo báo cáo**: 2026-04-24  
**Nguồn dữ liệu**: github.com/openclaw/openclaw

---

## So sánh ngang hàng của sinh thái

# Phân tích so sánh ngang hàng sinh thái mở nguồn Trợ lý AI Cá nhân / Agent Tự trị | 2026-04-24

---

## 1. Toàn cảnh sinh thái

Sinh thái trợ lý AI cá nhân mã nguồn mở đang ở một **bước ngoặt quan trọng từ "có chức năng sử dụng được" sang "sẵn sàng cho sản xuất"**. Các dự án hàng đầu (OpenClaw, ZeroClaw, Hermes Agent) có số lượng Vấn đề + PR trung bình hàng ngày vượt quá 100, cho thấy khối lượng công việc của cộng đồng đạt mức của các dự án mã nguồn mở thương mại; khả năng bảo mật và tin cậy (chuỗi kiểm toán, bảo vệ SSRF, cô lập quyền) đã trở thành ưu tiên chung, phản ánh sự thâm nhập của các quyết định mua hàng B2B; triển khai biên/ngoại tuyến (Ollama, llama.cpp, Liquid AI) và khả năng đa phương thức (TTS/STT, tạo ảnh) đang tạo thành chiến trường cạnh tranh khác biệt tiếp theo. Đồng thời, rủi ro chất lượng hồi quy đã tăng lên đáng kể — nhiều dự án đã gặp sự cố cấp P0 do tốc độ phát hành phiên bản quá nhanh, nợ ổn định đang tích lũy.

---

## 2. So sánh mức độ hoạt động của từng dự án

| Dự án | Vấn đề (24h) | PR (24h) | Phát hành phiên bản | Tỷ lệ hợp nhất/đóng | Đánh giá sức khỏe |
|:---|:---:|:---:|:---|:---|:---|
| **OpenClaw** | 500 (356 mới/hoạt động, 144 đóng) | 500 (318 chờ hợp nhất, 182 đã hợp nhất/đóng) | v2026.4.22 | 36% PR | 🔶 **Hoạt động cao + rủi ro cao**：hồi quy P0 lỗi đóng gói phụ thuộc v2026.4.21, mật độ cộng đồng đạt đỉnh nhưng cửa ngõ chất lượng chịu áp lực |
| **NanoBot** | 14 (5 hoạt động, 9 đóng) | 20 (11 chờ hợp nhất, 9 đã hợp nhất/đóng) | Không có | 45% PR | 🟢 **Lặp lại ổn định**：4 PR chuỗi quản trị bộ nhớ Agent đóng vòng, cần quan sát hồi quy bộ nhớ v0.1.5.post2 |
| **Hermes Agent** | 50 (44 hoạt động, 6 đóng) | 50 (35 chờ hợp nhất, 15 đã hợp nhất/đóng) | v0.11.0 "The Interface" | 30% PR | 🔶 **Phát hành cột mốc + áp lực ổn định**：viết lại React/Ink CLI hoàn tất, nhưng tỷ lệ đóng Vấn đề chỉ 12% |
| **PicoClaw** | 36 (36 hoạt động, 0 đóng) | 45 (39 chờ hợp nhất, 6 đã xử lý) | v0.2.7-nightly | 13% PR | 🔴 **Tồn đọng cao**：Vấn đề đóng 0, 39 PR chờ xem xét, tắc nghẽn xem xét cản trở tiến độ v0.3.0 |
| **NanoClaw** | 16 (15 hoạt động, 1 đóng) | 27 (9 chờ hợp nhất, 18 đã hợp nhất/đóng) | Không có | 67% PR | 🟢 **Ngày bàn giao chất lượng cao**：7 sửa lỗi bảo mật + hoàn thành luồng Signal, cải thiện độ tin cậy sản xuất v2 |
| **NullClaw** | 11 (8 hoạt động, 3 đóng) | 0 | Không có | — | 🔴 **Trạng thái cảnh báo**：Hoạt động PR bằng không, lỗi hệ thống cấu hình + khủng hoảng tương thích Android không được phản hồi |
| **IronClaw** | 37 (30 hoạt động, 7 đóng) | 50 (43 chờ hợp nhất, 7 đã hợp nhất/đóng) | Không có | 14% PR | 🔶 **Thời kỳ tái cấu trúc kiến trúc**：Tiến độ Đơn nguyên Engine V2 đang diễn ra, 43 PR tồn đọng + QA Bash lộ ra khoảng trống chất lượng tích hợp |
| **LobsterAI** | 6 (6 hoạt động, 0 đóng) | 13 (0 chờ hợp nhất, 13 đã hợp nhất/đóng) | Không có (hợp nhất nội dung 2026.04.22) | 100% PR | 🟢 **Phát triển hiệu quả, phản hồi cộng đồng chậm**：13/13 PR hợp nhất nhưng Vấn đề đóng 0, tài liệu/xử lý tồn đọng không đủ |
| **Moltis** | 9 (4 hoạt động, 5 đóng) | 12 (6 chờ hợp nhất, 6 đã hợp nhất/đóng) | Không có | 50% PR | 🟢 **Cân bằng lành mạnh**：100% lỗi nghiêm trọng cao được sửa trong ngày, nợ UI/UX bắt đầu lộ diện |
| **CoPaw** | 50 (26 hoạt động, 24 đóng) | 50 (16 chờ hợp nhất, 34 đã hợp nhất/đóng) | v1.1.3.post1 + v1.1.4-beta.1 | 68% PR | 🟢 **Phản ứng nhanh**：Defender sửa lỗi nóng 24h, nhưng nợ độ tin cậy (treo, gián đoạn) đang tích lũy |
| **ZeptoClaw** | 19 (11 hoạt động, 8 đóng) | 17 (3 chờ hợp nhất, 14 đã hợp nhất/đóng) | Không có | 82% PR | 🟢 **Hiệu quả + Tập trung chiến lược**：Ba lần liên tiếp cơ sở hạ tầng bảo mật, định vị "chiến hào 6MB" rõ ràng, đêm trước thương mại hóa |
| **ZeroClaw** | 50 (45 hoạt động, 5 đóng) | 50 (34 chờ hợp nhất, 16 đã hợp nhất/đóng) | Không có (đang chạy nước rút v0.7.4) | 32% PR | 🔶 **Giai đoạn phát triển dày đặc**：Di chuyển hàng loạt Schema v3 cản trở đường chính, khả năng tương thích Anthropic/Claude 4.7 bị cắt đứt |

> **Phân tầng hoạt động**: OpenClaw, ZeroClaw, CoPaw, Hermes Agent nằm trong **phân khúc siêu hoạt động >100 mục/ngày**; NanoBot, Moltis, ZeptoClaw tạo thành **phân khúc ổn định 30-50 mục/ngày**; NullClaw, TinyClaw rơi vào **phân khúc hoạt động thấp/ngừng hoạt động <20 mục/ngày**.

---

## 3. Vị thế của OpenClaw trong hệ sinh thái

| Chiều | Hiệu suất OpenClaw | So sánh hệ sinh thái |
|:---|:---|:---|
| **Quy mô cộng đồng** | 500 Vấn đề + 500 PR / 24h, quy mô tuyệt đối số 1 | ZeroClaw, CoPaw, Hermes Agent cùng quy mô nhưng phân tán trên nhiều hệ thống con; NanoClaw, ZeptoClaw kém 10 lần về quy mô |
| **Lộ trình kỹ thuật** | **Ưu tiên đa nhà cung cấp**: Sửa lỗi/phát hành đồng thời xAI, Azure OpenAI, OpenRouter, Google Generative AI | ZeroClaw tập trung vào hệ thống cấu hình doanh nghiệp (Schema v3); NanoClaw tập trung vào bảo mật container + ma trận kênh; ZeptoClaw đặt cược vào biên/hạn chế dung lượng |
| **Lợi thế cốt lõi** | ① **Mật độ khả năng đa phương thức cao nhất** (hoàn thiện toàn bộ luồng tạo/hiểu ảnh/TTS/STT trong cùng một ngày); ② **Thích ứng triển khai doanh nghiệp nhanh nhất** (proxy Azure riêng tư, proxy mạng riêng, chính sách SSRF phản hồi 24h); ③ **Chiều sâu thảo luận cộng đồng** (RFC xác minh nhận dạng agent #49971 102 bình luận) | So sánh: Hermes Agent sắp xếp proxy phụ sâu hơn; Moltis tối ưu hóa bộ đệm KV LLM cục bộ chuyên biệt hơn; NanoClaw kiểm toán bảo mật có hệ thống hơn |
| **Rủi ro cấu trúc** | **Dao động chất lượng phiên bản lớn**: Hồi quy P0 lỗi đóng gói phụ thuộc v2026.4.21 vs. bùng nổ khả năng v2026.4.22, mô hình "phát hành - cứu hỏa" không bền vững | ZeroClaw cũng bị cản trở bởi quá trình di chuyển Schema v3; CoPaw có cơ chế sửa lỗi nóng trưởng thành hơn nhưng nợ kiến trúc cơ bản sâu hơn |

**Đánh giá vị thế**: OpenClaw là tiêu chuẩn **"ưu tiên chiều rộng, thúc đẩy tốc độ"** trong hệ sinh thái — bao phủ nhanh nhất các khả năng nhà cung cấp mới, các kịch bản triển khai doanh nghiệp rộng nhất, nhưng cần chuyển đổi sang **"chiều sâu + chất lượng"** để phù hợp với quy mô cộng đồng của nó.

---

## 4. Các hướng kỹ thuật được quan tâm chung

| Hướng kỹ thuật | Dự án liên quan | Yêu cầu cụ thể | Mức độ khẩn cấp |
|:---|:---|:---|:---|
| **Thoại thời gian thực/Cuộc gọi cấp độ điện thoại** | OpenClaw (#7200, 22 bình luận, 👍23), NanoBot (Vấn đề #2152), NanoClaw (#1879 PR) | Phát hành xAI TTS/STT xác minh tính xác thực của nhu cầu; Luồng âm thanh hai chiều Twilio/WebRTC | 🔥🔥🔥 |
| **Ngắt kết nối tương thích Claude/Anthropic** | OpenClaw (#67888, Opus 4.7 tư duy thích ứng), NanoBot (#3417, nhiệt độ mã hóa cứng), ZeroClaw (#6007, gửi nhiệt độ bắt buộc) | Thiếu cơ chế giám sát thay đổi API của nhà cung cấp, "lỗi 400 mỗi vòng đầu tiên" trở thành điểm đau chung | 🔥🔥🔥 |
| **Thực thi an toàn/Tuân thủ kiểm toán** | NanoClaw (7 cuộc kiểm toán CSO), ZeptoClaw (chuỗi kiểm toán SHA-256 + SSRF + ba lần liên tiếp SHA256), ZeroClaw (phê duyệt đa kênh #6010), OpenClaw (#49971 DID/VC) | Vượt qua ngưỡng từ "có chức năng sử dụng được" sang "hợp quy mua hàng", chuỗi băm, cô lập quyền, xác thực lại trở thành tiêu chuẩn | 🔥🔥🔥 |
| **Triển khai cục bộ/biên/ngoại tuyến** | ZeptoClaw (#539 Ollama/llama.cpp quay lui, #541 Liquid AI), CoPaw (#3759 Unsloth, #1427 Ollama/LMStudio), Moltis (#855 tối ưu hóa bộ đệm KV), ZeroClaw (#5962 gọi công cụ Ollama), PicoClaw (#2496 Intel OpenVINO) | "Agent chỉ hỗ trợ LLM đám mây không phù hợp với nhà máy/tàu mỏ/cảm biến từ xa" — phân hóa kiến trúc do kịch bản thúc đẩy | 🔥🔥🔥 |
| **Hoàn thiện hệ sinh thái MCP** | Moltis (#851/#852 xác thực lại OAuth, #840 MCP Skill), ZeroClaw (cầu nối WASM #5912), OpenClaw, Hermes Agent (#3947 tuần tự hóa tham số) | Cắt bớt mô tả công cụ, hết hạn OAuth, lỗi xác thực Zod — khoảng cách giữa "tiêu chuẩn giao thức" và "độ tin cậy sản xuất" | 🔥🔥🔥 |
| **Cứng hóa/Di chuyển hệ thống cấu hình** | ZeroClaw (Schema v3 #5947), ZeptoClaw (#530 phiên bản hóa cấu hình), NanoClaw (di chuyển v1→v2), OpenClaw (doctor --fix của v2026.4.21 làm hỏng cấu hình) | Khủng hoảng khả năng tương thích ngược của cấu hình trong quá trình lặp lại nhanh chóng, "nâng cấp gây lỗi" lặp đi lặp lại | 🔥🔥 |
| **Ứng dụng máy tính để bàn đa nền tảng** | OpenClaw (#75, 👍71, 113 ngày), Hermes Agent (bổ sung chức năng TUI v2 #12130), CoPaw (#3555 Treo khi khởi chạy Windows), LobsterAI (#15 Lỗi 40 nguyên nhân do Electron bị treo) | Nhu cầu công bằng từ macOS ưu tiên → Linux/Windows tương đương, căng thẳng với chi phí phân mảnh nền tảng | 🔥🔥 |
| **Quản trị bộ nhớ/Ngữ cảnh** | NanoBot (4 PR giải quyết triệt để sự phình to của history.jsonl), OpenClaw (#60213 Mất phiên sau khi nén), ZeroClaw (#5844 Trọng số bộ nhớ quá cao), IronClaw (Tách biệt khả năng/hành động Engine V2) | Sự phình to của trạng thái sau khi Agent chạy dài hạn, mất kiểm soát token, ô nhiễm ngữ cảnh — thách thức cốt lõi của kiến trúc Agent | 🔥🔥 |

---

## 5. Phân tích định vị khác biệt

| Dự án | Trọng tâm chức năng | Người dùng mục tiêu | Khác biệt chính về kiến trúc |
|:---|:---|:---|:---|
| **OpenClaw** | Bao phủ đa nhà cung cấp, khả năng đa phương thức, thích ứng triển khai doanh nghiệp | Nhóm kỹ thuật/Nhà phát triển doanh nghiệp | Hệ sinh thái tiện ích mở rộng Node.js, mô hình phụ thuộc npm (lỗi đóng gói hôm nay) |
| **NanoBot** | Quản trị bộ nhớ Agent, IM đa kênh (WhatsApp/Feishu/Telegram) | Doanh nghiệp nhỏ/Nhóm tự động hóa | Kiến trúc liên kết Gateway-Agent Python, tác vụ định kỳ yêu cầu khởi động lại |
| **Hermes Agent** | Sắp xếp proxy phụ, TUI React/Ink, hệ thống plugin | Nhà phát triển/Người dùng cá nhân cao cấp | Kết hợp Rust + TypeScript, kiến trúc tách biệt bộ công cụ proxy phụ dẫn đầu |
| **PicoClaw** | Triển khai nhúng/biên (Raspberry Pi, NXP i.MX93) | Nhà phát triển IoT/Phần cứng | Thiết kế nhẹ, nhưng tắc nghẽn xem xét cản trở lặp lại |
| **NanoClaw** | Bảo mật container, kênh Signal/riêng tư, gốc Apple Silicon | Doanh nghiệp nhạy cảm về bảo mật/Người dùng riêng tư | Sandbox Docker + cô lập kênh, kiểm toán CSO thúc đẩy đường cơ sở bảo mật |
| **NullClaw** | Xây dựng Zig, phụ thuộc tối thiểu | Người đam mê lập trình hệ thống | Dự án thử nghiệm bằng ngôn ngữ Zig, hiện đang bị đình trệ |
| **IronClaw** | Nền tảng lưu trữ, kiến trúc Engine V2, cô lập plugin WASM | Nhà cung cấp SaaS/Nhà phát triển nền tảng | Thời kỳ tái cấu trúc kiến trúc nặng, thiết kế thu thập trạng thái + phụ thuộc PostgreSQL |
| **LobsterAI** | IM đa agent (Discord/Telegram/WeCom), LM Studio | Doanh nghiệp Trung Quốc/Người dùng hệ sinh thái WeChat | Kiến trúc Electron + RPC, minh bạch về tốc độ phát hành phiên bản không đủ |
| **Moltis** | Tối ưu hóa LLM cục bộ, hệ sinh thái MCP, kênh Signal | Người dùng tuân thủ quyền riêng tư Châu Âu/Triển khai cục bộ | Lõi Rust, tối ưu hóa bộ đệm KV + chuẩn hóa schema chi tiết |
| **CoPaw** | Máy tính để bàn Windows, chính sách bảo mật, mô hình cục bộ Unsloth | Người dùng Trung Quốc/Môi trường doanh nghiệp Windows | Toàn bộ stack Python, vấn đề tương thích Defender + conda-unpack nổi bật |
| **ZeptoClaw** | Thể tích cực đại (6MB), biên/ngoại tuyến, thực thi đáng tin cậy | Công nghiệp/IoT/Nhà đầu tư | Toàn bộ stack Rust, "ngân sách thể tích kiểm soát CI" được ghi vào CI, đêm trước thương mại hóa |
| **ZeroClaw** | Hệ thống cấu hình doanh nghiệp, phê duyệt đa kênh, trạng thái chia sẻ PostgreSQL | DevOps doanh nghiệp/Vận hành nền tảng | Di chuyển Schema v3 cản trở, đầu cuối Tauri không ổn định |

**Phân hóa lộ trình kiến trúc**:
- **Cloud Native/Đa nhà cung cấp**: OpenClaw, ZeroClaw
- **Biên/Ngoại tuyến/Hạn chế thể tích**: ZeptoClaw, PicoClaw, CoPaw (một phần)
- **Bảo mật/Tuân thủ/Kiểm toán**: NanoClaw, ZeptoClaw
- **Ưu tiên LLM cục bộ**: Moltis, CoPaw, NanoBot
- **Nền tảng/Lưu trữ**: IronClaw, LobsterAI

---

## 6. Mức độ phổ biến của cộng đồng và sự trưởng thành

| Giai đoạn | Dự án | Đặc điểm |
|:---|:---|:---|
| **🔥 Giai đoạn lặp lại nhanh/bùng nổ chức năng** | OpenClaw, Hermes Agent, ZeroClaw | Phát hành phiên bản dày đặc, bao phủ khả năng mới nhanh chóng, khối lượng công việc cộng đồng đạt đỉnh, nhưng rủi ro hồi quy chất lượng cao (lỗi đóng gói phụ thuộc v2026.4.21 của OpenClaw, tắc nghẽn di chuyển Schema v3 của ZeroClaw, khoảng trống chức năng TUI v2 của Hermes) |
| **🛠 Giai đoạn củng cố chất lượng/tái cấu trúc kiến trúc** | NanoBot, NanoClaw, Moltis, ZeptoClaw | Giải quyết các vấn đề cốt lõi (quản trị bộ nhớ, kiểm toán bảo mật, bộ đệm KV, thực thi đáng tin cậy), tỷ lệ hợp nhất cao, tốc độ phản hồi nhanh, dần chuyển từ "có thể sử dụng" sang "đáng tin cậy" |
| **⚠️ Giai đoạn tắc nghẽn/tích lũy nợ** | PicoClaw, IronClaw, CoPaw | Tắc nghẽn xem xét của PicoClaw (39 PR chờ xem xét); Tái cấu trúc kiến trúc IronClaw và QA Bash song song, 43 PR tồn đọng; Nợ độ tin cậy của CoPaw (treo, gián đoạn) chưa được đưa vào các vấn đề chặn |
| **🔴 Giai đoạn đình trệ/rủi ro mất mát** | NullClaw, TinyClaw | Hoạt động PR của NullClaw bằng không, khủng hoảng tương thích Android 48 ngày không được phản hồi; TinyClaw hoàn toàn không hoạt động |

**Tín hiệu chuyển đổi sự trưởng thành**: ZeptoClaw đề xuất kiểm soát ngân sách nhị phân P1-critical ( #537 ), NanoClaw hoàn thành chuỗi kiểm toán CSO, đánh dấu sự chuyển dịch mô hình từ **"ưu tiên chức năng" sang "thúc đẩy bởi ràng buộc"** — đây là bước ngoặt quan trọng để dự án mã nguồn mở chuyển từ đồ chơi cộng đồng sang sản phẩm thương mại.

---

## 7. Tín hiệu xu hướng đáng chú ý

| Xu hướng | Nguồn tín hiệu | Giá trị tham khảo cho nhà phát triển |
|:---|:---|:---|
| **① "Thực thi đáng tin cậy" trở thành tiêu chuẩn cơ sở hạ tầng Agent** | Chuỗi kiểm toán SHA-256 của ZeptoClaw, sandbox container của NanoClaw, phê duyệt đa kênh của ZeroClaw, RFC DID/VC của OpenClaw | **Bảo mật không còn là tùy chọn** — Các điều khoản yêu cầu cho RFP, đặc biệt là chuỗi băm, cô lập quyền, cơ chế xác thực lại, nên được đưa vào thiết kế kiến trúc sớm thay vì vá lỗi sau này |
| **② Giám sát thay đổi API nhà cung cấp mô hình trở thành nhu cầu vận hành** | Sự cố tương thích Claude 4.7 của OpenClaw/NanoBot/ZeroClaw cùng ngày | **"Lớp thích ứng" cần tự động hóa** — Thay đổi nhiệt độ bị loại bỏ, tư duy thích ứng, từ chối schema yêu cầu đăng ký thay đổi nhà cung cấp + ma trận kiểm tra tự động, tránh việc cứu hỏa lặp đi lặp lại "lỗi 400 mỗi vòng đầu tiên" |
| **③ Kể chuyện biên/ngoại tuyến chuyển từ "tùy chọn của hacker" thành "nhu cầu kịch bản"** | "Nhà máy/tàu mỏ/cảm biến từ xa" của ZeptoClaw, hộp ARM RK3318 của CoPaw, NXP i.MX93 của PicoClaw | **Kiến trúc gradient đám mây-biên-đầu cuối** — Khuyến nghị thiết kế khung Agent để dự phòng mô hình cục bộ (Ollama/llama.cpp/Liquid AI), thay vì phụ thuộc cứng vào đám mây |
| **④ Khu vực nước sâu của kỹ thuật hóa hệ sinh thái MCP** | Xác thực lại OAuth của Moltis, cầu nối WASM của ZeroClaw, tuần tự hóa tham số của Hermes, CoPaw bị treo TaskGroup | **Tiêu chuẩn giao thức ≠ độ tin cậy sản xuất** — Khách hàng MCP cần đầu tư vào các chi tiết kỹ thuật như truyền lỗi, quản trị hết thời gian, cô lập trạng thái, khuyến nghị tham khảo nguyên tắc kiến trúc "kỹ năng không làm ô nhiễm lõi" của Moltis |
| **⑤ Hệ thống cấu hình trở thành nút cổ chai quy mô hóa** | Di chuyển Schema v3 của ZeroClaw, phiên bản hóa cấu hình của ZeptoClaw, doctor --fix của OpenClaw v2026.4.21 làm hỏng cấu hình, di chuyển v1→v2 của NanoClaw | **Phản mẫu "nâng cấp gây lỗi"** — Khuyến nghị giới thiệu phiên bản hóa schema cấu hình + kiểm tra di chuyển tự động + lộ trình giảm cấp, coi thay đổi cấu hình nghiêm ngặt như thay đổi mã |
| **⑥ Thoại thời gian thực chuyển từ "tính năng demo" sang "độ tin cậy cấp điện thoại"** | Phát hành xAI TTS/STT của OpenClaw, xác minh nhu cầu #7200, PR V2 chuyển mã giọng nói của NanoClaw | **Chiến trường chính tiếp theo của tương tác đa phương thức** — Khuyến nghị chú ý đến luồng hai chiều WebRTC, tín hiệu DTMF, triệt tiêu tiếng vọng và các kỹ thuật viễn thông khác, thay vì chỉ đóng gói API |
| **⑦ Phân hóa mô hình quản trị cộng đồng: Tốc độ vs Chiều sâu** | Khối lượng 500/500 của OpenClaw nhưng chất lượng dao động; 82% tỷ lệ hợp nhất + "cổng 6MB" của ZeptoClaw; 0% tỷ lệ đóng Vấn đề của PicoClaw | **Quy mô không đồng nghĩa với sức khỏe** — Khuyến nghị thiết lập băng thông xem xét phù hợp với quy mô cộng đồng (ví dụ: tự động hóa cửa ngõ CI của ZeptoClaw), tránh sự hào nhoáng giả tạo của "hoạt động cao + tồn đọng cao" |

---

*Phân tích dựa trên dữ liệu công khai của GitHub cho từng dự án, phù hợp cho người ra quyết định công nghệ đánh giá sức khỏe dự án và nhà phát triển lựa chọn ngăn xếp công nghệ.*

---

## Báo cáo chi tiết dự án trong cùng phân khúc

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Nhật ký hoạt động dự án NanoBot | 2026-04-24

## 1. Tổng quan hôm nay

NanoBot hôm nay thể hiện **thái độ lặp lại cường độ cao**: 14 Vấn đề cập nhật trong 24 giờ (9 đã đóng/5 đang hoạt động), 20 PR cập nhật (9 đã hợp nhất/đóng, 11 chờ hợp nhất), không có phiên bản mới nào được phát hành. Nhóm phát triển cốt lõi tập trung vào **quản trị bộ nhớ Agent** và **tối ưu hóa trải nghiệm đa kênh**, hợp nhất liên tục 4 PR liên quan để giải quyết triệt để vấn đề phình to `history.jsonl`; cộng đồng tiếp tục cải thiện các kênh cấp doanh nghiệp như WhatsApp, Feishu, Telegram, nhưng các vấn đề hồi quy bộ nhớ và tương thích Claude Opus 4.7 được giới thiệu trong v0.1.5.post2 đã trở thành mối nguy mới. Sức khỏe dự án tổng thể **tốt**, nhưng cần chú ý đến rủi ro hồi quy chất lượng.

---

## 2. Phát hành phiên bản

**Không có phiên bản mới nào được phát hành** (phiên bản mới nhất vẫn là v0.1.5.post2)

> ⚠️ Điều đáng chú ý là v0.1.5.post2 đang trở thành tâm điểm khiếu nại của người dùng: Vấn đề #3410 báo cáo rằng phiên bản này làm tăng mức sử dụng bộ nhớ từ ~200MB lên ~600MB, Vấn đề #3406 báo cáo rằng đăng nhập WhatsApp không thành công, khuyến nghị người bảo trì đánh giá xem có cần bản vá khẩn cấp không.

---

## 3. Tiến độ dự án

### 🔧 Chuỗi PR quản trị bộ nhớ Agent đã được hợp nhất hoàn toàn (cột mốc cốt lõi)

| PR | Tác giả | Mô tả | Liên kết |
|:---|:---|:---|:---|
| **#3412** | chengyongru | **Sửa lỗi chính**: Loại bỏ giới hạn 60 tin nhắn của `_cap_consolidation_boundary` gây ra tình trạng khóa hợp nhất; `raw_archive` không còn làm ô nhiễm `history.jsonl`; thêm bảo vệ cắt bớt 32K ký tự | [HKUDS/nanobot#3412](https://github.com/HKUDS/nanobot/pull/3412) |
| **#3413** | chengyongru |cherry-pick sửa lỗi trên nhánh `nightly` | [HKUDS/nanobot#3413](https://github.com/HKUDS/nanobot/pull/3413) |
| **#3414** | chengyongru | Bảo vệ `context.py` độc lập: Cắt bớt "Lịch sử gần đây" trong lời nhắc hệ thống thành 32K ký tự | [HKUDS/nanobot#3414](https://github.com/HKUDS/nanobot/pull/3414) |
| **#3415** | Re-bin | **Tăng cường biên**: Đóng 4 điểm rò rỉ liền kề như đường dẫn thành công `archive()`, đường dẫn lỗi, ghi `summary`, ngăn chặn lời nhắc bất thường của LLM gây ô nhiễm lại | [HKUDS/nanobot#3415](https://github.com/HKUDS/nanobot/pull/3415) |

**Ý nghĩa kỹ thuật**: Chuỗi PR này đã giải quyết triệt để nguyên nhân gốc rễ của vấn đề ngữ cảnh phình to, lời nhắc hệ thống bị ô nhiễm và tiêu thụ token mất kiểm soát trong quá trình Agent chạy dài hạn, là một bản nâng cấp quan trọng cho tính ổn định của kiến trúc Agent.

### 📨 Sửa lỗi vòng lặp tự động trả lời thư điện tử

| PR | Tác giả | Mô tả | Liên kết |
|:---|:---|:---|:---|
| **#3234** | mohamed-elkholy95 | Sửa Vấn đề #3215: Bot tự gửi và nhận thư khi sử dụng cùng tài khoản SMTP/IMAP dẫn đến vòng lặp thư vô hạn, bỏ qua thư của chính nó bằng cách khớp `from_address`/`smtp_username`/`imap_username` | [HKUDS/nanobot#3234](https://github.com/HKUDS/nanobot/pull/3234) |

### 💬 Tăng cường tương tác Telegram

| PR | Tác giả | Mô tả | Liên kết |
|:---|:---|:---|:---|
| **#3398** | gthieleb | Thêm hỗ trợ nút bàn phím nội tuyến (tắt theo mặc định), nhấp vào nút được trả về dưới dạng tin nhắn người dùng thông qua `CallbackQueryHandler`, sử dụng DSL `@tool_parameters` để xác định chế độ nút | [HKUDS/nanobot#3398](https://github.com/HKUDS/nanobot/pull/3398) |

---

## 4. Điểm nóng cộng đồng

### Thảo luận sôi nổi nhất: Tranh cãi về thiết kế cơ chế tác vụ định kỳ
- **Vấn đề #2892** [ĐÃ ĐÓNG] | 15 bình luận | [Liên kết](https://github.com/HKUDS/nanobot/issues/2892)
- **Mâu thuẫn cốt lõi**: Người dùng `yg1031` đặt câu hỏi về thiết kế "Agent cần khởi động lại Gateway sau khi tạo tác vụ định kỳ để có hiệu lực" đi ngược lại trực giác. Nhóm bảo trì đã đóng Vấn đề nhưng không trả lời rõ ràng về lý do thiết kế, cộng đồng có **sự bất mãn ngầm** — chế độ này cực kỳ không thân thiện với các tình huống cập nhật nóng, có thể cản trở việc áp dụng trong môi trường sản xuất.

### Căng thẳng trong hệ sinh thái hệ thống kỹ năng
- **Vấn đề #2049** [ĐÃ ĐÓNG] | 13 bình luận | [Liên kết](https://github.com/HKUDS/nanobot/issues/2049)
- **Vấn đề #1932** [ĐANG MỞ] | 7 bình luận, `good first issue` | [Liên kết](https://github.com/HKUDS/nanobot/issues/1932)
- **Phân tích yêu cầu**: Khả năng tạo kỹ năng "biến mất lặng lẽ" sau khi nâng cấp phiên bản (#2049), và các kỹ năng hiện có chỉ hỗ trợ xóa mà không hỗ trợ vô hiệu hóa (#1932), phản ánh **nợ thẻ kỹ năng vẫn là điểm yếu của hệ sinh thái**. PR #3403 với `project-manager` skill cố gắng cô lập ngữ cảnh theo phạm vi dự án, có thể coi là phản hồi gián tiếp về sự phức tạp của quản lý kỹ năng.

### Tranh luận về hiện đại hóa định dạng cấu hình
- **Vấn đề #3402** [ĐÃ ĐÓNG] | 7 bình luận | [Liên kết](https://github.com/HKUDS/nanobot/issues/3402)
- **Tín hiệu**: Người dùng `cschur` thúc đẩy di chuyển từ JSON sang TOML, nhấn mạnh khả năng chỉnh sửa của con người (hỗ trợ chú thích, không có lỗi dấu phẩy cuối, cú pháp linh hoạt hơn). Vấn đề đã nhanh chóng bị đóng, có thể có nghĩa là nhóm bảo trì **không có ý định tái cấu trúc lớp cấu hình trong thời gian ngắn**, nhưng nhu cầu của cộng đồng về trải nghiệm nhà phát triển tiếp tục tích lũy.

---

## 5. Lỗi và tính ổn định

| Ưu tiên | Vấn đề | Mô tả | Trạng thái | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0-Hồi quy** | [#3410](https://github.com/HKUDS/nanobot/issues/3410) | Phiên bản v0.1.5.post2 tăng gấp 3 lần mức sử dụng bộ nhớ (~200MB→~600MB), nghi ngờ do chức năng "dream" mới gây ra | **MỞ**, 0 bình luận | ❌ Không có |
| 🔴 **P0-Tương thích** | [#3417](https://github.com/HKUDS/nanobot/issues/3417) | `anthropic_provider` mã hóa cứng `temperature=1.0`, Claude Opus 4.7 đã loại bỏ tham số này, trả về lỗi 400 | **MỞ**, 0 bình luận | ❌ Không có |
| 🟡 **P1-Chức năng** | [#3406](https://github.com/HKUDS/nanobot/issues/3406) | Đăng nhập WhatsApp không thành công sau khi nâng cấp lên v0.1.5.post2, báo "Invalid token" (4003), xóa thông tin xác thực không hiệu quả | **ĐÃ ĐÓNG** | Nghi ngờ hoàn nguyên phiên bản hoặc sửa cấu hình, không có PR rõ ràng |
| 🟡 **P1-Chức năng** | [#3390](https://github.com/HKUDS/nanobot/issues/3390) | Lỗi trả về "Sorry, I encountered an error" của Cuộc gọi Công cụ, không phản hồi sau khi xóa không gian làm việc, tất cả các lệnh gọi tiếp theo đều thất bại | **MỞ**, 1 bình luận | ❌ Không có |
| 🟢 **P2-Trải nghiệm** | [#3377](https://github.com/HKUDS/nanobot/issues/3377) | Nhiều Agent phụ thực hiện tác vụ song song dẫn đến Agent chính trả lời lặp lại | **ĐÃ ĐÓNG** | Không có PR rõ ràng liên quan, có thể đã giảm nhẹ gián tiếp thông qua chuỗi sửa lỗi bộ nhớ |

> **Đánh giá rủi ro**: Cả hai vấn đề P0 đều chỉ ra **khoảng trống kiểm soát chất lượng của v0.1.5.post2** — chức năng mới (dream) gây hồi quy hiệu suất, lớp thích ứng mô hình không theo kịp các thay đổi API của nhà cung cấp. Khuyến nghị người bảo trì ưu tiên giải quyết #3417 (chi phí sửa lỗi đơn điểm thấp) và điều tra nguyên nhân gốc rễ của #3410.

---

## 6. Yêu cầu chức năng và tín hiệu lộ trình

| Yêu cầu | Nguồn | Mức độ trưởng thành | Khả năng đưa vào |
|:---|:---|:---|:---|
| **Ưu tiên mô hình miễn phí OpenRouter** | PR #3416 [Chờ hợp nhất](https://github.com/HKUDS/nanobot/pull/3416) | Sẵn sàng mã | ⭐⭐⭐⭐⭐ Cao, nhu cầu rõ ràng của cộng đồng |
| **Khả năng quan sát OpenTelemetry** | PR #3173 [Chờ hợp nhất](https://github.com/HKUDS/nanobot/pull/3173) | Sẵn sàng mã, hỗ trợ Langfuse/LangSmith | ⭐⭐⭐⭐☆ Cao, nhu cầu cấp doanh nghiệp |
| **Quản trị bộ nhớ xuyên phiên MGP** | PR #3408 [Chờ hợp nhất](https://github.com/HKUDS/nanobot/pull/3408) | Kiến trúc sidecar thử nghiệm | ⭐⭐⭐☆☆ Trung bình, kiến trúc cấp tiến cần đánh giá |
| **Chuyển đổi nhanh cài đặt trước mô hình** | PR #3358 [Chờ hợp nhất](https://github.com/HKUDS/nanobot/pull/3358) | Sẵn sàng mã | ⭐⭐⭐⭐☆ Cao, cải thiện hiệu quả quy trình làm việc đa mô hình |
| **Kiểm soát chỉnh sửa tệp danh tính Dream** | PR #3400 [Chờ hợp nhất](https://github.com/HKUDS/nanobot/pull/3400) | Sẵn sàng mã, cho phép chỉnh sửa theo mặc định | ⭐⭐⭐⭐☆ Cao, đáp ứng các lo ngại như #3410 |
| **Hiển thị công thức LaTeX Feishu** | PR #3411 [Chờ hợp nhất](https://github.com/HKUDS/nanobot/pull/3411) | Phụ thuộc vào dịch vụ bên ngoài CodeCogs | ⭐⭐⭐☆☆ Trung bình, nguy cơ độ trễ mạng |
| **Hỗ trợ API Embeddings** | PR #3401 [Chờ hợp nhất](https://github.com/HKUDS/nanobot/pull/3401) | Sẵn sàng mã, bao gồm cả kiểm thử | ⭐⭐⭐⭐☆ Cao, cơ sở hạ tầng cho kịch bản RAG |
| **Tin nhắn thoại WhatsApp gốc** | Vấn đề #2152 [ĐANG MỞ](https://github.com/HKUDS/nanobot/issues/2152) | Tồn tại kỹ năng cộng đồng, cần vá cầu nối | ⭐⭐☆☆☆ Thấp, nhóm bảo trì chưa phản hồi |
| **Chuyển đổi giữa vô hiệu hóa/kích hoạt kỹ năng** | Vấn đề #1932 [ĐANG MỞ](https://github.com/HKUDS/nanobot/issues/1932) | Được gắn nhãn `good first issue` | ⭐⭐⭐☆☆ Trung bình, cơ hội đóng góp cấp nhập môn |

---

## 7. Tóm tắt phản hồi người dùng

### 😤 Điểm yếu
- **Lo lắng khi nâng cấp**："Khả năng tạo kỹ năng biến mất sau khi nâng cấp phiên bản mới" (#2049), "Phiên bản v0.1.5.post2 tăng gấp 3 lần bộ nhớ" (#3410) — Thiếu bảo đảm tương thích khi nâng cấp phiên bản và minh bạch thay đổi nhật ký.
- **Liên kết Gateway-Agent**: Tác vụ định kỳ cần khởi động lại Gateway để có hiệu lực (#2892), trở thành điểm tắc nghẽn trong các tình huống triển khai phân tán.
- **Cầu nối mong manh**: Kênh bên thứ ba (WhatsApp) yêu cầu vá lỗi thủ công mỗi khi cập nhật (#2152, #3406), chi phí bảo trì cao.

### 😊 Điểm hài lòng
- Trải nghiệm WebUI được công nhận: "sạch sẽ và thân thiện với người dùng" (#3407), yêu cầu chức năng tải lên tệp tự nó là sự khẳng định hướng sản phẩm.
- Đóng góp cộng đồng tích cực: Sự xuất hiện của các tiện ích mở rộng của bên thứ ba như tích hợp âm thanh Fish Audio ( #2152 ), backend tìm kiếm Olostep ( #3405 ).

### 🎯 Hiểu biết về kịch bản sử dụng
- **Tích hợp IM doanh nghiệp**: LaTeX Feishu (#3411), bàn phím nội tuyến Telegram (#3398), thoại WhatsApp (#2152) — người dùng đang đẩy NanoBot từ trợ lý cá nhân thành **cơ sở hạ tầng cộng tác nhóm**.
- **Tính liên tục của dự án dài hạn**: `project-manager` skill (#3403) và tích hợp MGP (#3408) phản ánh nhu cầu mạnh mẽ của người dùng về **duy trì trạng thái xuyên phiên**, tạo ra sự căng thẳng về kiến trúc với bản chất không trạng thái của Agent.

---

## 8. Tồn đọng cần xử lý

| Loại | Mục | Ngày tạo | Cập nhật cuối | Rủi ro |
|:---|:---|:---|:---|
| **Vấn đề** | [#2152](https://github.com/HKUDS/nanobot/issues/2152) Hỗ trợ tin nhắn thoại WhatsApp gốc | 2026-03-17 | 2026-04-23 | 38 ngày không có phản hồi từ người bảo trì, cộng đồng đã tự vá lỗi, có rủi ro phân mảnh hệ sinh thái |
| **Vấn đề** | [#1932](https://github.com/HKUDS/nanobot/issues/1932) Chức năng vô hiệu hóa kỹ năng | 2026-03-12 | 2026-04-23 | Được gắn nhãn `good first issue` nhưng không có PR trong 43 ngày, người đóng góp cấp nhập môn có thể rời đi |
| **PR** | [#3173](https://github.com/HKUDS/nanobot/pull/3173) Khả năng quan sát OpenTelemetry | 2026-04-15 | 2026-04-23 | 9 ngày chờ xem xét, nhu cầu quan trọng của người dùng doanh nghiệp, sự chậm trễ có thể chuyển sang đối thủ cạnh tranh |
| **PR** | [#3303](https://github.com/HKUDS/nanobot/pull/3303) Trạng thái/Hủy lệnh Spawn | 2026-04-19 | 2026-04-23 | 5 ngày chờ xem xét, cơ sở hạ tầng quản lý Agent phụ, liên quan chặt chẽ đến chủ đề quản trị bộ nhớ hôm nay |
| **PR** | [#3268](https://github.com/HKUDS/nanobot/pull/3268) Cập nhật động biểu tượng cảm xúc react trong Feishu | 2026-04-18 | 2026-04-23 | 6 ngày chờ xem xét, chi tiết hóa mô hình bảo mật cấu hình kênh, ảnh hưởng đến tính linh hoạt của triển khai doanh nghiệp |

---

> **Ghi chú của nhà phân tích**: Khuyến nghị nhóm bảo trì thiết lập **cột mốc sửa lỗi chất lượng v0.1.6**, ưu tiên giải quyết #3410 (hồi quy bộ nhớ) và #3417 (tương thích Claude), đồng thời phát hành hướng dẫn cập nhật nóng hoặc hạ cấp để khôi phục lòng tin của người dùng. Về lâu dài, cần thiết lập **ma trận kiểm tra tương thích nâng cấp phiên bản** và **cơ chế giám sát thay đổi API của nhà cung cấp mô hình** để tránh các hồi quy tương tự tái diễn.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Nhật ký hoạt động dự án Hermes Agent | 2026-04-24

## 1. Tổng quan hôm nay

Hermes Agent hôm nay thể hiện **cường độ phát triển cao**: 50 Vấn đề và 50 PR cập nhật trong 24 giờ, mức độ hoạt động cộng đồng cực kỳ cao. Phiên bản v0.11.0 "The Interface" đã được phát hành hôm qua, đánh dấu việc hoàn thành viết lại toàn diện CLI bằng React/Ink, là một cột mốc quan trọng của dự án. Tỷ lệ hợp nhất PR là 30% (15/50), tỷ lệ đóng Vấn đề chỉ 12% (6/50), một lượng lớn lỗi mới xuất hiện cùng với phiên bản mới, áp lực ổn định tăng đáng kể. Người đóng góp cốt lõi **Fizzilith** đã tích cực gửi 4 PR trong một ngày, dẫn đầu bản nâng cấp kiến trúc proxy phụ (delegation); **Tranquil-Flow** đã báo cáo 4 lỗi mới trong một ngày, chất lượng bộ công cụ trở thành tiêu điểm.

---

## 2. Phát hành phiên bản

### [v0.11.0 "The Interface"](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.23) ⭐ Phiên bản lớn

| Thuộc tính | Chi tiết |
|:---|:---|
| **Ngày phát hành** | 2026-04-23 |
| **Lượng mã** | 1.556 commits · 761 PR đã hợp nhất · 1.314 tệp đã thay đổi · 224.174 chèn |
| **Đóng góp cộng đồng** | 29 nhà đóng góp cốt lõi (bao gồm 290 đồng tác giả) |

**Thay đổi cốt lõi:**
- **CLI tương tác React/Ink được viết lại hoàn toàn** — thay thế kiến trúc TUI cũ, tạo nền tảng cho giao diện plugin hóa sau này
- Tóm tắt chính thức bị cắt thành "a plugg..." , ám chỉ hệ thống plugin (plugin system) có thể là một khả năng mới chưa hoàn thành và được công bố

**Lưu ý di chuyển:**
- TUI v2 có khoảng cách chức năng so với v1 (xem [#12130](https://github.com/NousResearch/hermes-agent/issues/12130)): Thiếu 25/48 lệnh slash, tham chiếu ngữ cảnh như `@file:`/`@diff`/`@git:N`, các bảng Skills Hub/Tools Config/Cron/Rollback/Snapshot/Plugins/Insights/Agents/Browser/Platform,...
- Người dùng sử dụng `--tui` cần đánh giá ảnh hưởng của việc hồi quy chức năng

---

## 3. Tiến độ dự án

### PR chính đã hợp nhất/đóng hôm nay (mục cốt lõi trong số 15 mục)

| PR | Tác giả | Tiến độ | Ảnh hưởng |
|:---|:---|:---|:---|
| [#9183](https://github.com/NousResearch/hermes-agent/pull/9183) | MestreY0d4-Uninter | **Bộ tăng cường ngữ cảnh**：hàng xem trước tìm kiếm, gợi ý tệp đa ngôn ngữ, kiểm tra nén | Giảm số vòng gọi công cụ, bảo vệ trạng thái hội thoại dài |
| [#14754](https://github.com/NousResearch/hermes-agent/pull/14754) | Fizzilith | **Bảng đăng ký proxy con lộ ra API HTTP**：`GET /api/spawns` | Cải thiện khả năng quan sát vận hành, hỗ trợ giám sát bên ngoài |
| [#14747](https://github.com/NousResearch/hermes