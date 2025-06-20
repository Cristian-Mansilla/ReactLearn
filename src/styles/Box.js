import styled, { css } from 'styled-components';

export const Box = styled.div`
    width: 200px;
    height: 100px;
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
`;