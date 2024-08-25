import axios, { AxiosError } from "axios";
import { CREATE_NICKNAKME_CHECK } from "../../../Address";
import { expiredChecker } from "../ExpiredChecker/ExpiredTokenProcessor";

const checkNickname = async (email: string) => {
    const nickNameCheck = CREATE_NICKNAKME_CHECK + email;
    console.log("nickname => " + nickNameCheck);
    try {
        const response = await axios.get(nickNameCheck);
        const stat = response.status;
        console.log(response);
        if (stat == 200) {
            return response.data["isDuplicate"];
            //setOnButtonEmail(true);
            //setIsValidEmail(response.data["isDuplicate"]);
        }
        else {
            window.alert("네트워크 에러가 발생하였습니다.\n 잠시 후 시도하여주십시오");
            return null;
        }
    } catch(error : AxiosError | any) {
        expiredChecker(error, ".")
    }
    return null;
};

export default checkNickname;