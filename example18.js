export const questions = [
  {
    id: 1,
    question: "A phone number field accepts 10 to 11 digits. Using Boundary Value Analysis, which set of values represents the boundaries?",
    translation: { vi: "Một trường số điện thoại chấp nhận từ 10 đến 11 chữ số. Sử dụng Phân tích giá trị biên, tập hợp giá trị nào đại diện cho các biên?" },
    answers: [
      { text: "9, 10, 11, 12", correct: true, translation: { vi: "9, 10, 11, 12" } },
      { text: "10, 11", correct: false, translation: { vi: "10, 11" } },
      { text: "9, 12", correct: false, translation: { vi: "9, 12" } },
      { text: "8, 9, 12, 13", correct: false, translation: { vi: "8, 9, 12, 13" } }
    ]
  },
  {
    id: 2,
    question: "Which of the following is a major objective of testing?",
    translation: { vi: "Mục tiêu chính của kiểm thử là gì?" },
    answers: [
      { text: "To show that there are no remaining defects", correct: false, translation: { vi: "Để chỉ ra không còn lỗi nào sót lại" } },
      { text: "To prevent defects by evaluating work products", correct: true, translation: { vi: "Để ngăn ngừa lỗi bằng cách đánh giá các sản phẩm công việc" } },
      { text: "To prove that the software is 100% correct", correct: false, translation: { vi: "Để chứng minh phần mềm chính xác 100%" } },
      { text: "To give the responsibility of quality to the testers", correct: false, translation: { vi: "Để giao trách nhiệm chất lượng cho kiểm thử viên" } }
    ]
  },
  {
    id: 3,
    question: "What is the 'Pesticide Paradox' principle?",
    translation: { vi: "Nguyên lý 'Nghịch lý thuốc trừ sâu' là gì?" },
    answers: [
      { text: "If the same tests are repeated, they will eventually stop finding new defects", correct: true, translation: { vi: "Nếu các bài kiểm tra tương tự được lặp lại, chúng sẽ không còn tìm thấy lỗi mới" } },
      { text: "Defects are clustered in a small number of modules", correct: false, translation: { vi: "Lỗi tập trung ở một số ít các module" } },
      { text: "Testing everything is impossible", correct: false, translation: { vi: "Kiểm thử mọi thứ là không thể" } },
      { text: "Finding more defects does not guarantee a successful system", correct: false, translation: { vi: "Tìm thấy nhiều lỗi không đảm bảo hệ thống thành công" } }
    ]
  },
  {
    id: 4,
    question: "Which of the following is the correct order for the standard Test Process?",
    translation: { vi: "Thứ tự nào sau đây là đúng cho Quy trình kiểm thử chuẩn?" },
    answers: [
      { text: "Planning, Analysis, Design, Implementation, Execution, Completion", correct: true, translation: { vi: "Lập kế hoạch, Phân tích, Thiết kế, Thực thi (Implementation), Chạy thử (Execution), Hoàn tất" } },
      { text: "Analysis, Design, Execution, Planning, Completion", correct: false, translation: { vi: "Phân tích, Thiết kế, Chạy thử, Lập kế hoạch, Hoàn tất" } },
      { text: "Design, Implementation, Execution, Analysis, Planning", correct: false, translation: { vi: "Thiết kế, Thực thi, Chạy thử, Phân tích, Lập kế hoạch" } },
      { text: "Planning, Execution, Analysis, Design, Completion", correct: false, translation: { vi: "Lập kế hoạch, Chạy thử, Phân tích, Thiết kế, Hoàn tất" } }
    ]
  },
  {
    id: 5,
    question: "In an Agile environment, who is responsible for quality?",
    translation: { vi: "Trong môi trường Agile, ai là người chịu trách nhiệm về chất lượng?" },
    answers: [
      { text: "The Tester", correct: false, translation: { vi: "Kiểm thử viên" } },
      { text: "The Developer", correct: false, translation: { vi: "Lập trình viên" } },
      { text: "The Whole Team", correct: true, translation: { vi: "Toàn bộ đội ngũ" } },
      { text: "The Scrum Master", correct: false, translation: { vi: "Scrum Master" } }
    ]
  },
  {
    id: 6,
    question: "Which of the following is a non-functional quality characteristic?",
    translation: { vi: "Đặc tính nào sau đây là đặc tính chất lượng phi chức năng?" },
    answers: [
      { text: "Correctness", correct: false, translation: { vi: "Tính đúng đắn" } },
      { text: "Usability", correct: true, translation: { vi: "Tính khả dụng" } },
      { text: "Completeness", correct: false, translation: { vi: "Tính đầy đủ" } },
      { text: "Functionality", correct: false, translation: { vi: "Tính chức năng" } }
    ]
  },
  {
    id: 7,
    question: "Which of the following is a benefit of static testing?",
    translation: { vi: "Lợi ích nào sau đây là của kiểm thử tĩnh?" },
    answers: [
      { text: "It requires code execution", correct: false, translation: { vi: "Nó yêu cầu thực thi mã" } },
      { text: "It finds defects early before dynamic testing", correct: true, translation: { vi: "Nó tìm thấy lỗi sớm trước khi kiểm thử động" } },
      { text: "It is performed only by developers", correct: false, translation: { vi: "Nó chỉ được thực hiện bởi lập trình viên" } },
      { text: "It replaces the need for unit testing", correct: false, translation: { vi: "Nó thay thế nhu cầu kiểm thử đơn vị" } }
    ]
  },
  {
    id: 8,
    question: "A review where the author leads the session and the main goal is to learn/understand the document is:",
    translation: { vi: "Một buổi review mà tác giả dẫn dắt và mục tiêu chính là để học hỏi/hiểu tài liệu là:" },
    answers: [
      { text: "Inspection", correct: false, translation: { vi: "Inspection" } },
      { text: "Walkthrough", correct: true, translation: { vi: "Walkthrough" } },
      { text: "Technical Review", correct: false, translation: { vi: "Review kỹ thuật" } },
      { text: "Informal Review", correct: false, translation: { vi: "Review không chính thức" } }
    ]
  },
  {
    id: 9,
    question: "Equivalence Partitioning is best described as:",
    translation: { vi: "Phân vùng tương đương được mô tả tốt nhất là:" },
    answers: [
      { text: "A technique that divides data into groups that should be processed the same way", correct: true, translation: { vi: "Một kỹ thuật chia dữ liệu thành các nhóm sẽ được xử lý theo cùng một cách" } },
      { text: "A technique to find every possible defect", correct: false, translation: { vi: "Một kỹ thuật để tìm mọi lỗi có thể" } },
      { text: "Testing only the edges of input ranges", correct: false, translation: { vi: "Chỉ kiểm thử các cạnh của phạm vi đầu vào" } },
      { text: "A white-box testing technique", correct: false, translation: { vi: "Một kỹ thuật kiểm thử hộp trắng" } }
    ]
  },
  {
    id: 10,
    question: "Decision Table testing is most useful for:",
    translation: { vi: "Kiểm thử Bảng quyết định hữu ích nhất cho:" },
    answers: [
      { text: "Testing complex business logic with multiple conditions", correct: true, translation: { vi: "Kiểm thử logic nghiệp vụ phức tạp với nhiều điều kiện" } },
      { text: "Testing sequential screens", correct: false, translation: { vi: "Kiểm thử các màn hình tuần tự" } },
      { text: "Testing user interface design", correct: false, translation: { vi: "Kiểm thử thiết kế giao diện người dùng" } },
      { text: "Checking code coverage", correct: false, translation: { vi: "Kiểm tra độ bao phủ mã" } }
    ]
  },
  {
    id: 11,
    question: "Which of the following is a white-box test technique?",
    translation: { vi: "Kỹ thuật nào sau đây là kỹ thuật kiểm thử hộp trắng?" },
    answers: [
      { text: "Statement testing", correct: true, translation: { vi: "Kiểm thử câu lệnh" } },
      { text: "State transition testing", correct: false, translation: { vi: "Kiểm thử chuyển đổi trạng thái" } },
      { text: "Use case testing", correct: false, translation: { vi: "Kiểm thử Use case" } },
      { text: "Exploratory testing", correct: false, translation: { vi: "Kiểm thử thăm dò" } }
    ]
  },
  {
    id: 12,
    question: "Experience-based testing is primarily based on:",
    translation: { vi: "Kiểm thử dựa trên kinh nghiệm chủ yếu dựa trên:" },
    answers: [
      { text: "Formal requirements", correct: false, translation: { vi: "Các yêu cầu chính thức" } },
      { text: "The tester's knowledge and intuition", correct: true, translation: { vi: "Kiến thức và trực giác của kiểm thử viên" } },
      { text: "The code structure", correct: false, translation: { vi: "Cấu trúc mã nguồn" } },
      { text: "Input/Output analysis", correct: false, translation: { vi: "Phân tích Đầu vào/Đầu ra" } }
    ]
  },
  {
    id: 13,
    question: "What is the purpose of Confirmation Testing?",
    translation: { vi: "Mục đích của Kiểm thử xác nhận (Confirmation Testing) là gì?" },
    answers: [
      { text: "To check if a previously found defect has been fixed", correct: true, translation: { vi: "Để kiểm tra xem một lỗi đã tìm thấy trước đó đã được sửa chưa" } },
      { text: "To check if new defects were introduced by a fix", correct: false, translation: { vi: "Để kiểm tra xem các lỗi mới có bị phát sinh do việc sửa lỗi không" } },
      { text: "To test the entire system for performance", correct: false, translation: { vi: "Để kiểm thử toàn bộ hệ thống về hiệu năng" } },
      { text: "To verify requirements with users", correct: false, translation: { vi: "Để xác minh yêu cầu với người dùng" } }
    ]
  },
  {
    id: 14,
    question: "Regression testing should be performed:",
    translation: { vi: "Kiểm thử hồi quy nên được thực hiện:" },
    answers: [
      { text: "Only once at the end of the project", correct: false, translation: { vi: "Chỉ một lần vào cuối dự án" } },
      { text: "Whenever the software or its environment changes", correct: true, translation: { vi: "Bất cứ khi nào phần mềm hoặc môi trường của nó thay đổi" } },
      { text: "Only when a defect is fixed", correct: false, translation: { vi: "Chỉ khi một lỗi được sửa" } },
      { text: "By developers only", correct: false, translation: { vi: "Chỉ bởi lập trình viên" } }
    ]
  },
  {
    id: 15,
    question: "Maintenance testing is performed when:",
    translation: { vi: "Kiểm thử bảo trì được thực hiện khi:" },
    answers: [
      { text: "The system is being retired", correct: true, translation: { vi: "Hệ thống đang được ngừng hoạt động (nghỉ hưu)" } },
      { text: "The system is first developed", correct: false, translation: { vi: "Hệ thống mới bắt đầu phát triển" } },
      { text: "The requirements are being gathered", correct: false, translation: { vi: "Yêu cầu đang được thu thập" } },
      { text: "The project plan is created", correct: false, translation: { vi: "Kế hoạch dự án được tạo" } }
    ]
  },
  {
    id: 16,
    question: "Which test level focuses on the interactions between components?",
    translation: { vi: "Mức kiểm thử nào tập trung vào sự tương tác giữa các thành phần?" },
    answers: [
      { text: "Component testing", correct: false, translation: { vi: "Kiểm thử thành phần" } },
      { text: "Integration testing", correct: true, translation: { vi: "Kiểm thử tích hợp" } },
      { text: "System testing", correct: false, translation: { vi: "Kiểm thử hệ thống" } },
      { text: "Acceptance testing", correct: false, translation: { vi: "Kiểm thử chấp nhận" } }
    ]
  },
  {
    id: 17,
    question: "Alpha testing is done by:",
    translation: { vi: "Kiểm thử Alpha được thực hiện bởi:" },
    answers: [
      { text: "Customers at their own site", correct: false, translation: { vi: "Khách hàng tại địa điểm của họ" } },
      { text: "Potential customers at the developer's site", correct: true, translation: { vi: "Khách hàng tiềm năng tại địa điểm của nhà phát triển" } },
      { text: "Independent testers only", correct: false, translation: { vi: "Chỉ các kiểm thử viên độc lập" } },
      { text: "The developers themselves", correct: false, translation: { vi: "Chính các lập trình viên" } }
    ]
  },
  {
    id: 18,
    question: "A Test Plan document includes:",
    translation: { vi: "Tài liệu Kế hoạch kiểm thử (Test Plan) bao gồm:" },
    answers: [
      { text: "Test items, features to be tested, and risk analysis", correct: true, translation: { vi: "Các mục kiểm thử, tính năng cần kiểm thử và phân tích rủi ro" } },
      { text: "Source code of the application", correct: false, translation: { vi: "Mã nguồn của ứng dụng" } },
      { text: "List of all bug fixes", correct: false, translation: { vi: "Danh sách tất cả các bản sửa lỗi" } },
      { text: "Employee salary details", correct: false, translation: { vi: "Chi tiết lương nhân viên" } }
    ]
  },
  {
    id: 19,
    question: "What is a 'Test Oracle'?",
    translation: { vi: "'Test Oracle' là gì?" },
    answers: [
      { text: "A source to determine expected results", correct: true, translation: { vi: "Một nguồn để xác định kết quả mong đợi" } },
      { text: "A tool for automated execution", correct: false, translation: { vi: "Một công cụ để thực thi tự động" } },
      { text: "A database for storing bugs", correct: false, translation: { vi: "Một cơ sở dữ liệu để lưu trữ lỗi" } },
      { text: "A type of performance test", correct: false, translation: { vi: "Một loại kiểm thử hiệu năng" } }
    ]
  },
  {
    id: 20,
    question: "Defect Management includes:",
    translation: { vi: "Quản lý lỗi bao gồm:" },
    answers: [
      { text: "Recording, tracking and closing defects", correct: true, translation: { vi: "Ghi lại, theo dõi và đóng các lỗi" } },
      { text: "Ignoring low priority defects", correct: false, translation: { vi: "Bỏ qua các lỗi ưu tiên thấp" } },
      { text: "Fixing bugs by the tester", correct: false, translation: { vi: "Sửa lỗi bởi kiểm thử viên" } },
      { text: "Writing code to avoid bugs", correct: false, translation: { vi: "Viết mã để tránh lỗi" } }
    ]
  },
  {
    id: 21,
    question: "Which tool category is used to support static testing?",
    translation: { vi: "Danh mục công cụ nào được sử dụng để hỗ trợ kiểm thử tĩnh?" },
    answers: [
      { text: "Execution tools", correct: false, translation: { vi: "Công cụ thực thi" } },
      { text: "Review support tools", correct: true, translation: { vi: "Công cụ hỗ trợ review" } },
      { text: "Performance tools", correct: false, translation: { vi: "Công cụ hiệu năng" } },
      { text: "Test data tools", correct: false, translation: { vi: "Công cụ dữ liệu kiểm thử" } }
    ]
  },
  {
    id: 22,
    question: "Testing is not only for finding defects, but also for:",
    translation: { vi: "Kiểm thử không chỉ để tìm lỗi, mà còn để:" },
    answers: [
      { text: "Gaining confidence in the quality of the system", correct: true, translation: { vi: "Tăng niềm tin vào chất lượng hệ thống" } },
      { text: "Making sure no one is blamed for errors", correct: false, translation: { vi: "Đảm bảo không ai bị đổ lỗi cho các lỗi sai" } },
      { text: "Increasing development time", correct: false, translation: { vi: "Tăng thời gian phát triển" } },
      { text: "Proving the system is unbreakable", correct: false, translation: { vi: "Chứng minh hệ thống không thể bị phá vỡ" } }
    ]
  },
  {
    id: 23,
    question: "Static Analysis tools are typically used by:",
    translation: { vi: "Các công cụ phân tích tĩnh thường được sử dụng bởi:" },
    answers: [
      { text: "Testers", correct: false, translation: { vi: "Kiểm thử viên" } },
      { text: "Developers", correct: true, translation: { vi: "Lập trình viên" } },
      { text: "Users", correct: false, translation: { vi: "Người dùng" } },
      { text: "Business Analysts", correct: false, translation: { vi: "Chuyên viên phân tích nghiệp vụ" } }
    ]
  },
  {
    id: 24,
    question: "Which of the following is a risk of test automation?",
    translation: { vi: "Điều nào sau đây là rủi ro của tự động hóa kiểm thử?" },
    answers: [
      { text: "Unrealistic expectations of the tool's benefits", correct: true, translation: { vi: "Kỳ vọng không thực tế về lợi ích của công cụ" } },
      { text: "Faster execution of tests", correct: false, translation: { vi: "Thực thi kiểm thử nhanh hơn" } },
      { text: "Better coverage", correct: false, translation: { vi: "Độ bao phủ tốt hơn" } },
      { text: "Reliability of the tests", correct: false, translation: { vi: "Độ tin cậy của các bài kiểm tra" } }
    ]
  },
  {
    id: 25,
    question: "In a Decision Table, what does an 'X' usually represent?",
    translation: { vi: "Trong Bảng quyết định, ký hiệu 'X' thường đại diện cho điều gì?" },
    answers: [
      { text: "A condition that is true", correct: false, translation: { vi: "Một điều kiện đúng" } },
      { text: "An action that should be performed", correct: true, translation: { vi: "Một hành động cần được thực hiện" } },
      { text: "An invalid input", correct: false, translation: { vi: "Một đầu vào không hợp lệ" } },
      { text: "A test case that failed", correct: false, translation: { vi: "Một kịch bản kiểm thử bị thất bại" } }
    ]
  },
  {
    id: 26,
    question: "The process of identifying all possible paths through a module is:",
    translation: { vi: "Quá trình xác định tất cả các đường đi có thể qua một module là:" },
    answers: [
      { text: "Control Flow Testing", correct: true, translation: { vi: "Kiểm thử luồng kiểm soát" } },
      { text: "Data Flow Testing", correct: false, translation: { vi: "Kiểm thử luồng dữ liệu" } },
      { text: "Boundary Value Testing", correct: false, translation: { vi: "Kiểm thử giá trị biên" } },
      { text: "State Transition Testing", correct: false, translation: { vi: "Kiểm thử chuyển đổi trạng thái" } }
    ]
  },
  {
    id: 27,
    question: "Error Guessing is a technique where:",
    translation: { vi: "Đoán lỗi (Error Guessing) là kỹ thuật mà:" },
    answers: [
      { text: "Testers use experience to predict where defects might lie", correct: true, translation: { vi: "Kiểm thử viên dùng kinh nghiệm để dự đoán lỗi nằm ở đâu" } },
      { text: "Random data is used for testing", correct: false, translation: { vi: "Dữ liệu ngẫu nhiên được dùng để kiểm thử" } },
      { text: "Users are asked to find bugs", correct: false, translation: { vi: "Người dùng được yêu cầu tìm lỗi" } },
      { text: "Bugs are guessed by the Project Manager", correct: false, translation: { vi: "Quản lý dự án đoán lỗi" } }
    ]
  },
  {
    id: 28,
    question: "A Defect Report should include:",
    translation: { vi: "Một Báo cáo lỗi (Defect Report) nên bao gồm:" },
    answers: [
      { text: "Steps to reproduce, expected result, actual result", correct: true, translation: { vi: "Các bước tái hiện, kết quả mong đợi, kết quả thực tế" } },
      { text: "The tester's personal opinion of the developer", correct: false, translation: { vi: "Ý kiến cá nhân của tester về dev" } },
      { text: "The salary of the development team", correct: false, translation: { vi: "Lương của đội phát triển" } },
      { text: "Only the bug ID", correct: false, translation: { vi: "Chỉ mã ID của lỗi" } }
    ]
  },
  {
    id: 29,
    question: "Configuration Management helps to:",
    translation: { vi: "Quản lý cấu hình (Configuration Management) giúp để:" },
    answers: [
      { text: "Keep track of versions of test items and documentation", correct: true, translation: { vi: "Theo dõi các phiên bản của mục kiểm thử và tài liệu" } },
      { text: "Speed up the server", correct: false, translation: { vi: "Tăng tốc độ máy chủ" } },
      { text: "Assign tasks to testers", correct: false, translation: { vi: "Phân công nhiệm vụ cho tester" } },
      { text: "Write the code", correct: false, translation: { vi: "Viết mã nguồn" } }
    ]
  },
  {
    id: 30,
    question: "Which of the following is a Product Risk?",
    translation: { vi: "Điều nào sau đây là một Rủi ro sản phẩm (Product Risk)?" },
    answers: [
      { text: "The software fails to perform its intended functions", correct: true, translation: { vi: "Phần mềm không thực hiện được các chức năng dự kiến" } },
      { text: "The test environment is not ready on time", correct: false, translation: { vi: "Môi trường kiểm thử không sẵn sàng đúng hạn" } },
      { text: "Lack of skilled testers", correct: false, translation: { vi: "Thiếu kiểm thử viên có kỹ năng" } },
      { text: "Delay in delivery of hardware", correct: false, translation: { vi: "Chậm trễ trong việc giao phần cứng" } }
    ]
  },
  {
    id: 31,
    question: "Traceability between requirements and test cases helps to:",
    translation: { vi: "Tính truy xuất nguồn gốc (Traceability) giữa yêu cầu và kịch bản kiểm thử giúp:" },
    answers: [
      { text: "Ensure all requirements are tested", correct: true, translation: { vi: "Đảm bảo tất cả yêu cầu đều được kiểm thử" } },
      { text: "Make the code run faster", correct: false, translation: { vi: "Làm mã chạy nhanh hơn" } },
      { text: "Reduce the number of developers", correct: false, translation: { vi: "Giảm số lượng lập trình viên" } },
      { text: "Automate all tests", correct: false, translation: { vi: "Tự động hóa tất cả các bài kiểm tra" } }
    ]
  },
  {
    id: 32,
    question: "When should testing stop?",
    translation: { vi: "Khi nào việc kiểm thử nên dừng lại?" },
    answers: [
      { text: "When the time is up or exit criteria are met", correct: true, translation: { vi: "Khi hết thời gian hoặc các tiêu chí dừng được đáp ứng" } },
      { text: "When all bugs are fixed", correct: false, translation: { vi: "Khi tất cả lỗi được sửa" } },
      { text: "When the tester is tired", correct: false, translation: { vi: "Khi kiểm thử viên mệt" } },
      { text: "When the manager says so", correct: false, translation: { vi: "Khi người quản lý bảo dừng" } }
    ]
  },
  {
    id: 33,
    question: "Independent testing means:",
    translation: { vi: "Kiểm thử độc lập nghĩa là:" },
    answers: [
      { text: "Testing performed by someone other than the author", correct: true, translation: { vi: "Kiểm thử được thực hiện bởi một người khác không phải tác giả" } },
      { text: "Testing without any tools", correct: false, translation: { vi: "Kiểm thử không dùng bất kỳ công cụ nào" } },
      { text: "Testing only the UI", correct: false, translation: { vi: "Chỉ kiểm thử giao diện" } },
      { text: "Testing by the developers themselves", correct: false, translation: { vi: "Kiểm thử bởi chính các lập trình viên" } }
    ]
  },
  {
    id: 34,
    question: "A person who writes the code is usually not the best person to test it because of:",
    translation: { vi: "Người viết mã thường không phải là người tốt nhất để kiểm thử nó vì:" },
    answers: [
      { text: "Cognitive bias", correct: true, translation: { vi: "Định kiến nhận thức" } },
      { text: "Lack of time", correct: false, translation: { vi: "Thiếu thời gian" } },
      { text: "Lack of skills", correct: false, translation: { vi: "Thiếu kỹ năng" } },
      { text: "Lack of interest", correct: false, translation: { vi: "Thiếu sự quan tâm" } }
    ]
  },
  {
    id: 35,
    question: "Test Execution tools are also known as:",
    translation: { vi: "Công cụ thực thi kiểm thử còn được gọi là:" },
    answers: [
      { text: "Test Harnesses", correct: true, translation: { vi: "Khung thực thi kiểm thử (Test Harnesses)" } },
      { text: "Debuggers", correct: false, translation: { vi: "Công cụ gỡ lỗi" } },
      { text: "Compilers", correct: false, translation: { vi: "Trình biên dịch" } },
      { text: "IDEs", correct: false, translation: { vi: "Môi trường phát triển tích hợp" } }
    ]
  },
  {
    id: 36,
    question: "Exploratory testing is most effective when:",
    translation: { vi: "Kiểm thử thăm dò hiệu quả nhất khi:" },
    answers: [
      { text: "Requirements are missing or time is limited", correct: true, translation: { vi: "Thiếu yêu cầu hoặc thời gian bị giới hạn" } },
      { text: "The system is very simple", correct: false, translation: { vi: "Hệ thống rất đơn giản" } },
      { text: "Testing is performed by juniors", correct: false, translation: { vi: "Kiểm thử được thực hiện bởi lính mới" } },
      { text: "There is plenty of time", correct: false, translation: { vi: "Có rất nhiều thời gian" } }
    ]
  },
  {
    id: 37,
    question: "Statement Coverage is calculated as:",
    translation: { vi: "Độ bao phủ câu lệnh được tính bằng:" },
    answers: [
      { text: "(Number of statements executed / Total number of statements) * 100", correct: true, translation: { vi: "(Số câu lệnh đã thực thi / Tổng số câu lệnh) * 100" } },
      { text: "Total number of test cases", correct: false, translation: { vi: "Tổng số kịch bản kiểm thử" } },
      { text: "Number of defects found", correct: false, translation: { vi: "Số lỗi tìm được" } },
      { text: "Number of lines of code", correct: false, translation: { vi: "Số dòng mã nguồn" } }
    ]
  },
  {
    id: 38,
    question: "The main benefit of a Pilot Project for a tool is:",
    translation: { vi: "Lợi ích chính của Dự án thí điểm (Pilot Project) cho một công cụ là:" },
    answers: [
      { text: "To assess if the tool fits the organization's processes", correct: true, translation: { vi: "Để đánh giá liệu công cụ có phù hợp với quy trình của tổ chức" } },
      { text: "To find all bugs in the system", correct: false, translation: { vi: "Để tìm tất cả lỗi trong hệ thống" } },
      { text: "To train all staff members", correct: false, translation: { vi: "Để đào tạo tất cả nhân viên" } },
      { text: "To reduce the cost of the tool license", correct: false, translation: { vi: "Để giảm chi phí bản quyền công cụ" } }
    ]
  },
  {
    id: 39,
    question: "Which of the following is a Project Risk?",
    translation: { vi: "Điều nào sau đây là một Rủi ro dự án (Project Risk)?" },
    answers: [
      { text: "Shortage of staff with the required skills", correct: true, translation: { vi: "Thiếu hụt nhân viên có kỹ năng yêu cầu" } },
      { text: "Software calculation error", correct: false, translation: { vi: "Lỗi tính toán phần mềm" } },
      { text: "System response time is too slow", correct: false, translation: { vi: "Thời gian phản hồi hệ thống quá chậm" } },
      { text: "Application crashes on mobile", correct: false, translation: { vi: "Ứng dụng bị treo trên di động" } }
    ]
  },
  {
    id: 40,
    question: "What is the primary goal of a Retrospective meeting?",
    translation: { vi: "Mục tiêu chính của buổi họp cải tiến (Retrospective) là gì?" },
    answers: [
      { text: "To learn from the past and improve future processes", correct: true, translation: { vi: "Học hỏi từ quá khứ và cải thiện quy trình trong tương lai" } },
      { text: "To blame the person who caused defects", correct: false, translation: { vi: "Đổ lỗi cho người gây ra lỗi" } },
      { text: "To write more test cases", correct: false, translation: { vi: "Để viết thêm kịch bản kiểm thử" } },
      { text: "To demonstrate the software to the client", correct: false, translation: { vi: "Để trình diễn phần mềm cho khách hàng" } }
    ]
  }
];
