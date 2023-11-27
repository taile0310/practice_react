// React router
import { Outlet } from "react-router-dom";

// Components
import { ErrorBoundary, Footer, Modal, Navbar } from "../components";
import { FC, ReactElement } from "react";
import { useToggleStore } from "../stores";
import { TOGGLE } from "../types";

const MainLayout: FC = (): ReactElement => {
  const { toggle } = useToggleStore();
  return (
    <div className="container-page">
      <div
        className={`component-layout font-family ${
          toggle === TOGGLE.ON && "modal-open"
        }`}>
        <ErrorBoundary>
          <Navbar />
        </ErrorBoundary>
        <Outlet />
      </div>
      <div className="mg-footer">
        <Footer />
      </div>
      {toggle === TOGGLE.ON && <Modal />}
    </div>
  );
};

export default MainLayout;
