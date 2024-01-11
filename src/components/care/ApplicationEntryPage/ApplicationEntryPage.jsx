import React, { useEffect } from 'react';
import useScreenRatio from './useScreenRatio.js'; //화면 비율 자동 계산기
import ChangeSize from './changeSize';
import { ApplicationContainer, StyledP, LongLine } from '../application.style.jsx';

// import './ApplicationEntryPage.css';

const ApplicationEntryPage = () => {
  const { viewportWidth, viewportHeight } = useScreenRatio();

  useEffect(() => {
    // 화면 비율이 변경될 때마다 처리해야 하는데
    // useScreenRatio.js 파일 안으로 이동시킴
  }, [viewportWidth, viewportHeight]);

  const { handleClick } = ChangeSize();
  // 글자 크기 조정용
  // changeSize.js 파일 안으로 이동시킴

  return (
    <ApplicationContainer>
      <StyledP>안녕하세요.</StyledP> <br />
      <StyledP> 노인 돌봄 신청서를 작성하실 수 있는 화면입니다.</StyledP> <br />
      <StyledP> 우선, 작성하기 전에 본인 인증을 해야 합니다.</StyledP>
      <StyledP> 전화번호를 통해 본인 인증을 진행하겠습니다.</StyledP>
      <StyledP> 인증하시겠습니까?</StyledP>

    </ApplicationContainer>
  );
};

export default ApplicationEntryPage;


