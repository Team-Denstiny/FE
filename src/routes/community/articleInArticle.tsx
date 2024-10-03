import React, { useEffect, useState } from 'react';
import nextIcon from "../../assets/NextBar.png";
import TapBar from '../../components/common/TopBar';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { NICKNAME, USERID } from '../../GlobalVariable';
import { TokenAxiosDelete, TokenAxiosGet, TokenAxiosPost } from '../../components/common/GetWithToken/TokenGet';
import { GET_MY_INFO, REVIEW_COMMENT } from '../../Address';
//import { reviewInterface } from '../HospiInterface';
import GrayBar from '../../components/common/GrayBar';
import ReviewButton from '../../components/common/Reviewing/Review';
import { useIsRTL } from 'react-bootstrap/esm/ThemeProvider';

interface ReviewInReviewProps{
    boardId ?: string;
    reviewId ?: number;
};

interface boardIntefrace {
    id: string;
    comment_id: string;
    date: string;
    nick_name: string;
    user_id: number;
    content: string;
    image_url: string;
};

const ArticleInArticle: React.FC<ReviewInReviewProps> = ({boardId, reviewId}) => {
  const navigate = useNavigate();
  const getUserId = localStorage.getItem(USERID);
  const url = GET_MY_INFO + getUserId + "/board/" + reviewId +"/comment" ;
  const getUserNickName = localStorage.getItem(NICKNAME);
  const [reviewTails, setReviewTails] = useState<boardIntefrace[]>();
  const [canGo, setCanGo] = useState(false);
  const [reviewText, setReviewText] = useState("");
  
  const getData = async () => {

    console.log("data url : " + url);
    const data = await TokenAxiosGet(url, ".");
    const reviews_cvt: boardIntefrace[] = data.map((review: any) => ({
          id: review.user_id,
          comment_id: review.board_comment_id,
          date: "2024.09.30",
          nick_name: "임시"+review.user_id,
          user_id: review.user_id,
          content: review.content,
          image_url: review.image_url
          // 필요한 다른 속성들 추가
      }));
      setCanGo(true);
      console.log("board_comment_id : " + reviews_cvt[0].comment_id)
      if (reviews_cvt) {
        setReviewTails(reviews_cvt);
        if (reviewTails)
            console.log("1 : " + reviewTails[0].content);
      }
  }

  const onClickHandler = async () => {
    console.log("답글 달기 : " + reviewId);
    console.log("내용 ?  : " + reviewText);
    
    const headers = {
        "content": reviewText
    };

    const putData = await TokenAxiosPost(url, ".", headers);
    window.alert("댓글이 추가되었습니다!");
    setReviewText("");
    await getData();
  }
  
  const reviewDeleteHandler = async (review: string) => {
    console.log("delete review Id : "  + review);
    const deleteUrl = url + "/" + review
    console.log("delete url : " + deleteUrl);

    const data = await TokenAxiosDelete(deleteUrl, ".");
    if (!data) {
        window.alert("[오류 발생!] 댓글 삭제에 실패했습니다.");
    }
    else {
        window.alert("댓글이 삭제되었습니다.");
        await getData();
    }
  }

  useEffect(() => {
    const init = async () => {
        await getData();
    }

    init();
  }, []);

  const reviewInReview = (review:string, idx:number) => {

  }

  if (!canGo) {
    return(
        <div>
            <div className='flex justify-center font-noto text-bold font-[20px] text-blue h-[20px]'> 대댓글 로딩 중 ... </div>
        </div>
    )
  }
  if (canGo && !reviewTails) {
    return(
        <div>
            <div className='flex justify-center font-noto text-bold font-[20px] text-blue h-[20px]'> 대댓글이 하나도 없습니다 ㅠㅠ</div>
            <div className='flex justify-center'>
                <div className='font-noto text-black font-bold text-[15px] pt-10 ml-[40px]'> 
                    {getUserNickName}
                </div>
                <div className='ml-auto mr-[10px]'></div>
            </div>
            <div className='flex justify-center pt-[5px]'>
                <textarea className='review-textarea ml-[40px] mr-[40px] border-2 border-blue-500' 
                    onChange={e => setReviewText(e.target.value)}
                    placeholder="답글을 추가해주세요."
                    />
            </div>
            <div className='flex justify-center'>
                <button className='blueButton whiteDefault ml-[40px] mr-[40px]' onClick={onClickHandler}> 답글 달기</button>
            </div>

        </div>
    )
  }
  return (
    <div>
        <GrayBar height='2px'/>
            { reviewTails.length == 0 ? 
            <div className='flex justify-center font-noto text-bold font-[20px] text-blue h-[20px]'> 대댓글이 없습니다 </div>
            : reviewTails.map((review, index, array) => (
                <div className='pl-[20px]'> 
                    <ReviewButton
                    key={review.id} // 각 컴포넌트에 고유한 키를 부여합니다.
                    textday={review.date}
                    text={review.content}
                    tags={[]} // 필요한 태그를 여기에 적어주세요.
                    UserIcon={review.image_url}
                    name={review.nick_name}
                    reviewId={review.comment_id}
                    index={-1}
                    reviewInReivewHandler={(review:string, idx:number) => reviewInReview(review, idx)}
                    reviewInReivewDeleteHandler={(review:string) => reviewDeleteHandler(review)}
                    userId={review.user_id}
                    />
                </div>
            ))}

            <div className='flex justify-center'>
                <div className='font-noto text-black font-bold text-[15px] pt-10 ml-[40px]'> 
                    {getUserNickName}
                </div>
                <div className='ml-auto mr-[10px]'></div>
            </div>
            <div className='flex justify-center pt-[5px]'>
                <textarea className='review-textarea ml-[40px] mr-[40px] border-2 border-blue-500' 
                    onChange={e => setReviewText(e.target.value)}
                    placeholder="답글을 추가해주세요."
                    />
            </div>
            <div className='flex justify-center'>
                <button className='blueButton whiteDefault ml-[40px] mr-[40px]' onClick={onClickHandler}> 답글 달기</button>
            </div>
    </div>
  );
};

export default ArticleInArticle;