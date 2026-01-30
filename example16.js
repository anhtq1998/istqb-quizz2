export const questions = [
  // CHƯƠNG 1: NGUYÊN LÝ CƠ BẢN (1-5)
  {
    id: 1,
    question: "Which of the following is a common objective of testing?",
    translation: { vi: "Mục tiêu chung nào sau đây là của kiểm thử?" },
    answers: [
      {
        text: "Finding defects and failures.",
        correct: true,
        translation: { vi: "Tìm kiếm khuyết tật và lỗi hỏng." },
      },
      {
        text: "Proving that the software is 100% bug-free.",
        correct: false,
        translation: { vi: "Chứng minh rằng phần mềm không có lỗi 100%." },
      },
      {
        text: "Increasing the cost of the project.",
        correct: false,
        translation: { vi: "Tăng chi phí của dự án." },
      },
      {
        text: "Ensuring that no more changes will be made.",
        correct: false,
        translation: {
          vi: "Đảm bảo rằng sẽ không có thay đổi nào được thực hiện thêm.",
        },
      },
    ],
  },
  {
    id: 2,
    question:
      "Testing shows the presence of defects, not their absence. This is...",
    translation: {
      vi: "Kiểm thử cho thấy sự hiện diện của lỗi, không phải sự vắng mặt của chúng. Đây là...",
    },
    answers: [
      {
        text: "A testing principle.",
        correct: true,
        translation: { vi: "Một nguyên lý kiểm thử." },
      },
      {
        text: "A testing objective.",
        correct: false,
        translation: { vi: "Một mục tiêu kiểm thử." },
      },
      {
        text: "A testing activity.",
        correct: false,
        translation: { vi: "Một hoạt động kiểm thử." },
      },
      {
        text: "A testing procedure.",
        correct: false,
        translation: { vi: "Một quy trình kiểm thử." },
      },
    ],
  },
  {
    id: 3,
    question: "What is the difference between an error and a defect?",
    translation: {
      vi: "Sự khác biệt giữa lỗi (error) và khuyết tật (defect) là gì?",
    },
    answers: [
      {
        text: "An error is made by a person; a defect is a flaw in the system.",
        correct: true,
        translation: {
          vi: "Lỗi do con người tạo ra; khuyết tật là một sai sót trong hệ thống.",
        },
      },
      {
        text: "A defect is made by a person; an error is a flaw in the system.",
        correct: false,
        translation: {
          vi: "Khuyết tật do con người tạo ra; lỗi là một sai sót trong hệ thống.",
        },
      },
      {
        text: "There is no difference.",
        correct: false,
        translation: { vi: "Không có sự khác biệt." },
      },
      {
        text: "An error causes a failure; a defect is the result of a failure.",
        correct: false,
        translation: {
          vi: "Lỗi gây ra thất bại; khuyết tật là kết quả của thất bại.",
        },
      },
    ],
  },
  {
    id: 4,
    question:
      "When should testing activities start in the software development lifecycle?",
    translation: {
      vi: "Các hoạt động kiểm thử nên bắt đầu khi nào trong vòng đời phát triển phần mềm?",
    },
    answers: [
      {
        text: "As early as possible.",
        correct: true,
        translation: { vi: "Càng sớm càng tốt." },
      },
      {
        text: "After the code is written.",
        correct: false,
        translation: { vi: "Sau khi mã nguồn đã được viết." },
      },
      {
        text: "Just before the release.",
        correct: false,
        translation: { vi: "Ngay trước khi phát hành." },
      },
      {
        text: "During the maintenance phase.",
        correct: false,
        translation: { vi: "Trong giai đoạn bảo trì." },
      },
    ],
  },
  {
    id: 5,
    question: "Exhaustive testing is...",
    translation: { vi: "Kiểm thử kiệt quệ (toàn bộ) là..." },
    answers: [
      {
        text: "Impossible for all but trivial cases.",
        correct: true,
        translation: {
          vi: "Không thể thực hiện trừ các trường hợp tầm thường.",
        },
      },
      {
        text: "Always possible with automated tools.",
        correct: false,
        translation: { vi: "Luôn khả thi với các công cụ tự động." },
      },
      {
        text: "Required by most quality standards.",
        correct: false,
        translation: {
          vi: "Được yêu cầu bởi hầu hết các tiêu chuẩn chất lượng.",
        },
      },
      {
        text: "The best way to find all defects.",
        correct: false,
        translation: { vi: "Cách tốt nhất để tìm thấy tất cả các lỗi." },
      },
    ],
  },

  // CHƯƠNG 2: KIỂM THỬ TRONG VÒNG ĐỜI (6-11)
  {
    id: 6,
    question: "Which of the following is a component of the test process?",
    translation: { vi: "Thành phần nào sau đây thuộc quy trình kiểm thử?" },
    answers: [
      {
        text: "Test planning and control.",
        correct: true,
        translation: { vi: "Lập kế hoạch và kiểm soát kiểm thử." },
      },
      {
        text: "Writing code.",
        correct: false,
        translation: { vi: "Viết code." },
      },
      {
        text: "Marketing the software.",
        correct: false,
        translation: { vi: "Tiếp thị phần mềm." },
      },
      {
        text: "Project budget management.",
        correct: false,
        translation: { vi: "Quản lý ngân sách dự án." },
      },
    ],
  },
  {
    id: 7,
    question: "In a V-model, which level of testing is usually the first?",
    translation: {
      vi: "Trong mô hình chữ V, mức độ kiểm thử nào thường là đầu tiên?",
    },
    answers: [
      {
        text: "Component testing.",
        correct: true,
        translation: { vi: "Kiểm thử thành phần (Unit test)." },
      },
      {
        text: "System testing.",
        correct: false,
        translation: { vi: "Kiểm thử hệ thống." },
      },
      {
        text: "Acceptance testing.",
        correct: false,
        translation: { vi: "Kiểm thử chấp nhận." },
      },
      {
        text: "Integration testing.",
        correct: false,
        translation: { vi: "Kiểm thử tích hợp." },
      },
    ],
  },
  {
    id: 8,
    question: "Regression testing should be performed...",
    translation: { vi: "Kiểm thử hồi quy nên được thực hiện khi nào?" },
    answers: [
      {
        text: "After a change to the software or its environment.",
        correct: true,
        translation: {
          vi: "Sau khi thay đổi phần mềm hoặc môi trường của nó.",
        },
      },
      {
        text: "Only at the end of the project.",
        correct: false,
        translation: { vi: "Chỉ vào cuối dự án." },
      },
      {
        text: "Whenever a new tester joins the team.",
        correct: false,
        translation: { vi: "Bất cứ khi nào có tester mới gia nhập đội." },
      },
      {
        text: "Only when the software fails in production.",
        correct: false,
        translation: { vi: "Chỉ khi phần mềm bị lỗi trên môi trường thực tế." },
      },
    ],
  },
  {
    id: 9,
    question: "What is the purpose of confirmation testing?",
    translation: { vi: "Mục đích của kiểm thử xác nhận (re-testing) là gì?" },
    answers: [
      {
        text: "To confirm that a defect has been successfully fixed.",
        correct: true,
        translation: { vi: "Để xác nhận rằng một lỗi đã được sửa thành công." },
      },
      {
        text: "To find new defects in the system.",
        correct: false,
        translation: { vi: "Để tìm các lỗi mới trong hệ thống." },
      },
      {
        text: "To check if the system meets the business requirements.",
        correct: false,
        translation: {
          vi: "Để kiểm tra xem hệ thống có đáp ứng yêu cầu kinh doanh không.",
        },
      },
      {
        text: "To verify the system performance.",
        correct: false,
        translation: { vi: "Để xác minh hiệu suất hệ thống." },
      },
    ],
  },
  {
    id: 10,
    question: "Impact analysis is most useful for...",
    translation: {
      vi: "Phân tích tác động (Impact analysis) hữu ích nhất cho...",
    },
    answers: [
      {
        text: "Maintenance testing.",
        correct: true,
        translation: { vi: "Kiểm thử bảo trì." },
      },
      {
        text: "Component testing.",
        correct: false,
        translation: { vi: "Kiểm thử thành phần." },
      },
      {
        text: "Initial development.",
        correct: false,
        translation: { vi: "Phát triển ban đầu." },
      },
      {
        text: "Writing user manuals.",
        correct: false,
        translation: { vi: "Viết hướng dẫn sử dụng." },
      },
    ],
  },
  {
    id: 11,
    question: "Which test level focuses on the interaction between modules?",
    translation: {
      vi: "Mức độ kiểm thử nào tập trung vào sự tương tác giữa các mô-đun?",
    },
    answers: [
      {
        text: "Integration testing.",
        correct: true,
        translation: { vi: "Kiểm thử tích hợp." },
      },
      {
        text: "System testing.",
        correct: false,
        translation: { vi: "Kiểm thử hệ thống." },
      },
      {
        text: "Acceptance testing.",
        correct: false,
        translation: { vi: "Kiểm thử chấp nhận." },
      },
      {
        text: "Component testing.",
        correct: false,
        translation: { vi: "Kiểm thử thành phần." },
      },
    ],
  },

  // CHƯƠNG 3: KIỂM THỬ TĨNH (12-16)
  {
    id: 12,
    question: "Static testing techniques include...",
    translation: { vi: "Các kỹ thuật kiểm thử tĩnh bao gồm..." },
    answers: [
      {
        text: "Reviews and static analysis.",
        correct: true,
        translation: { vi: "Xem xét (Reviews) và phân tích tĩnh." },
      },
      {
        text: "Executing test cases.",
        correct: false,
        translation: { vi: "Thực thi các ca kiểm thử." },
      },
      {
        text: "Black-box testing.",
        correct: false,
        translation: { vi: "Kiểm thử hộp đen." },
      },
      {
        text: "White-box testing.",
        correct: false,
        translation: { vi: "Kiểm thử hộp trắng." },
      },
    ],
  },
  {
    id: 13,
    question: "Which of the following is a benefit of static testing?",
    translation: { vi: "Lợi ích nào sau đây là của kiểm thử tĩnh?" },
    answers: [
      {
        text: "Detecting defects earlier and cheaper.",
        correct: true,
        translation: { vi: "Phát hiện lỗi sớm hơn và rẻ hơn." },
      },
      {
        text: "Measuring system performance.",
        correct: false,
        translation: { vi: "Đo lường hiệu suất hệ thống." },
      },
      {
        text: "Checking the code execution speed.",
        correct: false,
        translation: { vi: "Kiểm tra tốc độ thực thi mã." },
      },
      {
        text: "Reducing the need for unit testing.",
        correct: false,
        translation: { vi: "Giảm nhu cầu kiểm thử đơn vị." },
      },
    ],
  },
  {
    id: 14,
    question: "Who is responsible for leading a formal review?",
    translation: {
      vi: "Ai là người chịu trách nhiệm dẫn dắt một buổi xem xét chính thức (formal review)?",
    },
    answers: [
      {
        text: "The moderator (facilitator).",
        correct: true,
        translation: { vi: "Người điều phối (moderator)." },
      },
      { text: "The author.", correct: false, translation: { vi: "Tác giả." } },
      {
        text: "The manager.",
        correct: false,
        translation: { vi: "Người quản lý." },
      },
      { text: "The tester.", correct: false, translation: { vi: "Tester." } },
    ],
  },
  {
    id: 15,
    question: "A technical review is...",
    translation: { vi: "Xem xét kỹ thuật (Technical review) là..." },
    answers: [
      {
        text: "A peer review to achieve consensus and find defects.",
        correct: true,
        translation: {
          vi: "Một cuộc xem xét đồng đẳng để đạt được sự đồng thuận và tìm lỗi.",
        },
      },
      {
        text: "An informal chat between developers.",
        correct: false,
        translation: {
          vi: "Một cuộc trò chuyện không chính thức giữa các lập trình viên.",
        },
      },
      {
        text: "A meeting with the client only.",
        correct: false,
        translation: { vi: "Một cuộc họp chỉ với khách hàng." },
      },
      {
        text: "Testing the code by running it.",
        correct: false,
        translation: { vi: "Kiểm thử mã bằng cách chạy nó." },
      },
    ],
  },
  {
    id: 16,
    question: "Which role in a review records all the findings?",
    translation: {
      vi: "Vai trò nào trong buổi review ghi lại tất cả các phát hiện?",
    },
    answers: [
      {
        text: "Scribe (Recorder).",
        correct: true,
        translation: { vi: "Thư ký (Scribe)." },
      },
      { text: "Author.", correct: false, translation: { vi: "Tác giả." } },
      {
        text: "Reviewer.",
        correct: false,
        translation: { vi: "Người xem xét." },
      },
      { text: "Leader.", correct: false, translation: { vi: "Trưởng nhóm." } },
    ],
  },

  // CHƯƠNG 4: KỸ THUẬT KIỂM THỬ (17-27)
  {
    id: 17,
    question: "Equivalence partitioning is a...",
    translation: { vi: "Phân vùng tương đương là một kỹ thuật..." },
    answers: [
      {
        text: "Black-box technique.",
        correct: true,
        translation: { vi: "Kỹ thuật hộp đen." },
      },
      {
        text: "White-box technique.",
        correct: false,
        translation: { vi: "Kỹ thuật hộp trắng." },
      },
      {
        text: "Experience-based technique.",
        correct: false,
        translation: { vi: "Kỹ thuật dựa trên kinh nghiệm." },
      },
      {
        text: "Structural technique.",
        correct: false,
        translation: { vi: "Kỹ thuật cấu trúc." },
      },
    ],
  },
  {
    id: 18,
    question:
      "If a field accepts values from 1 to 10, which are the boundary values?",
    translation: {
      vi: "Nếu một trường chấp nhận giá trị từ 1 đến 10, các giá trị biên là gì?",
    },
    answers: [
      {
        text: "1, 10 (and potentially 0, 11).",
        correct: true,
        translation: { vi: "1, 10 (và có thể là 0, 11)." },
      },
      { text: "1, 5, 10.", correct: false, translation: { vi: "1, 5, 10." } },
      {
        text: "0, 1, 10, 11.",
        correct: false,
        translation: { vi: "0, 1, 10, 11." },
      },
      { text: "2, 9.", correct: false, translation: { vi: "2, 9." } },
    ],
  },
  {
    id: 19,
    question: "State transition testing is most useful for...",
    translation: { vi: "Kiểm thử chuyển đổi trạng thái hữu ích nhất cho..." },
    answers: [
      {
        text: "Systems with complex business logic and states.",
        correct: true,
        translation: {
          vi: "Hệ thống có logic nghiệp vụ và trạng thái phức tạp.",
        },
      },
      {
        text: "Testing individual calculations.",
        correct: false,
        translation: { vi: "Kiểm thử các tính toán riêng lẻ." },
      },
      {
        text: "Testing user interfaces only.",
        correct: false,
        translation: { vi: "Chỉ kiểm thử giao diện người dùng." },
      },
      {
        text: "Measuring code coverage.",
        correct: false,
        translation: { vi: "Đo lường độ bao phủ mã." },
      },
    ],
  },
  {
    id: 20,
    question: "Decision table testing is used for...",
    translation: { vi: "Kiểm thử bảng quyết định được dùng để..." },
    answers: [
      {
        text: "Testing combinations of inputs.",
        correct: true,
        translation: { vi: "Kiểm thử các tổ hợp của đầu vào." },
      },
      {
        text: "Testing memory leaks.",
        correct: false,
        translation: { vi: "Kiểm thử rò rỉ bộ nhớ." },
      },
      {
        text: "Checking performance under load.",
        correct: false,
        translation: { vi: "Kiểm tra hiệu suất dưới tải trọng." },
      },
      {
        text: "Testing sequence of events.",
        correct: false,
        translation: { vi: "Kiểm thử trình tự các sự kiện." },
      },
    ],
  },
  {
    id: 21,
    question: "White-box testing is based on...",
    translation: { vi: "Kiểm thử hộp trắng dựa trên..." },
    answers: [
      {
        text: "Internal structure of the code.",
        correct: true,
        translation: { vi: "Cấu trúc bên trong của mã nguồn." },
      },
      {
        text: "System requirements.",
        correct: false,
        translation: { vi: "Yêu cầu hệ thống." },
      },
      {
        text: "User stories.",
        correct: false,
        translation: { vi: "Câu chuyện của người dùng." },
      },
      {
        text: "Experience of the tester.",
        correct: false,
        translation: { vi: "Kinh nghiệm của tester." },
      },
    ],
  },
  {
    id: 22,
    question: "What is statement coverage?",
    translation: { vi: "Độ bao phủ câu lệnh (Statement coverage) là gì?" },
    answers: [
      {
        text: "The percentage of executable statements exercised by a test suite.",
        correct: true,
        translation: {
          vi: "Phần trăm các câu lệnh thực thi được chạy bởi bộ kiểm thử.",
        },
      },
      {
        text: "The percentage of lines of code written.",
        correct: false,
        translation: { vi: "Phần trăm các dòng mã đã viết." },
      },
      {
        text: "The percentage of decisions made.",
        correct: false,
        translation: { vi: "Phần trăm các quyết định đã thực hiện." },
      },
      {
        text: "The number of bugs found in the code.",
        correct: false,
        translation: { vi: "Số lượng lỗi tìm thấy trong mã." },
      },
    ],
  },
  {
    id: 23,
    question: "Error guessing is a...",
    translation: { vi: "Đoán lỗi (Error guessing) là một..." },
    answers: [
      {
        text: "Experience-based technique.",
        correct: true,
        translation: { vi: "Kỹ thuật dựa trên kinh nghiệm." },
      },
      {
        text: "Black-box technique.",
        correct: false,
        translation: { vi: "Kỹ thuật hộp đen." },
      },
      {
        text: "White-box technique.",
        correct: false,
        translation: { vi: "Kỹ thuật hộp trắng." },
      },
      {
        text: "Static technique.",
        correct: false,
        translation: { vi: "Kỹ thuật tĩnh." },
      },
    ],
  },
  {
    id: 24,
    question: "Exploratory testing is best described as...",
    translation: {
      vi: "Kiểm thử thăm dò (Exploratory testing) được mô tả tốt nhất là...",
    },
    answers: [
      {
        text: "Simultaneous learning, test design, and execution.",
        correct: true,
        translation: {
          vi: "Học hỏi, thiết kế và thực thi kiểm thử đồng thời.",
        },
      },
      {
        text: "Testing without any plan.",
        correct: false,
        translation: { vi: "Kiểm thử mà không có kế hoạch." },
      },
      {
        text: "Testing by users only.",
        correct: false,
        translation: { vi: "Chỉ kiểm thử bởi người dùng." },
      },
      {
        text: "Automated regression testing.",
        correct: false,
        translation: { vi: "Kiểm thử hồi quy tự động." },
      },
    ],
  },
  {
    id: 25,
    question: "In a decision table, 'X' usually represents...",
    translation: { vi: "Trong bảng quyết định, 'X' thường đại diện cho..." },
    answers: [
      {
        text: "An action to be performed.",
        correct: true,
        translation: { vi: "Một hành động sẽ được thực hiện." },
      },
      {
        text: "A condition that is true.",
        correct: false,
        translation: { vi: "Một điều kiện đúng." },
      },
      {
        text: "A condition that is false.",
        correct: false,
        translation: { vi: "Một điều kiện sai." },
      },
      {
        text: "An invalid input.",
        correct: false,
        translation: { vi: "Một đầu vào không hợp lệ." },
      },
    ],
  },
  {
    id: 26,
    question: "Which technique is best for finding logic errors in code?",
    translation: { vi: "Kỹ thuật nào tốt nhất để tìm lỗi logic trong mã?" },
    answers: [
      {
        text: "Decision testing.",
        correct: true,
        translation: { vi: "Kiểm thử quyết định." },
      },
      {
        text: "Equivalence partitioning.",
        correct: false,
        translation: { vi: "Phân vùng tương đương." },
      },
      {
        text: "Boundary value analysis.",
        correct: false,
        translation: { vi: "Phân tích giá trị biên." },
      },
      {
        text: "Checklist-based testing.",
        correct: false,
        translation: { vi: "Kiểm thử dựa trên danh sách kiểm tra." },
      },
    ],
  },
  {
    id: 27,
    question: "Checklist-based testing is...",
    translation: { vi: "Kiểm thử dựa trên danh sách kiểm tra là..." },
    answers: [
      {
        text: "An experience-based technique using a list of points to check.",
        correct: true,
        translation: {
          vi: "Kỹ thuật dựa trên kinh nghiệm sử dụng danh sách các điểm cần kiểm tra.",
        },
      },
      {
        text: "A formal way to document code.",
        correct: false,
        translation: { vi: "Một cách chính thức để tài liệu hóa mã nguồn." },
      },
      {
        text: "Only used by developers.",
        correct: false,
        translation: { vi: "Chỉ được sử dụng bởi lập trình viên." },
      },
      {
        text: "A type of static analysis tool.",
        correct: false,
        translation: { vi: "Một loại công cụ phân tích tĩnh." },
      },
    ],
  },

  // CHƯƠNG 5: QUẢN LÝ KIỂM THỬ (28-35)
  {
    id: 28,
    question: "Who is typically responsible for the Test Plan?",
    translation: {
      vi: "Ai thường chịu trách nhiệm cho Kế hoạch kiểm thử (Test Plan)?",
    },
    answers: [
      {
        text: "The Test Manager.",
        correct: true,
        translation: { vi: "Quản lý kiểm thử (Test Manager)." },
      },
      {
        text: "The Developer.",
        correct: false,
        translation: { vi: "Lập trình viên." },
      },
      {
        text: "The Stakeholder.",
        correct: false,
        translation: { vi: "Bên liên quan." },
      },
      {
        text: "The Business Analyst.",
        correct: false,
        translation: { vi: "Nhân viên phân tích nghiệp vụ." },
      },
    ],
  },
  {
    id: 29,
    question: "A 'Risk' is defined as...",
    translation: { vi: "Một 'Rủi ro' được định nghĩa là..." },
    answers: [
      {
        text: "A potential problem that may happen in the future.",
        correct: true,
        translation: {
          vi: "Một vấn đề tiềm ẩn có thể xảy ra trong tương lai.",
        },
      },
      {
        text: "A bug that has been found.",
        correct: false,
        translation: { vi: "Một lỗi đã được tìm thấy." },
      },
      {
        text: "The cost of the project.",
        correct: false,
        translation: { vi: "Chi phí của dự án." },
      },
      {
        text: "A person leaving the team.",
        correct: false,
        translation: { vi: "Một người rời khỏi đội." },
      },
    ],
  },
  {
    id: 30,
    question: "Which of the following is a product risk?",
    translation: { vi: "Điều nào sau đây là rủi ro sản phẩm (product risk)?" },
    answers: [
      {
        text: "The software does not perform its intended functions.",
        correct: true,
        translation: {
          vi: "Phần mềm không thực hiện đúng các chức năng dự kiến.",
        },
      },
      {
        text: "The test environment is not ready.",
        correct: false,
        translation: { vi: "Môi trường kiểm thử chưa sẵn sàng." },
      },
      {
        text: "The budget is cut.",
        correct: false,
        translation: { vi: "Ngân sách bị cắt giảm." },
      },
      {
        text: "Lack of skilled testers.",
        correct: false,
        translation: { vi: "Thiếu tester có kỹ năng." },
      },
    ],
  },
  {
    id: 31,
    question: "What is the purpose of a test summary report?",
    translation: {
      vi: "Mục đích của báo cáo tổng kết kiểm thử (test summary report) là gì?",
    },
    answers: [
      {
        text: "To communicate the results and status of testing.",
        correct: true,
        translation: { vi: "Để thông báo kết quả và tình trạng kiểm thử." },
      },
      {
        text: "To list all the code changes.",
        correct: false,
        translation: { vi: "Để liệt kê tất cả các thay đổi mã." },
      },
      {
        text: "To fire the bad developers.",
        correct: false,
        translation: { vi: "Để sa thải các lập trình viên kém." },
      },
      {
        text: "To plan the next project.",
        correct: false,
        translation: { vi: "Để lập kế hoạch cho dự án tiếp theo." },
      },
    ],
  },
  {
    id: 32,
    question: "Which of the following is a test entry criterion?",
    translation: {
      vi: "Điều nào sau đây là tiêu chí bắt đầu kiểm thử (entry criterion)?",
    },
    answers: [
      {
        text: "The test environment is ready.",
        correct: true,
        translation: { vi: "Môi trường kiểm thử đã sẵn sàng." },
      },
      {
        text: "90% of test cases have passed.",
        correct: false,
        translation: { vi: "90% các ca kiểm thử đã vượt qua." },
      },
      {
        text: "The product is released to the market.",
        correct: false,
        translation: { vi: "Sản phẩm được phát hành ra thị trường." },
      },
      {
        text: "Budget is exhausted.",
        correct: false,
        translation: { vi: "Ngân sách đã cạn kiệt." },
      },
    ],
  },
  {
    id: 33,
    question: "Independent testing is useful because...",
    translation: { vi: "Kiểm thử độc lập hữu ích vì..." },
    answers: [
      {
        text: "Testers have different biases than developers.",
        correct: true,
        translation: {
          vi: "Tester có những định kiến khác với lập trình viên.",
        },
      },
      {
        text: "It is cheaper.",
        correct: false,
        translation: { vi: "Nó rẻ hơn." },
      },
      {
        text: "It is faster.",
        correct: false,
        translation: { vi: "Nó nhanh hơn." },
      },
      {
        text: "Developers don't need to test anymore.",
        correct: false,
        translation: { vi: "Lập trình viên không cần phải kiểm thử nữa." },
      },
    ],
  },
  {
    id: 34,
    question: "A defect report should include...",
    translation: { vi: "Một báo cáo lỗi nên bao gồm..." },
    answers: [
      {
        text: "Steps to reproduce and expected results.",
        correct: true,
        translation: { vi: "Các bước để tái hiện và kết quả mong đợi." },
      },
      {
        text: "The developer's home address.",
        correct: false,
        translation: { vi: "Địa chỉ nhà của lập trình viên." },
      },
      {
        text: "Marketing strategy.",
        correct: false,
        translation: { vi: "Chiến lược tiếp thị." },
      },
      {
        text: "Project profit margins.",
        correct: false,
        translation: { vi: "Lợi nhuận của dự án." },
      },
    ],
  },
  {
    id: 35,
    question: "Risk impact refers to...",
    translation: { vi: "Tác động của rủi ro (Risk impact) đề cập đến..." },
    answers: [
      {
        text: "The damage caused if the risk occurs.",
        correct: true,
        translation: { vi: "Thiệt hại gây ra nếu rủi ro xảy ra." },
      },
      {
        text: "The probability of the risk happening.",
        correct: false,
        translation: { vi: "Xác suất rủi ro xảy ra." },
      },
      {
        text: "The cost of testing.",
        correct: false,
        translation: { vi: "Chi phí kiểm thử." },
      },
      {
        text: "The time it takes to fix a bug.",
        correct: false,
        translation: { vi: "Thời gian để sửa một lỗi." },
      },
    ],
  },

  // CHƯƠNG 6: CÔNG CỤ KIỂM THỬ (36-40)
  {
    id: 36,
    question: "What is a risk of using test automation tools?",
    translation: {
      vi: "Rủi ro khi sử dụng các công cụ kiểm thử tự động là gì?",
    },
    answers: [
      {
        text: "Unrealistic expectations of the tool's benefits.",
        correct: true,
        translation: { vi: "Kỳ vọng không thực tế về lợi ích của công cụ." },
      },
      {
        text: "The tool will replace all testers.",
        correct: false,
        translation: { vi: "Công cụ sẽ thay thế tất cả tester." },
      },
      {
        text: "The tool will write the requirements.",
        correct: false,
        translation: { vi: "Công cụ sẽ tự viết yêu cầu." },
      },
      {
        text: "Automated tests always find more bugs.",
        correct: false,
        translation: { vi: "Kiểm thử tự động luôn tìm được nhiều lỗi hơn." },
      },
    ],
  },
  {
    id: 37,
    question:
      "Which tool is used to manage test assets like test cases and results?",
    translation: {
      vi: "Công cụ nào được dùng để quản lý tài sản kiểm thử như các ca kiểm thử và kết quả?",
    },
    answers: [
      {
        text: "Test Management Tool.",
        correct: true,
        translation: { vi: "Công cụ quản lý kiểm thử." },
      },
      {
        text: "Static Analysis Tool.",
        correct: false,
        translation: { vi: "Công cụ phân tích tĩnh." },
      },
      {
        text: "Performance Testing Tool.",
        correct: false,
        translation: { vi: "Công cụ kiểm thử hiệu suất." },
      },
      {
        text: "Configuration Management Tool.",
        correct: false,
        translation: { vi: "Công cụ quản lý cấu hình." },
      },
    ],
  },
  {
    id: 38,
    question: "A pilot project for a new tool is used to...",
    translation: {
      vi: "Một dự án thí điểm (pilot project) cho một công cụ mới được dùng để...",
    },
    answers: [
      {
        text: "Learn about the tool and assess its benefits.",
        correct: true,
        translation: { vi: "Tìm hiểu về công cụ và đánh giá lợi ích của nó." },
      },
      {
        text: "Test the most critical part of the system.",
        correct: false,
        translation: { vi: "Kiểm thử phần quan trọng nhất của hệ thống." },
      },
      {
        text: "Finish the project faster.",
        correct: false,
        translation: { vi: "Hoàn thành dự án nhanh hơn." },
      },
      {
        text: "Replace the manual testers immediately.",
        correct: false,
        translation: { vi: "Thay thế tester thủ công ngay lập tức." },
      },
    ],
  },
  {
    id: 39,
    question: "Configuration management provides...",
    translation: { vi: "Quản lý cấu hình cung cấp..." },
    answers: [
      {
        text: "Traceability between versions of test items.",
        correct: true,
        translation: {
          vi: "Khả năng truy vết giữa các phiên bản của đối tượng kiểm thử.",
        },
      },
      {
        text: "A way to find more bugs.",
        correct: false,
        translation: { vi: "Một cách để tìm thêm lỗi." },
      },
      {
        text: "Automated test execution.",
        correct: false,
        translation: { vi: "Thực thi kiểm thử tự động." },
      },
      {
        text: "Faster code compilation.",
        correct: false,
        translation: { vi: "Biên dịch mã nhanh hơn." },
      },
    ],
  },
  {
    id: 40,
    question: "What is data-driven testing?",
    translation: { vi: "Kiểm thử hướng dữ liệu (Data-driven testing) là gì?" },
    answers: [
      {
        text: "Using scripts that read data from a spreadsheet or database.",
        correct: true,
        translation: {
          vi: "Sử dụng các kịch bản đọc dữ liệu từ bảng tính hoặc cơ sở dữ liệu.",
        },
      },
      {
        text: "Testing only the database.",
        correct: false,
        translation: { vi: "Chỉ kiểm thử cơ sở dữ liệu." },
      },
      {
        text: "Testing with a lot of people.",
        correct: false,
        translation: { vi: "Kiểm thử với rất nhiều người." },
      },
      {
        text: "A method to generate test data randomly.",
        correct: false,
        translation: {
          vi: "Một phương pháp để tạo dữ liệu kiểm thử ngẫu nhiên.",
        },
      },
    ],
  },
];
