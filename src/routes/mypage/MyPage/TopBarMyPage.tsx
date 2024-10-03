import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/Back.png";

interface TapBarProps {
    text: string; 
}

const TapBarMyPage: React.FC<TapBarProps> = ({ text }) => {
    const navigate = useNavigate(); 

    const handleBackClick = () => {
        navigate("/profile"); // 이전 페이지로 이동
    };

    const handleModifyClick = () => {
        navigate('./modify');
    };

    return (
        <div className="w-[390px] h-[48px] flex items-center shadow-md relative"> 
            <img 
                src={back} 
                alt="Back" 
                className="cursor-pointer" 
                style={{ position: 'absolute', left: '20px', top: '13px' }} 
                onClick={handleBackClick} 
            />
            <div className="font-noto text-black font-medium text-base" style={{ position: 'absolute', left: '154px', top: '14px', color: "black"}}>
                {text}
            </div>

            <button className="absolute w-[26px] h-[24px] top-[14px] left-[345px] 
                font-bold text-[12px] bg-white text-denstiniyBlue border-none"
                onClick={handleModifyClick}>
                    수정
                </button>
        </div>
    );
}

export default TapBarMyPage;