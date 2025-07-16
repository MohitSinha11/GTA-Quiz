// console.log(localStorage.getItem('questionNumber'));
// console.log(localStorage.getItem('Score'));
// console.log(localStorage.getItem('quizType'));



const sanAndreasQuestions = [
  {
    question: "What is the full name of the main character in GTA San Andreas?",
    option: ["Carl Johnson", "CJ Walker", "Clarence James", "Carl Jameson"],
    answer: 0,
  },

  {
    question:
      "What is the name of CJ’s brother who leads the Grove Street Families?",
    option: ["Ryder", "Big Smoke", "Sweet", "Tenpenny"],
    answer: 2,
  },

  {
    question: "What is the name of the mission where Big Smoke betrays CJ??",
    option: [
      "End of the Line",
      "The Green Sabre",
      "Just Business",
      "Reuniting the Families",
    ],
    answer: 1,
  },

  {
    question: "What happens if you use the cheat “STATEOFEMERGENCY”?",
    option: [
      "It starts a tsunami",
      "All NPCs attack CJ",
      "Everyone disappears",
      "The whole city goes into riot mode",
    ],
    answer: 3,
  },

  {
    question:
      "What is the name of the rival gang constantly fighting Grove Street Families?",
    option: ["Los Santos Vagos", "San Fierro Rifa", "Ballas", "Da Nang Boys"],
    answer: 2,
  },
];



const gtaVQuestion = [
  {
    question:
      "Which character lives in Vinewood Hills with a dysfunctional family?",
    option: ["Franklin", "Trevor", "Lamar", "Michael"],
    answer: 3,
  },

  {
    question: "What does the cheat code “LIQUOR” do in GTA 5?",
    option: [
      "Makes character drunk instantly",
      "Infinite money",
      "Slows down time",
      "Spawns whiskey bottle",
    ],
    answer: 0,
  },

  {
    question:
      "Which character is known for being completely crazy and violent?",
    option: ["Michael", "Franklin", "Lester", "Trevor"],
    answer: 3,
  },

  {
    question: "What city is GTA 5 set in?",
    option: ["Vice City", "Liberty City", "Los Santos", "San Fierro"],
    answer: 2,
  },

  {
    question: "What does the cheat “TURTLE” do?",
    option: [
      "Makes cars slow",
      "Slows down time",
      "Gives full health and armor",
      "Turns player into a turtle",
    ],
    answer: 2,
  },
];

const quizType = localStorage.getItem("quizType");
const questionNumber = localStorage.getItem("questionNumber");
let score = localStorage.getItem("score");

const questionElement = document.getElementById("question");

const option1Element = document.getElementById("option1");
const option2Element = document.getElementById("option2");
const option3Element = document.getElementById("option3");
const option4Element = document.getElementById("option4");

const option1out = document.getElementById("option1out");
const option2out = document.getElementById("option2out");
const option3out = document.getElementById("option3out");
const option4out = document.getElementById("option4out");

const quitQuiz = () => {
  localStorage.clear();
  window.location.href = "index.html";
};

const previousQuestion = () => {
  if (quizType == "san") {
    if (questionNumber > 1) {
      localStorage.setItem("questionNumber", parseInt(questionNumber) - 1);
      window.location.href = "quiz.html";
      setQuestion();
    } else {
      window.alert("Minimun Reached");
    }
  } else if (quizType == "GTA5") {
    if (questionNumber > 1) {
      localStorage.setItem("questionNumber", parseInt(questionNumber) - 1);
      window.location.href = "quiz.html";
      setQuestion();
    } else {
      window.alert("Minimun Reached");
    }
  }
};
const nextQuestion = () => {
  if (quizType == "san") {
    if (questionNumber < sanAndreasQuestions.length) {
      localStorage.setItem("questionNumber", parseInt(questionNumber) + 1);
      window.location.href = "quiz.html";
      setQuestion();
    } else {
      setScore();
      localStorage.setItem(
        "finalscore",
        `${score}/${sanAndreasQuestions.length}`
      );
      window.location.href = "score.html";
    }
  } else if (quizType == "GTA5") {
    if (questionNumber < gtaVQuestion.length) {
      localStorage.setItem("questionNumber", parseInt(questionNumber) + 1);
      window.location.href = "quiz.html";
      setQuestion();
    } else {
      setScore();
      localStorage.setItem("finalscore", `${score}/${gtaVQuestion.length}`);
      window.location.href = "score.html";
    }
  }
};

const Status = () => {
  console.log("Quiz type is ", quizType);
  console.log("Que no is  ", questionNumber);
  console.log("Score is ", score);
};

const selectoption = (optionNumber) => {
  const optionValue = document.getElementById(
    "option" + optionNumber
  ).innerHTML;

  if (quizType == "san") {
    if (
      optionValue ==
      sanAndreasQuestions[questionNumber - 1].option[sanAndreasQuestions[questionNumber-1].answer]
    ) {
      document
        .getElementById("option" + optionNumber + "out")
        .classList.add("rightAns");
      setTimeout(() => {
        nextQuestion();
      }, 2000);
    } else {
      document
        .getElementById("option" + optionNumber + "out")
        .classList.add("wrongAns");
    }
  }

  else if (quizType == "GTA5") {
    if (
      optionValue ==
      gtaVQuestion[questionNumber - 1].option[gtaVQuestion[questionNumber-1].answer]
    ) {
      document
        .getElementById("option" + optionNumber + "out")
        .classList.add("rightAns");
      setTimeout(() => {
        nextQuestion();
      }, 2000);
    } else {
      document
        .getElementById("option" + optionNumber + "out")
        .classList.add("wrongAns");
    }
  }
};



const clickOption = (optionNumber) =>{
  const optionValue = document.getElementById('option'+optionNumber).innerHTML;

  if(localStorage.getItem(`answer${questionNumber}`) == null){
    if (quizType == "san") {
    if (
      optionValue ==
      sanAndreasQuestions[questionNumber - 1].option[sanAndreasQuestions[questionNumber-1].answer]
    ) {
      document
        .getElementById("option" + optionNumber + "out")
        .classList.add("rightAns");
        score++;
        localStorage.setItem('score',score)
        setScore();
    } else {
      document
        .getElementById("option" + optionNumber + "out")
        .classList.add("wrongAns");
    }
  }

  else if (quizType == "GTA5") {
    if (
      optionValue ==
      gtaVQuestion[questionNumber - 1].option[gtaVQuestion[questionNumber-1].answer]
    ) {
      document
        .getElementById("option" + optionNumber + "out")
        .classList.add("rightAns");
        score++;
        localStorage.setItem('score',score)
        setScore();
      
    } else {
      document
        .getElementById("option" + optionNumber + "out")
        .classList.add("wrongAns");
    }
  }

  localStorage.setItem(`answer${questionNumber}`,optionNumber)

  }
  else{
    alert("You have already answered this question")
  }
}

const setQuestion = () => {
  if (quizType == "san") {
    Status();

    questionElement.innerHTML =
      sanAndreasQuestions[questionNumber - 1].question;
    option1Element.innerHTML =
      sanAndreasQuestions[questionNumber - 1].option[0];
    option2Element.innerHTML =
      sanAndreasQuestions[questionNumber - 1].option[1];
    option3Element.innerHTML =
      sanAndreasQuestions[questionNumber - 1].option[2];
    option4Element.innerHTML =
      sanAndreasQuestions[questionNumber - 1].option[3];

    if (localStorage.getItem(`answer${questionNumber}`) != null) {
      selectoption(localStorage.getItem(`answer${questionNumber}`));
    }
  } else if (quizType == "GTA5") {
    Status();

    questionElement.innerHTML = gtaVQuestion[questionNumber - 1].question;
    option1Element.innerHTML = gtaVQuestion[questionNumber - 1].option[0];
    option2Element.innerHTML = gtaVQuestion[questionNumber - 1].option[1];
    option3Element.innerHTML = gtaVQuestion[questionNumber - 1].option[2];
    option4Element.innerHTML = gtaVQuestion[questionNumber - 1].option[3];

    if (localStorage.getItem(`answer${questionNumber}`) != null) {
      selectoption(localStorage.getItem(`answer${questionNumber}`));
    }
  } else {
    quitQuiz();
  }
};
const setScore = () => {
  let length = 0;
  if(quizType == "san"){
    length = sanAndreasQuestions.length;
  }

  else if(quizType == "GTA5"){
    length = gtaVQuestion.length;
  }

  document.getElementById('score').innerHTML = `${score}/${length}`;
};


setQuestion();
setScore();
