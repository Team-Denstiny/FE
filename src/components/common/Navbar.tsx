import React from "react";
import { useNavigate } from "react-router-dom";
import home from "../../assets/navbar/home.png"
import homeClick from "../../assets/navbar/homeClick.png"
import heart from "../../assets/navbar/heart.png"
import heartClick from "../../assets/navbar/heartClick.png"
import community from "../../assets/navbar/community.png"
import profile from "../../assets/navbar/profile.png"
import profileClick from "../../assets/navbar/profileClick.png"

interface NavbarProps {
    text: string; 
}

const Navbar: React.FC<NavbarProps> = ({ text }) => {
    const navigate = useNavigate(); 

    let homeImg = home;
    let heartImg = heart;
    let communityImg = community;
    let profileImg = profile;

    const handleNavClick = (point:string) =>{
        navigate(`/${point}`)
    }


    switch(text) {
        case 'home':
            homeImg = homeClick;
            break;
        case 'heart':
            heartImg = heartClick;
            break;
        case 'community':
            communityImg = community;
            break;
        case 'profile':
            profileImg = profileClick;
            break;
        default:
            break;
    }

    return (
        <div className="w-full h-[60px] flex bg-white pl-[36px] gap-[52px] absolute bottom-0 left-0">
            <img src={homeImg} alt="home" className="w-[40px] h-[52px]" onClick={() => handleNavClick('')} />
            <img src={heartImg} alt="heart" className="w-[40px] h-[52px]" onClick={() => handleNavClick('heart')} />
            <img src={communityImg} alt="community" className="w-[40px] h-[52px]" onClick={() => handleNavClick('community')} />
            <img src={profileImg} alt="profile" className="w-[40px] h-[52px]" onClick={() => handleNavClick('profile')} />
        </div>
    
    
    
    );
}

export default Navbar;
