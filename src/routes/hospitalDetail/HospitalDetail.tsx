import React from 'react';
import './HospitalDetail.css'; // 별도의 CSS 파일

const HospitalDetail: React.FC = () => {
  return (
    <div className="container">
      <div className="header">
        <button className="back-button">←</button>
        <div className="hospital-name">똑똑플란트치과의원</div>
        <div className="rating">★★★★★ 5.0 (102)</div>
      </div>
      <div className="review">
        <div className="review-header">
          <div className="user-info">
            <div className="user-avatar"></div>
            <div>
              <div>홍길동</div>
              <div>2024.07.05</div>
            </div>
          </div>
          <div className="rating">★★★★★ 5.0</div>
        </div>
        <p>추가 설명이 필요한 경우 여기에 리뷰 내용이 들어갑니다.</p>
      </div>
      <div className="buttons">
        <button className="button">예약하기</button>
        <button className="button primary-button">상담하기</button>
      </div>
    </div>
  );
};

export default HospitalDetail;