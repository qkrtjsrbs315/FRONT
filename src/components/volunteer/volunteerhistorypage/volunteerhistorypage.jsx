// CreatePost.js
//cors뜸 일단 보류
import React, { useState } from "react";
import axios from "axios";
import {
  PostContainer,
  PostHeaderContainer,
  InputInnerGroup,
  InputGroup,
  StyledP,
  Form,
  InputLabel,
  InputField,
  TextArea,
  SubmitButton,
  PasswordContainer,
  ButtonGroup
} from "./volunteerhistorypage.style";

function VolunteerHistoryPage() {
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    password: "",
    name: ""
  });

  const handleCreatePost = async () => {

  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <PostContainer>
        <PostHeaderContainer>
          <StyledP>노인 봉사 신청 이력서 작성 화면입니다.</StyledP>
        </PostHeaderContainer>
        <Form>
          <InputGroup>
            <InputInnerGroup>
              <InputLabel htmlFor="title">성함</InputLabel>
              <InputField
                type="text"
                id="title"
                name="title"
                value={postData.title}
                onChange={handleInputChange}
              />
            </InputInnerGroup>
            <InputInnerGroup>
              <InputLabel htmlFor="name">전화번호</InputLabel>
              <InputField
                type="text"
                id="name"
                name="name"
                value={postData.name}
                onChange={handleInputChange}
              />
            </InputInnerGroup>
          </InputGroup>

          <InputLabel htmlFor="content">지금까지 하신 봉사 활동</InputLabel>
          <TextArea
            id="content"
            name="content"
            value={postData.content}
            onChange={handleInputChange}
          ></TextArea>
          <InputLabel htmlFor="content">선호하시는 봉사 활동</InputLabel>
          <TextArea
            id="content"
            name="content"
            value={postData.content}
            onChange={handleInputChange}
          ></TextArea>
          <InputLabel htmlFor="content">선호하시는 지역</InputLabel>
          <InputField
                type="text"
                id="name"
                name="name"
                value={postData.name}
                onChange={handleInputChange}
              />
          
          <PasswordContainer>
              <InputInnerGroup>
                  <InputLabel htmlFor="password">비밀번호</InputLabel>
                  <InputField
                    type="text"
                    id="password"
                    name="password"
                    value={postData.password}
                    onChange={handleInputChange}
                  />
                </InputInnerGroup>
          </PasswordContainer>

        <ButtonGroup>
        <SubmitButton type="button" onClick={handleCreatePost}>
            삭제
          </SubmitButton>
          <SubmitButton type="button" onClick={handleCreatePost}>
            작성
          </SubmitButton>
        </ButtonGroup>
        </Form>
      </PostContainer>
    </>
  );
}

export default VolunteerHistoryPage;
