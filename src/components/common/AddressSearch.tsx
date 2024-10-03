import React from 'react';
import SearchIcon from '../../assets/Search.png';
import { ButtonContainer, GrayText } from './LoginDesigns/Utility';

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

export const openPostcodePopup = (onComplete:any) => {
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

interface AddrButtonProp {
  myAddress: string;
  handleMyAddress ?: any; 
}

export const AddressButton: React.FC<AddrButtonProp> = ({myAddress, handleMyAddress}) => {

  return (
    <div>
      <ButtonContainer>
        <div className="searchContainer" style={{ position: 'relative', width: '350px' }}>
          <input className="blueTextBox blueDefault"
            placeholder="도로명, 지번, 건물명 검색"
            value={myAddress}
            style={{ width: '100%', paddingRight: '40px', userSelect: 'none' }}
            onClick={() => openPostcodePopup(handleMyAddress)}
          />
          <AddressSearch buttonSize="30px" onComplete={handleMyAddress} />
        </div>
      </ButtonContainer>
      <GrayText paddingLeft="20px" fontWeight={500} fontSize="12px" style={{ paddingTop: '10px' }}>
        주소를 입력해주세요!!
        <br />
        주소를 입력하면 근처 병원을 쉽게 찾을 수 있어요
        <br />
        현재는 서울시만 지원됩니다 ㅠㅠ
        <br />
        <p className='font-black font-bold'> (※ 돋보기 아이콘을 눌러주세요!!) </p>
      </GrayText>
    </div>
  )

}
  
const AddressSearch: React.FC<AddressSearchProps> = ({ onComplete, buttonSize}) => {

  return (
    <button onClick={()=>openPostcodePopup(onComplete)}
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
