import axios from "axios";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_POST } from "../../Address";
import LoginCheck from "../../components/common/CheckHandler/LoginCheck";
import {
    ButtonContainer,
    FindContainer,
    MiddleTextContainer,
    TextContainer
} from '../../components/common/LoginDesigns/Utility';
import MainText from "../../components/common/TextContainer/BlueText";
import { GrayLink } from "../../components/common/TextContainer/GrayText";
import TapBar from "../../components/common/TopBar";
import {
    ACCESS_TOKEN,
    LOGIN_CHECK,
    USERID
} from "../../GlobalVariable";
import '../../index.css';
import LoginPage from "./oAuth/LoginPage";


const SigninPage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        LoginCheck();
    });


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
        const pass_check = false;

        const headers = {
            'email': formValues.userEmail,
            'password': formValues.userPasswd,
        };

        axios.post(LOGIN_POST, headers, {withCredentials: true})
            .then(response => {
                const resp_check = response.data["result"]
                if (resp_check) {
                    const resp = resp_check["result_code"];
                    const my_id = response.data["body"]["id"];
                    const my_access = response.headers["authorization"];
                    if (resp == 200) {
                        console.log("성공~ : " + my_id + ", 내 토큰 : " + my_access);
                        localStorage.setItem(LOGIN_CHECK, "true");
                        localStorage.setItem(ACCESS_TOKEN, my_access);
                        localStorage.setItem(USERID, my_id);
                    }
                } 
                else {
                    console.log("Error");
                    alert("로그인 오류!");
                }
                //toast.error("로그인 오류!");
            })
            .catch(error => {
                console.error("Error : ", error)
            });
        navigate("/");
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
            <ButtonContainer style={{marginTop: "50px"}}>
                <input className="blueTextBox blueDefault" placeholder="이메일" 
                    name="userEmail" value={formValues.userEmail} onChange={handleChange}/>
                <br />
                <input className="blueTextBox blueDefault" type="password" placeholder="비밀번호"
                    name="userPasswd" value={formValues.userPasswd} onChange={handleChange}/>
                <br />
                <button className="blueButton whiteDefault" type="submit"> 로그인 </button>
            </ButtonContainer>
            </form>

            <FindContainer style={{marginTop: "20px"}}>
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
