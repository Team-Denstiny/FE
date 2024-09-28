import React from 'react';
import { useNavigate } from 'react-router-dom';
import { dataProp, Post } from './ComInterface';
import Article from './article';
import { USERID } from '../../GlobalVariable';
import { GET_MY_INFO } from '../../Address';
import { deleteHandler } from './CommFunc';

const MedicalPage: React.FC<dataProp> = ({posts, nextHandler}) => {
  const navigate = useNavigate();

  if (!posts) {
      return (
        <div>
          <div className="flex justify-center pt-[50px] text-blue font-noto font-bold text-[30px]"> 로딩 중 ...</div>
        </div>
      );
  }


  const deleteHandlerWrap = async(id: string) => {
    deleteHandler(id);
  }
  return (
    <div className="">
        {posts.map((post, index) => (
          <Article post={post} index={index} boardId='1' deleteHandler={deleteHandlerWrap}/>
        ))}
        <div className='flex justify-center'>
          <button className='blueButton whiteDefault' onClick={nextHandler} >더 불러오기</button>
        </div>
    </div>
  );
};


export default MedicalPage;