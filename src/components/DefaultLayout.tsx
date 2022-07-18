import React, { ReactNode } from "react";
import styled from "styled-components";
import DarkMode from "./DarkMode";
import Header from "./Header";

interface IProps {
  children: ReactNode;
  darkMode: boolean;
  setDarkMode: Function;
}

const Container = styled.div`
  /* margin-top: 80px;
  margin-top: 5rem; */
  padding: 0px 40px;
  padding: 0rem 2.5rem;
`;

const DefaultLayout = ({ children, darkMode, setDarkMode }: IProps) => {
  return (
    <React.Fragment>
      <Header />
      <Container>{children}</Container>
      <DarkMode darkMode={darkMode} setDarMode={setDarkMode} />
    </React.Fragment>
  );
};

export default DefaultLayout;
