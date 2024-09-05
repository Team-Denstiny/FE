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
                <ReviewButton text=' ' />
            </div>
        </div>
    );
}

export default ReviewPage;