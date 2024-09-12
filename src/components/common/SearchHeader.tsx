import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


interface SearchHeaderProps {
  onSearch: (term: string) => void;
  backIcon: string;
  searchIcon: string;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({ onSearch, backIcon, searchIcon }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className='h-[48px] flex items-center relative gap-1 pl-5 shadow'>
      <img src={backIcon} className='h-[24px]' onClick={() => navigate(-1)} alt="Back" />
      <div className="w-[322px] h-[32px] bg-searchgray rounded-full text-black flex items-center">
        <input 
          type="text" 
          value={searchTerm} 
          onChange={handleChange} 
          placeholder="검색어를 입력하세요"
          className="h-[32px] w-[290px] bg-searchgray rounded-full py-2 px-4 outline-none text-base font-noto"
        />
        <img src={searchIcon} onClick={handleSearch} alt="Search" />
      </div>
    </div>
  );
};

export default SearchHeader;