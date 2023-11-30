// React router
import { Outlet } from "react-router-dom";

// Components
import { ErrorBoundary, Footer, Image, Modal, Navbar } from "../components";
import { FC, ReactElement } from "react";
import { useToggleStore } from "../stores";
import { TOGGLE } from "../types";
import Alert from "../components/Alert";
import { useAlertStore } from "../stores/useAlertStore";
import { NOTIFY } from "../constants";
import { Success, Warning } from "../assets/image";

const MainLayout: FC = (): ReactElement => {
  // Use hooks to get functions
  const { toggle } = useToggleStore();
  const { isAlertVisible } = useAlertStore();
  const { message } = useAlertStore();

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
      {isAlertVisible === true && (
        <Alert
          children={
            <Image
              src={message === NOTIFY.EMPTY ? `${Warning}` : `${Success}`}
            />
          }
        />
      )}
    </div>
  );
};

export default MainLayout;
