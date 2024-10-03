import { GET_MY_INFO } from "../../Address";
import { ADDR, GU, NAME, NICKNAME, USER_LATITUDE, USER_LONGITUDE, USERID } from "../../GlobalVariable";
import { TokenAxiosGet } from "./GetWithToken/TokenGet";


export const userSet = async () => {
    const userId = localStorage.getItem(USERID);
    const apiAddr = GET_MY_INFO + userId;
    const ret_name_obj = await TokenAxiosGet(apiAddr, ".");
    console.log("in userSet");

    const addr: string = ret_name_obj["address"];
    const addrParts = addr.split(" ");
    console.log("주소 : " + addrParts[1]);
    const gu = addrParts[1];
    if (gu) {
        localStorage.setItem(GU, gu);
    } else {
        console.log("구로 끝나는 부분이 없습니다.");
    }
    localStorage.setItem(NAME, ret_name_obj["name"]);
    localStorage.setItem(ADDR, addr);
    localStorage.setItem(NICKNAME, ret_name_obj["nick_name"]);
    localStorage.setItem(USER_LONGITUDE, ret_name_obj["longitude"]);
    localStorage.setItem(USER_LATITUDE, ret_name_obj["latitude"]);

    console.log("name", localStorage.getItem(NAME));
}
