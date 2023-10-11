import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu />
    </BrowserRouter>
  );
}

export default App;
