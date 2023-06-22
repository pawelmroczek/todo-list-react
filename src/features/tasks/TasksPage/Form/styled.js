import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-around;
  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
  }
`;

export const Button = styled.button`
  color: white;
  background-color: ${({ theme }) => theme.colors.teal};
  border: none;
  padding: 10px;
  font-size: 20px;
  font-weight: 300;
  margin-left: 25px;
  transition: 500ms;
  flex-shrink: 0;

  &:hover {
    font-weight: 400;
    transform: scale(1.1);
    filter: brightness(130%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    width: 100%;
    margin-left: 0px;
  }
`;
