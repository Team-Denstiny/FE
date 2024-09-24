import React, { useState } from 'react';
import ReviewRating from './ReviewRating';
import OptImg from "../../../assets/OptionImg.png";
import {
    GRAY, LIGHT_GRAY
}from "../../../Color";
import { VerticalLine } from '../LoginDesigns/Utility';
import './ReviewComment.css';
import GrayBar from '../GrayBar';

interface ReviewText{
    textday: string,
    text: string,
    tags:string[];
    UserIcon: string;
    name?: string;
}

const ReviewButton: React.FC<ReviewText> = ({textday, text, tags, UserIcon,name}) => {
    const [selectedRating, setSelectedRating] = useState<number>(0);
    const handleRatingChange = (rating: number) => {
        setSelectedRating(rating);
        console.log("별 수 : " + selectedRating);
    }
    return (
        <div className="pl-[20px] relative mt-[15px]">

            <div className='flex justify-between itmes-center'>
                <img src={UserIcon} className='relative w-[50px] h-[36px] t-[1px] l-[1px] mr-[10px]' />
            <div>
                <p className='font-[14px] font-noto text-black font-bold'>{name}</p>
                <p className="l-[40px] text-fontGray" style={{fontSize: '15px'}}>{textday} </p>
            </div>
            <button className="button" style={{marginLeft: 'auto'}} />

            </div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <ReviewRating totalStars={2} />
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

            <GrayBar />

        </div>
        </div>
    );
}

export default ReviewButton;
