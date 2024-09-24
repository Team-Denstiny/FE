import axios, { AxiosError } from "axios";
import { ACCESS_TOKEN } from "../../../GlobalVariable";
import { expiredChecker } from "../ExpiredChecker/ExpiredTokenProcessor";
import { objectExpression, ObjectExpression } from "@babel/types";
import { object } from "prop-types";

export const authString = "authorization";

export const TokenAxiosGet = async (address: string, cur_address: string) => {
    const userToken = localStorage.getItem(ACCESS_TOKEN) ;

    try {
        const response = await axios.get(address, { 
            withCredentials: true, 
            headers: { "authorization" : userToken } 
        });

        const status_code = response.status;
        if (status_code === 200) {
            const bodies = response.data;
            if (bodies["result"]["result_code"] === 200) {
                return bodies["body"];
            }
        }
    } catch (error: AxiosError | any) {
        expiredChecker(error, cur_address)
    };
    return null;
};

export const TokenAxiosPatch = async (address: string, cur_address: string, headers ?: object) => {
    const userToken = localStorage.getItem(ACCESS_TOKEN);
    
    try {
        const response = await axios.patch(address, headers, {
            withCredentials: true,
            headers: {"authorization": userToken}
        });

        const status_code = response.status;
        if (status_code === 200) {
            const bodies = response.data;
            if (bodies["result"]["result_code"] === 200) {
                return bodies["body"];
            }
        }

    } catch(error :AxiosError | any) {
        expiredChecker(error, cur_address)
    }
    return null;
}


export const TokenAxiosPost = async (address: string, cur_address: string, headers?: Record<string, any>) => {
    const userToken = localStorage.getItem(ACCESS_TOKEN) ;

    try {

        const response = await axios.post(address, headers, {
            withCredentials: true,
            headers: {"authorization": userToken}
        });

        const status_code = response.status;
        if (status_code === 200) {
            const bodies = response.data;
            if (bodies["result"]["result_code"] === 200) {
                return bodies["body"];
            }
        }
    } catch (error: AxiosError | any) {
        expiredChecker(error, cur_address)
    };
    return null;
};