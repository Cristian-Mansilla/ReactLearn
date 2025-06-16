import styled from "styled-components";

export const Input = styled.input.attrs((props) => ({
  type: "password",
  maxLength: props.myMaxLength || 5,
}))`
    background-color: blue;
`;
