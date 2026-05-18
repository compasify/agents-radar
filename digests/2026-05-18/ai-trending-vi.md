# Báo cáo xu hướng mã nguồn mở AI hàng ngày | 2026-05-18

> Nguồn dữ liệu: GitHub Trending + GitHub Search API | Thời gian tạo: 2026-05-18 00:23 UTC

---

# Báo cáo xu hướng mã nguồn mở AI hàng ngày | 2026-05-18

---

## I. Tổng quan nhanh hôm nay

Lĩnh vực mã nguồn mở AI hôm nay cho thấy **sự bùng nổ của "Cơ sở hạ tầng tác nhân"**: `openhuman` dẫn đầu Trending với 1690 sao, tập trung vào tác nhân siêu cấp riêng tư hóa cục bộ; dự án hướng dẫn `ai-agents-for-beginners` của Microsoft đã nhận được 485 sao, khẳng định nhu cầu giáo dục về nhà phát triển tác nhân đang gia tăng nhanh chóng. Đáng chú ý, hệ sinh thái **"Kỹ năng tác nhân"** đang có xu hướng tiêu chuẩn hóa – nhiều dự án xoay quanh các công cụ như Claude Code, Codex để xây dựng kho đăng ký kỹ năng và biểu đồ tri thức có thể tái sử dụng. Đồng thời, một biến số mới xuất hiện trong lĩnh vực bảo mật: `shannon`, một công cụ thử nghiệm xâm nhập AI hộp trắng, lần đầu tiên lọt vào danh sách, đánh dấu kỷ nguyên tự động hóa trong tấn công và phòng thủ bảo mật AI.

---

## II. Các dự án nổi bật theo từng hạng mục

### 🔧 Công cụ nền tảng AI (Framework, SDK, Công cụ suy luận, Công cụ phát triển, CLI)

| Dự án | Số sao | Mô tả ngắn gọn |
|:---|:---|:---|
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 0 ⭐ (+1690 hôm nay) | **Nóng nhất hôm nay**: Tác nhân siêu cấp AI riêng tư hóa cục bộ được xây dựng bằng Rust, nhấn mạnh "Private, Simple and extremely powerful", đáp ứng nhu cầu tính toán riêng tư trong kỷ nguyên hậu đám mây |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | 0 ⭐ (+238 hôm nay) | Cổng kết nối chuyển đổi mọi phần mềm thành CLI Native của Tác nhân, nhằm giải quyết vấn đề tiêu chuẩn hóa lệnh gọi công cụ AI |
| [oven-sh/bun](https://github.com/oven-sh/bun) | — ⭐ (+910 hôm nay) | Runtime JavaScript siêu nhanh, mặc dù không phải là dự án AI thuần túy, nhưng cung cấp hỗ trợ cơ sở hạ tầng cho các ứng dụng frontend AI (như cal.diy), mức độ phổ biến hôm nay phản ánh nhu cầu tối ưu hóa hiệu suất ứng dụng AI |
| [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph) | 0 ⭐ (+857 hôm nay) | Biểu đồ tri thức mã được lập chỉ mục trước cho Claude Code, chạy 100% cục bộ, giảm số lần tiêu thụ token và gọi công cụ, **phương thức mới để tối ưu hóa hiệu quả tác nhân mã** |
| [KeygraphHQ/shannon](https://github.com/KeygraphHQ/shannon) | 0 ⭐ (+200 hôm nay) | Công cụ thử nghiệm xâm nhập AI hộp trắng, tự động phân tích mã nguồn, xác định vector tấn công và thực hiện khai thác lỗ hổng thực tế, **dự án đột phá trong lĩnh vực bảo mật AI** |
| [langgenius/dify](https://github.com/langgenius/dify) | 141.681 ⭐ | Nền tảng phát triển quy trình làm việc Tác nhân cấp sản xuất, cơ sở hạ tầng đại diện cho sự hợp nhất khả năng RAG và Tác nhân |

### 🤖 Tác nhân/Quy trình làm việc AI (Framework Tác nhân, Tự động hóa, Đa tác nhân)

| Dự án | Số sao | Mô tả ngắn gọn |
|:---|:---|:---|
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 0 ⭐ (+225 hôm nay) | Kho đăng ký kỹ năng xác minh bảo mật cho các tác nhân mã hóa AI chuyên nghiệp, hỗ trợ Antigravity, Claude Code, Cursor, v.v., **thành phần quan trọng để tiêu chuẩn hóa hệ sinh thái Tác nhân** |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 0 ⭐ (+762 hôm nay) | Bộ kỹ năng Tác nhân sẵn sàng sử dụng trong các lĩnh vực nghiên cứu khoa học/kỹ thuật/tài chính/viết lách, tốc độ tăng trưởng đáng kể hôm nay, phản ánh nhu cầu Tác nhân trong các tình huống dọc |
| [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | 0 ⭐ (+172 hôm nay) | Hướng dẫn đầu cuối từ nguyên mẫu đến triển khai doanh nghiệp cho Tác nhân GenAI, lấp đầy khoảng trống kiến thức về kỹ thuật hóa Tác nhân |
| [dograh-hq/dograh](https://github.com/dograh-hq/dograh) | 0 ⭐ (+223 hôm nay) | Nền tảng tác nhân giọng nói mã nguồn mở, tương tác đa phương thức trở thành chiến trường mới của Tác nhân |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 52.364 ⭐ | Nền tảng điều phối Tác nhân hàng đầu trong hệ sinh thái Claude, hỗ trợ cụm đa tác nhân và trí tuệ nhóm tự học |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 42.662 ⭐ | Tác nhân AI cá nhân siêu nhẹ, cùng hệ thống HKUDS với CLI-Anything, xây dựng ma trận công cụ Tác nhân |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 184.378 ⭐ | Tiên phong trong tầm nhìn Tác nhân đa năng, liên tục định nghĩa tiêu chuẩn "AI dành cho mọi người" |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 73.888 ⭐ | Phát triển phần mềm do AI hỗ trợ, đại diện cho giải pháp thay thế mã nguồn mở cho Devin |

### 📦 Ứng dụng AI (Sản phẩm ứng dụng cụ thể, giải pháp cho các tình huống dọc)

| Dự án | Số sao | Mô tả ngắn gọn |
|:---|:---|:---|
| [Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI) | 0 ⭐ (+703 hôm nay) | Studio tạo video/hình ảnh AI mã nguồn mở với hơn 200 mô hình (Flux, Kling, Sora, Veo, v.v.), không lọc nội dung, tự lưu trữ, giấy phép MIT, **chống lại chính sách kiểm duyệt nội dung và mô hình đăng ký của nền tảng đóng** |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 0 ⭐ (+333 hôm nay) | Nền tảng tổng hợp tình báo mã nguồn mở (máy bay riêng, vệ tinh gián điệp, sự kiện động đất), có thể tích hợp Tác nhân AI để phân tích liên quan, **đổi mới theo chiều dọc của AI + OSINT** |
| [calcom/cal.diy](https://github.com/calcom/cal.diy) | 0 ⭐ (+433 hôm nay) | Cơ sở hạ tầng lập lịch, mặc dù là công cụ đa năng, nhưng có tiềm năng tưởng tượng khi kết hợp với tình huống Tác nhân lịch trình AI |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 45.830 ⭐ | Studio năng suất AI, tổng hợp hơn 300 trợ lý và LLM tiên tiến, giải pháp tích hợp lớp ứng dụng Tác nhân |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 45.185 ⭐ | Hệ thống tìm việc AI dựa trên Claude Code, 14 chế độ kỹ năng, triển khai tình huống Tác nhân theo chiều dọc |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 17.583 ⭐ | Tạo PPTX gốc có thể chỉnh sửa bằng AI, không xuất hình ảnh, ứng dụng sâu về tự động hóa văn phòng |

### 🧠 Mô hình lớn/Huấn luyện (Trọng số mô hình, Framework huấn luyện, Công cụ tinh chỉnh)

| Dự án | Số sao | Mô tả ngắn gọn |
|:---|:---|:---|
| [microsoft/ai-agents-for-beginners](https://github.com/microsoft/ai-agents-for-beginners) | 0 ⭐ (+485 hôm nay) | Hướng dẫn nhập môn Tác nhân 12 bài học chính thức của Microsoft, **sự bảo chứng của các tập đoàn lớn làm giảm rào cản phát triển Tác nhân** |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 50.049 ⭐ | Huấn luyện LLM với 64 triệu tham số từ đầu trong 2 giờ, tiêu chuẩn hóa dân chủ hóa giáo dục mô hình lớn |
| [ollama/ollama](https://github.com/ollama/ollama) | 171.628 ⭐ | Tiêu chuẩn chạy mô hình lớn cục bộ, đã hỗ trợ các mô hình mới nhất như Kimi-K2.5, GLM-5, DeepSeek, v.v. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 80.273 ⭐ | Công cụ suy luận LLM có thông lượng cao và hiệu quả bộ nhớ, cơ sở hạ tầng triển khai sản xuất |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 160.694 ⭐ | Tiêu chuẩn thực tế của framework định nghĩa mô hình, bao phủ văn bản/hình ảnh/âm thanh/đa phương thức |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 95.010 ⭐ | Triển khai LLM kiểu ChatGPT từ đầu, tài nguyên kinh điển cho giáo dục học sâu và mô hình lớn |

### 🔍 RAG/Kho kiến thức (Cơ sở dữ liệu vector, Tăng cường truy xuất, Quản lý kiến thức)

| Dự án | Số sao | Mô tả ngắn gọn |
|:---|:---|:---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 80.671 ⭐ | Công cụ mã nguồn mở hàng đầu kết hợp khả năng RAG và Tác nhân, công cụ cốt lõi để xây dựng lớp ngữ cảnh |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 76.388 ⭐ | Bộ nhớ bền vững qua các phiên trò chuyện, nén AI và đưa vào ngữ cảnh tương lai, **giải quyết vấn đề đứt gãy bộ nhớ của Tác nhân** |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 55.964 ⭐ | Lớp bộ nhớ Tác nhân AI đa năng, cơ sở hạ tầng cho cá nhân hóa và liên tục ngữ cảnh |
| [safishamsi/graphify](https://github.com/safishamsi/graphify) | 48.782 ⭐ | Chuyển đổi mã/SQL/tài liệu/đa phương tiện thành biểu đồ tri thức có thể truy vấn, **hình thức mới của RAG đa phương thức** |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 17.297 ⭐ | Kiểm soát bộ nhớ Tác nhân AI chỉ với 6 dòng mã, chủ nghĩa tối giản trong quản lý bộ nhớ |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 31.550 ⭐ | Chỉ mục tài liệu RAG dựa trên suy luận, không cần vector, **thách thức mô hình truy vấn vector truyền thống** |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 44.329 ⭐ | Cơ sở dữ liệu vector đám mây gốc, tiêu chuẩn ngành cho tìm kiếm ANN có khả năng mở rộng |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 31.366 ⭐ | Công cụ tìm kiếm vector hiệu suất cao quy mô lớn, nền tảng dữ liệu cho AI thế hệ tiếp theo |

---

## III. Phân tích tín hiệu xu hướng

**"Lớp cơ sở hạ tầng Tác nhân" đang trải qua sự đổi mới bùng nổ**. Hơn 60% các dự án AI trong Trending hôm nay tập trung vào **định nghĩa kỹ năng, quản lý bộ nhớ, lệnh gọi công cụ và biểu đồ tri thức** của tác nhân – thay vì bản thân lớp ứng dụng. Điều này đánh dấu sự chuyển đổi của sự đồng thuận cộng đồng từ "tạo Tác nhân" sang "tạo công cụ để tạo Tác nhân", hệ sinh thái đang bước vào **giai đoạn cạnh tranh nền tảng**. Sự xuất hiện song song của `agent-skills` và `scientific-agent-skills` gợi ý rằng khả năng của Tác nhân đang phân hóa từ các framework đa năng sang **thị trường kỹ năng theo lĩnh vực dọc**.

**Tín hiệu công nghệ mới nổi rõ rệt**: "Biểu đồ tri thức mã được lập chỉ mục trước" đại diện bởi `codegraph` và RAG "dựa trên suy luận không cần vector" của `PageIndex`, lần lượt thách thức hiệu quả truy vấn của RAG truyền thống và giả định về sự phụ thuộc vector. Việc sử dụng ngôn ngữ Rust trong `openhuman`, `shannon` phản ánh sự theo đuổi kép **hiệu suất và bảo mật** của các công cụ AI.

Sự liên quan với các sự kiện ngành rõ ràng: việc ra mắt dày đặc gần đây của các tác nhân mã như Claude Code, Codex, OpenCode, trực tiếp thúc đẩy các hệ sinh thái đi kèm như `agent-skills`, `everything-claude-code`, `codegraph`; trong khi định vị tự lưu trữ không lọc của `Open-Generative-AI` là phản hồi rõ ràng đối với chính sách kiểm duyệt nội dung của các mô hình đóng.

---

## IV. Điểm nóng cộng đồng quan tâm

- **🔥 `openhuman` (Tác nhân siêu cấp riêng tư hóa cục bộ)**
  Tốc độ tăng trưởng 1690 sao trong một ngày hiếm thấy, vị trí Rust + ưu tiên riêng tư + "extremely powerful" đánh trúng điểm yếu của kỷ nguyên hậu đám mây, cần theo dõi chi tiết kiến trúc kỹ thuật mã nguồn mở

- **🔥 `shannon` (Thử nghiệm xâm nhập tự động bằng AI)**
  Tấn công và phòng thủ bảo mật AI hộp trắng lần đầu tiên xuất hiện dưới dạng mã nguồn mở, phạm vi năng lực "tự động thực hiện khai thác lỗ hổng thực tế" và rủi ro đạo đức cũng đáng chú ý, có thể mở ra một cuộc đua mới trong lĩnh vực bảo mật AI

- **🔥 Phong trào tiêu chuẩn hóa Kỹ năng Tác nhân ( `agent-skills` + `scientific-agent-skills` + `graphify`)**
  Nhiều dự án cố gắng thiết lập các đơn vị năng lực Tác nhân có thể tái sử dụng, xác minh được và giao dịch được, giống như "npm của kỷ nguyên AI", các nhà phát triển nên lên kế hoạch trước về mô hình phát triển kỹ năng

- **🔥 `codegraph` (Biểu đồ tri thức mã được lập chỉ mục trước)**
  Tối ưu hóa token và lệnh gọi cho các công cụ như Claude Code, đại diện cho hướng tinh chỉnh của "kỹ thuật hiệu quả trợ lý mã AI", giá trị triển khai cấp doanh nghiệp rõ ràng

- **🔥 `PageIndex` (RAG dựa trên suy luận không cần vector)**
  Tiết kiệm 97% dung lượng lưu trữ + 100% riêng tư RAG cục bộ, nếu lộ trình kỹ thuật được xác minh thành công, có thể định hình lại kiến trúc truy vấn tri thức của AI biên

---

*Báo cáo hàng ngày này được tạo dựa trên dữ liệu thời gian thực GitHub Trending và API tìm kiếm chủ đề, tập trung vào các động thái đổi mới mã nguồn mở trong lĩnh vực AI/ML.*

---

*Báo cáo hàng ngày này được tự động tạo bởi [agents-radar](https://github.com/duanyytop/agents-radar).*