import { StyledHeader, SizeContainer, SizeButton } from "./header.style";
import { TableContainer, Table, StyledLink, Th } from './header.style';

import React from "react";

function Header() {
  return (
    <>
      <StyledHeader>
        <div>
          <p><b>노봄</b>에 오신 것을 환영합니다.</p>
        </div>
        <SizeContainer>
          <p>글자 크기 변경 버튼</p>
          <SizeButton>+</SizeButton>
          <SizeButton>-</SizeButton>
        </SizeContainer>
      </StyledHeader>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <Th>
                <StyledLink to="/">
                  <img src='/logo512.png' alt="logo" />
                </StyledLink>
              </Th>
              <Th>
                <StyledLink to="/ApplicationEntryPage">
                  노인돌봄신청서 작성
                </StyledLink>
              </Th>
              <Th>
                <StyledLink to="/volunteerentrypage">
                  노인 봉사 신청
                </StyledLink>
              </Th>
              <Th>
                <StyledLink to="/board">
                  이야기 게시판
                </StyledLink>
              </Th>
              <Th>
                <StyledLink to="/healthboard">
                  건강게시판
                </StyledLink>
              </Th>
            </tr>
          </thead>
        </Table>
      </TableContainer>
    </>
  );
}

export default Header;
