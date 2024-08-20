import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import logo from "../../assets/main/logo.png"
import search  from "../../assets/main/search.png"
import top from "../../assets/main/topimage.png"
import navimg1 from "../../assets/main/navimg.png"
import navimg2 from "../../assets/main/navimg2.png"
import navimg3 from "../../assets/main/navimg3.png"
import MonthCalendar from "../../components/main/Calender";

const HomePage: React.FC = () => {
    const userName = '배별하';
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex relative pt-6 pb-12">
                <img src={logo} style={{ position: 'absolute', left: '20px'}}  ></img>
                <img src={search} style={{ position: 'absolute', left: '346px'}} onClick={()=>navigate('/search')}></img>
            </div>
            <img src={top}></img>
            <div className="flex relative gap-5 pt-6 pl-5 pb-12">
                <img src={navimg1}></img>
                <img src={navimg2}></img>
                <img src={navimg3}></img>
            </div>
            <div className="font-noto font-bold text-base pl-5">
                {userName}님의 예약 일정
            </div>
            <MonthCalendar/>
            
            <Navbar text="home"></Navbar>
        </div>
    )
}

export default HomePage;
