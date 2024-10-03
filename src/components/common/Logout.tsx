import axios from "axios";
import { LOGOUT } from "../../Address";
import {
    ACCESS_TOKEN,
    LOGIN_CHECK,
    USERID
} from "../../GlobalVariable";
import { userClear } from "./UserClear";

const logout_handler = async () => {
    const link = LOGOUT;
    console.log("logout url : " + link);
    try {
        const response = await axios.post(link, {}, { withCredentials: true });
        const status_code = response.status;
        if (status_code == 200) {
            console.log("log out 성공~");
            userClear();
        }
        else {
            console.log("로그 아웃 실패 ㅠㅠ");
        }

    } catch (error) {
            userClear();
    }

    window.location.href = "/signin";
}

export default logout_handler;