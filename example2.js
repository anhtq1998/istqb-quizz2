export const questions = [
  {
    question:
      "When what is visible to end-users is a deviation from the specific or expected behavior, this is called:",
    translation: {
      vi: "Khi những gì người dùng cuối nhìn thấy là sự sai lệch so với hành vi cụ thể hoặc mong đợi, điều này được gọi là:",
    },
    answers: [
      {
        text: "an error",
        correct: false,
        translation: { vi: "một lỗi (error)" },
      },
      {
        text: "a fault",
        correct: false,
        translation: { vi: "một khiếm khuyết (fault)" },
      },
      {
        text: "a failure",
        correct: true,
        translation: { vi: "một lỗi (failure)" },
      },
      {
        text: "a defect",
        correct: false,
        translation: { vi: "một khiếm khuyết (defect)" },
      },
      {
        text: "a mistake",
        correct: false,
        translation: { vi: "một sai lầm (mistake)" },
      },
    ],
  },
  {
    question: "Regression testing should be performed:",
    translation: {
      vi: "Kiểm thử hồi quy nên được thực hiện:",
    },
    answers: [
      {
        text: "v) every week",
        correct: false,
        translation: { vi: "v) mỗi tuần" },
      },
      {
        text: "w) after the software has changed",
        correct: true,
        translation: { vi: "w) sau khi phần mềm đã thay đổi" },
      },
      {
        text: "x) as often as possible",
        correct: false,
        translation: { vi: "x) thường xuyên nhất có thể" },
      },
      {
        text: "y) when the environment has changed",
        correct: true,
        translation: { vi: "y) khi môi trường đã thay đổi" },
      },
      {
        text: "z) when the project manager says",
        correct: false,
        translation: { vi: "z) khi người quản lý dự án yêu cầu" },
      },
      {
        text: "a) v & w are true, x – z are false",
        correct: false,
        translation: { vi: "a) v & w đúng, x – z sai" },
      },
      {
        text: "b) w, x & y are true, v & z are false",
        correct: false,
        translation: { vi: "b) w, x & y đúng, v & z sai" },
      },
      {
        text: "c) w & y are true, v, x & z are false",
        correct: true,
        translation: { vi: "c) w & y đúng, v, x & z sai" },
      },
      {
        text: "d) w is true, v, x y and z are false",
        correct: false,
        translation: { vi: "d) w đúng, v, x y và z sai" },
      },
      {
        text: "e) all of the above are true",
        correct: false,
        translation: { vi: "e) tất cả những điều trên đều đúng" },
      },
    ],
  },
  {
    question:
      "IEEE 829 test plan documentation standard contains all of the following except:",
    translation: {
      vi: "Tiêu chuẩn tài liệu kế hoạch kiểm thử IEEE 829 chứa tất cả những điều sau đây ngoại trừ:",
    },
    answers: [
      {
        text: "a) test items",
        correct: false,
        translation: { vi: "a) các mục kiểm thử" },
      },
      {
        text: "b) test deliverables",
        correct: false,
        translation: { vi: "b) các sản phẩm bàn giao kiểm thử" },
      },
      {
        text: "c) test tasks",
        correct: false,
        translation: { vi: "c) các nhiệm vụ kiểm thử" },
      },
      {
        text: "d) test environment",
        correct: false,
        translation: { vi: "d) môi trường kiểm thử" },
      },
      {
        text: "e) test specification",
        correct: true,
        translation: { vi: "e) đặc tả kiểm thử" },
      },
    ],
  },
  {
    question: "Testing should be stopped when:",
    translation: {
      vi: "Kiểm thử nên dừng lại khi:",
    },
    answers: [
      {
        text: "a) all the planned tests have been run",
        correct: false,
        translation: { vi: "a) tất cả các kiểm thử đã được chạy" },
      },
      {
        text: "b) time has run out",
        correct: false,
        translation: { vi: "b) hết thời gian" },
      },
      {
        text: "c) all faults have been fixed correctly",
        correct: false,
        translation: { vi: "c) tất cả các lỗi đã được sửa đúng" },
      },
      {
        text: "d) both a) and c)",
        correct: false,
        translation: { vi: "d) cả a) và c)" },
      },
      {
        text: "e) it depends on the risks for the system being tested",
        correct: true,
        translation: {
          vi: "e) điều đó phụ thuộc vào rủi ro của hệ thống đang được kiểm thử",
        },
      },
    ],
  },
  {
    question:
      "Order numbers on a stock control system can range between 10000 and 99999 inclusive. Which of the following inputs might be a result of designing tests for only valid equivalence classes and valid boundaries:",
    translation: {
      vi: "Số đơn hàng trên hệ thống kiểm soát kho có thể nằm trong khoảng từ 10000 đến 99999 (bao gồm). Những đầu vào nào sau đây có thể là kết quả của việc thiết kế kiểm thử chỉ cho các lớp tương đương hợp lệ và các biên hợp lệ:",
    },
    answers: [
      {
        text: "a) 1000, 5000, 99999",
        correct: false,
        translation: { vi: "a) 1000, 5000, 99999" },
      },
      {
        text: "b) 9999, 50000, 100000",
        correct: false,
        translation: { vi: "b) 9999, 50000, 100000" },
      },
      {
        text: "c) 10000, 50000, 99999",
        correct: true,
        translation: { vi: "c) 10000, 50000, 99999" },
      },
      {
        text: "d) 10000, 99999",
        correct: false,
        translation: { vi: "d) 10000, 99999" },
      },
      {
        text: "e) 9999, 10000, 50000, 99999, 10000",
        correct: false,
        translation: { vi: "e) 9999, 10000, 50000, 99999, 10000" },
      },
    ],
  },
  {
    question:
      "Consider the following statements about early test design:\ni. early test design can prevent fault multiplication\nii. faults found during early test design are more expensive to fix\niii. early test design can find faults\niv. early test design can cause changes to the requirements\nv. early test design takes more effort",
    translation: {
      vi: "Xem xét các phát biểu sau về thiết kế kiểm thử sớm:\ni. thiết kế kiểm thử sớm có thể ngăn chặn sự nhân lên của lỗi\nii. các lỗi tìm thấy trong quá trình thiết kế kiểm thử sớm đắt hơn để sửa\niii. thiết kế kiểm thử sớm có thể tìm thấy lỗi\niv. thiết kế kiểm thử sớm có thể gây ra thay đổi yêu cầu\nv. thiết kế kiểm thử sớm tốn nhiều công sức hơn",
    },
    answers: [
      {
        text: "a) i, iii & iv are true. Ii & v are false",
        correct: true,
        translation: { vi: "a) i, iii & iv đúng. Ii & v sai" },
      },
      {
        text: "b) iii is true, I, ii, iv & v are false",
        correct: false,
        translation: { vi: "b) iii đúng, I, ii, iv & v sai" },
      },
      {
        text: "c) iii & iv are true. i, ii & v are false",
        correct: false,
        translation: { vi: "c) iii & iv đúng. i, ii & v sai" },
      },
      {
        text: "d) i, iii, iv & v are true, ii us false",
        correct: false,
        translation: { vi: "d) i, iii, iv & v đúng, ii sai" },
      },
      {
        text: "e) i & iii are true, ii, iv & v are false",
        correct: false,
        translation: { vi: "e) i & iii đúng, ii, iv & v sai" },
      },
    ],
  },
  {
    question: "Non-functional system testing includes:",
    translation: {
      vi: "Kiểm thử hệ thống phi chức năng bao gồm:",
    },
    answers: [
      {
        text: "a) testing to see where the system does not function properly",
        correct: false,
        translation: {
          vi: "a) kiểm thử để xem hệ thống không hoạt động đúng cách ở đâu",
        },
      },
      {
        text: "b) testing quality attributes of the system including performance and usability",
        correct: true,
        translation: {
          vi: "b) kiểm thử các thuộc tính chất lượng của hệ thống bao gồm hiệu suất và khả năng sử dụng",
        },
      },
      {
        text: "c) testing a system feature using only the software required for that action",
        correct: false,
        translation: {
          vi: "c) kiểm thử một tính năng hệ thống chỉ sử dụng phần mềm cần thiết cho hành động đó",
        },
      },
      {
        text: "d) testing a system feature using only the software required for that function",
        correct: false,
        translation: {
          vi: "d) kiểm thử một tính năng hệ thống chỉ sử dụng phần mềm cần thiết cho chức năng đó",
        },
      },
      {
        text: "e) testing for functions that should not exist",
        correct: false,
        translation: { vi: "e) kiểm thử các chức năng không nên tồn tại" },
      },
    ],
  },
  {
    question: "Which of the following is NOT part of configuration management:",
    translation: {
      vi: "Điều nào sau đây KHÔNG phải là một phần của quản lý cấu hình:",
    },
    answers: [
      {
        text: "a) status accounting of configuration items",
        correct: false,
        translation: { vi: "a) kế toán trạng thái của các mục cấu hình" },
      },
      {
        text: "b) auditing conformance to ISO9001",
        correct: true,
        translation: { vi: "b) kiểm toán sự tuân thủ ISO9001" },
      },
      {
        text: "c) identification of test versions",
        correct: false,
        translation: { vi: "c) nhận dạng các phiên bản kiểm thử" },
      },
      {
        text: "d) record of changes to documentation over time",
        correct: false,
        translation: { vi: "d) ghi lại các thay đổi tài liệu theo thời gian" },
      },
      {
        text: "e) controlled library access",
        correct: false,
        translation: { vi: "e) kiểm soát quyền truy cập thư viện" },
      },
    ],
  },
  {
    question:
      "Which of the following is the main purpose of the integration strategy for integration testing in the small?",
    translation: {
      vi: "Mục đích chính của chiến lược tích hợp cho kiểm thử tích hợp (trong phạm vi nhỏ) là gì?",
    },
    answers: [
      {
        text: "a) to ensure that all of the small modules are tested adequately",
        correct: false,
        translation: {
          vi: "a) để đảm bảo rằng tất cả các mô-đun nhỏ được kiểm thử đầy đủ",
        },
      },
      {
        text: "b) to ensure that the system interfaces to other systems and networks",
        correct: false,
        translation: {
          vi: "b) để đảm bảo rằng hệ thống giao tiếp với các hệ thống và mạng khác",
        },
      },
      {
        text: "c) to specify which modules to combine when and how many at once",
        correct: true,
        translation: {
          vi: "c) để chỉ rõ các mô-đun nào được kết hợp khi nào và bao nhiêu cùng một lúc",
        },
      },
      {
        text: "d) to ensure that the integration testing can be performed by a small team",
        correct: false,
        translation: {
          vi: "d) để đảm bảo rằng kiểm thử tích hợp có thể được thực hiện bởi một nhóm nhỏ",
        },
      },
      {
        text: "e) to specify how the software should be divided into modules",
        correct: false,
        translation: {
          vi: "e) để chỉ rõ phần mềm nên được chia thành các mô-đun như thế nào",
        },
      },
    ],
  },
  {
    question: "What is the purpose of test completion criteria in a test plan:",
    translation: {
      vi: "Mục đích của tiêu chí hoàn thành kiểm thử trong một kế hoạch kiểm thử là gì:",
    },
    answers: [
      {
        text: "a) to know when a specific test has finished its execution",
        correct: false,
        translation: {
          vi: "a) để biết khi nào một kiểm thử cụ thể đã hoàn thành việc thực thi",
        },
      },
      {
        text: "b) to ensure that the test case specification is complete",
        correct: false,
        translation: {
          vi: "b) để đảm bảo rằng đặc tả trường hợp kiểm thử là đầy đủ",
        },
      },
      {
        text: "c) to set the criteria used in generating test inputs",
        correct: false,
        translation: {
          vi: "c) để đặt các tiêu chí được sử dụng trong việc tạo đầu vào kiểm thử",
        },
      },
      {
        text: "d) to know when test planning is complete",
        correct: false,
        translation: {
          vi: "d) để biết khi nào việc lập kế hoạch kiểm thử hoàn thành",
        },
      },
      {
        text: "e) to plan when to stop testing",
        correct: true,
        translation: { vi: "e) để lập kế hoạch khi nào dừng kiểm thử" },
      },
    ],
  },
  {
    question:
      "Consider the following statements\ni. an incident may be closed without being fixed\nii. incidents may not be raised against documentation\niii. the final stage of incident tracking is fixing\niv. the incident record does not include information on test environments\nv. incidents should be raised when someone other than the author of the software performs the test",
    translation: {
      vi: "Xem xét các phát biểu sau\ni. một sự cố có thể được đóng mà không cần sửa chữa\nii. các sự cố không được ghi nhận đối với tài liệu\niii. giai đoạn cuối cùng của việc theo dõi sự cố là sửa chữa\niv. bản ghi sự cố không bao gồm thông tin về môi trường kiểm thử\nv. các sự cố nên được ghi nhận khi có người khác ngoài tác giả của phần mềm thực hiện kiểm thử",
    },
    answers: [
      {
        text: "a) ii and v are true, I, iii and iv are false",
        correct: false,
        translation: { vi: "a) ii và v đúng, I, iii và iv sai" },
      },
      {
        text: "b) i and v are true, ii, iii and iv are false",
        correct: true,
        translation: { vi: "b) i và v đúng, ii, iii và iv sai" },
      },
      {
        text: "c) i, iv and v are true, ii and iii are false",
        correct: false,
        translation: { vi: "c) i, iv và v đúng, ii và iii sai" },
      },
      {
        text: "d) i and ii are true, iii, iv and v are false",
        correct: false,
        translation: { vi: "d) i và ii đúng, iii, iv và v sai" },
      },
      {
        text: "e) i is true, ii, iii, iv and v are false",
        correct: false,
        translation: { vi: "e) i đúng, ii, iii, iv và v sai" },
      },
    ],
  },
  {
    question:
      "Given the following code, which is true about the minimum number of test cases required for full statement and branch coverage:\nRead P\nRead Q\nIF P+Q > 100 THEN\nPrint “Large”\nENDIF\nIf P > 50 THEN\nPrint “P Large”\nENDIF",
    translation: {
      vi: "Với đoạn mã sau, điều nào đúng về số lượng trường hợp kiểm thử tối thiểu cần thiết để đạt được độ bao phủ câu lệnh và nhánh đầy đủ:\nĐọc P\nĐọc Q\nNẾU P+Q > 100 THÌ\nIn “Lớn”\nKẾT THÚC NẾU\nNếu P > 50 THÌ\nIn “P Lớn”\nKẾT THÚC NẾU",
    },
    answers: [
      {
        text: "a) 1 test for statement coverage, 3 for branch coverage",
        correct: false,
        translation: {
          vi: "a) 1 kiểm thử cho độ bao phủ câu lệnh, 3 cho độ bao phủ nhánh",
        },
      },
      {
        text: "b) 1 test for statement coverage, 2 for branch coverage",
        correct: true,
        translation: {
          vi: "b) 1 kiểm thử cho độ bao phủ câu lệnh, 2 cho độ bao phủ nhánh",
        },
      },
      {
        text: "c) 1 test for statement coverage, 1 for branch coverage",
        correct: false,
        translation: {
          vi: "c) 1 kiểm thử cho độ bao phủ câu lệnh, 1 cho độ bao phủ nhánh",
        },
      },
      {
        text: "d) 2 tests for statement coverage, 3 for branch coverage",
        correct: false,
        translation: {
          vi: "d) 2 kiểm thử cho độ bao phủ câu lệnh, 3 cho độ bao phủ nhánh",
        },
      },
      {
        text: "e) 2 tests for statement coverage, 2 for branch coverage",
        correct: false,
        translation: {
          vi: "e) 2 kiểm thử cho độ bao phủ câu lệnh, 2 cho độ bao phủ nhánh",
        },
      },
    ],
  },
  {
    question:
      "Given the following:\nSwitch PC on\nStart “outlook”\nIF outlook appears THEN\nSend an email\nClose outlook",
    translation: {
      vi: "Cho đoạn mã sau:\nBật máy tính\nKhởi động “outlook”\nNẾU outlook xuất hiện THÌ\nGửi một email\nĐóng outlook",
    },
    answers: [
      {
        text: "a) 1 test for statement coverage, 1 for branch coverage",
        correct: false,
        translation: {
          vi: "a) 1 kiểm thử cho độ bao phủ câu lệnh, 1 cho độ bao phủ nhánh",
        },
      },
      {
        text: "b) 1 test for statement coverage, 2 for branch coverage",
        correct: true,
        translation: {
          vi: "b) 1 kiểm thử cho độ bao phủ câu lệnh, 2 cho độ bao phủ nhánh",
        },
      },
      {
        text: "c) 1 test for statement coverage. 3 for branch coverage",
        correct: false,
        translation: {
          vi: "c) 1 kiểm thử cho độ bao phủ câu lệnh. 3 cho độ bao phủ nhánh",
        },
      },
      {
        text: "d) 2 tests for statement coverage, 2 for branch coverage",
        correct: false,
        translation: {
          vi: "d) 2 kiểm thử cho độ bao phủ câu lệnh, 2 cho độ bao phủ nhánh",
        },
      },
      {
        text: "e) 2 tests for statement coverage, 3 for branch coverage",
        correct: false,
        translation: {
          vi: "e) 2 kiểm thử cho độ bao phủ câu lệnh, 3 cho độ bao phủ nhánh",
        },
      },
    ],
  },
  {
    question:
      "Given the following code, which is true:\nIF A > B THEN\nC = A – B\nELSE\nC = A + B\nENDIF\nRead D\nIF C = D Then\nPrint “Error”\nENDIF",
    translation: {
      vi: "Với đoạn mã sau, điều nào đúng:\nNẾU A > B THÌ\nC = A – B\nNGƯỢC LẠI\nC = A + B\nKẾT THÚC NẾU\nĐọc D\nNẾU C = D Thì\nIn “Lỗi”\nKẾT THÚC NẾU",
    },
    answers: [
      {
        text: "a) 1 test for statement coverage, 3 for branch coverage",
        correct: false,
        translation: {
          vi: "a) 1 kiểm thử cho độ bao phủ câu lệnh, 3 cho độ bao phủ nhánh",
        },
      },
      {
        text: "b) 2 tests for statement coverage, 2 for branch coverage",
        correct: true,
        translation: {
          vi: "b) 2 kiểm thử cho độ bao phủ câu lệnh, 2 cho độ bao phủ nhánh",
        },
      },
      {
        text: "c) 2 tests for statement coverage. 3 for branch coverage",
        correct: false,
        translation: {
          vi: "c) 2 kiểm thử cho độ bao phủ câu lệnh. 3 cho độ bao phủ nhánh",
        },
      },
      {
        text: "d) 3 tests for statement coverage, 3 for branch coverage",
        correct: false,
        translation: {
          vi: "d) 3 kiểm thử cho độ bao phủ câu lệnh, 3 cho độ bao phủ nhánh",
        },
      },
      {
        text: "e) 3 tests for statement coverage, 2 for branch coverage",
        correct: false,
        translation: {
          vi: "e) 3 kiểm thử cho độ bao phủ câu lệnh, 2 cho độ bao phủ nhánh",
        },
      },
    ],
  },
  {
    question:
      "Consider the following:\nPick up and read the newspaper\nLook at what is on television\nIf there is a program that you are interested in watching then switch the the television on and watch the program\nOtherwise\nContinue reading the newspaper\nIf there is a crossword in the newspaper then try and complete the crossword",
    translation: {
      vi: "Xem xét những điều sau:\nNhặt và đọc báo\nXem có gì trên tivi\nNếu có chương trình bạn quan tâm muốn xem thì bật tivi lên và xem chương trình đó\nNếu không\nTiếp tục đọc báo\nNếu có ô chữ trong báo thì thử hoàn thành ô chữ",
    },
    answers: [
      {
        text: "a) SC = 1 and DC = 1",
        correct: false,
        translation: { vi: "a) SC = 1 và DC = 1" },
      },
      {
        text: "b) SC = 1 and DC = 2",
        correct: false,
        translation: { vi: "b) SC = 1 và DC = 2" },
      },
      {
        text: "c) SC = 1 and DC = 3",
        correct: false,
        translation: { vi: "c) SC = 1 và DC = 3" },
      },
      {
        text: "d) SC = 2 and DC = 2",
        correct: false,
        translation: { vi: "d) SC = 2 và DC = 2" },
      },
      {
        text: "e) SC = 2 and DC = 3",
        correct: true,
        translation: { vi: "e) SC = 2 và DC = 3" },
      },
    ],
  },
  {
    question: "The place to start if you want a (new) test tool is:",
    translation: {
      vi: "Nơi bắt đầu nếu bạn muốn một công cụ kiểm thử (mới) là:",
    },
    answers: [
      {
        text: "a) Attend a tool exhibition",
        correct: false,
        translation: { vi: "a) Tham dự một triển lãm công cụ" },
      },
      {
        text: "b) Invite a vendor to give a demo",
        correct: false,
        translation: { vi: "b) Mời một nhà cung cấp trình diễn" },
      },
      {
        text: "c) Analyse your needs and requirements",
        correct: true,
        translation: { vi: "c) Phân tích nhu cầu và yêu cầu của bạn" },
      },
      {
        text: "d) Find out what your budget would be for the tool",
        correct: false,
        translation: {
          vi: "d) Tìm hiểu ngân sách của bạn cho công cụ đó là bao nhiêu",
        },
      },
      {
        text: "e) Search the internet",
        correct: false,
        translation: { vi: "e) Tìm kiếm trên internet" },
      },
    ],
  },
  {
    question:
      "When a new testing tool is purchased, it should be used first by:",
    translation: {
      vi: "Khi một công cụ kiểm thử mới được mua, nó nên được sử dụng trước tiên bởi:",
    },
    answers: [
      {
        text: "a) A small team to establish the best way to use the tool",
        correct: false,
        translation: {
          vi: "a) Một nhóm nhỏ để thiết lập cách tốt nhất để sử dụng công cụ",
        },
      },
      {
        text: "b) Everyone who may eventually have some use for the tool",
        correct: true,
        translation: {
          vi: "b) Tất cả mọi người có thể cuối cùng có một số công dụng cho công cụ",
        },
      },
      {
        text: "c) The independent testing team",
        correct: false,
        translation: { vi: "c) Nhóm kiểm thử độc lập" },
      },
      {
        text: "d) The managers to see what projects it should be used in",
        correct: false,
        translation: {
          vi: "d) Các nhà quản lý để xem nó nên được sử dụng trong dự án nào",
        },
      },
      {
        text: "e) The vendor contractor to write the initial scripts",
        correct: false,
        translation: {
          vi: "e) Nhà thầu cung cấp để viết các tập lệnh ban đầu",
        },
      },
    ],
  },
  {
    question: "What can static analysis NOT find?",
    translation: {
      vi: "Phân tích tĩnh KHÔNG thể tìm thấy điều gì?",
    },
    answers: [
      {
        text: "a) The use of a variable before it has been defined",
        correct: false,
        translation: {
          vi: "a) Việc sử dụng một biến trước khi nó được định nghĩa",
        },
      },
      {
        text: "b) Unreachable (“dead”) code",
        correct: false,
        translation: { vi: "b) Mã không thể truy cập (“mã chết”)" },
      },
      {
        text: "c) Whether the value stored in a variable is correct",
        correct: true,
        translation: {
          vi: "c) Liệu giá trị được lưu trữ trong một biến có đúng hay không",
        },
      },
      {
        text: "d) The re-definition of a variable before it has been used",
        correct: false,
        translation: {
          vi: "d) Việc định nghĩa lại một biến trước khi nó được sử dụng",
        },
      },
      {
        text: "e) Array bound violations",
        correct: false,
        translation: { vi: "e) Vi phạm giới hạn mảng" },
      },
    ],
  },
  {
    question: "Which of the following is NOT a black box technique:",
    translation: {
      vi: "Điều nào sau đây KHÔNG phải là kỹ thuật hộp đen:",
    },
    answers: [
      {
        text: "a) Equivalence partitioning",
        correct: false,
        translation: { vi: "a) Phân vùng tương đương" },
      },
      {
        text: "b) State transition testing",
        correct: false,
        translation: { vi: "b) Kiểm thử chuyển trạng thái" },
      },
      { text: "c) LCSAJ", correct: true, translation: { vi: "c) LCSAJ" } },
      {
        text: "d) Syntax testing",
        correct: false,
        translation: { vi: "d) Kiểm thử cú pháp" },
      },
      {
        text: "e) Boundary value analysis",
        correct: false,
        translation: { vi: "e) Phân tích giá trị biên" },
      },
    ],
  },
  {
    question: "Beta testing is:",
    translation: {
      vi: "Kiểm thử Beta là:",
    },
    answers: [
      {
        text: "a) Performed by customers at their own site",
        correct: true,
        translation: {
          vi: "a) Được thực hiện bởi khách hàng tại địa điểm của họ",
        },
      },
      {
        text: "b) Performed by customers at their software developer’s site",
        correct: false,
        translation: {
          vi: "b) Được thực hiện bởi khách hàng tại địa điểm của nhà phát triển phần mềm",
        },
      },
      {
        text: "c) Performed by an independent test team",
        correct: false,
        translation: { vi: "c) Được thực hiện bởi một nhóm kiểm thử độc lập" },
      },
      {
        text: "d) Useful to test bespoke software",
        correct: false,
        translation: {
          vi: "d) Hữu ích để kiểm thử phần mềm được thiết kế riêng",
        },
      },
      {
        text: "e) Performed as early as possible in the lifecycle",
        correct: false,
        translation: {
          vi: "e) Được thực hiện càng sớm càng tốt trong vòng đời",
        },
      },
    ],
  },
  {
    question:
      "Given the following types of tool, which tools would typically be used by developers and which by an independent test team:\ni. static analysis\nii. performance testing\niii. test management\niv. dynamic analysis\nv. test running\nvi. test data preparation",
    translation: {
      vi: "Với các loại công cụ sau, công cụ nào thường được các nhà phát triển sử dụng và công cụ nào được một nhóm kiểm thử độc lập sử dụng:\ni. phân tích tĩnh\nii. kiểm thử hiệu suất\niii. quản lý kiểm thử\niv. phân tích động\nv. chạy kiểm thử\nvi. chuẩn bị dữ liệu kiểm thử",
    },
    answers: [
      {
        text: "a) developers would typically use i, iv and vi; test team ii, iii and v",
        correct: false,
        translation: {
          vi: "a) nhà phát triển thường sử dụng i, iv và vi; nhóm kiểm thử ii, iii và v",
        },
      },
      {
        text: "b) developers would typically use i and iv; test team ii, iii, v and vi",
        correct: true,
        translation: {
          vi: "b) nhà phát triển thường sử dụng i và iv; nhóm kiểm thử ii, iii, v và vi",
        },
      },
      {
        text: "c) developers would typically use i, ii, iii and iv; test team v and vi",
        correct: false,
        translation: {
          vi: "c) nhà phát triển thường sử dụng i, ii, iii và iv; nhóm kiểm thử v và vi",
        },
      },
      {
        text: "d) developers would typically use ii, iv and vi; test team I, ii and v",
        correct: false,
        translation: {
          vi: "d) nhà phát triển thường sử dụng ii, iv và vi; nhóm kiểm thử I, ii và v",
        },
      },
      {
        text: "e) developers would typically use i, iii, iv and v; test team ii and vi",
        correct: false,
        translation: {
          vi: "e) nhà phát triển thường sử dụng i, iii, iv và v; nhóm kiểm thử ii và vi",
        },
      },
    ],
  },
  {
    question: "The main focus of acceptance testing is:",
    translation: {
      vi: "Trọng tâm chính của kiểm thử chấp nhận là:",
    },
    answers: [
      {
        text: "a) finding faults in the system",
        correct: false,
        translation: { vi: "a) tìm kiếm lỗi trong hệ thống" },
      },
      {
        text: "b) ensuring that the system is acceptable to all users",
        correct: false,
        translation: {
          vi: "b) đảm bảo rằng hệ thống được chấp nhận bởi tất cả người dùng",
        },
      },
      {
        text: "c) testing the system with other systems",
        correct: false,
        translation: { vi: "c) kiểm thử hệ thống với các hệ thống khác" },
      },
      {
        text: "d) testing for a business perspective",
        correct: true,
        translation: { vi: "d) kiểm thử từ góc độ kinh doanh" },
      },
      {
        text: "e) testing by an independent test team",
        correct: false,
        translation: { vi: "e) kiểm thử bởi một nhóm kiểm thử độc lập" },
      },
    ],
  },
  {
    question:
      "Which of the following statements about the component testing standard is false:",
    translation: {
      vi: "Phát biểu nào sau đây về tiêu chuẩn kiểm thử thành phần là sai:",
    },
    answers: [
      {
        text: "a) black box design techniques all have an associated measurement technique",
        correct: true,
        translation: {
          vi: "a) tất cả các kỹ thuật thiết kế hộp đen đều có kỹ thuật đo lường liên quan",
        },
      },
      {
        text: "b) white box design techniques all have an associated measurement technique",
        correct: false,
        translation: {
          vi: "b) tất cả các kỹ thuật thiết kế hộp trắng đều có kỹ thuật đo lường liên quan",
        },
      },
      {
        text: "c) cyclomatic complexity is not a test measurement technique",
        correct: false,
        translation: {
          vi: "c) độ phức tạp cyclomatic không phải là kỹ thuật đo lường kiểm thử",
        },
      },
      {
        text: "d) black box measurement techniques all have an associated test design technique",
        correct: false,
        translation: {
          vi: "d) tất cả các kỹ thuật đo lường hộp đen đều có kỹ thuật thiết kế kiểm thử liên quan",
        },
      },
      {
        text: "e) white box measurement techniques all have an associated test design technique",
        correct: false,
        translation: {
          vi: "e) tất cả các kỹ thuật đo lường hộp trắng đều có kỹ thuật thiết kế kiểm thử liên quan",
        },
      },
    ],
  },
  {
    question: "Which of the following statements is NOT true:",
    translation: {
      vi: "Phát biểu nào sau đây KHÔNG đúng:",
    },
    answers: [
      {
        text: "a) inspection is the most formal review process",
        correct: false,
        translation: { vi: "a) kiểm tra là quy trình xem xét chính thức nhất" },
      },
      {
        text: "b) inspections should be led by a trained leader",
        correct: false,
        translation: {
          vi: "b) việc kiểm tra nên được dẫn dắt bởi một trưởng nhóm được đào tạo",
        },
      },
      {
        text: "c) managers can perform inspections on management documents",
        correct: false,
        translation: {
          vi: "c) quản lý có thể thực hiện kiểm tra các tài liệu quản lý",
        },
      },
      {
        text: "d) inspection is appropriate even when there are no written documents",
        correct: true,
        translation: {
          vi: "d) kiểm tra phù hợp ngay cả khi không có tài liệu viết",
        },
      },
      {
        text: "e) inspection compares documents with predecessor (source) documents",
        correct: false,
        translation: {
          vi: "e) kiểm tra so sánh các tài liệu với các tài liệu tiền nhiệm (nguồn)",
        },
      },
    ],
  },
  {
    question:
      "A typical commercial test execution tool would be able to perform all of the following EXCEPT:",
    translation: {
      vi: "Một công cụ thực thi kiểm thử thương mại điển hình có thể thực hiện tất cả những điều sau đây NGOẠI TRỪ:",
    },
    answers: [
      {
        text: "a) generating expected outputs",
        correct: true,
        translation: { vi: "a) tạo đầu ra mong đợi" },
      },
      {
        text: "b) replaying inputs according to a programmed script",
        correct: false,
        translation: {
          vi: "b) phát lại đầu vào theo một tập lệnh đã được lập trình",
        },
      },
      {
        text: "c) comparison of expected outcomes with actual outcomes",
        correct: false,
        translation: { vi: "c) so sánh kết quả mong đợi với kết quả thực tế" },
      },
      {
        text: "d) recording test inputs",
        correct: false,
        translation: { vi: "d) ghi lại đầu vào kiểm thử" },
      },
      {
        text: "e) reading test values from a data file",
        correct: false,
        translation: { vi: "e) đọc các giá trị kiểm thử từ một tệp dữ liệu" },
      },
    ],
  },
  {
    question: "The difference between re-testing and regression testing is",
    translation: {
      vi: "Sự khác biệt giữa kiểm thử lại (re-testing) và kiểm thử hồi quy (regression testing) là",
    },
    answers: [
      {
        text: "a) re-testing is running a test again; regression testing looks for unexpected side effects",
        correct: true,
        translation: {
          vi: "a) kiểm thử lại là chạy lại một kiểm thử; kiểm thử hồi quy tìm kiếm các tác dụng phụ không mong muốn",
        },
      },
      {
        text: "b) re-testing looks for unexpected side effects; regression testing is repeating those tests",
        correct: false,
        translation: {
          vi: "b) kiểm thử lại tìm kiếm các tác dụng phụ không mong muốn; kiểm thử hồi quy là lặp lại các kiểm thử đó",
        },
      },
      {
        text: "c) re-testing is done after faults are fixed; regression testing is done earlier",
        correct: false,
        translation: {
          vi: "c) kiểm thử lại được thực hiện sau khi lỗi được sửa; kiểm thử hồi quy được thực hiện sớm hơn",
        },
      },
      {
        text: "d) re-testing uses different environments, regression testing uses the same environment",
        correct: false,
        translation: {
          vi: "d) kiểm thử lại sử dụng các môi trường khác nhau, kiểm thử hồi quy sử dụng cùng một môi trường",
        },
      },
      {
        text: "e) re-testing is done by developers, regression testing is done by independent testers",
        correct: false,
        translation: {
          vi: "e) kiểm thử lại được thực hiện bởi nhà phát triển, kiểm thử hồi quy được thực hiện bởi các kiểm thử viên độc lập",
        },
      },
    ],
  },
  {
    question: "Expected results are:",
    translation: {
      vi: "Kết quả mong đợi là:",
    },
    answers: [
      {
        text: "a) only important in system testing",
        correct: false,
        translation: { vi: "a) chỉ quan trọng trong kiểm thử hệ thống" },
      },
      {
        text: "b) only used in component testing",
        correct: false,
        translation: { vi: "b) chỉ được sử dụng trong kiểm thử thành phần" },
      },
      {
        text: "c) never specified in advance",
        correct: false,
        translation: { vi: "c) không bao giờ được chỉ định trước" },
      },
      {
        text: "d) most useful when specified in advance",
        correct: true,
        translation: { vi: "d) hữu ích nhất khi được chỉ định trước" },
      },
      {
        text: "e) derived from the code",
        correct: false,
        translation: { vi: "e) bắt nguồn từ mã" },
      },
    ],
  },
  {
    question: "Test managers should not:",
    translation: {
      vi: "Quản lý kiểm thử không nên:",
    },
    answers: [
      {
        text: "a) report on deviations from the project plan",
        correct: false,
        translation: { vi: "a) báo cáo về các sai lệch so với kế hoạch dự án" },
      },
      {
        text: "b) sign the system off for release",
        correct: false,
        translation: { vi: "b) ký duyệt hệ thống để phát hành" },
      },
      {
        text: "c) re-allocate resource to meet original plans",
        correct: true,
        translation: {
          vi: "c) phân bổ lại nguồn lực để đáp ứng kế hoạch ban đầu",
        },
      },
      {
        text: "d) raise incidents on faults that they have found",
        correct: false,
        translation: { vi: "d) ghi nhận các sự cố về lỗi mà họ đã tìm thấy" },
      },
    ],
  },
  {
    question: "Unreachable code would best be found using:",
    translation: {
      vi: "Mã không thể truy cập sẽ được tìm thấy tốt nhất bằng cách sử dụng:",
    },
    answers: [
      {
        text: "a) code reviews",
        correct: false,
        translation: { vi: "a) xem xét mã" },
      },
      {
        text: "b) code inspections",
        correct: false,
        translation: { vi: "b) kiểm tra mã" },
      },
      {
        text: "c) a coverage tool",
        correct: false,
        translation: { vi: "c) một công cụ đo độ bao phủ" },
      },
      {
        text: "d) a test management tool",
        correct: false,
        translation: { vi: "d) một công cụ quản lý kiểm thử" },
      },
      {
        text: "e) a static analysis tool",
        correct: true,
        translation: { vi: "e) một công cụ phân tích tĩnh" },
      },
    ],
  },
  {
    question:
      "A tool that supports traceability, recording of incidents or scheduling of tests is called:",
    translation: {
      vi: "Một công cụ hỗ trợ truy xuất nguồn gốc, ghi lại các sự cố hoặc lập lịch kiểm thử được gọi là:",
    },
    answers: [
      {
        text: "a) a dynamic analysis tool",
        correct: false,
        translation: { vi: "a) một công cụ phân tích động" },
      },
      {
        text: "b) a test execution tool",
        correct: false,
        translation: { vi: "b) một công cụ thực thi kiểm thử" },
      },
      {
        text: "c) a debugging tool",
        correct: false,
        translation: { vi: "c) một công cụ gỡ lỗi" },
      },
      {
        text: "d) a test management tool",
        correct: true,
        translation: { vi: "d) một công cụ quản lý kiểm thử" },
      },
      {
        text: "e) a configuration management tool",
        correct: false,
        translation: { vi: "e) một công cụ quản lý cấu hình" },
      },
    ],
  },
  {
    question:
      "What information need not be included in a test incident report:",
    translation: {
      vi: "Thông tin nào không cần phải có trong báo cáo sự cố kiểm thử:",
    },
    answers: [
      {
        text: "a) how to fix the fault",
        correct: true,
        translation: { vi: "a) cách sửa lỗi" },
      },
      {
        text: "b) how to reproduce the fault",
        correct: false,
        translation: { vi: "b) cách tái hiện lỗi" },
      },
      {
        text: "c) test environment details",
        correct: false,
        translation: { vi: "c) chi tiết môi trường kiểm thử" },
      },
      {
        text: "d) severity, priority",
        correct: false,
        translation: { vi: "d) mức độ nghiêm trọng, ưu tiên" },
      },
      {
        text: "e) the actual and expected outcomes",
        correct: false,
        translation: { vi: "e) kết quả thực tế và mong đợi" },
      },
    ],
  },
  {
    question:
      "Which expression best matches the following characteristics or review processes:1. led by author\n2. undocumented\n3. no management participation\n4. led by a trained moderator or leader\n5. uses entry exit criteria\ns) inspection\nt) peer review\nu) informal review\nv) walkthrough",
    translation: {
      vi: "Biểu thức nào phù hợp nhất với các đặc điểm hoặc quy trình xem xét sau:1. do tác giả dẫn dắt\n2. không có tài liệu\n3. không có sự tham gia của quản lý\n4. do người điều hành hoặc trưởng nhóm được đào tạo dẫn dắt\n5. sử dụng tiêu chí vào ra\ns) kiểm tra (inspection)\nt) đánh giá ngang hàng (peer review)\nu) xem xét không chính thức (informal review)\nv) duyệt mã (walkthrough)",
    },
    answers: [
      {
        text: "a) s = 4, t = 3, u = 2 and 5, v = 1",
        correct: false,
        translation: { vi: "a) s = 4, t = 3, u = 2 và 5, v = 1" },
      },
      {
        text: "b) s = 4 and 5, t = 3, u = 2, v = 1",
        correct: true,
        translation: { vi: "b) s = 4 và 5, t = 3, u = 2, v = 1" },
      },
      {
        text: "c) s = 1 and 5, t = 3, u = 2, v = 4",
        correct: false,
        translation: { vi: "c) s = 1 và 5, t = 3, u = 2, v = 4" },
      },
      {
        text: "d) s = 5, t = 4, u = 3, v = 1 and 2",
        correct: false,
        translation: { vi: "d) s = 5, t = 4, u = 3, v = 1 và 2" },
      },
      {
        text: "e) s = 4 and 5, t = 1, u = 2, v = 3",
        correct: false,
        translation: { vi: "e) s = 4 và 5, t = 1, u = 2, v = 3" },
      },
    ],
  },
  {
    question: "Which of the following is NOT part of system testing:",
    translation: {
      vi: "Điều nào sau đây KHÔNG phải là một phần của kiểm thử hệ thống:",
    },
    answers: [
      {
        text: "a) business process-based testing",
        correct: false,
        translation: { vi: "a) kiểm thử dựa trên quy trình kinh doanh" },
      },
      {
        text: "b) performance, load and stress testing",
        correct: false,
        translation: { vi: "b) kiểm thử hiệu suất, tải và căng thẳng" },
      },
      {
        text: "c) requirements-based testing",
        correct: false,
        translation: { vi: "c) kiểm thử dựa trên yêu cầu" },
      },
      {
        text: "d) usability testing",
        correct: false,
        translation: { vi: "d) kiểm thử khả năng sử dụng" },
      },
      {
        text: "e) top-down integration testing",
        correct: true,
        translation: { vi: "e) kiểm thử tích hợp từ trên xuống" },
      },
    ],
  },
  {
    question: "What statement about expected outcomes is FALSE:",
    translation: {
      vi: "Phát biểu nào về kết quả mong đợi là SAI:",
    },
    answers: [
      {
        text: "a) expected outcomes are defined by the software’s behaviour",
        correct: true,
        translation: {
          vi: "a) kết quả mong đợi được định nghĩa bởi hành vi của phần mềm",
        },
      },
      {
        text: "b) expected outcomes are derived from a specification, not from the code",
        correct: false,
        translation: {
          vi: "b) kết quả mong đợi được lấy từ một đặc tả, không phải từ mã",
        },
      },
      {
        text: "c) expected outcomes include outputs to a screen and changes to files and databases",
        correct: false,
        translation: {
          vi: "c) kết quả mong đợi bao gồm đầu ra lên màn hình và các thay đổi đối với tệp và cơ sở dữ liệu",
        },
      },
      {
        text: "d) expected outcomes should be predicted before a test is run",
        correct: false,
        translation: {
          vi: "d) kết quả mong đợi nên được dự đoán trước khi chạy kiểm thử",
        },
      },
      {
        text: "e) expected outcomes may include timing constraints such as response times",
        correct: false,
        translation: {
          vi: "e) kết quả mong đợi có thể bao gồm các ràng buộc về thời gian như thời gian phản hồi",
        },
      },
    ],
  },
  {
    question: "The standard that gives definitions of testing terms is:",
    translation: {
      vi: "Tiêu chuẩn đưa ra định nghĩa các thuật ngữ kiểm thử là:",
    },
    answers: [
      {
        text: "a) ISO/IEC 12207",
        correct: false,
        translation: { vi: "a) ISO/IEC 12207" },
      },
      {
        text: "b) BS7925-1",
        correct: true,
        translation: { vi: "b) BS7925-1" },
      },
      {
        text: "c) BS7925-2",
        correct: false,
        translation: { vi: "c) BS7925-2" },
      },
      {
        text: "d) ANSI/IEEE 829",
        correct: false,
        translation: { vi: "d) ANSI/IEEE 829" },
      },
      {
        text: "e) ANSI/IEEE 729",
        correct: false,
        translation: { vi: "e) ANSI/IEEE 729" },
      },
    ],
  },
  {
    question: "The cost of fixing a fault:",
    translation: {
      vi: "Chi phí sửa một lỗi:",
    },
    answers: [
      {
        text: "a) Is not important",
        correct: false,
        translation: { vi: "a) Không quan trọng" },
      },
      {
        text: "b) Increases as we move the product towards live use",
        correct: true,
        translation: {
          vi: "b) Tăng lên khi chúng ta đưa sản phẩm đến gần việc sử dụng thực tế",
        },
      },
      {
        text: "c) Decreases as we move the product towards live use",
        correct: false,
        translation: {
          vi: "c) Giảm xuống khi chúng ta đưa sản phẩm đến gần việc sử dụng thực tế",
        },
      },
      {
        text: "d) Is more expensive if found in requirements than functional design",
        correct: false,
        translation: {
          vi: "d) Đắt hơn nếu tìm thấy trong yêu cầu hơn là thiết kế chức năng",
        },
      },
      {
        text: "e) Can never be determined",
        correct: false,
        translation: { vi: "e) Không bao giờ có thể xác định được" },
      },
    ],
  },
  {
    question:
      "Which of the following is NOT included in the Test Plan document of the Test Documentation Standard:",
    translation: {
      vi: "Điều nào sau đây KHÔNG được bao gồm trong tài liệu Kế hoạch kiểm thử của Tiêu chuẩn tài liệu kiểm thử:",
    },
    answers: [
      {
        text: "a) Test items (i.e. software versions)",
        correct: false,
        translation: {
          vi: "a) Các mục kiểm thử (tức là các phiên bản phần mềm)",
        },
      },
      {
        text: "b) What is not to be tested",
        correct: false,
        translation: { vi: "b) Những gì không được kiểm thử" },
      },
      {
        text: "c) Test environments",
        correct: false,
        translation: { vi: "c) Môi trường kiểm thử" },
      },
      {
        text: "d) Quality plans",
        correct: true,
        translation: { vi: "d) Các kế hoạch chất lượng" },
      },
      {
        text: "e) Schedules and deadlines",
        correct: false,
        translation: { vi: "e) Lịch trình và thời hạn" },
      },
    ],
  },
  {
    question: "Could reviews or inspections be considered part of testing:",
    translation: {
      vi: "Các xem xét hoặc kiểm tra có thể được coi là một phần của kiểm thử không:",
    },
    answers: [
      {
        text: "a) No, because they apply to development documentation",
        correct: false,
        translation: {
          vi: "a) Không, vì chúng áp dụng cho tài liệu phát triển",
        },
      },
      {
        text: "b) No, because they are normally applied before testing",
        correct: false,
        translation: {
          vi: "b) Không, vì chúng thường được áp dụng trước khi kiểm thử",
        },
      },
      {
        text: "c) No, because they do not apply to the test documentation",
        correct: false,
        translation: {
          vi: "c) Không, vì chúng không áp dụng cho tài liệu kiểm thử",
        },
      },
      {
        text: "d) Yes, because both help detect faults and improve quality",
        correct: true,
        translation: {
          vi: "d) Có, vì cả hai đều giúp phát hiện lỗi và cải thiện chất lượng",
        },
      },
      {
        text: "e) Yes, because testing includes all non-constructive activities",
        correct: false,
        translation: {
          vi: "e) Có, vì kiểm thử bao gồm tất cả các hoạt động không mang tính xây dựng",
        },
      },
    ],
  },
  {
    question: "Which of the following is not part of performance testing:",
    translation: {
      vi: "Điều nào sau đây không phải là một phần của kiểm thử hiệu suất:",
    },
    answers: [
      {
        text: "a) Measuring response time",
        correct: false,
        translation: { vi: "a) Đo thời gian phản hồi" },
      },
      {
        text: "b) Measuring transaction rates",
        correct: false,
        translation: { vi: "b) Đo tỷ lệ giao dịch" },
      },
      {
        text: "c) Recovery testing",
        correct: true,
        translation: { vi: "c) Kiểm thử phục hồi" },
      },
      {
        text: "d) Simulating many users",
        correct: false,
        translation: { vi: "d) Mô phỏng nhiều người dùng" },
      },
      {
        text: "e) Generating many transactions",
        correct: false,
        translation: { vi: "e) Tạo ra nhiều giao dịch" },
      },
    ],
  },
  {
    question: "Error guessing is best used",
    translation: {
      vi: "Đoán lỗi (Error guessing) được sử dụng tốt nhất:",
    },
    answers: [
      {
        text: "a) As the first approach to deriving test cases",
        correct: false,
        translation: {
          vi: "a) Là cách tiếp cận đầu tiên để tạo ra các trường hợp kiểm thử",
        },
      },
      {
        text: "b) After more formal techniques have been applied",
        correct: true,
        translation: {
          vi: "b) Sau khi các kỹ thuật chính thức hơn đã được áp dụng",
        },
      },
      {
        text: "c) By inexperienced testers",
        correct: false,
        translation: { vi: "c) Bởi những người kiểm thử thiếu kinh nghiệm" },
      },
      {
        text: "d) After the system has gone live",
        correct: false,
        translation: { vi: "d) Sau khi hệ thống đã đi vào hoạt động" },
      },
      {
        text: "e) Only by end users",
        correct: false,
        translation: { vi: "e) Chỉ bởi người dùng cuối" },
      },
    ],
  },
];
