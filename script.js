const openquiz = (quizname)=>{
    localStorage.clear();
    localStorage.setItem('quizType' , quizname);
    localStorage.setItem('questionNumber' , 1);
    localStorage.setItem('score' , 0);
    window.location.href="quiz.html";
}; 

