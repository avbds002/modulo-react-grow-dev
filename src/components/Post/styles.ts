import styled, { css } from "styled-components";

interface ButtonProps {
  primary?: boolean;
}

export const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
`;

//Estilizando um componente com js no styled components
export const Button = styled.button<ButtonProps>`
  ${({ primary }) => css`
    background: ${primary ? "#3295b4" : "white"};
    color: ${primary ? "white" : "#3295b4"};
  `}
  font-size: 1em;
  margin: 1em 0.5rem 1rem 0;
  border: 2px solid #3295b4;
  cursor: pointer;
`;
