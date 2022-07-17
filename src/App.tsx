import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import router from "./router";
import { darkTheme, GlobalStyle, lightTheme } from "./styles";
import { ThemeProvider } from "styled-components";
import DefaultLayout from "./components/DefaultLayout";

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <DefaultLayout darkMode={darkMode} setDarkMode={setDarkMode}>
        <Routes>
          <Route path={router.home} element={<Home />} />
        </Routes>
      </DefaultLayout>
    </ThemeProvider>
  );
}

export default App;
