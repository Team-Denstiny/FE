import React from 'react';
import './VendingAD.css'; // Assuming you place the CSS in a separate file
import shopimg from "../../../assets/shopimg1.png";

const ADButton: React.FC = () => {
  return (
    <button className="Vstyled-button0" disabled>
        <button className="Vstyled-button1">
            똑똑플란트 치과의원
        </button>
        <button className="Vstyled-button2">
            진료 중
        </button>
        <button className="Vstyled-button3">
            23:50 접수마감
        </button>
        <button className="Vstyled-button4">
            500m ★8.9 (102)
        </button>
        <button className="Vstyled-button5">
            임플란트
        </button>
        <button className="Vstyled-button6">
            충치치료
        </button>
        <button className="Vstyled-button7">
            치아교정
        </button>
        <button className="Vstyled-button8">
            
        </button>
        
    </button>
  );
};

export default ADButton;