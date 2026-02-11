import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

interface ButtonProps {
  $primary?: boolean;
}

const pulse = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
`;

export const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
`;

//Estilizando um componente com js no styled components
export const Button = styled.button<ButtonProps>`
  background: ${({ theme }) => theme.colors.backgroundColor};
  color: ${({ theme }) => theme.colors.primary};

  ${({ $primary }) =>
    $primary &&
    css`
      background: ${({ theme }) => theme.colors.primary};
      color: white;
    `}

  font-size: 1em;
  margin: 1em 0.5rem 1rem 0;
  padding: 5px;
  width: 30%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:hover {
    background: white;
    color: ${({ theme }) => theme.colors.primary};
    animation: ${pulse} 0.6s ease-in-out;
  }

  &::before {
    content: "👍";
    display: inline-block;
    margin-right: 0.5rem;
  }
`;

export const RoundedButton = styled(Button)`
  border-radius: 20px;
  padding: 0.5em 1.5em;
  font-weight: bold;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.title};
  text-decoration: none;
`;

export const Article = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 20px;

  .category {
    font-size: 13px;
    margin: 20px 0;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
`;
