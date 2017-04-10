import * as types from './actionTypes';
import questionApi from '../api/mockQuestionApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';




export  function updateAnswerRemoveId(questionId) {
  return {types: types.UPDATE_ANSWER_REMOVE_ID, questionId};
}

export function updateAnswerRemoveId(id) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    console.log("Radi li?")
    return questionApi.updateAnswerRemoveId(id).then(questionId => {
      dispatch(updateAnswerRemoveId(questionId))
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

