import * as types from './actionTypes';
import questionApi from '../api/mockQuestionApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';


export function updateQuestionSuccess(question) {
  return {type: types.UPDATE_QUESTION_SUCCESS, question};
}

export function saveQuestion(question) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    console.log("usao u akciju save question")
    return questionApi.saveQuestion(question).then(question => {
      dispatch(updateQuestionSuccess(question))
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
