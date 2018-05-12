import appConstants from '../constants/appConstants';
import courseApi from '../api/mockCourseApi';

// action creator
export function createCourse(course) {
  // return action object
  return {
    type: appConstants.CREATE_COURSE,
    course
  };
}

export function loadCourses() {
  return function(dispatch) {
    return courseApi
      .getAllCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadCoursesSuccess(courses) {
  return { type: appConstants.LOAD_COURSES_SUCCESS, courses };
}
