import React, { useState } from 'react';
import nextIcon from "../../assets/NextBar.png";
import TapBar from '../../components/common/TopBar';
import './ReviewPage.css';

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
    <div>
    <TapBar text="후기 작성" />
    <div className="review-page">
        <input
          type="text"
          value={hospitalName}
          onChange={(e) => setHospitalName(e.target.value)}
          className="hospital-input"
        />
        <button className="rating-section text-black"> 
          <span>별점 선택하기</span>
          <img src={nextIcon} className='h-[15px]'/>
        </button>
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
          constructor(parameters) {
            
          }
        <button className="blueButton blueDefault" type="submit"> 로그인 </button>
    </div>

    </div>
  );
};

export default ReviewPage;