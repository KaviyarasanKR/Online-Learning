import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Components/Admin/UserContext.jsx/UserContext';
import './ProgressPage.css';

const ProgressPage = () => {
  const { progress } = useContext(UserContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const progressEntries = progress && typeof progress === 'object' ? Object.entries(progress) : [];

  const filteredEntries = progressEntries.filter(([userId, userData]) =>
    userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    userData.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="progress-page">
      <h2>User Progress</h2>

      <input
        type="text"
        placeholder="Search by User ID or Name..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="progress-list">
        {filteredEntries.length === 0 ? (
          <p>No matching users found.</p>
        ) : (
          filteredEntries.map(([userId, userData]) => (
            <div key={userId} className="user-progress-card">
              <img src={userData.imageUrl} alt={userData.name} className="user-avatar" />
              <h3>{userData.name}</h3>
              <p className="user-id">ID: {userId}</p>

              {userData.chosenCourses?.map((course, index) => {
                const completion = course.total > 0
                  ? Math.round((course.watched / course.total) * 100)
                  : 0;

                let badge = '📘';
                if (completion === 100) badge = '🏅';
                else if (completion >= 75) badge = '🔥';
                else if (completion >= 50) badge = '🚀';

                return (
                  <div key={index} className="progress-summary">
                    <strong>{course.name}</strong>
                    <div className="progress-bar-wrapper">
                      <div className="progress-bar" style={{ width: `${completion}%` }} />
                    </div>
                    <p>{completion}% Complete {badge}</p>
                  </div>
                );
              })}

              <button
                className="user-action-button"
                onClick={() => navigate(`/admin/user/${userId}`)}
              >
                Take Action
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProgressPage;
