// Board.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BoardContainer, StyledP, BoardList, BoardItem, BoardTitle, BoardDescription, BoardFooter, BoardAuthor, BoardDate, StyledLink, PaginationContainer, PaginationButton, CurrentPage } from "./board.style";
import axios from "axios";

function Board() {
  const navigate = useNavigate();
  const [boardData, setBoardData] = useState([ ]);
  useEffect(()=>{
    handleGetPost()
  },[]);
  const handleGetPost = async () => {
    try {
      const response = await axios.get("/api/posts", boardData);
      console.log("API 응답:", response.data);

      // 성공적인 응답 후의 동작을 추가하세요.
      if(response.data){
        setBoardData(response.data.posts);
        console.log(response.data["posts"])
        console.log("BoardData : ", boardData);
      }

    } catch (error) {
      console.error("API 요청 중 오류:", error);
    }
  };

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
