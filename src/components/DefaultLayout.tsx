import React, { ReactNode } from "react";
import DarkMode from "./DarkMode";
import Header from "./Header";

interface IProps {
  children: ReactNode;
  darkMode: boolean;
  setDarkMode: Function;
}

const DefaultLayout = ({ children, darkMode, setDarkMode }: IProps) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <DarkMode darkMode={darkMode} setDarMode={setDarkMode} />
    </React.Fragment>
  );
};

export default DefaultLayout;
