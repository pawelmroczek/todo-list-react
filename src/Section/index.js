import { Container, Header, Title, Body } from "./styled";

const Section = ({ header, body, extraContent }) => (
  <Container>
    <Header>
      <Title>{header}</Title>
      {extraContent}
    </Header>
    <Body >{body}</Body>
  </Container>
);

export default Section;
