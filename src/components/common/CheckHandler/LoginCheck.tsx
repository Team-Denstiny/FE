import { LOGIN_CHECK } from "../../../GlobalVariable";
import { userClear } from "../UserClear";

const LoginCheck = (alertText="", defaultCheck="true") => {
        const login_check = localStorage.getItem(LOGIN_CHECK);
        console.log("login checker => " + login_check);
        if (login_check == defaultCheck) {
            if (alertText != "") { 
                window.alert(alertText);
            }
            if (defaultCheck == "false") 
                window.location.href = "/signin";
            else {
                window.location.href = "/";
            }
        }
        return true;
}

export default LoginCheck;