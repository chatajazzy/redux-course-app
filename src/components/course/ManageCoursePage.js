import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import PropTypes from 'prop-types';

class ManageCoursePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    };
  }
  componentWillReceiveProps(nextProps) {
    // at first load state.courses is empty
    if (this.props.course.id != nextProps.course.id) {
      this.setState({
        course: Object.assign({}, nextProps.course)
      });
    }
  }
  updateCourseState = event => {
    const field = event.target.name;
    const course = this.state.course;
    course[field] = event.target.value;
    return this.setState({
      course: course
    });
  };
  saveCourse = event => {
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    this.context.router.history.push('/courses');
  };
  render() {
    return (
      <CourseForm
        allAuthors={this.props.authors}
        course={this.state.course}
        errors={this.state.errors}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
      />
    );
  }
}

ManageCoursePage.contextTypes = {
  router: PropTypes.object
};
function getCourseById(courses, id) {
  const course = courses.filter(course => course.id == id);
  if (course) {
    return course[0];
  } else {
    return null;
  }
}
// redux
function mapStateToProps(state, ownProps) {
  const courseId = ownProps.match.params.id;
  let course = {
    id: '',
    watchHref: '',
    title: '',
    auuthorId: '',
    length: '',
    category: ''
  };

  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: `${author.firstName} ${author.lastName}`
    };
  });

  return {
    course: course,
    authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
