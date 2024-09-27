import React, { FC, useState } from 'react';
import BarImg from "../../assets/BarImg.png";

interface ReviewTexting {
    RText?: string;
    height ?: string
}

const GrayBar: FC<ReviewTexting> = ({height='2px'}) => {
    return (
            <img src={BarImg} className={`relative w-[370px] h-[${height}] t-[1px] mt-[10px] mb-[10px]`} />
    );
}

export default GrayBar;