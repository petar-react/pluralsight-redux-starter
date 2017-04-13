import *as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

/*const CREATE_COURSE ='CREATE_COURSE';*/

export function loadCoursesSuccess(courses) /*create Action*/
{
  return{type: types.LOAD_COURSE_SUCCESS, courses}; /* don't need course: course becouse of ES6*/
}





export function loadCourses()
{
  return function (dispatch)
  {
    return courseApi.getAllCourses().then( courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw (error);
    });
  };
}
