# OpenClaw Sinh nhật 2026-04-07

> Issues: 500 | PRs: 500 | Dự án bao phủ: 11 | Thời gian tạo: 2026-04-07 00:12 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
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

## Báo cáo chuyên sâu dự án OpenClaw

# Báo cáo hàng ngày về tiến độ dự án OpenClaw | 2026-04-07

## 1. Tổng quan hôm nay

Dự án OpenClaw hôm nay cho thấy **mức độ hoạt động cực kỳ cao**, với 500 cập nhật Issues (417 hoạt động/mở mới, 83 đóng) và 500 cập nhật PR (321 chờ hợp nhất, 179 đã hợp nhất/đóng) trong 24 giờ, cùng với việc phát hành phiên bản quan trọng **v2026.4.5**. Thảo luận cộng đồng tập trung vào **những khó khăn khi di chuyển sang thay đổi mang tính phá vỡ của hệ thống cấu hình**, **sự cố tương thích trên nền tảng Windows**, và **nhu cầu cấp thiết về các ứng dụng khách đa nền tảng (Linux/Windows)**. Dự án đang trong giai đoạn lặp lại nhanh chóng, các vấn đề về độ ổn định và mở rộng tính năng được đẩy mạnh song song.

---

## 2. Phát hành phiên bản

### [v2026.4.5](https://github.com/openclaw/openclaw/releases/tag/v2026.4.5) — Tái cấu trúc lớn hệ thống cấu hình

| Loại | Nội dung |
|:---|:---|
| **Ngày phát hành** | 2026-04-05 |
| **Thay đổi cốt lõi** | Loại bỏ bí danh cấu hình chung cũ, thống nhất sử dụng đường dẫn chuẩn |

#### ⚠️ Thay đổi mang tính phá vỡ (Breaking Changes)

| Bí danh cũ bị loại bỏ | Đường dẫn chuẩn mới |
|:---|:---|
| `talk.voiceId` / `talk.apiKey` | Sử dụng khối cấu hình `voice` / `provider` chuẩn |
| `agents.*.sandbox.perSession` | Đổi thành công tắc boolean `enabled` |
| `browser.ssrfPolicy.allowPrivateNetwork` | Di chuyển sang cấu hình chính sách SSRF chuẩn |
| `hooks.internal.handlers` | Sử dụng cơ chế đăng ký hooks mới |
| Các công tắc `allow` cho channel/group/room | Thống nhất sử dụng công tắc `enabled` |

#### Lưu ý di chuyển

- **Di chuyển tự động**: Một số cấu hình có thể được chuyển đổi tự động thông qua lớp tương thích, nhưng các script tùy chỉnh dựa vào bí danh cũ sẽ không còn hiệu lực.
- **Lệnh xác minh**: Khuyến nghị chạy `openclaw config validate` để kiểm tra tính hợp lệ của cấu hình.
- **Người dùng Docker**: Cần kiểm tra xem tên khóa cấu hình được truyền qua biến môi trường có bị ảnh hưởng hay không.

---

## 3. Tiến độ dự án

### Các PR quan trọng đã được hợp nhất/đóng hôm nay

| PR | Tác giả | Loại | Ảnh hưởng |
|:---|:---|:---|:---|
| [#42825](https://github.com/openclaw/openclaw/pull/42825) | mraleko | Sửa lỗi phân tích mô hình | Khắc phục sự cố mô hình không xác định được quay lại im lặng, tăng cường khả năng hiển thị cho người dùng |
| [#58276](https://github.com/openclaw/openclaw/pull/58276) | praktika-engineer | Kiểm soát đề cập luồng Slack | Thêm `thread.requireExplicitMention`, giải quyết vấn đề `requireMention` bị bỏ qua bởi các đề cập ngầm trong luồng |
| [#62116](https://github.com/openclaw/openclaw/pull/62116) / [#62124](https://github.com/openclaw/openclaw/pull/62124) | Mariana-Codebase | Củng cố bảo mật | Runner giai đoạn Gateway HTTP chuyển sang chế độ **fail-closed**, ngăn chặn thực thi các giai đoạn tiếp theo khi có ngoại lệ ở các giai đoạn xác thực quan trọng |
| [#62180](https://github.com/openclaw/openclaw/pull/62180) | swseverance | Trải nghiệm phát triển | Sửa lỗi `pnpm check` thất bại |
| [#34389](https://github.com/openclaw/openclaw/pull/34389) | pulak-malhotra | Hành vi luồng Slack | Thêm tùy chọn cấu hình để vô hiệu hóa đề cập luồng ngầm |
| [#29982](https://github.com/openclaw/openclaw/pull/29982) | gwthm-in | Kiểm soát proxy con | Thêm tùy chọn `allowGeneric` để ngăn chặn việc tạo proxy con chung chung |
| [#61093](https://github.com/openclaw/openclaw/issues/61093) | — | Sửa lỗi hồi quy | Đã giải quyết vấn đề lỗi đăng ký thư mục mô hình backend `claude-cli` |
| [#31234](https://github.com/openclaw/openclaw/issues/31234) | — | Phụ thuộc bên ngoài | Đã đóng vấn đề giới hạn API của nhà cung cấp z.ai (dịch vụ bên ngoài đã phục hồi) |
| [#26108](https://github.com/openclaw/openclaw/issues/26108) | — | Âm thanh Discord | Đã đóng vấn đề không có âm thanh khi kết nối âm thanh |
| [#60772](https://github.com/openclaw/openclaw/issues/60772) | — | Định tuyến thực thi | Đã sửa lỗi hồi quy `exec host=node` |
| [#61793](https://github.com/openclaw/openclaw/issues/61793) | — | Bộ nhớ đệm gợi ý | Đã sửa lỗi xử lý khối suy nghĩ Claude Opus 4.5+ |

**Đánh giá tiến độ tổng thể**: Các PR được hợp nhất hôm nay tập trung vào **củng cố bảo mật** (xác thực fail-closed), **độ ổn định nền tảng** (xử lý đường dẫn Windows, xác minh cấu hình) và **trải nghiệm người dùng** (tối ưu hóa hành vi kênh Slack/Discord), đánh dấu bước tiến quan trọng của dự án hướng tới sẵn sàng sản xuất.

---

## 4. Điểm nóng cộng đồng

### 🔥 Các Issues được thảo luận sôi nổi nhất

| Thứ hạng | Issue | Bình luận | 👍 | Yêu cầu cốt lõi |
|:---|:---|:---:|:---|:---|
| 1 | [#75 Ứng dụng Clawdbot trên Linux/Windows](https://github.com/openclaw/openclaw/issues/75) | 74 | **Khoảng trống ứng dụng khách đa nền tảng**: Đã có ứng dụng trên macOS/iOS/Android, người dùng Linux/Windows mạnh mẽ yêu cầu ứng dụng gốc có chức năng tương đương |
| 2 | [#23538 Lỗi Anthropic setup-token 401](https://github.com/openclaw/openclaw/issues/23538) | 27 | **Độ tin cậy xác thực**: setup-token lưu thành công nhưng bị lỗi khi chạy, có thể tái hiện trong môi trường cách ly |
| 3 | [#46049 Bỏ qua cấu hình hết hạn yêu cầu LLM](https://github.com/openclaw/openclaw/issues/46049) | 22 | 7 | **Kiểm soát hết hạn không hoạt động**: Thời gian chờ 24 giờ được cấu hình vẫn bị cắt ngắn bởi giới hạn cứng bên trong, dẫn đến lỗi tác vụ dài |
| 4 | [#14593 Cài đặt kỹ năng brew trong Docker thất bại](https://github.com/openclaw/openclaw/issues/14593) | 21 | 16 | **Trải nghiệm container hóa**: Image chính thức thiếu brew, container Linux không thể cài đặt các kỹ năng phụ thuộc brew |
| 5 | [#52875 Không tìm thấy phiên `session_send`](https://github.com/openclaw/openclaw/issues/52875) | 17 | 0 | **Hồi quy giao tiếp giữa các proxy**: Sau khi nâng cấp lên 2026-3-22, proxy chính không thể liên hệ với các proxy khác, `session_list` hiển thị bất thường |

### 🔥 Xem trước các PR giá trị cao

| PR | Điểm nổi bật | Trạng thái |
|:---|:---|:---|
| [#62160](https://github.com/openclaw/openclaw/pull/62160) | **SDK Plugin: Đăng ký máy chủ MCP được quản lý** — Hỗ trợ gốc `api.registerMcpServer()`, plugin có thể đăng ký MCP và hợp nhất một cách xác định vào runtime nhúng | Chờ hợp nhất (XL) |
| [#62134](https://github.com/openclaw/openclaw/pull/62134) | **Xác thực OAuth máy chủ MCP từ xa** — Khắc phục lỗ hổng xác thực bảo vệ máy chủ MCP bằng OAuth | Chờ hợp nhất (XL) |
| [#62203](https://github.com/openclaw/openclaw/pull/62203) | **Kỹ năng trợ lý bất động sản** — Kỹ năng lĩnh vực dọc, bao gồm quản lý quy trình khách hàng tiềm năng, nhắc nhở theo dõi hàng ngày, tạo bản nháp bất động sản | Chờ hợp nhất (L) |
| [#62146](https://github.com/openclaw/openclaw/pull/62146) | **Nén điểm kiểm tra** — Phiên dài có thể được nén và khôi phục/kiểm tra, giải quyết điểm đau "mất phiên sau khi nén" | Chờ hợp nhất (XL) |
| [#61718](https://github.com/openclaw/openclaw/pull/61718) | **Nhà cung cấp nhúng GitHub Copilot** — Tái sử dụng đăng ký Copilot để tìm kiếm bộ nhớ, không cần khóa API bổ sung | Chờ hợp nhất (L) |

---

## 5. Lỗi và độ ổn định

### 🚨 Nghiêm trọng/Ưu tiên cao

| Issue | Loại | Mô tả | PR Fix | Trạng thái |
|:---|:---|:---|:---|:---|
| [#61911](https://github.com/openclaw/openclaw/issues/61911) | **Hồi quy/Sập** | Đường dẫn tuyệt đối trên Windows kích hoạt `ERR_UNSUPPORTED_ESM_URL_SCHEME` (`Received protocol 'c:'`), cài đặt mới 2026.4.5 bị sập ngay lập tức | [#62194](https://github.com/openclaw/openclaw/pull/62194) | 🟡 Có PR, chờ hợp nhất |
| [#61686](https://github.com/openclaw/openclaw/issues/61686) | **Cài đặt thất bại** | CLI bị hỏng sau khi cập nhật npm lên 2026.4.5, thiếu phụ thuộc runtime của plugin đóng gói | — | 🔴 Không có PR, cần chú ý khẩn cấp |
| [#61686](https://github.com/openclaw/openclaw/issues/61686) | **Cài đặt thất bại** | CLI bị hỏng sau khi cập nhật npm lên 2026.4.5, thiếu phụ thuộc runtime của plugin đóng gói | — | 🔴 Không có PR, cần chú ý khẩn cấp |
| [#61759](https://github.com/openclaw/openclaw/issues/61759) | **Plugin sập** | Plugin đóng gói nextcloud-talk bị hỏng: thiếu export activate, schema cấu hình trống | — | 🔴 Không có PR |
| [#61847](https://github.com/openclaw/openclaw/issues/61847) | **Hồi quy** | `gateway install --force` làm hỏng việc phát hiện chứng chỉ vai trò phiên bản EC2 của AWS | — | 🔴 Không có PR |

### ⚠️ Ưu tiên trung bình

| Issue | Loại | Mô tả | PR Fix |
|:---|:---|:---|:---|
| [#53959](https://github.com/openclaw/openclaw/issues/53959) | Hồi quy | gpt-5.3-codex nâng cấp hoàn toàn không thực thi công cụ | — |
| [#45110](https://github.com/openclaw/openclaw/issues/45110) | Hồi quy | Thay đổi tiền tố gợi ý làm mất bộ nhớ đệm, chi phí x1000 | — |
| [#59257](https://github.com/openclaw/openclaw/issues/59257) | Hồi quy | Ghi đè mô hình phiên cron bị bỏ qua âm thầm | — |
| [#47381](https://github.com/openclaw/openclaw/issues/47381) | Hành vi | Ghi đè mô hình agentTurn cron bị bỏ qua | — |
| [#60213](https://github.com/openclaw/openclaw/issues/60213) | Mất dữ liệu | Phiên bị bỏ qua âm thầm sau khi nén, bộ nhớ hội thoại bị mất hoàn toàn | [#62146](https://github.com/openclaw/openclaw/pull/62146) |
| [#59916](https://github.com/openclaw/openclaw/issues/59916) | Hành vi | Ollama/gemma4:26b bị kẹt khi khởi động "Wake up, my friend" | — |

---

## 6. Yêu cầu tính năng và tín hiệu lộ trình

### Khả năng thực thi cao (đã có PR hoặc lộ trình rõ ràng)

| Yêu cầu | Issue/PR | Khả năng đưa vào | Tín hiệu chính |
|:---|:---|:---:|:---|
| **Kỹ năng dọc bất động sản** | [#62203](https://github.com/openclaw/openclaw/pull/62203) | ⭐⭐⭐⭐⭐ | PR đã được gửi, chức năng hoàn chỉnh |
| **Tái sử dụng nhúng GitHub Copilot** | [#61718](https://github.com/openclaw/openclaw/pull/61718) | ⭐⭐⭐⭐⭐ | Giải quyết điểm đau của người dùng (không cần khóa API bổ sung) |
| **Điểm kiểm tra/Khả năng khôi phục nén** | [#62146](https://github.com/openclaw/openclaw/pull/62146) | ⭐⭐⭐⭐⭐ | Giải quyết khiếu nại mất dữ liệu |
| **Hỗ trợ MCP SDK Plugin** | [#62160](https://github.com/openclaw/openclaw/pull/62160) | ⭐⭐⭐⭐⭐ | Mở rộng cấp độ kiến trúc, người bảo trì chủ trì |
| **OAuth cho MCP** | [#62134](https://github.com/openclaw/openclaw/pull/62134) | ⭐⭐⭐⭐☆ | Cần thiết cho các tình huống doanh nghiệp |
| **Kiểm tra trước `preHook` cron** | [#62195](https://github.com/openclaw/openclaw/pull/62195) | ⭐⭐⭐⭐☆ | Hữu ích cho các tình huống nhạy cảm về tài nguyên |
| **Tăng cường tạo video** | [#61987](https://github.com/openclaw/openclaw/pull/61987), [#61988](https://github.com/openclaw/openclaw/pull/61988) | ⭐⭐⭐⭐☆ | Nhu cầu tùy chỉnh nhà cung cấp |

### Yêu cầu trung dài hạn (trong giai đoạn thảo luận)

| Yêu cầu | Issue | Mức độ nóng | Rào cản |
|:---|:---|:---:|:---|
| **Ứng dụng gốc Linux/Windows** | [#75](https://github.com/openclaw/openclaw/issues/75) | 🔥 74 bình luận | Đầu tư lớn về tài nguyên, cần nhóm đa nền tảng |
| **Mã hóa khóa API/Quản lý khóa** | [#7916](https://github.com/openclaw/openclaw/issues/7916) | 17 bình luận, 11 👍 | Thiết kế kiến trúc cần được xác định |
| **Giao thức ủy thác tác vụ giữa các proxy (Agent Economy)** | [#28106](https://github.com/openclaw/openclaw/issues/28106) | 6 bình luận | Độ phức tạp cao, cần quy trình RFC |
| **Hook thực thi trước khi phản hồi (cổng cứng)** | [#13583](https://github.com/openclaw/openclaw/issues/13583) | 7 bình luận, 1 👍 | Nhu cầu rõ ràng cho các tình huống tài chính/bảo mật |

---

## 7. Tóm tắt phản hồi người dùng

### 😤 Điểm đau cốt lõi

| Tình huống | Phản hồi điển hình | Issue nguồn |
|:---|:---|:---|
| **Bối rối khi di chuyển cấu hình** | "Cấu hình không hợp lệ sau khi nâng cấp, thông báo lỗi khó hiểu" | Nhiều Issues liên quan đến 2026.4.5 |
| **Windows là công dân hạng hai** | "Mỗi lần phiên bản lớn Windows đều gặp sự cố, đường dẫn/ESM/quyền" | [#61911](https://github.com/openclaw/openclaw/issues/61911), [#51887](https://github.com/openclaw/openclaw/issues/51887) |
| **Độ ổn định tác vụ dài** | "Thời gian chờ 24 giờ bị bỏ qua, tác vụ thất bại giữa chừng" | [#46049](https://github.com/openclaw/openclaw/issues/46049) |
| **Sợ mất dữ liệu** | "Phiên bị mất hoàn toàn sau khi nén, không thể khôi phục" | [#60213](https://github.com/openclaw/openclaw/issues/60213) |
| **Chi phí mất kiểm soát** | "Bộ nhớ đệm gợi ý không hoạt động làm chi phí tăng vọt 1000 lần" | [#45110](https://github.com/openclaw/openclaw/issues/45110), [#31708](https://github.com/openclaw/openclaw/issues/31708) |

### 😊 Điểm hài lòng

- **Linh hoạt triển khai đa nền tảng**: Hỗ trợ Docker, systemd, launchd hoàn hảo
- **Sự phong phú của kênh**: Tích hợp Slack, Discord, Telegram, Matrix,... được đánh giá cao
- **Khả năng mở rộng kỹ năng**: Cơ chế kỹ năng tùy chỉnh linh hoạt (nhưng cần tăng cường tài liệu)

### 🎯 Hiểu biết về trường hợp sử dụng

| Tình huống | Đặc điểm nhu cầu |
|:---|:---|
| **Tự động hóa doanh nghiệp** | Cần độ tin cậy của cron, hiệu lực ghi đè mô hình, kiểm tra trước thực thi |
| **Thử nghiệm AI cục bộ** | Độ ổn định tích hợp Ollama, phát hiện tự động mô hình trực quan |
| **Hợp tác liên nhóm** | Giao tiếp giữa các proxy (A2A), duy trì phiên, cô lập quyền truy cập |
| **Vận hành nhạy cảm về chi phí** | Hiệu quả bộ nhớ đệm gợi ý, kiểm soát ghi đè mô hình, tính phí minh bạch |

---

## 8. Hàng tồn đọng cần xử lý

### ⏰ Issues giá trị cao không phản hồi trong thời gian dài

| Issue | Thời gian tạo | Cập nhật cuối | Trạng thái | Nhắc nhở |
|:---|:---|:---|:---|:---|
| [#75 Ứng dụng Linux/Windows](https://github.com/openclaw/openclaw/issues/75) | 2026-01-01 | 2026-04-06 | Mở 97 ngày | **Yêu cầu tính năng ưu tiên cao nhất**, cần quyết định từ bộ phận sản phẩm |
| [#7916 Mã hóa khóa API](https://github.com/openclaw/openclaw/issues/7916) | 2026-02-03 | 2026-04-06 | Mở 63 ngày | Nhu cầu tuân thủ bảo mật mới, cần thiết kế kiến trúc |
| [#22278 Phát hành JSON Schema](https://github.com/openclaw/openclaw/issues/22278) | 2026-02-21 | 2026-04-06 | Mở 45 ngày | Trải nghiệm nhà phát triển, cơ sở xác minh cấu hình |
| [#28191 Vòng lặp sập do xung đột cổng** | 2026-02-27 | 2026-04-06 | Mở 39 ngày | Độ tin cậy vận hành, kiểm tra cổng trước khi khởi động |
| [#10386 Phát hiện kỹ năng không gian làm việc** | 2026-02-06 | 2026-04-06 | Mở 60 ngày | Rào cản mở rộng hệ sinh thái kỹ năng |

### PR cần quyết định từ người bảo trì

| PR | Thời gian chờ | Điểm nghẽn |
|:---|:---|:---|
| [#55396 Kênh SMS Kudosity](https://github.com/openclaw/openclaw/pull/55396) | ~12 ngày | Quy trình xem xét plugin kênh |
| [#56384 Chuẩn hóa ID nhóm Feishu** | ~10 ngày | Xác minh trường hợp người dùng doanh nghiệp |
| [#59477 Thông báo A2A proxy sandbox** | ~5 ngày | Xem xét ranh giới bảo mật |

---

## Phụ lục: Chỉ số sức khỏe dữ liệu

| Chỉ số | Giá trị | Đánh giá |
|:---|:---:|:---|
| Tỷ lệ xử lý Issues hàng ngày | 16.6% (83/500) | ⚠️ Thấp, rủi ro tồn đọng |
| Tỷ lệ hợp nhất PR hàng ngày | 35.8% (179/500) | ✅ Lành mạnh, phát triển năng động |
| Phản hồi lỗi nghiêm trọng | 2/5 có PR | ⚠️ Cần tăng tốc |
| Mức độ tham gia cộng đồng | 74 bình luận Issue | ✅ Rất cao |
| Tần suất phát hành phiên bản | 2026.4.5 trong 5 ngày | ✅ Lặp lại nhanh chóng |

---

*Thời gian tạo báo cáo hàng ngày: 2026-04-07 | Nguồn dữ liệu: API công khai GitHub OpenClaw*

---

## So sánh ngang dự án cùng ngành

# Phân tích so sánh ngang hệ sinh thái trợ lý AI cá nhân/agent tự trị
## Báo cáo động ngày 2026-04-07

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái trợ lý AI cá nhân mã nguồn mở đang trong giai đoạn **phân hóa nhanh và chuyên môn hóa song song**: OpenClaw, dự án dẫn đầu, dẫn dắt tái cấu trúc hệ thống cấu hình và mở rộng đa nền tảng với tốc độ lặp lại cực cao (500 Issues/500 PR hoạt động hàng ngày), trong khi các lực lượng mới nổi như NanoBot, PicoClaw đang nhanh chóng đột phá trong các tình huống cụ thể (bất động sản, bảo mật đầu cuối). MCP (Model Context Protocol) trở thành tiêu chuẩn thực tế, hơn 60% dự án đầu tư tích hợp, nhưng mức độ hoàn chỉnh khác nhau đáng kể. Nền tảng Windows tiếp tục trở thành "công dân hạng hai", khoảng trống ứng dụng gốc đa nền tảng và ma sát khi triển khai container hóa là những điểm đau chung. Tổng thể cho thấy xu hướng phân hóa từ "giai đoạn mở rộng chức năng" sang "giai đoạn củng cố chất lượng".

---

## 2. So sánh mức độ hoạt động của từng dự án

| Dự án | Issues (hoạt động/đóng) | PR (chờ duyệt/đã hợp nhất) | Phát hành phiên bản | Đánh giá sức khỏe |
|:---|:---:|:---:|:---|:---|
| **OpenClaw** | 417 / 83 | 321 / 179 | v2026.4.5 (thay đổi phá vỡ) | ⚡ **Hoạt động cực cao**, lặp lại nhanh chóng đi kèm với nợ kỹ thuật về độ ổn định |
| **NanoBot** | 18 / 8 | 30 / 26 | v0.1.5 (cột mốc trang web) | 🚀 **Bùng nổ hoạt động cao**, giai đoạn củng cố chất lượng, 3 P0 không sửa lỗi |
| **PicoClaw** | 8 / 0 | 4 / 2 | Không có | 🔧 **Hoạt động trung-cao**, phản ứng bảo mật nhanh, chức năng cần mở rộng |
| **NanoClaw** | 8 / - | 12 / 14 | Không có | ⚖️ **Hoạt động trung-cao**, cơ sở hạ tầng ổn định, thiếu sót vận hành SSL |
| **NullClaw** | - | 5 / 2 | Không có | 🛠️ **Hoạt động trung bình**, thúc đẩy kiến trúc API Admin cấp cao |
| **IronClaw** | 28 / 5 | 45 / 5 | Không có (v0.24.1 chờ phát hành) | ⚠️ **Hoạt động cao áp lực cao**, mô hình Ownership nợ kỹ thuật hồi quy |
| **LobsterAI** | 0 / 0 | 11 / 0 | Không có | 📦 **Giai đoạn lặp lại chức năng**, tác vụ định kỳ dày đặc, 0 thảo luận cộng đồng |
| **Moltis** | 11 / 4 | 9 / 6 | 20260406.04 | 🌐 **Thúc đẩy sẵn sàng cho doanh nghiệp**, yêu cầu Matrix 40 ngày không phản hồi |
| **CoPaw** | 24 / 4 | 12 / 3 | Không có | 🐛 **Tấn công độ ổn định**, vòng đời MCP trở thành tâm điểm |
| **ZeptoClaw** | 4 / 0 | 6 / 2 | Không có | 🎯 **Khu vực sâu kiến trúc**, thiết kế đồng thời và tương thích API song song |
| **TinyClaw** | 0 / 0 | 0 / 0 | Không có | 💤 **Không hoạt động** |

**Chỉ số chính**: OpenClaw có khối lượng xử lý hàng ngày bằng 10-20 lần dự án đứng đầu tiếp theo; tỷ lệ hoạt động/đóng của IronClaw là 5.6:1 cho thấy điểm nghẽn về khả năng xử lý; LobsterAI/TinyClaw tạo ra sự phân cực về mức độ hoạt động.

---

## 3. Vị thế của OpenClaw trong hệ sinh thái

### Lợi thế cốt lõi
| Chiều | Biểu hiện | Tham chiếu so sánh |
|:---|:---|:---|
| **Hiệu ứng quy mô** | 500 Issues/PR hoạt động hàng ngày, quy mô cộng đồng gấp hơn tổng số dự án còn lại | NanoBot 56 PR, IronClaw 50 PR là những dự án gần nhất |
| **Hoàn chỉnh hệ sinh thái** | 20+ kênh (Slack/Discord/Telegram/Matrix), nhiều engine (Claude/Codex/Ollama), SDK Plugin | Moltis 20+ Provider nhưng lớp kênh mỏng |
| **Chiều sâu chức năng doanh nghiệp** | Kiểm tra trước thực thi cron, điểm kiểm tra nén, chính sách SSRF, xác thực fail-closed | CoPaw vừa bước vào giai đoạn tối ưu hóa vòng đời MCP |
| **Nhịp điệu phiên bản** | Phát hành v2026.4.5 trong 5 ngày, quản lý chủ động các thay đổi phá vỡ | Chứng chỉ SSL của NanoClaw 9 ngày không sửa, lộ ra khoảng cách vận hành |

### Khác biệt về lộ trình kỹ thuật
| Đặc điểm | OpenClaw | Điển hình hệ sinh thái (ví dụ NanoBot/Moltis) |
|:---|:---|:---|
| **Mô hình cấu hình** | YAML khai báo + xác minh Schema nghiêm ngặt, chủ động dọn dẹp bí danh cũ | Kết hợp biến môi trường, số phiên bản mã hóa cứng (NanoBot #2857) |
| **Kiến trúc mở rộng** | SDK Plugin gốc + đăng ký máy chủ MCP (#62160) | Chủ yếu là kỹ năng/công cụ mã hóa cứng, MCP là lớp thích ứng bên ngoài |
| **Đa người dùng** | Tích hợp sớm phân lập không gian làm việc/namespace | Gần đây mới bắt đầu chú ý (đau đớn mô hình Ownership của IronClaw) |
| **Chiến lược ứng dụng khách** | Ứng dụng gốc macOS/iOS/Android đã phát hành, khoảng trống Linux/Windows là tâm điểm (#75, 74 bình luận) | Chủ yếu là Web/CLI, trải nghiệm di động phân mảnh |

### So sánh quy mô cộng đồng
- **OpenClaw #75** (Yêu cầu ứng dụng Linux/Windows): Mở 97 ngày, 74 bình luận, 67 👍 — Độ nóng của một Issue đơn lẻ vượt quá tổng hoạt động hàng ngày của hầu hết các dự án
- **Moltis #233** (Hỗ trợ Matrix): Mở 40 ngày, 5 👍 — Lời kêu gọi lâu dài nhưng không có dòng thời gian chính thức
- **IronClaw #70** (Hệ thống Feed): Mở 52 ngày, không có PR — Rủi ro trôi dạt lộ trình

---

## 4. Hướng công nghệ được quan tâm chung

| Hướng công nghệ | Dự án liên quan | Yêu cầu cụ thể và tiến độ |
|:---|:---|:---|
| **Hỗ trợ hệ sinh thái MCP đầy đủ** | OpenClaw (#62160), NanoBot (#2861), CoPaw (#299, #2979), NanoClaw (#1674) | Từ Tools mở rộng sang Resources+Prompts; Xác thực OAuth (#62134); Quản lý vòng đời (bộ nhớ đệm/tải lại/làm sạch) |
| **Sửa lỗi nền tảng Windows** | OpenClaw (#61911 lỗi URL ESM), NanoBot (#2846 lỗi Unicode), IronClaw (#2081 phân giải localhost), PicoClaw (tập trung vào Android) | Xử lý đường dẫn, mã hóa, nhất quán ràng buộc mạng; lỗi ngay lập tức khi cài đặt mới OpenClaw 2026.4.5 là trường hợp nghiêm trọng nhất |
| **Độ ổn định tác vụ dài/hết hạn** | OpenClaw (#46049 hết hạn 24h không hiệu quả), NanoBot (#2638 tăng trưởng phiên không giới hạn), ZeptoClaw (#486 kiến trúc không chặn) | Mâu thuẫn giữa hết hạn cấu hình và giới hạn cứng; bảo vệ chống OOM bộ nhớ; yêu cầu thiết kế đồng thời thực sự nổi lên |
| **Tối ưu hóa định tuyến đa mô hình** | OpenClaw (định tuyến từ khóa #1679-1682), NanoClaw (#1680 khớp chuỗi không mất chi phí), ZeptoClaw (#468 định tuyến tiền tố nhà cung cấp) | Định tuyến không mất chi phí trong các tình huống nhạy cảm về chi phí; tương thích lớp tổng hợp như OpenRouter |
| **Độ tin cậy tác vụ định kỳ/tự động hóa** | OpenClaw (cron preHook #62195), IronClaw (HEARTBEAT #757), LobsterAI (5 PR lặp lại dày đặc), Moltis (#564 dọn dẹp tự động) | Từ "có thể chạy" đến các yêu cầu cấp doanh nghiệp "có thể quan sát, có thể gỡ lỗi, tài nguyên có thể thu hồi" |
| **Lưu trữ và khôi phục dữ liệu** | OpenClaw (#62146 điểm kiểm tra nén), NanoBot (#60213 mất nén), IronClaw (#1566 tóm tắt phân cấp), ZeptoClaw (nén ngữ cảnh phân cấp) | Bộ nhớ hội thoại dài không mất; có thể khôi phục sau khi nén; quản lý ngữ cảnh phân lớp |

---

## 5. Phân tích định vị khác biệt

| Dự án | Tập trung chức năng cốt lõi | Chân dung người dùng mục tiêu | Đặc điểm kiến trúc kỹ thuật |
|:---|:---|:---|:---|
| **OpenClaw** | Nền tảng đa người dùng cấp doanh nghiệp, hệ sinh thái SDK Plugin, ứng dụng khách gốc | Kỹ sư SRE/Nền tảng của nhóm vừa và lớn, quản trị viên không gian làm việc | Cấu hình khai báo, Schema nghiêm ngặt, phân lập trừu tượng sớm |
| **NanoBot** | Trải nghiệm triển khai nhanh, tài liệu đa ngôn ngữ, ưu tiên mô hình cục bộ | Nhà phát triển Trung Quốc, người thử nghiệm cá nhân, người dùng Ollama | Chủ yếu Python, cấu hình biến môi trường, nợ quản lý phiên bản |
| **PicoClaw** | Bảo mật đầu cuối, trải nghiệm di động (Android), tối giản hóa | Người dùng Termux/môi trường hạn chế, tình huống trợ lý di động cá nhân | Thực hiện bằng Go, tăng cường bảo mật lọc ANSI, chế độ Gateway |
| **NanoClaw** | Kiến trúc đa engine (Codex), độ ổn định kênh tin nhắn, proxy xem xét | Người thử nghiệm đa mô hình, doanh nghiệp nhạy cảm tuân thủ | Quản lý vòng đời container chi tiết, xác thực đám mây gốc như SigV4 |
| **IronClaw** | Mô hình quyền sở hữu đa người dùng, sandbox WASM, tích hợp hệ sinh thái Near | Nhà phát triển Web3/blockchain, người xây dựng ứng dụng phi tập trung | Thực hiện bằng Rust, phân lập WASM, thúc đẩy bởi nhánh staging |
| **LobsterAI** | Giao diện người dùng cấp doanh nghiệp cho tác vụ định kỳ, máy tính để bàn Electron, cô lập kỹ năng | Người dùng công cụ năng suất, nhà thiết kế quy trình làm việc tự động | Electron + SDK Claude Agent, cô lập trạng thái cấp phiên |
| **Moltis** | Agent điều khiển bằng Webhook, cầu nối Agent bên ngoài, khả năng quan sát | Nhà phát triển kiến trúc hướng sự kiện, tình huống điều phối nhiều Agent | Cổng Webhook chung, theo dõi Langfuse, Copilot Enterprise |
| **CoPaw** | Dễ sử dụng mô hình cục bộ (llama.cpp), trung tâm kỹ năng (Skills Hub), cơ chế tải lại | Người dùng ưu tiên quyền riêng tư, tình huống ngoại tuyến, nhà phát triển kỹ năng | Hệ thống kỹ năng Python, lớp thích ứng MCP, cơ chế tải lại |
| **ZeptoClaw** | Tự động hóa trình duyệt, nén ngữ cảnh, tương thích API OpenAI | Người dùng tác vụ nghiên cứu, nhà phát triển tích hợp API | Quản lý ngữ cảnh phân lớp, engine kép Lightpanda/Chrome |

**Phân hóa chính**: OpenClaw/IronClaw/Moltis hướng tới **nền tảng hóa** (đa người dùng, khả năng quan sát, quản lý doanh nghiệp), NanoBot/CoPaw/PicoClaw kiên trì với **cá nhân hóa** (khởi động nhanh, ưu tiên cục bộ, nhạy cảm với quyền riêng tư), NanoClaw/ZeptoClaw khám phá kiến trúc **đa engine/nghiên cứu**.

---

## 6. Lớp phân tầng mức độ nóng cộng đồng và sự trưởng thành

### 🔥 Giai đoạn lặp lại nhanh (Mở rộng chức năng > Củng cố chất lượng)

| Dự án | Tín hiệu đặc trưng | Rủi ro |
|:---|:---|:---|
| **OpenClaw** | 500 hoạt động hàng ngày, phát hành thay đổi phá vỡ, tái cấu trúc cấu hình v2026.4.5 | Hồi quy độ ổn định trên Windows, ma sát di chuyển cấu hình |
| **NanoBot** | Cột mốc v0.1.5, 27 người đóng góp mới, 66 PR hợp nhất | 3 lỗi P0 không sửa, nhầm lẫn số phiên bản |
| **IronClaw** | Triển khai mô hình Ownership, 45 PR tồn đọng, chức năng đa người dùng dày đặc | Tích lũy nợ hồi quy (#2084, #2089, #2079), độ trễ phản hồi 5-10 giây |

### ⚖️ Giai đoạn củng cố chất lượng (Độ ổn định > Tính năng mới)

| Dự án | Tín hiệu đặc trưng | Trận chiến quan trọng |
|:---|:---|:---|
| **CoPaw** | Tối ưu hóa vòng đời MCP, bảo tồn tải lại, sửa kênh WhatsApp | Tỷ lệ chiếm dụng CPU 100% khi rảnh (#2888), ứng dụng khách Windows bị vô hiệu hóa |
| **ZeptoClaw** | Chữa khỏi lỗi im lặng Telegram, PR tự động hóa trình duyệt chờ duyệt 11 ngày | Kiến trúc đồng thời (#486), gọi công cụ OpenAI (#489) |
| **Moltis** | Dọn dẹp cron tự động, sửa lỗi xây dựng Docker, thúc đẩy chức năng doanh nghiệp | Matrix 40 ngày không phản hồi, OAuth ràng buộc mạng không hợp lệ |

### 📦 Giai đoạn bổ sung chức năng (Đào sâu tình huống dọc)

| Dự án | Tín hiệu đặc trưng | Điểm nghẽn |
|:---|:---|:---|
| **LobsterAI** | Vòng lặp đóng 5 PR tác vụ định kỳ, không thảo luận cộng đồng | Mức độ tham gia của người đóng góp bên ngoài, nhiệt độ MCP giảm |
| **PicoClaw** | Phản ứng bảo mật nhanh (sửa lỗi trong ngày #2377), phạm vi chức năng hẹp | Tích hợp doanh nghiệp OpenIM, tính dễ sử dụng cấu hình Provider |

### 💤 Giai đoạn đình trệ/quan sát

| Dự án | Trạng thái |
|:---|:---|
| **TinyClaw** | Không hoạt động trong 24 giờ |
| **NullClaw** | Thúc đẩy kiến trúc API Admin nhưng khối lượng hợp nhất thấp, PR #779 hồi quy 24 giờ không phản hồi |

---

## 7. Tín hiệu xu hướng đáng chú ý

### Tín hiệu 1: MCP từ "checkbox chức năng" trở thành "hạt nhân kiến trúc"
> **Bằng chứng**: Đăng ký MCP gốc cho SDK Plugin OpenClaw (#62160), CoPaw tối ưu hóa bộ nhớ đệm và tải lại MCP với 2 PR, NanoBot hoàn thành hỗ trợ MCP với PR (#2861)
> **Giá trị**: MCP đang chuyển từ lớp thích ứng giao thức bên ngoài thành cơ sở hạ tầng mở rộng cho nền tảng agent. Nhà phát triển nên chú ý đến **quản lý vòng đời máy chủ MCP** (đăng ký → khám phá → làm sạch), thay vì chỉ khả năng gọi công cụ.

### Tín hiệu 2: Định tuyến "không mất chi phí" trở thành yêu cầu bắt buộc cho các tình huống nhạy cảm về chi phí
> **Bằng chứng**: 3 Issues lặp lại của NanoClaw nhấn mạnh "khớp chuỗi không mất chi phí" (#1679-1682), PR định tuyến từ khóa của ZeptoClaw (#1680)
> **Giá trị**: Dưới áp lực chi phí gọi LLM, vị thế kiến trúc của **lớp lọc phía trước** (từ khóa, quy tắc, bộ nhớ đệm) đang tăng lên, tạo thành thiết kế phân lớp với định tuyến ngữ nghĩa.

### Tín hiệu 3: Nợ kỹ thuật nền tảng Windows phơi bày "khoảng cách trải nghiệm nhà phát triển"
> **Bằng chứng**: Lỗi URL ESM của OpenClaw, lỗi Unicode của NanoBot, phân giải localhost của IronClaw, tự động đóng ứng dụng khách CoPaw
> **Giá trị**: Tính nhất quán đa nền tảng vẫn là cuộc chiến chưa hoàn thành của các dự án hàng đầu. **WSL2/container hóa không phải là giải pháp vạn năng**, xử lý đường dẫn gốc Windows, mã hóa và mô hình quyền cần đầu tư chuyên biệt.

### Tín hiệu 4: "Khả năng khôi phục" của quản lý phiên/bộ nhớ trở thành nền tảng tin cậy
> **Bằng chứng**: Điểm kiểm tra nén của OpenClaw (#62146), nỗi sợ mất nén của NanoBot (#60213), tóm tắt phân cấp của IronClaw (#1566), nén ngữ cảnh đa lớp của ZeptoClaw (#460)
> **Giá trị**: Người dùng chuyển từ "có thể trò chuyện" sang "dám giao phó tác vụ dài", **điểm kiểm tra, nén phân lớp, suy giảm dần dần** là những chỉ số quan trọng cho việc sẵn sàng sản xuất.

### Tín hiệu 5: Cầu nối Agent bên ngoài báo hiệu sự hình thành "Internet Agent"
> **Bằng chứng**: PR cầu nối Agent bên ngoài của Moltis (#566), CoPaw Provider GitHub Copilot, mô hình quyền sở hữu đa người dùng của IronClaw
> **Giá trị**: Ranh giới của nền tảng agent đơn lẻ mờ đi, **giao tiếp A2A (Agent-to-Agent), proxy chứng chỉ, ủy thác đa nền tảng** sẽ trở thành tâm điểm kiến trúc thế hệ tiếp theo.

---

**Thời gian tạo báo cáo**: 2026-04-07
**Nguồn dữ liệu**: Tóm tắt động API công khai GitHub của từng dự án

---

## Báo cáo chi tiết dự án cùng ngành

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Báo cáo hàng ngày về tiến độ dự án NanoBot | 2026-04-07

## 1. Tổng quan hôm nay

Dự án NanoBot hôm nay cho thấy **sự bùng nổ hoạt động cao**: phát hành chính thức v0.1.5 đánh dấu dự án bước vào giai đoạn mới, ra mắt trang web và tài liệu đa ngôn ngữ; 56 PR sôi nổi trong 24 giờ (30 chờ duyệt), nhịp độ xử lý Issues tăng nhanh (8 đóng/18 hoạt động). Trọng tâm cộng đồng tập trung vào **mở rộng kênh đa nền tảng** (Web/Discord/Matrix/Feishu), **hỗ trợ đầy đủ hệ sinh thái MCP** và **củng cố độ ổn định**. Đáng chú ý, dự án đang trải qua nợ tương thích cấu hình và sự hỗn loạn quản lý phiên bản do lặp lại nhanh chóng, cần cảnh giác với sự tích lũy nợ kỹ thuật.

---

## 2. Phát hành phiên bản

### Phát hành chính thức v0.1.5 🎉
| Thuộc tính | Chi tiết |
|:---|:---|
| **Thời gian phát hành** | 2026-04-06 |
| **Số lượng PR hợp nhất** | 66 |
| **Người đóng góp mới** | 27 |
| **Cột mốc** | Phiên bản chính thức đầu tiên có trang web độc lập |

**Cập nhật cốt lõi:**
- Ra mắt trang web tài liệu chính thức [nanobot.wiki](https://nanobot.wiki), hỗ trợ đa ngôn ngữ Anh/Trung/Nhật/Hàn/Tây Ban Nha
- Cơ sở hạ tầng quản trị dự án hoàn thiện

**⚠️ Các vấn đề đã biết (phát hiện trong ngày):**
- Phiên bản mã hóa cứng `0.4.1` trong `__init__.py` không khớp với `0.1.5` của `pyproject.toml` → PR #2860 đã gửi để sửa lỗi
- Quản lý số phiên bản hỗn loạn có thể ảnh hưởng đến phân tích cú pháp phụ thuộc hạ nguồn

---

## 3. Tiến độ dự án

### Các PR chính đã hợp nhất/đóng hôm nay (8 PR)

| PR | Tác giả | Đóng góp cốt lõi | Ảnh hưởng |
|:---|:---|:---|:---|
| [#2525](https://github.com/HKUDS/nanobot/pull/2525) | LeoFYH | Sửa lỗi "thực thi giả" (false positive execution), tối ưu hóa báo cáo tiến độ | Giảm bớt sự bối rối của người dùng về "hoàn thành giả" |
| [#2864](https://github.com/HKUDS/nanobot/pull/2864) → [#2865](https://github.com/HKUDS/nanobot/pull/2865) | LeoFYH | Sửa lỗi đếm byte/ký tự của `WriteFileTool` | Báo cáo chính xác cho nội dung không phải ASCII (tiếng Trung/emoji) |
| [#2848](https://github.com/HKUDS/nanobot/pull/2848) | Psinary | Sửa lỗi tương thích cấu hình kênh plugin | Khắc phục lỗi kiểm tra quyền `allow_from` |
| [#1341](https://github.com/HKUDS/nanobot/pull/1341) | dmagyar | [Đóng và mở lại] Kênh trò chuyện Web SSE streaming | Được thay thế bởi #2871 sau khi xác minh kiến trúc |
| [#2796](https://github.com/HKUDS/nanobot/issues/2796) sửa lỗi liên quan | - | Vấn đề bảo vệ SSRF quá mức của công cụ Exec | Khôi phục khả năng tích hợp dịch vụ cục bộ (PinchTab và các công cụ tự động hóa trình duyệt khác) |

**Đánh giá tiến độ tổng thể**: Dự án đang chuyển từ "giai đoạn mở rộng chức năng" sang "giai đoạn củng cố chất lượng", độ ổn định vòng lặp cốt lõi và khả năng tương thích đa nền tảng trở thành ưu tiên.

---

## 4. Điểm nóng cộng đồng

### Các vấn đề được thảo luận sôi nổi nhất

| Thứ hạng | Issue/PR | Số bình luận | Yêu cầu cốt lõi | Phân tích sâu |
|:---|:---|:---:|:---|:---|
| 1 | [#2638](https://github.com/HKUDS/nanobot/issues/2638) Lịch sử phiên tăng trưởng không giới hạn | 5 | **Lỗi kiến trúc quản lý bộ nhớ** | Thiếu cơ chế dự phòng khi hệ thống nén bộ nhớ gặp lỗi, có thể dẫn đến OOM trong môi trường sản xuất; cần giới hạn cứng + chiến lược suy giảm |
| 2 | [#2796](https://github.com/HKUDS/nanobot/issues/2796) Công cụ Exec chặn localhost | 5 | **Cân bằng giữa bảo mật và tiện lợi** | Chính sách bảo vệ SSRF quá mức ảnh hưởng đến quy trình làm việc phát triển cục bộ (tự động hóa trình duyệt như PinchTab); đã đóng nhưng cần ghi chú cấu hình ngoại lệ |
| 3 | [#2795](https://github.com/HKUDS/nanobot/issues/2795) Telegram hiển thị quá trình suy nghĩ | 4 | **Hồi quy UX** | Sau khi nâng cấp v0.1.4→v0.1.5, hành vi thay đổi, người dùng mong đợi chế độ "chỉ xuất kết quả" có thể cấu hình |
| 4 | [#2871](https://github.com/HKUDS/nanobot/pull/2871) Kênh trò chuyện Web (giải pháp mới) | Hoạt động | **Xác minh kiến trúc không xâm nhập** | Tận dụng cơ chế `_wants_stream` hiện có để tránh sửa đổi cốt lõi, thể hiện sự đồng thuận của cộng đồng với nguyên tắc "ưu tiên plugin hóa" |

**Tín hiệu**: Cộng đồng đang chuyển đổi từ "có thể sử dụng" sang "sử dụng tốt", đặt ra yêu cầu cao hơn về khả năng cấu hình, khả năng quan sát và trải nghiệm phát triển.

---

## 5. Lỗi và độ ổn định

### Sắp xếp theo mức độ nghiêm trọng

| Mức độ nghiêm trọng | Issue | Mô tả | Trạng thái |
|:---|:---|:---|:---|
| 🔴 **P0-Hệ thống treo** | [#2828](https://github.com/HKUDS/nanobot/issues/2828) | Tìm kiếm DuckDuckGo khiến toàn bộ hệ thống không phản hồi (buộc dừng Proxmox) | 🆘 **Không có PR sửa lỗi**, cần điều tra khẩn cấp |
| 🔴 **P0-Công cụ bị lỗi** | [#2829](https://github.com/HKUDS/nanobot/issues/2829) | Gọi công cụ Ollama hoàn toàn bị lỗi (gemma4:e4b) | 🆘 **Không có PR sửa lỗi**, lớp chuyển đổi định dạng có vẻ bị lỗi |
| 🟡 **P1-Bỏ qua bảo mật** | [#2826](https://github.com/HKUDS/nanobot/issues/2826) | `restrictToWorkspace=true` vẫn có thể xóa bất kỳ tệp nào | 🆘 **Không có PR sửa lỗi**, cơ chế sandbox có lỗi cơ bản |
| 🟡 **P1-Sập** | [#2846](https://github.com/HKUDS/nanobot/issues/2846) | `UnicodeEncodeError` CLI (emoji/ký tự proxy) | ✅ PR #2869 đã được gửi |
| 🟡 **P1-Cấu hình không hợp lệ** | [#2839](https://github.com/HKUDS/nanobot/issues/2839) | `web.search.enable=false` bị bỏ qua | ✅ Đã đóng |
| 🟢 **P2-Nhầm lẫn phiên bản** | [#2857](https://github.com/HKUDS/nanobot/issues/2857) | `__version__` không khớp với `pyproject.toml` | ✅ PR #2860 đã được gửi |
| 🟢 **P2-Gọi công cụ định dạng** | [#2858](https://github.com/HKUDS/nanobot/issues/2858) | Lỗi tuần tự hóa tham số công cụ JSON | ✅ PR #2859 đã được gửi |

**Cảnh báo sức khỏe**: 3 lỗi cấp P0/P1 chưa có giải pháp sửa chữa, liên quan đến ba trụ cột chức năng cốt lõi: tìm kiếm, hỗ trợ mô hình cục bộ và sandbox bảo mật.

---

## 6. Yêu cầu tính năng và tín hiệu lộ trình

### Các yêu cầu có tiềm năng cao được đưa vào phiên bản tiếp theo

| Issue | Yêu cầu | Đã có PR | Đánh giá tính khả thi |
|:---|:---|:---|:---|
| [#2870](https://github.com/HKUDS/nanobot/issues/2870) | **Callback phản ứng tin nhắn** (👍/❤️ làm tín hiệu bộ nhớ) | Không | ⭐⭐⭐⭐⭐ Giá trị cao, ít xâm nhập, củng cố vòng lặp hợp tác người-máy |
| [#2854](https://github.com/HKUDS/nanobot/issues/2854) | **Hỗ trợ đầy đủ MCP** (Resources + Prompts, không chỉ Tools) | PR #2861 | ⭐⭐⭐⭐⭐ PR đã sẵn sàng, tương thích hệ sinh thái là yếu tố then chốt |
| [#2836](https://github.com/HKUDS/nanobot/issues/2836) | **Phân lập không gian làm việc theo chat_id trên WhatsApp** | Không | ⭐⭐⭐☆☆ Nhu cầu đa người dùng bắt buộc, tuân thủ quyền riêng tư |
| [#2845](https://github.com/HKUDS/nanobot/issues/2845) | **Hỗ trợ gốc giao thức thanh toán máy MPP** | Không | ⭐⭐⭐☆☆ Tiên phong nhưng ít phổ biến, cần hệ sinh thái trưởng thành |
| [#2837](https://github.com/HKUDS/nanobot/issues/2837) | **Tạm dừng 12h sau khi con người trả lời** | Không | ⭐⭐⭐⭐☆ Hữu ích cho tình huống vận hành, chuyển giao người-máy |
| [#2820](https://github.com/HKUDS/nanobot/issues/2820) | Hiển thị mức tiêu thụ hạn ngạch tìm kiếm trên `/status` | Không | ⭐⭐⭐⭐☆ Tăng cường khả năng quan sát, minh bạch chi phí |

**Tín hiệu lộ trình**: Tích hợp hệ sinh thái MCP và phân lập đa người dùng sẽ là chủ đề cốt lõi của v0.2.x.

---

## 7. Tóm tắt phản hồi người dùng

### Tinh lọc các điểm đau thực tế

| Tình huống | Nguồn phản hồi | Tâm trạng | Yêu cầu cốt lõi |
|:---|:---|:---:|:---|
| **Trải nghiệm nâng cấp** | [#2795](https://github.com/HKUDS/nanobot/issues/2795) | 😤 Tiêu cực | Nâng cấp phiên bản không nên thay đổi hành vi hiển thị (lộ trình suy nghĩ), cần tùy chọn cấu hình để dự phòng |
| **Phát triển cục bộ** | [#2796](https://github.com/HKUDS/nanobot/issues/2796) | 😤→😌 Giảm nhẹ | Chính sách bảo mật cần phân biệt "môi trường sản xuất" và "môi trường phát triển", cơ chế danh sách trắng cần linh hoạt |
| **Người dùng tiếng Trung** | [#2849](https://github.com/HKUDS/nanobot/issues/2849) | 😕 Bối rối | Hỗ trợ cú pháp biến môi trường `${VAR}` không nhất quán, cần làm rõ tài liệu |
| **Triển khai doanh nghiệp** | [#2836](https://github.com/HKUDS/nanobot/issues/2836) | 😰 Lo lắng | Thiếu phân lập dữ liệu cho tình huống đa người dùng, rủi ro tuân thủ quyền riêng tư |
| **Người dùng Windows** | [#2846](https://github.com/HKUDS/nanobot/issues/2846) [#2868](https://github.com/HKUDS/nanobot/issues/2868) | 😤 Thất vọng | Vấn đề Unicode/mã hóa, phụ thuộc bash bắt buộc, khoảng cách trải nghiệm đa nền tảng lớn |
| **Người dùng Gemini** | [#2853](https://github.com/HKUDS/nanobot/issues/2853) | 😕 Bối rối | Đầu ra proxy con không đầy đủ, logic gắn thẻ vai trò cần phù hợp với mô hình |

### Điểm hài lòng
- Trang web chính thức và tài liệu đa ngôn ngữ được ra mắt nhận phản hồi tích cực
- Hỗ trợ toàn cầu Feishu/Lark [#2674](https://github.com/HKUDS/nanobot/pull/2674) đáp ứng nhu cầu người dùng doanh nghiệp

---

## 8. Hàng tồn đọng cần xử lý

### Các vấn đề tồn đọng dài ngày cần người bảo trì chú ý

| Issue | Thời gian tạo | Cập nhật cuối | Rủi ro | Hành động đề xuất |
|:---|:---|:---|:---|:---|
| [#2638](https://github.com/HKUDS/nanobot/issues/2638) Lịch sử phiên tăng trưởng không giới hạn | 2026-03-30 | Hôm nay | 🔥 Rủi ro OOM sản xuất | Phân bổ cho nhà phát triển cốt lõi, thiết kế giới hạn cứng + suy giảm dần |
| [#2757](https://github.com/HKUDS/nanobot/issues/2757) Tham số `max_tokens` của OpenAI bị loại bỏ | 2026-04-02 | Hôm nay | ⚠️ Tương thích API | Theo dõi lịch trình di chuyển của OpenAI |
| [#1681](https://github.com/HKUDS/nanobot/issues/1681) Vấn đề phiên mã hóa Matrix | 2026-03-07 | Hôm nay đóng | ✅ Đã giải quyết | Xác nhận sửa lỗi, lưu trữ |
| [#2526](https://github.com/HKUDS/nanobot/pull/2526) `/stop` mất trạng thái phiên | 2026-03-26 | Hôm nay | ⚠️ Tính toàn vẹn UX | Xem xét hợp nhất, sửa lỗi ổn định cốt lõi |

### Cảnh báo tồn đọng PR
- Trong số **30 PR chờ hợp nhất**, [#2871](https://github.com/HKUDS/nanobot/pull/2871) Kênh Web, [#2861](https://github.com/HKUDS/nanobot/pull/2861) Hỗ trợ MCP đầy đủ, [#2869](https://github.com/HKUDS/nanobot/pull/2869) sửa lỗi Unicode là các ưu tiên cao, đề xuất xử lý trong vòng 48 giờ để tránh mất người đóng góp cộng đồng.

---

*Thời gian tạo báo cáo hàng ngày: 2026-04-07 | Nguồn dữ liệu: Kho lưu trữ GitHub HKUDS/nanobot*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Báo cáo hàng ngày về tiến độ dự án PicoClaw | 2026-04-07

## 1. Tổng quan hôm nay

PicoClaw hôm nay cho thấy **trạng thái phát triển hoạt động cao**: 8 Issues mới (tất cả đang mở), 6 PR (4 chờ duyệt, 2 đã đóng) trong 24 giờ, không có phiên bản mới nào được phát hành. Trọng tâm cộng đồng tập trung vào **củng cố bảo mật đầu cuối** (rủi ro cấp CVE), **sửa lỗi tương thích nhiều nhà cung cấp mô hình** (vấn đề cấu hình Gemini/OpenRouter) và **tối ưu hóa trải nghiệm di động** (tương tác nhập liệu Android). Đáng chú ý, một Issue bảo mật về việc chèn ký tự điều khiển ANSI (#2377) đã được gửi PR sửa lỗi, tốc độ phản hồi thể hiện sự chú trọng của nhóm đối với các vấn đề bảo mật.

---

## 2. Phát hành phiên bản

**Không có phiên bản mới nào được phát hành**

---

## 3. Tiến độ dự án

### Các PR đã hợp nhất/đóng

| PR | Tác giả | Trạng thái | Nội dung đóng góp |
|:---|:---|:---|:---|
| [#2379](https://github.com/sipeed/picoclaw/pull/2379) | Skezza | ❌ **ĐÓNG** | Nhánh chức năng Telegram Codex Orchestrator, bị đóng trước khi hợp nhất, có thể do điều chỉnh hướng thiết kế hoặc tách chức năng |
| [#2353](https://github.com/sipeed/picoclaw/pull/2353) | liuy | ✅ **ĐÓNG/Đã hợp nhất** | Thêm công cụ kiểm tra bộ nhớ LOCOMO `membench`, cung cấp cơ sở hạ tầng đánh giá cho lộ trình dài hạn #1919 |

**Tiến độ chính**: Hệ thống bộ nhớ có khả năng đánh giá định lượng chất lượng truy xuất, chạy `make mem` có thể thực hiện kiểm tra đầu cuối, đánh dấu PicoClaw bước vào giai đoạn lặp lại dựa trên dữ liệu về **tối ưu hóa bộ nhớ ngữ cảnh dài**.

---

## 4. Điểm nóng cộng đồng

### Các Issues được thảo luận sôi nổi nhất

| Thứ hạng | Issue | Số bình luận | Yêu cầu cốt lõi |
|:---|:---|:---:|:---|
| 1 | [#1372](https://github.com/sipeed/picoclaw/issues/1372) Hỗ trợ plugin OpenIM | **5** | Yêu cầu tích hợp IM doanh nghiệp — người dùng muốn kết nối với framework nhắn tin tức thời mã nguồn mở OpenIM, mở rộng các tình huống B2B |
| 2 | [#2354](https://github.com/sipeed/picoclaw/issues/2354) Khung nhập liệu WebUI bị lỗi | **2** | **Vấn đề trải nghiệm chặn** — trường nhập liệu và nút gửi WebUI bị vô hiệu hóa, nhưng API hội thoại đa lượt hoạt động bình thường, chỉ ra lỗi quản lý trạng thái frontend |
| 3 | [#2371](https://github.com/sipeed/picoclaw/issues/2371) Runtime Agent bị sập | **1** | Lỗi phân tích cấu hình dẫn đến lỗi `loop.go:2171`, ảnh hưởng các tình huống đa nhà cung cấp OpenRouter/Ollama |

**Phân tích xu hướng**: Yêu cầu plugin OpenIM (tạo ngày 11/3, tiếp tục hoạt động) phản ánh nhu cầu của cộng đồng về việc tùy chỉnh cho **hệ sinh thái truyền thông cấp doanh nghiệp của Trung Quốc**, bổ sung cho phạm vi hiện tại là Telegram/Discord.

---

## 5. Lỗi và độ ổn định

### 🚨 Sắp xếp theo mức độ nghiêm trọng

| Mức độ ưu tiên | Issue | Lĩnh vực | Mô tả | PR Fix |
|:---|:---|:---|:---|:---|
| **P0-Bảo mật** | [#2377](https://github.com/sipeed/picoclaw/issues/2377) | shell/exec | **Tấn công chèn ký tự điều khiển terminal**: `exec` tool và đầu ra log không lọc chuỗi thoát ANSI, ký tự Bidi Unicode, có thể dẫn đến tấn công lừa đảo terminal | ✅ PR #2378 đã được gửi |
| **P1-Chức năng bị chặn** | [#2354](https://github.com/sipeed/picoclaw/issues/2354) | channel/WebUI | Khung nhập liệu WebUI hoàn toàn không sử dụng được, các phần tử frontend bị vô hiệu hóa sai | ⏳ Chờ sửa lỗi |
| **P1-Cấu hình không hợp lệ** | [#2371](https://github.com/sipeed/picoclaw/issues/2371) | provider/agent | Agent bị sập vòng lặp với cấu hình đa nhà cung cấp, liên quan đến logic phân tích `api_key` và tìm kiếm mô hình | ✅ PR #2372 đã được gửi |
| **P2-Quốc tế hóa** | [#2367](https://github.com/sipeed/picoclaw/issues/2367) | config/Android | Tiêu đề màn hình cuối cùng vẫn là tiếng Trung khi cài đặt tiếng Anh | ⏳ Chờ sửa lỗi |
| **P2-Tương thích nhà cung cấp** | [#2374](https://github.com/sipeed/picoclaw/issues/2374) | provider | Cấu hình mô hình Gemini theo tài liệu không thành công, nhưng cURL bình thường, chỉ ra sự khác biệt trong cấu trúc yêu cầu | ⏳ Chờ chẩn đoán |
| **P2-Lệnh Gateway** | [#2373](https://github.com/sipeed/picoclaw/issues/2373) | build/gateway | Chế độ Gateway không hỗ trợ lệnh điều khiển như `stop` | ⏳ Chờ sửa lỗi |

---

## 6. Yêu cầu tính năng và tín hiệu lộ trình

| Issue/PR | Loại | Khả năng đưa vào | Cơ sở đánh giá |
|:---|:---|:---|:---|
| [#2376](https://github.com/sipeed/picoclaw/issues/2376) Vô hiệu hóa gửi tin nhắn bằng phím Enter trên Android | Tăng cường UX | **Cao** | Nhu cầu bắt buộc trên di động, phạm vi thay đổi nhỏ, phản hồi trực tiếp từ cộng đồng |
| [#1372](https://github.com/sipeed/picoclaw/issues/1372) Plugin OpenIM | Mở rộng hệ sinh thái | **Trung bình** | Tình huống doanh nghiệp rõ ràng, nhưng cần đánh giá khả năng tương thích với kiến trúc plugin hiện có |
| [#2229](https://github.com/sipeed/picoclaw/pull/2229) Giao diện đầu cuối có cấu trúc | Trải nghiệm CLI | **Trung bình-Cao** | PR đã tồn tại, không ảnh hưởng logic ban đầu, xu hướng CLI hiện đại |
| [#2209](https://github.com/sipeed/picoclaw/pull/2209) TLS Telegram có thể cấu hình | Khả năng tương thích | **Cao** | Khắc phục vấn đề lâu dài #1936, chặn người dùng Termux |

**Tín hiệu phiên bản tiếp theo**: PR sửa lỗi lớp cấu hình nhà cung cấp (#2372) và bảo mật đầu cuối (#2378) đồng thời chạm vào cơ sở hạ tầng phân tích cấu hình và lọc đầu ra, ám chỉ **v0.2.6** có thể là phiên bản vá lỗi tập trung vào **độ ổn định và bảo mật**.

---

## 7. Tóm tắt phản hồi người dùng

### 痛点 (Điểm đau)
- **"Địa ngục cấu hình"**: Cấu hình Gemini theo tài liệu chính thức không hợp lệ (#2374), vấn đề tương thích trường đơn/số của `api_key` (#2371 đang sửa)
- **Trải nghiệm di động bị phân mảnh**: Hành vi phím Enter trên Android không phù hợp với thói quen nhắn tin tức thời (#2376), WebUI hoàn toàn không sử dụng được trên trình duyệt di động (#2354)
- **Rào cản triển khai doanh nghiệp**: Kênh Telegram gặp sự cố chứng chỉ CA không đáng tin cậy trong môi trường Termux (#2209 PR chờ duyệt)

### ✅ Sự công nhận
- Độ ổn định của API hội thoại đa lượt được xác nhận ("normal multi-turn interactions work" theo đề cập của người dùng trong #2354)

### 🎯 Sử dụng các tình huống
- **Trợ lý cá nhân**: Tương tác hàng ngày trên điện thoại Android (#2376)
- **Vận hành phát triển**: Triển khai trong môi trường Termux/Linux hạn chế (#2209, #2373)
- **Tích hợp doanh nghiệp**: Kết nối IM riêng tư OpenIM (#1372)

---

## 8. Hàng tồn đọng cần xử lý

> Các Issue/PR sau đã quá **7 ngày** không có phản hồi từ người bảo trì, đề xuất ưu tiên xem xét:

| Mục | Ngày tạo | Cập nhật cuối | Rủi ro |
|:---|:---|:---|:---|
| [#1372](https://github.com/sipeed/picoclaw/issues/1372) Plugin OpenIM | 2026-03-11 | 2026-04-06 | Rủi ro người dùng doanh nghiệp rời bỏ, đối thủ cạnh tranh tương tự đã thực hiện |
| [#2229](https://github.com/sipeed/picoclaw/pull/2229) Giao diện đầu cuối có cấu trúc | 2026-03-31 | 2026-04-06 | Cải thiện trải nghiệm PR bị treo, tác giả tiếp tục bảo trì |
| [#2209](https://github.com/sipeed/picoclaw/pull/2209) Cấu hình TLS Telegram | 2026-03-31 | 2026-04-06 | Giải quyết vấn đề dài hạn #1936, chặn người dùng Termux |

---

**Nguồn dữ liệu**: API GitHub / kho lưu trữ sipeed/picoclaw
**Tạo báo cáo**: 2026-04-07

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# Báo cáo hàng ngày về tiến độ dự án NanoClaw | 2026-04-07

---

## 1. Tổng quan hôm nay

NanoClaw hôm nay duy trì **mức độ hoạt động cao**, với 26 cập nhật PR (14 đã hợp nhất/đóng, 12 chờ duyệt) và 8 cập nhật Issue trong 24 giờ. Trọng tâm cộng đồng tập trung vào **tối ưu hóa định tuyến mô hình** (3 Issues lặp lại cho cùng một chức năng), **mở rộng kênh đa nền tảng