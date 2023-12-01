// CSS
import "./Alert.css";
// React
import { FC, ReactNode, useEffect } from "react";

//Store
import { alertStore } from "../../stores/AlertStore";

// Constants
import { ERROR_MESSAGES, NOTIFY } from "../../constants";
import { useShallow } from "zustand/react/shallow";

// Define props for Alert
type TAlertProps = {
  children: ReactNode;
};

const Alert: FC<TAlertProps> = ({ children }) => {
  // Use hooks to get functions
  const { message, isAlertVisible, hideAlert } = alertStore(
    useShallow((state) => ({
      message: state.message,
      isAlertVisible: state.isAlertVisible,
      hideAlert: state.hideAlert,
    }))
  );

  useEffect(() => {
    // Check if the alert is currently visible
    if (isAlertVisible) {
      // Set a timeout to automatically hide the alert after 2000 milliseconds (2 seconds)
      const timeOut = setTimeout(() => {
        hideAlert();
      }, 2000);

      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [isAlertVisible, hideAlert]);

  return (
    <div
      className={`font-family alert ${isAlertVisible && "show"} ${
        message === ERROR_MESSAGES.FETCH
          ? "alert-error"
          : message === NOTIFY.EMPTY
          ? "alert-warning"
          : "alert-success"
      }`}>
      <p className="alert-content">
        {children}
        {message}
      </p>
    </div>
  );
};

export default Alert;
