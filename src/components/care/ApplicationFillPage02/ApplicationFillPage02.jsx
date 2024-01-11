import React, { useEffect, useState } from 'react';
import useScreenRatio from './useScreenRatio'; //화면 비율 자동 계산기
import ChangeSize from './changeSize';
import './ApplicationFillPage02.css';
import { agree1 } from '../../redux/careslice';
import { useDispatch,useSelector } from "react-redux";

const ApplicationFillPage02 = () => {
  const { viewportWidth, viewportHeight } = useScreenRatio();
  const dispatch = useDispatch();
  const careInfo = useSelector((state) => state.care.careInfo);
  const [localInfo,setLocalInfo] = useState(careInfo);


  const [selectedOption01, setSelectedOption01] = useState(null);
  const [selectedOption02, setSelectedOption02] = useState(null);
  const [selectedOption03, setSelectedOption03] = useState(null);
  //  const token = useSelector((state) => state.user.userInfo.token);
  console.log(careInfo);


  useEffect(() => {
    // 화면 비율이 변경될 때마다 처리해야 하는데
    // useScreenRatio.js 파일 안으로 이동시킴
  }, [viewportWidth, viewportHeight]);

  const { handleClick } = ChangeSize();
  // 글자 크기 조정용
  // changeSize.js 파일 안으로 이동시킴

  useEffect(()=>{
    dispatch(agree1(localInfo))

  },[localInfo])

  const handleRadioChange01 = (collectPersonalInfo) => {
    let radiobool1 = (collectPersonalInfo === null || collectPersonalInfo === "disagree") ? false : true
    console.log(radiobool1)
    setSelectedOption01(collectPersonalInfo === selectedOption01 ? null : collectPersonalInfo);
    setLocalInfo((prevState) => ({ ...prevState, collectPersonalInfo: radiobool1 }));
    };

  const handleRadioChange02 = (offerPersonalInfo) => {
    let radiobool2 = (offerPersonalInfo === null || offerPersonalInfo === "disagree") ?false : true;
    setSelectedOption02(offerPersonalInfo === selectedOption02 ? null : offerPersonalInfo);
    setLocalInfo((prevState) => ({ ...prevState, offerPersonalInfo: radiobool2 }));
  };
  const handleRadioChange03 = (identificationInfo) => {
    let radiobool3 = ((identificationInfo === null || identificationInfo === "disagree") ? false : true)
    setSelectedOption03(identificationInfo === selectedOption03 ? null : identificationInfo);
    setLocalInfo((prevState) => ({ ...prevState, identificationInfo: radiobool3}));
  };

  // const handleRadioChange03 = (value) => {
  //   setSelectedOption03(value === selectedOption03 ? null : value);
  //   dispatch(agree1({ identificationInfo: selectedOption03 }));
  //  };
  
  return (
    <div className="container">
      <div className="rectangle">
        <div className="pageExplanation">노인맞춤돌봄서비스 신청서 작성 화면입니다.</div>

        <div className="dividingBar"></div>

        <div className="announcement">귀하는 개인정보 수집관련 동의를 거부할 권리가 있으며, 동의거부로 인해 대상자 선정에서 제외될 수 있습니다.</div>

        <div className="infoSurveyExplanation">개인정보 수집 및 활용 동의</div>

        <div className="infoSurvey01">
          <div className="infoSurveyText01">
            1. 개인정보 수집･이용 동의 <br />
            가. 수집･이용목적 : 노인복지법 제27조의2(홀로 사는 노인에 대한 지원) 관련 노인맞춤돌봄서비스 제공에 관한 업무 <br />
            나. 수집항목：성명, 주민등록번호, 주소, 연락처, 기초생활수급여부, 기초연금 수급여부, 서비스 이용 현황 등 정보일체 <br />
            다. 보유기간 : 5년
          </div>
        </div>

        <div className="agreeButtonText01">동의</div>
        <button
          className={`agreeButton01 ${selectedOption01 === 'agree' ? 'checked' : ''}`}
          onClick={() => handleRadioChange01('agree')}
        >
        </button>

        <div className="disagreeButtonText01">비동의</div>
        <button
          className={`disagreeButton01 ${selectedOption01 === 'disagree' ? 'checked' : ''}`}
          onClick={() => handleRadioChange01('disagree')}
        >
        </button>

        <div className="infoSurvey02">
          <div className="infoSurveyText02">
          2. 개인정보 제공 동의 <br />
          가. 이용목적：노인복지법 제27조의2(홀로 사는 노인에 대한 지원) 관련 노인맞춤돌봄서비스 제공에 관한 업무 <br />
          나. 제공받는 자 : 정부기관, 관할 지방자치단체, 노인맞춤돌봄서비스 광역지원기관 및 수행기관,  <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;중앙노인돌봄지원기관(독거노인종합지원센터), 사회보장정보원 <br />
          다. 제공하고자 하는 항목 : 성명, 주민등록번호, 주소, 연락처, 기초생활수급여부, 기초연금 수급여부,  <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;서비스 이용 현황 등 정보일체 <br />
          라. 보유기간 : 5년 <br />
          </div>
        </div>

        <div className="agreeButtonText02">동의</div>
        <button
          className={`agreeButton02 ${selectedOption02 === 'agree' ? 'checked' : ''}`}
          onClick={() => handleRadioChange02('agree')}
        >
        </button>

        <div className="disagreeButtonText02">비동의</div>
        <button
          className={`disagreeButton02 ${selectedOption02 === 'disagree' ? 'checked' : ''}`}
          onClick={() => handleRadioChange02('disagree')}
        >
        </button>

        <div className="infoSurvey03">
          <div className="infoSurveyText03">
          3. 고유식별정보 수집동의 <br />
          가. 수집 및 이용 목적：노인복지법 제27조의2(홀로 사는 노인에 대한 지원) 관련 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;노인맞춤돌봄서비스 신청 및 자격에 관한 업무 <br />
          나. 항목 : 주민등록번호 <br />
          다. 보유기간 : 5년
          </div>
        </div>

        <div className="agreeButtonText03">동의</div>
        <button

          className={`agreeButton03 ${selectedOption03 === 'agree' ? 'checked' : ''}`}
          onClick={() => handleRadioChange03('agree')}
        >
        </button>

        <div className="disagreeButtonText03">비동의</div>
        <button
          className={`disagreeButton03 ${selectedOption03 === 'disagree' ? 'checked' : ''}`}
          onClick={() => handleRadioChange03('disagree')}
        >
        </button>
      </div>
    </div>
  );
};

export default ApplicationFillPage02;