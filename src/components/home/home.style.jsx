import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 1000px;
  height: 400px;
  background-color: #dadada;
  display: flex;
  flex-direction: column; /* 컨테이너를 세로 방향으로 배치 */
  justify-content: center;
  align-items: center;
`;

export const StyledP = styled.p`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledButton = styled.button`
  margin-top: 50px; /* 버튼과 위쪽 간격 추가 */
  padding: 10px 20px;
  font-size: 18px;
  background-color: #4c6fac;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #334c7f;
  }
`;
