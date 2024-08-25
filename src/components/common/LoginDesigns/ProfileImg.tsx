import React, { useEffect, useState } from 'react';
import DefaultImg from "../../../assets/defaultProfile.png";
import DefaultImgMain from "../../../assets/defaultProfileMain.png";
import './defaultImg.css';

interface ImageComponentProps {
    imageUrl?: string;
    className?:string;
}

const ProfileImg: React.FC<ImageComponentProps> = ({ imageUrl, className='image-container' }) => {
    const [hasError, setHasError] = useState<boolean>(false);
    const handleError = () => setHasError(true);

    const defaultImg = className === "image-container" ? DefaultImg : DefaultImgMain;
    const profileImg = className === "image-container" ? "profile-image" : "profile-image-big";

    useEffect(() => {
        setHasError(false);
    }, [imageUrl]);

    return (
        <div className={className}>
            <img
                src={hasError ? defaultImg : imageUrl}
                alt="Profile"
                onError={handleError}
                className={`${profileImg} ${hasError ? 'default-image' : ''}`}
            />
        </div>
    );
};

export default ProfileImg;