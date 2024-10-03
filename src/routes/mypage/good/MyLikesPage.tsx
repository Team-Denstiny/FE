import React, { useEffect, useRef, useState } from "react";
import {useNavigate, useLocation} from "react-router-dom";
import SettingBar from "../../../components/search/Settingbar";
import back from '../../assets/Back.png'
import remove from '../../assets/search/x.png'
import SearchBar from "../../../components/common/SarchBar";
import { GU, USER_LATITUDE, USER_LONGITUDE, USERID } from "../../../GlobalVariable";
import { FIND_HOSPITAL_BY_NAME, GET_MY_INFO } from "../../../Address";
import { TokenAxiosGet, TokenAxiosPost } from "../../../components/common/GetWithToken/TokenGet";
import { RetQuery } from "../../Search/SearchInterface";
import SearchRandering from "../../Search/SearchRander";
import HospiInfo from "../../Hospital/HospiInfo";
import Navbar from "../../../components/common/Navbar";
import LoginCheck from "../../../components/common/CheckHandler/LoginCheck";


const MyLikesPage: React.FC = () => {
    const navigate = useNavigate();
    const [viewGu, setViewGu] = useState<string>();
    const [viewOpt, setViewOpt] = useState<string>("거리순");
    const location = useLocation();
    const term = (new URLSearchParams(location.search)).get('q');
    const url = FIND_HOSPITAL_BY_NAME;
    const [retQueries, setRetQueries] = useState<RetQuery[]>();
    const [headers, setHeaders] = useState<object>();
    const [goCheck, setGoCheck] = useState(false);

    const GetHospital = async () => {
        const userId = localStorage.getItem(USERID);
        const url = GET_MY_INFO + userId + "/bookmark";
        const data = await TokenAxiosGet(url, ".");

        const hospi_sets: RetQuery[] = data.map((ret: any) => ({
            id: ret.id,
            name: ret.name,
            addr: ret.addr,
            dong: ret.dong,
            gu: ret.gu,
            tele: ret.tele,
            img: ret.img,
            subway_info: ret.subway_info,
            subway_name: ret.subway_name,
            dist: ret.dist,
            today_work: ret.today_work,
        }));
        
        setRetQueries(hospi_sets);
        hospi_sets.forEach((value, idx, array) => {
            console.log("name " + value.name);

        });

        setGoCheck(true);
    }


    useEffect(() => {
        const check = LoginCheck("회원 전용 기능입니다\n회원가입을 해주세요..", "false");
        setGoCheck(false);
        const fetechInitalData = async () => {
            const gu = await localStorage.getItem(GU);
            await GetHospital();
            setViewGu("서울 " + gu);
        }
        
        fetechInitalData();
    }, [term]);
 
    if (!viewGu || !goCheck) {
        return (
            <div className="">
                <SearchBar placeholder="검색어를 입력하세요" />
                <SettingBar location={viewGu} sorting={viewOpt} />
                <div className="flex justify-center text-blue font-bold font-noto mt-[10px]"> 로딩 중 ... </div>
                <Navbar text="heart"></Navbar>
            </div>
        );
    }

    if (!retQueries || retQueries.length == 0) {
        return(
            <div>
                <SearchBar placeholder="검색어를 입력하세요" />
                <SettingBar location={"로딩 중..."} sorting={"로딩 중..."} />
                <div className="flex justify-center text-blue font-bold font-noto mt-[10px]"> 찾으시는 병원이 없습니다</div>
            </div>
        )
    }

    return(
        <div className="relative">
            <SearchBar placeholder="검색어를 입력하세요" />
            <SettingBar location={viewGu} sorting={viewOpt} />
            <SearchRandering retQuery={retQueries}> </SearchRandering>
            <Navbar text="heart"></Navbar>
        </div>

    )
}

export default MyLikesPage;