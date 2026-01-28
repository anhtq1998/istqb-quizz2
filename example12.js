export const questions = [
  {
    id: 1,
    question: "Which of the following is an example of a defect?",
    translation: {
      vi: "Ví dụ nào sau đây là một lỗi (defect)?",
    },
    answers: [
      {
        text: "The person who wrote the code made a mistake",
        correct: false,
        translation: { vi: "Người viết mã đã phạm sai lầm (Error)" },
      },
      {
        text: "The system crashed because of a power failure",
        correct: false,
        translation: { vi: "Hệ thống bị treo do mất điện" },
      },
      {
        text: "A bug in the code that causes a failure when executed",
        correct: true,
        translation: { vi: "Một lỗi trong mã gây ra sự cố khi thực thi" },
      },
      {
        text: "The user performed an incorrect sequence of actions",
        correct: false,
        translation: { vi: "Người dùng thực hiện sai trình tự các hành động" },
      },
    ],
  },
  {
    id: 2,
    question:
      "Testing is not only about finding defects. Which of the following is also a goal of testing?",
    translation: {
      vi: "Kiểm thử không chỉ là tìm lỗi. Mục tiêu nào sau đây cũng là mục tiêu của kiểm thử?",
    },
    answers: [
      {
        text: "To prove that the software has no defects",
        correct: false,
        translation: { vi: "Để chứng minh phần mềm không có lỗi" },
      },
      {
        text: "To reduce the risk of software failure",
        correct: true,
        translation: { vi: "Để giảm thiểu rủi ro thất bại của phần mềm" },
      },
      {
        text: "To ensure that all requirements are met by 100%",
        correct: false,
        translation: { vi: "Để đảm bảo tất cả các yêu cầu được đáp ứng 100%" },
      },
      {
        text: "To punish developers for making mistakes",
        correct: false,
        translation: { vi: "Để phạt các lập trình viên vì đã mắc lỗi" },
      },
    ],
  },
  {
    id: 3,
    question:
      "Which testing principle states that 'Testing everything is not feasible'?",
    translation: {
      vi: "Nguyên tắc kiểm thử nào khẳng định rằng 'Kiểm thử mọi thứ là không khả thi'?",
    },
    answers: [
      {
        text: "Early testing",
        correct: false,
        translation: { vi: "Kiểm thử sớm" },
      },
      {
        text: "Defect clustering",
        correct: false,
        translation: { vi: "Sự tập trung của lỗi" },
      },
      {
        text: "Exhaustive testing is impossible",
        correct: true,
        translation: { vi: "Kiểm thử kiệt quệ là không thể" },
      },
      {
        text: "Pesticide paradox",
        correct: false,
        translation: { vi: "Nghịch lý thuốc trừ sâu" },
      },
    ],
  },
  {
    id: 4,
    question: "The 'Pesticide Paradox' principle means that:",
    translation: {
      vi: "Nguyên tắc 'Nghịch lý thuốc trừ sâu' có nghĩa là:",
    },
    answers: [
      {
        text: "If you keep running the same tests, they will eventually find no new defects",
        correct: true,
        translation: {
          vi: "Nếu bạn lặp đi lặp lại cùng một bộ kiểm thử, cuối cùng chúng sẽ không tìm thấy lỗi mới",
        },
      },
      {
        text: "Defects are always found in the same areas of the code",
        correct: false,
        translation: {
          vi: "Lỗi luôn được tìm thấy trong cùng một khu vực của mã",
        },
      },
      {
        text: "Testing can only show that defects are present",
        correct: false,
        translation: { vi: "Kiểm thử chỉ có thể chỉ ra rằng lỗi đang tồn tại" },
      },
      {
        text: "Tests should be automated to be effective",
        correct: false,
        translation: {
          vi: "Các bài kiểm thử nên được tự động hóa để có hiệu quả",
        },
      },
    ],
  },
  {
    id: 5,
    question:
      "When should testing activities start in the software development lifecycle?",
    translation: {
      vi: "Các hoạt động kiểm thử nên bắt đầu khi nào trong vòng đời phát triển phần mềm?",
    },
    answers: [
      {
        text: "After the code is written",
        correct: false,
        translation: { vi: "Sau khi mã đã được viết xong" },
      },
      {
        text: "As early as possible",
        correct: true,
        translation: { vi: "Càng sớm càng tốt" },
      },
      {
        text: "Just before the release to production",
        correct: false,
        translation: { vi: "Ngay trước khi phát hành sản phẩm" },
      },
      {
        text: "When the customer starts using the software",
        correct: false,
        translation: { vi: "Khi khách hàng bắt đầu sử dụng phần mềm" },
      },
    ],
  },
  {
    id: 6,
    question:
      "Which of the following is a main activity of the 'Test Analysis' phase?",
    translation: {
      vi: "Hoạt động nào sau đây là hoạt động chính của giai đoạn 'Phân tích kiểm thử'?",
    },
    answers: [
      {
        text: "Defining test objectives",
        correct: false,
        translation: { vi: "Xác định mục tiêu kiểm thử" },
      },
      {
        text: "Identifying test conditions from the test basis",
        correct: true,
        translation: {
          vi: "Xác định các điều kiện kiểm thử từ cơ sở kiểm thử (test basis)",
        },
      },
      {
        text: "Creating test execution schedules",
        correct: false,
        translation: { vi: "Tạo lịch trình thực thi kiểm thử" },
      },
      {
        text: "Comparing actual results with expected results",
        correct: false,
        translation: { vi: "So sánh kết quả thực tế với kết quả mong đợi" },
      },
    ],
  },
  {
    id: 7,
    question:
      "What is the primary difference between Static and Dynamic testing?",
    translation: {
      vi: "Sự khác biệt chính giữa kiểm thử Tĩnh (Static) và kiểm thử Động (Dynamic) là gì?",
    },
    answers: [
      {
        text: "Static testing finds defects, dynamic testing finds failures",
        correct: false,
        translation: { vi: "Kiểm thử tĩnh tìm lỗi, kiểm thử động tìm sự cố" },
      },
      {
        text: "Static testing requires code execution, dynamic testing does not",
        correct: false,
        translation: {
          vi: "Kiểm thử tĩnh yêu cầu thực thi mã, kiểm thử động thì không",
        },
      },
      {
        text: "Static testing does not require code execution, dynamic testing does",
        correct: true,
        translation: {
          vi: "Kiểm thử tĩnh không yêu cầu thực thi mã, kiểm thử động thì có",
        },
      },
      {
        text: "Dynamic testing is more effective than static testing",
        correct: false,
        translation: { vi: "Kiểm thử động hiệu quả hơn kiểm thử tĩnh" },
      },
    ],
  },
  {
    id: 8,
    question: "Which of the following is a Non-functional test type?",
    translation: {
      vi: "Loại kiểm thử nào sau đây là kiểm thử Phi chức năng?",
    },
    answers: [
      {
        text: "Unit testing",
        correct: false,
        translation: { vi: "Kiểm thử đơn vị" },
      },
      {
        text: "Regression testing",
        correct: false,
        translation: { vi: "Kiểm thử hồi quy" },
      },
      {
        text: "Usability testing",
        correct: true,
        translation: { vi: "Kiểm thử khả năng sử dụng" },
      },
      {
        text: "Integration testing",
        correct: false,
        translation: { vi: "Kiểm thử tích hợp" },
      },
    ],
  },
  {
    id: 9,
    question:
      "In an Agile project, who is responsible for the quality of the product?",
    translation: {
      vi: "Trong một dự án Agile, ai chịu trách nhiệm về chất lượng sản phẩm?",
    },
    answers: [
      {
        text: "The Tester",
        correct: false,
        translation: { vi: "Người kiểm thử" },
      },
      {
        text: "The Developer",
        correct: false,
        translation: { vi: "Người lập trình" },
      },
      {
        text: "The Product Owner",
        correct: false,
        translation: { vi: "Chủ sở hữu sản phẩm" },
      },
      {
        text: "The entire team",
        correct: true,
        translation: { vi: "Toàn bộ đội ngũ" },
      },
    ],
  },
  {
    id: 10,
    question: "Equivalence Partitioning is a:",
    translation: {
      vi: "Phân vùng tương đương (Equivalence Partitioning) là một:",
    },
    answers: [
      {
        text: "White-box technique",
        correct: false,
        translation: { vi: "Kỹ thuật hộp trắng" },
      },
      {
        text: "Black-box technique",
        correct: true,
        translation: { vi: "Kỹ thuật hộp đen" },
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
    id: 11,
    question:
      "A system accepts age between 18 and 65 (inclusive). What are the boundary values?",
    translation: {
      vi: "Một hệ thống chấp nhận độ tuổi từ 18 đến 65 (bao gồm cả hai số đó). Các giá trị biên là gì?",
    },
    answers: [
      {
        text: "17, 18, 65, 66",
        correct: true,
        translation: { vi: "17, 18, 65, 66" },
      },
      {
        text: "18, 19, 64, 65",
        correct: false,
        translation: { vi: "18, 19, 64, 65" },
      },
      {
        text: "17, 19, 64, 66",
        correct: false,
        translation: { vi: "17, 19, 64, 66" },
      },
      {
        text: "0, 18, 65, 100",
        correct: false,
        translation: { vi: "0, 18, 65, 100" },
      },
    ],
  },
  {
    id: 12,
    question: "What is the main goal of Confirmation Testing?",
    translation: {
      vi: "Mục tiêu chính của Kiểm thử xác nhận (Confirmation Testing) là gì?",
    },
    answers: [
      {
        text: "To find new bugs",
        correct: false,
        translation: { vi: "Để tìm lỗi mới" },
      },
      {
        text: "To verify that a specific defect has been fixed",
        correct: true,
        translation: { vi: "Để xác minh rằng một lỗi cụ thể đã được sửa" },
      },
      {
        text: "To ensure that other parts of the system are not broken",
        correct: false,
        translation: {
          vi: "Để đảm bảo các phần khác của hệ thống không bị hỏng",
        },
      },
      {
        text: "To test the system under high load",
        correct: false,
        translation: { vi: "Để kiểm thử hệ thống dưới tải trọng cao" },
      },
    ],
  },
  {
    id: 13,
    question: "Which of the following is a benefit of independent testing?",
    translation: { vi: "Lợi ích nào sau đây là của kiểm thử độc lập?" },
    answers: [
      {
        text: "Independent testers find different types of defects than developers",
        correct: true,
        translation: {
          vi: "Người kiểm thử độc lập tìm thấy các loại lỗi khác với lập trình viên",
        },
      },
      {
        text: "Independent testers reduce the cost of the project",
        correct: false,
        translation: { vi: "Người kiểm thử độc lập làm giảm chi phí dự án" },
      },
      {
        text: "Independent testers can replace the need for unit testing",
        correct: false,
        translation: {
          vi: "Người kiểm thử độc lập có thể thay thế nhu cầu kiểm thử đơn vị",
        },
      },
      {
        text: "Independent testers write better code than developers",
        correct: false,
        translation: {
          vi: "Người kiểm thử độc lập viết mã tốt hơn lập trình viên",
        },
      },
    ],
  },
  {
    id: 14,
    question: "What is the purpose of a 'Test Exit Criteria'?",
    translation: { vi: "Mục đích của 'Tiêu chí kết thúc kiểm thử' là gì?" },
    answers: [
      {
        text: "To define when to stop testing",
        correct: true,
        translation: { vi: "Để xác định khi nào nên dừng kiểm thử" },
      },
      {
        text: "To define how to start testing",
        correct: false,
        translation: { vi: "Để xác định cách bắt đầu kiểm thử" },
      },
      {
        text: "To identify the test environment",
        correct: false,
        translation: { vi: "Để xác định môi trường kiểm thử" },
      },
      {
        text: "To schedule test activities",
        correct: false,
        translation: { vi: "Để lập kế hoạch cho các hoạt động kiểm thử" },
      },
    ],
  },
  {
    id: 15,
    question: "In a formal review, who is responsible for leading the meeting?",
    translation: {
      vi: "Trong một buổi review chính thức, ai là người chịu trách nhiệm dẫn dắt cuộc họp?",
    },
    answers: [
      { text: "The Author", correct: false, translation: { vi: "Tác giả" } },
      {
        text: "The Moderator (Facilitator)",
        correct: true,
        translation: { vi: "Người điều phối" },
      },
      {
        text: "The Scribe",
        correct: false,
        translation: { vi: "Người ghi chép" },
      },
      { text: "The Manager", correct: false, translation: { vi: "Quản lý" } },
    ],
  },
  {
    id: 16,
    question: "Which of the following is a White-box testing technique?",
    translation: { vi: "Kỹ thuật nào sau đây là kỹ thuật kiểm thử Hộp trắng?" },
    answers: [
      {
        text: "Decision Coverage",
        correct: true,
        translation: { vi: "Bao phủ quyết định" },
      },
      {
        text: "Boundary Value Analysis",
        correct: false,
        translation: { vi: "Phân tích giá trị biên" },
      },
      {
        text: "Error Guessing",
        correct: false,
        translation: { vi: "Đoán lỗi" },
      },
      {
        text: "State Transition Testing",
        correct: false,
        translation: { vi: "Kiểm thử chuyển đổi trạng thái" },
      },
    ],
  },
  {
    id: 17,
    question:
      "What is the main risk of using a Test Execution Tool for the first time?",
    translation: {
      vi: "Rủi ro chính khi sử dụng công cụ thực thi kiểm thử lần đầu tiên là gì?",
    },
    answers: [
      {
        text: "Underestimating the effort to maintain test scripts",
        correct: true,
        translation: {
          vi: "Đánh giá thấp nỗ lực bảo trì các kịch bản kiểm thử",
        },
      },
      {
        text: "The tool will find all the bugs in the software",
        correct: false,
        translation: {
          vi: "Công cụ sẽ tìm thấy tất cả các lỗi trong phần mềm",
        },
      },
      {
        text: "Testers will lose their jobs",
        correct: false,
        translation: { vi: "Người kiểm thử sẽ mất việc" },
      },
      {
        text: "The tool will write the test plan automatically",
        correct: false,
        translation: { vi: "Công cụ sẽ tự động viết kế hoạch kiểm thử" },
      },
    ],
  },
  {
    id: 18,
    question:
      "Which test level focuses on the interactions between components?",
    translation: {
      vi: "Cấp độ kiểm thử nào tập trung vào sự tương tác giữa các thành phần?",
    },
    answers: [
      {
        text: "Component Testing",
        correct: false,
        translation: { vi: "Kiểm thử thành phần" },
      },
      {
        text: "Integration Testing",
        correct: true,
        translation: { vi: "Kiểm thử tích hợp" },
      },
      {
        text: "System Testing",
        correct: false,
        translation: { vi: "Kiểm thử hệ thống" },
      },
      {
        text: "Acceptance Testing",
        correct: false,
        translation: { vi: "Kiểm thử chấp nhận" },
      },
    ],
  },
  {
    id: 19,
    question: "Maintenance testing is performed when:",
    translation: { vi: "Kiểm thử bảo trì được thực hiện khi:" },
    answers: [
      {
        text: "A system is being developed for the first time",
        correct: false,
        translation: { vi: "Hệ thống đang được phát triển lần đầu" },
      },
      {
        text: "Changes are made to an existing operational system",
        correct: true,
        translation: {
          vi: "Có những thay đổi đối với một hệ thống đang vận hành",
        },
      },
      {
        text: "The code is being integrated",
        correct: false,
        translation: { vi: "Mã nguồn đang được tích hợp" },
      },
      {
        text: "The project is over budget",
        correct: false,
        translation: { vi: "Dự án vượt quá ngân sách" },
      },
    ],
  },
  {
    id: 20,
    question: "Which of the following is a Product Risk?",
    translation: { vi: "Điều nào sau đây là Rủi ro Sản phẩm?" },
    answers: [
      {
        text: "Lack of skilled testers",
        correct: false,
        translation: { vi: "Thiếu người kiểm thử có kỹ năng" },
      },
      {
        text: "Software fails to perform its intended functions",
        correct: true,
        translation: {
          vi: "Phần mềm không thực hiện được các chức năng dự kiến",
        },
      },
      {
        text: "Delay in delivery of the test environment",
        correct: false,
        translation: { vi: "Chậm trễ trong việc bàn giao môi trường kiểm thử" },
      },
      {
        text: "Low morale in the development team",
        correct: false,
        translation: { vi: "Tinh thần của đội ngũ phát triển thấp" },
      },
    ],
  },
  {
    id: 21,
    question: "What is the purpose of Regression Testing?",
    translation: { vi: "Mục đích của Kiểm thử hồi quy là gì?" },
    answers: [
      {
        text: "To find bugs in new features",
        correct: false,
        translation: { vi: "Để tìm lỗi trong các tính năng mới" },
      },
      {
        text: "To detect side effects of changes in previously tested code",
        correct: true,
        translation: {
          vi: "Để phát hiện các tác dụng phụ của thay đổi trong mã đã kiểm thử trước đó",
        },
      },
      {
        text: "To check the system's performance",
        correct: false,
        translation: { vi: "Để kiểm tra hiệu suất hệ thống" },
      },
      {
        text: "To replace unit testing",
        correct: false,
        translation: { vi: "Để thay thế kiểm thử đơn vị" },
      },
    ],
  },
  {
    id: 22,
    question:
      "Which of the following is a type of 'Review without a formal process'?",
    translation: {
      vi: "Loại review nào sau đây không có quy trình chính thức?",
    },
    answers: [
      {
        text: "Inspection",
        correct: false,
        translation: { vi: "Kiểm tra (Inspection)" },
      },
      {
        text: "Walkthrough",
        correct: false,
        translation: { vi: "Walkthrough" },
      },
      {
        text: "Informal Review",
        correct: true,
        translation: { vi: "Review không chính thức" },
      },
      {
        text: "Technical Review",
        correct: false,
        translation: { vi: "Review kỹ thuật" },
      },
    ],
  },
  {
    id: 23,
    question: "Error guessing is based on:",
    translation: { vi: "Kỹ thuật đoán lỗi dựa trên:" },
    answers: [
      {
        text: "Code coverage",
        correct: false,
        translation: { vi: "Độ bao phủ mã" },
      },
      {
        text: "Experience of the tester",
        correct: true,
        translation: { vi: "Kinh nghiệm của người kiểm thử" },
      },
      {
        text: "Formal requirements",
        correct: false,
        translation: { vi: "Yêu cầu chính thức" },
      },
      {
        text: "State transitions",
        correct: false,
        translation: { vi: "Chuyển đổi trạng thái" },
      },
    ],
  },
  {
    id: 24,
    question: "What is a 'Test Case'?",
    translation: { vi: "'Ca kiểm thử' (Test Case) là gì?" },
    answers: [
      {
        text: "A document stating the test strategy",
        correct: false,
        translation: { vi: "Một tài liệu nêu chiến lược kiểm thử" },
      },
      {
        text: "A set of input values and expected results",
        correct: true,
        translation: {
          vi: "Một tập hợp các giá trị đầu vào và kết quả mong đợi",
        },
      },
      {
        text: "A report on found defects",
        correct: false,
        translation: { vi: "Một báo cáo về các lỗi tìm thấy" },
      },
      {
        text: "A tool for automated testing",
        correct: false,
        translation: { vi: "Một công cụ để kiểm thử tự động" },
      },
    ],
  },
  {
    id: 25,
    question: "Which document defines what to test and how to test?",
    translation: {
      vi: "Tài liệu nào xác định cái gì cần kiểm thử và kiểm thử như thế nào?",
    },
    answers: [
      {
        text: "Test Plan",
        correct: true,
        translation: { vi: "Kế hoạch kiểm thử" },
      },
      {
        text: "Test Summary Report",
        correct: false,
        translation: { vi: "Báo cáo tổng kết kiểm thử" },
      },
      {
        text: "Defect Report",
        correct: false,
        translation: { vi: "Báo cáo lỗi" },
      },
      { text: "User Story", correct: false, translation: { vi: "User Story" } },
    ],
  },
  {
    id: 26,
    question: "Alpha testing is performed by:",
    translation: { vi: "Kiểm thử Alpha được thực hiện bởi:" },
    answers: [
      {
        text: "Developers at their own site",
        correct: false,
        translation: { vi: "Lập trình viên tại địa điểm của họ" },
      },
      {
        text: "Customers at the developer's site",
        correct: true,
        translation: { vi: "Khách hàng tại địa điểm của đơn vị phát triển" },
      },
      {
        text: "Customers at their own site",
        correct: false,
        translation: { vi: "Khách hàng tại địa điểm của chính họ" },
      },
      {
        text: "Independent test agency",
        correct: false,
        translation: { vi: "Đơn vị kiểm thử độc lập" },
      },
    ],
  },
  {
    id: 27,
    question: "Beta testing is also known as:",
    translation: { vi: "Kiểm thử Beta còn được gọi là:" },
    answers: [
      {
        text: "Internal testing",
        correct: false,
        translation: { vi: "Kiểm thử nội bộ" },
      },
      {
        text: "Field testing",
        correct: true,
        translation: { vi: "Kiểm thử thực địa" },
      },
      {
        text: "System testing",
        correct: false,
        translation: { vi: "Kiểm thử hệ thống" },
      },
      {
        text: "White-box testing",
        correct: false,
        translation: { vi: "Kiểm thử hộp trắng" },
      },
    ],
  },
  {
    id: 28,
    question:
      "A 'Success' message appears after a valid login. This is an example of:",
    translation: {
      vi: "Thông báo 'Thành công' xuất hiện sau khi đăng nhập hợp lệ. Đây là ví dụ về:",
    },
    answers: [
      {
        text: "Expected result",
        correct: true,
        translation: { vi: "Kết quả mong đợi" },
      },
      {
        text: "Actual result",
        correct: false,
        translation: { vi: "Kết quả thực tế" },
      },
      {
        text: "Test condition",
        correct: false,
        translation: { vi: "Điều kiện kiểm thử" },
      },
      {
        text: "Test procedure",
        correct: false,
        translation: { vi: "Quy trình kiểm thử" },
      },
    ],
  },
  {
    id: 29,
    question: "Which of the following is a Black-box technique?",
    translation: { vi: "Kỹ thuật nào sau đây là kỹ thuật Hộp đen?" },
    answers: [
      {
        text: "Statement coverage",
        correct: false,
        translation: { vi: "Bao phủ câu lệnh" },
      },
      {
        text: "Checklist-based testing",
        correct: true,
        translation: { vi: "Kiểm thử dựa trên checklist" },
      },
      {
        text: "Path testing",
        correct: false,
        translation: { vi: "Kiểm thử đường dẫn" },
      },
      {
        text: "Code review",
        correct: false,
        translation: { vi: "Review mã nguồn" },
      },
    ],
  },
  {
    id: 30,
    question: "What is the main focus of Acceptance Testing?",
    translation: { vi: "Trọng tâm chính của Kiểm thử chấp nhận là gì?" },
    answers: [
      {
        text: "Finding bugs in the code",
        correct: false,
        translation: { vi: "Tìm lỗi trong mã nguồn" },
      },
      {
        text: "Gaining confidence in the system",
        correct: true,
        translation: { vi: "Tạo sự tin tưởng vào hệ thống" },
      },
      {
        text: "Testing the database",
        correct: false,
        translation: { vi: "Kiểm thử cơ sở dữ liệu" },
      },
      {
        text: "Testing the API",
        correct: false,
        translation: { vi: "Kiểm thử API" },
      },
    ],
  },
  {
    id: 31,
    question: "Which tool would be used to track bugs?",
    translation: { vi: "Công cụ nào được sử dụng để theo dõi lỗi?" },
    answers: [
      {
        text: "Test Execution tool",
        correct: false,
        translation: { vi: "Công cụ thực thi kiểm thử" },
      },
      {
        text: "Defect Management tool",
        correct: true,
        translation: { vi: "Công cụ quản lý lỗi" },
      },
      {
        text: "Static Analysis tool",
        correct: false,
        translation: { vi: "Công cụ phân tích tĩnh" },
      },
      {
        text: "Configuration Management tool",
        correct: false,
        translation: { vi: "Công cụ quản lý cấu hình" },
      },
    ],
  },
  {
    id: 32,
    question: "A test plan should be updated:",
    translation: { vi: "Kế hoạch kiểm thử nên được cập nhật:" },
    answers: [
      {
        text: "Only at the beginning of the project",
        correct: false,
        translation: { vi: "Chỉ khi bắt đầu dự án" },
      },
      {
        text: "Whenever new information is available",
        correct: true,
        translation: { vi: "Bất cứ khi nào có thông tin mới" },
      },
      {
        text: "Only when the customer asks",
        correct: false,
        translation: { vi: "Chỉ khi khách hàng yêu cầu" },
      },
      {
        text: "At the end of the project",
        correct: false,
        translation: { vi: "Vào cuối dự án" },
      },
    ],
  },
  {
    id: 33,
    question: "What is the 'Entry Criteria' for System Testing?",
    translation: { vi: "'Tiêu chí bắt đầu' cho Kiểm thử hệ thống là gì?" },
    answers: [
      {
        text: "Unit testing is completed",
        correct: false,
        translation: { vi: "Kiểm thử đơn vị đã hoàn thành" },
      },
      {
        text: "Integration testing is completed",
        correct: true,
        translation: { vi: "Kiểm thử tích hợp đã hoàn thành" },
      },
      {
        text: "The code is written",
        correct: false,
        translation: { vi: "Mã nguồn đã được viết" },
      },
      {
        text: "The user has signed the contract",
        correct: false,
        translation: { vi: "Người dùng đã ký hợp đồng" },
      },
    ],
  },
  {
    id: 34,
    question: "Testing that focuses on 'how' the system works is:",
    translation: {
      vi: "Kiểm thử tập trung vào việc hệ thống hoạt động 'như thế nào' là:",
    },
    answers: [
      {
        text: "Functional testing",
        correct: false,
        translation: { vi: "Kiểm thử chức năng" },
      },
      {
        text: "Non-functional testing",
        correct: true,
        translation: { vi: "Kiểm thử phi chức năng" },
      },
      {
        text: "Structural testing",
        correct: false,
        translation: { vi: "Kiểm thử cấu trúc" },
      },
      {
        text: "Regression testing",
        correct: false,
        translation: { vi: "Kiểm thử hồi quy" },
      },
    ],
  },
  {
    id: 35,
    question: "The 'Mistake' made by a human is called:",
    translation: { vi: "'Sai sót' do con người tạo ra được gọi là:" },
    answers: [
      { text: "Error", correct: true, translation: { vi: "Error (Sai sót)" } },
      {
        text: "Defect",
        correct: false,
        translation: { vi: "Defect (Lỗi trong code)" },
      },
      {
        text: "Failure",
        correct: false,
        translation: { vi: "Failure (Sự cố khi chạy)" },
      },
      { text: "Bug", correct: false, translation: { vi: "Bug" } },
    ],
  },
  {
    id: 36,
    question: "A tester finds a defect. What should be in the report?",
    translation: {
      vi: "Người kiểm thử tìm thấy một lỗi. Điều gì nên có trong báo cáo?",
    },
    answers: [
      {
        text: "Steps to reproduce the defect",
        correct: true,
        translation: { vi: "Các bước để tái hiện lỗi" },
      },
      {
        text: "The name of the developer who made the mistake",
        correct: false,
        translation: { vi: "Tên của lập trình viên đã mắc lỗi" },
      },
      {
        text: "The tester's personal opinion",
        correct: false,
        translation: { vi: "Ý kiến cá nhân của người kiểm thử" },
      },
      {
        text: "The cost of fixing the bug",
        correct: false,
        translation: { vi: "Chi phí để sửa lỗi" },
      },
    ],
  },
  {
    id: 37,
    question: "Which review technique requires a 'Checklist'?",
    translation: { vi: "Kỹ thuật review nào yêu cầu một 'Checklist'?" },
    answers: [
      {
        text: "Ad-hoc review",
        correct: false,
        translation: { vi: "Review ngẫu hứng" },
      },
      {
        text: "Checklist-based review",
        correct: true,
        translation: { vi: "Review dựa trên danh mục kiểm tra" },
      },
      {
        text: "Perspective-based reading",
        correct: false,
        translation: { vi: "Đọc dựa trên quan điểm" },
      },
      {
        text: "Role-based review",
        correct: false,
        translation: { vi: "Review dựa trên vai trò" },
      },
    ],
  },
  {
    id: 38,
    question: "What is the main benefit of Early Testing?",
    translation: { vi: "Lợi ích chính của việc Kiểm thử sớm là gì?" },
    answers: [
      {
        text: "It saves time and money",
        correct: true,
        translation: { vi: "Tiết kiệm thời gian và tiền bạc" },
      },
      {
        text: "It allows developers to relax",
        correct: false,
        translation: { vi: "Cho phép lập trình viên thư giãn" },
      },
      {
        text: "It makes the software run faster",
        correct: false,
        translation: { vi: "Làm cho phần mềm chạy nhanh hơn" },
      },
      {
        text: "It replaces the need for reviews",
        correct: false,
        translation: { vi: "Thay thế nhu cầu review" },
      },
    ],
  },
  {
    id: 39,
    question: "Which of the following is a Project Risk?",
    translation: { vi: "Điều nào sau đây là Rủi ro Dự án?" },
    answers: [
      {
        text: "A function has wrong calculation",
        correct: false,
        translation: { vi: "Một chức năng có tính toán sai" },
      },
      {
        text: "The software crashes often",
        correct: false,
        translation: { vi: "Phần mềm bị treo thường xuyên" },
      },
      {
        text: "Lack of personnel with required skills",
        correct: true,
        translation: { vi: "Thiếu nhân sự có kỹ năng cần thiết" },
      },
      {
        text: "Security vulnerability",
        correct: false,
        translation: { vi: "Lỗ hổng bảo mật" },
      },
    ],
  },
  {
    id: 40,
    question: "In Decision Table testing, what is a 'Rule'?",
    translation: {
      vi: "Trong kiểm thử Bảng quyết định, 'Quy tắc' (Rule) là gì?",
    },
    answers: [
      {
        text: "A law of the country",
        correct: false,
        translation: { vi: "Một đạo luật của quốc gia" },
      },
      {
        text: "A combination of conditions and their resulting actions",
        correct: true,
        translation: {
          vi: "Sự kết hợp của các điều kiện và các hành động kết quả",
        },
      },
      {
        text: "The maximum number of test cases",
        correct: false,
        translation: { vi: "Số lượng ca kiểm thử tối đa" },
      },
      {
        text: "A coding standard",
        correct: false,
        translation: { vi: "Một tiêu chuẩn lập trình" },
      },
    ],
  },
  {
    id: 41,
    question: "When is Exploratory Testing most useful?",
    translation: {
      vi: "Khi nào Kiểm thử khám phá (Exploratory Testing) hữu ích nhất?",
    },
    answers: [
      {
        text: "When there are no requirements or time is limited",
        correct: true,
        translation: { vi: "Khi không có yêu cầu hoặc thời gian bị hạn chế" },
      },
      {
        text: "When the system is very simple",
        correct: false,
        translation: { vi: "Khi hệ thống rất đơn giản" },
      },
      {
        text: "When we want to automate all tests",
        correct: false,
        translation: {
          vi: "Khi chúng ta muốn tự động hóa tất cả các bài kiểm thử",
        },
      },
      {
        text: "When the developers are highly skilled",
        correct: false,
        translation: { vi: "Khi các lập trình viên có kỹ năng rất cao" },
      },
    ],
  },
  {
    id: 42,
    question: "Which of the following is a 'Dynamic' activity?",
    translation: { vi: "Hoạt động nào sau đây là hoạt động 'Động'?" },
    answers: [
      {
        text: "Executing test cases on the software",
        correct: true,
        translation: { vi: "Thực thi các ca kiểm thử trên phần mềm" },
      },
      {
        text: "Reviewing the requirements",
        correct: false,
        translation: { vi: "Review các yêu cầu" },
      },
      {
        text: "Analyzing the design",
        correct: false,
        translation: { vi: "Phân tích thiết kế" },
      },
      {
        text: "Writing the test plan",
        correct: false,
        translation: { vi: "Viết kế hoạch kiểm thử" },
      },
    ],
  },
  {
    id: 43,
    question:
      "What does the '7th Principle of Testing' state about Absence-of-errors fallacy?",
    translation: {
      vi: "Nguyên tắc kiểm thử thứ 7 nói gì về sự ngụy biện 'vắng bóng lỗi'?",
    },
    answers: [
      {
        text: "Finding all bugs means the system is successful",
        correct: false,
        translation: {
          vi: "Tìm thấy tất cả các lỗi có nghĩa là hệ thống thành công",
        },
      },
      {
        text: "Finding bugs doesn't help if the system is unusable",
        correct: true,
        translation: {
          vi: "Tìm lỗi không giúp ích gì nếu hệ thống không thể sử dụng được",
        },
      },
      {
        text: "The system should never have bugs",
        correct: false,
        translation: { vi: "Hệ thống không bao giờ được có lỗi" },
      },
      {
        text: "Testing proves the absence of bugs",
        correct: false,
        translation: { vi: "Kiểm thử chứng minh sự vắng bóng của lỗi" },
      },
    ],
  },
  {
    id: 44,
    question: "Which test level is usually performed by users?",
    translation: { vi: "Cấp độ kiểm thử nào thường do người dùng thực hiện?" },
    answers: [
      {
        text: "Component Testing",
        correct: false,
        translation: { vi: "Kiểm thử thành phần" },
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
        text: "User Acceptance Testing (UAT)",
        correct: true,
        translation: { vi: "Kiểm thử chấp nhận người dùng" },
      },
    ],
  },
  {
    id: 45,
    question: "What is the purpose of Configuration Management in testing?",
    translation: { vi: "Mục đích của Quản lý cấu hình trong kiểm thử là gì?" },
    answers: [
      {
        text: "To maintain the integrity of test artifacts",
        correct: true,
        translation: {
          vi: "Để duy trì tính toàn vẹn của các sản phẩm kiểm thử",
        },
      },
      {
        text: "To manage the project budget",
        correct: false,
        translation: { vi: "Để quản lý ngân sách dự án" },
      },
      {
        text: "To assign tasks to testers",
        correct: false,
        translation: { vi: "Để phân công nhiệm vụ cho người kiểm thử" },
      },
      {
        text: "To choose the best testing tool",
        correct: false,
        translation: { vi: "Để chọn công cụ kiểm thử tốt nhất" },
      },
    ],
  },
  {
    id: 46,
    question:
      "Which of the following is an objective of a pilot project for tool selection?",
    translation: {
      vi: "Mục tiêu nào sau đây của dự án thí điểm (pilot project) khi chọn công cụ?",
    },
    answers: [
      {
        text: "To learn how the tool works",
        correct: true,
        translation: { vi: "Để học cách công cụ hoạt động" },
      },
      {
        text: "To find all bugs in the system",
        correct: false,
        translation: { vi: "Để tìm tất cả lỗi trong hệ thống" },
      },
      {
        text: "To finish the project faster",
        correct: false,
        translation: { vi: "Để kết thúc dự án nhanh hơn" },
      },
      {
        text: "To reduce the number of testers",
        correct: false,
        translation: { vi: "Để giảm số lượng người kiểm thử" },
      },
    ],
  },
  {
    id: 47,
    question: "A 'Root Cause' of a defect is:",
    translation: { vi: "'Nguyên nhân gốc rễ' của một lỗi là:" },
    answers: [
      {
        text: "The visible symptom of the failure",
        correct: false,
        translation: { vi: "Triệu chứng hữu hình của sự cố" },
      },
      {
        text: "The earliest action that led to the defect",
        correct: true,
        translation: { vi: "Hành động sớm nhất dẫn đến lỗi đó" },
      },
      {
        text: "The person who reported the bug",
        correct: false,
        translation: { vi: "Người đã báo cáo lỗi" },
      },
      {
        text: "The code line where the bug is",
        correct: false,
        translation: { vi: "Dòng mã chứa lỗi" },
      },
    ],
  },
  {
    id: 48,
    question:
      "Which of the following is NOT a typical test object for system testing?",
    translation: {
      vi: "Điều nào sau đây KHÔNG phải là đối tượng kiểm thử điển hình của kiểm thử hệ thống?",
    },
    answers: [
      {
        text: "System specifications",
        correct: false,
        translation: { vi: "Thông số kỹ thuật hệ thống" },
      },
      {
        text: "User manuals",
        correct: false,
        translation: { vi: "Hướng dẫn sử dụng" },
      },
      {
        text: "Component source code",
        correct: true,
        translation: { vi: "Mã nguồn thành phần" },
      },
      {
        text: "Risk analysis reports",
        correct: false,
        translation: { vi: "Báo cáo phân tích rủi ro" },
      },
    ],
  },
  {
    id: 49,
    question: "What is the main task of 'Test Implementation'?",
    translation: {
      vi: "Nhiệm vụ chính của 'Thực hiện kiểm thử' (Test Implementation) là gì?",
    },
    answers: [
      {
        text: "Developing and prioritizing test cases",
        correct: true,
        translation: { vi: "Phát triển và ưu tiên các ca kiểm thử" },
      },
      {
        text: "Executing test cases",
        correct: false,
        translation: { vi: "Thực thi các ca kiểm thử" },
      },
      {
        text: "Designing test conditions",
        correct: false,
        translation: { vi: "Thiết kế các điều kiện kiểm thử" },
      },
      {
        text: "Defining test strategy",
        correct: false,
        translation: { vi: "Xác định chiến lược kiểm thử" },
      },
    ],
  },
  {
    id: 50,
    question: "Which activity is part of the 'Test Completion' phase?",
    translation: {
      vi: "Hoạt động nào là một phần của giai đoạn 'Hoàn tất kiểm thử'?",
    },
    answers: [
      {
        text: "Creating a Test Summary Report",
        correct: true,
        translation: { vi: "Tạo Báo cáo tổng kết kiểm thử" },
      },
      {
        text: "Analyzing defects",
        correct: false,
        translation: { vi: "Phân tích lỗi" },
      },
      {
        text: "Executing regression tests",
        correct: false,
        translation: { vi: "Thực thi kiểm thử hồi quy" },
      },
      {
        text: "Writing test cases",
        correct: false,
        translation: { vi: "Viết các ca kiểm thử" },
      },
    ],
  },
];
