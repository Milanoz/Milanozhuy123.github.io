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
  {
    question: 'Hãy xác định đặc điểm đúng với hệ điều hành đa nhiệm:',
    answers: [
      { text: 'Quản lý tiến trình phân tán', correct: false },
      { text: 'Quản lý tiến trình theo chia sẻ thời gian', correct: true },
      { text: 'Quản lý tiến trình theo thời gian thực ', correct: false },
      { text: 'Quản lý tiến trình theo lô', correct: false }
    ]
  },


  {
    question: 'Việc áp dụng nguyên tắc tương đối trong định vị khi xây dựng hệ điều hành cần phải',
    answers: [
      {text: 'Sử dụng bộ nhớ hiệu quả hơn', correct: true},
      {text: 'Dễ dàng bảo vệ chương trình và dữ liệu.', correct: false},
      {text: 'Tồn tại cơ chế liên kết các Modul độc lập', correct: false},
      {text: 'Cho phép người dùn chọn giải pháp tối ưu với bài toán của mình', correct: false }

    ]
  },

  {
    question: 'Kỹ thuật nào ra đời do một công việc duy nhất không thể duy trì trạng thái bận của cả CPU và các thiết bị vào ra',
    answers: [
      {text: 'Lập lịch', correct: false},
      {text: 'SPOOLIing', correct: false},
      {text: 'Multiprogramming', correct: true},
      {text: 'Chia sẻ thời gian (time-sharing)',correct: false}
    ]
  },

  {
    question: 'Khi có nhiều tiến trình muốn sử dụng tài nguyên găng thì',
    answers: [
      {text: 'Không có tiến trình chiếm dụng tài nguyên ', correct: true},
      {text: 'Mô phỏng tài nguyên, và phân phối tài nguyên mô phỏng cho tiến trình', correct: false},
      {text: 'Sử dụng 1 byte trong bộ nhớ chung làm khóa cho tài nguyên', correct: false},
      {text: 'Phân phối tài nguyên cho tất cả các tiến trình', correct: false}
    ]
  },

  {
    question: 'Hãy chọn phát biểu nào sai: Trong điều độ tiến trình, Hề điều hành cần đảm bảo',
    answers: [
      {text: 'Xác định thời gian liên tục hợp lý để gắn Processor logic cho Processor vật lý ', correct: true},
      {text: 'Mỗi tiến trình cần được gắn một thứ tự ưu tiên', correct: false},
      {text: 'Mọi tiến trình phải được phục vụ bình đẳng như nhau', correct: false},
      {text: 'Tất cả đều sai', correct: false}

    ]
  },

  {
    question: 'Hành động nào Hệ điều hành sẽ thực thi một tiến trình mới sinh ra',
    answers: [
      {text: 'Phân phối ngay các tài nguyên mà tiến trình yêu cầu', correct:false},
      {text: 'Phân phối CPU ngay cho tiến trình', correct:false},
      {text: 'Đưa tiến trình vào trạng thái thực hiện', correct:false},
      {text: 'Tạo ngay khối mô tả tiến trình (PCB) để quản lý ', correct:true}

    ]
  },

  {
    question: 'Trong công cụ điều độ cấp cao, chương trình thư ký',
    answers: [
      {text: 'Được gắn với duy nhất một tiến trình', correct: true},
      {text: 'Dùng để điều độ tiến trình ', correct: false},
      {text: 'Được gắn với tất cả tiến trình', correct: false},
      {text: 'Dùng để quản lý tài nguyên', correct: false}
    ]
  },

  {
    question: 'Một tiến trình ở trạng thái khoá do',
    answers: [
      {text: 'Đang chờ một sự kiện nào đó chưa xảy ra', correct: false},
      {text: 'Không có chế độ phân phối lại tài nguyên', correct: false},
      {text: 'Đang chờ nhập xuất', correct: false},
      {text: 'Tất cả đều đúng ', correct: true}
    ]
  },

  {
    question: 'Khi điều độ tiến trình, đối với phương pháp khóa trong, các tiến trình',
    answers: [
      {text: 'Sử dụng 1 Byte trong vùng nhớ chung làm khóa toàn cục', correct: false},
      {text: 'Sử dụng 1 byte trong vùng nhớ riêng làm khóa', correct: false},
      {text: 'Sử dụng 1 Byte trong vùng nhớ riêng làm khóa toàn cục', correct: false},
      {text: 'Sử dụng 1 byte trong vùng nhớ chung làm khóa ', correct: true}
    ]
  },


  {
  question: 'Khối mô tả tiến trình là vùng nhớ lưu trữ các thông tin về',
  answers: [      
    {text: 'Vùng bộ nhớ chứa dữ liệu của chương trình đang thực hiên', correct: false},
    {text: 'Vùng bộ nhớ chứa chương trình đang thực hiện', correct: false},
    {text: 'Vùng bộ nhớ chứa thông tin trao đổi giữa các tiến trình', correct: false},
    {text: 'Vùng bộ nhớ chứa giá trị của các thanh ghi mà tiến trình đang sử dụng ', correct: true}
    ]
  },

  {
  question: 'Một tiến trình là',
  answers: [    
    {text: 'Bất kỳ cái gì mà ngăn chặn bế tắc (deadlock)', correct: false},
    {text: 'Một chương trình tương tranh', correct: false},
    {text: 'Bất kỳ một chương trình tuần tự nào', correct: false},
    {text: 'Một chương trình đang thực hiện ', correct: true}
    ]
  },

  {
    question: 'Trong sơ đồ chuyển trạng thái tiến trình, việc chuyển trạng thái từ trạng thái READY sang trạng thái RUNNING chỉ ra rằng',
    answers: [
    {text: 'Một tiến trình bị phong tỏa bởi một semaphore hoặc bởi các thao tác khác', correct: true},
    {text: 'Một tiến trình được hoàn thành việc chờ một thao tác vào/ra ', correct: false},
    {text: 'Một tiến trình được ưu tiên bởi một tiến trình khác', correct: false},
    {text: 'Một tiến trình vừa được tạo ra', correct: false}
    ]
  },

  {
    question: 'Tình huống trong đó tiến trình 1 chờ tiến trình 2, tiến trình 2 chờ tiến trình 3 hoàn tất,.., tiến trình (n-1) chờ tiến trình n, tiến trình n chờ tiến trình 1, tạo thành một vòng khép kín gọi là',
    answers: [
    {text: 'Ngủ (dormant)', correct: false},
    {text: 'Tất cả các phương án trên', correct: false},
    {text: 'Chết đói (starvation)', correct: false},
    {text: 'Bế tắc (deadlock) ', correct: true}
    ]
  },

  {
    question: 'Trong cấu trúc phân đoạn của quản lý bộ nhớ logic',
    answers: [
    {text: 'Hiệu quả phụ thuộc vào cấu trúc ban đầu của chương trình nguồn ', correct: true},
    {text: 'Có tính lưu động cao', correct: false},
    {text: 'Thời gian thực hiện lớn (vừa thực hiện, vừa định vị)', correct: false},
    {text: 'Đẩy hệ số tích trữ bộ nhớ lên cao', correct: false}
    ]
  },

  {
    question: 'Trong chế độ phân chương tĩnh của quản lý bộ nhớ vật lý',
    answers: [
    {text: 'Hệ thống điều khiển không bị sao chép đi nơi khác ', correct: false},
    {text: 'Số chương trình thực hiện có thể thay đổi', correct: false},
    {text: 'Cho phép dùng chung các modul trong bộ nhớ', correct: false},
    {text: 'Tồn tại công cụ bên trong bộ nhớ để có thể phân chia lại hệ thống', correct: true}
    ]
  },
  
  {
    question: 'Trong kỹ thuật phân trang, khi bộ nhớ thực đầy thì HĐH sẽ',
    answers: [
    {text: 'Tiến hành nạp lại các trang', correct: false},
    {text: 'Thực hiện chiến lược thay thế trang ', correct: true},
    {text: 'Loại bỏ các trang không cần thiết', correct: false},
    {text: 'Loại bỏ các trang bị lỗi', correct: false}
    ]
  },

  {
    question: 'Trong chế độ phân trang của quản lý bộ nhớ vật lý',
    answers: [
    {text: 'Hạn chế việc thiếu bộ nhớ', correct: true},
    {text: 'Hiệu quả phụ thuộc vào cấu trúc ban đầu của chương trình nguồn ', correct: false},
    {text: 'Xuất hiện hiện tượng phân đoạn ngoài', correct: false},
    {text: 'Nếu có sự cố kỹ thuật thì chương trình sẽ bị phá hủy', correct: false}
    ]
  },

  {
    question: 'Trong chế độ phân chương tĩnh của quản lý bộ nhớ vật lý',
    answers: [
    {text: 'Đơn giản, dễ bảo vệ', correct: true},
    {text: 'Hệ thống điều khiển không bị sao chép đi nơi khác', correct: false},
    {text: 'Tồn tại một danh sách quản lý bộ nhớ tự do chung', correct: false},
    {text: 'Không có hiện tượng phân đoạn ngoài', correct: false}
    ]
  },

  {
    question: 'Trong quản lý bộ nhớ, kỹ thuật phân trang chia bộ nhớ vật lý thành các khối có kích thước không đổi được gọi là',
    answers: [
    {text: 'Các trang (pages)', correct: false},
    {text: 'Các Khối (blocks)', correct: false},
    {text: 'Các khung trang (frames)', correct: true},
    {text: 'Các đoạn (segments) ', correct: false}
    ]
  },

  {
    question: 'Để một chương trình thực có thể hiện được, nó phải',
    answers: [
    {text: 'Cần phải được dịch sang mã máy', correct: false},
    {text: 'Được nạp và định vị trong bộ nhớ bất kỳ', correct: false},
    {text: 'Được phân phối đầy đủ tài nguyên yêu cầu và được quyền sử dụng Processor', correct: true},
    {text: 'Tất cả đều đúng', correct: false}
    ]
  },

  {
    question: 'Trong quản lý bộ nhớ vật lý theo kỹ thuật phân đoạn, cách khắc phục hiện tượng phân mảnh bộ nhớ là',
    answers: [
    {text: 'Tuỳ thuộc vào tình trạng cụ thể của bộ nhớ', correct: true},
    {text: 'Loại bớt các chương trình không cần thiết', correct: false},
    {text: 'Chuyển một số modul của các chương trình ra bộ nhớ ngoài', correct: false},
    {text: 'Thực hiện dịch chuyển vị trí các chương trình về phía cuối bộ nhớ ', correct: false}
    ]
  },

  {
    question: 'Phát biểu nào dưới đây không phải ưu điểm của kỹ thuật phân trang là',
    answers: [
    {text: 'Không lãng phí toàn bộ trang dữ liệu, các trang có kích thước cố định', correct: false},
    {text: 'Không cần tìm vùng nhớ RAM liên tục', correct: false},
    {text: 'Kích thước lưu trữ lớn, tốc độ truy nhập bộ nhớ chậm', correct: true},
    {text: 'Cấu trúc danh sách để quản lý các trang chưa sử dụng đơn giản, không cần cơ chế làm liền mảnh bộ nhớ', correct: false}
    ]
  },

  {
    question: 'Trong chế độ phân chương động của quản lý bộ nhớ vật lý',
    answers: [
    {text: 'Áp dụng được trên máy bất kỳ', correct: false},
    {text: 'Xuất hiện hiện tượng phân đoạn ngoài', correct: true},
    {text: 'Có sự hỗ trợ của phần cứng', correct: false},
    {text: 'Cho phép dùng chung các modul trong bộ nhớ ', correct: false}
    ]
  },

  {
    question: 'Trong kĩ thuật quản lý bộ nhớ theo phân chương động:',
    answers: [
      {text: 'Bộ nhớ là một vùng nhớ trống bên ngoài bộ nhớ được cấp cho HĐH', correct: false},
      {text: 'Bộ nhớ chia thành các phân vùng với kích thước phù hợp với yêu cầu của tiến trình', correct: true},
      {text: 'Bộ nhớ chia thành các phân vùng có kích thước cố định', correct: false},
      {text: 'Bộ nhớ chia thành các phân vùng có kích thước bằng nhau ', correct: false}
      ]
    },

  {
    question: 'Với một hệ thống đa chương trình thì bộ nhớ sẽ chứa nhứng gì?',
    answers: [
      {text: 'Bộ nhớ là một vùng nhớ trống bên ngoài bộ nhớ được cấp cho HĐH', correct: false},
      {text: 'Hệ điều hành và nhiều tiến trình', correct: true},
      {text: 'Bộ nhớ chia thành các phân vùng có kích thước cố định', correct: false},
      {text: 'Trong khi các chương trình ứng dụng được kích hoạt ', correct: false}
    ]
  },
  {
    question: 'Trong kĩ thuật quản lí bộ nhớ theo phân chương động',
    answers: [
      {text: 'Bộ nhớ vật lí có cấu trúc phân trang', correct: false},
      {text: 'Sử dụng danh sách quản lí bộ nhớ tự do riêng', correct: false},
      {text: 'Sử dụng danh sách quản lí bộ nhớ tự do chung', correct: true},
      {text: 'Bộ nhớ vật lý được áp dụng theo cơ chế hoàn chuyển Swapking ', correct: false}
    ]
  },
  {
    question: 'Hệ điều hành quản lí bộ nhớ chính gồm những gì',
    answers: [
      {text: 'A.	Cấp phát và thu hồi bộ nhớ', correct: false},
      {text: 'B.	Ghi nhận trạng thái của bộ nhớ chính', correct: false},
      {text: 'C.	Quyết định tiến trình nào được nạp vào bộ nhớ và bảo mật bộ nhớ', correct: false},
      {text: 'D.	Tất cả đều đúng ', correct: true}
    ]
  },
  {
    question: 'Khối mô tả tiến trình là vùng nhớ các thông tin về',
    answers: [
      {text: 'A.	Vùng bộ nhớ chứa chương trình đang thực hiện', correct: false},
      {text: 'B.	Vùng bộ nhớ trao đổi thông tin giữa các tiến trình', correct: false},
      {text: 'C.	Vùng bộ nhớ chứa dữ liệu của chương trình đang thực hiện', correct: false},
      {text: 'D.	Vùng bộ nhớ chứa giá trị của các thanh ghi mà tiến trình đang sử dụng ', correct: true}
      ]
  },   
  {
    question: ' Hành động nào của HĐH sẽ thực thi khi một tiến trình mới khi sinh ra',
    answers: [
      {text: 'A.	Phân phối CPU ngay trên tiến trình', correct: false},
      {text: 'B.	Tạo ngay khối mô tả tiến trình để quản lí', correct: true},
      {text: 'C.	Phân phối ngay tài nguyên mà tiến trình yêu cầu', correct: false},
      {text: 'D.	Đưa tiến trình về trạng thái thực hiện ', correct: false}
      ]
  },
  {
    question: ' Độ ưu tiên của các tiến trình cho biết điều gì?',
    answers: [
      {text: 'A.	Tiến trình sử dụng CPU nhiều hay ít', correct: false},
      {text: 'B.	Tiến trình có quan trọng hay không', correct: true},
      {text: 'C.	Tiến trình chiếm dụng tài nguyên nhiều hay ít', correct: false},
      {text: 'D.	Thời gian thực hiện tiến trình lâu hay ít ', correct: false}
    ]
  },
  {
    question: ' Các công cụ điều độ quản lí tiến trình của HĐH thực hiện chức năng:',
    answers: [
      {text: 'A.	Tạo lập để hủy bỏ tiến trình, tạm dừng và tái kích hoạt tiến trình', correct: false},
      {text: 'B.	Tạo cơ chế thông tin liên lạc giữa các tiến trình', correct: false},
      {text: 'C.	Tạo cơ chế đồng bộ hóa giữa các tiến trình', correct: false},
      {text: 'D.	Tất cả đ.án đều đúng ', correct: true}
    ]
  },  
  {
  question: ' Nguyên tắc Hệ điều hành có quan hệ với ngôn ngữ nào?',
  answers: [
      {text: 'A.	Ngôn ngữ giao tiếp, ngôn ngữ thực hiện, ngôn ngữ máy', correct: false},
      {text: 'B.	ngôn ngữ máy, ngôn ngữ thực hiện, ngôn ngữ thuật toán', correct: false},
      {text: 'C.	ngôn ngữ thuật toán, ngôn ngữ vận hành, ngôn ngữ thực hiện', correct: true},
      {text: 'D.	ngôn ngữ thực hiện, ngôn ngữ vận hành, ngôn ngữ máy', correct: false}
    ]
  },
  {
  question: ' Để đảm bảo tính chất thuận tiện HĐH cần:',
  answers: [
      {text: 'A.	Kế thừa public trước', correct: false},
      {text: 'B.	Có nhiều mức hiệu quả tùy thuộc vào kinh nghiệm, kiến thức người dùng', correct: true},
      {text: 'C.	Đảm bảo chương trình, dữ liệu không bị xóa theo ý muốn', correct: false},
      {text: 'D.	Thích nghi với sự thay đổi có trong tương lai', correct: false}
    ]
  },
  {
  question: ' : Đảm bảo tính chất tin cậy, HĐH cần: ',
  answers: [
      {text: 'A.	Tiến trình được bảo vệ theo nhiều mức không dùng hệ thống', correct: false},
      {text: 'B.	Đảm bảo sự đồng bộ trong toàn hệ thống', correct: false},
      {text: 'C.	Mọi công việc có thể thực hiện được trên nhiều phương tiện khác nhau', correct: false},
      {text: 'D.	Mọi công việc có thể được kiểm tra và đánh giá', correct: true}
    ]
  },
  {
  question: ' : Nhiệm vụ chính của HĐH ',
  answers: [
      {text: 'A.	Tiến trình được bảo vệ theo nhiều mức không dùng hệ thống', correct: false},
      {text: 'B.	Đảm bảo sự đồng bộ trong toàn hệ thống', correct: false},
      {text: 'C.	Mọi công việc có thể thực hiện được trên nhiều phương tiện khác nhau', correct: false},
      {text: 'D.	Quản lí tài nguyên', correct: true}
    ]
   },
   {
  question: ' Trong hệ điều hành Windows tên tệp có độ dài tối đa là',
  answers: [
      {text: 'A.	  11 ki tự', correct: false},
      {text: 'B.	  255 kí tự', correct: true},
      {text: 'C.	  256 kí tự', correct: false},
      {text: 'D.	  8 kí tự', correct: false}
    ]
   },  
   {
  question: '	Trong chế độ phân chương tĩnh của quản lý bộ nhớ vật lý',
  answers: [
      {text: 'A.	   Không có hiện tượng phân đoạn ngoài', correct: false},
      {text: 'B.	   Tồn tại một danh sách quản lý bộ nhớ tự do chung', correct: false},
      {text: 'C.	   Hệ thống điều khiển không bị sao chép đi nơi khác', correct: false},
      {text: 'D.	   Đơn giản, dễ bảo vệ', correct: true}
    ]
   },  
   {
  question: '	Để một chương trình có thể thực hiện được, nó phải',
  answers: [
      {text: 'A.	Cần phải được dịch sang mã máy', correct: false},
      {text: 'B.	 Tất cả đều đúng', correct: false},
      {text: 'C.	 Được nạp và định vị trong bộ nhớ bất kỳ', correct: false},
      {text: 'D.	 Được phân phối đầy đủ tài nguyên yêu cầu và được quyền sử dụng Processor', correct: true}
    ]
   }, 
   {
  question: '	Trong cấu trúc phân đoạn của quản lý bộ nhớ logic',
  answers: [
      {text: 'A.	   Cần có sự hỗ trợ của phần cứng', correct: false},
      {text: 'B.	   Người dùng phải dùng các lệnh macro để nạp, định vị các modul của chương trình', correct: false},
      {text: 'C.	   Hiệu quả tăng dần theo kích thước bộ nhớ', correct: true},
      {text: 'D.	   Hạn chế một số cách gọi chương trình con', correct: false}
    ]
   },  
   {
  question: 'Trong quản lý bộ nhớ vật lý theo kỹ thuật phân trang, cách khắc phục hiện tượng thiêu bộ nhớ là',
  answers: [
      {text: 'A.	   Chuyển một số trang của các chương trình ra bộ nhớ ngoài', correct: false},
      {text: 'B.	   Tuỳ thuộc vào tình trạng cụ thể của bộ nhớ', correct: false},
      {text: 'C.	   Thực hiện thay thế các trang', correct: true},
      {text: 'D.	   Loại bớt các chương trình không cần thiết', correct: false}
    ]
   },  
   {
  question: 'Việc phân bổ không gian nhớ cho một tiến trình dùng phương pháp phân đoạn sử dụng thanh ghi cơ sở và thanh ghi giới hạn, biết tiến trình được phân bổ vùng nhớ 4 đoạn: mã lệnh, dữ liệu, ngăn xếp, và vùng nhớ heap, số các thanh ghi cần dùng là:',
  answers: [
      {text: 'A.	4', correct: false},
      {text: 'B.	2', correct: false},
      {text: 'C.	 8', correct: true},
      {text: 'D.	 16', correct: false}
    ]
   },  
   {
  question: '	Khi một tiến trình đang thực hiện yêu cầu một tài nguyên, nhưng chưa được đáp ứng do tài nguyên chưa được sẵn sàng, tiến trình này sẽ chuyển về trạng thái',
  answers: [
      {text: 'A.	    Kết thúc', correct: false},
      {text: 'B.	    Khởi tạo', correct: false},
      {text: 'C.	    Khóa ( Ngắt )', correct: true},
      {text: 'D.	    sẵn sàng', correct: false}
    ]
   },  
   {
  question: 'Phát biểu nào sau đây là không đúng',
  answers: [
      {text: 'A.	Tiến trình là một quá trình đang được thực hiện 1 chương trình trong hệ thống máy tính', correct: false},
      {text: 'B.	Các tiến trình độc lập không có quan hệ gì trực tiếp với nhau', correct: false},
      {text: 'C.	Tiến trình là chương trình đang được thực hiện ở trong hệ thống máy tính', correct: true},
      {text: 'D.	Tiến trình được hình thành khi có yêu cầu và kết thúc khi công việc được hoàn tất', correct: false}
    ]
   },  
   {
  question: '	Các công cụ điều độ, quản lý tiến trình của hệ điều hành thực hiện chức năng:',
  answers: [
      {text: 'A.	  Tạo lập, hủy bỏ tiến trình, tạm dừng, tái kích hoạt tiến trình', correct: false},
      {text: 'B.	   Tất cả đều đúng', correct: true},
      {text: 'C.	   Tạo cơ chế đồng bộ hóa giữa các tiến trình', correct: false},
      {text: 'D.	  Tạo cơ chế thông tin liên lạc giữa các tiến trình', correct: false}
    ]
   },
   {
  question: 'Khi xác định có tiến trình nằm trong trang thái tắc nghẽn, Hệ điều hành phải	',
  answers: [
      {text: 'A.	   Kiểm tra việc phân phối tài nguyên', correct: false},
      {text: 'B.	   Yêu cầu người dung xử lý', correct: false},
      {text: 'C.	    Mô phỏng tài nguyên và tiếp tục cấp phát tài nguyên cho tiến tình', correct: false},
      {text: 'D.	    Khóa tiến trình và thu hồi tài nguyên', correct: true}
           ]
   },  
   {
  question: 'Hệ điều hành của một máy tính đóng vai trò như một giao tiếp phần mềm giữa người sử dụng và:	',
  answers: [
      {text: 'A.	Phần cứng', correct: true},
      {text: 'B.	Màn hình', correct: false},
      {text: 'C.	Thiết bị ngoại vi', correct: false},
      {text: 'D.	Bộ nhớ', correct: false}
           ]
   },
   {
  question: 'Cơ chế phòng đệm cho phép	',
  answers: [
      {text: 'A.	Thực hiện trước các phép nhập liệu', correct: false},
      {text: 'B.	Giảm số lần truy cập vật lý', correct: false},
      {text: 'C.	Tất cả đều đúng', correct: true},
      {text: 'D.	Dùng một số vùng nhớ chung làm phòng đệ', correct: false}
           ]
   }, 
]
