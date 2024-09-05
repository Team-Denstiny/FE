import React, { FC, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useSearchTermStore from '../../../store/useSearchTermStore';
import search from "../../assets/search/search.png";
import back from "../../assets/Back.png"
import de from "../../assets/search/delete.png"
import TapBar from '../../../components/common/TopBar';
import { BlackText, ButtonContainer, GrayText } from '../../../components/common/LoginDesigns/Utility';
import BigButton from '../../../components/common/Buttons/BigButton';
import SmallButton from '../../../components/common/Buttons/SmallButton';
import OvalButton from '../../../components/common/Buttons/Button';



interface SearchBarProps {
    placeholder?: string;
}

const ExpertSearch: FC<SearchBarProps> = () => {
    const navigate = useNavigate();
    const [isToggledUp, setIsToggledUp] = useState(false);
    const [userPos, setUserPos] = useState("서울 강남구 봉은사 5길");
    const [userHouse, setUserHouse] = useState("우리 집!");

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
            <BlackText fontSize="14px"> 원하는 치과 진료를 선택하세요 </BlackText> 

            <div className='search-button-container' style={{paddingTop: '20px'}}>
                <button className="blueButtonSmall blueDefault" style={{width:'138px'}}> 치과 전체 </button>
                <button className="blueButtonSmall blueDefault" style={{width:'138px'}}> 임플란트 </button>
            </div>
            <div className='search-button-container'>
                <button className="blueButtonSmall blueDefault" style={{width:'138px'}}> 충치치료 </button>
                <button className="blueButtonSmall blueDefault" style={{width:'138px'}}> 치아교정 </button>
            </div>
            <div className='search-button-container'>
                <button className="blueButtonSmall blueDefault" style={{width:'138px'}}> 사랑니 발치 </button>
                <button className="blueButtonSmall blueDefault" style={{width:'138px'}}> 치과 스케일링 </button>
            </div>
            <div className='search-button-container'>
                <button className="blueButtonSmall blueDefault" style={{width:'138px'}}> 잇몸치료 </button>
                <button className="blueButtonSmall blueDefault" style={{width:'138px'}}> 치아미백 </button>
            </div>
            <div className='search-button-container' style={{paddingBottom: '20px'}}>
                <button className="blueButtonSmall blueDefault" style={{width:'138px'}}> 라미네이트 </button>
                <button className="blueButtonSmall blueDefault" style={{width:'138px'}}> 기타 </button>
            </div>

            <br />
            <BlackText fontSize="14px"> 위치를 선택하세요 </BlackText> 
            <div className='search-button-container' style={{paddingBottom: '0px'}}>

                <button onClick={toggleColors} className={`toggle-button ${isToggledUp ? 'checked' : ''}`}>
                        현위치
                        <br />
                        <GrayText>{userPos}</GrayText>
                </button>
            </div>
            <div className='search-button-container' style={{paddingBottom: '20px', justifyContent:'center'}}>
                <button onClick={toggleColors} className={`toggle-button ${!isToggledUp ? 'checked' : ''}`}>
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
