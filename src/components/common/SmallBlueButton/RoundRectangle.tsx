import React from 'react';
import './RoundRectangle.css'; // CSS 파일을 임포트합니다.



interface ButtonProps {
    text?: string;
    width?: string;
    onClick?: () => void;
}

const RoundRectangle: React.FC<ButtonProps> = ({text, width, onClick}) => {
    return (
        <button className="styled-button" onClick={onClick} style={{ width: width}}>
            {text}
        </button>
    );
}

export default RoundRectangle;
