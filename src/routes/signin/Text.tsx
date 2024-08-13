import React from "react";
import { useNavigate } from "react-router-dom"; 
import back from "../../assets/Back.png";

interface TextProps {
    text: string; 
}

const font_style=` {
    font-family: Noto Sans KR,
    font-size: 20px,
    font-weight: 400,
    line-height: 34px,
    text-align: left
}`

const font_style_bold=`
    font-family: Noto Sans KR;
    font-size: 20px;
    font-weight: 700;
    line-height: 34px;
    text-align: left;
`
const TapBar: React.FC<TextProps> = ({text}) => {
    return (

        <div className="font-noto font-medium text-base" style={{ position: 'absolute', left: '175px', top: '14px', color: "black" }}>
            {text}
        </div>
    );
}

export default TapBar;
