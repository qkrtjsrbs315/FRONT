import React, { useEffect } from 'react';
import useScreenRatio from './useScreenRatio'; //화면 비율 자동 계산기
import ChangeSize from './changeSize';
import './VolunteerEntryPage.css';

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
          노인 봉사 신청을 위한 이력서를 <br />
          작성, 조회하실 수 있는 화면입니다.
        </div>

        <div className="leftRectangle">
          <div className="MakingResumeExplanation">
            봉사 신청을 위한 <br />
            이력서를 작성하시려면 <br />
            작성 버튼을 눌러주세요.
          </div>

          <button className="MakingResumeButton">
            <div className="MakingResumeButtonText">작성</div>
          </button>
        </div>

        <div className="rightRectangle">
          <div className="InquireResumeExplanation">
            봉사 신청 이력서를 <br />
            조회하시려면 <br />
            조회 버튼을 눌러주세요.
          </div>

          <button className="InquireResumeButton">
            <div className="InquireResumeButtonText">조회</div>
          </button>
        </div>

        <button style={{ padding: '8px 16px' }} onClick={handleClick}></button>
      </div>
    </div>
  );
};

export default ApplicationEntryPage;


