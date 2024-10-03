import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-screen h-screen bg-gray flex justify-center items-start" >
            <div id="modal-root" className="w-full max-w-[390px] h-[calc(100%-60px)] max-h-full bg-white overflow-auto">
                {children}
            </div>
        </div>
    );
}
