import React from 'react';
import './Course.css';
import { FaChartSimple } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Course = ({ course }) => {
  const { image, name, price, standard, isPro, id } = course;
  const navigate = useNavigate();

  const handleExploreClick = () => {
    if (isPro) {
      navigate('/plans');
    } else {
      navigate(`/course/${id}`);
    }
  };

  return (
    <div className="course_card">
      {isPro && <div className="course_badge">Pro</div>}
      <img src={image} alt="course_img" className="course_img" />
      <h3 className="course_name">{name}</h3>
      <h4 className="course_price">₹{price}</h4>
      <p className="course_standard">
        <FaChartSimple className="analytic" /> {standard}
      </p>
      <button className="course_button" onClick={handleExploreClick}>
        Explore
      </button>
    </div>
  );
};

export default Course;
