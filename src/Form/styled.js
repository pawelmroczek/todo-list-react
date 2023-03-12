import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  padding: 15px;
  justify-content: space-around;


  @media (max-width: ${({ theme }) => theme.media.phone}px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
  }
`;

export const Input = styled.input`
  width: 83%;
  font-size: 20px;
  padding: 5px;
  border: solid rgb(220, 220, 220) 1px;
  border-radius: 1px;
  flex-shrink: 3;

  @media (max-width: ${({ theme }) => theme.media.phone}px) {
    width: 100%;
    
    margin: 5px 15px;
    padding: 5px 0px 5px 1px;
  }
`;

export const Button = styled.button`
  color: white;
  background-color: teal;
  border: none;
  padding: 10px;
  font-size: 20px;
  font-weight: 300;
  margin-left: 5px;
  transition: 500ms;
  flex-shrink:0;

  &:hover {
    font-weight: 400;
    transform: scale(1.1);
    background-color: rgb(4, 187, 187);
  }

  @media (max-width: ${({ theme }) => theme.media.phone}px){
    width: 100%;
    margin-left: 0px;
  }
`;
