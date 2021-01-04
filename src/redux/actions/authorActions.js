import * as types from './actionTypes';
import * as authorAPI from '../../api/authorApi';



export function loadAuthorsSuccess(authors) {
  return {
    type: types.LOAD_AUTHORS_SUCCESS,
    authors,
  };
}

export function loadAuthors() {
  return function (dispatch) {
    return authorAPI
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch((error) => {
        throw error;
      });
  };
}
