import React, { useEffect, useState } from "react";
import {
    USERID
} from "../../../GlobalVariable";
import { CHANGE_MY_INFO, GET_MY_INFO } from "../../../address";
import checkNickname from "../../../components/common/CheckHandler/CheckNickname";
import { TokenAxiosGet, TokenAxiosPatch } from "../../../components/common/GetWithToken/TokenGet";
import LoginCheck from "../../../components/common/LoginCheck";
import TapBar from "../../../components/common/TopBar";
import {
    BlackText,
    BlackTextContainer,
    ButtonContainer,
    ButtonContainerSmall,
    TextCheckContainer
} from '../../../components/common/Utility';


const ModifyMyPage: React.FC = () => {
    const userId = localStorage.getItem(USERID);
    const myAddress = GET_MY_INFO + userId;
    const myModifyAddr = CHANGE_MY_INFO + userId;

    const [nickname, setNickname] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [addr, setAddr] = useState('');
    const [birth, setBirth] = useState('');

    const [isValidNickname, setIsValidNickname] = useState(false);
    const [onButtonNickname, setOnButtonNickname] = useState(false);

    const [userNickname, setUserNickname] = useState('');
    const [userName, setUserName] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userAddr, setUserAddr] = useState('');
    const [userAge, setUserAge] = useState('');
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };
    const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserPhone(e.target.value);
    };
    const handleAddr = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserAddr(e.target.value);
    };
    const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserAge(e.target.value);
    };
    const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserNickname(e.target.value);
    };

    const handleCheckNickname = async () => {
        let ret_val:null | boolean = await checkNickname (userNickname);
        if (ret_val == null) {
            setOnButtonNickname(false);
        } else {
            setOnButtonNickname(true);
            setIsValidNickname(ret_val);
        }
    }

    const GetData = async () => {
        const myData = await TokenAxiosGet(myAddress, "/profile/mypage/modify");
        setName(myData["name"]);
        setNickname(myData["nick_name"]);
        setPhone(myData["phone_number"]);
        setAddr(myData["address"]);
        setBirth(myData["birth_at"]);
        console.log(myData["name"]);
    };

    useEffect(() => {
        LoginCheck("로그인 부터 하쇼@@@", "false");
        GetData();
        console.log(nickname);

    }, [])

    const letsChange = async () => {
        type MyDictionary = Record<string, string>;
        let myDict: MyDictionary = {};

        if (userNickname != "")  {
            if (!onButtonNickname) {
                window.alert("닉네임 중복 확인 버튼을 눌러주세요!");
                return false;
            }
            else if (isValidNickname) {
                window.alert("중복된 닉네임은 사용이 불가합니다.");
                return false;
            }
            myDict["nick_name"] = userNickname;
        }
 
        if (userName != "")
            myDict["name"] = userName;
        if (userAge != "")
            myDict["birth_at"] = userAge.substring(0,4);
        if (userPhone != "")
            myDict["phone_number"] = userPhone;
        if (userAddr != "")
            myDict["address"] = userAddr;

        console.log("change : " + myDict["address"]);
        const returns = await TokenAxiosPatch(myModifyAddr, "/profile/mypage/modify", myDict);
        if (returns != null) {
            window.alert("---! 사용자 정보 변경 정보 !--- \n"+
                "이름 : " + returns["name"]  + "\n"+
                "닉네임 : " + returns["nick_name"]  + "\n"+
                "태어난연도 : " + returns["birth_at"]  + "\n"+
                "전화번호 : " + returns["phone_number"]  + "\n"+
                "주소 : " + returns["address"]  + "\n"+
                "이메일 : " + returns["email"]  + "\n"
                );
            window.location.href = "/profile/mypage";
        }
        
    };

    return (
        <div>
            <TapBar text="회원정보 수정" />

            <BlackTextContainer>
                <BlackText> 회원정보 </BlackText>
                <ButtonContainer>
                    <input className="blueTextBox blueDefault" placeholder={name} 
                        onChange={handleName} value={userName}/>
                    <br />
                    <ButtonContainerSmall>
                        <input className="blueTextBox blueDefault" placeholder={nickname} style={{width:'235px'}}
                            onChange={handleNickname} value={userNickname}/>
                        <div className="spacing" style={{marginLeft: '5px', marginRight:'5px'}}/>
                        <div className="blueButtonSmall blueDefault" style={{width: '105px'}}
                            onClick={handleCheckNickname}> 중복확인</div>
                    </ButtonContainerSmall>
                </ButtonContainer>
                {onButtonNickname && isValidNickname && nickname && (
                    <TextCheckContainer color="red" style={{textAlign: "left"}}>
                    중복된 닉네임입니다. 
                    </TextCheckContainer>
                )}
                {onButtonNickname && !isValidNickname && nickname && (
                    <TextCheckContainer color="blue" style={{textAlign: "left"}}>
                    허용 가능 닉네임입니다. 
                    </TextCheckContainer>
                )}

                <ButtonContainer>
                    <br />
                    <input className="blueTextBox blueDefault" placeholder={birth} 
                        onChange={handleAge} value={userAge}/>
                    <br />
                    <ButtonContainerSmall>
                        <input className="blueTextBox blueDefault" placeholder={phone} style={{width:'235px'}}
                            onChange={handlePhone} value={userPhone}/>
                        <div className="spacing" style={{marginLeft: '5px', marginRight:'5px'}}/>
                        <div className="blueButtonSmall blueDefault" style={{width: '105px'}}> 인증하기</div>
                    </ButtonContainerSmall>
                    <br />
                    <input className="blueTextBox blueDefault" placeholder={addr} 
                        onChange={handleAddr} value={userAddr}/>
                </ButtonContainer>
            </BlackTextContainer>


            <ButtonContainer>
                <br /> <br />
                <button className="blueButton blueDefault"
                    onClick={letsChange}> 변경하기</button>
                <br /> <br />
            </ButtonContainer>
        </div>
    )
}

export default ModifyMyPage;