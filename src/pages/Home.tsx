import styled from "styled-components";
import Intro from "../components/Home/Intro";
import { colors } from "../styles";
import AboutGroup from "./AboutGroup";

const Container = styled.div``;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 120px 60px;
`;

const Contents = styled.div``;

const GameImage = styled.img``;

const Home = () => {
  return (
    <Container>
      <Intro />
      <AboutGroup />
      <Layout>
        <Contents></Contents>
        <GameImage src="/img/chess.png" />
      </Layout>
    </Container>
  );
};

export default Home;
