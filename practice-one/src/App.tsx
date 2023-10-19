import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import { Home } from "./pages";
import { routers } from "./routers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
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
