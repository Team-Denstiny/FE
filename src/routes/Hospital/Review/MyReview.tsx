import React, { useEffect, useState } from "react"
import TapBar from "../../../components/common/TopBar";
import { USERID } from "../../../GlobalVariable";
import { GET_MY_INFO } from "../../../Address";
import { TokenAxiosGet } from "../../../components/common/GetWithToken/TokenGet";
import ReviewInReview from "./ReviewAndReview";
import { reviewInterface } from "../HospiInterface";
import { LoadingText } from "../../../components/common/LoadingText";
import ReviewButton from "../../../components/common/Reviewing/Review";
import GrayBar from "../../../components/common/GrayBar";
import { useNavigate } from "react-router-dom";

const MyReview: React.FC  = () => {
    const navigate = useNavigate();
    const getUserId = localStorage.getItem(USERID);
    const [reviews, setReviews] = useState<reviewInterface[]>();
    const [mode, setMode] = useState(false);
    const [hospiId, setHospiId] = useState("");

    const getData = async () => {
        const url = GET_MY_INFO + getUserId + "/review";

        console.log("myReview url : " + url);
        const data = await TokenAxiosGet(url, ".");
        
        if (data) {
            console.log("myReviewData : " + data);
            const reviews_cvt: reviewInterface[] = data.map((review: any) => ({
                id: review.id,
                hospital_id: review.hospital_id,
                date: review.date,
                nick_name: review.nick_name,
                user_id: review.user_id,
                content: review.content,
                image_url: review.image_url,
                comment_count: review.comment_count
                // 필요한 다른 속성들 추가
            }));
            

            setReviews(reviews_cvt);
        }
    }

    useEffect(() => {
        const getDatas = async () => {
            await getData();
        }

        getDatas();
    }, []);

    if(!reviews) {
        return (
            <div>
                <TapBar text="댓글" />
                <LoadingText />
            </div>
        )
    }
    if (reviews.length == 0) {
            <div>
                <TapBar text="작성된 리뷰가 없습니다" />
                <LoadingText />
            </div>

    }

    return (
        <div>
            <TapBar text="댓글"/>
            {
                true ? <div>
                {
                reviews.map((review, idx, arr) => (
                <div className="">
                <div
                className=""
                onClick={() => {
                    console.log('click : ' + review.hospital_id);
                    setMode(true);
                    setHospiId(review.hospital_id);
                    navigate("/search/hospital/" + review.hospital_id);
                }}>
                    <ReviewButton
                    key={review.id} // 각 컴포넌트에 고유한 키를 부여합니다.
                    textday={review.date}
                    text={review.content}
                    tags={[]} // 필요한 태그를 여기에 적어주세요.
                    UserIcon={review.image_url}
                    name={review.nick_name}
                    reviewId={review.id}
                    index={-1}
                    reviewInReivewHandler={(review:string, idx:number) => reviewInReview(review, idx)}
                    reviewInReivewDeleteHandler={(review:string) => reviewDeleteHandler(review)}
                    userId={review.user_id}
                    />
                </div>
                <GrayBar />
                </div>
                ))
                }
                </div> : <div> </div>
            }

        </div>
    )    
}

export default MyReview;