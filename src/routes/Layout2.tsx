import React from "react";

/* 위 아래로 계속 내릴 수 있도록 설정*/ 
export default function Layout2({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-screen h-screen bg-gray flex justify-center items-start" >
            <div id="modal-root" className="w-full max-w-[390px] h-full max-h-full bg-white overflow-auto">
                {children}
            </div>
        </div>
    );
}
