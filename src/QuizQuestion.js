import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {

  handleClick(buttonText) {
    if(buttonText === this.props.quiz_question.answer)
      this.props.showNextQuestionHandler();
  }

  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            { this.props.quiz_question.answer_options.map( (opt, i) =>
                <QuizQuestionButton key={i} button_text={opt} clickHandler={this.handleClick.bind(this)} />
            ) }
          </ul>
        </section>
      </main>
    )
  }
}

export default QuizQuestion;
