import React from 'react';
import './Review.css'; 
import UserIcon from "../../../assets/UserImg.png";
import ReviewRating from './ReviewRating';
import {
    GRAY, LIGHT_GRAY
}from "../../../Color";

interface ReviewText{
    textday: string,
    text?: string,
    tags:string[];
}

const ReviewButton: React.FC<ReviewText> = ({textday, text, tags}) => {
    return (
        <div>
            <div style={{ display: 'flex'}}>
            <img src={UserIcon} style={{
            position: 'relative',
            width:'70px', 
            height:'70px',
            top:'1px',
            left: '1px',
            marginRight: '10px'}} />
            <p className="Day-text" style={{fontSize: '15px'}}><br /><br />{textday} </p>
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <ReviewRating totalStars={5} />
            </div>
            <div>
            <p className="-text" style={{fontSize: '20px'}}>{text} </p>
            </div>
            <div className='w-[340px] gap-2 flex relative pr-2 flex-wrap'>
          {tags.map((term, index) => (
              <div key={index} className='flex pl-1 pr-1 pt-1 pb-1 h-[16px] items-center justify-center'
                style={{backgroundColor: LIGHT_GRAY, borderRadius: '4px'}}>

                  <div className='font-noto text-base text-textgray' 
                        style={{fontSize:'11px', color: GRAY}}>{term}</div>
              </div>
          ))}
        </div>
        </div>
    );
}

export default ReviewButton;
