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
import {RetQuery} from "./SearchInterface";

interface SearchBarProps {
    retQuery?: RetQuery[];
    getMoreId ?: () => {};
}

const SearchRandering: FC<SearchBarProps> = ({retQuery, getMoreId}) => {
    return (
        <div>
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
        {
            getMoreId ? <div>
                </div>:<div> </div>
        }
        <div className='flex justify-center'>

            <button onClick={getMoreId} className='blueButton whiteDefault'>
                더 불러오기
            </button>
        </div>


        </div>
      
    );
}

export default SearchRandering;
