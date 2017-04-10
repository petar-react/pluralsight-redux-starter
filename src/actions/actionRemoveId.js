import * as types from './actionTypes';
import questionApi from '../api/mockQuestionApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';




 export  function updateQuestionRemoveId(id) {
 return {types: types.UPDATE_QUESTION_REMOVE_ID, id};
 }

export function updateRemoveId(id) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    console.log("Radi li?")
    return questionApi.updateQuestionRemoveId(id).then(id => {
      dispatch(updateQuestionRemoveId(id))
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

