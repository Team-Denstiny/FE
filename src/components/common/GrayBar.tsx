import React, { FC, useState } from 'react';
import BarImg from "../../assets/BarImg.png";

interface ReviewTexting {
    RText?: string;
}

const GrayBar: FC<ReviewTexting> = () => {
    return (
            <img src={BarImg} className='relative w-[370px] h-[2px] t-[1px] mt-[10px] mb-[10px]' />
    );
}

export default GrayBar;