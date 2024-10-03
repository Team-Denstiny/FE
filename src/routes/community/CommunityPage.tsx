import React, { useState } from 'react';
import './CommunityPage.css';
import TapBar from '../../components/common/TopBar';
import pizza from "../../assets/pizza.png";
import TapBarSearch from '../../components/common/TopBarSearch';
import Navbar from "../../components/common/Navbar";
import OptImg from "../../assets/OptionImg.png";

import eye from "../../assets/Community/eye.png";
import haert from "../../assets/Community/heart.png";
import comment from "../../assets/Community/comment.png";
import GrayBar from '../../components/common/GrayBar';

import { Post } from './ComInterface';
import Article from './article';
import SettingBar from '../../components/search/Settingbar';
import ComModal from '../../components/common/Modal/ComModal';
import AllPage from './A_allPage';
import MedicalPage from './A_MedicalPage';
import LocalPage from './A_LocalPage';
import FreePage from './A_FreePage';
import SmallButton from '../../components/common/Buttons/SmallButton';
import { pageCnt } from './CommFunc';
import { TokenAxiosGet } from '../../components/common/GetWithToken/TokenGet';
import { GET_MY_INFO } from '../../Address';
import { PAGE_LOAD, USERID } from '../../GlobalVariable';
import { all } from 'axios';
import { LoadingText } from '../../components/common/LoadingText';
import LoginCheck from '../../components/common/CheckHandler/LoginCheck';

const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('전체');
  const [isClicked, setIsClicked] = useState(1);
  
  const [totalPage, setTotalPage] = useState([100,100,100,100]);

  const [articlesAll, setArticlesAll] = useState<Post[]>([]);
  const [articlesMed, setArticlesMed] = useState<Post[]>([]);
  const [articlesLoc, setArticlesLoc] = useState<Post[]>([]);
  const [articlesFree, setArticlesFree] = useState<Post[]>([]);

  const [curPageAll, setCurPageAll] = useState(-1);
  const [curPageMed, setCurPageMed] = useState(-1);
  const [curPageLoc, setCurPageLoc] = useState(-1);
  const [curPageFree, setCurPageFree] = useState(-1);
  const [loadComplete, setLoadComplete] = useState(false);


  const getAllCom = async (cate=1, page=0, size=PAGE_LOAD) => {
    const my_id = localStorage.getItem(USERID);
    const url = GET_MY_INFO + my_id + `/board/category/${cate}?page=${page}&size=${size}`;

    console.log("url : " + url);
    const data = await TokenAxiosGet(url, ".");
    if (!data) {
      console.log("error");
      return;
    }

    const content = data["content"];
    console.log("data : " + content);

    const totalPage = pageCnt(data);
    setTotalPage((prevTotalPage) => {
      const newTotalPage = [...prevTotalPage]; // 이전 상태 복사
      newTotalPage[cate] = totalPage; // 특정 인덱스 증가
      return newTotalPage; // 새로운 배열 반환
    });
    console.log("page cnt : " + totalPage);
    console.log("content : " + content);

    if (content) {
        const PostCvt: Post[] = content.map((review: any) => ({
          id: review.writer,
          postId: review.board_id,
          author: review.writer_nickname,
          date: review.update_at,
          title: review.title,
          content: review.content,
          tags: ["임플란트", "기타"],
          images: review.imgs,
          likes: review.heart_count,
          comments: review.comment_count,
          views: review.view_count,
          category: review.category,
      }));
      console.log("category: " + PostCvt[0].category);

      return PostCvt;
    }
    return [];
  }


  const allDataLoad = async () => {
    const nextPage = curPageAll + 1;
    if (nextPage <= totalPage[0]) {
      const nextData = await getAllCom(0, nextPage, PAGE_LOAD);

      console.log(" page = " + nextPage + " content" + nextData);

      setCurPageAll(nextPage); 
      if (nextData)
        setArticlesAll(prev => [...prev, ...nextData]);

      return nextData;
    }
  }

  const allDataMed = async () => {
    const nextPage = curPageMed + 1;
    if (nextPage <= totalPage[1]) {
      const nextData = await getAllCom(1, nextPage, PAGE_LOAD);

      console.log(" page = " + nextPage + " content" + nextData);

      setCurPageMed(nextPage); 
      if (nextData)
        setArticlesMed(prev => [...prev, ...nextData]);

      return nextData;
    }
  }

  const allDataLoc = async () => {
    const nextPage = curPageMed + 1;
    if (nextPage <= totalPage[2]) {
      const nextData = await getAllCom(2, nextPage, PAGE_LOAD);

      console.log(" page = " + nextPage + " content" + nextData);

      setCurPageLoc(nextPage); 
      if (nextData)
        setArticlesLoc(prev => [...prev, ...nextData]);

      return nextData;
    }
  }

  const allDataFree = async () => {
    const nextPage = curPageMed + 1;
    if (nextPage <= totalPage[3]) {
      const nextData = await getAllCom(3, nextPage, PAGE_LOAD);

      console.log(" page = " + nextPage + " content" + nextData);

      setCurPageFree(nextPage); 
      if (nextData)
        setArticlesFree(prev => [...prev, ...nextData]);

      return nextData;
    }
  }


  useState(() => {
      const check = LoginCheck("회원 전용 기능입니다\n회원가입을 해주세요..", "false");
      const initData = async() => {
      const allData = await allDataLoad() ;
      setLoadComplete(true);
      const MediData = await allDataMed() ;
      const LocalData = await allDataLoc() ;
      const FreeData = await allDataFree();

    }

    initData();
    console.log("finish");
    console.log(articlesAll);
  });

  if (!loadComplete) {
    return (
      <div>

        <TapBarSearch text='커뮤니티' />
        <div className="flex gap-0">
          <button className={`flex-1 h-14 font-noto border-b-4 rounded-none 
                    ${isClicked == 1 ? 'text-blue border-b-blue' : 'text-fontGray border-b-fontGray'}`} onClick={() => setIsClicked(1)}>
            전체
          </button>
          <button className={`flex-1 h-14 font-noto border-b-4 rounded-none 
                    ${isClicked == 2 ? 'text-blue border-b-blue' : 'text-fontGray border-b-fontGray'}`} onClick={() => setIsClicked(2)}>
            진료
          </button>
          <button className={`flex-1 h-14 font-noto border-b-4 rounded-none 
                    ${isClicked == 3 ? 'text-blue border-b-blue' : 'text-fontGray border-b-fontGray'}`} onClick={() => setIsClicked(3)}>
            지역
          </button>
          <button className={`flex-1 h-14 font-noto border-b-4 rounded-none 
                    ${isClicked == 4 ? 'text-blue border-b-blue' : 'text-fontGray border-b-fontGray'}`} onClick={() => setIsClicked(4)}>
            자유
          </button>
        </div>
        <LoadingText />
        <Navbar text="community"></Navbar>
      </div>
    )
  }
  const writesHandler = (idx: number) => {

  }

  return (
    <div className="community-page">
      <TapBarSearch text='커뮤니티' />
            <div className="flex gap-0">
                <button className={`flex-1 h-14 font-noto border-b-4 rounded-none 
                    ${isClicked == 1 ? 'text-blue border-b-blue' : 'text-fontGray border-b-fontGray'}`} onClick={() => setIsClicked(1)}>
                전체
                </button>
                <button className={`flex-1 h-14 font-noto border-b-4 rounded-none 
                    ${isClicked == 2? 'text-blue border-b-blue' : 'text-fontGray border-b-fontGray'}`} onClick={() => setIsClicked(2)}>
                진료
                </button>
                <button className={`flex-1 h-14 font-noto border-b-4 rounded-none 
                    ${isClicked == 3? 'text-blue border-b-blue' : 'text-fontGray border-b-fontGray'}`} onClick={() => setIsClicked(3)}>
                지역
                </button>
                <button className={`flex-1 h-14 font-noto border-b-4 rounded-none 
                    ${isClicked == 4? 'text-blue border-b-blue' : 'text-fontGray border-b-fontGray'}`} onClick={() => setIsClicked(4)}>
                자유
                </button>
            </div>
        

        <GrayBar />
        <SmallButton name="글 쓰러 가기" link="./write" fontBold="bold"/>
        <GrayBar />
        <ComModal location='전체' sorting='최신순'/>

        {
          isClicked === 1 ? <AllPage posts={articlesAll} nextHandler={allDataLoad}/> : <div> </div>
        }
        {
          isClicked === 2 ? <MedicalPage posts={articlesMed} nextHandler={allDataMed}/> : <div> </div>
        }
        {
          isClicked === 3 ? <LocalPage posts={articlesLoc} nextHandler={allDataLoc}/> : <div> </div>
        }
        {
          isClicked === 4 ? <FreePage posts={articlesFree} nextHandler={allDataFree}/> : <div> </div>
        }

        <Navbar text="community"></Navbar>
      </div>
  );
};

export default CommunityPage;