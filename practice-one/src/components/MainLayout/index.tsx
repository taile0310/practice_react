// Library
import { useShallow } from "zustand/react/shallow";

// React
import { Outlet } from "react-router-dom";
import { FC, ReactElement } from "react";

// Components
import { Alert, ErrorBoundary, Footer, Image, Modal, Navbar } from "..";

// Stores
import { productStore } from "../../stores";
import { alertStore } from "../../stores/AlertStore";

// Type, constants and image
import { TOGGLE } from "../../types";
import { NOTIFY } from "../../constants";
import { Success, Warning } from "../../assets/image";

const MainLayout: FC = (): ReactElement => {
  // Use hooks to get functions
  const { toggle } = productStore(
    useShallow((state) => ({
      toggle: state.toggle,
    }))
  );

  const { isAlertVisible } = alertStore(
    useShallow((state) => ({
      isAlertVisible: state.isAlertVisible,
    }))
  );

  const { message } = alertStore(
    useShallow((state) => ({
      message: state.message,
    }))
  );

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
