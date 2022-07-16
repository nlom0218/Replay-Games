import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import router from "./router";
import { darkTheme, GlobalStyle, ligthTheme } from "./styles";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={false ? darkTheme : ligthTheme}>
      <GlobalStyle />
      <Routes>
        <Route path={router.home} element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
