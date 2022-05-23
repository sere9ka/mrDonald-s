import React from "react";
import { NavBar } from "./components/navbar-components";
import { GlobalStyle } from "./components/styles/globalStyle";
import { Menu } from "./components/menu-component/menu-components";
import { ModalItem } from "./components/modal-components/modal";

function App() {
  const [openItem, setOpenItem] = React.useState(null)

  return (
    <>
    <GlobalStyle />
    <NavBar />
    <Menu 
      setOpenItem={setOpenItem}
    />
    <ModalItem openItem={openItem} setOpenItem={setOpenItem}/>
    </>
  );
}

export default App;
