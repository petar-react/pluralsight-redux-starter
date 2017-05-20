import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as quizActions from '../../actions/quizActions';
import QuizList from './QuizList';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';




class QuizPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  quizRow(quiz, index) {
    return <div key={index}>{quiz.title}</div>;
  }


  render() {
    const {quizzes} = this.props;

    return (
      <div>
        <h1>Quizzes</h1>
        <QuizList quizzes={quizzes} />
      </div>
    );
  }
}

QuizPage.propTypes = {
  quizzes: PropTypes.array.isRequired
  //actions: PropTypes.object.isRequired
};

//what part of redux store you want to expose  to component
function mapStateToProps(state, ownProps) {
  return {
    quizzes: state.quizzes
  };
}

export default connect(mapStateToProps)(QuizPage);

