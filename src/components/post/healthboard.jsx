import React from "react";
import { HealthBoardContainer, HealthBoardHeaderContainer, GridInfoContainer, GridItem, StyledP, ShortLine, LongLine, StyledLink } from "./healthboard.style";

function HealthBoard() {
  const data = [
    {id : 1,title : "흡연"},
    { id: 2, title: "독감" },
    { id: 3, title: "고혈압" },
    { id: 4, title: "음주" },
    { id: 5, title: "당뇨" },
    { id: 6, title: "골다공증" },
    { id: 7, title: "치매" },
    { id: 8, title: "폐렴" },
    { id: 9, title: "관절염" },
  ]
  return (
    <>
      <HealthBoardContainer>
        <HealthBoardHeaderContainer>
          <StyledP>건강 정보</StyledP>
          <ShortLine/>
        </HealthBoardHeaderContainer>

        <GridInfoContainer>
          {data.map((index) => (
            <GridItem key={index.id}>
              <StyledLink to={`/healthboard/${index.id}`}>
                {index.title}
              </StyledLink>
            </GridItem>
          ))}
        </GridInfoContainer>
        <LongLine/>
        <HealthBoardHeaderContainer>
          <StyledP>보건 관련 정부 포털, 시설 사이트</StyledP>
          <ShortLine/>
        </HealthBoardHeaderContainer>

        <GridInfoContainer>
          {[...Array(6).keys()].map((index) => (
            <GridItem key={index} />
          ))}
        </GridInfoContainer>
      </HealthBoardContainer>
    </>
  );
}

export default HealthBoard;