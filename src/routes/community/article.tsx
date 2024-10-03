import React, { useEffect, useState } from "react";
import { Post } from "./ComInterface";
import OptImg from "../../assets/OptionImg.png";
import GrayBar from "../../components/common/GrayBar";
import eye from "../../assets/Community/eye.png";
import haert from "../../assets/Community/heart.png";
import filledHeart from "../../assets/fillHeart.png";
import comment from "../../assets/Community/comment.png";
import ComArticleModal from "../../components/common/Modal/ComArticleModal";
import { USERID } from "../../GlobalVariable";
import ArticleInArticle from "./articleInArticle";
import { GET_MY_INFO } from "../../Address";
import { TokenAxiosDelete, TokenAxiosPost } from "../../components/common/GetWithToken/TokenGet";
import { heartCheck } from "../../components/common/LocalStorageFunc/jjimCheck";
import { prevLoad_likePost } from "../../components/common/LocalStorageFunc/prevLoading";


interface PostProps {
    post: Post;
    boardId: string;
    writesHandler ?: (abs:string | number) => void;
    deleteHandler ?: (review: string) => void
    index ?: number;
}
const Article:React.FC<PostProps> = ({post, boardId, writesHandler, deleteHandler, index=-1}) => {

    if (!writesHandler)
        writesHandler = () => {};

    const [isOpen, setIsOpen] = useState(false);
    const [flags, setFlags] = useState(false);
    const [haertFlag, setHeartFlag] = useState(false);



    let options = ["신고하기"];

    const getUserId = localStorage.getItem(USERID);
    if (Number(getUserId) == post.id) {
        options.push("삭제하기");
    }

    const buttonClick = () => {
        setIsOpen(true);
    }

    const selectFunc = async (opt : string) => {
        if (opt === "삭제하기") {
            if (deleteHandler && post.postId)
                deleteHandler(post.postId.toString());
    
        }
        setIsOpen(false);
    }


    const heartClick = async () => {

        const url = GET_MY_INFO + getUserId + "/heart";
        if (!boardId) {
            return;
        }

        const headers = {
            "board_id": post.postId,
        }
        if (!haertFlag) {
            const data = await TokenAxiosPost(url, ".", headers);
            if (!data) {
                return;
            }
            window.alert("해당 게시글에 좋아요를 추가했습니다");
            post.likes++;
        }
        else {
            const data = await TokenAxiosDelete(url, ".", headers);
            if (!data) {
                return;
            }
            window.alert("해당 게시글에 좋아요를 삭제했습니다");
            post.likes--;

        }
        setHeartFlag(!haertFlag);
        await prevLoad_likePost();

    }

    useEffect(() => {
        const heartTmp = heartCheck(post.postId);
        console.log("heart Flag : id=", post.postId, ", jjimCheck=", heartTmp);
        setHeartFlag(heartTmp);
    }, [])

    return (
        <div>
            <div key={post.id} className="bg-white border-b border-gray-300 p-4">
                <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-gray mr-2"></div>
                    <div className="flex-grow">
                        <span className="block font-noto text-black font-bold">{post.author}</span>
                        <span className="text-sm font-noto text-fontGray">{post.date}</span>
                    </div>
                    <button className="text-fontGray text-2xl mr-[10px]" onClick={buttonClick} >
                        <img src={OptImg} className='w-[20px]' />
                    </button>
                </div>
                <h3 className="font-bold font-noto text-black text-lg mb-1">{post.title}</h3>
                <p className="text-sm text-black mb-2">{post.content}</p>

                <div className="flex justify-left wrap gap-1 pb-2">
                    {post.tags && (
                        post.tags.map((val, index, array) => (
                            <span className="inline-block bg-searchgray font-noto text-[12px] text-fontGray px-2 py-1 rounded-full text-xs mb-1">
                                {val}
                            </span>
                        ))
                    )}
                </div>

                {post.images.length > 0 && (
                    <div className="flex overflow-x-scroll mb-2 space-x-2">
                        {post.images.map((image, index) => (
                            <div key={index} className="shrink-0 w-[160px] h-[160px]">
                                <img
                                    src={image}
                                    alt={`Post image ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                )}

                <div className="flex justify-start gap-4">
                    <button className="text-fontGray text-sm flex items-center gap-1">
                        <img src={haertFlag ? filledHeart : haert} className='w-[15px]' onClick={heartClick}/>
                        <div className='text-fontGray text-[15px]'> {post.likes}</div>
                    </button>
                    <button className="text-fontGray text-sm flex items-center gap-1" onClick={()=>setFlags(!flags)}>
                        <img src={comment} className='w-[15px]' />
                        <div className='text-fontGray text-[15px]'> {post.comments}</div>
                    </button>
                    <div className="text-fontGray ml-auto mr-[20px] text-sm flex items-center gap-1" style={{userSelect: "none"}}>
                        <img src={eye} className='w-[15px]' />
                        <div className='text-fontGray text-[15px]'> {post.views}</div>
                    </div>
                </div>
                
                <ComArticleModal options={options} select={selectFunc} isOpen={isOpen} sort="최신순"/>
            </div>
            {
                flags ? <ArticleInArticle boardId={boardId} reviewId={post.postId}/> : <div> </div>
            }
                <GrayBar height='2px' />

        </div>
    );
}

export default Article;