import React, { useState } from 'react';
import './StarRating.css';
import SearchHeader from '../../components/common/SearchHeader';
import backIcon from '../../assets/Back.png';  // 백 아이콘 이미지 경로를 적절히 수정하세요
import searchIcon from '../../assets/search/search.png';  // 검색 아이콘 이미지 경로를 적절히 수정하세요

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
          <span key={index} className={index < count ? 'star filled' : 'star'}>
            ★
          </span>
        ))}
      </>
    );
  };

  return (
    <div className="star-rating-container">
        <SearchHeader 
        onSearch={handleSearch}
        backIcon={backIcon}
        searchIcon={searchIcon}
      />
        
      <header>
        <h1>별점 선택</h1>
        <button className="close-btn">×</button>
      </header>
      <main>
        <p>별점을 선택하세요.</p>
        <div className="star-rating">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div 
              key={rating} 
              className="star-row" 
              onClick={() => handleRatingClick(rating)}
            >
              {renderStars(rating)}
              <span className="score">5.0</span>
              {selectedRating === rating && <span className="check">✓</span>}
            </div>
          ))}
        </div>
        <button className="submit-btn">등록하기</button>
      </main>
    </div>
  );
};

export default StarRating;