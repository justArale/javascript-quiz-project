class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    let currentIndex = this.questions.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [this.questions[currentIndex], this.questions[randomIndex]] = [
        this.questions[randomIndex],
        this.questions[currentIndex],
      ];
    }
  }

  checkAnswer(answer) {
    if (answer === this.getQuestion().answer) {
      this.correctAnswers++;
    }

    /*
      let currentQuestion = this.questions[this.currentQuestionIndex]; => there is a function for that!
      if (answer === currentQuestion.answer) {
       this.correctAnswers++;
     }
    */
  }

  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    } else {
      return true;
    }
  }

  /*
  short version:
      hasEnded() {
        return this.currentQuestionIndex === this.questions.length;
      }
  */

  filterQuestionsByDifficulty(difficulty) {
    if (typeof difficulty == "number" && difficulty >= 1 && difficulty <= 3) {
      return (this.questions = this.questions.filter(
        (e) => e.difficulty === difficulty
      ));
    }
  }

  averageDifficulty() {
    const sumDifficulty = this.questions.reduce((acc, cur) => {
      return acc + cur.difficulty;
    }, 0);
    return sumDifficulty / this.questions.length;
  }
}
