import styled from "styled-components";

const Button = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.teal};
  font-weight: 300;
  font-size: 18px;
  transition: 500ms ease-in-out;
  cursor: pointer;

  &:hover {
    filter: brightness(150%);
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.lightgray};
  }

  &:disabled:hover {
    color: lightgray;
    filter: brightness(100%);
  }
`;

export default Button;