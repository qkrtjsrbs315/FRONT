import styled from 'styled-components';

export const ApplicationContainer = styled.div`
    width: calc(1100px * var(--screen-ratio)); 
    /*크기 자동 조정*/
    height: calc(600px * var(--screen-ratio)); 
    /*크기 자동 조정*/
    background-color : #DADADA;
    margin : 30px;

    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;


`
export const HeaderStyledP = styled.p`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 5px;

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
  align-items : flex-start;
  justify-content : space-around;
  width : 50%;
  height : 100%;

`;

export const InputInnerGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
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
export const ButtonField = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #4CAF50; /* Green background color */
  color: white; /* White text color */
  cursor: pointer;

  &:hover {
    background-color: #45a049; /* Darker green on hover */
  }

  &:disabled {
    background-color: #ddd; /* Light gray for disabled state */
    color: #555; /* Dark gray text for disabled state */
    cursor: not-allowed;
  }
`;

export const WrapGroup = styled.div`
    display : flex;
    flex-direction : column;



`