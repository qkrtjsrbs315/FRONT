import React, { useEffect } from 'react';
import useScreenRatio from './useScreenRatio'; //화면 비율 자동 계산기
import ChangeSize from './changeSize';
import './VolunteerInquiryPage.css';

const ApplicationInquiryPage = () => {
  const { viewportWidth, viewportHeight } = useScreenRatio();

  useEffect(() => {
    // 화면 비율이 변경될 때마다 처리해야 하는데
    // useScreenRatio.js 파일 안으로 이동시킴
  }, [viewportWidth, viewportHeight]);

  const { handleClick } = ChangeSize();
  // 글자 크기 조정용
  // changeSize.js 파일 안으로 이동시킴

  return (
    <div className="container">
      <div className="rectangle">
        <div className="pageExplanation">
          이력서 조회 화면입니다.
        </div>
        <div className="dividingBar"></div>
      </div>
    </div>
  );
};

export default ApplicationInquiryPage;


