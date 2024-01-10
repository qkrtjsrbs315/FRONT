// Board.js
import React from "react";
import { BoardContainer, StyledP, BoardList, BoardItem, BoardTitle, BoardDescription, BoardFooter, BoardAuthor, BoardDate, StyledLink, PaginationContainer, PaginationButton, CurrentPage } from "./board.style";

function Board() {
  const boardData = [
    { id: 1, title: "게시판 1", description: "게시판 1에 대한 설명입니다.", date: "2024-01-10", author: "John Doe" },
    { id: 2, title: "게시판 2", description: "게시판 2에 대한 설명입니다.", date: "2024-01-09", author: "Jane Doe" },
    { id: 3, title: "게시판 3", description: "게시판 3에 대한 설명입니다.", date: "2024-01-08", author: "Alice" },
    // 추가적으로 원하는 만큼 게시판 데이터를 추가할 수 있습니다.
  ];

  const handleCreatePostClick = () => {
    // 게시글 작성 페이지로 이동하는 로직 추가
    // 예: history.push('/createpost');
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
            <BoardItem key={board.id}>
              <BoardTitle>{board.title}</BoardTitle>
              <BoardDescription>{board.description}</BoardDescription>
              <BoardFooter>
                <BoardAuthor>{board.author}</BoardAuthor>
                <BoardDate>{board.date}</BoardDate>
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
