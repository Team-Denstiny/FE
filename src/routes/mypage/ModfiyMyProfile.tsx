import React from "react";
import TapBarMyPage from "./TopBarMyPage";
import Navbar from "../../components/common/Navbar";
import {
    USERID,
    ACCESS_TOKEN
} from "../../GlobalVariable"
import {
    BlackTextContainer,
    ButtonContainer,
    ButtonContainerSmall,
    BlackText
}from '../../components/common/Utility'
import BigButton from "./BigButton";
import TapBar from "../../components/common/TopBar";


const ModifyMyPage: React.FC = () => {
    const userId = localStorage.getItem(USERID);
    const userToken = localStorage.getItem(ACCESS_TOKEN);

    const userName = "홍길동";
    const email = "baejh724@gmail.com"
    const userNickname = "고길동"
    const userPhoneNumber = "010-1234-5678"
    const home = "서울 강남구 봉은사 5길";

    return (
        <div>
            <TapBar text="회원정보 수정" />

            <BlackTextContainer>
                <BlackText> 회원정보 </BlackText>
                <ButtonContainer>
                    <input className="blueTextBox blueDefault" placeholder={userName} />
                    <br />
                    <ButtonContainerSmall>
                        <input className="blueTextBox blueDefault" placeholder={userNickname} style={{width:'235px'}}/>
                        <div className="spacing" style={{marginLeft: '5px', marginRight:'5px'}}/>
                        <div className="blueButtonSmall blueDefault" style={{width: '105px'}}> 중복확인</div>
                    </ButtonContainerSmall>
                    <br />
                    <input className="blueTextBox blueDefault" placeholder="0000/00/00" />
                    <br />
                    <ButtonContainerSmall>
                        <input className="blueTextBox blueDefault" placeholder={userPhoneNumber} style={{width:'235px'}}/>
                        <div className="spacing" style={{marginLeft: '5px', marginRight:'5px'}}/>
                        <div className="blueButtonSmall blueDefault" style={{width: '105px'}}> 인증하기</div>
                    </ButtonContainerSmall>
                    <br />
                    <input className="blueTextBox blueDefault" placeholder={home} />
                </ButtonContainer>
            </BlackTextContainer>


            <ButtonContainer>
                <br /> <br />
                <button className="blueButton blueDefault"> 변경하기</button>
                <br /> <br />
            </ButtonContainer>
        </div>
    )
}

export default ModifyMyPage;