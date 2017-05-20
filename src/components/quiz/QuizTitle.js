import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import QuizTitleShow from './QuizQuestionShow';


const QuizTitle = ({quizzes,quiz}) =>
{
  return (
    <div>

        <QuizTitleShow key={quiz.id} quiz={quiz}/>

    </div>
  );
};


export default QuizTitle;

