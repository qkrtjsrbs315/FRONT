import React from "react";
import { HomeContainer,StyledButton,StyledP } from "./home.style";
function Home() {
  return (
    <>
      <HomeContainer>
        <div>
          <StyledP>안녕하세요.</StyledP>
          <StyledP>노인 돌봄 신청서를 작성하실 수 있는 화면입니다.</StyledP>
          <StyledP>계속하시려면 작성 버튼을 눌러주세요.</StyledP>
        </div>
        <StyledButton>작성</StyledButton>
      </HomeContainer>
    </>
  );
}

export default Home;
