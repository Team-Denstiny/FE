import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { USERID } from "../../GlobalVariable";
import TapBar from "../../components/common/TopBar";
import { BlackText, GrayLink, GrayText, VerticalLine } from "../../components/common/LoginDesigns/Utility";
import {BLUE} from "../../Color";
import { collapseToast } from "react-toastify";
import Map from "../../components/common/Map/map";
import './home.css'
const HospiInfo: React.FC = () => {
    const navigate = useNavigate();
    const [hospiName, setHospiName] = useState<string>("똑똑플란트치과의원");
    const [hospiPos, setHospiPos] = useState<string>("서울 강남구 강남대로 432");
    const [subway, setSubway] = useState<string>("지하철 없음");

    const [breakTime, setBreakTime] = useState<string>("확인 필요");
    const [runTime, setRunTime] = useState<string>("09:00 ~ 18:00");

    const [xpos, setXpos] = useState<number>(37.5665);
    const [ypos, setYpos] = useState<number>(126.978);

    const { id } = useParams();

    const [tags, setTags] = useState<string[]>(["임플란트", "충치치료", "치아교정", "사랑니발치"]);
    const today = new Date();

    const options: Intl.DateTimeFormatOptions = {weekday: 'long'};
    const dayOfWeek = today.toLocaleDateString('ko-KR', options);

    const GetData = async () => {
        if (!id) {
            window.alert("id 오류");
            navigate(-1) ;
            return;
        }
        console.log("id " + id);
        /*
        const apiAddr = GET_MY_INFO + userId;
        const ret_name_obj = await TokenAxiosGet(apiAddr, "/");
        if (ret_name_obj["name"] == null)
            setUserName(defaultName);
        else
            setUserName(ret_name_obj["name"]);
        */
    }

    useEffect(() => {
        GetData();
    })

    return (
        <div>
            <TapBar text={hospiName} />

            <div className="left-flex-container pb-[10px] pt-[20px]">
                <BlackText fontSize="20px"> {hospiName} </BlackText>
                <GrayText fontSize="13px" paddingLeft="20px"> {hospiPos}</GrayText>
            </div>

            <div className="left-flex-container pb-[10px] pt-[20px]">
                <button className="blue-text-button" style={{top:'27px', right:'20px'}}>목록보기</button>
                <div style={{justifyContent:'left'}}>
                    <BlackText> 진료 시간</BlackText>
                </div>
                <div className="blue-border-box" > 
                    <div className="inline text-black pl-[10px] pt-[10px] pb-[10px]" style={{width:'175px'}}>
                        <b>{dayOfWeek}</b>
                        <br />
                        {runTime}
                    </div>
                    <div className="block text-black pl-[10px] pt-[10px] pb-[10px]" style={{width:'175px'}}>
                        <b> 휴게시간</b>
                        <br />
                        {breakTime}
                        
                    </div>
                </div>
            </div>

            <br />
            <VerticalLine style={{marginTop: '6px', marginBottom: '6px'}}/>

            <div className="left-flex-container pb-[10px] pt-[20px]">
                <button className="blue-text-button" style={{top:'27px', right:'20px'}}>길찾기</button>
                <div style={{justifyContent:'left'}}>
                    <BlackText> 병원 위치</BlackText>
                    <br />
                    <br />
                    <p className="default-text" style={{color:'black'}}> {hospiPos}</p>
                    <p className="default-text" style={{color:'gray', fontSize:'11px'}}> {subway}</p>
                </div>
                <Map latitude={xpos} longitude={ypos} />
            </div>

            <br />
            <VerticalLine style={{marginTop: '6px', marginBottom: '6px'}}/>

            <div className="left-flex-container pb-[10px] pt-[20px]"></div>
            <div style={{justifyContent:'left'}}>
                <BlackText> 진료 항목</BlackText>
            </div>

            <div className='w-[340px] flex relative pt-2'>
            {tags.map((term, index) => (
                <div key={index} className='flex pl-2 pr-1 pt-2 pb-2 h-[32px] items-center justify-center'>
                    <div className="blue-tag-button">{term}</div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default HospiInfo;
