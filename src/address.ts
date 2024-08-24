
export const MAIN_PAGE = 'http://localhost:5173/';

//////// SERVER //////////
export const SERVER_DOMAIN = "http://localhost:8080"
export const SERVER_ENDPOINT = SERVER_DOMAIN + "/api/login/endpoint";
export const LOGOUT = SERVER_DOMAIN + "/api/public/logout";
export const LOGIN_POST = SERVER_DOMAIN + "/api/users/login";
export const GET_MY_INFO = SERVER_DOMAIN + "/api/user/";

/////// CREATE_OPT ///////
export const NICKNAKME_CHECK = SERVER_DOMAIN + "/api/users/check-nickname?nickname=";
export const EMAIL_CHECK = SERVER_DOMAIN + "/api/users/check-email?email=";

/////// oAuth /////////////
export const NAVER_LOGIN = SERVER_DOMAIN + "/oauth2/authorization/naver";
export const KAKAO_LOGIN = SERVER_DOMAIN + "/oauth2/authorization/kakao";
