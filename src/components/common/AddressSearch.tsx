import React, { Children } from 'react';
import SearchIcon from '../../assets/Search.png';

declare global {
  interface Window {
    daum: any;
  }
}

interface AddressSearchProps {
  onComplete: (address: string, x: string, y: string) => void;
  buttonSize: string;
}

const AddressSearch: React.FC<AddressSearchProps> = ({ onComplete, buttonSize}) => {
  const openPostcodePopup = () => {
    new window.daum.Postcode({
      oncomplete: function (data: any) {
        const fullAddress = data.roadAddress || data.jibunAddress;
        const x = data.x; //좌표 추출
        const y = data.y;
        onComplete(fullAddress, x, y); // 선택된 주소를 부모로 전달
      },
    }).open();
  };

  return (
    <button onClick={openPostcodePopup}
        style={{
        position: 'absolute',
        right: '5px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: buttonSize,
        height: buttonSize,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        paddingRight: '10px'
      }}>
        <img src={SearchIcon} style={{ width: buttonSize }} alt="Search Icon" />
    </button>
  );
};

export default AddressSearch;
