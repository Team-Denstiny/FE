import React from 'react';
import './VendingAD.css'; // Assuming you place the CSS in a separate file
import gps from '../../../assets/gps.png'
import shopimg from "../../../assets/shopimg1.png";
import { VerticalLine } from '../LoginDesigns/Utility';
import {
    GRAY, LIGHT_GRAY
}from "../../../Color";
import { useNavigate } from 'react-router-dom';
import HospiInfo from '../../../routes/Hospital/Hospital';

interface ButtonProps {
    name?: string,
    state?: string,
    exitTime?: string,
    dist ?: string,
    tags : string[],
    id ?: string,
    imgLink ?: string,
    subway ?: string
}
const ADButton: React.FC<ButtonProps> = ({name, state, exitTime, dist, tags, id, imgLink, subway}) => {
  const navigate = useNavigate();
  
  const hospiInfo = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("button clicked");
    console.log("Button Clicked : " + id + event)
    navigate("/search/hospital/" + id);
  };

  if (dist == "0") {
    dist = "가까운 지하철 역이 없습니다";
  } else {
    dist += " m";
  }
  return  (
    <div>

    <button className="Vstyled-container" style={{marginTop: '10px'}} onClick={hospiInfo}>
        <p className="ADButton-text" style={{fontSize: '20px'}}>{name} </p>
        <br />

        <div className="flex justify-start gap-2">
            <p className="ADButton-text" style={{fontSize: '13px'}}>{state}</p>
            <p className="ADButton-text" style={{fontSize: '13px', color:GRAY, fontWeight: 400}}>{exitTime}</p>
        </div>

        <div className='flex pt-1 pb-1 gap-1 items-center justify-start'>
            <img src={gps} style={{width: '9px', height:"13px"}}/>
            <p className="ADButton-text" style={{color:'black', fontSize: '13px'}}>{subway} {dist}</p>
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
        
        <img src={imgLink} style={{
            position: 'absolute',
            width:'88px', 
            height:'88px',
            top:'1px',
            right: '1px'}} />

    </button>
    <VerticalLine backgroundColor='#D3D3D3' style={{marginTop: '6px', marginBottom: '6px'}}/>
    </div>
  );
};

export default ADButton;