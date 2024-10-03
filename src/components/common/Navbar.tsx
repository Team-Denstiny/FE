import React from "react";
import { useNavigate } from "react-router-dom";
import community from "../../assets/Navbar/community.png";
import communityClick from "../../assets/Navbar/communityClick.png";
import heart from "../../assets/Navbar/heart.png";
import heartClick from "../../assets/Navbar/heartClick.png";
import home from "../../assets/Navbar/home.png";
import homeClick from "../../assets/Navbar/homeClick.png";
import profile from "../../assets/Navbar/profile.png";
import profileClick from "../../assets/Navbar/profileClick.png";

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
            communityImg = communityClick;
            break;
        case 'profile':
            profileImg = profileClick;
            break;
        default:
            break;
    }

    console.log("my Img : " + profileImg);
    return (
        <div className="w-[390px] h-[60px] flex relative bg-gray" style={{paddingTop: '6px', paddingLeft: '36px', gap: '52px', position: 'fixed', bottom: '0',}}>
            <img src={homeImg} alt="home" style={{width: '40px', height: '52px'}} onClick={() => handleNavClick('')} />
            <img src={heartImg} alt="heart" style={{width: '40px', height: '52px'}} onClick={() => handleNavClick('heart')} />
            <img src={communityImg} alt="community" style={{width: '40px', height: '52px'}} onClick={() => handleNavClick('community')} />
            <img src={profileImg} alt="profile" style={{width: '40px', height: '52px'}} onClick={() => handleNavClick('profile')} />
        </div>
    
    
    );
}

export default Navbar;
