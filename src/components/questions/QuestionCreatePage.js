import React , {PropTypes} from 'react';
//create question function
class QuestionCreatePage extends React.Component {
  constructor () {
    super();
    this.state = {
      numQuestions: 0
    };
  }
  render(){

    const question = [];

    // this.state.numChildren.map(children.push(<Answer number={children.length+1} />));
    for (var i = 0; i < this.state.numQuestions; i += 1) {
      question.push(<Question key={i} number={i} > </Question>);
    }
    //Question Form
    return(
      <div>
        <h1>Hello</h1>

        <QuestionForm  addQuestion={this.onAddQuestion.bind(this)}>
          {question}
        </QuestionForm>
      </div>
    );
  }
//Add Question function
  onAddQuestion () {
    this.setState({
      numQuestions: this.state.numQuestions + 1
    });
  }


}

class QuestionForm extends React.Component {

  render(){
//field questions, On click Add Question
    return(
      <div className="card calculator">
        <p><a href="#" onClick={this.props.addQuestion}>Add Another Question</a></p>
        <div id="children-pane">
          {this.props.children}
        </div>
      </div>
    );
  }
}
/* submit and change */
class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.addAnswer = this.addAnswer.bind(this);
    this.removeAnswer = this.removeAnswer.bind(this);
    this.id = this.id.bind(this);
    this.state = {
      numAnswers: 1,
      answers: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render(){


    /* field answer, submit for Question, Add Answer on Click */
    return(
      <div className="panel-body">
        <form onSubmit={this.handleSubmit}>
          <label>
            Question:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>


        <p><a href="#" onClick={this.addAnswer}>Add Another Answer</a></p>
        <div>
          {(this.state.answers.length) ? this.state.answers.map(
            (answer,i)  =>
             <Answer key={answer.id} id={answer.id}removeAnswer={this.removeAnswer}/>
          ):<span>Currently 0 Answers </span>}
        </div>
      </div>


    );
  }

//Add Answer function
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
    this.state = {value: 'ss'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
/* submit for Answer*/
  render(){
    const {id, removeAnswer } = this.props;
    return(
      <div className="panel-body">
        <form onSubmit={this.handleSubmit}>
          <p>{this.state.value}</p>
          <label>
            Answer:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
          <a onClick={() => removeAnswer(id)}>Remove Answer</a>
        </form>
      </div>
    );
  }
}



export default QuestionCreatePage;
