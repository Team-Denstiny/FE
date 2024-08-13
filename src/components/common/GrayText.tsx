import styled from 'styled-components';


interface TextProps {
    fontSize?:string;
    fontWeight?:string | number;
    decoration?:string;
    paddingLeft?:string;
}

export const GrayText = styled.div<TextProps>`
    font-family: 'Noto Sans KR', sans-serif;
    font-style: normal;
    color: gray;
    font-size: ${(props) => props.fontSize || '14px'};
    font-weight: ${(props) => props.fontWeight || 400};
    padding-left: ${(props) => props.paddingLeft || '0px'};
    text-decoration: none;  
`;

export const GrayLink = styled.a<TextProps>`
    font-family: 'Noto Sans KR', sans-serif;
    font-style: normal;
    color: gray;
    font-size: ${(props) => props.fontSize || '14px'};
    font-weight: ${(props) => props.fontWeight || 500};
    text-decoration: ${(props) => props.decoration || 'none'};


  
  &:hover {
    text-decoration: underline; /* 호버 시 밑줄 추가 */
    color: #002F6C; /* 호버 시 색상 변경 */
  }
`
