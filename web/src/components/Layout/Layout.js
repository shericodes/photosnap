import React from "react";
import "../../styles/reset.css";
import "../../styles/global.css";
import "../../styles/typography.css";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
