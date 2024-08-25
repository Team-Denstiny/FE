import React, { useEffect, useState } from "react";
import { GET_MY_INFO } from "../../../address";
import DefaultImg from "../../../assets/defaultProfile.png";
import { TokenAxiosGet } from "../../../components/common/GetWithToken/TokenGet";
import LoginCheck from "../../../components/common/LoginCheck";
import Navbar from "../../../components/common/Navbar";
import {
  BlackText,
  VerticalLine
} from '../../../components/common/Utility';
import {
  ACCESS_TOKEN,
  USERID
} from "../../../GlobalVariable";
import SmallButton from "../MyPage/SmallButton";
import TapBarMyProfile from "../TopBarMyProfile";
import BigButton from "./BigButton";

const Profile: React.FC = () => {
    const userId = localStorage.getItem(USERID);
    const userToken = localStorage.getItem(ACCESS_TOKEN);
    const apiAddress = GET_MY_INFO + userId;

    const [userName, setUserName] = useState<string | undefined>(undefined);
    const [profileImg, setProfileImg] = useState<string | undefined>(undefined);
    const [email, setEmail] = useState<string | undefined>(undefined);
    const GetData = async () => {
      const ret_objs = await TokenAxiosGet(apiAddress, "/profile");
      setUserName(ret_objs["name"]);
      if (ret_objs["profile_img"] == null)
        setProfileImg(DefaultImg);
      else
        setProfileImg(ret_objs["profile_img"]);
      setEmail(ret_objs["email"]);

      console.log("name : " + userName);
    }; 

    useEffect(() => {
      console.log("debug : my token : " + userToken);
      LoginCheck("로그인 부터 하쇼", "false");
      GetData();
    });
    
    return (
        <div>
            <TapBarMyProfile text="마이페이지"></TapBarMyProfile>
            <BigButton imgUrl={profileImg} name={userName} email={email}></BigButton>
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