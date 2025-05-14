import React, { useState, useContext } from 'react';
import { CourseContext } from '../CourseContext/CourseContext';
import { UserContext } from '../../Components/Admin/UserContext.jsx/UserContext'; // Import UserContext
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import './Admin.css';

const AdminPage = () => {
  const { courses, setCourses } = useContext(CourseContext);
  const { isAdmin } = useContext(UserContext); // Access isAdmin from context
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
    standard: '',
    isPro: false,
    videoLinks: ['']
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentCourseId, setCurrentCourseId] = useState(null);

  const handleChange = (e, index = null) => {
    if (e.target.name === 'videoLinks') {
      const updated = [...formData.videoLinks];
      updated[index] = e.target.value;
      setFormData({ ...formData, videoLinks: updated });
    } else {
      const { name, value, type, checked } = e.target;
      setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    }
  };

  const addVideoPhase = () => {
    setFormData({ ...formData, videoLinks: [...formData.videoLinks, ''] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedCourses = courses.map(course =>
        course.id === currentCourseId ? { ...formData, id: currentCourseId } : course
      );
      setCourses(updatedCourses);
    } else {
      const newCourse = { ...formData, id: uuidv4() };
      setCourses(prev => [...prev, newCourse]);
    }

    setFormData({
      name: '',
      price: '',
      image: '',
      standard: '',
      isPro: false,
      videoLinks: ['']
    });
    setIsEditing(false);
    setCurrentCourseId(null);
  };

  const editCourse = (id) => {
    const courseToEdit = courses.find(course => course.id === id);
    setFormData(courseToEdit);
    setIsEditing(true);
    setCurrentCourseId(id);
  };

  const deleteCourse = (id) => {
    setCourses(prevCourses => prevCourses.filter(course => course.id !== id));
  };

  return (
    <div className="admin-dashboard">
      {/* Conditionally render sidebar if not logged in as admin */}
      {!isAdmin && (
        <div className="sidebar">
          <h3>Admin Dashboard</h3>
          <ul>
            <li><a href="#add-course-form">Add Course</a></li>
            <li><Link to="/view-courses">View Courses</Link></li>
            <li><Link to="/admin/progress">User Progress</Link></li>
          </ul>
        </div>
      )}

      <div className="main-content">
        <form onSubmit={handleSubmit} className="admin-form" id="add-course-form">
          <h2>{isEditing ? 'Edit Course' : 'Add Course'}</h2>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Course Name" required />
          <input name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
          <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" required />
          <input name="standard" value={formData.standard} onChange={handleChange} placeholder="Standard" />
          <label>
            <input type="checkbox" name="isPro" checked={formData.isPro} onChange={handleChange} />
            <span className="switch"></span> Is Pro?
          </label>

          {formData.videoLinks.map((link, index) => (
            <input key={index} name="videoLinks" value={link} onChange={(e) => handleChange(e, index)} placeholder={`Video ${index + 1}`} required />
          ))}
          <button type="button" onClick={addVideoPhase}>+ Add Video</button>

          <button type="submit">{isEditing ? 'Update Course' : 'Submit Course'}</button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
