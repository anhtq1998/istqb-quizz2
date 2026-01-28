export const questions = [
  // --- CHƯƠNG 1: NỀN TẢNG KIỂM THỬ (8 CÂU) ---
  {
    id: 1,
    question: "Which of the following is a common objective of testing?",
    translation: { vi: "Mục tiêu phổ biến nào sau đây của kiểm thử?" },
    answers: [
      {
        text: "To show that the software is 100% bug-free",
        correct: false,
        translation: { vi: "Để chứng minh phần mềm 100% không có lỗi" },
      },
      {
        text: "To give information to stakeholders about the quality level",
        correct: true,
        translation: {
          vi: "Cung cấp thông tin cho các bên liên quan về mức độ chất lượng",
        },
      },
      {
        text: "To blame developers for code errors",
        correct: false,
        translation: { vi: "Để đổ lỗi cho lập trình viên về các lỗi mã nguồn" },
      },
      {
        text: "To speed up the software development process",
        correct: false,
        translation: { vi: "Để tăng tốc quy trình phát triển phần mềm" },
      },
    ],
  },
  {
    id: 2,
    question:
      "Which testing principle states that errors tend to cluster in a few modules?",
    translation: {
      vi: "Nguyên tắc kiểm thử nào nói rằng lỗi thường tập trung ở một số ít module?",
    },
    answers: [
      {
        text: "Exhaustive testing is impossible",
        correct: false,
        translation: { vi: "Kiểm thử kiệt quệ là không thể" },
      },
      {
        text: "Pesticide paradox",
        correct: false,
        translation: { vi: "Nghịch lý thuốc trừ sâu" },
      },
      {
        text: "Defect clustering",
        correct: true,
        translation: { vi: "Sự tập trung của lỗi" },
      },
      {
        text: "Absence-of-errors fallacy",
        correct: false,
        translation: { vi: "Sự ngụy biện vắng bóng lỗi" },
      },
    ],
  },
  {
    id: 3,
    question:
      "A person makes an 'error' which leads to a 'defect' in the code. When this code is executed, it may cause a:",
    translation: {
      vi: "Một người tạo ra một 'sai sót' dẫn đến 'lỗi' trong mã. Khi mã này được thực thi, nó có thể gây ra một:",
    },
    answers: [
      { text: "Bug", correct: false, translation: { vi: "Bug" } },
      {
        text: "Failure",
        correct: true,
        translation: { vi: "Sự cố (Failure)" },
      },
      {
        text: "Mistake",
        correct: false,
        translation: { vi: "Nhầm lẫn (Mistake)" },
      },
      {
        text: "Incident",
        correct: false,
        translation: { vi: "Sự cố (Incident)" },
      },
    ],
  },
  {
    id: 4,
    question: "Testing is context dependent. This means:",
    translation: {
      vi: "Kiểm thử phụ thuộc vào ngữ cảnh. Điều này có nghĩa là:",
    },
    answers: [
      {
        text: "You should use the same test cases for all projects",
        correct: false,
        translation: { vi: "Nên sử dụng cùng một bộ test case cho mọi dự án" },
      },
      {
        text: "Testing for a bank app is different from testing a game",
        correct: true,
        translation: {
          vi: "Kiểm thử ứng dụng ngân hàng khác với kiểm thử trò chơi",
        },
      },
      {
        text: "All systems must be tested to the same depth",
        correct: false,
        translation: {
          vi: "Mọi hệ thống đều phải được kiểm thử với cùng độ sâu",
        },
      },
      {
        text: "Context is only important for manual testing",
        correct: false,
        translation: {
          vi: "Ngữ cảnh chỉ quan trọng đối với kiểm thử thủ công",
        },
      },
    ],
  },
  {
    id: 5,
    question: "Which of the following is part of the 'Test Design' activity?",
    translation: {
      vi: "Hoạt động nào sau đây thuộc giai đoạn 'Thiết kế kiểm thử'?",
    },
    answers: [
      {
        text: "Creating test suites and test execution schedules",
        correct: false,
        translation: { vi: "Tạo các bộ kiểm thử và lịch trình thực thi" },
      },
      {
        text: "Identifying test conditions from the test basis",
        correct: false,
        translation: { vi: "Xác định điều kiện kiểm thử từ cơ sở kiểm thử" },
      },
      {
        text: "Deriving test cases and test data",
        correct: true,
        translation: { vi: "Xây dựng các kịch bản và dữ liệu kiểm thử" },
      },
      {
        text: "Setting up the test environment",
        correct: false,
        translation: { vi: "Thiết lập môi trường kiểm thử" },
      },
    ],
  },
  {
    id: 6,
    question: "The whole-team approach in Agile means:",
    translation: {
      vi: "Cách tiếp cận toàn đội (whole-team approach) trong Agile có nghĩa là:",
    },
    answers: [
      {
        text: "Only testers are responsible for quality",
        correct: false,
        translation: {
          vi: "Chỉ người kiểm thử mới chịu trách nhiệm về chất lượng",
        },
      },
      {
        text: "Anyone with the necessary skills can perform any task",
        correct: true,
        translation: {
          vi: "Bất kỳ ai có kỹ năng cần thiết đều có thể thực hiện bất kỳ nhiệm vụ nào",
        },
      },
      {
        text: "The team must have at least 10 members",
        correct: false,
        translation: { vi: "Đội ngũ phải có ít nhất 10 thành viên" },
      },
      {
        text: "The manager decides all testing tasks",
        correct: false,
        translation: { vi: "Quản lý quyết định mọi nhiệm vụ kiểm thử" },
      },
    ],
  },
  {
    id: 7,
    question: "Traceability between test cases and requirements helps to:",
    translation: {
      vi: "Khả năng truy xuất giữa các test case và yêu cầu giúp:",
    },
    answers: [
      {
        text: "Find more defects in the code",
        correct: false,
        translation: { vi: "Tìm thấy nhiều lỗi hơn trong mã" },
      },
      {
        text: "Measure the coverage of requirements by testing",
        correct: true,
        translation: {
          vi: "Đo lường mức độ bao phủ của yêu cầu bằng kiểm thử",
        },
      },
      {
        text: "Automate all test cases",
        correct: false,
        translation: { vi: "Tự động hóa tất cả các test case" },
      },
      {
        text: "Replace the need for a test plan",
        correct: false,
        translation: { vi: "Thay thế nhu cầu về một kế hoạch kiểm thử" },
      },
    ],
  },
  {
    id: 8,
    question: "Which skill is most important for a tester?",
    translation: {
      vi: "Kỹ năng nào quan trọng nhất đối với một người kiểm thử?",
    },
    answers: [
      {
        text: "Writing complex code",
        correct: false,
        translation: { vi: "Viết mã phức tạp" },
      },
      {
        text: "Critical thinking and attention to detail",
        correct: true,
        translation: { vi: "Tư duy phản biện và chú ý đến chi tiết" },
      },
      {
        text: "Sales and marketing skills",
        correct: false,
        translation: { vi: "Kỹ năng bán hàng và tiếp thị" },
      },
      {
        text: "Project management certification",
        correct: false,
        translation: { vi: "Chứng chỉ quản lý dự án" },
      },
    ],
  },

  // --- CHƯƠNG 2: KIỂM THỬ TRONG VÒNG ĐỜI PHÁT TRIỂN (6 CÂU) ---
  {
    id: 9,
    question:
      "In the V-model, which test level is paired with 'User Requirements'?",
    translation: {
      vi: "Trong mô hình chữ V, cấp độ kiểm thử nào đi đôi với 'Yêu cầu người dùng'?",
    },
    answers: [
      {
        text: "Unit Testing",
        correct: false,
        translation: { vi: "Kiểm thử đơn vị" },
      },
      {
        text: "Integration Testing",
        correct: false,
        translation: { vi: "Kiểm thử tích hợp" },
      },
      {
        text: "System Testing",
        correct: false,
        translation: { vi: "Kiểm thử hệ thống" },
      },
      {
        text: "Acceptance Testing",
        correct: true,
        translation: { vi: "Kiểm thử chấp nhận" },
      },
    ],
  },
  {
    id: 10,
    question: "Which of the following is an example of 'Shift Left'?",
    translation: { vi: "Ví dụ nào sau đây là về 'Shift Left'?" },
    answers: [
      {
        text: "Testing only after the build is finished",
        correct: false,
        translation: { vi: "Chỉ kiểm thử sau khi bản build hoàn tất" },
      },
      {
        text: "Starting test activities as early as possible in the SDLC",
        correct: true,
        translation: {
          vi: "Bắt đầu các hoạt động kiểm thử càng sớm càng tốt trong vòng đời phát triển",
        },
      },
      {
        text: "Moving the testing team to another office",
        correct: false,
        translation: { vi: "Chuyển đội ngũ kiểm thử sang văn phòng khác" },
      },
      {
        text: "Testing directly on the production environment",
        correct: false,
        translation: { vi: "Kiểm thử trực tiếp trên môi trường production" },
      },
    ],
  },
  {
    id: 11,
    question: "What is the purpose of Retrospectives in Agile?",
    translation: {
      vi: "Mục đích của Retrospectives (họp cải tiến) trong Agile là gì?",
    },
    answers: [
      {
        text: "To demo new features to the client",
        correct: false,
        translation: { vi: "Để trình diễn các tính năng mới cho khách hàng" },
      },
      {
        text: "To plan the next sprint tasks",
        correct: false,
        translation: {
          vi: "Để lập kế hoạch cho các nhiệm vụ sprint tiếp theo",
        },
      },
      {
        text: "To identify ways to improve the process and team collaboration",
        correct: true,
        translation: {
          vi: "Để xác định cách cải thiện quy trình và sự cộng tác trong đội",
        },
      },
      {
        text: "To write the test completion report",
        correct: false,
        translation: { vi: "Để viết báo cáo kết thúc kiểm thử" },
      },
    ],
  },
  {
    id: 12,
    question: "Maintenance testing is triggered by:",
    translation: { vi: "Kiểm thử bảo trì được kích hoạt bởi:" },
    answers: [
      {
        text: "Modifications, migrations, or retirement of a system",
        correct: true,
        translation: {
          vi: "Sửa đổi, di chuyển hoặc ngừng hoạt động của một hệ thống",
        },
      },
      {
        text: "Starting a new project from scratch",
        correct: false,
        translation: { vi: "Bắt đầu một dự án mới từ đầu" },
      },
      {
        text: "Hiring new developers",
        correct: false,
        translation: { vi: "Thuê lập trình viên mới" },
      },
      {
        text: "A change in the project manager",
        correct: false,
        translation: { vi: "Thay đổi quản lý dự án" },
      },
    ],
  },
  {
    id: 13,
    question: "Test-Driven Development (TDD) cycle is:",
    translation: { vi: "Chu trình của Phát triển hướng kiểm thử (TDD) là:" },
    answers: [
      {
        text: "Code -> Test -> Refactor",
        correct: false,
        translation: { vi: "Code -> Test -> Refactor" },
      },
      {
        text: "Test -> Code -> Refactor",
        correct: true,
        translation: { vi: "Test -> Code -> Refactor" },
      },
      {
        text: "Test -> Refactor -> Code",
        correct: false,
        translation: { vi: "Test -> Refactor -> Code" },
      },
      {
        text: "Code -> Refactor -> Test",
        correct: false,
        translation: { vi: "Code -> Refactor -> Test" },
      },
    ],
  },
  {
    id: 14,
    question: "The 'Definition of Ready' (DoR) is used to:",
    translation: { vi: "'Định nghĩa Sẵn sàng' (DoR) được dùng để:" },
    answers: [
      {
        text: "Stop the development of a feature",
        correct: false,
        translation: { vi: "Dừng việc phát triển một tính năng" },
      },
      {
        text: "Ensure a user story has enough detail to start development",
        correct: true,
        translation: {
          vi: "Đảm bảo một user story có đủ chi tiết để bắt đầu phát triển",
        },
      },
      {
        text: "Confirm that a feature is ready for production",
        correct: false,
        translation: { vi: "Xác nhận tính năng đã sẵn sàng cho production" },
      },
      {
        text: "Verify that the code has no bugs",
        correct: false,
        translation: { vi: "Xác minh mã nguồn không có bug" },
      },
    ],
  },

  // --- CHƯƠNG 3: KIỂM THỬ TĨNH (4 CÂU) ---
  {
    id: 15,
    question:
      "Static testing can find defects that dynamic testing cannot, such as:",
    translation: {
      vi: "Kiểm thử tĩnh có thể tìm thấy lỗi mà kiểm thử động không thể, ví dụ:",
    },
    answers: [
      {
        text: "Memory leaks during execution",
        correct: false,
        translation: { vi: "Rò rỉ bộ nhớ trong quá trình thực thi" },
      },
      {
        text: "Deviations from coding standards",
        correct: true,
        translation: { vi: "Vi phạm các tiêu chuẩn lập trình" },
      },
      {
        text: "Performance bottlenecks under load",
        correct: false,
        translation: { vi: "Nút thắt hiệu suất khi chịu tải" },
      },
      {
        text: "Incorrect calculations in a report",
        correct: false,
        translation: { vi: "Tính toán sai trong một báo cáo" },
      },
    ],
  },
  {
    id: 16,
    question: "In a formal review, who records the found defects?",
    translation: {
      vi: "Trong một buổi review chính thức, ai là người ghi lại các lỗi tìm thấy?",
    },
    answers: [
      {
        text: "Moderator",
        correct: false,
        translation: { vi: "Người điều phối" },
      },
      {
        text: "Scribe (Recorder)",
        correct: true,
        translation: { vi: "Người ghi chép" },
      },
      { text: "Author", correct: false, translation: { vi: "Tác giả" } },
      { text: "Manager", correct: false, translation: { vi: "Quản lý" } },
    ],
  },
  {
    id: 17,
    question: "What is the main advantage of an Informal Review?",
    translation: { vi: "Ưu điểm chính của Review không chính thức là gì?" },
    answers: [
      {
        text: "It is very document-heavy and reliable",
        correct: false,
        translation: { vi: "Nó rất nặng về tài liệu và đáng tin cậy" },
      },
      {
        text: "It is inexpensive and quick to perform",
        correct: true,
        translation: { vi: "Nó không tốn kém và thực hiện nhanh chóng" },
      },
      {
        text: "It uses formal entry and exit criteria",
        correct: false,
        translation: {
          vi: "Nó sử dụng các tiêu chí bắt đầu và kết thúc chính thức",
        },
      },
      {
        text: "It is lead by an external expert",
        correct: false,
        translation: { vi: "Nó được dẫn dắt bởi một chuyên gia bên ngoài" },
      },
    ],
  },
  {
    id: 18,
    question: "Perspective-based reading is a review technique where:",
    translation: { vi: "Đọc dựa trên quan điểm là kỹ thuật review mà:" },
    answers: [
      {
        text: "The author reads the document aloud",
        correct: false,
        translation: { vi: "Tác giả đọc to tài liệu" },
      },
      {
        text: "Reviewers take on different stakeholder viewpoints (e.g., user, tester, designer)",
        correct: true,
        translation: {
          vi: "Người review đóng vai các bên liên quan khác nhau (vd: người dùng, tester, designer)",
        },
      },
      {
        text: "Everyone uses the same checklist",
        correct: false,
        translation: { vi: "Mọi người sử dụng cùng một checklist" },
      },
      {
        text: "Only the manager reviews the document",
        correct: false,
        translation: { vi: "Chỉ có quản lý mới review tài liệu" },
      },
    ],
  },

  // --- CHƯƠNG 4: KỸ THUẬT KIỂM THỬ (11 CÂU) ---
  {
    id: 19,
    question: "Equivalence Partitioning (EP) aims to:",
    translation: { vi: "Phân vùng tương đương (EP) nhằm mục đích:" },
    answers: [
      {
        text: "Test every possible input value",
        correct: false,
        translation: { vi: "Kiểm thử mọi giá trị đầu vào có thể" },
      },
      {
        text: "Reduce the number of test cases while maintaining coverage",
        correct: true,
        translation: {
          vi: "Giảm số lượng test case trong khi vẫn duy trì độ bao phủ",
        },
      },
      {
        text: "Find bugs only in the boundary values",
        correct: false,
        translation: { vi: "Chỉ tìm lỗi ở các giá trị biên" },
      },
      {
        text: "Check the internal structure of the code",
        correct: false,
        translation: { vi: "Kiểm tra cấu trúc bên trong của mã nguồn" },
      },
    ],
  },
  {
    id: 20,
    question:
      "A system accepts integers from 10 to 50. Using 2-value BVA, what are the test values?",
    translation: {
      vi: "Hệ thống chấp nhận số nguyên từ 10 đến 50. Dùng BVA 2 giá trị, các giá trị kiểm thử là gì?",
    },
    answers: [
      { text: "10, 50", correct: false, translation: { vi: "10, 50" } },
      {
        text: "9, 10, 50, 51",
        correct: true,
        translation: { vi: "9, 10, 50, 51" },
      },
      {
        text: "10, 11, 49, 50",
        correct: false,
        translation: { vi: "10, 11, 49, 50" },
      },
      {
        text: "0, 10, 50, 100",
        correct: false,
        translation: { vi: "0, 10, 50, 100" },
      },
    ],
  },
  {
    id: 21,
    question:
      "Which technique is best for testing complex business logic with many combinations?",
    translation: {
      vi: "Kỹ thuật nào tốt nhất để kiểm thử logic kinh doanh phức tạp với nhiều tổ hợp?",
    },
    answers: [
      {
        text: "Equivalence Partitioning",
        correct: false,
        translation: { vi: "Phân vùng tương đương" },
      },
      {
        text: "Decision Table Testing",
        correct: true,
        translation: { vi: "Kiểm thử bảng quyết định" },
      },
      {
        text: "State Transition Testing",
        correct: false,
        translation: { vi: "Kiểm thử chuyển đổi trạng thái" },
      },
      {
        text: "Use Case Testing",
        correct: false,
        translation: { vi: "Kiểm thử Use Case" },
      },
    ],
  },
  {
    id: 22,
    question: "In State Transition Testing, a 'Guard Condition' is:",
    translation: {
      vi: "Trong Kiểm thử chuyển đổi trạng thái, 'Điều kiện bảo vệ' (Guard Condition) là:",
    },
    answers: [
      {
        text: "A software bug",
        correct: false,
        translation: { vi: "Một lỗi phần mềm" },
      },
      {
        text: "A condition that must be true for a transition to occur",
        correct: true,
        translation: {
          vi: "Điều kiện phải đúng để một sự chuyển đổi trạng thái xảy ra",
        },
      },
      {
        text: "A security firewall",
        correct: false,
        translation: { vi: "Một tường lửa bảo mật" },
      },
      {
        text: "The final state of the system",
        correct: false,
        translation: { vi: "Trạng thái cuối cùng của hệ thống" },
      },
    ],
  },
  {
    id: 23,
    question: "Statement Coverage is a:",
    translation: { vi: "Bao phủ câu lệnh là một:" },
    answers: [
      {
        text: "Black-box technique",
        correct: false,
        translation: { vi: "Kỹ thuật hộp đen" },
      },
      {
        text: "White-box technique",
        correct: true,
        translation: { vi: "Kỹ thuật hộp trắng" },
      },
      {
        text: "Experience-based technique",
        correct: false,
        translation: { vi: "Kỹ thuật dựa trên kinh nghiệm" },
      },
      {
        text: "Static technique",
        correct: false,
        translation: { vi: "Kỹ thuật tĩnh" },
      },
    ],
  },
  {
    id: 24,
    question: "If 100% Decision Coverage is achieved, then:",
    translation: { vi: "Nếu đạt được 100% bao phủ quyết định, thì:" },
    answers: [
      {
        text: "100% Statement Coverage is also achieved",
        correct: true,
        translation: { vi: "Cũng đạt được 100% bao phủ câu lệnh" },
      },
      {
        text: "All bugs are found",
        correct: false,
        translation: { vi: "Mọi bug đều được tìm thấy" },
      },
      {
        text: "Path coverage is 100%",
        correct: false,
        translation: { vi: "Bao phủ đường dẫn là 100%" },
      },
      {
        text: "The code is perfect",
        correct: false,
        translation: { vi: "Mã nguồn là hoàn hảo" },
      },
    ],
  },
  {
    id: 25,
    question: "Error Guessing is based on:",
    translation: { vi: "Đoán lỗi dựa trên:" },
    answers: [
      {
        text: "The technical design",
        correct: false,
        translation: { vi: "Thiết kế kỹ thuật" },
      },
      {
        text: "Knowledge of past failures and typical errors",
        correct: true,
        translation: {
          vi: "Kiến thức về các thất bại trong quá khứ và các lỗi điển hình",
        },
      },
      {
        text: "A random number generator",
        correct: false,
        translation: { vi: "Trình tạo số ngẫu nhiên" },
      },
      {
        text: "The user manual",
        correct: false,
        translation: { vi: "Hướng dẫn sử dụng" },
      },
    ],
  },
  {
    id: 26,
    question: "Exploratory Testing is most effective when:",
    translation: { vi: "Kiểm thử khám phá hiệu quả nhất khi:" },
    answers: [
      {
        text: "Used as the only testing method",
        correct: false,
        translation: { vi: "Dùng làm phương pháp kiểm thử duy nhất" },
      },
      {
        text: "Complementing formal testing techniques",
        correct: true,
        translation: { vi: "Bổ trợ cho các kỹ thuật kiểm thử chính thức" },
      },
      {
        text: "Documentation is very detailed",
        correct: false,
        translation: { vi: "Tài liệu rất chi tiết" },
      },
      {
        text: "Automating regression tests",
        correct: false,
        translation: { vi: "Tự động hóa kiểm thử hồi quy" },
      },
    ],
  },
  {
    id: 27,
    question: "A 'User Story' typically includes:",
    translation: { vi: "Một 'User Story' thường bao gồm:" },
    answers: [
      {
        text: "Acceptance Criteria",
        correct: true,
        translation: { vi: "Tiêu chí chấp nhận" },
      },
      {
        text: "Source code snippets",
        correct: false,
        translation: { vi: "Các đoạn mã nguồn" },
      },
      {
        text: "Database schema",
        correct: false,
        translation: { vi: "Sơ đồ cơ sở dữ liệu" },
      },
      {
        text: "The developer's name",
        correct: false,
        translation: { vi: "Tên của lập trình viên" },
      },
    ],
  },
  {
    id: 28,
    question: "Checklist-based testing is:",
    translation: { vi: "Kiểm thử dựa trên checklist là:" },
    answers: [
      {
        text: "A white-box technique",
        correct: false,
        translation: { vi: "Kỹ thuật hộp trắng" },
      },
      {
        text: "An experience-based technique",
        correct: true,
        translation: { vi: "Kỹ thuật dựa trên kinh nghiệm" },
      },
      {
        text: "A static technique",
        correct: false,
        translation: { vi: "Kỹ thuật tĩnh" },
      },
      {
        text: "A structural technique",
        correct: false,
        translation: { vi: "Kỹ thuật cấu trúc" },
      },
    ],
  },
  {
    id: 29,
    question: "Boundary Value Analysis (BVA) is most applicable for:",
    translation: { vi: "Phân tích giá trị biên (BVA) áp dụng tốt nhất cho:" },
    answers: [
      {
        text: "State changes",
        correct: false,
        translation: { vi: "Các thay đổi trạng thái" },
      },
      {
        text: "Sequential numeric or ordered ranges",
        correct: true,
        translation: { vi: "Các dải số liên tục hoặc có thứ tự" },
      },
      {
        text: "Non-functional requirements",
        correct: false,
        translation: { vi: "Các yêu cầu phi chức năng" },
      },
      {
        text: "Code path complexity",
        correct: false,
        translation: { vi: "Độ phức tạp của đường dẫn mã" },
      },
    ],
  },

  // --- CHƯƠNG 5: QUẢN LÝ KIỂM THỬ (9 CÂU) ---
  {
    id: 30,
    question: "The 'Test Manager' role is primarily responsible for:",
    translation: {
      vi: "Vai trò 'Quản lý kiểm thử' chịu trách nhiệm chính về:",
    },
    answers: [
      {
        text: "Executing test cases and logging bugs",
        correct: false,
        translation: { vi: "Thực thi test case và ghi nhận lỗi" },
      },
      {
        text: "Test planning, monitoring, and control",
        correct: true,
        translation: { vi: "Lập kế hoạch, theo dõi và kiểm soát kiểm thử" },
      },
      {
        text: "Debugging the software code",
        correct: false,
        translation: { vi: "Gỡ lỗi mã nguồn phần mềm" },
      },
      {
        text: "Managing the sales team",
        correct: false,
        translation: { vi: "Quản lý đội ngũ bán hàng" },
      },
    ],
  },
  {
    id: 31,
    question: "Risk-based testing uses risk to:",
    translation: { vi: "Kiểm thử dựa trên rủi ro sử dụng rủi ro để:" },
    answers: [
      {
        text: "Cancel the project",
        correct: false,
        translation: { vi: "Hủy bỏ dự án" },
      },
      {
        text: "Prioritize the allocation of testing effort",
        correct: true,
        translation: { vi: "Ưu tiên việc phân bổ nỗ lực kiểm thử" },
      },
      {
        text: "Avoid all testing activities",
        correct: false,
        translation: { vi: "Tránh mọi hoạt động kiểm thử" },
      },
      {
        text: "Blame the management",
        correct: false,
        translation: { vi: "Đổ lỗi cho ban quản lý" },
      },
    ],
  },
  {
    id: 32,
    question: "A 'Product Risk' is a risk that:",
    translation: { vi: "'Rủi ro Sản phẩm' là rủi ro mà:" },
    answers: [
      {
        text: "The test environment is late",
        correct: false,
        translation: { vi: "Môi trường kiểm thử bị trễ" },
      },
      {
        text: "The software may fail to meet user needs",
        correct: true,
        translation: {
          vi: "Phần mềm có thể không đáp ứng được nhu cầu người dùng",
        },
      },
      {
        text: "A tester resigns during the project",
        correct: false,
        translation: { vi: "Một tester nghỉ việc trong dự án" },
      },
      {
        text: "The budget is cut",
        correct: false,
        translation: { vi: "Ngân sách bị cắt giảm" },
      },
    ],
  },
  {
    id: 33,
    question: "Entry Criteria define:",
    translation: { vi: "Tiêu chí bắt đầu (Entry Criteria) xác định:" },
    answers: [
      {
        text: "When to stop testing",
        correct: false,
        translation: { vi: "Khi nào dừng kiểm thử" },
      },
      {
        text: "When a test activity can legally start",
        correct: true,
        translation: {
          vi: "Khi nào một hoạt động kiểm thử có thể bắt đầu một cách hợp lệ",
        },
      },
      {
        text: "The salary of the testers",
        correct: false,
        translation: { vi: "Mức lương của người kiểm thử" },
      },
      {
        text: "The final result of the test",
        correct: false,
        translation: { vi: "Kết quả cuối cùng của kiểm thử" },
      },
    ],
  },
  {
    id: 34,
    question: "What should be in a 'Test Summary Report'?",
    translation: { vi: "Điều gì nên có trong 'Báo cáo tổng kết kiểm thử'?" },
    answers: [
      {
        text: "The source code of the application",
        correct: false,
        translation: { vi: "Mã nguồn của ứng dụng" },
      },
      {
        text: "Evaluation of the quality of the test object against exit criteria",
        correct: true,
        translation: {
          vi: "Đánh giá chất lượng đối tượng kiểm thử so với tiêu chí kết thúc",
        },
      },
      {
        text: "A list of all employees in the company",
        correct: false,
        translation: { vi: "Danh sách tất cả nhân viên trong công ty" },
      },
      {
        text: "The daily schedule of the developers",
        correct: false,
        translation: { vi: "Lịch trình hàng ngày của lập trình viên" },
      },
    ],
  },
  {
    id: 35,
    question: "Configuration Management is used to:",
    translation: { vi: "Quản lý cấu hình được sử dụng để:" },
    answers: [
      {
        text: "Install the software on servers",
        correct: false,
        translation: { vi: "Cài đặt phần mềm lên máy chủ" },
      },
      {
        text: "Identify and maintain version control of test items",
        correct: true,
        translation: {
          vi: "Định danh và duy trì kiểm soát phiên bản của các hạng mục kiểm thử",
        },
      },
      {
        text: "Speed up the internet connection",
        correct: false,
        translation: { vi: "Tăng tốc kết nối internet" },
      },
      {
        text: "Manage the office furniture",
        correct: false,
        translation: { vi: "Quản lý nội thất văn phòng" },
      },
    ],
  },
  {
    id: 36,
    question: "A 'Severity' of a defect indicates:",
    translation: { vi: "'Mức độ nghiêm trọng' (Severity) của lỗi cho biết:" },
    answers: [
      {
        text: "How fast it should be fixed",
        correct: false,
        translation: { vi: "Nó nên được sửa nhanh như thế nào" },
      },
      {
        text: "The degree of impact on the system's operation",
        correct: true,
        translation: { vi: "Mức độ tác động đến hoạt động của hệ thống" },
      },
      {
        text: "The name of the bug",
        correct: false,
        translation: { vi: "Tên của lỗi" },
      },
      {
        text: "How much the fix will cost",
        correct: false,
        translation: { vi: "Việc sửa lỗi tốn bao nhiêu tiền" },
      },
    ],
  },
  {
    id: 37,
    question: "Estimation based on 'Wideband Delphi' is a:",
    translation: { vi: "Ước lượng dựa trên 'Wideband Delphi' là một:" },
    answers: [
      {
        text: "Metric-based approach",
        correct: false,
        translation: { vi: "Cách tiếp cận dựa trên số liệu" },
      },
      {
        text: "Expert-based approach",
        correct: true,
        translation: { vi: "Cách tiếp cận dựa trên chuyên gia" },
      },
      {
        text: "Random guessing approach",
        correct: false,
        translation: { vi: "Cách tiếp cận đoán ngẫu nhiên" },
      },
      {
        text: "Tool-based approach",
        correct: false,
        translation: { vi: "Cách tiếp cận dựa trên công cụ" },
      },
    ],
  },
  {
    id: 38,
    question: "Which of the following is a 'Project Risk'?",
    translation: { vi: "Điều nào sau đây là 'Rủi ro Dự án'?" },
    answers: [
      {
        text: "Potential failure of a calculation engine",
        correct: false,
        translation: { vi: "Thất bại tiềm tàng của bộ máy tính toán" },
      },
      {
        text: "Insufficient budget to complete testing",
        correct: true,
        translation: { vi: "Ngân sách không đủ để hoàn thành kiểm thử" },
      },
      {
        text: "High response time for users",
        correct: false,
        translation: { vi: "Thời gian phản hồi chậm cho người dùng" },
      },
      {
        text: "Security hole in login page",
        correct: false,
        translation: { vi: "Lỗ hổng bảo mật ở trang đăng nhập" },
      },
    ],
  },

  // --- CHƯƠNG 6: CÔNG CỤ KIỂM THỬ (2 CÂU) ---
  {
    id: 39,
    question: "What is a benefit of test automation?",
    translation: { vi: "Lợi ích của tự động hóa kiểm thử là gì?" },
    answers: [
      {
        text: "It can find all bugs that manual testing cannot",
        correct: false,
        translation: {
          vi: "Nó có thể tìm thấy mọi lỗi mà kiểm thử thủ công không thể",
        },
      },
      {
        text: "It allows for frequent and fast regression testing",
        correct: true,
        translation: {
          vi: "Nó cho phép thực hiện kiểm thử hồi quy thường xuyên và nhanh chóng",
        },
      },
      {
        text: "It eliminates the need for any human testers",
        correct: false,
        translation: { vi: "Nó loại bỏ nhu cầu về người kiểm thử" },
      },
      {
        text: "It makes testing cheaper from the first day",
        correct: false,
        translation: { vi: "Nó làm cho kiểm thử rẻ hơn ngay từ ngày đầu tiên" },
      },
    ],
  },
  {
    id: 40,
    question: "Which tool is used for static analysis?",
    translation: { vi: "Công cụ nào được dùng để phân tích tĩnh?" },
    answers: [
      {
        text: "Performance testing tool",
        correct: false,
        translation: { vi: "Công cụ kiểm thử hiệu suất" },
      },
      {
        text: "Coding standard checker",
        correct: true,
        translation: { vi: "Công cụ kiểm tra tiêu chuẩn mã nguồn" },
      },
      {
        text: "Bug tracking tool",
        correct: false,
        translation: { vi: "Công cụ theo dõi lỗi" },
      },
      {
        text: "Test data generator",
        correct: false,
        translation: { vi: "Công cụ tạo dữ liệu kiểm thử" },
      },
    ],
  },
];
