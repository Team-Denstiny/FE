import React, {useState, ChangeEvent, FormEvent} from "react";
import TapBar from "../../components/common/TopBar";

import LoginPage from "./LoginPage";
import styled from "styled-components";
import MainText from "../../components/common/BlueText";
import {LOGIN_POST} from "../../address"
import { GrayLink, GrayText } from "../../components/common/GrayText";
import {TextContainer, 
    FindContainer, 
    MiddleTextContainer, 
    ButtonContainer
} from '../../components/common/Utility'
import '../../index.css'
import axios from "axios";


const SigninPage: React.FC = () => {
    const [formValues, setFormValues] = useState<{userEmail: string; userPasswd: string;}>({
        userEmail: '',
        userPasswd: ''
    });
    
    const handleChange = (Event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = Event.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };
    const letsLogin = async (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const headers = {
            'email': formValues.userEmail,
            'password': formValues.userPasswd,
        };

        axios.post(LOGIN_POST, headers, { withCredentials: true })
            .then(response => {
                const resp = response.data
                if (resp["result"] == 200) {

                }
                else {
                    console.log("Error");
                }
            })
            .catch(error => {
                console.error("Error : ", error)
            });
    };

    return (
        <div>
            <TapBar text="로그인" />

            <TextContainer> 

            <MainText fontWeight={400}>
                언제, 어디서든
                <br />
                치과 정보와 시간이 필요할 땐
            </MainText>

            <MainText fontSize="20px" fontWeight={'bold'}>
                모두의 치과 '덴스티니'
            </MainText>
            </TextContainer>

            <form onSubmit={letsLogin}>
            <ButtonContainer>
                <input className="blueTextBox blueDefault" placeholder="이메일" 
                    name="userEmail" value={formValues.userEmail} onChange={handleChange}/>
                <br />
                <input className="blueTextBox blueDefault" type="password" placeholder="비밀번호"
                    name="userPasswd" value={formValues.userPasswd} onChange={handleChange}/>
                <br />
                <button className="blueButton blueDefault" type="submit"> 로그인 </button>
            </ButtonContainer>
            </form>

            <FindContainer>
                <a className="grayLink grayText" href="/find-id">아이디 찾기</a>
                <div className="spacing grayText"> | </div> 
                <a className="grayLink grayText" href="/find-id">비밀번호 찾기</a>
            </FindContainer>

            <MiddleTextContainer>
                <div className="grayText">
                    SNS로 간편하게 시작하기
                </div>
            </MiddleTextContainer> 
            <LoginPage />
            <MiddleTextContainer>
                <div className="grayText"> 덴스티니가 처음이신가요? </div>
                <div className="spacing" />
                <GrayLink href="/signin/create" fontWeight={700} decoration="underline">회원가입 하기</GrayLink>
            </MiddleTextContainer> 

        </div>
    );
}

export default SigninPage;
