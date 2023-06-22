import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  font-size: 20px;
  padding: 7px;
  border: solid ${({ theme }) => theme.colors.alto} 1px;
  border-radius: 1px;
  flex-shrink: 3;

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    width: 100%;
    margin: 5px 15px;
    padding: 5px 0px 5px 1px;
  }
`;

export default Input;
