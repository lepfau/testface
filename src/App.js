import React from "react";
import { HashRouter } from "react-router-dom";
import "./styles/App.css";
import Main from "./pages/Main"

export default function App() {

  return (
    <HashRouter>
  <Main/>
    </HashRouter>
  );
}
