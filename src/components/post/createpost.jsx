// CreatePost.js
import React from "react";
import { PostContainer, PostHeaderContainer,InputInnerGroup,InputGroup, StyledP, Form, InputLabel, InputField, TextArea, SubmitButton } from "./createpost.style";

function CreatePost() {
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
                    <InputField type="text" id="title" name="title" />
                </InputInnerGroup>
                <InputInnerGroup>
                    <InputLabel htmlFor="name">성함</InputLabel>
                    <InputField type="text" id="name" name="name" />
                </InputInnerGroup>
            </InputGroup>

          <InputLabel htmlFor="content">게시물 내용</InputLabel>
          <TextArea id="content" name="content"></TextArea>

          <SubmitButton type="submit">작성</SubmitButton>
        </Form>
      </PostContainer>
    </>
  );
}

export default CreatePost;
