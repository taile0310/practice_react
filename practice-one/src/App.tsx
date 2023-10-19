import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./components/index";
import { routers } from "./routers/Routers";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route element={<MainLayout />}>
          {routers.map((item) => (
            <Route key={item.path} path={item.path} element={item.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
