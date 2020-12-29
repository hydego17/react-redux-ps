// Action Creator
export function createCourse(course) {
  return {
    type: 'CREATE_COURSE',
    course,
  };
}
