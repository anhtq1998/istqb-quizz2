export const questions = [
  {
    id: 1,
    question:
      "Which of the following is an example of a defect rather than a root cause?",
    translation: {
      vi: "Ví dụ nào sau đây là một lỗi (defect) thay vì là một nguyên nhân gốc rễ (root cause)?",
    },
    answers: [
      {
        text: "A programmer makes a mistake in the code.",
        correct: false,
        translation: { vi: "Lập trình viên mắc sai lầm trong mã nguồn." },
      },
      {
        text: "The software crashed when the user clicked 'Save'.",
        correct: true,
        translation: { vi: "Phần mềm bị sập khi người dùng nhấn 'Lưu'." },
      },
      {
        text: "The requirements were poorly documented.",
        correct: false,
        translation: { vi: "Tài liệu yêu cầu được viết kém." },
      },
      {
        text: "The developer had insufficient training.",
        correct: false,
        translation: { vi: "Nhà phát triển chưa được đào tạo bài bản." },
      },
    ],
  },
  {
    id: 2,
    question: "Testing should be started as early as possible in the SDLC to:",
    translation: {
      vi: "Kiểm thử nên được bắt đầu càng sớm càng tốt trong SDLC để:",
    },
    answers: [
      {
        text: "Reduce the cost of quality by finding defects early.",
        correct: true,
        translation: { vi: "Giảm chi phí chất lượng bằng cách tìm lỗi sớm." },
      },
      {
        text: "Ensure the project plan is accurate.",
        correct: false,
        translation: { vi: "Đảm bảo kế hoạch dự án là chính xác." },
      },
      {
        text: "Increase the total number of test cases.",
        correct: false,
        translation: { vi: "Tăng tổng số lượng kịch bản kiểm thử." },
      },
      {
        text: "Allow developers more time for coding.",
        correct: false,
        translation: {
          vi: "Cho phép lập trình viên có thêm thời gian viết mã.",
        },
      },
    ],
  },
  {
    id: 3,
    question: "Which of the following is a characteristic of Static Testing?",
    translation: {
      vi: "Đặc điểm nào sau đây là của Kiểm thử tĩnh (Static Testing)?",
    },
    answers: [
      {
        text: "It requires the execution of the software code.",
        correct: false,
        translation: { vi: "Nó yêu cầu thực thi mã nguồn phần mềm." },
      },
      {
        text: "It can find defects in documents like requirements.",
        correct: true,
        translation: {
          vi: "Nó có thể tìm thấy lỗi trong tài liệu như yêu cầu.",
        },
      },
      {
        text: "It is only performed by the testers.",
        correct: false,
        translation: { vi: "Nó chỉ được thực hiện bởi kiểm thử viên." },
      },
      {
        text: "It focuses on performance and reliability.",
        correct: false,
        translation: { vi: "Nó tập trung vào hiệu năng và độ tin cậy." },
      },
    ],
  },
  {
    id: 4,
    question: "In Equivalence Partitioning, what is the main goal?",
    translation: {
      vi: "Trong kỹ thuật Phân vùng tương đương, mục tiêu chính là gì?",
    },
    answers: [
      {
        text: "To test every possible input value.",
        correct: false,
        translation: { vi: "Để kiểm thử mọi giá trị đầu vào có thể." },
      },
      {
        text: "To reduce the number of test cases while maintaining coverage.",
        correct: true,
        translation: {
          vi: "Giảm số lượng kịch bản kiểm thử trong khi vẫn duy trì độ bao phủ.",
        },
      },
      {
        text: "To find all the boundary defects.",
        correct: false,
        translation: { vi: "Để tìm tất cả các lỗi biên." },
      },
      {
        text: "To ensure the code is 100% decision-covered.",
        correct: false,
        translation: {
          vi: "Để đảm bảo mã nguồn đạt 100% độ bao phủ quyết định.",
        },
      },
    ],
  },
  {
    id: 5,
    question:
      "Which of the following is a benefit of early stakeholder feedback?",
    translation: {
      vi: "Điều nào sau đây là lợi ích của việc nhận phản hồi sớm từ các bên liên quan?",
    },
    answers: [
      {
        text: "It allows for faster coding of requirements.",
        correct: false,
        translation: { vi: "Nó cho phép viết mã các yêu cầu nhanh hơn." },
      },
      {
        text: "It prevents misunderstandings of requirements.",
        correct: true,
        translation: { vi: "Nó giúp tránh những hiểu lầm về yêu cầu." },
      },
      {
        text: "It reduces the need for regression testing.",
        correct: false,
        translation: { vi: "Nó giảm nhu cầu kiểm thử hồi quy." },
      },
      {
        text: "It makes automation easier to implement.",
        correct: false,
        translation: {
          vi: "Nó làm cho việc triển khai tự động hóa dễ dàng hơn.",
        },
      },
    ],
  },
  {
    id: 6,
    question:
      "Which role is most likely to define the test environment requirements?",
    translation: {
      vi: "Vai trò nào sau đây có khả năng nhất trong việc xác định các yêu cầu về môi trường kiểm thử?",
    },
    answers: [
      {
        text: "Test Management role.",
        correct: true,
        translation: { vi: "Vai trò Quản lý kiểm thử." },
      },
      {
        text: "Testing role.",
        correct: false,
        translation: { vi: "Vai trò Kiểm thử viên." },
      },
      {
        text: "Developer role.",
        correct: false,
        translation: { vi: "Vai trò Lập trình viên." },
      },
      {
        text: "Product Owner role.",
        correct: false,
        translation: { vi: "Vai trò Chủ sở hữu sản phẩm." },
      },
    ],
  },
  {
    id: 7,
    question: "An advantage of the whole-team approach is:",
    translation: {
      vi: "Một ưu điểm của phương pháp tiếp cận toàn đội (whole-team approach) là:",
    },
    answers: [
      {
        text: "Testers do not need to perform any manual testing.",
        correct: false,
        translation: {
          vi: "Kiểm thử viên không cần thực hiện kiểm thử thủ công.",
        },
      },
      {
        text: "It improves communication and collaboration within the team.",
        correct: true,
        translation: { vi: "Nó cải thiện giao tiếp và cộng tác trong nhóm." },
      },
      {
        text: "It eliminates the need for any formal test documentation.",
        correct: false,
        translation: {
          vi: "Nó loại bỏ nhu cầu về các tài liệu kiểm thử chính thức.",
        },
      },
      {
        text: "Developers are solely responsible for quality.",
        correct: false,
        translation: {
          vi: "Lập trình viên chịu trách nhiệm duy nhất về chất lượng.",
        },
      },
    ],
  },
  {
    id: 8,
    question: "Which of the following is NOT a white-box test technique?",
    translation: {
      vi: "Kỹ thuật nào sau đây KHÔNG phải là kỹ thuật kiểm thử hộp trắng?",
    },
    answers: [
      {
        text: "Statement testing.",
        correct: false,
        translation: { vi: "Kiểm thử câu lệnh." },
      },
      {
        text: "Decision testing.",
        correct: false,
        translation: { vi: "Kiểm thử quyết định." },
      },
      {
        text: "Boundary value analysis.",
        correct: true,
        translation: { vi: "Phân tích giá trị biên." },
      },
      {
        text: "Branch testing.",
        correct: false,
        translation: { vi: "Kiểm thử nhánh." },
      },
    ],
  },
  {
    id: 9,
    question: "Regression testing should be performed:",
    translation: { vi: "Kiểm thử hồi quy nên được thực hiện:" },
    answers: [
      {
        text: "Only when the software is in the maintenance phase.",
        correct: false,
        translation: { vi: "Chỉ khi phần mềm đang trong giai đoạn bảo trì." },
      },
      {
        text: "After a change to the software or its environment.",
        correct: true,
        translation: {
          vi: "Sau khi có sự thay đổi đối với phần mềm hoặc môi trường của nó.",
        },
      },
      {
        text: "Only by independent testers.",
        correct: false,
        translation: { vi: "Chỉ bởi các kiểm thử viên độc lập." },
      },
      {
        text: "When the project budget allows for it.",
        correct: false,
        translation: { vi: "Khi ngân sách dự án cho phép." },
      },
    ],
  },
  {
    id: 10,
    question: "Which review type is led by the author of the work product?",
    translation: {
      vi: "Loại review nào được dẫn dắt bởi tác giả của sản phẩm công việc?",
    },
    answers: [
      {
        text: "Inspection.",
        correct: false,
        translation: { vi: "Kiểm tra (Inspection)." },
      },
      {
        text: "Walkthrough.",
        correct: true,
        translation: { vi: "Duyệt qua (Walkthrough)." },
      },
      {
        text: "Technical Review.",
        correct: false,
        translation: { vi: "Review kỹ thuật." },
      },
      {
        text: "Formal Review.",
        correct: false,
        translation: { vi: "Review chính thức." },
      },
    ],
  },
  {
    id: 11,
    question: "What is the primary difference between a mistake and a defect?",
    translation: {
      vi: "Sự khác biệt chính giữa sai lầm (mistake/error) và khiếm khuyết (defect) là gì?",
    },
    answers: [
      {
        text: "A mistake is a human action; a defect is an imperfection in a work product.",
        correct: true,
        translation: {
          vi: "Sai lầm là hành động của con người; khiếm khuyết là một sự không hoàn hảo trong sản phẩm.",
        },
      },
      {
        text: "A mistake is found by users; a defect is found by testers.",
        correct: false,
        translation: {
          vi: "Sai lầm được tìm thấy bởi người dùng; khiếm khuyết bởi kiểm thử viên.",
        },
      },
      {
        text: "They are synonyms.",
        correct: false,
        translation: { vi: "Chúng là các từ đồng nghĩa." },
      },
      {
        text: "A mistake is in the code; a defect is in the requirements.",
        correct: false,
        translation: {
          vi: "Sai lầm nằm trong mã nguồn; khiếm khuyết nằm trong yêu cầu.",
        },
      },
    ],
  },
  {
    id: 12,
    question:
      "A test technique that uses the experience of the tester to find defects is:",
    translation: {
      vi: "Kỹ thuật kiểm thử sử dụng kinh nghiệm của kiểm thử viên để tìm lỗi là:",
    },
    answers: [
      {
        text: "Black-box technique.",
        correct: false,
        translation: { vi: "Kỹ thuật hộp đen." },
      },
      {
        text: "Experience-based technique.",
        correct: true,
        translation: { vi: "Kỹ thuật dựa trên kinh nghiệm." },
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
    id: 13,
    question: "Which is a valid test objective?",
    translation: { vi: "Mục tiêu kiểm thử nào sau đây là hợp lệ?" },
    answers: [
      {
        text: "To prove that the software is 100% defect-free.",
        correct: false,
        translation: { vi: "Để chứng minh phần mềm không còn lỗi." },
      },
      {
        text: "To build confidence in the level of quality.",
        correct: true,
        translation: { vi: "Để xây dựng niềm tin vào mức độ chất lượng." },
      },
      {
        text: "To delay the software release.",
        correct: false,
        translation: { vi: "Để trì hoãn việc phát hành phần mềm." },
      },
      {
        text: "To replace the debugging activity.",
        correct: false,
        translation: { vi: "Để thay thế hoạt động gỡ lỗi (debugging)." },
      },
    ],
  },
  {
    id: 14,
    question: "Maintenance testing is performed on:",
    translation: { vi: "Kiểm thử bảo trì được thực hiện trên:" },
    answers: [
      {
        text: "New systems being developed.",
        correct: false,
        translation: { vi: "Các hệ thống mới đang được phát triển." },
      },
      {
        text: "Systems already in production.",
        correct: true,
        translation: { vi: "Các hệ thống đã được vận hành thực tế." },
      },
      {
        text: "Only systems that have crashed.",
        correct: false,
        translation: { vi: "Chỉ các hệ thống đã bị sập." },
      },
      {
        text: "Requirements before coding.",
        correct: false,
        translation: { vi: "Tài liệu yêu cầu trước khi viết mã." },
      },
    ],
  },
  {
    id: 15,
    question: "Which of the following is a non-functional test?",
    translation: { vi: "Loại nào sau đây là kiểm thử phi chức năng?" },
    answers: [
      {
        text: "Checking if the 'Login' button works.",
        correct: false,
        translation: { vi: "Kiểm tra nút 'Đăng nhập' có hoạt động không." },
      },
      {
        text: "Measuring the system response time under load.",
        correct: true,
        translation: { vi: "Đo thời gian phản hồi của hệ thống khi có tải." },
      },
      {
        text: "Verifying that the correct data is saved to the database.",
        correct: false,
        translation: {
          vi: "Xác minh dữ liệu được lưu đúng vào cơ sở dữ liệu.",
        },
      },
      {
        text: "Testing the business rules for a loan application.",
        correct: false,
        translation: {
          vi: "Kiểm thử các quy tắc nghiệp vụ cho hồ sơ vay vốn.",
        },
      },
    ],
  },
  {
    id: 16,
    question: "Acceptance Testing is primarily the responsibility of:",
    translation: { vi: "Kiểm thử chấp nhận chủ yếu là trách nhiệm của:" },
    answers: [
      {
        text: "Developers.",
        correct: false,
        translation: { vi: "Lập trình viên." },
      },
      {
        text: "Customers and end-users.",
        correct: true,
        translation: { vi: "Khách hàng và người dùng cuối." },
      },
      {
        text: "Independent testing team.",
        correct: false,
        translation: { vi: "Nhóm kiểm thử độc lập." },
      },
      {
        text: "Project Managers.",
        correct: false,
        translation: { vi: "Quản lý dự án." },
      },
    ],
  },
  {
    id: 17,
    question: "In the context of testing, 'Exhaustive Testing' means:",
    translation: {
      vi: "Trong ngữ cảnh kiểm thử, 'Kiểm thử vét cạn' (Exhaustive Testing) nghĩa là:",
    },
    answers: [
      {
        text: "Testing all possible input and precondition combinations.",
        correct: true,
        translation: { vi: "Kiểm thử mọi tổ hợp đầu vào và tiền điều kiện." },
      },
      {
        text: "Testing until the testers are tired.",
        correct: false,
        translation: { vi: "Kiểm thử cho đến khi kiểm thử viên thấy mệt." },
      },
      {
        text: "Testing all the high-risk areas.",
        correct: false,
        translation: { vi: "Kiểm thử tất cả các khu vực có rủi ro cao." },
      },
      {
        text: "Running every test case at least once.",
        correct: false,
        translation: { vi: "Chạy mọi kịch bản kiểm thử ít nhất một lần." },
      },
    ],
  },
  {
    id: 18,
    question:
      "Which document defines the test objectives and the approach for testing?",
    translation: {
      vi: "Tài liệu nào xác định các mục tiêu và phương pháp tiếp cận kiểm thử?",
    },
    answers: [
      {
        text: "Test Case.",
        correct: false,
        translation: { vi: "Kịch bản kiểm thử." },
      },
      {
        text: "Test Plan.",
        correct: true,
        translation: { vi: "Kế hoạch kiểm thử." },
      },
      {
        text: "Test Summary Report.",
        correct: false,
        translation: { vi: "Báo cáo tổng kết kiểm thử." },
      },
      {
        text: "Defect Report.",
        correct: false,
        translation: { vi: "Báo cáo lỗi." },
      },
    ],
  },
  {
    id: 19,
    question: "Exploratory testing is best described as:",
    translation: {
      vi: "Kiểm thử thăm dò (Exploratory testing) được mô tả tốt nhất là:",
    },
    answers: [
      {
        text: "Following a predefined script.",
        correct: false,
        translation: { vi: "Làm theo một kịch bản đã định sẵn." },
      },
      {
        text: "Simultaneous learning, test design, and test execution.",
        correct: true,
        translation: {
          vi: "Việc học hỏi, thiết kế và thực thi kiểm thử diễn ra đồng thời.",
        },
      },
      {
        text: "Automation of all manual tests.",
        correct: false,
        translation: { vi: "Tự động hóa tất cả các bài kiểm thử thủ công." },
      },
      {
        text: "Testing performed by the end-user only.",
        correct: false,
        translation: { vi: "Kiểm thử chỉ do người dùng cuối thực hiện." },
      },
    ],
  },
  {
    id: 20,
    question: "Boundary Value Analysis (BVA) is most effective for:",
    translation: { vi: "Phân tích giá trị biên (BVA) hiệu quả nhất đối với:" },
    answers: [
      {
        text: "Testing logical decisions.",
        correct: false,
        translation: { vi: "Kiểm thử các quyết định logic." },
      },
      {
        text: "Variables with continuous ranges of values.",
        correct: true,
        translation: { vi: "Các biến có dải giá trị liên tục." },
      },
      {
        text: "Testing state transitions.",
        correct: false,
        translation: { vi: "Kiểm thử các chuyển đổi trạng thái." },
      },
      {
        text: "Error guessing.",
        correct: false,
        translation: { vi: "Đoán lỗi." },
      },
    ],
  },
  {
    id: 21,
    question: "Which of the following is a common test execution tool?",
    translation: {
      vi: "Công cụ nào sau đây là công cụ thực thi kiểm thử phổ biến?",
    },
    answers: [
      {
        text: "Test automation framework.",
        correct: true,
        translation: { vi: "Khung tự động hóa kiểm thử." },
      },
      {
        text: "Configuration management tool.",
        correct: false,
        translation: { vi: "Công cụ quản lý cấu hình." },
      },
      {
        text: "Defect tracking tool.",
        correct: false,
        translation: { vi: "Công cụ theo dõi lỗi." },
      },
      {
        text: "Requirement management tool.",
        correct: false,
        translation: { vi: "Công cụ quản lý yêu cầu." },
      },
    ],
  },
  {
    id: 22,
    question: "Test conditions are derived from:",
    translation: { vi: "Điều kiện kiểm thử (Test conditions) được rút ra từ:" },
    answers: [
      {
        text: "The test basis.",
        correct: true,
        translation: { vi: "Cơ sở kiểm thử (Test basis)." },
      },
      {
        text: "The test plan.",
        correct: false,
        translation: { vi: "Kế hoạch kiểm thử." },
      },
      {
        text: "The bug report.",
        correct: false,
        translation: { vi: "Báo cáo lỗi." },
      },
      {
        text: "The test data.",
        correct: false,
        translation: { vi: "Dữ liệu kiểm thử." },
      },
    ],
  },
  {
    id: 23,
    question: "The degree to which a system can be modified is its:",
    translation: {
      vi: "Mức độ mà một hệ thống có thể được sửa đổi được gọi là tính:",
    },
    answers: [
      {
        text: "Portability.",
        correct: false,
        translation: { vi: "Tính khả di (Portability)." },
      },
      {
        text: "Maintainability.",
        correct: true,
        translation: { vi: "Tính bảo trì (Maintainability)." },
      },
      {
        text: "Usability.",
        correct: false,
        translation: { vi: "Tính khả dụng (Usability)." },
      },
      {
        text: "Reliability.",
        correct: false,
        translation: { vi: "Tính tin cậy (Reliability)." },
      },
    ],
  },
  {
    id: 24,
    question: "A risk is defined as:",
    translation: { vi: "Rủi ro được định nghĩa là:" },
    answers: [
      {
        text: "A defect that has been found.",
        correct: false,
        translation: { vi: "Một lỗi đã được tìm thấy." },
      },
      {
        text: "A factor that could result in negative consequences.",
        correct: true,
        translation: { vi: "Một yếu tố có thể dẫn đến các hậu quả tiêu cực." },
      },
      {
        text: "A mistake made by the manager.",
        correct: false,
        translation: { vi: "Một sai lầm của người quản lý." },
      },
      {
        text: "A missing requirement.",
        correct: false,
        translation: { vi: "Một yêu cầu bị thiếu." },
      },
    ],
  },
  {
    id: 25,
    question: "Confirmation testing is also known as:",
    translation: {
      vi: "Kiểm thử xác nhận (Confirmation testing) còn được gọi là:",
    },
    answers: [
      {
        text: "Regression testing.",
        correct: false,
        translation: { vi: "Kiểm thử hồi quy." },
      },
      {
        text: "Re-testing.",
        correct: true,
        translation: { vi: "Kiểm thử lại (Re-testing)." },
      },
      {
        text: "Sanity testing.",
        correct: false,
        translation: { vi: "Kiểm thử độ ổn định." },
      },
      {
        text: "User acceptance testing.",
        correct: false,
        translation: { vi: "Kiểm thử chấp nhận người dùng." },
      },
    ],
  },
  {
    id: 26,
    question: "Which of the following is part of the test completion activity?",
    translation: {
      vi: "Hoạt động nào sau đây là một phần của hoạt động kết thúc kiểm thử (test completion)?",
    },
    answers: [
      {
        text: "Identifying test conditions.",
        correct: false,
        translation: { vi: "Xác định các điều kiện kiểm thử." },
      },
      {
        text: "Writing the test summary report.",
        correct: true,
        translation: { vi: "Viết báo cáo tổng kết kiểm thử." },
      },
      {
        text: "Executing test cases.",
        correct: false,
        translation: { vi: "Thực thi các kịch bản kiểm thử." },
      },
      {
        text: "Setting up the test environment.",
        correct: false,
        translation: { vi: "Thiết lập môi trường kiểm thử." },
      },
    ],
  },
  {
    id: 27,
    question: "Independent testing is intended to:",
    translation: { vi: "Kiểm thử độc lập nhằm mục đích:" },
    answers: [
      {
        text: "Increase the cost of testing.",
        correct: false,
        translation: { vi: "Tăng chi phí kiểm thử." },
      },
      {
        text: "Avoid author bias.",
        correct: true,
        translation: { vi: "Tránh sự thiên vị của tác giả." },
      },
      {
        text: "Replace developer testing.",
        correct: false,
        translation: { vi: "Thay thế việc kiểm thử của lập trình viên." },
      },
      {
        text: "Speed up the development process.",
        correct: false,
        translation: { vi: "Đẩy nhanh quá trình phát triển." },
      },
    ],
  },
  {
    id: 28,
    question: "A key characteristic of a walkthrough is:",
    translation: { vi: "Một đặc điểm chính của buổi walkthrough là:" },
    answers: [
      {
        text: "It is very formal.",
        correct: false,
        translation: { vi: "Nó rất trang trọng." },
      },
      {
        text: "It is often led by the author.",
        correct: true,
        translation: { vi: "Nó thường được dẫn dắt bởi chính tác giả." },
      },
      {
        text: "It requires a scribe.",
        correct: false,
        translation: { vi: "Nó yêu cầu một thư ký ghi chép." },
      },
      {
        text: "It is used to find root causes of defects.",
        correct: false,
        translation: { vi: "Nó được dùng để tìm nguyên nhân gốc của lỗi." },
      },
    ],
  },
  {
    id: 29,
    question: "Integration testing focuses on:",
    translation: { vi: "Kiểm thử tích hợp tập trung vào:" },
    answers: [
      {
        text: "Individual units or components.",
        correct: false,
        translation: { vi: "Các đơn vị hoặc thành phần riêng lẻ." },
      },
      {
        text: "Interactions between components or systems.",
        correct: true,
        translation: { vi: "Sự tương tác giữa các thành phần hoặc hệ thống." },
      },
      {
        text: "The entire system as a whole.",
        correct: false,
        translation: { vi: "Toàn bộ hệ thống như một khối thống nhất." },
      },
      {
        text: "User business processes.",
        correct: false,
        translation: { vi: "Quy trình nghiệp vụ của người dùng." },
      },
    ],
  },
  {
    id: 30,
    question: "A defect report should include:",
    translation: { vi: "Một báo cáo lỗi nên bao gồm:" },
    answers: [
      {
        text: "Steps to reproduce the failure.",
        correct: true,
        translation: { vi: "Các bước để tái hiện lỗi." },
      },
      {
        text: "The developer's home address.",
        correct: false,
        translation: { vi: "Địa chỉ nhà của lập trình viên." },
      },
      {
        text: "A copy of the entire database.",
        correct: false,
        translation: { vi: "Một bản sao của toàn bộ cơ sở dữ liệu." },
      },
      {
        text: "Only the expected result.",
        correct: false,
        translation: { vi: "Chỉ kết quả mong đợi." },
      },
    ],
  },
  {
    id: 31,
    question: "Error guessing is a:",
    translation: { vi: "Đoán lỗi (Error guessing) là một:" },
    answers: [
      {
        text: "Black-box technique.",
        correct: false,
        translation: { vi: "Kỹ thuật hộp đen." },
      },
      {
        text: "Experience-based technique.",
        correct: true,
        translation: { vi: "Kỹ thuật dựa trên kinh nghiệm." },
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
    id: 32,
    question: "Testing quality involves checking if the system meets:",
    translation: {
      vi: "Kiểm thử chất lượng bao gồm việc kiểm tra xem hệ thống có đáp ứng:",
    },
    answers: [
      {
        text: "Specified requirements and user needs.",
        correct: true,
        translation: { vi: "Các yêu cầu đã xác định và nhu cầu người dùng." },
      },
      {
        text: "Only the coding standards.",
        correct: false,
        translation: { vi: "Chỉ các tiêu chuẩn viết mã." },
      },
      {
        text: "The manager's expectations only.",
        correct: false,
        translation: { vi: "Chỉ mong đợi của người quản lý." },
      },
      {
        text: "No requirements at all.",
        correct: false,
        translation: { vi: "Không cần đáp ứng yêu cầu nào." },
      },
    ],
  },
  {
    id: 33,
    question: "The purpose of a test pilot for a tool is to:",
    translation: {
      vi: "Mục đích của việc chạy thử (pilot) một công cụ là để:",
    },
    answers: [
      {
        text: "Buy the tool immediately.",
        correct: false,
        translation: { vi: "Mua công cụ đó ngay lập tức." },
      },
      {
        text: "Assess how the tool fits within the organization.",
        correct: true,
        translation: { vi: "Đánh giá mức độ phù hợp của công cụ với tổ chức." },
      },
      {
        text: "Replace the testing team.",
        correct: false,
        translation: { vi: "Thay thế đội ngũ kiểm thử." },
      },
      {
        text: "Automate all tests in one day.",
        correct: false,
        translation: { vi: "Tự động hóa mọi bài test trong một ngày." },
      },
    ],
  },
  {
    id: 34,
    question: "Data-driven testing is a technique where:",
    translation: {
      vi: "Kiểm thử theo hướng dữ liệu (Data-driven testing) là kỹ thuật mà:",
    },
    answers: [
      {
        text: "Test inputs are stored in a separate file or database.",
        correct: true,
        translation: {
          vi: "Các đầu vào kiểm thử được lưu trữ trong một tệp hoặc cơ sở dữ liệu riêng.",
        },
      },
      {
        text: "The code is written after the tests.",
        correct: false,
        translation: { vi: "Mã nguồn được viết sau khi có các bài test." },
      },
      {
        text: "The tester guesses the data.",
        correct: false,
        translation: { vi: "Kiểm thử viên tự đoán dữ liệu." },
      },
      {
        text: "No data is used during testing.",
        correct: false,
        translation: { vi: "Không có dữ liệu nào được dùng khi test." },
      },
    ],
  },
  {
    id: 35,
    question: "Which of the following is a product risk?",
    translation: { vi: "Rủi ro nào sau đây là rủi ro sản phẩm?" },
    answers: [
      {
        text: "Lack of skilled testers.",
        correct: false,
        translation: { vi: "Thiếu kiểm thử viên có kỹ năng." },
      },
      {
        text: "Software failing to perform its intended functions.",
        correct: true,
        translation: {
          vi: "Phần mềm không thực hiện được các chức năng dự kiến.",
        },
      },
      {
        text: "Delay in the delivery of hardware.",
        correct: false,
        translation: { vi: "Chậm trễ trong việc bàn giao phần cứng." },
      },
      {
        text: "Budget cuts for the project.",
        correct: false,
        translation: { vi: "Cắt giảm ngân sách cho dự án." },
      },
    ],
  },
  {
    id: 36,
    question: "Alpha testing is performed by:",
    translation: { vi: "Kiểm thử Alpha được thực hiện bởi:" },
    answers: [
      {
        text: "Customers at their own site.",
        correct: false,
        translation: { vi: "Khách hàng tại địa điểm của họ." },
      },
      {
        text: "Testers or potential customers at the developer's site.",
        correct: true,
        translation: {
          vi: "Kiểm thử viên hoặc khách hàng tiềm năng tại địa điểm của nhà phát triển.",
        },
      },
      {
        text: "Independent agencies.",
        correct: false,
        translation: { vi: "Các cơ quan độc lập." },
      },
      {
        text: "Developers only.",
        correct: false,
        translation: { vi: "Chỉ các lập trình viên." },
      },
    ],
  },
  {
    id: 37,
    question: "Test closure activities happen when:",
    translation: { vi: "Các hoạt động đóng (closure) kiểm thử xảy ra khi:" },
    answers: [
      {
        text: "A project is finished or cancelled.",
        correct: true,
        translation: { vi: "Dự án hoàn thành hoặc bị hủy bỏ." },
      },
      {
        text: "The first bug is found.",
        correct: false,
        translation: { vi: "Lỗi đầu tiên được tìm thấy." },
      },
      {
        text: "A developer starts coding.",
        correct: false,
        translation: { vi: "Lập trình viên bắt đầu viết mã." },
      },
      {
        text: "The test plan is approved.",
        correct: false,
        translation: { vi: "Kế hoạch kiểm thử được phê duyệt." },
      },
    ],
  },
  {
    id: 38,
    question: "Statement coverage is a measure of:",
    translation: { vi: "Độ bao phủ câu lệnh là thước đo của:" },
    answers: [
      {
        text: "Percentage of executable statements exercised by tests.",
        correct: true,
        translation: {
          vi: "Tỷ lệ phần trăm các câu lệnh thực thi được chạy bởi các bài test.",
        },
      },
      {
        text: "Number of bugs found.",
        correct: false,
        translation: { vi: "Số lượng lỗi được tìm thấy." },
      },
      {
        text: "Number of test cases written.",
        correct: false,
        translation: { vi: "Số lượng kịch bản kiểm thử được viết." },
      },
      {
        text: "Percentage of requirements covered.",
        correct: false,
        translation: { vi: "Tỷ lệ phần trăm các yêu cầu được bao phủ." },
      },
    ],
  },
  {
    id: 39,
    question: "Which of the following is a principle of testing?",
    translation: {
      vi: "Nguyên tắc nào sau đây là một nguyên tắc của kiểm thử?",
    },
    answers: [
      {
        text: "Testing shows the absence of defects.",
        correct: false,
        translation: { vi: "Kiểm thử cho thấy sự vắng mặt của lỗi." },
      },
      {
        text: "Exhaustive testing is possible.",
        correct: false,
        translation: { vi: "Kiểm thử toàn bộ là có thể." },
      },
      {
        text: "Defects cluster together.",
        correct: true,
        translation: { vi: "Lỗi thường tập trung lại với nhau." },
      },
      {
        text: "Testing should start as late as possible.",
        correct: false,
        translation: { vi: "Kiểm thử nên bắt đầu càng muộn càng tốt." },
      },
    ],
  },
  {
    id: 40,
    question: "Traceability between the test basis and test cases helps to:",
    translation: {
      vi: "Tính truy xuất nguồn gốc (Traceability) giữa cơ sở kiểm thử và kịch bản giúp:",
    },
    answers: [
      {
        text: "Assess the impact of a change in requirements.",
        correct: true,
        translation: {
          vi: "Đánh giá tác động của một sự thay đổi trong yêu cầu.",
        },
      },
      {
        text: "Write code faster.",
        correct: false,
        translation: { vi: "Viết mã nhanh hơn." },
      },
      {
        text: "Increase the number of defects found.",
        correct: false,
        translation: { vi: "Tăng số lượng lỗi tìm được." },
      },
      {
        text: "Replace the need for a test plan.",
        correct: false,
        translation: { vi: "Thay thế nhu cầu về một kế hoạch kiểm thử." },
      },
    ],
  },
];
