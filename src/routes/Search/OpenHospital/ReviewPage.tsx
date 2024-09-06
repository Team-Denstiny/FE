import React, { FC, useState } from 'react';
import RoundRectangle from '../../../components/common/SmallBlueButton/RoundRectangle';
import ReviewButton from '../../../components/common/Reviewing/Review';
import SettingBar from '../../../components/search/Settingbar';
import UserIcon1 from '../../../assets/UserImg.png';

interface ReviewTexting {
    RText?: string;
}

const ReviewPage: FC<ReviewTexting> = () => {
    return (
        <div>
            <div className='top-button-container'>
                <SettingBar location="서울 강남구" sorting="거리순" />
            </div>
            <div>
                <ReviewButton textday='2024.07.06' 
                            text='아주 좋고 편리합니다' 
                            tags={["충치치료", "치아교정"]}
                            UserIcon = {UserIcon1} />
            </div>
        </div>
    );
}

export default ReviewPage;