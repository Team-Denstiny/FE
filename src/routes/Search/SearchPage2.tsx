import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useSearchTermStore from '../../store/useSearchTermStore';
import search from "../../assets/search/search.png";
import back from "../../assets/Back.png"
import de from "../../assets/search/delete.png"
import TapBar from "../../components/common/TopBar";

import "../../components/common/SmallBlueButton/RoundRectangle.css"
import RoundRectangle from '../../components/common/SmallBlueButton/RoundRectangle';

import ADButton from "../../components/common/BigVendingAD/VendingAD";
import SettingBar from '../../components/search/Settingbar';
import { VerticalLine } from '../../components/common/LoginDesigns/Utility';
import SearchBar from '../../components/common/SarchBar';
import { FIND_DIST, FIND_DOMAIN, FIND_OPEN, FIND_REVIEW } from '../../Address';
import { GU } from '../../GlobalVariable';
import { TokenAxiosGet, TokenAxiosPost } from '../../components/common/GetWithToken/TokenGet';
import { assertBinary } from '@babel/types';
import { useToastContainer } from 'react-toastify';
import LoginCheck from '../../components/common/CheckHandler/LoginCheck';

interface SearchBarProps {
    placeholder?: string;
}

interface RetQuery {
    id: string,
    name: string,
    addr: string,
    dong: string,
    gu: string,
    tele: string,
    img: string,
    subway_info: string,
    subway_name: string,
    dist: number,
    today_work: string[],
}

const SearchPage2: FC<SearchBarProps> = () => {
    
    const [searchParams] = useSearchParams();
    const [retQuery, setRetQuery] = useState<RetQuery[]>([]);
    const [viewGu, setViewGu] = useState<string>();
    const [viewOpt, setViewOpt] = useState<string>();
    let get_url : string = "";
    let getOpt : string = "";
    let gu: string|null = localStorage.getItem(GU);
    if (gu === null) {
        console.log("gu miss");
        gu = "강남구"
    }


    const get_hospi_query = async () => {
        const paramsTmp = searchParams.get("option");
        if (paramsTmp === null) console.log("error");

        console.log("params : " + paramsTmp);
        if (paramsTmp === "open") {
            getOpt = "open";
            get_url = FIND_OPEN;
            setViewOpt("관련순");
            console.log("open 검색");
        }
        else if (paramsTmp === "dist") {
            getOpt = "dist";
            get_url = FIND_DIST;
            console.log("dist 검색");
            setViewOpt("거리순");
        }
        else if (paramsTmp === "review") {
            getOpt = "review";
            get_url = FIND_REVIEW;
            console.log("review 검색");
            setViewOpt("별점순");
        }

        console.log("openParams : " + get_url);

        return get_url;

    }

    const GetData = async (url: string) => {
        const ret_data = await TokenAxiosGet(url, "/search2");
        if (url) {
            if (ret_data) {
                if (retQuery.length != 0) {
                    setRetQuery(prevQuery => [...prevQuery, ...ret_data]);
                }
                else
                    setRetQuery(ret_data);
            }
        }
        console.log(retQuery);
    };

    const PostData = async (url: string, headers?: object) => {
        const ret_data = await TokenAxiosPost(url, "/search2", headers);
        if (url) {
            if (ret_data) {
                if (retQuery.length != 0) {
                    setRetQuery(prevQuery => [...prevQuery, ...ret_data]);
                }
                else
                    setRetQuery(ret_data);
            }
        }
        console.log(retQuery);
    };

    const GetPostProcess = async (url: string) => {

            if (getOpt === "open")
                await GetData(url);
            else if (getOpt === "dist"){
                await PostData(url, {
                    "gu": gu,
                    "day": "월",
                    "local_time": "14:30:00"
                });
            }
            else {

            }
    };

    const getMoreId = async () => {
        const last_id = retQuery[retQuery.length - 1]['id'];

        const url = await get_hospi_query() + "?lastDentistId=" + last_id;
        //const new_query 
        console.log(url);
        await GetPostProcess(url);
    }

    useEffect(() => {
        const check = LoginCheck("회원 전용 기능입니다\n회원가입을 해주세요..", "false");
        const fetechInitalData = async() => {
            console.log("User Gu : " + gu);
            const url = await get_hospi_query();
            await GetPostProcess(url);
            setViewGu("서울 " + gu);
        }
        
        fetechInitalData();
        console.log("정렬 : " + getOpt);
    }, [searchParams, viewOpt]);
   
    if (!viewGu || !viewOpt) {
        return (
            <div>
                <SearchBar placeholder='검색어를 입력하세요' />
                <SettingBar location={"로드 중..."} sorting={"거리순"} />
                <div className="flex justify-center text-blue font-bold font-noto mt-[10px]"> 로딩 중 ... </div>
            </div>
        );
    }
    return (
        <div>
            <SearchBar placeholder='검색어를 입력하세요' />
            <SettingBar location={viewGu} sorting={viewOpt} />
            <br />
            
            {
                (!retQuery || retQuery.length == 0) ? 
                <div className="flex justify-center text-blue font-bold font-noto mt-[10px]"> 현재 조건을 만족하는 병원이 없습니다. </div>
                :
                retQuery.map((item, index) => (
                    <ADButton 
                        name={item.name}
                        state="진료중"
                        tags={["임플란트", "충치치료"]}
                        exitTime={item.today_work ? item.today_work[1] +" 접수 마감": "병원 제공 시간 없음"}
                        dist={String(item.dist)}
                        id={item.id}
                        imgLink={item.img}
                        subway={item.subway_name}
                        />
                ))
            }
        <div className='flex justify-center'>

            <button onClick={getMoreId} className='blueButton whiteDefault'>
                더 불러오기
            </button>
        </div>


        </div>
      
    );
}

export default SearchPage2;
