
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  SERVER_ENDPOINT
} from "../../../Address";
import {
  ACCESS_TOKEN,
  LOGIN_CHECK,
  USERID
} from "../../../GlobalVariable";
import RedirectHome from '../../../redirect/GoHome';
import { userSet } from '../../../components/common/UserSet';
import { LoadingText } from '../../../components/common/LoadingText';
import logo from "../../../assets/main/logo.png";
import navimg1 from "../../../assets/main/navimg.png";
import navimg2 from "../../../assets/main/navimg2.png";
import navimg3 from "../../../assets/main/navimg3.png";
import top from "../../../assets/main/topimage.png";
import Layout from '../../Layout';
import Layout2 from '../../Layout2';
import { Navbar } from 'react-bootstrap';

function GetMyId() {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [autoId, setAuthId] = useState<string | null>(null);
  const [goPass, setGoPass]  = useState(false);

  const getData = async () => {
    await axios.get(SERVER_ENDPOINT, { 
      withCredentials: true })
      .then(response => {

        const status = response.data['result']['result_code']
        if (status == 200) {
          const token = response.headers['authorization']; // 응답 헤더에서 토큰을 추출

          if (token) {
            setAuthToken(token);
            console.log(token);
            localStorage.setItem(ACCESS_TOKEN, token); // 로컬 스토리지에 저장
          }
        
          // id 가져오기
          const my_id = response.data['body']['id'];
          if (my_id) {
            setAuthId(my_id);
            console.log(my_id);
            localStorage.setItem(LOGIN_CHECK, "true");
            localStorage.setItem(USERID, my_id);
          }
        }
      })
      .catch(error => {
        console.error('Error fetching auth token:', error);
      });
  }


    useEffect(() => {
      const getDatas = async () => {
        await getData();
        await userSet();
        setGoPass(true);
      }

      console.log("Middle Get Data");
      getDatas();
    })

    if (!goPass) {
      return (
        <Layout2>
            <div className="flex relative pt-6 pb-12">
                <img src={logo} style={{ position: 'absolute', left: '20px'}}  ></img>
            </div>
            <img src={top}></img>
            <div className="flex relative gap-5 pt-6 pl-5 pb-12">
                <img src={navimg1}></img>
                <img src={navimg2}></img>
                <img src={navimg3}></img>
            </div>

          <LoadingText text='사용자 정보를 가져오는 중 ...' />

        </Layout2>
    );
    }

    return (
        <RedirectHome />
    )
};

export default GetMyId;
    
