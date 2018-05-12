import appConstants from '../constants/appConstants';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case appConstants.CREATE_COURSE_SUCCESS:
      // copy current state and add new course
      return [...state, Object.assign({}, action.course)];
    case appConstants.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];
    case appConstants.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
