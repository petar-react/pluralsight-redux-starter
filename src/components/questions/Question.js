import  React, {PropTypes} from 'react';

import Answer from './Answer';


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


export default Question;
