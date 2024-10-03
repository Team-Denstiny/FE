import React, { useEffect, useRef, useState } from "react";
import {useNavigate, useLocation} from "react-router-dom";
import SettingBar from "../../components/search/Settingbar";
import back from '../../assets/Back.png'
import remove from '../../assets/search/x.png'
import SearchBar from "../../components/common/SarchBar";
import { GU, USER_LATITUDE, USER_LONGITUDE } from "../../GlobalVariable";
import { FIND_HOSPITAL_BY_NAME } from "../../Address";
import { TokenAxiosGet, TokenAxiosPost } from "../../components/common/GetWithToken/TokenGet";
import { RetQuery } from "./SearchInterface";
import SearchRandering from "./SearchRander";
import HospiInfo from "../Hospital/HospiInfo";


const SearchDetail: React.FC = () => {
    const navigate = useNavigate();
    const [viewGu, setViewGu] = useState<string>();
    const [viewOpt, setViewOpt] = useState<string>("거리순");
    const location = useLocation();
    const term = (new URLSearchParams(location.search)).get('q');
    const url = FIND_HOSPITAL_BY_NAME;
    const [retQueries, setRetQueries] = useState<RetQuery[]>();
    const [headers, setHeaders] = useState<object>();
    const [goCheck, setGoCheck] = useState(false);

    const postHospital = async () => {
        let userLong = await localStorage.getItem(USER_LONGITUDE);
        let userLati = await localStorage.getItem(USER_LATITUDE);
        console.log("url " + url);
        if (!userLong || !userLati) {
            userLong = '127.055481';
            userLati = '37.4785583';
        }

        console.log("userPos : " + userLong + ", " + userLati);
        
        const tmp_headers = {
            "latitude": userLati,
            "longitude": userLong,
            "name": term
        }
        setHeaders(tmp_headers);
        const data = await TokenAxiosPost(url, "/search?q=" + term, tmp_headers);

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

    const GetPostProcess = async () => {
        if (!retQueries) {
            console.log("빈 객체");
            return;
        }

        const last_id = retQueries[retQueries.length - 1]['id'];

        const more_url = url +  "?lastDentistId=" + last_id;
        const data = await TokenAxiosPost(more_url, "/search?q=" + term, headers);
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
        
        hospi_sets.forEach((value, idx, array) => {
            console.log("name " + value.name);

        });
        
        
        if (retQueries && hospi_sets && hospi_sets.length != 0) {
            setRetQueries(prevQuery => [...prevQuery, ...hospi_sets]);
        }
    };

    useEffect(() => {
        setGoCheck(false);
        const fetechInitalData = async () => {
            const gu = await localStorage.getItem(GU);
            await postHospital();
            setViewGu("서울 " + gu);
        }
        
        fetechInitalData();
    }, [term]);
 
    if (!viewGu || !goCheck) {
        return (
            <div>

                <SearchBar placeholder='검색어를 입력하세요' />
                <SettingBar location={"로드 중..."} sorting={"거리순"} />
                <div className="flex justify-center text-blue font-bold font-noto mt-[10px]"> 로딩 중 ... </div>
            </div>
        );
    }

    if (!retQueries || retQueries.length == 0) {
        return(
            <div>
                <SearchBar placeholder="검색어를 입력하세요" />
                <SettingBar location={viewGu} sorting={viewOpt} />
                <div className="flex justify-center text-blue font-bold font-noto mt-[10px]"> 찾으시는 병원이 없습니다</div>
            </div>
        )
    }

    return(
        <div className="relative">
            <SearchBar placeholder="검색어를 입력하세요" />
            <SettingBar location={viewGu} sorting={viewOpt} />
            <SearchRandering retQuery={retQueries} getMoreId={GetPostProcess}> </SearchRandering>
        </div>

    )
}

export default SearchDetail;