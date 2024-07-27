import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 가져오기
import back from "../../assets/Back.png";

interface TapBarProps {
    text: string; // String 대신 string으로 타입 정의
}

const TapBar: React.FC<TapBarProps> = ({ text }) => {
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleBackClick = () => {
        navigate(-1); // 이전 페이지로 이동
    };

    return (
        <div className="w-[390px] h-[48px] flex items-center px-4 shadow-md relative"> {/* 드롭 섀도 및 relative 포지셔닝 추가 */}
            <img 
                src={back} 
                alt="Back" 
                className="cursor-pointer" 
                style={{ position: 'absolute', left: '20px', top: '13px' }} // 이미지 위치 조정
                onClick={handleBackClick} 
            />
            <div className="font-noto font-medium text-base " style={{ position: 'absolute', left: '175px', top: '14px' }}>
                {text}
            </div>
        </div>
    );
}

export default TapBar;
