import React from "react";
import TapBarMyPage from "./TopBarMyProfile";
import Navbar from "../../components/common/Navbar";
import {
    VerticalLine,
    BlackText
} from '../../components/common/Utility'
import {
    USERID,
    ACCESS_TOKEN
} from "../../GlobalVariable"
import SmallButton from "./SmallButton";
import BigButton from "./BigButton";
import TapBarMyProfile from "./TopBarMyProfile";
import test from "../../assets/test.jpg"

const Profile: React.FC = () => {
    const userId = localStorage.getItem(USERID);
    const userToken = localStorage.getItem(ACCESS_TOKEN);
    const userName = "홍길동";
    const userProfileImg = test;
    const email = "baejh724@gmail.com"

    return (
        <div>
            <TapBarMyProfile text="마이페이지"></TapBarMyProfile>
            <BigButton imgUrl={userProfileImg} name={userName} email={email}></BigButton>
            <div style={{margin: '24px'}} />

            <BlackText fontSize="16px" style={{marginBottom: '-10px'}}> 병원 </BlackText>                
            <SmallButton name="방문 병원" link="../myVisitHospital"></SmallButton>
            <SmallButton name="상담 병원" link="../myConsult"></SmallButton>
            <SmallButton name="예약 병원" link="../myReserve"></SmallButton>
            <SmallButton name="내가 작성한 리뷰" link="../myReview"></SmallButton>
            <VerticalLine style={{marginTop: '12px', marginBottom: '12px'}}/>


            <BlackText fontSize="16px" style={{marginBottom: '-10px'}}> 캘린더 </BlackText>                
            <SmallButton name="이거슨 달력이에요" link="../myScrap"></SmallButton>
            <VerticalLine style={{marginTop: '12px', marginBottom: '12px'}}/>

            <BlackText fontSize="16px" style={{marginBottom: '-10px'}}> 커뮤니티 </BlackText>                
            <SmallButton name="내가 작성한 글" link="../myWrite"></SmallButton>
            <SmallButton name="좋아요" link="../myLike"></SmallButton>
            <SmallButton name="댓글" link="../myTalk"></SmallButton>
            <Navbar text="abs" />
        </div>
    )
}

export default Profile;