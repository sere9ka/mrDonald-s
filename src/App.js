import React from "react";
import { NavBar } from "./components/navbar-components";
import { GlobalStyle } from "./components/styles/globalStyle";
import { Menu } from "./components/menu-component/menu-components";
import { ModalItem } from "./components/modal-components/modal";
import { Order } from "./components/order-component/order-component";
import { useOpenItem } from "./components/Hooks/useOpenItem";
import { useOrders } from "./components/Hooks/useOrders";

function App() {
  const openItem = useOpenItem()
  const orders = useOrders()
  return (
    <>
    <GlobalStyle />
    <NavBar />
    <Order {...orders} {...openItem}/>
    <Menu {...openItem}/>
    { openItem.openItem && <ModalItem {...openItem} {...orders}/> }
    </>
  );
}

export default App;
