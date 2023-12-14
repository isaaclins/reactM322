import React, { useState } from 'react';
import './App.css';

function App() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [submittedRating, setSubmittedRating] = useState(null);
  const [allRatings, setAllRatings] = useState([]);

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleStarHover = (hoveredStar) => {
    setHoveredRating(hoveredStar);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleSubmit = () => {
    setSubmittedRating(rating);
    setAllRatings([...allRatings, rating]);
  };

  const calculateAverageRating = () => {
    if (allRatings.length === 0) {
      return 0;
    }
    const sum = allRatings.reduce((total, current) => total + current, 0);
    return sum / allRatings.length;
  };

  return (
    <div className="App">
      <h1>⭐Rate our site!⭐</h1>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleRatingClick(star)}
          onMouseEnter={() => handleStarHover(star)}
          onMouseLeave={handleMouseLeave}
          style={{ fontSize: star === hoveredRating || star <= rating ? '2em' : '1em' }}
        >
          {star <= rating ? '★' : '☆'}
        </span>
      ))}
      <button onClick={handleSubmit}>Submit Rating</button>

      {submittedRating !== null && (
        <div>
          <p>You have submitted a rating of {submittedRating} stars. Thank you!</p>
          <p>Average Rating: {calculateAverageRating().toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default App;
