import React from "react";
import { HealthBoardContainer, HealthBoardHeaderContainer, GridInfoContainer, GridItem, StyledP, ShortLine, LongLine, StyledLink, StyledAnchor } from "./healthboard.style";
import { arthritisData } from "../../sick_package/arthritis";
import { smokingData } from "../../sick_package/smoking"
import { dementiaData } from "../../sick_package/dementia";
import { diabetesData } from '../../sick_package/diabetes';
import { highbloodData } from '../../sick_package/high_blood';
import { influenzaData } from '../../sick_package/influenza';
import { osteoporosisData } from '../../sick_package/osteoporosis';
import { pneumoniaData } from '../../sick_package/pneumonia';
import { drinkingData } from "../../sick_package/drinking";


function HealthBoard() {
  const data = [
    {id : 1, ...arthritisData},
    { id: 2, ...smokingData },
    { id: 3, ...dementiaData },
    { id: 4, ...diabetesData },
    { id: 5, ...highbloodData },
    { id: 6, ...influenzaData },
    { id: 7, ...osteoporosisData },
    { id: 8, ...pneumoniaData },
    { id: 9, ...drinkingData}
  ]
  const healthLinkData = [
    { id: 1, title: "보건복지부", link: "https://www.mohw.go.kr/" },
    { id: 2, title: "질병관리청", link: "https://www.kdca.go.kr/" },
    { id: 3, title: "보건복지상담센터", link: "https://www.129.go.kr/" },
    { id: 4, title: "e보건소", link: "https://www.e-health.go.kr/" },
    { id: 5, title: "서울복지포털", link: "https://wis.seoul.go.kr/" },
    { id: 6, title: "예방접종도우미", link: "https://nip.kdca.go.kr/irhp/index.jsp" }
  ];

  return (
    <>
      <HealthBoardContainer>
        <HealthBoardHeaderContainer>
          <StyledP>건강 정보</StyledP>
          <ShortLine/>
        </HealthBoardHeaderContainer>

        <GridInfoContainer>
          {data.map((index) => (
            <GridItem key={index.id}>
              <StyledLink to={`/healthboard/${index.id}`}>
                {index.title}
              </StyledLink>
            </GridItem>
          ))}
        </GridInfoContainer>
        <LongLine/>
        <HealthBoardHeaderContainer>
          <StyledP>보건 관련 정부 포털, 시설 사이트</StyledP>
          <ShortLine/>
        </HealthBoardHeaderContainer>

        <GridInfoContainer>
          {healthLinkData.map((index) => (
            <GridItem key={index.id}>
              <StyledAnchor href={index.link} target="_self">
                {index.title}
              </StyledAnchor>
            </GridItem>
          ))}
        </GridInfoContainer>
      </HealthBoardContainer>
    </>
  );
}

export default HealthBoard;