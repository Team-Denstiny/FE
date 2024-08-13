import styled from 'styled-components';

interface TextProps {
    fontSize?:string;
    fontWeight?:string | number;
}

const MainText = styled.div<TextProps>`
    color: #0047AD;
    font-family: 'Noto Sans KR', sans-serif;
    font-style: normal;
    font-size: ${(props) => props.fontSize || '20px'};
    font-weight: ${(props) => props.fontWeight || 400};
    line-height: 34px;
    padding-top: 10px;
    padding-left: 20px;
    text-align: left;
  `;


export default MainText;