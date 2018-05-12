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

export function saveCourse(course) {
  return function(dispatch, getState) {
    return courseApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch(error => {
        throw error;
      });
  };
  return {
    type: appConstants.CREATE_COURSE,
    course
  };
}

export function createCourseSuccess(course) {
  return { type: appConstants.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: appConstants.UPDATE_COURSE_SUCCESS, course };
}
