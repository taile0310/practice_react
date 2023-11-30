// Library
import { useShallow } from "zustand/react/shallow";

// React
import { Outlet } from "react-router-dom";
import { FC, ReactElement } from "react";

// Components
import {
  Alert,
  ErrorBoundary,
  Footer,
  Image,
  Modal,
  Navbar,
} from "../components";

// Stores
import { useToggleStore } from "../stores";
import { useAlertStore } from "../stores/useAlertStore";

// Type, constants and image
import { TOGGLE } from "../types";
import { NOTIFY } from "../constants";
import { Success, Warning } from "../assets/image";

const MainLayout: FC = (): ReactElement => {
  // Use hooks to get functions
  const { toggle } = useToggleStore(
    useShallow((state) => ({
      toggle: state.toggle,
    }))
  );

  const { isAlertVisible } = useAlertStore(
    useShallow((state) => ({
      isAlertVisible: state.isAlertVisible,
    }))
  );

  const { message } = useAlertStore(
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
