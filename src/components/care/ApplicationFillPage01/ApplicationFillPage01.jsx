import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import useScreenRatio from './useScreenRatio';
import ChangeSize from './changeSize';
import { setUserInfo } from '../../redux/careslice';
import {
  ApplicationContainer,
  StyledP,
  LongLine,
  InputField,
} from '../application.style';
import { InputForm, InputGroup, InputInnerGroup, InputLabel } from '../application.style';


const ApplicationFillPage01 = ({getInfo}) => {
  const { viewportWidth, viewportHeight } = useScreenRatio();

  useEffect(() => {
    // 화면 비율이 변경될 때마다 처리해야 하는데
    // useScreenRatio.js 파일 안으로 이동시킴
  }, [viewportWidth, viewportHeight]);

  const { handleClick } = ChangeSize();

  const [info, setInfo] = useState({
    name: "",
    licenseId: "",
    homeNumber: "",
    phoneNumber: "",
    registeredAddress: "",
    specAddress: "",
  })
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserInfo(info));


  }, [info]);

  const handleNameChange = (name) => {
    setInfo((prevState) => ({...prevState, name : name}));
  };

  const handleResidentNumChange = (residentNum) => {
    setInfo((prevState) => ({ ...prevState, licenseId: residentNum }));
  };

  const handleHomeTelNumChange = (homeTelNum) => {
    setInfo((prevState) => ({ ...prevState, homeNumber: homeTelNum }));
  };


  const handleMobileNumChange = (mobileNum) => {
    setInfo((prevState) => ({ ...prevState, phoneNumber: mobileNum }));
  };

  const handleRegistrationAddressChange = (registrationAddress) => {
    setInfo((prevState) => ({ ...prevState, registeredAddress: registrationAddress }));

  };

  const handleResidenceAddressChange = (residenceAddress) => {
    setInfo((prevState) => ({ ...prevState, specAddress: residenceAddress }));
  };

  // Assuming you have state and handlers for the form data
  const inputFields = [
    { label: '성함', id: 'name', name: 'name' },
    { label: '주민등록번호',  placeholder: '주민등록번호를 입력해주세요.', className: 'ResidentNumInput' },
    { label: '자택 연락처',  placeholder: '자택 연락처를 입력해주세요.', className: 'homeNumInput' },
    { label: '휴대폰 연락처',  placeholder: '휴대폰 연락처를 입력해주세요.', className: 'PhoneNumInput' },
    { label: '등록지 주소',  placeholder: '등록지 주소를 입력해주세요.', className: 'registrationAddressInput' },
    { label: '거주지 주소', placeholder: '거주지 주소를 입력해주세요.', className: 'residenceAddressInput' },

    // Add more input fields as needed
  ];

  return (
    <ApplicationContainer>
      <StyledP>노인맞춤돌봄서비스 신청서 작성 화면입니다.</StyledP>
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
        </InputGroup>
        <InputGroup>
          <InputInnerGroup key={inputFields[2]['id']}>
            <InputLabel htmlFor={inputFields[2]['id']}>{inputFields[2]['label']}</InputLabel>
            <InputField
              type="text"
              id={inputFields[2]['id']}
              name={inputFields[2]['name']}
              onChange={(event) => handleHomeTelNumChange(event.target.value)}
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
        </InputGroup>
        <InputGroup>
          <InputInnerGroup key={inputFields[4]['id']}>
            <InputLabel htmlFor={inputFields[4]['id']}>{inputFields[4]['label']}</InputLabel>
            <InputField
              type="text"
              id={inputFields[4]['id']}
              name={inputFields[4]['name']}
              onChange={(event) => handleRegistrationAddressChange(event.target.value)}
            />
          </InputInnerGroup>
          <InputInnerGroup key={inputFields[5]['id']}>
            <InputLabel htmlFor={inputFields[5]['id']}>{inputFields[5]['label']}</InputLabel>
            <InputField
              type="text"
              id={inputFields[5]['id']}
              name={inputFields[5]['name']}
              onChange={(event) => handleResidenceAddressChange(event.target.value)}
            />
          </InputInnerGroup>
        </InputGroup>
      </InputForm>
    </ApplicationContainer>
  );
};

export default ApplicationFillPage01;
