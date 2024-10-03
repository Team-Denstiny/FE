import React from "react";
import { useNavigate } from "react-router-dom"; 
import home from "../../assets/homeIcon.png";

interface TapBarProps {
    text: string,
    clickHandler ?: () => void;
}

const TapBarHome: React.FC<TapBarProps> = ({ text,clickHandler }) => {
    const navigate = useNavigate(); 

    const handleBackClick = () => {
        if (!clickHandler)
            navigate("/"); // 이전 페이지로 이동
        else
            clickHandler();
    };

    return (
        <div className="w-[390px] h-[48px] flex items-center shadow-md relative"> 
            <img 
                src={home} 
                alt="Back" 
                className="cursor-pointer w-[20px]" 
                style={{ position: 'absolute', left: '20px', top: '13px' }} 
                onClick={handleBackClick} 
            />
            <div className="font-noto font-medium text-base" style={{ position: 'absolute', left: '154px', top: '14px', color: "black"}}>
                {text}
            </div>
        </div>
    );
}

export default TapBarHome;
