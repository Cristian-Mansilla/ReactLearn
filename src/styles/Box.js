import styled, { css } from 'styled-components';
import { desktop, mobile } from './Responsive';

export const Box = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 10px;
    margin: 20px;
    border-radius: 5px;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${({ isRight }) => isRight ? 
    css`
    background-color:green;` 
    :
    css`
    background-color:red;
    `};
    ${desktop} {
        width: 100%;
    };
`;