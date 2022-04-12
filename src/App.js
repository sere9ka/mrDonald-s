import React from "react";
import { createGlobalStyle } from "styled-components";
import { NavBar } from "./components/navbar-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    background-color: #f0f0f0;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: black;
  }
  img {
    max-width: 100%;
    height: auto;
  } 
  a {
    text-decoration: none;
    color: inherit;
  }
  h1, h2, h3 {
    font-family: 'Pacifico', cursive;
    padding: 0;
    margin: 0;
  }
  p {
    padding: 0;
    margin: 0;
  }
`;

function App() {
  return (
    <>
    <GlobalStyle />
    <div className="App">
      <NavBar />
    </div>
    </>
    
  );
}

export default App;
