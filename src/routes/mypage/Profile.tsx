import axios from "axios";
import React from "react";
import { GET_MY_INFO } from "../../address";
import test from "../../assets/test.jpg";
import Navbar from "../../components/common/Navbar";
import {
    BlackText,
    VerticalLine
} from '../../components/common/Utility';
import {
    ACCESS_TOKEN,
    USERID
} from "../../GlobalVariable";
import BigButton from "./BigButton";
import SmallButton from "./SmallButton";
import TapBarMyProfile from "./TopBarMyProfile";

const Profile: React.FC = () => {
    const userId = localStorage.getItem(USERID);
    const userToken = localStorage.getItem(ACCESS_TOKEN);
    const apiAddress = GET_MY_INFO + userId;
    const userName = "홍길동";
    const userProfileImg = test;
    const email = "baejh724@gmail.com"
    axios.get(apiAddress, {withCredentials: true })
      .then(response => {
        const status = response.data['result']['result_code']
        if (status == 200) {
          const token = response.headers['authorization']; // 응답 헤더에서 토큰을 추출
        }
      })
      .catch(error => {
        console.error('Error fetching auth token:', error);
      });

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