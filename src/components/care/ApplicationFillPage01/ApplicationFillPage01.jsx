import React, { useEffect, useState } from 'react';
import useScreenRatio from './useScreenRatio';
import ChangeSize from './changeSize';
import {
  ApplicationContainer,
  StyledP,
  LongLine,
  InputField,
} from '../application.style';
import { InputForm, InputGroup, InputInnerGroup, InputLabel } from '../application.style';

const ApplicationFillPage01 = () => {
  const { viewportWidth, viewportHeight } = useScreenRatio();

  useEffect(() => {
    // 화면 비율이 변경될 때마다 처리해야 하는데
    // useScreenRatio.js 파일 안으로 이동시킴
  }, [viewportWidth, viewportHeight]);

  const { handleClick } = ChangeSize();

  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
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

  // Assuming you have state and handlers for the form data
  const [postData, setPostData] = useState({
    title: '',
    name: '',
    content: '',
    password: '',
  });

  const handleInputChange = (name, value) => {
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const inputFields = [
    { label: '성함', id: 'name', name: 'name', value: postData.name, onChange: (event) => handleNameChange(event.target.value) },
    { label: '주민등록번호', value: residentNum, onChange: (event) => handleResidentNumChange(event.target.value), placeholder: '주민등록번호를 입력해주세요.', className: 'ResidentNumInput' },
    { label: '자택 연락처', value: homeTelNum, onChange: (event) => handleHomeTelNumChange(event.target.value), placeholder: '자택 연락처를 입력해주세요.', className: 'homeNumInput' },
    { label: '휴대폰 연락처', value: mobileNum, onChange: (event) => handleMobileNumChange(event.target.value), placeholder: '휴대폰 연락처를 입력해주세요.', className: 'PhoneNumInput' },
    { label: '등록지 주소', value: registrationAddress, onChange: (event) => handleRegistrationAddressChange(event.target.value), placeholder: '등록지 주소를 입력해주세요.', className: 'registrationAddressInput' },
    { label: '거주지 주소', value: residenceAddress, onChange: (event) => handleResidenceAddressChange(event.target.value), placeholder: '거주지 주소를 입력해주세요.', className: 'residenceAddressInput' },

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
              value={inputFields[0]['value']}
              onChange={inputFields[0]['onChange']}
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
              value={inputFields[1]['value']}
              onChange={inputFields[1]['onChange']}
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
              value={inputFields[2]['value']}
              onChange={inputFields[2]['onChange']}
            />
          </InputInnerGroup>
          <InputInnerGroup key={inputFields[3]['id']}>
            <InputLabel htmlFor={inputFields[3]['id']}>{inputFields[3]['label']}</InputLabel>
            <InputField
              type="text"
              id={inputFields[3]['id']}
              name={inputFields[3]['name']}
              value={inputFields[3]['value']}
              onChange={inputFields[3]['onChange']}
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
              value={inputFields[4]['value']}
              onChange={inputFields[4]['onChange']}
            />
          </InputInnerGroup>
          <InputInnerGroup key={inputFields[5]['id']}>
            <InputLabel htmlFor={inputFields[5]['id']}>{inputFields[5]['label']}</InputLabel>
            <InputField
              type="text"
              id={inputFields[5]['id']}
              name={inputFields[5]['name']}
              value={inputFields[5]['value']}
              onChange={inputFields[5]['onChange']}
            />
          </InputInnerGroup>
        </InputGroup>
      </InputForm>
    </ApplicationContainer>
  );
};

export default ApplicationFillPage01;
