import React from 'react'


const QuizQuestionShow = ({
                            quiz,
                            questions,
                            question,
                            index,
                            onAnswerSelected,
                            onSubmit
                          }) =>
{
  return (
    <div>
      <h3>{quiz.questions[0].question}</h3>
        <input type="radio" /><h4>{quiz.questions[0].answers[0].label}</h4>
        <h4>{quiz.questions[0].answers[1].label}</h4>
        <h4>{quiz.questions[0].answers[2].label}</h4>
      <h3>{quiz.questions[1].question}</h3>
        <h4>{quiz.questions[1].answers[0].label}</h4>
        <h4>{quiz.questions[1].answers[1].label}</h4>
        <h4>{quiz.questions[1].answers[2].label}</h4>
      <h3>{quiz.questions[2].question}</h3>
        <h4>{quiz.questions[2].answers[0].label}</h4>
        <h4>{quiz.questions[2].answers[1].label}</h4>
        <h4>{quiz.questions[2].answers[2].label}</h4>

    </div>
  )
}

export default QuizQuestionShow;


