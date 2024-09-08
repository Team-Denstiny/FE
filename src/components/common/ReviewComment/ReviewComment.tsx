import React from 'react';
import './ReviewComment.css'; 
import {
    GRAY, LIGHT_GRAY
}from "../../../Color";

interface Comment{
    textday: string,
    text: string,
    UserIcon: string;
    name: string;
}

const ReviewButton: React.FC<Comment> = ({textday, text, UserIcon,name}) => {
    return (
        <div className="container" style={{display: 'flex'}}>
            <img src={UserIcon} style={{
            position: 'relative',
            width:'70px', 
            height:'70px',
            top:'1px',
            left: '1px',
            display: 'flex'
            }} />
            <div style={{position: 'relative'}}>
                <p style={{fontSize: '14px', fontWeight: 'bold' }}>{name}</p>
                <p style={{fontSize: '15px'}}>{textday} </p>
                <p style={{fontSize: '12px'}}>{text} </p>
            </div>
            <button className="button" style={{display: 'flex', marginLeft: 'auto'}}>
                
            </button>
            
        </div>
)}

export default ReviewButton;