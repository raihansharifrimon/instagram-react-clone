import React from "react";
import "./DefaultLayout.scss";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <div className="main">
          {children}
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default DefaultLayout;
