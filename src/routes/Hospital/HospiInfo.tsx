import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { USERID } from "../../GlobalVariable";
import TapBar from "../../components/common/TopBar";
import { BlackText, GrayLink, GrayText, VerticalLine } from "../../components/common/LoginDesigns/Utility";
import {BLUE} from "../../Color";
import { collapseToast } from "react-toastify";
import Map from "../../components/common/Map/map";
import { NO_INGA_DOMAIN } from "../../Address";
import axios from "axios";
import { getTodayDay } from "../../components/common/GetDay";
import './hospital.css';
import { hospiInfoInterface } from "./HospiInterface";

interface hospiRet {
    hospiInfo: hospiInfoInterface | undefined;
};
const HospiInfo: React.FC<hospiRet> = ({hospiInfo}) => {
    if (!hospiInfo) {
        return <div>병원 정보를 불러오는 중입니다...</div>;
    }
    const hospiPos = hospiInfo.hospiPos;
    const subway = hospiInfo.subway;
    const breakTime = hospiInfo.breakTime;
    const runTime = hospiInfo.runTime;
    const xpos = hospiInfo.xpos;
    const ypos = hospiInfo.ypos;
    const tags = hospiInfo.tags;

    const dayOfWeek = getTodayDay() + "요일";

    console.log(xpos, ", ", ypos);

    useEffect(() => {
        console.log("debug : " + hospiInfo);
    })
    return (
        <div>
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

            <div className='w-[340px] flex flex-wrap relative pl-10'> 
                {tags.map((term, index) => (
                    <div key={index} className='flex-grow pl-1 pr-1 pt-2 pb-2 mt-2 h-[32px] flex items-center justify-center'>
                        <div className="blue-tag-button" style={{ flex: '1 1 auto', minWidth: '80px' }}>{term}</div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default HospiInfo;
