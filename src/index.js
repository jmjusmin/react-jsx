// 1. Import reace and reactDom
import "./style/App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 2. Get a reference to the div with ID root
const el = document.getElementById("root");

// 3.Tell react to take control of the element
const root = ReactDOM.createRoot(el);

// 5. Show the component on the screen
root.render(<App />);
