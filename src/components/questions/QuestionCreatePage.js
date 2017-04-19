import React , {PropTypes} from 'react';

import QuestionForm from './QuestionForm';

class QuestionCreatePage extends React.Component {
  constructor () {
    super();
    this.state = {
      numQuestions: 0
    };
  }

  render(){
    return(
      <div className="panel-body">
        <h1>Hello</h1>

        <QuestionForm />

      </div>
    );
  }
}

export default QuestionCreatePage;
