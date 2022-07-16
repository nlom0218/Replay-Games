import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 20px 40px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  background-color: ${(props) => props.theme.headerBackgroundColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Shadows Into Light", cursive;
  letter-spacing: 2px;
  transition: background-color ease-in 0.3s;
`;

const Name = styled.div`
  font-size: 20px;
  span:first-child {
    color: ${(props) => props.theme.redColor};
    transition: color ease-in 0.3s;
  }
`;

const List = styled.ul`
  display: flex;
  li:not(nht-last-chlid) {
    margin-left: 10px;
  }
`;

const Header = () => {
  return (
    <Container>
      <Name>
        <span>RE:PLAY</span>
        <span> Games</span>
      </Name>
      <nav>
        <List>
          <li>About</li>
          <li>What</li>
          <li>How</li>
          <li>Who</li>
          <li>Play</li>
        </List>
      </nav>
    </Container>
  );
};

export default Header;
