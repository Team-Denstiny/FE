import React from "react";
import { useState } from "react";
import select from "../../assets/search/select.png"
import SortingModal from "../common/SortingModal";


interface SettingbarProps{
    location: string,
    sorting: string

}

const SettingBar: React.FC<SettingbarProps> = ({location, sorting}) =>{
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [changeSort, setChangeSort] = useState<string>(sorting)
    const options = ["관련순", "거리순", "리뷰순"]

    const openModal = () =>{
        setIsOpen(true)
    }

    const closeModal = (sorting:string) =>{
        setChangeSort(sorting)
        setIsOpen(false)
        console.log(changeSort)
    }



    return(
        
        <div className="relative">

            <div className="flex pl-5 pt-4 gap-[166px]">
            
                <div className="flex items-center justify-center h-[28px] w-[120px] rounded-full border border-blue ">
                    <div className="font-noto font-medium text-[11px] text-blue ">현위치: {location}</div>
                </div>

                <div className="flex items-center justify-center h-[28px] w-[64px] rounded-full border border-blue " onClick={openModal}>
                    <div className="font-noto font-medium text-[11px] text-blue ">{changeSort}</div>
                    <img src={select} className="ml-1"></img>
                </div>

            

            </div>


            <SortingModal options={options} isOpen={isOpen} select={closeModal} sort={changeSort}/>
            
        </div>
       
    )
}

export default SettingBar;