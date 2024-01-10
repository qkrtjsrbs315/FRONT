import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  background-color: #668BC4;
  align-items: center;
  justify-content: space-between;
`;

export const SizeContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  background-color: #335495;
  padding: 7px 12px;
`;

export const SizeButton = styled.button`
  background-color: #FFF;
  border: none;
  width: 20px;
  height: 20px; /* height 값 추가 */
`;

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  background-color: #4C6FAC; 
  padding : 10px;
  text-align: center;
  color: white;
  height: 70px;
  border: 3px solid black;
  width: calc(100% / 6);

  &:hover {
    background-color: #335495;
    cursor: pointer; /* 마우스 커서를 포인터로 변경 */
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white; /* 링크 색상을 흰색으로 변경 */
  display: block;
  height: 100%; /* 높이를 100%로 지정 */
  width: 100%; /* 너비를 100%로 지정 */
  font-size : 1.5em;
  text-align : center;
  margin-top : 15px;

  &:hover {
    text-decoration: underline;
  }
`;
