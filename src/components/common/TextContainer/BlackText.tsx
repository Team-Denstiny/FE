import styled from 'styled-components';

interface TextProps {
    fontSize?:string;
    fontWeight?:string | number;
    paddingLeft?:string;
}

const BlackText = styled.div<TextProps>`
    display: inline-block;
    color: black;
    font-family: 'Noto Sans KR', sans-serif;
    font-style: normal;
    font-size: ${(props) => props.fontSize || '13px'};
    font-weight: ${(props) => props.fontWeight || 700};
    padding-left: ${(props) => props.paddingLeft || '20px'};
    line-height: 34px;
    text-align: left;
  `;

export default BlackText;