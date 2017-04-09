import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import questions from './questionReducer';
import answers from './answerReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  questions,
  answers,
  ajaxCallsInProgress
});

export default rootReducer;
