import React , {PropTypes} from 'react';

class QuestionCreatePage extends React.Component {
  constructor () {
    super();
    this.state = {
      numQuestions: 0
    };
  }
  render(){
    return(
      <div>
        <h1>Hello</h1>

        <QuestionForm />

      </div>
    );
  }
}

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

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.addAnswer = this.addAnswer.bind(this);
    this.removeAnswer = this.removeAnswer.bind(this);
    this.id = this.id.bind(this);
    this.state = {
      question: 'question',
      numAnswers: 1,
      answers: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("menjam question");
    console.log(event.target.question);
    this.setState({question: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render(){

    const {id, removeQuestion } = this.props;
    return(
      <div className="panel-body">
        <form onSubmit={this.handleSubmit}>
          <p>{this.state.question}</p>
          <label>
            Question:
            <input type="text" value={this.state.question} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>


        <p><a href="#" onClick={this.addAnswer}>Add Another Answer</a></p>
        <a onClick={() => removeQuestion(id)}>Remove Question</a>
        <div>
          {(this.state.answers.length) ? this.state.answers.map(
            (answer,i)  =>
             <Answer key={answer.id} id={answer.id} removeAnswer={this.removeAnswer}/>
          ):<span>Currently 0 Answers </span>}
        </div>
      </div>
    );
  }


   removeAnswer(id){
     console.log(id, "Brisem ovaj id");
     const answers = this.state.answers.filter(
       answer => answer.id!=id
     );
     this.setState({answers});
   }
   addAnswer () {
     const ID = this.id();
     console.log(ID,"ovo je id ");
    const answers = [
      ...this.state.answers,
      {id:ID}
    ];
    this.setState({
      answers
    });
  }

   id() {
     return '_' + Math.random().toString(36).substr(2, 9);
  }
}

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {answer: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log("menjam answer");
    console.log(event.target.value);
    this.setState({answer: event.target.value});
  }

  render(){
    const {id, removeAnswer } = this.props;
    return(
      <div className="panel-body">
        <form onSubmit={this.handleSubmit}>
          <p>{this.state.answer}</p>
          <label>
            Answer:
            <input type="text" value={this.state.answer} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
          <a onClick={() => removeAnswer(id)}>Remove Answer</a>
        </form>
      </div>
    );
  }
}



export default QuestionCreatePage;
