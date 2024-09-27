import React, { FC, useState } from 'react';
import search from "../../assets/search/search.png";
import back from "../../assets/Back.png";
import { useNavigate } from 'react-router-dom';
import useSearchTermStore from '../../store/useSearchTermStore';

interface SearchBarProps {
    placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({placeholder}) => {
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
        <div className='h-[48px] flex items-center relative gap-1 pl-5 shadow text-black'>
            <img src={back} className='h-[24px]' onClick={() => navigate(-1)}></img>
            <div className="w-[322px] h-[32px] bg-searchgray rounded-full flex items-center">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="검색어를 입력하세요"
                    className="h-[32px] w-[290px] bg-searchgray rounded-full py-2 px-4 outline-none text-black font-noto"
                />
                <img src={search} onClick={() => handleSearch(searchTerm)} />


            </div>
        </div>

    );
};

export default SearchBar;