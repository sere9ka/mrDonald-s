import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  p {
    padding: 0;
    margin: 0;
  }
  button {
    cursor: pointer;
  }
  input, button {
    font-family: inherit;
  }
`;