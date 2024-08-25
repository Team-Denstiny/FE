import styled from 'styled-components';

interface TextProps {
    fontSize?:string;
    fontWeight?:string | number;
    paddingLeft?:string;
}

const MainText = styled.div<TextProps>`
    display: inline-block;
    color: #0047AD;
    font-family: 'Noto Sans KR', sans-serif;
    font-style: normal;
    font-size: ${(props) => props.fontSize || '20px'};
    font-weight: ${(props) => props.fontWeight || 400};
    padding-left: ${(props) => props.paddingLeft || '20px'};
    line-height: 34px;
    text-align: left;
  `;

export default MainText;