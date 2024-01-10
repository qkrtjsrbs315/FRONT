import React, { useEffect } from 'react';
import useScreenRatio from './useScreenRatio.js'; //화면 비율 자동 계산기
import ChangeSize from './changeSize';
import './ApplicationEntryPage.css';

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
          안녕하세요.<br />
          노인 돌봄 신청서를 작성하실 수 있는 화면입니다.<br />
          계속하시려면 작성 버튼을 눌러주세요.
        </div>
        
        <button className="writeButton">
          <div className="writeButtonText">작성</div>
        </button>

        <button style={{ padding: '8px 16px' }} onClick={handleClick}></button>
      </div>
    </div>
  );
};

export default ApplicationEntryPage;


