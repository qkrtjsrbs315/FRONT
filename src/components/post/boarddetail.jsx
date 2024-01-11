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
  PasswordContainer
} from "./createpost.style";

function BoardDetail() {
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    password: "",
    name: ""
  });

  const handleCreatePost = async () => {
    try {
      const response = await axios.get("/api/posts", postData);
      console.log("API 응답:", response.data);

      // 성공적인 응답 후의 동작을 추가하세요.

    } catch (error) {
      console.error("API 요청 중 오류:", error);
    }
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
          <StyledP>게시글 작성</StyledP>
        </PostHeaderContainer>
        <Form>
          <InputGroup>
            <InputInnerGroup>
              <InputLabel htmlFor="title">제목</InputLabel>
              <InputField
                type="text"
                id="title"
                name="title"
                value={postData.title}
                onChange={handleInputChange}
              />
            </InputInnerGroup>
            <InputInnerGroup>
              <InputLabel htmlFor="name">성함</InputLabel>
              <InputField
                type="text"
                id="name"
                name="name"
                value={postData.name}
                onChange={handleInputChange}
              />
            </InputInnerGroup>
          </InputGroup>

          <InputLabel htmlFor="content">게시물 내용</InputLabel>
          <TextArea
            id="content"
            name="content"
            value={postData.content}
            onChange={handleInputChange}
          ></TextArea>
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

          <SubmitButton type="button" onClick={handleCreatePost}>
            작성
          </SubmitButton>
        </Form>
      </PostContainer>
    </>
  );
}

export default BoardDetail;