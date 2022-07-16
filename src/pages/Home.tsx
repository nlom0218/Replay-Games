import * as React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.div`
  height: 200vh;
`;

const Home = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default Home;
