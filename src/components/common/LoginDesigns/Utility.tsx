import styled from "styled-components";

export const TextContainer = styled.div`
    padding-top: 20px;
`

export const FindContainer = styled.div`
    position: relative;
    line-height: 20px;
    padding-right: 20px;
    text-align: right;
`

export const MiddleTextContainer = styled.div`
    position: relative;
    padding-bottom: 20px;
    padding-top: 60px;
    text-align: center;
`
/*
export const ButtonContainer = styled.div` 
    display: flex;
    height: 30vh;
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
`
*/

export const BlackTextContainer = styled.div`
    padding-top:20px;
    text-align: left;
`

export const ButtonContainer = styled.div` 
    display: flex;
    padding-top: 10px;

    flex-direction: column; /* 요소들을 세로로 나열 */
    align-items: center; /* 수평 중앙 정렬 */
    color: white;
    justify-content: center; /* 수직 중앙 정렬 *
`
export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center; /* 수평 중앙 정렬 */
    justify-content: left; /* 수직 중앙 정렬 *
`
export const ButtonContainerSmall = styled.div`
    display: flex;
    padding-top: 0px;
    align-items: center; /* 수평 중앙 정렬 */
    justify-content: center; /* 수직 중앙 정렬 *
`
interface TextProps {
    fontSize?:string;
    fontWeight?:string | number;
    paddingLeft?:string;
}

export const BlackText = styled.div<TextProps>`
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

export const MainText = styled.div<TextProps>`
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


  interface TextPropsGray {
    fontSize?:string;
    fontWeight?:string | number;
    decoration?:string;
    paddingLeft?:string;
    display?:string;
    textAlign?:string;
}

export const GrayText = styled.div<TextPropsGray>`
    display: ${(props) => props.display || 'none'}
    text-align: ${(props) => props.textAlign || ''}
    font-family: 'Noto Sans KR', sans-serif;
    font-style: normal;
    color: gray;
    font-size: ${(props) => props.fontSize || '14px'};
    font-weight: ${(props) => props.fontWeight || 400};
    padding-left: ${(props) => props.paddingLeft || '0px'};
    text-decoration: none;  
`;

export const GrayLink = styled.a<TextPropsGray>`
    display: ${(props) => props.display || 'none'}
    text-align: ${(props) => props.textAlign || ''}
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


interface LineProps{
    position?:string,
    width?:string,
    height?:string,
    color?:string,
    backgroundColor?:string,
};
export const VerticalLine = styled.div<LineProps>`
    position : ${(props) => props.position || 'relative'};
    justify-content: center;
    width : ${(props) => props.width || '350px'};
    height : ${(props) => props.height || '1px'};
    background-color : ${(props) => props.backgroundColor || 'gray'};
    margin: 0 auto;
`

interface TextProps2 {
    fontStyle?: string,
    fontWeight?: string | number,
    color?:string,
    fontSize?:string,
    textDecoration?:string,
    display?:string,
    textAlign?:string
}
export const TextCheckContainer = styled.p<TextProps2>`
    font-family: 'Noto Sans KR', sans-serif;
    font-style: ${(props) => props.fontStyle || 'normal'};
    font-weight: ${(props) => props.fontWeight || 300};
    color: ${(props) => props.color || 'gray'};
    font-size: ${(props) => props.fontSize || '14px'};
    text-align: ${(props) => props.textAlign || 'left'};
    text-decoration: ${(props) => props.textDecoration || 'none'};
    padding-left: 20px;
    display: ${(props) => props.display || 'block'};
`

export function formatDate(dateString: string) {
    // 문자열을 Date 객체로 변환
    const date = new Date(dateString);
    
    // 연도, 월, 일 추출
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, '0');
    
    // 원하는 형식으로 반환
    return `${year}.${month}.${day}`;
}