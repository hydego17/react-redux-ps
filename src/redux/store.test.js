import { createStore } from 'redux';
import rootReducers from './reducers';
import initialState from './reducers/initialState';
import * as courseActions from './actions/courseActions';

it('should handle creating courses', () => {
  // arrange
  const store = createStore(rootReducers, initialState);
  const course = {
    title: 'Test Redux Store',
  };

  // act
  const action = courseActions.createCourseSuccess(course);
  store.dispatch(action);

  // assert
  const createdCourse = store.getState().courses[0];
  expect(createdCourse).toEqual(course);
});
