import React from "react"

interface loadingTextProp {
    text ?: string;
}
export const LoadingText:React.FC<loadingTextProp> = ({text="로딩중..."}) => {

    return (
        <div className="flex justify-center">
            <div className="font-noto text-blue text-[20px] font-bold mt-[80px]">
                {text}
            </div>
        </div>
    );
};