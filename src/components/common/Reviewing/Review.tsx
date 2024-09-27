import React, { useState } from 'react';
import ReviewRating from './ReviewRating';
import OptImg from "../../../assets/OptionImg.png";
import {
    GRAY, LIGHT_GRAY
}from "../../../Color";
import { VerticalLine } from '../LoginDesigns/Utility';
import './ReviewComment.css';
import GrayBar from '../GrayBar';
import DefaultImg from "../../../assets/defaultProfile.png";
import SortingModal from '../SortingModal';
import ReviewModal from '../Modal/ReviewModal';
import { flushSync } from 'react-dom';
import { GET_MY_INFO } from '../../../Address';
import { USERID } from '../../../GlobalVariable';
import { useNavigate } from 'react-router-dom';

interface ReviewText{
    textday: string,
    text: string,
    tags:string[];
    UserIcon: string;
    name?: string;
    reviewId?: string;
    index?:number;
    reviewInReivewHandler ?: (reveiwId:string, idx:number) => void;
    reviewInReivewDeleteHandler ?: (reveiwId:string) => void;
    userId?:number;
}

const ReviewButton: React.FC<ReviewText> = ({textday, text, tags, UserIcon,name, 
                    reviewId, index, reviewInReivewHandler, reviewInReivewDeleteHandler, userId}) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    let options = (index != undefined && index >= 0) ? ["댓글달기", "신고하기"] : ["신고하기"];
    const getUserId = localStorage.getItem(USERID);
    if (Number(getUserId) == userId) {
        options.push("삭제하기");
    }

    const buttonClick = () => {
        setIsOpen(true);
    }

    const selectFunc = (opt : string) => {
        setIsOpen(false);

        if (opt === "댓글달기") {
            const reviewInReviewUrl = GET_MY_INFO + USERID + "/review-comment/" + reviewId;
            console.log("Modal 선택됨 : " + opt +", urls : " + reviewInReviewUrl);
            console.log("index = " + index);
            if (reviewInReivewHandler && reviewId && index !== undefined) {
                reviewInReivewHandler(reviewId, index);
            }
            //navigate("./review?")
        } 
        else if (opt === "삭제하기") {
            console.log("리뷰 삭제하기 : " + reviewId);
            if (reviewInReivewDeleteHandler && reviewId) {
                reviewInReivewDeleteHandler(reviewId);
            }
        }
   } 

    const [selectedRating, setSelectedRating] = useState<number>(0);
    const handleRatingChange = (rating: number) => {
        setSelectedRating(rating);
        console.log("별 수 : " + selectedRating);
    }
    return (
        <div className={`pl-[${(index != undefined && index >= 0) ? '20px' : '40px'}] relative mt-[15px]`}>

            <div className='flex justify-between' style={{alignItems:'center'}}>
                <img src={UserIcon ? UserIcon : DefaultImg} className='relative rounded-full object-cover w-[50px] h-[50px] t-[1px] l-[1px] mr-[10px]' />
            <div>
                <p className='font-[14px] font-noto text-black font-bold'>{name}</p>
                <p className="l-[40px] text-fontGray" style={{fontSize: '15px'}}>{textday} </p>
            </div>

            <button className="button ml-auto mr-[15px]" onClick={buttonClick}/> 
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <ReviewRating totalStars={5} />
            </div>


            <div>
            <p className="mt-[10px] mb-[10px] font-noto text-fontGray text-[13px]">{text} </p>
            </div>
            <div className='w-[340px] gap-2 flex relative pr-2 flex-wrap'>
          {tags.map((term, index) => (
              <div key={index} className='flex pl-1 pr-1 pt-1 pb-1 h-[16px] items-center justify-center'
                style={{backgroundColor: LIGHT_GRAY, borderRadius: '4px'}}>

                  <div className='font-noto text-base text-textgray' 
                        style={{fontSize:'11px', color: GRAY}}>{term}</div>
              </div>
          ))}
            <ReviewModal options={options} select={selectFunc} isOpen={isOpen} sort='신고하기'/>

        </div>
        </div>
    );
}

export default ReviewButton;
