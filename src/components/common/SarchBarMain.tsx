import React, { FC, useState } from 'react';
import search from "../../assets/search/search.png";
import back from "../../assets/Back.png";
import { useNavigate } from 'react-router-dom';
import useSearchTermStore from '../../store/useSearchTermStore';

interface SearchBarProps {
    placeholder?: string;
}

const SearchBarMain: React.FC<SearchBarProps> = ({placeholder}) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState<string>('');
    const { searchTermList, addSearchTerm, removeSearchTerm, clearSearchTerms } = useSearchTermStore();

    

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = (term:string) => {
        addSearchTerm(term);
        setSearchTerm('');
        navigate(`/search?q=${term}`);
    }; 

    return (
        <div className='h-[48px] flex justify-center items-center relative gap-1 pl-5 shadow text-black'>
            <div className="w-full h-[32px] bg-searchgray rounded-full flex items-center mr-[10px] ml-[10px]">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="검색어를 입력하세요"
                    className="h-[32px] w-full bg-searchgray rounded-full py-2 px-4 outline-none text-black font-noto"
                />
                <img src={search} className="ml-auto mr-[10px]" onClick={() => handleSearch(searchTerm)} />


            </div>
        </div>

    );
};

export default SearchBarMain;