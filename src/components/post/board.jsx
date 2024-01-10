// Board.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BoardContainer, StyledP, BoardList, BoardItem, BoardTitle, BoardDescription, BoardFooter, BoardAuthor, BoardDate, StyledLink, PaginationContainer, PaginationButton, CurrentPage } from "./board.style";

function Board() {
  const navigate = useNavigate();
  const [boardData, setBoardData] = useState([
    {
      "id": 4,
      "title": "string",
      "content": "string",
      "name": "string"
    },
    {
      "id": 5,
      "title": "string",
      "content": "string",
      "name": "string"
    },
    {
      "id": 7,
      "title": "string",
      "content": "string",
      "name": "string"
    },
    {
      "id": 9,
      "title": "string",
      "content": "string",
      "name": "string"
    },
    {
      "id": 13,
      "title": "배드민턴 모임 입니다!",
      "content": "서울 특별시 은평구에서 10시에 같이 배드민턴할사람",
      "name": "훈이"
    },
    {
      "id": 14,
      "title": "배드민턴 모임 입니다!",
      "content": "서울 특별시 은평구에서 10시에 같이 배드민턴할사람",
      "name": "훈이"
    }
  ]);

  const handleBoardItemClick = (boardId) => {
    // 클릭한 boardItem의 id를 사용하여 해당 게시물의 세부 페이지로 이동
    navigate(`/board/${boardId}`);
  };

  const handleCreatePostClick = () => {
    // 게시글 작성 페이지로 이동하는 로직 추가
    // 예: navigate('/createpost');
  };

  return (
    <>
      <BoardContainer>
        <StyledP>이야기 게시판</StyledP>
        <StyledLink to="/post">
          <button>게시글 작성</button>
        </StyledLink>
        <BoardList>
          {boardData.map((board) => (
            <BoardItem key={board.id} onClick={() => handleBoardItemClick(board.id)}>
              <BoardTitle>{board.title}</BoardTitle>
              <BoardDescription>{board.content}</BoardDescription>
              <BoardFooter>
                <BoardAuthor>{board.name}</BoardAuthor>
                {/* date 프로퍼티가 목데이터에 없으므로 더미 데이터로 대체 */}
                <BoardDate>Dummy Date</BoardDate>
              </BoardFooter>
            </BoardItem>
          ))}
        </BoardList>
        <PaginationContainer>
          <PaginationButton>이전 페이지</PaginationButton>
          <CurrentPage>1</CurrentPage>
          <PaginationButton>다음 페이지</PaginationButton>
        </PaginationContainer>
      </BoardContainer>
    </>
  );
}

export default Board;
