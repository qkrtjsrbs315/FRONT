import styled from 'styled-components';
import { Link } from 'react-router-dom';

import useScreenRatio from './useScreenRatio.js'; //화면 비율 자동 계산기
import ChangeSize from './changeSize';

export const StyledHeader = styled.div`
  position: relative;

  width: calc(1440px * var(--screen-ratio)); 
  /*크기 자동 조정*/
  height: calc(50px * var(--screen-ratio)); 
  /*크기 자동 조정*/

  display: flex;
  background-color: #668BC4;
  align-items: center;

`;

export const SizeContainer = styled.div`
  position: absolute;

  left: calc(1000px * var(--screen-ratio));
  /*위치 자동 조정*/

  width: calc(350px * var(--screen-ratio)); 
  /*크기 자동 조정*/
  height: calc(50px * var(--screen-ratio)); 
  /*크기 자동 조정*/

  background-color: #335495;
  padding: 7px 12px;
`;

export const SizeButton = styled.button`

  left: calc(1000px * var(--screen-ratio));
  /*위치 자동 조정*/

  width: calc(30px * var(--screen-ratio)); 
  /*크기 자동 조정*/
  height: calc(30px * var(--screen-ratio)); 
  /*크기 자동 조정*/

  font-size: calc((20px * var(--screen-ratio)) + (4px * var(--changeSize) * var(--screen-ratio)));
  background-color: #FFF;
  border: none;
  padding: 0;
  cursor: pointer;
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
