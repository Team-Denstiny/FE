import { GET_MY_INFO } from "../../Address";
import { TokenAxiosDelete } from "../../components/common/GetWithToken/TokenGet";
import { USERID } from "../../GlobalVariable";

export const pageCnt = (body: any) => {
    if (body) {
        return body["total_pages"];
    }
    return 0;
}

export const deleteHandler = async (id: string) => {
    const userId = localStorage.getItem(USERID);
    const url = GET_MY_INFO + userId + "/board/" + id;
    console.log("삭제 -> " + url);

    const data = await TokenAxiosDelete(url, ".");
    if (data) {
        window.alert("게시글이 삭제되었습니다.");
    }
    else  {
        window.alert("게시글이 삭제에 실패했습니다.");
    }
}
