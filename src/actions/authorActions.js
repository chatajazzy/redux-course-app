import appConstants from '../constants/appConstants';
import AuthorApi from '../api/mockAuthorApi';

export function loadAuthors() {
  return function(dispatch) {
    return AuthorApi.getAllAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadAuthorsSuccess(authors) {
  return { type: appConstants.LOAD_AUTHORS_SUCCESS, authors };
}
