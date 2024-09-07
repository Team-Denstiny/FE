import React, { useState } from 'react';

interface StarRatingProps {
  totalStars?: number;
}

const ReviewRating: React.FC<StarRatingProps> = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState<number>(0);  // 선택된 별점 (0~5)
  const [hoverRating, setHoverRating] = useState<number>(0);  // 마우스 호버 중인 별점

  const handleClick = (star: number) => {
    setRating(star);
  };

  const handleMouseOver = (star: number) => {
    setHoverRating(star);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;

        return (
          <span
            key={index}
            style={{
              marginRight: '10px',
              cursor: 'pointer',
              fontSize: '1.5rem',
              color: starValue <= (hoverRating || rating) ? '#FFD700' : '#C0C0C0'
            }}
            onClick={() => handleClick(starValue)}
            onMouseOver={() => handleMouseOver(starValue)}
            onMouseLeave={handleMouseLeave}
          >
            ★
          </span>
        );
      })}
      <div style = {{display: 'flex', fontSize:'15px'}}>
        <br></br>
      <p style={{ marginTop: '1em' }}>{rating}.0 </p>
      </div>
    </div>
  );
};

export default ReviewRating;
