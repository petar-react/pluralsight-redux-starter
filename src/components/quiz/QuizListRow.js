import React, {PropTypes} from 'react';
import {Link} from 'react-router';




const QuizListRow = ({quiz, q}) => {
  return (
    <tr>
      <td>&nbsp;</td>
      <td><Link to={'/quizplay/'+ quiz.id}>{quiz.title}</Link></td>
      <td>{quiz.questions.length}</td>
    </tr>
  );
};

QuizListRow.propTypes = {
  quiz: PropTypes.object.isRequired
  //q: PropTypes.array.isRequired
};

export default QuizListRow;
