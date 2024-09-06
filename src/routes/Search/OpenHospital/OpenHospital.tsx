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

const OpenHospital: FC<SearchBarProps> = () => {
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
            <TapBar text='위치 선택' />


            <br />
            <BlackText fontSize="14px"> 위치를 선택하세요 </BlackText> 
            <div className='search-button-container' >

                <button onClick={toggleColors} className={`toggle-button ${isToggledUp ? 'checked' : ''}`}>
                        현위치
                        <br />
                        <GrayText>{userPos}</GrayText>
                </button>
                <button onClick={toggleColors} className={`toggle-button ${!isToggledUp ? 'checked' : ''}`}>
                        집
                        <GrayText> {userHouse}</GrayText>
                </button>
            </div>

            <br />
            <br />
            <BlackText fontSize="14px"> 위치를 선택하세요 </BlackText> 
            
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

export default OpenHospital;
