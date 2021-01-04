import * as types from './actionTypes';
import * as courseAPI from '../../api/courseApi';

export function createCourse(course) {
  return {
    type: types.CREATE_COURSE,
    course,
  };
}

export function loadCoursesSuccess(courses) {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses,
  };
}

export function loadCourses() {
  return function (dispatch) {
    return courseAPI
      .getCourses()
      .then((courses) => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}
