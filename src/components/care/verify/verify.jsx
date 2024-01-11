import React, { useEffect, useState } from 'react';
import useScreenRatio from './useScreenRatio';
import ChangeSize from './changeSize';
import axios from 'axios';
import {
  ApplicationContainer,
  StyledP,
  WrapGroup,
  LongLine,
  InputField,
  HeaderStyledP
} from '../application.style';
import { InputForm, InputGroup, InputInnerGroup, InputLabel, ButtonField } from '../application.style';


const VerifyPage = ({ getIsChecked }) => {
  const { viewportWidth, viewportHeight } = useScreenRatio();

  useEffect(() => {
    // 화면 비율이 변경될 때마다 처리해야 하는데
    // useScreenRatio.js 파일 안으로 이동시킴
  }, [viewportWidth, viewportHeight]);

  const { handleClick } = ChangeSize();

  const [info, setInfo] = useState({
    name: "",
    licenseId: "",
    phoneNumber: "",
    verifyNum:"",
    isVerified : false
  })

  const handleNameChange = (name) => {
    setInfo((prevState) => ({...prevState, name : name}));
  };

  const handleResidentNumChange = (residentNum) => {
    setInfo((prevState) => ({ ...prevState, licenseId: residentNum }));
  };

  const handleMobileNumChange = (mobileNum) => {
    setInfo((prevState) => ({ ...prevState, phoneNumber: mobileNum }));
  };
  // const handleIsVerify = (check) => {
  //   setInfo((prevState) => ({ ...prevState, isVerified: check }));
  // };
  const handleIsVerify = async () => {
    try {
      const response = await axios.post("/api/verify", { "password": info.verifyNum ,"phone":info.phoneNumber});
      console.log("API 응답:", response.data);

      // 성공적인 응답 후의 동작을 추가하세요.
      if (response.data) {
        setInfo((prevState) => ({ ...prevState, isVerified: true }));
        alert("인증되었습니다!")
        getIsChecked(true);

      }

    } catch (error) {
      console.error("API 요청 중 오류:", error);
    }
  };

  const handleVerifyNum = (verifyNum) => {
    setInfo((prevState) => ({ ...prevState, verifyNum: verifyNum }));
  };

  const handlePostVerify = async () => {
    try {
      const response = await axios.post("/api/phone", { "phone": info.phoneNumber });
      console.log("API 응답:", response.data);

      // 성공적인 응답 후의 동작을 추가하세요.
      if (response.data) {
        alert("인증번호를 발송하였습니다!")
      }

    } catch (error) {
      console.error("API 요청 중 오류:", error);
    }
  };

  useEffect(()=>{
    console.log(info);

  },[info])

  // Assuming you have state and handlers for the form data
  const inputFields = [
    { label: '성함', id: 'name', name: 'name' },
    { label: '주민등록번호',  placeholder: '주민등록번호를 입력해주세요.', className: 'ResidentNumInput' },
    { label: '인증번호를 입력하세요',  placeholder: '자택 연락처를 입력해주세요.', className: 'homeNumInput' },
    { label: '휴대폰 연락처',  placeholder: '휴대폰 연락처를 입력해주세요.', className: 'PhoneNumInput' },
    { label: '연락처를 입력 후 인증번호 발송을 눌러주세요.',  placeholder: '등록지 주소를 입력해주세요.', className: 'registrationAddressInput' },
    { label: '비밀번호를 입력 후 비밀번호 인증을 눌러주세요.', placeholder: '거주지 주소를 입력해주세요.', className: 'residenceAddressInput' },

    // Add more input fields as needed
  ];

  return (
    <ApplicationContainer>
      <HeaderStyledP>노인맞춤돌봄서비스 신청서 인증 화면입니다.</HeaderStyledP>
      <LongLine />
      <InputForm>
        <InputGroup>
          <InputInnerGroup key={inputFields[0]['id']}>
            <InputLabel htmlFor={inputFields[0]['id']}>{inputFields[0]['label']}</InputLabel>
            <InputField
              type="text"
              id={inputFields[0]['id']}
              name={inputFields[0]['name']}
              onChange={(event) => handleNameChange(event.target.value)}
            />
          </InputInnerGroup>
          <InputInnerGroup key={inputFields[3]['id']}>
            <InputLabel htmlFor={inputFields[3]['id']}>{inputFields[3]['label']}</InputLabel>
            <InputField
              type="text"
              id={inputFields[3]['id']}
              name={inputFields[3]['name']}
              onChange={(event) => handleMobileNumChange(event.target.value)}
            />
          </InputInnerGroup>
          <InputInnerGroup key={inputFields[2]['id']}>
            <InputLabel htmlFor={inputFields[2]['id']}>{inputFields[2]['label']}</InputLabel>
            <InputField
              type="text"
              id={inputFields[2]['id']}
              name={inputFields[2]['name']}
              onChange={(event) => handleVerifyNum(event.target.value)}
            />
          </InputInnerGroup>
        </InputGroup>

        <InputGroup>
          <InputInnerGroup key={inputFields[1]['id']}>
            <InputLabel htmlFor={inputFields[1]['id']}>{inputFields[1]['label']}</InputLabel>
            <InputField
              type="text"
              id={inputFields[1]['id']}
              name={inputFields[1]['name']}
              onChange={(event) => handleResidentNumChange(event.target.value)}
            />
          </InputInnerGroup>
          <InputInnerGroup key={inputFields[4]['id']}>
            <InputLabel htmlFor={inputFields[4]['id']}>{inputFields[4]['label']}</InputLabel>
            <ButtonField
              type="button"
              id={inputFields[4]['id']}
              onClick={handlePostVerify}
            >인증번호발송</ButtonField> 
          </InputInnerGroup>
          <InputInnerGroup key={inputFields[5]['id']}>
            <InputLabel htmlFor={inputFields[5]['id']}>{inputFields[5]['label']}</InputLabel>
            <ButtonField
              type="button"
              id={inputFields[5]['id']}
              onClick={handleIsVerify}
            >인증번호인증</ButtonField>
          </InputInnerGroup>
        </InputGroup>
      </InputForm>
    </ApplicationContainer>
  );
};

export default VerifyPage;
