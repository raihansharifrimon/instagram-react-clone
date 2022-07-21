import React from "react";

function DefaultLayout({ children }) {
  return (
    <div>
      <h1>header</h1>
      {children}
      <h1>footer</h1>
    </div>
  );
}

export default DefaultLayout;
