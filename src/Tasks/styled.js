import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  width: 95%;
  padding: 0;
`;

export const Item = styled.li`
  border-bottom: ${({ theme }) => theme.borderBottomLine};
  padding: 5px;
  font-size: 17px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  flex-shrink: 0;
  width: 37px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 500ms ease-in-out;
  cursor: pointer;

  ${({ toggle }) =>
    toggle &&
    css`
      background-color: rgb(27, 134, 34);
      color: white;
      font-size: 25px;

      &:hover {
        background-color: rgb(34, 170, 43);
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: rgb(240, 47, 68);

      &:hover {
        background-color: rgb(165, 3, 22);
      }
    `}
`;

export const Content = styled.div`
  text-align: left;
  flex-grow: 1;
  margin-left: 5px;

  ${({done})=>done && css`
  text-decoration:line-through;
  `}
`;
