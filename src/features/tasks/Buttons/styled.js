import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 20px;
`;

export const Button = styled.button`
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
