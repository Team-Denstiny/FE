import React, { useEffect, useState } from "react";
import {
    GET_MY_INFO
} from "../../../Address";
import DeafultImg from "../../../assets/defaultProfileMain.png";
import SmallButton from "../../../components/common/Buttons/SmallButton";
import {
    SmallButtonOnly,
    SmallButtonOnlyBack
} from "../../../components/common/Buttons/SmallButtonOnly";
import ProfileImg from "../../../components/common/LoginDesigns/ProfileImg";
import {
    BlackText,
    VerticalLine
} from '../../../components/common/LoginDesigns/Utility';
import {
    ADDR,
    NAME,
    NICKNAME,
    USER_LATITUDE,
    USER_LONGITUDE,
    USERID
} from "../../../GlobalVariable";
import { PutInfo } from "./MyInfo";
import TapBarMyPage from "./TopBarMyPage";

import { useNavigate } from "react-router-dom";
import LoginCheck from "../../../components/common/CheckHandler/LoginCheck";
import { TokenAxiosGet } from "../../../components/common/GetWithToken/TokenGet";
import logout_handler from "../../../components/common/Logout";


const MyPage: React.FC = () => {
    const navigate = useNavigate();
    const userId = localStorage.getItem(USERID);
    const myAddress = GET_MY_INFO + userId;

    const [name, setName] = useState<string|undefined>(undefined);
    const [nickname, setNickname] = useState<string|undefined>(undefined);
    const [phone, setPhone] = useState<string|undefined>(undefined);
    const [addr, setAddr] = useState<string|undefined>(undefined);
    const [img, setImg] = useState<string|undefined>(undefined);
    const [birth, setBirth] = useState<string|undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);

    const GetData = async () => {
        const myData = await TokenAxiosGet(myAddress, "/profile/mypage");
        setName(myData["name"]);
        setNickname(myData["nick_name"]);
        setPhone(myData["phone_number"]);
        setAddr(myData["address"]);
        setBirth(myData["birth_at"]);
        if (myData["profile_img"] == null)
            setImg(DeafultImg);
        else
            setImg(myData["profile_img"]);
        console.log(myData["name"]);

        
        localStorage.setItem(NAME, myData["name"]);
        localStorage.setItem(ADDR, myData["address"]);
        localStorage.setItem(USER_LONGITUDE, myData["longitude"]);
        localStorage.setItem(USER_LATITUDE, myData["latitude"]);
        localStorage.setItem(NICKNAME, myData["nick_name"]);

    };

    useEffect(() => {
        LoginCheck("로그인 부터 하쇼@@", "false");
        const getData = async () => {
            await GetData();
        }
        getData();
    }, [])


    if (!name) {
      return (
        <div className="flex justify-center text-blue font-bold font-noto mt-[100px]"> 로딩 중 ... </div>
      )
    }
    return (
        <div>
            <TapBarMyPage text="회원정보 수정" />

            <ProfileImg imageUrl={img} />

            <BlackText fontSize="14px"> 회원 정보 </BlackText>                
            <div style={{marginBottom:'12px'}} />
            <PutInfo keyName="이름" answer={name} />
            <PutInfo keyName="닉네임" answer={nickname} />
            <PutInfo keyName="생년월일" answer={birth} />
            <PutInfo keyName="전화번호" answer={phone} />
            <PutInfo keyName="주소" answer={addr} />
            
            <VerticalLine style={{marginTop: '12px', marginBottom: '12px'}}/>

            <BlackText fontSize="14px"> 계정 정보 </BlackText>                
            <div style={{marginBottom:'12px'}} />
            <SmallButton name="이메일 변경" link="./changeEmail"></SmallButton>
            <SmallButton name="비밀번호 변경" link="../changePasswd"></SmallButton>

            <VerticalLine style={{marginTop: '12px', marginBottom: '12px'}}/>

            
            <div style={{marginBottom:'12px'}} />
            <SmallButtonOnlyBack name="로그아웃" handler={logout_handler}/>
            <SmallButtonOnly name="회원탈퇴" link="./delete" />      
        </div>
    )
}

export default MyPage;