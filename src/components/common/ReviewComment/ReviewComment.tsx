import React from 'react';
import './ReviewComment.css'; 
import {
    GRAY, LIGHT_GRAY
}from "../../../Color";

interface Comment{
    textday: string,
    text: string,
    UserIcon: string;
}

const ReviewButton: React.FC<Comment> = ({textday, text, UserIcon}) => {
    return (
        <div className="container">
            <div style={{ display: 'flex'}}>
            <img src={UserIcon} style={{
            position: 'relative',
            width:'70px', 
            height:'70px',
            top:'1px',
            left: '1px',
            marginRight: '10px'}} />
            <p className="Day-text" style={{fontSize: '15px'}}><br /><br />{textday} </p>
            <p className="-text" style={{fontSize: '20px'}}>{text} </p>
            </div>
        </div>
)}

export default ReviewButton;