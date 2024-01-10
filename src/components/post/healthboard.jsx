import React from "react";
import { HealthBoardContainer, HealthBoardHeaderContainer, GridInfoContainer, GridItem, StyledP,ShortLine, LongLine} from "./healthboard.style";

function HealthBoard() {
  return (
    <>
      <HealthBoardContainer>
        <HealthBoardHeaderContainer>
          <StyledP>건강 정보</StyledP>
          <ShortLine/>
        </HealthBoardHeaderContainer>

        <GridInfoContainer>
          {[...Array(9).keys()].map((index) => (
            <GridItem key={index} />
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