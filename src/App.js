import React from "react";
import { NavBar } from "./components/navbar-components";
import { GlobalStyle } from "./components/styles/globalStyle";
import { Menu } from "./components/menu-component/menu-components";

function App() {
  return (
    <>
    <GlobalStyle />
    <div className="App">
      <NavBar />
      <Menu />
    </div>
    </>
  );
}

export default App;
