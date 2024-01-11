// Board.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BoardContainer, StyledP, BoardList, BoardItem, BoardTitle, BoardDescription, BoardFooter, BoardAuthor, BoardDate, StyledLink, PaginationContainer, PaginationButton, CurrentPage } from "./board.style";
import axios from "axios";

// ... (imports)

function Board() {
  const navigate = useNavigate();
  const [boardData, setBoardData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    handleGetPost();
  }, []);

  const handleGetPost = async () => {
    try {
      const response = await axios.get("/api/posts");
      console.log("API 응답:", response.data);

      if (response.data) {
        setBoardData(response.data.posts);
        console.log("BoardData : ", boardData);
      }
    } catch (error) {
      console.error("API 요청 중 오류:", error);
    }
  };

  const handleBoardItemClick = (boardId) => {
    navigate(`/board/${boardId}`);
  };

  const handleCreatePostClick = () => {
    // 예: navigate('/createpost');
  };

  const handleNextPageClick = () => {
    if (currentPage * itemsPerPage < boardData.length) {
      setCurrentPage(currentPage + 1);
    } else {
      alert("페이지 끝입니다.");
    }
  };

  const handlePrevPageClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedBoardData = boardData.slice(startIndex, endIndex);


  return (
    <>
      <BoardContainer>
        <StyledP>이야기 게시판</StyledP>
        <StyledLink to="/post">
          <button>게시글 작성</button>
        </StyledLink>
        <BoardList>
          {displayedBoardData.map((board) => (
            <BoardItem key={board.id} onClick={() => handleBoardItemClick(board.id)}>
              <BoardTitle>{board.title}</BoardTitle>
              <BoardDescription>{board.content}</BoardDescription>
              <BoardFooter>
                <BoardAuthor>{board.name}</BoardAuthor>
                <BoardDate>{board.updatedTime}</BoardDate>
              </BoardFooter>
            </BoardItem>
          ))}
        </BoardList>
        <PaginationContainer>
          <PaginationButton onClick={handlePrevPageClick} disabled={currentPage === 1}>
            이전 페이지
          </PaginationButton>
          <CurrentPage>{currentPage}</CurrentPage>
          <PaginationButton onClick={handleNextPageClick}>
            다음 페이지
          </PaginationButton>
        </PaginationContainer>
      </BoardContainer>
    </>
  );
}

export default Board;
