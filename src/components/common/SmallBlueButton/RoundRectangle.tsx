import React from 'react';
import './RoundRectangle.css'; // CSS 파일을 임포트합니다.

interface ButtonProps {
    text: string;
    onClick?: () => void;
  }
  
  const RoundRectangle: React.FC<ButtonProps> = () => {
    return (
        <button className="styled-button0" disabled>
            <button className="styled-button1">
                현위치: 서울 강남구
            </button>
            <button className="styled-button2">
                거리순 ▽
            </button>
        </button>
    );
  };

export default RoundRectangle;