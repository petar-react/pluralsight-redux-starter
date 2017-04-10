import React , {PropTypes} from 'react';
import Question from './Question';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as questionActions from '../../actions/questionActions';
import * as answerActions from '../../actions/answerActions';

class QuestionForm extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.addQuestion = this.addQuestion.bind(this);
    this.removeQuestion = this.removeQuestion.bind(this);
    this.id = this.id.bind(this);
    this.state = {
      numQuestions: 0,
      questions: []
    };
  }

  render(){
    return(
      <div className="panel-body">
        <p><a href="#" onClick={this.addQuestion}>Add Another Question</a></p>
        <div>
          {(this.state.questions.length) ? this.state.questions.map(
            (question,i)  =>
              <Question key={question.id} id={question.id} removeQuestion={this.removeQuestion}/>
          ):<span>Currently 0 Questions </span>}
        </div>
      </div>
    );
  }


  removeQuestion(id){
    const questions = this.state.questions.filter(
      question => question.id!=id
    );
    this.setState({questions});


  }
  addQuestion () {
    const ID = this.id();
    const questions = [
      ...this.state.questions,
      {id:ID}
    ];
    this.setState({
      questions
    });
  }

  id() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

}

function mapStateToProps(state, ownProps) {
  return{
    questions: state.questions,
    answers: state.answers
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators([questionActions, answerActions], dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
