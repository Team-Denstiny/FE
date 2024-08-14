import React from "react";
import TopBar from "../../components/common/TopBar";
import MainText from "../../components/common/BlueText";
import styled from 'styled-components';
import '../../index.css'
import BlackText from "../../components/common/BlackText";
import {
    TextContainer,
    BlackTextContainer,
    ButtonContainer,
    CheckboxContainer,
    ButtonContainerSmall
}from '../../components/common/Utility'
import { GrayText } from "../../components/common/GrayText";

const CreateUsers: React.FC = () => {

    return (
        <div>
            <TopBar text="로그인" />
            <TextContainer>
                <MainText fontWeight={700}> 간단한 회원가입으로 </MainText>
                <MainText fontWeight={400} > 
                    필요한 치과와 정보를 확인하세요!
                </MainText>
            </TextContainer>

            <BlackTextContainer>
                <BlackText> 이용 정보 입력</BlackText>
                <ButtonContainer>
                    <input className="blueTextBox blueDefault" placeholder="이메일을 입력하세요" />
                    <br />
                    <input className="blueTextBox blueDefault" type="password" placeholder="비밀번호를 입력하세요" />
                    <br />
                    <input className="blueTextBox blueDefault" type="password" placeholder="비밀번호를 한번 더 입력하세요" />
                    <br />
                </ButtonContainer>
            </BlackTextContainer>

            <BlackTextContainer>
                <BlackText> 개인 정보 입력</BlackText>
                <ButtonContainer>
                    <input className="blueTextBox blueDefault" placeholder="이름을 입력하세요" />
                    <br />
                    <ButtonContainerSmall>
                        <input className="blueTextBox blueDefault" placeholder="닉네임을 입력하세요" style={{width:'235px'}}/>
                        <div className="spacing" style={{marginLeft: '5px', marginRight:'5px'}}/>
                        <div className="blueButtonSmall blueDefault" style={{width: '105px'}}> 중복확인</div>
                    </ButtonContainerSmall>
                    <br />
                    <input className="blueTextBox blueDefault" placeholder="생년월일 8자리 (YYYYMMDD)" />
                    <br />
                    <ButtonContainerSmall>
                        <input className="blueTextBox blueDefault" placeholder="휴대폰 번호를 입력하세요" style={{width:'235px'}}/>
                        <div className="spacing" style={{marginLeft: '5px', marginRight:'5px'}}/>
                        <div className="blueButtonSmall blueDefault" style={{width: '105px'}}> 재전송</div>
                    </ButtonContainerSmall>
                    <br />
                    <input className="blueTextBox blueDefault" placeholder="도로명, 지번, 건물명 검색" />
                </ButtonContainer>
                <GrayText paddingLeft="20px" fontWeight={500} fontSize="12px">
                    주소를 입력하면 근처 병원을 쉽게 찾을 수 있어요
                </GrayText>
            </BlackTextContainer>

            <BlackTextContainer>
                <BlackText> 서비스 이용약관 동의</BlackText>
                <br />
                <CheckboxContainer>
                    <input type="checkbox" className="custom-checkbox" />
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


            <ButtonContainer>
                <br /> <br />
                <button className="blueButton blueDefault"> 회원가입 완료하기</button>
                <br /> <br />
            </ButtonContainer>
        </div>
    );
}

export default CreateUsers;
