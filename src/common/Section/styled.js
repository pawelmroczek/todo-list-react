import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0px;
  box-shadow: 0px 0px 18px -11px ${({ theme }) => theme.colors.gunPowder};
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Header = styled.header`
  padding: 1px 10px 0px;
  border-bottom: solid ${({ theme }) => theme.colors.alto} 1px;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  padding-left: 10px;
`;

export const Body = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  background-color: ${({ theme }) => theme.colors.white};
  padding:20px;
  font-size:20px;
`;
