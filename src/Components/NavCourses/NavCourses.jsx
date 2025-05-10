import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CourseContext } from '../CourseContext/CourseContext';
import Course from '../Course/Course';

const NavCourses = () => {
  const { courses } = useContext(CourseContext);

  console.log(courses);

  return (
    <div>
      <div className="course_wrapper">
        <h2>Latest Industrial <span>Courses</span></h2>
        <div className="course_container">
          {courses
            .filter(course => course.id >= 9) // Change to === 9 if needed
            .map((course, index) => (
              <Link to={`/course/${course.id}`} key={index}>
                <Course course={course} />
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default NavCourses;
