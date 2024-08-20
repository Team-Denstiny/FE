import React from "react";
import Navbar from "../components/common/Navbar";

export default function NavLayout({ children, text }: { children: React.ReactNode, text: string }) {
    return (
        <div className="w-screen h-screen bg-gray flex justify-center items-center">
            <div id="modal-root" className="relative w-full max-w-[390px] h-full max-h-[844px] bg-white flex flex-col"> 
                <div className="overflow-y-auto flex-grow pb-[60px]"> 
                    {children}
                </div>
                
                <Navbar text={text} />
            </div>
        </div>
    );
}
