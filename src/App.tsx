import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import router from "./router";
import DefaultLayout from "./components/DefaultLayout";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <DefaultLayout>
        <Routes>
          <Route path={router.home} element={<Home />} />
        </Routes>
      </DefaultLayout>
    </React.Fragment>
  );
}

export default App;
