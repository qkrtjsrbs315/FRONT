// board.style.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BoardContainer = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
  width: 1000px;
  max-height: 720px;
  overflow-y: auto; /* 스크롤이 필요한 경우 스크롤 표시 */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledP = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const BoardList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

export const BoardItem = styled.li`
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:hover {
    cursor : pointer;
  }
`;

export const BoardTitle = styled.h3`
  margin: 0;
  font-size: 1.2em;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BoardDescription = styled.p`
  margin: 0;
  color: #666;
`;

export const BoardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  border-top: 1px solid #ccc;
  padding-top: 10px;
`;

export const BoardAuthor = styled.span`
  color: #333;
  font-weight: bold;
`;

export const BoardDate = styled.span`
  color: #555;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  display: block;
  width: 100%;
  text-align: right;
  margin-top: 10px;
  margin-bottom: 10px;

  button {
    background-color: #3498db;
    border: none;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PaginationButton = styled.button`
  background-color: #3498db;
  border: none;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px;

  &:hover {
    background-color: #2185d0;
  }
`;

export const CurrentPage = styled.span`
  font-weight: bold;
  margin: 0 5px;
`;
