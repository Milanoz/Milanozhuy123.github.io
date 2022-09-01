const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Nhiệm vụ chính của một hệ điều hành của máy tính là',
    answers: [
      { text: 'Ra lệnh cho các tài nguyên', correct: false },
      { text: 'Cung cấp các tiện ích', correct: false },
      { text: 'Quản lý tài nguyên ', correct: true},
      { text: 'Màn hình', correct: false}
    ]
  },
  {
    question: 'Hệ điều hành là hệ thống chương trình phần mềm',
    answers: [
      { text: 'Quản lý bộ nhớ và thiết bị ngoại vi', correct: false },
      { text: 'Quản lý các tài nguyên trên máy tính ', correct: false },
      { text: 'Điều khiển thực hiện phần mềm', correct: true },
      { text: 'Hỗ trợ người dùng thực hiện một file bất kỳ', correct: false }
    ]
  },
  {
    question: 'Khi khởi động máy tính, hệ điều hành được nạp vào:',
    answers: [
      { text: 'Bộ nhớ chuyên dụng', correct: false },
      { text: 'Bộ nhớ ROM', correct: false },
      { text: 'Bộ nhớ ngoài', correct: false },
      { text: 'Bộ nhớ RAM ', correct: true }
    ]
  },
  {
    question: 'Chỉ ra phương án nào không phải là tầng của hệ điều hành',
    answers: [
      { text: 'Kernel ', correct: false },
      { text: 'Shell', correct: false },
      { text: 'Đoạn găng', correct: true },
      { text: 'Chương trình ứng dụng ', correct: false }
    ]
  },
  {
    question: 'Đâu là tên của phần mềm mà giải quyết vấn đề thực thi của máy tính thực sự chứ không phải các vấn đề máy tính',
    answers: [
      { text: 'Chương trình nguồn ', correct: false },
      { text: 'Chương trình hệ thống', correct: true },
      { text: 'Chương trình đối tượng', correct: false },
      { text: 'Hệ điều hành  ', correct: false }
    ]
  },
  {
    question: 'Trong phân loại, hệ điều hành được cài đặt trên hệ thống nhiều vi xử lý nhằm chia sẻ dữ liệu, đường truyền, các thiết bị ngoại vi… thuộc dạng:',
    answers: [
      { text: 'Hệ điều hành xử lý đa nhiệm', correct: false },
      { text: 'Hệ điều hành xử lý thời gian thực', correct: false },
      { text: 'Hệ điều hành xử lý đa chương', correct: false },
      { text: 'Hệ điều hành xử lý phân tán  ', correct: true }
    ]
  },
  {
    question: 'Đâu là thành phần giám sát (supervisor) các hoạt động của máy tính',
    answers: [
      { text: 'Hệ điều hành ', correct: true },
      { text: 'CPU', correct: false },
      { text: 'Đơn vị điều khiển', correct: false },
      { text: 'Chương trình ứng dụng', correct: false }
    ]
  },
]