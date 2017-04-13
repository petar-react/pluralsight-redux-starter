import * as types from './actionTypes';

export function updateAnswerSuccess(answer) {
  return {type: types.UPDATE_ANSWER_SUCCESS, answer};
}
