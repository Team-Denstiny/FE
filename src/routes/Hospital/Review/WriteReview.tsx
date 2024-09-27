import React, { useEffect, useState } from 'react';
import nextIcon from "../../assets/NextBar.png";
import TapBar from '../../../components/common/TopBar';
import './ReviewPage.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { USERID } from '../../../GlobalVariable';
import { TokenAxiosPost } from '../../../components/common/GetWithToken/TokenGet';
import { GET_MY_INFO } from '../../../Address';

const WriteReview: React.FC = () => {
  const navigate = useNavigate();
  const [hospitalName, setHospitalName] = useState<string>();
  const [hospitalId, setHospitalId] = useState<string>();
  const [reviewText, setReviewText] = useState('');
  const location = useLocation();
  const params = (new URLSearchParams(location.search));

  const tags = ['전체', '임플란트', '충치치료', '치아교정', '사랑니발치', '치과 스케일링'];
  const [tagsChecker, setTagsChecker] = useState(0x0);
  const handleSearch = (term: string) => {
    // 여기에 검색 로직을 구현합니다.
    console.log('Searching for:', term);
    // 예를 들어, 병원 이름을 검색어로 설정할 수 있습니다.
    setHospitalName(term);
  };

  const handleTag = (tag: string, index:number) => {
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
    sessionStorage.setItem("tags"+hospitalId, tagsChecker.toString());
  }

  useEffect(() => {
    const hospi_name = params.get("n");
    const hospi_id = params.get("id");

    const reviewTextLocal = sessionStorage.getItem("reviewText"+hospi_id);
    if (reviewTextLocal)
        setReviewText(reviewTextLocal);

    const tagsCheckerLocal = sessionStorage.getItem("tags"+hospi_id);
    if (tagsCheckerLocal)
        setTagsChecker(Number(tagsCheckerLocal));
    
    console.log("hospiName = " + params.get("n") + ", id="+hospi_id);
    if (hospi_name)
        setHospitalName(hospi_name);
    if (hospi_id)
        setHospitalId(hospi_id);

  }, []);

  const saveLines = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(e.target.value);
    sessionStorage.setItem("reviewText"+hospitalId, e.target.value);
  }

  const submitReview = async () => {
    //tags는 나중에 처리
    const userId = await localStorage.getItem(USERID);
    const headers = {
      "user_id": userId,
      "content": reviewText
    };
    
    const reviewUrl = GET_MY_INFO + userId + "/review/" + hospitalId;
    console.log("reviewUrl : " + reviewUrl);
    console.log("header : " + headers.content)  ;
    
    const data = await TokenAxiosPost(reviewUrl, ".", headers);
    
    await localStorage.setItem("reviewText"+hospitalId, "");
    await localStorage.setItem("tags"+hospitalId, "0");
    console.log("debug : " + localStorage.getItem("reviewText" + hospitalId));
    window.alert(hospitalName + "병원에 대한 고객님의 리뷰가 정상 등록되었습니다!\n감사합니다.");
    navigate(-1);

  }

  return (
    <div>
    <TapBar text="후기 작성" />
    <div className="review-page">
        <div
          className="hospital-input"
        > {hospitalName} </div>
        <textarea
          value={reviewText}
          onChange={(e) => saveLines(e)}
          placeholder="내용을 입력하세요."
          className="review-textarea" style={{height: '300px'}}
          
        />
        <div className="tags">
          {tags.map((tag, index) => (
            <button key={index} 
                className={ tagsChecker & (1<<index) ? "tag-button-after" :"tag-button"} 
                onClick={() => handleTag(tag, index)}>{tag}</button>
          ))}
        </div>
          constructor(parameters) {
            
          }
        <button className="blueButton whiteDefault" type="submit" onSubmit={submitReview} onClick={submitReview}> 등록하기 </button>
    </div>

    </div>
  );
};

export default WriteReview;