import axios, { AxiosError } from "axios";
import { CREATE_EMAIL_CHECK } from "../../../Address";
import { expiredChecker } from "../ExpiredChecker/ExpiredTokenProcessor";

const checkEmailFunc = async (email: string) => {
    const emailCheck = CREATE_EMAIL_CHECK + email;
    console.log("email => " + emailCheck);
    try {
        const response = await axios.get(emailCheck);
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

export default checkEmailFunc;