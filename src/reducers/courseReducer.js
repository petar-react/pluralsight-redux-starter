import * as types from '../actions/actionTypes';

export default function courseReducer(state =[], action)
{
  switch (action.type) {
    case types.LOAD_COURSE_SUCCESS:
      return action.courses;

      /*CREATE_COURSE: /*Reducer*/ /*
      return [...state, Object.assign({}, action.course)]; /*return new array, empty object, action copy*/
   /* state.push(action.course);
    return state;*/

    default: return state;
  }
}
