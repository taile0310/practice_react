import React from "react";
import ReactDOM from "react-dom/client";
import DemoTSX from "./components/DemoTSX";
import DemoComponent from "./components/DemoComponent";
import Gallery from "./components/DemoUseState";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <DemoTSX /> */}
    {/* <DemoComponent /> */}
    <Gallery />
  </React.StrictMode>
);
