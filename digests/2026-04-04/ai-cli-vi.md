# Nhật ký Cộng đồng Công cụ AI CLI 2026-04-04

> Thời gian tạo: 2026-04-04 00:10 UTC | Công cụ được bao phủ: 8

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## So sánh ngang

# Báo cáo phân tích so sánh ngang hệ sinh thái công cụ AI CLI | 2026-04-04

---

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái công cụ AI CLI hiện tại thể hiện một cấu trúc **"một siêu cường, nhiều thế lực mạnh, phân hóa theo chiều dọc"**: Claude Code đã chiếm được tâm trí doanh nghiệp nhờ lợi thế đi đầu trong hệ sinh thái MCP, nhưng đối mặt với khủng hoảng niềm tin về tính minh bạch của hạn ngạch; OpenAI Codex theo đuổi hiệu suất tối thượng với việc tái cấu trúc bằng Rust, kiến trúc đại lý phụ (sub-agent) đang nhanh chóng trưởng thành; Google Gemini CLI dựa vào khả năng mô hình để phát triển mạnh mẽ kiến trúc quản lý ngữ cảnh; các nhà sản xuất Trung Quốc (Kimi, Qwen) tạo sự khác biệt bằng cách tích hợp sâu IDE và trải nghiệm nội địa hóa; các giải pháp thay thế mã nguồn mở như OpenCode, Pi liên tục đổi mới về khả năng tương thích mô hình và khả năng mở rộng. Ngành công nghiệp nói chung đang chuyển đổi từ **"chức năng khả dụng" sang "độ tin cậy cấp doanh nghiệp"**, với tính minh bạch chi phí, hệ sinh thái MCP và điều phối đa đại lý trở thành những hướng đi chung cần giải quyết.

---

## 2. So sánh mức độ hoạt động của từng công cụ

| Công cụ | Issues (24h) | PRs (24h) | Release | Động thái quan trọng |
|:---|:---:|:---:|:---|:---|
| **Claude Code** | 50+ | 10+ | Không | Khủng hoảng niềm tin do tiêu thụ hạn ngạch bất thường (#38335, #43274); các vấn đề ủy quyền/hết hạn MCP bùng phát; các PR kỹ thuật đảo ngược mã nguồn mở tiếp tục xuất hiện |
| **OpenAI Codex** | 50+ | 10+ | rust-v0.119.0-alpha.6~8 | Lượng tiêu thụ token mất kiểm soát (#14593) lan rộng với nhiều lượt thích; bảng điều khiển TUI đại lý phụ, các cơ sở hạ tầng như nhân cách tùy chỉnh đang được lặp lại nhanh chóng |
| **Gemini CLI** | 15+ | 10+ | Không | Tranh cãi về báo cáo sai hạn ngạch trả phí (#24396); tái cấu trúc kiến trúc Episodic Context Manager (#24643) đánh dấu sự thay đổi về chất của công nghệ |
| **Copilot CLI** | 37 | 0 | **v1.0.17** | Hệ thống kỹ năng tích hợp được ra mắt; hỗ trợ MCP OAuth HTTPS; mức độ đóng góp của cộng đồng thấp |
| **Kimi CLI** | 15 | 15 | Không | **Đề xuất tái cấu trúc Python → Bun+TS (#1707)** gây ra cuộc thảo luận lớn về lộ trình kỹ thuật; sửa lỗi ổn định như SetTodoList storm |
| **OpenCode** | 50+ | 50+ | Không | Sửa lỗi khẩn cấp lỗ hổng bảo mật chế độ Plan; khả năng tương thích đa mô hình (Gemini/Kimi/Qwen) trở thành tâm điểm; vấn đề "Preparing write" bị kẹt dai dẳng chưa được giải quyết |
| **Pi** | 23 | 4 | **v0.65.0** | Ra mắt API Session Runtime; tối ưu hóa hệ sinh thái mô hình cục bộ như tích hợp Ollama, thống kê bộ nhớ đệm |
| **Qwen Code** | 10+ | 10+ | **v0.14.0** | Vấn đề ảo giác/vòng lặp của mô hình Qwen 3.6 trở thành khủng hoảng chất lượng; tối ưu hóa hiệu suất dày đặc như thực thi song song công cụ, kết nối lại MCP |

> **Phân cấp mức độ hoạt động**: OpenCode > Claude Code/Codex > Kimi/Gemini/Qwen > Pi > Copilot CLI

---

## 3. Hướng chức năng được quan tâm chung

| Hướng chức năng | Công cụ liên quan | Nhu cầu & điểm đau cụ thể |
|:---|:---|:---|
| **Minh bạch chi phí/hạn ngạch** | Claude Code, Codex, Gemini CLI | Kế hoạch Claude Code Max tiêu tốn 200 đô la Mỹ trong 1 giờ (#43274); Token của Codex Business tăng tốc bất thường (#14593); Gemini AI Pro và hạn ngạch CLI tách biệt gây báo cáo sai (#24396). **Nhu cầu chung**: giám sát tiêu thụ thời gian thực, API chi tiết thanh toán, cảnh báo tiêu thụ bất thường |
| **Sự trưởng thành của hệ sinh thái MCP** | Claude Code, Codex, Copilot CLI, Qwen Code | Header ủy quyền bị bỏ qua (#33817), kiểm soát hết hạn không hiệu quả, lệnh gọi công cụ chế độ exec bị hủy (#16685), xác minh anyOf thất bại (#2839). **Nhu cầu chung**: bộ kiểm thử tính nhất quán của giao thức, cơ chế kết nối lại cấp sản xuất, chiến lược hiển thị công cụ chi tiết |
| **Đại lý phụ/Điều phối đa đại lý** | Codex, Claude Code, Kimi CLI | Cấu hình mô hình đại lý phụ (#11701), cơ chế gián đoạn tin nhắn (#43124), làm trống hàng đợi giữa chừng (#2854). **Nhu cầu chung**: giao thức giao tiếp đại lý cha-con, chiến lược phân tách nhiệm vụ, chia sẻ trạng thái giữa các đại lý |
| **Ngữ cảnh/Quản lý bộ nhớ** | Gemini CLI, Kimi CLI, Claude Code | Bộ nhớ tăng dần thay thế `/compact` tốn kém (#1691), Episodic Context Manager (#24643), nén phiên dài. **Nhu cầu chung**: IR có cấu trúc thay thế thao tác chuỗi, chiến lược lưu trữ phân cấp, thuật toán nén ngữ nghĩa |
| **Tích hợp sâu IDE** | Kimi CLI, Copilot CLI, OpenCode | Khởi tạo ACP IDEA thất bại (#1737), tính tương thích của terminal VS Code (#16100), tích hợp Zed. **Nhu cầu chung**: tính ổn định cấp LSP, tính mạnh mẽ của giao tiếp liên tiến trình, Ghost text/inline diff |

---

## 4. Phân tích định vị khác biệt

| Công cụ | Trọng tâm cốt lõi | Người dùng mục tiêu | Đặc điểm lộ trình kỹ thuật |
|:---|:---|:---|:---|
| **Claude Code** | Tiên phong hệ sinh thái MCP, tuân thủ doanh nghiệp | Doanh nghiệp vừa và lớn, nhóm nhạy cảm về an ninh | Ưu tiên mã nguồn đóng, TUI trưởng thành, khả năng mở rộng có thể lập trình Hookify; **Rủi ro**: khủng hoảng niềm tin về hạn ngạch, áp lực kỹ thuật đảo ngược mã nguồn mở |
| **OpenAI Codex** | Hiệu suất tối thượng, kiến trúc đại lý phụ | Nhà phát triển yêu cầu hiệu suất cao, nhóm gốc AI | Tái cấu trúc toàn diện bằng Rust, sandbox bubblewrap, khả năng thực thi từ xa; **Ưu điểm**: cơ sở hạ tầng đo lường phân tích hàng đầu |
| **Gemini CLI** | Tích hợp sâu khả năng mô hình, đổi mới kiến trúc | Người dùng hệ sinh thái Google, cảnh liên ngữ cảnh dài | Kiến trúc quản lý ngữ cảnh mạnh mẽ (pipeline IR, bộ xử lý hạ cấp), hiểu mã nhận biết AST; **Đặc điểm**: sự lan tỏa văn hóa kỹ thuật nội bộ |
| **Copilot CLI** | Tích hợp liền mạch hệ sinh thái GitHub | Người dùng nặng GitHub, người đăng ký Copilot hiện tại | Hệ thống kỹ năng tích hợp sẵn, kiểm soát chính sách nghiêm ngặt; **Nhược điểm**: đóng góp cộng đồng thấp, nợ tương thích Windows/Alpine |
| **Kimi CLI** | Trải nghiệm nhà phát triển Trung Quốc, tích hợp IDE | Nhà phát triển tiếng Trung, người dùng JetBrains | Gói công nghệ Python (đối mặt với tái cấu trúc), hệ thống quy tắc ba cấp, tương thích plugin Claude; **Biến số**: đề xuất tái cấu trúc Bun+TS (#1707) |
| **OpenCode** | Thay thế mã nguồn mở, trung lập mô hình | Nhóm ưu tiên mã nguồn mở, người dùng chiến lược đa mô hình | Cộng đồng mã nguồn mở năng động nhất, hỗ trợ gốc LiteLLM, đổi mới chế độ Plan/Act; **Thách thức**: nợ ổn định (#11112) |
| **Pi** | Hệ sinh thái mô hình cục bộ, khả năng mở rộng | Người dùng nhạy cảm về quyền riêng tư, người dùng tự lưu trữ Ollama | Kiến trúc API Session Runtime thống nhất, hệ thống tiện ích mở rộng widget; **Định vị**: đại lý có thể lập trình trong hệ sinh thái VS Code |
| **Qwen Code** | Tối ưu hóa mô hình tiếng Trung, song song công cụ | Người dùng Aliyun/Bailian, cảnh mã tiếng Trung | Song song công cụ thông minh (#2864), hỗ trợ Jupyter, hệ thống Hooks; **Điểm nghẽn**: khủng hoảng chất lượng mô hình 3.6 |

---

## 5. Mức độ phổ biến và sự trưởng thành của cộng đồng

### Ma trận mức độ phổ biến của cộng đồng

```
Mức độ hoạt động cao │  OpenCode (50+/50+)    Kimi CLI (15/15, tranh cãi tái cấu trúc)
                   │  Claude Code (50+/10+)  Codex (50+/10+)
                   │
Mức độ hoạt động trung bình│  Gemini CLI (15+/10+)   Qwen Code (10+/10+)
                   │  Pi (23/4, phát hành phiên bản)
                   │
Mức độ hoạt động thấp │  Copilot CLI (37/0)  ← Do chính thức dẫn dắt, đóng góp cộng đồng yếu
                   └────────────────────────────────────────────
                     Lặp lại nhanh chóng giai đoạn đầu    →    Giai đoạn trưởng thành ổn định
```

### Đánh giá sự trưởng thành

| Giai đoạn | Công cụ | Đặc điểm |
|:---|:---|:---|
| **Sẵn sàng sản xuất** | Claude Code, Codex | Được xác minh bởi quy mô người dùng doanh nghiệp trả phí, nhưng đối mặt với khủng hoảng niềm tin về hạn ngạch/ổn định |
| **Lặp lại nhanh chóng** | Gemini CLI, Kimi CLI, OpenCode | Tái cấu trúc ở cấp độ kiến trúc thường xuyên, biên độ chức năng mở rộng nhanh chóng, biến động về ổn định |
| **Xây dựng hệ sinh thái** | Pi, Qwen Code | Chức năng cốt lõi đã hoàn thiện, hệ thống mở rộng, thích ứng mô hình cục bộ trở thành trọng tâm |
| **Chính thức dẫn dắt** | Copilot CLI | Tốc độ phát hành phiên bản ổn định, mức độ tham gia của cộng đồng thấp, chức năng chủ yếu dựa trên kế hoạch chính thức |

---

## 6. Tín hiệu xu hướng đáng chú ý

| Tín hiệu xu hướng | Nguồn bằng chứng | Giá trị tham khảo cho nhà phát triển |
|:---|:---|:---|
| **Minh bạch chi phí trở thành năng lực cạnh tranh khác biệt** | Claude Code/Codex/Gemini đồng loạt bùng phát tranh cãi về hạn ngạch | Khi lựa chọn, ưu tiên xác minh: ① API tiêu thụ thời gian thực ② Cơ chế phát hiện bất thường ③ Tốc độ phản hồi yêu cầu thanh toán; Khuyến nghị tự xây dựng kiểm toán đại lý (ví dụ: #43319) |
| **MCP chuyển từ "tiêu chuẩn giao thức" sang cạnh tranh "chất lượng triển khai"** | Các vấn đề MCP của công cụ đồng loạt bùng phát (ủy quyền, hết hạn, chế độ exec) | Trước khi triển khai trong môi trường sản xuất, bắt buộc kiểm tra: ① Tính ổn định của kết nối dài ② Chiến lược kết nối lại lỗi ③ Ma trận tương thích lược đồ công cụ |
| **Thay đổi chất kiến trúc quản lý ngữ cảnh: Chuỗi ký tự → IR có cấu trúc** | Gemini #24643 (Episodic Context Manager), Kimi #1691 (bộ nhớ tăng dần) | Khi lựa chọn cảnh ngữ cảnh dài, chú trọng: ① Có hỗ trợ nén ngữ nghĩa không ② Khả năng cấu hình chiến lược hạ cấp ③ Giới hạn cứng của ngân sách token |
| **Đại lý phụ chuyển từ "chức năng thử nghiệm" sang "điều phối sản xuất"** | Bảng điều khiển TUI đại lý phụ của Codex, gián đoạn tin nhắn đại lý phụ của Claude Code, song song thông minh của Kimi | Khi đánh giá khả năng đa đại lý, ưu tiên kiểm tra: ① Độ trễ giao tiếp cha-con ② Khả năng cấu hình chiến lược phân tách nhiệm vụ ③ Cơ chế cô lập lỗi |
| **"Mã nguồn mở hóa cộng đồng" do kỹ thuật đảo ngược thúc đẩy** | Claude Code #41518 (trích xuất mã nguồn 1906 tệp bằng source map), #41447 (PR biểu tượng mã nguồn mở) | Khi lựa chọn công cụ mã nguồn đóng, cần đánh giá: ① Mức độ hoạt động của kỹ thuật đảo ngược cộng đồng ② Cam kết về tính ổn định của API ③ Rủi ro khóa nhà cung cấp dài hạn |
| **Tích hợp IDE nâng cấp từ "plugin" thành "trải nghiệm gốc"** | Kimi IDEA ACP, bố cục widget Pi, hệ thống kỹ năng Copilot | Khi chuẩn hóa lựa chọn nhóm, ưu tiên xem xét: ① Mức độ hoàn chỉnh của giao thức LSP ② Tính nhất quán giữa các IDE ③ Trải nghiệm inline diff/ghost text |
| **Lộ trình kỹ thuật của các nhà sản xuất Trung Quốc phân hóa: Tái cấu trúc mạnh mẽ vs Tối ưu hóa dần dần** | Đề xuất tái cấu trúc Kimi Python → Bun+TS vs tối ưu hóa song song Qwen | Chú ý đến văn hóa kỹ thuật đằng sau lựa chọn gói công nghệ: tái cấu trúc mạnh mẽ phù hợp với việc đuổi kịp nhanh chóng, tối ưu hóa dần dần phù hợp với cảnh ưu tiên ổn định |

---

*Báo cáo dựa trên dữ liệu công khai GitHub của từng công cụ vào ngày 2026-04-04 | Phù hợp cho người ra quyết định kỹ thuật, tham khảo lựa chọn công cụ cho nhà phát triển*

---

## Báo cáo chi tiết từng công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Điểm nóng cộng đồng Claude Code Skills

> Nguồn dữ liệu: [anthropics/skills](https://github.com/anthropics/skills)

# Báo cáo điểm nóng cộng đồng Claude Code Skills (tính đến ngày 2026-04-04)

---

## 1. Bảng xếp hạng Skills phổ biến (theo mức độ quan tâm của cộng đồng)

| Xếp hạng | Skill | Mô tả chức năng | Trạng thái | Liên kết |
|:---|:---|:---|:---|:---|
| 1 | **document-typography** | Kiểm soát chất lượng bố cục tài liệu AI, giải quyết các vấn đề bố cục phổ biến như dòng cô đơn/dòng côi, đánh số sai | 🟡 Mở | [PR #514](https://github.com/anthropics/skills/pull/514) |
| 2 | **frontend-design** | Phiên bản cải tiến quy tắc thiết kế giao diện người dùng, nâng cao khả năng thực thi và độ rõ ràng trong cuộc hội thoại một lượt | 🟡 Mở | [PR #210](https://github.com/anthropics/skills/pull/210) |
| 3 | **skill-quality-analyzer + skill-security-analyzer** | Meta-skill: tự động đánh giá chất lượng và bảo mật của các Skill khác (điểm theo năm tiêu chí) | 🟡 Mở | [PR #83](https://github.com/anthropics/skills/pull/83) |
| 4 | **ODT skill** | Tạo tài liệu OpenDocument, điền mẫu và phân tích cú pháp ODT → HTML (hệ sinh thái LibreOffice) | 🟡 Mở | [PR #486](https://github.com/anthropics/skills/pull/486) |
| 5 | **codebase-inventory-audit** | Quản trị mã nguồn: nhận diện mã chết, tệp không sử dụng, thiếu tài liệu, v.v. trong quy trình kiểm toán 10 bước | 🟡 Mở | [PR #147](https://github.com/anthropics/skills/pull/147) |
| 6 | **shodh-memory** | Hệ thống ghi nhớ bền vững cho đại lý AI, duy trì ngữ cảnh giữa các phiên trò chuyện | 🟡 Mở | [PR #154](https://github.com/anthropics/skills/pull/154) |
| 7 | **testing-patterns** | Hướng dẫn kiểm thử toàn diện: Testing Trophy, mẫu AAA, kiểm thử thành phần React, v.v. | 🟡 Mở | [PR #723](https://github.com/anthropics/skills/pull/723) |
| 8 | **sensory** | Tự động hóa gốc macOS (AppleScript), thay thế việc sử dụng máy tính dựa trên ảnh chụp màn hình | 🟡 Mở | [PR #806](https://github.com/anthropics/skills/pull/806) |

> **Điểm nóng thảo luận**: document-typography nhận được nhiều sự chú ý nhất do trực tiếp giải quyết vấn đề phổ biến là "bố cục tài liệu do AI tạo ra xấu xí"; meta-skills (bộ phân tích chất lượng/bảo mật) phản ánh nhu cầu tự quản trị của hệ sinh thái Skill.

---

## 2. Xu hướng nhu cầu cộng đồng (trích xuất từ Issues)

| Hướng | Nhu cầu cụ thể | Issue đại diện |
|:---|:---|:---|
| **Quản trị cấp doanh nghiệp** | Chia sẻ Skill trong tổ chức, tương thích SSO, kiểm soát quyền | [#228](https://github.com/anthropics/skills/issues/228) Chia sẻ cấp tổ chức, [#532](https://github.com/anthropics/skills/issues/532) Người dùng SSO không sử dụng được |
| **Bảo mật và Niềm tin** | Cô lập không gian tên Skill cộng đồng (ngăn mạo danh chính thức), quản trị bảo mật đại lý | [#492](https://github.com/anthropics/skills/issues/492) Lạm dụng ranh giới tin cậy, [#412](https://github.com/anthropics/skills/issues/412) Mô hình quản trị đại lý |
| **Tiêu chuẩn hóa cơ sở hạ tầng** | Skill hiển thị dưới dạng MCP, tính ổn định API, tương thích Bedrock | [#16](https://github.com/anthropics/skills/issues/16) Giao thức MCP, [#29](https://github.com/anthropics/skills/issues/29) Hỗ trợ Bedrock |
| **Trải nghiệm nhà phát triển** | Cải tiến chuỗi công cụ skill-creator, xác thực YAML, tiêu chuẩn tài liệu | [#202](https://github.com/anthropics/skills/issues/202) Thực tiễn tốt nhất skill-creator, [#509](https://github.com/anthropics/skills/pull/509) CONTRIBUTING.md |
| **Quản lý vòng đời Skill** | Xóa phiên bản, cơ chế khử trùng lặp, khôi phục lỗi | [#62](https://github.com/anthropics/skills/issues/62) Skill bị mất, [#189](https://github.com/anthropics/skills/issues/189) Cài đặt trùng lặp, [#403](https://github.com/anthropics/skills/issues/403) Không thể xóa phiên bản |

---

## 3. Các Skill tiềm năng cao chờ hợp nhất

| Skill | Giá trị cốt lõi | Tiến triển chính | Dự kiến triển khai |
|:---|:---|:---|:---|
| **document-typography** | Giải quyết vấn đề bố cục "dặm cuối cùng" của tài liệu AI | Giải pháp kỹ thuật hoàn chỉnh, tác giả liên tục phản hồi góp ý | ⭐ Cao |
| **testing-patterns** | Lấp đầy khoảng trống về thực tiễn tốt nhất kiểm thử toàn diện | Mới tạo ngày 2026-03-22, nội dung bao phủ toàn diện | ⭐ Cao |
| **sensory** | Tự động hóa gốc macOS (hiệu suất tốt hơn giải pháp chụp màn hình) | Thiết kế phân cấp kép, cập nhật gần đây sôi động | ⭐ Cao |
| **quality-playbook** | Khôi phục kỹ thuật chất lượng truyền thống (truy xuất nguồn gốc từ yêu cầu đến kiểm thử) | Định vị độc đáo: kiểm thử từ yêu cầu chứ không phải mã nguồn | ⭐ Trung-cao |
| **SAP-RPT-1-OSS** | Dự đoán dữ liệu ERP doanh nghiệp (mô hình mã nguồn mở SAP) | Skill lĩnh vực dọc, tuân thủ Apache 2.0 | ⭐ Trung-cao |

---

## 4. Nhận định hệ sinh thái Skills

> **Nhu cầu cốt lõi**: Cộng đồng đang chuyển dịch từ "tính năng phong phú" sang "sản xuất đáng tin cậy" - người dùng doanh nghiệp yêu cầu quản trị cấp tổ chức và ranh giới bảo mật, nhà phát triển cần chuỗi công cụ ổn định và giao thức tiêu chuẩn hóa (MCP), trong khi các Skill chất lượng "dặm cuối cùng" như bố cục tài liệu, phạm vi kiểm thử trở thành trọng tâm cạnh tranh khác biệt.

---

---

# Nhật ký Cộng đồng Claude Code | 2026-04-04

## Tóm tắt hôm nay

Trọng tâm cộng đồng hôm nay tập trung vào hai chủ đề chính: **tiêu thụ hạn ngạch bất thường** và **vấn đề hệ sinh thái MCP**. Người dùng của kế hoạch Max báo cáo hạn ngạch bị tiêu hết trong vòng một giờ (#38335, #43274), gây ra các cuộc thảo luận quy mô lớn; đồng thời các vấn đề cơ sở hạ tầng như ủy quyền máy chủ MCP, kiểm soát hết hạn, hiển thị công cụ bùng phát, cho thấy việc tích hợp hệ sinh thái đang đi vào vùng nước sâu. Nhu cầu mã nguồn mở tiếp tục tăng cao, với nhiều PR cố gắng thúc đẩy tính minh bạch thông qua giải mã hoặc bổ sung tài liệu.

---

## Issues nóng của cộng đồng

| # | Tiêu đề | Mức độ quan trọng | Phản ứng cộng đồng |
|---|------|--------|---------|
| [#38335](https://github.com/anthropics/claude-code/issues/38335) | **Giới hạn phiên kế hoạch Max tiêu thụ quá nhanh** | 🔴 **Quan trọng** | 399 bình luận, 330👍, người dùng doanh nghiệp bị ảnh hưởng trên diện rộng, Anthropic chưa phản hồi chính thức |
| [#43274](https://github.com/anthropics/claude-code/issues/43274) | **Kế hoạch Max 20x tiêu tốn 200 đô la Mỹ/tháng trong 1 giờ** | 🔴 **Quan trọng** | Người dùng trả phí theo nhóm báo cáo, xác nhận chéo với #38335, chỉ ra lỗi tiềm ẩn trong hệ thống thanh toán |
| [#3412](https://github.com/anthropics/claude-code/issues/3412) | **Cho phép chỉnh sửa khối văn bản đã dán trước khi gửi** | 🟡 Cao | Nhu cầu cốt lõi của người dùng nhập liệu không rào cản/giọng nói, 64 bình luận, 208👍, chưa được giải quyết trong thời gian dài |
| [#36582](https://github.com/anthropics/claude-code/issues/36582) | **Cuộn tự động lên đầu terminal khi phiên dài** | 🟡 Cao | Ảnh hưởng nghiêm trọng đến trải nghiệm phiên dài, 110👍, vấn đề ổn định TUI |
| [#37793](https://github.com/anthropics/claude-code/issues/37793) | **MCP quá nhiều dẫn đến prompt đại lý phụ vượt giới hạn** | 🟡 Cao | Định nghĩa công cụ vượt quá 200k token, đại lý phụ thất bại trực tiếp, điểm nghẽn kiến trúc |
| [#33817](https://github.com/anthropics/claude-code/issues/33817) | **Bỏ qua MCP Authorization Header** | 🟡 Cao | Lỗi hồi quy, hoạt động bình thường hôm qua nay bị lỗi, ảnh hưởng môi trường sản xuất |
| [#43319](https://github.com/anthropics/claude-code/issues/43319) | **72% yêu cầu API rỗng tiêu tốn hạn ngạch** | 🟡 Cao | Người dùng phát hiện qua gói proxy, tiết lộ nguyên nhân kỹ thuật của việc tiêu thụ hạn ngạch bất thường |
| [#43320](https://github.com/anthropics/claude-code/issues/43320) | **Đại lý chính của tác vụ định kỳ không truy cập được MCP** | 🟡 Cao | Hình thành mô hình với #42323: Hiển thị công cụ MCP không nhất quán trong các cảnh từ xa/định kỳ |
| [#43100](https://github.com/anthropics/claude-code/issues/43100) | **Máy chủ LSP bị mất khi khởi tạo lại** | 🟡 Trung bình | Ảnh hưởng chức năng thông minh mã, có các bước tái hiện |
| [#43318](https://github.com/anthropics/claude-code/issues/43318) | **Claude tự động xây dựng bộ giải captcha mà không có sự đồng ý** | 🟡 Trung bình | Nhạy cảm về bảo mật/tuân thủ, liên quan đến vấn đề biên độ tự động hóa |

---

## Tiến trình PR quan trọng

| # | Tiêu đề | Loại | Nội dung cốt lõi |
|---|------|------|---------|
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | **Mã nguồn mở Claude Code** | 🔥 Yêu cầu mã nguồn mở | PR mang tính biểu tượng, đóng nhiều yêu cầu mã nguồn mở lịch sử, phản ánh nhu cầu mạnh mẽ về tính minh bạch của cộng đồng |
| [#41518](https://github.com/anthropics/claude-code/pull/41518) | **Mã nguồn mở hoàn toàn Claude Code** | 🔥 Kỹ thuật đảo ngược | Trích xuất 1906 tệp TypeScript từ source map, xây dựng và chạy thành công, xác minh tính khả thi về mặt kỹ thuật |
| [#41611](https://github.com/anthropics/claude-code/pull/41611) | **Bổ sung mã nguồn bị thiếu** | 🔥 Kỹ thuật đảo ngược | Phối hợp với #41518, thúc đẩy hệ thống hóa tính minh bạch của mã nguồn |
| [#35710](https://github.com/anthropics/claude-code/pull/35710) | **Sửa lỗi màn hình xanh Windows Wof.sys** | 🐛 Sửa lỗi quan trọng | Thực thi song song công cụ gây lỗi trình điều khiển hạt nhân, thêm khóa loại trừ để giới hạn đồng thời |
| [#43124](https://github.com/anthropics/claude-code/pull/43124) | **Cơ chế gián đoạn tin nhắn đại lý phụ** | ✨ Cải tiến kiến trúc | Giải quyết lỗi cốt lõi là không thể nhận tin nhắn giữa chừng khi đại lý phụ gọi công cụ hàng loạt |
| [#43206](https://github.com/anthropics/claude-code/pull/43206) | **Sửa lỗi thư mục làm việc --resume không khớp** | 🐛 Sửa lỗi trải nghiệm | Cung cấp trình bao bọc shell để giải quyết lỗi xác thực gây hiểu lầm khi khôi phục phiên |
| [#42996](https://github.com/anthropics/claude-code/pull/42996) | **Giao thức đồng bộ hóa trạng thái đa máy MEP** | ✨ Giải pháp đổi mới | "Giao thức loại bỏ rối loạn thịt", đạt được duy trì trạng thái phiên giữa các thiết bị mà không cần cơ sở hạ tầng |
| [#43166](https://github.com/anthropics/claude-code/pull/43166) | **Thêm /list-slash-commands** | ✨ Khả dụng | Giải quyết vấn đề khám phá lệnh slash, nâng cao khả năng khám phá quy trình làm việc |
| [#42886](https://github.com/anthropics/claude-code/pull/42886) | **Lệnh kiểm tra và gỡ lỗi Hookify** | ✨ Công cụ nhà phát triển | Cơ chế xác minh trước quy tắc, giảm chi phí gỡ lỗi hook |
| [#42944](https://github.com/anthropics/claude-code/pull/42944) | **Sửa lỗi sự kiện giới hạn giai đoạn Hookify** | 🐛 Sửa lỗi | Sửa lỗi sự kiện giai đoạn pre/post bị bỏ qua một cách thầm lặng |

---

## Xu hướng nhu cầu chức năng

Dựa trên phân tích 50 Issue hoạt động hôm nay, trọng tâm quan tâm của cộng đồng hiển thị bốn hướng chính:

```
1. Tính minh bạch chi phí và hạn ngạch ████████████████████  28%
   - Tiêu thụ bất thường, chi tiết thanh toán, giám sát hạn ngạch, vấn đề bỏ trống vòng lặp
   
2. Sự trưởng thành của hệ sinh thái MCP ████████████████░░░░  22%
   - Cơ chế ủy quyền, kiểm soát hết hạn, hiển thị công cụ, khám phá máy chủ
   
3. Trải nghiệm Terminal/IDE ██████████████░░░░░░  20%
   - Hành vi cuộn, cấu hình màu sắc, chỉnh sửa dán, tích hợp VSCode
   
4. Đại lý và Tự động hóa ███████████░░░░░░░░░  16%
   - Giao tiếp đại lý phụ, tác vụ định kỳ, điều khiển từ xa, duy trì trạng thái
   
5. Mở rộng và Khả năng mở rộng ██████░░░░░░░░░░░░░░  14%
   - Yêu cầu mã nguồn mở, hệ sinh thái Hookify, hệ thống plugin
```

---

## Điểm quan tâm của nhà phát triển

### 🔥 Điểm đau khẩn cấp
- **Khủng hoảng niềm tin hệ thống hạn ngạch** : Nhiều báo cáo độc lập xác minh kế hoạch Max có vấn đề tiêu thụ bất thường, người dùng doanh nghiệp bắt đầu tự xây dựng kiểm toán đại lý (#43319), cần lời giải thích khẩn cấp từ chính thức
- **Tính ổn định sản xuất MCP** : Các vấn đề về ủy quyền trả lại, hết hạn không hiệu quả, công cụ không hiển thị bùng phát đồng loạt, cho thấy khoảng cách giữa triển khai giao thức và tài liệu

### 📌 Nhu cầu tần suất cao
| Nhu cầu | Issue đại diện | Hiện trạng |
|-----------|-----------|------|
| Chỉnh sửa trước khi dán nội dung | #3412 | Tạo ngày 2025-07, cản trở cảnh không rào cản |
| Hỗ trợ phân chia màn hình Ghostty | #24189 | Thích ứng terminal hiện đại bị tụt hậu |
| Lệnh slash điều khiển từ xa | #28351 | Khả năng API không tương đương với CLI |
| Có thể ẩn vai trò bạn đồng hành | #42212 | Sự ép buộc của UI so với sự ưu tiên của người dùng xung đột |

### 💡 Mô hình mới nổi
- **Mã nguồn mở hóa thông qua kỹ thuật đảo ngược** : Các PR như #41518 đang thúc đẩy việc trích xuất source map trở nên hệ thống hóa, cộng đồng đang tự xây dựng "lõi mở"
- **Hệ sinh thái Hookify sôi động** : 4 PR liên quan cho thấy nhu cầu mạnh mẽ của nhà phát triển về các điểm chặn có thể lập trình
- **Đổi mới quản lý trạng thái phiên** : Giao thức MEP (#42996) đại diện cho các giải pháp sáng tạo của người dùng về tính liên tục giữa các thiết bị

---

*Nhật ký hàng ngày dựa trên dữ liệu công khai GitHub, không đại diện cho lập trường chính thức của Anthropic.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Nhật ký Cộng đồng OpenAI Codex | 2026-04-04

---

## 1. Tóm tắt hôm nay

Cộng đồng hôm nay tập trung vào **tiêu thụ chi phí và hiệu quả tài nguyên**: Issue được yêu thích nhất #14593 tiếp tục lan rộng, người dùng báo cáo tốc độ tiêu thụ Token bất thường; đồng thời nhiều PR đang thúc đẩy cơ sở hạ tầng đo lường phân tích (analytics) và đại lý phụ (subagent). CLI Rust liên tục phát hành 3 phiên bản alpha, sửa lỗi ổn định sandbox và TUI.

---

## 2. Phát hành phiên bản

| Phiên bản | Mô tả |
|:---|:---|
| `rust-v0.119.0-alpha.8` / `alpha.7` / `alpha.6` | Lặp lại liên tục sửa lỗi, liên quan đến hành vi sandbox bubblewrap, hiển thị TUI và tính ổn định thực thi từ xa |

> Lưu ý: Ghi chú phát hành khá ngắn gọn, nên chú ý thảo luận sửa lỗi hồi quy trong Issue tương ứng.

---

## 3. Issues nóng của cộng đồng

| # | Tiêu đề | Trạng thái | Mức độ phổ biến | Điểm chính |
|:---|:---|:---|:---|:---|
| [#14593](https://github.com/openai/codex/issues/14593) | Đốt cháy token rất nhanh | 🔴 MỞ | 422💬 162👍 | **Khủng hoảng chi phí**: Người dùng đăng ký Business báo cáo Token tiêu thụ tăng tốc bất thường, cộng đồng nhiều "+1" xác nhận, cần phản hồi khẩn cấp từ chính thức |
| [#11701](https://github.com/openai/codex/issues/11701) | Cấu hình và điều phối đại lý phụ | 🟢 ĐÃ ĐÓNG | 69💬 48👍 | Nhu cầu cấu hình mô hình đại lý phụ đã được giải quyết, hỗ trợ cấu hình tham số đại lý phụ trong `~/.codex/config.toml` |
| [#2558](https://github.com/openai/codex/issues/2558) | Đầu ra TUI bị cắt cụt trong Zellij | 🟢 ĐÃ ĐÓNG | 58💬 109👍 | Sửa lỗi tương thích trình nhân bản terminal, Issue dài hạn được yêu thích cuối cùng cũng được đóng |
| [#11325](https://github.com/openai/codex/issues/11325) | Lệnh `/compact` thủ công trong ứng dụng Codex | 🔴 MỞ | 42💬 117👍 | **Thiếu chức năng**: CLI có `/compact`, ứng dụng desktop thiếu, nhu cầu được yêu thích cao chưa được đáp ứng |
| [#8648](https://github.com/openai/codex/issues/8648) | Trả lời các tin nhắn trước thay vì tin nhắn mới nhất | 🔴 MỞ | 31💬 21👍 | Lỗi hiểu ngữ cảnh: Mô hình "lùi lại" trả lời tin nhắn cũ trong hội thoại nhiều lượt |
| [#11981](https://github.com/openai/codex/issues/11981) | 100% Sử dụng CPU với một đại lý | 🔴 MỞ | 29💬 3👍 | Vấn đề hiệu quả tài nguyên, người dùng đăng ký Plus phản ánh, cần chẩn đoán thêm |
| [#14936](https://github.com/openai/codex/issues/14936) | Lời nhắc phê duyệt bwrap cho hầu hết mọi lệnh | 🔴 MỞ | 29💬 15👍 | **Lỗi hồi quy**: Sau phiên bản 0.115.0, bubblewrap hiển thị lời nhắc quá mức, ảnh hưởng nghiêm trọng đến quy trình làm việc |
| [#14860](https://github.com/openai/codex/issues/14860) | Lỗi khi chạy tác vụ compact từ xa | 🔴 MỞ | 22💬 12👍 | `/compact` thất bại trong chế độ thực thi từ xa, ảnh hưởng đến cảnh phát triển phân tán |
| [#16685](https://github.com/openai/codex/issues/16685) | Lệnh gọi công cụ MCP bị hủy trong chế độ exec | 🔴 MỞ | 5💬 | **Hồi quy mới**: Chế độ `codex exec` hoàn toàn không thể sử dụng công cụ MCP, chặn cảnh CI/CD |
| [#16076](https://github.com/openai/codex/issues/16076) | Lệnh shell WSL thất bại do không gian tên bwrap | 🔴 MỞ | 9💬 2👍 | Vấn đề tương thích Windows/WSL, lỗi hồi quy được giới thiệu trong phiên bản 0.115.0 |

---

## 4. Tiến trình PR quan trọng

| # | Tiêu đề | Tác giả | Nội dung cốt lõi |
|:---|:---|:---|:---|
| [#16725](https://github.com/openai/codex/pull/16725) | Ngắt hàng đợi đại lý đã xếp hàng trước sau khi suy luận | aibrahim-oai | Tối ưu hóa hàng đợi tin nhắn đại lý phụ: gửi tin nhắn đã xếp hàng sau khi suy luận hoặc hoàn thành phần mở đầu, cải thiện độ trễ phối hợp đa đại lý |
| [#16594](https://github.com/openai/codex/pull/16594) | Sửa ID phiên nguồn fork trong trạng thái TUI | etraut-openai | Sửa lỗi hiển thị ID phiên nguồn fork trong `/status`, khôi phục khả năng truy nguồn luồng |
| [#16739](https://github.com/openai/codex/pull/16739) | Ổn định bài kiểm tra gián đoạn theo dõi đại lý đa đại lý | etraut-openai | Loại bỏ bài kiểm tra không ổn định trong CI: đợi sự kiện `TurnAborted(Interrupted)` trước khi khẳng định, nâng cao độ tin cậy |
| [#16740](https://github.com/openai/codex/pull/16740) | Đồng bộ hóa đường dẫn bộ nhớ đệm kho lưu trữ Bazel trên Windows | bolinfest | Sửa lỗi CI Windows: thống nhất đường dẫn bộ nhớ đệm Bazel và `actions/cache`, tránh tải lại |
| [#16736](https://github.com/openai/codex/pull/16736) | Di chuyển sandbox thực thi hợp nhất sang máy chủ thực thi | starr-openai | Tái cấu trúc kiến trúc: di chuyển logic khởi chạy sandbox thực thi hợp nhất sang máy chủ thực thi, đặt nền móng cho thực thi từ xa |
| [#16638](https://github.com/openai/codex/pull/16638) | [codex-analytics] dấu thời gian lượt gốc giao thức | rhan-oai | Cơ sở hạ tầng phân tích: dấu thời gian lượt gốc giao thức, hỗ trợ quan sát hiệu suất chi tiết |
| [#16274](https://github.com/openai/codex/pull/16274) | Nhân cách do người dùng xác định và liệt kê máy chủ ứng dụng | etraut-openai | **Tính năng người dùng**: Hỗ trợ tải nhân cách tùy chỉnh từ `~/.codex/personalities`, hợp nhất cấu hình tích hợp và tệp |
| [#13679](https://github.com/openai/codex/pull/13679) | Hành vi thời gian chạy đại lý phụ TUI | friel-openai | Bảng điều khiển thời gian thực đại lý phụ TUI: cố định hiển thị trạng thái đại lý phụ/gác cổng, độc lập với lịch sử hội thoại |
| [#13657](https://github.com/openai/codex/pull/13657) | Kích hoạt phân phối hộp thư đại lý phụ | friel-openai | Phân phối hộp thư đại lý phụ: thực hiện giao tiếp đại lý cha-con có cấu trúc bằng cách chèn các mục phản hồi |
| [#16349](https://github.com/openai/codex/pull/16349) | Vô hiệu hóa công cụ ràng buộc env khi máy chủ exec là none | starr-openai | Vô hiệu hóa rõ ràng môi trường: ánh xạ `CODEX_EXEC_SERVER_URL=none` thành chế độ vô hiệu hóa rõ ràng, xây dựng công cụ rõ ràng hơn |

---

## 5. Xu hướng nhu cầu chức năng

Từ 50 Issue hoạt động được trích xuất các trọng tâm cộng đồng:

| Hướng | Issue đại diện | Cường độ nhu cầu |
|:---|:---|:---|
| **Kiểm soát chi phí và minh bạch** | #14593, #11325 | 🔥🔥🔥 Cực cao |
| **Điều phối đại lý phụ/đa đại lý** | #11701, #14039, #13679 | 🔥🔥🔥 Cực cao |
| **Hoàn thiện hệ sinh thái MCP** | #13405, #15824, #16685, #16501 | 🔥🔥🔥 Cực cao |
| **Tính ổn định Sandbox** | #14936, #16076, #15282 | 🔥🔥🔥 Cực cao |
| **Bổ sung chức năng ứng dụng desktop** | #11325, #11981, #14162 | 🔥🔥 Cao |
| **Cấu hình doanh nghiệp/đại lý** | #6060, #14039 | 🔥🔥 Cao |
| **Tương thích Windows/WSL** | #16076, #13689, #14411, #16696 | 🔥🔥 Cao |

> **Nhận định xu hướng**: Kiến trúc đại lý phụ đang chuyển từ "chức năng thử nghiệm" sang "sẵn sàng sản xuất", cộng đồng rất cần sự linh hoạt trong cấu hình, khả năng quan sát và tính ổn định đa nền tảng; mức độ trưởng thành của chuỗi công cụ MCP trở thành điểm nghẽn cản trở.

---

## 6. Điểm quan tâm của nhà phát triển

### 🔴 Điểm đau khẩn cấp
- **Token tiêu thụ mất kiểm soát** (#14593): Chi phí người dùng Business tăng vọt, thiếu minh bạch và phương tiện kiểm soát
- **Hồi quy Sandbox** (#14936, #16076): Các vấn đề của bubblewrap được giới thiệu trong phiên bản 0.115.0 ảnh hưởng đến Linux/WSL
- **MCP thất bại trong chế độ exec** (#16685): Chặn cảnh tự động hóa/CI

### 🟡 Nhu cầu tần suất cao
- **`/compact` thủ công** : Tính năng tương đương của ứng dụng desktop và CLI (#11325, 117👍)
- **Lựa chọn mô hình đại lý phụ** : Phân công các mô hình/nhà cung cấp khác nhau theo nhiệm vụ (#14039)
- **Cấu hình proxy doanh nghiệp** : Hỗ trợ `http_proxy` (#6060, 28👍)

### 🟢 Tiến triển tích cực
- Cơ sở hạ tầng như bảng điều khiển TUI đại lý phụ, nhân cách tùy chỉnh, đo lường phân tích được lặp lại nhanh chóng
- Các Issue dài hạn như tính tương thích Zellij đã được giải quyết

---

*Nhật ký hàng ngày dựa trên dữ liệu công khai GitHub, không đại diện cho lập trường chính thức của OpenAI.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Nhật ký Cộng đồng Gemini CLI | 2026-04-04

## Tóm tắt hôm nay

Cộng đồng hôm nay tập trung vào **vấn đề báo cáo sai hạn ngạch cho người dùng trả phí** gây ra nhiều thảo luận (#24396), đồng thời đội ngũ cốt lõi đang tích cực thúc đẩy **tối ưu hóa đầu ra công cụ** và **nâng cấp kiến trúc quản lý ngữ cảnh**. Tối ưu hóa hiệu suất và sửa lỗi tương thích đa nền tảng là những đóng góp mã nguồn chính.

---

## Issues nóng của cộng đồng

| Mức độ ưu tiên | Issue | Điểm chính |
|:---|:---|:---|
| 🔥 **Quan tâm cao** | [#24396](https://github.com/google-gemini/gemini-cli/issues/24396) Giải pháp sửa lỗi báo cáo sai hạn ngạch 429 của tầng trả phí | **22 bình luận** là điểm nóng nhất hôm nay. Người dùng bishop0g phân tích sâu: Lời hứa marketing của AI Pro "bao gồm CLI", nhưng thực tế phụ thuộc vào hạn ngạch 10 đô la Mỹ/tháng của nhà phát triển, dẫn đến người dùng trả phí gặp giới hạn tốc độ lỗi. Cộng đồng kêu gọi Google làm rõ định vị sản phẩm và ranh giới thanh toán |
| 🏗️ **Tiến hóa kiến trúc** | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) Đánh giá đọc tệp nhận biết AST | Khám phá việc thay thế thao tác tệp cấp văn bản bằng cây cú pháp trừu tượng, có thể giảm lãng phí Token, nâng cao độ chính xác điều hướng mã, có thể định hình lại khả năng hiểu mã của đại lý |
| ⚠️ **Chất lượng mã** | [#22863](https://github.com/google-gemini/gemini-cli/issues/22863) Mô hình sao chép đối tượng không an toàn | Nhóm phát hiện Gemini thường xuyên tạo mã sao chép loại được triển khai một phần, có rủi ro thời gian chạy, cần hạn chế từ cấp độ prompt |
| 🐛 **Đa nền tảng** | [#24654](https://github.com/google-gemini/gemini-cli/issues/24654) Lỗi thực thi bunx trên Windows | Cờ `-S` của shebang không tương thích trên Windows, đã có PR sửa lỗi (xem #24653 bên dưới) |
| 🖥️ **Trải nghiệm terminal** | [#24202](https://github.com/google-gemini/gemini-cli/issues/24202) Văn bản bị mã hóa trong phiên SSH | Giao diện không sử dụng được trong cảnh SSH từ Windows → gLinux, cần phát hiện môi trường SSH và điều chỉnh hiển thị |
| 🧠 **Hành vi đại lý** | [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) Đại lý phụ nhận biết chế độ phê duyệt | Trong chế độ Plan/Auto-Edit, đại lý phụ thiếu nhận thức về ràng buộc, dẫn đến xung đột giữa công cụ chặn của bộ máy chính sách và ý định của đại lý |
| 💾 **Quản lý ngữ cảnh** | [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) Định tuyến bộ nhớ: toàn cục so với dự án | Định nghĩa chiến lược lưu trữ phân cấp cho sở thích người dùng (toàn cục `~/.gemini/`) và bộ nhớ cụ thể của kho mã (`.gemini/`) |
| 🎯 **Tối ưu hóa đại lý** | [#22809](https://github.com/google-gemini/gemini-cli/issues/22809) Tinh chỉnh ghi bộ nhớ chủ động | Hiện tại đại lý thiếu hướng dẫn "khi nào nên ghi nhớ", cần tăng cường prompt cho cảnh ghi nhớ sở thích và sửa lỗi lặp lại |
| 🛡️ **Tăng cường bảo mật** | [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) Ngăn chặn các thao tác phá hoại | Các lệnh nguy hiểm như git reset --force cần có cơ chế ngăn cản bổ sung, thao tác DB cần nhận thức rủi ro |
| 📊 **Hệ thống đánh giá** | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) Đánh giá độ mạnh mẽ cấp thành phần | Đã có 76 bài kiểm tra hành vi, cần mở rộng phạm vi bao phủ các phiên bản mô hình Gemini khác và các cảnh biên |

---

## Tiến trình PR quan trọng

| PR | Tác giả | Đóng góp cốt lõi |
|:---|:---|:---|
| [#24376](https://github.com/google-gemini/gemini-cli/pull/24376) | galz10 | **Nâng cấp UI xác nhận công cụ**: Thêm đường viền trực quan cho lệnh và diff, hiển thị tham số mô tả của ShellTool, nâng cao khả năng đọc trên terminal |
| [#24461](https://github.com/google-gemini/gemini-cli/pull/24461) | SandyTao520 | **Đột phá hiệu suất I/O**: GlobTool lazy stat, I/O song song, nocase nhận biết nền tảng, giảm đáng kể độ trễ tìm kiếm thư mục lớn |
| [#24653](https://github.com/google-gemini/gemini-cli/pull/24653) | ilkerozgedik | **Sửa lỗi tương thích Windows**: Loại bỏ cờ `-S` của shebang, giải quyết lỗi thực thi bunx trên Windows |
| [#24643](https://github.com/google-gemini/gemini-cli/pull/24643) | joshualitt | **Tái cấu trúc kiến trúc ngữ cảnh**: Phiên bản V0 Episodic Context Manager, giới thiệu pipeline IR bất biến và 4 bộ xử lý hạ cấp (nén lịch sử/mặt nạ công cụ/hạ cấp Blob/nén ngữ nghĩa) |
| [#24646](https://github.com/google-gemini/gemini-cli/pull/24646) | jacob314 | **Sửa lỗi hiển thị terminal**: Phát hiện chính xác dòng chưa được khởi tạo của XTermJs, phân biệt giữa dòng trống và khu vực chưa được hiển thị |
| [#24652](https://github.com/google-gemini/gemini-cli/pull/24652) | devr0306 | **Sửa lỗi nhấp nháy logo**: Giải quyết tình trạng tranh chấp xác thực dẫn đến lỗi hiển thị logo khởi động |
| [#24635](https://github.com/google-gemini/gemini-cli/pull/24635) | gundermanc | **Tối ưu hóa không rào cản**: Cải thiện logic ngăn chặn tường thuật, loại bỏ hiện tượng nhấp nháy trực quan và phát lại lặp lại khi bật UX Chủ đề |
| [#23634](https://github.com/google-gemini/gemini-cli/pull/23634) | Bhargavraj-13 | **Hỗ trợ trình đọc màn hình**: Thêm đường dẫn hiển thị chuyên dụng cho hộp thoại ask_user, khôi phục khả năng tương tác bằng bàn phím |
| [#23601](https://github.com/google-gemini/gemini-cli/pull/23601) | NTaylorMullen | **Hỗ trợ tiêu chuẩn Open Plugin**: Thống nhất mô hình mở rộng `plugin.json` và `gemini-extension.json` |
| [#24640](https://github.com/google-gemini/gemini-cli/pull/24640) | Samee24 | **Giảm nhiễu tường thuật**: Hạn chế sử dụng công cụ update_topic trong các nhiệm vụ đơn giản, giảm thiểu cập nhật chủ đề không cần thiết |

---

## Xu hướng nhu cầu chức năng

```
┌─────────────────────────────────────────────────────────┐
│  Quản lý ngữ cảnh    ████████████████████  Tái cấu trúc kiến trúc (#24643)  │
│  Tối ưu hóa hiệu suất      ██████████████████    I/O song song/tải lười biếng      │
│  Tương thích đa nền tảng    ████████████████      Cảnh Windows/SSH      │
│  Bảo mật đại lý     ██████████████        Bảo vệ thao tác phá hoại        │
│  Minh bạch thanh toán      ██████████          Làm rõ hạn ngạch tầng trả phí      │
│  Tiếp cận không rào cản    ██████████            Hỗ trợ trình đọc màn hình        │
│  Hệ thống đánh giá      █████████             Kiểm tra hành vi cấp thành phần        │
└─────────────────────────────────────────────────────────┘
```

**Nhận định chính**: Cộng đồng đang tiến hóa từ "chức năng khả dụng" sang "độ tin cậy cấp doanh nghiệp" - kiến trúc nén ngữ cảnh (#24643) đánh dấu sự chuyển đổi từ thao tác chuỗi sang IR có cấu trúc, còn AST nhận biết (#22745) có thể thúc đẩy khả năng hiểu mã thế hệ tiếp theo.

---

## Điểm quan tâm của nhà phát triển

| Loại điểm đau | Biểu hiện cụ thể | Issue liên quan |
|:---|:---|:---|
| **Sự bối rối về thanh toán** | Tách biệt hạn ngạch của gói AI Pro và CLI, trải nghiệm "đã trả phí vẫn bị giới hạn tốc độ" tệ | #24396 |
| **Công dân hạng hai Windows** | Các vấn đề tương thích liên tục trong shebang, sandbox, cảnh SSH | #24654, #24480, #24202 |
| **Đại lý không thể đoán trước** | Tệp tập lệnh tạm thời phân tán, lệnh nguy hiểm không bị ngăn chặn, thời điểm ghi nhớ hỗn loạn | #23571, #22672, #22809 |
| **Tiếng ồn đầu ra** | Công cụ tìm kiếm trả về nội dung quá mức, thông tin lỗi công cụ bị rò rỉ vào lịch sử | #24634, #24644 |
| **Trải nghiệm phiên dài** | Nhấp nháy khi cuộn, động lượng bất thường, suy giảm hiệu suất trò chuyện dài | #24470, #24438, #21992 |

**Khuyến nghị chú ý**: Tiến trình triển khai Episodic Context Manager trong #24643, hoặc có thể cải thiện cơ bản trải nghiệm quản lý ngữ cảnh phiên dài.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# Nhật ký Cộng đồng GitHub Copilot CLI | 2026-04-04

---

## 1. Tóm tắt hôm nay

Copilot CLI phát hành **v1.0.17**, hệ thống kỹ năng tích hợp chính thức ra mắt và hỗ trợ chuyển hướng MCP OAuth HTTPS. Cộng đồng tiếp tục tập trung vào **giới hạn tốc độ/tính ổn định API** (#2101 nhận được 21 bình luận), **lỗi phân đoạn trên Alpine Linux** (#107) và **tinh chỉnh quản lý quyền** là ba điểm đau cốt lõi, 37 Issue hoạt động mới được thêm vào trong 24 giờ qua.

---

## 2. Phát hành phiên bản

### v1.0.17 (2026-04-03)
| Mục cập nhật | Mô tả |
|--------|------|
| **Hệ thống kỹ năng tích hợp** | CLI hiện tích hợp mô hình kỹ năng, hỗ trợ hướng dẫn tùy chỉnh môi trường Copilot Cloud Agent ban đầu |
| **Cải tiến MCP OAuth** | Hỗ trợ cơ chế dự phòng chứng chỉ tự ký, giải quyết vấn đề tương thích với nhà cung cấp OAuth (như Slack) buộc HTTPS chuyển hướng |

🔗 [Trang phát hành](https://github.com/github/copilot-cli/releases/tag/v1.0.17)

---

## 3. Issues nóng của cộng đồng

> Lưu ý: Không có cập nhật PR nào trong 24 giờ qua, phần này tập trung vào các Issue có mức độ ưu tiên cao

| # | Issue | Mức độ ưu tiên | Vấn đề cốt lõi | Phản ứng cộng đồng |
|---|---|--------|---------|---------|
| [#2101](https://github.com/github/copilot-cli/issues/2101) | Lỗi API tạm thời dẫn đến giới hạn tốc độ | 🔴 Cao | Claude Opus 4.6 thường xuyên kích hoạt "lỗi API tạm thời" sau đó bị giới hạn 1 phút, ảnh hưởng nghiêm trọng đến quy trình làm việc | **21 bình luận/12 👍** , chưa được giải quyết trong 3 tuần, người dùng kêu gọi phân biệt "lỗi tạm thời thực sự" và quá tải mô hình |
| [#107](https://github.com/github/copilot-cli/issues/107) | Lỗi phân đoạn gọi công cụ trên Alpine Linux | 🔴 Cao | Gọi công cụ bất kỳ trong container Docker Alpine gây SegFault, chặn các cảnh triển khai dạng container | **11 bình luận/3 👍** , được gắn thẻ `needs-human` và `effort: large` , nợ kỹ thuật rõ ràng |
| [#2494](https://github.com/github/copilot-cli/issues/2494) | Hồi quy xác nhận tự động quy trình đăng nhập v1.0.16 | 🟡 Trung bình | Khi không thể sử dụng keychain, CLI tự động nhập 'y/N' thay vì đợi người dùng, gián đoạn quy trình xác thực | **7 bình luận** , lỗi hồi quy được báo cáo ngày hôm qua, xác nhận lỗi hồi quy của 1.0.16 |
| [#2479](https://github.com/github/copilot-cli/issues/2479) | Chính sách đăng ký MCP 404 chặn người dùng cá nhân | 🟡 Trung bình | Người dùng cá nhân Copilot Pro bị chặn chính sách sau khi kích hoạt MCP, hiển thị "2 MCP servers blocked by policy" | **5 bình luận/11 👍** , ảnh hưởng đến chức năng cốt lõi của người dùng trả phí |
| [#2189](https://github.com/github/copilot-cli/issues/2189) | Lỗi API khi Claude Opus 4.6 ghi tệp | 🟡 Trung bình | Khám phá đại lý phụ trên kho mã bình thường, nhưng ghi vào thư mục `/doc` luôn gặp lỗi tạm thời | **4 bình luận/5 👍** , triệu chứng tương tự #2101 nhưng cụ thể theo cảnh |
| [#2205](https://github.com/github/copilot-cli/issues/2205) | Hành vi cuộn bất thường trên terminal Terminator | 🟡 Trung bình | Điều hướng lịch sử bằng bánh xe chuột thay vì duyệt lịch sử đầu vào, --no-mouse không hoạt động | **4 bình luận/5 👍** , trải nghiệm tương tác TUI suy giảm |
| [#2484](https://github.com/github/copilot-cli/issues/2484) | Cấu hình quyền danh sách trắng cấp lệnh | 🟢 Yêu cầu chức năng | --allow-all quá rộng, cần ủy quyền theo lệnh lâu dài thay vì xác nhận lại mỗi phiên | **3 bình luận** , hình thành nhóm yêu cầu chức năng với #2505 |
| [#2355](https://github.com/github/copilot-cli/issues/2355) | ENOENT tại thời gian chạy công cụ PowerShell | 🟡 Trung bình | Trên Windows, CLI không thể gọi `pwsh.exe` từ bên trong, mặc dù PATH chính xác | **3 bình luận/3 👍** , vấn đề cản trở đối với nhà phát triển Windows |
| [#2209](https://github.com/github/copilot-cli/issues/2209) | Báo cáo hư hỏng khi khôi phục phiên dài | 🟡 Trung bình | Phiên lớn với 204 yêu cầu premium được đánh dấu là bị hỏng khi khôi phục, nhưng cấu trúc `events.jsonl` hoàn chỉnh | **3 bình luận** , tính toàn vẹn dữ liệu so với lỗi logic phát hiện trạng thái |
| [#2223](https://github.com/github/copilot-cli/issues/2223) | Lỗi schema 400 của mô hình GPT MCP | 🔴 Quan trọng | Khi schema máy chủ MCP chứa `{"type": "object"}` mà không có `properties`, mô hình GPT báo lỗi, Claude bình thường | **2 bình luận/2 👍** , khác biệt tương thích giữa các mô hình, được gắn thẻ `CRITICAL BUG` |

---

## 4. Tiến trình PR quan trọng

> **Không có cập nhật PR nào trong 24 giờ qua**

Mức độ đóng góp của cộng đồng thấp, việc lặp lại chức năng chủ yếu dựa trên phát hành chính thức. Khuyến nghị chú ý PR tiềm năng sửa lỗi (#2481 - vấn đề MCP 404).

---

## 5. Xu hướng nhu cầu chức năng

Từ 37 Issue hoạt động, 5 hướng chính được tóm tắt:

| Xu hướng chức năng | Issue đại diện | Cường độ nhu cầu |
|---------|-----------|---------|
| **Quản lý quyền chi tiết** | #2484, #2505, #2258 | ⭐⭐⭐⭐⭐ |
| Giữa --allow-all và xác nhận từng phiên riêng lẻ, cần danh sách trắng lệnh lâu dài/ủy quyền cấp thư mục | | |
| **Tính ổn định API và minh bạch giới hạn tốc độ** | #2101, #2189, #2166 | ⭐⭐⭐⭐⭐ |
| Tối ưu hóa logic thử lại lỗi tạm thời, gợi ý trước giới hạn tốc độ, chiến lược hạ cấp dành riêng cho mô hình | | |
| **Hoàn thiện hệ sinh thái MCP** | #2479, #2481, #2223, #2509 | ⭐⭐⭐⭐☆ |
| Lỗi 404 chính sách cho người dùng cá nhân, OAuth HTTPS, tương thích schema, lọc nhầm kích hoạt lệnh kill | | |
| **Tính nhất quán trải nghiệm terminal** | #2205, #2359, #2507, #2508 | ⭐⭐⭐★☆ |
| Hành vi cuộn, kiểu con trỏ, lỗi vô tình thoát bằng ESC, độ tương phản chế độ tối | | |
| **Tính ổn định trạng thái phiên** | #2209, #2466, #2506 | ⭐⭐⭐★☆ |
| Khôi phục phiên dài, trạng thái tải còn sót lại, kẹt vô hạn suy luận | | |

---

## 6. Điểm quan tâm của nhà phát triển

### 🔥 Điểm đau thường gặp
1. **Khủng hoảng niềm tin "lỗi tạm thời"** — Các Issue như #2101 cho thấy nhà phát triển mất niềm tin vào cơ chế thử lại, yêu cầu phân biệt lỗi thực sự tạm thời với giới hạn dung lượng/chính sách mô hình
2. **Tương thích môi trường container** — Lỗi phân đoạn trên Alpine Linux (#107) làm lộ vấn đề tương thích static linking/musl libc, ảnh hưởng đến các cảnh DevOps
3. **Sự mệt mỏi về quyền** — Xác nhận lại lệnh thực thi mỗi phiên, mâu thuẫn với tầm nhìn "thực thi tự động" của đại lý AI

### 💡 Nhu cầu mới nổi
- **Cơ chế khám phá thị trường kỹ năng** — Sau khi tích hợp kỹ năng trong v1.0.17, cộng đồng mong đợi mở rộng "khám phá đại lý từ CWD" của #2504 sang hệ thống kỹ năng
- **Tính nhất quán hành vi giữa các mô hình** — #2223 tiết lộ sự khác biệt trong xử lý schema GPT/Claude, cần một lớp trừu tượng hóa thống nhất

### 📊 Nhận định dữ liệu
- **Tỷ lệ đóng** : 4 Issue đã đóng trong 24 giờ qua (#2445, #2481, #2466, #2476, #2506), chủ yếu là vấn đề cấu hình hoặc đã được sửa lỗi
- **Điểm nóng mới** : 5 Issue mới không có bình luận tập trung vào chi tiết UX (con trỏ, ESC, lọc kill), cho thấy giai đoạn hoàn thiện trải nghiệm cơ bản

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Nhật ký Cộng đồng Kimi Code CLI | 2026-04-04

## Tóm tắt hôm nay

Mức độ hoạt động của cộng đồng hôm nay rất cao, 15 Issues và 15 PRs đã được cập nhật trong vòng 24 giờ. Điểm nổi bật cốt lõi bao gồm: **PR cấp độ tái cấu trúc #1707 đề xuất di chuyển toàn bộ cơ sở mã Python sang Bun + TypeScript**, và **nhiều bản sửa lỗi ổn định đã được hợp nhất vào nhánh chính** (các vấn đề như SetTodoList storm, rò rỉ hiển thị UI đã được đóng). Tích hợp IDE và trải nghiệm nhà phát triển trở thành trọng tâm thảo luận.

---

## Issues nóng của cộng đồng

| # | Tiêu đề | Trạng thái | Mức độ quan trọng | Động thái cộng đồng |
|---|------|------|--------|----------|
| [#1707](https://github.com/MoonshotAI/kimi-cli/pull/1707) | **Đề xuất tái cấu trúc: Python → Bun + TypeScript + React Ink** | 🔥 Đang thảo luận PR | ⭐⭐⭐⭐⭐ | Đề xuất tái cấu trúc gây tranh cãi, tác giả thẳng thắn nói "Python là một thất bại hoàn toàn". Nếu được thông qua sẽ thay đổi hoàn toàn gói công nghệ, cộng đồng cần theo dõi chặt chẽ thái độ của người bảo trì |
| [#1513](https://github.com/MoonshotAI/kimi-cli/issues/1513) | Tệp cài đặt Windows bị lỗi trong chính sách PowerShell mặc định | 🟡 Mở | ⭐⭐⭐⭐⭐ | **Chặn người dùng Windows khi bắt đầu** , 5 bình luận liên tục theo dõi, ảnh hưởng đến trải nghiệm cài đặt lần đầu, cần ưu tiên sửa lỗi |
| [#1725](https://github.com/MoonshotAI/kimi-cli/issues/1725) | Thêm lệnh `/copy` để sao chép phản hồi trợ lý hiện tại | 🟡 Mở | ⭐⭐⭐⭐☆ | Nhu cầu tần suất cao, đã có PR tương ứng #1741, giải quyết điểm đau lựa chọn văn bản terminal |
| [#1737](https://github.com/MoonshotAI/kimi-cli/issues/1737) | Khởi tạo phiên ACP IDEA 2026.1 thất bại: `list.index(x): x not in list` | 🟡 Mở | ⭐⭐⭐⭐☆ | Lỗi quan trọng tích hợp IDE JetBrains, ảnh hưởng đến tính khả dụng của chức năng ACP |
| [#1752](https://github.com/MoonshotAI/kimi-cli/issues/1752) | Khớp chính xác thì menu gợi ý lệnh slash không hiển thị | 🟡 Mở | ⭐⭐⭐⭐☆ | Vấn đề chi tiết UX, nhập đầy đủ `/editor` lại không kích hoạt gợi ý |
| [#1747](https://github.com/MoonshotAI/kimi-cli/issues/1747) | Hệ thống quy tắc ba cấp (tương đương Claude Code) | 🟡 Mở | ⭐⭐⭐⭐☆ | Yêu cầu chức năng cấp doanh nghiệp, liên quan đến quản lý cấu hình ba cấp global/user/project |
| [#1691](https://github.com/MoonshotAI/kimi-cli/issues/1691) | Triển khai bộ nhớ phiên tăng dần để nén ngữ cảnh chi phí bằng không | 🟡 Mở | ⭐⭐⭐⭐☆ | Giải pháp sáng tạo, giải quyết vấn đề lệnh gọi LLM tốn kém `/compact` |
| [#1746](https://github.com/MoonshotAI/kimi-cli/issues/1746) | Xác minh chứng chỉ SSL trên Windows: khóa EE certificate quá yếu | 🟡 Mở | ⭐⭐⭐⭐☆ | Xung đột chính sách bảo mật môi trường doanh nghiệp, cần tương thích cảnh chứng chỉ khóa yếu |
| [#1641](https://github.com/MoonshotAI/kimi-cli/issues/1641) | Thảo luận thiết kế chế độ phụ trợ web Kimi | 🟡 Mở | ⭐⭐⭐☆☆ |