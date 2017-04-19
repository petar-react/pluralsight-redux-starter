import * as types from './actionTypes';
import quizApi from '../api/mockQuizApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadQuizzesSuccess(quizzes) {
  return { type: types.LOAD_QUIZZES_SUCCESS, quizzes};
}

export function createQuizSuccess(quiz) {
  console.log("Usao u create quiz suc",quiz);
  return {type: types.CREATE_QUIZ_SUCCESS, quiz};
}

export function updateQuizSuccess(quiz) {
  return {type: types.UPDATE_QUIZ_SUCCESS, quiz};
}

export function loadQuiz() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return quizApi.getAllQuizzes().then(quizzes => {
      dispatch(loadQuizzesSuccess(quizzes));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveQuiz(quiz) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return quizApi.saveQuiz(quiz).then(quiz => {
      //quiz.id ? dispatch(updateQuizSuccess(quiz)) :
        debugger;
        dispatch(createQuizSuccess(quiz));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
