import styled, {css} from "styled-components";
import flecha from "../assets/imgs/flecha.png"

export const Row = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  max-width: 1200px;
  margin: auto;
  img {
    width: 100%;
  }
`;

export const Grid2 = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-content: left;
  img {
    width: 70%;
  }
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 50px;
  ${({ active }) =>
    active
      ? "border: 4px solid magenta; z-index: 1"
      : "border: 4px solid transparent"}
`;

const Btn = css`
  display:inline-block;
  cursor: pointer;
  background-image: url(${flecha});
  background-size: 100% 100%;
  width: 40px;
  height: 40px;
`;

export const BtnLeft = styled.span`
  ${Btn};
`;

export const BtnRigth = styled.span`
  ${Btn};
  transform: rotate(180deg) translateY(-1.2px);
  
`;
