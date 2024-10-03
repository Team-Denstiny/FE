import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataProp, Post } from './ComInterface';
import { deleteHandler } from './CommFunc';
import Article from './article';
import { USERID } from '../../GlobalVariable';
import { GET_MY_INFO } from '../../Address';
import { TokenAxiosGet } from '../../components/common/GetWithToken/TokenGet';
import TapBar from '../../components/common/TopBar';
import pizza from "../../assets/pizza.png";
import { LoadingText } from '../../components/common/LoadingText';
import Navbar from '../../components/common/Navbar';

const MyLike: React.FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>();

  const getData = async () => {
    const myId = localStorage.getItem(USERID);
    const url = GET_MY_INFO + myId + "/board/myheartboards";
    
    const myData = await TokenAxiosGet(url, ".");
    console.log("data : " + myData);

    const PostCvt: Post[] = myData.map((review: any) => ({
      id: review.writer,
      postId: review.board_id,
      author: "임시" + review.writer,
      date: "2024.07.06",
      title: review.title,
      content: review.content,
      tags: ["임플란트", "기타"],
      images: [pizza, pizza, pizza, pizza, pizza],
      likes: review.heart_count,
      comments: 0,
      views: review.view_count,
      category: review.category
  }));
    setPosts(PostCvt);
  };

  const nextHandler = () => {}
  useEffect(() => {
    const getDataWrap = async () => {
      await getData();

    }

    getDataWrap();
  }, [])
  if (!posts) {
      return (
        <div>
        <TapBar text='내가 좋아요 한 글' />
          <LoadingText />
        </div>
      );
  }

  if (posts.length == 0) {
      return (
        <div>
        <TapBar text='내가 좋아요 글' />
          <LoadingText text='내가 좋아요한 글이 없습니다'/>
        </div>
      );
  }

  const deleteHandlerWrap = async(id: string) => {
    deleteHandler(id);
  }

  return (
    <div className="">
        <TapBar text='내가 좋아요 한 글' />
        {posts.map((post, index) => (
          <Article post={post} index={index} boardId='3' deleteHandler={deleteHandlerWrap} />
        ))}
    </div>
  );
};

export default MyLike;