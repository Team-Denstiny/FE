import React, { FC, useEffect, useState } from 'react';
import RoundRectangle from '../../../components/common/SmallBlueButton/RoundRectangle';
import ReviewButton from '../../../components/common/Reviewing/Review';
import SettingBar from '../../../components/search/Settingbar';
import UserIcon1 from "../../assets/UserImg.png";
import ReviewComment from '../../../components/common/ReviewComment/ReviewComment';
import BarImg from "../../assets/BarImg.png";
import axios from 'axios';
import { GET_MY_INFO, HOSPI_ALL_REVIEW } from '../../../Address';
import { reviewInterface } from '../HospiInterface';
import BigButton from '../../../components/common/Buttons/BigButton';
import { ToggleButton } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import ReviewInReview from './ReviewAndReview';
import GrayBar from '../../../components/common/GrayBar';
import { USERID } from '../../../GlobalVariable';
import { TokenAxiosDelete } from '../../../components/common/GetWithToken/TokenGet';
interface ReviewTexting {
    reviews: reviewInterface[] | undefined; 
    hospiName: string | undefined;
    hospiId:string | undefined;
    reviewInReivewDeleteHandler ?: (reveiwId:string) => void;
}

/*

            <ReviewButton textday={reviews[0].date}
                            text={reviews[0].content}
                            tags={["충치치료", "치아교정"]}
                            UserIcon = {UserIcon1} 
                            name={reviews[0].nick_name} />
*/
const ReviewCommentPage: FC<ReviewTexting> = ({reviews, hospiName, hospiId, reviewInReivewDeleteHandler}) => {
    const navigate = useNavigate();
    const goReview = () => {
        navigate("./review?n="+hospiName+"&id="+hospiId);
    }

    if (!reviewInReivewDeleteHandler) {
        reviewInReivewDeleteHandler = (tmp: string) => {}
    }

    if (!reviews || reviews.length == 0) {
        return (
        <div className='relative'>

            <div className='flex justify-center mt-[50px] font-noto text-bold font-[20px] text-blue h-[20px]'>
            리뷰가 비어있어요.... 
            <br />
            (´Д｀ﾟ)ﾟ(ﾟ´Д｀ﾟ)ﾟ(ﾟ´Д｀ﾟ)ﾟ(ﾟ´Д｀ﾟ)ﾟ
            <br />
            (´Д｀ﾟ)ﾟ(ﾟ´Д｀ﾟ)ﾟ(ﾟ´Д｀ﾟ)ﾟ(ﾟ´Д｀ﾟ)ﾟ
            <br />
            (´Д｀ﾟ)ﾟ(ﾟ´Д｀ﾟ)ﾟ(ﾟ´Д｀ﾟ)ﾟ(ﾟ´Д｀ﾟ)ﾟ
            <br />
            (´Д｀ﾟ)ﾟ(ﾟ´Д｀ﾟ)ﾟ(ﾟ´Д｀ﾟ)ﾟ(ﾟ´Д｀ﾟ)ﾟ
            <br />
            첫 리뷰를 달아주세요 !!

            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='flex justify-center'>
                <button className="blueButton whiteDefault" onClick={goReview}> 리뷰하기 </button>
            </div>
        </div>
        );
    }

    const [flags, setFlags] = useState<boolean[]>(new Array(reviews.length).fill(false));
    const reviewInReview = (reviewId: string, index:number) => {
        console.log("outer reviewId : " + reviewId + ", idx=" + index);
        setFlags(prevFlags =>  {
            const newFlags = [...prevFlags] ;
            newFlags[index] = true;
            return newFlags;
        }) ;
    }

    useEffect(() => { 
        console.log(reviews);
    });
    return (
        <div>
            {reviews.map((review, index, array) => (
                <div> 
                    <ReviewButton
                    key={review.id} // 각 컴포넌트에 고유한 키를 부여합니다.
                    textday={review.date}
                    text={review.content}
                    tags={["충치치료", "치아교정"]} // 필요한 태그를 여기에 적어주세요.
                    UserIcon={review.image_url}
                    name={review.nick_name}
                    reviewId={review.id}
                    index={index}
                    reviewInReivewHandler={(review:string, idx:number) => reviewInReview(review, idx)}
                    reviewInReivewDeleteHandler={(review:string) => reviewInReivewDeleteHandler(review)}
                    userId={review.user_id}
                    />
                    {
                        flags[index] ? <ReviewInReview hospiId={hospiId} reviewId={review.id}/> : <div> </div>
                    }
                    <GrayBar height='10px'/>
                </div>

            ))}

            <div className='flex justify-center'>
                <button className="blueButton whiteDefault" onClick={goReview}> 리뷰하기 </button>
            </div>
        </div>
    );
}

export default ReviewCommentPage;