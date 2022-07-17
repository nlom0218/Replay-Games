import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import router from "./router";
import { darkTheme, GlobalStyle, lightTheme } from "./styles";
import { ThemeProvider } from "styled-components";

function App() {
  const [darkMode, setDarMode] = React.useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Routes>
        <Route
          path={router.home}
          element={<Home darkMode={darkMode} setDarMode={setDarMode} />}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
