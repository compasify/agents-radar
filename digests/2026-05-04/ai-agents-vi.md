# OpenClaw Sinh hoạt hàng ngày | 04-05-2026

> Issues: 500 | PRs: 500 | Dự án được bao phủ: 13 | Thời gian tạo: 04-05-2026 00:19 UTC

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

# OpenClaw Nhật ký hoạt động hàng ngày | 04-05-2026

---

## 1. Tổng quan hôm nay

OpenClaw duy trì **mức độ hoạt động cực kỳ cao** hôm nay: 500 lượt cập nhật cho Issues và PR trong 24 giờ, mật độ thảo luận cộng đồng tăng đáng kể. Phiên bản v2026.5.3-beta.2 tập trung vào việc tăng cường bảo mật cho plugin truyền tệp. Nhóm kỹ thuật cốt lõi tiếp tục tối ưu hóa hiệu suất (lazy loading pdfjs, bộ chỉ báo typing có thể cấu hình) và sửa lỗi ổn định, nhưng **suy thoái hiệu suất Gateway** (CPU 100%, cắt ngắn đầu ra dài) và **lỗi hồi quy về tính bền vững của phiên WebChat** trở thành các khoản nợ kỹ thuật cấp bách nhất trong ngày. Tỷ lệ PR đang chờ hợp nhất là 88,6% (443/500), thông lượng hợp nhất thấp, có nguy cơ tồn đọng.

---

## 2. Phát hành phiên bản

### [v2026.5.3-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.3-beta.2) — OpenClaw 2026.5.3 beta 2

| Thuộc tính | Nội dung |
|:---|:---|
| **Ngày phát hành** | 03/04/2026 |
| **Loại** | Beta Release |
| **Thay đổi cốt lõi** | Plugin `file-transfer` mới tích hợp sẵn |

**Cập nhật chi tiết:**
- **Plugin truyền tệp** (`Plugins/file-transfer`): Cung cấp 4 công cụ Agent cho thao tác tệp nhị phân:
  - `file_fetch` — Lấy tệp từ xa/cục bộ
  - `dir_list` — Danh sách thư mục
  - `dir_fetch` — Lấy thư mục hàng loạt
  - `file_write` — Ghi tệp
- **Chính sách bảo mật**: Chính sách theo đường dẫn nút từ chối mặc định (default-deny), được cấu hình qua `plugins.entries.file-transfer.config.nodes`, yêu cầu phê duyệt từ người vận hành.

**Lưu ý di chuyển:** Cần cấu hình rõ ràng danh sách trắng đường dẫn cấp nút trước khi kích hoạt, nếu không các công cụ truyền tệp sẽ bị vô hiệu hóa cho tất cả các nút được ghép nối.

---

## 3. Tiến độ dự án

### Các PR quan trọng được hợp nhất/đóng hôm nay

| PR | Tác giả | Trạng thái | Lĩnh vực ảnh hưởng | Đóng góp cốt lõi |
|:---|:---|:---|:---|:---|
| [#74995](https://github.com/openclaw/openclaw/pull/74995) | martins-oss | **Đã hợp nhất** | CI/Scripts | Tăng giới hạn PR đang hoạt động của Barnacle từ 10 lên 100, giảm bớt tắc nghẽn hàng đợi PR về độ tin cậy |
| [#45664](https://github.com/openclaw/openclaw/pull/45664) | zanehu-ai | **Đã hợp nhất** | BlueBubbles/Slack | Sửa lỗi điều kiện cạnh tranh đăng ký tuyến webhook khi khởi động, loại bỏ rủi ro mất tin nhắn trong cửa sổ 5 giây |

### Các PR có giá trị cao đang chờ hợp nhất (Triển vọng kỹ thuật)

| PR | Tác giả | Thẻ | Giá trị kỹ thuật |
|:---|:---|:---|:---|
| [#77005](https://github.com/openclaw/openclaw/pull/77005) | 1yihui | `agents`, `size: XS` | **Lazy loading pdfjs-dist**: Loại bỏ chi phí chặn 2,5 giây mỗi vòng, chi phí bằng không khi công cụ PDF không được kích hoạt |
| [#76054](https://github.com/openclaw/openclaw/pull/76054) | kagura-agent | `agents`, `size: S` | **Phủ ghi đè ngữ cảnh theo Agent**: Giải quyết nhu cầu về mức độ nghiêm ngặt khác nhau của quy tắc trong các tình huống đa Agent |
| [#72009](https://github.com/openclaw/openclaw/pull/72009) | suntp | `web-ui`, `gateway` | **TTL bộ chỉ báo Typing có thể cấu hình**: Mặc định 2→5 phút, hỗ trợ ghi đè cấp phiên/cấp Agent |
| [#45535](https://github.com/openclaw/openclaw/pull/45535) | yiShanXin | `agents` | **Chuẩn hóa việc sử dụng Token**: Sửa lỗi báo cáo sử dụng 0 cho các nhà cung cấp tương thích OpenAI như Baishan của Alibaba Cloud |
| [#45530](https://github.com/openclaw/openclaw/pull/45530) | bingolam | `discord` | **Chuyển đổi giọng nói TTS bền vững**: Cơ chế chung ghi nhớ sở thích giọng nói của người dùng qua các phiên, không phụ thuộc vào nhà cung cấp |

**Đánh giá tổng thể**: Luồng mã hôm nay tập trung vào "tối ưu hóa hiệu suất" và "cải thiện khả năng cấu hình", nhưng tốc độ hợp nhất (57/500 = 11,4%) thấp hơn đáng kể so với tốc độ tăng trưởng nhu cầu của cộng đồng, khuyến nghị người bảo trì ưu tiên xem xét các bản sửa lỗi có ảnh hưởng cao cỡ XS/S.

---

## 4. Điểm nóng cộng đồng

### 🔥 Các Issues có hoạt động sôi nổi nhất (sắp xếp theo số bình luận)

| # | Issue | Bình luận | Trạng thái | Yêu cầu cốt lõi | Liên kết |
|:---|:---|:---:|:---|:---|
| 1 | **Tải tệp hướng dẫn phân lớp** — Kiểm soát ngữ cảnh lũy tiến | 16 | OPEN | Tối ưu hóa ngân sách Token cho không gian làm việc lớn: tải tệp hướng dẫn phân lớp theo tần suất tham chiếu, tránh tải toàn bộ cho Agent con/nhiệm vụ Cron | [#22438](https://github.com/openclaw/openclaw/issues/22438) |
| 2 | **Suy thoái Gateway khi chạy** — Lấy giá 60 giây hết thời gian chờ, Telegram dừng quay vòng | 15 | OPEN | Suy thoái mạng/bộ hẹn giờ mãn tính trong môi trường Windows 11 + Node 24, tiếp diễn qua các phiên bản (4.23-4.26) | [#73323](https://github.com/openclaw/openclaw/issues/73323) |
| 3 | **Kỹ năng gh-issues: Tiêm trực tiếp nội dung Issue không tin cậy vào lời nhắc Agent con** | 12 | OPEN | **Lỗ hổng bảo mật**: Nội dung GitHub Issue đi vào lời nhắc Agent con mà không được làm sạch, tiềm ẩn rủi ro tiêm nhiễm lời nhắc | [#45740](https://github.com/openclaw/openclaw/issues/45740) |
| 4 | **Skills không tải từ ~/.openclaw/workspace/skills/** | 12 | OPEN | Cơ chế phát hiện kỹ năng không đầy đủ, ngữ cảnh Agent chỉ hiển thị một tập hợp con | [#43735](https://github.com/openclaw/openclaw/issues/43735) |
| 5 | **Cho phép cấu hình truy cập mạng riêng** `tools.web.fetch.allowPrivateNetwork` | 12 | OPEN | Yêu cầu trong cảnh quan mạng nội bộ doanh nghiệp: cho phép web_fetch truy cập localhost/10.x/192.168.x sau khi bật rõ ràng | [#39604](https://github.com/openclaw/openclaw/issues/39604) |

### Phân tích tín hiệu cảm xúc

- **#65302** (Đã đóng, 10 bình luận, 👍6): AI Agent "Shao Xiaohong" chỉ trích chiến lược cập nhật dự án bằng các điển tích lịch sử Trung Quốc (Lưu Bang lập 3 điều khoản pháp luật) dẫn đến tự hủy hoại, nhận được sự đồng cảm đáng kể, phản ánh **nỗi lo lắng tập thể của cộng đồng về tính ổn định của phiên bản ưu tiên hơn tốc độ chức năng**.
- **#76804** (7 bình luận, 👍4): Văn bản trợ lý WebChat không được lưu trữ bền vững vào bản ghi phiên — hồi quy 5.2, cảm nhận mất dữ liệu người dùng mạnh mẽ.

---

## 5. Lỗi và ổn định

### 🔴 Nghiêm trọng (Mất dữ liệu / Gián đoạn dịch vụ / Lỗ hổng bảo mật)

| Issue | Loại | Mô tả | PR Fix | Liên kết |
|:---|:---|:---|:---|:---|
| **#76804** | Hồi quy | Phản hồi trợ lý WebChat không được ghi vào bản ghi session JSONL (hồi quy 5.2) | Cần xác nhận | [Liên kết](https://github.com/openclaw/openclaw/issues/76804) |
| **#45740** | Bảo mật | Kỹ năng gh-issues không làm sạch nội dung Issue bên ngoài trước khi tiêm vào lời nhắc Agent con | Không có | [Liên kết](https://github.com/openclaw/openclaw/issues/45740) |
| **#76307** | Hồi quy | Agent có đầu ra dài bị cắt ngắn ở khoảng 25-80 ký tự, tái hiện nhất quán trên các kênh/mô hình | **Đã đóng** (đang xác minh sửa lỗi) | [Liên kết](https://github.com/openclaw/openclaw/issues/76307) |
| **#73323** | Suy thoái mãn tính | Suy thoái mạng/bộ hẹn giờ Gateway đa hệ thống con (lỗi thời gian chờ 60 giây cho định giá, Telegram dừng quay vòng 127-266 giây) | Không có | [Liên kết](https://github.com/openclaw/openclaw/issues/73323) |
| **#76382** | Hồi quy | Gateway CPU 100% một luồng đầy tải (4.24-5.2) | Không có | [Liên kết](https://github.com/openclaw/openclaw/issues/76382) |

### 🟡 Trung bình (Chức năng bất thường / Trải nghiệm người dùng bị ảnh hưởng)

| Issue | Loại | Mô tả | PR Fix | Liên kết |
|:---|:---|:---|:---|:---|
| **#45698** | Hồi quy | Giao diện điều khiển dần dần bị treo sau thời gian dài hoạt động (2026.3.12) | Không có | [Liên kết](https://github.com/openclaw/openclaw/issues/45698) |
| **#45269** | Hồi quy | `apply_patch` bị kênh chính sách công cụ coi là công cụ không xác định, định tuyến Agent không thể thực thi | Không có | [Liên kết](https://github.com/openclaw/openclaw/issues/45269) |
| **#44905** | Hành vi | Discord làm lộ dấu vết gọi công cụ nội bộ (NO_REPLY, to=functions, v.v.) | Không có | [Liên kết](https://github.com/openclaw/openclaw/issues/44905) |
| **#43747** | Hồi quy | Quản lý bộ nhớ hỗn loạn: 3 người trong cùng một nhóm gặp 3 hành vi lưu trữ khác nhau (sqlite/vector/hỗn hợp) | Không có | [Liên kết](https://github.com/openclaw/openclaw/issues/43747) |
| **#40540** | Hành vi | Lỗi EBUSY khi cập nhật `openclaw update` trên Windows | Không có | [Liên kết](https://github.com/openclaw/openclaw/issues/40540) |

### 🟢 Nhẹ / Có giải pháp thay thế

| Issue | Mô tả | Liên kết |
|:---|:---|:---|
| #45799 | Telegram thất bại im lặng khi proxy tải xuống phương tiện không khả dụng (không thử lại) | [Liên kết](https://github.com/openclaw/openclaw/issues/45799) |
| #44599 | `OPENCLAW_CONFIG_DIR` không thể chứa dấu cách | [Liên kết](https://github.com/openclaw/openclaw/issues/44599) |
| #41201 | Hiển thị ảnh đại diện giao diện điều khiển bị hỏng (404/vấn đề đường dẫn) | [Liên kết](https://github.com/openclaw/openclaw/issues/41201) |

---

## 6. Yêu cầu tính năng và tín hiệu lộ trình

### Khả năng thực hiện cao (đã có PR hoặc lộ trình kỹ thuật rõ ràng)

| Yêu cầu | Issue/PR | Trạng thái | Khả năng tích hợp | Tín hiệu chính |
|:---|:---|:---|:---:|:---|
| **Giới hạn bắt buộc theo ngân sách chi phí Agent** | [#42475](https://github.com/openclaw/openclaw/issues/42475) | OPEN | ⭐⭐⭐⭐ | Thực hiện cấp Gateway, tái sử dụng `session-cost-usage.ts` hiện có, nhu cầu vận hành doanh nghiệp thiết yếu |
| **Làm mới bộ nhớ Agent trước khi đặt lại** | [#45608](https://github.com/openclaw/openclaw/issues/45608) | OPEN | ⭐⭐⭐⭐ | Tái sử dụng cơ chế `runMemoryFlushIfNeeded` hiện có, thống nhất `/new`/`/reset`/đặt lại hàng ngày |
| **Hỗ trợ định dạng cấu hình YAML** | [#45758](https://github.com/openclaw/openclaw/issues/45758) | OPEN | ⭐⭐⭐ | Nhu cầu thường xuyên của người dùng DevOps, song song với JSON5 hiện có |
| **Render MathJax/LaTeX trong giao diện điều khiển** | [#42840](https://github.com/openclaw/openclaw/issues/42840) | OPEN | ⭐⭐⭐ | 👍4, cảnh quan học thuật/khoa học, phạm vi giao diện người dùng có thể kiểm soát |
| **Cô lập cấu hình trình duyệt theo Agent** `userDataDir` | [#44635](https://github.com/openclaw/openclaw/issues/44635) | OPEN | ⭐⭐⭐ | 👍3, nhu cầu đăng nhập nhiều tài khoản thiết yếu, Playwright hỗ trợ gốc |

### Yêu cầu cấp kiến trúc (cần RFC hoặc quyết định của nhóm cốt lõi)

| Yêu cầu | Issue | Thách thức cốt lõi |
|:---|:---|:---|
| **Tải tệp hướng dẫn phân lớp** | [#22438](https://github.com/openclaw/openclaw/issues/22438) | Cần xác định cơ chế thống kê "tần suất tham chiếu", tích hợp với kiến trúc tiêm ngữ cảnh hiện có |
| **Quyền RWX theo đường dẫn** (Mô hình DAC Unix) | [#39979](https://github.com/openclaw/openclaw/issues/39979) | Thay thế danh sách trắng thực thi cấp nhị phân, liên quan đến tái cấu trúc mô hình bảo mật |
| **Định tuyến mô hình cấp kỹ năng** `model` frontmatter | [#43260](https://github.com/openclaw/openclaw/issues/43260) | Cần mở rộng bộ điều phối, phối hợp với cấp Agent/mô hình mặc định hiện có |

---

## 7. Tóm tắt phản hồi người dùng

### 😫 Các điểm đau cốt lõi

| Cảnh quan | Nguồn Issue | Cường độ cảm xúc |
|:---|:---|:---:|
| **"Cập nhật giết chết sản phẩm"** — Cập nhật phá vỡ thường xuyên dẫn đến Agent không ổn định về danh tính/trí nhớ/hành vi | #65302 | 🔥🔥🔥🔥🔥 |
| **Trải nghiệm công dân hạng hai trên Windows** — Lỗi cập nhật EBUSY, không hỗ trợ khoảng trắng trong đường dẫn, nút khởi động bị treo | #40540, #44599, #39038 | 🔥🔥🔥🔥 |
| **Hố đen thất bại im lặng** — Mất hoàn thành Agent con, Telegram dừng quay vòng không thông báo, hết thời gian chờ nén thử lại vô hạn | #44925, #50040, #43661 | 🔥🔥🔥🔥 |
| **Quản lý bộ nhớ không thể đoán trước** — Các thành viên khác nhau trong cùng một nhóm gặp 3 hành vi khác nhau: sqlite/vector/hỗn hợp, không có tài liệu giải thích | #43747 | 🔥🔥🔥🔥 |
| **Cái chết mãn tính về hiệu suất Gateway** — CPU 100%, độ trễ phản hồi tích lũy, khởi động lại chỉ giảm tạm thời | #76382, #73323 | 🔥🔥🔥🔥 |

### 😊 Điểm hài lòng

- Chính sách mặc định an toàn của plugin truyền tệp được công nhận (ủy quyền rõ ràng cấp nút)
- Cộng đồng đánh giá cao tốc độ phản hồi của Barnacle đối với việc tăng giới hạn PR (#74995)
- Các PR "trải nghiệm chi tiết" như tính bền vững của giọng nói TTS (#45530) và bộ chỉ báo typing có thể cấu hình (#72009) được mong đợi.

### 💡 Thông tin chi tiết về mẫu sử dụng

- **Cảnh quan doanh nghiệp/nhóm**: Nhu cầu dày đặc về Feishu đa tài khoản (#45673), truy cập mạng riêng (#39604), ngân sách chi phí (#42475)
- **Điều phối đa Agent**: Giới hạn trên ping-pong 5→20 (#45871), phủ ghi đè tiêm ngữ cảnh (#76054), cô lập trình duyệt (#44635) phản ánh nhu cầu về cấu trúc phức tạp
- **Cron/Tự động hóa**: Chế độ append bị thiếu trong công cụ `write` dẫn đến ghi đè tệp chia sẻ (#4001), xung đột giữa sessionTarget và delivery.mode (#44922)

---

## 8. Tồn đọng cần xử lý

### ⚠️ Các Issues dài hạn cần người bảo trì ưu tiên

| Issue | Ngày tạo | Cập nhật cuối | Số ngày | Rủi ro | Liên kết |
|:---|:---|:---|:---|:---|:---|
| **Tải tệp hướng dẫn phân lớp** | 21-02-2026 | 03-05-2026 | **72** | Yêu cầu cốt lõi tối ưu hóa chi phí Token, 16 bình luận không có phản hồi từ nhóm cốt lõi | [#22438](https://github.com/openclaw/openclaw/issues/22438) |
| **Skills không tải từ workspace** | 12-03-2026 | 03-05-2026 | **53** | Lỗi cơ bản của cơ chế phát hiện kỹ năng, 12 bình luận | [#43735](https://github.com/openclaw/openclaw/issues/43735) |
| **Cấu hình truy cập mạng riêng** | 08-03-2026 | 03-05-2026 | **57** | Điểm chặn triển khai mạng nội bộ doanh nghiệp, 👍5 | [#39604](https://github.com/openclaw/openclaw/issues/39604) |
| **Sandbox chỉ đọc khi workspaceAccess=none** | 06-03-2026 | 03-05-2026 | **59** | Xung đột bảo mật và chức năng, 👍4 | [#37634](https://github.com/openclaw/openclaw/issues/37634) |
| **Hỗ trợ MathJax/LaTeX** | 11-03-2026 | 03-05-2026 | **54** | Nhu cầu của nhóm người dùng học thuật, 👍4 | [#42840](https://github.com/openclaw/openclaw/issues/42840) |

### Cảnh báo về sức khỏe hàng đợi PR

- Trong số **443 PR đang chờ hợp nhất**, phần lớn được tạo tập trung vào ngày 14-03-2026 (có vẻ là kết quả sprint hoặc hackathon), đã **51 ngày** kể từ đó.
- Đề xuất: Ưu tiên phân luồng theo thẻ `size: XS/S` + `fix/regression`, tránh các bản sửa lỗi nhỏ có giá trị cao bị PR chức năng XL chặn.

---

*Thời gian tạo nhật ký hàng ngày: 04-05-2026 | Nguồn dữ liệu: Dữ liệu mở GitHub OpenClaw*

---

## So sánh ngang hệ sinh thái

# Phân tích so sánh ngang hệ sinh thái mã nguồn mở AI Agent / Trợ lý AI cá nhân
**Ngày phân tích: 04-05-2026 | Số lượng dự án được bao phủ: 11 kho lưu trữ đang hoạt động**

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái mã nguồn mở trợ lý AI cá nhân đang trong **giai đoạn chuyển đổi tập thể từ mở rộng chức năng sang sẵn sàng sản xuất**. Các dự án hàng đầu (OpenClaw, ZeroClaw, IronClaw) xử lý trung bình 50+ Issues/PRs mỗi ngày, tập trung vào việc dọn dẹp nợ ổn định và củng cố bảo mật; các dự án cỡ trung (NanoBot, PicoClaw, CoPaw) lặp lại nhanh chóng trên các mô hình nội địa và mở rộng đa phương thức; các dự án cuối chuỗi (LobsterAI, TinyClaw) đối mặt với nguy cơ cạn kiệt băng thông của người bảo trì hoặc đóng băng cộng đồng. **Hiệu quả Token, hộp cát bảo mật, tính nhất quán của hệ thống cấu hình** trở thành các điểm đau cao tần trên nhiều dự án, phản ánh ngành đang chuyển dịch từ "có thể chạy" sang "có thể vận hành, có thể quản lý".

---

## 2. So sánh mức độ hoạt động của từng dự án

| Dự án | Issues (24h) | PRs (24h) | Hợp nhất/Đóng | Chờ hợp nhất | Phát hành hôm nay | Đánh giá sức khỏe |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| **OpenClaw** | 500 | 500 | 57 | 443 (88,6%) | v2026.5.3-beta.2 | 🟡 Hoạt động cực cao, nhưng khủng hoảng thông lượng hợp nhất, tích lũy PR nghiêm trọng |
| **ZeroClaw** | 50 | 50 | 22 | 28 | Không có | 🟢 Hoạt động cao, hợp nhất dày đặc trước khi đóng băng chức năng, đang chạy nước rút cho ứng dụng máy tính để bàn |
| **IronClaw** | 50 | 50 | 28 | 22 | Không có | 🟢 Hoạt động cao, chạy nước rút kiến trúc Reborn và sửa lỗi sản xuất song song |
| **NanoClaw** | 11 | 50 | 31 | 19 | Không có | 🟢 Hoạt động cao, hoàn tất di chuyển v2, PR bảo mật chờ xem xét |
| **CoPaw** | 32 | 16 | 5 | 11 | Không có | 🟢 Hoạt động trung bình cao, giai đoạn tái cấu trúc hệ thống trí nhớ, người đóng góp lần đầu hoạt động |
| **NanoBot** | 6 | 23 | 7 | 16 | Không có | 🟢 Hoạt động trung bình cao, giai đoạn cứu hỏa củng cố bảo mật, phản hồi cực nhanh |
| **PicoClaw** | ~5 | 19 | 6 | 13 | nightly v0.2.8 | 🟢 Hoạt động trung bình cao, cột mốc hạ tầng kiến trúc (bus sự kiện) |
| **Hermes Agent** | 50 | 50 | 28 | 22 | Không có | 🟢 Hoạt động cao, teknium1 đang cứu vớt hợp nhất các PR cộng đồng, chủ đề hiệu quả Token nổi bật |
| **ZeptoClaw** | 5 | 22 | 19 | 3 | Không có | 🟡 Hoạt động trung bình, thúc đẩy bởi một người bảo trì, hệ sinh thái đóng góp bên ngoài mỏng |
| **Moltis** | 1 | 2 | 0 | 2 | Không có | 🟡 Hoạt động thấp, bảo trì ổn định, sửa lỗi tương thích DeepSeek chờ hợp nhất |
| **NullClaw** | 1 | 1 | 0 | 1 | Không có | 🟡 Hoạt động thấp, nhóm cốt lõi đang đào sâu vào bảo mật hộp cát |
| **LobsterAI** | 1 | 2 (stale) | 0 | 2 | Không có | 🔴 Đóng băng, 39 ngày không hợp nhất, vốn tin cậy cộng đồng đang tiêu hao |
| **TinyClaw** | 0 | 0 | 0 | 0 | Không có | 🔴 Đóng băng, 24h không hoạt động |

> **Chỉ số chính**: Tỷ lệ chờ hợp nhất 88,6% của OpenClaw là điểm rủi ro cao nhất trong hệ sinh thái; Vòng lặp đóng Issue→PR→hợp nhất trong ngày của NanoBot (#3604→#3607, v.v.) thể hiện tốc độ phản hồi nhanh nhất.

---

## 3. Vị trí của OpenClaw trong hệ sinh thái

| Chiều | Hiệu suất OpenClaw | So sánh hệ sinh thái |
|:---|:---|:---|
| **Quy mô cộng đồng** | 500 Issues/500 PRs cập nhật hàng ngày, khối lượng tuyệt đối số 1 | ZeroClaw/IronClaw/Hermes Agent cùng cấp (50/50), NanoClaw cùng cấp (50 PRs), các cấp độ khác chênh lệch đáng kể |
| **Lộ trình kỹ thuật** | **Gateway đa nền tảng + Hệ thống công cụ dạng plugin + Cấu hình cấp doanh nghiệp** (trắng danh sách đường dẫn cấp nút, ngân sách chi phí, phủ ghi đè cấp Agent) | ZeroClaw tập trung vào ứng dụng máy tính để bàn/đàm thoại kép; IronClaw đặt cược vào kiến trúc WASM Reborn; Hermes Agent tập trung vào hiệu quả Token và thị trường kỹ năng Curator |
| **Lợi thế cốt lõi** | ① **Điều phối đa kênh** trưởng thành nhất (bao phủ đầy đủ BlueBubbles/Slack/Telegram/Discord/Feishu); ② **Kiểm soát vận hành doanh nghiệp** (chính sách truyền tệp theo nút, ngân sách chi phí, phủ ghi đè ngữ cảnh); ③ **Phạm vi hệ sinh thái plugin rộng** (kỹ năng file-transfer, gh-issues, v.v.) | NanoBot/NanoClaw nhẹ hơn; PicoClaw nhấn mạnh việc thích ứng mô hình nội địa; CoPaw tập trung vào hệ thống trí nhớ |
| **Rủi ro cấu trúc** | **Sự cố thông lượng hợp nhất** (11,4%), 443 PR tồn đọng; **Suy thoái hiệu suất mãn tính của Gateway** (CPU 100%, cắt ngắn đầu ra dài); Hồi quy tính bền vững của WebChat | ZeroClaw cũng gặp vấn đề về tính nhất quán giữa tài liệu và mã; IronClaw chịu rủi ro trôi nhánh của phân nhánh Reborn; Hermes Agent gặp vấn đề về bẫy cấu hình |
| **Điểm neo khác biệt hóa** | Mô hình bảo mật "phê duyệt của người vận hành" (file-transfer mặc định từ chối) so với các chính sách dựa trên cấu hình/tự động của các dự án khác | Landlock gốc của NullClaw, biên giới không gian làm việc mềm của NanoBot là các đường dẫn thay thế |

> **Kết luận định vị**: OpenClaw là **nền tảng vận hành SaaS gần với cấp doanh nghiệp nhất** trong hệ sinh thái, nhưng các khoản nợ kỹ thuật (hàng đợi hợp nhất, suy thoái hiệu suất) đang ăn mòn lợi thế đi đầu của nó.

---

## 4. Các hướng kỹ thuật được quan tâm chung

| Hướng kỹ thuật | Dự án liên quan | Yêu cầu cụ thể và cường độ tín hiệu |
|:---|:---|:---|
| **Tối ưu hóa hiệu quả Token** | Hermes Agent (#6839, 7👍), OpenClaw (#22438 Tải hướng dẫn phân lớp), NanoClaw (#2219 Giảm kích thước RULES.md) | Lược đồ công cụ lazy loading, tìm kiếm ngữ nghĩa FTS5, lựa chọn công cụ hỗn hợp trước, tải phân lớp theo tần suất tham chiếu — **bị người dùng mô hình cục bộ và người dùng nhạy cảm về chi phí ép buộc** |
| **Hộp cát bảo mật và quản trị quyền** | NullClaw (#882 Landlock mặc định), NanoBot (#3613/#3614 biên giới không gian làm việc), OpenClaw (#45740 lỗ hổng tiêm gh-issues), NanoClaw (#2217 Cấp độ tin cậy công cụ MCP) | Phát triển từ "danh sách trắng nhị phân" sang "RWX theo đường dẫn, cô lập theo Agent, cơ chế gốc của nhân" |
| **Tính nhất quán của hệ thống cấu hình** | IronClaw (#3229 lỗi lưu trữ cấu hình LLM), ZeroClaw (#6149 tài liệu-cấu hình không khớp), CoPaw (#4018 đặt lại cấu hình khi cập nhật), OpenClaw (#19214 bẫy terminal.cwd) | Ưu tiên ghi đè cấu hình, bảo mật lưu trữ, đồng bộ hóa tài liệu — **độ phức tạp vượt quá ngưỡng thân thiện với người mới bắt đầu** |
| **Thích ứng mô hình nội địa/nghiêm ngặt của Nhà cung cấp** | PicoClaw (DeepSeek/Gemini/Mimo), CoPaw (MiniMax/Volcano Engine), Moltis (DeepSeek suy luận), IronClaw (lỗi gọi công cụ DeepSeek) | Sự khác biệt về mức độ nghiêm ngặt của lược đồ (Gemini từ chối `$ref`), phát lại nội dung suy luận, nhận dạng mẫu lỗi trực quan |
| **Tương tác thoại/đa phương thức** | ZeroClaw (#5896 đàm thoại kép), NanoBot (#3604 tin nhắn thoại WhatsApp), CoPaw (#1516 tin nhắn Telegram), PicoClaw (#2755 hiểu video) | Nâng cấp từ Bot văn bản lên "Agent đa phương thức đa kênh", nhu cầu suy luận đầu cuối xuất hiện |
| **Độ tin cậy của hệ thống trí nhớ** | CoPaw (#3977 lỗi `memory_search`, #4007 MemoryHook), NanoClaw (#2097 Lore Context trí nhớ ngữ nghĩa), OpenClaw (#43735 tải kỹ năng không đầy đủ) | Phát triển từ bộ nhớ dạng tệp sang truy vấn vector + bộ nhớ dài hạn, nhưng các vấn đề về an toàn kiểu, bảo mật cấu hình, bảo vệ chống ô nhiễm bùng phát |
| **Khả năng quan sát cấp sản xuất** | PicoClaw (#2677 bus sự kiện), ZeptoClaw (#568 đo lường kỹ năng từ xa), OpenClaw (TTL bộ chỉ báo typing), CoPaw (#1642 hệ thống mã lỗi) | Sự kiện thời gian chạy, theo dõi chi phí, thống kê sử dụng — từ gỡ lỗi hộp đen sang quản trị dựa trên dữ liệu |

---

## 5. Phân tích định vị khác biệt

| Dự án | Tập trung chức năng | Người dùng mục tiêu | Khác biệt kiến trúc chính |
|:---|:---|:---|:---|
| **OpenClaw** | Điều phối đa kênh cấp doanh nghiệp, kiểm soát vận hành, thị trường plugin | Người vận hành nhóm/doanh nghiệp, người triển khai đa nền tảng | Gateway Node.js + công cụ dạng plugin + chính sách bảo mật cấp nút |
| **ZeroClaw** | Trải nghiệm máy tính để bàn gốc (thanh menu macOS), đàm thoại kép, gateway tự lưu trữ | Người dùng cao cấp cá nhân, người triển khai phần cứng biên | Máy tính để bàn Rust/Tauri + gateway WebSocket + kỹ năng tích hợp sẵn |
| **IronClaw** | Đại lý tài chính tự động (NEAR Intents/DCA), runtime hộp cát WASM | Nhà phát triển Web3/blockchain, nhà thiết kế đại lý kinh tế tự động | Kiến trúc Reborn WASM + tích hợp gốc ý định chuỗi + lưu trữ libSQL |
| **Hermes Agent** | Hiệu quả Token, quản lý vòng đời kỹ năng (Curator), điều phối đa mô hình | Người dùng mô hình cục bộ, người đam mê tiết kiệm chi phí, nhà phát triển kỹ năng | Cốt lõi Python + tải công cụ Hai Lần + cơ chế thị trường kỹ năng |
| **NanoBot** | Tương tác CLI nhẹ, lặp lại nhanh, biên giới an toàn | Nhà phát triển/người dùng cá nhân, người làm việc qua SSH từ xa | CLI Python + biên giới không gian làm việc mềm + kiểm soát proxy con đồng thời |
| **PicoClaw** | Thích ứng sâu với mô hình nội địa, tính toán biên (Android/Termux), hệ sinh thái MCP | Người dùng Trung Quốc, người đam mê phần cứng, người dùng chuỗi công cụ MCP | Thực hiện bằng Go + bus sự kiện + thích ứng gốc Xiaomi/DeepSeek |
| **NanoClaw** | Kiến trúc container v2, trí nhớ ngữ nghĩa, phù hợp với hệ sinh thái Anthropic | Người dùng di chuyển Claude Code, người triển khai container | TypeScript + runtime Docker + trí nhớ Lore Context |
| **CoPaw** | Máy tính để bàn (khay hệ thống Windows), tích hợp đám mây nội địa, hệ thống mã lỗi | Người dùng máy tính để bàn tiếng Trung, vận hành doanh nghiệp | Electron + tích hợp Volcano/Minimax + khả năng quan sát toàn diện |
| **ZeptoClaw** | Hạ tầng local-first, khung middleware, vòng lặp tự cải tiến | Nhà phát triển hệ sinh thái Rust, người xây dựng hạ tầng | Toàn bộ stack Rust + pipeline middleware + giao thức biên MQTT |
| **NullClaw** | Hộp cát bảo mật gốc nhân, lập trình hệ thống Zig | Người đam mê bảo mật, người dùng Linux tối giản | Thực hiện bằng Zig + ưu tiên Landlock + khởi động không phụ thuộc bên ngoài |
| **Moltis** | Trừu tượng hóa đa nhà cung cấp, bản địa hóa TTS, minh bạch nội dung suy luận | Người dùng chuyển đổi đa mô hình, người triển khai TTS cục bộ | Python + lớp trừu tượng nhà cung cấp + giọng nói cục bộ Piper/Coqui |

> **Phân kỳ mô hình kiến trúc**: ① **Loại Gateway** (OpenClaw/ZeroClaw/CoPaw) vs. **Loại Runtime** (IronClaw/NanoClaw); ② **Lặp lại nhanh Python** (NanoBot/Hermes Agent/Moltis) vs. **Hiệu suất ưu tiên Rust/Go/Zig** (ZeroClaw/PicoClaw/NullClaw); ③ **Cloud Native** (container NanoClaw) vs. **Edge Native** (PicoClaw Android/ZeroClaw Pi).

---

## 6. Mức độ phổ biến và sự trưởng thành của cộng đồng

| Giai đoạn | Dự án | Tín hiệu đặc trưng |
|:---|:---|:---|
| **🔥 Giai đoạn lặp lại nhanh** | OpenClaw, ZeroClaw, IronClaw, Hermes Agent | Hoạt động 50+ cập nhật hàng ngày, đang chạy nước rút chức năng đóng băng/phiên bản, kiến trúc mới (Reborn/middleware/thoại) được triển khai dày đặc, nhưng nợ kỹ thuật cũng tích lũy đồng thời |
| **🚀 Giai đoạn củng cố chất lượng** | NanoBot, PicoClaw, NanoClaw, CoPaw | Chủ yếu tập trung vào củng cố bảo mật/hạ tầng kiến trúc (bus sự kiện/mã lỗi/tái cấu trúc trí nhớ), tốc độ phản hồi nhanh, người đóng góp lần đầu hoạt động |
| **🛠️ Giai đoạn bảo trì chuyên sâu** | ZeptoClaw, Moltis, NullClaw | Thúc đẩy bởi một/hai người bảo trì, phụ thuộc vào tự động hóa (Dependabot), tăng trưởng chức năng nhỏ, tập trung vào chiều sâu kỹ thuật cụ thể |
| **❄️ Giai đoạn đóng băng/đóng băng** | LobsterAI, TinyClaw | 39 ngày+ không hợp nhất, PR `stale` 100%, tương tác cộng đồng bằng không, hoặc hoàn toàn không hoạt động |

> **Nghịch lý sự trưởng thành**: OpenClaw có quy mô lớn nhất nhưng hàng đợi hợp nhất lại mong manh nhất; NanoBot có quy mô trung bình nhưng khả năng sửa lỗi đóng vòng lặp trong ngày mạnh nhất; Hạ tầng như bus sự kiện của PicoClaw dự báo sẵn sàng vận hành sản xuất dài hạn.

---

## 7. Các tín hiệu xu hướng đáng chú ý

| Xu hướng | Chuỗi bằng chứng | Giá trị đối với nhà phát triển |
|:---|:---|:---|
| **"Kinh tế Token" trở thành ràng buộc thiết kế cốt lõi** | Hermes Agent #6839 (7👍), OpenClaw #22438, NanoClaw #2219 (-12K tokens) | Hệ thống công cụ phải chuyển từ "tiêm toàn bộ" sang lazy loading/lựa chọn động/sàng lọc RAG trước, mô hình ngữ cảnh dài không đồng nghĩa với ngân sách ngữ cảnh vô hạn |
| **Bảo mật chuyển từ "chức năng" sang "hạ tầng"** | Landlock mặc định của NullClaw, biên giới mềm + giới hạn thử lại của NanoBot, chính sách đường dẫn cấp nút của OpenClaw, cấp độ tin cậy MCP của NanoClaw | Cơ chế hộp cát cần được nhúng vào tầng dưới của kiến trúc thay vì vá lỗi sau này, "từ chối mặc định + có thể quan sát" thay thế cho "cho phép mặc định + danh sách đen" |
| **Thích ứng mô hình nội địa trở thành tùy chọn bắt buộc chứ không phải tùy chọn cộng thêm** | PicoClaw DeepSeek/Mimo, CoPaw MiniMax/Volcano, Moltis/IronClaw sửa lỗi DeepSeek | Lớp tương thích OpenAI không đủ để bao phủ sự khác biệt về mức độ nghiêm ngặt của lược đồ, nội dung suy luận, giao thức trực quan, cần đầu tư thích ứng gốc |
| **"Agent tự cải tiến" chuyển từ khái niệm sang xác minh kỹ thuật** | CRUD kỹ năng + đo lường từ xa ZeptoClaw #567-569, phê duyệt ghi hoạt động tự cải tiến Hermes Agent (#19324), tài chính tự động IronClaw DCA | Khả năng siêu nhận thức của Agent (tự sửa đổi, tối ưu hóa dựa trên dữ liệu sử dụng) cần có khung quản trị đi kèm để ngăn chặn thực thi vượt quyền |
| **Máy tính để bàn/cạnh trở thành chiến trường mới** | Thanh menu macOS ZeroClaw, khay hệ thống Windows CoPaw, Android/Termux PicoClaw, biên MQTT ZeptoClaw | Bot đám mây di chuyển sang "Agent thường trú trên thiết bị cá nhân", đàm thoại kép, khả năng ngoại tuyến, tối ưu hóa tài nguyên thấp là yếu tố khác biệt chính |
| **Độ phức tạp của hệ thống cấu hình trở thành nút thắt cổ chai trong việc áp dụng** | Hơn 6 Issues liên quan đến cấu hình trên nhiều dự án, lỗi lưu trữ #3229 của IronClaw, tài liệu không khớp #6149 của ZeroClaw | Đề xuất sử dụng chế độ "cấu hình dưới dạng mã + lỗi xác minh + công cụ di chuyển", tránh lỗi im lặng khi chạy |
| **Mô hình quản trị cộng đồng phân hóa: cứu vớt hợp nhất vs. mục nát tự nhiên** | teknium1 cứu vớt 8 PR cộng đồng trong một ngày của Hermes Agent so với 39 ngày không xem xét của LobsterAI | "Đánh bắt" chủ động các đóng góp của cộng đồng của người bảo trì là chỉ số dẫn đầu về sức khỏe, cơ chế `stale` tự động không thể thay thế đánh giá của con người |

---

**Kết luận báo cáo**: Hệ sinh thái trợ lý AI cá nhân vào ngày 04-05-2026 thể hiện **sự phân hóa "đầu đàn chịu áp lực, tầng giữa chạy nước rút, tầng cuối đóng băng"**. OpenClaw cần ưu tiên giải quyết khủng hoảng hàng đợi hợp nhất để duy trì vị thế dẫn đầu; các đặt cược kiến trúc của ZeroClaw/IronClaw (máy tính để bàn gốc/WASM Reborn) sẽ được xác minh trong phiên bản tiếp theo; khả năng phản hồi sửa lỗi trong ngày của NanoBot/PicoClaw đáng để học hỏi. Toàn ngành cùng đối mặt với ba thách thức **hiệu quả Token, quản trị bảo mật, thích ứng nội địa**, những ai giải quyết được một cách có hệ thống trước sẽ giành được lợi thế đi đầu trong việc áp dụng cấp doanh nghiệp.

---

## Báo cáo chi tiết dự án cùng cuộc đua

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Nhật ký hoạt động hàng ngày | 04-05-2026

---

## 1. Tổng quan hôm nay

Hoạt động cộng đồng NanoBot hôm nay **cực kỳ cao**, tạo ra **23 lượt cập nhật PR** (bao gồm 7 lượt hợp nhất/đóng) và **6 lượt cập nhật Issue** trong 24 giờ, thể hiện sự bùng nổ tập trung hiếm thấy gần đây. Trọng tâm cốt lõi tập trung vào việc sửa lỗi khẩn cấp cho **cơ chế biên an toàn** (nhầm lẫn safety guard workspace và thất bại im lặng), hỗ trợ **tin nhắn thoại WhatsApp**, và **kiểm soát proxy con đồng thời**, cùng các vấn đề về độ ổn định. Đáng chú ý, nhiều PR liên quan đến bảo mật được thúc đẩy liên tục bởi cùng một người đóng góp (mohamed-elkholy95), cho thấy dự án đang trải qua giai đoạn củng cố bảo mật mang tính hệ thống. Trải nghiệm người dùng CLI (mã thiết bị đầu cuối bị lỗi, quản lý xác thực Nhà cung cấp) cũng trở thành điểm đau thường xuyên.

---

## 2. Phát hành phiên bản

**Không có phiên bản mới nào được phát hành**

---

## 3. Tiến độ dự án

### Các PR quan trọng đã hợp nhất/đóng

| PR | Tác giả | Đóng góp cốt lõi | Trạng thái |
|:---|:---|:---|:---|
| [#3613](https://github.com/HKUDS/nanobot/pull/3613) | chengyongru | **Sửa lỗi nhầm lẫn biên an toàn**：Miễn trừ đường dẫn `/dev/*` (như `2>/dev/null`), sửa lỗi phân tích đường dẫn workspace, ngăn chặn mất tin nhắn sau khi bị chặn an toàn | ✅ Đã hợp nhất |
| [#3614](https://github.com/HKUDS/nanobot/pull/3614) | Re-bin | **Chính sách biên workspace mềm**：Thay thế abort cứng bằng lỗi công cụ có thể phục hồi, có giới hạn thử lại, tránh vượt quá giới hạn lặp lại của LLM | ✅ Đã hợp nhất |
| [#3609](https://github.com/HKUDS/nanobot/pull/3609) | 04cb | **Sửa lỗi hiển thị tin nhắn thử lại CLI**：Chuyển tin nhắn `retry_wait` sang dòng tiến trình, giải quyết lỗi ANSI trên thiết bị đầu cuối SSH | ✅ Đã hợp nhất |
| [#3606](https://github.com/HKUDS/nanobot/pull/3606) | hussein1362 | **Ghi nguyên tử cho Cron bền vững**：Ghi nguyên tử `jobs.json` + tệp bị hỏng không bị ghi đè im lặng, sửa lỗi mất tác vụ hẹn giờ sau khi khởi động lại container | ✅ Đã hợp nhất |
| [#3583](https://github.com/HKUDS/nanobot/pull/3583) | ramonpaolo | **Tối ưu hóa trải nghiệm WebUI**：Tín hiệu `turn_end` điều khiển trạng thái tải, sửa lỗi cô lập trò chuyện, phạm vi kiểm thử giao diện người dùng | ✅ Đã hợp nhất |
| [#2727](https://github.com/HKUDS/nanobot/pull/2727) | mikaku9944 | ~~Lệnh logout Provider~~ (đã đóng thay thế bằng #3612) | ❌ Đã đóng |
| [#3599](https://github.com/HKUDS/nanobot/issues/3599) | jermeyhu | ~~Safety guard báo động sai~~ (đã giải quyết bằng #3613/#3614) | ❌ Đã đóng |

**Đánh giá tiến độ tổng thể**: 5 PR được hợp nhất hôm nay tạo thành một **gói sửa lỗi "bảo mật - ổn định - trải nghiệm" ba trong một**, trực tiếp đáp ứng các phản hồi tập trung của người dùng sau khi phát hành v0.1.5.post3 về vấn đề safety guard workspace bị hồi quy. Dự án tạm thời chuyển từ "giai đoạn lặp lại chức năng" sang "giai đoạn cứu hỏa ổn định", chất lượng sửa lỗi cao nhưng cho thấy phạm vi kiểm thử phiên bản chưa đầy đủ.

---

## 4. Điểm nóng cộng đồng

### Các vấn đề có độ nóng thảo luận cao nhất

| Hạng 1 | Vấn đề | Chỉ số tương tác | Phân tích yêu cầu cốt lõi |
|:---|:---|:---|:---|
| 🔥1 | [#2665](https://github.com/HKUDS/nanobot/issues/2665) Chuyển đổi tài khoản OpenAI Codex cần xác thực lại | 3 bình luận, tạo ngày 31 tháng 3, hoạt động liên tục đến hôm nay | **Thiếu quản lý vòng đời thông tin xác thực OAuth**：Tài khoản nhóm hết hạn → Sau khi nâng cấp cá nhân Plus, CLI không có lệnh `logout` dẫn đến token cũ bị kẹt. Người dùng đã tự cố gắng điều tra qua `--help`, cho thấy khả năng khám phá tài liệu chưa đủ. **Vấn đề này trực tiếp thúc đẩy PR #3612**. |
| 🔥2 | [#3604](https://github.com/HKUDS/nanobot/issues/3604) Không thể tải tin nhắn thoại WhatsApp | 1 bình luận, tạo hôm nay | **Khoảng trống phạm vi loại tin nhắn đa phương thức**：WhatsApp bridge thiếu nhánh xử lý `audioMessage`, tin nhắn thoại bị bỏ sót như một hình thức tương tác tần suất cao. **Đã có PR sửa lỗi #3607 chờ hợp nhất**. |
| 🔥3 | [#3605](https://github.com/HKUDS/nanobot/issues/3605) Safety guard bỏ qua vòng trò chuyện một cách im lặng | 0 bình luận, tạo hôm nay | **Khủng hoảng về tính minh bạch của xử lý lỗi**：Sau khi chặn an toàn, người dùng không nhận được bất kỳ phản hồi nào, một hố đen UX tệ hơn cả "báo lỗi". **Hình thành vòng lặp vấn đề-sửa chữa với #3613/#3614**. |

**Mô hình yêu cầu phía sau**: Người dùng đang đẩy NanoBot hướng tới **cảnh quan đa người dùng cấp sản xuất** (chuyển đổi tài khoản nhóm, tương tác thoại WhatsApp, thiết bị đầu cuối SSH từ xa), nhưng kiến trúc ban đầu dành cho máy tính để bàn của dự án (OAuth không có logout, loại phương tiện cầu nối không đầy đủ, giả định thiết bị đầu cuối cục bộ của CLI) tạo ra ma sát mang tính hệ thống.

---

## 5. Lỗi và ổn định

| Mức độ nghiêm trọng | Vấn đề | Issue/PR | Trạng thái | Phạm vi ảnh hưởng |
|:---|:---|:---|:---|:---|
| 🔴 **P0-Crash** | Proxy con đồng thời dẫn đến OOM LLM cục bộ | [#3611](https://github.com/HKUDS/nanobot/issues/3611) / [#3615](https://github.com/HKUDS/nanobot/pull/3615) | **Có PR chờ hợp nhất** | Người dùng mlx_lm/Ollama, phần cứng tiêu dùng |
| 🔴 **P0-Mất chức năng** | Tin nhắn thoại WhatsApp hoàn toàn không khả dụng | [#3604](https://github.com/HKUDS/nanobot/issues/3604) / [#3607](https://github.com/HKUDS/nanobot/pull/3607) | **Có PR chờ hợp nhất** | Người dùng WhatsApp bridge |
| 🟡 **P1-Thất bại im lặng** | Safety guard chặn mà không có phản hồi người dùng | [#3605](https://github.com/HKUDS/nanobot/issues/3605) | **Đã được #3613/#3614 sửa chữa** | Tất cả các kênh sử dụng công cụ exec (Telegram, v.v.) |
| 🟡 **P1-Nhầm lẫn hồi quy** | Phân tích đường dẫn workspace của v0.1.5.post3 bị sai | [#3599](https://github.com/HKUDS/nanobot/issues/3599) | **Đã được #3613/#3614 sửa chữa** | Tất cả người dùng đã nâng cấp lên post3 |
| 🟡 **P1-Trải nghiệm giảm sút** | Tin nhắn thử lại CLI xen vào đầu ra luồng gây lỗi thiết bị đầu cuối | [#3600](https://github.com/HKUDS/nanobot/issues/3600) / [#3609](https://github.com/HKUDS/nanobot/pull/3609) | **Đã sửa chữa và hợp nhất** | Người dùng `nanobot chat` qua SSH từ xa |
| 🟢 **P2-Mất dữ liệu** | Nhiệm vụ Cron biến mất sau khi khởi động lại container | [#3606](https://github.com/HKUDS/nanobot/pull/3606) | **Đã sửa chữa và hợp nhất** | Triển khai sử dụng chức năng lập lịch cron |

**Đánh giá sức khỏe ổn định**: `workspace safety guard` được giới thiệu trong v0.1.5.post3 đã tạo ra **hồi quy nối tiếp** (#3599 nhầm lẫn → #3605 thất bại im lặng), cho thấy bản củng cố bảo mật này chưa được kiểm thử biên đầy đủ. Việc sửa lỗi dày đặc hôm nay cho thấy nhóm bảo trì phản ứng nhanh, nhưng đề xuất thiết lập **cơ chế phát hành canary cho các thay đổi liên quan đến bảo mật**.

---

## 6. Yêu cầu tính năng và tín hiệu lộ trình

| Yêu cầu | Nguồn | Đánh giá mức độ trưởng thành | Khả năng tích hợp vào phiên bản tiếp theo |
|:---|:---|:---|:---|
| **Lệnh logout Provider** | [#2665](https://github.com/HKUDS/nanobot/issues/2665) + [#3612](https://github.com/HKUDS/nanobot/pull/3612) | PR đã gửi, cơ chế hoàn chỉnh (bảng đăng ký `_LOGOUT_HANDLERS`) | **Cao (90%)** — Thay thế #2727 tháng 4, thiết kế trưởng thành hơn |
| **Giới hạn proxy con đồng thời** | [#3611](https://github.com/HKUDS/nanobot/issues/3611) + [#3615](https://github.com/HKUDS/nanobot/pull/3615) | PR đã gửi, bao gồm cấu hình `maxConcurrentSubagents` + bộ điều chỉnh tín hiệu + kiểm thử hồi quy | **Cao (85%)** — Nhu cầu thiết yếu cho cảnh quan LLM cục bộ |
| **Hệ thống plugin HookCenter** | [#3564](https://github.com/HKUDS/nanobot/pull/3564) | PR kiến trúc lớn, thay thế mô hình viết lại phương thức AgentHook, hỗ trợ phân phối `entry_points` | **Trung bình (50%)** — Thiết kế sâu rộng nhưng cần xem xét lâu dài |
| **Hiển thị thiết bị đầu cuối dạng Bảng điều khiển** | [#3601](https://github.com/HKUDS/nanobot/pull/3601) | Chỉ tăng cường UI thuần túy, có ảnh chụp màn hình hiển thị | **Trung bình (40%)** — Tối ưu hóa trải nghiệm, không chặn |
| **Tách biệt suy luận Heartbeat và thông báo** | [#1443](https://github.com/HKUDS/nanobot/pull/1443) | PR tháng 3, cấu hình điều khiển `sendReasoning`, tài liệu đã cập nhật | **Trung bình (60%)** — Thiết kế trưởng thành nhưng chưa hợp nhất lâu dài |

**Tín hiệu lộ trình**: Dự án đang chuyển từ "mở rộng chức năng" sang **"quản trị kiến trúc"** — củng cố bảo mật (4 PR bảo mật của mohamed-elkholy95), cơ chế plugin hóa (HookCenter), tinh chỉnh cấu hình song song, dự báo v0.2.x có thể tập trung vào **sự sẵn sàng triển khai cấp doanh nghiệp**.

---

## 7. Tóm tắt phản hồi người dùng

### Điểm đau thực tế

| Cảnh quan | Trích dẫn nguyên bản | Nguồn |
|:---|:---|:---|
| **Khó khăn chuyển đổi tài khoản OAuth** | "I checked nanobot provider --help, but I did not see any logout command" | [#2665](https://github.com/HKUDS/nanobot/issues/2665) |
| **Phòng thủ quá mức của cơ chế bảo mật** | "Trong v.0.1.5.post2 tôi chưa bao giờ gặp vấn đề này. Yêu cầu AI thử lại có thể giúp tôi hoàn thành chức năng tôi cần. Xem log thì thấy thao tác trên nội dung thư mục làm việc, nên được phép" | [#3599](https://github.com/HKUDS/nanobot/issues/3599) |
| **Thất bại im lặng còn tệ hơn lỗi** | Trải nghiệm đen tối khi safety guard chặn mà không có tin nhắn nào từ Telegram, người dùng hoàn toàn không biết chuyện gì đang xảy ra | [#3605](https://github.com/HKUDS/nanobot/issues/3605) |
| **Trải nghiệm thiết bị đầu cuối từ xa bị vỡ** | "Vấn đề đặc biệt rõ ràng trong môi trường thiết bị đầu cuối SSH từ xa" — mã ANSI bị lỗi gây khó đọc | [#3600](https://github.com/HKUDS/nanobot/issues/3600) |

### Tín hiệu hài lòng

- **Công nhận tốc độ phản hồi**: Issue tạo hôm nay có PR sửa lỗi ngay trong ngày (#3604→#3607, #3611→#3615, #3600→#3609)
- **Hoạt động đóng góp cộng đồng sôi nổi**: Người đóng góp không cốt lõi (04cb, yorkhellen, hussein1362, v.v.) nhanh chóng gửi các bản sửa lỗi chất lượng cao

### Tín hiệu không hài lòng

- **Biến động chất lượng phiên bản**: v0.1.5.post3 bị người dùng cảm nhận là "phiên bản gây ra hồi quy", làm tổn hại niềm tin cần được sửa chữa
- **Tài liệu/hệ thống trợ giúp bị chậm trễ**: Người dùng buộc phải thử và sai qua `--help` thay vì hướng dẫn từ tài liệu (#2665)

---

## 8. Tồn đọng cần xử lý

### Cần người bảo trì ưu tiên hàng đầu

| PR/Issue | Ngày tạo | Lý do đình trệ | Rủi ro |
|:---|:---|:---|:---|
| [#3254](https://github.com/HKUDS/nanobot/pull/3254) Điền trường `RunResult` của SDK | 17-04-2026 | **18 ngày chưa giải quyết** — Hợp đồng cốt lõi của SDK bị bỏ trống lâu dài, ảnh hưởng đến tất cả các bên gọi theo chương trình | Mất niềm tin của nhà phát triển bên ngoài |
| [#3492](https://github.com/HKUDS/nanobot/pull/3492) Củng cố bảo mật triển khai công cộng | 28-04-2026 | **6 ngày chưa giải quyết** — Liên quan đến CSRF, các cảnh quan triển khai sản xuất như Cloudflare/nginx | Lỗ hổng bảo mật bị lộ công khai |
| [#3255](https://github.com/HKUDS/nanobot/pull/3255) Bảo vệ lịch sử tệp cấp hệ thống tệp | 17-04-2026 | **18 ngày chưa giải quyết** — Giải pháp tận gốc thay thế regex, liên quan đến sửa lỗi vượt qua #3240 | Rủi ro vượt qua lần mở rộng bash tiếp theo |
| [#3252](https://github.com/HKUDS/nanobot/pull/3252) Phát hiện SSRF giao thức không phải HTTP | 17-04-2026 | **18 ngày chưa giải quyết** — Các giao thức như `file://`, `gopher://` vẫn có thể bị lợi dụng | Mặt tấn công đọc tệp cục bộ/Redis |
| [#3235](https://github.com/HKUDS/nanobot/pull/3235) Fail-closed khi DNS thất bại | 17-04-2026 | **18 ngày chưa giải quyết** — Đường dẫn vượt qua bảo vệ SSRF | |
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) Tách biệt suy luận Heartbeat | 02-03-2026 | **63 ngày chưa giải quyết** — Thiết kế trưởng thành, tài liệu đầy đủ, không có xung đột | Suy thoái chức năng, mất người đóng góp cộng đồng |

**Cảnh báo rủi ro tồn đọng**: **4 PR bảo mật của mohamed-elkholy95 (#3252/#3235/#3255/#3492) tạo thành ma trận củng cố bảo mật**, nhưng tất cả đều bị đình trệ 6-18 ngày. Việc sửa lỗi khẩn cấp hôm nay #3599/#3605 lẽ ra có thể tránh được bằng cách hợp nhất sớm các giải pháp mang tính hệ thống này. Đề xuất người bảo trì **ưu tiên xem xét các PR bảo mật**, thay vì phản hồi từng triệu chứng bề mặt.

---

*Nhật ký hàng ngày được tạo lúc: 04-05-2026 | Nguồn dữ liệu: Hoạt động công khai trên GitHub HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Nhật ký hoạt động hàng ngày | 04-05-2026

---

## 1. Tổng quan hôm nay

Hermes Agent duy trì **hoạt động phát triển cực kỳ cao** hôm nay, lưu lượng cao gấp đôi với 50 Issues và 50 PRs cho thấy cộng đồng đang trong giai đoạn lặp lại dày đặc. Người bảo trì cốt lõi `teknium1` đã chủ trì một công việc dọn dẹp PR quy mô lớn, hợp nhất/đóng 28 PR trong một ngày, bao gồm 8 PR "Salvage" được cứu vớt và hợp nhất từ cộng đồng, cho thấy nhóm bảo trì tích cực tiêu hóa các đóng góp của cộng đồng. Dự án hiện đang tập trung vào ba chủ đề chính: **tái cấu trúc trải nghiệm thiết bị đầu cuối TUI/CLI**, **củng cố độ ổn định của Gateway đa nền tảng**, và **tối ưu hóa hiệu quả Token của hệ thống công cụ**. Đáng chú ý, không có phiên bản mới nào được phát hành hôm nay, nhưng tốc độ hợp nhất mã cho thấy phiên bản v0.12.0 hoặc tương tự có thể đang được chuẩn bị.

---

## 2. Phát hành phiên bản

**Không có phiên bản mới nào được phát hành**

---

## 3. Tiến độ dự án

### Các PR quan trọng đã hợp nhất/đóng hôm nay (sắp xếp theo ảnh hưởng)

| PR | Tác giả | Cải tiến cốt lõi | Trạng thái |
|:---|:---|:---|:---|
| [#19435](https://github.com/NousResearch/hermes-agent/pull/19435) | oluwadareab12 | **Sửa lỗi tương thích Python 3.12+**: Thay thế `asyncio.get_event_loop()` bằng `get_running_loop()`, loại bỏ cảnh báo RuntimeWarning của luồng nền | 🔵 Mở (chờ hợp nhất) |
| [#19418](https://github.com/NousResearch/hermes-agent/pull/19418) | Mind-Dragon | **Tái cấu trúc hệ thống đầu vào TUI**: Thay thế logic phát hiện nền tảng bằng mô hình điều khiển bằng khả năng, giải quyết các vấn đề định tuyến sao chép, ngắt tín hiệu trên thiết bị đầu cuối SSH/tmux/cục bộ | 🔵 Mở |
| [#18340](https://github.com/NousResearch/hermes-agent/pull/18340) | kagura-agent | **Sửa lỗi độ chính xác tính toán chi phí**: Giải quyết vấn đề `estimated_cost_usd` luôn bằng 0 do bí danh như Google Gemini | 🔵 Mở |
| [#12794](https://github.com/NousResearch/hermes-agent/pull/12794) | thesunofdog | **Phủ ghi đè mô hình Agent con**: `delegate_task` hỗ trợ chỉ định model/provider theo Agent con, tăng cường khả năng điều phối đa mô hình | 🔵 Mở |
| [#19420](https://github.com/NousResearch/hermes-agent/pull/19420) | cmcgrabby-hue | **Tăng cường bảng điều khiển Kanban**: Tích hợp chế độ xem thẻ chiến lược Mission Control (nhiệm vụ ghép đôi người-máy Loại B) | 🔵 Mở |

### Các PR cộng đồng được người bảo trì cứu vớt (teknium1 chủ trì, tổng cộng 8 PR)

| PR | PR gốc | Nội dung sửa lỗi |
|:---|:---|:---|
| [#19422](https://github.com/NousResearch/hermes-agent/pull/19422) | #19230 | Hỗ trợ trò chuyện riêng tư QQBot C2C và nhóm |
| [#19424](https://github.com/NousResearch/hermes-agent/pull/19424) | #19259 | Ép buộc mã hóa UTF-8 trên Windows, sửa lỗi crash `UnicodeEncodeError` |
| [#19426](https://github.com/NousResearch/hermes-agent/pull/19426) | #19266 | Loại bỏ rò rỉ đánh dấu hàng rào thiết bị đầu cuối, làm sạch đầu ra đọc tệp |
| [#19427](https://github.com/NousResearch/hermes-agent/pull/19427) | #19351 | Loại bỏ trùng lặp khai báo danh tính worker Kanban, tránh xung đột với SOUL.md |
| [#19428](https://github.com/NousResearch/hermes-agent/pull/19428) | #19273 | Loại bỏ trùng lặp ghi âm giọng nói Discord, ngăn chặn phản hồi lặp lại |
| [#19429](https://github.com/NousResearch/hermes-agent/pull/19429) | #19317 | Cầu nối cấu hình cấp cao nhất `require_mention` của Telegram |
| [#19430](https://github.com/NousResearch/hermes-agent/pull/19430) | #19371 | Chuẩn hóa tên lệnh Telegram (viết thường + dấu gạch dưới) |
| [#19432](https://github.com/NousResearch/hermes-agent/pull/19432) | #19372 | Sửa lỗi rò rỉ trạng thái tải lại kỹ năng Gateway |
| [#19433](https://github.com/NousResearch/hermes-agent/pull/19433) | - | Cập nhật số lần sử dụng kỹ năng nhiệm vụ Cron (trùng lặp với #18811) |
| [#19434](https://github.com/NousResearch/hermes-agent/pull/19434) | #19356 | Sửa lỗi truyền khóa API Anthropic |

**Đánh giá tiến độ tổng thể**: Các hợp nhất hôm nay chủ yếu tập trung vào **sửa lỗi ổn định**, bao phủ 4 nền tảng Windows, Discord, Telegram, QQ, đồng thời hoàn thiện quản lý vòng đời nhiệm vụ/kỹ năng. Tái cấu trúc kiến trúc TUI và sửa lỗi tính toán chi phí cho thấy dự án đang chuyển từ "chồng chất chức năng" sang "đánh bóng kỹ thuật".

---

## 4. Điểm nóng cộng đồng

### Các Issues có hoạt động thảo luận sôi nổi nhất

| Hạng 1 | Issue | Bình luận | Yêu cầu cốt lõi |
|:---|:---|:---|:---|
| 🥇 | [#8430](https://github.com/NousResearch/hermes-agent/issues/8430) `context_length` bị bỏ qua | 6 | **Tương thích mô hình**: Người dùng mô hình cửa sổ ngữ cảnh nhỏ (<64K) bị chặn bởi giới hạn mã hóa cứng, cơ chế ghi đè cấu hình không hoạt động |
| 🥈 | [#14637](https://github.com/NousResearch/hermes-agent/issues/14637) Lỗi xác thực OpenRouter | 5 | **Độ tin cậy của nhà cung cấp bên thứ ba**: Ưu tiên cấu hình khóa API và tệp `.env` bị nhầm lẫn, đã đóng |
| 🥉 | [#19214](https://github.com/NousResearch/hermes-agent/issues/19214) Bẫy cấu hình `terminal.cwd` | 5 | **Trải nghiệm CLI**: Quy trình thiết lập cố định vĩnh viễn thư mục làm việc thành `$HOME`, đi ngược lại trực giác của người dùng |

### Tín hiệu có phản ứng cao

| Issue | 👍 | Tín hiệu |
|:---|:---|:---|
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) Lazy loading lược đồ công cụ | 7 | **Hiệu quả Token là điểm đau mạnh nhất của cộng đồng**, 50+ công cụ tiêm toàn bộ mỗi lần tiêu tốn 3500-5000 tokens |

**Phân tích yêu cầu**: Mâu thuẫn cốt lõi của cộng đồng nằm ở **"tính năng phong phú vs. hiệu quả tài nguyên"**. Các vấn đề về phồng Token của hệ thống công cụ và hệ thống kỹ năng (#6839, #17649, #13332) nhận được nhiều sự ủng hộ nhất, cho thấy tỷ lệ người dùng mô hình cục bộ và người dùng nhạy cảm về chi phí đang gia tăng. "Bẫy im lặng" của hệ thống cấu hình (#19214, #8430) cho thấy độ phức tạp của dự án đã vượt quá ngưỡng thân thiện với người mới bắt đầu.

---

## 5. Lỗi và ổn định

| Mức độ ưu tiên | Issue | Mô tả | Trạng thái PR Fix |
|:---|:---|:---|:---|
| **P1** | [#13248](https://github.com/NousResearch/hermes-agent/issues/13248) | Slack vòng lặp thử lại phản hồi trống trong luồng nhóm (claude-