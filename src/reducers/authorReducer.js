import appConstants from '../constants/appConstants';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case appConstants.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
