import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import router from "../router";
import { colors } from "../styles";

interface IItemProps {
  isHere: boolean;
}

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 20px 40px;
  padding: 1.25rem 2.5rem;
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px; */
  background-color: rgb(242, 234, 251);
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 2px;
  letter-spacing: 0.125rem;
  z-index: 1;
`;

const Name = styled.div`
  font-size: 1.5em;
  font-size: 1.5rem;
  font-weight: 700;
  span:first-child {
    color: ${colors.redColor};
    margin-right: 10px;
    margin-right: 0.625rem;
  }
`;

const List = styled.ul`
  display: flex;
  li:not(nht-last-chlid) {
    margin-left: 10px;
    margin-left: 0.625rem;
  }
`;

const Item = styled.li<IItemProps>`
  a {
    font-weight: 500;
    color: ${(props) => (props.isHere ? colors.redColor : colors.textColor)};
    :hover {
      color: ${colors.redColor};
    }
    transition: color 0.3s ease;
  }
`;

const navListArr = [
  { name: "About", pathname: router.home },
  { name: "What", pathname: router.what },
  { name: "How", pathname: router.how },
  { name: "Who", pathname: router.who },
  { name: "Play", pathname: router.play },
];

const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Container>
      <Name>
        <span>RE:PLAY</span>
        <span>Games</span>
      </Name>
      <nav>
        <List>
          {navListArr.map((item, index) => {
            return (
              <Item key={index} isHere={item.pathname === pathname}>
                <Link to={item.pathname}>{item.name}</Link>
              </Item>
            );
          })}
        </List>
      </nav>
    </Container>
  );
};

export default Header;
