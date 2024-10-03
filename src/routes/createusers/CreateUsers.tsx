import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    CREATE_EMAIL_CHECK,
    CREATE_NICKNAKME_CHECK,
    CREATE_REGISTER
} from "../../Address";
import AddressSearch, { AddressButton } from "../../components/common/AddressSearch";
import {
    BlackTextContainer,
    ButtonContainer,
    ButtonContainerSmall,
    CheckboxContainer,
    TextCheckContainer,
    TextContainer
} from '../../components/common/LoginDesigns/Utility';
import BlackText from "../../components/common/TextContainer/BlackText";
import MainText from "../../components/common/TextContainer/BlueText";
import { GrayText } from "../../components/common/TextContainer/GrayText";
import TopBar from "../../components/common/TopBar";
import '../../index.css';

const CreateUsers: React.FC = () => {
    let createChecker: boolean = true;
    const navigate = useNavigate();
    const [onButtonNickname, setOnButtonNickname] = useState(false);
    const [onButtonEmail, setOnButtonEmail] = useState(false);
    const [isValidNickname, setIsValidNickname] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isValid, setIsValid] = useState(true);

    const [nickname, setNickname] = useState('');

    const [myAddress, setMyAddress] = useState('');
    const [myCoords, setCoords] = useState<{x: number, y: number}>({x: 0.0, y: 0.0});
    
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
        setIsValid(e.target.value === password);
    };

    const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(e.target.value);
    };
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };
    const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAge(e.target.value);
    };
    const handleMyAddress = (seletctAddr: string, y:number, x:number) => {
        setMyAddress(seletctAddr);
        setCoords({x, y});
    };

    const handleCheckNickname = () => {
        const nickCheckEmail = CREATE_NICKNAKME_CHECK + nickname;
        console.log("nickname => " + nickCheckEmail);
        axios.get(nickCheckEmail)
            .then(response => {
                const stat = response.status;
                console.log(response);
                if (stat == 200) {
                    setOnButtonNickname(true);
                    setIsValidNickname(response.data["isDuplicate"]);
                    if (!isValidNickname)
                        console.log(nickname + " can be made");
                    else
                        createChecker = false;
                }
                else {
                    window.alert("네트워크 에러가 발생하였습니다.\n 잠시 후 시도하여주십시오");
                    createChecker = false;
                }
            })
            .catch(error => console.error("Check Email error : " + error))
    };


    const handleCheckEmail = () => {
        const emailCheck = CREATE_EMAIL_CHECK + email;
        console.log("nickname => " + emailCheck);
        axios.get(emailCheck)
            .then(response => {
                const stat = response.status;
                console.log(response);
                if (stat == 200) {
                    setOnButtonEmail(true);
                    setIsValidEmail(response.data["isDuplicate"]);
                    if (!isValidEmail)
                        console.log(email + " can be made");
                    else
                        createChecker = false;
                }
                else {
                    window.alert("네트워크 에러가 발생하였습니다.\n 잠시 후 시도하여주십시오");
                    createChecker = false;
                }
            })
            .catch(error => console.error("Check Email error : " + error))
    };


    const letsCreate = () => {
        //event.preventDefault();
        if (myAddress.indexOf("서울") == -1) {
            window.alert("현재는 서울시만 지원됩니다.. 주소를 다시입력해주세요");
            return false;
        }

        console.log("제출");
        const checkerFunc = ((element:string, text: string) => {
            if (element == "")  {
                window.alert(text + "(이)가 빠졌습니다!");
                createChecker = false;
                return false;
            }
            return true;
        });

        const checkerFuncNumber = ((element:number, text:string) => {
            if (element == 0.0)  {
                window.alert(text + "(이)가 빠졌습니다!");
                createChecker = false;
                return false;
            }
            return true;
        });

        const elements: Record<string, string> = {
            "이름": name,
            "닉네임": nickname,
            "이메일": email,
            "생년월일": age,
            "전화번호": phone,
            "비밀번호": password,
            "주소": myAddress,
        }

        if (!isValid) {
            window.alert("동일하지 않는 비밀번호 입니다!");
            return false;
        }
        for (const eleKey in elements) {
            if (!checkerFunc(elements[eleKey], eleKey)) {
                return false;
            }
        }
        if (!checkerFuncNumber(myCoords.x, "위도 좌표")) {
            return false;
        }
        if (!checkerFuncNumber(myCoords.y, "경도 좌표")) {
            return false;
        }
        const buttons = [onButtonEmail, onButtonNickname, !isValidEmail, !isValidNickname];
        for (const but of buttons) {
            console.log("check : " + but);
            if (!but) {
                window.alert("필수 체크 버튼들을 확인해주세요!") ;
                return false;
            }
        }

        const headers = {
            "name" : name,
            "nick_name" : nickname,
            "email" : email,
            "birth_at" : Number(age.substring(0,4)),
            "phone_number" : phone,
            "password" : password,
            "address" : myAddress,
            "latitude" : Number(myCoords.x),
            "longitude" : Number(myCoords.y)
        }

        console.log("login header = " + headers);
        axios.post(CREATE_REGISTER, headers)
            .then(response => {
                const resp_check = response.data["result"]
                if (resp_check) {
                    const resp = resp_check["result_code"];
                    if (resp == 201) {
                        window.alert("계정생성에 성공하셨습니다!\n새롭게 로그인을 해주세요.");
                        console.log("성공~ id=" + response.data["body"]["member_id"]);
                        navigate("/signin");
                    }
                } 
                else {
                    console.log("Error");
                    window.alert("계정생성 오류 오류!");
                }
            })
            .catch(error => {
                window.alert("죄송합니다,\n 회원정보를 등록에 실패하였습니다.");
            });
    };

    return (
        <div>
            <TopBar text="회원가입" />
            <TextContainer>
                <MainText fontWeight={700}> 
                    간단한 회원가입
                    <b style={{fontWeight:400}}>으로</b>
                </MainText>
                <MainText fontWeight={400}> 
                    필요한 치과와 정보를 확인하세요!
                </MainText>
            </TextContainer>

            <BlackTextContainer style={{marginBottom: '-20px'}}>
                <BlackText> 이용 정보 입력</BlackText>
                <ButtonContainer>
                    <ButtonContainerSmall>
                        <input className="blueTextBox blueDefault" placeholder="이메일을 입력하세요" style={{width:'235px'}}
                            onChange={handleEmail} value={email}/>
                        <div className="spacing" style={{marginLeft: '5px', marginRight:'5px'}}/>
                        <div className="blueButtonSmall blueDefault" style={{width: '105px'}}
                            onClick={handleCheckEmail}> 중복확인</div>
                    </ButtonContainerSmall>
                </ButtonContainer>
                {onButtonEmail && isValidEmail && email && (
                    <TextCheckContainer color="red" style={{textAlign: "left"}}>
                    중복된 이메일입니다. 
                    </TextCheckContainer>
                )}
                {onButtonEmail && !isValidEmail && email && (
                    <TextCheckContainer color="blue" style={{textAlign: "left"}}>
                    중복되지 않은 이메일 입니다 
                    </TextCheckContainer>
                )}
                <ButtonContainer>
                    <br />
                    <input className="blueTextBox blueDefault" type="password" 
                            onChange={handlePasswordChange} value={password} placeholder="비밀번호를 입력하세요" />
                    <br />
                    <input className="blueTextBox blueDefault" type="password" placeholder="비밀번호를 한번 더 입력하세요" 
                            onChange={handleConfirmPasswordChange} />
                    <br />

                </ButtonContainer>
            </BlackTextContainer>
            {!isValid && confirmPassword && (
                <TextCheckContainer color="red">
                    동일한 비밀번호를 입력하세요
                </TextCheckContainer>
            )}
            {isValid && confirmPassword && (
                <TextCheckContainer color="blue">
                    비밀번호가 일치합니다
                </TextCheckContainer>
            )}

            <BlackTextContainer>
                <BlackText> 개인 정보 입력</BlackText>
                <ButtonContainer style={{paddingBottom: "7px"}}>
                    <input className="blueTextBox blueDefault" placeholder="이름을 입력하세요" 
                        onChange={handleName} value={name}/>
                    <br />
                    <ButtonContainerSmall>
                        <input className="blueTextBox blueDefault" placeholder="닉네임을 입력하세요" style={{width:'235px'}}
                            onChange={handleNickname} value={nickname}/>
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
                    <input className="blueTextBox blueDefault" placeholder="생년월일 8자리 (YYYYMMDD)" 
                        onChange={handleAge} value={age}/>
                    <br />
                    <ButtonContainerSmall>
                        <input className="blueTextBox blueDefault" placeholder="휴대폰 번호를 입력하세요" style={{width:'235px'}}
                            onChange={handlePhone} value={phone}/>
                        <div className="spacing" style={{marginLeft: '5px', marginRight:'5px'}}/>
                        <div className="blueButtonSmall blueDefault" style={{width: '105px'}}> 재전송</div>
                    </ButtonContainerSmall>
                    <br />

                    <AddressButton myAddress={myAddress} handleMyAddress={handleMyAddress} />
                </ButtonContainer>
            </BlackTextContainer>

            <BlackTextContainer>
                <BlackText> 서비스 이용약관 동의</BlackText>
                <br />
                <CheckboxContainer>
                    <input type="checkbox" className="custom-checkbox"/>
                    <BlackText> 이용약관 전체 동의</BlackText>
                </CheckboxContainer>

                <CheckboxContainer>
                    <input type="checkbox" className="custom-small-checkbox" />
                    <GrayText paddingLeft="5px" fontSize="12px"> [필수] 만 14세 이상입니다</GrayText>
                </CheckboxContainer>

                <CheckboxContainer>
                    <input type="checkbox" className="custom-small-checkbox" />
                    <GrayText paddingLeft="5px" fontSize="12px"> [필수] 이용약관 동의</GrayText>
                </CheckboxContainer>

                <CheckboxContainer>
                    <input type="checkbox" className="custom-small-checkbox" />
                    <GrayText paddingLeft="5px" fontSize="12px"> [필수] 개인정보 수집 및 이용 동의</GrayText>
                </CheckboxContainer>

                <CheckboxContainer>
                    <input type="checkbox" className="custom-small-checkbox" />
                    <GrayText paddingLeft="5px" fontSize="12px"> [선택] 광고성 정보 수신/마케팅 활용 동의</GrayText>
                </CheckboxContainer>
            </BlackTextContainer>

            <form onSubmit={letsCreate} />
            <ButtonContainer>
                <br /> <br />
                <button className="blueButton whiteDefault" onClick={letsCreate}> 회원가입 완료하기</button>
                <br /> <br />
            </ButtonContainer>
        </div>
    );
}

export default CreateUsers;
