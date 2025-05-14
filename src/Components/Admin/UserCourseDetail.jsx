import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../Components/Admin/UserContext.jsx/UserContext';
import './UserCourseDetail.css';

const UserDetailPage = () => {
  const { userId } = useParams();
  const { progress } = useContext(UserContext);
  const userData = progress[userId];

  if (!userData) {
    return <div className="user-detail-page">User not found.</div>;
  }

  const courses = userData.chosenCourses || [];

  return (
    <div className="user-detail-page">
      <div className="user-header">
        <img src={userData.imageUrl} alt={userData.name} className="user-avatar" />
        <div className="user-info">
          <h2>{userData.name}</h2>
          <p>User ID: {userId}</p>
        </div>
      </div>

      <div className="course-section">
        <h3>Course Progress</h3>
        {courses.length === 0 ? (
          <p>No course data available.</p>
        ) : (
          <ul className="course-detail-list">
            {courses.map((course, index) => (
              <li key={index}>
                <strong>{course.name}</strong><br />
                Progress: {course.watched} / {course.total} videos
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${(course.watched / course.total) * 100}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserDetailPage;
