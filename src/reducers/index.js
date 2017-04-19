import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import questions from './questionReducer';
import answers from './answerReducer';
import quizzes from './quizReducer'
import ajaxCallsInProgress from './ajaxStatusReducer';

//define all reducers and combine them in root reducer
const rootReducer = combineReducers({
  courses,
  authors,
  questions,
  answers,
  quizzes,
  ajaxCallsInProgress
});

export default rootReducer;
