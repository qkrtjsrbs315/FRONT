import styled from "styled-components";
import { Link } from "react-router-dom";
export const HealthBoardContainer = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
  width: 1000px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HealthBoardHeaderContainer = styled.div`
  width: 100%;
  display : flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 20px;
`;
export const StyledP = styled.p`
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const GridInfoContainer = styled.div`
  display: grid;
  justify-content : center;
  grid-template-columns: repeat(3, 250px);
  gap: 50px;
`;

export const GridItem = styled.div`
  width: 250px;
  height: 50px;
  background-color: #ddd; /* 그리드 아이템 배경색 */
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ddd; /* 그리드 아이템 배경색 */
  color: #333; /* Link text color, customize as needed */
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #aaa; /* Change the background color on hover */
  }
`;
export const ShortLine = styled.div`
    width: 300px;
    height: 2px;
    background-color : black;
    margin-top : 20px;
    margin-bottom : 20px;
`
export const LongLine = styled.div`
    width: 850px;
    height: 2px;
    background-color : black;
    margin-top : 30px;
    margin-bottom : 30px;
`