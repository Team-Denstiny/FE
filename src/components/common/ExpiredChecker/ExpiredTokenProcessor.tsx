import axios, { AxiosError, AxiosResponse } from 'axios';
import { GET_MY_NEW_TOKEN, LOGOUT } from '../../../Address';
import { ACCESS_TOKEN } from '../../../GlobalVariable';
import logout_handler from '../Logout';



const getNewToken = async () => {
    try {
        const response = await axios.post(GET_MY_NEW_TOKEN, null, {
            withCredentials: true,
            headers: {}
        });

        const data = response.data;
        const status_code = data["result"]["result_code"];
        if (status_code === 200) {
            const cur_access = response.headers["authorization"];
            localStorage.setItem(ACCESS_TOKEN, cur_access);
            console.log("cur Access Token : " + cur_access)
        }
    } catch (error) {
        console.log("Cur Access Token : " + error);
    }
};

export const expiredChecker = async (error: AxiosError, redirectLink:string) => {
    console.error("전달 오류")
    if (error.response) {
        const statusCode = error.response.status;
        if (statusCode === 401) {
            const body: AxiosResponse = error.response.data;
            if ("result_code" in body && body["result_code"] === 2001) {
                const result_code = body["result_code"];
                console.log(body["result_description"]);
                if (result_code === 2001) {
                    await getNewToken();
                }
                else if (result_code === 2006)  {
                    console.log("로그인 만료?");
                }
                else {
                    console.log("로그아웃 합니다");
                    window.alert("로그인 세션이 만료되어\n 로그아웃합니다!");
                    logout_handler(LOGOUT);
                    window.location.href = redirectLink;
                }
            }
        }
    }
    return null;
};
