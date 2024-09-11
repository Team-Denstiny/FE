import React, { useState } from 'react';
import './ReviewPage.css';
import SearchHeader from '../../components/common/SearchHeader';
//import backIcon from '../assets/back.png';  // 백 아이콘 이미지 경로를 적절히 수정하세요
//import searchIcon from '../assets/search.png';  // 검색 아이콘 이미지 경로를 적절히 수정하세요

const ReviewPage: React.FC = () => {
  const [hospitalName, setHospitalName] = useState('똑똑플란트치과의원');
  const [reviewText, setReviewText] = useState('');

  const tags = ['전체', '임플란트', '충치치료', '치아교정', '사랑니발치', '치과 스케일링'];

  const handleSearch = (term: string) => {
    // 여기에 검색 로직을 구현합니다.
    console.log('Searching for:', term);
    // 예를 들어, 병원 이름을 검색어로 설정할 수 있습니다.
    setHospitalName(term);
  };

  return (
    <div className="review-page">
      <SearchHeader 
        onSearch={handleSearch}
        //backIcon={backIcon}
        //searchIcon={searchIcon}
      />
      <header>
        <h1>후기작성</h1>
        <button className="close-button">×</button>
      </header>
      <main>
        <input
          type="text"
          value={hospitalName}
          onChange={(e) => setHospitalName(e.target.value)}
          className="hospital-input"
        />
        <div className="rating-section">
          <span>별점 선택하기</span>
          <span className="arrow">›</span>
        </div>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="내용을 입력하세요."
          className="review-textarea"
        />
        <div className="tags">
          {tags.map((tag, index) => (
            <button key={index} className="tag-button">{tag}</button>
          ))}
        </div>
        <button className="submit-button">등록하기</button>
      </main>
    </div>
  );
};

export default ReviewPage;