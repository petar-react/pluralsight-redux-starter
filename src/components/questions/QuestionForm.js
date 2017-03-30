import React , {PropTypes} from 'react';
import Question from './Question';



class QuestionForm extends React.Component {

  constructor () {
    super();
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
        <input type="submit" value="Submit Questions and Answers"/>
        <div>
          {(this.state.questions.length) ? this.state.questions.map(
            (question,i)  =>
              <Question key={question.id} id={question.id} removeQuestion={this.removeQuestion}/>
          ):<span>Currently 0 Questions </span>}
        </div>
      </div>
    );


    var takeValue = [
      {
        "questionID" : "id generisan",
        "value": "vrednost pollja",
        "answers": [
          {
            "answerID" : "generisan ID",
            "value": "vrednost polja"
          }
        ]},
      {
        "questionID" : "id generisan",
        "value": "vrednost pollja",
        "answers": [
          {
            "answerID" : "generisanID",
            "value": "vrednost polja"
          }
        ]

      }];
    console.log(takeValue);
  }


  removeQuestion(id){
    console.log(id, "Brisem ovaj id");
    const questions = this.state.questions.filter(
      question => question.id!=id
    );
    this.setState({questions});
  }
  addQuestion () {
    const ID = this.id();
    console.log(ID,"ovo je id ");
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

export default QuestionForm;
