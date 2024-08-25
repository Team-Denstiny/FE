import styled from 'styled-components';

interface TextBoxProps {
  fontSize?: string;
  padding?: string;
  borderRadius?: string;
  borderColor?: string;
  backgroundColor?: string;
  color?: string;
}

const OvalTextBox = styled.input<TextBoxProps>`
  display: block;
  position: relative;
  width: ${(props) => props.width || '350px'};
  height: ${(props) => props.height || '40px'};
  padding: ${(props) => props.padding || '10px 20px'};

  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 300;

  font-size: ${(props) => props.fontSize || '16px'};
  border: 2px solid ${(props) => props.borderColor || '#0047AD'};
  border-radius: ${(props) => props.borderRadius || '50px'};
  background-color: ${(props) => props.backgroundColor || 'white'};
  color: ${(props) => props.color || '#000'};
  box-sizing: border-box; /* 패딩과 테두리 포함한 크기 계산 */
  outline: none; /* 포커스 시 테두리 제거 */
  
  &:focus {
    border-color: ${(props) => props.borderColor || '#002F6C'};
    box-shadow: 0 0 4px ${(props) => props.borderColor || '#002F6C'};
  }
`;

export default OvalTextBox;