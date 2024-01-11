// Board.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BoardContainer, StyledP, BoardList, BoardItem, BoardTitle, BoardDescription, BoardFooter, BoardAuthor, BoardDate, StyledLink, PaginationContainer, PaginationButton, CurrentPage } from "../post/board.style";
import axios from "axios";

function VolunteerHistoryBoard() {
    const navigate = useNavigate();
    const [boardData, setBoardData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        handleGetPost()
    }, []);
    const handleGetPost = async () => {
        try {
            const response = await axios.get("/api/volunteers", boardData);
            console.log("API 응답:", response.data);

            // 성공적인 응답 후의 동작을 추가하세요.
            if (response.data) {
                setBoardData(response.data.volunteers);
                console.log(response.data["volunteers"])
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
                <StyledP>봉사이력 게시판</StyledP>
                <StyledLink to="/post">
                    <button>봉사이력 작성</button>
                </StyledLink>
                <BoardList>
                    {displayedBoardData.map((board) => (
                        <BoardItem key={board.id} onClick={() => handleBoardItemClick(board.id)}>
                            <BoardTitle>봉사이력 : {board.volunteer}</BoardTitle>
                            <BoardDescription>선호하는 봉사 : {board.preferVolunteer}</BoardDescription>
                            <BoardFooter>
                                <BoardAuthor>{board.writer}</BoardAuthor>
                                {/* date 프로퍼티가 목데이터에 없으므로 더미 데이터로 대체 */}
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

export default VolunteerHistoryBoard;
