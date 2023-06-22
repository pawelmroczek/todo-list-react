import { NavLink } from "react-router-dom/cjs/react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  color:white;
  text-decoration:none;
  font-weight:300;
  font-size:20px;


  &.active{
    font-weight:700;
    color:white;
  }
`

export const StyledNavigation = styled.nav`
  color: white;
  width:100%;
  display:flex;
  justify-content:center;
  background-color:${({theme})=>theme.colors.teal};
  padding:5px;
`

export const StyledList = styled.ul`
  display:flex;
  gap:40px;
  list-style: none;;
`