import axios, { AxiosError } from "axios";
import { ACCESS_TOKEN } from "../../../GlobalVariable";
import { expiredChecker } from "../ExpiredChecker/ExpiredTokenProcessor";
import { objectExpression, ObjectExpression } from "@babel/types";
import { object } from "prop-types";

export const authString = "authorization";

export const TokenAxiosGet = async (address: string, cur_address: string, depth=0): Promise<any | null> => {
    const userToken = localStorage.getItem(ACCESS_TOKEN) ;

    if (depth==3) return null;
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
        await expiredChecker(error, cur_address);
        if (depth == 3) return null;
        return await TokenAxiosGet(address, cur_address, depth+1);
    };
    return null;
};

export const TokenAxiosPatch = async (address: string, cur_address: string, headers ?: object, depth=0): Promise<any | null> => {
    const userToken = localStorage.getItem(ACCESS_TOKEN);
    
    if (depth==3) return null;
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
        await expiredChecker(error, cur_address)
        if (depth == 3) return null;
        return await TokenAxiosPatch(address, cur_address, headers, depth+1);
    }
    return null;
}


export const TokenAxiosPost = async (address: string, cur_address: string, headers?: Record<string, any>, depth=0): Promise<any | null> => {
    const userToken = localStorage.getItem(ACCESS_TOKEN) ;

    if (depth==3) return null;
    try {

        const response = await axios.post(address, headers, {
            withCredentials: true,
            headers: {"authorization": userToken}
        });
        
        console.log(response.status);
        const status_code = response.status;
        if (status_code === 200) {
            const bodies = response.data;
            if (bodies["result"]["result_code"] === 200) {
                return bodies["body"];
            }
            if (bodies["result"]["result_code"] === 201) {
                console.log("result_code : " + bodies["result"]["result_code"]);
                return bodies["body"];
            }
            else
                return null;
        }
    } catch (error: AxiosError | any) {
        await expiredChecker(error, cur_address);
        if (depth == 3) return null;
        return await TokenAxiosPost(address, cur_address, headers, depth+1);
    };
    return true;
};

export const TokenAxiosDelete = async (address: string, cur_address: string, header={}, depth=0): Promise<any | null> => {
    const userToken = localStorage.getItem(ACCESS_TOKEN) ;
    console.log("token Axios delete fuck : " + depth);
    if (depth==3) return null;

    try {
        const response = await axios.delete(address, { 
            withCredentials: true, 
            headers: { "authorization" : userToken } ,
            data: header
        });

        const status_code = response.status;
        if (status_code === 200) {
            const bodies = response.data;
            if (bodies["result"]["result_code"] === 200) {
                return bodies["body"];
            }
        }
    } catch (error: AxiosError | any) {
        await expiredChecker(error, cur_address);
        console.log("debugsss: depth" + depth);
        return await TokenAxiosDelete(address, cur_address ,header, depth+1);
    };
    return null;

}

export const TokenAxiosPostMultipart = async (address: string, cur_address: string, headers?: Record<string, any>, depth=0): Promise<any | null> => {
    const userToken = localStorage.getItem(ACCESS_TOKEN) ;

    try {

        const response = await axios.post(address, headers, {
            withCredentials: true,
            headers: {"authorization": userToken,
                'Content-Type': 'multipart/form-data',
            }
        });

        const status_code = response.status;
        if (status_code === 200) {
            const bodies = response.data;
            if (bodies["result"]["result_code"] === 200) {
                return bodies["body"];
            }
        }
    } catch (error: AxiosError | any) {
        await expiredChecker(error, cur_address)
        if (depth == 3) return null;
        return await TokenAxiosPost(address, cur_address, headers, depth+1);
    };
    return null;
};