import styled from 'styled-components';

interface ButtonProps {
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  padding?: string;
  borderRadius?: string;
  hoverBackgroundColor?: string;
  width?: string;
  height?: string;
}

const OvalButton = styled.button<ButtonProps>`
  display: inline-block;
  width: ${(props) => props.width || '350px'};
  padding: ${(props) => props.padding || '20px 20px'};

  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 500;

  font-size: ${(props) => props.fontSize || '16px'};
  color: ${(props) => props.color || 'white'};
  background-color: ${(props) => props.backgroundColor || '#0047AD'};
  border: none;
  border-radius: ${(props) => props.borderRadius || '50px'};
  cursor: pointer;
  text-align: center; /* 텍스트 중앙 정렬 */
  line-height: ${(props) => props.height || '0px'}; /* 텍스트 세로 중앙 정렬 */
  transition: background-color 0.3s ease;

  line-height: 


  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor || '#002F6C'};
  }

  &:focus {
    outline: none;
  }
`;

export default OvalButton;
