import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
    SERVER_ENDPOINT
} from "../../Address";
import AddressSearch from "../../components/common/AddressSearch";
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
        const payload = {
            "address": myAddress,
            "latitude": Number(myCoords.x),
            "longitude":  Number(myCoords.y)
        }
        axios.post(SERVER_ENDPOINT, payload, { withCredentials: true })
        .then(response => {

        const status = response.data['result']['result_code']
        if (status == 201) {
            navigate("/getMyId");
        }
      })
      .catch(error => {
        console.error('Error fetching auth token:', error);
      });    
    }
    return (
        <div>
            <TopBar text="주소 등록하기" />
            <TextContainer>
                <MainText fontWeight={700}> Denstiny 를 사용하기 위해 </MainText>
                <MainText fontWeight={400}> 
                    주소를 입력해주세요!
                </MainText>
            </TextContainer>
            <ButtonContainer>
                    <div className="searchContainer" style={{ position: 'relative', width: '350px' }}>
                        <input className="blueTextBox blueDefault" 
                                placeholder="도로명, 지번, 건물명 검색" 
                                value={myAddress}
                                onChange={(e) => setMyAddress(e.target.value)}
                                style={{width:'100%', paddingRight: '40px'}}/>
                        <AddressSearch buttonSize="30px" onComplete={handleMyAddress}/>
                    </div>
            </ButtonContainer>
            <GrayText paddingLeft="20px" fontWeight={500} fontSize="12px">
                    주소를 입력하면 근처 병원을 쉽게 찾을 수 있어요
            </GrayText>

            <ButtonContainer>
                <br /> <br />
                <button className="blueButton whiteDefault" onClick={submitHandler}> 회원가입 완료하기</button>
                <br /> <br />
            </ButtonContainer>
        </div>
    );
}

export default CreateUsers;