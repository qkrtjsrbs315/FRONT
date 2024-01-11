import React from "react";
import { HealthBoardContainer, HealthBoardHeaderContainer, GridInfoContainer, GridItem, StyledP, ShortLine, LongLine, StyledLink } from "./healthboard.style";
import { arthritisData } from "../../sick_package/arthritis";
import { smokingData } from "../../sick_package/smoking"
import { dementiaData } from "../../sick_package/dementia";
import { diabetesData } from '../../sick_package/diabetes';
import { highbloodData } from '../../sick_package/high_blood';
import { influenzaData } from '../../sick_package/influenza';
import { osteoporosisData } from '../../sick_package/osteoporosis';
import { pneumoniaData } from '../../sick_package/pneumonia';
import { drinkingData } from "../../sick_package/drinking";
import { useParams } from "react-router-dom";


function HealthBoardDetail(){
    const {id} = useParams();
    const data = [
        { id: 1, ...arthritisData },
        { id: 2, ...smokingData },
        { id: 3, ...dementiaData },
        { id: 4, ...diabetesData },
        { id: 5, ...highbloodData },
        { id: 6, ...influenzaData },
        { id: 7, ...osteoporosisData },
        { id: 8, ...pneumoniaData },
        { id: 9, ...drinkingData }
    ]
    const selectedData = data.find(item => item.id === parseInt(id));

    return(
        <HealthBoardContainer>
            <HealthBoardHeaderContainer>
                <StyledP>{selectedData.title}</StyledP>
                <ShortLine />
            </HealthBoardHeaderContainer>
            <StyledP>{selectedData.content}</StyledP>
        </HealthBoardContainer>
    )
}
export default HealthBoardDetail;