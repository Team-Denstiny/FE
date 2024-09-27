import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GET_MY_INFO } from "../../Address";
import logo from "../../assets/main/logo.png";
import navimg1 from "../../assets/main/navimg.png";
import navimg2 from "../../assets/main/navimg2.png";
import navimg3 from "../../assets/main/navimg3.png";
import search from "../../assets/main/search.png";
import top from "../../assets/main/topimage.png";
import { TokenAxiosGet } from "../../components/common/GetWithToken/TokenGet";
import Navbar from "../../components/common/Navbar";
import MonthCalendar from "../../components/main/Calender";
import { USERID, ADDR, NAME, GU, USER_LONGITUDE, USER_LATITUDE, NICKNAME } from "../../GlobalVariable";

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState<string | undefined>("배별하(기본값)");
    const defaultName = "로그인 전";
    const userId = localStorage.getItem(USERID);

    const GetData = async () => {
        const savedName = localStorage.getItem(NAME);
        if (savedName != null && savedName != "") {
            setUserName(savedName);
            return;
        }

        if (!userId) {
            setUserName(defaultName);
            return;
        }

        const apiAddr = GET_MY_INFO + userId;
        const ret_name_obj = await TokenAxiosGet(apiAddr, "/");

        if (ret_name_obj["name"] == null)
            setUserName(defaultName);
        else {
            const addr:string = ret_name_obj["address"];
            const addrParts = addr.split(" ");
            console.log("주소 : " + addrParts[1]);
            const gu = addrParts[1];
            if (gu) {
                localStorage.setItem(GU, gu);
            } else {
                console.log("구로 끝나는 부분이 없습니다.");
            }
            localStorage.setItem(NAME, ret_name_obj["name"]);
            localStorage.setItem(ADDR, addr);
            localStorage.setItem(NICKNAME, ret_name_obj["nick_name"]);
            localStorage.setItem(USER_LONGITUDE, ret_name_obj["longitude"]);
            localStorage.setItem(USER_LATITUDE, ret_name_obj["latitude"]);
            setUserName(ret_name_obj["name"]);
            console.log(localStorage.getItem(GU));
        }
    }

    useEffect(() => {
        const getDataWrapper = async () => {
            await GetData();
        }
        getDataWrapper();
    })

    return (
        <div>
            <div className="flex relative pt-6 pb-12">
                <img src={logo} style={{ position: 'absolute', left: '20px'}}  ></img>
                <img src={search} style={{ position: 'absolute', left: '346px'}} onClick={()=>navigate('/search')}></img>
            </div>
            <img src={top}></img>
            <div className="flex relative gap-5 pt-6 pl-5 pb-12">
                <img src={navimg1} onClick={() => navigate('/search2?option=dist')}></img>
                <img src={navimg2}></img>
                <img src={navimg3} onClick={() => navigate('/search2?option=open')}></img>
            </div>
            <div className="font-noto font-bold text-base text-black pl-5">
                {userName}님의 예약 일정
            </div>
            <MonthCalendar/>
            
            <Navbar text="home"></Navbar>

        </div>
    )
}

export default HomePage;
