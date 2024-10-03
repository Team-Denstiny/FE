import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
    SERVER_ENDPOINT
} from "../../address";
import AddressSearch, { AddressButton, openPostcodePopup } from "../../components/common/AddressSearch";
import {
    ButtonContainer,
    GrayText,
    MainText,
    TextContainer
} from "../../components/common/LoginDesigns/Utility";
import TopBar from "../../components/common/TopBar";

const CreateUsers: React.FC = () => {
    const [myAddress, setMyAddress] = useState('');
    const [myCoords, setCoords] = useState<{x: number, y: number}>({x: 0.0, y: 0.0});
    const navigate = useNavigate();
    const handleMyAddress = (seletctAddr: string, y:number, x:number) => {
        setMyAddress(seletctAddr);
        setCoords({x, y});
        console.log(seletctAddr, x, y);
    };

    const submitHandler = () => {

        if (myAddress.indexOf("서울") == -1) {
            window.alert("현재는 서울시만 지원됩니다.. 다시입력해주세요");
            return;
        }

        const payload = {
            "address": myAddress,
            "latitude": Number(myCoords.x),
            "longitude":  Number(myCoords.y)
        }
        axios.post(SERVER_ENDPOINT, payload, { withCredentials: true })
        .then(response => {

        const status = response.data['result']['result_code']
        if (status == 201) {
            window.alert("회원가입에 성공했습니다!\n다시 로그인 해주세요!");
            navigate("/signin");
        }
      })
      .catch(error => {
        console.error('Error fetching auth token:', error);
      });    
    }
    return (
        <div>
            <TopBar text="주소 등록하기" clickHandler={()=>navigate("/signin")}/>
            <TextContainer>
                <MainText fontWeight={700}> Denstiny 를 사용하기 위해 </MainText>
                <MainText fontWeight={400}> 
                    주소를 입력해주세요!
                </MainText>
            </TextContainer>

            <AddressButton myAddress={myAddress} handleMyAddress={handleMyAddress} />
            <ButtonContainer>
                <br /> <br />
                <button className="blueButton whiteDefault" onClick={submitHandler}> 회원가입 완료하기</button>
                <br /> <br />
            </ButtonContainer>
        </div>
    );
}

export default CreateUsers;