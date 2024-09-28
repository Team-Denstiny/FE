import React, { FC, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useSearchTermStore from '../../../store/useSearchTermStore';
import search from "../../assets/search/search.png";
import back from "../../assets/Back.png"
import de from "../../assets/search/delete.png"
import TapBar from '../../../components/common/TopBar';
import { BlackText, ButtonContainer, GrayText, VerticalLine } from '../../../components/common/LoginDesigns/Utility';
import BigButton from '../../../components/common/Buttons/BigButton';
import SmallButton from '../../../components/common/Buttons/SmallButton';
import OvalButton from '../../../components/common/Buttons/Button';
import { BLUE } from '../../../Color';
import { hospitalTags, guTags} from '../../../Tags';
import { Prev } from 'react-bootstrap/esm/PageItem';
import CheckIcon from "../../../assets/blueCheckNoCircle.png";


interface SearchBarProps {
    setBoardIdxCopy?: React.Dispatch<React.SetStateAction<number>>,
    setTagsCheckerHospiCopy?: React.Dispatch<React.SetStateAction<number>>,
    setTagsCheckerGuCopy?: React.Dispatch<React.SetStateAction<number>>,
    setMode?:React.Dispatch<React.SetStateAction<number>>,
    
    defaultGu ?: number;
    defaultHospi ?: number;
    defaultIdx ?: number;
}

const ReviewTagPage: FC<SearchBarProps> = ({setMode, setTagsCheckerGuCopy, setTagsCheckerHospiCopy,setBoardIdxCopy, defaultGu, defaultHospi, defaultIdx}) => {
    const navigate = useNavigate();
    const [isToggledUp, setIsToggledUp] = useState(false);
    const tags = ["치과전체", ...hospitalTags];
    const guTag = ["서울 전체", ...guTags];

    if (defaultGu === undefined)
        defaultGu = 0;
    if (defaultHospi === undefined)
        defaultHospi = 0;
    if (defaultIdx === undefined)
        defaultIdx = 1; 

    const [boardIdx, setBoardIdx] = useState(defaultIdx);
    const [tagsCheckerHospi, setTagsCheckerHospi] = useState(defaultHospi);

    const [tagsCheckerGu, setTagsCheckerGu] = useState(defaultGu);

    
    const handleTag = (tag: string, index:number, tagsChecker:number ,setTagsChecker ?:React.Dispatch<React.SetStateAction<number>>) => {
        if (!setTagsChecker)
            setTagsChecker = setTagsCheckerHospi;
    console.log("clicked : " + tag, "idx:" +index);

    console.log("checker : " + tagsChecker);
    if (tagsChecker & (1 << index)) {
        if (index == 0) {
            setTagsChecker(0x0);
        }
        else {
            const toggle = ~(1 << index);
            setTagsChecker(tagsChecker & toggle);
        }
    }
    else {
        if (index == 0) {
            setTagsChecker(0xFFFFFFFF);
        }
        else 
            setTagsChecker(tagsChecker | (1 << index));
    }
    sessionStorage.setItem("tags", tagsChecker.toString());
  }

    const toggleColors = () => {
        setIsToggledUp(!isToggledUp);
    };
    
    const go_back = () => {
        navigate("/");
    };

    const returnBack = () => {
        console.log("Return Back Handler");
        if (setBoardIdxCopy)
            setBoardIdxCopy(boardIdx);
        if (setTagsCheckerGuCopy)
            setTagsCheckerGuCopy(tagsCheckerGu);
        if (setTagsCheckerHospiCopy)
            setTagsCheckerHospiCopy(tagsCheckerHospi);
        if(setMode) {
            setMode(1);
            console.log("setMode 성공 : " + setMode);
        }
    }
    return (
        
        <div className='userfocus-none'>
            <TapBar text='전문 병원 검색' clickHandler={returnBack}/>
            <br />

            <BlackText fontSize="14px"> 카테고리를 선택하세요 </BlackText> 
            <br />
            
            <div className='flex justify-center items-center'>
                <div className='flex flex-wrap justify-between w-[350px] mx-auto bg-gray p-[20px]'>
                <div className='flex flex-wrap justify-between w-[350px] mx-auto bg-white p-[10px]'>
                    <button className='flex justify-between items-center w-full h-[42px] p-0 pl-2 pr-2' onClick={() => setBoardIdx(1)}>
                        <div className={`${boardIdx == 1 ? 'text-blue':'text-black'} font-noto font-bold`}>진료게시판</div>
                        {
                            boardIdx == 1 ? <img src={CheckIcon} className='w-[30px]'/> : <div></div>
                        }
                    </button>
                    <button className='flex justify-between items-center w-full h-[42px] p-0 m-0 pl-2 pr-2' onClick={() => setBoardIdx(2)}>
                        <div className={`${boardIdx == 2 ? 'text-blue':'text-black'} font-noto font-bold`}>지역게시판</div>
                        {
                            boardIdx == 2 ? <img src={CheckIcon} className='w-[30px]'/> : <div></div>
                        }
                    </button>
                    <button className='flex justify-between items-center w-full h-[42px] pl-2 pr-2' onClick={() => setBoardIdx(3)}>
                        <div className={`${boardIdx == 3 ? 'text-blue':'text-black'} font-noto font-bold`}>자유게시판</div>
                        {
                            boardIdx == 3 ? <img src={CheckIcon} className='w-[30px]'/> : <div></div>
                        }
                    </button>
                </div>
                </div>
            </div>

            <br />

            {
                boardIdx == 1 ? <div>
                    <BlackText fontSize="14px"> 치과 진료를 선택하세요 </BlackText>
                    <div className='flex justify-center items-center'>
                        <div className='flex flex-wrap justify-between max-w-[350px] mx-auto bg-gray p-[20px]'>
                            <div className='flex flex-wrap justify-between max-w-[350px] mx-auto bg-white p-[5px] gap-4'>
                                {tags.map((val, idx, arr) => (
                                    tagsCheckerHospi & (1 << idx) ?
                                        <button className="blueButtonSmall bg-blue p-0 whiteDefault w-[138px]" style={{ width: '140px' }} onClick={() => (handleTag(val, idx, tagsCheckerHospi, setTagsCheckerHospi))}> {val} </button>
                                        :
                                        <button className="blueButtonSmall p-0 blueDefault w-[138px]" style={{ width: '140px' }} onClick={() => (handleTag(val, idx, tagsCheckerHospi, setTagsCheckerHospi))}> {val} </button>
                                ))}

                            </div>
                        </div>
                    </div>
                </div> : <div></div>
            }
            {
                boardIdx == 2 ? <div>
                    <BlackText fontSize="14px"> 원하는 위치를 선택하세요. </BlackText>
                    <div className='flex justify-center items-center'>
                        <div className='flex flex-wrap justify-between max-w-[350px] mx-auto bg-gray p-[12px]'>
                            <div className='flex flex-wrap justify-left max-w-[350px] mx-auto bg-white p-[5px] gap-2'>
                                {guTag.map((val, idx, arr) => (
                                    tagsCheckerGu & (1 << idx) ?
                                        <button className="blueButtonSmall p-0 bg-blue whiteDefault w-[100px]" onClick={() => (handleTag(val, idx, tagsCheckerGu, setTagsCheckerGu))}> {val} </button>
                                        :
                                        <button className="blueButtonSmall p-0 blueDefault w-[100px]" onClick={() => (handleTag(val, idx, tagsCheckerGu, setTagsCheckerGu))}> {val} </button>
                                ))}

                            </div>
                        </div>
                    </div>
                </div> : <div></div>
            }

            <br />

            <br />
            <ButtonContainer >
                <OvalButton onClick={returnBack}>
                    적용하기
                </OvalButton>
            </ButtonContainer>
        </div>
      
    );
}

export default ReviewTagPage;
