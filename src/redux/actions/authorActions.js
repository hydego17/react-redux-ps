import * as types from './actionTypes';
import * as authorAPI from '../../api/authorApi';
import { beginApiCall } from './apiStatusActions';



export function loadAuthorsSuccess(authors) {
  return {
    type: types.LOAD_AUTHORS_SUCCESS,
    authors,
  };
} 

export function loadAuthors() {
  return function (dispatch) {
    
    dispatch(beginApiCall());

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
