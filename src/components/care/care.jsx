import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApplicationEntryPage from './ApplicationEntryPage/ApplicationEntryPage';
import ApplicationFillPage01 from './ApplicationFillPage01/ApplicationFillPage01';
import ApplicationFillPage02 from './ApplicationFillPage02/ApplicationFillPage02';
import ApplicationFillPage03 from './ApplicationFillPage03/ApplicationFillPage03';
import ApplicationFillPage04 from './ApplicationFillPage04/ApplicationFillPage04';
import { PageButton, ButtonContainer, CareContainer, HomeButton } from './care.style';

function CarePage() {
    const [currentPage, setCurrentPage] = useState(0);
    const navigate = useNavigate();
    const pages = [
        <ApplicationEntryPage />,
        <ApplicationFillPage01 />,
        <ApplicationFillPage02 />,
        <ApplicationFillPage03 />,
        <ApplicationFillPage04 />,
    ];

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, pages.length - 1));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const handleGoHome = () => {
        setCurrentPage(0);
        alert("신청이 완료되었습니다.")
        navigate("/");
    };

    return (
        <CareContainer>
            {pages[currentPage]}
            <ButtonContainer>
                {currentPage === 0 && (
                    <PageButton onClick={handleNextPage} disabled={currentPage === pages.length - 1}>
                        다음 페이지
                    </PageButton>
                )}
                {currentPage >= 1 && currentPage <= 3 && (
                    <>
                        <PageButton onClick={handlePrevPage} disabled={currentPage === 1}>
                            이전 페이지
                        </PageButton>
                        <PageButton onClick={handleNextPage} disabled={currentPage === pages.length - 1}>
                            다음 페이지
                        </PageButton>
                    </>
                )}
                {currentPage === 4 && (
                    <PageButton onClick={handleGoHome}>
                        홈으로 가기
                    </PageButton>
                )}
            </ButtonContainer>
        </CareContainer>
    );
}

export default CarePage;
