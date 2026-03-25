# Xu hướng AI mã nguồn mở hàng ngày | 2026-03-25

> Nguồn dữ liệu: GitHub Trending + GitHub Search API | Thời gian tạo: 2026-03-25 00:09 UTC

---

# Xu hướng AI mã nguồn mở hàng ngày | 2026-03-25

---

## Tổng quan hôm nay

Lĩnh vực AI mã nguồn mở hôm nay cho thấy sự bùng nổ về **cơ sở hạ tầng tác nhân thông minh**. `deer-flow` do ByteDance mã nguồn mở đã vươn lên dẫn đầu Trending với 4346 sao, đánh dấu sự tham gia chính thức của các tập đoàn lớn vào cuộc đua SuperAgent. Khung giao dịch tài chính đa tác nhân `TradingAgents` và phiên bản tiếng Trung của nó cùng nhau đạt được sức hút lớn, phản ánh sự thâm nhập sâu của AI Agent vào các kịch bản dọc. Đồng thời, các chuỗi công cụ hệ sinh thái Claude (như `ruflo`, `awesome-claude-code`) xuất hiện dày đặc, cho thấy hệ sinh thái nhà phát triển của Anthropic đang dần hình thành. Công nghệ RAG và lớp bộ nhớ tiếp tục hoạt động sôi nổi, với các dự án "bộ não thứ hai của AI" như `supermemory` và `cognee` thu hút sự chú ý liên tục.

---

## Các dự án nổi bật theo từng hạng mục

### 🔧 Công cụ nền tảng AI (Khung, SDK, Công cụ suy luận, Công cụ phát triển, CLI)

| Dự án | Số sao | Mô tả ngắn gọn |
|:---|:---|:---|
| **[deer-flow](https://github.com/bytedance/deer-flow)** | 0 ⭐ (+4346 hôm nay) | Khung SuperAgent mã nguồn mở của ByteDance, tích hợp sandbox, bộ nhớ, công cụ, tác nhân phụ và cổng tin nhắn, hỗ trợ điều phối tác vụ phức tạp từ vài phút đến vài giờ, đại diện cho tiêu chuẩn mới nhất của cơ sở hạ tầng Agent cấp tập đoàn lớn |
| **[ruflo](https://github.com/ruvnet/ruflo)** | 0 ⭐ (+1397 hôm nay) | Nền tảng điều phối tác nhân hàng đầu trong hệ sinh thái Claude, hỗ trợ cụm đa tác nhân phân tán và tích hợp gốc với Claude Code/Codex, sức hút ngày hôm nay xác nhận sự trỗi dậy của chuỗi công cụ nhà phát triển của Anthropic |
| **[awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)** | 0 ⭐ (+995 hôm nay) | Kho tài nguyên tuyển chọn các kỹ năng, hook, lệnh gạch chéo của Claude Code, cơ sở hạ tầng "Danh sách Awesome" cho hệ sinh thái Claude |
| **[rig](https://github.com/0xPlaygrounds/rig)** | 6646 ⭐ | Khung phát triển ứng dụng LLM mô-đun bằng Rust, cung cấp nền tảng hiệu suất cao cho kỹ thuật AI cấp hệ thống |
| **[E2B](https://github.com/e2b-dev/E2B)** | 11,416 ⭐ | Môi trường sandbox an toàn cho tác nhân AI cấp doanh nghiệp, hỗ trợ gọi công cụ thực tế, là cơ sở hạ tầng quan trọng cho việc triển khai Agent |
| **[opencli](https://github.com/jackwener/opencli)** | 6131 ⭐ | Hub CLI đa năng và môi trường chạy gốc AI, có thể chuyển đổi bất kỳ trang web/công cụ nào thành giao diện dòng lệnh tiêu chuẩn hóa, được thiết kế đặc biệt cho việc khám phá và thực thi tự động của AI Agent |
| **[dify](https://github.com/langgenius/dify)** | 134,289 ⭐ | Nền tảng phát triển quy trình làm việc Agent có tính sản xuất, tiếp tục duy trì tốc độ tăng trưởng sao cao, là tiêu chuẩn ngành |

---

### 🤖 Tác nhân/Quy trình làm việc AI (Khung Agent, Tự động hóa, Đa tác nhân)

| Dự án | Số sao | Mô tả ngắn gọn |
|:---|:---|:---|
| **[TradingAgents](https://github.com/TauricResearch/TradingAgents)** | 0 ⭐ (+1760 hôm nay) | Khung giao dịch tài chính LLM đa tác nhân, sự tăng trưởng bùng nổ hôm nay cho thấy sự thâm nhập nhanh chóng của AI Agent vào kịch bản giá trị cao như giao dịch định lượng |
| **[TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN)** | 0 ⭐ (+557 hôm nay) | Phiên bản tiếng Trung tăng cường của TradingAgents, cùng xuất hiện trên bảng xếp hạng cho thấy nhu cầu mạnh mẽ của các nhà phát triển Trung Quốc đối với AI Agent tài chính |
| **[hermes-agent](https://github.com/NousResearch/hermes-agent)** | 12,518 ⭐ (+1278 hôm nay) | Tác nhân "cùng bạn trưởng thành" do NousResearch phát hành, nhấn mạnh khả năng học hỏi liên tục và tự thích ứng |
| **[intentkit](https://github.com/crestalnetwork/intentkit)** | 6496 ⭐ | Cụm tác nhân đám mây tự lưu trữ, hỗ trợ quản lý cộng tác đa tác nhân, giải pháp triển khai Agent cấp doanh nghiệp |
| **[last30days-skill](https://github.com/mvanhorn/last30days-skill)** | 0 ⭐ (+209 hôm nay) | Kỹ năng AI Agent nghiên cứu đa nền tảng Reddit/X/YouTube/HN/Polymarket, một mô hình mới cho Agent tích hợp thông tin |
| **[cua](https://github.com/trycua/cua)** | 13,247 ⭐ | Cơ sở hạ tầng mã nguồn mở cho Tác nhân sử dụng máy tính (Computer-Use Agents), hỗ trợ điều khiển toàn bộ máy tính trên macOS/Linux/Windows |
| **[OpenSandbox](https://github.com/alibaba/OpenSandbox)** | 9240 ⭐ | Môi trường chạy sandbox an toàn cho tác nhân AI mã nguồn mở của Alibaba, nhấn mạnh tính an toàn, tốc độ và khả năng mở rộng |
| **[Agent-Reach](https://github.com/Panniantong/Agent-Reach)** | 10,658 ⭐ | Trang bị cho AI Agent khả năng "nhìn thấy toàn bộ Internet", đọc các nền tảng như Twitter/Reddit/YouTube mà không mất phí API |

---

### 📦 Ứng dụng AI (Sản phẩm ứng dụng cụ thể, giải pháp cho các kịch bản dọc)

| Dự án | Số sao | Mô tả ngắn gọn |
|:---|:---|:---|
| **[MoneyPrinterV2](https://github.com/FujiwaraChoki/MoneyPrinterV2)** | 0 ⭐ (+3006 hôm nay) | Công cụ AI "kiếm tiền trực tuyến tự động", mức tăng 3000+ sao hôm nay phản ánh nhu cầu thị trường mạnh mẽ đối với các công cụ kiếm tiền bằng AI |
| **[MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** | 0 ⭐ (+728 hôm nay) | Công cụ tạo video ngắn độ nét cao chỉ bằng một cú nhấp chuột dựa trên mô hình ngôn ngữ lớn AI, cùng xuất hiện trên bảng xếp hạng với V2 tạo thành một bộ công cụ sáng tạo nội dung |
| **[project-nomad](https://github.com/Crosstalk-Solutions/project-nomad)** | 0 ⭐ (+2513 hôm nay) | Máy tính sinh tồn ngoại tuyến, công cụ kiến thức cho các kịch bản tận thế/ngoài trời tích hợp AI, sự đổi mới kịch bản độc đáo |
| **[waoowaoo](https://github.com/saturndec/waoowaoo)** | 10,238 ⭐ | Nền tảng sản xuất phim ảnh AI toàn diện đầu tiên ở cấp công nghiệp, quy trình làm việc tiêu chuẩn Hollywood từ phim ngắn đến phim người đóng |
| **[browser-use](https://github.com/browser-use/browser-use)** | 84,209 ⭐ | Giúp các trang web có thể truy cập được đối với tác nhân AI, công cụ tiêu chuẩn thực tế cho tự động hóa trình duyệt |
| **[ragflow](https://github.com/infiniflow/ragflow)** | 76,025 ⭐ | Công cụ mã nguồn mở tích hợp sâu khả năng RAG và Agent, xây dựng lớp ngữ cảnh chất lượng cao cho LLM |

---

### 🧠 Mô hình lớn/Huấn luyện (Trọng số mô hình, Khung huấn luyện, Công cụ tinh chỉnh)

| Dự án | Số sao | Mô tả ngắn gọn |
|:---|:---|:---|
| **[minimind](https://github.com/jingyaogong/minimind)** | 43,277 ⭐ | Hướng dẫn tối giản để huấn luyện GPT 26M tham số từ đầu trong 2 giờ, dự án tiêu chuẩn trong lĩnh vực giáo dục mô hình lớn |
| **[tiny-llm](https://github.com/skyzh/tiny-llm)** | 4024 ⭐ | Khóa học suy luận LLM trên Apple Silicon, xây dựng vLLM + Qwen thu nhỏ, huấn luyện thực tế cho kỹ sư hệ thống |
| **[LlamaFactory](https://github.com/hiyouga/LlamaFactory)** | 68,997 ⭐ | Khung tinh chỉnh thống nhất và hiệu quả cho 100+ LLM/VLM, thành tựu ACL 2024 tiếp tục dẫn đầu |
| **[unsloth](https://github.com/unslothai/unsloth)** | 58,023 ⭐ | Giao diện Web UI để huấn luyện và chạy cục bộ các mô hình mã nguồn mở như Qwen/DeepSeek/gpt-oss/Gemma |
| **[vllm](https://github.com/vllm-project/vllm)** | 74,192 ⭐ | Công cụ suy luận và dịch vụ LLM có thông lượng cao, hiệu quả về bộ nhớ, cơ sở hạ tầng cốt lõi cho triển khai sản xuất |
| **[ollama](https://github.com/ollama/ollama)** | 166,060 ⭐ | Công cụ được ưa chuộng để chạy cục bộ các mô hình như Kimi-K2.5/GLM-5/DeepSeek/gpt-oss |

---

### 🔍 RAG/Cơ sở kiến thức (Cơ sở dữ liệu vector, Tăng cường truy xuất, Quản lý kiến thức)

| Dự án | Số sao | Mô tả ngắn gọn |
|:---|:---|:---|
| **[supermemory](https://github.com/supermemoryai/supermemory)** | 0 ⭐ (+344 hôm nay) | Công cụ bộ nhớ nhanh và có khả năng mở rộng, "API Bộ nhớ của kỷ nguyên AI", sức hút Trending ngày hôm nay xác nhận sức nóng liên tục của công nghệ lớp bộ nhớ |
| **[cognee](https://github.com/topoteretes/cognee)** | 14,584 ⭐ | Công cụ kiến thức xây dựng bộ nhớ cho AI Agent chỉ với 6 dòng mã, thiết kế API tối giản giúp giảm bớt rào cản tích hợp lớp bộ nhớ |
| **[PageIndex](https://github.com/VectifyAI/PageIndex)** | 22,828 ⭐ | Chỉ mục tài liệu RAG dựa trên suy luận, không cần vector, giải pháp đổi mới tiết kiệm 97% dung lượng lưu trữ |
| **[LEANN](https://github.com/yichuan-w/LEANN)** | 10,366 ⭐ | [MLsys2026] Ứng dụng RAG nhanh, chính xác, riêng tư 100% cho thiết bị cá nhân |
| **[mem0](https://github.com/mem0ai/mem0)** | 50,949 ⭐ | Lớp bộ nhớ phổ quát cho tác nhân AI, duy trì trạng thái tác nhân bền vững qua các phiên làm việc |
| **[claude-mem](https://github.com/thedotmack/claude-mem)** | 40,246 ⭐ | Plugin tự động chụp và nén bộ nhớ phiên Claude Code, giải pháp tăng cường bộ nhớ cho trợ lý lập trình AI |
| **[milvus](https://github.com/milvus-io/milvus)** | 43,451 ⭐ | Cơ sở dữ liệu vector hiệu suất cao trên nền tảng đám mây, tiêu chuẩn ngành cho tìm kiếm ANN vector có khả năng mở rộng |
| **[qdrant](https://github.com/qdrant/qdrant)** | 29,808 ⭐ | Cơ sở dữ liệu và công cụ tìm kiếm vector quy mô lớn hiệu suất cao cho AI thế hệ tiếp theo |

---

## Phân tích tín hiệu xu hướng

**Cơ sở hạ tầng tác nhân thông minh bước vào giai đoạn mới "do các tập đoàn lớn dẫn dắt + phân hóa hệ sinh thái".** Sự bùng nổ 4346 sao của `deer-flow` của ByteDance đánh dấu việc các gã khổng lồ internet chính thức định nghĩa tiêu chuẩn SuperAgent thông qua mã nguồn mở. Kiến trúc bốn lớp "sandbox + bộ nhớ + công cụ + tác nhân phụ" của nó có thể trở thành mô hình tham khảo cho ngành. Đồng thời, sự xuất hiện dày đặc của các chuỗi công cụ hệ sinh thái Anthropic Claude (`ruflo`, `awesome-claude-code`, `claude-mem`) cho thấy họ đang tái hiện con đường hệ sinh thái nhà phát triển của OpenAI, hình thành cục diện cạnh tranh ba cực với OpenAI/ByteDance.

**Tác nhân cho các kịch bản dọc thể hiện đặc điểm "tài chính đi đầu, theo sau là kiếm tiền từ nội dung".** Cả hai phiên bản `TradingAgents` cùng xuất hiện trên bảng xếp hạng, phản ánh nhu cầu cấp thiết đối với sự cộng tác đa tác nhân trong các kịch bản ra quyết định có giá trị cao; trong khi mức tăng 3000+ sao của dòng `MoneyPrinter` tiết lộ thị trường khổng lồ cho các công cụ kiếm tiền bằng nội dung AI trong nền kinh tế sáng tạo. Điều đáng chú ý là máy tính sinh tồn ngoại tuyến AI `project-nomad` đại diện cho hướng đi mới nổi **AI biên và kịch bản cực đoan**, có thể báo trước xu hướng ứng dụng AI thâm nhập vào môi trường không có mạng.

**Ở cấp độ ngăn xếp công nghệ, Rust chiếm tỷ lệ ngày càng tăng trong cơ sở hạ tầng AI** (`rig`, `qdrant`, `meilisearch`), trong khi sự trỗi dậy của "RAG không cần vector" (`PageIndex`, `LEANN`) có thể gây áp lực thay thế công nghệ lên các cơ sở dữ liệu vector truyền thống.

---

## Điểm nóng cộng đồng quan tâm

- **🎯 [deer-flow](https://github.com/bytedance/deer-flow)** — Khung SuperAgent mã nguồn mở của ByteDance, tăng sao cao nhất hôm nay, khả năng tác nhân thời gian dài "nhiệm vụ từ vài phút đến vài giờ" của nó xác định một tiêu chuẩn độ phức tạp mới, nên chú ý đến các chi tiết triển khai sandbox và cổng tin nhắn của nó

- **🎯 [TradingAgents](https://github.com/TauricResearch/TradingAgents)** — Tăng trưởng bùng nổ của khung đa tác nhân tài chính, đại diện cho sự thâm nhập sâu của AI Agent từ hội thoại chung vào các lĩnh vực quyết định chuyên nghiệp như giao dịch định lượng và đánh giá rủi ro, chu trình khép kín công nghệ-kinh doanh rõ ràng

- **🎯 [ruflo](https://github.com/ruvnet/ruflo)** — Nền tảng điều phối tác nhân hệ sinh thái Claude, kiến trúc "trí tuệ bầy đàn phân tán" và tích hợp gốc với Claude Code, là cửa sổ quan sát quan trọng cho sự phát triển của hệ sinh thái nhà phát triển Anthropic

- **🎯 [PageIndex](https://github.com/VectifyAI/PageIndex)** — Lộ trình công nghệ "RAG không cần vector, dựa trên suy luận", tiết kiệm 97% dung lượng lưu trữ trong khi vẫn duy trì độ chính xác, có thể là sự thay thế mang tính đột phá cho các cơ sở dữ liệu vector như Milvus/Qdrant, đáng để các nhà ra quyết định công nghệ đánh giá

- **🎯 [project-nomad](https://github.com/Crosstalk-Solutions/project-nomad)** — Sự đổi mới kịch bản độc đáo của máy tính sinh tồn AI ngoại tuyến, kết hợp tính toán biên với nhu cầu môi trường khắc nghiệt, có thể mở ra một phân khúc thị trường mới cho phần cứng AI

---

*Báo cáo này được tạo dựa trên dữ liệu GitHub Trending và tìm kiếm theo chủ đề ngày 2026-03-25*

---
*Bản tin hàng ngày này được tạo tự động bởi [agents-radar](https://github.com/duanyytop/agents-radar).*