import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Menu from "./components/menu/Menu";
import Card from "./components/common/card/Card";
import Navbar from "./components/common/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Card />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
