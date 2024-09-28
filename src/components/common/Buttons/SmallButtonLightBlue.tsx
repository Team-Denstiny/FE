import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import nextBarGray from '../../../assets/NextBar.png';

interface TapBarProps {
    name: string; 
    link: string;
    linkHandler?:() => void;
    fontBold ?: string | number;
}


const TextContainer = styled.div`
    margin-left: 20px;

`

const SmallButtonLightBlue: React.FC<TapBarProps> = ({name, link, linkHandler, fontBold=300}) => {
    const navigate = useNavigate(); 
    const handleBackClick = () => {
        if (linkHandler)
            linkHandler();
        else
            navigate(link); // 메인 페이지 이동
    };

    return (
        <div className="flex items-center justify-between pt-[10px] pb-[10px]">
        <button className="flex justify-between items-center w-full h-[40px] pr-[5px] pl-[5px] bg-blueWhite rounded-[10px]" onClick={handleBackClick}>
            <div className={`text-black font-noto font-${fontBold} text-[16px] text-blue`}> {name} </div>

            <img src={nextBarGray} 
                    alt="NextBar" 
                    className="relative w-[6px]" 
                    >
            </img>
        </button>
            
        </div>
    );
}

export default SmallButtonLightBlue;