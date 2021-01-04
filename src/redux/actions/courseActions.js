import * as types from './actionTypes';
import * as courseAPI from '../../api/courseApi';

export function loadCoursesSuccess(courses) {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses,
  };
}

export function updateCourseSuccess(course) {
  return {
    type: types.UPDATE_COURSE_SUCCESS,
    course,
  };
}

export function createCourseSuccess(course) {
  return {
    type: types.CREATE_COURSE_SUCCESS,
    course,
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

export function saveCourse(course) {
  return function (dispatch, getState) {
    return courseAPI
      .saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch((error) => {
        throw error;
      });
  };
}
