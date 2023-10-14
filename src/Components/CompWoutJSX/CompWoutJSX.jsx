import React from "react";

function CompWoutJSX() {
  //return React.createElement("HTML Tag" ,optional properties ,children of HTML Tag )
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      {id: "headerOner", class: "header-one"},
      "Hello IoT, This is a BBBBBBBB JSX Component!"
    )
  );
}

export default CompWoutJSX;
