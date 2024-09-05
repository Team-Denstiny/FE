import React, { FC, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useSearchTermStore from '../../store/useSearchTermStore';
import search from "../../assets/search/search.png";
import back from "../../assets/Back.png"
import de from "../../assets/search/delete.png"
import TapBar from "../../components/common/TopBar";
import RoundRectangle from "../../components/common/SmallBlueButton/RoundRectangle";
import ADButton from "../../components/common/BigVendingAD/VendingAD";

interface SearchBarProps {
    placeholder?: string;
}

const SearchPage2: FC<SearchBarProps> = () => {
    

    return (
        
        <div>
            <div className='h-[48px] flex items-center relative gap-1 pl-5 shadow'>
                <img src={back} className='h-[24px]' ></img>
                <div className="w-[322px] h-[32px] bg-searchgray rounded-full flex items-center">
                    <input 
                        type="text" 
                        placeholder="검색어를 입력하세요"
                        className="h-[32px] w-[290px] bg-searchgray rounded-full py-2 px-4 outline-none text-base font-noto"
                    />
                   <img src={search} />


                </div>

            </div>
            <RoundRectangle text=""> 

            </RoundRectangle>
              <ADButton>

              </ADButton>


            
            






        </div>
      
    );
}

export default SearchPage2;
