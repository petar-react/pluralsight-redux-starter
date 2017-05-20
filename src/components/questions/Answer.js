import React , {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as answerActions from '../../actions/answerActions';
import TextInput from '../common/TextInput';


class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionId:'',
      id:'',
      answer: '',
      isTrue: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  //pre nego sto se renderuje komponenta nasetujem id id
  componentWillMount(){
    if(this.state.id==='' && this.state.questionId==='')
      this.setState({id:this.props.id, questionId: this.props.questionId, isTrue:this.props.isTrue})
  }

  //Okidam akciju u redux store-u nakon sto nasetujem state u ovoj komponenti
  componentDidUpdate() {
    this.props.actions.updateAnswerSuccess({
      questionId:this.state.questionId,
      id: this.state.id,
      label:this.state.answer,
      isTrue:this.props.isTrue});
  }

  handleChange(event) {
    this.setState({answer: event.target.value});
  }

  render(){
    const {id, removeAnswer, questionId, setAnswerOnTrue, isTrue} = this.props;

    return(
      <div className = "panel panel-default nested-fields">
        <div className="panel-body">
            <TextInput
              name="answer"
              label="Answer"
              value={this.state.answer}
              onChange={this.handleChange}
            />
          <input
            type="submit"
            value="Remove Answer"
            className="btn btn-default"
            onClick={()=>removeAnswer(id)}/>
          <button type="button"
                  onClick={()=>setAnswerOnTrue(id)}
                  className={isTrue ? "btn btn-success" : "btn btn-danger"}>
            <span  className={isTrue ? "glyphicon glyphicon-ok-circle" : "glyphicon glyphicon-remove-circle"}></span>
            {isTrue?"Answer is true":"Answer is false"}
          </button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(answerActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Answer);





