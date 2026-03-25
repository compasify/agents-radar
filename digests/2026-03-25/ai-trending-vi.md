# Xu hướng AI mã nguồn mở hàng ngày | 2026-03-25

> Nguồn dữ liệu: GitHub Trending + GitHub Search API | Thời gian tạo: 2026-03-25 00:09 UTC

---

# Xu hướng AI mã nguồn mở hàng ngày | 2026-03-25

---

## Tổng quan nhanh hôm nay

Lĩnh vực AI mã nguồn mở hôm nay chứng kiến **sự bùng nổ về cơ sở hạ tầng tác tử (agent)**. `deer-flow` do ByteDance mã nguồn mở đã vươn lên dẫn đầu Trending với 4346 sao, đánh dấu sự gia nhập chính thức của các ông lớn vào đường đua SuperAgent. Khung giao dịch tài chính đa tác tử `TradingAgents` và phiên bản tiếng Trung của nó cũng nhận được sự quan tâm lớn, cho thấy sự thẩm thấu sâu của AI Agent vào các tình huống cụ thể. Đồng thời, các công cụ trong hệ sinh thái Claude ( `ruflo`, `awesome-claude-code`) xuất hiện dày đặc, hệ sinh thái nhà phát triển của Anthropic đang hình thành nhanh chóng. Công nghệ RAG và lớp ghi nhớ tiếp tục sôi động, các dự án "bộ não thứ hai của AI" như `supermemory` và `cognee` nhận được sự quan tâm liên tục.

---

## Các dự án nổi bật theo từng hạng mục

### 🔧 Công cụ cơ bản AI (Framework, SDK, Engine suy luận, Công cụ phát triển, CLI)

| Dự án | Số sao | Mô tả ngắn gọn |
|:---|:---|:---|
| **[deer-flow](https://github.com/bytedance/deer-flow)** | 0 ⭐ (+4346 hôm nay) | Framework SuperAgent mã nguồn mở của ByteDance, tích hợp sandbox, bộ nhớ, công cụ, tác tử con và cổng nhắn tin, hỗ trợ điều phối tác vụ phức tạp từ phút đến giờ, đại diện cho tiêu chuẩn cơ sở hạ tầng tác tử cấp đại công ty mới nhất. |
| **[ruflo](https://github.com/ruvnet/ruflo)** | 0 ⭐ (+1397 hôm nay) | Nền tảng điều phối tác tử hàng đầu trong hệ sinh thái Claude, hỗ trợ cụm đa tác tử phân tán và tích hợp gốc Claude Code/Codex, sự quan tâm lớn hôm nay xác nhận sự trỗi dậy của chuỗi công cụ nhà phát triển của Anthropic. |
| **[awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)** | 0 ⭐ (+995 hôm nay) | Kho tài nguyên tuyển chọn các kỹ năng, hook, lệnh gạch chéo của Claude Code, cơ sở hạ tầng "Awesome List" của hệ sinh thái Claude. |
| **[rig](https://github.com/0xPlaygrounds/rig)** | 6646 ⭐ | Framework phát triển ứng dụng LLM theo module bằng ngôn ngữ Rust, cung cấp nền tảng hiệu suất cao cho kỹ thuật AI cấp hệ thống. |
| **[E2B](https://github.com/e2b-dev/E2B)** | 11,416 ⭐ | Môi trường sandbox an toàn cho tác tử AI cấp doanh nghiệp, hỗ trợ gọi công cụ thực tế, là cơ sở hạ tầng quan trọng cho việc triển khai Agent. |
| **[opencli](https://github.com/jackwener/opencli)** | 6131 ⭐ | Hub CLI đa dụng và runtime gốc AI, có thể chuyển đổi bất kỳ trang web/công cụ nào thành giao diện dòng lệnh tiêu chuẩn, được thiết kế đặc biệt cho việc tác tử AI tự động khám phá và thực thi. |
| **[dify](https://github.com/langgenius/dify)** | 134,289 ⭐ | Nền tảng phát triển quy trình làm việc Agentic cấp sản xuất, tiếp tục duy trì tốc độ tăng sao cao, là tiêu chuẩn ngành. |

---

### 🤖 Tác tử/Quy trình làm việc AI (Framework Agent, Tự động hóa, Đa tác tử)

| Dự án | Số sao | Mô tả ngắn gọn |
|:---|:---|:---|
| **[TradingAgents](https://github.com/TauricResearch/TradingAgents)** | 0 ⭐ (+1760 hôm nay) | Khung giao dịch tài chính LLM đa tác tử, sự tăng trưởng bùng nổ hôm nay cho thấy sự thẩm thấu nhanh của AI Agent vào bối cảnh giá trị cao như giao dịch theo vector. |
| **[TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN)** | 0 ⭐ (+557 hôm nay) | Phiên bản tiếng Trung tăng cường của TradingAgents, cùng lên bảng xếp hạng cho thấy nhu cầu cao của các nhà phát triển Trung Quốc đối với AI Agent tài chính. |
| **[hermes-agent](https://github.com/NousResearch/hermes-agent)** | 12,518 ⭐ (+1278 hôm nay) | Tác tử "cùng bạn trưởng thành" do NousResearch phát hành, nhấn mạnh khả năng học tập liên tục và tự thích ứng. |
| **[intentkit](https://github.com/crestalnetwork/intentkit)** | 6496 ⭐ | Cụm tác tử đám mây tự lưu trữ, hỗ trợ quản lý cộng tác đa tác tử, giải pháp triển khai Agent cấp doanh nghiệp. |
| **[last30days-skill](https://github.com/mvanhorn/last30days-skill)** | 0 ⭐ (+209 hôm nay) | Kỹ năng tác tử AI nghiên cứu đa nền tảng Reddit/X/YouTube/HN/Polymarket, mô hình mới cho tác tử tổng hợp thông tin. |
| **[cua](https://github.com/trycua/cua)** | 13,247 ⭐ | Cơ sở hạ tầng mã nguồn mở cho Tác tử sử dụng máy tính (Computer-Use Agents), hỗ trợ điều khiển toàn bộ màn hình macOS/Linux/Windows. |
| **[OpenSandbox](https://github.com/alibaba/OpenSandbox)** | 9240 ⭐ | Runtime sandbox an toàn cho tác tử AI mã nguồn mở của Alibaba, nhấn mạnh tính an toàn, nhanh chóng và khả năng mở rộng. |
| **[Agent-Reach](https://github.com/Panniantong/Agent-Reach)** | 10,658 ⭐ | Trao cho tác tử AI khả năng "nhìn thấy toàn bộ Internet", đọc các nền tảng như Twitter/Reddit/YouTube miễn phí API. |

---

### 📦 Ứng dụng AI (Sản phẩm ứng dụng cụ thể, giải pháp cho tình huống cụ thể)

| Dự án | Số sao | Mô tả ngắn gọn |
|:---|:---|:---|
| **[MoneyPrinterV2](https://github.com/FujiwaraChoki/MoneyPrinterV2)** | 0 ⭐ (+3006 hôm nay) | Công cụ AI "kiếm tiền tự động trực tuyến", sự tăng trưởng 3000+ sao hôm nay phản ánh nhu cầu thị trường mạnh mẽ đối với các công cụ kiếm tiền bằng AI. |
| **[MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** | 0 ⭐ (+728 hôm nay) | Công cụ tạo video ngắn HD chỉ bằng một cú nhấp chuột dựa trên mô hình ngôn ngữ lớn AI, cùng lên bảng xếp hạng với V2 tạo thành một bộ công cụ sáng tạo nội dung. |
| **[project-nomad](https://github.com/Crosstalk-Solutions/project-nomad)** | 0 ⭐ (+2513 hôm nay) | Máy tính sinh tồn ngoại tuyến, tích hợp kiến thức AI cho tình huống tận thế/ngoài trời, đổi mới tình huống độc đáo. |
| **[waoowaoo](https://github.com/saturndec/waoowaoo)** | 10,238 ⭐ | Nền tảng sản xuất phim ảnh AI quy trình đầy đủ cấp công nghiệp đầu tiên, quy trình làm việc tiêu chuẩn Hollywood từ phim ngắn đến phim người đóng. |
| **[browser-use](https://github.com/browser-use/browser-use)** | 84,209 ⭐ | Làm cho các trang web có thể truy cập được đối với tác tử AI, công cụ tiêu chuẩn thực tế cho tự động hóa trình duyệt. |
| **[ragflow](https://github.com/infiniflow/ragflow)** | 76,025 ⭐ | Engine mã nguồn mở tích hợp sâu khả năng RAG và Agent, xây dựng lớp ngữ cảnh chất lượng cao cho LLM. |

---

### 🧠 Mô hình lớn/Huấn luyện (Trọng số mô hình, Framework huấn luyện, Công cụ tinh chỉnh)

| Dự án | Số sao | Mô tả ngắn gọn |
|:---|:---|:---|
| **[minimind](https://github.com/jingyaogong/minimind)** | 43,277 ⭐ | Hướng dẫn tối giản để huấn luyện GPT 26M tham số từ 0 trong 2 giờ, dự án tiêu chuẩn trong lĩnh vực giáo dục mô hình lớn. |
| **[tiny-llm](https://github.com/skyzh/tiny-llm)** | 4024 ⭐ | Khóa học suy luận LLM trên Apple Silicon, xây dựng vLLM + Qwen siêu nhỏ, huấn luyện thực hành cho kỹ sư hệ thống. |
| **[LlamaFactory](https://github.com/hiyouga/LlamaFactory)** | 68,997 ⭐ | Framework tinh chỉnh LLM/VLM thống nhất và hiệu quả trên 100+, thành quả ACL 2024 tiếp tục dẫn đầu. |
| **[unsloth](https://github.com/unslothai/unsloth)** | 58,023 ⭐ | Web UI huấn luyện và chạy cục bộ các mô hình mã nguồn mở như Qwen/DeepSeek/gpt-oss/Gemma. |
| **[vllm](https://github.com/vllm-project/vllm)** | 74,192 ⭐ | Engine suy luận và phục vụ LLM có thông lượng cao, hiệu quả bộ nhớ, cơ sở hạ tầng cốt lõi cho triển khai sản xuất. |
| **[ollama](https://github.com/ollama/ollama)** | 166,060 ⭐ | Công cụ ưu tiên để chạy cục bộ các mô hình như Kimi-K2.5/GLM-5/DeepSeek/gpt-oss. |

---

### 🔍 RAG/Cơ sở tri thức (Cơ sở dữ liệu vector, Tăng cường truy xuất, Quản lý tri thức)

| Dự án | Số sao | Mô tả ngắn gọn |
|:---|:---|:---|
| **[supermemory](https://github.com/supermemoryai/supermemory)** | 0 ⭐ (+344 hôm nay) | Engine ghi nhớ nhanh chóng và có thể mở rộng, "Memory API của kỷ nguyên AI", sự quan tâm hôm nay xác nhận sự nóng lên liên tục của công nghệ lớp ghi nhớ. |
| **[cognee](https://github.com/topoteretes/cognee)** | 14,584 ⭐ | Engine tri thức xây dựng bộ nhớ tác tử AI chỉ với 6 dòng mã, thiết kế API tối giản giảm rào cản tích hợp lớp ghi nhớ. |
| **[PageIndex](https://github.com/VectifyAI/PageIndex)** | 22,828 ⭐ | Chỉ mục tài liệu RAG dựa trên suy luận, không sử dụng vector, giải pháp mang tính cách mạng với 97% tiết kiệm dung lượng lưu trữ. |
| **[LEANN](https://github.com/yichuan-w/LEANN)** | 10,366 ⭐ | [MLsys2026] Ứng dụng RAG nhanh chóng, chính xác, 100% riêng tư cho thiết bị cá nhân. |
| **[mem0](https://github.com/mem0ai/mem0)** | 50,949 ⭐ | Lớp ghi nhớ phổ quát cho tác tử AI, lưu trữ trạng thái tác tử bền vững qua các phiên. |
| **[claude-mem](https://github.com/thedotmack/claude-mem)** | 40,246 ⭐ | Plugin tự động ghi lại và nén bộ nhớ phiên Claude Code, giải pháp tăng cường bộ nhớ cho trợ lý lập trình AI. |
| **[milvus](https://github.com/milvus-io/milvus)** | 43,451 ⭐ | Cơ sở dữ liệu vector hiệu suất cao, đám mây gốc, tiêu chuẩn ngành cho tìm kiếm ANN vector có thể mở rộng. |
| **[qdrant](https://github.com/qdrant/qdrant)** | 29,808 ⭐ | Cơ sở dữ liệu vector và công cụ tìm kiếm quy mô lớn, hiệu suất cao cho AI thế hệ tiếp theo. |

---

## Phân tích tín hiệu xu hướng

**Cơ sở hạ tầng tác tử bước vào giai đoạn mới "do đại công ty dẫn dắt + phân hóa hệ sinh thái".** Sự bùng nổ 4346 sao của `deer-flow` từ ByteDance đánh dấu việc các gã khổng lồ Internet chính thức định nghĩa tiêu chuẩn SuperAgent dưới hình thức mã nguồn mở, kiến trúc bốn lớp "sandbox + bộ nhớ + công cụ + tác tử con" của nó có thể trở thành mô hình tham chiếu cho ngành. Đồng thời, sự xuất hiện dày đặc của chuỗi công cụ hệ sinh thái Anthropic Claude ( `ruflo`, `awesome-claude-code`, `claude-mem`) cho thấy nó đang sao chép con đường hệ sinh thái nhà phát triển của OpenAI, hình thành cục diện cạnh tranh ba cực với OpenAI/ByteDance.

**Tác tử cho các tình huống cụ thể thể hiện đặc điểm "tài chính đi đầu, theo sau là kiếm tiền từ nội dung".** Cả hai phiên bản `TradingAgents` cùng lên bảng xếp hạng, phản ánh nhu cầu cấp thiết về cộng tác đa tác tử trong các tình huống ra quyết định có giá trị cao; trong khi sự tăng trưởng 3000+ sao của dòng `MoneyPrinter` cho thấy thị trường lớn của các công cụ kiếm tiền từ nội dung bằng AI trong nền kinh tế sáng tạo. Điều đáng chú ý là máy tính sinh tồn ngoại tuyến `project-nomad` đại diện cho hướng đi mới nổi **"AI biên và tình huống khắc nghiệt"**, có thể báo hiệu xu hướng ứng dụng AI thẩm thấu vào môi trường không có mạng.

**Về mặt ngăn xếp công nghệ, tỷ lệ Rust trong cơ sở hạ tầng AI tiếp tục tăng** (`rig`, `qdrant`, `meilisearch`), trong khi sự trỗi dậy của "RAG không vector" (`PageIndex`, `LEANN`) có thể tạo áp lực thay thế công nghệ đối với các cơ sở dữ liệu vector truyền thống.

---

## Các điểm nóng được cộng đồng quan tâm

- **🎯 [deer-flow](https://github.com/bytedance/deer-flow)** — Framework SuperAgent mã nguồn mở của ByteDance, số lượng sao mới cao nhất hôm nay, khả năng tác tử dài hạn "tác vụ từ phút đến giờ" của nó định nghĩa một tiêu chuẩn độ phức tạp mới, đề xuất chú ý đến chi tiết triển khai sandbox và cổng nhắn tin của nó.

- **🎯 [TradingAgents](https://github.com/TauricResearch/TradingAgents)** — Sự tăng trưởng bùng nổ của khung đa tác tử tài chính, đại diện cho sự thẩm thấu sâu của AI Agent từ hội thoại chung sang giao dịch theo vector, đánh giá rủi ro và các quyết định chuyên nghiệp khác, chu trình khép kín công nghệ-kinh doanh rõ ràng.

- **🎯 [ruflo](https://github.com/ruvnet/ruflo)** — Nền tảng điều phối tác tử hệ sinh thái Claude, kiến trúc "trí tuệ đàn ong phân tán" và tích hợp gốc Claude Code, là cửa sổ quan trọng để quan sát sự phát triển của hệ sinh thái nhà phát triển Anthropic.

- **🎯 [PageIndex](https://github.com/VectifyAI/PageIndex)** — Lộ trình công nghệ "RAG không vector, dựa trên suy luận", tiết kiệm 97% dung lượng lưu trữ mà vẫn duy trì độ chính xác, có thể tạo ra sự thay thế mang tính đột phá đối với các cơ sở dữ liệu vector như Milvus/Qdrant, đáng để các nhà ra quyết định công nghệ đánh giá.

- **🎯 [project-nomad](https://github.com/Crosstalk-Solutions/project-nomad)** — Đổi mới tình huống độc đáo của máy tính sinh tồn AI ngoại tuyến, kết hợp điện toán biên và nhu cầu môi trường khắc nghiệt, có thể mở ra một phân khúc thị trường mới cho phần cứng AI.

---

*Báo cáo này được tạo dựa trên dữ liệu GitHub Trending và tìm kiếm chủ đề ngày 2026-03-25*

---
*Bản tin hàng ngày này được tạo tự động bởi [agents-radar](https://github.com/duanyytop/agents-radar).*