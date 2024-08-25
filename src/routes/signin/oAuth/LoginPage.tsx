import React from 'react';
import { useLocation } from 'react-router-dom';
import {
    KAKAO_LOGIN,
    NAVER_LOGIN
} from '../../../Address';
import Button from './LoginButton';

const LoginPage: React.FC = () => {
    const location = useLocation();
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