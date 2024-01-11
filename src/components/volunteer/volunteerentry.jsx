import React from "react"
import {Link} from 'react-router-dom';
import { StyledLinkButton ,VolunteerContainer, VolunteerBoxContainer, VolunteerBox, StyledP, VolunteerHeader } from './volunteerentry.style'

function VolunteerEntry(){


    return (
        <VolunteerContainer>
            <VolunteerHeader>
                <StyledP>안녕하세요</StyledP>
                <StyledP>노인 봉사 신청을 위한 이력서를</StyledP>
                <StyledP>작성, 조회하실 수 있는 화면입니다.</StyledP>
            </VolunteerHeader>
            <VolunteerBoxContainer>
            <VolunteerBox>
                    <StyledP>봉사 신청을 위한 이력서를</StyledP><br />
                    <StyledP> 작성하시려면 작성 버튼을 눌러주세요</StyledP>
                    <StyledLinkButton to="/volunteerwrite">작성</StyledLinkButton>
            </VolunteerBox>
            <VolunteerBox>
                    <StyledP>봉사 신청 이력서를</StyledP><br />
                    <StyledP> 조회하시려면 조회 버튼을 눌러주세요</StyledP>
                    <StyledLinkButton to="/volunteerboard">조회</StyledLinkButton>
            </VolunteerBox>

            </VolunteerBoxContainer>

        </VolunteerContainer>
    )
}
export default VolunteerEntry;