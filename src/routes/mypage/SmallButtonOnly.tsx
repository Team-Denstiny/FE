import React from "react";
import { useNavigate } from "react-router-dom"; 
import nextBarGray from '../../assets/NextBarGray.png'
import {
   denstinyBlue 
} from "../../color"
import search from "../../assets/Search.png";
import styled from "styled-components";

interface TapBarProps {
    name: string; 
    link: string;
}


const TextContainer = styled.div`
    margin-left: 20px;

`

const SmallButtonOnly: React.FC<TapBarProps> = ({name, link}) => {
    const navigate = useNavigate(); 
    const handleBackClick = () => {
        navigate(link); // 메인 페이지 이동
    };

    return (
        <button className="w-[390px] h-[35px] flex items-center justify-between relative"
            onClick={handleBackClick}
            style={{border: 'none'}}> 
            <TextContainer>
                <div className="blackText" style={{fontWeight:300,fontSize:'13px', color: 'gray'}}> {name} </div>

            </TextContainer> 
        </button>
    );
}

export default SmallButtonOnly;