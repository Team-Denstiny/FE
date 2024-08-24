import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logout_handler from "../../components/common/Logout";

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
    link: string,
};

export const SmallButtonOnlyBack: React.FC<TapBarPropsBack> = ({name, link}) => {
    const navigate = useNavigate();

    const onClickHandler = () => {
        logout_handler(link);
        navigate("/");
    };

    return (
        <button className="w-[390px] h-[35px] flex items-center justify-between relative"
            onClick={onClickHandler}
            style={{border: 'none'}}> 
            <TextContainer>
                <div className="blackText" style={{fontWeight:300,fontSize:'13px', color: 'gray'}}> {name} </div>

            </TextContainer> 
        </button>
    );

}