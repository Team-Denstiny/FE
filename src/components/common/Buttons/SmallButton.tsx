import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import nextBarGray from '../../../assets/NextBarGray.png';

interface TapBarProps {
    name: string; 
    link: string;
    fontBold ?: string | number;
}


const TextContainer = styled.div`
    margin-left: 20px;

`

const SmallButton: React.FC<TapBarProps> = ({name, link, fontBold=300}) => {
    const navigate = useNavigate(); 
    const handleBackClick = () => {
        navigate(link); // 메인 페이지 이동
    };

    return (
        <button className="w-[390px] h-[35px] flex items-center justify-between relative"
            onClick={handleBackClick}
            style={{border: 'none'}}> 
            <TextContainer>
                <div className="blackText" style={{fontWeight:fontBold,fontSize:'13px'}}> {name} </div>

            </TextContainer>
                <img src={nextBarGray} 
                    alt="NextBar" 
                    className="cursor-pointer" 
                    style={{position:'relative', marginRight: '24px', width:'6px' }} 
                    >
                </img>
            
        </button>
    );
}

export default SmallButton;