import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
    KAKAO_LOGIN,
    NAVER_LOGIN
} from '../../address';
import Button from './Button';

const LoginPage: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const status = queryParams.get('status');

        if (status == '200') {
            console.log("일반 로그인");
        }
        else if (status == '201') {
            console.log("주소 요청!");
        }
    }, [location]);

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