import React from "react";

interface HospitalCardProps{
    imgurl: string,
    name: string,
    status: string,
    lastorder: string,
    rate: string,
    reviewcnt: BigInteger,
    distance: string,
    category: string[]

}

const HospitalCard : React.FC<HospitalCardProps> = ({imgurl, name, status, lastorder, rate, reviewcnt, distance, category}) =>{

    return(

        <div>
        </div>

    )
}


export default HospitalCard;