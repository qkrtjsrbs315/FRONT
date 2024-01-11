import React, { useEffect, useState } from 'react';
import useScreenRatio from './useScreenRatio';
import ChangeSize from './changeSize';
import './ApplicationFillPage01.css';

const ApplicationFillPage01 = () => {
  const { viewportWidth, viewportHeight } = useScreenRatio();

  useEffect(() => {
    // 화면 비율이 변경될 때마다 처리해야 하는데
    // useScreenRatio.js 파일 안으로 이동시킴
  }, [viewportWidth, viewportHeight]);

  const { handleClick } = ChangeSize();

  const [name, setName] = useState('');
  const [residentNum, setResidentNum] = useState('');
  const [homeTelNum, setHomeTelNum] = useState('');
  const [mobileNum, setMobileNum] = useState('');
  const [registrationAddress, setRegistrationAddress] = useState('');
  const [residenceAddress, setResidenceAddress] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleResidentNumChange = (event) => {
    setResidentNum(event.target.value);
  };

  const handleHomeTelNumChange = (event) => {
    setHomeTelNum(event.target.value);
  };

  const handleMobileNumChange = (event) => {
    setMobileNum(event.target.value);
  };

  const handleRegistrationAddressChange = (event) => {
    setRegistrationAddress(event.target.value);
  };

  const handleResidenceAddressChange = (event) => {
    setResidenceAddress(event.target.value);
  };

  return (
    <div className="container">
      <div className="rectangle">

        <div className="dividingBar"></div>

        <div className="nameExplanation">성명</div>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="성명을 입력해주세요."
          className="nameInput"
        />

        <div className="ResidentNumExplanation">주민등록번호</div>
        <input
          type="text"
          value={residentNum}
          onChange={handleResidentNumChange}
          placeholder="주민등록번호를 입력해주세요."
          className="ResidentNumInput"
        />

        <div className="telNumExplanation">연락처</div>
        <input
          type="text"
          value={homeTelNum}
          onChange={handleHomeTelNumChange}
          placeholder="자택 연락처를 입력해주세요."
          className="homeNumInput"
        />
        <input
          type="text"
          value={mobileNum}
          onChange={handleMobileNumChange}
          placeholder="휴대폰 연락처를 입력해주세요."
          className="PhoneNumInput"
        />

        <div className="addressExplanation">주소</div>
        <input
          type="text"
          value={registrationAddress}
          onChange={handleRegistrationAddressChange}
          placeholder="등록지 주소를 입력해주세요."
          className="registrationAddressInput"
        />
        <input
          type="text"
          value={residenceAddress}
          onChange={handleResidenceAddressChange}
          placeholder="거주지 주소를 입력해주세요."
          className="residenceAddressInput"
        />
      </div>
    </div>
  );
};

export default ApplicationFillPage01;