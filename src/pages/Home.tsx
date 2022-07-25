import styled from "styled-components";
import Intro from "../components/Home/Intro";

const Container = styled.div`
  background-color: rgb(235, 222, 251);
`;

const Home = () => {
  return (
    <Container>
      <Intro />
    </Container>
  );
};

export default Home;
