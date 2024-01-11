// volunteerhistorypage.style.js
import styled from 'styled-components';

export const PostContainer = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
  width: 1000px;
  height: 900px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const PostHeaderContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const StyledP = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InputGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const InputInnerGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
`;

export const InputLabel = styled.label`
  font-size: 1.2em;
  margin-top: 10px;
`;

export const InputField = styled.input`
  width: 50%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
`;

export const SubmitButton = styled.button`
  background-color: #3498db;
  border: none;
  color: white;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2em;
  margin-left : 15px;

  &:hover {
    background-color: #2185d0;
  }
`;
export const PasswordContainer = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  width : 300px;
  margin-bottom : 20px;
 
`
export const ButtonGroup = styled.div`
    display : flex;
    

`