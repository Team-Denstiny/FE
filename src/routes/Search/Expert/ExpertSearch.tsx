import React, { FC, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useSearchTermStore from '../../../store/useSearchTermStore';
import search from "../../assets/search/search.png";
import back from "../../assets/Back.png"
import de from "../../assets/search/delete.png"
import TapBar from '../../../components/common/TopBar';
import { BlackText, ButtonContainer, GrayText, VerticalLine } from '../../../components/common/LoginDesigns/Utility';
import BigButton from '../../../components/common/Buttons/BigButton';
import SmallButton from '../../../components/common/Buttons/SmallButton';
import OvalButton from '../../../components/common/Buttons/Button';
import { BLUE } from '../../../Color';



interface SearchBarProps {
    placeholder?: string;
}

const ExpertSearch: FC<SearchBarProps> = () => {
    const navigate = useNavigate();
    const [isToggledUp, setIsToggledUp] = useState(false);
    const [userPos, setUserPos] = useState("경기 수원시 영통동");
    const [userHouse, setUserHouse] = useState("서울시 강남구 논현동");

    const toggleColors = () => {
        setIsToggledUp(!isToggledUp);
    };
    
    const go_back = () => {
        navigate("/");
    };
    return (
        
        <div>
            <TapBar text='전문 병원 검색' />
            <br />
            <BlackText fontSize="14px"> 배준형님의 원하는 치과 진료를 선택하세요 </BlackText> 

            <div className='search-button-container'>
                <button className="blueButtonSmall blackDefault" style={{width:'138px'}}> 치과 전체 </button>
                <button className="blueButtonSmall blackDefault" style={{width:'138px'}}> 임플란트 </button>
                <button className="blueButtonSmall blackDefault" style={{width:'138px'}}> 충치치료 </button>
                <button className="blueButtonSmall blackDefault" style={{width:'138px'}}> 치아교정 </button>
                <button className="blueButtonSmall blackDefault" style={{width:'138px'}}> 사랑니 발치 </button>
                <button className="blueButtonSmall blackDefault" style={{width:'138px'}}> 치과 스케일링 </button>
                <button className="blueButtonSmall blackDefault" style={{width:'138px'}}> 잇몸치료 </button>
                <button className="blueButtonSmall blackDefault" style={{width:'138px'}}> 치아미백 </button>
                <button className="blueButtonSmall blackDefault" style={{width:'138px'}}> 라미네이트 </button>
                <button className="blueButtonSmall blackDefault" style={{width:'138px'}}> 기타 </button>
            </div>

            <br />
            <BlackText fontSize="14px"> 위치를 선택하세요 </BlackText> 
            <div className='search-button-container' style={{gap:'5px'}}>

                <button onClick={toggleColors} className={`toggle-button ${isToggledUp ? 'checked' : ''}`}>
                        현위치
                        <br />
                        <GrayText>{userPos}</GrayText>
                </button>
                <button onClick={toggleColors} 
                        className={`toggle-button ${!isToggledUp ? 'checked' : ''}`} >
                        집
                        <GrayText> {userHouse}</GrayText>
                </button>
            </div>

            <br />
            <br />
            <ButtonContainer >
                <OvalButton>
                    적용하기
                </OvalButton>
            </ButtonContainer>
        </div>
      
    );
}

export default ExpertSearch;
