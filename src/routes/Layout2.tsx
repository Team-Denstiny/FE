import React from "react";

/* 위 아래로 계속 내릴 수 있도록 설정*/ 
export default function Layout2({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-screen min-h-screen bg-gray flex justify-center items-center">
            <div className="w-full max-w-[390px] h-[844px] bg-white overflow-auto"> {/* 아이폰 13 크기, 흰색 배경 */}
                {children}
            </div>
        </div>
    );
}
