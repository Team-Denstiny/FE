import React, { useEffect, useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { GET_MY_INFO } from "../../address";
import logo from "../../assets/main/logo.png";
import navimg1 from "../../assets/main/navimg.png";
import navimg2 from "../../assets/main/navimg2.png";
import navimg3 from "../../assets/main/navimg3.png";
import search from "../../assets/main/search.png";
import top from "../../assets/main/topimage.png";
import { TokenAxiosGet } from "../../components/common/GetWithToken/TokenGet";
import Navbar from "../../components/common/Navbar";
import MonthCalendar from "../../components/main/Calender";
import { USERID, ADDR, NAME, GU, USER_LONGITUDE, USER_LATITUDE, NICKNAME, ACCESS_TOKEN } from "../../GlobalVariable";
import logout_handler from "../../components/common/Logout";
import { prevLoad_LikeHospi, prevLoad_likePost } from "../../components/common/LocalStorageFunc/prevLoading";
import { jjimCheck } from "../../components/common/LocalStorageFunc/jjimCheck";
import { userClear } from "../../components/common/UserClear";
import SearchBar from "../../components/common/SarchBar";
import SearchBarMain from "../../components/common/SarchBarMain";
import GrayBar from "../../components/common/GrayBar";

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState<string | undefined>();
    const [logState, SetLogState] = useState(false);
    const [loadingState, setLoadingState] = useState(true);
    const defaultName = "로딩 중 ...";
    let userId = localStorage.getItem(USERID);

    const GetData = async () => {
        const savedName = localStorage.getItem(NAME);
        userId = localStorage.getItem(USERID);
        console.log("userId : " + userId);
        if (savedName != null && savedName != "") {
            setUserName(savedName);
            SetLogState(true);
            setLoadingState(true);
            console.log("1");
            return;
        }

        if (!userId) {
            SetLogState(false);
            setUserName(defaultName);
            setLoadingState(true);
            console.log("2");
            return;
        }
            
        
        console.log("3");

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
            SetLogState(true);
        }
        setLoadingState(true);
    }

    useEffect(() => {
        const getDataWrapper = async () => {
            await GetData();
            await prevLoad_LikeHospi();
            await prevLoad_likePost();
        }
        getDataWrapper();
    })

    if (!loadingState) {
        return(
        <div className="text-blue font-noto mt-[20px]">
            메인 페이지 로드중 ... 
        </div>
        )
    }

    return (
        <div>
            <div className="flex relative pt-6 pb-12">
                <img src={logo} style={{ position: 'absolute', left: '20px'}}  ></img>
                <img src={search} style={{ position: 'absolute', left: '346px'}} onClick={()=>navigate('/search')}></img>
            </div>
            <SearchBarMain />
            <img src={top}></img>
            <div className="flex relative gap-5 pt-6 pl-5 pb-12">
                <img src={navimg1} onClick={() => navigate('/search2?option=dist')}></img>
                <img src={navimg2} onClick={() => navigate("/search")}></img>
                <img src={navimg3} onClick={() => navigate('/search2?option=open')}></img>
            </div>

            {
                logState ? <div>
            <div className="flex justify-between font-noto font-bold text-base text-black pl-5 pr-5">
                <div className="font-noto font-bold text-base text-black pl-5"> {userName}님의 예약 일정 </div>
                    <button className="text-blue mr-[10px]" onClick={logout_handler}> 로그아웃</button>
            </div>
                    </div> : <div> </div>
            }
            {
                !logState? <div>
            <div className="flex justify-between font-noto font-bold text-base text-black pl-5 pr-5">
                <div className="font-noto font-bold text-base text-black pl-5"> 로그인을 해주세요 </div>
                    <button className="text-blue mr-[10px]" onClick={() => {
                        userClear();
                        window.location.href="/signin";
                    }}> 로그인</button>
            </div>
                    </div> : <div> </div>
            }
            
            <MonthCalendar/>
            <Navbar text="home"></Navbar>

        </div>
    )
}

export default HomePage;
