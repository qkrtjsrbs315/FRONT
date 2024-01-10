import React, { useEffect, useState } from 'react';
import useScreenRatio from './useScreenRatio'; //화면 비율 자동 계산기
import ChangeSize from './changeSize';
import './ApplicationFillPage03.css';

const ApplicationFillPage03 = () => {
  const { viewportWidth, viewportHeight } = useScreenRatio();

  useEffect(() => {
    // 화면 비율이 변경될 때마다 처리해야 하는데
    // useScreenRatio.js 파일 안으로 이동시킴
  }, [viewportWidth, viewportHeight]);

  const { handleClick } = ChangeSize();
  // 글자 크기 조정용
  // changeSize.js 파일 안으로 이동시킴

  const [selectedOption04, setSelectedOption04] = useState(null);
  const [selectedOption05, setSelectedOption05] = useState(null);

  const handleRadioChange04 = (value) => {
    setSelectedOption04(value === selectedOption04 ? null : value);
  };

  const handleRadioChange05 = (value) => {
    setSelectedOption05(value === selectedOption05 ? null : value);
  };

  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleRelationshipChange = (event) => {
    setRelationship(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    // 여기서 파일을 처리하거나 업로드하는 함수를 호출할 수 있습니다.
    console.log('선택된 파일:', selectedFile);
  };

  return (
    <div className="container">
      <div className="rectangle">
        <div className="pageExplanation">노인맞춤돌봄서비스 신청서 작성 화면입니다.</div>

        <div className="dividingBar"></div>

        <div className="announcement">귀하는 개인정보 수집관련 동의를 거부할 권리가 있으며, 동의거부로 인해 대상자 선정에서 제외될 수 있습니다.</div>

        <div className="infoSurveyExplanation">개인정보 수집 및 활용 동의</div>

        <div className="infoSurvey04">
          <div className="infoSurveyText04">
            4. 민감정보 수집동의 <br />
            가. 수집 및 이용 목적：노인복지법 제27조의2(홀로 사는 노인에 대한 지원) 관련 노인맞춤돌봄서비스 제공에 관한 업무 <br />
            나. 항목 : 장애, 질병 등 관한 건강정보, 상담정보 <br />
            다. 보유기간 : 5년
          </div>
        </div>

        <div className="agreeButtonText04">동의</div>
        <button
          className={`agreeButton04 ${selectedOption04 === 'agree' ? 'checked' : ''}`}
          onClick={() => handleRadioChange04('agree')}
        >
        </button>

        <div className="disagreeButtonText04">비동의</div>
        <button
          className={`disagreeButton04 ${selectedOption04 === 'disagree' ? 'checked' : ''}`}
          onClick={() => handleRadioChange04('disagree')}
        >
        </button>

        <div className="infoSurvey05">
          <div className="infoSurveyText05">
            1. 서비스의 제공여부 결정에 필요한 조사를 거부, 방해 또는 기피할 경우 신청이 각하되거나 결정이 취소될 수 있습니다. <br />
            2. 서비스를 신청하기 위해 작성･제출하신 서류는 반환되지 않습니다.
          </div>
        </div>

        <div className="agreeButtonText05">동의</div>
        <button
          className={`agreeButton05 ${selectedOption05 === 'agree' ? 'checked' : ''}`}
          onClick={() => handleRadioChange05('agree')}
        >
        </button>

        <div className="disagreeButtonText05">비동의</div>
        <button
          className={`disagreeButton05 ${selectedOption05 === 'disagree' ? 'checked' : ''}`}
          onClick={() => handleRadioChange05('disagree')}
        >
        </button>
        <div className="dividingBar2"></div>

        <div className="confirmationAndApplication">
          본인(대리신청인 포함)은 개인정보 활용동의와 기타 유의사항에 대하여 <br />
          숙지했음을 확인하며, 이와 같이 노인맞춤돌봄서비스를 신청합니다.</div>

        <div className="dividingBar3"></div>

        <div className="nameExplanation">신청인(대리 신청인*) 성명</div>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="성명을 입력해주세요."
          className="nameInput"
        />

        <div className="relationshipExplanation">신청인과의 관계 (대리 신청의 경우)</div>
        <input
          type="text"
          value={relationship}
          onChange={handleRelationshipChange}
          placeholder="신청인과의 관계를 입력해주세요."
          className="relationshipInput"
        />

        <div className="signExplanation">
          (사진 촬영, 스캔, 직접 필기하여 제출해주세요.)
        </div>

        <div className="file">
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={handleFileUpload}
          />
          <label htmlFor="fileInput" className="fileButton">
            <div className="fileButtonText">서명 또는 인 제출 버튼</div>
          </label>
        </div>

        <div className="dateExplanation">날짜</div>
        <input
          type="text"
          value={year}
          onChange={handleYearChange}
          placeholder="년"
          className="yearInput"
        />
        <div className="yearExplanation">년</div>
        <input
          type="text"
          value={month}
          onChange={handleMonthChange}
          placeholder="월"
          className="monthInput"
        />
        <div className="monthExplanation">월</div>
        <input
          type="text"
          value={day}
          onChange={handleDayChange}
          placeholder="일"
          className="dayInput"
        />
        <div className="dayExplanation">일</div>

        <div className="proxyApplicant">
          *가족, 친족(8촌 이내의 혈족, 4촌이내의 인척) 및
          이해 관계인(친족을 제외한 이웃 등 그 밖의 관계인) 등
        </div>

        <button className="previousButton">
          <div className="previousButtonText">이전화면</div>
        </button>

        <button className="nextButton">
          <div className="nextButtonText">다음화면</div>
        </button>

        <button style={{ padding: '8px 16px' }} onClick={handleClick}></button>
      </div>
    </div>
  );
};

export default ApplicationFillPage03;