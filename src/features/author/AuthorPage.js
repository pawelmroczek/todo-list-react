import { Container } from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";
import AboutMe from "./aboutMe";

export default () => (
  <Container>
    <Header header="O autorze" />
    <Section header="Paweł Mroczek" body={<AboutMe/>} />
  </Container>
);
