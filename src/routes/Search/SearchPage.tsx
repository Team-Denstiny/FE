import React, { FC, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useSearchTermStore from '../../store/useSearchTermStore';
import search from "../../assets/search/search.png";
import back from "../../assets/Back.png"
import de from "../../assets/search/delete.png"
import SearchBar from '../../components/common/SarchBar';



interface SearchBarProps {
    placeholder?: string;
}

const SearchPage: FC<SearchBarProps> = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [TopSearched, setTopSearched] = useState<string[]>(['치과전체','임플란트', '사랑니 발치', '치과 스케일링','지금문연병원'])
    const { searchTermList, addSearchTerm, removeSearchTerm, clearSearchTerms } = useSearchTermStore();
    const navigate = useNavigate();

    
    const handleSearch = (term:string) => {
        addSearchTerm(term);
        setSearchTerm('');
        navigate(`/search?q=${term}`);
    };

      const handleDeleteTerm = (term: string) => {
        removeSearchTerm(term);
    };

    const handleClearTerms = () => {
        clearSearchTerms();
    };

    const [searchParams] = useSearchParams();

    console.log(searchParams);
    if (searchParams.get('q')) {
        const params = searchParams.get("q");
        console.log("params : " + params);
    }

    return (
        
        <div>
            <SearchBar placeholder='검색어를 입력하세요' />

            <div className='pt-6 pl-5 '>
                <div className='flex relative items-center gap-[223px] '>
                <div className='font-noto text-base font-semibold text-blue'>최근 검색어</div>
                <div className='font-noto font-regular text-[11px] text-[#B3B3B3]' onClick={handleClearTerms}>모두 지우기</div>
                </div>
               
                <div className='w-[340px] flex relative pt-4 overflow-x-auto whitespace-nowrap scrollbar-hide'>
                    {searchTermList.map((term, index) => (
                    <div key={index} className='flex pl-3 pr-3 h-[32px] gap-1 items-center justify-center rounded-full border border-[#B3B3B3] mr-2'>
                        <div className='font-noto text-base text-textgray'  onClick={() => handleSearch(term)}>{term}</div>
                        <img src={de} onClick={() => handleDeleteTerm(term)}></img>
                    </div>
                    ))}
                    
                </div>
                
            </div>

            <div className='pt-12 pl-5'>
                <div className='font-noto text-base font-semibold text-blue'>인기 검색어</div>

                <div className='w-[340px] flex relative pt-4 flex-wrap'>
                {TopSearched.map((term, index) => (
                    <div key={index} className='flex pl-3 pr-3 pt-2 pb-2 h-[32px] gap-1 items-center justify-center rounded-full border border-[#B3B3B3] mr-2 mb-2'>
                        <div className='font-noto text-base text-textgray' onClick={() => handleSearch(term)}>{term}</div>
                    </div>
                ))}
                </div>
            </div>
        


        </div>
      
    );
}

export default SearchPage;
