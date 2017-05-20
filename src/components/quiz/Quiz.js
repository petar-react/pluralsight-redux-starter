import React from 'react';
import $ from 'jquery';
import {connect} from 'react-redux';
import {Panel} from 'react-bootstrap';

import Question from './Question';


class Quiz extends React.Component {

  constructor(props)
  {
    super(props)
    this.state = {
      // quiz: {},
      index: 0,
      answers: []
    }
  }


  handleSubmit()
  {
    if (this.state.index < this.props.quiz.questions.length)
    {
      this.setState({'index': this.state.index + 1})
    } else
    {
      let score = this.state.score || 0
      this.state.answers.map((answer, i) => (
        score = score + this.props.quiz.questions[i].answers[answer].isTrue
      ))
      this.setState({'score': score})
    }
  }

  handleAnswerSelected(event)
  {
    let list = [...this.state.answers.slice(0, this.state.index),
      parseInt(event.target.value),
      ...this.state.answers.slice(this.state.index + 1)]
    this.setState({'answers': list})
  }

  render()
  {
    const {index, answers} = this.state;
    const {quiz} = this.props;
    let completed = (quiz.questions && (index === quiz.questions.length)) ? true : false
    let numberOfQuestions = quiz.questions ? quiz.questions.length : 0
    let score = 0
    if (completed)
    {
      this.state.answers.map((answer, i) => (
        score = score + (this.props.quiz.questions[i].answers[answer].isTrue ? 0 : 1 )
      ))
    }

    return (
      <div>
        <h1><Panel header={quiz.title}>
        {completed ?
          <div>
           <p>Congratulation, you finished the quiz</p>
             Your score is {score}
          </div>
          :
          <div>
            <h2>Question {index + 1} of {numberOfQuestions}</h2>
            {quiz.questions && index < numberOfQuestions ?
              <Question key={quiz.id} quiz={quiz}
                question={quiz.questions[index]}
                index={index}
                onAnswerSelected={(event) => this.handleAnswerSelected(event)}
                onSubmit={() => this.handleSubmit()}
              />
              : ''}
          </div>
        }
        </Panel></h1>
      </div>
    )
  }
}

function getCourseById(quizzes, id)
{
  const quiz = quizzes.filter(quiz => quiz.id == id);
  if (quiz) return quiz[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps)
{
  const quizId = ownProps.params.id; // from the path `/course/:id`

  let quiz = {id: '', title: '', length: ''};

  if (quizId && state.quizzes.length > 0)
  {
    quiz = getCourseById(state.quizzes, quizId);
  }

  return {
    quiz: quiz
  };
}
/*
 function mapDispatchToProps(dispatch) {
 return {
 actions: bindActionCreators(courseActions, dispatch)
 };
 }
 */
export default connect(mapStateToProps, null)(Quiz);
