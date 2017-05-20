import React, {PropTypes} from 'react';
import Question from './Question';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as quizActions from '../../actions/quizActions';
import TextInput from '../common/TextInput';
import toastr from 'toastr';

class QuestionForm extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.addQuestion = this.addQuestion.bind(this);
    this.removeQuestion = this.removeQuestion.bind(this);
    this.id = this.id.bind(this);
    this.createQuiz = this.createQuiz.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      numQuestions: 0,
      questions: [],
      title: ''
    };
  }

  handleChange(event) {
    this.setState({title: event.target.value});
  }

  render() {
    return (
      <div className="panel-body">
        <div className="panel panel-default nested-fields">
          <div className="panel-body">
            <TextInput
              name="title"
              label="Title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div>
          {(this.state.questions.length) ? this.state.questions.map(
            (question, i) =>
              <Question key={question.id} id={question.id} removeQuestion={this.removeQuestion}/>
          ) : <span>Currently 0 Questions </span>}
        </div>
        <input
          type="submit"
          value="Add Question"
          className="btn btn-default"
          onClick={this.addQuestion}/>
        <div className="form-actions">
          <hr/>
          <input
            type="submit"
            value="Create Quiz"
            className="btn btn-primary"
            onClick={this.createQuiz}/>
        </div>
      </div>
    );
  }


  removeQuestion(id) {
    const questions = this.state.questions.filter(
      question => question.id != id
    );
    this.setState({questions});
  }

  addQuestion() {
    const ID = this.id();
    const questions = [
      ...this.state.questions,
      {id: ID}
    ];
    this.setState({
      questions
    });
  }

  id() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  prepareDataForRequest(quizTitle, qa, an){
    let quiz = {id:this.id(),title: quizTitle, questions: []};
    qa.forEach( question => {
      let answers = an.filter(answer => answer.questionId===question.id);
      //Uvek moramo da posaljemo kopiju objekta  od props-a i state-a inace nastaje sranje
       console.log(answers,"is redusera");

      let qs = Object.assign({},question);
      qs.answers = [... answers];
      //qs.a= Object.assign({}, answers);
     // console.log(qs.a,"after");
      quiz.questions.push(qs);
      console.log(quiz);
    });
    console.log(quiz,"quiz");
    return quiz;
  }

  createQuiz() {
    console.log("udjem ovde");
    let answers = this.props.answers;
    let questions = this.props.questions;
    let quizTitle = this.state.title;
    let data = this.prepareDataForRequest(quizTitle, questions, answers);

    let json  = JSON.stringify(data);
    console.log(json);
    this.props.actions.saveQuiz(data).then(() =>{toastr.success("zavrseno cuvanje")})
      .catch(error => {
        toastr.error(error);
        console.log("zgreska prilikom cuvanja quiz-a")
      });
  }

}

function mapStateToProps(state, ownProps) {
  let res = {
    questions: state.questions,
    answers: state.answers
  };
  return res;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(quizActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
