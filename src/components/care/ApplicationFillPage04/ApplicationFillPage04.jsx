import React, { useEffect } from 'react';
import useScreenRatio from './useScreenRatio'; //화면 비율 자동 계산기
import ChangeSize from './changeSize';
// import './ApplicationFillPage04.css';
import { ApplicationContainer, StyledP, LongLine } from '../application.style.jsx';

const ApplicationFillPage04 = () => {
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
      <StyledP>노인맞춤돌봄서비스 신청서 작성이</StyledP> <br />
      <StyledP> 완료되었습니다.</StyledP>
    </ApplicationContainer>
  );
};

export default ApplicationFillPage04;


