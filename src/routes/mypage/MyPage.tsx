import React from "react";
import TapBarMyPage from "./TopBarMyPage";
import {
    BlackText,
    VerticalLine
} from '../../components/common/Utility'
import {
    USERID,
    ACCESS_TOKEN
} from "../../GlobalVariable"
import { PutInfo } from "./MyInfo";
import SmallButton from "./SmallButton";
import SmallButtonOnly from "./SmallButtonOnly";
import ProfileImg from "../../components/common/ProfileImg";

import test from "../../assets/test.jpg"


const MyPage: React.FC = () => {
    const userId = localStorage.getItem(USERID);
    const userToken = localStorage.getItem(ACCESS_TOKEN);

    const userName = "홍길동";
    const userBirth ="0000/00/00";
    const userNickname = "고길동";
    const userPhoneNumber = "010-1234-5678";
    const userAddress = "서울 강남구 봉은사 5길";
    const userImgUrl = test

    return (
        <div>
            <TapBarMyPage text="회원정보 수정" />

            <ProfileImg imageUrl={userImgUrl} />

            <BlackText fontSize="14px"> 회원 정보 </BlackText>                
            <div style={{marginBottom:'12px'}} />
            <PutInfo keyName="이름" answer={userName} />
            <PutInfo keyName="닉네임" answer={userNickname} />
            <PutInfo keyName="생년월일" answer={userBirth} />
            <PutInfo keyName="전화번호" answer={userPhoneNumber} />
            <PutInfo keyName="주소" answer={userAddress} />
            
            <VerticalLine style={{marginTop: '12px', marginBottom: '12px'}}/>

            <BlackText fontSize="14px"> 계정 정보 </BlackText>                
            <div style={{marginBottom:'12px'}} />
            <SmallButton name="이메일 변경" link="./changeEmail"></SmallButton>
            <SmallButton name="비밀번호 변경" link="../changePasswd"></SmallButton>

            <VerticalLine style={{marginTop: '12px', marginBottom: '12px'}}/>

            
            <div style={{marginBottom:'12px'}} />
            <SmallButtonOnly name="로그아웃" link="./logout" />      
            <SmallButtonOnly name="회원탈퇴" link="./delete" />      
        </div>
    )
}

export default MyPage;