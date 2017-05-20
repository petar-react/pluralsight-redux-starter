import React from 'react';
import {Panel, ButtonToolbar, ListGroup} from 'react-bootstrap';

const Question = ({
                    q,
                    question,
                    index,
                    onAnswerSelected,
                    onSubmit
                  }) =>
{
  return (
    <div>
      <h3><Panel header={question.question} bsStyle="primary">
        <ListGroup componentClass="ul">
          <ol type="a">
            {question.answers.map((answer, i) =>
              <li key={`${index}-${i}`}>
                {console.log(answer)}
                <input type="radio" name={`question_${index}`} id={`question_${index}_answer_${i}`}
                       defaultChecked={false} value={i} onChange={onAnswerSelected}/>
                {' '}

                <label htmlFor={`question_${index}_answer_${i}`}>{answer.label}</label>
              </li>
            )}
          </ol>
        </ListGroup>
      </Panel></h3>
        <button className="btn btn-primary" onClick={onSubmit}><h4>Submit</h4></button>
    </div>
  )
}

export default Question;
