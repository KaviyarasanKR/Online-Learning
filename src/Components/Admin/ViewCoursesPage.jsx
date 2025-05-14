import React, { useContext } from 'react';
import { CourseContext } from '../CourseContext/CourseContext';
import { useNavigate } from 'react-router-dom';
import './ViewCoursesPage.css';

const ViewCoursesPage = () => {
  const { courses, setCourses } = useContext(CourseContext);
  const navigate = useNavigate();

  const deleteCourse = (id) => {
    setCourses(prevCourses => prevCourses.filter(course => course.id !== id));
  };

  const editCourse = (course) => {
    navigate('/admin', { state: { editCourse: course } }); // Navigate with course data
  };

  return (
    <div className="view-courses-page">
      <h2>All Courses</h2>
      {courses.length > 0 ? (
        <div className="courses-container">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              {course.isPro && <div className="course-badge">Pro</div>}
              <img src={course.image} alt="course_img" className="course-img" />
              <h3>{course.name}</h3>
              <p>{course.price}</p>
              <p>{course.standard}</p>
              <div className="actions">
                <button onClick={() => editCourse(course)}>Edit</button>
                <button onClick={() => deleteCourse(course.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No courses available.</p>
      )}
    </div>
  );
};

export default ViewCoursesPage;
