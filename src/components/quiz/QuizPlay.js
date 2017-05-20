import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as quizActions from '../../actions/quizActions';
import QuizTittle from './QuizTitle';
import {browserHistory} from 'react-router';


class QuizPlay extends React.Component {
  constructor(props, context)
  {
    super(props, context);
  }


  render()
  {
    const {quiz, questions} = this.props;

    return (
      <div>
        <h1>Quiz</h1>
        <div className="jumbotron">
          <h2>Title: </h2>
          <QuizTittle quiz={quiz}/>
          <br/>
          <h2>
            <div>
              <button>Rezultat</button>
            </div>
          </h2>
        </div>
      </div>
    );
  }
}


function getQuizById(quizzes, id)
{
  const quiz = quizzes.filter(quiz => quiz.id == id);
  if (quiz) return quiz[0]; //since filter returns an array, have to grab the first.
  return null;
}


function mapStateToProps(state, ownProps)
{
  const quizId = ownProps.params.id; // from the path `/quiz/:id`

  let quiz = {id: '', title: '', questions: '', answers: ''};

  if (quizId && state.quizzes.length > 0)
  {
    quiz = getQuizById(state.quizzes, quizId);
  }
  return {
    quiz: quiz

  };
}

export default connect(mapStateToProps)(QuizPlay);
