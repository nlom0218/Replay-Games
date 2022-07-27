import React, { ReactNode } from "react";
import { useLocation } from "react-router-dom";
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
  const { pathname } = useLocation();

  if (pathname === "/mission") {
    return <Container>{children}</Container>;
  }

  return (
    <React.Fragment>
      <Header />
      <Container>{children}</Container>
    </React.Fragment>
  );
};

export default DefaultLayout;
