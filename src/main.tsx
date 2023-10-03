import React from "react";
import ReactDOM from "react-dom/client";
import DemoTSX from "./components/DemoTSX";
import DemoComponent from "./components/DemoComponent";
import Gallery from "./components/DemoUseState";
import RenderList from "./components/DemoRenderList";
import FormLogin from "./components/DemoFormLogin";
import DemoUseEffect from "./components/DemoUseEffect";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <DemoTSX /> */}
    {/* <DemoComponent /> */}
    {/* <Gallery /> */}
    {/* <RenderList /> */}
    {/* <FormLogin /> */}
    <DemoUseEffect />
  </React.StrictMode>
);
