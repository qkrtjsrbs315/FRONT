
// CreatePost.js
//cors뜸 일단 보류
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
} from "./volunteerhistorywrite.style";

function VolunteerHistoryWritePage() {
    const navigate = useNavigate();

    const [postData, setPostData] = useState({
            password: "",
            preferVolunteer: "",
            preferAddress: "",
            correctVolunteer:false,
            volunteer: "",
            phone: "",
            writer: ""
        
    });

    const handleCreateVolunteerHistory = async () => {
        try {
            const response = await axios.post("/api/volunteers", postData).then((response) => {
                console.log("API 응답:", response.data);
                alert("봉사이력 작성이 완료되었습니다!");
                navigate("/");
            });

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
        console.log(postData)
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
                            <InputLabel htmlFor="writer">성함</InputLabel>
                            <InputField
                                type="text"
                                id="writer"
                                name="writer"
                                onChange={handleInputChange}
                            />
                        </InputInnerGroup>
                        <InputInnerGroup>
                            <InputLabel htmlFor="phone">전화번호</InputLabel>
                            <InputField
                                type="text"
                                id="phone"
                                name="phone"
                                onChange={handleInputChange}
                            />
                        </InputInnerGroup>
                    </InputGroup>

                    <InputLabel htmlFor="volunteer">지금까지 하신 봉사 활동</InputLabel>
                    <TextArea
                        id="volunteer"
                        name="volunteer"
                        onChange={handleInputChange}
                    ></TextArea>
                    <InputLabel htmlFor="preferVolunteer">선호하시는 봉사 활동</InputLabel>
                    <TextArea
                        id="preferVolunteer"
                        name="preferVolunteer"
                        onChange={handleInputChange}
                    ></TextArea>
                    <InputLabel htmlFor="preferAddress">선호하시는 지역</InputLabel>
                    <InputField
                        type="text"
                        id="preferAddress"
                        name="preferAddress"
                        onChange={handleInputChange}
                    />

                    <PasswordContainer>
                        <InputInnerGroup>
                            <InputLabel htmlFor="password">비밀번호</InputLabel>
                            <InputField
                                type="text"
                                id="password"
                                name="password"
                                onChange={handleInputChange}
                            />
                        </InputInnerGroup>
                    </PasswordContainer>

                    <ButtonGroup>
                        <SubmitButton type="button" onClick={handleCreateVolunteerHistory}>
                            작성
                        </SubmitButton>
                    </ButtonGroup>
                </Form>
            </PostContainer>
        </>
    );
}

export default VolunteerHistoryWritePage;