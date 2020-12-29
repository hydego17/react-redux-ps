import * as types from './actionTypes';

// Action Creator
export function createCourse(course) {
  return {
    type: types.CREATE_COURSE,
    course,
  };
}
