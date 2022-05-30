import React from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
import { NavBar } from "./components/navbar-components";
import { GlobalStyle } from "./components/styles/globalStyle";
import { Menu } from "./components/menu-component/menu-components";
import { ModalItem } from "./components/modal-components/modal";
import { Order } from "./components/order-component/order-component";
import { useOpenItem } from "./components/Hooks/useOpenItem";
import { useOrders } from "./components/Hooks/useOrders";
import { useAuth } from "./components/Hooks/useAuth";
import { useTitle } from "./components/Hooks/useTitle";
import { useRealBase } from "./components/Hooks/useRealTimeDB";


const firebaseConfig = {
  apiKey: "AIzaSyBBJaBoRQl_gqvA-JuMSJkMg503PVyWPPs",
  authDomain: "mrdonalds-glo.firebaseapp.com",
  databaseURL: "https://mrdonalds-glo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mrdonalds-glo",
  storageBucket: "mrdonalds-glo.appspot.com",
  messagingSenderId: "931254800053",
  appId: "1:931254800053:web:a87dd5dded025212ca78fc",
  measurementId: "G-G67STVF912"
};

firebase.initializeApp(firebaseConfig)

function App() {
  const auth = useAuth(firebase.auth)
  const openItem = useOpenItem()
  const orders = useOrders()
  const database= firebase.database()
  const dbMenu = useRealBase(database).db
  console.log(dbMenu);

  useTitle(openItem.openItem)
  return (
    <>
    <GlobalStyle />
    <NavBar {...auth}/>
    <Order 
      database={database}
      {...orders} 
      {...auth} 
      {...openItem}/>
    <Menu {...openItem} dbMenu={dbMenu}/>
    { openItem.openItem && <ModalItem {...openItem} {...orders}/> }
    </>
  );
}

export default App;
