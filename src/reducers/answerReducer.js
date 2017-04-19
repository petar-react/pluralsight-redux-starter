import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function answerReducer(state = initialState.answers, action) {
  switch (action.type) {

    case types.UPDATE_ANSWER_SUCCESS:
      return [
        ...state.filter(answer => answer.id !== action.answer.id),
        Object.assign({}, action.answer)
      ];
    default:
      return state;
  }
}
