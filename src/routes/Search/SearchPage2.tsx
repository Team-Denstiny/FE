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
import { FIND_DOMAIN, FIND_OPEN } from '../../Address';
import { TokenAxiosGet } from '../../components/common/GetWithToken/TokenGet';

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
    let get_url : string = "";
    const get_hospi_query = () => {
        const params = searchParams.get("open");
        if (params) {
            get_url = FIND_OPEN;
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

    const getMoreId = async () => {
        const last_id = retQuery[retQuery.length - 1]['id'];
        const url = get_hospi_query() + "?lastDentistId=" + last_id;
        //const new_query 
        console.log(url);
        await GetData(url);
    }

    useEffect(() => {
        const url = get_hospi_query();
        GetData(url);
    }, [searchParams]);
    
    if (retQuery === null) {
        return <div> 로딩 중 ... </div>
    }

    return (
        <div>
            <SearchBar placeholder='검색어를 입력하세요' />
            <SettingBar location="서울 강남구" sorting="거리순" />
            <br />
            {
                retQuery.map((item, index) => (
                    <ADButton 
                        name={item.name}
                        state="진료중"
                        tags={["임플란트", "충치치료"]}
                        exitTime={item.today_work[1] + ' 접수 마감'}
                        dist={String(item.dist)}
                        id={item.id}
                        imgLink={item.img}
                        subway={item.subway_name}
                        />
                ))
            }


        <button onClick={getMoreId} className='flex relative text-black'>
            더보기
        </button>
        </div>
      
    );
}

export default SearchPage2;
