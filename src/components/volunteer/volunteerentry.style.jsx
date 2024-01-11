import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const VolunteerContainer = styled.div`
    width: calc(1100px * var(--screen-ratio)); 
    /*크기 자동 조정*/
    height: calc(500px * var(--screen-ratio)); 
    /*크기 자동 조정*/
    background-color : #DADADA;
    margin : 30px;

    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;


`
export const StyledP = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
`;
export const VolunteerBox = styled.div`
    width: calc(500px * var(--screen-ratio)); 
    /*크기 자동 조정*/
    height: calc(200px * var(--screen-ratio)); 
    /*크기 자동 조정*/
    background-color : white;
    margin : 30px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`
export const VolunteerHeader = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`
export const VolunteerBoxContainer = styled.div`

    display : flex;
    justify-content : center;
    align-items : center;
`

export const StyledLinkButton = styled(Link)`
    text-decoration: none;
    padding: 10px 20px;
    background-color: #3498db; /* Add your preferred button color */
    color: white;
    border-radius: 5px;
    font-size: 16px;
    margin-top: 10px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #2980b9; /* Add your preferred button hover color */
    }
`;