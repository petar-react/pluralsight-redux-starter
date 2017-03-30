import React , {PropTypes} from 'react';

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
          <a onClick={() => removeAnswer(id)}>Remove Answer</a>
        </form>
      </div>
    );
  }
}


export default Answer;




