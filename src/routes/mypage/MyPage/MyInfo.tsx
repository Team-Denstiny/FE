import React from "react"

interface IdInfo {
    keyName?:string,
    answer?:string
};

export const PutInfo: React.FC<IdInfo> = ({keyName, answer}) => {

    return (
        <div className="doubleContainer" style={{marginBottom: '15px'}}>
            <div className="blackText" style={{fontWeight:700, fontSize:'13px'}}> {keyName}</div>
            <div className="grayText" style={{fontWeight:300, fontSize:'13px'}}> {answer}</div>
        </div>
    )
}