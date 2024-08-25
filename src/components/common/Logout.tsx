import axios from "axios";
import { LOGOUT } from "../../Address";
import {
    ACCESS_TOKEN,
    LOGIN_CHECK,
    USERID
} from "../../GlobalVariable";

const logout_handler = async () => {
    const link = LOGOUT;
    console.log("logout url : " + link);
    try {
        const response = await axios.post(link, {}, { withCredentials: true });
        const status_code = response.status;
        if (status_code == 200) {
            console.log("log out 성공~");
            localStorage.setItem(USERID, "");
            localStorage.setItem(ACCESS_TOKEN, "");
            localStorage.setItem(LOGIN_CHECK, "false");
        }
        else {
            console.log("로그 아웃 실패 ㅠㅠ");
        }

    } catch (error) {
            console.error("button error : ", error);
            localStorage.setItem(USERID, "");
            localStorage.setItem(ACCESS_TOKEN, "");
            localStorage.setItem(LOGIN_CHECK, "false");
    }

    window.location.href = "/signin";
}

export default logout_handler;