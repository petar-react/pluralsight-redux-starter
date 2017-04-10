import * as types from './actionTypes';
import questionApi from '../api/mockQuestionApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';




 export  function updateRemoveId(id)
 {
 return {types: types.UPDATE_REMOVE_ID, id};
 }

export function updateRemoveId(id) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    console.log("usao u akciju save question")
    return questionApi.updateRemoveId(id).then(id => {
      dispatch(updateRemoveId(id))
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
