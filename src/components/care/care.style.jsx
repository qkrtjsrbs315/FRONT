import { styled } from "styled-components";

export const PageButton = styled.button`
  background-color: #3498db;
  border: none;
  color: white;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2em;
  display : flex;

  &:hover {
    background-color: #2185d0;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;

export const CareContainer = styled.div`
  display : flex;
  flex-direction : column;

`