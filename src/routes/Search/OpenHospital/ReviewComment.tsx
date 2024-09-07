import React, { FC, useState } from 'react';
import RoundRectangle from '../../../components/common/SmallBlueButton/RoundRectangle';
import ReviewButton from '../../../components/common/Reviewing/Review';
import SettingBar from '../../../components/search/Settingbar';
import UserIcon1 from '../../../assets/UserImg.png';
import ReviewComment from '../../../components/common/ReviewComment/ReviewComment';
import BarImg from '../../../assets/BarImg.png'

interface ReviewTexting {
    RText?: string;
}

const ReviewCommentPage: FC<ReviewTexting> = () => {
    return (
        <div>
            <div>
            <ReviewButton textday='2024.07.06' 
                            text='아주 좋고 편리합니다' 
                            tags={["충치치료", "치아교정"]}
                            UserIcon = {UserIcon1} />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <ReviewComment textday='2024.07.06' 
                            text='후기 남깁니다' 
                            UserIcon = {UserIcon1} 
                            name='이재혁' />
            </div>
            <br></br>
            <img src={BarImg} style={{
            position: 'relative',
            width:'370px', 
            height:'2px',
            top:'1px',
            left: '10px',
            marginRight: '10px',
            }} />
            <br></br>
            <div>
                <ReviewComment textday='2024.07.06' 
                            text='후기 남깁니다' 
                            UserIcon = {UserIcon1} 
                            name='이재혁' />
            </div>
            <br></br>
            <img src={BarImg} style={{
            position: 'relative',
            width:'370px', 
            height:'2px',
            top:'1px',
            left: '10px',
            marginRight: '10px',
            }} />
            <br></br>
            <div>
                <ReviewComment textday='2024.07.06' 
                            text='후기 남깁니다' 
                            UserIcon = {UserIcon1} 
                            name='이재혁' />
            </div>
        </div>
    );
}

export default ReviewCommentPage;