import React , {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as answerActions from '../../actions/answerActions';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionId:'',
      id:'',
      answer: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate() {
    this.props.actions.updateAnswerSuccess({questionId:this.state.questionId, id: this.state.id, value:this.state.question});
  }

  componentWillMount(){
    if(this.state.id==='' && this.state.questionId==='')
      this.setState({id:this.props.id, questionId: this.props.questionId})
  }

  componentAnswerRemoveId(questionId)
  {
    this.props.action.updateAnswerRemoveId({questionId: this.state.questionId, splice:[ questionId, 1]});
  }


  handleChange(event) {
    this.setState({answer: event.target.value});
  }

  render(){
    const {id, removeAnswer, questionId} = this.props;
    return(
      <div className="panel-body">
        <div>
          <p>{this.state.answer}</p>
          <label>
            Answer:
            <input type="text" value={this.state.answer} onChange={this.handleChange} />
          </label>
          <a onClick={() => removeAnswer(id)}>Remove Answer</a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    answer: state.answer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(answerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer);





