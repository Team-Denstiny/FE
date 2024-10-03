import { ACCESS_TOKEN, ADDR, EMPTY_IMG, GU, LOGIN_CHECK, NAME, NICKNAME, USER_LATITUDE, USER_LONGITUDE, USERID } from "../../GlobalVariable"

export const userClear = () => {
    localStorage.setItem(USERID, "");
    localStorage.setItem(ACCESS_TOKEN, "");
    localStorage.setItem(ADDR, "");
    localStorage.setItem(NAME, "");
    localStorage.setItem(GU, "");
    localStorage.setItem(LOGIN_CHECK, "false");
    localStorage.setItem(NICKNAME, "");
    localStorage.setItem(USER_LATITUDE, "");
    localStorage.setItem(USER_LONGITUDE, "");
}
