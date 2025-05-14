import React, { useContext } from 'react';
import { CourseContext } from '../CourseContext/CourseContext';
import Course from '../Course/Course';
import './NavCourses.css'; // Ensure styles are applied

const NavCourses = () => {
  const { courses } = useContext(CourseContext);

  return (
    <div className="course_wrapper">
      <h2>Latest Industrial <span>Courses</span></h2>
      <div className="course_container">
        {courses
          .filter(course => Number(course.id) >= 9) // Make sure id is number if needed
          .map((course, index) => (
            <Course course={course} key={index} />
          ))
        }
      </div>
    </div>
  );
};

export default NavCourses;
