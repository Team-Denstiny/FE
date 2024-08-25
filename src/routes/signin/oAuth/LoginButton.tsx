import React from 'react';
import kakaoButton from '../../../assets/kakao-logo.png';
import naverButton from '../../../assets/naver-logo.png';
import './LoginButton.css';

interface ButtonProps {
    type: 'kakao' | 'naver';
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ type, onClick }) => {
    const logoSrc = type === 'kakao' ? kakaoButton : naverButton;

    return (
        <button className={`login-btn ${type}-round`} onClick={onClick}>
            <img src={logoSrc} />
        </button>
    );
};

export default Button;
