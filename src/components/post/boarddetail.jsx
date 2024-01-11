// CreatePost.js
//cors뜸 일단 보류
//update는 보류


import React, { useEffect, useState } from "react";
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
  ButtonContainer
} from "./boarddetail.style";
import { Navigate, useNavigate, useParams } from "react-router-dom";

function BoardDetail() {
  const navigate = useNavigate();
  const [password,setPassword] = useState({
    password : "1234"
  })
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    name: ""
  });
  const [BoardDetailData, setBoardDetailData] = useState({
    title: "",
    content: "",
    name: ""
  });
  const params = useParams();
  useEffect(()=>{
    handleBoardDetail()
  },[]);

  const handleBoardDetail = async () => {
    try {
      const response = await axios.get(`/api/posts/${params.id}`, postData);
      console.log("API 응답:", response.data);
      // 성공적인 응답 후의 동작을 추가하세요.
      setBoardDetailData(response.data);
    } catch (error) {
      console.error("API 요청 중 오류:", error);
    }
  };
  const handleBoardDetailUpdate = async () => {
    try {
      const response = await axios.patch(`/api/posts/${params.id}`, {
        data: password,  // 비밀번호를 요청 본문에 포함
      });

      alert("삭제되었습니다!");
      navigate("/board");
      console.log("API 응답:", response);

      // 성공적인 응답 후의 동작을 추가하세요.

    } catch (error) {
      console.error("API 요청 중 오류:", error);
      alert("에러 발생");
    }
  };
  const handleBoardDetailDelete = async () => {
    try {
      const response = await axios.delete(`/api/posts/${params.id}`, {
        data: password,  // 비밀번호를 요청 본문에 포함
      });

      alert("삭제되었습니다!");
      navigate("/board");
      console.log("API 응답:", response);

      // 성공적인 응답 후의 동작을 추가하세요.

    } catch (error) {
      console.error("API 요청 중 오류:", error);
      alert("에러 발생");
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
                value={BoardDetailData.title}
                onChange={handleInputChange}
              />
            </InputInnerGroup>
            <InputInnerGroup>
              <InputLabel htmlFor="name">성함</InputLabel>
              <InputField
                type="text"
                id="name"
                name="name"
                value={BoardDetailData.name}
                onChange={handleInputChange}
              />
            </InputInnerGroup>
          </InputGroup>

          <InputLabel htmlFor="content">게시물 내용</InputLabel>
          <TextArea
            id="content"
            name="content"
            value={BoardDetailData.content}
            onChange={handleInputChange}
          ></TextArea>
          <PasswordContainer>
              <InputInnerGroup>
                  <InputLabel htmlFor="password">비밀번호</InputLabel>
                  <InputField
                    type="text"
                    id="password"
                    name="password"
                value={BoardDetailData.password}
                    onChange={handleInputChange}
                  />
                </InputInnerGroup>
          </PasswordContainer>
          <ButtonContainer>
            <SubmitButton type="button" onClick={handleBoardDetailUpdate}>
              수정
            </SubmitButton>
            <SubmitButton type="button" onClick={handleBoardDetailDelete}>
              삭제
            </SubmitButton>
          </ButtonContainer>
        </Form>
      </PostContainer>
    </>
  );
}

export default BoardDetail;
