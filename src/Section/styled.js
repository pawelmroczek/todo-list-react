import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({theme})=>theme.sectionBackgroundColor};
  padding: 0px;
  box-shadow: 0px 0px 18px -11px rgba(66, 68, 90, 1);
  margin-top: 10px;
`;

export const Header = styled.header`
  padding: 1px 10px 0px;
  border-bottom: ${({ theme }) => theme.borderBottomLine};
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.media.phone}px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  padding-left: 10px;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
  background-color: ${({theme})=>theme.sectionBackgroundColor}; 
`;
