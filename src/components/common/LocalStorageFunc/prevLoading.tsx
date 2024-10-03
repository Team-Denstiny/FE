import axios from "axios";
import { JJIM_HOSPI_LIST, JJIM_POST_LIST, USERID } from "../../../GlobalVariable";
import { GET_MY_INFO } from "../../../Address";
import { TokenAxiosGet } from "../GetWithToken/TokenGet";
import { setJsonList } from "./listAndJson";

export const prevLoad_LikeHospi = async () => {

    const userId = localStorage.getItem(USERID);
    if (userId === "")
        return;

    const url = GET_MY_INFO + userId + "/bookmark";
    const data = await TokenAxiosGet(url, ".");

    const stringList:string[] = data.map((val: any) => (
        val.id
    ));

    console.log("stringList : " + stringList);
    setJsonList(JJIM_HOSPI_LIST, stringList);
};


export const prevLoad_likePost = async() => {
    const userId = localStorage.getItem(USERID);
    if (userId === "")
        return;
    const url = GET_MY_INFO + userId + "/board/myheartboards";
    const data = await TokenAxiosGet(url, ".");
    
    const stringList:string[] = data.map((val: any) => (
        val.board_id
    ));

    console.log("stringList : " + stringList);
    setJsonList(JJIM_POST_LIST, stringList);
}