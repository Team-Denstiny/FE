import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { USERID } from "../../GlobalVariable";
import TapBar from "../../components/common/TopBar";
import { BlackText, GrayLink, GrayText, VerticalLine } from "../../components/common/LoginDesigns/Utility";
import {BLUE} from "../../Color";
import { collapseToast } from "react-toastify";
import Map from "../../components/common/Map/map";
import { GET_MY_INFO, HOSPI_ALL_REVIEW, NO_INGA_DOMAIN } from "../../Address";
import axios from "axios";
import { getTodayDay } from "../../components/common/GetDay";

import HospiInfo from "./HospiInfo";
import ReviewCommentPage from "./Review/ReviewComment";
import { hospiInfoInterface, reviewInterface } from "./HospiInterface";
import { TokenAxiosDelete, TokenAxiosGet, TokenAxiosPost } from "../../components/common/GetWithToken/TokenGet";

import EmptyHeart from "../../assets/emptyHeart.png";
import FillHeart from "../../assets/fillHeart.png";

const Hospital: React.FC = () => {
    const navigate = useNavigate();
    const [reviewCnt, setReviewCnt] = useState<number>(0);
    const [hospiName, setHospiName] = useState<string>();
    const [hospiPos, setHospiPos] = useState<string>("서울 강남구 강남대로 432");
    const [subway, setSubway] = useState<string>("지하철 없음");

    const [breakTime, setBreakTime] = useState<string>("확인 필요");
    const [runTime, setRunTime] = useState<string>("09:00 ~ 18:00");

    const [xpos, setXpos] = useState<number>(37.5665);
    const [ypos, setYpos] = useState<number>(126.978);

    const { id } = useParams();
    const [hospiId, setHospiId] = useState<string|undefined> ();

    const [tags, setTags] = useState<string[]>(["임플란트", "충치치료", "치아교정", "사랑니발치"]);
    const today = new Date();

    const options: Intl.DateTimeFormatOptions = {weekday: 'long'};
    const dayOfWeek = getTodayDay() + "요일";


    const [isClicked, setIsClicked] = useState<number>(1);
    const [reviews, setReviews] = useState<reviewInterface[]>();

    const [retHospiInfo, setRetHospiInfo] = useState<hospiInfoInterface>();
    const [jjim, setJjim] = useState(false);

    const switchButton1 = () => {
        setIsClicked(1);
    }

    const switchButton2 = () => {
        setIsClicked(2);
    }

    const GetData = async () => {
        if (!id) {
            window.alert("id 오류");
            navigate(-1) ;
            return;
        }
        const url =NO_INGA_DOMAIN + "/" + id;
        console.log("find url : " + url);
        axios.get(url)
            .then(response => {
                const statusCode = response.status;
                if (statusCode === 200) {
                    console.log(response.data);
                    const body = response.data["body"];
                    
                    console.log("name : " + body["name"]);

                    setHospiName(body["name"]);
                    setHospiPos(body["addr"]);

                    const subwayCheck = body["subway_name"];
                    let subway_line;
                    if (subwayCheck) {
                        const subwayDist = body["dist"];
                        const subwayInfo = body["subway_info"];
                        
                        if (subwayDist && subwayInfo) {
                            subway_line = subwayInfo + " " + subwayCheck + " " + subwayDist + "m"
                            setSubway(subway_line);
                        }
                    }
                    const todayDay = getTodayDay(); // 오늘 날짜
                    const timeCheck = body["time_data_map"][todayDay];
                    let breakTimeCheck: string = "";
                    let runTimeCheck: string = "";
                
                    if (timeCheck) {
                        breakTimeCheck = timeCheck["break_time"];
                        if (breakTimeCheck) {
                            setBreakTime(breakTimeCheck[0] + " ~ " + breakTimeCheck[1]);
                        }

                        runTimeCheck = timeCheck["work_time"];
                        if (runTimeCheck) {
                            setRunTime(runTimeCheck[0] + " ~ " + runTimeCheck[1]);
                        }
                    }

                    if (!subway_line) {
                        subway_line = "지하철 없음";
                    }

                    setYpos(body["longitude"]);
                    setXpos(body["latitude"]);
                    setTags(body["category"]);
                    
                    setRetHospiInfo({
                        hospiName: body["name"],
                        hospiPos: body["addr"],
                        subway: subway_line,
                        breakTime: breakTimeCheck[0] + " ~ " + breakTimeCheck[1],
                        runTime: runTimeCheck[0] + " ~ " + runTimeCheck[1],
                        xpos: body["latitude"],
                        ypos: body["longitude"],
                        tags: body["category"],
                    });

                    console.log("debug : " + retHospiInfo?.tags);


                } else {
                    window.alert(id + " 는 없는 병원입니다.");
                    
                }
                console.log(response.status);
            })
            .catch(error => console.log(error));


            const review_url = HOSPI_ALL_REVIEW + "/" + id;
            const reviews_obj = await TokenAxiosGet(review_url, ".");

                    // reviews_obj를 ReviewType 배열로 변환
            const reviews_cvt: reviewInterface[] = reviews_obj.map((review: any) => ({
                id: review.id,
                hospital_id: review.hospital_id,
                date: review.date,
                nick_name: review.nick_name,
                user_id: review.user_id,
                content: review.content,
                image_url: review.image_url
            // 필요한 다른 속성들 추가
            }));
            console.log(reviews_obj[0].date);
            setReviews(reviews_cvt);
            setReviewCnt(reviews_cvt.length);
    }

    const jjimClick = async () => {

        console.log("hospiId : " + hospiId);
        const userId = await localStorage.getItem(USERID);
        
        if (jjim) {
            const deleteUrl = GET_MY_INFO + userId + "/bookmark/" + hospiId;
            console.log("bookmark delete : " + deleteUrl);
            const data = await TokenAxiosDelete(deleteUrl, ".");
            console.log("data : " + data);
            window.alert(hospiName + "병원이 찜(★) 목록에서 삭제되었습니다");
            setJjim(!jjim);
        }
        else {
            const bookmarkUrl = GET_MY_INFO + userId + "/bookmark";
            console.log("bookmark url : " + bookmarkUrl) ;
            const data = await TokenAxiosPost(bookmarkUrl, ".", {"hospital_id": hospiId});
            console.log("data : " + data);
            window.alert(hospiName + "병원이 찜(★) 목록에 추가되었습니다");
            setJjim(!jjim);
        }
    }


    const reviewDeleteHandler = async (reviewId: string) => {
        const userId = localStorage.getItem(USERID);
        const putUrl = GET_MY_INFO + userId + "/review/"+hospiId+"/"+reviewId;
        console.log("delete review Id : "  + reviewId);
        console.log("delete url : " + putUrl);
        
        const data = await TokenAxiosDelete(putUrl, ".");
        if (!data) {
            window.alert("댓글 삭제에 실패했습니다");

        }
        else {
            window.alert("댓글이 삭제되었습니다.");
            await GetData();
        }
      }

    useEffect(() => {
        if (id && xpos && ypos) {

            setHospiId(id);
            console.log("hospiId : " + hospiId);
            const GetDataWrapper = async () => {
                await GetData();
            };
            GetDataWrapper();

            console.log("reviews : " + reviews);
        }

    }, [id])

    if (!hospiName) {
        return (
            <div className='flex justify-center mt-[50px] font-noto text-bold font-[20px] text-blue h-[20px]'>
                병원 정보 가져오는 중...
            </div>
        )
    }
    return (
        <div>
            <TapBar text={hospiName} />

            <div className="flex-container pb-[10px] pt-[20px]">
                <div className="flex justify-between itemAlign-center pl-[20px] pr-[30px] text-black text-[20px] font-noto font-bold">
                    <div>{hospiName}</div>
                    <img src={jjim ? FillHeart : EmptyHeart} onClick={jjimClick} className="h-[20px] w-[20px]"/>
                </div>
                <GrayText fontSize="13px" paddingLeft="20px"> {hospiPos}</GrayText>
            </div>



            <div className="flex">
                <button className={`flex-1 h-14 font-noto border-b-4 rounded-none 
                    ${isClicked == 1 ? 'text-blue border-b-blue' : 'text-fontGray border-b-fontGray'}`} onClick={switchButton1}>
                병원정보
                </button>
                <button className={`flex-1 h-14 font-noto border-b-4 rounded-none 
                    ${isClicked == 2? 'text-blue border-b-blue' : 'text-fontGray border-b-fontGray'}`} onClick={switchButton2}>
                리뷰 ({reviewCnt})
                </button>
            </div>
            
            { isClicked == 1 ? 
                <HospiInfo hospiInfo={retHospiInfo} /> : <ReviewCommentPage 
                                                            reviews={reviews} 
                                                            hospiName={hospiName} 
                                                            hospiId={hospiId} 
                                                            reviewInReivewDeleteHandler={(reviews:string) => reviewDeleteHandler(reviews)}/>
            }

        </div>
    )
}

export default Hospital;
