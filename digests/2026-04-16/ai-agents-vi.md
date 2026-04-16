# OpenClaw Hệ sinh thái Nhật ký hàng ngày 2026-04-16

> Issues: 500 | PRs: 500 | Dự án bao phủ: 13 | Thời gian tạo: 2026-04-16 00:17 UTC

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

# Nhật ký hoạt động dự án OpenClaw | 2026-04-16

---

## 1. Tổng quan hôm nay

Cộng đồng OpenClaw hôm nay duy trì hoạt động cực kỳ sôi nổi, với **500 Issues và 500 PRs** được cập nhật trong vòng 24 giờ, tạo nên đỉnh điểm thảo luận hiếm thấy trong thời gian gần đây. Dự án đã phát hành **v2026.4.15-beta.1**, tập trung vào việc tăng cường khả năng quan sát xác thực mô hình của Control UI. Tuy nhiên, **vấn đề crash onboarding được giới thiệu trong v2026.4.14 (Cannot read properties of undefined (reading 'trim')) đang bùng phát trên diện rộng**, trở thành mối đe dọa nghiêm trọng nhất về độ ổn định. Nhiều Issues liên quan đã xuất hiện dồn dập trong vòng 24 giờ. Số lượng PR đang chờ merge lên tới **362**, trong khi **138 PRs** đã được merge/đóng. Mặc dù cộng đồng đóng góp tích cực, nhưng năng lực xử lý bảo trì đang chịu áp lực.

---

## 2. Phát hành phiên bản

### [v2026.4.15-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.4.15-beta.1)

| Thuộc tính | Nội dung |
|:---|:---|
| **Tên phiên bản** | OpenClaw 2026.4.15-beta.1 |
| **Loại** | Beta, phát hành trước |
| **Thay đổi cốt lõi** | Control UI / Overview bổ sung thẻ trạng thái **Model Auth** |

**Cập nhật chi tiết:**
- Bổ sung thẻ trạng thái xác thực mô hình trên trang Overview của Control UI, cho phép xem nhanh tình trạng sức khỏe của token OAuth và áp lực giới hạn tốc độ của nhà cung cấp.
- Khi token OAuth sắp hết hạn hoặc đã hết hạn, sẽ kích hoạt một thông báo cảnh báo nổi bật.
- Backend được hỗ trợ bởi phương thức gateway `models.authStatus` mới, phương thức này sẽ xử lý thông tin nhạy cảm một cách an toàn và lưu trữ kết quả trong bộ nhớ cache trong 60 giây.

**Thay đổi gây lỗi:** Không có thay đổi gây lỗi nào được biết đến.

**Lưu ý di chuyển:** Người dùng nâng cấp từ v2026.4.14 cần đặc biệt chú ý đến vấn đề crash onboarding (xem Mục 5). Nên đợi bản vá lỗi liên quan sau khi nâng cấp môi trường sản xuất.

---

## 3. Tiến độ dự án

### Các PR quan trọng đã được merge/đóng hôm nay

| PR | Tác giả | Đóng góp cốt lõi | Liên kết |
|:---|:---|:---|:---|
| **#66378** | athletesofthereef | **Sửa lỗi gửi media WhatsApp**: Bỏ qua đường dẫn phụ thuộc legacy outbound send, sửa lỗi hồi quy gửi media và bổ sung kiểm thử hồi quy | [PR #66378](https://github.com/openclaw/openclaw/pull/66378) |
| **#66331** | acwilan | **Cấu hình bao phủ TTS/STT cho từng agent**: Phá vỡ giới hạn cấu hình giọng nói toàn cục, hỗ trợ cấu hình tham số tổng hợp và nhận dạng giọng nói theo từng agent trong kịch bản nhiều agent | [PR #66331](https://github.com/openclaw/openclaw/pull/66331) |
| **#43961** | happydog-intj | **Tăng cường đóng gateway một cách duyên dáng**: Khi tiến trình cũ vẫn chưa thoát sau 10 giây timeout của SIGTERM, tự động thêm SIGKILL, giải quyết vấn đề chiếm cổng và tiến trình zombie khi khởi động lại | [PR #43961](https://github.com/openclaw/openclaw/pull/43961) |
| **#59619** | MoerAI | **Sửa lỗi tin nhắn thoại Feishu**: Âm thanh TTS được gửi dưới dạng bong bóng tin nhắn thoại thay vì tệp đính kèm, sửa lỗi cờ `audioAsVoice` chưa được truyền đi | [PR #59619](https://github.com/openclaw/openclaw/pull/59619) |
| **#67437** | MoerAI | **Thử lại lấy tệp đính kèm BlueBubbles**: Khi Private API đóng, mảng tệp đính kèm webhook trống dẫn đến bỏ sót hình ảnh, bổ sung logic thử lại | [PR #67437](https://github.com/openclaw/openclaw/pull/67437) |
| **#67025** | ly85206559 | **Sửa lỗi đăng ký định tuyến HTTP plugin setup-runtime**: Plugin tải chậm trước đây sử dụng `noop registerHttpRoute`, nay được sửa thành kích hoạt đầy đủ rồi mới liên kết lại triển khai thực tế | [PR #67025](https://github.com/openclaw/openclaw/pull/67025) |

**Đánh giá tiến độ tổng thể:** Các PR được hợp nhất hôm nay bao gồm các lĩnh vực quan trọng như **độ ổn định của kênh (WhatsApp, Feishu, BlueBubbles), khả năng giọng nói, độ tin cậy của gateway, vòng đời plugin**. Đây là sự thúc đẩy bảo trì chất lượng cao. Tuy nhiên, PR sửa lỗi khẩn cấp cho vấn đề crash onboarding vẫn chưa được hợp nhất, là điểm yếu rõ ràng hiện tại.

---

## 4. Điểm nóng cộng đồng

### Issues có thảo luận sôi nổi nhất

| Issue | Bình luận | Yêu cầu cốt lõi | Liên kết |
|:---|:---|:---|:---|
| **#49971** — RFC: Native Agent Identity & Trust Verification | **89** | **Định danh phi tập trung và xác minh tin cậy**: Đề xuất bởi MolTrust, kết hợp các tiêu chuẩn ERC-8004, DID/VC của W3C, mong muốn xây dựng lớp định danh gốc cho agent OpenClaw. Thảo luận sâu sắc liên quan đến kiến trúc mật mã, nhưng chưa có phản hồi chính thức. | [Issue #49971](https://github.com/openclaw/openclaw/issues/49971) |
| **#45064** — Memory Leak / OOM on basic commands | **31** | v2026.3.12 bị rò rỉ bộ nhớ dẫn đến CLI hoàn toàn không khả dụng, hôm nay đã đóng, cho thấy vấn đề phiên bản này đã được xử lý. | [Issue #45064](https://github.com/openclaw/openclaw/issues/45064) |
| **#25592** — Text between tool calls leaks to messaging channels | **19** | **Văn bản xử lý nội bộ của agent bị rò rỉ đến các kênh như Slack/iMessage**, làm giảm UX nghiêm trọng. Đã có PR sửa lỗi #65508 xử lý rò rỉ thẻ XML `tool_call`. | [Issue #25592](https://github.com/openclaw/openclaw/issues/25592) |
| **#34830** — 401 missing authentication header (OpenRouter) | **19** | Vấn đề hồi quy header xác thực OpenRouter, ảnh hưởng đến việc gọi mô hình cơ bản, người dùng xác nhận lại key API không có lỗi. | [Issue #34830](https://github.com/openclaw/openclaw/issues/34830) |
| **#35220** — Codex Responses API streaming server_error không kích hoạt fallback | **15** | `server_error` trong phản hồi streaming của OpenAI Codex không kích hoạt giảm cấp mô hình, cùng nguồn với #24378. | [Issue #35220](https://github.com/openclaw/openclaw/issues/35220) |

### Issues có phản hồi cao (số 👍)

| Issue | 👍 | Mô tả | Liên kết |
|:---|:---|:---|:---|
| **#66718** | **7** | `openclaw configure` bị crash ở phần Channels (lỗi `trim`), ảnh hưởng rất rộng | [Issue #66718](https://github.com/openclaw/openclaw/issues/66718) |
| **#66674** | **6** | `openai-codex/gpt-5.4` CLI inference trả về lỗi HTML nhưng lại được đóng gói thành "DNS lookup failed" | [Issue #66674](https://github.com/openclaw/openclaw/issues/66674) |
| **#20562** | **6** | Yêu cầu chức năng: Bổ sung Serper.dev làm nhà cung cấp `web_search` (Brave đã hủy bỏ tầng miễn phí) | [Issue #20562](https://github.com/openclaw/openclaw/issues/20562) |
| **#66633** | **5** | openai-codex nâng cấp lên 2026.4.14 thì toàn bộ request kích hoạt Cloudflare 403 | [Issue #66633](https://github.com/openclaw/openclaw/issues/66633) |
| **#66641** | **5** | Trình cài đặt chắc chắn xảy ra lỗi `trim` sau khi chọn "Select channel (QuickStart)" | [Issue #66641](https://github.com/openclaw/openclaw/issues/66641) |

**Phân tích điểm nóng:** Nhu cầu cốt lõi của cộng đồng tập trung vào hai loại — **một là crash onboarding/configure của v2026.4.14 đang cản trở người dùng mới bắt đầu**; **hai là chuỗi xác thực và giảm cấp của các nhà cung cấp chính như OpenAI Codex / OpenRouter có nhiều lỗi hồi quy**, ảnh hưởng trực tiếp đến tính khả dụng hàng ngày của người dùng hiện tại.

---

## 5. Lỗi và độ ổn định

### Sắp xếp theo mức độ nghiêm trọng

| Ưu tiên | Issue | Hiện tượng | Có PR Fix không | Liên kết |
|:---|:---|:---|:---|:---|
| **P0 — Chặn người dùng mới** | **#66718 / #67291 / #67353 / #66641 / #67074 / #67347** | `openclaw onboard` / `openclaw configure` chắc chắn crash ở bước Channels với lỗi `TypeError: Cannot read properties of undefined (reading 'trim')`, không thể vượt qua dù chọn kênh hay Skip | 🟡 **#67130** đã đóng ("bundled setup plugin meta is incomplete"), nhưng vẫn có nhiều người dùng báo cáo lỗi tương tự, cho thấy bản sửa lỗi có thể chưa bao phủ hết các trường hợp hoặc chưa được đưa vào phiên bản ổn định | [Issue #66718](https://github.com/openclaw/openclaw/issues/66718) |
| **P0 — Chặn nhà cung cấp** | **#66633** | Sau khi nâng cấp 2026.4.14, `openai-codex` toàn bộ yêu cầu bị Cloudflare 403 chặn | 🔴 Chưa có PR rõ ràng | [Issue #66633](https://github.com/openclaw/openclaw/issues/66633) |
| **P1 — Giảm cấp nhà cung cấp thất bại** | **#66674** | `openai-codex/gpt-5.4` trực tiếp CLI inference thất bại, lỗi HTML gốc bị báo sai là "DNS lookup failed" | 🔴 Chưa có PR rõ ràng | [Issue #66674](https://github.com/openclaw/openclaw/issues/66674) |
| **P1 — Hồi quy xác thực** | **#34830** | OpenRouter 401 missing authentication header, hồi quy được giới thiệu trong v2026.3.2 | 🔴 Chưa có PR rõ ràng | [Issue #34830](https://github.com/openclaw/openclaw/issues/34830) |
| **P1 — Hồi quy UI** | **#67035** | Phiên bản Windows 2026.4.14 giao diện trò chuyện bị suy giảm nghiêm trọng: văn bản nhập bị nuốt, phản hồi stream không hiển thị, chỉ báo gõ nhấp nháy rồi trống rỗng | 🔴 Chưa có PR rõ ràng | [Issue #67035](https://github.com/openclaw/openclaw/issues/67035) |
| **P1 — Trải nghiệm UI** | **#66207** | Tin nhắn người dùng vừa gửi trong trò chuyện Control UI tạm thời biến mất 1-2 giây rồi xuất hiện lại | 🔴 Chưa có PR rõ ràng | [Issue #66207](https://github.com/openclaw/openclaw/issues/66207) |
| **P2 — Crash** | **#67261** | Venice model trả về thiếu `id`/`status` dẫn đến crash: `Cannot read properties of undefined (reading 'id')` | 🔴 Đã đóng, nhưng cần xác nhận bản sửa lỗi có được đưa vào nhánh chính không | [Issue #67261](https://github.com/openclaw/openclaw/issues/67261) |
| **P2 — Hành vi bất thường** | **#67288** | `amazon-bedrock-mantle` mỗi yêu cầu đều thực hiện khám phá token IAM, thiếu công tắc `config.discovery.enabled` | 🔴 Chưa có PR rõ ràng | [Issue #67288](https://github.com/openclaw/openclaw/issues/67288) |
| **P2 — Phân loại sai** | **#67377** | Cron chạy bộ phân loại đánh giá sai tóm tắt thành công là `status=error` | 🔴 Chưa có PR rõ ràng | [Issue #67377](https://github.com/openclaw/openclaw/issues/67377) |

**Đánh giá sức khỏe độ ổn định:** ⚠️ **Rủi ro trung bình đến cao**. Lỗi crash onboarding của v2026.4.14 đã tạo thành **sự kiện chặn người dùng mới**, và chuỗi nhà cung cấp Codex cùng giao diện người dùng Windows xuất hiện nhiều lỗi hồi quy. Mặc dù hôm nay có một số bản sửa lỗi kênh/gateway được hợp nhất, nhưng **thiếu PR hotfix khẩn cấp cho các vấn đề nóng nhất hiện tại**.

---

## 6. Yêu cầu chức năng và tín hiệu lộ trình

| Issue/PR | Nội dung | Khả năng đưa vào phiên bản tiếp theo | Liên kết |
|:---|:---|:---|:---|
| **#49971** — Agent Identity & Trust Verification (ERC-8004/DID/VC) | Lớp định danh và tin cậy phi tập trung gốc | Trung thấp — Kiến trúc lớn, cần đánh giá RFC dài hạn | [Issue #49971](https://github.com/openclaw/openclaw/issues/49971) |
| **#20562** — Nhà cung cấp web_search Serper.dev | Thay thế Brave Search bằng Google Search thời gian thực | **Cao** — Brave đã hủy bỏ tầng miễn phí, áp lực chuyển đổi người dùng trả phí lớn, nhu cầu cấp bách và phạm vi rõ ràng | [Issue #20562](https://github.com/openclaw/openclaw/issues/20562) |
| **#28930** — Memory v2: Associative Traversal, Salience Weighting, Access-Based Forgetting | Cải tiến hệ thống bộ nhớ được đề xuất bởi AI agent đang chạy | Trung — Từ kịch bản chạy dài hạn thực tế, nhưng liên quan đến thay đổi kiến trúc cốt lõi | [Issue #28930](https://github.com/openclaw/openclaw/issues/28930) |
| **#34400** — memory_search đệ quy tìm kiếm thư mục con | Hỗ trợ mẫu `memory/**/*.md` | Trung cao — Nhu cầu rõ ràng, phạm vi thực hiện nhỏ | [Issue #34400](https://github.com/openclaw/openclaw/issues/34400) |
| **#35071** — Eval Framework cho skill-creator | Cung cấp CLI kiểm thử, benchmark và phân tích kích hoạt cho nhà phát triển kỹ năng | Trung cao — PR đã tồn tại và cấu trúc hoàn chỉnh, chờ đánh giá | [PR #35071](https://github.com/openclaw/openclaw/pull/35071) |
| **#28106** — Agent-to-Agent Task Delegation Protocol | Giao thức kinh tế agent phi tập trung | Thấp — Tầm nhìn dài hạn, ít sự quan tâm của cộng đồng | [Issue #28106](https://github.com/openclaw/openclaw/issues/28106) |
| **#66168** — Mở rộng giao thức ứng dụng MCP | Mở rộng siêu dữ liệu công cụ/tài nguyên/UI của gateway | **Cao** — PR cấp XL đã tồn tại, được thúc đẩy bởi các nhà đóng góp cốt lõi, liên quan chặt chẽ đến chiến lược mở rộng hệ sinh thái | [PR #66168](https://github.com/openclaw/openclaw/pull/66168) |

---

## 7. Tóm tắt phản hồi người dùng

### Điểm đau thực tế

| Điểm đau | Issue nguồn | Kịch bản |
|:---|:---|:---|
| **"Không thể hoàn thành nhiệm vụ cơ bản nhất"** | [#67237](https://github.com/openclaw/openclaw/issues/67237) | Người dùng mô tả agent thường xuyên gặp lỗi quan trọng, ghi đè cấu hình của chính nó hoặc thất bại hoàn toàn, cực kỳ thất vọng về độ tin cậy |
| **Crash khi cài đặt/cấu hình, ngưỡng vào tăng đột biến** | #66718, #67291, #67074, #67347 và các vấn đề khác | Rất nhiều người dùng mới bị chặn ngay ở bước đầu tiên của onboarding bởi lỗi `trim` |
| **Trải nghiệm Windows suy giảm rõ rệt** | [#67035](https://github.com/openclaw/openclaw/issues/67035) | Đầu vào không hiển thị, phản hồi không hiển thị, nghi ngờ "không phải do mô hình chậm đơn giản" |
| **Thông tin lỗi nhà cung cấp gây hiểu lầm nghiêm trọng** | [#66674](https://github.com/openclaw/openclaw/issues/66674) | Phản hồi HTML được gói gọn thành lỗi DNS, làm tăng đáng kể chi phí khắc phục sự cố |
| **Không có giải pháp thay thế tương đương sau khi Brave Search hủy tầng miễn phí** | [#20562](https://github.com/openclaw/openclaw/issues/20562) | Chi phí năng lực tìm kiếm hiện tại tăng đột biến |

### Điểm hài lòng/nổi bật

- **Cấu hình cô lập giọng nói cho nhiều agent** (PR #66331) được người dùng đa ngôn ngữ/đa vai mong đợi.
- **Thẻ trạng thái xác thực Control UI** (v2026.4.15-beta.1) được coi là bổ sung tích cực cho khả năng quan sát vận hành.
- Có **AI agent tự làm người dùng** ([Brian trong #28930](https://github.com/openclaw/openclaw/issues/28930)) tham gia thảo luận cải tiến hệ thống bộ nhớ, thể hiện tính độc đáo của cộng đồng.

---

## 8. Tồn đọng cần xử lý

### Các Issues/PR quan trọng chưa phản hồi trong thời gian dài (nhắc nhở người bảo trì chú ý)

| Mục | Thời gian tạo | Cập nhật cuối | Rủi ro | Liên kết |
|:---|:---|:---|:---|:---|
| **#49971** — RFC: Native Agent Identity & Trust Verification | 2026-03-18 | 2026-04-15 | Thảo luận cao (89 bình luận) nhưng **0 phản hồi chính thức**, có thể làm mất hứng thú của đối tác hệ sinh thái | [Issue #49971](https://github.com/openclaw/openclaw/issues/49971) |
| **#25592** — Text between tool calls leaks to messaging channels | 2026-02-24 | 2026-04-15 | Đánh dấu là stale nhưng vẫn hoạt động liên tục, **PR #65508 chỉ xử lý rò rỉ thẻ XML**, chưa giải quyết vấn đề định tuyến văn bản | [Issue #25592](https://github.com/openclaw/openclaw/issues/25592) |
| **#35181** — Thiếu tệp nhị phân biên dịch sẵn của node-llama-cpp, GPU fallback | 2026-03-05 | 2026-04-15 | Vấn đề phổ biến khi triển khai cục bộ trên Windows, ảnh hưởng người dùng ưu tiên ngoại tuyến/riêng tư | [Issue #35181](https://github.com/openclaw/openclaw/issues/35181) |
| **#43419** — `npm install -g openclaw` thất bại do phụ thuộc Git | 2026-03-11 | 2026-04-15 | **Vấn đề cơ sở hạ tầng cài đặt**, chặn người dùng không có môi trường Git | [Issue #43419](https://github.com/openclaw/openclaw/issues/43419) |
| **#35071** — Eval Framework cho skill-creator | 2026-03-04 | 2026-04-16 | PR đã tồn tại hơn 6 tuần, hệ sinh thái kỹ năng cần công cụ kiểm thử khẩn cấp | [PR #35071](https://github.com/openclaw/openclaw/pull/35071) |
| **#65554** — Hỗ trợ Media v2 (Bộ công cụ media hoàn chỉnh WebChat) | 2026-04-12 | 2026-04-16 | PR cấp XL, bao gồm tất cả các định dạng hình ảnh/âm thanh/video/tài liệu, nhưng tiến độ đánh giá không rõ ràng | [PR #65554](https://github.com/openclaw/openclaw/pull/65554) |

---

**Thời gian tạo báo cáo:** 2026-04-16
**Nguồn dữ liệu:** github.com/openclaw/openclaw

---

## So sánh chéo hệ sinh thái

# Báo cáo phân tích so sánh ngang hàng hệ sinh thái trợ lý AI cá nhân / tác nhân tự trị mã nguồn mở
**Ngày phân tích: 2026-04-16**

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái mã nguồn mở của trợ lý AI cá nhân/tác nhân tự trị đang ở **cao điểm của sự bùng nổ chức năng và sự song hành của nợ chất lượng**. Các dự án hàng đầu (OpenClaw, ZeroClaw, CoPaw) xử lý trung bình 40-100 PR/Issue mỗi ngày, tốc độ lặp lại gần bằng đội ngũ sản phẩm thương mại; các dự án tầm trung (Moltis, NanoBot, Hermes Agent) đang tìm kiếm sự cân bằng giữa việc phản hồi nhanh chóng các điểm đau của cộng đồng và việc dọn dẹp nợ kỹ thuật. Tiêu điểm công nghệ tổng thể đã chuyển từ "tích hợp đa mô hình" sang "hợp tác đa Agent, tích hợp hệ sinh thái MCP, cô lập triển khai cấp sản xuất", nhưng **trải nghiệm onboarding cho người dùng mới, độ ổn định của Web UI, tài liệu và khả năng tái tạo bản dựng** đã trở thành các nút thắt cổ chai chung cho các dự án, và một số dự án đã có dấu hiệu phân hóa niềm tin trong cộng đồng.

---

## 2. So sánh mức độ hoạt động của từng dự án

| Dự án | Issues (24h) | PRs (24h) | Phát hành hôm nay | Đánh giá sức khỏe |
|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 | 500 | v2026.4.15-beta.1 | ⚠️ **Rủi ro trung bình-cao** — Hoạt động vượt trội, nhưng crash onboarding (P0) và hồi quy nhà cung cấp Codex chưa được giải quyết, năng lực xử lý bảo trì chịu áp lực |
| **NanoBot** | 17 | 46 | Không | ✅ **Tốt** — Động lực cao, tối ưu hóa hiệu suất đang bước vào giai đoạn tách rời quy chuẩn, chỉ còn 1 hồi quy nâng cấp P0 cần phản hồi |
| **Hermes Agent** | 50 | 50 | Không | ✅ **Tốt** — Tốc độ sửa lỗi ổn định vượt tốc độ giới thiệu, cột mốc kiến trúc đa agent hoàn thành, hạ tầng hardened chắc chắn |
| **PicoClaw** | 7 | 26 | v0.2.6-nightly | ✅ **Tốt** — Công cụ delegate và lệnh MCP slash được triển khai, tiến hóa khả năng cốt lõi rõ ràng, nhiệm vụ cron bị chặn cần sửa |
| **NanoClaw** | 5 | 17 | Không | ⚠️ **Trung bình** — PR cấp kiến trúc (7 tầng mở rộng scope, nhiều nhà cung cấp Vercel AI SDK) dày đặc, nhưng nợ trải nghiệm setup/mount nổi bật |
| **NullClaw** | 9 | 8 | Không | ⚠️ **Trung bình thấp** — Lượng tồn đọng lịch sử đã được dọn dẹp, nhưng vấn đề cơ bản như di chuyển Zig 0.16, http_request lỗi, OTel bị gián đoạn vẫn đang treo |
| **IronClaw** | 17 | 50 | Không | ⚠️ **Rủi ro trung bình-cao** — Luồng code cực nhanh, nhưng lỗ hổng bảo mật quét Secret P0, dashboard làm mới vòng lặp, tin nhắn biến mất khỏi giao diện web chưa được giải quyết |
| **LobsterAI** | 3 | 27 | Không | ✅ **Tốt (Phía phát triển) / ⚠️ Trung bình (Phía cộng đồng)** — Năng suất PR cực cao, tích hợp IM và tối ưu hóa runtime OpenClaw liên tục, nhưng Issues đóng 0, phản hồi người dùng 0 |
| **Moltis** | 7 | 20 | Không | ✅ **Xuất sắc** — 15/20 PR được hợp nhất, 6/7 Issue được giải quyết trong 24h, tốc độ phản hồi là tốt nhất hệ sinh thái |
| **CoPaw** | 50 | 50 | v1.1.2-beta.1 + v1.1.1.post1 | ✅ **Tốt** — Các chức năng lớn như Mission Mode được triển khai, lặp lại phiên bản chặt chẽ, nhưng vấn đề hộp đen ngữ cảnh, quản lý tệp, đặt tên thương hiệu còn hỗn loạn |
| **ZeroClaw** | 50 | 41 | Không | ⚠️ **Rủi ro cao** — Phát triển chức năng nhanh nhưng nợ kỹ thuật tích lũy, Web Dashboard không dùng được trong thời gian dài, khủng hoảng niềm tin cộng đồng (#2691, 👍 9) đã đến ngưỡng giới hạn |
| **TinyClaw** | — | — | — | ❌ Không hoạt động |
| **ZeptoClaw** | — | — | — | ❌ Không hoạt động |

---

## 3. Vị trí của OpenClaw trong hệ sinh thái

### Ưu điểm
- **Quy mô dẫn đầu tuyệt đối**: 500 Issues + 500 PRs trong 24h, quy mô cộng đồng gấp khoảng 10 lần đối thủ cạnh tranh thứ hai (ZeroClaw/CoPaw), hiệu ứng mạng lưới hệ sinh thái mạnh nhất.
- **Phạm vi kênh phủ sóng toàn diện nhất**: Sửa lỗi song song trên WhatsApp, Feishu, BlueBubbles, Discord, Slack, iMessage..., là "tham chiếu tiêu chuẩn thực tế" cho tích hợp IM doanh nghiệp.
- **Khả năng quan sát tiên phong**: Thẻ trạng thái Model Auth của Control UI, giám sát tình trạng token OAuth... khả năng vận hành đi trước các loại hình tương tự.

### Khác biệt lộ trình kỹ thuật
- **Nặng về runtime, nặng về gateway**: Độ phức tạp cốt lõi của OpenClaw tập trung ở lớp gateway và thích ứng kênh. So với kiến trúc nhẹ của NanoClaw ("poll-loop + Vercel AI SDK"), triển khai gốc Zig của NullClaw, OpenClaw chọn chồng chất toàn bộ ngăn xếp Node.js/TypeScript, đánh đổi hiệu suất khởi động để lấy khả năng tương thích hệ sinh thái.
- **Tiến hóa lũy tiến**: Không có tái cấu trúc kiến trúc cấp tiến như Microkernel hoặc mở rộng 7 tầng, mà thông qua lặp lại liên tục các phiên bản nhỏ với tần suất cao (nhịp beta.1).

### So sánh quy mô cộng đồng
| Chiều | OpenClaw | Đối thủ cạnh tranh gần nhất | Chênh lệch |
|:---|:---|:---|:---|
| Issues hàng ngày | 500 | ZeroClaw/CoPaw (50) | **10x** |
| PRs hàng ngày | 500 | ZeroClaw (41) / NanoBot (46) | **10x** |
| Mật độ sửa lỗi kênh | 3+ kênh/ngày | 1-2 kênh/ngày | **3-5x** |
| Tồn đọng PR chờ duyệt | 362 | IronClaw (43) / ZeroClaw (34) | **8-10x** |

> **Rủi ro chính**: Lợi thế quy mô đang biến thành nút thắt cổ chai bảo trì. 362 PR chờ merge và trạng thái "không có hotfix" cho lỗi P0 onboarding tạo ra sự tương phản. Nếu vấn đề ổn định cốt lõi tiếp tục, người dùng có thể di chuyển sang các dự án "phản hồi nhanh hơn" như Moltis, NanoBot.

---

## 4. Hướng công nghệ được quan tâm chung

| Hướng công nghệ | Dự án liên quan | Yêu cầu cụ thể |
|:---|:---|:---|
| **Tích hợp và chịu lỗi hệ sinh thái MCP** | Moltis, IronClaw, CoPaw, PicoClaw | Moltis #732/733 (kiểm tra sức khỏe MCP báo lỗi), IronClaw #2087 (MCP Notion khiến Agent không phản hồi), PicoClaw #2535 (MCP slash command), định tuyến skill ngữ nghĩa CoPaw — cùng chỉ ra "giảm ngưỡng vào MCP + tăng khả năng chịu lỗi runtime" |
| **Hợp tác/ủy quyền đa Agent** | Hermes Agent, PicoClaw, CoPaw, NanoClaw | Hermes #344 (hoàn thành cột mốc kiến trúc đa agent), PicoClaw #2531 (công cụ delegate), CoPaw #3364 (Mission Mode), NanoClaw #1786 (mở rộng scope 7 tầng) — nhảy vọt từ "hội thoại đơn vòng" sang "thực thi tự chủ dài hạn + ủy quyền giữa các Agent" |
| **Trải nghiệm truy cập mô hình cục bộ/mã nguồn mở** | NanoBot, PicoClaw, NullClaw, CoPaw | NanoBot #3186 (hỗ trợ hạng nhất LM Studio), PicoClaw #28 (kết nối LM Studio một cú nhấp chuột), NullClaw #820 (tài liệu Zig cài đặt), CoPaw v1.1.1.post1 (sửa lỗi Ollama) — giảm ngưỡng triển khai cho mô hình không phải OpenAI |
| **Trực quan hóa và nén quản lý ngữ cảnh/bộ nhớ** | CoPaw, Moltis, OpenClaw | CoPaw #3426/#3411 (trực quan hóa sử dụng token + nén tự động), Moltis #728 (memory_forget hướng dẫn bởi LLM), OpenClaw #28930 (Memory v2 duyệt theo liên kết) — khả năng kiểm soát chi phí và hiệu suất trong kịch bản hội thoại dài |
| **Cô lập triển khai cấp sản xuất** | Hermes Agent, IronClaw, NanoClaw, ZeroClaw | Hermes #10570 (cô lập HERMES_HOME), IronClaw #2421 (ủy quyền truy cập đa người dùng qua DB), NanoClaw #1785 (thất bại một kênh không làm sập dịch vụ), ZeroClaw #5773/5779 (phân cấp quyền shell) — biên giới an toàn đa người thuê/đa phiên bản |
| **Độ ổn định Web UI và onboarding** | OpenClaw, IronClaw, ZeroClaw, LobsterAI | OpenClaw #66718 (crash configure), IronClaw #2410/#2409 (làm mới/mất tin nhắn dashboard), ZeroClaw #4866 (dashboard không dùng được), LobsterAI #1693 (mất đầu vào khi chưa cấu hình mô hình) — trải nghiệm người dùng mới là phễu lớn nhất của mọi dự án |

---

## 5. Phân tích định vị khác biệt

| Dự án | Trọng tâm chức năng | Người dùng mục tiêu | Khác biệt kiến trúc kỹ thuật chính |
|:---|:---|:---|:---|
| **OpenClaw** | Tích hợp IM doanh nghiệp, độ ổn định đa kênh, khả năng quan sát Control UI | Nhóm/nhà phát triển cần trợ lý AI "cắm là chạy" đa nền tảng | Toàn bộ ngăn xếp Node.js/TS, gateway tập trung, mở rộng theo plugin |
| **NanoBot** | Tối ưu hiệu suất, thân thiện với LLM cục bộ, mở rộng kênh | Nhà phát triển cá nhân, kịch bản triển khai nhẹ | Thiết kế module, hỗ trợ gốc LM Studio/MiniMax, quản lý PR tách rời |
| **Hermes Agent** | Triển khai kiến trúc đa agent, Docker/triển khai doanh nghiệp, tương tác đầu cuối/web kép | Người dùng kỹ thuật theo đuổi trải nghiệm cạnh tranh Claude Artifacts | Tiến hóa từ agent đơn sang điều phối/hợp tác, cô lập đa phiên bản HERMES_HOME |
| **PicoClaw** | Ủy quyền đa Agent, hệ sinh thái MCP, trải nghiệm frontend Web | Người dùng nâng cao cần tương tác linh hoạt (/btw, delegate) | Công cụ delegate đi đầu, frontend React phát triển độc lập |
| **NanoClaw** | Mở rộng kiến trúc cấp tiến (scope expansion, đa provider), agent đóng gói | Nhà phát triển doanh nghiệp xây dựng quy trình làm việc tự động phức tạp | Đa provider Vercel AI SDK, runtime poll-loop, mô hình quyền mount |
| **NullClaw** | Hiệu suất gốc Zig, kênh ưu tiên Signal/riêng tư | Người dùng nhạy cảm với chiếm dụng bộ nhớ và khả năng kiểm toán | Toàn bộ ngăn xếp Zig, biên dịch tĩnh, sandbox bảo mật shell/git |
| **IronClaw** | Engine V2, quyền đa người thuê, hạ tầng CI/phát hành | Nhà phát triển hệ sinh thái NEAR, cần chia sẻ Agent | Kết hợp Rust/Elixir, cấp phép scope hóa bằng DB, sandbox Engine V2 |
| **LobsterAI** | Tích hợp ma trận sản phẩm nội bộ NetEase (Youdao Longxia/Zhiqi Diwangxie), hệ sinh thái Copilot | Người dùng doanh nghiệp Trung Quốc, người dùng hệ sinh thái NetEase | Phát triển thứ cấp dựa trên runtime OpenClaw, tích hợp IM tùy chỉnh sâu |
| **Moltis** | Tương thích giao thức (MCP/Matrix/WhatsApp/Gemini), quản lý bộ nhớ thông minh | Người dùng triển khai headless/API-first trong môi trường sản xuất | Toàn bộ ngăn xếp Rust, API kép GraphQL/WebSocket, memory_forget hướng dẫn bởi LLM |
| **CoPaw** | Nhiệm vụ lặp lại tự chủ (Mission Mode), hệ sinh thái Qwen, bộ công cụ nhà phát triển | Nhà phát triển Trung Quốc, cần Agent chạy dài hạn | Chủ yếu Python, harness tự chủ Mission Mode, CLI mẫu Agent |
| **ZeroClaw** | Phạm vi chức năng rộng (Kênh/Nhà cung cấp/Skill/Bộ nhớ), kiểm soát bảo mật | Kỹ thuật viên muốn tùy chỉnh sâu | Kiến trúc Rust đơn thể, RFC Microkernel đang thảo luận, nợ hiệu suất biên dịch đáng kể |

---

## 6. Mức độ phổ biến và mức độ trưởng thành của cộng đồng

### Giai đoạn lặp lại nhanh (động lực cao, tập trung mở rộng chức năng)
| Dự án | Đặc điểm | Rủi ro |
|:---|:---|:---|
| **OpenClaw** | Cập nhật 1000条/ngày, phiên bản beta phát hành thường xuyên | Nút thắt cổ chai bảo trì, phản hồi chậm trễ cho vấn đề ổn định P0 |
| **CoPaw** | Mission Mode, chiến lược định tuyến, SIP voice song song thúc đẩy | Nợ trải nghiệm sản phẩm (setup, quản lý tệp, tên thương hiệu hỗn loạn) |
| **NanoClaw** | Mở rộng scope 7 tầng, đa nhà cung cấp Vercel AI SDK sắp landing | Trải nghiệm nền tảng (mount, setup) và phễu người dùng mới |
| **IronClaw** | Engine V2, hệ thống quyền, hạ tầng CI cập nhật dày đặc | Lỗi Web P0 và lỗ hổng bảo mật chưa được giải quyết, tồn đọng PR cấp XL |

### Giai đoạn củng cố chất lượng (tốc độ sửa lỗi > tốc độ giới thiệu)
| Dự án | Đặc điểm | Cơ hội |
|:---|:---|:---|
| **Moltis** | Tỷ lệ đóng Issue 24h là 86%, tỷ lệ hợp nhất PR là 75% | Có thể đóng vai trò là "tiêu chuẩn tốc độ phản hồi" để thu hút người dùng chuyển đổi |
| **Hermes Agent** | Hoàn thành kiến trúc đa agent, cô lập cấu hình và khả năng tương thích Docker được tăng cường | Cửa sổ cơ hội nâng cao niềm tin triển khai doanh nghiệp |
| **NanoBot** | PR tối ưu hóa hiệu suất được tách rời quy chuẩn hóa, tích hợp LM Studio/MiniMax được triển khai | Tăng cường định vị thân thiện với LLM cục bộ |
| **PicoClaw** | Công cụ delegate, lệnh MCP slash và các khả năng cốt lõi khác rõ ràng | Cần bổ sung tích hợp LM Studio và độ ổn định cron |

### Vùng rủi ro trì trệ/chuyển đổi
| Dự án | Đặc điểm | Khuyến nghị |
|:---|:---|:---|
| **ZeroClaw** | Dashboard không dùng được trong 19 ngày, khủng hoảng niềm tin cộng đồng với lượt thích cao | **Bắt buộc** phải thiết lập "SLA phản hồi cộng đồng" và "Tập trung giải quyết Dashboard" trong ngắn hạn |
| **NullClaw** | Di chuyển Zig 0.16 bị chặn, các chức năng cốt lõi (http_request, OTel) hồi quy | Cần làm rõ lịch trình di chuyển, hoặc chấp nhận người dùng chuyển sang PicoClaw/Moltis |
| **LobsterAI** | Engine phát triển tốc độ cao, nhưng Issues đóng 0, phản hồi chính thức 0 | Xây dựng cơ chế luân phiên hỗ trợ cộng đồng, tránh tình trạng "có code không có hơi ấm" |
| **TinyClaw / ZeptoClaw** | Không hoạt động trong 24h | Có thể đã ngừng bảo trì hoặc đang trong giai đoạn ngủ đông rất sớm |

---

## 7. Tín hiệu xu hướng đáng chú ý

### Tín hiệu 1: MCP đang chuyển từ "giao thức thử nghiệm" thành "nút thắt cổ chai sản xuất"
- **Bằng chứng**: Moltis #732/733 (báo lỗi sai kiểm tra sức khỏe MCP), IronClaw #2087 (MCP Notion khiến Agent không phản hồi), PicoClaw #2535 (lệnh MCP slash).
- **Giá trị**: Nhà phát triển tác nhân AI nên coi khả năng chịu lỗi xác thực, khả năng tương thích lược đồ công cụ, khả năng quan sát của máy chủ MCP làm lộ trình cốt lõi, thay vì coi đó là chức năng biên.

### Tín hiệu 2: "Hộp đen ngữ cảnh" và nỗi lo chi phí thúc đẩy đổi mới quản lý bộ nhớ
- **Bằng chứng**: CoPaw #3426 (trực quan hóa sử dụng token), Moltis #728 (memory_forget hướng dẫn bởi LLM), OpenClaw #28930 (Memory v2 duyệt theo liên kết).
- **Giá trị**: Lợi thế cạnh tranh của Agent chạy dài hạn sẽ chuyển từ "nhớ được bao nhiêu" sang "chủ động quên cái gì", trọng số tương quan và quên theo truy cập sẽ trở thành tiêu điểm khác biệt hóa.

### Tín hiệu 3: Trải nghiệm truy cập mô hình cục bộ/mã nguồn mở quyết định trần cơ số người dùng
- **Bằng chứng**: NanoBot #3186 (hỗ trợ hạng nhất LM Studio), PicoClaw #28 (kết nối LM Studio một cú nhấp chuột, 64 ngày không phản hồi), sửa lỗi nóng CoPaw Ollama.
- **Giá trị**: Hỗ trợ "✅ Ollama" trong danh sách không còn đủ, người dùng yêu cầu "kết nối một cú nhấp chuột, không cần khóa giả, tự động phát hiện mô hình". Mức độ thân thiện với mô hình cục bộ sẽ trở thành con hào cốt lõi của dự án trợ lý cá nhân.

### Tín hiệu 4: Hợp tác đa Agent từ "tầm nhìn" bước vào "cuộc đua hạ tầng"
- **Bằng chứng**: Hermes Agent #344 (hoàn thành kiến trúc đa agent), PicoClaw #2531 (công cụ delegate), CoPaw #3364 (Mission Mode), NanoClaw #1786 (mở rộng scope).
- **Giá trị**: Q2 2026 là cửa sổ định hình "giao thức điều phối Agent" (delegate/ACP/Mission Mode), những dự án chậm chân sẽ đối mặt với rủi ro khóa hệ sinh thái.

### Tín hiệu 5: Niềm tin cộng đồng và tốc độ phản hồi trở thành yếu tố giữ chân quan trọng hơn số lượng chức năng
- **Bằng chứng**: Moltis với tỷ lệ đóng Issue 86% so với ZeroClaw #4866 19 ngày không sửa lỗi, LobsterAI không phản hồi chính thức, OpenClaw tồn đọng 362 PR.
- **Giá trị**: Trong bối cảnh chức năng ngày càng đồng nhất, "vấn đề được nhìn thấy trong bao lâu, có tiến triển trong bao lâu" đang trở thành yếu tố quyết định hàng đầu khi nhà phát triển chọn framework Agent mã nguồn mở.

---

## 7. Báo cáo chi tiết dự án cùng đấu trường

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Nhật ký hoạt động dự án NanoBot | 2026-04-16

---

## 1. Tổng quan hôm nay

Cộng đồng NanoBot hôm nay cực kỳ sôi động, với **46 PRs và 17 Issues** được cập nhật trong 24 giờ qua, một ngày lặp lại dày đặc hiếm thấy gần đây. Tiến triển cốt lõi tập trung vào ba hướng: **tối ưu hóa hiệu suất, sửa lỗi ổn định và mở rộng kênh**: mohamed-elkholy95 đã tách một PR tích hợp lớn #3158 thành 6 PR độc lập để thúc đẩy, chengyongru đã khởi động lại quy trình hợp nhất chức năng tự kiểm tra MyTool, T3chC0wb0y đang tích hợp lại kênh Microsoft Teams vào nhánh nightly. Về phía Issues, xuất hiện một trường hợp **hồi quy nâng cấp từ v0.1.5 → v0.1.5.post1** (#3190), cần người bảo trì ưu tiên phản hồi. Dự án nhìn chung có sức khỏe tốt, nhưng tồn đọng PR chờ hợp nhất lên tới 28, băng thông hợp nhất là nút thắt cổ chai tiềm ẩn.

---

## 2. Phát hành phiên bản

**Không có phiên bản mới nào được phát hành hôm nay.**

---

## 3. Tiến độ dự án

### Các PR quan trọng đã được hợp nhất/đóng

| PR | Tác giả | Đóng góp cốt lõi | Liên kết |
|:---|:---|:---|:---|
| **#3158** → tách thành 6 PR con | mohamed-elkholy95 | PR tối ưu hiệu suất tích hợp ban đầu đã đóng, được tách thành #3180~#3184 và #3187 để thúc đẩy độc lập, bao gồm giới hạn hàng đợi, bộ nhớ đệm, Profiling, ưu tiên stream, bảo mật tải lên API | [PR #3158](https://github.com/HKUDS/nanobot/pull/3158) |
| **#3186** | sohamb117 | **Hỗ trợ hạng nhất LM Studio** + cho phép `apiKey: null`, giải quyết vấn đề người dùng LLM cục bộ phải nhập khóa giả | [PR #3186](https://github.com/HKUDS/nanobot/pull/3186) |
| **#3160** | Aisht669 | Bổ sung **điểm cuối tương thích MiniMax Anthropic**, hỗ trợ chế độ suy nghĩ `reasoning_effort` | [PR #3160](https://github.com/HKUDS/nanobot/pull/3160) |
| **#3178** | LeoFYH | Sửa lỗi gán `channel_id` lặp lại trong Discord handler | [PR #3178](https://github.com/HKUDS/nanobot/pull/3178) |
| **#2600 / #2929** | T3chC0wb0y | Các PR cũ liên quan đến kênh Teams đã đóng, chuẩn bị cho việc tích hợp lại #3191 | [PR #2600](https://github.com/HKUDS/nanobot/pull/2600) · [PR #2929](https://github.com/HKUDS/nanobot/pull/2929) |
| **#2521** | chengyongru | PR MyTool phiên bản cũ đã đóng, phiên bản mới #3177 đã được khởi động | [PR #2521](https://github.com/HKUDS/nanobot/pull/2521) |

### Đánh giá tiến độ tổng thể

- **Cấp độ hạ tầng**: Tối ưu hóa hiệu suất từ "PR tạp nham" bước vào giai đoạn tách rời quy chuẩn hóa, khả năng đánh giá mã nguồn được cải thiện đáng kể.
- **Cấp độ truy cập mô hình**: MiniMax chế độ suy nghĩ + hỗ trợ gốc LM Studio, giảm ngưỡng truy cập mô hình cục bộ/trong nước.
- **Cấp độ kênh**: Kênh Teams đã trải qua hai lần đóng cửa và lần thứ ba tích hợp, kênh Feishu đã đạt được cô lập hội thoại theo luồng trong #3176.

---

## 4. Điểm nóng cộng đồng

### Issues có thảo luận sôi nổi nhất

| Issue | Bình luận | Lý do nóng | Liên kết |
|:---|:---|:---|:---|
| **#623** Lỗi "Tool Not Found" cho Skill tùy chỉnh | 8 | Vấn đề chặn người mới bắt đầu của nhà phát triển, liên quan đến các skill tùy chỉnh phổ biến như `google_calendar`, `ha-voice`..., hôm nay đã đóng nhưng không có giải thích sửa lỗi rõ ràng | [Issue #623](https://github.com/HKUDS/nanobot/issues/623) |
| **#3123** Nhiệm vụ cron không thể hỏi tiếp | 7 | Người dùng rất mong muốn nội dung gửi bởi cron có thể được hỏi lại/sửa đổi như tin nhắn thông thường, chạm đến ranh giới thiết kế kiến trúc hội thoại của NanoBot | [Issue #3123](https://github.com/HKUDS/nanobot/issues/3123) |
| **#3143** LLM `messages parameter is illegal` (code 1214) | 5 | Lỗi hợp nhất Token xảy ra thường xuyên, người dùng phản hồi "tần suất khá cao", ảnh hưởng đến độ ổn định của các kênh doanh nghiệp như Feishu | [Issue #3143](https://github.com/HKUDS/nanobot/issues/3143) |
| **#3107** Tập hợp nhiều đề xuất | 5 | Người dùng cao cấp có hệ thống đề xuất 7 đề xuất cải tiến, trong đó 2 đề xuất đã hoàn thành (hiển thị số lượng task, nhắc nhở thử lại), 5 đề xuất còn lại liên quan đến các khả năng cấu hình cốt lõi như tham số CLI, timeout, fallback nhà cung cấp | [Issue #3107](https://github.com/HKUDS/nanobot/issues/3107) |

### Phân tích yêu cầu

- **Yêu cầu cấp kiến trúc**: Cô lập hội thoại cron (#3123), cô lập session theo luồng (#3176) cho thấy người dùng đang đẩy NanoBot từ "trợ lý cá nhân" lên "môi trường sản xuất đa người dùng/đa luồng".
- **Yêu cầu về khả năng quan sát**: Từ "hộp đen" trong #3107 lặp lại nhiều lần, phản ánh sự lo lắng của người dùng về khả năng hiển thị trạng thái nội bộ của agent.

---

## 5. Lỗi và độ ổn định

Sắp xếp theo mức độ nghiêm trọng:

| Ưu tiên | Issue | Mô tả | Trạng thái sửa lỗi | Liên kết |
|:---|:---|:---|:---|:---|
| 🔴 **P0 - Hồi quy nâng cấp** | **#3190** | Crash sau khi nâng cấp v0.1.5 → v0.1.5.post1, stack trace chỉ vào logic xử lý memory, người dùng nghi ngờ định dạng memory không tương thích | **Không có PR fix** | [Issue #3190](https://github.com/HKUDS/nanobot/issues/3190) |
| 🟠 **P1 - Mất dữ liệu** | **#2957** | `MEMORY.md` bị Dream ghi đè thành trống, không có bản sao lưu git, đã đóng nhưng cần xác nhận có biện pháp bảo vệ tiếp theo không | Đã đóng, tình trạng sửa lỗi không rõ | [Issue #2957](https://github.com/HKUDS/nanobot/issues/2957) |
| 🟠 **P1 - Lỗi thường xuyên** | **#3143** | `messages parameter is illegal` (code 1214) khi hợp nhất token, thường xuyên kích hoạt trên kênh Feishu | **Không có PR fix** | [Issue #3143](https://github.com/HKUDS/nanobot/issues/3143) |
| 🟡 **P2 - Hành vi kênh không nhất quán** | **#3166** | Kênh Feishu `send_progress` không hiển thị thông báo tiến độ, không nhất quán với hành vi kênh khác | **Không có PR fix** (nhưng có thể được bao phủ bởi bản sửa đổi lớn Feishu #3176) | [Issue #3166](https://github.com/HKUDS/nanobot/issues/3166) |
| 🟡 **P2 - Cấu hình không có hiệu lực** | **#3115** | cron `deliver: false` bị bỏ qua, đầu ra của agent vẫn được đẩy đi | Đã đóng | [Issue #3115](https://github.com/HKUDS/nanobot/issues/3115) |
| 🟡 **P2 - Lỗi kiểu** | **#3102** | `max_tokens=None` dẫn đến lỗi kiểu `<= not supported` | Đã đóng | [Issue #3102](https://github.com/HKUDS/nanobot/issues/3102) |
| 🟢 **P3 - Cấu hình chưa triển khai** | **#2921** | Cấu hình MSTeams `restart_notify_*` được lộ ra nhưng chưa có hiệu lực | **Có thể được bao phủ bởi PR #3191** | [Issue #2921](https://github.com/HKUDS/nanobot/issues/2921) |

> **Khuyến nghị hành động cho người bảo trì**: Cần phản hồi ngay lập tức cho sự hồi quy nâng cấp #3190, đề nghị người bảo trì xác nhận xem có phải do thay đổi lược đồ memory gây ra không, nếu cần thiết thì phát hành hướng dẫn di chuyển hoặc hotfix.

---

## 6. Yêu cầu chức năng và tín hiệu lộ trình

| Yêu cầu | Nguồn | Đánh giá khả năng đưa vào | Liên kết |
|:---|:---|:---|:---|
| **Hỗ trợ gốc LM Studio** | #3185 / #3186 | **Cao** — PR #3186 đã được hợp nhất | [Issue #3185](https://github.com/HKUDS/nanobot/issues/3185) |
| **Chế độ suy nghĩ MiniMax** | PR #3160 | **Đã hợp nhất**, có khả năng cao sẽ được bao gồm trong phiên bản tiếp theo | [PR #3160](https://github.com/HKUDS/nanobot/pull/3160) |
| **Tự kiểm tra runtime MyTool** | #3177 | **Cao** — Tác giả đã khởi động lại PR dựa trên phản hồi đánh giá, chức năng đã trưởng thành | [PR #3177](https://github.com/HKUDS/nanobot/pull/3177) |
| **Phủ mô hình phân giai đoạn Heartbeat** | PR #3156 | **Trung cao** — Thiết kế rõ ràng, nhắm vào heartbeat hai giai đoạn eval/exec riêng biệt, nhu cầu cấp thiết cho kịch bản doanh nghiệp | [PR #3156](https://github.com/HKUDS/nanobot/pull/3156) |
| **Cô lập hội thoại theo luồng Feishu + reply_in_thread** | PR #3176 | **Cao** — Feishu là kênh chính của người dùng doanh nghiệp, PR này giải quyết trực tiếp vấn đề hỗn loạn ngữ cảnh trong nhóm chat | [PR #3176](https://github.com/HKUDS/nanobot/pull/3176) |
| **Tích hợp AgentHiFive** | PR #3144 | **Trung** — Liên quan đến backend MCP, kênh vault, quy trình phê duyệt, phạm vi thay đổi lớn, chu kỳ đánh giá có thể sẽ dài | [PR #3144](https://github.com/HKUDS/nanobot/pull/3144) |
| **Tin nhắn cron có thể hỏi lại/sửa đổi** | #3123 | **Trung thấp** — Cần thay đổi kiến trúc hội thoại, hiện không có PR, trong ngắn hạn có khả năng cao hơn thông qua giải thích bằng tài liệu về giới hạn | [Issue #3123](https://github.com/HKUDS/nanobot/issues/3123) |
| **LLM timeout / fallback / đa custom provider** | #3107 (5~7) | **Trung** — Thuộc về việc tăng cường tính linh hoạt của cấu hình, yêu cầu rõ ràng từ cộng đồng, nhưng cần người bảo trì xác nhận kế hoạch tái cấu trúc hệ thống cấu hình | [Issue #3107](https://github.com/HKUDS/nanobot/issues/3107) |

---

## 7. Tóm tắt phản hồi người dùng

### Điểm đau cốt lõi

| Điểm đau | Nguồn | Trích dẫn điển hình |
|:---|:---|:---|
| **Memory không đáng tin cậy/hộp đen** | #2957, #1186, #3107 | "Woke up to a huge bug, MEMORY.md is entirely blank"; "nanobot hiện tại là hộp đen" |
| **Trải nghiệm truy cập LLM cục bộ kém** | #3185 | "pass a gibberish key into the openai provider... also requires you to change API Base URL" |
| **Hành vi kênh không nhất quán** | #3166, #3123 | Thiếu thông báo tiến độ Feishu, tin nhắn cron không thể tương tác tiếp theo |
| **Thông tin lỗi không thân thiện** | #3143, #3006 | Hết hạn API không có cảnh báo, LLM trả về code 1214 thường xuyên nhưng không có hướng dẫn khắc phục sự cố |
| **Ngưỡng phát triển skill tùy chỉnh** | #623 | Người dùng mới lần đầu phát triển AI cá nhân, sau khi đăng ký skill tùy chỉnh vẫn báo "Tool Not Found" |

### Điểm hài lòng

- #623 bắt đầu bằng: "I am enjoying nanobot! This is my first personal ai. It's very exciting getting things to work! Thanks for developing and sharing this project!" — Dự án vẫn có sức hấp dẫn mạnh mẽ đối với người dùng mới.
- Phản hồi nhanh chóng của người bảo trì và đánh dấu hoàn thành 2 đề xuất trong #3107, cho thấy hiệu quả hợp tác cộng đồng được công nhận.

---

## 8. Tồn đọng cần xử lý

Các Issues/PR sau đây đã hoạt động trong thời gian dài hoặc mới mở hôm nay nhưng chưa có phản hồi, đề xuất người bảo trì ưu tiên chú ý:

| Mục | Lý do | Liên kết |
|:---|:---|:---|
| **#3190** Crash khi nâng cấp v0.1.5.post1 | **Mới mở hôm nay, P0 hồi quy**, không có phản hồi | [Issue #3190](https://github.com/HKUDS/nanobot/issues/3190) |
| **#3144** Tích hợp AgentHiFive | Mở từ ngày 14/4, liên quan đến nhiều hạ tầng mới, cần người bảo trì đưa ra ý kiến đánh giá kiến trúc | [PR #3144](https://github.com/HKUDS/nanobot/pull/3144) |
| **#2220** Đề xuất ngữ cảnh định tuyến công cụ ContextVar | Mở từ ngày 18/3, đề xuất cứng hóa an toàn async, có 4 bình luận, không có phản hồi rõ ràng từ người bảo trì | [Issue #2220](https://github.com/HKUDS/nanobot/issues/2220) |
| **#3006** Cảnh báo thiếu khi hết hạn API | Mở từ ngày 10/4, chỉ có 1 bình luận, thuộc về thiếu khả năng quan sát cơ bản | [Issue #3006](https://github.com/HKUDS/nanobot/issues/3006) |
| **#3188** nanobot-channel-webhook không thể cài đặt | Mở từ ngày 15/4, hướng dẫn tài liệu cài đặt plugin bị lỗi trực tiếp, chặn truy cập kênh mới | [Issue #3188](https://github.com/HKUDS/nanobot/issues/3188) |

---

*Báo cáo hàng ngày dựa trên dữ liệu công khai của GitHub HKUDS/nanobot, thời gian dữ liệu kết thúc: 2026-04-16.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Nhật ký hoạt động dự án Hermes Agent | 2026-04-16

---

## 1. Tổng quan hôm nay

Hermes Agent hôm nay duy trì **hoạt động cao**: trong 24 giờ qua, xử lý tổng cộng **50 Issues** (28 đóng, 22 mới/hoạt động) và **50 PRs** (19 hợp nhất/đóng, 31 chờ duyệt), không có phiên bản mới nào được phát hành. Hướng thúc đẩy cốt lõi của dự án tập trung vào **triển khai kiến trúc đa agent**, **sửa lỗi ổn định kênh Slack/Discord**, **cô lập cấu hình HERMES_HOME** và **khả năng tương thích Docker** cùng các hạ tầng hardened khác. Việc đóng #344 kiến trúc đa agent đánh dấu sự hoàn thành chính thức của cột mốc này, đồng thời việc sửa lỗi tập trung vào các trường hợp biên của nhiều kênh cho thấy dự án đang chuyển từ giai đoạn mở rộng chức năng sang **giai đoạn tinh chỉnh độ ổn định**.

---

## 2. Phát hành phiên bản

**Không có phiên bản mới nào được phát hành hôm nay.**

---

## 3. Tiến độ dự án

### Các PR quan trọng đã được hợp nhất/đóng

| PR | Tác giả | Mô tả tiến độ |
|:---|:---|:---|
| [#10570](https://github.com/NousResearch/hermes-agent/pull/10570) | teknium1 | **Sửa lỗi rò rỉ cô lập cấu hình HERMES_HOME trong 5 vị trí** — bao gồm session honcho, thư mục ngoài skill, cài đặt.sh --dir, giải quyết điểm đau cốt lõi của triển khai đa phiên bản |
| [#10569](https://github.com/NousResearch/hermes-agent/pull/10569) | teknium1 | Thay thế `ps eww -ax` bằng POSIX tương thích `ps -A eww`, **sửa lỗi đánh giá sai trạng thái gateway trong môi trường Docker** |
| [#6644](https://github.com/NousResearch/hermes-agent/pull/6644) | shin4 | Tiến trình con `execute_code` kế thừa `HERMES_HOME`, sửa lỗi công cụ vision... không tìm thấy `auth.json` trong Docker |
| [#6527](https://github.com/NousResearch/hermes-agent/pull/6527) | iacker | `install.sh --dir` hiện di chuyển trạng thái và cấu hình chính xác, đầu ra trình cài đặt được cập nhật đồng bộ |
| [#6338](https://github.com/NousResearch/hermes-agent/pull/6338) | iacker | **Cấm chỉnh sửa/vá lỗi/xóa thư mục skill bên ngoài**, bảo vệ skill bên ngoài khỏi bị phá hủy ngoài ý muốn |
| [#6025](https://github.com/NousResearch/hermes-agent/pull/6025) | dontcallmejames | Cấu hình honcho trả về đường dẫn tôn trọng `HERMES_HOME`, tránh ô nhiễm giữa các profile |

**Đánh giá tiến độ tổng thể**: Các PR được hợp nhất hôm nay tập trung vào **cô lập cấu hình, khả năng tương thích Docker, biên giới quyền hạn**, thuộc về hạ tầng cốt lõi quan trọng để hardening, dọn đường cho việc triển khai quy mô lớn và kịch bản đa người dùng sau này.

---

## 4. Điểm nóng cộng đồng

### Issues có độ thảo luận cao

| Issue | Trạng thái | Bình luận | Yêu cầu cốt lõi |
|:---|:---|:---|:---|
| [#344](https://github.com/NousResearch/hermes-agent/issues/344) | **ĐÃ ĐÓNG** | 27 | **Hoàn thành cột mốc kiến trúc đa agent** — Tiến hóa từ agent đơn + ủy quyền sub-agent thành kiến trúc điều phối/hợp tác/chuyên môn hóa vai trò thực sự, 13 👍 phản ánh sự mong đợi lâu dài của cộng đồng |
| [#9179](https://github.com/NousResearch/hermes-agent/issues/9179) | ĐANG MỞ | 24 | **Thiếu kênh báo cáo lỗ hổng bảo mật** — Người dùng yêu cầu kích hoạt GitHub Private Vulnerability Reporting, thuộc về hạ tầng tuân thủ và tin cậy |
| [#3863](https://github.com/NousResearch/hermes-agent/issues/3863) | ĐÃ ĐÓNG | 13 | **Hỗ trợ AWS Bedrock gốc** — Bỏ qua độ trễ/chi phí/tổn thất chức năng doanh nghiệp của OpenRouter, 17 👍 là cao nhất hôm nay |
| [#501](https://github.com/NousResearch/hermes-agent/issues/501) | ĐÃ ĐÓNG | 13 | **Hoàn thành Gateway Giao diện người dùng Web** — Bổ sung giao diện trình duyệt cục bộ và khoảng cách quan trọng với các đối thủ cạnh tranh như Claude Artifacts |
| [#4518](https://github.com/NousResearch/hermes-agent/issues/4518) | ĐÃ ĐÓNG | 13 | **Hợp nhất 5 PR của engine render đầu cuối** — Hiển thị diff trong dòng, tô sáng cú pháp, Markdown đầy đủ, hỗ trợ chủ đề |

**Phân tích yêu cầu đằng sau**: Lời kêu gọi mạnh mẽ nhất của cộng đồng tập trung vào **khả năng triển khai cấp doanh nghiệp** (Bedrock, Docker, cô lập HERMES_HOME) và **nâng cấp trải nghiệm tương tác** (Web UI, render đầu cuối phong phú). Việc đóng #344 và hoàn thành #501 đánh dấu Hermes đã ngang bằng với các đối thủ cạnh tranh hàng đầu về mặt kiến trúc và tương tác.

---

## 5. Lỗi và độ ổn định

| Issue | Mức độ nghiêm trọng | Trạng thái | Mô tả | PR Fix |
|:---|:---|:---|:---|:---|
| [#10575](https://github.com/NousResearch/hermes-agent/issues/10575) | 🔴 **Cao** | ĐANG MỞ | Anthropic OAuth/Claude Max proxy path lại đánh giá sai gợi ý hệ thống đầy đủ là "extra usage exhausted", dẫn đến yêu cầu hợp lệ thất bại | [#10576](https://github.com/NousResearch/hermes-agent/pull/10576) đã mở |
| [#10223](https://github.com/NousResearch/hermes-agent/issues/10223) | 🔴 **Cao** | ĐANG MỞ | Nhà cung cấp GitHub Copilot trả về base URL trống khi phân tích từ credential pool, dẫn đến lỗi khởi động | Chờ fix |
| [#6843](https://github.com/NousResearch/hermes-agent/issues/6843) | 🟡 Trung bình | ĐÃ ĐÓNG | `UnicodeEncodeError` dẫn đến lỗi gọi API (provider zai) | Đã sửa lỗi |
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | 🟡 Trung bình | ĐÃ ĐÓNG | Phản hồi dài kích hoạt "Response truncated due to output length limit" | Đã sửa lỗi |
| [#7588](https://github.com/NousResearch/hermes-agent/issues/7588) | 🟡 Trung bình | ĐÃ ĐÓNG | Công cụ hoàn toàn không thể sử dụng (lịch sử hội thoại/bộ nhớ/đọc tệp đều thất bại) | Đã sửa lỗi |
| [#6360](https://github.com/NousResearch/hermes-agent/issues/6360) | 🟡 Trung bình | ĐÃ ĐÓNG | Cấu hình cài đặt nhanh tùy chỉnh mô hình phân tích ra `Invalid port: 6153export` | Đã sửa lỗi |
| [#6447](https://github.com/NousResearch/hermes-agent/issues/6447) | 🟢 Thấp | ĐANG MỞ | `/sethome` Discord ghi channel ID vào `.env` thay vì `config.yaml` | Chờ fix |
| [#10581](https://github.com/NousResearch/hermes-agent/issues/10581) | 🟢 Thấp | ĐANG MỞ | Nhắc nhở tự động home channel chỉ đọc env var, không quay về cấu hình yaml (liên quan đến #6644) | Chờ fix |
| [#10579](https://github.com/NousResearch/hermes-agent/issues/10579) | 🟢 Thấp | ĐÃ ĐÓNG | Tiền tố mention Slack khiến `is_command()` không nhận dạng được lệnh `/` | Đã sửa lỗi |
| [#10550](https://github.