import React, { useState } from 'react';
import './StarRating.css';
import SearchHeader from '../../../components/common/SearchHeader';
import backIcon from '../../assets/Back.png';  // 백 아이콘 이미지 경로를 적절히 수정하세요
import searchIcon from '../../assets/search/search.png';  // 검색 아이콘 이미지 경로를 적절히 수정하세요
import TapBar from '../../../components/common/TopBar';
import Check from "../../assets/blueCheckNoCircle.png";
import EmptyStar from "../../assets/graystar.png";
import FilledStar from "../../assets/star.png";
import GrayStar from '../../../components/common/GrayBar';

const StarRating: React.FC = () => {
  const [selectedRating, setSelectedRating] = useState<number>(5);

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating);
  };
  const handleSearch = (term: string) => {
    // 여기에 검색 로직을 구현합니다.
    console.log('Searching for:', term);
    // 예를 들어, 병원 이름을 검색어로 설정할 수 있습니다.
  };


  const renderStars = (count: number) => {
    return (
      <>
        {[...Array(5)].map((_, index) => (
          <img key={index} className={index < count ? EmptyStar : GrayStar} />
        ))}
      </>
    );
  };

  return (
    <div> 
        <TapBar text='별점 선택'/>

        <br />
        <div className='text-black pl-[12px] font-noto font-bold font-[20px]'>별점을 선택하세요.</div>
        <br />
        <div className="star-rating" style={{backgroundColor: "white"}}>
          {[5, 4, 3, 2, 1].map((rating) => (
            <div 
              key={rating} 
              className="star-row" 
              onClick={() => handleRatingClick(rating)}
            >
              {renderStars(rating)}
              <span className="font-bold font-noto text-black ml-[10px] font-[12px]">{rating}.0</span>
              {selectedRating === rating && <img src={Check} className='check w-[24px] h-[24px]'/>}
            </div>
          ))}
        </div>
        <button className="submit-btn">등록하기</button>
    </div>
  );
};

export default StarRating;