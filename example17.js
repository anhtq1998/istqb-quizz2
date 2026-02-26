export const questions = [
  // CHƯƠNG 1: NGUYÊN LÝ CƠ BẢN (01-05)
  {
    id: 1,
    question: "A regression test is failure. This means that...",
    translation: {
      vi: "Một bài kiểm tra hồi quy bị thất bại. Điều này có nghĩa là...",
    },
    answers: [
      {
        text: "A change has introduced a new defect in an unchanged area.",
        correct: true,
        translation: {
          vi: "Một thay đổi đã tạo ra khiếm khuyết (defect) mới trong một khu vực không thay đổi.",
        },
      },
      {
        text: "The software has never worked before.",
        correct: false,
        translation: { vi: "Phần mềm chưa bao giờ hoạt động trước đây." },
      },
      {
        text: "The test environment is always broken.",
        correct: false,
        translation: { vi: "Môi trường kiểm thử luôn bị hỏng." },
      },
      {
        text: "The defect fix was not successful.",
        correct: false,
        translation: { vi: "Việc sửa lỗi đã không thành công." },
      },
    ],
  },
  {
    id: 2,
    question:
      "Which of the following is an example of 'Testing is context dependent'?",
    translation: {
      vi: "Ví dụ nào sau đây minh họa cho nguyên lý 'Kiểm thử phụ thuộc vào ngữ cảnh'?",
    },
    answers: [
      {
        text: "Testing a safety-critical system differently than an e-commerce site.",
        correct: true,
        translation: {
          vi: "Kiểm thử hệ thống an toàn tính mạng khác với một trang thương mại điện tử.",
        },
      },
      {
        text: "Running the same tests every time code changes.",
        correct: false,
        translation: {
          vi: "Chạy cùng một bài kiểm tra mỗi khi code thay đổi.",
        },
      },
      {
        text: "Finding bugs early to save costs.",
        correct: false,
        translation: { vi: "Tìm lỗi sớm để tiết kiệm chi phí." },
      },
      {
        text: "Checking only the most used features.",
        correct: false,
        translation: {
          vi: "Chỉ kiểm tra các tính năng được sử dụng nhiều nhất.",
        },
      },
    ],
  },
  {
    id: 3,
    question: "The 'Pesticide Paradox' refers to...",
    translation: {
      vi: "Nghịch lý thuốc trừ sâu (Pesticide Paradox) đề cập đến...",
    },
    answers: [
      {
        text: "Repeating the same tests will eventually find no new defects.",
        correct: true,
        translation: {
          vi: "Lặp lại cùng một bài kiểm tra mãi sẽ không tìm thấy lỗi mới.",
        },
      },
      {
        text: "Tests that are too difficult to execute.",
        correct: false,
        translation: { vi: "Các bài kiểm tra quá khó để thực hiện." },
      },
      {
        text: "Bugs that are impossible to fix.",
        correct: false,
        translation: { vi: "Những lỗi không thể sửa được." },
      },
      {
        text: "Using automated tools to find bugs.",
        correct: false,
        translation: { vi: "Sử dụng công cụ tự động để tìm lỗi." },
      },
    ],
  },
  {
    id: 4,
    question: "What is a 'Failure'?",
    translation: { vi: "Hư hỏng/Sự cố (Failure) là gì?" },
    answers: [
      {
        text: "A deviation of the software from its expected delivery or service.",
        correct: true,
        translation: {
          vi: "Sự sai lệch của phần mềm so với kết quả hoặc dịch vụ mong đợi.",
        },
      },
      {
        text: "A human action that produces an incorrect result.",
        correct: false,
        translation: { vi: "Một hành động của con người tạo ra kết quả sai." },
      },
      {
        text: "A physical flaw in the code.",
        correct: false,
        translation: { vi: "Một khiếm khuyết vật lý trong mã nguồn." },
      },
      {
        text: "A documentation error.",
        correct: false,
        translation: { vi: "Một lỗi trong tài liệu." },
      },
    ],
  },
  {
    id: 5,
    question: "Root cause analysis is used to...",
    translation: { vi: "Phân tích nguyên nhân gốc rễ được dùng để..." },
    answers: [
      {
        text: "Identify the reason for defects to prevent them from recurring.",
        correct: true,
        translation: {
          vi: "Xác định nguyên nhân gây khiếm khuyết (defects) để ngăn chúng tái diễn.",
        },
      },
      {
        text: "Blame the developer who made the mistake.",
        correct: false,
        translation: { vi: "Đổ lỗi cho lập trình viên đã gây ra sai lầm." },
      },
      {
        text: "Estimate the project cost.",
        correct: false,
        translation: { vi: "Ước tính chi phí dự án." },
      },
      {
        text: "Calculate the number of test cases.",
        correct: false,
        translation: { vi: "Tính toán số lượng ca kiểm thử." },
      },
    ],
  },

  // CHƯƠNG 2: KIỂM THỬ TRONG VÒNG ĐỜI (06-11)
  {
    id: 6,
    question: "Non-functional testing includes checking...",
    translation: { vi: "Kiểm thử phi chức năng bao gồm việc kiểm tra..." },
    answers: [
      {
        text: "Usability and Performance.",
        correct: true,
        translation: { vi: "Khả năng sử dụng và Hiệu suất." },
      },
      {
        text: "Business processes.",
        correct: false,
        translation: { vi: "Các quy trình nghiệp vụ." },
      },
      {
        text: "Code logic.",
        correct: false,
        translation: { vi: "Logic của mã nguồn." },
      },
      {
        text: "User login functionality.",
        correct: false,
        translation: { vi: "Chức năng đăng nhập của người dùng." },
      },
    ],
  },
  {
    id: 7,
    question: "In Agile development, testing is...",
    translation: { vi: "Trong phát triển Agile, kiểm thử là..." },
    answers: [
      {
        text: "Integrated throughout the lifecycle.",
        correct: true,
        translation: { vi: "Được tích hợp xuyên suốt vòng đời phát triển." },
      },
      {
        text: "Done only at the end of a sprint.",
        correct: false,
        translation: { vi: "Chỉ được thực hiện vào cuối mỗi sprint." },
      },
      {
        text: "Performed by a separate team in another building.",
        correct: false,
        translation: {
          vi: "Được thực hiện bởi một đội riêng biệt ở tòa nhà khác.",
        },
      },
      {
        text: "Excluded from the development process.",
        correct: false,
        translation: { vi: "Bị loại khỏi quy trình phát triển." },
      },
    ],
  },
  {
    id: 8,
    question: "What is the main focus of Acceptance Testing?",
    translation: { vi: "Trọng tâm chính của Kiểm thử chấp nhận là gì?" },
    answers: [
      {
        text: "Establishing confidence in the system.",
        correct: true,
        translation: { vi: "Xây dựng niềm tin vào hệ thống." },
      },
      {
        text: "Finding as many bugs as possible.",
        correct: false,
        translation: { vi: "Tìm càng nhiều lỗi càng tốt." },
      },
      {
        text: "Testing individual modules.",
        correct: false,
        translation: { vi: "Kiểm thử các mô-đun riêng lẻ." },
      },
      {
        text: "Checking the code syntax.",
        correct: false,
        translation: { vi: "Kiểm tra cú pháp mã nguồn." },
      },
    ],
  },
  {
    id: 9,
    question: "Maintenance testing is performed on...",
    translation: { vi: "Kiểm thử bảo trì được thực hiện trên..." },
    answers: [
      {
        text: "An existing operational system.",
        correct: true,
        translation: { vi: "Một hệ thống hiện có đang vận hành." },
      },
      {
        text: "A system under initial development.",
        correct: false,
        translation: {
          vi: "Một hệ thống đang trong giai đoạn phát triển ban đầu.",
        },
      },
      {
        text: "The prototype only.",
        correct: false,
        translation: { vi: "Chỉ trên bản mẫu (prototype)." },
      },
      {
        text: "Requirements documents.",
        correct: false,
        translation: { vi: "Tài liệu yêu cầu." },
      },
    ],
  },
  {
    id: 10,
    question: "Alpha testing is done by...",
    translation: { vi: "Kiểm thử Alpha được thực hiện bởi..." },
    answers: [
      {
        text: "The developer's organization, but not the development team.",
        correct: true,
        translation: {
          vi: "Tổ chức của nhà phát triển, nhưng không phải bởi đội phát triển.",
        },
      },
      {
        text: "The end users at their own locations.",
        correct: false,
        translation: { vi: "Người dùng cuối tại địa điểm của chính họ." },
      },
      {
        text: "The marketing team.",
        correct: false,
        translation: { vi: "Đội ngũ marketing." },
      },
      {
        text: "Independent agencies only.",
        correct: false,
        translation: { vi: "Chỉ các đại lý độc lập." },
      },
    ],
  },
  {
    id: 11,
    question: "Which of the following is a trigger for maintenance testing?",
    translation: { vi: "Điều nào sau đây là tác nhân cho kiểm thử bảo trì?" },
    answers: [
      {
        text: "System migration to a new platform.",
        correct: true,
        translation: { vi: "Di chuyển hệ thống sang một nền tảng mới." },
      },
      {
        text: "Initial coding of a feature.",
        correct: false,
        translation: { vi: "Viết mã ban đầu cho một tính năng." },
      },
      {
        text: "Hiring a new manager.",
        correct: false,
        translation: { vi: "Thuê một quản lý mới." },
      },
      {
        text: "Writing the test plan.",
        correct: false,
        translation: { vi: "Viết kế hoạch kiểm thử." },
      },
    ],
  },

  // CHƯƠNG 3: KIỂM THỬ TĨNH (12-16)
  {
    id: 12,
    question: "What is an informal review?",
    translation: { vi: "Xem xét không chính thức (Informal review) là gì?" },
    answers: [
      {
        text: "A review without a documented process.",
        correct: true,
        translation: {
          vi: "Một cuộc xem xét không có quy trình được lập thành tài liệu.",
        },
      },
      {
        text: "A review that only involves managers.",
        correct: false,
        translation: { vi: "Một cuộc xem xét chỉ bao gồm các quản lý." },
      },
      {
        text: "A review where no defects are found.",
        correct: false,
        translation: { vi: "Một cuộc xem xét không tìm thấy lỗi nào." },
      },
      {
        text: "An automated code scan.",
        correct: false,
        translation: { vi: "Một lần quét mã tự động." },
      },
    ],
  },
  {
    id: 13,
    question: "A 'Walkthrough' is led by...",
    translation: { vi: "Một buổi 'Walkthrough' được dẫn dắt bởi..." },
    answers: [
      { text: "The Author.", correct: true, translation: { vi: "Tác giả." } },
      {
        text: "The Moderator.",
        correct: false,
        translation: { vi: "Người điều phối." },
      },
      { text: "The Tester.", correct: false, translation: { vi: "Tester." } },
      { text: "The CEO.", correct: false, translation: { vi: "CEO." } },
    ],
  },
  {
    id: 14,
    question: "Defects found during static analysis include...",
    translation: {
      vi: "Các lỗi được tìm thấy trong quá trình phân tích tĩnh bao gồm...",
    },
    answers: [
      {
        text: "Variables that are never used.",
        correct: true,
        translation: { vi: "Các biến không bao giờ được sử dụng." },
      },
      {
        text: "System crashes under heavy load.",
        correct: false,
        translation: { vi: "Hệ thống bị treo dưới tải trọng nặng." },
      },
      {
        text: "Slow database response time.",
        correct: false,
        translation: { vi: "Thời gian phản hồi cơ sở dữ liệu chậm." },
      },
      {
        text: "Incorrect business logic during execution.",
        correct: false,
        translation: {
          vi: "Logic nghiệp vụ không chính xác trong lúc thực thi.",
        },
      },
    ],
  },
  {
    id: 15,
    question: "Inspection is the most...",
    translation: { vi: "Kiểm tra (Inspection) là loại hình..." },
    answers: [
      {
        text: "Formal review process.",
        correct: true,
        translation: { vi: "Quy trình xem xét chính thức nhất." },
      },
      {
        text: "Cheap review process.",
        correct: false,
        translation: { vi: "Quy trình xem xét rẻ nhất." },
      },
      {
        text: "Fast review process.",
        correct: false,
        translation: { vi: "Quy trình xem xét nhanh nhất." },
      },
      {
        text: "Simple review process.",
        correct: false,
        translation: { vi: "Quy trình xem xét đơn giản nhất." },
      },
    ],
  },
  {
    id: 16,
    question: "Which of the following can be reviewed?",
    translation: {
      vi: "Điều nào sau đây có thể được thực hiện xem xét (review)?",
    },
    answers: [
      {
        text: "All work products (Requirements, Code, Test Plans).",
        correct: true,
        translation: {
          vi: "Tất cả sản phẩm công việc (Yêu cầu, Mã nguồn, Kế hoạch kiểm thử).",
        },
      },
      {
        text: "Only the source code.",
        correct: false,
        translation: { vi: "Chỉ mã nguồn." },
      },
      {
        text: "Only the requirements.",
        correct: false,
        translation: { vi: "Chỉ tài liệu yêu cầu." },
      },
      {
        text: "Only the user manual.",
        correct: false,
        translation: { vi: "Chỉ hướng dẫn sử dụng." },
      },
    ],
  },

  // CHƯƠNG 4: KỸ THUẬT KIỂM THỬ (17-27)
  {
    id: 17,
    question: "Black-box techniques are based on...",
    translation: { vi: "Các kỹ thuật hộp đen dựa trên..." },
    answers: [
      {
        text: "Requirements and specifications.",
        correct: true,
        translation: { vi: "Yêu cầu và đặc tả." },
      },
      {
        text: "Internal code structure.",
        correct: false,
        translation: { vi: "Cấu trúc mã bên trong." },
      },
      {
        text: "The tester's intuition only.",
        correct: false,
        translation: { vi: "Chỉ dựa vào trực giác của tester." },
      },
      {
        text: "The database schema.",
        correct: false,
        translation: { vi: "Sơ đồ cơ sở dữ liệu." },
      },
    ],
  },
  {
    id: 18,
    question:
      "Using 3-point boundary value analysis, what values are tested for '1 to 10'?",
    translation: {
      vi: "Sử dụng phân tích giá trị biên 3 điểm, các giá trị nào được kiểm thử cho dải '1 đến 10'?",
    },
    answers: [
      {
        text: "0, 1, 2 and 9, 10, 11.",
        correct: true,
        translation: { vi: "0, 1, 2 và 9, 10, 11." },
      },
      { text: "1, 10.", correct: false, translation: { vi: "1, 10." } },
      { text: "1, 5, 10.", correct: false, translation: { vi: "1, 5, 10." } },
      {
        text: "0, 1, 10, 11.",
        correct: false,
        translation: { vi: "0, 1, 10, 11." },
      },
    ],
  },
  {
    id: 19,
    question: "Decision testing ensures that...",
    translation: { vi: "Kiểm thử quyết định đảm bảo rằng..." },
    answers: [
      {
        text: "Both True and False outcomes of a decision are tested.",
        correct: true,
        translation: {
          vi: "Cả hai kết quả Đúng và Sai của một quyết định đều được kiểm thử.",
        },
      },
      {
        text: "All statements are executed once.",
        correct: false,
        translation: { vi: "Tất cả các câu lệnh được thực thi một lần." },
      },
      {
        text: "The user is happy with the decision.",
        correct: false,
        translation: { vi: "Người dùng hài lòng với quyết định." },
      },
      {
        text: "The code is written in C#.",
        correct: false,
        translation: { vi: "Mã nguồn được viết bằng C#." },
      },
    ],
  },
  {
    id: 20,
    question: "Experience-based testing is especially useful when...",
    translation: {
      vi: "Kiểm thử dựa trên kinh nghiệm đặc biệt hữu ích khi...",
    },
    answers: [
      {
        text: "There are no or poor specifications.",
        correct: true,
        translation: { vi: "Không có hoặc có rất ít tài liệu đặc tả." },
      },
      {
        text: "The system is very simple.",
        correct: false,
        translation: { vi: "Hệ thống rất đơn giản." },
      },
      {
        text: "The code is 100% covered.",
        correct: false,
        translation: { vi: "Mã nguồn đã được bao phủ 100%." },
      },
      {
        text: "Testing is fully automated.",
        correct: false,
        translation: { vi: "Kiểm thử đã được tự động hóa hoàn toàn." },
      },
    ],
  },
  {
    id: 21,
    question: "State transition diagrams help to...",
    translation: { vi: "Sơ đồ chuyển đổi trạng thái giúp..." },
    answers: [
      {
        text: "Visualize the possible software states and events.",
        correct: true,
        translation: {
          vi: "Hình dung các trạng thái và sự kiện có thể có của phần mềm.",
        },
      },
      {
        text: "Calculate the project budget.",
        correct: false,
        translation: { vi: "Tính toán ngân sách dự án." },
      },
      {
        text: "Write the code faster.",
        correct: false,
        translation: { vi: "Viết mã nhanh hơn." },
      },
      {
        text: "Find performance bottlenecks.",
        correct: false,
        translation: { vi: "Tìm nút thắt cổ chai về hiệu suất." },
      },
    ],
  },
  {
    id: 22,
    question: "In White-box testing, 100% decision coverage implies...",
    translation: {
      vi: "Trong kiểm thử hộp trắng, bao phủ quyết định 100% ngụ ý...",
    },
    answers: [
      {
        text: "100% statement coverage.",
        correct: true,
        translation: { vi: "Bao phủ câu lệnh 100%." },
      },
      {
        text: "0% statement coverage.",
        correct: false,
        translation: { vi: "Bao phủ câu lệnh 0%." },
      },
      {
        text: "That no more bugs exist.",
        correct: false,
        translation: { vi: "Rằng không còn lỗi nào tồn tại." },
      },
      {
        text: "That the system is secure.",
        correct: false,
        translation: { vi: "Rằng hệ thống an toàn." },
      },
    ],
  },
  {
    id: 23,
    question: "User Story testing is a part of...",
    translation: { vi: "Kiểm thử User Story là một phần của..." },
    answers: [
      {
        text: "Black-box testing.",
        correct: true,
        translation: { vi: "Kiểm thử hộp đen." },
      },
      {
        text: "White-box testing.",
        correct: false,
        translation: { vi: "Kiểm thử hộp trắng." },
      },
      {
        text: "Static analysis.",
        correct: false,
        translation: { vi: "Phân tích tĩnh." },
      },
      {
        text: "Unit testing.",
        correct: false,
        translation: { vi: "Kiểm thử đơn vị." },
      },
    ],
  },
  {
    id: 24,
    question: "When should we use Error Guessing?",
    translation: {
      vi: "Khi nào chúng ta nên sử dụng Đoán lỗi (Error Guessing)?",
    },
    answers: [
      {
        text: "After formal techniques to find 'hidden' defects.",
        correct: true,
        translation: { vi: "Sau các kỹ thuật chính quy để tìm các lỗi 'ẩn'." },
      },
      {
        text: "As the only testing technique.",
        correct: false,
        translation: { vi: "Như là kỹ thuật kiểm thử duy nhất." },
      },
      {
        text: "To replace automated testing.",
        correct: false,
        translation: { vi: "Để thay thế kiểm thử tự động." },
      },
      {
        text: "When we don't have any experience.",
        correct: false,
        translation: { vi: "Khi chúng ta không có bất kỳ kinh nghiệm nào." },
      },
    ],
  },
  {
    id: 25,
    question: "A 'Use Case' describes...",
    translation: { vi: "Một 'Use Case' mô tả..." },
    answers: [
      {
        text: "Interactions between actors and the system.",
        correct: true,
        translation: { vi: "Sự tương tác giữa các tác nhân và hệ thống." },
      },
      {
        text: "How the code is structured.",
        correct: false,
        translation: { vi: "Mã nguồn được cấu trúc như thế nào." },
      },
      {
        text: "The database table relationships.",
        correct: false,
        translation: { vi: "Mối quan hệ giữa các bảng cơ sở dữ liệu." },
      },
      {
        text: "The hardware specifications.",
        correct: false,
        translation: { vi: "Các đặc tả phần cứng." },
      },
    ],
  },
  {
    id: 26,
    question: "Checklist-based testing is highly dependent on...",
    translation: {
      vi: "Kiểm thử dựa trên danh sách kiểm tra phụ thuộc nhiều vào...",
    },
    answers: [
      {
        text: "The quality of the checklist.",
        correct: true,
        translation: { vi: "Chất lượng của danh sách kiểm tra." },
      },
      {
        text: "The speed of the computer.",
        correct: false,
        translation: { vi: "Tốc độ của máy tính." },
      },
      {
        text: "The programming language.",
        correct: false,
        translation: { vi: "Ngôn ngữ lập trình." },
      },
      {
        text: "The number of developers.",
        correct: false,
        translation: { vi: "Số lượng lập trình viên." },
      },
    ],
  },
  {
    id: 27,
    question: "Collaborative User Story writing helps in...",
    translation: { vi: "Việc hợp tác viết User Story giúp ích trong việc..." },
    answers: [
      {
        text: "Shared understanding of requirements.",
        correct: true,
        translation: { vi: "Thấu hiểu chung về các yêu cầu." },
      },
      {
        text: "Reducing the number of testers.",
        correct: false,
        translation: { vi: "Giảm số lượng tester." },
      },
      {
        text: "Increasing the code size.",
        correct: false,
        translation: { vi: "Tăng kích thước mã nguồn." },
      },
      {
        text: "Finding bugs in production.",
        correct: false,
        translation: { vi: "Tìm lỗi trên môi trường thực tế." },
      },
    ],
  },

  // CHƯƠNG 5: QUẢN LÝ KIỂM THỬ (28-35)
  {
    id: 28,
    question: "Test Monitoring involves...",
    translation: { vi: "Theo dõi kiểm thử (Test Monitoring) bao gồm..." },
    answers: [
      {
        text: "Checking actual progress against the plan.",
        correct: true,
        translation: { vi: "Kiểm tra tiến độ thực tế so với kế hoạch." },
      },
      {
        text: "Fixing the bugs found.",
        correct: false,
        translation: { vi: "Sửa các lỗi được tìm thấy." },
      },
      {
        text: "Writing the code.",
        correct: false,
        translation: { vi: "Viết mã nguồn." },
      },
      {
        text: "Hiring new staff.",
        correct: false,
        translation: { vi: "Thuê nhân viên mới." },
      },
    ],
  },
  {
    id: 29,
    question: "Project risks include...",
    translation: { vi: "Rủi ro dự án bao gồm..." },
    answers: [
      {
        text: "Skill shortage in the team.",
        correct: true,
        translation: { vi: "Sự thiếu hụt kỹ năng trong đội ngũ." },
      },
      {
        text: "Poor software performance.",
        correct: false,
        translation: { vi: "Hiệu suất phần mềm kém." },
      },
      {
        text: "Calculation errors in the app.",
        correct: false,
        translation: { vi: "Lỗi tính toán trong ứng dụng." },
      },
      {
        text: "Security vulnerabilities.",
        correct: false,
        translation: { vi: "Các lỗ hổng bảo mật." },
      },
    ],
  },
  {
    id: 30,
    question: "A Test Strategy is...",
    translation: { vi: "Chiến lược kiểm thử (Test Strategy) là..." },
    answers: [
      {
        text: "A high-level document describing the testing approach.",
        correct: true,
        translation: {
          vi: "Một tài liệu cấp cao mô tả cách tiếp cận kiểm thử.",
        },
      },
      {
        text: "A list of test cases.",
        correct: false,
        translation: { vi: "Một danh sách các ca kiểm thử." },
      },
      {
        text: "The bug report template.",
        correct: false,
        translation: { vi: "Mẫu báo cáo lỗi." },
      },
      {
        text: "The daily schedule of a tester.",
        correct: false,
        translation: { vi: "Lịch trình hàng ngày của một tester." },
      },
    ],
  },
  {
    id: 31,
    question: "What is an exit criterion?",
    translation: { vi: "Tiêu chí kết thúc (exit criterion) là gì?" },
    answers: [
      {
        text: "Conditions that must be met to stop testing.",
        correct: true,
        translation: { vi: "Các điều kiện phải đạt được để dừng kiểm thử." },
      },
      {
        text: "The reason why a tester leaves the company.",
        correct: false,
        translation: { vi: "Lý do tại sao một tester rời khỏi công ty." },
      },
      {
        text: "The first step of the test process.",
        correct: false,
        translation: { vi: "Bước đầu tiên của quy trình kiểm thử." },
      },
      {
        text: "A tool used for testing.",
        correct: false,
        translation: { vi: "Một công cụ được sử dụng để kiểm thử." },
      },
    ],
  },
  {
    id: 32,
    question: "Who is usually responsible for fixing a defect?",
    translation: { vi: "Ai thường chịu trách nhiệm sửa một khuyết tật?" },
    answers: [
      {
        text: "A Developer.",
        correct: true,
        translation: { vi: "Lập trình viên." },
      },
      { text: "A Tester.", correct: false, translation: { vi: "Tester." } },
      {
        text: "The Test Manager.",
        correct: false,
        translation: { vi: "Quản lý kiểm thử." },
      },
      {
        text: "The Customer.",
        correct: false,
        translation: { vi: "Khách hàng." },
      },
    ],
  },
  {
    id: 33,
    question: "Defect severity refers to...",
    translation: {
      vi: "Mức độ nghiêm trọng của lỗi (Defect severity) đề cập đến...",
    },
    answers: [
      {
        text: "The impact of the defect on the system's operation.",
        correct: true,
        translation: { vi: "Tác động của lỗi đối với hoạt động của hệ thống." },
      },
      {
        text: "How quickly the bug should be fixed.",
        correct: false,
        translation: { vi: "Lỗi cần được sửa nhanh như thế nào." },
      },
      {
        text: "Who found the bug.",
        correct: false,
        translation: { vi: "Ai đã tìm thấy lỗi." },
      },
      {
        text: "How many lines of code are affected.",
        correct: false,
        translation: { vi: "Có bao nhiêu dòng mã bị ảnh hưởng." },
      },
    ],
  },
  {
    id: 34,
    question: "Testing estimates can be based on...",
    translation: { vi: "Ước lượng kiểm thử có thể dựa trên..." },
    answers: [
      {
        text: "Metrics from previous projects.",
        correct: true,
        translation: { vi: "Các chỉ số từ các dự án trước đó." },
      },
      {
        text: "The current weather.",
        correct: false,
        translation: { vi: "Thời tiết hiện tại." },
      },
      {
        text: "The company's stock price.",
        correct: false,
        translation: { vi: "Giá cổ phiếu của công ty." },
      },
      {
        text: "The number of coffee machines in the office.",
        correct: false,
        translation: { vi: "Số lượng máy pha cà phê trong văn phòng." },
      },
    ],
  },
  {
    id: 35,
    question: "Test execution schedule defines...",
    translation: { vi: "Lịch trình thực thi kiểm thử xác định..." },
    answers: [
      {
        text: "The order in which test cases are run.",
        correct: true,
        translation: { vi: "Thứ tự các ca kiểm thử được chạy." },
      },
      {
        text: "The salary of testers.",
        correct: false,
        translation: { vi: "Mức lương của tester." },
      },
      {
        text: "The date the project started.",
        correct: false,
        translation: { vi: "Ngày dự án bắt đầu." },
      },
      {
        text: "The programming language to use.",
        correct: false,
        translation: { vi: "Ngôn ngữ lập trình sẽ sử dụng." },
      },
    ],
  },

  // CHƯƠNG 6: CÔNG CỤ KIỂM THỬ (36-40)
  {
    id: 36,
    question: "A 'Test Harness' is used to...",
    translation: { vi: "Một 'Test Harness' được sử dụng để..." },
    answers: [
      {
        text: "Execute tests and monitor results.",
        correct: true,
        translation: { vi: "Thực thi kiểm thử và theo dõi kết quả." },
      },
      {
        text: "Write the user requirements.",
        correct: false,
        translation: { vi: "Viết các yêu cầu người dùng." },
      },
      {
        text: "Design the user interface.",
        correct: false,
        translation: { vi: "Thiết kế giao diện người dùng." },
      },
      {
        text: "Manage the project budget.",
        correct: false,
        translation: { vi: "Quản lý ngân sách dự án." },
      },
    ],
  },
  {
    id: 37,
    question: "Tool support for performance testing is necessary because...",
    translation: {
      vi: "Sự hỗ trợ của công cụ cho kiểm thử hiệu suất là cần thiết vì...",
    },
    answers: [
      {
        text: "It is hard to simulate many users manually.",
        correct: true,
        translation: {
          vi: "Rất khó để mô phỏng nhiều người dùng một cách thủ công.",
        },
      },
      {
        text: "Tools are always cheaper than people.",
        correct: false,
        translation: { vi: "Công cụ luôn rẻ hơn con người." },
      },
      {
        text: "Manual testers cannot find performance bugs.",
        correct: false,
        translation: {
          vi: "Tester thủ công không thể tìm thấy lỗi hiệu suất.",
        },
      },
      {
        text: "Tools never make mistakes.",
        correct: false,
        translation: { vi: "Công cụ không bao giờ mắc lỗi." },
      },
    ],
  },
  {
    id: 38,
    question: "A 'Keyword-driven' automation framework...",
    translation: {
      vi: "Một khung tự động hóa 'hướng từ khóa' (Keyword-driven)...",
    },
    answers: [
      {
        text: "Uses action words to describe test steps.",
        correct: true,
        translation: {
          vi: "Sử dụng các từ hành động để mô tả các bước kiểm thử.",
        },
      },
      {
        text: "Only works with SQL keywords.",
        correct: false,
        translation: { vi: "Chỉ hoạt động với các từ khóa SQL." },
      },
      {
        text: "Requires no programming at all.",
        correct: false,
        translation: { vi: "Không yêu cầu lập trình chút nào." },
      },
      {
        text: "Is the slowest type of framework.",
        correct: false,
        translation: { vi: "Là loại khung làm việc chậm nhất." },
      },
    ],
  },
  {
    id: 39,
    question: "When selecting a tool, the most important step is...",
    translation: { vi: "Khi lựa chọn một công cụ, bước quan trọng nhất là..." },
    answers: [
      {
        text: "Assess the tool's fit with the organization.",
        correct: true,
        translation: { vi: "Đánh giá mức độ phù hợp của công cụ với tổ chức." },
      },
      {
        text: "Buy the most expensive one.",
        correct: false,
        translation: { vi: "Mua cái đắt nhất." },
      },
      {
        text: "Pick the one with the best UI.",
        correct: false,
        translation: { vi: "Chọn cái có giao diện đẹp nhất." },
      },
      {
        text: "Ask the developer to choose.",
        correct: false,
        translation: { vi: "Yêu cầu lập trình viên chọn." },
      },
    ],
  },
  {
    id: 40,
    question: "Static analysis tools can find...",
    translation: { vi: "Công cụ phân tích tĩnh có thể tìm thấy..." },
    answers: [
      {
        text: "Coding standard violations.",
        correct: true,
        translation: { vi: "Vi phạm các tiêu chuẩn lập trình." },
      },
      {
        text: "User dissatisfaction.",
        correct: false,
        translation: { vi: "Sự không hài lòng của người dùng." },
      },
      {
        text: "Response time issues.",
        correct: false,
        translation: { vi: "Các vấn đề về thời gian phản hồi." },
      },
      {
        text: "Memory leaks during execution.",
        correct: false,
        translation: { vi: "Rò rỉ bộ nhớ trong lúc thực thi." },
      },
    ],
  },
];
