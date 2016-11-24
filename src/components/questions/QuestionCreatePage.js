import React , {PropTypes} from 'react';

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

    return(
      <div>
        <h1>Hello</h1>
        <QuestionForm  addQuestion={this.onAddQuestion.bind(this)}>
          {question}
        </QuestionForm>
      </div>
    );
  }

  onAddQuestion () {
    this.setState({
      numQuestions: this.state.numQuestions + 1
    });
  }


}

class QuestionForm extends React.Component {

  render(){

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

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.addAnswer = this.addAnswer.bind(this);
    this.state = {
      numAnswers: 1
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
    const answer = [];

    // this.state.numChildren.map(children.push(<Answer number={children.length+1} />));
    for (var k = 0; k < this.state.numAnswers; k += 1) {
      answer.push(<Answer key={k} number={k} />);
    }
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
          {answer}
        </div>
      </div>


    );
  }

   addAnswer () {
    this.setState({
      numAnswers: this.state.numAnswers + 1
    });
  }
}


class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render(){
    return(
      <div className="panel-body">
        <form onSubmit={this.handleSubmit}>
          <label>
            Answer:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}



export default QuestionCreatePage;
