import React, { useEffect } from 'react';
import useScreenRatio from './useScreenRatio'; //화면 비율 자동 계산기
import ChangeSize from './changeSize';
import './ApplicationFillPage04.css';

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
    <div className="container">
      <div className="rectangle">
        <div className="pageExplanation">
        노인맞춤돌봄서비스 신청서 작성이 <br/>
        완료되었습니다.
        </div>
        
        <button className="goBackButton">
          <div className="goBackButtonText">첫 화면으로 돌아가기</div>
        </button>

        <button style={{ padding: '8px 16px' }} onClick={handleClick}></button>
      </div>
    </div>
  );
};

export default ApplicationEntryPage;


