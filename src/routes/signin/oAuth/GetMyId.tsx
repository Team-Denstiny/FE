
import axios from 'axios';
import { useState } from 'react';
import {
  SERVER_ENDPOINT
} from "../../../Address";
import {
  ACCESS_TOKEN,
  LOGIN_CHECK,
  USERID
} from "../../../GlobalVariable";
import RedirectHome from '../../../redirect/GoHome';

function GetMyId() {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [autoId, setAuthId] = useState<string | null>(null);

    axios.get(SERVER_ENDPOINT, { 
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

    return (
        <RedirectHome />
    )
};

export default GetMyId;
    
