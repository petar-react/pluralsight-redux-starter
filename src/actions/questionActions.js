import * as types from './actionTypes';

export function updateQuestionSuccess(question) {
  return {type: types.UPDATE_QUESTION_SUCCESS, question};
}
