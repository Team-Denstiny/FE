import React from "react";
import { useNavigate } from "react-router-dom"; 
import back from "../../assets/Back.png";
import search from "../../assets/Search.png";

interface TapBarProps {
    text: string,
    searchHandler ?: () => void
}

const TapBarSearch: React.FC<TapBarProps> = ({ text, searchHandler}) => {
    const navigate = useNavigate(); 

    const handleBackClick = () => {
        navigate(-1); // 이전 페이지로 이동
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
            <div className="font-noto font-medium text-base" style={{ position: 'absolute', left: '154px', top: '14px', color: "black"}}>
                {text}
            </div>
            <img 
                src={search} 
                alt="search" 
                className="ml-auto mr-[25px] w-[25px]" 
                onClick={searchHandler} 
            />
        </div>
    );
}

export default TapBarSearch;
