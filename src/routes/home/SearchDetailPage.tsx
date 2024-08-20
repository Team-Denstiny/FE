import React from "react";
import {useNavigate, useLocation} from "react-router-dom";
import SettingBar from "../../components/search/Settingbar";
import back from '../../assets/Back.png'
import remove from '../../assets/search/x.png'


const SearchDetail: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const term = (new URLSearchParams(location.search)).get('q')

    
    console.log(term)

    return(
        <div className="relative">
            <div className='h-[48px] flex items-center relative gap-1 pl-5 shadow'>
                <img src={back} className='h-[24px]' onClick={()=>navigate(-1)}></img>
                <div className="w-[322px] h-[32px] bg-searchgray rounded-full flex items-center">
                    <div
                        className="flex relative items-center h-[32px] w-[290px] bg-searchgray rounded-full py-2 px-4 outline-none text-base font-noto"
                    >{term}</div>
                    <img src={remove} onClick={()=>navigate('/search')}/>
                </div>
            </div>

            <SettingBar location="서울 강남구" sorting="거리순" />

            

        </div>

    )
}

export default SearchDetail;