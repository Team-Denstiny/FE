import React from 'react';
import './RoundRectangle.css'; // CSS 파일을 임포트합니다.

interface ButtonProps {
    text: string;
    onClick?: () => void;
  }
  
  const RoundRectangle: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
      <button className="styled-button" onClick={onClick}>
        현위치: {text}
      </button>
    );
  };

export default RoundRectangle;