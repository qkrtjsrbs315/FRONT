import React, { useEffect, useState } from 'react';
import useScreenRatio from './useScreenRatio'; //화면 비율 자동 계산기
import ChangeSize from './changeSize';
import './ApplicationFillPage03.css';
import { agree2 } from '../../redux/careslice';
import { useDispatch, useSelector } from "react-redux";


const ApplicationFillPage03 = () => {
  const { viewportWidth, viewportHeight } = useScreenRatio();
  const dispatch = useDispatch();
  const careInfo = useSelector((state) => state.care.careInfo);
  const [localInfo, setLocalInfo] = useState(careInfo);

  const [selectedOption04, setSelectedOption04] = useState(null);
  const [selectedOption05, setSelectedOption05] = useState(null);

  useEffect(() => {
    // 화면 비율이 변경될 때마다 처리해야 하는데
    // useScreenRatio.js 파일 안으로 이동시킴
  }, [viewportWidth, viewportHeight]);

  const { handleClick } = ChangeSize();
  // 글자 크기 조정용
  // changeSize.js 파일 안으로 이동시킴
  useEffect(() => {
    dispatch(agree2(localInfo))

  }, [localInfo])


  const handleRadioChange04 = (senseInfo) => {
    let radiobool1 = (senseInfo === null || senseInfo === "disagree") ? false : true
    console.log(radiobool1)
    setLocalInfo((prevState) => ({ ...prevState, senseInfo: radiobool1 }));
    setSelectedOption04(senseInfo === selectedOption04 ? null : senseInfo);
  };

  const handleRadioChange05 = (service) => {
    let radiobool2 = (service === null || service === "disagree") ? false : true;
    setLocalInfo((prevState) => ({ ...prevState, service: radiobool2 }));
    setSelectedOption05(service === selectedOption05 ? null : service);

  };

  const handleNameChange = (name) => {
    setLocalInfo((prevState) => ({ ...prevState, requestName: name }));
  };

  const handleRelationshipChange = (relative) => {
    setLocalInfo((prevState) => ({ ...prevState, relative: relative }));
  };

  const handleYearChange = (year) => {
    setLocalInfo((prevState) => ({ ...prevState, year: year }));
  };

  const handleMonthChange = (month) => {
    setLocalInfo((prevState) => ({ ...prevState, month: month }));

  };

  const handleDayChange = (day) => {
    setLocalInfo((prevState) => ({ ...prevState, day: day }));

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
          onChange={(event) =>handleNameChange(event.target.value)}
          placeholder="성명을 입력해주세요."
          className="nameInput"
        />

        <div className="relationshipExplanation">신청인과의 관계 (대리 신청의 경우)</div>
        <input
          type="text"
          onChange={(event) => handleRelationshipChange(event.target.value)}
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
          onChange={(event) => handleYearChange(event.target.value)}
          placeholder="년"
          className="yearInput"
        />
        <div className="yearExplanation">년</div>
        <input
          type="text"
          onChange={(event) => handleMonthChange(event.target.value)}
          placeholder="월"
          className="monthInput"
        />
        <div className="monthExplanation">월</div>
        <input
          type="text"
          onChange={(event) => handleDayChange(event.target.value)}
          placeholder="일"
          className="dayInput"
        />
        <div className="dayExplanation">일</div>

        <div className="proxyApplicant">
          *가족, 친족(8촌 이내의 혈족, 4촌이내의 인척) 및
          이해 관계인(친족을 제외한 이웃 등 그 밖의 관계인) 등
        </div>

      </div>
    </div>
  );
};

export default ApplicationFillPage03;