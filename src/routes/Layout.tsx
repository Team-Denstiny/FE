import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-screen h-screen bg-gray flex justify-center items-center">
            <div id="modal-root" className="w-full max-w-[390px] h-full max-h-[844px] bg-white overflow-auto"> 
                {children}
            </div>
        </div>
    );
}
