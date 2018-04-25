(function () {
  var questions = document.querySelectorAll(".question");
  var questionLinks = document.querySelectorAll(".question__link");
  var answers = document.querySelectorAll(".question__answer");
  var closeButtons = document.querySelectorAll(".question__close");
  var questionOpenClass = "question_open";
  var questionActiveClass = "question__link_opened";
  var questionInactiveClass = "question__link_closed";
  var answersActiveClass = "question__answer_show";
  var buttonOpenCLass = "question__close_show";

  for (var i = 0; i < questions.length; i++) {
    window.toggleBlock(questions[i], questionLinks[i], answers[i], questionOpenClass, questionActiveClass, questionInactiveClass, answersActiveClass, closeButtons[i], buttonOpenCLass);
  }

})();
