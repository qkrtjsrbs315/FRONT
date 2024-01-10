import { StyledHeader, SizeContainer, SizeButton } from "./header.style";
import { TableContainer, Table, StyledLink, Th } from './header.style';

import React, { useEffect } from 'react';

import useScreenRatio from './useScreenRatio.js'; //화면 비율 자동 계산기
import ChangeSize from './changeSize';

function Header() {
  const { viewportWidth, viewportHeight } = useScreenRatio();

  useEffect(() => {
    // 화면 비율이 변경될 때마다 처리해야 하는데
    // useScreenRatio.js 파일 안으로 이동시킴
  }, [viewportWidth, viewportHeight]);

  const { handleClick } = ChangeSize();
  // 글자 크기 조정용
  // changeSize.js 파일 안으로 이동시킴

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
                <StyledLink to="/board">
                  노인돌봄신청서 작성
                </StyledLink>
              </Th>
              <Th>
                <StyledLink to="/volunteer">
                  노인 봉사 신청
                </StyledLink>
              </Th>
              <Th>
                <StyledLink to="/hobbyboard">
                  취미 게시판
                </StyledLink>
              </Th>
              <Th>
                <StyledLink to="/memoryboard">
                  추억게시판
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
