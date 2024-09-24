import React, { FC, useEffect, useState } from 'react';
import RoundRectangle from '../../components/common/SmallBlueButton/RoundRectangle';
import ReviewButton from '../../components/common/Reviewing/Review';
import SettingBar from '../../components/search/Settingbar';
import UserIcon1 from "../../assets/UserImg.png";
import ReviewComment from '../../components/common/ReviewComment/ReviewComment';
import BarImg from "../../assets/BarImg.png";
import axios from 'axios';
import { HOSPI_ALL_REVIEW } from '../../Address';
import { reviewInterface } from './HospiInterface';
interface ReviewTexting {
    reviews: reviewInterface[] | undefined; 
}

/*

            <ReviewButton textday={reviews[0].date}
                            text={reviews[0].content}
                            tags={["충치치료", "치아교정"]}
                            UserIcon = {UserIcon1} 
                            name={reviews[0].nick_name} />
*/
const ReviewCommentPage: FC<ReviewTexting> = ({reviews}) => {

    if (!reviews || reviews.length == 0) {
        return (
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
        );
    }


    useEffect(() => { 
        console.log(reviews);
    });
    return (
        <div>
            {reviews.map((review) => (
                <ReviewButton
                    key={review.id} // 각 컴포넌트에 고유한 키를 부여합니다.
                    textday={review.date}
                    text={review.content}
                    tags={["충치치료", "치아교정"]} // 필요한 태그를 여기에 적어주세요.
                    UserIcon={UserIcon1}
                    name={review.nick_name}
                />
            ))}
        </div>
    );
}

export default ReviewCommentPage;