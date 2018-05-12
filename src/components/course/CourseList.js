import React from 'react';
import CourseListRow from './CourseListRow';

const CourseList = props => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th />
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Length</th>
          </tr>
        </thead>
        <tbody>
          {props.courses.map(course => {
            return <CourseListRow key={course.id} course={course} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CourseList;
