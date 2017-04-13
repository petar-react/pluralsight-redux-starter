import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses /* shorthand proparty name*/
});


export default rootReducer;
