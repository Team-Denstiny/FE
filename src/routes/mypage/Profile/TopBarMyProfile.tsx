import React from "react";
import { useNavigate } from "react-router-dom";
import search from "../../../assets/Search.png";

interface TapBarProps {
    text: string; 
}

const TapBarMyProfile: React.FC<TapBarProps> = ({ text }) => {
    const navigate = useNavigate(); 

    const handleBackClick = () => {
        navigate("/"); // 메인 페이지 이동
    };

    return (
        <div className="w-[390px] h-[48px] flex items-center shadow-md relative"> 
            <img 
                src={search} 
                alt="Search" 
                className="cursor-pointer" 
                style={{ position: 'absolute', left: '346px', top: '13px', width: '24px' }} 
                onClick={handleBackClick} 
            />
            <div className="font-noto text-[14px] font-bold text-black" style={{ position: 'absolute', left: '24px', top: '14px'}}>
                {text}
            </div>
        </div>
    );
}

export default TapBarMyProfile;