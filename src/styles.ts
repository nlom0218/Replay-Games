import { createGlobalStyle } from "styled-components";

export const colors = {
  textColor: "rgb(10, 10, 10)",
  lightTextColor: "rgb(80, 80, 80)",
  backgroundColor: "rgb(245, 245, 245)",
  headerBackgroundColor: "rgb(250, 250, 250)",
  redColor: "#d52020",
};

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${colors.backgroundColor};
        color: ${colors.textColor};
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
          font-family: "Noto Sans KR", sans-serif;
    }
    a {
      color: ${colors.textColor};
      text-decoration: none;
    }
    *,
    *:after,
    *:before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
`;
