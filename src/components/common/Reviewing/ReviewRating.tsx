import React from 'react';
import GrayStar from "../../../assets/graystar.png";
import YellowStar from "../../../assets/star.png";

interface StarRatingProps {
  totalStars: number; // 사용자가 선택한 별점
}

const ReviewRating: React.FC<StarRatingProps> = ({ totalStars }) => {

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;

        return (
          <span key={index} className='mr-[5px]'>
            <img
              src={starValue <= totalStars ? YellowStar : GrayStar} // totalStars에 따라 색상 결정
              alt={`${starValue} star`}
              className='w-[12px] h-[12px]' // 원하는 크기로 조절
            />
          </span>
        );
      })}
      <p className='flex font-[15px] text-black font-bold'>{totalStars}.0</p>
    </div>
  );
};

export default ReviewRating;
