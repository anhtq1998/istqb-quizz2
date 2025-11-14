export const questions = [
  {
    question:
      "Which of the following describes the difference between debugging and testing?",
    translation: {
      vi: "Điều nào sau đây mô tả sự khác biệt giữa gỡ lỗi (debugging) và kiểm thử (testing)?",
    },
    answers: [
      {
        text: "Testing removes defects; debugging identifies defects.",
        correct: false,
        translation: {
          vi: "Kiểm thử loại bỏ lỗi; gỡ lỗi xác định lỗi.",
        },
      },
      {
        text: "Testing is dynamic; debugging is static.",
        correct: false,
        translation: {
          vi: "Kiểm thử là động; gỡ lỗi là tĩnh.",
        },
      },
      {
        text: "Testing identifies defects; debugging finds and removes the causes of defects.",
        correct: true,
        translation: {
          vi: "Kiểm thử xác định lỗi; gỡ lỗi tìm và loại bỏ nguyên nhân của lỗi.",
        },
      },
      {
        text: "Testing is performed by developers; debugging is performed by testers.",
        correct: false,
        translation: {
          vi: "Kiểm thử do nhà phát triển thực hiện; gỡ lỗi do người kiểm thử thực hiện.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a key testing task performed by a Tester in the Fundamental Test Process?",
    translation: {
      vi: "Điều nào sau đây là một nhiệm vụ kiểm thử chính được thực hiện bởi Người kiểm thử (Tester) trong Quy trình Kiểm thử Cơ bản?",
    },
    answers: [
      {
        text: "Plan the test activities.",
        correct: false,
        translation: {
          vi: "Lập kế hoạch các hoạt động kiểm thử.",
        },
      },
      {
        text: "Monitor test progress and report test status.",
        correct: false,
        translation: {
          vi: "Giám sát tiến trình kiểm thử và báo cáo trạng thái kiểm thử.",
        },
      },
      {
        text: "Analyze the test basis and identify test conditions.",
        correct: true,
        translation: {
          vi: "Phân tích cơ sở kiểm thử và xác định các điều kiện kiểm thử (test conditions).",
        },
      },
      {
        text: "Define the test strategy and test objectives.",
        correct: false,
        translation: {
          vi: "Xác định chiến lược kiểm thử và mục tiêu kiểm thử.",
        },
      },
    ],
  },
  {
    question:
      "What is the primary difference between a Test Condition and a Test Case?",
    translation: {
      vi: "Sự khác biệt chính giữa Điều kiện kiểm thử (Test Condition) và Trường hợp kiểm thử (Test Case) là gì?",
    },
    answers: [
      {
        text: "A Test Condition describes an event to be tested; a Test Case is the set of steps to execute the test.",
        correct: true,
        translation: {
          vi: "Điều kiện kiểm thử mô tả một sự kiện cần được kiểm thử; Trường hợp kiểm thử là tập hợp các bước để thực hiện kiểm thử.",
        },
      },
      {
        text: "A Test Condition is related to White-Box testing; a Test Case is related to Black-Box testing.",
        correct: false,
        translation: {
          vi: "Điều kiện kiểm thử liên quan đến kiểm thử Hộp trắng; Trường hợp kiểm thử liên quan đến kiểm thử Hộp đen.",
        },
      },
      {
        text: "A Test Condition is an input value; a Test Case is an expected result.",
        correct: false,
        translation: {
          vi: "Điều kiện kiểm thử là một giá trị đầu vào; Trường hợp kiểm thử là một kết quả mong đợi.",
        },
      },
      {
        text: "A Test Condition is always related to performance; a Test Case is always related to functionality.",
        correct: false,
        translation: {
          vi: "Điều kiện kiểm thử luôn liên quan đến hiệu suất; Trường hợp kiểm thử luôn liên quan đến chức năng.",
        },
      },
    ],
  },
  {
    question:
      "Which quality characteristic is MOST affected by effective component testing?",
    translation: {
      vi: "Đặc tính chất lượng nào bị ảnh hưởng NHẤT bởi việc kiểm thử thành phần (component testing) hiệu quả?",
    },
    answers: [
      {
        text: "Usability",
        correct: false,
        translation: {
          vi: "Khả năng sử dụng (Usability)",
        },
      },
      {
        text: "Reliability",
        correct: true,
        translation: {
          vi: "Độ tin cậy (Reliability)",
        },
      },
      {
        text: "Portability",
        correct: false,
        translation: {
          vi: "Tính di động (Portability)",
        },
      },
      {
        text: "Maintainability",
        correct: false,
        translation: {
          vi: "Khả năng bảo trì (Maintainability)",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is an example of an **Error Guessing** test technique?",
    translation: {
      vi: "Điều nào sau đây là một ví dụ về kỹ thuật kiểm thử **Đoán lỗi (Error Guessing)**?",
    },
    answers: [
      {
        text: "Creating test cases based on valid and invalid partitions of input data.",
        correct: false,
        translation: {
          vi: "Tạo các trường hợp kiểm thử dựa trên các phân vùng đầu vào hợp lệ và không hợp lệ.",
        },
      },
      {
        text: "Designing tests to achieve 100% decision coverage.",
        correct: false,
        translation: {
          vi: "Thiết kế các kiểm thử để đạt được độ bao phủ quyết định 100%.",
        },
      },
      {
        text: "Using a checklist of common defects to define test cases.",
        correct: true,
        translation: {
          vi: "Sử dụng danh sách kiểm tra các lỗi phổ biến để xác định các trường hợp kiểm thử.",
        },
      },
      {
        text: "Testing all business processes identified in the requirements documentation.",
        correct: false,
        translation: {
          vi: "Kiểm thử tất cả các quy trình nghiệp vụ được xác định trong tài liệu yêu cầu.",
        },
      },
    ],
  },
  {
    question: "How does risk affect test planning and execution?",
    translation: {
      vi: "Rủi ro ảnh hưởng đến việc lập kế hoạch và thực hiện kiểm thử như thế nào?",
    },
    answers: [
      {
        text: "Higher risk areas are tested only during system testing.",
        correct: false,
        translation: {
          vi: "Các khu vực rủi ro cao hơn chỉ được kiểm thử trong quá trình kiểm thử hệ thống.",
        },
      },
      {
        text: "Risk analysis is used to determine the number of testers required for the project.",
        correct: false,
        translation: {
          vi: "Phân tích rủi ro được sử dụng để xác định số lượng người kiểm thử cần thiết cho dự án.",
        },
      },
      {
        text: "The level of risk determines the effort, formality, and detail of testing in a particular area.",
        correct: true,
        translation: {
          vi: "Mức độ rủi ro quyết định nỗ lực, tính chính thức và chi tiết của việc kiểm thử trong một khu vực cụ thể.",
        },
      },
      {
        text: "All testing is stopped once the highest-risk defects are resolved.",
        correct: false,
        translation: {
          vi: "Tất cả các hoạt động kiểm thử bị dừng lại khi các lỗi có rủi ro cao nhất đã được giải quyết.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a **characteristic of a good defect report** (bug report)?",
    translation: {
      vi: "Điều nào sau đây là **đặc điểm của một báo cáo lỗi tốt** (bug report)?",
    },
    answers: [
      {
        text: "It includes an estimation of the time required to fix the defect.",
        correct: false,
        translation: {
          vi: "Nó bao gồm ước tính thời gian cần thiết để sửa lỗi.",
        },
      },
      {
        text: "It is written from the perspective of the developer who will fix the defect.",
        correct: false,
        translation: {
          vi: "Nó được viết từ quan điểm của nhà phát triển, người sẽ sửa lỗi.",
        },
      },
      {
        text: "It includes only the summary and steps to reproduce the defect.",
        correct: false,
        translation: {
          vi: "Nó chỉ bao gồm tóm tắt và các bước để tái hiện lỗi.",
        },
      },
      {
        text: "It includes the actual result and expected result, along with steps to reproduce.",
        correct: true,
        translation: {
          vi: "Nó bao gồm kết quả thực tế và kết quả mong đợi, cùng với các bước để tái hiện.",
        },
      },
    ],
  },
  {
    question: "What is the primary purpose of **Static Testing**?",
    translation: {
      vi: "Mục đích chính của **Kiểm thử Tĩnh (Static Testing)** là gì?",
    },
    answers: [
      {
        text: "To execute the software and evaluate the external behavior of the system.",
        correct: false,
        translation: {
          vi: "Để thực thi phần mềm và đánh giá hành vi bên ngoài của hệ thống.",
        },
      },
      {
        text: "To find defects in the work product and improve its quality by analyzing its internal structure.",
        correct: true,
        translation: {
          vi: "Để tìm lỗi trong sản phẩm làm việc và cải thiện chất lượng của nó bằng cách phân tích cấu trúc bên trong.",
        },
      },
      {
        text: "To measure the performance and reliability of the system under load.",
        correct: false,
        translation: {
          vi: "Để đo lường hiệu suất và độ tin cậy của hệ thống dưới tải.",
        },
      },
      {
        text: "To confirm that the system meets the user's needs in a production environment.",
        correct: false,
        translation: {
          vi: "Để xác nhận rằng hệ thống đáp ứng nhu cầu của người dùng trong môi trường sản xuất.",
        },
      },
    ],
  },
  {
    question:
      "A system is required to calculate a bonus payment based on years of service: 1-5 years (5%), 6-10 years (10%), 11 years or more (15%). If you apply **Equivalence Partitioning**, what is the minimum number of test cases (partitions) required?",
    translation: {
      vi: "Một hệ thống được yêu cầu tính toán khoản tiền thưởng dựa trên số năm phục vụ: 1-5 năm (5%), 6-10 năm (10%), 11 năm trở lên (15%). Nếu bạn áp dụng **Phân vùng Tương đương (Equivalence Partitioning)**, số lượng trường hợp kiểm thử (phân vùng) tối thiểu cần thiết là bao nhiêu?",
    },
    answers: [
      {
        text: "2",
        correct: false,
        translation: {
          vi: "2",
        },
      },
      {
        text: "3",
        correct: false,
        translation: {
          vi: "3",
        },
      },
      {
        text: "4",
        correct: true,
        translation: {
          vi: "4",
        },
      },
      {
        text: "6",
        correct: false,
        translation: {
          vi: "6",
        },
      },
    ],
  },
  {
    question:
      "What is the key difference between **Functional Testing** and **Non-functional Testing**?",
    translation: {
      vi: "Sự khác biệt chính giữa **Kiểm thử Chức năng (Functional Testing)** và **Kiểm thử Phi chức năng (Non-functional Testing)** là gì?",
    },
    answers: [
      {
        text: "Functional testing checks what the system does; Non-functional testing checks how well the system does it.",
        correct: true,
        translation: {
          vi: "Kiểm thử chức năng kiểm tra những gì hệ thống thực hiện; Kiểm thử phi chức năng kiểm tra mức độ tốt mà hệ thống thực hiện.",
        },
      },
      {
        text: "Functional testing is always performed before non-functional testing.",
        correct: false,
        translation: {
          vi: "Kiểm thử chức năng luôn được thực hiện trước kiểm thử phi chức năng.",
        },
      },
      {
        text: "Functional testing is performed by testers; Non-functional testing is performed by users.",
        correct: false,
        translation: {
          vi: "Kiểm thử chức năng do người kiểm thử thực hiện; Kiểm thử phi chức năng do người dùng thực hiện.",
        },
      },
      {
        text: "Functional testing is focused on the user interface; Non-functional testing is focused on the database.",
        correct: false,
        translation: {
          vi: "Kiểm thử chức năng tập trung vào giao diện người dùng; Kiểm thử phi chức năng tập trung vào cơ sở dữ liệu.",
        },
      },
    ],
  },
  {
    question:
      "Which statement best describes the purpose of **Confirmation Testing** (Re-testing)?",
    translation: {
      vi: "Tuyên bố nào mô tả tốt nhất mục đích của **Kiểm thử Xác nhận (Confirmation Testing - Tái kiểm thử)**?",
    },
    answers: [
      {
        text: "To test other parts of the system that might have been affected by the changes.",
        correct: false,
        translation: {
          vi: "Để kiểm thử các phần khác của hệ thống có thể đã bị ảnh hưởng bởi các thay đổi.",
        },
      },
      {
        text: "To ensure that the previously reported defect has been fixed and the test case now passes.",
        correct: true,
        translation: {
          vi: "Để đảm bảo rằng lỗi đã được báo cáo trước đó đã được sửa và trường hợp kiểm thử hiện đã đạt.",
        },
      },
      {
        text: "To verify that all new features added in the current release are working correctly.",
        correct: false,
        translation: {
          vi: "Để xác minh rằng tất cả các tính năng mới được thêm vào trong bản phát hành hiện tại đang hoạt động chính xác.",
        },
      },
      {
        text: "To determine whether the test process is working as intended.",
        correct: false,
        translation: {
          vi: "Để xác định xem quy trình kiểm thử có hoạt động như dự định hay không.",
        },
      },
    ],
  },
  {
    question: "Which of the following is a common **Product Risk**?",
    translation: {
      vi: "Điều nào sau đây là một **Rủi ro Sản phẩm (Product Risk)** phổ biến?",
    },
    answers: [
      {
        text: "The project timeline is too aggressive.",
        correct: false,
        translation: {
          vi: "Thời gian dự án quá gấp.",
        },
      },
      {
        text: "The software is complex and difficult to understand.",
        correct: true,
        translation: {
          vi: "Phần mềm phức tạp và khó hiểu.",
        },
      },
      {
        text: "The test environment will not be ready on time.",
        correct: false,
        translation: {
          vi: "Môi trường kiểm thử sẽ không sẵn sàng đúng hạn.",
        },
      },
      {
        text: "The project budget is too limited.",
        correct: false,
        translation: {
          vi: "Ngân sách dự án quá hạn chế.",
        },
      },
    ],
  },
  {
    question: "What is the expected result of a test case?",
    translation: {
      vi: "Kết quả mong đợi (expected result) của một trường hợp kiểm thử là gì?",
    },
    answers: [
      {
        text: "The actual behavior of the system after execution.",
        correct: false,
        translation: {
          vi: "Hành vi thực tế của hệ thống sau khi thực hiện.",
        },
      },
      {
        text: "The criteria used to determine if a test passed or failed.",
        correct: true,
        translation: {
          vi: "Các tiêu chí được sử dụng để xác định xem một kiểm thử đã đạt hay thất bại.",
        },
      },
      {
        text: "The steps to be followed to execute the test.",
        correct: false,
        translation: {
          vi: "Các bước cần tuân theo để thực hiện kiểm thử.",
        },
      },
      {
        text: "The difference between the actual result and the expected result.",
        correct: false,
        translation: {
          vi: "Sự khác biệt giữa kết quả thực tế và kết quả mong đợi.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following describes the relationship between **Statement Coverage** and **Decision Coverage**?",
    translation: {
      vi: "Điều nào sau đây mô tả mối quan hệ giữa **Độ bao phủ Câu lệnh (Statement Coverage)** và **Độ bao phủ Quyết định (Decision Coverage)**?",
    },
    answers: [
      {
        text: "100% Decision Coverage guarantees 100% Statement Coverage.",
        correct: true,
        translation: {
          vi: "Độ bao phủ Quyết định 100% đảm bảo Độ bao phủ Câu lệnh 100%.",
        },
      },
      {
        text: "100% Statement Coverage guarantees 100% Decision Coverage.",
        correct: false,
        translation: {
          vi: "Độ bao phủ Câu lệnh 100% đảm bảo Độ bao phủ Quyết định 100%.",
        },
      },
      {
        text: "Statement Coverage is a Black-Box technique, and Decision Coverage is a White-Box technique.",
        correct: false,
        translation: {
          vi: "Độ bao phủ Câu lệnh là kỹ thuật Hộp đen, và Độ bao phủ Quyết định là kỹ thuật Hộp trắng.",
        },
      },
      {
        text: "Statement Coverage and Decision Coverage are the same thing.",
        correct: false,
        translation: {
          vi: "Độ bao phủ Câu lệnh và Độ bao phủ Quyết định là cùng một thứ.",
        },
      },
    ],
  },
  {
    question:
      "What is the main benefit of **Traceability** between the test basis and testware?",
    translation: {
      vi: "Lợi ích chính của **Khả năng Truy vết (Traceability)** giữa cơ sở kiểm thử và tạo phẩm kiểm thử (testware) là gì?",
    },
    answers: [
      {
        text: "It helps in monitoring the developer's progress.",
        correct: false,
        translation: {
          vi: "Nó giúp giám sát tiến độ của nhà phát triển.",
        },
      },
      {
        text: "It proves that the code is well-structured.",
        correct: false,
        translation: {
          vi: "Nó chứng minh rằng mã code được cấu trúc tốt.",
        },
      },
      {
        text: "It helps to assess the coverage of the requirements by the test cases.",
        correct: true,
        translation: {
          vi: "Nó giúp đánh giá độ bao phủ của các yêu cầu bởi các trường hợp kiểm thử.",
        },
      },
      {
        text: "It prevents defects from being introduced into the system.",
        correct: false,
        translation: {
          vi: "Nó ngăn chặn lỗi bị đưa vào hệ thống.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is an example of an **Operational Acceptance Test (OAT)**?",
    translation: {
      vi: "Điều nào sau đây là một ví dụ về **Kiểm thử Chấp nhận Vận hành (Operational Acceptance Test - OAT)**?",
    },
    answers: [
      {
        text: "Testing the system's ability to recover after a power failure.",
        correct: true,
        translation: {
          vi: "Kiểm thử khả năng phục hồi của hệ thống sau khi mất điện.",
        },
      },
      {
        text: "Testing if the new features meet the user's requirements.",
        correct: false,
        translation: {
          vi: "Kiểm thử xem các tính năng mới có đáp ứng các yêu cầu của người dùng hay không.",
        },
      },
      {
        text: "Testing the integration between two system components.",
        correct: false,
        translation: {
          vi: "Kiểm thử sự tích hợp giữa hai thành phần của hệ thống.",
        },
      },
      {
        text: "Testing the code to ensure 100% statement coverage.",
        correct: false,
        translation: {
          vi: "Kiểm thử mã code để đảm bảo độ bao phủ câu lệnh 100%.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a primary objective of **Test Control**?",
    translation: {
      vi: "Điều nào sau đây là mục tiêu chính của **Kiểm soát Kiểm thử (Test Control)**?",
    },
    answers: [
      {
        text: "To create detailed test cases for all identified requirements.",
        correct: false,
        translation: {
          vi: "Để tạo các trường hợp kiểm thử chi tiết cho tất cả các yêu cầu đã được xác định.",
        },
      },
      {
        text: "To take corrective action to meet the test plan objectives.",
        correct: true,
        translation: {
          vi: "Để thực hiện các hành động khắc phục nhằm đáp ứng các mục tiêu của kế hoạch kiểm thử.",
        },
      },
      {
        text: "To assess the quality of the work products under test.",
        correct: false,
        translation: {
          vi: "Để đánh giá chất lượng của các sản phẩm làm việc đang được kiểm thử.",
        },
      },
      {
        text: "To decide whether to stop testing or continue testing.",
        correct: false,
        translation: {
          vi: "Để quyết định liệu có nên dừng kiểm thử hay tiếp tục kiểm thử.",
        },
      },
    ],
  },
  {
    question: "What is the typical **Test Basis** for Component Testing?",
    translation: {
      vi: "**Cơ sở Kiểm thử (Test Basis)** điển hình cho Kiểm thử Thành phần (Component Testing) là gì?",
    },
    answers: [
      {
        text: "User Stories and Acceptance Criteria",
        correct: false,
        translation: {
          vi: "Các câu chuyện người dùng (User Stories) và Tiêu chí Chấp nhận (Acceptance Criteria)",
        },
      },
      {
        text: "System Requirements Specification",
        correct: false,
        translation: {
          vi: "Đặc tả Yêu cầu Hệ thống (System Requirements Specification)",
        },
      },
      {
        text: "Component Specification or detailed design",
        correct: true,
        translation: {
          vi: "Đặc tả Thành phần hoặc thiết kế chi tiết",
        },
      },
      {
        text: "Business Processes and Regulatory Standards",
        correct: false,
        translation: {
          vi: "Các Quy trình Nghiệp vụ và Tiêu chuẩn Quy định",
        },
      },
    ],
  },
  {
    question: "The test principle of **'Absence-of-errors fallacy'** means:",
    translation: {
      vi: "Nguyên tắc kiểm thử **'Ngụy biện về việc không có lỗi (Absence-of-errors fallacy)'** có nghĩa là:",
    },
    answers: [
      {
        text: "It is impossible to find all defects in a system.",
        correct: false,
        translation: {
          vi: "Không thể tìm thấy tất cả các lỗi trong một hệ thống.",
        },
      },
      {
        text: "Finding and fixing a large number of defects doesn't matter if the system is unusable or doesn't meet the user's needs.",
        correct: true,
        translation: {
          vi: "Việc tìm và sửa một số lượng lớn lỗi không có ý nghĩa gì nếu hệ thống không sử dụng được hoặc không đáp ứng nhu cầu của người dùng.",
        },
      },
      {
        text: "A small number of critical defects can cause a system failure.",
        correct: false,
        translation: {
          vi: "Một số lượng nhỏ các lỗi nghiêm trọng có thể gây ra lỗi hệ thống.",
        },
      },
      {
        text: "Test conditions and test cases become less effective over time.",
        correct: false,
        translation: {
          vi: "Các điều kiện kiểm thử và trường hợp kiểm thử trở nên kém hiệu quả hơn theo thời gian.",
        },
      },
    ],
  },
  {
    question:
      "What is the MOST appropriate technique to achieve high structural coverage of code?",
    translation: {
      vi: "Kỹ thuật nào là **phù hợp nhất** để đạt được độ bao phủ cấu trúc cao của mã code?",
    },
    answers: [
      {
        text: "Exploratory Testing",
        correct: false,
        translation: {
          vi: "Kiểm thử Khám phá (Exploratory Testing)",
        },
      },
      {
        text: "Boundary Value Analysis (BVA)",
        correct: false,
        translation: {
          vi: "Phân tích Giá trị Biên (BVA)",
        },
      },
      {
        text: "Decision Testing",
        correct: true,
        translation: {
          vi: "Kiểm thử Quyết định (Decision Testing)",
        },
      },
      {
        text: "Equivalence Partitioning (EP)",
        correct: false,
        translation: {
          vi: "Phân vùng Tương đương (EP)",
        },
      },
    ],
  },
  {
    question:
      "Which of the following describes the difference between **Validation** and **Verification**?",
    translation: {
      vi: "Điều nào sau đây mô tả sự khác biệt giữa **Thẩm định (Validation)** và **Xác minh (Verification)**?",
    },
    answers: [
      {
        text: "Verification is 'Are we building the product right?'; Validation is 'Are we building the right product?'",
        correct: true,
        translation: {
          vi: "Xác minh là 'Chúng ta có đang xây dựng sản phẩm đúng cách không?'; Thẩm định là 'Chúng ta có đang xây dựng đúng sản phẩm không?'",
        },
      },
      {
        text: "Verification is dynamic testing; Validation is static testing.",
        correct: false,
        translation: {
          vi: "Xác minh là kiểm thử động; Thẩm định là kiểm thử tĩnh.",
        },
      },
      {
        text: "Validation is done by developers; Verification is done by testers.",
        correct: false,
        translation: {
          vi: "Thẩm định được thực hiện bởi nhà phát triển; Xác minh được thực hiện bởi người kiểm thử.",
        },
      },
      {
        text: "Validation only happens at the Acceptance Test level; Verification happens at all test levels.",
        correct: false,
        translation: {
          vi: "Thẩm định chỉ xảy ra ở cấp độ Kiểm thử Chấp nhận; Xác minh xảy ra ở tất cả các cấp độ kiểm thử.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a potential risk of using a test automation tool?",
    translation: {
      vi: "Điều nào sau đây là một rủi ro tiềm ẩn của việc sử dụng một công cụ tự động hóa kiểm thử?",
    },
    answers: [
      {
        text: "Test coverage is limited.",
        correct: false,
        translation: {
          vi: "Độ bao phủ kiểm thử bị hạn chế.",
        },
      },
      {
        text: "The tool vendor goes out of business.",
        correct: true,
        translation: {
          vi: "Nhà cung cấp công cụ ngừng kinh doanh.",
        },
      },
      {
        text: "The automated test cases are difficult to maintain.",
        correct: false,
        translation: {
          vi: "Các trường hợp kiểm thử tự động khó bảo trì.",
        },
      },
      {
        text: "The cost of the tool is too high.",
        correct: false,
        translation: {
          vi: "Chi phí của công cụ quá cao.",
        },
      },
    ],
  },
  {
    question: "Which of the following is an example of **Regression Testing**?",
    translation: {
      vi: "Điều nào sau đây là một ví dụ về **Kiểm thử Hồi quy (Regression Testing)**?",
    },
    answers: [
      {
        text: "Executing a subset of already executed tests to ensure changes have not introduced unintended behavior.",
        correct: true,
        translation: {
          vi: "Thực hiện một tập hợp con các kiểm thử đã được thực hiện trước đó để đảm bảo các thay đổi không gây ra hành vi ngoài ý muốn.",
        },
      },
      {
        text: "Testing a new feature for the first time.",
        correct: false,
        translation: {
          vi: "Kiểm thử một tính năng mới lần đầu tiên.",
        },
      },
      {
        text: "Re-running a failed test to confirm a defect has been fixed.",
        correct: false,
        translation: {
          vi: "Chạy lại một kiểm thử đã thất bại để xác nhận lỗi đã được sửa.",
        },
      },
      {
        text: "Testing the system's ability to operate after a major upgrade to the operating system.",
        correct: false,
        translation: {
          vi: "Kiểm thử khả năng hoạt động của hệ thống sau một bản nâng cấp lớn cho hệ điều hành.",
        },
      },
    ],
  },
  {
    question: "Which of the following is the BEST definition of a **Defect**?",
    translation: {
      vi: "Định nghĩa nào sau đây là **TỐT NHẤT** về một **Lỗi (Defect)**?",
    },
    answers: [
      {
        text: "An execution of the software that causes a failure.",
        correct: false,
        translation: {
          vi: "Một lần thực thi phần mềm gây ra sự cố (failure).",
        },
      },
      {
        text: "A flaw in a work product that can cause a failure.",
        correct: true,
        translation: {
          vi: "Một khiếm khuyết trong một sản phẩm làm việc có thể gây ra sự cố.",
        },
      },
      {
        text: "A deviation between the actual and expected results.",
        correct: false,
        translation: {
          vi: "Một sự khác biệt giữa kết quả thực tế và kết quả mong đợi.",
        },
      },
      {
        text: "The human action that resulted in a flaw.",
        correct: false,
        translation: {
          vi: "Hành động của con người dẫn đến một khiếm khuyết.",
        },
      },
    ],
  },
  {
    question:
      "The input field accepts numbers between 100 and 999. Which of the following **Boundary Value Analysis (BVA)** values are considered valid boundaries for input?",
    translation: {
      vi: "Trường nhập liệu chấp nhận các số từ 100 đến 999. Giá trị **Phân tích Giá trị Biên (BVA)** nào sau đây được coi là biên hợp lệ cho đầu vào?",
    },
    answers: [
      {
        text: "100, 999",
        correct: true,
        translation: {
          vi: "100, 999",
        },
      },
      {
        text: "99, 1000",
        correct: false,
        translation: {
          vi: "99, 1000",
        },
      },
      {
        text: "101, 998",
        correct: false,
        translation: {
          vi: "101, 998",
        },
      },
      {
        text: "99, 100, 999, 1000",
        correct: false,
        translation: {
          vi: "99, 100, 999, 1000",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is an objective of **Maintenance Testing**?",
    translation: {
      vi: "Điều nào sau đây là mục tiêu của **Kiểm thử Bảo trì (Maintenance Testing)**?",
    },
    answers: [
      {
        text: "Testing a brand new component before integrating it with other components.",
        correct: false,
        translation: {
          vi: "Kiểm thử một thành phần hoàn toàn mới trước khi tích hợp nó với các thành phần khác.",
        },
      },
      {
        text: "Testing the system after a migration to a new operating platform.",
        correct: true,
        translation: {
          vi: "Kiểm thử hệ thống sau khi di chuyển sang một nền tảng điều hành mới.",
        },
      },
      {
        text: "Testing a system to ensure it meets the contractual acceptance criteria.",
        correct: false,
        translation: {
          vi: "Kiểm thử một hệ thống để đảm bảo nó đáp ứng các tiêu chí chấp nhận theo hợp đồng.",
        },
      },
      {
        text: "Testing the collaboration between developers and testers.",
        correct: false,
        translation: {
          vi: "Kiểm thử sự hợp tác giữa các nhà phát triển và người kiểm thử.",
        },
      },
    ],
  },
  {
    question:
      "What is the key difference between a **Technical Review** and an **Informal Review**?",
    translation: {
      vi: "Sự khác biệt chính giữa **Kiểm tra Kỹ thuật (Technical Review)** và **Kiểm tra Không chính thức (Informal Review)** là gì?",
    },
    answers: [
      {
        text: "Technical Reviews are always led by a moderator; Informal Reviews are not.",
        correct: false,
        translation: {
          vi: "Kiểm tra Kỹ thuật luôn được dẫn dắt bởi người điều phối; Kiểm tra Không chính thức thì không.",
        },
      },
      {
        text: "Technical Reviews focus on achieving consensus; Informal Reviews focus on finding defects.",
        correct: false,
        translation: {
          vi: "Kiểm tra Kỹ thuật tập trung vào việc đạt được sự đồng thuận; Kiểm tra Không chính thức tập trung vào việc tìm lỗi.",
        },
      },
      {
        text: "Technical Reviews are led by a trained peer; Informal Reviews may be as simple as a pair check.",
        correct: true,
        translation: {
          vi: "Kiểm tra Kỹ thuật được dẫn dắt bởi một đồng nghiệp đã được đào tạo; Kiểm tra Không chính thức có thể đơn giản chỉ là một cặp kiểm tra.",
        },
      },
      {
        text: "Technical Reviews can be applied to any work product; Informal Reviews only apply to code.",
        correct: false,
        translation: {
          vi: "Kiểm tra Kỹ thuật có thể áp dụng cho bất kỳ sản phẩm làm việc nào; Kiểm tra Không chính thức chỉ áp dụng cho code.",
        },
      },
    ],
  },
  {
    question:
      "Which test technique is MOST likely to be used for testing the usability of a user interface?",
    translation: {
      vi: "Kỹ thuật kiểm thử nào **có khả năng nhất** được sử dụng để kiểm thử khả năng sử dụng (usability) của giao diện người dùng?",
    },
    answers: [
      {
        text: "Statement Testing",
        correct: false,
        translation: {
          vi: "Kiểm thử Câu lệnh (Statement Testing)",
        },
      },
      {
        text: "Decision Testing",
        correct: false,
        translation: {
          vi: "Kiểm thử Quyết định (Decision Testing)",
        },
      },
      {
        text: "Exploratory Testing",
        correct: true,
        translation: {
          vi: "Kiểm thử Khám phá (Exploratory Testing)",
        },
      },
      {
        text: "Equivalence Partitioning",
        correct: false,
        translation: {
          vi: "Phân vùng Tương đương (Equivalence Partitioning)",
        },
      },
    ],
  },
  {
    question:
      "Which of the following describes the difference between **Exit Criteria** and **Entry Criteria**?",
    translation: {
      vi: "Điều nào sau đây mô tả sự khác biệt giữa **Tiêu chí Đầu ra (Exit Criteria)** và **Tiêu chí Đầu vào (Entry Criteria)**?",
    },
    answers: [
      {
        text: "Entry Criteria specify when testing can start; Exit Criteria specify when testing is complete.",
        correct: true,
        translation: {
          vi: "Tiêu chí Đầu vào xác định khi nào kiểm thử có thể bắt đầu; Tiêu chí Đầu ra xác định khi nào kiểm thử hoàn thành.",
        },
      },
      {
        text: "Entry Criteria are defined by the Test Manager; Exit Criteria are defined by the business stakeholders.",
        correct: false,
        translation: {
          vi: "Tiêu chí Đầu vào được xác định bởi Người quản lý kiểm thử; Tiêu chí Đầu ra được xác định bởi các bên liên quan nghiệp vụ.",
        },
      },
      {
        text: "Entry Criteria must be met for every single test case; Exit Criteria apply to the entire test level.",
        correct: false,
        translation: {
          vi: "Tiêu chí Đầu vào phải được đáp ứng cho mọi trường hợp kiểm thử; Tiêu chí Đầu ra áp dụng cho toàn bộ cấp độ kiểm thử.",
        },
      },
      {
        text: "Entry Criteria relate to the scope of testing; Exit Criteria relate to the quality of the product.",
        correct: false,
        translation: {
          vi: "Tiêu chí Đầu vào liên quan đến phạm vi kiểm thử; Tiêu chí Đầu ra liên quan đến chất lượng sản phẩm.",
        },
      },
    ],
  },
  {
    question: "Which of the following is a key task of **Test Monitoring**?",
    translation: {
      vi: "Điều nào sau đây là một nhiệm vụ chính của **Giám sát Kiểm thử (Test Monitoring)**?",
    },
    answers: [
      {
        text: "Calculating metrics on test progress and defect resolution.",
        correct: true,
        translation: {
          vi: "Tính toán các số liệu về tiến trình kiểm thử và giải quyết lỗi.",
        },
      },
      {
        text: "Defining the test strategy and scope.",
        correct: false,
        translation: {
          vi: "Xác định chiến lược và phạm vi kiểm thử.",
        },
      },
      {
        text: "Analyzing work products to find defects.",
        correct: false,
        translation: {
          vi: "Phân tích các sản phẩm làm việc để tìm lỗi.",
        },
      },
      {
        text: "Implementing the test environment and preparing test data.",
        correct: false,
        translation: {
          vi: "Thực hiện môi trường kiểm thử và chuẩn bị dữ liệu kiểm thử.",
        },
      },
    ],
  },
  {
    question:
      "When applying **Boundary Value Analysis (BVA)** to a valid range of 0 to 100, which test values are MOST likely to find defects?",
    translation: {
      vi: "Khi áp dụng **Phân tích Giá trị Biên (BVA)** cho một phạm vi hợp lệ từ 0 đến 100, các giá trị kiểm thử nào **có khả năng nhất** tìm thấy lỗi?",
    },
    answers: [
      {
        text: "1, 50, 99",
        correct: false,
        translation: {
          vi: "1, 50, 99",
        },
      },
      {
        text: "0, 1, 99, 100",
        correct: false,
        translation: {
          vi: "0, 1, 99, 100",
        },
      },
      {
        text: "-1, 0, 100, 101",
        correct: true,
        translation: {
          vi: "-1, 0, 100, 101",
        },
      },
      {
        text: "50, 51, 52",
        correct: false,
        translation: {
          vi: "50, 51, 52",
        },
      },
    ],
  },
  {
    question:
      "Which of the following describes the purpose of a **Test Plan**?",
    translation: {
      vi: "Điều nào sau đây mô tả mục đích của một **Kế hoạch Kiểm thử (Test Plan)**?",
    },
    answers: [
      {
        text: "To document the steps for executing a single test case.",
        correct: false,
        translation: {
          vi: "Để tài liệu hóa các bước thực hiện một trường hợp kiểm thử duy nhất.",
        },
      },
      {
        text: "To specify the scope, objectives, risks, and approach of testing.",
        correct: true,
        translation: {
          vi: "Để chỉ rõ phạm vi, mục tiêu, rủi ro và cách tiếp cận kiểm thử.",
        },
      },
      {
        text: "To report the final status of testing to stakeholders.",
        correct: false,
        translation: {
          vi: "Để báo cáo trạng thái cuối cùng của kiểm thử cho các bên liên quan.",
        },
      },
      {
        text: "To detail the internal design and structure of the software.",
        correct: false,
        translation: {
          vi: "Để chi tiết hóa thiết kế và cấu trúc bên trong của phần mềm.",
        },
      },
    ],
  },
  {
    question:
      "What is the primary benefit of **Iterative and Incremental development models** (like Agile) for testing?",
    translation: {
      vi: "Lợi ích chính của **các mô hình phát triển Lặp đi Lặp lại và Tăng dần** (như Agile) đối với kiểm thử là gì?",
    },
    answers: [
      {
        text: "It eliminates the need for Acceptance Testing.",
        correct: false,
        translation: {
          vi: "Nó loại bỏ nhu cầu Kiểm thử Chấp nhận.",
        },
      },
      {
        text: "It allows for early and frequent testing and feedback.",
        correct: true,
        translation: {
          vi: "Nó cho phép kiểm thử và phản hồi sớm và thường xuyên.",
        },
      },
      {
        text: "It guarantees that all requirements will be met on time.",
        correct: false,
        translation: {
          vi: "Nó đảm bảo rằng tất cả các yêu cầu sẽ được đáp ứng đúng hạn.",
        },
      },
      {
        text: "It prevents the need for regression testing.",
        correct: false,
        translation: {
          vi: "Nó ngăn chặn nhu cầu kiểm thử hồi quy.",
        },
      },
    ],
  },
  {
    question:
      "In the context of the **Fundamental Test Process**, what is the main goal of **Test Analysis**?",
    translation: {
      vi: "Trong bối cảnh của **Quy trình Kiểm thử Cơ bản**, mục tiêu chính của **Phân tích Kiểm thử (Test Analysis)** là gì?",
    },
    answers: [
      {
        text: "To specify how testing is to be done by defining the test cases.",
        correct: false,
        translation: {
          vi: "Để xác định cách kiểm thử sẽ được thực hiện bằng cách định nghĩa các trường hợp kiểm thử.",
        },
      },
      {
        text: "To determine what to test by analyzing the test basis and identifying test conditions.",
        correct: true,
        translation: {
          vi: "Để xác định những gì cần kiểm thử bằng cách phân tích cơ sở kiểm thử và xác định các điều kiện kiểm thử.",
        },
      },
      {
        text: "To ensure that the test environment and test data are prepared.",
        correct: false,
        translation: {
          vi: "Để đảm bảo rằng môi trường kiểm thử và dữ liệu kiểm thử đã được chuẩn bị.",
        },
      },
      {
        text: "To compare actual results with expected results.",
        correct: false,
        translation: {
          vi: "Để so sánh kết quả thực tế với kết quả mong đợi.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following describes the concept of **Test Pyramid**?",
    translation: {
      vi: "Điều nào sau đây mô tả khái niệm về **Kim tự tháp Kiểm thử (Test Pyramid)**?",
    },
    answers: [
      {
        text: "It suggests having many Integration tests, fewer Component tests, and a small number of Acceptance tests.",
        correct: false,
        translation: {
          vi: "Nó đề xuất có nhiều kiểm thử Tích hợp, ít kiểm thử Thành phần hơn, và một số lượng nhỏ kiểm thử Chấp nhận.",
        },
      },
      {
        text: "It emphasizes performing more component testing (at the base) and progressively fewer tests at higher levels (System and Acceptance).",
        correct: true,
        translation: {
          vi: "Nó nhấn mạnh việc thực hiện nhiều kiểm thử thành phần hơn (ở đáy) và dần dần ít kiểm thử hơn ở các cấp độ cao hơn (Hệ thống và Chấp nhận).",
        },
      },
      {
        text: "It recommends relying heavily on manual Acceptance tests.",
        correct: false,
        translation: {
          vi: "Nó khuyến nghị dựa vào kiểm thử Chấp nhận thủ công một cách nặng nề.",
        },
      },
      {
        text: "It means prioritizing Non-functional testing over Functional testing.",
        correct: false,
        translation: {
          vi: "Nó có nghĩa là ưu tiên Kiểm thử Phi chức năng hơn Kiểm thử Chức năng.",
        },
      },
    ],
  },
  {
    question:
      "Which level of testing focuses on verifying the interfaces and interactions between integrated components?",
    translation: {
      vi: "Cấp độ kiểm thử nào tập trung vào việc xác minh giao diện và tương tác giữa các thành phần được tích hợp?",
    },
    answers: [
      {
        text: "Component Testing",
        correct: false,
        translation: {
          vi: "Kiểm thử Thành phần (Component Testing)",
        },
      },
      {
        text: "System Testing",
        correct: false,
        translation: {
          vi: "Kiểm thử Hệ thống (System Testing)",
        },
      },
      {
        text: "Integration Testing",
        correct: true,
        translation: {
          vi: "Kiểm thử Tích hợp (Integration Testing)",
        },
      },
      {
        text: "Acceptance Testing",
        correct: false,
        translation: {
          vi: "Kiểm thử Chấp nhận (Acceptance Testing)",
        },
      },
    ],
  },
  {
    question: "What is the primary purpose of **Alpha Testing**?",
    translation: {
      vi: "Mục đích chính của **Kiểm thử Alpha (Alpha Testing)** là gì?",
    },
    answers: [
      {
        text: "To get feedback from users in a real environment.",
        correct: false,
        translation: {
          vi: "Để nhận phản hồi từ người dùng trong môi trường thực.",
        },
      },
      {
        text: "To find defects by the potential users or customers in the development site.",
        correct: true,
        translation: {
          vi: "Để tìm lỗi bởi những người dùng hoặc khách hàng tiềm năng tại nơi phát triển.",
        },
      },
      {
        text: "To ensure the system works correctly in all possible customer environments.",
        correct: false,
        translation: {
          vi: "Để đảm bảo hệ thống hoạt động chính xác trong tất cả các môi trường khách hàng có thể có.",
        },
      },
      {
        text: "To test the security features of the system.",
        correct: false,
        translation: {
          vi: "Để kiểm thử các tính năng bảo mật của hệ thống.",
        },
      },
    ],
  },
  {
    question:
      "A tester uses his knowledge of previous systems and common failure points to create test cases. Which test technique is he using?",
    translation: {
      vi: "Một người kiểm thử sử dụng kiến thức về các hệ thống trước đây và các điểm lỗi phổ biến để tạo ra các trường hợp kiểm thử. Anh ấy đang sử dụng kỹ thuật kiểm thử nào?",
    },
    answers: [
      {
        text: "Equivalence Partitioning",
        correct: false,
        translation: {
          vi: "Phân vùng Tương đương (Equivalence Partitioning)",
        },
      },
      {
        text: "Decision Testing",
        correct: false,
        translation: {
          vi: "Kiểm thử Quyết định (Decision Testing)",
        },
      },
      {
        text: "Exploratory Testing",
        correct: false,
        translation: {
          vi: "Kiểm thử Khám phá (Exploratory Testing)",
        },
      },
      {
        text: "Error Guessing",
        correct: true,
        translation: {
          vi: "Đoán lỗi (Error Guessing)",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a key characteristic of **Collaborative User Story Writing**?",
    translation: {
      vi: "Điều nào sau đây là một đặc điểm chính của **Viết User Story Hợp tác (Collaborative User Story Writing)**?",
    },
    answers: [
      {
        text: "The stories are always written by the Product Owner and no one else.",
        correct: false,
        translation: {
          vi: "Các câu chuyện luôn được viết bởi Chủ sản phẩm (Product Owner) và không ai khác.",
        },
      },
      {
        text: "The entire team, including the tester, works together to define and refine the story and its acceptance criteria.",
        correct: true,
        translation: {
          vi: "Toàn bộ đội ngũ, bao gồm cả người kiểm thử, cùng nhau định nghĩa và tinh chỉnh câu chuyện và tiêu chí chấp nhận của nó.",
        },
      },
      {
        text: "It is a form of Dynamic Testing that requires running the code.",
        correct: false,
        translation: {
          vi: "Nó là một hình thức Kiểm thử Động yêu cầu chạy mã code.",
        },
      },
      {
        text: "It is only used for high-risk user stories.",
        correct: false,
        translation: {
          vi: "Nó chỉ được sử dụng cho các câu chuyện người dùng có rủi ro cao.",
        },
      },
    ],
  },
  {
    question:
      "What is the main goal of the **Review** process in Static Testing?",
    translation: {
      vi: "Mục tiêu chính của quy trình **Rà soát (Review)** trong Kiểm thử Tĩnh là gì?",
    },
    answers: [
      {
        text: "To find defects and improvements in the work product and gain understanding.",
        correct: true,
        translation: {
          vi: "Để tìm lỗi và cải tiến trong sản phẩm làm việc và đạt được sự hiểu biết.",
        },
      },
      {
        text: "To execute the work product in a test environment.",
        correct: false,
        translation: {
          vi: "Để thực thi sản phẩm làm việc trong môi trường kiểm thử.",
        },
      },
      {
        text: "To confirm that the test environment is ready.",
        correct: false,
        translation: {
          vi: "Để xác nhận rằng môi trường kiểm thử đã sẵn sàng.",
        },
      },
      {
        text: "To report the final test results to the project manager.",
        correct: false,
        translation: {
          vi: "Để báo cáo kết quả kiểm thử cuối cùng cho người quản lý dự án.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following describes the concept of **Testing Quadrants** (used in Agile)?",
    translation: {
      vi: "Điều nào sau đây mô tả khái niệm về **Góc phần tư Kiểm thử (Testing Quadrants -** được sử dụng trong Agile)?",
    },
    answers: [
      {
        text: "It categorizes testing into Functional, Non-functional, Structural, and Confirmation.",
        correct: false,
        translation: {
          vi: "Nó phân loại kiểm thử thành Chức năng, Phi chức năng, Cấu trúc và Xác nhận.",
        },
      },
      {
        text: "It structures testing into four main areas, considering the driver (business vs. technology) and the objective (supporting development vs. critiquing the product).",
        correct: true,
        translation: {
          vi: "Nó cấu trúc kiểm thử thành bốn lĩnh vực chính, xem xét yếu tố thúc đẩy (nghiệp vụ so với công nghệ) và mục tiêu (hỗ trợ phát triển so với phê bình sản phẩm).",
        },
      },
      {
        text: "It is a model used only for Component Testing.",
        correct: false,
        translation: {
          vi: "Nó là một mô hình chỉ được sử dụng cho Kiểm thử Thành phần.",
        },
      },
      {
        text: "It defines the four levels of testing: Component, Integration, System, and Acceptance.",
        correct: false,
        translation: {
          vi: "Nó định nghĩa bốn cấp độ kiểm thử: Thành phần, Tích hợp, Hệ thống và Chấp nhận.",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following is a benefit of **Equivalence Partitioning (EP)**?",
    translation: {
      vi: "Điều nào sau đây là một lợi ích của **Phân vùng Tương đương (Equivalence Partitioning)**?",
    },
    answers: [
      {
        text: "It finds all defects in the implementation logic.",
        correct: false,
        translation: {
          vi: "Nó tìm thấy tất cả các lỗi trong logic triển khai.",
        },
      },
      {
        text: "It helps reduce the total number of test cases while maintaining effectiveness.",
        correct: true,
        translation: {
          vi: "Nó giúp giảm tổng số trường hợp kiểm thử trong khi vẫn duy trì hiệu quả.",
        },
      },
      {
        text: "It guarantees 100% statement coverage.",
        correct: false,
        translation: {
          vi: "Nó đảm bảo độ bao phủ câu lệnh 100%.",
        },
      },
      {
        text: "It is a structural technique that requires access to the source code.",
        correct: false,
        translation: {
          vi: "Nó là một kỹ thuật cấu trúc yêu cầu quyền truy cập vào mã nguồn.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is an example of an **Experience-based Test Technique**?",
    translation: {
      vi: "Điều nào sau đây là một ví dụ về **Kỹ thuật Kiểm thử Dựa trên Kinh nghiệm (Experience-based Test Technique)**?",
    },
    answers: [
      {
        text: "State Transition Testing",
        correct: false,
        translation: {
          vi: "Kiểm thử Chuyển đổi Trạng thái (State Transition Testing)",
        },
      },
      {
        text: "Decision Testing",
        correct: false,
        translation: {
          vi: "Kiểm thử Quyết định (Decision Testing)",
        },
      },
      {
        text: "Exploratory Testing",
        correct: true,
        translation: {
          vi: "Kiểm thử Khám phá (Exploratory Testing)",
        },
      },
      {
        text: "Boundary Value Analysis",
        correct: false,
        translation: {
          vi: "Phân tích Giá trị Biên (Boundary Value Analysis)",
        },
      },
    ],
  },
  {
    question: "The primary goal of **Test Planning** is to:",
    translation: {
      vi: "Mục tiêu chính của **Lập kế hoạch Kiểm thử (Test Planning)** là gì?",
    },
    answers: [
      {
        text: "Compare actual results with expected results.",
        correct: false,
        translation: {
          vi: "So sánh kết quả thực tế với kết quả mong đợi.",
        },
      },
      {
        text: "Document what will be tested, when, and how, in order to achieve the test objectives.",
        correct: true,
        translation: {
          vi: "Tài liệu hóa những gì sẽ được kiểm thử, khi nào, và bằng cách nào, để đạt được các mục tiêu kiểm thử.",
        },
      },
      {
        text: "Set up the test environment and prepare the test data.",
        correct: false,
        translation: {
          vi: "Thiết lập môi trường kiểm thử và chuẩn bị dữ liệu kiểm thử.",
        },
      },
      {
        text: "Execute the test cases and record the results.",
        correct: false,
        translation: {
          vi: "Thực hiện các trường hợp kiểm thử và ghi lại kết quả.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a benefit of **Early Testing** (Shift-Left)?",
    translation: {
      vi: "Điều nào sau đây là một lợi ích của **Kiểm thử Sớm (Early Testing - Shift-Left)**?",
    },
    answers: [
      {
        text: "It reduces the need for user acceptance testing.",
        correct: false,
        translation: {
          vi: "Nó làm giảm nhu cầu kiểm thử chấp nhận của người dùng.",
        },
      },
      {
        text: "It typically leads to lower costs for fixing defects.",
        correct: true,
        translation: {
          vi: "Nó thường dẫn đến chi phí sửa lỗi thấp hơn.",
        },
      },
      {
        text: "It eliminates the need for all forms of dynamic testing.",
        correct: false,
        translation: {
          vi: "Nó loại bỏ nhu cầu đối với tất cả các hình thức kiểm thử động.",
        },
      },
      {
        text: "It guarantees 100% coverage of all requirements.",
        correct: false,
        translation: {
          vi: "Nó đảm bảo độ bao phủ 100% của tất cả các yêu cầu.",
        },
      },
    ],
  },
  {
    question:
      "Which term describes the measure of the percentage of requirements covered by the tests?",
    translation: {
      vi: "Thuật ngữ nào mô tả thước đo về tỷ lệ phần trăm các yêu cầu được bao phủ bởi các kiểm thử?",
    },
    answers: [
      {
        text: "Defect Density",
        correct: false,
        translation: {
          vi: "Mật độ Lỗi (Defect Density)",
        },
      },
      {
        text: "Test Coverage",
        correct: true,
        translation: {
          vi: "Độ bao phủ Kiểm thử (Test Coverage)",
        },
      },
      {
        text: "Test Effectiveness",
        correct: false,
        translation: {
          vi: "Hiệu quả Kiểm thử (Test Effectiveness)",
        },
      },
      {
        text: "Test Efficiency",
        correct: false,
        translation: {
          vi: "Hiệu suất Kiểm thử (Test Efficiency)",
        },
      },
    ],
  },
  {
    question:
      "Which activity is performed during the **Test Implementation** phase of the Fundamental Test Process?",
    translation: {
      vi: "Hoạt động nào được thực hiện trong giai đoạn **Triển khai Kiểm thử (Test Implementation)** của Quy trình Kiểm thử Cơ bản?",
    },
    answers: [
      {
        text: "Defining the test objectives.",
        correct: false,
        translation: {
          vi: "Xác định các mục tiêu kiểm thử.",
        },
      },
      {
        text: "Creating the test design specification.",
        correct: false,
        translation: {
          vi: "Tạo đặc tả thiết kế kiểm thử.",
        },
      },
      {
        text: "Creating the test suite and preparing the test data.",
        correct: true,
        translation: {
          vi: "Tạo bộ kiểm thử (test suite) và chuẩn bị dữ liệu kiểm thử.",
        },
      },
      {
        text: "Comparing actual results with expected results.",
        correct: false,
        translation: {
          vi: "So sánh kết quả thực tế với kết quả mong đợi.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a common reason for a test to be **temporarily suspended**?",
    translation: {
      vi: "Điều nào sau đây là một lý do phổ biến khiến một kiểm thử bị **tạm thời đình chỉ**?",
    },
    answers: [
      {
        text: "A critical defect is found that prevents further testing in that area.",
        correct: true,
        translation: {
          vi: "Một lỗi nghiêm trọng được tìm thấy ngăn chặn việc kiểm thử tiếp theo trong khu vực đó.",
        },
      },
      {
        text: "All test cases for the test level have been executed.",
        correct: false,
        translation: {
          vi: "Tất cả các trường hợp kiểm thử cho cấp độ kiểm thử đã được thực hiện.",
        },
      },
      {
        text: "The test report needs to be written.",
        correct: false,
        translation: {
          vi: "Báo cáo kiểm thử cần được viết.",
        },
      },
      {
        text: "The test team decides to perform regression testing instead.",
        correct: false,
        translation: {
          vi: "Đội kiểm thử quyết định thực hiện kiểm thử hồi quy thay thế.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a typical objective of **System Testing**?",
    translation: {
      vi: "Điều nào sau đây là một mục tiêu điển hình của **Kiểm thử Hệ thống (System Testing)**?",
    },
    answers: [
      {
        text: "To verify that the code complies with the technical design.",
        correct: false,
        translation: {
          vi: "Để xác minh rằng mã code tuân thủ thiết kế kỹ thuật.",
        },
      },
      {
        text: "To reduce the risk of system failure in the operational environment.",
        correct: true,
        translation: {
          vi: "Để giảm thiểu rủi ro hệ thống bị sự cố trong môi trường vận hành.",
        },
      },
      {
        text: "To test the interaction between components.",
        correct: false,
        translation: {
          vi: "Để kiểm thử sự tương tác giữa các thành phần.",
        },
      },
      {
        text: "To confirm that the business needs are met.",
        correct: false,
        translation: {
          vi: "Để xác nhận rằng các nhu cầu nghiệp vụ được đáp ứng.",
        },
      },
    ],
  },
  {
    question: "Which document is the **Test Basis** for Acceptance Testing?",
    translation: {
      vi: "Tài liệu nào là **Cơ sở Kiểm thử (Test Basis)** cho Kiểm thử Chấp nhận (Acceptance Testing)?",
    },
    answers: [
      {
        text: "Component specification",
        correct: false,
        translation: {
          vi: "Đặc tả thành phần",
        },
      },
      {
        text: "System design document",
        correct: false,
        translation: {
          vi: "Tài liệu thiết kế hệ thống",
        },
      },
      {
        text: "Business processes and User requirements",
        correct: true,
        translation: {
          vi: "Các quy trình nghiệp vụ và Yêu cầu người dùng",
        },
      },
      {
        text: "Source code",
        correct: false,
        translation: {
          vi: "Mã nguồn",
        },
      },
    ],
  },
  {
    question: "Which of the following is a goal of **Test Reporting**?",
    translation: {
      vi: "Điều nào sau đây là mục tiêu của **Báo cáo Kiểm thử (Test Reporting)**?",
    },
    answers: [
      {
        text: "To provide all stakeholders with information about the test process and quality of the product.",
        correct: true,
        translation: {
          vi: "Để cung cấp cho tất cả các bên liên quan thông tin về quy trình kiểm thử và chất lượng của sản phẩm.",
        },
      },
      {
        text: "To create a detailed schedule for future test activities.",
        correct: false,
        translation: {
          vi: "Để tạo một lịch trình chi tiết cho các hoạt động kiểm thử trong tương lai.",
        },
      },
      {
        text: "To analyze the root cause of all defects found during testing.",
        correct: false,
        translation: {
          vi: "Để phân tích nguyên nhân gốc rễ của tất cả các lỗi được tìm thấy trong quá trình kiểm thử.",
        },
      },
      {
        text: "To define the Exit Criteria for the test level.",
        correct: false,
        translation: {
          vi: "Để xác định Tiêu chí Đầu ra cho cấp độ kiểm thử.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is the BEST description of **Debugging**?",
    translation: {
      vi: "Mô tả nào sau đây là **TỐT NHẤT** về **Gỡ lỗi (Debugging)**?",
    },
    answers: [
      {
        text: "The process of executing a program with the intent of finding errors.",
        correct: false,
        translation: {
          vi: "Quá trình thực thi một chương trình với ý định tìm lỗi.",
        },
      },
      {
        text: "The process of diagnosing, locating, and fixing a defect.",
        correct: true,
        translation: {
          vi: "Quá trình chẩn đoán, xác định vị trí và sửa chữa một lỗi.",
        },
      },
      {
        text: "The process of testing the software to meet the acceptance criteria.",
        correct: false,
        translation: {
          vi: "Quá trình kiểm thử phần mềm để đáp ứng các tiêu chí chấp nhận.",
        },
      },
      {
        text: "The process of reviewing a document to find defects.",
        correct: false,
        translation: {
          vi: "Quá trình rà soát một tài liệu để tìm lỗi.",
        },
      },
    ],
  },
  {
    question:
      "The concept of **Decision Coverage** is based on what type of information?",
    translation: {
      vi: "Khái niệm về **Độ bao phủ Quyết định (Decision Coverage)** dựa trên loại thông tin nào?",
    },
    answers: [
      {
        text: "The business process flows.",
        correct: false,
        translation: {
          vi: "Các luồng quy trình nghiệp vụ.",
        },
      },
      {
        text: "The input and output values.",
        correct: false,
        translation: {
          vi: "Các giá trị đầu vào và đầu ra.",
        },
      },
      {
        text: "The control flow of the software (e.g., IF statements).",
        correct: true,
        translation: {
          vi: "Luồng điều khiển của phần mềm (ví dụ: các câu lệnh IF).",
        },
      },
      {
        text: "The data dictionary and database schema.",
        correct: false,
        translation: {
          vi: "Từ điển dữ liệu và lược đồ cơ sở dữ liệu.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a risk of a high-speed, incremental development approach (like DevOps or Agile)?",
    translation: {
      vi: "Điều nào sau đây là một rủi ro của cách tiếp cận phát triển gia tăng, tốc độ cao (như DevOps hoặc Agile)?",
    },
    answers: [
      {
        text: "Lack of automation may lead to insufficient regression testing.",
        correct: true,
        translation: {
          vi: "Thiếu tự động hóa có thể dẫn đến kiểm thử hồi quy không đủ.",
        },
      },
      {
        text: "Too much documentation of test results.",
        correct: false,
        translation: {
          vi: "Quá nhiều tài liệu về kết quả kiểm thử.",
        },
      },
      {
        text: "Testing starts too late in the life cycle.",
        correct: false,
        translation: {
          vi: "Kiểm thử bắt đầu quá muộn trong vòng đời.",
        },
      },
      {
        text: "Over-reliance on static testing.",
        correct: false,
        translation: {
          vi: "Quá tin cậy vào kiểm thử tĩnh.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is the key characteristic of **UAT (User Acceptance Testing)**?",
    translation: {
      vi: "Điều nào sau đây là đặc điểm chính của **Kiểm thử Chấp nhận của Người dùng (UAT)**?",
    },
    answers: [
      {
        text: "It is focused on finding defects in the code logic.",
        correct: false,
        translation: {
          vi: "Nó tập trung vào việc tìm lỗi trong logic mã code.",
        },
      },
      {
        text: "It verifies that the system satisfies the business needs and fits the user's operational process.",
        correct: true,
        translation: {
          vi: "Nó xác minh rằng hệ thống thỏa mãn các nhu cầu nghiệp vụ và phù hợp với quy trình vận hành của người dùng.",
        },
      },
      {
        text: "It is always performed by a separate, independent test team.",
        correct: false,
        translation: {
          vi: "Nó luôn được thực hiện bởi một đội kiểm thử độc lập, riêng biệt.",
        },
      },
      {
        text: "It focuses primarily on non-functional requirements like performance and security.",
        correct: false,
        translation: {
          vi: "Nó tập trung chủ yếu vào các yêu cầu phi chức năng như hiệu suất và bảo mật.",
        },
      },
    ],
  },
  {
    question:
      "What is the **MOST** important reason for designing tests early in the life cycle?",
    translation: {
      vi: "Lý do **QUAN TRỌNG NHẤT** để thiết kế các kiểm thử sớm trong vòng đời là gì?",
    },
    answers: [
      {
        text: "To ensure that all test cases can be automated.",
        correct: false,
        translation: {
          vi: "Để đảm bảo rằng tất cả các trường hợp kiểm thử có thể được tự động hóa.",
        },
      },
      {
        text: "To find defects in the test basis (e.g., requirements) and prevent costly rework.",
        correct: true,
        translation: {
          vi: "Để tìm lỗi trong cơ sở kiểm thử (ví dụ: yêu cầu) và ngăn ngừa việc làm lại tốn kém.",
        },
      },
      {
        text: "To allow the developers more time to write the code.",
        correct: false,
        translation: {
          vi: "Để cho phép các nhà phát triển có thêm thời gian để viết mã code.",
        },
      },
      {
        text: "To ensure that all components are fully integrated.",
        correct: false,
        translation: {
          vi: "Để đảm bảo rằng tất cả các thành phần được tích hợp hoàn toàn.",
        },
      },
    ],
  },
  {
    question:
      "Which test technique is used to derive test cases from the control flow of the software?",
    translation: {
      vi: "Kỹ thuật kiểm thử nào được sử dụng để rút ra các trường hợp kiểm thử từ luồng điều khiển của phần mềm?",
    },
    answers: [
      {
        text: "Equivalence Partitioning",
        correct: false,
        translation: {
          vi: "Phân vùng Tương đương (Equivalence Partitioning)",
        },
      },
      {
        text: "State Transition Testing",
        correct: false,
        translation: {
          vi: "Kiểm thử Chuyển đổi Trạng thái (State Transition Testing)",
        },
      },
      {
        text: "Statement Testing",
        correct: true,
        translation: {
          vi: "Kiểm thử Câu lệnh (Statement Testing)",
        },
      },
      {
        text: "Decision Table Testing",
        correct: false,
        translation: {
          vi: "Kiểm thử Bảng Quyết định (Decision Table Testing)",
        },
      },
    ],
  },
  {
    question: "Which of the following is an example of a **Project Risk**?",
    translation: {
      vi: "Điều nào sau đây là một ví dụ về **Rủi ro Dự án (Project Risk)**?",
    },
    answers: [
      {
        text: "The calculated tax rate is incorrect.",
        correct: false,
        translation: {
          vi: "Tỷ lệ thuế được tính là không chính xác.",
        },
      },
      {
        text: "The software is difficult to use.",
        correct: false,
        translation: {
          vi: "Phần mềm khó sử dụng.",
        },
      },
      {
        text: "The actual cost of testing is higher than the budgeted amount.",
        correct: true,
        translation: {
          vi: "Chi phí kiểm thử thực tế cao hơn số tiền đã được lập ngân sách.",
        },
      },
      {
        text: "The system performance is too slow under peak load.",
        correct: false,
        translation: {
          vi: "Hiệu suất hệ thống quá chậm dưới tải cao nhất.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a benefit of the **Defect Management Process**?",
    translation: {
      vi: "Điều nào sau đây là một lợi ích của **Quy trình Quản lý Lỗi (Defect Management Process)**?",
    },
    answers: [
      {
        text: "It guarantees that no further defects will be introduced into the system.",
        correct: false,
        translation: {
          vi: "Nó đảm bảo rằng không có thêm lỗi nào sẽ được đưa vào hệ thống.",
        },
      },
      {
        text: "It provides valuable information for improving the development and testing process.",
        correct: true,
        translation: {
          vi: "Nó cung cấp thông tin có giá trị để cải tiến quy trình phát triển và kiểm thử.",
        },
      },
      {
        text: "It is used exclusively to prioritize test case execution.",
        correct: false,
        translation: {
          vi: "Nó được sử dụng độc quyền để ưu tiên thực hiện trường hợp kiểm thử.",
        },
      },
      {
        text: "It eliminates the need for confirmation testing.",
        correct: false,
        translation: {
          vi: "Nó loại bỏ nhu cầu kiểm thử xác nhận.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a feature of a **Test Execution tool**?",
    translation: {
      vi: "Điều nào sau đây là một tính năng của **công cụ Thực thi Kiểm thử (Test Execution tool)**?",
    },
    answers: [
      {
        text: "Storing information about defect status.",
        correct: false,
        translation: {
          vi: "Lưu trữ thông tin về trạng thái lỗi.",
        },
      },
      {
        text: "Comparing actual results with expected results.",
        correct: true,
        translation: {
          vi: "So sánh kết quả thực tế với kết quả mong đợi.",
        },
      },
      {
        text: "Providing checklists for static testing.",
        correct: false,
        translation: {
          vi: "Cung cấp danh sách kiểm tra cho kiểm thử tĩnh.",
        },
      },
      {
        text: "Managing the versions of test documentation.",
        correct: false,
        translation: {
          vi: "Quản lý các phiên bản của tài liệu kiểm thử.",
        },
      },
    ],
  },
  {
    question:
      "When testing a software component, which technique is likely to detect defects in the component's internal logic?",
    translation: {
      vi: "Khi kiểm thử một thành phần phần mềm, kỹ thuật nào có khả năng phát hiện lỗi trong logic bên trong của thành phần đó?",
    },
    answers: [
      {
        text: "Exploratory Testing",
        correct: false,
        translation: {
          vi: "Kiểm thử Khám phá (Exploratory Testing)",
        },
      },
      {
        text: "Decision Table Testing",
        correct: false,
        translation: {
          vi: "Kiểm thử Bảng Quyết định (Decision Table Testing)",
        },
      },
      {
        text: "Statement Testing",
        correct: true,
        translation: {
          vi: "Kiểm thử Câu lệnh (Statement Testing)",
        },
      },
      {
        text: "User Story Testing",
        correct: false,
        translation: {
          vi: "Kiểm thử Câu chuyện người dùng (User Story Testing)",
        },
      },
    ],
  },
  {
    question:
      "A system is designed to have a password between 8 and 12 characters, inclusive. Using **Boundary Value Analysis (BVA)**, which of the following set of values should be tested?",
    translation: {
      vi: "Một hệ thống được thiết kế để có mật khẩu từ 8 đến 12 ký tự, bao gồm cả 8 và 12. Sử dụng **Phân tích Giá trị Biên (BVA)**, tập hợp giá trị nào sau đây nên được kiểm thử?",
    },
    answers: [
      {
        text: "7, 8, 12, 13",
        correct: true,
        translation: {
          vi: "7, 8, 12, 13",
        },
      },
      {
        text: "8, 9, 10, 11, 12",
        correct: false,
        translation: {
          vi: "8, 9, 10, 11, 12",
        },
      },
      {
        text: "6, 7, 13, 14",
        correct: false,
        translation: {
          vi: "6, 7, 13, 14",
        },
      },
      {
        text: "7, 8, 11, 12",
        correct: false,
        translation: {
          vi: "7, 8, 11, 12",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a characteristic of **Black-Box Testing**?",
    translation: {
      vi: "Điều nào sau đây là đặc điểm của **Kiểm thử Hộp đen (Black-Box Testing)**?",
    },
    answers: [
      {
        text: "It requires access to the source code or internal design.",
        correct: false,
        translation: {
          vi: "Nó yêu cầu quyền truy cập vào mã nguồn hoặc thiết kế bên trong.",
        },
      },
      {
        text: "It derives test cases based on the system's behavior as seen by the user.",
        correct: true,
        translation: {
          vi: "Nó rút ra các trường hợp kiểm thử dựa trên hành vi của hệ thống được nhìn thấy bởi người dùng.",
        },
      },
      {
        text: "It is only performed during Component Testing.",
        correct: false,
        translation: {
          vi: "Nó chỉ được thực hiện trong quá trình Kiểm thử Thành phần.",
        },
      },
      {
        text: "It focuses on structural coverage metrics.",
        correct: false,
        translation: {
          vi: "Nó tập trung vào các số liệu độ bao phủ cấu trúc.",
        },
      },
    ],
  },
  {
    question:
      "Which test approach emphasizes testing early, frequently, and iteratively?",
    translation: {
      vi: "Cách tiếp cận kiểm thử nào nhấn mạnh việc kiểm thử sớm, thường xuyên và lặp đi lặp lại?",
    },
    answers: [
      {
        text: "V-model",
        correct: false,
        translation: {
          vi: "Mô hình V (V-model)",
        },
      },
      {
        text: "Sequential development (e.g., Waterfall)",
        correct: false,
        translation: {
          vi: "Phát triển tuần tự (ví dụ: Thác nước)",
        },
      },
      {
        text: "Agile and DevOps",
        correct: true,
        translation: {
          vi: "Agile và DevOps",
        },
      },
      {
        text: "System Testing",
        correct: false,
        translation: {
          vi: "Kiểm thử Hệ thống (System Testing)",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is the main purpose of **Maintenance Testing**?",
    translation: {
      vi: "Mục đích chính của **Kiểm thử Bảo trì (Maintenance Testing)** là gì?",
    },
    answers: [
      {
        text: "To verify the system's ability to handle new functionality after a major upgrade.",
        correct: false,
        translation: {
          vi: "Để xác minh khả năng của hệ thống để xử lý chức năng mới sau một bản nâng cấp lớn.",
        },
      },
      {
        text: "To ensure that changes to an operational system do not cause unintended negative effects.",
        correct: true,
        translation: {
          vi: "Để đảm bảo rằng các thay đổi đối với một hệ thống đang hoạt động không gây ra các tác động tiêu cực ngoài ý muốn.",
        },
      },
      {
        text: "To find all remaining defects before release.",
        correct: false,
        translation: {
          vi: "Để tìm tất cả các lỗi còn lại trước khi phát hành.",
        },
      },
      {
        text: "To test the system against non-functional requirements.",
        correct: false,
        translation: {
          vi: "Để kiểm thử hệ thống dựa trên các yêu cầu phi chức năng.",
        },
      },
    ],
  },
  {
    question:
      "Which principle states that a small number of modules usually contain most of the defects?",
    translation: {
      vi: "Nguyên tắc nào tuyên bố rằng một số lượng nhỏ các mô-đun thường chứa hầu hết các lỗi?",
    },
    answers: [
      {
        text: "Testing is context-dependent",
        correct: false,
        translation: {
          vi: "Kiểm thử phụ thuộc vào ngữ cảnh",
        },
      },
      {
        text: "Defect clustering",
        correct: true,
        translation: {
          vi: "Phân cụm lỗi (Defect clustering)",
        },
      },
      {
        text: "Exhaustive testing is impossible",
        correct: false,
        translation: {
          vi: "Kiểm thử toàn diện là không thể",
        },
      },
      {
        text: "Pesticide paradox",
        correct: false,
        translation: {
          vi: "Nghịch lý thuốc trừ sâu (Pesticide paradox)",
        },
      },
    ],
  },
  {
    question:
      "Which activity of the fundamental test process generates the test cases?",
    translation: {
      vi: "Hoạt động nào của quy trình kiểm thử cơ bản tạo ra các trường hợp kiểm thử?",
    },
    answers: [
      {
        text: "Test Analysis",
        correct: false,
        translation: {
          vi: "Phân tích Kiểm thử (Test Analysis)",
        },
      },
      {
        text: "Test Design",
        correct: true,
        translation: {
          vi: "Thiết kế Kiểm thử (Test Design)",
        },
      },
      {
        text: "Test Implementation",
        correct: false,
        translation: {
          vi: "Triển khai Kiểm thử (Test Implementation)",
        },
      },
      {
        text: "Test Execution",
        correct: false,
        translation: {
          vi: "Thực thi Kiểm thử (Test Execution)",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a major risk when adopting a test automation tool?",
    translation: {
      vi: "Điều nào sau đây là một rủi ro lớn khi áp dụng một công cụ tự động hóa kiểm thử?",
    },
    answers: [
      {
        text: "The tool does not find enough defects.",
        correct: false,
        translation: {
          vi: "Công cụ không tìm đủ lỗi.",
        },
      },
      {
        text: "The project overestimates the time and cost required for tool usage and maintenance.",
        correct: true,
        translation: {
          vi: "Dự án đánh giá quá cao thời gian và chi phí cần thiết cho việc sử dụng và bảo trì công cụ.",
        },
      },
      {
        text: "The number of manual test cases increases significantly.",
        correct: false,
        translation: {
          vi: "Số lượng trường hợp kiểm thử thủ công tăng lên đáng kể.",
        },
      },
      {
        text: "The developers rely too much on the tool for debugging.",
        correct: false,
        translation: {
          vi: "Các nhà phát triển quá phụ thuộc vào công cụ để gỡ lỗi.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is the best description of **Unit Testing**?",
    translation: {
      vi: "Mô tả nào sau đây là tốt nhất về **Kiểm thử Đơn vị (Unit Testing)**?",
    },
    answers: [
      {
        text: "Testing the overall quality of the final system.",
        correct: false,
        translation: {
          vi: "Kiểm thử chất lượng tổng thể của hệ thống cuối cùng.",
        },
      },
      {
        text: "Testing individual, smallest units of source code, usually by the developer.",
        correct: true,
        translation: {
          vi: "Kiểm thử các đơn vị mã nguồn riêng lẻ, nhỏ nhất, thường do nhà phát triển thực hiện.",
        },
      },
      {
        text: "Testing the system's integration with external interfaces.",
        correct: false,
        translation: {
          vi: "Kiểm thử sự tích hợp của hệ thống với các giao diện bên ngoài.",
        },
      },
      {
        text: "Testing whether the user can perform their business tasks.",
        correct: false,
        translation: {
          vi: "Kiểm thử xem người dùng có thể thực hiện các tác vụ nghiệp vụ của họ hay không.",
        },
      },
    ],
  },
  {
    question:
      "The input field requires a 5-digit postal code (e.g., 12345). Which of the following **Equivalence Partitions (EP)** should be created?",
    translation: {
      vi: "Trường nhập liệu yêu cầu mã bưu điện 5 chữ số (ví dụ: 12345). **Phân vùng Tương đương (EP)** nào sau đây nên được tạo?",
    },
    answers: [
      {
        text: "Less than 5 digits (Invalid), 5 digits (Valid), More than 5 digits (Invalid).",
        correct: true,
        translation: {
          vi: "Ít hơn 5 chữ số (Không hợp lệ), 5 chữ số (Hợp lệ), Nhiều hơn 5 chữ số (Không hợp lệ).",
        },
      },
      {
        text: "4 digits, 5 digits, 6 digits.",
        correct: false,
        translation: {
          vi: "4 chữ số, 5 chữ số, 6 chữ số.",
        },
      },
      {
        text: "Only one partition: 5 digits.",
        correct: false,
        translation: {
          vi: "Chỉ một phân vùng: 5 chữ số.",
        },
      },
      {
        text: "5 digits with only numbers, 5 digits with characters.",
        correct: false,
        translation: {
          vi: "5 chữ số chỉ có số, 5 chữ số có ký tự.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is the **MOST** important characteristic of a good Test Case?",
    translation: {
      vi: "Điều nào sau đây là đặc điểm **QUAN TRỌNG NHẤT** của một Trường hợp Kiểm thử tốt?",
    },
    answers: [
      {
        text: "It includes an estimated time for execution.",
        correct: false,
        translation: {
          vi: "Nó bao gồm thời gian ước tính để thực hiện.",
        },
      },
      {
        text: "It is brief and only has one step.",
        correct: false,
        translation: {
          vi: "Nó ngắn gọn và chỉ có một bước.",
        },
      },
      {
        text: "It is traceable to the test basis (e.g., a requirement or user story).",
        correct: true,
        translation: {
          vi: "Nó có thể truy vết được đến cơ sở kiểm thử (ví dụ: một yêu cầu hoặc user story).",
        },
      },
      {
        text: "It must be automated for future regression testing.",
        correct: false,
        translation: {
          vi: "Nó phải được tự động hóa cho kiểm thử hồi quy trong tương lai.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is the main objective of a **Formal Review** (e.g., Inspection)?",
    translation: {
      vi: "Điều nào sau đây là mục tiêu chính của một **Rà soát Chính thức (Formal Review - ví dụ: Inspection)**?",
    },
    answers: [
      {
        text: "To confirm that the test environment is correctly configured.",
        correct: false,
        translation: {
          vi: "Để xác nhận rằng môi trường kiểm thử được cấu hình chính xác.",
        },
      },
      {
        text: "To efficiently find defects and deviations in the work product and ensure quality.",
        correct: true,
        translation: {
          vi: "Để tìm lỗi và sự sai lệch trong sản phẩm làm việc một cách hiệu quả và đảm bảo chất lượng.",
        },
      },
      {
        text: "To execute the code and check for logical errors.",
        correct: false,
        translation: {
          vi: "Để thực thi mã code và kiểm tra các lỗi logic.",
        },
      },
      {
        text: "To decide when the project should be released to the market.",
        correct: false,
        translation: {
          vi: "Để quyết định khi nào dự án nên được phát hành ra thị trường.",
        },
      },
    ],
  },
];
