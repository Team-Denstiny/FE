import React from "react";
import { useNavigate } from "react-router-dom"; 
import nextBar from '../../assets/NextBar.png'
import {
   denstinyBlue 
} from "../../color"
import search from "../../assets/Search.png";
import styled from "styled-components";
import ProfileImg from "../../components/common/ProfileImg";

interface TapBarProps {
    name: string; 
    email: string;
    imgUrl: string;
}

const ButtonContainer = `

`

const TextContainer = styled.div`
    position: absolute;
    width: 124px;
    height: 42px;
    top: 25px;
    left: 90px;
    text-align: left;
`

const BigButton: React.FC<TapBarProps> = ({name, email, imgUrl}) => {
    const navigate = useNavigate(); 
    const handleBackClick = () => {
        navigate("./mypage"); // 메인 페이지 이동
    };

    return (
        <button className="w-[390px] h-[104px] flex items-center shadow-md justify-between relative"
            onClick={handleBackClick}> 
            <ProfileImg className="image-container-big" imageUrl={imgUrl}/>
            <TextContainer>
                <div className="blackText" style={{lineHeight:'20px' ,fontWeight: 700, font:'16px'}}> {name} </div>
                <br />
                <div className="grayText" style={{lineHeight:'20px', font: '13px'}}> {email} </div>
            </TextContainer>
            
            <img src={nextBar} 
                alt="NextBar" 
                className="cursor-pointer" 
                style={{ position: 'relative', width: '10px', marginRight:'15px'}} 
                >
            </img>
        </button>
    );
}

export default BigButton;