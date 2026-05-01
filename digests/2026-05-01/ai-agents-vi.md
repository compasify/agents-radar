# OpenClaw 生态日报 2026-05-01

> Issue: 500 | PR: 500 | Dự án được bảo phủ: 13 | Thời gian tạo: 2026-05-01 01:49 UTC

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

Được rồi, với tư cách là nhà phân tích các dự án mã nguồn mở trong lĩnh vực AI Agent và Trợ lý AI Cá nhân, tôi sẽ dựa trên dữ liệu dự án OpenClaw bạn cung cấp để tạo báo cáo hàng ngày về động thái của dự án vào ngày 2026-05-01.

---

# Nhật ký hàng ngày về động thái dự án OpenClaw | 2026-05-01

## Tổng quan hôm nay

Hôm nay, cộng đồng dự án OpenClaw hoạt động cực kỳ sôi nổi, với tổng cộng 500 Issue và 500 bản cập nhật PR được tạo ra, cho thấy vòng lặp phát triển và phản hồi diễn ra dày đặc. Dự án đã phát hành 5 phiên bản mới (đều thuộc dòng v2026.4.29), chủ yếu tập trung vào việc tăng cường chức năng của hệ thống tin nhắn và tự động hóa. Tuy nhiên, phản hồi của cộng đồng đã tiết lộ một số vấn đề hồi quy nghiêm trọng, đặc biệt là các vấn đề như CPU Gateway bị quá tải, treo khi khởi động và hết thời gian chờ plugin xuất hiện trong phiên bản v2026.4.26, cho thấy các bản cập nhật gần đây đã mang lại các tính năng mới nhưng cũng tiềm ẩn rủi ro về độ ổn định không thể bỏ qua. Sức khỏe tổng thể của dự án có đặc điểm kép là "phát triển cao, rủi ro cao".

## Phát hành phiên bản

Dự án đã phát hành 5 phiên bản hôm nay, tất cả đều thuộc dòng `v2026.4.29`, bao gồm một phiên bản chính thức và bốn phiên bản beta. Do nội dung cập nhật nhất quán cao, các điểm cập nhật cốt lõi như sau:

*   **Điểm nổi bật cốt lõi**:
    *   **Cải thiện tin nhắn và tự động hóa**: Giới thiệu chính sách bắt buộc mặc định là "active-run steering" (điều hướng chạy chủ động) và "visible-reply" (phản hồi hiển thị), siêu dữ liệu định tuyến cho các tác nhân phụ (subagent) sắp ra mắt, và cơ chế cam kết theo dõi tùy chọn dựa trên tác vụ heartbeat (nhịp tim).
*   **Người đóng góp**: Xin cảm ơn sự đóng góp của `@vincentkoc`, `@scoootscooob`, `@samzong`, và `@vignesh07`.

*   **Lưu ý về di chuyển và tương thích**:
    *   Do có nhiều vấn đề tập trung trong phản hồi của cộng đồng đối với các phiên bản từ `v2026.4.26` trở đi (ví dụ: `v2026.4.29`), người dùng nên xem xét kỹ nhật ký thay đổi đầy đủ của bản cập nhật này trước khi nâng cấp.
    *   Dự kiến tương thích với các phiên bản dòng `v2026.4.26` và `v2026.4.29-beta`, nhưng có các vấn đề đã biết về hết thời gian chờ bộ nhớ plugin, CPU Gateway cao, treo khi khởi động, v.v. Người dùng có kế hoạch nâng cấp nên thận trọng hoặc chờ bản vá phát hành.

## Tiến độ dự án

Hôm nay có 20 PR được hợp nhất hoặc đóng, đánh dấu việc thúc đẩy nhiều bản sửa lỗi và tính năng quan trọng. Mặc dù tổng số lượng không lớn, nhưng chất lượng khá cao, chủ yếu tập trung vào việc giải quyết các điểm đau của cộng đồng.

*   **Hợp nhất/Đóng quan trọng**:
    *   **Cải thiện độ ổn định của kênh Discord** (`#75338`): PR `fix(discord): harden rate limit retries` đã được hợp nhất. PR này tăng cường cơ chế thử lại giới hạn tốc độ của API REST Discord, thông qua các chiến lược phân tích tiêu đề `Retry-After`, v.v., để cải thiện khả năng phục hồi của kênh dưới tải cao.
    *   **Sửa lỗi nhà cung cấp OpenAI-Codex**: PR `[codex] Fix commitments extractor model selection` (`#75347`) đã được hợp nhất. Sửa lỗi có thể xảy ra khi trình trích xuất cam kết chọn mô hình, đảm bảo cấu hình như `openai-codex/gpt-5.5` có thể được phân tích cú pháp chính xác.
    *   **Sửa lỗi còn sót lại của công cụ tác vụ Heartbeat**: PR `fix: regression where commitment safety handling can disable tools for unrelated due heartbeat...` (`#75344`) được hợp nhất (do ClawSweeper[bot] đề xuất). Sửa lỗi hồi quy do logic xử lý an toàn cam kết, lỗi này sẽ vô hiệu hóa sai các công cụ trong các tác vụ Heartbeat không liên quan.

## Điểm nóng cộng đồng

Các chủ đề thảo luận nóng bỏng của cộng đồng hôm nay tập trung vào các vấn đề hồi quy nghiêm trọng ảnh hưởng đến trải nghiệm người dùng, chẳng hạn như **chiếm dụng CPU cao**, **hết thời gian chờ plugin** và **treo khi khởi động**.

1.  **Chiếm dụng CPU Gateway cao** (`#74328`): Nhận được 3 👍, 7 bình luận. Người dùng báo cáo rằng sau khi nâng cấp từ `v2026.4.22` lên `v2026.4.26`, mức sử dụng CPU của luồng chính Gateway tăng đột biến lên ~100%, nguyên nhân là do gọi `fs.stat` bị "bão". **Đây là một trong những vấn đề ổn định nghiêm trọng nhất hiện nay**.
    *   **Liên kết**: [#74328](https://github.com/openclaw/openclaw/issues/74328)

2.  **Treo khi khởi động Gateway** (`#73303`): Nhận được 2 👍, 12 bình luận. Người dùng phản hồi rằng khi khởi động lại Gateway trên macOS, có hiện tượng treo kéo dài 3-4 phút trước khi quy trình mới khởi động.
    *   **Liên kết**: [#73303](https://github.com/openclaw/openclaw/issues/73303)

3.  **Hết thời gian chờ plugin Active Memory** (`#73306`): Nhận được 2 👍, 11 bình luận. Người dùng phản hồi rằng kể từ `v2026.4.25`, plugin Active Memory hết thời gian chờ sau mỗi lần chạy 15 giây, dẫn đến chạy thất bại. Đây là một vấn đề tương thích plugin lặp đi lặp lại.
    *   **Liên kết**: [#73306](https://github.com/openclaw/openclaw/issues/73306)

## Lỗi và Độ ổn định

Số lượng lỗi được báo cáo hôm nay rất nhiều, và chủ yếu là các vấn đề hồi quy, gây ảnh hưởng lớn đến độ ổn định của hệ thống.

*   **Nghiêm trọng**:
    *   **CPU Gateway chính bị quá tải** (`#74328`): Vấn đề hồi quy của `v2026.4.26`, dẫn đến dịch vụ không phản hồi. **Hiện chưa có PR sửa lỗi rõ ràng.**
    *   **Treo khi khởi động/hoạt động Gateway** (`#73303`, `#75330`): Các vấn đề treo Gateway đã được báo cáo trên các nền tảng và hoạt động khác nhau, ảnh hưởng nghiêm trọng đến khả năng sử dụng.
    *   **Hết thời gian chờ plugin và lỗi khởi động** (`#74209`, `#75069`): Sau `v2026.4.26`, nhiều plugin mặc định (ví dụ: `bonjour`) có thể khiến Gateway khởi động thất bại hoặc luồng chính bị chặn.

*   **Trung bình**:
    *   **Phản hồi UI điều khiển lặp lại** (`#71992`): Hồi quy của `v2026.4.21`, phản hồi của tất cả trợ lý trong Webchat bị hiển thị lặp lại.
    *   **Công cụ máy chủ MCP không được hiển thị cho mô hình** (`#74844`): Công cụ máy chủ MCP được cấu hình không xuất hiện trong `tools[]` của yêu cầu, khiến mô hình không thể gọi.
    *   **Tước quyền `clearUnboundScopes`** (`#51396`): Vấn đề quyền hạn tồn tại lâu dài, phạm vi toán tử của các hoạt động của máy khách xác thực token không cục bộ bị tước quyền sai.
    *   **Lỗi chuyển đổi mô hình** (`#51205`, `#71932`): Lỗi 404 xảy ra khi sử dụng tác nhân phụ hoặc mô hình cụ thể (ví dụ: `google/gemini-3.1-flash-lite-preview`).

*   **Nhẹ**:
    *   `openclaw doctor` báo cáo sai tác nhân mồ côi (`#74313`)
    *   Mất tin nhắn Telegram do cập nhật (`#71178`)
    *   Hook `message_sent` không được kích hoạt trong Webchat và TUI (`#70928`)

## Yêu cầu chức năng và tín hiệu lộ trình

Nhu cầu về các tính năng mới của cộng đồng vẫn mạnh mẽ, chủ yếu tập trung vào việc nâng cao khả năng hiện có và cải thiện khả năng áp dụng cấp doanh nghiệp.

*   **Tín hiệu nhiệt độ cao / ưu tiên cao**:
    *   **Kiến trúc bộ nhớ đa khe cắm** (`#60572`): Yêu cầu này được đưa ra từ đầu tháng 4, nhận được 3 👍. Người dùng mong muốn có nhiều khe bộ nhớ chuyên dụng thay thế khe bộ nhớ duy nhất, để hỗ trợ nhiều nhà cung cấp bộ nhớ hoạt động song song. Điều này cho thấy cộng đồng có yêu cầu cao hơn đối với khả năng quản lý bộ nhớ dài hạn của Agent.
    *   **Hỗ trợ cấu hình YAML** (`#45758`): Nhận được 1 👍, có thảo luận liên tục. Yêu cầu hỗ trợ định dạng tệp cấu hình YAML, chủ yếu vì khả năng đọc và tích hợp với chuỗi công cụ DevOps.
    *   **Hỗ trợ bot Đa Teams** (`#71058`): Cộng đồng đã rõ ràng yêu cầu hỗ trợ nhiều Bot Azure/Teams trên một Gateway duy nhất, đây là một nhu cầu rất điển hình trong triển khai cấp doanh nghiệp.

*   **Hướng phát triển có thể dự đoán**:
    *   **Bảo mật và Quản trị**: PR `feat: add reversible sensitive data sanitization layer (Security Guardrail)` (`#72733`) giới thiệu một lớp làm sạch dữ liệu nhạy cảm có thể đảo ngược, nhằm giải quyết vấn đề rò rỉ thông tin nhạy cảm, cho thấy dự án đang hướng tới tuân thủ bảo mật cấp doanh nghiệp.

## Tóm tắt phản hồi người dùng

*   **Điểm đau cốt lõi**:
    *   **Cập nhật gây ra sự cố**: "Các bạn có thể phát hành một phiên bản không gây ra bất kỳ sự cố nào không?" (Issue `#48947`). Người dùng cảm thấy bực bội vì các vấn đề hồi quy thường xuyên xảy ra.
    *   **Giảm hiệu suất**: "Sau khi nâng cấp lên 2026.4.26, Gateway bị kẹt khi kết nối và không còn phản hồi" (Issue `#72208`). Các vấn đề CPU cao và treo nghiêm trọng làm gián đoạn quy trình làm việc hàng ngày của người dùng.
    *   **Hệ sinh thái plugin không ổn định**: Vấn đề hết thời gian chờ liên tục của plugin Active Memory (Issue `#73306`) đã kéo dài qua nhiều phiên bản, người dùng liên tục gặp phải vấn đề tương tự, cho thấy việc kiểm tra và đảm bảo tính tương thích của hệ sinh thái plugin cốt lõi còn thiếu sót.

*   **Phản hồi tích cực**:
    *   **Khẳng định tính năng mới**: Các cải tiến về hệ thống tin nhắn và tự động hóa trong bản phát hành `v2026.4.29` (như điều hướng chạy chủ động mặc định, chính sách bắt buộc phản hồi hiển thị) thể hiện sự quan tâm đến trải nghiệm của nhà phát triển và kiểm soát quy trình tự động hóa.
    *   **Hướng phát triển dự án**: Cộng đồng khá tích cực thảo luận về các tính năng như khe cắm đóng góp `Control UI` (`#71736`) và **khử dữ liệu nhạy cảm** (`#72733` PR), cho thấy người dùng mong đợi OpenClaw tiếp tục đầu tư vào khả năng mở rộng và bảo mật.

## Tồn đọng cần xử lý

Dưới đây là một số vấn đề tồn đọng kéo dài hoặc mới được đề xuất hôm nay, cần sự chú ý cao của người bảo trì:

*   **Vấn đề người dùng ưu tiên cao**:
    *   **Vấn đề quyền hạn `clearUnboundScopes` trên Windows** (`#51396`): Được đề xuất từ ngày 21 tháng 3, khiến các máy khách không cục bộ không thể sử dụng các chức năng cốt lõi như `chat.send`, vẫn chưa được sửa chữa.
    *   **Tích lũ quy trình zombie Sandbox** (`#68691`): Được đề xuất từ ngày 18 tháng 4, có thể tiềm ẩn nguy cơ vượt quá giới hạn quy trình sandbox, là một vấn đề rò rỉ tài nguyên.

*   **Yêu cầu chức năng chưa được phản hồi lâu dài**:
    *   **Hỗ trợ cấu hình YAML** (`#45758`): Được đề xuất từ ngày 14 tháng 3, là một nhu cầu phổ biến để cải thiện trải nghiệm người dùng.
    *   **Hỗ trợ bot Đa Teams** (`#71058`): Được đề xuất từ ngày 24 tháng 4, là một yêu cầu quan trọng cho việc triển khai cấp doanh nghiệp.

*   **Vấn đề được đề xuất hôm nay có mức độ quan tâm cao**:
    *   **API `/v1/responses` bỏ qua lệnh công cụ tích hợp** (`#75074`): Người dùng chỉ ra rằng thiết kế API hiện tại không cho phép đánh giá ngoại tuyến lệnh công cụ, hạn chế khả năng gỡ lỗi và thử nghiệm của Agent.
    *   **Lệnh `/think` gây treo trong Control UI** (`#52105`): Lỗi được đề xuất từ ngày 22 tháng 3 vẫn chưa được giải quyết.

---

## So sánh theo chiều ngang các dự án cùng lĩnh vực

Được rồi, với tư cách là nhà phân tích dự án mã nguồn mở trong lĩnh vực AI Agent và Trợ lý AI Cá nhân, dựa trên dữ liệu động thái của từng dự án bạn cung cấp vào ngày 2026-05-01, tôi xin trình bày báo cáo phân tích so sánh theo chiều ngang.

---

## Báo cáo phân tích so sánh theo chiều ngang hệ sinh thái AI Agent cá nhân (2026-05-01)

### 1. Toàn cảnh hệ sinh thái

Hiện tại, hệ sinh thái mã nguồn mở của AI Agent cá nhân và Trợ lý AI Tự chủ đang trong giai đoạn **sửa chữa dày đặc và tái cấu trúc kiến trúc trước kỳ đại phiên bản**. Một mặt, các dự án tiêu biểu như OpenClaw và ZeroClaw, sau khi nhanh chóng lặp lại chức năng, đang đối mặt với những **thách thức nghiêm trọng về hồi quy độ ổn định và bảo mật**, đặc biệt là ở các điểm vào trải nghiệm người dùng (Onboarding, Gateway cốt lõi) và quy trình sản xuất quan trọng (nhiệm vụ định giờ, gọi công cụ) đã bộc lộ nhiều vấn đề chặn P1. Mặt khác, các dự án như Hermes Agent và IronClaw đang dồn toàn lực **nghiên cứu và phát triển kiến trúc thế hệ tiếp theo (như bản phát hành "Curator" và kiến trúc "Reborn")**, thể hiện tín hiệu rõ ràng về sự chuyển đổi từ "chồng chất chức năng" sang "quản trị kiến trúc". Đồng thời, các cộng đồng như NanoBot và Moltis đang tập trung thảo luận về **tinh chỉnh trải nghiệm người dùng** (ví dụ: trau chuốt UI, định dạng tệp cấu hình) và các **điểm yếu tương tác sâu sắc** như vòng lặp bế tắc công cụ của AGI Agent, tự nhận thức, đánh dấu sự chuyển đổi của cộng đồng từ "có thể sử dụng" sang "dễ sử dụng" và "đáng tin cậy".

### 2. So sánh mức độ hoạt động của từng dự án

| Tên dự án | Cập nhật Issue hôm nay | Cập nhật PR hôm nay | Phát hành phiên bản | Đánh giá sức khỏe | Giai đoạn cốt lõi |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | v2026.4.29 (5 phiên bản) | **Rủi ro cao - Ứng phó tích cực** | Giai đoạn tăng cường chức năng & bùng phát lỗi |
| **NanoBot** | 15 | 27 | Không có | **Tốt** | Tối ưu hóa kiến trúc & tinh chỉnh độ ổn định |
| **Hermes Agent** | 50 | 50 | v0.12.0 | **Xuất sắc** | Lặp lại nhanh chóng & cột mốc chức năng |
| **PicoClaw** | 37 | 38 | v0.2.8 | **Tốt** | Mở rộng chức năng & giai đoạn sửa lỗi tồn đọng |
| **NanoClaw** | 5 (mới) | 37 (hợp nhất) | Không có | **Hoạt động - Rủi ro cục bộ** | Giai đoạn sản xuất tốc độ cao & xác minh chức năng |
| **NullClaw** | 0 (mới) | 9 (6 hợp nhất) | Không có | **Tốt** | Sửa lỗi di chuyển & phát triển chức năng sâu |
| **IronClaw** | 26 | 38 | Không có | **Cường độ cao - Rủi ro cao** | Giai đoạn nước rút tái cấu trúc kiến trúc quan trọng |
| **LobsterAI** | 1 (mới) | 9 (hợp nhất) | Không có | **Tốt** | Giai đoạn ổn định & tối ưu hóa trải nghiệm |
| **Moltis** | 6 (đóng) | 18 (hợp nhất) | v20260430.01 | **Xuất sắc** | Giai đoạn tích hợp chức năng & cải thiện trải nghiệm |
| **CoPaw** | 13 (hợp nhất) | 13 (hợp nhất) | v1.1.5.post1 | **Tốt** | Giai đoạn sửa lỗi kênh & bảo mật |
| **ZeroClaw** | 50 | 50 | Không có | **Rủi ro cao - Giai đoạn sửa lỗi dày đặc** | Giai đoạn xóa lỗi quan trọng trước phiên bản lớn |
| **TinyClaw** | 0 | 0 | Không có | **Ngủ đông** | Không hoạt động |
| **ZeptoClaw** | 0 | 0 | Không có | **Ngủ đông** | Không hoạt động |

**Kết luận**: **Hermes Agent** và **Moltis** thể hiện hiệu suất ổn định nhất trong chu kỳ hiện tại, phát hành các phiên bản mới mang tính cột mốc. Trong khi đó, **OpenClaw** và **ZeroClaw**, mặc dù có mức độ hoạt động rất cao, nhưng đang đối mặt với rủi ro ổn định nghiêm trọng, cần cảnh giác với tác động tiêu cực của "phát triển tốc độ cao". **IronClaw** đang ở giai đoạn tái cấu trúc tích cực nhất, tiềm năng lớn nhưng cũng đầy rủi ro.

### 3. Vị thế của OpenClaw trong hệ sinh thái

OpenClaw, được xác định rõ ràng là dự án **tham chiếu cốt lõi** trong báo cáo, có lưu lượng truy cập cộng đồng (500 Issue/500 PR) vượt xa bất kỳ dự án nào khác, thể hiện vai trò dẫn dắt của nó như là **nền tảng hoặc tiêu chuẩn thực tế** của hệ sinh thái.

*   **Ưu điểm khi so sánh với các đối thủ cùng loại**:
    *   **Quy mô và hệ sinh thái**: Quy mô cộng đồng, lưu lượng Issue/PR, tần suất phát hành phiên bản đều dẫn đầu, hệ sinh thái lớn nhất.
    *   **Phạm vi chức năng**: Là "tham chiếu cốt lõi", nó có nhu cầu và thảo luận cộng đồng rộng rãi nhất về các chức năng Agent cốt lõi như tin nhắn, tự động hóa, kiến trúc bộ nhớ (nhu cầu đa khe cắm).
    *   **Sự gắn bó của người dùng**: Mức độ hoạt động của người dùng cực kỳ cao, việc theo dõi liên tục các lỗi tồn đọng (như Windows `clearUnboundScopes` \#51396) cho thấy sự phụ thuộc sâu sắc của nhóm người dùng cốt lõi.

*   **Sự khác biệt về lộ trình kỹ thuật**:
    *   So với **NanoBot** và **Hermes Agent**, OpenClaw không thực hiện tái cấu trúc kiến trúc cơ bản quy mô lớn như chúng (ví dụ: hệ thống Hook của NanoBot, bảo trì tự động "Curator" của Hermes). Lộ trình phát triển của nó nghiêng về **hướng dẫn của cộng đồng, tích lũy chức năng và phản ứng nhanh**, điều này dẫn đến sự bùng phát tập trung các vấn đề tương thích và hồi quy.
    *   So với việc tái tạo kiến trúc "Reborn" của **IronClaw**, OpenClaw giống như việc cải tiến liên tục trên kiến trúc hiện có khổng lồ, với nhiều nợ kỹ thuật hơn.

*   **So sánh quy mô cộng đồng**:
    *   **Về lưu lượng truy cập**: Lưu lượng hàng ngày của OpenClaw (hơn 1000 bản cập nhật) gấp 10 lần so với **Hermes Agent** / **ZeroClaw** (100 bản cập nhật) đứng thứ hai, có lợi thế tuyệt đối.
    *   **Về chất lượng**: Các cuộc thảo luận cộng đồng của Hermes Agent và Moltis tập trung hơn vào **kiến trúc và thiết kế cốt lõi**, trong khi cộng đồng OpenClaw đầy rẫy các **phản hồi lỗi tức thời và yêu cầu chức năng** mà người dùng gặp phải. Điều này cho thấy cơ sở người dùng của OpenClaw rộng lớn hơn, nhưng cũng "dân dã" hơn, với các vấn đề phân mảnh hơn.

**Tóm tắt vị thế**: OpenClaw là "**quái vật khổng lồ**" có lượng người dùng lớn nhất, chức năng đa dạng nhất và phản hồi dày đặc nhất trong hệ sinh thái. Sức khỏe của nó ảnh hưởng trực tiếp đến giới hạn dưới của toàn bộ hệ sinh thái, khả năng lặp lại nhanh chóng và sửa lỗi là giá trị cốt lõi của nó, nhưng rủi ro về độ ổn định cũng là điểm yếu lớn nhất của nó. Nó giống như một "nền tảng tích hợp ứng dụng sớm" hơn là một "nhà khám phá kiến trúc tiên phong".

### 4. Các hướng công nghệ được quan tâm chung

| Hướng công nghệ | Dự án liên quan | Yêu cầu cụ thể |
| :--- | :--- | :--- |
| **Suy thoái độ ổn định và hiệu suất** | **OpenClaw, ZeroClaw, NanoClaw, NullClaw** | CPU quá tải, treo Gateway, vòng lặp bế tắc gọi công cụ, lỗi khởi động, nhiều vấn đề hồi quy tập trung ở lớp Gateway và điều phối cốt lõi. |
| **Quản lý đa Agent/đa tài khoản** | **OpenClaw, PicoClaw, Hermes Agent, ZeroClaw** | Bộ nhớ đa khe cắm, luân phiên khóa API đa tài khoản, hỗ trợ bot Đa Teams, bảng điều khiển tác nhân phụ. |
| **Tích hợp sâu kênh (Channel)** | **NanoBot, PicoClaw, CoPaw, ZeroClaw, Moltis** | Độ ổn định của Lập Nhất/WhatsApp/Doanh Nghiệp WeChat, truyền tệp, xuất luồng, cấu hình độc lập. |
| **Nhận thức Agent và hệ sinh thái** | **NanoBot, ZeroClaw, IronClaw** | Phải cho phép Agent biết nó có thể sử dụng tất cả các công cụ như cron, fetch, memory; Chuẩn hóa thị trường công cụ/kỹ năng (ví dụ: RFC về Kỹ năng của NullClaw). |
| **Bảo mật và quản trị cấp doanh nghiệp** | **OpenClaw, PicoClaw, IronClaw** | Khử dữ liệu nhạy cảm (Security Guardrail), sửa lỗi bỏ qua phê duyệt công cụ, hỗ trợ OAuth, phân loại rủi ro lệnh ba cấp. |
| **Tinh chỉnh trải nghiệm người dùng (UX)** | **Hermes Agent, Moltis, CoPaw, ZeroClaw** | Treo giao diện người dùng, lỗi bố cục, mất phiên, lỗi hướng dẫn onboarding, yêu cầu chức năng "yêu thích thảo luận". |

### 5. Phân tích định vị khác biệt

| Dự án | Tập trung chức năng | Người dùng mục tiêu | Điểm chính của kiến trúc kỹ thuật |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | Trợ lý AI toàn diện, cộng đồng | Người dùng rộng rãi nhất (nhà phát triển, người dùng thông thường) | Kiến trúc hiện có khổng lồ, hướng dẫn cộng đồng, tích lũy chức năng nhanh chóng |
| **Hermes Agent** | Tiến hóa tự chủ, thân thiện với nhà phát triển | Nhà phát triển cao cấp, người xây dựng Agent | Phát hành khả năng bảo trì tự chủ "Curator", trải nghiệm TUI cực tốt |
| **IronClaw** | Nền tảng cơ bản AI Agent thế hệ tiếp theo | Nhà phát triển doanh nghiệp, kiến trúc sư | Đang tái cấu trúc kiến trúc "Reborn", bộ máy thời gian chạy và chính sách hợp nhất |
| **NanoBot** | Agent tin nhắn siêu nhẹ, đa nền tảng | Nhà phát triển cá nhân, người đam mê công nghệ | Nhấn mạnh "nhẹ", mô-đun hóa, có tiềm năng trở thành khung Agent phổ quát |
| **PicoClaw / NanoClaw** | Tối ưu hóa cho phần cứng hoặc kịch bản cụ thể | Người dùng nhúng, tính toán biên | Nhấn mạnh nhẹ (PicoClaw), hóa container và Host Sweep (NanoClaw) |
| **ZeroClaw** | Onboarding và trải nghiệm cấp doanh nghiệp | Nhóm người dùng theo đuổi trải nghiệm khởi đầu hiệu quả | Tối ưu hóa quy trình onboarding đến mức tối đa, nhưng trạng thái hiện tại không ổn định |
| **Moltis** | Sẵn sàng cho môi trường sản xuất, ưu tiên UI | Nhà phát triển theo đuổi trải nghiệm tích hợp ổn định | Tốc độ tích hợp phiên bản nhanh, sửa lỗi UI/UX nhanh chóng, tính năng cấp doanh nghiệp (sandbox) nổi bật |
| **LobsterAI / CoPaw** | Tích hợp hệ sinh thái Trung Quốc | Người dùng thị trường Trung Quốc | Tích hợp và sửa lỗi sâu cho các kênh Trung Quốc như WeChat, Lập Nhất, Doanh Nghiệp WeChat |

### 6. Mức độ phổ biến và sự trưởng thành của cộng đồng

*   **Tốp 1 (Lặp lại nhanh chóng, hoạt động cao)**:
    *   **OpenClaw**: Mức độ phổ biến cộng đồng cao nhất, nhưng đang ở giai đoạn "phát triển hoang dã", lỗi và chức năng song hành.
    *   **ZeroClaw, IronClaw**: Đều đang trong giai đoạn nước rút tái cấu trúc kiến trúc hoặc xóa lỗi quan trọng, phản hồi nhanh nhưng đầy thách thức về độ ổn định.

*   **Tốp 2 (Phát triển ổn định, củng cố chất lượng)**:
    *   **Hermes Agent**: Cộng đồng lành mạnh, lặp lại chất lượng cao, đã phát hành phiên bản cột mốc, là một hình mẫu của dự án.
    *   **Moltis**: Đã bước vào "giai đoạn thu hoạch" tinh chỉnh độ ổn định và trải nghiệm, tốc độ phát hành ổn định, tốc độ sửa lỗi nhanh.
    *   **NanoBot**: Chuyển từ lặp lại chức năng nhanh chóng sang tối ưu hóa kiến trúc (hệ thống Hook), độ sâu thảo luận cộng đồng cao, định vị rõ ràng.

*   **Tốp 3 (Mở rộng chức năng, tập trung vào các điểm đau cụ thể)**:
    *   **PicoClaw, CoPaw, LobsterAI**: Hoạt động tốt, tập trung vào sửa lỗi và tăng cường chức năng cho các kênh và kịch bản cụ thể của thị trường Trung Quốc. Có nhiều PR tồn đọng cần người bảo trì quan tâm.

*   **Dự án ngủ đông**:
    *   **TinyClaw, ZeptoClaw**: Không hoạt động trong 24 giờ, mức độ hoạt động bằng không.

### 7. Tín hiệu xu hướng đáng chú ý

1.  **"Kiến trúc là chiến lược"**: Khi dự án trưởng thành đến một mức độ nhất định, việc tái cấu trúc kiến trúc cơ bản (như "Reborn" của IronClaw và "Curator" của Hermes) trở thành cốt lõi quyết định khả năng cạnh tranh trong tương lai. Lộ trình tích lũy chức năng thuần túy đang chạm trần độ ổn định.
2.  **Vòng lặp nhận thức của Agent là nút thắt cổ chai tiếp theo**: Nhiều cộng đồng (NanoBot #660, ZeroClaw #5862) đồng loạt phản ánh việc Agent thiếu "siêu nhận thức" về khả năng của bản thân là nguyên nhân cốt lõi dẫn đến vòng lặp bế tắc và lỗi tương tác. **Điểm cạnh tranh của Agent trong tương lai sẽ chuyển từ "nó có thể làm gì" sang "nó biết nó có thể làm gì và làm thế nào để sử dụng tốt nó".**
3.  **"Dặm cuối cùng" của trải nghiệm quyết định sự gắn bó**: Onboarding (hướng dẫn nhập môn) và độ ổn định của UI đa nền tảng trở thành khu vực dễ xảy ra mất mát người dùng. Các cụm lỗi S1 của ZeroClaw và lời phàn nàn của người dùng OpenClaw "Các bạn có thể phát hành một phiên bản không gây ra bất kỳ sự cố nào" đều chỉ ra điều này.
4.  **Nhu cầu bản địa hóa hệ sinh thái mạnh mẽ**: Nhiều dự án (PicoClaw, CoPaw, LobsterAI) tập trung sâu vào tích hợp các kênh Trung Quốc như WeChat, Lập Nhất, Doanh Nghiệp WeChat, SiliconFlow. Điều này cho thấy thị trường Trung Quốc có nhu cầu lớn và chưa được đáp ứng đối với Agent AI dịch vụ địa phương hóa.
5.  **Bảo mật và quản trị không còn là "trang sức"**: Việc OpenClaw và PicoClaw xử lý dữ liệu nhạy cảm ( \#72733), hỗ trợ OAuth của MCP và phân loại rủi ro ba cấp của IronClaw cho các lệnh, dự báo rằng **kiểm toán bảo mật và khả năng kiểm soát cấp doanh nghiệp** đang trở thành các đặc điểm bắt buộc để AGI Agent hướng tới triển khai quy mô lớn.

**Lời khuyên cho nhà phát triển**:
*   **Chọn dự án**: Mong muốn sự ổn định và trải nghiệm tích hợp, hãy chú ý đến **Moltis**; mong muốn kiến trúc tiên tiến và khả năng tự chủ, hãy chú ý đến **Hermes Agent** và **IronClaw**; nếu cần hệ sinh thái và thị trường lớn, **OpenClaw** vẫn là lựa chọn số một nhưng cần chấp nhận rủi ro về độ ổn định.
*   **Chú ý các xu hướng tiềm ẩn**: Ngay lập tức bắt đầu suy nghĩ về cách giải quyết vấn đề **siêu nhận thức của Agent** (ví dụ: đăng ký công cụ, kỹ thuật nhắc nhở hệ thống), đây sẽ là điểm tối ưu hóa quan trọng trong 2-3 phiên bản tới.
*   **Tránh vấp phải sai lầm**: Trước khi nâng cấp phiên bản, hãy chắc chắn xem lại `CHANGELOG` và kiểm tra **các kênh cốt lõi (đặc biệt là các kênh Trung Quốc), nhiệm vụ định giờ và vòng lặp gọi công cụ**, vì đây là các khu vực dễ xảy ra lỗi.

---

## Báo cáo chi tiết dự án cạnh tranh

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Được rồi, với tư cách là nhà phân tích dự án mã nguồn mở trong lĩnh vực AI Agent và Trợ lý AI Cá nhân, dưới đây là nhật ký hàng ngày về động thái dự án NanoBot được tạo cho bạn dựa trên dữ liệu GitHub của NanoBot.

---

### Nhật ký hàng ngày về động thái dự án NanoBot | 2026-05-01

---

#### 1. Tổng quan hôm nay

Hôm nay, dự án NanoBot thể hiện mức độ hoạt động cao của cộng đồng và nhịp độ lặp lại phát triển dày đặc. Trong 24 giờ qua, dự án đã xử lý tổng cộng 15 Issue và 27 PR, cho thấy sự tham gia mạnh mẽ của cộng đồng và phản ứng tích cực từ đội ngũ bảo trì. Đáng chú ý, mặc dù không có phiên bản mới nào được phát hành, nhiều PR quan trọng nhằm nâng cao khả năng mở rộng kiến trúc của dự án (ví dụ: trung tâm Hook), sửa lỗi tương thích nền tảng (Matrix/Lập Nhất) và tăng cường khả năng phục hồi tương tác cốt lõi LLM (DeepSeek/OpenAI stream) đã được đề xuất hoặc hợp nhất, cho thấy dự án đang chuyển từ lặp lại chức năng nhanh chóng sang giai đoạn tối ưu hóa kiến trúc và tinh chỉnh độ ổn định. Phản hồi của cộng đồng chủ yếu tập trung vào mâu thuẫn giữa tuyên bố "siêu nhẹ" và các phụ thuộc thực tế, trải nghiệm trò chuyện nhóm và độ ổn định của vòng lặp công cụ.

---

#### 2. Phát hành phiên bản

**Không có**. Trong 24 giờ qua, NanoBot chưa phát hành phiên bản mới nào.

---

#### 3. Tiến độ dự án

Trong 24 giờ qua, 9 PR đã được hợp nhất hoặc đóng, thúc đẩy nhiều bản sửa lỗi và chức năng quan trọng. Dự án đã đạt được những cải thiện đáng kể về độ ổn định và khả năng áp dụng đa nền tảng.

- **Khả năng tương thích đa nền tảng**: Hai PR liên quan đến `.gitattributes` (PR #3556) và ví dụ tài liệu (PR #3550) đã được hợp nhất, giải quyết triệt để các vấn đề CRLF trên nền tảng Windows và các đường dẫn ví dụ tài liệu đa nền tảng, nâng cao đáng kể trải nghiệm phát triển và sử dụng của người dùng không phải Linux.
- **Sửa lỗi tương tác cốt lõi**: Đối với lỗi kênh Matrix gửi tin nhắn trống khi nhận được khối `reasoning_content` trống từ DeepSeek, các PR #3562 và #3565 đã được hợp nhất, sửa lỗi "tin nhắn rác" đã làm phiền người dùng và cải thiện trải nghiệm Chat.
- **Kết thúc các vấn đề ban đầu**: Một số Issue tồn đọng, chẳng hạn như #3533 (bắt buộc Thread trong trò chuyện nhóm Lập Nhất) và #3506 (gửi thất bại trên Matrix trên Windows do vấn đề đường dẫn), cũng đã được đóng hôm nay, cho thấy cộng đồng và người bảo trì đang tích cực dọn dẹp các khoản nợ cũ.

**Dự án đang tiến một bước lớn**: Bằng cách sửa các lỗi quan trọng này ảnh hưởng trực tiếp đến việc sử dụng hàng ngày của người dùng, độ ổn định và khả năng áp dụng đa nền tảng của NanoBot đã được cải thiện đáng kể.

---

#### 4. Điểm nóng cộng đồng

Các chủ đề thảo luận sôi nổi nhất của cộng đồng hôm nay nhắm thẳng vào định vị cốt lõi của dự án và các điểm yếu điển hình của AI Agent.

- **[Issue #660] Mâu thuẫn giữa nhãn "siêu nhẹ" và phụ thuộc cồng kềnh**: Issue này nhận được 5 👍 và 11 bình luận, được thảo luận nhiều nhất. Người dùng `besoeasy` chỉ ra rằng dự án tuyên bố "siêu nhẹ", nhưng Dockerfile lại phụ thuộc vào cả Python và Node.js, điều này trái ngược với quảng cáo. Điều này phản ánh sự nhạy cảm của cộng đồng đối với định vị của dự án và sự quan tâm đến kích thước gói xây dựng. Có vẻ như là một lời phàn nàn về kỹ thuật, nhưng thực chất là một yêu cầu về tính minh bạch của dự án.
    - **Liên kết**: [HKUDS/nanobot Issue #660](https://github.com/HKUDS/nanobot/issues/660)

- **[Issue #2298] Phá vỡ vòng lặp gọi công cụ vô hạn**: Issue này tập trung vào vấn đề AI Agent rơi vào vòng lặp vô hạn gọi cùng một công cụ khi sử dụng mô hình cục bộ/nhỏ. Đây là một điểm yếu ổn định điển hình của Agent, người dùng `alekwo` đề xuất thêm logic để giám sát và chấm dứt các vòng lặp như vậy. Vấn đề này phản ánh yêu cầu cao của cộng đồng đối với độ tin cậy của AI Agent trong môi trường sản xuất.
    - **Liên kết**: [HKUDS/nanobot Issue #2298](https://github.com/HKUDS/nanobot/issues/2298)

- **[Issue #3559] WebSocket không thể thay thế Webhook để gửi tin nhắn chủ động**: Người dùng `ivelin` đã giải thích chi tiết rằng kênh WebSocket không đáp ứng được các tình huống như Cron, heartbeat, Agent gửi tin nhắn chủ động, và yêu cầu mạnh mẽ hỗ trợ Webhook. Điều này cho thấy cộng đồng có kỳ vọng cao hơn về khả năng của dự án trong các tình huống phức tạp cấp doanh nghiệp hoặc tự động hóa.
    - **Liên kết**: [HKUDS/nanobot Issue #3559](https://github.com/HKUDS/nanobot/issues/3559)

---

#### 5. Lỗi và Độ ổn định

Hôm nay đã báo cáo một số lỗi quan trọng, được liệt kê theo mức độ nghiêm trọng:

1.  **Nghiêm trọng - API luồng OpenAI không tương thích bị đóng sớm (Issue #3551)**
    - **Hiện tượng**: Khi sử dụng `stream=true` và yêu cầu gọi công cụ, luồng SSE sẽ kết thúc sớm, khiến máy khách không thể nhận được phản hồi đầy đủ.
    - **Trạng thái**: Đã có PR sửa lỗi **#3555** được gửi.
    - **Liên kết**: [HKUDS/nanobot Issue #3551](https://github.com/HKUDS/nanobot/issues/3551)

2.  **Nghiêm trọng - Lỗi nội suy DeepSeek-V4 có thể tái hiện trong phiên bản v0.1.5.post3 (Issue #3554)**
    - **Hiện tượng**: Trên nền tảng Windows, khi sử dụng công cụ exec thông qua WebUI, lỗi `reasoning_content must be passed back` lại xuất hiện.
    - **Trạng thái**: Đã có PR sửa lỗi **#3560** được gửi.
    - **Liên kết**: [HKUDS/nanobot Issue #3554](https://github.com/HKUDS/nanobot/issues/3554)

3.  **Trung bình - Đọc tin nhắn cũ khi Matrix Channel khởi động (Issue #3553)**
    - **Hiện tượng**: Mỗi lần khởi động lại hoặc `/restart`, Matrix Channel sẽ xử lý lại các tin nhắn cũ trước đó, gây ra trùng lặp tin nhắn và hành vi Agent bất thường.
    - **Trạng thái**: **Đang mở**, chưa có PR sửa lỗi.
    - **Liên kết**: [HKUDS/nanobot Issue #3553](https://github.com/HKUDS/nanobot/issues/3553)

4.  **Trung bình - Bắt buộc Thread trong trò chuyện nhóm Lập Nhất (Issue #3533 & #3546)**
    - **Hiện tượng**: `reply_in_thread` bị ép buộc là True trong trò chuyện nhóm, bỏ qua cấu hình của người dùng, gây trải nghiệm người dùng kém và gián tiếp gây ra ảo giác "mất trí nhớ" (Issue #3546).
    - **Trạng thái**: Issue #3533 **đã đóng**, nhưng vấn đề cốt lõi vẫn được thảo luận trong #3546.
    - **Liên kết**: [HKUDS/nanobot Issue #3533](https://github.com/HKUDS/nanobot/issues/3533)

---

#### 6. Yêu cầu chức năng và tín hiệu lộ trình

Các yêu cầu chức năng mới do người dùng đề xuất cho thấy xu hướng dự án phát triển thành một khung Agent phổ quát hơn.

- **【Tín hiệu ưu tiên cao】Hệ thống Hook kiến trúc (PR #3564)**: PR #3564 đề xuất một hệ thống trung tâm Hook dựa trên sự kiện kiểu hóa, thay thế mô hình ghi đè phương thức AgentHook hiện tại. Điều này cung cấp khả năng phân phối plugin mạnh mẽ cho các nhà phát triển và là một bước quan trọng để dự án phát triển từ "công cụ sẵn sàng sử dụng" thành "khung Agent có thể mở rộng". Nếu được hợp nhất, nó sẽ có tác động sâu sắc đến kiến trúc dự án.
    - **Liên kết**: [HKUDS/nanobot PR #3564](https://github.com/HKUDS/nanobot/pull/3564)

- **【Có thể bao gồm】Kênh hộp thư đa Agent (PR #3461)**: PR này đề xuất một kênh hộp thư hoàn toàn dựa trên plugin, dựa trên hệ thống tệp, để thực hiện giao tiếp giữa các Agent. Đây là một chức năng rất thực tế, lấp đầy khoảng trống trong sự hợp tác giữa các Agent.
    - **Liên kết**: [HKUDS/nanobot PR #3461](https://github.com/HKUDS/nanobot/pull/3461)

- **【Có thể bao gồm】Tùy chọn cài đặt trước mô hình (PR #3358)**: PR này mong muốn giới thiệu `ModelPresetConfig`, cho phép người dùng nhanh chóng chuyển đổi các tổ hợp cấu hình hoàn chỉnh bao gồm mô hình, tham số, nhà cung cấp, v.v. Điều này sẽ giảm đáng kể chi phí chuyển đổi giữa các mô hình khác nhau cho người dùng.
    - **Liên kết**: [HKUDS/nanobot PR #3358](https://github.com/HKUDS/nanobot/pull/3358)

- **【Tiếng gọi từ cộng đồng】Hỗ trợ Webhook để gửi tin nhắn chủ động (Issue #3559)**: Người dùng chỉ rõ rằng WebSocket không đáp ứng được nhu cầu gửi tin nhắn chủ động trong các tình huống cụ thể và yêu cầu mạnh mẽ hỗ trợ kênh Webhook. Đây là một điểm đau thực sự từ người dùng cấp doanh nghiệp.
    - **Liên kết**: [HKUDS/nanobot Issue #3559](https://github.com/HKUDS/nanobot/issues/3559)

---

#### 7. Tóm tắt phản hồi người dùng

Từ các bình luận Issue và PR hôm nay, có thể rút ra phản hồi thực tế của người dùng sau:

- **"Khủng hoảng niềm tin" đối với tuyên bố "nhẹ"**: Người dùng rất nhạy cảm với nhãn "ultra-lightweight" và cảm thấy bị lừa dối khi phát hiện ra cần cài đặt Node.js (Issue #660). **Ngầm ý của người dùng**: "Vui lòng nêu rõ ngăn xếp công nghệ và mức tiêu thụ tài nguyên của dự án, đừng làm mờ các đặc tính thực tế của nó vì mục đích quảng cáo."
- **"Mất trí nhớ" và "mất kiểm soát" của AI Agent**: Người dùng phản hồi rằng sau khi tắt chức năng Thread trong trò chuyện nhóm, Agent không thể hiểu ngữ cảnh hội thoại, giống như "mất trí nhớ" (Issue #3546). Đồng thời, Agent rơi vào vòng lặp công cụ vô hạn cũng là một điểm đau thường gặp (Issue #2298). **Ngầm ý của người dùng**: "AI Agent cần cơ chế quản lý ngữ cảnh và tự sửa lỗi thông minh hơn để hoạt động đáng tin cậy trong sử dụng thực tế."
- **Thiếu sót trong các tình huống cấp doanh nghiệp/tự động hóa**: Người dùng chỉ rõ rằng WebSocket không đáp ứng được các tình huống gửi tin nhắn chủ động theo thời gian hoặc theo sự kiện như Cron, heartbeat (Issue #3559). **Ngầm ý của người dùng**: "Tôi cần một Agent có thể chủ động khởi tạo tương tác, không chỉ là phản hồi thụ động."
- **Thái độ tích cực đối với đóng góp mã nguồn mở**: Người dùng (`aliucrazy`) bày tỏ sẵn lòng đóng góp mã cho chức năng `codingplan` của Kimi (Issue #1007). Điều này cho thấy các nhà phát triển có năng lực trong cộng đồng sẵn lòng đóng góp, nhưng cũng ngụ ý rằng dự án có thể cần hướng dẫn rõ ràng hơn về việc chấp nhận chức năng.

---

#### 8. Tồn đọng cần xử lý

- **Issue #660 [OPEN] - Vấn đề tuyên bố nhẹ của dự án**: Kể từ khi tạo vào ngày 14 tháng 2 năm 2026, đã tồn tại hơn 2 tháng, tích lũy 11 bình luận và 5 lượt thích. Mặc dù có nhiều tranh cãi, nhưng chưa nhận được phản hồi chính thức. **Nhắc nhở người bảo trì**: Vấn đề này liên quan đến lòng tin, nên đưa ra phản hồi rõ ràng, hoặc điều chỉnh mô tả dự án, hoặc cung cấp lộ trình loại bỏ phụ thuộc Node.js.
    - **Liên kết**: [HKUDS/nanobot Issue #660](https://github.com/HKUDS/nanobot/issues/660)

- **PR #1385 [OPEN] - Bảo lưu `reasoning_details` của OpenRouter**: Kể từ khi được đề xuất vào ngày 1 tháng 3 năm 2026, đã tồn tại 2 tháng. PR này sửa lỗi quan trọng `reasoning_details` bị mất khi sử dụng OpenRouter trong các tình huống gọi công cụ đa vòng, ảnh hưởng nghiêm trọng đến việc mô hình bị nhầm lẫn. **Nhắc nhở người bảo trì**: PR này rất quan trọng đối với người dùng sử dụng OpenRouter, nên ưu tiên xem xét và hợp nhất.
    - **Liên kết**: [HKUDS/nanobot PR #1385](https://github.com/HKUDS/nanobot/pull/1385)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Được rồi, với tư cách là nhà phân tích lĩnh vực AI Agent và Trợ lý AI Cá nhân, dưới đây là nhật ký hàng ngày về động thái dự án Hermes Agent (github.com/nousresearch/hermes-agent) được tạo cho bạn vào ngày 2026-05-01.

---

# Nhật ký hàng ngày về động thái dự án Hermes Agent | 2026-05-01

## 1. Tổng quan hôm nay

Dự án Hermes Agent hôm nay duy trì mức độ hoạt động cực cao, cả kho mã và cộng đồng đều đang hoạt động với tốc độ cao. Việc phát hành **v0.12.0 (Bản phát hành The Curator)** là điểm nổi bật lớn nhất hôm nay, đánh dấu một cột mốc quan trọng về khả năng tự bảo trì của Agent. Phản hồi của cộng đồng rất dày đặc, tổng cộng có 50 Issue và 50 PR, trong đó không thiếu các yêu cầu chức năng chất lượng cao và báo cáo lỗi quan trọng. Người bảo trì dự án phản hồi nhanh chóng, nhiều lỗi có mức độ ưu tiên cao đã có PR sửa lỗi tương ứng hoặc đã đóng. Sức khỏe tổng thể của dự án là **Xuất sắc**, đang trong giai đoạn tăng trưởng nhanh chóng về chức năng và độ ổn định.

## 2. Phát hành phiên bản: v0.12.0 (Bản phát hành The Curator)

**Số hiệu phiên bản**: Hermes Agent v0.12.0 (v2026.4.30)
**Ghi chú phát hành**: “Bản phát hành The Curator — Hermes Agent giờ đây tự bảo trì. Một hoạt động nền tự chủ...” (Mô tả ban đầu bị gián đoạn, nhưng ý nghĩa cốt lõi là rõ ràng)

| Chỉ số | Dữ liệu |
| :--- | :--- |
| Cột mốc | Đã hơn 6 tuần kể từ v0.11.0 |
| Số lượng commit | 1.096 commits |
| Số lượng PR hợp nhất | 550 |
| Số lượng tệp thay đổi | 1.270 tệp |
| Số dòng code thêm/xóa | +217.776 / - (dữ liệu không được cung cấp đầy đủ) |
| Người đóng góp cộng đồng | 213 (bao gồm đồng tác giả) |

**Suy đoán nội dung cập nhật**: Chủ đề cốt lõi của phiên bản này là "Curator", nhấn mạnh khả năng tự bảo trì của Agent. Kết hợp với các Issue và PR gần đây, có thể suy đoán rằng v0.12.0 có thể bao gồm: Cải thiện độ ổn định đa nền tảng của `gateway`, tăng cường cơ chế nhiệm vụ định giờ `cron`, và triển khai ban đầu khả năng tự quản lý của `memory` và `skills`.

**Thay đổi gây lỗi / Lưu ý di chuyển**: Ghi chú phát hành chính thức không liệt kê rõ ràng. Nhắc nhở người dùng chú ý:
1.  Cấu hình liên quan đến `gateway` (ví dụ: nền tảng Telegram, Slack) có thể có những thay đổi về hành vi do xác thực quyền mới (PR #18125) hoặc logic quản lý luồng (PR #5488).
2.  Hệ thống `skills` có thể đã thêm khóa tệp (PR #18150), cần chú ý xung đột trong các kịch bản đa quy trình.
3.  Khuyến nghị người dùng sao lưu tệp cấu hình (`~/.hermes/`) và tham khảo `CHANGELOG.md` đầy đủ trước khi nâng cấp.

## 3. Tiến độ dự án

Hôm nay, dự án đã đạt được những tiến bộ đột phá trong nhiều lĩnh vực quan trọng, đặc biệt tập trung vào **bảo mật, độ ổn định và khả năng thích ứng với môi trường sản xuất**.

*   **Tăng cường bảo mật**: [PR #18125](https://github.com/NousResearch/hermes-agent/pull/18125) (P0) đã sửa một lỗ hổng bảo mật nghiêm trọng cho phép lệnh slash trên nền tảng Discord bỏ qua xác thực danh sách trắng, đảm bảo đường cơ sở bảo mật cơ bản cho tích hợp nền tảng.
*   **Sửa lỗi ổn định cốt lõi**:
    *   [PR #18139](https://github.com/NousResearch/hermes-agent/pull/18139) (P1) đã sửa lỗi các `reasoning models` có thể trả về "phản hồi trống lặng lẽ" gây ra không có đầu ra, đây là một sự cải thiện đáng kể về khả năng phục hồi.
    *   [PR #18149](https://github.com/NousResearch/hermes-agent/pull/18149) (P2) đã sửa lỗi chức năng ACP bỏ qua cấu hình `model.custom_provider`, đảm bảo độ tin cậy của định tuyến mô hình tùy chỉnh của người dùng.
    *   [PR #18146](https://github.com/NousResearch/hermes-agent/pull/18146) (P2) đã sửa lỗi Gateway Email gặp sự cố khi phân tích cú pháp phản hồi IMAP do định dạng không chuẩn.
*   **Mở rộng hệ sinh thái Agent**:
    *   [PR #17211](https://github.com/NousResearch/hermes-agent/pull/17211) (đã hợp nhất) đã thêm nhà cung cấp TTS `local_command`, cho phép người dùng sử dụng các engine cục bộ như Piper, Vox, v.v., giảm ngưỡng cho chức năng đầu ra giọng nói.
    *   [PR #18151](https://github.com/NousResearch/hermes-agent/pull/18151) (mới) đã đề xuất một kế hoạch nâng cấp hệ thống thành tích, bao gồm lọc, tương tác CLI và xuất, tăng cường phản hồi khuyến khích gamification của dự án.

## 4. Điểm nóng cộng đồng

Mặc dù API mới của v0.12.0 là tâm điểm, nhưng các đề xuất tăng cường UX của **iRonin** vẫn là chủ đề được thảo luận sôi nổi nhất trong cộng đồng.

*   #5504 [Open] [*feat: dual queue*](https://github.com/NousResearch/hermes-agent/issues/5504): Đề xuất chế độ tương tác "hàng đợi kép", phân biệt lệnh xếp hàng `Alt+Enter` và lệnh ngắt `Enter`, phản ánh nhu cầu mạnh mẽ của người dùng về quyền kiểm soát hội thoại chi tiết và mượt mà hơn.
*   #5513 [Open] [*feat: subagent control panel*](https://github.com/NousResearch/hermes-agent/issues/5513): Nhu cầu giám sát và quản lý thời gian thực các tác nhân phụ do `delegate_task` tạo ra, cho thấy mong muốn về khả năng hiển thị và kiểm soát của người dùng khi xử lý các tác vụ nhiều bước phức tạp.

**Phân tích yêu cầu**: Các đề xuất này không phải là sửa lỗi, mà là những suy ngẫm sâu sắc về mô hình tương tác TUI. Điều này cho thấy người dùng cốt lõi của cộng đồng đã chuyển từ giai đoạn "có thể sử dụng" sang giai đoạn theo đuổi trải nghiệm công cụ năng suất "dễ sử dụng".

## 5. Lỗi và Độ ổn định

Các lỗi được báo cáo hôm nay, được liệt kê theo mức độ nghiêm trọng:

*   **P0 (Khẩn cấp)**:
    *   **Bỏ qua bảo mật Gateway**: #18125 (Đã có PR) - [Lệnh Slash Gateway Discord không được ủy quyền], ảnh hưởng đến bảo mật của tất cả các tích hợp Discord.
*   **P1 (Nghiêm trọng)**:
    *   **Lỗi Agent lặng lẽ**: #18139 (Đã có PR) - [Mô hình suy luận im lặng không phản hồi], dẫn đến trạng thái bế tắc không có nhật ký, không có đầu ra.
    *   **Bỏ qua Job Cron**: #5518 (Chưa có PR sửa lỗi) - [Nhiệm vụ định giờ lặng lẽ bị bỏ qua], có thể dẫn đến việc các nhiệm vụ quan trọng không được kích hoạt đúng giờ.
*   **P2 (Trung bình)**:
    *   **Email Fetch Crash**: #18106 (Đã có PR) - [Lỗi phân tích cú pháp IMAP], ảnh hưởng đến độ ổn định của dịch vụ email.
    *   **Slack Thread Leak**: #18101 (Chưa có PR sửa lỗi) - [Thông báo nền gửi sai luồng], ảnh hưởng đến trải nghiệm hợp tác Slack.
    *   **Session Search Slowdown**: #16671 (Chưa có PR sửa lỗi) - [Tìm kiếm phiên chậm], ảnh hưởng đáng kể đến người dùng có phiên dài.
    *   **Sudo Detection False Negative**: #18110 (Chưa có PR sửa lỗi) - [`hermes status` báo cáo sai trạng thái `sudo`].
    *   **ACP Config Ignored**: #18149 (Đã có PR) - [ACP bỏ qua cấu hình nhà cung cấp mô hình tùy chỉnh].
*   **P3 (Ưu tiên thấp)**:
    *   **Plugin Install Failure**: #5695 - Lệnh `/plugins install` không có phản hồi.
    *   Vấn đề xử lý xung đột Git khi `hermes update` (PR #18145).

## 6. Yêu cầu chức năng và tín hiệu lộ trình

*   **Tín hiệu mạnh (Có thể được đưa vào phiên bản tiếp theo)**:
    *   **Hệ thống Hook Runtime**: [#18148](https://github.com/NousResearch/hermes-agent/issues/18148) đề xuất Hook Runtime cấp Python (ví dụ: `transform_user_input`, `intercept_tool_call`), cung cấp cơ sở cho các middleware phức tạp, kiểm toán và chính sách bảo mật tùy chỉnh. Kết hợp với nhu cầu kiểm soát của cộng đồng, khả năng chức năng này được chấp nhận là rất cao.
    *   **Nhà cung cấp bộ nhớ MongoDB**: [#5495](https://github.com/NousResearch/hermes-agent/issues/5495) nhận được 1 ❤️, là yêu cầu chức năng tồn tại lâu dài, tiếng gọi thống nhất backend dữ liệu vẫn tiếp tục.
*   **Tín hiệu trung bình**:
    *   **Engine Tiến hóa Tự chủ (Vòng lặp GASP)**: [#18092](https://github.com/NousResearch/hermes-agent/issues/18092) đề xuất một "Engine Tiến hóa tự chủ cấp sản xuất" đầy tham vọng, nhưng quá phức tạp, xác suất đưa vào lộ trình trong thời gian ngắn thấp.
    *   **Tự động tạo tiêu đề phiên**: [#5715](https://github.com/NousResearch/hermes-agent/issues/5715) Lệnh `/title` không có tham số tự động tạo tiêu đề, một chức năng nhỏ cải thiện tính dễ sử dụng, có thể sớm được người đóng góp cộng đồng thực hiện.

## 7. Tóm tắt phản hồi người dùng

*   **Tập trung vào điểm đau**:
    *   **Hiệu suất**: Người dùng `kakarotto-baroko` trong #16671 phản hồi rằng hiệu suất `session_search` giảm mạnh trong các phiên dài, mặc dù tự nhận là "không phải lập trình viên", nhưng đã mô tả rõ ràng hiện tượng chậm "đọc và tóm tắt toàn bộ phiên", ảnh hưởng đã phát triển từ khả năng sử dụng đến "chặn".
    *   **Độ phức tạp cấu hình**: Người dùng `krebbl` trong #18140 cho biết không thể sử dụng `Opencode Zen` dù đã cấu hình qua Dashboard UI, trải nghiệm sử dụng "khó hiểu". Điều này cho thấy có sự tách biệt giữa lớp cấu hình UI và logic cơ bản.
    *   **Truyền tệp**: Người dùng `Guerdal` trong #5537 phản hồi rằng chỉ có thể giao tiếp bằng văn bản qua Gateway Email / Matrix, không thể gửi tệp, hạn chế tính thực tế của Gateway như một kênh làm việc từ xa.
*   **Điểm hài lòng**: Không có lời khen trực tiếp trong văn bản, nhưng số lượng lớn các đề xuất chức năng chất lượng cao (ví dụ: toàn bộ các cải tiến TUI của iRonin) cho thấy những người đóng góp tích cực chấp nhận tính linh hoạt và tiềm năng của dự án, họ đang đóng góp xây dựng dự án.

## 8. Tồn đọng cần xử lý

Các Issue/PR sau đây chưa nhận được phản hồi chính thức hoặc hợp nhất trong thời gian dài, có nguy cơ bị "lãng quên", nhắc nhở người bảo trì chú ý:

*   **#6122** [Open] [`Zsh completion script`](https://github.com/NousResearch/hermes-agent/issues/6122): 4 bình luận, tạo từ ngày 8 tháng 4. Một lỗi rất rõ ràng, phương pháp được đề xuất chính thức gây ra lỗi khi khởi động Zsh. Đã gần một tháng không có tiến triển thực tế.
*   **#5687** [Open] [`Anthropic OAuth test`](https://github.com/NousResearch/hermes-agent/issues/5687): 2 bình luận, tạo từ ngày 7 tháng 4. Xung đột `getpass` trong kiểm thử tự động, chặn quy trình CI/CD.
*   **#5544** [Open] [`Memory provider tools auto-injected`](https://github.com/NousResearch/hermes-agent/issues/5544): 3 bình luận, tạo từ ngày 6 tháng 4. Mô tả rõ ràng rằng ngay cả khi `platform_toolsets` trống, công cụ bộ nhớ vẫn được tải, dẫn đến tổn thất hiệu suất mô hình cục bộ lên tới 10 lần. Đây là một lỗi tiềm ẩn của hệ thống cấu hình.
*   **#5518** [Open] [`Recurring cron jobs silently skip`](https://github.com/NousResearch/hermes-agent/issues/5518): 0 bình luận, tạo từ ngày 6 tháng 4. Mức độ nghiêm trọng P1, nhưng chưa có phản hồi. Đây là một lỗi nghiêm trọng đối với chức năng nhiệm vụ định giờ.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Được rồi, đây là báo cáo hàng ngày về dự án PicoClaw dành cho bạn.

***

# Nhật ký hàng ngày về động thái dự án PicoClaw | 2026-05-01

## 1. Tổng quan hôm nay

Trong 24 giờ qua, dự án PicoClaw duy trì mức độ hoạt động cộng đồng cực kỳ cao, với tổng cộng **37 lượt cập nhật Issue** và **38 lượt cập nhật PR**. Phiên bản chính thức **v0.2.8** đã được phát hành, chức năng cốt lõi là tăng cường khả năng quản lý CLI của MCP (Giao thức Ngữ cảnh Mô hình). Thảo luận cộng đồng tập trung vào nhu cầu quản lý đa tài khoản và bảo mật, đồng thời cũng có nhiều báo cáo lỗi và PR sửa lỗi cho các kênh (ví dụ: Lập Nhất, WhatsApp) và chuỗi công cụ. Mặc dù có nhiều Issue "cũ" tồn đọng, tốc độ thúc đẩy dự án nhìn chung vẫn mạnh mẽ, cho thấy một quỹ đạo phát triển lành mạnh.

## 2. Phát hành phiên bản

- **v0.2.8 (Phiên bản chính thức)**
  - **Liên kết**: [Phát hành v0.2.8](https://github.com/sipeed/picoclaw/releases/tag/v0.2.8)
  - **Nội dung cập nhật chính**:
    - **Công cụ quản lý MCP**: Bổ sung các lệnh CLI cho `show`, `add`, `list`, `remove`, `test`, `edit`, v.v. của MCP, giúp người dùng quản lý và gỡ lỗi kết nối MCP thuận tiện hơn nhiều thông qua dòng lệnh.
    - **Sửa lỗi**: Sửa lỗi tương thích do MCP gọi một số công cụ không có tham số, gây ra vấn đề gửi `null`.
    - **Sửa lỗi xây dựng**: Sửa một lỗi xây dựng trong các phiên bản trước.
  - **Thay đổi gây lỗi**: Không có.
  - **Lưu ý di chuyển**: Nâng cấp trực tiếp là đủ, các lệnh quản lý MCP phiên bản mới sẽ mang lại sự tiện lợi lớn cho nhà phát triển.

## 3. Tiến độ dự án

Trong 24 giờ qua, tổng cộng **6 PR đã được hợp nhất/đóng**, đánh dấu những tiến bộ đáng kể của dự án trên nhiều phương diện:

- **Mở rộng kênh**: Thêm loại kênh `slack_webhook` (PR #2719), đây là một kênh **chỉ xuất**, cho phép người dùng đẩy phản hồi của PicoClaw đến Slack và hỗ trợ định dạng Block Kit.
- **Cập nhật phụ thuộc**: Robot phụ thuộc tự động `dependabot` đã hợp nhất nhiều bản cập nhật thư viện cơ bản (ví dụ: PR #2736 #2735), duy trì độ ổn định và bảo mật của thư viện cơ bản của dự án.
- **Sửa lỗi**: Hợp nhất nhiều PR sửa lỗi tồn đọng lâu dài cho các kênh (Lập Nhất, Slack, Telegram) và chuỗi công cụ (exec, MCP), mặc dù các PR này chưa được hợp nhất, nhưng sự quan tâm của người bảo trì và ý chí sửa lỗi của cộng đồng là rất rõ ràng.
- **Sửa lỗi ổn định**: Hợp nhất một bản sửa lỗi cho `SecureString` trong hệ thống cấu hình (config) có thể gây ra panic (PR #2270), cải thiện độ tin cậy của xử lý cấu hình.

## 4. Điểm nóng cộng đồng

- **Issue thảo luận nóng: #2408 - Chồng chất tài khoản LLM/Luân phiên API Key tự động**
  - **Liên kết**: [Issue #2408](https://github.com/sipeed/picoclaw/issues/2408)
  - **Phân tích**: Đây là một trong những yêu cầu chức năng được cộng đồng yêu cầu nhiều nhất gần đây. Người dùng mong muốn cung cấp nhiều API Key, khi gặp giới hạn tốc độ hoặc hết hạn ngạch, PicoClaw có thể tự động chuyển sang Key tiếp theo. Điều này phản ánh trực tiếp những điểm yếu của người dùng trong môi trường sản xuất thực tế hoặc các tình huống sử dụng tần suất cao, đó là sự phụ thuộc vào tài khoản duy nhất và kiểm soát chi phí. Issue này có 10 bình luận, cho thấy mức độ quan tâm của nó.

- **Issue thảo luận nóng: #2225 - Hỗ trợ thông tin xác thực đám mây Ollama**
  - **Liên kết**: [Issue #2225](https://github.com/sipeed/picoclaw/issues/2225)
  - **Phân tích**: Người dùng hy vọng PicoClaw có thể hỗ trợ cấu hình thông tin xác thực cho dịch vụ đám mây Ollama. Điều này cho thấy cộng đồng không chỉ có nhu cầu đối với các nhà cung cấp API thương mại (ví dụ: OpenAI), mà còn có ý chí mạnh mẽ tham gia các dịch vụ lưu trữ mô hình mã nguồn mở (ví dụ: Ollama Cloud), phản ánh xu hướng sử dụng mô hình đa dạng hóa.

- **PR nóng: #2313 - Hỗ trợ đa người dùng & tăng cường bảo mật**
  - **Liên kết**: [PR #2313](https://github.com/sipeed/picoclaw/pull/2313)
  - **Phân tích**: Đây là một PR có trọng lượng lớn, nhằm giới thiệu hỗ trợ đa người dùng, tăng cường bảo mật và chức năng danh sách trắng kỹ năng. Mặc dù chưa được hợp nhất, sự tồn tại của nó bản thân đã thể hiện kỳ vọng của cộng đồng trong việc đẩy PicoClaw từ công cụ cá nhân lên một nền tảng hợp tác nhóm an toàn hơn.

## 5. Lỗi và Độ ổn định

Các lỗi được báo cáo trong 24 giờ qua, được sắp xếp theo mức độ nghiêm trọng:

- **Nghiêm trọng - Chặn chức năng**:
  - **#2468 - Nhiệm vụ định giờ thực thi thất bại**: Báo cáo "scheduling command execution is restricted to internal channels", cho thấy chức năng nhiệm vụ định giờ có vấn đề về triển khai hoặc cấu hình quyền. Hiện chưa có PR sửa lỗi trực tiếp.
  - **#2483 - Nút khởi động Gateway không hợp lệ**: Người dùng báo cáo rằng nút "Khởi động Gateway" trên giao diện không có phản hồi, có thể là một lỗi nghiêm trọng về khởi động dịch vụ frontend hoặc backend.
- **Nguy cơ trung bình - Chức năng bất thường**:
  - **#2465 - Kênh không có chức năng gửi email**: Người dùng muốn thêm chức năng gửi email SMTP để thông báo kết quả nhiệm vụ định giờ. Đây vừa là yêu cầu chức năng, vừa phản ánh sự thiếu sót của cơ chế thông báo hiện tại.
  - **#2377 - Đầu ra công cụ exec có ký tự điều khiển nguy hiểm**: Công cụ `exec` và nhật ký có thể xuất ra ký tự điều khiển ANSI gốc, tiềm ẩn rủi ro bảo mật đầu cuối. Cộng đồng đã gửi các PR sửa lỗi liên quan (ví dụ: #2298).
  - **#2482 - Gọi công cụ mô hình mã nguồn mở thất bại**: Khi chạy mô hình mã nguồn mở bằng backend như `mlx-lm`, chức năng gọi công cụ bị vô hiệu hóa. Đây là vấn đề ảnh hưởng rộng rãi vì nhóm người dùng mô hình mã nguồn mở rất lớn.
- **Nguy cơ thấp - Vấn đề tương thích**:
  - **#2472 - Đường dẫn `list_dir` sai trên Windows**: Trên hệ thống Windows, do không tương thích dấu phân cách đường dẫn, công cụ thực thi thất bại, gây phiền nhiễu cụ thể cho người dùng Windows.

## 6. Yêu cầu chức năng và tín hiệu lộ trình

- **Tín hiệu ưu tiên cao**:
  - **Chồng chất tài khoản LLM (Luân phiên API Key)**: Issue #2408 và nhiều thảo luận liên quan cho thấy đây sẽ là điểm nóng tiềm năng cho phiên bản tiếp theo. Đây là chức năng quan trọng để nâng cao khả năng sử dụng dịch vụ và hiệu quả chi phí.
  - **Hỗ trợ OAuth 2.1 cho Máy chủ MCP**: Issue #2546 đề xuất thêm máy chủ MCP được bảo vệ bằng OAuth thông qua việc dán URL trên trang bảng điều khiển, giảm ngưỡng cho người dùng không chuyên về kỹ thuật, tạo thành một sự bổ sung mạnh mẽ cho công cụ quản lý CLI MCP được phát hành trong v0.2.8.
- **Tín hiệu ưu tiên trung bình**:
  - **Tối ưu hóa sâu kênh Lập Nhất**: Người dùng mạnh mẽ yêu cầu tối ưu hóa kênh Lập Nhất để hỗ trợ xuất luồng, hiển thị mô hình/trạng thái và học hỏi trải nghiệm plugin chính thức của Lập Nhất (Issue #2580). Điều này cho thấy sự chú trọng vào thị trường Trung Quốc đang chuyển thành các yêu cầu chức năng cụ thể.
  - **Cải thiện hệ thống bộ nhớ**: Người dùng đề xuất giải pháp tích hợp các nhà cung cấp bộ nhớ bên thứ ba như mem0, Supermemory (Issue #2515), để tăng cường khả năng ngữ cảnh dài hạn của PicoClaw.
- **Tín hiệu ưu tiên thấp**:
  - **