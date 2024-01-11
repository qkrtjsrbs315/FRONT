import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLinkButton = styled(Link)`
    text-decoration: none;
    background-color: #3498db; /* Add your preferred button color */
    padding : 10px 20px;
    color: white;
    border-radius: 5px;
    font-size: 25px;
    margin-top: 20px;
    cursor: pointer;
    transition: background-color 0.3s;
    width: calc(200px * var(--screen-ratio));
    height: calc(50px * var(--screen-ratio));
    text-align : center;
    display: flex;
    justify-content : center;
    align-items : center;

    &:hover {
        background-color: #2980b9; /* Add your preferred button hover color */
    }
`;