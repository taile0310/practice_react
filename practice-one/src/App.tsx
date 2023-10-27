// CSS
import "./App.css";

// React Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Layout
import MainLayout from "./layouts/MainLayout";

// Page
import { Home } from "./pages";

//Router
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
