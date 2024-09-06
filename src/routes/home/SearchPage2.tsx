import React, { FC, useState } from 'react';
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

interface SearchBarProps {
    placeholder?: string;
}

const SearchPage2: FC<SearchBarProps> = () => {
    

    return (
        <div>
            <SearchBar placeholder='검색어를 입력하세요' />
            <SettingBar location="서울 강남구" sorting="거리순" />
            <br />
            <ADButton 
                    name="통통플란트의원" 
                    state="진료중" 
                    tags={["임플란트", "충치치료", "치아교정"]} 
                    exitTime='23:50 접수마감' 
                    dist='500m'
                    id='12345' 
                    />

            <ADButton 
                    name="통통플란트의원" 
                    state="진료중" 
                    tags={["임플란트", "충치치료", "치아교정"]} 
                    exitTime='23:50 접수마감' 
                    dist='500m'/>
            <ADButton 
                    name="통통플란트의원" 
                    state="진료중" 
                    tags={["임플란트", "충치치료", "치아교정"]} 
                    exitTime='23:50 접수마감' 
                    dist='500m'/>

            
            






        </div>
      
    );
}

export default SearchPage2;
