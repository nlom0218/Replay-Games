import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import router from "./router";

function App() {
  return (
    <Routes>
      <Route path={router.home} element={<Home />} />
    </Routes>
  );
}

export default App;
