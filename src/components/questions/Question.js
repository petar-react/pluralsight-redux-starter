import  React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as questionActions from '../../actions/questionActions';
import Answer from './Answer';


class Question extends React.Component {
  constructor(props) {
    super(props);
    this.addAnswer = this.addAnswer.bind(this);
    this.removeAnswer = this.removeAnswer.bind(this);
    this.id = this.id.bind(this);
    this.state = {
      id:'',
      question: '',
      numAnswers: 1,
      answers: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({question: event.target.value});
  }

  componentWillMount(){
    if(this.state.id==='') this.setState({id:this.props.id})
  }

  componentDidUpdate() {
    this.props.actions.updateQuestionSuccess({id: this.state.id, value:this.state.question});
  }

  componentQuestionRemoveId(id)
  {
    this.props.action.updateQuestionRemoveId({id: this.state.id, splice:[ id, 1]});
  }


  render(){

    const {id, removeQuestion} = this.props;

    return(
      <div className="panel-body">
        <div>
          <label>
            Question:
            <input type="text" value={this.state.question} onChange={this.handleChange} />
          </label>
        </div>

        <p><a href="#" onClick={this.addAnswer}>Add Another Answer</a></p>
        <a onClick={() => removeQuestion(id)}>Remove Question</a>
        <div>
          {(this.state.answers.length) ? this.state.answers.map(
            (answer,i)  =>
              <Answer key={answer.id} id={answer.id} removeAnswer={this.removeAnswer} questionId={this.state.id}/>
          ):<span>Currently 0 Answers </span>}
        </div>
      </div>
    );
  }

  removeAnswer(id){
    const answers = this.state.answers.filter(
      answer => answer.id!=id
    );
    this.setState({answers});
  }
  addAnswer () {
    const ID = this.id();
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

function mapStateToProps(state, ownProps) {


  return {
    question: state.question
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(questionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
