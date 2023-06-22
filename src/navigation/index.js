import { StyledNavLink, StyledNavigation, StyledList } from "./styled";

const Navigation = () => (
  <StyledNavigation>
    <StyledList>
      <li>
        <StyledNavLink to="/zadania">Zadania</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/autor">O autorze</StyledNavLink>
      </li>
    </StyledList>
  </StyledNavigation>
);

export default Navigation;
