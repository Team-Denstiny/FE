import axios from "axios";
import {
    ACCESS_TOKEN,
    LOGIN_CHECK,
    USERID
} from "../../GlobalVariable";

const logout_handler = (link:string) => {
    console.log("logout url : " + link);

    axios.post(link, {}, {withCredentials:true})
        .then(response => {
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
        }).catch(error => console.error(name + " button error : ", error));
}

export default logout_handler;