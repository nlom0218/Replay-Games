import { createGlobalStyle } from "styled-components";

export const colors = {};

export const lightTheme = {
  textColor: "rgb(80, 80, 80)",
  backgroundColor: "rgb(245, 245, 245)",
  headerBackgroundColor: "rgb(250, 250, 250)",
  redColor: "#d52020",
};

export const darkTheme = {
  textColor: "rgb(250, 250, 250)",
  backgroundColor: "rgb(30, 30, 30)",
  headerBackgroundColor: "rgb(40, 40, 40)",
  redColor: "#ff5454",
};

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.textColor};
    }
    a {
      color: ${(props) => props.theme.textColor};
      text-decoration: none;
    }
`;
