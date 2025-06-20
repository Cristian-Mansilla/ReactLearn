import styled, {css} from "styled-components";

const BigText = css`
font-size:2em;`;

export const RedText = styled.p`
background-color:red;
${BigText};`;

export const BlueText = styled.p`
background-color:blue;
${BigText};`;