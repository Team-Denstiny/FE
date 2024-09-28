import React, { useEffect, useState } from 'react';
import nextIcon from "../../assets/NextBar.png";
import TapBar from '../../../components/common/TopBar';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { EMPTY_IMG, USERID } from '../../../GlobalVariable';
import { TokenAxiosPost, TokenAxiosPostMultipart } from '../../../components/common/GetWithToken/TokenGet';
import { GET_MY_INFO } from '../../../Address';
import SmallButton from '../../../components/common/Buttons/SmallButton';
import SmallButtonLightBlue from '../../../components/common/Buttons/SmallButtonLightBlue';
import ReviewTagPage from './ReviewTagPage';
import { guTags, hospitalTags } from '../../../Tags';
import pizza from "../../../assets/pizza.png";
import ImageUploader from './ImageUploader';

const ComWrite: React.FC = () => {
  const navigate = useNavigate();
  const [reviewText, setReviewText] = useState('');
  const [reviewTitle, setReviewTitle] = useState('');
  const location = useLocation();

  const tags = ["치과전체", ...hospitalTags];
  const tagsGu = ["서울 전체", ...guTags];
  const [boardIdx, setBoardIdx] = useState(1);
  const [tagsCheckerHospi, setTagsCheckerHospi] = useState(0);
  const [tagsCheckerGu, setTagsCheckerGu] = useState(0);
  const [mode, setMode] = useState(1);
  const [files, setFiles] = useState<File[]>([]);

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

  useEffect(() => {
    const reviewTextLocal = sessionStorage.getItem("comText");
    if (reviewTextLocal)
        setReviewText(reviewTextLocal);
    const reviewTitleLocal = sessionStorage.getItem("comTitle");
    if (reviewTitleLocal)
        setReviewTitle(reviewTitleLocal);

  }, []);

  const saveLines = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(e.target.value);
    sessionStorage.setItem("comText", e.target.value);
  }

  const saveTitles = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReviewTitle(e.target.value);
    sessionStorage.setItem("comTitle", e.target.value);
  }

  const submitReview = async () => {
    //tags는 나중에 처리
    const userId = await localStorage.getItem(USERID);
    const formData = new FormData();

    files.forEach(file => {
      formData.append('images', file);
    });
    if (!files.length) {
      const emptyFile = new File([], EMPTY_IMG);
      formData.append('images', emptyFile);
  }
  

    const requestData = {
      "title": reviewTitle,
      "content": reviewText,
      "category": boardIdx 
    };

    formData.append('request', new Blob([JSON.stringify(requestData)], {type: 'application/json'})) ;
    const reviewUrl = GET_MY_INFO + userId + "/board" ;
    console.log("reviewUrl : " + reviewUrl);
    console.log("header : " + formData.get("images"))  ;

    const data = await TokenAxiosPost(reviewUrl, ".", formData); 
    localStorage.setItem("comText", ".");
    localStorage.setItem("comTitle", ".");
    console.log("debug : " + localStorage.getItem("comText"));
    console.log("ret : " + data);
    if (data) {
      window.alert("고객님의 게시글이 정상 등록되었습니다!\n감사합니다.");
      navigate(-1);
    }
    else {
      window.alert("고객님의 게시글이 정상 등록되지 않았습니다!\n죄송합니다.");
    }
  }



  return (
    <div>
      {
        mode == 1 ? <div>

    <TapBar text="글쓰기" />
    <div className="max-w-md mx-auto p-5 bg-white">
        <SmallButtonLightBlue name="카테고리 선택하기" link="." linkHandler={()=>setMode(0)}/>
        <input className="w-full p-2 mb-3 text-black bg-white border rounded" placeholder='제목 입력' value={reviewTitle} onChange={(e) => saveTitles(e)}/>

        <textarea
          value={reviewText}
          onChange={(e) => saveLines(e)}
          placeholder="내용을 입력하세요."
          className="w-full p-2 mb-3 h-64 text-black bg-white border border-black rounded resize-y min-h-[300px] h-auto"
        />

        <ImageUploader momSetFiles={setFiles} />

            {
              boardIdx == 1 ? <div>
                <div className="tags"> {tags.map((tag, index) => (
                  <button key={index}
                    className={`${tagsCheckerHospi & (1 << index)
                      ? "bg-blue text-white border border-blue"
                      : "bg-white text-blue border border-blue"} 
            px-3 py-1 rounded-full text-sm`}
                    onClick={() => handleTag(tag, index, tagsCheckerHospi, setTagsCheckerHospi)}>{tag}</button>
                ))}
                </div>

              </div> : <div> </div>
            }
            {
              boardIdx == 2 ? <div>
                <div className="tags"> {tagsGu.map((tag, index) => (
                  <button key={index}
                    className={`${tagsCheckerGu & (1 << index)
                      ? "bg-blue text-white border border-blue"
                      : "bg-white text-blue border border-blue"} 
            px-3 py-1 rounded-full text-sm`}
                    onClick={() => handleTag(tag, index, tagsCheckerGu, setTagsCheckerGu)}>{tag}</button>
                ))}
                </div>

              </div> : <div> </div>

              //<div className='text-black font-bold font-noto'>{boardIdx} :: {boardIdx == 1 ? tagsCheckerHospi : tagsCheckerGu}</div> 
            }
        <button className="blueButton whiteDefault" type="submit" onSubmit={submitReview} onClick={submitReview}> 등록하기 </button>
    </div>

          </div> : <div></div>
      }
      {
        mode == 0 ? <div>
          <ReviewTagPage setBoardIdxCopy={setBoardIdx} 
            setMode={setMode}
            setTagsCheckerGuCopy={setTagsCheckerGu}
            setTagsCheckerHospiCopy={setTagsCheckerHospi}
            defaultGu={tagsCheckerGu}
            defaultHospi={tagsCheckerHospi}
            defaultIdx={boardIdx}
            />
          </div> : <div></div>

      }


    </div>
  );
};

export default ComWrite;