import React from 'react';
import Button from './Button';
import {
    NAVER_LOGIN,
    KAKAO_LOGIN
} from '../../address'

const LoginPage: React.FC = () => {

    const handleKakaoLogin = () => {
        window.location.href = KAKAO_LOGIN;
    };

    const handleNaverLogin = () => {
        window.location.href = NAVER_LOGIN;
    };

    return (

        <div className="login-container">
            <Button type="kakao" onClick={handleKakaoLogin} />
            <Button type="naver" onClick={handleNaverLogin} />
        </div>
    );
};

export default LoginPage;