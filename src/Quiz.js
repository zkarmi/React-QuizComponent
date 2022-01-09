import React, { Component } from 'react';
import QuizEnd from './QuizEnd';
import QuizQuestion from './QuizQuestion';

let quizData = require('./quiz_data.json');
class Quiz extends Component {

  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
    this.showNextQuestion = this.showNextQuestion.bind(this);
  }

  showNextQuestion() {
    this.setState((state) => ({ quiz_position: state.quiz_position + 1 }));
  }

  render() {

    let isQuizEnd = (this.state.quiz_position - 1) === quizData.quiz_questions.length;

    return (
      <div>
        {isQuizEnd && <QuizEnd />}
        <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} showNextQuestionHandler={this.showNextQuestion} />
      </div>
    )
  }
}

export default Quiz;
