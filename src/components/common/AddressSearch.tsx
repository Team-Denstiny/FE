import React from 'react';
import SearchIcon from '../../assets/Search.png';

declare global {
  interface Window {
    daum: any;
  }
}

interface AddressSearchProps {
  onComplete: (address: string, x: number, y: number) => void;
  buttonSize: string;
}



const getCoordinatesFromAddress = async (address: string) => {
  const API_KEY = '9670bb1770652a98ad47a42b359ceb2c';
  const url = `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(address)}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `KakaoAK ${API_KEY}`,
      },
    });
    const data = await response.json();

    if (data.documents.length > 0) {
      const { x, y } = data.documents[0].address;
      return { x, y };
    } else {
      throw new Error('주소에 대한 좌표를 찾을 수 없습니다.');
    }
  } catch (error) {
    console.error('좌표를 가져오는 중 오류 발생:', error);
    return null;
  }
};


const AddressSearch: React.FC<AddressSearchProps> = ({ onComplete, buttonSize}) => {
  const openPostcodePopup = () => {
    new window.daum.Postcode({
      oncomplete: async function (data: any) {
        const fullAddress = data.jibunAddress || data.roadAddress;
        const coords = await getCoordinatesFromAddress(fullAddress);

        if (coords) {
          const { x, y } = coords;
          onComplete(fullAddress, x, y);
        }
        else {
          onComplete(fullAddress, 0.0, 0.0);
        }
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
