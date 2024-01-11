import styled from 'styled-components';

export const ApplicationContainer = styled.div`
    width: calc(1100px * var(--screen-ratio)); 
    /*크기 자동 조정*/
    height: calc(500px * var(--screen-ratio)); 
    /*크기 자동 조정*/
    background-color : #DADADA;
    margin : 30px;

    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;


`
export const StyledP = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
`;
export const LongLine = styled.div`
    width: calc(900px * var(--screen-ratio)); 
    
    height: 2px;
    background-color : black;
    margin-top : 30px;
    margin-bottom : 30px;
`
export const InputForm = styled.form`
  width : 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 가로 3개의 열, 가로 1fr로 설정 */
  grid-template-rows: repeat(2, auto); /* 세로 2개의 행, 자동 높이 설정 */
  
  place-items: center;
`;

export const InputGroup = styled.div`
  display :flex;
  flex-direction : column;


`;

export const InputInnerGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;


export const InputLabel = styled.label`
  font-size: 1.2em;
  margin-top: 10px;
`;

export const InputField = styled.input`
  width: 135%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;