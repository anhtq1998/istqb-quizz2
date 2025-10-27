// KHAI BÁO BIẾN TOÀN CỤC CHỨA BỘ CÂU HỎI ĐÃ CHỌN
let selectedQuestions = [];

// Lấy tham chiếu đến các phần tử HTML MỚI (Dùng cho chức năng chọn Example)
const exampleSelectionElement = document.getElementById("example-selection");
const exampleSelect = document.getElementById("example-select");
const loadExampleBtn = document.getElementById("load-example-btn");

// Lấy tham chiếu đến các phần tử HTML ĐÃ CÓ (Dùng cho Quiz)
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const translateButton = document.getElementById("translate-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const translatedAnswersElement = document.getElementById("translated-answers");
const translatedQuestionElement = document.getElementById(
  "translated-question"
);
const answerButtonsElement = document.getElementById("answer-buttons");
const confirmButton = document.getElementById("confirm-btn");
const logoContainer = document.querySelector(".logo-container");

let availableQuestions, usedQuestions;
let currentQuestionIndex;
let score = 0;
let totalQuestions = 0;
let incorrectQuestions = [];

// Gắn sự kiện cho nút tải example VÀ CÁC NÚT KHÁC
loadExampleBtn.addEventListener("click", loadSelectedExample);
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
confirmButton.addEventListener("click", confirmAnswer); // Đổi tên hàm để dễ quản lý
translateButton.addEventListener("click", toggleTranslation);

// =================================================================
// 🚀 CHỨC NĂNG TẢI EXAMPLE ĐỘNG
// =================================================================

function loadSelectedExample() {
  const selectedValue = exampleSelect.value;

  if (selectedValue === "") {
    alert("Vui lòng chọn một bộ câu hỏi trước!");
    return;
  }

  if (selectedValue === "retry_incorrect") {
    const incorrectData = localStorage.getItem("lastIncorrectQuestions");

    if (incorrectData) {
      try {
        selectedQuestions = JSON.parse(incorrectData);
        if (selectedQuestions.length === 0) {
          alert("Không có câu hỏi sai nào được lưu trữ!");
          return;
        }
        console.log(
          `Đã tải thành công ${selectedQuestions.length} câu hỏi sai từ localStorage.`
        );
      } catch (e) {
        console.error("Lỗi khi parse dữ liệu từ localStorage:", e);
        alert("Lỗi: Dữ liệu câu hỏi sai bị hỏng.");
        return;
      }
    } else {
      alert(
        "Bạn chưa có câu hỏi nào trả lời sai được lưu lại. Vui lòng làm quiz trước!"
      );
      return;
    }

    // Sau khi tải thành công từ localStorage, chuyển sang hiển thị nút Start
    exampleSelectionElement.classList.add("hide");
    const logo = document.querySelector(".logo-container");
    if (logo) logo.classList.add("hide");
    startButton.classList.remove("hide");
    startButton.innerText = `Bắt đầu (${selectedQuestions.length} câu sai)`;
    alert(`Sẵn sàng làm lại ${selectedQuestions.length} câu hỏi sai.`);
    return;
  }

  // Dynamic Import: Nạp file JS tương ứng với giá trị đã chọn (ví dụ: ./example1.js)
  import(`./${selectedValue}.js`)
    .then((module) => {
      // Lưu trữ mảng câu hỏi đã nạp vào biến toàn cục
      selectedQuestions = module.questions;
      console.log(
        `Đã tải thành công ${selectedQuestions.length} câu hỏi từ ${selectedValue}.js`
      );

      // Ẩn phần chọn example và hiện nút Start
      exampleSelectionElement.classList.add("hide");
      document.querySelector(".logo-container").classList.add("hide");
      startButton.classList.remove("hide");
      startButton.innerText = "Em sẵn sàng";
      alert("Tải bộ câu hỏi thành công! Nhấn Sẵn sàng để làm bài.");
    })
    .catch((error) => {
      console.error("Lỗi khi tải bộ câu hỏi:", error);
      alert(
        "Lỗi: Không thể tải bộ câu hỏi đã chọn. Vui lòng kiểm tra console."
      );
      startButton.classList.add("hide");
    });
}

// =================================================================
// 🎮 CHỨC NĂNG QUIZ CORE
// =================================================================

// Hàm bắt đầu trò chơi (Đã sửa để dùng selectedQuestions)
function startGame() {
  // 1. KIỂM TRA TRẠNG THÁI "QUAY VỀ TRANG CHỦ"
  if (startButton.innerText.includes("Trang chủ")) {
    // Thiết lập lại trạng thái ban đầu
    clearStatusClass(document.body);
    // Ẩn tất cả các nút điều khiển quiz
    nextButton.classList.add("hide");
    translateButton.classList.add("hide");
    confirmButton.classList.add("hide");
    startButton.classList.add("hide");
    questionContainerElement.classList.add("hide");

    // Xóa hộp kết quả cũ nếu có (Quan trọng!)
    const resultBox = questionContainerElement.querySelector(".result-box");
    if (resultBox) {
      questionContainerElement.removeChild(resultBox);
    }

    // Hiện lại phần Logo và chọn Example
    const logo = document.querySelector(".logo-container");
    if (logo) logo.classList.remove("hide");
    exampleSelectionElement.classList.remove("hide");

    // Reset nội dung nút Start về giá trị ban đầu (trước khi Tải Example)
    startButton.innerText = "Start";

    // Xóa bộ câu hỏi đã chọn để buộc người dùng chọn lại
    selectedQuestions = [];
    exampleSelect.value = ""; // Đặt lại dropdown

    return; // Dừng hàm, đã quay về trang chủ
  }

  if (selectedQuestions.length === 0) {
    alert(
      "Chưa có bộ câu hỏi nào được tải. Vui lòng chọn và tải bộ câu hỏi trước!"
    );
    exampleSelectionElement.classList.remove("hide");
    document.querySelector(".logo-container").classList.remove("hide");
    startButton.classList.add("hide");
    return;
  }

  startButton.classList.add("hide");
  // Hiển thị lại phần câu hỏi và câu trả lời
  questionElement.classList.remove("hide");
  answerButtonsElement.classList.remove("hide");

  // Initialize question pools and score
  availableQuestions = [...selectedQuestions]; // TẠO COPY TỪ BỘ CÂU HỎI ĐÃ NẠP
  usedQuestions = [];
  currentQuestionIndex = 0;
  score = 0;
  totalQuestions = 0;
  incorrectQuestions = [];
  questionContainerElement.classList.remove("hide");
  translateButton.classList.remove("hide");
  // Xóa hộp kết quả cũ nếu có
  const resultBox = questionContainerElement.querySelector(".result-box");
  if (resultBox) {
    questionContainerElement.removeChild(resultBox);
  }

  setNextQuestion();
}

// Hàm thiết lập câu hỏi tiếp theo
function setNextQuestion() {
  resetState();

  // If we've used all questions, shuffle used questions back into available pool
  if (availableQuestions.length === 0) {
    availableQuestions = [...usedQuestions];
    usedQuestions = [];
    if (availableQuestions.length === 0) {
      // Kết thúc bài thi nếu không còn câu hỏi nào để hỏi lại
      endQuiz();
      return;
    }
  }

  // Get random question from available pool
  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  const nextQuestion = availableQuestions[randomIndex];

  // Move question from available to used pool
  availableQuestions.splice(randomIndex, 1);
  usedQuestions.push(nextQuestion);

  showQuestion(nextQuestion);
}

// Hàm hiển thị câu hỏi và các lựa chọn trả lời
function showQuestion(question) {
  questionElement.innerText = question.question;

  // Ẩn bản dịch ban đầu
  translatedQuestionElement.classList.add("hide");
  translatedAnswersElement.classList.add("hide");

  // Determine if question has multiple correct answers
  const multiCorrect = question.answers.filter((a) => a.correct).length > 1;

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    const option = String.fromCharCode(97 + index);
    button.innerText = `${option}. ${answer.text}`;
    button.classList.add("btn");

    if (answer.correct) button.dataset.correct = answer.correct;

    button.addEventListener("click", (e) =>
      toggleSelectAnswer(e, multiCorrect)
    );
    answerButtonsElement.appendChild(button);
  });

  // Ẩn confirm cho đến khi có lựa chọn
  confirmButton.classList.add("hide");
  nextButton.classList.add("hide"); // Ẩn nút Next cho đến khi Confirmed
}

// Hàm đặt lại trạng thái ứng dụng
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  confirmButton.classList.add("hide");

  // ẨN CẢ BẢN DỊCH CÂU HỎI VÀ CÂU TRẢ LỜI
  translatedQuestionElement.classList.add("hide");
  translatedQuestionElement.innerText = "";
  translatedAnswersElement.classList.add("hide");
  translatedAnswersElement.innerText = "";

  // Xóa tất cả các nút trả lời cũ
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

// Hàm xử lý khi người dùng chọn/bỏ chọn câu trả lời
function toggleSelectAnswer(e, multiCorrect) {
  const button = e.target;

  if (!multiCorrect) {
    // Deselect other buttons
    Array.from(answerButtonsElement.children).forEach((b) => {
      if (b !== button) b.classList.remove("selected");
    });
    button.classList.toggle("selected");
  } else {
    // Multiple corrects: just toggle this button
    button.classList.toggle("selected");
  }

  // Show confirm button if any selected
  const anySelected = Array.from(answerButtonsElement.children).some((b) =>
    b.classList.contains("selected")
  );
  if (anySelected) confirmButton.classList.remove("hide");
  else confirmButton.classList.add("hide");
}

// Hàm đánh giá câu trả lời khi người dùng click Confirm
function confirmAnswer() {
  totalQuestions++;

  // Vô hiệu hóa các nút
  Array.from(answerButtonsElement.children).forEach((b) => {
    b.disabled = true;
    b.setAttribute("aria-disabled", "true");
    b.tabIndex = -1;
  });

  // Logic đánh giá
  const buttons = Array.from(answerButtonsElement.children);
  const correctButtons = buttons.filter(
    (b) => b.dataset.correct === "true" || b.dataset.correct === true
  );
  const selectedButtons = buttons.filter((b) =>
    b.classList.contains("selected")
  );

  const selectedIsExactlyCorrect =
    selectedButtons.length === correctButtons.length &&
    selectedButtons.every(
      (b) => b.dataset.correct === "true" || b.dataset.correct === true
    );

  // Tăng điểm và hiển thị trạng thái
  if (selectedIsExactlyCorrect) {
    score++;
  } else {
    // <== THÊM LOGIC NÀY KHI TRẢ LỜI SAI
    const currentQuestion = usedQuestions[usedQuestions.length - 1];
    if (currentQuestion) {
      incorrectQuestions.push(currentQuestion);
    }
  }
  setStatusClass(document.body, selectedIsExactlyCorrect);

  // Hiển thị dấu tích cho các đáp án đúng
  buttons.forEach((btn) => {
    const isCorrect =
      btn.dataset.correct === "true" || btn.dataset.correct === true;
    if (isCorrect) {
      btn.classList.add("correct");
    } else if (btn.classList.contains("selected")) {
      btn.classList.add("wrong");
    }
  });

  // Ẩn confirm và hiển thị next/restart
  confirmButton.classList.add("hide");
  if (availableQuestions.length > 0) {
    nextButton.classList.remove("hide");
  } else {
    // nextButton.classList.remove("hide");
    setTimeout(() => {
      endQuiz();
    }, 3000);
  }
}

// Hàm đặt lớp CSS trạng thái (đúng/sai)
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

// Hàm xóa các lớp CSS trạng thái
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

// =================================================================
// 🌐 CHỨC NĂNG DỊCH VÀ KẾT THÚC
// =================================================================

// Hàm bật/tắt bản dịch
function toggleTranslation() {
  // Get current question from usedQuestions array
  const currentQuestion = usedQuestions[usedQuestions.length - 1];

  if (
    !currentQuestion ||
    !currentQuestion.translation ||
    !currentQuestion.translation.vi
  ) {
    translatedQuestionElement.innerText = "Không có bản dịch cho câu hỏi này.";
    translatedQuestionElement.classList.remove("hide");
    translatedAnswersElement.classList.add("hide");
    translatedAnswersElement.innerText = "";
    return;
  }

  // Nếu bản dịch đang ẩn (cả câu hỏi và câu trả lời)
  if (translatedQuestionElement.classList.contains("hide")) {
    // HIỂN THỊ BẢN DỊCH CÂU HỎI
    translatedQuestionElement.innerText = `(Câu hỏi dịch): ${currentQuestion.translation.vi}`;
    translatedQuestionElement.classList.remove("hide");

    // HIỂN THỊ BẢN DỊCH CÁC CÂU TRẢ LỜI
    const translatedAnswers = currentQuestion.answers.map((answer, index) => {
      const option = String.fromCharCode(97 + index);
      const translatedText =
        answer.translation && answer.translation.vi
          ? answer.translation.vi
          : answer.text; // Dùng text gốc nếu không có dịch
      return `${option}. ${translatedText}`;
    });

    translatedAnswersElement.innerHTML = `(Đáp án dịch):<br>${translatedAnswers.join(
      "<br>"
    )}`;
    translatedAnswersElement.classList.remove("hide");
  } else {
    // Nếu bản dịch đang hiển thị, ẨN CẢ CÂU HỎI VÀ CÂU TRẢ LỜI
    translatedQuestionElement.classList.add("hide");
    translatedQuestionElement.innerText = "";
    translatedAnswersElement.classList.add("hide");
    translatedAnswersElement.innerText = "";
  }
}

// Hàm kết thúc bài thi và hiển thị kết quả
function endQuiz() {
  // Ẩn các phần tử Quiz
  questionElement.classList.add("hide");
  answerButtonsElement.classList.add("hide");
  translatedQuestionElement.classList.add("hide");
  translatedAnswersElement.classList.add("hide");
  nextButton.classList.add("hide");
  translateButton.classList.add("hide");

  // Tính và hiển thị kết quả
  const finalScore = Math.round((score / totalQuestions) * 100);
  const resultMessage = `
   🎯 Kết quả bài thi của bạn:
   ✅ Số câu đúng: ${score}/${totalQuestions}
   📊 Tỷ lệ đúng: ${finalScore}%
   ${
     finalScore >= 70
       ? "🎉 Chúc mừng! Bạn đã vượt qua bài thi!"
       : "💪 Cố gắng hơn vào lần sau nhé!"
   }
  `;

  try {
    if (incorrectQuestions.length > 0) {
      // Chuyển mảng object thành chuỗi JSON và lưu trữ
      localStorage.setItem(
        "lastIncorrectQuestions",
        JSON.stringify(incorrectQuestions)
      );
      console.log(
        `Đã lưu ${incorrectQuestions.length} câu hỏi sai vào localStorage.`
      );
    } else {
      // Xóa khóa nếu không có câu hỏi sai
      localStorage.removeItem("lastIncorrectQuestions");
      console.log("Không có câu hỏi sai để lưu.");
    }
  } catch (e) {
    console.error("Lỗi khi lưu vào localStorage", e);
  }

  // Tạo và hiển thị hộp kết quả
  const resultBox = document.createElement("div");
  resultBox.classList.add("result-box"); // Thêm class để dễ xóa
  resultBox.style.cssText = `
   background-color: #f8f9fa;
   padding: 20px;
   border-radius: 10px;
   margin-top: 20px;
   box-shadow: 0 2px 5px rgba(0,0,0,0.1);
   white-space: pre-line;
   text-align: center;
   font-size: 1.2em;
  `;
  resultBox.textContent = resultMessage;

  questionContainerElement.appendChild(resultBox);

  // Thay đổi nút Start thành Trang chủ và hiện lại
  startButton.innerText = "Trang chủ";
  startButton.classList.remove("hide");
}
// Mảng chứa các câu hỏi và câu trả lời đã bao gồm bản dịch
