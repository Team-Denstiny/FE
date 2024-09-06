import React, { FC, useState } from 'react';
import RoundRectangle from '../../../components/common/SmallBlueButton/RoundRectangle';
import ReviewButton from '../../../components/common/Reviewing/Review';

interface ReviewTexting {
    RText?: string;
}

const ReviewPage: FC<ReviewTexting> = () => {
    return (
        <div>
            <div className='top-button-container'>
                <RoundRectangle text='전체' width='60px' />
                <RoundRectangle text='최신 순 ▼' width='64px' />
            </div>
            <div>
                <ReviewButton textday='2024.07.06' text='아주 좋고 편리합니다' tags={["충치치료", "치아교정"]}/>
            </div>
        </div>
    );
}

export default ReviewPage;