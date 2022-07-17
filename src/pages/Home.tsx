import * as React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import DarkMode from "../components/DarkMode";

interface IProps {
  darkMode: boolean;
  setDarMode: Function;
}

const Container = styled.div`
  height: 200vh;
`;

const Home = ({ darkMode, setDarMode }: IProps) => {
  return (
    <Container>
      <Header />
      <DarkMode darkMode={darkMode} setDarMode={setDarMode} />
    </Container>
  );
};

export default Home;
