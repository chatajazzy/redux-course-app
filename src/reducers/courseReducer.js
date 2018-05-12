import appConstants from '../constants/appConstants';

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case appConstants.CREATE_COURSE:
      // copy current state and add new course
      return [...state, Object.assign({}, action.course)];
    case appConstants.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
