import React, { useEffect, useState } from 'react';
import axios, { InternalAxiosRequestConfig, AxiosHeaders} from 'axios';
import {
  SERVER_ENDPOINT,
  MAIN_PAGE
} from "../../address.ts";
import { useNavigate } from 'react-router-dom';
import RedirectHome from '../../redirect/GoHome.tsx';

axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    // headers가 undefined일 수 있으므로 빈 객체로 초기화
    if (!config.headers) {
      config.headers = new AxiosHeaders();
    }
    // Authorization 헤더 설정
    (config.headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});



function ResendPage() {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [autoId, setAuthId] = useState<string | null>(null);
  const navigate = useNavigate();

  const header = {
    "address": MAIN_PAGE
  }
  useEffect(() => {
    axios.post(SERVER_ENDPOINT, header, { withCredentials: true })
      .then(response => {

        const status = response.data['result']['result_code']
        if (status == 200) {

          const token = response.headers['authorization']; // 응답 헤더에서 토큰을 추출

          if (token) {
            setAuthToken(token);
            console.log(token);
            localStorage.setItem('authToken', token); // 로컬 스토리지에 저장
          }
        
          // id 가져오기
          const my_id = response.data['body']['id'];
          if (my_id) {
            setAuthId(my_id);
            console.log(my_id);
            localStorage.setItem('autoId', my_id);
          }
        }
      })
      .catch(error => {
        console.error('Error fetching auth token:', error);
      });
  }, [navigate]);

  return (
    /*
    <div>
      <h2>Authentication Example</h2>
      {authToken ? (
        <p>Token: {authToken}</p>
      ) : (
        <p>Loading token...</p>
      )}
      <br />

      <h2>Check My Id</h2>
      {autoId ? (
        <p>id: {autoId}</p>
      ) : (
        <p>Loading ID...</p>
      )}
    </div>
    */ 
   <RedirectHome />
  );
}

export default ResendPage;