import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface TapBarProps {
    name: string; 
    link: string;
}


const TextContainer = styled.div`
    margin-left: 20px;

`

export const SmallButtonOnly: React.FC<TapBarProps> = ({name, link}) => {
    const navigate = useNavigate(); 

    const handleFrontClick = () => {
        navigate(link); // 메인 페이지 이동
    };

    return (
        <button className="w-[390px] h-[35px] flex items-center justify-between relative"
            onClick={handleFrontClick}
            style={{border: 'none'}}> 
            <TextContainer>
                <div className="blackText" style={{fontWeight:300,fontSize:'13px', color: 'gray'}}> {name} </div>

            </TextContainer> 
        </button>
    );
}

interface TapBarPropsBack {
    name: string,
    handler: () => any
};

export const SmallButtonOnlyBack: React.FC<TapBarPropsBack> = ({name, handler}) => { 
    return (
        <button className="w-[390px] h-[35px] flex items-center justify-between relative"
            onClick={handler}
            style={{border: 'none'}}> 
            <TextContainer>
                <div className="blackText" style={{fontWeight:300,fontSize:'13px', color: 'gray'}}> {name} </div>

            </TextContainer> 
        </button>
    );

}