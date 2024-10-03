import axios, { AxiosHeaders, InternalAxiosRequestConfig } from 'axios';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { userSet } from '../../../components/common/UserSet';

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
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {

    const getData = async () => {
      await userSet();
    }


    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get("status");
    if (status == "created") {
      console.log("회원 가입 페이지로 이동");
      navigate('./createAddress');
    }
    else if (status == "logined") {
      console.log("메인 페이지로 이동"); 
      getData();
      navigate('/getMyId');
    }
  }, [location.search, navigate]);

  return (
    <div />
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
  );
}

export default ResendPage;