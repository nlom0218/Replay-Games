import React, { ReactNode } from "react";
import styled from "styled-components";
import DarkMode from "./DarkMode";
import Header from "./Header";

interface IProps {
  children: ReactNode;
}

const Container = styled.div`
  /* margin-top: 80px;
  margin-top: 5rem; */
`;

const DefaultLayout = ({ children }: IProps) => {
  return (
    <React.Fragment>
      <Header />
      <Container>{children}</Container>
    </React.Fragment>
  );
};

export default DefaultLayout;
